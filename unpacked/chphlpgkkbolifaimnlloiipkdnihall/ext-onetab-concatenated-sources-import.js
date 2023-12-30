// Copyright 2023 OneTab Ltd.  All rights reserved.
const V = "1.84",
  Ue = !1,
  Me = !1,
  Fe = !1,
  ke = !1,
  Re = !1,
  Ae = !1,
  Ge = !0,
  Ne = "chrome://",
  $e = "chrome://newtab/",
  Be = "https://www.one-tab.com",
  He = !1,
  _e = !1,
  We = !1;
async function j() {
  return new Promise((e, t) => {
    document.readyState === "complete"
      ? e()
      : document.addEventListener("readystatechange", (n) => {
          document.readyState === "complete" && e();
        });
  });
}
function q(e) {
  return a(void 0, "div", {
    id: "headerText",
    style: {
      paddingTop: "40px",
      paddingBottom: "20px",
      [`padding${O()}`]: "240px",
      fontSize: "16px",
      color: "var(--text-color-weak)",
      fontWeight: "300",
      borderBottom: "1px dashed var(--dash-color)",
      marginBottom: "10px"
    },
    textContent: e
  }).o;
}
function J(e, t, n) {
  return a(void 0, "picture", {
    style: { ...e },
    ...t,
    children: {
      S: a(void 0, "source", { srcset: n(!0), media: "(prefers-color-scheme: light)" }),
      C: a(void 0, "source", { srcset: n(!1), media: "(prefers-color-scheme: dark)" }),
      v: a(void 0, "img", { style: { width: "100%", height: "100%" } })
    }
  }).o;
}
function K() {
  return J(
    { width: 416 / 2 + "px", height: 114 / 2 + "px", position: "absolute", top: "16px", [`${ve()}`]: "19px" },
    {},
    (e) => `images/top-left-logo-${e ? "light" : "dark"}${c() ? "" : "-rtl"}.png`
  );
}
function U(e, t, n) {
  let r = document.createElement("div"),
    o = document.createElement("div");
  z(o, "30px"), (o.style.position = "relative");
  let i = document.createElement("img");
  (i.src = e ? "images/twister-open.png" : "images/twister-closed" + (c() ? "" : "-rtl") + ".png"),
    (i.style.width = 48 / 2 + "px"),
    (i.style.height = 50 / 2 + "px"),
    (i.style.position = "absolute"),
    De(i, "0px"),
    (i.style.top = "0px"),
    (o.textContent = t),
    (o.style.fontSize = "16px"),
    (o.style.cursor = "pointer"),
    r.appendChild(o),
    o.appendChild(i);
  let s = document.createElement("div");
  z(s, "30px"),
    (s.style.paddingTop = "10px"),
    s.appendChild(n.o),
    (s.style.display = e ? "block" : "none"),
    r.appendChild(s),
    (o.onclick = () => {
      (e = !e),
        (i.src = e ? "images/twister-open.png" : "images/twister-closed" + (c() ? "" : "-rtl") + ".png"),
        (s.style.display = e ? "block" : "none");
    });
  let l = { I: n.o };
  return Object.assign(l, n), (l.o = r), l;
}
function Q(e, t, n, r) {
  let o = document.createElement("div");
  (o.style.fontSize = t + "px"), (o.className = "clickable");
  let i = document.createElement("span");
  if (r) {
    let s = document.createElement("span");
    (s.textContent = f("newExclamation") + " "), i.appendChild(s);
  }
  return (
    typeof e == "string" ? i.appendChild(document.createTextNode(e)) : i.appendChild(e),
    (i.style.verticalAlign = "middle"),
    (i.onclick = (s) => {
      n(i);
    }),
    o.appendChild(i),
    o
  );
}
const M = chrome.runtime.getURL("onetab.html"),
  F = M.substring(0, M.length - "onetab.html".length);
let k = !0;
async function Oe() {
  return k ? (await chrome.permissions.getAll()).permissions.includes("tabGroups") && chrome.tabGroups : !1;
}
async function ze() {
  if (!k) return !1;
  try {
    return await chrome.permissions.request({ permissions: ["tabGroups"] });
  } catch (e) {
    return console.log('chrome.permissions.request for "tabGroups" permission failed with error:'), console.log(e), !1;
  }
}
function Ve(e) {
  let t = T(e);
  return t.toLowerCase().startsWith("www.") ? t.substring("www.".length) : t;
}
function T(e) {
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
function je(e) {
  return e.indexOf("://") === -1 ? "https://" : ((e = e.substring(0, e.indexOf("://") + "://".length)), e.toLowerCase());
}
let R = ["com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl"];
function qe(e) {
  let t = T(e);
  try {
    for (let n in R) {
      let r = "." + R[n];
      if (oe(t, r)) {
        for (t = t.substring(0, t.length - r.length); t.indexOf(".") !== -1; ) t = t.substring(t.indexOf(".") + 1);
        t = t + r;
        break;
      }
    }
    return t.indexOf("www.") === 0 && (t = t.substring("www.".length)), t;
  } catch {
    return t;
  }
}
function Z(e) {
  e.noCacheRandom = X();
}
function X() {
  return new Date().getTime() + Math.round(Math.random() * 1e4) + "";
}
async function Je(e, t) {
  Z(t);
  let n = JSON.stringify(t);
  return await (await Y(e, n)).json();
}
async function Y(e, t) {
  let n = {};
  t ? ((n.method = "POST"), (n.body = t)) : (n.method = "GET"), (n.headers = new Headers()), n.headers.append("Content-Type", "text/json");
  let r = await fetch(e, n);
  if (r.status === 200) return r;
  throw new Error("http response code" + r.status);
}
function Ke() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    let t = (Math.random() * 16) | 0;
    return (e == "x" ? t : (t & 3) | 8).toString(16);
  });
}
const ee = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
function te(e, t) {
  let n = ee,
    r = [],
    o = 0;
  for (t = t || n.length, e = e || 22, o = 0; o < e; o++) r[o] = n[0 | (Math.random() * t)];
  return r.join("");
}
function ne() {
  return te();
}
function Qe() {
  return ne();
}
function Ze(e) {
  return e == null ? "" : e.replace(/^\s+/, "").replace(/\s+$/, "");
}
function Xe(...e) {
  return (t, n) => e.reduce((r, o) => r || o(t, n), 0);
}
function Ye(e) {
  return (t, n) => e(t) - e(n);
}
function et(e) {
  return (t, n) => e(n) - e(t);
}
const tt = (e, t) => !!t.starred - !!e.starred || (e.starred && t.starred && t.starredDate - e.starredDate) || t.createDate - e.createDate;
function re(e) {
  return e || (e = ""), e.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}
function oe(e, t) {
  return e ? e.indexOf(t, e.length - t.length) !== -1 : !1;
}
const ie = {
  restoreWindow: "newWindow",
  pinnedTabs: "ignore",
  startupLaunch: "displayOneTab",
  restoreRemoval: "default",
  duplicates: "allow",
  pinned: "true"
};
function nt(e, t) {
  return t[e] ? t[e] : ie[e];
}
function rt(e, t, n) {
  e.parentNode && e.remove(),
    t.insertBefore(e, n === void 0 || n >= t.children.length || t.children.length === 0 ? null : t.children[Math.max(0, n)]);
}
function a(e, t, n) {
  let r = t === void 0 ? e : document.createElement(t),
    o = {};
  if (n) {
    n.style && Object.assign(r.style, n.style);
    for (let s of Object.keys(n)) s !== "style" && s !== "children" && (r[s] = n[s]);
    if (n.children) for (const [s, l] of Object.entries(n.children)) (o[s] = l), r.appendChild(l instanceof HTMLElement ? l : l.o);
    n.l && r.appendChild(n.l), n.init && n.init(r);
  }
  t !== void 0 && e && e.appendChild(r);
  let i = { o: r };
  return Object.assign(i, o), i;
}
const A = "about:reader?url=";
function se(e) {
  return e
    ? e.indexOf(":") === -1
      ? "https://" + e
      : e.indexOf(A) === 0
      ? decodeURIComponent(e.substring(A.length))
      : e.startsWith(`${F}placeholder.html?`)
      ? new URLSearchParams(e.substring(e.indexOf("?"))).get("url")
      : e
    : "";
}
function ot(e) {
  return parseInt(e.match(/\d+/)[0]);
}
const G = [...new Array(30)].map((e, t) => parseInt(10 + Math.pow(1.6, t)));
function* ae(e) {
  let t = 0;
  for (; G.slice(0, t).reduce((n, r) => n + r, 0) < e; ) yield G[t++];
}
async function it(e, t, n) {
  let r = 0;
  for (let o of ae(e)) {
    if (await n(r)) return;
    await S(o), (r += o);
  }
  throw new Error(`Timeout waiting for condition ${t}`);
}
function f(e) {
  let t = chrome.i18n.getMessage(e);
  return t || (console.log("No translation available for: " + e), e);
}
function st(e, t, n) {
  return t && ((e || "").toLowerCase().startsWith("file:") || ce(e))
    ? n
      ? `data:text/html, <html><body><div id="placeholderUrl">${e}</div></body></html>`
      : `${F}placeholder.html?url=${encodeURI(e)}`
    : e;
}
async function at() {
  try {
    return !(await chrome.extension.isAllowedFileSchemeAccess());
  } catch (e) {
    return console.log(e), !0;
  }
}
function ce(e) {
  for (let t of ue) if (e.startsWith(t)) return !0;
  return !!(!e || e === "" || e.startsWith("chrome-devtools:"));
}
const ue = [
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
      ].map((t) => `${e}${t}/`)
    )
    .flat()
];
async function S(e) {
  return new Promise((t) => setTimeout(t, e));
}
class le {
  async put(t, n) {
    await chrome.storage.local.set({ [t]: n });
  }
  async get(t) {
    return (await chrome.storage.local.get([t]))[t];
  }
  async remove(t) {
    return await chrome.storage.local.remove(t);
  }
}
const fe = new le();
function x() {
  return fe;
}
const de = "undefined-34LKmiHxP3Mu48u8qrDaHf";
function v(e, t, n) {
  return Array.isArray(e)
    ? e.map((r) => v(r, t, n))
    : typeof e == "object" && e !== null
    ? Object.fromEntries(Object.entries(e).map(([r, o]) => [r, v(o, t, n)]))
    : e === t
    ? n
    : e;
}
const ct = "c",
  ut = "e",
  lt = "tg";
class we {
  async put(t, n) {
    await chrome.storage.session.set({ [t]: n });
  }
  async get(t) {
    return (await chrome.storage.session.get([t]))[t];
  }
  async getAll() {
    return await chrome.storage.session.get(null);
  }
  async remove(t) {
    return await chrome.storage.session.remove(t);
  }
  async clearAll() {
    await chrome.storage.session.clear();
  }
}
class he {
  async put(t, n) {
    await x().put("sessionStore", { ...(await this.getAll()), [t]: n });
  }
  async get(t) {
    return (await this.getAll())[t];
  }
  async getAll() {
    return (await x().get("sessionStore")) ?? {};
  }
  async remove(t) {
    let n = await this.getAll();
    delete n[t], await x().put("sessionStore", n);
  }
  async clearAll() {
    await x().remove("sessionStore");
  }
}
const pe = chrome.storage.session ? new we() : new he();
function ft() {
  return pe;
}
function dt() {
  return navigator.userAgent.includes(" Edg/");
}
async function wt(e) {
  let [t] = await chrome.tabs.query({ windowId: e.windowId, active: !0 });
  t && t.id !== e.id
    ? (await chrome.tabs.update(e.id, { active: !0 }), await chrome.tabs.update(t.id, { active: !0 }))
    : console.log("No active tab found");
}
let h,
  p,
  N,
  D,
  $,
  d,
  w,
  m,
  y,
  I = "ontouchstart" in window;
function ht({ event: e, element: t, B: n, H: r, _: o, W: i }) {
  if (((h = t), (p = n), (N = r), (D = o), ($ = i), (m = 0), (y = 0), I && e instanceof TouchEvent)) {
    if (e.touches.length > 1) return;
    (d = e.touches.item(0).pageX),
      (w = e.touches.item(0).pageY),
      document.addEventListener("touchmove", b, !1),
      document.addEventListener("touchend", g, !1),
      e.preventDefault();
  } else
    (d = e.clientX + window.scrollX),
      (w = e.clientY + window.scrollY),
      document.addEventListener("mousemove", b, !1),
      document.addEventListener("mouseup", g, !1),
      e.preventDefault();
  N({ F: h, k: p, A: d, G: w });
}
function b(e) {
  let t, n, r, o;
  if (I && e instanceof TouchEvent) {
    if (e.touches.length > 1) return (r = 0), (o = 0), D({ F: h, k: p, dx: r, dy: o, A: d, G: w, pageX: t, pageY: n }), g(e);
    (t = e.touches.item(0).pageX), (n = e.touches.item(0).pageY);
  } else (t = e.clientX + window.scrollX), (n = e.clientY + window.scrollY);
  (r = t - d), (o = n - w);
  let i = !1;
  (m !== r || y !== o) && (i = !0),
    (m = r),
    (y = o),
    i && D({ F: h, k: p, dx: r, dy: o, A: d, G: w, pageX: t, pageY: n }),
    e.preventDefault();
}
function g(e) {
  I && e instanceof TouchEvent
    ? (document.removeEventListener("touchmove", b, !1), document.removeEventListener("touchend", g, !1))
    : (document.removeEventListener("mousemove", b, !1), document.removeEventListener("mouseup", g, !1)),
    $({ F: h, k: p, O: m, V: y, A: d, G: w });
}
class P {
  constructor(t, n) {
    (this.x = t), (this.y = n);
  }
  h(t) {
    return new P(this.x - t.x, this.y - t.y);
  }
}
class B {
  constructor(t, n, r, o) {
    (this.g = t), (this.type = n), (this.listener = r), (this.p = o);
  }
  remove() {
    this.g.removeEventListener(this.type, this.listener, this.p);
  }
}
function pt(e, t) {
  e.onmousemove = (n) => {
    t(new u(e, n));
  };
}
function gt(e, t) {
  e.onmousedown = (n) => {
    t(new u(e, n));
  };
}
function xt(e, t) {
  e.onmouseover = (n) => {
    t(new u(e, n));
  };
}
function mt(e, t) {
  e.onmouseup = (n) => {
    t(new u(e, n));
  };
}
function yt(e, t) {
  e.onmouseout = (n) => {
    t(new u(e, n));
  };
}
function bt(e, t) {
  e.onclick = (n) => {
    t(new u(e, n));
  };
}
function Lt(e, t) {
  e.ondblclick = (n) => {
    t(new u(e, n));
  };
}
function Ct(e, t) {
  L(e, "click", t);
}
function Pt(e, t) {
  L(e, "dblclick", t);
}
function Tt(e, t) {
  return L(e, "mouseover", t);
}
function St(e, t) {
  return L(e, "mouseup", t);
}
function vt(e, t) {
  let n;
  return (
    (n = (r) => {
      let o, i;
      (o = r.currentTarget), (i = r.relatedTarget), o === e && o !== i && !E(o, i) && t(new u(e, r));
    }),
    e.addEventListener("mouseout", n, !1),
    new B(e, "mouseout", n, !1)
  );
}
function Dt(e, t) {
  e.onmouseout = (n) => {
    let r, o;
    (r = n.currentTarget), (o = n.relatedTarget), r === e && r !== o && !E(r, o) && t(new u(e, n));
  };
}
function It(e, t) {
  for (let n of e) n.onmouseout = ge(n, e, t);
}
function ge(e, t, n) {
  return (r) => {
    let o, i;
    if (((o = r.currentTarget), (i = r.relatedTarget), o === e && o !== i && !E(o, i))) {
      for (let s of t) if (i === s) return;
      n(new u(e, r));
    }
  };
}
function E(e, t) {
  try {
    if (!t) return !1;
    for (; t.parentNode; ) if ((t = t.parentNode) === e) return !0;
    return !1;
  } catch {
    return !1;
  }
}
class u {
  constructor(t, n) {
    (this.element = t), (this.event = n), (this.i = null), (this.u = null);
  }
  m() {
    if (this.i === null) {
      let t = xe(this.element);
      (this.i = t.x), (this.u = t.y);
    }
    return this.i;
  }
  D() {
    return this.i === null && this.m(), this.u;
  }
}
function L(e, t, n) {
  let r = (o) => {
    let i = new u(e, o);
    n(i);
  };
  return e.addEventListener(t, r, !1), new B(e, t, r, !1);
}
function Et(e) {
  return H(e);
}
function xe(e, t) {
  return H(t).h(me(e));
}
function H(e) {
  let t, n;
  return (t = e.clientX + window.scrollX), (n = e.clientY + window.scrollY), new P(t, n);
}
function me(e) {
  let t = e,
    n = 0,
    r = 0;
  for (;;) {
    let o = t.offsetParent;
    if (o === null) break;
    (n += t.offsetLeft), (r += t.offsetTop), (t = o);
  }
  return new P(n, r);
}
function Ut() {
  return window.scrollY;
}
function Mt() {
  return window.scrollX;
}
async function ye() {
  await be(), await j(), Se();
}
async function be() {
  try {
    await chrome.tabs.update((await chrome.tabs.getCurrent()).id, { autoDiscardable: !1 });
  } catch (e) {
    console.log(e);
  }
}
function Ft(e) {
  if ((typeof e == "string" && (e = document.getElementById(e)), !!e)) for (; e.childNodes.length > 0; ) e.childNodes[0].remove();
}
function Le(e) {
  return a(void 0, "div", { style: { fontSize: "1px", height: e + "px", width: "1px" } }).o;
}
let _ = !1;
async function Ce(e, t = {}) {
  if (!_) {
    const r = async () => {
      if ((await chrome.runtime.sendMessage({ args: [], type: "corePing", L: !0 }))?.result?.pong !== String(V))
        throw new Error("core version mismatch");
    };
    try {
      await r();
    } catch (o) {
      if (o.message === "core version mismatch") throw o;
      console.log(o), console.log("core not ready. retrying..."), await S(1e3);
      try {
        await r();
      } catch (i) {
        console.log(i), console.log("core not ready. retrying..."), await S(5e3);
        try {
          await r();
        } catch (s) {
          throw (console.log(s), new Error("Cannot connect to core"));
        }
      }
    }
    _ = !0;
  }
  (t.type = e), (t.L = !0);
  let n = await chrome.runtime.sendMessage(t);
  if (n === null) throw new Error("null message response from core");
  if (n?.P) throw new Error(n.P);
  return n.result;
}
function kt(e) {
  chrome.runtime.onMessage.addListener((t, n, r) => {
    t.type === "stateChange" && e(t.U);
  });
}
const Rt = new Proxy(
    {},
    {
      get(e, t) {
        return t;
      }
    }
  ),
  C = new Proxy(
    {},
    {
      get(e, t, n) {
        return (...r) => ((r = v(r, void 0, de)), Ce(t, { args: r }));
      }
    }
  );
let Pe = navigator.language || navigator.userLanguage;
function Te() {
  let e = ["ar", "he", "fa", "ps", "ur"],
    t = Pe.split("-", 1)[0];
  return e.indexOf(t) >= 0 ? "rtl" : "ltr";
}
let W = Te();
function c() {
  return W !== "rtl";
}
function Se() {
  document.getElementsByTagName("html")[0].dir = W;
}
function O() {
  return c() ? "Left" : "Right";
}
function At() {
  return c() ? "Right" : "Left";
}
function ve() {
  return c() ? "left" : "right";
}
function Gt() {
  return c() ? "right" : "left";
}
function De(e, t) {
  c() ? (e.style.left = t) : (e.style.right = t);
}
function Nt(e, t) {
  c() ? (e.style.right = t) : (e.style.left = t);
}
function z(e, t) {
  c() ? (e.style.paddingLeft = t) : (e.style.paddingRight = t);
}
function $t(e, t) {
  c() ? (e.style.paddingRight = t) : (e.style.paddingLeft = t);
}
function Bt(e, t) {
  c() ? (e.style.marginLeft = t) : (e.style.marginRight = t);
}
setTimeout(async () => {
  await ye(), await Ie();
}, 1);
async function Ie() {
  let e = await C.getState();
  Ee(e);
}
function Ee() {
  let { content: e } = a(document.getElementById("contentAreaDiv"), void 0, {
    style: { paddingTop: "0px", paddingLeft: "0px", paddingBottom: "30px" },
    children: {
      j: K(),
      q: q(f("import") + " / " + f("export")),
      content: a(void 0, "div", {
        style: { paddingTop: "14px", ["padding" + O()]: "36px" },
        children: {
          N: U(
            !1,
            f("importUrls"),
            a(void 0, "div", {
              style: {},
              children: {
                info: a(void 0, "div", { style: { paddingBottom: "10px" }, textContent: f("pasteInUrlsInstructions") }),
                $: a(void 0, "textArea", { style: { width: "800px", height: "200px" } }),
                J: Q(f("import"), 16, () => {
                  (async () => (await C.K(e.N.$.o.value), await C.Z(), setTimeout(() => window.close(), 100)))();
                })
              }
            })
          ),
          X: Le(16),
          Y: U(
            !0,
            f("exportUrls"),
            a(void 0, "div", {
              style: { paddingBottom: "30px" },
              children: {
                ee: a(void 0, "div", { style: { paddingBottom: "10px" }, textContent: f("exportThenImportNote") }),
                te: a(void 0, "textArea", {
                  style: { width: "800px", height: "500px" },
                  init: (t) => {
                    (async () => {
                      let r = (await C.getState()).tabGroups;
                      r || (r = []),
                        (t.value = r.map((o) =>
                          o.tabsMeta
                            .map((i) => {
                              let s = i.url;
                              return (
                                T(se(i.url)) !== i.title && (s += " | " + re(i.title)),
                                s +
                                  `
`
                              );
                            })
                            .join("")
                        ).join(`
`));
                    })();
                  }
                })
              }
            })
          )
        }
      })
    }
  });
}
