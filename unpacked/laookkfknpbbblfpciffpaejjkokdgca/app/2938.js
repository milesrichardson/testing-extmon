(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [2938, 6399],
  {
    68657: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => n });
      var s = i(8081),
        a = i.n(s),
        o = i(23645),
        r = i.n(o)()(a());
      r.push([
        t.id,
        ".smooth-reflow[data-v-256e142c]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-256e142c]{transition:height var(--3872912c) ease,width var(--3872912c) ease}.smooth-reflow.tr-height[data-v-256e142c]{transition:height var(--3872912c) ease}.smooth-reflow.tr-width[data-v-256e142c]{display:flex;justify-content:center;transition:width var(--3872912c) ease}.smooth-reflow.tr-width>div[data-v-256e142c]{width:fit-content}.smooth-reflow.hide-overflow[data-v-256e142c]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",
        ""
      ]);
      const n = r;
    },
    13714: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => n });
      var s = i(8081),
        a = i.n(s),
        o = i(23645),
        r = i.n(o)()(a());
      r.push([
        t.id,
        "\n/* stylelint-disable */\n\t/* inset: auto !important; Override to remove awkward positioning properties from style.css. Remove this whole declaration when that code is removed */\n.toggle-switch[data-v-463006a2] { inset: auto !important;\n}\n.toggle-switch[data-v-463006a2] { --switch-bg: var(--color-stop-3); height: 17px; width: 28px; position: relative; display: inline-block; background: var(--switch-bg); border-radius: 50px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.0); transition: all 0.1s ease; isolation: isolate;\n}\n.toggle-switch.on[data-v-463006a2] { --switch-bg: #7edc74;\n}\n.toggle-switch[data-v-463006a2]:before { --size: 11px; height: var(--size); width: var(--size); margin: 2px 1px; position: absolute; top: 1px; left: 3px; z-index: 2; background: rgba(255,255,255,1); border-radius: var(--size); box-shadow: 0 0 0 1px rgba(0,0,0,0.0); content: ''; transition: all 0.2s ease;\n}\n.toggle-switch.on[data-v-463006a2]:before { background: white; transform: translateX(10px);\n}\n",
        ""
      ]);
      const n = r;
    },
    10641: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => o });
      var s = function () {
        return (0, this._self._c)("div", { staticClass: "toggle-switch", class: { on: this.value } });
      };
      s._withStripped = !0;
      const a = { name: "ToggleSwitch", props: { value: { type: Boolean, default: !1 } } };
      i(88333);
      const o = (0, i(51900).Z)(a, s, [], !1, null, "463006a2", null).exports;
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
      var a = i(61706),
        o = i(42223),
        r = i(96046),
        n = i(20144);
      const h = {
          name: "SmoothReflow",
          directives: { ResizeSensor: a.Z },
          mixins: [o.Z],
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
              return this.awaitAppsReady && !r.Z.allowAwaitingAppsReadySmoothReflow;
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
        l = () => {
          (0, n.sj)((t, e) => ({ "3872912c": t.resizeDurationMs, "7b63f4cb": t.transitionDurationMs }));
        },
        d = h.setup;
      h.setup = d ? (t, e) => (l(), d(t, e)) : l;
      const p = h;
      i(67135);
      const c = (0, i(51900).Z)(p, s, [], !1, null, "256e142c", null).exports;
    },
    67135: (t, e, i) => {
      var s = i(68657);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("1ea382bd", s, !1, {});
    },
    88333: (t, e, i) => {
      var s = i(13714);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("27c56676", s, !1, { ssrId: !0 });
    }
  }
]);
