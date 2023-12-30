(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7769, 5273],
  {
    53772: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => h });
      var s = i(8081),
        a = i.n(s),
        o = i(23645),
        r = i.n(o)()(a());
      r.push([
        t.id,
        ".smooth-reflow[data-v-f6d3e6a8]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-f6d3e6a8]{transition:height var(--46e573ab) ease,width var(--46e573ab) ease}.smooth-reflow.tr-height[data-v-f6d3e6a8]{transition:height var(--46e573ab) ease}.smooth-reflow.tr-width[data-v-f6d3e6a8]{display:flex;justify-content:center;transition:width var(--46e573ab) ease}.smooth-reflow.tr-width>div[data-v-f6d3e6a8]{width:fit-content}.smooth-reflow.hide-overflow[data-v-f6d3e6a8]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-height-fade-enter-active{transition:opacity var(--7c58a88c) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7c58a88c) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-width-fade-enter-active{transition:opacity var(--7c58a88c) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7c58a88c) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",
        ""
      ]);
      const h = r;
    },
    17975: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => h });
      var s = i(8081),
        a = i.n(s),
        o = i(23645),
        r = i.n(o)()(a());
      r.push([
        t.id,
        "\n/* stylelint-disable */\n.app-loading[data-v-2205b235] { height: 100%; display: flex; gap: 1rem; align-items: center; justify-content: center;\n}\n",
        ""
      ]);
      const h = r;
    },
    98389: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => a });
      var s = function () {
        return this._self._c, this._m(0);
      };
      s._withStripped = !0;
      i(24628);
      const a = (0, i(51900).Z)(
        { name: "AppLoading" },
        s,
        [
          function () {
            var t = this._self._c;
            return t("div", { staticClass: "app-loading" }, [this._v("\n\tLoading… "), t("div", { staticClass: "loading-icon" })]);
          }
        ],
        !1,
        null,
        "2205b235",
        null
      ).exports;
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
      var a = i(61706),
        o = i(42223),
        r = i(96046),
        h = i(20144);
      const n = {
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
        d = () => {
          (0, h.sj)((t, e) => ({ "46e573ab": t.resizeDurationMs, "7c58a88c": t.transitionDurationMs }));
        },
        l = n.setup;
      n.setup = l ? (t, e) => (d(), l(t, e)) : d;
      const u = n;
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
    24628: (t, e, i) => {
      var s = i(17975);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("26637eee", s, !1, { ssrId: !0 });
    },
    63741: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgPjxwYXRoIGQ9Ik0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDB6bTAgMTkuNjZjLS45MzggMC0xLjU4LS43MjMtMS41OC0xLjY2IDAtLjk2NC42NjktMS42NiAxLjU4LTEuNjYuOTYzIDAgMS41OC42OTYgMS41OCAxLjY2IDAgLjkzOC0uNjE3IDEuNjYtMS41OCAxLjY2em0uNjIyLTYuMzM5Yy0uMjM5LjgxNS0uOTkyLjgyOS0xLjI0MyAwLS4yODktLjk1Ni0xLjMxNi00LjU4NS0xLjMxNi02Ljk0MiAwLTMuMTEgMy44OTEtMy4xMjUgMy44OTEgMC0uMDAxIDIuMzcxLTEuMDgzIDYuMDk0LTEuMzMyIDYuOTQyeiIvPjwvc3ZnPgo=";
    },
    9241: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyNCI+PHBhdGggZD0iTTE5LjE1IDcuNUgyLjgzOGEuNS41IDAgMCAwLS41LjVsMS44MSAxNGEyIDIgMCAwIDAgMiAyaDkuOTU0YTIgMiAwIDAgMCAyLTJMMTkuNjUgOGEuNS41IDAgMCAwLS41LS41em0tOS45IDEzYS43NS43NSAwIDAgMS0xLjUgMHYtOWEuNzUuNzUgMCAwIDEgMS41IDB2OXptNSAwYS43NS43NSAwIDAgMS0xLjUgMHYtOWEuNzUuNzUgMCAwIDEgMS41IDB2OXpNMjAuNDMgNGgtNC4xOGEuMjUuMjUgMCAwIDEtLjI1LS4yNVYyLjVBMi41IDIuNSAwIDAgMCAxMy41IDBoLTVBMi41IDIuNSAwIDAgMCA2IDIuNXYxLjI1YS4yNS4yNSAwIDAgMS0uMjUuMjVoLTQuNWExIDEgMCAwIDAgMCAyaDE5LjE4YTEgMSAwIDAgMCAwLTJ6TTggMy43NVYyLjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXYxLjI1YS4yNS4yNSAwIDAgMS0uMjUuMjVoLTUuNUEuMjUuMjUgMCAwIDEgOCAzLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+Cg==";
    }
  }
]);
