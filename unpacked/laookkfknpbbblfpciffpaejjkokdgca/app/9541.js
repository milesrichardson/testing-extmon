(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9541, 6399],
  {
    63568: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      const s = {
        clock: { name: "Clock", feature: "default clock", icon: i(45671) },
        pomodoro: { name: "Pomodoro", icon: i(95648), upsell: "UPSELL_POMODORO" },
        percent: { name: "Percent", feature: "percent clock", icon: i(12038) }
      };
    },
    30827: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => o });
      var s = i(99437);
      const o = (m.showAnyway = new (s.Z.extend({
        name: "ShowAnyway",
        data: () => ({ widgets: [] }),
        methods: {
          show(t) {
            this.includes(t) || this.widgets.push(t);
          },
          hide(t) {
            const e = this.widgets.indexOf(t);
            ~e && this.widgets.splice(e, 1);
          },
          includes(t) {
            return this.widgets.includes(t);
          }
        }
      }))());
    },
    67035: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([t.id, ".clocks-reflow[data-v-6e66e530]{max-width:100%}", ""]);
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
    43422: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var s = i(8081),
        o = i.n(s),
        a = i(23645),
        n = i.n(a)()(o());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.percent-format[data-v-7ad1b549] { top: 65%; opacity: 1; font-size: 25%;\n}\n@media screen and (max-width: 450px) {\n.percent-format[data-v-7ad1b549] { margin-bottom: -3px; top: auto; font-size: 62%;\n}\n}\n",
        ""
      ]);
      const r = n;
    },
    89541: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => A });
      var s = function () {
        var t = this,
          e = t._self._c;
        return e("three-col-layout", {
          staticClass: "app-container clock center-clock has-dash-icon",
          class: { "show-anyway": t.showAnyway.includes("clock") },
          attrs: { "data-show-anyway": "clock", "data-test": "center-clock" },
          scopedSlots: t._u([
            {
              key: "left",
              fn: function () {
                return [
                  e(
                    "transition",
                    { attrs: { name: "fade", mode: "out-in" } },
                    [
                      t.$touch
                        ? t._e()
                        : e("quick-nav", {
                            key: t.activeClock,
                            attrs: { region: "center", options: t.centerOptions, active: t.activeClock },
                            on: { "switch-to": t.switchClock }
                          })
                    ],
                    1
                  )
                ];
              },
              proxy: !0
            },
            {
              key: "center",
              fn: function () {
                return [
                  e(
                    "smooth-reflow",
                    {
                      staticClass: "clocks-reflow",
                      attrs: {
                        "await-apps-ready": "",
                        height: !1,
                        width: !0,
                        "transition-duration": 1e3,
                        duration: 100,
                        transition: "smooth-width-fade"
                      }
                    },
                    [
                      e(
                        "div",
                        {
                          directives: [
                            {
                              name: "mobile-click",
                              rawName: "v-mobile-click",
                              value: t.toggleDropdown.bind(null, !0),
                              expression: "toggleDropdown.bind(null, true)"
                            }
                          ],
                          key: t.activeClock
                        },
                        [t.percentClock ? e("percent-clock") : e("default-clock")],
                        1
                      )
                    ]
                  )
                ];
              },
              proxy: !0
            },
            {
              key: "right",
              fn: function () {
                return [
                  e(
                    t.$touch ? "ToastMenu" : "Dropdown",
                    {
                      tag: "component",
                      attrs: { "on-dash": !0, active: t.dropdownActive, "section-title": "Clock Settings" },
                      on: { toggle: t.toggleDropdown },
                      scopedSlots: t._u([
                        {
                          key: "header",
                          fn: function () {
                            return [
                              t.$touch
                                ? e("quick-nav-options-list", {
                                    attrs: { options: t.centerOptions, active: t.activeClock },
                                    on: { "switch-to": t.switchClock }
                                  })
                                : t._e()
                            ];
                          },
                          proxy: !0
                        }
                      ])
                    },
                    [
                      t._v(" "),
                      t.percentClock
                        ? e("dropdown-option", {
                            attrs: { name: "Edit Schedule", "data-test": "edit-schedule" },
                            nativeOn: {
                              click: function (e) {
                                return t.openScheduleSettings.apply(null, arguments);
                              }
                            }
                          })
                        : e(
                            "li",
                            {
                              staticClass: "dropdown-list-item has-toggle",
                              class: { on: !t.hour12clock },
                              attrs: { "data-test": "hour-format" },
                              on: { click: t.switchBetween12and24hr }
                            },
                            [
                              e("span", { staticClass: "dropdown-list-label" }, [t._v("24-hour clock")]),
                              t._v(" "),
                              e(
                                "span",
                                { staticClass: "toggle-slider" },
                                [e("inline-svg", { staticClass: "toggle-switch", attrs: { src: i(35966) } })],
                                1
                              )
                            ]
                          )
                    ],
                    1
                  )
                ];
              },
              proxy: !0
            }
          ])
        });
      };
      s._withStripped = !0;
      var o = i(63568),
        a = i(40531),
        n = i(36399),
        r = function () {
          var t = this,
            e = t._self._c;
          return e("span", { staticClass: "default-clock", attrs: { "data-test": "default-clock" } }, [
            e("div", { staticClass: "time", attrs: { "data-test": "default-clock-time" } }, [t._v(t._s(t.date.getTimeString()))])
          ]);
        };
      r._withStripped = !0;
      var h = i(42223);
      const c = {
        name: "DefaultClock",
        mixins: [h.Z],
        computed: {
          hour12clock() {
            return this.updateTime(), a.ax.hour12clock;
          },
          date: () => m.models.date
        },
        methods: {
          updateTime() {
            this.date.set("date", m.date());
          }
        }
      };
      var l = i(51900);
      const d = (0, l.Z)(c, r, [], !1, null, null, null).exports;
      var u = function () {
        var t = this,
          e = t._self._c;
        return e("span", { staticClass: "percent-clock", attrs: { "data-test": "percent-clock" } }, [
          e("div", { staticClass: "time" }, [
            t._v("\n\t\t" + t._s(t.balance.get("percent"))),
            e("span", { staticClass: "format percent-format" }, [t._v("%")])
          ])
        ]);
      };
      u._withStripped = !0;
      const M = { name: "PercentClock", mixins: [h.Z], computed: { balance: () => m.models.balanceMode } };
      i(62e3);
      const g = (0, l.Z)(M, u, [], !1, null, "7ad1b549", null).exports;
      var p = i(3728),
        w = i(30827),
        D = i(81405);
      const f = {
        name: "Clock",
        components: {
          ThreeColLayout: p.Z,
          SmoothReflow: n.default,
          DefaultClock: d,
          PercentClock: g,
          ToastMenu: () => i.e(12).then(i.bind(i, 30012)),
          Dropdown: () => i.e(6207).then(i.bind(i, 6207)),
          DropdownOption: () => i.e(8117).then(i.bind(i, 88117)),
          QuickNav: () => i.e(6686).then(i.bind(i, 36686)),
          QuickNavOptionsList: () => i.e(1510).then(i.bind(i, 81510))
        },
        mixins: [h.Z],
        unreactive: () => ({ centerOptions: o.Z, showAnyway: w.Z }),
        data: () => ({ dropdownActive: !1 }),
        computed: {
          activeClock() {
            return this.percentClock ? "percent" : "clock";
          },
          percentClock: {
            get: () => a.ax.percentClock,
            set(t) {
              a.ax.percentClock = t;
            }
          },
          hour12clock: {
            get: () => a.ax.hour12clock,
            set(t) {
              a.ax.hour12clock = t;
            }
          }
        },
        methods: {
          switchClock(t) {
            if ("pomodoro" === t) {
              if (!this.$plus) return;
              this.$emit("pomodoro-show", !0);
            } else this.percentClock = "percent" === t;
            this.dropdownActive = !1;
          },
          toggleDropdown(t = !this.dropdownActive) {
            this.dropdownActive = t;
          },
          switchBetween12and24hr() {
            (this.hour12clock = !this.hour12clock),
              D.ZP.capture("clock format toggle", { feature: "default clock", new_value: this.hour12clock ? "12h" : "24h" });
          },
          openScheduleSettings() {
            this.$plus
              ? (m.commandManager.executeAsync("settings.display", null, { scheduleVisible: !0, section: "balance" }),
                (this.dropdownActive = !1),
                D.ZP.capture("edit schedule click", { feature: "percent clock", is_paid_event: !0 }))
              : m.cmd("modal.open", "UPSELL_BALANCE_MODE", { eventSource: "dash" });
          }
        }
      };
      i(16253);
      const A = (0, l.Z)(f, s, [], !1, null, "6e66e530", null).exports;
    },
    36399: (t, e, i) => {
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
        c = () => {
          (0, r.sj)((t, e) => ({ "3872912c": t.resizeDurationMs, "7b63f4cb": t.transitionDurationMs }));
        },
        l = h.setup;
      h.setup = l ? (t, e) => (c(), l(t, e)) : c;
      const d = h;
      i(67135);
      const u = (0, i(51900).Z)(d, s, [], !1, null, "256e142c", null).exports;
    },
    16253: (t, e, i) => {
      var s = i(67035);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("398c3682", s, !1, {});
    },
    67135: (t, e, i) => {
      var s = i(68657);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("1ea382bd", s, !1, {});
    },
    62e3: (t, e, i) => {
      var s = i(43422);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, i(45346).Z)("0ba82a97", s, !1, { ssrId: !0 });
    },
    35966: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCI+PC9jaXJjbGU+PC9zdmc+Cg==";
    },
    45671: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTM1IDMwLjc1N1YxNGEzIDMgMCAxMC02IDB2MThjMCAuODkuMzg4IDEuNjkgMS4wMDMgMi4yMzkuMDM4LjA0Mi4wNzguMDg0LjExOC4xMjVsOS45IDkuOWEzIDMgMCAwMDQuMjQyLTQuMjQzTDM1IDMwLjc1N3oiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiA2NGMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJDNjQgMTQuMzI3IDQ5LjY3MyAwIDMyIDAgMTQuMzI3IDAgMCAxNC4zMjcgMCAzMmMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJ6bTAtNmMxNC4zNiAwIDI2LTExLjY0IDI2LTI2UzQ2LjM2IDYgMzIgNiA2IDE3LjY0IDYgMzJzMTEuNjQgMjYgMjYgMjZ6Ii8+PC9zdmc+";
    },
    12038: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjkgMjRhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6bS0zLjUgMGEzLjUgMy41IDAgMTEtNyAwIDMuNSAzLjUgMCAwMTcgMHpNNDIgNDdhNyA3IDAgMTAwLTE0IDcgNyAwIDAwMCAxNHptMC0zLjVhMy41IDMuNSAwIDEwMC03IDMuNSAzLjUgMCAwMDAgN3oiLz48cGF0aCBkPSJNNDUuNTkxIDE3LjU5MWEyLjI1IDIuMjUgMCAwMC0zLjE4MiAwTDE3LjMwNyA0Mi42OTNhMi4yNSAyLjI1IDAgMTAzLjE4MiAzLjE4Mkw0NS41OSAyMC43NzNhMi4yNSAyLjI1IDAgMDAwLTMuMTgyeiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTY0IDMyYzAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMkMxNC4zMjcgNjQgMCA0OS42NzMgMCAzMiAwIDE0LjMyNyAxNC4zMjcgMCAzMiAwYzE3LjY3MyAwIDMyIDE0LjMyNyAzMiAzMnptLTYgMGMwIDE0LjM2LTExLjY0IDI2LTI2IDI2UzYgNDYuMzYgNiAzMiAxNy42NCA2IDMyIDZzMjYgMTEuNjQgMjYgMjZ6Ii8+PC9zdmc+";
    },
    95648: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTMyLjc4NCA1MS4xOTJsLS43MS0uNzEtLjcxLjcxYTMgMyAwIDAxLTQuMjQzLTQuMjQybDIuODI5LTIuODI5YTIuOTkgMi45OSAwIDAxMi4xMTctLjg3OCAyLjk5IDIuOTkgMCAwMTIuMTMuODc4bDIuODMgMi44MjlhMyAzIDAgMDEtNC4yNDMgNC4yNDJ6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzcuNjc2IDYuOThhNC44OCA0Ljg4IDAgMDAtMS41NzggMS4zOTRjNy42NjItMS4zNDIgMTQuMDY4LjQgMTguODMzIDQuMzI2IDUuNjU0IDQuNjU5IDguNTE2IDExLjk5OCA4Ljc1NSAxOS40NTQuMjQgNy40OC0yLjEzNiAxNS40MjQtNy40MDYgMjEuNTM5QzUwLjk1NCA1OS44NzMgNDIuODI1IDY0IDMyIDY0Yy0xMC44MjUgMC0xOC45NTMtNC4xMjYtMjQuMjgtMTAuMzA3QzIuNDUgNDcuNTc4LjA3NCAzOS42MzMuMzE0IDMyLjE1My41NTQgMjQuNjk5IDMuNDE1IDE3LjM2IDkuMDcgMTIuN2M0Ljc2NS0zLjkyNiAxMS4xNy01LjY2OCAxOC44MzMtNC4zMjZhNC44OCA0Ljg4IDAgMDAtMS41NzgtMS4zOTRDMjQuOCA2LjEwOSAyMy4wNCA2IDIyLjUgNmEzIDMgMCAwMTAtNmMuOTYgMCAzLjk1LjE0MSA2LjggMS43Ny45Ny41NTQgMS44OTIgMS4yNjQgMi43IDIuMTVhMTEuMDg4IDExLjA4OCAwIDAxMi43LTIuMTVDMzcuNTUuMTQxIDQwLjU0IDAgNDEuNSAwYTMgMyAwIDExMCA2Yy0uNTQgMC0yLjMuMTA5LTMuODI0Ljk4ek0zMyAxNS4zMjlhMi45OTcgMi45OTcgMCAwMS0yLjAwMiAwYy04LjMwNi0yLjcxMy0xNC4yMjctMS4yMDEtMTguMTE1IDIuMDAyLTQuMDE4IDMuMzEtNi4zNzUgOC44NDYtNi41NzMgMTUuMDE1LS4wMTguNTUtLjAxOCAxLjEwMS0uMDAxIDEuNjU0SDE2di0yYTMgMyAwIDAxNiAwdjJoN3YtNmEzIDMgMCAwMTYgMHY2aDd2LTJhMyAzIDAgMDE2IDB2Mmg5LjY5Yy4wMTctLjU1My4wMTctMS4xMDQgMC0xLjY1NC0uMTk5LTYuMTY5LTIuNTU2LTExLjcwNC02LjU3NC0xNS4wMTUtMy44ODgtMy4yMDMtOS44MDktNC43MTUtMTguMTE1LTIuMDAyek03LjE4NSA0MGMuOTQgMy41NSAyLjYzIDYuOTMzIDUuMDggOS43NzZDMTYuMzkgNTQuNTY0IDIyLjgyNSA1OCAzMiA1OGM5LjE3NSAwIDE1LjYwOS0zLjQzNiAxOS43MzUtOC4yMjQgMi40NS0yLjg0MyA0LjE0LTYuMjI2IDUuMDgtOS43NzZINy4xODV6Ii8+PC9zdmc+";
    }
  }
]);
