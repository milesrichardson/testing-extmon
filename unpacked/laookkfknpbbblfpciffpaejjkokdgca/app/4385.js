(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4385, 9437],
  {
    99437: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => g });
      var n = o(20144),
        i = o(88026),
        s = o(51726),
        a = o.n(s),
        d = o(34952),
        c = o(7838),
        r = o(35174);
      let u = {};
      const l = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (e.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (u[e.dataset.mobileClickHandlerId] = t.value),
            e.addEventListener("click", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", u[e.dataset.mobileClickHandlerId]),
            delete u[e.dataset.mobileClickHandlerId],
            delete e.dataset.mobileClickHandlerId,
            delete e.dataset.justBoundMobileClickHandler);
        }
      };
      var p = o(28692),
        h = o(64398),
        v = o(77197);
      n.ZP.use(i.Z, { name: "unreactive" }),
        n.ZP.use(a()),
        n.ZP.use(d.InlineSvgPlugin),
        n.ZP.use(p.og),
        n.ZP.use(v.Z),
        (n.ZP.prototype.$xhr = r.Z),
        (n.ZP.prototype.$e = c.Z),
        n.ZP.directive("mobile-click", l),
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
          pinia: h.Z
        });
      const g = n.ZP;
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
      o.d(t, { Fl: () => s, Jr: () => c, ax: () => d });
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
      function c(e = {}) {
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
    56345: (e, t, o) => {
      "use strict";
      o.r(t);
      var n = o(99437),
        i = function () {
          var e = this,
            t = e._self._c;
          return t("transition", { attrs: { name: "fade" } }, [
            e.searchVisible
              ? t(
                  "div",
                  { staticClass: "app-dash app-container search", attrs: { id: "search", "data-test": "search" } },
                  [e.$touch ? t("touch-search") : t("search-input")],
                  1
                )
              : e._e()
          ]);
        };
      i._withStripped = !0;
      var s = o(6800),
        a = o(40531),
        d = o(70628),
        c = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { directives: [{ name: "click-outside", rawName: "v-click-outside", value: e.closePopup, expression: "closePopup" }] },
            [
              t(
                "div",
                { staticClass: "app-dash app-dash-icon", on: { click: e.openPopup } },
                [t("inline-svg", { staticClass: "icon dash-icon icon-search", attrs: { src: o(42527), "data-test": "icon-search" } })],
                1
              ),
              e._v(" "),
              t(
                "transition",
                { attrs: { name: "slide-down-fade" } },
                [
                  e.popupActive
                    ? t("app-popup", { attrs: { position: "bottom-right", region: "top-left" } }, [t("search-input")], 1)
                    : e._e()
                ],
                1
              ),
              e._v(" "),
              t("transition", { attrs: { name: "fade", duration: "150" } }, [
                e.popupActive ? t("div", { staticClass: "touch-overlay", on: { click: e.closePopup } }) : e._e()
              ])
            ],
            1
          );
        };
      c._withStripped = !0;
      var r = o(73418),
        u = o(40063);
      const l = {
        name: "TouchSearch",
        components: { AppPopup: r.Z, SearchInput: d.Z },
        directives: { ClickOutside: u.Z },
        data: () => ({ popupActive: !1 }),
        methods: {
          closePopup() {
            this.popupActive && (this.popupActive = !1);
          },
          openPopup() {
            this.popupActive = !0;
          }
        }
      };
      o(58209);
      var p = o(51900);
      const h = (0, p.Z)(l, c, [], !1, null, "7ef49ad2", null).exports,
        v = { info: s },
        g = {
          name: "SmallSearch",
          components: { SearchInput: d.Z, TouchSearch: h },
          computed: { searchVisible: () => a.ax.searchVisible && !a.ax.centerBelowNavVisible },
          mounted() {
            m.widgetManager.appReady(v.info.id);
          }
        };
      o(64949);
      const b = (0, p.Z)(g, i, [], !1, null, "0c59d224", null).exports,
        f = document.createElement("div");
      document.querySelector(".top-left").append(f), new n.Z({ render: (e) => e(b) }).$mount(f);
    },
    18354: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => d });
      var n = o(8081),
        i = o.n(n),
        s = o(23645),
        a = o.n(s)()(i());
      a.push([
        e.id,
        "\n/* stylelint-disable */\n.search[data-v-0c59d224] { --width: 240px; --icon-size: 16px; height: var(--top-and-bottom-row-min-height); width: 100%; max-width: var(--width); position: relative; flex: 2 2 auto; order: 9; display: inline-block; cursor: pointer;\n}\nbody:not(.touch) .search[data-v-0c59d224] { flex-basis: 150px; min-width: 150px;\n}\n[data-v-0c59d224] .app-dash { height: var(--top-and-bottom-row-min-height); padding: 0 var(--side-padding);\n}\n[data-v-0c59d224] .app-dash .icon-search { --icon-size: 18px;\n}\n",
        ""
      ]);
      const d = a;
    },
    92736: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => d });
      var n = o(8081),
        i = o.n(n),
        s = o(23645),
        a = o.n(s)()(i());
      a.push([
        e.id,
        "\n/* stylelint-disable */\n/* Touch popup */\n.app[data-v-7ef49ad2] .app-body { padding: var(--app-padding);\n}\n.app[data-v-7ef49ad2] .search-underline { display: none;\n}\n.app-dash-icon[data-v-7ef49ad2] { height: var(--top-and-bottom-row-min-height);\n}\n",
        ""
      ]);
      const d = a;
    },
    64949: (e, t, o) => {
      var n = o(18354);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, o(45346).Z)("0884785d", n, !1, { ssrId: !0 });
    },
    58209: (e, t, o) => {
      var n = o(92736);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, o(45346).Z)("0bc565a8", n, !1, { ssrId: !0 });
    }
  }
]);
