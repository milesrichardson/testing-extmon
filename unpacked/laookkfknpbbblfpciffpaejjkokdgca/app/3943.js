"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3943],
  {
    35757: (t, e, s) => {
      var i;
      s.d(e, { DY: () => r, OL: () => a, S9: () => i, iW: () => o, sY: () => n }),
        (function (t) {
          (t.List = "list"), (t.Detail = "detail");
        })(i || (i = {}));
      const a = ["tabs", "sessions"],
        n = {
          ERROR_STASH: "Oops, we couldn't save that session at this time.",
          ERROR_RESTORE: "Oops, we couldn't restore that session at this time.",
          ERROR_NO_OTHER_TABS: "No tabs to stash.",
          ERROR_DELETE: "Oops, there was a problem deleting that session.",
          ERROR_ALL_DELETE: "Oops, there was a problem deleting all sessions.",
          SUCCESSFUL_STASH_PARTIAL: " saved to a new session.",
          SUCCESSFUL_RESTORE_PARTIAL: " session restored.",
          SUCCESSFUL_ALL_DELETE: "All session deleted.",
          DELETE_PARTIAL: " session deleted."
        },
        r = "chrome://newtab/",
        o = "https://get.momentumdash.help/hc/en-us/articles/14474141114391";
    },
    25113: (t, e, s) => {
      s.d(e, { Z: () => n });
      var i = s(28149),
        a = s(1724);
      class n {
        constructor({ key: t, tabs: e, index: s, color: n = "grey", title: r = "", collapsed: o = !1 }) {
          (this.type = a.LL.Group),
            (this.key = t),
            (this.index = s),
            (this.tabs = e.map((t) => new i.O(t)).sort((t, e) => t.index - e.index)),
            (this.color = n),
            (this.title = r),
            (this.collapsed = o);
        }
      }
    },
    9128: (t, e, s) => {
      s.d(e, { z: () => n });
      var i = s(80809),
        a = s(1724);
      class n {
        constructor({ id: t, name: e, windows: s, activeWindowKey: i, browser: n, dateCreated: r }) {
          (this.windows = []),
            (this.id = t),
            (this.name = e),
            (this.windows = s.map((t) => new a.Rz(t))),
            (this.activeWindowKey = i),
            (this.browser = n),
            (this.dateCreated = r);
        }
        get totalTabCount() {
          return this.windows.map((t) => t.tabCount).reduce((t, e) => t + e);
        }
        get displayName() {
          return this.name || i.Z.getFriendlyDateTime(new Date(this.dateCreated));
        }
        get sessionDescriptionTabs() {
          const t = this.totalTabCount;
          return `${t} tab${t > 1 ? "s" : ""}`;
        }
        get sessionDescriptionWindows() {
          return `${this.windows.length} window${this.windows.length > 1 ? "s" : ""}`;
        }
      }
    },
    28149: (t, e, s) => {
      s.d(e, { H: () => n, O: () => a });
      var i = s(1724);
      class a {
        constructor({ key: t, title: e, url: s, pinned: a, index: n }) {
          (this.type = i.LL.Tab), (this.key = t), (this.title = e), (this.url = s), (this.pinned = a), (this.index = n);
        }
      }
      const n = (t) =>
        !("object" != typeof t || !t) &&
        Object.entries({ key: "number", title: "string", url: "string", pinned: "boolean", index: "number" }).every(
          ([e, s]) => e in t && typeof t[e] === s
        ) &&
        t.type === i.LL.Tab;
    },
    1724: (t, e, s) => {
      s.d(e, { LL: () => i, Nw: () => r, Rz: () => o, ZQ: () => d });
      var i,
        a = s(25113),
        n = s(28149);
      !(function (t) {
        (t.Tab = "Tab"), (t.Group = "Group");
      })(i || (i = {}));
      const r = ["app", "devtools"];
      class o {
        constructor({
          key: t,
          activeTabKey: e,
          state: s,
          type: i,
          left: r,
          top: o,
          width: d,
          height: h,
          browserSessionKey: w,
          tabsAndGroups: c
        }) {
          (this.tabsAndGroups = []),
            (this.key = t),
            (this.activeTabKey = e),
            (this.state = s),
            (this.type = i),
            (this.left = r),
            (this.top = o),
            (this.width = d),
            (this.height = h),
            w && (this.browserSessionKey = w),
            (this.tabsAndGroups = c.map((t) => ("tabs" in t ? new a.Z(t) : new n.O(t))).sort((t, e) => t.index - e.index));
        }
        get tabCount() {
          let t = 0;
          return (
            this.tabsAndGroups.forEach((e) => {
              t += e instanceof n.O ? 1 : e.tabs.length;
            }),
            t
          );
        }
      }
      const d = (t) =>
        !("object" != typeof t || !t) &&
        Object.entries({
          key: "number",
          state: "string",
          type: "string",
          left: "number",
          top: "number",
          width: "number",
          height: "number"
        }).every(([e, s]) => e in t && typeof t[e] === s);
    },
    94787: (t, e, s) => {
      s.d(e, { A: () => l });
      var i = s(9128),
        a = s(1724),
        n = s(80809),
        r = s(28149),
        o = s(25113),
        d = s(77140),
        h = s(35757);
      class w {
        constructor(t) {
          this.dataService = t;
        }
        get(t) {
          this.dataService.get(t);
        }
        create(t) {
          return this.dataService.create(t.id, t);
        }
        update(t, e, s = {}) {
          return this.dataService.update(t, e, s);
        }
        delete(t) {
          return this.dataService.delete(t);
        }
        async ensurePermissions() {
          return (
            !!(await d.H.permissions.contains({ permissions: h.OL })) ||
            new Promise((t) => {
              m.cmd("modal.open", "PERMISSION_REQUEST", {
                widgetName: "Tab Stash",
                permissionExplanation: "To save your tabs for later",
                permissions: { permissions: h.OL },
                resolve: t
              });
            })
          );
        }
        renameIdToKey({ id: t, ...e }) {
          return { ...e, key: t };
        }
        async closeWindowsAndSetSessionIds(t) {
          for (const e of t.windows) {
            await d.H.windows.remove(e.key);
            const t = await d.H.sessions.getLastClosedSessionId().catch((t) => {
              console.error(t);
            });
            t && (e.browserSessionKey = t);
          }
          return t;
        }
        async restoreSession(t) {
          const e = t.windows.filter((e) => e.key !== t.activeWindowKey),
            s = t.windows.filter((e) => e.key === t.activeWindowKey),
            i = await d.H.tabs.query({ currentWindow: !0 }),
            a = i.find((t) => t.active);
          if (!a || !a.id) throw new Error("Could not find active tab id from current window");
          let n = a.windowId;
          for (const r of [...e, ...s]) {
            const e = await this.restoreWindow(r, t.browser);
            r.key === t.activeWindowKey &&
              1 === i.length &&
              e.id &&
              (a.pinned && (await d.H.tabs.update(a.id, { pinned: !1 })),
              await d.H.tabs.moveToWindow(a.id, e.id),
              (n = e.id),
              a.pinned && (await d.H.tabs.update(a.id, { pinned: !0 })));
          }
          await this.focusTabAndWindow(a.id, n);
        }
        async getSessionFromWindows() {
          const t = await d.H.tabs.query({ currentWindow: !0 }),
            e = t.find((t) => t.active);
          let s = -1;
          e && 1 !== t.length && e.id && (await this.pullTabInNewWindow(e), (s = e.windowId));
          const r = {
              id: n.Z.uuidv4(),
              name: "",
              windows: [],
              activeWindowKey: s,
              browser: this.getCurrentBrowserOrigin(),
              dateCreated: new Date().toISOString()
            },
            o = await d.H.windows.getAll();
          for (let t of o)
            if (!(t.focused || (t.type && a.Nw.includes(t.type)))) {
              if (((t = this.renameIdToKey(t)), !(0, a.ZQ)(t)))
                throw new Error(`window returned by browser (${r.browser}) does not satisfy IWindow type`);
              await this.setTabsDataForWindow(t, r.browser), r.windows.push(t);
            }
          return new i.z(r);
        }
        async openPartialSession(t) {
          t instanceof a.Rz
            ? await this.fallbackRestoreWindow(t, this.getCurrentBrowserOrigin())
            : t instanceof o.Z
            ? await this.createGroup(t)
            : t instanceof r.O && (await d.H.tabs.create({ url: t.url, pinned: t.pinned }));
        }
        async createGroup(t) {
          const e = [];
          for (const s of t.tabs) {
            const t = await d.H.tabs.create({ url: s.url, pinned: s.pinned });
            t.id && e.push(t.id);
          }
          void 0 !== chrome.tabs.group && (await d.H.tabs.group({ tabIds: e }));
        }
        async pullTabInNewWindow(t) {
          const e = t.id;
          if (!e) throw new Error("Could not read tab id when pulling out tab from window");
          const s = await d.H.windows.get(t.windowId),
            i = { left: s.left, top: s.top, width: s.width, height: s.height };
          let a;
          if (
            ("normal" === s.state && (a = await d.H.windows.create({ tabId: e, ...i })),
            a || (a = await d.H.windows.create({ tabId: e })),
            !a)
          )
            throw new Error("Could not create window when pulling out tab from window");
          t.pinned && (await d.H.tabs.update(e, { pinned: !0 }));
        }
        async setTabsDataForWindow(t, e) {
          var s, i;
          const n = (await d.H.tabs.query({ windowId: t.key })).map((t) => {
              if ((Object.assign(t, { type: a.LL.Tab }), (t = this.renameIdToKey(t)), !(0, r.H)(t)))
                throw new Error(`tab returned by browser (${e}) does not satisfy ITab type`);
              return [t.url, e + "://newtab/"].includes(window.location.href) && (t.url = h.DY), t;
            }),
            o = [];
          t.activeTabKey = (null === (s = n.find((t) => t.active)) || void 0 === s ? void 0 : s.id) || -1;
          for (let t = 0; t < n.length; t++) {
            const e = n[t];
            if (e)
              if (~e.groupId && void 0 !== e.groupId) {
                const s = { key: e.groupId, index: 0, type: a.LL.Group, tabs: n.filter((t) => t.groupId === e.groupId) };
                (s.index = Number(null === (i = s.tabs[0]) || void 0 === i ? void 0 : i.index)), (t += s.tabs.length - 1), o.push(s);
              } else o.push(e);
          }
          t.tabsAndGroups = o;
        }
        async restoreWindow(t, e) {
          const s = t.browserSessionKey;
          let i;
          return s && (i = await d.H.sessions.restoreWindow(s)), i || (i = await this.fallbackRestoreWindow(t, e)), i;
        }
        async fallbackRestoreWindow(t, e) {
          var s, i, n, h, w;
          let c;
          const l = {},
            { tabsAndGroups: u, activeTabKey: p, key: b, browserSessionKey: y, ...m } = t,
            g = u.map((t) => (t instanceof r.O ? [t] : t.tabs)).flat();
          if (
            (Object.assign(l, m),
            l.type && a.Nw.includes(l.type) && (l.type = "normal"),
            (l.url = this.getUrlArrayForWindowCreateFromTabs(g, e)),
            ["maximized", "minimized", "fullscreen"].includes(t.state) && ["width", "height", "left", "top"].forEach((t) => delete l[t]),
            (c = await d.H.windows.create(l)),
            c || (["left", "top"].forEach((t) => delete l[t]), (c = await d.H.windows.create(l))),
            c || (["width", "height"].forEach((t) => delete l[t]), (c = await d.H.windows.create(l))),
            !c)
          )
            throw new Error("Could not create window");
          if (void 0 !== chrome.tabs.group)
            for (const t of u) {
              if (!(t instanceof o.Z)) continue;
              const e = t.index,
                i = e + t.tabs.length,
                a = {
                  tabIds: null === (s = c.tabs) || void 0 === s ? void 0 : s.slice(e, i).map((t) => t.id),
                  createProperties: { windowId: c.id }
                };
              await d.H.tabs.group(a);
            }
          for (let t = 0; t < g.length; t++) {
            const e = g[t];
            if (null == e ? void 0 : e.pinned) {
              const e = null === (n = null === (i = c.tabs) || void 0 === i ? void 0 : i[t]) || void 0 === n ? void 0 : n.id;
              if (!e) continue;
              await d.H.tabs.update(e, { pinned: !0 });
            }
          }
          const f = g.find((t) => t.key === p);
          if (f) {
            const t = g.indexOf(f),
              e = null === (w = null === (h = c.tabs) || void 0 === h ? void 0 : h[t]) || void 0 === w ? void 0 : w.id;
            e && (await d.H.tabs.update(e, { active: !0 }));
          }
          return c;
        }
        getUrlArrayForWindowCreateFromTabs(t, e) {
          const s = (t) => t.startsWith(e + "-extension://") || t.startsWith(e + "://"),
            i = t
              .map((t) =>
                t.url === h.DY && n.Z.isFirefox() ? "/dashboard.html" : s(t.url) ? t.url.replace(e, this.getCurrentBrowserOrigin()) : t.url
              )
              .filter((t) => !((s(t) && n.Z.isFirefox()) || t.startsWith("about:")));
          return 0 === i.length && i.push("/dashboard.html"), i;
        }
        getCurrentBrowserOrigin() {
          return window.location.href.split("-")[0] || "chrome";
        }
        async focusTabAndWindow(t, e) {
          t && (await d.H.tabs.update(t, { active: !0 })), e && (await d.H.windows.update(e, { focused: !0 }));
        }
      }
      var c = s(34145);
      const l = () => ({ tabStashService: new w(new c.U("tabs")) });
    },
    63943: (t, e, s) => {
      s.r(e), s.d(e, { default: () => h, makeTabsStore: () => o, useTabsStore: () => d });
      var i = s(28692),
        a = s(94787),
        n = s(9128),
        r = s(20144);
      const o = (t = (0, a.A)().tabStashService) =>
          (0, i.Q_)("tabs", {
            state: () => ({ data: {}, loading: !1, loaded: !1, activeItemId: "" }),
            getters: {
              getItems: (t) =>
                Object.values(t.data)
                  .map((t) => new n.z(t))
                  .sort((t, e) => Date.parse(e.dateCreated) - Date.parse(t.dateCreated)),
              getItemById: (t) => (e) => {
                const s = t.data[e];
                return s ? new n.z(s) : null;
              }
            },
            actions: {
              refresh() {
                (this.loading = !0),
                  t.get({
                    success: (t) => {
                      t.forEach((t) => r.ZP.set(this.data, t.id, t)), (this.loaded = !0), (this.loading = !1);
                    }
                  });
              },
              async stashSession() {
                if (!(await t.ensurePermissions())) return;
                const e = await t.getSessionFromWindows();
                return (
                  0 === e.windows.length ||
                    (await this.create(e), await t.closeWindowsAndSetSessionIds(e), await this.update(e.id, { windows: e.windows })),
                  e
                );
              },
              async restoreSession(e) {
                if (await t.ensurePermissions()) return await t.restoreSession(e), await this.delete(e.id), !0;
              },
              async create(e) {
                r.ZP.set(this.data, e.id, e), await t.create(e);
              },
              async delete(e) {
                r.ZP.delete(this.data, e), await t.delete(e);
              },
              async update(e, s) {
                const i = this.data[e];
                if (!i) throw new Error(`No data found for ${e}`);
                const a = { ...i, ...s };
                r.ZP.set(this.data, e, a);
                const n = Object.keys(s).join(",");
                return await t.update(e, a, { queryParams: { update_mask: n } }), a;
              }
            }
          }),
        d = o(),
        h = d;
    },
    34145: (t, e, s) => {
      s.d(e, { U: () => o });
      var i = s(42935),
        a = s(24960),
        n = s(67652),
        r = s(35597);
      class o {
        constructor(t, { queryParams: e = {}, path: s = "", mode: i = n.Z.Sync } = {}) {
          (this.type = t), (this.queryParams = e), (this.path = s), (this.mode = i), (this.dataSync = a.Z);
        }
        get({ path: t = this.path || this.type, mode: e = this.mode, success: s, failure: i, queryParams: a = {} }) {
          (async () => {
            var o;
            e === n.Z.Timestamp &&
              ((e = (await r.Z.requiresSync(this.type)) ? n.Z.Sync : n.Z.Cache), r.Z.addUpdateListener(this.type, this.refresh.bind(this))),
              (t += this.buildQueryString((null === (o = this.queryParams) || void 0 === o ? void 0 : o.get) || {}, a));
            const d = [this.type, { path: t, env: this.getEnv(), mode: e }];
            e === n.Z.Server
              ? this.dataSync.sendMessage({ handler: "get", args: d }).then(s).catch(i)
              : this.dataSync.sendRecurringCrossTabMessage({
                  msgId: this.type + ":refreshed",
                  handler: "get",
                  args: d,
                  success: s,
                  failure: i
                });
          })();
        }
        refresh({ path: t = this.path || this.type, queryParams: e = {} } = {}) {
          return new Promise((s, i) => this.get({ mode: n.Z.Server, path: t, queryParams: e, success: s, failure: i }));
        }
        async create(t, e, { path: s = this.path || this.type, mode: i = this.mode } = {}) {
          const a = [this.type, t, e];
          a.push({ path: s, mode: i, env: this.getEnv() }), await this.dataSync.sendMessage({ handler: "create", args: a });
        }
        async update(t, e, { path: s = this.path || this.type, mode: i = this.mode, queryParams: a = {} } = {}) {
          var n;
          const r = this.buildQueryString((null === (n = this.queryParams) || void 0 === n ? void 0 : n.update) || {}, a),
            o = [this.type, t, e];
          o.push({ path: s, mode: i, env: this.getEnv(), queryString: r }), await this.dataSync.sendMessage({ handler: "update", args: o });
        }
        async delete(t, { path: e = this.path || this.type, mode: s = this.mode } = {}) {
          const i = [this.type, t];
          i.push({ path: e, mode: s, env: this.getEnv() }), await this.dataSync.sendMessage({ handler: "delete", args: i });
        }
        getEnv() {
          return {
            token: localStorage.getItem("token"),
            clientUuid: localStorage.getItem("client_uuid"),
            apiUrl: m.globals.urlRootApi,
            version: m.globals.version,
            tabId: i.Z
          };
        }
        buildQueryString(...t) {
          const e = new URLSearchParams(Object.assign({}, ...t)).toString();
          return e ? "?" + e : "";
        }
      }
    }
  }
]);
