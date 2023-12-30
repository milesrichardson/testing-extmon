(() => {
  function t(t, e, r, n) {
    Object.defineProperty(t, e, { get: r, set: n, enumerable: !0, configurable: !0 });
  }
  function e(t) {
    return t && t.__esModule ? t.default : t;
  }
  var r =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    n = {},
    i = {},
    o = r.parcelRequire60cc;
  null == o &&
    (((o = function (t) {
      if (t in n) return n[t].exports;
      if (t in i) {
        var e = i[t];
        delete i[t];
        var r = { id: t, exports: {} };
        return (n[t] = r), e.call(r.exports, r, r.exports), r.exports;
      }
      var o = new Error("Cannot find module '" + t + "'");
      throw ((o.code = "MODULE_NOT_FOUND"), o);
    }).register = function (t, e) {
      i[t] = e;
    }),
    (r.parcelRequire60cc = o)),
    o.register("fquJx", function (e, r) {
      var n, i;
      t(
        e.exports,
        "register",
        () => n,
        (t) => (n = t)
      ),
        t(
          e.exports,
          "resolve",
          () => i,
          (t) => (i = t)
        );
      var o = {};
      (n = function (t) {
        for (var e = Object.keys(t), r = 0; r < e.length; r++) o[e[r]] = t[e[r]];
      }),
        (i = function (t) {
          var e = o[t];
          if (null == e) throw new Error("Could not resolve bundle with id " + t);
          return e;
        });
    }),
    o.register("avfZw", function (e, r) {
      t(e.exports, "UPDATED_HEADER_MIN_VERSION", () => i), t(e.exports, "default", () => s);
      var n = o("fiP9V");
      const i = "7.7",
        a = new (0, n.default)("migrations", {
          didFsToDb: { type: "bool", default: !1, help: "finished the fs to db migration" },
          firstKnownVersion: { type: "string", default: "", help: "record of first remembered version number" },
          didUpdatedHeaderModal: {
            type: "bool",
            default: !1,
            help: `closed the updated header message modal (affects versions before ${i}`
          },
          didUpdatedHeaderThrob: {
            type: "bool",
            default: !1,
            help: `interacted with the "Formatting" header for the updated header throb indicator (affects versions before ${i}`
          }
        });
      var s = a;
      a.load().then((t) => {
        t.didFsToDb;
      });
    }),
    o.register("1RQvI", function (e, r) {
      t(e.exports, "ERR_MSG_IF_PERSISTS", () => i), t(e.exports, "ERR_TITLE_COPY", () => a), t(e.exports, "ERR_MSG_COPY", () => s);
      var n = o("5Xemj");
      const i = (0, n.tr)("If this persists, please report it via the flag reporting button above."),
        a = (0, n.tr)("Unable to copy image"),
        s = (0, n.tr)("Please try again and wait to see the “Image copied to clipboard” message before switching to another window.");
    }),
    o.register("i9kVF", function (e, r) {
      t(e.exports, "GOOGLE_DOCS_MAX_PIXELS", () => c),
        t(e.exports, "canCopyTextToClipboard", () => l),
        t(e.exports, "copyTextToClipboard", () => h),
        t(e.exports, "canCopyBlobToClipboard", () => d),
        t(e.exports, "copyBlobToClipboard", () => p),
        t(e.exports, "copyImgEltToClipboard", () => m),
        t(e.exports, "copyImgToClipboard", () => b),
        t(e.exports, "fitToMaxPixels", () => w);
      var n = o("8rN6d"),
        i = o("ff4Ef"),
        a = o("8bPtr"),
        s = o("j4JJz"),
        u = o("6pLLc");
      const c = 25e6;
      function l() {
        return !(!navigator.clipboard || !navigator.clipboard.writeText);
      }
      function h(t) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = (0, n.default)(function (t) {
          return (0, a.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, navigator.clipboard.writeText(t)];
              case 1:
                return e.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function d() {
        return !!(navigator.clipboard && navigator.clipboard.write && window.ClipboardItem);
      }
      function p(t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, n.default)(function (t) {
          var e;
          return (0, a.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (e = [new ClipboardItem(Object.defineProperty({}, t.type, { value: t, enumerable: !0 }))]),
                  [4, navigator.clipboard.write(e)]
                );
              case 1:
                return r.sent(), [2];
            }
          });
        })).apply(this, arguments);
      }
      function m(t, e, r, n) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, n.default)(function (t, e, r, n) {
          var o, s, u;
          return (0, a.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, N(t, e, r, n)];
              case 1:
                return (o = i.default.apply(void 0, [a.sent(), 2])), (s = o[0]), (u = o[1]), [4, p(s)];
              case 2:
                return a.sent(), [2, u];
            }
          });
        })).apply(this, arguments);
      }
      function b(t, e) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = (0, n.default)(function (t, e) {
          var r, n, o;
          return (0, a.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, x(t, e)];
              case 1:
                return (r = i.default.apply(void 0, [a.sent(), 2])), (n = r[0]), (o = r[1]), [4, p(n)];
              case 2:
                return a.sent(), [2, o];
            }
          });
        })).apply(this, arguments);
      }
      function w(t, e) {
        let r = void 0 === e ? c : e,
          n = t.width,
          i = t.height;
        if (n * i > r) {
          const e = Math.sqrt(r / (n * i));
          let o = Math.floor(n * e),
            a = o * (i / n);
          const s = document.createElement("canvas");
          (s.width = o), (s.height = Math.floor(a));
          return s.getContext("2d").drawImage(t, 0, 0, o, a), [s, !0];
        }
        return [t, !1];
      }
      function x(t, e) {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = (0, n.default)(function (t, e) {
          var r;
          return (0, a.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (0, u.simpleLoadImage)(t)];
              case 1:
                return [2, N((r = e.sent()), r.width, r.height)];
            }
          });
        })).apply(this, arguments);
      }
      function N(t, e, r, n) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, n.default)(function (t, e, r, n) {
          var o, u, c;
          return (0, a.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (o = !1),
                  ((u = document.createElement("canvas")).width = e),
                  (u.height = r),
                  u.getContext("2d").drawImage(t, 0, 0),
                  n && n > 0 && ((c = (0, i.default)(w(u, n), 2)), (u = c[0]), (o = c[1])),
                  [4, (0, s.canvasToBlob)(u, "image/png")]
                );
              case 1:
                return [2, [a.sent(), o]];
            }
          });
        })).apply(this, arguments);
      }
    }),
    o.register("94TAZ", function (r, n) {
      t(r.exports, "default", () => h);
      var i = o("gwJFa"),
        a = o("3pr9z"),
        s = o("7b0kr");
      const u = () => {},
        c = (t) => {
          t.preventDefault(), t.stopPropagation();
        },
        l = (t) => {
          let r = t.pageX,
            n = t.pageY,
            o = t.onClose,
            a = t.onUpdatePosition,
            l = t.cfg;
          const h = (0, s.useRef)(null);
          let d = !1;
          const p = r + 2,
            g = n + -10;
          (0, s.useLayoutEffect)(() => {
            const t = window.innerWidth,
              e = window.innerHeight,
              i = h.current,
              o = i.offsetWidth,
              s = i.offsetHeight;
            let u = null,
              c = null;
            p + o > t && (u = r - o - 4), g + s > e && (c = e - s - 10), (null === u && null === c) || ((d = !0), a(u || r, c || n));
          }),
            (0, s.useEffect)(() => {
              if (!d)
                return (
                  document.addEventListener("mousedown", t, !0),
                  document.addEventListener("keydown", e, !0),
                  () => {
                    document.removeEventListener("mousedown", t, !0), document.removeEventListener("keydown", e, !0);
                  }
                );
              function t(t) {
                f(t, h.current) || o();
              }
              function e(t) {
                o();
              }
            }, [l]);
          const m = { left: `${p}px`, top: `${g}px` };
          return e(s).createElement(
            "div",
            {
              ref: h,
              style: m,
              className: e(i)("clickdialog", { show: !0 }),
              onMouseDown: c,
              onMouseUp: c,
              onClick: (t) => {
                c(t), o();
              }
            },
            l.title && e(s).createElement("div", { className: "clickdialog--row title" }, l.title),
            l.rows.map((t, r) =>
              t.divider
                ? e(s).createElement("div", { key: r, className: "clickdialog--row divider" })
                : !0 === t.isTitle
                ? e(s).createElement(
                    "div",
                    { key: r, className: "clickdialog--row title title--inner", style: { paddingBottom: 0 } },
                    t.title
                  )
                : e(s).createElement(
                    "div",
                    { key: r, className: "clickdialog--row" },
                    e(s).createElement(
                      "button",
                      {
                        className: e(i)("clickdialog--btn", { disabled: t.disabled }),
                        title: t.title,
                        onClick: (!t.disabled && t.onClick) || u
                      },
                      e(s).createElement("span", { className: "lhs" }, t.text),
                      e(s).createElement("span", { className: "rhs" }, t.shortcut)
                    )
                  )
            )
          );
        };
      l.propTypes = {
        pageX: e(a).number.isRequired,
        pageY: e(a).number.isRequired,
        onClose: e(a).func.isRequired,
        onUpdatePosition: e(a).func.isRequired,
        cfg: e(a).shape({ title: e(a).string, rows: e(a).arrayOf(e(a).object.isRequired).isRequired })
      };
      var h = l;
      const f = (t, e) => {
        const r = t.pageX,
          n = t.pageY,
          i = r - window.scrollX,
          o = n - window.scrollY,
          a = e.offsetLeft,
          s = e.offsetTop,
          u = e.offsetWidth,
          c = e.offsetHeight;
        return a <= i && i <= a + u && s <= o && o <= s + c;
      };
    }),
    o.register("2kaV1", function (r, n) {
      t(r.exports, "triggerNotifyText", () => d),
        t(r.exports, "onNotifyText", () => p),
        t(r.exports, "offNotifyText", () => g),
        t(r.exports, "default", () => v);
      var i = o("ff4Ef"),
        a = o("gwJFa"),
        s = o("3pr9z"),
        u = o("7b0kr"),
        c = o("5Xemj"),
        l = o("erNYL"),
        h = o("fueUa");
      let f = null;
      const d = (t, e) => {
        window.clearTimeout(f),
          (0, l.trigger)(h.EVT_SET_NOTIFY_TEXT, { text: t }),
          e &&
            (f = window.setTimeout(() => {
              (0, l.trigger)(h.EVT_SET_NOTIFY_TEXT, { text: "" });
            }, e));
      };
      (d.clear = () => d("")),
        (d.copyingImage = () => d(`💕 ${(0, c.tr)("Copying image, please wait…")}`)),
        (d.copiedImage = (t) =>
          d(
            `✅ ${(0, c.tr)("Image copied to clipboard")}${
              t ? "\n\n(Resized to fit Google Doc max size. You can configure this in Options)" : ""
            }`,
            t ? 6e3 : 3e3
          )),
        (d.creatingPDF = (t) => d(`💕 ${(0, c.tr)("Creating PDF:")} ${Math.round(100 * t)}%`)),
        (d.createdPDF = () => d(`✅ ${(0, c.tr)("Created PDF!")}`, 3e3));
      const p = (t) => (0, l.on)(h.EVT_SET_NOTIFY_TEXT, t),
        g = (t) => (0, l.off)(h.EVT_SET_NOTIFY_TEXT, t),
        m = (t) => {
          let r = t.text,
            n = t.className;
          const o = (0, i.default)((0, u.useState)(!1), 2),
            s = o[0],
            c = o[1];
          return (
            (0, u.useEffect)(() => {
              s ||
                window.setTimeout(() => {
                  c(!0);
                });
            }, []),
            e(u).createElement(
              "div",
              { className: e(a)(n, "notify-snackbar", { show: s }) },
              e(u).createElement("div", { className: "notify-snackbar--inner" }, r)
            )
          );
        };
      m.propTypes = { text: e(s).string.isRequired, className: e(s).string, hideDelay: e(s).number };
      var v = m;
    }),
    o.register("1AJdn", function (r, n) {
      t(r.exports, "TEMPLATE_DATA_BAR", () => j),
        t(r.exports, "BROWSER_TEMPLATES", () => R),
        t(r.exports, "BROWSER_TEMPLATE_ID_NONE", () => B),
        t(r.exports, "createBrowserTemplate", () => T);
      var i = o("ff4Ef"),
        a = o("4fNEN"),
        s = o("5Xemj"),
        u = o("fueUa"),
        c = o("jFrkp"),
        l = o("csOaW"),
        h = o("aW3p4"),
        f = o("gvbZX"),
        d = o("8c7XT"),
        p = o("86JdN"),
        g = o("4quFu"),
        m = o("9WrTD"),
        v = o("lf8LX"),
        b = o("aLSnw"),
        y = o("lDY0J"),
        w = o("9wGt9"),
        x = o("51I8W");
      const L = u.FONT_FAMILY_SYSTEM_MAC,
        N = u.FONT_FAMILY_SYSTEM_WINDOWS,
        A = { type: c.BORDER_TYPE_BORDER, size: 1, color: "#909090" },
        _ = Object.assign({}, A, { size: 0.5 }),
        S = { font: `300 14px ${L}`, fontSize: 14, x: 143, y: 66 },
        P = {
          type: c.BORDER_TYPE_MULTI_BORDER,
          size: 4,
          borders: [
            { type: c.BORDER_TYPE_BORDER, size: 4, color: "#E2E5E9" },
            { type: c.BORDER_TYPE_BORDER, size: 2, color: "#E7E9ED" },
            { type: c.BORDER_TYPE_BORDER, size: 1, color: "#525252" }
          ]
        },
        k = { font: `400 14px ${N}`, fontSize: 14, x: 143, y: 66 },
        F = `400 16px ${L}`,
        I = (t, e, r, n, o, a) => {
          const s = (0, i.default)(e.textOffset, 2),
            u = s[0],
            c = s[1],
            l = q(o, e.textStyle.font, r - 2 * u, a ? [{ text: a, margin: 2 * u }] : void 0),
            h = Math.ceil(20.8);
          return { size: Math.floor(h * l.length - h / 10 + 2 * c), data: { lines: l, lineHeight: h } };
        },
        C = {
          title: "Mac OS X",
          key: "mac",
          densities: {
            "1x": {
              left: A,
              right: A,
              bottom: A,
              top: {
                type: c.BORDER_TYPE_IMAGE,
                size: 80,
                text: S,
                rightText: {
                  ctxStyle: { font: S.font, fillStyle: c.COLOR_HOST, textAlign: "right", textBaseline: "top" },
                  right: 21,
                  y: 15
                },
                multiplier: 1,
                left: { src: f, width: 348, height: 80 },
                leftSecure: { src: h, width: 348, height: 80 },
                center: { src: l, width: 10, height: 80 },
                right: { src: d, width: 112, height: 80 }
              }
            },
            "2x": {
              left: _,
              right: _,
              bottom: _,
              top: {
                type: c.BORDER_TYPE_IMAGE,
                size: 79.5,
                text: S,
                rightText: {
                  ctxStyle: { font: S.font, fillStyle: c.COLOR_HOST, textAlign: "right", textBaseline: "top" },
                  right: 21,
                  y: 15
                },
                multiplier: 2,
                left: { src: m, width: 348, height: 79.5 },
                leftSecure: { src: g, width: 348, height: 79.5 },
                center: { src: p, width: 5, height: 79.5 },
                right: { src: v, width: 111, height: 79.5 }
              }
            }
          }
        },
        E = {
          title: "Windows",
          key: "windows",
          densities: {
            "*": {
              left: P,
              right: P,
              bottom: P,
              top: {
                type: c.BORDER_TYPE_IMAGE,
                size: 80,
                text: k,
                rightText: {
                  ctxStyle: { font: k.font, fillStyle: c.COLOR_HOST, textAlign: "right", textBaseline: "top" },
                  right: 115,
                  y: 15
                },
                multiplier: 1,
                left: { src: w, width: 282, height: 80 },
                leftSecure: { src: y, width: 282, height: 80 },
                center: { src: b, width: 10, height: 80 },
                right: { src: x, width: 120, height: 80 }
              }
            }
          }
        },
        j = {
          title: (0, s.tr)("URL on top"),
          key: "bar",
          densities: {
            "*": {
              top: {
                type: c.BORDER_TYPE_TEXT_OVERLAY,
                size: 40,
                sizeFn: I,
                color: "#000",
                textOffset: [10, 11],
                textStyle: { fillStyle: "#fff", font: F, textBaseline: "top" }
              }
            }
          }
        },
        O = {
          title: (0, s.tr)("URL on bottom"),
          key: "barBottom",
          densities: {
            "*": {
              bottom: {
                type: c.BORDER_TYPE_TEXT_OVERLAY,
                size: 40,
                sizeFn: I,
                color: "#000",
                textOffset: [10, 11],
                textStyle: { fillStyle: "#fff", font: F, textBaseline: "top" }
              }
            }
          }
        },
        M = { title: (0, s.tr)("None"), key: "", densities: {} },
        R = { [C.key]: C, [E.key]: E, [j.key]: j, [O.key]: O, [M.key]: M },
        B = M.key,
        T = (t, r, n, i, o, s, u, l) => {
          e(a).ok(t === B || t in R, `Unknown browser template id: ${t}`);
          const h = t && t !== M.key ? R[t] : null;
          return new (0, c.default)(h, r, n, i, o, s, u, l);
        },
        q = (t, e, r, n) => {
          const i = document.createElement("canvas").getContext("2d");
          i.font = e;
          let o = [],
            a = t;
          const s = (t) => {
            let e = 0;
            return t && (t.text && (e += i.measureText(t.text).width), t.margin && (e += t.margin)), e;
          };
          for (; a; ) {
            const t = r - ((n && s(n[o.length])) || 0);
            let e = D(a, (e) => {
              const r = i.measureText(a.substring(0, e)).width;
              return r < t ? -1 : r > t ? 1 : 0;
            });
            0 === e && (e += 1), o.push(a.substring(0, e)), (a = a.substring(e));
          }
          return o;
        },
        D = (t, e) => {
          let r = 0,
            n = t.length;
          if (e(n) <= 0) return n;
          let i = 0;
          for (; r <= n; ) {
            let t = Math.floor((r + n) / 2);
            e(t) > 0 ? (n = t - 1) : ((i = t), (r = t + 1));
          }
          return i;
        };
    }),
    o.register("jFrkp", function (r, n) {
      t(r.exports, "BORDER_TYPE_BORDER", () => l),
        t(r.exports, "BORDER_TYPE_MULTI_BORDER", () => h),
        t(r.exports, "BORDER_TYPE_IMAGE", () => f),
        t(r.exports, "BORDER_TYPE_TEXT_OVERLAY", () => d),
        t(r.exports, "COLOR_HOST", () => m),
        t(r.exports, "default", () => x);
      var i = o("8rN6d"),
        a = o("ff4Ef"),
        s = o("8bPtr"),
        u = o("4fNEN"),
        c = o("hDtYW");
      const l = "border",
        h = "multi-border",
        f = "image",
        d = "text-overlay",
        p = ["left", "right", "bottom", "top"];
      let g = 0;
      const m = "#202020",
        v = "#80868B",
        b = "https://",
        y = (t) => {
          let e,
            r = [];
          if (
            (t.startsWith(b)
              ? (r.push({ text: "https", fill: "#5F6368" }, { text: "://", fill: v }), (e = t.substring(b.length)))
              : t.startsWith("http://")
              ? (e = t.substring("http://".length))
              : r.push({ text: t, fill: m }),
            void 0 !== e)
          ) {
            let t = e.split("/")[0].split(":")[0];
            r.push({ text: t, fill: m });
            let n = e.substring(t.length);
            n.indexOf("/") === n.length - 1 && (n = n.substring(0, n.length - 1)), r.push({ text: n, fill: v });
          }
          return r;
        },
        w = (t, e, r, n, i, o) => {
          let a = void 0 === o ? "…" : o;
          t.save();
          let s = !1;
          var u = !0,
            c = !1,
            l = void 0;
          try {
            for (var h, f = e[Symbol.iterator](); !(u = (h = f.next()).done); u = !0) {
              let e = h.value,
                o = e.text,
                u = e.fill;
              t.fillStyle = u;
              let c = o;
              if (i) for (; r + t.measureText(c).width > i && o.length; ) (s = !0), (o = o.substring(0, o.length - 1)), (c = o + a);
              if (!o) break;
              if ((t.fillText(c, r, n), (r += t.measureText(c).width), s)) break;
            }
          } catch (t) {
            (c = !0), (l = t);
          } finally {
            try {
              u || null == f.return || f.return();
            } finally {
              if (c) throw l;
            }
          }
          t.restore();
        };
      var x = class {
        draw(t) {
          var e = this;
          return (0, i.default)(function () {
            var r, n, i, o, u;
            return (0, s.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  if (null === e.id) return [2, !1];
                  if (
                    ((r = ++g),
                    e.offsets,
                    (n = e._borders),
                    e.url,
                    (i = Object.entries(n).filter((t) => {
                      let e = (0, a.default)(t, 2);
                      e[0];
                      return "multi-border" === e[1].type;
                    })).length)
                  )
                    for (o = 0, u = !0; u; )
                      (u = !1),
                        i.forEach((r) => {
                          let n = (0, a.default)(r, 2),
                            i = n[0],
                            s = n[1];
                          s.borders[o] && ((u = !0), e._drawBorder(t, i, s.borders[o]));
                        }),
                        o++;
                  return [
                    4,
                    (0, c.serialMap)(Object.entries(n), (n) => {
                      let i = (0, a.default)(n, 2),
                        o = i[0],
                        s = i[1];
                      const u = o;
                      if (r !== g) return !1;
                      switch (s.type) {
                        case l:
                          return e._drawBorder(t, u, s);
                        case h:
                          return !0;
                        case f:
                          return e._drawImage(t, u, s);
                        case d:
                          return e._drawTextOverlay(t, u, s);
                        default: {
                          const t = new Error(`Unknown browserTemplate type: ${s}`);
                          throw ((t.name = "BrowserTemplateRenderError"), t);
                        }
                      }
                    })
                  ];
                case 1:
                  return [2, !1 !== s.sent()];
              }
            });
          })();
        }
        _drawMultiBorder(t, e, r) {
          r.borders.forEach((r) => this._drawBorder(t, e, r));
        }
        _drawBorder(t, e, r) {
          const n = (0, a.default)(this._borderCoords(e), 6),
            i = n[0],
            o = n[1],
            s = n[2],
            u = n[3],
            c = n[4],
            l = n[5],
            h = r.size,
            f = r.color;
          return (
            t.save(),
            f && (t.strokeStyle = f),
            (t.lineWidth = h),
            t.beginPath(),
            t.moveTo(i + h * c, o + h * l),
            t.lineTo(s + h * c, u + h * l),
            t.stroke(),
            t.restore(),
            !0
          );
        }
        _borderCoords(t) {
          const e = this.offsets,
            r = e.fullHeight,
            n = e.fullWidth,
            i = e.top;
          switch (t) {
            case "left":
              return [0, i, 0, r, 0.5, 0];
            case "right":
              return [n, i, n, r, -0.5, 0];
            case "bottom":
              return [0, r, n, r, 0, -0.5];
            case "top":
              return [0, 0, n, 0, 0, 0.5];
            default:
              throw new Error(`Unknown browserTemplate side: ${t}`);
          }
        }
        _drawImage(t, r, n) {
          var o = this;
          return (0, i.default)(function () {
            var i, a, l, h, f, d, p, g, m, v, b, x, L, N, A, _, S, P, k, F, I;
            return (0, s.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    e(u).ok("top" === r, `Cannot browserTemplate.draw image for "${r}"`),
                    (i = n.left),
                    (a = n.leftSecure),
                    (l = n.center),
                    (h = n.right),
                    (f = o.url) && f.startsWith("https://") && (i = a),
                    (d = n.multiplier || 1),
                    (p = o.offsets.fullWidth),
                    (g = p - h.width) < i.width && (g = o.offsets.fullWidth),
                    (m = Math.min(i.width, g)),
                    [4, (0, c.loadImage)(i.src)]
                  );
                case 1:
                  return (v = s.sent().img), t.drawImage(v, 0, 0, m * d, i.height * d, 0, 0, m, i.height), [4, (0, c.loadImage)(l.src)];
                case 2:
                  for (b = s.sent(), x = b.img, L = g, N = m; N < L; N += l.width)
                    (A = Math.min(l.width, L - N)), t.drawImage(x, 0, 0, A * d, l.height * d, N, 0, A, l.height);
                  return (
                    t.save(),
                    (_ = n.text),
                    (t.font = _.font),
                    (t.fillStyle = "#000"),
                    (S = y(f)),
                    w(t, S, _.x, _.y, g),
                    (P = _.fontSize + 6),
                    (o.textCoords = { x: _.x, y: _.y - P + 5, width: g - _.x, height: P }),
                    t.restore(),
                    [4, (0, c.loadImage)(h.src)]
                  );
                case 3:
                  return (
                    (k = s.sent()),
                    (F = k.img),
                    g < p && t.drawImage(F, g, 0, h.width, h.height),
                    n.rightText &&
                      o.timeText &&
                      ((I = n.rightText), t.save(), Object.assign(t, I.ctxStyle), t.fillText(o.timeText, p - I.right, I.y), t.restore()),
                    [2, !0]
                  );
              }
            });
          })();
        }
        _drawTextOverlay(t, e, r) {
          this._drawBorder(t, e, r);
          const n = "bottom" === e ? this.offsets.fullHeight - r.size : 0;
          t.save(), Object.assign(t, r.textStyle);
          const i = r.sizeData,
            o = i.lines,
            s = i.lineHeight,
            u = (0, a.default)(r.textOffset, 2),
            c = u[0],
            l = u[1],
            h = { x: c, y: l + n, height: s * o.length, width: 0 };
          if (
            (o.forEach((e, r) => {
              t.fillText(e, h.x, h.y + r * s), (h.width = Math.max(t.measureText(e).width, h.width));
            }),
            this.timeText)
          ) {
            const e = this.offsets.fullWidth - c;
            (t.textAlign = "right"), t.fillText(this.timeText, e, l + n);
          }
          return (this.textCoords = h), !0;
        }
        constructor(t, e, r, n, i, o, s, u) {
          const c = (null == t ? void 0 : t.key) || "";
          if (((this.id = c), (this.time = s), (this.timeText = u || null), c)) {
            (e = e || ""), (this.url = e), (this.title = o || "");
            let s = i >= 2 ? "2x" : "1x",
              u = t.densities[s] || t.densities["*"];
            this._borders = u;
            let c = {};
            p.forEach((t) => {
              c[t] = (u[t] && u[t].size) || 0;
            }),
              (c.fullWidth = c.left + r + c.right),
              (c.fullHeight = c.top + n + c.bottom),
              Object.entries(u).forEach((t) => {
                let r = (0, a.default)(t, 2),
                  n = r[0],
                  i = r[1];
                if ("text-overlay" === i.type) {
                  const t = i.sizeFn(n, i, c.fullWidth, c.fullHeight, e, this.timeText),
                    r = t.size,
                    o = t.data;
                  (c[n] = r), (u[n] = Object.assign({}, i, { size: r, sizeData: o }));
                }
              }),
              (c.fullWidth = c.left + r + c.right),
              (c.fullHeight = c.top + n + c.bottom),
              (this.offsets = c);
          } else (this._borders = {}), (this.offsets = { left: 0, right: 0, bottom: 0, top: 0, fullWidth: r, fullHeight: n });
        }
      };
    }),
    o.register("csOaW", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("fOuRH");
    }),
    o.register("8r5Kp", function (e, r) {
      var n;
      t(
        e.exports,
        "getBundleURL",
        () => n,
        (t) => (n = t)
      );
      var i = {};
      function o(t) {
        return ("" + t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
      }
      n = function (t) {
        var e = i[t];
        return (
          e ||
            ((e = (function () {
              try {
                throw new Error();
              } catch (e) {
                var t = ("" + e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
                if (t) return o(t[2]);
              }
              return "/";
            })()),
            (i[t] = e)),
          e
        );
      };
    }),
    o.register("aW3p4", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("38Qcj");
    }),
    o.register("gvbZX", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("lXgyK");
    }),
    o.register("8c7XT", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("4sVT8");
    }),
    o.register("86JdN", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("iWy9i");
    }),
    o.register("4quFu", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("j6y4q");
    }),
    o.register("9WrTD", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("cGxYt");
    }),
    o.register("lf8LX", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("8SS96");
    }),
    o.register("aLSnw", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("jzuVp");
    }),
    o.register("lDY0J", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("6ZHQP");
    }),
    o.register("9wGt9", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("4arvq");
    }),
    o.register("51I8W", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("9UCbD");
    }),
    o.register("fAoww", function (e, r) {
      t(e.exports, "default", () => n), t(e.exports, "checkCanDispatch", () => i);
      var n = (t, e, r) => t.dispatchEvent(new CustomEvent(e, void 0 === r ? void 0 : { detail: r }));
      const i = (t) => {
        if (t.target instanceof HTMLElement) {
          let e = t.target;
          for (; e; ) {
            if (e.dataset.nodispatch) return !1;
            e = e.parentElement;
          }
        }
        return !0;
      };
    }),
    o.register("3cJ8u", function (r, n) {
      t(r.exports, "DEFAULT_BASE_OFFSET", () => c),
        t(r.exports, "computeBaseOffsets", () => l),
        t(r.exports, "computeLayersMinMax", () => h),
        t(r.exports, "getCenterCoords", () => d),
        t(r.exports, "findOverlappingLayers", () => p);
      var i = o("ff4Ef"),
        a = o("4fNEN"),
        s = o("d3Dc4"),
        u = o("iCPfM");
      const c = 100,
        l = (t, r, n, o, s, u, l, f, d, p, g) => {
          e(a).number(t, "computeBaseOffsets.baseWidth"),
            e(a).number(r, "computeBaseOffsets.baseHeight"),
            e(a).number(n, "computeBaseOffsets.basePixelDensity"),
            e(a).ok(o, "computeBaseOffsets.cropBox"),
            e(a).ok(s, "computeBaseOffsets.browserTemplate"),
            e(a).number(u, "computeBaseOffsets.zoom"),
            e(a).ok(l, "computeBaseOffsets.layers"),
            null == d && (d = c),
            e(a).number(d, "computeBaseOffsets.gutterSize"),
            null == p && (p = 0),
            e(a).number(p, "computeBaseOffsets.parentWidthPx"),
            null == g && (g = 0),
            e(a).number(g, "computeBaseOffsets.parentWidthPx");
          let m = u / 100,
            v = p / m,
            b = g / m;
          const y = {
              minX: -s.offsets.left,
              maxX: s.offsets.fullWidth - s.offsets.left,
              minY: -s.offsets.top,
              maxY: s.offsets.fullHeight - s.offsets.top
            },
            w = h(l, y, -o.x, -o.y),
            x = w.maxX - w.minX,
            L = w.maxY - w.minY,
            N = f ? (f.padding.padding || 0) + (f.stroke.width || 0) : 0;
          let A = d + N;
          v > x + 2 * A && (A = (v - x) / 2);
          const _ = A,
            S = d + N;
          let P = S;
          b > L + S + P && (P = b - L - S);
          const k = A - w.minX - o.x,
            F = S - w.minY - o.y,
            I = {
              baseLeft: k + o.x - s.offsets.left,
              baseTop: F + o.y - s.offsets.top,
              outerWidth: x + A + _,
              outerHeight: L + S + P,
              xOffset: k,
              yOffset: F,
              gutterLeft: A,
              gutterRight: _,
              gutterTop: S,
              gutterBottom: P
            },
            C = Object.entries(I)
              .filter((t) => {
                let e = (0, i.default)(t, 2),
                  r = (e[0], e[1]);
                return "number" != typeof r || isNaN(r);
              })
              .map((t) => {
                let e = (0, i.default)(t, 2);
                return `${e[0]}=${e[1]}`;
              });
          return e(a).ok(0 === C.length, `[computeBaseOffsets] bad result: ${C.join("; ")}`), I;
        },
        h = (t, e, r, n) => {
          let i = void 0 === e ? null : e,
            o = void 0 === r ? 0 : r,
            a = void 0 === n ? 0 : n;
          return t.reduce((t, e) => {
            const r = f(e, o, a);
            return null === t
              ? r
              : (r.minX < t.minX && (t.minX = r.minX),
                r.maxX > t.maxX && (t.maxX = r.maxX),
                r.minY < t.minY && (t.minY = r.minY),
                r.maxY > t.maxY && (t.maxY = r.maxY),
                t);
          }, i);
        },
        f = (t, e, r) => {
          let n = void 0 === e ? 0 : e,
            i = void 0 === r ? 0 : r;
          if ((0, u.isLayerBox)(t)) {
            const e = t.box;
            return { minX: e.x + n, maxX: e.x + e.width + n, minY: e.y + i, maxY: e.y + e.height + i };
          }
          if ((0, u.isLayerLine)(t)) {
            const e = t.line;
            return {
              minX: Math.min(e.x1, e.x2) + n,
              maxX: Math.max(e.x1, e.x2) + n,
              minY: Math.min(e.y1, e.y2) + i,
              maxY: Math.max(e.y1, e.y2) + i
            };
          }
          throw new Error(`Unknown layer: ${JSON.stringify(t)}`);
        },
        d = (t, e, r) => {
          let n, i, o, a;
          const s = r / 100,
            u = document.querySelector(".editor .canvas"),
            c = u && u.querySelector(".imagebase");
          if (u && c) {
            const r = u.scrollLeft / s,
              l = u.scrollTop / s;
            (o = u.clientWidth / s), (a = u.clientHeight / s);
            const h = c.offsetLeft,
              f = c.offsetTop;
            (n = r - (h + t.offsets.left - e.x) + o / 2), (i = l - (f + t.offsets.top - e.y) + a / 2);
          } else (n = e.x + e.width / 2), (i = e.y + e.height / 2), (o = e.width), (a = e.height);
          return (
            (n = Math.floor(n)),
            (i = Math.floor(i)),
            (o = Math.floor(o)),
            (a = Math.floor(a)),
            { centerX: n, centerY: i, width: o, height: a }
          );
        },
        p = (t, e) => {
          const r = Math.min(t.x1, t.x2),
            n = Math.min(t.y1, t.y2),
            i = Math.max(t.x1, t.x2),
            o = Math.max(t.y1, t.y2),
            a = [
              { x1: r, y1: n, x2: i, y2: n },
              { x1: r, y1: n, x2: r, y2: o },
              { x1: i, y1: n, x2: i, y2: o },
              { x1: r, y1: o, x2: i, y2: o }
            ],
            c = { x1: r, y1: n, x2: i, y2: o };
          return e.filter((t) => {
            const e = (0, u.getBounds)(t);
            return (0, u.isLayerLine)(t)
              ? a.some((t) => (0, s.doLinesIntersect)(t, e)) ||
                  (r <= e.x1 && r <= e.x2 && i >= e.x1 && i >= e.x2 && n <= e.y1 && n <= e.y2 && o >= e.y1 && o >= e.y2)
              : (0, s.doBoxesIntersect)(c, e);
          });
        };
    }),
    o.register("d3Dc4", function (e, r) {
      t(e.exports, "doBoxesIntersect", () => n), t(e.exports, "doLinesIntersect", () => i);
      const n = (t, e) =>
          ((t.x1 >= e.x1 && t.x1 <= e.x2) ||
            (t.x2 >= e.x1 && t.x2 <= e.x2) ||
            (e.x1 >= t.x1 && e.x1 <= t.x2) ||
            (e.x2 >= t.x1 && e.x2 <= t.x2)) &&
          ((t.y1 >= e.y1 && t.y1 <= e.y2) ||
            (t.y2 >= e.y1 && t.y2 <= e.y2) ||
            (e.y1 >= t.y1 && e.y1 <= t.y2) ||
            (e.y2 >= t.y1 && e.y2 <= t.y2)),
        i = (t, e) => o(t.x1, t.y1, t.x2, t.y2, e.x1, e.y1, e.x2, e.y2),
        o = (t, e, r, n, i, o, u, c) => {
          const l = a(t, e, r, n, i, o),
            h = a(t, e, r, n, u, c),
            f = a(i, o, u, c, t, e),
            d = a(i, o, u, c, r, n);
          return (
            (l != h && f != d) ||
            (0 == l && s(t, e, i, o, r, n)) ||
            (0 == h && s(t, e, u, c, r, n)) ||
            (0 == f && s(i, o, t, e, u, c)) ||
            (0 == d && s(i, o, r, n, u, c))
          );
        },
        a = (t, e, r, n, i, o) => {
          const a = (n - e) * (i - r) - (r - t) * (o - n);
          return 0 == a ? 0 : a > 0 ? 1 : 2;
        },
        s = (t, e, r, n, i, o) => r <= Math.max(t, i) && r >= Math.min(t, i) && n <= Math.max(e, o) && n >= Math.min(e, o);
    }),
    o.register("iCPfM", function (r, n) {
      t(r.exports, "generateLayerId", () => a),
        t(r.exports, "isLayerLine", () => s),
        t(r.exports, "isLayerBox", () => u),
        t(r.exports, "getBounds", () => c);
      var i = o("7UtM3");
      const a = () => e(i)();
      function s(t) {
        return void 0 !== t.line;
      }
      function u(t) {
        return void 0 !== t.box;
      }
      const c = (t) => (s(t) ? t.line : { x1: t.box.x, y1: t.box.y, x2: t.box.x + t.box.width, y2: t.box.y + t.box.height });
    }),
    o.register("7UtM3", function (t, e) {
      var r = o("ah7or"),
        n = o("4WhAC");
      t.exports = function (t, e, i) {
        var o = (e && i) || 0;
        "string" == typeof t && ((e = "binary" === t ? new Array(16) : null), (t = null));
        var a = (t = t || {}).random || (t.rng || r)();
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), e)) for (var s = 0; s < 16; ++s) e[o + s] = a[s];
        return e || n(a);
      };
    }),
    o.register("ah7or", function (t, e) {
      var r =
        ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
      if (r) {
        var n = new Uint8Array(16);
        t.exports = function () {
          return r(n), n;
        };
      } else {
        var i = new Array(16);
        t.exports = function () {
          for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), (i[e] = (t >>> ((3 & e) << 3)) & 255);
          return i;
        };
      }
    }),
    o.register("4WhAC", function (t, e) {
      for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
      t.exports = function (t, e) {
        var n = e || 0,
          i = r;
        return [
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          "-",
          i[t[n++]],
          i[t[n++]],
          "-",
          i[t[n++]],
          i[t[n++]],
          "-",
          i[t[n++]],
          i[t[n++]],
          "-",
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          i[t[n++]]
        ].join("");
      };
    }),
    o.register("ekuHd", function (e, r) {
      t(e.exports, "flattenBounds", () => a);
      var n = o("jBCXK"),
        i = o("hGGFE");
      const a = (t) => {
        const e = [];
        return (
          t.forEach((t) => {
            t &&
              t.bounds &&
              t.bounds.forEach((r) => {
                e.push((0, i.default)((0, n.default)({}, r), { url: t.url }));
              });
          }),
          e
        );
      };
    }),
    o.register("ld3ci", function (t, e) {
      function r(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      (t.exports = r),
        (r.equal = function (t, e, r) {
          if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
        });
    }),
    o.register("kRWUw", function (r, n) {
      t(r.exports, "default", () => a);
      var i = o("7b0kr"),
        a = (t) => {
          let r = t.fill,
            n = void 0 === r ? "#fff" : r,
            o = t.size,
            a = void 0 === o ? 14 : o;
          return e(i).createElement(
            "svg",
            { width: a, height: a, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            e(i).createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z",
              fill: n
            })
          );
        };
    }),
    o.register("jIppf", function (r, n) {
      t(r.exports, "default", () => d);
      var i = o("iPbYd"),
        a = o("gwJFa"),
        s = o("3pr9z"),
        u = o("7b0kr"),
        c = o("fueUa"),
        l = o("fAoww"),
        h = o("kRWUw"),
        f = o("8vc73");
      class d extends u.Component {
        componentDidMount() {
          window.setTimeout(() => {
            this.setState({ preAnimate: !1 });
          }, 10);
        }
        render() {
          if (!this.props.enabled) return null;
          let t = this.props,
            r = t.outsideX,
            n = t.style;
          const i = e(a)("modal", this.props.className, { "dim-bg": this.props.dimBg }),
            o = e(a)("modal-inner", { "pre-animate": this.state.preAnimate }),
            s = e(a)("close-wrapper", { "pre-animate": this.state.preAnimate });
          let c;
          this.props.fullscreen
            ? ((n = Object.assign({ padding: 0, background: "#f1f1d944" }, n)),
              (c = { position: "absolute", top: "20px", bottom: "20px", left: "20px", right: "20px", padding: "0", maxHeight: "100vh" }))
            : (c = { maxWidth: g(this.props.width) }),
            (c.borderRadius = g(this.props.radius));
          const l = this.props.render ? this.props.render({ onClose: this.handleClose, parentRef: this.innerRef }) : this.props.children;
          return e(u).createElement(
            "div",
            { className: i, onClick: this.handleClose, onMouseDown: this.handleMouseDown, onMouseUp: this.handleMouseUp, style: n },
            r &&
              e(u).createElement(
                "div",
                { className: s, style: c },
                e(u).createElement(
                  "button",
                  { type: "button", className: "close", onClick: this.handleClose },
                  e(u).createElement(f.default, null, "Close"),
                  e(u).createElement(h.default, null)
                )
              ),
            e(u).createElement("div", { className: o, style: c, onClick: this.handleClickInner, ref: this.innerRef }, l)
          );
        }
        constructor(t) {
          super(t),
            (0, i.default)(this, "handleClose", (t) => {
              t.preventDefault(),
                t.stopPropagation(),
                this.props.onToggle && this.props.onToggle(!1),
                (0, l.default)(window, c.EVT_MODAL_CLOSE);
            }),
            (0, i.default)(this, "handleClickInner", (t) => this._stopPropagation(t)),
            (0, i.default)(this, "handleMouseDown", (t) => this._stopPropagation(t)),
            (0, i.default)(this, "handleMouseUp", (t) => this._stopPropagation(t, !0)),
            (0, i.default)(this, "_stopPropagation", (t, e) => {
              (void 0 !== e && e && p(t.target)) || t.stopPropagation();
            }),
            (this.state = { preAnimate: !0 }),
            (this.innerRef = e(u).createRef());
        }
      }
      (0, i.default)(d, "propTypes", {
        className: e(s).string,
        style: e(s).object,
        enabled: e(s).bool.isRequired,
        dimBg: e(s).bool.isRequired,
        onToggle: e(s).func,
        outsideX: e(s).bool.isRequired,
        width: e(s).number.isRequired,
        radius: e(s).number.isRequired,
        fullscreen: e(s).bool.isRequired,
        render: e(s).func
      }),
        (0, i.default)(d, "defaultProps", { enabled: !0, dimBg: !1, style: {}, width: 360, radius: 10, outsideX: !1, fullscreen: !1 });
      const p = (t) => {
          for (; t; ) {
            if (t.dataset.modalIgnore) return !0;
            t = t.parentElement;
          }
          return !1;
        },
        g = (t) => `${t}px`;
    }),
    o.register("8vc73", function (r, n) {
      t(r.exports, "default", () => s);
      var i = o("7b0kr");
      const a = {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        border: 0
      };
      var s = (t) => {
        let r = t.children;
        return e(i).createElement("span", { style: a }, r);
      };
    }),
    o.register("eYuPW", function (r, n) {
      t(r.exports, "default", () => h), t(r.exports, "AnnounceImg", () => f);
      var i = o("7b0kr"),
        a = o("bHzHt"),
        s = o("drWuT"),
        u = o("30MUB"),
        c = o("5HsGc"),
        l = o("4xZUw");
      var h = () =>
        e(i).createElement(a.default, { className: "br", src: e(s), src2x: e(u), width: 187, height: 65, alt: "editor emojis" });
      const f = () =>
        e(i).createElement(a.default, { className: "br", src: e(c), src2x: e(l), width: 187, height: 49, alt: "announce emojis" });
    }),
    o.register("bHzHt", function (r, n) {
      t(r.exports, "default", () => u);
      var i = o("3pr9z"),
        a = o("7b0kr");
      const s = (t) => {
        const r = Object.assign({}, t);
        return r.src2x && ((r.srcSet = `${r.src2x} 2x`), delete r.src2x), e(a).createElement("img", r);
      };
      s.propTypes = { src: e(i).string.isRequired, src2x: e(i).string, width: e(i).number, height: e(i).number };
      var u = s;
    }),
    o.register("drWuT", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("l8aKp");
    }),
    o.register("30MUB", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("6ZP41");
    }),
    o.register("5HsGc", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("2a6R1");
    }),
    o.register("4xZUw", function (t, e) {
      t.exports = o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("hwIGx");
    }),
    o.register("5kOv9", function (e, r) {
      t(e.exports, "toPDF", () => p);
      var n = o("8rN6d"),
        i = o("jBCXK"),
        a = o("ff4Ef"),
        s = o("8bPtr"),
        u = o("d95Sf"),
        c = o("2z2pA"),
        l = o("6pLLc"),
        h = o("8ioZ3");
      const f = "pt",
        d = {
          [h.PDF_FORMAT_LETTER]: [612, 792],
          [h.PDF_FORMAT_LEGAL]: [612, 1008],
          [h.PDF_FORMAT_A4]: [595.28, 841.89],
          [h.PDF_FORMAT_LETTER_LANDSCAPE]: [792, 612],
          [h.PDF_FORMAT_LEGAL_LANDSCAPE]: [1008, 612],
          [h.PDF_FORMAT_A4_LANDSCAPE]: [841.89, 595.28]
        };
      function p(t, e, r, n, i, o, a, s) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, n.default)(function (t, e, r, n, o, p, g, y) {
          var w,
            x,
            L,
            N,
            A,
            _,
            S,
            P,
            k,
            F,
            I,
            C,
            E,
            j,
            O,
            M,
            R,
            B,
            T,
            q,
            D,
            U,
            z,
            H,
            W,
            V,
            G,
            Y,
            X,
            J,
            K,
            $,
            Z,
            Q,
            tt,
            et,
            rt,
            nt,
            it,
            ot,
            at,
            st,
            ut;
          return (0, s.__generator)(this, function (s) {
            switch (s.label) {
              case 0:
                return g ? (g(0), [4, (0, l.sleep)(0)]) : [3, 2];
              case 1:
                s.sent(), (s.label = 2);
              case 2:
                (r = r || 1),
                  (n = n || h.PDF_FORMAT_LETTER),
                  (w = n === h.PDF_FORMAT_FULL ? 0 : 20),
                  (N = n === h.PDF_FORMAT_FULL)
                    ? ((A = (0, a.default)(v(t[0].width, t[0].height + (y ? y.height : 0), r, w), 2)), (x = A[0]), (L = A[1]))
                    : ((_ = (0, a.default)(d[n], 2)), (x = _[0]), (L = _[1])),
                  (S = [x, L]),
                  (P = x - 2 * w),
                  (k = L - 2 * w),
                  (F = new (0, u.jsPDF)({ orientation: m(x, L), unit: f, format: S, compress: !0 })),
                  (I = 1),
                  (C = 1),
                  (E = !1),
                  (j = (t) => t * I),
                  (O = 1),
                  (M = y || null),
                  (R = [0]),
                  (B = 0),
                  (T = t.reduce((t, e) => t + e.height, 0)),
                  (q = t[0] ? t[0].width : 0),
                  (D = new Date().getTime()),
                  (U = 0),
                  (s.label = 3);
              case 3:
                if (!(U < t.length)) return [3, 8];
                (z = t[U]),
                  (H = z.img),
                  (W = z.width),
                  (V = z.height),
                  0 === U && (W > P && (I = P / W), (C = Math.floor(k / I))),
                  (G = t[U + 1]),
                  (Y = 0),
                  (s.label = 4);
              case 4:
                return Y < V - 1 ? (g ? (g(B / T), [4, (0, l.sleep)(0)]) : [3, 6]) : [3, 7];
              case 5:
                s.sent(), (s.label = 6);
              case 6:
                return (
                  E
                    ? M ||
                      (O++,
                      R.push(B),
                      N ? ((X = (0, a.default)(v(W, V, r, w), 2)), (J = X[0]), (K = X[1]), F.addPage([J, K], m(J, K))) : F.addPage())
                    : (E = !0),
                  ($ = document.createElement("canvas")),
                  (Z = W),
                  (Q = M ? M.height * (Z / M.width) : 0),
                  (tt = C),
                  (et = Q + V - Y),
                  (rt = Math.min(et, tt)),
                  (nt = rt < tt),
                  (it = rt < et),
                  ($.width = Z),
                  ($.height = rt),
                  Z < 1 || rt < 1
                    ? [3, 7]
                    : ((ot = $.getContext("2d")),
                      M && (ot.drawImage(M, 0, 0, $.width, Q), (M = null)),
                      ot.drawImage(H, 0, Y, Z, rt - Q, 0, Q, Z, rt - Q),
                      o && it && !N && (at = b($, ot, Z, rt, !1)) && (($ = at.canvas), (ot = at.ctx), (Z = $.width), (rt = $.height)),
                      nt && G && G.width === W
                        ? ((M = $), [3, 7])
                        : (F.addImage($, e.jspdf, w, w, j(Z), j(rt)),
                          (Y += rt - Q),
                          (B += rt),
                          c.default.debug(`[page${O}] cur total offset: ${B}`),
                          [3, 4]))
                );
              case 7:
                return U++, [3, 3];
              case 8:
                return (
                  (st = new Date().getTime()),
                  c.default.debug(`%cstart: ${D}\nend: ${st}\ndiff: ${(st - D) / 1e3}s`, "background:purple;color:#fff"),
                  g ? (g(1), [4, (0, l.sleep)(0)]) : [3, 10]
                );
              case 9:
                s.sent(), (s.label = 10);
              case 10:
                return (
                  p &&
                    ((ut = R.length),
                    p
                      .map(
                        (t) => (
                          (t = (0, i.default)({}, t)),
                          ["x", "y", "width", "height"].forEach((e) => {
                            t[e] = t[e] * r;
                          }),
                          t
                        )
                      )
                      .filter((t) => 0 !== t.width && 0 !== t.height && t.x + t.width > 0 && t.x < q && t.y + t.height > 0 && t.y < T)
                      .forEach((t, e) => {
                        let r = t.x,
                          n = t.y,
                          i = t.width,
                          o = t.height,
                          a = t.url;
                        const s = [];
                        for (let t = 0; t < ut; t++) {
                          const e = R[t],
                            r = R[t + 1] || 1 / 0;
                          e <= n + o && r > n && s.push({ pageNumber: t + 1, yMin: e, yMax: r });
                        }
                        for (let t = 0; t < s.length; t++) {
                          const e = s[t],
                            u = e.pageNumber,
                            c = e.yMin,
                            l = e.yMax,
                            h = s.length > 1 && (0 === t || t === s.length - 1);
                          let f = r,
                            d = n - c,
                            p = i,
                            g = o;
                          if ((d < 0 && ((g += d), (d = 0)), c + d + o > l && (g = l - (c + d)), g / o < 0.2 && g < 10 && h)) continue;
                          let m = j(f),
                            v = j(d),
                            b = j(p),
                            y = j(g);
                          F.setPage(u), F.link(m + w, v + w, b, y, { url: a });
                        }
                      })),
                  [2, F.output("blob")]
                );
            }
          });
        })).apply(this, arguments);
      }
      const m = (t, e) => (e >= t ? "portrait" : "landscape"),
        v = (t, e, r, n) => {
          let i = (0, a.default)(
              [t, e].map((t) => t / r),
              2
            ),
            o = i[0],
            s = i[1];
          if (o + 2 * n > 14400) {
            let t = o + 2 * n - 14400,
              e = (o - t) / o;
            (o -= t), (s = Math.floor(s * e));
          }
          return s > 14400 && (s = 14400), [o, s].map((t) => t + 2 * n);
        },
        b = (t, e, r, n, i) => {
          let o = r,
            a = 0;
          const s = e.getImageData(0, n - 60, r, 60),
            u = new Int32Array(s.data.buffer);
          for (let t = 0; t < 60; t++) {
            const e = r * (60 - t - 1);
            let n = 1;
            const i = e + r;
            for (let t = e + 1; t < i && (u[t - 1] !== u[t] && y(u[t - 1], u[t]) && n++, n !== o); t++);
            if (n < o && ((o = n), (a = t), 1 === o)) break;
          }
          if (0 === a) return null;
          const c = n - a,
            l = document.createElement("canvas");
          (l.width = r), (l.height = c);
          const h = l.getContext("2d");
          return h.drawImage(t, 0, 0), { canvas: l, ctx: h };
        },
        y = (t, e) => {
          for (let r = 0; r <= 24; r += 8) {
            const n = (t >> r) & 255,
              i = (e >> r) & 255;
            if (Math.abs(i - n) > 4) return !0;
          }
          return !1;
        };
    }),
    o.register("d95Sf", function (e, n) {
      t(e.exports, "jsPDF", () => B);
      /** @license
       *
       * jsPDF - PDF Document creation from JavaScript
       * Version 2.3.1 Built on 2021-03-08T15:44:11.674Z
       *                      CommitID 00000000
       *
       * Copyright (c) 2010-2020 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
       *               2015-2020 yWorks GmbH, http://www.yworks.com
       *               2015-2020 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
       *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
       *               2010 Aaron Spike, https://github.com/acspike
       *               2012 Willow Systems Corporation, willow-systems.com
       *               2012 Pablo Hess, https://github.com/pablohess
       *               2012 Florian Jenett, https://github.com/fjenett
       *               2013 Warren Weckesser, https://github.com/warrenweckesser
       *               2013 Youssef Beddad, https://github.com/lifof
       *               2013 Lee Driscoll, https://github.com/lsdriscoll
       *               2013 Stefan Slonevskiy, https://github.com/stefslon
       *               2013 Jeremy Morel, https://github.com/jmorel
       *               2013 Christoph Hartmann, https://github.com/chris-rock
       *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
       *               2014 James Makes, https://github.com/dollaruw
       *               2014 Diego Casorran, https://github.com/diegocr
       *               2014 Steven Spungin, https://github.com/Flamenco
       *               2014 Kenneth Glassey, https://github.com/Gavvers
       *
       * Permission is hereby granted, free of charge, to any person obtaining
       * a copy of this software and associated documentation files (the
       * "Software"), to deal in the Software without restriction, including
       * without limitation the rights to use, copy, modify, merge, publish,
       * distribute, sublicense, and/or sell copies of the Software, and to
       * permit persons to whom the Software is furnished to do so, subject to
       * the following conditions:
       *
       * The above copyright notice and this permission notice shall be
       * included in all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
       * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
       * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
       * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       *
       * Contributor(s):
       *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
       *    kim3er, mfo, alnorth, Flamenco
       */
      var i = o("czoXN"),
        a = (function () {
          return "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this;
        })();
      function s() {
        a.console && "function" == typeof a.console.log && a.console.log.apply(a.console, arguments);
      }
      var u = {
        log: s,
        warn: function (t) {
          a.console && ("function" == typeof a.console.warn ? a.console.warn.apply(a.console, arguments) : s.call(null, arguments));
        },
        error: function (t) {
          a.console && ("function" == typeof a.console.error ? a.console.error.apply(a.console, arguments) : s(t));
        }
      };
      /**
       * @license
       * FileSaver.js
       * A saveAs() FileSaver implementation.
       *
       * By Eli Grey, http://eligrey.com
       *
       * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
       * source  : http://purl.eligrey.com/github/FileSaver.js
       */ function c(t, e, r) {
        var n = new XMLHttpRequest();
        n.open("GET", t),
          (n.responseType = "blob"),
          (n.onload = function () {
            p(n.response, e, r);
          }),
          (n.onerror = function () {
            u.error("could not download file");
          }),
          n.send();
      }
      function l(t) {
        var e = new XMLHttpRequest();
        e.open("HEAD", t, !1);
        try {
          e.send();
        } catch (t) {}
        return e.status >= 200 && e.status <= 299;
      }
      function h(t) {
        try {
          t.dispatchEvent(new MouseEvent("click"));
        } catch (r) {
          var e = document.createEvent("MouseEvents");
          e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e);
        }
      }
      var f,
        d,
        p =
          a.saveAs ||
          ("object" != typeof window || window !== a
            ? function () {}
            : "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype
            ? function (t, e, r) {
                var n = a.URL || a.webkitURL,
                  i = document.createElement("a");
                (e = e || t.name || "download"),
                  (i.download = e),
                  (i.rel = "noopener"),
                  "string" == typeof t
                    ? ((i.href = t), i.origin !== location.origin ? (l(i.href) ? c(t, e, r) : h(i, (i.target = "_blank"))) : h(i))
                    : ((i.href = n.createObjectURL(t)),
                      setTimeout(function () {
                        n.revokeObjectURL(i.href);
                      }, 4e4),
                      setTimeout(function () {
                        h(i);
                      }, 0));
              }
            : "msSaveOrOpenBlob" in navigator
            ? function (t, e, r) {
                if (((e = e || t.name || "download"), "string" == typeof t))
                  if (l(t)) c(t, e, r);
                  else {
                    var n = document.createElement("a");
                    (n.href = t),
                      (n.target = "_blank"),
                      setTimeout(function () {
                        h(n);
                      });
                  }
                else
                  navigator.msSaveOrOpenBlob(
                    (function (t, e) {
                      return (
                        void 0 === e
                          ? (e = { autoBom: !1 })
                          : "object" != typeof e && (u.warn("Deprecated: Expected third argument to be a object"), (e = { autoBom: !e })),
                        e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)
                          ? new Blob([String.fromCharCode(65279), t], { type: t.type })
                          : t
                      );
                    })(t, r),
                    e
                  );
              }
            : function (t, e, r, n) {
                if (
                  ((n = n || open("", "_blank")) && (n.document.title = n.document.body.innerText = "downloading..."), "string" == typeof t)
                )
                  return c(t, e, r);
                var i = "application/octet-stream" === t.type,
                  o = /constructor/i.test(a.HTMLElement) || a.safari,
                  s = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((s || (i && o)) && "object" == typeof FileReader) {
                  var u = new FileReader();
                  (u.onloadend = function () {
                    var t = u.result;
                    (t = s ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;")),
                      n ? (n.location.href = t) : (location = t),
                      (n = null);
                  }),
                    u.readAsDataURL(t);
                } else {
                  var l = a.URL || a.webkitURL,
                    h = l.createObjectURL(t);
                  n ? (n.location = h) : (location.href = h),
                    (n = null),
                    setTimeout(function () {
                      l.revokeObjectURL(h);
                    }, 4e4);
                }
              });
      /**
       * A class to parse color values
       * @author Stoyan Stefanov <sstoo@gmail.com>
       * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
       * @license Use it if you like it
       */ function g(t) {
        var e;
        (t = t || ""),
          (this.ok = !1),
          "#" == t.charAt(0) && (t = t.substr(1, 6)),
          (t =
            {
              aliceblue: "f0f8ff",
              antiquewhite: "faebd7",
              aqua: "00ffff",
              aquamarine: "7fffd4",
              azure: "f0ffff",
              beige: "f5f5dc",
              bisque: "ffe4c4",
              black: "000000",
              blanchedalmond: "ffebcd",
              blue: "0000ff",
              blueviolet: "8a2be2",
              brown: "a52a2a",
              burlywood: "deb887",
              cadetblue: "5f9ea0",
              chartreuse: "7fff00",
              chocolate: "d2691e",
              coral: "ff7f50",
              cornflowerblue: "6495ed",
              cornsilk: "fff8dc",
              crimson: "dc143c",
              cyan: "00ffff",
              darkblue: "00008b",
              darkcyan: "008b8b",
              darkgoldenrod: "b8860b",
              darkgray: "a9a9a9",
              darkgreen: "006400",
              darkkhaki: "bdb76b",
              darkmagenta: "8b008b",
              darkolivegreen: "556b2f",
              darkorange: "ff8c00",
              darkorchid: "9932cc",
              darkred: "8b0000",
              darksalmon: "e9967a",
              darkseagreen: "8fbc8f",
              darkslateblue: "483d8b",
              darkslategray: "2f4f4f",
              darkturquoise: "00ced1",
              darkviolet: "9400d3",
              deeppink: "ff1493",
              deepskyblue: "00bfff",
              dimgray: "696969",
              dodgerblue: "1e90ff",
              feldspar: "d19275",
              firebrick: "b22222",
              floralwhite: "fffaf0",
              forestgreen: "228b22",
              fuchsia: "ff00ff",
              gainsboro: "dcdcdc",
              ghostwhite: "f8f8ff",
              gold: "ffd700",
              goldenrod: "daa520",
              gray: "808080",
              green: "008000",
              greenyellow: "adff2f",
              honeydew: "f0fff0",
              hotpink: "ff69b4",
              indianred: "cd5c5c",
              indigo: "4b0082",
              ivory: "fffff0",
              khaki: "f0e68c",
              lavender: "e6e6fa",
              lavenderblush: "fff0f5",
              lawngreen: "7cfc00",
              lemonchiffon: "fffacd",
              lightblue: "add8e6",
              lightcoral: "f08080",
              lightcyan: "e0ffff",
              lightgoldenrodyellow: "fafad2",
              lightgrey: "d3d3d3",
              lightgreen: "90ee90",
              lightpink: "ffb6c1",
              lightsalmon: "ffa07a",
              lightseagreen: "20b2aa",
              lightskyblue: "87cefa",
              lightslateblue: "8470ff",
              lightslategray: "778899",
              lightsteelblue: "b0c4de",
              lightyellow: "ffffe0",
              lime: "00ff00",
              limegreen: "32cd32",
              linen: "faf0e6",
              magenta: "ff00ff",
              maroon: "800000",
              mediumaquamarine: "66cdaa",
              mediumblue: "0000cd",
              mediumorchid: "ba55d3",
              mediumpurple: "9370d8",
              mediumseagreen: "3cb371",
              mediumslateblue: "7b68ee",
              mediumspringgreen: "00fa9a",
              mediumturquoise: "48d1cc",
              mediumvioletred: "c71585",
              midnightblue: "191970",
              mintcream: "f5fffa",
              mistyrose: "ffe4e1",
              moccasin: "ffe4b5",
              navajowhite: "ffdead",
              navy: "000080",
              oldlace: "fdf5e6",
              olive: "808000",
              olivedrab: "6b8e23",
              orange: "ffa500",
              orangered: "ff4500",
              orchid: "da70d6",
              palegoldenrod: "eee8aa",
              palegreen: "98fb98",
              paleturquoise: "afeeee",
              palevioletred: "d87093",
              papayawhip: "ffefd5",
              peachpuff: "ffdab9",
              peru: "cd853f",
              pink: "ffc0cb",
              plum: "dda0dd",
              powderblue: "b0e0e6",
              purple: "800080",
              red: "ff0000",
              rosybrown: "bc8f8f",
              royalblue: "4169e1",
              saddlebrown: "8b4513",
              salmon: "fa8072",
              sandybrown: "f4a460",
              seagreen: "2e8b57",
              seashell: "fff5ee",
              sienna: "a0522d",
              silver: "c0c0c0",
              skyblue: "87ceeb",
              slateblue: "6a5acd",
              slategray: "708090",
              snow: "fffafa",
              springgreen: "00ff7f",
              steelblue: "4682b4",
              tan: "d2b48c",
              teal: "008080",
              thistle: "d8bfd8",
              tomato: "ff6347",
              turquoise: "40e0d0",
              violet: "ee82ee",
              violetred: "d02090",
              wheat: "f5deb3",
              white: "ffffff",
              whitesmoke: "f5f5f5",
              yellow: "ffff00",
              yellowgreen: "9acd32"
            }[(t = (t = t.replace(/ /g, "")).toLowerCase())] || t);
        for (
          var r = [
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function (t) {
                  return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
                }
              },
              {
                re: /^(\w{2})(\w{2})(\w{2})$/,
                example: ["#00ff00", "336699"],
                process: function (t) {
                  return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
                }
              },
              {
                re: /^(\w{1})(\w{1})(\w{1})$/,
                example: ["#fb0", "f0f"],
                process: function (t) {
                  return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
                }
              }
            ],
            n = 0;
          n < r.length;
          n++
        ) {
          var i = r[n].re,
            o = r[n].process,
            a = i.exec(t);
          a && ((e = o(a)), (this.r = e[0]), (this.g = e[1]), (this.b = e[2]), (this.ok = !0));
        }
        (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
          }),
          (this.toHex = function () {
            var t = this.r.toString(16),
              e = this.g.toString(16),
              r = this.b.toString(16);
            return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == r.length && (r = "0" + r), "#" + t + e + r;
          });
      }
      /**
       * @license
       * Joseph Myers does not specify a particular license for his work.
       *
       * Author: Joseph Myers
       * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
       *
       * Modified by: Owen Leong
       */ function m(t, e) {
        var r = t[0],
          n = t[1],
          i = t[2],
          o = t[3];
        (r = b(r, n, i, o, e[0], 7, -680876936)),
          (o = b(o, r, n, i, e[1], 12, -389564586)),
          (i = b(i, o, r, n, e[2], 17, 606105819)),
          (n = b(n, i, o, r, e[3], 22, -1044525330)),
          (r = b(r, n, i, o, e[4], 7, -176418897)),
          (o = b(o, r, n, i, e[5], 12, 1200080426)),
          (i = b(i, o, r, n, e[6], 17, -1473231341)),
          (n = b(n, i, o, r, e[7], 22, -45705983)),
          (r = b(r, n, i, o, e[8], 7, 1770035416)),
          (o = b(o, r, n, i, e[9], 12, -1958414417)),
          (i = b(i, o, r, n, e[10], 17, -42063)),
          (n = b(n, i, o, r, e[11], 22, -1990404162)),
          (r = b(r, n, i, o, e[12], 7, 1804603682)),
          (o = b(o, r, n, i, e[13], 12, -40341101)),
          (i = b(i, o, r, n, e[14], 17, -1502002290)),
          (r = y(r, (n = b(n, i, o, r, e[15], 22, 1236535329)), i, o, e[1], 5, -165796510)),
          (o = y(o, r, n, i, e[6], 9, -1069501632)),
          (i = y(i, o, r, n, e[11], 14, 643717713)),
          (n = y(n, i, o, r, e[0], 20, -373897302)),
          (r = y(r, n, i, o, e[5], 5, -701558691)),
          (o = y(o, r, n, i, e[10], 9, 38016083)),
          (i = y(i, o, r, n, e[15], 14, -660478335)),
          (n = y(n, i, o, r, e[4], 20, -405537848)),
          (r = y(r, n, i, o, e[9], 5, 568446438)),
          (o = y(o, r, n, i, e[14], 9, -1019803690)),
          (i = y(i, o, r, n, e[3], 14, -187363961)),
          (n = y(n, i, o, r, e[8], 20, 1163531501)),
          (r = y(r, n, i, o, e[13], 5, -1444681467)),
          (o = y(o, r, n, i, e[2], 9, -51403784)),
          (i = y(i, o, r, n, e[7], 14, 1735328473)),
          (r = w(r, (n = y(n, i, o, r, e[12], 20, -1926607734)), i, o, e[5], 4, -378558)),
          (o = w(o, r, n, i, e[8], 11, -2022574463)),
          (i = w(i, o, r, n, e[11], 16, 1839030562)),
          (n = w(n, i, o, r, e[14], 23, -35309556)),
          (r = w(r, n, i, o, e[1], 4, -1530992060)),
          (o = w(o, r, n, i, e[4], 11, 1272893353)),
          (i = w(i, o, r, n, e[7], 16, -155497632)),
          (n = w(n, i, o, r, e[10], 23, -1094730640)),
          (r = w(r, n, i, o, e[13], 4, 681279174)),
          (o = w(o, r, n, i, e[0], 11, -358537222)),
          (i = w(i, o, r, n, e[3], 16, -722521979)),
          (n = w(n, i, o, r, e[6], 23, 76029189)),
          (r = w(r, n, i, o, e[9], 4, -640364487)),
          (o = w(o, r, n, i, e[12], 11, -421815835)),
          (i = w(i, o, r, n, e[15], 16, 530742520)),
          (r = x(r, (n = w(n, i, o, r, e[2], 23, -995338651)), i, o, e[0], 6, -198630844)),
          (o = x(o, r, n, i, e[7], 10, 1126891415)),
          (i = x(i, o, r, n, e[14], 15, -1416354905)),
          (n = x(n, i, o, r, e[5], 21, -57434055)),
          (r = x(r, n, i, o, e[12], 6, 1700485571)),
          (o = x(o, r, n, i, e[3], 10, -1894986606)),
          (i = x(i, o, r, n, e[10], 15, -1051523)),
          (n = x(n, i, o, r, e[1], 21, -2054922799)),
          (r = x(r, n, i, o, e[8], 6, 1873313359)),
          (o = x(o, r, n, i, e[15], 10, -30611744)),
          (i = x(i, o, r, n, e[6], 15, -1560198380)),
          (n = x(n, i, o, r, e[13], 21, 1309151649)),
          (r = x(r, n, i, o, e[4], 6, -145523070)),
          (o = x(o, r, n, i, e[11], 10, -1120210379)),
          (i = x(i, o, r, n, e[2], 15, 718787259)),
          (n = x(n, i, o, r, e[9], 21, -343485551)),
          (t[0] = k(r, t[0])),
          (t[1] = k(n, t[1])),
          (t[2] = k(i, t[2])),
          (t[3] = k(o, t[3]));
      }
      function v(t, e, r, n, i, o) {
        return (e = k(k(e, t), k(n, o))), k((e << i) | (e >>> (32 - i)), r);
      }
      function b(t, e, r, n, i, o, a) {
        return v((e & r) | (~e & n), t, e, i, o, a);
      }
      function y(t, e, r, n, i, o, a) {
        return v((e & n) | (r & ~n), t, e, i, o, a);
      }
      function w(t, e, r, n, i, o, a) {
        return v(e ^ r ^ n, t, e, i, o, a);
      }
      function x(t, e, r, n, i, o, a) {
        return v(r ^ (e | ~n), t, e, i, o, a);
      }
      function L(t) {
        var e,
          r = t.length,
          n = [1732584193, -271733879, -1732584194, 271733878];
        for (e = 64; e <= t.length; e += 64) m(n, N(t.substring(e - 64, e)));
        t = t.substring(e - 64);
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (e = 0; e < t.length; e++) i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
        if (((i[e >> 2] |= 128 << (e % 4 << 3)), e > 55)) for (m(n, i), e = 0; e < 16; e++) i[e] = 0;
        return (i[14] = 8 * r), m(n, i), n;
      }
      function N(t) {
        var e,
          r = [];
        for (e = 0; e < 64; e += 4)
          r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
        return r;
      }
      (f = a.atob.bind(a)), (d = a.btoa.bind(a));
      var A = "0123456789abcdef".split("");
      function _(t) {
        for (var e = "", r = 0; r < 4; r++) e += A[(t >> (8 * r + 4)) & 15] + A[(t >> (8 * r)) & 15];
        return e;
      }
      function S(t) {
        return String.fromCharCode((255 & t) >> 0, (65280 & t) >> 8, (16711680 & t) >> 16, (4278190080 & t) >> 24);
      }
      function P(t) {
        return L(t).map(S).join("");
      }
      function k(t, e) {
        return (t + e) & 4294967295;
      }
      if (
        "5d41402abc4b2a76b9719d911017c592" !=
        (function (t) {
          for (var e = 0; e < t.length; e++) t[e] = _(t[e]);
          return t.join("");
        })(L("hello"))
      );
      /**
       * @license
       * FPDF is released under a permissive license: there is no usage restriction.
       * You may embed it freely in your application (commercial or not), with or
       * without modifications.
       *
       * Reference: http://www.fpdf.org/en/script/script37.php
       */ function F(t, e) {
        var r, n, i, o;
        if (t !== r) {
          for (var a = ((i = t), (o = 1 + ((256 / t.length) >> 0)), new Array(o + 1).join(i)), s = [], u = 0; u < 256; u++) s[u] = u;
          var c = 0;
          for (u = 0; u < 256; u++) {
            var l = s[u];
            (c = (c + l + a.charCodeAt(u)) % 256), (s[u] = s[c]), (s[c] = l);
          }
          (r = t), (n = s);
        } else s = n;
        var h = e.length,
          f = 0,
          d = 0,
          p = "";
        for (u = 0; u < h; u++)
          (d = (d + (l = s[(f = (f + 1) % 256)])) % 256),
            (s[f] = s[d]),
            (s[d] = l),
            (a = s[(s[f] + s[d]) % 256]),
            (p += String.fromCharCode(e.charCodeAt(u) ^ a));
        return p;
      }
      /**
       * @license
       * Licensed under the MIT License.
       * http://opensource.org/licenses/mit-license
       * Author: Owen Leong (@owenl131)
       * Date: 15 Oct 2020
       * References:
       * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
       * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
       * http://www.fpdf.org/en/script/script37.php
       */ var I = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
      function C(t, e, r, n) {
        (this.v = 1), (this.r = 2);
        let i = 192;
        t.forEach(function (t) {
          if (void 0 !== I.perm) throw new Error("Invalid permission: " + t);
          i += I[t];
        }),
          (this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz");
        let o = (e + this.padding).substr(0, 32),
          a = (r + this.padding).substr(0, 32);
        (this.O = this.processOwnerPassword(o, a)),
          (this.P = -(1 + (255 ^ i))),
          (this.encryptionKey = P(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(n)).substr(0, 5)),
          (this.U = F(this.encryptionKey, this.padding));
      }
      function E(t) {
        if ("object" != typeof t) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
        var e = {};
        (this.subscribe = function (t, r, n) {
          if (((n = n || !1), "string" != typeof t || "function" != typeof r || "boolean" != typeof n))
            throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
          e.hasOwnProperty(t) || (e[t] = {});
          var i = Math.random().toString(35);
          return (e[t][i] = [r, !!n]), i;
        }),
          (this.unsubscribe = function (t) {
            for (var r in e) if (e[r][t]) return delete e[r][t], 0 === Object.keys(e[r]).length && delete e[r], !0;
            return !1;
          }),
          (this.publish = function (r) {
            if (e.hasOwnProperty(r)) {
              var n = Array.prototype.slice.call(arguments, 1),
                i = [];
              for (var o in e[r]) {
                var s = e[r][o];
                try {
                  s[0].apply(t, n);
                } catch (t) {
                  a.console && u.error("jsPDF PubSub Error", t.message, t);
                }
                s[1] && i.push(o);
              }
              i.length && i.forEach(this.unsubscribe);
            }
          }),
          (this.getTopics = function () {
            return e;
          });
      }
      function j(t) {
        if (!(this instanceof j)) return new j(t);
        var e = "opacity,stroke-opacity".split(",");
        for (var r in t) t.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = t[r]);
        (this.id = ""), (this.objectNumber = -1);
      }
      function O(t, e) {
        (this.gState = t), (this.matrix = e), (this.id = ""), (this.objectNumber = -1);
      }
      function M(t, e, r, n, i) {
        if (!(this instanceof M)) return new M(t, e, r, n, i);
        (this.type = "axial" === t ? 2 : 3), (this.coords = e), (this.colors = r), O.call(this, n, i);
      }
      function R(t, e, r, n, i) {
        if (!(this instanceof R)) return new R(t, e, r, n, i);
        (this.boundingBox = t), (this.xStep = e), (this.yStep = r), (this.stream = ""), (this.cloneIndex = 0), O.call(this, n, i);
      }
      function B(t) {
        var e,
          r = "string" == typeof arguments[0] ? arguments[0] : "p",
          n = arguments[1],
          i = arguments[2],
          o = arguments[3],
          s = [],
          c = 1,
          l = 16,
          h = "S",
          f = null;
        "object" == typeof (t = t || {}) &&
          ((r = t.orientation),
          (n = t.unit || n),
          (i = t.format || i),
          (o = t.compress || t.compressPdf || o),
          null !== (f = t.encryption || null) &&
            ((f.userPassword = f.userPassword || ""),
            (f.ownerPassword = f.ownerPassword || ""),
            (f.userPermissions = f.userPermissions || [])),
          (c = "number" == typeof t.userUnit ? Math.abs(t.userUnit) : 1),
          void 0 !== t.precision && (e = t.precision),
          void 0 !== t.floatPrecision && (l = t.floatPrecision),
          (h = t.defaultPathOperation || "S")),
          (s = t.filters || (!0 === o ? ["FlateEncode"] : s)),
          (n = n || "mm"),
          (r = ("" + (r || "P")).toLowerCase());
        var m = t.putOnlyUsedFonts || !1,
          v = {},
          b = { internal: {}, __private__: {} };
        b.__private__.PubSub = E;
        var y = "1.3",
          w = (b.__private__.getPdfVersion = function () {
            return y;
          });
        b.__private__.setPdfVersion = function (t) {
          y = t;
        };
        var x = {
          a0: [2383.94, 3370.39],
          a1: [1683.78, 2383.94],
          a2: [1190.55, 1683.78],
          a3: [841.89, 1190.55],
          a4: [595.28, 841.89],
          a5: [419.53, 595.28],
          a6: [297.64, 419.53],
          a7: [209.76, 297.64],
          a8: [147.4, 209.76],
          a9: [104.88, 147.4],
          a10: [73.7, 104.88],
          b0: [2834.65, 4008.19],
          b1: [2004.09, 2834.65],
          b2: [1417.32, 2004.09],
          b3: [1000.63, 1417.32],
          b4: [708.66, 1000.63],
          b5: [498.9, 708.66],
          b6: [354.33, 498.9],
          b7: [249.45, 354.33],
          b8: [175.75, 249.45],
          b9: [124.72, 175.75],
          b10: [87.87, 124.72],
          c0: [2599.37, 3676.54],
          c1: [1836.85, 2599.37],
          c2: [1298.27, 1836.85],
          c3: [918.43, 1298.27],
          c4: [649.13, 918.43],
          c5: [459.21, 649.13],
          c6: [323.15, 459.21],
          c7: [229.61, 323.15],
          c8: [161.57, 229.61],
          c9: [113.39, 161.57],
          c10: [79.37, 113.39],
          dl: [311.81, 623.62],
          letter: [612, 792],
          "government-letter": [576, 756],
          legal: [612, 1008],
          "junior-legal": [576, 360],
          ledger: [1224, 792],
          tabloid: [792, 1224],
          "credit-card": [153, 243]
        };
        b.__private__.getPageFormats = function () {
          return x;
        };
        var L = (b.__private__.getPageFormat = function (t) {
          return x[t];
        });
        i = i || "a4";
        var N = { COMPAT: "compat", ADVANCED: "advanced" },
          A = N.COMPAT;
        function _() {
          this.saveGraphicsState(),
            st(new Ut(Lt, 0, 0, -Lt, 0, vr() * Lt).toString() + " cm"),
            this.setFontSize(this.getFontSize() / Lt),
            (h = "n"),
            (A = N.ADVANCED);
        }
        function S() {
          this.restoreGraphicsState(), (h = "S"), (A = N.COMPAT);
        }
        var P = function (t, e) {
          if (
            ("bold" == t && "normal" == e) ||
            ("bold" == t && 400 == e) ||
            ("normal" == t && "italic" == e) ||
            ("bold" == t && "italic" == e)
          )
            throw new Error("Invalid Combination of fontweight and fontstyle");
          return (
            e && t !== e && (t = 400 == e ? ("italic" == t ? "italic" : "normal") : 700 == e && "italic" !== t ? "bold" : t + "" + e), t
          );
        };
        (b.advancedAPI = function (t) {
          var e = A === N.COMPAT;
          return e && _.call(this), "function" != typeof t || (t(this), e && S.call(this)), this;
        }),
          (b.compatAPI = function (t) {
            var e = A === N.ADVANCED;
            return e && S.call(this), "function" != typeof t || (t(this), e && _.call(this)), this;
          }),
          (b.isAdvancedAPI = function () {
            return A === N.ADVANCED;
          });
        var k,
          F = function (t) {
            if (A !== N.ADVANCED) throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
          },
          I =
            (b.roundToPrecision =
            b.__private__.roundToPrecision =
              function (t, r) {
                var n = e || r;
                if (isNaN(t) || isNaN(n)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
                return t.toFixed(n).replace(/0+$/, "");
              });
        k =
          b.hpf =
          b.__private__.hpf =
            "number" == typeof l
              ? function (t) {
                  if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
                  return I(t, l);
                }
              : "smart" === l
              ? function (t) {
                  if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
                  return I(t, t > -1 && t < 1 ? 16 : 5);
                }
              : function (t) {
                  if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
                  return I(t, 16);
                };
        var O =
            (b.f2 =
            b.__private__.f2 =
              function (t) {
                if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
                return I(t, 2);
              }),
          T = (b.__private__.f3 = function (t) {
            if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3");
            return I(t, 3);
          }),
          q =
            (b.scale =
            b.__private__.scale =
              function (t) {
                if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.scale");
                return A === N.COMPAT ? t * Lt : A === N.ADVANCED ? t : void 0;
              }),
          D = function (t) {
            return q(
              (function (t) {
                return A === N.COMPAT ? vr() - t : A === N.ADVANCED ? t : void 0;
              })(t)
            );
          };
        b.__private__.setPrecision = b.setPrecision = function (t) {
          "number" == typeof parseInt(t, 10) && (e = parseInt(t, 10));
        };
        var U,
          z = "00000000000000000000000000000000",
          H = (b.__private__.getFileId = function () {
            return z;
          }),
          W = (b.__private__.setFileId = function (t) {
            return (
              (z =
                void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t)
                  ? t.toUpperCase()
                  : z
                      .split("")
                      .map(function () {
                        return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
                      })
                      .join("")),
              null !== f && (ke = new C(f.userPermissions, f.userPassword, f.ownerPassword, z)),
              z
            );
          });
        (b.setFileId = function (t) {
          return W(t), this;
        }),
          (b.getFileId = function () {
            return H();
          });
        var V = (b.__private__.convertDateToPDFDate = function (t) {
            var e = t.getTimezoneOffset(),
              r = e < 0 ? "+" : "-",
              n = Math.floor(Math.abs(e / 60)),
              i = Math.abs(e % 60),
              o = [r, K(n), "'", K(i), "'"].join("");
            return [
              "D:",
              t.getFullYear(),
              K(t.getMonth() + 1),
              K(t.getDate()),
              K(t.getHours()),
              K(t.getMinutes()),
              K(t.getSeconds()),
              o
            ].join("");
          }),
          G = (b.__private__.convertPDFDateToDate = function (t) {
            var e = parseInt(t.substr(2, 4), 10),
              r = parseInt(t.substr(6, 2), 10) - 1,
              n = parseInt(t.substr(8, 2), 10),
              i = parseInt(t.substr(10, 2), 10),
              o = parseInt(t.substr(12, 2), 10),
              a = parseInt(t.substr(14, 2), 10);
            return new Date(e, r, n, i, o, a, 0);
          }),
          Y = (b.__private__.setCreationDate = function (t) {
            var e;
            if ((void 0 === t && (t = new Date()), t instanceof Date)) e = V(t);
            else {
              if (
                !/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(
                  t
                )
              )
                throw new Error("Invalid argument passed to jsPDF.setCreationDate");
              e = t;
            }
            return (U = e);
          }),
          X = (b.__private__.getCreationDate = function (t) {
            var e = U;
            return "jsDate" === t && (e = G(U)), e;
          });
        (b.setCreationDate = function (t) {
          return Y(t), this;
        }),
          (b.getCreationDate = function (t) {
            return X(t);
          });
        var J,
          K = (b.__private__.padd2 = function (t) {
            return ("0" + parseInt(t)).slice(-2);
          }),
          $ = (b.__private__.padd2Hex = function (t) {
            return ("00" + (t = t.toString())).substr(t.length);
          }),
          Z = 0,
          Q = [],
          tt = [],
          et = 0,
          rt = [],
          nt = [],
          it = !1,
          ot = tt;
        b.__private__.setCustomOutputDestination = function (t) {
          (it = !0), (ot = t);
        };
        var at = function (t) {
          it || (ot = t);
        };
        b.__private__.resetCustomOutputDestination = function () {
          (it = !1), (ot = tt);
        };
        var st = (b.__private__.out = function (t) {
            return (t = t.toString()), (et += t.length + 1), ot.push(t), ot;
          }),
          ut = (b.__private__.write = function (t) {
            return st(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "));
          }),
          ct = (b.__private__.getArrayBuffer = function (t) {
            for (var e = t.length, r = new ArrayBuffer(e), n = new Uint8Array(r); e--; ) n[e] = t.charCodeAt(e);
            return r;
          }),
          lt = [
            ["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
            ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
            ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
            ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
            ["Courier", "courier", "normal", "WinAnsiEncoding"],
            ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
            ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
            ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
            ["Times-Roman", "times", "normal", "WinAnsiEncoding"],
            ["Times-Bold", "times", "bold", "WinAnsiEncoding"],
            ["Times-Italic", "times", "italic", "WinAnsiEncoding"],
            ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
            ["ZapfDingbats", "zapfdingbats", "normal", null],
            ["Symbol", "symbol", "normal", null]
          ];
        b.__private__.getStandardFonts = function () {
          return lt;
        };
        var ht = t.fontSize || 16;
        b.__private__.setFontSize = b.setFontSize = function (t) {
          return (ht = A === N.ADVANCED ? t / Lt : t), this;
        };
        var ft,
          dt =
            (b.__private__.getFontSize =
            b.getFontSize =
              function () {
                return A === N.COMPAT ? ht : ht * Lt;
              }),
          pt = t.R2L || !1;
        (b.__private__.setR2L = b.setR2L =
          function (t) {
            return (pt = t), this;
          }),
          (b.__private__.getR2L = b.getR2L =
            function () {
              return pt;
            });
        var gt,
          mt = (b.__private__.setZoomMode = function (t) {
            if (/^\d*\.?\d*%$/.test(t)) ft = t;
            else if (isNaN(t)) {
              if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(t))
                throw new Error(
                  'zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' +
                    t +
                    '" is not recognized.'
                );
              ft = t;
            } else ft = parseInt(t, 10);
          });
        b.__private__.getZoomMode = function () {
          return ft;
        };
        var vt,
          bt = (b.__private__.setPageMode = function (t) {
            if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t))
              throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
            gt = t;
          });
        b.__private__.getPageMode = function () {
          return gt;
        };
        var yt = (b.__private__.setLayoutMode = function (t) {
          if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t))
            throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
          vt = t;
        });
        (b.__private__.getLayoutMode = function () {
          return vt;
        }),
          (b.__private__.setDisplayMode = b.setDisplayMode =
            function (t, e, r) {
              return mt(t), yt(e), bt(r), this;
            });
        var wt = { title: "", subject: "", author: "", keywords: "", creator: "" };
        (b.__private__.getDocumentProperty = function (t) {
          if (-1 === Object.keys(wt).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
          return wt[t];
        }),
          (b.__private__.getDocumentProperties = function () {
            return wt;
          }),
          (b.__private__.setDocumentProperties =
            b.setProperties =
            b.setDocumentProperties =
              function (t) {
                for (var e in wt) wt.hasOwnProperty(e) && t[e] && (wt[e] = t[e]);
                return this;
              }),
          (b.__private__.setDocumentProperty = function (t, e) {
            if (-1 === Object.keys(wt).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
            return (wt[t] = e);
          });
        var xt,
          Lt,
          Nt,
          At,
          _t,
          St = {},
          Pt = {},
          kt = [],
          Ft = {},
          It = {},
          Ct = {},
          Et = {},
          jt = null,
          Ot = 0,
          Mt = [],
          Rt = new E(b),
          Bt = t.hotfixes || [],
          Tt = {},
          qt = {},
          Dt = [],
          Ut = function (t, e, r, n, i, o) {
            if (!(this instanceof Ut)) return new Ut(t, e, r, n, i, o);
            isNaN(t) && (t = 1),
              isNaN(e) && (e = 0),
              isNaN(r) && (r = 0),
              isNaN(n) && (n = 1),
              isNaN(i) && (i = 0),
              isNaN(o) && (o = 0),
              (this._matrix = [t, e, r, n, i, o]);
          };
        Object.defineProperty(Ut.prototype, "sx", {
          get: function () {
            return this._matrix[0];
          },
          set: function (t) {
            this._matrix[0] = t;
          }
        }),
          Object.defineProperty(Ut.prototype, "shy", {
            get: function () {
              return this._matrix[1];
            },
            set: function (t) {
              this._matrix[1] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "shx", {
            get: function () {
              return this._matrix[2];
            },
            set: function (t) {
              this._matrix[2] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "sy", {
            get: function () {
              return this._matrix[3];
            },
            set: function (t) {
              this._matrix[3] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "tx", {
            get: function () {
              return this._matrix[4];
            },
            set: function (t) {
              this._matrix[4] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "ty", {
            get: function () {
              return this._matrix[5];
            },
            set: function (t) {
              this._matrix[5] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "a", {
            get: function () {
              return this._matrix[0];
            },
            set: function (t) {
              this._matrix[0] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "b", {
            get: function () {
              return this._matrix[1];
            },
            set: function (t) {
              this._matrix[1] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "c", {
            get: function () {
              return this._matrix[2];
            },
            set: function (t) {
              this._matrix[2] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "d", {
            get: function () {
              return this._matrix[3];
            },
            set: function (t) {
              this._matrix[3] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "e", {
            get: function () {
              return this._matrix[4];
            },
            set: function (t) {
              this._matrix[4] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "f", {
            get: function () {
              return this._matrix[5];
            },
            set: function (t) {
              this._matrix[5] = t;
            }
          }),
          Object.defineProperty(Ut.prototype, "rotation", {
            get: function () {
              return Math.atan2(this.shx, this.sx);
            }
          }),
          Object.defineProperty(Ut.prototype, "scaleX", {
            get: function () {
              return this.decompose().scale.sx;
            }
          }),
          Object.defineProperty(Ut.prototype, "scaleY", {
            get: function () {
              return this.decompose().scale.sy;
            }
          }),
          Object.defineProperty(Ut.prototype, "isIdentity", {
            get: function () {
              return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty;
            }
          }),
          (Ut.prototype.join = function (t) {
            return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(k).join(t);
          }),
          (Ut.prototype.multiply = function (t) {
            var e = t.sx * this.sx + t.shy * this.shx,
              r = t.sx * this.shy + t.shy * this.sy,
              n = t.shx * this.sx + t.sy * this.shx,
              i = t.shx * this.shy + t.sy * this.sy,
              o = t.tx * this.sx + t.ty * this.shx + this.tx,
              a = t.tx * this.shy + t.ty * this.sy + this.ty;
            return new Ut(e, r, n, i, o, a);
          }),
          (Ut.prototype.decompose = function () {
            var t = this.sx,
              e = this.shy,
              r = this.shx,
              n = this.sy,
              i = this.tx,
              o = this.ty,
              a = Math.sqrt(t * t + e * e),
              s = (t /= a) * r + (e /= a) * n;
            (r -= t * s), (n -= e * s);
            var u = Math.sqrt(r * r + n * n);
            return (
              (s /= u),
              t * (n /= u) < e * (r /= u) && ((t = -t), (e = -e), (s = -s), (a = -a)),
              {
                scale: new Ut(a, 0, 0, u, 0, 0),
                translate: new Ut(1, 0, 0, 1, i, o),
                rotate: new Ut(t, e, -e, t, 0, 0),
                skew: new Ut(1, 0, s, 1, 0, 0)
              }
            );
          }),
          (Ut.prototype.toString = function (t) {
            return this.join(" ");
          }),
          (Ut.prototype.inversed = function () {
            var t = this.sx,
              e = this.shy,
              r = this.shx,
              n = this.sy,
              i = this.tx,
              o = this.ty,
              a = 1 / (t * n - e * r),
              s = n * a,
              u = -e * a,
              c = -r * a,
              l = t * a;
            return new Ut(s, u, c, l, -s * i - c * o, -u * i - l * o);
          }),
          (Ut.prototype.applyToPoint = function (t) {
            var e = t.x * this.sx + t.y * this.shx + this.tx,
              r = t.x * this.shy + t.y * this.sy + this.ty;
            return new lr(e, r);
          }),
          (Ut.prototype.applyToRectangle = function (t) {
            var e = this.applyToPoint(t),
              r = this.applyToPoint(new lr(t.x + t.w, t.y + t.h));
            return new hr(e.x, e.y, r.x - e.x, r.y - e.y);
          }),
          (Ut.prototype.clone = function () {
            var t = this.sx,
              e = this.shy,
              r = this.shx,
              n = this.sy,
              i = this.tx,
              o = this.ty;
            return new Ut(t, e, r, n, i, o);
          }),
          (b.Matrix = Ut);
        var zt = (b.matrixMult = function (t, e) {
            return e.multiply(t);
          }),
          Ht = new Ut(1, 0, 0, 1, 0, 0);
        b.unitMatrix = b.identityMatrix = Ht;
        var Wt = function (t, e) {
          if (!It[t]) {
            var r = (e instanceof M ? "Sh" : "P") + (Object.keys(Ft).length + 1).toString(10);
            (e.id = r), (It[t] = r), (Ft[r] = e), Rt.publish("addPattern", e);
          }
        };
        (b.ShadingPattern = M),
          (b.TilingPattern = R),
          (b.addShadingPattern = function (t, e) {
            return F("addShadingPattern()"), Wt(t, e), this;
          }),
          (b.beginTilingPattern = function (t) {
            F("beginTilingPattern()"),
              dr(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix);
          }),
          (b.endTilingPattern = function (t, e) {
            F("endTilingPattern()"), (e.stream = nt[J].join("\n")), Wt(t, e), Rt.publish("endTilingPattern", e), Dt.pop().restore();
          });
        var Vt = (b.__private__.newObject = function () {
            var t = Gt();
            return Yt(t, !0), t;
          }),
          Gt = (b.__private__.newObjectDeferred = function () {
            return (
              Z++,
              (Q[Z] = function () {
                return et;
              }),
              Z
            );
          }),
          Yt = function (t, e) {
            return (e = "boolean" == typeof e && e), (Q[t] = et), e && st(t + " 0 obj"), t;
          },
          Xt = (b.__private__.newAdditionalObject = function () {
            var t = { objId: Gt(), content: "" };
            return rt.push(t), t;
          }),
          Jt = Gt(),
          Kt = Gt(),
          $t = (b.__private__.decodeColorString = function (t) {
            var e = t.split(" ");
            if (2 !== e.length || ("g" !== e[1] && "G" !== e[1]))
              5 !== e.length ||
                ("k" !== e[4] && "K" !== e[4]) ||
                (e = [(1 - e[0]) * (1 - e[3]), (1 - e[1]) * (1 - e[3]), (1 - e[2]) * (1 - e[3]), "r"]);
            else {
              var r = parseFloat(e[0]);
              e = [r, r, r, "r"];
            }
            for (var n = "#", i = 0; i < 3; i++) n += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(-2);
            return n;
          }),
          Zt = (b.__private__.encodeColorString = function (t) {
            var e;
            "string" == typeof t && (t = { ch1: t });
            var r = t.ch1,
              n = t.ch2,
              i = t.ch3,
              o = t.ch4,
              a = "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
            if ("string" == typeof r && "#" !== r.charAt(0)) {
              var s = new g(r);
              if (s.ok) r = s.toHex();
              else if (!/^\d*\.?\d*$/.test(r)) throw new Error('Invalid color "' + r + '" passed to jsPDF.encodeColorString.');
            }
            if (
              ("string" == typeof r && /^#[0-9A-Fa-f]{3}$/.test(r) && (r = "#" + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]),
              "string" == typeof r && /^#[0-9A-Fa-f]{6}$/.test(r))
            ) {
              var u = parseInt(r.substr(1), 16);
              (r = (u >> 16) & 255), (n = (u >> 8) & 255), (i = 255 & u);
            }
            if (void 0 === n || (void 0 === o && r === n && n === i))
              if ("string" == typeof r) e = r + " " + a[0];
              else if (2 === t.precision) e = O(r / 255) + " " + a[0];
              else e = T(r / 255) + " " + a[0];
            else if (void 0 === o || "object" == typeof o) {
              if (o && !isNaN(o.a) && 0 === o.a) return ["1.", "1.", "1.", a[1]].join(" ");
              if ("string" == typeof r) e = [r, n, i, a[1]].join(" ");
              else if (2 === t.precision) e = [O(r / 255), O(n / 255), O(i / 255), a[1]].join(" ");
              else e = [T(r / 255), T(n / 255), T(i / 255), a[1]].join(" ");
            } else if ("string" == typeof r) e = [r, n, i, o, a[2]].join(" ");
            else if (2 === t.precision) e = [O(r), O(n), O(i), O(o), a[2]].join(" ");
            else e = [T(r), T(n), T(i), T(o), a[2]].join(" ");
            return e;
          }),
          Qt = (b.__private__.getFilters = function () {
            return s;
          }),
          te = (b.__private__.putStream = function (t) {
            var e = (t = t || {}).data || "",
              r = t.filters || Qt(),
              n = t.alreadyAppliedFilters || [],
              i = t.addLength1 || !1,
              o = e.length,
              a = t.objectId,
              s = function (t) {
                return t;
              };
            if (null !== f && void 0 === a) throw new Error("ObjectId must be passed to putStream for file encryption");
            null !== f && (s = ke.encryptor(a, 0));
            var u = {};
            !0 === r && (r = ["FlateEncode"]);
            var c = t.additionalKeyValues || [],
              l =
                (u = void 0 !== B.API.processDataByFilters ? B.API.processDataByFilters(e, r) : { data: e, reverseChain: [] })
                  .reverseChain + (Array.isArray(n) ? n.join(" ") : n.toString());
            if (
              (0 !== u.data.length && (c.push({ key: "Length", value: u.data.length }), !0 === i && c.push({ key: "Length1", value: o })),
              0 != l.length)
            )
              if (l.split("/").length - 1 == 1) c.push({ key: "Filter", value: l });
              else {
                c.push({ key: "Filter", value: "[" + l + "]" });
                for (var h = 0; h < c.length; h += 1)
                  if ("DecodeParms" === c[h].key) {
                    for (var d = [], p = 0; p < u.reverseChain.split("/").length - 1; p += 1) d.push("null");
                    d.push(c[h].value), (c[h].value = "[" + d.join(" ") + "]");
                  }
              }
            st("<<");
            for (var g = 0; g < c.length; g++) st("/" + c[g].key + " " + c[g].value);
            st(">>"), 0 !== u.data.length && (st("stream"), st(s(u.data)), st("endstream"));
          }),
          ee = (b.__private__.putPage = function (t) {
            var e = t.number,
              r = t.data,
              n = t.objId,
              i = t.contentsObjId;
            Yt(n, !0),
              st("<</Type /Page"),
              st("/Parent " + t.rootDictionaryObjId + " 0 R"),
              st("/Resources " + t.resourceDictionaryObjId + " 0 R"),
              st(
                "/MediaBox [" +
                  parseFloat(k(t.mediaBox.bottomLeftX)) +
                  " " +
                  parseFloat(k(t.mediaBox.bottomLeftY)) +
                  " " +
                  k(t.mediaBox.topRightX) +
                  " " +
                  k(t.mediaBox.topRightY) +
                  "]"
              ),
              null !== t.cropBox &&
                st(
                  "/CropBox [" +
                    k(t.cropBox.bottomLeftX) +
                    " " +
                    k(t.cropBox.bottomLeftY) +
                    " " +
                    k(t.cropBox.topRightX) +
                    " " +
                    k(t.cropBox.topRightY) +
                    "]"
                ),
              null !== t.bleedBox &&
                st(
                  "/BleedBox [" +
                    k(t.bleedBox.bottomLeftX) +
                    " " +
                    k(t.bleedBox.bottomLeftY) +
                    " " +
                    k(t.bleedBox.topRightX) +
                    " " +
                    k(t.bleedBox.topRightY) +
                    "]"
                ),
              null !== t.trimBox &&
                st(
                  "/TrimBox [" +
                    k(t.trimBox.bottomLeftX) +
                    " " +
                    k(t.trimBox.bottomLeftY) +
                    " " +
                    k(t.trimBox.topRightX) +
                    " " +
                    k(t.trimBox.topRightY) +
                    "]"
                ),
              null !== t.artBox &&
                st(
                  "/ArtBox [" +
                    k(t.artBox.bottomLeftX) +
                    " " +
                    k(t.artBox.bottomLeftY) +
                    " " +
                    k(t.artBox.topRightX) +
                    " " +
                    k(t.artBox.topRightY) +
                    "]"
                ),
              "number" == typeof t.userUnit && 1 !== t.userUnit && st("/UserUnit " + t.userUnit),
              Rt.publish("putPage", { objId: n, pageContext: Mt[e], pageNumber: e, page: r }),
              st("/Contents " + i + " 0 R"),
              st(">>"),
              st("endobj");
            var o = r.join("\n");
            return A === N.ADVANCED && (o += "\nQ"), Yt(i, !0), te({ data: o, filters: Qt(), objectId: i }), st("endobj"), n;
          }),
          re = (b.__private__.putPages = function () {
            var t,
              e,
              r = [];
            for (t = 1; t <= Ot; t++) (Mt[t].objId = Gt()), (Mt[t].contentsObjId = Gt());
            for (t = 1; t <= Ot; t++)
              r.push(
                ee({
                  number: t,
                  data: nt[t],
                  objId: Mt[t].objId,
                  contentsObjId: Mt[t].contentsObjId,
                  mediaBox: Mt[t].mediaBox,
                  cropBox: Mt[t].cropBox,
                  bleedBox: Mt[t].bleedBox,
                  trimBox: Mt[t].trimBox,
                  artBox: Mt[t].artBox,
                  userUnit: Mt[t].userUnit,
                  rootDictionaryObjId: Jt,
                  resourceDictionaryObjId: Kt
                })
              );
            Yt(Jt, !0), st("<</Type /Pages");
            var n = "/Kids [";
            for (e = 0; e < Ot; e++) n += r[e] + " 0 R ";
            st(n + "]"), st("/Count " + Ot), st(">>"), st("endobj"), Rt.publish("postPutPages");
          }),
          ne = function (t) {
            var e = function (t, e) {
              return -1 !== t.indexOf(" ") ? "(" + fe(t, e) + ")" : fe(t, e);
            };
            Rt.publish("putFont", { font: t, out: st, newObject: Vt, putStream: te, pdfEscapeWithNeededParanthesis: e }),
              !0 !== t.isAlreadyPutted &&
                ((t.objectNumber = Vt()),
                st("<<"),
                st("/Type /Font"),
                st("/BaseFont /" + e(t.postScriptName)),
                st("/Subtype /Type1"),
                "string" == typeof t.encoding && st("/Encoding /" + t.encoding),
                st("/FirstChar 32"),
                st("/LastChar 255"),
                st(">>"),
                st("endobj"));
          },
          ie = function (t) {
            t.objectNumber = Vt();
            var e = [];
            e.push({ key: "Type", value: "/XObject" }),
              e.push({ key: "Subtype", value: "/Form" }),
              e.push({ key: "BBox", value: "[" + [k(t.x), k(t.y), k(t.x + t.width), k(t.y + t.height)].join(" ") + "]" }),
              e.push({ key: "Matrix", value: "[" + t.matrix.toString() + "]" });
            var r = t.pages[1].join("\n");
            te({ data: r, additionalKeyValues: e, objectId: t.objectNumber }), st("endobj");
          },
          oe = function (t, e) {
            e || (e = 21);
            var r = Vt(),
              n = (function (t, e) {
                var r,
                  n = [],
                  i = 1 / (e - 1);
                for (r = 0; r < 1; r += i) n.push(r);
                if ((n.push(1), 0 != t[0].offset)) {
                  var o = { offset: 0, color: t[0].color };
                  t.unshift(o);
                }
                if (1 != t[t.length - 1].offset) {
                  var a = { offset: 1, color: t[t.length - 1].color };
                  t.push(a);
                }
                for (var s = "", u = 0, c = 0; c < n.length; c++) {
                  for (r = n[c]; r > t[u + 1].offset; ) u++;
                  var l = t[u].offset,
                    h = (r - l) / (t[u + 1].offset - l),
                    f = t[u].color,
                    d = t[u + 1].color;
                  s +=
                    $(Math.round((1 - h) * f[0] + h * d[0]).toString(16)) +
                    $(Math.round((1 - h) * f[1] + h * d[1]).toString(16)) +
                    $(Math.round((1 - h) * f[2] + h * d[2]).toString(16));
                }
                return s.trim();
              })(t.colors, e),
              i = [];
            i.push({ key: "FunctionType", value: "0" }),
              i.push({ key: "Domain", value: "[0.0 1.0]" }),
              i.push({ key: "Size", value: "[" + e + "]" }),
              i.push({ key: "BitsPerSample", value: "8" }),
              i.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }),
              i.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }),
              te({ data: n, additionalKeyValues: i, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: r }),
              st("endobj"),
              (t.objectNumber = Vt()),
              st("<< /ShadingType " + t.type),
              st("/ColorSpace /DeviceRGB");
            var o = "/Coords [" + k(parseFloat(t.coords[0])) + " " + k(parseFloat(t.coords[1])) + " ";
            2 === t.type
              ? (o += k(parseFloat(t.coords[2])) + " " + k(parseFloat(t.coords[3])))
              : (o +=
                  k(parseFloat(t.coords[2])) +
                  " " +
                  k(parseFloat(t.coords[3])) +
                  " " +
                  k(parseFloat(t.coords[4])) +
                  " " +
                  k(parseFloat(t.coords[5]))),
              st((o += "]")),
              t.matrix && st("/Matrix [" + t.matrix.toString() + "]"),
              st("/Function " + r + " 0 R"),
              st("/Extend [true true]"),
              st(">>"),
              st("endobj");
          },
          ae = function (t, e) {
            var r = Gt(),
              n = Vt();
            e.push({ resourcesOid: r, objectOid: n }), (t.objectNumber = n);
            var i = [];
            i.push({ key: "Type", value: "/Pattern" }),
              i.push({ key: "PatternType", value: "1" }),
              i.push({ key: "PaintType", value: "1" }),
              i.push({ key: "TilingType", value: "1" }),
              i.push({ key: "BBox", value: "[" + t.boundingBox.map(k).join(" ") + "]" }),
              i.push({ key: "XStep", value: k(t.xStep) }),
              i.push({ key: "YStep", value: k(t.yStep) }),
              i.push({ key: "Resources", value: r + " 0 R" }),
              t.matrix && i.push({ key: "Matrix", value: "[" + t.matrix.toString() + "]" }),
              te({ data: t.stream, additionalKeyValues: i, objectId: t.objectNumber }),
              st("endobj");
          },
          se = function (t) {
            for (var e in ((t.objectNumber = Vt()), st("<<"), t))
              switch (e) {
                case "opacity":
                  st("/ca " + O(t[e]));
                  break;
                case "stroke-opacity":
                  st("/CA " + O(t[e]));
              }
            st(">>"), st("endobj");
          },
          ue = function (t) {
            Yt(t.resourcesOid, !0),
              st("<<"),
              st("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
              (function () {
                for (var t in (st("/Font <<"), St))
                  St.hasOwnProperty(t) &&
                    (!1 === m || (!0 === m && v.hasOwnProperty(t))) &&
                    st("/" + t + " " + St[t].objectNumber + " 0 R");
                st(">>");
              })(),
              (function () {
                if (Object.keys(Ft).length > 0) {
                  for (var t in (st("/Shading <<"), Ft))
                    Ft.hasOwnProperty(t) &&
                      Ft[t] instanceof M &&
                      Ft[t].objectNumber >= 0 &&
                      st("/" + t + " " + Ft[t].objectNumber + " 0 R");
                  Rt.publish("putShadingPatternDict"), st(">>");
                }
              })(),
              (function (t) {
                if (Object.keys(Ft).length > 0) {
                  for (var e in (st("/Pattern <<"), Ft))
                    Ft.hasOwnProperty(e) &&
                      Ft[e] instanceof b.TilingPattern &&
                      Ft[e].objectNumber >= 0 &&
                      Ft[e].objectNumber < t &&
                      st("/" + e + " " + Ft[e].objectNumber + " 0 R");
                  Rt.publish("putTilingPatternDict"), st(">>");
                }
              })(t.objectOid),
              (function () {
                if (Object.keys(Ct).length > 0) {
                  var t;
                  for (t in (st("/ExtGState <<"), Ct))
                    Ct.hasOwnProperty(t) && Ct[t].objectNumber >= 0 && st("/" + t + " " + Ct[t].objectNumber + " 0 R");
                  Rt.publish("putGStateDict"), st(">>");
                }
              })(),
              (function () {
                for (var t in (st("/XObject <<"), Tt))
                  Tt.hasOwnProperty(t) && Tt[t].objectNumber >= 0 && st("/" + t + " " + Tt[t].objectNumber + " 0 R");
                Rt.publish("putXobjectDict"), st(">>");
              })(),
              st(">>"),
              st("endobj");
          },
          ce = function () {
            var t = [];
            (function () {
              for (var t in St) St.hasOwnProperty(t) && (!1 === m || (!0 === m && v.hasOwnProperty(t))) && ne(St[t]);
            })(),
              (function () {
                var t;
                for (t in Ct) Ct.hasOwnProperty(t) && se(Ct[t]);
              })(),
              (function () {
                for (var t in Tt) Tt.hasOwnProperty(t) && ie(Tt[t]);
              })(),
              (function (t) {
                var e;
                for (e in Ft) Ft.hasOwnProperty(e) && (Ft[e] instanceof M ? oe(Ft[e]) : Ft[e] instanceof R && ae(Ft[e], t));
              })(t),
              Rt.publish("putResources"),
              t.forEach(ue),
              ue({ resourcesOid: Kt, objectOid: Number.MAX_SAFE_INTEGER }),
              Rt.publish("postPutResources");
          },
          le = function (t) {
            (Pt[t.fontName] = Pt[t.fontName] || {}), (Pt[t.fontName][t.fontStyle] = t.id);
          },
          he = function (t, e, r, n, i) {
            var o = {
              id: "F" + (Object.keys(St).length + 1).toString(10),
              postScriptName: t,
              fontName: e,
              fontStyle: r,
              encoding: n,
              isStandardFont: i || !1,
              metadata: {}
            };
            return Rt.publish("addFont", { font: o, instance: this }), (St[o.id] = o), le(o), o.id;
          },
          fe =
            (b.__private__.pdfEscape =
            b.pdfEscape =
              function (t, e) {
                return (function (t, e) {
                  var r, n, i, o, a, s, u, c, l;
                  if (
                    ((i = (e = e || {}).sourceEncoding || "Unicode"),
                    (a = e.outputEncoding),
                    (e.autoencode || a) &&
                      St[xt].metadata &&
                      St[xt].metadata[i] &&
                      St[xt].metadata[i].encoding &&
                      ((o = St[xt].metadata[i].encoding),
                      !a && St[xt].encoding && (a = St[xt].encoding),
                      !a && o.codePages && (a = o.codePages[0]),
                      "string" == typeof a && (a = o[a]),
                      a))
                  ) {
                    for (u = !1, s = [], r = 0, n = t.length; r < n; r++)
                      (c = a[t.charCodeAt(r)]) ? s.push(String.fromCharCode(c)) : s.push(t[r]), s[r].charCodeAt(0) >> 8 && (u = !0);
                    t = s.join("");
                  }
                  for (r = t.length; void 0 === u && 0 !== r; ) t.charCodeAt(r - 1) >> 8 && (u = !0), r--;
                  if (!u) return t;
                  for (s = e.noBOM ? [] : [254, 255], r = 0, n = t.length; r < n; r++) {
                    if ((l = (c = t.charCodeAt(r)) >> 8) >> 8)
                      throw new Error(
                        "Character at position " + r + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE"
                      );
                    s.push(l), s.push(c - (l << 8));
                  }
                  return String.fromCharCode.apply(void 0, s);
                })(t, e)
                  .replace(/\\/g, "\\\\")
                  .replace(/\(/g, "\\(")
                  .replace(/\)/g, "\\)");
              }),
          de = (b.__private__.beginPage = function (t) {
            (nt[++Ot] = []),
              (Mt[Ot] = {
                objId: 0,
                contentsObjId: 0,
                userUnit: Number(c),
                artBox: null,
                bleedBox: null,
                cropBox: null,
                trimBox: null,
                mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(t[0]), topRightY: Number(t[1]) }
              }),
              me(Ot),
              at(nt[J]);
          }),
          pe = function (t, e) {
            var n, o, a;
            switch (
              ((r = e || r),
              "string" == typeof t && ((n = L(t.toLowerCase())), Array.isArray(n) && ((o = n[0]), (a = n[1]))),
              Array.isArray(t) && ((o = t[0] * Lt), (a = t[1] * Lt)),
              isNaN(o) && ((o = i[0]), (a = i[1])),
              (o > 14400 || a > 14400) &&
                (u.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),
                (o = Math.min(14400, o)),
                (a = Math.min(14400, a))),
              (i = [o, a]),
              r.substr(0, 1))
            ) {
              case "l":
                a > o && (i = [a, o]);
                break;
              case "p":
                o > a && (i = [a, o]);
            }
            de(i), Ye(Ge), st(er), 0 !== sr && st(sr + " J"), 0 !== ur && st(ur + " j"), Rt.publish("addPage", { pageNumber: Ot });
          },
          ge = function (t) {
            t > 0 && t <= Ot && (nt.splice(t, 1), Mt.splice(t, 1), Ot--, J > Ot && (J = Ot), this.setPage(J));
          },
          me = function (t) {
            t > 0 && t <= Ot && (J = t);
          },
          ve =
            (b.__private__.getNumberOfPages =
            b.getNumberOfPages =
              function () {
                return nt.length - 1;
              }),
          be = function (t, e, r) {
            var n,
              i = void 0;
            return (
              (r = r || {}),
              (t = void 0 !== t ? t : St[xt].fontName),
              (e = void 0 !== e ? e : St[xt].fontStyle),
              (n = t.toLowerCase()),
              void 0 !== Pt[n] && void 0 !== Pt[n][e]
                ? (i = Pt[n][e])
                : void 0 !== Pt[t] && void 0 !== Pt[t][e]
                ? (i = Pt[t][e])
                : !1 === r.disableWarning &&
                  u.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."),
              i || r.noFallback || (null == (i = Pt.times[e]) && (i = Pt.times.normal)),
              i
            );
          },
          ye = (b.__private__.putInfo = function () {
            var t = Vt(),
              e = function (t) {
                return t;
              };
            for (var r in (null !== f && (e = ke.encryptor(t, 0)), st("<<"), st("/Producer (" + fe(e("jsPDF " + B.version)) + ")"), wt))
              wt.hasOwnProperty(r) && wt[r] && st("/" + r.substr(0, 1).toUpperCase() + r.substr(1) + " (" + fe(e(wt[r])) + ")");
            st("/CreationDate (" + fe(e(U)) + ")"), st(">>"), st("endobj");
          }),
          we = (b.__private__.putCatalog = function (t) {
            var e = (t = t || {}).rootDictionaryObjId || Jt;
            switch ((Vt(), st("<<"), st("/Type /Catalog"), st("/Pages " + e + " 0 R"), ft || (ft = "fullwidth"), ft)) {
              case "fullwidth":
                st("/OpenAction [3 0 R /FitH null]");
                break;
              case "fullheight":
                st("/OpenAction [3 0 R /FitV null]");
                break;
              case "fullpage":
                st("/OpenAction [3 0 R /Fit]");
                break;
              case "original":
                st("/OpenAction [3 0 R /XYZ null null 1]");
                break;
              default:
                var r = "" + ft;
                "%" === r.substr(r.length - 1) && (ft = parseInt(ft) / 100),
                  "number" == typeof ft && st("/OpenAction [3 0 R /XYZ null null " + O(ft) + "]");
            }
            switch ((vt || (vt = "continuous"), vt)) {
              case "continuous":
                st("/PageLayout /OneColumn");
                break;
              case "single":
                st("/PageLayout /SinglePage");
                break;
              case "two":
              case "twoleft":
                st("/PageLayout /TwoColumnLeft");
                break;
              case "tworight":
                st("/PageLayout /TwoColumnRight");
            }
            gt && st("/PageMode /" + gt), Rt.publish("putCatalog"), st(">>"), st("endobj");
          }),
          xe = (b.__private__.putTrailer = function () {
            st("trailer"),
              st("<<"),
              st("/Size " + (Z + 1)),
              st("/Root " + Z + " 0 R"),
              st("/Info " + (Z - 1) + " 0 R"),
              null !== f && st("/Encrypt " + ke.oid + " 0 R"),
              st("/ID [ <" + z + "> <" + z + "> ]"),
              st(">>");
          }),
          Le = (b.__private__.putHeader = function () {
            st("%PDF-" + y), st("%ºß¬à");
          }),
          Ne = (b.__private__.putXRef = function () {
            var t = "0000000000";
            st("xref"), st("0 " + (Z + 1)), st("0000000000 65535 f ");
            for (var e = 1; e <= Z; e++)
              "function" == typeof Q[e]
                ? st((t + Q[e]()).slice(-10) + " 00000 n ")
                : void 0 !== Q[e]
                ? st((t + Q[e]).slice(-10) + " 00000 n ")
                : st("0000000000 00000 n ");
          }),
          Ae = (b.__private__.buildDocument = function () {
            (Z = 0),
              (et = 0),
              (tt = []),
              (Q = []),
              (rt = []),
              (Jt = Gt()),
              (Kt = Gt()),
              at(tt),
              Rt.publish("buildDocument"),
              Le(),
              re(),
              (function () {
                Rt.publish("putAdditionalObjects");
                for (var t = 0; t < rt.length; t++) {
                  var e = rt[t];
                  Yt(e.objId, !0), st(e.content), st("endobj");
                }
                Rt.publish("postPutAdditionalObjects");
              })(),
              ce(),
              null !== f &&
                ((ke.oid = Vt()),
                st("<<"),
                st("/Filter /Standard"),
                st("/V " + ke.v),
                st("/R " + ke.r),
                st("/U <" + ke.toHexString(ke.U) + ">"),
                st("/O <" + ke.toHexString(ke.O) + ">"),
                st("/P " + ke.P),
                st(">>"),
                st("endobj")),
              ye(),
              we();
            var t = et;
            return Ne(), xe(), st("startxref"), st("" + t), st("%%EOF"), at(nt[J]), tt.join("\n");
          }),
          _e = (b.__private__.getBlob = function (t) {
            return new Blob([ct(t)], { type: "application/pdf" });
          }),
          Se =
            (b.output =
            b.__private__.output =
              (function (t) {
                return (
                  (t.foo = function () {
                    try {
                      return t.apply(this, arguments);
                    } catch (t) {
                      var e = t.stack || "";
                      ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
                      var r = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + t.message;
                      if (!a.console) throw new Error(r);
                      a.console.error(r, t), a.alert && alert(r);
                    }
                  }),
                  (t.foo.bar = t),
                  t.foo
                );
              })(function (t, e) {
                switch (("string" == typeof (e = e || {}) ? (e = { filename: e }) : (e.filename = e.filename || "generated.pdf"), t)) {
                  case void 0:
                    return Ae();
                  case "save":
                    b.save(e.filename);
                    break;
                  case "arraybuffer":
                    return ct(Ae());
                  case "blob":
                    return _e(Ae());
                  case "bloburi":
                  case "bloburl":
                    if (void 0 !== a.URL && "function" == typeof a.URL.createObjectURL)
                      return (a.URL && a.URL.createObjectURL(_e(Ae()))) || void 0;
                    u.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                    break;
                  case "datauristring":
                  case "dataurlstring":
                    var r = "",
                      n = Ae();
                    try {
                      r = d(n);
                    } catch (t) {
                      r = d(unescape(encodeURIComponent(n)));
                    }
                    return "data:application/pdf;filename=" + e.filename + ";base64," + r;
                  case "pdfobjectnewwindow":
                    if ("[object Window]" === Object.prototype.toString.call(a)) {
                      var i =
                          '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' +
                          (e.pdfObjectUrl || "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js") +
                          '"></script><script >PDFObject.embed("' +
                          this.output("dataurlstring") +
                          '", ' +
                          JSON.stringify(e) +
                          ");</script></body></html>",
                        o = a.open();
                      return null !== o && o.document.write(i), o;
                    }
                    throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
                  case "pdfjsnewwindow":
                    if ("[object Window]" === Object.prototype.toString.call(a)) {
                      var s =
                          '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' +
                          (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") +
                          "?file=&downloadName=" +
                          e.filename +
                          '" width="500px" height="400px" /></body></html>',
                        c = a.open();
                      if (null !== c) {
                        c.document.write(s);
                        var l = this;
                        c.document.documentElement.querySelector("#pdfViewer").onload = function () {
                          (c.document.title = e.filename),
                            c.document.documentElement
                              .querySelector("#pdfViewer")
                              .contentWindow.PDFViewerApplication.open(l.output("bloburl"));
                        };
                      }
                      return c;
                    }
                    throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
                  case "dataurlnewwindow":
                    if ("[object Window]" !== Object.prototype.toString.call(a))
                      throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                    var h =
                        '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' +
                        this.output("datauristring", e) +
                        '"></iframe></body></html>',
                      f = a.open();
                    if ((null !== f && (f.document.write(h), (f.document.title = e.filename)), f || "undefined" == typeof safari)) return f;
                    break;
                  case "datauri":
                  case "dataurl":
                    return (a.document.location.href = this.output("datauristring", e));
                  default:
                    return null;
                }
              })),
          Pe = function (t) {
            return !0 === Array.isArray(Bt) && Bt.indexOf(t) > -1;
          };
        switch (n) {
          case "pt":
            Lt = 1;
            break;
          case "mm":
            Lt = 72 / 25.4;
            break;
          case "cm":
            Lt = 72 / 2.54;
            break;
          case "in":
            Lt = 72;
            break;
          case "px":
            Lt = 1 == Pe("px_scaling") ? 0.75 : 96 / 72;
            break;
          case "pc":
          case "em":
            Lt = 12;
            break;
          case "ex":
            Lt = 6;
            break;
          default:
            throw new Error("Invalid unit: " + n);
        }
        var ke = null;
        Y(), W();
        var Fe =
            (b.__private__.getPageInfo =
            b.getPageInfo =
              function (t) {
                if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
                return { objId: Mt[t].objId, pageNumber: t, pageContext: Mt[t] };
              }),
          Ie = (b.__private__.getPageInfoByObjId = function (t) {
            if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
            for (var e in Mt) if (Mt[e].objId === t) break;
            return Fe(e);
          }),
          Ce =
            (b.__private__.getCurrentPageInfo =
            b.getCurrentPageInfo =
              function () {
                return { objId: Mt[J].objId, pageNumber: J, pageContext: Mt[J] };
              });
        (b.addPage = function () {
          return pe.apply(this, arguments), this;
        }),
          (b.setPage = function () {
            return me.apply(this, arguments), at.call(this, nt[J]), this;
          }),
          (b.insertPage = function (t) {
            return this.addPage(), this.movePage(J, t), this;
          }),
          (b.movePage = function (t, e) {
            var r, n;
            if (t > e) {
              (r = nt[t]), (n = Mt[t]);
              for (var i = t; i > e; i--) (nt[i] = nt[i - 1]), (Mt[i] = Mt[i - 1]);
              (nt[e] = r), (Mt[e] = n), this.setPage(e);
            } else if (t < e) {
              (r = nt[t]), (n = Mt[t]);
              for (var o = t; o < e; o++) (nt[o] = nt[o + 1]), (Mt[o] = Mt[o + 1]);
              (nt[e] = r), (Mt[e] = n), this.setPage(e);
            }
            return this;
          }),
          (b.deletePage = function () {
            return ge.apply(this, arguments), this;
          }),
          (b.__private__.text = b.text =
            function (t, e, r, n, i) {
              var o,
                a,
                s,
                u,
                c,
                l,
                h,
                f,
                d = (n = n || {}).scope || this;
              if ("number" == typeof t && "number" == typeof e && ("string" == typeof r || Array.isArray(r))) {
                var p = r;
                (r = e), (e = t), (t = p);
              }
              if (
                (arguments[3] instanceof Ut == 0
                  ? ((s = arguments[4]),
                    (u = arguments[5]),
                    ("object" == typeof (h = arguments[3]) && null !== h) ||
                      ("string" == typeof s && ((u = s), (s = null)),
                      "string" == typeof h && ((u = h), (h = null)),
                      "number" == typeof h && ((s = h), (h = null)),
                      (n = { flags: h, angle: s, align: u })))
                  : (F("The transform parameter of text() with a Matrix value"), (f = i)),
                isNaN(e) || isNaN(r) || null == t)
              )
                throw new Error("Invalid arguments passed to jsPDF.text");
              if (0 === t.length) return d;
              var g,
                m = "",
                b = "number" == typeof n.lineHeightFactor ? n.lineHeightFactor : Ve,
                y = d.internal.scaleFactor;
              function w(t) {
                return (t = t.split("\t").join(Array(n.TabLen || 9).join(" "))), fe(t, h);
              }
              function x(t) {
                for (var e, r = t.concat(), n = [], i = r.length; i--; )
                  "string" == typeof (e = r.shift())
                    ? n.push(e)
                    : Array.isArray(t) && (1 === e.length || (void 0 === e[1] && void 0 === e[2]))
                    ? n.push(e[0])
                    : n.push([e[0], e[1], e[2]]);
                return n;
              }
              function L(t, e) {
                var r;
                if ("string" == typeof t) r = e(t)[0];
                else if (Array.isArray(t)) {
                  for (var n, i, o = t.concat(), a = [], s = o.length; s--; )
                    "string" == typeof (n = o.shift())
                      ? a.push(e(n)[0])
                      : Array.isArray(n) && "string" == typeof n[0] && ((i = e(n[0], n[1], n[2])), a.push([i[0], i[1], i[2]]));
                  r = a;
                }
                return r;
              }
              var _ = !1,
                S = !0;
              if ("string" == typeof t) _ = !0;
              else if (Array.isArray(t)) {
                var P = t.concat();
                a = [];
                for (var I, C = P.length; C--; )
                  ("string" != typeof (I = P.shift()) || (Array.isArray(I) && "string" != typeof I[0])) && (S = !1);
                _ = S;
              }
              if (!1 === _) throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
              "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
              var E = ht / d.internal.scaleFactor,
                j = E * (Ve - 1);
              switch (n.baseline) {
                case "bottom":
                  r -= j;
                  break;
                case "top":
                  r += E - j;
                  break;
                case "hanging":
                  r += E - 2 * j;
                  break;
                case "middle":
                  r += E / 2 - j;
              }
              if (
                ((l = n.maxWidth || 0) > 0 &&
                  ("string" == typeof t
                    ? (t = d.splitTextToSize(t, l))
                    : "[object Array]" === Object.prototype.toString.call(t) &&
                      (t = t.reduce(function (t, e) {
                        return t.concat(d.splitTextToSize(e, l));
                      }, []))),
                (o = { text: t, x: e, y: r, options: n, mutex: { pdfEscape: fe, activeFontKey: xt, fonts: St, activeFontSize: ht } }),
                Rt.publish("preProcessText", o),
                (t = o.text),
                (s = (n = o.options).angle),
                f instanceof Ut == 0 && s && "number" == typeof s)
              ) {
                (s *= Math.PI / 180), 0 === n.rotationDirection && (s = -s), A === N.ADVANCED && (s = -s);
                var O = Math.cos(s),
                  M = Math.sin(s);
                f = new Ut(O, M, -M, O, 0, 0);
              } else s && s instanceof Ut && (f = s);
              A !== N.ADVANCED || f || (f = Ht),
                void 0 !== (c = n.charSpace || or) && ((m += k(q(c)) + " Tc\n"), this.setCharSpace(this.getCharSpace() || 0)),
                n.lang;
              var R = -1,
                B = void 0 !== n.renderingMode ? n.renderingMode : n.stroke,
                T = d.internal.getCurrentPageInfo().pageContext;
              switch (B) {
                case 0:
                case !1:
                case "fill":
                  R = 0;
                  break;
                case 1:
                case !0:
                case "stroke":
                  R = 1;
                  break;
                case 2:
                case "fillThenStroke":
                  R = 2;
                  break;
                case 3:
                case "invisible":
                  R = 3;
                  break;
                case 4:
                case "fillAndAddForClipping":
                  R = 4;
                  break;
                case 5:
                case "strokeAndAddPathForClipping":
                  R = 5;
                  break;
                case 6:
                case "fillThenStrokeAndAddToPathForClipping":
                  R = 6;
                  break;
                case 7:
                case "addToPathForClipping":
                  R = 7;
              }
              var D = void 0 !== T.usedRenderingMode ? T.usedRenderingMode : -1;
              -1 !== R ? (m += R + " Tr\n") : -1 !== D && (m += "0 Tr\n"), -1 !== R && (T.usedRenderingMode = R), (u = n.align || "left");
              var U,
                z = ht * b,
                H = d.internal.pageSize.getWidth(),
                W = St[xt];
              (c = n.charSpace || or), (l = n.maxWidth || 0), (h = Object.assign({ autoencode: !0, noBOM: !0 }, n.flags));
              var V = [];
              if ("[object Array]" === Object.prototype.toString.call(t)) {
                var G;
                (a = x(t)),
                  "left" !== u &&
                    (U = a.map(function (t) {
                      return (d.getStringUnitWidth(t, { font: W, charSpace: c, fontSize: ht, doKerning: !1 }) * ht) / y;
                    }));
                var Y,
                  X = 0;
                if ("right" === u) {
                  (e -= U[0]), (t = []), (C = a.length);
                  for (var J = 0; J < C; J++)
                    0 === J ? ((Y = $e(e)), (G = Ze(r))) : ((Y = q(X - U[J])), (G = -z)), t.push([a[J], Y, G]), (X = U[J]);
                } else if ("center" === u) {
                  (e -= U[0] / 2), (t = []), (C = a.length);
                  for (var K = 0; K < C; K++)
                    0 === K ? ((Y = $e(e)), (G = Ze(r))) : ((Y = q((X - U[K]) / 2)), (G = -z)), t.push([a[K], Y, G]), (X = U[K]);
                } else if ("left" === u) {
                  (t = []), (C = a.length);
                  for (var $ = 0; $ < C; $++) t.push(a[$]);
                } else {
                  if ("justify" !== u) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                  (t = []), (C = a.length), (l = 0 !== l ? l : H);
                  for (var Z = 0; Z < C; Z++)
                    (G = 0 === Z ? Ze(r) : -z),
                      (Y = 0 === Z ? $e(e) : 0),
                      Z < C - 1 && V.push(k(q((l - U[Z]) / (a[Z].split(" ").length - 1)))),
                      t.push([a[Z], Y, G]);
                }
              }
              !0 === ("boolean" == typeof n.R2L ? n.R2L : pt) &&
                (t = L(t, function (t, e, r) {
                  return [t.split("").reverse().join(""), e, r];
                })),
                (o = { text: t, x: e, y: r, options: n, mutex: { pdfEscape: fe, activeFontKey: xt, fonts: St, activeFontSize: ht } }),
                Rt.publish("postProcessText", o),
                (t = o.text),
                (g = o.mutex.isHex || !1);
              var Q = St[xt].encoding;
              ("WinAnsiEncoding" !== Q && "StandardEncoding" !== Q) ||
                (t = L(t, function (t, e, r) {
                  return [w(t), e, r];
                })),
                (a = x(t)),
                (t = []);
              for (
                var tt,
                  et,
                  rt,
                  nt = Array.isArray(a[0]) ? 1 : 0,
                  it = "",
                  ot = function (t, e, r) {
                    var i = "";
                    return (
                      r instanceof Ut
                        ? ((r = "number" == typeof n.angle ? zt(r, new Ut(1, 0, 0, 1, t, e)) : zt(new Ut(1, 0, 0, 1, t, e), r)),
                          A === N.ADVANCED && (r = zt(new Ut(1, 0, 0, -1, 0, 0), r)),
                          (i = r.join(" ") + " Tm\n"))
                        : (i = k(t) + " " + k(e) + " Td\n"),
                      i
                    );
                  },
                  at = 0;
                at < a.length;
                at++
              ) {
                switch (((it = ""), nt)) {
                  case 1:
                    (rt = (g ? "<" : "(") + a[at][0] + (g ? ">" : ")")), (tt = parseFloat(a[at][1])), (et = parseFloat(a[at][2]));
                    break;
                  case 0:
                    (rt = (g ? "<" : "(") + a[at] + (g ? ">" : ")")), (tt = $e(e)), (et = Ze(r));
                }
                void 0 !== V && void 0 !== V[at] && (it = V[at] + " Tw\n"),
                  0 === at ? t.push(it + ot(tt, et, f) + rt) : 0 === nt ? t.push(it + rt) : 1 === nt && t.push(it + ot(tt, et, f) + rt);
              }
              (t = 0 === nt ? t.join(" Tj\nT* ") : t.join(" Tj\n")), (t += " Tj\n");
              var ut = "BT\n/";
              return (
                (ut += xt + " " + ht + " Tf\n"),
                (ut += k(ht * b) + " TL\n"),
                (ut += nr + "\n"),
                (ut += m),
                (ut += t),
                st((ut += "ET")),
                (v[xt] = !0),
                d
              );
            });
        var Ee =
          (b.__private__.clip =
          b.clip =
            function (t) {
              return st("evenodd" === t ? "W*" : "W"), this;
            });
        (b.clipEvenOdd = function () {
          return Ee("evenodd");
        }),
          (b.__private__.discardPath = b.discardPath =
            function () {
              return st("n"), this;
            });
        var je = (b.__private__.isValidStyle = function (t) {
          var e = !1;
          return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(t) && (e = !0), e;
        });
        b.__private__.setDefaultPathOperation = b.setDefaultPathOperation = function (t) {
          return je(t) && (h = t), this;
        };
        var Oe =
            (b.__private__.getStyle =
            b.getStyle =
              function (t) {
                var e = h;
                switch (t) {
                  case "D":
                  case "S":
                    e = "S";
                    break;
                  case "F":
                    e = "f";
                    break;
                  case "FD":
                  case "DF":
                    e = "B";
                    break;
                  case "f":
                  case "f*":
                  case "B":
                  case "B*":
                    e = t;
                }
                return e;
              }),
          Me = (b.close = function () {
            return st("h"), this;
          });
        (b.stroke = function () {
          return st("S"), this;
        }),
          (b.fill = function (t) {
            return Re("f", t), this;
          }),
          (b.fillEvenOdd = function (t) {
            return Re("f*", t), this;
          }),
          (b.fillStroke = function (t) {
            return Re("B", t), this;
          }),
          (b.fillStrokeEvenOdd = function (t) {
            return Re("B*", t), this;
          });
        var Re = function (t, e) {
            "object" == typeof e ? qe(e, t) : st(t);
          },
          Be = function (t) {
            null === t || (A === N.ADVANCED && void 0 === t) || ((t = Oe(t)), st(t));
          };
        function Te(t, e, r, n, i) {
          var o = new R(e || this.boundingBox, r || this.xStep, n || this.yStep, this.gState, i || this.matrix);
          o.stream = this.stream;
          var a = t + "$$" + this.cloneIndex++ + "$$";
          return Wt(a, o), o;
        }
        var qe = function (t, e) {
            var r = It[t.key],
              n = Ft[r];
            if (n instanceof M)
              st("q"), st(De(e)), n.gState && b.setGState(n.gState), st(t.matrix.toString() + " cm"), st("/" + r + " sh"), st("Q");
            else if (n instanceof R) {
              var i = new Ut(1, 0, 0, -1, 0, vr());
              t.matrix && ((i = i.multiply(t.matrix || Ht)), (r = Te.call(n, t.key, t.boundingBox, t.xStep, t.yStep, i).id)),
                st("q"),
                st("/Pattern cs"),
                st("/" + r + " scn"),
                n.gState && b.setGState(n.gState),
                st(e),
                st("Q");
            }
          },
          De = function (t) {
            switch (t) {
              case "f":
              case "F":
              case "n":
                return "W n";
              case "f*":
                return "W* n";
              case "B":
              case "S":
                return "W S";
              case "B*":
                return "W* S";
            }
          },
          Ue = (b.moveTo = function (t, e) {
            return st(k(q(t)) + " " + k(D(e)) + " m"), this;
          }),
          ze = (b.lineTo = function (t, e) {
            return st(k(q(t)) + " " + k(D(e)) + " l"), this;
          }),
          He = (b.curveTo = function (t, e, r, n, i, o) {
            return st([k(q(t)), k(D(e)), k(q(r)), k(D(n)), k(q(i)), k(D(o)), "c"].join(" ")), this;
          });
        (b.__private__.line = b.line =
          function (t, e, r, n, i) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !je(i)) throw new Error("Invalid arguments passed to jsPDF.line");
            return A === N.COMPAT
              ? this.lines([[r - t, n - e]], t, e, [1, 1], i || "S")
              : this.lines([[r - t, n - e]], t, e, [1, 1]).stroke();
          }),
          (b.__private__.lines = b.lines =
            function (t, e, r, n, i, o) {
              var a, s, u, c, l, h, f, d, p, g, m, v;
              if (
                ("number" == typeof t && ((v = r), (r = e), (e = t), (t = v)),
                (n = n || [1, 1]),
                (o = o || !1),
                isNaN(e) || isNaN(r) || !Array.isArray(t) || !Array.isArray(n) || !je(i) || "boolean" != typeof o)
              )
                throw new Error("Invalid arguments passed to jsPDF.lines");
              for (Ue(e, r), a = n[0], s = n[1], c = t.length, g = e, m = r, u = 0; u < c; u++)
                2 === (l = t[u]).length
                  ? ((g = l[0] * a + g), (m = l[1] * s + m), ze(g, m))
                  : ((h = l[0] * a + g),
                    (f = l[1] * s + m),
                    (d = l[2] * a + g),
                    (p = l[3] * s + m),
                    (g = l[4] * a + g),
                    (m = l[5] * s + m),
                    He(h, f, d, p, g, m));
              return o && Me(), Be(i), this;
            }),
          (b.path = function (t) {
            for (var e = 0; e < t.length; e++) {
              var r = t[e],
                n = r.c;
              switch (r.op) {
                case "m":
                  Ue(n[0], n[1]);
                  break;
                case "l":
                  ze(n[0], n[1]);
                  break;
                case "c":
                  He.apply(this, n);
                  break;
                case "h":
                  Me();
              }
            }
            return this;
          }),
          (b.__private__.rect = b.rect =
            function (t, e, r, n, i) {
              if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !je(i)) throw new Error("Invalid arguments passed to jsPDF.rect");
              return A === N.COMPAT && (n = -n), st([k(q(t)), k(D(e)), k(q(r)), k(q(n)), "re"].join(" ")), Be(i), this;
            }),
          (b.__private__.triangle = b.triangle =
            function (t, e, r, n, i, o, a) {
              if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(o) || !je(a))
                throw new Error("Invalid arguments passed to jsPDF.triangle");
              return (
                this.lines(
                  [
                    [r - t, n - e],
                    [i - r, o - n],
                    [t - i, e - o]
                  ],
                  t,
                  e,
                  [1, 1],
                  a,
                  !0
                ),
                this
              );
            }),
          (b.__private__.roundedRect = b.roundedRect =
            function (t, e, r, n, i, o, a) {
              if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(o) || !je(a))
                throw new Error("Invalid arguments passed to jsPDF.roundedRect");
              var s = (4 / 3) * (Math.SQRT2 - 1);
              return (
                (i = Math.min(i, 0.5 * r)),
                (o = Math.min(o, 0.5 * n)),
                this.lines(
                  [
                    [r - 2 * i, 0],
                    [i * s, 0, i, o - o * s, i, o],
                    [0, n - 2 * o],
                    [0, o * s, -i * s, o, -i, o],
                    [2 * i - r, 0],
                    [-i * s, 0, -i, -o * s, -i, -o],
                    [0, 2 * o - n],
                    [0, -o * s, i * s, -o, i, -o]
                  ],
                  t + i,
                  e,
                  [1, 1],
                  a,
                  !0
                ),
                this
              );
            }),
          (b.__private__.ellipse = b.ellipse =
            function (t, e, r, n, i) {
              if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !je(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
              var o = (4 / 3) * (Math.SQRT2 - 1) * r,
                a = (4 / 3) * (Math.SQRT2 - 1) * n;
              return (
                Ue(t + r, e),
                He(t + r, e - a, t + o, e - n, t, e - n),
                He(t - o, e - n, t - r, e - a, t - r, e),
                He(t - r, e + a, t - o, e + n, t, e + n),
                He(t + o, e + n, t + r, e + a, t + r, e),
                Be(i),
                this
              );
            }),
          (b.__private__.circle = b.circle =
            function (t, e, r, n) {
              if (isNaN(t) || isNaN(e) || isNaN(r) || !je(n)) throw new Error("Invalid arguments passed to jsPDF.circle");
              return this.ellipse(t, e, r, r, n);
            }),
          (b.setFont = function (t, e, r) {
            return r && (e = P(e, r)), (xt = be(t, e, { disableWarning: !1 })), this;
          });
        var We =
          (b.__private__.getFont =
          b.getFont =
            function () {
              return St[be.apply(b, arguments)];
            });
        (b.__private__.getFontList = b.getFontList =
          function () {
            var t,
              e,
              r = {};
            for (t in Pt) if (Pt.hasOwnProperty(t)) for (e in ((r[t] = []), Pt[t])) Pt[t].hasOwnProperty(e) && r[t].push(e);
            return r;
          }),
          (b.addFont = function (t, e, r, n, i) {
            var o = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
            return (
              arguments[3] && -1 !== o.indexOf(arguments[3])
                ? (i = arguments[3])
                : arguments[3] && -1 == o.indexOf(arguments[3]) && (r = P(r, n)),
              he.call(this, t, e, r, (i = i || "Identity-H"))
            );
          });
        var Ve,
          Ge = t.lineWidth || 0.200025,
          Ye =
            (b.__private__.setLineWidth =
            b.setLineWidth =
              function (t) {
                return st(k(q(t)) + " w"), this;
              });
        b.__private__.setLineDash =
          B.API.setLineDash =
          B.API.setLineDashPattern =
            function (t, e) {
              if (((t = t || []), (e = e || 0), isNaN(e) || !Array.isArray(t)))
                throw new Error("Invalid arguments passed to jsPDF.setLineDash");
              return (
                (t = t
                  .map(function (t) {
                    return k(q(t));
                  })
                  .join(" ")),
                (e = k(q(e))),
                st("[" + t + "] " + e + " d"),
                this
              );
            };
        var Xe =
          (b.__private__.getLineHeight =
          b.getLineHeight =
            function () {
              return ht * Ve;
            });
        b.__private__.getLineHeight = b.getLineHeight = function () {
          return ht * Ve;
        };
        var Je =
            (b.__private__.setLineHeightFactor =
            b.setLineHeightFactor =
              function (t) {
                return "number" == typeof (t = t || 1.15) && (Ve = t), this;
              }),
          Ke =
            (b.__private__.getLineHeightFactor =
            b.getLineHeightFactor =
              function () {
                return Ve;
              });
        Je(t.lineHeight);
        var $e = (b.__private__.getHorizontalCoordinate = function (t) {
            return q(t);
          }),
          Ze = (b.__private__.getVerticalCoordinate = function (t) {
            return A === N.ADVANCED ? t : Mt[J].mediaBox.topRightY - Mt[J].mediaBox.bottomLeftY - q(t);
          }),
          Qe =
            (b.__private__.getHorizontalCoordinateString =
            b.getHorizontalCoordinateString =
              function (t) {
                return k($e(t));
              }),
          tr =
            (b.__private__.getVerticalCoordinateString =
            b.getVerticalCoordinateString =
              function (t) {
                return k(Ze(t));
              }),
          er = t.strokeColor || "0 G";
        (b.__private__.getStrokeColor = b.getDrawColor =
          function () {
            return $t(er);
          }),
          (b.__private__.setStrokeColor = b.setDrawColor =
            function (t, e, r, n) {
              return (er = Zt({ ch1: t, ch2: e, ch3: r, ch4: n, pdfColorType: "draw", precision: 2 })), st(er), this;
            });
        var rr = t.fillColor || "0 g";
        (b.__private__.getFillColor = b.getFillColor =
          function () {
            return $t(rr);
          }),
          (b.__private__.setFillColor = b.setFillColor =
            function (t, e, r, n) {
              return (rr = Zt({ ch1: t, ch2: e, ch3: r, ch4: n, pdfColorType: "fill", precision: 2 })), st(rr), this;
            });
        var nr = t.textColor || "0 g",
          ir =
            (b.__private__.getTextColor =
            b.getTextColor =
              function () {
                return $t(nr);
              });
        b.__private__.setTextColor = b.setTextColor = function (t, e, r, n) {
          return (nr = Zt({ ch1: t, ch2: e, ch3: r, ch4: n, pdfColorType: "text", precision: 3 })), this;
        };
        var or = t.charSpace,
          ar =
            (b.__private__.getCharSpace =
            b.getCharSpace =
              function () {
                return parseFloat(or || 0);
              });
        b.__private__.setCharSpace = b.setCharSpace = function (t) {
          if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
          return (or = t), this;
        };
        var sr = 0;
        (b.CapJoinStyles = {
          0: 0,
          butt: 0,
          but: 0,
          miter: 0,
          1: 1,
          round: 1,
          rounded: 1,
          circle: 1,
          2: 2,
          projecting: 2,
          project: 2,
          square: 2,
          bevel: 2
        }),
          (b.__private__.setLineCap = b.setLineCap =
            function (t) {
              var e = b.CapJoinStyles[t];
              if (void 0 === e)
                throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
              return (sr = e), st(e + " J"), this;
            });
        var ur = 0;
        (b.__private__.setLineJoin = b.setLineJoin =
          function (t) {
            var e = b.CapJoinStyles[t];
            if (void 0 === e)
              throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return (ur = e), st(e + " j"), this;
          }),
          (b.__private__.setLineMiterLimit =
            b.__private__.setMiterLimit =
            b.setLineMiterLimit =
            b.setMiterLimit =
              function (t) {
                if (((t = t || 0), isNaN(t))) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
                return st(k(q(t)) + " M"), this;
              }),
          (b.GState = j),
          (b.setGState = function (t) {
            (t = "string" == typeof t ? Ct[Et[t]] : cr(null, t)).equals(jt) || (st("/" + t.id + " gs"), (jt = t));
          });
        var cr = function (t, e) {
          if (!t || !Et[t]) {
            var r = !1;
            for (var n in Ct)
              if (Ct.hasOwnProperty(n) && Ct[n].equals(e)) {
                r = !0;
                break;
              }
            if (r) e = Ct[n];
            else {
              var i = "GS" + (Object.keys(Ct).length + 1).toString(10);
              (Ct[i] = e), (e.id = i);
            }
            return t && (Et[t] = e.id), Rt.publish("addGState", e), e;
          }
        };
        (b.addGState = function (t, e) {
          return cr(t, e), this;
        }),
          (b.saveGraphicsState = function () {
            return st("q"), kt.push({ key: xt, size: ht, color: nr }), this;
          }),
          (b.restoreGraphicsState = function () {
            st("Q");
            var t = kt.pop();
            return (xt = t.key), (ht = t.size), (nr = t.color), (jt = null), this;
          }),
          (b.setCurrentTransformationMatrix = function (t) {
            return st(t.toString() + " cm"), this;
          }),
          (b.comment = function (t) {
            return st("#" + t), this;
          });
        var lr = function (t, e) {
            var r = t || 0;
            Object.defineProperty(this, "x", {
              enumerable: !0,
              get: function () {
                return r;
              },
              set: function (t) {
                isNaN(t) || (r = parseFloat(t));
              }
            });
            var n = e || 0;
            Object.defineProperty(this, "y", {
              enumerable: !0,
              get: function () {
                return n;
              },
              set: function (t) {
                isNaN(t) || (n = parseFloat(t));
              }
            });
            var i = "pt";
            return (
              Object.defineProperty(this, "type", {
                enumerable: !0,
                get: function () {
                  return i;
                },
                set: function (t) {
                  i = t.toString();
                }
              }),
              this
            );
          },
          hr = function (t, e, r, n) {
            lr.call(this, t, e), (this.type = "rect");
            var i = r || 0;
            Object.defineProperty(this, "w", {
              enumerable: !0,
              get: function () {
                return i;
              },
              set: function (t) {
                isNaN(t) || (i = parseFloat(t));
              }
            });
            var o = n || 0;
            return (
              Object.defineProperty(this, "h", {
                enumerable: !0,
                get: function () {
                  return o;
                },
                set: function (t) {
                  isNaN(t) || (o = parseFloat(t));
                }
              }),
              this
            );
          },
          fr = function () {
            (this.page = Ot),
              (this.currentPage = J),
              (this.pages = nt.slice(0)),
              (this.pagesContext = Mt.slice(0)),
              (this.x = Nt),
              (this.y = At),
              (this.matrix = _t),
              (this.width = gr(J)),
              (this.height = vr(J)),
              (this.outputDestination = ot),
              (this.id = ""),
              (this.objectNumber = -1);
          };
        fr.prototype.restore = function () {
          (Ot = this.page),
            (J = this.currentPage),
            (Mt = this.pagesContext),
            (nt = this.pages),
            (Nt = this.x),
            (At = this.y),
            (_t = this.matrix),
            mr(J, this.width),
            br(J, this.height),
            (ot = this.outputDestination);
        };
        var dr = function (t, e, r, n, i) {
          Dt.push(new fr()), (Ot = J = 0), (nt = []), (Nt = t), (At = e), (_t = i), de([r, n]);
        };
        for (var pr in ((b.beginFormObject = function (t, e, r, n, i) {
          return dr(t, e, r, n, i), this;
        }),
        (b.endFormObject = function (t) {
          return (
            (function (t) {
              if (!qt[t]) {
                var e = new fr(),
                  r = "Xo" + (Object.keys(Tt).length + 1).toString(10);
                (e.id = r), (qt[t] = r), (Tt[r] = e), Rt.publish("addFormObject", e), Dt.pop().restore();
              }
            })(t),
            this
          );
        }),
        (b.doFormObject = function (t, e) {
          var r = Tt[qt[t]];
          return st("q"), st(e.toString() + " cm"), st("/" + r.id + " Do"), st("Q"), this;
        }),
        (b.getFormObject = function (t) {
          var e = Tt[qt[t]];
          return { x: e.x, y: e.y, width: e.width, height: e.height, matrix: e.matrix };
        }),
        (b.save = function (t, e) {
          return (
            (t = t || "generated.pdf"),
            ((e = e || {}).returnPromise = e.returnPromise || !1),
            !1 === e.returnPromise
              ? (p(_e(Ae()), t), "function" == typeof p.unload && a.setTimeout && setTimeout(p.unload, 911), this)
              : new Promise(function (e, r) {
                  try {
                    var n = p(_e(Ae()), t);
                    "function" == typeof p.unload && a.setTimeout && setTimeout(p.unload, 911), e(n);
                  } catch (t) {
                    r(t.message);
                  }
                })
          );
        }),
        B.API))
          B.API.hasOwnProperty(pr) &&
            ("events" === pr && B.API.events.length
              ? (function (t, e) {
                  var r, n, i;
                  for (i = e.length - 1; -1 !== i; i--)
                    (r = e[i][0]), (n = e[i][1]), t.subscribe.apply(t, [r].concat("function" == typeof n ? [n] : n));
                })(Rt, B.API.events)
              : (b[pr] = B.API[pr]));
        var gr = (b.getPageWidth = function (t) {
            return (Mt[(t = t || J)].mediaBox.topRightX - Mt[t].mediaBox.bottomLeftX) / Lt;
          }),
          mr = (b.setPageWidth = function (t, e) {
            Mt[t].mediaBox.topRightX = e * Lt + Mt[t].mediaBox.bottomLeftX;
          }),
          vr = (b.getPageHeight = function (t) {
            return (Mt[(t = t || J)].mediaBox.topRightY - Mt[t].mediaBox.bottomLeftY) / Lt;
          }),
          br = (b.setPageHeight = function (t, e) {
            Mt[t].mediaBox.topRightY = e * Lt + Mt[t].mediaBox.bottomLeftY;
          });
        return (
          (b.internal = {
            pdfEscape: fe,
            getStyle: Oe,
            getFont: We,
            getFontSize: dt,
            getCharSpace: ar,
            getTextColor: ir,
            getLineHeight: Xe,
            getLineHeightFactor: Ke,
            write: ut,
            getHorizontalCoordinate: $e,
            getVerticalCoordinate: Ze,
            getCoordinateString: Qe,
            getVerticalCoordinateString: tr,
            collections: {},
            newObject: Vt,
            newAdditionalObject: Xt,
            newObjectDeferred: Gt,
            newObjectDeferredBegin: Yt,
            getFilters: Qt,
            putStream: te,
            events: Rt,
            scaleFactor: Lt,
            pageSize: {
              getWidth: function () {
                return gr(J);
              },
              setWidth: function (t) {
                mr(J, t);
              },
              getHeight: function () {
                return vr(J);
              },
              setHeight: function (t) {
                br(J, t);
              }
            },
            encryptionOptions: f,
            encryption: ke,
            getEncryptor: function (t) {
              return null !== f
                ? ke.encryptor(t, 0)
                : function (t) {
                    return t;
                  };
            },
            output: Se,
            getNumberOfPages: ve,
            pages: nt,
            out: st,
            f2: O,
            f3: T,
            getPageInfo: Fe,
            getPageInfoByObjId: Ie,
            getCurrentPageInfo: Ce,
            getPDFVersion: w,
            Point: lr,
            Rectangle: hr,
            Matrix: Ut,
            hasHotfix: Pe
          }),
          Object.defineProperty(b.internal.pageSize, "width", {
            get: function () {
              return gr(J);
            },
            set: function (t) {
              mr(J, t);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(b.internal.pageSize, "height", {
            get: function () {
              return vr(J);
            },
            set: function (t) {
              br(J, t);
            },
            enumerable: !0,
            configurable: !0
          }),
          function (t) {
            for (var e = 0, r = lt.length; e < r; e++) {
              var n = he.call(this, t[e][0], t[e][1], t[e][2], lt[e][3], !0);
              !1 === m && (v[n] = !0);
              var i = t[e][0].split("-");
              le({ id: n, fontName: i[0], fontStyle: i[1] || "" });
            }
            Rt.publish("addFonts", { fonts: St, dictionary: Pt });
          }.call(b, lt),
          (xt = "F1"),
          pe(i, r),
          Rt.publish("initialized"),
          b
        );
      }
      (C.prototype.lsbFirstWord = function (t) {
        return String.fromCharCode((t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255);
      }),
        (C.prototype.toHexString = function (t) {
          return t
            .split("")
            .map(function (t) {
              return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
            })
            .join("");
        }),
        (C.prototype.hexToBytes = function (t) {
          for (var e = [], r = 0; r < t.length; r += 2) e.push(String.fromCharCode(parseInt(t.substr(r, 2), 16)));
          return e.join("");
        }),
        (C.prototype.processOwnerPassword = function (t, e) {
          return F(P(e).substr(0, 5), t);
        }),
        (C.prototype.encryptor = function (t, e) {
          let r = P(this.encryptionKey + String.fromCharCode(255 & t, (t >> 8) & 255, (t >> 16) & 255, 255 & e, (e >> 8) & 255)).substr(
            0,
            10
          );
          return function (t) {
            return F(r, t);
          };
        }),
        (j.prototype.equals = function (t) {
          var e,
            r = "id,objectNumber,equals";
          if (!t || typeof t != typeof this) return !1;
          var n = 0;
          for (e in this)
            if (!(r.indexOf(e) >= 0)) {
              if (this.hasOwnProperty(e) && !t.hasOwnProperty(e)) return !1;
              if (this[e] !== t[e]) return !1;
              n++;
            }
          for (e in t) t.hasOwnProperty(e) && r.indexOf(e) < 0 && n--;
          return 0 === n;
        }),
        (B.API = { events: [] }),
        (B.version = "2.3.1");
      var T = B.API,
        q = 1,
        D = function (t) {
          return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        },
        U = function (t) {
          return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
        },
        z = function (t) {
          return t.toFixed(2);
        },
        H = function (t) {
          return t.toFixed(5);
        };
      T.__acroform__ = {};
      var W = function (t, e) {
          (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t);
        },
        V = function (t) {
          return t * q;
        },
        G = function (t) {
          var e = new ut(),
            r = Lt.internal.getHeight(t) || 0,
            n = Lt.internal.getWidth(t) || 0;
          return (e.BBox = [0, 0, Number(z(n)), Number(z(r))]), e;
        },
        Y = (T.__acroform__.setBit = function (t, e) {
          if (((t = t || 0), (e = e || 0), isNaN(t) || isNaN(e)))
            throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
          return t | (1 << e);
        }),
        X = (T.__acroform__.clearBit = function (t, e) {
          if (((t = t || 0), (e = e || 0), isNaN(t) || isNaN(e)))
            throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
          return t & ~(1 << e);
        }),
        J = (T.__acroform__.getBit = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
          return 0 == (t & (1 << e)) ? 0 : 1;
        }),
        K = (T.__acroform__.getBitForPdf = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
          return J(t, e - 1);
        }),
        $ = (T.__acroform__.setBitForPdf = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
          return Y(t, e - 1);
        }),
        Z = (T.__acroform__.clearBitForPdf = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
          return X(t, e - 1);
        }),
        Q = (T.__acroform__.calculateCoordinates = function (t, e) {
          var r = e.internal.getHorizontalCoordinate,
            n = e.internal.getVerticalCoordinate,
            i = t[0],
            o = t[1],
            a = t[2],
            s = t[3],
            u = {};
          return (
            (u.lowerLeft_X = r(i) || 0),
            (u.lowerLeft_Y = n(o + s) || 0),
            (u.upperRight_X = r(i + a) || 0),
            (u.upperRight_Y = n(o) || 0),
            [Number(z(u.lowerLeft_X)), Number(z(u.lowerLeft_Y)), Number(z(u.upperRight_X)), Number(z(u.upperRight_Y))]
          );
        }),
        tt = function (t) {
          if (t.appearanceStreamContent) return t.appearanceStreamContent;
          if (t.V || t.DV) {
            var e = [],
              r = t._V || t.DV,
              n = et(t, r),
              i = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
            e.push("/Tx BMC"),
              e.push("q"),
              e.push("BT"),
              e.push(t.scope.__private__.encodeColorString(t.color)),
              e.push("/" + i + " " + z(n.fontSize) + " Tf"),
              e.push("1 0 0 1 0 0 Tm"),
              e.push(n.text),
              e.push("ET"),
              e.push("Q"),
              e.push("EMC");
            var o = G(t);
            return (o.scope = t.scope), (o.stream = e.join("\n")), o;
          }
        },
        et = function (t, e) {
          var r = 0 === t.fontSize ? t.maxFontSize : t.fontSize,
            n = { text: "", fontSize: "" },
            i = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" "),
            o = r,
            a = Lt.internal.getHeight(t) || 0;
          a = a < 0 ? -a : a;
          var s = Lt.internal.getWidth(t) || 0;
          s = s < 0 ? -s : s;
          var u = function (e, r, n) {
            if (e + 1 < i.length) {
              var o = r + " " + i[e + 1];
              return rt(o, t, n).width <= s - 4;
            }
            return !1;
          };
          o++;
          t: for (; o > 0; ) {
            (e = ""), o--;
            var c,
              l,
              h = rt("3", t, o).height,
              f = t.multiline ? a - o : (a - h) / 2,
              d = (f += 2),
              p = 0,
              g = 0;
            if (o <= 0) {
              (e = "(...) Tj\n"), (e += "% Width of Text: " + rt(e, t, (o = 12)).width + ", FieldWidth:" + s + "\n");
              break;
            }
            var m = "",
              v = 0;
            for (var b in i)
              if (i.hasOwnProperty(b)) {
                m = " " == (m += i[b] + " ").substr(m.length - 1) ? m.substr(0, m.length - 1) : m;
                var y = parseInt(b),
                  w = u(y, m, o),
                  x = b >= i.length - 1;
                if (w && !x) {
                  m += " ";
                  continue;
                }
                if (w || x) {
                  if (x) g = y;
                  else if (t.multiline && (h + 2) * (v + 2) + 2 > a) continue t;
                } else {
                  if (!t.multiline) continue t;
                  if ((h + 2) * (v + 2) + 2 > a) continue t;
                  g = y;
                }
                for (var L = "", N = p; N <= g; N++) L += i[N] + " ";
                switch (((L = " " == L.substr(L.length - 1) ? L.substr(0, L.length - 1) : L), (l = rt(L, t, o).width), t.textAlign)) {
                  case "right":
                    c = s - l - 2;
                    break;
                  case "center":
                    c = (s - l) / 2;
                    break;
                  default:
                    c = 2;
                }
                (e += z(c) + " " + z(d) + " Td\n"),
                  (e += "(" + D(L) + ") Tj\n"),
                  (e += -z(c) + " 0 Td\n"),
                  (d = -(o + 2)),
                  (l = 0),
                  (p = g + 1),
                  v++,
                  (m = "");
              }
            break;
          }
          return (n.text = e), (n.fontSize = o), n;
        },
        rt = function (t, e, r) {
          var n = e.scope.internal.getFont(e.fontName, e.fontStyle),
            i = e.scope.getStringUnitWidth(t, { font: n, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r);
          return {
            height: e.scope.getStringUnitWidth("3", { font: n, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r) * 1.5,
            width: i
          };
        },
        nt = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 },
        it = function (t, e) {
          var r = { type: "reference", object: t };
          void 0 ===
            e.internal.getPageInfo(t.page).pageContext.annotations.find(function (t) {
              return t.type === r.type && t.object === r.object;
            }) && e.internal.getPageInfo(t.page).pageContext.annotations.push(r);
        },
        ot = (T.__acroform__.arrayToPdfArray = function (t, e, r) {
          var n = function (t) {
            return t;
          };
          if (Array.isArray(t)) {
            for (var i = "[", o = 0; o < t.length; o++)
              switch ((0 !== o && (i += " "), typeof t[o])) {
                case "boolean":
                case "number":
                case "object":
                  i += t[o].toString();
                  break;
                case "string":
                  "/" !== t[o].substr(0, 1)
                    ? (void 0 !== e && r && (n = r.internal.getEncryptor(e)), (i += "(" + D(n(t[o].toString())) + ")"))
                    : (i += t[o].toString());
              }
            return i + "]";
          }
          throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
        }),
        at = function (t, e, r) {
          var n = function (t) {
            return t;
          };
          return void 0 !== e && r && (n = r.internal.getEncryptor(e)), (t = t || "").toString(), "(" + D(n(t)) + ")";
        },
        st = function () {
          (this._objId = void 0),
            (this._scope = void 0),
            Object.defineProperty(this, "objId", {
              get: function () {
                if (void 0 === this._objId) {
                  if (void 0 === this.scope) return;
                  this._objId = this.scope.internal.newObjectDeferred();
                }
                return this._objId;
              },
              set: function (t) {
                this._objId = t;
              }
            }),
            Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
        };
      (st.prototype.toString = function () {
        return this.objId + " 0 R";
      }),
        (st.prototype.putStream = function () {
          var t = this.getKeyValueListForStream();
          this.scope.internal.putStream({ data: this.stream, additionalKeyValues: t, objectId: this.objId }),
            this.scope.internal.out("endobj");
        }),
        (st.prototype.getKeyValueListForStream = function () {
          var t = [],
            e = Object.getOwnPropertyNames(this).filter(function (t) {
              return "content" != t && "appearanceStreamContent" != t && "scope" != t && "objId" != t && "_" != t.substring(0, 1);
            });
          for (var r in e)
            if (!1 === Object.getOwnPropertyDescriptor(this, e[r]).configurable) {
              var n = e[r],
                i = this[n];
              i &&
                (Array.isArray(i)
                  ? t.push({ key: n, value: ot(i, this.objId, this.scope) })
                  : i instanceof st
                  ? ((i.scope = this.scope), t.push({ key: n, value: i.objId + " 0 R" }))
                  : "function" != typeof i && t.push({ key: n, value: i }));
            }
          return t;
        });
      var ut = function () {
        st.call(this),
          Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }),
          Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }),
          Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
        var t,
          e = [];
        Object.defineProperty(this, "BBox", {
          configurable: !1,
          get: function () {
            return e;
          },
          set: function (t) {
            e = t;
          }
        }),
          Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }),
          Object.defineProperty(this, "stream", {
            enumerable: !1,
            configurable: !0,
            set: function (e) {
              t = e.trim();
            },
            get: function () {
              return t || null;
            }
          });
      };
      W(ut, st);
      var ct = function () {
        st.call(this);
        var t,
          e = [];
        Object.defineProperty(this, "Kids", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return e.length > 0 ? e : void 0;
          }
        }),
          Object.defineProperty(this, "Fields", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              return e;
            }
          }),
          Object.defineProperty(this, "DA", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              if (t) {
                var e = function (t) {
                  return t;
                };
                return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + D(e(t)) + ")";
              }
            },
            set: function (e) {
              t = e;
            }
          });
      };
      W(ct, st);
      var lt = function () {
        st.call(this);
        var t = 4;
        Object.defineProperty(this, "F", {
          enumerable: !1,
          configurable: !1,
          get: function () {
            return t;
          },
          set: function (e) {
            if (isNaN(e)) throw new Error('Invalid value "' + e + '" for attribute F supplied.');
            t = e;
          }
        }),
          Object.defineProperty(this, "showWhenPrinted", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(t, 3));
            },
            set: function (e) {
              !0 === Boolean(e) ? (this.F = $(t, 3)) : (this.F = Z(t, 3));
            }
          });
        var e = 0;
        Object.defineProperty(this, "Ff", {
          enumerable: !1,
          configurable: !1,
          get: function () {
            return e;
          },
          set: function (t) {
            if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
            e = t;
          }
        });
        var r = [];
        Object.defineProperty(this, "Rect", {
          enumerable: !1,
          configurable: !1,
          get: function () {
            if (0 !== r.length) return r;
          },
          set: function (t) {
            r = void 0 !== t ? t : [];
          }
        }),
          Object.defineProperty(this, "x", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return !r || isNaN(r[0]) ? 0 : r[0];
            },
            set: function (t) {
              r[0] = t;
            }
          }),
          Object.defineProperty(this, "y", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return !r || isNaN(r[1]) ? 0 : r[1];
            },
            set: function (t) {
              r[1] = t;
            }
          }),
          Object.defineProperty(this, "width", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return !r || isNaN(r[2]) ? 0 : r[2];
            },
            set: function (t) {
              r[2] = t;
            }
          }),
          Object.defineProperty(this, "height", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return !r || isNaN(r[3]) ? 0 : r[3];
            },
            set: function (t) {
              r[3] = t;
            }
          });
        var n = "";
        Object.defineProperty(this, "FT", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return n;
          },
          set: function (t) {
            switch (t) {
              case "/Btn":
              case "/Tx":
              case "/Ch":
              case "/Sig":
                n = t;
                break;
              default:
                throw new Error('Invalid value "' + t + '" for attribute FT supplied.');
            }
          }
        });
        var i = null;
        Object.defineProperty(this, "T", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            if (!i || i.length < 1) {
              if (this instanceof bt) return;
              i = "FieldObject" + lt.FieldNum++;
            }
            var t = function (t) {
              return t;
            };
            return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + D(t(i)) + ")";
          },
          set: function (t) {
            i = t.toString();
          }
        }),
          Object.defineProperty(this, "fieldName", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return i;
            },
            set: function (t) {
              i = t;
            }
          });
        var o = "helvetica";
        Object.defineProperty(this, "fontName", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return o;
          },
          set: function (t) {
            o = t;
          }
        });
        var a = "normal";
        Object.defineProperty(this, "fontStyle", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return a;
          },
          set: function (t) {
            a = t;
          }
        });
        var s = 0;
        Object.defineProperty(this, "fontSize", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return s;
          },
          set: function (t) {
            s = t;
          }
        });
        var u = void 0;
        Object.defineProperty(this, "maxFontSize", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return void 0 === u ? 50 / q : u;
          },
          set: function (t) {
            u = t;
          }
        });
        var c = "black";
        Object.defineProperty(this, "color", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return c;
          },
          set: function (t) {
            c = t;
          }
        });
        var l = "/F1 0 Tf 0 g";
        Object.defineProperty(this, "DA", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            if (!(!l || this instanceof bt || this instanceof wt)) return at(l, this.objId, this.scope);
          },
          set: function (t) {
            (t = t.toString()), (l = t);
          }
        });
        var h = null;
        Object.defineProperty(this, "DV", {
          enumerable: !1,
          configurable: !1,
          get: function () {
            if (h) return this instanceof gt == 0 ? at(h, this.objId, this.scope) : h;
          },
          set: function (t) {
            (t = t.toString()), (h = this instanceof gt == 0 ? ("(" === t.substr(0, 1) ? U(t.substr(1, t.length - 2)) : U(t)) : t);
          }
        }),
          Object.defineProperty(this, "defaultValue", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return this instanceof gt == 1 ? U(h.substr(1, h.length - 1)) : h;
            },
            set: function (t) {
              (t = t.toString()), (h = this instanceof gt == 1 ? "/" + t : t);
            }
          });
        var f = null;
        Object.defineProperty(this, "_V", {
          enumerable: !1,
          configurable: !1,
          get: function () {
            if (f) return f;
          },
          set: function (t) {
            this.V = t;
          }
        }),
          Object.defineProperty(this, "V", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              if (f) return this instanceof gt == 0 ? at(f, this.objId, this.scope) : f;
            },
            set: function (t) {
              (t = t.toString()), (f = this instanceof gt == 0 ? ("(" === t.substr(0, 1) ? U(t.substr(1, t.length - 2)) : U(t)) : t);
            }
          }),
          Object.defineProperty(this, "value", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return this instanceof gt == 1 ? U(f.substr(1, f.length - 1)) : f;
            },
            set: function (t) {
              (t = t.toString()), (f = this instanceof gt == 1 ? "/" + t : t);
            }
          }),
          Object.defineProperty(this, "hasAnnotation", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return this.Rect;
            }
          }),
          Object.defineProperty(this, "Type", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              return this.hasAnnotation ? "/Annot" : null;
            }
          }),
          Object.defineProperty(this, "Subtype", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              return this.hasAnnotation ? "/Widget" : null;
            }
          });
        var d,
          p = !1;
        Object.defineProperty(this, "hasAppearanceStream", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return p;
          },
          set: function (t) {
            (t = Boolean(t)), (p = t);
          }
        }),
          Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              if (d) return d;
            },
            set: function (t) {
              d = t;
            }
          }),
          Object.defineProperty(this, "readOnly", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 1));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 1)) : (this.Ff = Z(this.Ff, 1));
            }
          }),
          Object.defineProperty(this, "required", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 2));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 2)) : (this.Ff = Z(this.Ff, 2));
            }
          }),
          Object.defineProperty(this, "noExport", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 3));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 3)) : (this.Ff = Z(this.Ff, 3));
            }
          });
        var g = null;
        Object.defineProperty(this, "Q", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            if (null !== g) return g;
          },
          set: function (t) {
            if (-1 === [0, 1, 2].indexOf(t)) throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
            g = t;
          }
        }),
          Object.defineProperty(this, "textAlign", {
            get: function () {
              var t;
              switch (g) {
                case 0:
                default:
                  t = "left";
                  break;
                case 1:
                  t = "center";
                  break;
                case 2:
                  t = "right";
              }
              return t;
            },
            configurable: !0,
            enumerable: !0,
            set: function (t) {
              switch (t) {
                case "right":
                case 2:
                  g = 2;
                  break;
                case "center":
                case 1:
                  g = 1;
                  break;
                default:
                  g = 0;
              }
            }
          });
      };
      W(lt, st);
      var ht = function () {
        lt.call(this), (this.FT = "/Ch"), (this.V = "()"), (this.fontName = "zapfdingbats");
        var t = 0;
        Object.defineProperty(this, "TI", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return t;
          },
          set: function (e) {
            t = e;
          }
        }),
          Object.defineProperty(this, "topIndex", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return t;
            },
            set: function (e) {
              t = e;
            }
          });
        var e = [];
        Object.defineProperty(this, "Opt", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return ot(e, this.objId, this.scope);
          },
          set: function (t) {
            var r, n;
            (n = []),
              "string" == typeof (r = t) &&
                (n = (function (t, e, r) {
                  r || (r = 1);
                  for (var n, i = []; (n = e.exec(t)); ) i.push(n[r]);
                  return i;
                })(r, /\((.*?)\)/g)),
              (e = n);
          }
        }),
          (this.getOptions = function () {
            return e;
          }),
          (this.setOptions = function (t) {
            (e = t), this.sort && e.sort();
          }),
          (this.addOption = function (t) {
            (t = (t = t || "").toString()), e.push(t), this.sort && e.sort();
          }),
          (this.removeOption = function (t, r) {
            for (r = r || !1, t = (t = t || "").toString(); -1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1), !1 !== r); );
          }),
          Object.defineProperty(this, "combo", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 18));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 18)) : (this.Ff = Z(this.Ff, 18));
            }
          }),
          Object.defineProperty(this, "edit", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 19));
            },
            set: function (t) {
              !0 === this.combo && (!0 === Boolean(t) ? (this.Ff = $(this.Ff, 19)) : (this.Ff = Z(this.Ff, 19)));
            }
          }),
          Object.defineProperty(this, "sort", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 20));
            },
            set: function (t) {
              !0 === Boolean(t) ? ((this.Ff = $(this.Ff, 20)), e.sort()) : (this.Ff = Z(this.Ff, 20));
            }
          }),
          Object.defineProperty(this, "multiSelect", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 22));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 22)) : (this.Ff = Z(this.Ff, 22));
            }
          }),
          Object.defineProperty(this, "doNotSpellCheck", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 23));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 23)) : (this.Ff = Z(this.Ff, 23));
            }
          }),
          Object.defineProperty(this, "commitOnSelChange", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 27));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 27)) : (this.Ff = Z(this.Ff, 27));
            }
          }),
          (this.hasAppearanceStream = !1);
      };
      W(ht, lt);
      var ft = function () {
        ht.call(this), (this.fontName = "helvetica"), (this.combo = !1);
      };
      W(ft, ht);
      var dt = function () {
        ft.call(this), (this.combo = !0);
      };
      W(dt, ft);
      var pt = function () {
        dt.call(this), (this.edit = !0);
      };
      W(pt, dt);
      var gt = function () {
        lt.call(this),
          (this.FT = "/Btn"),
          Object.defineProperty(this, "noToggleToOff", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 15));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 15)) : (this.Ff = Z(this.Ff, 15));
            }
          }),
          Object.defineProperty(this, "radio", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 16));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 16)) : (this.Ff = Z(this.Ff, 16));
            }
          }),
          Object.defineProperty(this, "pushButton", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 17));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 17)) : (this.Ff = Z(this.Ff, 17));
            }
          }),
          Object.defineProperty(this, "radioIsUnison", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 26));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 26)) : (this.Ff = Z(this.Ff, 26));
            }
          });
        var t,
          e = {};
        Object.defineProperty(this, "MK", {
          enumerable: !1,
          configurable: !1,
          get: function () {
            var t = function (t) {
              return t;
            };
            if ((this.scope && (t = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(e).length)) {
              var r,
                n = [];
              for (r in (n.push("<<"), e)) n.push("/" + r + " (" + D(t(e[r])) + ")");
              return n.push(">>"), n.join("\n");
            }
          },
          set: function (t) {
            "object" == typeof t && (e = t);
          }
        }),
          Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return e.CA || "";
            },
            set: function (t) {
              "string" == typeof t && (e.CA = t);
            }
          }),
          Object.defineProperty(this, "AS", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              return t;
            },
            set: function (e) {
              t = e;
            }
          }),
          Object.defineProperty(this, "appearanceState", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return t.substr(1, t.length - 1);
            },
            set: function (e) {
              t = "/" + e;
            }
          });
      };
      W(gt, lt);
      var mt = function () {
        gt.call(this), (this.pushButton = !0);
      };
      W(mt, gt);
      var vt = function () {
        gt.call(this), (this.radio = !0), (this.pushButton = !1);
        var t = [];
        Object.defineProperty(this, "Kids", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return t;
          },
          set: function (e) {
            t = void 0 !== e ? e : [];
          }
        });
      };
      W(vt, gt);
      var bt = function () {
        var t, e;
        lt.call(this),
          Object.defineProperty(this, "Parent", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              return t;
            },
            set: function (e) {
              t = e;
            }
          }),
          Object.defineProperty(this, "optionName", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return e;
            },
            set: function (t) {
              e = t;
            }
          });
        var r,
          n = {};
        Object.defineProperty(this, "MK", {
          enumerable: !1,
          configurable: !1,
          get: function () {
            var t = function (t) {
              return t;
            };
            this.scope && (t = this.scope.internal.getEncryptor(this.objId));
            var e,
              r = [];
            for (e in (r.push("<<"), n)) r.push("/" + e + " (" + D(t(n[e])) + ")");
            return r.push(">>"), r.join("\n");
          },
          set: function (t) {
            "object" == typeof t && (n = t);
          }
        }),
          Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return n.CA || "";
            },
            set: function (t) {
              "string" == typeof t && (n.CA = t);
            }
          }),
          Object.defineProperty(this, "AS", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              return r;
            },
            set: function (t) {
              r = t;
            }
          }),
          Object.defineProperty(this, "appearanceState", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return r.substr(1, r.length - 1);
            },
            set: function (t) {
              r = "/" + t;
            }
          }),
          (this.caption = "l"),
          (this.appearanceState = "Off"),
          (this._AppearanceType = Lt.RadioButton.Circle),
          (this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName));
      };
      W(bt, lt),
        (vt.prototype.setAppearance = function (t) {
          if (!("createAppearanceStream" in t) || !("getCA" in t))
            throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
          for (var e in this.Kids)
            if (this.Kids.hasOwnProperty(e)) {
              var r = this.Kids[e];
              (r.appearanceStreamContent = t.createAppearanceStream(r.optionName)), (r.caption = t.getCA());
            }
        }),
        (vt.prototype.createOption = function (t) {
          var e = new bt();
          return (e.Parent = this), (e.optionName = t), this.Kids.push(e), Nt.call(this.scope, e), e;
        });
      var yt = function () {
        gt.call(this),
          (this.fontName = "zapfdingbats"),
          (this.caption = "3"),
          (this.appearanceState = "On"),
          (this.value = "On"),
          (this.textAlign = "center"),
          (this.appearanceStreamContent = Lt.CheckBox.createAppearanceStream());
      };
      W(yt, gt);
      var wt = function () {
        lt.call(this),
          (this.FT = "/Tx"),
          Object.defineProperty(this, "multiline", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 13));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 13)) : (this.Ff = Z(this.Ff, 13));
            }
          }),
          Object.defineProperty(this, "fileSelect", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 21));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 21)) : (this.Ff = Z(this.Ff, 21));
            }
          }),
          Object.defineProperty(this, "doNotSpellCheck", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 23));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 23)) : (this.Ff = Z(this.Ff, 23));
            }
          }),
          Object.defineProperty(this, "doNotScroll", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 24));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 24)) : (this.Ff = Z(this.Ff, 24));
            }
          }),
          Object.defineProperty(this, "comb", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 25));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 25)) : (this.Ff = Z(this.Ff, 25));
            }
          }),
          Object.defineProperty(this, "richText", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 26));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 26)) : (this.Ff = Z(this.Ff, 26));
            }
          });
        var t = null;
        Object.defineProperty(this, "MaxLen", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return t;
          },
          set: function (e) {
            t = e;
          }
        }),
          Object.defineProperty(this, "maxLength", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return t;
            },
            set: function (e) {
              Number.isInteger(e) && (t = e);
            }
          }),
          Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return this.V || this.DV;
            }
          });
      };
      W(wt, lt);
      var xt = function () {
        wt.call(this),
          Object.defineProperty(this, "password", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return Boolean(K(this.Ff, 14));
            },
            set: function (t) {
              !0 === Boolean(t) ? (this.Ff = $(this.Ff, 14)) : (this.Ff = Z(this.Ff, 14));
            }
          }),
          (this.password = !0);
      };
      W(xt, wt);
      var Lt = {
        CheckBox: {
          createAppearanceStream: function () {
            return { N: { On: Lt.CheckBox.YesNormal }, D: { On: Lt.CheckBox.YesPushDown, Off: Lt.CheckBox.OffPushDown } };
          },
          YesPushDown: function (t) {
            var e = G(t);
            e.scope = t.scope;
            var r = [],
              n = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
              i = t.scope.__private__.encodeColorString(t.color),
              o = et(t, t.caption);
            return (
              r.push("0.749023 g"),
              r.push("0 0 " + z(Lt.internal.getWidth(t)) + " " + z(Lt.internal.getHeight(t)) + " re"),
              r.push("f"),
              r.push("BMC"),
              r.push("q"),
              r.push("0 0 1 rg"),
              r.push("/" + n + " " + z(o.fontSize) + " Tf " + i),
              r.push("BT"),
              r.push(o.text),
              r.push("ET"),
              r.push("Q"),
              r.push("EMC"),
              (e.stream = r.join("\n")),
              e
            );
          },
          YesNormal: function (t) {
            var e = G(t);
            e.scope = t.scope;
            var r = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
              n = t.scope.__private__.encodeColorString(t.color),
              i = [],
              o = Lt.internal.getHeight(t),
              a = Lt.internal.getWidth(t),
              s = et(t, t.caption);
            return (
              i.push("1 g"),
              i.push("0 0 " + z(a) + " " + z(o) + " re"),
              i.push("f"),
              i.push("q"),
              i.push("0 0 1 rg"),
              i.push("0 0 " + z(a - 1) + " " + z(o - 1) + " re"),
              i.push("W"),
              i.push("n"),
              i.push("0 g"),
              i.push("BT"),
              i.push("/" + r + " " + z(s.fontSize) + " Tf " + n),
              i.push(s.text),
              i.push("ET"),
              i.push("Q"),
              (e.stream = i.join("\n")),
              e
            );
          },
          OffPushDown: function (t) {
            var e = G(t);
            e.scope = t.scope;
            var r = [];
            return (
              r.push("0.749023 g"),
              r.push("0 0 " + z(Lt.internal.getWidth(t)) + " " + z(Lt.internal.getHeight(t)) + " re"),
              r.push("f"),
              (e.stream = r.join("\n")),
              e
            );
          }
        },
        RadioButton: {
          Circle: {
            createAppearanceStream: function (t) {
              var e = { D: { Off: Lt.RadioButton.Circle.OffPushDown }, N: {} };
              return (e.N[t] = Lt.RadioButton.Circle.YesNormal), (e.D[t] = Lt.RadioButton.Circle.YesPushDown), e;
            },
            getCA: function () {
              return "l";
            },
            YesNormal: function (t) {
              var e = G(t);
              e.scope = t.scope;
              var r = [],
                n = Lt.internal.getWidth(t) <= Lt.internal.getHeight(t) ? Lt.internal.getWidth(t) / 4 : Lt.internal.getHeight(t) / 4;
              n = Number((0.9 * n).toFixed(5));
              var i = Lt.internal.Bezier_C,
                o = Number((n * i).toFixed(5));
              return (
                r.push("q"),
                r.push("1 0 0 1 " + H(Lt.internal.getWidth(t) / 2) + " " + H(Lt.internal.getHeight(t) / 2) + " cm"),
                r.push(n + " 0 m"),
                r.push(n + " " + o + " " + o + " " + n + " 0 " + n + " c"),
                r.push("-" + o + " " + n + " -" + n + " " + o + " -" + n + " 0 c"),
                r.push("-" + n + " -" + o + " -" + o + " -" + n + " 0 -" + n + " c"),
                r.push(o + " -" + n + " " + n + " -" + o + " " + n + " 0 c"),
                r.push("f"),
                r.push("Q"),
                (e.stream = r.join("\n")),
                e
              );
            },
            YesPushDown: function (t) {
              var e = G(t);
              e.scope = t.scope;
              var r = [],
                n = Lt.internal.getWidth(t) <= Lt.internal.getHeight(t) ? Lt.internal.getWidth(t) / 4 : Lt.internal.getHeight(t) / 4;
              n = Number((0.9 * n).toFixed(5));
              var i = Number((2 * n).toFixed(5)),
                o = Number((i * Lt.internal.Bezier_C).toFixed(5)),
                a = Number((n * Lt.internal.Bezier_C).toFixed(5));
              return (
                r.push("0.749023 g"),
                r.push("q"),
                r.push("1 0 0 1 " + H(Lt.internal.getWidth(t) / 2) + " " + H(Lt.internal.getHeight(t) / 2) + " cm"),
                r.push(i + " 0 m"),
                r.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"),
                r.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"),
                r.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"),
                r.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"),
                r.push("f"),
                r.push("Q"),
                r.push("0 g"),
                r.push("q"),
                r.push("1 0 0 1 " + H(Lt.internal.getWidth(t) / 2) + " " + H(Lt.internal.getHeight(t) / 2) + " cm"),
                r.push(n + " 0 m"),
                r.push(n + " " + a + " " + a + " " + n + " 0 " + n + " c"),
                r.push("-" + a + " " + n + " -" + n + " " + a + " -" + n + " 0 c"),
                r.push("-" + n + " -" + a + " -" + a + " -" + n + " 0 -" + n + " c"),
                r.push(a + " -" + n + " " + n + " -" + a + " " + n + " 0 c"),
                r.push("f"),
                r.push("Q"),
                (e.stream = r.join("\n")),
                e
              );
            },
            OffPushDown: function (t) {
              var e = G(t);
              e.scope = t.scope;
              var r = [],
                n = Lt.internal.getWidth(t) <= Lt.internal.getHeight(t) ? Lt.internal.getWidth(t) / 4 : Lt.internal.getHeight(t) / 4;
              n = Number((0.9 * n).toFixed(5));
              var i = Number((2 * n).toFixed(5)),
                o = Number((i * Lt.internal.Bezier_C).toFixed(5));
              return (
                r.push("0.749023 g"),
                r.push("q"),
                r.push("1 0 0 1 " + H(Lt.internal.getWidth(t) / 2) + " " + H(Lt.internal.getHeight(t) / 2) + " cm"),
                r.push(i + " 0 m"),
                r.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"),
                r.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"),
                r.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"),
                r.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"),
                r.push("f"),
                r.push("Q"),
                (e.stream = r.join("\n")),
                e
              );
            }
          },
          Cross: {
            createAppearanceStream: function (t) {
              var e = { D: { Off: Lt.RadioButton.Cross.OffPushDown }, N: {} };
              return (e.N[t] = Lt.RadioButton.Cross.YesNormal), (e.D[t] = Lt.RadioButton.Cross.YesPushDown), e;
            },
            getCA: function () {
              return "8";
            },
            YesNormal: function (t) {
              var e = G(t);
              e.scope = t.scope;
              var r = [],
                n = Lt.internal.calculateCross(t);
              return (
                r.push("q"),
                r.push("1 1 " + z(Lt.internal.getWidth(t) - 2) + " " + z(Lt.internal.getHeight(t) - 2) + " re"),
                r.push("W"),
                r.push("n"),
                r.push(z(n.x1.x) + " " + z(n.x1.y) + " m"),
                r.push(z(n.x2.x) + " " + z(n.x2.y) + " l"),
                r.push(z(n.x4.x) + " " + z(n.x4.y) + " m"),
                r.push(z(n.x3.x) + " " + z(n.x3.y) + " l"),
                r.push("s"),
                r.push("Q"),
                (e.stream = r.join("\n")),
                e
              );
            },
            YesPushDown: function (t) {
              var e = G(t);
              e.scope = t.scope;
              var r = Lt.internal.calculateCross(t),
                n = [];
              return (
                n.push("0.749023 g"),
                n.push("0 0 " + z(Lt.internal.getWidth(t)) + " " + z(Lt.internal.getHeight(t)) + " re"),
                n.push("f"),
                n.push("q"),
                n.push("1 1 " + z(Lt.internal.getWidth(t) - 2) + " " + z(Lt.internal.getHeight(t) - 2) + " re"),
                n.push("W"),
                n.push("n"),
                n.push(z(r.x1.x) + " " + z(r.x1.y) + " m"),
                n.push(z(r.x2.x) + " " + z(r.x2.y) + " l"),
                n.push(z(r.x4.x) + " " + z(r.x4.y) + " m"),
                n.push(z(r.x3.x) + " " + z(r.x3.y) + " l"),
                n.push("s"),
                n.push("Q"),
                (e.stream = n.join("\n")),
                e
              );
            },
            OffPushDown: function (t) {
              var e = G(t);
              e.scope = t.scope;
              var r = [];
              return (
                r.push("0.749023 g"),
                r.push("0 0 " + z(Lt.internal.getWidth(t)) + " " + z(Lt.internal.getHeight(t)) + " re"),
                r.push("f"),
                (e.stream = r.join("\n")),
                e
              );
            }
          }
        },
        createDefaultAppearanceStream: function (t) {
          var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
            r = t.scope.__private__.encodeColorString(t.color);
          return "/" + e + " " + t.fontSize + " Tf " + r;
        }
      };
      (Lt.internal = {
        Bezier_C: 0.551915024494,
        calculateCross: function (t) {
          var e = Lt.internal.getWidth(t),
            r = Lt.internal.getHeight(t),
            n = Math.min(e, r);
          return {
            x1: { x: (e - n) / 2, y: (r - n) / 2 + n },
            x2: { x: (e - n) / 2 + n, y: (r - n) / 2 },
            x3: { x: (e - n) / 2, y: (r - n) / 2 },
            x4: { x: (e - n) / 2 + n, y: (r - n) / 2 + n }
          };
        }
      }),
        (Lt.internal.getWidth = function (t) {
          var e = 0;
          return "object" == typeof t && (e = V(t.Rect[2])), e;
        }),
        (Lt.internal.getHeight = function (t) {
          var e = 0;
          return "object" == typeof t && (e = V(t.Rect[3])), e;
        });
      var Nt = (T.addField = function (t) {
        if (
          ((function (t, e) {
            if (
              ((e.scope = t),
              void 0 !== t.internal && (void 0 === t.internal.acroformPlugin || !1 === t.internal.acroformPlugin.isInitialized))
            ) {
              if (
                ((lt.FieldNum = 0),
                (t.internal.acroformPlugin = JSON.parse(JSON.stringify(nt))),
                t.internal.acroformPlugin.acroFormDictionaryRoot)
              )
                throw new Error("Exception while creating AcroformDictionary");
              (q = t.internal.scaleFactor),
                (t.internal.acroformPlugin.acroFormDictionaryRoot = new ct()),
                (t.internal.acroformPlugin.acroFormDictionaryRoot.scope = t),
                (t.internal.acroformPlugin.acroFormDictionaryRoot._eventID = t.internal.events.subscribe("postPutResources", function () {
                  !(function (t) {
                    t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID),
                      delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
                      (t.internal.acroformPlugin.printedOut = !0);
                  })(t);
                })),
                t.internal.events.subscribe("buildDocument", function () {
                  !(function (t) {
                    t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                    var e = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                    for (var r in e)
                      if (e.hasOwnProperty(r)) {
                        var n = e[r];
                        (n.objId = void 0), n.hasAnnotation && it(n, t);
                      }
                  })(t);
                }),
                t.internal.events.subscribe("putCatalog", function () {
                  !(function (t) {
                    if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
                    t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
                  })(t);
                }),
                t.internal.events.subscribe("postPutPages", function (e) {
                  !(function (t, e) {
                    var r = !t;
                    for (var n in (t ||
                      (e.internal.newObjectDeferredBegin(e.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0),
                      e.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
                    (t = t || e.internal.acroformPlugin.acroFormDictionaryRoot.Kids)))
                      if (t.hasOwnProperty(n)) {
                        var i = t[n],
                          o = [],
                          a = i.Rect;
                        if (
                          (i.Rect && (i.Rect = Q(i.Rect, e)),
                          e.internal.newObjectDeferredBegin(i.objId, !0),
                          (i.DA = Lt.createDefaultAppearanceStream(i)),
                          "object" == typeof i && "function" == typeof i.getKeyValueListForStream && (o = i.getKeyValueListForStream()),
                          (i.Rect = a),
                          i.hasAppearanceStream && !i.appearanceStreamContent)
                        ) {
                          var s = tt(i);
                          o.push({ key: "AP", value: "<</N " + s + ">>" }), e.internal.acroformPlugin.xForms.push(s);
                        }
                        if (i.appearanceStreamContent) {
                          var u = "";
                          for (var c in i.appearanceStreamContent)
                            if (i.appearanceStreamContent.hasOwnProperty(c)) {
                              var l = i.appearanceStreamContent[c];
                              if (((u += "/" + c + " "), (u += "<<"), Object.keys(l).length >= 1 || Array.isArray(l))) {
                                for (var n in l)
                                  if (l.hasOwnProperty(n)) {
                                    var h = l[n];
                                    "function" == typeof h && (h = h.call(e, i)),
                                      (u += "/" + n + " " + h + " "),
                                      e.internal.acroformPlugin.xForms.indexOf(h) >= 0 || e.internal.acroformPlugin.xForms.push(h);
                                  }
                              } else
                                "function" == typeof (h = l) && (h = h.call(e, i)),
                                  (u += "/" + n + " " + h),
                                  e.internal.acroformPlugin.xForms.indexOf(h) >= 0 || e.internal.acroformPlugin.xForms.push(h);
                              u += ">>";
                            }
                          o.push({ key: "AP", value: "<<\n" + u + ">>" });
                        }
                        e.internal.putStream({ additionalKeyValues: o, objectId: i.objId }), e.internal.out("endobj");
                      }
                    r &&
                      (function (t, e) {
                        for (var r in t)
                          if (t.hasOwnProperty(r)) {
                            var n = r,
                              i = t[r];
                            e.internal.newObjectDeferredBegin(i.objId, !0),
                              "object" == typeof i && "function" == typeof i.putStream && i.putStream(),
                              delete t[n];
                          }
                      })(e.internal.acroformPlugin.xForms, e);
                  })(e, t);
                }),
                (t.internal.acroformPlugin.isInitialized = !0);
            }
          })(this, t),
          !(t instanceof lt))
        )
          throw new Error("Invalid argument passed to jsPDF.addField.");
        var e;
        return (
          (e = t).scope.internal.acroformPlugin.printedOut &&
            ((e.scope.internal.acroformPlugin.printedOut = !1), (e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null)),
          e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),
          (t.page = t.scope.internal.getCurrentPageInfo().pageNumber),
          this
        );
      });
      (T.AcroFormChoiceField = ht),
        (T.AcroFormListBox = ft),
        (T.AcroFormComboBox = dt),
        (T.AcroFormEditBox = pt),
        (T.AcroFormButton = gt),
        (T.AcroFormPushButton = mt),
        (T.AcroFormRadioButton = vt),
        (T.AcroFormCheckBox = yt),
        (T.AcroFormTextField = wt),
        (T.AcroFormPasswordField = xt),
        (T.AcroFormAppearance = Lt),
        (T.AcroForm = {
          ChoiceField: ht,
          ListBox: ft,
          ComboBox: dt,
          EditBox: pt,
          Button: gt,
          PushButton: mt,
          RadioButton: vt,
          CheckBox: yt,
          TextField: wt,
          PasswordField: xt,
          Appearance: Lt
        }),
        (B.AcroForm = {
          ChoiceField: ht,
          ListBox: ft,
          ComboBox: dt,
          EditBox: pt,
          Button: gt,
          PushButton: mt,
          RadioButton: vt,
          CheckBox: yt,
          TextField: wt,
          PasswordField: xt,
          Appearance: Lt
        });
      var At, _t;
      /** @license
       * jsPDF addImage plugin
       * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
       *               2013 Chris Dowling, https://github.com/gingerchris
       *               2013 Trinh Ho, https://github.com/ineedfat
       *               2013 Edwin Alejandro Perez, https://github.com/eaparango
       *               2013 Norah Smith, https://github.com/burnburnrocket
       *               2014 Diego Casorran, https://github.com/diegocr
       *               2014 James Robb, https://github.com/jamesbrobb
       *
       * Permission is hereby granted, free of charge, to any person obtaining
       * a copy of this software and associated documentation files (the
       * "Software"), to deal in the Software without restriction, including
       * without limitation the rights to use, copy, modify, merge, publish,
       * distribute, sublicense, and/or sell copies of the Software, and to
       * permit persons to whom the Software is furnished to do so, subject to
       * the following conditions:
       *
       * The above copyright notice and this permission notice shall be
       * included in all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
       * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
       * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
       * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       */ B.AcroForm;
      function St(t) {
        return t.reduce(function (t, e, r) {
          return (t[e] = r), t;
        }, {});
      }
      !(function (t) {
        t.__addimage__ = {};
        var e = "UNKNOWN",
          r = {
            PNG: [[137, 80, 78, 71]],
            TIFF: [
              [77, 77, 0, 42],
              [73, 73, 42, 0]
            ],
            JPEG: [
              [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
              [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
              [255, 216, 255, 219],
              [255, 216, 255, 238]
            ],
            JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
            GIF87a: [[71, 73, 70, 56, 55, 97]],
            GIF89a: [[71, 73, 70, 56, 57, 97]],
            WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]],
            BMP: [
              [66, 77],
              [66, 65],
              [67, 73],
              [67, 80],
              [73, 67],
              [80, 84]
            ]
          },
          n = (t.__addimage__.getImageFileTypeByImageData = function (t, n) {
            var i, o;
            n = n || e;
            var a,
              s,
              u,
              c = e;
            if (A(t))
              for (u in r)
                for (a = r[u], i = 0; i < a.length; i += 1) {
                  for (s = !0, o = 0; o < a[i].length; o += 1)
                    if (void 0 !== a[i][o] && a[i][o] !== t[o]) {
                      s = !1;
                      break;
                    }
                  if (!0 === s) {
                    c = u;
                    break;
                  }
                }
            else
              for (u in r)
                for (a = r[u], i = 0; i < a.length; i += 1) {
                  for (s = !0, o = 0; o < a[i].length; o += 1)
                    if (void 0 !== a[i][o] && a[i][o] !== t.charCodeAt(o)) {
                      s = !1;
                      break;
                    }
                  if (!0 === s) {
                    c = u;
                    break;
                  }
                }
            return c === e && n !== e && (c = n), c;
          }),
          i = function (t) {
            for (
              var e = this.internal.write, r = this.internal.putStream, n = (0, this.internal.getFilters)();
              -1 !== n.indexOf("FlateEncode");

            )
              n.splice(n.indexOf("FlateEncode"), 1);
            t.objectId = this.internal.newObject();
            var o = [];
            if (
              (o.push({ key: "Type", value: "/XObject" }),
              o.push({ key: "Subtype", value: "/Image" }),
              o.push({ key: "Width", value: t.width }),
              o.push({ key: "Height", value: t.height }),
              t.colorSpace === b.INDEXED
                ? o.push({
                    key: "ColorSpace",
                    value:
                      "[/Indexed /DeviceRGB " +
                      (t.palette.length / 3 - 1) +
                      " " +
                      ("sMask" in t && void 0 !== t.sMask ? t.objectId + 2 : t.objectId + 1) +
                      " 0 R]"
                  })
                : (o.push({ key: "ColorSpace", value: "/" + t.colorSpace }),
                  t.colorSpace === b.DEVICE_CMYK && o.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })),
              o.push({ key: "BitsPerComponent", value: t.bitsPerComponent }),
              "decodeParameters" in t &&
                void 0 !== t.decodeParameters &&
                o.push({ key: "DecodeParms", value: "<<" + t.decodeParameters + ">>" }),
              "transparency" in t && Array.isArray(t.transparency))
            ) {
              for (var a = "", s = 0, u = t.transparency.length; s < u; s++) a += t.transparency[s] + " " + t.transparency[s] + " ";
              o.push({ key: "Mask", value: "[" + a + "]" });
            }
            void 0 !== t.sMask && o.push({ key: "SMask", value: t.objectId + 1 + " 0 R" });
            var c = void 0 !== t.filter ? ["/" + t.filter] : void 0;
            if (
              (r({ data: t.data, additionalKeyValues: o, alreadyAppliedFilters: c, objectId: t.objectId }),
              e("endobj"),
              "sMask" in t && void 0 !== t.sMask)
            ) {
              var l = "/Predictor " + t.predictor + " /Colors 1 /BitsPerComponent " + t.bitsPerComponent + " /Columns " + t.width,
                h = {
                  width: t.width,
                  height: t.height,
                  colorSpace: "DeviceGray",
                  bitsPerComponent: t.bitsPerComponent,
                  decodeParameters: l,
                  data: t.sMask
                };
              "filter" in t && (h.filter = t.filter), i.call(this, h);
            }
            if (t.colorSpace === b.INDEXED) {
              var f = this.internal.newObject();
              r({ data: S(new Uint8Array(t.palette)), objectId: f }), e("endobj");
            }
          },
          o = function () {
            var t = this.internal.collections.addImage_images;
            for (var e in t) i.call(this, t[e]);
          },
          a = function () {
            var t,
              e = this.internal.collections.addImage_images,
              r = this.internal.write;
            for (var n in e) r("/I" + (t = e[n]).index, t.objectId, "0", "R");
          },
          s = function () {
            this.internal.collections.addImage_images ||
              ((this.internal.collections.addImage_images = {}),
              this.internal.events.subscribe("putResources", o),
              this.internal.events.subscribe("putXobjectDict", a));
          },
          u = function () {
            var t = this.internal.collections.addImage_images;
            return s.call(this), t;
          },
          c = function () {
            return Object.keys(this.internal.collections.addImage_images).length;
          },
          l = function (e) {
            return "function" == typeof t["process" + e.toUpperCase()];
          },
          h = function (t) {
            return "object" == typeof t && 1 === t.nodeType;
          },
          p = function (e, r) {
            if ("IMG" === e.nodeName && e.hasAttribute("src")) {
              var n = "" + e.getAttribute("src");
              if (0 === n.indexOf("data:image/")) return f(unescape(n).split("base64,").pop());
              var i = t.loadFile(n, !0);
              if (void 0 !== i) return i;
            }
            if ("CANVAS" === e.nodeName) {
              var o;
              switch (r) {
                case "PNG":
                  o = "image/png";
                  break;
                case "WEBP":
                  o = "image/webp";
                  break;
                default:
                  o = "image/jpeg";
              }
              return f(e.toDataURL(o, 1).split("base64,").pop());
            }
          },
          g = function (t) {
            var e = this.internal.collections.addImage_images;
            if (e) for (var r in e) if (t === e[r].alias) return e[r];
          },
          m = function (t, e, r) {
            return (
              t || e || ((t = -96), (e = -96)),
              t < 0 && (t = (-1 * r.width * 72) / t / this.internal.scaleFactor),
              e < 0 && (e = (-1 * r.height * 72) / e / this.internal.scaleFactor),
              0 === t && (t = (e * r.width) / r.height),
              0 === e && (e = (t * r.height) / r.width),
              [t, e]
            );
          },
          v = function (t, e, r, n, i, o) {
            var a = m.call(this, r, n, i),
              s = this.internal.getCoordinateString,
              c = this.internal.getVerticalCoordinateString,
              l = u.call(this);
            if (((r = a[0]), (n = a[1]), (l[i.index] = i), o)) {
              o *= Math.PI / 180;
              var h = Math.cos(o),
                f = Math.sin(o),
                d = function (t) {
                  return t.toFixed(4);
                },
                p = [d(h), d(f), d(-1 * f), d(h), 0, 0, "cm"];
            }
            this.internal.write("q"),
              o
                ? (this.internal.write([1, "0", "0", 1, s(t), c(e + n), "cm"].join(" ")),
                  this.internal.write(p.join(" ")),
                  this.internal.write([s(r), "0", "0", s(n), "0", "0", "cm"].join(" ")))
                : this.internal.write([s(r), "0", "0", s(n), s(t), c(e + n), "cm"].join(" ")),
              this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")),
              this.internal.write("/I" + i.index + " Do"),
              this.internal.write("Q");
          },
          b = (t.color_spaces = {
            DEVICE_RGB: "DeviceRGB",
            DEVICE_GRAY: "DeviceGray",
            DEVICE_CMYK: "DeviceCMYK",
            CAL_GREY: "CalGray",
            CAL_RGB: "CalRGB",
            LAB: "Lab",
            ICC_BASED: "ICCBased",
            INDEXED: "Indexed",
            PATTERN: "Pattern",
            SEPARATION: "Separation",
            DEVICE_N: "DeviceN"
          });
        t.decode = {
          DCT_DECODE: "DCTDecode",
          FLATE_DECODE: "FlateDecode",
          LZW_DECODE: "LZWDecode",
          JPX_DECODE: "JPXDecode",
          JBIG2_DECODE: "JBIG2Decode",
          ASCII85_DECODE: "ASCII85Decode",
          ASCII_HEX_DECODE: "ASCIIHexDecode",
          RUN_LENGTH_DECODE: "RunLengthDecode",
          CCITT_FAX_DECODE: "CCITTFaxDecode"
        };
        var y = (t.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }),
          w = (t.__addimage__.sHashCode = function (t) {
            var e,
              r,
              n = 0;
            if ("string" == typeof t) for (r = t.length, e = 0; e < r; e++) (n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
            else if (A(t)) for (r = t.byteLength / 2, e = 0; e < r; e++) (n = (n << 5) - n + t[e]), (n |= 0);
            return n;
          }),
          x = (t.__addimage__.validateStringAsBase64 = function (t) {
            (t = t || "").toString().trim();
            var e = !0;
            return (
              0 === t.length && (e = !1),
              t.length % 4 != 0 && (e = !1),
              !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e = !1),
              !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (e = !1),
              e
            );
          }),
          L = (t.__addimage__.extractImageFromDataUrl = function (t) {
            var e = (t = t || "").split("base64,"),
              r = null;
            if (2 === e.length) {
              var n = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(e[0]);
              Array.isArray(n) && (r = { mimeType: n[1], charset: n[2], data: e[1] });
            }
            return r;
          }),
          N = (t.__addimage__.supportsArrayBuffer = function () {
            return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
          });
        t.__addimage__.isArrayBuffer = function (t) {
          return N() && t instanceof ArrayBuffer;
        };
        var A = (t.__addimage__.isArrayBufferView = function (t) {
            return (
              N() &&
              "undefined" != typeof Uint32Array &&
              (t instanceof Int8Array ||
                t instanceof Uint8Array ||
                ("undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray) ||
                t instanceof Int16Array ||
                t instanceof Uint16Array ||
                t instanceof Int32Array ||
                t instanceof Uint32Array ||
                t instanceof Float32Array ||
                t instanceof Float64Array)
            );
          }),
          _ = (t.__addimage__.binaryStringToUint8Array = function (t) {
            for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++) r[n] = t.charCodeAt(n);
            return r;
          }),
          S = (t.__addimage__.arrayBufferToBinaryString = function (t) {
            try {
              return f(d(String.fromCharCode.apply(null, t)));
            } catch (e) {
              if ("undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.reduce)
                return new Uint8Array(t)
                  .reduce(function (t, e) {
                    return t.push(String.fromCharCode(e)), t;
                  }, [])
                  .join("");
            }
          });
        t.addImage = function () {
          var t, r, n, i, o, a, u, c, l;
          if (
            ("number" == typeof arguments[1]
              ? ((r = e),
                (n = arguments[1]),
                (i = arguments[2]),
                (o = arguments[3]),
                (a = arguments[4]),
                (u = arguments[5]),
                (c = arguments[6]),
                (l = arguments[7]))
              : ((r = arguments[1]),
                (n = arguments[2]),
                (i = arguments[3]),
                (o = arguments[4]),
                (a = arguments[5]),
                (u = arguments[6]),
                (c = arguments[7]),
                (l = arguments[8])),
            "object" == typeof (t = arguments[0]) && !h(t) && "imageData" in t)
          ) {
            var f = t;
            (t = f.imageData),
              (r = f.format || r || e),
              (n = f.x || n || 0),
              (i = f.y || i || 0),
              (o = f.w || f.width || o),
              (a = f.h || f.height || a),
              (u = f.alias || u),
              (c = f.compression || c),
              (l = f.rotation || f.angle || l);
          }
          var d = this.internal.getFilters();
          if ((void 0 === c && -1 !== d.indexOf("FlateEncode") && (c = "SLOW"), isNaN(n) || isNaN(i)))
            throw new Error("Invalid coordinates passed to jsPDF.addImage");
          s.call(this);
          var p = P.call(this, t, r, u, c);
          return v.call(this, n, i, o, a, p, l), this;
        };
        var P = function (r, i, o, a) {
            var s, u, f;
            if ("string" == typeof r && n(r) === e) {
              r = unescape(r);
              var d = k(r, !1);
              ("" !== d || void 0 !== (d = t.loadFile(r, !0))) && (r = d);
            }
            if ((h(r) && (r = p(r, i)), (i = n(r, i)), !l(i)))
              throw new Error(
                "addImage does not support files of type '" + i + "', please ensure that a plugin for '" + i + "' support is added."
              );
            if (
              ((null == (f = o) || 0 === f.length) &&
                (o = (function (t) {
                  return "string" == typeof t || A(t) ? w(t) : null;
                })(r)),
              (s = g.call(this, o)) ||
                (N() && (r instanceof Uint8Array || ((u = r), (r = _(r)))),
                (s = this["process" + i.toUpperCase()](
                  r,
                  c.call(this),
                  o,
                  (function (e) {
                    return e && "string" == typeof e && (e = e.toUpperCase()), e in t.image_compression ? e : y.NONE;
                  })(a),
                  u
                ))),
              !s)
            )
              throw new Error("An unknown error occurred whilst processing the image.");
            return s;
          },
          k = (t.__addimage__.convertBase64ToBinaryString = function (t, e) {
            var r;
            e = "boolean" != typeof e || e;
            var n,
              i = "";
            if ("string" == typeof t) {
              n = null !== (r = L(t)) ? r.data : t;
              try {
                i = f(n);
              } catch (t) {
                if (e)
                  throw x(n)
                    ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + t.message)
                    : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
              }
            }
            return i;
          });
        t.getImageProperties = function (r) {
          var i,
            o,
            a = "";
          if (
            (h(r) && (r = p(r)),
            "string" == typeof r && n(r) === e && ("" === (a = k(r, !1)) && (a = t.loadFile(r) || ""), (r = a)),
            (o = n(r)),
            !l(o))
          )
            throw new Error(
              "addImage does not support files of type '" + o + "', please ensure that a plugin for '" + o + "' support is added."
            );
          if ((!N() || r instanceof Uint8Array || (r = _(r)), !(i = this["process" + o.toUpperCase()](r))))
            throw new Error("An unknown error occurred whilst processing the image");
          return (i.fileType = o), i;
        };
      })(B.API),
        /**
         * @license
         * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (At = B.API),
        (_t = function (t) {
          if (void 0 !== t && "" != t) return !0;
        }),
        B.API.events.push([
          "addPage",
          function (t) {
            this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [];
          }
        ]),
        At.events.push([
          "putPage",
          function (t) {
            for (
              var e,
                r,
                n,
                i = this.internal.getCoordinateString,
                o = this.internal.getVerticalCoordinateString,
                a = this.internal.getPageInfoByObjId(t.objId),
                s = t.pageContext.annotations,
                u = !1,
                c = 0;
              c < s.length && !u;
              c++
            )
              switch ((e = s[c]).type) {
                case "link":
                  (_t(e.options.url) || _t(e.options.pageNumber)) && (u = !0);
                  break;
                case "reference":
                case "text":
                case "freetext":
                  u = !0;
              }
            if (0 != u) {
              this.internal.write("/Annots [");
              for (var l = 0; l < s.length; l++) {
                e = s[l];
                var h = this.internal.pdfEscape,
                  f = this.internal.getEncryptor(t.objId);
                switch (e.type) {
                  case "reference":
                    this.internal.write(" " + e.object.objId + " 0 R ");
                    break;
                  case "text":
                    var d = this.internal.newAdditionalObject(),
                      p = this.internal.newAdditionalObject(),
                      g = this.internal.getEncryptor(d.objId),
                      m = e.title || "Note";
                    (n =
                      "<</Type /Annot /Subtype /Text " +
                      (r =
                        "/Rect [" +
                        i(e.bounds.x) +
                        " " +
                        o(e.bounds.y + e.bounds.h) +
                        " " +
                        i(e.bounds.x + e.bounds.w) +
                        " " +
                        o(e.bounds.y) +
                        "] ") +
                      "/Contents (" +
                      h(g(e.contents)) +
                      ")"),
                      (n += " /Popup " + p.objId + " 0 R"),
                      (n += " /P " + a.objId + " 0 R"),
                      (n += " /T (" + h(g(m)) + ") >>"),
                      (d.content = n);
                    var v = d.objId + " 0 R";
                    (n =
                      "<</Type /Annot /Subtype /Popup " +
                      (r =
                        "/Rect [" +
                        i(e.bounds.x + 30) +
                        " " +
                        o(e.bounds.y + e.bounds.h) +
                        " " +
                        i(e.bounds.x + e.bounds.w + 30) +
                        " " +
                        o(e.bounds.y) +
                        "] ") +
                      " /Parent " +
                      v),
                      e.open && (n += " /Open true"),
                      (n += " >>"),
                      (p.content = n),
                      this.internal.write(d.objId, "0 R", p.objId, "0 R");
                    break;
                  case "freetext":
                    r =
                      "/Rect [" +
                      i(e.bounds.x) +
                      " " +
                      o(e.bounds.y) +
                      " " +
                      i(e.bounds.x + e.bounds.w) +
                      " " +
                      o(e.bounds.y + e.bounds.h) +
                      "] ";
                    var b = e.color || "#000000";
                    (n = "<</Type /Annot /Subtype /FreeText " + r + "/Contents (" + h(f(e.contents)) + ")"),
                      (n += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + b + ")"),
                      (n += " /Border [0 0 0]"),
                      (n += " >>"),
                      this.internal.write(n);
                    break;
                  case "link":
                    if (e.options.name) {
                      var y = this.annotations._nameMap[e.options.name];
                      (e.options.pageNumber = y.page), (e.options.top = y.y);
                    } else e.options.top || (e.options.top = 0);
                    if (
                      ((r = "/Rect [" + e.finalBounds.x + " " + e.finalBounds.y + " " + e.finalBounds.w + " " + e.finalBounds.h + "] "),
                      (n = ""),
                      e.options.url)
                    )
                      n = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /A <</S /URI /URI (" + h(f(e.options.url)) + ") >>";
                    else if (e.options.pageNumber)
                      switch (
                        ((n =
                          "<</Type /Annot /Subtype /Link " +
                          r +
                          "/Border [0 0 0] /Dest [" +
                          this.internal.getPageInfo(e.options.pageNumber).objId +
                          " 0 R"),
                        (e.options.magFactor = e.options.magFactor || "XYZ"),
                        e.options.magFactor)
                      ) {
                        case "Fit":
                          n += " /Fit]";
                          break;
                        case "FitH":
                          n += " /FitH " + e.options.top + "]";
                          break;
                        case "FitV":
                          (e.options.left = e.options.left || 0), (n += " /FitV " + e.options.left + "]");
                          break;
                        default:
                          var w = o(e.options.top);
                          (e.options.left = e.options.left || 0),
                            void 0 === e.options.zoom && (e.options.zoom = 0),
                            (n += " /XYZ " + e.options.left + " " + w + " " + e.options.zoom + "]");
                      }
                    "" != n && ((n += " >>"), this.internal.write(n));
                }
              }
              this.internal.write("]");
            }
          }
        ]),
        (At.createAnnotation = function (t) {
          var e = this.internal.getCurrentPageInfo();
          switch (t.type) {
            case "link":
              this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
              break;
            case "text":
            case "freetext":
              e.pageContext.annotations.push(t);
          }
        }),
        (At.link = function (t, e, r, n, i) {
          var o = this.internal.getCurrentPageInfo(),
            a = this.internal.getCoordinateString,
            s = this.internal.getVerticalCoordinateString;
          o.pageContext.annotations.push({ finalBounds: { x: a(t), y: s(e), w: a(t + r), h: s(e + n) }, options: i, type: "link" });
        }),
        (At.textWithLink = function (t, e, r, n) {
          var i = this.getTextWidth(t),
            o = this.internal.getLineHeight() / this.internal.scaleFactor;
          return (
            this.text(t, e, r, n),
            (r += 0.2 * o),
            "center" === n.align && (e -= i / 2),
            "right" === n.align && (e -= i),
            this.link(e, r - o, i, o, n),
            i
          );
        }),
        (At.getTextWidth = function (t) {
          var e = this.internal.getFontSize();
          return (this.getStringUnitWidth(t) * e) / this.internal.scaleFactor;
        }),
        /**
         * @license
         * Copyright (c) 2017 Aras Abbasi
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          var e = {
              1569: [65152],
              1570: [65153, 65154],
              1571: [65155, 65156],
              1572: [65157, 65158],
              1573: [65159, 65160],
              1574: [65161, 65162, 65163, 65164],
              1575: [65165, 65166],
              1576: [65167, 65168, 65169, 65170],
              1577: [65171, 65172],
              1578: [65173, 65174, 65175, 65176],
              1579: [65177, 65178, 65179, 65180],
              1580: [65181, 65182, 65183, 65184],
              1581: [65185, 65186, 65187, 65188],
              1582: [65189, 65190, 65191, 65192],
              1583: [65193, 65194],
              1584: [65195, 65196],
              1585: [65197, 65198],
              1586: [65199, 65200],
              1587: [65201, 65202, 65203, 65204],
              1588: [65205, 65206, 65207, 65208],
              1589: [65209, 65210, 65211, 65212],
              1590: [65213, 65214, 65215, 65216],
              1591: [65217, 65218, 65219, 65220],
              1592: [65221, 65222, 65223, 65224],
              1593: [65225, 65226, 65227, 65228],
              1594: [65229, 65230, 65231, 65232],
              1601: [65233, 65234, 65235, 65236],
              1602: [65237, 65238, 65239, 65240],
              1603: [65241, 65242, 65243, 65244],
              1604: [65245, 65246, 65247, 65248],
              1605: [65249, 65250, 65251, 65252],
              1606: [65253, 65254, 65255, 65256],
              1607: [65257, 65258, 65259, 65260],
              1608: [65261, 65262],
              1609: [65263, 65264, 64488, 64489],
              1610: [65265, 65266, 65267, 65268],
              1649: [64336, 64337],
              1655: [64477],
              1657: [64358, 64359, 64360, 64361],
              1658: [64350, 64351, 64352, 64353],
              1659: [64338, 64339, 64340, 64341],
              1662: [64342, 64343, 64344, 64345],
              1663: [64354, 64355, 64356, 64357],
              1664: [64346, 64347, 64348, 64349],
              1667: [64374, 64375, 64376, 64377],
              1668: [64370, 64371, 64372, 64373],
              1670: [64378, 64379, 64380, 64381],
              1671: [64382, 64383, 64384, 64385],
              1672: [64392, 64393],
              1676: [64388, 64389],
              1677: [64386, 64387],
              1678: [64390, 64391],
              1681: [64396, 64397],
              1688: [64394, 64395],
              1700: [64362, 64363, 64364, 64365],
              1702: [64366, 64367, 64368, 64369],
              1705: [64398, 64399, 64400, 64401],
              1709: [64467, 64468, 64469, 64470],
              1711: [64402, 64403, 64404, 64405],
              1713: [64410, 64411, 64412, 64413],
              1715: [64406, 64407, 64408, 64409],
              1722: [64414, 64415],
              1723: [64416, 64417, 64418, 64419],
              1726: [64426, 64427, 64428, 64429],
              1728: [64420, 64421],
              1729: [64422, 64423, 64424, 64425],
              1733: [64480, 64481],
              1734: [64473, 64474],
              1735: [64471, 64472],
              1736: [64475, 64476],
              1737: [64482, 64483],
              1739: [64478, 64479],
              1740: [64508, 64509, 64510, 64511],
              1744: [64484, 64485, 64486, 64487],
              1746: [64430, 64431],
              1747: [64432, 64433]
            },
            r = {
              65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 },
              65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 },
              65165: { 65247: { 65248: { 65258: 65010 } } },
              1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }
            },
            n = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 },
            i = [1570, 1571, 1573, 1575];
          t.__arabicParser__ = {};
          var o = (t.__arabicParser__.isInArabicSubstitutionA = function (t) {
              return void 0 !== e[t.charCodeAt(0)];
            }),
            a = (t.__arabicParser__.isArabicLetter = function (t) {
              return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t);
            }),
            s = (t.__arabicParser__.isArabicEndLetter = function (t) {
              return a(t) && o(t) && e[t.charCodeAt(0)].length <= 2;
            }),
            u = (t.__arabicParser__.isArabicAlfLetter = function (t) {
              return a(t) && i.indexOf(t.charCodeAt(0)) >= 0;
            });
          t.__arabicParser__.arabicLetterHasIsolatedForm = function (t) {
            return a(t) && o(t) && e[t.charCodeAt(0)].length >= 1;
          };
          var c = (t.__arabicParser__.arabicLetterHasFinalForm = function (t) {
            return a(t) && o(t) && e[t.charCodeAt(0)].length >= 2;
          });
          t.__arabicParser__.arabicLetterHasInitialForm = function (t) {
            return a(t) && o(t) && e[t.charCodeAt(0)].length >= 3;
          };
          var l = (t.__arabicParser__.arabicLetterHasMedialForm = function (t) {
              return a(t) && o(t) && 4 == e[t.charCodeAt(0)].length;
            }),
            h = (t.__arabicParser__.resolveLigatures = function (t) {
              var e = 0,
                n = r,
                i = "",
                o = 0;
              for (e = 0; e < t.length; e += 1)
                void 0 !== n[t.charCodeAt(e)]
                  ? (o++,
                    "number" == typeof (n = n[t.charCodeAt(e)]) && ((i += String.fromCharCode(n)), (n = r), (o = 0)),
                    e === t.length - 1 && ((n = r), (i += t.charAt(e - (o - 1))), (e -= o - 1), (o = 0)))
                  : ((n = r), (i += t.charAt(e - o)), (e -= o), (o = 0));
              return i;
            });
          t.__arabicParser__.isArabicDiacritic = function (t) {
            return void 0 !== t && void 0 !== n[t.charCodeAt(0)];
          };
          var f = (t.__arabicParser__.getCorrectForm = function (t, e, r) {
              return a(t)
                ? !1 === o(t)
                  ? -1
                  : !c(t) || (!a(e) && !a(r)) || (!a(r) && s(e)) || (s(t) && !a(e)) || (s(t) && u(e)) || (s(t) && s(e))
                  ? 0
                  : l(t) && a(e) && !s(e) && a(r) && c(r)
                  ? 3
                  : s(t) || !a(r)
                  ? 1
                  : 2
                : -1;
            }),
            d = function (t) {
              var r = 0,
                n = 0,
                i = 0,
                o = "",
                s = "",
                u = "",
                c = (t = t || "").split("\\s+"),
                l = [];
              for (r = 0; r < c.length; r += 1) {
                for (l.push(""), n = 0; n < c[r].length; n += 1)
                  (o = c[r][n]),
                    (s = c[r][n - 1]),
                    (u = c[r][n + 1]),
                    a(o) ? ((i = f(o, s, u)), (l[r] += -1 !== i ? String.fromCharCode(e[o.charCodeAt(0)][i]) : o)) : (l[r] += o);
                l[r] = h(l[r]);
              }
              return l.join(" ");
            },
            p =
              (t.__arabicParser__.processArabic =
              t.processArabic =
                function () {
                  var t,
                    e = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text,
                    r = [];
                  if (Array.isArray(e)) {
                    var n = 0;
                    for (r = [], n = 0; n < e.length; n += 1)
                      Array.isArray(e[n]) ? r.push([d(e[n][0]), e[n][1], e[n][2]]) : r.push([d(e[n])]);
                    t = r;
                  } else t = d(e);
                  return "string" == typeof arguments[0] ? t : ((arguments[0].text = t), arguments[0]);
                });
          t.events.push(["preProcessText", p]);
        })(B.API),
        (B.API.autoPrint = function (t) {
          var e;
          if ("javascript" === (((t = t || {}).variant = t.variant || "non-conform"), t.variant)) this.addJS("print({});");
          else
            this.internal.events.subscribe("postPutResources", function () {
              (e = this.internal.newObject()),
                this.internal.out("<<"),
                this.internal.out("/S /Named"),
                this.internal.out("/Type /Action"),
                this.internal.out("/N /Print"),
                this.internal.out(">>"),
                this.internal.out("endobj");
            }),
              this.internal.events.subscribe("putCatalog", function () {
                this.internal.out("/OpenAction " + e + " 0 R");
              });
          return this;
        }),
        /**
         * @license
         * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          var e = function () {
            var t = void 0;
            Object.defineProperty(this, "pdf", {
              get: function () {
                return t;
              },
              set: function (e) {
                t = e;
              }
            });
            var e = 150;
            Object.defineProperty(this, "width", {
              get: function () {
                return e;
              },
              set: function (t) {
                (e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t),
                  this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e + 1);
              }
            });
            var r = 300;
            Object.defineProperty(this, "height", {
              get: function () {
                return r;
              },
              set: function (t) {
                (r = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t),
                  this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r + 1);
              }
            });
            var n = [];
            Object.defineProperty(this, "childNodes", {
              get: function () {
                return n;
              },
              set: function (t) {
                n = t;
              }
            });
            var i = {};
            Object.defineProperty(this, "style", {
              get: function () {
                return i;
              },
              set: function (t) {
                i = t;
              }
            }),
              Object.defineProperty(this, "parentNode", {});
          };
          (e.prototype.getContext = function (t, e) {
            var r;
            if ("2d" !== (t = t || "2d")) return null;
            for (r in e) this.pdf.context2d.hasOwnProperty(r) && (this.pdf.context2d[r] = e[r]);
            return (this.pdf.context2d._canvas = this), this.pdf.context2d;
          }),
            (e.prototype.toDataURL = function () {
              throw new Error("toDataURL is not implemented.");
            }),
            t.events.push([
              "initialized",
              function () {
                (this.canvas = new e()), (this.canvas.pdf = this);
              }
            ]);
        })(B.API),
        /**
         * @license
         * ====================================================================
         * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
         *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
         *               2013 Lee Driscoll, https://github.com/lsdriscoll
         *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
         *               2014 James Hall, james@parall.ax
         *               2014 Diego Casorran, https://github.com/diegocr
         *
         * Permission is hereby granted, free of charge, to any person obtaining
         * a copy of this software and associated documentation files (the
         * "Software"), to deal in the Software without restriction, including
         * without limitation the rights to use, copy, modify, merge, publish,
         * distribute, sublicense, and/or sell copies of the Software, and to
         * permit persons to whom the Software is furnished to do so, subject to
         * the following conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
         * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
         * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
         * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
         * ====================================================================
         */
        (function (t) {
          var e = { left: 0, top: 0, bottom: 0, right: 0 },
            r = !1,
            n = function () {
              void 0 === this.internal.__cell__ &&
                ((this.internal.__cell__ = {}),
                (this.internal.__cell__.padding = 3),
                (this.internal.__cell__.headerFunction = void 0),
                (this.internal.__cell__.margins = Object.assign({}, e)),
                (this.internal.__cell__.margins.width = this.getPageWidth()),
                i.call(this));
            },
            i = function () {
              (this.internal.__cell__.lastCell = new o()), (this.internal.__cell__.pages = 1);
            },
            o = function () {
              var t = arguments[0];
              Object.defineProperty(this, "x", {
                enumerable: !0,
                get: function () {
                  return t;
                },
                set: function (e) {
                  t = e;
                }
              });
              var e = arguments[1];
              Object.defineProperty(this, "y", {
                enumerable: !0,
                get: function () {
                  return e;
                },
                set: function (t) {
                  e = t;
                }
              });
              var r = arguments[2];
              Object.defineProperty(this, "width", {
                enumerable: !0,
                get: function () {
                  return r;
                },
                set: function (t) {
                  r = t;
                }
              });
              var n = arguments[3];
              Object.defineProperty(this, "height", {
                enumerable: !0,
                get: function () {
                  return n;
                },
                set: function (t) {
                  n = t;
                }
              });
              var i = arguments[4];
              Object.defineProperty(this, "text", {
                enumerable: !0,
                get: function () {
                  return i;
                },
                set: function (t) {
                  i = t;
                }
              });
              var o = arguments[5];
              Object.defineProperty(this, "lineNumber", {
                enumerable: !0,
                get: function () {
                  return o;
                },
                set: function (t) {
                  o = t;
                }
              });
              var a = arguments[6];
              return (
                Object.defineProperty(this, "align", {
                  enumerable: !0,
                  get: function () {
                    return a;
                  },
                  set: function (t) {
                    a = t;
                  }
                }),
                this
              );
            };
          (o.prototype.clone = function () {
            return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
          }),
            (o.prototype.toArray = function () {
              return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
            }),
            (t.setHeaderFunction = function (t) {
              return n.call(this), (this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0), this;
            }),
            (t.getTextDimensions = function (t, e) {
              n.call(this);
              var r = (e = e || {}).fontSize || this.getFontSize(),
                i = e.font || this.getFont(),
                o = e.scaleFactor || this.internal.scaleFactor,
                a = 0,
                s = 0,
                u = 0,
                c = this;
              if (!Array.isArray(t) && "string" != typeof t) {
                if ("number" != typeof t)
                  throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
                t = String(t);
              }
              const l = e.maxWidth;
              l > 0
                ? "string" == typeof t
                  ? (t = this.splitTextToSize(t, l))
                  : "[object Array]" === Object.prototype.toString.call(t) &&
                    (t = t.reduce(function (t, e) {
                      return t.concat(c.splitTextToSize(e, l));
                    }, []))
                : (t = Array.isArray(t) ? t : [t]);
              for (var h = 0; h < t.length; h++) a < (u = this.getStringUnitWidth(t[h], { font: i }) * r) && (a = u);
              return (
                0 !== a && (s = t.length),
                { w: (a /= o), h: Math.max((s * r * this.getLineHeightFactor() - r * (this.getLineHeightFactor() - 1)) / o, 0) }
              );
            }),
            (t.cellAddPage = function () {
              n.call(this), this.addPage();
              var t = this.internal.__cell__.margins || e;
              return (this.internal.__cell__.lastCell = new o(t.left, t.top, void 0, void 0)), (this.internal.__cell__.pages += 1), this;
            });
          var a = (t.cell = function () {
            var t;
            (t =
              arguments[0] instanceof o
                ? arguments[0]
                : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])),
              n.call(this);
            var i = this.internal.__cell__.lastCell,
              a = this.internal.__cell__.padding,
              s = this.internal.__cell__.margins || e,
              u = this.internal.__cell__.tableHeaderRow,
              c = this.internal.__cell__.printHeaders;
            return (
              void 0 !== i.lineNumber &&
                (i.lineNumber === t.lineNumber
                  ? ((t.x = (i.x || 0) + (i.width || 0)), (t.y = i.y || 0))
                  : i.y + i.height + t.height + s.bottom > this.getPageHeight()
                  ? (this.cellAddPage(), (t.y = s.top), c && u && (this.printHeaderRow(t.lineNumber, !0), (t.y += u[0].height)))
                  : (t.y = i.y + i.height || t.y)),
              void 0 !== t.text[0] &&
                (this.rect(t.x, t.y, t.width, t.height, !0 === r ? "FD" : void 0),
                "right" === t.align
                  ? this.text(t.text, t.x + t.width - a, t.y + a, { align: "right", baseline: "top" })
                  : "center" === t.align
                  ? this.text(t.text, t.x + t.width / 2, t.y + a, { align: "center", baseline: "top", maxWidth: t.width - a - a })
                  : this.text(t.text, t.x + a, t.y + a, { align: "left", baseline: "top", maxWidth: t.width - a - a })),
              (this.internal.__cell__.lastCell = t),
              this
            );
          });
          t.table = function (t, r, u, c, l) {
            if ((n.call(this), !u)) throw new Error("No data for PDF table.");
            var h,
              f,
              d,
              p,
              g = [],
              m = [],
              v = [],
              b = {},
              y = {},
              w = [],
              x = [],
              L = (l = l || {}).autoSize || !1,
              N = !1 !== l.printHeaders,
              A = l.css && void 0 !== l.css["font-size"] ? 16 * l.css["font-size"] : l.fontSize || 12,
              _ = l.margins || Object.assign({ width: this.getPageWidth() }, e),
              S = "number" == typeof l.padding ? l.padding : 3,
              P = l.headerBackgroundColor || "#c8c8c8";
            if (
              (i.call(this),
              (this.internal.__cell__.printHeaders = N),
              (this.internal.__cell__.margins = _),
              (this.internal.__cell__.table_font_size = A),
              (this.internal.__cell__.padding = S),
              (this.internal.__cell__.headerBackgroundColor = P),
              this.setFontSize(A),
              null == c)
            )
              (m = g = Object.keys(u[0])),
                (v = g.map(function () {
                  return "left";
                }));
            else if (Array.isArray(c) && "object" == typeof c[0])
              for (
                g = c.map(function (t) {
                  return t.name;
                }),
                  m = c.map(function (t) {
                    return t.prompt || t.name || "";
                  }),
                  v = c.map(function (t) {
                    return t.align || "left";
                  }),
                  h = 0;
                h < c.length;
                h += 1
              )
                y[c[h].name] = c[h].width * (19.049976 / 25.4);
            else
              Array.isArray(c) &&
                "string" == typeof c[0] &&
                ((m = g = c),
                (v = g.map(function () {
                  return "left";
                })));
            if (L || (Array.isArray(c) && "string" == typeof c[0]))
              for (h = 0; h < g.length; h += 1) {
                for (
                  b[(p = g[h])] = u.map(function (t) {
                    return t[p];
                  }),
                    this.setFont(void 0, "bold"),
                    w.push(
                      this.getTextDimensions(m[h], {
                        fontSize: this.internal.__cell__.table_font_size,
                        scaleFactor: this.internal.scaleFactor
                      }).w
                    ),
                    f = b[p],
                    this.setFont(void 0, "normal"),
                    d = 0;
                  d < f.length;
                  d += 1
                )
                  w.push(
                    this.getTextDimensions(f[d], {
                      fontSize: this.internal.__cell__.table_font_size,
                      scaleFactor: this.internal.scaleFactor
                    }).w
                  );
                (y[p] = Math.max.apply(null, w) + S + S), (w = []);
              }
            if (N) {
              var k = {};
              for (h = 0; h < g.length; h += 1) (k[g[h]] = {}), (k[g[h]].text = m[h]), (k[g[h]].align = v[h]);
              var F = s.call(this, k, y);
              (x = g.map(function (e) {
                return new o(t, r, y[e], F, k[e].text, void 0, k[e].align);
              })),
                this.setTableHeaderRow(x),
                this.printHeaderRow(1, !1);
            }
            var I = c.reduce(function (t, e) {
              return (t[e.name] = e.align), t;
            }, {});
            for (h = 0; h < u.length; h += 1) {
              var C = s.call(this, u[h], y);
              for (d = 0; d < g.length; d += 1) a.call(this, new o(t, r, y[g[d]], C, u[h][g[d]], h + 2, I[g[d]]));
            }
            return (this.internal.__cell__.table_x = t), (this.internal.__cell__.table_y = r), this;
          };
          var s = function (t, e) {
            var r = this.internal.__cell__.padding,
              n = this.internal.__cell__.table_font_size,
              i = this.internal.scaleFactor;
            return Object.keys(t)
              .map(function (n) {
                var i = t[n];
                return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, e[n] - r - r);
              }, this)
              .map(function (t) {
                return (this.getLineHeightFactor() * t.length * n) / i + r + r;
              }, this)
              .reduce(function (t, e) {
                return Math.max(t, e);
              }, 0);
          };
          (t.setTableHeaderRow = function (t) {
            n.call(this), (this.internal.__cell__.tableHeaderRow = t);
          }),
            (t.printHeaderRow = function (t, e) {
              if ((n.call(this), !this.internal.__cell__.tableHeaderRow)) throw new Error("Property tableHeaderRow does not exist.");
              var i;
              if (((r = !0), "function" == typeof this.internal.__cell__.headerFunction)) {
                var s = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
                this.internal.__cell__.lastCell = new o(s[0], s[1], s[2], s[3], void 0, -1);
              }
              this.setFont(void 0, "bold");
              for (var u = [], c = 0; c < this.internal.__cell__.tableHeaderRow.length; c += 1)
                (i = this.internal.__cell__.tableHeaderRow[c].clone()),
                  e && ((i.y = this.internal.__cell__.margins.top || 0), u.push(i)),
                  (i.lineNumber = t),
                  this.setFillColor(this.internal.__cell__.headerBackgroundColor),
                  a.call(this, i);
              u.length > 0 && this.setTableHeaderRow(u), this.setFont(void 0, "normal"), (r = !1);
            });
        })(B.API);
      var Pt = {
          italic: ["italic", "oblique", "normal"],
          oblique: ["oblique", "italic", "normal"],
          normal: ["normal", "oblique", "italic"]
        },
        kt = [
          "ultra-condensed",
          "extra-condensed",
          "condensed",
          "semi-condensed",
          "normal",
          "semi-expanded",
          "expanded",
          "extra-expanded",
          "ultra-expanded"
        ],
        Ft = St(kt),
        It = [100, 200, 300, 400, 500, 600, 700, 800, 900],
        Ct = St(It);
      function Et(t) {
        var e = t.family.replace(/"|'/g, "").toLowerCase(),
          r = (function (t) {
            return Pt[(t = t || "normal")] ? t : "normal";
          })(t.style),
          n = (function (t) {
            return t
              ? "number" == typeof t
                ? t >= 100 && t <= 900 && t % 100 == 0
                  ? t
                  : 400
                : /^\d00$/.test(t)
                ? parseInt(t)
                : "bold" === t
                ? 700
                : 400
              : 400;
          })(t.weight),
          i = (function (t) {
            return "number" == typeof Ft[(t = t || "normal")] ? t : "normal";
          })(t.stretch);
        return { family: e, style: r, weight: n, stretch: i, src: t.src || [], ref: t.ref || { name: e, style: [i, r, n].join(" ") } };
      }
      function jt(t, e, r, n) {
        var i;
        for (i = r; i >= 0 && i < e.length; i += n) if (t[e[i]]) return t[e[i]];
        for (i = r; i >= 0 && i < e.length; i -= n) if (t[e[i]]) return t[e[i]];
      }
      var Ot = {
          "sans-serif": "helvetica",
          fixed: "courier",
          monospace: "courier",
          terminal: "courier",
          cursive: "times",
          fantasy: "times",
          serif: "times"
        },
        Mt = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
      function Rt(t) {
        return [t.stretch, t.style, t.weight, t.family].join(" ");
      }
      function Bt(t) {
        return t.trimLeft();
      }
      function Tt(t, e) {
        for (var r = 0; r < t.length; ) {
          if (t.charAt(r) === e) return [t.substring(0, r), t.substring(r + 1)];
          r += 1;
        }
        return null;
      }
      function qt(t) {
        var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
        return null === e ? null : [e[0], t.substring(e[0].length)];
      }
      var Dt,
        Ut,
        zt,
        Ht = ["times"];
      !(function (t) {
        var e,
          r,
          n,
          i,
          o,
          a,
          s,
          c,
          l,
          h = function (t) {
            return (
              (t = t || {}),
              (this.isStrokeTransparent = t.isStrokeTransparent || !1),
              (this.strokeOpacity = t.strokeOpacity || 1),
              (this.strokeStyle = t.strokeStyle || "#000000"),
              (this.fillStyle = t.fillStyle || "#000000"),
              (this.isFillTransparent = t.isFillTransparent || !1),
              (this.fillOpacity = t.fillOpacity || 1),
              (this.font = t.font || "10px sans-serif"),
              (this.textBaseline = t.textBaseline || "alphabetic"),
              (this.textAlign = t.textAlign || "left"),
              (this.lineWidth = t.lineWidth || 1),
              (this.lineJoin = t.lineJoin || "miter"),
              (this.lineCap = t.lineCap || "butt"),
              (this.path = t.path || []),
              (this.transform = void 0 !== t.transform ? t.transform.clone() : new c()),
              (this.globalCompositeOperation = t.globalCompositeOperation || "normal"),
              (this.globalAlpha = t.globalAlpha || 1),
              (this.clip_path = t.clip_path || []),
              (this.currentPoint = t.currentPoint || new a()),
              (this.miterLimit = t.miterLimit || 10),
              (this.lastPoint = t.lastPoint || new a()),
              (this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect),
              this
            );
          };
        t.events.push([
          "initialized",
          function () {
            (this.context2d = new f(this)),
              (e = this.internal.f2),
              (r = this.internal.getCoordinateString),
              (n = this.internal.getVerticalCoordinateString),
              (i = this.internal.getHorizontalCoordinate),
              (o = this.internal.getVerticalCoordinate),
              (a = this.internal.Point),
              (s = this.internal.Rectangle),
              (c = this.internal.Matrix),
              (l = new h());
          }
        ]);
        var f = function (t) {
          Object.defineProperty(this, "canvas", {
            get: function () {
              return { parentNode: !1, style: !1 };
            }
          });
          var e = t;
          Object.defineProperty(this, "pdf", {
            get: function () {
              return e;
            }
          });
          var r = !1;
          Object.defineProperty(this, "pageWrapXEnabled", {
            get: function () {
              return r;
            },
            set: function (t) {
              r = Boolean(t);
            }
          });
          var n = !1;
          Object.defineProperty(this, "pageWrapYEnabled", {
            get: function () {
              return n;
            },
            set: function (t) {
              n = Boolean(t);
            }
          });
          var i = 0;
          Object.defineProperty(this, "posX", {
            get: function () {
              return i;
            },
            set: function (t) {
              isNaN(t) || (i = t);
            }
          });
          var o = 0;
          Object.defineProperty(this, "posY", {
            get: function () {
              return o;
            },
            set: function (t) {
              isNaN(t) || (o = t);
            }
          });
          var a = !1;
          Object.defineProperty(this, "autoPaging", {
            get: function () {
              return a;
            },
            set: function (t) {
              a = Boolean(t);
            }
          });
          var s = 0;
          Object.defineProperty(this, "lastBreak", {
            get: function () {
              return s;
            },
            set: function (t) {
              s = t;
            }
          });
          var u = [];
          Object.defineProperty(this, "pageBreaks", {
            get: function () {
              return u;
            },
            set: function (t) {
              u = t;
            }
          }),
            Object.defineProperty(this, "ctx", {
              get: function () {
                return l;
              },
              set: function (t) {
                t instanceof h && (l = t);
              }
            }),
            Object.defineProperty(this, "path", {
              get: function () {
                return l.path;
              },
              set: function (t) {
                l.path = t;
              }
            });
          var c = [];
          Object.defineProperty(this, "ctxStack", {
            get: function () {
              return c;
            },
            set: function (t) {
              c = t;
            }
          }),
            Object.defineProperty(this, "fillStyle", {
              get: function () {
                return this.ctx.fillStyle;
              },
              set: function (t) {
                var e;
                (e = d(t)),
                  (this.ctx.fillStyle = e.style),
                  (this.ctx.isFillTransparent = 0 === e.a),
                  (this.ctx.fillOpacity = e.a),
                  this.pdf.setFillColor(e.r, e.g, e.b, { a: e.a }),
                  this.pdf.setTextColor(e.r, e.g, e.b, { a: e.a });
              }
            }),
            Object.defineProperty(this, "strokeStyle", {
              get: function () {
                return this.ctx.strokeStyle;
              },
              set: function (t) {
                var e = d(t);
                (this.ctx.strokeStyle = e.style),
                  (this.ctx.isStrokeTransparent = 0 === e.a),
                  (this.ctx.strokeOpacity = e.a),
                  0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b));
              }
            }),
            Object.defineProperty(this, "lineCap", {
              get: function () {
                return this.ctx.lineCap;
              },
              set: function (t) {
                -1 !== ["butt", "round", "square"].indexOf(t) && ((this.ctx.lineCap = t), this.pdf.setLineCap(t));
              }
            }),
            Object.defineProperty(this, "lineWidth", {
              get: function () {
                return this.ctx.lineWidth;
              },
              set: function (t) {
                isNaN(t) || ((this.ctx.lineWidth = t), this.pdf.setLineWidth(t));
              }
            }),
            Object.defineProperty(this, "lineJoin", {
              get: function () {
                return this.ctx.lineJoin;
              },
              set: function (t) {
                -1 !== ["bevel", "round", "miter"].indexOf(t) && ((this.ctx.lineJoin = t), this.pdf.setLineJoin(t));
              }
            }),
            Object.defineProperty(this, "miterLimit", {
              get: function () {
                return this.ctx.miterLimit;
              },
              set: function (t) {
                isNaN(t) || ((this.ctx.miterLimit = t), this.pdf.setMiterLimit(t));
              }
            }),
            Object.defineProperty(this, "textBaseline", {
              get: function () {
                return this.ctx.textBaseline;
              },
              set: function (t) {
                this.ctx.textBaseline = t;
              }
            }),
            Object.defineProperty(this, "textAlign", {
              get: function () {
                return this.ctx.textAlign;
              },
              set: function (t) {
                -1 !== ["right", "end", "center", "left", "start"].indexOf(t) && (this.ctx.textAlign = t);
              }
            });
          var f = null;
          function p(t, e) {
            if (null === f) {
              var r = (function (t) {
                var e = [];
                return (
                  Object.keys(t).forEach(function (r) {
                    t[r].forEach(function (t) {
                      var n = null;
                      switch (t) {
                        case "bold":
                          n = { family: r, weight: "bold" };
                          break;
                        case "italic":
                          n = { family: r, style: "italic" };
                          break;
                        case "bolditalic":
                          n = { family: r, weight: "bold", style: "italic" };
                          break;
                        case "":
                        case "normal":
                          n = { family: r };
                      }
                      null !== n && ((n.ref = { name: r, style: t }), e.push(n));
                    });
                  }),
                  e
                );
              })(t.getFontList());
              f = (function (t) {
                for (var e = {}, r = 0; r < t.length; ++r) {
                  var n = Et(t[r]),
                    i = n.family,
                    o = n.stretch,
                    a = n.style,
                    s = n.weight;
                  (e[i] = e[i] || {}), (e[i][o] = e[i][o] || {}), (e[i][o][a] = e[i][o][a] || {}), (e[i][o][a][s] = n);
                }
                return e;
              })(r.concat(e));
            }
            return f;
          }
          var g = null;
          Object.defineProperty(this, "fontFaces", {
            get: function () {
              return g;
            },
            set: function (t) {
              (f = null), (g = t);
            }
          }),
            Object.defineProperty(this, "font", {
              get: function () {
                return this.ctx.font;
              },
              set: function (t) {
                var e;
                if (
                  ((this.ctx.font = t),
                  null !==
                    (e =
                      /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(
                        t
                      )))
                ) {
                  var r = e[1],
                    n = (e[2], e[3]),
                    i = e[4],
                    o = (e[5], e[6]),
                    a = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
                  (i =
                    "px" === a
                      ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor)
                      : "em" === a
                      ? Math.floor(parseFloat(i) * this.pdf.getFontSize())
                      : Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor)),
                    this.pdf.setFontSize(i);
                  var s = (function (t) {
                    var e,
                      r,
                      n = [],
                      i = t.trim();
                    if ("" === i) return Ht;
                    if (i in Mt) return [Mt[i]];
                    for (; "" !== i; ) {
                      switch (((r = null), (e = (i = Bt(i)).charAt(0)))) {
                        case '"':
                        case "'":
                          r = Tt(i.substring(1), e);
                          break;
                        default:
                          r = qt(i);
                      }
                      if (null === r) return Ht;
                      if ((n.push(r[0]), "" !== (i = Bt(r[1])) && "," !== i.charAt(0))) return Ht;
                      i = i.replace(/^,/, "");
                    }
                    return n;
                  })(o);
                  if (this.fontFaces) {
                    var u = (function (t, e, r) {
                      for (
                        var n = (r = r || {}).defaultFontFamily || "times",
                          i = Object.assign({}, Ot, r.genericFontFamilies || {}),
                          o = null,
                          a = null,
                          s = 0;
                        s < e.length;
                        ++s
                      )
                        if ((i[(o = Et(e[s])).family] && (o.family = i[o.family]), t.hasOwnProperty(o.family))) {
                          a = t[o.family];
                          break;
                        }
                      if (!(a = a || t[n]))
                        throw new Error("Could not find a font-family for the rule '" + Rt(o) + "' and default family '" + n + "'.");
                      if (
                        ((a = (function (t, e) {
                          if (e[t]) return e[t];
                          var r = Ft[t],
                            n = r <= Ft.normal ? -1 : 1,
                            i = jt(e, kt, r, n);
                          if (!i) throw new Error("Could not find a matching font-stretch value for " + t);
                          return i;
                        })(o.stretch, a)),
                        (a = (function (t, e) {
                          if (e[t]) return e[t];
                          for (var r = Pt[t], n = 0; n < r.length; ++n) if (e[r[n]]) return e[r[n]];
                          throw new Error("Could not find a matching font-style for " + t);
                        })(o.style, a)),
                        !(a = (function (t, e) {
                          if (e[t]) return e[t];
                          if (400 === t && e[500]) return e[500];
                          if (500 === t && e[400]) return e[400];
                          var r = Ct[t],
                            n = jt(e, It, r, t < 400 ? -1 : 1);
                          if (!n) throw new Error("Could not find a matching font-weight for value " + t);
                          return n;
                        })(o.weight, a)))
                      )
                        throw new Error("Failed to resolve a font for the rule '" + Rt(o) + "'.");
                      return a;
                    })(
                      p(this.pdf, this.fontFaces),
                      s.map(function (t) {
                        return { family: t, stretch: "normal", weight: n, style: r };
                      })
                    );
                    this.pdf.setFont(u.ref.name, u.ref.style);
                  } else {
                    var c = "";
                    ("bold" === n || parseInt(n, 10) >= 700 || "bold" === r) && (c = "bold"),
                      "italic" === r && (c += "italic"),
                      0 === c.length && (c = "normal");
                    for (
                      var l = "",
                        h = {
                          arial: "Helvetica",
                          Arial: "Helvetica",
                          verdana: "Helvetica",
                          Verdana: "Helvetica",
                          helvetica: "Helvetica",
                          Helvetica: "Helvetica",
                          "sans-serif": "Helvetica",
                          fixed: "Courier",
                          monospace: "Courier",
                          terminal: "Courier",
                          cursive: "Times",
                          fantasy: "Times",
                          serif: "Times"
                        },
                        f = 0;
                      f < s.length;
                      f++
                    ) {
                      if (void 0 !== this.pdf.internal.getFont(s[f], c, { noFallback: !0, disableWarning: !0 })) {
                        l = s[f];
                        break;
                      }
                      if ("bolditalic" === c && void 0 !== this.pdf.internal.getFont(s[f], "bold", { noFallback: !0, disableWarning: !0 }))
                        (l = s[f]), (c = "bold");
                      else if (void 0 !== this.pdf.internal.getFont(s[f], "normal", { noFallback: !0, disableWarning: !0 })) {
                        (l = s[f]), (c = "normal");
                        break;
                      }
                    }
                    if ("" === l)
                      for (var d = 0; d < s.length; d++)
                        if (h[s[d]]) {
                          l = h[s[d]];
                          break;
                        }
                    (l = "" === l ? "Times" : l), this.pdf.setFont(l, c);
                  }
                }
              }
            }),
            Object.defineProperty(this, "globalCompositeOperation", {
              get: function () {
                return this.ctx.globalCompositeOperation;
              },
              set: function (t) {
                this.ctx.globalCompositeOperation = t;
              }
            }),
            Object.defineProperty(this, "globalAlpha", {
              get: function () {
                return this.ctx.globalAlpha;
              },
              set: function (t) {
                this.ctx.globalAlpha = t;
              }
            }),
            Object.defineProperty(this, "ignoreClearRect", {
              get: function () {
                return this.ctx.ignoreClearRect;
              },
              set: function (t) {
                this.ctx.ignoreClearRect = Boolean(t);
              }
            });
        };
        (f.prototype.fill = function () {
          x.call(this, "fill", !1);
        }),
          (f.prototype.stroke = function () {
            x.call(this, "stroke", !1);
          }),
          (f.prototype.beginPath = function () {
            this.path = [{ type: "begin" }];
          }),
          (f.prototype.moveTo = function (t, e) {
            if (isNaN(t) || isNaN(e))
              throw (
                (u.error("jsPDF.context2d.moveTo: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.moveTo"))
              );
            var r = this.ctx.transform.applyToPoint(new a(t, e));
            this.path.push({ type: "mt", x: r.x, y: r.y }), (this.ctx.lastPoint = new a(t, e));
          }),
          (f.prototype.closePath = function () {
            var t = new a(0, 0),
              e = 0;
            for (e = this.path.length - 1; -1 !== e; e--)
              if ("begin" === this.path[e].type && "object" == typeof this.path[e + 1] && "number" == typeof this.path[e + 1].x) {
                (t = new a(this.path[e + 1].x, this.path[e + 1].y)), this.path.push({ type: "lt", x: t.x, y: t.y });
                break;
              }
            "object" == typeof this.path[e + 2] &&
              "number" == typeof this.path[e + 2].x &&
              this.path.push(JSON.parse(JSON.stringify(this.path[e + 2]))),
              this.path.push({ type: "close" }),
              (this.ctx.lastPoint = new a(t.x, t.y));
          }),
          (f.prototype.lineTo = function (t, e) {
            if (isNaN(t) || isNaN(e))
              throw (
                (u.error("jsPDF.context2d.lineTo: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.lineTo"))
              );
            var r = this.ctx.transform.applyToPoint(new a(t, e));
            this.path.push({ type: "lt", x: r.x, y: r.y }), (this.ctx.lastPoint = new a(r.x, r.y));
          }),
          (f.prototype.clip = function () {
            (this.ctx.clip_path = JSON.parse(JSON.stringify(this.path))), x.call(this, null, !0);
          }),
          (f.prototype.quadraticCurveTo = function (t, e, r, n) {
            if (isNaN(r) || isNaN(n) || isNaN(t) || isNaN(e))
              throw (
                (u.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo"))
              );
            var i = this.ctx.transform.applyToPoint(new a(r, n)),
              o = this.ctx.transform.applyToPoint(new a(t, e));
            this.path.push({ type: "qct", x1: o.x, y1: o.y, x: i.x, y: i.y }), (this.ctx.lastPoint = new a(i.x, i.y));
          }),
          (f.prototype.bezierCurveTo = function (t, e, r, n, i, o) {
            if (isNaN(i) || isNaN(o) || isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
              throw (
                (u.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo"))
              );
            var s = this.ctx.transform.applyToPoint(new a(i, o)),
              c = this.ctx.transform.applyToPoint(new a(t, e)),
              l = this.ctx.transform.applyToPoint(new a(r, n));
            this.path.push({ type: "bct", x1: c.x, y1: c.y, x2: l.x, y2: l.y, x: s.x, y: s.y }), (this.ctx.lastPoint = new a(s.x, s.y));
          }),
          (f.prototype.arc = function (t, e, r, n, i, o) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i))
              throw (
                (u.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc"))
              );
            if (((o = Boolean(o)), !this.ctx.transform.isIdentity)) {
              var s = this.ctx.transform.applyToPoint(new a(t, e));
              (t = s.x), (e = s.y);
              var c = this.ctx.transform.applyToPoint(new a(0, r)),
                l = this.ctx.transform.applyToPoint(new a(0, 0));
              r = Math.sqrt(Math.pow(c.x - l.x, 2) + Math.pow(c.y - l.y, 2));
            }
            Math.abs(i - n) >= 2 * Math.PI && ((n = 0), (i = 2 * Math.PI)),
              this.path.push({ type: "arc", x: t, y: e, radius: r, startAngle: n, endAngle: i, counterclockwise: o });
          }),
          (f.prototype.arcTo = function (t, e, r, n, i) {
            throw new Error("arcTo not implemented.");
          }),
          (f.prototype.rect = function (t, e, r, n) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
              throw (
                (u.error("jsPDF.context2d.rect: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.rect"))
              );
            this.moveTo(t, e),
              this.lineTo(t + r, e),
              this.lineTo(t + r, e + n),
              this.lineTo(t, e + n),
              this.lineTo(t, e),
              this.lineTo(t + r, e),
              this.lineTo(t, e);
          }),
          (f.prototype.fillRect = function (t, e, r, n) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
              throw (
                (u.error("jsPDF.context2d.fillRect: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.fillRect"))
              );
            if (!p.call(this)) {
              var i = {};
              "butt" !== this.lineCap && ((i.lineCap = this.lineCap), (this.lineCap = "butt")),
                "miter" !== this.lineJoin && ((i.lineJoin = this.lineJoin), (this.lineJoin = "miter")),
                this.beginPath(),
                this.rect(t, e, r, n),
                this.fill(),
                i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap),
                i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin);
            }
          }),
          (f.prototype.strokeRect = function (t, e, r, n) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
              throw (
                (u.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.strokeRect"))
              );
            m.call(this) || (this.beginPath(), this.rect(t, e, r, n), this.stroke());
          }),
          (f.prototype.clearRect = function (t, e, r, n) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
              throw (
                (u.error("jsPDF.context2d.clearRect: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.clearRect"))
              );
            this.ignoreClearRect || ((this.fillStyle = "#ffffff"), this.fillRect(t, e, r, n));
          }),
          (f.prototype.save = function (t) {
            t = "boolean" != typeof t || t;
            for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)
              this.pdf.setPage(r + 1), this.pdf.internal.out("q");
            if ((this.pdf.setPage(e), t)) {
              this.ctx.fontSize = this.pdf.internal.getFontSize();
              var n = new h(this.ctx);
              this.ctxStack.push(this.ctx), (this.ctx = n);
            }
          }),
          (f.prototype.restore = function (t) {
            t = "boolean" != typeof t || t;
            for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)
              this.pdf.setPage(r + 1), this.pdf.internal.out("Q");
            this.pdf.setPage(e),
              t &&
                0 !== this.ctxStack.length &&
                ((this.ctx = this.ctxStack.pop()),
                (this.fillStyle = this.ctx.fillStyle),
                (this.strokeStyle = this.ctx.strokeStyle),
                (this.font = this.ctx.font),
                (this.lineCap = this.ctx.lineCap),
                (this.lineWidth = this.ctx.lineWidth),
                (this.lineJoin = this.ctx.lineJoin));
          }),
          (f.prototype.toDataURL = function () {
            throw new Error("toDataUrl not implemented.");
          });
        var d = function (t) {
            var e, r, n, i;
            if ((!0 === t.isCanvasGradient && (t = t.getColor()), !t)) return { r: 0, g: 0, b: 0, a: 0, style: t };
            if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) (e = 0), (r = 0), (n = 0), (i = 0);
            else {
              var o = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
              if (null !== o) (e = parseInt(o[1])), (r = parseInt(o[2])), (n = parseInt(o[3])), (i = 1);
              else if (null !== (o = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t)))
                (e = parseInt(o[1])), (r = parseInt(o[2])), (n = parseInt(o[3])), (i = parseFloat(o[4]));
              else {
                if (((i = 1), "string" == typeof t && "#" !== t.charAt(0))) {
                  var a = new g(t);
                  t = a.ok ? a.toHex() : "#000000";
                }
                4 === t.length
                  ? ((e = t.substring(1, 2)), (e += e), (r = t.substring(2, 3)), (r += r), (n = t.substring(3, 4)), (n += n))
                  : ((e = t.substring(1, 3)), (r = t.substring(3, 5)), (n = t.substring(5, 7))),
                  (e = parseInt(e, 16)),
                  (r = parseInt(r, 16)),
                  (n = parseInt(n, 16));
              }
            }
            return { r: e, g: r, b: n, a: i, style: t };
          },
          p = function () {
            return this.ctx.isFillTransparent || 0 == this.globalAlpha;
          },
          m = function () {
            return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha);
          };
        (f.prototype.fillText = function (t, e, r, n) {
          if (isNaN(e) || isNaN(r) || "string" != typeof t)
            throw (
              (u.error("jsPDF.context2d.fillText: Invalid arguments", arguments),
              new Error("Invalid arguments passed to jsPDF.context2d.fillText"))
            );
          if (((n = isNaN(n) ? void 0 : n), !p.call(this))) {
            r = N.call(this, r);
            var i = O(this.ctx.transform.rotation),
              o = this.ctx.transform.scaleX;
            k.call(this, { text: t, x: e, y: r, scale: o, angle: i, align: this.textAlign, maxWidth: n });
          }
        }),
          (f.prototype.strokeText = function (t, e, r, n) {
            if (isNaN(e) || isNaN(r) || "string" != typeof t)
              throw (
                (u.error("jsPDF.context2d.strokeText: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.strokeText"))
              );
            if (!m.call(this)) {
              (n = isNaN(n) ? void 0 : n), (r = N.call(this, r));
              var i = O(this.ctx.transform.rotation),
                o = this.ctx.transform.scaleX;
              k.call(this, { text: t, x: e, y: r, scale: o, renderingMode: "stroke", angle: i, align: this.textAlign, maxWidth: n });
            }
          }),
          (f.prototype.measureText = function (t) {
            if ("string" != typeof t)
              throw (
                (u.error("jsPDF.context2d.measureText: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.measureText"))
              );
            var e = this.pdf,
              r = this.pdf.internal.scaleFactor,
              n = e.internal.getFontSize(),
              i = (e.getStringUnitWidth(t) * n) / e.internal.scaleFactor;
            return new (function (t) {
              var e = (t = t || {}).width || 0;
              return (
                Object.defineProperty(this, "width", {
                  get: function () {
                    return e;
                  }
                }),
                this
              );
            })({ width: (i *= Math.round(((96 * r) / 72) * 1e4) / 1e4) });
          }),
          (f.prototype.scale = function (t, e) {
            if (isNaN(t) || isNaN(e))
              throw (
                (u.error("jsPDF.context2d.scale: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.scale"))
              );
            var r = new c(t, 0, 0, e, 0, 0);
            this.ctx.transform = this.ctx.transform.multiply(r);
          }),
          (f.prototype.rotate = function (t) {
            if (isNaN(t))
              throw (
                (u.error("jsPDF.context2d.rotate: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.rotate"))
              );
            var e = new c(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
            this.ctx.transform = this.ctx.transform.multiply(e);
          }),
          (f.prototype.translate = function (t, e) {
            if (isNaN(t) || isNaN(e))
              throw (
                (u.error("jsPDF.context2d.translate: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.translate"))
              );
            var r = new c(1, 0, 0, 1, t, e);
            this.ctx.transform = this.ctx.transform.multiply(r);
          }),
          (f.prototype.transform = function (t, e, r, n, i, o) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(o))
              throw (
                (u.error("jsPDF.context2d.transform: Invalid arguments", arguments),
                new Error("Invalid arguments passed to jsPDF.context2d.transform"))
              );
            var a = new c(t, e, r, n, i, o);
            this.ctx.transform = this.ctx.transform.multiply(a);
          }),
          (f.prototype.setTransform = function (t, e, r, n, i, o) {
            (t = isNaN(t) ? 1 : t),
              (e = isNaN(e) ? 0 : e),
              (r = isNaN(r) ? 0 : r),
              (n = isNaN(n) ? 1 : n),
              (i = isNaN(i) ? 0 : i),
              (o = isNaN(o) ? 0 : o),
              (this.ctx.transform = new c(t, e, r, n, i, o));
          }),
          (f.prototype.drawImage = function (t, e, r, n, i, o, a, u, l) {
            var h = this.pdf.getImageProperties(t),
              f = 1,
              d = 1,
              p = 1,
              g = 1;
            void 0 !== n && void 0 !== u && ((p = u / n), (g = l / i), (f = ((h.width / n) * u) / n), (d = ((h.height / i) * l) / i)),
              void 0 === o && ((o = e), (a = r), (e = 0), (r = 0)),
              void 0 !== n && void 0 === u && ((u = n), (l = i)),
              void 0 === n && void 0 === u && ((u = h.width), (l = h.height));
            for (
              var m,
                b = this.ctx.transform.decompose(),
                x = O(b.rotate.shx),
                N = new c(),
                A = (N = (N = (N = N.multiply(b.translate)).multiply(b.skew)).multiply(b.scale)).applyToRectangle(
                  new s(o - e * p, a - r * g, n * f, i * d)
                ),
                _ = v.call(this, A),
                S = [],
                P = 0;
              P < _.length;
              P += 1
            )
              -1 === S.indexOf(_[P]) && S.push(_[P]);
            if ((w(S), this.autoPaging))
              for (var k = S[0], F = S[S.length - 1], I = k; I < F + 1; I++) {
                if ((this.pdf.setPage(I), 0 !== this.ctx.clip_path.length)) {
                  var C = this.path;
                  (m = JSON.parse(JSON.stringify(this.ctx.clip_path))),
                    (this.path = y(m, this.posX, -1 * this.pdf.internal.pageSize.height * (I - 1) + this.posY)),
                    L.call(this, "fill", !0),
                    (this.path = C);
                }
                var E = JSON.parse(JSON.stringify(A));
                (E = y([E], this.posX, -1 * this.pdf.internal.pageSize.height * (I - 1) + this.posY)[0]),
                  this.pdf.addImage(t, "JPEG", E.x, E.y, E.w, E.h, null, null, x);
              }
            else this.pdf.addImage(t, "JPEG", A.x, A.y, A.w, A.h, null, null, x);
          });
        var v = function (t, e, r) {
            var n = [];
            switch (((e = e || this.pdf.internal.pageSize.width), (r = r || this.pdf.internal.pageSize.height), t.type)) {
              default:
              case "mt":
              case "lt":
                n.push(Math.floor((t.y + this.posY) / r) + 1);
                break;
              case "arc":
                n.push(Math.floor((t.y + this.posY - t.radius) / r) + 1), n.push(Math.floor((t.y + this.posY + t.radius) / r) + 1);
                break;
              case "qct":
                var i = M(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
                n.push(Math.floor(i.y / r) + 1), n.push(Math.floor((i.y + i.h) / r) + 1);
                break;
              case "bct":
                var o = R(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
                n.push(Math.floor(o.y / r) + 1), n.push(Math.floor((o.y + o.h) / r) + 1);
                break;
              case "rect":
                n.push(Math.floor((t.y + this.posY) / r) + 1), n.push(Math.floor((t.y + t.h + this.posY) / r) + 1);
            }
            for (var a = 0; a < n.length; a += 1) for (; this.pdf.internal.getNumberOfPages() < n[a]; ) b.call(this);
            return n;
          },
          b = function () {
            var t = this.fillStyle,
              e = this.strokeStyle,
              r = this.font,
              n = this.lineCap,
              i = this.lineWidth,
              o = this.lineJoin;
            this.pdf.addPage(),
              (this.fillStyle = t),
              (this.strokeStyle = e),
              (this.font = r),
              (this.lineCap = n),
              (this.lineWidth = i),
              (this.lineJoin = o);
          },
          y = function (t, e, r) {
            for (var n = 0; n < t.length; n++)
              switch (t[n].type) {
                case "bct":
                  (t[n].x2 += e), (t[n].y2 += r);
                case "qct":
                  (t[n].x1 += e), (t[n].y1 += r);
                default:
                  (t[n].x += e), (t[n].y += r);
              }
            return t;
          },
          w = function (t) {
            return t.sort(function (t, e) {
              return t - e;
            });
          },
          x = function (t, e) {
            for (
              var r,
                n,
                i = this.fillStyle,
                o = this.strokeStyle,
                a = this.lineCap,
                s = this.lineWidth,
                u = s * this.ctx.transform.scaleX,
                c = this.lineJoin,
                l = JSON.parse(JSON.stringify(this.path)),
                h = JSON.parse(JSON.stringify(this.path)),
                f = [],
                d = 0;
              d < h.length;
              d++
            )
              if (void 0 !== h[d].x) for (var p = v.call(this, h[d]), g = 0; g < p.length; g += 1) -1 === f.indexOf(p[g]) && f.push(p[g]);
            for (var m = 0; m < f.length; m++) for (; this.pdf.internal.getNumberOfPages() < f[m]; ) b.call(this);
            if ((w(f), this.autoPaging))
              for (var x = f[0], N = f[f.length - 1], A = x; A < N + 1; A++) {
                if (
                  (this.pdf.setPage(A),
                  (this.fillStyle = i),
                  (this.strokeStyle = o),
                  (this.lineCap = a),
                  (this.lineWidth = u),
                  (this.lineJoin = c),
                  0 !== this.ctx.clip_path.length)
                ) {
                  var _ = this.path;
                  (r = JSON.parse(JSON.stringify(this.ctx.clip_path))),
                    (this.path = y(r, this.posX, -1 * this.pdf.internal.pageSize.height * (A - 1) + this.posY)),
                    L.call(this, t, !0),
                    (this.path = _);
                }
                (n = JSON.parse(JSON.stringify(l))),
                  (this.path = y(n, this.posX, -1 * this.pdf.internal.pageSize.height * (A - 1) + this.posY)),
                  (!1 !== e && 0 !== A) || L.call(this, t, e),
                  (this.lineWidth = s);
              }
            else (this.lineWidth = u), L.call(this, t, e), (this.lineWidth = s);
            this.path = l;
          },
          L = function (t, e) {
            if (("stroke" !== t || e || !m.call(this)) && ("stroke" === t || e || !p.call(this))) {
              for (var r, n, i = [], o = this.path, a = 0; a < o.length; a++) {
                var s = o[a];
                switch (s.type) {
                  case "begin":
                    i.push({ begin: !0 });
                    break;
                  case "close":
                    i.push({ close: !0 });
                    break;
                  case "mt":
                    i.push({ start: s, deltas: [], abs: [] });
                    break;
                  case "lt":
                    var u = i.length;
                    if (!isNaN(o[a - 1].x) && ((r = [s.x - o[a - 1].x, s.y - o[a - 1].y]), u > 0))
                      for (; u >= 0; u--)
                        if (!0 !== i[u - 1].close && !0 !== i[u - 1].begin) {
                          i[u - 1].deltas.push(r), i[u - 1].abs.push(s);
                          break;
                        }
                    break;
                  case "bct":
                    (r = [s.x1 - o[a - 1].x, s.y1 - o[a - 1].y, s.x2 - o[a - 1].x, s.y2 - o[a - 1].y, s.x - o[a - 1].x, s.y - o[a - 1].y]),
                      i[i.length - 1].deltas.push(r);
                    break;
                  case "qct":
                    var c = o[a - 1].x + (2 / 3) * (s.x1 - o[a - 1].x),
                      l = o[a - 1].y + (2 / 3) * (s.y1 - o[a - 1].y),
                      h = s.x + (2 / 3) * (s.x1 - s.x),
                      f = s.y + (2 / 3) * (s.y1 - s.y),
                      d = s.x,
                      g = s.y;
                    (r = [c - o[a - 1].x, l - o[a - 1].y, h - o[a - 1].x, f - o[a - 1].y, d - o[a - 1].x, g - o[a - 1].y]),
                      i[i.length - 1].deltas.push(r);
                    break;
                  case "arc":
                    i.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s);
                }
              }
              n = e ? null : "stroke" === t ? "stroke" : "fill";
              for (var v = 0; v < i.length; v++) {
                if (i[v].arc) {
                  for (var b = i[v].abs, y = 0; y < b.length; y++) {
                    var w = b[y];
                    "arc" === w.type
                      ? A.call(this, w.x, w.y, w.radius, w.startAngle, w.endAngle, w.counterclockwise, void 0, e)
                      : F.call(this, w.x, w.y);
                  }
                  _.call(this, n), this.pdf.internal.out("h");
                }
                if (!i[v].arc && !0 !== i[v].close && !0 !== i[v].begin) {
                  var x = i[v].start.x,
                    L = i[v].start.y;
                  I.call(this, i[v].deltas, x, L);
                }
              }
              n && _.call(this, n), e && S.call(this);
            }
          },
          N = function (t) {
            var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
              r = e * (this.pdf.internal.getLineHeightFactor() - 1);
            switch (this.ctx.textBaseline) {
              case "bottom":
                return t - r;
              case "top":
                return t + e - r;
              case "hanging":
                return t + e - 2 * r;
              case "middle":
                return t + e / 2 - r;
              default:
                return t;
            }
          };
        (f.prototype.createLinearGradient = function () {
          var t = function () {};
          return (
            (t.colorStops = []),
            (t.addColorStop = function (t, e) {
              this.colorStops.push([t, e]);
            }),
            (t.getColor = function () {
              return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1];
            }),
            (t.isCanvasGradient = !0),
            t
          );
        }),
          (f.prototype.createPattern = function () {
            return this.createLinearGradient();
          }),
          (f.prototype.createRadialGradient = function () {
            return this.createLinearGradient();
          });
        var A = function (t, e, r, n, i, o, a, s) {
            for (var u = E.call(this, r, n, i, o), c = 0; c < u.length; c++) {
              var l = u[c];
              0 === c && P.call(this, l.x1 + t, l.y1 + e), C.call(this, t, e, l.x2, l.y2, l.x3, l.y3, l.x4, l.y4);
            }
            s ? S.call(this) : _.call(this, a);
          },
          _ = function (t) {
            switch (t) {
              case "stroke":
                this.pdf.internal.out("S");
                break;
              case "fill":
                this.pdf.internal.out("f");
            }
          },
          S = function () {
            this.pdf.clip(), this.pdf.discardPath();
          },
          P = function (t, e) {
            this.pdf.internal.out(r(t) + " " + n(e) + " m");
          },
          k = function (t) {
            var e;
            switch (t.align) {
              case "right":
              case "end":
                e = "right";
                break;
              case "center":
                e = "center";
                break;
              default:
                e = "left";
            }
            var r = this.ctx.transform.applyToPoint(new a(t.x, t.y)),
              n = this.ctx.transform.decompose(),
              i = new c();
            i = (i = (i = i.multiply(n.translate)).multiply(n.skew)).multiply(n.scale);
            for (
              var o,
                u,
                l,
                h = this.pdf.getTextDimensions(t.text),
                f = this.ctx.transform.applyToRectangle(new s(t.x, t.y, h.w, h.h)),
                d = i.applyToRectangle(new s(t.x, t.y - h.h, h.w, h.h)),
                p = v.call(this, d),
                g = [],
                m = 0;
              m < p.length;
              m += 1
            )
              -1 === g.indexOf(p[m]) && g.push(p[m]);
            if ((w(g), !0 === this.autoPaging))
              for (var b = g[0], x = g[g.length - 1], N = b; N < x + 1; N++) {
                if ((this.pdf.setPage(N), 0 !== this.ctx.clip_path.length)) {
                  var A = this.path;
                  (o = JSON.parse(JSON.stringify(this.ctx.clip_path))),
                    (this.path = y(o, this.posX, -1 * this.pdf.internal.pageSize.height * (N - 1) + this.posY)),
                    L.call(this, "fill", !0),
                    (this.path = A);
                }
                var _ = JSON.parse(JSON.stringify(f));
                (_ = y([_], this.posX, -1 * this.pdf.internal.pageSize.height * (N - 1) + this.posY)[0]),
                  t.scale >= 0.01 &&
                    ((u = this.pdf.internal.getFontSize()),
                    this.pdf.setFontSize(u * t.scale),
                    (l = this.lineWidth),
                    (this.lineWidth = l * t.scale)),
                  this.pdf.text(t.text, _.x, _.y, { angle: t.angle, align: e, renderingMode: t.renderingMode, maxWidth: t.maxWidth }),
                  t.scale >= 0.01 && (this.pdf.setFontSize(u), (this.lineWidth = l));
              }
            else
              t.scale >= 0.01 &&
                ((u = this.pdf.internal.getFontSize()),
                this.pdf.setFontSize(u * t.scale),
                (l = this.lineWidth),
                (this.lineWidth = l * t.scale)),
                this.pdf.text(t.text, r.x + this.posX, r.y + this.posY, {
                  angle: t.angle,
                  align: e,
                  renderingMode: t.renderingMode,
                  maxWidth: t.maxWidth
                }),
                t.scale >= 0.01 && (this.pdf.setFontSize(u), (this.lineWidth = l));
          },
          F = function (t, e, i, o) {
            (i = i || 0), (o = o || 0), this.pdf.internal.out(r(t + i) + " " + n(e + o) + " l");
          },
          I = function (t, e, r) {
            return this.pdf.lines(t, e, r, null, null);
          },
          C = function (t, r, n, a, s, u, c, l) {
            this.pdf.internal.out([e(i(n + t)), e(o(a + r)), e(i(s + t)), e(o(u + r)), e(i(c + t)), e(o(l + r)), "c"].join(" "));
          },
          E = function (t, e, r, n) {
            for (var i = 2 * Math.PI, o = Math.PI / 2; e > r; ) e -= i;
            var a = Math.abs(r - e);
            a < i && n && (a = i - a);
            for (var s = [], u = n ? -1 : 1, c = e; a > 1e-5; ) {
              var l = c + u * Math.min(a, o);
              s.push(j.call(this, t, c, l)), (a -= Math.abs(l - c)), (c = l);
            }
            return s;
          },
          j = function (t, e, r) {
            var n = (r - e) / 2,
              i = t * Math.cos(n),
              o = t * Math.sin(n),
              a = i,
              s = -o,
              u = a * a + s * s,
              c = u + a * i + s * o,
              l = ((4 / 3) * (Math.sqrt(2 * u * c) - c)) / (a * o - s * i),
              h = a - l * s,
              f = s + l * a,
              d = h,
              p = -f,
              g = n + e,
              m = Math.cos(g),
              v = Math.sin(g);
            return {
              x1: t * Math.cos(e),
              y1: t * Math.sin(e),
              x2: h * m - f * v,
              y2: h * v + f * m,
              x3: d * m - p * v,
              y3: d * v + p * m,
              x4: t * Math.cos(r),
              y4: t * Math.sin(r)
            };
          },
          O = function (t) {
            return (180 * t) / Math.PI;
          },
          M = function (t, e, r, n, i, o) {
            var a = t + 0.5 * (r - t),
              u = e + 0.5 * (n - e),
              c = i + 0.5 * (r - i),
              l = o + 0.5 * (n - o),
              h = Math.min(t, i, a, c),
              f = Math.max(t, i, a, c),
              d = Math.min(e, o, u, l),
              p = Math.max(e, o, u, l);
            return new s(h, d, f - h, p - d);
          },
          R = function (t, e, r, n, i, o, a, u) {
            var c,
              l,
              h,
              f,
              d,
              p,
              g,
              m,
              v,
              b,
              y,
              w,
              x,
              L,
              N = r - t,
              A = n - e,
              _ = i - r,
              S = o - n,
              P = a - i,
              k = u - o;
            for (l = 0; l < 41; l++)
              (v = (g = (h = t + (c = l / 40) * N) + c * ((d = r + c * _) - h)) + c * (d + c * (i + c * P - d) - g)),
                (b = (m = (f = e + c * A) + c * ((p = n + c * S) - f)) + c * (p + c * (o + c * k - p) - m)),
                0 == l
                  ? ((y = v), (w = b), (x = v), (L = b))
                  : ((y = Math.min(y, v)), (w = Math.min(w, b)), (x = Math.max(x, v)), (L = Math.max(L, b)));
            return new s(Math.round(y), Math.round(w), Math.round(x - y), Math.round(L - w));
          };
      })(B.API),
        /**
         * @license
         * jsPDF filters PlugIn
         * Copyright (c) 2014 Aras Abbasi
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          var e = function (t) {
              var e, r, n, i, o, a, s, u, c, l;
              for (/[^\x00-\xFF]/.test(t), r = [], n = 0, i = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length; i > n; n += 4)
                0 !== (o = (t.charCodeAt(n) << 24) + (t.charCodeAt(n + 1) << 16) + (t.charCodeAt(n + 2) << 8) + t.charCodeAt(n + 3))
                  ? ((a =
                      (o = ((o = ((o = ((o = (o - (l = o % 85)) / 85) - (c = o % 85)) / 85) - (u = o % 85)) / 85) - (s = o % 85)) / 85) %
                      85),
                    r.push(a + 33, s + 33, u + 33, c + 33, l + 33))
                  : r.push(122);
              return (
                (function (t, e) {
                  for (var r = e; r > 0; r--) t.pop();
                })(r, e.length),
                String.fromCharCode.apply(String, r) + "~>"
              );
            },
            r = function (t) {
              var e,
                r,
                n,
                i,
                o,
                a = String,
                s = "length",
                u = 255,
                c = "charCodeAt",
                l = "slice",
                h = "replace";
              for (
                t[l](-2), t = t[l](0, -2)[h](/\s/g, "")[h]("z", "!!!!!"), n = [], i = 0, o = (t += e = "uuuuu"[l](t[s] % 5 || 5))[s];
                o > i;
                i += 5
              )
                (r =
                  52200625 * (t[c](i) - 33) +
                  614125 * (t[c](i + 1) - 33) +
                  7225 * (t[c](i + 2) - 33) +
                  85 * (t[c](i + 3) - 33) +
                  (t[c](i + 4) - 33)),
                  n.push(u & (r >> 24), u & (r >> 16), u & (r >> 8), u & r);
              return (
                (function (t, e) {
                  for (var r = e; r > 0; r--) t.pop();
                })(n, e[s]),
                a.fromCharCode.apply(a, n)
              );
            },
            n = function (t) {
              var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
              if (
                (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))),
                t.length % 2 && (t += "0"),
                !1 === e.test(t))
              )
                return "";
              for (var r = "", n = 0; n < t.length; n += 2) r += String.fromCharCode("0x" + (t[n] + t[n + 1]));
              return r;
            },
            o = function (t) {
              for (var e = new Uint8Array(t.length), r = t.length; r--; ) e[r] = t.charCodeAt(r);
              return (e = (0, i.zlibSync)(e)).reduce(function (t, e) {
                return t + String.fromCharCode(e);
              }, "");
            };
          t.processDataByFilters = function (t, i) {
            var a = 0,
              s = t || "",
              u = [];
            for ("string" == typeof (i = i || []) && (i = [i]), a = 0; a < i.length; a += 1)
              switch (i[a]) {
                case "ASCII85Decode":
                case "/ASCII85Decode":
                  (s = r(s)), u.push("/ASCII85Encode");
                  break;
                case "ASCII85Encode":
                case "/ASCII85Encode":
                  (s = e(s)), u.push("/ASCII85Decode");
                  break;
                case "ASCIIHexDecode":
                case "/ASCIIHexDecode":
                  (s = n(s)), u.push("/ASCIIHexEncode");
                  break;
                case "ASCIIHexEncode":
                case "/ASCIIHexEncode":
                  (s =
                    s
                      .split("")
                      .map(function (t) {
                        return ("0" + t.charCodeAt().toString(16)).slice(-2);
                      })
                      .join("") + ">"),
                    u.push("/ASCIIHexDecode");
                  break;
                case "FlateEncode":
                case "/FlateEncode":
                  (s = o(s)), u.push("/FlateDecode");
                  break;
                default:
                  throw new Error('The filter: "' + i[a] + '" is not implemented');
              }
            return { data: s, reverseChain: u.reverse().join(" ") };
          };
        })(B.API),
        /**
         * @license
         * jsPDF fileloading PlugIn
         * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          (t.loadFile = function (t, e, r) {
            return (function (t, e, r) {
              (e = !1 !== e), (r = "function" == typeof r ? r : function () {});
              var n = void 0;
              try {
                n = (function (t, e, r) {
                  var n = new XMLHttpRequest(),
                    i = 0,
                    o = function (t) {
                      var e = t.length,
                        r = [],
                        n = String.fromCharCode;
                      for (i = 0; i < e; i += 1) r.push(n(255 & t.charCodeAt(i)));
                      return r.join("");
                    };
                  if (
                    (n.open("GET", t, !e),
                    n.overrideMimeType("text/plain; charset=x-user-defined"),
                    !1 === e &&
                      (n.onload = function () {
                        200 === n.status ? r(o(this.responseText)) : r(void 0);
                      }),
                    n.send(null),
                    e && 200 === n.status)
                  )
                    return o(n.responseText);
                })(t, e, r);
              } catch (t) {}
              return n;
            })(t, e, r);
          }),
            (t.loadImageFile = t.loadFile);
        })(B.API),
        /**
         * @license
         * Copyright (c) 2018 Erik Koopmans
         * Released under the MIT License.
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          function e() {
            return (a.html2canvas ? Promise.resolve(a.html2canvas) : o("23hdM"))
              .catch(function (t) {
                return Promise.reject(new Error("Could not load html2canvas: " + t));
              })
              .then(function (t) {
                return t.default ? t.default : t;
              });
          }
          function r() {
            return (a.DOMPurify ? Promise.resolve(a.DOMPurify) : o("7KeHM"))
              .catch(function (t) {
                return Promise.reject(new Error("Could not load dompurify: " + t));
              })
              .then(function (t) {
                return t.default ? t.default : t;
              });
          }
          var n = function (t) {
              var e = typeof t;
              return "undefined" === e
                ? "undefined"
                : "string" === e || t instanceof String
                ? "string"
                : "number" === e || t instanceof Number
                ? "number"
                : "function" === e || t instanceof Function
                ? "function"
                : t && t.constructor === Array
                ? "array"
                : t && 1 === t.nodeType
                ? "element"
                : "object" === e
                ? "object"
                : "unknown";
            },
            i = function (t, e) {
              var r = document.createElement(t);
              for (var n in (e.className && (r.className = e.className),
              e.innerHTML && e.dompurify && (r.innerHTML = e.dompurify.sanitize(e.innerHTML)),
              e.style))
                r.style[n] = e.style[n];
              return r;
            },
            s = function (t, e) {
              for (
                var r = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), n = t.firstChild;
                n;
                n = n.nextSibling
              )
                (!0 !== e && 1 === n.nodeType && "SCRIPT" === n.nodeName) || r.appendChild(s(n, e));
              return (
                1 === t.nodeType &&
                  ("CANVAS" === t.nodeName
                    ? ((r.width = t.width), (r.height = t.height), r.getContext("2d").drawImage(t, 0, 0))
                    : ("TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName) || (r.value = t.value),
                  r.addEventListener(
                    "load",
                    function () {
                      (r.scrollTop = t.scrollTop), (r.scrollLeft = t.scrollLeft);
                    },
                    !0
                  )),
                r
              );
            },
            u = function t(e) {
              var r = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))),
                n = t.convert(Promise.resolve(), r);
              return (n = n.setProgress(1, t, 1, [t])).set(e);
            };
          ((u.prototype = Object.create(Promise.prototype)).constructor = u),
            (u.convert = function (t, e) {
              return (t.__proto__ = e || u.prototype), t;
            }),
            (u.template = {
              prop: {
                src: null,
                container: null,
                overlay: null,
                canvas: null,
                img: null,
                pdf: null,
                pageSize: null,
                callback: function () {}
              },
              progress: { val: 0, state: null, n: 0, stack: [] },
              opt: {
                filename: "file.pdf",
                margin: [0, 0, 0, 0],
                enableLinks: !0,
                x: 0,
                y: 0,
                html2canvas: {},
                jsPDF: {},
                backgroundColor: "transparent"
              }
            }),
            (u.prototype.from = function (t, e) {
              return this.then(function () {
                switch (
                  (e =
                    e ||
                    (function (t) {
                      switch (n(t)) {
                        case "string":
                          return "string";
                        case "element":
                          return "canvas" === t.nodeName.toLowerCase() ? "canvas" : "element";
                        default:
                          return "unknown";
                      }
                    })(t))
                ) {
                  case "string":
                    return this.then(r).then(function (e) {
                      return this.set({ src: i("div", { innerHTML: t, dompurify: e }) });
                    });
                  case "element":
                    return this.set({ src: t });
                  case "canvas":
                    return this.set({ canvas: t });
                  case "img":
                    return this.set({ img: t });
                  default:
                    return this.error("Unknown source type.");
                }
              });
            }),
            (u.prototype.to = function (t) {
              switch (t) {
                case "container":
                  return this.toContainer();
                case "canvas":
                  return this.toCanvas();
                case "img":
                  return this.toImg();
                case "pdf":
                  return this.toPdf();
                default:
                  return this.error("Invalid target.");
              }
            }),
            (u.prototype.toContainer = function () {
              return this.thenList([
                function () {
                  return this.prop.src || this.error("Cannot duplicate - no source HTML.");
                },
                function () {
                  return this.prop.pageSize || this.setPageSize();
                }
              ]).then(function () {
                var t = {
                    position: "relative",
                    display: "inline-block",
                    width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px",
                    left: 0,
                    right: 0,
                    top: 0,
                    margin: "auto",
                    backgroundColor: this.opt.backgroundColor
                  },
                  e = s(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                "BODY" === e.tagName &&
                  (t.height =
                    Math.max(
                      document.body.scrollHeight,
                      document.body.offsetHeight,
                      document.documentElement.clientHeight,
                      document.documentElement.scrollHeight,
                      document.documentElement.offsetHeight
                    ) + "px"),
                  (this.prop.overlay = i("div", {
                    className: "html2pdf__overlay",
                    style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 }
                  })),
                  (this.prop.container = i("div", { className: "html2pdf__container", style: t })),
                  this.prop.container.appendChild(e),
                  this.prop.container.firstChild.appendChild(
                    i("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })
                  ),
                  (this.prop.container.style.float = "none"),
                  this.prop.overlay.appendChild(this.prop.container),
                  document.body.appendChild(this.prop.overlay),
                  (this.prop.container.firstChild.style.position = "relative"),
                  (this.prop.container.height =
                    Math.max(
                      this.prop.container.firstChild.clientHeight,
                      this.prop.container.firstChild.scrollHeight,
                      this.prop.container.firstChild.offsetHeight
                    ) + "px");
              });
            }),
            (u.prototype.toCanvas = function () {
              var t = [
                function () {
                  return document.body.contains(this.prop.container) || this.toContainer();
                }
              ];
              return this.thenList(t)
                .then(e)
                .then(function (t) {
                  var e = Object.assign({}, this.opt.html2canvas);
                  return delete e.onrendered, t(this.prop.container, e);
                })
                .then(function (t) {
                  (this.opt.html2canvas.onrendered || function () {})(t),
                    (this.prop.canvas = t),
                    document.body.removeChild(this.prop.overlay);
                });
            }),
            (u.prototype.toContext2d = function () {
              var t = [
                function () {
                  return document.body.contains(this.prop.container) || this.toContainer();
                }
              ];
              return this.thenList(t)
                .then(e)
                .then(function (t) {
                  var e = this.opt.jsPDF,
                    r = this.opt.fontFaces,
                    n = Object.assign(
                      {
                        async: !0,
                        allowTaint: !0,
                        scale: 1,
                        scrollX: this.opt.scrollX || 0,
                        scrollY: this.opt.scrollY || 0,
                        backgroundColor: "#ffffff",
                        imageTimeout: 15e3,
                        logging: !0,
                        proxy: null,
                        removeContainer: !0,
                        foreignObjectRendering: !1,
                        useCORS: !1
                      },
                      this.opt.html2canvas
                    );
                  if (
                    (delete n.onrendered,
                    (e.context2d.autoPaging = !0),
                    (e.context2d.posX = this.opt.x),
                    (e.context2d.posY = this.opt.y),
                    (e.context2d.fontFaces = r),
                    r)
                  )
                    for (var i = 0; i < r.length; ++i) {
                      var o = r[i],
                        a = o.src.find(function (t) {
                          return "truetype" === t.format;
                        });
                      a && e.addFont(a.url, o.ref.name, o.ref.style);
                    }
                  return (
                    (n.windowHeight = n.windowHeight || 0),
                    (n.windowHeight =
                      0 == n.windowHeight
                        ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight)
                        : n.windowHeight),
                    t(this.prop.container, n)
                  );
                })
                .then(function (t) {
                  (this.opt.html2canvas.onrendered || function () {})(t),
                    (this.prop.canvas = t),
                    document.body.removeChild(this.prop.overlay);
                });
            }),
            (u.prototype.toImg = function () {
              return this.thenList([
                function () {
                  return this.prop.canvas || this.toCanvas();
                }
              ]).then(function () {
                var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
                (this.prop.img = document.createElement("img")), (this.prop.img.src = t);
              });
            }),
            (u.prototype.toPdf = function () {
              return this.thenList([
                function () {
                  return this.toContext2d();
                }
              ]).then(function () {
                this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
              });
            }),
            (u.prototype.output = function (t, e, r) {
              return "img" === (r = r || "pdf").toLowerCase() || "image" === r.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e);
            }),
            (u.prototype.outputPdf = function (t, e) {
              return this.thenList([
                function () {
                  return this.prop.pdf || this.toPdf();
                }
              ]).then(function () {
                return this.prop.pdf.output(t, e);
              });
            }),
            (u.prototype.outputImg = function (t) {
              return this.thenList([
                function () {
                  return this.prop.img || this.toImg();
                }
              ]).then(function () {
                switch (t) {
                  case void 0:
                  case "img":
                    return this.prop.img;
                  case "datauristring":
                  case "dataurlstring":
                    return this.prop.img.src;
                  case "datauri":
                  case "dataurl":
                    return (document.location.href = this.prop.img.src);
                  default:
                    throw 'Image output type "' + t + '" is not supported.';
                }
              });
            }),
            (u.prototype.save = function (t) {
              return this.thenList([
                function () {
                  return this.prop.pdf || this.toPdf();
                }
              ])
                .set(t ? { filename: t } : null)
                .then(function () {
                  this.prop.pdf.save(this.opt.filename);
                });
            }),
            (u.prototype.doCallback = function () {
              return this.thenList([
                function () {
                  return this.prop.pdf || this.toPdf();
                }
              ]).then(function () {
                this.prop.callback(this.prop.pdf);
              });
            }),
            (u.prototype.set = function (t) {
              if ("object" !== n(t)) return this;
              var e = Object.keys(t || {}).map(function (e) {
                if (e in u.template.prop)
                  return function () {
                    this.prop[e] = t[e];
                  };
                switch (e) {
                  case "margin":
                    return this.setMargin.bind(this, t.margin);
                  case "jsPDF":
                    return function () {
                      return (this.opt.jsPDF = t.jsPDF), this.setPageSize();
                    };
                  case "pageSize":
                    return this.setPageSize.bind(this, t.pageSize);
                  default:
                    return function () {
                      this.opt[e] = t[e];
                    };
                }
              }, this);
              return this.then(function () {
                return this.thenList(e);
              });
            }),
            (u.prototype.get = function (t, e) {
              return this.then(function () {
                var r = t in u.template.prop ? this.prop[t] : this.opt[t];
                return e ? e(r) : r;
              });
            }),
            (u.prototype.setMargin = function (t) {
              return this.then(function () {
                switch (n(t)) {
                  case "number":
                    t = [t, t, t, t];
                  case "array":
                    if ((2 === t.length && (t = [t[0], t[1], t[0], t[1]]), 4 === t.length)) break;
                  default:
                    return this.error("Invalid margin array.");
                }
                this.opt.margin = t;
              }).then(this.setPageSize);
            }),
            (u.prototype.setPageSize = function (t) {
              function e(t, e) {
                return Math.floor(((t * e) / 72) * 96);
              }
              return this.then(function () {
                (t = t || B.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") ||
                  ((t.inner = {
                    width: t.width - this.opt.margin[1] - this.opt.margin[3],
                    height: t.height - this.opt.margin[0] - this.opt.margin[2]
                  }),
                  (t.inner.px = { width: e(t.inner.width, t.k), height: e(t.inner.height, t.k) }),
                  (t.inner.ratio = t.inner.height / t.inner.width)),
                  (this.prop.pageSize = t);
              });
            }),
            (u.prototype.setProgress = function (t, e, r, n) {
              return (
                null != t && (this.progress.val = t),
                null != e && (this.progress.state = e),
                null != r && (this.progress.n = r),
                null != n && (this.progress.stack = n),
                (this.progress.ratio = this.progress.val / this.progress.state),
                this
              );
            }),
            (u.prototype.updateProgress = function (t, e, r, n) {
              return this.setProgress(
                t ? this.progress.val + t : null,
                e || null,
                r ? this.progress.n + r : null,
                n ? this.progress.stack.concat(n) : null
              );
            }),
            (u.prototype.then = function (t, e) {
              var r = this;
              return this.thenCore(t, e, function (t, e) {
                return (
                  r.updateProgress(null, null, 1, [t]),
                  Promise.prototype.then
                    .call(this, function (e) {
                      return r.updateProgress(null, t), e;
                    })
                    .then(t, e)
                    .then(function (t) {
                      return r.updateProgress(1), t;
                    })
                );
              });
            }),
            (u.prototype.thenCore = function (t, e, r) {
              (r = r || Promise.prototype.then), t && (t = t.bind(this)), e && (e = e.bind(this));
              var n =
                  -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name
                    ? this
                    : u.convert(Object.assign({}, this), Promise.prototype),
                i = r.call(n, t, e);
              return u.convert(i, this.__proto__);
            }),
            (u.prototype.thenExternal = function (t, e) {
              return Promise.prototype.then.call(this, t, e);
            }),
            (u.prototype.thenList = function (t) {
              var e = this;
              return (
                t.forEach(function (t) {
                  e = e.thenCore(t);
                }),
                e
              );
            }),
            (u.prototype.catch = function (t) {
              t && (t = t.bind(this));
              var e = Promise.prototype.catch.call(this, t);
              return u.convert(e, this);
            }),
            (u.prototype.catchExternal = function (t) {
              return Promise.prototype.catch.call(this, t);
            }),
            (u.prototype.error = function (t) {
              return this.then(function () {
                throw new Error(t);
              });
            }),
            (u.prototype.using = u.prototype.set),
            (u.prototype.saveAs = u.prototype.save),
            (u.prototype.export = u.prototype.output),
            (u.prototype.run = u.prototype.then),
            (B.getPageSize = function (t, e, r) {
              if ("object" == typeof t) {
                var n = t;
                (t = n.orientation), (e = n.unit || e), (r = n.format || r);
              }
              (e = e || "mm"), (r = r || "a4"), (t = ("" + (t || "P")).toLowerCase());
              var i,
                o = ("" + r).toLowerCase(),
                a = {
                  a0: [2383.94, 3370.39],
                  a1: [1683.78, 2383.94],
                  a2: [1190.55, 1683.78],
                  a3: [841.89, 1190.55],
                  a4: [595.28, 841.89],
                  a5: [419.53, 595.28],
                  a6: [297.64, 419.53],
                  a7: [209.76, 297.64],
                  a8: [147.4, 209.76],
                  a9: [104.88, 147.4],
                  a10: [73.7, 104.88],
                  b0: [2834.65, 4008.19],
                  b1: [2004.09, 2834.65],
                  b2: [1417.32, 2004.09],
                  b3: [1000.63, 1417.32],
                  b4: [708.66, 1000.63],
                  b5: [498.9, 708.66],
                  b6: [354.33, 498.9],
                  b7: [249.45, 354.33],
                  b8: [175.75, 249.45],
                  b9: [124.72, 175.75],
                  b10: [87.87, 124.72],
                  c0: [2599.37, 3676.54],
                  c1: [1836.85, 2599.37],
                  c2: [1298.27, 1836.85],
                  c3: [918.43, 1298.27],
                  c4: [649.13, 918.43],
                  c5: [459.21, 649.13],
                  c6: [323.15, 459.21],
                  c7: [229.61, 323.15],
                  c8: [161.57, 229.61],
                  c9: [113.39, 161.57],
                  c10: [79.37, 113.39],
                  dl: [311.81, 623.62],
                  letter: [612, 792],
                  "government-letter": [576, 756],
                  legal: [612, 1008],
                  "junior-legal": [576, 360],
                  ledger: [1224, 792],
                  tabloid: [792, 1224],
                  "credit-card": [153, 243]
                };
              switch (e) {
                case "pt":
                  i = 1;
                  break;
                case "mm":
                  i = 72 / 25.4;
                  break;
                case "cm":
                  i = 72 / 2.54;
                  break;
                case "in":
                  i = 72;
                  break;
                case "px":
                  i = 0.75;
                  break;
                case "pc":
                case "em":
                  i = 12;
                  break;
                case "ex":
                  i = 6;
                  break;
                default:
                  throw "Invalid unit: " + e;
              }
              var s,
                u = 0,
                c = 0;
              if (a.hasOwnProperty(o)) (u = a[o][1] / i), (c = a[o][0] / i);
              else
                try {
                  (u = r[1]), (c = r[0]);
                } catch (t) {
                  throw new Error("Invalid format: " + r);
                }
              if ("p" === t || "portrait" === t) (t = "p"), c > u && ((s = c), (c = u), (u = s));
              else {
                if ("l" !== t && "landscape" !== t) throw "Invalid orientation: " + t;
                (t = "l"), u > c && ((s = c), (c = u), (u = s));
              }
              return { width: c, height: u, unit: e, k: i, orientation: t };
            }),
            (t.html = function (t, e) {
              ((e = e || {}).callback = e.callback || function () {}),
                (e.html2canvas = e.html2canvas || {}),
                (e.html2canvas.canvas = e.html2canvas.canvas || this.canvas),
                (e.jsPDF = e.jsPDF || this),
                (e.fontFaces = e.fontFaces ? e.fontFaces.map(Et) : null);
              var r = new u(e);
              return e.worker ? r : r.from(t).doCallback();
            });
        })(B.API),
        (B.API.addJS = function (t) {
          return (
            (zt = t),
            this.internal.events.subscribe("postPutResources", function () {
              (Dt = this.internal.newObject()),
                this.internal.out("<<"),
                this.internal.out("/Names [(EmbeddedJS) " + (Dt + 1) + " 0 R]"),
                this.internal.out(">>"),
                this.internal.out("endobj"),
                (Ut = this.internal.newObject()),
                this.internal.out("<<"),
                this.internal.out("/S /JavaScript"),
                this.internal.out("/JS (" + zt + ")"),
                this.internal.out(">>"),
                this.internal.out("endobj");
            }),
            this.internal.events.subscribe("putCatalog", function () {
              void 0 !== Dt && void 0 !== Ut && this.internal.out("/Names <</JavaScript " + Dt + " 0 R>>");
            }),
            this
          );
        }),
        /**
         * @license
         * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          var e;
          t.events.push([
            "postPutResources",
            function () {
              var t = this,
                r = /^(\d+) 0 obj$/;
              if (this.outline.root.children.length > 0)
                for (var n = t.outline.render().split(/\r\n/), i = 0; i < n.length; i++) {
                  var o = n[i],
                    a = r.exec(o);
                  if (null != a) {
                    var s = a[1];
                    t.internal.newObjectDeferredBegin(s, !1);
                  }
                  t.internal.write(o);
                }
              if (this.outline.createNamedDestinations) {
                var u = this.internal.pages.length,
                  c = [];
                for (i = 0; i < u; i++) {
                  var l = t.internal.newObject();
                  c.push(l);
                  var h = t.internal.getPageInfo(i + 1);
                  t.internal.write("<< /D[" + h.objId + " 0 R /XYZ null null null]>> endobj");
                }
                var f = t.internal.newObject();
                for (t.internal.write("<< /Names [ "), i = 0; i < c.length; i++) t.internal.write("(page_" + (i + 1) + ")" + c[i] + " 0 R");
                t.internal.write(" ] >>", "endobj"),
                  (e = t.internal.newObject()),
                  t.internal.write("<< /Dests " + f + " 0 R"),
                  t.internal.write(">>", "endobj");
              }
            }
          ]),
            t.events.push([
              "putCatalog",
              function () {
                this.outline.root.children.length > 0 &&
                  (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)),
                  this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"));
              }
            ]),
            t.events.push([
              "initialized",
              function () {
                var t = this;
                (t.outline = { createNamedDestinations: !1, root: { children: [] } }),
                  (t.outline.add = function (t, e, r) {
                    var n = { title: e, options: r, children: [] };
                    return null == t && (t = this.root), t.children.push(n), n;
                  }),
                  (t.outline.render = function () {
                    return (
                      (this.ctx = {}),
                      (this.ctx.val = ""),
                      (this.ctx.pdf = t),
                      this.genIds_r(this.root),
                      this.renderRoot(this.root),
                      this.renderItems(this.root),
                      this.ctx.val
                    );
                  }),
                  (t.outline.genIds_r = function (e) {
                    e.id = t.internal.newObjectDeferred();
                    for (var r = 0; r < e.children.length; r++) this.genIds_r(e.children[r]);
                  }),
                  (t.outline.renderRoot = function (t) {
                    this.objStart(t),
                      this.line("/Type /Outlines"),
                      t.children.length > 0 &&
                        (this.line("/First " + this.makeRef(t.children[0])),
                        this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))),
                      this.line("/Count " + this.count_r({ count: 0 }, t)),
                      this.objEnd();
                  }),
                  (t.outline.renderItems = function (e) {
                    for (var r = this.ctx.pdf.internal.getVerticalCoordinateString, n = 0; n < e.children.length; n++) {
                      var i = e.children[n];
                      this.objStart(i),
                        this.line("/Title " + this.makeString(i.title)),
                        this.line("/Parent " + this.makeRef(e)),
                        n > 0 && this.line("/Prev " + this.makeRef(e.children[n - 1])),
                        n < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[n + 1])),
                        i.children.length > 0 &&
                          (this.line("/First " + this.makeRef(i.children[0])),
                          this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
                      var o = (this.count = this.count_r({ count: 0 }, i));
                      if ((o > 0 && this.line("/Count " + o), i.options && i.options.pageNumber)) {
                        var a = t.internal.getPageInfo(i.options.pageNumber);
                        this.line("/Dest [" + a.objId + " 0 R /XYZ 0 " + r(0) + " 0]");
                      }
                      this.objEnd();
                    }
                    for (var s = 0; s < e.children.length; s++) this.renderItems(e.children[s]);
                  }),
                  (t.outline.line = function (t) {
                    this.ctx.val += t + "\r\n";
                  }),
                  (t.outline.makeRef = function (t) {
                    return t.id + " 0 R";
                  }),
                  (t.outline.makeString = function (e) {
                    return "(" + t.internal.pdfEscape(e) + ")";
                  }),
                  (t.outline.objStart = function (t) {
                    this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
                  }),
                  (t.outline.objEnd = function () {
                    this.ctx.val += ">> \r\nendobj\r\n";
                  }),
                  (t.outline.count_r = function (t, e) {
                    for (var r = 0; r < e.children.length; r++) t.count++, this.count_r(t, e.children[r]);
                    return t.count;
                  });
              }
            ]);
        })(B.API),
        /**
         * @license
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          var e = [192, 193, 194, 195, 196, 197, 198, 199];
          t.processJPEG = function (t, r, n, i, o, a) {
            var s,
              u = this.decode.DCT_DECODE,
              c = null;
            if ("string" == typeof t || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
              switch (
                ((t = o || t),
                (t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t),
                (s = (function (t) {
                  for (
                    var r, n = 256 * t.charCodeAt(4) + t.charCodeAt(5), i = t.length, o = { width: 0, height: 0, numcomponents: 1 }, a = 4;
                    a < i;
                    a += 2
                  ) {
                    if (((a += n), -1 !== e.indexOf(t.charCodeAt(a + 1)))) {
                      (r = 256 * t.charCodeAt(a + 5) + t.charCodeAt(a + 6)),
                        (o = { width: 256 * t.charCodeAt(a + 7) + t.charCodeAt(a + 8), height: r, numcomponents: t.charCodeAt(a + 9) });
                      break;
                    }
                    n = 256 * t.charCodeAt(a + 2) + t.charCodeAt(a + 3);
                  }
                  return o;
                })((t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t))).numcomponents)
              ) {
                case 1:
                  a = this.color_spaces.DEVICE_GRAY;
                  break;
                case 4:
                  a = this.color_spaces.DEVICE_CMYK;
                  break;
                case 3:
                  a = this.color_spaces.DEVICE_RGB;
              }
              c = { data: t, width: s.width, height: s.height, colorSpace: a, bitsPerComponent: 8, filter: u, index: r, alias: n };
            }
            return c;
          };
        })(B.API);
      var Wt,
        Vt,
        Gt,
        Yt,
        Xt,
        Jt = (function () {
          var t, e, r;
          function n(t) {
            var e, r, n, i, o, a, s, u, c, l, h, f, d, p;
            for (
              this.data = t,
                this.pos = 8,
                this.palette = [],
                this.imgData = [],
                this.transparency = {},
                this.animation = null,
                this.text = {},
                a = null;
              ;

            ) {
              switch (
                ((e = this.readUInt32()),
                (c = function () {
                  var t, e;
                  for (e = [], t = 0; t < 4; ++t) e.push(String.fromCharCode(this.data[this.pos++]));
                  return e;
                }
                  .call(this)
                  .join("")))
              ) {
                case "IHDR":
                  (this.width = this.readUInt32()),
                    (this.height = this.readUInt32()),
                    (this.bits = this.data[this.pos++]),
                    (this.colorType = this.data[this.pos++]),
                    (this.compressionMethod = this.data[this.pos++]),
                    (this.filterMethod = this.data[this.pos++]),
                    (this.interlaceMethod = this.data[this.pos++]);
                  break;
                case "acTL":
                  this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
                  break;
                case "PLTE":
                  this.palette = this.read(e);
                  break;
                case "fcTL":
                  a && this.animation.frames.push(a),
                    (this.pos += 4),
                    (a = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }),
                    (o = this.readUInt16()),
                    (i = this.readUInt16() || 100),
                    (a.delay = (1e3 * o) / i),
                    (a.disposeOp = this.data[this.pos++]),
                    (a.blendOp = this.data[this.pos++]),
                    (a.data = []);
                  break;
                case "IDAT":
                case "fdAT":
                  for (
                    "fdAT" === c && ((this.pos += 4), (e -= 4)), t = (null != a ? a.data : void 0) || this.imgData, f = 0;
                    0 <= e ? f < e : f > e;
                    0 <= e ? ++f : --f
                  )
                    t.push(this.data[this.pos++]);
                  break;
                case "tRNS":
                  switch (((this.transparency = {}), this.colorType)) {
                    case 3:
                      if (((n = this.palette.length / 3), (this.transparency.indexed = this.read(e)), this.transparency.indexed.length > n))
                        throw new Error("More transparent colors than palette size");
                      if ((l = n - this.transparency.indexed.length) > 0)
                        for (d = 0; 0 <= l ? d < l : d > l; 0 <= l ? ++d : --d) this.transparency.indexed.push(255);
                      break;
                    case 0:
                      this.transparency.grayscale = this.read(e)[0];
                      break;
                    case 2:
                      this.transparency.rgb = this.read(e);
                  }
                  break;
                case "tEXt":
                  (s = (h = this.read(e)).indexOf(0)),
                    (u = String.fromCharCode.apply(String, h.slice(0, s))),
                    (this.text[u] = String.fromCharCode.apply(String, h.slice(s + 1)));
                  break;
                case "IEND":
                  return (
                    a && this.animation.frames.push(a),
                    (this.colors = function () {
                      switch (this.colorType) {
                        case 0:
                        case 3:
                        case 4:
                          return 1;
                        case 2:
                        case 6:
                          return 3;
                      }
                    }.call(this)),
                    (this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p),
                    (r = this.colors + (this.hasAlphaChannel ? 1 : 0)),
                    (this.pixelBitlength = this.bits * r),
                    (this.colorSpace = function () {
                      switch (this.colors) {
                        case 1:
                          return "DeviceGray";
                        case 3:
                          return "DeviceRGB";
                      }
                    }.call(this)),
                    void (this.imgData = new Uint8Array(this.imgData))
                  );
                default:
                  this.pos += e;
              }
              if (((this.pos += 4), this.pos > this.data.length)) throw new Error("Incomplete or corrupt PNG file");
            }
          }
          (n.prototype.read = function (t) {
            var e, r;
            for (r = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) r.push(this.data[this.pos++]);
            return r;
          }),
            (n.prototype.readUInt32 = function () {
              return (this.data[this.pos++] << 24) | (this.data[this.pos++] << 16) | (this.data[this.pos++] << 8) | this.data[this.pos++];
            }),
            (n.prototype.readUInt16 = function () {
              return (this.data[this.pos++] << 8) | this.data[this.pos++];
            }),
            (n.prototype.decodePixels = function (t) {
              var e = this.pixelBitlength / 8,
                r = new Uint8Array(this.width * this.height * e),
                n = 0,
                o = this;
              if ((null == t && (t = this.imgData), 0 === t.length)) return new Uint8Array(0);
              function a(i, a, s, u) {
                var c,
                  l,
                  h,
                  f,
                  d,
                  p,
                  g,
                  m,
                  v,
                  b,
                  y,
                  w,
                  x,
                  L,
                  N,
                  A,
                  _,
                  S,
                  P,
                  k,
                  F,
                  I = Math.ceil((o.width - i) / s),
                  C = Math.ceil((o.height - a) / u),
                  E = o.width == I && o.height == C;
                for (L = e * I, w = E ? r : new Uint8Array(L * C), p = t.length, x = 0, l = 0; x < C && n < p; ) {
                  switch (t[n++]) {
                    case 0:
                      for (f = _ = 0; _ < L; f = _ += 1) w[l++] = t[n++];
                      break;
                    case 1:
                      for (f = S = 0; S < L; f = S += 1) (c = t[n++]), (d = f < e ? 0 : w[l - e]), (w[l++] = (c + d) % 256);
                      break;
                    case 2:
                      for (f = P = 0; P < L; f = P += 1)
                        (c = t[n++]), (h = (f - (f % e)) / e), (N = x && w[(x - 1) * L + h * e + (f % e)]), (w[l++] = (N + c) % 256);
                      break;
                    case 3:
                      for (f = k = 0; k < L; f = k += 1)
                        (c = t[n++]),
                          (h = (f - (f % e)) / e),
                          (d = f < e ? 0 : w[l - e]),
                          (N = x && w[(x - 1) * L + h * e + (f % e)]),
                          (w[l++] = (c + Math.floor((d + N) / 2)) % 256);
                      break;
                    case 4:
                      for (f = F = 0; F < L; f = F += 1)
                        (c = t[n++]),
                          (h = (f - (f % e)) / e),
                          (d = f < e ? 0 : w[l - e]),
                          0 === x
                            ? (N = A = 0)
                            : ((N = w[(x - 1) * L + h * e + (f % e)]), (A = h && w[(x - 1) * L + (h - 1) * e + (f % e)])),
                          (g = d + N - A),
                          (m = Math.abs(g - d)),
                          (b = Math.abs(g - N)),
                          (y = Math.abs(g - A)),
                          (v = m <= b && m <= y ? d : b <= y ? N : A),
                          (w[l++] = (c + v) % 256);
                      break;
                    default:
                      throw new Error("Invalid filter algorithm: " + t[n - 1]);
                  }
                  if (!E) {
                    var j = ((a + x * u) * o.width + i) * e,
                      O = x * L;
                    for (f = 0; f < I; f += 1) {
                      for (var M = 0; M < e; M += 1) r[j++] = w[O++];
                      j += (s - 1) * e;
                    }
                  }
                  x++;
                }
              }
              return (
                (t = (0, i.unzlibSync)(t)),
                1 == o.interlaceMethod
                  ? (a(0, 0, 8, 8), a(4, 0, 8, 8), a(0, 4, 4, 8), a(2, 0, 4, 4), a(0, 2, 2, 4), a(1, 0, 2, 2), a(0, 1, 1, 2))
                  : a(0, 0, 1, 1),
                r
              );
            }),
            (n.prototype.decodePalette = function () {
              var t, e, r, n, i, o, a, s, u;
              for (
                r = this.palette,
                  o = this.transparency.indexed || [],
                  i = new Uint8Array((o.length || 0) + r.length),
                  n = 0,
                  t = 0,
                  e = a = 0,
                  s = r.length;
                a < s;
                e = a += 3
              )
                (i[n++] = r[e]), (i[n++] = r[e + 1]), (i[n++] = r[e + 2]), (i[n++] = null != (u = o[t++]) ? u : 255);
              return i;
            }),
            (n.prototype.copyToImageData = function (t, e) {
              var r, n, i, o, a, s, u, c, l, h, f;
              if (
                ((n = this.colors),
                (l = null),
                (r = this.hasAlphaChannel),
                this.palette.length &&
                  ((l = null != (f = this._decodedPalette) ? f : (this._decodedPalette = this.decodePalette())), (n = 4), (r = !0)),
                (c = (i = t.data || t).length),
                (a = l || e),
                (o = s = 0),
                1 === n)
              )
                for (; o < c; )
                  (u = l ? 4 * e[o / 4] : s), (h = a[u++]), (i[o++] = h), (i[o++] = h), (i[o++] = h), (i[o++] = r ? a[u++] : 255), (s = u);
              else
                for (; o < c; )
                  (u = l ? 4 * e[o / 4] : s), (i[o++] = a[u++]), (i[o++] = a[u++]), (i[o++] = a[u++]), (i[o++] = r ? a[u++] : 255), (s = u);
            }),
            (n.prototype.decode = function () {
              var t;
              return (t = new Uint8Array(this.width * this.height * 4)), this.copyToImageData(t, this.decodePixels()), t;
            });
          var o = function () {
            if ("[object Window]" === Object.prototype.toString.call(a)) {
              try {
                (e = a.document.createElement("canvas")), (r = e.getContext("2d"));
              } catch (t) {
                return !1;
              }
              return !0;
            }
            return !1;
          };
          return (
            o(),
            (t = function (t) {
              var n;
              if (!0 === o())
                return (
                  (r.width = t.width),
                  (r.height = t.height),
                  r.clearRect(0, 0, t.width, t.height),
                  r.putImageData(t, 0, 0),
                  ((n = new Image()).src = e.toDataURL()),
                  n
                );
              throw new Error("This method requires a Browser with Canvas-capability.");
            }),
            (n.prototype.decodeFrames = function (e) {
              var r, n, i, o, a, s, u, c;
              if (this.animation) {
                for (c = [], n = a = 0, s = (u = this.animation.frames).length; a < s; n = ++a)
                  (r = u[n]),
                    (i = e.createImageData(r.width, r.height)),
                    (o = this.decodePixels(new Uint8Array(r.data))),
                    this.copyToImageData(i, o),
                    (r.imageData = i),
                    c.push((r.image = t(i)));
                return c;
              }
            }),
            (n.prototype.renderFrame = function (t, e) {
              var r, n, i;
              return (
                (r = (n = this.animation.frames)[e]),
                (i = n[e - 1]),
                0 === e && t.clearRect(0, 0, this.width, this.height),
                1 === (null != i ? i.disposeOp : void 0)
                  ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height)
                  : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset),
                0 === r.blendOp && t.clearRect(r.xOffset, r.yOffset, r.width, r.height),
                t.drawImage(r.image, r.xOffset, r.yOffset)
              );
            }),
            (n.prototype.animate = function (t) {
              var e,
                r,
                n,
                i,
                o,
                a,
                s = this;
              return (
                (r = 0),
                (a = this.animation),
                (i = a.numFrames),
                (n = a.frames),
                (o = a.numPlays),
                (e = function () {
                  var a, u;
                  if (((a = r++ % i), (u = n[a]), s.renderFrame(t, a), i > 1 && r / i < o))
                    return (s.animation._timeout = setTimeout(e, u.delay));
                })()
              );
            }),
            (n.prototype.stopAnimation = function () {
              var t;
              return clearTimeout(null != (t = this.animation) ? t._timeout : void 0);
            }),
            (n.prototype.render = function (t) {
              var e, r;
              return (
                t._png && t._png.stopAnimation(),
                (t._png = this),
                (t.width = this.width),
                (t.height = this.height),
                (e = t.getContext("2d")),
                this.animation
                  ? (this.decodeFrames(e), this.animate(e))
                  : ((r = e.createImageData(this.width, this.height)),
                    this.copyToImageData(r, this.decodePixels()),
                    e.putImageData(r, 0, 0))
              );
            }),
            n
          );
        })();
      /**
       * @license
       *
       * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
       *
       * Permission is hereby granted, free of charge, to any person obtaining
       * a copy of this software and associated documentation files (the
       * "Software"), to deal in the Software without restriction, including
       * without limitation the rights to use, copy, modify, merge, publish,
       * distribute, sublicense, and/or sell copies of the Software, and to
       * permit persons to whom the Software is furnished to do so, subject to
       * the following conditions:
       *
       * The above copyright notice and this permission notice shall be
       * included in all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
       * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
       * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
       * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       * ====================================================================
       */
      /**
       * @license
       * (c) Dean McNamee <dean@gmail.com>, 2013.
       *
       * https://github.com/deanm/omggif
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to
       * deal in the Software without restriction, including without limitation the
       * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
       * sell copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
       * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
       * IN THE SOFTWARE.
       *
       * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
       * including animation and compression.  It does not rely on any specific
       * underlying system, so should run in the browser, Node, or Plask.
       */ function Kt(t) {
        var e = 0;
        if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != ((t[e++] + 1) & 253) || 97 !== t[e++])
          throw new Error("Invalid GIF 87a/89a header.");
        var r = t[e++] | (t[e++] << 8),
          n = t[e++] | (t[e++] << 8),
          i = t[e++],
          o = i >> 7,
          a = 1 << (1 + (7 & i));
        t[e++], t[e++];
        var s = null,
          u = null;
        o && ((s = e), (u = a), (e += 3 * a));
        var c = !0,
          l = [],
          h = 0,
          f = null,
          d = 0,
          p = null;
        for (this.width = r, this.height = n; c && e < t.length; )
          switch (t[e++]) {
            case 33:
              switch (t[e++]) {
                case 255:
                  if (
                    11 !== t[e] ||
                    (78 == t[e + 1] &&
                      69 == t[e + 2] &&
                      84 == t[e + 3] &&
                      83 == t[e + 4] &&
                      67 == t[e + 5] &&
                      65 == t[e + 6] &&
                      80 == t[e + 7] &&
                      69 == t[e + 8] &&
                      50 == t[e + 9] &&
                      46 == t[e + 10] &&
                      48 == t[e + 11] &&
                      3 == t[e + 12] &&
                      1 == t[e + 13] &&
                      0 == t[e + 16])
                  )
                    (e += 14), (p = t[e++] | (t[e++] << 8)), e++;
                  else
                    for (e += 12; ; ) {
                      if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
                      if (0 === P) break;
                      e += P;
                    }
                  break;
                case 249:
                  if (4 !== t[e++] || 0 !== t[e + 4]) throw new Error("Invalid graphics extension block.");
                  var g = t[e++];
                  (h = t[e++] | (t[e++] << 8)), (f = t[e++]), 0 == (1 & g) && (f = null), (d = (g >> 2) & 7), e++;
                  break;
                case 254:
                  for (;;) {
                    if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
                    if (0 === P) break;
                    e += P;
                  }
                  break;
                default:
                  throw new Error("Unknown graphic control label: 0x" + t[e - 1].toString(16));
              }
              break;
            case 44:
              var m = t[e++] | (t[e++] << 8),
                v = t[e++] | (t[e++] << 8),
                b = t[e++] | (t[e++] << 8),
                y = t[e++] | (t[e++] << 8),
                w = t[e++],
                x = (w >> 6) & 1,
                L = 1 << (1 + (7 & w)),
                N = s,
                A = u,
                _ = !1;
              w >> 7 && ((_ = !0), (N = e), (A = L), (e += 3 * L));
              var S = e;
              for (e++; ; ) {
                var P;
                if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
                if (0 === P) break;
                e += P;
              }
              l.push({
                x: m,
                y: v,
                width: b,
                height: y,
                has_local_palette: _,
                palette_offset: N,
                palette_size: A,
                data_offset: S,
                data_length: e - S,
                transparent_index: f,
                interlaced: !!x,
                delay: h,
                disposal: d
              });
              break;
            case 59:
              c = !1;
              break;
            default:
              throw new Error("Unknown gif block: 0x" + t[e - 1].toString(16));
          }
        (this.numFrames = function () {
          return l.length;
        }),
          (this.loopCount = function () {
            return p;
          }),
          (this.frameInfo = function (t) {
            if (t < 0 || t >= l.length) throw new Error("Frame index out of range.");
            return l[t];
          }),
          (this.decodeAndBlitFrameBGRA = function (e, n) {
            var i = this.frameInfo(e),
              o = i.width * i.height,
              a = new Uint8Array(o);
            $t(t, i.data_offset, a, o);
            var s = i.palette_offset,
              u = i.transparent_index;
            null === u && (u = 256);
            var c = i.width,
              l = r - c,
              h = c,
              f = 4 * (i.y * r + i.x),
              d = 4 * ((i.y + i.height) * r + i.x),
              p = f,
              g = 4 * l;
            !0 === i.interlaced && (g += 4 * r * 7);
            for (var m = 8, v = 0, b = a.length; v < b; ++v) {
              var y = a[v];
              if (
                (0 === h && ((h = c), (p += g) >= d && ((g = 4 * l + 4 * r * (m - 1)), (p = f + (c + l) * (m << 1)), (m >>= 1))), y === u)
              )
                p += 4;
              else {
                var w = t[s + 3 * y],
                  x = t[s + 3 * y + 1],
                  L = t[s + 3 * y + 2];
                (n[p++] = L), (n[p++] = x), (n[p++] = w), (n[p++] = 255);
              }
              --h;
            }
          }),
          (this.decodeAndBlitFrameRGBA = function (e, n) {
            var i = this.frameInfo(e),
              o = i.width * i.height,
              a = new Uint8Array(o);
            $t(t, i.data_offset, a, o);
            var s = i.palette_offset,
              u = i.transparent_index;
            null === u && (u = 256);
            var c = i.width,
              l = r - c,
              h = c,
              f = 4 * (i.y * r + i.x),
              d = 4 * ((i.y + i.height) * r + i.x),
              p = f,
              g = 4 * l;
            !0 === i.interlaced && (g += 4 * r * 7);
            for (var m = 8, v = 0, b = a.length; v < b; ++v) {
              var y = a[v];
              if (
                (0 === h && ((h = c), (p += g) >= d && ((g = 4 * l + 4 * r * (m - 1)), (p = f + (c + l) * (m << 1)), (m >>= 1))), y === u)
              )
                p += 4;
              else {
                var w = t[s + 3 * y],
                  x = t[s + 3 * y + 1],
                  L = t[s + 3 * y + 2];
                (n[p++] = w), (n[p++] = x), (n[p++] = L), (n[p++] = 255);
              }
              --h;
            }
          });
      }
      function $t(t, e, r, n) {
        for (
          var i = t[e++],
            o = 1 << i,
            a = o + 1,
            s = a + 1,
            c = i + 1,
            l = (1 << c) - 1,
            h = 0,
            f = 0,
            d = 0,
            p = t[e++],
            g = new Int32Array(4096),
            m = null;
          ;

        ) {
          for (; h < 16 && 0 !== p; ) (f |= t[e++] << h), (h += 8), 1 === p ? (p = t[e++]) : --p;
          if (h < c) break;
          var v = f & l;
          if (((f >>= c), (h -= c), v !== o)) {
            if (v === a) break;
            for (var b = v < s ? v : m, y = 0, w = b; w > o; ) (w = g[w] >> 8), ++y;
            var x = w;
            if (d + y + (b !== v ? 1 : 0) > n) return void u.log("Warning, gif stream longer than expected.");
            r[d++] = x;
            var L = (d += y);
            for (b !== v && (r[d++] = x), w = b; y--; ) (w = g[w]), (r[--L] = 255 & w), (w >>= 8);
            null !== m && s < 4096 && ((g[s++] = (m << 8) | x), s >= l + 1 && c < 12 && (++c, (l = (l << 1) | 1))), (m = v);
          } else (s = a + 1), (l = (1 << (c = i + 1)) - 1), (m = null);
        }
        return d !== n && u.log("Warning, gif stream shorter than expected."), r;
        /**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
      }
      function Zt(t) {
        var e,
          r,
          n,
          i,
          o,
          a = Math.floor,
          s = new Array(64),
          u = new Array(64),
          c = new Array(64),
          l = new Array(64),
          h = new Array(65535),
          f = new Array(65535),
          d = new Array(64),
          p = new Array(64),
          g = [],
          m = 0,
          v = 7,
          b = new Array(64),
          y = new Array(64),
          w = new Array(64),
          x = new Array(256),
          L = new Array(2048),
          N = [
            0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19,
            23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63
          ],
          A = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
          _ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          S = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
          P = [
            1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240,
            36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73,
            74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132,
            133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178,
            179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217,
            218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250
          ],
          k = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          F = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          I = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
          C = [
            0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21,
            98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72,
            73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131,
            132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170,
            178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216,
            217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250
          ];
        function E(t, e) {
          for (var r = 0, n = 0, i = new Array(), o = 1; o <= 16; o++) {
            for (var a = 1; a <= t[o]; a++) (i[e[n]] = []), (i[e[n]][0] = r), (i[e[n]][1] = o), n++, r++;
            r *= 2;
          }
          return i;
        }
        function j(t) {
          for (var e = t[0], r = t[1] - 1; r >= 0; )
            e & (1 << r) && (m |= 1 << v), r--, --v < 0 && (255 == m ? (O(255), O(0)) : O(m), (v = 7), (m = 0));
        }
        function O(t) {
          g.push(t);
        }
        function M(t) {
          O((t >> 8) & 255), O(255 & t);
        }
        function R(t, e, r, n, i) {
          for (
            var o,
              a = i[0],
              s = i[240],
              u = (function (t, e) {
                var r,
                  n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  h,
                  f = 0;
                for (l = 0; l < 8; ++l) {
                  (r = t[f]), (n = t[f + 1]), (i = t[f + 2]), (o = t[f + 3]), (a = t[f + 4]), (s = t[f + 5]), (u = t[f + 6]);
                  var p = r + (c = t[f + 7]),
                    g = r - c,
                    m = n + u,
                    v = n - u,
                    b = i + s,
                    y = i - s,
                    w = o + a,
                    x = o - a,
                    L = p + w,
                    N = p - w,
                    A = m + b,
                    _ = m - b;
                  (t[f] = L + A), (t[f + 4] = L - A);
                  var S = 0.707106781 * (_ + N);
                  (t[f + 2] = N + S), (t[f + 6] = N - S);
                  var P = 0.382683433 * ((L = x + y) - (_ = v + g)),
                    k = 0.5411961 * L + P,
                    F = 1.306562965 * _ + P,
                    I = 0.707106781 * (A = y + v),
                    C = g + I,
                    E = g - I;
                  (t[f + 5] = E + k), (t[f + 3] = E - k), (t[f + 1] = C + F), (t[f + 7] = C - F), (f += 8);
                }
                for (f = 0, l = 0; l < 8; ++l) {
                  (r = t[f]), (n = t[f + 8]), (i = t[f + 16]), (o = t[f + 24]), (a = t[f + 32]), (s = t[f + 40]), (u = t[f + 48]);
                  var j = r + (c = t[f + 56]),
                    O = r - c,
                    M = n + u,
                    R = n - u,
                    B = i + s,
                    T = i - s,
                    q = o + a,
                    D = o - a,
                    U = j + q,
                    z = j - q,
                    H = M + B,
                    W = M - B;
                  (t[f] = U + H), (t[f + 32] = U - H);
                  var V = 0.707106781 * (W + z);
                  (t[f + 16] = z + V), (t[f + 48] = z - V);
                  var G = 0.382683433 * ((U = D + T) - (W = R + O)),
                    Y = 0.5411961 * U + G,
                    X = 1.306562965 * W + G,
                    J = 0.707106781 * (H = T + R),
                    K = O + J,
                    $ = O - J;
                  (t[f + 40] = $ + Y), (t[f + 24] = $ - Y), (t[f + 8] = K + X), (t[f + 56] = K - X), f++;
                }
                for (l = 0; l < 64; ++l) (h = t[l] * e[l]), (d[l] = h > 0 ? (h + 0.5) | 0 : (h - 0.5) | 0);
                return d;
              })(t, e),
              c = 0;
            c < 64;
            ++c
          )
            p[N[c]] = u[c];
          var l = p[0] - r;
          (r = p[0]), 0 == l ? j(n[0]) : (j(n[f[(o = 32767 + l)]]), j(h[o]));
          for (var g = 63; g > 0 && 0 == p[g]; ) g--;
          if (0 == g) return j(a), r;
          for (var m, v = 1; v <= g; ) {
            for (var b = v; 0 == p[v] && v <= g; ) ++v;
            var y = v - b;
            if (y >= 16) {
              m = y >> 4;
              for (var w = 1; w <= m; ++w) j(s);
              y &= 15;
            }
            (o = 32767 + p[v]), j(i[(y << 4) + f[o]]), j(h[o]), v++;
          }
          return 63 != g && j(a), r;
        }
        function B(t) {
          (t = Math.min(Math.max(t, 1), 100)),
            o != t &&
              ((function (t) {
                for (
                  var e = [
                      16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51,
                      87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101,
                      72, 92, 95, 98, 112, 100, 103, 99
                    ],
                    r = 0;
                  r < 64;
                  r++
                ) {
                  var n = a((e[r] * t + 50) / 100);
                  (n = Math.min(Math.max(n, 1), 255)), (s[N[r]] = n);
                }
                for (
                  var i = [
                      17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99,
                      99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                      99, 99, 99, 99, 99, 99
                    ],
                    o = 0;
                  o < 64;
                  o++
                ) {
                  var h = a((i[o] * t + 50) / 100);
                  (h = Math.min(Math.max(h, 1), 255)), (u[N[o]] = h);
                }
                for (var f = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], d = 0, p = 0; p < 8; p++)
                  for (var g = 0; g < 8; g++) (c[d] = 1 / (s[N[d]] * f[p] * f[g] * 8)), (l[d] = 1 / (u[N[d]] * f[p] * f[g] * 8)), d++;
              })(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)),
              (o = t));
        }
        (this.encode = function (t, o) {
          o && B(o),
            (g = new Array()),
            (m = 0),
            (v = 7),
            M(65496),
            M(65504),
            M(16),
            O(74),
            O(70),
            O(73),
            O(70),
            O(0),
            O(1),
            O(1),
            O(0),
            M(1),
            M(1),
            O(0),
            O(0),
            (function () {
              M(65499), M(132), O(0);
              for (var t = 0; t < 64; t++) O(s[t]);
              O(1);
              for (var e = 0; e < 64; e++) O(u[e]);
            })(),
            (function (t, e) {
              M(65472), M(17), O(8), M(e), M(t), O(3), O(1), O(17), O(0), O(2), O(17), O(1), O(3), O(17), O(1);
            })(t.width, t.height),
            (function () {
              M(65476), M(418), O(0);
              for (var t = 0; t < 16; t++) O(A[t + 1]);
              for (var e = 0; e <= 11; e++) O(_[e]);
              O(16);
              for (var r = 0; r < 16; r++) O(S[r + 1]);
              for (var n = 0; n <= 161; n++) O(P[n]);
              O(1);
              for (var i = 0; i < 16; i++) O(k[i + 1]);
              for (var o = 0; o <= 11; o++) O(F[o]);
              O(17);
              for (var a = 0; a < 16; a++) O(I[a + 1]);
              for (var s = 0; s <= 161; s++) O(C[s]);
            })(),
            M(65498),
            M(12),
            O(3),
            O(1),
            O(0),
            O(2),
            O(17),
            O(3),
            O(17),
            O(0),
            O(63),
            O(0);
          var a = 0,
            h = 0,
            f = 0;
          (m = 0), (v = 7), (this.encode.displayName = "_encode_");
          for (var d, p, x, N, E, T, q, D, U, z = t.data, H = t.width, W = t.height, V = 4 * H, G = 0; G < W; ) {
            for (d = 0; d < V; ) {
              for (E = V * G + d, q = -1, D = 0, U = 0; U < 64; U++)
                (T = E + (D = U >> 3) * V + (q = 4 * (7 & U))),
                  G + D >= W && (T -= V * (G + 1 + D - W)),
                  d + q >= V && (T -= d + q - V + 4),
                  (p = z[T++]),
                  (x = z[T++]),
                  (N = z[T++]),
                  (b[U] = ((L[p] + L[(x + 256) >> 0] + L[(N + 512) >> 0]) >> 16) - 128),
                  (y[U] = ((L[(p + 768) >> 0] + L[(x + 1024) >> 0] + L[(N + 1280) >> 0]) >> 16) - 128),
                  (w[U] = ((L[(p + 1280) >> 0] + L[(x + 1536) >> 0] + L[(N + 1792) >> 0]) >> 16) - 128);
              (a = R(b, c, a, e, n)), (h = R(y, l, h, r, i)), (f = R(w, l, f, r, i)), (d += 32);
            }
            G += 8;
          }
          if (v >= 0) {
            var Y = [];
            (Y[1] = v + 1), (Y[0] = (1 << (v + 1)) - 1), j(Y);
          }
          return M(65497), new Uint8Array(g);
        }),
          (t = t || 50),
          (function () {
            for (var t = String.fromCharCode, e = 0; e < 256; e++) x[e] = t(e);
          })(),
          (e = E(A, _)),
          (r = E(k, F)),
          (n = E(S, P)),
          (i = E(I, C)),
          (function () {
            for (var t = 1, e = 2, r = 1; r <= 15; r++) {
              for (var n = t; n < e; n++) (f[32767 + n] = r), (h[32767 + n] = []), (h[32767 + n][1] = r), (h[32767 + n][0] = n);
              for (var i = -(e - 1); i <= -t; i++)
                (f[32767 + i] = r), (h[32767 + i] = []), (h[32767 + i][1] = r), (h[32767 + i][0] = e - 1 + i);
              (t <<= 1), (e <<= 1);
            }
          })(),
          (function () {
            for (var t = 0; t < 256; t++)
              (L[t] = 19595 * t),
                (L[(t + 256) >> 0] = 38470 * t),
                (L[(t + 512) >> 0] = 7471 * t + 32768),
                (L[(t + 768) >> 0] = -11059 * t),
                (L[(t + 1024) >> 0] = -21709 * t),
                (L[(t + 1280) >> 0] = 32768 * t + 8421375),
                (L[(t + 1536) >> 0] = -27439 * t),
                (L[(t + 1792) >> 0] = -5329 * t);
          })(),
          B(t);
      }
      /**
       * @license
       * Copyright (c) 2017 Aras Abbasi
       *
       * Licensed under the MIT License.
       * http://opensource.org/licenses/mit-license
       */ function Qt(t, e) {
        if (
          ((this.pos = 0),
          (this.buffer = t),
          (this.datav = new DataView(t.buffer)),
          (this.is_with_alpha = !!e),
          (this.bottom_up = !0),
          (this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1])),
          (this.pos += 2),
          -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag))
        )
          throw new Error("Invalid BMP File");
        this.parseHeader(), this.parseBGR();
      }
      function te(t) {
        function e(t) {
          if (!t) throw Error("assert :P");
        }
        function r(t, e, r) {
          for (var n = 0; 4 > n; n++) if (t[e + n] != r.charCodeAt(n)) return !0;
          return !1;
        }
        function n(t, e, r, n, i) {
          for (var o = 0; o < i; o++) t[e + o] = r[n + o];
        }
        function i(t, e, r, n) {
          for (var i = 0; i < n; i++) t[e + i] = r;
        }
        function o(t) {
          return new Int32Array(t);
        }
        function a(t, e) {
          for (var r = [], n = 0; n < t; n++) r.push(new e());
          return r;
        }
        function s(t, e) {
          var r = [];
          return (
            (function t(r, n, i) {
              for (var o = i[n], a = 0; a < o && (r.push(i.length > n + 1 ? [] : new e()), !(i.length < n + 1)); a++) t(r[a], n + 1, i);
            })(r, 0, t),
            r
          );
        }
        function u(t, e) {
          for (var r = "", n = 0; n < 4; n++) r += String.fromCharCode(t[e++]);
          return r;
        }
        function c(t, e) {
          return ((t[e + 0] << 0) | (t[e + 1] << 8) | (t[e + 2] << 16)) >>> 0;
        }
        function l(t, e) {
          return ((t[e + 0] << 0) | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24)) >>> 0;
        }
        new (te = function () {
          var t = this;
          function u(t, e) {
            for (var r = (1 << (e - 1)) >>> 0; t & r; ) r >>>= 1;
            return r ? (t & (r - 1)) + r : t;
          }
          function c(t, r, n, i, o) {
            e(!(i % n));
            do {
              t[r + (i -= n)] = o;
            } while (0 < i);
          }
          function l(t, r, n, i, a) {
            if ((e(2328 >= a), 512 >= a)) var s = o(512);
            else if (null == (s = o(a))) return 0;
            return (function (t, r, n, i, a, s) {
              var l,
                f,
                d = r,
                p = 1 << n,
                g = o(16),
                m = o(16);
              for (e(0 != a), e(null != i), e(null != t), e(0 < n), f = 0; f < a; ++f) {
                if (15 < i[f]) return 0;
                ++g[i[f]];
              }
              if (g[0] == a) return 0;
              for (m[1] = 0, l = 1; 15 > l; ++l) {
                if (g[l] > 1 << l) return 0;
                m[l + 1] = m[l] + g[l];
              }
              for (f = 0; f < a; ++f) (l = i[f]), 0 < i[f] && (s[m[l]++] = f);
              if (1 == m[15]) return ((i = new h()).g = 0), (i.value = s[0]), c(t, d, 1, p, i), p;
              var v,
                b = -1,
                y = p - 1,
                w = 0,
                x = 1,
                L = 1,
                N = 1 << n;
              for (f = 0, l = 1, a = 2; l <= n; ++l, a <<= 1) {
                if (((x += L <<= 1), 0 > (L -= g[l]))) return 0;
                for (; 0 < g[l]; --g[l]) ((i = new h()).g = l), (i.value = s[f++]), c(t, d + w, a, N, i), (w = u(w, l));
              }
              for (l = n + 1, a = 2; 15 >= l; ++l, a <<= 1) {
                if (((x += L <<= 1), 0 > (L -= g[l]))) return 0;
                for (; 0 < g[l]; --g[l]) {
                  if (((i = new h()), (w & y) != b)) {
                    for (d += N, v = 1 << ((b = l) - n); 15 > b && !(0 >= (v -= g[b])); ) ++b, (v <<= 1);
                    (p += N = 1 << (v = b - n)), (t[r + (b = w & y)].g = v + n), (t[r + b].value = d - r - b);
                  }
                  (i.g = l - n), (i.value = s[f++]), c(t, d + (w >> n), a, N, i), (w = u(w, l));
                }
              }
              return x != 2 * m[15] - 1 ? 0 : p;
            })(t, r, n, i, a, s);
          }
          function h() {
            this.value = this.g = 0;
          }
          function f() {
            this.value = this.g = 0;
          }
          function d() {
            (this.G = a(5, h)), (this.H = o(5)), (this.jc = this.Qb = this.qb = this.nd = 0), (this.pd = a(Tr, f));
          }
          function p(t, r, n, i) {
            e(null != t),
              e(null != r),
              e(2147483648 > i),
              (t.Ca = 254),
              (t.I = 0),
              (t.b = -8),
              (t.Ka = 0),
              (t.oa = r),
              (t.pa = n),
              (t.Jd = r),
              (t.Yc = n + i),
              (t.Zc = 4 <= i ? n + i - 4 + 1 : n),
              S(t);
          }
          function g(t, e) {
            for (var r = 0; 0 < e--; ) r |= k(t, 128) << e;
            return r;
          }
          function m(t, e) {
            var r = g(t, e);
            return P(t) ? -r : r;
          }
          function v(t, r, n, i) {
            var o,
              a = 0;
            for (e(null != t), e(null != r), e(4294967288 > i), t.Sb = i, t.Ra = 0, t.u = 0, t.h = 0, 4 < i && (i = 4), o = 0; o < i; ++o)
              a += r[n + o] << (8 * o);
            (t.Ra = a), (t.bb = i), (t.oa = r), (t.pa = n);
          }
          function b(t) {
            for (; 8 <= t.u && t.bb < t.Sb; ) (t.Ra >>>= 8), (t.Ra += (t.oa[t.pa + t.bb] << (Ur - 8)) >>> 0), ++t.bb, (t.u -= 8);
            N(t) && ((t.h = 1), (t.u = 0));
          }
          function y(t, r) {
            if ((e(0 <= r), !t.h && r <= Dr)) {
              var n = L(t) & qr[r];
              return (t.u += r), b(t), n;
            }
            return (t.h = 1), (t.u = 0);
          }
          function w() {
            (this.b = this.Ca = this.I = 0), (this.oa = []), (this.pa = 0), (this.Jd = []), (this.Yc = 0), (this.Zc = []), (this.Ka = 0);
          }
          function x() {
            (this.Ra = 0), (this.oa = []), (this.h = this.u = this.bb = this.Sb = this.pa = 0);
          }
          function L(t) {
            return (t.Ra >>> (t.u & (Ur - 1))) >>> 0;
          }
          function N(t) {
            return e(t.bb <= t.Sb), t.h || (t.bb == t.Sb && t.u > Ur);
          }
          function A(t, e) {
            (t.u = e), (t.h = N(t));
          }
          function _(t) {
            t.u >= zr && (e(t.u >= zr), b(t));
          }
          function S(t) {
            e(null != t && null != t.oa),
              t.pa < t.Zc
                ? ((t.I = (t.oa[t.pa++] | (t.I << 8)) >>> 0), (t.b += 8))
                : (e(null != t && null != t.oa),
                  t.pa < t.Yc ? ((t.b += 8), (t.I = t.oa[t.pa++] | (t.I << 8))) : t.Ka ? (t.b = 0) : ((t.I <<= 8), (t.b += 8), (t.Ka = 1)));
          }
          function P(t) {
            return g(t, 1);
          }
          function k(t, e) {
            var r = t.Ca;
            0 > t.b && S(t);
            var n = t.b,
              i = (r * e) >>> 8,
              o = (t.I >>> n > i) + 0;
            for (o ? ((r -= i), (t.I -= ((i + 1) << n) >>> 0)) : (r = i + 1), n = r, i = 0; 256 <= n; ) (i += 8), (n >>= 8);
            return (n = 7 ^ (i + Hr[n])), (t.b -= n), (t.Ca = (r << n) - 1), o;
          }
          function F(t, e, r) {
            (t[e + 0] = (r >> 24) & 255), (t[e + 1] = (r >> 16) & 255), (t[e + 2] = (r >> 8) & 255), (t[e + 3] = (r >> 0) & 255);
          }
          function I(t, e) {
            return (t[e + 0] << 0) | (t[e + 1] << 8);
          }
          function C(t, e) {
            return I(t, e) | (t[e + 2] << 16);
          }
          function E(t, e) {
            return I(t, e) | (I(t, e + 2) << 16);
          }
          function j(t, r) {
            var n = 1 << r;
            return e(null != t), e(0 < r), (t.X = o(n)), null == t.X ? 0 : ((t.Mb = 32 - r), (t.Xa = r), 1);
          }
          function O(t, r) {
            e(null != t), e(null != r), e(t.Xa == r.Xa), n(r.X, 0, t.X, 0, 1 << r.Xa);
          }
          function M() {
            (this.X = []), (this.Xa = this.Mb = 0);
          }
          function R(t, r, n, i) {
            e(null != n), e(null != i);
            var o = n[0],
              a = i[0];
            return (
              0 == o && (o = (t * a + r / 2) / r), 0 == a && (a = (r * o + t / 2) / t), 0 >= o || 0 >= a ? 0 : ((n[0] = o), (i[0] = a), 1)
            );
          }
          function B(t, e) {
            return (t + (1 << e) - 1) >>> e;
          }
          function T(t, e) {
            return (
              (((((4278255360 & t) + (4278255360 & e)) >>> 0) & 4278255360) + ((((16711935 & t) + (16711935 & e)) >>> 0) & 16711935)) >>> 0
            );
          }
          function q(e, r) {
            t[r] = function (r, n, i, o, a, s, u) {
              var c;
              for (c = 0; c < a; ++c) {
                var l = t[e](s[u + c - 1], i, o + c);
                s[u + c] = T(r[n + c], l);
              }
            };
          }
          function D() {
            this.ud = this.hd = this.jd = 0;
          }
          function U(t, e) {
            return (((4278124286 & (t ^ e)) >>> 1) + (t & e)) >>> 0;
          }
          function z(t) {
            return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
          }
          function H(t, e) {
            return z(t + ((t - e + 0.5) >> 1));
          }
          function W(t, e, r) {
            return Math.abs(e - r) - Math.abs(t - r);
          }
          function V(t, e, r, n, i, o, a) {
            for (n = o[a - 1], r = 0; r < i; ++r) o[a + r] = n = T(t[e + r], n);
          }
          function G(t, e, r, n, i) {
            var o;
            for (o = 0; o < r; ++o) {
              var a = t[e + o],
                s = (a >> 8) & 255,
                u = 16711935 & (u = (u = 16711935 & a) + ((s << 16) + s));
              n[i + o] = ((4278255360 & a) + u) >>> 0;
            }
          }
          function Y(t, e) {
            (e.jd = (t >> 0) & 255), (e.hd = (t >> 8) & 255), (e.ud = (t >> 16) & 255);
          }
          function X(t, e, r, n, i, o) {
            var a;
            for (a = 0; a < n; ++a) {
              var s = e[r + a],
                u = s >>> 8,
                c = s,
                l = 255 & (l = (l = s >>> 16) + ((((t.jd << 24) >> 24) * ((u << 24) >> 24)) >>> 5));
              (c =
                255 & (c = (c += (((t.hd << 24) >> 24) * ((u << 24) >> 24)) >>> 5) + ((((t.ud << 24) >> 24) * ((l << 24) >> 24)) >>> 5))),
                (i[o + a] = (4278255360 & s) + (l << 16) + c);
            }
          }
          function J(e, r, n, i, o) {
            (t[r] = function (t, e, r, n, a, s, u, c, l) {
              for (n = u; n < c; ++n) for (u = 0; u < l; ++u) a[s++] = o(r[i(t[e++])]);
            }),
              (t[e] = function (e, r, a, s, u, c, l) {
                var h = 8 >> e.b,
                  f = e.Ea,
                  d = e.K[0],
                  p = e.w;
                if (8 > h)
                  for (e = (1 << e.b) - 1, p = (1 << h) - 1; r < a; ++r) {
                    var g,
                      m = 0;
                    for (g = 0; g < f; ++g) g & e || (m = i(s[u++])), (c[l++] = o(d[m & p])), (m >>= h);
                  }
                else t["VP8LMapColor" + n](s, u, d, p, c, l, r, a, f);
              });
          }
          function K(t, e, r, n, i) {
            for (r = e + r; e < r; ) {
              var o = t[e++];
              (n[i++] = (o >> 16) & 255), (n[i++] = (o >> 8) & 255), (n[i++] = (o >> 0) & 255);
            }
          }
          function $(t, e, r, n, i) {
            for (r = e + r; e < r; ) {
              var o = t[e++];
              (n[i++] = (o >> 16) & 255), (n[i++] = (o >> 8) & 255), (n[i++] = (o >> 0) & 255), (n[i++] = (o >> 24) & 255);
            }
          }
          function Z(t, e, r, n, i) {
            for (r = e + r; e < r; ) {
              var o = (((a = t[e++]) >> 16) & 240) | ((a >> 12) & 15),
                a = ((a >> 0) & 240) | ((a >> 28) & 15);
              (n[i++] = o), (n[i++] = a);
            }
          }
          function Q(t, e, r, n, i) {
            for (r = e + r; e < r; ) {
              var o = (((a = t[e++]) >> 16) & 248) | ((a >> 13) & 7),
                a = ((a >> 5) & 224) | ((a >> 3) & 31);
              (n[i++] = o), (n[i++] = a);
            }
          }
          function tt(t, e, r, n, i) {
            for (r = e + r; e < r; ) {
              var o = t[e++];
              (n[i++] = (o >> 0) & 255), (n[i++] = (o >> 8) & 255), (n[i++] = (o >> 16) & 255);
            }
          }
          function et(t, e, r, i, o, a) {
            if (0 == a)
              for (r = e + r; e < r; )
                F(i, (((a = t[e++])[0] >> 24) | ((a[1] >> 8) & 65280) | ((a[2] << 8) & 16711680) | (a[3] << 24)) >>> 0), (o += 32);
            else n(i, o, t, e, r);
          }
          function rt(e, r) {
            (t[r][0] = t[e + "0"]),
              (t[r][1] = t[e + "1"]),
              (t[r][2] = t[e + "2"]),
              (t[r][3] = t[e + "3"]),
              (t[r][4] = t[e + "4"]),
              (t[r][5] = t[e + "5"]),
              (t[r][6] = t[e + "6"]),
              (t[r][7] = t[e + "7"]),
              (t[r][8] = t[e + "8"]),
              (t[r][9] = t[e + "9"]),
              (t[r][10] = t[e + "10"]),
              (t[r][11] = t[e + "11"]),
              (t[r][12] = t[e + "12"]),
              (t[r][13] = t[e + "13"]),
              (t[r][14] = t[e + "0"]),
              (t[r][15] = t[e + "0"]);
          }
          function nt(t) {
            return t == Hn || t == Wn || t == Vn || t == Gn;
          }
          function it() {
            (this.eb = []), (this.size = this.A = this.fb = 0);
          }
          function ot() {
            (this.y = []),
              (this.f = []),
              (this.ea = []),
              (this.F = []),
              (this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0);
          }
          function at() {
            (this.Rd = this.height = this.width = this.S = 0),
              (this.f = {}),
              (this.f.RGBA = new it()),
              (this.f.kb = new ot()),
              (this.sd = null);
          }
          function st() {
            (this.width = [0]), (this.height = [0]), (this.Pd = [0]), (this.Qd = [0]), (this.format = [0]);
          }
          function ut() {
            this.Id =
              this.fd =
              this.Md =
              this.hb =
              this.ib =
              this.da =
              this.bd =
              this.cd =
              this.j =
              this.v =
              this.Da =
              this.Sd =
              this.ob =
                0;
          }
          function ct(t) {
            return alert("todo:WebPSamplerProcessPlane"), t.T;
          }
          function lt(t, e) {
            var r = t.T,
              i = e.ba.f.RGBA,
              o = i.eb,
              a = i.fb + t.ka * i.A,
              s = vi[e.ba.S],
              u = t.y,
              c = t.O,
              l = t.f,
              h = t.N,
              f = t.ea,
              d = t.W,
              p = e.cc,
              g = e.dc,
              m = e.Mc,
              v = e.Nc,
              b = t.ka,
              y = t.ka + t.T,
              w = t.U,
              x = (w + 1) >> 1;
            for (
              0 == b
                ? s(u, c, null, null, l, h, f, d, l, h, f, d, o, a, null, null, w)
                : (s(e.ec, e.fc, u, c, p, g, m, v, l, h, f, d, o, a - i.A, o, a, w), ++r);
              b + 2 < y;
              b += 2
            )
              (p = l),
                (g = h),
                (m = f),
                (v = d),
                (h += t.Rc),
                (d += t.Rc),
                (a += 2 * i.A),
                s(u, (c += 2 * t.fa) - t.fa, u, c, p, g, m, v, l, h, f, d, o, a - i.A, o, a, w);
            return (
              (c += t.fa),
              t.j + y < t.o
                ? (n(e.ec, e.fc, u, c, w), n(e.cc, e.dc, l, h, x), n(e.Mc, e.Nc, f, d, x), r--)
                : 1 & y || s(u, c, null, null, l, h, f, d, l, h, f, d, o, a + i.A, null, null, w),
              r
            );
          }
          function ht(t, r, n) {
            var i = t.F,
              o = [t.J];
            if (null != i) {
              var a = t.U,
                s = r.ba.S,
                u = s == Dn || s == Vn;
              r = r.ba.f.RGBA;
              var c = [0],
                l = t.ka;
              (c[0] = t.T), t.Kb && (0 == l ? --c[0] : (--l, (o[0] -= t.width)), t.j + t.ka + t.T == t.o && (c[0] = t.o - t.j - l));
              var h = r.eb;
              (l = r.fb + l * r.A),
                (t = _n(i, o[0], t.width, a, c, h, l + (u ? 0 : 3), r.A)),
                e(n == c),
                t && nt(s) && Nn(h, l, u, a, c, r.A);
            }
            return 0;
          }
          function ft(t) {
            var e = t.ma,
              r = e.ba.S,
              n = 11 > r,
              i = r == Bn || r == qn || r == Dn || r == Un || 12 == r || nt(r);
            if (((e.memory = null), (e.Ib = null), (e.Jb = null), (e.Nd = null), !Mr(e.Oa, t, i ? 11 : 12))) return 0;
            if ((i && nt(r) && br(), t.da)) alert("todo:use_scaling");
            else {
              if (n) {
                if (((e.Ib = ct), t.Kb)) {
                  if (((r = (t.U + 1) >> 1), (e.memory = o(t.U + 2 * r)), null == e.memory)) return 0;
                  (e.ec = e.memory), (e.fc = 0), (e.cc = e.ec), (e.dc = e.fc + t.U), (e.Mc = e.cc), (e.Nc = e.dc + r), (e.Ib = lt), br();
                }
              } else alert("todo:EmitYUV");
              i && ((e.Jb = ht), n && mr());
            }
            if (n && !Ci) {
              for (t = 0; 256 > t; ++t)
                (Ei[t] = (89858 * (t - 128) + Si) >> _i),
                  (Mi[t] = -22014 * (t - 128) + Si),
                  (Oi[t] = -45773 * (t - 128)),
                  (ji[t] = (113618 * (t - 128) + Si) >> _i);
              for (t = Pi; t < ki; ++t) (e = (76283 * (t - 16) + Si) >> _i), (Ri[t - Pi] = Vt(e, 255)), (Bi[t - Pi] = Vt((e + 8) >> 4, 15));
              Ci = 1;
            }
            return 1;
          }
          function dt(t) {
            var r = t.ma,
              n = t.U,
              i = t.T;
            return e(!(1 & t.ka)), 0 >= n || 0 >= i ? 0 : ((n = r.Ib(t, r)), null != r.Jb && r.Jb(t, r, n), (r.Dc += n), 1);
          }
          function pt(t) {
            t.ma.memory = null;
          }
          function gt(t, e, r, n) {
            return 47 != y(t, 8) ? 0 : ((e[0] = y(t, 14) + 1), (r[0] = y(t, 14) + 1), (n[0] = y(t, 1)), 0 != y(t, 3) ? 0 : !t.h);
          }
          function mt(t, e) {
            if (4 > t) return t + 1;
            var r = (t - 2) >> 1;
            return ((2 + (1 & t)) << r) + y(e, r) + 1;
          }
          function vt(t, e) {
            var r;
            return 120 < e ? e - 120 : 1 <= (r = ((r = Zn[e - 1]) >> 4) * t + (8 - (15 & r))) ? r : 1;
          }
          function bt(t, e, r) {
            var n = L(r),
              i = t[(e += 255 & n)].g - 8;
            return 0 < i && (A(r, r.u + 8), (n = L(r)), (e += t[e].value), (e += n & ((1 << i) - 1))), A(r, r.u + t[e].g), t[e].value;
          }
          function yt(t, r, n) {
            return (n.g += t.g), (n.value += (t.value << r) >>> 0), e(8 >= n.g), t.g;
          }
          function wt(t, r, n) {
            var i = t.xc;
            return e((r = 0 == i ? 0 : t.vc[t.md * (n >> i) + (r >> i)]) < t.Wb), t.Ya[r];
          }
          function xt(t, r, i, o) {
            var a = t.ab,
              s = t.c * r,
              u = t.C;
            r = u + r;
            var c = i,
              l = o;
            for (o = t.Ta, i = t.Ua; 0 < a--; ) {
              var h = t.gc[a],
                f = u,
                d = r,
                p = c,
                g = l,
                m = ((l = o), (c = i), h.Ea);
              switch ((e(f < d), e(d <= h.nc), h.hc)) {
                case 2:
                  Gr(p, g, (d - f) * m, l, c);
                  break;
                case 0:
                  var v = f,
                    b = d,
                    y = l,
                    w = c,
                    x = (S = h).Ea;
                  0 == v && (Wr(p, g, null, null, 1, y, w), V(p, g + 1, 0, 0, x - 1, y, w + 1), (g += x), (w += x), ++v);
                  for (var L = 1 << S.b, N = L - 1, A = B(x, S.b), _ = S.K, S = S.w + (v >> S.b) * A; v < b; ) {
                    var P = _,
                      k = S,
                      F = 1;
                    for (Vr(p, g, y, w - x, 1, y, w); F < x; ) {
                      var I = (F & ~N) + L;
                      I > x && (I = x), (0, $r[(P[k++] >> 8) & 15])(p, g + +F, y, w + F - x, I - F, y, w + F), (F = I);
                    }
                    (g += x), (w += x), ++v & N || (S += A);
                  }
                  d != h.nc && n(l, c - m, l, c + (d - f - 1) * m, m);
                  break;
                case 1:
                  for (
                    m = p, b = g, x = (p = h.Ea) - (w = p & ~(y = (g = 1 << h.b) - 1)), v = B(p, h.b), L = h.K, h = h.w + (f >> h.b) * v;
                    f < d;

                  ) {
                    for (N = L, A = h, _ = new D(), S = b + w, P = b + p; b < S; ) Y(N[A++], _), Zr(_, m, b, g, l, c), (b += g), (c += g);
                    b < P && (Y(N[A++], _), Zr(_, m, b, x, l, c), (b += x), (c += x)), ++f & y || (h += v);
                  }
                  break;
                case 3:
                  if (p == l && g == c && 0 < h.b) {
                    for (b = l, p = m = c + (d - f) * m - (w = (d - f) * B(h.Ea, h.b)), g = l, y = c, v = [], w = (x = w) - 1; 0 <= w; --w)
                      v[w] = g[y + w];
                    for (w = x - 1; 0 <= w; --w) b[p + w] = v[w];
                    Yr(h, f, d, l, m, l, c);
                  } else Yr(h, f, d, p, g, l, c);
              }
              (c = o), (l = i);
            }
            l != i && n(o, i, c, l, s);
          }
          function Lt(t, r) {
            var n = t.V,
              i = t.Ba + t.c * t.C,
              o = r - t.C;
            if ((e(r <= t.l.o), e(16 >= o), 0 < o)) {
              var a = t.l,
                s = t.Ta,
                u = t.Ua,
                c = a.width;
              if ((xt(t, o, n, i), (o = u = [u]), e((n = t.C) < (i = r)), e(a.v < a.va), i > a.o && (i = a.o), n < a.j)) {
                var l = a.j - n;
                (n = a.j), (o[0] += l * c);
              }
              if ((n >= i ? (n = 0) : ((o[0] += 4 * a.v), (a.ka = n - a.j), (a.U = a.va - a.v), (a.T = i - n), (n = 1)), n)) {
                if (((u = u[0]), 11 > (n = t.ca).S)) {
                  var h = n.f.RGBA,
                    f = ((i = n.S), (o = a.U), (a = a.T), (l = h.eb), h.A),
                    d = a;
                  for (h = h.fb + t.Ma * h.A; 0 < d--; ) {
                    var p = s,
                      g = u,
                      m = o,
                      v = l,
                      b = h;
                    switch (i) {
                      case Rn:
                        Qr(p, g, m, v, b);
                        break;
                      case Bn:
                        tn(p, g, m, v, b);
                        break;
                      case Hn:
                        tn(p, g, m, v, b), Nn(v, b, 0, m, 1, 0);
                        break;
                      case Tn:
                        nn(p, g, m, v, b);
                        break;
                      case qn:
                        et(p, g, m, v, b, 1);
                        break;
                      case Wn:
                        et(p, g, m, v, b, 1), Nn(v, b, 0, m, 1, 0);
                        break;
                      case Dn:
                        et(p, g, m, v, b, 0);
                        break;
                      case Vn:
                        et(p, g, m, v, b, 0), Nn(v, b, 1, m, 1, 0);
                        break;
                      case Un:
                        en(p, g, m, v, b);
                        break;
                      case Gn:
                        en(p, g, m, v, b), An(v, b, m, 1, 0);
                        break;
                      case zn:
                        rn(p, g, m, v, b);
                        break;
                      default:
                        e(0);
                    }
                    (u += c), (h += f);
                  }
                  t.Ma += a;
                } else alert("todo:EmitRescaledRowsYUVA");
                e(t.Ma <= n.height);
              }
            }
            (t.C = r), e(t.C <= t.i);
          }
          function Nt(t) {
            var e;
            if (0 < t.ua) return 0;
            for (e = 0; e < t.Wb; ++e) {
              var r = t.Ya[e].G,
                n = t.Ya[e].H;
              if (0 < r[1][n[1] + 0].g || 0 < r[2][n[2] + 0].g || 0 < r[3][n[3] + 0].g) return 0;
            }
            return 1;
          }
          function At(t, r, n, i, o, a) {
            if (0 != t.Z) {
              var s = t.qd,
                u = t.rd;
              for (e(null != mi[t.Z]); r < n; ++r) mi[t.Z](s, u, i, o, i, o, a), (s = i), (u = o), (o += a);
              (t.qd = s), (t.rd = u);
            }
          }
          function _t(t, r) {
            var n = t.l.ma,
              i = 0 == n.Z || 1 == n.Z ? t.l.j : t.C;
            if (((i = t.C < i ? i : t.C), e(r <= t.l.o), r > i)) {
              var o = t.l.width,
                a = n.ca,
                s = n.tb + o * i,
                u = t.V,
                c = t.Ba + t.c * i,
                l = t.gc;
              e(1 == t.ab), e(3 == l[0].hc), Jr(l[0], i, r, u, c, a, s), At(n, i, r, a, s, o);
            }
            t.C = t.Ma = r;
          }
          function St(t, r, n, i, o, a, s) {
            var u = t.$ / i,
              c = t.$ % i,
              l = t.m,
              h = t.s,
              f = n + t.$,
              d = f;
            o = n + i * o;
            var p = n + i * a,
              g = 280 + h.ua,
              m = t.Pb ? u : 16777216,
              v = 0 < h.ua ? h.Wa : null,
              b = h.wc,
              y = f < p ? wt(h, c, u) : null;
            e(t.C < a), e(p <= o);
            var w = !1;
            t: for (;;) {
              for (; w || f < p; ) {
                var x = 0;
                if (u >= m) {
                  var S = f - n;
                  e((m = t).Pb), (m.wd = m.m), (m.xd = S), 0 < m.s.ua && O(m.s.Wa, m.s.vb), (m = u + ti);
                }
                if ((c & b || (y = wt(h, c, u)), e(null != y), y.Qb && ((r[f] = y.qb), (w = !0)), !w))
                  if ((_(l), y.jc)) {
                    (x = l), (S = r);
                    var P = f,
                      k = y.pd[L(x) & (Tr - 1)];
                    e(y.jc),
                      256 > k.g ? (A(x, x.u + k.g), (S[P] = k.value), (x = 0)) : (A(x, x.u + k.g - 256), e(256 <= k.value), (x = k.value)),
                      0 == x && (w = !0);
                  } else x = bt(y.G[0], y.H[0], l);
                if (l.h) break;
                if (w || 256 > x) {
                  if (!w)
                    if (y.nd) r[f] = (y.qb | (x << 8)) >>> 0;
                    else {
                      if ((_(l), (w = bt(y.G[1], y.H[1], l)), _(l), (S = bt(y.G[2], y.H[2], l)), (P = bt(y.G[3], y.H[3], l)), l.h)) break;
                      r[f] = ((P << 24) | (w << 16) | (x << 8) | S) >>> 0;
                    }
                  if (((w = !1), ++f, ++c >= i && ((c = 0), ++u, null != s && u <= a && !(u % 16) && s(t, u), null != v)))
                    for (; d < f; ) (x = r[d++]), (v.X[((506832829 * x) & 4294967295) >>> v.Mb] = x);
                } else if (280 > x) {
                  if (((x = mt(x - 256, l)), (S = bt(y.G[4], y.H[4], l)), _(l), (S = vt(i, (S = mt(S, l)))), l.h)) break;
                  if (f - n < S || o - f < x) break t;
                  for (P = 0; P < x; ++P) r[f + P] = r[f + P - S];
                  for (f += x, c += x; c >= i; ) (c -= i), ++u, null != s && u <= a && !(u % 16) && s(t, u);
                  if ((e(f <= o), c & b && (y = wt(h, c, u)), null != v))
                    for (; d < f; ) (x = r[d++]), (v.X[((506832829 * x) & 4294967295) >>> v.Mb] = x);
                } else {
                  if (!(x < g)) break t;
                  for (w = x - 280, e(null != v); d < f; ) (x = r[d++]), (v.X[((506832829 * x) & 4294967295) >>> v.Mb] = x);
                  (x = f), e(!(w >>> (S = v).Xa)), (r[x] = S.X[w]), (w = !0);
                }
                w || e(l.h == N(l));
              }
              if (t.Pb && l.h && f < o) e(t.m.h), (t.a = 5), (t.m = t.wd), (t.$ = t.xd), 0 < t.s.ua && O(t.s.vb, t.s.Wa);
              else {
                if (l.h) break t;
                null != s && s(t, u > a ? a : u), (t.a = 0), (t.$ = f - n);
              }
              return 1;
            }
            return (t.a = 3), 0;
          }
          function Pt(t) {
            e(null != t), (t.vc = null), (t.yc = null), (t.Ya = null);
            var r = t.Wa;
            null != r && (r.X = null), (t.vb = null), e(null != t);
          }
          function kt() {
            var e = new ar();
            return null == e
              ? null
              : ((e.a = 0),
                (e.xb = gi),
                rt("Predictor", "VP8LPredictors"),
                rt("Predictor", "VP8LPredictors_C"),
                rt("PredictorAdd", "VP8LPredictorsAdd"),
                rt("PredictorAdd", "VP8LPredictorsAdd_C"),
                (Gr = G),
                (Zr = X),
                (Qr = K),
                (tn = $),
                (en = Z),
                (rn = Q),
                (nn = tt),
                (t.VP8LMapColor32b = Xr),
                (t.VP8LMapColor8b = Kr),
                e);
          }
          function Ft(t, r, n, s, u) {
            var c = 1,
              f = [t],
              p = [r],
              g = s.m,
              m = s.s,
              v = null,
              b = 0;
            t: for (;;) {
              if (n)
                for (; c && y(g, 1); ) {
                  var w = f,
                    x = p,
                    N = s,
                    S = 1,
                    P = N.m,
                    k = N.gc[N.ab],
                    F = y(P, 2);
                  if (N.Oc & (1 << F)) c = 0;
                  else {
                    switch (((N.Oc |= 1 << F), (k.hc = F), (k.Ea = w[0]), (k.nc = x[0]), (k.K = [null]), ++N.ab, e(4 >= N.ab), F)) {
                      case 0:
                      case 1:
                        (k.b = y(P, 3) + 2), (S = Ft(B(k.Ea, k.b), B(k.nc, k.b), 0, N, k.K)), (k.K = k.K[0]);
                        break;
                      case 3:
                        var I,
                          C = y(P, 8) + 1,
                          E = 16 < C ? 0 : 4 < C ? 1 : 2 < C ? 2 : 3;
                        if (((w[0] = B(k.Ea, E)), (k.b = E), (I = S = Ft(C, 1, 0, N, k.K)))) {
                          var O,
                            M = C,
                            R = k,
                            q = 1 << (8 >> R.b),
                            D = o(q);
                          if (null == D) I = 0;
                          else {
                            var U = R.K[0],
                              z = R.w;
                            for (D[0] = R.K[0][0], O = 1; O < 1 * M; ++O) D[O] = T(U[z + O], D[O - 1]);
                            for (; O < 4 * q; ++O) D[O] = 0;
                            (R.K[0] = null), (R.K[0] = D), (I = 1);
                          }
                        }
                        S = I;
                        break;
                      case 2:
                        break;
                      default:
                        e(0);
                    }
                    c = S;
                  }
                }
              if (((f = f[0]), (p = p[0]), c && y(g, 1) && !(c = 1 <= (b = y(g, 4)) && 11 >= b))) {
                s.a = 3;
                break t;
              }
              var H;
              if ((H = c))
                e: {
                  var W,
                    V,
                    G,
                    Y = s,
                    X = f,
                    J = p,
                    K = b,
                    $ = n,
                    Z = Y.m,
                    Q = Y.s,
                    tt = [null],
                    et = 1,
                    rt = 0,
                    nt = Qn[K];
                  r: for (;;) {
                    if ($ && y(Z, 1)) {
                      var it = y(Z, 3) + 2,
                        ot = B(X, it),
                        at = B(J, it),
                        st = ot * at;
                      if (!Ft(ot, at, 0, Y, tt)) break r;
                      for (tt = tt[0], Q.xc = it, W = 0; W < st; ++W) {
                        var ut = (tt[W] >> 8) & 65535;
                        (tt[W] = ut), ut >= et && (et = ut + 1);
                      }
                    }
                    if (Z.h) break r;
                    for (V = 0; 5 > V; ++V) {
                      var ct = Jn[V];
                      !V && 0 < K && (ct += 1 << K), rt < ct && (rt = ct);
                    }
                    var lt = a(et * nt, h),
                      ht = et,
                      ft = a(ht, d);
                    if (null == ft) var dt = null;
                    else e(65536 >= ht), (dt = ft);
                    var pt = o(rt);
                    if (null == dt || null == pt || null == lt) {
                      Y.a = 1;
                      break r;
                    }
                    var gt = lt;
                    for (W = G = 0; W < et; ++W) {
                      var mt = dt[W],
                        vt = mt.G,
                        bt = mt.H,
                        wt = 0,
                        xt = 1,
                        Lt = 0;
                      for (V = 0; 5 > V; ++V) {
                        (ct = Jn[V]), (vt[V] = gt), (bt[V] = G), !V && 0 < K && (ct += 1 << K);
                        n: {
                          var Nt,
                            At = ct,
                            _t = Y,
                            kt = pt,
                            It = gt,
                            Ct = G,
                            Et = 0,
                            jt = _t.m,
                            Ot = y(jt, 1);
                          if ((i(kt, 0, 0, At), Ot)) {
                            var Mt = y(jt, 1) + 1,
                              Rt = y(jt, 1),
                              Bt = y(jt, 0 == Rt ? 1 : 8);
                            (kt[Bt] = 1), 2 == Mt && (kt[(Bt = y(jt, 8))] = 1);
                            var Tt = 1;
                          } else {
                            var qt = o(19),
                              Dt = y(jt, 4) + 4;
                            if (19 < Dt) {
                              _t.a = 3;
                              var Ut = 0;
                              break n;
                            }
                            for (Nt = 0; Nt < Dt; ++Nt) qt[$n[Nt]] = y(jt, 3);
                            var zt = void 0,
                              Ht = void 0,
                              Wt = _t,
                              Vt = qt,
                              Gt = At,
                              Yt = kt,
                              Xt = 0,
                              Jt = Wt.m,
                              Kt = 8,
                              $t = a(128, h);
                            i: for (; l($t, 0, 7, Vt, 19); ) {
                              if (y(Jt, 1)) {
                                var Zt = 2 + 2 * y(Jt, 3);
                                if ((zt = 2 + y(Jt, Zt)) > Gt) break i;
                              } else zt = Gt;
                              for (Ht = 0; Ht < Gt && zt--; ) {
                                _(Jt);
                                var Qt = $t[0 + (127 & L(Jt))];
                                A(Jt, Jt.u + Qt.g);
                                var te = Qt.value;
                                if (16 > te) (Yt[Ht++] = te), 0 != te && (Kt = te);
                                else {
                                  var ee = 16 == te,
                                    re = te - 16,
                                    ne = Xn[re],
                                    ie = y(Jt, Yn[re]) + ne;
                                  if (Ht + ie > Gt) break i;
                                  for (var oe = ee ? Kt : 0; 0 < ie--; ) Yt[Ht++] = oe;
                                }
                              }
                              Xt = 1;
                              break i;
                            }
                            Xt || (Wt.a = 3), (Tt = Xt);
                          }
                          (Tt = Tt && !jt.h) && (Et = l(It, Ct, 8, kt, At)), Tt && 0 != Et ? (Ut = Et) : ((_t.a = 3), (Ut = 0));
                        }
                        if (0 == Ut) break r;
                        if ((xt && 1 == Kn[V] && (xt = 0 == gt[G].g), (wt += gt[G].g), (G += Ut), 3 >= V)) {
                          var ae,
                            se = pt[0];
                          for (ae = 1; ae < ct; ++ae) pt[ae] > se && (se = pt[ae]);
                          Lt += se;
                        }
                      }
                      if (
                        ((mt.nd = xt),
                        (mt.Qb = 0),
                        xt &&
                          ((mt.qb = ((vt[3][bt[3] + 0].value << 24) | (vt[1][bt[1] + 0].value << 16) | vt[2][bt[2] + 0].value) >>> 0),
                          0 == wt && 256 > vt[0][bt[0] + 0].value && ((mt.Qb = 1), (mt.qb += vt[0][bt[0] + 0].value << 8))),
                        (mt.jc = !mt.Qb && 6 > Lt),
                        mt.jc)
                      ) {
                        var ue,
                          ce = mt;
                        for (ue = 0; ue < Tr; ++ue) {
                          var le = ue,
                            he = ce.pd[le],
                            fe = ce.G[0][ce.H[0] + le];
                          256 <= fe.value
                            ? ((he.g = fe.g + 256), (he.value = fe.value))
                            : ((he.g = 0),
                              (he.value = 0),
                              (le >>= yt(fe, 8, he)),
                              (le >>= yt(ce.G[1][ce.H[1] + le], 16, he)),
                              (le >>= yt(ce.G[2][ce.H[2] + le], 0, he)),
                              yt(ce.G[3][ce.H[3] + le], 24, he));
                        }
                      }
                    }
                    (Q.vc = tt), (Q.Wb = et), (Q.Ya = dt), (Q.yc = lt), (H = 1);
                    break e;
                  }
                  H = 0;
                }
              if (!(c = H)) {
                s.a = 3;
                break t;
              }
              if (0 < b) {
                if (((m.ua = 1 << b), !j(m.Wa, b))) {
                  (s.a = 1), (c = 0);
                  break t;
                }
              } else m.ua = 0;
              var de = s,
                pe = f,
                ge = p,
                me = de.s,
                ve = me.xc;
              if (((de.c = pe), (de.i = ge), (me.md = B(pe, ve)), (me.wc = 0 == ve ? -1 : (1 << ve) - 1), n)) {
                s.xb = pi;
                break t;
              }
              if (null == (v = o(f * p))) {
                (s.a = 1), (c = 0);
                break t;
              }
              c = (c = St(s, v, 0, f, p, p, null)) && !g.h;
              break t;
            }
            return c ? (null != u ? (u[0] = v) : (e(null == v), e(n)), (s.$ = 0), n || Pt(m)) : Pt(m), c;
          }
          function It(t, r) {
            var n = t.c * t.i,
              i = n + r + 16 * r;
            return (
              e(t.c <= r), (t.V = o(i)), null == t.V ? ((t.Ta = null), (t.Ua = 0), (t.a = 1), 0) : ((t.Ta = t.V), (t.Ua = t.Ba + n + r), 1)
            );
          }
          function Ct(t, r) {
            var n = t.C,
              i = r - n,
              o = t.V,
              a = t.Ba + t.c * n;
            for (e(r <= t.l.o); 0 < i; ) {
              var s = 16 < i ? 16 : i,
                u = t.l.ma,
                c = t.l.width,
                l = c * s,
                h = u.ca,
                f = u.tb + c * n,
                d = t.Ta,
                p = t.Ua;
              xt(t, s, o, a), Sn(d, p, h, f, l), At(u, n, n + s, h, f, c), (i -= s), (o += s * t.c), (n += s);
            }
            e(n == r), (t.C = t.Ma = r);
          }
          function Et() {
            this.ub = this.yd = this.td = this.Rb = 0;
          }
          function jt() {
            this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
          }
          function Ot() {
            (this.Fb = this.Bb = this.Cb = 0), (this.Zb = o(4)), (this.Lb = o(4));
          }
          function Mt() {
            this.Yb = (function () {
              var t = [];
              return (
                (function t(e, r, n) {
                  for (var i = n[r], o = 0; o < i && (e.push(n.length > r + 1 ? [] : 0), !(n.length < r + 1)); o++) t(e[o], r + 1, n);
                })(t, 0, [3, 11]),
                t
              );
            })();
          }
          function Rt() {
            (this.jb = o(3)), (this.Wc = s([4, 8], Mt)), (this.Xc = s([4, 17], Mt));
          }
          function Bt() {
            (this.Pc = this.wb = this.Tb = this.zd = 0), (this.vd = new o(4)), (this.od = new o(4));
          }
          function Tt() {
            this.ld = this.La = this.dd = this.tc = 0;
          }
          function qt() {
            this.Na = this.la = 0;
          }
          function Dt() {
            (this.Sc = [0, 0]), (this.Eb = [0, 0]), (this.Qc = [0, 0]), (this.ia = this.lc = 0);
          }
          function Ut() {
            (this.ad = o(384)), (this.Za = 0), (this.Ob = o(16)), (this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0);
          }
          function zt() {
            (this.uc = this.M = this.Nb = 0),
              (this.wa = Array(new Tt())),
              (this.Y = 0),
              (this.ya = Array(new Ut())),
              (this.aa = 0),
              (this.l = new Gt());
          }
          function Ht() {
            (this.y = o(16)), (this.f = o(8)), (this.ea = o(8));
          }
          function Wt() {
            (this.cb = this.a = 0),
              (this.sc = ""),
              (this.m = new w()),
              (this.Od = new Et()),
              (this.Kc = new jt()),
              (this.ed = new Bt()),
              (this.Qa = new Ot()),
              (this.Ic = this.$c = this.Aa = 0),
              (this.D = new zt()),
              (this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0),
              (this.Jc = a(8, w)),
              (this.ia = 0),
              (this.pb = a(4, Dt)),
              (this.Pa = new Rt()),
              (this.Bd = this.kc = 0),
              (this.Ac = []),
              (this.Bc = 0),
              (this.zc = [0, 0, 0, 0]),
              (this.Gd = Array(new Ht())),
              (this.Hd = 0),
              (this.rb = Array(new qt())),
              (this.sb = 0),
              (this.wa = Array(new Tt())),
              (this.Y = 0),
              (this.oc = []),
              (this.pc = 0),
              (this.sa = []),
              (this.ta = 0),
              (this.qa = []),
              (this.ra = 0),
              (this.Ha = []),
              (this.B = this.R = this.Ia = 0),
              (this.Ec = []),
              (this.M = this.ja = this.Vb = this.Fc = 0),
              (this.ya = Array(new Ut())),
              (this.L = this.aa = 0),
              (this.gd = s([4, 2], Tt)),
              (this.ga = null),
              (this.Fa = []),
              (this.Cc = this.qc = this.P = 0),
              (this.Gb = []),
              (this.Uc = 0),
              (this.mb = []),
              (this.nb = 0),
              (this.rc = []),
              (this.Ga = this.Vc = 0);
          }
          function Vt(t, e) {
            return 0 > t ? 0 : t > e ? e : t;
          }
          function Gt() {
            (this.T = this.U = this.ka = this.height = this.width = 0),
              (this.y = []),
              (this.f = []),
              (this.ea = []),
              (this.Rc = this.fa = this.W = this.N = this.O = 0),
              (this.ma = "void"),
              (this.put = "VP8IoPutHook"),
              (this.ac = "VP8IoSetupHook"),
              (this.bc = "VP8IoTeardownHook"),
              (this.ha = this.Kb = 0),
              (this.data = []),
              (this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0),
              (this.F = []),
              (this.J = 0);
          }
          function Yt() {
            var t = new Wt();
            return null != t && ((t.a = 0), (t.sc = "OK"), (t.cb = 0), (t.Xb = 0), ni || (ni = $t)), t;
          }
          function Xt(t, e, r) {
            return 0 == t.a && ((t.a = e), (t.sc = r), (t.cb = 0)), 0;
          }
          function Jt(t, e, r) {
            return 3 <= r && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2];
          }
          function Kt(t, r) {
            if (null == t) return 0;
            if (((t.a = 0), (t.sc = "OK"), null == r)) return Xt(t, 2, "null VP8Io passed to VP8GetHeaders()");
            var n = r.data,
              o = r.w,
              a = r.ha;
            if (4 > a) return Xt(t, 7, "Truncated header.");
            var s = n[o + 0] | (n[o + 1] << 8) | (n[o + 2] << 16),
              u = t.Od;
            if (((u.Rb = !(1 & s)), (u.td = (s >> 1) & 7), (u.yd = (s >> 4) & 1), (u.ub = s >> 5), 3 < u.td))
              return Xt(t, 3, "Incorrect keyframe parameters.");
            if (!u.yd) return Xt(t, 4, "Frame not displayable.");
            (o += 3), (a -= 3);
            var c = t.Kc;
            if (u.Rb) {
              if (7 > a) return Xt(t, 7, "cannot parse picture header");
              if (!Jt(n, o, a)) return Xt(t, 3, "Bad code word");
              (c.c = 16383 & ((n[o + 4] << 8) | n[o + 3])),
                (c.Td = n[o + 4] >> 6),
                (c.i = 16383 & ((n[o + 6] << 8) | n[o + 5])),
                (c.Ud = n[o + 6] >> 6),
                (o += 7),
                (a -= 7),
                (t.za = (c.c + 15) >> 4),
                (t.Ub = (c.i + 15) >> 4),
                (r.width = c.c),
                (r.height = c.i),
                (r.Da = 0),
                (r.j = 0),
                (r.v = 0),
                (r.va = r.width),
                (r.o = r.height),
                (r.da = 0),
                (r.ib = r.width),
                (r.hb = r.height),
                (r.U = r.width),
                (r.T = r.height),
                i((s = t.Pa).jb, 0, 255, s.jb.length),
                e(null != (s = t.Qa)),
                (s.Cb = 0),
                (s.Bb = 0),
                (s.Fb = 1),
                i(s.Zb, 0, 0, s.Zb.length),
                i(s.Lb, 0, 0, s.Lb);
            }
            if (u.ub > a) return Xt(t, 7, "bad partition length");
            p((s = t.m), n, o, u.ub), (o += u.ub), (a -= u.ub), u.Rb && ((c.Ld = P(s)), (c.Kd = P(s))), (c = t.Qa);
            var l,
              h = t.Pa;
            if ((e(null != s), e(null != c), (c.Cb = P(s)), c.Cb)) {
              if (((c.Bb = P(s)), P(s))) {
                for (c.Fb = P(s), l = 0; 4 > l; ++l) c.Zb[l] = P(s) ? m(s, 7) : 0;
                for (l = 0; 4 > l; ++l) c.Lb[l] = P(s) ? m(s, 6) : 0;
              }
              if (c.Bb) for (l = 0; 3 > l; ++l) h.jb[l] = P(s) ? g(s, 8) : 255;
            } else c.Bb = 0;
            if (s.Ka) return Xt(t, 3, "cannot parse segment header");
            if ((((c = t.ed).zd = P(s)), (c.Tb = g(s, 6)), (c.wb = g(s, 3)), (c.Pc = P(s)), c.Pc && P(s))) {
              for (h = 0; 4 > h; ++h) P(s) && (c.vd[h] = m(s, 6));
              for (h = 0; 4 > h; ++h) P(s) && (c.od[h] = m(s, 6));
            }
            if (((t.L = 0 == c.Tb ? 0 : c.zd ? 1 : 2), s.Ka)) return Xt(t, 3, "cannot parse filter header");
            var f = a;
            if (((a = l = o), (o = l + f), (c = f), (t.Xb = (1 << g(t.m, 2)) - 1), f < 3 * (h = t.Xb))) n = 7;
            else {
              for (l += 3 * h, c -= 3 * h, f = 0; f < h; ++f) {
                var d = n[a + 0] | (n[a + 1] << 8) | (n[a + 2] << 16);
                d > c && (d = c), p(t.Jc[+f], n, l, d), (l += d), (c -= d), (a += 3);
              }
              p(t.Jc[+h], n, l, c), (n = l < o ? 0 : 5);
            }
            if (0 != n) return Xt(t, n, "cannot parse partitions");
            for (
              n = g((l = t.m), 7),
                a = P(l) ? m(l, 4) : 0,
                o = P(l) ? m(l, 4) : 0,
                c = P(l) ? m(l, 4) : 0,
                h = P(l) ? m(l, 4) : 0,
                l = P(l) ? m(l, 4) : 0,
                f = t.Qa,
                d = 0;
              4 > d;
              ++d
            ) {
              if (f.Cb) {
                var v = f.Zb[d];
                f.Fb || (v += n);
              } else {
                if (0 < d) {
                  t.pb[d] = t.pb[0];
                  continue;
                }
                v = n;
              }
              var b = t.pb[d];
              (b.Sc[0] = ei[Vt(v + a, 127)]),
                (b.Sc[1] = ri[Vt(v + 0, 127)]),
                (b.Eb[0] = 2 * ei[Vt(v + o, 127)]),
                (b.Eb[1] = (101581 * ri[Vt(v + c, 127)]) >> 16),
                8 > b.Eb[1] && (b.Eb[1] = 8),
                (b.Qc[0] = ei[Vt(v + h, 117)]),
                (b.Qc[1] = ri[Vt(v + l, 127)]),
                (b.lc = v + l);
            }
            if (!u.Rb) return Xt(t, 4, "Not a key frame.");
            for (P(s), u = t.Pa, n = 0; 4 > n; ++n) {
              for (a = 0; 8 > a; ++a)
                for (o = 0; 3 > o; ++o)
                  for (c = 0; 11 > c; ++c) (h = k(s, ci[n][a][o][c]) ? g(s, 8) : si[n][a][o][c]), (u.Wc[n][a].Yb[o][c] = h);
              for (a = 0; 17 > a; ++a) u.Xc[n][a] = u.Wc[n][li[a]];
            }
            return (t.kc = P(s)), t.kc && (t.Bd = g(s, 8)), (t.cb = 1);
          }
          function $t(t, e, r, n, i, o, a) {
            var s = e[i].Yb[r];
            for (r = 0; 16 > i; ++i) {
              if (!k(t, s[r + 0])) return i;
              for (; !k(t, s[r + 1]); ) if (((s = e[++i].Yb[0]), (r = 0), 16 == i)) return 16;
              var u = e[i + 1].Yb;
              if (k(t, s[r + 2])) {
                var c = t,
                  l = 0;
                if (k(c, (f = s)[(h = r) + 3]))
                  if (k(c, f[h + 6])) {
                    for (s = 0, h = 2 * (l = k(c, f[h + 8])) + (f = k(c, f[h + 9 + l])), l = 0, f = ii[h]; f[s]; ++s) l += l + k(c, f[s]);
                    l += 3 + (8 << h);
                  } else k(c, f[h + 7]) ? ((l = 7 + 2 * k(c, 165)), (l += k(c, 145))) : (l = 5 + k(c, 159));
                else l = k(c, f[h + 4]) ? 3 + k(c, f[h + 5]) : 2;
                s = u[2];
              } else (l = 1), (s = u[1]);
              (u = a + oi[i]), 0 > (c = t).b && S(c);
              var h,
                f = c.b,
                d = ((h = c.Ca >> 1) - (c.I >> f)) >> 31;
              --c.b, (c.Ca += d), (c.Ca |= 1), (c.I -= ((h + 1) & d) << f), (o[u] = ((l ^ d) - d) * n[(0 < i) + 0]);
            }
            return 16;
          }
          function Zt(t) {
            var e = t.rb[t.sb - 1];
            (e.la = 0), (e.Na = 0), i(t.zc, 0, 0, t.zc.length), (t.ja = 0);
          }
          function Qt(t, r) {
            if (null == t) return 0;
            if (null == r) return Xt(t, 2, "NULL VP8Io parameter in VP8Decode().");
            if (!t.cb && !Kt(t, r)) return 0;
            if ((e(t.cb), null == r.ac || r.ac(r))) {
              r.ob && (t.L = 0);
              var s = qi[t.L];
              if (
                (2 == t.L
                  ? ((t.yb = 0), (t.zb = 0))
                  : ((t.yb = (r.v - s) >> 4), (t.zb = (r.j - s) >> 4), 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)),
                (t.Va = (r.o + 15 + s) >> 4),
                (t.Hb = (r.va + 15 + s) >> 4),
                t.Hb > t.za && (t.Hb = t.za),
                t.Va > t.Ub && (t.Va = t.Ub),
                0 < t.L)
              ) {
                var u = t.ed;
                for (s = 0; 4 > s; ++s) {
                  var c;
                  if (t.Qa.Cb) {
                    var l = t.Qa.Lb[s];
                    t.Qa.Fb || (l += u.Tb);
                  } else l = u.Tb;
                  for (c = 0; 1 >= c; ++c) {
                    var h = t.gd[s][c],
                      f = l;
                    if ((u.Pc && ((f += u.vd[0]), c && (f += u.od[0])), 0 < (f = 0 > f ? 0 : 63 < f ? 63 : f))) {
                      var d = f;
                      0 < u.wb && (d = 4 < u.wb ? d >> 2 : d >> 1) > 9 - u.wb && (d = 9 - u.wb),
                        1 > d && (d = 1),
                        (h.dd = d),
                        (h.tc = 2 * f + d),
                        (h.ld = 40 <= f ? 2 : 15 <= f ? 1 : 0);
                    } else h.tc = 0;
                    h.La = c;
                  }
                }
              }
              s = 0;
            } else Xt(t, 6, "Frame setup failed"), (s = t.a);
            if ((s = 0 == s)) {
              if (s) {
                (t.$c = 0), 0 < t.Aa || (t.Ic = Ui);
                t: {
                  (s = t.Ic), (u = 4 * (d = t.za));
                  var p = 32 * d,
                    g = d + 1,
                    m = 0 < t.L ? d * (0 < t.Aa ? 2 : 1) : 0,
                    v = (2 == t.Aa ? 2 : 1) * d;
                  if (
                    (h =
                      u + 832 + (c = ((3 * (16 * s + qi[t.L])) / 2) * p) + (l = null != t.Fa && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != h
                  )
                    s = 0;
                  else {
                    if (h > t.Vb) {
                      if (((t.Vb = 0), (t.Ec = o(h)), (t.Fc = 0), null == t.Ec)) {
                        s = Xt(t, 1, "no memory during frame initialization.");
                        break t;
                      }
                      t.Vb = h;
                    }
                    (h = t.Ec),
                      (f = t.Fc),
                      (t.Ac = h),
                      (t.Bc = f),
                      (f += u),
                      (t.Gd = a(p, Ht)),
                      (t.Hd = 0),
                      (t.rb = a(g + 1, qt)),
                      (t.sb = 1),
                      (t.wa = m ? a(m, Tt) : null),
                      (t.Y = 0),
                      (t.D.Nb = 0),
                      (t.D.wa = t.wa),
                      (t.D.Y = t.Y),
                      0 < t.Aa && (t.D.Y += d),
                      e(!0),
                      (t.oc = h),
                      (t.pc = f),
                      (f += 832),
                      (t.ya = a(v, Ut)),
                      (t.aa = 0),
                      (t.D.ya = t.ya),
                      (t.D.aa = t.aa),
                      2 == t.Aa && (t.D.aa += d),
                      (t.R = 16 * d),
                      (t.B = 8 * d),
                      (d = (p = qi[t.L]) * t.R),
                      (p = (p / 2) * t.B),
                      (t.sa = h),
                      (t.ta = f + d),
                      (t.qa = t.sa),
                      (t.ra = t.ta + 16 * s * t.R + p),
                      (t.Ha = t.qa),
                      (t.Ia = t.ra + 8 * s * t.B + p),
                      (t.$c = 0),
                      (f += c),
                      (t.mb = l ? h : null),
                      (t.nb = l ? f : null),
                      e(f + l <= t.Fc + t.Vb),
                      Zt(t),
                      i(t.Ac, t.Bc, 0, u),
                      (s = 1);
                  }
                }
                if (s) {
                  if (
                    ((r.ka = 0),
                    (r.y = t.sa),
                    (r.O = t.ta),
                    (r.f = t.qa),
                    (r.N = t.ra),
                    (r.ea = t.Ha),
                    (r.Vd = t.Ia),
                    (r.fa = t.R),
                    (r.Rc = t.B),
                    (r.F = null),
                    (r.J = 0),
                    !Cn)
                  ) {
                    for (s = -255; 255 >= s; ++s) Pn[255 + s] = 0 > s ? -s : s;
                    for (s = -1020; 1020 >= s; ++s) kn[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
                    for (s = -112; 112 >= s; ++s) Fn[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
                    for (s = -255; 510 >= s; ++s) In[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
                    Cn = 1;
                  }
                  (on = ce),
                    (an = oe),
                    (un = ae),
                    (cn = se),
                    (ln = ue),
                    (sn = ie),
                    (hn = Xe),
                    (fn = Je),
                    (dn = Ze),
                    (pn = Qe),
                    (gn = Ke),
                    (mn = $e),
                    (vn = tr),
                    (bn = er),
                    (yn = ze),
                    (wn = He),
                    (xn = We),
                    (Ln = Ve),
                    (fi[0] = Ae),
                    (fi[1] = he),
                    (fi[2] = Le),
                    (fi[3] = Ne),
                    (fi[4] = _e),
                    (fi[5] = Pe),
                    (fi[6] = Se),
                    (fi[7] = ke),
                    (fi[8] = Ie),
                    (fi[9] = Fe),
                    (hi[0] = ve),
                    (hi[1] = de),
                    (hi[2] = pe),
                    (hi[3] = ge),
                    (hi[4] = be),
                    (hi[5] = ye),
                    (hi[6] = we),
                    (di[0] = Oe),
                    (di[1] = fe),
                    (di[2] = Ce),
                    (di[3] = Ee),
                    (di[4] = Re),
                    (di[5] = Me),
                    (di[6] = Be),
                    (s = 1);
                } else s = 0;
              }
              s &&
                (s = (function (t, r) {
                  for (t.M = 0; t.M < t.Va; ++t.M) {
                    var a,
                      s = t.Jc[t.M & t.Xb],
                      u = t.m,
                      c = t;
                    for (a = 0; a < c.za; ++a) {
                      var l = u,
                        h = c,
                        f = h.Ac,
                        d = h.Bc + 4 * a,
                        p = h.zc,
                        g = h.ya[h.aa + a];
                      if (
                        (h.Qa.Bb ? (g.$b = k(l, h.Pa.jb[0]) ? 2 + k(l, h.Pa.jb[2]) : k(l, h.Pa.jb[1])) : (g.$b = 0),
                        h.kc && (g.Ad = k(l, h.Bd)),
                        (g.Za = !k(l, 145) + 0),
                        g.Za)
                      ) {
                        var m = g.Ob,
                          v = 0;
                        for (h = 0; 4 > h; ++h) {
                          var b,
                            y = p[0 + h];
                          for (b = 0; 4 > b; ++b) {
                            y = ui[f[d + b]][y];
                            for (var w = ai[k(l, y[0])]; 0 < w; ) w = ai[2 * w + k(l, y[w])];
                            (y = -w), (f[d + b] = y);
                          }
                          n(m, v, f, d, 4), (v += 4), (p[0 + h] = y);
                        }
                      } else (y = k(l, 156) ? (k(l, 128) ? 1 : 3) : k(l, 163) ? 2 : 0), (g.Ob[0] = y), i(f, d, y, 4), i(p, 0, y, 4);
                      g.Dd = k(l, 142) ? (k(l, 114) ? (k(l, 183) ? 1 : 3) : 2) : 0;
                    }
                    if (c.m.Ka) return Xt(t, 7, "Premature end-of-partition0 encountered.");
                    for (; t.ja < t.za; ++t.ja) {
                      if (((c = s), (l = (u = t).rb[u.sb - 1]), (f = u.rb[u.sb + u.ja]), (a = u.ya[u.aa + u.ja]), (d = u.kc ? a.Ad : 0)))
                        (l.la = f.la = 0), a.Za || (l.Na = f.Na = 0), (a.Hc = 0), (a.Gc = 0), (a.ia = 0);
                      else {
                        var x, L;
                        if (
                          ((l = f),
                          (f = c),
                          (d = u.Pa.Xc),
                          (p = u.ya[u.aa + u.ja]),
                          (g = u.pb[p.$b]),
                          (h = p.ad),
                          (m = 0),
                          (v = u.rb[u.sb - 1]),
                          (y = b = 0),
                          i(h, m, 0, 384),
                          p.Za)
                        )
                          var N = 0,
                            A = d[3];
                        else {
                          w = o(16);
                          var _ = l.Na + v.Na;
                          if (((_ = ni(f, d[1], _, g.Eb, 0, w, 0)), (l.Na = v.Na = (0 < _) + 0), 1 < _)) on(w, 0, h, m);
                          else {
                            var S = (w[0] + 3) >> 3;
                            for (w = 0; 256 > w; w += 16) h[m + w] = S;
                          }
                          (N = 1), (A = d[0]);
                        }
                        var P = 15 & l.la,
                          F = 15 & v.la;
                        for (w = 0; 4 > w; ++w) {
                          var I = 1 & F;
                          for (S = L = 0; 4 > S; ++S)
                            (P = (P >> 1) | ((I = (_ = ni(f, A, (_ = I + (1 & P)), g.Sc, N, h, m)) > N) << 7)),
                              (L = (L << 2) | (3 < _ ? 3 : 1 < _ ? 2 : 0 != h[m + 0])),
                              (m += 16);
                          (P >>= 4), (F = (F >> 1) | (I << 7)), (b = ((b << 8) | L) >>> 0);
                        }
                        for (A = P, N = F >> 4, x = 0; 4 > x; x += 2) {
                          for (L = 0, P = l.la >> (4 + x), F = v.la >> (4 + x), w = 0; 2 > w; ++w) {
                            for (I = 1 & F, S = 0; 2 > S; ++S)
                              (_ = I + (1 & P)),
                                (P = (P >> 1) | ((I = 0 < (_ = ni(f, d[2], _, g.Qc, 0, h, m))) << 3)),
                                (L = (L << 2) | (3 < _ ? 3 : 1 < _ ? 2 : 0 != h[m + 0])),
                                (m += 16);
                            (P >>= 2), (F = (F >> 1) | (I << 5));
                          }
                          (y |= L << (4 * x)), (A |= (P << 4) << x), (N |= (240 & F) << x);
                        }
                        (l.la = A), (v.la = N), (p.Hc = b), (p.Gc = y), (p.ia = 43690 & y ? 0 : g.ia), (d = !(b | y));
                      }
                      if ((0 < u.L && ((u.wa[u.Y + u.ja] = u.gd[a.$b][a.Za]), (u.wa[u.Y + u.ja].La |= !d)), c.Ka))
                        return Xt(t, 7, "Premature end-of-file encountered.");
                    }
                    if ((Zt(t), (u = r), (c = 1), (a = (s = t).D), (l = 0 < s.L && s.M >= s.zb && s.M <= s.Va), 0 == s.Aa))
                      t: {
                        if (
                          ((a.M = s.M),
                          (a.uc = l),
                          jr(s, a),
                          (c = 1),
                          (a = (L = s.D).Nb),
                          (l = (y = qi[s.L]) * s.R),
                          (f = (y / 2) * s.B),
                          (w = 16 * a * s.R),
                          (S = 8 * a * s.B),
                          (d = s.sa),
                          (p = s.ta - l + w),
                          (g = s.qa),
                          (h = s.ra - f + S),
                          (m = s.Ha),
                          (v = s.Ia - f + S),
                          (F = 0 == (P = L.M)),
                          (b = P >= s.Va - 1),
                          2 == s.Aa && jr(s, L),
                          L.uc)
                        )
                          for (I = (_ = s).D.M, e(_.D.uc), L = _.yb; L < _.Hb; ++L) {
                            (N = L), (A = I);
                            var C = (E = (U = _).D).Nb;
                            x = U.R;
                            var E = E.wa[E.Y + N],
                              j = U.sa,
                              O = U.ta + 16 * C * x + 16 * N,
                              M = E.dd,
                              R = E.tc;
                            if (0 != R)
                              if ((e(3 <= R), 1 == U.L))
                                0 < N && wn(j, O, x, R + 4), E.La && Ln(j, O, x, R), 0 < A && yn(j, O, x, R + 4), E.La && xn(j, O, x, R);
                              else {
                                var B = U.B,
                                  T = U.qa,
                                  q = U.ra + 8 * C * B + 8 * N,
                                  D = U.Ha,
                                  U = U.Ia + 8 * C * B + 8 * N;
                                (C = E.ld),
                                  0 < N && (fn(j, O, x, R + 4, M, C), pn(T, q, D, U, B, R + 4, M, C)),
                                  E.La && (mn(j, O, x, R, M, C), bn(T, q, D, U, B, R, M, C)),
                                  0 < A && (hn(j, O, x, R + 4, M, C), dn(T, q, D, U, B, R + 4, M, C)),
                                  E.La && (gn(j, O, x, R, M, C), vn(T, q, D, U, B, R, M, C));
                              }
                          }
                        if ((s.ia && alert("todo:DitherRow"), null != u.put)) {
                          if (
                            ((L = 16 * P),
                            (P = 16 * (P + 1)),
                            F
                              ? ((u.y = s.sa), (u.O = s.ta + w), (u.f = s.qa), (u.N = s.ra + S), (u.ea = s.Ha), (u.W = s.Ia + S))
                              : ((L -= y), (u.y = d), (u.O = p), (u.f = g), (u.N = h), (u.ea = m), (u.W = v)),
                            b || (P -= y),
                            P > u.o && (P = u.o),
                            (u.F = null),
                            (u.J = null),
                            null != s.Fa &&
                              0 < s.Fa.length &&
                              L < P &&
                              ((u.J = hr(s, u, L, P - L)), (u.F = s.mb), null == u.F && 0 == u.F.length))
                          ) {
                            c = Xt(s, 3, "Could not decode alpha data.");
                            break t;
                          }
                          L < u.j &&
                            ((y = u.j - L),
                            (L = u.j),
                            e(!(1 & y)),
                            (u.O += s.R * y),
                            (u.N += s.B * (y >> 1)),
                            (u.W += s.B * (y >> 1)),
                            null != u.F && (u.J += u.width * y)),
                            L < P &&
                              ((u.O += u.v),
                              (u.N += u.v >> 1),
                              (u.W += u.v >> 1),
                              null != u.F && (u.J += u.v),
                              (u.ka = L - u.j),
                              (u.U = u.va - u.v),
                              (u.T = P - L),
                              (c = u.put(u)));
                        }
                        a + 1 != s.Ic ||
                          b ||
                          (n(s.sa, s.ta - l, d, p + 16 * s.R, l),
                          n(s.qa, s.ra - f, g, h + 8 * s.B, f),
                          n(s.Ha, s.Ia - f, m, v + 8 * s.B, f));
                      }
                    if (!c) return Xt(t, 6, "Output aborted.");
                  }
                  return 1;
                })(t, r)),
                null != r.bc && r.bc(r),
                (s &= 1);
            }
            return s ? ((t.cb = 0), s) : 0;
          }
          function te(t, e, r, n, i) {
            (i = t[e + r + 32 * n] + (i >> 3)), (t[e + r + 32 * n] = -256 & i ? (0 > i ? 0 : 255) : i);
          }
          function ee(t, e, r, n, i, o) {
            te(t, e, 0, r, n + i), te(t, e, 1, r, n + o), te(t, e, 2, r, n - o), te(t, e, 3, r, n - i);
          }
          function re(t) {
            return ((20091 * t) >> 16) + t;
          }
          function ne(t, e, r, n) {
            var i,
              a = 0,
              s = o(16);
            for (i = 0; 4 > i; ++i) {
              var u = t[e + 0] + t[e + 8],
                c = t[e + 0] - t[e + 8],
                l = ((35468 * t[e + 4]) >> 16) - re(t[e + 12]),
                h = re(t[e + 4]) + ((35468 * t[e + 12]) >> 16);
              (s[a + 0] = u + h), (s[a + 1] = c + l), (s[a + 2] = c - l), (s[a + 3] = u - h), (a += 4), e++;
            }
            for (i = a = 0; 4 > i; ++i)
              (u = (t = s[a + 0] + 4) + s[a + 8]),
                (c = t - s[a + 8]),
                (l = ((35468 * s[a + 4]) >> 16) - re(s[a + 12])),
                te(r, n, 0, 0, u + (h = re(s[a + 4]) + ((35468 * s[a + 12]) >> 16))),
                te(r, n, 1, 0, c + l),
                te(r, n, 2, 0, c - l),
                te(r, n, 3, 0, u - h),
                a++,
                (n += 32);
          }
          function ie(t, e, r, n) {
            var i = t[e + 0] + 4,
              o = (35468 * t[e + 4]) >> 16,
              a = re(t[e + 4]),
              s = (35468 * t[e + 1]) >> 16;
            ee(r, n, 0, i + a, (t = re(t[e + 1])), s), ee(r, n, 1, i + o, t, s), ee(r, n, 2, i - o, t, s), ee(r, n, 3, i - a, t, s);
          }
          function oe(t, e, r, n, i) {
            ne(t, e, r, n), i && ne(t, e + 16, r, n + 4);
          }
          function ae(t, e, r, n) {
            an(t, e + 0, r, n, 1), an(t, e + 32, r, n + 128, 1);
          }
          function se(t, e, r, n) {
            var i;
            for (t = t[e + 0] + 4, i = 0; 4 > i; ++i) for (e = 0; 4 > e; ++e) te(r, n, e, i, t);
          }
          function ue(t, e, r, n) {
            t[e + 0] && cn(t, e + 0, r, n),
              t[e + 16] && cn(t, e + 16, r, n + 4),
              t[e + 32] && cn(t, e + 32, r, n + 128),
              t[e + 48] && cn(t, e + 48, r, n + 128 + 4);
          }
          function ce(t, e, r, n) {
            var i,
              a = o(16);
            for (i = 0; 4 > i; ++i) {
              var s = t[e + 0 + i] + t[e + 12 + i],
                u = t[e + 4 + i] + t[e + 8 + i],
                c = t[e + 4 + i] - t[e + 8 + i],
                l = t[e + 0 + i] - t[e + 12 + i];
              (a[0 + i] = s + u), (a[8 + i] = s - u), (a[4 + i] = l + c), (a[12 + i] = l - c);
            }
            for (i = 0; 4 > i; ++i)
              (s = (t = a[0 + 4 * i] + 3) + a[3 + 4 * i]),
                (u = a[1 + 4 * i] + a[2 + 4 * i]),
                (c = a[1 + 4 * i] - a[2 + 4 * i]),
                (l = t - a[3 + 4 * i]),
                (r[n + 0] = (s + u) >> 3),
                (r[n + 16] = (l + c) >> 3),
                (r[n + 32] = (s - u) >> 3),
                (r[n + 48] = (l - c) >> 3),
                (n += 64);
          }
          function le(t, e, r) {
            var n,
              i = e - 32,
              o = On,
              a = 255 - t[i - 1];
            for (n = 0; n < r; ++n) {
              var s,
                u = o,
                c = a + t[e - 1];
              for (s = 0; s < r; ++s) t[e + s] = u[c + t[i + s]];
              e += 32;
            }
          }
          function he(t, e) {
            le(t, e, 4);
          }
          function fe(t, e) {
            le(t, e, 8);
          }
          function de(t, e) {
            le(t, e, 16);
          }
          function pe(t, e) {
            var r;
            for (r = 0; 16 > r; ++r) n(t, e + 32 * r, t, e - 32, 16);
          }
          function ge(t, e) {
            var r;
            for (r = 16; 0 < r; --r) i(t, e, t[e - 1], 16), (e += 32);
          }
          function me(t, e, r) {
            var n;
            for (n = 0; 16 > n; ++n) i(e, r + 32 * n, t, 16);
          }
          function ve(t, e) {
            var r,
              n = 16;
            for (r = 0; 16 > r; ++r) n += t[e - 1 + 32 * r] + t[e + r - 32];
            me(n >> 5, t, e);
          }
          function be(t, e) {
            var r,
              n = 8;
            for (r = 0; 16 > r; ++r) n += t[e - 1 + 32 * r];
            me(n >> 4, t, e);
          }
          function ye(t, e) {
            var r,
              n = 8;
            for (r = 0; 16 > r; ++r) n += t[e + r - 32];
            me(n >> 4, t, e);
          }
          function we(t, e) {
            me(128, t, e);
          }
          function xe(t, e, r) {
            return (t + 2 * e + r + 2) >> 2;
          }
          function Le(t, e) {
            var r,
              i = e - 32;
            for (
              i = new Uint8Array([
                xe(t[i - 1], t[i + 0], t[i + 1]),
                xe(t[i + 0], t[i + 1], t[i + 2]),
                xe(t[i + 1], t[i + 2], t[i + 3]),
                xe(t[i + 2], t[i + 3], t[i + 4])
              ]),
                r = 0;
              4 > r;
              ++r
            )
              n(t, e + 32 * r, i, 0, i.length);
          }
          function Ne(t, e) {
            var r = t[e - 1],
              n = t[e - 1 + 32],
              i = t[e - 1 + 64],
              o = t[e - 1 + 96];
            F(t, e + 0, 16843009 * xe(t[e - 1 - 32], r, n)),
              F(t, e + 32, 16843009 * xe(r, n, i)),
              F(t, e + 64, 16843009 * xe(n, i, o)),
              F(t, e + 96, 16843009 * xe(i, o, o));
          }
          function Ae(t, e) {
            var r,
              n = 4;
            for (r = 0; 4 > r; ++r) n += t[e + r - 32] + t[e - 1 + 32 * r];
            for (n >>= 3, r = 0; 4 > r; ++r) i(t, e + 32 * r, n, 4);
          }
          function _e(t, e) {
            var r = t[e - 1 + 0],
              n = t[e - 1 + 32],
              i = t[e - 1 + 64],
              o = t[e - 1 - 32],
              a = t[e + 0 - 32],
              s = t[e + 1 - 32],
              u = t[e + 2 - 32],
              c = t[e + 3 - 32];
            (t[e + 0 + 96] = xe(n, i, t[e - 1 + 96])),
              (t[e + 1 + 96] = t[e + 0 + 64] = xe(r, n, i)),
              (t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = xe(o, r, n)),
              (t[e + 3 + 96] = t[e + 2 + 64] = t[e + 1 + 32] = t[e + 0 + 0] = xe(a, o, r)),
              (t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = xe(s, a, o)),
              (t[e + 3 + 32] = t[e + 2 + 0] = xe(u, s, a)),
              (t[e + 3 + 0] = xe(c, u, s));
          }
          function Se(t, e) {
            var r = t[e + 1 - 32],
              n = t[e + 2 - 32],
              i = t[e + 3 - 32],
              o = t[e + 4 - 32],
              a = t[e + 5 - 32],
              s = t[e + 6 - 32],
              u = t[e + 7 - 32];
            (t[e + 0 + 0] = xe(t[e + 0 - 32], r, n)),
              (t[e + 1 + 0] = t[e + 0 + 32] = xe(r, n, i)),
              (t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = xe(n, i, o)),
              (t[e + 3 + 0] = t[e + 2 + 32] = t[e + 1 + 64] = t[e + 0 + 96] = xe(i, o, a)),
              (t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = xe(o, a, s)),
              (t[e + 3 + 64] = t[e + 2 + 96] = xe(a, s, u)),
              (t[e + 3 + 96] = xe(s, u, u));
          }
          function Pe(t, e) {
            var r = t[e - 1 + 0],
              n = t[e - 1 + 32],
              i = t[e - 1 + 64],
              o = t[e - 1 - 32],
              a = t[e + 0 - 32],
              s = t[e + 1 - 32],
              u = t[e + 2 - 32],
              c = t[e + 3 - 32];
            (t[e + 0 + 0] = t[e + 1 + 64] = (o + a + 1) >> 1),
              (t[e + 1 + 0] = t[e + 2 + 64] = (a + s + 1) >> 1),
              (t[e + 2 + 0] = t[e + 3 + 64] = (s + u + 1) >> 1),
              (t[e + 3 + 0] = (u + c + 1) >> 1),
              (t[e + 0 + 96] = xe(i, n, r)),
              (t[e + 0 + 64] = xe(n, r, o)),
              (t[e + 0 + 32] = t[e + 1 + 96] = xe(r, o, a)),
              (t[e + 1 + 32] = t[e + 2 + 96] = xe(o, a, s)),
              (t[e + 2 + 32] = t[e + 3 + 96] = xe(a, s, u)),
              (t[e + 3 + 32] = xe(s, u, c));
          }
          function ke(t, e) {
            var r = t[e + 0 - 32],
              n = t[e + 1 - 32],
              i = t[e + 2 - 32],
              o = t[e + 3 - 32],
              a = t[e + 4 - 32],
              s = t[e + 5 - 32],
              u = t[e + 6 - 32],
              c = t[e + 7 - 32];
            (t[e + 0 + 0] = (r + n + 1) >> 1),
              (t[e + 1 + 0] = t[e + 0 + 64] = (n + i + 1) >> 1),
              (t[e + 2 + 0] = t[e + 1 + 64] = (i + o + 1) >> 1),
              (t[e + 3 + 0] = t[e + 2 + 64] = (o + a + 1) >> 1),
              (t[e + 0 + 32] = xe(r, n, i)),
              (t[e + 1 + 32] = t[e + 0 + 96] = xe(n, i, o)),
              (t[e + 2 + 32] = t[e + 1 + 96] = xe(i, o, a)),
              (t[e + 3 + 32] = t[e + 2 + 96] = xe(o, a, s)),
              (t[e + 3 + 64] = xe(a, s, u)),
              (t[e + 3 + 96] = xe(s, u, c));
          }
          function Fe(t, e) {
            var r = t[e - 1 + 0],
              n = t[e - 1 + 32],
              i = t[e - 1 + 64],
              o = t[e - 1 + 96];
            (t[e + 0 + 0] = (r + n + 1) >> 1),
              (t[e + 2 + 0] = t[e + 0 + 32] = (n + i + 1) >> 1),
              (t[e + 2 + 32] = t[e + 0 + 64] = (i + o + 1) >> 1),
              (t[e + 1 + 0] = xe(r, n, i)),
              (t[e + 3 + 0] = t[e + 1 + 32] = xe(n, i, o)),
              (t[e + 3 + 32] = t[e + 1 + 64] = xe(i, o, o)),
              (t[e + 3 + 64] = t[e + 2 + 64] = t[e + 0 + 96] = t[e + 1 + 96] = t[e + 2 + 96] = t[e + 3 + 96] = o);
          }
          function Ie(t, e) {
            var r = t[e - 1 + 0],
              n = t[e - 1 + 32],
              i = t[e - 1 + 64],
              o = t[e - 1 + 96],
              a = t[e - 1 - 32],
              s = t[e + 0 - 32],
              u = t[e + 1 - 32],
              c = t[e + 2 - 32];
            (t[e + 0 + 0] = t[e + 2 + 32] = (r + a + 1) >> 1),
              (t[e + 0 + 32] = t[e + 2 + 64] = (n + r + 1) >> 1),
              (t[e + 0 + 64] = t[e + 2 + 96] = (i + n + 1) >> 1),
              (t[e + 0 + 96] = (o + i + 1) >> 1),
              (t[e + 3 + 0] = xe(s, u, c)),
              (t[e + 2 + 0] = xe(a, s, u)),
              (t[e + 1 + 0] = t[e + 3 + 32] = xe(r, a, s)),
              (t[e + 1 + 32] = t[e + 3 + 64] = xe(n, r, a)),
              (t[e + 1 + 64] = t[e + 3 + 96] = xe(i, n, r)),
              (t[e + 1 + 96] = xe(o, i, n));
          }
          function Ce(t, e) {
            var r;
            for (r = 0; 8 > r; ++r) n(t, e + 32 * r, t, e - 32, 8);
          }
          function Ee(t, e) {
            var r;
            for (r = 0; 8 > r; ++r) i(t, e, t[e - 1], 8), (e += 32);
          }
          function je(t, e, r) {
            var n;
            for (n = 0; 8 > n; ++n) i(e, r + 32 * n, t, 8);
          }
          function Oe(t, e) {
            var r,
              n = 8;
            for (r = 0; 8 > r; ++r) n += t[e + r - 32] + t[e - 1 + 32 * r];
            je(n >> 4, t, e);
          }
          function Me(t, e) {
            var r,
              n = 4;
            for (r = 0; 8 > r; ++r) n += t[e + r - 32];
            je(n >> 3, t, e);
          }
          function Re(t, e) {
            var r,
              n = 4;
            for (r = 0; 8 > r; ++r) n += t[e - 1 + 32 * r];
            je(n >> 3, t, e);
          }
          function Be(t, e) {
            je(128, t, e);
          }
          function Te(t, e, r) {
            var n = t[e - r],
              i = t[e + 0],
              o = 3 * (i - n) + En[1020 + t[e - 2 * r] - t[e + r]],
              a = jn[112 + ((o + 4) >> 3)];
            (t[e - r] = On[255 + n + jn[112 + ((o + 3) >> 3)]]), (t[e + 0] = On[255 + i - a]);
          }
          function qe(t, e, r, n) {
            var i = t[e + 0],
              o = t[e + r];
            return Mn[255 + t[e - 2 * r] - t[e - r]] > n || Mn[255 + o - i] > n;
          }
          function De(t, e, r, n) {
            return 4 * Mn[255 + t[e - r] - t[e + 0]] + Mn[255 + t[e - 2 * r] - t[e + r]] <= n;
          }
          function Ue(t, e, r, n, i) {
            var o = t[e - 3 * r],
              a = t[e - 2 * r],
              s = t[e - r],
              u = t[e + 0],
              c = t[e + r],
              l = t[e + 2 * r],
              h = t[e + 3 * r];
            return 4 * Mn[255 + s - u] + Mn[255 + a - c] > n
              ? 0
              : Mn[255 + t[e - 4 * r] - o] <= i &&
                  Mn[255 + o - a] <= i &&
                  Mn[255 + a - s] <= i &&
                  Mn[255 + h - l] <= i &&
                  Mn[255 + l - c] <= i &&
                  Mn[255 + c - u] <= i;
          }
          function ze(t, e, r, n) {
            var i = 2 * n + 1;
            for (n = 0; 16 > n; ++n) De(t, e + n, r, i) && Te(t, e + n, r);
          }
          function He(t, e, r, n) {
            var i = 2 * n + 1;
            for (n = 0; 16 > n; ++n) De(t, e + n * r, 1, i) && Te(t, e + n * r, 1);
          }
          function We(t, e, r, n) {
            var i;
            for (i = 3; 0 < i; --i) ze(t, (e += 4 * r), r, n);
          }
          function Ve(t, e, r, n) {
            var i;
            for (i = 3; 0 < i; --i) He(t, (e += 4), r, n);
          }
          function Ge(t, e, r, n, i, o, a, s) {
            for (o = 2 * o + 1; 0 < i--; ) {
              if (Ue(t, e, r, o, a))
                if (qe(t, e, r, s)) Te(t, e, r);
                else {
                  var u = t,
                    c = e,
                    l = r,
                    h = u[c - 2 * l],
                    f = u[c - l],
                    d = u[c + 0],
                    p = u[c + l],
                    g = u[c + 2 * l],
                    m = (27 * (b = En[1020 + 3 * (d - f) + En[1020 + h - p]]) + 63) >> 7,
                    v = (18 * b + 63) >> 7,
                    b = (9 * b + 63) >> 7;
                  (u[c - 3 * l] = On[255 + u[c - 3 * l] + b]),
                    (u[c - 2 * l] = On[255 + h + v]),
                    (u[c - l] = On[255 + f + m]),
                    (u[c + 0] = On[255 + d - m]),
                    (u[c + l] = On[255 + p - v]),
                    (u[c + 2 * l] = On[255 + g - b]);
                }
              e += n;
            }
          }
          function Ye(t, e, r, n, i, o, a, s) {
            for (o = 2 * o + 1; 0 < i--; ) {
              if (Ue(t, e, r, o, a))
                if (qe(t, e, r, s)) Te(t, e, r);
                else {
                  var u = t,
                    c = e,
                    l = r,
                    h = u[c - l],
                    f = u[c + 0],
                    d = u[c + l],
                    p = jn[112 + ((4 + (g = 3 * (f - h))) >> 3)],
                    g = jn[112 + ((g + 3) >> 3)],
                    m = (p + 1) >> 1;
                  (u[c - 2 * l] = On[255 + u[c - 2 * l] + m]),
                    (u[c - l] = On[255 + h + g]),
                    (u[c + 0] = On[255 + f - p]),
                    (u[c + l] = On[255 + d - m]);
                }
              e += n;
            }
          }
          function Xe(t, e, r, n, i, o) {
            Ge(t, e, r, 1, 16, n, i, o);
          }
          function Je(t, e, r, n, i, o) {
            Ge(t, e, 1, r, 16, n, i, o);
          }
          function Ke(t, e, r, n, i, o) {
            var a;
            for (a = 3; 0 < a; --a) Ye(t, (e += 4 * r), r, 1, 16, n, i, o);
          }
          function $e(t, e, r, n, i, o) {
            var a;
            for (a = 3; 0 < a; --a) Ye(t, (e += 4), 1, r, 16, n, i, o);
          }
          function Ze(t, e, r, n, i, o, a, s) {
            Ge(t, e, i, 1, 8, o, a, s), Ge(r, n, i, 1, 8, o, a, s);
          }
          function Qe(t, e, r, n, i, o, a, s) {
            Ge(t, e, 1, i, 8, o, a, s), Ge(r, n, 1, i, 8, o, a, s);
          }
          function tr(t, e, r, n, i, o, a, s) {
            Ye(t, e + 4 * i, i, 1, 8, o, a, s), Ye(r, n + 4 * i, i, 1, 8, o, a, s);
          }
          function er(t, e, r, n, i, o, a, s) {
            Ye(t, e + 4, 1, i, 8, o, a, s), Ye(r, n + 4, 1, i, 8, o, a, s);
          }
          function rr() {
            (this.ba = new at()),
              (this.ec = []),
              (this.cc = []),
              (this.Mc = []),
              (this.Dc = this.Nc = this.dc = this.fc = 0),
              (this.Oa = new ut()),
              (this.memory = 0),
              (this.Ib = "OutputFunc"),
              (this.Jb = "OutputAlphaFunc"),
              (this.Nd = "OutputRowFunc");
          }
          function nr() {
            (this.data = []),
              (this.offset = this.kd = this.ha = this.w = 0),
              (this.na = []),
              (this.xa = this.gb = this.Ja = this.Sa = this.P = 0);
          }
          function ir() {
            (this.nc = this.Ea = this.b = this.hc = 0), (this.K = []), (this.w = 0);
          }
          function or() {
            (this.ua = 0),
              (this.Wa = new M()),
              (this.vb = new M()),
              (this.md = this.xc = this.wc = 0),
              (this.vc = []),
              (this.Wb = 0),
              (this.Ya = new d()),
              (this.yc = new h());
          }
          function ar() {
            (this.xb = this.a = 0),
              (this.l = new Gt()),
              (this.ca = new at()),
              (this.V = []),
              (this.Ba = 0),
              (this.Ta = []),
              (this.Ua = 0),
              (this.m = new x()),
              (this.Pb = 0),
              (this.wd = new x()),
              (this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0),
              (this.s = new or()),
              (this.ab = 0),
              (this.gc = a(4, ir)),
              (this.Oc = 0);
          }
          function sr() {
            (this.Lc = this.Z = this.$a = this.i = this.c = 0),
              (this.l = new Gt()),
              (this.ic = 0),
              (this.ca = []),
              (this.tb = 0),
              (this.qd = null),
              (this.rd = 0);
          }
          function ur(t, e, r, n, i, o, a) {
            for (t = null == t ? 0 : t[e + 0], e = 0; e < a; ++e) (i[o + e] = (t + r[n + e]) & 255), (t = i[o + e]);
          }
          function cr(t, e, r, n, i, o, a) {
            var s;
            if (null == t) ur(null, null, r, n, i, o, a);
            else for (s = 0; s < a; ++s) i[o + s] = (t[e + s] + r[n + s]) & 255;
          }
          function lr(t, e, r, n, i, o, a) {
            if (null == t) ur(null, null, r, n, i, o, a);
            else {
              var s,
                u = t[e + 0],
                c = u,
                l = u;
              for (s = 0; s < a; ++s)
                (c = l + (u = t[e + s]) - c), (l = (r[n + s] + (-256 & c ? (0 > c ? 0 : 255) : c)) & 255), (c = u), (i[o + s] = l);
            }
          }
          function hr(t, r, i, a) {
            var s = r.width,
              u = r.o;
            if ((e(null != t && null != r), 0 > i || 0 >= a || i + a > u)) return null;
            if (!t.Cc) {
              if (null == t.ga) {
                var c;
                if (
                  ((t.ga = new sr()),
                  (c = null == t.ga) ||
                    ((c = r.width * r.o),
                    e(0 == t.Gb.length),
                    (t.Gb = o(c)),
                    (t.Uc = 0),
                    null == t.Gb ? (c = 0) : ((t.mb = t.Gb), (t.nb = t.Uc), (t.rc = null), (c = 1)),
                    (c = !c)),
                  !c)
                ) {
                  c = t.ga;
                  var l = t.Fa,
                    h = t.P,
                    f = t.qc,
                    d = t.mb,
                    p = t.nb,
                    g = h + 1,
                    m = f - 1,
                    b = c.l;
                  if (
                    (e(null != l && null != d && null != r),
                    (mi[0] = null),
                    (mi[1] = ur),
                    (mi[2] = cr),
                    (mi[3] = lr),
                    (c.ca = d),
                    (c.tb = p),
                    (c.c = r.width),
                    (c.i = r.height),
                    e(0 < c.c && 0 < c.i),
                    1 >= f)
                  )
                    r = 0;
                  else if (
                    ((c.$a = (l[h + 0] >> 0) & 3),
                    (c.Z = (l[h + 0] >> 2) & 3),
                    (c.Lc = (l[h + 0] >> 4) & 3),
                    (h = (l[h + 0] >> 6) & 3),
                    0 > c.$a || 1 < c.$a || 4 <= c.Z || 1 < c.Lc || h)
                  )
                    r = 0;
                  else if (
                    ((b.put = dt),
                    (b.ac = ft),
                    (b.bc = pt),
                    (b.ma = c),
                    (b.width = r.width),
                    (b.height = r.height),
                    (b.Da = r.Da),
                    (b.v = r.v),
                    (b.va = r.va),
                    (b.j = r.j),
                    (b.o = r.o),
                    c.$a)
                  )
                    t: {
                      e(1 == c.$a), (r = kt());
                      e: for (;;) {
                        if (null == r) {
                          r = 0;
                          break t;
                        }
                        if (
                          (e(null != c),
                          (c.mc = r),
                          (r.c = c.c),
                          (r.i = c.i),
                          (r.l = c.l),
                          (r.l.ma = c),
                          (r.l.width = c.c),
                          (r.l.height = c.i),
                          (r.a = 0),
                          v(r.m, l, g, m),
                          !Ft(c.c, c.i, 1, r, null))
                        )
                          break e;
                        if (
                          (1 == r.ab && 3 == r.gc[0].hc && Nt(r.s)
                            ? ((c.ic = 1),
                              (l = r.c * r.i),
                              (r.Ta = null),
                              (r.Ua = 0),
                              (r.V = o(l)),
                              (r.Ba = 0),
                              null == r.V ? ((r.a = 1), (r = 0)) : (r = 1))
                            : ((c.ic = 0), (r = It(r, c.c))),
                          !r)
                        )
                          break e;
                        r = 1;
                        break t;
                      }
                      (c.mc = null), (r = 0);
                    }
                  else r = m >= c.c * c.i;
                  c = !r;
                }
                if (c) return null;
                1 != t.ga.Lc ? (t.Ga = 0) : (a = u - i);
              }
              e(null != t.ga), e(i + a <= u);
              t: {
                if (((r = (l = t.ga).c), (u = l.l.o), 0 == l.$a)) {
                  if (
                    ((g = t.rc),
                    (m = t.Vc),
                    (b = t.Fa),
                    (h = t.P + 1 + i * r),
                    (f = t.mb),
                    (d = t.nb + i * r),
                    e(h <= t.P + t.qc),
                    0 != l.Z)
                  )
                    for (e(null != mi[l.Z]), c = 0; c < a; ++c) mi[l.Z](g, m, b, h, f, d, r), (g = f), (m = d), (d += r), (h += r);
                  else for (c = 0; c < a; ++c) n(f, d, b, h, r), (g = f), (m = d), (d += r), (h += r);
                  (t.rc = g), (t.Vc = m);
                } else {
                  if ((e(null != l.mc), (r = i + a), e(null != (c = l.mc)), e(r <= c.i), c.C >= r)) r = 1;
                  else if ((l.ic || mr(), l.ic)) {
                    (l = c.V), (g = c.Ba), (m = c.c);
                    var y = c.i,
                      w = ((b = 1), (h = c.$ / m), (f = c.$ % m), (d = c.m), (p = c.s), c.$),
                      x = m * y,
                      L = m * r,
                      A = p.wc,
                      S = w < L ? wt(p, f, h) : null;
                    e(w <= x), e(r <= y), e(Nt(p));
                    e: for (;;) {
                      for (; !d.h && w < L; ) {
                        if ((f & A || (S = wt(p, f, h)), e(null != S), _(d), 256 > (y = bt(S.G[0], S.H[0], d))))
                          (l[g + w] = y), ++w, ++f >= m && ((f = 0), ++h <= r && !(h % 16) && _t(c, h));
                        else {
                          if (!(280 > y)) {
                            b = 0;
                            break e;
                          }
                          y = mt(y - 256, d);
                          var P,
                            k = bt(S.G[4], S.H[4], d);
                          if ((_(d), !(w >= (k = vt(m, (k = mt(k, d)))) && x - w >= y))) {
                            b = 0;
                            break e;
                          }
                          for (P = 0; P < y; ++P) l[g + w + P] = l[g + w + P - k];
                          for (w += y, f += y; f >= m; ) (f -= m), ++h <= r && !(h % 16) && _t(c, h);
                          w < L && f & A && (S = wt(p, f, h));
                        }
                        e(d.h == N(d));
                      }
                      _t(c, h > r ? r : h);
                      break e;
                    }
                    !b || (d.h && w < x) ? ((b = 0), (c.a = d.h ? 5 : 3)) : (c.$ = w), (r = b);
                  } else r = St(c, c.V, c.Ba, c.c, c.i, r, Ct);
                  if (!r) {
                    a = 0;
                    break t;
                  }
                }
                i + a >= u && (t.Cc = 1), (a = 1);
              }
              if (!a) return null;
              if (t.Cc && (null != (a = t.ga) && (a.mc = null), (t.ga = null), 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
            }
            return t.nb + i * s;
          }
          function fr(t, e, r, n, i, o) {
            for (; 0 < i--; ) {
              var a,
                s = t,
                u = e + (r ? 1 : 0),
                c = t,
                l = e + (r ? 0 : 3);
              for (a = 0; a < n; ++a) {
                var h = c[l + 4 * a];
                255 != h &&
                  ((h *= 32897),
                  (s[u + 4 * a + 0] = (s[u + 4 * a + 0] * h) >> 23),
                  (s[u + 4 * a + 1] = (s[u + 4 * a + 1] * h) >> 23),
                  (s[u + 4 * a + 2] = (s[u + 4 * a + 2] * h) >> 23));
              }
              e += o;
            }
          }
          function dr(t, e, r, n, i) {
            for (; 0 < n--; ) {
              var o;
              for (o = 0; o < r; ++o) {
                var a = t[e + 2 * o + 0],
                  s = 15 & (c = t[e + 2 * o + 1]),
                  u = 4369 * s,
                  c = (((240 & c) | (c >> 4)) * u) >> 16;
                (t[e + 2 * o + 0] = (((((240 & a) | (a >> 4)) * u) >> 16) & 240) | ((((((15 & a) | (a << 4)) * u) >> 16) >> 4) & 15)),
                  (t[e + 2 * o + 1] = (240 & c) | s);
              }
              e += i;
            }
          }
          function pr(t, e, r, n, i, o, a, s) {
            var u,
              c,
              l = 255;
            for (c = 0; c < i; ++c) {
              for (u = 0; u < n; ++u) {
                var h = t[e + u];
                (o[a + 4 * u] = h), (l &= h);
              }
              (e += r), (a += s);
            }
            return 255 != l;
          }
          function gr(t, e, r, n, i) {
            var o;
            for (o = 0; o < i; ++o) r[n + o] = t[e + o] >> 8;
          }
          function mr() {
            (Nn = fr), (An = dr), (_n = pr), (Sn = gr);
          }
          function vr(r, n, i) {
            t[r] = function (t, r, o, a, s, u, c, l, h, f, d, p, g, m, v, b, y) {
              var w,
                x = (y - 1) >> 1,
                L = s[u + 0] | (c[l + 0] << 16),
                N = h[f + 0] | (d[p + 0] << 16);
              e(null != t);
              var A = (3 * L + N + 131074) >> 2;
              for (
                n(t[r + 0], 255 & A, A >> 16, g, m),
                  null != o && ((A = (3 * N + L + 131074) >> 2), n(o[a + 0], 255 & A, A >> 16, v, b)),
                  w = 1;
                w <= x;
                ++w
              ) {
                var _ = s[u + w] | (c[l + w] << 16),
                  S = h[f + w] | (d[p + w] << 16),
                  P = L + _ + N + S + 524296,
                  k = (P + 2 * (_ + N)) >> 3;
                (A = (k + L) >> 1),
                  (L = ((P = (P + 2 * (L + S)) >> 3) + _) >> 1),
                  n(t[r + 2 * w - 1], 255 & A, A >> 16, g, m + (2 * w - 1) * i),
                  n(t[r + 2 * w - 0], 255 & L, L >> 16, g, m + (2 * w - 0) * i),
                  null != o &&
                    ((A = (P + N) >> 1),
                    (L = (k + S) >> 1),
                    n(o[a + 2 * w - 1], 255 & A, A >> 16, v, b + (2 * w - 1) * i),
                    n(o[a + 2 * w + 0], 255 & L, L >> 16, v, b + (2 * w + 0) * i)),
                  (L = _),
                  (N = S);
              }
              1 & y ||
                ((A = (3 * L + N + 131074) >> 2),
                n(t[r + y - 1], 255 & A, A >> 16, g, m + (y - 1) * i),
                null != o && ((A = (3 * N + L + 131074) >> 2), n(o[a + y - 1], 255 & A, A >> 16, v, b + (y - 1) * i)));
            };
          }
          function br() {
            (vi[Rn] = bi),
              (vi[Bn] = wi),
              (vi[Tn] = yi),
              (vi[qn] = xi),
              (vi[Dn] = Li),
              (vi[Un] = Ni),
              (vi[zn] = Ai),
              (vi[Hn] = wi),
              (vi[Wn] = xi),
              (vi[Vn] = Li),
              (vi[Gn] = Ni);
          }
          function yr(t) {
            return t & ~Ii ? (0 > t ? 0 : 255) : t >> Fi;
          }
          function wr(t, e) {
            return yr(((19077 * t) >> 8) + ((26149 * e) >> 8) - 14234);
          }
          function xr(t, e, r) {
            return yr(((19077 * t) >> 8) - ((6419 * e) >> 8) - ((13320 * r) >> 8) + 8708);
          }
          function Lr(t, e) {
            return yr(((19077 * t) >> 8) + ((33050 * e) >> 8) - 17685);
          }
          function Nr(t, e, r, n, i) {
            (n[i + 0] = wr(t, r)), (n[i + 1] = xr(t, e, r)), (n[i + 2] = Lr(t, e));
          }
          function Ar(t, e, r, n, i) {
            (n[i + 0] = Lr(t, e)), (n[i + 1] = xr(t, e, r)), (n[i + 2] = wr(t, r));
          }
          function _r(t, e, r, n, i) {
            var o = xr(t, e, r);
            (e = ((o << 3) & 224) | (Lr(t, e) >> 3)), (n[i + 0] = (248 & wr(t, r)) | (o >> 5)), (n[i + 1] = e);
          }
          function Sr(t, e, r, n, i) {
            var o = (240 & Lr(t, e)) | 15;
            (n[i + 0] = (240 & wr(t, r)) | (xr(t, e, r) >> 4)), (n[i + 1] = o);
          }
          function Pr(t, e, r, n, i) {
            (n[i + 0] = 255), Nr(t, e, r, n, i + 1);
          }
          function kr(t, e, r, n, i) {
            Ar(t, e, r, n, i), (n[i + 3] = 255);
          }
          function Fr(t, e, r, n, i) {
            Nr(t, e, r, n, i), (n[i + 3] = 255);
          }
          function Vt(t, e) {
            return 0 > t ? 0 : t > e ? e : t;
          }
          function Ir(e, r, n) {
            t[e] = function (t, e, i, o, a, s, u, c, l) {
              for (var h = c + (-2 & l) * n; c != h; )
                r(t[e + 0], i[o + 0], a[s + 0], u, c), r(t[e + 1], i[o + 0], a[s + 0], u, c + n), (e += 2), ++o, ++s, (c += 2 * n);
              1 & l && r(t[e + 0], i[o + 0], a[s + 0], u, c);
            };
          }
          function Cr(t, e, r) {
            return 0 == r ? (0 == t ? (0 == e ? 6 : 5) : 0 == e ? 4 : 0) : r;
          }
          function Er(t, e, r, n, i) {
            switch (t >>> 30) {
              case 3:
                an(e, r, n, i, 0);
                break;
              case 2:
                sn(e, r, n, i);
                break;
              case 1:
                cn(e, r, n, i);
            }
          }
          function jr(t, e) {
            var r,
              o,
              a = e.M,
              s = e.Nb,
              u = t.oc,
              c = t.pc + 40,
              l = t.oc,
              h = t.pc + 584,
              f = t.oc,
              d = t.pc + 600;
            for (r = 0; 16 > r; ++r) u[c + 32 * r - 1] = 129;
            for (r = 0; 8 > r; ++r) (l[h + 32 * r - 1] = 129), (f[d + 32 * r - 1] = 129);
            for (
              0 < a
                ? (u[c - 1 - 32] = l[h - 1 - 32] = f[d - 1 - 32] = 129)
                : (i(u, c - 32 - 1, 127, 21), i(l, h - 32 - 1, 127, 9), i(f, d - 32 - 1, 127, 9)),
                o = 0;
              o < t.za;
              ++o
            ) {
              var p = e.ya[e.aa + o];
              if (0 < o) {
                for (r = -1; 16 > r; ++r) n(u, c + 32 * r - 4, u, c + 32 * r + 12, 4);
                for (r = -1; 8 > r; ++r) n(l, h + 32 * r - 4, l, h + 32 * r + 4, 4), n(f, d + 32 * r - 4, f, d + 32 * r + 4, 4);
              }
              var g = t.Gd,
                m = t.Hd + o,
                v = p.ad,
                b = p.Hc;
              if ((0 < a && (n(u, c - 32, g[m].y, 0, 16), n(l, h - 32, g[m].f, 0, 8), n(f, d - 32, g[m].ea, 0, 8)), p.Za)) {
                var y = u,
                  w = c - 32 + 16;
                for (0 < a && (o >= t.za - 1 ? i(y, w, g[m].y[15], 4) : n(y, w, g[m + 1].y, 0, 4)), r = 0; 4 > r; r++)
                  y[w + 128 + r] = y[w + 256 + r] = y[w + 384 + r] = y[w + 0 + r];
                for (r = 0; 16 > r; ++r, b <<= 2) (y = u), (w = c + Ti[r]), fi[p.Ob[r]](y, w), Er(b, v, 16 * +r, y, w);
              } else if (((y = Cr(o, a, p.Ob[0])), hi[y](u, c), 0 != b)) for (r = 0; 16 > r; ++r, b <<= 2) Er(b, v, 16 * +r, u, c + Ti[r]);
              for (
                r = p.Gc,
                  y = Cr(o, a, p.Dd),
                  di[y](l, h),
                  di[y](f, d),
                  b = v,
                  y = l,
                  w = h,
                  255 & (p = r >> 0) && (170 & p ? un(b, 256, y, w) : ln(b, 256, y, w)),
                  p = f,
                  b = d,
                  255 & (r >>= 8) && (170 & r ? un(v, 320, p, b) : ln(v, 320, p, b)),
                  a < t.Ub - 1 && (n(g[m].y, 0, u, c + 480, 16), n(g[m].f, 0, l, h + 224, 8), n(g[m].ea, 0, f, d + 224, 8)),
                  r = 8 * s * t.B,
                  g = t.sa,
                  m = t.ta + 16 * o + 16 * s * t.R,
                  v = t.qa,
                  p = t.ra + 8 * o + r,
                  b = t.Ha,
                  y = t.Ia + 8 * o + r,
                  r = 0;
                16 > r;
                ++r
              )
                n(g, m + r * t.R, u, c + 32 * r, 16);
              for (r = 0; 8 > r; ++r) n(v, p + r * t.B, l, h + 32 * r, 8), n(b, y + r * t.B, f, d + 32 * r, 8);
            }
          }
          function Or(t, n, i, o, a, s, u, c, l) {
            var h = [0],
              f = [0],
              d = 0,
              p = null != l ? l.kd : 0,
              g = null != l ? l : new nr();
            if (null == t || 12 > i) return 7;
            (g.data = t), (g.w = n), (g.ha = i), (n = [n]), (i = [i]), (g.gb = [g.gb]);
            t: {
              var m = n,
                b = i,
                y = g.gb;
              if ((e(null != t), e(null != b), e(null != y), (y[0] = 0), 12 <= b[0] && !r(t, m[0], "RIFF"))) {
                if (r(t, m[0] + 8, "WEBP")) {
                  y = 3;
                  break t;
                }
                var w = E(t, m[0] + 4);
                if (12 > w || 4294967286 < w) {
                  y = 3;
                  break t;
                }
                if (p && w > b[0] - 8) {
                  y = 7;
                  break t;
                }
                (y[0] = w), (m[0] += 12), (b[0] -= 12);
              }
              y = 0;
            }
            if (0 != y) return y;
            for (w = 0 < g.gb[0], i = i[0]; ; ) {
              t: {
                var L = t;
                (b = n), (y = i);
                var N = h,
                  A = f,
                  _ = (m = [0]);
                if ((((k = d = [d])[0] = 0), 8 > y[0])) y = 7;
                else {
                  if (!r(L, b[0], "VP8X")) {
                    if (10 != E(L, b[0] + 4)) {
                      y = 3;
                      break t;
                    }
                    if (18 > y[0]) {
                      y = 7;
                      break t;
                    }
                    var S = E(L, b[0] + 8),
                      P = 1 + C(L, b[0] + 12);
                    if (2147483648 <= P * (L = 1 + C(L, b[0] + 15))) {
                      y = 3;
                      break t;
                    }
                    null != _ && (_[0] = S), null != N && (N[0] = P), null != A && (A[0] = L), (b[0] += 18), (y[0] -= 18), (k[0] = 1);
                  }
                  y = 0;
                }
              }
              if (((d = d[0]), (m = m[0]), 0 != y)) return y;
              if (((b = !!(2 & m)), !w && d)) return 3;
              if (
                (null != s && (s[0] = !!(16 & m)),
                null != u && (u[0] = b),
                null != c && (c[0] = 0),
                (u = h[0]),
                (m = f[0]),
                d && b && null == l)
              ) {
                y = 0;
                break;
              }
              if (4 > i) {
                y = 7;
                break;
              }
              if ((w && d) || (!w && !d && !r(t, n[0], "ALPH"))) {
                (i = [i]), (g.na = [g.na]), (g.P = [g.P]), (g.Sa = [g.Sa]);
                t: {
                  (S = t), (y = n), (w = i);
                  var k = g.gb;
                  (N = g.na), (A = g.P), (_ = g.Sa), (P = 22), e(null != S), e(null != w), (L = y[0]);
                  var F = w[0];
                  for (e(null != N), e(null != _), N[0] = null, A[0] = null, _[0] = 0; ; ) {
                    if (((y[0] = L), (w[0] = F), 8 > F)) {
                      y = 7;
                      break t;
                    }
                    var I = E(S, L + 4);
                    if (4294967286 < I) {
                      y = 3;
                      break t;
                    }
                    var j = (8 + I + 1) & -2;
                    if (((P += j), 0 < k && P > k)) {
                      y = 3;
                      break t;
                    }
                    if (!r(S, L, "VP8 ") || !r(S, L, "VP8L")) {
                      y = 0;
                      break t;
                    }
                    if (F[0] < j) {
                      y = 7;
                      break t;
                    }
                    r(S, L, "ALPH") || ((N[0] = S), (A[0] = L + 8), (_[0] = I)), (L += j), (F -= j);
                  }
                }
                if (((i = i[0]), (g.na = g.na[0]), (g.P = g.P[0]), (g.Sa = g.Sa[0]), 0 != y)) break;
              }
              (i = [i]), (g.Ja = [g.Ja]), (g.xa = [g.xa]);
              t: if (
                ((k = t),
                (y = n),
                (w = i),
                (N = g.gb[0]),
                (A = g.Ja),
                (_ = g.xa),
                (S = y[0]),
                (L = !r(k, S, "VP8 ")),
                (P = !r(k, S, "VP8L")),
                e(null != k),
                e(null != w),
                e(null != A),
                e(null != _),
                8 > w[0])
              )
                y = 7;
              else {
                if (L || P) {
                  if (((k = E(k, S + 4)), 12 <= N && k > N - 12)) {
                    y = 3;
                    break t;
                  }
                  if (p && k > w[0] - 8) {
                    y = 7;
                    break t;
                  }
                  (A[0] = k), (y[0] += 8), (w[0] -= 8), (_[0] = P);
                } else (_[0] = 5 <= w[0] && 47 == k[S + 0] && !(k[S + 4] >> 5)), (A[0] = w[0]);
                y = 0;
              }
              if (((i = i[0]), (g.Ja = g.Ja[0]), (g.xa = g.xa[0]), (n = n[0]), 0 != y)) break;
              if (4294967286 < g.Ja) return 3;
              if ((null == c || b || (c[0] = g.xa ? 2 : 1), (u = [u]), (m = [m]), g.xa)) {
                if (5 > i) {
                  y = 7;
                  break;
                }
                (c = u),
                  (p = m),
                  (b = s),
                  null == t || 5 > i
                    ? (t = 0)
                    : 5 <= i && 47 == t[n + 0] && !(t[n + 4] >> 5)
                    ? ((w = [0]),
                      (k = [0]),
                      (N = [0]),
                      v((A = new x()), t, n, i),
                      gt(A, w, k, N)
                        ? (null != c && (c[0] = w[0]), null != p && (p[0] = k[0]), null != b && (b[0] = N[0]), (t = 1))
                        : (t = 0))
                    : (t = 0);
              } else {
                if (10 > i) {
                  y = 7;
                  break;
                }
                (c = m),
                  null == t || 10 > i || !Jt(t, n + 3, i - 3)
                    ? (t = 0)
                    : ((p = t[n + 0] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                      (b = 16383 & ((t[n + 7] << 8) | t[n + 6])),
                      (t = 16383 & ((t[n + 9] << 8) | t[n + 8])),
                      1 & p || 3 < ((p >> 1) & 7) || !((p >> 4) & 1) || p >> 5 >= g.Ja || !b || !t
                        ? (t = 0)
                        : (u && (u[0] = b), c && (c[0] = t), (t = 1)));
              }
              if (!t) return 3;
              if (((u = u[0]), (m = m[0]), d && (h[0] != u || f[0] != m))) return 3;
              null != l && ((l[0] = g), (l.offset = n - l.w), e(4294967286 > n - l.w), e(l.offset == l.ha - i));
              break;
            }
            return 0 == y || (7 == y && d && null == l)
              ? (null != s && (s[0] |= null != g.na && 0 < g.na.length), null != o && (o[0] = u), null != a && (a[0] = m), 0)
              : y;
          }
          function Mr(t, e, r) {
            var n = e.width,
              i = e.height,
              o = 0,
              a = 0,
              s = n,
              u = i;
            if (
              ((e.Da = null != t && 0 < t.Da),
              e.Da &&
                ((s = t.cd),
                (u = t.bd),
                (o = t.v),
                (a = t.j),
                11 > r || ((o &= -2), (a &= -2)),
                0 > o || 0 > a || 0 >= s || 0 >= u || o + s > n || a + u > i))
            )
              return 0;
            if (((e.v = o), (e.j = a), (e.va = o + s), (e.o = a + u), (e.U = s), (e.T = u), (e.da = null != t && 0 < t.da), e.da)) {
              if (!R(s, u, (r = [t.ib]), (o = [t.hb]))) return 0;
              (e.ib = r[0]), (e.hb = o[0]);
            }
            return (
              (e.ob = null != t && t.ob),
              (e.Kb = null == t || !t.Sd),
              e.da && ((e.ob = e.ib < (3 * n) / 4 && e.hb < (3 * i) / 4), (e.Kb = 0)),
              1
            );
          }
          function Rr(t) {
            if (null == t) return 2;
            if (11 > t.S) {
              var e = t.f.RGBA;
              (e.fb += (t.height - 1) * e.A), (e.A = -e.A);
            } else
              (e = t.f.kb),
                (t = t.height),
                (e.O += (t - 1) * e.fa),
                (e.fa = -e.fa),
                (e.N += ((t - 1) >> 1) * e.Ab),
                (e.Ab = -e.Ab),
                (e.W += ((t - 1) >> 1) * e.Db),
                (e.Db = -e.Db),
                null != e.F && ((e.J += (t - 1) * e.lb), (e.lb = -e.lb));
            return 0;
          }
          function Br(t, e, r, n) {
            if (null == n || 0 >= t || 0 >= e) return 2;
            if (null != r) {
              if (r.Da) {
                var i = r.cd,
                  a = r.bd,
                  s = -2 & r.v,
                  u = -2 & r.j;
                if (0 > s || 0 > u || 0 >= i || 0 >= a || s + i > t || u + a > e) return 2;
                (t = i), (e = a);
              }
              if (r.da) {
                if (!R(t, e, (i = [r.ib]), (a = [r.hb]))) return 2;
                (t = i[0]), (e = a[0]);
              }
            }
            (n.width = t), (n.height = e);
            t: {
              var c = n.width,
                l = n.height;
              if (((t = n.S), 0 >= c || 0 >= l || !(t >= Rn && 13 > t))) t = 2;
              else {
                if (0 >= n.Rd && null == n.sd) {
                  s = a = i = e = 0;
                  var h = (u = c * zi[t]) * l;
                  if ((11 > t || ((a = ((l + 1) / 2) * (e = (c + 1) / 2)), 12 == t && (s = (i = c) * l)), null == (l = o(h + 2 * a + s)))) {
                    t = 1;
                    break t;
                  }
                  (n.sd = l),
                    11 > t
                      ? (((c = n.f.RGBA).eb = l), (c.fb = 0), (c.A = u), (c.size = h))
                      : (((c = n.f.kb).y = l),
                        (c.O = 0),
                        (c.fa = u),
                        (c.Fd = h),
                        (c.f = l),
                        (c.N = 0 + h),
                        (c.Ab = e),
                        (c.Cd = a),
                        (c.ea = l),
                        (c.W = 0 + h + a),
                        (c.Db = e),
                        (c.Ed = a),
                        12 == t && ((c.F = l), (c.J = 0 + h + 2 * a)),
                        (c.Tc = s),
                        (c.lb = i));
                }
                if (((e = 1), (i = n.S), (a = n.width), (s = n.height), i >= Rn && 13 > i))
                  if (11 > i)
                    (t = n.f.RGBA), (e &= (u = Math.abs(t.A)) * (s - 1) + a <= t.size), (e &= u >= a * zi[i]), (e &= null != t.eb);
                  else {
                    (t = n.f.kb), (u = (a + 1) / 2), (h = (s + 1) / 2), (c = Math.abs(t.fa)), (l = Math.abs(t.Ab));
                    var f = Math.abs(t.Db),
                      d = Math.abs(t.lb),
                      p = d * (s - 1) + a;
                    (e &= c * (s - 1) + a <= t.Fd),
                      (e &= l * (h - 1) + u <= t.Cd),
                      (e = (e &= f * (h - 1) + u <= t.Ed) & (c >= a) & (l >= u) & (f >= u)),
                      (e &= null != t.y),
                      (e &= null != t.f),
                      (e &= null != t.ea),
                      12 == i && ((e &= d >= a), (e &= p <= t.Tc), (e &= null != t.F));
                  }
                else e = 0;
                t = e ? 0 : 2;
              }
            }
            return 0 != t || (null != r && r.fd && (t = Rr(n))), t;
          }
          var Tr = 64,
            qr = [
              0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151,
              4194303, 8388607, 16777215
            ],
            Dr = 24,
            Ur = 32,
            zr = 8,
            Hr = [
              0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
              5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
              6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
              6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
              7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
              7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
              7, 7, 7, 7
            ];
          q("Predictor0", "PredictorAdd0"),
            (t.Predictor0 = function () {
              return 4278190080;
            }),
            (t.Predictor1 = function (t) {
              return t;
            }),
            (t.Predictor2 = function (t, e, r) {
              return e[r + 0];
            }),
            (t.Predictor3 = function (t, e, r) {
              return e[r + 1];
            }),
            (t.Predictor4 = function (t, e, r) {
              return e[r - 1];
            }),
            (t.Predictor5 = function (t, e, r) {
              return U(U(t, e[r + 1]), e[r + 0]);
            }),
            (t.Predictor6 = function (t, e, r) {
              return U(t, e[r - 1]);
            }),
            (t.Predictor7 = function (t, e, r) {
              return U(t, e[r + 0]);
            }),
            (t.Predictor8 = function (t, e, r) {
              return U(e[r - 1], e[r + 0]);
            }),
            (t.Predictor9 = function (t, e, r) {
              return U(e[r + 0], e[r + 1]);
            }),
            (t.Predictor10 = function (t, e, r) {
              return U(U(t, e[r - 1]), U(e[r + 0], e[r + 1]));
            }),
            (t.Predictor11 = function (t, e, r) {
              var n = e[r + 0];
              return 0 >=
                W((n >> 24) & 255, (t >> 24) & 255, ((e = e[r - 1]) >> 24) & 255) +
                  W((n >> 16) & 255, (t >> 16) & 255, (e >> 16) & 255) +
                  W((n >> 8) & 255, (t >> 8) & 255, (e >> 8) & 255) +
                  W(255 & n, 255 & t, 255 & e)
                ? n
                : t;
            }),
            (t.Predictor12 = function (t, e, r) {
              var n = e[r + 0];
              return (
                ((z(((t >> 24) & 255) + ((n >> 24) & 255) - (((e = e[r - 1]) >> 24) & 255)) << 24) |
                  (z(((t >> 16) & 255) + ((n >> 16) & 255) - ((e >> 16) & 255)) << 16) |
                  (z(((t >> 8) & 255) + ((n >> 8) & 255) - ((e >> 8) & 255)) << 8) |
                  z((255 & t) + (255 & n) - (255 & e))) >>>
                0
              );
            }),
            (t.Predictor13 = function (t, e, r) {
              var n = e[r - 1];
              return (
                ((H(((t = U(t, e[r + 0])) >> 24) & 255, (n >> 24) & 255) << 24) |
                  (H((t >> 16) & 255, (n >> 16) & 255) << 16) |
                  (H((t >> 8) & 255, (n >> 8) & 255) << 8) |
                  H((t >> 0) & 255, (n >> 0) & 255)) >>>
                0
              );
            });
          var Wr = t.PredictorAdd0;
          (t.PredictorAdd1 = V),
            q("Predictor2", "PredictorAdd2"),
            q("Predictor3", "PredictorAdd3"),
            q("Predictor4", "PredictorAdd4"),
            q("Predictor5", "PredictorAdd5"),
            q("Predictor6", "PredictorAdd6"),
            q("Predictor7", "PredictorAdd7"),
            q("Predictor8", "PredictorAdd8"),
            q("Predictor9", "PredictorAdd9"),
            q("Predictor10", "PredictorAdd10"),
            q("Predictor11", "PredictorAdd11"),
            q("Predictor12", "PredictorAdd12"),
            q("Predictor13", "PredictorAdd13");
          var Vr = t.PredictorAdd2;
          J(
            "ColorIndexInverseTransform",
            "MapARGB",
            "32b",
            function (t) {
              return (t >> 8) & 255;
            },
            function (t) {
              return t;
            }
          ),
            J(
              "VP8LColorIndexInverseTransformAlpha",
              "MapAlpha",
              "8b",
              function (t) {
                return t;
              },
              function (t) {
                return (t >> 8) & 255;
              }
            );
          var Gr,
            Yr = t.ColorIndexInverseTransform,
            Xr = t.MapARGB,
            Jr = t.VP8LColorIndexInverseTransformAlpha,
            Kr = t.MapAlpha,
            $r = (t.VP8LPredictorsAdd = []);
          ($r.length = 16),
            ((t.VP8LPredictors = []).length = 16),
            ((t.VP8LPredictorsAdd_C = []).length = 16),
            ((t.VP8LPredictors_C = []).length = 16);
          var Zr,
            Qr,
            tn,
            en,
            rn,
            nn,
            on,
            an,
            sn,
            un,
            cn,
            ln,
            hn,
            fn,
            dn,
            pn,
            gn,
            mn,
            vn,
            bn,
            yn,
            wn,
            xn,
            Ln,
            Nn,
            An,
            _n,
            Sn,
            Pn = o(511),
            kn = o(2041),
            Fn = o(225),
            In = o(767),
            Cn = 0,
            En = kn,
            jn = Fn,
            On = In,
            Mn = Pn,
            Rn = 0,
            Bn = 1,
            Tn = 2,
            qn = 3,
            Dn = 4,
            Un = 5,
            zn = 6,
            Hn = 7,
            Wn = 8,
            Vn = 9,
            Gn = 10,
            Yn = [2, 3, 7],
            Xn = [3, 3, 11],
            Jn = [280, 256, 256, 256, 40],
            Kn = [0, 1, 1, 1, 0],
            $n = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            Zn = [
              24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74,
              36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34,
              46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63,
              99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112
            ],
            Qn = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
            ti = 8,
            ei = [
              4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29,
              30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
              59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
              89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138,
              140, 143, 145, 148, 151, 154, 157
            ],
            ri = [
              4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
              37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76,
              78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137,
              140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225,
              229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284
            ],
            ni = null,
            ii = [
              [173, 148, 140, 0],
              [176, 155, 140, 135, 0],
              [180, 157, 141, 134, 130, 0],
              [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
            ],
            oi = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
            ai = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
            si = [
              [
                [
                  [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                  [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                  [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                ],
                [
                  [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
                  [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
                  [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
                ],
                [
                  [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
                  [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
                  [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
                ],
                [
                  [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
                  [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
                  [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
                ],
                [
                  [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
                  [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
                  [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
                ],
                [
                  [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
                  [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
                  [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
                ],
                [
                  [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
                  [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
                  [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
                ],
                [
                  [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                ]
              ],
              [
                [
                  [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
                  [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
                  [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
                ],
                [
                  [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
                  [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
                  [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
                ],
                [
                  [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
                  [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
                  [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
                ],
                [
                  [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
                  [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
                  [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
                ],
                [
                  [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
                  [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
                  [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
                ],
                [
                  [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
                  [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
                  [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
                ],
                [
                  [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
                  [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
                  [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
                ],
                [
                  [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
                  [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                  [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
                ]
              ],
              [
                [
                  [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
                  [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
                  [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
                ],
                [
                  [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
                  [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
                  [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
                ],
                [
                  [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
                  [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
                  [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
                ],
                [
                  [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
                  [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
                  [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
                ],
                [
                  [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                  [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
                  [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                ],
                [
                  [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                ],
                [
                  [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
                  [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
                  [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                ],
                [
                  [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                  [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                  [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                ]
              ],
              [
                [
                  [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
                  [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
                  [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
                ],
                [
                  [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
                  [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
                  [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
                ],
                [
                  [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
                  [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
                  [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
                ],
                [
                  [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
                  [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
                  [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
                ],
                [
                  [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
                  [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
                  [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
                ],
                [
                  [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
                  [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
                  [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
                ],
                [
                  [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
                  [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
                  [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
                ],
                [
                  [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                ]
              ]
            ],
            ui = [
              [
                [231, 120, 48, 89, 115, 113, 120, 152, 112],
                [152, 179, 64, 126, 170, 118, 46, 70, 95],
                [175, 69, 143, 80, 85, 82, 72, 155, 103],
                [56, 58, 10, 171, 218, 189, 17, 13, 152],
                [114, 26, 17, 163, 44, 195, 21, 10, 173],
                [121, 24, 80, 195, 26, 62, 44, 64, 85],
                [144, 71, 10, 38, 171, 213, 144, 34, 26],
                [170, 46, 55, 19, 136, 160, 33, 206, 71],
                [63, 20, 8, 114, 114, 208, 12, 9, 226],
                [81, 40, 11, 96, 182, 84, 29, 16, 36]
              ],
              [
                [134, 183, 89, 137, 98, 101, 106, 165, 148],
                [72, 187, 100, 130, 157, 111, 32, 75, 80],
                [66, 102, 167, 99, 74, 62, 40, 234, 128],
                [41, 53, 9, 178, 241, 141, 26, 8, 107],
                [74, 43, 26, 146, 73, 166, 49, 23, 157],
                [65, 38, 105, 160, 51, 52, 31, 115, 128],
                [104, 79, 12, 27, 217, 255, 87, 17, 7],
                [87, 68, 71, 44, 114, 51, 15, 186, 23],
                [47, 41, 14, 110, 182, 183, 21, 17, 194],
                [66, 45, 25, 102, 197, 189, 23, 18, 22]
              ],
              [
                [88, 88, 147, 150, 42, 46, 45, 196, 205],
                [43, 97, 183, 117, 85, 38, 35, 179, 61],
                [39, 53, 200, 87, 26, 21, 43, 232, 171],
                [56, 34, 51, 104, 114, 102, 29, 93, 77],
                [39, 28, 85, 171, 58, 165, 90, 98, 64],
                [34, 22, 116, 206, 23, 34, 43, 166, 73],
                [107, 54, 32, 26, 51, 1, 81, 43, 31],
                [68, 25, 106, 22, 64, 171, 36, 225, 114],
                [34, 19, 21, 102, 132, 188, 16, 76, 124],
                [62, 18, 78, 95, 85, 57, 50, 48, 51]
              ],
              [
                [193, 101, 35, 159, 215, 111, 89, 46, 111],
                [60, 148, 31, 172, 219, 228, 21, 18, 111],
                [112, 113, 77, 85, 179, 255, 38, 120, 114],
                [40, 42, 1, 196, 245, 209, 10, 25, 109],
                [88, 43, 29, 140, 166, 213, 37, 43, 154],
                [61, 63, 30, 155, 67, 45, 68, 1, 209],
                [100, 80, 8, 43, 154, 1, 51, 26, 71],
                [142, 78, 78, 16, 255, 128, 34, 197, 171],
                [41, 40, 5, 102, 211, 183, 4, 1, 221],
                [51, 50, 17, 168, 209, 192, 23, 25, 82]
              ],
              [
                [138, 31, 36, 171, 27, 166, 38, 44, 229],
                [67, 87, 58, 169, 82, 115, 26, 59, 179],
                [63, 59, 90, 180, 59, 166, 93, 73, 154],
                [40, 40, 21, 116, 143, 209, 34, 39, 175],
                [47, 15, 16, 183, 34, 223, 49, 45, 183],
                [46, 17, 33, 183, 6, 98, 15, 32, 183],
                [57, 46, 22, 24, 128, 1, 54, 17, 37],
                [65, 32, 73, 115, 28, 128, 23, 128, 205],
                [40, 3, 9, 115, 51, 192, 18, 6, 223],
                [87, 37, 9, 115, 59, 77, 64, 21, 47]
              ],
              [
                [104, 55, 44, 218, 9, 54, 53, 130, 226],
                [64, 90, 70, 205, 40, 41, 23, 26, 57],
                [54, 57, 112, 184, 5, 41, 38, 166, 213],
                [30, 34, 26, 133, 152, 116, 10, 32, 134],
                [39, 19, 53, 221, 26, 114, 32, 73, 255],
                [31, 9, 65, 234, 2, 15, 1, 118, 73],
                [75, 32, 12, 51, 192, 255, 160, 43, 51],
                [88, 31, 35, 67, 102, 85, 55, 186, 85],
                [56, 21, 23, 111, 59, 205, 45, 37, 192],
                [55, 38, 70, 124, 73, 102, 1, 34, 98]
              ],
              [
                [125, 98, 42, 88, 104, 85, 117, 175, 82],
                [95, 84, 53, 89, 128, 100, 113, 101, 45],
                [75, 79, 123, 47, 51, 128, 81, 171, 1],
                [57, 17, 5, 71, 102, 57, 53, 41, 49],
                [38, 33, 13, 121, 57, 73, 26, 1, 85],
                [41, 10, 67, 138, 77, 110, 90, 47, 114],
                [115, 21, 2, 10, 102, 255, 166, 23, 6],
                [101, 29, 16, 10, 85, 128, 101, 196, 26],
                [57, 18, 10, 102, 102, 213, 34, 20, 43],
                [117, 20, 15, 36, 163, 128, 68, 1, 26]
              ],
              [
                [102, 61, 71, 37, 34, 53, 31, 243, 192],
                [69, 60, 71, 38, 73, 119, 28, 222, 37],
                [68, 45, 128, 34, 1, 47, 11, 245, 171],
                [62, 17, 19, 70, 146, 85, 55, 62, 70],
                [37, 43, 37, 154, 100, 163, 85, 160, 1],
                [63, 9, 92, 136, 28, 64, 32, 201, 85],
                [75, 15, 9, 9, 64, 255, 184, 119, 16],
                [86, 6, 28, 5, 64, 255, 25, 248, 1],
                [56, 8, 17, 132, 137, 255, 55, 116, 128],
                [58, 15, 20, 82, 135, 57, 26, 121, 40]
              ],
              [
                [164, 50, 31, 137, 154, 133, 25, 35, 218],
                [51, 103, 44, 131, 131, 123, 31, 6, 158],
                [86, 40, 64, 135, 148, 224, 45, 183, 128],
                [22, 26, 17, 131, 240, 154, 14, 1, 209],
                [45, 16, 21, 91, 64, 222, 7, 1, 197],
                [56, 21, 39, 155, 60, 138, 23, 102, 213],
                [83, 12, 13, 54, 192, 255, 68, 47, 28],
                [85, 26, 85, 85, 128, 128, 32, 146, 171],
                [18, 11, 7, 63, 144, 171, 4, 4, 246],
                [35, 27, 10, 146, 174, 171, 12, 26, 128]
              ],
              [
                [190, 80, 35, 99, 180, 80, 126, 54, 45],
                [85, 126, 47, 87, 176, 51, 41, 20, 32],
                [101, 75, 128, 139, 118, 146, 116, 128, 85],
                [56, 41, 15, 176, 236, 85, 37, 9, 62],
                [71, 30, 17, 119, 118, 255, 17, 18, 138],
                [101, 38, 60, 138, 55, 70, 43, 26, 142],
                [146, 36, 19, 30, 171, 255, 97, 27, 20],
                [138, 45, 61, 62, 219, 1, 81, 188, 64],
                [32, 41, 20, 117, 151, 142, 20, 21, 163],
                [112, 19, 12, 61, 195, 128, 48, 4, 24]
              ]
            ],
            ci = [
              [
                [
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                  [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                  [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
                  [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
                  [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ]
              ],
              [
                [
                  [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
                  [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
                ],
                [
                  [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                  [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ]
              ],
              [
                [
                  [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
                  [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
                  [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
                ],
                [
                  [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ]
              ],
              [
                [
                  [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
                  [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                  [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                  [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                  [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                  [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                  [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                  [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ],
                [
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                ]
              ]
            ],
            li = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
            hi = [],
            fi = [],
            di = [],
            pi = 1,
            gi = 2,
            mi = [],
            vi = [];
          vr("UpsampleRgbLinePair", Nr, 3),
            vr("UpsampleBgrLinePair", Ar, 3),
            vr("UpsampleRgbaLinePair", Fr, 4),
            vr("UpsampleBgraLinePair", kr, 4),
            vr("UpsampleArgbLinePair", Pr, 4),
            vr("UpsampleRgba4444LinePair", Sr, 2),
            vr("UpsampleRgb565LinePair", _r, 2);
          var bi = t.UpsampleRgbLinePair,
            yi = t.UpsampleBgrLinePair,
            wi = t.UpsampleRgbaLinePair,
            xi = t.UpsampleBgraLinePair,
            Li = t.UpsampleArgbLinePair,
            Ni = t.UpsampleRgba4444LinePair,
            Ai = t.UpsampleRgb565LinePair,
            _i = 16,
            Si = 1 << (_i - 1),
            Pi = -227,
            ki = 482,
            Fi = 6,
            Ii = (256 << Fi) - 1,
            Ci = 0,
            Ei = o(256),
            ji = o(256),
            Oi = o(256),
            Mi = o(256),
            Ri = o(ki - Pi),
            Bi = o(ki - Pi);
          Ir("YuvToRgbRow", Nr, 3),
            Ir("YuvToBgrRow", Ar, 3),
            Ir("YuvToRgbaRow", Fr, 4),
            Ir("YuvToBgraRow", kr, 4),
            Ir("YuvToArgbRow", Pr, 4),
            Ir("YuvToRgba4444Row", Sr, 2),
            Ir("YuvToRgb565Row", _r, 2);
          var Ti = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
            qi = [0, 2, 8],
            Di = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
            Ui = 1;
          this.WebPDecodeRGBA = function (t, r, n, i, o) {
            var a = Bn,
              s = new rr(),
              u = new at();
            (s.ba = u), (u.S = a), (u.width = [u.width]), (u.height = [u.height]);
            var c = u.width,
              l = u.height,
              h = new st();
            if (null == h || null == t) var f = 2;
            else e(null != h), (f = Or(t, r, n, h.width, h.height, h.Pd, h.Qd, h.format, null));
            if ((0 != f ? (c = 0) : (null != c && (c[0] = h.width[0]), null != l && (l[0] = h.height[0]), (c = 1)), c)) {
              (u.width = u.width[0]), (u.height = u.height[0]), null != i && (i[0] = u.width), null != o && (o[0] = u.height);
              t: {
                if (
                  ((i = new Gt()),
                  ((o = new nr()).data = t),
                  (o.w = r),
                  (o.ha = n),
                  (o.kd = 1),
                  (r = [0]),
                  e(null != o),
                  (0 == (t = Or(o.data, o.w, o.ha, null, null, null, r, null, o)) || 7 == t) && r[0] && (t = 4),
                  0 == (r = t))
                ) {
                  if (
                    (e(null != s),
                    (i.data = o.data),
                    (i.w = o.w + o.offset),
                    (i.ha = o.ha - o.offset),
                    (i.put = dt),
                    (i.ac = ft),
                    (i.bc = pt),
                    (i.ma = s),
                    o.xa)
                  ) {
                    if (null == (t = kt())) {
                      s = 1;
                      break t;
                    }
                    if (
                      (function (t, r) {
                        var n = [0],
                          i = [0],
                          o = [0];
                        e: for (;;) {
                          if (null == t) return 0;
                          if (null == r) return (t.a = 2), 0;
                          if (((t.l = r), (t.a = 0), v(t.m, r.data, r.w, r.ha), !gt(t.m, n, i, o))) {
                            t.a = 3;
                            break e;
                          }
                          if (((t.xb = gi), (r.width = n[0]), (r.height = i[0]), !Ft(n[0], i[0], 1, t, null))) break e;
                          return 1;
                        }
                        return e(0 != t.a), 0;
                      })(t, i)
                    ) {
                      if ((i = 0 == (r = Br(i.width, i.height, s.Oa, s.ba)))) {
                        e: {
                          i = t;
                          r: for (;;) {
                            if (null == i) {
                              i = 0;
                              break e;
                            }
                            if (
                              (e(null != i.s.yc), e(null != i.s.Ya), e(0 < i.s.Wb), e(null != (n = i.l)), e(null != (o = n.ma)), 0 != i.xb)
                            ) {
                              if (((i.ca = o.ba), (i.tb = o.tb), e(null != i.ca), !Mr(o.Oa, n, qn))) {
                                i.a = 2;
                                break r;
                              }
                              if (!It(i, n.width)) break r;
                              if (n.da) break r;
                              if (
                                ((n.da || nt(i.ca.S)) && mr(),
                                11 > i.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != i.ca.f.kb.F && mr()),
                                i.Pb && 0 < i.s.ua && null == i.s.vb.X && !j(i.s.vb, i.s.Wa.Xa))
                              ) {
                                i.a = 1;
                                break r;
                              }
                              i.xb = 0;
                            }
                            if (!St(i, i.V, i.Ba, i.c, i.i, n.o, Lt)) break r;
                            (o.Dc = i.Ma), (i = 1);
                            break e;
                          }
                          e(0 != i.a), (i = 0);
                        }
                        i = !i;
                      }
                      i && (r = t.a);
                    } else r = t.a;
                  } else if ((((t = new Yt()).Fa = o.na), (t.P = o.P), (t.qc = o.Sa), Kt(t, i))) {
                    if (0 == (r = Br(i.width, i.height, s.Oa, s.ba))) {
                      if (((t.Aa = 0), (n = s.Oa), e(null != (o = t)), null != n)) {
                        if (0 < (c = 0 > (c = n.Md) ? 0 : 100 < c ? 255 : (255 * c) / 100)) {
                          for (l = h = 0; 4 > l; ++l) 12 > (f = o.pb[l]).lc && (f.ia = (c * Di[0 > f.lc ? 0 : f.lc]) >> 3), (h |= f.ia);
                          h && (alert("todo:VP8InitRandom"), (o.ia = 1));
                        }
                        (o.Ga = n.Id), 100 < o.Ga ? (o.Ga = 100) : 0 > o.Ga && (o.Ga = 0);
                      }
                      Qt(t, i) || (r = t.a);
                    }
                  } else r = t.a;
                  0 == r && null != s.Oa && s.Oa.fd && (r = Rr(s.ba));
                }
                s = r;
              }
              a = 0 != s ? null : 11 > a ? u.f.RGBA.eb : u.f.kb.y;
            } else a = null;
            return a;
          };
          var zi = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
        })();
        var h = [0],
          f = [0],
          d = [],
          p = new te(),
          g = t,
          m = (function (t, e) {
            var r = {},
              n = 0,
              i = !1,
              o = 0,
              a = 0;
            if (
              ((r.frames = []),
              !(
                /** @license
   * Copyright (c) 2017 Dominik Homberger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://webpjs.appspot.com
WebPRiffParser dominikhlbg@gmail.com
*/
                (function (t, e, r, n) {
                  for (var i = 0; i < 4; i++) if (t[e + i] != "RIFF".charCodeAt(i)) return !0;
                  return !1;
                })(t, e)
              ))
            ) {
              var s, h;
              for (l(t, (e += 4)), e += 8; e < t.length; ) {
                var f = u(t, e),
                  d = l(t, (e += 4));
                e += 4;
                var p = d + (1 & d);
                switch (f) {
                  case "VP8 ":
                  case "VP8L":
                    void 0 === r.frames[n] && (r.frames[n] = {}),
                      ((v = r.frames[n]).src_off = i ? a : e - 8),
                      (v.src_size = o + d + 8),
                      n++,
                      i && ((i = !1), (o = 0), (a = 0));
                    break;
                  case "VP8X":
                    (v = r.header = {}).feature_flags = t[e];
                    var g = e + 4;
                    (v.canvas_width = 1 + c(t, g)), (g += 3), (v.canvas_height = 1 + c(t, g)), (g += 3);
                    break;
                  case "ALPH":
                    (i = !0), (o = p + 8), (a = e - 8);
                    break;
                  case "ANIM":
                    ((v = r.header).bgcolor = l(t, e)),
                      (g = e + 4),
                      (v.loop_count = ((s = t)[(h = g) + 0] << 0) | (s[h + 1] << 8)),
                      (g += 2);
                    break;
                  case "ANMF":
                    var m, v;
                    ((v = r.frames[n] = {}).offset_x = 2 * c(t, e)),
                      (e += 3),
                      (v.offset_y = 2 * c(t, e)),
                      (e += 3),
                      (v.width = 1 + c(t, e)),
                      (e += 3),
                      (v.height = 1 + c(t, e)),
                      (e += 3),
                      (v.duration = c(t, e)),
                      (e += 3),
                      (m = t[e++]),
                      (v.dispose = 1 & m),
                      (v.blend = (m >> 1) & 1);
                }
                "ANMF" != f && (e += p);
              }
              return r;
            }
          })(g, 0);
        (m.response = g), (m.rgbaoutput = !0), (m.dataurl = !1);
        var v = m.header ? m.header : null,
          b = m.frames ? m.frames : null;
        if (v) {
          (v.loop_counter = v.loop_count), (h = [v.canvas_height]), (f = [v.canvas_width]);
          for (var y = 0; y < b.length && 0 != b[y].blend; y++);
        }
        var w = b[0],
          x = p.WebPDecodeRGBA(g, w.src_off, w.src_size, f, h);
        (w.rgba = x), (w.imgwidth = f[0]), (w.imgheight = h[0]);
        for (var L = 0; L < f[0] * h[0] * 4; L++) d[L] = x[L];
        return (this.width = f), (this.height = h), (this.data = d), this;
      }
      !(function (t) {
        var e = function (e, n, c, l) {
            var h = 4,
              f = a;
            switch (l) {
              case t.image_compression.FAST:
                (h = 1), (f = o);
                break;
              case t.image_compression.MEDIUM:
                (h = 6), (f = s);
                break;
              case t.image_compression.SLOW:
                (h = 9), (f = u);
            }
            e = r(e, n, c, f);
            var d = (0, i.zlibSync)(e, { level: h });
            return t.__addimage__.arrayBufferToBinaryString(d);
          },
          r = function (t, e, r, n) {
            for (var i, o, a, s = t.length / e, u = new Uint8Array(t.length + s), c = l(), f = 0; f < s; f += 1) {
              if (((a = f * e), (i = t.subarray(a, a + e)), n)) u.set(n(i, r, o), a + f);
              else {
                for (var d, p = c.length, g = []; d < p; d += 1) g[d] = c[d](i, r, o);
                var m = h(g.concat());
                u.set(g[m], a + f);
              }
              o = i;
            }
            return u;
          },
          n = function (t) {
            var e = Array.apply([], t);
            return e.unshift(0), e;
          },
          o = function (t, e) {
            var r,
              n = [],
              i = t.length;
            n[0] = 1;
            for (var o = 0; o < i; o += 1) (r = t[o - e] || 0), (n[o + 1] = (t[o] - r + 256) & 255);
            return n;
          },
          a = function (t, e, r) {
            var n,
              i = [],
              o = t.length;
            i[0] = 2;
            for (var a = 0; a < o; a += 1) (n = (r && r[a]) || 0), (i[a + 1] = (t[a] - n + 256) & 255);
            return i;
          },
          s = function (t, e, r) {
            var n,
              i,
              o = [],
              a = t.length;
            o[0] = 3;
            for (var s = 0; s < a; s += 1) (n = t[s - e] || 0), (i = (r && r[s]) || 0), (o[s + 1] = (t[s] + 256 - ((n + i) >>> 1)) & 255);
            return o;
          },
          u = function (t, e, r) {
            var n,
              i,
              o,
              a,
              s = [],
              u = t.length;
            s[0] = 4;
            for (var l = 0; l < u; l += 1)
              (n = t[l - e] || 0),
                (i = (r && r[l]) || 0),
                (o = (r && r[l - e]) || 0),
                (a = c(n, i, o)),
                (s[l + 1] = (t[l] - a + 256) & 255);
            return s;
          },
          c = function (t, e, r) {
            if (t === e && e === r) return t;
            var n = Math.abs(e - r),
              i = Math.abs(t - r),
              o = Math.abs(t + e - r - r);
            return n <= i && n <= o ? t : i <= o ? e : r;
          },
          l = function () {
            return [n, o, a, s, u];
          },
          h = function (t) {
            var e = t.map(function (t) {
              return t.reduce(function (t, e) {
                return t + Math.abs(e);
              }, 0);
            });
            return e.indexOf(Math.min.apply(null, e));
          };
        t.processPNG = function (r, n, o, a) {
          var s,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            g,
            m,
            v,
            b,
            y,
            w,
            x,
            L = this.decode.FLATE_DECODE,
            N = "";
          if ((this.__addimage__.isArrayBuffer(r) && (r = new Uint8Array(r)), this.__addimage__.isArrayBufferView(r))) {
            if (((r = (c = new Jt(r)).imgData), (u = c.bits), (s = c.colorSpace), (h = c.colors), -1 !== [4, 6].indexOf(c.colorType))) {
              if (8 === c.bits) {
                (g = (p =
                  32 == c.pixelBitlength
                    ? new Uint32Array(c.decodePixels().buffer)
                    : 16 == c.pixelBitlength
                    ? new Uint16Array(c.decodePixels().buffer)
                    : new Uint8Array(c.decodePixels().buffer)).length),
                  (v = new Uint8Array(g * c.colors)),
                  (m = new Uint8Array(g));
                var A,
                  _ = c.pixelBitlength - c.bits;
                for (w = 0, x = 0; w < g; w++) {
                  for (y = p[w], A = 0; A < _; ) (v[x++] = (y >>> A) & 255), (A += c.bits);
                  m[w] = (y >>> A) & 255;
                }
              }
              if (16 === c.bits) {
                (g = (p = new Uint32Array(c.decodePixels().buffer)).length),
                  (v = new Uint8Array(g * (32 / c.pixelBitlength) * c.colors)),
                  (m = new Uint8Array(g * (32 / c.pixelBitlength))),
                  (b = c.colors > 1),
                  (w = 0),
                  (x = 0);
                for (var S = 0; w < g; )
                  (y = p[w++]),
                    (v[x++] = (y >>> 0) & 255),
                    b && ((v[x++] = (y >>> 16) & 255), (y = p[w++]), (v[x++] = (y >>> 0) & 255)),
                    (m[S++] = (y >>> 16) & 255);
                u = 8;
              }
              a !== t.image_compression.NONE && "function" == typeof i.zlibSync
                ? ((r = e(v, c.width * c.colors, c.colors, a)), (d = e(m, c.width, 1, a)))
                : ((r = v), (d = m), (L = void 0));
            }
            if (3 === c.colorType && ((s = this.color_spaces.INDEXED), (f = c.palette), c.transparency.indexed)) {
              var P = c.transparency.indexed,
                k = 0;
              for (w = 0, g = P.length; w < g; ++w) k += P[w];
              if ((k /= 255) == g - 1 && -1 !== P.indexOf(0)) l = [P.indexOf(0)];
              else if (k !== g) {
                for (p = c.decodePixels(), m = new Uint8Array(p.length), w = 0, g = p.length; w < g; w++) m[w] = P[p[w]];
                d = e(m, c.width, 1);
              }
            }
            var F = (function (e) {
              var r;
              switch (e) {
                case t.image_compression.FAST:
                  r = 11;
                  break;
                case t.image_compression.MEDIUM:
                  r = 13;
                  break;
                case t.image_compression.SLOW:
                  r = 14;
                  break;
                default:
                  r = 12;
              }
              return r;
            })(a);
            return (
              L === this.decode.FLATE_DECODE && (N = "/Predictor " + F + " "),
              (N += "/Colors " + h + " /BitsPerComponent " + u + " /Columns " + c.width),
              (this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) &&
                (r = this.__addimage__.arrayBufferToBinaryString(r)),
              ((d && this.__addimage__.isArrayBuffer(d)) || this.__addimage__.isArrayBufferView(d)) &&
                (d = this.__addimage__.arrayBufferToBinaryString(d)),
              {
                alias: o,
                data: r,
                index: n,
                filter: L,
                decodeParameters: N,
                transparency: l,
                palette: f,
                sMask: d,
                predictor: F,
                width: c.width,
                height: c.height,
                bitsPerComponent: u,
                colorSpace: s
              }
            );
          }
        };
      })(B.API),
        (function (t) {
          (t.processGIF89A = function (e, r, n, i) {
            var o = new Kt(e),
              a = o.width,
              s = o.height,
              u = [];
            o.decodeAndBlitFrameRGBA(0, u);
            var c = { data: u, width: a, height: s },
              l = new Zt(100).encode(c, 100);
            return t.processJPEG.call(this, l, r, n, i);
          }),
            (t.processGIF87A = t.processGIF89A);
        })(B.API),
        (Qt.prototype.parseHeader = function () {
          if (
            ((this.fileSize = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.reserved = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.offset = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.headerSize = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.width = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.height = this.datav.getInt32(this.pos, !0)),
            (this.pos += 4),
            (this.planes = this.datav.getUint16(this.pos, !0)),
            (this.pos += 2),
            (this.bitPP = this.datav.getUint16(this.pos, !0)),
            (this.pos += 2),
            (this.compress = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.rawSize = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.hr = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.vr = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.colors = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            (this.importantColors = this.datav.getUint32(this.pos, !0)),
            (this.pos += 4),
            16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15),
            this.bitPP < 15)
          ) {
            var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
            this.palette = new Array(t);
            for (var e = 0; e < t; e++) {
              var r = this.datav.getUint8(this.pos++, !0),
                n = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0);
              this.palette[e] = { red: i, green: n, blue: r, quad: o };
            }
          }
          this.height < 0 && ((this.height *= -1), (this.bottom_up = !1));
        }),
        (Qt.prototype.parseBGR = function () {
          this.pos = this.offset;
          try {
            var t = "bit" + this.bitPP,
              e = this.width * this.height * 4;
            (this.data = new Uint8Array(e)), this[t]();
          } catch (t) {
            u.log("bit decode error:" + t);
          }
        }),
        (Qt.prototype.bit1 = function () {
          var t,
            e = Math.ceil(this.width / 8),
            r = e % 4;
          for (t = this.height - 1; t >= 0; t--) {
            for (var n = this.bottom_up ? t : this.height - 1 - t, i = 0; i < e; i++)
              for (
                var o = this.datav.getUint8(this.pos++, !0), a = n * this.width * 4 + 8 * i * 4, s = 0;
                s < 8 && 8 * i + s < this.width;
                s++
              ) {
                var u = this.palette[(o >> (7 - s)) & 1];
                (this.data[a + 4 * s] = u.blue),
                  (this.data[a + 4 * s + 1] = u.green),
                  (this.data[a + 4 * s + 2] = u.red),
                  (this.data[a + 4 * s + 3] = 255);
              }
            0 !== r && (this.pos += 4 - r);
          }
        }),
        (Qt.prototype.bit4 = function () {
          for (var t = Math.ceil(this.width / 2), e = t % 4, r = this.height - 1; r >= 0; r--) {
            for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < t; i++) {
              var o = this.datav.getUint8(this.pos++, !0),
                a = n * this.width * 4 + 2 * i * 4,
                s = o >> 4,
                u = 15 & o,
                c = this.palette[s];
              if (
                ((this.data[a] = c.blue),
                (this.data[a + 1] = c.green),
                (this.data[a + 2] = c.red),
                (this.data[a + 3] = 255),
                2 * i + 1 >= this.width)
              )
                break;
              (c = this.palette[u]),
                (this.data[a + 4] = c.blue),
                (this.data[a + 4 + 1] = c.green),
                (this.data[a + 4 + 2] = c.red),
                (this.data[a + 4 + 3] = 255);
            }
            0 !== e && (this.pos += 4 - e);
          }
        }),
        (Qt.prototype.bit8 = function () {
          for (var t = this.width % 4, e = this.height - 1; e >= 0; e--) {
            for (var r = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
              var i = this.datav.getUint8(this.pos++, !0),
                o = r * this.width * 4 + 4 * n;
              if (i < this.palette.length) {
                var a = this.palette[i];
                (this.data[o] = a.red), (this.data[o + 1] = a.green), (this.data[o + 2] = a.blue), (this.data[o + 3] = 255);
              } else (this.data[o] = 255), (this.data[o + 1] = 255), (this.data[o + 2] = 255), (this.data[o + 3] = 255);
            }
            0 !== t && (this.pos += 4 - t);
          }
        }),
        (Qt.prototype.bit15 = function () {
          for (var t = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
            for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < this.width; i++) {
              var o = this.datav.getUint16(this.pos, !0);
              this.pos += 2;
              var a = (((o & e) / e) * 255) | 0,
                s = ((((o >> 5) & e) / e) * 255) | 0,
                u = ((((o >> 10) & e) / e) * 255) | 0,
                c = o >> 15 ? 255 : 0,
                l = n * this.width * 4 + 4 * i;
              (this.data[l] = u), (this.data[l + 1] = s), (this.data[l + 2] = a), (this.data[l + 3] = c);
            }
            this.pos += t;
          }
        }),
        (Qt.prototype.bit16 = function () {
          for (var t = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), n = this.height - 1; n >= 0; n--) {
            for (var i = this.bottom_up ? n : this.height - 1 - n, o = 0; o < this.width; o++) {
              var a = this.datav.getUint16(this.pos, !0);
              this.pos += 2;
              var s = (((a & e) / e) * 255) | 0,
                u = ((((a >> 5) & r) / r) * 255) | 0,
                c = (((a >> 11) / e) * 255) | 0,
                l = i * this.width * 4 + 4 * o;
              (this.data[l] = c), (this.data[l + 1] = u), (this.data[l + 2] = s), (this.data[l + 3] = 255);
            }
            this.pos += t;
          }
        }),
        (Qt.prototype.bit24 = function () {
          for (var t = this.height - 1; t >= 0; t--) {
            for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
              var n = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0),
                a = e * this.width * 4 + 4 * r;
              (this.data[a] = o), (this.data[a + 1] = i), (this.data[a + 2] = n), (this.data[a + 3] = 255);
            }
            this.pos += this.width % 4;
          }
        }),
        (Qt.prototype.bit32 = function () {
          for (var t = this.height - 1; t >= 0; t--)
            for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
              var n = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0),
                a = this.datav.getUint8(this.pos++, !0),
                s = e * this.width * 4 + 4 * r;
              (this.data[s] = o), (this.data[s + 1] = i), (this.data[s + 2] = n), (this.data[s + 3] = a);
            }
        }),
        (Qt.prototype.getData = function () {
          return this.data;
        }),
        /**
         * @license
         * Copyright (c) 2018 Aras Abbasi
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          t.processBMP = function (e, r, n, i) {
            var o = new Qt(e, !1),
              a = o.width,
              s = o.height,
              u = { data: o.getData(), width: a, height: s },
              c = new Zt(100).encode(u, 100);
            return t.processJPEG.call(this, c, r, n, i);
          };
        })(B.API),
        (te.prototype.getData = function () {
          return this.data;
        }),
        /**
         * @license
         * Copyright (c) 2019 Aras Abbasi
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          t.processWEBP = function (e, r, n, i) {
            var o = new te(e, !1),
              a = o.width,
              s = o.height,
              u = { data: o.getData(), width: a, height: s },
              c = new Zt(100).encode(u, 100);
            return t.processJPEG.call(this, c, r, n, i);
          };
        })(B.API),
        (B.API.setLanguage = function (t) {
          return (
            void 0 === this.internal.languageSettings &&
              ((this.internal.languageSettings = {}), (this.internal.languageSettings.isSubscribed = !1)),
            void 0 !==
              {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic (Standard)",
                "ar-DZ": "Arabic (Algeria)",
                "ar-BH": "Arabic (Bahrain)",
                "ar-EG": "Arabic (Egypt)",
                "ar-IQ": "Arabic (Iraq)",
                "ar-JO": "Arabic (Jordan)",
                "ar-KW": "Arabic (Kuwait)",
                "ar-LB": "Arabic (Lebanon)",
                "ar-LY": "Arabic (Libya)",
                "ar-MA": "Arabic (Morocco)",
                "ar-OM": "Arabic (Oman)",
                "ar-QA": "Arabic (Qatar)",
                "ar-SA": "Arabic (Saudi Arabia)",
                "ar-SY": "Arabic (Syria)",
                "ar-TN": "Arabic (Tunisia)",
                "ar-AE": "Arabic (U.A.E.)",
                "ar-YE": "Arabic (Yemen)",
                an: "Aragonese",
                hy: "Armenian",
                as: "Assamese",
                ast: "Asturian",
                az: "Azerbaijani",
                eu: "Basque",
                be: "Belarusian",
                bn: "Bengali",
                bs: "Bosnian",
                br: "Breton",
                bg: "Bulgarian",
                my: "Burmese",
                ca: "Catalan",
                ch: "Chamorro",
                ce: "Chechen",
                zh: "Chinese",
                "zh-HK": "Chinese (Hong Kong)",
                "zh-CN": "Chinese (PRC)",
                "zh-SG": "Chinese (Singapore)",
                "zh-TW": "Chinese (Taiwan)",
                cv: "Chuvash",
                co: "Corsican",
                cr: "Cree",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch (Standard)",
                "nl-BE": "Dutch (Belgian)",
                en: "English",
                "en-AU": "English (Australia)",
                "en-BZ": "English (Belize)",
                "en-CA": "English (Canada)",
                "en-IE": "English (Ireland)",
                "en-JM": "English (Jamaica)",
                "en-NZ": "English (New Zealand)",
                "en-PH": "English (Philippines)",
                "en-ZA": "English (South Africa)",
                "en-TT": "English (Trinidad & Tobago)",
                "en-GB": "English (United Kingdom)",
                "en-US": "English (United States)",
                "en-ZW": "English (Zimbabwe)",
                eo: "Esperanto",
                et: "Estonian",
                fo: "Faeroese",
                fj: "Fijian",
                fi: "Finnish",
                fr: "French (Standard)",
                "fr-BE": "French (Belgium)",
                "fr-CA": "French (Canada)",
                "fr-FR": "French (France)",
                "fr-LU": "French (Luxembourg)",
                "fr-MC": "French (Monaco)",
                "fr-CH": "French (Switzerland)",
                fy: "Frisian",
                fur: "Friulian",
                gd: "Gaelic (Scots)",
                "gd-IE": "Gaelic (Irish)",
                gl: "Galacian",
                ka: "Georgian",
                de: "German (Standard)",
                "de-AT": "German (Austria)",
                "de-DE": "German (Germany)",
                "de-LI": "German (Liechtenstein)",
                "de-LU": "German (Luxembourg)",
                "de-CH": "German (Switzerland)",
                el: "Greek",
                gu: "Gujurati",
                ht: "Haitian",
                he: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                iu: "Inuktitut",
                ga: "Irish",
                it: "Italian (Standard)",
                "it-CH": "Italian (Switzerland)",
                ja: "Japanese",
                kn: "Kannada",
                ks: "Kashmiri",
                kk: "Kazakh",
                km: "Khmer",
                ky: "Kirghiz",
                tlh: "Klingon",
                ko: "Korean",
                "ko-KP": "Korean (North Korea)",
                "ko-KR": "Korean (South Korea)",
                la: "Latin",
                lv: "Latvian",
                lt: "Lithuanian",
                lb: "Luxembourgish",
                mk: "FYRO Macedonian",
                ms: "Malay",
                ml: "Malayalam",
                mt: "Maltese",
                mi: "Maori",
                mr: "Marathi",
                mo: "Moldavian",
                nv: "Navajo",
                ng: "Ndonga",
                ne: "Nepali",
                no: "Norwegian",
                nb: "Norwegian (Bokmal)",
                nn: "Norwegian (Nynorsk)",
                oc: "Occitan",
                or: "Oriya",
                om: "Oromo",
                fa: "Persian",
                "fa-IR": "Persian/Iran",
                pl: "Polish",
                pt: "Portuguese",
                "pt-BR": "Portuguese (Brazil)",
                pa: "Punjabi",
                "pa-IN": "Punjabi (India)",
                "pa-PK": "Punjabi (Pakistan)",
                qu: "Quechua",
                rm: "Rhaeto-Romanic",
                ro: "Romanian",
                "ro-MO": "Romanian (Moldavia)",
                ru: "Russian",
                "ru-MO": "Russian (Moldavia)",
                sz: "Sami (Lappish)",
                sg: "Sango",
                sa: "Sanskrit",
                sc: "Sardinian",
                sd: "Sindhi",
                si: "Singhalese",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                so: "Somani",
                sb: "Sorbian",
                es: "Spanish",
                "es-AR": "Spanish (Argentina)",
                "es-BO": "Spanish (Bolivia)",
                "es-CL": "Spanish (Chile)",
                "es-CO": "Spanish (Colombia)",
                "es-CR": "Spanish (Costa Rica)",
                "es-DO": "Spanish (Dominican Republic)",
                "es-EC": "Spanish (Ecuador)",
                "es-SV": "Spanish (El Salvador)",
                "es-GT": "Spanish (Guatemala)",
                "es-HN": "Spanish (Honduras)",
                "es-MX": "Spanish (Mexico)",
                "es-NI": "Spanish (Nicaragua)",
                "es-PA": "Spanish (Panama)",
                "es-PY": "Spanish (Paraguay)",
                "es-PE": "Spanish (Peru)",
                "es-PR": "Spanish (Puerto Rico)",
                "es-ES": "Spanish (Spain)",
                "es-UY": "Spanish (Uruguay)",
                "es-VE": "Spanish (Venezuela)",
                sx: "Sutu",
                sw: "Swahili",
                sv: "Swedish",
                "sv-FI": "Swedish (Finland)",
                "sv-SV": "Swedish (Sweden)",
                ta: "Tamil",
                tt: "Tatar",
                te: "Teluga",
                th: "Thai",
                tig: "Tigre",
                ts: "Tsonga",
                tn: "Tswana",
                tr: "Turkish",
                tk: "Turkmen",
                uk: "Ukrainian",
                hsb: "Upper Sorbian",
                ur: "Urdu",
                ve: "Venda",
                vi: "Vietnamese",
                vo: "Volapuk",
                wa: "Walloon",
                cy: "Welsh",
                xh: "Xhosa",
                ji: "Yiddish",
                zu: "Zulu"
              }[t] &&
              ((this.internal.languageSettings.languageCode = t),
              !1 === this.internal.languageSettings.isSubscribed &&
                (this.internal.events.subscribe("putCatalog", function () {
                  this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
                }),
                (this.internal.languageSettings.isSubscribed = !0))),
            this
          );
        }),
        /** @license
         * MIT license.
         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
         *               2014 Diego Casorran, https://github.com/diegocr
         *
         * Permission is hereby granted, free of charge, to any person obtaining
         * a copy of this software and associated documentation files (the
         * "Software"), to deal in the Software without restriction, including
         * without limitation the rights to use, copy, modify, merge, publish,
         * distribute, sublicense, and/or sell copies of the Software, and to
         * permit persons to whom the Software is furnished to do so, subject to
         * the following conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
         * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
         * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
         * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
         * ====================================================================
         */
        (Wt = B.API),
        (Vt = Wt.getCharWidthsArray =
          function (t, e) {
            var r,
              n,
              i = (e = e || {}).font || this.internal.getFont(),
              o = e.fontSize || this.internal.getFontSize(),
              a = e.charSpace || this.internal.getCharSpace(),
              s = e.widths ? e.widths : i.metadata.Unicode.widths,
              u = s.fof ? s.fof : 1,
              c = e.kerning ? e.kerning : i.metadata.Unicode.kerning,
              l = c.fof ? c.fof : 1,
              h = !1 !== e.doKerning,
              f = 0,
              d = t.length,
              p = 0,
              g = s[0] || u,
              m = [];
            for (r = 0; r < d; r++)
              (n = t.charCodeAt(r)),
                "function" == typeof i.metadata.widthOfString
                  ? m.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(n)) + a * (1e3 / o) || 0) / 1e3)
                  : ((f = h && "object" == typeof c[n] && !isNaN(parseInt(c[n][p], 10)) ? c[n][p] / l : 0), m.push((s[n] || g) / u + f)),
                (p = n);
            return m;
          }),
        (Gt = Wt.getStringUnitWidth =
          function (t, e) {
            var r = (e = e || {}).fontSize || this.internal.getFontSize(),
              n = e.font || this.internal.getFont(),
              i = e.charSpace || this.internal.getCharSpace();
            return (
              Wt.processArabic && (t = Wt.processArabic(t)),
              "function" == typeof n.metadata.widthOfString
                ? n.metadata.widthOfString(t, r, i) / r
                : Vt.apply(this, arguments).reduce(function (t, e) {
                    return t + e;
                  }, 0)
            );
          }),
        (Yt = function (t, e, r, n) {
          for (var i = [], o = 0, a = t.length, s = 0; o !== a && s + e[o] < r; ) (s += e[o]), o++;
          i.push(t.slice(0, o));
          var u = o;
          for (s = 0; o !== a; ) s + e[o] > n && (i.push(t.slice(u, o)), (s = 0), (u = o)), (s += e[o]), o++;
          return u !== o && i.push(t.slice(u, o)), i;
        }),
        (Xt = function (t, e, r) {
          r || (r = {});
          var n,
            i,
            o,
            a,
            s,
            u,
            c,
            l = [],
            h = [l],
            f = r.textIndent || 0,
            d = 0,
            p = 0,
            g = t.split(" "),
            m = Vt.apply(this, [" ", r])[0];
          if ((u = -1 === r.lineIndent ? g[0].length + 2 : r.lineIndent || 0)) {
            var v = Array(u).join(" "),
              b = [];
            g.map(function (t) {
              (t = t.split(/\s*\n/)).length > 1
                ? (b = b.concat(
                    t.map(function (t, e) {
                      return (e && t.length ? "\n" : "") + t;
                    })
                  ))
                : b.push(t[0]);
            }),
              (g = b),
              (u = Gt.apply(this, [v, r]));
          }
          for (o = 0, a = g.length; o < a; o++) {
            var y = 0;
            if (
              ((n = g[o]),
              u && "\n" == n[0] && ((n = n.substr(1)), (y = 1)),
              f +
                d +
                (p = (i = Vt.apply(this, [n, r])).reduce(function (t, e) {
                  return t + e;
                }, 0)) >
                e || y)
            ) {
              if (p > e) {
                for (s = Yt.apply(this, [n, i, e - (f + d), e]), l.push(s.shift()), l = [s.pop()]; s.length; ) h.push([s.shift()]);
                p = i.slice(n.length - (l[0] ? l[0].length : 0)).reduce(function (t, e) {
                  return t + e;
                }, 0);
              } else l = [n];
              h.push(l), (f = p + u), (d = m);
            } else l.push(n), (f += d + p), (d = m);
          }
          return (
            (c = u
              ? function (t, e) {
                  return (e ? v : "") + t.join(" ");
                }
              : function (t) {
                  return t.join(" ");
                }),
            h.map(c)
          );
        }),
        (Wt.splitTextToSize = function (t, e, r) {
          var n,
            i = (r = r || {}).fontSize || this.internal.getFontSize(),
            o = function (t) {
              if (t.widths && t.kerning) return { widths: t.widths, kerning: t.kerning };
              var e = this.internal.getFont(t.fontName, t.fontStyle);
              return e.metadata.Unicode
                ? { widths: e.metadata.Unicode.widths || { 0: 1 }, kerning: e.metadata.Unicode.kerning || {} }
                : { font: e.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
            }.call(this, r);
          n = Array.isArray(t) ? t : String(t).split(/\r?\n/);
          var a = (1 * this.internal.scaleFactor * e) / i;
          (o.textIndent = r.textIndent ? (1 * r.textIndent * this.internal.scaleFactor) / i : 0), (o.lineIndent = r.lineIndent);
          var s,
            u,
            c = [];
          for (s = 0, u = n.length; s < u; s++) c = c.concat(Xt.apply(this, [n[s], a, o]));
          return c;
        }),
        /** @license
 jsPDF standard_fonts_metrics plugin
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 * MIT license.
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
        (function (t) {
          t.__fontmetrics__ = t.__fontmetrics__ || {};
          for (var e = "klmnopqrstuvwxyz", r = {}, n = {}, i = 0; i < e.length; i++)
            (r[e[i]] = "0123456789abcdef"[i]), (n["0123456789abcdef"[i]] = e[i]);
          var o = function (t) {
              return "0x" + parseInt(t, 10).toString(16);
            },
            a = (t.__fontmetrics__.compress = function (t) {
              var e,
                r,
                i,
                s,
                u = ["{"];
              for (var c in t) {
                if (
                  ((e = t[c]),
                  isNaN(parseInt(c, 10))
                    ? (r = "'" + c + "'")
                    : ((c = parseInt(c, 10)), (r = (r = o(c).slice(2)).slice(0, -1) + n[r.slice(-1)])),
                  "number" == typeof e)
                )
                  e < 0 ? ((i = o(e).slice(3)), (s = "-")) : ((i = o(e).slice(2)), (s = "")), (i = s + i.slice(0, -1) + n[i.slice(-1)]);
                else {
                  if ("object" != typeof e) throw new Error("Don't know what to do with value type " + typeof e + ".");
                  i = a(e);
                }
                u.push(r + i);
              }
              return u.push("}"), u.join("");
            }),
            s = (t.__fontmetrics__.uncompress = function (t) {
              if ("string" != typeof t) throw new Error("Invalid argument passed to uncompress.");
              for (var e, n, i, o, a = {}, s = 1, u = a, c = [], l = "", h = "", f = t.length - 1, d = 1; d < f; d += 1)
                "'" == (o = t[d])
                  ? e
                    ? ((i = e.join("")), (e = void 0))
                    : (e = [])
                  : e
                  ? e.push(o)
                  : "{" == o
                  ? (c.push([u, i]), (u = {}), (i = void 0))
                  : "}" == o
                  ? (((n = c.pop())[0][n[1]] = u), (i = void 0), (u = n[0]))
                  : "-" == o
                  ? (s = -1)
                  : void 0 === i
                  ? r.hasOwnProperty(o)
                    ? ((l += r[o]), (i = parseInt(l, 16) * s), (s = 1), (l = ""))
                    : (l += o)
                  : r.hasOwnProperty(o)
                  ? ((h += r[o]), (u[i] = parseInt(h, 16) * s), (s = 1), (i = void 0), (h = ""))
                  : (h += o);
              return a;
            }),
            u = {
              codePages: ["WinAnsiEncoding"],
              WinAnsiEncoding: s(
                "{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}"
              )
            },
            c = {
              Unicode: {
                Courier: u,
                "Courier-Bold": u,
                "Courier-BoldOblique": u,
                "Courier-Oblique": u,
                Helvetica: u,
                "Helvetica-Bold": u,
                "Helvetica-BoldOblique": u,
                "Helvetica-Oblique": u,
                "Times-Roman": u,
                "Times-Bold": u,
                "Times-BoldItalic": u,
                "Times-Italic": u
              }
            },
            l = {
              Unicode: {
                "Courier-Oblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-BoldItalic": s(
                  "{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"
                ),
                "Helvetica-Bold": s(
                  "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
                ),
                Courier: s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-BoldOblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Bold": s(
                  "{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"
                ),
                Symbol: s(
                  "{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"
                ),
                Helvetica: s(
                  "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
                ),
                "Helvetica-BoldOblique": s(
                  "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
                ),
                ZapfDingbats: s("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-Bold": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Italic": s(
                  "{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"
                ),
                "Times-Roman": s(
                  "{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"
                ),
                "Helvetica-Oblique": s(
                  "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
                )
              }
            };
          t.events.push([
            "addFont",
            function (t) {
              var e = t.font,
                r = l.Unicode[e.postScriptName];
              r && ((e.metadata.Unicode = {}), (e.metadata.Unicode.widths = r.widths), (e.metadata.Unicode.kerning = r.kerning));
              var n = c.Unicode[e.postScriptName];
              n && ((e.metadata.Unicode.encoding = n), (e.encoding = n.codePages[0]));
            }
          ]);
        })(B.API),
        /**
         * @license
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          var e = function (t) {
            for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++) r[n] = t.charCodeAt(n);
            return r;
          };
          t.API.events.push([
            "addFont",
            function (r) {
              var n = void 0,
                i = r.font,
                o = r.instance;
              if (!i.isStandardFont) {
                if (void 0 === o)
                  throw new Error(
                    "Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "')."
                  );
                if (
                  "string" !=
                  typeof (n =
                    !1 === o.existsFileInVFS(i.postScriptName) ? o.loadFile(i.postScriptName) : o.getFileFromVFS(i.postScriptName))
                )
                  throw new Error(
                    "Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "')."
                  );
                !(function (r, n) {
                  (n = /^\x00\x01\x00\x00/.test(n) ? e(n) : e(f(n))),
                    (r.metadata = t.API.TTFFont.open(n)),
                    (r.metadata.Unicode = r.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }),
                    (r.metadata.glyIdsUsed = [0]);
                })(i, n);
              }
            }
          ]);
        })(B),
        (B.API.addSvgAsImage = function (t, e, r, n, i, s, c, l) {
          if (isNaN(e) || isNaN(r))
            throw (
              (u.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments),
              new Error("Invalid coordinates passed to jsPDF.addSvgAsImage"))
            );
          if (isNaN(n) || isNaN(i))
            throw (
              (u.error("jsPDF.addSvgAsImage: Invalid measurements", arguments),
              new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage"))
            );
          var h = document.createElement("canvas");
          (h.width = n), (h.height = i);
          var f = h.getContext("2d");
          (f.fillStyle = "#fff"), f.fillRect(0, 0, h.width, h.height);
          var d = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 },
            p = this;
          return (a.canvg ? Promise.resolve(a.canvg) : o("dPLIb"))
            .catch(function (t) {
              return Promise.reject(new Error("Could not load canvg: " + t));
            })
            .then(function (t) {
              return t.default ? t.default : t;
            })
            .then(
              function (e) {
                return e.fromString(f, t, d);
              },
              function () {
                return Promise.reject(new Error("Could not load canvg."));
              }
            )
            .then(function (t) {
              return t.render(d);
            })
            .then(function () {
              p.addImage(h.toDataURL("image/jpeg", 1), e, r, n, i, c, l);
            });
        }),
        (B.API.putTotalPages = function (t) {
          var e,
            r = 0;
          parseInt(this.internal.getFont().id.substr(1), 10) < 15
            ? ((e = new RegExp(t, "g")), (r = this.internal.getNumberOfPages()))
            : ((e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g")),
              (r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont())));
          for (var n = 1; n <= this.internal.getNumberOfPages(); n++)
            for (var i = 0; i < this.internal.pages[n].length; i++) this.internal.pages[n][i] = this.internal.pages[n][i].replace(e, r);
          return this;
        }),
        (B.API.viewerPreferences = function (t, e) {
          var r;
          (t = t || {}), (e = e || !1);
          var n,
            i,
            o,
            a = {
              HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
              HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
              HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
              FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
              CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
              DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 },
              NonFullScreenPageMode: {
                defaultValue: "UseNone",
                value: "UseNone",
                type: "name",
                explicitSet: !1,
                valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
                pdfVersion: 1.3
              },
              Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 },
              ViewArea: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
              },
              ViewClip: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
              },
              PrintArea: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
              },
              PrintClip: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
              },
              PrintScaling: {
                defaultValue: "AppDefault",
                value: "AppDefault",
                type: "name",
                explicitSet: !1,
                valueSet: ["AppDefault", "None"],
                pdfVersion: 1.6
              },
              Duplex: {
                defaultValue: "",
                value: "none",
                type: "name",
                explicitSet: !1,
                valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
                pdfVersion: 1.7
              },
              PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 },
              PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 },
              NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }
            },
            s = Object.keys(a),
            u = [],
            c = 0,
            l = 0,
            h = 0;
          function f(t, e) {
            var r,
              n = !1;
            for (r = 0; r < t.length; r += 1) t[r] === e && (n = !0);
            return n;
          }
          if (
            (void 0 === this.internal.viewerpreferences &&
              ((this.internal.viewerpreferences = {}),
              (this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(a))),
              (this.internal.viewerpreferences.isSubscribed = !1)),
            (r = this.internal.viewerpreferences.configuration),
            "reset" === t || !0 === e)
          ) {
            var d = s.length;
            for (h = 0; h < d; h += 1) (r[s[h]].value = r[s[h]].defaultValue), (r[s[h]].explicitSet = !1);
          }
          if ("object" == typeof t)
            for (i in t)
              if (((o = t[i]), f(s, i) && void 0 !== o)) {
                if ("boolean" === r[i].type && "boolean" == typeof o) r[i].value = o;
                else if ("name" === r[i].type && f(r[i].valueSet, o)) r[i].value = o;
                else if ("integer" === r[i].type && Number.isInteger(o)) r[i].value = o;
                else if ("array" === r[i].type) {
                  for (c = 0; c < o.length; c += 1)
                    if (((n = !0), 1 === o[c].length && "number" == typeof o[c][0])) u.push(String(o[c] - 1));
                    else if (o[c].length > 1) {
                      for (l = 0; l < o[c].length; l += 1) "number" != typeof o[c][l] && (n = !1);
                      !0 === n && u.push([o[c][0] - 1, o[c][1] - 1].join(" "));
                    }
                  r[i].value = "[" + u.join(" ") + "]";
                } else r[i].value = r[i].defaultValue;
                r[i].explicitSet = !0;
              }
          return (
            !1 === this.internal.viewerpreferences.isSubscribed &&
              (this.internal.events.subscribe("putCatalog", function () {
                var t,
                  e = [];
                for (t in r)
                  !0 === r[t].explicitSet &&
                    ("name" === r[t].type ? e.push("/" + t + " /" + r[t].value) : e.push("/" + t + " " + r[t].value));
                0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>");
              }),
              (this.internal.viewerpreferences.isSubscribed = !0)),
            (this.internal.viewerpreferences.configuration = r),
            this
          );
        }),
        /** ====================================================================
         * @license
         * jsPDF XMP metadata plugin
         * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
         *
         * Permission is hereby granted, free of charge, to any person obtaining
         * a copy of this software and associated documentation files (the
         * "Software"), to deal in the Software without restriction, including
         * without limitation the rights to use, copy, modify, merge, publish,
         * distribute, sublicense, and/or sell copies of the Software, and to
         * permit persons to whom the Software is furnished to do so, subject to
         * the following conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
         * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
         * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
         * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
         * ====================================================================
         */
        (function (t) {
          var e = function () {
              var t =
                  '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
                  this.internal.__metadata__.namespaceuri +
                  '"><jspdf:metadata>',
                e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
                r = unescape(encodeURIComponent(t)),
                n = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
                i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
                o = unescape(encodeURIComponent("</x:xmpmeta>")),
                a = r.length + n.length + i.length + e.length + o.length;
              (this.internal.__metadata__.metadata_object_number = this.internal.newObject()),
                this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + a + " >>"),
                this.internal.write("stream"),
                this.internal.write(e + r + n + i + o),
                this.internal.write("endstream"),
                this.internal.write("endobj");
            },
            r = function () {
              this.internal.__metadata__.metadata_object_number &&
                this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
            };
          t.addMetadata = function (t, n) {
            return (
              void 0 === this.internal.__metadata__ &&
                ((this.internal.__metadata__ = { metadata: t, namespaceuri: n || "http://jspdf.default.namespaceuri/" }),
                this.internal.events.subscribe("putCatalog", r),
                this.internal.events.subscribe("postPutResources", e)),
              this
            );
          };
        })(B.API),
        (function (t) {
          var e = t.API,
            r = (e.pdfEscape16 = function (t, e) {
              for (var r, n = e.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], o = [""], a = 0, s = t.length; a < s; ++a) {
                if (
                  ((r = e.metadata.characterToGlyph(t.charCodeAt(a))),
                  e.metadata.glyIdsUsed.push(r),
                  (e.metadata.toUnicode[r] = t.charCodeAt(a)),
                  -1 == n.indexOf(r) && (n.push(r), n.push([parseInt(e.metadata.widthOfGlyph(r), 10)])),
                  "0" == r)
                )
                  return o.join("");
                (r = r.toString(16)), o.push(i[4 - r.length], r);
              }
              return o.join("");
            }),
            n = function (t) {
              var e, r, n, i, o, a, s;
              for (
                o =
                  "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",
                  n = [],
                  a = 0,
                  s = (r = Object.keys(t).sort(function (t, e) {
                    return t - e;
                  })).length;
                a < s;
                a++
              )
                (e = r[a]),
                  n.length >= 100 && ((o += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar"), (n = [])),
                  void 0 !== t[e] &&
                    null !== t[e] &&
                    "function" == typeof t[e].toString &&
                    ((i = ("0000" + t[e].toString(16)).slice(-4)),
                    (e = ("0000" + (+e).toString(16)).slice(-4)),
                    n.push("<" + e + "><" + i + ">"));
              return (
                n.length && (o += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar\n"),
                o + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
              );
            };
          e.events.push([
            "putFont",
            function (e) {
              !(function (e) {
                var r = e.font,
                  i = e.out,
                  o = e.newObject,
                  a = e.putStream,
                  s = e.pdfEscapeWithNeededParanthesis;
                if (r.metadata instanceof t.API.TTFFont && "Identity-H" === r.encoding) {
                  for (
                    var u = r.metadata.Unicode.widths, c = r.metadata.subset.encode(r.metadata.glyIdsUsed, 1), l = "", h = 0;
                    h < c.length;
                    h++
                  )
                    l += String.fromCharCode(c[h]);
                  var f = o();
                  a({ data: l, addLength1: !0, objectId: f }), i("endobj");
                  var d = o();
                  a({ data: n(r.metadata.toUnicode), addLength1: !0, objectId: d }), i("endobj");
                  var p = o();
                  i("<<"),
                    i("/Type /FontDescriptor"),
                    i("/FontName /" + s(r.fontName)),
                    i("/FontFile2 " + f + " 0 R"),
                    i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)),
                    i("/Flags " + r.metadata.flags),
                    i("/StemV " + r.metadata.stemV),
                    i("/ItalicAngle " + r.metadata.italicAngle),
                    i("/Ascent " + r.metadata.ascender),
                    i("/Descent " + r.metadata.decender),
                    i("/CapHeight " + r.metadata.capHeight),
                    i(">>"),
                    i("endobj");
                  var g = o();
                  i("<<"),
                    i("/Type /Font"),
                    i("/BaseFont /" + s(r.fontName)),
                    i("/FontDescriptor " + p + " 0 R"),
                    i("/W " + t.API.PDFObject.convert(u)),
                    i("/CIDToGIDMap /Identity"),
                    i("/DW 1000"),
                    i("/Subtype /CIDFontType2"),
                    i("/CIDSystemInfo"),
                    i("<<"),
                    i("/Supplement 0"),
                    i("/Registry (Adobe)"),
                    i("/Ordering (" + r.encoding + ")"),
                    i(">>"),
                    i(">>"),
                    i("endobj"),
                    (r.objectNumber = o()),
                    i("<<"),
                    i("/Type /Font"),
                    i("/Subtype /Type0"),
                    i("/ToUnicode " + d + " 0 R"),
                    i("/BaseFont /" + s(r.fontName)),
                    i("/Encoding /" + r.encoding),
                    i("/DescendantFonts [" + g + " 0 R]"),
                    i(">>"),
                    i("endobj"),
                    (r.isAlreadyPutted = !0);
                }
              })(e);
            }
          ]),
            e.events.push([
              "putFont",
              function (e) {
                !(function (e) {
                  var r = e.font,
                    i = e.out,
                    o = e.newObject,
                    a = e.putStream,
                    s = e.pdfEscapeWithNeededParanthesis;
                  if (r.metadata instanceof t.API.TTFFont && "WinAnsiEncoding" === r.encoding) {
                    for (var u = r.metadata.rawData, c = "", l = 0; l < u.length; l++) c += String.fromCharCode(u[l]);
                    var h = o();
                    a({ data: c, addLength1: !0, objectId: h }), i("endobj");
                    var f = o();
                    a({ data: n(r.metadata.toUnicode), addLength1: !0, objectId: f }), i("endobj");
                    var d = o();
                    i("<<"),
                      i("/Descent " + r.metadata.decender),
                      i("/CapHeight " + r.metadata.capHeight),
                      i("/StemV " + r.metadata.stemV),
                      i("/Type /FontDescriptor"),
                      i("/FontFile2 " + h + " 0 R"),
                      i("/Flags 96"),
                      i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)),
                      i("/FontName /" + s(r.fontName)),
                      i("/ItalicAngle " + r.metadata.italicAngle),
                      i("/Ascent " + r.metadata.ascender),
                      i(">>"),
                      i("endobj"),
                      (r.objectNumber = o());
                    for (var p = 0; p < r.metadata.hmtx.widths.length; p++)
                      r.metadata.hmtx.widths[p] = parseInt(r.metadata.hmtx.widths[p] * (1e3 / r.metadata.head.unitsPerEm));
                    i(
                      "<</Subtype/TrueType/Type/Font/ToUnicode " +
                        f +
                        " 0 R/BaseFont/" +
                        s(r.fontName) +
                        "/FontDescriptor " +
                        d +
                        " 0 R/Encoding/" +
                        r.encoding +
                        " /FirstChar 29 /LastChar 255 /Widths " +
                        t.API.PDFObject.convert(r.metadata.hmtx.widths) +
                        ">>"
                    ),
                      i("endobj"),
                      (r.isAlreadyPutted = !0);
                  }
                })(e);
              }
            ]);
          var i = function (t) {
            var e,
              n = t.text || "",
              i = t.x,
              o = t.y,
              a = t.options || {},
              s = t.mutex || {},
              u = s.pdfEscape,
              c = s.activeFontKey,
              l = s.fonts,
              h = c,
              f = "",
              d = 0,
              p = "",
              g = l[h].encoding;
            if ("Identity-H" !== l[h].encoding) return { text: n, x: i, y: o, options: a, mutex: s };
            for (p = n, h = c, Array.isArray(n) && (p = n[0]), d = 0; d < p.length; d += 1)
              l[h].metadata.hasOwnProperty("cmap") && (e = l[h].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]),
                e || (p[d].charCodeAt(0) < 256 && l[h].metadata.hasOwnProperty("Unicode")) ? (f += p[d]) : (f += "");
            var m = "";
            return (
              parseInt(h.slice(1)) < 14 || "WinAnsiEncoding" === g
                ? (m = u(f, h)
                    .split("")
                    .map(function (t) {
                      return t.charCodeAt(0).toString(16);
                    })
                    .join(""))
                : "Identity-H" === g && (m = r(f, l[h])),
              (s.isHex = !0),
              { text: m, x: i, y: o, options: a, mutex: s }
            );
          };
          e.events.push([
            "postProcessText",
            function (t) {
              var e = t.text || "",
                r = [],
                n = { text: e, x: t.x, y: t.y, options: t.options, mutex: t.mutex };
              if (Array.isArray(e)) {
                var o = 0;
                for (o = 0; o < e.length; o += 1)
                  Array.isArray(e[o]) && 3 === e[o].length
                    ? r.push([i(Object.assign({}, n, { text: e[o][0] })).text, e[o][1], e[o][2]])
                    : r.push(i(Object.assign({}, n, { text: e[o] })).text);
                t.text = r;
              } else t.text = i(Object.assign({}, n, { text: e })).text;
            }
          ]);
        })(B),
        /**
         * @license
         * jsPDF virtual FileSystem functionality
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        (function (t) {
          var e = function () {
            return void 0 === this.internal.vFS && (this.internal.vFS = {}), !0;
          };
          (t.existsFileInVFS = function (t) {
            return e.call(this), void 0 !== this.internal.vFS[t];
          }),
            (t.addFileToVFS = function (t, r) {
              return e.call(this), (this.internal.vFS[t] = r), this;
            }),
            (t.getFileFromVFS = function (t) {
              return e.call(this), void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null;
            });
        })(B.API),
        /**
         * @license
         * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
         * MIT License
         */
        (function (t) {
          t.__bidiEngine__ = t.prototype.__bidiEngine__ = function (t) {
            var r,
              n,
              i,
              o,
              a,
              s,
              u,
              c = e,
              l = [
                [0, 3, 0, 1, 0, 0, 0],
                [0, 3, 0, 1, 2, 2, 0],
                [0, 3, 0, 17, 2, 0, 1],
                [0, 3, 5, 5, 4, 1, 0],
                [0, 3, 21, 21, 4, 0, 1],
                [0, 3, 5, 5, 4, 2, 0]
              ],
              h = [
                [2, 0, 1, 1, 0, 1, 0],
                [2, 0, 1, 1, 0, 2, 0],
                [2, 0, 2, 1, 3, 2, 0],
                [2, 0, 2, 33, 3, 1, 1]
              ],
              f = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
              d = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
              p = [
                "(",
                ")",
                "(",
                "<",
                ">",
                "<",
                "[",
                "]",
                "[",
                "{",
                "}",
                "{",
                "«",
                "»",
                "«",
                "‹",
                "›",
                "‹",
                "⁅",
                "⁆",
                "⁅",
                "⁽",
                "⁾",
                "⁽",
                "₍",
                "₎",
                "₍",
                "≤",
                "≥",
                "≤",
                "〈",
                "〉",
                "〈",
                "﹙",
                "﹚",
                "﹙",
                "﹛",
                "﹜",
                "﹛",
                "﹝",
                "﹞",
                "﹝",
                "﹤",
                "﹥",
                "﹤"
              ],
              g = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
              m = !1,
              v = 0;
            this.__bidiEngine__ = {};
            var b = function (t) {
                var e = t.charCodeAt(),
                  r = e >> 8,
                  n = d[r];
                return void 0 !== n ? c[256 * n + (255 & e)] : 252 === r || 253 === r ? "AL" : g.test(r) ? "L" : 8 === r ? "R" : "N";
              },
              y = function (t) {
                for (var e, r = 0; r < t.length; r++) {
                  if ("L" === (e = b(t.charAt(r)))) return !1;
                  if ("R" === e) return !0;
                }
                return !1;
              },
              w = function (t, e, a, s) {
                var u,
                  c,
                  l,
                  h,
                  f = e[s];
                switch (f) {
                  case "L":
                  case "R":
                  case "LRE":
                  case "RLE":
                  case "LRO":
                  case "RLO":
                  case "PDF":
                    m = !1;
                    break;
                  case "N":
                  case "AN":
                    break;
                  case "EN":
                    m && (f = "AN");
                    break;
                  case "AL":
                    (m = !0), (f = "R");
                    break;
                  case "WS":
                  case "BN":
                    f = "N";
                    break;
                  case "CS":
                    s < 1 || s + 1 >= e.length || ("EN" !== (u = a[s - 1]) && "AN" !== u) || ("EN" !== (c = e[s + 1]) && "AN" !== c)
                      ? (f = "N")
                      : m && (c = "AN"),
                      (f = c === u ? c : "N");
                    break;
                  case "ES":
                    f = "EN" === (u = s > 0 ? a[s - 1] : "B") && s + 1 < e.length && "EN" === e[s + 1] ? "EN" : "N";
                    break;
                  case "ET":
                    if (s > 0 && "EN" === a[s - 1]) {
                      f = "EN";
                      break;
                    }
                    if (m) {
                      f = "N";
                      break;
                    }
                    for (l = s + 1, h = e.length; l < h && "ET" === e[l]; ) l++;
                    f = l < h && "EN" === e[l] ? "EN" : "N";
                    break;
                  case "NSM":
                    if (i && !o) {
                      for (h = e.length, l = s + 1; l < h && "NSM" === e[l]; ) l++;
                      if (l < h) {
                        var d = t[s],
                          p = (d >= 1425 && d <= 2303) || 64286 === d;
                        if (((u = e[l]), p && ("R" === u || "AL" === u))) {
                          f = "R";
                          break;
                        }
                      }
                    }
                    f = s < 1 || "B" === (u = e[s - 1]) ? "N" : a[s - 1];
                    break;
                  case "B":
                    (m = !1), (r = !0), (f = v);
                    break;
                  case "S":
                    (n = !0), (f = "N");
                }
                return f;
              },
              x = function (t, e, r) {
                var n = t.split("");
                return r && L(n, r, { hiLevel: v }), n.reverse(), e && e.reverse(), n.join("");
              },
              L = function (t, e, i) {
                var o,
                  a,
                  s,
                  u,
                  c,
                  d = -1,
                  p = t.length,
                  g = 0,
                  y = [],
                  x = v ? h : l,
                  L = [];
                for (m = !1, r = !1, n = !1, a = 0; a < p; a++) L[a] = b(t[a]);
                for (s = 0; s < p; s++) {
                  if (((c = g), (y[s] = w(t, L, y, s)), (o = 240 & (g = x[c][f[y[s]]])), (g &= 15), (e[s] = u = x[g][5]), o > 0))
                    if (16 === o) {
                      for (a = d; a < s; a++) e[a] = 1;
                      d = -1;
                    } else d = -1;
                  if (x[g][6]) -1 === d && (d = s);
                  else if (d > -1) {
                    for (a = d; a < s; a++) e[a] = u;
                    d = -1;
                  }
                  "B" === L[s] && (e[s] = 0), (i.hiLevel |= u);
                }
                n &&
                  (function (t, e, r) {
                    for (var n = 0; n < r; n++)
                      if ("S" === t[n]) {
                        e[n] = v;
                        for (var i = n - 1; i >= 0 && "WS" === t[i]; i--) e[i] = v;
                      }
                  })(L, e, p);
              },
              N = function (t, e, n, i, o) {
                if (!(o.hiLevel < t)) {
                  if (1 === t && 1 === v && !r) return e.reverse(), void (n && n.reverse());
                  for (var a, s, u, c, l = e.length, h = 0; h < l; ) {
                    if (i[h] >= t) {
                      for (u = h + 1; u < l && i[u] >= t; ) u++;
                      for (c = h, s = u - 1; c < s; c++, s--)
                        (a = e[c]), (e[c] = e[s]), (e[s] = a), n && ((a = n[c]), (n[c] = n[s]), (n[s] = a));
                      h = u;
                    }
                    h++;
                  }
                }
              },
              A = function (t, e, r) {
                var n = t.split(""),
                  i = { hiLevel: v };
                return (
                  r || (r = []),
                  L(n, r, i),
                  (function (t, e, r) {
                    if (0 !== r.hiLevel && u)
                      for (var n, i = 0; i < t.length; i++) 1 === e[i] && (n = p.indexOf(t[i])) >= 0 && (t[i] = p[n + 1]);
                  })(n, r, i),
                  N(2, n, e, r, i),
                  N(1, n, e, r, i),
                  n.join("")
                );
              };
            return (
              (this.__bidiEngine__.doBidiReorder = function (t, e, r) {
                if (
                  ((function (t, e) {
                    if (e) for (var r = 0; r < t.length; r++) e[r] = r;
                    void 0 === o && (o = y(t)), void 0 === s && (s = y(t));
                  })(t, e),
                  i || !a || s)
                )
                  if (i && a && o ^ s) (v = o ? 1 : 0), (t = x(t, e, r));
                  else if (!i && a && s) (v = o ? 1 : 0), (t = A(t, e, r)), (t = x(t, e));
                  else if (!i || o || a || s) {
                    if (i && !a && o ^ s) (t = x(t, e)), o ? ((v = 0), (t = A(t, e, r))) : ((v = 1), (t = A(t, e, r)), (t = x(t, e)));
                    else if (i && o && !a && s) (v = 1), (t = A(t, e, r)), (t = x(t, e));
                    else if (!i && !a && o ^ s) {
                      var n = u;
                      o
                        ? ((v = 1), (t = A(t, e, r)), (v = 0), (u = !1), (t = A(t, e, r)), (u = n))
                        : ((v = 0), (t = A(t, e, r)), (t = x(t, e)), (v = 1), (u = !1), (t = A(t, e, r)), (u = n), (t = x(t, e)));
                    }
                  } else (v = 0), (t = A(t, e, r));
                else (v = o ? 1 : 0), (t = A(t, e, r));
                return t;
              }),
              (this.__bidiEngine__.setOptions = function (t) {
                t && ((i = t.isInputVisual), (a = t.isOutputVisual), (o = t.isInputRtl), (s = t.isOutputRtl), (u = t.isSymmetricSwapping));
              }),
              this.__bidiEngine__.setOptions(t),
              this.__bidiEngine__
            );
          };
          var e = [
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "S",
              "B",
              "S",
              "WS",
              "B",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "B",
              "B",
              "B",
              "S",
              "WS",
              "N",
              "N",
              "ET",
              "ET",
              "ET",
              "N",
              "N",
              "N",
              "N",
              "N",
              "ES",
              "CS",
              "ES",
              "CS",
              "CS",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "CS",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "N",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "B",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "CS",
              "N",
              "ET",
              "ET",
              "ET",
              "ET",
              "N",
              "N",
              "N",
              "N",
              "L",
              "N",
              "N",
              "BN",
              "N",
              "N",
              "ET",
              "ET",
              "EN",
              "EN",
              "N",
              "L",
              "N",
              "N",
              "N",
              "EN",
              "L",
              "N",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "L",
              "N",
              "N",
              "N",
              "N",
              "N",
              "ET",
              "N",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "R",
              "NSM",
              "R",
              "NSM",
              "NSM",
              "R",
              "NSM",
              "NSM",
              "R",
              "NSM",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "N",
              "N",
              "N",
              "N",
              "N",
              "R",
              "R",
              "R",
              "R",
              "R",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "AN",
              "AN",
              "AN",
              "AN",
              "AN",
              "AN",
              "N",
              "N",
              "AL",
              "ET",
              "ET",
              "AL",
              "CS",
              "AL",
              "N",
              "N",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "AL",
              "AL",
              "N",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "AN",
              "AN",
              "AN",
              "AN",
              "AN",
              "AN",
              "AN",
              "AN",
              "AN",
              "AN",
              "ET",
              "AN",
              "AN",
              "AL",
              "AL",
              "AL",
              "NSM",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "AN",
              "N",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "AL",
              "AL",
              "NSM",
              "NSM",
              "N",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "AL",
              "AL",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "N",
              "AL",
              "AL",
              "NSM",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "N",
              "N",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "AL",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "R",
              "R",
              "N",
              "N",
              "N",
              "N",
              "R",
              "N",
              "N",
              "N",
              "N",
              "N",
              "WS",
              "WS",
              "WS",
              "WS",
              "WS",
              "WS",
              "WS",
              "WS",
              "WS",
              "WS",
              "WS",
              "BN",
              "BN",
              "BN",
              "L",
              "R",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "WS",
              "B",
              "LRE",
              "RLE",
              "PDF",
              "LRO",
              "RLO",
              "CS",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "CS",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "WS",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "N",
              "LRI",
              "RLI",
              "FSI",
              "PDI",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "BN",
              "EN",
              "L",
              "N",
              "N",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "ES",
              "ES",
              "N",
              "N",
              "N",
              "L",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "ES",
              "ES",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "ET",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "N",
              "N",
              "R",
              "NSM",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "ES",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "N",
              "R",
              "R",
              "R",
              "R",
              "R",
              "N",
              "R",
              "N",
              "R",
              "R",
              "N",
              "R",
              "R",
              "N",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "R",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "NSM",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "CS",
              "N",
              "CS",
              "N",
              "N",
              "CS",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "ET",
              "N",
              "N",
              "ES",
              "ES",
              "N",
              "N",
              "N",
              "N",
              "N",
              "ET",
              "ET",
              "N",
              "N",
              "N",
              "N",
              "N",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "N",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "AL",
              "N",
              "N",
              "BN",
              "N",
              "N",
              "N",
              "ET",
              "ET",
              "ET",
              "N",
              "N",
              "N",
              "N",
              "N",
              "ES",
              "CS",
              "ES",
              "CS",
              "CS",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "EN",
              "CS",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "L",
              "L",
              "L",
              "L",
              "L",
              "L",
              "N",
              "N",
              "L",
              "L",
              "L",
              "N",
              "N",
              "N",
              "ET",
              "ET",
              "N",
              "N",
              "N",
              "ET",
              "ET",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N",
              "N"
            ],
            r = new t.__bidiEngine__({ isInputVisual: !0 });
          t.API.events.push([
            "postProcessText",
            function (t) {
              var e = t.text,
                n = (t.x, t.y, t.options || {}),
                i = (t.mutex, n.lang, []);
              if (
                ((n.isInputVisual = "boolean" != typeof n.isInputVisual || n.isInputVisual),
                r.setOptions(n),
                "[object Array]" === Object.prototype.toString.call(e))
              ) {
                var o = 0;
                for (i = [], o = 0; o < e.length; o += 1)
                  "[object Array]" === Object.prototype.toString.call(e[o])
                    ? i.push([r.doBidiReorder(e[o][0]), e[o][1], e[o][2]])
                    : i.push([r.doBidiReorder(e[o])]);
                t.text = i;
              } else t.text = r.doBidiReorder(e);
              r.setOptions({ isInputVisual: !0 });
            }
          ]);
        })(B),
        (B.API.TTFFont = (function () {
          function t(t) {
            var e;
            if (((this.rawData = t), (e = this.contents = new re(t)), (this.contents.pos = 4), "ttcf" === e.readString(4)))
              throw new Error("TTCF not supported.");
            (e.pos = 0), this.parse(), (this.subset = new xe(this)), this.registerTTF();
          }
          return (
            (t.open = function (e) {
              return new t(e);
            }),
            (t.prototype.parse = function () {
              return (
                (this.directory = new ne(this.contents)),
                (this.head = new ae(this)),
                (this.name = new de(this)),
                (this.cmap = new ue(this)),
                (this.toUnicode = {}),
                (this.hhea = new ce(this)),
                (this.maxp = new pe(this)),
                (this.hmtx = new ge(this)),
                (this.post = new he(this)),
                (this.os2 = new le(this)),
                (this.loca = new we(this)),
                (this.glyf = new ve(this)),
                (this.ascender = (this.os2.exists && this.os2.ascender) || this.hhea.ascender),
                (this.decender = (this.os2.exists && this.os2.decender) || this.hhea.decender),
                (this.lineGap = (this.os2.exists && this.os2.lineGap) || this.hhea.lineGap),
                (this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax])
              );
            }),
            (t.prototype.registerTTF = function () {
              var t, e, r, n, i;
              if (
                ((this.scaleFactor = 1e3 / this.head.unitsPerEm),
                (this.bbox = function () {
                  var e, r, n, i;
                  for (i = [], e = 0, r = (n = this.bbox).length; e < r; e++) (t = n[e]), i.push(Math.round(t * this.scaleFactor));
                  return i;
                }.call(this)),
                (this.stemV = 0),
                this.post.exists
                  ? ((r = 255 & (n = this.post.italic_angle)),
                    0 != (32768 & (e = n >> 16)) && (e = -(1 + (65535 ^ e))),
                    (this.italicAngle = +(e + "." + r)))
                  : (this.italicAngle = 0),
                (this.ascender = Math.round(this.ascender * this.scaleFactor)),
                (this.decender = Math.round(this.decender * this.scaleFactor)),
                (this.lineGap = Math.round(this.lineGap * this.scaleFactor)),
                (this.capHeight = (this.os2.exists && this.os2.capHeight) || this.ascender),
                (this.xHeight = (this.os2.exists && this.os2.xHeight) || 0),
                (this.familyClass = ((this.os2.exists && this.os2.familyClass) || 0) >> 8),
                (this.isSerif = 1 === (i = this.familyClass) || 2 === i || 3 === i || 4 === i || 5 === i || 7 === i),
                (this.isScript = 10 === this.familyClass),
                (this.flags = 0),
                this.post.isFixedPitch && (this.flags |= 1),
                this.isSerif && (this.flags |= 2),
                this.isScript && (this.flags |= 8),
                0 !== this.italicAngle && (this.flags |= 64),
                (this.flags |= 32),
                !this.cmap.unicode)
              )
                throw new Error("No unicode cmap for font");
            }),
            (t.prototype.characterToGlyph = function (t) {
              var e;
              return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0;
            }),
            (t.prototype.widthOfGlyph = function (t) {
              var e;
              return (e = 1e3 / this.head.unitsPerEm), this.hmtx.forGlyph(t).advance * e;
            }),
            (t.prototype.widthOfString = function (t, e, r) {
              var n, i, o, a;
              for (o = 0, i = 0, a = (t = "" + t).length; 0 <= a ? i < a : i > a; i = 0 <= a ? ++i : --i)
                (n = t.charCodeAt(i)), (o += this.widthOfGlyph(this.characterToGlyph(n)) + r * (1e3 / e) || 0);
              return o * (e / 1e3);
            }),
            (t.prototype.lineHeight = function (t, e) {
              var r;
              return null == e && (e = !1), (r = e ? this.lineGap : 0), ((this.ascender + r - this.decender) / 1e3) * t;
            }),
            t
          );
        })());
      var ee,
        re = (function () {
          function t(t) {
            (this.data = null != t ? t : []), (this.pos = 0), (this.length = this.data.length);
          }
          return (
            (t.prototype.readByte = function () {
              return this.data[this.pos++];
            }),
            (t.prototype.writeByte = function (t) {
              return (this.data[this.pos++] = t);
            }),
            (t.prototype.readUInt32 = function () {
              return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
            }),
            (t.prototype.writeUInt32 = function (t) {
              return (
                this.writeByte((t >>> 24) & 255), this.writeByte((t >> 16) & 255), this.writeByte((t >> 8) & 255), this.writeByte(255 & t)
              );
            }),
            (t.prototype.readInt32 = function () {
              var t;
              return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t;
            }),
            (t.prototype.writeInt32 = function (t) {
              return t < 0 && (t += 4294967296), this.writeUInt32(t);
            }),
            (t.prototype.readUInt16 = function () {
              return (this.readByte() << 8) | this.readByte();
            }),
            (t.prototype.writeUInt16 = function (t) {
              return this.writeByte((t >> 8) & 255), this.writeByte(255 & t);
            }),
            (t.prototype.readInt16 = function () {
              var t;
              return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
            }),
            (t.prototype.writeInt16 = function (t) {
              return t < 0 && (t += 65536), this.writeUInt16(t);
            }),
            (t.prototype.readString = function (t) {
              var e, r;
              for (r = [], e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e) r[e] = String.fromCharCode(this.readByte());
              return r.join("");
            }),
            (t.prototype.writeString = function (t) {
              var e, r, n;
              for (n = [], e = 0, r = t.length; 0 <= r ? e < r : e > r; e = 0 <= r ? ++e : --e) n.push(this.writeByte(t.charCodeAt(e)));
              return n;
            }),
            (t.prototype.readShort = function () {
              return this.readInt16();
            }),
            (t.prototype.writeShort = function (t) {
              return this.writeInt16(t);
            }),
            (t.prototype.readLongLong = function () {
              var t, e, r, n, i, o, a, s;
              return (
                (t = this.readByte()),
                (e = this.readByte()),
                (r = this.readByte()),
                (n = this.readByte()),
                (i = this.readByte()),
                (o = this.readByte()),
                (a = this.readByte()),
                (s = this.readByte()),
                128 & t
                  ? -1 *
                    (72057594037927940 * (255 ^ t) +
                      281474976710656 * (255 ^ e) +
                      1099511627776 * (255 ^ r) +
                      4294967296 * (255 ^ n) +
                      16777216 * (255 ^ i) +
                      65536 * (255 ^ o) +
                      256 * (255 ^ a) +
                      (255 ^ s) +
                      1)
                  : 72057594037927940 * t +
                    281474976710656 * e +
                    1099511627776 * r +
                    4294967296 * n +
                    16777216 * i +
                    65536 * o +
                    256 * a +
                    s
              );
            }),
            (t.prototype.writeLongLong = function (t) {
              var e, r;
              return (
                (e = Math.floor(t / 4294967296)),
                (r = 4294967295 & t),
                this.writeByte((e >> 24) & 255),
                this.writeByte((e >> 16) & 255),
                this.writeByte((e >> 8) & 255),
                this.writeByte(255 & e),
                this.writeByte((r >> 24) & 255),
                this.writeByte((r >> 16) & 255),
                this.writeByte((r >> 8) & 255),
                this.writeByte(255 & r)
              );
            }),
            (t.prototype.readInt = function () {
              return this.readInt32();
            }),
            (t.prototype.writeInt = function (t) {
              return this.writeInt32(t);
            }),
            (t.prototype.read = function (t) {
              var e, r;
              for (e = [], r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r) e.push(this.readByte());
              return e;
            }),
            (t.prototype.write = function (t) {
              var e, r, n, i;
              for (i = [], r = 0, n = t.length; r < n; r++) (e = t[r]), i.push(this.writeByte(e));
              return i;
            }),
            t
          );
        })(),
        ne = (function () {
          var t;
          function e(t) {
            var e, r, n;
            for (
              this.scalarType = t.readInt(),
                this.tableCount = t.readShort(),
                this.searchRange = t.readShort(),
                this.entrySelector = t.readShort(),
                this.rangeShift = t.readShort(),
                this.tables = {},
                r = 0,
                n = this.tableCount;
              0 <= n ? r < n : r > n;
              r = 0 <= n ? ++r : --r
            )
              (e = { tag: t.readString(4), checksum: t.readInt(), offset: t.readInt(), length: t.readInt() }), (this.tables[e.tag] = e);
          }
          return (
            (e.prototype.encode = function (e) {
              var r, n, i, o, a, s, u, c, l, h, f, d, p;
              for (p in ((f = Object.keys(e).length),
              (s = Math.log(2)),
              (l = 16 * Math.floor(Math.log(f) / s)),
              (o = Math.floor(l / s)),
              (c = 16 * f - l),
              (n = new re()).writeInt(this.scalarType),
              n.writeShort(f),
              n.writeShort(l),
              n.writeShort(o),
              n.writeShort(c),
              (i = 16 * f),
              (u = n.pos + i),
              (a = null),
              (d = []),
              e))
                for (
                  h = e[p],
                    n.writeString(p),
                    n.writeInt(t(h)),
                    n.writeInt(u),
                    n.writeInt(h.length),
                    d = d.concat(h),
                    "head" === p && (a = u),
                    u += h.length;
                  u % 4;

                )
                  d.push(0), u++;
              return n.write(d), (r = 2981146554 - t(n.data)), (n.pos = a + 8), n.writeUInt32(r), n.data;
            }),
            (t = function (t) {
              var e, r, n, i;
              for (t = me.call(t); t.length % 4; ) t.push(0);
              for (n = new re(t), r = 0, e = 0, i = t.length; e < i; e = e += 4) r += n.readUInt32();
              return 4294967295 & r;
            }),
            e
          );
        })(),
        ie = {}.hasOwnProperty,
        oe = function (t, e) {
          for (var r in e) ie.call(e, r) && (t[r] = e[r]);
          function n() {
            this.constructor = t;
          }
          return (n.prototype = e.prototype), (t.prototype = new n()), (t.__super__ = e.prototype), t;
        };
      ee = (function () {
        function t(t) {
          var e;
          (this.file = t),
            (e = this.file.directory.tables[this.tag]),
            (this.exists = !!e),
            e && ((this.offset = e.offset), (this.length = e.length), this.parse(this.file.contents));
        }
        return (
          (t.prototype.parse = function () {}),
          (t.prototype.encode = function () {}),
          (t.prototype.raw = function () {
            return this.exists ? ((this.file.contents.pos = this.offset), this.file.contents.read(this.length)) : null;
          }),
          t
        );
      })();
      var ae = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "head"),
            (e.prototype.parse = function (t) {
              return (
                (t.pos = this.offset),
                (this.version = t.readInt()),
                (this.revision = t.readInt()),
                (this.checkSumAdjustment = t.readInt()),
                (this.magicNumber = t.readInt()),
                (this.flags = t.readShort()),
                (this.unitsPerEm = t.readShort()),
                (this.created = t.readLongLong()),
                (this.modified = t.readLongLong()),
                (this.xMin = t.readShort()),
                (this.yMin = t.readShort()),
                (this.xMax = t.readShort()),
                (this.yMax = t.readShort()),
                (this.macStyle = t.readShort()),
                (this.lowestRecPPEM = t.readShort()),
                (this.fontDirectionHint = t.readShort()),
                (this.indexToLocFormat = t.readShort()),
                (this.glyphDataFormat = t.readShort())
              );
            }),
            (e.prototype.encode = function (t) {
              var e;
              return (
                (e = new re()).writeInt(this.version),
                e.writeInt(this.revision),
                e.writeInt(this.checkSumAdjustment),
                e.writeInt(this.magicNumber),
                e.writeShort(this.flags),
                e.writeShort(this.unitsPerEm),
                e.writeLongLong(this.created),
                e.writeLongLong(this.modified),
                e.writeShort(this.xMin),
                e.writeShort(this.yMin),
                e.writeShort(this.xMax),
                e.writeShort(this.yMax),
                e.writeShort(this.macStyle),
                e.writeShort(this.lowestRecPPEM),
                e.writeShort(this.fontDirectionHint),
                e.writeShort(t),
                e.writeShort(this.glyphDataFormat),
                e.data
              );
            }),
            e
          );
        })(),
        se = (function () {
          function t(t, e) {
            var r, n, i, o, a, s, u, c, l, h, f, d, p, g, m, v, b;
            switch (
              ((this.platformID = t.readUInt16()),
              (this.encodingID = t.readShort()),
              (this.offset = e + t.readInt()),
              (l = t.pos),
              (t.pos = this.offset),
              (this.format = t.readUInt16()),
              (this.length = t.readUInt16()),
              (this.language = t.readUInt16()),
              (this.isUnicode =
                (3 === this.platformID && 1 === this.encodingID && 4 === this.format) || (0 === this.platformID && 4 === this.format)),
              (this.codeMap = {}),
              this.format)
            ) {
              case 0:
                for (s = 0; s < 256; ++s) this.codeMap[s] = t.readByte();
                break;
              case 4:
                for (
                  f = t.readUInt16(),
                    h = f / 2,
                    t.pos += 6,
                    i = (function () {
                      var e, r;
                      for (r = [], s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e) r.push(t.readUInt16());
                      return r;
                    })(),
                    t.pos += 2,
                    p = (function () {
                      var e, r;
                      for (r = [], s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e) r.push(t.readUInt16());
                      return r;
                    })(),
                    u = (function () {
                      var e, r;
                      for (r = [], s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e) r.push(t.readUInt16());
                      return r;
                    })(),
                    c = (function () {
                      var e, r;
                      for (r = [], s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e) r.push(t.readUInt16());
                      return r;
                    })(),
                    n = (this.length - t.pos + this.offset) / 2,
                    a = (function () {
                      var e, r;
                      for (r = [], s = e = 0; 0 <= n ? e < n : e > n; s = 0 <= n ? ++e : --e) r.push(t.readUInt16());
                      return r;
                    })(),
                    s = m = 0,
                    b = i.length;
                  m < b;
                  s = ++m
                )
                  for (g = i[s], r = v = d = p[s]; d <= g ? v <= g : v >= g; r = d <= g ? ++v : --v)
                    0 === c[s] ? (o = r + u[s]) : 0 !== (o = a[c[s] / 2 + (r - d) - (h - s)] || 0) && (o += u[s]),
                      (this.codeMap[r] = 65535 & o);
            }
            t.pos = l;
          }
          return (
            (t.encode = function (t, e) {
              var r,
                n,
                i,
                o,
                a,
                s,
                u,
                c,
                l,
                h,
                f,
                d,
                p,
                g,
                m,
                v,
                b,
                y,
                w,
                x,
                L,
                N,
                A,
                _,
                S,
                P,
                k,
                F,
                I,
                C,
                E,
                j,
                O,
                M,
                R,
                B,
                T,
                q,
                D,
                U,
                z,
                H,
                W,
                V,
                G,
                Y;
              switch (
                ((F = new re()),
                (o = Object.keys(t).sort(function (t, e) {
                  return t - e;
                })),
                e)
              ) {
                case "macroman":
                  for (
                    p = 0,
                      g = (function () {
                        var t = [];
                        for (d = 0; d < 256; ++d) t.push(0);
                        return t;
                      })(),
                      v = { 0: 0 },
                      i = {},
                      I = 0,
                      O = o.length;
                    I < O;
                    I++
                  )
                    null == v[(W = t[(n = o[I])])] && (v[W] = ++p), (i[n] = { old: t[n], new: v[t[n]] }), (g[n] = v[t[n]]);
                  return (
                    F.writeUInt16(1),
                    F.writeUInt16(0),
                    F.writeUInt32(12),
                    F.writeUInt16(0),
                    F.writeUInt16(262),
                    F.writeUInt16(0),
                    F.write(g),
                    { charMap: i, subtable: F.data, maxGlyphID: p + 1 }
                  );
                case "unicode":
                  for (P = [], l = [], b = 0, v = {}, r = {}, m = u = null, C = 0, M = o.length; C < M; C++)
                    null == v[(w = t[(n = o[C])])] && (v[w] = ++b),
                      (r[n] = { old: w, new: v[w] }),
                      (a = v[w] - n),
                      (null != m && a === u) || (m && l.push(m), P.push(n), (u = a)),
                      (m = n);
                  for (
                    m && l.push(m),
                      l.push(65535),
                      P.push(65535),
                      _ = 2 * (A = P.length),
                      N = 2 * Math.pow(Math.log(A) / Math.LN2, 2),
                      h = Math.log(N / 2) / Math.LN2,
                      L = 2 * A - N,
                      s = [],
                      x = [],
                      f = [],
                      d = E = 0,
                      R = P.length;
                    E < R;
                    d = ++E
                  ) {
                    if (((S = P[d]), (c = l[d]), 65535 === S)) {
                      s.push(0), x.push(0);
                      break;
                    }
                    if (S - (k = r[S].new) >= 32768)
                      for (s.push(0), x.push(2 * (f.length + A - d)), n = j = S; S <= c ? j <= c : j >= c; n = S <= c ? ++j : --j)
                        f.push(r[n].new);
                    else s.push(k - S), x.push(0);
                  }
                  for (
                    F.writeUInt16(3),
                      F.writeUInt16(1),
                      F.writeUInt32(12),
                      F.writeUInt16(4),
                      F.writeUInt16(16 + 8 * A + 2 * f.length),
                      F.writeUInt16(0),
                      F.writeUInt16(_),
                      F.writeUInt16(N),
                      F.writeUInt16(h),
                      F.writeUInt16(L),
                      z = 0,
                      B = l.length;
                    z < B;
                    z++
                  )
                    (n = l[z]), F.writeUInt16(n);
                  for (F.writeUInt16(0), H = 0, T = P.length; H < T; H++) (n = P[H]), F.writeUInt16(n);
                  for (V = 0, q = s.length; V < q; V++) (a = s[V]), F.writeUInt16(a);
                  for (G = 0, D = x.length; G < D; G++) (y = x[G]), F.writeUInt16(y);
                  for (Y = 0, U = f.length; Y < U; Y++) (p = f[Y]), F.writeUInt16(p);
                  return { charMap: r, subtable: F.data, maxGlyphID: b + 1 };
              }
            }),
            t
          );
        })(),
        ue = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "cmap"),
            (e.prototype.parse = function (t) {
              var e, r, n;
              for (
                t.pos = this.offset, this.version = t.readUInt16(), n = t.readUInt16(), this.tables = [], this.unicode = null, r = 0;
                0 <= n ? r < n : r > n;
                r = 0 <= n ? ++r : --r
              )
                (e = new se(t, this.offset)), this.tables.push(e), e.isUnicode && null == this.unicode && (this.unicode = e);
              return !0;
            }),
            (e.encode = function (t, e) {
              var r, n;
              return (
                null == e && (e = "macroman"),
                (r = se.encode(t, e)),
                (n = new re()).writeUInt16(0),
                n.writeUInt16(1),
                (r.table = n.data.concat(r.subtable)),
                r
              );
            }),
            e
          );
        })(),
        ce = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "hhea"),
            (e.prototype.parse = function (t) {
              return (
                (t.pos = this.offset),
                (this.version = t.readInt()),
                (this.ascender = t.readShort()),
                (this.decender = t.readShort()),
                (this.lineGap = t.readShort()),
                (this.advanceWidthMax = t.readShort()),
                (this.minLeftSideBearing = t.readShort()),
                (this.minRightSideBearing = t.readShort()),
                (this.xMaxExtent = t.readShort()),
                (this.caretSlopeRise = t.readShort()),
                (this.caretSlopeRun = t.readShort()),
                (this.caretOffset = t.readShort()),
                (t.pos += 8),
                (this.metricDataFormat = t.readShort()),
                (this.numberOfMetrics = t.readUInt16())
              );
            }),
            e
          );
        })(),
        le = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "OS/2"),
            (e.prototype.parse = function (t) {
              if (
                ((t.pos = this.offset),
                (this.version = t.readUInt16()),
                (this.averageCharWidth = t.readShort()),
                (this.weightClass = t.readUInt16()),
                (this.widthClass = t.readUInt16()),
                (this.type = t.readShort()),
                (this.ySubscriptXSize = t.readShort()),
                (this.ySubscriptYSize = t.readShort()),
                (this.ySubscriptXOffset = t.readShort()),
                (this.ySubscriptYOffset = t.readShort()),
                (this.ySuperscriptXSize = t.readShort()),
                (this.ySuperscriptYSize = t.readShort()),
                (this.ySuperscriptXOffset = t.readShort()),
                (this.ySuperscriptYOffset = t.readShort()),
                (this.yStrikeoutSize = t.readShort()),
                (this.yStrikeoutPosition = t.readShort()),
                (this.familyClass = t.readShort()),
                (this.panose = (function () {
                  var e, r;
                  for (r = [], e = 0; e < 10; ++e) r.push(t.readByte());
                  return r;
                })()),
                (this.charRange = (function () {
                  var e, r;
                  for (r = [], e = 0; e < 4; ++e) r.push(t.readInt());
                  return r;
                })()),
                (this.vendorID = t.readString(4)),
                (this.selection = t.readShort()),
                (this.firstCharIndex = t.readShort()),
                (this.lastCharIndex = t.readShort()),
                this.version > 0 &&
                  ((this.ascent = t.readShort()),
                  (this.descent = t.readShort()),
                  (this.lineGap = t.readShort()),
                  (this.winAscent = t.readShort()),
                  (this.winDescent = t.readShort()),
                  (this.codePageRange = (function () {
                    var e, r;
                    for (r = [], e = 0; e < 2; e = ++e) r.push(t.readInt());
                    return r;
                  })()),
                  this.version > 1))
              )
                return (
                  (this.xHeight = t.readShort()),
                  (this.capHeight = t.readShort()),
                  (this.defaultChar = t.readShort()),
                  (this.breakChar = t.readShort()),
                  (this.maxContext = t.readShort())
                );
            }),
            e
          );
        })(),
        he = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "post"),
            (e.prototype.parse = function (t) {
              var e, r, n;
              switch (
                ((t.pos = this.offset),
                (this.format = t.readInt()),
                (this.italicAngle = t.readInt()),
                (this.underlinePosition = t.readShort()),
                (this.underlineThickness = t.readShort()),
                (this.isFixedPitch = t.readInt()),
                (this.minMemType42 = t.readInt()),
                (this.maxMemType42 = t.readInt()),
                (this.minMemType1 = t.readInt()),
                (this.maxMemType1 = t.readInt()),
                this.format)
              ) {
                case 65536:
                case 196608:
                  break;
                case 131072:
                  var i;
                  for (r = t.readUInt16(), this.glyphNameIndex = [], i = 0; 0 <= r ? i < r : i > r; i = 0 <= r ? ++i : --i)
                    this.glyphNameIndex.push(t.readUInt16());
                  for (this.names = [], n = []; t.pos < this.offset + this.length; )
                    (e = t.readByte()), n.push(this.names.push(t.readString(e)));
                  return n;
                case 151552:
                  return (r = t.readUInt16()), (this.offsets = t.read(r));
                case 262144:
                  return (this.map = function () {
                    var e, r, n;
                    for (n = [], i = e = 0, r = this.file.maxp.numGlyphs; 0 <= r ? e < r : e > r; i = 0 <= r ? ++e : --e)
                      n.push(t.readUInt32());
                    return n;
                  }.call(this));
              }
            }),
            e
          );
        })(),
        fe = function (t, e) {
          (this.raw = t),
            (this.length = t.length),
            (this.platformID = e.platformID),
            (this.encodingID = e.encodingID),
            (this.languageID = e.languageID);
        },
        de = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "name"),
            (e.prototype.parse = function (t) {
              var e, r, n, i, o, a, s, u, c, l, h;
              for (
                t.pos = this.offset, t.readShort(), e = t.readShort(), a = t.readShort(), r = [], i = 0;
                0 <= e ? i < e : i > e;
                i = 0 <= e ? ++i : --i
              )
                r.push({
                  platformID: t.readShort(),
                  encodingID: t.readShort(),
                  languageID: t.readShort(),
                  nameID: t.readShort(),
                  length: t.readShort(),
                  offset: this.offset + a + t.readShort()
                });
              for (s = {}, i = c = 0, l = r.length; c < l; i = ++c)
                (n = r[i]),
                  (t.pos = n.offset),
                  (u = t.readString(n.length)),
                  (o = new fe(u, n)),
                  null == s[(h = n.nameID)] && (s[h] = []),
                  s[n.nameID].push(o);
              (this.strings = s),
                (this.copyright = s[0]),
                (this.fontFamily = s[1]),
                (this.fontSubfamily = s[2]),
                (this.uniqueSubfamily = s[3]),
                (this.fontName = s[4]),
                (this.version = s[5]);
              try {
                this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
              } catch (t) {
                this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
              }
              return (
                (this.trademark = s[7]),
                (this.manufacturer = s[8]),
                (this.designer = s[9]),
                (this.description = s[10]),
                (this.vendorUrl = s[11]),
                (this.designerUrl = s[12]),
                (this.license = s[13]),
                (this.licenseUrl = s[14]),
                (this.preferredFamily = s[15]),
                (this.preferredSubfamily = s[17]),
                (this.compatibleFull = s[18]),
                (this.sampleText = s[19])
              );
            }),
            e
          );
        })(),
        pe = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "maxp"),
            (e.prototype.parse = function (t) {
              return (
                (t.pos = this.offset),
                (this.version = t.readInt()),
                (this.numGlyphs = t.readUInt16()),
                (this.maxPoints = t.readUInt16()),
                (this.maxContours = t.readUInt16()),
                (this.maxCompositePoints = t.readUInt16()),
                (this.maxComponentContours = t.readUInt16()),
                (this.maxZones = t.readUInt16()),
                (this.maxTwilightPoints = t.readUInt16()),
                (this.maxStorage = t.readUInt16()),
                (this.maxFunctionDefs = t.readUInt16()),
                (this.maxInstructionDefs = t.readUInt16()),
                (this.maxStackElements = t.readUInt16()),
                (this.maxSizeOfInstructions = t.readUInt16()),
                (this.maxComponentElements = t.readUInt16()),
                (this.maxComponentDepth = t.readUInt16())
              );
            }),
            e
          );
        })(),
        ge = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "hmtx"),
            (e.prototype.parse = function (t) {
              var e, r, n, i, o, a, s;
              for (
                t.pos = this.offset, this.metrics = [], e = 0, a = this.file.hhea.numberOfMetrics;
                0 <= a ? e < a : e > a;
                e = 0 <= a ? ++e : --e
              )
                this.metrics.push({ advance: t.readUInt16(), lsb: t.readInt16() });
              for (
                n = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
                  this.leftSideBearings = (function () {
                    var r, i;
                    for (i = [], e = r = 0; 0 <= n ? r < n : r > n; e = 0 <= n ? ++r : --r) i.push(t.readInt16());
                    return i;
                  })(),
                  this.widths = function () {
                    var t, e, r, n;
                    for (n = [], t = 0, e = (r = this.metrics).length; t < e; t++) (i = r[t]), n.push(i.advance);
                    return n;
                  }.call(this),
                  r = this.widths[this.widths.length - 1],
                  s = [],
                  e = o = 0;
                0 <= n ? o < n : o > n;
                e = 0 <= n ? ++o : --o
              )
                s.push(this.widths.push(r));
              return s;
            }),
            (e.prototype.forGlyph = function (t) {
              return t in this.metrics
                ? this.metrics[t]
                : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[t - this.metrics.length] };
            }),
            e
          );
        })(),
        me = [].slice,
        ve = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "glyf"),
            (e.prototype.parse = function () {
              return (this.cache = {});
            }),
            (e.prototype.glyphFor = function (t) {
              var e, r, n, i, o, a, s, u, c, l;
              return t in this.cache
                ? this.cache[t]
                : ((i = this.file.loca),
                  (e = this.file.contents),
                  (r = i.indexOf(t)),
                  0 === (n = i.lengthOf(t))
                    ? (this.cache[t] = null)
                    : ((e.pos = this.offset + r),
                      (o = (a = new re(e.read(n))).readShort()),
                      (u = a.readShort()),
                      (l = a.readShort()),
                      (s = a.readShort()),
                      (c = a.readShort()),
                      (this.cache[t] = -1 === o ? new ye(a, u, l, s, c) : new be(a, o, u, l, s, c)),
                      this.cache[t]));
            }),
            (e.prototype.encode = function (t, e, r) {
              var n, i, o, a, s;
              for (o = [], i = [], a = 0, s = e.length; a < s; a++) (n = t[e[a]]), i.push(o.length), n && (o = o.concat(n.encode(r)));
              return i.push(o.length), { table: o, offsets: i };
            }),
            e
          );
        })(),
        be = (function () {
          function t(t, e, r, n, i, o) {
            (this.raw = t),
              (this.numberOfContours = e),
              (this.xMin = r),
              (this.yMin = n),
              (this.xMax = i),
              (this.yMax = o),
              (this.compound = !1);
          }
          return (
            (t.prototype.encode = function () {
              return this.raw.data;
            }),
            t
          );
        })(),
        ye = (function () {
          function t(t, e, r, n, i) {
            var o, a;
            for (
              this.raw = t,
                this.xMin = e,
                this.yMin = r,
                this.xMax = n,
                this.yMax = i,
                this.compound = !0,
                this.glyphIDs = [],
                this.glyphOffsets = [],
                o = this.raw;
              (a = o.readShort()), this.glyphOffsets.push(o.pos), this.glyphIDs.push(o.readUInt16()), 32 & a;

            )
              (o.pos += 1 & a ? 4 : 2), 128 & a ? (o.pos += 8) : 64 & a ? (o.pos += 4) : 8 & a && (o.pos += 2);
          }
          return (
            (t.prototype.encode = function () {
              var t, e, r;
              for (e = new re(me.call(this.raw.data)), t = 0, r = this.glyphIDs.length; t < r; ++t) e.pos = this.glyphOffsets[t];
              return e.data;
            }),
            t
          );
        })(),
        we = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            oe(e, ee),
            (e.prototype.tag = "loca"),
            (e.prototype.parse = function (t) {
              var e, r;
              return (
                (t.pos = this.offset),
                (e = this.file.head.indexToLocFormat),
                (this.offsets =
                  0 === e
                    ? function () {
                        var e, n;
                        for (n = [], r = 0, e = this.length; r < e; r += 2) n.push(2 * t.readUInt16());
                        return n;
                      }.call(this)
                    : function () {
                        var e, n;
                        for (n = [], r = 0, e = this.length; r < e; r += 4) n.push(t.readUInt32());
                        return n;
                      }.call(this))
              );
            }),
            (e.prototype.indexOf = function (t) {
              return this.offsets[t];
            }),
            (e.prototype.lengthOf = function (t) {
              return this.offsets[t + 1] - this.offsets[t];
            }),
            (e.prototype.encode = function (t, e) {
              for (var r = new Uint32Array(this.offsets.length), n = 0, i = 0, o = 0; o < r.length; ++o)
                if (((r[o] = n), i < e.length && e[i] == o)) {
                  ++i, (r[o] = n);
                  var a = this.offsets[o],
                    s = this.offsets[o + 1] - a;
                  s > 0 && (n += s);
                }
              for (var u = new Array(4 * r.length), c = 0; c < r.length; ++c)
                (u[4 * c + 3] = 255 & r[c]),
                  (u[4 * c + 2] = (65280 & r[c]) >> 8),
                  (u[4 * c + 1] = (16711680 & r[c]) >> 16),
                  (u[4 * c] = (4278190080 & r[c]) >> 24);
              return u;
            }),
            e
          );
        })(),
        xe = (function () {
          function t(t) {
            (this.font = t), (this.subset = {}), (this.unicodes = {}), (this.next = 33);
          }
          return (
            (t.prototype.generateCmap = function () {
              var t, e, r, n, i;
              for (e in ((n = this.font.cmap.tables[0].codeMap), (t = {}), (i = this.subset))) (r = i[e]), (t[e] = n[r]);
              return t;
            }),
            (t.prototype.glyphsFor = function (t) {
              var e, r, n, i, o, a, s;
              for (n = {}, o = 0, a = t.length; o < a; o++) n[(i = t[o])] = this.font.glyf.glyphFor(i);
              for (i in ((e = []), n)) (null != (r = n[i]) ? r.compound : void 0) && e.push.apply(e, r.glyphIDs);
              if (e.length > 0) for (i in (s = this.glyphsFor(e))) (r = s[i]), (n[i] = r);
              return n;
            }),
            (t.prototype.encode = function (t, e) {
              var r, n, i, o, a, s, u, c, l, h, f, d, p, g, m;
              for (n in ((r = ue.encode(this.generateCmap(), "unicode")), (o = this.glyphsFor(t)), (f = { 0: 0 }), (m = r.charMap)))
                f[(s = m[n]).old] = s.new;
              for (d in ((h = r.maxGlyphID), o)) d in f || (f[d] = h++);
              return (
                (c = (function (t) {
                  var e, r;
                  for (e in ((r = {}), t)) r[t[e]] = e;
                  return r;
                })(f)),
                (l = Object.keys(c).sort(function (t, e) {
                  return t - e;
                })),
                (p = (function () {
                  var t, e, r;
                  for (r = [], t = 0, e = l.length; t < e; t++) (a = l[t]), r.push(c[a]);
                  return r;
                })()),
                (i = this.font.glyf.encode(o, p, f)),
                (u = this.font.loca.encode(i.offsets, p)),
                (g = {
                  cmap: this.font.cmap.raw(),
                  glyf: i.table,
                  loca: u,
                  hmtx: this.font.hmtx.raw(),
                  hhea: this.font.hhea.raw(),
                  maxp: this.font.maxp.raw(),
                  post: this.font.post.raw(),
                  name: this.font.name.raw(),
                  head: this.font.head.encode(e)
                }),
                this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()),
                this.font.directory.encode(g)
              );
            }),
            t
          );
        })();
      B.API.PDFObject = (function () {
        var t;
        function e() {}
        return (
          (t = function (t, e) {
            return (Array(e + 1).join("0") + t).slice(-e);
          }),
          (e.convert = function (r) {
            var n, i, o, a;
            if (Array.isArray(r))
              return (
                "[" +
                (function () {
                  var t, i, o;
                  for (o = [], t = 0, i = r.length; t < i; t++) (n = r[t]), o.push(e.convert(n));
                  return o;
                })().join(" ") +
                "]"
              );
            if ("string" == typeof r) return "/" + r;
            if (null != r ? r.isString : void 0) return "(" + r + ")";
            if (r instanceof Date)
              return (
                "(D:" +
                t(r.getUTCFullYear(), 4) +
                t(r.getUTCMonth(), 2) +
                t(r.getUTCDate(), 2) +
                t(r.getUTCHours(), 2) +
                t(r.getUTCMinutes(), 2) +
                t(r.getUTCSeconds(), 2) +
                "Z)"
              );
            if ("[object Object]" === {}.toString.call(r)) {
              for (i in ((o = ["<<"]), r)) (a = r[i]), o.push("/" + i + " " + e.convert(a));
              return o.push(">>"), o.join("\n");
            }
            return "" + r;
          }),
          e
        );
      })();
    }),
    o.register("czoXN", function (e, r) {
      t(e.exports, "zlibSync", () => X), t(e.exports, "unzlibSync", () => J);
      var n = Uint8Array,
        i = Uint16Array,
        o = Uint32Array,
        a = new n([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        s = new n([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        u = new n([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        c = function (t, e) {
          for (var r = new i(31), n = 0; n < 31; ++n) r[n] = e += 1 << t[n - 1];
          var a = new o(r[30]);
          for (n = 1; n < 30; ++n) for (var s = r[n]; s < r[n + 1]; ++s) a[s] = ((s - r[n]) << 5) | n;
          return [r, a];
        },
        l = c(a, 2),
        h = l[0],
        f = l[1];
      (h[28] = 258), (f[258] = 28);
      for (var d = c(s, 0), p = d[0], g = d[1], m = new i(32768), v = 0; v < 32768; ++v) {
        var b = ((43690 & v) >>> 1) | ((21845 & v) << 1);
        (b = ((61680 & (b = ((52428 & b) >>> 2) | ((13107 & b) << 2))) >>> 4) | ((3855 & b) << 4)),
          (m[v] = (((65280 & b) >>> 8) | ((255 & b) << 8)) >>> 1);
      }
      var y = function (t, e, r) {
          for (var n = t.length, o = 0, a = new i(e); o < n; ++o) ++a[t[o] - 1];
          var s,
            u = new i(e);
          for (o = 0; o < e; ++o) u[o] = (u[o - 1] + a[o - 1]) << 1;
          if (r) {
            s = new i(1 << e);
            var c = 15 - e;
            for (o = 0; o < n; ++o)
              if (t[o])
                for (var l = (o << 4) | t[o], h = e - t[o], f = u[t[o] - 1]++ << h, d = f | ((1 << h) - 1); f <= d; ++f) s[m[f] >>> c] = l;
          } else for (s = new i(n), o = 0; o < n; ++o) s[o] = m[u[t[o] - 1]++] >>> (15 - t[o]);
          return s;
        },
        w = new n(288);
      for (v = 0; v < 144; ++v) w[v] = 8;
      for (v = 144; v < 256; ++v) w[v] = 9;
      for (v = 256; v < 280; ++v) w[v] = 7;
      for (v = 280; v < 288; ++v) w[v] = 8;
      var x = new n(32);
      for (v = 0; v < 32; ++v) x[v] = 5;
      var L = y(w, 9, 0),
        N = y(w, 9, 1),
        A = y(x, 5, 0),
        _ = y(x, 5, 1),
        S = function (t) {
          for (var e = t[0], r = 1; r < t.length; ++r) t[r] > e && (e = t[r]);
          return e;
        },
        P = function (t, e, r) {
          var n = (e / 8) >> 0;
          return ((t[n] | (t[n + 1] << 8)) >>> (7 & e)) & r;
        },
        k = function (t, e) {
          var r = (e / 8) >> 0;
          return (t[r] | (t[r + 1] << 8) | (t[r + 2] << 16)) >>> (7 & e);
        },
        F = function (t) {
          return ((t / 8) >> 0) + (7 & t && 1);
        },
        I = function (t, e, r) {
          (null == e || e < 0) && (e = 0), (null == r || r > t.length) && (r = t.length);
          var a = new (t instanceof i ? i : t instanceof o ? o : n)(r - e);
          return a.set(t.subarray(e, r)), a;
        },
        C = function (t, e, r) {
          var i = t.length,
            o = !e || r,
            c = !r || r.i;
          r || (r = {}), e || (e = new n(3 * i));
          var l = function (t) {
              var r = e.length;
              if (t > r) {
                var i = new n(Math.max(2 * r, t));
                i.set(e), (e = i);
              }
            },
            f = r.f || 0,
            d = r.p || 0,
            g = r.b || 0,
            m = r.l,
            v = r.d,
            b = r.m,
            w = r.n,
            x = 8 * i;
          do {
            if (!m) {
              r.f = f = P(t, d, 1);
              var L = P(t, d + 1, 3);
              if (((d += 3), !L)) {
                var A = t[(U = F(d) + 4) - 4] | (t[U - 3] << 8),
                  C = U + A;
                if (C > i) {
                  if (c) throw "unexpected EOF";
                  break;
                }
                o && l(g + A), e.set(t.subarray(U, C), g), (r.b = g += A), (r.p = d = 8 * C);
                continue;
              }
              if (1 == L) (m = N), (v = _), (b = 9), (w = 5);
              else {
                if (2 != L) throw "invalid block type";
                var E = P(t, d, 31) + 257,
                  j = P(t, d + 10, 15) + 4,
                  O = E + P(t, d + 5, 31) + 1;
                d += 14;
                for (var M = new n(O), R = new n(19), B = 0; B < j; ++B) R[u[B]] = P(t, d + 3 * B, 7);
                d += 3 * j;
                var T = S(R),
                  q = (1 << T) - 1;
                if (!c && d + O * (T + 7) > x) break;
                var D = y(R, T, 1);
                for (B = 0; B < O; ) {
                  var U,
                    z = D[P(t, d, q)];
                  if (((d += 15 & z), (U = z >>> 4) < 16)) M[B++] = U;
                  else {
                    var H = 0,
                      W = 0;
                    for (
                      16 == U
                        ? ((W = 3 + P(t, d, 3)), (d += 2), (H = M[B - 1]))
                        : 17 == U
                        ? ((W = 3 + P(t, d, 7)), (d += 3))
                        : 18 == U && ((W = 11 + P(t, d, 127)), (d += 7));
                      W--;

                    )
                      M[B++] = H;
                  }
                }
                var V = M.subarray(0, E),
                  G = M.subarray(E);
                (b = S(V)), (w = S(G)), (m = y(V, b, 1)), (v = y(G, w, 1));
              }
              if (d > x) throw "unexpected EOF";
            }
            o && l(g + 131072);
            for (var Y = (1 << b) - 1, X = (1 << w) - 1, J = b + w + 18; c || d + J < x; ) {
              var K = (H = m[k(t, d) & Y]) >>> 4;
              if ((d += 15 & H) > x) throw "unexpected EOF";
              if (!H) throw "invalid length/literal";
              if (K < 256) e[g++] = K;
              else {
                if (256 == K) {
                  m = null;
                  break;
                }
                var $ = K - 254;
                if (K > 264) {
                  var Z = a[(B = K - 257)];
                  ($ = P(t, d, (1 << Z) - 1) + h[B]), (d += Z);
                }
                var Q = v[k(t, d) & X],
                  tt = Q >>> 4;
                if (!Q) throw "invalid distance";
                d += 15 & Q;
                G = p[tt];
                if (tt > 3) {
                  Z = s[tt];
                  (G += k(t, d) & ((1 << Z) - 1)), (d += Z);
                }
                if (d > x) throw "unexpected EOF";
                o && l(g + 131072);
                for (var et = g + $; g < et; g += 4)
                  (e[g] = e[g - G]), (e[g + 1] = e[g + 1 - G]), (e[g + 2] = e[g + 2 - G]), (e[g + 3] = e[g + 3 - G]);
                g = et;
              }
            }
            (r.l = m), (r.p = d), (r.b = g), m && ((f = 1), (r.m = b), (r.d = v), (r.n = w));
          } while (!f);
          return g == e.length ? e : I(e, 0, g);
        },
        E = function (t, e, r) {
          r <<= 7 & e;
          var n = (e / 8) >> 0;
          (t[n] |= r), (t[n + 1] |= r >>> 8);
        },
        j = function (t, e, r) {
          r <<= 7 & e;
          var n = (e / 8) >> 0;
          (t[n] |= r), (t[n + 1] |= r >>> 8), (t[n + 2] |= r >>> 16);
        },
        O = function (t, e) {
          for (var r = [], o = 0; o < t.length; ++o) t[o] && r.push({ s: o, f: t[o] });
          var a = r.length,
            s = r.slice();
          if (!a) return [new n(0), 0];
          if (1 == a) {
            var u = new n(r[0].s + 1);
            return (u[r[0].s] = 1), [u, 1];
          }
          r.sort(function (t, e) {
            return t.f - e.f;
          }),
            r.push({ s: -1, f: 25001 });
          var c = r[0],
            l = r[1],
            h = 0,
            f = 1,
            d = 2;
          for (r[0] = { s: -1, f: c.f + l.f, l: c, r: l }; f != a - 1; )
            (c = r[r[h].f < r[d].f ? h++ : d++]),
              (l = r[h != f && r[h].f < r[d].f ? h++ : d++]),
              (r[f++] = { s: -1, f: c.f + l.f, l: c, r: l });
          var p = s[0].s;
          for (o = 1; o < a; ++o) s[o].s > p && (p = s[o].s);
          var g = new i(p + 1),
            m = M(r[f - 1], g, 0);
          if (m > e) {
            o = 0;
            var v = 0,
              b = m - e,
              y = 1 << b;
            for (
              s.sort(function (t, e) {
                return g[e.s] - g[t.s] || t.f - e.f;
              });
              o < a;
              ++o
            ) {
              var w = s[o].s;
              if (!(g[w] > e)) break;
              (v += y - (1 << (m - g[w]))), (g[w] = e);
            }
            for (v >>>= b; v > 0; ) {
              var x = s[o].s;
              g[x] < e ? (v -= 1 << (e - g[x]++ - 1)) : ++o;
            }
            for (; o >= 0 && v; --o) {
              var L = s[o].s;
              g[L] == e && (--g[L], ++v);
            }
            m = e;
          }
          return [new n(g), m];
        },
        M = function (t, e, r) {
          return -1 == t.s ? Math.max(M(t.l, e, r + 1), M(t.r, e, r + 1)) : (e[t.s] = r);
        },
        R = function (t) {
          for (var e = t.length; e && !t[--e]; );
          for (
            var r = new i(++e),
              n = 0,
              o = t[0],
              a = 1,
              s = function (t) {
                r[n++] = t;
              },
              u = 1;
            u <= e;
            ++u
          )
            if (t[u] == o && u != e) ++a;
            else {
              if (!o && a > 2) {
                for (; a > 138; a -= 138) s(32754);
                a > 2 && (s(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305), (a = 0));
              } else if (a > 3) {
                for (s(o), --a; a > 6; a -= 6) s(8304);
                a > 2 && (s(((a - 3) << 5) | 8208), (a = 0));
              }
              for (; a--; ) s(o);
              (a = 1), (o = t[u]);
            }
          return [r.subarray(0, n), e];
        },
        B = function (t, e) {
          for (var r = 0, n = 0; n < e.length; ++n) r += t[n] * e[n];
          return r;
        },
        T = function (t, e, r) {
          var n = r.length,
            i = F(e + 2);
          (t[i] = 255 & n), (t[i + 1] = n >>> 8), (t[i + 2] = 255 ^ t[i]), (t[i + 3] = 255 ^ t[i + 1]);
          for (var o = 0; o < n; ++o) t[i + o + 4] = r[o];
          return 8 * (i + 4 + n);
        },
        q = function (t, e, r, n, o, c, l, h, f, d, p) {
          E(e, p++, r), ++o[256];
          for (
            var g = O(o, 15),
              m = g[0],
              v = g[1],
              b = O(c, 15),
              N = b[0],
              _ = b[1],
              S = R(m),
              P = S[0],
              k = S[1],
              F = R(N),
              I = F[0],
              C = F[1],
              M = new i(19),
              q = 0;
            q < P.length;
            ++q
          )
            M[31 & P[q]]++;
          for (q = 0; q < I.length; ++q) M[31 & I[q]]++;
          for (var D = O(M, 7), U = D[0], z = D[1], H = 19; H > 4 && !U[u[H - 1]]; --H);
          var W,
            V,
            G,
            Y,
            X = (d + 5) << 3,
            J = B(o, w) + B(c, x) + l,
            K = B(o, m) + B(c, N) + l + 14 + 3 * H + B(M, U) + (2 * M[16] + 3 * M[17] + 7 * M[18]);
          if (X <= J && X <= K) return T(e, p, t.subarray(f, f + d));
          if ((E(e, p, 1 + (K < J)), (p += 2), K < J)) {
            (W = y(m, v, 0)), (V = m), (G = y(N, _, 0)), (Y = N);
            var $ = y(U, z, 0);
            E(e, p, k - 257), E(e, p + 5, C - 1), E(e, p + 10, H - 4), (p += 14);
            for (q = 0; q < H; ++q) E(e, p + 3 * q, U[u[q]]);
            p += 3 * H;
            for (var Z = [P, I], Q = 0; Q < 2; ++Q) {
              var tt = Z[Q];
              for (q = 0; q < tt.length; ++q) {
                var et = 31 & tt[q];
                E(e, p, $[et]), (p += U[et]), et > 15 && (E(e, p, (tt[q] >>> 5) & 127), (p += tt[q] >>> 12));
              }
            }
          } else (W = L), (V = w), (G = A), (Y = x);
          for (q = 0; q < h; ++q)
            if (n[q] > 255) {
              et = (n[q] >>> 18) & 31;
              j(e, p, W[et + 257]), (p += V[et + 257]), et > 7 && (E(e, p, (n[q] >>> 23) & 31), (p += a[et]));
              var rt = 31 & n[q];
              j(e, p, G[rt]), (p += Y[rt]), rt > 3 && (j(e, p, (n[q] >>> 5) & 8191), (p += s[rt]));
            } else j(e, p, W[n[q]]), (p += V[n[q]]);
          return j(e, p, W[256]), p + V[256];
        },
        D = new o([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        U = new n(0),
        z = function (t, e, r, u, c, l) {
          var h = t.length,
            d = new n(u + h + 5 * (1 + Math.floor(h / 7e3)) + c),
            p = d.subarray(u, d.length - c),
            m = 0;
          if (!e || h < 8)
            for (var v = 0; v <= h; v += 65535) {
              var b = v + 65535;
              b < h ? (m = T(p, m, t.subarray(v, b))) : ((p[v] = l), (m = T(p, m, t.subarray(v, h))));
            }
          else {
            for (
              var y = D[e - 1],
                w = y >>> 13,
                x = 8191 & y,
                L = (1 << r) - 1,
                N = new i(32768),
                A = new i(L + 1),
                _ = Math.ceil(r / 3),
                S = 2 * _,
                P = function (e) {
                  return (t[e] ^ (t[e + 1] << _) ^ (t[e + 2] << S)) & L;
                },
                k = new o(25e3),
                C = new i(288),
                E = new i(32),
                j = 0,
                O = 0,
                M = ((v = 0), 0),
                R = 0,
                B = 0;
              v < h;
              ++v
            ) {
              var z = P(v),
                H = 32767 & v,
                W = A[z];
              if (((N[H] = W), (A[z] = H), R <= v)) {
                var V = h - v;
                if ((j > 7e3 || M > 24576) && V > 423) {
                  (m = q(t, p, 0, k, C, E, O, M, B, v - B, m)), (M = j = O = 0), (B = v);
                  for (var G = 0; G < 286; ++G) C[G] = 0;
                  for (G = 0; G < 30; ++G) E[G] = 0;
                }
                var Y = 2,
                  X = 0,
                  J = x,
                  K = (H - W) & 32767;
                if (V > 2 && z == P(v - K))
                  for (var $ = Math.min(w, V) - 1, Z = Math.min(32767, v), Q = Math.min(258, V); K <= Z && --J && H != W; ) {
                    if (t[v + Y] == t[v + Y - K]) {
                      for (var tt = 0; tt < Q && t[v + tt] == t[v + tt - K]; ++tt);
                      if (tt > Y) {
                        if (((Y = tt), (X = K), tt > $)) break;
                        var et = Math.min(K, tt - 2),
                          rt = 0;
                        for (G = 0; G < et; ++G) {
                          var nt = (v - K + G + 32768) & 32767,
                            it = (nt - N[nt] + 32768) & 32767;
                          it > rt && ((rt = it), (W = nt));
                        }
                      }
                    }
                    K += ((H = W) - (W = N[H]) + 32768) & 32767;
                  }
                if (X) {
                  k[M++] = 268435456 | (f[Y] << 18) | g[X];
                  var ot = 31 & f[Y],
                    at = 31 & g[X];
                  (O += a[ot] + s[at]), ++C[257 + ot], ++E[at], (R = v + Y), ++j;
                } else (k[M++] = t[v]), ++C[t[v]];
              }
            }
            (m = q(t, p, l, k, C, E, O, M, B, v - B, m)), l || (m = T(p, m, U));
          }
          return I(d, 0, u + F(m) + c);
        },
        H = function () {
          var t = 1,
            e = 0;
          return {
            p: function (r) {
              for (var n = t, i = e, o = r.length, a = 0; a != o; ) {
                for (var s = Math.min(a + 5552, o); a < s; ++a) i += n += r[a];
                (n %= 65521), (i %= 65521);
              }
              (t = n), (e = i);
            },
            d: function () {
              return (((t >>> 8) << 16) | ((255 & e) << 8) | (e >>> 8)) + 2 * ((255 & t) << 23);
            }
          };
        },
        W = function (t, e, r, n, i) {
          return z(
            t,
            null == e.level ? 6 : e.level,
            null == e.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + e.mem,
            r,
            n,
            !i
          );
        },
        V = function (t, e, r) {
          for (; r; ++e) (t[e] = r), (r >>>= 8);
        },
        G = function (t, e) {
          var r = e.level,
            n = 0 == r ? 0 : r < 6 ? 1 : 9 == r ? 3 : 2;
          (t[0] = 120), (t[1] = (n << 6) | (n ? 32 - 2 * n : 1));
        },
        Y = function (t) {
          if (8 != (15 & t[0]) || t[0] >>> 4 > 7 || ((t[0] << 8) | t[1]) % 31) throw "invalid zlib data";
          if (32 & t[1]) throw "invalid zlib data: preset dictionaries not supported";
        };
      function X(t, e) {
        void 0 === e && (e = {});
        var r = H();
        r.p(t);
        var n = W(t, e, 2, 4);
        return G(n, e), V(n, n.length - 4, r.d()), n;
      }
      function J(t, e) {
        return C((Y(t), t.subarray(2, -4)), e);
      }
    }),
    o.register("23hdM", function (t, e) {
      t.exports = o("gkugq")(o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("fpnkl")).then(() => o("3vFHt"));
    }),
    o.register("gkugq", function (t, e) {
      "use strict";
      var r = o("5Lgzx");
      t.exports = r(function (t) {
        return new Promise(function (e, r) {
          var n = document.getElementsByTagName("script");
          if (
            [].concat(n).some(function (e) {
              return e.src === t;
            })
          )
            e();
          else {
            var i = document.createElement("link");
            (i.href = t), (i.rel = "preload"), (i.as = "script"), document.head.appendChild(i);
            var o = document.createElement("script");
            (o.async = !0),
              (o.type = "text/javascript"),
              (o.src = t),
              (o.onerror = function (e) {
                var n = new TypeError("Failed to fetch dynamically imported module: ".concat(t, ". Error: ").concat(e.message));
                (o.onerror = o.onload = null), o.remove(), r(n);
              }),
              (o.onload = function () {
                (o.onerror = o.onload = null), e();
              }),
              document.getElementsByTagName("head")[0].appendChild(o);
          }
        });
      });
    }),
    o.register("5Lgzx", function (t, e) {
      "use strict";
      var r = {},
        n = {},
        i = {};
      t.exports = function (t, e) {
        return function (o) {
          var a = (function (t) {
            switch (t) {
              case "preload":
                return n;
              case "prefetch":
                return i;
              default:
                return r;
            }
          })(e);
          return a[o]
            ? a[o]
            : (a[o] = t.apply(null, arguments).catch(function (t) {
                throw (delete a[o], t);
              }));
        };
      };
    }),
    o.register("7KeHM", function (t, e) {
      t.exports = o("gkugq")(o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("eZAwN")).then(() => o("5GtyY"));
    }),
    o.register("dPLIb", function (t, e) {
      t.exports = o("gkugq")(o("8r5Kp").getBundleURL("h4kbu") + o("fquJx").resolve("cV87v")).then(() => o("5qAiP"));
    }),
    o("fquJx").register(
      JSON.parse(
        '{"h4kbu":"editor.8a5d852f.js","fOuRH":"mac1x-header-center.98a91e82.png","38Qcj":"mac1x-header-left-secure.16d65b79.png","lXgyK":"mac1x-header-left.8e8ee1c1.png","4sVT8":"mac1x-header-right.3a7e9a99.png","iWy9i":"mac2x-header-center.c4c70460.png","j6y4q":"mac2x-header-left-secure.9e7dc1f1.png","cGxYt":"mac2x-header-left.e9da0a5d.png","8SS96":"mac2x-header-right.9263b9df.png","jzuVp":"windows1x-header-center.6b9730ac.png","6ZHQP":"windows1x-header-left-secure.0a58323a.png","4arvq":"windows1x-header-left.e46470ef.png","9UCbD":"windows1x-header-right.19cf988c.png","l8aKp":"prem-emojis.e3242d04.png","6ZP41":"prem-emojis@2x.0a1348d8.png","2a6R1":"announce-emojis.573ad7a2.png","hwIGx":"announce-emojis@2x.b5059a7c.png","fpnkl":"html2canvas.e9d669c1.js","eZAwN":"purify.e7c71f30.js","cV87v":"index.es.44f947b1.js","aWhca":"capture.839f08c2.css"}'
      )
    );
})();
//# sourceMappingURL=editor.8a5d852f.js.map
