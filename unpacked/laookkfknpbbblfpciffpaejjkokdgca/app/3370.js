"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3370],
  {
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
      i.d(e, { km: () => o, m0: () => d, wc: () => h });
      var s = i(24749),
        n = i(72502),
        a = i(25038),
        r = i(48626);
      class d {
        constructor(t) {
          this.dataService = t;
        }
        get(t) {
          this.dataService.get({
            ...t,
            success: (e) => {
              (async () => {
                var i;
                e.find((t) => t.isRoot)
                  ? t.success(e)
                  : 0 !== (null === (i = await r.Z.get("links")) || void 0 === i ? void 0 : i.cache) &&
                    (await r.Z.patch("links", { cache: 0 }), this.dataService.get(t));
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
      function o(t) {
        return [
          { id: t.id, title: t.title, pinned: t.pinned, type: s.Un.LinkGroup, readOnly: !1, linksOrderIds: t.links.map((t) => t.id) },
          ...t.links.map((e) => ({ id: e.id, type: s.Un.Link, url: e.url, parentLinkId: t.id }))
        ];
      }
      function h(t) {
        const e = Object.assign(new n.p(), t);
        return (
          (e.links = e.links
            .filter((t) => t.url.length)
            .map((t) => Object.assign(new a.r(), t, { url: t.url.includes("://") ? t.url : "https://" + t.url }))),
          e
        );
      }
    },
    23370: (t, e, i) => {
      i.r(e), i.d(e, { default: () => v, makeLinksStore: () => k, useLinksStore: () => I });
      var s = i(28692),
        n = i(20144),
        a = i(24749);
      function r(t) {
        return t.type === a.Un.LinkGroup && !t.isRoot;
      }
      function d(t) {
        return t.type === a.Un.Legacy;
      }
      function o(t) {
        return t.type === a.Un.Link;
      }
      function h(t) {
        return t.type === a.Un.LinkGroup && "isRoot" in t && t.isRoot && !("isTeamRoot" in t && t.isTeamRoot);
      }
      function l(t) {
        return t.type === a.Un.LinkGroup && "isTeamRoot" in t && t.isTeamRoot;
      }
      var u = i(96380),
        c = i(34145),
        p = i(67652),
        m = i(72502),
        g = i(94119),
        y = i(91488);
      const k = (t = (() => ({ linksService: new u.m0(new c.U("links", { mode: p.Z.Timestamp })) }))().linksService) =>
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
                        if (i && (r(i) || d(i)) && ((e) => ("pinned" in e ? e.pinned === t : !t))(i)) {
                          let t;
                          r(i) ? (t = this.buildLinkGroup(i)) : d(i) && (t = new y.R(i)), t && t.links.length && n.push(t);
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
              getRoot: (t) => Object.values(t.data).find(h) || null,
              getTeamRoot: (t) => Object.values(t.data).find(l) || null,
              getItemById: (t) => (e) => t.data[e] || null,
              buildLinkGroup() {
                return (t) => {
                  var e;
                  const i = [];
                  null === (e = t.linksOrderIds) ||
                    void 0 === e ||
                    e.forEach((t) => {
                      const e = this.getItemById(t);
                      e && o(e) && i.push(e);
                    });
                  const s = { ...t, links: i };
                  return new m.p(s);
                };
              },
              adding() {
                return !(!this.activeItem || this.activeItemId);
              }
            },
            actions: {
              addItem() {
                this.activeItem = new m.p();
              },
              editItem(t) {
                this.activeItemId = t;
                const e = this.getItemById(t);
                e && r(e) && (this.activeItem = this.buildLinkGroup(e));
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
                if (!e || (!r(e) && !d(e))) throw new Error(`Can't find LinkGroup with id ${t}`);
                await Promise.allSettled(
                  Object.values(this.data)
                    .filter((i) => (o(i) && i.parentLinkId === t) || i === e)
                    .map((t) => this.delete(t.id))
                );
              },
              async processMutations(t) {
                t.filter((t) => t.method !== g.MutationMethod.Delete && "linksOrderIds" in t.data).forEach((e) => {
                  if (e.method === g.MutationMethod.Create && r(e.data)) {
                    const i = e.data.linksOrderIds;
                    t.push({ method: g.MutationMethod.Update, id: e.id, data: { linksOrderIds: i } }),
                      Object.assign(e.data, { linksOrderIds: [] });
                    const s = this.getRoot;
                    if (!s) throw new Error("Can't fint RootLink");
                    t.push({ method: g.MutationMethod.Update, id: s.id, data: { linksOrderIds: [...s.linksOrderIds, e.id] } });
                  } else e.method === g.MutationMethod.Update && (t = t.filter((t) => t !== e)).push(e);
                });
                for (const e of t)
                  switch (e.method) {
                    case g.MutationMethod.Update:
                      await this.update(e.id, e.data);
                      break;
                    case g.MutationMethod.Create:
                      if (h(e.data)) throw new Error("Can't create root links");
                      if (l(e.data)) throw new Error("Can't create root links");
                      if (d(e.data)) throw new Error("Can't create legacy links");
                      await this.create(e.data);
                      break;
                    case g.MutationMethod.Delete: {
                      const t = this.getItemById(e.id);
                      if (!t) return;
                      if (h(t)) throw new Error("Can't delete root links");
                      if (l(t)) throw new Error("Can't delete team root links");
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
        I = k(),
        v = I;
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
