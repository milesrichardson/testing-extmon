(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6744, 5273],
  {
    42223: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      const s = {
        data: () => ({ componentsMounted: {} }),
        unreactive: () => ({ uid: m.utils.shortId() }),
        beforeCreate() {
          const t = this.$options.components;
          Object.keys(t).forEach((e) => {
            const i = t[e];
            "function" == typeof i &&
              (t[e] = function () {
                this.$set(this.componentsMounted, e, !1);
                const t = `${e}:${this.uid}:mounted`,
                  s = () => (this.componentsMounted[e] = !0);
                return (
                  this.$e.$once(t, s),
                  i(arguments).then((i) => {
                    const o = i.default;
                    return o && o.doNotWaitForMount && (this.$delete(this.componentsMounted, e), this.$e.$off(t, s)), i;
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
            const t = this.$watch(
              "componentsMounted",
              (e) => {
                Object.values(e).every((t) => t) && (this.onAllComponentsMounted(), t());
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
            const t = Object.keys(this.componentsMounted).filter((t) => !this.componentsMounted[t]);
            t.length && console.warn(`${this.$options.name} is awaiting ${t.join(", ")} to mount.`);
          }
        }
      };
    },
    53772: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([
        t.id,
        ".smooth-reflow[data-v-f6d3e6a8]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-f6d3e6a8]{transition:height var(--46e573ab) ease,width var(--46e573ab) ease}.smooth-reflow.tr-height[data-v-f6d3e6a8]{transition:height var(--46e573ab) ease}.smooth-reflow.tr-width[data-v-f6d3e6a8]{display:flex;justify-content:center;transition:width var(--46e573ab) ease}.smooth-reflow.tr-width>div[data-v-f6d3e6a8]{width:fit-content}.smooth-reflow.hide-overflow[data-v-f6d3e6a8]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-height-fade-enter-active{transition:opacity var(--7c58a88c) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7c58a88c) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-width-fade-enter-active{transition:opacity var(--7c58a88c) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7c58a88c) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",
        ""
      ]);
      const r = n;
    },
    2145: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.button.accept.disabled[data-v-2dc41784] { pointer-events: none;\n}\n.error[data-v-2dc41784] { margin-top: 20px;\n}\n.error[data-v-2dc41784] a { font-weight: 700;\n}\n.delayed-fade-enter-active[data-v-2dc41784], .delayed-fade-leave-active[data-v-2dc41784] { transition: opacity 0.5s ease 0.8s;\n}\n.delayed-fade-enter[data-v-2dc41784], .delayed-fade-leave-to[data-v-2dc41784] { opacity: 0;\n}\n.sub-step-transition-enter-active .cta[data-v-2dc41784], .sub-step-transition-leave-active .cta[data-v-2dc41784] { transition: opacity 0.5s ease;\n}\n.sub-step-transition-enter .cta[data-v-2dc41784], .sub-step-transition-leave-to .cta[data-v-2dc41784] { opacity: 0;\n}\n",
        ""
      ]);
      const r = n;
    },
    36744: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => h });
      var s = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "tour-fullscreen", attrs: { "data-test": "intro" } }, [
          e(
            "div",
            { staticClass: "cta", class: { "show-content": t.showContent } },
            [
              e("div", { staticClass: "heading" }, [t._v(t._s(t.heading))]),
              t._v(" "),
              e("smooth-reflow", { attrs: { transition: "delayed-fade", duration: 1e3 } }, [
                t.showContent
                  ? e(
                      "div",
                      { staticClass: "content" },
                      [
                        e("div", { staticClass: "subheading", domProps: { innerHTML: t._s(t.subheading) } }),
                        t._v(" "),
                        t.component
                          ? e(t.component, {
                              tag: "component",
                              attrs: {
                                "cancel-text": t.cancelText,
                                "show-cancel-btn": t.showCancelBtn,
                                "button-text": t.buttonText,
                                "button-processing-text": t.buttonProcessingText,
                                plans: t.plans
                              },
                              on: { next: t.acceptTour, dismiss: t.dismissTour }
                            })
                          : e("div", [
                              e(
                                "div",
                                { staticClass: "button dash-button accept", attrs: { "data-test": "start" }, on: { click: t.acceptTour } },
                                [
                                  e(
                                    "span",
                                    [
                                      t._v(t._s(t.buttonText) + " "),
                                      e("inline-svg", { staticClass: "icon icon-next", attrs: { src: i(67200) } })
                                    ],
                                    1
                                  )
                                ]
                              ),
                              t._v(" "),
                              t.showCancelBtn
                                ? e("div", { staticClass: "button-cancel-container" }, [
                                    e(
                                      "div",
                                      { staticClass: "button-cancel", attrs: { "data-test": "cancel" }, on: { click: t.dismissTour } },
                                      [t._v(t._s(t.cancelText))]
                                    )
                                  ])
                                : t._e()
                            ])
                      ],
                      1
                    )
                  : t._e()
              ])
            ],
            1
          )
        ]);
      };
      s._withStripped = !0;
      var o = i(40531),
        a = i(55273),
        n = i(81405);
      const r = {
        name: "TourIntro",
        components: { SmoothReflow: a.default },
        props: {
          parentModalName: { type: String, default: "" },
          heading: { type: String, default: `Hello, ${o.ax.displayname}!` },
          subheading: { type: String, default: "" },
          showCancelBtn: { type: Boolean, default: !0 },
          cancelText: { type: String, default: "No, thank you" },
          buttonText: { type: String, default: "Customize your enhanced dashboard" },
          buttonProcessingText: { type: String, default: "Preparing your dashboard…" },
          plans: { type: Object, default: () => ({}) },
          component: { type: Function, default: null }
        },
        data: () => ({ showContent: !1, processing: !1, errorMessage: "" }),
        mounted() {
          setTimeout(() => {
            this.showContent = !0;
          }, 500);
        },
        methods: {
          acceptTour() {
            n.ZP.capture("onboarding step start", { feature: "onboarding", name: this.parentModalName.toLowerCase() }), this.$emit("next");
          },
          dismissTour() {
            this.$emit("dismiss");
          }
        }
      };
      i(58206);
      const h = (0, i(51900).Z)(r, s, [], !1, null, "2dc41784", null).exports;
    },
    55273: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => u });
      var s = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            ref: "wrapper",
            staticClass: "smooth-reflow",
            class: {
              "tr-height": t.height,
              "tr-width": t.width,
              "tr-disabled": t.transitionDisabled,
              "hide-overflow": t.hideOverflow && (t.resizing || t.transitionActive)
            },
            style: { height: t.wrapperHeight, width: t.wrapperWidth },
            attrs: {
              "data-smooth-reflow-id": t.id,
              "data-test": "smooth-reflow",
              "data-test-transitioning": t.resizing || t.transitionActive
            }
          },
          [
            t.transitionGroup
              ? e(
                  "transition-group",
                  t._g(
                    t._b(
                      {
                        directives: [
                          { name: "resize-sensor", rawName: "v-resize-sensor", value: t.handleResize, expression: "handleResize" }
                        ],
                        attrs: { tag: "div" }
                      },
                      "transition-group",
                      t.transitionProps,
                      !1
                    ),
                    t.transitionHooks
                  ),
                  [t._t("default")],
                  2
                )
              : e(
                  "div",
                  {
                    directives: [{ name: "resize-sensor", rawName: "v-resize-sensor", value: t.handleResize, expression: "handleResize" }]
                  },
                  [e("transition", t._g(t._b({}, "transition", t.transitionProps, !1), t.transitionHooks), [t._t("default")], 2)],
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
      const h = {
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
            transitionDisabled(t) {
              t || this.setExplicitDimensions();
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
            async handleResize(t) {
              if (
                this.transitionDisabled ||
                (this.height && !this.width && this.wrapperHeightPx === t.height) ||
                (!this.height && this.width && this.wrapperWidthPx === t.width) ||
                (this.height && this.width && this.wrapperHeightPx === t.height && this.wrapperWidthPx === t.width)
              )
                return this.$emit("afterResize");
              (this.resizing = !0),
                clearTimeout(this.timeout),
                this.nested &&
                  this.ancestors.length &&
                  (this.ancestors.forEach((t) => this.$e.$emit("pauseSmoothReflow:" + t)), await this.$nextTick()),
                this.height && (this.wrapperHeightPx = t.height),
                this.width && (this.wrapperWidthPx = t.width),
                (this.timeout = setTimeout(() => {
                  this.nested && this.ancestors.length && this.ancestors.forEach((t) => this.$e.$emit("resumeSmoothReflow:" + t)),
                    (this.resizing = !1),
                    this.afterResize();
                }, this.duration));
            },
            findSmoothReflowAncestors() {
              let t,
                e = !0;
              for (; e; )
                (t = ((t && t.parentElement) || this.$el.parentElement).closest("[data-smooth-reflow-id]")),
                  t ? this.ancestors.push(t.getAttribute("data-smooth-reflow-id")) : (e = !1);
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
            beforeEnter(t) {
              (this.transitionActive = !0), this.$emit("beforeEnter", t);
            },
            enter(t) {
              this.$emit("enter", t);
            },
            afterEnter(t) {
              (this.transitionActive = !1), this.$emit("afterEnter", t);
            },
            enterCancelled(t) {
              this.$emit("afterEnter", t);
            },
            beforeLeave(t) {
              (this.transitionActive = !0), this.$emit("beforeLeave", t);
            },
            leave(t) {
              this.$emit("leave", t);
            },
            afterLeave(t) {
              (this.transitionActive = !1), this.$emit("afterLeave", t);
            },
            leaveCancelled(t) {
              this.$emit("leaveCancelled", t);
            }
          }
        },
        d = () => {
          (0, r.sj)((t, e) => ({ "46e573ab": t.resizeDurationMs, "7c58a88c": t.transitionDurationMs }));
        },
        l = h.setup;
      h.setup = l ? (t, e) => (d(), l(t, e)) : d;
      const c = h;
      i(65503);
      const u = (0, i(51900).Z)(c, s, [], !1, null, "f6d3e6a8", null).exports;
    },
    65503: (t, e, i) => {
      var s = i(53772);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("c3632014", s, !1, {});
    },
    58206: (t, e, i) => {
      var s = i(2145);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("9f0bbb26", s, !1, { ssrId: !0 });
    }
  }
]);
