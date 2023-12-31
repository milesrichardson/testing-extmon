function t(t, e, i, a) {
  Object.defineProperty(t, e, { get: i, set: a, enumerable: !0, configurable: !0 });
}
var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  i = {},
  a = {},
  r = e.parcelRequire60cc;
null == r &&
  (((r = function (t) {
    if (t in i) return i[t].exports;
    if (t in a) {
      var e = a[t];
      delete a[t];
      var r = { id: t, exports: {} };
      return (i[t] = r), e.call(r.exports, r, r.exports), r.exports;
    }
    var s = new Error("Cannot find module '" + t + "'");
    throw ((s.code = "MODULE_NOT_FOUND"), s);
  }).register = function (t, e) {
    a[t] = e;
  }),
  (e.parcelRequire60cc = r)),
  r.register("830oE", function (e, i) {
    t(e.exports, "ERROR_TYPES", () => m),
      t(e.exports, "FRAME_PERMS", () => p),
      t(e.exports, "FRAME_PERMS_CONTAINS", () => w),
      t(e.exports, "filesToRecord", () => b),
      t(e.exports, "captureToFiles", () => x);
    var a = r("bOEoo"),
      s = r("hoPfQ"),
      n = r("1BBN9"),
      l = r("3A0PR"),
      o = r("k69IS"),
      h = r("8ABn4"),
      c = r("8P88O"),
      d = r("mG6c6"),
      u = r("2xkva"),
      f = r("d6GBf"),
      g = r("alm1K");
    const m = {
        UNKNOWN_MESSAGE: "UnknownMessage",
        TIMED_OUT: "TimedOut",
        CHROME_TABS: l.ERROR_TYPE,
        MISSING_BLOB: "MissingBlob",
        CONTENT_SCRIPT: "ContentScript"
      },
      p = { permissions: ["webNavigation"], origins: ["<all_urls>"] },
      w = { permissions: ["webNavigation"], origins: ["https://*/*", "http://*/*"] },
      b = (t, e, i, a, r, s) => h.Capture.from(t, e, i, a, r, s).save(),
      x = (t, e, i, a, r) =>
        E(t, i, a, r).then(({ blobs: t, scaleMultiplier: i, metadata: a }) =>
          Promise.all(
            t.map((t, i) =>
              (function (t, e, i) {
                if (!t) {
                  let t = new Error(`_saveBlobToFs got no blob: ${e}, ${i}`);
                  return (t.name = m.MISSING_BLOB), Promise.reject(t);
                }
                e = (function (t, e) {
                  if (!e) return t;
                  let i = t.split("."),
                    a = i.pop();
                  return i.join(".") + "-" + (e + 1) + "." + a;
                })(e, i);
                let a = t.size + 2048;
                return d.default
                  .requestFs(a)
                  .then((t) => d.default.getFile(t, e, { create: !0 }))
                  .then((e) => d.default.writeFile(e, t))
                  .then(() => ({ filename: e, size: t.size }));
              })(t, e, i)
            )
          ).then((t) => ({ files: t, scaleMultiplier: i, metadata: a }))
        ),
      E = (t, e, i, a) =>
        y(t, e, i, a).then(
          (e) => (
            a.add_url &&
              e.canvasObjs.forEach(({ ctx: i, width: a, height: r }) => {
                let s = e.scaleMultiplier;
                i.scale(s, s),
                  (i.fillStyle = "#00000055"),
                  i.fillRect(0, 0, a / s, 40),
                  (i.fillStyle = "#fff"),
                  (i.font = "20px Arial"),
                  (i.textBaseline = "middle"),
                  i.fillText(t.url, 20, 20);
              }),
            e.toBlobs().then((t) => ({ blobs: t, scaleMultiplier: e.scaleMultiplier, metadata: e.metadata }))
          )
        ),
      y = async (t, e, i, r) => {
        let s;
        return (
          (e = e || function () {}),
          "" === t.url || "about:blank" === t.url || t.url.startsWith("about:blank#")
            ? (s = Promise.resolve().then(() => {
                const e = document.createElement("canvas");
                (e.width = t.width), (e.height = t.height);
                const i = e.getContext("2d");
                return (i.fillStyle = "#fff"), i.fillRect(0, 0, e.width, e.height), e.toDataURL();
              }))
            : "chrome://newtab/" === t.url ||
              "chrome://apps/" === t.url ||
              "edge://newtab/" === t.url ||
              "edge://apps/" === t.url ||
              t.url.startsWith("https://ntp.msn.com/edge/ntp")
            ? (s = l.captureVisibleTab(t.windowId, r.fmt_details.capture))
            : t.url.startsWith("data:image/") && (s = Promise.resolve(t.url)),
          s
            ? M(s, e, r.fmt_details.canvas)
            : new Promise((s, h) => {
                const d = [new (0, f.default)(r.fmt_details.canvas)];
                let b,
                  x,
                  E = [];
                chrome.runtime.onMessage.addListener((s, y, M) => {
                  try {
                    if (
                      (void 0 === b && void 0 !== s.windowWidth && (b = s.windowWidth),
                      void 0 !== s.complete && void 0 !== s.canvasId && d.length > 1)
                    ) {
                      let t = d.length,
                        e = (t - s.canvasId - 1) / t + s.complete / t;
                      s.complete = e;
                    }
                    switch (s.msg) {
                      case a.MSG_CAPTURE: {
                        var v;
                        e(s.complete);
                        let a = s.canvasId;
                        if (!R(a)) {
                          let t = new Error(`Bad canvasId in capture request: ${a}`);
                          return (t.name = "CaptureRequestError"), h(t);
                        }
                        let r = E[a];
                        if ((r && ((s.clip.x += r.left), (s.clip.y += r.top)), 0 === a)) {
                          const t = { ww: s.windowWidth, wh: s.windowHeight, dpr: s.devicePixelRatio };
                          d[a].updateMetadata(t);
                        }
                        return (
                          (null === (v = s.links) || void 0 === v ? void 0 : v.length) && d[a].appendMetadataLinks(s.links),
                          (async function (t, e, i, a, r, s) {
                            if (s)
                              return (
                                s.canvases.forEach(({ canvas: t, left: e, top: i, width: r, height: s }) => {
                                  a.drawImage(t, e, i, r, s);
                                }),
                                e
                              );
                            let n = "";
                            for (;;)
                              try {
                                n = await l.captureVisibleTab(t, { format: "png" });
                                break;
                              } catch (t) {
                                if (!l.isCaptureVisibleTabQuotaError(t)) throw t;
                                u.default.debug("Encountered capture quota error"), await (0, g.sleep)(50);
                              }
                            if (!n) {
                              let t = new Error("No dataURI generated for visible tab");
                              throw ((t.name = "APICaptureStepError"), t);
                            }
                            const { img: o, width: h, height: c } = await (0, g.loadImage)(n);
                            e.image = { width: h, height: c };
                            const d = i === h ? 1 : h / i;
                            a.setScaleMultiplier(d),
                              1 !== d && a.scaleAll(e, ["x", "y", "totalWidth", "totalHeight", "capture.*", "clip.*"]);
                            a.isEmpty() &&
                              (a.setObjs(e.totalWidth, e.totalHeight, e.canvasBg),
                              a.size() > 1 && r && r(a.size()),
                              e.bgRegions &&
                                (e.bgRegions.forEach((t) => a.scaleAll(t, ["sample.*", "fill.*"])), a.setBgRegions(e.bgRegions)));
                            const f = e.x + e.capture.x,
                              m = e.y + e.capture.y,
                              p = e.clip.width,
                              w = e.clip.height,
                              b = f - e.clip.x,
                              x = m - e.clip.y,
                              E = e.image.width,
                              y = e.image.height;
                            0 === p || 0 === w
                              ? u.default.warn("Zero area mask!", JSON.stringify(e))
                              : 0 === E || 0 === y
                              ? u.default.warn("Zero area for image!", JSON.stringify(e))
                              : a.drawImage(o, b, x, E, y, e, { x: f, y: m, width: p, height: w });
                            return e;
                          })(t.windowId, s, b, d[a], i, s.isFrame ? x : void 0)
                            .then((t) => {
                              M(t || !0);
                            })
                            .catch(h),
                          !0
                        );
                      }
                      case a.MSG_CAPTURE_ERROR:
                        return h({ name: m.CONTENT_SCRIPT, message: s.name + ": " + s.message, stack: s.stack }), !1;
                      case a.MSG_CAPTURE_FRAME: {
                        let i = d.length;
                        d.push(new (0, f.default)(r.fmt_details.canvas));
                        let g = ["top", "left", "width", "height", "windowWidth"].filter((t) => !R(s[t]));
                        if (g.length) {
                          let t = new Error(`Bad props on ${a.MSG_CAPTURE_FRAME} request: ${g.join(", ")}`);
                          return (t.name = "CaptureFrameRequestError"), h(t);
                        }
                        return (
                          (E[i] = s),
                          (function (t, e, i, a, r, s, h, d, f) {
                            let g = a.id;
                            return Promise.resolve()
                              .then(() => n.contains(w))
                              .then(
                                (t) =>
                                  !!t ||
                                  (c.trigger("needFramePermsClick", { tagName: f }),
                                  c.oncePromise("clicked").then((t) => "ok" === t.action && n.request(p)))
                              )
                              .then((c) =>
                                c
                                  ? o
                                      .getAllFrames({ tabId: g })
                                      .then((a) => {
                                        if ((a = a.filter((t) => 0 === t.parentFrameId)).length <= 1) return a[0];
                                        let r = a.filter((e) => e.url === t);
                                        if (r.length >= 1) {
                                          if (1 !== r.length) {
                                            let e = `multiple frames found with url: ${t}`;
                                            u.default.warn(e);
                                          }
                                          return r[0];
                                        }
                                        return (function (t, e, i, a) {
                                          let r = i * a;
                                          return Promise.all(
                                            e.map((e) =>
                                              l
                                                .executeScript(t, {
                                                  frameId: e.frameId,
                                                  code: "[window.innerWidth, window.innerHeight]",
                                                  matchAboutBlank: !0
                                                })
                                                .then((t) => {
                                                  let [e, s] = t[0];
                                                  return Math.abs(r + e * s - Math.min(i, e) * Math.min(a, s) * 2);
                                                })
                                            )
                                          ).then((t) => {
                                            let i, a;
                                            return (
                                              t.forEach((t, r) => {
                                                (void 0 === i || t < i) && ((i = t), (a = e[r]));
                                              }),
                                              a
                                            );
                                          });
                                        })(g, a, e, i);
                                      })
                                      .then((t) =>
                                        t
                                          ? _(a, t.frameId, r, s, h, d).catch((t) => {
                                              if (l.isExecuteScriptChromeError(t)) return null;
                                              throw t;
                                            })
                                          : null
                                      )
                                      .then((t) => (s.frame_persist ? t : n.remove(p).then(() => t)))
                                  : null
                              );
                          })(s.url, s.width, s.height, t, e, r, i, d[i], s.tagName)
                            .then((t) => {
                              if (!t || 0 === t.canvases.length) return M({ skip: !0 });
                              const e = t.scaleMultiplier,
                                a = t.pageWidth,
                                r = t.pageHeight,
                                s = E[i],
                                n = [
                                  ["left", "left"],
                                  ["right", "left"],
                                  ["top", "top"],
                                  ["bottom", "top"]
                                ];
                              t.canvases.forEach((t) => {
                                n.forEach(([i, a]) => {
                                  if (((t[i] += s[a] * e), isNaN(t[i]))) {
                                    const t = new Error(`attr isNaN: ${i}`);
                                    throw ((t.name = "CanvasObjAttrError"), t);
                                  }
                                });
                              });
                              const l = d[i];
                              (l.metadata.links || []).forEach((t) => {
                                t.bounds.forEach((t) => {
                                  (t.x += s.left), (t.y += s.top);
                                });
                              }),
                                d[i - 1].appendMetadataLinks(l.metadata.links),
                                (x = t),
                                M({ width: a, height: r });
                            })
                            .catch(h),
                          !0
                        );
                      }
                      case a.MSG_CAPTURE_COMPLETE:
                        return null == s.canvasId && alert(`Bad request, missing canvasId: ${JSON.stringify(s)}`), S.emit(s), M(), !1;
                      default: {
                        let t = "Unknown message received from content script: " + s.msg;
                        return u.default.error(t), h({ name: m.UNKNOWN_MESSAGE, message: t }), !1;
                      }
                    }
                  } catch (t) {
                    u.default.error(t), h(t);
                  }
                }),
                  _(t, null, e, r, 0, d[0], !0)
                    .then(() => {
                      const t = d[0];
                      t.sortLinks(), s(t);
                    })
                    .catch((t) => h(t));
              })
        );
      },
      M = async (t, e, i, a) => {
        e(0);
        const r = await t;
        e(0.5);
        const { img: s, width: n, height: l } = await (0, g.loadImage)(r);
        return e(1), (a = a || new (0, f.default)(i)).setObjs(n, l), a.drawImage(s, 0, 0, n, l), a;
      },
      _ = async (t, e, i, r, n, o, h) =>
        new Promise((d, f) => {
          (async function () {
            await (async function (t) {
              if (s.isFileUrl(t)) {
                if (!(await s.isAllowedFileSchemeAccess())) return c.trigger("needFilePermsClick"), new Promise(() => {});
              }
            })(t.url);
            let f = !1;
            try {
              const i = await (0, g.timeoutWrap)(
                l.sendMessage(t.id, { msg: a.MSG_CHECK_EXISTS }, { frameId: e }),
                50,
                "tabs.sendSendMessage.checkExists"
              );
              u.default.debug("Message.checkExists", i), i && i.startTime && "js/page/index.js" === i.script && (f = !0);
            } catch (t) {
              u.default.debug("Message.checkExists.error", t);
            }
            if (!f)
              try {
                await (0, g.timeoutWrap)(
                  (function (t, e, i) {
                    let a = "" === t.url;
                    if (
                      (function (t) {
                        let e = chrome.extension.getURL("");
                        return t.url.substring(0, e.length) === e;
                      })(t)
                    ) {
                      let e,
                        a = chrome.extension.getURL(i);
                      try {
                        e = chrome.extension.getViews({ type: "tab", tabId: t.id });
                      } catch (t) {
                        e = chrome.extension.getViews({ type: "tab" });
                      }
                      let r = e.filter((e) => e.location.href === t.url);
                      return (
                        r.length || u.default.error("No matching window found for: " + t.url),
                        Promise.all(
                          r.map(
                            (t) =>
                              new Promise((e, i) => {
                                let r = t.document.createElement("script");
                                (r.src = a), r.addEventListener("load", e, !1), t.document.body.appendChild(r);
                              })
                          )
                        )
                      );
                    }
                    {
                      let r = { file: i };
                      return (
                        "number" == typeof e && ((r.frameId = e), e > 0 && (r.matchAboutBlank = !0)),
                        a && (r.matchAboutBlank = !0),
                        l.executeScript(t.id, r)
                      );
                    }
                  })(t, e, "js/page/index.js"),
                  6e3,
                  "api._executeScript"
                );
              } catch (e) {
                if (h && (l.isExecuteScriptChromeError(e) || n > 0)) {
                  const e = l.captureVisibleTab(t.windowId, r.fmt_details.capture);
                  return await M(e, i, r.fmt_details.capture, o), void d(v(o));
                }
                throw e;
              }
            i(0);
            const m = { msg: a.MSG_SCROLL_PAGE, canvasId: n, opts: r };
            (e = e || 0), await l.sendMessage(t.id, m, { frameId: e });
            const p = (t) => {
              if (t.canvasId === n) {
                S.off(p), o.applyBgRegions();
                const t = v(o);
                d(t);
              }
            };
            S.on(p);
          })().catch(f);
        }),
      v = (t) => {
        const e = t.canvasObjs,
          i = t.scaleMultiplier || 1;
        return { canvases: e, pageWidth: t.totalWidth / i, pageHeight: t.totalHeight / i, scaleMultiplier: i };
      };
    const R = (t) => "number" == typeof t,
      S = (function () {
        const t = "CaptureCompleteListener";
        return { on: (e) => c.on(t, e), off: (e) => c.off(t, e), emit: (e) => c.trigger(t, e) };
      })();
  }),
  r.register("bOEoo", function (e, i) {
    t(e.exports, "MSG_CAPTURE", () => a),
      t(e.exports, "MSG_CAPTURE_COMPLETE", () => r),
      t(e.exports, "MSG_CAPTURE_ERROR", () => s),
      t(e.exports, "MSG_CAPTURE_FRAME", () => n),
      t(e.exports, "MSG_CHECK_EXISTS", () => l),
      t(e.exports, "MSG_SCROLL_PAGE", () => o);
    const a = "capture",
      r = "captureComplete",
      s = "captureError",
      n = "captureFrame",
      l = "checkExists",
      o = "scrollPage";
  }),
  r.register("k69IS", function (e, i) {
    t(e.exports, "getAllFrames", () => s);
    const a = (0, r("5dZ7N").genLastErrorFmt)("ChromeWebNavigationError"),
      s = (t) =>
        new Promise((e, i) => {
          chrome.webNavigation.getAllFrames(t, (t) => {
            let r = chrome.runtime.lastError;
            return r ? i(a(r, "getAllFrames")) : e(t);
          });
        });
  }),
  r.register("d6GBf", function (e, i) {
    t(e.exports, "default", () => o);
    var a = r("gstfn"),
      s = r("2xkva");
    const n = 28800,
      l = 9e3;
    class o {
      size() {
        return this.canvasObjs.length;
      }
      isEmpty() {
        return 0 === this.canvasObjs.length;
      }
      updateMetadata(t) {
        this.metadata = { ...this.metadata, ...t };
      }
      appendMetadataLinks(t) {
        if (t) {
          const e = [...(this.metadata.links || []), ...t];
          this.metadata = { ...this.metadata, links: e };
        }
      }
      sortLinks() {
        this.metadata.links &&
          this.metadata.links.sort((t, e) =>
            t.bounds[0].y === e.bounds[0].y ? t.bounds[0].x - e.bounds[0].x : t.bounds[0].y - e.bounds[0].y
          );
      }
      setScaleMultiplier(t) {
        this.scaleMultiplier = t;
      }
      setObjs(t, e, i) {
        (this.totalWidth = t), (this.totalHeight = e);
        let a,
          r,
          s,
          o,
          h,
          c = e > n || t > n || e * t > 2592e5,
          d = t > e,
          u = c ? (d ? n : l) : t,
          f = c ? (d ? l : n) : e,
          g = Math.ceil(t / u),
          m = Math.ceil(e / f),
          p = 0,
          w = [];
        for (a = 0; a < m; a++)
          for (r = 0; r < g; r++) {
            (s = document.createElement("canvas")), (s.width = (r == g - 1 && t % u) || u), (s.height = (a == m - 1 && e % f) || f);
            let n = s.getContext("2d");
            i && ((n.fillStyle = i), n.fillRect(0, 0, s.width, s.height)),
              (o = r * u),
              (h = a * f),
              w.push({
                canvas: s,
                ctx: n,
                index: p,
                left: o,
                right: o + s.width,
                top: h,
                bottom: h + s.height,
                width: s.width,
                height: s.height
              }),
              p++;
          }
        this.canvasObjs = w;
      }
      toDataURLs() {
        return this.canvasObjs.map((t) => t.canvas.toDataURL(this.exportFormat));
      }
      toBlobs() {
        return Promise.all(this.canvasObjs.map((t) => (0, a.canvasToBlob)(t.canvas, this.exportFormat)));
      }
      fillRect(t, e, i, a, r) {
        this._filter(e, i, a, r).forEach((s) => {
          let n = this._shift(s, e, i);
          (s.ctx.fillStyle = t), s.ctx.fillRect(n.x, n.y, a, r);
        });
      }
      strokeRect(t, e, i, a, r) {
        this._filter(e, i, a, r).forEach((s) => {
          let n = this._shift(s, e, i);
          (s.ctx.strokeStyle = t), s.ctx.strokeRect(n.x, n.y, a, r);
        });
      }
      drawImage(t, e, i, a, r, s, n) {
        this._debugCounter++,
          this._filter(e, i, a, r).forEach((l) => {
            const o = this._shift(l, e, i),
              h = n ? { ...n, ...this._shift(l, n.x, n.y) } : void 0,
              c = l.ctx;
            if ((c.save(), h)) {
              const t = new Path2D(),
                { x: e, y: i, width: a, height: r } = h,
                s = Math.floor(h.x),
                n = Math.floor(h.y);
              let l = Math.ceil(h.width),
                o = Math.ceil(h.height);
              s + l < e + a && (l += 1), n + o < i + r && (o += 1), t.rect(s, n, l, o), c.clip(t);
            }
            if ((c.drawImage(t, o.x, o.y), c.restore(), s && "object" == typeof s && !0 === s.debug)) {
              const t = n || { x: o.x, y: o.y, width: a, height: r };
              let e = Math.max(0, t.x),
                i = Math.max(0, t.y),
                l = t.x < 0 ? t.width + t.x : t.width,
                h = t.y < 0 ? t.height + t.y : t.height;
              c.save(), (c.strokeStyle = "#0F0"), (c.lineWidth = 3), c.strokeRect(e, i, l, h);
              const d = 15;
              (c.font = `${d}px Arial`), (c.textAlign = "left"), (c.textBaseline = "top");
              const u = `#${this._debugCounter}: ${this._str(s)}`,
                f = 5,
                g = c.measureText(u).width;
              (c.fillStyle = "rgba(0, 0, 0, .4)"),
                c.fillRect(e, i, g + 2 * f, d + 2 * f),
                (c.fillStyle = "#FFF"),
                c.fillText(u, e + f, i + f);
            }
          });
      }
      _str(t) {
        try {
          if ("capture" === t.msg) return JSON.stringify({ x: t.x, y: t.y, clip: t.clip, capture: t.capture });
        } catch (t) {}
        try {
          return JSON.stringify(t);
        } catch (e) {
          return `${t}`;
        }
      }
      _filter(t, e, i, a) {
        let r = t + i,
          s = e + a;
        return this.canvasObjs.filter((i) => t < i.right && r > i.left && e < i.bottom && s > i.top);
      }
      _shift(t, e, i) {
        return { x: Math.round(e - t.left), y: Math.round(i - t.top) };
      }
      _constrain(t, e, i, a, r) {
        const s = this._shift(t, e, i),
          n = s.x,
          l = n + a,
          o = s.y,
          h = o + r,
          c = Math.max(0, n),
          d = Math.max(0, o);
        return { x: c, y: d, width: Math.min(t.height, l - c), height: Math.min(t.height, h - d) };
      }
      scale(t) {
        return (t || 0) * this.scaleMultiplier;
      }
      scaleAll(t, e) {
        e.forEach((e) => {
          if ("*" === e) Object.keys(t).forEach((e) => (t[e] = this.scale(t[e])));
          else {
            let i = e.indexOf(".");
            -1 === i ? (t[e] = this.scale(t[e])) : this.scaleAll(t[e.substring(0, i)], [e.substring(i + 1)]);
          }
        });
      }
      setBgRegions(t) {
        this.bgRegions = t;
      }
      applyBgRegions() {
        this.bgRegions.forEach(({ sample: t, fill: e }, i) => {
          const a = new Map();
          this._filter(t.x, t.y, t.width, t.height).forEach((e) => {
            let i = this._constrain(e, t.x, t.y, t.width, t.height);
            if (i.width > 0 && i.height > 0) {
              let t = document.createElement("canvas");
              (t.width = i.width), (t.height = i.height);
              let r,
                n = t.getContext("2d");
              n.drawImage(e.canvas, -i.x, -i.y);
              try {
                r = n.getImageData(0, 0, i.width, i.height);
              } catch (t) {
                s.default.error(t);
              }
              r && this._getHisto(r.data, a);
            }
          });
          let r = 0,
            n = 0;
          if (
            (a.forEach((t, e) => {
              t > r && ((r = t), (n = e));
            }),
            0 !== n)
          ) {
            const t = `rgb(${this._toRgb(n).join(", ")})`;
            this.fillRect(t, e.x, e.y, e.width, e.height);
          }
        });
      }
      _getHisto(t, e) {
        e = e || new Map();
        for (let i = 0, a = t.length; i < a; i += 4)
          if (255 === t[i + 3]) {
            const a = this._toInt(t[i], t[i + 1], t[i + 2]);
            e.set(a, (e.get(a) || 0) + 1);
          }
        return e;
      }
      _toInt(t, e, i) {
        return (t << 16) + (e << 8) + i;
      }
      _toRgb(t) {
        const e = 255 & t,
          i = 255 & (t >>= 8);
        return [255 & (t >>= 8), i, e];
      }
      constructor(t) {
        (this.exportFormat = t),
          (this.canvasObjs = []),
          (this.bgRegions = []),
          (this.scaleMultiplier = 1),
          (this.totalWidth = 0),
          (this.totalHeight = 0),
          (this.metadata = {}),
          (this._debugCounter = 0),
          (this.scaleMultiplier = 1),
          (this.totalWidth = 0),
          (this.totalHeight = 0),
          (this.metadata = {}),
          (this._debugCounter = 0);
      }
    }
  });
//# sourceMappingURL=popup.d7112402.js.map
