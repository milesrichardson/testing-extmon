(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9209, 9437],
  {
    99437: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => g });
      var i = o(20144),
        s = o(88026),
        n = o(51726),
        a = o.n(n),
        r = o(55482),
        d = o(7838),
        c = o(35174);
      let l = {};
      const u = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (e.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (l[e.dataset.mobileClickHandlerId] = t.value),
            e.addEventListener("click", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", l[e.dataset.mobileClickHandlerId]),
            delete l[e.dataset.mobileClickHandlerId],
            delete e.dataset.mobileClickHandlerId,
            delete e.dataset.justBoundMobileClickHandler);
        }
      };
      var p = o(63420),
        h = o(64398),
        v = o(77197);
      i.ZP.use(s.Z, { name: "unreactive" }),
        i.ZP.use(a()),
        i.ZP.use(r.qK),
        i.ZP.use(p.og),
        i.ZP.use(v.Z),
        (i.ZP.prototype.$xhr = c.Z),
        (i.ZP.prototype.$e = d.Z),
        i.ZP.directive("mobile-click", u),
        new i.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        i.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: h.Z
        });
      const g = i.ZP;
    },
    42223: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => i });
      const i = {
        data: () => ({ componentsMounted: {} }),
        unreactive: () => ({ uid: m.utils.shortId() }),
        beforeCreate() {
          const e = this.$options.components;
          Object.keys(e).forEach((t) => {
            const o = e[t];
            "function" == typeof o &&
              (e[t] = function () {
                this.$set(this.componentsMounted, t, !1);
                const e = `${t}:${this.uid}:mounted`,
                  i = () => (this.componentsMounted[t] = !0);
                return (
                  this.$e.$once(e, i),
                  o(arguments).then((o) => {
                    const s = o.default;
                    return s && s.doNotWaitForMount && (this.$delete(this.componentsMounted, t), this.$e.$off(e, i)), o;
                  })
                );
              }.bind(this));
          });
        },
        created() {
          this.$e.$on("widgets:timeoutExceeded", this.onWidgetTimeout);
        },
        mounted() {
          if (Object.keys(this.componentsMounted).length) {
            const e = this.$watch(
              "componentsMounted",
              (t) => {
                Object.values(t).every((e) => e) && (this.onAllComponentsMounted(), e());
              },
              { deep: !0, immediate: !0 }
            );
          } else this.onAllComponentsMounted();
        },
        destroyed() {
          this.stopListeningToWidgetTimeout();
        },
        methods: {
          stopListeningToWidgetTimeout() {
            this.$e.$off("widgets:timeoutExceeded", this.onWidgetTimeout);
          },
          getContextUid() {
            return (this.$vnode && this.$vnode.context && this.$vnode.context.uid) || "";
          },
          onAllComponentsMounted() {
            this.onAllComponentsMountedOverride
              ? this.onAllComponentsMountedOverride()
              : this.widgetId
              ? m.widgetManager.appReady(this.widgetId)
              : this.emitComponentMounted(),
              this.stopListeningToWidgetTimeout();
          },
          emitComponentMounted() {
            this.$e.$emit(`${this.$options.name}:${this.getContextUid()}:mounted`);
          },
          onWidgetTimeout() {
            const e = Object.keys(this.componentsMounted).filter((e) => !this.componentsMounted[e]);
            e.length && console.warn(`${this.$options.name} is awaiting ${e.join(", ")} to mount.`);
          }
        }
      };
    },
    48494: (e, t, o) => {
      "use strict";
      function i({ useViewStateStore: e, analytics: t } = {}) {
        return {
          computed: {
            popupActive() {
              return this.viewStateStore.popupActive;
            }
          },
          unreactive() {
            const o = {};
            return e && (o.viewStateStore = e()), t && (o.capture = t.capture.bind(t)), t && (o.batchCapture = t.batchCapture), o;
          },
          methods: {
            async togglePopupAndCaptureIfOpen(e) {
              if ((await this.togglePopup(), this.popupActive)) {
                const t = e instanceof KeyboardEvent ? "hotkey" : "click";
                this.capture("app show", { source: t });
              }
            },
            closePopup() {
              this.viewStateStore.togglePopup(!1);
            },
            async togglePopup(e) {
              const t = "boolean" != typeof e;
              t && this.popupActive && !this.viewStateStore.focused
                ? this.viewStateStore.focus()
                : await this.viewStateStore.togglePopup(t ? void 0 : e);
            }
          },
          provide: () => ({ capture: t.capture.bind(t), batchCapture: t.batchCapture })
        };
      }
      o.d(t, { Z: () => i });
    },
    40531: (e, t, o) => {
      "use strict";
      o.d(t, { Fl: () => n, Jr: () => d, ax: () => r });
      var i = o(99437);
      const s = new i.Z.observable({}),
        n = new Proxy(s, {
          get: (e, t) => (Object.prototype.hasOwnProperty.call(e, t) || i.Z.set(e, t, m.models.customization.getComputedSetting(t)), e[t]),
          set: () => (
            console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'), !1
          )
        }),
        a = new i.Z.observable({}),
        r = new Proxy(a, {
          get: (e, t) => (Object.prototype.hasOwnProperty.call(e, t) || i.Z.set(e, t, m.models.customization.get(t)), e[t]),
          set: (e, t, o) => (m.models.customization.save(t, o), i.Z.set(e, t, o), !0)
        });
      function d(e = {}) {
        Object.entries(e).forEach(([e, t]) => i.Z.set(a, e, t)), m.models.customization.save(e);
      }
      m.models.customization.on("change", (e) => {
        e &&
          ("balanceModeStr" in e.changed && Object.entries(m.models.customization.attributes).forEach(([e, t]) => i.Z.set(s, e, t)),
          Object.entries(e.changed).forEach(([e, t]) => {
            (s[e] = m.models.customization.getComputedSetting(e)), i.Z.set(a, e, t);
          }));
      }),
        m.on("customization:update", (e) => {
          e.forEach((e) => {
            const t = m.models.customization.getComputedSetting(e);
            i.Z.set(s, e, t), i.Z.set(a, e, t);
          });
        });
    },
    30827: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      var i = o(99437);
      const s = (m.showAnyway = new (i.Z.extend({
        name: "ShowAnyway",
        data: () => ({ widgets: [] }),
        methods: {
          show(e) {
            this.includes(e) || this.widgets.push(e);
          },
          hide(e) {
            const t = this.widgets.indexOf(e);
            ~t && this.widgets.splice(t, 1);
          },
          includes(e) {
            return this.widgets.includes(e);
          }
        }
      }))());
    },
    56760: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var i = o(8081),
        s = o.n(i),
        n = o(23645),
        a = o.n(n)()(s());
      a.push([
        e.id,
        ".touch-overlay.fade-leave-active,.touch-overlay.fade-enter-active{transition:opacity .15s ease}.touch-overlay.fade-leave-to,.touch-overlay.fade-enter{opacity:0}",
        ""
      ]);
      const r = a;
    },
    4545: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var i = o(8081),
        s = o.n(i),
        n = o(23645),
        a = o.n(n)()(s());
      a.push([e.id, ".app-dash[data-v-2bb3c64e]{white-space:nowrap}", ""]);
      const r = a;
    },
    95756: (e, t, o) => {
      "use strict";
      o.d(t, { v: () => c });
      var i = o(63420),
        s = o(20144),
        n = o(96046),
        a = o(63139),
        r = o(7838);
      const d = (e) =>
          Object.keys(e).find((t) => {
            var o;
            return null === (o = e[t]) || void 0 === o ? void 0 : o.defaultView;
          }),
        c = (e, t) => {
          const o = (0, i.Q_)(e + "ViewState", {
              state: () => {
                var o;
                return {
                  activeViewId: null !== (o = t && d(t)) && void 0 !== o ? o : "",
                  beforeViewChange: () => Promise.resolve(!0),
                  confirmationProps: null,
                  popupActive: !1,
                  name: e
                };
              },
              getters: {
                activeView(e) {
                  if (!t) return null;
                  const o = t[e.activeViewId];
                  if (o) return o;
                  throw new Error("No view found with id: " + e.activeViewId);
                },
                focused: () => a.Z.isOnTop(e)
              },
              actions: {
                focus() {
                  a.Z.add(e);
                },
                async setActiveView(e) {
                  if (t && (await this.beforeViewChange()))
                    if ("default" === e) {
                      const e = d(t);
                      if (!e) throw new Error("No view found with defaultView: true");
                      this.activeViewId = e;
                    } else this.activeViewId = e;
                },
                async togglePopup(e) {
                  (await this.beforeViewChange()) &&
                    (await s.ZP.nextTick(),
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
            c = (0, i.Jk)(o());
          return (
            r.Z.$on(e + ":close", () => o().togglePopup(!1)),
            (0, s.YP)(c.popupActive, (t) => {
              t ? a.Z.add(e) : a.Z.remove(e);
            }),
            (0, s.YP)(c.confirmationProps, (t) => {
              (null == t ? void 0 : t.dashboardOverlay) && a.Z.add(e, !0),
                (n.Z.dashboardOverlayActive = !!(null == t ? void 0 : t.dashboardOverlay));
            }),
            o
          );
        };
    },
    1077: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var i = function () {
        var e = this,
          t = e._self._c;
        return t("transition", { attrs: { appear: "", name: "fade" } }, [
          e.appVisible
            ? t(
                "div",
                {
                  staticClass: "app-container",
                  class: [e.appName, { "show-anyway": e.showAnyway }],
                  attrs: { "data-show-anyway": e.appName }
                },
                [
                  e._t("default"),
                  e._v(" "),
                  t("transition", { attrs: { name: "fade", duration: "150" } }, [
                    e.overlay ? t("div", { staticClass: "touch-overlay", on: { click: e.toggleApp } }) : e._e()
                  ])
                ],
                2
              )
            : e._e()
        ]);
      };
      i._withStripped = !0;
      var s = o(30827),
        n = o(40531);
      const a = {
        name: "AppContainer",
        mixins: [o(42223).Z],
        props: {
          appName: { type: String, required: !0 },
          overlay: { type: Boolean, default: !1 },
          visibleSetting: { type: String, default: "" },
          hotkey: { type: String, default: "" }
        },
        computed: {
          showAnyway() {
            return s.Z.includes(this.appName);
          },
          appVisible() {
            return !this.visibleSetting || n.Fl[this.visibleSetting];
          }
        },
        created() {
          this.hotkey && m.on("globalEvent:key:" + this.hotkey.toUpperCase(), this.toggleApp);
        },
        destroyed() {
          this.hotkey && m.off("globalEvent:key:" + this.hotkey.toUpperCase(), this.toggleApp);
        },
        methods: {
          toggleApp(e) {
            this.$emit("toggle", e);
          }
        }
      };
      o(46461);
      const r = (0, o(51900).Z)(a, i, [], !1, null, null, null).exports;
    },
    42530: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var i = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          e._g(
            { class: ["app-dash", "toggle", "add-shadow", { "app-dash-icon": !!e.src }], attrs: { "data-test": "app-dash" } },
            e.$listeners
          ),
          [
            e.src
              ? [
                  t("inline-svg", { attrs: { src: e.src } }),
                  e._v(" "),
                  t("span", { staticClass: "app-dash-icon-label u--mobile-hide" }, [e._t("default")], 2)
                ]
              : e._t("default")
          ],
          2
        );
      };
      i._withStripped = !0;
      const s = { name: "AppDash", props: { src: { type: o(55482).ZP.props.src.type, default: "" } } };
      o(60469);
      const n = (0, o(51900).Z)(s, i, [], !1, null, "2bb3c64e", null).exports;
    },
    46461: (e, t, o) => {
      var i = o(56760);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals),
        (0, o(45346).Z)("a3ee40ea", i, !1, {});
    },
    60469: (e, t, o) => {
      var i = o(4545);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals),
        (0, o(45346).Z)("94d1060c", i, !1, {});
    }
  }
]);
