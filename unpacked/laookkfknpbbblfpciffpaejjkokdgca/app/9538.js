(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9538],
  {
    19814: (t, o, e) => {
      "use strict";
      e.r(o), e.d(o, { default: () => s });
      var n = e(8081),
        a = e.n(n),
        c = e(23645),
        i = e.n(c)()(a());
      i.push([
        t.id,
        "\n/* stylelint-disable */\n.focus .focus-title[data-v-4b996afa] { margin: 17px 0 3px; font-size: 70%; line-height: 120%; text-transform: uppercase;\n}\n.focus-content[data-v-4b996afa] { width: 100%; font-size: 1.875em;\n}\n.focus-row[data-v-4b996afa] { font-size: 2.25rem;\n}\n.center .focus-row[data-v-4b996afa] { max-width: inherit; font-size: var(--font-size-greeting);\n}\n.focus-row[data-v-4b996afa] .three-col-layout--center { display: inline-block;\n}\n.todays-focus[data-v-4b996afa] { max-width: 87.5vw; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.complete .todays-focus[data-v-4b996afa] { opacity: 0.85; text-decoration: line-through;\n}\n.control[data-v-4b996afa] { opacity: 0; cursor: pointer;\n}\n.focus-wrapper:hover .control[data-v-4b996afa] { opacity: 0.8;\n}\n.complete .control[data-v-4b996afa] { opacity: 1 !important;\n}\n\n\t\t\t/* set a transition for the checking off */\n.focus-row[data-v-4b996afa] .three-col-layout--left { display: flex; align-items: center;\n}\n.checkbox[data-v-4b996afa] { margin: 0.6rem 0.8rem 0; font-size: 70%;\n}\n.checkbox[data-v-4b996afa] .icon-checkbox { opacity: 0.85;\n}\n.focus-row[data-v-4b996afa] .three-col-layout--right {\n}\n[data-v-4b996afa] .more {\n}\n.focus-row[data-v-4b996afa] .more-toggle { --icon-size: 15px; margin: 0.5rem 0.8rem 0; position: relative;\n}\n.focus-row[data-v-4b996afa] .icon-wrapper .icon-toggle { --icon-padding: 10px;\n}\n.focus-row[data-v-4b996afa] .right .icon-wrapper:after { --icon-wrapper-size: 30px;\n}\n.focus-dropdown[data-v-4b996afa] {\n}\n.focus-dropdown[data-v-4b996afa] .dropdown { margin-top: 4px; left: 8px;\n}\n.focus-dropdown .icon-new[data-v-4b996afa] { height: 9px; transform: rotate(45deg);\n}\n.focus-dropdown .icon-delete[data-v-4b996afa] { height: 10px; margin-top: 1px;\n}\n.focus-dropdown .icon-pomodoro[data-v-4b996afa] { height: 15px;\n}\n.focus-dropdown .icon-autofocus[data-v-4b996afa] { height: 9px;\n}\n.focus-dropdown.shift-to-left[data-v-4b996afa] .more-dropdown { right: -8px; left: auto;\n}\n.focus-dropdown.shift-to-left[data-v-4b996afa] .more-dropdown.nipple-top-left:after { right: 14px; left: auto;\n}\n\n\n\n/* Touch */\n[data-v-4b996afa] .touch >>> .right { flex-basis: 25px;\n} /* Centers the checkbox/focus over on touch */\n\n\n/* Mobile */\n@media screen and (max-width: 450px) {\n.focus-title[data-v-4b996afa] { margin: 2px 0 4px !important; font-size: 17px !important;\n}\n.focus-row[data-v-4b996afa] { font-size: 26px;\n}\n.left[data-v-4b996afa] {\n}\n.checkbox[data-v-4b996afa] { margin-top: 8px; font-size: 76.9%;\n}\n.three-col-layout--center[data-v-4b996afa] {\n}\n.todays-focus[data-v-4b996afa] { margin: 0; /* display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; text-align: left; white-space: unset; <-- 2 line ellipses overflow to explore sometime */\n}\n}\n",
        ""
      ]);
      const s = i;
    },
    84668: (t, o, e) => {
      "use strict";
      e.r(o), e.d(o, { default: () => s });
      var n = e(8081),
        a = e.n(n),
        c = e(23645),
        i = e.n(c)()(a());
      i.push([
        t.id,
        "\n/* stylelint-disable */\n.checkbox[data-v-35209b3f] { position: relative; border: none; line-height: 1; text-shadow: 0 0 15px rgba(0,0,0,0.3);\n}\n.checkbox[data-v-35209b3f]:hover, .touch .checkbox[data-v-35209b3f] { opacity: 1;\n}\n.checkbox .icon[data-v-35209b3f] { height: auto; width: auto;\n}\n.checkbox .icon[data-v-35209b3f]:before { width: auto;\n}\n.icon-checkbox[data-v-35209b3f] { position: absolute; top: 0; left: 0; display: none;\n}\n.icon-checkbox-empty[data-v-35209b3f] { display: block;\n}\n.checked .icon-checkbox[data-v-35209b3f] { display: block;\n}\n.checked .icon-checkbox-empty[data-v-35209b3f] { visibility: hidden;\n}\n",
        ""
      ]);
      const s = i;
    },
    29538: (t, o, e) => {
      "use strict";
      e.r(o), e.d(o, { default: () => M });
      var n = function () {
        var t = this,
          o = t._self._c;
        return o(
          "div",
          { staticClass: "focus-content" },
          [
            t.inPomodoro ? t._e() : o("h3", { staticClass: "focus-title" }, [t._v("Today")]),
            t._v(" "),
            o(
              "transition",
              { attrs: { name: "fade", mode: "out-in" }, on: { "after-enter": t.afterEnter } },
              [
                o("three-col-layout", {
                  key: t.focus.focus,
                  staticClass: "focus-row",
                  class: { complete: t.focus.completed },
                  scopedSlots: t._u(
                    [
                      {
                        key: "left",
                        fn: function () {
                          return [
                            t._t("nav"),
                            t._v(" "),
                            o("dash-checkbox", {
                              attrs: { "data-test": "complete", value: !!t.focus.completed },
                              on: { input: t.complete }
                            })
                          ];
                        },
                        proxy: !0
                      },
                      {
                        key: "center",
                        fn: function () {
                          return [
                            o(
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
                                staticClass: "todays-focus",
                                attrs: { "data-test": "focus-active" },
                                on: {
                                  dblclick: function (o) {
                                    return t.handleDropdownClick("edit");
                                  }
                                }
                              },
                              [t._v(t._s(t.focus.focus))]
                            )
                          ];
                        },
                        proxy: !0
                      },
                      {
                        key: "right",
                        fn: function () {
                          return [
                            o(
                              t.$touch ? "ToastMenu" : "Dropdown",
                              {
                                tag: "component",
                                staticClass: "focus-dropdown",
                                attrs: {
                                  "data-test": "dropdown",
                                  "on-dash": !0,
                                  active: t.dropdownActive,
                                  "section-title": "Focus Actions"
                                },
                                on: { toggle: t.toggleDropdown }
                              },
                              [
                                t.focus.completed
                                  ? t._e()
                                  : o("dropdown-option", {
                                      staticClass: "focus-edit",
                                      attrs: { name: "Edit", "data-test": "edit" },
                                      nativeOn: {
                                        click: function (o) {
                                          return t.handleDropdownClick("edit");
                                        }
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "icon",
                                            fn: function () {
                                              return [
                                                o("inline-svg", {
                                                  staticClass: "dropdown-list-icon icon icon-edit",
                                                  attrs: { src: e(13228) }
                                                })
                                              ];
                                            },
                                            proxy: !0
                                          }
                                        ],
                                        null,
                                        !1,
                                        4021741150
                                      )
                                    }),
                                t._v(" "),
                                o("dropdown-option", {
                                  staticClass: "focus-clear",
                                  attrs: { name: "Clear", "data-test": "clear" },
                                  nativeOn: {
                                    click: function (o) {
                                      return t.handleDropdownClick("archive");
                                    }
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "icon",
                                      fn: function () {
                                        return [
                                          o("inline-svg", { staticClass: "dropdown-list-icon icon icon-delete", attrs: { src: e(21794) } })
                                        ];
                                      },
                                      proxy: !0
                                    }
                                  ])
                                }),
                                t._v(" "),
                                t.focus.completed
                                  ? o("dropdown-option", {
                                      staticClass: "focus-new",
                                      attrs: { name: "New", "data-test": "new" },
                                      nativeOn: {
                                        click: function (o) {
                                          return t.handleDropdownClick("new");
                                        }
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "icon",
                                            fn: function () {
                                              return [
                                                o("inline-svg", {
                                                  staticClass: "dropdown-list-icon icon icon-new",
                                                  attrs: { src: e(21794) }
                                                })
                                              ];
                                            },
                                            proxy: !0
                                          }
                                        ],
                                        null,
                                        !1,
                                        500737588
                                      )
                                    })
                                  : t._e(),
                                t._v(" "),
                                t.inPomodoro
                                  ? t._e()
                                  : o("dropdown-option", {
                                      staticClass: "pomodoro-timer",
                                      attrs: { "is-plus": !0, name: "Start Pomodoro Timer", "data-test": "pomodoro-timer" },
                                      nativeOn: {
                                        click: function (o) {
                                          return t.startPomodoroTimer.apply(null, arguments);
                                        }
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "icon",
                                            fn: function () {
                                              return [
                                                o("inline-svg", {
                                                  staticClass: "dropdown-list-icon icon icon-pomodoro",
                                                  attrs: { src: e(38801) }
                                                })
                                              ];
                                            },
                                            proxy: !0
                                          }
                                        ],
                                        null,
                                        !1,
                                        3069790782
                                      )
                                    }),
                                t._v(" "),
                                o("dropdown-option", {
                                  staticClass: "toggle-autofocus",
                                  class: { active: t.autoFocus },
                                  attrs: { name: t.autofocusLabel, "data-test": "autofocus", "is-plus": !0 },
                                  nativeOn: {
                                    click: function (o) {
                                      return t.toggleAutoFocus.apply(null, arguments);
                                    }
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "icon",
                                      fn: function () {
                                        return [
                                          o("inline-svg", {
                                            staticClass: "dropdown-list-icon icon icon-autofocus",
                                            attrs: { src: e(60786) }
                                          })
                                        ];
                                      },
                                      proxy: !0
                                    }
                                  ])
                                })
                              ],
                              1
                            )
                          ];
                        },
                        proxy: !0
                      }
                    ],
                    null,
                    !0
                  )
                })
              ],
              1
            )
          ],
          1
        );
      };
      n._withStripped = !0;
      var a = e(42223),
        c = e(3728),
        i = e(2039),
        s = e(40531),
        u = e(81405);
      const r = {
        name: "FocusContent",
        components: {
          DashCheckbox: e(6916).Z,
          Dropdown: () => e.e(6207).then(e.bind(e, 6207)),
          DropdownOption: () => e.e(8117).then(e.bind(e, 88117)),
          ToastMenu: () => e.e(12).then(e.bind(e, 30012)),
          ThreeColLayout: c.Z
        },
        mixins: [a.Z],
        props: { focus: { type: Object, default: () => ({}) }, inPomodoro: { type: Boolean, default: !1 } },
        data: () => ({ dropdownActive: !1 }),
        unreactive: () => ({ centerBelowMetadata: i.Z }),
        computed: {
          autofocusLabel() {
            return (this.autoFocus ? "Turn off" : "Turn on") + " Autofocus";
          },
          autoFocus: () => s.ax.autoFocus
        },
        watch: {
          focus: {
            handler() {
              this.$nextTick(() => m.trigger("focus-content:updated"));
            },
            immediate: !0
          }
        },
        methods: {
          handleDropdownClick(t) {
            this.toggleDropdown(!1), this.$emit(t);
          },
          toggleAutoFocus() {
            this.toggleDropdown(!1), m.commandManager.execute("todo.toggle.autofocus", null, { sourceApp: "Focus", eventSource: "focus" });
          },
          startPomodoroTimer() {
            this.toggleDropdown(!1),
              this.$plus
                ? (m.trigger("pomodoro:show"),
                  localStorage.setItem("pomodoro-focus-timer", !0),
                  u.ZP.capture("start pomodoro timer click", { feature: "focus", is_paid_event: !0 }))
                : m.cmd("modal.open", "UPSELL_POMODORO", { eventSource: "focus" });
          },
          toggleDropdown(t = !this.dropdownActive) {
            this.dropdownActive = t;
          },
          complete() {
            this.$emit("complete");
          },
          afterEnter() {
            m.trigger("focus-content:updated");
          }
        }
      };
      e(79464);
      const M = (0, e(51900).Z)(r, n, [], !1, null, "4b996afa", null).exports;
    },
    6916: (t, o, e) => {
      "use strict";
      e.d(o, { Z: () => c });
      var n = function () {
        var t = this,
          o = t._self._c;
        return o(
          "div",
          {
            staticClass: "control checkbox",
            class: { checked: t.value },
            attrs: { "data-test": "dash-checkbox" },
            on: {
              click: function (o) {
                return t.$emit("input", !t.value);
              }
            }
          },
          [o("i", { staticClass: "icon icon-checkbox-empty" }), t._v(" "), o("i", { staticClass: "icon icon-checkbox" })]
        );
      };
      n._withStripped = !0;
      const a = { name: "DashCheckbox", props: { value: { type: Boolean, required: !0 } } };
      e(92063);
      const c = (0, e(51900).Z)(a, n, [], !1, null, "35209b3f", null).exports;
    },
    79464: (t, o, e) => {
      var n = e(19814);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, e(45346).Z)("8e04e9d0", n, !1, { ssrId: !0 });
    },
    92063: (t, o, e) => {
      var n = e(84668);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, e(45346).Z)("49e67720", n, !1, { ssrId: !0 });
    },
    21794: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K";
    },
    13228: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE1LjA2NyAzLjk4NmEuNS41IDAgMCAwLS43MDgtLjAwMUwzLjQzNyAxNC45MWEuNS41IDAgMCAwIDAgLjcwN2w0Ljk0OCA0Ljk0OGEuNS41IDAgMCAwIC43MDcgMEwyMC4wMDkgOS42NDhhLjUuNSAwIDAgMCAwLS43MDZsLTQuOTQyLTQuOTU2ek0yLjQzIDE2LjhhLjUuNSAwIDAgMC0uODQuMjM3TC4wODQgMjMuMzE0YS41MDEuNTAxIDAgMCAwIC42MDMuNjAybDYuMjcyLTEuNWEuNS41IDAgMCAwIC4yMzctLjg0TDIuNDMgMTYuOHpNMjMuMiAyLjkyNEwyMS4wNzcuOGEyLjUgMi41IDAgMCAwLTMuNTMyIDBsLTEuNDE4IDEuNDE3YS41LjUgMCAwIDAgMCAuNzA3bDQuOTUgNC45NDlhLjUuNSAwIDAgMCAuNzA3IDBMMjMuMiA2LjQ1NGEyLjUgMi41IDAgMCAwIDAtMy41M3oiIC8+PC9zdmc+Cg==";
    },
    60786: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQuNTEyIDEyNC41MTIiPjxwYXRoIGQ9Ik0xMTMuOTU2IDU3LjAwNmwtOTcuNC01Ni4yYy00LTIuMy05IC42LTkgNS4ydjExMi41YzAgNC42IDUgNy41IDkgNS4ybDk3LjQtNTYuMmM0LTIuNDAxIDQtOC4yIDAtMTAuNXoiPjwvcGF0aD48L3N2Zz4K";
    },
    38801: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDI3LjI1MiA5My45MzljLTQyLjUwMy0yNi4yNjgtOTcuMDQ2LTM1LjI5MS0xNDMuNTQxLTI1LjY0MWwuMDEtLjAyMUMyOTMuMjM2IDQ5LjI1IDMwOS45IDQwIDMzNC42NjcgNDBjMTEuMDQ2IDAgMjAtOC45NTQgMjAtMjBzLTguOTU0LTIwLTIwLTIwQzMwMy4wODQgMCAyNzQuNjk2IDExLjEwOSAyNTYgCTM3LjAyOSAyMzcuMzA1IDExLjExMSAyMDguOTE4IDAgMTc3LjMzMyAwYy0xMS4wNDYgMC0yMCA4Ljk1NC0yMCAyMHM4Ljk1NCAyMCAyMCAyMGMyNC4zMzMgMCA0MC44MjggOC45MTkgNTAuNDI4IDI3LjI2Ny4xOC4zNDMuMzUxLjY4Ny41MjMgMS4wMzFDMTI2LjY1MiA0Ny4yMDYgMCAxMTAuNTE4IDAgMjU1Ljk1OCAwIDM5NC44NjIgOTYuNTk5IDUxMiAyNTYgNTEyYzE1OS4wMDkgMCAyNTYtMTE2LjczMSAyNTYtMjU2LjA0MiAwLTcwLjcwMy0zMC4wOTgtMTI4LjI0My04NC43NDgtMTYyLjAxOXptLTE4MC4xOTYgMjIuNjE2YTIwLjA3IDIwLjA3IDAgMCAwIDE3Ljg4OSAwYzY4LjUzMS0zNC4yNjkgMjE4LjY1NS0uMzk1IDIwNi4yOTYgMTU4Ljc3OGgtOTYuNTc0VjI1NmMwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMHMtMjAgOC45NTQtMjAgMjB2MTkuMzMzSDI3NnYtNTguNjY3YzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwcy0yMCA4Ljk1NC0yMCAyMHY1OC42NjdoLTU4LjY2N1YyNTZjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBzLTIwIDguOTU0LTIwIDIwdjE5LjMzM0g0MC43NkMyOC41MjEgMTE3LjcxMiAxNzcuMjE5IDgxLjYzOCAyNDcuMDU2IDExNi41NTV6TTI1NiA0NzJjLTExMS45MDggMC0xODUuNjg0LTY1LjMxNS0yMDguNzI3LTE1Ni42NjdoNDE3LjQ1M0M0NDEuNzI4IDQwNi41MDggMzY4LjExNSA0NzIgMjU2IDQ3MnptMzMuODA5LTkyLjQ3NmM3LjgxMSA3LjgxMSA3LjgxMSAyMC40NzQgMCAyOC4yODQtNy44MTEgNy44MTEtMjAuNDc0IDcuODEtMjguMjg0IDBMMjU2IDQwMi4yODRsLTUuNTI0IDUuNTI0Yy03LjgxMSA3LjgxMS0yMC40NzQgNy44MTEtMjguMjg0IDBzLTcuODExLTIwLjQ3NCAwLTI4LjI4NGwxOS42NjctMTkuNjY3YzcuODExLTcuODExIDIwLjQ3NC03LjgxMSAyOC4yODQgMHoiIC8+PC9zdmc+Cg==";
    }
  }
]);
