(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8342, 9437, 6399],
  {
    99437: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => g });
      var s = i(20144),
        o = i(88026),
        a = i(51726),
        n = i.n(a),
        r = i(55482),
        d = i(7838),
        h = i(35174);
      let l = {};
      const c = {
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
      var u = i(63420),
        p = i(64398),
        f = i(77197);
      s.ZP.use(o.Z, { name: "unreactive" }),
        s.ZP.use(n()),
        s.ZP.use(r.qK),
        s.ZP.use(u.og),
        s.ZP.use(f.Z),
        (s.ZP.prototype.$xhr = h.Z),
        (s.ZP.prototype.$e = d.Z),
        s.ZP.directive("mobile-click", c),
        new s.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        s.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: p.Z
        });
      const g = s.ZP;
    },
    42223: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = {
        data: () => ({ componentsMounted: {} }),
        unreactive: () => ({ uid: m.utils.shortId() }),
        beforeCreate() {
          const e = this.$options.components;
          Object.keys(e).forEach((t) => {
            const i = e[t];
            "function" == typeof i &&
              (e[t] = function () {
                this.$set(this.componentsMounted, t, !1);
                const e = `${t}:${this.uid}:mounted`,
                  s = () => (this.componentsMounted[t] = !0);
                return (
                  this.$e.$once(e, s),
                  i(arguments).then((i) => {
                    const o = i.default;
                    return o && o.doNotWaitForMount && (this.$delete(this.componentsMounted, t), this.$e.$off(e, s)), i;
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
    40531: (e, t, i) => {
      "use strict";
      i.d(t, { Fl: () => a, Jr: () => d, ax: () => r });
      var s = i(99437);
      const o = new s.Z.observable({}),
        a = new Proxy(o, {
          get: (e, t) => (Object.prototype.hasOwnProperty.call(e, t) || s.Z.set(e, t, m.models.customization.getComputedSetting(t)), e[t]),
          set: () => (
            console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'), !1
          )
        }),
        n = new s.Z.observable({}),
        r = new Proxy(n, {
          get: (e, t) => (Object.prototype.hasOwnProperty.call(e, t) || s.Z.set(e, t, m.models.customization.get(t)), e[t]),
          set: (e, t, i) => (m.models.customization.save(t, i), s.Z.set(e, t, i), !0)
        });
      function d(e = {}) {
        Object.entries(e).forEach(([e, t]) => s.Z.set(n, e, t)), m.models.customization.save(e);
      }
      m.models.customization.on("change", (e) => {
        e &&
          ("balanceModeStr" in e.changed && Object.entries(m.models.customization.attributes).forEach(([e, t]) => s.Z.set(o, e, t)),
          Object.entries(e.changed).forEach(([e, t]) => {
            (o[e] = m.models.customization.getComputedSetting(e)), s.Z.set(n, e, t);
          }));
      }),
        m.on("customization:update", (e) => {
          e.forEach((e) => {
            const t = m.models.customization.getComputedSetting(e);
            s.Z.set(o, e, t), s.Z.set(n, e, t);
          });
        });
    },
    2039: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = { focus: { name: "Focus", icon: i(20888) }, search: { name: "Search", feature: "search in center", icon: i(47997) } };
    },
    68342: (e, t, i) => {
      "use strict";
      i.r(t);
      var s = i(99437),
        o = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { staticClass: "center-below", attrs: { "data-test": "region-center-below" } },
            [
              t(
                "transition",
                { attrs: { name: "fade-deep", mode: "out-in", duration: 500 }, on: { "after-enter": e.afterEnter } },
                [
                  e.activeApp && e.centerBelowVisible
                    ? t(e.searchVisible ? "BigSearch" : "Focus", {
                        tag: "component",
                        scopedSlots: e._u(
                          [
                            {
                              key: "nav",
                              fn: function () {
                                return [
                                  e.navVisible
                                    ? t("quick-nav", {
                                        attrs: { options: e.centerBelowMetadata, region: "center-below", active: e.activeApp },
                                        on: { "switch-to": e.switchTo }
                                      })
                                    : e._e()
                                ];
                              },
                              proxy: !0
                            }
                          ],
                          null,
                          !1,
                          3773440395
                        )
                      })
                    : e._e()
                ],
                1
              ),
              e._v(" "),
              e.isSafari
                ? e._e()
                : t(
                    "smooth-reflow",
                    { staticClass: "launchpad-container", attrs: { "await-apps-ready": !0 } },
                    [e.launchpadVisible ? t("launchpad") : e._e()],
                    1
                  )
            ],
            1
          );
        };
      o._withStripped = !0;
      var a = i(40531),
        n = i(96046),
        r = i(2039),
        d = i(42223),
        h = i(80809);
      const l = {
        name: "CenterBelow",
        components: {
          QuickNav: () => i.e(6686).then(i.bind(i, 36686)),
          Focus: () => Promise.all([i.e(3064), i.e(1869)]).then(i.bind(i, 4197)),
          BigSearch: () => Promise.all([i.e(9443), i.e(3313), i.e(4320)]).then(i.bind(i, 94320)),
          Launchpad: () => i.e(8674).then(i.bind(i, 88674)),
          SmoothReflow: i(36399).default
        },
        mixins: [d.Z],
        unreactive: () => ({ widgetId: "region-center-below", centerBelowMetadata: r.Z, isSafari: h.Z.isSafari() }),
        data: () => ({
          centerBelowVisible: !localStorage.getItem("pomodoro-showing") || "false" === localStorage.getItem("pomodoro-showing")
        }),
        computed: {
          launchpadVisible() {
            return a.ax.launchpadVisible && a.ax.searchVisible && a.ax.centerBelowNavVisible && this.centerBelowVisible;
          },
          activeApp() {
            return this.searchVisible ? "search" : this.focusVisible ? "focus" : "";
          },
          searchVisible: () => a.ax.centerBelowNavVisible && a.ax.searchVisible,
          focusVisible: () => a.Fl.focusVisible,
          navVisible() {
            return a.ax.centerBelowNavVisible && !this.$touch;
          },
          enrolledInSearchExperiment: () => n.Z.experiments.some((e) => "search_in_center" === e.variantName)
        },
        watch: {
          enrolledInSearchExperiment: {
            handler() {
              if (this.enrolledInSearchExperiment) {
                const e = { centerBelowNavVisible: !0, searchVisible: !0, focusVisible: !1 };
                Object.assign(m.models.customization.persistentSettings.defaultIfNotSet, e),
                  m.trigger("customization:update", Object.keys(e));
              }
            },
            immediate: !0
          }
        },
        created() {
          m.on("centerBelow:show", this.setCenterBelowVisible);
        },
        destroyed() {
          m.off("centerBelow:show", this.setCenterBelowVisible);
        },
        methods: {
          afterEnter() {
            m.trigger("centerBelow:afterEnter");
          },
          setCenterBelowVisible(e) {
            this.centerBelowVisible = e;
          },
          switchTo(e) {
            (0, a.Jr)({ focusVisible: "focus" === e, searchVisible: "search" === e });
          }
        }
      };
      i(74255);
      const c = (0, i(51900).Z)(l, o, [], !1, null, "2cef227e", null).exports,
        u = document.querySelector(".region.center-below");
      new s.Z({ render: (e) => e(c) }).$mount(u);
    },
    45641: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([
        e.id,
        ".launchpad-container[data-v-2cef227e]{width:min(clamp(600px,60vw,800px),100%);position:relative;align-self:stretch;margin:auto}.fade-deep-enter-active[data-v-2cef227e].focuses,.fade-deep-enter-active[data-v-2cef227e] .three-col-layout--left,.fade-deep-enter-active[data-v-2cef227e] .search .search-form,.fade-deep-enter-active[data-v-2cef227e] .search .backdrop-filter,.fade-deep-leave-active[data-v-2cef227e].focuses,.fade-deep-leave-active[data-v-2cef227e] .three-col-layout--left,.fade-deep-leave-active[data-v-2cef227e] .search .search-form,.fade-deep-leave-active[data-v-2cef227e] .search .backdrop-filter{transition:opacity .5s ease}.fade-deep-enter[data-v-2cef227e].focuses,.fade-deep-enter[data-v-2cef227e] .three-col-layout--left,.fade-deep-enter[data-v-2cef227e] .search .search-form,.fade-deep-enter[data-v-2cef227e] .search .backdrop-filter,.fade-deep-leave-to[data-v-2cef227e].focuses,.fade-deep-leave-to[data-v-2cef227e] .three-col-layout--left,.fade-deep-leave-to[data-v-2cef227e] .search .search-form,.fade-deep-leave-to[data-v-2cef227e] .search .backdrop-filter{opacity:0}",
        ""
      ]);
      const r = n;
    },
    68657: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([
        e.id,
        ".smooth-reflow[data-v-256e142c]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-256e142c]{transition:height var(--3872912c) ease,width var(--3872912c) ease}.smooth-reflow.tr-height[data-v-256e142c]{transition:height var(--3872912c) ease}.smooth-reflow.tr-width[data-v-256e142c]{display:flex;justify-content:center;transition:width var(--3872912c) ease}.smooth-reflow.tr-width>div[data-v-256e142c]{width:fit-content}.smooth-reflow.hide-overflow[data-v-256e142c]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",
        ""
      ]);
      const r = n;
    },
    36399: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => u });
      var s = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          {
            ref: "wrapper",
            staticClass: "smooth-reflow",
            class: {
              "tr-height": e.height,
              "tr-width": e.width,
              "tr-disabled": e.transitionDisabled,
              "hide-overflow": e.hideOverflow && (e.resizing || e.transitionActive)
            },
            style: { height: e.wrapperHeight, width: e.wrapperWidth },
            attrs: {
              "data-smooth-reflow-id": e.id,
              "data-test": "smooth-reflow",
              "data-test-transitioning": e.resizing || e.transitionActive
            }
          },
          [
            e.transitionGroup
              ? t(
                  "transition-group",
                  e._g(
                    e._b(
                      {
                        directives: [
                          { name: "resize-sensor", rawName: "v-resize-sensor", value: e.handleResize, expression: "handleResize" }
                        ],
                        attrs: { tag: "div" }
                      },
                      "transition-group",
                      e.transitionProps,
                      !1
                    ),
                    e.transitionHooks
                  ),
                  [e._t("default")],
                  2
                )
              : t(
                  "div",
                  {
                    directives: [{ name: "resize-sensor", rawName: "v-resize-sensor", value: e.handleResize, expression: "handleResize" }]
                  },
                  [t("transition", e._g(e._b({}, "transition", e.transitionProps, !1), e.transitionHooks), [e._t("default")], 2)],
                  1
                )
          ],
          1
        );
      };
      s._withStripped = !0;
      var o = i(61706),
        a = i(42223),
        n = i(96046),
        r = i(20144);
      const d = {
          name: "SmoothReflow",
          directives: { ResizeSensor: o.Z },
          mixins: [a.Z],
          props: {
            height: { type: Boolean, default: !0 },
            width: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            appear: { type: Boolean, default: !1 },
            awaitAppsReady: { type: Boolean, default: !1 },
            duration: { type: Number, default: 500 },
            transitionDuration: { type: Number, default: null },
            nested: { type: Boolean, default: !1 },
            hideOverflow: { type: Boolean, default: !1 },
            transition: { type: String, default: "smooth-height-fade" },
            transitionGroup: { type: Boolean, default: !1 },
            debug: { type: Boolean, default: !1 },
            firstTransitionDisabled: { type: Boolean, default: !1 }
          },
          data: () => ({
            id: Math.random().toString(36).substring(7),
            wrapperHeightPx: null,
            wrapperWidthPx: null,
            auto: !1,
            resizing: !1,
            transitionActive: !1,
            ancestors: [],
            resizedOnce: !1
          }),
          computed: {
            awaitingAppsReady() {
              return this.awaitAppsReady && !n.Z.allowAwaitingAppsReadySmoothReflow;
            },
            transitionDisabled() {
              return this.auto || this.disabled || this.awaitingAppsReady;
            },
            transitionProps() {
              return {
                name: this.transition,
                appear: this.appear,
                duration: this.awaitingAppsReady ? 0 : null === this.transitionDuration ? this.duration : this.transitionDuration
              };
            },
            wrapperHeight() {
              return !this.height || this.transitionDisabled ? "auto" : this.wrapperHeightPx + "px";
            },
            wrapperWidth() {
              return this.width ? (this.transitionDisabled ? "auto" : this.wrapperWidthPx + "px") : "";
            },
            transitionDurationMs() {
              return `${this.transitionDisabled ? 0 : null === this.transitionDuration ? this.duration : this.transitionDuration}ms`;
            },
            resizeDurationMs() {
              return this.resizeDuration + "ms";
            },
            resizeDuration() {
              return (this.firstTransitionDisabled && !this.resizedOnce) || this.awaitingAppsReady
                ? 0
                : null === this.transitionDuration
                ? this.duration
                : this.transitionActive
                ? this.transitionDuration
                : this.duration;
            }
          },
          watch: {
            transitionDisabled(e) {
              e || this.setExplicitDimensions();
            }
          },
          created() {
            (this.transitionHooks = {
              beforeEnter: this.beforeEnter,
              enter: this.enter,
              afterEnter: this.afterEnter,
              enterCancelled: this.enterCancelled,
              beforeLeave: this.beforeLeave,
              leave: this.leave,
              afterLeave: this.afterLeave,
              leaveCancelled: this.leaveCancelled
            }),
              this.appear && (this.height && (this.wrapperHeightPx = 0), this.width && (this.wrapperWidthPx = 0)),
              this.$e.$on("pauseSmoothReflow:" + this.id, this.pauseSmoothReflow),
              this.$e.$on("resumeSmoothReflow:" + this.id, this.resumeSmoothReflow);
          },
          async mounted() {
            this.nested && (await this.$nextTick(), this.findSmoothReflowAncestors()), this.setExplicitDimensions();
          },
          destroyed() {
            this.$e.$off("pauseSmoothReflow:" + this.id, this.pauseSmoothReflow),
              this.$e.$off("resumeSmoothReflow:" + this.id, this.resumeSmoothReflow);
          },
          methods: {
            async handleResize(e) {
              if (
                this.transitionDisabled ||
                (this.height && !this.width && this.wrapperHeightPx === e.height) ||
                (!this.height && this.width && this.wrapperWidthPx === e.width) ||
                (this.height && this.width && this.wrapperHeightPx === e.height && this.wrapperWidthPx === e.width)
              )
                return this.$emit("afterResize");
              (this.resizing = !0),
                clearTimeout(this.timeout),
                this.nested &&
                  this.ancestors.length &&
                  (this.ancestors.forEach((e) => this.$e.$emit("pauseSmoothReflow:" + e)), await this.$nextTick()),
                this.height && (this.wrapperHeightPx = e.height),
                this.width && (this.wrapperWidthPx = e.width),
                (this.timeout = setTimeout(() => {
                  this.nested && this.ancestors.length && this.ancestors.forEach((e) => this.$e.$emit("resumeSmoothReflow:" + e)),
                    (this.resizing = !1),
                    this.afterResize();
                }, this.duration));
            },
            findSmoothReflowAncestors() {
              let e,
                t = !0;
              for (; t; )
                (e = ((e && e.parentElement) || this.$el.parentElement).closest("[data-smooth-reflow-id]")),
                  e ? this.ancestors.push(e.getAttribute("data-smooth-reflow-id")) : (t = !1);
            },
            pauseSmoothReflow() {
              this.auto = !0;
            },
            resumeSmoothReflow() {
              (this.auto = !1), this.setExplicitDimensions();
            },
            setExplicitDimensions() {
              this.$refs.wrapper &&
                (this.height && (this.wrapperHeightPx = this.$refs.wrapper.clientHeight),
                this.width && (this.wrapperWidthPx = this.$refs.wrapper.clientWidth));
            },
            afterResize() {
              (this.resizedOnce = !0), this.$emit("afterResize");
            },
            beforeEnter(e) {
              (this.transitionActive = !0), this.$emit("beforeEnter", e);
            },
            enter(e) {
              this.$emit("enter", e);
            },
            afterEnter(e) {
              (this.transitionActive = !1), this.$emit("afterEnter", e);
            },
            enterCancelled(e) {
              this.$emit("afterEnter", e);
            },
            beforeLeave(e) {
              (this.transitionActive = !0), this.$emit("beforeLeave", e);
            },
            leave(e) {
              this.$emit("leave", e);
            },
            afterLeave(e) {
              (this.transitionActive = !1), this.$emit("afterLeave", e);
            },
            leaveCancelled(e) {
              this.$emit("leaveCancelled", e);
            }
          }
        },
        h = () => {
          (0, r.sj)((e, t) => ({ "3872912c": e.resizeDurationMs, "7b63f4cb": e.transitionDurationMs }));
        },
        l = d.setup;
      d.setup = l ? (e, t) => (h(), l(e, t)) : h;
      const c = d;
      i(67135);
      const u = (0, i(51900).Z)(c, s, [], !1, null, "256e142c", null).exports;
    },
    74255: (e, t, i) => {
      var s = i(45641);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, i(45346).Z)("4448114a", s, !1, {});
    },
    67135: (e, t, i) => {
      var s = i(68657);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, i(45346).Z)("1ea382bd", s, !1, {});
    },
    47997: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNyAyLjVDMTMuNDY5IDIuNSAyLjUgMTMuNDY5IDIuNSAyN1MxMy40NjkgNTEuNSAyNyA1MS41YTI0LjQgMjQuNCAwIDAgMCAxNC43NTYtNC45NCAxLjAzIDEuMDMgMCAwIDEgMS4zNS4wOGwxNC4xMjYgMTQuMTI4YTIuNSAyLjUgMCAwIDAgMy41MzYtMy41MzZMNDYuNjQgNDMuMTA1YTEuMDMgMS4wMyAwIDAgMS0uMDgxLTEuMzQ5QTI0LjM5MiAyNC4zOTIgMCAwIDAgNTEuNSAyN0M1MS41IDEzLjQ2OSA0MC41MzEgMi41IDI3IDIuNVpNNy41IDI3QzcuNSAxNi4yMyAxNi4yMyA3LjUgMjcgNy41UzQ2LjUgMTYuMjMgNDYuNSAyNyAzNy43NyA0Ni41IDI3IDQ2LjUgNy41IDM3Ljc3IDcuNSAyN1oiLz48L3N2Zz4=";
    },
    20888: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTY0IDYxYTMgMyAwIDAxLTMgM2gtOWEzIDMgMCAxMTAtNmg5YTMgMyAwIDAxMyAzek02MSAwYTMgMyAwIDAxMyAzdjlhMyAzIDAgMTEtNiAwVjNhMyAzIDAgMDEzLTN6TTMgNjRhMyAzIDAgMDEtMy0zdi05YTMgMyAwIDExNiAwdjlhMyAzIDAgMDEtMyAzek0zIDBhMyAzIDAgMDAtMyAzdjlhMyAzIDAgMTA2IDBWNmg2YTMgMyAwIDEwMC02SDN6Ii8+PHBhdGggZD0iTTY0IDYxYTMgMyAwIDExLTYgMHYtOWEzIDMgMCAwMTYgMHY5ek02MSAwYTMgMyAwIDExMCA2aC05YTMgMyAwIDExMC02aDl6TTMgNjRhMyAzIDAgMTEwLTZoOWEzIDMgMCAxMTAgNkgzeiIvPjxwYXRoIGQ9Ik0zMiAyMmMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3NyAxMCAxMCAxMCAxMC00LjQ3NyAxMC0xMC00LjQ3Ny0xMC0xMC0xMHpNMTYgMzJjMC04LjgzNyA3LjE2My0xNiAxNi0xNnMxNiA3LjE2MyAxNiAxNi03LjE2MyAxNi0xNiAxNi0xNi03LjE2My0xNi0xNnoiLz48L3N2Zz4=";
    }
  }
]);
