(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8619, 6207, 8117],
  {
    40063: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => n });
      let i = {};
      const n = {
        bind: function (t, e) {
          let a, n;
          (t.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const o = (t) => {
              (n = !1), ((t) => t && t.clientX > window.innerWidth)(t) ? (n = !0) : (a = t.target);
            },
            s = (i) => {
              n ||
                ((e.modifiers.bubble ||
                  (!t.contains(a) &&
                    !t.contains(i.target) &&
                    t !== a &&
                    t !== i.target &&
                    "true" !== t.dataset.justBoundClickOutsideHandler)) &&
                  e.value(i));
            };
          (t.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (t.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (i[t.dataset.clickOutsideMouseupHandlerId] = s),
            (i[t.dataset.clickOutsideMousedownHandlerId] = o),
            document.addEventListener("mouseup", s),
            document.addEventListener("mousedown", o);
        },
        unbind: function (t) {
          var e, a;
          null !== (e = t.dataset) &&
            void 0 !== e &&
            e.clickOutsideMouseupHandlerId &&
            null !== (a = t.dataset) &&
            void 0 !== a &&
            a.clickOutsideMousedownHandlerId &&
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
    22943: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => d });
      var i = a(8081),
        n = a.n(i),
        o = a(23645),
        s = a.n(o)()(n());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.team-focus[data-v-5851a0b8] { padding: 0 10px; line-height: normal; white-space: nowrap;\n}\n.three-col-layout--center > span[data-v-5851a0b8] { overflow: hidden;\n}\n\n\t\t/* Shared */\n.view[data-v-5851a0b8], .edit[data-v-5851a0b8] { display: flex; align-items: baseline;\n}\n.goal-label[data-v-5851a0b8], .goal-value[data-v-5851a0b8] { text-align: center;\n}\n.goal-label[data-v-5851a0b8] { opacity: 0.8; font-size: 0.9375rem; font-weight: 600; text-transform: uppercase;\n}\n.goal-value[data-v-5851a0b8] { opacity: 0.9;\n}\n.view .goal-label[data-v-5851a0b8], .goal-label-input-wrapper[data-v-5851a0b8] { margin-right: 15px;\n}\n.view .empty[data-v-5851a0b8] { margin-right: 0;\n}\n\n\t\t/* View */\n.view[data-v-5851a0b8] {\n}\n.view .goal-value[data-v-5851a0b8] { overflow: hidden; text-overflow: ellipsis;\n}\n\n\t\t/* Edit */\n.edit[data-v-5851a0b8] {\n}\n.input-wrapper[data-v-5851a0b8] { min-width: 2ch; position: relative;\n}\n.input[data-v-5851a0b8] { height: 100%; width: 100%; padding: 0; position: absolute; left: 0; z-index: 1; border-bottom-color: white; border-width: 0 0 1px 0; outline: none;\n}\n.input[data-v-5851a0b8]::placeholder { opacity: 0.7; color: #fff;\n}\n.hidden[data-v-5851a0b8] { visibility: hidden;\n}\n.goal-label-input-wrapper[data-v-5851a0b8] { min-width: 84px;\n}\n.input-wrapper .goal-label[data-v-5851a0b8] { text-align: center;\n}\n.input-wrapper .goal-label.hidden[data-v-5851a0b8] { min-width: 70px;\n}\n.goal-value-input-wrapper[data-v-5851a0b8] { min-width: 104px;\n}\n.input-wrapper .goal-value[data-v-5851a0b8] { padding-bottom: 1px;\n}\n.input-wrapper .goal-value.hidden[data-v-5851a0b8] {\n}\n\n\n\t\t/* Empty */\n.add-button[data-v-5851a0b8] { --h-padding: 17px; --v-padding: 6px; position: relative; opacity: 0;\n}\n.focuses:hover .add-button[data-v-5851a0b8] { opacity: 1;\n}\n\t\t\t/* TODO: Generalize with intro nav buttons and others */\n.add-button .icon-add[data-v-5851a0b8] { height: 11px; margin-right: 7px; margin-left: -1px; opacity: 0.7; fill: white;\n}\n\n\n\t\t/* Dropdown */\n[data-v-5851a0b8] .more { margin-left: 10px;\n}\n.team-focus[data-v-5851a0b8] .more-toggle {\n}\n.team-focus[data-v-5851a0b8] .icon-wrapper:after { height: 25px; width: 25px;\n}\n.team-focus[data-v-5851a0b8] .more-icon { height: 15px;\n}\n.team-focus-dropdown-wrapper[data-v-5851a0b8] { position: relative; font-size: 1rem;\n}\n.team-focus[data-v-5851a0b8] .dash-dropdown { margin-top: 6px; left: -8px;\n}\n.team-focus .shift-to-left[data-v-5851a0b8] .dash-dropdown { left: -57px;\n}\n.team-focus-dropdown[data-v-5851a0b8] ul { min-width: 90px;\n}\n.team-focus-dropdown[data-v-5851a0b8] .icon-edit { height: 14px; width: 11px;\n}\n.team-focus-dropdown[data-v-5851a0b8] .icon-delete { height: 10px; margin-top: 1px;\n}\n@media screen and (max-height: 600px) {\n.team-focus[data-v-5851a0b8] {\n}\n.team-focus .goal-label[data-v-5851a0b8] { font-size: 0.8125rem;\n}\n.team-focus .goal-value[data-v-5851a0b8] { font-size: 1rem;\n}\n}\n\n",
        ""
      ]);
      const d = s;
    },
    34842: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => d });
      var i = a(8081),
        n = a.n(i),
        o = a(23645),
        s = a.n(o)()(n());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.dropdown[data-v-0a952a33] { display: block;\n} /* Override general stylesheet dropdown styling for display: block, but move to this when refactor complete; */\n.dropdown-hide[data-v-0a952a33] { opacity: 0;\n}\n.dropdown-visible .icon[data-v-0a952a33] { opacity: 0.8;\n}\n.open-enter-active[data-v-0a952a33], .open-leave-active[data-v-0a952a33] { transition: opacity 0.1s ease;\n} /* Consolidate this with center nav and other animations? */\n.open-enter[data-v-0a952a33], .open-leave-to[data-v-0a952a33] { opacity: 0;\n}\n\n",
        ""
      ]);
      const d = s;
    },
    38619: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => u });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e("three-col-layout", {
          staticClass: "team-focus has-dash-icon team-focus-content",
          attrs: { "data-test": "team-focus" },
          scopedSlots: t._u([
            {
              key: "center",
              fn: function () {
                return [
                  t.editing
                    ? e(
                        "span",
                        {
                          directives: [
                            { name: "click-outside", rawName: "v-click-outside", value: t.onClickOutside, expression: "onClickOutside" }
                          ],
                          staticClass: "edit"
                        },
                        [
                          e("span", { staticClass: "input-wrapper goal-label-input-wrapper" }, [
                            e("input", {
                              directives: [
                                { name: "model", rawName: "v-model.trim", value: t.label, expression: "label", modifiers: { trim: !0 } }
                              ],
                              ref: "label",
                              staticClass: "input goal-label",
                              attrs: { placeholder: "PERIOD", "data-test": "label-edit" },
                              domProps: { value: t.label },
                              on: {
                                keyup: [
                                  function (e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                      ? null
                                      : t.saveAndFinishEditing.apply(null, arguments);
                                  },
                                  function (e) {
                                    return (!e.type.indexOf("key") && t._k(e.keyCode, "tab", 9, e.key, "Tab")) ||
                                      e.ctrlKey ||
                                      e.shiftKey ||
                                      e.altKey ||
                                      e.metaKey
                                      ? null
                                      : t.save.apply(null, arguments);
                                  },
                                  function (e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                                      ? null
                                      : t.revert.apply(null, arguments);
                                  }
                                ],
                                input: function (e) {
                                  e.target.composing || (t.label = e.target.value.trim());
                                },
                                blur: function (e) {
                                  return t.$forceUpdate();
                                }
                              }
                            }),
                            t._v(" "),
                            e("span", { staticClass: "hidden goal-label" }, [t._v(t._s(t.label.replace(/ /g, " ") || " "))])
                          ]),
                          t._v(" "),
                          e("span", { staticClass: "input-wrapper goal-value-input-wrapper" }, [
                            e("input", {
                              directives: [
                                { name: "model", rawName: "v-model.trim", value: t.goal, expression: "goal", modifiers: { trim: !0 } }
                              ],
                              ref: "goal",
                              staticClass: "input goal-value",
                              class: { pulse: t.pulse },
                              attrs: { placeholder: "TEAM GOAL", "data-test": "goal-edit" },
                              domProps: { value: t.goal },
                              on: {
                                keyup: [
                                  function (e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                      ? null
                                      : t.saveAndFinishEditing.apply(null, arguments);
                                  },
                                  function (e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                                      ? null
                                      : t.revert.apply(null, arguments);
                                  }
                                ],
                                keydown: function (e) {
                                  return (!e.type.indexOf("key") && t._k(e.keyCode, "tab", 9, e.key, "Tab")) ||
                                    e.ctrlKey ||
                                    e.shiftKey ||
                                    e.altKey ||
                                    e.metaKey
                                    ? null
                                    : t.saveAndFinishEditing.apply(null, arguments);
                                },
                                animationend: t.removePulse,
                                input: function (e) {
                                  e.target.composing || (t.goal = e.target.value.trim());
                                },
                                blur: function (e) {
                                  return t.$forceUpdate();
                                }
                              }
                            }),
                            t._v(" "),
                            e("span", { staticClass: "hidden goal-value" }, [t._v(t._s(t.goal.replace(/ /g, " ") || " "))])
                          ])
                        ]
                      )
                    : e(
                        "span",
                        [
                          e("transition", { attrs: { name: "fade", mode: "out-in" } }, [
                            t.model
                              ? e("div", { key: "1", staticClass: "view", on: { dblclick: t.edit } }, [
                                  e("span", { staticClass: "goal-label", class: { empty: !t.label }, attrs: { "data-test": "label" } }, [
                                    t._v(t._s(t.label))
                                  ]),
                                  t._v(" "),
                                  e("span", { staticClass: "goal-value", attrs: { "data-test": "goal" } }, [t._v(t._s(t.goal))])
                                ])
                              : t.$admin
                              ? e("div", { key: "2" }, [
                                  e(
                                    "button",
                                    { staticClass: "button dash-button add-button", attrs: { "data-test": "add" }, on: { click: t.edit } },
                                    [
                                      e(
                                        "span",
                                        { staticClass: "icon" },
                                        [e("inline-svg", { staticClass: "icon-add", attrs: { src: a(76450) } })],
                                        1
                                      ),
                                      t._v("\n\t\t\t\t\t\tTeam Goal\n\t\t\t\t\t")
                                    ]
                                  )
                                ])
                              : t._e()
                          ])
                        ],
                        1
                      )
                ];
              },
              proxy: !0
            },
            {
              key: "right",
              fn: function () {
                return [
                  t.model && !t.editing && t.$admin
                    ? e(
                        "dropdown",
                        {
                          staticClass: "team-focus-dropdown",
                          attrs: { "on-dash": !0, active: t.dropdownActive, "data-test": "dropdown" },
                          on: { toggle: t.toggleDropdown }
                        },
                        [
                          e("dropdown-option", {
                            staticClass: "team-focus-edit",
                            attrs: { name: "Edit", "data-test": "dropdown-edit" },
                            nativeOn: {
                              click: function (e) {
                                return t.edit.apply(null, arguments);
                              }
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "icon",
                                  fn: function () {
                                    return [
                                      e("inline-svg", { staticClass: "dropdown-list-icon icon icon-edit", attrs: { src: a(13228) } })
                                    ];
                                  },
                                  proxy: !0
                                }
                              ],
                              null,
                              !1,
                              3245305969
                            )
                          }),
                          t._v(" "),
                          e("dropdown-option", {
                            staticClass: "team-focus-clear",
                            attrs: { name: "Clear", "data-test": "dropdown-clear" },
                            nativeOn: {
                              click: function (e) {
                                return t.clear.apply(null, arguments);
                              }
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "icon",
                                  fn: function () {
                                    return [
                                      e("inline-svg", { staticClass: "dropdown-list-icon icon icon-delete", attrs: { src: a(21794) } })
                                    ];
                                  },
                                  proxy: !0
                                }
                              ],
                              null,
                              !1,
                              330617182
                            )
                          })
                        ],
                        1
                      )
                    : t._e()
                ];
              },
              proxy: !0
            }
          ])
        });
      };
      i._withStripped = !0;
      var n = a(6207),
        o = a(88117),
        s = a(40063);
      const d = Backbone.Model.extend({
          defaults: { title: "", createdDate: m.date(), updatedDate: m.now(), label: "", active: !1, serverSetId: !1 },
          initialize: function () {
            this.idAttribute = this.collection.idAttribute || "csid";
          }
        }),
        l = m.collect.SyncedCollection.extend({
          initialize: function (t, e) {
            (this.model = d),
              ((e = e || {}).name = "teamFocus"),
              (e.serverIdAttribute = "focusUuid"),
              (e.model = this.model),
              (e.transientProps = ["createdDate"]),
              (e.apiUrl = m.globals.urlRootApi + "team/focus"),
              m.collect.SyncedCollection.prototype.initialize.call(this, t, e);
          }
        });
      var r = a(42223);
      const c = {
        name: "TeamFocus",
        components: { ThreeColLayout: a(3728).Z, Dropdown: n.default, DropdownOption: o.default },
        directives: { ClickOutside: s.Z },
        mixins: [r.Z],
        bb: () => ({ collection: new l() }),
        data: () => ({ dropdownActive: !1, goal: "", label: "", editing: !1, pulse: !1 }),
        computed: {
          model() {
            return this.collection.length ? this.collection.find((t) => t.active) : null;
          }
        },
        watch: {
          model() {
            this.model && ((this.goal = this.model.title), (this.label = this.model.label));
          }
        },
        created() {
          this.collection.fetch({ reset: !0 }), this.model && ((this.goal = this.model.title), (this.label = this.model.label));
        },
        methods: {
          removePulse() {
            this.pulse = !1;
          },
          toggleDropdown(t = !this.dropdownActive) {
            this.dropdownActive = t;
          },
          edit() {
            this.$admin &&
              ((this.editing = !0),
              (this.dropdownActive = !1),
              this.$nextTick(() => {
                this.$refs.goal.focus();
              }));
          },
          onClickOutside() {
            this.validateGoal(!1) && this.save(), (this.editing = !1);
          },
          saveAndFinishEditing() {
            this.validateGoal() && (this.save(), (this.editing = !1));
          },
          validateGoal(t = !0) {
            return !!this.goal || (t && (this.pulse = !0), void this.$refs.goal.focus());
          },
          save(t) {
            t && (t.preventDefault(), t.stopPropagation()),
              this.model
                ? this.model.save({ label: this.label, title: this.goal })
                : this.collection.create({ label: this.label, title: this.goal, active: !0 }),
              (this.dropdownActive = !1);
          },
          clear() {
            (this.dropdownActive = !1), (this.goal = ""), (this.label = ""), (this.model.active = !1);
          },
          revert() {
            this.model ? ((this.goal = this.model.title), (this.label = this.model.label), (this.editing = !1)) : (this.editing = !1);
          }
        }
      };
      a(75555);
      const u = (0, a(51900).Z)(c, i, [], !1, null, "5851a0b8", null).exports;
    },
    6207: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => o });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e(
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
                e(
                  "div",
                  {
                    staticClass: "icon-wrapper more-toggle",
                    class: { "dash-icon-wrapper": t.onDash, "u--touch-hide": t.onDash },
                    attrs: { "data-test": "more-toggle", "data-ob": t.dataOb },
                    on: {
                      click: function (e) {
                        return t.$emit("toggle", !t.active);
                      }
                    }
                  },
                  [
                    e("inline-svg", {
                      staticClass: "icon icon-ellipsis more-icon",
                      class: { "dash-icon": t.onDash },
                      attrs: { src: a(49710) }
                    })
                  ],
                  1
                )
              ];
            }),
            t._v(" "),
            e("transition", { attrs: { name: "open" } }, [
              t.active
                ? e(
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
                      e(
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
      const n = {
        doNotWaitForMount: !0,
        name: "Dropdown",
        directives: { ClickOutside: a(40063).Z },
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
            const e = window.innerWidth - t.right;
            this.shiftToLeft = !(e >= 135);
          },
          debouncedDropdownShift() {
            clearTimeout(this.debounce),
              (this.debounce = setTimeout(() => {
                (this.shiftToLeft = !1), this.$nextTick(this.shiftDropdownLeftIfNeeded);
              }, 200));
          }
        }
      };
      a(58239);
      const o = (0, a(51900).Z)(n, i, [], !1, null, "0a952a33", null).exports;
    },
    88117: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => o });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e(
          "li",
          { staticClass: "dropdown-list-item", class: { "has-description": t.description }, attrs: { "data-test": "drop-down-wrapper" } },
          [
            e("div", { staticClass: "dropdown-list-label-wrapper", attrs: { "data-test": "drop-down-wrapper" } }, [
              t.icon || t.$slots.icon
                ? e(
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
              e(
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
              t.isPlus && !t.$plus ? e("span", { staticClass: "badge badge-plus", attrs: { "data-test": "beta" } }, [t._v("Plus")]) : t._e()
            ]),
            t._v(" "),
            t.description || t.$slots.description
              ? e(
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
      const n = {
          name: "DropdownOption",
          doNotWaitForMount: !0,
          props: {
            icon: { type: String, default: "" },
            name: { type: String, default: "" },
            isPlus: { type: Boolean, default: !1 },
            description: { type: String, default: "" }
          }
        },
        o = (0, a(51900).Z)(n, i, [], !1, null, null, null).exports;
    },
    75555: (t, e, a) => {
      var i = a(22943);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("2ee76c00", i, !1, { ssrId: !0 });
    },
    58239: (t, e, a) => {
      var i = a(34842);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("69751410", i, !1, { ssrId: !0 });
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
    49710: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    },
    76450: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDQ4IDQ0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNDA4IDE4NGgtMTM2Yy00LjQxNzk2OSAwLTgtMy41ODIwMzEtOC04di0xMzZjMC0yMi4wODk4NDQtMTcuOTEwMTU2LTQwLTQwLTQwcy00MCAxNy45MTAxNTYtNDAgNDB2MTM2YzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhoLTEzNmMtMjIuMDg5ODQ0IDAtNDAgMTcuOTEwMTU2LTQwIDQwczE3LjkxMDE1NiA0MCA0MCA0MGgxMzZjNC40MTc5NjkgMCA4IDMuNTgyMDMxIDggOHYxMzZjMCAyMi4wODk4NDQgMTcuOTEwMTU2IDQwIDQwIDQwczQwLTE3LjkxMDE1NiA0MC00MHYtMTM2YzAtNC40MTc5NjkgMy41ODIwMzEtOCA4LThoMTM2YzIyLjA4OTg0NCAwIDQwLTE3LjkxMDE1NiA0MC00MHMtMTcuOTEwMTU2LTQwLTQwLTQwem0wIDAiPjwvcGF0aD48L3N2Zz4=";
    }
  }
]);
