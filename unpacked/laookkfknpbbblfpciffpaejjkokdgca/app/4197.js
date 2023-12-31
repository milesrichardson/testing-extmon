(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4197],
  {
    58964: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      let a = {};
      const s = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileBlurHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileBlurHandler = !1;
            }, 100),
            (e.dataset.mobileBlurHandlerId = Math.random().toString(36).substring(7)),
            (a[e.dataset.mobileBlurHandlerId] = t.value),
            e.addEventListener("focusout", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", a[e.dataset.mobileBlurHandlerId]),
            delete a[e.dataset.mobileBlurHandlerId],
            delete e.dataset.mobileBlurHandlerId,
            delete e.dataset.justBoundMobileBlurHandler);
        }
      };
    },
    2039: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => a });
      const a = { focus: { name: "Focus", icon: o(20888) }, search: { name: "Search", feature: "search in center", icon: o(47997) } };
    },
    70594: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => p });
      var a = o(8081),
        s = o.n(a),
        i = o(23645),
        n = o.n(i),
        r = o(61667),
        c = o.n(r),
        d = new URL(o(40167), o.b),
        u = n()(s()),
        l = c()(d);
      u.push([
        e.id,
        `\n/* stylelint-disable */\n/* Using em units for font sizing for focus because it needs to scale down for responsive more than the other regions */\nh3[data-v-df73c7ea] { margin: 0; padding: 0;\n}\n.focuses[data-v-df73c7ea] { width: 100%; position: relative; display: flex; flex-direction: column; gap: 0.5rem; align-items: center; vertical-align: top;\n}\n.focuses[data-v-df73c7ea]::before { height: 450px; width: 100%; max-width: 800px; position: absolute; top: 50%; left: 50%; z-index: -1; background: url(${l}) no-repeat 50% 60%; background-size: contain; content: " "; transform: translate3d(-50%, -50%, 0); transition: opacity 0.2s;\n}\n.pomodoro .focuses[data-v-df73c7ea]:before { display: none;\n}\n.focus-wrapper[data-v-df73c7ea] { display: grid; align-items: end; justify-content: center; justify-items: center;\n}\n.focus-inner-wrapper[data-v-df73c7ea], .focus-prompt-wrapper[data-v-df73c7ea] { grid-area: 1 / 1 / 2 / 2;\n}\n.focus-wrapper .greeting[data-v-df73c7ea] { width: 100%; position: relative; display: inline-block !important; overflow: visible;\n}\n.prompt[data-v-df73c7ea] { --input-padding: 4px 2px 1px; min-width: 0; flex-shrink: 1;\n}\n[data-v-df73c7ea] .focus-question { margin: 0; font-size: 2.1875em; font-weight: 400; line-height: normal;\n}\n[data-v-df73c7ea] .focus-input, .prompt .hidden-data[data-v-df73c7ea] { width: 100%; padding: var(--input-padding); display: block; background: 0; border: 0; border-bottom: 2px solid #fff; -webkit-border-radius: 0; color: #fff; font-size: 2.25em; font-weight: 500; line-height: 1.2; outline: none; text-align: center; transition: border-color .2s ease; /* -webkit-border-radius: removes curves on iOS */\n}\n[data-v-df73c7ea] .focus-input::placeholder { color: #fff;\n}\n.prompt .hidden-data[data-v-df73c7ea] { height: 0; padding-top: 0; padding-bottom: 0; display: block; border: none; border-bottom: none; transition: none; visibility: hidden;\n}\n.focus-prompt-wrapper[data-v-df73c7ea] { width: 100%;\n}\n.focus-prompt-wrapper[data-v-df73c7ea] .three-col-layout--center { display: flex; justify-content: center;\n}\n.team-focus-wrapper[data-v-df73c7ea] { position: relative;\n}\n@media screen and (max-width: 450px) {\n.focuses[data-v-df73c7ea] {\n}\n.focuses[data-v-df73c7ea]:before { display: none;\n}\n.focus-wrapper[data-v-df73c7ea] { padding-bottom: 6px;\n}\n.prompt[data-v-df73c7ea] { padding-bottom: 0;\n}\n[data-v-df73c7ea] .focus-question { margin-bottom: 4px !important; font-size: 20px !important;\n} /* Ensure we deep select to target both the actual question and the placeholder one in FocusContent */\n[data-v-df73c7ea] .focus-input { margin-bottom: -2px; font-size: 24px !important;\n}\n[data-v-df73c7ea] .button { --v-padding: 7px; font-size: 0.875rem;\n}\n.team-focus .side-col[data-v-df73c7ea] { flex-basis: 0;\n}\n}\n`,
        ""
      ]);
      const p = u;
    },
    61667: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return (
          t || (t = {}),
          e
            ? ((e = String(e.__esModule ? e.default : e)),
              /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
              t.hash && (e += t.hash),
              /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            : e
        );
      };
    },
    4197: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => f });
      var a = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          {
            staticClass: "focuses app-container",
            class: { "show-anyway": e.showAnyway.includes("focus") },
            attrs: { "data-test": "focus", "data-show-anyway": "focus" }
          },
          [
            e.inPomodoro && e.collectionReady
              ? t("div", { staticClass: "focus-wrapper has-dash-icon pomodoro-view", attrs: { "data-ob": "focus-dash" } }, [
                  e.editing
                    ? t("div", { staticClass: "prompt" }, [
                        t("span", { staticClass: "hidden-data" }, [e._v(e._s(e.activeFocus.editProps.focus ?? ""))]),
                        e._v(" "),
                        t("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: e.activeFocus.editProps.focus,
                              expression: "activeFocus.editProps.focus",
                              modifiers: { trim: !0 }
                            },
                            { name: "mobile-blur", rawName: "v-mobile-blur", value: e.save, expression: "save" }
                          ],
                          ref: "prompt",
                          staticClass: "focus-input",
                          attrs: { type: "text", placeholder: e.inputPlaceholder, "data-test": "focus-input", autocomplete: "off" },
                          domProps: { value: e.activeFocus.editProps.focus },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                ? null
                                : e.save.apply(null, arguments);
                            },
                            blur: [
                              e.stopEditing,
                              function (t) {
                                return e.$forceUpdate();
                              }
                            ],
                            input: function (t) {
                              t.target.composing || e.$set(e.activeFocus.editProps, "focus", t.target.value.trim());
                            }
                          }
                        })
                      ])
                    : t(
                        "span",
                        { staticClass: "greeting" },
                        [
                          t("transition", { attrs: { name: "fade", mode: "out-in" } }, [
                            e.emptyFocus
                              ? t(
                                  "div",
                                  { key: "2" },
                                  [
                                    t("pomodoro-empty-focus", {
                                      attrs: { message: e.pomodoroMessage },
                                      on: { "add-focus": e.showPomodoroFocusInput }
                                    })
                                  ],
                                  1
                                )
                              : t(
                                  "div",
                                  { key: "1", staticClass: "focus" },
                                  [
                                    t("focus-content", {
                                      attrs: { focus: e.activeFocus, "in-pomodoro": !0 },
                                      on: {
                                        complete: e.completeFocus,
                                        archive: e.archiveFocus,
                                        edit: e.editCurrentFocus,
                                        new: e.archiveFocusAndShowPomodoroFocusInput
                                      }
                                    })
                                  ],
                                  1
                                )
                          ])
                        ],
                        1
                      )
                ])
              : e.collectionReady
              ? t(
                  "div",
                  { staticClass: "focus-wrapper has-dash-icon clock-view", attrs: { "data-ob": "focus-dash" } },
                  [
                    t(
                      "div",
                      {
                        directives: [
                          {
                            name: "visible",
                            rawName: "v-visible.transition.delay",
                            value: !e.editing && !e.emptyFocus,
                            expression: "!editing && !emptyFocus",
                            modifiers: { transition: !0, delay: !0 }
                          }
                        ],
                        staticClass: "focus-inner-wrapper"
                      },
                      [
                        t(
                          "div",
                          { staticClass: "focus" },
                          [
                            t("focus-content", {
                              attrs: { focus: e.activeFocus },
                              on: { complete: e.completeFocus, archive: e.archiveFocus, edit: e.editCurrentFocus, new: e.archiveFocus },
                              scopedSlots: e._u(
                                [
                                  {
                                    key: "nav",
                                    fn: function () {
                                      return [e._t("nav")];
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
                      ]
                    ),
                    e._v(" "),
                    t("three-col-layout", {
                      directives: [
                        {
                          name: "visible",
                          rawName: "v-visible.transition.delay",
                          value: e.editing || e.emptyFocus,
                          expression: "editing || emptyFocus",
                          modifiers: { transition: !0, delay: !0 }
                        }
                      ],
                      staticClass: "focus-prompt-wrapper",
                      scopedSlots: e._u(
                        [
                          {
                            key: "left",
                            fn: function () {
                              return [e._t("nav")];
                            },
                            proxy: !0
                          },
                          {
                            key: "center",
                            fn: function () {
                              return [
                                t("div", { staticClass: "prompt" }, [
                                  t("h3", { staticClass: "focus-question" }, [e._v("What is your main focus for today?")]),
                                  e._v(" "),
                                  t("span", { staticClass: "hidden-data" }, [e._v(e._s(e.activeFocus.editProps.focus ?? ""))]),
                                  e._v(" "),
                                  t("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: e.activeFocus.editProps.focus,
                                        expression: "activeFocus.editProps.focus",
                                        modifiers: { trim: !0 }
                                      },
                                      { name: "mobile-blur", rawName: "v-mobile-blur", value: e.save, expression: "save" }
                                    ],
                                    ref: "prompt",
                                    staticClass: "focus-input",
                                    attrs: { type: "text", "data-test": "focus-input", autocomplete: "off" },
                                    domProps: { value: e.activeFocus.editProps.focus },
                                    on: {
                                      keyup: function (t) {
                                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                          ? null
                                          : e.save.apply(null, arguments);
                                      },
                                      input: function (t) {
                                        t.target.composing || e.$set(e.activeFocus.editProps, "focus", t.target.value.trim());
                                      },
                                      blur: function (t) {
                                        return e.$forceUpdate();
                                      }
                                    }
                                  })
                                ])
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
              : e._e(),
            e._v(" "),
            e.inPomodoro
              ? e._e()
              : [
                  t("transition", { attrs: { name: "fade", mode: "out-in" } }, [
                    e.teamFocusEnabled ? t("div", { staticClass: "team-focus-wrapper" }, [t("team-focus")], 1) : e._e()
                  ])
                ]
          ],
          2
        );
      };
      a._withStripped = !0;
      var s = o(85711),
        i = o(58964),
        n = o(30827),
        r = o(2039),
        c = o(3728),
        d = o(42223);
      const u = (e, t) => {
          (e.style.opacity = t ? "1" : "0"), (e.style.pointerEvents = t ? "" : "none"), (e.style.visibility = t ? "visible" : "hidden");
        },
        l = {
          bind: (e, { value: t }) => {
            u(e, t);
          },
          componentUpdated: (e, { value: t, oldValue: o, modifiers: a }) => {
            !t != !o &&
              (a.transition && (e.style.transition = "opacity 0.5s ease, visibility 0.5s ease"),
              a.delay && (e.style.transitionDelay = t ? "0.5s" : "0"),
              u(e, t));
          }
        },
        p = {
          name: "Focus",
          components: {
            FocusContent: () => o.e(9538).then(o.bind(o, 29538)),
            PomodoroEmptyFocus: () => o.e(851).then(o.bind(o, 60851)),
            TeamFocus: () => o.e(8619).then(o.bind(o, 38619)),
            ThreeColLayout: c.Z
          },
          directives: { MobileBlur: i.Z, Visible: l },
          mixins: [d.Z],
          props: {
            inPomodoro: { type: Boolean, default: !1 },
            inputPlaceholder: { type: String, default: "" },
            pomodoroMessage: { type: String, default: "Focus" }
          },
          data: () => ({ editing: !1 }),
          computed: {
            teamFocusEnabled() {
              return m.conditionalFeatures.featureEnabled("team_focus") && !this.$touch;
            },
            activeFocus: () => s.default.activeFocus,
            collectionReady: () => s.default.loaded,
            emptyFocus: () => s.default.emptyFocus
          },
          unreactive: () => ({ showAnyway: n.Z, centerBelowMetadata: r.Z }),
          created() {
            m.on("focus:pomodoro:new", this.showPomodoroFocusInput), m.on("globalEvent:esc", this.stopEditing);
          },
          destroyed() {
            m.off("focus:pomodoro:new", this.showPomodoroFocusInput), m.off("globalEvent:esc", this.stopEditing);
          },
          methods: {
            editCurrentFocus() {
              (this.editing = !0), this.activeFocus.copyProperties(), this.focusOnPrompt();
            },
            archiveFocus() {
              s.default.archive();
            },
            completeFocus() {
              s.default.toggleComplete(), this.activeFocus.completed && this.congratulate();
            },
            congratulate() {
              const e = ["Great work!", "Good job!", "Nice.", "Way to go!"];
              this.$e.$emit("flashMessage", { message: e[Math.floor(Math.random() * e.length)] });
            },
            save() {
              var e;
              this.emptyFocus && (this.activeFocus.editProps.forDate = m.utils.getDateString()),
                null === (e = this.$refs.prompt) || void 0 === e || e.blur(),
                s.default
                  .save()
                  .then(() => (this.editing = !1))
                  .catch(console.error);
            },
            stopEditing() {
              this.editing = !1;
            },
            focusOnPrompt() {
              this.$nextTick(() => {
                var e;
                null === (e = this.$refs.prompt) || void 0 === e || e.focus();
              });
            },
            showPomodoroFocusInput() {
              (this.editing = !0), this.focusOnPrompt();
            },
            archiveFocusAndShowPomodoroFocusInput() {
              this.archiveFocus(), this.showPomodoroFocusInput();
            }
          }
        };
      o(42970);
      const f = (0, o(51900).Z)(p, a, [], !1, null, "df73c7ea", null).exports;
    },
    42970: (e, t, o) => {
      var a = o(70594);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals),
        (0, o(45346).Z)("6ece67cc", a, !1, { ssrId: !0 });
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
    },
    40167: (e, t, o) => {
      "use strict";
      e.exports = o.p + "4db99af162d6759d96bd.png";
    }
  }
]);
