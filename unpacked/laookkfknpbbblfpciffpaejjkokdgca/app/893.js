(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [893, 12, 6207, 8117, 1510],
  {
    40063: (t, a, e) => {
      "use strict";
      e.d(a, { Z: () => o });
      let i = {};
      const o = {
        bind: function (t, a) {
          let e, o;
          (t.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const n = (t) => {
              (o = !1), ((t) => t && t.clientX > window.innerWidth)(t) ? (o = !0) : (e = t.target);
            },
            s = (i) => {
              o ||
                ((a.modifiers.bubble ||
                  (!t.contains(e) &&
                    !t.contains(i.target) &&
                    t !== e &&
                    t !== i.target &&
                    "true" !== t.dataset.justBoundClickOutsideHandler)) &&
                  a.value(i));
            };
          (t.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (t.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (i[t.dataset.clickOutsideMouseupHandlerId] = s),
            (i[t.dataset.clickOutsideMousedownHandlerId] = n),
            document.addEventListener("mouseup", s),
            document.addEventListener("mousedown", n);
        },
        unbind: function (t) {
          var a, e;
          null !== (a = t.dataset) &&
            void 0 !== a &&
            a.clickOutsideMouseupHandlerId &&
            null !== (e = t.dataset) &&
            void 0 !== e &&
            e.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", i[t.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", i[t.dataset.clickOutsideMousedownHandlerId]),
            delete i[t.dataset.clickOutsideMouseupHandlerId],
            delete i[t.dataset.clickOutsideMousedownHandlerId],
            delete t.dataset.clickOutsideMouseupHandlerId,
            delete t.dataset.clickOutsideMousedownHandlerId,
            delete t.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    8543: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => d });
      var i = e(8081),
        o = e.n(i),
        n = e(23645),
        s = e.n(n)()(o());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.fade-fast-enter[data-v-389ffa38], .fade-fast-leave-to[data-v-389ffa38] { opacity: 0 !important;\n} /* Make transition work for .stats-value class —> temporary */\n.stats[data-v-389ffa38] { margin-bottom: 4px; padding: 8px calc(var(--app-padding) - 6px); background: var(--color-stop-1); border-radius: 1px 1px 0 0; cursor: pointer;\n}\n.stats-heading[data-v-389ffa38] { margin: 0 0 7px; font-size: 0.875rem; font-weight: 600;\n}\n.stats-heading-period[data-v-389ffa38] { margin-left: 4px;\n}\n.stats-icon[data-v-389ffa38] { --icon-size: 7px; vertical-align: 4%;\n}\n.stats:hover .stats-icon[data-v-389ffa38] { opacity: 0.7;\n}\n.stats:hover:active .stats-icon[data-v-389ffa38] { opacity: 1;\n}\n.stats-row[data-v-389ffa38] { display: flex; justify-content: space-between;\n}\n.stats-item[data-v-389ffa38] { min-width: max-content; width: 48%; margin-top: -2px; margin-right: 12px;\n}\n.stats-label[data-v-389ffa38] { margin-bottom: 2px; opacity: 0.7; font-size: 13px;\n}\n.stats-value[data-v-389ffa38] { opacity: 0.9; font-size: 1.0625rem; letter-spacing: -0.3px;\n}\n\n/* Override dropdown component classes */\n[data-v-389ffa38] .dropdown { --padding: calc(var(--app-padding) - 6px); width: 200px; min-width: 200px; margin-top: 1px; top: 38px; z-index: 2;\n}\n[data-v-389ffa38] .dropdown-list-item.has-input { justify-content: space-between;\n}\n[data-v-389ffa38] .dropdown-list-item.has-input input { width: 3.1ch; margin: -4px 0; padding: 0 3px 2px; border-width: 0 0 2px 0; text-align: right;\n}\n[data-v-389ffa38] .dropdown-list-input-unit { margin-left: 4px; opacity: 0.75; font-size: 0.8125rem;\n}\n[data-v-389ffa38] .dropdown-list-item.disabled { opacity: 0.5; pointer-events: none;\n}\n\n/* Hide silly up/down controls on input type=number */\n.hide-controls[data-v-389ffa38]::-webkit-outer-spin-button, .hide-controls[data-v-389ffa38]::-webkit-inner-spin-button { -webkit-appearance: none;\n}\ninput[type=number].hide-controls[data-v-389ffa38] { -moz-appearance: textfield;\n}\n",
        ""
      ]);
      const d = s;
    },
    34842: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => d });
      var i = e(8081),
        o = e.n(i),
        n = e(23645),
        s = e.n(n)()(o());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.dropdown[data-v-0a952a33] { display: block;\n} /* Override general stylesheet dropdown styling for display: block, but move to this when refactor complete; */\n.dropdown-hide[data-v-0a952a33] { opacity: 0;\n}\n.dropdown-visible .icon[data-v-0a952a33] { opacity: 0.8;\n}\n.open-enter-active[data-v-0a952a33], .open-leave-active[data-v-0a952a33] { transition: opacity 0.1s ease;\n} /* Consolidate this with center nav and other animations? */\n.open-enter[data-v-0a952a33], .open-leave-to[data-v-0a952a33] { opacity: 0;\n}\n\n",
        ""
      ]);
      const d = s;
    },
    46111: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => d });
      var i = e(8081),
        o = e.n(i),
        n = e(23645),
        s = e.n(n)()(o());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.nav[data-v-0876512d] { display: flex;\n}\n.nav-item[data-v-0876512d] { position: relative; display: flex; align-items: center;\n}\n.nav-item .icon[data-v-0876512d] { padding: var(--icon-padding) calc(var(--icon-padding) - 4px); opacity: 0.5; color: var(--color-text);\n}\n.nav-item:first-child .icon[data-v-0876512d] { padding-left: calc(var(--icon-padding) + 2px);\n}\n.nav-item:last-child .icon[data-v-0876512d] { padding-right: calc(var(--icon-padding) + 2px);\n}\n.nav-item:hover .icon[data-v-0876512d] { opacity: 0.8;\n}\n.nav-item:hover:active .icon[data-v-0876512d], .nav-item.active .icon[data-v-0876512d] { opacity: 1 !important;\n}\n.nav-title[data-v-0876512d] { display: none;\n}\n.tooltip[data-v-0876512d] { padding: 3px 5px; position: absolute; top: calc(100% + 2px); left: 50%; z-index: 1; display: none; background: hsla(0deg 0% 15% / 95%); border-radius: 4px; color: white; font-size: 0.8125rem; transform: translateX(-50%); white-space: nowrap;\n}\n.nav-item:hover .tooltip[data-v-0876512d] { display: block;\n}\n.tooltip .badge[data-v-0876512d] { background: rgba(255 255 255 / 20%); color: white;\n}\n\n\t/* Mobile */\n.toast .nav[data-v-0876512d] { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-column-gap: 10px;\n}\n.toast .nav-item[data-v-0876512d] { padding: 7px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 6px; box-shadow: inset 0 0 0 1.5px var(--border-color); font-size: 12px;\n}\n.toast .nav-icon[data-v-0876512d] { --size: 22px; height: var(--size); width: var(--size); margin: 3px 0; opacity: 0.5; border-radius: 4px;\n}\n.toast .nav-title[data-v-0876512d] { margin: 1px 0 -1px; display: block; opacity: 0.7; line-height: 1.2;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.toast .tooltip[data-v-0876512d] { display: none;\n}\n.toast .nav-item.active[data-v-0876512d], .toast .nav-item[data-v-0876512d]:active { background: var(--border-color); box-shadow: none;\n}\n.toast .nav-item.active .nav-icon[data-v-0876512d], .toast .nav-item.active .nav-title[data-v-0876512d] { opacity: 1;\n}\n\n",
        ""
      ]);
      const d = s;
    },
    91398: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => d });
      var i = e(8081),
        o = e.n(i),
        n = e(23645),
        s = e.n(n)()(o());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.toast-hide[data-v-585a48d3] { opacity: 0;\n}\n.toast-visible .icon[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-container[data-v-585a48d3] { height: 0; width: 100%; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100; color: var(--color-text); overflow: visible;\n}\n.toast[data-v-585a48d3] { --toast-padding: calc(var(--app-padding) - 3px); --dropdown-padding: var(--toast-padding); max-width: none !important; margin: 0 !important; padding: 0; position: absolute; top: auto; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 2; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.toast > *[data-v-585a48d3]:not(.toast-header):first-child { padding-top: calc(var(--app-padding) / 2);\n}\n.toast-header[data-v-585a48d3] { padding: var(--toast-padding); text-align: left;\n}\n[data-v-585a48d3] .toast-title { line-height: 1.25;\n}\n[data-v-585a48d3] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-585a48d3] li { max-width: 100% !important;\n}\n.header-line[data-v-585a48d3] { margin: 0 -4px 4px !important;\n}\n.section-title[data-v-585a48d3] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; text-align: left; text-transform: uppercase;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n[data-v-585a48d3] .toast .line { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-585a48d3] .dropdown-list-item { padding-right: var(--toast-padding); padding-left: var(--toast-padding);\n}\n.button-close[data-v-585a48d3] { margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important; color: var(--color-text) !important; font-size: 12px; line-height: 1.2; text-align: center;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.button-close[data-v-585a48d3]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-overlay[data-v-585a48d3] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; background: hsla(0 0% 0% / 50%);\n}\n.slide-up-enter-active[data-v-585a48d3], .slide-up-leave-active[data-v-585a48d3] { transition: all 0.2s ease;\n}\n.slide-up-enter[data-v-585a48d3], .slide-up-leave-to[data-v-585a48d3]  { transform: translateY(100%);\n}\n",
        ""
      ]);
      const d = s;
    },
    90893: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => c });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a(
          t.$touch ? "ToastMenu" : "Dropdown",
          {
            tag: "component",
            attrs: { "on-dash": !0, active: t.active, "section-title": "Pomodoro Settings" },
            on: { toggle: t.toggleDropdown },
            scopedSlots: t._u([
              {
                key: "header",
                fn: function () {
                  return [
                    t.$touch
                      ? a("quick-nav-options-list", {
                          attrs: { options: t.options, active: "pomodoro" },
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
            a("div", { staticClass: "stats", on: { click: t.cycleTroughPeriods } }, [
              a("div", [
                a(
                  "div",
                  { staticClass: "stats-heading" },
                  [
                    t._v("\n\t\t\t\tCompleted\n\t\t\t\t"),
                    a("transition", { attrs: { mode: "out-in", name: "fade-fast" } }, [
                      a(
                        "span",
                        { key: t.period, staticClass: "stats-heading-period" },
                        [
                          t._v("\n\t\t\t\t\t\t" + t._s(t.completedStatsPeriod) + "\n\t\t\t\t\t\t"),
                          a("inline-svg", { staticClass: "icon stats-icon", attrs: { src: e(60786) } })
                        ],
                        1
                      )
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("div", { staticClass: "stats-row" }, [
                  a(
                    "div",
                    { staticClass: "stats-item" },
                    [
                      a("div", { staticClass: "stats-label" }, [t._v("Timers")]),
                      t._v(" "),
                      a("transition", { attrs: { mode: "out-in", name: "fade-fast" } }, [
                        a("div", { key: t.period, staticClass: "stats-value", attrs: { "data-test": "completed-count" } }, [
                          t._v(t._s(t.completedCounts))
                        ])
                      ])
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "div",
                    { staticClass: "stats-item" },
                    [
                      a("div", { staticClass: "stats-label" }, [t._v("Focused")]),
                      t._v(" "),
                      a("transition", { attrs: { mode: "out-in", name: "fade-fast" } }, [
                        a("div", { key: t.period, staticClass: "stats-value", attrs: { "data-test": "completed-time" } }, [
                          t._v(t._s(t.completedFocusedTime))
                        ])
                      ])
                    ],
                    1
                  )
                ])
              ])
            ]),
            t._v(" "),
            t.$touch ? a("li", { staticClass: "line" }) : t._e(),
            t._v(" "),
            t.$touch
              ? a("dropdown-option", {
                  attrs: { name: "+ Add a focus", "data-test": "addFocus" },
                  nativeOn: {
                    click: function (a) {
                      return t.addFocus.apply(null, arguments);
                    }
                  }
                })
              : t._e(),
            t._v(" "),
            a("dropdown-option", {
              attrs: { name: "Complete timer", "data-test": "complete-timer" },
              nativeOn: {
                click: function (a) {
                  return t.completeTimer.apply(null, arguments);
                }
              }
            }),
            t._v(" "),
            a("li", { staticClass: "line" }),
            t._v(" "),
            a(
              "li",
              {
                staticClass: "dropdown-list-item has-input",
                on: {
                  click: function (a) {
                    return t.focusRef("focusDurationInput");
                  }
                }
              },
              [
                a("span", { staticClass: "dropdown-list-label" }, [t._v("Focus")]),
                t._v(" "),
                a("span", { staticClass: "input-wrapper" }, [
                  a("input", {
                    directives: [{ name: "model", rawName: "v-model", value: t.focusDuration, expression: "focusDuration" }],
                    ref: "focusDurationInput",
                    staticClass: "hide-controls",
                    attrs: { type: "number", name: "focusDuration", min: "1", "data-test": "focus-input" },
                    domProps: { value: t.focusDuration },
                    on: {
                      blur: function (a) {
                        return t.resetDurationIfNeeded("focus");
                      },
                      input: function (a) {
                        a.target.composing || (t.focusDuration = a.target.value);
                      }
                    }
                  }),
                  a("span", { staticClass: "dropdown-list-input-unit" }, [t._v("min")])
                ])
              ]
            ),
            t._v(" "),
            a(
              "li",
              {
                staticClass: "dropdown-list-item has-input",
                on: {
                  click: function (a) {
                    return t.focusRef("restDurationInput");
                  }
                }
              },
              [
                a("span", { staticClass: "dropdown-list-label" }, [t._v("Break")]),
                t._v(" "),
                a("span", { staticClass: "input-wrapper" }, [
                  a("input", {
                    directives: [{ name: "model", rawName: "v-model", value: t.restDuration, expression: "restDuration" }],
                    ref: "restDurationInput",
                    staticClass: "hide-controls",
                    attrs: { type: "number", name: "restDuration", min: "1", "data-test": "rest-input" },
                    domProps: { value: t.restDuration },
                    on: {
                      blur: function (a) {
                        return t.resetDurationIfNeeded("rest");
                      },
                      input: function (a) {
                        a.target.composing || (t.restDuration = a.target.value);
                      }
                    }
                  }),
                  a("span", { staticClass: "dropdown-list-input-unit" }, [t._v("min")])
                ])
              ]
            ),
            t._v(" "),
            a("li", { staticClass: "line" }),
            t._v(" "),
            a(
              "li",
              {
                staticClass: "dropdown-list-item has-toggle",
                class: { on: t.autoplay },
                attrs: { title: "Auto-start break timer after completing focus timer.", "data-test": "auto-play" },
                on: {
                  click: function (a) {
                    return t.updateSetting("autoplay", !t.autoplay);
                  }
                }
              },
              [
                a("span", { staticClass: "dropdown-list-label" }, [t._v("Autoplay")]),
                t._v(" "),
                a(
                  "span",
                  { staticClass: "toggle-slider" },
                  [a("inline-svg", { staticClass: "toggle-switch", attrs: { src: e(35966) } })],
                  1
                )
              ]
            ),
            t._v(" "),
            a(
              "li",
              {
                staticClass: "dropdown-list-item has-toggle",
                class: { on: t.hideSeconds },
                attrs: { title: "Hide the seconds count for a calmer timer experience.", "data-test": "calm-timer" },
                on: {
                  click: function (a) {
                    return t.updateSetting("hideSeconds", !t.hideSeconds);
                  }
                }
              },
              [
                a("span", { staticClass: "dropdown-list-label" }, [t._v("Calm timer")]),
                t._v(" "),
                a(
                  "span",
                  { staticClass: "toggle-slider" },
                  [a("inline-svg", { staticClass: "toggle-switch", attrs: { src: e(35966) } })],
                  1
                )
              ]
            ),
            t._v(" "),
            a("li", { staticClass: "line" }),
            t._v(" "),
            a("dropdown-option", {
              attrs: { name: "How-to", "data-test": "help" },
              nativeOn: {
                click: function (a) {
                  return t.openHelp.apply(null, arguments);
                }
              }
            }),
            t._v(" "),
            a("dropdown-option", {
              attrs: { name: "Feedback", "data-test": "feedback-toggle" },
              nativeOn: {
                click: function (a) {
                  return t.openFeedback.apply(null, arguments);
                }
              }
            })
          ],
          1
        );
      };
      i._withStripped = !0;
      var o = e(6207),
        n = e(88117),
        s = e(30012),
        d = e(81510);
      const r = new (e(81405).ZP)({ feature: "pomodoro", is_paid_event: !0 }),
        l = {
          name: "PomodoroDropdown",
          doNotWaitForMount: !0,
          components: { QuickNavOptionsList: d.default, Dropdown: o.default, DropdownOption: n.default, ToastMenu: s.default },
          props: {
            timers: { type: Object, default: () => ({}) },
            autoplay: { type: Boolean, default: !1 },
            hideSeconds: { type: Boolean, default: !1 },
            completedStats: { type: Object, default: () => ({}) },
            options: { type: Object, default: () => ({}) }
          },
          unreactive: () => ({ periods: { today: "Today", week: "This Week", allTime: "All Time" } }),
          data() {
            return {
              active: !1,
              restDuration: this.timers.rest.minutes,
              originalRestDuration: this.timers.rest.minutes,
              focusDuration: this.timers.focus.minutes,
              originalFocusDuration: this.timers.focus.minutes,
              period: "today"
            };
          },
          computed: {
            completedStatsPeriod() {
              return this.periods[this.period];
            },
            completedCounts() {
              return this.completedStats.counts ? this.completedStats.counts[this.period] : 0;
            },
            completedFocusedTime() {
              const t = this.completedStats.focusedMinutes && this.completedStats.focusedMinutes[this.period];
              if (!t) return "0m";
              let a = Math.trunc(t / 60);
              const e = Math.trunc(a / 24);
              let i = t;
              return (
                e >= 1 ? ((a -= 24 * e), (i = t - 24 * e * 60 - 60 * a)) : a >= 1 && (i = t - 60 * a),
                i % 1 != 0 && (i = i.toFixed(2)),
                `${e ? `${e}d` : ""} ${a ? `${a}h` : ""} ${i ? `${i}m` : ""}`
              );
            }
          },
          watch: {
            restDuration(t) {
              this.validateTimerDuration(t, "rest");
            },
            focusDuration(t) {
              this.validateTimerDuration(t, "focus");
            }
          },
          created() {
            this.$e.$on("pomodoro:toggleDropdown", this.toggleDropdown);
          },
          destroyed() {
            this.$e.$off("pomodoro:toggleDropdown", this.toggleDropdown);
          },
          methods: {
            updateSetting(t, a) {
              switch (t) {
                case "autoplay":
                  r.capture("autoplay toggle", { new_value: a });
                  break;
                case "hideSeconds":
                  r.capture("calm timer toggle", { new_value: a });
              }
              this.$emit("update:" + t, a);
            },
            toggleDropdown(t = !this.active) {
              this.active = t;
            },
            openHelp() {
              r.capture("help click"), window.open("https://get.momentumdash.help/hc/en-us/articles/360045590813-Pomodoro-Timer");
            },
            openFeedback() {
              r.capture("feedback click");
              const t = { type: "Pomodoro", email: localStorage.getItem("email") || "", name: m.models.customization.get("displayname") };
              let a = encodeURIComponent(t.email);
              window.open(`https://momentumdash.com/contact?type=${t.type}&name=${t.name}&email=${a}`);
            },
            resetDurationIfNeeded(t) {
              const a = `${t}Duration`,
                e = `original${m.utils.capitalizeFirstLetter(t)}Duration`;
              this[a] ? (this[e] = this[a]) : (this[a] = this[e]);
            },
            validateTimerDuration(t, a) {
              const e = `${a}Duration`;
              t && "" !== t && t <= 0 && (this[e] = 1), t && "" !== t && this.$emit("update:timer", a, this[e]);
            },
            cycleTroughPeriods() {
              const t = Object.keys(this.periods),
                a = t.findIndex((t) => t === this.period),
                e = 2 === a ? 0 : a + 1;
              (this.period = t[e]), r.capture("cycle stats");
            },
            focusRef(t) {
              this.$refs[t] && this.$refs[t].focus();
            },
            completeTimer() {
              this.$emit("complete-timer");
            },
            switchClock(t) {
              this.$emit("switch-clock", t);
            },
            addFocus() {
              this.toggleDropdown(!1), m.trigger("focus:pomodoro:new");
            }
          }
        };
      e(33693);
      const c = (0, e(51900).Z)(l, i, [], !1, null, "389ffa38", null).exports;
    },
    6207: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => n });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a(
          "div",
          {
            directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.hideDropdown, expression: "hideDropdown" }],
            staticClass: "more",
            class: { "shift-to-left": t.shiftToLeft, "dropdown-visible": t.active, "more-dash": t.onDash },
            attrs: { "data-test": "more-container" }
          },
          [
            t._t("moreToggle", function () {
              return [
                a(
                  "div",
                  {
                    staticClass: "icon-wrapper more-toggle",
                    class: { "dash-icon-wrapper": t.onDash, "u--touch-hide": t.onDash },
                    attrs: { "data-test": "more-toggle", "data-ob": t.dataOb },
                    on: {
                      click: function (a) {
                        return t.$emit("toggle", !t.active);
                      }
                    }
                  },
                  [
                    a("inline-svg", {
                      staticClass: "icon icon-ellipsis more-icon",
                      class: { "dash-icon": t.onDash },
                      attrs: { src: e(49710) }
                    })
                  ],
                  1
                )
              ];
            }),
            t._v(" "),
            a("transition", { attrs: { name: "open" } }, [
              t.active
                ? a(
                    "div",
                    {
                      ref: "dropdown",
                      staticClass: "dropdown more-dropdown",
                      class: { "app dash-dropdown nipple nipple-top-left": t.onDash },
                      attrs: { "data-test": "dropdown" }
                    },
                    [
                      t._t("header"),
                      t._v(" "),
                      t._t("upsell"),
                      t._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "dropdown-list",
                          class: { "dropdown-hide": t.$slots.upsell },
                          attrs: { "data-test": "dropdown-options" }
                        },
                        [t._t("default")],
                        2
                      )
                    ],
                    2
                  )
                : t._e()
            ])
          ],
          2
        );
      };
      i._withStripped = !0;
      const o = {
        doNotWaitForMount: !0,
        name: "Dropdown",
        directives: { ClickOutside: e(40063).Z },
        props: { dataOb: { type: String, default: "" }, active: { type: Boolean, default: !1 }, onDash: { type: Boolean, default: !1 } },
        data: () => ({ shiftToLeft: !1 }),
        watch: {
          active(t) {
            t
              ? ((this.shiftToLeft = !1),
                this.$nextTick(this.shiftDropdownLeftIfNeeded),
                window.addEventListener("resize", this.debouncedDropdownShift))
              : window.removeEventListener("resize", this.debouncedDropdownShift);
          }
        },
        created() {
          m.on("globalEvent:esc", this.hideDropdown), m.on("globalEvent:toggle:bottom-right", this.hideDropdown);
        },
        destroyed() {
          m.off("globalEvent:esc", this.hideDropdown),
            m.off("globalEvent:toggle:bottom-right", this.hideDropdown),
            window.removeEventListener("resize", this.shouldDropdownShiftToLeft);
        },
        methods: {
          hideDropdown(t) {
            this.active && (this.$touch && t.stopPropagation(), this.$emit("toggle", !1));
          },
          shiftDropdownLeftIfNeeded() {
            const t = this.$refs.dropdown && this.$refs.dropdown.getBoundingClientRect();
            if (!t) return;
            const a = window.innerWidth - t.right;
            this.shiftToLeft = !(a >= 135);
          },
          debouncedDropdownShift() {
            clearTimeout(this.debounce),
              (this.debounce = setTimeout(() => {
                (this.shiftToLeft = !1), this.$nextTick(this.shiftDropdownLeftIfNeeded);
              }, 200));
          }
        }
      };
      e(58239);
      const n = (0, e(51900).Z)(o, i, [], !1, null, "0a952a33", null).exports;
    },
    88117: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => n });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a(
          "li",
          { staticClass: "dropdown-list-item", class: { "has-description": t.description }, attrs: { "data-test": "drop-down-wrapper" } },
          [
            a("div", { staticClass: "dropdown-list-label-wrapper", attrs: { "data-test": "drop-down-wrapper" } }, [
              t.icon || t.$slots.icon
                ? a(
                    "span",
                    { staticClass: "dropdown-list-icon-wrapper" },
                    [
                      t._t("icon", function () {
                        return [t._v(t._s(t.icon))];
                      })
                    ],
                    2
                  )
                : t._e(),
              t._v(" "),
              a(
                "span",
                { staticClass: "dropdown-list-label", attrs: { "data-test": "name" } },
                [
                  t._t("default"),
                  t._t("name", function () {
                    return [t._v(t._s(t.name))];
                  })
                ],
                2
              ),
              t.isPlus && !t.$plus ? a("span", { staticClass: "badge badge-plus", attrs: { "data-test": "beta" } }, [t._v("Plus")]) : t._e()
            ]),
            t._v(" "),
            t.description || t.$slots.description
              ? a(
                  "div",
                  { staticClass: "dropdown-list-description", attrs: { "data-test": "description" } },
                  [
                    t._t("description", function () {
                      return [t._v(t._s(t.description))];
                    })
                  ],
                  2
                )
              : t._e()
          ]
        );
      };
      i._withStripped = !0;
      const o = {
          name: "DropdownOption",
          doNotWaitForMount: !0,
          props: {
            icon: { type: String, default: "" },
            name: { type: String, default: "" },
            isPlus: { type: Boolean, default: !1 },
            description: { type: String, default: "" }
          }
        },
        n = (0, e(51900).Z)(o, i, [], !1, null, null, null).exports;
    },
    81510: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => s });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a(
          "nav",
          { staticClass: "nav" },
          t._l(t.options, function (e, i) {
            return a(
              "div",
              {
                key: i,
                staticClass: "nav-item",
                class: { active: t.active === i },
                attrs: { "data-test": i + "-opt" },
                on: {
                  click: function (a) {
                    return t.switchTo(i);
                  }
                }
              },
              [
                a("inline-svg", {
                  class: "nav-icon icon icon-" + i,
                  attrs: { src: e.icon },
                  on: {
                    loaded: function (a) {
                      return t.onLoad(i);
                    }
                  }
                }),
                t._v(" "),
                a("div", { staticClass: "nav-title" }, [t._v(t._s(e.name))]),
                t._v(" "),
                a("span", { staticClass: "tooltip" }, [t._v(t._s(e.name))])
              ],
              1
            );
          }),
          0
        );
      };
      i._withStripped = !0;
      var o = e(81405);
      const n = {
        name: "QuickNavOptionsList",
        unreactive: () => ({ iconsLoaded: 0 }),
        props: {
          options: { type: Object, default: () => {} },
          active: { type: String, default: "" },
          region: { type: String, default: "" }
        },
        methods: {
          switchTo(t) {
            const a = this.options[t].upsell;
            !this.$plus && a && m.cmd("modal.open", a, { eventSource: `${this.region} nav` }), this.$emit("switch-to", t);
            const e = this.options[t].feature || t,
              i = this.options[t].eventName || e;
            o.ZP.capture(i + " activate", { feature: e });
          },
          onLoad() {
            this.iconsLoaded++, this.iconsLoaded === Object.keys(this.options).length && this.$emit("iconsLoaded");
          }
        }
      };
      e(59078);
      const s = (0, e(51900).Z)(n, i, [], !1, null, "0876512d", null).exports;
    },
    30012: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => n });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a(
          "div",
          {
            on: {
              click: function (t) {
                t.stopPropagation();
              }
            }
          },
          [
            t._t("moreToggle"),
            t._v(" "),
            a(
              "div",
              { staticClass: "toast-container" },
              [
                a("transition", { attrs: { name: "slide-up", appear: "" } }, [
                  t.active
                    ? a("div", { ref: "toast", staticClass: "toast more-toast", attrs: { "data-test": "toast" } }, [
                        t.hasHeader() ? a("div", { staticClass: "toast-header" }, [t._t("header")], 2) : t._e(),
                        t._v(" "),
                        t.hasHeader() ? a("div", { staticClass: "line header-line" }) : t._e(),
                        t._v(" "),
                        t.sectionTitle ? a("div", { staticClass: "section-title" }, [t._v(t._s(t.sectionTitle))]) : t._e(),
                        t._v(" "),
                        a(
                          "ul",
                          { staticClass: "toast-list", class: { "toast-hide": t.$slots.upsell }, attrs: { "data-test": "toast-options" } },
                          [t._t("default")],
                          2
                        ),
                        t._v(" "),
                        a("div", { staticClass: "button button-close", on: { click: t.hide } }, [
                          a("span", { staticClass: "button-label" }, [t._v("Close")])
                        ])
                      ])
                    : t._e()
                ]),
                t._v(" "),
                a("transition", { attrs: { name: "fade", duration: "150" } }, [
                  t.active
                    ? a("div", {
                        staticClass: "toast-overlay",
                        on: {
                          click: function (a) {
                            return a.stopPropagation(), t.hide.apply(null, arguments);
                          }
                        }
                      })
                    : t._e()
                ])
              ],
              1
            )
          ],
          2
        );
      };
      i._withStripped = !0;
      const o = {
        doNotWaitForMount: !0,
        name: "ToastMenu",
        props: {
          dataOb: { type: String, default: "" },
          active: { type: Boolean, default: !0 },
          sectionTitle: { type: String, default: "" }
        },
        methods: {
          hide(t) {
            this.active && (this.$touch && t.stopPropagation(), this.$emit("toggle", !1));
          },
          hasHeader() {
            return !!this.$slots.header;
          }
        }
      };
      e(218);
      const n = (0, e(51900).Z)(o, i, [], !1, null, "585a48d3", null).exports;
    },
    33693: (t, a, e) => {
      var i = e(8543);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, e(45346).Z)("939b1c76", i, !1, { ssrId: !0 });
    },
    58239: (t, a, e) => {
      var i = e(34842);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, e(45346).Z)("69751410", i, !1, { ssrId: !0 });
    },
    59078: (t, a, e) => {
      var i = e(46111);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, e(45346).Z)("ae1c81aa", i, !1, { ssrId: !0 });
    },
    218: (t, a, e) => {
      var i = e(91398);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, e(45346).Z)("317a9898", i, !1, { ssrId: !0 });
    },
    35966: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCI+PC9jaXJjbGU+PC9zdmc+Cg==";
    },
    49710: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    },
    60786: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQuNTEyIDEyNC41MTIiPjxwYXRoIGQ9Ik0xMTMuOTU2IDU3LjAwNmwtOTcuNC01Ni4yYy00LTIuMy05IC42LTkgNS4ydjExMi41YzAgNC42IDUgNy41IDkgNS4ybDk3LjQtNTYuMmM0LTIuNDAxIDQtOC4yIDAtMTAuNXoiPjwvcGF0aD48L3N2Zz4K";
    }
  }
]);
