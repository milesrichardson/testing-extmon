(() => {
  function t(t, e, r, i) {
    Object.defineProperty(t, e, { get: r, set: i, enumerable: !0, configurable: !0 });
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
    r = {},
    i = {},
    a = e.parcelRequire60cc;
  null == a &&
    (((a = function (t) {
      if (t in r) return r[t].exports;
      if (t in i) {
        var e = i[t];
        delete i[t];
        var a = { id: t, exports: {} };
        return (r[t] = a), e.call(a.exports, a, a.exports), a.exports;
      }
      var n = new Error("Cannot find module '" + t + "'");
      throw ((n.code = "MODULE_NOT_FOUND"), n);
    }).register = function (t, e) {
      i[t] = e;
    }),
    (e.parcelRequire60cc = a)),
    a.register("eW2D8", function (e, r) {
      t(e.exports, "ERROR_TYPES", () => b),
        t(e.exports, "FRAME_PERMS", () => E),
        t(e.exports, "FRAME_PERMS_CONTAINS", () => x),
        t(e.exports, "filesToRecord", () => _),
        t(e.exports, "captureToFiles", () => y);
      var i = a("8rN6d"),
        n = a("ff4Ef"),
        s = a("8bPtr"),
        l = a("hH2tP"),
        o = a("6PWuH"),
        c = a("95ETH"),
        h = a("jQEAy"),
        u = a("7ntRd"),
        d = a("eC8rE"),
        f = a("erNYL"),
        g = a("iW6yY"),
        p = a("2z2pA"),
        m = a("lk6Fz"),
        w = a("6pLLc");
      const b = {
          UNKNOWN_MESSAGE: "UnknownMessage",
          TIMED_OUT: "TimedOut",
          CHROME_TABS: h.ERROR_TYPE,
          MISSING_BLOB: "MissingBlob",
          CONTENT_SCRIPT: "ContentScript"
        },
        E = { permissions: ["webNavigation"], origins: ["<all_urls>"] },
        x = { permissions: ["webNavigation"], origins: ["https://*/*", "http://*/*"] },
        _ = (t, e, r, i, a, n) => d.Capture.from(t, e, r, i, a, n).save(),
        y = (t, e, r, i, a) =>
          M(t, r, i, a).then((t) => {
            let r = t.blobs,
              i = t.scaleMultiplier,
              a = t.metadata;
            return Promise.all(
              r.map((t, r) =>
                (function (t, e, r) {
                  if (!t) {
                    let t = new Error(`_saveBlobToFs got no blob: ${e}, ${r}`);
                    return (t.name = b.MISSING_BLOB), Promise.reject(t);
                  }
                  e = (function (t, e) {
                    if (!e) return t;
                    let r = t.split("."),
                      i = r.pop();
                    return r.join(".") + "-" + (e + 1) + "." + i;
                  })(e, r);
                  let i = t.size + 2048;
                  return g.default
                    .requestFs(i)
                    .then((t) => g.default.getFile(t, e, { create: !0 }))
                    .then((e) => g.default.writeFile(e, t))
                    .then(() => ({ filename: e, size: t.size }));
                })(t, e, r)
              )
            ).then((t) => ({ files: t, scaleMultiplier: i, metadata: a }));
          }),
        M = (t, e, r, i) =>
          v(t, e, r, i).then(
            (e) => (
              i.add_url &&
                e.canvasObjs.forEach((r) => {
                  let i = r.ctx,
                    a = r.width,
                    n = (r.height, e.scaleMultiplier);
                  i.scale(n, n),
                    (i.fillStyle = "#00000055"),
                    i.fillRect(0, 0, a / n, 40),
                    (i.fillStyle = "#fff"),
                    (i.font = "20px Arial"),
                    (i.textBaseline = "middle"),
                    i.fillText(t.url, 20, 20);
                }),
              e.toBlobs().then((t) => ({ blobs: t, scaleMultiplier: e.scaleMultiplier, metadata: e.metadata }))
            )
          ),
        v =
          ((R = (0, i.default)(function (t, e, r, i) {
            var a;
            return (0, s.__generator)(this, function (s) {
              return (
                (e = e || function () {}),
                "" === t.url || "about:blank" === t.url || t.url.startsWith("about:blank#")
                  ? (a = Promise.resolve().then(() => {
                      const e = document.createElement("canvas");
                      (e.width = t.width), (e.height = t.height);
                      const r = e.getContext("2d");
                      return (r.fillStyle = "#fff"), r.fillRect(0, 0, e.width, e.height), e.toDataURL();
                    }))
                  : "chrome://newtab/" === t.url ||
                    "chrome://apps/" === t.url ||
                    "edge://newtab/" === t.url ||
                    "edge://apps/" === t.url ||
                    t.url.startsWith("https://ntp.msn.com/edge/ntp")
                  ? (a = h.captureVisibleTab(t.windowId, i.fmt_details.capture))
                  : t.url.startsWith("data:image/") && (a = Promise.resolve(t.url)),
                a
                  ? [2, S(a, e, i.fmt_details.canvas)]
                  : [
                      2,
                      new Promise((a, s) => {
                        const o = [new (0, m.default)(i.fmt_details.canvas)];
                        let d,
                          g,
                          w = [];
                        chrome.runtime.onMessage.addListener((a, _, y) => {
                          try {
                            if (
                              (void 0 === d && void 0 !== a.windowWidth && (d = a.windowWidth),
                              void 0 !== a.complete && void 0 !== a.canvasId && o.length > 1)
                            ) {
                              let t = o.length,
                                e = (t - a.canvasId - 1) / t + a.complete / t;
                              a.complete = e;
                            }
                            switch (a.msg) {
                              case l.MSG_CAPTURE: {
                                var M;
                                e(a.complete);
                                let i = a.canvasId;
                                if (!A(i)) {
                                  let t = new Error(`Bad canvasId in capture request: ${i}`);
                                  return (t.name = "CaptureRequestError"), s(t);
                                }
                                let n = w[i];
                                if ((n && ((a.clip.x += n.left), (a.clip.y += n.top)), 0 === i)) {
                                  const t = { ww: a.windowWidth, wh: a.windowHeight, dpr: a.devicePixelRatio };
                                  o[i].updateMetadata(t);
                                }
                                return (
                                  (null === (M = a.links) || void 0 === M ? void 0 : M.length) && o[i].appendMetadataLinks(a.links),
                                  (function (t, e, r, i, a, n) {
                                    return T.apply(this, arguments);
                                  })(t.windowId, a, d, o[i], r, a.isFrame ? g : void 0)
                                    .then((t) => {
                                      y(t || !0);
                                    })
                                    .catch(s),
                                  !0
                                );
                              }
                              case l.MSG_CAPTURE_ERROR:
                                return s({ name: b.CONTENT_SCRIPT, message: a.name + ": " + a.message, stack: a.stack }), !1;
                              case l.MSG_CAPTURE_FRAME: {
                                let r = o.length;
                                o.push(new (0, m.default)(i.fmt_details.canvas));
                                let d = ["top", "left", "width", "height", "windowWidth"].filter((t) => !A(a[t]));
                                if (d.length) {
                                  let t = new Error(`Bad props on ${l.MSG_CAPTURE_FRAME} request: ${d.join(", ")}`);
                                  return (t.name = "CaptureFrameRequestError"), s(t);
                                }
                                return (
                                  (w[r] = a),
                                  (function (t, e, r, i, a, s, l, o, d) {
                                    let g = i.id;
                                    return Promise.resolve()
                                      .then(() => c.contains(x))
                                      .then(
                                        (t) =>
                                          !!t ||
                                          (f.trigger("needFramePermsClick", { tagName: d }),
                                          f.oncePromise("clicked").then((t) => "ok" === t.action && c.request(E)))
                                      )
                                      .then((d) =>
                                        d
                                          ? u
                                              .getAllFrames({ tabId: g })
                                              .then((i) => {
                                                if ((i = i.filter((t) => 0 === t.parentFrameId)).length <= 1) return i[0];
                                                let a = i.filter((e) => e.url === t);
                                                if (a.length >= 1) {
                                                  if (1 !== a.length) {
                                                    let e = `multiple frames found with url: ${t}`;
                                                    p.default.warn(e);
                                                  }
                                                  return a[0];
                                                }
                                                return (function (t, e, r, i) {
                                                  let a = r * i;
                                                  return Promise.all(
                                                    e.map((e) =>
                                                      h
                                                        .executeScript(t, {
                                                          frameId: e.frameId,
                                                          code: "[window.innerWidth, window.innerHeight]",
                                                          matchAboutBlank: !0
                                                        })
                                                        .then((t) => {
                                                          let e = (0, n.default)(t[0], 2),
                                                            s = e[0],
                                                            l = e[1];
                                                          return Math.abs(a + s * l - Math.min(r, s) * Math.min(i, l) * 2);
                                                        })
                                                    )
                                                  ).then((t) => {
                                                    let r, i;
                                                    return (
                                                      t.forEach((t, a) => {
                                                        (void 0 === r || t < r) && ((r = t), (i = e[a]));
                                                      }),
                                                      i
                                                    );
                                                  });
                                                })(g, i, e, r);
                                              })
                                              .then((t) =>
                                                t
                                                  ? C(i, t.frameId, a, s, l, o).catch((t) => {
                                                      if (h.isExecuteScriptChromeError(t)) return null;
                                                      throw t;
                                                    })
                                                  : null
                                              )
                                              .then((t) => (s.frame_persist ? t : c.remove(E).then(() => t)))
                                          : null
                                      );
                                  })(a.url, a.width, a.height, t, e, i, r, o[r], a.tagName)
                                    .then((t) => {
                                      if (!t || 0 === t.canvases.length) return y({ skip: !0 });
                                      const e = t.scaleMultiplier,
                                        i = t.pageWidth,
                                        a = t.pageHeight,
                                        s = w[r],
                                        l = [
                                          ["left", "left"],
                                          ["right", "left"],
                                          ["top", "top"],
                                          ["bottom", "top"]
                                        ];
                                      t.canvases.forEach((t) => {
                                        l.forEach((r) => {
                                          let i = (0, n.default)(r, 2),
                                            a = i[0],
                                            l = i[1];
                                          if (((t[a] += s[l] * e), isNaN(t[a]))) {
                                            const t = new Error(`attr isNaN: ${a}`);
                                            throw ((t.name = "CanvasObjAttrError"), t);
                                          }
                                        });
                                      });
                                      const c = o[r];
                                      (c.metadata.links || []).forEach((t) => {
                                        t.bounds.forEach((t) => {
                                          (t.x += s.left), (t.y += s.top);
                                        });
                                      }),
                                        o[r - 1].appendMetadataLinks(c.metadata.links),
                                        (g = t),
                                        y({ width: i, height: a });
                                    })
                                    .catch(s),
                                  !0
                                );
                              }
                              case l.MSG_CAPTURE_COMPLETE:
                                return (
                                  null == a.canvasId && alert(`Bad request, missing canvasId: ${JSON.stringify(a)}`), N.emit(a), y(), !1
                                );
                              default: {
                                let t = "Unknown message received from content script: " + a.msg;
                                return p.default.error(t), s({ name: b.UNKNOWN_MESSAGE, message: t }), !1;
                              }
                            }
                          } catch (t) {
                            p.default.error(t), s(t);
                          }
                        }),
                          C(t, null, e, i, 0, o[0], !0)
                            .then(() => {
                              const t = o[0];
                              t.sortLinks(), a(t);
                            })
                            .catch((t) => s(t));
                      })
                    ]
              );
            });
          })),
          function (t, e, r, i) {
            return R.apply(this, arguments);
          });
      var R;
      const S = (function () {
          var t = (0, i.default)(function (t, e, r, i) {
            var a, n, l, o, c;
            return (0, s.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  return e(0), [4, t];
                case 1:
                  return (a = s.sent()), e(0.5), [4, (0, w.loadImage)(a)];
                case 2:
                  return (
                    (n = s.sent()),
                    (l = n.img),
                    (o = n.width),
                    (c = n.height),
                    e(1),
                    (i = i || new (0, m.default)(r)).setObjs(o, c),
                    i.drawImage(l, 0, 0, o, c),
                    [2, i]
                  );
              }
            });
          });
          return function (e, r, i, a) {
            return t.apply(this, arguments);
          };
        })(),
        C = (function () {
          var t = (0, i.default)(function (t, e, r, a, n, o, c) {
            return (0, s.__generator)(this, function (u) {
              return [
                2,
                new Promise((u, d) => {
                  function f() {
                    return (
                      (f = (0, i.default)(function () {
                        var i, d, f, g, m, b, E, x;
                        return (0, s.__generator)(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return (i = 6e3), [4, I(t.url)];
                            case 1:
                              s.sent(), (d = !1), (s.label = 2);
                            case 2:
                              return (
                                s.trys.push([2, 4, , 5]),
                                [
                                  4,
                                  (0, w.timeoutWrap)(
                                    h.sendMessage(t.id, { msg: l.MSG_CHECK_EXISTS }, { frameId: e }),
                                    50,
                                    "tabs.sendSendMessage.checkExists"
                                  )
                                ]
                              );
                            case 3:
                              return (
                                (f = s.sent()),
                                p.default.debug("Message.checkExists", f),
                                f && f.startTime && "js/page/index.js" === f.script && (d = !0),
                                [3, 5]
                              );
                            case 4:
                              return (g = s.sent()), p.default.debug("Message.checkExists.error", g), [3, 5];
                            case 5:
                              if (d) return [3, 11];
                              s.label = 6;
                            case 6:
                              return (
                                s.trys.push([6, 8, , 11]), [4, (0, w.timeoutWrap)(k(t, e, "js/page/index.js"), i, "api._executeScript")]
                              );
                            case 7:
                              return s.sent(), [3, 11];
                            case 8:
                              return (
                                (m = s.sent()),
                                c && (h.isExecuteScriptChromeError(m) || n > 0)
                                  ? ((b = h.captureVisibleTab(t.windowId, a.fmt_details.capture)), [4, S(b, r, a.fmt_details.capture, o)])
                                  : [3, 10]
                              );
                            case 9:
                              return s.sent(), u(P(o)), [2];
                            case 10:
                              throw m;
                            case 11:
                              return (
                                r(0),
                                (E = { msg: l.MSG_SCROLL_PAGE, canvasId: n, opts: a }),
                                (e = e || 0),
                                [4, h.sendMessage(t.id, E, { frameId: e })]
                              );
                            case 12:
                              return (
                                s.sent(),
                                (x = (t) => {
                                  if (t.canvasId === n) {
                                    N.off(x), o.applyBgRegions();
                                    const t = P(o);
                                    u(t);
                                  }
                                }),
                                N.on(x),
                                [2]
                              );
                          }
                        });
                      })),
                      f.apply(this, arguments)
                    );
                  }
                  (function () {
                    return f.apply(this, arguments);
                  })().catch(d);
                })
              ];
            });
          });
          return function (e, r, i, a, n, s, l) {
            return t.apply(this, arguments);
          };
        })(),
        P = (t) => {
          const e = t.canvasObjs,
            r = t.scaleMultiplier || 1;
          return { canvases: e, pageWidth: t.totalWidth / r, pageHeight: t.totalHeight / r, scaleMultiplier: r };
        };
      function I(t) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = (0, i.default)(function (t) {
          return (0, s.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                return o.isFileUrl(t) ? [4, o.isAllowedFileSchemeAccess()] : [3, 2];
              case 1:
                if (!e.sent()) return f.trigger("needFilePermsClick"), [2, new Promise(() => {})];
                e.label = 2;
              case 2:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function T() {
        return (
          (T = (0, i.default)(function (t, e, r, i, a, n) {
            var l, o, c, u, d, f, g, m, b, E, x, _, y, M, v, R;
            return (0, s.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  if (n)
                    return (
                      n.canvases.forEach((t) => {
                        let e = t.canvas,
                          r = t.left,
                          a = t.top,
                          n = t.width,
                          s = t.height;
                        i.drawImage(e, r, a, n, s);
                      }),
                      [2, e]
                    );
                  (l = ""), (s.label = 1);
                case 1:
                  0, (s.label = 2);
                case 2:
                  return s.trys.push([2, 4, , 8]), [4, h.captureVisibleTab(t, { format: "png" })];
                case 3:
                  return (l = s.sent()), [3, 9];
                case 4:
                  return (
                    (o = s.sent()),
                    h.isCaptureVisibleTabQuotaError(o)
                      ? (p.default.debug("Encountered capture quota error"), [4, (0, w.sleep)(50)])
                      : [3, 6]
                  );
                case 5:
                  return s.sent(), [3, 7];
                case 6:
                  throw o;
                case 7:
                  return [3, 8];
                case 8:
                  return [3, 1];
                case 9:
                  if (!l) throw (((c = new Error("No dataURI generated for visible tab")).name = "APICaptureStepError"), c);
                  return [4, (0, w.loadImage)(l)];
                case 10:
                  return (
                    (u = s.sent()),
                    (d = u.img),
                    (f = u.width),
                    (g = u.height),
                    (e.image = { width: f, height: g }),
                    (m = r === f ? 1 : f / r),
                    i.setScaleMultiplier(m),
                    1 !== m && i.scaleAll(e, ["x", "y", "totalWidth", "totalHeight", "capture.*", "clip.*"]),
                    i.isEmpty() &&
                      (i.setObjs(e.totalWidth, e.totalHeight, e.canvasBg),
                      i.size() > 1 && a && a(i.size()),
                      e.bgRegions && (e.bgRegions.forEach((t) => i.scaleAll(t, ["sample.*", "fill.*"])), i.setBgRegions(e.bgRegions))),
                    (b = e.x + e.capture.x),
                    (E = e.y + e.capture.y),
                    (x = e.clip.width),
                    (_ = e.clip.height),
                    (y = b - e.clip.x),
                    (M = E - e.clip.y),
                    (v = e.image.width),
                    (R = e.image.height),
                    0 === x || 0 === _
                      ? p.default.warn("Zero area mask!", JSON.stringify(e))
                      : 0 === v || 0 === R
                      ? p.default.warn("Zero area for image!", JSON.stringify(e))
                      : i.drawImage(d, y, M, v, R, e, { x: b, y: E, width: x, height: _ }),
                    [2, e]
                  );
              }
            });
          })),
          T.apply(this, arguments)
        );
      }
      function k(t, e, r) {
        let i = "" === t.url;
        if (
          (function (t) {
            let e = chrome.extension.getURL("");
            return t.url.substring(0, e.length) === e;
          })(t)
        ) {
          let e,
            i = chrome.extension.getURL(r);
          try {
            e = chrome.extension.getViews({ type: "tab", tabId: t.id });
          } catch (t) {
            e = chrome.extension.getViews({ type: "tab" });
          }
          let a = e.filter((e) => e.location.href === t.url);
          return (
            a.length || p.default.error("No matching window found for: " + t.url),
            Promise.all(
              a.map(
                (t) =>
                  new Promise((e, r) => {
                    let a = t.document.createElement("script");
                    (a.src = i), a.addEventListener("load", e, !1), t.document.body.appendChild(a);
                  })
              )
            )
          );
        }
        {
          let a = { file: r };
          return (
            "number" == typeof e && ((a.frameId = e), e > 0 && (a.matchAboutBlank = !0)),
            i && (a.matchAboutBlank = !0),
            h.executeScript(t.id, a)
          );
        }
      }
      const A = (t) => "number" == typeof t,
        N = (function () {
          const t = "CaptureCompleteListener";
          return { on: (e) => f.on(t, e), off: (e) => f.off(t, e), emit: (e) => f.trigger(t, e) };
        })();
    }),
    a.register("hH2tP", function (e, r) {
      t(e.exports, "MSG_CAPTURE", () => i),
        t(e.exports, "MSG_CAPTURE_COMPLETE", () => a),
        t(e.exports, "MSG_CAPTURE_ERROR", () => n),
        t(e.exports, "MSG_CAPTURE_FRAME", () => s),
        t(e.exports, "MSG_CHECK_EXISTS", () => l),
        t(e.exports, "MSG_LOG", () => o),
        t(e.exports, "MSG_SCROLL_PAGE", () => c);
      const i = "capture",
        a = "captureComplete",
        n = "captureError",
        s = "captureFrame",
        l = "checkExists",
        o = "log",
        c = "scrollPage";
    }),
    a.register("7ntRd", function (e, r) {
      t(e.exports, "getAllFrames", () => n);
      const i = (0, a("3k2hL").genLastErrorFmt)("ChromeWebNavigationError"),
        n = (t) =>
          new Promise((e, r) => {
            chrome.webNavigation.getAllFrames(t, (t) => {
              let a = chrome.runtime.lastError;
              return a ? r(i(a, "getAllFrames")) : e(t);
            });
          });
    }),
    a.register("lk6Fz", function (e, r) {
      t(e.exports, "default", () => h);
      var i = a("jBCXK"),
        n = a("hGGFE"),
        s = a("j4JJz"),
        l = a("2z2pA");
      const o = 28800,
        c = 9e3;
      class h {
        size() {
          return this.canvasObjs.length;
        }
        isEmpty() {
          return 0 === this.canvasObjs.length;
        }
        updateMetadata(t) {
          this.metadata = (0, i.default)({}, this.metadata, t);
        }
        appendMetadataLinks(t) {
          if (t) {
            const e = [...(this.metadata.links || []), ...t];
            this.metadata = (0, n.default)((0, i.default)({}, this.metadata), { links: e });
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
        setObjs(t, e, r) {
          (this.totalWidth = t), (this.totalHeight = e);
          let i,
            a,
            n,
            s,
            l,
            h = e > o || t > o || e * t > 2592e5,
            u = t > e,
            d = h ? (u ? o : c) : t,
            f = h ? (u ? c : o) : e,
            g = Math.ceil(t / d),
            p = Math.ceil(e / f),
            m = 0,
            w = [];
          for (i = 0; i < p; i++)
            for (a = 0; a < g; a++) {
              (n = document.createElement("canvas")), (n.width = (a == g - 1 && t % d) || d), (n.height = (i == p - 1 && e % f) || f);
              let o = n.getContext("2d");
              r && ((o.fillStyle = r), o.fillRect(0, 0, n.width, n.height)),
                (s = a * d),
                (l = i * f),
                w.push({
                  canvas: n,
                  ctx: o,
                  index: m,
                  left: s,
                  right: s + n.width,
                  top: l,
                  bottom: l + n.height,
                  width: n.width,
                  height: n.height
                }),
                m++;
            }
          this.canvasObjs = w;
        }
        toDataURLs() {
          return this.canvasObjs.map((t) => t.canvas.toDataURL(this.exportFormat));
        }
        toBlobs() {
          return Promise.all(this.canvasObjs.map((t) => (0, s.canvasToBlob)(t.canvas, this.exportFormat)));
        }
        fillRect(t, e, r, i, a) {
          this._filter(e, r, i, a).forEach((n) => {
            let s = this._shift(n, e, r);
            (n.ctx.fillStyle = t), n.ctx.fillRect(s.x, s.y, i, a);
          });
        }
        strokeRect(t, e, r, i, a) {
          this._filter(e, r, i, a).forEach((n) => {
            let s = this._shift(n, e, r);
            (n.ctx.strokeStyle = t), n.ctx.strokeRect(s.x, s.y, i, a);
          });
        }
        drawImage(t, e, r, a, n, s, l) {
          this._debugCounter++,
            this._filter(e, r, a, n).forEach((o) => {
              const c = this._shift(o, e, r),
                h = l ? (0, i.default)({}, l, this._shift(o, l.x, l.y)) : void 0,
                u = o.ctx;
              if ((u.save(), h)) {
                const t = new Path2D(),
                  e = h.x,
                  r = h.y,
                  i = h.width,
                  a = h.height,
                  n = Math.floor(h.x),
                  s = Math.floor(h.y);
                let l = Math.ceil(h.width),
                  o = Math.ceil(h.height);
                n + l < e + i && (l += 1), s + o < r + a && (o += 1), t.rect(n, s, l, o), u.clip(t);
              }
              if ((u.drawImage(t, c.x, c.y), u.restore(), s && "object" == typeof s && !0 === s.debug)) {
                const t = l || { x: c.x, y: c.y, width: a, height: n };
                let e = Math.max(0, t.x),
                  r = Math.max(0, t.y),
                  i = t.x < 0 ? t.width + t.x : t.width,
                  o = t.y < 0 ? t.height + t.y : t.height;
                u.save(), (u.strokeStyle = "#0F0"), (u.lineWidth = 3), u.strokeRect(e, r, i, o);
                const h = 15;
                (u.font = `${h}px Arial`), (u.textAlign = "left"), (u.textBaseline = "top");
                const d = `#${this._debugCounter}: ${this._str(s)}`,
                  f = 5,
                  g = u.measureText(d).width;
                (u.fillStyle = "rgba(0, 0, 0, .4)"),
                  u.fillRect(e, r, g + 2 * f, h + 2 * f),
                  (u.fillStyle = "#FFF"),
                  u.fillText(d, e + f, r + f);
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
        _filter(t, e, r, i) {
          let a = t + r,
            n = e + i;
          return this.canvasObjs.filter((r) => t < r.right && a > r.left && e < r.bottom && n > r.top);
        }
        _shift(t, e, r) {
          return { x: Math.round(e - t.left), y: Math.round(r - t.top) };
        }
        _constrain(t, e, r, i, a) {
          const n = this._shift(t, e, r),
            s = n.x,
            l = s + i,
            o = n.y,
            c = o + a,
            h = Math.max(0, s),
            u = Math.max(0, o);
          return { x: h, y: u, width: Math.min(t.height, l - h), height: Math.min(t.height, c - u) };
        }
        scale(t) {
          return (t || 0) * this.scaleMultiplier;
        }
        scaleAll(t, e) {
          e.forEach((e) => {
            if ("*" === e) Object.keys(t).forEach((e) => (t[e] = this.scale(t[e])));
            else {
              let r = e.indexOf(".");
              -1 === r ? (t[e] = this.scale(t[e])) : this.scaleAll(t[e.substring(0, r)], [e.substring(r + 1)]);
            }
          });
        }
        setBgRegions(t) {
          this.bgRegions = t;
        }
        applyBgRegions() {
          this.bgRegions.forEach((t, e) => {
            let r = t.sample,
              i = t.fill;
            const a = new Map();
            this._filter(r.x, r.y, r.width, r.height).forEach((t) => {
              let e = this._constrain(t, r.x, r.y, r.width, r.height);
              if (e.width > 0 && e.height > 0) {
                let r = document.createElement("canvas");
                (r.width = e.width), (r.height = e.height);
                let i,
                  n = r.getContext("2d");
                n.drawImage(t.canvas, -e.x, -e.y);
                try {
                  i = n.getImageData(0, 0, e.width, e.height);
                } catch (t) {
                  l.default.error(t);
                }
                i && this._getHisto(i.data, a);
              }
            });
            let n = 0,
              s = 0;
            if (
              (a.forEach((t, e) => {
                t > n && ((n = t), (s = e));
              }),
              0 !== s)
            ) {
              const t = `rgb(${this._toRgb(s).join(", ")})`;
              this.fillRect(t, i.x, i.y, i.width, i.height);
            }
          });
        }
        _getHisto(t, e) {
          e = e || new Map();
          for (let r = 0, i = t.length; r < i; r += 4)
            if (255 === t[r + 3]) {
              const i = this._toInt(t[r], t[r + 1], t[r + 2]);
              e.set(i, (e.get(i) || 0) + 1);
            }
          return e;
        }
        _toInt(t, e, r) {
          return (t << 16) + (e << 8) + r;
        }
        _toRgb(t) {
          const e = 255 & t,
            r = 255 & (t >>= 8);
          return [255 & (t >>= 8), r, e];
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
})();
//# sourceMappingURL=popup.bac04142.js.map
