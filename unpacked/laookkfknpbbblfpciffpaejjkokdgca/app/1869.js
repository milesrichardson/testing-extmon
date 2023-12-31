(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1869, 7652, 5711],
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
    85711: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => g });
      var a = o(99437),
        s = o(31624),
        i = o(64438),
        n = o(67652);
      const d = new i.Z("tab.focus.emptySave", 0.01),
        c = new (a.Z.extend({
          name: "FocusDataService",
          mixins: [s.X],
          unreactive: () => ({ type: "focus", mode: localStorage.getItem("token") ? n.Z.Sync : n.Z.Cache }),
          defaultPath: "focus",
          methods: {
            add(e, t) {
              return t.focus
                ? s.X.methods.add.apply(this, arguments)
                : (d.info("Focus data service add with no focus", {
                    userUuid: localStorage.getItem("userId"),
                    stackTrace: m.utils.getStackTrace()
                  }),
                  Promise.reject());
            }
          }
        }))();
      var r = o(2770);
      const u = a.Z.extend({
        name: "FocusModel",
        mixins: [r.Z],
        data: () => ({
          id: null,
          archived: !1,
          completed: !1,
          createdDate: m.now(),
          focus: null,
          forDate: null,
          todoId: null,
          props: ["focus", "completed", "archived", "forDate", "createdDate", "todoId"]
        }),
        methods: {
          updateData(e) {
            r.Z.methods.updateData.call(this, e), (this.completed = !!e.completed);
          }
        }
      });
      var l = o(94234),
        p = o(20144),
        h = o(40531);
      const v = new (p.ZP.extend({
        name: "AutoFocusManager",
        data: () => ({ activeFocus: null, loaded: !1 }),
        computed: { autoFocusEnabled: () => h.ax.autoFocus && m.conditionalFeatures.featureEnabled("pinfocus") },
        watch: {
          autoFocusEnabled: {
            handler(e) {
              e ? this.getTopTodo().then((e) => (this.activeFocus = this.createFocusFromTodo(e))) : (this.activeFocus = null);
            },
            immediate: !0
          },
          "activeFocus.focus"(e) {
            this.activeFocus && m.trigger("todo:set:title", this.activeFocus.todoId, e);
          }
        },
        created() {
          m.on("todo:globalChange", this.onTodoChange),
            m.on("todo:loadingStateChange", this.onLoadingStateChange),
            m.on("todo:activeListLoaded", this.setLoaded),
            this.getInitialLoadedState();
        },
        destroyed() {
          m.off("todo:globalChange", this.onTodoChange),
            m.off("todo:loadingStateChange", this.onLoadingStateChange),
            m.off("todo:activeListLoaded", this.setLoaded);
        },
        methods: {
          getInitialLoadedState() {
            return m.widgetManager.getWidgetAsync("todo").then((e) => {
              var t, o;
              "Done" ===
                (null === (t = e.manager.activeProvider.selectedList()) || void 0 === t || null === (o = t.itemCollection) || void 0 === o
                  ? void 0
                  : o.listStatus) && (this.loaded = !0);
            });
          },
          setLoaded() {
            this.loaded = !0;
          },
          toggleComplete() {
            this.activeFocus &&
              ((this.activeFocus.completed = !this.activeFocus.completed),
              m.trigger("todo:set:done", this.activeFocus.todoId, this.activeFocus.completed));
          },
          onLoadingStateChange() {
            this.autoFocusEnabled &&
              this.getTopTodo().then((e) => {
                var t;
                !e || (this.activeFocus && (e.get("id") || e.id) === this.activeFocus.todoId)
                  ? e || (null !== (t = this.activeFocus) && void 0 !== t && t.completed) || (this.activeFocus = null)
                  : (this.activeFocus = this.createFocusFromTodo(e));
              });
          },
          getTopTodo: () => m.widgetManager.getWidgetAsync("todo").then((e) => e.getTopTodo()),
          onTodoChange(...e) {
            var t, o, a;
            const s = e[0];
            if (
              e.find((e) => e && (e.ignoreRender || e.silent)) ||
              !this.autoFocusEnabled ||
              null == s ||
              !s.changed ||
              !Object.keys(s.changed).length ||
              !1 === (null === (t = s.changed) || void 0 === t ? void 0 : t.isLoading)
            )
              return;
            const i =
              (null === (o = s.changed) || void 0 === o ? void 0 : o.completedDate) ||
              (null === (a = s.changed) || void 0 === a ? void 0 : a.modifiedServer);
            this.getTopTodo().then((e) => {
              var t, o;
              e
                ? (this.activeFocus = this.createFocusFromTodo(e))
                : null !== (t = this.activeFocus) &&
                  void 0 !== t &&
                  t.todoId &&
                  (s.get("id") || s.id).includes(null === (o = this.activeFocus) || void 0 === o ? void 0 : o.todoId) &&
                  ((this.activeFocus.completed = s.get("done")), i || (this.activeFocus = null));
            });
          },
          createFocusFromTodo(e) {
            if (!e) return null;
            let t = new u();
            return (
              t.updateData({
                focus: e.get("title"),
                archived: !1,
                completed: e.get("done"),
                createdDate: m.now(),
                id: m.utils.uuidv4(),
                todoId: e.get("id") || e.id,
                forDate: m.utils.getDateString()
              }),
              t
            );
          }
        }
      }))();
      var f = o(81405);
      const g = new (a.Z.extend({
        name: "FocusCollection",
        mixins: [l.FZ, l.mX],
        unreactive: () => ({ type: "focus", Model: u, dataService: c, newModel: null, analytics: new f.ZP({ feature: "focus" }) }),
        computed: {
          emptyFocus() {
            return !this.activeFocus.focus;
          },
          activeFocusInCollection() {
            const e = m.utils.getDateString(),
              t = Object.values(this.data.items)
                .filter((t) => !t.archived && t.forDate === e)
                .sort((e, t) => t.createdDate - e.createdDate);
            return t.length ? t[0] : null;
          },
          activeFocus() {
            return v.activeFocus || this.activeFocusInCollection || this.newModel;
          },
          loaded() {
            return (!v.autoFocusEnabled || v.loaded) && this.data.loaded;
          }
        },
        created() {
          this.instantiateNewModel(),
            m.on("focus:pin", this.onFocusPin),
            m.on("todo:globalChange", this.onTodoChange),
            m.on("newDay", this.archiveAll);
        },
        destroyed() {
          m.off("focus:pin", this.onFocusPin), m.off("todo:globalChange", this.onTodoChange), m.off("newDay", this.archiveAll);
        },
        methods: {
          instantiateNewModel() {
            (this.newModel = new this.Model()), this.newModel.copyProperties();
          },
          async save() {
            const e = this.emptyFocus;
            v.activeFocus || (this.activeFocus.editProps.focus && (await this[this.emptyFocus ? "add" : "update"](this.activeFocus))),
              e && this.instantiateNewModel(),
              this.analytics.capture("focus " + (e ? "add" : "edit"), {
                position: localStorage.getItem("pomodoro-showing") ? "pomodoro" : "default"
              }),
              this.activeFocus.commitChanges(),
              this.activeFocus.todoId && m.trigger("todo:set:title", this.activeFocus.todoId, this.activeFocus.focus);
          },
          archive() {
            this.analytics.capture("focus clear", { completed: this.activeFocus.completed }),
              v.activeFocus ? (h.ax.autoFocus = !1) : l.FZ.methods.archive.call(this, this.activeFocus);
          },
          archiveAll() {
            Object.values(this.data.items).forEach((e) => this.archive(e));
          },
          toggleComplete() {
            const e = this.activeFocus.completed;
            this.analytics.capture(
              "focus " + (e ? "uncomplete" : "complete"),
              Object.assign(
                { position: localStorage.getItem("pomodoro-showing") ? "pomodoro" : "default" },
                e ? {} : { autofocus: v.autoFocusEnabled }
              )
            ),
              v.activeFocus
                ? v.toggleComplete()
                : ((this.activeFocus.completed = !e),
                  this.dataService
                    .update(this.activeFocus.id, { completed: !e })
                    .then(() => {
                      this.activeFocus.todoId && m.trigger("todo:set:done", this.activeFocus.todoId, !e);
                    })
                    .catch((t) => {
                      throw ((this.activeFocus.completed = e), t);
                    }));
          },
          onFocusPin(e) {
            h.ax.autoFocus = !1;
            let t = v.createFocusFromTodo(e);
            t && t.focus && (t.copyProperties(), this.add(t));
          },
          onTodoChange(...e) {
            var t, o;
            const a = e[0];
            if (
              e.find((e) => e && (e.ignoreRender || e.silent)) ||
              !this.activeFocus ||
              !Object.keys(this.data.items).length ||
              null == a ||
              !a.changed
            )
              return;
            let s = Object.values(this.data.items).find((e) => {
              var t;
              return (
                e.todoId && e.todoId === ((null === (t = a.get) || void 0 === t ? void 0 : t.call(a, "id")) || (null == a ? void 0 : a.id))
              );
            });
            if (!s) return;
            if (null !== (t = e[0]) && void 0 !== t && null !== (o = t.changed) && void 0 !== o && o.deleted) return void this.archive();
            const i = a.get("done"),
              n = a.get("title");
            (s.completed === i && s.focus === n) ||
              ((s.completed = i), (s.focus = n), this.dataService.update(s.id, { completed: i, focus: n }));
          }
        }
      }))();
    },
    30827: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      var a = o(99437);
      const s = (m.showAnyway = new (a.Z.extend({
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
    70594: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => p });
      var a = o(8081),
        s = o.n(a),
        i = o(23645),
        n = o.n(i),
        d = o(61667),
        c = o.n(d),
        r = new URL(o(40167), o.b),
        u = n()(s()),
        l = c()(r);
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
    67652: (e, t, o) => {
      "use strict";
      var a;
      o.d(t, { Z: () => s }),
        (function (e) {
          (e.Sync = "sync"), (e.Cache = "cache"), (e.Server = "server"), (e.Timestamp = "timestamp");
        })(a || (a = {}));
      const s = a;
    },
    4197: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => h });
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
        d = o(2039),
        c = o(3728),
        r = o(42223);
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
          mixins: [r.Z],
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
          unreactive: () => ({ showAnyway: n.Z, centerBelowMetadata: d.Z }),
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
      const h = (0, o(51900).Z)(p, a, [], !1, null, "df73c7ea", null).exports;
    },
    42970: (e, t, o) => {
      var a = o(70594);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals),
        (0, o(45346).Z)("6ece67cc", a, !1, { ssrId: !0 });
    },
    40167: (e, t, o) => {
      "use strict";
      e.exports = o.p + "4db99af162d6759d96bd.png";
    }
  }
]);
