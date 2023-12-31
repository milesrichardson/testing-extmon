(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7140],
  {
    58964: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => i });
      let n = {};
      const i = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileBlurHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileBlurHandler = !1;
            }, 100),
            (e.dataset.mobileBlurHandlerId = Math.random().toString(36).substring(7)),
            (n[e.dataset.mobileBlurHandlerId] = t.value),
            e.addEventListener("focusout", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", n[e.dataset.mobileBlurHandlerId]),
            delete n[e.dataset.mobileBlurHandlerId],
            delete e.dataset.mobileBlurHandlerId,
            delete e.dataset.justBoundMobileBlurHandler);
        }
      };
    },
    30827: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => i });
      var n = a(99437);
      const i = (m.showAnyway = new (n.Z.extend({
        name: "ShowAnyway",
        data: () => ({ widgets: [] }),
        methods: {
          show(e) {
            this.includes(e) || this.widgets.push(e);
          },
          hide(e) {
            const t = this.widgets.indexOf(e);
            ~t && this.widgets.splice(t, 1);
          },
          includes(e) {
            return this.widgets.includes(e);
          }
        }
      }))());
    },
    68507: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      var n = a(8081),
        i = a.n(n),
        s = a(23645),
        d = a.n(s)()(i());
      d.push([
        e.id,
        "\n/* stylelint-disable */\n.greeting .content[data-v-f022c9da] { display: inline;\n}\n.name-punctuation-no-wrap[data-v-f022c9da] { white-space: nowrap;\n}\n.greeting .name-wrapper[data-v-f022c9da] { position: relative; white-space: nowrap;\n}\n.greeting .name[data-v-f022c9da], .greeting .hidden-span[data-v-f022c9da] { max-width: min(100%, 12em); display: inline-block;\n}\n.hidden-span[data-v-f022c9da] { visibility: hidden;\n}\n.greeting .name[data-v-f022c9da] { border-radius: 3px; outline: none; overflow: hidden; vertical-align: top; white-space: nowrap;\n}\ninput.name[data-v-f022c9da] { padding: 0; position: absolute; inset: 0;\n}\n.input-wrapper[data-v-f022c9da] { margin: -5px -2px -8px; padding: 5px 2px 8px; position: relative;\n}\n.greeting .name.editing[data-v-f022c9da], .greeting .hidden-span[data-v-f022c9da] { min-width: 1.5em;\n}\n.greeting .name.editing[data-v-f022c9da] { border: none; font-weight: 500; text-align: center; border-bottom: 3px solid white; border-bottom-left-radius: 0; border-bottom-right-radius: 0; cursor: auto;\n}\n.f--quirky .greeting .name.editing[data-v-f022c9da], .f--startup .greeting .name.editing[data-v-f022c9da] { padding-bottom: 0;\n}\n.f--modern .greeting .name.editing[data-v-f022c9da] { padding-bottom: 3px;\n}\n.Firefox .greeting .name.editing[data-v-f022c9da]:after { content: '';\n} /* Necessary to fix bug where moving cursor to right edge of contenteditable name would cause blur event on Firefox */\n",
        ""
      ]);
      const r = d;
    },
    37140: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => p });
      var n = function () {
        var e = this,
          t = e._self._c;
        return t("three-col-layout", {
          directives: [
            {
              name: "mobile-click",
              rawName: "v-mobile-click",
              value: e.toggleDropdown.bind(null, !0),
              expression: "toggleDropdown.bind(null, true)"
            }
          ],
          staticClass: "app-container has-dash-icon greeting",
          class: { "show-anyway": e.showAnyway.includes("greeting") },
          attrs: { "data-show-anyway": "greeting", "data-test": "greeting" },
          scopedSlots: e._u([
            {
              key: "center",
              fn: function () {
                return [t("message", { attrs: { message: e.greeting, "editing-name": e.editingName }, on: { editing: e.editing } })];
              },
              proxy: !0
            },
            {
              key: "right",
              fn: function () {
                return [
                  t(
                    e.$touch ? "ToastMenu" : "Dropdown",
                    {
                      tag: "component",
                      attrs: { "on-dash": !0, active: e.dropdownActive, "section-title": "Greeting Actions" },
                      on: { toggle: e.toggleDropdown }
                    },
                    [
                      t("dropdown-option", {
                        attrs: { name: "Show today’s mantra", "data-test": "show-mantra" },
                        nativeOn: {
                          click: function (t) {
                            return e.showMantra.apply(null, arguments);
                          }
                        }
                      }),
                      e._v(" "),
                      t("li", { staticClass: "line" }),
                      e._v(" "),
                      t("dropdown-option", {
                        attrs: { name: "Edit your name", "data-test": "edit-name" },
                        nativeOn: {
                          click: function (t) {
                            return t.stopPropagation(), e.onEditNameClick.apply(null, arguments);
                          }
                        }
                      })
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
      n._withStripped = !0;
      var i = a(26082),
        s = a(42223),
        d = a(40531),
        r = a(3728),
        o = a(30827),
        l = a(81405);
      const c = {
          name: "Greeting",
          components: {
            ThreeColLayout: r.Z,
            Message: i.Z,
            ToastMenu: () => a.e(12).then(a.bind(a, 30012)),
            Dropdown: () => a.e(6207).then(a.bind(a, 6207)),
            DropdownOption: () => a.e(8117).then(a.bind(a, 88117))
          },
          unreactive: () => ({ mantraManager: m.models.mantraManager, showAnyway: o.Z }),
          mixins: [s.Z],
          data: () => ({ dropdownActive: !1, editingName: !1 }),
          computed: {
            date: () => m.models.date,
            greeting() {
              const e = (d.ax.displayname || "").trim(),
                t = m.utils.getDayPart(this.date.get("date"));
              let a = { name: e, punctuation: m.utils.endsWithEndPunctuation(e) ? "" : "." };
              return (a.content = e || this.editingName ? `Good ${t}, ` : `Good ${t}`), a;
            }
          },
          methods: {
            toggleDropdown(e) {
              this.$emit("stop-cycle", e), (this.dropdownActive = e);
            },
            showMantra() {
              !this.mantraManager.noMantra || this.$plus
                ? (this.mantraManager.isEnabled() && !this.mantraManager.getActiveItem()
                    ? this.mantraManager.getActiveItem()
                    : this.mantraManager.isEnabled() || this.mantraManager.getActiveItem()
                    ? this.mantraManager.isEnabled() && this.mantraManager.getActiveItem() && this.$emit("show-mantra")
                    : (this.mantraManager.toggleEnabled(), this.mantraManager.getActiveItem()),
                  (this.dropdownActive = !1),
                  l.ZP.capture("mantra show", { feature: "mantras" }))
                : m.cmd("modal.open", "UPSELL_MANTRAS", { eventSource: "dash" });
            },
            editing(e) {
              this.$emit("stop-cycle", e), (this.editingName = e);
            },
            onEditNameClick() {
              (this.editingName = !0), (this.dropdownActive = !1), l.ZP.capture("display name change", { feature: "profile" });
            }
          }
        },
        p = (0, a(51900).Z)(c, n, [], !1, null, null, null).exports;
    },
    26082: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      var n = function () {
        var e = this,
          t = e._self._c;
        return t("transition", { attrs: { name: "fade", mode: "out-in" } }, [
          t("span", { key: e.message.content, staticClass: "content", attrs: { "data-test": "content" } }, [
            t("span", { staticClass: "message", attrs: { "data-test": "message" }, on: { dblclick: e.openMantraSettings } }, [
              e._v(e._s(e.message.content))
            ]),
            t("span", { staticClass: "name-punctuation-no-wrap" }, [
              e.message.name
                ? t("span", { staticClass: "name-wrapper", attrs: { "data-test": "name-wrapper" } }, [
                    e.editingName
                      ? t("span", { staticClass: "input-wrapper" }, [
                          t("input", {
                            directives: [
                              { name: "model", rawName: "v-model", value: e.tempName, expression: "tempName" },
                              { name: "mobile-blur", rawName: "v-mobile-blur", value: e.handleNameChange, expression: "handleNameChange" }
                            ],
                            ref: "editingName",
                            staticClass: "name editing",
                            class: { pulse: e.pulse },
                            attrs: { spellcheck: "false", "data-test": "name-input" },
                            domProps: { value: e.tempName },
                            on: {
                              keyup: [
                                function (t) {
                                  return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                    ? null
                                    : e.handleNameChange.apply(null, arguments);
                                },
                                function (t) {
                                  return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])
                                    ? null
                                    : e.revertName.apply(null, arguments);
                                }
                              ],
                              input: function (t) {
                                t.target.composing || (e.tempName = t.target.value);
                              }
                            }
                          }),
                          e._v(" "),
                          t("span", { staticClass: "name hidden-span" }, [e._v(e._s(e.tempName.replace(/ /g, " ") || " "))])
                        ])
                      : t(
                          "span",
                          {
                            staticClass: "name",
                            class: { pulse: e.pulse },
                            attrs: { "data-test": "name" },
                            on: {
                              dblclick: function (t) {
                                return e.$emit("editing", !0);
                              }
                            }
                          },
                          [e._v(e._s(e.tempName))]
                        )
                  ])
                : e._e(),
              t("span", { attrs: { "data-test": "punctuation" } }, [e._v(e._s(e.message.punctuation))])
            ])
          ])
        ]);
      };
      n._withStripped = !0;
      var i = a(58964),
        s = a(40531);
      const d = {
        name: "Message",
        directives: { MobileBlur: i.Z },
        props: { message: { type: Object, default: () => ({}) }, editingName: { type: Boolean, default: !1 } },
        data() {
          return { pulse: !1, tempName: this.message.name };
        },
        watch: {
          editingName(e) {
            e &&
              (this.pulseName(),
              this.$nextTick(() => {
                this.$refs.editingName && this.$refs.editingName.focus();
              }));
          }
        },
        methods: {
          handleNameChange() {
            const e = this.tempName.trim();
            e ? ((s.ax.displayname = e), this.editDone()) : this.revertName();
          },
          openMantraSettings() {
            this.editingName || m.commandManager.executeAsync("settings.display", null, { section: "mantra-settings" });
          },
          revertName() {
            (this.tempName = s.ax.displayname), this.editDone();
          },
          editDone() {
            this.$emit("editing", !1), this.pulseName();
          },
          pulseName() {
            (this.pulse = !0),
              setTimeout(() => {
                this.pulse = !1;
              }, 1e3);
          }
        }
      };
      a(82194);
      const r = (0, a(51900).Z)(d, n, [], !1, null, "f022c9da", null).exports;
    },
    82194: (e, t, a) => {
      var n = a(68507);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("4a4b9d79", n, !1, { ssrId: !0 });
    }
  }
]);
