// Copyright 2023 OneTab Ltd.  All rights reserved.
const H = !1,
  $ = !1,
  W = !1,
  k = !1,
  z = !1,
  V = !1,
  q = !0,
  J = "chrome://",
  K = "chrome://newtab/";
async function f() {
  return new Promise((e, t) => {
    document.readyState === "complete"
      ? e()
      : document.addEventListener("readystatechange", (n) => {
          document.readyState === "complete" && e();
        });
  });
}
async function Q() {
  await b(), await f(), setHtmlTagLanguageDirection();
}
async function b() {
  try {
    await chrome.tabs.update((await chrome.tabs.getCurrent()).id, { autoDiscardable: !1 });
  } catch (e) {
    console.log(e);
  }
}
function X(e) {
  if ((typeof e == "string" && (e = document.getElementById(e)), !!e)) for (; e.childNodes.length > 0; ) e.childNodes[0].remove();
}
function Y(e) {
  return v(void 0, "div", { style: { fontSize: "1px", height: e + "px", width: "1px" } }).o;
}
let d = !1;
async function S(e, t = {}) {
  if (!d) {
    const r = async () => {
      if ((await chrome.runtime.sendMessage({ args: [], type: "corePing", L: !0 }))?.result?.pong !== String(currentVersion))
        throw new Error("core version mismatch");
    };
    try {
      await r();
    } catch (o) {
      if (o.message === "core version mismatch") throw o;
      console.log(o), console.log("core not ready. retrying..."), await u(1e3);
      try {
        await r();
      } catch (i) {
        console.log(i), console.log("core not ready. retrying..."), await u(5e3);
        try {
          await r();
        } catch (a) {
          throw (console.log(a), new Error("Cannot connect to core"));
        }
      }
    }
    d = !0;
  }
  (t.type = e), (t.L = !0);
  let n = await chrome.runtime.sendMessage(t);
  if (n === null) throw new Error("null message response from core");
  if (n?.P) throw new Error(n.P);
  return n.result;
}
function Z(e) {
  chrome.runtime.onMessage.addListener((t, n, r) => {
    t.type === "stateChange" && e(t.U);
  });
}
const ee = new Proxy(
    {},
    {
      get(e, t) {
        return t;
      }
    }
  ),
  te = new Proxy(
    {},
    {
      get(e, t, n) {
        return (...r) => ((r = l(r, void 0, N)), S(t, { args: r }));
      }
    }
  ),
  w = chrome.runtime.getURL("onetab.html"),
  h = w.substring(0, w.length - "onetab.html".length);
let m = !0;
async function ne() {
  return m ? (await chrome.permissions.getAll()).permissions.includes("tabGroups") && chrome.tabGroups : !1;
}
async function re() {
  if (!m || requestTabGroupsPermissionIfNecessaryDisabled) return !1;
  try {
    return await chrome.permissions.request({ permissions: ["tabGroups"] });
  } catch (e) {
    return console.log('chrome.permissions.request for "tabGroups" permission failed with error:'), console.log(e), !1;
  }
}
function oe(e) {
  let t = y(e);
  return t.toLowerCase().startsWith("www.") ? t.substring("www.".length) : t;
}
function y(e) {
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
function ae(e) {
  return e.indexOf("://") === -1 ? "https://" : ((e = e.substring(0, e.indexOf("://") + "://".length)), e.toLowerCase());
}
let x = ["com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl"];
function ie(e) {
  let t = y(e);
  try {
    for (let n in x) {
      let r = "." + x[n];
      if (F(t, r)) {
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
function P(e) {
  e.noCacheRandom = C();
}
function C() {
  return new Date().getTime() + Math.round(Math.random() * 1e4) + "";
}
async function se(e, t) {
  P(t);
  let n = JSON.stringify(t);
  return await (await E(e, n)).json();
}
async function E(e, t) {
  let n = {};
  t ? ((n.method = "POST"), (n.body = t)) : (n.method = "GET"), (n.headers = new Headers()), n.headers.append("Content-Type", "text/json");
  let r = await fetch(e, n);
  if (r.status === 200) return r;
  throw new Error("http response code" + r.status);
}
function ce() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    let t = (Math.random() * 16) | 0;
    return (e == "x" ? t : (t & 3) | 8).toString(16);
  });
}
const T = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
function U(e, t) {
  let n = T,
    r = [],
    o = 0;
  for (t = t || n.length, e = e || 22, o = 0; o < e; o++) r[o] = n[0 | (Math.random() * t)];
  return r.join("");
}
function I() {
  return U();
}
function ue() {
  return I();
}
function le(e) {
  return e == null ? "" : e.replace(/^\s+/, "").replace(/\s+$/, "");
}
function fe(...e) {
  return (t, n) => e.reduce((r, o) => r || o(t, n), 0);
}
function de(e) {
  return (t, n) => e(t) - e(n);
}
function we(e) {
  return (t, n) => e(n) - e(t);
}
const he = (e, t) => !!t.starred - !!e.starred || (e.starred && t.starred && t.starredDate - e.starredDate) || t.createDate - e.createDate;
function me(e) {
  return e || (e = ""), e.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}
function F(e, t) {
  return e ? e.indexOf(t, e.length - t.length) !== -1 : !1;
}
const D = {
  restoreWindow: "newWindow",
  pinnedTabs: "ignore",
  startupLaunch: "displayOneTab",
  restoreRemoval: "default",
  duplicates: "allow",
  pinned: "true"
};
function ye(e, t) {
  return t[e] ? t[e] : D[e];
}
function xe(e, t, n) {
  e.parentNode && e.remove(),
    t.insertBefore(e, n === void 0 || n >= t.children.length || t.children.length === 0 ? null : t.children[Math.max(0, n)]);
}
function v(e, t, n) {
  let r = t === void 0 ? e : document.createElement(t),
    o = {};
  if (n) {
    n.style && Object.assign(r.style, n.style);
    for (let a of Object.keys(n)) a !== "style" && a !== "children" && (r[a] = n[a]);
    if (n.children) for (const [a, s] of Object.entries(n.children)) (o[a] = s), r.appendChild(s instanceof HTMLElement ? s : s.o);
    n.l && r.appendChild(n.l), n.init && n.init(r);
  }
  t !== void 0 && e && e.appendChild(r);
  let i = { o: r };
  return Object.assign(i, o), i;
}
const g = "about:reader?url=";
function ge(e) {
  return e
    ? e.indexOf(":") === -1
      ? "https://" + e
      : e.indexOf(g) === 0
      ? decodeURIComponent(e.substring(g.length))
      : e.startsWith(`${h}placeholder.html?`)
      ? new URLSearchParams(e.substring(e.indexOf("?"))).get("url")
      : e
    : "";
}
function pe(e) {
  return parseInt(e.match(/\d+/)[0]);
}
const p = [...new Array(30)].map((e, t) => parseInt(10 + Math.pow(1.6, t)));
function* R(e) {
  let t = 0;
  for (; p.slice(0, t).reduce((n, r) => n + r, 0) < e; ) yield p[t++];
}
async function be(e, t, n) {
  let r = 0;
  for (let o of R(e)) {
    if (await n(r)) return;
    await u(o), (r += o);
  }
  throw new Error(`Timeout waiting for condition ${t}`);
}
function A(e) {
  let t = chrome.i18n.getMessage(e);
  return t || (console.log("No translation available for: " + e), e);
}
function Se(e, t, n) {
  return t && ((e || "").toLowerCase().startsWith("file:") || M(e))
    ? n
      ? `data:text/html, <html><body><div id="placeholderUrl">${e}</div></body></html>`
      : `${h}placeholder.html?url=${encodeURI(e)}`
    : e;
}
async function Pe() {
  try {
    return globalForcePlaceholdersEnabled || !1 || !(await chrome.extension.isAllowedFileSchemeAccess());
  } catch (e) {
    return console.log(e), !0;
  }
}
function M(e) {
  for (let t of j) if (e.startsWith(t)) return !0;
  return !!(!e || e === "" || e.startsWith("chrome-devtools:"));
}
const j = [
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
async function u(e) {
  return new Promise((t) => setTimeout(t, e));
}
class L {
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
const G = new L();
function c() {
  return G;
}
const N = "undefined-34LKmiHxP3Mu48u8qrDaHf";
function l(e, t, n) {
  return Array.isArray(e)
    ? e.map((r) => l(r, t, n))
    : typeof e == "object" && e !== null
    ? Object.fromEntries(Object.entries(e).map(([r, o]) => [r, l(o, t, n)]))
    : e === t
    ? n
    : e;
}
const Ce = "c",
  Ee = "e",
  Te = "tg";
class O {
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
class B {
  async put(t, n) {
    await c().put("sessionStore", { ...(await this.getAll()), [t]: n });
  }
  async get(t) {
    return (await this.getAll())[t];
  }
  async getAll() {
    return (await c().get("sessionStore")) ?? {};
  }
  async remove(t) {
    let n = await this.getAll();
    delete n[t], await c().put("sessionStore", n);
  }
  async clearAll() {
    await c().remove("sessionStore");
  }
}
const _ = chrome.storage.session ? new O() : new B();
function Ue() {
  return _;
}
function Ie() {
  return navigator.userAgent.includes(" Edg/");
}
async function Fe(e) {
  let [t] = await chrome.tabs.query({ windowId: e.windowId, active: !0 });
  t && t.id !== e.id
    ? (await chrome.tabs.update(e.id, { active: !0 }), await chrome.tabs.update(t.id, { active: !0 }))
    : console.log("No active tab found");
}
(async () => (await f(), [...document.querySelectorAll("[data-m]")].forEach((e) => (e.textContent = A(e.dataset.m)))))();
