// Copyright 2023 OneTab Ltd.  All rights reserved.
const Ce = "1.84",
  Ho = !1,
  Qo = !1,
  Jo = !1,
  Ko = !1,
  Yo = !1,
  Zo = !1,
  Xo = !0,
  et = "chrome://",
  ot = "chrome://newtab/",
  ue = "https://www.one-tab.com",
  tt = !1,
  it = !1,
  nt = !1;
async function q() {
  return new Promise((e, o) => {
    document.readyState === "complete"
      ? e()
      : document.addEventListener("readystatechange", (t) => {
          document.readyState === "complete" && e();
        });
  });
}
async function _e() {
  await He(), await q(), Ye();
}
async function He() {
  try {
    await chrome.tabs.update((await chrome.tabs.getCurrent()).id, { autoDiscardable: !1 });
  } catch (e) {
    console.log(e);
  }
}
function de(e) {
  if ((typeof e == "string" && (e = document.getElementById(e)), !!e)) for (; e.childNodes.length > 0; ) e.childNodes[0].remove();
}
function ct(e) {
  return m(void 0, "div", { style: { fontSize: "1px", height: e + "px", width: "1px" } }).o;
}
let pe = !1;
async function Qe(e, o = {}) {
  if (!pe) {
    const i = async () => {
      if ((await chrome.runtime.sendMessage({ args: [], type: "corePing", L: !0 }))?.result?.pong !== String(Ce))
        throw new Error("core version mismatch");
    };
    try {
      await i();
    } catch (n) {
      if (n.message === "core version mismatch") throw n;
      console.log(n), console.log("core not ready. retrying..."), await oe(1e3);
      try {
        await i();
      } catch (a) {
        console.log(a), console.log("core not ready. retrying..."), await oe(5e3);
        try {
          await i();
        } catch (r) {
          throw (console.log(r), new Error("Cannot connect to core"));
        }
      }
    }
    pe = !0;
  }
  (o.type = e), (o.L = !0);
  let t = await chrome.runtime.sendMessage(o);
  if (t === null) throw new Error("null message response from core");
  if (t?.P) throw new Error(t.P);
  return t.result;
}
function Je(e) {
  chrome.runtime.onMessage.addListener((o, t, i) => {
    o.type === "stateChange" && e(o.U);
  });
}
const at = new Proxy(
    {},
    {
      get(e, o) {
        return o;
      }
    }
  ),
  h = new Proxy(
    {},
    {
      get(e, o, t) {
        return (...i) => ((i = te(i, void 0, Io)), Qe(o, { args: i }));
      }
    }
  );
let Ke = navigator.language || navigator.userLanguage;
function he() {
  let e = ["ar", "he", "fa", "ps", "ur"],
    o = Ke.split("-", 1)[0];
  return e.indexOf(o) >= 0 ? "rtl" : "ltr";
}
let fe = he();
function v() {
  return fe !== "rtl";
}
function Ye() {
  document.getElementsByTagName("html")[0].dir = fe;
}
function x() {
  return v() ? "Left" : "Right";
}
function A() {
  return v() ? "Right" : "Left";
}
function F() {
  return v() ? "left" : "right";
}
function Ze() {
  return v() ? "right" : "left";
}
function Xe(e, o) {
  v() ? (e.style.left = o) : (e.style.right = o);
}
function rt(e, o) {
  v() ? (e.style.right = o) : (e.style.left = o);
}
function ge(e, o) {
  v() ? (e.style.paddingLeft = o) : (e.style.paddingRight = o);
}
function st(e, o) {
  v() ? (e.style.paddingRight = o) : (e.style.paddingLeft = o);
}
function mt(e, o) {
  v() ? (e.style.marginLeft = o) : (e.style.marginRight = o);
}
function eo(e) {
  return m(void 0, "div", {
    id: "headerText",
    style: {
      paddingTop: "40px",
      paddingBottom: "20px",
      [`padding${x()}`]: "240px",
      fontSize: "16px",
      color: "var(--text-color-weak)",
      fontWeight: "300",
      borderBottom: "1px dashed var(--dash-color)",
      marginBottom: "10px"
    },
    textContent: e
  }).o;
}
function B(e, o, t) {
  return m(void 0, "picture", {
    style: { ...e },
    ...o,
    children: {
      S: m(void 0, "source", { srcset: t(!0), media: "(prefers-color-scheme: light)" }),
      C: m(void 0, "source", { srcset: t(!1), media: "(prefers-color-scheme: dark)" }),
      v: m(void 0, "img", { style: { width: "100%", height: "100%" } })
    }
  }).o;
}
function oo() {
  return B(
    { width: 416 / 2 + "px", height: 114 / 2 + "px", position: "absolute", top: "16px", [`${F()}`]: "19px" },
    {},
    (e) => `images/top-left-logo-${e ? "light" : "dark"}${v() ? "" : "-rtl"}.png`
  );
}
function lt(e, o, t) {
  let i = document.createElement("div"),
    n = document.createElement("div");
  ge(n, "30px"), (n.style.position = "relative");
  let a = document.createElement("img");
  (a.src = e ? "images/twister-open.png" : "images/twister-closed" + (v() ? "" : "-rtl") + ".png"),
    (a.style.width = 48 / 2 + "px"),
    (a.style.height = 50 / 2 + "px"),
    (a.style.position = "absolute"),
    Xe(a, "0px"),
    (a.style.top = "0px"),
    (n.textContent = o),
    (n.style.fontSize = "16px"),
    (n.style.cursor = "pointer"),
    i.appendChild(n),
    n.appendChild(a);
  let r = document.createElement("div");
  ge(r, "30px"),
    (r.style.paddingTop = "10px"),
    r.appendChild(t.o),
    (r.style.display = e ? "block" : "none"),
    i.appendChild(r),
    (n.onclick = () => {
      (e = !e),
        (a.src = e ? "images/twister-open.png" : "images/twister-closed" + (v() ? "" : "-rtl") + ".png"),
        (r.style.display = e ? "block" : "none");
    });
  let c = { I: t.o };
  return Object.assign(c, t), (c.o = i), c;
}
function j(e, o, t, i) {
  let n = document.createElement("div");
  (n.style.fontSize = o + "px"), (n.className = "clickable");
  let a = document.createElement("span");
  if (i) {
    let r = document.createElement("span");
    (r.textContent = l("newExclamation") + " "), a.appendChild(r);
  }
  return (
    typeof e == "string" ? a.appendChild(document.createTextNode(e)) : a.appendChild(e),
    (a.style.verticalAlign = "middle"),
    (a.onclick = (r) => {
      t(a);
    }),
    n.appendChild(a),
    n
  );
}
class to {
  constructor() {
    (this._o = null),
      (this.yo = null),
      (this.Mo = null),
      (this.zo = null),
      (this.Ho = null),
      (this.xo = null),
      (this.so = !1),
      (this.Qo = null),
      (this.Jo = null),
      (this.Ko = 3),
      (this.Fo = []);
  }
  mi({ li: o, ui: t, di: i, pi: n, hi: a, fi: r, gi: c, bi: u, wi: f, yi: p }) {
    o.onmousedown = (y) => {
      if (!io(y)) return;
      let s = !1;
      Mo({
        event: y,
        element: o,
        B: null,
        H: ({ F: b, k: d, A: g, G: w }) => {
          s = f && f();
        },
        _: ({ F: b, k: d, dx: g, dy: w, A: Z, G: Ne, pageX: V, pageY: We }) => {
          if (!this.so && !s && (Math.abs(g) > this.Ko || Math.abs(w) > this.Ko)) {
            (this.so = !0), (this._o = t), (this.Mo = p.offsetWidth), (this.zo = p.offsetHeight);
            let R = Le(i);
            (this.xi = R.x),
              (this.vi = R.y),
              (this.ki = i.offsetWidth),
              (this.Qo = i.parentNode),
              (this.Jo = i.nextSibling),
              i.remove(),
              (this.yo = i),
              (this.Ho = n),
              (this.xo = m(document.body, "div", {
                style: {
                  pointerEvents: "none",
                  zIndex: "100000",
                  position: "absolute",
                  width: this.Mo + 2 + "px",
                  height: this.zo + 2 + "px",
                  cursor: "move"
                },
                l: this.yo
              }).o),
              a();
          }
          if (this.so) {
            let R = this.ki - this.yo.offsetWidth;
            (this.xo.style.left = this.xi + g + (he() === "rtl" ? R : 0) + "px"), (this.xo.style.top = this.vi + w + "px");
            let le = document.elementFromPoint(V - window.scrollX, We - window.scrollY),
              D = this.Fo.find((P) => P.objectType === this.Ho && (P.element === le || _(P.element, le)));
            D
              ? ((D.io.style.display = "block"),
                (D.io.style.width = this.Mo - 0 + "px"),
                (D.io.style.height = this.zo - 0 + "px"),
                (D.io.style.border = "var(--drop-area-border)"),
                (this.po = D))
              : (this.po = void 0),
              this.Fo.filter((P) => P !== D).forEach((P) => (P.io.style.display = "none"));
          }
        },
        W: ({ F: b, k: d, O: g, V: w, A: Z, G: Ne }) => {
          (async () => {
            if (!this.so) r();
            else {
              this.so = !1;
              let V = this.po;
              this.po ? await this.po.vo(this._o) : c(),
                document.body.removeChild(this.xo),
                V && ((V.io.style.display = "none"), (this.po = void 0)),
                u();
            }
          })();
        }
      });
    };
  }
  Yo({ element: o, objectType: t, io: i, vo: n }) {
    this.Fo.push({ element: o, objectType: t, io: i, vo: n });
  }
  Zo() {
    return m(void 0, "div", { style: { background: "var(--drop-area-gradient)" } }).o;
  }
}
function io(e) {
  return e.metaKey || e.ctrlKey || e.altKey || e.shiftKey
    ? !1
    : "buttons" in e
    ? e.buttons === 1
    : "which" in e
    ? e.which === 1
    : e.button === 1 || e.type === "click";
}
class no {
  constructor({ parentElement: o, ko: t, value: i, mo: n, fontWeight: a, lo: r, To: c, Ao: u }) {
    (this.parentElement = o),
      (this.Ao = u),
      (this.value = U(i)),
      (this.mo = n),
      (this.fontWeight = a),
      (this.lo = r),
      (this.To = c),
      (this.Io = !1);
    let f = m(o, "div", {
      style: { display: "inline-block", position: "relative", overflow: "hidden" },
      children: {
        oo: m(void 0, "div", {
          style: {
            textDecoration: "none",
            display: "block",
            whiteSpace: "nowrap",
            fontSize: this.mo + "px",
            fontWeight: this.fontWeight,
            overflow: "hidden"
          },
          className: this.lo
        })
      }
    });
    (this.div = f.o),
      (this.oo = f.oo.o),
      this.Go(this.value, !1, !0),
      (this.ko = t),
      (this.oo.onmousedown = (p) => {}),
      (this.oo.onmouseup = (p) => {
        if (this.Io) return !0;
        let y = !1;
        return this.To && (y = this.To()), y || this.Bo(), !1;
      });
  }
  Bo() {
    if (this.Io) return;
    this.Ao && this.Ao(), (this.Io = !0);
    let o = m(void 0, "input", {
      style: {
        [x()]: "0px",
        position: "absolute",
        top: "0px",
        width: this.oo.offsetWidth + "px",
        height: this.oo.offsetHeight + "px",
        overflow: "hidden",
        border: "none",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingBottom: "0px",
        marginTop: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        marginBottom: "0px",
        background: "transparent"
      }
    }).o;
    return (
      o.setAttribute("autocomplete", "off"),
      o.setAttribute("spellcheck", "false"),
      de(this.oo),
      (this.oo.innerHTML = "&nbsp;"),
      (this.oo.style.width = "1px"),
      (o.className = this.lo),
      (o.style.fontSize = this.mo + "px"),
      (o.style.fontWeight = this.fontWeight),
      this.div.appendChild(o),
      (o.value = this.value),
      (this.Xo = this.value),
      (o.onblur = () => (
        this.div.removeChild(o),
        this.Go(this.value, !1, !1),
        setTimeout(() => {
          this.Io = !1;
        }, 300),
        !1
      )),
      o.addEventListener("compositionend", (t) => {
        this.Ti = !0;
      }),
      (o.onkeydown = (t) => {
        t.isComposing ||
          ((t.key === "Escape" || t.key === "Esc") && ((o.value = this.Xo), (this.value = this.Xo), o.blur()),
          t.key === "Enter" && o.blur()),
          (this.Ti = !1);
      }),
      (o.oninput = (t) => {
        this.value = o.value;
        let i = be(this.value, this.lo, this.mo, this.fontWeight, !1);
        return (o.style.width = i + 30 + "px"), (this.div.style.width = i + 30 + "px"), this.ko(o.value, !1), !1;
      }),
      o.oninput(void 0),
      setTimeout(() => {
        o.focus();
      }, 100),
      !1
    );
  }
  Ai() {
    (this.oo.style.width = "auto"), (this.div.style.width = "auto");
  }
  Ii() {
    let o = be(this.value, this.lo, this.mo, this.fontWeight, !1);
    return (o = Math.max(o, 20)), (this.oo.style.width = o + "px"), (this.div.style.width = o + "px"), o;
  }
  Go(o, t, i) {
    (this.value = U(o)),
      U(o) === "" ? (this.oo.innerHTML = "&nbsp;") : (this.oo.textContent = this.value),
      t ? this.Ii() : this.Ai(),
      i || this.ko(this.value, !t);
  }
}
let I;
function be(e, o, t, i, n) {
  i || (i = "normal"),
    i === !0 && (i = "bold"),
    i === !1 && (i = "normal"),
    I === void 0 &&
      (I = m(document.body, "div", {
        style: { visibility: "hidden", position: "absolute", [x()]: "-8000px", top: "-8000px", whiteSpace: "nowrap" }
      }).o),
    (I.className = o),
    (I.style.fontSize = t + "px"),
    (I.style.fontStyle = n ? "italic" : "normal"),
    i && (I.style.fontWeight = i),
    (I.textContent = e);
  let a = I.offsetWidth;
  return (I.textContent = ""), a;
}
const we = chrome.runtime.getURL("onetab.html"),
  ye = we.substring(0, we.length - "onetab.html".length);
let X = !0;
async function ut() {
  return X ? (await chrome.permissions.getAll()).permissions.includes("tabGroups") && chrome.tabGroups : !1;
}
async function xe() {
  if (!X) return !1;
  try {
    return await chrome.permissions.request({ permissions: ["tabGroups"] });
  } catch (e) {
    return console.log('chrome.permissions.request for "tabGroups" permission failed with error:'), console.log(e), !1;
  }
}
function co(e) {
  let o = ve(e);
  return o.toLowerCase().startsWith("www.") ? o.substring("www.".length) : o;
}
function ve(e) {
  return e
    ? (e.indexOf("//") === 0 && (e = "http:" + e),
      e.indexOf("://") === -1 && (e = "http://" + e),
      (e = e.substring(e.indexOf("://") + "://".length)),
      e.indexOf("/") !== -1 && (e = e.substring(0, e.indexOf("/"))),
      e.indexOf(":") !== -1 && (e = e.substring(0, e.indexOf(":"))),
      e.indexOf("?") !== -1 && (e = e.substring(0, e.indexOf("?"))),
      e.indexOf("#") !== -1 && (e = e.substring(0, e.indexOf("#"))),
      e.toLowerCase())
    : "undefined";
}
function dt(e) {
  return e.indexOf("://") === -1 ? "https://" : ((e = e.substring(0, e.indexOf("://") + "://".length)), e.toLowerCase());
}
let ke = ["com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl"];
function ao(e) {
  let o = ve(e);
  try {
    for (let t in ke) {
      let i = "." + ke[t];
      if (fo(o, i)) {
        for (o = o.substring(0, o.length - i.length); o.indexOf(".") !== -1; ) o = o.substring(o.indexOf(".") + 1);
        o = o + i;
        break;
      }
    }
    return o.indexOf("www.") === 0 && (o = o.substring("www.".length)), o;
  } catch {
    return o;
  }
}
function ro(e) {
  e.noCacheRandom = so();
}
function so() {
  return new Date().getTime() + Math.round(Math.random() * 1e4) + "";
}
async function pt(e, o) {
  ro(o);
  let t = JSON.stringify(o);
  return await (await mo(e, t)).json();
}
async function mo(e, o) {
  let t = {};
  o ? ((t.method = "POST"), (t.body = o)) : (t.method = "GET"), (t.headers = new Headers()), t.headers.append("Content-Type", "text/json");
  let i = await fetch(e, t);
  if (i.status === 200) return i;
  throw new Error("http response code" + i.status);
}
function ht() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    let o = (Math.random() * 16) | 0;
    return (e == "x" ? o : (o & 3) | 8).toString(16);
  });
}
const lo = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
function uo(e, o) {
  let t = lo,
    i = [],
    n = 0;
  for (o = o || t.length, e = e || 22, n = 0; n < e; n++) i[n] = t[0 | (Math.random() * o)];
  return i.join("");
}
function po() {
  return uo();
}
function ft() {
  return po();
}
function U(e) {
  return e == null ? "" : e.replace(/^\s+/, "").replace(/\s+$/, "");
}
function gt(...e) {
  return (o, t) => e.reduce((i, n) => i || n(o, t), 0);
}
function bt(e) {
  return (o, t) => e(o) - e(t);
}
function wt(e) {
  return (o, t) => e(t) - e(o);
}
const yt = (e, o) => !!o.starred - !!e.starred || (e.starred && o.starred && o.starredDate - e.starredDate) || o.createDate - e.createDate;
function ho(e) {
  return e || (e = ""), e.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}
function fo(e, o) {
  return e ? e.indexOf(o, e.length - o.length) !== -1 : !1;
}
const go = {
  restoreWindow: "newWindow",
  pinnedTabs: "ignore",
  startupLaunch: "displayOneTab",
  restoreRemoval: "default",
  duplicates: "allow",
  pinned: "true"
};
function xt(e, o) {
  return o[e] ? o[e] : go[e];
}
function L(e, o, t) {
  e.parentNode && e.remove(),
    o.insertBefore(e, t === void 0 || t >= o.children.length || o.children.length === 0 ? null : o.children[Math.max(0, t)]);
}
function m(e, o, t) {
  let i = o === void 0 ? e : document.createElement(o),
    n = {};
  if (t) {
    t.style && Object.assign(i.style, t.style);
    for (let r of Object.keys(t)) r !== "style" && r !== "children" && (i[r] = t[r]);
    if (t.children) for (const [r, c] of Object.entries(t.children)) (n[r] = c), i.appendChild(c instanceof HTMLElement ? c : c.o);
    t.l && i.appendChild(t.l), t.init && t.init(i);
  }
  o !== void 0 && e && e.appendChild(i);
  let a = { o: i };
  return Object.assign(a, n), a;
}
const Te = "about:reader?url=";
function bo(e) {
  return e
    ? e.indexOf(":") === -1
      ? "https://" + e
      : e.indexOf(Te) === 0
      ? decodeURIComponent(e.substring(Te.length))
      : e.startsWith(`${ye}placeholder.html?`)
      ? new URLSearchParams(e.substring(e.indexOf("?"))).get("url")
      : e
    : "";
}
function Ae(e) {
  return parseInt(e.match(/\d+/)[0]);
}
const Ie = [...new Array(30)].map((e, o) => parseInt(10 + Math.pow(1.6, o)));
function* wo(e) {
  let o = 0;
  for (; Ie.slice(0, o).reduce((t, i) => t + i, 0) < e; ) yield Ie[o++];
}
async function ee(e, o, t) {
  let i = 0;
  for (let n of wo(e)) {
    if (await t(i)) return;
    await oe(n), (i += n);
  }
  throw new Error(`Timeout waiting for condition ${o}`);
}
function l(e) {
  let o = chrome.i18n.getMessage(e);
  return o || (console.log("No translation available for: " + e), e);
}
function yo(e, o, t) {
  return o && ((e || "").toLowerCase().startsWith("file:") || vo(e))
    ? t
      ? `data:text/html, <html><body><div id="placeholderUrl">${e}</div></body></html>`
      : `${ye}placeholder.html?url=${encodeURI(e)}`
    : e;
}
async function xo() {
  try {
    return !(await chrome.extension.isAllowedFileSchemeAccess());
  } catch (e) {
    return console.log(e), !0;
  }
}
function vo(e) {
  for (let o of ko) if (e.startsWith(o)) return !0;
  return !!(!e || e === "" || e.startsWith("chrome-devtools:"));
}
const ko = [
  "javascript:",
  "about:",
  ...["chrome://", "edge://", "data:"].filter((e) => !1),
  ...["edge://", "chrome://"]
    .map((e) =>
      [
        "newtab",
        "new-tab-page",
        "print",
        "network-error",
        "badcastcrash",
        "inducebrowsercrashforrealz",
        "crash",
        "crashdump",
        "kill",
        "hang",
        "shorthang",
        "gpuclean",
        "gpucrash",
        "gpuhang",
        "memory-exhaust",
        "memory-pressure-critical",
        "memory-pressure-moderate",
        "ppapiflashcrash",
        "ppapiflashhang",
        "quit",
        "restart"
      ].map((o) => `${e}${o}/`)
    )
    .flat()
];
async function oe(e) {
  return new Promise((o) => setTimeout(o, e));
}
class To {
  async put(o, t) {
    await chrome.storage.local.set({ [o]: t });
  }
  async get(o) {
    return (await chrome.storage.local.get([o]))[o];
  }
  async remove(o) {
    return await chrome.storage.local.remove(o);
  }
}
const Ao = new To();
function S() {
  return Ao;
}
const Io = "undefined-34LKmiHxP3Mu48u8qrDaHf";
function te(e, o, t) {
  return Array.isArray(e)
    ? e.map((i) => te(i, o, t))
    : typeof e == "object" && e !== null
    ? Object.fromEntries(Object.entries(e).map(([i, n]) => [i, te(n, o, t)]))
    : e === o
    ? t
    : e;
}
const vt = "c",
  kt = "e",
  Tt = "tg";
class Go {
  async put(o, t) {
    await chrome.storage.session.set({ [o]: t });
  }
  async get(o) {
    return (await chrome.storage.session.get([o]))[o];
  }
  async getAll() {
    return await chrome.storage.session.get(null);
  }
  async remove(o) {
    return await chrome.storage.session.remove(o);
  }
  async clearAll() {
    await chrome.storage.session.clear();
  }
}
class So {
  async put(o, t) {
    await S().put("sessionStore", { ...(await this.getAll()), [o]: t });
  }
  async get(o) {
    return (await this.getAll())[o];
  }
  async getAll() {
    return (await S().get("sessionStore")) ?? {};
  }
  async remove(o) {
    let t = await this.getAll();
    delete t[o], await S().put("sessionStore", t);
  }
  async clearAll() {
    await S().remove("sessionStore");
  }
}
const Do = chrome.storage.session ? new Go() : new So();
function Po() {
  return Do;
}
function Lo() {
  return navigator.userAgent.includes(" Edg/");
}
async function At(e) {
  let [o] = await chrome.tabs.query({ windowId: e.windowId, active: !0 });
  o && o.id !== e.id
    ? (await chrome.tabs.update(e.id, { active: !0 }), await chrome.tabs.update(o.id, { active: !0 }))
    : console.log("No active tab found");
}
let O,
  $,
  Ge,
  ie,
  Se,
  M,
  z,
  N,
  W,
  ne = "ontouchstart" in window;
function Mo({ event: e, element: o, B: t, H: i, _: n, W: a }) {
  if (((O = o), ($ = t), (Ge = i), (ie = n), (Se = a), (N = 0), (W = 0), ne && e instanceof TouchEvent)) {
    if (e.touches.length > 1) return;
    (M = e.touches.item(0).pageX),
      (z = e.touches.item(0).pageY),
      document.addEventListener("touchmove", C, !1),
      document.addEventListener("touchend", E, !1),
      e.preventDefault();
  } else
    (M = e.clientX + window.scrollX),
      (z = e.clientY + window.scrollY),
      document.addEventListener("mousemove", C, !1),
      document.addEventListener("mouseup", E, !1),
      e.preventDefault();
  Ge({ F: O, k: $, A: M, G: z });
}
function C(e) {
  let o, t, i, n;
  if (ne && e instanceof TouchEvent) {
    if (e.touches.length > 1) return (i = 0), (n = 0), ie({ F: O, k: $, dx: i, dy: n, A: M, G: z, pageX: o, pageY: t }), E(e);
    (o = e.touches.item(0).pageX), (t = e.touches.item(0).pageY);
  } else (o = e.clientX + window.scrollX), (t = e.clientY + window.scrollY);
  (i = o - M), (n = t - z);
  let a = !1;
  (N !== i || W !== n) && (a = !0),
    (N = i),
    (W = n),
    a && ie({ F: O, k: $, dx: i, dy: n, A: M, G: z, pageX: o, pageY: t }),
    e.preventDefault();
}
function E(e) {
  ne && e instanceof TouchEvent
    ? (document.removeEventListener("touchmove", C, !1), document.removeEventListener("touchend", E, !1))
    : (document.removeEventListener("mousemove", C, !1), document.removeEventListener("mouseup", E, !1)),
    Se({ F: O, k: $, O: N, V: W, A: M, G: z });
}
class Y {
  constructor(o, t) {
    (this.x = o), (this.y = t);
  }
  h(o) {
    return new Y(this.x - o.x, this.y - o.y);
  }
}
class De {
  constructor(o, t, i, n) {
    (this.g = o), (this.type = t), (this.listener = i), (this.p = n);
  }
  remove() {
    this.g.removeEventListener(this.type, this.listener, this.p);
  }
}
function It(e, o) {
  e.onmousemove = (t) => {
    o(new k(e, t));
  };
}
function Gt(e, o) {
  e.onmousedown = (t) => {
    o(new k(e, t));
  };
}
function St(e, o) {
  e.onmouseover = (t) => {
    o(new k(e, t));
  };
}
function Dt(e, o) {
  e.onmouseup = (t) => {
    o(new k(e, t));
  };
}
function Pt(e, o) {
  e.onmouseout = (t) => {
    o(new k(e, t));
  };
}
function Lt(e, o) {
  e.onclick = (t) => {
    o(new k(e, t));
  };
}
function Mt(e, o) {
  e.ondblclick = (t) => {
    o(new k(e, t));
  };
}
function zt(e, o) {
  H(e, "click", o);
}
function Ft(e, o) {
  H(e, "dblclick", o);
}
function zo(e, o) {
  return H(e, "mouseover", o);
}
function Bt(e, o) {
  return H(e, "mouseup", o);
}
function Fo(e, o) {
  let t;
  return (
    (t = (i) => {
      let n, a;
      (n = i.currentTarget), (a = i.relatedTarget), n === e && n !== a && !_(n, a) && o(new k(e, i));
    }),
    e.addEventListener("mouseout", t, !1),
    new De(e, "mouseout", t, !1)
  );
}
function jt(e, o) {
  e.onmouseout = (t) => {
    let i, n;
    (i = t.currentTarget), (n = t.relatedTarget), i === e && i !== n && !_(i, n) && o(new k(e, t));
  };
}
function Ut(e, o) {
  for (let t of e) t.onmouseout = Bo(t, e, o);
}
function Bo(e, o, t) {
  return (i) => {
    let n, a;
    if (((n = i.currentTarget), (a = i.relatedTarget), n === e && n !== a && !_(n, a))) {
      for (let r of o) if (a === r) return;
      t(new k(e, i));
    }
  };
}
function _(e, o) {
  try {
    if (!o) return !1;
    for (; o.parentNode; ) if ((o = o.parentNode) === e) return !0;
    return !1;
  } catch {
    return !1;
  }
}
class k {
  constructor(o, t) {
    (this.element = o), (this.event = t), (this.i = null), (this.u = null);
  }
  m() {
    if (this.i === null) {
      let o = jo(this.element);
      (this.i = o.x), (this.u = o.y);
    }
    return this.i;
  }
  D() {
    return this.i === null && this.m(), this.u;
  }
}
function H(e, o, t) {
  let i = (n) => {
    let a = new k(e, n);
    t(a);
  };
  return e.addEventListener(o, i, !1), new De(e, o, i, !1);
}
function Ot(e) {
  return Pe(e);
}
function jo(e, o) {
  return Pe(o).h(Le(e));
}
function Pe(e) {
  let o, t;
  return (o = e.clientX + window.scrollX), (t = e.clientY + window.scrollY), new Y(o, t);
}
function Le(e) {
  let o = e,
    t = 0,
    i = 0;
  for (;;) {
    let n = o.offsetParent;
    if (n === null) break;
    (t += o.offsetLeft), (i += o.offsetTop), (o = n);
  }
  return new Y(t, i);
}
function $t() {
  return window.scrollY;
}
function Et() {
  return window.scrollX;
}
let T = {};
(T.ei = 32), (T.imageWidth = 1024), (T.imageHeight = 1024), (T.jo = new Map());
{
  let e = T.jo;
  e.set("calendar.google.com", 0),
    e.set("docs.google.com-document", 1),
    e.set("docs.google.com-forms", 2),
    e.set("docs.google.com-presentation", 3),
    e.set("docs.google.com-spreadsheets", 4),
    e.set("drive.google.com", 5),
    e.set("mail.google.com", 6),
    e.set("meet.google.com", 7),
    e.set("google.com", 8),
    e.set("facebook.com", 9),
    e.set("youtube.com", 10),
    e.set("microsoft.com", 11),
    e.set("twitter.com", 12),
    e.set("tmall.com", 13),
    e.set("instagram.com", 14),
    e.set("baidu.com", 15),
    e.set("linkedin.com", 16),
    e.set("qq.com", 17),
    e.set("wikipedia.org", 18),
    e.set("apple.com", 19),
    e.set("live.com", 20),
    e.set("sohu.com", 21),
    e.set("yahoo.com", 22),
    e.set("amazon.com", 23),
    e.set("taobao.com", 24),
    e.set("adobe.com", 25),
    e.set("pinterest.com", 26),
    e.set("360.cn", 27),
    e.set("vimeo.com", 28),
    e.set("jd.com", 29),
    e.set("reddit.com", 30),
    e.set("office.com", 31),
    e.set("wordpress.com", 32),
    e.set("weibo.com", 33),
    e.set("bing.com", 34),
    e.set("zoom.us", 35),
    e.set("sina.com.cn", 36),
    e.set("goo.gl", 37),
    e.set("github.com", 38),
    e.set("amazonaws.com", 39),
    e.set("bit.ly", 40),
    e.set("vk.com", 41),
    e.set("wordpress.org", 42),
    e.set("xinhuanet.com", 43),
    e.set("tumblr.com", 44),
    e.set("mozilla.org", 45),
    e.set("msn.com", 46),
    e.set("nytimes.com", 47),
    e.set("flickr.com", 48),
    e.set("skype.com", 49),
    e.set("okezone.com", 50),
    e.set("dropbox.com", 51),
    e.set("gravatar.com", 52),
    e.set("soundcloud.com", 53),
    e.set("europa.eu", 54),
    e.set("alipay.com", 55),
    e.set("csdn.net", 56),
    e.set("nih.gov", 57),
    e.set("yahoo.co.jp", 58),
    e.set("t.co", 59),
    e.set("cnn.com", 60),
    e.set("ebay.com", 61),
    e.set("apache.org", 62),
    e.set("twitch.tv", 63),
    e.set("w3.org", 64),
    e.set("medium.com", 65),
    e.set("theguardian.com", 66),
    e.set("naver.com", 67),
    e.set("spotify.com", 68),
    e.set("bongacams.com", 69),
    e.set("imdb.com", 70),
    e.set("sourceforge.net", 71),
    e.set("bbc.co.uk", 72),
    e.set("forbes.com", 73),
    e.set("paypal.com", 74),
    e.set("zhanqi.tv", 75),
    e.set("aliexpress.com", 76),
    e.set("bbc.com", 77),
    e.set("archive.org", 78),
    e.set("news.ycombinator.com", 79),
    e.set("zerohedge.com", 80),
    e.set("protopage.com", 81),
    e.set("github.io", 82),
    e.set("weebly.com", 83),
    e.set("stackoverflow.com", 84),
    e.set("china.com.cn", 85),
    e.set("who.int", 86),
    e.set("wixsite.com", 87),
    e.set("creativecommons.org", 88),
    e.set("issuu.com", 89),
    e.set("washingtonpost.com", 90),
    e.set("tribunnews.com", 91),
    e.set("etsy.com", 92),
    e.set("livejasmin.com", 93),
    e.set("chaturbate.com", 94),
    e.set("oracle.com", 95),
    e.set("slideshare.net", 96),
    e.set("mail.ru", 97),
    e.set("reuters.com", 98),
    e.set("php.net", 99),
    e.set("icloud.com", 100),
    e.set("cdc.gov", 101),
    e.set("pornhub.com", 102),
    e.set("1688.com", 103),
    e.set("wsj.com", 104),
    e.set("tinyurl.com", 105),
    e.set("wikimedia.org", 106),
    e.set("huanqiu.com", 107),
    e.set("instructure.com", 108),
    e.set("aparat.com", 109),
    e.set("alibaba.com", 110),
    e.set("bloomberg.com", 111),
    e.set("businessinsider.com", 112),
    e.set("cnet.com", 113),
    e.set("yy.com", 114),
    e.set("sciencedirect.com", 115),
    e.set("opera.com", 116),
    e.set("163.com", 117),
    e.set("ok.ru", 118),
    e.set("harvard.edu", 119),
    e.set("sogou.com", 120),
    e.set("mit.edu", 121),
    e.set("gnu.org", 122),
    e.set("espn.com", 123),
    e.set("so.com", 124),
    e.set("dailymail.co.uk", 125),
    e.set("17ok.com", 126),
    e.set("booking.com", 127),
    e.set("researchgate.net", 128),
    e.set("rakuten.co.jp", 129),
    e.set("forms.gle", 130),
    e.set("samsung.com", 131),
    e.set("stanford.edu", 132),
    e.set("list-manage.com", 133),
    e.set("hp.com", 134),
    e.set("usatoday.com", 135),
    e.set("telegraph.co.uk", 136),
    e.set("aol.com", 137),
    e.set("surveymonkey.com", 138),
    e.set("jrj.com.cn", 139),
    e.set("ntp.org", 140),
    e.set("kompas.com", 141),
    e.set("cnbc.com", 142),
    e.set("nginx.org", 143),
    e.set("canva.com", 144),
    e.set("cpanel.net", 145),
    e.set("fandom.com", 146),
    e.set("eventbrite.com", 147),
    e.set("indeed.com", 148),
    e.set("indiatimes.com", 149),
    e.set("dailymotion.com", 150),
    e.set("nasa.gov", 151),
    e.set("myspace.com", 152),
    e.set("behance.net", 153),
    e.set("ettoday.net", 154),
    e.set("huffingtonpost.com", 155),
    e.set("nature.com", 156),
    e.set("hao123.com", 157),
    e.set("xvideos.com", 158),
    e.set("walmart.com", 159),
    e.set("youku.com", 160),
    e.set("addthis.com", 161),
    e.set("udemy.com", 162),
    e.set("time.com", 163),
    e.set("t.me", 164),
    e.set("pixnet.net", 165),
    e.set("npr.org", 166),
    e.set("freepik.com", 167),
    e.set("foxnews.com", 168),
    e.set("wendyssubway.com", 169),
    e.set("ted.com", 170),
    e.set("detik.com", 171),
    e.set("www.gov.uk", 172),
    e.set("roblox.com", 173),
    e.set("grid.id", 174),
    e.set("cnblogs.com", 175),
    e.set("flipkart.com", 176),
    e.set("babytree.com", 177),
    e.set("wired.com", 178),
    e.set("ca.gov", 179),
    e.set("bilibili.com", 180),
    e.set("mysql.com", 181),
    e.set("yelp.com", 182),
    e.set("scribd.com", 183),
    e.set("hugedomains.com", 184),
    e.set("slack.com", 185),
    e.set("soso.com", 186),
    e.set("doi.org", 187),
    e.set("goodreads.com", 188),
    e.set("daum.net", 189),
    e.set("intel.com", 190),
    e.set("debian.org", 191),
    e.set("independent.co.uk", 192),
    e.set("wetransfer.com", 193),
    e.set("wikihow.com", 194),
    e.set("opendns.com", 195),
    e.set("force.com", 196),
    e.set("tripadvisor.com", 197),
    e.set("themeforest.net", 198),
    e.set("stackexchange.com", 199),
    e.set("free.fr", 200),
    e.set("zendesk.com", 201),
    e.set("chase.com", 202),
    e.set("techcrunch.com", 203),
    e.set("squarespace.com", 204),
    e.set("android.com", 205),
    e.set("speedtest.net", 206),
    e.set("shutterstock.com", 207),
    e.set("berkeley.edu", 208),
    e.set("line.me", 209),
    e.set("unsplash.com", 210),
    e.set("zillow.com", 211),
    e.set("addtoany.com", 212),
    e.set("livejournal.com", 213),
    e.set("tokopedia.com", 214),
    e.set("tiktok.com", 215),
    e.set("craigslist.org", 216),
    e.set("latimes.com", 217),
    e.set("grammarly.com", 218),
    e.set("zoho.com", 219),
    e.set("okta.com", 220),
    e.set("healthline.com", 221),
    e.set("xhamster.com", 222),
    e.set("taboola.com", 223),
    e.set("ikea.com", 224),
    e.set("onlinesbi.com", 225),
    e.set("quora.com", 226),
    e.set("weather.com", 227),
    e.set("webmd.com", 228),
    e.set("duckduckgo.com", 229),
    e.set("theverge.com", 230),
    e.set("webex.com", 231),
    e.set("cisco.com", 232),
    e.set("w3schools.com", 233),
    e.set("kickstarter.com", 234),
    e.set("gome.com.cn", 235),
    e.set("jimdo.com", 236),
    e.set("digg.com", 237),
    e.set("nationalgeographic.com", 238),
    e.set("ft.com", 239),
    e.set("tradingview.com", 240),
    e.set("6.cn", 241),
    e.set("cornell.edu", 242),
    e.set("ietf.org", 243),
    e.set("zhihu.com", 244),
    e.set("padlet.com", 245),
    e.set("giphy.com", 246),
    e.set("shopify.com", 247),
    e.set("washington.edu", 248),
    e.set("buzzfeed.com", 249),
    e.set("dell.com", 250),
    e.set("eastday.com", 251),
    e.set("rubiconproject.com", 252),
    e.set("pixabay.com", 253),
    e.set("cbsnews.com", 254),
    e.set("about.com", 255),
    e.set("arnebrachhold.de", 256),
    e.set("wa.me", 257),
    e.set("youm7.com", 258),
    e.set("tandfonline.com", 259),
    e.set("appsflyer.com", 260),
    e.set("academia.edu", 261),
    e.set("liputan6.com", 262),
    e.set("cambridge.org", 263),
    e.set("stumbleupon.com", 264),
    e.set("coursera.org", 265),
    e.set("criteo.com", 266),
    e.set("rednet.cn", 267),
    e.set("marriott.com", 268),
    e.set("marketwatch.com", 269),
    e.set("savefrom.net", 270),
    e.set("investopedia.com", 271),
    e.set("symantec.com", 272),
    e.set("box.com", 273),
    e.set("digikala.com", 274),
    e.set("primevideo.com", 275),
    e.set("bestbuy.com", 276),
    e.set("typepad.com", 277),
    e.set("launchpad.net", 278),
    e.set("iqiyi.com", 279),
    e.set("ilovepdf.com", 280),
    e.set("uol.com.br", 281),
    e.set("princeton.edu", 282),
    e.set("usnews.com", 283),
    e.set("discord.com", 284),
    e.set("avito.ru", 285),
    e.set("fc2.com", 286),
    e.set("prnewswire.com", 287),
    e.set("webs.com", 288),
    e.set("ampproject.org", 289),
    e.set("bet9ja.com", 290),
    e.set("steamcommunity.com", 291),
    e.set("mashable.com", 292),
    e.set("economist.com", 293),
    e.set("evernote.com", 294),
    e.set("fda.gov", 295),
    e.set("bandcamp.com", 296),
    e.set("hubspot.com", 297),
    e.set("investing.com", 298),
    e.set("globo.com", 299),
    e.set("worldometers.info", 300),
    e.set("nbcnews.com", 301),
    e.set("airbnb.com", 302),
    e.set("change.org", 303),
    e.set("homedepot.com", 304),
    e.set("hola.org", 305),
    e.set("setn.com", 306),
    e.set("noaa.gov", 307),
    e.set("tistory.com", 308),
    e.set("avast.com", 309),
    e.set("pbs.org", 310),
    e.set("lazada.sg", 311),
    e.set("teamviewer.com", 312),
    e.set("moatads.com", 313),
    e.set("casalemedia.com", 314),
    e.set("plesk.com", 315),
    e.set("oup.com", 316),
    e.set("target.com", 317),
    e.set("trello.com", 318),
    e.set("constantcontact.com", 319),
    e.set("whitehouse.gov", 320),
    e.set("hulu.com", 321),
    e.set("usda.gov", 322),
    e.set("quizlet.com", 323),
    e.set("columbia.edu", 324),
    e.set("sindonews.com", 325),
    e.set("arcgis.com", 326),
    e.set("umich.edu", 327),
    e.set("engadget.com", 328),
    e.set("accuweather.com", 329),
    e.set("state.gov", 330),
    e.set("wellsfargo.com", 331),
    e.set("unesco.org", 332),
    e.set("nypost.com", 333),
    e.set("51.la", 334),
    e.set("huawei.com", 335),
    e.set("varzesh3.com", 336),
    e.set("ups.com", 337),
    e.set("metropoles.com", 338),
    e.set("patreon.com", 339),
    e.set("rt.com", 340),
    e.set("nvidia.com", 341),
    e.set("tripod.com", 342),
    e.set("breitbart.com", 343),
    e.set("psu.edu", 344),
    e.set("vice.com", 345),
    e.set("bukalapak.com", 346),
    e.set("sagepub.com", 347),
    e.set("zdnet.com", 348),
    e.set("gofundme.com", 349),
    e.set("hbr.org", 350),
    e.set("britannica.com", 351),
    e.set("yale.edu", 352),
    e.set("trustpilot.com", 353),
    e.set("epa.gov", 354),
    e.set("abc.net.au", 355),
    e.set("mayoclinic.org", 356),
    e.set("meetup.com", 357),
    e.set("allaboutcookies.org", 358),
    e.set("statista.com", 359),
    e.set("sun.com", 360),
    e.set("cbc.ca", 361),
    e.set("smallpdf.com", 362),
    e.set("patch.com", 363),
    e.set("upenn.edu", 364),
    e.set("nike.com", 365),
    e.set("sciencedaily.com", 366),
    e.set("elsevier.com", 367),
    e.set("wayfair.com", 368),
    e.set("getpocket.com", 369),
    e.set("hdfcbank.com", 370),
    e.set("aliexpress.ru", 371),
    e.set("redhat.com", 372),
    e.set("vox.com", 373),
    e.set("photobucket.com", 374),
    e.set("dribbble.com", 375),
    e.set("ask.com", 376),
    e.set("suara.com", 377),
    e.set("pikiran-rakyat.com", 378),
    e.set("xnxx.com", 379),
    e.set("hootsuite.com", 380),
    e.set("blackboard.com", 381),
    e.set("irs.gov", 382),
    e.set("khanacademy.org", 383),
    e.set("worldbank.org", 384),
    e.set("fedex.com", 385),
    e.set("www.gov.cn", 386),
    e.set("newyorker.com", 387),
    e.set("gizmodo.com", 388),
    e.set("merriam-webster.com", 389),
    e.set("chinadaily.com.cn", 390),
    e.set("ieee.org", 391),
    e.set("businesswire.com", 392),
    e.set("umn.edu", 393),
    e.set("wpengine.com", 394),
    e.set("fastcompany.com", 395),
    e.set("dw.com", 396),
    e.set("chouftv.ma", 397),
    e.set("softonic.com", 398),
    e.set("ox.ac.uk", 399),
    e.set("mathtag.com", 400),
    e.set("inc.com", 401),
    e.set("51sole.com", 402),
    e.set("oreilly.com", 403),
    e.set("ndtv.com", 404),
    e.set("ltn.com.tw", 405),
    e.set("fortune.com", 406),
    e.set("usps.com", 407),
    e.set("wisc.edu", 408),
    e.set("messenger.com", 409),
    e.set("wiktionary.org", 410),
    e.set("entrepreneur.com", 411),
    e.set("typeform.com", 412),
    e.set("snapchat.com", 413),
    e.set("plos.org", 414),
    e.set("att.com", 415),
    e.set("jianshu.com", 416),
    e.set("jhu.edu", 417),
    e.set("nist.gov", 418),
    e.set("gmw.cn", 419),
    e.set("ucla.edu", 420),
    e.set("uci.edu", 421),
    e.set("heavy.com", 422),
    e.set("playstation.com", 423),
    e.set("scientificamerican.com", 424),
    e.set("chicagotribune.com", 425),
    e.set("theconversation.com", 426),
    e.set("deepl.com", 427),
    e.set("deloitte.com", 428),
    e.set("intuit.com", 429),
    e.set("elegantthemes.com", 430),
    e.set("utexas.edu", 431),
    e.set("ameblo.jp", 432),
    e.set("spiegel.de", 433),
    e.set("python.org", 434),
    e.set("y2mate.com", 435),
    e.set("newrelic.com", 436),
    e.set("feedly.com", 437),
    e.set("cmu.edu", 438),
    e.set("indiegogo.com", 439),
    e.set("sfgate.com", 440),
    e.set("telewebion.com", 441),
    e.set("cam.ac.uk", 442),
    e.set("canada.ca", 443),
    e.set("zerodha.com", 444),
    e.set("slate.com", 445),
    e.set("arxiv.org", 446),
    e.set("uk.com", 447),
    e.set("rambler.ru", 448),
    e.set("newsweek.com", 449),
    e.set("lenovo.com", 450),
    e.set("comodoca.com", 451),
    e.set("qualtrics.com", 452),
    e.set("manoramaonline.com", 453),
    e.set("afternic.com", 454),
    e.set("zaloapp.com", 455),
    e.set("xfinity.com", 456),
    e.set("ubuntu.com", 457),
    e.set("timeanddate.com", 458),
    e.set("ed.gov", 459),
    e.set("elpais.com", 460),
    e.set("realtor.com", 461),
    e.set("bmj.com", 462),
    e.set("hotjar.com", 463),
    e.set("verisign.com", 464),
    e.set("hilton.com", 465),
    e.set("uchicago.edu", 466),
    e.set("nps.gov", 467),
    e.set("oecd.org", 468),
    e.set("icicibank.com", 469),
    e.set("bootstrapcdn.com", 470),
    e.set("asus.com", 471),
    e.set("over-blog.com", 472),
    e.set("pexels.com", 473),
    e.set("biomedcentral.com", 474),
    e.set("weforum.org", 475),
    e.set("howstuffworks.com", 476),
    e.set("nicovideo.jp", 477),
    e.set("mgid.com", 478),
    e.set("thesun.co.uk", 479),
    e.set("arstechnica.com", 480),
    e.set("purdue.edu", 481),
    e.set("uiuc.edu", 482),
    e.set("atlassian.net", 483),
    e.set("cnzz.com", 484),
    e.set("douban.com", 485),
    e.set("medicalnewstoday.com", 486),
    e.set("appcenter.ms", 487),
    e.set("chron.com", 488),
    e.set("ny.gov", 489),
    e.set("tencent.com", 490),
    e.set("iqoption.com", 491),
    e.set("norton.com", 492),
    e.set("ladbible.com", 493),
    e.set("parallels.com", 494),
    e.set("mercadolivre.com.br", 495),
    e.set("pcmag.com", 496),
    e.set("tapad.com", 497),
    e.set("dictionary.com", 498),
    e.set("altervista.org", 499),
    e.set("op.gg", 500),
    e.set("unity3d.com", 501),
    e.set("merdeka.com", 502),
    e.set("idntimes.com", 503),
    e.set("visualstudio.com", 504),
    e.set("thesaurus.com", 505),
    e.set("apa.org", 506),
    e.set("techradar.com", 507),
    e.set("autodesk.com", 508),
    e.set("geeksforgeeks.org", 509),
    e.set("reverso.net", 510),
    e.set("si.edu", 511),
    e.set("ftc.gov", 512),
    e.set("toutiao.com", 513),
    e.set("ign.com", 514),
    e.set("sahibinden.com", 515),
    e.set("politico.com", 516),
    e.set("fao.org", 517),
    e.set("zol.com.cn", 518),
    e.set("abs-cbn.com", 519),
    e.set("fastly.net", 520),
    e.set("capitalone.com", 521),
    e.set("nba.com", 522),
    e.set("zend.com", 523),
    e.set("mlb.com", 524),
    e.set("orange.fr", 525),
    e.set("nyu.edu", 526),
    e.set("news.com.au", 527),
    e.set("smh.com.au", 528),
    e.set("chess.com", 529),
    e.set("openstreetmap.org", 530),
    e.set("cctv.com", 531),
    e.set("nydailynews.com", 532),
    e.set("prezi.com", 533),
    e.set("usc.edu", 534),
    e.set("digitaltrends.com", 535),
    e.set("spotxchange.com", 536),
    e.set("bitnami.com", 537),
    e.set("schoology.com", 538),
    e.set("cnnic.cn", 539),
    e.set("bankofamerica.com", 540),
    e.set("barnesandnoble.com", 541),
    e.set("sectigo.com", 542),
    e.set("inquirer.net", 543),
    e.set("uber.com", 544),
    e.set("genius.com", 545),
    e.set("ning.com", 546),
    e.set("fontawesome.com", 547),
    e.set("xing.com", 548),
    e.set("house.gov", 549),
    e.set("livescience.com", 550),
    e.set("joomla.org", 551),
    e.set("moneycontrol.com", 552),
    e.set("dropcatch.com", 553),
    e.set("miit.gov.cn", 554),
    e.set("apnews.com", 555),
    e.set("dedecms.com", 556),
    e.set("kapanlagi.com", 557),
    e.set("duke.edu", 558),
    e.set("sakura.ne.jp", 559),
    e.set("foursquare.com", 560),
    e.set("istockphoto.com", 561),
    e.set("instructables.com", 562),
    e.set("venturebeat.com", 563),
    e.set("ebay-kleinanzeigen.de", 564),
    e.set("census.gov", 565),
    e.set("vmware.com", 566),
    e.set("mercari.com", 567),
    e.set("jstor.org", 568),
    e.set("acs.org", 569),
    e.set("variety.com", 570),
    e.set("alwafd.news", 571),
    e.set("lifehacker.com", 572),
    e.set("nfl.com", 573),
    e.set("youdao.com", 574),
    e.set("mckinsey.com", 575),
    e.set("themeisle.com", 576),
    e.set("usgs.gov", 577),
    e.set("pewresearch.org", 578),
    e.set("proiezionidiborsa.it", 579),
    e.set("linktr.ee", 580),
    e.set("umd.edu", 581),
    e.set("angelfire.com", 582),
    e.set("hm.com", 583),
    e.set("ria.ru", 584),
    e.set("teads.tv", 585),
    e.set("ufl.edu", 586),
    e.set("earthlink.net", 587),
    e.set("videocampaign.co", 588),
    e.set("marca.com", 589),
    e.set("msu.edu", 590),
    e.set("aljazeera.com", 591),
    e.set("jotform.com", 592),
    e.set("imageshack.us", 593),
    e.set("ea.com", 594),
    e.set("jpnn.com", 595),
    e.set("adp.com", 596),
    e.set("thefreedictionary.com", 597),
    e.set("about.me", 598),
    e.set("senate.gov", 599),
    e.set("fast.com", 600),
    e.set("urbandictionary.com", 601),
    e.set("ucsd.edu", 602),
    e.set("jiameng.com", 603),
    e.set("mheducation.com", 604),
    e.set("thehill.com", 605),
    e.set("nikkei.com", 606),
    e.set("duolingo.com", 607),
    e.set("redbubble.com", 608),
    e.set("rollingstone.com", 609),
    e.set("doubleverify.com", 610),
    e.set("brilio.net", 611),
    e.set("9gag.com", 612),
    e.set("alexa.com", 613),
    e.set("tutorialspoint.com", 614),
    e.set("wildberries.ru", 615),
    e.set("lijit.com", 616),
    e.set("thelancet.com", 617),
    e.set("postgresql.org", 618),
    e.set("xbox.com", 619),
    e.set("hatena.ne.jp", 620),
    e.set("mi.com", 621),
    e.set("gmx.net", 622),
    e.set("unc.edu", 623),
    e.set("gartner.com", 624),
    e.set("in.gr", 625),
    e.set("northwestern.edu", 626),
    e.set("adjust.com", 627),
    e.set("branch.io", 628),
    e.set("81.cn", 629),
    e.set("utoronto.ca", 630),
    e.set("thedailybeast.com", 631),
    e.set("namecheap.com", 632),
    e.set("lemonde.fr", 633),
    e.set("wattpad.com", 634),
    e.set("stripe.com", 635),
    e.set("crunchyroll.com", 636),
    e.set("shopee.co.id", 637),
    e.set("sky.com", 638),
    e.set("proofpoint.com", 639),
    e.set("hurriyet.com.tr", 640),
    e.set("bls.gov", 641),
    e.set("gamespot.com", 642),
    e.set("focus.cn", 643),
    e.set("slashdot.org", 644),
    e.set("theglobeandmail.com", 645),
    e.set("fidelity.com", 646),
    e.set("thetimes.co.uk", 647),
    e.set("vnexpress.net", 648),
    e.set("hespress.com", 649),
    e.set("xe.com", 650),
    e.set("ensonhaber.com", 651),
    e.set("qoo10.sg", 652),
    e.set("jamanetwork.com", 653),
    e.set("java.com", 654),
    e.set("gitlab.com", 655),
    e.set("hatenablog.com", 656),
    e.set("apachefriends.org", 657),
    e.set("scmp.com", 658),
    e.set("elbalad.news", 659),
    e.set("goo.ne.jp", 660),
    e.set("asu.edu", 661),
    e.set("siemens.com", 662),
    e.set("newscientist.com", 663),
    e.set("yts.mx", 664),
    e.set("hhs.gov", 665),
    e.set("wufoo.com", 666),
    e.set("gismeteo.ru", 667),
    e.set("repubblica.it", 668),
    e.set("automattic.com", 669),
    e.set("newegg.com", 670),
    e.set("gsmarena.com", 671),
    e.set("history.com", 672),
    e.set("today.com", 673),
    e.set("arizona.edu", 674),
    e.set("dbs.com.sg", 675),
    e.set("docker.com", 676),
    e.set("divar.ir", 677),
    e.set("sec.gov", 678),
    e.set("fool.com", 679),
    e.set("hollywoodreporter.com", 680),
    e.set("wunderground.com", 681),
    e.set("uspto.gov", 682),
    e.set("albawabhnews.com", 683),
    e.set("mixcloud.com", 684),
    e.set("disneyplus.com", 685),
    e.set("boston.com", 686),
    e.set("colorado.edu", 687),
    e.set("zippyshare.com", 688),
    e.set("indianexpress.com", 689),
    e.set("w55c.net", 690),
    e.set("mitre.org", 691),
    e.set("dcard.tw", 692),
    e.set("cbssports.com", 693),
    e.set("mapquest.com", 694),
    e.set("nejm.org", 695),
    e.set("mzstatic.com", 696),
    e.set("dhl.com", 697),
    e.set("people.com", 698),
    e.set("indiamart.com", 699),
    e.set("rediff.com", 700),
    e.set("nhk.or.jp", 701),
    e.set("livestream.com", 702),
    e.set("techtarget.com", 703),
    e.set("web.de", 704),
    e.set("youporn.com", 705),
    e.set("www.nhs.uk", 706),
    e.set("biblegateway.com", 707),
    e.set("ustream.tv", 708),
    e.set("icann.org", 709),
    e.set("beytoote.com", 710),
    e.set("mega.nz", 711),
    e.set("freebsd.org", 712),
    e.set("ecosia.org", 713),
    e.set("zemanta.com", 714),
    e.set("uptodown.com", 715),
    e.set("wordreference.com", 716),
    e.set("eff.org", 717),
    e.set("efu.com.cn", 718),
    e.set("howtogeek.com", 719),
    e.set("metro.co.uk", 720),
    e.set("edx.org", 721),
    e.set("hindustantimes.com", 722),
    e.set("hexun.com", 723),
    e.set("eba.gov.tr", 724),
    e.set("eastmoney.com", 725),
    e.set("bitbucket.org", 726),
    e.set("kernel.org", 727),
    e.set("sony.com", 728),
    e.set("yumpu.com", 729),
    e.set("alodokter.com", 730),
    e.set("last.fm", 731),
    e.set("haofang.net", 732),
    e.set("technologyreview.com", 733),
    e.set("coinmarketcap.com", 734),
    e.set("ucdavis.edu", 735),
    e.set("biobiochile.cl", 736),
    e.set("costco.com", 737),
    e.set("iana.org", 738),
    e.set("sap.com", 739),
    e.set("businessinsider.de", 740),
    e.set("thoughtco.com", 741),
    e.set("1337x.to", 742),
    e.set("rottentomatoes.com", 743),
    e.set("thenextweb.com", 744),
    e.set("infobae.com", 745),
    e.set("unicef.org", 746),
    e.set("wa.gov", 747),
    e.set("nymag.com", 748),
    e.set("eset.com", 749),
    e.set("rutgers.edu", 750),
    e.set("chinaz.com", 751),
    e.set("104.com.tw", 752),
    e.set("opensource.org", 753),
    e.set("phys.org", 754),
    e.set("t-online.de", 755),
    e.set("citi.com", 756),
    e.set("amap.com", 757),
    e.set("ubc.ca", 758),
    e.set("onet.pl", 759),
    e.set("lenta.ru", 760),
    e.set("virginia.edu", 761),
    e.set("libsyn.com", 762),
    e.set("gallup.com", 763),
    e.set("wish.com", 764),
    e.set("businessweek.com", 765),
    e.set("moz.com", 766),
    e.set("360doc.com", 767),
    e.set("borna.news", 768),
    e.set("as.com", 769),
    e.set("audible.com", 770),
    e.set("filimo.com", 771),
    e.set("woocommerce.com", 772),
    e.set("nokia.com", 773),
    e.set("custhelp.com", 774),
    e.set("colorlib.com", 775),
    e.set("garmin.com", 776),
    e.set("spb.ru", 777),
    e.set("libero.it", 778),
    e.set("sputniknews.com", 779),
    e.set("bu.edu", 780),
    e.set("flaticon.com", 781),
    e.set("pastebin.com", 782),
    e.set("osu.edu", 783),
    e.set("zing.vn", 784),
    e.set("pandora.com", 785),
    e.set("archives.gov", 786),
    e.set("tamu.edu", 787),
    e.set("envato.com", 788),
    e.set("discovery.com", 789),
    e.set("udn.com", 790),
    e.set("nsw.gov.au", 791),
    e.set("acm.org", 792),
    e.set("frontier.com", 793),
    e.set("themegrill.com", 794),
    e.set("wp.pl", 795),
    e.set("usa.gov", 796),
    e.set("ssrn.com", 797),
    e.set("yolasite.com", 798),
    e.set("adweek.com", 799),
    e.set("wondershare.com", 800),
    e.set("com.com", 801),
    e.set("mopub.com", 802),
    e.set("prweb.com", 803),
    e.set("pcworld.com", 804),
    e.set("is.gd", 805),
    e.set("huaban.com", 806),
    e.set("strava.com", 807),
    e.set("namasha.com", 808),
    e.set("discogs.com", 809),
    e.set("tahiamasr.com", 810),
    e.set("spankbang.com", 811),
    e.set("cuny.edu", 812),
    e.set("truste.com", 813),
    e.set("kakaku.com", 814),
    e.set("lg.com", 815),
    e.set("dot.gov", 816),
    e.set("delicious.com", 817),
    e.set("zara.com", 818),
    e.set("bhphotovideo.com", 819),
    e.set("theregister.co.uk", 820),
    e.set("justice.gov", 821),
    e.set("viber.com", 822),
    e.set("phpbb.com", 823),
    e.set("fivethirtyeight.com", 824),
    e.set("weather.gov", 825),
    e.set("foodnetwork.com", 826),
    e.set("macys.com", 827),
    e.set("mcafee.com", 828),
    e.set("va.gov", 829),
    e.set("fbi.gov", 830),
    e.set("calendly.com", 831),
    e.set("pwc.com", 832),
    e.set("bostonglobe.com", 833),
    e.set("smugmug.com", 834),
    e.set("wustl.edu", 835),
    e.set("slickdeals.net", 836),
    e.set("collegeboard.org", 837),
    e.set("onlyfans.com", 838),
    e.set("oschina.net", 839),
    e.set("iqbroker.com", 840),
    e.set("podbean.com", 841),
    e.set("contextweb.com", 842),
    e.set("theepochtimes.com", 843),
    e.set("squareup.com", 844),
    e.set("paypal.me", 845),
    e.set("avg.com", 846),
    e.set("mystrikingly.com", 847),
    e.set("ibicn.com", 848),
    e.set("bigcartel.com", 849),
    e.set("simpli.fi", 850),
    e.set("matterport.com", 851),
    e.set("dhs.gov", 852),
    e.set("500px.com", 853),
    e.set("runoob.com", 854),
    e.set("billboard.com", 855),
    e.set("shutterfly.com", 856),
    e.set("kompasiana.com", 857),
    e.set("ey.com", 858),
    e.set("mathrubhumi.com", 859),
    e.set("bluehost.com", 860),
    e.set("smithsonianmag.com", 861),
    e.set("amd.com", 862),
    e.set("dafont.com", 863),
    e.set("seekingalpha.com", 864),
    e.set("kde.org", 865),
    e.set("mdpi.com", 866),
    e.set("heytapmobi.com", 867),
    e.set("onesignal.com", 868),
    e.set("ap.org", 869),
    e.set("indiana.edu", 870),
    e.set("euronews.com", 871),
    e.set("semanticscholar.org", 872),
    e.set("gusuwang.com", 873),
    e.set("it168.com", 874),
    e.set("rbc.ru", 875),
    e.set("elfagr.com", 876),
    e.set("boc.cn", 877),
    e.set("bild.de", 878),
    e.set("fedoraproject.org", 879),
    e.set("4shared.com", 880),
    e.set("thawte.com", 881),
    e.set("pixiv.net", 882),
    e.set("elmundo.es", 883),
    e.set("binance.com", 884),
    e.set("banggood.com", 885),
    e.set("gutenberg.org", 886),
    e.set("frontiersin.org", 887),
    e.set("firefox.com", 888),
    e.set("accenture.com", 889),
    e.set("army.mil", 890),
    e.set("udel.edu", 891),
    e.set("sba.gov", 892),
    e.set("seznam.cz", 893),
    e.set("wowhead.com", 894),
    e.set("loom.com", 895),
    e.set("turkiye.gov.tr", 896),
    e.set("get-express-vpn.online", 897),
    e.set("perl.org", 898),
    e.set("faqs.org", 899),
    e.set("imf.org", 900),
    e.set("narod.ru", 901),
    e.set("ucl.ac.uk", 902),
    e.set("premierleague.com", 903),
    e.set("donya-e-eqtesad.com", 904),
    e.set("dmm.co.jp", 905),
    e.set("gettyimages.com", 906),
    e.set("medscape.com", 907),
    e.set("pitt.edu", 908),
    e.set("fcc.gov", 909),
    e.set("iheart.com", 910),
    e.set("vanityfair.com", 911),
    e.set("tiny.cc", 912),
    e.set("utah.edu", 913),
    e.set("secomtrust.net", 914),
    e.set("rfc-editor.org", 915),
    e.set("navy.mil", 916),
    e.set("ultimate-guitar.com", 917),
    e.set("optimizely.com", 918),
    e.set("coursehero.com", 919),
    e.set("voanews.com", 920),
    e.set("lego.com", 921),
    e.set("usembassy.gov", 922),
    e.set("cancer.org", 923),
    e.set("greenpeace.org", 924),
    e.set("ovh.net", 925),
    e.set("miui.com", 926),
    e.set("ncsu.edu", 927),
    e.set("tinypic.com", 928),
    e.set("tmz.com", 929),
    e.set("t-mobile.com", 930),
    e.set("remove.bg", 931),
    e.set("thestar.com", 932),
    e.set("readthedocs.io", 933),
    e.set("wikidot.com", 934),
    e.set("elsevierhealth.com", 935),
    e.set("computerworld.com", 936),
    e.set("biglobe.ne.jp", 937),
    e.set("heart.org", 938),
    e.set("cpic.com.cn", 939),
    e.set("mileroticos.com", 940),
    e.set("asahi.com", 941),
    e.set("dol.gov", 942),
    e.set("snopes.com", 943),
    e.set("welt.de", 944),
    e.set("cia.gov", 945),
    e.set("dreamstime.com", 946),
    e.set("novell.com", 947),
    e.set("study.com", 948),
    e.set("teachable.com", 949),
    e.set("yandex.com", 950),
    e.set("bund.de", 951),
    e.set("disney.com", 952),
    e.set("seattletimes.com", 953),
    e.set("energy.gov", 954),
    e.set("hotels.com", 955),
    e.set("standard.co.uk", 956),
    e.set("nasdaq.com", 957),
    e.set("viva.co.id", 958),
    e.set("emol.com", 959),
    e.set("g.co", 960),
    e.set("lww.com", 961),
    e.set("eyeota.net", 962),
    e.set("mercurynews.com", 963),
    e.set("agah.com", 964),
    e.set("tufts.edu", 965),
    e.set("sharethrough.com", 966),
    e.set("nyc.gov", 967),
    e.set("cnnindonesia.com", 968),
    e.set("nielsen.com", 969),
    e.set("powerbi.com", 970),
    e.set("ozon.ru", 971),
    e.set("flurry.com", 972),
    e.set("lifewire.com", 973),
    e.set("brookings.edu", 974),
    e.set("medlineplus.gov", 975),
    e.set("redtube.com", 976),
    e.set("liveinternet.ru", 977),
    e.set("eurekalert.org", 978),
    e.set("tesla.com", 979),
    e.set("japanpost.jp", 980),
    e.set("accor.com", 981),
    e.set("lifo.gr", 982),
    e.set("redfin.com", 983),
    e.set("battle.net", 984),
    e.set("foxbusiness.com", 985),
    e.set("ytmp3.cc", 986),
    e.set("jw.org", 987),
    e.set("fifa.com", 988),
    e.set("expedia.com", 989),
    e.set("ibb.co", 990),
    e.set("ed.ac.uk", 991),
    e.set("mfisp.com", 992),
    e.set("rakuten.com", 993),
    e.set("farfetch.com", 994),
    e.set("congress.gov", 995),
    e.set("citrix.com", 996),
    e.set("answers.com", 997),
    e.set("gumgum.com", 998),
    e.set("neilpatel.com", 999),
    e.set("anchor.fm", 1e3),
    e.set("pulzo.com", 1001),
    e.set("rutracker.org", 1002),
    e.set("prestashop.com", 1003),
    e.set("homestead.com", 1004),
    e.set("cygwin.com", 1005),
    e.set("westernjournal.com", 1006),
    e.set("gyazo.com", 1007),
    e.set("quizizz.com", 1008),
    e.set("haxx.se", 1009),
    e.set("ehow.com", 1010),
    e.set("philips.com", 1011),
    e.set("vt.edu", 1012),
    e.set("hawaii.edu", 1013),
    e.set("allrecipes.com", 1014),
    e.set("panasonic.com", 1015),
    e.set("cnki.net", 1016),
    e.set("bugsnag.com", 1017),
    e.set("adblockplus.org", 1018),
    e.set("ico.org.uk", 1019),
    e.set("payoneer.com", 1020),
    e.set("bttrack.com", 1021),
    e.set("olx.pl", 1022),
    e.set("washingtontimes.com", 1023);
}
async function Uo() {
  if (!window.localStorage.state || window.localStorage.stateMigrateDate) return;
  let e = async (n) => {
    let a = await S().get(n);
    window.localStorage[n] && !a && (await S().put(n, window.localStorage[n]), window.localStorage.removeItem(n));
  };
  await e("extensionKey"), await e("lastSeenVersion"), await e("settings");
  let o = await S().get("installDate");
  window.localStorage.installDate &&
    ((!o || parseInt(o) > parseInt(window.localStorage.installDate)) &&
      (await S().put("installDate", parseInt(window.localStorage.installDate))),
    window.localStorage.removeItem("installDate"));
  let t = await h.getState();
  t || (t = {}), t.tabGroups || (t.tabGroups = []);
  let i = t.tabGroups;
  if (window.localStorage.state) {
    let n = window.localStorage.state,
      r = JSON.parse(n).tabGroups;
    if (r) {
      for (let c of r) i.push(c);
      await h.Lt(t),
        window.localStorage.removeItem("state"),
        (window.localStorage.oldState = n),
        (window.localStorage.stateMigrateDate = new Date().getTime()),
        window.localStorage.removeItem("topSites");
    }
  }
}
class ce {
  constructor({ parent: o, label: t, Uo: i, Oo: n, isEnabled: a, So: r, className: c }) {
    (this.div = m(o, "div", {
      style: { [`padding${A()}`]: i + "px", display: "inline-block", fontSize: "11px" },
      className: "clickable" + (c ? " " + c : ""),
      textContent: t,
      onclick: (u) => {
        this.isEnabled ? n(u, this.div) : this.So && this.So(u);
      }
    }).o),
      this.setEnabled(a),
      (this.So = r);
  }
  setEnabled(o) {
    (this.isEnabled = o), this.isEnabled ? (this.div.style.color = "") : (this.div.style.color = "var(--text-color-weak)");
  }
}
function Me(e) {
  return "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://" + e + "&size=32";
}
function ze(e) {
  const o = new URL(chrome.runtime.getURL("/_favicon/"));
  return o.searchParams.set("pageUrl", e), o.searchParams.set("size", "32"), o.toString();
}
function Oo(e, o) {
  let t = $o(e),
    i = document.createElement("div");
  if (
    ((i.style.display = "inline-block"),
    (i.style.width = "16px"),
    (i.style.height = "16px"),
    (i.style.top = "5px"),
    (i.style.position = "absolute"),
    (i.style[`${F()}`] = "25px"),
    (i.style.cursor = o ? "default" : "move"),
    Ee && T.jo.has(t))
  ) {
    let n = T.jo.get(t),
      a = 16 * (n % T.ei),
      r = 16 * Math.floor(n / T.ei);
    (i.style.backgroundSize = T.imageWidth / 2 + "px " + T.imageHeight / 2 + "px"),
      (i.style.backgroundRepeat = "none;"),
      (i.style.backgroundPositionX = -1 * a + "px"),
      (i.style.backgroundPositionY = -1 * r + "px"),
      (async () => (await q(), (i.style.backgroundImage = "url(images/iconGrid.webp)")))();
  } else {
    let n = ao(e),
      a = Me(n),
      r = "images/globe.png",
      c = document.createElement("img");
    (c.style.borderStyle = "none"),
      (c.style.width = "16px"),
      (c.style.height = "16px"),
      (c.src = r),
      i.appendChild(c),
      !n ||
        !n.includes(".") ||
        n === "localhost" ||
        n.startsWith("192.168.") ||
        n.startsWith("172.16.") ||
        n.startsWith("10.") ||
        (ae
          ? ((c.onload = () => {
              c.src.endsWith(r) || ($e === Oe(c) && ((c.onload = null), (c.onerror = () => (c.src = r)), (c.src = a)));
            }),
            (async () => (await q(), (c.onerror = () => (c.src = r)), (c.src = ze(e))))())
          : (async () => (await q(), (c.onerror = () => (c.src = r)), (c.src = a)))());
  }
  return i;
}
class Fe {
  constructor(o, t) {
    (this.co = t), (this.url = o.url), (this.title = o.title), (this.pinned = o.pinned), (this.ho = o.id);
    let i = U(ho(o.title));
    i === "" && (i = "Untitled");
    let n = bo(this.url),
      a = yo(n, t.uo);
    const r = m(void 0, "div", {
      className: "tab",
      style: { display: "table-row" },
      children: {
        Gi: G.Zo(),
        tab: m(void 0, "div", {
          style: {
            display: "inline-block",
            [`padding${x()}`]: "55px",
            [`padding${A()}`]: "14px",
            paddingTop: "4px",
            paddingBottom: "4px",
            position: "relative",
            fontSize: "13px",
            wordBreak: "break-all"
          },
          children: {
            $o: Oo(n, this.co.locked),
            Ni: m(void 0, "a", {
              className: "clickable tabLink",
              style: { [`padding${A()}`]: "12px", textDecoration: "none" },
              textContent: i,
              href: a,
              onclick: (f) => {
                let p = Be(f),
                  y = je(f);
                return (
                  (async () => {
                    let s = await h.ve("restoreRemoval");
                    if (p || this.co.locked || s === "keep")
                      if (y) await h.$a([{ url: a, pinned: this.pinned }]);
                      else {
                        let b = !1;
                        await h.Je(a, !!this.pinned, b);
                      }
                    else {
                      await h.Fa(this.co.eo, this.ho);
                      let b = !1;
                      await h.Je(a, !!this.pinned, b), await h.De();
                    }
                  })(),
                  !1
                );
              }
            }),
            oi: B(
              {
                position: "absolute",
                display: "inline-block",
                top: "6px",
                [F()]: "0px",
                width: 28 / 2 + "px",
                height: 26 / 2 + "px",
                verticalAlign: "middle",
                paddingTop: "2px",
                visibility: "hidden",
                cursor: "pointer"
              },
              {
                onmousedown: async (f) => {
                  c.parentNode.removeChild(c), await h.Fa(this.co.eo, this.ho);
                }
              },
              (f) => `images/cross${f ? "" : "-dark"}.png`
            )
          },
          init: (f) => {
            zo(f, (p) => {
              this.co.locked || G.so || (r.tab.oi.style.visibility = "visible");
            }),
              Fo(f, (p) => {
                r.tab.oi.style.visibility = "hidden";
              });
          }
        })
      }
    });
    this.div = r.o;
    const c = r.tab.o;
    let u = r.Gi;
    (this.$o = r.tab.$o),
      G.mi({
        li: c,
        ui: { eo: this.co.eo, tabId: this.ho, Si: this.co.Si },
        di: r.o,
        yi: c,
        pi: "tab",
        hi: () => {
          (c.style.boxShadow = "var(--dragged-element-box-shadow)"), (c.style.backgroundColor = "var(--dragged-element-bg)");
        },
        fi: () => {},
        gi: () => {
          (c.style.boxShadow = "none"), (c.style.backgroundColor = "transparent"), G.Qo.insertBefore(G.yo, G.Jo);
        },
        bi: () => {
          (c.style.boxShadow = "none"), (c.style.backgroundColor = "transparent");
        },
        wi: () => !!this.co.locked
      }),
      G.Yo({
        element: r.o,
        objectType: "tab",
        io: u,
        vo: async (f) => {
          let p = this.ho;
          await this.co.ti(p, f);
        }
      });
  }
  Eo(o) {
    this.$o.style.cursor = o ? "auto" : "move";
  }
}
class Q {
  constructor(o, t) {
    (this.ao = new Map()),
      (this.uo = t),
      (this.ro = o.groupType),
      (this.le = !!o.starred),
      (this.ii = o.starredDate),
      (this.Di = o.createDate),
      (this.locked = !!o.locked),
      (this.label = o.label),
      (this.eo = o.id),
      (this.ni = new ce({
        label: l("deleteAll"),
        Uo: 30,
        Oo: (c) => {
          let u = l("areYouSureYouWantToDeleteThisTab");
          this.ci() >= 2 && (u = l("areYouSureYouWantToDeleteTheseTabs")), (J || confirm(u)) && h.Da(this.eo, !1);
        },
        isEnabled: !this.locked,
        So: (c) => {
          J || alert(l("unlockBeforeDeleting"));
        },
        className: "deleteAllButton"
      }));
    let i = (c, u, f, p) => {
        let y = m(void 0, "div", {
          style: { paddingBottom: u + "px", fontSize: Ve + "px", whiteSpace: "pre" },
          className: "clickable" + (f ? " " + f : ""),
          textContent: c
        }).o;
        return (
          y.addEventListener(
            "mousedown",
            (s) => {
              s.stopPropagation(), setTimeout(() => re(), 1), setTimeout(() => re(), 200), p(s);
            },
            !1
          ),
          y
        );
      },
      n = m(void 0, "div", {
        style: {
          boxShadow: "1px 1px 4px var(--dash-color)",
          backgroundColor: "var(--bg-color)",
          paddingTop: "11px",
          paddingBottom: "11px",
          display: "none",
          position: "absolute",
          top: "-11px",
          zIndex: "10000",
          [`padding${x()}`]: "18px",
          [`padding${A()}`]: "16px",
          [x()]: "-18px"
        },
        children: {
          Wi: i(l("nameThisTabGroup"), 6, "nameThisTabGroupButton", (c) => {
            this.label === "" && this.Do.Go("", !1, !0), (r.style.display = "inline-block"), this.Do.Bo();
          }),
          Pi: i(this.locked ? l("unlockTabGroup") : l("lockTabGroup"), 6, "toggleLockTabGroupButton", (c) => {
            (this.locked = !this.locked), h.ka(this.eo, { locked: this.locked });
          }),
          Li: i(this.le ? l("unstarTabGroup") : l("starTabGroup"), 6, "toggleStarTabGroupButton", (c) => {
            (this.le = !this.le), this.le && (this.ii = new Date().getTime()), h.ka(this.eo, { starred: this.le, starredDate: this.ii });
          }),
          ai: i(
            this.ro === "tabGroup" ? l("setToOpenAsRegularTabs") : l("setToOpenAsBrowserTabGroup"),
            6,
            "toggleGroupTypeButton",
            async (c) => {
              (await xe())
                ? ((this.ro = this.ro === "tabGroup" ? "window" : "tabGroup"), h.ka(this.eo, { groupType: this.ro }))
                : /Opera|OPR\//.test(navigator.userAgent) &&
                  alert("Opera tab group support coming soon - please keep your browser up-to-date.");
            }
          ),
          Ci: i(l("copyLinksToClipboard"), 6, "copyLinksToClipboardButton", (c) => {
            const u = (f) =>
              f.tabGroups.find((p) => p.id === this.eo).tabsMeta.map((p) => `${p.url} | ${p.title}`).join(`
`);
            (async () => await navigator.clipboard.writeText(u(await h.getState())))();
          }),
          _i: i(l("help"), 0, "tabGroupHelpButton", (c) => {
            (async () => await h.Je(ue + "/help", !1, !0))();
          })
        }
      });
    (this.Po = n), X || (this.Po.ai.style.display = "none");
    let a = m(void 0, "div", {
      className: "tabGroup",
      style: { paddingTop: "15px", paddingLeft: "0px" },
      children: {
        header: m(void 0, "div", {
          style: { [`padding${x()}`]: "20px" },
          children: {
            fo: m(void 0, "div", {
              style: { display: "inline-block", verticalAlign: "middle", [`padding${x()}`]: "16px" },
              children: {
                Vo: B(
                  {
                    display: this.le ? "inline-block" : "none",
                    verticalAlign: "middle",
                    width: "23px",
                    height: "22px",
                    position: "relative",
                    [`padding${A()}`]: "11px",
                    [F()]: "-2px"
                  },
                  { className: "starImg" },
                  (c) => `images/star${c ? "" : "-dark"}.png`
                ),
                Ro: B(
                  {
                    display: this.locked ? "inline-block" : "none",
                    verticalAlign: "middle",
                    width: "14px",
                    height: "18px",
                    position: "relative",
                    [`padding${A()}`]: "18px",
                    [F()]: "2px"
                  },
                  { className: "lockImg" },
                  (c) => `images/lock${c ? "" : "-dark"}.png`
                ),
                qo: B(
                  {
                    display: this.ro === "tabGroup" ? "inline-block" : "none",
                    verticalAlign: "middle",
                    width: "18px",
                    height: "18px",
                    position: "relative",
                    [`padding${A()}`]: "19px",
                    [F()]: "2px"
                  },
                  { className: "tabGroupImg" },
                  (c) => `images/tabgroup${c ? "" : "-dark"}.png`
                ),
                Mi: m(void 0, "div", {
                  style: { display: "inline-block", fontSize: "0px", fontWeight: "300", verticalAlign: "middle" },
                  children: { zi: m(void 0, "div", { style: { fontSize: "0px", display: "none", [`padding${A()}`]: "30px" } }).o }
                }),
                No: m(void 0, "div", {
                  style: {
                    display: "inline-block",
                    fontSize: "24px",
                    color: "var(--text-color-weak)",
                    fontWeight: "300",
                    verticalAlign: "middle"
                  },
                  className: "tabCount",
                  onclick: () => {
                    (r.style.display = "inline-block"), this.Do.Bo();
                  }
                }).o,
                Hi: m(void 0, "div", {
                  style: { display: "inline-block", verticalAlign: "middle", fontSize: "0px", [`padding${x()}`]: "28px" },
                  children: {
                    Qi: m(void 0, "div", {
                      style: {
                        fontSize: "11px",
                        fontWeight: "400",
                        color: "var(--text-color-weak)",
                        paddingTop: "0px",
                        paddingBottom: "2px"
                      },
                      textContent: l("createdPreceedingDate") + " " + new Date(this.Di).toLocaleString()
                    }),
                    Ji: new ce({
                      label: l("restoreAll"),
                      Uo: 30,
                      Oo: async (c) => {
                        await xe();
                        let u = Be(c),
                          f = je(c),
                          p;
                        u && (p = f ? "newWindow" : "currentWindow");
                        let y = await h.ve("restoreRemoval");
                        u || this.locked || y === "keep" ? await h.Na(this.eo, p) : await h.Da(this.eo, !0, p);
                      },
                      isEnabled: !0,
                      className: "restoreAllButton"
                    }).div,
                    deleteAll: this.ni.div,
                    Ua: new ce({
                      label: l("shareAsWebPage"),
                      Uo: 30,
                      Oo: (c, u) => {
                        (u.textContent = l("pleaseWaitTripleDot")),
                          (async () =>
                            await h.Ua([this.eo], !1).then(() => {
                              de(u), (u.textContent = l("shareAsWebPage"));
                            }))();
                      },
                      isEnabled: !0,
                      className: "shareAsWebPageButton"
                    }).div,
                    Ki: m(void 0, "div", {
                      style: { display: "inline-block", position: "relative", fontSize: Ve + "px" },
                      className: "clickable moreButton",
                      textContent: l("moreTripleDot"),
                      l: n.o,
                      onclick: (c) => {
                        (n.o.style.display = "block"), (K = n.o);
                      }
                    })
                  }
                })
              }
            })
          }
        }),
        bo: m(void 0, "div", { className: "tabList", style: { [`padding${x()}`]: "12px", [`padding${A()}`]: "20px", paddingTop: "12px" } })
          .o,
        ri: m(void 0, "div", { style: { height: "19px", [`padding${x()}`]: "12px" }, children: { Fi: G.Zo() } })
      }
    });
    (this.div = a.o), (this.Vo = a.header.fo.Vo), (this.Ro = a.header.fo.Ro), (this.qo = a.header.fo.qo);
    let r = a.header.fo.Mi.zi;
    (this.Do = new no({
      parentElement: r,
      ko: async (c, u) => {
        u &&
          ((c = U(c)),
          c === "" && (c = void 0),
          (r.style.display = c === void 0 ? "none" : "inline-block"),
          await h.ka(this.eo, { label: c }));
      },
      value: this.label,
      mo: 24,
      fontWeight: "300",
      lo: "tabGroupTitleText",
      To: () => this.locked,
      Ao: void 0
    })),
      (r.style.display = this.label === "" || this.label === void 0 ? "none" : "inline-block"),
      (this.No = a.header.fo.No),
      (this.bo = a.bo);
    for (let c of o.tabsMeta) this.Wo(c);
    this.wo(),
      (this.ti = async (c, u) => {
        let f = u.eo,
          p = this.eo;
        f === p ? await h.Ra(f, u.tabId, c) : await h.Ba(f, p, u.tabId, c);
      }),
      G.Yo({
        element: a.ri.o,
        objectType: "tab",
        io: a.ri.Fi,
        vo: async (c) => {
          let u;
          await this.ti(u, c);
        }
      });
  }
  Bi(o) {
    (this.le = o),
      (this.Vo.style.display = this.le ? "inline-block" : "none"),
      (this.Po.Li.textContent = this.le ? l("unstarTabGroup") : l("starTabGroup"));
  }
  ji(o) {
    (this.ro = o),
      (this.qo.style.display = this.ro === "tabGroup" ? "inline-block" : "none"),
      (this.Po.ai.textContent = this.ro === "tabGroup" ? l("setToOpenAsRegularTabs") : l("setToOpenAsBrowserTabGroup"));
  }
  Eo(o) {
    (this.locked = o),
      Array.from(this.ao.values()).forEach((t) => t.Eo(o)),
      (this.Ro.style.display = this.locked ? "inline-block" : "none"),
      (this.Po.Pi.textContent = this.locked ? l("unlockTabGroup") : l("lockTabGroup")),
      this.ni.setEnabled(!this.locked);
  }
  wo() {
    this.No.textContent = Vo(this.ci());
  }
  ci() {
    return this.ao.size;
  }
  Ui(o) {
    let t = 0;
    o.forEach((i) => {
      let n = new Fe(i, this);
      this.ao.set(i.id, n), L(n.div, this.bo, t++);
    });
  }
  Wo(o, t) {
    let i = new Fe(o, this);
    this.ao.set(o.id, i), L(i.div, this.bo, t);
  }
  Lo(o) {
    let t = this.ao.get(o);
    t.div.parentElement && t.div.remove(), this.ao.delete(o);
  }
  Oi(o, t) {
    let i = this.ao.get(o);
    L(i.div, this.bo, t);
  }
  $i(o) {
    return this.ao.get(o);
  }
  Ei(o) {
    L(this.div, this.div.parentElement, o);
  }
}
function $o(e) {
  if (!e || e.toLowerCase().startsWith("file://")) return "";
  if (e.indexOf("://docs.google.com/spreadsheets/d/") !== -1) return "docs.google.com-spreadsheets";
  if (e.indexOf("://docs.google.com/document/d/") !== -1) return "docs.google.com-document";
  if (e.indexOf("://docs.google.com/presentation/d/") !== -1) return "docs.google.com-presentation";
  if (e.indexOf("://docs.google.com/forms/d/") !== -1) return "docs.google.com-forms";
  let o = co(e);
  return o.endsWith(".wikipedia.org") && (o = "wikipedia.org"), o;
}
function Eo(e) {
  return e === 0 ? l("total0Tabs") : e === 1 ? l("total1Tab") : l("total2Tabs").replace("2", e + "");
}
function Vo(e) {
  return e === 1 ? l("1tab") : l("2tabs").replace("2", e + "");
}
function Be(e) {
  return e.ctrlKey || e.shiftKey || e.metaKey;
}
function Vt(e) {
  return e.ctrlKey || e.metaKey;
}
function je(e) {
  return e.shiftKey;
}
function Ro(e) {
  let o = document.createElement("span"),
    t = e.indexOf("OneTab"),
    i = t + "OneTab".length;
  return (
    t === 0
      ? (o.appendChild(Ue()), o.appendChild(document.createTextNode(e.substring(i))))
      : (o.appendChild(document.createTextNode(e.substring(0, t))),
        o.appendChild(Ue()),
        i !== e.length && o.appendChild(document.createTextNode(e.substring(i)))),
    o
  );
}
function Ue() {
  let e = document.createElement("span"),
    o = document.createElement("span");
  return (
    (o.style.fontStyle = "italic"),
    o.appendChild(document.createTextNode("One")),
    e.appendChild(o),
    e.appendChild(document.createTextNode("Tab")),
    e
  );
}
async function qo(e) {
  return new Promise((o, t) => {
    let i = { alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==" },
      n = new Image();
    (n.onload = () => {
      let a = n.width > 0 && n.height > 0;
      o(a);
    }),
      (n.onerror = () => {
        t();
      }),
      (n.src = "data:image/webp;base64," + i[e]);
  });
}
async function No(e) {
  return new Promise((o, t) => {
    let i = new Image();
    (i.onload = () => {
      o(Oe(i));
    }),
      (i.onerror = (n) => {
        t(n);
      }),
      (i.src = e);
  });
}
function Oe(e) {
  let o = document.createElement("canvas");
  return (
    (o.width = 32),
    (o.height = 32),
    o.getContext("2d").drawImage(e, 0, 0, 32, 32),
    o.toDataURL("image/png").replace(/^data:image\/png;base64,/, "")
  );
}
let $e, Ee, ae;
setTimeout(async () => {
  try {
    await h.corePing();
  } catch (o) {
    console.log(o),
      m(document.getElementById("contentAreaDiv"), "div", {
        style: { padding: "40px" },
        children: {
          Yi: m(void 0, "div", {
            children: {
              a: m(void 0, "span", { textContent: l("oneTabRestartRequired") + " " }),
              b: m(void 0, "a", {
                style: { cursor: "pointer", textDecoration: "underline" },
                onclick: () => chrome.runtime.reload(),
                textContent: l("clickHereToContinue")
              })
            }
          }),
          Zi: m(void 0, "div", { l: m(void 0, "div", { style: { paddingTop: "20px" }, textContent: l("mayNeedToRestartBrowser") }).o })
        }
      }),
      document.getElementById("loadingSpinner").remove();
    return;
  }
  if (!(await h.Pa((await chrome.tabs.getCurrent()).id))) {
    ae = (await chrome.permissions.getAll()).permissions.includes("favicon");
    try {
      ae && ($e = await No(ze("http://example.com")));
    } catch (o) {
      console.log(o);
    }
    (Ee = await qo("alpha")), await Uo(), await _e(), await Co(), Wo(), await qe();
  }
}, 1);
let J = !1;
const G = new to();
let K;
const Ve = 11;
function re() {
  K && (K.style.display = "none"), (K = void 0);
}
function Re(e) {
  let o = Array.from(document.getElementsByClassName("tabGroup")).filter((t) => {
    let i = Array.from(t.getElementsByClassName("tabLink")).map((n) => n.href);
    return i.length > 0 && i[0] === e;
  });
  if (o.length === 0) throw new Error("No matching tab group");
  if (o.length > 1) throw new Error("More than one matching tab group");
  return o;
}
function Wo() {
  chrome.runtime.onMessage.addListener((e, o, t) => {
    let i = !0;
    try {
      if (e.type === "ping")
        (async () => (
          await ee(1e4, "waiting for tab groups to appear in onetab", () => !!document.getElementById("tabGroupsDiv")), t({ pong: !0 })
        ))();
      else if (e.type === "testExtFavIconLoad") {
        let n = document.createElement("img");
        (n.style.borderStyle = "none"),
          (n.style.width = "16px"),
          (n.style.height = "16px"),
          (n.onload = () => {
            t({ success: !0 });
          }),
          (n.onerror = () => {
            t({ success: !1 });
          }),
          (n.src = Me("example.com"));
      } else if (e.type === "getVisibleStructure")
        (async () => (
          await ee(1e4, "waiting for tab groups to appear in onetab", () => !!document.getElementById("tabGroupsDiv")),
          t({
            Ia: Ae(document.getElementById("headerText").textContent),
            tabGroups: Array.from(document.getElementsByClassName("tabGroup")).map((n) => ({
              Wa: Ae(n.getElementsByClassName("tabCount")[0].textContent),
              Xi: n.getElementsByClassName("tabGroupTitleText")[0].textContent,
              le: n.getElementsByClassName("starImg")[0].style.display !== "none",
              locked: n.getElementsByClassName("lockImg")[0].style.display !== "none",
              cn: n.getElementsByClassName("tabGroupImg")[0].style.display !== "none",
              tabs: Array.from(n.getElementsByClassName("tabLink")).map((a) => a.href)
            }))
          })
        ))();
      else if (e.type === "clickTab")
        (async () => {
          let n;
          try {
            await ee(
              1e4,
              "waiting for tab link to appear",
              () => (n = Array.from(document.getElementsByClassName("tabLink")).find((a) => a.href === e.url))
            ),
              n.onclick(new MouseEvent("click", e.wt)),
              t();
          } catch (a) {
            t({ error: String(a) });
          }
        })();
      else if (e.type === "clickTabGroupButton") {
        let a = Re(e.ut)[0].getElementsByClassName(e.ht)[0];
        J = !0;
        let r = e.Oe ? e.Oe : "click";
        a.dispatchEvent(new MouseEvent(r, e.wt ? e.wt : {})), (J = !1), t();
      } else if (e.type === "getTabGroupElementDisplayed") {
        let a = Re(e.ut)[0].getElementsByClassName(e.jt)[0];
        t({ Jt: a.style.display !== "none" });
      } else i = !1;
    } catch (n) {
      t({ error: String(n) });
    }
    return i;
  });
}
async function Co() {
  await new _o().Vi();
}
class _o {
  async Vi() {
    (this.Co = []),
      (this.si = (o, t) => {
        this.Co.push({ La: o, undo: t });
      }),
      Je(({ La: o, undo: t }) => {
        this.si(o, t);
      }),
      (this.uo = await xo()),
      await this.Ri(),
      this.qi(),
      document.addEventListener(
        "mousedown",
        () => {
          re();
        },
        !1
      );
  }
  async Ri() {
    let o = await h.getState(),
      t = m(document.getElementById("contentAreaDiv"), void 0, {
        style: { paddingTop: "0px", paddingBottom: "30px", paddingLeft: "0px" },
        children: { mn: oo(), q: eo("") }
      }),
      i = t.o,
      n = t.q,
      a = o.tabGroups,
      r = document.createElement("div");
    r.id = "tabGroupsDiv";
    let c = new Map(),
      u = () =>
        Array.from(c.values())
          .map((s) => s.ao.size)
          .reduce((s, b) => s + b, 0);
    a.forEach((s) => {
      let b = new Q(s, this.uo);
      r.appendChild(b.div), c.set(s.id, b);
    });
    let f = m(i, "div", {
        style: { paddingTop: "30px", [`padding${x()}`]: "30px", width: "500px", display: "none" },
        textContent: l("emptyOneTabInfoMsg")
      }).o,
      p = (s) => {
        (n.textContent = Eo(s)), (f.style.display = s === 0 ? "block" : "none");
      };
    p(u());
    let y = (s, b) => {
      if (s.type === "createTabGroup") {
        if (b) {
          let d = c.get(s.tabGroupId);
          c.delete(s.tabGroupId), d.div.remove();
        } else {
          let d = new Q(s.tabGroup, this.uo);
          L(d.div, r, s.index), c.set(s.tabGroupId, d), me("tabGroupView.scrollIntoView", 50, () => d.div.scrollIntoView());
        }
        p(u());
      } else if (s.type === "createTabs") {
        let d = c.get(s.tabGroupId);
        b
          ? s.newTabsMeta.forEach((g) => d.Lo(g.id))
          : (d.Ui(s.newTabsMeta), me("tabGroupView.scrollIntoView", 50, () => d.div.scrollIntoView())),
          d.wo(),
          p(u());
      } else if (s.type === "deleteTabs") {
        let d = c.get(s.tabGroupId);
        b ? s.tabsMetaDeleted.forEach((g, w) => d.Wo(g, s.tabIndicesDeleted[w])) : s.tabMetaIds.forEach((g) => d.Lo(g)), d.wo(), p(u());
      } else if (s.type === "deleteTabGroup") {
        if (b) {
          let d = new Q(s.tabGroup, this.uo);
          L(d.div, r, s.index), c.set(s.deletedTabGroup.id, d);
        } else {
          let d = c.get(s.tabGroupId);
          c.delete(s.tabGroupId), d.div.remove();
        }
        p(u());
      } else if (s.type === "updateTabGroup") {
        let d = b ? "old" : "new",
          g = s.propChanges,
          w = c.get(s.tabGroupId);
        g.label && w.Do.Go(g.label[d], !1, !0),
          g.starred && w.Bi(g.starred[d]),
          g.locked && w.Eo(g.locked[d]),
          g.index && w.Ei(g.index[d]),
          g.groupType && w.ji(g.groupType[d]);
      } else if (s.type === "reorderTab") c.get(s.tabGroupId).Oi(s.tabMetaId, s[b ? "oldIndex" : "newIndex"]);
      else if (s.type === "moveTabBetweenTabGroups") {
        if (b && s.deletedSourceTabGroup) {
          let g = new Q(s.deletedSourceTabGroup, this.uo);
          L(g.div, r, s.sourceTabGroupIndex), c.set(g.eo, g);
        }
        let d = c.get(s.targetTabGroupId);
        if (b) d.Lo(s.tabMetaId);
        else {
          let g = c.get(s.sourceTabGroupId),
            w = g.$i(s.tabMetaId),
            Z = { url: w.url, title: w.title, pinned: w.pinned, id: w.ho };
          g.Lo(s.tabMetaId),
            d.Wo(Z, s.targetTabGroupTabIndex),
            s.deletedSourceTabGroup ? (c.delete(s.deletedSourceTabGroup.id), g.div.remove()) : g.wo();
        }
        d.wo();
      }
    };
    for (i.appendChild(r), document.getElementById("loadingSpinner").remove(); this.Co.length > 0; ) {
      let s = this.Co.shift();
      y(s.La, s.undo);
    }
    this.si = y;
  }
  qi() {
    let o = 12.25;
    m(document.getElementById("settingsDiv"), void 0, {
      style: {
        position: "absolute",
        top: "9px",
        [`${Ze()}`]: "0px",
        paddingTop: "10px",
        paddingBottom: "10px",
        [`padding${x()}`]: "20px",
        [`padding${A()}`]: "20px",
        backgroundColor: "var(--bg-color)"
      },
      children: {
        ln: m(void 0, "div", {
          l: j(m(void 0, "div", { l: Ro(l("bringAllTabsIntoOneTab")) }).o, 14, () => {
            (async () => await h.Vt(void 0))();
          })
        }),
        un: m(void 0, "div", {
          l: j(l("shareAllAsWebPage"), o, (t) => {
            (async () => {
              t.textContent = l("pleaseWaitTripleDot");
              let i = [],
                a = (await h.getState()).tabGroups;
              a || (a = []);
              for (let r of a) r.createDate || (r.createDate = new Date().getTime());
              for (let r of a) for (let c of r.tabsMeta) i.push(c);
              i.length === 0 ? alert(l("noTabsInOneTabYet")) : (await h.Ua(void 0, !0), (t.textContent = l("shareAllAsWebPage")));
            })();
          })
        }),
        dn: m(void 0, "div", {
          l: j(l("exportImportUrls"), o, () => {
            h.kt("import-export.html");
          })
        }),
        options: m(void 0, "div", {
          l: j(l("options"), o, () => {
            h.kt("options.html");
          })
        }),
        pn: m(void 0, "div", {
          l: j(l("about") + " / " + l("feedback"), o, () => {
            h.Je(ue, !1, !0);
          })
        })
      }
    });
  }
}
let se = {};
function me(e, o, t, i) {
  i ? (delete se[e], t()) : se[e] || ((se[e] = !0), setTimeout(() => me(e, o, t, !0), o));
}
async function qe() {
  Lo() && (await Po().put("aliveIndicator", +new Date()), setTimeout(qe, 1e4));
}
