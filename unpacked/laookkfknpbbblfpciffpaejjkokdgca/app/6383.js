(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6383, 9437],
  {
    99437: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => w });
      var n = o(20144),
        i = o(88026),
        s = o(51726),
        a = o.n(s),
        d = o(34952),
        r = o(7838),
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
      var h = o(28692),
        g = o(64398),
        p = o(77197);
      n.ZP.use(i.Z, { name: "unreactive" }),
        n.ZP.use(a()),
        n.ZP.use(d.InlineSvgPlugin),
        n.ZP.use(h.og),
        n.ZP.use(p.Z),
        (n.ZP.prototype.$xhr = c.Z),
        (n.ZP.prototype.$e = r.Z),
        n.ZP.directive("mobile-click", u),
        new n.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        n.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: g.Z
        });
      const w = n.ZP;
    },
    6383: (e, t, o) => {
      "use strict";
      o.r(t);
      var n = o(99437),
        i = function () {
          var e = this,
            t = e._self._c;
          return t(
            "transition",
            { attrs: { name: "fade", mode: "out-in" }, on: { enter: e.onEnter, afterEnter: e.afterEnter } },
            [
              e.showPomodoro && e.clockVisible
                ? t("pomodoro", { on: { "pomodoro-show": e.changePomodoroShowing } })
                : t(
                    "div",
                    { staticClass: "center-container", attrs: { "data-test": "clock-greeting-mantra" } },
                    [
                      t(
                        "smooth-reflow",
                        {
                          attrs: { "await-apps-ready": "" },
                          on: {
                            afterEnter: function (t) {
                              return e.afterEnter();
                            }
                          }
                        },
                        [e.clockVisible ? t("clock", { on: { "pomodoro-show": e.changePomodoroShowing } }) : e._e()],
                        1
                      ),
                      e._v(" "),
                      t(
                        "smooth-reflow",
                        {
                          attrs: { "await-apps-ready": "" },
                          on: {
                            afterEnter: function (t) {
                              return e.afterEnter();
                            }
                          }
                        },
                        [e.greetingVisible ? t("greeting-mantra-container") : e._e()],
                        1
                      )
                    ],
                    1
                  )
            ],
            1
          );
        };
      i._withStripped = !0;
      var s = o(40531);
      const a = {
        name: "Center",
        components: {
          Clock: () => o.e(6830).then(o.bind(o, 66830)),
          Pomodoro: () => Promise.all([o.e(3064), o.e(6908)]).then(o.bind(o, 46908)),
          GreetingMantraContainer: () => o.e(6182).then(o.bind(o, 86182)),
          SmoothReflow: () => o.e(5273).then(o.bind(o, 55273))
        },
        unreactive: () => ({ widgetId: "center-region" }),
        mixins: [o(42223).Z],
        data: () => ({ toastMenuActive: !1, showPomodoro: "true" === localStorage.getItem("pomodoro-showing") }),
        computed: { clockVisible: () => s.Fl.clockVisible, greetingVisible: () => s.Fl.greetingVisible },
        created() {
          m.on("pomodoro:show", this.setPomodoroToShow), window.addEventListener("storage", this.handleMultiTabChangePomodoroShowing, !1);
        },
        destroyed() {
          m.off("pomodoro:show", this.setPomodoroToShow),
            window.removeEventListener("storage", this.handleMultiTabChangePomodoroShowing, !1);
        },
        methods: {
          setPomodoroToShow(e = !0) {
            this.changePomodoroShowing(e);
          },
          changePomodoroShowing(e) {
            (this.showPomodoro = e), e && m.trigger("centerBelow:show", !1), localStorage.setItem("pomodoro-showing", e);
          },
          handleMultiTabChangePomodoroShowing(e) {
            "pomodoro-showing" === e.key && "true" === e.newValue && this.changePomodoroShowing(!0);
          },
          onEnter() {
            this.showPomodoro || m.trigger("centerBelow:show", !0);
          },
          afterEnter() {
            m.trigger("center:updated");
          }
        }
      };
      o(98786);
      const d = (0, o(51900).Z)(a, i, [], !1, null, null, null).exports,
        r = document.createElement("div");
      document.querySelector(".region.center").appendChild(r), new n.Z({ render: (e) => e(d) }).$mount(r);
    },
    42223: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      const n = {
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
                  n = () => (this.componentsMounted[t] = !0);
                return (
                  this.$e.$once(e, n),
                  o(arguments).then((o) => {
                    const i = o.default;
                    return i && i.doNotWaitForMount && (this.$delete(this.componentsMounted, t), this.$e.$off(e, n)), o;
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
    40531: (e, t, o) => {
      "use strict";
      o.d(t, { Fl: () => s, Jr: () => r, ax: () => d });
      var n = o(99437);
      const i = new n.Z.observable({}),
        s = new Proxy(i, {
          get: (e, t) => (e.hasOwnProperty(t) || n.Z.set(e, t, m.models.customization.getComputedSetting(t)), e[t]),
          set: () => (
            console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'), !1
          )
        }),
        a = new n.Z.observable({}),
        d = new Proxy(a, {
          get: (e, t) => (e.hasOwnProperty(t) || n.Z.set(e, t, m.models.customization.get(t)), e[t]),
          set: (e, t, o) => (m.models.customization.save(t, o), n.Z.set(e, t, o), !0)
        });
      function r(e = {}) {
        Object.entries(e).forEach(([e, t]) => n.Z.set(a, e, t)), m.models.customization.save(e);
      }
      m.models.customization.on("change", (e) => {
        e &&
          ("balanceModeStr" in e.changed && Object.entries(m.models.customization.attributes).forEach(([e, t]) => n.Z.set(i, e, t)),
          Object.entries(e.changed).forEach(([e, t]) => {
            (i[e] = m.models.customization.getComputedSetting(e)), n.Z.set(a, e, t);
          }));
      }),
        m.on("customization:update", (e) => {
          e.forEach((e) => {
            const t = m.models.customization.getComputedSetting(e);
            n.Z.set(i, e, t), n.Z.set(a, e, t);
          });
        });
    },
    63179: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => d });
      var n = o(8081),
        i = o.n(n),
        s = o(23645),
        a = o.n(s)()(i());
      a.push([e.id, "\n/* stylelint-disable */\n.center-container { display: flex; flex-direction: column;\n}\n", ""]);
      const d = a;
    },
    98786: (e, t, o) => {
      var n = o(63179);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, o(45346).Z)("90d36f42", n, !1, { ssrId: !0 });
    }
  }
]);
