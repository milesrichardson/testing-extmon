"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9968],
  {
    89968: (e, i, t) => {
      t.r(i), t.d(i, { default: () => r, useLinksViewStateStore: () => o });
      const o = (0, t(95756).v)("links", { list: { defaultView: !0, order: 1 }, form: { order: 2 } }),
        r = o;
    },
    95756: (e, i, t) => {
      t.d(i, { v: () => c });
      var o = t(63420),
        r = t(20144),
        n = t(96046),
        a = t(63139),
        s = t(7838);
      const l = (e) =>
          Object.keys(e).find((i) => {
            var t;
            return null === (t = e[i]) || void 0 === t ? void 0 : t.defaultView;
          }),
        c = (e, i) => {
          const t = (0, o.Q_)(e + "ViewState", {
              state: () => {
                var t;
                return {
                  activeViewId: null !== (t = i && l(i)) && void 0 !== t ? t : "",
                  beforeViewChange: () => Promise.resolve(!0),
                  confirmationProps: null,
                  popupActive: !1,
                  name: e
                };
              },
              getters: {
                activeView(e) {
                  if (!i) return null;
                  const t = i[e.activeViewId];
                  if (t) return t;
                  throw new Error("No view found with id: " + e.activeViewId);
                },
                focused: () => a.Z.isOnTop(e)
              },
              actions: {
                focus() {
                  a.Z.add(e);
                },
                async setActiveView(e) {
                  if (i && (await this.beforeViewChange()))
                    if ("default" === e) {
                      const e = l(i);
                      if (!e) throw new Error("No view found with defaultView: true");
                      this.activeViewId = e;
                    } else this.activeViewId = e;
                },
                async togglePopup(e) {
                  (await this.beforeViewChange()) &&
                    (await r.ZP.nextTick(),
                    (this.popupActive = null != e ? e : !this.popupActive),
                    this.popupActive ||
                      (this.resetBeforeViewChange(), (this.confirmationProps = null), await this.setActiveView("default")));
                },
                resetBeforeViewChange() {
                  this.beforeViewChange = () => Promise.resolve(!0);
                },
                async setConfirmation(e) {
                  return new Promise((i) => {
                    (this.confirmationProps = e),
                      (this.confirmationProps.confirm = () => i(!0)),
                      (this.confirmationProps.cancel = () => i(!1));
                  }).finally(() => {
                    this.confirmationProps = null;
                  });
                }
              }
            }),
            c = (0, o.Jk)(t());
          return (
            s.Z.$on(e + ":close", () => t().togglePopup(!1)),
            (0, r.YP)(c.popupActive, (i) => {
              i ? a.Z.add(e) : a.Z.remove(e);
            }),
            (0, r.YP)(c.confirmationProps, (i) => {
              (null == i ? void 0 : i.dashboardOverlay) && a.Z.add(e, !0),
                (n.Z.dashboardOverlayActive = !!(null == i ? void 0 : i.dashboardOverlay));
            }),
            t
          );
        };
    }
  }
]);
