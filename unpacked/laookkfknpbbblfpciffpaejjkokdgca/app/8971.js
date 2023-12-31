(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8971, 6399],
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
    83151: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([
        t.id,
        ".permission-overlay[data-v-74d0d40a]{display:flex;position:absolute;z-index:1000;flex-direction:column;background:rgb(0 0 0/var(--opacity-stop-4));-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);inset:0}.upper[data-v-74d0d40a],.lower[data-v-74d0d40a]{flex:1 1 100%}.upper[data-v-74d0d40a]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-end;text-align:center}.center[data-v-74d0d40a]{flex:0 0 350px}.title[data-v-74d0d40a]{padding-bottom:10px;font-size:2.25rem}.description[data-v-74d0d40a]{color:var(--color-stop-6);font-size:1.5rem}.arrow-wrapper[data-v-74d0d40a]{align-self:center}.arrow-wrapper.top[data-v-74d0d40a]{order:-1;animation:oscillate-74d0d40a 1.1s infinite;rotate:180deg}.arrow-wrapper.right[data-v-74d0d40a]{align-self:flex-end;margin-right:260px}.action-buttons-wrapper[data-v-74d0d40a]{position:absolute;inset:0}.action-buttons-wrapper .privacy[data-v-74d0d40a]{margin-top:2.25rem;color:var(--color-stop-5);font-size:.975rem}.action-buttons-wrapper .privacy a[data-v-74d0d40a]{border-bottom:1px solid currentcolor;color:currentcolor}.action-buttons-wrapper .button-row[data-v-74d0d40a]{display:flex;justify-content:center;margin-top:24px;gap:20px}.action-buttons-wrapper .button-row .dash-button[data-v-74d0d40a]{padding:11px 34px}.icon[data-v-74d0d40a]{--icon-size: 50px;margin-top:10px;animation:oscillate-74d0d40a 1.1s infinite}@keyframes oscillate-74d0d40a{50%{transform:translateY(-10px)}}.slide-down-fade-enter[data-v-74d0d40a],.slide-down-fade-leave-to[data-v-74d0d40a]{transform:translateY(-50px)}.slide-down-fade-enter-active[data-v-74d0d40a],.slide-down-fade-leave-active[data-v-74d0d40a]{transition-duration:500ms}",
        ""
      ]);
      const r = n;
    },
    68657: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([
        t.id,
        ".smooth-reflow[data-v-256e142c]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-256e142c]{transition:height var(--3872912c) ease,width var(--3872912c) ease}.smooth-reflow.tr-height[data-v-256e142c]{transition:height var(--3872912c) ease}.smooth-reflow.tr-width[data-v-256e142c]{display:flex;justify-content:center;transition:width var(--3872912c) ease}.smooth-reflow.tr-width>div[data-v-256e142c]{width:fit-content}.smooth-reflow.hide-overflow[data-v-256e142c]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",
        ""
      ]);
      const r = n;
    },
    68971: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "permission-overlay dark", attrs: { "data-test": "permission-overlay" } },
          [
            e("transition", { attrs: { name: "slide-down-fade", mode: "out-in" } }, [
              t.contentVisible
                ? e(
                    "div",
                    { staticClass: "upper" },
                    [
                      e("div", { staticClass: "title" }, [t._v(t._s(t.title))]),
                      t._v(" "),
                      e("div", { staticClass: "description" }, [t._v(t._s(t.description))]),
                      t._v(" "),
                      e("smooth-reflow", [
                        t.browserRequestOpen
                          ? t._e()
                          : e("div", { staticClass: "action-buttons-wrapper" }, [
                              e("div", { staticClass: "privacy" }, [
                                t._v("We value and protect your privacy. Learn more in our "),
                                e("a", { attrs: { href: "https://momentumdash.com/legal/privacy", target: "_blank" } }, [
                                  t._v("Privacy Policy.")
                                ])
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "button-row" }, [
                                e(
                                  "div",
                                  {
                                    staticClass: "dash-button dash-button-neutral",
                                    attrs: { "data-test": "deny-permissions" },
                                    on: {
                                      click: function (e) {
                                        return t.resolvePermissionRequest(!1);
                                      }
                                    }
                                  },
                                  [t._v("Go back")]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    staticClass: "dash-button dash-button-primary",
                                    attrs: { "data-test": "allow-permissions" },
                                    on: { click: t.requestPermissions }
                                  },
                                  [t._v("Continue")]
                                )
                              ])
                            ])
                      ]),
                      t._v(" "),
                      e("smooth-reflow", { staticClass: "arrow-wrapper", class: t.iconStyling }, [
                        t.browserRequestOpen
                          ? e("div", [
                              e("div", { staticClass: "icon" }, [e("inline-svg", { staticClass: "icon", attrs: { src: i(75356) } })], 1)
                            ])
                          : t._e()
                      ])
                    ],
                    1
                  )
                : t._e()
            ]),
            t._v(" "),
            e("div", { staticClass: "center" }),
            t._v(" "),
            e("div", { staticClass: "lower" })
          ],
          1
        );
      };
      s._withStripped = !0;
      var o = i(77140),
        a = i(80809);
      const n = {
        name: "PermissionRequest",
        components: { SmoothReflow: i(36399).default },
        props: {
          permissionExplanation: { type: String, default: "To use this feature" },
          widgetName: { type: String, default: "Momentum" },
          permissions: { type: Object, default: () => {} },
          resolve: { type: Function, default: () => {} }
        },
        setup: () => ({ browser: a.Z.getBrowser() }),
        data: () => ({ browserRequestOpen: !1, contentVisible: !1 }),
        computed: {
          iconStyling: () => ({ top: a.Z.isWindowsOs() || a.Z.isFirefox(), right: a.Z.isFirefox() }),
          title() {
            return `${this.widgetName} Requires Additional Permissions`;
          },
          description() {
            return `${this.permissionExplanation}, ${this.widgetName} needs additional permissions.`;
          }
        },
        mounted() {
          m.widgetManager.hideApps({ lock: !0 }), (this.contentVisible = !0);
        },
        destroyed() {
          m.widgetManager.showApps({ unlock: !0 });
        },
        methods: {
          requestPermissions() {
            (this.browserRequestOpen = !0),
              o.H.permissions.request(this.permissions).then(
                (t) => this.resolvePermissionRequest(t),
                (t) => {
                  console.error(t), this.resolvePermissionRequest(!1);
                }
              );
          },
          async resolvePermissionRequest(t) {
            (this.contentVisible = !1), await this.$nextTick(), this.resolve(t), this.$emit("dismiss");
          }
        }
      };
      i(38758);
      const r = (0, i(51900).Z)(n, s, [], !1, null, "74d0d40a", null).exports;
    },
    36399: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => c });
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
        h = () => {
          (0, r.sj)((t, e) => ({ "3872912c": t.resizeDurationMs, "7b63f4cb": t.transitionDurationMs }));
        },
        l = d.setup;
      d.setup = l ? (t, e) => (h(), l(t, e)) : h;
      const p = d;
      i(67135);
      const c = (0, i(51900).Z)(p, s, [], !1, null, "256e142c", null).exports;
    },
    38758: (t, e, i) => {
      var s = i(83151);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("2f242a79", s, !1, {});
    },
    67135: (t, e, i) => {
      var s = i(68657);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("1ea382bd", s, !1, {});
    },
    75356: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTE2LjYgOC42TDEyIDEzLjIgNy40IDguNiA2IDEwbDYgNiA2LTZ6Ii8+PC9zdmc+";
    }
  }
]);
