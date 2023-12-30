"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6781, 7652],
  {
    84722: (e, t, s) => {
      s.d(t, { V: () => i });
      const i = (0, s(95756).v)("notes", { list: { defaultView: !0, order: 1 }, deleted: { order: 2 } });
    },
    34145: (e, t, s) => {
      s.d(t, { U: () => o });
      var i = s(42935),
        a = s(24960),
        r = s(67652),
        n = s(35597);
      class o {
        constructor(e, { queryParams: t = {}, path: s = "", mode: i = r.Z.Sync } = {}) {
          (this.type = e), (this.queryParams = t), (this.path = s), (this.mode = i), (this.dataSync = a.Z);
        }
        get({ path: e = this.path || this.type, mode: t = this.mode, success: s, failure: i, queryParams: a = {} }) {
          (async () => {
            var o;
            t === r.Z.Timestamp &&
              ((t = (await n.Z.requiresSync(this.type)) ? r.Z.Sync : r.Z.Cache), n.Z.addUpdateListener(this.type, this.refresh.bind(this))),
              (e += this.buildQueryString((null === (o = this.queryParams) || void 0 === o ? void 0 : o.get) || {}, a));
            const h = [this.type, { path: e, env: this.getEnv(), mode: t }];
            t === r.Z.Server
              ? this.dataSync.sendMessage({ handler: "get", args: h }).then(s).catch(i)
              : this.dataSync.sendRecurringCrossTabMessage({
                  msgId: this.type + ":refreshed",
                  handler: "get",
                  args: h,
                  success: s,
                  failure: i
                });
          })();
        }
        refresh({ path: e = this.path || this.type, queryParams: t = {} } = {}) {
          return new Promise((s, i) => this.get({ mode: r.Z.Server, path: e, queryParams: t, success: s, failure: i }));
        }
        async create(e, t, { path: s = this.path || this.type, mode: i = this.mode } = {}) {
          const a = [this.type, e, t];
          a.push({ path: s, mode: i, env: this.getEnv() }), await this.dataSync.sendMessage({ handler: "create", args: a });
        }
        async update(e, t, { path: s = this.path || this.type, mode: i = this.mode, queryParams: a = {} } = {}) {
          var r;
          const n = this.buildQueryString((null === (r = this.queryParams) || void 0 === r ? void 0 : r.update) || {}, a),
            o = [this.type, e, t];
          o.push({ path: s, mode: i, env: this.getEnv(), queryString: n }), await this.dataSync.sendMessage({ handler: "update", args: o });
        }
        async delete(e, { path: t = this.path || this.type, mode: s = this.mode } = {}) {
          const i = [this.type, e];
          i.push({ path: t, mode: s, env: this.getEnv() }), await this.dataSync.sendMessage({ handler: "delete", args: i });
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
        buildQueryString(...e) {
          const t = new URLSearchParams(Object.assign({}, ...e)).toString();
          return t ? "?" + t : "";
        }
      }
    },
    95756: (e, t, s) => {
      s.d(t, { v: () => d });
      var i = s(28692),
        a = s(20144),
        r = s(96046),
        n = s(63139),
        o = s(7838);
      const h = (e) =>
          Object.keys(e).find((t) => {
            var s;
            return null === (s = e[t]) || void 0 === s ? void 0 : s.defaultView;
          }),
        d = (e, t) => {
          const s = (0, i.Q_)(e + "ViewState", {
              state: () => {
                var s;
                return {
                  activeViewId: null !== (s = t && h(t)) && void 0 !== s ? s : "",
                  beforeViewChange: () => Promise.resolve(!0),
                  confirmationProps: null,
                  popupActive: !1,
                  name: e
                };
              },
              getters: {
                activeView(e) {
                  if (!t) return null;
                  const s = t[e.activeViewId];
                  if (s) return s;
                  throw new Error("No view found with id: " + e.activeViewId);
                },
                focused: () => n.Z.isOnTop(e)
              },
              actions: {
                focus() {
                  n.Z.add(e);
                },
                async setActiveView(e) {
                  if (t && (await this.beforeViewChange()))
                    if ("default" === e) {
                      const e = h(t);
                      if (!e) throw new Error("No view found with defaultView: true");
                      this.activeViewId = e;
                    } else this.activeViewId = e;
                },
                async togglePopup(e) {
                  (await this.beforeViewChange()) &&
                    (await a.ZP.nextTick(),
                    (this.popupActive = null != e ? e : !this.popupActive),
                    this.popupActive ||
                      (this.resetBeforeViewChange(), (this.confirmationProps = null), await this.setActiveView("default")));
                },
                resetBeforeViewChange() {
                  this.beforeViewChange = () => Promise.resolve(!0);
                },
                async setConfirmation(e) {
                  return new Promise((t) => {
                    (this.confirmationProps = e),
                      (this.confirmationProps.confirm = () => t(!0)),
                      (this.confirmationProps.cancel = () => t(!1));
                  }).finally(() => {
                    this.confirmationProps = null;
                  });
                }
              }
            }),
            d = (0, i.Jk)(s());
          return (
            o.Z.$on(e + ":close", () => s().togglePopup(!1)),
            (0, a.YP)(d.popupActive, (t) => {
              t ? n.Z.add(e) : n.Z.remove(e);
            }),
            (0, a.YP)(d.confirmationProps, (t) => {
              (null == t ? void 0 : t.dashboardOverlay) && n.Z.add(e, !0),
                (r.Z.dashboardOverlayActive = !!(null == t ? void 0 : t.dashboardOverlay));
            }),
            s
          );
        };
    },
    67652: (e, t, s) => {
      var i;
      s.d(t, { Z: () => a }),
        (function (e) {
          (e.Sync = "sync"), (e.Cache = "cache"), (e.Server = "server"), (e.Timestamp = "timestamp");
        })(i || (i = {}));
      const a = i;
    }
  }
]);
