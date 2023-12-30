(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8586, 5273],
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
    72628: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.path-select-wrapper[data-v-1b545050] { width: 100%; margin-bottom: var(--form-element-margin); position: relative; display: inline-block;\n}\n.path-select[data-v-1b545050] { width: 100%; margin: 0; visibility: hidden;\n}\n.select-wrapper .path-select[data-v-1b545050] { visibility: visible;\n}\n.select-overlay-wrapper[data-v-1b545050] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: inline-flex; align-items: center; background-color: var(--input-bg-color); border-radius: var(--border-radius); box-shadow: inset 0 0 0 1px var(--input-border-color);\n}\n.select-overlay[data-v-1b545050] {\n}\n\n",
        ""
      ]);
      const r = n;
    },
    38586: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = function () {
        var t = this,
          e = t._self._c;
        return e(
          "smooth-reflow",
          { attrs: { nested: !0, "hide-overflow": !0 } },
          [
            e("transition", { attrs: { name: "fade" } }, [
              t.showPathSelect
                ? e("div", [
                    e("label", [t._v("Value")]),
                    t._v(" "),
                    e("div", { staticClass: "path-select-wrapper", class: { "select-wrapper": !(t.loading || t.noResults) } }, [
                      e(
                        "select",
                        {
                          staticClass: "path-select",
                          class: { error: t.highlightError },
                          attrs: { disabled: t.loading || t.noResults, "data-test": "path-select" },
                          domProps: { value: t.value },
                          on: { input: t.onInput }
                        },
                        [
                          t.noResults ? t._e() : e("option", { attrs: { disabled: "", value: "" } }, [t._v("Select an option")]),
                          t._v(" "),
                          t._l(t.pathOptions, function (i, s) {
                            return e("option", { key: s, attrs: { "data-value": i.value }, domProps: { value: i.path } }, [
                              t._v(" " + t._s(i.label))
                            ]);
                          })
                        ],
                        2
                      ),
                      t._v(" "),
                      t.loading || t.noResults
                        ? e("div", { staticClass: "select-overlay-wrapper" }, [
                            t.loading
                              ? e("div", { staticClass: "select-overlay" }, [t._v("Loading...")])
                              : t.noResults
                              ? e("div", { staticClass: "select-overlay" }, [t._v("No Results")])
                              : t._e()
                          ])
                        : t._e()
                    ])
                  ])
                : t._e()
            ])
          ],
          1
        );
      };
      s._withStripped = !0;
      var o = i(55273),
        a = i(58725);
      const n = {
        name: "MetricPath",
        components: { SmoothReflow: o.default },
        timeout: null,
        props: {
          value: { type: String, default: "" },
          componentFieldWarnings: { type: Array, default: () => [] },
          viewManager: { type: Object, required: !0 }
        },
        data: () => ({ pathOptions: [], loading: !1, noResults: !1 }),
        computed: {
          activeItem() {
            return this.viewManager.activeItem;
          },
          editProps() {
            return this.viewManager.editProps;
          },
          collection() {
            return this.viewManager.collection;
          },
          showPathSelect() {
            var t;
            return null === (t = this.urlWithProtocol) || void 0 === t ? void 0 : t.includes(".");
          },
          highlightError() {
            return -1 !== this.componentFieldWarnings.indexOf("path");
          },
          urlWithProtocol() {
            return m.utils.ensureUrlScheme(this.editProps.url);
          }
        },
        watch: {
          urlWithProtocol(t) {
            this.debouncedGetUrlPaths(t);
          }
        },
        mounted() {
          this.editProps.url && this.debouncedGetUrlPaths(this.urlWithProtocol, !0);
        },
        methods: {
          debouncedGetUrlPaths(t, e) {
            (this.loading = !0), (this.noResults = !1);
            const i = () => {
              a.Z.getPathOptions(t)
                .then((t) => {
                  const e = t.data && t.data.values;
                  e.length
                    ? this.$set(
                        this,
                        "pathOptions",
                        e.map((t) => ({ label: `${t.path}: ${t.value}`, path: t.path, value: t.value }))
                      )
                    : (this.noResults = !0);
                })
                .catch(() => {
                  this.noResults = !0;
                })
                .finally(() => (this.loading = !1));
            };
            e ? i() : this.showPathSelect && (clearTimeout(this.$options.timeout), (this.$options.timeout = setTimeout(i, 1e3)));
          },
          onInput(t) {
            const e = t.target,
              i = e.options[e.selectedIndex].attributes["data-value"].value;
            this.$set(this.editProps, "value", i), this.$emit("input", e.value);
          }
        }
      };
      i(26329);
      const r = (0, i(51900).Z)(n, s, [], !1, null, "1b545050", null).exports;
    },
    55273: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => p });
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
      const u = h;
      i(65503);
      const p = (0, i(51900).Z)(u, s, [], !1, null, "f6d3e6a8", null).exports;
    },
    65503: (t, e, i) => {
      var s = i(53772);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("c3632014", s, !1, {});
    },
    26329: (t, e, i) => {
      var s = i(72628);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("db95c1ce", s, !1, { ssrId: !0 });
    }
  }
]);
