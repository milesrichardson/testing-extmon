"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1886],
  {
    78025: (t, e, i) => {
      i.d(e, { cw: () => d, dZ: () => n, ll: () => r, nW: () => o, vt: () => a });
      var s = i(24749);
      function n(t) {
        return t.type === s.Un.LinkGroup && !t.isRoot;
      }
      function a(t) {
        return t.type === s.Un.Legacy;
      }
      function r(t) {
        return t.type === s.Un.Link;
      }
      function d(t) {
        return t.type === s.Un.LinkGroup && "isRoot" in t && t.isRoot && !("isTeamRoot" in t && t.isTeamRoot);
      }
      function o(t) {
        return t.type === s.Un.LinkGroup && "isTeamRoot" in t && t.isTeamRoot;
      }
    },
    91488: (t, e, i) => {
      i.d(e, { R: () => n });
      var s = i(25038);
      class n {
        constructor({ id: t, url: e, title: i, pinned: n = !1, readOnly: a = !1 } = {}) {
          if (!t || void 0 === i || !e) throw new Error("Legacy link created with incomplete data");
          (this.id = t), (this.links = [new s.r({ url: e })]), (this.title = i), (this.pinned = !!n), (this.readOnly = a);
        }
        get hasManyLinks() {
          return this.links.length > 1;
        }
      }
    },
    25038: (t, e, i) => {
      i.d(e, { G: () => d, r: () => r });
      var s = i(89608),
        n = i(84315),
        a = i(24749);
      class r {
        constructor({ id: t = (0, n.uuidv4)(), url: e = "" } = {}) {
          (this.id = t), (this.url = e);
        }
      }
      function d({ url: t }, e) {
        const i = "links" + (void 0 === e ? "" : `.${e}`);
        if (!t) throw new s.B({ message: a.XO.URL_EMPTY, input: i });
        if (!m.utils.isValidUrl(t)) throw new s.B({ message: a.XO.URL_INVALID, input: i });
      }
    },
    72502: (t, e, i) => {
      i.d(e, { p: () => d, G: () => o });
      var s = i(89608),
        n = i(25038),
        a = i(24749);
      function r() {
        const t = [];
        for (let e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16);
        const e = crypto.getRandomValues(new Uint8Array(16));
        return (
          (e[6] = (15 & e[6]) | 64),
          (e[8] = (63 & e[8]) | 128),
          t[e[0]] +
            t[e[1]] +
            t[e[2]] +
            t[e[3]] +
            "-" +
            t[e[4]] +
            t[e[5]] +
            "-" +
            t[e[6]] +
            t[e[7]] +
            "-" +
            t[e[8]] +
            t[e[9]] +
            "-" +
            t[e[10]] +
            t[e[11]] +
            t[e[12]] +
            t[e[13]] +
            t[e[14]] +
            t[e[15]]
        );
      }
      class d {
        constructor({ id: t = r(), links: e = [], title: i = "", pinned: s = !1, readOnly: a = !1 } = {}) {
          (this.id = t), (this.links = e.map((t) => new n.r(t))), (this.title = i), (this.pinned = !!s), (this.readOnly = a);
        }
        get hasManyLinks() {
          return this.links.length > 1;
        }
      }
      function o({ title: t, links: e }) {
        if (0 === t.length) throw new s.B({ message: a.XO.TITLE_EMPTY, input: "title" });
        if (0 === e.length) throw new s.B({ message: a.XO.URL_EMPTY, input: "links.0" });
        e.forEach((t, i) => {
          (t.url || 1 === e.length) && (0, n.G)(t, i);
        });
      }
    },
    96380: (t, e, i) => {
      i.d(e, { km: () => h, m0: () => o, wc: () => l });
      var s = i(78025),
        n = i(24749),
        a = i(72502),
        r = i(25038),
        d = i(48626);
      class o {
        constructor(t) {
          this.dataService = t;
        }
        get(t) {
          this.dataService.get({
            ...t,
            success: (e) => {
              (async () => {
                var i;
                1 === e.filter(s.cw).length
                  ? t.success(e)
                  : 0 !== (null === (i = await d.Z.get("links")) || void 0 === i ? void 0 : i.cache) &&
                    (await d.Z.patch("links", { cache: 0 }), this.dataService.get(t));
              })();
            }
          });
        }
        create(t) {
          return this.dataService.create(t.id, t);
        }
        update(t, e) {
          return this.dataService.update(t, e);
        }
        delete(t) {
          return this.dataService.delete(t);
        }
      }
      function h(t) {
        return [
          { id: t.id, title: t.title, pinned: t.pinned, type: n.Un.LinkGroup, readOnly: !1, linksOrderIds: t.links.map((t) => t.id) },
          ...t.links.map((e) => ({ id: e.id, type: n.Un.Link, url: e.url, parentLinkId: t.id }))
        ];
      }
      function l(t) {
        const e = Object.assign(new a.p(), t);
        return (
          (e.links = e.links
            .filter((t) => t.url.length)
            .map((t) => Object.assign(new r.r(), t, { url: t.url.includes("://") ? t.url : "https://" + t.url }))),
          e
        );
      }
    },
    71886: (t, e, i) => {
      i.r(e), i.d(e, { default: () => m, makeLinksStore: () => u, useLinksStore: () => p });
      var s = i(63420),
        n = i(20144),
        a = i(78025),
        r = i(96380),
        d = i(34145),
        o = i(67652),
        h = i(72502),
        l = i(94119),
        c = i(91488);
      const u = (t = (() => ({ linksService: new r.m0(new d.U("links", { mode: o.Z.Timestamp })) }))().linksService) =>
          (0, s.Q_)("links", {
            state: () => ({ data: {}, loading: !1, loaded: !1, activeItemId: "", activeItem: null, addMockPlugin: !0 }),
            getters: {
              service: () => t,
              getItems() {
                return ({ pinned: t = !1, team: e = !1 } = {}) => {
                  var i;
                  const s = e ? this.getTeamRoot : this.getRoot;
                  if (!s) return [];
                  const n = [];
                  return (
                    null === (i = s.linksOrderIds) ||
                      void 0 === i ||
                      i.forEach((e) => {
                        const i = this.getItemById(e);
                        if (i && ((0, a.dZ)(i) || (0, a.vt)(i)) && ((e) => ("pinned" in e ? e.pinned === t : !t))(i)) {
                          let t;
                          (0, a.dZ)(i) ? (t = this.buildLinkGroup(i)) : (0, a.vt)(i) && (t = new c.R(i)), t && t.links.length && n.push(t);
                        }
                      }),
                    n
                  );
                };
              },
              getUnPinnedItems() {
                return this.getItems();
              },
              getPinnedItems() {
                return this.getItems({ pinned: !0 });
              },
              getUnPinnedTeamItems() {
                return this.getItems({ team: !0 });
              },
              getPinnedTeamItems() {
                return this.getItems({ pinned: !0, team: !0 });
              },
              getRoot: (t) => Object.values(t.data).find(a.cw) || null,
              getTeamRoot: (t) => Object.values(t.data).find(a.nW) || null,
              getItemById: (t) => (e) => t.data[e] || null,
              buildLinkGroup() {
                return (t) => {
                  var e;
                  const i = [];
                  null === (e = t.linksOrderIds) ||
                    void 0 === e ||
                    e.forEach((t) => {
                      const e = this.getItemById(t);
                      e && (0, a.ll)(e) && i.push(e);
                    });
                  const s = { ...t, links: i };
                  return new h.p(s);
                };
              },
              adding() {
                return !(!this.activeItem || this.activeItemId);
              }
            },
            actions: {
              addItem() {
                this.activeItem = new h.p();
              },
              editItem(t) {
                this.activeItemId = t;
                const e = this.getItemById(t);
                e && (0, a.dZ)(e) && (this.activeItem = this.buildLinkGroup(e));
              },
              clearActiveItem() {
                (this.activeItem = null), (this.activeItemId = "");
              },
              refresh() {
                (this.loading = !0),
                  t.get({
                    success: (t) => {
                      Object.keys(this.data).forEach((e) => {
                        e in t || delete this.data[e];
                      }),
                        t.forEach((t) => n.ZP.set(this.data, t.id, t)),
                        (this.loaded = !0),
                        (this.loading = !1);
                    }
                  });
              },
              async updatePartialRootLinksOrderIds(t) {
                const e = this.getRoot;
                e && (await this.update(e.id, { linksOrderIds: [...new Set([...t, ...e.linksOrderIds])] }));
              },
              async deleteLinkGroup(t) {
                const e = this.getItemById(t);
                if (!e || (!(0, a.dZ)(e) && !(0, a.vt)(e))) throw new Error(`Can't find LinkGroup with id ${t}`);
                await Promise.allSettled(
                  Object.values(this.data)
                    .filter((i) => ((0, a.ll)(i) && i.parentLinkId === t) || i === e)
                    .map((t) => this.delete(t.id))
                );
              },
              async processMutations(t) {
                t.filter((t) => t.method !== l.MutationMethod.Delete && "linksOrderIds" in t.data).forEach((e) => {
                  if (e.method === l.MutationMethod.Create && (0, a.dZ)(e.data)) {
                    const i = e.data.linksOrderIds;
                    t.push({ method: l.MutationMethod.Update, id: e.id, data: { linksOrderIds: i } }),
                      Object.assign(e.data, { linksOrderIds: [] });
                    const s = this.getRoot;
                    if (!s) throw new Error("Can't fint RootLink");
                    t.push({ method: l.MutationMethod.Update, id: s.id, data: { linksOrderIds: [...s.linksOrderIds, e.id] } });
                  } else e.method === l.MutationMethod.Update && (t = t.filter((t) => t !== e)).push(e);
                });
                for (const e of t)
                  switch (e.method) {
                    case l.MutationMethod.Update:
                      await this.update(e.id, e.data);
                      break;
                    case l.MutationMethod.Create:
                      if ((0, a.cw)(e.data)) throw new Error("Can't create root links");
                      if ((0, a.nW)(e.data)) throw new Error("Can't create root links");
                      if ((0, a.vt)(e.data)) throw new Error("Can't create legacy links");
                      await this.create(e.data);
                      break;
                    case l.MutationMethod.Delete: {
                      const t = this.getItemById(e.id);
                      if (!t) return;
                      if ((0, a.cw)(t)) throw new Error("Can't delete root links");
                      if ((0, a.nW)(t)) throw new Error("Can't delete team root links");
                      await this.delete(e.id);
                      break;
                    }
                  }
              },
              async create(e) {
                return n.ZP.set(this.data, e.id, e), await t.create(e), e;
              },
              async update(e, i) {
                const s = this.getItemById(e);
                if (!s) throw new Error(`No data found for ${e}`);
                const a = { ...s, ...i };
                return n.ZP.set(this.data, e, a), await t.update(e, i), a;
              },
              async delete(e) {
                return n.ZP.delete(this.data, e), t.delete(e);
              }
            }
          }),
        p = u(),
        m = p;
    },
    34145: (t, e, i) => {
      i.d(e, { U: () => d });
      var s = i(42935),
        n = i(24960),
        a = i(67652),
        r = i(35597);
      class d {
        constructor(t, { queryParams: e = {}, path: i = "", mode: s = a.Z.Sync } = {}) {
          (this.type = t), (this.queryParams = e), (this.path = i), (this.mode = s), (this.dataSync = n.Z);
        }
        get({ path: t = this.path || this.type, mode: e = this.mode, success: i, failure: s, queryParams: n = {} }) {
          (async () => {
            var d;
            e === a.Z.Timestamp &&
              ((e = (await r.Z.requiresSync(this.type)) ? a.Z.Sync : a.Z.Cache), r.Z.addUpdateListener(this.type, this.refresh.bind(this))),
              (t += this.buildQueryString((null === (d = this.queryParams) || void 0 === d ? void 0 : d.get) || {}, n));
            const o = [this.type, { path: t, env: this.getEnv(), mode: e }];
            e === a.Z.Server
              ? this.dataSync.sendMessage({ handler: "get", args: o }).then(i).catch(s)
              : this.dataSync.sendRecurringCrossTabMessage({
                  msgId: this.type + ":refreshed",
                  handler: "get",
                  args: o,
                  success: i,
                  failure: s
                });
          })();
        }
        refresh({ path: t = this.path || this.type, queryParams: e = {} } = {}) {
          return new Promise((i, s) => this.get({ mode: a.Z.Server, path: t, queryParams: e, success: i, failure: s }));
        }
        async create(t, e, { path: i = this.path || this.type, mode: s = this.mode } = {}) {
          const n = [this.type, t, e];
          n.push({ path: i, mode: s, env: this.getEnv() }), await this.dataSync.sendMessage({ handler: "create", args: n });
        }
        async update(t, e, { path: i = this.path || this.type, mode: s = this.mode, queryParams: n = {} } = {}) {
          var a;
          const r = this.buildQueryString((null === (a = this.queryParams) || void 0 === a ? void 0 : a.update) || {}, n),
            d = [this.type, t, e];
          d.push({ path: i, mode: s, env: this.getEnv(), queryString: r }), await this.dataSync.sendMessage({ handler: "update", args: d });
        }
        async delete(t, { path: e = this.path || this.type, mode: i = this.mode } = {}) {
          const s = [this.type, t];
          s.push({ path: e, mode: i, env: this.getEnv() }), await this.dataSync.sendMessage({ handler: "delete", args: s });
        }
        getEnv() {
          return {
            token: localStorage.getItem("token"),
            clientUuid: localStorage.getItem("client_uuid"),
            apiUrl: m.globals.urlRootApi,
            version: m.globals.version,
            tabId: s.Z
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
