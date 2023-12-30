// Copyright 2023 OneTab Ltd.  All rights reserved.
const ut = "1.84",
  Ge = !1,
  Ie = !1,
  We = !1,
  Ae = !1,
  Oe = !1,
  Ce = !1,
  Ee = !0,
  ct = "chrome://",
  m = "chrome://newtab/",
  Gt = "https://www.one-tab.com",
  Pe = !1,
  ke = !1,
  Fe = !1,
  c = chrome.runtime.getURL("onetab.html"),
  N = c.substring(0, c.length - "onetab.html".length);
let dt = !0;
async function _() {
  return dt ? (await chrome.permissions.getAll()).permissions.includes("tabGroups") && chrome.tabGroups : !1;
}
async function It() {
  if (!dt) return !1;
  try {
    return await chrome.permissions.request({ permissions: ["tabGroups"] });
  } catch (s) {
    return console.log('chrome.permissions.request for "tabGroups" permission failed with error:'), console.log(s), !1;
  }
}
function De(s) {
  let t = $(s);
  return t.toLowerCase().startsWith("www.") ? t.substring("www.".length) : t;
}
function $(s) {
  return s
    ? (s.indexOf("//") === 0 && (s = "http:" + s),
      s.indexOf("://") === -1 && (s = "http://" + s),
      (s = s.substring(s.indexOf("://") + "://".length)),
      s.indexOf("/") !== -1 && (s = s.substring(0, s.indexOf("/"))),
      s.indexOf(":") !== -1 && (s = s.substring(0, s.indexOf(":"))),
      s.indexOf("?") !== -1 && (s = s.substring(0, s.indexOf("?"))),
      s.indexOf("#") !== -1 && (s = s.substring(0, s.indexOf("#"))),
      s.toLowerCase())
    : "undefined";
}
function Re(s) {
  return s.indexOf("://") === -1 ? "https://" : ((s = s.substring(0, s.indexOf("://") + "://".length)), s.toLowerCase());
}
let Wt = ["com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl"];
function Be(s) {
  let t = $(s);
  try {
    for (let e in Wt) {
      let a = "." + Wt[e];
      if (zt(t, a)) {
        for (t = t.substring(0, t.length - a.length); t.indexOf(".") !== -1; ) t = t.substring(t.indexOf(".") + 1);
        t = t + a;
        break;
      }
    }
    return t.indexOf("www.") === 0 && (t = t.substring("www.".length)), t;
  } catch {
    return t;
  }
}
function $t(s) {
  s.noCacheRandom = jt();
}
function jt() {
  return new Date().getTime() + Math.round(Math.random() * 1e4) + "";
}
async function Jt(s, t) {
  $t(t);
  let e = JSON.stringify(t);
  return await (await Ht(s, e)).json();
}
async function Ht(s, t) {
  let e = {};
  t ? ((e.method = "POST"), (e.body = t)) : (e.method = "GET"), (e.headers = new Headers()), e.headers.append("Content-Type", "text/json");
  let a = await fetch(s, e);
  if (a.status === 200) return a;
  throw new Error("http response code" + a.status);
}
function qt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s) => {
    let t = (Math.random() * 16) | 0;
    return (s == "x" ? t : (t & 3) | 8).toString(16);
  });
}
const Vt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
function X(s, t) {
  let e = Vt,
    a = [],
    i = 0;
  for (t = t || e.length, s = s || 22, i = 0; i < s; i++) a[i] = e[0 | (Math.random() * t)];
  return a.join("");
}
function F() {
  return X();
}
function ht() {
  return F();
}
function ve(s) {
  return s == null ? "" : s.replace(/^\s+/, "").replace(/\s+$/, "");
}
function Kt(...s) {
  return (t, e) => s.reduce((a, i) => a || i(t, e), 0);
}
function Le(s) {
  return (t, e) => s(t) - s(e);
}
function bt(s) {
  return (t, e) => s(e) - s(t);
}
const ft = (s, t) => !!t.starred - !!s.starred || (s.starred && t.starred && t.starredDate - s.starredDate) || t.createDate - s.createDate;
function Z(s) {
  return s || (s = ""), s.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}
function zt(s, t) {
  return s ? s.indexOf(t, s.length - t.length) !== -1 : !1;
}
const Qt = {
  restoreWindow: "newWindow",
  pinnedTabs: "ignore",
  startupLaunch: "displayOneTab",
  restoreRemoval: "default",
  duplicates: "allow",
  pinned: "true"
};
function P(s, t) {
  return t[s] ? t[s] : Qt[s];
}
function Ue(s, t, e) {
  s.parentNode && s.remove(),
    t.insertBefore(s, e === void 0 || e >= t.children.length || t.children.length === 0 ? null : t.children[Math.max(0, e)]);
}
function Ne(s, t, e) {
  let a = t === void 0 ? s : document.createElement(t),
    i = {};
  if (e) {
    e.style && Object.assign(a.style, e.style);
    for (let o of Object.keys(e)) o !== "style" && o !== "children" && (a[o] = e[o]);
    if (e.children) for (const [o, l] of Object.entries(e.children)) (i[o] = l), a.appendChild(l instanceof HTMLElement ? l : l.o);
    e.l && a.appendChild(e.l), e.init && e.init(a);
  }
  t !== void 0 && s && s.appendChild(a);
  let n = { o: a };
  return Object.assign(n, i), n;
}
const At = "about:reader?url=";
function W(s) {
  return s
    ? s.indexOf(":") === -1
      ? "https://" + s
      : s.indexOf(At) === 0
      ? decodeURIComponent(s.substring(At.length))
      : s.startsWith(`${N}placeholder.html?`)
      ? new URLSearchParams(s.substring(s.indexOf("?"))).get("url")
      : s
    : "";
}
function $e(s) {
  return parseInt(s.match(/\d+/)[0]);
}
const Ot = [...new Array(30)].map((s, t) => parseInt(10 + Math.pow(1.6, t)));
function* Tt(s) {
  let t = 0;
  for (; Ot.slice(0, t).reduce((e, a) => e + a, 0) < s; ) yield Ot[t++];
}
async function Ct(s, t, e) {
  let a = 0;
  for (let i of Tt(s)) {
    if (await e(a)) return;
    await d(i), (a += i);
  }
  throw new Error(`Timeout waiting for condition ${t}`);
}
function g(s) {
  let t = chrome.i18n.getMessage(s);
  return t || (console.log("No translation available for: " + s), s);
}
function V(s, t, e) {
  return t && ((s || "").toLowerCase().startsWith("file:") || et(s))
    ? e
      ? `data:text/html, <html><body><div id="placeholderUrl">${s}</div></body></html>`
      : `${N}placeholder.html?url=${encodeURI(s)}`
    : s;
}
async function tt() {
  try {
    return !(await chrome.extension.isAllowedFileSchemeAccess());
  } catch (s) {
    return console.log(s), !0;
  }
}
function et(s) {
  for (let t of Yt) if (s.startsWith(t)) return !0;
  return !!(!s || s === "" || s.startsWith("chrome-devtools:"));
}
const Yt = [
  "javascript:",
  "about:",
  ...["chrome://", "edge://", "data:"].filter((s) => !1),
  ...["edge://", "chrome://"]
    .map((s) =>
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
      ].map((t) => `${s}${t}/`)
    )
    .flat()
];
async function d(s) {
  return new Promise((t) => setTimeout(t, s));
}
class _t {
  async put(t, e) {
    await chrome.storage.local.set({ [t]: e });
  }
  async get(t) {
    return (await chrome.storage.local.get([t]))[t];
  }
  async remove(t) {
    return await chrome.storage.local.remove(t);
  }
}
const Xt = new _t();
function M() {
  return Xt;
}
const Zt = "undefined-34LKmiHxP3Mu48u8qrDaHf";
function pt(s, t, e) {
  return Array.isArray(s)
    ? s.map((a) => pt(a, t, e))
    : typeof s == "object" && s !== null
    ? Object.fromEntries(Object.entries(s).map(([a, i]) => [a, pt(i, t, e)]))
    : s === t
    ? e
    : s;
}
const O = "c",
  x = "e",
  D = "tg";
class te {
  async put(t, e) {
    await chrome.storage.session.set({ [t]: e });
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
class ee {
  async put(t, e) {
    await M().put("sessionStore", { ...(await this.getAll()), [t]: e });
  }
  async get(t) {
    return (await this.getAll())[t];
  }
  async getAll() {
    return (await M().get("sessionStore")) ?? {};
  }
  async remove(t) {
    let e = await this.getAll();
    delete e[t], await M().put("sessionStore", e);
  }
  async clearAll() {
    await M().remove("sessionStore");
  }
}
const ae = chrome.storage.session ? new te() : new ee();
function C() {
  return ae;
}
function Et() {
  return navigator.userAgent.includes(" Edg/");
}
async function Pt(s) {
  let [t] = await chrome.tabs.query({ windowId: s.windowId, active: !0 });
  t && t.id !== s.id
    ? (await chrome.tabs.update(s.id, { active: !0 }), await chrome.tabs.update(t.id, { active: !0 }))
    : console.log("No active tab found");
}
class at {
  constructor(t = {}) {
    (this.xt = []), (this.locked = !1), (this.debug = !1), (this.It = t);
  }
  async Ct() {
    if ((this.debug && console.log(`lock ${this.It.label}: begin acquire attempt, queue len: ${this.xt.length}`), this.locked)) {
      if ((this.debug && console.log(`lock ${this.It.label}: waiting to acquire, queue len: ${this.xt.length}`), this.It.Ea))
        for (
          this.debug && this.xt.length > 0 && console.log(`lock ${this.It.label}: rejecting ${this.xt.length} queuers`);
          this.xt.length > 0;

        )
          this.xt.shift().resolve(!1);
      let t = await new Promise((e, a) => {
        this.xt.push({ resolve: e, reject: a });
      });
      return (
        this.debug &&
          (t
            ? console.log(`lock ${this.It.label}: acquired after waiting, queue len: ${this.xt.length}`)
            : console.log(`lock ${this.It.label}: acquisition rejected`)),
        t
      );
    } else return (this.locked = !0), this.debug && console.log(`lock ${this.It.label}: acquired, queue len: ${this.xt.length}`), !0;
  }
  release() {
    this.debug && console.log(`lock ${this.It.label}: begin release, queue len: ${this.xt.length}`),
      this.xt.length === 0
        ? (this.locked = !1)
        : (this.xt.shift().resolve(!0),
          this.debug && console.log(`lock ${this.It.label}: waiting thread notified. queue len: ${this.xt.length}`)),
      this.debug && console.log(`lock ${this.It.label}: released. queue len: ${this.xt.length}`);
  }
}
class v {
  static ue = 6e4;
  static getKey(t) {
    return `sessionStoreLock-${t}`;
  }
  static async Pe(t) {
    let e = await C().get(v.getKey(t)),
      a = new Date().getTime();
    return (
      e && a - e > v.ue && (console.log(`Warning: timed out sessionStore lock for id ${t}`), await v.release(t)), !!(e && a - e < v.ue)
    );
  }
  static async Ct(t) {
    return (await this.Pe(t)) ? !1 : (await C().put(v.getKey(t), new Date().getTime()), !0);
  }
  static async release(t) {
    await C().remove(v.getKey(t));
  }
}
class L {
  constructor() {
    (this.ke = []),
      (this.ce = new at({ label: "openOneTabOnStartLock" })),
      (this.de = new at({ label: "duplicateCheck" })),
      (this.he = new at({ label: "stateLock" })),
      (this.Et = new at({ label: "settingsLock" }));
  }
  async corePing() {
    return { pong: String(ut) };
  }
  async Fe() {
    await this.Et.Ct();
    try {
      let t = await M().get("extensionKey");
      return t || ((t = qt()), await M().put("extensionKey", t)), t;
    } finally {
      this.Et.release();
    }
  }
  async Vt(t) {
    let e = await it(!1);
    for (let a = 0; a < e.length; a++) await this.Dt({ Rt: e[a], Bt: !0, vt: t, Z: a === 0 });
  }
  async kt(t) {
    let e = de(t),
      a = !0;
    if (!1)
      try {
      } catch (l) {}
    let i = await S(),
      n = i.filter((l) => [l.url, l.pendingUrl].some((w) => w === e)),
      o = n.length > 0 ? n[0] : void 0;
    n.length > 1 && n.filter((l) => l !== o).forEach((l) => A(l)),
      o ? (a && re(o), (o = i.find((l) => [l.url, l.pendingUrl].some((w) => w === e))), await B(o)) : await st(e, !1, !0);
  }
  async be(t, e) {
    let a = await tt(),
      i = await _(),
      n = i && t.groupType === "tabGroup",
      o = t.tabsMeta.filter((y) => !et(y.url)),
      l = await this.getSettings(),
      w = P("restoreWindow", l);
    e === "currentWindow" && (w = "currentWindow"), e === "newWindow" && (w = "newWindow");
    let h = (await j()).tabs.filter((y) => !(y.pinned || G(y.url) || ie(y.url))).length,
      b = [],
      p;
    if (w === "currentWindow" || (w === "newWindow" && e !== "newWindow" && h === 0)) {
      p = await J(!1);
      for (const [y, f] of o.entries()) {
        let T = { active: !1, url: V(f.url, a) };
        p !== void 0 && (T.windowId = p.id), (T.pinned = !n && !!f.pinned);
        try {
          let E = await R(T);
          b.push(E);
        } catch (E) {
          console.log(E);
        }
      }
    } else {
      let { Kt: y, zt: f } = await mt(o.map((T) => ({ ...T, pinned: !n && T.pinned })));
      (p = y), b.push(...f);
    }
    if (n) {
      let y = await chrome.tabs.group({ createProperties: { windowId: p.id }, tabIds: b.map((T) => T.id) }),
        f = {};
      t.color && (f.color = t.color),
        t.label && (f.title = t.label),
        Object.keys(f).length > 0 && i && (await chrome.tabGroups.update(y, f));
    }
    await this.De();
  }
  async K(t) {
    let e = await this.getState(),
      a = t.split(`
`),
      i = new Date().getTime(),
      n = () => ({ createDate: i--, tabsMeta: [], id: X() }),
      o = n(),
      l = [];
    for (let h of a)
      if (!h) o.tabsMeta.length > 0 && (l.push(o), (o = n()));
      else {
        let b, p;
        h.indexOf(" | ") !== -1
          ? ((b = W(h.substring(0, h.indexOf(" | ")))), (p = h.substring(h.indexOf(" | ") + " | ".length)))
          : ((b = W(h)), (p = $(b))),
          o.tabsMeta.push({ id: F(), url: b, title: Z(p) });
      }
    o.tabsMeta.length > 0 && l.push(o);
    let w = Math.max(
        0,
        e.tabGroups.findIndex((h) => !h.starred)
      ),
      u = l.map((h, b) => ({ type: "createTabGroup", tabGroupId: h.id, tabGroup: h, index: w + b }));
    for (let h of u) await this.Mt(h);
  }
  async Mt(t, e) {
    await this.he.Ct();
    try {
      let a = await this.getState();
      if (t.type === "createTabGroup")
        e
          ? a.tabGroups.splice(
              a.tabGroups.findIndex((i) => i.id === t.tabGroupId),
              1
            )
          : a.tabGroups.splice(t.index, 0, t.tabGroup);
      else if (t.type === "createTabs") {
        let i = a.tabGroups.find((n) => n.id === t.tabGroupId);
        if (!e) i.tabsMeta.unshift(...t.newTabsMeta);
        else {
          let n = new Set(t.newTabsMeta.map((o) => o.id));
          i.tabsMeta = i.tabsMeta.filter((o) => !n.has(o.id));
        }
      } else if (t.type === "deleteTabs") {
        let i = a.tabGroups.find((n) => n.id === t.tabGroupId);
        if (e) {
          let n = [];
          t.tabsMetaDeleted.forEach((o, l) => n.push([o, t.tabIndicesDeleted[l]])),
            n.sort((o, l) => o[1] - l[1]),
            n.forEach(([o, l]) => i.tabsMeta.splice(l, 0, o));
        } else {
          let n = new Set(t.tabMetaIds);
          i.tabsMeta = i.tabsMeta.filter((o) => !n.has(o.id));
        }
      } else if (t.type === "deleteTabGroup")
        if (e) a.tabGroups.splice(Math.max(0, t.index), 0, t.deletedTabGroup);
        else {
          let i = a.tabGroups.findIndex((n) => n.id === t.tabGroupId);
          a.tabGroups.splice(i, 1);
        }
      else if (t.type === "updateTabGroup") {
        let i = e ? "old" : "new",
          n = e ? "new" : "old",
          o = a.tabGroups,
          l = o.find((u) => u.id === t.tabGroupId),
          w = t.propChanges;
        w.starred && ((l.starred = w.starred[i]), (l.starredDate = w.starredDate[i])),
          w.label && (l.label = w.label[i]),
          w.locked && (l.locked = w.locked[i]),
          w.groupType && (l.groupType = w.groupType[i]),
          w.index && o.splice(w.index[i], 0, ...o.splice(w.index[n], 1));
      } else if (t.type === "reorderTab") {
        let i = a.tabGroups.find((w) => w.id === t.tabGroupId),
          n = i.tabsMeta.findIndex((w) => w.id === t.tabMetaId),
          o = i.tabsMeta[n],
          l = t.newIndex;
        e && ((l = n), (n = t.newIndex)), i.tabsMeta.splice(n, 1), i.tabsMeta.splice(Math.min(l, i.tabsMeta.length), 0, o);
      } else if (t.type === "moveTabBetweenTabGroups") {
        let i = a.tabGroups.findIndex((l) => l.id === t.sourceTabGroupId),
          n = a.tabGroups[i],
          o = a.tabGroups.find((l) => l.id === t.targetTabGroupId);
        if (e) {
          let l = o.tabsMeta.findIndex((u) => u.id === t.tabMetaId),
            w = o.tabsMeta.splice(l, 1)[0];
          t.deletedSourceTabGroup
            ? (a.tabGroups = a.tabGroups.splice(t.sourceTabGroupIndex, 0, t.deletedSourceTabGroup))
            : n.splice(t.sourceTabGroupTabIndex, 0, w);
        } else {
          let l = n.tabsMeta.findIndex((u) => u.id === t.tabMetaId),
            w = n.tabsMeta.splice(l, 1)[0];
          o.tabsMeta.splice(t.targetTabGroupTabIndex, 0, w),
            t.deletedSourceTabGroup && (a.tabGroups = a.tabGroups.filter((u) => u.id !== t.deletedSourceTabGroup.id));
        }
      }
      await this.Lt(a), await this.Re(t, e);
    } finally {
      this.he.release();
    }
  }
  async Be() {
    let t = await this.getState(),
      e = [],
      a = new Date().getTime();
    for (let o = 0; o < 200; o++) {
      let l = { createDate: a--, tabsMeta: [], label: "tab group " + o, id: X() };
      e.push(l);
      for (let w = 0; w < 20; w++)
        l.tabsMeta.push({ id: F(), url: "https://en.wikipedia.org/wiki/" + (20 * o + w), title: "wikipedia " + (20 * o + w) });
    }
    let i = Math.max(
        0,
        t.tabGroups.findIndex((o) => !o.starred)
      ),
      n = e.map((o, l) => ({ type: "createTabGroup", tabGroupId: o.id, tabGroup: o, index: i + l }));
    for (let o of n) await this.Mt(o);
    await this.Z();
  }
  async De() {
    if ((await r.fe())?.pinned) return;
    if ((await this.getState()).tabGroups.map((a) => a.tabsMeta.length).reduce((a, i) => a + i, 0) === 0) {
      let i = (await S()).find((n) => G(n.url));
      i && (await A(i));
    }
  }
  async getSettings() {
    let t = await M().get("settings");
    return t ? JSON.parse(t) : {};
  }
  async ft(t, e) {
    await this.Et.Ct();
    try {
      let a = await this.getSettings();
      (a[t] = e), await this.ie(a);
    } finally {
      this.Et.release();
    }
  }
  async ie(t) {
    await M().put("settings", JSON.stringify(t));
  }
  async ve(t) {
    let e = await this.getSettings();
    return P(t, e);
  }
  async getState() {
    let t = await M().get("state");
    return t ? JSON.parse(t) : {};
  }
  async Lt(t) {
    await this.Te(t);
    let e = await M().get("state"),
      a = e;
    await M().put("state", JSON.stringify(t)), (e = await M().get("state"));
    try {
      JSON.parse(e);
    } catch {
      await M().put("state", a), console.log("Could not store extension state");
    } finally {
    }
  }
  async pe(t, e, a) {
    let i = { id: F(), url: W(t), title: Z(e) };
    await this.ye(i, a);
  }
  async Le(t, e) {
    if (G(t.url)) return;
    let a = { id: F(), url: W(t.url), title: Z(t.title) };
    ["pinned", "incognito"].filter((i) => t[i]).forEach((i) => (a[i] = t[i])), await this.ye(a, e), await A(t);
  }
  async ye(t, e) {
    if (((t = { ...t }), (t.url = W(t.url)), et(t.url))) {
      console.log(`Cannot import tabs of this type: ${t.url}`);
      return;
    }
    let a = await this.getState();
    if (e === void 0) {
      let i = a.tabGroups.find((n) => !n.starred && !n.locked);
      if (i) await this.Mt({ type: "createTabs", tabGroupId: i.id, newTabsMeta: [t] });
      else {
        i = { id: F(), tabsMeta: [t], createDate: new Date().getTime() };
        let n = Math.max(
          0,
          a.tabGroups.findIndex((o) => !o.starred)
        );
        await this.Mt({ type: "createTabGroup", tabGroupId: i.id, tabGroup: i, index: n });
      }
    } else await this.Mt({ type: "createTabs", tabGroupId: e, newTabsMeta: [t] });
  }
  Ft(t, e, a) {
    return (t.pinned && P("pinnedTabs", a) === "ignore") || G(e) || e.indexOf("chrome-devtools://") === 0;
  }
  Ue(t, e, a) {
    return (
      (se(e) && !G(e)) || et(e) || (P("duplicates", a) === "reject" && t.tabGroups.some((i) => i.tabsMeta.some((n) => W(n.url) === e)))
    );
  }
  async Dt({ Rt: t, Bt: e, vt: a, Z: i }) {
    if (!t.length) return;
    const n = Symbol();
    let o = await _(),
      l = o ? await chrome.tabGroups.query({ windowId: t[0].windowId }) : [],
      w = await this.getSettings(),
      u = await this.getState(),
      h = new Set((await S()).map((f) => f.id)),
      b = t.filter((f) => h.has(f.id) && (!e || !this.me(W(f.url), w)));
    b.sort((f, T) => f.index - T.index);
    let p = [],
      y = [];
    for (let f of b) {
      let T = f.url;
      !T && f.pendingUrl && (T = f.pendingUrl);
      let E = W(T);
      if (!this.Ft(f, E, w)) {
        y.push(f);
        let q = p.find((U) => U[n] === f.groupId);
        if (!this.Ue(u, E, w) && !(q?.tabsMeta ?? []).some((U) => U.url === E)) {
          let U = { id: F(), url: E, title: Z(f.title) };
          if ((f.pinned && (U.pinned = !0), !q)) {
            let wt = o && f.groupId !== chrome.tabGroups.TAB_GROUP_ID_NONE && l.find((Nt) => Nt.id === f.groupId);
            (q = {
              [n]: f.groupId,
              id: F(),
              tabsMeta: [],
              createDate: new Date().getTime(),
              ...(wt ? { groupType: "tabGroup", color: wt.color, label: wt.title } : {})
            }),
              p.push(q);
          }
          q.tabsMeta.push(U);
        }
      }
    }
    for (let f of p) delete f[n];
    if (p.length)
      if (a === void 0) {
        let f = Math.max(
            0,
            u.tabGroups.findIndex((E) => !E.starred)
          ),
          T = 0;
        for (let E of p) await this.Mt({ type: "createTabGroup", tabGroupId: E.id, tabGroup: E, index: f + T++ });
      } else {
        let f = p.flatMap((T) => T.tabsMeta);
        await this.Mt({ type: "createTabs", tabGroupId: a, newTabsMeta: f });
      }
    y.length === 0 ? await r.Z(!1, void 0) : await le(y, i);
  }
  me(t, e) {
    return this.Qt($(t), e);
  }
  Qt(t, e) {
    if (e.excludedDomains) {
      for (let a of e.excludedDomains) if (a === t) return !0;
    }
    return !1;
  }
  async xe(t) {
    await this.Et.Ct();
    try {
      let e = await this.getSettings();
      this.Qt(t, e) || (e.excludedDomains || (e.excludedDomains = []), e.excludedDomains.push(t), await this.ie(e));
    } finally {
      this.Et.release();
    }
  }
  async se(t) {
    await this.Et.Ct();
    try {
      let e = await this.getSettings();
      if (!e.excludedDomains) return;
      (e.excludedDomains = e.excludedDomains.filter((a) => a !== t)), await this.ie(e);
    } finally {
      this.Et.release();
    }
  }
  async Te(t) {
    let e = !1;
    return (
      t.tabGroups.forEach((a) => {
        a.tabsMeta && a.tabsMeta.some((i) => !i) && ((a.tabsMeta = a.tabsMeta.filter((i) => i)), (e = !0));
      }),
      t.tabGroups.some((a) => !a.tabsMeta || !a.tabsMeta.length) &&
        ((e = !0), (t.tabGroups = t.tabGroups.filter((a) => a.tabsMeta && a.tabsMeta.length))),
      e && console.log("State fixed"),
      e
    );
  }
  async Ne() {
    (await M().get("installDate")) || (await M().put("installDate", new Date().getTime()));
    let e = await this.getState();
    e.tabGroups || ((e.tabGroups = []), await this.Lt(e)),
      (await this.Te(e)) && (await this.Lt(e)),
      [...e.tabGroups].sort(ft).every((a, i) => a === e.tabGroups[i]) ||
        (console.log("Tabgroups correctly reordered"), e.tabGroups.sort(ft), await this.Lt(e));
  }
  async $e(t) {
    t && (await chrome.windows.get(t))?.incognito && (t = void 0), await this.Z(!1, t);
  }
  async ne(t, e) {
    let { activeTab: a } = await K(e?.windowId);
    await this.Le(a, t);
  }
  async je(t, e, a) {
    let n = t.linkUrl,
      o = t.frameId,
      l = o !== void 0 ? [o] : [],
      w = t.linkTitle;
    if ((w || (w = t.linkText), w)) await this.pe(n, w, a);
    else {
      await chrome.scripting.executeScript({
        target: { tabId: e.id, frameIds: l },
        files: ["ext-onetab-concatenated-sources-contentscript.js"]
      });
      let u = await new Promise((b, p) => {
        chrome.tabs.sendMessage(e.id, { type: "getLinkTitle", url: n }, { frameId: o }, (y) => {
          chrome.runtime.lastError ? p(chrome.runtime.lastError.message) : b(y.title);
        });
      });
      await this.pe(n, u, a);
      let h = "Pbclevtug BarGno Ygq jjj.bar-gno.pbz";
    }
  }
  async Wt(t, e) {
    let { tabs: a, activeTab: i } = await K(e?.windowId),
      n = a.filter((o) => o.groupId === i.groupId);
    if (n.length === 1 && G(i.url)) {
      let o = a.find((l) => l.groupId !== i.groupId);
      o && (n = a.filter((l) => l.groupId === o.groupId));
    }
    await this.Dt({ Rt: n, Bt: !0, vt: t, Z: !0 });
  }
  async ge(t, e) {
    let { tabs: a, activeTab: i } = await K(e?.windowId);
    a = a.filter((o) => o.groupId === i.groupId);
    let n = [];
    if (i) {
      for (let o of a) parseInt(o.index) !== parseInt(i.index) && n.push(o);
      n.length > 0 && (await this.Dt({ Rt: n, Bt: !0, vt: t, Z: !1 }));
    } else console.log("no active tab");
  }
  async Me(t, e) {
    let { tabs: a, activeTab: i } = await K(e?.windowId);
    a = a.filter((o) => o.groupId === i.groupId);
    let n = [];
    if (i) {
      for (let o of a) parseInt(o.index) < parseInt(i.index) && n.push(o);
      n.length > 0 && (await this.Dt({ Rt: n, Bt: !0, vt: t, Z: !1 }));
    }
  }
  async Se(t, e) {
    let { tabs: a, activeTab: i } = await K(e?.windowId);
    a = a.filter((o) => o.groupId === i.groupId);
    let n = [];
    if (i) {
      for (let o of a) parseInt(o.index) > parseInt(i.index) && n.push(o);
      n.length > 0 && (await this.Dt({ Rt: n, Bt: !0, vt: t, Z: !1 }));
    }
  }
  async St() {
    return (await r.ve("pinned")) === "true";
  }
  async Pa(t) {
    await this.de.Ct();
    try {
      if ((await xt(t)) === void 0) return !1;
      let a = (await S()).filter((n) => G(n.url) && n.id !== t),
        i;
      if (((i = a), await Promise.all(i.slice(1).map((n) => yt(n.id))), i.length)) {
        let n = i[0];
        return await B(n), await rt(n.id), await yt(t), !0;
      } else return await rt(t), !1;
    } catch (e) {
      return console.log(e), !1;
    } finally {
      this.de.release();
    }
  }
  async Z(t, e) {
    let a = !t,
      i = await S(),
      n = await J(!1),
      o = i
        .filter((l) => [l.url, l.pendingUrl].some((w) => G(w)))
        .sort(
          Kt(
            bt((l) => l.windowId === e),
            bt((l) => !!l.active),
            ...(n && !n?.incognito ? [bt((l) => l.windowId === n.id)] : [])
          )
        )
        .find(() => !0);
    if (o)
      await Promise.all(i.filter((l) => !(l.pinned && !1) && [l.url, l.pendingUrl].some((w) => G(w)) && l.id !== o.id).map((l) => A(l))),
        a && (await B(o));
    else {
      let l = { url: c, ...((await this.St()) ? { pinned: !0, index: 0 } : {}), active: a },
        w = !1;
      if (e !== void 0) l.windowId = e;
      else {
        let u = n;
        if ((u?.incognito && (u = (await k(!1)).find((h) => !h.incognito)), u)) l.windowId = u.id;
        else {
          w = !0;
          let h = await Dt({});
          if (h?.id) {
            let b = await C().get("lastCreateNewWindowTrigger");
            (b && new Date().getTime() - b < 5e3) ||
              (await C().put("lastCreateNewWindowTrigger", new Date().getTime()), await this.Z(t, h.id));
          }
        }
      }
      w || (await R(l));
    }
  }
  static Ut(t, e, a, i) {
    t[e] = { old: a[e], new: i[e] };
  }
  async ka(t, e) {
    let i = (await this.getState()).tabGroups,
      n = i.find((w) => w.id === t),
      o = {},
      l = !1;
    if (
      (e.hasOwnProperty("starred") && (L.Ut(o, "starred", n, e), L.Ut(o, "starredDate", n, e)),
      e.hasOwnProperty("label") && (L.Ut(o, "label", n, e), (l = !0)),
      e.hasOwnProperty("locked") && L.Ut(o, "locked", n, e),
      e.hasOwnProperty("groupType") && L.Ut(o, "groupType", n, e),
      e.hasOwnProperty("starred"))
    ) {
      (n.starred = e.starred), (n.starredDate = e.starredDate);
      let w = i.findIndex((h) => h.id === t),
        u = [...i].sort(ft).findIndex((h) => h.id === t);
      o.index = { old: w, new: u };
    }
    await this.Mt({ type: "updateTabGroup", tabGroupId: t, propChanges: o }), l && Y();
  }
  async Fa(t, e) {
    let i = (await this.getState()).tabGroups,
      n = i.findIndex((b) => b.id === t),
      o = i[n],
      l = JSON.parse(JSON.stringify(o)),
      w = o.tabsMeta.find((b) => b.id === e),
      u = o.tabsMeta.findIndex((b) => b.id === e);
    o.tabsMeta.length === 1 && o.tabsMeta[0].id === e
      ? (await this.Mt({ type: "deleteTabGroup", tabGroupId: o.id, deletedTabGroup: l, index: n }), o.label && Y())
      : await this.Mt({ type: "deleteTabs", tabGroupId: o.id, tabMetaIds: [e], tabsMetaDeleted: [w], tabIndicesDeleted: [u] });
  }
  async Da(t, e, a) {
    let i = await this.getState(),
      n = i.tabGroups.findIndex((l) => l.id === t),
      o = i.tabGroups[n];
    await this.Mt({ type: "deleteTabGroup", tabGroupId: o.id, deletedTabGroup: o, index: n }), o.label && Y(), e && (await this.be(o, a));
  }
  async Ra(t, e, a) {
    let n = (await this.getState()).tabGroups.find((u) => u.id === t),
      o = n.tabsMeta.findIndex((u) => u.id === e),
      l = n.tabsMeta[o],
      w;
    a !== void 0 ? (w = n.tabsMeta.filter((u) => u.id !== e).findIndex((u) => u.id === a)) : (w = Math.max(0, n.tabsMeta.length - 1)),
      await this.Mt({ type: "reorderTab", tabMetaId: l.id, tabGroupId: n.id, oldIndex: o, newIndex: w });
  }
  async Ba(t, e, a, i) {
    let n = await this.getState(),
      o = n.tabGroups.findIndex((f) => f.id === t),
      l = n.tabGroups[o],
      w = JSON.parse(JSON.stringify(l)),
      u = l.tabsMeta.findIndex((f) => f.id === a),
      h = n.tabGroups.find((f) => f.id === e),
      b;
    i !== void 0 ? (b = h.tabsMeta.findIndex((f) => f.id === i)) : (b = h.tabsMeta.length);
    let p = l.tabsMeta.length === 1 && l.tabsMeta[0].id === a,
      y = {
        type: "moveTabBetweenTabGroups",
        tabMetaId: a,
        sourceTabGroupId: l.id,
        targetTabGroupId: h.id,
        sourceTabGroupTabIndex: u,
        targetTabGroupTabIndex: b,
        sourceTabGroupIndex: o
      };
    p && (y.deletedSourceTabGroup = w), await this.Mt(y), p && l.label && Y();
  }
  va(t) {
    this.ke = [t];
  }
  async fe() {
    return (await chrome.tabs.query({})).find((t) => t.url?.startsWith(c));
  }
  async Re(t, e) {
    let a = { La: t, undo: e },
      i = await this.fe();
    if (i) {
      Et() && +new Date() - ((await C().get("aliveIndicator")) ?? 0) > 2e4 && (await Pt(i));
      try {
        let n = !1;
        Et() &&
          setTimeout(() => {
            n || Pt(i);
          }, 1e3);
        let o = await chrome.tabs.sendMessage(i.id, { type: "stateChange", U: a });
        return (n = !0), o;
      } catch {}
    }
  }
  async Ua(t, e) {
    let a = new Set(t || []),
      i = await Jt(Gt + "/api/createPage", {
        key: await r.Fe(),
        tabGroups: (await this.getState()).tabGroups.filter((n) => e || a.has(n.id))
      });
    await st(i.url, !1, !0);
  }
  async Na(t, e) {
    let n = (await r.getState()).tabGroups.find((o) => o.id === t);
    await r.be(n, e);
  }
  async Je() {
    return await st(...arguments);
  }
  async He() {
    return await R(...arguments);
  }
  async $a() {
    return await mt(...arguments);
  }
  async it(t, e) {
    e || (e = {});
    let a = (await S()).find((i) => G(i.url));
    if (!a) throw new Error("OneTab tab not found");
    try {
      return await new Promise((i, n) => {
        chrome.tabs.sendMessage(a.id, { type: t, ...e }, (o) => {
          chrome.runtime.lastError ? n(chrome.runtime.lastError.message) : o && o.error ? n(o.error) : i(o);
        });
      });
    } catch (i) {
      throw new Error(i);
    }
  }
  async Tt() {
    return (await C().get("contextMenuState")) ?? {};
  }
  async re(t) {
    await C().put("contextMenuState", t);
  }
  async qe() {
    await M().put("lastSeenVersion", "restoreTest"), await Ut();
  }
  async Ve(t) {
    await new Lt().Ge(t);
  }
  async Ke(t, e) {
    for (let a = 0; a < t; a++) await new Lt().Ge(e);
  }
  async Ie() {
    let t = await r.getSettings();
    return P("oneTabTabState", t) || {};
  }
  async oe(t) {
    await r.ft("oneTabTabState", t);
  }
  async ja(t) {
    let e = await this.Ie();
    Object.entries(t).forEach(([a, i]) => (e[a] = i)), await this.oe(e);
  }
}
async function kt() {
  return new Promise((s, t) => {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
      chrome.runtime.lastError ? t(chrome.runtime.lastError.message) : e && e.length === 1 ? s(e[0]) : t("No current tab found");
    });
  });
}
function ie(s) {
  return !!(s === "" || he.some((t) => s.indexOf(t) === 0));
}
function G(s) {
  return s && s.indexOf(c) === 0;
}
function se(s) {
  return s && s.indexOf(N) === 0;
}
async function K(s) {
  if (s !== void 0) {
    let t = await chrome.tabs.query({ windowId: s });
    return { tabs: t, activeTab: t.find((e) => e.active) };
  } else return await j();
}
async function j() {
  return new Promise((s, t) => {
    (async () => {
      let e = {};
      if (chrome.windows) {
        let a = await J(!1);
        if (a === void 0) {
          s(void 0);
          return;
        }
        e = { windowId: a.id };
      }
      chrome.tabs.query(e, (a) => {
        if (chrome.runtime.lastError) t(chrome.runtime.lastError.message);
        else {
          let i;
          for (let n of a)
            if (n.active) {
              i = n;
              break;
            }
          s({ tabs: a, activeTab: i });
        }
      });
    })();
  });
}
async function ne(s) {
  return new Promise((t, e) => {
    (async () =>
      chrome.tabs.query({ windowId: s }, (a) => {
        if (chrome.runtime.lastError) e(chrome.runtime.lastError.message);
        else {
          let i;
          for (let n of a)
            if (n.active) {
              i = n;
              break;
            }
          t({ tabs: a, activeTab: i });
        }
      }))();
  });
}
async function S() {
  return new Promise((s, t) => {
    chrome.tabs.query({}, (e) => {
      chrome.runtime.lastError ? t(chrome.runtime.lastError.message) : s(e);
    });
  });
}
async function it(s) {
  let t;
  return (
    chrome.windows && (t = await J(!1)),
    new Promise((e, a) => {
      chrome.tabs.query({}, (i) => {
        if (chrome.runtime.lastError) a(chrome.runtime.lastError.message);
        else {
          let n = new Map();
          for (let l of i) {
            let w = l.windowId;
            (s && t && w === t.id) || (n.has(w) || n.set(w, []), n.get(w).push(l));
          }
          let o = Array.from(n.values());
          e(o);
        }
      });
    })
  );
}
async function re(s) {
  return new Promise((t, e) => {
    chrome.tabs.reload(s.id, {}, () => {
      chrome.runtime.lastError ? e(chrome.runtime.lastError.message) : t();
    });
  });
}
async function A(s) {
  return await yt(s.id);
}
async function yt(s) {
  return new Promise((t, e) => {
    chrome.tabs.remove(s, () => {
      chrome.runtime.lastError && console.log(chrome.runtime.lastError.message), t();
    });
  });
}
async function Ft(s) {
  return new Promise((t, e) => {
    chrome.windows.remove(s, () => {
      chrome.runtime.lastError ? e(chrome.runtime.lastError.message) : t();
    });
  });
}
function oe(s, t) {
  let e = new Map();
  return (
    s.forEach((a) => {
      let i = a[t];
      e.has(i) || e.set(i, []), e.get(i).push(a);
    }),
    e
  );
}
async function le(s, t) {
  if (s.length === 0) return;
  let e = s.some((u) => !u.pinned) ? s.find((u) => !u.pinned).windowId : s[0].windowId,
    a = !!(await k(!1)).find((u) => u.id === e).incognito,
    i = await S(),
    n = oe(i, "windowId"),
    o = n.get(e).filter((u) => !u.pinned && !s.some((h) => h.id === u.id)).length === 0,
    l = n.get(e).filter((u) => !s.some((h) => h.id === u.id)).length > 0,
    w = (await k(!0)).filter((u) => !u.incognito && u.id !== e);
  if (w.length > 0)
    if (!l || !1) t ? await r.Z(!1, w[0].id) : await B(w[0].tabs[0]), await Ft(e);
    else {
      if (t) {
        let h = a ? w[0].id : e;
        await r.Z(!1, h);
      }
      await Promise.all(s.map((h) => A(h)));
    }
  else t && (await r.Z(!1, a ? void 0 : e)), await Promise.all(s.map((u) => A(u)));
}
async function B(s) {
  return new Promise((t, e) => {
    chrome.tabs.update(s.id, { active: !0 }, () => {
      chrome.runtime.lastError
        ? e(chrome.runtime.lastError.message)
        : chrome.windows
        ? chrome.windows.update(s.windowId, { focused: !0 }, () => {
            chrome.runtime.lastError ? e(chrome.runtime.lastError.message) : t();
          })
        : t();
    });
  });
}
async function R(s) {
  return (
    (s = { ...s }),
    chrome.windows || delete s.windowId,
    new Promise((t, e) => {
      chrome.tabs.create(s, (a) => {
        chrome.runtime.lastError ? e(chrome.runtime.lastError.message) : t(a);
      });
    })
  );
}
async function Dt(s) {
  return new Promise((t, e) => {
    chrome.windows.create(s, (a) => {
      chrome.runtime.lastError ? e(chrome.runtime.lastError.message) : t(a);
    });
  });
}
async function je(s, t) {
  return new Promise((e, a) => {
    chrome.tabs.move(s, { index: t }, () => {
      chrome.runtime.lastError ? a(chrome.runtime.lastError.message) : e();
    });
  });
}
async function k(s) {
  return new Promise((t, e) => {
    chrome.windows.getAll({ populate: !!s }, (a) => {
      chrome.runtime.lastError ? e(chrome.runtime.lastError.message) : t(a);
    });
  });
}
async function J(s) {
  return new Promise((t, e) => {
    chrome.windows.getLastFocused({ populate: !!s }, (a) => {
      chrome.runtime.lastError ? t(void 0) : t(a);
    });
  });
}
async function st(s, t, e, a = {}) {
  if (((a.url = s), (a.pinned = !!t), (a.active = !!e), chrome.windows)) {
    let i = await J(!1);
    i && (a.windowId = i.id);
  }
  return await R(a);
}
async function mt(s) {
  let t = await tt(),
    e = await chrome.windows.create({ url: V(s[0].url, t) }),
    a = [],
    i = await chrome.tabs.query({ windowId: e.id }),
    n = !!s[0].pinned,
    o = i[i.length - 1];
  n && (await chrome.tabs.update(o.id, { pinned: !0 })), a.push(o);
  for (let l of s.slice(1)) {
    let w = await R({ url: V(l.url, t), pinned: !!l.pinned, windowId: e.id });
    a.push(w);
  }
  return { Kt: e, zt: a };
}
function we() {
  chrome.commands.onCommand.addListener((s) => {
    (async () => (
      s === "display-onetab" && (await r.Z()),
      s === "send-current-tab-to-onetab" && (await r.ne()),
      s === "send-all-tabs-in-current-window-to-onetab" && (await r.Wt()),
      s === "send-all-tabs-in-all-windows-to-onetab" && (await r.Vt(void 0)),
      s === "send-all-tabs-except-this-to-onetab" && (await r.ge(void 0, void 0))
    ))();
  });
}
function ue(s) {
  ["onCreated", "onUpdated", "onMoved", "onRemoved", "onReplaced", "onDetached", "onAttached", "onActivated"].forEach((t) =>
    chrome.tabs[t].addListener(() => s())
  ),
    ["onFocusChanged", "onCreated", "onRemoved"].forEach((t) => chrome.windows[t].addListener(() => s()));
}
let nt;
async function Rt() {
  if (nt) return nt.value;
  {
    let s = await C().get("oneTabTabId");
    return (nt = { value: s }), s;
  }
}
async function rt(s) {
  (nt = { value: s }), s === void 0 ? await C().remove("oneTabTabId") : await C().put("oneTabTabId", s);
}
async function ot(s) {
  await r.ft("pinned", `${!!s}`);
}
function ce() {
  chrome.tabs.onRemoved.addListener(async (s, { windowId: t, isWindowClosing: e }) => {
    s === (await Rt()) && (await rt(void 0));
  }),
    chrome.tabs.onUpdated.addListener(async (s, t, e) => {
      try {
        let a = [e.url, e.pendingUrl].some((n) => G(n));
        s === (await Rt()) && !a && e.pinned && (await rt(void 0), await z(s, { pinned: !1 })),
          a && Object.hasOwn(t, "pinned") && (await ot(t.pinned));
      } catch (a) {
        console.log(a);
      }
    });
}
function de(s) {
  return chrome.runtime.getURL(s);
}
async function Bt() {
  chrome.runtime.reload();
}
const he = [
  ...["newtab", "home", "welcome", "welcomeback"].map((s) => "about:" + s),
  ...["newtab", "new-tab-page"].map((s) => ct + s + "/")
];
async function xt(s) {
  return new Promise((t, e) => {
    chrome.tabs.get(s, (a) => {
      chrome.runtime.lastError ? t(void 0) : t(a);
    });
  });
}
async function vt(s) {
  return new Promise((t, e) => {
    chrome.tabs.query({}, (a) => {
      chrome.runtime.lastError ? e(chrome.runtime.lastError.message) : t(a.filter((i) => i.url === s));
    });
  });
}
async function gt(s) {
  let t = await vt(s);
  if (t.length === 0) throw new Error("No tab found with URL: " + s);
  if (t.length > 1) throw new Error("More than one tab found with URL: " + s);
  return t[0];
}
async function z(s, t) {
  return new Promise((e, a) => {
    chrome.tabs.update(s, t, () => {
      chrome.runtime.lastError ? a(chrome.runtime.lastError.message) : e();
    });
  });
}
async function Mt(s, t) {
  s !== void 0 && (t.parentId = s);
  let e = {};
  return (
    (e.id = ht()),
    (t.id = e.id),
    t.title !== void 0 && (t.title = String(t.title).replaceAll("&", "&&")),
    await chrome.contextMenus.create(t),
    e
  );
}
async function St(s, t) {
  (s[x] = +!!t), await chrome.contextMenus.update(s.id, { enabled: t });
}
async function be(s, t) {
  (s[O] = +!!t), await chrome.contextMenus.update(s.id, { type: "checkbox", checked: t });
}
async function fe(s, t, e) {
  e && (s.title = t), await chrome.contextMenus.update(s.id, { title: t });
}
async function I(s, t, e) {
  s !== void 0 && (e.parentId = s.id);
  let a = { [O]: +!!e.checked, [x]: +!!e.enabled, id: ht().slice(0, 10) };
  return t && ((a[D] = t), (a[O] = 1), (a[x] = 1)), (e.id = a.id), await chrome.contextMenus.create(e), a;
}
async function Te() {
  await chrome.contextMenus.removeAll();
}
async function lt(s) {
  let t = { type: "separator", contexts: ["all"], id: ht().slice(0, 10) };
  s && (t.parentId = s.id), await chrome.contextMenus.create(t);
}
function pe(s) {
  (s.rootContextMenu = void 0),
    (s.displayOneTabMenu = void 0),
    (s.namedTabGroupsMenu = void 0),
    (s.sendAllTabsInCurrentWindowMenus = []),
    (s.sendCurrentTabMenus = []),
    (s.sendTabsToTheLeftMenus = []),
    (s.sendTabsToTheRightMenus = []),
    (s.sendAllTabsInAllWindowsMenus = []),
    (s.sendTabsExceptThisMenus = []),
    (s.sendThisWebLinkMenus = []),
    (s.excludeWebSiteContextMenu = void 0),
    (s.helpMenu = void 0);
}
async function H(s, t) {
  await Promise.all(s.map((e) => e.map((a) => St(a, t)).flat()));
}
async function Q() {
  let s = await r.Tt();
  if (s.rootContextMenu && (await J(!1)) !== void 0)
    try {
      let t = await r.getSettings(),
        e = await it(!0),
        a = await j();
      if (!a) return;
      let { tabs: i, activeTab: n } = a,
        o = G(n.url);
      await St(s.displayOneTabMenu, !o);
      let l = W(n.url);
      await St(s.excludeWebSiteContextMenu, !o);
      let w =
        l && l.toLowerCase().indexOf("http") === 0
          ? g("excludeDomainFromOneTab").replace("DOMAIN.COM", $(l))
          : g("excludeWebSiteFromOneTab");
      await fe(s.excludeWebSiteContextMenu, w, !0), await be(s.excludeWebSiteContextMenu, r.me(l, t));
      let u = !1,
        h = !1,
        b = !1,
        p = !1,
        y = !1;
      if (n) {
        let f = parseInt(n.index);
        (u = i.some((T) => parseInt(T.index) < f && T.url && !r.Ft(T, W(T.url), t))),
          (h = i.some((T) => parseInt(T.index) > f && T.url && !r.Ft(T, W(T.url), t))),
          (p = i.some((T) => T.url && !r.Ft(T, W(T.url), t))),
          (b = i.some((T) => T.id !== n.id && T.url && !r.Ft(T, W(T.url), t)));
      }
      (y = e.some((f) => f.some((T) => T.url && !r.Ft(T, W(T.url), t)))),
        await H([s.sendAllTabsInCurrentWindowMenus.slice(0, 1)], p),
        await H([s.sendCurrentTabMenus.slice(0, 1)], !(o || !p)),
        await H([s.sendTabsToTheLeftMenus.slice(0, 1)], u),
        await H([s.sendTabsToTheRightMenus.slice(0, 1)], h),
        await H([s.sendAllTabsInAllWindowsMenus.slice(0, 1)], y),
        await H([s.sendTabsExceptThisMenus.slice(0, 1)], b),
        await r.re(s);
    } catch {
      console.trace();
    }
}
async function Y() {
  if (!chrome.contextMenus) return;
  let s = await r.Tt();
  await Te(), pe(s), await me(s), await r.re(s), await Q();
}
async function ye() {
  await r.re({});
}
async function me(s) {
  (s.rootContextMenu = await Mt(void 0, { type: "normal", contexts: ["all"], title: "OneTab" })),
    (s.displayOneTabMenu = await I(s.rootContextMenu, void 0, { type: "normal", title: g("displayOneTab"), contexts: ["all"] }));
  let t = await I(s.rootContextMenu, void 0, { type: "normal", title: g("sendAllTabsToOneTab"), contexts: ["all"] });
  s.sendAllTabsInCurrentWindowMenus.push(t);
  let e = await I(s.rootContextMenu, void 0, { type: "normal", title: g("sendThisWebLinkToOneTab"), contexts: ["link"] });
  s.sendThisWebLinkMenus.push(e), await lt(s.rootContextMenu);
  let a = await I(s.rootContextMenu, void 0, { type: "normal", title: g("sendOnlyThisTabToOneTab"), contexts: ["all"] });
  s.sendCurrentTabMenus.push(a);
  let i = await I(s.rootContextMenu, void 0, { type: "normal", title: g("sendAllTabsExceptThisToOneTab"), contexts: ["all"] });
  s.sendTabsExceptThisMenus.push(i);
  let n = await I(s.rootContextMenu, void 0, { type: "normal", title: g("sendLeftTabsToOneTab"), contexts: ["all"] });
  s.sendTabsToTheLeftMenus.push(n);
  let o = await I(s.rootContextMenu, void 0, { type: "normal", title: g("sendRightTabsToOneTab"), contexts: ["all"] });
  s.sendTabsToTheRightMenus.push(o);
  let l = await I(s.rootContextMenu, void 0, { type: "normal", title: g("sendAllTabsAllWindowsToOneTab"), contexts: ["all"] });
  s.sendAllTabsInAllWindowsMenus.push(l),
    await lt(s.rootContextMenu),
    (s.excludeWebSiteContextMenu = await I(s.rootContextMenu, void 0, {
      type: "checkbox",
      checked: !1,
      contexts: ["all"],
      title: g("excludeWebSiteFromOneTab")
    })),
    (s.excludeWebSiteContextMenu.title = g("excludeWebSiteFromOneTab"));
  let u = (await r.getState()).tabGroups;
  u || (u = []), (u = u.slice(0, 500));
  let h = u.filter((b) => b.label && b.label !== "");
  if (h.length) {
    await lt(s.rootContextMenu),
      (s.namedTabGroupsMenu = await Mt(s.rootContextMenu.id, { type: "normal", contexts: ["all"], title: g("namedTabGroups") }));
    for (let b of h) {
      let p = await Mt(s.namedTabGroupsMenu.id, { type: "normal", contexts: ["all"], title: b.label });
      s.sendAllTabsInCurrentWindowMenus.push(
        await I(p, b.id, { type: "normal", title: g("sendAllTabsToPlaceholder").replace("PLACEHOLDER", b.label), contexts: ["all"] })
      ),
        s.sendThisWebLinkMenus.push(
          await I(p, b.id, { type: "normal", title: g("sendThisWebLinkToPlaceholder").replace("PLACEHOLDER", b.label), contexts: ["link"] })
        ),
        s.sendCurrentTabMenus.push(
          await I(p, b.id, { type: "normal", title: g("sendOnlyThisTabToPlaceholder").replace("PLACEHOLDER", b.label), contexts: ["all"] })
        ),
        h.length &&
          (s.sendTabsExceptThisMenus.push(
            await I(p, b.id, {
              type: "normal",
              title: g("sendAllTabsExceptThisTabToPlaceholder").replace("PLACEHOLDER", b.label),
              contexts: ["all"]
            })
          ),
          s.sendTabsToTheLeftMenus.push(
            await I(p, b.id, { type: "normal", title: g("sendLeftTabsToPlaceholder").replace("PLACEHOLDER", b.label), contexts: ["all"] })
          ),
          s.sendTabsToTheRightMenus.push(
            await I(p, b.id, { type: "normal", title: g("sendRightTabsToPlaceholder").replace("PLACEHOLDER", b.label), contexts: ["all"] })
          ));
    }
  }
  await lt(s.rootContextMenu), (s.helpMenu = await I(s.rootContextMenu, void 0, { type: "normal", title: g("help"), contexts: ["all"] }));
}
class Lt {
  async Ge(t) {
    try {
      if (dt && !(await _())) throw new Error("Need tab groups permission");
      for (let e = 0; e < 2; e++) {
        await this.dt(m);
        let a = e === 0;
        await ot(a),
          console.log(`begin tests with pinned: ${a}`),
          await this.ze(t.pdfFileUrl),
          await this.Qe(a),
          await this.Ye(t.pdfFileUrl),
          await this._e(),
          (await _()) && (await this.Xe(), await this.Ze()),
          await this.ta(),
          await this.ea(),
          await this.aa(),
          await this.ia(),
          await this.sa(),
          a && (await this.na()),
          await this.ra(),
          await this.oa(),
          await this.la(),
          await this.wa(),
          await this.We({ ctrlKey: !0 }),
          await this.We({ metaKey: !0 }),
          await this.ua(),
          await this.ca(),
          await this.da(),
          await this.ha(),
          await this.ba(),
          await this.fa(),
          await this.Ta(),
          await this.pa(),
          await this.ya(),
          await this.ma(),
          await this.xa(),
          await this.ga(),
          console.log(`tests completed with pinned: ${a}`);
      }
      console.log("all tests completed");
    } finally {
      let e = ct + "extensions/";
      await this.dt(e);
      let a = await r.getState();
      (a.tabGroups = a.tabGroups.filter((i) =>
        i.tabsMeta.every(
          (n) =>
            !(
              n.title.startsWith("t---") ||
              n.title.startsWith("PIN::t---") ||
              n.url.startsWith("http://localhost") ||
              n.url === t.pdfFileUrl
            )
        )
      )),
        await r.Lt(a),
        await ot(!0),
        console.log("done.");
    }
  }
  async ta() {
    let t = await r.St();
    console.log("begin testAutoUnPin");
    let e = { tt: [this.et(), this.et(), this.et()] };
    await this.ot(e, !0), await r.Z(), await this.nt();
    let a = await gt(c);
    this.assert((await xt(a.id)).pinned === t),
      await z(a.id, { url: this.et() }),
      await d(200),
      this.assert(!(await xt(a.id)).pinned),
      await r.Z(),
      await this.nt();
    let i = await gt(c);
    this.assert(i.pinned === t);
  }
  async ea() {
    console.log("begin testDuplicateOneTabTabAdded");
    let t = { tt: [this.et(), this.et(), this.et()] };
    await this.ot(t, !0), await r.Z(), await this.nt();
    let a = (await gt(c)).id;
    await R({ url: c }),
      await R({ url: c }),
      await d(500),
      this.assert((await vt(c)).length === 1),
      await this.yt(c),
      this.assert((await kt()).id === a);
  }
  async la() {
    console.log("begin testSimulateRestoreClick"), await this.dt(m);
    let t = { tt: [this.et(), this.et(), this.et(), this.et()] };
    await this.ot(t, !0),
      await r.Z(),
      await this.nt(),
      await r.Wt(),
      await r.it("clickTab", { url: t.tt[0], wt: {} }),
      await this.lt({ tt: [c, t.tt[0]] }),
      await this.yt(c),
      await r.it("clickTab", { url: t.tt[1], wt: { shiftKey: !0 } }),
      await this.Ma(t.tt[1]),
      await this.At(t.tt[1]),
      await r.it("clickTab", { url: t.tt[2], wt: { ctrlKey: !0 } }),
      await d(300),
      await this.yt(c),
      await d(1e3),
      await this.rt({ tt: [c, t.tt[0], t.tt[2]] }),
      await r.it("clickTab", { url: t.tt[3], wt: { metaKey: !0 } }),
      await d(300),
      await this.yt(c),
      await d(1e3),
      await this.rt({ tt: [c, t.tt[0], t.tt[2], t.tt[3]] }),
      await this.ct(0, [t.tt[1], t.tt[2], t.tt[3]]);
  }
  async da() {
    console.log("begin testTabsAddedToExistingGroup"), await this.dt(m);
    let t = { tt: [this.et(), this.et(), this.et()] };
    await this.ot(t, !0), await r.Z(), await this.nt();
    let e = await r.St();
    await this.lt({ tt: e ? [c, ...t.tt] : [...t.tt, c] }), await r.Wt(), await this.ct(0, [...t.tt]), await this.lt({ tt: [c] });
    let a = { tt: [this.et()] };
    await this.ot(a, !1),
      await this.lt({ tt: [c, a.tt[0]] }),
      await this.gt(a.tt[0]),
      await r.ne(),
      await d(200),
      await this.ct(0, [a.tt[0], ...t.tt]);
  }
  async wa() {
    console.log("begin testSimulateRestoreTabGroupClick"), await this.dt(m);
    let t = { tt: [this.et(), this.et(), this.et()] };
    await this.ot(t, !0),
      await r.Z(),
      await this.nt(),
      await d(200),
      await r.Wt(),
      await this.ct(0, [...t.tt]),
      await this.lt({ tt: [c] }),
      await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: t.tt[0], wt: {} }),
      await d(200),
      await this.Pt(0, t.tt[0]),
      await this.lt({ tt: [c, ...t.tt] }),
      await this.yt(c);
  }
  async We(t) {
    console.log("begin testSimulateRestoreTabGroupCtrlOrMetaClick"), await this.dt(m);
    let e = { tt: [this.et(), this.et(), this.et()] };
    await this.ot(e, !0),
      await r.Z(),
      await this.nt(),
      await d(200),
      await r.Wt(),
      await d(200),
      await this.ct(0, [...e.tt]),
      await this.lt({ tt: [c] }),
      await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: e.tt[0], wt: t }),
      await d(200),
      await this.ct(0, [...e.tt]),
      await this.lt({ tt: [c, ...e.tt] }),
      await this.yt(c);
  }
  async ua() {
    console.log("begin testSimulateRestoreTabGroupShiftClick"), await this.dt(m);
    let t = { tt: [this.et(), this.et(), this.et()] };
    await this.ot(t, !0),
      await r.Z(),
      await this.nt(),
      await d(200),
      await r.Wt(),
      await this.ct(0, [...t.tt]),
      await this.lt({ tt: [c] }),
      await this.nt(),
      await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: t.tt[0], wt: { shiftKey: !0 } }),
      await this.ct(0, [...t.tt]),
      await this.lt({ tt: [...t.tt], other: [[c]] });
  }
  async ca() {
    console.log("begin testSimulateDeleteTabGroupClick"), await this.dt(m);
    let t = { tt: [this.et(), this.et(), this.et()] };
    await this.ot(t, !0),
      await r.Z(),
      await this.nt(),
      await d(200),
      await r.Wt(),
      await d(200),
      await this.ct(0, [...t.tt]),
      await this.Ot(t.tt, 0, !0),
      await this.Sa(t.tt[0]),
      await this.nt(),
      await r.it("clickTabGroupButton", { ht: "deleteAllButton", ut: t.tt[0] }),
      await d(200),
      await this.Pt(0, t.tt[0]),
      await d(200),
      await this.Ga(t.tt[0]);
  }
  async Pt(t) {
    let e = await r.it("getVisibleStructure");
    this.assert(e.tabGroups.every((a) => !a.tabs.some((i) => i === t)));
  }
  async ct(t, e) {
    await d(200);
    let a = await r.it("getVisibleStructure"),
      i = a.tabGroups.findIndex((n) => !n.le);
    this.assert(
      this.Ae(
        [e],
        a.tabGroups.slice(i + t, i + t + 1).map((n) => n.tabs)
      ),
      `assertUnstarredTabGroup fail: expected: ${e}`
    );
  }
  async oa() {
    console.log("begin testOneTabTabUpdated"), await this.dt(m);
    let t = {
      tt: [this.et(), this.et()],
      st: [
        [this.et(), this.et()],
        [this.et(), this.et()]
      ]
    };
    await this.ot(t, !0), await r.Z(!1), await this.nt();
    let e = await r.St();
    await this.rt({ tt: e ? [c, ...t.st[1]] : [...t.st[1], c], other: [t.tt, ...t.st.slice(0, -1)] }), await r.Vt(), await this.nt();
    let a = await r.it("getVisibleStructure");
    this.Gt(
      a.Ia,
      a.tabGroups.reduce((n, o) => n + o.Wa, 0),
      "visible total tab count === summed visible tabgroup counts"
    ),
      this.Gt(
        a.Ia,
        a.tabGroups.reduce((n, o) => n + o.tabs.length, 0),
        "visible total tab count === summed visible tabs"
      ),
      this.assert(a.tabGroups.every((n) => n.Wa === n.tabs.length));
    let i = a.tabGroups.findIndex((n) => !n.le);
    this.assert(a.tabGroups.every((n, o) => (o < i && n.le) || (o >= i && !n.le))),
      this.assert(
        this.Ae(
          [t.tt, ...t.st],
          a.tabGroups.slice(i, i + 3).map((n) => n.tabs)
        )
      );
  }
  Ae(t, e) {
    return (
      t.map((a) => a.join(" ")).sort().join(`
`) ===
      e.map((a) => a.join(" ")).sort().join(`
`)
    );
  }
  async ra() {
    if ((console.log("begin testOneTabTabComms"), await r.Z(!1), await this.nt(), !(await r.it("ping")).pong))
      throw new Error("comms test failed");
  }
  async _e() {
    console.log("begin testBrowserActionClick"), await this.dt(m);
    let t = { tt: [this.et(), this.et()], st: [[this.et(), this.et()]] };
    await this.ot(t, !0), await this.rt({ tt: t.st[0], other: [t.tt] }), await this.bt(), await this.nt();
    let e = await r.St();
    await this.rt({ tt: e ? [c, ...t.tt] : [...t.tt, c], other: [] });
  }
  async Xe() {
    console.log("begin testBrowserGroupSaveAndRestore");
    let t = [
      { Yt: 3, Nt: [0, 1, 2], $t: [3, 4, 5], _t: !0, Xt: async () => await this.bt() },
      { Yt: 1, Nt: [3, 4, 5], $t: [0, 1, 2], _t: !1, Xt: async () => await this.bt() },
      { Yt: 5, Nt: [0, 1, 2, 5], $t: [3, 4], _t: !0, Xt: async () => (await r.Me(), await r.Z()) },
      { Yt: 3, Nt: [0, 1, 2, 3], $t: [4, 5], _t: !0, Xt: async () => (await r.Se(), await r.Z()) }
    ];
    for (let e of t) {
      await this.dt(m);
      let a = { tt: [this.et(), this.et(), this.et(), this.et(), this.et(), this.et()] },
        i = await this.ot(a, !0);
      await this.rt({ tt: a.tt }),
        await chrome.tabs.group({ createProperties: { windowId: i.tt[0].windowId }, tabIds: i.tt.map((o) => o.id).slice(3) }),
        await this.gt(a.tt[e.Yt]),
        await e.Xt(),
        await this.nt();
      let n = await r.St();
      await this.rt({ tt: n ? [c, ...e.Nt.map((o) => a.tt[o])] : [...e.Nt.map((o) => a.tt[o]), c] }),
        await this.Ot(
          e.$t.map((o) => a.tt[o]),
          0,
          !0
        ),
        await this.nt(),
        this.assert((await r.it("getTabGroupElementDisplayed", { jt: "tabGroupImg", ut: a.tt[e.$t[0]] })).Jt === e._t);
    }
  }
  async Ze() {
    console.log("begin testBrowserGroupSaveAndRestore2"), await this.dt(m);
    let t = { tt: [this.et(), this.et(), this.et(), this.et(), this.et(), this.et()], st: [[this.et(), this.et()]] },
      e = await this.ot(t, !0);
    await this.rt({ tt: t.st[0], other: [t.tt] }),
      await chrome.tabs.group({ createProperties: { windowId: e.tt[0].windowId }, tabIds: e.tt.map((i) => i.id).slice(1, 3) }),
      await chrome.tabs.group({ createProperties: { windowId: e.tt[0].windowId }, tabIds: e.tt.map((i) => i.id).slice(4, 6) }),
      await r.Vt(),
      await r.Z(),
      await this.nt();
    let a = await r.St();
    await this.rt({ tt: [c] }),
      await this.Ot(
        [0, 1].map((i) => t.st[0][i]),
        0,
        !0
      ),
      await this.Ot(
        [0, 3].map((i) => t.tt[i]),
        1,
        !0
      ),
      await this.Ot(
        [1, 2].map((i) => t.tt[i]),
        2,
        !0
      ),
      await this.Ot(
        [4, 5].map((i) => t.tt[i]),
        3,
        !0
      ),
      await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: t.tt[4], wt: {} }),
      await d(200),
      await this.Pt(0, t.tt[4]),
      await this.Pt(0, t.tt[5]),
      await this.lt({ tt: [c, ...t.tt.slice(4)] }),
      await this.yt(c);
  }
  async aa() {
    console.log("begin testContextMenus"), await this.dt(m);
    let t = {
      tt: [this.et(), this.et()],
      st: [
        [this.et(), this.et()],
        [this.Ht(), this.et(), this.et()]
      ]
    };
    await this.ot(t, !0), await this.rt({ tt: t.st[1], other: [t.tt, t.st[0]] });
    let e = 500;
    const a = (l, w, u) => {
      const h = l[w].length;
      this.assert(h > 0), this.assert(l[w][0][x] === +u);
    };
    await this.gt(t.tt[0]), await d(e), await Q();
    let i = await r.Tt();
    a(i, "sendTabsToTheLeftMenus", !1),
      a(i, "sendTabsToTheRightMenus", !0),
      a(i, "sendAllTabsInAllWindowsMenus", !0),
      a(i, "sendTabsExceptThisMenus", !0),
      a(i, "sendAllTabsInCurrentWindowMenus", !0),
      this.assert(i.displayOneTabMenu[x]),
      this.assert(i.excludeWebSiteContextMenu[x]),
      this.assert(!i.excludeWebSiteContextMenu[O]),
      this.assert(i.excludeWebSiteContextMenu.title === "Exclude localhost from OneTab"),
      await this.gt(t.tt[1]),
      await d(e),
      (i = await r.Tt()),
      a(i, "sendTabsToTheLeftMenus", !0),
      a(i, "sendTabsToTheRightMenus", !1),
      a(i, "sendAllTabsInAllWindowsMenus", !0),
      a(i, "sendTabsExceptThisMenus", !0),
      a(i, "sendAllTabsInCurrentWindowMenus", !0),
      a(i, "sendCurrentTabMenus", !0),
      this.assert(i.displayOneTabMenu[x]),
      this.assert(i.excludeWebSiteContextMenu[x]),
      this.assert(!i.excludeWebSiteContextMenu[O]),
      this.assert(i.excludeWebSiteContextMenu.title === "Exclude localhost from OneTab"),
      await this.gt(t.st[0][0]),
      await d(e),
      (i = await r.Tt()),
      a(i, "sendTabsToTheLeftMenus", !1),
      a(i, "sendTabsToTheRightMenus", !0),
      a(i, "sendAllTabsInAllWindowsMenus", !0),
      a(i, "sendTabsExceptThisMenus", !0),
      a(i, "sendAllTabsInCurrentWindowMenus", !0),
      a(i, "sendCurrentTabMenus", !0),
      this.assert(i.displayOneTabMenu[x]),
      this.assert(i.excludeWebSiteContextMenu[x]),
      this.assert(!i.excludeWebSiteContextMenu[O]),
      this.assert(i.excludeWebSiteContextMenu.title === "Exclude localhost from OneTab"),
      await this.gt(t.st[1][1]),
      await d(e),
      (i = await r.Tt()),
      a(i, "sendTabsToTheLeftMenus", !1),
      a(i, "sendTabsToTheRightMenus", !0),
      a(i, "sendAllTabsInAllWindowsMenus", !0),
      a(i, "sendTabsExceptThisMenus", !0),
      a(i, "sendAllTabsInCurrentWindowMenus", !0),
      a(i, "sendCurrentTabMenus", !0),
      this.assert(i.displayOneTabMenu[x]),
      this.assert(i.excludeWebSiteContextMenu[x]),
      this.assert(!i.excludeWebSiteContextMenu[O]),
      this.assert(i.excludeWebSiteContextMenu.title === "Exclude localhost from OneTab"),
      await r.Z(),
      await this.nt();
    let n = await this.qt(),
      o = await r.St();
    await this.rt({ tt: o ? [c, ...t.st[1]] : [...t.st[1], c], other: [t.tt, t.st[0]] }),
      await this.yt(c),
      await this.nt(),
      await d(5 * e),
      (i = await r.Tt()),
      o
        ? (a(i, "sendTabsToTheLeftMenus", !1), a(i, "sendTabsToTheRightMenus", !0))
        : (a(i, "sendTabsToTheLeftMenus", !0), a(i, "sendTabsToTheRightMenus", !1)),
      a(i, "sendAllTabsInAllWindowsMenus", !0),
      a(i, "sendTabsExceptThisMenus", !0),
      a(i, "sendAllTabsInCurrentWindowMenus", !0),
      a(i, "sendCurrentTabMenus", !1),
      this.assert(!i.displayOneTabMenu[x]),
      this.assert(!i.excludeWebSiteContextMenu[x]),
      await this.gt(t.st[1][0]),
      await d(e),
      (i = await r.Tt()),
      a(i, "sendTabsToTheLeftMenus", !1),
      a(i, "sendTabsToTheRightMenus", !0),
      a(i, "sendAllTabsInAllWindowsMenus", !0),
      a(i, "sendTabsExceptThisMenus", !0),
      a(i, "sendAllTabsInCurrentWindowMenus", !0),
      a(i, "sendCurrentTabMenus", !0),
      this.assert(i.displayOneTabMenu[x]),
      this.assert(i.excludeWebSiteContextMenu[x]),
      this.assert(!i.excludeWebSiteContextMenu[O]),
      this.assert(i.excludeWebSiteContextMenu.title === "Exclude localhost from OneTab"),
      await this.gt(t.st[0][0]),
      await this.yt(t.st[0][0]),
      await r.Z(),
      await this.yt(c),
      await this.gt(t.st[1][0]),
      await this.yt(t.st[1][0]),
      await this.At(t.st[1][1]),
      await this.At(t.st[1][2]),
      await d(e),
      (i = await r.Tt()),
      a(i, "sendTabsToTheLeftMenus", !1),
      a(i, "sendTabsToTheRightMenus", !1),
      a(i, "sendAllTabsInAllWindowsMenus", !0),
      a(i, "sendTabsExceptThisMenus", !1),
      a(i, "sendAllTabsInCurrentWindowMenus", !1),
      a(i, "sendCurrentTabMenus", !1),
      this.assert(i.displayOneTabMenu[x]),
      this.assert(i.excludeWebSiteContextMenu[x]),
      this.assert(!i.excludeWebSiteContextMenu[O]),
      this.assert(i.excludeWebSiteContextMenu.title === "Exclude localhost from OneTab"),
      await this.At(t.st[1][0]),
      await d(e),
      (i = await r.Tt()),
      a(i, "sendAllTabsInCurrentWindowMenus", !1),
      await Promise.all((await S()).filter((l) => l.url !== c && l.url !== t.tt[0]).map((l) => A(l))),
      await this.gt(t.tt[0]),
      await d(e),
      (i = await r.Tt()),
      a(i, "sendAllTabsInAllWindowsMenus", !1);
  }
  async ia() {
    console.log("begin testExcludeWebSiteContextMenu"), await this.dt(m), await r.se("127.0.0.1");
    let t = {
      tt: [this.et("127.0.0.1"), this.et()],
      st: [
        [this.et(), this.et()],
        [this.et(), this.et("127.0.0.1"), this.et()]
      ]
    };
    await this.ot(t, !0), await this.rt({ tt: t.st[1], other: [t.tt, ...t.st.slice(0, -1)] }), await d(1e3);
    let e = await r.Tt();
    this.assert(e.excludeWebSiteContextMenu[x]),
      this.assert(!e.excludeWebSiteContextMenu[O]),
      this.Gt(e.excludeWebSiteContextMenu.title, "Exclude localhost from OneTab"),
      await this.gt(t.st[1][1]),
      await d(1e3),
      (e = await r.Tt()),
      this.assert(e.excludeWebSiteContextMenu[x]),
      this.assert(!e.excludeWebSiteContextMenu[O]),
      this.Gt(e.excludeWebSiteContextMenu.title, "Exclude 127.0.0.1 from OneTab"),
      await r.xe("127.0.0.1");
    {
      let a = await r.getSettings(),
        i = r.Qt("127.0.0.1", a);
      this.assert(i);
    }
    await this.gt(t.tt[1]),
      await d(1e3),
      (e = await r.Tt()),
      this.assert(e.excludeWebSiteContextMenu[x]),
      this.assert(!e.excludeWebSiteContextMenu[O]),
      this.Gt(e.excludeWebSiteContextMenu.title, "Exclude localhost from OneTab"),
      await this.gt(t.tt[0]),
      await d(1e3),
      (e = await r.Tt()),
      this.assert(e.excludeWebSiteContextMenu[x]),
      this.assert(e.excludeWebSiteContextMenu[O]),
      this.Gt(e.excludeWebSiteContextMenu.title, "Exclude 127.0.0.1 from OneTab"),
      await r.se("127.0.0.1"),
      await Q(),
      await d(1e3),
      (e = await r.Tt()),
      this.assert(e.excludeWebSiteContextMenu[x]),
      this.assert(!e.excludeWebSiteContextMenu[O]),
      this.Gt(e.excludeWebSiteContextMenu.title, "Exclude 127.0.0.1 from OneTab");
  }
  async sa() {
    console.log("begin testIgnoreOneTabContentPages");
    let t = { tt: [this.et(), this.et()] };
    await this.ot(t, !0),
      await r.kt("import-export.html"),
      await r.kt("options.html"),
      await r.kt("import-export.html"),
      await r.kt("options.html");
    let e = { st: [[this.et(), this.et()]] };
    await this.ot(e, !1),
      await r.kt("import-export.html"),
      await r.kt("options.html"),
      await this.At(e.st[0][0]),
      await this.At(e.st[0][1]),
      await this.rt({ tt: [...t.tt, N + "import-export.html", N + "options.html"] }),
      await this.bt(),
      await this.rt({ tt: [c] });
  }
  async na() {
    console.log("begin testExistingOneTabSwitchedTo");
    let t = {
      tt: [this.et()],
      st: [
        [this.et(), this.et()],
        [this.et(), this.et(), this.et()]
      ]
    };
    await this.ot(t, !0), await this.rt({ tt: t.st[1], other: [t.tt, ...t.st.slice(0, -1)] }), await r.Z();
    let e = await r.St();
    await this.rt({ tt: e ? [c, ...t.st[1]] : [...t.st[1], c], other: [t.tt, ...t.st.slice(0, -1)] }),
      await this.gt(t.tt[0]),
      await this.yt(t.tt[0]),
      await r.Z(!0),
      await this.yt(t.tt[0]),
      await r.Z(),
      await this.yt(c),
      await this.rt({ tt: e ? [c, ...t.st[1]] : [...t.st[1], c], other: [t.tt, ...t.st.slice(0, -1)] });
  }
  async Ja() {
    console.log("begin safariPinnedTabsTest"), await this.dt(m);
    let t = { tt: [this.et(), this.et()], st: [[this.et(), this.et()]] };
    await this.ot(t, !0), await this.rt({ tt: t.st[0], other: [t.tt] });
    let e = await k(!0),
      a = e.find((o) => o.focused),
      i = e.find((o) => !o.focused),
      n = 200;
    await d(n),
      await r.Z(),
      await this.nt(),
      await d(n),
      this.Gt((await k(!0)).find((o) => o.focused).id, a.id),
      await B(a.tabs[1]),
      await d(n),
      await r.Z(),
      await d(n),
      this.Gt((await k(!0)).find((o) => o.focused).id, a.id),
      await B(i.tabs[1]),
      await d(n),
      await r.Z(),
      await d(n),
      this.Gt((await k(!0)).find((o) => o.focused).id, i.id);
  }
  async ha() {
    console.log("begin testPinnedTabsOption"), await this.dt(m);
    let t = await r.getSettings(),
      e = P("pinnedTabs", t);
    try {
      await r.ft("pinnedTabs", "ignore");
      let a = { tt: [this.Ht(), this.et()] };
      await this.ot(a, !0), await this.rt({ tt: a.tt }), await this.bt(), await d(500);
      let i = await r.St();
      i ? (await d(500), await this.rt({ tt: [c, a.tt[0]] }, !0)) : await this.rt({ tt: [a.tt[0], c] }),
        await this.At(a.tt[0]),
        await this.rt({ tt: [c] }),
        await r.ft("pinnedTabs", "allow"),
        await this.ot(a, !0),
        await this.rt({ tt: a.tt }),
        await this.bt(),
        await d(100),
        await this.rt({ tt: [c] }),
        await this.Ot(a.tt, 0, !0),
        await r.it("clickTab", { url: a.tt[0], wt: {} }),
        await this.lt({ tt: i ? [c, a.tt[0]] : [a.tt[0], c] }),
        await this.Aa(a.tt[0]);
    } finally {
      await r.ft("pinnedTabs", e);
    }
  }
  async ba() {
    console.log("begin testPinnedTabsOption2"), await this.dt(m);
    let t = await r.getSettings(),
      e = P("pinnedTabs", t);
    try {
      await r.ft("pinnedTabs", "allow");
      let a = { tt: [this.Ht(), this.Ht()] };
      await this.ot(a, !0), await this.rt({ tt: a.tt }), await this.bt(), await this.rt({ tt: [c] });
      let i = { tt: [this.et()] };
      await this.ot(i, !1),
        await this.rt({ tt: [c, ...i.tt] }),
        await this.nt(),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [...a.tt], other: [[c, ...i.tt]] }),
        await this.bt(),
        await this.ct(0, [...a.tt]),
        await this.At(i.tt[0]),
        await this.rt({ tt: [c] }),
        await this.nt(),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} });
      let n = await r.St();
      await this.lt({ tt: n ? [c, ...a.tt] : [...a.tt, c] });
    } finally {
      await r.ft("pinnedTabs", e);
    }
  }
  async fa() {
    console.log("begin testPinnedTabsOption3"), await this.dt(m);
    let t = await r.getSettings(),
      e = P("pinnedTabs", t);
    try {
      await r.ft("pinnedTabs", "allow");
      let a = { tt: [this.Ht()] };
      await this.ot(a, !0), await this.rt({ tt: a.tt }), await this.bt(), await this.rt({ tt: [c] });
      let i = { tt: [this.et()] };
      await this.ot(i, !1),
        await this.rt({ tt: [c, ...i.tt] }),
        await this.nt(),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [...a.tt], other: [[c, ...i.tt]] }),
        await this.bt(),
        await this.ct(0, [...a.tt]),
        await this.At(i.tt[0]),
        await this.rt({ tt: [c] }),
        await this.nt(),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} });
      let n = await r.St();
      await this.lt({ tt: n ? [c, ...a.tt] : [...a.tt, c] });
    } finally {
      await r.ft("pinnedTabs", e);
    }
  }
  async Ta() {
    console.log("begin testRestoreRemovalOption"), await this.dt(m);
    let t = await r.getSettings(),
      e = P("restoreRemoval", t);
    try {
      await r.ft("restoreRemoval", "default");
      let a = { tt: [this.et(), this.et()] };
      await this.ot(a, !0),
        await this.bt(),
        await this.nt(),
        await d(200),
        await this.ct(0, [...a.tt]),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [c, ...a.tt] }),
        await this.Pt(a.tt[0]),
        await r.ft("restoreRemoval", "keep"),
        await this.bt(),
        await this.nt(),
        await this.ct(0, [...a.tt]),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [c, ...a.tt] }),
        await this.ct(0, [...a.tt]);
    } finally {
      await r.ft("restoreRemoval", e);
    }
  }
  async pa() {
    console.log("begin testDuplicatesOption"), await this.dt(m);
    let t = await r.getSettings(),
      e = P("restoreRemoval", t);
    try {
      await r.ft("restoreRemoval", "default");
      let a = { tt: [this.et(), this.et()] };
      await this.ot(a, !0),
        await this.bt(),
        await this.nt(),
        await d(200),
        await this.ct(0, [...a.tt]),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [c, ...a.tt] }),
        await this.Pt(a.tt[0]),
        await r.ft("restoreRemoval", "keep"),
        await this.bt(),
        await this.nt(),
        await this.ct(0, [...a.tt]),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [c, ...a.tt] }),
        await this.ct(0, [...a.tt]);
    } finally {
      await r.ft("restoreRemoval", e);
    }
  }
  async ya() {
    console.log("begin testRestoreWindowOption"), await this.dt(m);
    let t = await r.getSettings(),
      e = P("restoreWindow", t);
    try {
      await r.ft("restoreWindow", "newWindow");
      let a = { tt: [this.et(), this.et()] };
      await this.ot(a, !0),
        await this.bt(),
        await this.nt(),
        await this.lt({ tt: [c] }),
        await this.ct(0, [...a.tt]),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [c, ...a.tt] }),
        await this.bt(),
        await this.lt({ tt: [c] }),
        await this.ct(0, [...a.tt]);
      let i = { tt: [this.et()] };
      await this.ot(i, !1),
        await r.Z(),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [...a.tt], other: [[c, ...i.tt]] }),
        await r.ft("restoreWindow", "newWindowAlways"),
        await this.bt(),
        await this.nt(),
        await this.At(i.tt[0]),
        await this.lt({ tt: [c] }),
        await this.ct(0, [...a.tt]),
        await r.Z(),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [...a.tt], other: [[c]] }),
        await this.bt(),
        await this.nt(),
        await this.lt({ tt: [c] }),
        await this.ct(0, [...a.tt]),
        await r.ft("restoreWindow", "currentWindow"),
        await r.Z(),
        await this.ot(i, !1),
        await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: a.tt[0], wt: {} }),
        await this.lt({ tt: [c, i.tt[0], ...a.tt] });
    } finally {
      await r.ft("restoreWindow", e);
    }
  }
  async ma() {
    console.log("begin testLockUnlock"), await this.dt(m);
    let t = { tt: [this.et(), this.et()] };
    await this.ot(t, !0),
      await this.bt(),
      await this.nt(),
      await this.lt({ tt: [c] }),
      await this.ct(0, [...t.tt]),
      await d(150),
      this.assert(!(await r.it("getTabGroupElementDisplayed", { jt: "lockImg", ut: t.tt[0] })).Jt),
      this.assert(!(await this.Zt(t.tt[0])).starred),
      await r.it("clickTabGroupButton", { ht: "moreButton", ut: t.tt[0], wt: {} }),
      await r.it("clickTabGroupButton", { ht: "toggleLockTabGroupButton", ut: t.tt[0], Oe: "mousedown", wt: {} }),
      await d(150),
      this.assert((await this.Zt(t.tt[0])).locked),
      await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: t.tt[0], wt: {} }),
      await d(200),
      await this.lt({ tt: [c, ...t.tt] }),
      await this.ct(0, [...t.tt]),
      await r.it("clickTabGroupButton", { ht: "deleteAllButton", ut: t.tt[0] }),
      await d(200),
      await this.ct(0, [...t.tt]),
      await r.it("clickTab", { url: t.tt[0], wt: {} }),
      await d(200),
      await this.ct(0, [...t.tt]),
      this.assert((await r.it("getTabGroupElementDisplayed", { jt: "lockImg", ut: t.tt[0] })).Jt);
  }
  async xa() {
    console.log("begin testStarUnstar"), await this.dt(m);
    let t = { tt: [this.et(), this.et()] };
    await this.ot(t, !0), await this.bt(), await this.nt(), await this.lt({ tt: [c] }), await d(200), await this.ct(0, [...t.tt]);
    let e = { tt: [this.et(), this.et()] };
    await this.ot(e, !0), await this.bt(), await this.nt(), await d(200), await this.lt({ tt: [c] }), await this.ct(0, [...e.tt]);
    let a = await r.it("getVisibleStructure"),
      i = a.tabGroups.findIndex((w) => w.tabs.some((u) => u === t.tt[0])),
      n = a.tabGroups.findIndex((w) => w.tabs.some((u) => u === e.tt[0]));
    this.assert(i > 0),
      this.assert(!(await r.it("getTabGroupElementDisplayed", { jt: "starImg", ut: t.tt[0] })).Jt),
      await r.it("clickTabGroupButton", { ht: "moreButton", ut: t.tt[0], wt: {} }),
      await d(300),
      await r.it("clickTabGroupButton", { ht: "toggleStarTabGroupButton", ut: t.tt[0], Oe: "mousedown", wt: {} }),
      await d(1200),
      this.assert((await r.it("getTabGroupElementDisplayed", { jt: "starImg", ut: t.tt[0] })).Jt),
      (a = await r.it("getVisibleStructure"));
    let o = a.tabGroups.findIndex((w) => w.tabs.some((u) => u === t.tt[0]));
    this.assert(o === 0),
      this.assert(o === (await this.Ce(t.tt[0]))),
      this.assert((await this.Zt(t.tt[0])).starred),
      await r.it("clickTabGroupButton", { ht: "moreButton", ut: t.tt[0], wt: {} }),
      await r.it("clickTabGroupButton", { ht: "toggleStarTabGroupButton", ut: t.tt[0], Oe: "mousedown", wt: {} }),
      await d(600),
      (a = await r.it("getVisibleStructure"));
    let l = a.tabGroups.findIndex((w) => w.tabs.some((u) => u === t.tt[0]));
    this.assert(i === l),
      this.assert(i === (await this.Ce(t.tt[0]))),
      this.assert(!(await this.Zt(t.tt[0])).starred),
      this.assert(!(await r.it("getTabGroupElementDisplayed", { jt: "starImg", ut: t.tt[0] })).Jt);
  }
  async ze(t) {
    console.log("begin testFileUrls");
    let e;
    try {
      await this.dt(m);
      let a = { tt: [t] };
      await this.ot(a, !0), await this.rt({ tt: [t] }), await this.bt(), await this.nt(), await this.Ot([t], 0, !0);
      let i = V(t, await tt());
      await r.it("clickTab", { url: i, wt: {} });
    } catch (a) {
      e = String(a);
    }
    this.Gt(e, void 0);
  }
  async Ye(t) {
    console.log("begin testPdfPlaceholders"), await this.dt(m);
    let e = V(t, await tt());
    this.assert(t !== e && !e.startsWith("file://"), "pdfFilePlaceholderUrl not determined correctly");
    let a = { tt: [t] };
    await this.ot(a, !0),
      await this.rt({ tt: [t] }),
      await this.bt(),
      await d(200),
      await this.rt({ tt: [c] }),
      await this.nt(),
      await this.Ot([t], 0, !0),
      await r.it("clickTab", { url: e, wt: {} }),
      await this.lt({ tt: [c, e] }),
      await this.bt(),
      await this.Ot([t], 0, !0),
      await d(200),
      await r.it("clickTabGroupButton", { ht: "restoreAllButton", ut: e, wt: {} }),
      await d(200),
      await this.Pt(0, e),
      await this.Pt(0, t),
      await this.lt({ tt: [c, e] });
  }
  async ga() {
    await r.Z(), await this.nt();
    let t = await r.it("testExtFavIconLoad");
    this.assert(t.success);
  }
  async qt() {
    let t = (await S()).filter((a) => G(a.url));
    this.Oa(t.length, 0, "cannot find any onetab tab");
    let e = t[0];
    return this.Gt(t.length, 1, "there should only be exactly one onetab tab"), e;
  }
  async Qe(t) {
    console.log("begin testPreserveLastOneTabTabPinnedState"), await r.Z(), await this.nt();
    let e = await this.qt(),
      a = e.pinned,
      i = 500;
    a ||
      (await z(e.id, { pinned: !0 }),
      await d(i),
      await A(e),
      await d(i),
      await r.Z(),
      await this.nt(),
      (e = await this.qt()),
      await d(i),
      this.assert(e.pinned)),
      a &&
        (await z(e.id, { pinned: !1 }),
        await d(200),
        await A(e),
        await r.Z(),
        await this.nt(),
        (e = await this.qt()),
        this.assert(!e.pinned),
        await z(e.id, { pinned: !0 }),
        await d(200),
        await A(e),
        await d(200),
        await r.Z(),
        await this.nt(),
        await d(200),
        (e = await this.qt()),
        this.assert(e.pinned)),
      await ot(t);
  }
  async Ot(t, e, a) {
    let i = await r.getState();
    a && (e += i.tabGroups.findIndex((o) => !o.starred));
    let n = i.tabGroups.some((o, l) =>
      e !== void 0 && e !== l
        ? !1
        : o.tabsMeta.every((w, u) => {
            let h = t[u];
            if (h.includes(":3000/?title=")) {
              let b = this.we(h, "title") === w.title;
              return (
                this.we(h, "title").startsWith("PIN::") && !w.pinned && (b = !1),
                b || console.log(`assertStoredTabGroup mismatch: ${this.we(h, "title")} vs ${w.title}`),
                b
              );
            } else return h === w.url;
          })
    );
    this.assert(n, `assertStoredTabGroup fail, expected: ${t} at index ${e}`);
  }
  async Sa(t) {
    let e = await r.getState();
    this.assert(e.tabGroups.some((a) => a.tabsMeta.some((i) => i.url === t)));
  }
  async Ga(t) {
    let e = await r.getState();
    this.assert(!e.tabGroups.some((a) => a.tabsMeta.some((i) => i.url === t)));
  }
  async Ce(t) {
    return (await r.getState()).tabGroups.findIndex((e) => e.tabsMeta[0].url === t);
  }
  async Zt(t) {
    return (await r.getState()).tabGroups.find((e) => e.tabsMeta[0].url === t);
  }
  we(t, e) {
    t = t.substring(t.indexOf("?") + 1);
    let a = t.split("&");
    for (let i in a) {
      let n = a[i].split("=");
      if (n[0] === e) return decodeURIComponent(n[1]);
    }
  }
  async dt(t) {
    let a = (await S()).filter(
      (n) =>
        n.url &&
        !(
          (n.title && n.title.startsWith("t---")) ||
          (n.title && n.title.startsWith("PIN::t---")) ||
          (n.title && n.title.startsWith("localhost:"))
        ) &&
        ![n.url, n.pendingUrl].some((o) => [N, ct, "file://"].some((l) => o && o.startsWith(l)))
    );
    if (((a = a.filter((n) => !n.url.startsWith("http://localhost"))), a.length > 0))
      throw (console.log(a), new Error(`Non-empty tabs found, aborting browser reset. ${a.map((n) => n.url).join(",")}`));
    let i = await k(!0);
    if (i.length === 0) console.log("resetToSingleEmptyTabOpen: no open windows"), await Dt({ url: t });
    else {
      i.slice(1).forEach((w) => Ft(w.id));
      let n = i[0],
        { tabs: o, activeTab: l } = await ne(n.id);
      await R({ windowId: n.id, url: t }), await Promise.all(o.map((w) => A(w)));
    }
    await this.ae();
  }
  async ae() {
    await Ct(1e4, "waitForAllTabsLoaded", async () => !(await S()).some((t) => t.status === "loading"));
  }
  async ot(t, e) {
    let a = { tt: [], st: [] },
      i = [];
    if ((e && (i = await S()), t.tt)) for (let n = 0; n < t.tt.length; n++) a.tt.push(await this.openTab(t.tt[n]));
    if (t.st)
      for (let n = 0; n < t.st.length; n++) {
        let { Kt: o, zt: l } = await this.Ca(t.st[n]);
        a.st.push(l);
      }
    return await Promise.all(i.map((n) => A(n))), await this.ae(), a;
  }
  async lt(t) {
    await this.ae(),
      await Ct(1e4, "waitForAndAssertTabStructure", async (e) => {
        try {
          return await this.rt(t), !0;
        } catch (a) {
          return e > 3e3 && console.log(a), !1;
        }
      });
  }
  async Aa(t) {
    let e = await it();
    this.assert(e.some((a) => a.some((i) => [i.url, i.pendingUrl].some((n) => n === t) && i.pinned)));
  }
  async rt(t, e) {
    if (!t.tt && !t.other) throw new Error("invalid tabStruct");
    await this.ae();
    let a = await it(!0);
    if (!(await j())) throw new Error("No lastFocusedWindow found");
    let n = (await j()).tabs;
    if (t.tt) {
      let o = n.map((w) => [w.url, w.pendingUrl].find((u) => u)).join(" , "),
        l = t.tt.join(" , ");
      if (o !== l) {
        let w = `No match for tabs in last focused window (actual, expected): 
${o}

${l}`;
        throw new Error(w);
      }
    }
    if (t.other) {
      let o = a.map((w) => w.map((u) => [u.url, u.pendingUrl].find((h) => h)).join(" , ")).sort().join(`
`),
        l = t.other.map((w) => w.join(" , ")).sort().join(`
`);
      if (o !== l) {
        let w = `No match for tabs in non focused windows (actual, expected):
${o}

${l}`;
        throw new Error(w);
      }
    }
  }
  async Ma(t) {
    for (let e of Tt(5e3))
      try {
        await this.yt(t);
        return;
      } catch {
        await d(e);
      }
    throw new Error("waitForAndAssertActiveTab failed after time-out");
  }
  async nt() {
    for (let t of Tt(1e4)) {
      try {
        if ((await S()).some((e) => G(e.url)))
          try {
            await r.it("ping");
            return;
          } catch {}
      } catch (e) {
        console.log(e);
      }
      t > 200 && console.log(`waitForOneTabTabExistsAndRespondsToRpc pause for: ${t}`), await d(t);
    }
    throw new Error("waitForOneTabTabExistsAndRespondsToRpc failed after time-out");
  }
  async yt(t) {
    let e = (await kt()).url;
    if (e !== t) throw new Error(`active tab not as expected (actual, expected): "${e}", "${t}"`);
  }
  async openTab(t) {
    return await r.Je(t, t.includes("?title=" + encodeURIComponent("PIN::")));
  }
  async Ca(t) {
    let { Kt: e, zt: a } = await mt(t.map((i) => ({ url: i, pinned: i.includes("?title=" + encodeURIComponent("PIN::")) })));
    return { Kt: e, zt: a };
  }
  async bt() {
    await r.Wt(void 0);
  }
  async gt(t) {
    await B((await S()).find((e) => e.url === t));
  }
  async At(t) {
    let e = (await S()).find((a) => a.url === t);
    if (!e) throw new Error("Could not find tab with URL: " + t);
    await A(e);
  }
  Ee(t, e) {
    return e || (e = "localhost"), `http://${e}:3000/?title=${encodeURIComponent(t)}`;
  }
  et(t) {
    return this.Ee(this.uuid(), t);
  }
  Ht(t) {
    return this.Ee("PIN::" + this.uuid(), t);
  }
  uuid() {
    return "t---" + X(6, 16).toLowerCase();
  }
  assert(t, e) {
    if (!t) throw new Error("Assertion failed" + (e ? " " + e : ""));
  }
  Gt(t, e, a) {
    if (t !== e) throw new Error(`Assertion failed, ${t} !== ${e}, ${a}`);
  }
  Oa(t, e, a) {
    if (!(t > e)) throw new Error(`Assertion failed, ! (${t} > ${e}), ${a}`);
  }
}
let r = new L();
xe();
async function Ut() {
  setTimeout(() => Bt(), 3e4);
  try {
    let t = (await S()).find((a) => G(a.url)),
      e = t
        ? {
            index: t.index,
            windowId: t.windowId,
            pinned: t.pinned,
            active: t.active,
            updateDate: new Date().getTime(),
            updateEvent: "onUpdateAvailable"
          }
        : {};
    await r.oe(e);
  } catch (s) {
    console.log(s);
  }
  await Bt();
}
function xe() {
  Me(),
    chrome.runtime.onUpdateAvailable &&
      chrome.runtime.onUpdateAvailable.addListener(async () => {
        await Ut();
      }),
    chrome.runtime.onInstalled.addListener(async (a) => {
      await s();
    }),
    chrome.runtime.onStartup.addListener(async () => {
      await s();
    });
  async function s() {
    try {
      await r.Ne(), await C().clearAll(), await ye(), await ge(), await Y();
    } catch (a) {
      console.log("onStartup exception"), console.log(a);
    }
  }
  async function t(a) {
    await It(), await r.Wt(void 0, a);
  }
  chrome.action.onClicked.addListener(async (a) => t(a));
  const e = {
    displayOneTabMenu: async (a, i, n) => await r.$e(i?.windowId),
    sendAllTabsInCurrentWindowMenus: async (a, i, n) => await r.Wt(n[[D]], i),
    sendThisWebLinkMenus: async (a, i, n) => await r.je(a, i, n[[D]]),
    sendCurrentTabMenus: async (a, i, n) => await r.ne(n[[D]], i),
    sendTabsExceptThisMenus: async (a, i, n) => await r.ge(n[[D]], i),
    sendTabsToTheLeftMenus: async (a, i, n) => await r.Me(n[[D]], i),
    sendTabsToTheRightMenus: async (a, i, n) => await r.Se(n[[D]], i),
    sendAllTabsInAllWindowsMenus: async (a, i, n) => await r.Vt(n[[D]]),
    helpMenu: async (a, i, n) => await st(Gt + "/help", !1, !0),
    excludeWebSiteContextMenu: async (a, i, n) => {
      let o = await r.getSettings(),
        l = $(W((await j()).activeTab.url));
      r.Qt(l, o) ? await r.se(l) : await r.xe(l), await Q();
    }
  };
  chrome.contextMenus.onClicked.addListener(async (a, i) => {
    await It();
    let n = a.menuItemId,
      o = await r.Tt(),
      l = Object.entries(o).find(([w, u]) => {
        let h = Array.isArray(u) ? u.find((b) => b.id === n) : u;
        return h && h.id === n;
      });
    if (l) {
      let [w, u] = l,
        h = Array.isArray(u) ? u.find((p) => p.id === n) : u,
        b = Object.entries(e).find(([p, y]) => p === w);
      if (b) {
        let [, p] = b;
        await p(a, i, h);
      } else console.log(`no actionMenuItemType matched for menuItemType: ${w}`);
    } else console.log(`contextMenuState item not found for menuItemId ${n}`);
  }),
    we(),
    ue(() => Q()),
    ce();
}
async function ge() {
  let s = await M().get("lastSeenVersion");
  if (String(ut) !== String(s)) {
    await M().put("lastSeenVersion", ut);
    let t = await r.Ie();
    (await k(!1)).some((e) => !e.incognito) &&
      t.windowId &&
      new Date().getTime() - (t.updateDate || 0) < 1e3 * 60 &&
      (await Promise.all((await S()).filter((i) => G(i.url)).map((i) => A(i))),
      (await k(!1)).find((i) => !i.incognito && i.id === t.windowId) &&
        (await r.He({ windowId: t.windowId, index: t.index, url: c, active: !!t.active, pinned: !!t.pinned }))),
      await r.oe({});
  } else {
    let t = await r.getSettings();
    (await r.getState()).tabGroups.map((i) => i.tabsMeta.length).reduce((i, n) => i + n, 0) > 0 &&
      P("startupLaunch", t) === "displayOneTab" &&
      ((await k(!1)).find((i) => !i.incognito)
        ? await r.Z(!0)
        : chrome.windows.onCreated.addListener(async (i) => {
            try {
              await r.ce.Ct(),
                (await C().get("openOneTabOnStartTriggered")) ||
                  ((await k(!1)).find((n) => !n.incognito) && (await C().put("openOneTabOnStartTriggered", "true"), await r.Z(!0)));
            } finally {
              r.ce.release();
            }
          }));
  }
}
function Me() {
  chrome.runtime.onMessage.addListener((s, t, e) => {
    if (t.id === chrome.runtime.id && s.L)
      return r[s.type]
        ? r[s.type].constructor.name === "AsyncFunction"
          ? (s.args && (s.args = pt(s.args, Zt, void 0)),
            r[s.type](...s.args)
              .then((a) => {
                e({ result: a });
              })
              .catch((a) => {
                a.stack && console.log(a.stack), e({ P: a });
              }),
            !0)
          : (e(r[s.type](...s.args)), !1)
        : (e({ P: "No such core method found" }), !1);
  });
}
async function Je() {
  return;
  try {
    if (!(await Se())) return;
    await Promise.all(
      (await S())
        .filter((s) => s.pinned && !s.pendingUrl && !s.url)
        .map(async (s) => {
          await A(s);
        })
    );
  } catch (s) {
    console.log("cleanupSafariTabs exception"), console.log(s);
  }
}
async function Se() {
  return ((await chrome.permissions.getAll())?.origins ?? []).includes("*://*/*");
}
(globalThis.populateWithTestData = async () => {
  await r.Be(), console.log("populateWithTestData done");
}),
  (globalThis.testRestoreOnVersionUpdate = async () => {
    await r.qe();
  }),
  (globalThis.runTestSuite = async (s) => {
    await r.Ve(s);
  }),
  (globalThis.loopTestSuite = async (s, t) => {
    await r.Ke(s, t);
  });
