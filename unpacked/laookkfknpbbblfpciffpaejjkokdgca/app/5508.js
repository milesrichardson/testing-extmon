"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [5508, 7652, 9968],
  {
    12363: (e, t, i) => {
      i.d(t, { Z: () => w });
      const s = async (e) => {
          if (!e.loaded)
            return e.loading
              ? new Promise((t) => {
                  e.$subscribe((e, i) => i.loaded && t());
                })
              : e.refresh();
        },
        a = (e, t) => ({
          resetBeforeViewChange: () => t.resetBeforeViewChange(),
          isOpen: () => t.popupActive,
          open: async () => t.popupActive || (await t.togglePopup(!0)),
          close: async () => !t.popupActive || (await t.togglePopup(!1)),
          refresh: () => e.refresh(),
          loaded: () => e.loaded
        });
      var o = i(89968),
        n = i(71886);
      const r = (0, o.default)(),
        c = (0, n.default)(),
        d = {
          ...a(c, r),
          views: {
            links: { setActive: () => r.setActiveView("list"), isActive: () => r.popupActive && "list" === r.activeViewId },
            add: {
              setActive: () => (c.addItem(), r.setActiveView("form")),
              isActive: () => r.popupActive && "form" === r.activeViewId && !c.activeItemId
            },
            edit: {
              async setActive(e) {
                await s(c), c.editItem(e), await r.setActiveView("form");
              },
              isActive: () => r.popupActive && "form" === r.activeViewId && c.activeItemId,
              selectableItems: () => c.getUnPinnedItems.map(({ id: e, title: t }) => ({ id: e, name: t }))
            }
          }
        };
      var l = i(84722),
        p = i(51545);
      const v = (0, l.V)(),
        u = (0, p.useNotesStore)(),
        w = {
          links: d,
          notes: {
            ...a(u, v),
            refresh: () => u.refresh(!0),
            views: {
              notes: {
                async setActive(e) {
                  e && (await s(u)), (u.activeItemId = e), await v.setActiveView("list");
                },
                isActive: () => v.popupActive && "list" === v.activeViewId,
                selectableItems: () => Object.values(u.getItems).map(({ id: e, preview: t }) => ({ id: e, name: t }))
              },
              deleted: {
                setActive: () => v.setActiveView("deleted"),
                isActive: () => v.popupActive && "deleted" === v.activeViewId,
                selectableItems: () => Object.values(u.getDeletedItems).map(({ id: e, preview: t }) => ({ id: e, name: t }))
              }
            }
          }
        };
    },
    30158: (e, t, i) => {
      i.r(t), i.d(t, { useDevAppsStore: () => r });
      var s = i(4239),
        a = i(63420),
        o = i(12363),
        n = i(20144);
      const r = (0, a.Q_)("devApps", {
          state() {
            return {
              pinned: localStorage.getObject(s.Z) || { appId: null, viewId: null, itemId: null },
              selectedItems:
                ((e = o.Z),
                Object.entries(e).reduce((e, [t, i]) => {
                  const s = Object.entries(i.views).reduce((e, [t, i]) => (i.selectableItems && (e[t] = null), e), {});
                  return Object.keys(s).length && (e[t] = s), e;
                }, {}))
            };
            var e;
          },
          getters: { loaded: () => Object.values(o.Z).every((e) => e.loaded()) },
          actions: {
            async openView(e, t, i) {
              await o.Z[e].open(), o.Z[e].resetBeforeViewChange(), o.Z[e].views[t].setActive(i);
            },
            closeApp: (e) => o.Z[e].close(),
            pinApp(e, t, i) {
              (this.pinned.appId = e), (this.pinned.viewId = t), localStorage.setObject(s.Z, { appId: e, viewId: t, itemId: i });
            },
            clearPinned() {
              (this.pinned = { appId: null, viewId: null, itemId: null }), localStorage.removeItem(s.Z);
            },
            setActiveSelectedItems() {
              Object.entries(this.selectedItems).forEach(([e, t]) => {
                Object.keys(t).forEach((i) => {
                  const s = o.Z[e].views[i].selectableItems();
                  this.pinned.appId === e && this.pinned.viewId === i && ((e, t) => t.find((t) => t.id === e))(this.pinned.itemId, s)
                    ? (t[i] = this.pinned.itemId)
                    : s.length && (t[i] = s[0].id);
                });
              });
            }
          }
        }),
        c = r();
      (0, n.YP)((0, a.Jk)(c).loaded, (e) => e && c.setActiveSelectedItems());
    },
    89968: (e, t, i) => {
      i.r(t), i.d(t, { default: () => a, useLinksViewStateStore: () => s });
      const s = (0, i(95756).v)("links", { list: { defaultView: !0, order: 1 }, form: { order: 2 } }),
        a = s;
    },
    84722: (e, t, i) => {
      i.d(t, { V: () => s });
      const s = (0, i(95756).v)("notes", { list: { defaultView: !0, order: 1 }, deleted: { order: 2 } });
    },
    95756: (e, t, i) => {
      i.d(t, { v: () => d });
      var s = i(63420),
        a = i(20144),
        o = i(96046),
        n = i(63139),
        r = i(7838);
      const c = (e) =>
          Object.keys(e).find((t) => {
            var i;
            return null === (i = e[t]) || void 0 === i ? void 0 : i.defaultView;
          }),
        d = (e, t) => {
          const i = (0, s.Q_)(e + "ViewState", {
              state: () => {
                var i;
                return {
                  activeViewId: null !== (i = t && c(t)) && void 0 !== i ? i : "",
                  beforeViewChange: () => Promise.resolve(!0),
                  confirmationProps: null,
                  popupActive: !1,
                  name: e
                };
              },
              getters: {
                activeView(e) {
                  if (!t) return null;
                  const i = t[e.activeViewId];
                  if (i) return i;
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
                      const e = c(t);
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
            d = (0, s.Jk)(i());
          return (
            r.Z.$on(e + ":close", () => i().togglePopup(!1)),
            (0, a.YP)(d.popupActive, (t) => {
              t ? n.Z.add(e) : n.Z.remove(e);
            }),
            (0, a.YP)(d.confirmationProps, (t) => {
              (null == t ? void 0 : t.dashboardOverlay) && n.Z.add(e, !0),
                (o.Z.dashboardOverlayActive = !!(null == t ? void 0 : t.dashboardOverlay));
            }),
            i
          );
        };
    },
    67652: (e, t, i) => {
      var s;
      i.d(t, { Z: () => a }),
        (function (e) {
          (e.Sync = "sync"), (e.Cache = "cache"), (e.Server = "server"), (e.Timestamp = "timestamp");
        })(s || (s = {}));
      const a = s;
    }
  }
]);
