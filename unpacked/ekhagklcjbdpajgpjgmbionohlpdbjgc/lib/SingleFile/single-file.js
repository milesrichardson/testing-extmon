!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).singlefile = {}));
})(this, function (e) {
  "use strict";
  const t = "single-file-load-deferred-images-start",
    n = "single-file-load-deferred-images-end",
    r = "single-file-load-deferred-images-keep-zoom-level-start",
    a = "single-file-load-deferred-images-keep-zoom-level-end",
    o = "single-file-load-deferred-images-keep-zoom-level-reset",
    i = "single-file-load-deferred-images-reset",
    s = "single-file-block-cookies-start",
    l = "single-file-block-cookies-end",
    c = "single-file-dispatch-scroll-event-start",
    u = "single-file-dispatch-scroll-event-end",
    h = "single-file-block-storage-start",
    d = "single-file-block-storage-end",
    p = "single-file-load-image",
    m = "single-file-image-loaded",
    g = (e, t, n) => globalThis.addEventListener(e, t, n),
    f = (e) => {
      try {
        globalThis.dispatchEvent(e);
      } catch (e) {}
    },
    b = globalThis.CustomEvent,
    y = globalThis.document,
    w = globalThis.Document,
    k = globalThis.JSON;
  let v;
  function x() {
    return Array.from(v.values());
  }
  function E(e) {
    e.loadDeferredImagesBlockCookies && f(new b(s)),
      e.loadDeferredImagesBlockStorage && f(new b(h)),
      e.loadDeferredImagesDispatchScrollEvent && f(new b(c)),
      e.loadDeferredImagesKeepZoomLevel ? f(new b(r)) : f(new b(t));
  }
  function A(e) {
    e.loadDeferredImagesBlockCookies && f(new b(l)),
      e.loadDeferredImagesBlockStorage && f(new b(d)),
      e.loadDeferredImagesDispatchScrollEvent && f(new b(u)),
      e.loadDeferredImagesKeepZoomLevel ? f(new b(a)) : f(new b(n));
  }
  function S(e) {
    e.loadDeferredImagesKeepZoomLevel ? f(new b(o)) : f(new b(i));
  }
  (v = window._singleFile_fontFaces ? window._singleFile_fontFaces : (window._singleFile_fontFaces = new Map())),
    y instanceof w &&
      (g("single-file-new-font-face", (e) => {
        const t = e.detail,
          n = Object.assign({}, t);
        delete n.src, v.set(k.stringify(n), t);
      }),
      g("single-file-delete-font", (e) => {
        const t = e.detail,
          n = Object.assign({}, t);
        delete n.src, v.delete(k.stringify(n));
      }),
      g("single-file-clear-fonts", () => (v = new Map())));
  var T = Object.freeze({
    __proto__: null,
    getFontsData: x,
    loadDeferredImagesStart: E,
    loadDeferredImagesEnd: A,
    loadDeferredImagesResetZoomLevel: S,
    LOAD_IMAGE_EVENT: p,
    IMAGE_LOADED_EVENT: m
  });
  const C = "[\\x20\\t\\r\\n\\f]",
    R = new RegExp("\\\\([\\da-f]{1,6}" + C + "?|(" + C + ")|.)", "ig");
  function _(e) {
    return e.replace(R, (e, t, n) => {
      const r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    });
  }
  var I = Object.freeze({ __proto__: null, process: _ });
  const z = "single-file-on-before-capture",
    L = "single-file-on-after-capture",
    N = "data-single-file-removed-content",
    P = "data-single-file-hidden-content",
    M = "data-single-file-kept-content",
    O = "data-single-file-hidden-frame",
    U = "data-single-file-preserved-space-element",
    D = "data-single-file-shadow-root-element",
    q = "data-single-file-win-id",
    j = "data-single-file-image",
    F = "data-single-file-poster",
    B = "data-single-file-video",
    H = "data-single-file-canvas",
    V = "data-single-file-movable-style",
    W = "data-single-file-input-value",
    $ = "data-single-file-lazy-loaded-src",
    G = "data-single-file-stylesheet",
    Y = "data-single-file-disabled-noscript",
    Q = "data-single-file-selected-content",
    K = "data-single-file-invalid-element",
    J = "data-single-file-async-script",
    Z = "*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",
    X = ["NOSCRIPT", "DISABLED-NOSCRIPT", "META", "LINK", "STYLE", "TITLE", "TEMPLATE", "SOURCE", "OBJECT", "SCRIPT", "HEAD", "BODY"],
    ee = /^'(.*?)'$/,
    te = /^"(.*?)"$/,
    ne = { regular: "400", normal: "400", bold: "700", bolder: "700", lighter: "100" },
    re = "Page saved with SingleFile",
    ae = "Archive processed by SingleFile",
    oe = "single-file-ui-element",
    ie = "data:,",
    se = (e, t, n) => globalThis.addEventListener(e, t, n),
    le = globalThis.JSON;
  function ce(e) {
    e.querySelectorAll("meta[http-equiv=refresh]").forEach((e) => {
      e.removeAttribute("http-equiv"), e.setAttribute("disabled-http-equiv", "refresh");
    });
  }
  function ue(e, t, n) {
    e.querySelectorAll("noscript:not([" + Y + "])").forEach((e) => {
      e.setAttribute(Y, e.textContent), (e.textContent = "");
    }),
      ce(e),
      e.head && e.head.querySelectorAll(Z).forEach((e) => (e.hidden = !0)),
      e.querySelectorAll("svg foreignObject").forEach((e) => {
        const t = e.querySelectorAll("html > head > " + Z + ", html > body > " + Z);
        t.length && (Array.from(e.childNodes).forEach((e) => e.remove()), t.forEach((t) => e.appendChild(t)));
      });
    const r = new Map();
    let a;
    return (
      t && e.documentElement
        ? (e.querySelectorAll("button button, a a").forEach((t) => {
            const n = e.createElement("template");
            n.setAttribute(K, ""), n.content.appendChild(t.cloneNode(!0)), r.set(t, n), t.replaceWith(n);
          }),
          (a = he(t, e, e.documentElement, n)),
          n.moveStylesInHead &&
            e.querySelectorAll("body style, body ~ style").forEach((e) => {
              const n = Ee(t, e);
              n && ge(e, n) && (e.setAttribute(V, ""), a.markedElements.push(e));
            }))
        : (a = { canvases: [], images: [], posters: [], videos: [], usedFonts: [], shadowRoots: [], markedElements: [] }),
      {
        canvases: a.canvases,
        fonts: x(),
        stylesheets: be(e),
        images: a.images,
        posters: a.posters,
        videos: a.videos,
        usedFonts: Array.from(a.usedFonts.values()),
        shadowRoots: a.shadowRoots,
        referrer: e.referrer,
        markedElements: a.markedElements,
        invalidElements: r
      }
    );
  }
  function he(
    e,
    t,
    n,
    r,
    a = { usedFonts: new Map(), canvases: [], images: [], posters: [], videos: [], shadowRoots: [], markedElements: [] },
    o
  ) {
    if (n.childNodes) {
      Array.from(n.childNodes)
        .filter((t) => t instanceof e.HTMLElement || t instanceof e.SVGElement)
        .forEach((n) => {
          let i, s, l;
          if (
            !r.autoSaveExternalSave &&
            (r.removeHiddenElements || r.removeUnusedFonts || r.compressHTML) &&
            ((l = Ee(e, n)),
            n instanceof e.HTMLElement &&
              r.removeHiddenElements &&
              ((s = ((o || n.closest("html > head")) && X.includes(n.tagName)) || n.closest("details")),
              s || ((i = o || ge(n, l)), i && (n.setAttribute(P, ""), a.markedElements.push(n)))),
            !i)
          ) {
            if (r.compressHTML && l) {
              const e = l.getPropertyValue("white-space");
              e && e.startsWith("pre") && (n.setAttribute(U, ""), a.markedElements.push(n));
            }
            r.removeUnusedFonts &&
              (de(l, r, a.usedFonts),
              de(Ee(e, n, ":first-letter"), r, a.usedFonts),
              de(Ee(e, n, ":before"), r, a.usedFonts),
              de(Ee(e, n, ":after"), r, a.usedFonts));
          }
          !(function (e, t, n, r, a, o, i) {
            if ("CANVAS" == n.tagName)
              try {
                a.canvases.push({ dataURI: n.toDataURL("image/png", "") }),
                  n.setAttribute(H, a.canvases.length - 1),
                  a.markedElements.push(n);
              } catch (e) {}
            if ("IMG" == n.tagName) {
              const t = { currentSrc: o ? ie : (r.loadDeferredImages && n.getAttribute($)) || n.currentSrc };
              if (
                (a.images.push(t),
                n.setAttribute(j, a.images.length - 1),
                a.markedElements.push(n),
                n.removeAttribute($),
                (i = i || Ee(e, n)))
              ) {
                t.size = (function (e, t, n) {
                  let r = t.naturalWidth,
                    a = t.naturalHeight;
                  if (!r && !a) {
                    const o = null == t.getAttribute("style");
                    if ((n = n || Ee(e, t))) {
                      let e,
                        i,
                        s,
                        l,
                        c,
                        u,
                        h,
                        d,
                        p = !1;
                      if ("content-box" == n.getPropertyValue("box-sizing")) {
                        const e = t.style.getPropertyValue("box-sizing"),
                          n = t.style.getPropertyPriority("box-sizing"),
                          r = t.clientWidth;
                        t.style.setProperty("box-sizing", "border-box", "important"),
                          (p = t.clientWidth != r),
                          e ? t.style.setProperty("box-sizing", e, n) : t.style.removeProperty("box-sizing");
                      }
                      (e = ye("padding-left", n)),
                        (i = ye("padding-right", n)),
                        (s = ye("padding-top", n)),
                        (l = ye("padding-bottom", n)),
                        p
                          ? ((c = ye("border-left-width", n)),
                            (u = ye("border-right-width", n)),
                            (h = ye("border-top-width", n)),
                            (d = ye("border-bottom-width", n)))
                          : (c = u = h = d = 0),
                        (r = Math.max(0, t.clientWidth - e - i - c - u)),
                        (a = Math.max(0, t.clientHeight - s - l - h - d)),
                        o && t.removeAttribute("style");
                    }
                  }
                  return { pxWidth: r, pxHeight: a };
                })(e, n, i);
                const r = i.getPropertyValue("box-shadow"),
                  a = i.getPropertyValue("background-image");
                (r && "none" != r) ||
                  (a && "none" != a) ||
                  !(t.size.pxWidth > 1 || t.size.pxHeight > 1) ||
                  ((t.replaceable = !0),
                  (t.backgroundColor = i.getPropertyValue("background-color")),
                  (t.objectFit = i.getPropertyValue("object-fit")),
                  (t.boxSizing = i.getPropertyValue("box-sizing")),
                  (t.objectPosition = i.getPropertyValue("object-position")));
              }
            }
            if ("VIDEO" == n.tagName) {
              const r = n.currentSrc;
              if (r && !r.startsWith("blob:") && !r.startsWith("data:")) {
                const t = Ee(e, n.parentNode);
                a.videos.push({
                  positionParent: t && t.getPropertyValue("position"),
                  src: r,
                  size: { pxWidth: n.clientWidth, pxHeight: n.clientHeight },
                  currentTime: n.currentTime
                }),
                  n.setAttribute(B, a.videos.length - 1);
              }
              if (!n.getAttribute("poster")) {
                const e = t.createElement("canvas"),
                  r = e.getContext("2d");
                (e.width = n.clientWidth), (e.height = n.clientHeight);
                try {
                  r.drawImage(n, 0, 0, e.width, e.height),
                    a.posters.push(e.toDataURL("image/png", "")),
                    n.setAttribute(F, a.posters.length - 1),
                    a.markedElements.push(n);
                } catch (e) {}
              }
            }
            "IFRAME" == n.tagName && o && r.removeHiddenElements && (n.setAttribute(O, ""), a.markedElements.push(n));
            "INPUT" == n.tagName &&
              ("password" != n.type && (n.setAttribute(W, n.value), a.markedElements.push(n)),
              ("radio" != n.type && "checkbox" != n.type) || (n.setAttribute(W, n.checked), a.markedElements.push(n)));
            "TEXTAREA" == n.tagName && (n.setAttribute(W, n.value), a.markedElements.push(n));
            "SELECT" == n.tagName &&
              n.querySelectorAll("option").forEach((e) => {
                e.selected && (e.setAttribute(W, ""), a.markedElements.push(e));
              });
            "SCRIPT" == n.tagName &&
              (n.async &&
                "" != n.getAttribute("async") &&
                "async" != n.getAttribute("async") &&
                (n.setAttribute(J, ""), a.markedElements.push(n)),
              (n.textContent = n.textContent.replace(/<\/script>/gi, "<\\/script>")));
          })(e, t, n, r, a, i, l);
          const c = !(n instanceof e.SVGElement) && pe(n);
          if (c && !n.classList.contains(oe)) {
            const o = {};
            n.setAttribute(D, a.shadowRoots.length),
              a.markedElements.push(n),
              a.shadowRoots.push(o),
              he(e, t, c, r, a, i),
              (o.content = c.innerHTML),
              (o.mode = c.mode);
            try {
              c.adoptedStyleSheets &&
                c.adoptedStyleSheets.length &&
                (o.adoptedStyleSheets = Array.from(c.adoptedStyleSheets).map((e) =>
                  Array.from(e.cssRules)
                    .map((e) => e.cssText)
                    .join("\n")
                ));
            } catch (e) {}
          }
          he(e, t, n, r, a, i),
            !r.autoSaveExternalSave &&
              r.removeHiddenElements &&
              o &&
              (s || "" == n.getAttribute(M)
                ? n.parentElement && (n.parentElement.setAttribute(M, ""), a.markedElements.push(n.parentElement))
                : i && (n.setAttribute(N, ""), a.markedElements.push(n)));
        });
    }
    return a;
  }
  function de(e, t, n) {
    if (e) {
      const r = e.getPropertyValue("font-style") || "normal";
      e.getPropertyValue("font-family")
        .split(",")
        .forEach((a) => {
          if (((a = me(a)), !t.loadedFonts || t.loadedFonts.find((e) => me(e.family) == a && e.style == r))) {
            const t = ve(e.getPropertyValue("font-weight")),
              o = e.getPropertyValue("font-variant") || "normal",
              i = [a, t, r, o];
            n.set(le.stringify(i), [a, t, r, o]);
          }
        });
    }
  }
  function pe(e) {
    const t = globalThis.chrome;
    if (e.openOrClosedShadowRoot) return e.openOrClosedShadowRoot;
    if (!(t && t.dom && t.dom.openOrClosedShadowRoot)) return e.shadowRoot;
    try {
      return t.dom.openOrClosedShadowRoot(e);
    } catch (t) {
      return e.shadowRoot;
    }
  }
  function me(e = "") {
    return ke(_(e.trim())).toLowerCase();
  }
  function ge(e, t) {
    let n = !1;
    if (t) {
      const r = t.getPropertyValue("display"),
        a = t.getPropertyValue("opacity"),
        o = t.getPropertyValue("visibility");
      if (((n = "none" == r), !n && ("0" == a || "hidden" == o) && e.getBoundingClientRect)) {
        const t = e.getBoundingClientRect();
        n = !t.width && !t.height;
      }
    }
    return Boolean(n);
  }
  function fe(e, t, n) {
    if (
      (e.querySelectorAll("[" + Y + "]").forEach((e) => {
        (e.textContent = e.getAttribute(Y)), e.removeAttribute(Y);
      }),
      e.querySelectorAll("meta[disabled-http-equiv]").forEach((e) => {
        e.setAttribute("http-equiv", e.getAttribute("disabled-http-equiv")), e.removeAttribute("disabled-http-equiv");
      }),
      e.head &&
        e.head
          .querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)")
          .forEach((e) => e.removeAttribute("hidden")),
      !t)
    ) {
      const n = [N, O, P, U, j, F, B, H, W, D, G, J];
      t = e.querySelectorAll(n.map((e) => "[" + e + "]").join(","));
    }
    t.forEach((e) => {
      e.removeAttribute(N),
        e.removeAttribute(P),
        e.removeAttribute(M),
        e.removeAttribute(O),
        e.removeAttribute(U),
        e.removeAttribute(j),
        e.removeAttribute(F),
        e.removeAttribute(B),
        e.removeAttribute(H),
        e.removeAttribute(W),
        e.removeAttribute(D),
        e.removeAttribute(G),
        e.removeAttribute(J),
        e.removeAttribute(V);
    }),
      n && Array.from(n.entries()).forEach(([e, t]) => t.replaceWith(e));
  }
  function be(e) {
    if (e) {
      const t = [];
      return (
        e.querySelectorAll("style").forEach((n, r) => {
          try {
            const a = e.createElement("style");
            (a.textContent = n.textContent), e.body.appendChild(a);
            const o = a.sheet;
            a.remove(),
              (o && o.cssRules.length == n.sheet.cssRules.length) ||
                (n.setAttribute(G, r),
                (t[r] = Array.from(n.sheet.cssRules)
                  .map((e) => e.cssText)
                  .join("\n")));
          } catch (e) {}
        }),
        t
      );
    }
  }
  function ye(e, t) {
    if (t.getPropertyValue(e).endsWith("px")) return parseFloat(t.getPropertyValue(e));
  }
  function we(e) {
    const t = e.doctype;
    let n = "";
    return (
      t &&
        ((n = "<!DOCTYPE " + t.nodeName),
        t.publicId
          ? ((n += ' PUBLIC "' + t.publicId + '"'), t.systemId && (n += ' "' + t.systemId + '"'))
          : t.systemId && (n += ' SYSTEM "' + t.systemId + '"'),
        t.internalSubset && (n += " [" + t.internalSubset + "]"),
        (n += "> ")),
      n + e.documentElement.outerHTML
    );
  }
  function ke(e) {
    return (e = e.match(ee) ? e.replace(ee, "$1") : e.replace(te, "$1")).trim();
  }
  function ve(e) {
    return ne[e.toLowerCase().trim()] || e;
  }
  function xe(e) {
    return e.flat ? e.flat() : e.reduce((e, t) => e.concat(Array.isArray(t) ? xe(t) : t), []);
  }
  function Ee(e, t, n) {
    try {
      return e.getComputedStyle(t, n);
    } catch (e) {}
  }
  var Ae = Object.freeze({
    __proto__: null,
    initUserScriptHandler: function () {
      se(
        "single-file-user-script-init",
        () =>
          (globalThis._singleFile_waitForUserScript = async (e) => {
            const t = new CustomEvent(e + "-request", { cancelable: !0 }),
              n = new Promise((t) => se(e + "-response", t));
            ((e) => {
              try {
                globalThis.dispatchEvent(e);
              } catch (e) {}
            })(t),
              t.defaultPrevented && (await n);
          })
      );
    },
    initDoc: ce,
    preProcessDoc: ue,
    postProcessDoc: fe,
    serialize: we,
    removeQuotes: ke,
    flatten: xe,
    getFontWeight: ve,
    normalizeFontFamily: me,
    getShadowRoot: pe,
    ON_BEFORE_CAPTURE_EVENT_NAME: z,
    ON_AFTER_CAPTURE_EVENT_NAME: L,
    WIN_ID_ATTRIBUTE_NAME: q,
    PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME: U,
    REMOVED_CONTENT_ATTRIBUTE_NAME: N,
    HIDDEN_CONTENT_ATTRIBUTE_NAME: P,
    HIDDEN_FRAME_ATTRIBUTE_NAME: O,
    IMAGE_ATTRIBUTE_NAME: j,
    POSTER_ATTRIBUTE_NAME: F,
    VIDEO_ATTRIBUTE_NAME: B,
    CANVAS_ATTRIBUTE_NAME: H,
    INPUT_VALUE_ATTRIBUTE_NAME: W,
    SHADOW_ROOT_ATTRIBUTE_NAME: D,
    STYLE_ATTRIBUTE_NAME: V,
    LAZY_SRC_ATTRIBUTE_NAME: $,
    STYLESHEET_ATTRIBUTE_NAME: G,
    SELECTED_CONTENT_ATTRIBUTE_NAME: Q,
    INVALID_ELEMENT_ATTRIBUTE_NAME: K,
    ASYNC_SCRIPT_ATTRIBUTE_NAME: J,
    COMMENT_HEADER: re,
    COMMENT_HEADER_LEGACY: ae,
    SINGLE_FILE_UI_ELEMENT_CLASS: oe,
    EMPTY_RESOURCE: ie
  });
  const Se = { LAZY_SRC_ATTRIBUTE_NAME: $, SINGLE_FILE_UI_ELEMENT_CLASS: oe },
    Te = 10,
    Ce = "attributes",
    Re = globalThis.browser,
    _e = globalThis.document,
    Ie = globalThis.MutationObserver,
    ze = (e, t, n) => globalThis.addEventListener(e, t, n),
    Le = (e, t, n) => globalThis.removeEventListener(e, t, n),
    Ne = new Map();
  let Pe;
  async function Me(e) {
    if (_e.documentElement) {
      Ne.clear();
      const t = (_e.body && _e.body.scrollHeight) || _e.documentElement.scrollHeight,
        n = (_e.body && _e.body.scrollWidth) || _e.documentElement.scrollWidth;
      if (t > globalThis.innerHeight || n > globalThis.innerWidth) {
        const r = Math.max(t - 1.5 * globalThis.innerHeight, 0),
          a = Math.max(n - 1.5 * globalThis.innerWidth, 0);
        if (globalThis.scrollY < r || globalThis.scrollX < a)
          return (function (e) {
            return (
              (Pe = 0),
              new Promise(async (t) => {
                let n;
                const r = new Set(),
                  a = new Ie(async (t) => {
                    if ((t = t.filter((e) => e.type == Ce)).length) {
                      t.filter((e) => {
                        if (
                          ("src" == e.attributeName &&
                            (e.target.setAttribute(Se.LAZY_SRC_ATTRIBUTE_NAME, e.target.src), e.target.addEventListener("load", i)),
                          "src" == e.attributeName || "srcset" == e.attributeName || "SOURCE" == e.target.tagName)
                        )
                          return !e.target.classList || !e.target.classList.contains(Se.SINGLE_FILE_UI_ELEMENT_CLASS);
                      }).length && ((n = !0), await De(a, e, c), r.size || (await Ue(a, e, c)));
                    }
                  });
                async function o(t) {
                  await je(
                    "idleTimeout",
                    async () => {
                      n
                        ? Pe < Te && (Pe++, Be("idleTimeout"), await o(Math.max(500, t / 2)))
                        : (Be("loadTimeout"), Be("maxTimeout"), qe(a, e, c));
                    },
                    t,
                    e.loadDeferredImagesNativeTimeout
                  );
                }
                function i(e) {
                  const t = e.target;
                  t.removeAttribute(Se.LAZY_SRC_ATTRIBUTE_NAME), t.removeEventListener("load", i);
                }
                async function s(t) {
                  (n = !0), await De(a, e, c), await Ue(a, e, c), t.detail && r.add(t.detail);
                }
                async function l(t) {
                  await De(a, e, c), await Ue(a, e, c), r.delete(t.detail), r.size || (await Ue(a, e, c));
                }
                function c(e) {
                  a.disconnect(), Le(p, s), Le(m, l), t(e);
                }
                await o(2 * e.loadDeferredImagesMaxIdleTime),
                  await De(a, e, c),
                  a.observe(_e, { subtree: !0, childList: !0, attributes: !0 }),
                  ze(p, s),
                  ze(m, l),
                  E(e);
              })
            );
          })(e);
      }
    }
  }
  function Oe(e) {
    S(e);
  }
  async function Ue(e, t, n) {
    await je("loadTimeout", () => qe(e, t, n), t.loadDeferredImagesMaxIdleTime, t.loadDeferredImagesNativeTimeout);
  }
  async function De(e, t, n) {
    await je(
      "maxTimeout",
      async () => {
        await Be("loadTimeout"), await qe(e, t, n);
      },
      10 * t.loadDeferredImagesMaxIdleTime,
      t.loadDeferredImagesNativeTimeout
    );
  }
  async function qe(e, t, n) {
    await Be("idleTimeout"),
      A(t),
      await je(
        "endTimeout",
        async () => {
          await Be("maxTimeout"), n();
        },
        t.loadDeferredImagesMaxIdleTime / 2,
        t.loadDeferredImagesNativeTimeout
      ),
      e.disconnect();
  }
  async function je(e, t, n, r) {
    if (Re && Re.runtime && Re.runtime.sendMessage && !r) {
      if (!Ne.get(e) || !Ne.get(e).pending) {
        const r = { callback: t, pending: !0 };
        Ne.set(e, r);
        try {
          await Re.runtime.sendMessage({ method: "singlefile.lazyTimeout.setTimeout", type: e, delay: n });
        } catch (r) {
          Fe(e, t, n);
        }
        r.pending = !1;
      }
    } else Fe(e, t, n);
  }
  function Fe(e, t, n) {
    const r = Ne.get(e);
    r && globalThis.clearTimeout(r), Ne.set(e, t), globalThis.setTimeout(t, n);
  }
  async function Be(e) {
    if (Re && Re.runtime && Re.runtime.sendMessage)
      try {
        await Re.runtime.sendMessage({ method: "singlefile.lazyTimeout.clearTimeout", type: e });
      } catch (t) {
        He(e);
      }
    else He(e);
  }
  function He(e) {
    const t = Ne.get(e);
    Ne.delete(e), t && globalThis.clearTimeout(t);
  }
  Re &&
    Re.runtime &&
    Re.runtime.onMessage &&
    Re.runtime.onMessage.addListener &&
    Re.runtime.onMessage.addListener((e) => {
      if ("singlefile.lazyTimeout.onTimeout" == e.method) {
        const t = Ne.get(e.type);
        if (t) {
          Ne.delete(e.type);
          try {
            t.callback();
          } catch (t) {
            He(e.type);
          }
        }
      }
    });
  var Ve = Object.freeze({ __proto__: null, process: Me, resetZoomLevel: Oe });
  const We = {
      ON_BEFORE_CAPTURE_EVENT_NAME: z,
      ON_AFTER_CAPTURE_EVENT_NAME: L,
      WIN_ID_ATTRIBUTE_NAME: q,
      preProcessDoc: ue,
      serialize: we,
      postProcessDoc: fe,
      getShadowRoot: pe
    },
    $e = "__frameTree__::",
    Ge = 'iframe, frame, object[type="text/html"][data]',
    Ye = "*",
    Qe = "singlefile.frameTree.initRequest",
    Ke = "singlefile.frameTree.ackInitRequest",
    Je = "singlefile.frameTree.cleanupRequest",
    Ze = "singlefile.frameTree.initResponse",
    Xe = "*",
    et = 5e3,
    tt = ".",
    nt = globalThis.window == globalThis.top,
    rt = globalThis.browser,
    at = globalThis.top,
    ot = globalThis.MessageChannel,
    it = globalThis.document,
    st = globalThis.JSON;
  let lt,
    ct = globalThis.sessions;
  var ut, ht, dt;
  function pt() {
    return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("");
  }
  async function mt(e) {
    const t = e.sessionId,
      n = globalThis._singleFile_waitForUserScript;
    delete globalThis._singleFile_cleaningUp,
      nt || (lt = globalThis.frameId = e.windowId),
      bt(it, e.options, lt, t),
      nt ||
        (e.options.userScriptEnabled && n && (await n(We.ON_BEFORE_CAPTURE_EVENT_NAME)),
        vt({
          frames: [Et(it, globalThis, lt, e.options)],
          sessionId: t,
          requestedFrameId: it.documentElement.dataset.requestedFrameId && lt
        }),
        e.options.userScriptEnabled && n && (await n(We.ON_AFTER_CAPTURE_EVENT_NAME)),
        delete it.documentElement.dataset.requestedFrameId);
  }
  function gt(e) {
    if (!globalThis._singleFile_cleaningUp) {
      globalThis._singleFile_cleaningUp = !0;
      const t = e.sessionId;
      kt(At(it), e.windowId, t);
    }
  }
  function ft(e) {
    e.frames.forEach((t) => yt("responseTimeouts", e.sessionId, t.windowId));
    const t = ct.get(e.sessionId);
    if (t) {
      e.requestedFrameId && (t.requestedFrameId = e.requestedFrameId),
        e.frames.forEach((e) => {
          let n = t.frames.find((t) => e.windowId == t.windowId);
          n || ((n = { windowId: e.windowId }), t.frames.push(n)),
            n.processed ||
              ((n.content = e.content),
              (n.baseURI = e.baseURI),
              (n.title = e.title),
              (n.canvases = e.canvases),
              (n.fonts = e.fonts),
              (n.stylesheets = e.stylesheets),
              (n.images = e.images),
              (n.posters = e.posters),
              (n.videos = e.videos),
              (n.usedFonts = e.usedFonts),
              (n.shadowRoots = e.shadowRoots),
              (n.processed = e.processed));
        });
      t.frames.filter((e) => !e.processed).length ||
        ((t.frames = t.frames.sort((e, t) => t.windowId.split(tt).length - e.windowId.split(tt).length)),
        t.resolve &&
          (t.requestedFrameId &&
            t.frames.forEach((e) => {
              e.windowId == t.requestedFrameId && (e.requestedFrame = !0);
            }),
          t.resolve(t.frames)));
    }
  }
  function bt(e, t, n, r) {
    const a = At(e);
    !(function (e, t, n, r, a) {
      const o = [];
      let i;
      ct.get(a) ? (i = ct.get(a).requestTimeouts) : ((i = {}), ct.set(a, { requestTimeouts: i }));
      t.forEach((e, t) => {
        const n = r + tt + t;
        e.setAttribute(We.WIN_ID_ATTRIBUTE_NAME, n), o.push({ windowId: n });
      }),
        vt({ frames: o, sessionId: a, requestedFrameId: e.documentElement.dataset.requestedFrameId && r }),
        t.forEach((e, t) => {
          const o = r + tt + t;
          try {
            xt(e.contentWindow, { method: Qe, windowId: o, sessionId: a, options: n });
          } catch (e) {}
          i[o] = globalThis.setTimeout(() => vt({ frames: [{ windowId: o, processed: !0 }], sessionId: a }), et);
        }),
        delete e.documentElement.dataset.requestedFrameId;
    })(e, a, t, n, r),
      a.length &&
        (function (e, t, n, r, a) {
          const o = [];
          t.forEach((e, t) => {
            const i = r + tt + t;
            let s;
            try {
              s = e.contentDocument;
            } catch (e) {}
            if (s)
              try {
                const t = e.contentWindow;
                t.stop(), yt("requestTimeouts", a, i), bt(s, n, i, a), o.push(Et(s, t, i, n));
              } catch (e) {
                o.push({ windowId: i, processed: !0 });
              }
          }),
            vt({ frames: o, sessionId: a, requestedFrameId: e.documentElement.dataset.requestedFrameId && r }),
            delete e.documentElement.dataset.requestedFrameId;
        })(e, a, t, n, r);
  }
  function yt(e, t, n) {
    const r = ct.get(t);
    if (r && r[e]) {
      const t = r[e][n];
      t && (globalThis.clearTimeout(t), delete r[e][n]);
    }
  }
  function wt(e, t) {
    const n = ct.get(e);
    n &&
      n.responseTimeouts &&
      (n.responseTimeouts[t] = globalThis.setTimeout(() => vt({ frames: [{ windowId: t, processed: !0 }], sessionId: e }), 1e4));
  }
  function kt(e, t, n) {
    e.forEach((e, r) => {
      const a = t + tt + r;
      e.removeAttribute(We.WIN_ID_ATTRIBUTE_NAME);
      try {
        xt(e.contentWindow, { method: Je, windowId: a, sessionId: n });
      } catch (e) {}
    }),
      e.forEach((e, r) => {
        const a = t + tt + r;
        let o;
        try {
          o = e.contentDocument;
        } catch (e) {}
        if (o)
          try {
            kt(At(o), a, n);
          } catch (e) {}
      });
  }
  function vt(e) {
    e.method = Ze;
    try {
      at.singlefile.processors.frameTree.initResponse(e);
    } catch (t) {
      xt(at, e, !0);
    }
  }
  function xt(e, t, n) {
    if (e == at && rt && rt.runtime && rt.runtime.sendMessage) rt.runtime.sendMessage(t);
    else if (n) {
      const n = new ot();
      e.postMessage($e + st.stringify({ method: t.method, sessionId: t.sessionId }), Xe, [n.port2]), n.port1.postMessage(t);
    } else e.postMessage($e + st.stringify(t), Xe);
  }
  function Et(e, t, n, r) {
    const a = We.preProcessDoc(e, t, r),
      o = We.serialize(e);
    We.postProcessDoc(e, a.markedElements, a.invalidElements);
    return {
      windowId: n,
      content: o,
      baseURI: e.baseURI.split("#")[0],
      title: e.title,
      canvases: a.canvases,
      fonts: a.fonts,
      stylesheets: a.stylesheets,
      images: a.images,
      posters: a.posters,
      videos: a.videos,
      usedFonts: a.usedFonts,
      shadowRoots: a.shadowRoots,
      processed: !0
    };
  }
  function At(e) {
    let t = Array.from(e.querySelectorAll(Ge));
    return (
      e.querySelectorAll(Ye).forEach((e) => {
        const n = We.getShadowRoot(e);
        n && (t = t.concat(...n.querySelectorAll(Ge)));
      }),
      t
    );
  }
  ct || (ct = globalThis.sessions = new Map()),
    nt &&
      ((lt = "0"),
      rt &&
        rt.runtime &&
        rt.runtime.onMessage &&
        rt.runtime.onMessage.addListener &&
        rt.runtime.onMessage.addListener((e) =>
          e.method == Ze
            ? (ft(e), Promise.resolve({}))
            : e.method == Ke
            ? (yt("requestTimeouts", e.sessionId, e.windowId), wt(e.sessionId, e.windowId), Promise.resolve({}))
            : void 0
        )),
    (ut = "message"),
    (ht = async (e) => {
      if ("string" == typeof e.data && e.data.startsWith($e)) {
        e.preventDefault(), e.stopPropagation();
        const t = st.parse(e.data.substring($e.length));
        t.method == Qe
          ? (e.source && xt(e.source, { method: Ke, windowId: t.windowId, sessionId: t.sessionId }),
            nt || (globalThis.stop(), t.options.loadDeferredImages && Me(t.options), await mt(t)))
          : t.method == Ke
          ? (yt("requestTimeouts", t.sessionId, t.windowId), wt(t.sessionId, t.windowId))
          : t.method == Je
          ? gt(t)
          : t.method == Ze && ct.get(t.sessionId) && (e.ports[0].onmessage = (e) => ft(e.data));
      }
    }),
    (dt = !0),
    globalThis.addEventListener(ut, ht, dt);
  var St = Object.freeze({
      __proto__: null,
      getAsync: function (e) {
        const t = pt();
        return (
          (e = st.parse(st.stringify(e))),
          new Promise((n) => {
            ct.set(t, {
              frames: [],
              requestTimeouts: {},
              responseTimeouts: {},
              resolve: (e) => {
                (e.sessionId = t), n(e);
              }
            }),
              mt({ windowId: lt, sessionId: t, options: e });
          })
        );
      },
      getSync: function (e) {
        const t = pt();
        (e = st.parse(st.stringify(e))),
          ct.set(t, { frames: [], requestTimeouts: {}, responseTimeouts: {} }),
          (function (e) {
            const t = e.sessionId,
              n = globalThis._singleFile_waitForUserScript;
            delete globalThis._singleFile_cleaningUp, nt || (lt = globalThis.frameId = e.windowId);
            bt(it, e.options, lt, t),
              nt ||
                (e.options.userScriptEnabled && n && n(We.ON_BEFORE_CAPTURE_EVENT_NAME),
                vt({
                  frames: [Et(it, globalThis, lt, e.options)],
                  sessionId: t,
                  requestedFrameId: it.documentElement.dataset.requestedFrameId && lt
                }),
                e.options.userScriptEnabled && n && n(We.ON_AFTER_CAPTURE_EVENT_NAME),
                delete it.documentElement.dataset.requestedFrameId);
          })({ windowId: lt, sessionId: t, options: e });
        const n = ct.get(t).frames;
        return (n.sessionId = t), n;
      },
      cleanup: function (e) {
        ct.delete(e), gt({ windowId: lt, sessionId: e, options: { sessionId: e } });
      },
      initResponse: ft,
      TIMEOUT_INIT_REQUEST_MESSAGE: et
    }),
    Tt = Object.freeze({ __proto__: null, frameTree: St, hooksFrames: T, lazy: Ve }),
    Ct = Object.create,
    Rt = Object.defineProperty,
    _t = Object.defineProperties,
    It = Object.getOwnPropertyDescriptor,
    zt = Object.getOwnPropertyDescriptors,
    Lt = Object.getOwnPropertyNames,
    Nt = Object.getOwnPropertySymbols,
    Pt = Object.getPrototypeOf,
    Mt = Object.prototype.hasOwnProperty,
    Ot = Object.prototype.propertyIsEnumerable,
    Ut = (e, t, n) => (t in e ? Rt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
    Dt = (e, t) => {
      for (var n in t || (t = {})) Mt.call(t, n) && Ut(e, n, t[n]);
      if (Nt) for (var n of Nt(t)) Ot.call(t, n) && Ut(e, n, t[n]);
      return e;
    },
    qt = (e, t) => _t(e, zt(t)),
    jt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ft = (e, t) => {
      for (var n in t) Rt(e, n, { get: t[n], enumerable: !0 });
    },
    Bt = jt((e) => {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      (e.encode = function (e) {
        if (0 <= e && e < t.length) return t[e];
        throw new TypeError("Must be between 0 and 63: " + e);
      }),
        (e.decode = function (e) {
          return 65 <= e && e <= 90
            ? e - 65
            : 97 <= e && e <= 122
            ? e - 97 + 26
            : 48 <= e && e <= 57
            ? e - 48 + 52
            : 43 == e
            ? 62
            : 47 == e
            ? 63
            : -1;
        });
    }),
    Ht = jt((e) => {
      var t = Bt();
      (e.encode = function (e) {
        var n,
          r,
          a = "",
          o = (r = e) < 0 ? 1 + (-r << 1) : 0 + (r << 1);
        do {
          (n = 31 & o), (o >>>= 5) > 0 && (n |= 32), (a += t.encode(n));
        } while (o > 0);
        return a;
      }),
        (e.decode = function (e, n, r) {
          var a,
            o,
            i = e.length,
            s = 0,
            l = 0;
          do {
            if (n >= i) throw new Error("Expected more digits in base 64 VLQ value.");
            if (-1 === (o = t.decode(e.charCodeAt(n++)))) throw new Error("Invalid base64 digit: " + e.charAt(n - 1));
            (a = !!(32 & o)), (s += (o &= 31) << l), (l += 5);
          } while (a);
          (r.value = (function (e) {
            var t = e >> 1;
            return 1 == (1 & e) ? -t : t;
          })(s)),
            (r.rest = n);
        });
    }),
    Vt = jt((e) => {
      e.getArg = function (e, t, n) {
        if (t in e) return e[t];
        if (3 === arguments.length) return n;
        throw new Error('"' + t + '" is a required argument.');
      };
      var t = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
        n = /^data:.+\,.+$/;
      function r(e) {
        var n = e.match(t);
        return n ? { scheme: n[1], auth: n[2], host: n[3], port: n[4], path: n[5] } : null;
      }
      function a(e) {
        var t = "";
        return (
          e.scheme && (t += e.scheme + ":"),
          (t += "//"),
          e.auth && (t += e.auth + "@"),
          e.host && (t += e.host),
          e.port && (t += ":" + e.port),
          e.path && (t += e.path),
          t
        );
      }
      (e.urlParse = r), (e.urlGenerate = a);
      var o,
        i,
        s =
          ((o = function (t) {
            var n = t,
              o = r(t);
            if (o) {
              if (!o.path) return t;
              n = o.path;
            }
            for (var i = e.isAbsolute(n), s = [], l = 0, c = 0; ; ) {
              if (((l = c), -1 === (c = n.indexOf("/", l)))) {
                s.push(n.slice(l));
                break;
              }
              for (s.push(n.slice(l, c)); c < n.length && "/" === n[c]; ) c++;
            }
            var u,
              h = 0;
            for (c = s.length - 1; c >= 0; c--)
              "." === (u = s[c])
                ? s.splice(c, 1)
                : ".." === u
                ? h++
                : h > 0 && ("" === u ? (s.splice(c + 1, h), (h = 0)) : (s.splice(c, 2), h--));
            return "" === (n = s.join("/")) && (n = i ? "/" : "."), o ? ((o.path = n), a(o)) : n;
          }),
          (i = []),
          function (e) {
            for (var t = 0; t < i.length; t++)
              if (i[t].input === e) {
                var n = i[0];
                return (i[0] = i[t]), (i[t] = n), i[0].result;
              }
            var r = o(e);
            return i.unshift({ input: e, result: r }), i.length > 32 && i.pop(), r;
          });
      function l(e, t) {
        "" === e && (e = "."), "" === t && (t = ".");
        var o = r(t),
          i = r(e);
        if ((i && (e = i.path || "/"), o && !o.scheme)) return i && (o.scheme = i.scheme), a(o);
        if (o || t.match(n)) return t;
        if (i && !i.host && !i.path) return (i.host = t), a(i);
        var l = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
        return i ? ((i.path = l), a(i)) : l;
      }
      (e.normalize = s),
        (e.join = l),
        (e.isAbsolute = function (e) {
          return "/" === e.charAt(0) || t.test(e);
        }),
        (e.relative = function (e, t) {
          "" === e && (e = "."), (e = e.replace(/\/$/, ""));
          for (var n = 0; 0 !== t.indexOf(e + "/"); ) {
            var r = e.lastIndexOf("/");
            if (r < 0 || (e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) return t;
            ++n;
          }
          return Array(n + 1).join("../") + t.substr(e.length + 1);
        });
      var c = !("__proto__" in Object.create(null));
      function u(e) {
        return e;
      }
      function h(e) {
        if (!e) return !1;
        var t = e.length;
        if (
          t < 9 ||
          95 !== e.charCodeAt(t - 1) ||
          95 !== e.charCodeAt(t - 2) ||
          111 !== e.charCodeAt(t - 3) ||
          116 !== e.charCodeAt(t - 4) ||
          111 !== e.charCodeAt(t - 5) ||
          114 !== e.charCodeAt(t - 6) ||
          112 !== e.charCodeAt(t - 7) ||
          95 !== e.charCodeAt(t - 8) ||
          95 !== e.charCodeAt(t - 9)
        )
          return !1;
        for (var n = t - 10; n >= 0; n--) if (36 !== e.charCodeAt(n)) return !1;
        return !0;
      }
      function d(e, t) {
        return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1;
      }
      (e.toSetString = c
        ? u
        : function (e) {
            return h(e) ? "$" + e : e;
          }),
        (e.fromSetString = c
          ? u
          : function (e) {
              return h(e) ? e.slice(1) : e;
            }),
        (e.compareByOriginalPositions = function (e, t, n) {
          var r = d(e.source, t.source);
          return 0 !== r ||
            0 !== (r = e.originalLine - t.originalLine) ||
            0 !== (r = e.originalColumn - t.originalColumn) ||
            n ||
            0 !== (r = e.generatedColumn - t.generatedColumn) ||
            0 !== (r = e.generatedLine - t.generatedLine)
            ? r
            : d(e.name, t.name);
        }),
        (e.compareByOriginalPositionsNoSource = function (e, t, n) {
          var r;
          return 0 !== (r = e.originalLine - t.originalLine) ||
            0 !== (r = e.originalColumn - t.originalColumn) ||
            n ||
            0 !== (r = e.generatedColumn - t.generatedColumn) ||
            0 !== (r = e.generatedLine - t.generatedLine)
            ? r
            : d(e.name, t.name);
        }),
        (e.compareByGeneratedPositionsDeflated = function (e, t, n) {
          var r = e.generatedLine - t.generatedLine;
          return 0 !== r ||
            0 !== (r = e.generatedColumn - t.generatedColumn) ||
            n ||
            0 !== (r = d(e.source, t.source)) ||
            0 !== (r = e.originalLine - t.originalLine) ||
            0 !== (r = e.originalColumn - t.originalColumn)
            ? r
            : d(e.name, t.name);
        }),
        (e.compareByGeneratedPositionsDeflatedNoLine = function (e, t, n) {
          var r = e.generatedColumn - t.generatedColumn;
          return 0 !== r ||
            n ||
            0 !== (r = d(e.source, t.source)) ||
            0 !== (r = e.originalLine - t.originalLine) ||
            0 !== (r = e.originalColumn - t.originalColumn)
            ? r
            : d(e.name, t.name);
        }),
        (e.compareByGeneratedPositionsInflated = function (e, t) {
          var n = e.generatedLine - t.generatedLine;
          return 0 !== n ||
            0 !== (n = e.generatedColumn - t.generatedColumn) ||
            0 !== (n = d(e.source, t.source)) ||
            0 !== (n = e.originalLine - t.originalLine) ||
            0 !== (n = e.originalColumn - t.originalColumn)
            ? n
            : d(e.name, t.name);
        }),
        (e.parseSourceMapInput = function (e) {
          return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""));
        }),
        (e.computeSourceURL = function (e, t, n) {
          if (((t = t || ""), e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"), (t = e + t)), n)) {
            var o = r(n);
            if (!o) throw new Error("sourceMapURL could not be parsed");
            if (o.path) {
              var i = o.path.lastIndexOf("/");
              i >= 0 && (o.path = o.path.substring(0, i + 1));
            }
            t = l(a(o), t);
          }
          return s(t);
        });
    }),
    Wt = jt((e) => {
      var t = Vt(),
        n = Object.prototype.hasOwnProperty,
        r = typeof Map < "u";
      function a() {
        (this._array = []), (this._set = r ? new Map() : Object.create(null));
      }
      (a.fromArray = function (e, t) {
        for (var n = new a(), r = 0, o = e.length; r < o; r++) n.add(e[r], t);
        return n;
      }),
        (a.prototype.size = function () {
          return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
        }),
        (a.prototype.add = function (e, a) {
          var o = r ? e : t.toSetString(e),
            i = r ? this.has(e) : n.call(this._set, o),
            s = this._array.length;
          (!i || a) && this._array.push(e), i || (r ? this._set.set(e, s) : (this._set[o] = s));
        }),
        (a.prototype.has = function (e) {
          if (r) return this._set.has(e);
          var a = t.toSetString(e);
          return n.call(this._set, a);
        }),
        (a.prototype.indexOf = function (e) {
          if (r) {
            var a = this._set.get(e);
            if (a >= 0) return a;
          } else {
            var o = t.toSetString(e);
            if (n.call(this._set, o)) return this._set[o];
          }
          throw new Error('"' + e + '" is not in the set.');
        }),
        (a.prototype.at = function (e) {
          if (e >= 0 && e < this._array.length) return this._array[e];
          throw new Error("No element indexed by " + e);
        }),
        (a.prototype.toArray = function () {
          return this._array.slice();
        }),
        (e.ArraySet = a);
    }),
    $t = jt((e) => {
      var t = Vt();
      function n() {
        (this._array = []), (this._sorted = !0), (this._last = { generatedLine: -1, generatedColumn: 0 });
      }
      (n.prototype.unsortedForEach = function (e, t) {
        this._array.forEach(e, t);
      }),
        (n.prototype.add = function (e) {
          !(function (e, n) {
            var r = e.generatedLine,
              a = n.generatedLine,
              o = e.generatedColumn,
              i = n.generatedColumn;
            return a > r || (a == r && i >= o) || t.compareByGeneratedPositionsInflated(e, n) <= 0;
          })(this._last, e)
            ? ((this._sorted = !1), this._array.push(e))
            : ((this._last = e), this._array.push(e));
        }),
        (n.prototype.toArray = function () {
          return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), (this._sorted = !0)), this._array;
        }),
        (e.MappingList = n);
    }),
    Gt = jt((e) => {
      var t = Ht(),
        n = Vt(),
        r = Wt().ArraySet,
        a = $t().MappingList;
      function o(e) {
        e || (e = {}),
          (this._file = n.getArg(e, "file", null)),
          (this._sourceRoot = n.getArg(e, "sourceRoot", null)),
          (this._skipValidation = n.getArg(e, "skipValidation", !1)),
          (this._sources = new r()),
          (this._names = new r()),
          (this._mappings = new a()),
          (this._sourcesContents = null);
      }
      (o.prototype._version = 3),
        (o.fromSourceMap = function (e) {
          var t = e.sourceRoot,
            r = new o({ file: e.file, sourceRoot: t });
          return (
            e.eachMapping(function (e) {
              var a = { generated: { line: e.generatedLine, column: e.generatedColumn } };
              null != e.source &&
                ((a.source = e.source),
                null != t && (a.source = n.relative(t, a.source)),
                (a.original = { line: e.originalLine, column: e.originalColumn }),
                null != e.name && (a.name = e.name)),
                r.addMapping(a);
            }),
            e.sources.forEach(function (a) {
              var o = a;
              null !== t && (o = n.relative(t, a)), r._sources.has(o) || r._sources.add(o);
              var i = e.sourceContentFor(a);
              null != i && r.setSourceContent(a, i);
            }),
            r
          );
        }),
        (o.prototype.addMapping = function (e) {
          var t = n.getArg(e, "generated"),
            r = n.getArg(e, "original", null),
            a = n.getArg(e, "source", null),
            o = n.getArg(e, "name", null);
          this._skipValidation || this._validateMapping(t, r, a, o),
            null != a && ((a = String(a)), this._sources.has(a) || this._sources.add(a)),
            null != o && ((o = String(o)), this._names.has(o) || this._names.add(o)),
            this._mappings.add({
              generatedLine: t.line,
              generatedColumn: t.column,
              originalLine: null != r && r.line,
              originalColumn: null != r && r.column,
              source: a,
              name: o
            });
        }),
        (o.prototype.setSourceContent = function (e, t) {
          var r = e;
          null != this._sourceRoot && (r = n.relative(this._sourceRoot, r)),
            null != t
              ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), (this._sourcesContents[n.toSetString(r)] = t))
              : this._sourcesContents &&
                (delete this._sourcesContents[n.toSetString(r)],
                0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
        }),
        (o.prototype.applySourceMap = function (e, t, a) {
          var o = t;
          if (null == t) {
            if (null == e.file)
              throw new Error(
                'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.'
              );
            o = e.file;
          }
          var i = this._sourceRoot;
          null != i && (o = n.relative(i, o));
          var s = new r(),
            l = new r();
          this._mappings.unsortedForEach(function (t) {
            if (t.source === o && null != t.originalLine) {
              var r = e.originalPositionFor({ line: t.originalLine, column: t.originalColumn });
              null != r.source &&
                ((t.source = r.source),
                null != a && (t.source = n.join(a, t.source)),
                null != i && (t.source = n.relative(i, t.source)),
                (t.originalLine = r.line),
                (t.originalColumn = r.column),
                null != r.name && (t.name = r.name));
            }
            var c = t.source;
            null != c && !s.has(c) && s.add(c);
            var u = t.name;
            null != u && !l.has(u) && l.add(u);
          }, this),
            (this._sources = s),
            (this._names = l),
            e.sources.forEach(function (t) {
              var r = e.sourceContentFor(t);
              null != r && (null != a && (t = n.join(a, t)), null != i && (t = n.relative(i, t)), this.setSourceContent(t, r));
            }, this);
        }),
        (o.prototype._validateMapping = function (e, t, n, r) {
          if (t && "number" != typeof t.line && "number" != typeof t.column)
            throw new Error(
              "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
            );
          if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || r) {
            if (
              e &&
              "line" in e &&
              "column" in e &&
              t &&
              "line" in t &&
              "column" in t &&
              e.line > 0 &&
              e.column >= 0 &&
              t.line > 0 &&
              t.column >= 0 &&
              n
            )
              return;
            throw new Error("Invalid mapping: " + JSON.stringify({ generated: e, source: n, original: t, name: r }));
          }
        }),
        (o.prototype._serializeMappings = function () {
          for (
            var e, r, a, o, i = 0, s = 1, l = 0, c = 0, u = 0, h = 0, d = "", p = this._mappings.toArray(), m = 0, g = p.length;
            m < g;
            m++
          ) {
            if (((e = ""), (r = p[m]).generatedLine !== s)) for (i = 0; r.generatedLine !== s; ) (e += ";"), s++;
            else if (m > 0) {
              if (!n.compareByGeneratedPositionsInflated(r, p[m - 1])) continue;
              e += ",";
            }
            (e += t.encode(r.generatedColumn - i)),
              (i = r.generatedColumn),
              null != r.source &&
                ((o = this._sources.indexOf(r.source)),
                (e += t.encode(o - h)),
                (h = o),
                (e += t.encode(r.originalLine - 1 - c)),
                (c = r.originalLine - 1),
                (e += t.encode(r.originalColumn - l)),
                (l = r.originalColumn),
                null != r.name && ((a = this._names.indexOf(r.name)), (e += t.encode(a - u)), (u = a))),
              (d += e);
          }
          return d;
        }),
        (o.prototype._generateSourcesContent = function (e, t) {
          return e.map(function (e) {
            if (!this._sourcesContents) return null;
            null != t && (e = n.relative(t, e));
            var r = n.toSetString(e);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null;
          }, this);
        }),
        (o.prototype.toJSON = function () {
          var e = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings()
          };
          return (
            null != this._file && (e.file = this._file),
            null != this._sourceRoot && (e.sourceRoot = this._sourceRoot),
            this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)),
            e
          );
        }),
        (o.prototype.toString = function () {
          return JSON.stringify(this.toJSON());
        }),
        (e.SourceMapGenerator = o);
    }),
    Yt = {};
  Ft(Yt, {
    AtKeyword: () => Zt,
    BadString: () => tn,
    BadUrl: () => rn,
    CDC: () => hn,
    CDO: () => un,
    Colon: () => dn,
    Comma: () => mn,
    Comment: () => vn,
    Delim: () => an,
    Dimension: () => ln,
    EOF: () => Qt,
    Function: () => Jt,
    Hash: () => Xt,
    Ident: () => Kt,
    LeftCurlyBracket: () => wn,
    LeftParenthesis: () => bn,
    LeftSquareBracket: () => gn,
    Number: () => on,
    Percentage: () => sn,
    RightCurlyBracket: () => kn,
    RightParenthesis: () => yn,
    RightSquareBracket: () => fn,
    Semicolon: () => pn,
    String: () => en,
    Url: () => nn,
    WhiteSpace: () => cn
  });
  var Qt = 0,
    Kt = 1,
    Jt = 2,
    Zt = 3,
    Xt = 4,
    en = 5,
    tn = 6,
    nn = 7,
    rn = 8,
    an = 9,
    on = 10,
    sn = 11,
    ln = 12,
    cn = 13,
    un = 14,
    hn = 15,
    dn = 16,
    pn = 17,
    mn = 18,
    gn = 19,
    fn = 20,
    bn = 21,
    yn = 22,
    wn = 23,
    kn = 24,
    vn = 25;
  function xn(e) {
    return e >= 48 && e <= 57;
  }
  function En(e) {
    return xn(e) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
  }
  function An(e) {
    return e >= 65 && e <= 90;
  }
  function Sn(e) {
    return (
      (function (e) {
        return (
          An(e) ||
          (function (e) {
            return e >= 97 && e <= 122;
          })(e)
        );
      })(e) ||
      (function (e) {
        return e >= 128;
      })(e) ||
      95 === e
    );
  }
  function Tn(e) {
    return Sn(e) || xn(e) || 45 === e;
  }
  function Cn(e) {
    return (e >= 0 && e <= 8) || 11 === e || (e >= 14 && e <= 31) || 127 === e;
  }
  function Rn(e) {
    return 10 === e || 13 === e || 12 === e;
  }
  function _n(e) {
    return Rn(e) || 32 === e || 9 === e;
  }
  function In(e, t) {
    return !(92 !== e || Rn(t) || 0 === t);
  }
  function zn(e, t, n) {
    return 45 === e ? Sn(t) || 45 === t || In(t, n) : !!Sn(e) || (92 === e && In(e, t));
  }
  function Ln(e, t, n) {
    return 43 === e || 45 === e ? (xn(t) ? 2 : 46 === t && xn(n) ? 3 : 0) : 46 === e ? (xn(t) ? 2 : 0) : xn(e) ? 1 : 0;
  }
  function Nn(e) {
    return 65279 === e || 65534 === e ? 1 : 0;
  }
  var Pn = new Array(128),
    Mn = 130,
    On = 131,
    Un = 132,
    Dn = 133;
  for (let e = 0; e < Pn.length; e++) Pn[e] = (_n(e) && Mn) || (xn(e) && On) || (Sn(e) && Un) || (Cn(e) && Dn) || e || 128;
  function qn(e) {
    return e < 128 ? Pn[e] : Un;
  }
  function jn(e, t) {
    return t < e.length ? e.charCodeAt(t) : 0;
  }
  function Fn(e, t, n) {
    return 13 === n && 10 === jn(e, t + 1) ? 2 : 1;
  }
  function Bn(e, t, n) {
    let r = e.charCodeAt(t);
    return An(r) && (r |= 32), r === n;
  }
  function Hn(e, t, n, r) {
    if (n - t !== r.length || t < 0 || n > e.length) return !1;
    for (let a = t; a < n; a++) {
      let n = r.charCodeAt(a - t),
        o = e.charCodeAt(a);
      if ((An(o) && (o |= 32), o !== n)) return !1;
    }
    return !0;
  }
  function Vn(e, t) {
    for (; t < e.length && _n(e.charCodeAt(t)); t++);
    return t;
  }
  function Wn(e, t) {
    for (; t < e.length && xn(e.charCodeAt(t)); t++);
    return t;
  }
  function $n(e, t) {
    if (En(jn(e, (t += 2) - 1))) {
      for (let n = Math.min(e.length, t + 5); t < n && En(jn(e, t)); t++);
      let n = jn(e, t);
      _n(n) && (t += Fn(e, t, n));
    }
    return t;
  }
  function Gn(e, t) {
    for (; t < e.length; t++) {
      let n = e.charCodeAt(t);
      if (!Tn(n)) {
        if (In(n, jn(e, t + 1))) {
          t = $n(e, t) - 1;
          continue;
        }
        break;
      }
    }
    return t;
  }
  function Yn(e, t) {
    let n = e.charCodeAt(t);
    if (
      ((43 === n || 45 === n) && (n = e.charCodeAt((t += 1))),
      xn(n) && ((t = Wn(e, t + 1)), (n = e.charCodeAt(t))),
      46 === n && xn(e.charCodeAt(t + 1)) && (t = Wn(e, (t += 2))),
      Bn(e, t, 101))
    ) {
      let r = 0;
      (n = e.charCodeAt(t + 1)), (45 === n || 43 === n) && ((r = 1), (n = e.charCodeAt(t + 2))), xn(n) && (t = Wn(e, t + 1 + r + 1));
    }
    return t;
  }
  function Qn(e, t) {
    for (; t < e.length; t++) {
      let n = e.charCodeAt(t);
      if (41 === n) {
        t++;
        break;
      }
      In(n, jn(e, t + 1)) && (t = $n(e, t));
    }
    return t;
  }
  function Kn(e) {
    if (1 === e.length && !En(e.charCodeAt(0))) return e[0];
    let t = parseInt(e, 16);
    return (0 === t || (t >= 55296 && t <= 57343) || t > 1114111) && (t = 65533), String.fromCodePoint(t);
  }
  var Jn = [
    "EOF-token",
    "ident-token",
    "function-token",
    "at-keyword-token",
    "hash-token",
    "string-token",
    "bad-string-token",
    "url-token",
    "bad-url-token",
    "delim-token",
    "number-token",
    "percentage-token",
    "dimension-token",
    "whitespace-token",
    "CDO-token",
    "CDC-token",
    "colon-token",
    "semicolon-token",
    "comma-token",
    "[-token",
    "]-token",
    "(-token",
    ")-token",
    "{-token",
    "}-token"
  ];
  function Zn(e = null, t) {
    return null === e || e.length < t ? new Uint32Array(Math.max(t + 1024, 16384)) : e;
  }
  function Xn(e) {
    let t = e.source,
      n = t.length,
      r = t.length > 0 ? Nn(t.charCodeAt(0)) : 0,
      a = Zn(e.lines, n),
      o = Zn(e.columns, n),
      i = e.startLine,
      s = e.startColumn;
    for (let e = r; e < n; e++) {
      let r = t.charCodeAt(e);
      (a[e] = i),
        (o[e] = s++),
        (10 === r || 13 === r || 12 === r) &&
          (13 === r && e + 1 < n && 10 === t.charCodeAt(e + 1) && (e++, (a[e] = i), (o[e] = s)), i++, (s = 1));
    }
    (a[n] = i), (o[n] = s), (e.lines = a), (e.columns = o), (e.computed = !0);
  }
  var er = class {
      constructor() {
        (this.lines = null), (this.columns = null), (this.computed = !1);
      }
      setSource(e, t = 0, n = 1, r = 1) {
        (this.source = e), (this.startOffset = t), (this.startLine = n), (this.startColumn = r), (this.computed = !1);
      }
      getLocation(e, t) {
        return this.computed || Xn(this), { source: t, offset: this.startOffset + e, line: this.lines[e], column: this.columns[e] };
      }
      getLocationRange(e, t, n) {
        return (
          this.computed || Xn(this),
          {
            source: n,
            start: { offset: this.startOffset + e, line: this.lines[e], column: this.columns[e] },
            end: { offset: this.startOffset + t, line: this.lines[t], column: this.columns[t] }
          }
        );
      }
    },
    tr = 16777215,
    nr = 24,
    rr = new Map([
      [2, 22],
      [21, 22],
      [19, 20],
      [23, 24]
    ]),
    ar = class {
      constructor(e, t) {
        this.setSource(e, t);
      }
      reset() {
        (this.eof = !1),
          (this.tokenIndex = -1),
          (this.tokenType = 0),
          (this.tokenStart = this.firstCharOffset),
          (this.tokenEnd = this.firstCharOffset);
      }
      setSource(e = "", t = () => {}) {
        let n = (e = String(e || "")).length,
          r = Zn(this.offsetAndType, e.length + 1),
          a = Zn(this.balance, e.length + 1),
          o = 0,
          i = 0,
          s = 0,
          l = -1;
        for (
          this.offsetAndType = null,
            this.balance = null,
            t(e, (e, t, c) => {
              switch (e) {
                default:
                  a[o] = n;
                  break;
                case i: {
                  let e = s & tr;
                  for (s = a[e], i = s >> nr, a[o] = e, a[e++] = o; e < o; e++) a[e] === n && (a[e] = o);
                  break;
                }
                case 21:
                case 2:
                case 19:
                case 23:
                  (a[o] = s), (i = rr.get(e)), (s = (i << nr) | o);
              }
              (r[o++] = (e << nr) | c), -1 === l && (l = t);
            }),
            r[o] = 0 | n,
            a[o] = n,
            a[n] = n;
          0 !== s;

        ) {
          let e = s & tr;
          (s = a[e]), (a[e] = n);
        }
        (this.source = e),
          (this.firstCharOffset = -1 === l ? 0 : l),
          (this.tokenCount = o),
          (this.offsetAndType = r),
          (this.balance = a),
          this.reset(),
          this.next();
      }
      lookupType(e) {
        return (e += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e] >> nr : 0;
      }
      lookupOffset(e) {
        return (e += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e - 1] & tr : this.source.length;
      }
      lookupValue(e, t) {
        return (e += this.tokenIndex) < this.tokenCount && Hn(this.source, this.offsetAndType[e - 1] & tr, this.offsetAndType[e] & tr, t);
      }
      getTokenStart(e) {
        return e === this.tokenIndex
          ? this.tokenStart
          : e > 0
          ? e < this.tokenCount
            ? this.offsetAndType[e - 1] & tr
            : this.offsetAndType[this.tokenCount] & tr
          : this.firstCharOffset;
      }
      substrToCursor(e) {
        return this.source.substring(e, this.tokenStart);
      }
      isBalanceEdge(e) {
        return this.balance[this.tokenIndex] < e;
      }
      isDelim(e, t) {
        return t
          ? 9 === this.lookupType(t) && this.source.charCodeAt(this.lookupOffset(t)) === e
          : 9 === this.tokenType && this.source.charCodeAt(this.tokenStart) === e;
      }
      skip(e) {
        let t = this.tokenIndex + e;
        t < this.tokenCount
          ? ((this.tokenIndex = t),
            (this.tokenStart = this.offsetAndType[t - 1] & tr),
            (t = this.offsetAndType[t]),
            (this.tokenType = t >> nr),
            (this.tokenEnd = t & tr))
          : ((this.tokenIndex = this.tokenCount), this.next());
      }
      next() {
        let e = this.tokenIndex + 1;
        e < this.tokenCount
          ? ((this.tokenIndex = e),
            (this.tokenStart = this.tokenEnd),
            (e = this.offsetAndType[e]),
            (this.tokenType = e >> nr),
            (this.tokenEnd = e & tr))
          : ((this.eof = !0),
            (this.tokenIndex = this.tokenCount),
            (this.tokenType = 0),
            (this.tokenStart = this.tokenEnd = this.source.length));
      }
      skipSC() {
        for (; 13 === this.tokenType || 25 === this.tokenType; ) this.next();
      }
      skipUntilBalanced(e, t) {
        let n,
          r,
          a = e;
        e: for (; a < this.tokenCount && ((n = this.balance[a]), !(n < e)); a++)
          switch (((r = a > 0 ? this.offsetAndType[a - 1] & tr : this.firstCharOffset), t(this.source.charCodeAt(r)))) {
            case 1:
              break e;
            case 2:
              a++;
              break e;
            default:
              this.balance[n] === a && (a = n);
          }
        this.skip(a - this.tokenIndex);
      }
      forEachToken(e) {
        for (let t = 0, n = this.firstCharOffset; t < this.tokenCount; t++) {
          let r = n,
            a = this.offsetAndType[t],
            o = a & tr;
          (n = o), e(a >> nr, r, o, t);
        }
      }
      dump() {
        let e = new Array(this.tokenCount);
        return (
          this.forEachToken((t, n, r, a) => {
            e[a] = { idx: a, type: Jn[t], chunk: this.source.substring(n, r), balance: this.balance[a] };
          }),
          e
        );
      }
    };
  function or(e, t) {
    function n(t) {
      return t < s ? e.charCodeAt(t) : 0;
    }
    function r() {
      return (
        (c = Yn(e, c)), zn(n(c), n(c + 1), n(c + 2)) ? ((i = 12), void (c = Gn(e, c))) : 37 === n(c) ? ((i = 11), void c++) : void (i = 10)
      );
    }
    function a() {
      let t = c;
      return (
        (c = Gn(e, c)),
        Hn(e, t, c, "url") && 40 === n(c)
          ? ((c = Vn(e, c + 1)),
            34 === n(c) || 39 === n(c)
              ? ((i = 2), void (c = t + 4))
              : void (function () {
                  for (i = 7, c = Vn(e, c); c < e.length; c++) {
                    let t = e.charCodeAt(c);
                    switch (qn(t)) {
                      case 41:
                        return void c++;
                      case Mn:
                        return (c = Vn(e, c)), 41 === n(c) || c >= e.length ? void (c < e.length && c++) : ((c = Qn(e, c)), void (i = 8));
                      case 34:
                      case 39:
                      case 40:
                      case Dn:
                        return (c = Qn(e, c)), void (i = 8);
                      case 92:
                        if (In(t, n(c + 1))) {
                          c = $n(e, c) - 1;
                          break;
                        }
                        return (c = Qn(e, c)), void (i = 8);
                    }
                  }
                })())
          : 40 === n(c)
          ? ((i = 2), void c++)
          : void (i = 1)
      );
    }
    function o(t) {
      for (t || (t = n(c++)), i = 5; c < e.length; c++) {
        let r = e.charCodeAt(c);
        switch (qn(r)) {
          case t:
            return void c++;
          case Mn:
            if (Rn(r)) return (c += Fn(e, c, r)), void (i = 6);
            break;
          case 92:
            if (c === e.length - 1) break;
            let a = n(c + 1);
            Rn(a) ? (c += Fn(e, c + 1, a)) : In(r, a) && (c = $n(e, c) - 1);
        }
      }
    }
    let i,
      s = (e = String(e || "")).length,
      l = Nn(n(0)),
      c = l;
    for (; c < s; ) {
      let s = e.charCodeAt(c);
      switch (qn(s)) {
        case Mn:
          (i = 13), (c = Vn(e, c + 1));
          break;
        case 34:
          o();
          break;
        case 35:
          Tn(n(c + 1)) || In(n(c + 1), n(c + 2)) ? ((i = 4), (c = Gn(e, c + 1))) : ((i = 9), c++);
          break;
        case 39:
          o();
          break;
        case 40:
          (i = 21), c++;
          break;
        case 41:
          (i = 22), c++;
          break;
        case 43:
          Ln(s, n(c + 1), n(c + 2)) ? r() : ((i = 9), c++);
          break;
        case 44:
          (i = 18), c++;
          break;
        case 45:
          Ln(s, n(c + 1), n(c + 2))
            ? r()
            : 45 === n(c + 1) && 62 === n(c + 2)
            ? ((i = 15), (c += 3))
            : zn(s, n(c + 1), n(c + 2))
            ? a()
            : ((i = 9), c++);
          break;
        case 46:
          Ln(s, n(c + 1), n(c + 2)) ? r() : ((i = 9), c++);
          break;
        case 47:
          42 === n(c + 1) ? ((i = 25), (c = e.indexOf("*/", c + 2)), (c = -1 === c ? e.length : c + 2)) : ((i = 9), c++);
          break;
        case 58:
          (i = 16), c++;
          break;
        case 59:
          (i = 17), c++;
          break;
        case 60:
          33 === n(c + 1) && 45 === n(c + 2) && 45 === n(c + 3) ? ((i = 14), (c += 4)) : ((i = 9), c++);
          break;
        case 64:
          zn(n(c + 1), n(c + 2), n(c + 3)) ? ((i = 3), (c = Gn(e, c + 1))) : ((i = 9), c++);
          break;
        case 91:
          (i = 19), c++;
          break;
        case 92:
          In(s, n(c + 1)) ? a() : ((i = 9), c++);
          break;
        case 93:
          (i = 20), c++;
          break;
        case 123:
          (i = 23), c++;
          break;
        case 125:
          (i = 24), c++;
          break;
        case On:
          r();
          break;
        case Un:
          a();
          break;
        default:
          (i = 9), c++;
      }
      t(i, l, (l = c));
    }
  }
  var ir = null,
    sr = class {
      static createItem(e) {
        return { prev: null, next: null, data: e };
      }
      constructor() {
        (this.head = null), (this.tail = null), (this.cursor = null);
      }
      createItem(e) {
        return sr.createItem(e);
      }
      allocateCursor(e, t) {
        let n;
        return (
          null !== ir
            ? ((n = ir), (ir = ir.cursor), (n.prev = e), (n.next = t), (n.cursor = this.cursor))
            : (n = { prev: e, next: t, cursor: this.cursor }),
          (this.cursor = n),
          n
        );
      }
      releaseCursor() {
        let { cursor: e } = this;
        (this.cursor = e.cursor), (e.prev = null), (e.next = null), (e.cursor = ir), (ir = e);
      }
      updateCursors(e, t, n, r) {
        let { cursor: a } = this;
        for (; null !== a; ) a.prev === e && (a.prev = t), a.next === n && (a.next = r), (a = a.cursor);
      }
      *[Symbol.iterator]() {
        for (let e = this.head; null !== e; e = e.next) yield e.data;
      }
      get size() {
        let e = 0;
        for (let t = this.head; null !== t; t = t.next) e++;
        return e;
      }
      get isEmpty() {
        return null === this.head;
      }
      get first() {
        return this.head && this.head.data;
      }
      get last() {
        return this.tail && this.tail.data;
      }
      fromArray(e) {
        let t = null;
        this.head = null;
        for (let n of e) {
          let e = sr.createItem(n);
          null !== t ? (t.next = e) : (this.head = e), (e.prev = t), (t = e);
        }
        return (this.tail = t), this;
      }
      toArray() {
        return [...this];
      }
      toJSON() {
        return [...this];
      }
      forEach(e, t = this) {
        let n = this.allocateCursor(null, this.head);
        for (; null !== n.next; ) {
          let r = n.next;
          (n.next = r.next), e.call(t, r.data, r, this);
        }
        this.releaseCursor();
      }
      forEachRight(e, t = this) {
        let n = this.allocateCursor(this.tail, null);
        for (; null !== n.prev; ) {
          let r = n.prev;
          (n.prev = r.prev), e.call(t, r.data, r, this);
        }
        this.releaseCursor();
      }
      reduce(e, t, n = this) {
        let r,
          a = this.allocateCursor(null, this.head),
          o = t;
        for (; null !== a.next; ) (r = a.next), (a.next = r.next), (o = e.call(n, o, r.data, r, this));
        return this.releaseCursor(), o;
      }
      reduceRight(e, t, n = this) {
        let r,
          a = this.allocateCursor(this.tail, null),
          o = t;
        for (; null !== a.prev; ) (r = a.prev), (a.prev = r.prev), (o = e.call(n, o, r.data, r, this));
        return this.releaseCursor(), o;
      }
      some(e, t = this) {
        for (let n = this.head; null !== n; n = n.next) if (e.call(t, n.data, n, this)) return !0;
        return !1;
      }
      map(e, t = this) {
        let n = new sr();
        for (let r = this.head; null !== r; r = r.next) n.appendData(e.call(t, r.data, r, this));
        return n;
      }
      filter(e, t = this) {
        let n = new sr();
        for (let r = this.head; null !== r; r = r.next) e.call(t, r.data, r, this) && n.appendData(r.data);
        return n;
      }
      nextUntil(e, t, n = this) {
        if (null === e) return;
        let r = this.allocateCursor(null, e);
        for (; null !== r.next; ) {
          let e = r.next;
          if (((r.next = e.next), t.call(n, e.data, e, this))) break;
        }
        this.releaseCursor();
      }
      prevUntil(e, t, n = this) {
        if (null === e) return;
        let r = this.allocateCursor(e, null);
        for (; null !== r.prev; ) {
          let e = r.prev;
          if (((r.prev = e.prev), t.call(n, e.data, e, this))) break;
        }
        this.releaseCursor();
      }
      clear() {
        (this.head = null), (this.tail = null);
      }
      copy() {
        let e = new sr();
        for (let t of this) e.appendData(t);
        return e;
      }
      prepend(e) {
        return (
          this.updateCursors(null, e, this.head, e),
          null !== this.head ? ((this.head.prev = e), (e.next = this.head)) : (this.tail = e),
          (this.head = e),
          this
        );
      }
      prependData(e) {
        return this.prepend(sr.createItem(e));
      }
      append(e) {
        return this.insert(e);
      }
      appendData(e) {
        return this.insert(sr.createItem(e));
      }
      insert(e, t = null) {
        if (null !== t)
          if ((this.updateCursors(t.prev, e, t, e), null === t.prev)) {
            if (this.head !== t) throw new Error("before doesn't belong to list");
            (this.head = e), (t.prev = e), (e.next = t), this.updateCursors(null, e);
          } else (t.prev.next = e), (e.prev = t.prev), (t.prev = e), (e.next = t);
        else
          this.updateCursors(this.tail, e, null, e),
            null !== this.tail ? ((this.tail.next = e), (e.prev = this.tail)) : (this.head = e),
            (this.tail = e);
        return this;
      }
      insertData(e, t) {
        return this.insert(sr.createItem(e), t);
      }
      remove(e) {
        if ((this.updateCursors(e, e.prev, e, e.next), null !== e.prev)) e.prev.next = e.next;
        else {
          if (this.head !== e) throw new Error("item doesn't belong to list");
          this.head = e.next;
        }
        if (null !== e.next) e.next.prev = e.prev;
        else {
          if (this.tail !== e) throw new Error("item doesn't belong to list");
          this.tail = e.prev;
        }
        return (e.prev = null), (e.next = null), e;
      }
      push(e) {
        this.insert(sr.createItem(e));
      }
      pop() {
        return null !== this.tail ? this.remove(this.tail) : null;
      }
      unshift(e) {
        this.prepend(sr.createItem(e));
      }
      shift() {
        return null !== this.head ? this.remove(this.head) : null;
      }
      prependList(e) {
        return this.insertList(e, this.head);
      }
      appendList(e) {
        return this.insertList(e);
      }
      insertList(e, t) {
        return (
          null === e.head ||
            (null != t
              ? (this.updateCursors(t.prev, e.tail, t, e.head),
                null !== t.prev ? ((t.prev.next = e.head), (e.head.prev = t.prev)) : (this.head = e.head),
                (t.prev = e.tail),
                (e.tail.next = t))
              : (this.updateCursors(this.tail, e.tail, null, e.head),
                null !== this.tail ? ((this.tail.next = e.head), (e.head.prev = this.tail)) : (this.head = e.head),
                (this.tail = e.tail)),
            (e.head = null),
            (e.tail = null)),
          this
        );
      }
      replace(e, t) {
        "head" in t ? this.insertList(t, e) : this.insert(t, e), this.remove(e);
      }
    };
  function lr(e, t) {
    let n = Object.create(SyntaxError.prototype),
      r = new Error();
    return Object.assign(n, {
      name: e,
      message: t,
      get stack() {
        return (r.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}\n`);
      }
    });
  }
  var cr = 100,
    ur = 60,
    hr = "    ";
  function dr({ source: e, line: t, column: n }, r) {
    function a(e, t) {
      return o
        .slice(e, t)
        .map((t, n) => String(e + n + 1).padStart(l) + " |" + t)
        .join("\n");
    }
    let o = e.split(/\r\n?|\n|\f/),
      i = Math.max(1, t - r) - 1,
      s = Math.min(t + r, o.length + 1),
      l = Math.max(4, String(s).length) + 1,
      c = 0;
    (n += (hr.length - 1) * (o[t - 1].substr(0, n - 1).match(/\t/g) || []).length) > cr && ((c = n - ur + 3), (n = ur - 2));
    for (let e = i; e <= s; e++)
      e >= 0 &&
        e < o.length &&
        ((o[e] = o[e].replace(/\t/g, hr)),
        (o[e] = (c > 0 && o[e].length > c ? "…" : "") + o[e].substr(c, cr - 2) + (o[e].length > c + cr - 1 ? "…" : "")));
    return [a(i, t), new Array(n + l + 2).join("-") + "^", a(t, s)].filter(Boolean).join("\n");
  }
  function pr(e, t, n, r, a) {
    return Object.assign(lr("SyntaxError", e), {
      source: t,
      offset: n,
      line: r,
      column: a,
      sourceFragment: (e) => dr({ source: t, line: r, column: a }, isNaN(e) ? 0 : e),
      get formattedMessage() {
        return `Parse error: ${e}\n` + dr({ source: t, line: r, column: a }, 2);
      }
    });
  }
  function mr(e) {
    let t = this.createList(),
      n = !1,
      r = { recognizer: e };
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case 25:
          this.next();
          continue;
        case 13:
          (n = !0), this.next();
          continue;
      }
      let a = e.getNode.call(this, r);
      if (void 0 === a) break;
      n && (e.onWhiteSpace && e.onWhiteSpace.call(this, a, t, r), (n = !1)), t.push(a);
    }
    return n && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, r), t;
  }
  var gr = () => {},
    fr = 33,
    br = 35,
    yr = 59,
    wr = 123,
    kr = 0;
  function vr(e) {
    return function () {
      return this[e]();
    };
  }
  function xr(e) {
    let t = Object.create(null);
    for (let n in e) {
      let r = e[n],
        a = r.parse || r;
      a && (t[n] = a);
    }
    return t;
  }
  function Er(e) {
    let t = "",
      n = "<unknown>",
      r = !1,
      a = gr,
      o = !1,
      i = new er(),
      s = Object.assign(
        new ar(),
        (function (e) {
          let t = {
            context: Object.create(null),
            scope: Object.assign(Object.create(null), e.scope),
            atrule: xr(e.atrule),
            pseudo: xr(e.pseudo),
            node: xr(e.node)
          };
          for (let n in e.parseContext)
            switch (typeof e.parseContext[n]) {
              case "function":
                t.context[n] = e.parseContext[n];
                break;
              case "string":
                t.context[n] = vr(e.parseContext[n]);
            }
          return Dt(Dt({ config: t }, t), t.node);
        })(e || {}),
        {
          parseAtrulePrelude: !0,
          parseRulePrelude: !0,
          parseValue: !0,
          parseCustomProperty: !1,
          readSequence: mr,
          consumeUntilBalanceEnd: () => 0,
          consumeUntilLeftCurlyBracket: (e) => (e === wr ? 1 : 0),
          consumeUntilLeftCurlyBracketOrSemicolon: (e) => (e === wr || e === yr ? 1 : 0),
          consumeUntilExclamationMarkOrSemicolon: (e) => (e === fr || e === yr ? 1 : 0),
          consumeUntilSemicolonIncluded: (e) => (e === yr ? 2 : 0),
          createList: () => new sr(),
          createSingleNodeList: (e) => new sr().appendData(e),
          getFirstListNode: (e) => e && e.first,
          getLastListNode: (e) => e && e.last,
          parseWithFallback(e, t) {
            let n = this.tokenIndex;
            try {
              return e.call(this);
            } catch (e) {
              if (o) throw e;
              let r = t.call(this, n);
              return (o = !0), a(e, r), (o = !1), r;
            }
          },
          lookupNonWSType(e) {
            let t;
            do {
              if (((t = this.lookupType(e++)), 13 !== t)) return t;
            } while (t !== kr);
            return kr;
          },
          charCodeAt: (e) => (e >= 0 && e < t.length ? t.charCodeAt(e) : 0),
          substring: (e, n) => t.substring(e, n),
          substrToCursor(e) {
            return this.source.substring(e, this.tokenStart);
          },
          cmpChar: (e, n) => Bn(t, e, n),
          cmpStr: (e, n, r) => Hn(t, e, n, r),
          consume(e) {
            let t = this.tokenStart;
            return this.eat(e), this.substrToCursor(t);
          },
          consumeFunctionName() {
            let e = t.substring(this.tokenStart, this.tokenEnd - 1);
            return this.eat(2), e;
          },
          consumeNumber(e) {
            let n = t.substring(this.tokenStart, Yn(t, this.tokenStart));
            return this.eat(e), n;
          },
          eat(e) {
            if (this.tokenType !== e) {
              let t = Jn[e]
                  .slice(0, -6)
                  .replace(/-/g, " ")
                  .replace(/^./, (e) => e.toUpperCase()),
                n = `${/[[\](){}]/.test(t) ? `"${t}"` : t} is expected`,
                r = this.tokenStart;
              switch (e) {
                case 1:
                  2 === this.tokenType || 7 === this.tokenType
                    ? ((r = this.tokenEnd - 1), (n = "Identifier is expected but function found"))
                    : (n = "Identifier is expected");
                  break;
                case 4:
                  this.isDelim(br) && (this.next(), r++, (n = "Name is expected"));
                  break;
                case 11:
                  10 === this.tokenType && ((r = this.tokenEnd), (n = "Percent sign is expected"));
              }
              this.error(n, r);
            }
            this.next();
          },
          eatIdent(e) {
            (1 !== this.tokenType || !1 === this.lookupValue(0, e)) && this.error(`Identifier "${e}" is expected`), this.next();
          },
          eatDelim(e) {
            this.isDelim(e) || this.error(`Delim "${String.fromCharCode(e)}" is expected`), this.next();
          },
          getLocation: (e, t) => (r ? i.getLocationRange(e, t, n) : null),
          getLocationFromList(e) {
            if (r) {
              let t = this.getFirstListNode(e),
                r = this.getLastListNode(e);
              return i.getLocationRange(
                null !== t ? t.loc.start.offset - i.startOffset : this.tokenStart,
                null !== r ? r.loc.end.offset - i.startOffset : this.tokenStart,
                n
              );
            }
            return null;
          },
          error(e, n) {
            let r =
              void 0 !== n && n < t.length
                ? i.getLocation(n)
                : this.eof
                ? i.getLocation(
                    (function (e, t) {
                      for (; t >= 0 && _n(e.charCodeAt(t)); t--);
                      return t + 1;
                    })(t, t.length - 1)
                  )
                : i.getLocation(this.tokenStart);
            throw new pr(e || "Unexpected input", t, r.offset, r.line, r.column);
          }
        }
      );
    return Object.assign(
      function (e, l) {
        (t = e),
          (l = l || {}),
          s.setSource(t, or),
          i.setSource(t, l.offset, l.line, l.column),
          (n = l.filename || "<unknown>"),
          (r = Boolean(l.positions)),
          (a = "function" == typeof l.onParseError ? l.onParseError : gr),
          (o = !1),
          (s.parseAtrulePrelude = !("parseAtrulePrelude" in l) || Boolean(l.parseAtrulePrelude)),
          (s.parseRulePrelude = !("parseRulePrelude" in l) || Boolean(l.parseRulePrelude)),
          (s.parseValue = !("parseValue" in l) || Boolean(l.parseValue)),
          (s.parseCustomProperty = "parseCustomProperty" in l && Boolean(l.parseCustomProperty));
        let { context: c = "default", onComment: u } = l;
        if (!(c in s.context)) throw new Error("Unknown context `" + c + "`");
        "function" == typeof u &&
          s.forEachToken((e, n, r) => {
            if (25 === e) {
              let e = s.getLocation(n, r),
                a = Hn(t, r - 2, r, "*/") ? t.slice(n + 2, r - 2) : t.slice(n + 2, r);
              u(a, e);
            }
          });
        let h = s.context[c].call(s, l);
        return s.eof || s.error(), h;
      },
      { SyntaxError: pr, config: s.config }
    );
  }
  var Ar,
    Sr,
    Tr,
    Cr =
      ((Ar = Gt()),
      (Sr = 1),
      (Tr = null != Ar ? Ct(Pt(Ar)) : {}),
      ((e, t, n, r) => {
        if ((t && "object" == typeof t) || "function" == typeof t)
          for (let a of Lt(t)) !Mt.call(e, a) && a !== n && Rt(e, a, { get: () => t[a], enumerable: !(r = It(t, a)) || r.enumerable });
        return e;
      })(!Sr && Ar && Ar.__esModule ? Tr : Rt(Tr, "default", { value: Ar, enumerable: !0 }), Ar)),
    Rr = new Set(["Atrule", "Selector", "Declaration"]);
  var _r = {};
  Ft(_r, { safe: () => Mr, spec: () => Pr });
  var Ir = (e, t) => {
      if ((9 === e && (e = t), "string" == typeof e)) {
        let t = e.charCodeAt(0);
        return t > 127 ? 32768 : t << 8;
      }
      return e;
    },
    zr = [
      [1, 1],
      [1, 2],
      [1, 7],
      [1, 8],
      [1, "-"],
      [1, 10],
      [1, 11],
      [1, 12],
      [1, 15],
      [1, 21],
      [3, 1],
      [3, 2],
      [3, 7],
      [3, 8],
      [3, "-"],
      [3, 10],
      [3, 11],
      [3, 12],
      [3, 15],
      [4, 1],
      [4, 2],
      [4, 7],
      [4, 8],
      [4, "-"],
      [4, 10],
      [4, 11],
      [4, 12],
      [4, 15],
      [12, 1],
      [12, 2],
      [12, 7],
      [12, 8],
      [12, "-"],
      [12, 10],
      [12, 11],
      [12, 12],
      [12, 15],
      ["#", 1],
      ["#", 2],
      ["#", 7],
      ["#", 8],
      ["#", "-"],
      ["#", 10],
      ["#", 11],
      ["#", 12],
      ["#", 15],
      ["-", 1],
      ["-", 2],
      ["-", 7],
      ["-", 8],
      ["-", "-"],
      ["-", 10],
      ["-", 11],
      ["-", 12],
      ["-", 15],
      [10, 1],
      [10, 2],
      [10, 7],
      [10, 8],
      [10, 10],
      [10, 11],
      [10, 12],
      [10, "%"],
      [10, 15],
      ["@", 1],
      ["@", 2],
      ["@", 7],
      ["@", 8],
      ["@", "-"],
      ["@", 15],
      [".", 10],
      [".", 11],
      [".", 12],
      ["+", 10],
      ["+", 11],
      ["+", 12],
      ["/", "*"]
    ],
    Lr = zr.concat([
      [1, 4],
      [12, 4],
      [4, 4],
      [3, 21],
      [3, 5],
      [3, 16],
      [11, 11],
      [11, 12],
      [11, 2],
      [11, "-"],
      [22, 1],
      [22, 2],
      [22, 11],
      [22, 12],
      [22, 4],
      [22, "-"]
    ]);
  function Nr(e) {
    let t = new Set(e.map(([e, t]) => (Ir(e) << 16) | Ir(t)));
    return function (e, n, r) {
      let a = Ir(n, r),
        o = r.charCodeAt(0);
      return (
        ((45 === o && 1 !== n && 2 !== n && 15 !== n) || 43 === o ? t.has((e << 16) | (o << 8)) : t.has((e << 16) | a)) &&
          this.emit(" ", 13, !0),
        a
      );
    };
  }
  var Pr = Nr(zr),
    Mr = Nr(Lr),
    Or = 92;
  function Ur(e, t) {
    if ("function" != typeof t) e.children.forEach(this.node, this);
    else {
      let n = null;
      e.children.forEach((e) => {
        null !== n && t.call(this, n), this.node(e), (n = e);
      });
    }
  }
  function Dr(e) {
    or(e, (t, n, r) => {
      this.token(t, e.slice(n, r));
    });
  }
  function qr(e) {
    let t = new Map();
    for (let n in e.node) {
      let r = e.node[n];
      "function" == typeof (r.generate || r) && t.set(n, r.generate || r);
    }
    return function (e, n) {
      let r = "",
        a = 0,
        o = {
          node(e) {
            if (!t.has(e.type)) throw new Error("Unknown node type: " + e.type);
            t.get(e.type).call(i, e);
          },
          tokenBefore: Mr,
          token(e, t) {
            (a = this.tokenBefore(a, e, t)), this.emit(t, e, !1), 9 === e && t.charCodeAt(0) === Or && this.emit("\n", 13, !0);
          },
          emit(e) {
            r += e;
          },
          result: () => r
        };
      n &&
        ("function" == typeof n.decorator && (o = n.decorator(o)),
        n.sourceMap &&
          (o = (function (e) {
            let t = new Cr.SourceMapGenerator(),
              n = { line: 1, column: 0 },
              r = { line: 0, column: 0 },
              a = { line: 1, column: 0 },
              o = { generated: a },
              i = 1,
              s = 0,
              l = !1,
              c = e.node;
            e.node = function (e) {
              if (e.loc && e.loc.start && Rr.has(e.type)) {
                let c = e.loc.start.line,
                  u = e.loc.start.column - 1;
                (r.line !== c || r.column !== u) &&
                  ((r.line = c),
                  (r.column = u),
                  (n.line = i),
                  (n.column = s),
                  l && ((l = !1), (n.line !== a.line || n.column !== a.column) && t.addMapping(o)),
                  (l = !0),
                  t.addMapping({ source: e.loc.source, original: r, generated: n }));
              }
              c.call(this, e), l && Rr.has(e.type) && ((a.line = i), (a.column = s));
            };
            let u = e.emit;
            e.emit = function (e, t, n) {
              for (let t = 0; t < e.length; t++) 10 === e.charCodeAt(t) ? (i++, (s = 0)) : s++;
              u(e, t, n);
            };
            let h = e.result;
            return (
              (e.result = function () {
                return l && t.addMapping(o), { css: h(), map: t };
              }),
              e
            );
          })(o)),
        n.mode in _r && (o.tokenBefore = _r[n.mode]));
      let i = { node: (e) => o.node(e), children: Ur, token: (e, t) => o.token(e, t), tokenize: Dr };
      return o.node(e), o.result();
    };
  }
  var { hasOwnProperty: jr } = Object.prototype,
    Fr = function () {};
  function Br(e) {
    return "function" == typeof e ? e : Fr;
  }
  function Hr(e, t) {
    return function (n, r, a) {
      n.type === t && e.call(this, n, r, a);
    };
  }
  function Vr(e, t) {
    let n = t.structure,
      r = [];
    for (let e in n) {
      if (!1 === jr.call(n, e)) continue;
      let t = n[e],
        a = { name: e, type: !1, nullable: !1 };
      Array.isArray(t) || (t = [t]);
      for (let e of t) null === e ? (a.nullable = !0) : "string" == typeof e ? (a.type = "node") : Array.isArray(e) && (a.type = "list");
      a.type && r.push(a);
    }
    return r.length ? { context: t.walkContext, fields: r } : null;
  }
  function Wr(e, t) {
    let n = e.fields.slice(),
      r = e.context,
      a = "string" == typeof r;
    return (
      t && n.reverse(),
      function (e, o, i, s) {
        let l;
        a && ((l = o[r]), (o[r] = e));
        for (let r of n) {
          let n = e[r.name];
          if (!r.nullable || n)
            if ("list" === r.type) {
              if (t ? n.reduceRight(s, !1) : n.reduce(s, !1)) return !0;
            } else if (i(n)) return !0;
        }
        a && (o[r] = l);
      }
    );
  }
  function $r({ StyleSheet: e, Atrule: t, Rule: n, Block: r, DeclarationList: a }) {
    return {
      Atrule: { StyleSheet: e, Atrule: t, Rule: n, Block: r },
      Rule: { StyleSheet: e, Atrule: t, Rule: n, Block: r },
      Declaration: { StyleSheet: e, Atrule: t, Rule: n, Block: r, DeclarationList: a }
    };
  }
  function Gr(e) {
    let t = (function (e) {
        let t = {};
        for (let n in e.node)
          if (jr.call(e.node, n)) {
            let r = e.node[n];
            if (!r.structure) throw new Error("Missed `structure` field in `" + n + "` node type definition");
            t[n] = Vr(0, r);
          }
        return t;
      })(e),
      n = {},
      r = {},
      a = Symbol("break-walk"),
      o = Symbol("skip-node");
    for (let e in t) jr.call(t, e) && null !== t[e] && ((n[e] = Wr(t[e], !1)), (r[e] = Wr(t[e], !0)));
    let i = $r(n),
      s = $r(r),
      l = function (e, l) {
        function c(e, t, n) {
          let r = u.call(m, e, t, n);
          return r === a || (r !== o && !!((d.hasOwnProperty(e.type) && d[e.type](e, m, c, p)) || h.call(m, e, t, n) === a));
        }
        let u = Fr,
          h = Fr,
          d = n,
          p = (e, t, n, r) => e || c(t, n, r),
          m = {
            break: a,
            skip: o,
            root: e,
            stylesheet: null,
            atrule: null,
            atrulePrelude: null,
            rule: null,
            selector: null,
            block: null,
            declaration: null,
            function: null
          };
        if ("function" == typeof l) u = l;
        else if (l && ((u = Br(l.enter)), (h = Br(l.leave)), l.reverse && (d = r), l.visit)) {
          if (i.hasOwnProperty(l.visit)) d = l.reverse ? s[l.visit] : i[l.visit];
          else if (!t.hasOwnProperty(l.visit))
            throw new Error("Bad value `" + l.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
          (u = Hr(u, l.visit)), (h = Hr(h, l.visit));
        }
        if (u === Fr && h === Fr) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
        c(e);
      };
    return (
      (l.break = a),
      (l.skip = o),
      (l.find = function (e, t) {
        let n = null;
        return (
          l(e, function (e, r, o) {
            if (t.call(this, e, r, o)) return (n = e), a;
          }),
          n
        );
      }),
      (l.findLast = function (e, t) {
        let n = null;
        return (
          l(e, {
            reverse: !0,
            enter(e, r, o) {
              if (t.call(this, e, r, o)) return (n = e), a;
            }
          }),
          n
        );
      }),
      (l.findAll = function (e, t) {
        let n = [];
        return (
          l(e, function (e, r, a) {
            t.call(this, e, r, a) && n.push(e);
          }),
          n
        );
      }),
      l
    );
  }
  function Yr(e) {
    return e;
  }
  function Qr(e, t, n, r) {
    let a;
    switch (e.type) {
      case "Group":
        a =
          (function (e, t, n, r) {
            let a = " " === e.combinator || r ? e.combinator : " " + e.combinator + " ",
              o = e.terms.map((e) => Qr(e, t, n, r)).join(a);
            return e.explicit || n ? (r || "," === o[0] ? "[" : "[ ") + o + (r ? "]" : " ]") : o;
          })(e, t, n, r) + (e.disallowEmpty ? "!" : "");
        break;
      case "Multiplier":
        return (
          Qr(e.term, t, n, r) +
          t(
            (function (e) {
              let { min: t, max: n, comma: r } = e;
              return 0 === t && 0 === n
                ? r
                  ? "#?"
                  : "*"
                : 0 === t && 1 === n
                ? "?"
                : 1 === t && 0 === n
                ? r
                  ? "#"
                  : "+"
                : 1 === t && 1 === n
                ? ""
                : (r ? "#" : "") + (t === n ? "{" + t + "}" : "{" + t + "," + (0 !== n ? n : "") + "}");
            })(e),
            e
          )
        );
      case "Type":
        a =
          "<" +
          e.name +
          (e.opts
            ? t(
                (function (e) {
                  if ("Range" === e.type) return " [" + (null === e.min ? "-∞" : e.min) + "," + (null === e.max ? "∞" : e.max) + "]";
                  throw new Error("Unknown node type `" + e.type + "`");
                })(e.opts),
                e.opts
              )
            : "") +
          ">";
        break;
      case "Property":
        a = "<'" + e.name + "'>";
        break;
      case "Keyword":
        a = e.name;
        break;
      case "AtKeyword":
        a = "@" + e.name;
        break;
      case "Function":
        a = e.name + "(";
        break;
      case "String":
      case "Token":
        a = e.value;
        break;
      case "Comma":
        a = ",";
        break;
      default:
        throw new Error("Unknown node type `" + e.type + "`");
    }
    return t(a, e);
  }
  function Kr(e, t) {
    let n = Yr,
      r = !1,
      a = !1;
    return (
      "function" == typeof t
        ? (n = t)
        : t && ((r = Boolean(t.forceBraces)), (a = Boolean(t.compact)), "function" == typeof t.decorate && (n = t.decorate)),
      Qr(e, n, r, a)
    );
  }
  var Jr = { offset: 0, line: 1, column: 1 };
  function Zr(e, t) {
    let n = e && e.loc && e.loc[t];
    return n ? ("line" in n ? Xr(n) : n) : null;
  }
  function Xr({ offset: e, line: t, column: n }, r) {
    let a = { offset: e, line: t, column: n };
    if (r) {
      let e = r.split(/\n|\r\n?|\f/);
      (a.offset += r.length), (a.line += e.length - 1), (a.column = 1 === e.length ? a.column + r.length : e.pop().length + 1);
    }
    return a;
  }
  var ea = function (e, t) {
      let n = lr("SyntaxReferenceError", e + (t ? " `" + t + "`" : ""));
      return (n.reference = t), n;
    },
    ta = function (e, t, n, r) {
      let a = lr("SyntaxMatchError", e),
        {
          css: o,
          mismatchOffset: i,
          mismatchLength: s,
          start: l,
          end: c
        } = (function (e, t) {
          let n,
            r,
            a = e.tokens,
            o = e.longestMatch,
            i = (o < a.length && a[o].node) || null,
            s = i !== t ? i : null,
            l = 0,
            c = 0,
            u = 0,
            h = "";
          for (let e = 0; e < a.length; e++) {
            let t = a[e].value;
            e === o && ((c = t.length), (l = h.length)), null !== s && a[e].node === s && (e <= o ? u++ : (u = 0)), (h += t);
          }
          return (
            o === a.length || u > 1
              ? ((n = Zr(s || t, "end") || Xr(Jr, h)), (r = Xr(n)))
              : ((n = Zr(s, "start") || Xr(Zr(t, "start") || Jr, h.slice(0, l))), (r = Zr(s, "end") || Xr(n, h.substr(l, c)))),
            { css: h, mismatchOffset: l, mismatchLength: c, start: n, end: r }
          );
        })(r, n);
      return (
        (a.rawMessage = e),
        (a.syntax = t ? Kr(t) : "<generic>"),
        (a.css = o),
        (a.mismatchOffset = i),
        (a.mismatchLength = s),
        (a.message =
          e +
          "\n  syntax: " +
          a.syntax +
          "\n   value: " +
          (o || "<empty string>") +
          "\n  --------" +
          new Array(a.mismatchOffset + 1).join("-") +
          "^"),
        Object.assign(a, l),
        (a.loc = { source: (n && n.loc && n.loc.source) || "<unknown>", start: l, end: c }),
        a
      );
    },
    na = new Map(),
    ra = new Map(),
    aa = 45,
    oa = function (e) {
      if (na.has(e)) return na.get(e);
      let t = e.toLowerCase(),
        n = na.get(t);
      if (void 0 === n) {
        let e = la(t, 0),
          r = e ? "" : ca(t, 0);
        n = Object.freeze({ basename: t.substr(r.length), name: t, prefix: r, vendor: r, custom: e });
      }
      return na.set(e, n), n;
    },
    ia = function (e) {
      if (ra.has(e)) return ra.get(e);
      let t = e,
        n = e[0];
      "/" === n ? (n = "/" === e[1] ? "//" : "/") : "_" !== n && "*" !== n && "$" !== n && "#" !== n && "+" !== n && "&" !== n && (n = "");
      let r = la(t, n.length);
      if (!r && ((t = t.toLowerCase()), ra.has(t))) {
        let n = ra.get(t);
        return ra.set(e, n), n;
      }
      let a = r ? "" : ca(t, n.length),
        o = t.substr(0, n.length + a.length),
        i = Object.freeze({ basename: t.substr(o.length), name: t.substr(n.length), hack: n, vendor: a, prefix: o, custom: r });
      return ra.set(e, i), i;
    },
    sa = ca;
  function la(e, t) {
    return (t = t || 0), e.length - t >= 2 && e.charCodeAt(t) === aa && e.charCodeAt(t + 1) === aa;
  }
  function ca(e, t) {
    if (((t = t || 0), e.length - t >= 3 && e.charCodeAt(t) === aa && e.charCodeAt(t + 1) !== aa)) {
      let n = e.indexOf("-", t + 2);
      if (-1 !== n) return e.substring(t, n + 1);
    }
    return "";
  }
  var ua = ["initial", "inherit", "unset", "revert", "revert-layer"],
    ha = 43,
    da = 45,
    pa = !0;
  function ma(e, t) {
    return null !== e && 9 === e.type && e.value.charCodeAt(0) === t;
  }
  function ga(e, t, n) {
    for (; null !== e && (13 === e.type || 25 === e.type); ) e = n(++t);
    return t;
  }
  function fa(e, t, n, r) {
    if (!e) return 0;
    let a = e.value.charCodeAt(t);
    if (a === ha || a === da) {
      if (n) return 0;
      t++;
    }
    for (; t < e.value.length; t++) if (!xn(e.value.charCodeAt(t))) return 0;
    return r + 1;
  }
  function ba(e, t, n) {
    let r = !1,
      a = ga(e, t, n);
    if (null === (e = n(a))) return t;
    if (10 !== e.type) {
      if (!ma(e, ha) && !ma(e, da)) return t;
      if (((r = !0), (a = ga(n(++a), a, n)), null === (e = n(a)) || 10 !== e.type)) return 0;
    }
    if (!r) {
      let t = e.value.charCodeAt(0);
      if (t !== ha && t !== da) return 0;
    }
    return fa(e, r ? 0 : 1, r, a);
  }
  var ya = 45,
    wa = 63;
  function ka(e, t) {
    return null !== e && 9 === e.type && e.value.charCodeAt(0) === t;
  }
  function va(e, t, n) {
    let r = 0;
    for (let a = t; a < e.value.length; a++) {
      let o = e.value.charCodeAt(a);
      if (o === ya && n && 0 !== r) return va(e, t + r + 1, !1), 6;
      if (!En(o) || ++r > 6) return 0;
    }
    return r;
  }
  function xa(e, t, n) {
    if (!e) return 0;
    for (; ka(n(t), wa); ) {
      if (++e > 6) return 0;
      t++;
    }
    return t;
  }
  var Ea = ["calc(", "-moz-calc(", "-webkit-calc("],
    Aa = new Map([
      [2, 22],
      [21, 22],
      [19, 20],
      [23, 24]
    ]);
  function Sa(e, t) {
    return t < e.length ? e.charCodeAt(t) : 0;
  }
  function Ta(e, t) {
    return Hn(e, 0, e.length, t);
  }
  function Ca(e, t) {
    for (let n = 0; n < t.length; n++) if (Ta(e, t[n])) return !0;
    return !1;
  }
  function Ra(e, t) {
    return t === e.length - 2 && 92 === Sa(e, t) && xn(Sa(e, t + 1));
  }
  function _a(e, t, n) {
    if (e && "Range" === e.type) {
      let r = Number(void 0 !== n && n !== t.length ? t.substr(0, n) : t);
      if (
        isNaN(r) ||
        (null !== e.min && r < e.min && "string" != typeof e.min) ||
        (null !== e.max && r > e.max && "string" != typeof e.max)
      )
        return !0;
    }
    return !1;
  }
  function Ia(e) {
    return function (t, n, r) {
      return null === t
        ? 0
        : 2 === t.type && Ca(t.value, Ea)
        ? (function (e, t) {
            let n = 0,
              r = [],
              a = 0;
            e: do {
              switch (e.type) {
                case 24:
                case 22:
                case 20:
                  if (e.type !== n) break e;
                  if (((n = r.pop()), 0 === r.length)) {
                    a++;
                    break e;
                  }
                  break;
                case 2:
                case 21:
                case 19:
                case 23:
                  r.push(n), (n = Aa.get(e.type));
              }
              a++;
            } while ((e = t(a)));
            return a;
          })(t, n)
        : e(t, n, r);
    };
  }
  function za(e) {
    return function (t) {
      return null === t || t.type !== e ? 0 : 1;
    };
  }
  function La(e) {
    return (
      e && (e = new Set(e)),
      function (t, n, r) {
        if (null === t || 12 !== t.type) return 0;
        let a = Yn(t.value, 0);
        if (null !== e) {
          let n = t.value.indexOf("\\", a),
            r = -1 !== n && Ra(t.value, n) ? t.value.substring(a, n) : t.value.substr(a);
          if (!1 === e.has(r.toLowerCase())) return 0;
        }
        return _a(r, t.value, a) ? 0 : 1;
      }
    );
  }
  function Na(e) {
    return (
      "function" != typeof e &&
        (e = function () {
          return 0;
        }),
      function (t, n, r) {
        return null !== t && 10 === t.type && 0 === Number(t.value) ? 1 : e(t, n, r);
      }
    );
  }
  var Pa = {
      "ident-token": za(1),
      "function-token": za(2),
      "at-keyword-token": za(3),
      "hash-token": za(4),
      "string-token": za(5),
      "bad-string-token": za(6),
      "url-token": za(7),
      "bad-url-token": za(8),
      "delim-token": za(9),
      "number-token": za(10),
      "percentage-token": za(11),
      "dimension-token": za(12),
      "whitespace-token": za(13),
      "CDO-token": za(14),
      "CDC-token": za(15),
      "colon-token": za(16),
      "semicolon-token": za(17),
      "comma-token": za(18),
      "[-token": za(19),
      "]-token": za(20),
      "(-token": za(21),
      ")-token": za(22),
      "{-token": za(23),
      "}-token": za(24)
    },
    Ma = {
      string: za(5),
      ident: za(1),
      percentage: Ia(function (e, t, n) {
        return null === e || 11 !== e.type || _a(n, e.value, e.value.length - 1) ? 0 : 1;
      }),
      zero: Na(),
      number: Ia(function (e, t, n) {
        if (null === e) return 0;
        let r = Yn(e.value, 0);
        return (r !== e.value.length && !Ra(e.value, r)) || _a(n, e.value, r) ? 0 : 1;
      }),
      integer: Ia(function (e, t, n) {
        if (null === e || 10 !== e.type) return 0;
        let r = 43 === Sa(e.value, 0) || 45 === Sa(e.value, 0) ? 1 : 0;
        for (; r < e.value.length; r++) if (!xn(Sa(e.value, r))) return 0;
        return _a(n, e.value, r) ? 0 : 1;
      }),
      "custom-ident": function (e) {
        if (null === e || 1 !== e.type) return 0;
        let t = e.value.toLowerCase();
        return Ca(t, ua) || Ta(t, "default") ? 0 : 1;
      },
      "custom-property-name": function (e) {
        return null === e || 1 !== e.type || 45 !== Sa(e.value, 0) || 45 !== Sa(e.value, 1) ? 0 : 1;
      },
      "hex-color": function (e) {
        if (null === e || 4 !== e.type) return 0;
        let t = e.value.length;
        if (4 !== t && 5 !== t && 7 !== t && 9 !== t) return 0;
        for (let n = 1; n < t; n++) if (!En(Sa(e.value, n))) return 0;
        return 1;
      },
      "id-selector": function (e) {
        return null !== e && 4 === e.type && zn(Sa(e.value, 1), Sa(e.value, 2), Sa(e.value, 3)) ? 1 : 0;
      },
      "an-plus-b": function (e, t) {
        let n = 0;
        if (!e) return 0;
        if (10 === e.type) return fa(e, 0, false, n);
        if (1 === e.type && e.value.charCodeAt(0) === da) {
          if (!Bn(e.value, 1, 110)) return 0;
          switch (e.value.length) {
            case 2:
              return ba(t(++n), n, t);
            case 3:
              return e.value.charCodeAt(2) !== da ? 0 : ((n = ga(t(++n), n, t)), fa((e = t(n)), 0, pa, n));
            default:
              return e.value.charCodeAt(2) !== da ? 0 : fa(e, 3, pa, n);
          }
        } else if (1 === e.type || (ma(e, ha) && 1 === t(n + 1).type)) {
          if ((1 !== e.type && (e = t(++n)), null === e || !Bn(e.value, 0, 110))) return 0;
          switch (e.value.length) {
            case 1:
              return ba(t(++n), n, t);
            case 2:
              return e.value.charCodeAt(1) !== da ? 0 : ((n = ga(t(++n), n, t)), fa((e = t(n)), 0, pa, n));
            default:
              return e.value.charCodeAt(1) !== da ? 0 : fa(e, 2, pa, n);
          }
        } else if (12 === e.type) {
          let r = e.value.charCodeAt(0),
            a = r === ha || r === da ? 1 : 0,
            o = a;
          for (; o < e.value.length && xn(e.value.charCodeAt(o)); o++);
          return o !== a && Bn(e.value, o, 110)
            ? o + 1 === e.value.length
              ? ba(t(++n), n, t)
              : e.value.charCodeAt(o + 1) !== da
              ? 0
              : o + 2 === e.value.length
              ? ((n = ga(t(++n), n, t)), fa((e = t(n)), 0, pa, n))
              : fa(e, o + 2, pa, n)
            : 0;
        }
        return 0;
      },
      urange: function (e, t) {
        let n = 0;
        if (null === e || 1 !== e.type || !Bn(e.value, 0, 117) || null === (e = t(++n))) return 0;
        if (ka(e, 43)) return null === (e = t(++n)) ? 0 : 1 === e.type ? xa(va(e, 0, !0), ++n, t) : ka(e, wa) ? xa(1, ++n, t) : 0;
        if (10 === e.type) {
          let r = va(e, 1, !0);
          return 0 === r
            ? 0
            : null === (e = t(++n))
            ? n
            : 12 === e.type || 10 === e.type
            ? (function (e, t) {
                return e.value.charCodeAt(0) === t;
              })(e, ya) && va(e, 1, !1)
              ? n + 1
              : 0
            : xa(r, n, t);
        }
        return 12 === e.type ? xa(va(e, 1, !0), ++n, t) : 0;
      },
      "declaration-value": function (e, t) {
        if (!e) return 0;
        let n = 0,
          r = [],
          a = 0;
        e: do {
          switch (e.type) {
            case 6:
            case 8:
              break e;
            case 24:
            case 22:
            case 20:
              if (e.type !== n) break e;
              n = r.pop();
              break;
            case 17:
              if (0 === n) break e;
              break;
            case 9:
              if (0 === n && "!" === e.value) break e;
              break;
            case 2:
            case 21:
            case 19:
            case 23:
              r.push(n), (n = Aa.get(e.type));
          }
          a++;
        } while ((e = t(a)));
        return a;
      },
      "any-value": function (e, t) {
        if (!e) return 0;
        let n = 0,
          r = [],
          a = 0;
        e: do {
          switch (e.type) {
            case 6:
            case 8:
              break e;
            case 24:
            case 22:
            case 20:
              if (e.type !== n) break e;
              n = r.pop();
              break;
            case 2:
            case 21:
            case 19:
            case 23:
              r.push(n), (n = Aa.get(e.type));
          }
          a++;
        } while ((e = t(a)));
        return a;
      }
    };
  function Oa(e) {
    return Dt(
      Dt(Dt({}, Pa), Ma),
      (function (e) {
        let { angle: t, decibel: n, frequency: r, flex: a, length: o, resolution: i, semitones: s, time: l } = e || {};
        return {
          dimension: Ia(La(null)),
          angle: Ia(La(t)),
          decibel: Ia(La(n)),
          frequency: Ia(La(r)),
          flex: Ia(La(a)),
          length: Ia(Na(La(o))),
          resolution: Ia(La(i)),
          semitones: Ia(La(s)),
          time: Ia(La(l))
        };
      })(e)
    );
  }
  var Ua = {};
  Ft(Ua, {
    angle: () => qa,
    decibel: () => Va,
    flex: () => Ha,
    frequency: () => Fa,
    length: () => Da,
    resolution: () => Ba,
    semitones: () => Wa,
    time: () => ja
  });
  var Da = [
      "cm",
      "mm",
      "q",
      "in",
      "pt",
      "pc",
      "px",
      "em",
      "rem",
      "ex",
      "rex",
      "cap",
      "rcap",
      "ch",
      "rch",
      "ic",
      "ric",
      "lh",
      "rlh",
      "vw",
      "svw",
      "lvw",
      "dvw",
      "vh",
      "svh",
      "lvh",
      "dvh",
      "vi",
      "svi",
      "lvi",
      "dvi",
      "vb",
      "svb",
      "lvb",
      "dvb",
      "vmin",
      "svmin",
      "lvmin",
      "dvmin",
      "vmax",
      "svmax",
      "lvmax",
      "dvmax",
      "cqw",
      "cqh",
      "cqi",
      "cqb",
      "cqmin",
      "cqmax"
    ],
    qa = ["deg", "grad", "rad", "turn"],
    ja = ["s", "ms"],
    Fa = ["hz", "khz"],
    Ba = ["dpi", "dpcm", "dppx", "x"],
    Ha = ["fr"],
    Va = ["db"],
    Wa = ["st"],
    $a = {};
  function Ga(e, t, n) {
    return Object.assign(lr("SyntaxError", e), {
      input: t,
      offset: n,
      rawMessage: e,
      message: e + "\n  " + t + "\n--" + new Array((n || t.length) + 1).join("-") + "^"
    });
  }
  Ft($a, { SyntaxError: () => Ga, generate: () => Kr, parse: () => Po, walk: () => Uo });
  var Ya = class {
      constructor(e) {
        (this.str = e), (this.pos = 0);
      }
      charCodeAt(e) {
        return e < this.str.length ? this.str.charCodeAt(e) : 0;
      }
      charCode() {
        return this.charCodeAt(this.pos);
      }
      nextCharCode() {
        return this.charCodeAt(this.pos + 1);
      }
      nextNonWsCode(e) {
        return this.charCodeAt(this.findWsEnd(e));
      }
      findWsEnd(e) {
        for (; e < this.str.length; e++) {
          let t = this.str.charCodeAt(e);
          if (13 !== t && 10 !== t && 12 !== t && 32 !== t && 9 !== t) break;
        }
        return e;
      }
      substringToPos(e) {
        return this.str.substring(this.pos, (this.pos = e));
      }
      eat(e) {
        this.charCode() !== e && this.error("Expect `" + String.fromCharCode(e) + "`"), this.pos++;
      }
      peek() {
        return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
      }
      error(e) {
        throw new Ga(e, this.str, this.pos);
      }
    },
    Qa = 9,
    Ka = 10,
    Ja = 12,
    Za = 13,
    Xa = 32,
    eo = 33,
    to = 35,
    no = 38,
    ro = 39,
    ao = 40,
    oo = 41,
    io = 42,
    so = 43,
    lo = 44,
    co = 45,
    uo = 60,
    ho = 62,
    po = 63,
    mo = 64,
    go = 91,
    fo = 93,
    bo = 123,
    yo = 124,
    wo = 125,
    ko = 8734,
    vo = new Uint8Array(128).map((e, t) => (/[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0)),
    xo = { " ": 1, "&&": 2, "||": 3, "|": 4 };
  function Eo(e) {
    return e.substringToPos(e.findWsEnd(e.pos));
  }
  function Ao(e) {
    let t = e.pos;
    for (; t < e.str.length; t++) {
      let n = e.str.charCodeAt(t);
      if (n >= 128 || 0 === vo[n]) break;
    }
    return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t);
  }
  function So(e) {
    let t = e.pos;
    for (; t < e.str.length; t++) {
      let n = e.str.charCodeAt(t);
      if (n < 48 || n > 57) break;
    }
    return e.pos === t && e.error("Expect a number"), e.substringToPos(t);
  }
  function To(e) {
    let t = e.str.indexOf("'", e.pos + 1);
    return -1 === t && ((e.pos = e.str.length), e.error("Expect an apostrophe")), e.substringToPos(t + 1);
  }
  function Co(e) {
    let t = null,
      n = null;
    return (
      e.eat(bo),
      (t = So(e)),
      e.charCode() === lo ? (e.pos++, e.charCode() !== wo && (n = So(e))) : (n = t),
      e.eat(wo),
      { min: Number(t), max: n ? Number(n) : 0 }
    );
  }
  function Ro(e, t) {
    let n = (function (e) {
      let t = null,
        n = !1;
      switch (e.charCode()) {
        case io:
          e.pos++, (t = { min: 0, max: 0 });
          break;
        case so:
          e.pos++, (t = { min: 1, max: 0 });
          break;
        case po:
          e.pos++, (t = { min: 0, max: 1 });
          break;
        case to:
          e.pos++,
            (n = !0),
            e.charCode() === bo ? (t = Co(e)) : e.charCode() === po ? (e.pos++, (t = { min: 0, max: 0 })) : (t = { min: 1, max: 0 });
          break;
        case bo:
          t = Co(e);
          break;
        default:
          return null;
      }
      return { type: "Multiplier", comma: n, min: t.min, max: t.max, term: null };
    })(e);
    return null !== n ? ((n.term = t), e.charCode() === to && e.charCodeAt(e.pos - 1) === so ? Ro(e, n) : n) : t;
  }
  function _o(e) {
    let t = e.peek();
    return "" === t ? null : { type: "Token", value: t };
  }
  function Io(e) {
    let t,
      n = null;
    return (
      e.eat(uo),
      (t = Ao(e)),
      e.charCode() === ao && e.nextCharCode() === oo && ((e.pos += 2), (t += "()")),
      e.charCodeAt(e.findWsEnd(e.pos)) === go &&
        (Eo(e),
        (n = (function (e) {
          let t = null,
            n = null,
            r = 1;
          return (
            e.eat(go),
            e.charCode() === co && (e.peek(), (r = -1)),
            -1 == r && e.charCode() === ko ? e.peek() : ((t = r * Number(So(e))), 0 !== vo[e.charCode()] && (t += Ao(e))),
            Eo(e),
            e.eat(lo),
            Eo(e),
            e.charCode() === ko
              ? e.peek()
              : ((r = 1), e.charCode() === co && (e.peek(), (r = -1)), (n = r * Number(So(e))), 0 !== vo[e.charCode()] && (n += Ao(e))),
            e.eat(fo),
            { type: "Range", min: t, max: n }
          );
        })(e))),
      e.eat(ho),
      Ro(e, { type: "Type", name: t, opts: n })
    );
  }
  function zo(e, t) {
    function n(e, t) {
      return { type: "Group", terms: e, combinator: t, disallowEmpty: !1, explicit: !1 };
    }
    let r;
    for (t = Object.keys(t).sort((e, t) => xo[e] - xo[t]); t.length > 0; ) {
      r = t.shift();
      let a = 0,
        o = 0;
      for (; a < e.length; a++) {
        let t = e[a];
        "Combinator" === t.type &&
          (t.value === r
            ? (-1 === o && (o = a - 1), e.splice(a, 1), a--)
            : (-1 !== o && a - o > 1 && (e.splice(o, a - o, n(e.slice(o, a), r)), (a = o + 1)), (o = -1)));
      }
      -1 !== o && t.length && e.splice(o, a - o, n(e.slice(o, a), r));
    }
    return r;
  }
  function Lo(e) {
    let t,
      n = [],
      r = {},
      a = null,
      o = e.pos;
    for (; (t = No(e)); )
      "Spaces" !== t.type &&
        ("Combinator" === t.type
          ? ((null === a || "Combinator" === a.type) && ((e.pos = o), e.error("Unexpected combinator")), (r[t.value] = !0))
          : null !== a && "Combinator" !== a.type && ((r[" "] = !0), n.push({ type: "Combinator", value: " " })),
        n.push(t),
        (a = t),
        (o = e.pos));
    return (
      null !== a && "Combinator" === a.type && ((e.pos -= o), e.error("Unexpected combinator")),
      { type: "Group", terms: n, combinator: zo(n, r) || " ", disallowEmpty: !1, explicit: !1 }
    );
  }
  function No(e) {
    let t = e.charCode();
    if (t < 128 && 1 === vo[t])
      return (function (e) {
        let t = Ao(e);
        return e.charCode() === ao ? (e.pos++, { type: "Function", name: t }) : Ro(e, { type: "Keyword", name: t });
      })(e);
    switch (t) {
      case fo:
        break;
      case go:
        return Ro(
          e,
          (function (e) {
            let t;
            return e.eat(go), (t = Lo(e)), e.eat(fo), (t.explicit = !0), e.charCode() === eo && (e.pos++, (t.disallowEmpty = !0)), t;
          })(e)
        );
      case uo:
        return e.nextCharCode() === ro
          ? (function (e) {
              let t;
              return e.eat(uo), e.eat(ro), (t = Ao(e)), e.eat(ro), e.eat(ho), Ro(e, { type: "Property", name: t });
            })(e)
          : Io(e);
      case yo:
        return { type: "Combinator", value: e.substringToPos(e.pos + (e.nextCharCode() === yo ? 2 : 1)) };
      case no:
        return e.pos++, e.eat(no), { type: "Combinator", value: "&&" };
      case lo:
        return e.pos++, { type: "Comma" };
      case ro:
        return Ro(e, { type: "String", value: To(e) });
      case Xa:
      case Qa:
      case Ka:
      case Za:
      case Ja:
        return { type: "Spaces", value: Eo(e) };
      case mo:
        return (t = e.nextCharCode()), t < 128 && 1 === vo[t] ? (e.pos++, { type: "AtKeyword", name: Ao(e) }) : _o(e);
      case io:
      case so:
      case po:
      case to:
      case eo:
        break;
      case bo:
        if (((t = e.nextCharCode()), t < 48 || t > 57)) return _o(e);
        break;
      default:
        return _o(e);
    }
  }
  function Po(e) {
    let t = new Ya(e),
      n = Lo(t);
    return t.pos !== e.length && t.error("Unexpected input"), 1 === n.terms.length && "Group" === n.terms[0].type ? n.terms[0] : n;
  }
  var Mo = function () {};
  function Oo(e) {
    return "function" == typeof e ? e : Mo;
  }
  function Uo(e, t, n) {
    let r = Mo,
      a = Mo;
    if (("function" == typeof t ? (r = t) : t && ((r = Oo(t.enter)), (a = Oo(t.leave))), r === Mo && a === Mo))
      throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    !(function e(t) {
      switch ((r.call(n, t), t.type)) {
        case "Group":
          t.terms.forEach(e);
          break;
        case "Multiplier":
          e(t.term);
          break;
        case "Type":
        case "Property":
        case "Keyword":
        case "AtKeyword":
        case "Function":
        case "String":
        case "Token":
        case "Comma":
          break;
        default:
          throw new Error("Unknown type: " + t.type);
      }
      a.call(n, t);
    })(e);
  }
  var Do = {
    decorator(e) {
      let t = [],
        n = null;
      return qt(Dt({}, e), {
        node(t) {
          let r = n;
          (n = t), e.node.call(this, t), (n = r);
        },
        emit(e, r, a) {
          t.push({ type: r, value: e, node: a ? null : n });
        },
        result: () => t
      });
    }
  };
  function qo(e, t) {
    return "string" == typeof e
      ? (function (e) {
          let t = [];
          return or(e, (n, r, a) => t.push({ type: n, value: e.slice(r, a), node: null })), t;
        })(e)
      : t.generate(e, Do);
  }
  var jo = { type: "Match" },
    Fo = { type: "Mismatch" },
    Bo = { type: "DisallowEmpty" },
    Ho = 40,
    Vo = 41;
  function Wo(e, t, n) {
    return (t === jo && n === Fo) || (e === jo && t === jo && n === jo)
      ? e
      : ("If" === e.type && e.else === Fo && t === jo && ((t = e.then), (e = e.match)), { type: "If", match: e, then: t, else: n });
  }
  function $o(e) {
    return e.length > 2 && e.charCodeAt(e.length - 2) === Ho && e.charCodeAt(e.length - 1) === Vo;
  }
  function Go(e) {
    return "Keyword" === e.type || "AtKeyword" === e.type || "Function" === e.type || ("Type" === e.type && $o(e.name));
  }
  function Yo(e, t, n) {
    switch (e) {
      case " ": {
        let e = jo;
        for (let n = t.length - 1; n >= 0; n--) {
          e = Wo(t[n], e, Fo);
        }
        return e;
      }
      case "|": {
        let e = Fo,
          n = null;
        for (let r = t.length - 1; r >= 0; r--) {
          let a = t[r];
          if (
            Go(a) &&
            (null === n && r > 0 && Go(t[r - 1]) && ((n = Object.create(null)), (e = Wo({ type: "Enum", map: n }, jo, e))), null !== n)
          ) {
            let e = ($o(a.name) ? a.name.slice(0, -1) : a.name).toLowerCase();
            if (!(e in n)) {
              n[e] = a;
              continue;
            }
          }
          (n = null), (e = Wo(a, jo, e));
        }
        return e;
      }
      case "&&": {
        if (t.length > 5) return { type: "MatchOnce", terms: t, all: !0 };
        let n = Fo;
        for (let r = t.length - 1; r >= 0; r--) {
          let a,
            o = t[r];
          (a =
            t.length > 1
              ? Yo(
                  e,
                  t.filter(function (e) {
                    return e !== o;
                  }),
                  !1
                )
              : jo),
            (n = Wo(o, a, n));
        }
        return n;
      }
      case "||": {
        if (t.length > 5) return { type: "MatchOnce", terms: t, all: !1 };
        let r = n ? jo : Fo;
        for (let n = t.length - 1; n >= 0; n--) {
          let a,
            o = t[n];
          (a =
            t.length > 1
              ? Yo(
                  e,
                  t.filter(function (e) {
                    return e !== o;
                  }),
                  !0
                )
              : jo),
            (r = Wo(o, a, r));
        }
        return r;
      }
    }
  }
  function Qo(e) {
    if ("function" == typeof e) return { type: "Generic", fn: e };
    switch (e.type) {
      case "Group": {
        let t = Yo(e.combinator, e.terms.map(Qo), !1);
        return e.disallowEmpty && (t = Wo(t, Bo, Fo)), t;
      }
      case "Multiplier":
        return (function (e) {
          let t = jo,
            n = Qo(e.term);
          if (0 === e.max)
            (n = Wo(n, Bo, Fo)),
              (t = Wo(n, null, Fo)),
              (t.then = Wo(jo, jo, t)),
              e.comma && (t.then.else = Wo({ type: "Comma", syntax: e }, t, Fo));
          else
            for (let r = e.min || 1; r <= e.max; r++)
              e.comma && t !== jo && (t = Wo({ type: "Comma", syntax: e }, t, Fo)), (t = Wo(n, Wo(jo, jo, t), Fo));
          if (0 === e.min) t = Wo(jo, jo, t);
          else for (let r = 0; r < e.min - 1; r++) e.comma && t !== jo && (t = Wo({ type: "Comma", syntax: e }, t, Fo)), (t = Wo(n, t, Fo));
          return t;
        })(e);
      case "Type":
      case "Property":
        return { type: e.type, name: e.name, syntax: e };
      case "Keyword":
        return { type: e.type, name: e.name.toLowerCase(), syntax: e };
      case "AtKeyword":
        return { type: e.type, name: "@" + e.name.toLowerCase(), syntax: e };
      case "Function":
        return { type: e.type, name: e.name.toLowerCase() + "(", syntax: e };
      case "String":
        return 3 === e.value.length
          ? { type: "Token", value: e.value.charAt(1), syntax: e }
          : { type: e.type, value: e.value.substr(1, e.value.length - 2).replace(/\\'/g, "'"), syntax: e };
      case "Token":
        return { type: e.type, value: e.value, syntax: e };
      case "Comma":
        return { type: e.type, syntax: e };
      default:
        throw new Error("Unknown node type:", e.type);
    }
  }
  function Ko(e, t) {
    return "string" == typeof e && (e = Po(e)), { type: "MatchGraph", match: Qo(e), syntax: t || null, source: e };
  }
  var { hasOwnProperty: Jo } = Object.prototype,
    Zo = 0,
    Xo = 1,
    ei = 2,
    ti = 3,
    ni = "Match",
    ri = "Mismatch",
    ai = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)",
    oi = 15e3;
  function ii(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
      let r = t.charCodeAt(n),
        a = e.charCodeAt(n);
      if ((a >= 65 && a <= 90 && (a |= 32), a !== r)) return !1;
    }
    return !0;
  }
  function si(e) {
    return (
      null === e ||
      18 === e.type ||
      2 === e.type ||
      21 === e.type ||
      19 === e.type ||
      23 === e.type ||
      (function (e) {
        return 9 === e.type && "?" !== e.value;
      })(e)
    );
  }
  function li(e) {
    return null === e || 22 === e.type || 20 === e.type || 24 === e.type || (9 === e.type && "/" === e.value);
  }
  function ci(e, t, n) {
    let r = (function (e, t, n) {
      function r() {
        do {
          b++, (f = b < e.length ? e[b] : null);
        } while (null !== f && (13 === f.type || 25 === f.type));
      }
      function a(t) {
        let n = b + t;
        return n < e.length ? e[n] : null;
      }
      function o(e, t) {
        return { nextState: e, matchStack: w, syntaxStack: u, thenStack: h, tokenIndex: b, prev: t };
      }
      function i(e) {
        h = { nextState: e, matchStack: w, syntaxStack: u, prev: h };
      }
      function s(e) {
        d = o(e, d);
      }
      function l() {
        (w = { type: Xo, syntax: t.syntax, token: f, prev: w }), r(), (p = null), b > y && (y = b);
      }
      function c() {
        (w = w.type === ei ? w.prev : { type: ti, syntax: u.syntax, token: w.token, prev: w }), (u = u.prev);
      }
      let u = null,
        h = null,
        d = null,
        p = null,
        m = 0,
        g = null,
        f = null,
        b = -1,
        y = 0,
        w = { type: Zo, syntax: null, token: null, prev: null };
      for (r(); null === g && ++m < oi; )
        switch (t.type) {
          case "Match":
            if (null === h) {
              if (null !== f && (b !== e.length - 1 || ("\\0" !== f.value && "\\9" !== f.value))) {
                t = Fo;
                break;
              }
              g = ni;
              break;
            }
            if ((t = h.nextState) === Bo) {
              if (h.matchStack === w) {
                t = Fo;
                break;
              }
              t = jo;
            }
            for (; h.syntaxStack !== u; ) c();
            h = h.prev;
            break;
          case "Mismatch":
            if (null !== p && !1 !== p) (null === d || b > d.tokenIndex) && ((d = p), (p = !1));
            else if (null === d) {
              g = ri;
              break;
            }
            (t = d.nextState),
              (h = d.thenStack),
              (u = d.syntaxStack),
              (w = d.matchStack),
              (b = d.tokenIndex),
              (f = b < e.length ? e[b] : null),
              (d = d.prev);
            break;
          case "MatchGraph":
            t = t.match;
            break;
          case "If":
            t.else !== Fo && s(t.else), t.then !== jo && i(t.then), (t = t.match);
            break;
          case "MatchOnce":
            t = { type: "MatchOnceBuffer", syntax: t, index: 0, mask: 0 };
            break;
          case "MatchOnceBuffer": {
            let e = t.syntax.terms;
            if (t.index === e.length) {
              if (0 === t.mask || t.syntax.all) {
                t = Fo;
                break;
              }
              t = jo;
              break;
            }
            if (t.mask === (1 << e.length) - 1) {
              t = jo;
              break;
            }
            for (; t.index < e.length; t.index++) {
              let n = 1 << t.index;
              if (0 == (t.mask & n)) {
                s(t), i({ type: "AddMatchOnce", syntax: t.syntax, mask: t.mask | n }), (t = e[t.index++]);
                break;
              }
            }
            break;
          }
          case "AddMatchOnce":
            t = { type: "MatchOnceBuffer", syntax: t.syntax, index: 0, mask: t.mask };
            break;
          case "Enum":
            if (null !== f) {
              let e = f.value.toLowerCase();
              if ((-1 !== e.indexOf("\\") && (e = e.replace(/\\[09].*$/, "")), Jo.call(t.map, e))) {
                t = t.map[e];
                break;
              }
            }
            t = Fo;
            break;
          case "Generic": {
            let e = null !== u ? u.opts : null,
              n = b + Math.floor(t.fn(f, a, e));
            if (!isNaN(n) && n > b) {
              for (; b < n; ) l();
              t = jo;
            } else t = Fo;
            break;
          }
          case "Type":
          case "Property": {
            let e = "Type" === t.type ? "types" : "properties",
              r = Jo.call(n, e) ? n[e][t.name] : null;
            if (!r || !r.match) throw new Error("Bad syntax reference: " + ("Type" === t.type ? "<" + t.name + ">" : "<'" + t.name + "'>"));
            if (
              !1 !== p &&
              null !== f &&
              "Type" === t.type &&
              (("custom-ident" === t.name && 1 === f.type) || ("length" === t.name && "0" === f.value))
            ) {
              null === p && (p = o(t, d)), (t = Fo);
              break;
            }
            (u = { syntax: t.syntax, opts: t.syntax.opts || (null !== u && u.opts) || null, prev: u }),
              (w = { type: ei, syntax: t.syntax, token: w.token, prev: w }),
              (t = r.match);
            break;
          }
          case "Keyword": {
            let e = t.name;
            if (null !== f) {
              let n = f.value;
              if ((-1 !== n.indexOf("\\") && (n = n.replace(/\\[09].*$/, "")), ii(n, e))) {
                l(), (t = jo);
                break;
              }
            }
            t = Fo;
            break;
          }
          case "AtKeyword":
          case "Function":
            if (null !== f && ii(f.value, t.name)) {
              l(), (t = jo);
              break;
            }
            t = Fo;
            break;
          case "Token":
            if (null !== f && f.value === t.value) {
              l(), (t = jo);
              break;
            }
            t = Fo;
            break;
          case "Comma":
            null !== f && 18 === f.type ? (si(w.token) ? (t = Fo) : (l(), (t = li(f) ? Fo : jo))) : (t = si(w.token) || li(f) ? jo : Fo);
            break;
          case "String":
            let r = "",
              m = b;
            for (; m < e.length && r.length < t.value.length; m++) r += e[m].value;
            if (ii(r, t.value)) {
              for (; b < m; ) l();
              t = jo;
            } else t = Fo;
            break;
          default:
            throw new Error("Unknown node type: " + t.type);
        }
      switch (g) {
        case null:
          console.warn("[csstree-match] BREAK after " + oi + " iterations"), (g = ai), (w = null);
          break;
        case ni:
          for (; null !== u; ) c();
          break;
        default:
          w = null;
      }
      return { tokens: e, reason: g, iterations: m, match: w, longestMatch: y };
    })(e, t, n || {});
    if (null === r.match) return r;
    let a = r.match,
      o = (r.match = { syntax: t.syntax || null, match: [] }),
      i = [o];
    for (
      a = (function (e) {
        let t = null,
          n = null,
          r = e;
        for (; null !== r; ) (n = r.prev), (r.prev = t), (t = r), (r = n);
        return t;
      })(a).prev;
      null !== a;

    ) {
      switch (a.type) {
        case ei:
          o.match.push((o = { syntax: a.syntax, match: [] })), i.push(o);
          break;
        case ti:
          i.pop(), (o = i[i.length - 1]);
          break;
        default:
          o.match.push({ syntax: a.syntax || null, token: a.token.value, node: a.token.node });
      }
      a = a.prev;
    }
    return r;
  }
  var ui = {};
  function hi(e) {
    function t(e) {
      return null !== e && ("Type" === e.type || "Property" === e.type || "Keyword" === e.type);
    }
    let n = null;
    return (
      null !== this.matched &&
        (function r(a) {
          if (Array.isArray(a.match)) {
            for (let e = 0; e < a.match.length; e++) if (r(a.match[e])) return t(a.syntax) && n.unshift(a.syntax), !0;
          } else if (a.node === e) return (n = t(a.syntax) ? [a.syntax] : []), !0;
          return !1;
        })(this.matched),
      n
    );
  }
  function di(e, t) {
    return gi(this, e, (e) => "Type" === e.type && e.name === t);
  }
  function pi(e, t) {
    return gi(this, e, (e) => "Property" === e.type && e.name === t);
  }
  function mi(e) {
    return gi(this, e, (e) => "Keyword" === e.type);
  }
  function gi(e, t, n) {
    let r = hi.call(e, t);
    return null !== r && r.some(n);
  }
  function fi(e) {
    return "node" in e ? e.node : fi(e.match[0]);
  }
  function bi(e) {
    return "node" in e ? e.node : bi(e.match[e.match.length - 1]);
  }
  function yi(e, t, n, r, a) {
    let o = [];
    return (
      null !== n.matched &&
        (function n(i) {
          if (null !== i.syntax && i.syntax.type === r && i.syntax.name === a) {
            let n = fi(i),
              r = bi(i);
            e.syntax.walk(t, function (e, t, a) {
              if (e === n) {
                let e = new sr();
                do {
                  if ((e.appendData(t.data), t.data === r)) break;
                  t = t.next;
                } while (null !== t);
                o.push({ parent: a, nodes: e });
              }
            });
          }
          Array.isArray(i.match) && i.match.forEach(n);
        })(n.matched),
      o
    );
  }
  Ft(ui, { getTrace: () => hi, isKeyword: () => mi, isProperty: () => pi, isType: () => di });
  var { hasOwnProperty: wi } = Object.prototype;
  function ki(e) {
    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0;
  }
  function vi(e) {
    return Boolean(e) && ki(e.offset) && ki(e.line) && ki(e.column);
  }
  function xi(e, t) {
    return function (n, r) {
      if (!n || n.constructor !== Object) return r(n, "Type of node should be an Object");
      for (let a in n) {
        let o = !0;
        if (!1 !== wi.call(n, a)) {
          if ("type" === a) n.type !== e && r(n, "Wrong node type `" + n.type + "`, expected `" + e + "`");
          else if ("loc" === a) {
            if (null === n.loc) continue;
            if (n.loc && n.loc.constructor === Object)
              if ("string" != typeof n.loc.source) a += ".source";
              else if (vi(n.loc.start)) {
                if (vi(n.loc.end)) continue;
                a += ".end";
              } else a += ".start";
            o = !1;
          } else if (t.hasOwnProperty(a)) {
            o = !1;
            for (let e = 0; !o && e < t[a].length; e++) {
              let r = t[a][e];
              switch (r) {
                case String:
                  o = "string" == typeof n[a];
                  break;
                case Boolean:
                  o = "boolean" == typeof n[a];
                  break;
                case null:
                  o = null === n[a];
                  break;
                default:
                  "string" == typeof r ? (o = n[a] && n[a].type === r) : Array.isArray(r) && (o = n[a] instanceof sr);
              }
            }
          } else r(n, "Unknown field `" + a + "` for " + e + " node type");
          o || r(n, "Bad value for `" + e + "." + a + "`");
        }
      }
      for (let a in t) wi.call(t, a) && !1 === wi.call(n, a) && r(n, "Field `" + e + "." + a + "` is missed");
    };
  }
  function Ei(e, t) {
    let n = t.structure,
      r = { type: String, loc: !0 },
      a = { type: '"' + e + '"' };
    for (let t in n) {
      if (!1 === wi.call(n, t)) continue;
      let o = [],
        i = (r[t] = Array.isArray(n[t]) ? n[t].slice() : [n[t]]);
      for (let n = 0; n < i.length; n++) {
        let r = i[n];
        if (r === String || r === Boolean) o.push(r.name);
        else if (null === r) o.push("null");
        else if ("string" == typeof r) o.push("<" + r + ">");
        else {
          if (!Array.isArray(r)) throw new Error("Wrong value `" + r + "` in `" + e + "." + t + "` structure definition");
          o.push("List");
        }
      }
      a[t] = o.join(" | ");
    }
    return { docs: a, check: xi(e, r) };
  }
  var Ai = Ko(ua.join(" | "));
  function Si(e, t, n) {
    let r = {};
    for (let a in e) e[a].syntax && (r[a] = n ? e[a].syntax : Kr(e[a].syntax, { compact: t }));
    return r;
  }
  function Ti(e, t, n) {
    let r = {};
    for (let [a, o] of Object.entries(e))
      r[a] = {
        prelude: o.prelude && (n ? o.prelude.syntax : Kr(o.prelude.syntax, { compact: t })),
        descriptors: o.descriptors && Si(o.descriptors, t, n)
      };
    return r;
  }
  function Ci(e, t, n) {
    return Dt({ matched: e, iterations: n, error: t }, ui);
  }
  function Ri(e, t, n, r) {
    let a,
      o = qo(n, e.syntax);
    return (function (e) {
      for (let t = 0; t < e.length; t++) if ("var(" === e[t].value.toLowerCase()) return !0;
      return !1;
    })(o)
      ? Ci(null, new Error("Matching for a tree with var() is not supported"))
      : (r && (a = ci(o, e.cssWideKeywordsSyntax, e)),
        (r && a.match) || ((a = ci(o, t.match, e)), a.match)
          ? Ci(a.match, null, a.iterations)
          : Ci(null, new ta(a.reason, t.syntax, n, a), a.iterations));
  }
  var _i = class {
    constructor(e, t, n) {
      if (
        ((this.cssWideKeywordsSyntax = Ai),
        (this.syntax = t),
        (this.generic = !1),
        (this.units = Dt({}, Ua)),
        (this.atrules = Object.create(null)),
        (this.properties = Object.create(null)),
        (this.types = Object.create(null)),
        (this.structure =
          n ||
          (function (e) {
            let t = {};
            if (e.node)
              for (let n in e.node)
                if (wi.call(e.node, n)) {
                  let r = e.node[n];
                  if (!r.structure) throw new Error("Missed `structure` field in `" + n + "` node type definition");
                  t[n] = Ei(n, r);
                }
            return t;
          })(e)),
        e)
      ) {
        if (e.units) for (let t of Object.keys(Ua)) Array.isArray(e.units[t]) && (this.units[t] = e.units[t]);
        if (e.types) for (let t in e.types) this.addType_(t, e.types[t]);
        if (e.generic) {
          this.generic = !0;
          for (let [e, t] of Object.entries(Oa(this.units))) this.addType_(e, t);
        }
        if (e.atrules) for (let t in e.atrules) this.addAtrule_(t, e.atrules[t]);
        if (e.properties) for (let t in e.properties) this.addProperty_(t, e.properties[t]);
      }
    }
    checkStructure(e) {
      function t(e, t) {
        r.push({ node: e, message: t });
      }
      let n = this.structure,
        r = [];
      return (
        this.syntax.walk(e, function (e) {
          n.hasOwnProperty(e.type) ? n[e.type].check(e, t) : t(e, "Unknown node type `" + e.type + "`");
        }),
        !!r.length && r
      );
    }
    createDescriptor(e, t, n, r = null) {
      let a = { type: t, name: n },
        o = {
          type: t,
          name: n,
          parent: r,
          serializable: "string" == typeof e || (e && "string" == typeof e.type),
          syntax: null,
          match: null
        };
      return (
        "function" == typeof e
          ? (o.match = Ko(e, a))
          : ("string" == typeof e
              ? Object.defineProperty(o, "syntax", { get: () => (Object.defineProperty(o, "syntax", { value: Po(e) }), o.syntax) })
              : (o.syntax = e),
            Object.defineProperty(o, "match", { get: () => (Object.defineProperty(o, "match", { value: Ko(o.syntax, a) }), o.match) })),
        o
      );
    }
    addAtrule_(e, t) {
      !t ||
        (this.atrules[e] = {
          type: "Atrule",
          name: e,
          prelude: t.prelude ? this.createDescriptor(t.prelude, "AtrulePrelude", e) : null,
          descriptors: t.descriptors
            ? Object.keys(t.descriptors).reduce(
                (n, r) => ((n[r] = this.createDescriptor(t.descriptors[r], "AtruleDescriptor", r, e)), n),
                Object.create(null)
              )
            : null
        });
    }
    addProperty_(e, t) {
      !t || (this.properties[e] = this.createDescriptor(t, "Property", e));
    }
    addType_(e, t) {
      !t || (this.types[e] = this.createDescriptor(t, "Type", e));
    }
    checkAtruleName(e) {
      if (!this.getAtrule(e)) return new ea("Unknown at-rule", "@" + e);
    }
    checkAtrulePrelude(e, t) {
      let n = this.checkAtruleName(e);
      if (n) return n;
      let r = this.getAtrule(e);
      return !r.prelude && t
        ? new SyntaxError("At-rule `@" + e + "` should not contain a prelude")
        : !r.prelude || t || Ri(this, r.prelude, "", !1).matched
        ? void 0
        : new SyntaxError("At-rule `@" + e + "` should contain a prelude");
    }
    checkAtruleDescriptorName(e, t) {
      let n = this.checkAtruleName(e);
      if (n) return n;
      let r = this.getAtrule(e),
        a = oa(t);
      return r.descriptors
        ? r.descriptors[a.name] || r.descriptors[a.basename]
          ? void 0
          : new ea("Unknown at-rule descriptor", t)
        : new SyntaxError("At-rule `@" + e + "` has no known descriptors");
    }
    checkPropertyName(e) {
      if (!this.getProperty(e)) return new ea("Unknown property", e);
    }
    matchAtrulePrelude(e, t) {
      let n = this.checkAtrulePrelude(e, t);
      if (n) return Ci(null, n);
      let r = this.getAtrule(e);
      return r.prelude ? Ri(this, r.prelude, t || "", !1) : Ci(null, null);
    }
    matchAtruleDescriptor(e, t, n) {
      let r = this.checkAtruleDescriptorName(e, t);
      if (r) return Ci(null, r);
      let a = this.getAtrule(e),
        o = oa(t);
      return Ri(this, a.descriptors[o.name] || a.descriptors[o.basename], n, !1);
    }
    matchDeclaration(e) {
      return "Declaration" !== e.type ? Ci(null, new Error("Not a Declaration node")) : this.matchProperty(e.property, e.value);
    }
    matchProperty(e, t) {
      if (ia(e).custom) return Ci(null, new Error("Lexer matching doesn't applicable for custom properties"));
      let n = this.checkPropertyName(e);
      return n ? Ci(null, n) : Ri(this, this.getProperty(e), t, !0);
    }
    matchType(e, t) {
      let n = this.getType(e);
      return n ? Ri(this, n, t, !1) : Ci(null, new ea("Unknown type", e));
    }
    match(e, t) {
      return "string" == typeof e || (e && e.type)
        ? (("string" == typeof e || !e.match) && (e = this.createDescriptor(e, "Type", "anonymous")), Ri(this, e, t, !1))
        : Ci(null, new ea("Bad syntax"));
    }
    findValueFragments(e, t, n, r) {
      return yi(this, t, this.matchProperty(e, t), n, r);
    }
    findDeclarationValueFragments(e, t, n) {
      return yi(this, e.value, this.matchDeclaration(e), t, n);
    }
    findAllFragments(e, t, n) {
      let r = [];
      return (
        this.syntax.walk(e, {
          visit: "Declaration",
          enter: (e) => {
            r.push.apply(r, this.findDeclarationValueFragments(e, t, n));
          }
        }),
        r
      );
    }
    getAtrule(e, t = !0) {
      let n = oa(e);
      return (n.vendor && t ? this.atrules[n.name] || this.atrules[n.basename] : this.atrules[n.name]) || null;
    }
    getAtrulePrelude(e, t = !0) {
      let n = this.getAtrule(e, t);
      return (n && n.prelude) || null;
    }
    getAtruleDescriptor(e, t) {
      return (this.atrules.hasOwnProperty(e) && this.atrules.declarators && this.atrules[e].declarators[t]) || null;
    }
    getProperty(e, t = !0) {
      let n = ia(e);
      return (n.vendor && t ? this.properties[n.name] || this.properties[n.basename] : this.properties[n.name]) || null;
    }
    getType(e) {
      return hasOwnProperty.call(this.types, e) ? this.types[e] : null;
    }
    validate() {
      function e(r, a, o, i) {
        if (o.has(a)) return o.get(a);
        o.set(a, !1),
          null !== i.syntax &&
            Uo(
              i.syntax,
              function (i) {
                if ("Type" !== i.type && "Property" !== i.type) return;
                let s = "Type" === i.type ? r.types : r.properties,
                  l = "Type" === i.type ? t : n;
                (!hasOwnProperty.call(s, i.name) || e(r, i.name, l, s[i.name])) && o.set(a, !0);
              },
              this
            );
      }
      let t = new Map(),
        n = new Map();
      for (let n in this.types) e(this, n, t, this.types[n]);
      for (let t in this.properties) e(this, t, n, this.properties[t]);
      return (
        (t = [...t.keys()].filter((e) => t.get(e))),
        (n = [...n.keys()].filter((e) => n.get(e))),
        t.length || n.length ? { types: t, properties: n } : null
      );
    }
    dump(e, t) {
      return {
        generic: this.generic,
        units: this.units,
        types: Si(this.types, !t, e),
        properties: Si(this.properties, !t, e),
        atrules: Ti(this.atrules, !t, e)
      };
    }
    toString() {
      return JSON.stringify(this.dump());
    }
  };
  function Ii(e, t) {
    return "string" == typeof t && /^\s*\|/.test(t) ? ("string" == typeof e ? e + t : t.replace(/^\s*\|\s*/, "")) : t || null;
  }
  function zi(e, t) {
    let n = Object.create(null);
    for (let [r, a] of Object.entries(e))
      if (a) {
        n[r] = {};
        for (let e of Object.keys(a)) t.includes(e) && (n[r][e] = a[e]);
      }
    return n;
  }
  function Li(e, t) {
    let n = Dt({}, e);
    for (let [r, a] of Object.entries(t))
      switch (r) {
        case "generic":
          n[r] = Boolean(a);
          break;
        case "units":
          n[r] = Dt({}, e[r]);
          for (let [e, t] of Object.entries(a)) n[r][e] = Array.isArray(t) ? t : [];
          break;
        case "atrules":
          n[r] = Dt({}, e[r]);
          for (let [e, t] of Object.entries(a)) {
            let a = n[r][e] || {},
              o = (n[r][e] = { prelude: a.prelude || null, descriptors: Dt({}, a.descriptors) });
            if (t) {
              o.prelude = t.prelude ? Ii(o.prelude, t.prelude) : o.prelude || null;
              for (let [e, n] of Object.entries(t.descriptors || {})) o.descriptors[e] = n ? Ii(o.descriptors[e], n) : null;
              Object.keys(o.descriptors).length || (o.descriptors = null);
            }
          }
          break;
        case "types":
        case "properties":
          n[r] = Dt({}, e[r]);
          for (let [e, t] of Object.entries(a)) n[r][e] = Ii(n[r][e], t);
          break;
        case "scope":
          n[r] = Dt({}, e[r]);
          for (let [e, t] of Object.entries(a)) n[r][e] = Dt(Dt({}, n[r][e]), t);
          break;
        case "parseContext":
          n[r] = Dt(Dt({}, e[r]), a);
          break;
        case "atrule":
        case "pseudo":
          n[r] = Dt(Dt({}, e[r]), zi(a, ["parse"]));
          break;
        case "node":
          n[r] = Dt(Dt({}, e[r]), zi(a, ["name", "structure", "parse", "generate", "walkContext"]));
      }
    return n;
  }
  function Ni(e) {
    let t = Er(e),
      n = Gr(e),
      r = qr(e),
      { fromPlainObject: a, toPlainObject: o } = (function (e) {
        return {
          fromPlainObject: (t) => (
            e(t, {
              enter(e) {
                e.children && !(e.children instanceof sr) && (e.children = new sr().fromArray(e.children));
              }
            }),
            t
          ),
          toPlainObject: (t) => (
            e(t, {
              leave(e) {
                e.children && e.children instanceof sr && (e.children = e.children.toArray());
              }
            }),
            t
          )
        };
      })(n),
      i = {
        lexer: null,
        createLexer: (e) => new _i(e, i, i.lexer.structure),
        tokenize: or,
        parse: t,
        generate: r,
        walk: n,
        find: n.find,
        findLast: n.findLast,
        findAll: n.findAll,
        fromPlainObject: a,
        toPlainObject: o,
        fork(t) {
          let n = Li({}, e);
          return Ni("function" == typeof t ? t(n, Object.assign) : Li(n, t));
        }
      };
    return (
      (i.lexer = new _i({ generic: !0, units: e.units, types: e.types, atrules: e.atrules, properties: e.properties, node: e.node }, i)), i
    );
  }
  var Pi = (e) => Ni(Li({}, e)),
    Mi = {};
  Ft(Mi, {
    AnPlusB: () => Oi,
    Atrule: () => Ki,
    AtrulePrelude: () => as,
    AttributeSelector: () => us,
    Block: () => Es,
    Brackets: () => Ps,
    CDC: () => qs,
    CDO: () => Vs,
    ClassSelector: () => Qs,
    Combinator: () => tl,
    Comment: () => ul,
    Declaration: () => bl,
    DeclarationList: () => Ml,
    Dimension: () => Bl,
    Function: () => Gl,
    Hash: () => Xl,
    IdSelector: () => uc,
    Identifier: () => oc,
    MediaFeature: () => gc,
    MediaQuery: () => kc,
    MediaQueryList: () => Sc,
    NestingSelector: () => Ic,
    Nth: () => Oc,
    Number: () => Fc,
    Operator: () => $c,
    Parentheses: () => Jc,
    Percentage: () => nu,
    PseudoClassSelector: () => su,
    PseudoElementSelector: () => pu,
    Ratio: () => wu,
    Raw: () => Cu,
    Rule: () => Nu,
    Selector: () => Fu,
    SelectorList: () => $u,
    String: () => Zu,
    StyleSheet: () => ch,
    TypeSelector: () => bh,
    UnicodeRange: () => Sh,
    Url: () => Uh,
    Value: () => Jh,
    WhiteSpace: () => nd
  });
  var Oi = {};
  Ft(Oi, { generate: () => Qi, name: () => $i, parse: () => Yi, structure: () => Gi });
  var Ui = 43,
    Di = 45,
    qi = 110,
    ji = !0,
    Fi = !1;
  function Bi(e, t) {
    let n = this.tokenStart + e,
      r = this.charCodeAt(n);
    for ((r === Ui || r === Di) && (t && this.error("Number sign is not allowed"), n++); n < this.tokenEnd; n++)
      xn(this.charCodeAt(n)) || this.error("Integer is expected", n);
  }
  function Hi(e) {
    return Bi.call(this, 0, e);
  }
  function Vi(e, t) {
    if (!this.cmpChar(this.tokenStart + e, t)) {
      let n = "";
      switch (t) {
        case qi:
          n = "N is expected";
          break;
        case Di:
          n = "HyphenMinus is expected";
      }
      this.error(n, this.tokenStart + e);
    }
  }
  function Wi() {
    let e = 0,
      t = 0,
      n = this.tokenType;
    for (; 13 === n || 25 === n; ) n = this.lookupType(++e);
    if (10 !== n) {
      if (!this.isDelim(Ui, e) && !this.isDelim(Di, e)) return null;
      t = this.isDelim(Ui, e) ? Ui : Di;
      do {
        n = this.lookupType(++e);
      } while (13 === n || 25 === n);
      10 !== n && (this.skip(e), Hi.call(this, ji));
    }
    return (
      e > 0 && this.skip(e),
      0 === t && ((n = this.charCodeAt(this.tokenStart)), n !== Ui && n !== Di && this.error("Number sign is expected")),
      Hi.call(this, 0 !== t),
      t === Di ? "-" + this.consume(10) : this.consume(10)
    );
  }
  var $i = "AnPlusB",
    Gi = { a: [String, null], b: [String, null] };
  function Yi() {
    let e = this.tokenStart,
      t = null,
      n = null;
    if (10 === this.tokenType) Hi.call(this, Fi), (n = this.consume(10));
    else if (1 === this.tokenType && this.cmpChar(this.tokenStart, Di))
      switch (((t = "-1"), Vi.call(this, 1, qi), this.tokenEnd - this.tokenStart)) {
        case 2:
          this.next(), (n = Wi.call(this));
          break;
        case 3:
          Vi.call(this, 2, Di), this.next(), this.skipSC(), Hi.call(this, ji), (n = "-" + this.consume(10));
          break;
        default:
          Vi.call(this, 2, Di), Bi.call(this, 3, ji), this.next(), (n = this.substrToCursor(e + 2));
      }
    else if (1 === this.tokenType || (this.isDelim(Ui) && 1 === this.lookupType(1))) {
      let r = 0;
      switch (((t = "1"), this.isDelim(Ui) && ((r = 1), this.next()), Vi.call(this, 0, qi), this.tokenEnd - this.tokenStart)) {
        case 1:
          this.next(), (n = Wi.call(this));
          break;
        case 2:
          Vi.call(this, 1, Di), this.next(), this.skipSC(), Hi.call(this, ji), (n = "-" + this.consume(10));
          break;
        default:
          Vi.call(this, 1, Di), Bi.call(this, 2, ji), this.next(), (n = this.substrToCursor(e + r + 1));
      }
    } else if (12 === this.tokenType) {
      let r = this.charCodeAt(this.tokenStart),
        a = r === Ui || r === Di,
        o = this.tokenStart + a;
      for (; o < this.tokenEnd && xn(this.charCodeAt(o)); o++);
      o === this.tokenStart + a && this.error("Integer is expected", this.tokenStart + a),
        Vi.call(this, o - this.tokenStart, qi),
        (t = this.substring(e, o)),
        o + 1 === this.tokenEnd
          ? (this.next(), (n = Wi.call(this)))
          : (Vi.call(this, o - this.tokenStart + 1, Di),
            o + 2 === this.tokenEnd
              ? (this.next(), this.skipSC(), Hi.call(this, ji), (n = "-" + this.consume(10)))
              : (Bi.call(this, o - this.tokenStart + 2, ji), this.next(), (n = this.substrToCursor(o + 1))));
    } else this.error();
    return (
      null !== t && t.charCodeAt(0) === Ui && (t = t.substr(1)),
      null !== n && n.charCodeAt(0) === Ui && (n = n.substr(1)),
      { type: "AnPlusB", loc: this.getLocation(e, this.tokenStart), a: t, b: n }
    );
  }
  function Qi(e) {
    if (e.a) {
      let t = ("+1" === e.a || "1" === e.a ? "n" : "-1" === e.a && "-n") || e.a + "n";
      if (e.b) {
        let n = "-" === e.b[0] || "+" === e.b[0] ? e.b : "+" + e.b;
        this.tokenize(t + n);
      } else this.tokenize(t);
    } else this.tokenize(e.b);
  }
  var Ki = {};
  function Ji(e) {
    return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
  }
  function Zi() {
    for (let e, t = 1; (e = this.lookupType(t)); t++) {
      if (24 === e) return !0;
      if (23 === e || 3 === e) return !1;
    }
    return !1;
  }
  Ft(Ki, { generate: () => rs, name: () => Xi, parse: () => ns, structure: () => ts, walkContext: () => es });
  var Xi = "Atrule",
    es = "atrule",
    ts = { name: String, prelude: ["AtrulePrelude", "Raw", null], block: ["Block", null] };
  function ns(e = !1) {
    let t,
      n,
      r = this.tokenStart,
      a = null,
      o = null;
    switch (
      (this.eat(3),
      (t = this.substrToCursor(r + 1)),
      (n = t.toLowerCase()),
      this.skipSC(),
      !1 === this.eof &&
        23 !== this.tokenType &&
        17 !== this.tokenType &&
        ((a = this.parseAtrulePrelude ? this.parseWithFallback(this.AtrulePrelude.bind(this, t, e), Ji) : Ji.call(this, this.tokenIndex)),
        this.skipSC()),
      this.tokenType)
    ) {
      case 17:
        this.next();
        break;
      case 23:
        o =
          hasOwnProperty.call(this.atrule, n) && "function" == typeof this.atrule[n].block
            ? this.atrule[n].block.call(this, e)
            : this.Block(Zi.call(this));
    }
    return { type: "Atrule", loc: this.getLocation(r, this.tokenStart), name: t, prelude: a, block: o };
  }
  function rs(e) {
    this.token(3, "@" + e.name), null !== e.prelude && this.node(e.prelude), e.block ? this.node(e.block) : this.token(17, ";");
  }
  var as = {};
  Ft(as, { generate: () => cs, name: () => os, parse: () => ls, structure: () => ss, walkContext: () => is });
  var os = "AtrulePrelude",
    is = "atrulePrelude",
    ss = { children: [[]] };
  function ls(e) {
    let t = null;
    return (
      null !== e && (e = e.toLowerCase()),
      this.skipSC(),
      (t =
        hasOwnProperty.call(this.atrule, e) && "function" == typeof this.atrule[e].prelude
          ? this.atrule[e].prelude.call(this)
          : this.readSequence(this.scope.AtrulePrelude)),
      this.skipSC(),
      !0 !== this.eof && 23 !== this.tokenType && 17 !== this.tokenType && this.error("Semicolon or block is expected"),
      { type: "AtrulePrelude", loc: this.getLocationFromList(t), children: t }
    );
  }
  function cs(e) {
    this.children(e);
  }
  var us = {};
  Ft(us, { generate: () => xs, name: () => ws, parse: () => vs, structure: () => ks });
  var hs = 36,
    ds = 42,
    ps = 61,
    ms = 94,
    gs = 124,
    fs = 126;
  function bs() {
    this.eof && this.error("Unexpected end of input");
    let e = this.tokenStart,
      t = !1;
    return (
      this.isDelim(ds) ? ((t = !0), this.next()) : this.isDelim(gs) || this.eat(1),
      this.isDelim(gs)
        ? this.charCodeAt(this.tokenStart + 1) !== ps
          ? (this.next(), this.eat(1))
          : t && this.error("Identifier is expected", this.tokenEnd)
        : t && this.error("Vertical line is expected"),
      { type: "Identifier", loc: this.getLocation(e, this.tokenStart), name: this.substrToCursor(e) }
    );
  }
  function ys() {
    let e = this.tokenStart,
      t = this.charCodeAt(e);
    return (
      t !== ps &&
        t !== fs &&
        t !== ms &&
        t !== hs &&
        t !== ds &&
        t !== gs &&
        this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"),
      this.next(),
      t !== ps && (this.isDelim(ps) || this.error("Equal sign is expected"), this.next()),
      this.substrToCursor(e)
    );
  }
  var ws = "AttributeSelector",
    ks = { name: "Identifier", matcher: [String, null], value: ["String", "Identifier", null], flags: [String, null] };
  function vs() {
    let e,
      t = this.tokenStart,
      n = null,
      r = null,
      a = null;
    return (
      this.eat(19),
      this.skipSC(),
      (e = bs.call(this)),
      this.skipSC(),
      20 !== this.tokenType &&
        (1 !== this.tokenType &&
          ((n = ys.call(this)), this.skipSC(), (r = 5 === this.tokenType ? this.String() : this.Identifier()), this.skipSC()),
        1 === this.tokenType && ((a = this.consume(1)), this.skipSC())),
      this.eat(20),
      { type: "AttributeSelector", loc: this.getLocation(t, this.tokenStart), name: e, matcher: n, value: r, flags: a }
    );
  }
  function xs(e) {
    this.token(9, "["),
      this.node(e.name),
      null !== e.matcher && (this.tokenize(e.matcher), this.node(e.value)),
      null !== e.flags && this.token(1, e.flags),
      this.token(9, "]");
  }
  var Es = {};
  Ft(Es, { generate: () => Ns, name: () => _s, parse: () => Ls, structure: () => zs, walkContext: () => Is });
  var As = 38;
  function Ss(e) {
    return this.Raw(e, null, !0);
  }
  function Ts() {
    return this.parseWithFallback(this.Rule, Ss);
  }
  function Cs(e) {
    return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
  }
  function Rs() {
    if (17 === this.tokenType) return Cs.call(this, this.tokenIndex);
    let e = this.parseWithFallback(this.Declaration, Cs);
    return 17 === this.tokenType && this.next(), e;
  }
  var _s = "Block",
    Is = "block",
    zs = { children: [["Atrule", "Rule", "Declaration"]] };
  function Ls(e) {
    let t = e ? Rs : Ts,
      n = this.tokenStart,
      r = this.createList();
    this.eat(23);
    e: for (; !this.eof; )
      switch (this.tokenType) {
        case 24:
          break e;
        case 13:
        case 25:
          this.next();
          break;
        case 3:
          r.push(this.parseWithFallback(this.Atrule.bind(this, e), Ss));
          break;
        default:
          e && this.isDelim(As) ? r.push(Ts.call(this)) : r.push(t.call(this));
      }
    return this.eof || this.eat(24), { type: "Block", loc: this.getLocation(n, this.tokenStart), children: r };
  }
  function Ns(e) {
    this.token(23, "{"),
      this.children(e, (e) => {
        "Declaration" === e.type && this.token(17, ";");
      }),
      this.token(24, "}");
  }
  var Ps = {};
  Ft(Ps, { generate: () => Ds, name: () => Ms, parse: () => Us, structure: () => Os });
  var Ms = "Brackets",
    Os = { children: [[]] };
  function Us(e, t) {
    let n = this.tokenStart,
      r = null;
    return (
      this.eat(19),
      (r = e.call(this, t)),
      this.eof || this.eat(20),
      { type: "Brackets", loc: this.getLocation(n, this.tokenStart), children: r }
    );
  }
  function Ds(e) {
    this.token(9, "["), this.children(e), this.token(9, "]");
  }
  var qs = {};
  Ft(qs, { generate: () => Hs, name: () => js, parse: () => Bs, structure: () => Fs });
  var js = "CDC",
    Fs = [];
  function Bs() {
    let e = this.tokenStart;
    return this.eat(15), { type: "CDC", loc: this.getLocation(e, this.tokenStart) };
  }
  function Hs() {
    this.token(15, "--\x3e");
  }
  var Vs = {};
  Ft(Vs, { generate: () => Ys, name: () => Ws, parse: () => Gs, structure: () => $s });
  var Ws = "CDO",
    $s = [];
  function Gs() {
    let e = this.tokenStart;
    return this.eat(14), { type: "CDO", loc: this.getLocation(e, this.tokenStart) };
  }
  function Ys() {
    this.token(14, "\x3c!--");
  }
  var Qs = {};
  Ft(Qs, { generate: () => el, name: () => Js, parse: () => Xs, structure: () => Zs });
  var Ks = 46,
    Js = "ClassSelector",
    Zs = { name: String };
  function Xs() {
    return this.eatDelim(Ks), { type: "ClassSelector", loc: this.getLocation(this.tokenStart - 1, this.tokenEnd), name: this.consume(1) };
  }
  function el(e) {
    this.token(9, "."), this.token(1, e.name);
  }
  var tl = {};
  Ft(tl, { generate: () => cl, name: () => il, parse: () => ll, structure: () => sl });
  var nl = 43,
    rl = 47,
    al = 62,
    ol = 126,
    il = "Combinator",
    sl = { name: String };
  function ll() {
    let e,
      t = this.tokenStart;
    switch (this.tokenType) {
      case 13:
        e = " ";
        break;
      case 9:
        switch (this.charCodeAt(this.tokenStart)) {
          case al:
          case nl:
          case ol:
            this.next();
            break;
          case rl:
            this.next(), this.eatIdent("deep"), this.eatDelim(rl);
            break;
          default:
            this.error("Combinator is expected");
        }
        e = this.substrToCursor(t);
    }
    return { type: "Combinator", loc: this.getLocation(t, this.tokenStart), name: e };
  }
  function cl(e) {
    this.tokenize(e.name);
  }
  var ul = {};
  Ft(ul, { generate: () => fl, name: () => pl, parse: () => gl, structure: () => ml });
  var hl = 42,
    dl = 47,
    pl = "Comment",
    ml = { value: String };
  function gl() {
    let e = this.tokenStart,
      t = this.tokenEnd;
    return (
      this.eat(25),
      t - e + 2 >= 2 && this.charCodeAt(t - 2) === hl && this.charCodeAt(t - 1) === dl && (t -= 2),
      { type: "Comment", loc: this.getLocation(e, this.tokenStart), value: this.substring(e + 2, t) }
    );
  }
  function fl(e) {
    this.token(25, "/*" + e.value + "*/");
  }
  var bl = {};
  Ft(bl, { generate: () => Ll, name: () => Rl, parse: () => zl, structure: () => Il, walkContext: () => _l });
  var yl = 33,
    wl = 35,
    kl = 36,
    vl = 38,
    xl = 42,
    El = 43,
    Al = 47;
  function Sl(e) {
    return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
  }
  function Tl(e) {
    return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
  }
  function Cl() {
    let e = this.tokenIndex,
      t = this.Value();
    return (
      "Raw" !== t.type &&
        !1 === this.eof &&
        17 !== this.tokenType &&
        !1 === this.isDelim(yl) &&
        !1 === this.isBalanceEdge(e) &&
        this.error(),
      t
    );
  }
  var Rl = "Declaration",
    _l = "declaration",
    Il = { important: [Boolean, String], property: String, value: ["Value", "Raw"] };
  function zl() {
    let e,
      t = this.tokenStart,
      n = this.tokenIndex,
      r = Nl.call(this),
      a = la(r),
      o = a ? this.parseCustomProperty : this.parseValue,
      i = a ? Tl : Sl,
      s = !1;
    this.skipSC(), this.eat(16);
    let l = this.tokenIndex;
    if (
      (a || this.skipSC(),
      (e = o ? this.parseWithFallback(Cl, i) : i.call(this, this.tokenIndex)),
      a && "Value" === e.type && e.children.isEmpty)
    )
      for (let t = l - this.tokenIndex; t <= 0; t++)
        if (13 === this.lookupType(t)) {
          e.children.appendData({ type: "WhiteSpace", loc: null, value: " " });
          break;
        }
    return (
      this.isDelim(yl) && ((s = Pl.call(this)), this.skipSC()),
      !1 === this.eof && 17 !== this.tokenType && !1 === this.isBalanceEdge(n) && this.error(),
      { type: "Declaration", loc: this.getLocation(t, this.tokenStart), important: s, property: r, value: e }
    );
  }
  function Ll(e) {
    this.token(1, e.property),
      this.token(16, ":"),
      this.node(e.value),
      e.important && (this.token(9, "!"), this.token(1, !0 === e.important ? "important" : e.important));
  }
  function Nl() {
    let e = this.tokenStart;
    if (9 === this.tokenType)
      switch (this.charCodeAt(this.tokenStart)) {
        case xl:
        case kl:
        case El:
        case wl:
        case vl:
          this.next();
          break;
        case Al:
          this.next(), this.isDelim(Al) && this.next();
      }
    return 4 === this.tokenType ? this.eat(4) : this.eat(1), this.substrToCursor(e);
  }
  function Pl() {
    this.eat(9), this.skipSC();
    let e = this.consume(1);
    return "important" === e || e;
  }
  var Ml = {};
  Ft(Ml, { generate: () => Fl, name: () => Dl, parse: () => jl, structure: () => ql });
  var Ol = 38;
  function Ul(e) {
    return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
  }
  var Dl = "DeclarationList",
    ql = { children: [["Declaration", "Atrule", "Rule"]] };
  function jl() {
    let e = this.createList();
    for (; !this.eof; )
      switch (this.tokenType) {
        case 13:
        case 25:
        case 17:
          this.next();
          break;
        case 3:
          e.push(this.parseWithFallback(this.Atrule.bind(this, !0), Ul));
          break;
        default:
          this.isDelim(Ol) ? e.push(this.parseWithFallback(this.Rule, Ul)) : e.push(this.parseWithFallback(this.Declaration, Ul));
      }
    return { type: "DeclarationList", loc: this.getLocationFromList(e), children: e };
  }
  function Fl(e) {
    this.children(e, (e) => {
      "Declaration" === e.type && this.token(17, ";");
    });
  }
  var Bl = {};
  Ft(Bl, { generate: () => $l, name: () => Hl, parse: () => Wl, structure: () => Vl });
  var Hl = "Dimension",
    Vl = { value: String, unit: String };
  function Wl() {
    let e = this.tokenStart,
      t = this.consumeNumber(12);
    return { type: "Dimension", loc: this.getLocation(e, this.tokenStart), value: t, unit: this.substring(e + t.length, this.tokenStart) };
  }
  function $l(e) {
    this.token(12, e.value + e.unit);
  }
  var Gl = {};
  Ft(Gl, { generate: () => Zl, name: () => Yl, parse: () => Jl, structure: () => Kl, walkContext: () => Ql });
  var Yl = "Function",
    Ql = "function",
    Kl = { name: String, children: [[]] };
  function Jl(e, t) {
    let n,
      r = this.tokenStart,
      a = this.consumeFunctionName(),
      o = a.toLowerCase();
    return (
      (n = t.hasOwnProperty(o) ? t[o].call(this, t) : e.call(this, t)),
      this.eof || this.eat(22),
      { type: "Function", loc: this.getLocation(r, this.tokenStart), name: a, children: n }
    );
  }
  function Zl(e) {
    this.token(2, e.name + "("), this.children(e), this.token(22, ")");
  }
  var Xl = {};
  Ft(Xl, { generate: () => ac, name: () => tc, parse: () => rc, structure: () => nc, xxx: () => ec });
  var ec = "XXX",
    tc = "Hash",
    nc = { value: String };
  function rc() {
    let e = this.tokenStart;
    return this.eat(4), { type: "Hash", loc: this.getLocation(e, this.tokenStart), value: this.substrToCursor(e + 1) };
  }
  function ac(e) {
    this.token(4, "#" + e.value);
  }
  var oc = {};
  Ft(oc, { generate: () => cc, name: () => ic, parse: () => lc, structure: () => sc });
  var ic = "Identifier",
    sc = { name: String };
  function lc() {
    return { type: "Identifier", loc: this.getLocation(this.tokenStart, this.tokenEnd), name: this.consume(1) };
  }
  function cc(e) {
    this.token(1, e.name);
  }
  var uc = {};
  Ft(uc, { generate: () => mc, name: () => hc, parse: () => pc, structure: () => dc });
  var hc = "IdSelector",
    dc = { name: String };
  function pc() {
    let e = this.tokenStart;
    return this.eat(4), { type: "IdSelector", loc: this.getLocation(e, this.tokenStart), name: this.substrToCursor(e + 1) };
  }
  function mc(e) {
    this.token(9, "#" + e.name);
  }
  var gc = {};
  Ft(gc, { generate: () => wc, name: () => fc, parse: () => yc, structure: () => bc });
  var fc = "MediaFeature",
    bc = { name: String, value: ["Identifier", "Number", "Dimension", "Ratio", null] };
  function yc() {
    let e,
      t = this.tokenStart,
      n = null;
    if ((this.eat(21), this.skipSC(), (e = this.consume(1)), this.skipSC(), 22 !== this.tokenType)) {
      switch ((this.eat(16), this.skipSC(), this.tokenType)) {
        case 10:
          n = 9 === this.lookupNonWSType(1) ? this.Ratio() : this.Number();
          break;
        case 12:
          n = this.Dimension();
          break;
        case 1:
          n = this.Identifier();
          break;
        default:
          this.error("Number, dimension, ratio or identifier is expected");
      }
      this.skipSC();
    }
    return this.eat(22), { type: "MediaFeature", loc: this.getLocation(t, this.tokenStart), name: e, value: n };
  }
  function wc(e) {
    this.token(21, "("), this.token(1, e.name), null !== e.value && (this.token(16, ":"), this.node(e.value)), this.token(22, ")");
  }
  var kc = {};
  Ft(kc, { generate: () => Ac, name: () => vc, parse: () => Ec, structure: () => xc });
  var vc = "MediaQuery",
    xc = { children: [["Identifier", "MediaFeature", "WhiteSpace"]] };
  function Ec() {
    let e = this.createList(),
      t = null;
    this.skipSC();
    e: for (; !this.eof; ) {
      switch (this.tokenType) {
        case 25:
        case 13:
          this.next();
          continue;
        case 1:
          t = this.Identifier();
          break;
        case 21:
          t = this.MediaFeature();
          break;
        default:
          break e;
      }
      e.push(t);
    }
    return (
      null === t && this.error("Identifier or parenthesis is expected"),
      { type: "MediaQuery", loc: this.getLocationFromList(e), children: e }
    );
  }
  function Ac(e) {
    this.children(e);
  }
  var Sc = {};
  Ft(Sc, { generate: () => _c, name: () => Tc, parse: () => Rc, structure: () => Cc });
  var Tc = "MediaQueryList",
    Cc = { children: [["MediaQuery"]] };
  function Rc() {
    let e = this.createList();
    for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), 18 === this.tokenType); ) this.next();
    return { type: "MediaQueryList", loc: this.getLocationFromList(e), children: e };
  }
  function _c(e) {
    this.children(e, () => this.token(18, ","));
  }
  var Ic = {};
  Ft(Ic, { generate: () => Mc, name: () => Lc, parse: () => Pc, structure: () => Nc });
  var zc = 38,
    Lc = "NestingSelector",
    Nc = {};
  function Pc() {
    let e = this.tokenStart;
    return this.eatDelim(zc), { type: "NestingSelector", loc: this.getLocation(e, this.tokenStart) };
  }
  function Mc() {
    this.token(9, "&");
  }
  var Oc = {};
  Ft(Oc, { generate: () => jc, name: () => Uc, parse: () => qc, structure: () => Dc });
  var Uc = "Nth",
    Dc = { nth: ["AnPlusB", "Identifier"], selector: ["SelectorList", null] };
  function qc() {
    this.skipSC();
    let e,
      t = this.tokenStart,
      n = t,
      r = null;
    return (
      (e = this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? this.Identifier() : this.AnPlusB()),
      (n = this.tokenStart),
      this.skipSC(),
      this.lookupValue(0, "of") && (this.next(), (r = this.SelectorList()), (n = this.tokenStart)),
      { type: "Nth", loc: this.getLocation(t, n), nth: e, selector: r }
    );
  }
  function jc(e) {
    this.node(e.nth), null !== e.selector && (this.token(1, "of"), this.node(e.selector));
  }
  var Fc = {};
  Ft(Fc, { generate: () => Wc, name: () => Bc, parse: () => Vc, structure: () => Hc });
  var Bc = "Number",
    Hc = { value: String };
  function Vc() {
    return { type: "Number", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: this.consume(10) };
  }
  function Wc(e) {
    this.token(10, e.value);
  }
  var $c = {};
  Ft($c, { generate: () => Kc, name: () => Gc, parse: () => Qc, structure: () => Yc });
  var Gc = "Operator",
    Yc = { value: String };
  function Qc() {
    let e = this.tokenStart;
    return this.next(), { type: "Operator", loc: this.getLocation(e, this.tokenStart), value: this.substrToCursor(e) };
  }
  function Kc(e) {
    this.tokenize(e.value);
  }
  var Jc = {};
  Ft(Jc, { generate: () => tu, name: () => Zc, parse: () => eu, structure: () => Xc });
  var Zc = "Parentheses",
    Xc = { children: [[]] };
  function eu(e, t) {
    let n = this.tokenStart,
      r = null;
    return (
      this.eat(21),
      (r = e.call(this, t)),
      this.eof || this.eat(22),
      { type: "Parentheses", loc: this.getLocation(n, this.tokenStart), children: r }
    );
  }
  function tu(e) {
    this.token(21, "("), this.children(e), this.token(22, ")");
  }
  var nu = {};
  Ft(nu, { generate: () => iu, name: () => ru, parse: () => ou, structure: () => au });
  var ru = "Percentage",
    au = { value: String };
  function ou() {
    return { type: "Percentage", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: this.consumeNumber(11) };
  }
  function iu(e) {
    this.token(11, e.value + "%");
  }
  var su = {};
  Ft(su, { generate: () => du, name: () => lu, parse: () => hu, structure: () => uu, walkContext: () => cu });
  var lu = "PseudoClassSelector",
    cu = "function",
    uu = { name: String, children: [["Raw"], null] };
  function hu() {
    let e,
      t,
      n = this.tokenStart,
      r = null;
    return (
      this.eat(16),
      2 === this.tokenType
        ? ((e = this.consumeFunctionName()),
          (t = e.toLowerCase()),
          hasOwnProperty.call(this.pseudo, t)
            ? (this.skipSC(), (r = this.pseudo[t].call(this)), this.skipSC())
            : ((r = this.createList()), r.push(this.Raw(this.tokenIndex, null, !1))),
          this.eat(22))
        : (e = this.consume(1)),
      { type: "PseudoClassSelector", loc: this.getLocation(n, this.tokenStart), name: e, children: r }
    );
  }
  function du(e) {
    this.token(16, ":"), null === e.children ? this.token(1, e.name) : (this.token(2, e.name + "("), this.children(e), this.token(22, ")"));
  }
  var pu = {};
  Ft(pu, { generate: () => yu, name: () => mu, parse: () => bu, structure: () => fu, walkContext: () => gu });
  var mu = "PseudoElementSelector",
    gu = "function",
    fu = { name: String, children: [["Raw"], null] };
  function bu() {
    let e,
      t,
      n = this.tokenStart,
      r = null;
    return (
      this.eat(16),
      this.eat(16),
      2 === this.tokenType
        ? ((e = this.consumeFunctionName()),
          (t = e.toLowerCase()),
          hasOwnProperty.call(this.pseudo, t)
            ? (this.skipSC(), (r = this.pseudo[t].call(this)), this.skipSC())
            : ((r = this.createList()), r.push(this.Raw(this.tokenIndex, null, !1))),
          this.eat(22))
        : (e = this.consume(1)),
      { type: "PseudoElementSelector", loc: this.getLocation(n, this.tokenStart), name: e, children: r }
    );
  }
  function yu(e) {
    this.token(16, ":"),
      this.token(16, ":"),
      null === e.children ? this.token(1, e.name) : (this.token(2, e.name + "("), this.children(e), this.token(22, ")"));
  }
  var wu = {};
  Ft(wu, { generate: () => Tu, name: () => Eu, parse: () => Su, structure: () => Au });
  var ku = 47,
    vu = 46;
  function xu() {
    this.skipSC();
    let e = this.consume(10);
    for (let t = 0; t < e.length; t++) {
      let n = e.charCodeAt(t);
      !xn(n) && n !== vu && this.error("Unsigned number is expected", this.tokenStart - e.length + t);
    }
    return 0 === Number(e) && this.error("Zero number is not allowed", this.tokenStart - e.length), e;
  }
  var Eu = "Ratio",
    Au = { left: String, right: String };
  function Su() {
    let e,
      t = this.tokenStart,
      n = xu.call(this);
    return (
      this.skipSC(), this.eatDelim(ku), (e = xu.call(this)), { type: "Ratio", loc: this.getLocation(t, this.tokenStart), left: n, right: e }
    );
  }
  function Tu(e) {
    this.token(10, e.left), this.token(9, "/"), this.token(10, e.right);
  }
  var Cu = {};
  function Ru() {
    return this.tokenIndex > 0 && 13 === this.lookupType(-1)
      ? this.tokenIndex > 1
        ? this.getTokenStart(this.tokenIndex - 1)
        : this.firstCharOffset
      : this.tokenStart;
  }
  Ft(Cu, { generate: () => Lu, name: () => _u, parse: () => zu, structure: () => Iu });
  var _u = "Raw",
    Iu = { value: String };
  function zu(e, t, n) {
    let r,
      a = this.getTokenStart(e);
    return (
      this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd),
      (r = n && this.tokenStart > a ? Ru.call(this) : this.tokenStart),
      { type: "Raw", loc: this.getLocation(a, r), value: this.substring(a, r) }
    );
  }
  function Lu(e) {
    this.tokenize(e.value);
  }
  var Nu = {};
  function Pu(e) {
    return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
  }
  function Mu() {
    let e = this.SelectorList();
    return "Raw" !== e.type && !1 === this.eof && 23 !== this.tokenType && this.error(), e;
  }
  Ft(Nu, { generate: () => ju, name: () => Ou, parse: () => qu, structure: () => Du, walkContext: () => Uu });
  var Ou = "Rule",
    Uu = "rule",
    Du = { prelude: ["SelectorList", "Raw"], block: ["Block"] };
  function qu() {
    let e,
      t,
      n = this.tokenIndex,
      r = this.tokenStart;
    return (
      (e = this.parseRulePrelude ? this.parseWithFallback(Mu, Pu) : Pu.call(this, n)),
      (t = this.Block(!0)),
      { type: "Rule", loc: this.getLocation(r, this.tokenStart), prelude: e, block: t }
    );
  }
  function ju(e) {
    this.node(e.prelude), this.node(e.block);
  }
  var Fu = {};
  Ft(Fu, { generate: () => Wu, name: () => Bu, parse: () => Vu, structure: () => Hu });
  var Bu = "Selector",
    Hu = {
      children: [
        [
          "TypeSelector",
          "IdSelector",
          "ClassSelector",
          "AttributeSelector",
          "PseudoClassSelector",
          "PseudoElementSelector",
          "Combinator",
          "WhiteSpace"
        ]
      ]
    };
  function Vu() {
    let e = this.readSequence(this.scope.Selector);
    return (
      null === this.getFirstListNode(e) && this.error("Selector is expected"),
      { type: "Selector", loc: this.getLocationFromList(e), children: e }
    );
  }
  function Wu(e) {
    this.children(e);
  }
  var $u = {};
  Ft($u, { generate: () => Ju, name: () => Gu, parse: () => Ku, structure: () => Qu, walkContext: () => Yu });
  var Gu = "SelectorList",
    Yu = "selector",
    Qu = { children: [["Selector", "Raw"]] };
  function Ku() {
    let e = this.createList();
    for (; !this.eof && (e.push(this.Selector()), 18 === this.tokenType); ) this.next();
    return { type: "SelectorList", loc: this.getLocationFromList(e), children: e };
  }
  function Ju(e) {
    this.children(e, () => this.token(18, ","));
  }
  var Zu = {};
  Ft(Zu, { generate: () => lh, name: () => oh, parse: () => sh, structure: () => ih });
  var Xu = {};
  Ft(Xu, { decode: () => rh, encode: () => ah });
  var eh = 92,
    th = 34,
    nh = 39;
  function rh(e) {
    let t = e.length,
      n = e.charCodeAt(0),
      r = n === th || n === nh ? 1 : 0,
      a = 1 === r && t > 1 && e.charCodeAt(t - 1) === n ? t - 2 : t - 1,
      o = "";
    for (let n = r; n <= a; n++) {
      let r = e.charCodeAt(n);
      if (r === eh) {
        if (n === a) {
          n !== t - 1 && (o = e.substr(n + 1));
          break;
        }
        if (((r = e.charCodeAt(++n)), In(eh, r))) {
          let t = n - 1,
            r = $n(e, t);
          (n = r - 1), (o += Kn(e.substring(t + 1, r)));
        } else 13 === r && 10 === e.charCodeAt(n + 1) && n++;
      } else o += e[n];
    }
    return o;
  }
  function ah(e, t) {
    let n = t ? "'" : '"',
      r = t ? nh : th,
      a = "",
      o = !1;
    for (let t = 0; t < e.length; t++) {
      let n = e.charCodeAt(t);
      0 !== n
        ? n <= 31 || 127 === n
          ? ((a += "\\" + n.toString(16)), (o = !0))
          : n === r || n === eh
          ? ((a += "\\" + e.charAt(t)), (o = !1))
          : (o && (En(n) || _n(n)) && (a += " "), (a += e.charAt(t)), (o = !1))
        : (a += "�");
    }
    return n + a + n;
  }
  var oh = "String",
    ih = { value: String };
  function sh() {
    return { type: "String", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: rh(this.consume(5)) };
  }
  function lh(e) {
    this.token(5, ah(e.value));
  }
  var ch = {};
  Ft(ch, { generate: () => fh, name: () => dh, parse: () => gh, structure: () => mh, walkContext: () => ph });
  var uh = 33;
  function hh(e) {
    return this.Raw(e, null, !1);
  }
  var dh = "StyleSheet",
    ph = "stylesheet",
    mh = { children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]] };
  function gh() {
    let e,
      t = this.tokenStart,
      n = this.createList();
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case 13:
          this.next();
          continue;
        case 25:
          if (this.charCodeAt(this.tokenStart + 2) !== uh) {
            this.next();
            continue;
          }
          e = this.Comment();
          break;
        case 14:
          e = this.CDO();
          break;
        case 15:
          e = this.CDC();
          break;
        case 3:
          e = this.parseWithFallback(this.Atrule, hh);
          break;
        default:
          e = this.parseWithFallback(this.Rule, hh);
      }
      n.push(e);
    }
    return { type: "StyleSheet", loc: this.getLocation(t, this.tokenStart), children: n };
  }
  function fh(e) {
    this.children(e);
  }
  var bh = {};
  Ft(bh, { generate: () => Ah, name: () => vh, parse: () => Eh, structure: () => xh });
  var yh = 42,
    wh = 124;
  function kh() {
    1 !== this.tokenType && !1 === this.isDelim(yh) && this.error("Identifier or asterisk is expected"), this.next();
  }
  var vh = "TypeSelector",
    xh = { name: String };
  function Eh() {
    let e = this.tokenStart;
    return (
      this.isDelim(wh) ? (this.next(), kh.call(this)) : (kh.call(this), this.isDelim(wh) && (this.next(), kh.call(this))),
      { type: "TypeSelector", loc: this.getLocation(e, this.tokenStart), name: this.substrToCursor(e) }
    );
  }
  function Ah(e) {
    this.tokenize(e.name);
  }
  var Sh = {};
  Ft(Sh, { generate: () => Oh, name: () => Nh, parse: () => Mh, structure: () => Ph });
  var Th = 43,
    Ch = 45,
    Rh = 63;
  function _h(e, t) {
    let n = 0;
    for (let r = this.tokenStart + e; r < this.tokenEnd; r++) {
      let a = this.charCodeAt(r);
      if (a === Ch && t && 0 !== n) return _h.call(this, e + n + 1, !1), -1;
      En(a) ||
        this.error(
          t && 0 !== n
            ? "Hyphen minus" + (n < 6 ? " or hex digit" : "") + " is expected"
            : n < 6
            ? "Hex digit is expected"
            : "Unexpected input",
          r
        ),
        ++n > 6 && this.error("Too many hex digits", r);
    }
    return this.next(), n;
  }
  function Ih(e) {
    let t = 0;
    for (; this.isDelim(Rh); ) ++t > e && this.error("Too many question marks"), this.next();
  }
  function zh(e) {
    this.charCodeAt(this.tokenStart) !== e && this.error((e === Th ? "Plus sign" : "Hyphen minus") + " is expected");
  }
  function Lh() {
    let e = 0;
    switch (this.tokenType) {
      case 10:
        if (((e = _h.call(this, 1, !0)), this.isDelim(Rh))) {
          Ih.call(this, 6 - e);
          break;
        }
        if (12 === this.tokenType || 10 === this.tokenType) {
          zh.call(this, Ch), _h.call(this, 1, !1);
          break;
        }
        break;
      case 12:
        (e = _h.call(this, 1, !0)), e > 0 && Ih.call(this, 6 - e);
        break;
      default:
        if ((this.eatDelim(Th), 1 === this.tokenType)) {
          (e = _h.call(this, 0, !0)), e > 0 && Ih.call(this, 6 - e);
          break;
        }
        if (this.isDelim(Rh)) {
          this.next(), Ih.call(this, 5);
          break;
        }
        this.error("Hex digit or question mark is expected");
    }
  }
  var Nh = "UnicodeRange",
    Ph = { value: String };
  function Mh() {
    let e = this.tokenStart;
    return (
      this.eatIdent("u"), Lh.call(this), { type: "UnicodeRange", loc: this.getLocation(e, this.tokenStart), value: this.substrToCursor(e) }
    );
  }
  function Oh(e) {
    this.tokenize(e.value);
  }
  var Uh = {};
  Ft(Uh, { generate: () => Kh, name: () => Gh, parse: () => Qh, structure: () => Yh });
  var Dh = {};
  Ft(Dh, { decode: () => Wh, encode: () => $h });
  var qh = 32,
    jh = 92,
    Fh = 34,
    Bh = 39,
    Hh = 40,
    Vh = 41;
  function Wh(e) {
    let t = e.length,
      n = 4,
      r = e.charCodeAt(t - 1) === Vh ? t - 2 : t - 1,
      a = "";
    for (; n < r && _n(e.charCodeAt(n)); ) n++;
    for (; n < r && _n(e.charCodeAt(r)); ) r--;
    for (let o = n; o <= r; o++) {
      let n = e.charCodeAt(o);
      if (n === jh) {
        if (o === r) {
          o !== t - 1 && (a = e.substr(o + 1));
          break;
        }
        if (((n = e.charCodeAt(++o)), In(jh, n))) {
          let t = o - 1,
            n = $n(e, t);
          (o = n - 1), (a += Kn(e.substring(t + 1, n)));
        } else 13 === n && 10 === e.charCodeAt(o + 1) && o++;
      } else a += e[o];
    }
    return a;
  }
  function $h(e) {
    let t = "",
      n = !1;
    for (let r = 0; r < e.length; r++) {
      let a = e.charCodeAt(r);
      0 !== a
        ? a <= 31 || 127 === a
          ? ((t += "\\" + a.toString(16)), (n = !0))
          : a === qh || a === jh || a === Fh || a === Bh || a === Hh || a === Vh
          ? ((t += "\\" + e.charAt(r)), (n = !1))
          : (n && En(a) && (t += " "), (t += e.charAt(r)), (n = !1))
        : (t += "�");
    }
    return "url(" + t + ")";
  }
  var Gh = "Url",
    Yh = { value: String };
  function Qh() {
    let e,
      t = this.tokenStart;
    switch (this.tokenType) {
      case 7:
        e = Wh(this.consume(7));
        break;
      case 2:
        this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"),
          this.eat(2),
          this.skipSC(),
          (e = rh(this.consume(5))),
          this.skipSC(),
          this.eof || this.eat(22);
        break;
      default:
        this.error("Url or Function is expected");
    }
    return { type: "Url", loc: this.getLocation(t, this.tokenStart), value: e };
  }
  function Kh(e) {
    this.token(7, $h(e.value));
  }
  var Jh = {};
  Ft(Jh, { generate: () => td, name: () => Zh, parse: () => ed, structure: () => Xh });
  var Zh = "Value",
    Xh = { children: [[]] };
  function ed() {
    let e = this.tokenStart,
      t = this.readSequence(this.scope.Value);
    return { type: "Value", loc: this.getLocation(e, this.tokenStart), children: t };
  }
  function td(e) {
    this.children(e);
  }
  var nd = {};
  Ft(nd, { generate: () => sd, name: () => ad, parse: () => id, structure: () => od });
  var rd = Object.freeze({ type: "WhiteSpace", loc: null, value: " " }),
    ad = "WhiteSpace",
    od = { value: String };
  function id() {
    return this.eat(13), rd;
  }
  function sd(e) {
    this.token(13, e.value);
  }
  var ld = qt(
      Dt(
        { generic: !0 },
        {
          generic: !0,
          units: {
            angle: ["deg", "grad", "rad", "turn"],
            decibel: ["db"],
            flex: ["fr"],
            frequency: ["hz", "khz"],
            length: [
              "cm",
              "mm",
              "q",
              "in",
              "pt",
              "pc",
              "px",
              "em",
              "rem",
              "ex",
              "rex",
              "cap",
              "rcap",
              "ch",
              "rch",
              "ic",
              "ric",
              "lh",
              "rlh",
              "vw",
              "svw",
              "lvw",
              "dvw",
              "vh",
              "svh",
              "lvh",
              "dvh",
              "vi",
              "svi",
              "lvi",
              "dvi",
              "vb",
              "svb",
              "lvb",
              "dvb",
              "vmin",
              "svmin",
              "lvmin",
              "dvmin",
              "vmax",
              "svmax",
              "lvmax",
              "dvmax",
              "cqw",
              "cqh",
              "cqi",
              "cqb",
              "cqmin",
              "cqmax"
            ],
            resolution: ["dpi", "dpcm", "dppx", "x"],
            semitones: ["st"],
            time: ["s", "ms"]
          },
          types: {
            "abs()": "abs( <calc-sum> )",
            "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
            "acos()": "acos( <calc-sum> )",
            "alpha-value": "<number>|<percentage>",
            "angle-percentage": "<angle>|<percentage>",
            "angular-color-hint": "<angle-percentage>",
            "angular-color-stop": "<color>&&<color-stop-angle>?",
            "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
            "animateable-feature": "scroll-position|contents|<custom-ident>",
            "asin()": "asin( <calc-sum> )",
            "atan()": "atan( <calc-sum> )",
            "atan2()": "atan2( <calc-sum> , <calc-sum> )",
            attachment: "scroll|fixed|local",
            "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
            "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
            "attr-modifier": "i|s",
            "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
            "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
            "auto-track-list":
              "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
            axis: "block|inline|vertical|horizontal",
            "baseline-position": "[first|last]? baseline",
            "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
            "bg-image": "none|<image>",
            "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
            "bg-position":
              "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
            "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
            "blur()": "blur( <length> )",
            "blend-mode":
              "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
            box: "border-box|padding-box|content-box",
            "brightness()": "brightness( <number-percentage> )",
            "calc()": "calc( <calc-sum> )",
            "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
            "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
            "calc-value": "<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )",
            "calc-constant": "e|pi|infinity|-infinity|NaN",
            "cf-final-image": "<image>|<color>",
            "cf-mixing-image": "<percentage>?&&<image>",
            "circle()": "circle( [<shape-radius>]? [at <position>]? )",
            "clamp()": "clamp( <calc-sum>#{3} )",
            "class-selector": "'.' <ident-token>",
            "clip-source": "<url>",
            color:
              "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
            "color-stop": "<color-stop-length>|<color-stop-angle>",
            "color-stop-angle": "<angle-percentage>{1,2}",
            "color-stop-length": "<length-percentage>{1,2}",
            "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
            combinator: "'>'|'+'|'~'|['||']",
            "common-lig-values": "[common-ligatures|no-common-ligatures]",
            "compat-auto":
              "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
            "composite-style":
              "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
            "compositing-operator": "add|subtract|intersect|exclude",
            "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
            "compound-selector-list": "<compound-selector>#",
            "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
            "complex-selector-list": "<complex-selector>#",
            "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
            "contextual-alt-values": "[contextual|no-contextual]",
            "content-distribution": "space-between|space-around|space-evenly|stretch",
            "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
            "content-position": "center|start|end|flex-start|flex-end",
            "content-replacement": "<image>",
            "contrast()": "contrast( [<number-percentage>] )",
            "cos()": "cos( <calc-sum> )",
            counter: "<counter()>|<counters()>",
            "counter()": "counter( <counter-name> , <counter-style>? )",
            "counter-name": "<custom-ident>",
            "counter-style": "<counter-style-name>|symbols( )",
            "counter-style-name": "<custom-ident>",
            "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
            "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
            "cubic-bezier-timing-function":
              "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
            "deprecated-system-color":
              "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
            "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
            "display-box": "contents|none",
            "display-inside": "flow|flow-root|table|flex|grid|ruby",
            "display-internal":
              "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
            "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
            "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
            "display-outside": "block|inline|run-in",
            "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
            "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
            "east-asian-width-values": "[full-width|proportional-width]",
            "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
            "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
            "ending-shape": "circle|ellipse",
            "env()": "env( <custom-ident> , <declaration-value>? )",
            "exp()": "exp( <calc-sum> )",
            "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
            "family-name": "<string>|<custom-ident>+",
            "feature-tag-value": "<string> [<integer>|on|off]?",
            "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
            "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
            "feature-value-block-list": "<feature-value-block>+",
            "feature-value-declaration": "<custom-ident> : <integer>+ ;",
            "feature-value-declaration-list": "<feature-value-declaration>",
            "feature-value-name": "<custom-ident>",
            "fill-rule": "nonzero|evenodd",
            "filter-function":
              "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
            "filter-function-list": "[<filter-function>|<url>]+",
            "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
            "fixed-breadth": "<length-percentage>",
            "fixed-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
            "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
            "font-stretch-absolute":
              "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
            "font-variant-css21": "[normal|small-caps]",
            "font-weight-absolute": "normal|bold|<number [1,1000]>",
            "frequency-percentage": "<frequency>|<percentage>",
            "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
            "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
            "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
            "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
            gradient:
              "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
            "grayscale()": "grayscale( <number-percentage> )",
            "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
            "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
            "hsl()":
              "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
            "hsla()":
              "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
            hue: "<number>|<angle>",
            "hue-rotate()": "hue-rotate( <angle> )",
            "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
            "hypot()": "hypot( <calc-sum># )",
            image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
            "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
            "image-set()": "image-set( <image-set-option># )",
            "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
            "image-src": "<url>|<string>",
            "image-tags": "ltr|rtl",
            "inflexible-breadth": "<length-percentage>|min-content|max-content|auto",
            "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
            "invert()": "invert( <number-percentage> )",
            "keyframes-name": "<custom-ident>|<string>",
            "keyframe-block": "<keyframe-selector># { <declaration-list> }",
            "keyframe-block-list": "<keyframe-block>+",
            "keyframe-selector": "from|to|<percentage>",
            "lab()":
              "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
            "layer()": "layer( <layer-name> )",
            "layer-name": "<ident> ['.' <ident>]*",
            "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
            "leader()": "leader( <leader-type> )",
            "leader-type": "dotted|solid|space|<string>",
            "length-percentage": "<length>|<percentage>",
            "line-names": "'[' <custom-ident>* ']'",
            "line-name-list": "[<line-names>|<name-repeat>]+",
            "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
            "line-width": "<length>|thin|medium|thick",
            "linear-color-hint": "<length-percentage>",
            "linear-color-stop": "<color> <color-stop-length>?",
            "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
            "log()": "log( <calc-sum> , <calc-sum>? )",
            "mask-layer":
              "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
            "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
            "mask-reference": "none|<image>|<mask-source>",
            "mask-source": "<url>",
            "masking-mode": "alpha|luminance|match-source",
            "matrix()": "matrix( <number>#{6} )",
            "matrix3d()": "matrix3d( <number>#{16} )",
            "max()": "max( <calc-sum># )",
            "media-and": "<media-in-parens> [and <media-in-parens>]+",
            "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
            "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
            "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
            "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
            "media-not": "not <media-in-parens>",
            "media-or": "<media-in-parens> [or <media-in-parens>]+",
            "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
            "media-query-list": "<media-query>#",
            "media-type": "<ident>",
            "mf-boolean": "<mf-name>",
            "mf-name": "<ident>",
            "mf-plain": "<mf-name> : <mf-value>",
            "mf-range":
              "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
            "mf-value": "<number>|<dimension>|<ident>|<ratio>",
            "min()": "min( <calc-sum># )",
            "minmax()":
              "minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )",
            "mod()": "mod( <calc-sum> , <calc-sum> )",
            "name-repeat": "repeat( [<integer [1,∞]>|auto-fill] , <line-names>+ )",
            "named-color":
              "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
            "namespace-prefix": "<ident>",
            "ns-prefix": "[<ident-token>|'*']? '|'",
            "number-percentage": "<number>|<percentage>",
            "numeric-figure-values": "[lining-nums|oldstyle-nums]",
            "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
            "numeric-spacing-values": "[proportional-nums|tabular-nums]",
            nth: "<an-plus-b>|even|odd",
            "opacity()": "opacity( [<number-percentage>] )",
            "overflow-position": "unsafe|safe",
            "outline-radius": "<length>|<percentage>",
            "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
            "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
            "page-margin-box-type":
              "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
            "page-selector-list": "[<page-selector>#]?",
            "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
            "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
            "path()": "path( [<fill-rule> ,]? <string> )",
            "paint()": "paint( <ident> , <declaration-value>? )",
            "perspective()": "perspective( [<length [0,∞]>|none] )",
            "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
            position:
              "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
            "pow()": "pow( <calc-sum> , <calc-sum> )",
            "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
            "pseudo-element-selector": "':' <pseudo-class-selector>",
            "pseudo-page": ": [left|right|first|blank]",
            quote: "open-quote|close-quote|no-open-quote|no-close-quote",
            "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
            ratio: "<number [0,∞]> [/ <number [0,∞]>]?",
            "relative-selector": "<combinator>? <complex-selector>",
            "relative-selector-list": "<relative-selector>#",
            "relative-size": "larger|smaller",
            "rem()": "rem( <calc-sum> , <calc-sum> )",
            "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
            "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
            "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
            "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
            "reversed-counter-name": "reversed( <counter-name> )",
            "rgb()":
              "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
            "rgba()":
              "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
            "rotate()": "rotate( [<angle>|<zero>] )",
            "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
            "rotateX()": "rotateX( [<angle>|<zero>] )",
            "rotateY()": "rotateY( [<angle>|<zero>] )",
            "rotateZ()": "rotateZ( [<angle>|<zero>] )",
            "round()": "round( <rounding-strategy>? , <calc-sum> , <calc-sum> )",
            "rounding-strategy": "nearest|up|down|to-zero",
            "saturate()": "saturate( <number-percentage> )",
            "scale()": "scale( [<number>|<percentage>]#{1,2} )",
            "scale3d()": "scale3d( [<number>|<percentage>]#{3} )",
            "scaleX()": "scaleX( [<number>|<percentage>] )",
            "scaleY()": "scaleY( [<number>|<percentage>] )",
            "scaleZ()": "scaleZ( [<number>|<percentage>] )",
            scroller: "root|nearest",
            "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
            "shape-radius": "<length-percentage>|closest-side|farthest-side",
            "sign()": "sign( <calc-sum> )",
            "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
            "skewX()": "skewX( [<angle>|<zero>] )",
            "skewY()": "skewY( [<angle>|<zero>] )",
            "sepia()": "sepia( <number-percentage> )",
            shadow: "inset?&&<length>{2,4}&&<color>?",
            "shadow-t": "[<length>{2,3}&&<color>?]",
            shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
            "shape-box": "<box>|margin-box",
            "side-or-corner": "[left|right]||[top|bottom]",
            "sin()": "sin( <calc-sum> )",
            "single-animation":
              "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
            "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
            "single-animation-fill-mode": "none|forwards|backwards|both",
            "single-animation-iteration-count": "infinite|<number>",
            "single-animation-play-state": "running|paused",
            "single-animation-timeline": "auto|none|<timeline-name>|scroll( <axis>? <scroller>? )",
            "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
            "single-transition-property": "all|<custom-ident>",
            size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
            "sqrt()": "sqrt( <calc-sum> )",
            "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
            "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
            "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
            "supports-condition":
              "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
            "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
            "supports-feature": "<supports-decl>|<supports-selector-fn>",
            "supports-decl": "( <declaration> )",
            "supports-selector-fn": "selector( <complex-selector> )",
            symbol: "<string>|<image>|<custom-ident>",
            "tan()": "tan( <calc-sum> )",
            target: "<target-counter()>|<target-counters()>|<target-text()>",
            "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
            "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
            "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
            "time-percentage": "<time>|<percentage>",
            "timeline-name": "<custom-ident>|<string>",
            "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
            "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
            "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
            "track-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <track-size>]+ <line-names>? )",
            "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )",
            "transform-function":
              "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
            "transform-list": "<transform-function>+",
            "translate()": "translate( <length-percentage> , <length-percentage>? )",
            "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
            "translateX()": "translateX( <length-percentage> )",
            "translateY()": "translateY( <length-percentage> )",
            "translateZ()": "translateZ( <length> )",
            "type-or-unit":
              "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
            "type-selector": "<wq-name>|<ns-prefix>? '*'",
            "var()": "var( <custom-property-name> , <declaration-value>? )",
            "viewport-length": "auto|<length-percentage>",
            "visual-box": "content-box|padding-box|border-box",
            "wq-name": "<ns-prefix>? <ident-token>",
            "-legacy-gradient":
              "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
            "-legacy-linear-gradient":
              "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
            "-legacy-repeating-linear-gradient":
              "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
            "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
            "-legacy-radial-gradient":
              "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
            "-legacy-repeating-radial-gradient":
              "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
            "-legacy-radial-gradient-arguments":
              "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
            "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
            "-legacy-radial-gradient-shape": "circle|ellipse",
            "-non-standard-font":
              "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
            "-non-standard-color":
              "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
            "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
            "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
            "-non-standard-width":
              "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
            "-webkit-gradient()":
              "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
            "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
            "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
            "-webkit-gradient-radius": "<length>|<percentage>",
            "-webkit-gradient-type": "linear|radial",
            "-webkit-mask-box-repeat": "repeat|stretch|round",
            "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
            "-ms-filter-function-list": "<-ms-filter-function>+",
            "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
            "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
            "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
            "-ms-filter": "<string>",
            age: "child|young|old",
            "attr-name": "<wq-name>",
            "attr-fallback": "<any-value>",
            "bg-clip": "<box>|border|text",
            bottom: "<length>|auto",
            "generic-voice": "[<age>? <gender> <integer>?]",
            gender: "male|female|neutral",
            left: "<length>|auto",
            "mask-image": "<mask-reference>#",
            paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
            right: "<length>|auto",
            "scroll-timeline-axis": "block|inline|vertical|horizontal",
            "scroll-timeline-name": "none|<custom-ident>",
            "single-animation-composition": "replace|add|accumulate",
            "svg-length": "<percentage>|<length>|<number>",
            "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
            top: "<length>|auto",
            x: "<number>",
            y: "<number>",
            declaration: "<ident-token> : <declaration-value>? ['!' important]?",
            "declaration-list": "[<declaration>? ';']* <declaration>?",
            url: "url( <string> <url-modifier>* )|<url-token>",
            "url-modifier": "<ident>|<function-token> <any-value> )",
            "number-zero-one": "<number [0,1]>",
            "number-one-or-greater": "<number [1,∞]>",
            "-non-standard-display":
              "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
          },
          properties: {
            "--*": "<declaration-value>",
            "-ms-accelerator": "false|true",
            "-ms-block-progression": "tb|rl|bt|lr",
            "-ms-content-zoom-chaining": "none|chained",
            "-ms-content-zooming": "none|zoom",
            "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
            "-ms-content-zoom-limit-max": "<percentage>",
            "-ms-content-zoom-limit-min": "<percentage>",
            "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
            "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
            "-ms-content-zoom-snap-type": "none|proximity|mandatory",
            "-ms-filter": "<string>",
            "-ms-flow-from": "[none|<custom-ident>]#",
            "-ms-flow-into": "[none|<custom-ident>]#",
            "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
            "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
            "-ms-high-contrast-adjust": "auto|none",
            "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
            "-ms-hyphenate-limit-lines": "no-limit|<integer>",
            "-ms-hyphenate-limit-zone": "<percentage>|<length>",
            "-ms-ime-align": "auto|after",
            "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
            "-ms-scrollbar-3dlight-color": "<color>",
            "-ms-scrollbar-arrow-color": "<color>",
            "-ms-scrollbar-base-color": "<color>",
            "-ms-scrollbar-darkshadow-color": "<color>",
            "-ms-scrollbar-face-color": "<color>",
            "-ms-scrollbar-highlight-color": "<color>",
            "-ms-scrollbar-shadow-color": "<color>",
            "-ms-scrollbar-track-color": "<color>",
            "-ms-scroll-chaining": "chained|none",
            "-ms-scroll-limit":
              "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
            "-ms-scroll-limit-x-max": "auto|<length>",
            "-ms-scroll-limit-x-min": "<length>",
            "-ms-scroll-limit-y-max": "auto|<length>",
            "-ms-scroll-limit-y-min": "<length>",
            "-ms-scroll-rails": "none|railed",
            "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
            "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
            "-ms-scroll-snap-type": "none|proximity|mandatory",
            "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
            "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
            "-ms-scroll-translation": "none|vertical-to-horizontal",
            "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
            "-ms-touch-select": "grippers|none",
            "-ms-user-select": "none|element|text",
            "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
            "-ms-wrap-margin": "<length>",
            "-ms-wrap-through": "wrap|none",
            "-moz-appearance":
              "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
            "-moz-binding": "<url>|none",
            "-moz-border-bottom-colors": "<color>+|none",
            "-moz-border-left-colors": "<color>+|none",
            "-moz-border-right-colors": "<color>+|none",
            "-moz-border-top-colors": "<color>+|none",
            "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
            "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
            "-moz-force-broken-image-icon": "0|1",
            "-moz-image-region": "<shape>|auto",
            "-moz-orient": "inline|block|horizontal|vertical",
            "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
            "-moz-outline-radius-bottomleft": "<outline-radius>",
            "-moz-outline-radius-bottomright": "<outline-radius>",
            "-moz-outline-radius-topleft": "<outline-radius>",
            "-moz-outline-radius-topright": "<outline-radius>",
            "-moz-stack-sizing": "ignore|stretch-to-fit",
            "-moz-text-blink": "none|blink",
            "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
            "-moz-user-input": "auto|none|enabled|disabled",
            "-moz-user-modify": "read-only|read-write|write-only",
            "-moz-window-dragging": "drag|no-drag",
            "-moz-window-shadow": "default|menu|tooltip|sheet|none",
            "-webkit-appearance":
              "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
            "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
            "-webkit-border-before-color": "<color>",
            "-webkit-border-before-style": "<'border-style'>",
            "-webkit-border-before-width": "<'border-width'>",
            "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
            "-webkit-line-clamp": "none|<integer>",
            "-webkit-mask":
              "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
            "-webkit-mask-attachment": "<attachment>#",
            "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
            "-webkit-mask-composite": "<composite-style>#",
            "-webkit-mask-image": "<mask-reference>#",
            "-webkit-mask-origin": "[<box>|border|padding|content]#",
            "-webkit-mask-position": "<position>#",
            "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
            "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
            "-webkit-mask-repeat": "<repeat-style>#",
            "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
            "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
            "-webkit-mask-size": "<bg-size>#",
            "-webkit-overflow-scrolling": "auto|touch",
            "-webkit-tap-highlight-color": "<color>",
            "-webkit-text-fill-color": "<color>",
            "-webkit-text-stroke": "<length>||<color>",
            "-webkit-text-stroke-color": "<color>",
            "-webkit-text-stroke-width": "<length>",
            "-webkit-touch-callout": "default|none",
            "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
            "accent-color": "auto|<color>",
            "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
            "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
            "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
            "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
            all: "initial|inherit|unset|revert|revert-layer",
            animation: "<single-animation>#",
            "animation-composition": "<single-animation-composition>#",
            "animation-delay": "<time>#",
            "animation-direction": "<single-animation-direction>#",
            "animation-duration": "<time>#",
            "animation-fill-mode": "<single-animation-fill-mode>#",
            "animation-iteration-count": "<single-animation-iteration-count>#",
            "animation-name": "[none|<keyframes-name>]#",
            "animation-play-state": "<single-animation-play-state>#",
            "animation-timing-function": "<easing-function>#",
            "animation-timeline": "<single-animation-timeline>#",
            appearance: "none|auto|textfield|menulist-button|<compat-auto>",
            "aspect-ratio": "auto|<ratio>",
            azimuth:
              "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
            "backdrop-filter": "none|<filter-function-list>",
            "backface-visibility": "visible|hidden",
            background: "[<bg-layer> ,]* <final-bg-layer>",
            "background-attachment": "<attachment>#",
            "background-blend-mode": "<blend-mode>#",
            "background-clip": "<bg-clip>#",
            "background-color": "<color>",
            "background-image": "<bg-image>#",
            "background-origin": "<box>#",
            "background-position": "<bg-position>#",
            "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
            "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
            "background-repeat": "<repeat-style>#",
            "background-size": "<bg-size>#",
            "block-overflow": "clip|ellipsis|<string>",
            "block-size": "<'width'>",
            border: "<line-width>||<line-style>||<color>",
            "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
            "border-block-color": "<'border-top-color'>{1,2}",
            "border-block-style": "<'border-top-style'>",
            "border-block-width": "<'border-top-width'>",
            "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
            "border-block-end-color": "<'border-top-color'>",
            "border-block-end-style": "<'border-top-style'>",
            "border-block-end-width": "<'border-top-width'>",
            "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
            "border-block-start-color": "<'border-top-color'>",
            "border-block-start-style": "<'border-top-style'>",
            "border-block-start-width": "<'border-top-width'>",
            "border-bottom": "<line-width>||<line-style>||<color>",
            "border-bottom-color": "<'border-top-color'>",
            "border-bottom-left-radius": "<length-percentage>{1,2}",
            "border-bottom-right-radius": "<length-percentage>{1,2}",
            "border-bottom-style": "<line-style>",
            "border-bottom-width": "<line-width>",
            "border-collapse": "collapse|separate",
            "border-color": "<color>{1,4}",
            "border-end-end-radius": "<length-percentage>{1,2}",
            "border-end-start-radius": "<length-percentage>{1,2}",
            "border-image":
              "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
            "border-image-outset": "[<length>|<number>]{1,4}",
            "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
            "border-image-slice": "<number-percentage>{1,4}&&fill?",
            "border-image-source": "none|<image>",
            "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
            "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
            "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
            "border-inline-color": "<'border-top-color'>{1,2}",
            "border-inline-style": "<'border-top-style'>",
            "border-inline-width": "<'border-top-width'>",
            "border-inline-end-color": "<'border-top-color'>",
            "border-inline-end-style": "<'border-top-style'>",
            "border-inline-end-width": "<'border-top-width'>",
            "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
            "border-inline-start-color": "<'border-top-color'>",
            "border-inline-start-style": "<'border-top-style'>",
            "border-inline-start-width": "<'border-top-width'>",
            "border-left": "<line-width>||<line-style>||<color>",
            "border-left-color": "<color>",
            "border-left-style": "<line-style>",
            "border-left-width": "<line-width>",
            "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
            "border-right": "<line-width>||<line-style>||<color>",
            "border-right-color": "<color>",
            "border-right-style": "<line-style>",
            "border-right-width": "<line-width>",
            "border-spacing": "<length> <length>?",
            "border-start-end-radius": "<length-percentage>{1,2}",
            "border-start-start-radius": "<length-percentage>{1,2}",
            "border-style": "<line-style>{1,4}",
            "border-top": "<line-width>||<line-style>||<color>",
            "border-top-color": "<color>",
            "border-top-left-radius": "<length-percentage>{1,2}",
            "border-top-right-radius": "<length-percentage>{1,2}",
            "border-top-style": "<line-style>",
            "border-top-width": "<line-width>",
            "border-width": "<line-width>{1,4}",
            bottom: "<length>|<percentage>|auto",
            "box-align": "start|center|end|baseline|stretch",
            "box-decoration-break": "slice|clone",
            "box-direction": "normal|reverse|inherit",
            "box-flex": "<number>",
            "box-flex-group": "<integer>",
            "box-lines": "single|multiple",
            "box-ordinal-group": "<integer>",
            "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
            "box-pack": "start|center|end|justify",
            "box-shadow": "none|<shadow>#",
            "box-sizing": "content-box|border-box",
            "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
            "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
            "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
            "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
            caret: "<'caret-color'>||<'caret-shape'>",
            "caret-color": "auto|<color>",
            "caret-shape": "auto|bar|block|underscore",
            clear: "none|left|right|both|inline-start|inline-end",
            clip: "<shape>|auto",
            "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
            color: "<color>",
            "print-color-adjust": "economy|exact",
            "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
            "column-count": "<integer>|auto",
            "column-fill": "auto|balance|balance-all",
            "column-gap": "normal|<length-percentage>",
            "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
            "column-rule-color": "<color>",
            "column-rule-style": "<'border-style'>",
            "column-rule-width": "<'border-width'>",
            "column-span": "none|all",
            "column-width": "<length>|auto",
            columns: "<'column-width'>||<'column-count'>",
            contain: "none|strict|content|[[size||inline-size]||layout||style||paint]",
            "contain-intrinsic-size": "[none|<length>|auto <length>]{1,2}",
            "contain-intrinsic-block-size": "none|<length>|auto <length>",
            "contain-intrinsic-height": "none|<length>|auto <length>",
            "contain-intrinsic-inline-size": "none|<length>|auto <length>",
            "contain-intrinsic-width": "none|<length>|auto <length>",
            content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
            "content-visibility": "visible|auto|hidden",
            "counter-increment": "[<counter-name> <integer>?]+|none",
            "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
            "counter-set": "[<counter-name> <integer>?]+|none",
            cursor:
              "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
            direction: "ltr|rtl",
            display:
              "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
            "empty-cells": "show|hide",
            filter: "none|<filter-function-list>|<-ms-filter-function-list>",
            flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
            "flex-basis": "content|<'width'>",
            "flex-direction": "row|row-reverse|column|column-reverse",
            "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
            "flex-grow": "<number>",
            "flex-shrink": "<number>",
            "flex-wrap": "nowrap|wrap|wrap-reverse",
            float: "left|right|none|inline-start|inline-end",
            font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
            "font-family": "[<family-name>|<generic-family>]#",
            "font-feature-settings": "normal|<feature-tag-value>#",
            "font-kerning": "auto|normal|none",
            "font-language-override": "normal|<string>",
            "font-optical-sizing": "auto|none",
            "font-variation-settings": "normal|[<string> <number>]#",
            "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
            "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
            "font-smooth": "auto|never|always|<absolute-size>|<length>",
            "font-stretch": "<font-stretch-absolute>",
            "font-style": "normal|italic|oblique <angle>?",
            "font-synthesis": "none|[weight||style||small-caps]",
            "font-variant":
              "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
            "font-variant-alternates":
              "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
            "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
            "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
            "font-variant-ligatures":
              "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
            "font-variant-numeric":
              "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
            "font-variant-position": "normal|sub|super",
            "font-weight": "<font-weight-absolute>|bolder|lighter",
            "forced-color-adjust": "auto|none",
            gap: "<'row-gap'> <'column-gap'>?",
            grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
            "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
            "grid-auto-columns": "<track-size>+",
            "grid-auto-flow": "[row|column]||dense",
            "grid-auto-rows": "<track-size>+",
            "grid-column": "<grid-line> [/ <grid-line>]?",
            "grid-column-end": "<grid-line>",
            "grid-column-gap": "<length-percentage>",
            "grid-column-start": "<grid-line>",
            "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
            "grid-row": "<grid-line> [/ <grid-line>]?",
            "grid-row-end": "<grid-line>",
            "grid-row-gap": "<length-percentage>",
            "grid-row-start": "<grid-line>",
            "grid-template":
              "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
            "grid-template-areas": "none|<string>+",
            "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
            "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
            "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
            height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
            "hyphenate-character": "auto|<string>",
            hyphens: "none|manual|auto",
            "image-orientation": "from-image|<angle>|[<angle>? flip]",
            "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
            "image-resolution": "[from-image||<resolution>]&&snap?",
            "ime-mode": "auto|normal|active|inactive|disabled",
            "initial-letter": "normal|[<number> <integer>?]",
            "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
            "inline-size": "<'width'>",
            "input-security": "auto|none",
            inset: "<'top'>{1,4}",
            "inset-block": "<'top'>{1,2}",
            "inset-block-end": "<'top'>",
            "inset-block-start": "<'top'>",
            "inset-inline": "<'top'>{1,2}",
            "inset-inline-end": "<'top'>",
            "inset-inline-start": "<'top'>",
            isolation: "auto|isolate",
            "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
            "justify-items":
              "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
            "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
            "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
            left: "<length>|<percentage>|auto",
            "letter-spacing": "normal|<length-percentage>",
            "line-break": "auto|loose|normal|strict|anywhere",
            "line-clamp": "none|<integer>",
            "line-height": "normal|<number>|<length>|<percentage>",
            "line-height-step": "<length>",
            "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
            "list-style-image": "<image>|none",
            "list-style-position": "inside|outside",
            "list-style-type": "<counter-style>|<string>|none",
            margin: "[<length>|<percentage>|auto]{1,4}",
            "margin-block": "<'margin-left'>{1,2}",
            "margin-block-end": "<'margin-left'>",
            "margin-block-start": "<'margin-left'>",
            "margin-bottom": "<length>|<percentage>|auto",
            "margin-inline": "<'margin-left'>{1,2}",
            "margin-inline-end": "<'margin-left'>",
            "margin-inline-start": "<'margin-left'>",
            "margin-left": "<length>|<percentage>|auto",
            "margin-right": "<length>|<percentage>|auto",
            "margin-top": "<length>|<percentage>|auto",
            "margin-trim": "none|in-flow|all",
            mask: "<mask-layer>#",
            "mask-border":
              "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
            "mask-border-mode": "luminance|alpha",
            "mask-border-outset": "[<length>|<number>]{1,4}",
            "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
            "mask-border-slice": "<number-percentage>{1,4} fill?",
            "mask-border-source": "none|<image>",
            "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
            "mask-clip": "[<geometry-box>|no-clip]#",
            "mask-composite": "<compositing-operator>#",
            "mask-image": "<mask-reference>#",
            "mask-mode": "<masking-mode>#",
            "mask-origin": "<geometry-box>#",
            "mask-position": "<position>#",
            "mask-repeat": "<repeat-style>#",
            "mask-size": "<bg-size>#",
            "mask-type": "luminance|alpha",
            "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
            "math-depth": "auto-add|add( <integer> )|<integer>",
            "math-shift": "normal|compact",
            "math-style": "normal|compact",
            "max-block-size": "<'max-width'>",
            "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
            "max-inline-size": "<'max-width'>",
            "max-lines": "none|<integer>",
            "max-width":
              "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
            "min-block-size": "<'min-width'>",
            "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
            "min-inline-size": "<'min-width'>",
            "min-width":
              "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
            "mix-blend-mode": "<blend-mode>|plus-lighter",
            "object-fit": "fill|contain|cover|none|scale-down",
            "object-position": "<position>",
            offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
            "offset-anchor": "auto|<position>",
            "offset-distance": "<length-percentage>",
            "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
            "offset-position": "auto|<position>",
            "offset-rotate": "[auto|reverse]||<angle>",
            opacity: "<alpha-value>",
            order: "<integer>",
            orphans: "<integer>",
            outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
            "outline-color": "<color>|invert",
            "outline-offset": "<length>",
            "outline-style": "auto|<'border-style'>",
            "outline-width": "<line-width>",
            overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
            "overflow-anchor": "auto|none",
            "overflow-block": "visible|hidden|clip|scroll|auto",
            "overflow-clip-box": "padding-box|content-box",
            "overflow-clip-margin": "<visual-box>||<length [0,∞]>",
            "overflow-inline": "visible|hidden|clip|scroll|auto",
            "overflow-wrap": "normal|break-word|anywhere",
            "overflow-x": "visible|hidden|clip|scroll|auto",
            "overflow-y": "visible|hidden|clip|scroll|auto",
            "overscroll-behavior": "[contain|none|auto]{1,2}",
            "overscroll-behavior-block": "contain|none|auto",
            "overscroll-behavior-inline": "contain|none|auto",
            "overscroll-behavior-x": "contain|none|auto",
            "overscroll-behavior-y": "contain|none|auto",
            padding: "[<length>|<percentage>]{1,4}",
            "padding-block": "<'padding-left'>{1,2}",
            "padding-block-end": "<'padding-left'>",
            "padding-block-start": "<'padding-left'>",
            "padding-bottom": "<length>|<percentage>",
            "padding-inline": "<'padding-left'>{1,2}",
            "padding-inline-end": "<'padding-left'>",
            "padding-inline-start": "<'padding-left'>",
            "padding-left": "<length>|<percentage>",
            "padding-right": "<length>|<percentage>",
            "padding-top": "<length>|<percentage>",
            "page-break-after": "auto|always|avoid|left|right|recto|verso",
            "page-break-before": "auto|always|avoid|left|right|recto|verso",
            "page-break-inside": "auto|avoid",
            "paint-order": "normal|[fill||stroke||markers]",
            perspective: "none|<length>",
            "perspective-origin": "<position>",
            "place-content": "<'align-content'> <'justify-content'>?",
            "place-items": "<'align-items'> <'justify-items'>?",
            "place-self": "<'align-self'> <'justify-self'>?",
            "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
            position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
            quotes: "none|auto|[<string> <string>]+",
            resize: "none|both|horizontal|vertical|block|inline",
            right: "<length>|<percentage>|auto",
            rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
            "row-gap": "normal|<length-percentage>",
            "ruby-align": "start|center|space-between|space-around",
            "ruby-merge": "separate|collapse|auto",
            "ruby-position": "[alternate||[over|under]]|inter-character",
            scale: "none|<number>{1,3}",
            "scrollbar-color": "auto|<color>{2}",
            "scrollbar-gutter": "auto|stable&&both-edges?",
            "scrollbar-width": "auto|thin|none",
            "scroll-behavior": "auto|smooth",
            "scroll-margin": "<length>{1,4}",
            "scroll-margin-block": "<length>{1,2}",
            "scroll-margin-block-start": "<length>",
            "scroll-margin-block-end": "<length>",
            "scroll-margin-bottom": "<length>",
            "scroll-margin-inline": "<length>{1,2}",
            "scroll-margin-inline-start": "<length>",
            "scroll-margin-inline-end": "<length>",
            "scroll-margin-left": "<length>",
            "scroll-margin-right": "<length>",
            "scroll-margin-top": "<length>",
            "scroll-padding": "[auto|<length-percentage>]{1,4}",
            "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
            "scroll-padding-block-start": "auto|<length-percentage>",
            "scroll-padding-block-end": "auto|<length-percentage>",
            "scroll-padding-bottom": "auto|<length-percentage>",
            "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
            "scroll-padding-inline-start": "auto|<length-percentage>",
            "scroll-padding-inline-end": "auto|<length-percentage>",
            "scroll-padding-left": "auto|<length-percentage>",
            "scroll-padding-right": "auto|<length-percentage>",
            "scroll-padding-top": "auto|<length-percentage>",
            "scroll-snap-align": "[none|start|end|center]{1,2}",
            "scroll-snap-coordinate": "none|<position>#",
            "scroll-snap-destination": "<position>",
            "scroll-snap-points-x": "none|repeat( <length-percentage> )",
            "scroll-snap-points-y": "none|repeat( <length-percentage> )",
            "scroll-snap-stop": "normal|always",
            "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
            "scroll-snap-type-x": "none|mandatory|proximity",
            "scroll-snap-type-y": "none|mandatory|proximity",
            "scroll-timeline": "<scroll-timeline-name>||<scroll-timeline-axis>",
            "scroll-timeline-axis": "block|inline|vertical|horizontal",
            "scroll-timeline-name": "none|<custom-ident>",
            "shape-image-threshold": "<alpha-value>",
            "shape-margin": "<length-percentage>",
            "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
            "tab-size": "<integer>|<length>",
            "table-layout": "auto|fixed",
            "text-align": "start|end|left|right|center|justify|match-parent",
            "text-align-last": "auto|start|end|left|right|center|justify",
            "text-combine-upright": "none|all|[digits <integer>?]",
            "text-decoration":
              "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
            "text-decoration-color": "<color>",
            "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
            "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
            "text-decoration-skip-ink": "auto|all|none",
            "text-decoration-style": "solid|double|dotted|dashed|wavy",
            "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
            "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
            "text-emphasis-color": "<color>",
            "text-emphasis-position": "[over|under]&&[right|left]",
            "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
            "text-indent": "<length-percentage>&&hanging?&&each-line?",
            "text-justify": "auto|inter-character|inter-word|none",
            "text-orientation": "mixed|upright|sideways",
            "text-overflow": "[clip|ellipsis|<string>]{1,2}",
            "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
            "text-shadow": "none|<shadow-t>#",
            "text-size-adjust": "none|auto|<percentage>",
            "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
            "text-underline-offset": "auto|<length>|<percentage>",
            "text-underline-position": "auto|from-font|[under||[left|right]]",
            top: "<length>|<percentage>|auto",
            "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
            transform: "none|<transform-list>",
            "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
            "transform-origin":
              "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
            "transform-style": "flat|preserve-3d",
            transition: "<single-transition>#",
            "transition-delay": "<time>#",
            "transition-duration": "<time>#",
            "transition-property": "none|<single-transition-property>#",
            "transition-timing-function": "<easing-function>#",
            translate: "none|<length-percentage> [<length-percentage> <length>?]?",
            "unicode-bidi":
              "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
            "user-select": "auto|text|none|contain|all",
            "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
            visibility: "visible|hidden|collapse",
            "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
            widows: "<integer>",
            width:
              "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
            "will-change": "auto|<animateable-feature>#",
            "word-break": "normal|break-all|keep-all|break-word",
            "word-spacing": "normal|<length>",
            "word-wrap": "normal|break-word",
            "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
            "z-index": "auto|<integer>",
            zoom: "normal|reset|<number>|<percentage>",
            "-moz-background-clip": "padding|border",
            "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
            "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
            "-moz-border-radius-topleft": "<'border-top-left-radius'>",
            "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
            "-moz-control-character-visibility": "visible|hidden",
            "-moz-osx-font-smoothing": "auto|grayscale",
            "-moz-user-select": "none|text|all|-moz-none",
            "-ms-flex-align": "start|end|center|baseline|stretch",
            "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
            "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
            "-ms-flex-negative": "<'flex-shrink'>",
            "-ms-flex-pack": "start|end|center|justify|distribute",
            "-ms-flex-order": "<integer>",
            "-ms-flex-positive": "<'flex-grow'>",
            "-ms-flex-preferred-size": "<'flex-basis'>",
            "-ms-interpolation-mode": "nearest-neighbor|bicubic",
            "-ms-grid-column-align": "start|end|center|stretch",
            "-ms-grid-row-align": "start|end|center|stretch",
            "-ms-hyphenate-limit-last": "none|always|column|page|spread",
            "-webkit-background-clip": "[<box>|border|padding|content|text]#",
            "-webkit-column-break-after": "always|auto|avoid",
            "-webkit-column-break-before": "always|auto|avoid",
            "-webkit-column-break-inside": "always|auto|avoid",
            "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
            "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
            "-webkit-print-color-adjust": "economy|exact",
            "-webkit-text-security": "none|circle|disc|square",
            "-webkit-user-drag": "none|element|auto",
            "-webkit-user-select": "auto|none|text|all",
            "alignment-baseline":
              "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
            "baseline-shift": "baseline|sub|super|<svg-length>",
            behavior: "<url>+",
            "clip-rule": "nonzero|evenodd",
            cue: "<'cue-before'> <'cue-after'>?",
            "cue-after": "<url> <decibel>?|none",
            "cue-before": "<url> <decibel>?|none",
            "dominant-baseline":
              "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
            fill: "<paint>",
            "fill-opacity": "<number-zero-one>",
            "fill-rule": "nonzero|evenodd",
            "glyph-orientation-horizontal": "<angle>",
            "glyph-orientation-vertical": "<angle>",
            kerning: "auto|<svg-length>",
            marker: "none|<url>",
            "marker-end": "none|<url>",
            "marker-mid": "none|<url>",
            "marker-start": "none|<url>",
            pause: "<'pause-before'> <'pause-after'>?",
            "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
            "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
            rest: "<'rest-before'> <'rest-after'>?",
            "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
            "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
            "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
            src: "[<url> [format( <string># )]?|local( <family-name> )]#",
            speak: "auto|none|normal",
            "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
            stroke: "<paint>",
            "stroke-dasharray": "none|[<svg-length>+]#",
            "stroke-dashoffset": "<svg-length>",
            "stroke-linecap": "butt|round|square",
            "stroke-linejoin": "miter|round|bevel",
            "stroke-miterlimit": "<number-one-or-greater>",
            "stroke-opacity": "<number-zero-one>",
            "stroke-width": "<svg-length>",
            "text-anchor": "start|middle|end",
            "unicode-range": "<urange>#",
            "voice-balance": "<number>|left|center|right|leftwards|rightwards",
            "voice-duration": "auto|<time>",
            "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
            "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
            "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
            "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
            "voice-stress": "normal|strong|moderate|none|reduced",
            "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
          },
          atrules: {
            charset: { prelude: "<string>", descriptors: null },
            "counter-style": {
              prelude: "<counter-style-name>",
              descriptors: {
                "additive-symbols": "[<integer>&&<symbol>]#",
                fallback: "<counter-style-name>",
                negative: "<symbol> <symbol>?",
                pad: "<integer>&&<symbol>",
                prefix: "<symbol>",
                range: "[[<integer>|infinite]{2}]#|auto",
                "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
                suffix: "<symbol>",
                symbols: "<symbol>+",
                system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
              }
            },
            document: {
              prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
              descriptors: null
            },
            "font-face": {
              prelude: null,
              descriptors: {
                "ascent-override": "normal|<percentage>",
                "descent-override": "normal|<percentage>",
                "font-display": "[auto|block|swap|fallback|optional]",
                "font-family": "<family-name>",
                "font-feature-settings": "normal|<feature-tag-value>#",
                "font-variation-settings": "normal|[<string> <number>]#",
                "font-stretch": "<font-stretch-absolute>{1,2}",
                "font-style": "normal|italic|oblique <angle>{0,2}",
                "font-weight": "<font-weight-absolute>{1,2}",
                "font-variant":
                  "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
                "line-gap-override": "normal|<percentage>",
                "size-adjust": "<percentage>",
                src: "[<url> [format( <string># )]?|local( <family-name> )]#",
                "unicode-range": "<urange>#"
              }
            },
            "font-feature-values": { prelude: "<family-name>#", descriptors: null },
            import: {
              prelude:
                "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
              descriptors: null
            },
            keyframes: { prelude: "<keyframes-name>", descriptors: null },
            layer: { prelude: "[<layer-name>#|<layer-name>?]", descriptors: null },
            media: { prelude: "<media-query-list>", descriptors: null },
            namespace: { prelude: "<namespace-prefix>? [<string>|<url>]", descriptors: null },
            page: {
              prelude: "<page-selector-list>",
              descriptors: {
                bleed: "auto|<length>",
                marks: "none|[crop||cross]",
                size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
              }
            },
            property: {
              prelude: "<custom-property-name>",
              descriptors: { syntax: "<string>", inherits: "true|false", "initial-value": "<string>" }
            },
            "scroll-timeline": { prelude: "<timeline-name>", descriptors: null },
            supports: { prelude: "<supports-condition>", descriptors: null },
            viewport: {
              prelude: null,
              descriptors: {
                height: "<viewport-length>{1,2}",
                "max-height": "<viewport-length>",
                "max-width": "<viewport-length>",
                "max-zoom": "auto|<number>|<percentage>",
                "min-height": "<viewport-length>",
                "min-width": "<viewport-length>",
                "min-zoom": "auto|<number>|<percentage>",
                orientation: "auto|portrait|landscape",
                "user-zoom": "zoom|fixed",
                "viewport-fit": "auto|contain|cover",
                width: "<viewport-length>{1,2}",
                zoom: "auto|<number>|<percentage>"
              }
            },
            nest: { prelude: "<complex-selector-list>", descriptors: null }
          }
        }
      ),
      { node: Mi }
    ),
    cd = {};
  Ft(cd, { AtrulePrelude: () => hd, Selector: () => dd, Value: () => md });
  function ud(e) {
    switch (this.tokenType) {
      case 4:
        return this.Hash();
      case 18:
        return this.Operator();
      case 21:
        return this.Parentheses(this.readSequence, e.recognizer);
      case 19:
        return this.Brackets(this.readSequence, e.recognizer);
      case 5:
        return this.String();
      case 12:
        return this.Dimension();
      case 11:
        return this.Percentage();
      case 10:
        return this.Number();
      case 2:
        return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
      case 7:
        return this.Url();
      case 1:
        return this.cmpChar(this.tokenStart, 117) && this.cmpChar(this.tokenStart + 1, 43) ? this.UnicodeRange() : this.Identifier();
      case 9: {
        let e = this.charCodeAt(this.tokenStart);
        if (47 === e || 42 === e || 43 === e || 45 === e) return this.Operator();
        35 === e && this.error("Hex or identifier is expected", this.tokenStart + 1);
        break;
      }
    }
  }
  var hd = { getNode: ud };
  var dd = {
    onWhiteSpace: function (e, t) {
      null !== t.last &&
        "Combinator" !== t.last.type &&
        null !== e &&
        "Combinator" !== e.type &&
        t.push({ type: "Combinator", loc: null, name: " " });
    },
    getNode: function () {
      switch (this.tokenType) {
        case 19:
          return this.AttributeSelector();
        case 4:
          return this.IdSelector();
        case 16:
          return 16 === this.lookupType(1) ? this.PseudoElementSelector() : this.PseudoClassSelector();
        case 1:
          return this.TypeSelector();
        case 10:
        case 11:
          return this.Percentage();
        case 12:
          46 === this.charCodeAt(this.tokenStart) && this.error("Identifier is expected", this.tokenStart + 1);
          break;
        case 9:
          switch (this.charCodeAt(this.tokenStart)) {
            case 43:
            case 62:
            case 126:
            case 47:
              return this.Combinator();
            case 46:
              return this.ClassSelector();
            case 42:
            case 124:
              return this.TypeSelector();
            case 35:
              return this.IdSelector();
            case 38:
              return this.NestingSelector();
          }
      }
    }
  };
  function pd(e) {
    return null !== e && "Operator" === e.type && ("-" === e.value[e.value.length - 1] || "+" === e.value[e.value.length - 1]);
  }
  var md = {
      getNode: ud,
      onWhiteSpace(e, t) {
        pd(e) && (e.value = " " + e.value), pd(t.last) && (t.last.value += " ");
      },
      expression: function () {
        return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
      },
      var: function () {
        let e = this.createList();
        if ((this.skipSC(), e.push(this.Identifier()), this.skipSC(), 18 === this.tokenType)) {
          e.push(this.Operator());
          let t = this.tokenIndex,
            n = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
          if ("Value" === n.type && n.children.isEmpty)
            for (let e = t - this.tokenIndex; e <= 0; e++)
              if (13 === this.lookupType(e)) {
                n.children.appendData({ type: "WhiteSpace", loc: null, value: " " });
                break;
              }
          e.push(n);
        }
        return e;
      }
    },
    gd = {
      parse: {
        prelude() {
          let e = this.createList();
          switch ((this.skipSC(), this.tokenType)) {
            case 5:
              e.push(this.String());
              break;
            case 7:
            case 2:
              e.push(this.Url());
              break;
            default:
              this.error("String or url() is expected");
          }
          return (1 === this.lookupNonWSType(0) || 21 === this.lookupNonWSType(0)) && e.push(this.MediaQueryList()), e;
        },
        block: null
      }
    },
    fd = {
      parse: {
        prelude() {
          return this.createSingleNodeList(this.MediaQueryList());
        },
        block(e = !1) {
          return this.Block(e);
        }
      }
    };
  function bd() {
    return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
  }
  function yd() {
    return (
      this.skipSC(), 1 === this.tokenType && 16 === this.lookupNonWSType(1) ? this.createSingleNodeList(this.Declaration()) : wd.call(this)
    );
  }
  function wd() {
    let e,
      t = this.createList();
    this.skipSC();
    e: for (; !this.eof; ) {
      switch (this.tokenType) {
        case 25:
        case 13:
          this.next();
          continue;
        case 2:
          e = this.Function(bd, this.scope.AtrulePrelude);
          break;
        case 1:
          e = this.Identifier();
          break;
        case 21:
          e = this.Parentheses(yd, this.scope.AtrulePrelude);
          break;
        default:
          break e;
      }
      t.push(e);
    }
    return t;
  }
  var kd = {
      parse: {
        prelude() {
          let e = wd.call(this);
          return null === this.getFirstListNode(e) && this.error("Condition is expected"), e;
        },
        block(e = !1) {
          return this.Block(e);
        }
      }
    },
    vd = {
      "font-face": {
        parse: {
          prelude: null,
          block() {
            return this.Block(!0);
          }
        }
      },
      import: gd,
      media: fd,
      nest: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.SelectorList());
          },
          block() {
            return this.Block(!0);
          }
        }
      },
      page: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.SelectorList());
          },
          block() {
            return this.Block(!0);
          }
        }
      },
      supports: kd
    },
    xd = {
      parse() {
        return this.createSingleNodeList(this.SelectorList());
      }
    },
    Ed = {
      parse() {
        return this.createSingleNodeList(this.Identifier());
      }
    },
    Ad = {
      parse() {
        return this.createSingleNodeList(this.Nth());
      }
    },
    Sd = {
      dir: Ed,
      has: xd,
      lang: Ed,
      matches: xd,
      is: xd,
      "-moz-any": xd,
      "-webkit-any": xd,
      where: xd,
      not: xd,
      "nth-child": Ad,
      "nth-last-child": Ad,
      "nth-last-of-type": Ad,
      "nth-of-type": Ad,
      slotted: {
        parse() {
          return this.createSingleNodeList(this.Selector());
        }
      }
    },
    Td = {};
  Ft(Td, {
    AnPlusB: () => Yi,
    Atrule: () => ns,
    AtrulePrelude: () => ls,
    AttributeSelector: () => vs,
    Block: () => Ls,
    Brackets: () => Us,
    CDC: () => Bs,
    CDO: () => Gs,
    ClassSelector: () => Xs,
    Combinator: () => ll,
    Comment: () => gl,
    Declaration: () => zl,
    DeclarationList: () => jl,
    Dimension: () => Wl,
    Function: () => Jl,
    Hash: () => rc,
    IdSelector: () => pc,
    Identifier: () => lc,
    MediaFeature: () => yc,
    MediaQuery: () => Ec,
    MediaQueryList: () => Rc,
    Nth: () => qc,
    Number: () => Vc,
    Operator: () => Qc,
    Parentheses: () => eu,
    Percentage: () => ou,
    PseudoClassSelector: () => hu,
    PseudoElementSelector: () => bu,
    Ratio: () => Su,
    Raw: () => zu,
    Rule: () => qu,
    Selector: () => Vu,
    SelectorList: () => Ku,
    String: () => sh,
    StyleSheet: () => gh,
    TypeSelector: () => Eh,
    UnicodeRange: () => Mh,
    Url: () => Qh,
    Value: () => ed,
    WhiteSpace: () => id
  });
  var Cd = {
      parseContext: {
        default: "StyleSheet",
        stylesheet: "StyleSheet",
        atrule: "Atrule",
        atrulePrelude(e) {
          return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
        },
        mediaQueryList: "MediaQueryList",
        mediaQuery: "MediaQuery",
        rule: "Rule",
        selectorList: "SelectorList",
        selector: "Selector",
        block() {
          return this.Block(!0);
        },
        declarationList: "DeclarationList",
        declaration: "Declaration",
        value: "Value"
      },
      scope: cd,
      atrule: vd,
      pseudo: Sd,
      node: Td
    },
    Rd = { node: Mi },
    _d = Pi(Dt(Dt(Dt({}, ld), Cd), Rd));
  var Id = {};
  Ft(Id, { decode: () => Ld, encode: () => Nd });
  var zd = 92;
  function Ld(e) {
    let t = e.length - 1,
      n = "";
    for (let r = 0; r < e.length; r++) {
      let a = e.charCodeAt(r);
      if (a === zd) {
        if (r === t) break;
        if (((a = e.charCodeAt(++r)), In(zd, a))) {
          let t = r - 1,
            a = $n(e, t);
          (r = a - 1), (n += Kn(e.substring(t + 1, a)));
        } else 13 === a && 10 === e.charCodeAt(r + 1) && r++;
      } else n += e[r];
    }
    return n;
  }
  function Nd(e) {
    let t = "";
    if (1 === e.length && 45 === e.charCodeAt(0)) return "\\-";
    for (let n = 0; n < e.length; n++) {
      let r = e.charCodeAt(n);
      0 !== r
        ? r <= 31 || 127 === r || (r >= 48 && r <= 57 && (0 === n || (1 === n && 45 === e.charCodeAt(0))))
          ? (t += "\\" + r.toString(16) + " ")
          : Tn(r)
          ? (t += e.charAt(n))
          : (t += "\\" + e.charAt(n))
        : (t += "�");
    }
    return t;
  }
  var {
      tokenize: Pd,
      parse: Md,
      generate: Od,
      lexer: Ud,
      createLexer: Dd,
      walk: qd,
      find: jd,
      findLast: Fd,
      findAll: Bd,
      toPlainObject: Hd,
      fromPlainObject: Vd,
      fork: Wd
    } = _d,
    $d = Object.freeze({
      __proto__: null,
      Lexer: _i,
      List: sr,
      TokenStream: ar,
      clone: function e(t) {
        let n = {};
        for (let r in t) {
          let a = t[r];
          a && (Array.isArray(a) || a instanceof sr ? (a = a.map(e)) : a.constructor === Object && (a = e(a))), (n[r] = a);
        }
        return n;
      },
      createLexer: Dd,
      createSyntax: Pi,
      definitionSyntax: $a,
      find: jd,
      findAll: Bd,
      findLast: Fd,
      fork: Wd,
      fromPlainObject: Vd,
      generate: Od,
      ident: Id,
      isCustomProperty: la,
      keyword: oa,
      lexer: Ud,
      parse: Md,
      property: ia,
      string: Xu,
      toPlainObject: Hd,
      tokenNames: Jn,
      tokenTypes: Yt,
      tokenize: Pd,
      url: Dh,
      vendorPrefix: sa,
      version: "2.3.0",
      walk: qd
    });
  const Gd = /^'(.*?)'$/,
    Yd = /^"(.*?)"$/,
    Qd = ["inherit", "initial", "unset"],
    Kd = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"],
    Jd = ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    Zd = ["normal", "italic", "oblique"],
    Xd = [
      "normal",
      "condensed",
      "semi-condensed",
      "extra-condensed",
      "ultra-condensed",
      "expanded",
      "semi-expanded",
      "extra-expanded",
      "ultra-expanded"
    ],
    ep = "[parse-css-font] ";
  function tp(e) {
    const t = Od(e);
    if (-1 !== Kd.indexOf(t)) return { system: t };
    const n = e.children,
      r = { lineHeight: "normal", stretch: "normal", style: "normal", variant: "normal", weight: "normal" };
    let a = !1;
    for (let e = n.head; e; e = e.next) {
      const t = Od(e.data);
      if ("normal" !== t && -1 === Qd.indexOf(t))
        if (-1 === Jd.indexOf(t))
          if (-1 === Zd.indexOf(t))
            if (-1 === Xd.indexOf(t)) {
              if ("Dimension" == e.data.type) {
                if (
                  ((r.size = Od(e.data)),
                  (e = e.next),
                  e && "Operator" == e.data.type && "/" == e.data.value && e.next
                    ? ((e = e.next), (r.lineHeight = Od(e.data)), (e = e.next))
                    : "Operator" == n.head.data.type &&
                      "/" == n.head.data.value &&
                      n.head.next &&
                      ((r.lineHeight = Od(n.head.next.data)), (e = n.head.next.next)),
                  !e)
                )
                  throw np("Missing required font-family.");
                for (r.family = []; e; e = e.next) {
                  for (; e && "Operator" == e.data.type && "," == e.data.value; ) e = e.next;
                  e && r.family.push(rp(Od(e.data)));
                }
                return r;
              }
              if ("normal" !== r.variant) throw np("Unknown or unsupported font token: " + r.variant);
              a || (r.variant = t);
            } else {
              if (a) continue;
              r.stretch = t;
            }
          else {
            if (a) continue;
            r.style = t;
          }
        else {
          if (a) continue;
          r.weight = t;
        }
      else
        ["style", "variant", "weight", "stretch"].forEach((e) => {
          r[e] = t;
        }),
          (a = !0);
    }
    throw np("Missing required font-size.");
  }
  function np(e) {
    return new Error(ep + e);
  }
  function rp(e) {
    return (e = e.match(Gd) ? e.replace(Gd, "$1") : e.replace(Yd, "$1")).trim();
  }
  var ap = Object.freeze({ __proto__: null, parse: tp });
  function op(e, t = 0) {
    const n = [{ mode: "normal", character: null }],
      r = [];
    let a = 0,
      o = "",
      i = null,
      s = null,
      l = t,
      c = e;
    "(" === e[0] && ")" === e[e.length - 1] && ((c = e.substring(1, e.length - 1)), l++);
    for (let e = 0; e < c.length; e++) {
      const t = c[e];
      if (
        (("'" !== t && '"' !== t) ||
          (!0 === n[a].isCalculationEnabled
            ? (n.push({ mode: "string", isCalculationEnabled: !1, character: t }), a++)
            : "string" === n[a].mode && n[a].character === t && "\\" !== c[e - 1] && (n.pop(), a--)),
        "{" === t ? (n.push({ mode: "interpolation", isCalculationEnabled: !0 }), a++) : "}" === t && (n.pop(), a--),
        "normal" === n[a].mode && ":" === t)
      ) {
        const t = c.substring(e + 1);
        (s = { type: "value", before: /^(\s*)/.exec(t)[1], after: /(\s*)$/.exec(t)[1], value: t.trim() }),
          (s.sourceIndex = s.before.length + e + 1 + l),
          (i = { type: "colon", sourceIndex: e + l, after: s.before, value: ":" });
        break;
      }
      o += t;
    }
    return (
      (o = { type: "media-feature", before: /^(\s*)/.exec(o)[1], after: /(\s*)$/.exec(o)[1], value: o.trim() }),
      (o.sourceIndex = o.before.length + l),
      r.push(o),
      null !== i && ((i.before = o.after), r.push(i)),
      null !== s && r.push(s),
      r
    );
  }
  function ip(e, t = 0) {
    const n = [];
    let r,
      a = 0,
      o = !1;
    r = { before: "", after: "", value: "" };
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      o
        ? ((r.value += s), ("{" !== s && "(" !== s) || a++, (")" !== s && "}" !== s) || a--)
        : -1 !== s.search(/\s/)
        ? (r.before += s)
        : ("(" === s && ((r.type = "media-feature-expression"), a++), (r.value = s), (r.sourceIndex = t + i), (o = !0)),
        !o ||
          0 !== a ||
          (")" !== s && i !== e.length - 1 && -1 === e[i + 1].search(/\s/)) ||
          (-1 !== ["not", "only", "and"].indexOf(r.value) && (r.type = "keyword"),
          "media-feature-expression" === r.type && (r.nodes = op(r.value, r.sourceIndex)),
          n.push(Array.isArray(r.nodes) ? new lp(r) : new cp(r)),
          (r = { before: "", after: "", value: "" }),
          (o = !1));
    }
    for (let e = 0; e < n.length; e++)
      if (((r = n[e]), e > 0 && (n[e - 1].after = r.before), void 0 === r.type)) {
        if (e > 0) {
          if ("media-feature-expression" === n[e - 1].type) {
            r.type = "keyword";
            continue;
          }
          if ("not" === n[e - 1].value || "only" === n[e - 1].value) {
            r.type = "media-type";
            continue;
          }
          if ("and" === n[e - 1].value) {
            r.type = "media-feature-expression";
            continue;
          }
          "media-type" === n[e - 1].type &&
            (n[e + 1]
              ? (r.type = "media-feature-expression" === n[e + 1].type ? "keyword" : "media-feature-expression")
              : (r.type = "media-feature-expression"));
        }
        if (0 === e) {
          if (!n[e + 1]) {
            r.type = "media-type";
            continue;
          }
          if (n[e + 1] && ("media-feature-expression" === n[e + 1].type || "keyword" === n[e + 1].type)) {
            r.type = "media-type";
            continue;
          }
          if (n[e + 2]) {
            if ("media-feature-expression" === n[e + 2].type) {
              (r.type = "media-type"), (n[e + 1].type = "keyword");
              continue;
            }
            if ("keyword" === n[e + 2].type) {
              (r.type = "keyword"), (n[e + 1].type = "media-type");
              continue;
            }
          }
          if (n[e + 3] && "media-feature-expression" === n[e + 3].type) {
            (r.type = "keyword"), (n[e + 1].type = "media-type"), (n[e + 2].type = "keyword");
            continue;
          }
        }
      }
    return n;
  }
  function sp(e) {
    const t = [];
    let n = 0,
      r = 0;
    const a = /^(\s*)url\s*\(/.exec(e);
    if (null !== a) {
      let r = a[0].length,
        o = 1;
      for (; o > 0; ) {
        const t = e[r];
        "(" === t && o++, ")" === t && o--, r++;
      }
      t.unshift(
        new cp({
          type: "url",
          value: e.substring(0, r).trim(),
          sourceIndex: a[1].length,
          before: a[1],
          after: /^(\s*)/.exec(e.substring(r))[1]
        })
      ),
        (n = r);
    }
    for (let a = n; a < e.length; a++) {
      const o = e[a];
      if (("(" === o && r++, ")" === o && r--, 0 === r && "," === o)) {
        const r = e.substring(n, a),
          o = /^(\s*)/.exec(r)[1];
        t.push(
          new lp({
            type: "media-query",
            value: r.trim(),
            sourceIndex: n + o.length,
            nodes: ip(r, n),
            before: o,
            after: /(\s*)$/.exec(r)[1]
          })
        ),
          (n = a + 1);
      }
    }
    const o = e.substring(n),
      i = /^(\s*)/.exec(o)[1];
    return (
      t.push(
        new lp({ type: "media-query", value: o.trim(), sourceIndex: n + i.length, nodes: ip(o, n), before: i, after: /(\s*)$/.exec(o)[1] })
      ),
      t
    );
  }
  function lp(e) {
    this.constructor(e),
      (this.nodes = e.nodes),
      void 0 === this.after && (this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : ""),
      void 0 === this.before && (this.before = this.nodes.length > 0 ? this.nodes[0].before : ""),
      void 0 === this.sourceIndex && (this.sourceIndex = this.before.length),
      this.nodes.forEach((e) => {
        e.parent = this;
      });
  }
  function cp(e) {
    (this.after = e.after), (this.before = e.before), (this.type = e.type), (this.value = e.value), (this.sourceIndex = e.sourceIndex);
  }
  (lp.prototype = Object.create(cp.prototype)),
    (lp.constructor = cp),
    (lp.prototype.walk = function (e, t) {
      const n = "string" == typeof e || e instanceof RegExp,
        r = n ? t : e,
        a = "string" == typeof e ? new RegExp(e) : e;
      for (let o = 0; o < this.nodes.length; o++) {
        const i = this.nodes[o];
        if ((!n || a.test(i.type)) && r && !1 === r(i, o, this.nodes)) return !1;
        if (i.nodes && !1 === i.walk(e, t)) return !1;
      }
      return !0;
    }),
    (lp.prototype.each = function (e = () => {}) {
      for (let t = 0; t < this.nodes.length; t++) {
        if (!1 === e(this.nodes[t], t, this.nodes)) return !1;
      }
      return !0;
    });
  var up = Object.freeze({ __proto__: null, parseMediaList: sp });
  const hp = "___PRESERVED_TOKEN_",
    dp = { maxLineLen: 0, expandVars: !1, uglyComments: !1, cuteComments: !1, debug: !1, output: "" },
    pp = /url\(\s*(["']?)data:/g,
    mp = /\s+/g,
    gp = /\n/g;
  const fp = /(=\s*?["']?)?#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])(\}|[^0-9a-f{][^{]*?\})/gi;
  const bp = /@[a-z0-9-_]*keyframes\s+[a-z0-9-_]+\s*{/gi,
    yp = /(^\s|\s$)/g;
  const wp = /"([^\\"])*"/g,
    kp = /"(\\.)*"/g,
    vp = /"(\\)*"/g,
    xp = /'([^\\']|\\.|\\)*'/g,
    Ep = /progid:DXImageTransform.Microsoft.Alpha\(Opacity=/gi,
    Ap = /\r\n/g,
    Sp = /[\r\n]/g,
    Tp = /@variables\s*\{\s*([^}]+)\s*\}/g,
    Cp = /\s*([a-z0-9-]+)\s*:\s*([^;}]+)\s*/gi,
    Rp = /var\s*\(\s*([^)]+)\s*\)/g,
    _p = /calc\(([^;}]*)\)/g,
    Ip = /(^\s*|\s*$)/g,
    zp = /\( /g,
    Lp = / \)/g,
    Np = /\s*filter:\s*progid:DXImageTransform.Microsoft.Matrix\(([^)]+)\);/g,
    Pp = /(^|\})(([^{:])+:)+([^{]*{)/g,
    Mp = /\s+([!{;:>+()\],])/g,
    Op = /([^\\])\s+([}])/g,
    Up = /!important/g,
    Dp = /___PSEUDOCLASSCOLON___/g,
    qp = /:/g,
    jp = /\s*(animation|animation-delay|animation-duration|transition|transition-delay|transition-duration):\s*([^;}]+)/gi,
    Fp = /(^|\D)0?\.?0(m?s)/gi,
    Bp = /\s*(flex|flex-basis):\s*([^;}]+)/gi,
    Hp = /\s+/,
    Vp = /(hsla?)\(([^)]+)\)/g,
    Wp = /(^\s+|\s+$)/g,
    $p = /:first-(line|letter)(\{|,)/gi,
    Gp = /^(.*)(@charset)( "[^"]*";)/gi,
    Yp = /^((\s*)(@charset)( [^;]+;\s*))+/gi,
    Qp = /@(font-face|import|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?keyframe|media|page|namespace)/gi,
    Kp =
      /:(active|after|before|checked|disabled|empty|enabled|first-(?:child|of-type)|focus|hover|last-(?:child|of-type)|link|only-(?:child|of-type)|root|:selection|target|visited)/gi,
    Jp = /^(.*)(@charset "[^"]*";)/g,
    Zp = /^(\s*@charset [^;]+;\s*)+/g,
    Xp = /:(lang|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?any)\(/gi,
    em =
      /([:,( ]\s*)(attr|color-stop|from|rgba|to|url|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?(?:calc|max|min|(?:repeating-)?(?:linear|radial)-gradient)|-webkit-gradient)/gi,
    tm = /\s*\/\*/g,
    nm = /\*\/\s*/g,
    rm = /\band\(/gi,
    am = /([^:])not\(/gi,
    om = /\bor\(/gi,
    im = /([!{}:;>+([,])\s+/g,
    sm = /;+\}/g,
    lm = /([0-9])\.0(ex|ch|r?em|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|g?rad|turn|m?s|k?Hz|dpi|dpcm|dppx|%| |;)/gi,
    cm = /:0 0 0 0(;|\})/g,
    um = /:0 0 0(;|\})/g,
    hm = /(transform-origin|webkit-transform-origin|moz-transform-origin|o-transform-origin|ms-transform-origin|box-shadow):0(;|\})/gi,
    dm = /(:|\s)0+\.(\d+)/g,
    pm = /rgb\s*\(\s*([0-9,\s]+)\s*\)/gi,
    mm = /(border|border-top|border-right|border-bottom|border-left|outline|background):none(;|\})/gi,
    gm = /progid:DXImageTransform\.Microsoft\.Alpha\(Opacity=/gi,
    fm = /\(([-A-Za-z]+):([0-9]+)\/([0-9]+)\)/g,
    bm = /___QUERY_FRACTION___/g,
    ym = /;;+/g,
    wm = /(:|\s)(#f00)(;|})/g,
    km = /___PRESERVED_NEWLINE___/g,
    vm = /(:|\s)(#000080)(;|})/g,
    xm = /(:|\s)(#808080)(;|})/g,
    Em = /(:|\s)(#808000)(;|})/g,
    Am = /(:|\s)(#800080)(;|})/g,
    Sm = /(:|\s)(#c0c0c0)(;|})/g,
    Tm = /(:|\s)(#008080)(;|})/g,
    Cm = /(:|\s)(#ffa500)(;|})/g,
    Rm = /(:|\s)(#800000)(;|})/g;
  function _m(e = "", t = dp) {
    const n = [],
      r = [];
    let a;
    const o = e;
    function i(t) {
      e = e.replace(t, (e) => {
        const t = e.substring(0, 1);
        if ((e = e.slice(1, -1)).indexOf("___PRESERVE_CANDIDATE_COMMENT_") >= 0)
          for (let t = 0, r = n.length; t < r; t += 1) e = e.replace("___PRESERVE_CANDIDATE_COMMENT_" + t + "___", n[t]);
        return (e = e.replace(Ep, "alpha(opacity=")), r.push(e), t + hp + (r.length - 1) + "___" + t;
      });
    }
    (e = (function (e, t) {
      const n = pp,
        r = e.length - 1,
        a = [];
      let o,
        i = 0;
      for (; null !== (o = n.exec(e)); ) {
        const s = o.index + 4;
        let l = o[1];
        0 === l.length && (l = ")");
        let c = !1,
          u = n.lastIndex - 1;
        for (; !1 === c && u + 1 <= r && -1 != u; )
          (u = e.indexOf(l, u + 1)), u > 0 && "\\" !== e.charAt(u - 1) && ((c = !0), ")" != l && (u = e.indexOf(")", u)));
        if ((a.push(e.substring(i, o.index)), c)) {
          let n = e.substring(s, u);
          const r = n.split(",");
          r.length > 1 && ";base64" == r[0].slice(-7)
            ? (n = n.replace(mp, ""))
            : ((n = n.replace(gp, " ")), (n = n.replace(mp, " ")), (n = n.replace(Wp, ""))),
            t.push(n);
          const o = "url(" + hp + (t.length - 1) + "___)";
          a.push(o), (i = u + 1);
        } else a.push(e.substring(o.index, n.lastIndex)), (i = n.lastIndex);
      }
      return a.push(e.substring(i)), a.join("");
    })(e, r)),
      (e = (function (e, t) {
        const n = [];
        let r,
          a = 0;
        for (;;) {
          const o = e.indexOf("/*", a);
          if (!(o > -1)) break;
          if (((r = e.indexOf("*/", o + 2)), !(r > -1))) {
            r = -2;
            break;
          }
          t.push(e.slice(o + 2, r)),
            n.push(e.slice(a, o)),
            n.push("/*___PRESERVE_CANDIDATE_COMMENT_" + (t.length - 1) + "___*/"),
            (a = r + 2);
        }
        return n.push(e.slice(r + 2)), n.join("");
      })(e, n)),
      i(wp),
      i(kp),
      i(vp),
      i(xp);
    for (let a = 0, o = n.length; a < o; a += 1) {
      const o = n[a],
        i = "___PRESERVE_CANDIDATE_COMMENT_" + a + "___";
      if ("!" !== o.charAt(0))
        if ("\\" !== o.charAt(o.length - 1)) {
          if (0 === o.length) {
            const t = e.indexOf(i);
            t > 2 && ">" === e.charAt(t - 3) && (r.push(""), (e = e.replace(i, hp + (r.length - 1) + "___")));
          }
          e = e.replace(`/*${i}*/`, "");
        } else
          r.push("\\"),
            (e = e.replace(i, hp + (r.length - 1) + "___")),
            (a += 1),
            r.push(""),
            (e = e.replace("___PRESERVE_CANDIDATE_COMMENT_" + a + "___", hp + (r.length - 1) + "___"));
      else
        t.cuteComments ? r.push(o.substring(1).replace(Ap, "\n")) : t.uglyComments ? r.push(o.substring(1).replace(Sp, "")) : r.push(o),
          (e = e.replace(i, hp + (r.length - 1) + "___"));
    }
    if (t.expandVars) {
      const t = {};
      (a = Tp),
        (e = e.replace(a, (e, n) => ((a = Cp), n.replace(a, (e, n, r) => (n && r && (t[n] = r), "")), ""))),
        (a = Rp),
        (e = e.replace(a, (e, n) => t[n] || "none"));
    }
    (e = e.replace(mp, " ")),
      (a = _p),
      (e = e.replace(
        a,
        (e, t) => (r.push("calc(" + t.replace(Ip, "").replace(zp, "(").replace(Lp, ")") + ")"), hp + (r.length - 1) + "___")
      )),
      (a = Np),
      (e = e.replace(a, (e, t) => (r.push(t), "filter:progid:DXImageTransform.Microsoft.Matrix(" + hp + (r.length - 1) + "___);")));
    try {
      (a = Pp), (e = e.replace(a, (e) => e.replace(qp, "___PSEUDOCLASSCOLON___")));
    } catch (e) {}
    if (
      ((e = (e = (e = (e = e.replace(Mp, "$1")).replace(Op, "$1$2")).replace(Up, " !important")).replace(Dp, ":")),
      (a = jp),
      (e = e.replace(a, (e, t, n) => t + ":" + (n = n.replace(Fp, (e, t, n) => (r.push("0" + n), t + hp + (r.length - 1) + "___"))))),
      (a = Bp),
      (e = (function (e, t) {
        const n = bp;
        let r,
          a = 0;
        const o = (e, n) => {
          "0" === (e = e.replace(yp, "")).charAt(0) && (t.push(e), (r[n] = hp + (t.length - 1) + "___"));
        };
        for (;;) {
          let t = 0;
          r = "";
          let i = e.slice(a).search(n);
          if (i < 0) break;
          (a += i), (i = a);
          const s = e.length,
            l = [];
          for (; a < s; ++a) {
            const n = e.charAt(a);
            if ("{" === n)
              0 === t ? l.push(r.replace(yp, "")) : 1 === t && ((r = r.split(",")), r.forEach(o), l.push(r.join(",").replace(yp, ""))),
                (r = ""),
                (t += 1);
            else if ("}" === n) {
              if (2 === t) l.push("{" + r.replace(yp, "") + "}"), (r = "");
              else if (1 === t) {
                e = e.slice(0, i) + l.shift() + "{" + l.join("") + e.slice(a);
                break;
              }
              t -= 1;
            }
            if (t < 0) break;
            "{" !== n && "}" !== n && (r += n);
          }
        }
        return e;
      })(
        (e = (e = e.replace(a, (e, t, n) => {
          let a = n.split(Hp);
          return r.push(a.pop()), a.push(hp + (r.length - 1) + "___"), (a = a.join(" ")), `${t}:${a}`;
        })).replace(Vp, (e, t, n) => {
          const a = [];
          return (
            n.split(",").forEach((e) => {
              "0%" === (e = e.replace(Wp, "")) ? (r.push("0%"), a.push(hp + (r.length - 1) + "___")) : a.push(e);
            }),
            t + "(" + a.join(",") + ")"
          );
        })),
        r
      )),
      (e = e.replace($p, (e, t, n) => ":first-" + t.toLowerCase() + " " + n)),
      (e = t.cuteComments
        ? (e = e.replace(tm, "___PRESERVED_NEWLINE___/*")).replace(nm, "*/___PRESERVED_NEWLINE___")
        : e.replace(nm, "*/")),
      (a = Gp),
      (e = e.replace(a, (e, t, n, r) => n.toLowerCase() + r + t)),
      (a = Yp),
      (e = e.replace(a, (e, t, n, r, a) => n + r.toLowerCase() + a)),
      (a = Qp),
      (e = e.replace(a, (e, t) => "@" + t.toLowerCase())),
      (a = Kp),
      (e = (e = (e = e.replace(a, (e, t) => ":" + t.toLowerCase())).replace(Jp, "$2$1")).replace(Zp, "$1")),
      (a = Xp),
      (e = e.replace(a, (e, t) => ":" + t.toLowerCase() + "(")),
      (a = em),
      (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(a, (e, t, n) => t + n.toLowerCase())).replace(rm, "and (")).replace(
        am,
        "$1not ("
      )).replace(om, "or (")).replace(im, "$1")).replace(sm, "}")).replace(lm, "$1$2")).replace(cm, ":0$1")).replace(um, ":0$1")),
      (a = hm),
      (e = (e = e.replace(a, (e, t, n) => t.toLowerCase() + ":0 0" + n)).replace(dm, "$1.$2")),
      (a = pm),
      (e = (function (e) {
        const t = fp,
          n = [];
        let r,
          a = 0;
        for (; null !== (r = t.exec(e)); )
          n.push(e.substring(a, r.index)),
            r[1]
              ? n.push(r[1] + "#" + (r[2] + r[3] + r[4] + r[5] + r[6] + r[7]))
              : r[2].toLowerCase() == r[3].toLowerCase() &&
                r[4].toLowerCase() == r[5].toLowerCase() &&
                r[6].toLowerCase() == r[7].toLowerCase()
              ? n.push("#" + (r[3] + r[5] + r[7]).toLowerCase())
              : n.push("#" + (r[2] + r[3] + r[4] + r[5] + r[6] + r[7]).toLowerCase()),
            (a = t.lastIndex = t.lastIndex - r[8].length);
        return n.push(e.substring(a)), n.join("");
      })(
        (e = e.replace(a, (e, t) => {
          const n = t.split(",");
          let r = "#";
          for (let e = 0; e < n.length; e += 1) {
            let t = parseInt(n[e], 10);
            t < 16 && (r += "0"), t > 255 && (t = 255), (r += t.toString(16));
          }
          return r;
        }))
      )),
      (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(wm, "$1red$3")).replace(vm, "$1navy$3")).replace(xm, "$1gray$3")).replace(
        Em,
        "$1olive$3"
      )).replace(Am, "$1purple$3")).replace(Sm, "$1silver$3")).replace(Tm, "$1teal$3")).replace(Cm, "$1orange$3")).replace(
        Rm,
        "$1maroon$3"
      )),
      (a = mm),
      (e = (e = (e = (e = e.replace(a, (e, t, n) => t.toLowerCase() + ":0" + n)).replace(gm, "alpha(opacity=")).replace(
        fm,
        "($1:$2___QUERY_FRACTION___$3)"
      )).replace(bm, "/")),
      t.maxLineLen > 0)
    ) {
      const n = [];
      let r = [];
      for (let a = 0, o = e.length; a < o; a += 1) {
        const o = e.charAt(a);
        r.push(o), "}" === o && r.length > t.maxLineLen && (n.push(r.join("")), (r = []));
      }
      r.length && n.push(r.join("")), (e = n.join("\n"));
    }
    if (((e = (e = e.replace(ym, ";")).replace(Ip, "")), r.length > 1e3)) return o;
    for (let t = r.length - 1; t >= 0; t--) e = e.replace(hp + t + "___", r[t], "g");
    return (e = e.replace(km, "\n"));
  }
  var Im = Object.freeze({ __proto__: null, defaultOptions: dp, processString: _m });
  function zm(e) {
    function t(e) {
      return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
    }
    function n(t) {
      let n;
      const r = t.exec(e.substring(g));
      if (r) return (n = r[0]), (g += n.length), n;
    }
    const r = e.length,
      a = /^[ \t\n\r\u000c]+/,
      o = /^[, \t\n\r\u000c]+/,
      i = /^[^ \t\n\r\u000c]+/,
      s = /[,]+$/,
      l = /^\d+$/,
      c = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
    let u,
      h,
      d,
      p,
      m,
      g = 0;
    const f = [];
    for (;;) {
      if ((n(o), g >= r)) return f;
      (u = n(i)), (h = []), "," === u.slice(-1) ? ((u = u.replace(s, "")), y()) : b();
    }
    function b() {
      for (n(a), d = "", p = "in descriptor"; ; ) {
        if (((m = e.charAt(g)), "in descriptor" === p))
          if (t(m)) d && (h.push(d), (d = ""), (p = "after descriptor"));
          else {
            if ("," === m) return (g += 1), d && h.push(d), void y();
            if ("(" === m) (d += m), (p = "in parens");
            else {
              if ("" === m) return d && h.push(d), void y();
              d += m;
            }
          }
        else if ("in parens" === p)
          if (")" === m) (d += m), (p = "in descriptor");
          else {
            if ("" === m) return h.push(d), void y();
            d += m;
          }
        else if ("after descriptor" === p)
          if (t(m));
          else {
            if ("" === m) return void y();
            (p = "in descriptor"), (g -= 1);
          }
        g += 1;
      }
    }
    function y() {
      let t,
        n,
        r,
        a,
        o,
        i,
        s,
        d,
        p,
        m = !1;
      const g = {};
      for (a = 0; a < h.length; a++)
        (o = h[a]),
          (i = o[o.length - 1]),
          (s = o.substring(0, o.length - 1)),
          (d = parseInt(s, 10)),
          (p = parseFloat(s)),
          l.test(s) && "w" === i
            ? ((t || n) && (m = !0), 0 === d ? (m = !0) : (t = d))
            : c.test(s) && "x" === i
            ? ((t || n || r) && (m = !0), p < 0 ? (m = !0) : (n = p))
            : l.test(s) && "h" === i
            ? ((r || n) && (m = !0), 0 === d ? (m = !0) : (r = d))
            : (m = !0);
      m
        ? console && console.log && console.log('Invalid srcset descriptor found in "' + e + '" at "' + o + '".')
        : ((g.url = u), t && (g.w = t), n && (g.d = n), r && (g.h = r), f.push(g));
    }
  }
  var Lm = Object.freeze({ __proto__: null, process: zm });
  let Nm, Pm, Mm, Om;
  (Nm = {}),
    (Nm.removeLeadingAndTrailingHTTPWhitespace = (e) => e.replace(/^[ \t\n\r]+/, "").replace(/[ \t\n\r]+$/, "")),
    (Nm.removeTrailingHTTPWhitespace = (e) => e.replace(/[ \t\n\r]+$/, "")),
    (Nm.isHTTPWhitespaceChar = (e) => " " === e || "\t" === e || "\n" === e || "\r" === e),
    (Nm.solelyContainsHTTPTokenCodePoints = (e) => /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/.test(e)),
    (Nm.soleyContainsHTTPQuotedStringTokenCodePoints = (e) => /^[\t\u0020-\u007E\u0080-\u00FF]*$/.test(e)),
    (Nm.asciiLowercase = (e) => e.replace(/[A-Z]/g, (e) => e.toLowerCase())),
    (Nm.collectAnHTTPQuotedString = (e, t) => {
      let n = "";
      for (t++; ; ) {
        for (; t < e.length && '"' !== e[t] && "\\" !== e[t]; ) (n += e[t]), ++t;
        if (t >= e.length) break;
        const r = e[t];
        if ((++t, "\\" !== r)) break;
        if (t >= e.length) {
          n += "\\";
          break;
        }
        (n += e[t]), ++t;
      }
      return [n, t];
    });
  {
    const { solelyContainsHTTPTokenCodePoints: e } = Nm;
    Mm = (t) => {
      let n = `${t.type}/${t.subtype}`;
      if (0 === t.parameters.size) return n;
      for (let [r, a] of t.parameters)
        (n += ";"), (n += r), (n += "="), (e(a) && 0 !== a.length) || ((a = a.replace(/(["\\])/g, "\\$1")), (a = `"${a}"`)), (n += a);
      return n;
    };
  }
  {
    const {
      removeLeadingAndTrailingHTTPWhitespace: e,
      removeTrailingHTTPWhitespace: t,
      isHTTPWhitespaceChar: n,
      solelyContainsHTTPTokenCodePoints: r,
      soleyContainsHTTPQuotedStringTokenCodePoints: a,
      asciiLowercase: o,
      collectAnHTTPQuotedString: i
    } = Nm;
    Pm = (s) => {
      s = e(s);
      let l = 0,
        c = "";
      for (; l < s.length && "/" !== s[l]; ) (c += s[l]), ++l;
      if (0 === c.length || !r(c)) return null;
      if (l >= s.length) return null;
      ++l;
      let u = "";
      for (; l < s.length && ";" !== s[l]; ) (u += s[l]), ++l;
      if (((u = t(u)), 0 === u.length || !r(u))) return null;
      const h = { type: o(c), subtype: o(u), parameters: new Map() };
      for (; l < s.length; ) {
        for (++l; n(s[l]); ) ++l;
        let e = "";
        for (; l < s.length && ";" !== s[l] && "=" !== s[l]; ) (e += s[l]), ++l;
        if (((e = o(e)), l < s.length)) {
          if (";" === s[l]) continue;
          ++l;
        }
        let c = null;
        if ('"' === s[l]) for ([c, l] = i(s, l); l < s.length && ";" !== s[l]; ) ++l;
        else {
          for (c = ""; l < s.length && ";" !== s[l]; ) (c += s[l]), ++l;
          if (((c = t(c)), "" === c)) continue;
        }
        e.length > 0 && r(e) && a(c) && !h.parameters.has(e) && h.parameters.set(e, c);
      }
      return h;
    };
  }
  {
    const e = Pm,
      t = Mm,
      { asciiLowercase: n, solelyContainsHTTPTokenCodePoints: r, soleyContainsHTTPQuotedStringTokenCodePoints: a } = Nm;
    Om = class {
      constructor(t) {
        t = String(t);
        const n = e(t);
        if (null === n) throw new Error(`Could not parse MIME type string "${t}"`);
        (this._type = n.type), (this._subtype = n.subtype), (this._parameters = new o(n.parameters));
      }
      static parse(e) {
        try {
          return new this(e);
        } catch (e) {
          return null;
        }
      }
      get essence() {
        return `${this.type}/${this.subtype}`;
      }
      get type() {
        return this._type;
      }
      set type(e) {
        if (0 === (e = n(String(e))).length) throw new Error("Invalid type: must be a non-empty string");
        if (!r(e)) throw new Error(`Invalid type ${e}: must contain only HTTP token code points`);
        this._type = e;
      }
      get subtype() {
        return this._subtype;
      }
      set subtype(e) {
        if (0 === (e = n(String(e))).length) throw new Error("Invalid subtype: must be a non-empty string");
        if (!r(e)) throw new Error(`Invalid subtype ${e}: must contain only HTTP token code points`);
        this._subtype = e;
      }
      get parameters() {
        return this._parameters;
      }
      toString() {
        return t(this);
      }
      isJavaScript({ allowParameters: e = !1 } = {}) {
        switch (this._type) {
          case "text":
            switch (this._subtype) {
              case "ecmascript":
              case "javascript":
              case "javascript1.0":
              case "javascript1.1":
              case "javascript1.2":
              case "javascript1.3":
              case "javascript1.4":
              case "javascript1.5":
              case "jscript":
              case "livescript":
              case "x-ecmascript":
              case "x-javascript":
                return e || 0 === this._parameters.size;
              default:
                return !1;
            }
          case "application":
            switch (this._subtype) {
              case "ecmascript":
              case "javascript":
              case "x-ecmascript":
              case "x-javascript":
                return e || 0 === this._parameters.size;
              default:
                return !1;
            }
          default:
            return !1;
        }
      }
      isXML() {
        return ("xml" === this._subtype && ("text" === this._type || "application" === this._type)) || this._subtype.endsWith("+xml");
      }
      isHTML() {
        return "html" === this._subtype && "text" === this._type;
      }
    };
    class o {
      constructor(e) {
        this._map = e;
      }
      get size() {
        return this._map.size;
      }
      get(e) {
        return (e = n(String(e))), this._map.get(e);
      }
      has(e) {
        return (e = n(String(e))), this._map.has(e);
      }
      set(e, t) {
        if (((e = n(String(e))), (t = String(t)), !r(e)))
          throw new Error(`Invalid MIME type parameter name "${e}": only HTTP token code points are valid.`);
        if (!a(t)) throw new Error(`Invalid MIME type parameter value "${t}": only HTTP quoted-string token code points are valid.`);
        return this._map.set(e, t);
      }
      clear() {
        this._map.clear();
      }
      delete(e) {
        return (e = n(String(e))), this._map.delete(e);
      }
      forEach(e, t) {
        this._map.forEach(e, t);
      }
      keys() {
        return this._map.keys();
      }
      values() {
        return this._map.values();
      }
      entries() {
        return this._map.entries();
      }
      [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
      }
    }
  }
  var Um = Object.freeze({
    __proto__: null,
    fontPropertyParser: ap,
    mediaQueryParser: up,
    cssMinifier: Im,
    cssTree: $d,
    cssUnescape: I,
    srcsetParser: Lm,
    get MIMEType() {
      return Om;
    }
  });
  const Dm = { normalizeFontFamily: me, getFontWeight: ve },
    qm = globalThis.FontFace,
    jm = globalThis.JSON,
    Fm = /url\s*\(\s*'(.*?)'\s*\)/i,
    Bm = /url\s*\(\s*"(.*?)"\s*\)/i,
    Hm = /url\s*\(\s*(.*?)\s*\)/i,
    Vm = /(url|local|-sf-url-original)\(.*?\)\s*(,|$)/g,
    Wm = /^'(.*?)'$/,
    $m = /^"(.*?)"$/,
    Gm = /^url\(\s*["']?data:font\/(woff2?)/,
    Ym = /^url\(\s*["']?data:application\/x-font-(woff)/,
    Qm = /\.([^.?#]+)((\?|#).*?)?$/,
    Km = /format\((.*?)\)\s*,?$/,
    Jm = /(.*?)\s*,?$/,
    Zm = /^url\(["']?data:[^,]*,?["']?\)/,
    Xm = "local(",
    eg = "all",
    tg = {
      "ultra-condensed": "50%",
      "extra-condensed": "62.5%",
      condensed: "75%",
      "semi-condensed": "87.5%",
      normal: "100%",
      "semi-expanded": "112.5%",
      expanded: "125%",
      "extra-expanded": "150%",
      "ultra-expanded": "200%"
    },
    ng = 5e3;
  async function rg(e, t, n, r) {
    const a = { fonts: new Map(), medias: new Map(), supports: new Map() },
      o = { rules: { processed: 0, discarded: 0 }, fonts: { processed: 0, discarded: 0 } };
    let i = 0;
    return (
      t.forEach((t) => {
        const n = t.stylesheet.children;
        if (n)
          if (((o.rules.processed += n.size), (o.rules.discarded += n.size), t.mediaText && t.mediaText != eg)) {
            const r = ug();
            a.medias.set("media-" + i + "-" + t.mediaText, r), ag(e, n, i, r);
          } else ag(e, n, i, a);
        i++;
      }),
      og(a),
      await Promise.all(
        [...t].map(async ([, e], t) => {
          const i = e.stylesheet.children,
            s = e.mediaText;
          i &&
            (s && s != eg ? await ig(i, t, a.medias.get("media-" + t + "-" + s), n, r, o) : await ig(i, t, a, n, r, o),
            (o.rules.discarded -= i.size));
        })
      ),
      o
    );
  }
  function ag(e, t, n, r) {
    let a = 0,
      o = 0;
    t.forEach((t) => {
      if ("Atrule" == t.type && "media" == t.name && t.block && t.block.children && t.prelude) {
        const o = Od(t.prelude),
          i = ug();
        r.medias.set("media-" + n + "-" + a + "-" + o, i), a++, ag(e, t.block.children, n, i);
      } else if ("Atrule" == t.type && "supports" == t.name && t.block && t.block.children && t.prelude) {
        const a = Od(t.prelude),
          i = ug();
        r.supports.set("supports-" + n + "-" + o + "-" + a, i), o++, ag(e, t.block.children, n, i);
      } else if ("Atrule" == t.type && "font-face" == t.name && t.block && t.block.children) {
        const e = cg(t);
        let n = r.fonts.get(e);
        n || ((n = []), r.fonts.set(e, n));
        const a = lg(t, "src");
        if (a) {
          const e = a.match(Vm);
          e && e.forEach((e) => n.unshift(e));
        }
      }
    });
  }
  function og(e) {
    e.fonts.forEach((t, n) => {
      e.fonts.set(
        n,
        t.map((e) => {
          const t = e.match(Km);
          let n;
          const r = (function (e) {
            const t = (e = e.replace(/url\(-sf-url-original\\\(\\"(.*?)\\"\\\)\\ /g, "")).match(Fm) || e.match(Bm) || e.match(Hm);
            return t && t[1];
          })(e);
          if ((t && t[1] && (n = t[1].replace(Wm, "$1").replace($m, "$1").toLowerCase()), !n)) {
            const t = e.match(Gm);
            if (t && t[1]) n = t[1];
            else {
              const t = e.match(Ym);
              t && t[1] && (n = t[1]);
            }
          }
          if (!n && r) {
            const e = r.match(Qm);
            e && e[1] && (n = e[1]);
          }
          return { src: e.match(Jm)[1], fontUrl: r, format: n };
        })
      );
    }),
      e.medias.forEach((e) => og(e)),
      e.supports.forEach((e) => og(e));
  }
  async function ig(e, t, n, r, a, o) {
    const i = [];
    let s = 0,
      l = 0;
    for (let c = e.head; c; c = c.next) {
      const e = c.data;
      if ("Atrule" == e.type && "media" == e.name && e.block && e.block.children && e.prelude) {
        const i = Od(e.prelude);
        await ig(e.block.children, t, n.medias.get("media-" + t + "-" + s + "-" + i), r, a, o), s++;
      } else if ("Atrule" == e.type && "supports" == e.name && e.block && e.block.children && e.prelude) {
        const i = Od(e.prelude);
        await ig(e.block.children, t, n.supports.get("supports-" + t + "-" + l + "-" + i), r, a, o), l++;
      } else if ("Atrule" == e.type && "font-face" == e.name) {
        const t = cg(e),
          s = n.fonts.get(t);
        if (s) {
          (await sg(e, s, r, a, o)) && n.fonts.delete(t);
        } else i.push(c);
      }
    }
    i.forEach((t) => e.remove(t));
  }
  async function sg(e, t, n, r, a) {
    const o = [];
    for (let t = e.block.children.head; t; t = t.next) "src" == t.data.property && o.push(t);
    o.pop(), o.forEach((t) => e.block.children.remove(t));
    const i = e.block.children.filter((e) => "src" == e.property).tail;
    if (i) {
      await Promise.all(
        t.map(async (e) => {
          if (r.has(e.src)) e.valid = r.get(e.src);
          else {
            if (qm && e.fontUrl) {
              const t = new qm("test-font", e.src);
              try {
                let n;
                await Promise.race([
                  t
                    .load()
                    .then(() => t.loaded)
                    .then(() => {
                      (e.valid = !0), globalThis.clearTimeout(n);
                    }),
                  new Promise(
                    (t) =>
                      (n = globalThis.setTimeout(() => {
                        (e.valid = !0), t();
                      }, ng))
                  )
                ]);
              } catch (t) {
                const r = Bd(i.data, (e) => "Url" == e.type),
                  a = Array.from(n).find(([t]) => r.includes(t) && t.value == e.fontUrl);
                if (a && a[1].length) {
                  const t = a[1][0];
                  if (t) {
                    const n = new qm("test-font", "url(" + t + ")");
                    try {
                      let t;
                      await Promise.race([
                        n
                          .load()
                          .then(() => n.loaded)
                          .then(() => {
                            (e.valid = !0), globalThis.clearTimeout(t);
                          }),
                        new Promise(
                          (n) =>
                            (t = globalThis.setTimeout(() => {
                              (e.valid = !0), n();
                            }, ng))
                        )
                      ]);
                    } catch (e) {}
                  }
                } else e.valid = !0;
              }
            } else e.valid = !0;
            r.set(e.src, e.valid);
          }
        })
      );
      const e = (e, n) => t.find((t) => !t.src.match(Zm) && t.format == e && (!n || t.valid)),
        o = (e) => t.filter((t) => t == e || t.src.startsWith(Xm));
      (a.fonts.processed += t.length), (a.fonts.discarded += t.length);
      const s = e("woff2-variations", !0) || e("woff2", !0) || e("woff", !0);
      if (s) t = o(s);
      else {
        const n = e("truetype-variations", !0) || e("truetype", !0);
        if (n) t = o(n);
        else {
          const n = e("opentype") || e("embedded-opentype");
          t = n ? o(n) : t.filter((e) => (!e.src.match(Zm) && e.valid) || e.src.startsWith(Xm));
        }
      }
      (a.fonts.discarded -= t.length), t.reverse();
      try {
        i.data.value = Md(t.map((e) => e.src).join(","), { context: "value", parseCustomProperty: !0 });
      } catch (e) {}
      return !0;
    }
    return !1;
  }
  function lg(e, t) {
    let n;
    if (
      (e.block.children &&
        (n = e.block.children.filter((e) => {
          try {
            return e.property == t && !Od(e.value).match(/\\9$/);
          } catch (n) {
            return e.property == t;
          }
        }).tail),
      n)
    )
      try {
        return Od(n.data.value);
      } catch (e) {}
  }
  function cg(e) {
    return jm.stringify([
      Dm.normalizeFontFamily(lg(e, "font-family")),
      Dm.getFontWeight(lg(e, "font-weight") || "400"),
      lg(e, "font-style") || "normal",
      lg(e, "unicode-range"),
      ((t = lg(e, "font-stretch")), tg[t] || t),
      lg(e, "font-variant") || "normal",
      lg(e, "font-feature-settings"),
      lg(e, "font-variation-settings")
    ]);
    var t;
  }
  function ug() {
    return { fonts: new Map(), medias: new Map(), supports: new Map() };
  }
  var hg = Object.freeze({ __proto__: null, process: rg });
  const dg = { normalizeFontFamily: me, flatten: xe, getFontWeight: ve, removeQuotes: ke },
    pg = /\s*,\s*/,
    mg = /-/,
    gg = /\?/g,
    fg = /^U\+/i,
    bg = [/^normal$/, /^italic$/, /^oblique$/, /^oblique\s+/];
  function yg(e, t, n, r) {
    const a = { rules: { processed: 0, discarded: 0 }, fonts: { processed: 0, discarded: 0 } },
      o = { declared: [], used: [] },
      i = e.createElement("style");
    let s = "";
    e.body.appendChild(i),
      t.forEach((t) => {
        const n = t.stylesheet.children;
        n && ((a.processed += n.size), (a.discarded += n.size), wg(n, o), (s = Rg(e, n, i, s)));
      }),
      n.forEach((e) => {
        const t = Ag(e);
        t.length && o.used.push(t), (s = _g(e.children, i, s));
      }),
      i.remove(),
      (s += e.body.innerText),
      globalThis.getComputedStyle &&
        r.doc &&
        ((o.used = o.used.map((e) =>
          e.map((e) => {
            const t = e.match(/^var\((--.*)\)$/);
            if (t && t[1]) {
              const n = globalThis.getComputedStyle(r.doc.body).getPropertyValue(t[1]);
              return (n && n.split(",").map((e) => dg.normalizeFontFamily(e))) || e;
            }
            return e;
          })
        )),
        (o.used = o.used.map((e) => dg.flatten(e))));
    let l, c;
    return (
      o.used.find((e) => e.find((e) => e.match(/^var\(--/)))
        ? (l = [])
        : ((c = new Map()),
          o.used.forEach((e) =>
            e.forEach((e) => {
              if (o.declared.find((t) => t.fontFamily == e)) {
                const t = r.usedFonts && r.usedFonts.filter((t) => t[0] == e);
                t && t.length && c.set(e, t);
              }
            })
          ),
          (l = o.declared.filter((e) => !c.has(e.fontFamily)))),
      t.forEach((e) => {
        const t = e.stylesheet.children;
        t && (kg(t, o.declared, l, c, s), (a.rules.discarded -= t.size));
      }),
      a
    );
  }
  function wg(e, t) {
    e.forEach((e) => {
      if ("Atrule" == e.type && ("media" == e.name || "supports" == e.name) && e.block && e.block.children) wg(e.block.children, t);
      else if ("Rule" == e.type) {
        const n = Ag(e.block);
        n.length && t.used.push(n);
      } else if ("Atrule" == e.type && "font-face" == e.name) {
        const n = dg.normalizeFontFamily(Eg(e.block.children, "font-family"));
        if (n) {
          const r = Eg(e.block.children, "font-weight") || "400",
            a = Eg(e.block.children, "font-style") || "normal",
            o = Eg(e.block.children, "font-variant") || "normal";
          r.split(",").forEach((e) =>
            t.declared.push({ fontFamily: n, fontWeight: dg.getFontWeight(dg.removeQuotes(e)), fontStyle: a, fontVariant: o })
          );
        }
      }
    });
  }
  function kg(e, t, n, r, a) {
    const o = [];
    for (let i = e.head; i; i = i.next) {
      const e = i.data;
      if ("Atrule" == e.type && ("media" == e.name || "supports" == e.name) && e.block && e.block.children)
        kg(e.block.children, t, n, r, a);
      else if ("Atrule" == e.type && "font-face" == e.name) {
        const s = dg.normalizeFontFamily(Eg(e.block.children, "font-family"));
        if (s) {
          const l = Eg(e.block.children, "unicode-range");
          (!n.find((e) => e.fontFamily == s) && zg(a, l) && vg(e, s, t, r)) || o.push(i);
        }
        const l = [];
        for (let t = e.block.children.head; t; t = t.next) "font-display" == t.data.property && l.push(t);
        l.length && l.forEach((t) => e.block.children.remove(t));
      }
    }
    o.forEach((t) => e.remove(t));
  }
  function vg(e, t, n, r) {
    let a;
    const o = r && r.get(t);
    if (o && o.length) {
      let r = Eg(e.block.children, "font-style") || "normal";
      if (bg.find((e) => r.trim().match(e))) {
        const i = dg.getFontWeight(Eg(e.block.children, "font-weight") || "400"),
          s = n
            .filter((e) => e.fontFamily == t && e.fontStyle == r)
            .map((e) => e.fontWeight)
            .sort((e, t) => Number.parseInt(e, 10) - Number.parseInt(t, 10));
        let l = o.map((e) => Sg(e, r, s));
        (a = xg(i, l)), a || (l = o.map((e) => (((e = Array.from(e))[2] = "normal"), Sg(e, r, s)))), (a = xg(i, l));
      } else a = !0;
    } else a = !0;
    return a;
  }
  function xg(e, t) {
    let n;
    for (const r of e.split(/[ ,]/)) n = n || t.includes(dg.getFontWeight(dg.removeQuotes(r)));
    return n;
  }
  function Eg(e, t) {
    let n;
    if ((e && (n = e.filter((e) => e.property == t).tail), n))
      try {
        return dg.removeQuotes(Od(n.data.value)).toLowerCase();
      } catch (e) {}
  }
  function Ag(e) {
    let t = e.children.filter((e) => "font-family" == e.property).tail,
      n = [];
    if (t) {
      let e = "";
      if (t.data.value.children) {
        let r;
        t.data.value.children.forEach((t) => {
          "Operator" == t.type && "," == t.value && e
            ? (n.push(dg.normalizeFontFamily(e)), (e = ""), (r = null))
            : ("Identifier" == r && "Identifier" == t.type && (e += " "), (e += Od(t))),
            (r = t.type);
        });
      } else t = Od(t.data.value);
      e && n.push(dg.normalizeFontFamily(e));
    }
    const r = e.children.filter((e) => "font" == e.property).tail;
    if (r && r.data && r.data.value)
      try {
        tp(r.data.value).family.forEach((e) => n.push(dg.normalizeFontFamily(e)));
      } catch (e) {}
    return n;
  }
  function Sg(e, t, n) {
    let r;
    if (((n = n.map((e) => String(Number.parseInt(e, 10)))), e[2] == t)) {
      let t = Number(e[1]);
      n.length > 1
        ? (t >= 400 && t <= 500 && ((r = n.find((e) => e >= t && e <= 500)), r || (r = Tg(t, n)), r || (r = Cg(t, n))),
          t < 400 &&
            ((r = n
              .slice()
              .reverse()
              .find((e) => e <= t)),
            r || (r = Cg(t, n))),
          t > 500 && ((r = n.find((e) => e >= t)), r || (r = Tg(t, n))))
        : (r = n[0]);
    }
    return r;
  }
  function Tg(e, t) {
    return t
      .slice()
      .reverse()
      .find((t) => t < e);
  }
  function Cg(e, t) {
    return t.find((t) => t > e);
  }
  function Rg(e, t, n, r) {
    return (
      t.forEach((t) => {
        t.block &&
          t.block.children &&
          t.prelude &&
          t.prelude.children &&
          ("Atrule" != t.type || ("media" != t.name && "supports" != t.name)
            ? "Rule" == t.type && (r = _g(t.block.children, n, r))
            : (r = Rg(e, t.block.children, n, r)));
      }),
      r
    );
  }
  function _g(e, t, n) {
    const r = Ig(e, "content", t),
      a = Ig(e, "quotes", t);
    return n.includes(r) || (n += r), n.includes(a) || (n += a), n;
  }
  function Ig(e, t, n) {
    const r = Eg(e, t) || "";
    return r
      ? ((n.textContent = 'tmp { content:"' + r + '"}'),
        n.sheet && n.sheet.cssRules ? dg.removeQuotes(n.sheet.cssRules[0].style.getPropertyValue("content")) : r)
      : "";
  }
  function zg(e, t) {
    if (t) {
      const n = t.split(pg);
      let r;
      const a = n.filter((t) => {
        const n = t.split(mg);
        let a;
        if ((2 == n.length && ((n[0] = Lg(n[0])), (a = "[" + n[0] + "-" + Lg("U+" + n[1]) + "]")), 1 == n.length))
          if (n[0].includes("?")) {
            const e = Lg(n[0]),
              t = e;
            a = "[" + e.replace(gg, "0") + "-" + t.replace(gg, "F") + "]";
          } else n[0] && (a = "[" + Lg(n[0]) + "]");
        if (a)
          try {
            return new RegExp(a, "u").test(e);
          } catch (e) {
            return (r = !0), !1;
          }
        return !0;
      });
      return !r && (!n.length || a.length);
    }
    return !0;
  }
  function Lg(e) {
    for (e = e.replace(fg, ""); e.length < 6; ) e = "0" + e;
    return "\\u{" + e + "}";
  }
  var Ng = Object.freeze({ __proto__: null, process: yg });
  const Pg = "all",
    Mg = ["after", "before", "first-letter", "first-line", "placeholder", "selection", "part", "marker"],
    Og = "sf-hidden",
    Ug = "display",
    Dg = /-(ms|webkit|moz|o)-/;
  class qg {
    constructor(e, t, n) {
      (this.doc = e), (this.mediaAllInfo = Fg(Pg));
      const r = new Map();
      let a = 0;
      const o = e.createElement("style");
      e.body.appendChild(o);
      const i = e.createElement("span");
      e.body.appendChild(i),
        t.forEach((t) => {
          if (!t.scoped) {
            const i = t.stylesheet.children;
            if (i)
              if (t.mediaText && t.mediaText != Pg) {
                const s = Fg(t.mediaText);
                this.mediaAllInfo.medias.set("style-" + a + "-" + t.mediaText, s), Bg(e, i, s, a, n, r, o);
              } else Bg(e, i, this.mediaAllInfo, a, n, r, o);
          }
          a++;
        }),
        $g(this.mediaAllInfo),
        Vg(this.mediaAllInfo, [], this.mediaAllInfo, o, i),
        o.remove(),
        i.remove();
    }
    getMediaAllInfo() {
      return this.mediaAllInfo;
    }
  }
  function jg(e, t, n) {
    return new qg(e, t, n).getMediaAllInfo();
  }
  function Fg(e) {
    const t = { media: e, elements: new Map(), medias: new Map(), rules: new Map(), pseudoRules: new Map() };
    return e == Pg && (t.matchedStyles = new Map()), t;
  }
  function Bg(e, t, n, r, a, o, i) {
    let s = 0,
      l = 0;
    t.forEach((t) => {
      if (t.block && t.block.children && t.prelude && t.prelude.children)
        if ("Atrule" == t.type && "media" == t.name) {
          const l = Od(t.prelude),
            c = Fg(l);
          n.medias.set("rule-" + r + "-" + s + "-" + l, c), s++, Bg(e, t.block.children, c, r, a, o, i);
        } else if ("Rule" == t.type) {
          const s = t.prelude.children.toArray(),
            c = t.prelude.children.toArray().map((e) => Od(e)),
            u = {
              ruleData: t,
              mediaInfo: n,
              ruleIndex: l,
              sheetIndex: r,
              matchedSelectors: new Set(),
              declarations: new Set(),
              selectors: s,
              selectorsText: c
            };
          if (
            !(function (e, t) {
              return (t.textContent = e + "{}"), t.sheet ? !t.sheet.cssRules.length : t.sheet;
            })(c.join(","), i)
          )
            for (let n = t.prelude.children.head, r = 0; n; n = n.next, r++) {
              const t = c[r];
              Hg(e, { selector: n, selectorText: t, ruleInfo: u }, a, o);
            }
          l++;
        }
    });
  }
  function Hg(e, t, n, r) {
    const a = (function (e, t) {
        const n = [];
        r((e = { data: Md(Od(e.data), { context: "selector" }) })),
          n.length &&
            (n.forEach(({ parentSelector: e, selector: t }) => {
              0 != e.data.children.size && t.prev && "Combinator" != t.prev.data.type && "WhiteSpace" != t.prev.data.type
                ? e.data.children.remove(t)
                : e.data.children.replace(t, Md("*", { context: "selector" }).children.head);
            }),
            (t = Od(e.data).trim()));
        return t;
        function r(e, t) {
          if (e.data.children) for (let t = e.data.children.head; t; t = t.next) r(t, e);
          ("PseudoClassSelector" == e.data.type || ("PseudoElementSelector" == e.data.type && (a(e) || Mg.includes(e.data.name)))) &&
            n.push({ parentSelector: t, selector: e });
        }
        function a(e) {
          const t = e.data.name;
          return t.startsWith("-") || t.startsWith("\\-");
        }
      })(t.selector, t.selectorText),
      o = a != t.selectorText ? a : t.selectorText,
      i = r.get(o);
    let s = i;
    if (!s)
      try {
        (s = e.querySelectorAll(o)),
          o != "." + Og &&
            (s = Array.from(e.querySelectorAll(o)).filter(
              (e) =>
                !e.classList.contains(Og) &&
                ("none" != e.style.getPropertyValue(Ug) || "important" != e.style.getPropertyPriority("display"))
            ));
      } catch (e) {}
    if (s && (i || r.set(o, s), s.length))
      if (a == t.selectorText)
        s.forEach((e) =>
          (function (e, t, n) {
            const r = t.ruleInfo.mediaInfo,
              a = n.get(e);
            let o = r.elements.get(e);
            o || ((o = []), a && o.push({ styleInfo: { styleData: a, declarations: new Set() } }), r.elements.set(e, o));
            const i = Gg(t.selector.data);
            (i.ruleIndex = t.ruleInfo.ruleIndex), (i.sheetIndex = t.ruleInfo.sheetIndex), (t.specificity = i), o.push(t);
          })(e, t, n)
        );
      else {
        let e = t.ruleInfo.mediaInfo.pseudoRules.get(t.ruleInfo.ruleData);
        e || ((e = new Set()), t.ruleInfo.mediaInfo.pseudoRules.set(t.ruleInfo.ruleData, e)), e.add(t.selectorText);
      }
  }
  function Vg(e, t, n, r, a) {
    e.elements.forEach((r) =>
      (function (e, t, n) {
        const r = new Map(),
          a = new Set();
        return (
          e.forEach((e) => {
            let t;
            (t = e.styleInfo ? e.styleInfo.styleData.children : e.ruleInfo.ruleData.block.children),
              (function (e, t, n, r, a, o) {
                for (let a = t.tail; a; a = a.prev) {
                  const t = a.data,
                    i = Od(t);
                  if ("Declaration" == t.type && (i.match(Dg) || !r.has(t.property) || t.important) && !Wg(i, o)) {
                    const a = e.get(t);
                    (!a || (t.important && !a.important)) &&
                      (e.set(t, { selectorInfo: n, important: t.important }), i.match(Dg) || r.add(t.property));
                  }
                }
              })(r, t, e, a, 0, n);
          }),
          r
        );
      })(r, 0, a).forEach((r, a) => {
        if (r.selectorInfo.ruleInfo || e == n) {
          let o;
          if (r.selectorInfo.ruleInfo) {
            o = r.selectorInfo.ruleInfo;
            const n = o.ruleData;
            ([e, ...t].find((e) => e.rules.get(n)) || e).rules.set(n, o), n && o.matchedSelectors.add(r.selectorInfo.selectorText);
          } else {
            o = r.selectorInfo.styleInfo;
            const e = o.styleData;
            n.matchedStyles.get(e) || n.matchedStyles.set(e, o);
          }
          o.declarations.has(a) || o.declarations.add(a);
        }
      })
    ),
      delete e.elements,
      e.medias.forEach((o) => Vg(o, [e, ...t], n, r, a));
  }
  function Wg(e, t) {
    let n;
    return (t.style = e), t.style.length || e.match(Dg) || (n = !0), n;
  }
  function $g(e) {
    e.elements.forEach((e) =>
      e.sort((e, t) => {
        return e.styleInfo && !t.styleInfo
          ? -1
          : !e.styleInfo && t.styleInfo
          ? 1
          : ((n = e.specificity),
            (r = t.specificity),
            n.a > r.a
              ? -1
              : n.a < r.a
              ? 1
              : n.b > r.b
              ? -1
              : n.b < r.b
              ? 1
              : n.c > r.c
              ? -1
              : n.c < r.c
              ? 1
              : n.sheetIndex > r.sheetIndex
              ? -1
              : n.sheetIndex < r.sheetIndex
              ? 1
              : n.ruleIndex > r.ruleIndex
              ? -1
              : n.ruleIndex < r.ruleIndex
              ? 1
              : -1);
        var n, r;
      })
    ),
      e.medias.forEach($g);
  }
  function Gg(e, t = { a: 0, b: 0, c: 0 }) {
    return (
      "IdSelector" == e.type && t.a++,
      ("ClassSelector" == e.type || "AttributeSelector" == e.type || ("PseudoClassSelector" == e.type && "not" != e.name)) && t.b++,
      (("TypeSelector" == e.type && "*" != e.name) || "PseudoElementSelector" == e.type) && t.c++,
      e.children && e.children.forEach((e) => Gg(e, t)),
      t
    );
  }
  var Yg = Object.freeze({ __proto__: null, getMediaAllInfo: jg });
  const Qg = { flatten: xe },
    Kg = "all",
    Jg = "screen";
  function Zg(e) {
    const t = { processed: 0, discarded: 0 };
    return (
      e.forEach((n, r) => {
        if (ef(n.mediaText || Kg, Jg) && n.stylesheet.children) {
          Xg(n.stylesheet.children, t).forEach(({ cssRules: e, cssRule: t }) => e.remove(t));
        } else e.delete(r);
      }),
      t
    );
  }
  function Xg(e, t, n = []) {
    for (let r = e.head; r; r = r.next) {
      const a = r.data;
      "Atrule" == a.type &&
        "media" == a.name &&
        a.block &&
        a.block.children &&
        a.prelude &&
        a.prelude.children &&
        (t.processed++, ef(Od(a.prelude), Jg) ? Xg(a.block.children, t, n) : (n.push({ cssRules: e, cssRule: r }), t.discarded++));
    }
    return n;
  }
  function ef(e, t) {
    return Qg.flatten(sp(e).map((e) => tf(e, t))).find(
      (e) => (!e.not && (e.value == t || e.value == Kg)) || (e.not && (e.value == Kg || e.value != t))
    );
  }
  function tf(e, t, n = []) {
    return (
      e.nodes.map((r, a) => {
        if ("media-query" == r.type) return tf(r, t, n);
        if ("media-type" == r.type) {
          const t = { not: Boolean(a && "keyword" == e.nodes[0].type && "not" == e.nodes[0].value), value: r.value };
          n.find((e) => t.not == e.not && t.value == e.value) || n.push(t);
        }
      }),
      n.length || n.push({ not: !1, value: Kg }),
      n
    );
  }
  var nf = Object.freeze({ __proto__: null, process: Zg });
  function rf(e, t, n) {
    const r = { processed: 0, discarded: 0 };
    let a = 0;
    return (
      e.forEach((e) => {
        if (!e.scoped) {
          const t = e.stylesheet.children;
          if (t) {
            let o;
            (r.processed += t.size),
              (r.discarded += t.size),
              (o = e.mediaText && "all" != e.mediaText ? n.medias.get("style-" + a + "-" + e.mediaText) : n),
              af(t, a, o),
              (r.discarded -= t.size);
          }
        }
        a++;
      }),
      t.forEach((e) =>
        (function (e, t) {
          const n = [],
            r = t.matchedStyles.get(e);
          if (r) {
            let t;
            for (let a = e.children.head; a && !t; a = a.next) r.declarations.has(a.data) || n.push(a);
            n.forEach((t) => e.children.remove(t));
          }
        })(e, n)
      ),
      r
    );
  }
  function af(e, t, n) {
    let r = 0;
    const a = [];
    for (let o = e.head; o; o = o.next) {
      const e = o.data;
      if (e.block && e.block.children && e.prelude && e.prelude.children) {
        if ("Atrule" == e.type && "media" == e.name) {
          const i = Od(e.prelude);
          af(e.block.children, t, n.medias.get("rule-" + t + "-" + r + "-" + i)),
            (e.prelude.children.size && e.block.children.size) || a.push(o),
            r++;
        } else if ("Rule" == e.type) {
          const t = n.rules.get(e),
            r = n.pseudoRules.get(e);
          t || r ? t && (of(e, t, r), (e.prelude.children.size && e.block.children.size) || a.push(o)) : a.push(o);
        }
      } else (e && "Raw" != e.type && ("Rule" != e.type || (e.prelude && "Raw" != e.prelude.type))) || a.push(o);
    }
    a.forEach((t) => e.remove(t));
  }
  function of(e, t, n) {
    const r = [],
      a = [];
    let o;
    for (let r = e.prelude.children.head; r; r = r.next) {
      const e = Od(r.data);
      n && n.has(e) && (o = !0), t.matchedSelectors.has(e) || (n && n.has(e)) || a.push(r);
    }
    if (!o) for (let n = e.block.children.tail; n; n = n.prev) t.declarations.has(n.data) || r.push(n);
    r.forEach((t) => e.block.children.remove(t)), a.forEach((t) => e.prelude.children.remove(t));
  }
  var sf = Object.freeze({ __proto__: null, process: rf });
  const lf = "data:,";
  function cf(e) {
    e.querySelectorAll("picture").forEach((e) => {
      const t = e.querySelector("img");
      if (t) {
        let { src: n, srcset: r } = uf(t);
        if (!n) {
          const t = (function (e) {
            let t = e.find((e) => e.src),
              n = t && t.src,
              r = t && t.srcset;
            n || ((t = e.find((e) => df(e.src))), (n = t && t.src), n == lf && (n = null));
            r || ((t = e.find((e) => df(e.srcset))), (r = t && t.srcset), r == lf && (r = null));
            return { src: n, srcset: r };
          })(Array.from(e.querySelectorAll("source")).reverse());
          (n = t.src), r || (r = t.srcset);
        }
        hf({ src: n, srcset: r }, t, e);
      }
    }),
      e.querySelectorAll(":not(picture) > img[srcset]").forEach((e) => hf(uf(e), e));
  }
  function uf(e) {
    let t = e.getAttribute("src");
    t == lf && (t = null);
    let n = df(e.getAttribute("srcset"));
    return n == lf && (n = null), { src: t, srcset: n };
  }
  function hf(e, t, n) {
    e.src
      ? (t.setAttribute("src", e.src), t.setAttribute("srcset", ""), t.setAttribute("sizes", ""))
      : (t.setAttribute("src", lf),
        e.srcset ? t.setAttribute("srcset", e.srcset) : (t.setAttribute("srcset", ""), t.setAttribute("sizes", ""))),
      n && n.querySelectorAll("source").forEach((e) => e.remove());
  }
  function df(e) {
    if (e)
      try {
        const t = zm(e);
        if (t.length) return t.find((e) => e.url).url;
      } catch (e) {}
  }
  var pf = Object.freeze({ __proto__: null, process: cf });
  const mf = [
      "allowfullscreen",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "compact",
      "controls",
      "declare",
      "default",
      "defaultchecked",
      "defaultmuted",
      "defaultselected",
      "defer",
      "disabled",
      "enabled",
      "formnovalidate",
      "hidden",
      "indeterminate",
      "inert",
      "ismap",
      "itemscope",
      "loop",
      "multiple",
      "muted",
      "nohref",
      "noresize",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "pauseonexit",
      "readonly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "selected",
      "sortable",
      "truespeed",
      "typemustmatch",
      "visible"
    ],
    gf = ["script", "style", "pre", "textarea"],
    ff = [
      "id",
      "class",
      "style",
      "lang",
      "dir",
      "onclick",
      "ondblclick",
      "onmousedown",
      "onmouseup",
      "onmouseover",
      "onmousemove",
      "onmouseout",
      "onkeypress",
      "onkeydown",
      "onkeyup"
    ],
    bf = {
      form: { method: "get" },
      script: { language: "javascript", type: "text/javascript", charset: (e) => !e.getAttribute("src") },
      style: { media: "all", type: "text/css" },
      link: { media: "all" }
    },
    yf = /[ \t\f\r]+/g,
    wf = /[\n]+/g,
    kf = /^\s+$/,
    vf = 4294967295,
    xf = [
      function (e) {
        1 == e.nodeType &&
          Array.from(e.attributes).forEach((t) => {
            mf.includes(t.name) && e.setAttribute(t.name, "");
          });
      },
      function (e) {
        3 == e.nodeType &&
          e.previousSibling &&
          3 == e.previousSibling.nodeType &&
          ((e.textContent = e.previousSibling.textContent + e.textContent), e.previousSibling.remove());
      },
      function (e, t) {
        if (3 == e.nodeType) {
          let n = e.parentElement;
          if (!("" == n.getAttribute(t.PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME))) {
            const t = e.textContent;
            let r = Af(n);
            for (; r; ) (n = n.parentElement), (r = n && Af(n));
            (!n || r) &&
              t.length > 1 &&
              (e.textContent = t
                .replace(
                  yf,
                  (function (e) {
                    return e.parentElement && "HEAD" == e.parentElement.tagName ? "\n" : " ";
                  })(e)
                )
                .replace(wf, "\n"));
          }
        }
      },
      function (e) {
        if (8 == e.nodeType && "HTML" != e.parentElement.tagName) return !e.textContent.toLowerCase().trim().startsWith("[if");
      },
      function (e) {
        1 == e.nodeType &&
          Array.from(e.attributes).forEach((t) => {
            if (ff.includes(t.name.toLowerCase())) {
              const n = e.getAttribute(t.name);
              ("" == n || (n || "").match(kf)) && e.removeAttribute(t.name);
            }
          });
      },
      function (e) {
        if (1 == e.nodeType) {
          const t = bf[e.tagName.toLowerCase()];
          t &&
            Object.keys(t).forEach((n) => {
              const r = t[n];
              ("function" == typeof r ? r(e) : e.getAttribute(n) == r) && e.removeAttribute(n);
            });
        }
      },
      function (e) {
        if (1 == e.nodeType && "SCRIPT" == e.tagName && "application/ld+json" == e.type && e.textContent.trim())
          try {
            e.textContent = JSON.stringify(JSON.parse(e.textContent));
          } catch (e) {}
      },
      (e) =>
        (function (e, t, n) {
          if (1 == e.nodeType && e.tagName.toLowerCase() == t.toLowerCase()) {
            let t = e.previousSibling;
            const r = [];
            for (; t && 3 == t.nodeType && !t.textContent.trim(); ) r.push(t), (t = t.previousSibling);
            t &&
              1 == t.nodeType &&
              t.tagName == e.tagName &&
              n(e, t) &&
              ((e.textContent = t.textContent + e.textContent), r.forEach((e) => e.remove()), t.remove());
          }
        })(e, "style", (e, t) => e.parentElement && "HEAD" == e.parentElement.tagName && e.media == t.media && e.title == t.title)
    ];
  function Ef(e, t) {
    !(function (e) {
      e.querySelectorAll("style, script:not([src])").forEach((e) => {
        e.textContent.trim() || e.remove();
      });
    })(e);
    const n = e.createTreeWalker(e.documentElement, vf, null, !1);
    let r = n.nextNode();
    for (; r; ) {
      const e = xf.find((e) => e(r, t)),
        a = r;
      (r = n.nextNode()), e && a.remove();
    }
  }
  function Af(e) {
    return e && !gf.includes(e.tagName.toLowerCase());
  }
  var Sf = Object.freeze({ __proto__: null, process: Ef });
  const Tf = [
      "area",
      "base",
      "br",
      "col",
      "command",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ],
    Cf = 1,
    Rf = 3,
    _f = 8,
    If = [
      { tagName: "head", accept: (e) => !e.childNodes.length || e.childNodes[0].nodeType == Cf },
      { tagName: "body", accept: (e) => !e.childNodes.length }
    ],
    zf = [
      { tagName: "html", accept: (e) => !e || e.nodeType != _f },
      { tagName: "head", accept: (e) => !e || (e.nodeType != _f && (e.nodeType != Rf || !Mf(e.textContent))) },
      { tagName: "body", accept: (e) => !e || e.nodeType != _f },
      {
        tagName: "li",
        accept: (e, t) =>
          (!e && t.parentElement && ("UL" == t.parentElement.tagName || "OL" == t.parentElement.tagName)) ||
          (e && ["LI"].includes(e.tagName))
      },
      { tagName: "dt", accept: (e) => !e || ["DT", "DD"].includes(e.tagName) },
      {
        tagName: "p",
        accept: (e) =>
          e &&
          [
            "ADDRESS",
            "ARTICLE",
            "ASIDE",
            "BLOCKQUOTE",
            "DETAILS",
            "DIV",
            "DL",
            "FIELDSET",
            "FIGCAPTION",
            "FIGURE",
            "FOOTER",
            "FORM",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "HEADER",
            "HR",
            "MAIN",
            "NAV",
            "OL",
            "P",
            "PRE",
            "SECTION",
            "TABLE",
            "UL"
          ].includes(e.tagName)
      },
      { tagName: "dd", accept: (e) => !e || ["DT", "DD"].includes(e.tagName) },
      { tagName: "rt", accept: (e) => !e || ["RT", "RP"].includes(e.tagName) },
      { tagName: "rp", accept: (e) => !e || ["RT", "RP"].includes(e.tagName) },
      { tagName: "optgroup", accept: (e) => !e || ["OPTGROUP"].includes(e.tagName) },
      { tagName: "option", accept: (e) => !e || ["OPTION", "OPTGROUP"].includes(e.tagName) },
      { tagName: "colgroup", accept: (e) => !e || (e.nodeType != _f && (e.nodeType != Rf || !Mf(e.textContent))) },
      { tagName: "caption", accept: (e) => !e || (e.nodeType != _f && (e.nodeType != Rf || !Mf(e.textContent))) },
      { tagName: "thead", accept: (e) => !e || ["TBODY", "TFOOT"].includes(e.tagName) },
      { tagName: "tbody", accept: (e) => !e || ["TBODY", "TFOOT"].includes(e.tagName) },
      { tagName: "tfoot", accept: (e) => !e },
      { tagName: "tr", accept: (e) => !e || ["TR"].includes(e.tagName) },
      { tagName: "td", accept: (e) => !e || ["TD", "TH"].includes(e.tagName) },
      { tagName: "th", accept: (e) => !e || ["TD", "TH"].includes(e.tagName) }
    ],
    Lf = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"];
  function Nf(e, t) {
    const n = e.doctype;
    let r = "";
    return (
      n &&
        ((r = "<!DOCTYPE " + n.nodeName),
        n.publicId
          ? ((r += ' PUBLIC "' + n.publicId + '"'), n.systemId && (r += ' "' + n.systemId + '"'))
          : n.systemId && (r += ' SYSTEM "' + n.systemId + '"'),
        n.internalSubset && (r += " [" + n.internalSubset + "]"),
        (r += "> ")),
      r + Pf(e.documentElement, t)
    );
  }
  function Pf(e, t, n) {
    return e.nodeType == Rf
      ? (function (e) {
          const t = e.parentNode;
          let n;
          t && t.nodeType == Cf && (n = t.tagName.toLowerCase());
          return !n || Lf.includes(n)
            ? "script" == n || "style" == n
              ? e.textContent.replace(/<\//gi, "<\\/").replace(/\/>/gi, "\\/>")
              : e.textContent
            : e.textContent
                .replace(/&/g, "&amp;")
                .replace(/\u00a0/g, "&nbsp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        })(e)
      : e.nodeType == _f
      ? "\x3c!--" + e.textContent + "--\x3e"
      : e.nodeType == Cf
      ? (function (e, t, n) {
          const r = e.tagName.toLowerCase(),
            a = t && If.find((t) => r == t.tagName && t.accept(e));
          let o = "";
          (a && !e.attributes.length) ||
            ((o = "<" + r),
            Array.from(e.attributes).forEach(
              (n) =>
                (o += (function (e, t, n) {
                  const r = e.name;
                  let a = "";
                  if (!r.match(/["'>/=]/)) {
                    let o,
                      i = e.value;
                    n &&
                      "class" == r &&
                      (i = Array.from(t.classList)
                        .map((e) => e.trim())
                        .join(" ")),
                      (i = i.replace(/&/g, "&amp;").replace(/\u00a0/g, "&nbsp;")),
                      i.includes('"') && (i.includes("'") || !n ? (i = i.replace(/"/g, "&quot;")) : (o = !0));
                    const s = !n || i.match(/[ \t\n\f\r'"`=<>]/);
                    (a += " "),
                      e.namespace
                        ? "http://www.w3.org/XML/1998/namespace" == e.namespaceURI
                          ? (a += "xml:" + r)
                          : "http://www.w3.org/2000/xmlns/" == e.namespaceURI
                          ? ("xmlns" !== r && (a += "xmlns:"), (a += r))
                          : "http://www.w3.org/1999/xlink" == e.namespaceURI
                          ? (a += "xlink:" + r)
                          : (a += r)
                        : (a += r),
                      "" != i && ((a += "="), s && (a += o ? "'" : '"'), (a += i), s && (a += o ? "'" : '"'));
                  }
                  return a;
                })(n, e, t))
            ),
            (o += ">"));
          "TEMPLATE" != e.tagName || e.childNodes.length
            ? Array.from(e.childNodes).forEach((e) => (o += Pf(e, t, n || "svg" == r)))
            : (o += e.innerHTML);
          const i = t && zf.find((t) => r == t.tagName && t.accept(e.nextSibling, e));
          (n || (!i && !Tf.includes(r))) && (o += "</" + r + ">");
          return o;
        })(e, t, n)
      : void 0;
  }
  function Mf(e) {
    return Boolean(e.match(/^[ \t\n\f\r]/));
  }
  var Of = Object.freeze({ __proto__: null, process: Nf });
  const Uf = ["~", "+", "\\\\", "?", "%", "*", ":", "|", '"', "<", ">", "\0-", ""],
    Df = "_",
    qf = {
      "😀": "grinning-face",
      "😃": "grinning-face-with-big-eyes",
      "😄": "grinning-face-with-smiling-eyes",
      "😁": "beaming-face-with-smiling-eyes",
      "😆": "grinning-squinting-face",
      "😅": "grinning-face-with-sweat",
      "🤣": "rolling-on-the-floor-laughing",
      "😂": "face-with-tears-of-joy",
      "🙂": "slightly-smiling-face",
      "🙃": "upside-down-face",
      "🫠": "melting-face",
      "😉": "winking-face",
      "😊": "smiling-face-with-smiling-eyes",
      "😇": "smiling-face-with-halo",
      "🥰": "smiling-face-with-hearts",
      "😍": "smiling-face-with-heart-eyes",
      "🤩": "star-struck",
      "😘": "face-blowing-a-kiss",
      "😗": "kissing-face",
      "☺": "smiling-face",
      "😚": "kissing-face-with-closed-eyes",
      "😙": "kissing-face-with-smiling-eyes",
      "🥲": "smiling-face-with-tear",
      "😋": "face-savoring-food",
      "😛": "face-with-tongue",
      "😜": "winking-face-with-tongue",
      "🤪": "zany-face",
      "😝": "squinting-face-with-tongue",
      "🤑": "money-mouth-face",
      "🤗": "smiling-face-with-open-hands",
      "🤭": "face-with-hand-over-mouth",
      "🫢": "face-with-open-eyes-and-hand-over-mouth",
      "🫣": "face-with-peeking-eye",
      "🤫": "shushing-face",
      "🤔": "thinking-face",
      "🫡": "saluting-face",
      "🤐": "zipper-mouth-face",
      "🤨": "face-with-raised-eyebrow",
      "😐": "neutral-face",
      "😑": "expressionless-face",
      "😶": "face-without-mouth",
      "🫥": "dotted-line-face",
      "😶‍🌫️": "face-in-clouds",
      "😏": "smirking-face",
      "😒": "unamused-face",
      "🙄": "face-with-rolling-eyes",
      "😬": "grimacing-face",
      "😮‍💨": "face-exhaling",
      "🤥": "lying-face",
      "🫨": "⊛-shaking-face",
      "😌": "relieved-face",
      "😔": "pensive-face",
      "😪": "sleepy-face",
      "🤤": "drooling-face",
      "😴": "sleeping-face",
      "😷": "face-with-medical-mask",
      "🤒": "face-with-thermometer",
      "🤕": "face-with-head-bandage",
      "🤢": "nauseated-face",
      "🤮": "face-vomiting",
      "🤧": "sneezing-face",
      "🥵": "hot-face",
      "🥶": "cold-face",
      "🥴": "woozy-face",
      "😵": "face-with-crossed-out-eyes",
      "😵‍💫": "face-with-spiral-eyes",
      "🤯": "exploding-head",
      "🤠": "cowboy-hat-face",
      "🥳": "partying-face",
      "🥸": "disguised-face",
      "😎": "smiling-face-with-sunglasses",
      "🤓": "nerd-face",
      "🧐": "face-with-monocle",
      "😕": "confused-face",
      "🫤": "face-with-diagonal-mouth",
      "😟": "worried-face",
      "🙁": "slightly-frowning-face",
      "☹": "frowning-face",
      "😮": "face-with-open-mouth",
      "😯": "hushed-face",
      "😲": "astonished-face",
      "😳": "flushed-face",
      "🥺": "pleading-face",
      "🥹": "face-holding-back-tears",
      "😦": "frowning-face-with-open-mouth",
      "😧": "anguished-face",
      "😨": "fearful-face",
      "😰": "anxious-face-with-sweat",
      "😥": "sad-but-relieved-face",
      "😢": "crying-face",
      "😭": "loudly-crying-face",
      "😱": "face-screaming-in-fear",
      "😖": "confounded-face",
      "😣": "persevering-face",
      "😞": "disappointed-face",
      "😓": "downcast-face-with-sweat",
      "😩": "weary-face",
      "😫": "tired-face",
      "🥱": "yawning-face",
      "😤": "face-with-steam-from-nose",
      "😡": "enraged-face",
      "😠": "angry-face",
      "🤬": "face-with-symbols-on-mouth",
      "😈": "smiling-face-with-horns",
      "👿": "angry-face-with-horns",
      "💀": "skull",
      "☠": "skull-and-crossbones",
      "💩": "pile-of-poo",
      "🤡": "clown-face",
      "👹": "ogre",
      "👺": "goblin",
      "👻": "ghost",
      "👽": "alien",
      "👾": "alien-monster",
      "🤖": "robot",
      "😺": "grinning-cat",
      "😸": "grinning-cat-with-smiling-eyes",
      "😹": "cat-with-tears-of-joy",
      "😻": "smiling-cat-with-heart-eyes",
      "😼": "cat-with-wry-smile",
      "😽": "kissing-cat",
      "🙀": "weary-cat",
      "😿": "crying-cat",
      "😾": "pouting-cat",
      "🙈": "see-no-evil-monkey",
      "🙉": "hear-no-evil-monkey",
      "🙊": "speak-no-evil-monkey",
      "💌": "love-letter",
      "💘": "heart-with-arrow",
      "💝": "heart-with-ribbon",
      "💖": "sparkling-heart",
      "💗": "growing-heart",
      "💓": "beating-heart",
      "💞": "revolving-hearts",
      "💕": "two-hearts",
      "💟": "heart-decoration",
      "❣": "heart-exclamation",
      "💔": "broken-heart",
      "❤️‍🔥": "heart-on-fire",
      "❤️‍🩹": "mending-heart",
      "❤": "red-heart",
      "🩷": "⊛-pink-heart",
      "🧡": "orange-heart",
      "💛": "yellow-heart",
      "💚": "green-heart",
      "💙": "blue-heart",
      "🩵": "⊛-light-blue-heart",
      "💜": "purple-heart",
      "🤎": "brown-heart",
      "🖤": "black-heart",
      "🩶": "⊛-grey-heart",
      "🤍": "white-heart",
      "💋": "kiss-mark",
      "💯": "hundred-points",
      "💢": "anger-symbol",
      "💥": "collision",
      "💫": "dizzy",
      "💦": "sweat-droplets",
      "💨": "dashing-away",
      "🕳": "hole",
      "💬": "speech-balloon",
      "👁️‍🗨️": "eye-in-speech-bubble",
      "🗨": "left-speech-bubble",
      "🗯": "right-anger-bubble",
      "💭": "thought-balloon",
      "💤": "zzz",
      "👋": "waving-hand",
      "🤚": "raised-back-of-hand",
      "🖐": "hand-with-fingers-splayed",
      "✋": "raised-hand",
      "🖖": "vulcan-salute",
      "🫱": "rightwards-hand",
      "🫲": "leftwards-hand",
      "🫳": "palm-down-hand",
      "🫴": "palm-up-hand",
      "🫷": "⊛-leftwards-pushing-hand",
      "🫸": "⊛-rightwards-pushing-hand",
      "👌": "ok-hand",
      "🤌": "pinched-fingers",
      "🤏": "pinching-hand",
      "✌": "victory-hand",
      "🤞": "crossed-fingers",
      "🫰": "hand-with-index-finger-and-thumb-crossed",
      "🤟": "love-you-gesture",
      "🤘": "sign-of-the-horns",
      "🤙": "call-me-hand",
      "👈": "backhand-index-pointing-left",
      "👉": "backhand-index-pointing-right",
      "👆": "backhand-index-pointing-up",
      "🖕": "middle-finger",
      "👇": "backhand-index-pointing-down",
      "☝": "index-pointing-up",
      "🫵": "index-pointing-at-the-viewer",
      "👍": "thumbs-up",
      "👎": "thumbs-down",
      "✊": "raised-fist",
      "👊": "oncoming-fist",
      "🤛": "left-facing-fist",
      "🤜": "right-facing-fist",
      "👏": "clapping-hands",
      "🙌": "raising-hands",
      "🫶": "heart-hands",
      "👐": "open-hands",
      "🤲": "palms-up-together",
      "🤝": "handshake",
      "🙏": "folded-hands",
      "✍": "writing-hand",
      "💅": "nail-polish",
      "🤳": "selfie",
      "💪": "flexed-biceps",
      "🦾": "mechanical-arm",
      "🦿": "mechanical-leg",
      "🦵": "leg",
      "🦶": "foot",
      "👂": "ear",
      "🦻": "ear-with-hearing-aid",
      "👃": "nose",
      "🧠": "brain",
      "🫀": "anatomical-heart",
      "🫁": "lungs",
      "🦷": "tooth",
      "🦴": "bone",
      "👀": "eyes",
      "👁": "eye",
      "👅": "tongue",
      "👄": "mouth",
      "🫦": "biting-lip",
      "👶": "baby",
      "🧒": "child",
      "👦": "boy",
      "👧": "girl",
      "🧑": "person",
      "👱": "person-blond-hair",
      "👨": "man",
      "🧔": "person-beard",
      "🧔‍♂️": "man-beard",
      "🧔‍♀️": "woman-beard",
      "👨‍🦰": "man-red-hair",
      "👨‍🦱": "man-curly-hair",
      "👨‍🦳": "man-white-hair",
      "👨‍🦲": "man-bald",
      "👩": "woman",
      "👩‍🦰": "woman-red-hair",
      "🧑‍🦰": "person-red-hair",
      "👩‍🦱": "woman-curly-hair",
      "🧑‍🦱": "person-curly-hair",
      "👩‍🦳": "woman-white-hair",
      "🧑‍🦳": "person-white-hair",
      "👩‍🦲": "woman-bald",
      "🧑‍🦲": "person-bald",
      "👱‍♀️": "woman-blond-hair",
      "👱‍♂️": "man-blond-hair",
      "🧓": "older-person",
      "👴": "old-man",
      "👵": "old-woman",
      "🙍": "person-frowning",
      "🙍‍♂️": "man-frowning",
      "🙍‍♀️": "woman-frowning",
      "🙎": "person-pouting",
      "🙎‍♂️": "man-pouting",
      "🙎‍♀️": "woman-pouting",
      "🙅": "person-gesturing-no",
      "🙅‍♂️": "man-gesturing-no",
      "🙅‍♀️": "woman-gesturing-no",
      "🙆": "person-gesturing-ok",
      "🙆‍♂️": "man-gesturing-ok",
      "🙆‍♀️": "woman-gesturing-ok",
      "💁": "person-tipping-hand",
      "💁‍♂️": "man-tipping-hand",
      "💁‍♀️": "woman-tipping-hand",
      "🙋": "person-raising-hand",
      "🙋‍♂️": "man-raising-hand",
      "🙋‍♀️": "woman-raising-hand",
      "🧏": "deaf-person",
      "🧏‍♂️": "deaf-man",
      "🧏‍♀️": "deaf-woman",
      "🙇": "person-bowing",
      "🙇‍♂️": "man-bowing",
      "🙇‍♀️": "woman-bowing",
      "🤦": "person-facepalming",
      "🤦‍♂️": "man-facepalming",
      "🤦‍♀️": "woman-facepalming",
      "🤷": "person-shrugging",
      "🤷‍♂️": "man-shrugging",
      "🤷‍♀️": "woman-shrugging",
      "🧑‍⚕️": "health-worker",
      "👨‍⚕️": "man-health-worker",
      "👩‍⚕️": "woman-health-worker",
      "🧑‍🎓": "student",
      "👨‍🎓": "man-student",
      "👩‍🎓": "woman-student",
      "🧑‍🏫": "teacher",
      "👨‍🏫": "man-teacher",
      "👩‍🏫": "woman-teacher",
      "🧑‍⚖️": "judge",
      "👨‍⚖️": "man-judge",
      "👩‍⚖️": "woman-judge",
      "🧑‍🌾": "farmer",
      "👨‍🌾": "man-farmer",
      "👩‍🌾": "woman-farmer",
      "🧑‍🍳": "cook",
      "👨‍🍳": "man-cook",
      "👩‍🍳": "woman-cook",
      "🧑‍🔧": "mechanic",
      "👨‍🔧": "man-mechanic",
      "👩‍🔧": "woman-mechanic",
      "🧑‍🏭": "factory-worker",
      "👨‍🏭": "man-factory-worker",
      "👩‍🏭": "woman-factory-worker",
      "🧑‍💼": "office-worker",
      "👨‍💼": "man-office-worker",
      "👩‍💼": "woman-office-worker",
      "🧑‍🔬": "scientist",
      "👨‍🔬": "man-scientist",
      "👩‍🔬": "woman-scientist",
      "🧑‍💻": "technologist",
      "👨‍💻": "man-technologist",
      "👩‍💻": "woman-technologist",
      "🧑‍🎤": "singer",
      "👨‍🎤": "man-singer",
      "👩‍🎤": "woman-singer",
      "🧑‍🎨": "artist",
      "👨‍🎨": "man-artist",
      "👩‍🎨": "woman-artist",
      "🧑‍✈️": "pilot",
      "👨‍✈️": "man-pilot",
      "👩‍✈️": "woman-pilot",
      "🧑‍🚀": "astronaut",
      "👨‍🚀": "man-astronaut",
      "👩‍🚀": "woman-astronaut",
      "🧑‍🚒": "firefighter",
      "👨‍🚒": "man-firefighter",
      "👩‍🚒": "woman-firefighter",
      "👮": "police-officer",
      "👮‍♂️": "man-police-officer",
      "👮‍♀️": "woman-police-officer",
      "🕵": "detective",
      "🕵️‍♂️": "man-detective",
      "🕵️‍♀️": "woman-detective",
      "💂": "guard",
      "💂‍♂️": "man-guard",
      "💂‍♀️": "woman-guard",
      "🥷": "ninja",
      "👷": "construction-worker",
      "👷‍♂️": "man-construction-worker",
      "👷‍♀️": "woman-construction-worker",
      "🫅": "person-with-crown",
      "🤴": "prince",
      "👸": "princess",
      "👳": "person-wearing-turban",
      "👳‍♂️": "man-wearing-turban",
      "👳‍♀️": "woman-wearing-turban",
      "👲": "person-with-skullcap",
      "🧕": "woman-with-headscarf",
      "🤵": "person-in-tuxedo",
      "🤵‍♂️": "man-in-tuxedo",
      "🤵‍♀️": "woman-in-tuxedo",
      "👰": "person-with-veil",
      "👰‍♂️": "man-with-veil",
      "👰‍♀️": "woman-with-veil",
      "🤰": "pregnant-woman",
      "🫃": "pregnant-man",
      "🫄": "pregnant-person",
      "🤱": "breast-feeding",
      "👩‍🍼": "woman-feeding-baby",
      "👨‍🍼": "man-feeding-baby",
      "🧑‍🍼": "person-feeding-baby",
      "👼": "baby-angel",
      "🎅": "santa-claus",
      "🤶": "mrs-claus",
      "🧑‍🎄": "mx-claus",
      "🦸": "superhero",
      "🦸‍♂️": "man-superhero",
      "🦸‍♀️": "woman-superhero",
      "🦹": "supervillain",
      "🦹‍♂️": "man-supervillain",
      "🦹‍♀️": "woman-supervillain",
      "🧙": "mage",
      "🧙‍♂️": "man-mage",
      "🧙‍♀️": "woman-mage",
      "🧚": "fairy",
      "🧚‍♂️": "man-fairy",
      "🧚‍♀️": "woman-fairy",
      "🧛": "vampire",
      "🧛‍♂️": "man-vampire",
      "🧛‍♀️": "woman-vampire",
      "🧜": "merperson",
      "🧜‍♂️": "merman",
      "🧜‍♀️": "mermaid",
      "🧝": "elf",
      "🧝‍♂️": "man-elf",
      "🧝‍♀️": "woman-elf",
      "🧞": "genie",
      "🧞‍♂️": "man-genie",
      "🧞‍♀️": "woman-genie",
      "🧟": "zombie",
      "🧟‍♂️": "man-zombie",
      "🧟‍♀️": "woman-zombie",
      "🧌": "troll",
      "💆": "person-getting-massage",
      "💆‍♂️": "man-getting-massage",
      "💆‍♀️": "woman-getting-massage",
      "💇": "person-getting-haircut",
      "💇‍♂️": "man-getting-haircut",
      "💇‍♀️": "woman-getting-haircut",
      "🚶": "person-walking",
      "🚶‍♂️": "man-walking",
      "🚶‍♀️": "woman-walking",
      "🧍": "person-standing",
      "🧍‍♂️": "man-standing",
      "🧍‍♀️": "woman-standing",
      "🧎": "person-kneeling",
      "🧎‍♂️": "man-kneeling",
      "🧎‍♀️": "woman-kneeling",
      "🧑‍🦯": "person-with-white-cane",
      "👨‍🦯": "man-with-white-cane",
      "👩‍🦯": "woman-with-white-cane",
      "🧑‍🦼": "person-in-motorized-wheelchair",
      "👨‍🦼": "man-in-motorized-wheelchair",
      "👩‍🦼": "woman-in-motorized-wheelchair",
      "🧑‍🦽": "person-in-manual-wheelchair",
      "👨‍🦽": "man-in-manual-wheelchair",
      "👩‍🦽": "woman-in-manual-wheelchair",
      "🏃": "person-running",
      "🏃‍♂️": "man-running",
      "🏃‍♀️": "woman-running",
      "💃": "woman-dancing",
      "🕺": "man-dancing",
      "🕴": "person-in-suit-levitating",
      "👯": "people-with-bunny-ears",
      "👯‍♂️": "men-with-bunny-ears",
      "👯‍♀️": "women-with-bunny-ears",
      "🧖": "person-in-steamy-room",
      "🧖‍♂️": "man-in-steamy-room",
      "🧖‍♀️": "woman-in-steamy-room",
      "🧗": "person-climbing",
      "🧗‍♂️": "man-climbing",
      "🧗‍♀️": "woman-climbing",
      "🤺": "person-fencing",
      "🏇": "horse-racing",
      "⛷": "skier",
      "🏂": "snowboarder",
      "🏌": "person-golfing",
      "🏌️‍♂️": "man-golfing",
      "🏌️‍♀️": "woman-golfing",
      "🏄": "person-surfing",
      "🏄‍♂️": "man-surfing",
      "🏄‍♀️": "woman-surfing",
      "🚣": "person-rowing-boat",
      "🚣‍♂️": "man-rowing-boat",
      "🚣‍♀️": "woman-rowing-boat",
      "🏊": "person-swimming",
      "🏊‍♂️": "man-swimming",
      "🏊‍♀️": "woman-swimming",
      "⛹": "person-bouncing-ball",
      "⛹️‍♂️": "man-bouncing-ball",
      "⛹️‍♀️": "woman-bouncing-ball",
      "🏋": "person-lifting-weights",
      "🏋️‍♂️": "man-lifting-weights",
      "🏋️‍♀️": "woman-lifting-weights",
      "🚴": "person-biking",
      "🚴‍♂️": "man-biking",
      "🚴‍♀️": "woman-biking",
      "🚵": "person-mountain-biking",
      "🚵‍♂️": "man-mountain-biking",
      "🚵‍♀️": "woman-mountain-biking",
      "🤸": "person-cartwheeling",
      "🤸‍♂️": "man-cartwheeling",
      "🤸‍♀️": "woman-cartwheeling",
      "🤼": "people-wrestling",
      "🤼‍♂️": "men-wrestling",
      "🤼‍♀️": "women-wrestling",
      "🤽": "person-playing-water-polo",
      "🤽‍♂️": "man-playing-water-polo",
      "🤽‍♀️": "woman-playing-water-polo",
      "🤾": "person-playing-handball",
      "🤾‍♂️": "man-playing-handball",
      "🤾‍♀️": "woman-playing-handball",
      "🤹": "person-juggling",
      "🤹‍♂️": "man-juggling",
      "🤹‍♀️": "woman-juggling",
      "🧘": "person-in-lotus-position",
      "🧘‍♂️": "man-in-lotus-position",
      "🧘‍♀️": "woman-in-lotus-position",
      "🛀": "person-taking-bath",
      "🛌": "person-in-bed",
      "🧑‍🤝‍🧑": "people-holding-hands",
      "👭": "women-holding-hands",
      "👫": "woman-and-man-holding-hands",
      "👬": "men-holding-hands",
      "💏": "kiss",
      "👩‍❤️‍💋‍👨": "kiss-woman,-man",
      "👨‍❤️‍💋‍👨": "kiss-man,-man",
      "👩‍❤️‍💋‍👩": "kiss-woman,-woman",
      "💑": "couple-with-heart",
      "👩‍❤️‍👨": "couple-with-heart-woman,-man",
      "👨‍❤️‍👨": "couple-with-heart-man,-man",
      "👩‍❤️‍👩": "couple-with-heart-woman,-woman",
      "👪": "family",
      "👨‍👩‍👦": "family-man,-woman,-boy",
      "👨‍👩‍👧": "family-man,-woman,-girl",
      "👨‍👩‍👧‍👦": "family-man,-woman,-girl,-boy",
      "👨‍👩‍👦‍👦": "family-man,-woman,-boy,-boy",
      "👨‍👩‍👧‍👧": "family-man,-woman,-girl,-girl",
      "👨‍👨‍👦": "family-man,-man,-boy",
      "👨‍👨‍👧": "family-man,-man,-girl",
      "👨‍👨‍👧‍👦": "family-man,-man,-girl,-boy",
      "👨‍👨‍👦‍👦": "family-man,-man,-boy,-boy",
      "👨‍👨‍👧‍👧": "family-man,-man,-girl,-girl",
      "👩‍👩‍👦": "family-woman,-woman,-boy",
      "👩‍👩‍👧": "family-woman,-woman,-girl",
      "👩‍👩‍👧‍👦": "family-woman,-woman,-girl,-boy",
      "👩‍👩‍👦‍👦": "family-woman,-woman,-boy,-boy",
      "👩‍👩‍👧‍👧": "family-woman,-woman,-girl,-girl",
      "👨‍👦": "family-man,-boy",
      "👨‍👦‍👦": "family-man,-boy,-boy",
      "👨‍👧": "family-man,-girl",
      "👨‍👧‍👦": "family-man,-girl,-boy",
      "👨‍👧‍👧": "family-man,-girl,-girl",
      "👩‍👦": "family-woman,-boy",
      "👩‍👦‍👦": "family-woman,-boy,-boy",
      "👩‍👧": "family-woman,-girl",
      "👩‍👧‍👦": "family-woman,-girl,-boy",
      "👩‍👧‍👧": "family-woman,-girl,-girl",
      "🗣": "speaking-head",
      "👤": "bust-in-silhouette",
      "👥": "busts-in-silhouette",
      "🫂": "people-hugging",
      "👣": "footprints",
      "🦰": "red-hair",
      "🦱": "curly-hair",
      "🦳": "white-hair",
      "🦲": "bald",
      "🐵": "monkey-face",
      "🐒": "monkey",
      "🦍": "gorilla",
      "🦧": "orangutan",
      "🐶": "dog-face",
      "🐕": "dog",
      "🦮": "guide-dog",
      "🐕‍🦺": "service-dog",
      "🐩": "poodle",
      "🐺": "wolf",
      "🦊": "fox",
      "🦝": "raccoon",
      "🐱": "cat-face",
      "🐈": "cat",
      "🐈‍⬛": "black-cat",
      "🦁": "lion",
      "🐯": "tiger-face",
      "🐅": "tiger",
      "🐆": "leopard",
      "🐴": "horse-face",
      "🫎": "⊛-moose",
      "🫏": "⊛-donkey",
      "🐎": "horse",
      "🦄": "unicorn",
      "🦓": "zebra",
      "🦌": "deer",
      "🦬": "bison",
      "🐮": "cow-face",
      "🐂": "ox",
      "🐃": "water-buffalo",
      "🐄": "cow",
      "🐷": "pig-face",
      "🐖": "pig",
      "🐗": "boar",
      "🐽": "pig-nose",
      "🐏": "ram",
      "🐑": "ewe",
      "🐐": "goat",
      "🐪": "camel",
      "🐫": "two-hump-camel",
      "🦙": "llama",
      "🦒": "giraffe",
      "🐘": "elephant",
      "🦣": "mammoth",
      "🦏": "rhinoceros",
      "🦛": "hippopotamus",
      "🐭": "mouse-face",
      "🐁": "mouse",
      "🐀": "rat",
      "🐹": "hamster",
      "🐰": "rabbit-face",
      "🐇": "rabbit",
      "🐿": "chipmunk",
      "🦫": "beaver",
      "🦔": "hedgehog",
      "🦇": "bat",
      "🐻": "bear",
      "🐻‍❄️": "polar-bear",
      "🐨": "koala",
      "🐼": "panda",
      "🦥": "sloth",
      "🦦": "otter",
      "🦨": "skunk",
      "🦘": "kangaroo",
      "🦡": "badger",
      "🐾": "paw-prints",
      "🦃": "turkey",
      "🐔": "chicken",
      "🐓": "rooster",
      "🐣": "hatching-chick",
      "🐤": "baby-chick",
      "🐥": "front-facing-baby-chick",
      "🐦": "bird",
      "🐧": "penguin",
      "🕊": "dove",
      "🦅": "eagle",
      "🦆": "duck",
      "🦢": "swan",
      "🦉": "owl",
      "🦤": "dodo",
      "🪶": "feather",
      "🦩": "flamingo",
      "🦚": "peacock",
      "🦜": "parrot",
      "🪽": "⊛-wing",
      "🐦‍⬛": "⊛-black-bird",
      "🪿": "⊛-goose",
      "🐸": "frog",
      "🐊": "crocodile",
      "🐢": "turtle",
      "🦎": "lizard",
      "🐍": "snake",
      "🐲": "dragon-face",
      "🐉": "dragon",
      "🦕": "sauropod",
      "🦖": "t-rex",
      "🐳": "spouting-whale",
      "🐋": "whale",
      "🐬": "dolphin",
      "🦭": "seal",
      "🐟": "fish",
      "🐠": "tropical-fish",
      "🐡": "blowfish",
      "🦈": "shark",
      "🐙": "octopus",
      "🐚": "spiral-shell",
      "🪸": "coral",
      "🪼": "⊛-jellyfish",
      "🐌": "snail",
      "🦋": "butterfly",
      "🐛": "bug",
      "🐜": "ant",
      "🐝": "honeybee",
      "🪲": "beetle",
      "🐞": "lady-beetle",
      "🦗": "cricket",
      "🪳": "cockroach",
      "🕷": "spider",
      "🕸": "spider-web",
      "🦂": "scorpion",
      "🦟": "mosquito",
      "🪰": "fly",
      "🪱": "worm",
      "🦠": "microbe",
      "💐": "bouquet",
      "🌸": "cherry-blossom",
      "💮": "white-flower",
      "🪷": "lotus",
      "🏵": "rosette",
      "🌹": "rose",
      "🥀": "wilted-flower",
      "🌺": "hibiscus",
      "🌻": "sunflower",
      "🌼": "blossom",
      "🌷": "tulip",
      "🪻": "⊛-hyacinth",
      "🌱": "seedling",
      "🪴": "potted-plant",
      "🌲": "evergreen-tree",
      "🌳": "deciduous-tree",
      "🌴": "palm-tree",
      "🌵": "cactus",
      "🌾": "sheaf-of-rice",
      "🌿": "herb",
      "☘": "shamrock",
      "🍀": "four-leaf-clover",
      "🍁": "maple-leaf",
      "🍂": "fallen-leaf",
      "🍃": "leaf-fluttering-in-wind",
      "🪹": "empty-nest",
      "🪺": "nest-with-eggs",
      "🍄": "mushroom",
      "🍇": "grapes",
      "🍈": "melon",
      "🍉": "watermelon",
      "🍊": "tangerine",
      "🍋": "lemon",
      "🍌": "banana",
      "🍍": "pineapple",
      "🥭": "mango",
      "🍎": "red-apple",
      "🍏": "green-apple",
      "🍐": "pear",
      "🍑": "peach",
      "🍒": "cherries",
      "🍓": "strawberry",
      "🫐": "blueberries",
      "🥝": "kiwi-fruit",
      "🍅": "tomato",
      "🫒": "olive",
      "🥥": "coconut",
      "🥑": "avocado",
      "🍆": "eggplant",
      "🥔": "potato",
      "🥕": "carrot",
      "🌽": "ear-of-corn",
      "🌶": "hot-pepper",
      "🫑": "bell-pepper",
      "🥒": "cucumber",
      "🥬": "leafy-green",
      "🥦": "broccoli",
      "🧄": "garlic",
      "🧅": "onion",
      "🥜": "peanuts",
      "🫘": "beans",
      "🌰": "chestnut",
      "🫚": "⊛-ginger-root",
      "🫛": "⊛-pea-pod",
      "🍞": "bread",
      "🥐": "croissant",
      "🥖": "baguette-bread",
      "🫓": "flatbread",
      "🥨": "pretzel",
      "🥯": "bagel",
      "🥞": "pancakes",
      "🧇": "waffle",
      "🧀": "cheese-wedge",
      "🍖": "meat-on-bone",
      "🍗": "poultry-leg",
      "🥩": "cut-of-meat",
      "🥓": "bacon",
      "🍔": "hamburger",
      "🍟": "french-fries",
      "🍕": "pizza",
      "🌭": "hot-dog",
      "🥪": "sandwich",
      "🌮": "taco",
      "🌯": "burrito",
      "🫔": "tamale",
      "🥙": "stuffed-flatbread",
      "🧆": "falafel",
      "🥚": "egg",
      "🍳": "cooking",
      "🥘": "shallow-pan-of-food",
      "🍲": "pot-of-food",
      "🫕": "fondue",
      "🥣": "bowl-with-spoon",
      "🥗": "green-salad",
      "🍿": "popcorn",
      "🧈": "butter",
      "🧂": "salt",
      "🥫": "canned-food",
      "🍱": "bento-box",
      "🍘": "rice-cracker",
      "🍙": "rice-ball",
      "🍚": "cooked-rice",
      "🍛": "curry-rice",
      "🍜": "steaming-bowl",
      "🍝": "spaghetti",
      "🍠": "roasted-sweet-potato",
      "🍢": "oden",
      "🍣": "sushi",
      "🍤": "fried-shrimp",
      "🍥": "fish-cake-with-swirl",
      "🥮": "moon-cake",
      "🍡": "dango",
      "🥟": "dumpling",
      "🥠": "fortune-cookie",
      "🥡": "takeout-box",
      "🦀": "crab",
      "🦞": "lobster",
      "🦐": "shrimp",
      "🦑": "squid",
      "🦪": "oyster",
      "🍦": "soft-ice-cream",
      "🍧": "shaved-ice",
      "🍨": "ice-cream",
      "🍩": "doughnut",
      "🍪": "cookie",
      "🎂": "birthday-cake",
      "🍰": "shortcake",
      "🧁": "cupcake",
      "🥧": "pie",
      "🍫": "chocolate-bar",
      "🍬": "candy",
      "🍭": "lollipop",
      "🍮": "custard",
      "🍯": "honey-pot",
      "🍼": "baby-bottle",
      "🥛": "glass-of-milk",
      "☕": "hot-beverage",
      "🫖": "teapot",
      "🍵": "teacup-without-handle",
      "🍶": "sake",
      "🍾": "bottle-with-popping-cork",
      "🍷": "wine-glass",
      "🍸": "cocktail-glass",
      "🍹": "tropical-drink",
      "🍺": "beer-mug",
      "🍻": "clinking-beer-mugs",
      "🥂": "clinking-glasses",
      "🥃": "tumbler-glass",
      "🫗": "pouring-liquid",
      "🥤": "cup-with-straw",
      "🧋": "bubble-tea",
      "🧃": "beverage-box",
      "🧉": "mate",
      "🧊": "ice",
      "🥢": "chopsticks",
      "🍽": "fork-and-knife-with-plate",
      "🍴": "fork-and-knife",
      "🥄": "spoon",
      "🔪": "kitchen-knife",
      "🫙": "jar",
      "🏺": "amphora",
      "🌍": "globe-showing-europe-africa",
      "🌎": "globe-showing-americas",
      "🌏": "globe-showing-asia-australia",
      "🌐": "globe-with-meridians",
      "🗺": "world-map",
      "🗾": "map-of-japan",
      "🧭": "compass",
      "🏔": "snow-capped-mountain",
      "⛰": "mountain",
      "🌋": "volcano",
      "🗻": "mount-fuji",
      "🏕": "camping",
      "🏖": "beach-with-umbrella",
      "🏜": "desert",
      "🏝": "desert-island",
      "🏞": "national-park",
      "🏟": "stadium",
      "🏛": "classical-building",
      "🏗": "building-construction",
      "🧱": "brick",
      "🪨": "rock",
      "🪵": "wood",
      "🛖": "hut",
      "🏘": "houses",
      "🏚": "derelict-house",
      "🏠": "house",
      "🏡": "house-with-garden",
      "🏢": "office-building",
      "🏣": "japanese-post-office",
      "🏤": "post-office",
      "🏥": "hospital",
      "🏦": "bank",
      "🏨": "hotel",
      "🏩": "love-hotel",
      "🏪": "convenience-store",
      "🏫": "school",
      "🏬": "department-store",
      "🏭": "factory",
      "🏯": "japanese-castle",
      "🏰": "castle",
      "💒": "wedding",
      "🗼": "tokyo-tower",
      "🗽": "statue-of-liberty",
      "⛪": "church",
      "🕌": "mosque",
      "🛕": "hindu-temple",
      "🕍": "synagogue",
      "⛩": "shinto-shrine",
      "🕋": "kaaba",
      "⛲": "fountain",
      "⛺": "tent",
      "🌁": "foggy",
      "🌃": "night-with-stars",
      "🏙": "cityscape",
      "🌄": "sunrise-over-mountains",
      "🌅": "sunrise",
      "🌆": "cityscape-at-dusk",
      "🌇": "sunset",
      "🌉": "bridge-at-night",
      "♨": "hot-springs",
      "🎠": "carousel-horse",
      "🛝": "playground-slide",
      "🎡": "ferris-wheel",
      "🎢": "roller-coaster",
      "💈": "barber-pole",
      "🎪": "circus-tent",
      "🚂": "locomotive",
      "🚃": "railway-car",
      "🚄": "high-speed-train",
      "🚅": "bullet-train",
      "🚆": "train",
      "🚇": "metro",
      "🚈": "light-rail",
      "🚉": "station",
      "🚊": "tram",
      "🚝": "monorail",
      "🚞": "mountain-railway",
      "🚋": "tram-car",
      "🚌": "bus",
      "🚍": "oncoming-bus",
      "🚎": "trolleybus",
      "🚐": "minibus",
      "🚑": "ambulance",
      "🚒": "fire-engine",
      "🚓": "police-car",
      "🚔": "oncoming-police-car",
      "🚕": "taxi",
      "🚖": "oncoming-taxi",
      "🚗": "automobile",
      "🚘": "oncoming-automobile",
      "🚙": "sport-utility-vehicle",
      "🛻": "pickup-truck",
      "🚚": "delivery-truck",
      "🚛": "articulated-lorry",
      "🚜": "tractor",
      "🏎": "racing-car",
      "🏍": "motorcycle",
      "🛵": "motor-scooter",
      "🦽": "manual-wheelchair",
      "🦼": "motorized-wheelchair",
      "🛺": "auto-rickshaw",
      "🚲": "bicycle",
      "🛴": "kick-scooter",
      "🛹": "skateboard",
      "🛼": "roller-skate",
      "🚏": "bus-stop",
      "🛣": "motorway",
      "🛤": "railway-track",
      "🛢": "oil-drum",
      "⛽": "fuel-pump",
      "🛞": "wheel",
      "🚨": "police-car-light",
      "🚥": "horizontal-traffic-light",
      "🚦": "vertical-traffic-light",
      "🛑": "stop-sign",
      "🚧": "construction",
      "⚓": "anchor",
      "🛟": "ring-buoy",
      "⛵": "sailboat",
      "🛶": "canoe",
      "🚤": "speedboat",
      "🛳": "passenger-ship",
      "⛴": "ferry",
      "🛥": "motor-boat",
      "🚢": "ship",
      "✈": "airplane",
      "🛩": "small-airplane",
      "🛫": "airplane-departure",
      "🛬": "airplane-arrival",
      "🪂": "parachute",
      "💺": "seat",
      "🚁": "helicopter",
      "🚟": "suspension-railway",
      "🚠": "mountain-cableway",
      "🚡": "aerial-tramway",
      "🛰": "satellite",
      "🚀": "rocket",
      "🛸": "flying-saucer",
      "🛎": "bellhop-bell",
      "🧳": "luggage",
      "⌛": "hourglass-done",
      "⏳": "hourglass-not-done",
      "⌚": "watch",
      "⏰": "alarm-clock",
      "⏱": "stopwatch",
      "⏲": "timer-clock",
      "🕰": "mantelpiece-clock",
      "🕛": "twelve-o-clock",
      "🕧": "twelve-thirty",
      "🕐": "one-o-clock",
      "🕜": "one-thirty",
      "🕑": "two-o-clock",
      "🕝": "two-thirty",
      "🕒": "three-o-clock",
      "🕞": "three-thirty",
      "🕓": "four-o-clock",
      "🕟": "four-thirty",
      "🕔": "five-o-clock",
      "🕠": "five-thirty",
      "🕕": "six-o-clock",
      "🕡": "six-thirty",
      "🕖": "seven-o-clock",
      "🕢": "seven-thirty",
      "🕗": "eight-o-clock",
      "🕣": "eight-thirty",
      "🕘": "nine-o-clock",
      "🕤": "nine-thirty",
      "🕙": "ten-o-clock",
      "🕥": "ten-thirty",
      "🕚": "eleven-o-clock",
      "🕦": "eleven-thirty",
      "🌑": "new-moon",
      "🌒": "waxing-crescent-moon",
      "🌓": "first-quarter-moon",
      "🌔": "waxing-gibbous-moon",
      "🌕": "full-moon",
      "🌖": "waning-gibbous-moon",
      "🌗": "last-quarter-moon",
      "🌘": "waning-crescent-moon",
      "🌙": "crescent-moon",
      "🌚": "new-moon-face",
      "🌛": "first-quarter-moon-face",
      "🌜": "last-quarter-moon-face",
      "🌡": "thermometer",
      "☀": "sun",
      "🌝": "full-moon-face",
      "🌞": "sun-with-face",
      "🪐": "ringed-planet",
      "⭐": "star",
      "🌟": "glowing-star",
      "🌠": "shooting-star",
      "🌌": "milky-way",
      "☁": "cloud",
      "⛅": "sun-behind-cloud",
      "⛈": "cloud-with-lightning-and-rain",
      "🌤": "sun-behind-small-cloud",
      "🌥": "sun-behind-large-cloud",
      "🌦": "sun-behind-rain-cloud",
      "🌧": "cloud-with-rain",
      "🌨": "cloud-with-snow",
      "🌩": "cloud-with-lightning",
      "🌪": "tornado",
      "🌫": "fog",
      "🌬": "wind-face",
      "🌀": "cyclone",
      "🌈": "rainbow",
      "🌂": "closed-umbrella",
      "☂": "umbrella",
      "☔": "umbrella-with-rain-drops",
      "⛱": "umbrella-on-ground",
      "⚡": "high-voltage",
      "❄": "snowflake",
      "☃": "snowman",
      "⛄": "snowman-without-snow",
      "☄": "comet",
      "🔥": "fire",
      "💧": "droplet",
      "🌊": "water-wave",
      "🎃": "jack-o-lantern",
      "🎄": "christmas-tree",
      "🎆": "fireworks",
      "🎇": "sparkler",
      "🧨": "firecracker",
      "✨": "sparkles",
      "🎈": "balloon",
      "🎉": "party-popper",
      "🎊": "confetti-ball",
      "🎋": "tanabata-tree",
      "🎍": "pine-decoration",
      "🎎": "japanese-dolls",
      "🎏": "carp-streamer",
      "🎐": "wind-chime",
      "🎑": "moon-viewing-ceremony",
      "🧧": "red-envelope",
      "🎀": "ribbon",
      "🎁": "wrapped-gift",
      "🎗": "reminder-ribbon",
      "🎟": "admission-tickets",
      "🎫": "ticket",
      "🎖": "military-medal",
      "🏆": "trophy",
      "🏅": "sports-medal",
      "🥇": "1st-place-medal",
      "🥈": "2nd-place-medal",
      "🥉": "3rd-place-medal",
      "⚽": "soccer-ball",
      "⚾": "baseball",
      "🥎": "softball",
      "🏀": "basketball",
      "🏐": "volleyball",
      "🏈": "american-football",
      "🏉": "rugby-football",
      "🎾": "tennis",
      "🥏": "flying-disc",
      "🎳": "bowling",
      "🏏": "cricket-game",
      "🏑": "field-hockey",
      "🏒": "ice-hockey",
      "🥍": "lacrosse",
      "🏓": "ping-pong",
      "🏸": "badminton",
      "🥊": "boxing-glove",
      "🥋": "martial-arts-uniform",
      "🥅": "goal-net",
      "⛳": "flag-in-hole",
      "⛸": "ice-skate",
      "🎣": "fishing-pole",
      "🤿": "diving-mask",
      "🎽": "running-shirt",
      "🎿": "skis",
      "🛷": "sled",
      "🥌": "curling-stone",
      "🎯": "bullseye",
      "🪀": "yo-yo",
      "🪁": "kite",
      "🔫": "water-pistol",
      "🎱": "pool-8-ball",
      "🔮": "crystal-ball",
      "🪄": "magic-wand",
      "🎮": "video-game",
      "🕹": "joystick",
      "🎰": "slot-machine",
      "🎲": "game-die",
      "🧩": "puzzle-piece",
      "🧸": "teddy-bear",
      "🪅": "piñata",
      "🪩": "mirror-ball",
      "🪆": "nesting-dolls",
      "♠": "spade-suit",
      "♥": "heart-suit",
      "♦": "diamond-suit",
      "♣": "club-suit",
      "♟": "chess-pawn",
      "🃏": "joker",
      "🀄": "mahjong-red-dragon",
      "🎴": "flower-playing-cards",
      "🎭": "performing-arts",
      "🖼": "framed-picture",
      "🎨": "artist-palette",
      "🧵": "thread",
      "🪡": "sewing-needle",
      "🧶": "yarn",
      "🪢": "knot",
      "👓": "glasses",
      "🕶": "sunglasses",
      "🥽": "goggles",
      "🥼": "lab-coat",
      "🦺": "safety-vest",
      "👔": "necktie",
      "👕": "t-shirt",
      "👖": "jeans",
      "🧣": "scarf",
      "🧤": "gloves",
      "🧥": "coat",
      "🧦": "socks",
      "👗": "dress",
      "👘": "kimono",
      "🥻": "sari",
      "🩱": "one-piece-swimsuit",
      "🩲": "briefs",
      "🩳": "shorts",
      "👙": "bikini",
      "👚": "woman-s-clothes",
      "🪭": "⊛-folding-hand-fan",
      "👛": "purse",
      "👜": "handbag",
      "👝": "clutch-bag",
      "🛍": "shopping-bags",
      "🎒": "backpack",
      "🩴": "thong-sandal",
      "👞": "man-s-shoe",
      "👟": "running-shoe",
      "🥾": "hiking-boot",
      "🥿": "flat-shoe",
      "👠": "high-heeled-shoe",
      "👡": "woman-s-sandal",
      "🩰": "ballet-shoes",
      "👢": "woman-s-boot",
      "🪮": "⊛-hair-pick",
      "👑": "crown",
      "👒": "woman-s-hat",
      "🎩": "top-hat",
      "🎓": "graduation-cap",
      "🧢": "billed-cap",
      "🪖": "military-helmet",
      "⛑": "rescue-worker-s-helmet",
      "📿": "prayer-beads",
      "💄": "lipstick",
      "💍": "ring",
      "💎": "gem-stone",
      "🔇": "muted-speaker",
      "🔈": "speaker-low-volume",
      "🔉": "speaker-medium-volume",
      "🔊": "speaker-high-volume",
      "📢": "loudspeaker",
      "📣": "megaphone",
      "📯": "postal-horn",
      "🔔": "bell",
      "🔕": "bell-with-slash",
      "🎼": "musical-score",
      "🎵": "musical-note",
      "🎶": "musical-notes",
      "🎙": "studio-microphone",
      "🎚": "level-slider",
      "🎛": "control-knobs",
      "🎤": "microphone",
      "🎧": "headphone",
      "📻": "radio",
      "🎷": "saxophone",
      "🪗": "accordion",
      "🎸": "guitar",
      "🎹": "musical-keyboard",
      "🎺": "trumpet",
      "🎻": "violin",
      "🪕": "banjo",
      "🥁": "drum",
      "🪘": "long-drum",
      "🪇": "maracas",
      "🪈": "flute",
      "📱": "mobile-phone",
      "📲": "mobile-phone-with-arrow",
      "☎": "telephone",
      "📞": "telephone-receiver",
      "📟": "pager",
      "📠": "fax-machine",
      "🔋": "battery",
      "🪫": "low-battery",
      "🔌": "electric-plug",
      "💻": "laptop",
      "🖥": "desktop-computer",
      "🖨": "printer",
      "⌨": "keyboard",
      "🖱": "computer-mouse",
      "🖲": "trackball",
      "💽": "computer-disk",
      "💾": "floppy-disk",
      "💿": "optical-disk",
      "📀": "dvd",
      "🧮": "abacus",
      "🎥": "movie-camera",
      "🎞": "film-frames",
      "📽": "film-projector",
      "🎬": "clapper-board",
      "📺": "television",
      "📷": "camera",
      "📸": "camera-with-flash",
      "📹": "video-camera",
      "📼": "videocassette",
      "🔍": "magnifying-glass-tilted-left",
      "🔎": "magnifying-glass-tilted-right",
      "🕯": "candle",
      "💡": "light-bulb",
      "🔦": "flashlight",
      "🏮": "red-paper-lantern",
      "🪔": "diya-lamp",
      "📔": "notebook-with-decorative-cover",
      "📕": "closed-book",
      "📖": "open-book",
      "📗": "green-book",
      "📘": "blue-book",
      "📙": "orange-book",
      "📚": "books",
      "📓": "notebook",
      "📒": "ledger",
      "📃": "page-with-curl",
      "📜": "scroll",
      "📄": "page-facing-up",
      "📰": "newspaper",
      "🗞": "rolled-up-newspaper",
      "📑": "bookmark-tabs",
      "🔖": "bookmark",
      "🏷": "label",
      "💰": "money-bag",
      "🪙": "coin",
      "💴": "yen-banknote",
      "💵": "dollar-banknote",
      "💶": "euro-banknote",
      "💷": "pound-banknote",
      "💸": "money-with-wings",
      "💳": "credit-card",
      "🧾": "receipt",
      "💹": "chart-increasing-with-yen",
      "✉": "envelope",
      "📧": "e-mail",
      "📨": "incoming-envelope",
      "📩": "envelope-with-arrow",
      "📤": "outbox-tray",
      "📥": "inbox-tray",
      "📦": "package",
      "📫": "closed-mailbox-with-raised-flag",
      "📪": "closed-mailbox-with-lowered-flag",
      "📬": "open-mailbox-with-raised-flag",
      "📭": "open-mailbox-with-lowered-flag",
      "📮": "postbox",
      "🗳": "ballot-box-with-ballot",
      "✏": "pencil",
      "✒": "black-nib",
      "🖋": "fountain-pen",
      "🖊": "pen",
      "🖌": "paintbrush",
      "🖍": "crayon",
      "📝": "memo",
      "💼": "briefcase",
      "📁": "file-folder",
      "📂": "open-file-folder",
      "🗂": "card-index-dividers",
      "📅": "calendar",
      "📆": "tear-off-calendar",
      "🗒": "spiral-notepad",
      "🗓": "spiral-calendar",
      "📇": "card-index",
      "📈": "chart-increasing",
      "📉": "chart-decreasing",
      "📊": "bar-chart",
      "📋": "clipboard",
      "📌": "pushpin",
      "📍": "round-pushpin",
      "📎": "paperclip",
      "🖇": "linked-paperclips",
      "📏": "straight-ruler",
      "📐": "triangular-ruler",
      "✂": "scissors",
      "🗃": "card-file-box",
      "🗄": "file-cabinet",
      "🗑": "wastebasket",
      "🔒": "locked",
      "🔓": "unlocked",
      "🔏": "locked-with-pen",
      "🔐": "locked-with-key",
      "🔑": "key",
      "🗝": "old-key",
      "🔨": "hammer",
      "🪓": "axe",
      "⛏": "pick",
      "⚒": "hammer-and-pick",
      "🛠": "hammer-and-wrench",
      "🗡": "dagger",
      "⚔": "crossed-swords",
      "💣": "bomb",
      "🪃": "boomerang",
      "🏹": "bow-and-arrow",
      "🛡": "shield",
      "🪚": "carpentry-saw",
      "🔧": "wrench",
      "🪛": "screwdriver",
      "🔩": "nut-and-bolt",
      "⚙": "gear",
      "🗜": "clamp",
      "⚖": "balance-scale",
      "🦯": "white-cane",
      "🔗": "link",
      "⛓": "chains",
      "🪝": "hook",
      "🧰": "toolbox",
      "🧲": "magnet",
      "🪜": "ladder",
      "⚗": "alembic",
      "🧪": "test-tube",
      "🧫": "petri-dish",
      "🧬": "dna",
      "🔬": "microscope",
      "🔭": "telescope",
      "📡": "satellite-antenna",
      "💉": "syringe",
      "🩸": "drop-of-blood",
      "💊": "pill",
      "🩹": "adhesive-bandage",
      "🩼": "crutch",
      "🩺": "stethoscope",
      "🩻": "x-ray",
      "🚪": "door",
      "🛗": "elevator",
      "🪞": "mirror",
      "🪟": "window",
      "🛏": "bed",
      "🛋": "couch-and-lamp",
      "🪑": "chair",
      "🚽": "toilet",
      "🪠": "plunger",
      "🚿": "shower",
      "🛁": "bathtub",
      "🪤": "mouse-trap",
      "🪒": "razor",
      "🧴": "lotion-bottle",
      "🧷": "safety-pin",
      "🧹": "broom",
      "🧺": "basket",
      "🧻": "roll-of-paper",
      "🪣": "bucket",
      "🧼": "soap",
      "🫧": "bubbles",
      "🪥": "toothbrush",
      "🧽": "sponge",
      "🧯": "fire-extinguisher",
      "🛒": "shopping-cart",
      "🚬": "cigarette",
      "⚰": "coffin",
      "🪦": "headstone",
      "⚱": "funeral-urn",
      "🧿": "nazar-amulet",
      "🪬": "hamsa",
      "🗿": "moai",
      "🪧": "placard",
      "🪪": "identification-card",
      "🏧": "atm-sign",
      "🚮": "litter-in-bin-sign",
      "🚰": "potable-water",
      "♿": "wheelchair-symbol",
      "🚹": "men-s-room",
      "🚺": "women-s-room",
      "🚻": "restroom",
      "🚼": "baby-symbol",
      "🚾": "water-closet",
      "🛂": "passport-control",
      "🛃": "customs",
      "🛄": "baggage-claim",
      "🛅": "left-luggage",
      "⚠": "warning",
      "🚸": "children-crossing",
      "⛔": "no-entry",
      "🚫": "prohibited",
      "🚳": "no-bicycles",
      "🚭": "no-smoking",
      "🚯": "no-littering",
      "🚱": "non-potable-water",
      "🚷": "no-pedestrians",
      "📵": "no-mobile-phones",
      "🔞": "no-one-under-eighteen",
      "☢": "radioactive",
      "☣": "biohazard",
      "⬆": "up-arrow",
      "↗": "up-right-arrow",
      "➡": "right-arrow",
      "↘": "down-right-arrow",
      "⬇": "down-arrow",
      "↙": "down-left-arrow",
      "⬅": "left-arrow",
      "↖": "up-left-arrow",
      "↕": "up-down-arrow",
      "↔": "left-right-arrow",
      "↩": "right-arrow-curving-left",
      "↪": "left-arrow-curving-right",
      "⤴": "right-arrow-curving-up",
      "⤵": "right-arrow-curving-down",
      "🔃": "clockwise-vertical-arrows",
      "🔄": "counterclockwise-arrows-button",
      "🔙": "back-arrow",
      "🔚": "end-arrow",
      "🔛": "on!-arrow",
      "🔜": "soon-arrow",
      "🔝": "top-arrow",
      "🛐": "place-of-worship",
      "⚛": "atom-symbol",
      "🕉": "om",
      "✡": "star-of-david",
      "☸": "wheel-of-dharma",
      "☯": "yin-yang",
      "✝": "latin-cross",
      "☦": "orthodox-cross",
      "☪": "star-and-crescent",
      "☮": "peace-symbol",
      "🕎": "menorah",
      "🔯": "dotted-six-pointed-star",
      "🪯": "⊛-khanda",
      "♈": "aries",
      "♉": "taurus",
      "♊": "gemini",
      "♋": "cancer",
      "♌": "leo",
      "♍": "virgo",
      "♎": "libra",
      "♏": "scorpio",
      "♐": "sagittarius",
      "♑": "capricorn",
      "♒": "aquarius",
      "♓": "pisces",
      "⛎": "ophiuchus",
      "🔀": "shuffle-tracks-button",
      "🔁": "repeat-button",
      "🔂": "repeat-single-button",
      "▶": "play-button",
      "⏩": "fast-forward-button",
      "⏭": "next-track-button",
      "⏯": "play-or-pause-button",
      "◀": "reverse-button",
      "⏪": "fast-reverse-button",
      "⏮": "last-track-button",
      "🔼": "upwards-button",
      "⏫": "fast-up-button",
      "🔽": "downwards-button",
      "⏬": "fast-down-button",
      "⏸": "pause-button",
      "⏹": "stop-button",
      "⏺": "record-button",
      "⏏": "eject-button",
      "🎦": "cinema",
      "🔅": "dim-button",
      "🔆": "bright-button",
      "📶": "antenna-bars",
      "🛜": "⊛-wireless",
      "📳": "vibration-mode",
      "📴": "mobile-phone-off",
      "♀": "female-sign",
      "♂": "male-sign",
      "⚧": "transgender-symbol",
      "✖": "multiply",
      "➕": "plus",
      "➖": "minus",
      "➗": "divide",
      "🟰": "heavy-equals-sign",
      "♾": "infinity",
      "‼": "double-exclamation-mark",
      "⁉": "exclamation-question-mark",
      "❓": "red-question-mark",
      "❔": "white-question-mark",
      "❕": "white-exclamation-mark",
      "❗": "red-exclamation-mark",
      "〰": "wavy-dash",
      "💱": "currency-exchange",
      "💲": "heavy-dollar-sign",
      "⚕": "medical-symbol",
      "♻": "recycling-symbol",
      "⚜": "fleur-de-lis",
      "🔱": "trident-emblem",
      "📛": "name-badge",
      "🔰": "japanese-symbol-for-beginner",
      "⭕": "hollow-red-circle",
      "✅": "check-mark-button",
      "☑": "check-box-with-check",
      "✔": "check-mark",
      "❌": "cross-mark",
      "❎": "cross-mark-button",
      "➰": "curly-loop",
      "➿": "double-curly-loop",
      "〽": "part-alternation-mark",
      "✳": "eight-spoked-asterisk",
      "✴": "eight-pointed-star",
      "❇": "sparkle",
      "©": "copyright",
      "®": "registered",
      "™": "trade-mark",
      "#️⃣": "keycap-#",
      "*️⃣": "keycap-*",
      "0️⃣": "keycap-0",
      "1️⃣": "keycap-1",
      "2️⃣": "keycap-2",
      "3️⃣": "keycap-3",
      "4️⃣": "keycap-4",
      "5️⃣": "keycap-5",
      "6️⃣": "keycap-6",
      "7️⃣": "keycap-7",
      "8️⃣": "keycap-8",
      "9️⃣": "keycap-9",
      "🔟": "keycap-10",
      "🔠": "input-latin-uppercase",
      "🔡": "input-latin-lowercase",
      "🔢": "input-numbers",
      "🔣": "input-symbols",
      "🔤": "input-latin-letters",
      "🅰": "a-button-(blood-type)",
      "🆎": "ab-button-(blood-type)",
      "🅱": "b-button-(blood-type)",
      "🆑": "cl-button",
      "🆒": "cool-button",
      "🆓": "free-button",
      ℹ: "information",
      "🆔": "id-button",
      "Ⓜ": "circled-m",
      "🆕": "new-button",
      "🆖": "ng-button",
      "🅾": "o-button-(blood-type)",
      "🆗": "ok-button",
      "🅿": "p-button",
      "🆘": "sos-button",
      "🆙": "up!-button",
      "🆚": "vs-button",
      "🈁": "japanese-here-button",
      "🈂": "japanese-service-charge-button",
      "🈷": "japanese-monthly-amount-button",
      "🈶": "japanese-not-free-of-charge-button",
      "🈯": "japanese-reserved-button",
      "🉐": "japanese-bargain-button",
      "🈹": "japanese-discount-button",
      "🈚": "japanese-free-of-charge-button",
      "🈲": "japanese-prohibited-button",
      "🉑": "japanese-acceptable-button",
      "🈸": "japanese-application-button",
      "🈴": "japanese-passing-grade-button",
      "🈳": "japanese-vacancy-button",
      "㊗": "japanese-congratulations-button",
      "㊙": "japanese-secret-button",
      "🈺": "japanese-open-for-business-button",
      "🈵": "japanese-no-vacancy-button",
      "🔴": "red-circle",
      "🟠": "orange-circle",
      "🟡": "yellow-circle",
      "🟢": "green-circle",
      "🔵": "blue-circle",
      "🟣": "purple-circle",
      "🟤": "brown-circle",
      "⚫": "black-circle",
      "⚪": "white-circle",
      "🟥": "red-square",
      "🟧": "orange-square",
      "🟨": "yellow-square",
      "🟩": "green-square",
      "🟦": "blue-square",
      "🟪": "purple-square",
      "🟫": "brown-square",
      "⬛": "black-large-square",
      "⬜": "white-large-square",
      "◼": "black-medium-square",
      "◻": "white-medium-square",
      "◾": "black-medium-small-square",
      "◽": "white-medium-small-square",
      "▪": "black-small-square",
      "▫": "white-small-square",
      "🔶": "large-orange-diamond",
      "🔷": "large-blue-diamond",
      "🔸": "small-orange-diamond",
      "🔹": "small-blue-diamond",
      "🔺": "red-triangle-pointed-up",
      "🔻": "red-triangle-pointed-down",
      "💠": "diamond-with-a-dot",
      "🔘": "radio-button",
      "🔳": "white-square-button",
      "🔲": "black-square-button",
      "🏁": "chequered-flag",
      "🚩": "triangular-flag",
      "🎌": "crossed-flags",
      "🏴": "black-flag",
      "🏳": "white-flag",
      "🏳️‍🌈": "rainbow-flag",
      "🏳️‍⚧️": "transgender-flag",
      "🏴‍☠️": "pirate-flag",
      "🇦🇨": "flag-ascension-island",
      "🇦🇩": "flag-andorra",
      "🇦🇪": "flag-united-arab-emirates",
      "🇦🇫": "flag-afghanistan",
      "🇦🇬": "flag-antigua-and-barbuda",
      "🇦🇮": "flag-anguilla",
      "🇦🇱": "flag-albania",
      "🇦🇲": "flag-armenia",
      "🇦🇴": "flag-angola",
      "🇦🇶": "flag-antarctica",
      "🇦🇷": "flag-argentina",
      "🇦🇸": "flag-american-samoa",
      "🇦🇹": "flag-austria",
      "🇦🇺": "flag-australia",
      "🇦🇼": "flag-aruba",
      "🇦🇽": "flag-åland-islands",
      "🇦🇿": "flag-azerbaijan",
      "🇧🇦": "flag-bosnia-and-herzegovina",
      "🇧🇧": "flag-barbados",
      "🇧🇩": "flag-bangladesh",
      "🇧🇪": "flag-belgium",
      "🇧🇫": "flag-burkina-faso",
      "🇧🇬": "flag-bulgaria",
      "🇧🇭": "flag-bahrain",
      "🇧🇮": "flag-burundi",
      "🇧🇯": "flag-benin",
      "🇧🇱": "flag-st-barthelemy",
      "🇧🇲": "flag-bermuda",
      "🇧🇳": "flag-brunei",
      "🇧🇴": "flag-bolivia",
      "🇧🇶": "flag-caribbean-netherlands",
      "🇧🇷": "flag-brazil",
      "🇧🇸": "flag-bahamas",
      "🇧🇹": "flag-bhutan",
      "🇧🇻": "flag-bouvet-island",
      "🇧🇼": "flag-botswana",
      "🇧🇾": "flag-belarus",
      "🇧🇿": "flag-belize",
      "🇨🇦": "flag-canada",
      "🇨🇨": "flag-cocos-(keeling)-islands",
      "🇨🇩": "flag-congo---kinshasa",
      "🇨🇫": "flag-central-african-republic",
      "🇨🇬": "flag-congo---brazzaville",
      "🇨🇭": "flag-switzerland",
      "🇨🇮": "flag-côte-d-ivoire",
      "🇨🇰": "flag-cook-islands",
      "🇨🇱": "flag-chile",
      "🇨🇲": "flag-cameroon",
      "🇨🇳": "flag-china",
      "🇨🇴": "flag-colombia",
      "🇨🇵": "flag-clipperton-island",
      "🇨🇷": "flag-costa-rica",
      "🇨🇺": "flag-cuba",
      "🇨🇻": "flag-cape-verde",
      "🇨🇼": "flag-curaçao",
      "🇨🇽": "flag-christmas-island",
      "🇨🇾": "flag-cyprus",
      "🇨🇿": "flag-czechia",
      "🇩🇪": "flag-germany",
      "🇩🇬": "flag-diego-garcia",
      "🇩🇯": "flag-djibouti",
      "🇩🇰": "flag-denmark",
      "🇩🇲": "flag-dominica",
      "🇩🇴": "flag-dominican-republic",
      "🇩🇿": "flag-algeria",
      "🇪🇦": "flag-ceuta-and-melilla",
      "🇪🇨": "flag-ecuador",
      "🇪🇪": "flag-estonia",
      "🇪🇬": "flag-egypt",
      "🇪🇭": "flag-western-sahara",
      "🇪🇷": "flag-eritrea",
      "🇪🇸": "flag-spain",
      "🇪🇹": "flag-ethiopia",
      "🇪🇺": "flag-european-union",
      "🇫🇮": "flag-finland",
      "🇫🇯": "flag-fiji",
      "🇫🇰": "flag-falkland-islands",
      "🇫🇲": "flag-micronesia",
      "🇫🇴": "flag-faroe-islands",
      "🇫🇷": "flag-france",
      "🇬🇦": "flag-gabon",
      "🇬🇧": "flag-united-kingdom",
      "🇬🇩": "flag-grenada",
      "🇬🇪": "flag-georgia",
      "🇬🇫": "flag-french-guiana",
      "🇬🇬": "flag-guernsey",
      "🇬🇭": "flag-ghana",
      "🇬🇮": "flag-gibraltar",
      "🇬🇱": "flag-greenland",
      "🇬🇲": "flag-gambia",
      "🇬🇳": "flag-guinea",
      "🇬🇵": "flag-guadeloupe",
      "🇬🇶": "flag-equatorial-guinea",
      "🇬🇷": "flag-greece",
      "🇬🇸": "flag-south-georgia-and-south-sandwich-islands",
      "🇬🇹": "flag-guatemala",
      "🇬🇺": "flag-guam",
      "🇬🇼": "flag-guinea-bissau",
      "🇬🇾": "flag-guyana",
      "🇭🇰": "flag-hong-kong-sar-china",
      "🇭🇲": "flag-heard-and-mcdonald-islands",
      "🇭🇳": "flag-honduras",
      "🇭🇷": "flag-croatia",
      "🇭🇹": "flag-haiti",
      "🇭🇺": "flag-hungary",
      "🇮🇨": "flag-canary-islands",
      "🇮🇩": "flag-indonesia",
      "🇮🇪": "flag-ireland",
      "🇮🇱": "flag-israel",
      "🇮🇲": "flag-isle-of-man",
      "🇮🇳": "flag-india",
      "🇮🇴": "flag-british-indian-ocean-territory",
      "🇮🇶": "flag-iraq",
      "🇮🇷": "flag-iran",
      "🇮🇸": "flag-iceland",
      "🇮🇹": "flag-italy",
      "🇯🇪": "flag-jersey",
      "🇯🇲": "flag-jamaica",
      "🇯🇴": "flag-jordan",
      "🇯🇵": "flag-japan",
      "🇰🇪": "flag-kenya",
      "🇰🇬": "flag-kyrgyzstan",
      "🇰🇭": "flag-cambodia",
      "🇰🇮": "flag-kiribati",
      "🇰🇲": "flag-comoros",
      "🇰🇳": "flag-st-kitts-and-nevis",
      "🇰🇵": "flag-north-korea",
      "🇰🇷": "flag-south-korea",
      "🇰🇼": "flag-kuwait",
      "🇰🇾": "flag-cayman-islands",
      "🇰🇿": "flag-kazakhstan",
      "🇱🇦": "flag-laos",
      "🇱🇧": "flag-lebanon",
      "🇱🇨": "flag-st-lucia",
      "🇱🇮": "flag-liechtenstein",
      "🇱🇰": "flag-sri-lanka",
      "🇱🇷": "flag-liberia",
      "🇱🇸": "flag-lesotho",
      "🇱🇹": "flag-lithuania",
      "🇱🇺": "flag-luxembourg",
      "🇱🇻": "flag-latvia",
      "🇱🇾": "flag-libya",
      "🇲🇦": "flag-morocco",
      "🇲🇨": "flag-monaco",
      "🇲🇩": "flag-moldova",
      "🇲🇪": "flag-montenegro",
      "🇲🇫": "flag-st-martin",
      "🇲🇬": "flag-madagascar",
      "🇲🇭": "flag-marshall-islands",
      "🇲🇰": "flag-north-macedonia",
      "🇲🇱": "flag-mali",
      "🇲🇲": "flag-myanmar-(burma)",
      "🇲🇳": "flag-mongolia",
      "🇲🇴": "flag-macao-sar-china",
      "🇲🇵": "flag-northern-mariana-islands",
      "🇲🇶": "flag-martinique",
      "🇲🇷": "flag-mauritania",
      "🇲🇸": "flag-montserrat",
      "🇲🇹": "flag-malta",
      "🇲🇺": "flag-mauritius",
      "🇲🇻": "flag-maldives",
      "🇲🇼": "flag-malawi",
      "🇲🇽": "flag-mexico",
      "🇲🇾": "flag-malaysia",
      "🇲🇿": "flag-mozambique",
      "🇳🇦": "flag-namibia",
      "🇳🇨": "flag-new-caledonia",
      "🇳🇪": "flag-niger",
      "🇳🇫": "flag-norfolk-island",
      "🇳🇬": "flag-nigeria",
      "🇳🇮": "flag-nicaragua",
      "🇳🇱": "flag-netherlands",
      "🇳🇴": "flag-norway",
      "🇳🇵": "flag-nepal",
      "🇳🇷": "flag-nauru",
      "🇳🇺": "flag-niue",
      "🇳🇿": "flag-new-zealand",
      "🇴🇲": "flag-oman",
      "🇵🇦": "flag-panama",
      "🇵🇪": "flag-peru",
      "🇵🇫": "flag-french-polynesia",
      "🇵🇬": "flag-papua-new-guinea",
      "🇵🇭": "flag-philippines",
      "🇵🇰": "flag-pakistan",
      "🇵🇱": "flag-poland",
      "🇵🇲": "flag-st-pierre-and-miquelon",
      "🇵🇳": "flag-pitcairn-islands",
      "🇵🇷": "flag-puerto-rico",
      "🇵🇸": "flag-palestinian-territories",
      "🇵🇹": "flag-portugal",
      "🇵🇼": "flag-palau",
      "🇵🇾": "flag-paraguay",
      "🇶🇦": "flag-qatar",
      "🇷🇪": "flag-reunion",
      "🇷🇴": "flag-romania",
      "🇷🇸": "flag-serbia",
      "🇷🇺": "flag-russia",
      "🇷🇼": "flag-rwanda",
      "🇸🇦": "flag-saudi-arabia",
      "🇸🇧": "flag-solomon-islands",
      "🇸🇨": "flag-seychelles",
      "🇸🇩": "flag-sudan",
      "🇸🇪": "flag-sweden",
      "🇸🇬": "flag-singapore",
      "🇸🇭": "flag-st-helena",
      "🇸🇮": "flag-slovenia",
      "🇸🇯": "flag-svalbard-and-jan-mayen",
      "🇸🇰": "flag-slovakia",
      "🇸🇱": "flag-sierra-leone",
      "🇸🇲": "flag-san-marino",
      "🇸🇳": "flag-senegal",
      "🇸🇴": "flag-somalia",
      "🇸🇷": "flag-suriname",
      "🇸🇸": "flag-south-sudan",
      "🇸🇹": "flag-são-tome-and-príncipe",
      "🇸🇻": "flag-el-salvador",
      "🇸🇽": "flag-sint-maarten",
      "🇸🇾": "flag-syria",
      "🇸🇿": "flag-eswatini",
      "🇹🇦": "flag-tristan-da-cunha",
      "🇹🇨": "flag-turks-and-caicos-islands",
      "🇹🇩": "flag-chad",
      "🇹🇫": "flag-french-southern-territories",
      "🇹🇬": "flag-togo",
      "🇹🇭": "flag-thailand",
      "🇹🇯": "flag-tajikistan",
      "🇹🇰": "flag-tokelau",
      "🇹🇱": "flag-timor-leste",
      "🇹🇲": "flag-turkmenistan",
      "🇹🇳": "flag-tunisia",
      "🇹🇴": "flag-tonga",
      "🇹🇷": "flag-turkey",
      "🇹🇹": "flag-trinidad-and-tobago",
      "🇹🇻": "flag-tuvalu",
      "🇹🇼": "flag-taiwan",
      "🇹🇿": "flag-tanzania",
      "🇺🇦": "flag-ukraine",
      "🇺🇬": "flag-uganda",
      "🇺🇲": "flag-us-outlying-islands",
      "🇺🇳": "flag-united-nations",
      "🇺🇸": "flag-united-states",
      "🇺🇾": "flag-uruguay",
      "🇺🇿": "flag-uzbekistan",
      "🇻🇦": "flag-vatican-city",
      "🇻🇨": "flag-st-vincent-and-grenadines",
      "🇻🇪": "flag-venezuela",
      "🇻🇬": "flag-british-virgin-islands",
      "🇻🇮": "flag-us-virgin-islands",
      "🇻🇳": "flag-vietnam",
      "🇻🇺": "flag-vanuatu",
      "🇼🇫": "flag-wallis-and-futuna",
      "🇼🇸": "flag-samoa",
      "🇽🇰": "flag-kosovo",
      "🇾🇪": "flag-yemen",
      "🇾🇹": "flag-mayotte",
      "🇿🇦": "flag-south-africa",
      "🇿🇲": "flag-zambia",
      "🇿🇼": "flag-zimbabwe",
      "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "flag-england",
      "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "flag-scotland",
      "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "flag-wales"
    },
    jf = Object.keys(qf);
  async function Ff(e, t, n) {
    let r = (await Bf(t.filenameTemplate, t, e)) || "";
    t.replaceEmojisInFilename && jf.forEach((e) => (r = r.replaceAll(e, " _" + qf[e] + "_ ")));
    const a = t.filenameReplacementCharacter;
    if (
      ((r = (function (e, t = Uf, n = Df) {
        return (
          t.forEach((t) => (e = e.replace(new RegExp("[" + t + "]+", "g"), n))),
          (e = e
            .replace(/\.\.\//g, "")
            .replace(/^\/+/, "")
            .replace(/\/+/g, "/")
            .replace(/\/$/, "")
            .replace(/\.$/, "")
            .replace(/\.\//g, "." + n)
            .replace(/\/\./g, "/" + n)),
          e
        );
      })(r, t.filenameReplacedCharacters, a)),
      t.backgroundSave || (r = r.replace(/\//g, a)),
      !t.keepFilename &&
        (("bytes" == t.filenameMaxLengthUnit && n.getContentSize(r) > t.filenameMaxLength) || r.length > t.filenameMaxLength))
    ) {
      const e = r.match(/(\.[^.]{3,4})$/),
        n = e && e[0] && e[0].length > 1 ? e[0] : "";
      (r =
        "bytes" == t.filenameMaxLengthUnit ? await Hf(r, t.filenameMaxLength - n.length) : r.substring(0, t.filenameMaxLength - n.length)),
        (r = r + "…" + n);
    }
    return r || (r = "Unnamed page"), r;
  }
  async function Bf(e = "", t, n, r, a) {
    const o = new URL(t.saveUrl);
    (e = await h(e, "page-title", () => t.title || "No title", a, t.filenameReplacementCharacter)),
      (e = await h(e, "page-heading", () => t.info.heading || "No heading", a, t.filenameReplacementCharacter)),
      (e = await h(e, "page-language", () => t.info.lang || "No language", a, t.filenameReplacementCharacter)),
      (e = await h(e, "page-description", () => t.info.description || "No description", a, t.filenameReplacementCharacter)),
      (e = await h(e, "page-author", () => t.info.author || "No author", a, t.filenameReplacementCharacter)),
      (e = await h(e, "page-creator", () => t.info.creator || "No creator", a, t.filenameReplacementCharacter)),
      (e = await h(e, "page-publisher", () => t.info.publisher || "No publisher", a, t.filenameReplacementCharacter)),
      await u(t.saveDate),
      await u(t.visitDate, "visit-"),
      (e = await h(e, "url-hash", () => o.hash.substring(1) || "No hash", a, t.filenameReplacementCharacter)),
      (e = await h(e, "url-host", () => o.host.replace(/\/$/, "") || "No host", a, t.filenameReplacementCharacter)),
      (e = await h(e, "url-hostname", () => o.hostname.replace(/\/$/, "") || "No hostname", a, t.filenameReplacementCharacter));
    const i = c(o.href);
    (e = await h(e, "url-href", () => i || "No href", void 0 === a || a, t.filenameReplacementCharacter)),
      (e = await h(e, "url-href-digest-sha-1", i ? async () => n.digest("SHA-1", i) : "No href", a, t.filenameReplacementCharacter)),
      (e = await h(e, "url-href-flat", () => c(o.href) || "No href", !1, t.filenameReplacementCharacter)),
      (e = await h(e, "url-referrer", () => c(t.referrer) || "No referrer", void 0 === a || a, t.filenameReplacementCharacter)),
      (e = await h(e, "url-referrer-flat", () => c(t.referrer) || "No referrer", !1, t.filenameReplacementCharacter)),
      (e = await h(e, "url-password", () => o.password || "No password", a, t.filenameReplacementCharacter)),
      (e = await h(
        e,
        "url-pathname",
        () => c(o.pathname).replace(/^\//, "").replace(/\/$/, "") || "No pathname",
        void 0 === a || a,
        t.filenameReplacementCharacter
      )),
      (e = await h(e, "url-pathname-flat", () => c(o.pathname) || "No pathname", !1, t.filenameReplacementCharacter)),
      (e = await h(e, "url-port", () => o.port || "No port", a, t.filenameReplacementCharacter)),
      (e = await h(e, "url-protocol", () => o.protocol || "No protocol", a, t.filenameReplacementCharacter)),
      (e = await h(e, "url-search", () => o.search.substring(1) || "No search", a, t.filenameReplacementCharacter));
    const s = Array.from(new URLSearchParams(o.search));
    for (const [n, r] of s) e = await h(e, "url-search-" + n, () => r || "", a, t.filenameReplacementCharacter);
    (e = e.replace(/{\s*url-search-[^}\s]*\s*}/gi, "")),
      (e = await h(e, "url-username", () => o.username || "No username", a, t.filenameReplacementCharacter)),
      (e = await h(e, "tab-id", () => String(t.tabId || "No tab id"), a, t.filenameReplacementCharacter)),
      (e = await h(e, "tab-index", () => String(t.tabIndex || "No tab index"), a, t.filenameReplacementCharacter)),
      (e = await h(
        e,
        "url-last-segment",
        () =>
          c(
            (function (e, t) {
              let n = e.pathname.match(/\/([^/]+)$/),
                r = n && n[0];
              r || ((n = e.href.match(/([^/]+)\/?$/)), (r = n && n[0]));
              r || ((n = r.match(/(.*)\.[^.]+$/)), (r = n && n[0]));
              r || (r = e.hostname.replace(/\/+/g, t).replace(/\/$/, ""));
              (n = r.match(/(.*)\.[^.]+$/)), n && n[1] && (r = n[1]);
              return (r = r.replace(/\/$/, "").replace(/^\//, "")), r;
            })(o, t.filenameReplacementCharacter)
          ) || "No last segment",
        a,
        t.filenameReplacementCharacter
      )),
      r &&
        ((e = await h(e, "digest-sha-256", async () => n.digest("SHA-256", r), a, t.filenameReplacementCharacter)),
        (e = await h(e, "digest-sha-384", async () => n.digest("SHA-384", r), a, t.filenameReplacementCharacter)),
        (e = await h(e, "digest-sha-512", async () => n.digest("SHA-512", r), a, t.filenameReplacementCharacter)));
    const l = (t.bookmarkFolders && t.bookmarkFolders.join("/")) || "";
    return (
      (e = await h(e, "bookmark-pathname", () => l, void 0 === a || a, t.filenameReplacementCharacter)),
      (e = await h(e, "bookmark-pathname-flat", () => l, !1, t.filenameReplacementCharacter)),
      (e = await h(e, "profile-name", () => t.profileName, a, t.filenameReplacementCharacter)).trim()
    );
    function c(e) {
      try {
        return decodeURI(e);
      } catch (t) {
        return e;
      }
    }
    async function u(n, r = "") {
      n &&
        ((e = await h(e, r + "datetime-iso", () => n.toISOString(), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "date-iso", () => n.toISOString().split("T")[0], a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "time-iso", () => n.toISOString().split("T")[1].split("Z")[0], a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "date-locale", () => n.toLocaleDateString(), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "time-locale", () => n.toLocaleTimeString(), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "day-locale", () => String(n.getDate()).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "month-locale", () => String(n.getMonth() + 1).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "year-locale", () => String(n.getFullYear()), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "datetime-locale", () => n.toLocaleString(), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "datetime-utc", () => n.toUTCString(), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "day-utc", () => String(n.getUTCDate()).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "month-utc", () => String(n.getUTCMonth() + 1).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "year-utc", () => String(n.getUTCFullYear()), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "hours-locale", () => String(n.getHours()).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "minutes-locale", () => String(n.getMinutes()).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "seconds-locale", () => String(n.getSeconds()).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "hours-utc", () => String(n.getUTCHours()).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "minutes-utc", () => String(n.getUTCMinutes()).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "seconds-utc", () => String(n.getUTCSeconds()).padStart(2, "0"), a, t.filenameReplacementCharacter)),
        (e = await h(e, r + "time-ms", () => String(n.getTime()), a, t.filenameReplacementCharacter)));
    }
    async function h(e, t, n, r, a) {
      let o, i;
      if (e) {
        const s = "{\\s*" + t.replace(/\W|_/g, "[$&]") + "\\s*}";
        let l = new RegExp(s + "\\[\\d+(ch)?\\]", "g");
        if (e.match(l)) {
          const t = e.match(l)[0];
          t.match(/\[(\d+)\]$/)
            ? ((o = Number(t.match(/\[(\d+)\]$/)[1])), (isNaN(o) || o <= 0) && (o = null))
            : ((i = Number(t.match(/\[(\d+)ch\]$/)[1])), (isNaN(i) || i <= 0) && (i = null));
        } else l = new RegExp(s, "g");
        if (e.match(l)) {
          let t = await n();
          return r || (t = t.replace(/\/+/g, a)), o ? (t = await Hf(t, o)) : i && (t = t.substring(0, i)), e.replace(l, t);
        }
      }
      return e;
    }
  }
  function Hf(e, t) {
    const n = new Blob([e]),
      r = new FileReader();
    return (
      r.readAsText(n.slice(0, t)),
      new Promise((n, a) => {
        r.addEventListener(
          "load",
          () => {
            e.startsWith(r.result)
              ? n(r.result)
              : Hf(e, t - 1)
                  .then(n)
                  .catch(a);
          },
          !1
        ),
          r.addEventListener("error", a, !1);
      })
    );
  }
  var Vf = Object.freeze({ __proto__: null, formatFilename: Ff, evalTemplate: Bf }),
    Wf = Object.freeze({
      __proto__: null,
      fontsAltMinifier: hg,
      fontsMinifier: Ng,
      matchedRules: Yg,
      mediasAltMinifier: nf,
      cssRulesMinifier: sf,
      imagesAltMinifier: pf,
      htmlMinifier: Sf,
      serializer: Of,
      templateFormatter: Vf
    });
  const $f = globalThis.Set,
    Gf = globalThis.Map,
    Yf = globalThis.JSON;
  let Qf, Kf;
  class Jf {
    constructor(e) {
      this.options = e;
    }
    async run() {
      const e = globalThis._singleFile_waitForUserScript;
      this.options.userScriptEnabled && e && (await e(Qf.ON_BEFORE_CAPTURE_EVENT_NAME)),
        (this.runner = new ub(this.options, !0)),
        await this.runner.loadPage(),
        await this.runner.initialize(),
        this.options.userScriptEnabled && e && (await e(Qf.ON_AFTER_CAPTURE_EVENT_NAME)),
        await this.runner.run();
    }
    cancel() {
      (this.cancelled = !0), this.runner && this.runner.cancel();
    }
    getPageData() {
      return this.runner.getPageData();
    }
  }
  const Zf = "page-loading",
    Xf = "page-loaded",
    eb = "resource-initializing",
    tb = "resources-initialized",
    nb = "resource-loaded",
    rb = "page-ended",
    ab = "stage-started",
    ob = "stage-ended",
    ib = "stage-task-started",
    sb = "stage-task-ended";
  class lb {
    constructor(e, t) {
      return {
        type: e,
        detail: t,
        PAGE_LOADING: Zf,
        PAGE_LOADED: Xf,
        RESOURCES_INITIALIZING: eb,
        RESOURCES_INITIALIZED: tb,
        RESOURCE_LOADED: nb,
        PAGE_ENDED: rb,
        STAGE_STARTED: ab,
        STAGE_ENDED: ob,
        STAGE_TASK_STARTED: ib,
        STAGE_TASK_ENDED: sb
      };
    }
  }
  const cb = [
    {
      sequential: [
        { action: "preProcessPage" },
        { option: "loadDeferredImagesKeepZoomLevel", action: "resetZoomLevel" },
        { action: "replaceStyleContents" },
        { action: "replaceInvalidElements" },
        { action: "resetCharsetMeta" },
        { option: "saveFavicon", action: "saveFavicon" },
        { action: "replaceCanvasElements" },
        { action: "insertFonts" },
        { action: "insertShadowRootContents" },
        { action: "setInputValues" },
        { option: "moveStylesInHead", action: "moveStylesInHead" },
        { option: "blockScripts", action: "removeEmbedScripts" },
        { option: "selected", action: "removeUnselectedElements" },
        { option: "blockVideos", action: "insertVideoPosters" },
        { option: "blockVideos", action: "insertVideoLinks" },
        { option: "removeFrames", action: "removeFrames" },
        { action: "removeDiscardedResources" },
        { option: "removeHiddenElements", action: "removeHiddenElements" },
        { action: "resolveHrefs" },
        { action: "resolveStyleAttributeURLs" }
      ],
      parallel: [
        { option: "blockVideos", action: "insertMissingVideoPosters" },
        { action: "resolveStylesheetURLs" },
        { option: "!removeFrames", action: "resolveFrameURLs" }
      ]
    },
    {
      sequential: [
        { option: "removeUnusedStyles", action: "removeUnusedStyles" },
        { option: "removeAlternativeMedias", action: "removeAlternativeMedias" },
        { option: "removeUnusedFonts", action: "removeUnusedFonts" }
      ],
      parallel: [
        { action: "processStylesheets" },
        { action: "processStyleAttributes" },
        { action: "processPageResources" },
        { action: "processScripts" }
      ]
    },
    {
      sequential: [{ option: "removeAlternativeImages", action: "removeAlternativeImages" }],
      parallel: [
        { option: "removeAlternativeFonts", action: "removeAlternativeFonts" },
        { option: "!removeFrames", action: "processFrames" }
      ]
    },
    {
      sequential: [
        { action: "replaceStylesheets" },
        { action: "replaceStyleAttributes" },
        { action: "insertVariables" },
        { option: "compressHTML", action: "compressHTML" },
        { action: "cleanupPage" }
      ],
      parallel: [{ option: "enableMaff", action: "insertMAFFMetaData" }, { action: "setDocInfo" }]
    }
  ];
  class ub {
    constructor(e, t) {
      const n = t && e.doc;
      (this.root = t), (this.options = e), (this.options.url = this.options.url || (n && this.options.doc.location.href));
      const r = this.options.url.match(/^.*\//);
      if (
        ((this.options.resourceReferrer = this.options.passReferrerOnError && r && r[0]),
        (this.options.baseURI = n && this.options.doc.baseURI),
        (this.options.rootDocument = t),
        (this.options.updatedResources = this.options.updatedResources || {}),
        (this.options.fontTests = new Gf()),
        (this.batchRequest = new hb()),
        (this.processor = new kb(e, this.batchRequest)),
        n)
      ) {
        const e = Qf.preProcessDoc(this.options.doc, this.options.win, this.options);
        (this.options.canvases = e.canvases),
          (this.options.fonts = e.fonts),
          (this.options.stylesheets = e.stylesheets),
          (this.options.images = e.images),
          (this.options.posters = e.posters),
          (this.options.videos = e.videos),
          (this.options.usedFonts = e.usedFonts),
          (this.options.shadowRoots = e.shadowRoots),
          (this.options.referrer = e.referrer),
          (this.markedElements = e.markedElements),
          (this.invalidElements = e.invalidElements);
      }
      this.options.saveRawPage && (this.options.removeFrames = !0),
        (this.options.content = this.options.content || (n ? Qf.serialize(this.options.doc) : null)),
        (this.onprogress = e.onprogress || (() => {}));
    }
    async loadPage() {
      this.onprogress(new lb(Zf, { pageURL: this.options.url, frame: !this.root })),
        await this.processor.loadPage(this.options.content),
        this.onprogress(new lb(Xf, { pageURL: this.options.url, frame: !this.root }));
    }
    async initialize() {
      this.onprogress(new lb(eb, { pageURL: this.options.url })),
        await this.executeStage(0),
        (this.pendingPromises = this.executeStage(1)),
        this.root && this.options.doc && Qf.postProcessDoc(this.options.doc, this.markedElements, this.invalidElements);
    }
    cancel() {
      (this.cancelled = !0),
        this.batchRequest.cancel(),
        this.root &&
          this.options.frames &&
          this.options.frames.forEach(function (e) {
            e.runner && e.runner.cancel();
          });
    }
    async run() {
      this.root &&
        (this.processor.initialize(this.batchRequest),
        this.onprogress(new lb(tb, { pageURL: this.options.url, max: this.processor.maxResources }))),
        await this.batchRequest.run((e) => {
          (e.pageURL = this.options.url), this.onprogress(new lb(nb, e));
        }, this.options),
        await this.pendingPromises,
        (this.options.doc = null),
        (this.options.win = null),
        await this.executeStage(2),
        await this.executeStage(3),
        this.processor.finalize();
    }
    getDocument() {
      return this.processor.doc;
    }
    getStyleSheets() {
      return this.processor.stylesheets;
    }
    getPageData() {
      return this.root && this.onprogress(new lb(rb, { pageURL: this.options.url })), this.processor.getPageData();
    }
    async executeStage(e) {
      const t = !this.root;
      let n;
      return (
        this.onprogress(new lb(ab, { pageURL: this.options.url, step: e, frame: t })),
        cb[e].sequential.forEach((n) => {
          this.onprogress(new lb(ib, { pageURL: this.options.url, step: e, task: n.action, frame: t })),
            this.cancelled || this.executeTask(n),
            this.onprogress(new lb(sb, { pageURL: this.options.url, step: e, task: n.action, frame: t }));
        }),
        (n = cb[e].parallel
          ? await Promise.all(
              cb[e].parallel.map(async (n) => {
                this.onprogress(new lb(ib, { pageURL: this.options.url, step: e, task: n.action, frame: t })),
                  this.cancelled || (await this.executeTask(n)),
                  this.onprogress(new lb(sb, { pageURL: this.options.url, step: e, task: n.action, frame: t }));
              })
            )
          : Promise.resolve()),
        this.onprogress(new lb(ob, { pageURL: this.options.url, step: e, frame: t })),
        n
      );
    }
    executeTask(e) {
      if (!e.option || (e.option.startsWith("!") && !this.options[e.option]) || this.options[e.option]) return this.processor[e.action]();
    }
  }
  class hb {
    constructor() {
      (this.requests = new Gf()), (this.duplicates = new Gf());
    }
    addURL(e, { asBinary: t, expectedType: n, groupDuplicates: r, baseURI: a, blockMixedContent: o } = {}) {
      return new Promise((i, s) => {
        const l = Yf.stringify([e, t, n, a, o]);
        let c = this.requests.get(l);
        c || ((c = []), this.requests.set(l, c));
        const u = { resolve: i, reject: s };
        if ((c.push(u), r)) {
          let e = this.duplicates.get(l);
          e || ((e = []), this.duplicates.set(l, e)), e.push(u);
        }
      });
    }
    getMaxResources() {
      return this.requests.size;
    }
    run(e, t) {
      const n = [...this.requests.keys()];
      let r = 0;
      return Promise.all(
        n.map(async (n) => {
          const [a, o, i, s, l] = Yf.parse(n),
            c = this.requests.get(n);
          try {
            const u = r;
            r += 1;
            const h = await Qf.getContent(a, {
              asBinary: o,
              expectedType: i,
              maxResourceSize: t.maxResourceSize,
              maxResourceSizeEnabled: t.maxResourceSizeEnabled,
              frameId: t.windowId,
              resourceReferrer: t.resourceReferrer,
              baseURI: s,
              blockMixedContent: l,
              acceptHeaders: t.acceptHeaders,
              networkTimeout: t.networkTimeout
            });
            e({ url: a }),
              this.cancelled ||
                c.forEach((e) => {
                  const t = this.duplicates.get(n),
                    r = t && t.length > 1 && t.includes(e);
                  e.resolve({ content: h.data, indexResource: u, duplicate: r });
                });
          } catch (t) {
            (r += 1), e({ url: a }), c.forEach((e) => e.reject(t));
          }
          this.requests.delete(n);
        })
      );
    }
    cancel() {
      this.cancelled = !0;
      [...this.requests.keys()].forEach((e) => {
        this.requests.get(e).forEach((e) => e.reject()), this.requests.delete(e);
      });
    }
  }
  const db = ["data:text/"],
    pb = "data:image/svg+xml",
    mb = /<script/gi,
    gb = /<noscript/gi,
    fb = /<canvas/gi,
    bb = "shadowroot",
    yb = "data-template-shadow-root",
    wb = "utf-8";
  class kb {
    constructor(e, t) {
      (this.options = e),
        (this.stats = new Vb(e)),
        (this.baseURI = Nb(e.baseURI || e.url)),
        (this.batchRequest = t),
        (this.stylesheets = new Gf()),
        (this.styles = new Gf()),
        (this.cssVariables = new Gf()),
        (this.fontTests = e.fontTests);
    }
    initialize() {
      (this.options.saveDate = new Date()),
        (this.options.saveUrl = this.options.url),
        this.options.enableMaff &&
          (this.maffMetaDataPromise = this.batchRequest.addURL(Qf.resolveURL("index.rdf", this.options.baseURI || this.options.url), {
            expectedType: "document"
          })),
        (this.maxResources = this.batchRequest.getMaxResources()),
        this.options.saveRawPage ||
          this.options.removeFrames ||
          !this.options.frames ||
          this.options.frames.forEach((e) => (this.maxResources += e.maxResources || 0)),
        this.stats.set("processed", "resources", this.maxResources);
    }
    async loadPage(e, t) {
      let n;
      if (
        ((e && !this.options.saveRawPage) ||
          ((n = await Qf.getContent(this.baseURI, {
            maxResourceSize: this.options.maxResourceSize,
            maxResourceSizeEnabled: this.options.maxResourceSizeEnabled,
            charset: t,
            frameId: this.options.windowId,
            resourceReferrer: this.options.resourceReferrer,
            expectedType: "document",
            acceptHeaders: this.options.acceptHeaders,
            networkTimeout: this.options.networkTimeout
          })),
          (e = n.data)),
        (this.doc = Qf.parseDocContent(e, this.baseURI)),
        this.options.saveRawPage)
      ) {
        let t;
        if (
          (this.doc.querySelectorAll('meta[charset], meta[http-equiv="content-type"]').forEach((e) => {
            const n = e.content.split(";")[1];
            n && !t && (t = n.split("=")[1].trim().toLowerCase());
          }),
          t && n.charset && t.toLowerCase() != n.charset.toLowerCase())
        )
          return this.loadPage(e, t);
      }
      (this.workStyleElement = this.doc.createElement("style")),
        this.doc.body.appendChild(this.workStyleElement),
        (this.onEventAttributeNames = (function (e) {
          const t = e.createElement("div"),
            n = [];
          for (const e in t) e.startsWith("on") && n.push(e);
          return n.push("onunload"), n;
        })(this.doc));
    }
    finalize() {
      this.workStyleElement.parentNode && this.workStyleElement.remove();
    }
    async getPageData() {
      Qf.postProcessDoc(this.doc);
      const e = Qf.parseURL(this.baseURI);
      if (this.options.insertSingleFileComment) {
        const e = this.doc.documentElement.firstChild;
        let t = this.options.saveUrl,
          n = this.options.saveDate;
        if (8 == e.nodeType && (e.textContent.includes(Qf.COMMENT_HEADER_LEGACY) || e.textContent.includes(Qf.COMMENT_HEADER))) {
          const r = this.doc.documentElement.firstChild.textContent.split("\n");
          try {
            const [, , a, o] = r;
            (t = a.split("url: ")[1]), (n = o.split("saved date: ")[1]), e.remove();
          } catch (e) {}
        }
        const r = (this.options.infobarContent || "").replace(/\\n/g, "\n").replace(/\\t/g, "\t"),
          a = this.doc.createComment(
            "\n " +
              (this.options.useLegacyCommentHeader ? Qf.COMMENT_HEADER_LEGACY : Qf.COMMENT_HEADER) +
              " \n url: " +
              t +
              (this.options.removeSavedDate ? " " : " \n saved date: " + n) +
              (r ? " \n info: " + r : "") +
              "\n"
          );
        this.doc.documentElement.insertBefore(a, this.doc.documentElement.firstChild);
      }
      if (this.options.insertCanonicalLink && this.options.saveUrl.match(Rb)) {
        let e = this.doc.querySelector("link[rel=canonical]");
        e || ((e = this.doc.createElement("link")), e.setAttribute("rel", "canonical"), this.doc.head.appendChild(e)),
          e && !e.href && (e.href = this.options.saveUrl);
      }
      if (this.options.insertMetaCSP) {
        const e = this.doc.createElement("meta");
        (e.httpEquiv = "content-security-policy"),
          (e.content =
            "default-src 'none'; font-src 'self' data:; img-src 'self' data:; style-src 'unsafe-inline'; media-src 'self' data:; script-src 'unsafe-inline' data:; object-src 'self' data:; frame-src 'self' data:;"),
          this.doc.head.appendChild(e);
      }
      if (this.options.insertMetaNoIndex) {
        let e = this.doc.querySelector("meta[name=robots][content*=noindex]");
        e ||
          ((e = this.doc.createElement("meta")),
          e.setAttribute("name", "robots"),
          e.setAttribute("content", "noindex"),
          this.doc.head.appendChild(e));
      }
      const t = this.doc.createElement("style");
      let n;
      (t.textContent = 'img[src="data:,"],source[src="data:,"]{display:none!important}'),
        this.doc.head.appendChild(t),
        this.options.displayStats && (n = Qf.getContentSize(this.doc.documentElement.outerHTML));
      const r = Qf.serialize(this.doc, this.options.compressHTML);
      if (this.options.displayStats) {
        const e = Qf.getContentSize(r);
        this.stats.set("processed", "HTML bytes", e), this.stats.add("discarded", "HTML bytes", n - e);
      }
      const a = await Qf.formatFilename(r, this.options),
        o = this.baseURI.match(/([^/]*)\/?(\.html?.*)$/) || this.baseURI.match(/\/\/([^/]*)\/?$/),
        i = {
          stats: this.stats.data,
          title: this.options.title || (this.baseURI && o ? o[1] : e.hostname ? e.hostname : ""),
          filename: a,
          content: r
        };
      return (
        this.options.addProof && (i.hash = await Qf.digest("SHA-256", r)),
        this.options.retrieveLinks && (i.links = Array.from(new $f(Array.from(this.doc.links).map((e) => e.href)))),
        i
      );
    }
    preProcessPage() {
      this.options.win &&
        this.doc.body
          .querySelectorAll(':not(svg) title, meta, link[href][rel*="icon"]')
          .forEach((e) => e instanceof this.options.win.HTMLElement && this.doc.head.appendChild(e)),
        this.options.images &&
          !this.options.saveRawPage &&
          (this.doc.querySelectorAll("img[" + Qf.IMAGE_ATTRIBUTE_NAME + "]").forEach((e) => {
            const t = e.getAttribute(Qf.IMAGE_ATTRIBUTE_NAME);
            if (t) {
              const n = this.options.images[Number(t)];
              n &&
                (this.options.removeHiddenElements &&
                ((n.size && !n.size.pxWidth && !n.size.pxHeight) || "" == e.getAttribute(Qf.HIDDEN_CONTENT_ATTRIBUTE_NAME))
                  ? e.setAttribute("src", Qf.EMPTY_RESOURCE)
                  : (n.currentSrc && ((e.dataset.singleFileOriginURL = e.getAttribute("src")), e.setAttribute("src", n.currentSrc)),
                    this.options.loadDeferredImages &&
                      ((e.getAttribute("src") && e.getAttribute("src") != Qf.EMPTY_RESOURCE) ||
                        !e.getAttribute("data-src") ||
                        ((n.src = e.dataset.src), e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")))));
            }
          }),
          this.options.loadDeferredImages &&
            this.doc.querySelectorAll("img[data-srcset]").forEach((e) => {
              !e.getAttribute("srcset") &&
                e.getAttribute("data-srcset") &&
                (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"));
            }));
    }
    replaceStyleContents() {
      this.options.stylesheets &&
        this.doc.querySelectorAll("style").forEach((e, t) => {
          if (e.getAttribute(Qf.STYLESHEET_ATTRIBUTE_NAME)) {
            const n = this.options.stylesheets[Number(t)];
            n && (e.textContent = n);
          }
        });
    }
    removeUnselectedElements() {
      function e(e) {
        (1 == e.nodeType && e.querySelector("svg,style,link")) || !n(e) ? t(e) : e.remove();
      }
      function t(t) {
        n(t) && (t.style.setProperty("display", "none", "important"), Array.from(t.childNodes).forEach(e));
      }
      function n(e) {
        if (1 == e.nodeType) {
          const t = e.tagName && e.tagName.toLowerCase();
          return "svg" != t && "style" != t && "link" != t;
        }
      }
      !(function n(r) {
        let a = !1;
        Array.from(r.childNodes).forEach((r) => {
          if (1 == r.nodeType) {
            const o = "" == r.getAttribute(Qf.SELECTED_CONTENT_ATTRIBUTE_NAME);
            (a = a || o), o ? (r.removeAttribute(Qf.SELECTED_CONTENT_ATTRIBUTE_NAME), n(r)) : a ? e(r) : t(r);
          }
        });
      })(this.doc.body),
        this.doc.body.removeAttribute(Qf.SELECTED_CONTENT_ATTRIBUTE_NAME);
    }
    insertVideoPosters() {
      this.options.posters &&
        this.doc.querySelectorAll("video, video > source").forEach((e) => {
          let t;
          t = "VIDEO" == e.tagName ? e : e.parentElement;
          const n = e.getAttribute(Qf.POSTER_ATTRIBUTE_NAME);
          if (n) {
            const e = this.options.posters[Number(n)];
            !t.getAttribute("poster") && e && t.setAttribute("poster", e);
          }
        });
    }
    insertVideoLinks() {
      const e = "16px";
      this.doc.querySelectorAll("video").forEach((t) => {
        const n = t.getAttribute(Qf.VIDEO_ATTRIBUTE_NAME);
        if (n) {
          const r = this.options.videos[Number(n)],
            a = r.src || t.src;
          if (t && a) {
            const n = this.doc.createElement("a"),
              o = this.doc.createElement("img");
            (n.href = a),
              (n.target = "_blank"),
              n.style.setProperty("z-index", 2147483647, "important"),
              n.style.setProperty("position", "absolute", "important"),
              n.style.setProperty("top", "8px", "important"),
              n.style.setProperty("left", "8px", "important"),
              n.style.setProperty("width", e, "important"),
              n.style.setProperty("height", e, "important"),
              n.style.setProperty("min-width", e, "important"),
              n.style.setProperty("min-height", e, "important"),
              n.style.setProperty("max-width", e, "important"),
              n.style.setProperty("max-height", e, "important"),
              (o.src =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHAB8H+DhhoQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAJUExURQAAAICHi4qKioTuJAkAAAABdFJOUwBA5thmAAAAAWJLR0QCZgt8ZAAAAJJJREFUOI3t070NRCEMA2CnYAOyDyPwpHj/Va7hJ3FzV7zy3ET5JIwoAF6Jk4wzAJAkzxAYG9YRTgB+24wBgKmfrGAKTcEfAY4KRlRoIeBTgKOCERVaCPgU4Khge2GqKOBTgKOCERVaAEC/4PNcnyoSWHpjqkhwKxbcig0Q6AorXYF/+A6eIYD1lVbwG/jdA6/kA2THRAURVubcAAAAAElFTkSuQmCC"),
              o.style.setProperty("width", e, "important"),
              o.style.setProperty("height", e, "important"),
              o.style.setProperty("min-width", e, "important"),
              o.style.setProperty("min-height", e, "important"),
              o.style.setProperty("max-width", e, "important"),
              o.style.setProperty("max-height", e, "important"),
              n.appendChild(o),
              t.insertAdjacentElement("afterend", n);
            const i = t.parentNode.style.getPropertyValue("position");
            ((r.positionParent || (i && "static" == i)) && "static" != r.positionParent) ||
              t.parentNode.style.setProperty("position", "relative", "important");
          }
        }
      });
    }
    removeFrames() {
      const e = this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]');
      this.stats.set("discarded", "frames", e.length),
        this.stats.set("processed", "frames", e.length),
        this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]').forEach((e) => e.remove());
    }
    removeEmbedScripts() {
      const e = "javascript:";
      this.onEventAttributeNames.forEach((e) => this.doc.querySelectorAll("[" + e + "]").forEach((t) => t.removeAttribute(e))),
        this.doc.querySelectorAll("[href]").forEach((t) => {
          t.href && t.href.match && t.href.trim().startsWith(e) && t.removeAttribute("href");
        }),
        this.doc.querySelectorAll("[src]").forEach((t) => {
          t.src && t.src.trim().startsWith(e) && t.removeAttribute("src");
        });
      const t = this.doc.querySelectorAll('script:not([type="application/ld+json"]):not([' + yb + "])");
      this.stats.set("discarded", "scripts", t.length), this.stats.set("processed", "scripts", t.length), t.forEach((e) => e.remove());
    }
    removeDiscardedResources() {
      this.doc.querySelectorAll("." + Qf.SINGLE_FILE_UI_ELEMENT_CLASS).forEach((e) => e.remove());
      const e = new Gf();
      this.doc.querySelectorAll("noscript").forEach((t) => {
        const n = this.doc.createElement("div");
        (n.innerHTML = t.dataset.singleFileDisabledNoscript), t.replaceWith(n), e.set(n, t);
      }),
        this.doc.querySelectorAll("meta[http-equiv=refresh], meta[disabled-http-equiv]").forEach((e) => e.remove()),
        Array.from(e).forEach(([e, t]) => {
          (t.dataset.singleFileDisabledNoscript = e.innerHTML), e.replaceWith(t);
        }),
        this.doc.querySelectorAll('meta[http-equiv="content-security-policy"]').forEach((e) => e.remove());
      const t = this.doc.querySelectorAll(
        'applet, object[data]:not([type="image/svg+xml"]):not([type="image/svg-xml"]):not([type="text/html"]):not([data*=".svg"]):not([data*=".pdf"]), embed[src]:not([src*=".svg"]):not([src*=".pdf"])'
      );
      this.stats.set("discarded", "objects", t.length), this.stats.set("processed", "objects", t.length), t.forEach((e) => e.remove());
      this.doc
        .querySelectorAll(
          "link[rel~=preconnect], link[rel~=prerender], link[rel~=dns-prefetch], link[rel~=preload], link[rel~=manifest], link[rel~=prefetch]"
        )
        .forEach((e) => {
          const t = e
            .getAttribute("rel")
            .replace(/(preconnect|prerender|dns-prefetch|preload|prefetch|manifest)/g, "")
            .trim();
          t.length ? e.setAttribute("rel", t) : e.remove();
        }),
        this.doc
          .querySelectorAll('link[rel*=stylesheet][rel*=alternate][title],link[rel*=stylesheet]:not([href]),link[rel*=stylesheet][href=""]')
          .forEach((e) => e.remove()),
        this.options.removeHiddenElements && this.doc.querySelectorAll("input[type=hidden]").forEach((e) => e.remove()),
        this.options.saveFavicon || this.doc.querySelectorAll('link[rel*="icon"]').forEach((e) => e.remove()),
        this.doc.querySelectorAll("a[ping]").forEach((e) => e.removeAttribute("ping")),
        this.doc.querySelectorAll("link[rel=import][href]").forEach((e) => e.remove());
    }
    replaceInvalidElements() {
      this.doc.querySelectorAll("template[" + Qf.INVALID_ELEMENT_ATTRIBUTE_NAME + "]").forEach((e) => {
        const t = this.doc.createElement("span");
        if (e.content) {
          const n = e.content.firstChild;
          n &&
            (n.hasAttributes() && Array.from(n.attributes).forEach((e) => t.setAttribute(e.name, e.value)),
            n.childNodes.forEach((e) => t.appendChild(e.cloneNode(!0)))),
            e.replaceWith(t);
        }
      });
    }
    resetCharsetMeta() {
      let e;
      this.doc.querySelectorAll('meta[charset], meta[http-equiv="content-type"]').forEach((t) => {
        const n = t.content.split(";")[1];
        n && !e && ((e = n.split("=")[1]), e && (this.charset = e.trim().toLowerCase())), t.remove();
      });
      const t = this.doc.createElement("meta");
      t.setAttribute("charset", wb),
        this.doc.head.firstChild ? this.doc.head.insertBefore(t, this.doc.head.firstChild) : this.doc.head.appendChild(t);
    }
    setInputValues() {
      this.doc.querySelectorAll("input:not([type=radio]):not([type=checkbox])").forEach((e) => {
        const t = e.getAttribute(Qf.INPUT_VALUE_ATTRIBUTE_NAME);
        e.setAttribute("value", t || "");
      }),
        this.doc.querySelectorAll("input[type=radio], input[type=checkbox]").forEach((e) => {
          "true" == e.getAttribute(Qf.INPUT_VALUE_ATTRIBUTE_NAME) && e.setAttribute("checked", "");
        }),
        this.doc.querySelectorAll("textarea").forEach((e) => {
          const t = e.getAttribute(Qf.INPUT_VALUE_ATTRIBUTE_NAME);
          e.textContent = t || "";
        }),
        this.doc.querySelectorAll("select").forEach((e) => {
          e.querySelectorAll("option").forEach((e) => {
            null != e.getAttribute(Qf.INPUT_VALUE_ATTRIBUTE_NAME) && e.setAttribute("selected", "");
          });
        });
    }
    moveStylesInHead() {
      this.doc.querySelectorAll("style").forEach((e) => {
        "" == e.getAttribute(Qf.STYLE_ATTRIBUTE_NAME) && this.doc.head.appendChild(e);
      });
    }
    saveFavicon() {
      let e = this.doc.querySelector('link[href][rel="icon"]');
      e || (e = this.doc.querySelector('link[href][rel="shortcut icon"]')),
        e ||
          ((e = this.doc.createElement("link")),
          e.setAttribute("type", "image/x-icon"),
          e.setAttribute("rel", "shortcut icon"),
          e.setAttribute("href", "/favicon.ico")),
        this.doc.head.appendChild(e);
    }
    replaceCanvasElements() {
      this.options.canvases &&
        this.doc.querySelectorAll("canvas").forEach((e) => {
          const t = e.getAttribute(Qf.CANVAS_ATTRIBUTE_NAME);
          if (t) {
            const n = this.options.canvases[Number(t)];
            n && (Tb.setBackgroundImage(e, "url(" + n.dataURI + ")"), this.stats.add("processed", "canvas", 1));
          }
        });
    }
    insertFonts() {
      if (this.options.fonts && this.options.fonts.length) {
        let e,
          t = this.doc.querySelector("style, link[rel=stylesheet]");
        this.options.fonts.forEach((n) => {
          if (n["font-family"] && n.src) {
            let r = "@font-face{",
              a = "";
            Object.keys(n).forEach((e) => {
              a && (a += ";"), (a += e + ":" + n[e]);
            }),
              (r += a + "}");
            const o = this.doc.createElement("style");
            (o.textContent = r),
              e ? e.insertAdjacentElement("afterend", o) : t ? t.parentElement.insertBefore(o, t) : this.doc.head.appendChild(o),
              (e = o);
          }
        });
      }
    }
    removeHiddenElements() {
      const e = this.doc.querySelectorAll("[" + Qf.HIDDEN_CONTENT_ATTRIBUTE_NAME + "]"),
        t = this.doc.querySelectorAll("[" + Qf.REMOVED_CONTENT_ATTRIBUTE_NAME + "]");
      if ((this.stats.set("discarded", "hidden elements", t.length), this.stats.set("processed", "hidden elements", t.length), e.length)) {
        const t = this.doc.createElement("style");
        (t.textContent = ".sf-hidden{display:none!important;}"),
          this.doc.head.appendChild(t),
          e.forEach((e) => {
            "none" != e.style.getPropertyValue("display") &&
              ("important" == e.style.getPropertyPriority("display")
                ? e.style.setProperty("display", "none", "important")
                : e.classList.add("sf-hidden"));
          });
      }
      t.forEach((e) => e.remove());
    }
    resolveHrefs() {
      this.doc.querySelectorAll("a[href], area[href], link[href]").forEach((e) => {
        const t = e.getAttribute("href").trim();
        if (
          ("LINK" == e.tagName &&
            e.rel.includes("stylesheet") &&
            this.options.saveOriginalURLs &&
            !qb(t) &&
            e.setAttribute("data-sf-original-href", t),
          !jb(t))
        ) {
          let n;
          try {
            n = Qf.resolveURL(t, this.options.baseURI || this.options.url);
          } catch (e) {}
          if (n) {
            const t = Nb(this.options.url);
            !n.startsWith(t + "#") || n.startsWith(t + "#!") || this.options.resolveFragmentIdentifierURLs || (n = n.substring(t.length));
            try {
              e.setAttribute("href", n);
            } catch (e) {}
          }
        }
      });
    }
    async insertMissingVideoPosters() {
      await Promise.all(
        Array.from(this.doc.querySelectorAll("video[src], video > source[src]")).map(async (e) => {
          let t;
          if (((t = "VIDEO" == e.tagName ? e : e.parentElement), !t.poster)) {
            const e = t.getAttribute(Qf.VIDEO_ATTRIBUTE_NAME);
            if (e) {
              const n = this.options.videos[Number(e)],
                r = n.src || t.src;
              if (r) {
                const e = this.doc.createElement("video");
                (e.src = r),
                  e.style.setProperty("width", n.size.pxWidth + "px", "important"),
                  e.style.setProperty("height", n.size.pxHeight + "px", "important"),
                  e.style.setProperty("display", "none", "important"),
                  (e.crossOrigin = "anonymous");
                const a = this.doc.createElement("canvas"),
                  o = a.getContext("2d");
                return (
                  this.options.doc.body.appendChild(e),
                  new Promise((r) => {
                    (e.currentTime = n.currentTime),
                      (e.oncanplay = () => {
                        (a.width = n.size.pxWidth), (a.height = n.size.pxHeight), o.drawImage(e, 0, 0, a.width, a.height);
                        try {
                          t.poster = a.toDataURL("image/png", "");
                        } catch (e) {}
                        e.remove(), r();
                      }),
                      (e.onerror = () => {
                        e.remove(), r();
                      });
                  })
                );
              }
            }
          }
        })
      );
    }
    resolveStyleAttributeURLs() {
      this.doc.querySelectorAll("[style]").forEach((e) => {
        if (this.options.blockStylesheets) e.removeAttribute("style");
        else {
          const t = e.getAttribute("style"),
            n = Kf.parse(t, { context: "declarationList", parseCustomProperty: !0 });
          Tb.resolveStylesheetURLs(n, this.baseURI, this.workStyleElement), this.styles.set(e, n);
        }
      });
    }
    async resolveStylesheetURLs() {
      if (
        (await Promise.all(
          Array.from(this.doc.querySelectorAll("style, link[rel*=stylesheet]")).map(async (t) => {
            const n = Object.assign({}, this.options, { charset: this.charset });
            let r;
            t.media && (r = t.media.toLowerCase());
            const a = { mediaText: r, scoped: Boolean(t.closest("[" + bb + "]")) };
            "LINK" == t.tagName && t.charset && (n.charset = t.charset),
              await e(t, a, this.stylesheets, this.baseURI, n, this.workStyleElement);
          })
        ),
        this.options.rootDocument)
      ) {
        const t = Object.keys(this.options.updatedResources)
          .filter((e) => "stylesheet" == this.options.updatedResources[e].type && !this.options.updatedResources[e].retrieved)
          .map((e) => this.options.updatedResources[e]);
        await Promise.all(
          t.map(async (t) => {
            if (((t.retrieved = !0), !this.options.blockStylesheets)) {
              const n = {},
                r = this.doc.createElement("style");
              this.doc.body.appendChild(r),
                (r.textContent = t.content),
                await e(r, n, this.stylesheets, this.baseURI, this.options, this.workStyleElement);
            }
          })
        );
      }
      async function e(e, t, n, r, a, o) {
        let i;
        if ((n.set(e, t), !a.blockStylesheets))
          if ("LINK" == e.tagName) i = await Tb.resolveLinkStylesheetURLs(e.href, r, a, o);
          else {
            i = Kf.parse(e.textContent, { context: "stylesheet", parseCustomProperty: !0 });
            (await Tb.resolveImportURLs(i, r, a, o)) && (i = Kf.parse(Kf.generate(i), { context: "stylesheet", parseCustomProperty: !0 }));
          }
        i && i.children ? (a.compressCSS && Tb.removeSingleLineCssComments(i), (t.stylesheet = i)) : n.delete(e);
      }
    }
    async resolveFrameURLs() {
      if (!this.options.saveRawPage) {
        const e = Array.from(this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]'));
        await Promise.all(
          e.map(async (e) => {
            if ("OBJECT" == e.tagName) e.setAttribute("data", "data:text/html,");
            else {
              const t = e.getAttribute("src");
              this.options.saveOriginalURLs && t && !qb(t) && e.setAttribute("data-sf-original-src", t),
                e.removeAttribute("src"),
                e.removeAttribute("srcdoc");
            }
            Array.from(e.childNodes).forEach((e) => e.remove());
            const t = e.getAttribute(Qf.WIN_ID_ATTRIBUTE_NAME);
            if (this.options.frames && t) {
              const n = this.options.frames.find((e) => e.windowId == t);
              n &&
                (await (async function (e, t, n, r, a) {
                  (a.insertSingleFileComment = !1),
                    (a.insertCanonicalLink = !1),
                    (a.insertMetaNoIndex = !1),
                    (a.saveFavicon = !1),
                    (a.url = e.baseURI),
                    (a.windowId = n),
                    e.content &&
                      ((a.content = e.content),
                      (a.canvases = e.canvases),
                      (a.fonts = e.fonts),
                      (a.stylesheets = e.stylesheets),
                      (a.images = e.images),
                      (a.posters = e.posters),
                      (a.videos = e.videos),
                      (a.usedFonts = e.usedFonts),
                      (a.shadowRoots = e.shadowRoots),
                      (e.runner = new ub(a)),
                      (e.frameElement = t),
                      await e.runner.loadPage(),
                      await e.runner.initialize(),
                      (e.maxResources = r.getMaxResources()));
                })(n, e, t, this.batchRequest, Object.create(this.options)));
            }
          })
        );
      }
    }
    insertShadowRootContents() {
      const e = this.doc,
        t = this.options;
      if (t.shadowRoots && t.shadowRoots.length) {
        !(function n(r) {
          Array.from(r.querySelectorAll("[" + Qf.SHADOW_ROOT_ATTRIBUTE_NAME + "]")).forEach((r) => {
            const a = r.getAttribute(Qf.SHADOW_ROOT_ATTRIBUTE_NAME);
            if (a) {
              const o = t.shadowRoots[Number(a)];
              if (o) {
                const t = e.createElement("template");
                t.setAttribute(bb, o.mode),
                  o.adoptedStyleSheets &&
                    o.adoptedStyleSheets.forEach((n) => {
                      const r = e.createElement("style");
                      (r.textContent = n), t.appendChild(r);
                    });
                const a = Qf.parseDocContent(o.content);
                if (a.head) {
                  const e = a.head.querySelector("meta[charset]");
                  e && e.remove(), a.head.childNodes.forEach((e) => t.appendChild(a.importNode(e, !0)));
                }
                a.body && a.body.childNodes.forEach((e) => t.appendChild(a.importNode(e, !0))),
                  n(t),
                  r.firstChild ? r.insertBefore(t, r.firstChild) : r.appendChild(t);
              }
            }
          });
        })(this.doc),
          t.blockScripts && this.doc.querySelectorAll("script[" + yb + "]").forEach((e) => e.remove());
        const n = e.createElement("script");
        n.setAttribute(yb, ""),
          (n.textContent = `(()=>{document.currentScript.remove();processNode(document);function processNode(node){node.querySelectorAll("template[${bb}]").forEach(element=>{let shadowRoot = element.parentElement.shadowRoot;if (!shadowRoot) {try {shadowRoot=element.parentElement.attachShadow({mode:element.getAttribute("${bb}")});shadowRoot.innerHTML=element.innerHTML;element.remove()} catch (error) {} if (shadowRoot) {processNode(shadowRoot)}}})}})()`),
          e.body.appendChild(n);
      }
    }
    removeUnusedStyles() {
      this.mediaAllInfo || (this.mediaAllInfo = Qf.getMediaAllInfo(this.doc, this.stylesheets, this.styles));
      const e = Qf.minifyCSSRules(this.stylesheets, this.styles, this.mediaAllInfo);
      this.stats.set("processed", "CSS rules", e.processed), this.stats.set("discarded", "CSS rules", e.discarded);
    }
    removeUnusedFonts() {
      Qf.removeUnusedFonts(this.doc, this.stylesheets, this.styles, this.options);
    }
    removeAlternativeMedias() {
      const e = Qf.minifyMedias(this.stylesheets);
      this.stats.set("processed", "medias", e.processed), this.stats.set("discarded", "medias", e.discarded);
    }
    async processStylesheets() {
      (this.options.fontDeclarations = new Gf()),
        await Promise.all(
          [...this.stylesheets].map(([, e]) =>
            Tb.processStylesheet(e.stylesheet.children, this.baseURI, this.options, this.cssVariables, this.batchRequest)
          )
        );
    }
    async processStyleAttributes() {
      return Promise.all(
        [...this.styles].map(([, e]) => Tb.processStyle(e, this.baseURI, this.options, this.cssVariables, this.batchRequest))
      );
    }
    async processPageResources() {
      this.options.blockImages && this.doc.querySelectorAll("svg").forEach((e) => e.remove());
      let e = [
        ['link[href][rel*="icon"]', "href", !1, !0],
        ['object[type="image/svg+xml"], object[type="image/svg-xml"], object[data*=".svg"], object[data*=".pdf"]', "data"],
        ["img[src], input[src][type=image]", "src", !0],
        ['embed[src*=".svg"], embed[src*=".pdf"]', "src"],
        ["video[poster]", "poster"],
        ["*[background]", "background"],
        ["image", "xlink:href"],
        ["image", "href"]
      ].map(([e, t, n, r]) =>
        Tb.processAttribute(
          this.doc.querySelectorAll(e),
          t,
          this.baseURI,
          this.options,
          "image",
          this.cssVariables,
          this.styles,
          this.batchRequest,
          n,
          r
        )
      );
      (e = e.concat([
        Tb.processXLinks(this.doc.querySelectorAll("use"), this.doc, this.baseURI, this.options, this.batchRequest),
        Tb.processSrcset(this.doc.querySelectorAll("img[srcset], source[srcset]"), this.baseURI, this.options, this.batchRequest)
      ])),
        e.push(
          Tb.processAttribute(
            this.doc.querySelectorAll("audio[src], audio > source[src]"),
            "src",
            this.baseURI,
            this.options,
            "audio",
            this.cssVariables,
            this.styles,
            this.batchRequest
          )
        ),
        e.push(
          Tb.processAttribute(
            this.doc.querySelectorAll("video[src], video > source[src]"),
            "src",
            this.baseURI,
            this.options,
            "video",
            this.cssVariables,
            this.styles,
            this.batchRequest
          )
        ),
        await Promise.all(e),
        this.options.saveFavicon && Tb.processShortcutIcons(this.doc);
    }
    async processScripts() {
      await Promise.all(
        Array.from(this.doc.querySelectorAll("script[src]")).map(async (e) => {
          let t, n;
          if (
            ((n = e.getAttribute("src")),
            this.options.saveOriginalURLs && !qb(n) && e.setAttribute("data-sf-original-src", n),
            e.removeAttribute("integrity"),
            this.options.blockScripts)
          )
            e.removeAttribute("src");
          else {
            e.textContent = "";
            try {
              t = Qf.resolveURL(n, this.baseURI);
            } catch (e) {}
            if (Bb(t)) {
              e.removeAttribute("src");
              const n = await Qf.getContent(t, {
                asBinary: !0,
                charset: this.charset != wb && this.charset,
                maxResourceSize: this.options.maxResourceSize,
                maxResourceSizeEnabled: this.options.maxResourceSizeEnabled,
                frameId: this.options.windowId,
                resourceReferrer: this.options.resourceReferrer,
                baseURI: this.options.baseURI,
                blockMixedContent: this.options.blockMixedContent,
                expectedType: "script",
                acceptHeaders: this.options.acceptHeaders,
                networkTimeout: this.options.networkTimeout
              });
              (n.data = Lb(t, n, this.options)),
                e.setAttribute("src", n.data),
                ("async" != e.getAttribute("async") && "" != e.getAttribute(Qf.ASYNC_SCRIPT_ATTRIBUTE_NAME)) || e.setAttribute("async", "");
            }
          }
          this.stats.add("processed", "scripts", 1);
        })
      );
    }
    removeAlternativeImages() {
      Qf.removeAlternativeImages(this.doc);
    }
    async removeAlternativeFonts() {
      await Qf.removeAlternativeFonts(this.doc, this.stylesheets, this.options.fontDeclarations, this.options.fontTests);
    }
    async processFrames() {
      if (this.options.frames) {
        const e = Array.from(this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]'));
        await Promise.all(
          e.map(async (e) => {
            const t = e.getAttribute(Qf.WIN_ID_ATTRIBUTE_NAME);
            if (t) {
              const n = this.options.frames.find((e) => e.windowId == t);
              if (n)
                if (
                  ((this.options.frames = this.options.frames.filter((e) => e.windowId != t)),
                  n.runner && "" != e.getAttribute(Qf.HIDDEN_FRAME_ATTRIBUTE_NAME))
                ) {
                  this.stats.add("processed", "frames", 1), await n.runner.run();
                  const t = await n.runner.getPageData();
                  e.removeAttribute(Qf.WIN_ID_ATTRIBUTE_NAME);
                  let r = "allow-popups allow-top-navigation allow-top-navigation-by-user-activation";
                  (t.content.match(gb) || t.content.match(fb) || t.content.match(mb)) && (r += " allow-scripts allow-same-origin"),
                    e.setAttribute("sandbox", r),
                    "OBJECT" == e.tagName
                      ? e.setAttribute("data", "data:text/html," + t.content)
                      : "FRAME" == e.tagName
                      ? e.setAttribute("src", "data:text/html," + t.content.replace(/%/g, "%25").replace(/#/g, "%23"))
                      : (e.setAttribute("srcdoc", t.content), e.removeAttribute("src")),
                    this.stats.addAll(t);
                } else e.removeAttribute(Qf.WIN_ID_ATTRIBUTE_NAME), this.stats.add("discarded", "frames", 1);
            }
          })
        );
      }
    }
    replaceStylesheets() {
      this.doc.querySelectorAll("style").forEach((e) => {
        const t = this.stylesheets.get(e);
        t
          ? (this.stylesheets.delete(e), (e.textContent = Ub(t.stylesheet, this.options)), t.mediaText && (e.media = t.mediaText))
          : e.remove();
      }),
        this.doc.querySelectorAll("link[rel*=stylesheet]").forEach((e) => {
          const t = this.stylesheets.get(e);
          if (t) {
            this.stylesheets.delete(e);
            const n = this.doc.createElement("style");
            t.mediaText && (n.media = t.mediaText), (n.textContent = Ub(t.stylesheet, this.options)), e.parentElement.replaceChild(n, e);
          } else e.remove();
        });
    }
    replaceStyleAttributes() {
      this.doc.querySelectorAll("[style]").forEach((e) => {
        const t = this.styles.get(e);
        t ? (this.styles.delete(e), e.setAttribute("style", Ub(t, this.options))) : e.setAttribute("style", "");
      });
    }
    insertVariables() {
      if (this.cssVariables.size) {
        const e = this.doc.createElement("style"),
          t = this.doc.head.querySelector("style");
        t ? this.doc.head.insertBefore(e, t) : this.doc.head.appendChild(e);
        let n = "";
        this.cssVariables.forEach(({ content: e, url: t }, r) => {
          this.cssVariables.delete(r),
            n && (n += ";"),
            (n += `${Ab + r}: `),
            this.options.saveOriginalURLs && (n += `/* original URL: ${t} */ `),
            (n += `url("${e}")`);
        }),
          (e.textContent = ":root{" + n + "}");
      }
    }
    compressHTML() {
      let e;
      this.options.displayStats && (e = Qf.getContentSize(this.doc.documentElement.outerHTML)),
        Qf.minifyHTML(this.doc, { PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME: Qf.PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME }),
        this.options.displayStats && this.stats.add("discarded", "HTML bytes", e - Qf.getContentSize(this.doc.documentElement.outerHTML));
    }
    cleanupPage() {
      this.doc.querySelectorAll("base").forEach((e) => e.remove());
      const e = this.doc.head.querySelector("meta[charset]");
      e &&
        (this.doc.head.insertBefore(e, this.doc.head.firstChild),
        1 == this.doc.head.querySelectorAll("*").length &&
          0 == this.doc.body.childNodes.length &&
          this.doc.head.querySelector("meta[charset]").remove());
    }
    resetZoomLevel() {
      const e = this.doc.documentElement.style.getPropertyValue("-sf-transform"),
        t = this.doc.documentElement.style.getPropertyPriority("-sf-transform"),
        n = this.doc.documentElement.style.getPropertyValue("-sf-transform-origin"),
        r = this.doc.documentElement.style.getPropertyPriority("-sf-transform-origin"),
        a = this.doc.documentElement.style.getPropertyValue("-sf-min-height"),
        o = this.doc.documentElement.style.getPropertyPriority("-sf-min-height");
      this.doc.documentElement.style.setProperty("transform", e, t),
        this.doc.documentElement.style.setProperty("transform-origin", n, r),
        this.doc.documentElement.style.setProperty("min-height", a, o),
        this.doc.documentElement.style.removeProperty("-sf-transform"),
        this.doc.documentElement.style.removeProperty("-sf-transform-origin"),
        this.doc.documentElement.style.removeProperty("-sf-min-height");
    }
    async insertMAFFMetaData() {
      const e = await this.maffMetaDataPromise;
      if (e && e.content) {
        const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
          n = Qf.parseXMLContent(e.content),
          r = n.querySelector("RDF > Description > originalurl"),
          a = n.querySelector("RDF > Description > archivetime");
        if ((r && (this.options.saveUrl = r.getAttributeNS(t, "resource")), a)) {
          const e = a.getAttributeNS(t, "resource");
          if (e) {
            const t = new Date(e);
            isNaN(t.getTime()) || (this.options.saveDate = new Date(e));
          }
        }
      }
    }
    async setDocInfo() {
      const e = this.doc.querySelector("title"),
        t = this.doc.querySelector("meta[name=description]"),
        n = this.doc.querySelector("meta[name=author]"),
        r = this.doc.querySelector("meta[name=creator]"),
        a = this.doc.querySelector("meta[name=publisher]"),
        o = this.doc.querySelector("h1");
      (this.options.title = e ? e.textContent.trim() : ""),
        (this.options.info = {
          description: t && t.content ? t.content.trim() : "",
          lang: this.doc.documentElement.lang,
          author: n && n.content ? n.content.trim() : "",
          creator: r && r.content ? r.content.trim() : "",
          publisher: a && a.content ? a.content.trim() : "",
          heading: o && o.textContent ? o.textContent.trim() : ""
        }),
        (this.options.infobarContent = await Qf.evalTemplate(this.options.infobarTemplate, this.options, null, !0));
    }
  }
  const vb = "data:",
    xb = "about:blank",
    Eb = /(#.+?)$/,
    Ab = "--sf-img-",
    Sb = 524288;
  class Tb {
    static setBackgroundImage(e, t, n) {
      e.style.setProperty("background-blend-mode", "normal", "important"),
        e.style.setProperty("background-clip", "content-box", "important"),
        e.style.setProperty("background-position", n && n["background-position"] ? n["background-position"] : "center", "important"),
        e.style.setProperty("background-color", n && n["background-color"] ? n["background-color"] : "transparent", "important"),
        e.style.setProperty("background-image", t, "important"),
        e.style.setProperty("background-size", n && n["background-size"] ? n["background-size"] : "100% 100%", "important"),
        e.style.setProperty("background-origin", "content-box", "important"),
        e.style.setProperty("background-repeat", "no-repeat", "important");
    }
    static processShortcutIcons(e) {
      let t = Db(Array.from(e.querySelectorAll('link[href][rel="icon"], link[href][rel="shortcut icon"]')));
      t || ((t = Db(Array.from(e.querySelectorAll('link[href][rel*="icon"]')))), t && (t.rel = "icon")),
        t &&
          e.querySelectorAll('link[href][rel*="icon"]').forEach((e) => {
            e != t && e.remove();
          });
    }
    static removeSingleLineCssComments(e) {
      const t = [];
      for (let n = e.children.head; n; n = n.next) {
        const e = n.data;
        "Raw" == e.type && e.value && e.value.trim().startsWith("//") && t.push(n);
      }
      t.forEach((t) => e.children.remove(t));
    }
    static async resolveImportURLs(e, t, n, r, a = new $f()) {
      let o;
      Tb.resolveStylesheetURLs(e, t, r);
      const i = ((s = e), Kf.findAll(s, (e) => "Atrule" == e.type && "import" == e.name));
      var s;
      return (
        await Promise.all(
          i.map(async (e) => {
            const i = Kf.find(e, (e) => "Url" == e.type) || Kf.find(e, (e) => "String" == e.type);
            if (i) {
              let c = Nb(i.value);
              if (!jb(c) && Fb(c)) {
                i.value = Qf.EMPTY_RESOURCE;
                try {
                  c = Qf.resolveURL(c, t);
                } catch (e) {}
                if (Bb(c) && !a.has(c)) {
                  const t = await (async function (e) {
                    const t = await Qf.getContent(e, {
                      maxResourceSize: n.maxResourceSize,
                      maxResourceSizeEnabled: n.maxResourceSizeEnabled,
                      validateTextContentType: !0,
                      frameId: n.frameId,
                      charset: n.charset,
                      resourceReferrer: n.resourceReferrer,
                      baseURI: n.baseURI,
                      blockMixedContent: n.blockMixedContent,
                      expectedType: "stylesheet",
                      acceptHeaders: n.acceptHeaders,
                      networkTimeout: n.networkTimeout
                    });
                    return Pb(t.data, t.charset) || Pb(t.data, n.charset)
                      ? t
                      : ((n = Object.assign({}, n, { charset: Mb(t.data) })),
                        Qf.getContent(e, {
                          maxResourceSize: n.maxResourceSize,
                          maxResourceSizeEnabled: n.maxResourceSizeEnabled,
                          validateTextContentType: !0,
                          frameId: n.frameId,
                          charset: n.charset,
                          resourceReferrer: n.resourceReferrer,
                          baseURI: n.baseURI,
                          blockMixedContent: n.blockMixedContent,
                          expectedType: "stylesheet",
                          acceptHeaders: n.acceptHeaders,
                          networkTimeout: n.networkTimeout
                        }));
                  })(c);
                  (c = t.resourceURL), (t.data = Lb(c, t, n)), t.data && t.data.match(/^<!doctype /i) && (t.data = "");
                  const i = Kf.find(e, (e) => "MediaQueryList" == e.type);
                  i && (t.data = ((s = t.data), (l = Kf.generate(i)) ? "@media " + l + "{ " + s + " }" : s));
                  const u = Kf.parse(t.data, { context: "stylesheet", parseCustomProperty: !0 }),
                    h = new $f(a);
                  h.add(c), await Tb.resolveImportURLs(u, c, n, r, h);
                  for (let t of Object.keys(u)) e[t] = u[t];
                  o = !0;
                }
              }
            }
            var s, l;
          })
        ),
        o
      );
    }
    static resolveStylesheetURLs(e, t, n) {
      Ob(e).map((e) => {
        const r = e.value;
        let a = Nb(r);
        if (
          !jb(a) &&
          ((n.textContent = 'tmp { content:"' + a + '"}'),
          n.sheet && n.sheet.cssRules && (a = Qf.removeQuotes(n.sheet.cssRules[0].style.getPropertyValue("content"))),
          !jb(a))
        )
          if (!a || Fb(a)) {
            let n;
            if (!r.startsWith("#"))
              try {
                n = Qf.resolveURL(a, t);
              } catch (e) {}
            Bb(n) && (e.value = n);
          } else e.value = Qf.EMPTY_RESOURCE;
      });
    }
    static async resolveLinkStylesheetURLs(e, t, n, r) {
      if ((e = Nb(e)) && e != t && e != xb) {
        const a = await Qf.getContent(e, {
          maxResourceSize: n.maxResourceSize,
          maxResourceSizeEnabled: n.maxResourceSizeEnabled,
          charset: n.charset,
          frameId: n.frameId,
          resourceReferrer: n.resourceReferrer,
          validateTextContentType: !0,
          baseURI: t,
          blockMixedContent: n.blockMixedContent,
          expectedType: "stylesheet",
          acceptHeaders: n.acceptHeaders,
          networkTimeout: n.networkTimeout
        });
        if (!Pb(a.data, a.charset) && !Pb(a.data, n.charset))
          return (n = Object.assign({}, n, { charset: Mb(a.data) })), Tb.resolveLinkStylesheetURLs(e, t, n, r);
        (e = a.resourceURL), (a.data = Lb(a.resourceURL, a, n)), a.data && a.data.match(/^<!doctype /i) && (a.data = "");
        let o = Kf.parse(a.data, { context: "stylesheet", parseCustomProperty: !0 });
        return (
          (await Tb.resolveImportURLs(o, e, n, r)) && (o = Kf.parse(Kf.generate(o), { context: "stylesheet", parseCustomProperty: !0 })), o
        );
      }
    }
    static async processStylesheet(e, t, n, r, a) {
      const o = [],
        i = [];
      for (let l = e.head; l; l = l.next) {
        const e = l.data;
        "Atrule" == e.type && "charset" == e.name
          ? i.push(l)
          : e.block &&
            e.block.children &&
            ("Rule" == e.type
              ? o.push(this.processStyle(e, t, n, r, a))
              : "Atrule" != e.type || ("media" != e.name && "supports" != e.name)
              ? "Atrule" == e.type && "font-face" == e.name && o.push(s(e))
              : o.push(this.processStylesheet(e.block.children, t, n, r, a)));
      }
      async function s(e) {
        const r = Ob(e);
        await Promise.all(
          r.map(async (e) => {
            const r = e.value;
            if (n.blockFonts) e.value = Qf.EMPTY_RESOURCE;
            else {
              const o = Nb(r);
              if (!jb(o) && Bb(o)) {
                let { content: i } = await a.addURL(o, {
                    asBinary: !0,
                    expectedType: "font",
                    baseURI: t,
                    blockMixedContent: n.blockMixedContent
                  }),
                  s = n.fontDeclarations.get(e);
                s || ((s = []), n.fontDeclarations.set(e, s)),
                  s.push(o),
                  !qb(o) && n.saveOriginalURLs ? (e.value = "-sf-url-original(" + Yf.stringify(r) + ") " + i) : (e.value = i);
              }
            }
          })
        );
      }
      i.forEach((t) => e.remove(t)), await Promise.all(o);
    }
    static async processStyle(e, t, n, r, a) {
      const o = Ob(e);
      await Promise.all(
        o.map(async (e) => {
          const t = e.value;
          if (n.blockImages) e.value = Qf.EMPTY_RESOURCE;
          else {
            const o = Nb(t);
            if (!jb(o) && Bb(o)) {
              let {
                content: i,
                indexResource: s,
                duplicate: l
              } = await a.addURL(o, { asBinary: !0, expectedType: "image", groupDuplicates: n.groupDuplicateImages });
              if (!t.startsWith("#")) {
                const a = n.maxSizeDuplicateImages || Sb;
                if (l && n.groupDuplicateImages && Qf.getContentSize(i) < a) {
                  const n = Kf.parse("var(" + Ab + s + ")", { context: "value" });
                  for (let t of Object.keys(n.children.head.data)) e[t] = n.children.head.data[t];
                  r.set(s, { content: i, url: t });
                } else !qb(o) && n.saveOriginalURLs ? (e.value = "-sf-url-original(" + Yf.stringify(t) + ") " + i) : (e.value = i);
              }
            }
          }
        })
      );
    }
    static async processAttribute(e, t, n, r, a, o, i, s, l, c) {
      function u(e, t, n) {
        "video" == n || "audio" == n ? e.removeAttribute(t) : e.setAttribute(t, Qf.EMPTY_RESOURCE);
      }
      await Promise.all(
        Array.from(e).map(async (e) => {
          let h = e.getAttribute(t);
          if (null != h) {
            h = Nb(h);
            let d = e.dataset.singleFileOriginURL;
            if (
              (r.saveOriginalURLs && !qb(h) && e.setAttribute("data-sf-original-" + t, h),
              delete e.dataset.singleFileOriginURL,
              r["block" + a.charAt(0).toUpperCase() + a.substring(1) + "s"])
            )
              u(e, t, a);
            else if (!jb(h) && (u(e, t, a), Fb(h))) {
              try {
                h = Qf.resolveURL(h, n);
              } catch (e) {}
              if (Bb(h)) {
                let {
                  content: u,
                  indexResource: p,
                  duplicate: m
                } = await s.addURL(h, {
                  asBinary: !0,
                  expectedType: a,
                  groupDuplicates: r.groupDuplicateImages && "IMG" == e.tagName && "src" == t
                });
                if (d && u == Qf.EMPTY_RESOURCE) {
                  try {
                    d = Qf.resolveURL(d, n);
                  } catch (e) {}
                  try {
                    (h = d),
                      (u = (
                        await Qf.getContent(h, {
                          asBinary: !0,
                          expectedType: a,
                          maxResourceSize: r.maxResourceSize,
                          maxResourceSizeEnabled: r.maxResourceSizeEnabled,
                          frameId: r.windowId,
                          resourceReferrer: r.resourceReferrer,
                          acceptHeaders: r.acceptHeaders,
                          networkTimeout: r.networkTimeout
                        })
                      ).data);
                  } catch (e) {}
                }
                if (c && u == Qf.EMPTY_RESOURCE) e.remove();
                else if (u !== Qf.EMPTY_RESOURCE) {
                  if (!db.filter((e) => u.startsWith(e)).length) {
                    const n = u.startsWith(pb),
                      s = r.maxSizeDuplicateImages || Sb;
                    if ("image" == a && l && m && !n && Qf.getContentSize(u) < s)
                      if (Tb.replaceImageSource(e, Ab + p, r)) {
                        o.set(p, { content: u, url: d });
                        const t = Kf.parse(e.getAttribute("style"), { context: "declarationList", parseCustomProperty: !0 });
                        i.set(e, t);
                      } else e.setAttribute(t, u);
                    else e.setAttribute(t, u);
                  }
                }
              }
            }
          }
        })
      );
    }
    static async processXLinks(e, t, n, r, a) {
      let o = "xlink:href";
      await Promise.all(
        Array.from(e).map(async (e) => {
          let t = e.getAttribute(o);
          null == t && ((o = "href"), (t = e.getAttribute(o))), r.saveOriginalURLs && !qb(t) && e.setAttribute("data-sf-original-href", t);
          let i = Nb(t);
          if (r.blockImages) e.setAttribute(o, Qf.EMPTY_RESOURCE);
          else if (Fb(i) && !jb(i)) {
            e.setAttribute(o, Qf.EMPTY_RESOURCE);
            try {
              i = Qf.resolveURL(i, n);
            } catch (e) {}
            if (Bb(i)) {
              const r = t.match(Eb);
              if (t.startsWith(n + "#")) e.setAttribute(o, r[0]);
              else {
                const t = await a.addURL(i, { expectedType: "image" }),
                  n = Qf.parseSVGContent(t.content);
                if (r && r[0]) {
                  let t;
                  try {
                    t = n.querySelector(r[0]);
                  } catch (e) {}
                  t && (e.setAttribute(o, r[0]), e.parentElement.insertBefore(t, e.parentElement.firstChild));
                } else {
                  const t = await a.addURL(i, { expectedType: "image" });
                  e.setAttribute(o, pb + "," + t);
                }
              }
            }
          } else i == r.url && e.setAttribute(o, t.substring(i.length));
        })
      );
    }
    static async processSrcset(e, t, n, r) {
      await Promise.all(
        Array.from(e).map(async (e) => {
          const a = e.getAttribute("srcset"),
            o = Qf.parseSrcset(a);
          if ((n.saveOriginalURLs && !qb(a) && e.setAttribute("data-sf-original-srcset", a), n.blockImages)) e.setAttribute("srcset", "");
          else {
            const n = await Promise.all(
              o.map(async (e) => {
                let n = Nb(e.url);
                if (jb(n)) return n + (e.w ? " " + e.w + "w" : e.d ? " " + e.d + "x" : "");
                if (Fb(n)) {
                  try {
                    n = Qf.resolveURL(n, t);
                  } catch (e) {}
                  if (Bb(n)) {
                    const { content: t } = await r.addURL(n, { asBinary: !0, expectedType: "image" });
                    return db.filter((e) => t.startsWith(e)).length ? "" : t + (e.w ? " " + e.w + "w" : e.d ? " " + e.d + "x" : "");
                  }
                  return "";
                }
                return "";
              })
            );
            e.setAttribute("srcset", n.join(", "));
          }
        })
      );
    }
    static replaceImageSource(e, t, n) {
      if (e.getAttribute(Qf.IMAGE_ATTRIBUTE_NAME)) {
        const r = n.images[Number(e.getAttribute(Qf.IMAGE_ATTRIBUTE_NAME))];
        if (r && r.replaceable) {
          e.setAttribute(
            "src",
            `${pb},<svg xmlns="http://www.w3.org/2000/svg" width="${r.size.pxWidth}" height="${r.size.pxHeight}"><rect fill-opacity="0"/></svg>`
          );
          const n = {};
          return (
            ("content" == r.objectFit || "cover" == r.objectFit) && r.objectFit && (n["background-size"] = r.objectFit),
            r.objectPosition && (n["background-position"] = r.objectPosition),
            r.backgroundColor && (n["background-color"] = r.backgroundColor),
            Tb.setBackgroundImage(e, "var(" + t + ")", n),
            e.removeAttribute(Qf.IMAGE_ATTRIBUTE_NAME),
            !0
          );
        }
      }
    }
  }
  const Cb = "blob:",
    Rb = /^https?:\/\//,
    _b = /^file:\/\//,
    Ib = /^https?:\/\/+\s*$/,
    zb = /^(https?:\/\/|file:\/\/|blob:).+/;
  function Lb(e, t, n) {
    return n.rootDocument && n.updatedResources[e] ? ((n.updatedResources[e].retrieved = !0), n.updatedResources[e].content) : t.data || "";
  }
  function Nb(e) {
    return !e || e.startsWith(vb) ? e : e.split("#")[0];
  }
  function Pb(e, t = wb) {
    const n = Mb(e);
    return !n || n == t.toLowerCase();
  }
  function Mb(e) {
    const t = e.match(/^@charset\s+"([^"]*)";/i);
    if (t && t[1]) return t[1].toLowerCase().trim();
  }
  function Ob(e) {
    return Kf.findAll(e, (e) => "Url" == e.type);
  }
  function Ub(e, t) {
    let n = Kf.generate(e);
    return (
      t.compressCSS && (n = Qf.compressCSS(n)),
      t.saveOriginalURLs &&
        (n = (function (e) {
          return e.replace(/url\(-sf-url-original\\\(\\"(.*?)\\"\\\)\\ /g, "/* original URL: $1 */url(");
        })(n)),
      n
    );
  }
  function Db(e) {
    return (
      (e = e.filter((e) => e.href != Qf.EMPTY_RESOURCE)).sort((e, t) => (parseInt(t.sizes, 10) || 16) - (parseInt(e.sizes, 10) || 16)), e[0]
    );
  }
  function qb(e) {
    return e && (e.startsWith(vb) || e.startsWith(Cb));
  }
  function jb(e) {
    return e && (e.startsWith(vb) || e == xb);
  }
  function Fb(e) {
    return e && !e.match(Ib);
  }
  function Bb(e) {
    return Fb(e) && (e.match(Rb) || e.match(_b) || e.startsWith(Cb)) && e.match(zb);
  }
  const Hb = {
    discarded: {
      "HTML bytes": 0,
      "hidden elements": 0,
      scripts: 0,
      objects: 0,
      "audio sources": 0,
      "video sources": 0,
      frames: 0,
      "CSS rules": 0,
      canvas: 0,
      stylesheets: 0,
      resources: 0,
      medias: 0
    },
    processed: {
      "HTML bytes": 0,
      "hidden elements": 0,
      scripts: 0,
      objects: 0,
      "audio sources": 0,
      "video sources": 0,
      frames: 0,
      "CSS rules": 0,
      canvas: 0,
      stylesheets: 0,
      resources: 0,
      medias: 0
    }
  };
  class Vb {
    constructor(e) {
      (this.options = e), e.displayStats && (this.data = Yf.parse(Yf.stringify(Hb)));
    }
    set(e, t, n) {
      this.options.displayStats && (this.data[e][t] = n);
    }
    add(e, t, n) {
      this.options.displayStats && (this.data[e][t] += n);
    }
    addAll(e) {
      this.options.displayStats &&
        (Object.keys(this.data.discarded).forEach((t) => this.add("discarded", t, e.stats.discarded[t] || 0)),
        Object.keys(this.data.processed).forEach((t) => this.add("processed", t, e.stats.processed[t] || 0)));
    }
  }
  const Wb = 1048576,
    $b = "text/",
    Gb = ["~", "+", "\\\\", "?", "%", "*", ":", "|", '"', "<", ">", "\0-", ""],
    Yb = "_",
    Qb = globalThis.URL,
    Kb = globalThis.DOMParser,
    Jb = globalThis.Blob,
    Zb = globalThis.FileReader,
    Xb = (e, t) => globalThis.fetch(e, t),
    ey = globalThis.crypto,
    ty = globalThis.TextDecoder,
    ny = globalThis.TextEncoder;
  function ry(e) {
    return (
      ((e = e || {}).fetch = e.fetch || Xb),
      (e.frameFetch = e.frameFetch || e.fetch || Xb),
      {
        getContent: async function (t, n) {
          let r, a, o, i;
          const s = e.fetch,
            l = e.frameFetch;
          if (n.blockMixedContent && /^https:/i.test(n.baseURI) && !/^https:/i.test(t)) return ay(t, n);
          o = n.networkTimeout
            ? new Promise((e, t) => {
                (i = e), (a = globalThis.setTimeout(() => t(new Error("network timeout")), n.networkTimeout));
              })
            : new Promise((e) => {
                i = e;
              });
          try {
            const e = n.acceptHeaders ? n.acceptHeaders[n.expectedType] : "*/*";
            if (n.frameId)
              try {
                r = await Promise.race([l(t, { frameId: n.frameId, referrer: n.resourceReferrer, headers: { accept: e } }), o]);
              } catch (n) {
                r = await Promise.race([s(t, { headers: { accept: e } }), o]);
              }
            else r = await Promise.race([s(t, { referrer: n.resourceReferrer, headers: { accept: e } }), o]);
          } catch (e) {
            return ay(t, n);
          } finally {
            i(), n.networkTimeout && globalThis.clearTimeout(a);
          }
          let c;
          try {
            c = await r.arrayBuffer();
          } catch (e) {
            return { data: n.asBinary ? ie : "", resourceURL: t };
          }
          t = r.url || t;
          let u,
            h = "";
          try {
            const e = new Om(r.headers.get("content-type"));
            (h = e.type + "/" + e.subtype), (u = e.parameters.get("charset"));
          } catch (e) {}
          h ||
            (h = (function (e, t) {
              if ("image" == e) {
                if (n([255, 255, 255, 255], [0, 0, 1, 0])) return "image/x-icon";
                if (n([255, 255, 255, 255], [0, 0, 2, 0])) return "image/x-icon";
                if (n([255, 255], [78, 77])) return "image/bmp";
                if (n([255, 255, 255, 255, 255, 255], [71, 73, 70, 56, 57, 97])) return "image/gif";
                if (n([255, 255, 255, 255, 255, 255], [71, 73, 70, 56, 59, 97])) return "image/gif";
                if (n([255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255], [82, 73, 70, 70, 0, 0, 0, 0, 87, 69, 66, 80, 86, 80]))
                  return "image/webp";
                if (n([255, 255, 255, 255, 255, 255, 255, 255], [137, 80, 78, 71, 13, 10, 26, 10])) return "image/png";
                if (n([255, 255, 255], [255, 216, 255])) return "image/jpeg";
              }
              if ("font" == e) {
                if (
                  n(
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 80]
                  )
                )
                  return "application/vnd.ms-fontobject";
                if (n([255, 255, 255, 255], [0, 1, 0, 0])) return "font/ttf";
                if (n([255, 255, 255, 255], [79, 84, 84, 79])) return "font/otf";
                if (n([255, 255, 255, 255], [116, 116, 99, 102])) return "font/collection";
                if (n([255, 255, 255, 255], [119, 79, 70, 70])) return "font/woff";
                if (n([255, 255, 255, 255], [119, 79, 70, 50])) return "font/woff2";
              }
              function n(e, n) {
                let r = !0,
                  a = 0;
                if (t.byteLength >= n.length) {
                  const o = new Uint8Array(t, 0, e.length);
                  for (a = 0; a < e.length && r; a++) r = r && (o[a] & e[a]) == n[a];
                  return r;
                }
              }
            })(n.expectedType, c));
          !u && n.charset && (u = n.charset);
          if (n.asBinary) {
            if (r.status >= 400) return ay(t, n);
            try {
              return n.maxResourceSizeEnabled && c.byteLength > n.maxResourceSize * Wb ? ay(t, n) : ay(t, n, c, null, h);
            } catch (e) {
              return ay(t, n);
            }
          } else {
            if (r.status >= 400 || (n.validateTextContentType && h && !h.startsWith($b))) return ay(t, n);
            if ((u || (u = "utf-8"), n.maxResourceSizeEnabled && c.byteLength > n.maxResourceSize * Wb)) return ay(t, n, null, u);
            try {
              return ay(t, n, c, u, h);
            } catch (e) {
              return ay(t, n, null, u);
            }
          }
        },
        parseURL: (e, t) => (void 0 === t ? new Qb(e) : new Qb(e, t)),
        resolveURL(e, t) {
          return this.parseURL(e, t).href;
        },
        getSearchParams: (e) => Array.from(new URLSearchParams(e)),
        getValidFilename: (e, t = Gb, n = Yb) => (
          t.forEach((t) => (e = e.replace(new RegExp("[" + t + "]+", "g"), n))),
          (e = e
            .replace(/\.\.\//g, "")
            .replace(/^\/+/, "")
            .replace(/\/+/g, "/")
            .replace(/\/$/, "")
            .replace(/\.$/, "")
            .replace(/\.\//g, "." + n)
            .replace(/\/\./g, "/" + n))
        ),
        parseDocContent(e, t) {
          const n = new Kb().parseFromString(e, "text/html");
          n.head || n.documentElement.insertBefore(n.createElement("HEAD"), n.body);
          let r = n.querySelector("base");
          return (
            (r && r.getAttribute("href")) ||
              (r && r.remove(), (r = n.createElement("base")), r.setAttribute("href", t), n.head.insertBefore(r, n.head.firstChild)),
            n
          );
        },
        parseXMLContent: (e) => new Kb().parseFromString(e, "text/xml"),
        parseSVGContent(e) {
          const t = new Kb().parseFromString(e, "image/svg+xml");
          return t.querySelector("parsererror") ? new Kb().parseFromString(e, "text/html") : t;
        },
        async digest(e, t) {
          try {
            return (function (e) {
              const t = [],
                n = new DataView(e);
              for (let e = 0; e < n.byteLength; e += 4) {
                const r = "00000000",
                  a = (r + n.getUint32(e).toString(16)).slice(-r.length);
                t.push(a);
              }
              return t.join("");
            })(await ey.subtle.digest(e, new ny("utf-8").encode(t)));
          } catch (e) {
            return "";
          }
        },
        getContentSize: (e) => new Jb([e]).size,
        formatFilename(e, t) {
          return Ff(e, t, this);
        },
        evalTemplate(e, t, n, r) {
          return Bf(e, t, this, n, r);
        },
        minifyHTML: (e, t) => Ef(e, t),
        minifyCSSRules: (e, t, n) => rf(e, t, n),
        removeUnusedFonts: (e, t, n, r) => yg(e, t, n, r),
        removeAlternativeFonts: (e, t, n, r) => rg(e, t, n, r),
        getMediaAllInfo: (e, t, n) => jg(e, t, n),
        compressCSS: (e, t) => _m(e, t),
        minifyMedias: (e) => Zg(e),
        removeAlternativeImages: (e) => cf(e),
        parseSrcset: (e) => zm(e),
        preProcessDoc: (e, t, n) => ue(e, t, n),
        postProcessDoc(e, t, n) {
          fe(e, t, n);
        },
        serialize: (e, t) => Nf(e, t),
        removeQuotes: (e) => ke(e),
        ON_BEFORE_CAPTURE_EVENT_NAME: z,
        ON_AFTER_CAPTURE_EVENT_NAME: L,
        WIN_ID_ATTRIBUTE_NAME: q,
        REMOVED_CONTENT_ATTRIBUTE_NAME: N,
        HIDDEN_CONTENT_ATTRIBUTE_NAME: P,
        HIDDEN_FRAME_ATTRIBUTE_NAME: O,
        IMAGE_ATTRIBUTE_NAME: j,
        POSTER_ATTRIBUTE_NAME: F,
        VIDEO_ATTRIBUTE_NAME: B,
        CANVAS_ATTRIBUTE_NAME: H,
        STYLE_ATTRIBUTE_NAME: V,
        INPUT_VALUE_ATTRIBUTE_NAME: W,
        SHADOW_ROOT_ATTRIBUTE_NAME: D,
        PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME: U,
        STYLESHEET_ATTRIBUTE_NAME: G,
        SELECTED_CONTENT_ATTRIBUTE_NAME: Q,
        INVALID_ELEMENT_ATTRIBUTE_NAME: K,
        COMMENT_HEADER: re,
        COMMENT_HEADER_LEGACY: ae,
        SINGLE_FILE_UI_ELEMENT_CLASS: oe,
        EMPTY_RESOURCE: ie
      }
    );
  }
  async function ay(e, t, n, r, a) {
    if (n)
      if (t.asBinary) {
        const e = new Zb();
        e.readAsDataURL(new Jb([n], { type: a + (t.charset ? ";charset=" + t.charset : "") })),
          (n = await new Promise((t, n) => {
            e.addEventListener("load", () => t(e.result), !1), e.addEventListener("error", n, !1);
          }));
      } else {
        const e = new Uint8Array(n.slice(0, 4));
        132 == e[0] && 49 == e[1] && 149 == e[2] && 51 == e[3]
          ? (r = "gb18030")
          : 255 == e[0] && 254 == e[1]
          ? (r = "utf-16le")
          : 254 == e[0] && 255 == e[1] && (r = "utf-16be");
        try {
          n = new ty(r).decode(n);
        } catch (e) {
          n = new ty((r = "utf-8")).decode(n);
        }
        n = n.replace(/\ufeff/gi, "");
      }
    else n = t.asBinary ? ie : "";
    return { data: n, resourceURL: e, charset: r };
  }
  function oy(t) {
    void 0 === e.SingleFile &&
      (e.SingleFile = (function (...e) {
        return ([Qf, Kf] = e), Jf;
      })(ry(t), $d));
  }
  (e.SingleFile = void 0),
    (e.getPageData = async function (t = {}, n, r = globalThis.document, a = globalThis) {
      const o = St;
      let i;
      if ((oy(n), r && a)) {
        ce(r);
        const e = [];
        if (!t.saveRawPage) {
          if (!t.removeFrames && o && globalThis.frames && globalThis.frames.length) {
            let n;
            (n = t.loadDeferredImages
              ? new Promise((e) =>
                  globalThis.setTimeout(() => e(o.getAsync(t)), t.loadDeferredImagesMaxIdleTime - o.TIMEOUT_INIT_REQUEST_MESSAGE)
                )
              : o.getAsync(t)),
              e.push(n);
          }
          t.loadDeferredImages && e.push(Me(t));
        }
        ([t.frames] = await Promise.all(e)), (i = t.frames && t.frames.sessionId);
      }
      (t.doc = r),
        (t.win = a),
        (t.insertCanonicalLink = !0),
        (t.onprogress = (e) => {
          e.type === e.RESOURCES_INITIALIZED && r && a && t.loadDeferredImages && Oe(t);
        });
      const s = new e.SingleFile(t);
      return await s.run(), i && o.cleanup(i), await s.getPageData();
    }),
    (e.helper = Ae),
    (e.init = oy),
    (e.modules = Wf),
    (e.processors = Tt),
    (e.vendor = Um),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
