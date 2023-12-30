!(function () {
  "use strict";
  ((e) => {
    const t = "single-file-lazy-load",
      n = "single-file-load-image",
      i = {
        family: "font-family",
        style: "font-style",
        weight: "font-weight",
        stretch: "font-stretch",
        unicodeRange: "unicode-range",
        variant: "font-variant",
        featureSettings: "font-feature-settings"
      },
      r = (t, n, i) => e.addEventListener(t, n, i),
      l = (t) => {
        try {
          e.dispatchEvent(t);
        } catch (e) {}
      },
      o = e.CustomEvent,
      s = e.document,
      c = e.screen,
      d = e.Element,
      a = e.UIEvent,
      g = e.Event,
      f = e.FileReader,
      _ = e.Blob,
      m = e.JSON,
      u = new Map(),
      h = new Map();
    let y;
    function p(i) {
      const r = s.scrollingElement || s.documentElement,
        a = r.clientHeight,
        f = r.clientWidth,
        _ = Math.max(r.scrollHeight - a, a),
        m = Math.max(r.scrollWidth - f, f);
      if (
        (s.querySelectorAll("[loading=lazy]").forEach((e) => {
          (e.loading = "eager"), e.setAttribute(t, "");
        }),
        r.__defineGetter__("clientHeight", () => _),
        r.__defineGetter__("clientWidth", () => m),
        c.__defineGetter__("height", () => _),
        c.__defineGetter__("width", () => m),
        (e._singleFile_innerHeight = e.innerHeight),
        (e._singleFile_innerWidth = e.innerWidth),
        e.__defineGetter__("innerHeight", () => _),
        e.__defineGetter__("innerWidth", () => m),
        i ||
          e._singleFile_getBoundingClientRect ||
          ((e._singleFile_getBoundingClientRect = d.prototype.getBoundingClientRect),
          (d.prototype.getBoundingClientRect = function () {
            const t = e._singleFile_getBoundingClientRect.call(this);
            return (
              this == r &&
                (t.__defineGetter__("height", () => _),
                t.__defineGetter__("bottom", () => _ + t.top),
                t.__defineGetter__("width", () => m),
                t.__defineGetter__("right", () => m + t.left)),
              t
            );
          })),
        !e._singleFileImage)
      ) {
        const t = e.Image;
        (e._singleFileImage = e.Image),
          e.__defineGetter__("Image", function () {
            return function () {
              const e = new t(...arguments),
                i = new t(...arguments);
              return (
                i.__defineSetter__("src", (t) => {
                  (e.src = t), l(new o(n, { detail: e.src }));
                }),
                i.__defineGetter__("src", () => e.src),
                i.__defineSetter__("srcset", (t) => {
                  l(new o(n)), (e.srcset = t);
                }),
                i.__defineGetter__("srcset", () => e.srcset),
                i.__defineGetter__("height", () => e.height),
                i.__defineGetter__("width", () => e.width),
                i.__defineGetter__("naturalHeight", () => e.naturalHeight),
                i.__defineGetter__("naturalWidth", () => e.naturalWidth),
                e.decode && i.__defineGetter__("decode", () => () => e.decode()),
                (e.onload =
                  e.onloadend =
                  e.onerror =
                    (t) => {
                      l(new o("single-file-image-loaded", { detail: e.src })), i.dispatchEvent(new g(t.type, t));
                    }),
                i
              );
            };
          });
      }
      let y, p;
      i ? ((y = a / _), (p = f / m)) : ((y = (a + e.scrollY) / _), (p = (f + e.scrollX) / m));
      const E = Math.min(y, p);
      if (E < 1) {
        const e = s.documentElement.style.getPropertyValue("transform"),
          t = s.documentElement.style.getPropertyPriority("transform"),
          n = s.documentElement.style.getPropertyValue("transform-origin"),
          r = s.documentElement.style.getPropertyPriority("transform-origin"),
          l = s.documentElement.style.getPropertyValue("min-height"),
          o = s.documentElement.style.getPropertyPriority("min-height");
        s.documentElement.style.setProperty("transform-origin", (y < 1 ? "50%" : "0") + " " + (p < 1 ? "50%" : "0") + " 0", "important"),
          s.documentElement.style.setProperty("transform", "scale3d(" + E + ", " + E + ", 1)", "important"),
          s.documentElement.style.setProperty("min-height", 100 / E + "vh", "important"),
          v(),
          i
            ? (s.documentElement.style.setProperty("-sf-transform", e, t),
              s.documentElement.style.setProperty("-sf-transform-origin", n, r),
              s.documentElement.style.setProperty("-sf-min-height", l, o))
            : (s.documentElement.style.setProperty("transform", e, t),
              s.documentElement.style.setProperty("transform-origin", n, r),
              s.documentElement.style.setProperty("min-height", l, o));
      }
      if (!i) {
        v();
        const e = r.getBoundingClientRect();
        window == window.top &&
          [...u].forEach(([t, n]) => {
            const i = n.options && n.options.root && n.options.root.getBoundingClientRect,
              r = i && n.options.root.getBoundingClientRect(),
              l = h.get(t);
            if (l) {
              const o = l.map((t) => {
                const n = t.getBoundingClientRect();
                return {
                  target: t,
                  intersectionRatio: 1,
                  boundingClientRect: n,
                  intersectionRect: n,
                  isIntersecting: !0,
                  rootBounds: i ? r : e,
                  time: 0
                };
              });
              n.callback(o, t);
            }
          });
      }
    }
    function E(n) {
      s.querySelectorAll("[" + t + "]").forEach((e) => {
        (e.loading = "lazy"), e.removeAttribute(t);
      }),
        n ||
          (e._singleFile_getBoundingClientRect &&
            ((d.prototype.getBoundingClientRect = e._singleFile_getBoundingClientRect), delete e._singleFile_getBoundingClientRect)),
        e._singleFileImage && (delete e.Image, (e.Image = e._singleFileImage), delete e._singleFileImage),
        n || v();
    }
    function w() {
      const t = s.scrollingElement || s.documentElement;
      null != e._singleFile_innerHeight &&
        (delete e.innerHeight, (e.innerHeight = e._singleFile_innerHeight), delete e._singleFile_innerHeight),
        null != e._singleFile_innerWidth &&
          (delete e.innerWidth, (e.innerWidth = e._singleFile_innerWidth), delete e._singleFile_innerWidth),
        delete t.clientHeight,
        delete t.clientWidth,
        delete c.height,
        delete c.width;
    }
    if (
      (r("single-file-load-deferred-images-start", () => p()),
      r("single-file-load-deferred-images-keep-zoom-level-start", () => p(!0)),
      r("single-file-load-deferred-images-end", () => E()),
      r("single-file-load-deferred-images-keep-zoom-level-end", () => E(!0)),
      r("single-file-load-deferred-images-reset", w),
      r("single-file-load-deferred-images-keep-zoom-level-reset", () => {
        const e = s.documentElement.style.getPropertyValue("-sf-transform"),
          t = s.documentElement.style.getPropertyPriority("-sf-transform"),
          n = s.documentElement.style.getPropertyValue("-sf-transform-origin"),
          i = s.documentElement.style.getPropertyPriority("-sf-transform-origin"),
          r = s.documentElement.style.getPropertyValue("-sf-min-height"),
          l = s.documentElement.style.getPropertyPriority("-sf-min-height");
        s.documentElement.style.setProperty("transform", e, t),
          s.documentElement.style.setProperty("transform-origin", n, i),
          s.documentElement.style.setProperty("min-height", r, l),
          s.documentElement.style.removeProperty("-sf-transform"),
          s.documentElement.style.removeProperty("-sf-transform-origin"),
          s.documentElement.style.removeProperty("-sf-min-height"),
          w();
      }),
      r("single-file-dispatch-scroll-event-start", () => {
        y = !0;
      }),
      r("single-file-dispatch-scroll-event-end", () => {
        y = !1;
      }),
      r("single-file-block-cookies-start", () => {
        try {
          s.__defineGetter__("cookie", () => {
            throw new Error("document.cookie temporary blocked by SingleFile");
          });
        } catch (e) {}
      }),
      r("single-file-block-cookies-end", () => {
        delete s.cookie;
      }),
      r("single-file-block-storage-start", () => {
        e._singleFile_localStorage ||
          ((e._singleFile_localStorage = e.localStorage),
          e.__defineGetter__("localStorage", () => {
            throw new Error("localStorage temporary blocked by SingleFile");
          })),
          e._singleFile_indexedDB ||
            ((e._singleFile_indexedDB = e.indexedDB),
            e.__defineGetter__("indexedDB", () => {
              throw new Error("indexedDB temporary blocked by SingleFile");
            }));
      }),
      r("single-file-block-storage-end", () => {
        e._singleFile_localStorage &&
          (delete e.localStorage, (e.localStorage = e._singleFile_localStorage), delete e._singleFile_localStorage),
          e._singleFile_indexedDB || (delete e.indexedDB, (e.indexedDB = e._singleFile_indexedDB), delete e._singleFile_indexedDB);
      }),
      r("single-file-request-fetch", async (t) => {
        l(new o("single-file-ack-fetch"));
        const { url: n, options: i } = m.parse(t.detail);
        let r;
        try {
          const t = await ((t, n) => e.fetch(t, n))(n, i);
          r = { url: n, response: await t.arrayBuffer(), headers: [...t.headers], status: t.status };
        } catch (e) {
          r = { url: n, error: e && e.toString() };
        }
        l(new o("single-file-response-fetch", { detail: r }));
      }),
      e.FontFace)
    ) {
      const t = e.FontFace;
      (e.FontFace = function () {
        return F(...arguments).then((e) => l(new o("single-file-new-font-face", { detail: e }))), new t(...arguments);
      }),
        (e.FontFace.prototype = t.prototype);
      const n = s.fonts.delete;
      (s.fonts.delete = function (e) {
        return F(e.family).then((e) => l(new o("single-file-delete-font", { detail: e }))), n.call(s.fonts, e);
      }),
        (s.fonts.delete.toString = function () {
          return "function delete() { [native code] }";
        });
      const i = s.fonts.clear;
      (s.fonts.clear = function () {
        return l(new o("single-file-clear-fonts")), i.call(s.fonts);
      }),
        (s.fonts.clear.toString = function () {
          return "function clear() { [native code] }";
        });
    }
    if (e.IntersectionObserver) {
      const t = e.IntersectionObserver;
      (e.IntersectionObserver = function () {
        const e = new t(...arguments),
          n = t.prototype.observe || e.observe,
          i = t.prototype.unobserve || e.unobserve,
          r = arguments[0],
          l = arguments[1];
        return (
          n &&
            (e.observe = function (t) {
              let i = h.get(e);
              return i || ((i = []), h.set(e, i)), i.push(t), n.call(e, t);
            }),
          i &&
            (e.unobserve = function (t) {
              let n = h.get(e);
              return n && ((n = n.filter((e) => e != t)), n.length ? h.set(e, n) : (h.delete(e), u.delete(e))), i.call(e, t);
            }),
          u.set(e, { callback: r, options: l }),
          e
        );
      }),
        (e.IntersectionObserver.prototype = t.prototype),
        (e.IntersectionObserver.toString = function () {
          return "function IntersectionObserver() { [native code] }";
        });
    }
    async function F(e, t, n) {
      const r = {};
      return (
        (r["font-family"] = e),
        (r.src = t),
        n &&
          Object.keys(n).forEach((e) => {
            i[e] && (r[i[e]] = n[e]);
          }),
        new Promise((e) => {
          if (r.src instanceof ArrayBuffer) {
            const t = new f();
            t.readAsDataURL(new _([r.src])),
              t.addEventListener("load", () => {
                (r.src = "url(" + t.result + ")"), e(r);
              });
          } else e(r);
        })
      );
    }
    function v() {
      try {
        l(new a("resize")), y && l(new a("scroll"));
      } catch (e) {}
    }
  })("object" == typeof globalThis ? globalThis : window);
})();
