// Copyright 2023 OneTab Ltd.  All rights reserved.
const U = "1.84",
  se = !1,
  ce = !1,
  ue = !1,
  le = !1,
  fe = !1,
  de = !1,
  we = !0,
  he = "chrome://",
  ge = "chrome://newtab/",
  pe = "https://www.one-tab.com",
  me = !1,
  xe = !1,
  ye = !1;
async function h() {
  return new Promise((e, t) => {
    document.readyState === "complete"
      ? e()
      : document.addEventListener("readystatechange", (n) => {
          document.readyState === "complete" && e();
        });
  });
}
function be(e) {
  return l(void 0, "div", {
    id: "headerText",
    style: {
      paddingTop: "40px",
      paddingBottom: "20px",
      [`padding${oe()}`]: "240px",
      fontSize: "16px",
      color: "var(--text-color-weak)",
      fontWeight: "300",
      borderBottom: "1px dashed var(--dash-color)",
      marginBottom: "10px"
    },
    textContent: e
  }).o;
}
function F(e, t, n) {
  return l(void 0, "picture", {
    style: { ...e },
    ...t,
    children: {
      S: l(void 0, "source", { srcset: n(!0), media: "(prefers-color-scheme: light)" }),
      C: l(void 0, "source", { srcset: n(!1), media: "(prefers-color-scheme: dark)" }),
      v: l(void 0, "img", { style: { width: "100%", height: "100%" } })
    }
  }).o;
}
function Le() {
  return F(
    { width: 416 / 2 + "px", height: 114 / 2 + "px", position: "absolute", top: "16px", [`${ie()}`]: "19px" },
    {},
    (e) => `images/top-left-logo-${e ? "light" : "dark"}${s() ? "" : "-rtl"}.png`
  );
}
function Pe(e, t, n) {
  let r = document.createElement("div"),
    o = document.createElement("div");
  T(o, "30px"), (o.style.position = "relative");
  let i = document.createElement("img");
  (i.src = e ? "images/twister-open.png" : "images/twister-closed" + (s() ? "" : "-rtl") + ".png"),
    (i.style.width = 48 / 2 + "px"),
    (i.style.height = 50 / 2 + "px"),
    (i.style.position = "absolute"),
    ae(i, "0px"),
    (i.style.top = "0px"),
    (o.textContent = t),
    (o.style.fontSize = "16px"),
    (o.style.cursor = "pointer"),
    r.appendChild(o),
    o.appendChild(i);
  let a = document.createElement("div");
  T(a, "30px"),
    (a.style.paddingTop = "10px"),
    a.appendChild(n.o),
    (a.style.display = e ? "block" : "none"),
    r.appendChild(a),
    (o.onclick = () => {
      (e = !e),
        (i.src = e ? "images/twister-open.png" : "images/twister-closed" + (s() ? "" : "-rtl") + ".png"),
        (a.style.display = e ? "block" : "none");
    });
  let u = { I: n.o };
  return Object.assign(u, n), (u.o = r), u;
}
function Se(e, t, n, r) {
  let o = document.createElement("div");
  (o.style.fontSize = t + "px"), (o.className = "clickable");
  let i = document.createElement("span");
  if (r) {
    let a = document.createElement("span");
    (a.textContent = v("newExclamation") + " "), i.appendChild(a);
  }
  return (
    typeof e == "string" ? i.appendChild(document.createTextNode(e)) : i.appendChild(e),
    (i.style.verticalAlign = "middle"),
    (i.onclick = (a) => {
      n(i);
    }),
    o.appendChild(i),
    o
  );
}
const x = chrome.runtime.getURL("onetab.html"),
  y = x.substring(0, x.length - "onetab.html".length);
let b = !0;
async function Ce() {
  return b ? (await chrome.permissions.getAll()).permissions.includes("tabGroups") && chrome.tabGroups : !1;
}
async function ve() {
  if (!b) return !1;
  try {
    return await chrome.permissions.request({ permissions: ["tabGroups"] });
  } catch (e) {
    return console.log('chrome.permissions.request for "tabGroups" permission failed with error:'), console.log(e), !1;
  }
}
function Ee(e) {
  let t = L(e);
  return t.toLowerCase().startsWith("www.") ? t.substring("www.".length) : t;
}
function L(e) {
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
function Ie(e) {
  return e.indexOf("://") === -1 ? "https://" : ((e = e.substring(0, e.indexOf("://") + "://".length)), e.toLowerCase());
}
let P = ["com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl"];
function De(e) {
  let t = L(e);
  try {
    for (let n in P) {
      let r = "." + P[n];
      if ($(t, r)) {
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
function R(e) {
  e.noCacheRandom = k();
}
function k() {
  return new Date().getTime() + Math.round(Math.random() * 1e4) + "";
}
async function Me(e, t) {
  R(t);
  let n = JSON.stringify(t);
  return await (await A(e, n)).json();
}
async function A(e, t) {
  let n = {};
  t ? ((n.method = "POST"), (n.body = t)) : (n.method = "GET"), (n.headers = new Headers()), n.headers.append("Content-Type", "text/json");
  let r = await fetch(e, n);
  if (r.status === 200) return r;
  throw new Error("http response code" + r.status);
}
function Te() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    let t = (Math.random() * 16) | 0;
    return (e == "x" ? t : (t & 3) | 8).toString(16);
  });
}
const G = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
function j(e, t) {
  let n = G,
    r = [],
    o = 0;
  for (t = t || n.length, e = e || 22, o = 0; o < e; o++) r[o] = n[0 | (Math.random() * t)];
  return r.join("");
}
function B() {
  return j();
}
function Ue() {
  return B();
}
function Fe(e) {
  return e == null ? "" : e.replace(/^\s+/, "").replace(/\s+$/, "");
}
function Re(...e) {
  return (t, n) => e.reduce((r, o) => r || o(t, n), 0);
}
function ke(e) {
  return (t, n) => e(t) - e(n);
}
function Ae(e) {
  return (t, n) => e(n) - e(t);
}
const Ge = (e, t) => !!t.starred - !!e.starred || (e.starred && t.starred && t.starredDate - e.starredDate) || t.createDate - e.createDate;
function je(e) {
  return e || (e = ""), e.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}
function $(e, t) {
  return e ? e.indexOf(t, e.length - t.length) !== -1 : !1;
}
const N = {
  restoreWindow: "newWindow",
  pinnedTabs: "ignore",
  startupLaunch: "displayOneTab",
  restoreRemoval: "default",
  duplicates: "allow",
  pinned: "true"
};
function Be(e, t) {
  return t[e] ? t[e] : N[e];
}
function $e(e, t, n) {
  e.parentNode && e.remove(),
    t.insertBefore(e, n === void 0 || n >= t.children.length || t.children.length === 0 ? null : t.children[Math.max(0, n)]);
}
function l(e, t, n) {
  let r = t === void 0 ? e : document.createElement(t),
    o = {};
  if (n) {
    n.style && Object.assign(r.style, n.style);
    for (let a of Object.keys(n)) a !== "style" && a !== "children" && (r[a] = n[a]);
    if (n.children) for (const [a, u] of Object.entries(n.children)) (o[a] = u), r.appendChild(u instanceof HTMLElement ? u : u.o);
    n.l && r.appendChild(n.l), n.init && n.init(r);
  }
  t !== void 0 && e && e.appendChild(r);
  let i = { o: r };
  return Object.assign(i, o), i;
}
const S = "about:reader?url=";
function Ne(e) {
  return e
    ? e.indexOf(":") === -1
      ? "https://" + e
      : e.indexOf(S) === 0
      ? decodeURIComponent(e.substring(S.length))
      : e.startsWith(`${y}placeholder.html?`)
      ? new URLSearchParams(e.substring(e.indexOf("?"))).get("url")
      : e
    : "";
}
function Oe(e) {
  return parseInt(e.match(/\d+/)[0]);
}
const C = [...new Array(30)].map((e, t) => parseInt(10 + Math.pow(1.6, t)));
function* O(e) {
  let t = 0;
  for (; C.slice(0, t).reduce((n, r) => n + r, 0) < e; ) yield C[t++];
}
async function He(e, t, n) {
  let r = 0;
  for (let o of O(e)) {
    if (await n(r)) return;
    await g(o), (r += o);
  }
  throw new Error(`Timeout waiting for condition ${t}`);
}
function v(e) {
  let t = chrome.i18n.getMessage(e);
  return t || (console.log("No translation available for: " + e), e);
}
function _e(e, t, n) {
  return t && ((e || "").toLowerCase().startsWith("file:") || H(e))
    ? n
      ? `data:text/html, <html><body><div id="placeholderUrl">${e}</div></body></html>`
      : `${y}placeholder.html?url=${encodeURI(e)}`
    : e;
}
async function We() {
  try {
    return !(await chrome.extension.isAllowedFileSchemeAccess());
  } catch (e) {
    return console.log(e), !0;
  }
}
function H(e) {
  for (let t of _) if (e.startsWith(t)) return !0;
  return !!(!e || e === "" || e.startsWith("chrome-devtools:"));
}
const _ = [
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
async function g(e) {
  return new Promise((t) => setTimeout(t, e));
}
class W {
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
const z = new W();
function f() {
  return z;
}
const V = "undefined-34LKmiHxP3Mu48u8qrDaHf";
function p(e, t, n) {
  return Array.isArray(e)
    ? e.map((r) => p(r, t, n))
    : typeof e == "object" && e !== null
    ? Object.fromEntries(Object.entries(e).map(([r, o]) => [r, p(o, t, n)]))
    : e === t
    ? n
    : e;
}
const ze = "c",
  Ve = "e",
  qe = "tg";
class q {
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
class J {
  async put(t, n) {
    await f().put("sessionStore", { ...(await this.getAll()), [t]: n });
  }
  async get(t) {
    return (await this.getAll())[t];
  }
  async getAll() {
    return (await f().get("sessionStore")) ?? {};
  }
  async remove(t) {
    let n = await this.getAll();
    delete n[t], await f().put("sessionStore", n);
  }
  async clearAll() {
    await f().remove("sessionStore");
  }
}
const K = chrome.storage.session ? new q() : new J();
function Je() {
  return K;
}
function Ke() {
  return navigator.userAgent.includes(" Edg/");
}
async function Xe(e) {
  let [t] = await chrome.tabs.query({ windowId: e.windowId, active: !0 });
  t && t.id !== e.id
    ? (await chrome.tabs.update(e.id, { active: !0 }), await chrome.tabs.update(t.id, { active: !0 }))
    : console.log("No active tab found");
}
class w {
  constructor(t, n) {
    (this.x = t), (this.y = n);
  }
  h(t) {
    return new w(this.x - t.x, this.y - t.y);
  }
}
class E {
  constructor(t, n, r, o) {
    (this.g = t), (this.type = n), (this.listener = r), (this.p = o);
  }
  remove() {
    this.g.removeEventListener(this.type, this.listener, this.p);
  }
}
function Ye(e, t) {
  e.onmousemove = (n) => {
    t(new c(e, n));
  };
}
function Qe(e, t) {
  e.onmousedown = (n) => {
    t(new c(e, n));
  };
}
function Ze(e, t) {
  e.onmouseover = (n) => {
    t(new c(e, n));
  };
}
function et(e, t) {
  e.onmouseup = (n) => {
    t(new c(e, n));
  };
}
function tt(e, t) {
  e.onmouseout = (n) => {
    t(new c(e, n));
  };
}
function nt(e, t) {
  e.onclick = (n) => {
    t(new c(e, n));
  };
}
function rt(e, t) {
  e.ondblclick = (n) => {
    t(new c(e, n));
  };
}
function ot(e, t) {
  d(e, "click", t);
}
function it(e, t) {
  d(e, "dblclick", t);
}
function at(e, t) {
  return d(e, "mouseover", t);
}
function st(e, t) {
  return d(e, "mouseup", t);
}
function ct(e, t) {
  let n;
  return (
    (n = (r) => {
      let o, i;
      (o = r.currentTarget), (i = r.relatedTarget), o === e && o !== i && !m(o, i) && t(new c(e, r));
    }),
    e.addEventListener("mouseout", n, !1),
    new E(e, "mouseout", n, !1)
  );
}
function ut(e, t) {
  e.onmouseout = (n) => {
    let r, o;
    (r = n.currentTarget), (o = n.relatedTarget), r === e && r !== o && !m(r, o) && t(new c(e, n));
  };
}
function lt(e, t) {
  for (let n of e) n.onmouseout = X(n, e, t);
}
function X(e, t, n) {
  return (r) => {
    let o, i;
    if (((o = r.currentTarget), (i = r.relatedTarget), o === e && o !== i && !m(o, i))) {
      for (let a of t) if (i === a) return;
      n(new c(e, r));
    }
  };
}
function m(e, t) {
  try {
    if (!t) return !1;
    for (; t.parentNode; ) if ((t = t.parentNode) === e) return !0;
    return !1;
  } catch {
    return !1;
  }
}
class c {
  constructor(t, n) {
    (this.element = t), (this.event = n), (this.i = null), (this.u = null);
  }
  m() {
    if (this.i === null) {
      let t = Y(this.element);
      (this.i = t.x), (this.u = t.y);
    }
    return this.i;
  }
  D() {
    return this.i === null && this.m(), this.u;
  }
}
function d(e, t, n) {
  let r = (o) => {
    let i = new c(e, o);
    n(i);
  };
  return e.addEventListener(t, r, !1), new E(e, t, r, !1);
}
function ft(e) {
  return I(e);
}
function Y(e, t) {
  return I(t).h(Q(e));
}
function I(e) {
  let t, n;
  return (t = e.clientX + window.scrollX), (n = e.clientY + window.scrollY), new w(t, n);
}
function Q(e) {
  let t = e,
    n = 0,
    r = 0;
  for (;;) {
    let o = t.offsetParent;
    if (o === null) break;
    (n += t.offsetLeft), (r += t.offsetTop), (t = o);
  }
  return new w(n, r);
}
function dt() {
  return window.scrollY;
}
function wt() {
  return window.scrollX;
}
async function ht() {
  await Z(), await h(), re();
}
async function Z() {
  try {
    await chrome.tabs.update((await chrome.tabs.getCurrent()).id, { autoDiscardable: !1 });
  } catch (e) {
    console.log(e);
  }
}
function gt(e) {
  if ((typeof e == "string" && (e = document.getElementById(e)), !!e)) for (; e.childNodes.length > 0; ) e.childNodes[0].remove();
}
function pt(e) {
  return l(void 0, "div", { style: { fontSize: "1px", height: e + "px", width: "1px" } }).o;
}
let D = !1;
async function ee(e, t = {}) {
  if (!D) {
    const r = async () => {
      if ((await chrome.runtime.sendMessage({ args: [], type: "corePing", L: !0 }))?.result?.pong !== String(U))
        throw new Error("core version mismatch");
    };
    try {
      await r();
    } catch (o) {
      if (o.message === "core version mismatch") throw o;
      console.log(o), console.log("core not ready. retrying..."), await g(1e3);
      try {
        await r();
      } catch (i) {
        console.log(i), console.log("core not ready. retrying..."), await g(5e3);
        try {
          await r();
        } catch (a) {
          throw (console.log(a), new Error("Cannot connect to core"));
        }
      }
    }
    D = !0;
  }
  (t.type = e), (t.L = !0);
  let n = await chrome.runtime.sendMessage(t);
  if (n === null) throw new Error("null message response from core");
  if (n?.P) throw new Error(n.P);
  return n.result;
}
function mt(e) {
  chrome.runtime.onMessage.addListener((t, n, r) => {
    t.type === "stateChange" && e(t.U);
  });
}
const xt = new Proxy(
    {},
    {
      get(e, t) {
        return t;
      }
    }
  ),
  yt = new Proxy(
    {},
    {
      get(e, t, n) {
        return (...r) => ((r = p(r, void 0, V)), ee(t, { args: r }));
      }
    }
  );
let te = navigator.language || navigator.userLanguage;
function ne() {
  let e = ["ar", "he", "fa", "ps", "ur"],
    t = te.split("-", 1)[0];
  return e.indexOf(t) >= 0 ? "rtl" : "ltr";
}
let M = ne();
function s() {
  return M !== "rtl";
}
function re() {
  document.getElementsByTagName("html")[0].dir = M;
}
function oe() {
  return s() ? "Left" : "Right";
}
function bt() {
  return s() ? "Right" : "Left";
}
function ie() {
  return s() ? "left" : "right";
}
function Lt() {
  return s() ? "right" : "left";
}
function ae(e, t) {
  s() ? (e.style.left = t) : (e.style.right = t);
}
function Pt(e, t) {
  s() ? (e.style.right = t) : (e.style.left = t);
}
function T(e, t) {
  s() ? (e.style.paddingLeft = t) : (e.style.paddingRight = t);
}
function St(e, t) {
  s() ? (e.style.paddingRight = t) : (e.style.paddingLeft = t);
}
function Ct(e, t) {
  s() ? (e.style.marginLeft = t) : (e.style.marginRight = t);
}
(async () => {
  await h();
  const e = document.getElementById("copyButton");
  let n = new URLSearchParams(window.location.search).get("url"),
    r = document.getElementById("urlInput");
  r.value = n;
  let o = decodeURIComponent(n);
  ["/", "\\"].forEach((i) => {
    o.includes(i) && (o = o.substring(o.lastIndexOf(i) + 1));
  }),
    (document.title = o),
    (document.getElementById("filename").textContent = o),
    (e.onclick = (i) => {
      r.select(), navigator.clipboard.writeText(r.value);
    });
})(),
  (async () => (await h(), [...document.querySelectorAll("[data-m]")].forEach((e) => (e.textContent = v(e.dataset.m)))))();
