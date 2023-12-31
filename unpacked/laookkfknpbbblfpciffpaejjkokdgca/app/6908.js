(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6908, 7652, 5711],
  {
    63568: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => i });
      const i = {
        clock: { name: "Clock", feature: "default clock", icon: o(45671) },
        pomodoro: { name: "Pomodoro", icon: o(95648), upsell: "UPSELL_POMODORO" },
        percent: { name: "Percent", feature: "percent clock", icon: o(12038) }
      };
    },
    85711: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => v });
      var i = o(99437),
        s = o(31624),
        a = o(64438),
        n = o(67652);
      const r = new a.Z("tab.focus.emptySave", 0.01),
        d = new (i.Z.extend({
          name: "FocusDataService",
          mixins: [s.X],
          unreactive: () => ({ type: "focus", mode: localStorage.getItem("token") ? n.Z.Sync : n.Z.Cache }),
          defaultPath: "focus",
          methods: {
            add(t, e) {
              return e.focus
                ? s.X.methods.add.apply(this, arguments)
                : (r.info("Focus data service add with no focus", {
                    userUuid: localStorage.getItem("userId"),
                    stackTrace: m.utils.getStackTrace()
                  }),
                  Promise.reject());
            }
          }
        }))();
      var c = o(2770);
      const l = i.Z.extend({
        name: "FocusModel",
        mixins: [c.Z],
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
          updateData(t) {
            c.Z.methods.updateData.call(this, t), (this.completed = !!t.completed);
          }
        }
      });
      var u = o(94234),
        h = o(20144),
        g = o(40531);
      const p = new (h.ZP.extend({
        name: "AutoFocusManager",
        data: () => ({ activeFocus: null, loaded: !1 }),
        computed: { autoFocusEnabled: () => g.ax.autoFocus && m.conditionalFeatures.featureEnabled("pinfocus") },
        watch: {
          autoFocusEnabled: {
            handler(t) {
              t ? this.getTopTodo().then((t) => (this.activeFocus = this.createFocusFromTodo(t))) : (this.activeFocus = null);
            },
            immediate: !0
          },
          "activeFocus.focus"(t) {
            this.activeFocus && m.trigger("todo:set:title", this.activeFocus.todoId, t);
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
            return m.widgetManager.getWidgetAsync("todo").then((t) => {
              var e, o;
              "Done" ===
                (null === (e = t.manager.activeProvider.selectedList()) || void 0 === e || null === (o = e.itemCollection) || void 0 === o
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
              this.getTopTodo().then((t) => {
                var e;
                !t || (this.activeFocus && (t.get("id") || t.id) === this.activeFocus.todoId)
                  ? t || (null !== (e = this.activeFocus) && void 0 !== e && e.completed) || (this.activeFocus = null)
                  : (this.activeFocus = this.createFocusFromTodo(t));
              });
          },
          getTopTodo: () => m.widgetManager.getWidgetAsync("todo").then((t) => t.getTopTodo()),
          onTodoChange(...t) {
            var e, o, i;
            const s = t[0];
            if (
              t.find((t) => t && (t.ignoreRender || t.silent)) ||
              !this.autoFocusEnabled ||
              null == s ||
              !s.changed ||
              !Object.keys(s.changed).length ||
              !1 === (null === (e = s.changed) || void 0 === e ? void 0 : e.isLoading)
            )
              return;
            const a =
              (null === (o = s.changed) || void 0 === o ? void 0 : o.completedDate) ||
              (null === (i = s.changed) || void 0 === i ? void 0 : i.modifiedServer);
            this.getTopTodo().then((t) => {
              var e, o;
              t
                ? (this.activeFocus = this.createFocusFromTodo(t))
                : null !== (e = this.activeFocus) &&
                  void 0 !== e &&
                  e.todoId &&
                  (s.get("id") || s.id).includes(null === (o = this.activeFocus) || void 0 === o ? void 0 : o.todoId) &&
                  ((this.activeFocus.completed = s.get("done")), a || (this.activeFocus = null));
            });
          },
          createFocusFromTodo(t) {
            if (!t) return null;
            let e = new l();
            return (
              e.updateData({
                focus: t.get("title"),
                archived: !1,
                completed: t.get("done"),
                createdDate: m.now(),
                id: m.utils.uuidv4(),
                todoId: t.get("id") || t.id,
                forDate: m.utils.getDateString()
              }),
              e
            );
          }
        }
      }))();
      var M = o(81405);
      const v = new (i.Z.extend({
        name: "FocusCollection",
        mixins: [u.FZ, u.mX],
        unreactive: () => ({ type: "focus", Model: l, dataService: d, newModel: null, analytics: new M.ZP({ feature: "focus" }) }),
        computed: {
          emptyFocus() {
            return !this.activeFocus.focus;
          },
          activeFocusInCollection() {
            const t = m.utils.getDateString(),
              e = Object.values(this.data.items)
                .filter((e) => !e.archived && e.forDate === t)
                .sort((t, e) => e.createdDate - t.createdDate);
            return e.length ? e[0] : null;
          },
          activeFocus() {
            return p.activeFocus || this.activeFocusInCollection || this.newModel;
          },
          loaded() {
            return (!p.autoFocusEnabled || p.loaded) && this.data.loaded;
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
            const t = this.emptyFocus;
            p.activeFocus || (this.activeFocus.editProps.focus && (await this[this.emptyFocus ? "add" : "update"](this.activeFocus))),
              t && this.instantiateNewModel(),
              this.analytics.capture("focus " + (t ? "add" : "edit"), {
                position: localStorage.getItem("pomodoro-showing") ? "pomodoro" : "default"
              }),
              this.activeFocus.commitChanges(),
              this.activeFocus.todoId && m.trigger("todo:set:title", this.activeFocus.todoId, this.activeFocus.focus);
          },
          archive() {
            this.analytics.capture("focus clear", { completed: this.activeFocus.completed }),
              p.activeFocus ? (g.ax.autoFocus = !1) : u.FZ.methods.archive.call(this, this.activeFocus);
          },
          archiveAll() {
            Object.values(this.data.items).forEach((t) => this.archive(t));
          },
          toggleComplete() {
            const t = this.activeFocus.completed;
            this.analytics.capture(
              "focus " + (t ? "uncomplete" : "complete"),
              Object.assign(
                { position: localStorage.getItem("pomodoro-showing") ? "pomodoro" : "default" },
                t ? {} : { autofocus: p.autoFocusEnabled }
              )
            ),
              p.activeFocus
                ? p.toggleComplete()
                : ((this.activeFocus.completed = !t),
                  this.dataService
                    .update(this.activeFocus.id, { completed: !t })
                    .then(() => {
                      this.activeFocus.todoId && m.trigger("todo:set:done", this.activeFocus.todoId, !t);
                    })
                    .catch((e) => {
                      throw ((this.activeFocus.completed = t), e);
                    }));
          },
          onFocusPin(t) {
            g.ax.autoFocus = !1;
            let e = p.createFocusFromTodo(t);
            e && e.focus && (e.copyProperties(), this.add(e));
          },
          onTodoChange(...t) {
            var e, o;
            const i = t[0];
            if (
              t.find((t) => t && (t.ignoreRender || t.silent)) ||
              !this.activeFocus ||
              !Object.keys(this.data.items).length ||
              null == i ||
              !i.changed
            )
              return;
            let s = Object.values(this.data.items).find((t) => {
              var e;
              return (
                t.todoId && t.todoId === ((null === (e = i.get) || void 0 === e ? void 0 : e.call(i, "id")) || (null == i ? void 0 : i.id))
              );
            });
            if (!s) return;
            if (null !== (e = t[0]) && void 0 !== e && null !== (o = e.changed) && void 0 !== o && o.deleted) return void this.archive();
            const a = i.get("done"),
              n = i.get("title");
            (s.completed === a && s.focus === n) ||
              ((s.completed = a), (s.focus = n), this.dataService.update(s.id, { completed: a, focus: n }));
          }
        }
      }))();
    },
    91035: () => {
      addin.collect.PomodorosComplete = m.collect.SyncedCollection.extend({
        initialize: function () {
          let t = {};
          m.conditionalFeatures.featureEnabled("offlineDataOnly") && (t.offlineOnly = !0),
            (this.model = addin.models.PomodorosComplete),
            (t.idAttribute = "id"),
            (t.name = "pomodorosCompleted"),
            (t.model = this.model),
            (t.readOnly = !1),
            (t.apiUrl = m.globals.urlRootApi + "pomodoro/completed"),
            localStorage.getItem("pomodoroCompletedCounts") &&
              m.trigger("pomodoro:completedStats", localStorage.getObject("pomodoroCompletedCounts")),
            m.collect.SyncedCollection.prototype.initialize.call(this, null, t);
        },
        parse(t) {
          if (!t) return;
          if (Array.isArray(t)) return t;
          let e = { counts: t.counts, focusedMinutes: t.focusedMinutes };
          return localStorage.setItem("pomodoroCompletedCounts", JSON.stringify(e)), m.trigger("pomodoro:completedStats", e), t.completed;
        }
      });
    },
    11862: () => {
      (window.addin = window.addin || { models: {}, collect: {}, views: {} }),
        (addin.models.PomodorosComplete = Backbone.Model.extend({
          defaults: { completed: `${new Date().toISOString().split(".")[0]}Z`, focusMinutes: 0, restMinutes: 0 },
          initialize: function () {
            this.attributes.createdDate = m.date();
          }
        }));
    },
    30827: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => s });
      var i = o(99437);
      const s = (m.showAnyway = new (i.Z.extend({
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
    63113: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => r });
      var i = o(8081),
        s = o.n(i),
        a = o(23645),
        n = o.n(a)()(s());
      n.push([t.id, "\n/* stylelint-disable */\n.has-pomodoro .center-above { display: block;\n}\n/* stylelint-enable */\n", ""]);
      const r = n;
    },
    2785: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => r });
      var i = o(8081),
        s = o.n(i),
        a = o(23645),
        n = o.n(a)()(s());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.pomodoro[data-v-06e7cea8] { display: flex; flex-direction: column; align-items: center;\n}\n.above[data-v-06e7cea8], .below[data-v-06e7cea8] { text-align: center;\n}\n.above[data-v-06e7cea8] { margin-bottom: 0.6rem; display: flex; flex-direction: column; align-items: center;\n}\n.linear[data-v-06e7cea8] { width: 38ch; margin-bottom: 0.4rem; stroke: white;\n}\n.linear-path[data-v-06e7cea8], .linear-progress[data-v-06e7cea8] { stroke-dasharray: 101;\n}\n.linear-path[data-v-06e7cea8] { opacity: 0.6; stroke-width: 1px;\n}\n.linear-progress[data-v-06e7cea8] { opacity: 1; stroke-width: 4px; transition: 0.2s ease;\n}\n.modes[data-v-06e7cea8] { display: flex; font-size: 1.125rem; font-weight: 600; text-align: center; text-transform: uppercase;\n}\n.mode[data-v-06e7cea8] { padding: 5px 12px; display: inline-block; opacity: 0.65; cursor: pointer;\n}\n.mode[data-v-06e7cea8]:hover, .mode.active[data-v-06e7cea8] { opacity: 1;\n}\n.mode-focus[data-v-06e7cea8] { margin-right: 4px;\n}\n.progress-container[data-v-06e7cea8] {\n}\n.progress-bar[data-v-06e7cea8], .progress[data-v-06e7cea8] { height: 6px; width: 100%; background: rgba(255,255,255,0.5); border-radius: 6px;\n}\n.progress[data-v-06e7cea8] { width: 0; background: white; text-align: left; transition: 0.2s ease;\n}\n.three-col-layout--center[data-v-06e7cea8] {\n}\n.greeting-wrapper[data-v-06e7cea8] { position: relative;\n}\n\t\t\t/* We use the font-size-greeting var in 3 separate places here. Is there a way to simplify? */\n.greeting-inner-wrapper[data-v-06e7cea8] { font-size: var(--font-size-greeting); font-weight: 500; text-align: center;\n}\n\n\t\t/* Focus Overrides */\n.center-focus[data-v-06e7cea8] { display: block; font-size: 100% !important;\n}\n.center-focus[data-v-06e7cea8] .focus-content { position: relative;\n}\n.center-focus[data-v-06e7cea8] .checkbox { margin: 0.625rem 1rem 0;\n}\n.center-focus[data-v-06e7cea8] .prompt { padding-bottom: 0;\n}\n.center-focus[data-v-06e7cea8] .focus-input, .prompt .hidden-data[data-v-06e7cea8] { padding: 0; border: none; border-bottom: none; font-size: var(--font-size-greeting) !important; line-height: normal;\n}\n\n\t\t\t/* ••• hover effects -> Prevent focus ••• from showing when general center pomodoro is hovered  */\n.center-focus[data-v-06e7cea8] .dash-icon { opacity: 0;\n}\n.center-focus[data-v-06e7cea8]:hover .dash-icon { opacity: 0.8;\n}\n.right[data-v-06e7cea8] {\n}\n.below[data-v-06e7cea8] { margin-top: 35px;\n}\n.button[data-v-06e7cea8] { --v-padding: 9px; --background-color: rgba(0,0,0,0.25); padding: var(--v-padding) 32px; display: inline-flex; background: var(--background-color); border: 2px solid #fff; border-radius: 50px; box-shadow: 0 0 12px var(--background-color); color: #fff; cursor: pointer; font-size: 0.9375rem; font-weight: 600; outline: none; text-transform: uppercase;\n}\n.button[data-v-06e7cea8]:hover { background: rgba(0,0,0,0.175);\n}\n.button[data-v-06e7cea8]:hover:active { background: rgba(0,0,0,0.1); transition-duration: 0s;\n}\n.button.disabled[data-v-06e7cea8] { transition: opacity 500ms var(--a-curve); visibility: hidden;\n}\n\n/*\t.circle { position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -1; display: flex; align-items: center; justify-content: center; }\n\t\t.circle-svg { --size: 750px; height: var(--size); max-height: 90vh; width: var(--size); fill: none; stroke: white; transform: rotate(-43deg); }\n\t\t\t.circle-path, .circle-progress { stroke-dasharray: 283; }\n\t\t\t.circle-path { opacity: 0.6; stroke-dashoffset: -73%; stroke-width: 0.5px; }\n\t\t\t.circle-progress { opacity: 1; stroke-width: 1.31px; transition: 0.2s ease; }*/\n@media screen and (max-width: 450px) {\n.linear[data-v-06e7cea8] { width: 62%;\n}\n.modes[data-v-06e7cea8] { font-size: 1rem;\n}\n.mode[data-v-06e7cea8] {\n}\n.time[data-v-06e7cea8] { font-size: 5rem; font-weight: 500; letter-spacing: -1px;\n}\n.pomodoro .greeting-inner-wrapper[data-v-06e7cea8] { --font-size-greeting: clamp(10px, 8vw, 32px); margin-top: 2px;\n}\n.center-focus[data-v-06e7cea8] .focus-input, .prompt .hidden-data[data-v-06e7cea8] { margin: 0;\n}\n\n\t/* Dropdown */\n[data-v-06e7cea8] .stats { padding-right: var(--toast-padding) !important; padding-left: var(--toast-padding) !important; background: none !important;\n}\n}\n\n",
        ""
      ]);
      const r = n;
    },
    67652: (t, e, o) => {
      "use strict";
      var i;
      o.d(e, { Z: () => s }),
        (function (t) {
          (t.Sync = "sync"), (t.Cache = "cache"), (t.Server = "server"), (t.Timestamp = "timestamp");
        })(i || (i = {}));
      const s = i;
    },
    46908: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => p });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e(
          "section",
          {
            staticClass: "clock pomodoro app-container has-dash-icon",
            class: { running: t.started, "show-anyway": t.showAnyway.includes("pomodoro") },
            attrs: { "data-show-anyway": "pomodoro", "data-test": "pomodoro" }
          },
          [
            e("div", { staticClass: "above" }, [
              e("svg", { staticClass: "linear", attrs: { viewBox: "0 0 100 2", xmlns: "http://www.w3.org/2000/svg" } }, [
                e("line", { staticClass: "linear-path", attrs: { x1: "0", y1: "1", x2: "100", y2: "1" } }),
                t._v(" "),
                e("line", {
                  staticClass: "linear-progress",
                  attrs: { x1: "0", y1: "0", x2: "100", y2: "0", "stroke-dashoffset": t.dashProgress }
                })
              ]),
              t._v(" "),
              e("nav", { staticClass: "modes" }, [
                e(
                  "div",
                  {
                    staticClass: "mode mode-focus",
                    class: { active: "Focus" == t.activeTimer.name },
                    attrs: { "data-test": "focus-btn" },
                    on: {
                      click: function (e) {
                        return t.clickTimer("focus");
                      }
                    }
                  },
                  [t._v("Focus")]
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "mode mode-break",
                    class: { active: "Break" == t.activeTimer.name },
                    attrs: { "data-test": "rest-btn" },
                    on: {
                      click: function (e) {
                        return t.clickTimer("rest");
                      }
                    }
                  },
                  [t._v("Break")]
                )
              ])
            ]),
            t._v(" "),
            e(
              "transition",
              { attrs: { name: "fade", mode: "out-in" } },
              [
                e("three-col-layout", {
                  key: t.activeTimerId,
                  staticClass: "time-wrapper",
                  scopedSlots: t._u([
                    {
                      key: "left",
                      fn: function () {
                        return [
                          t.$touch
                            ? t._e()
                            : e("quick-nav", {
                                attrs: { options: t.centerOptions, region: "center", active: "pomodoro" },
                                on: { "switch-to": t.switchClock }
                              })
                        ];
                      },
                      proxy: !0
                    },
                    {
                      key: "center",
                      fn: function () {
                        return [
                          e("pomodoro-time", {
                            directives: [
                              { name: "mobile-click", rawName: "v-mobile-click", value: t.showToastMenu, expression: "showToastMenu" }
                            ],
                            attrs: { "hide-seconds": t.hideSeconds, hours: t.hours, minutes: t.minutes, seconds: t.seconds }
                          })
                        ];
                      },
                      proxy: !0
                    },
                    {
                      key: "right",
                      fn: function () {
                        return [
                          e("pomodoro-dropdown", {
                            attrs: {
                              timers: t.timers,
                              autoplay: t.autoplay,
                              "hide-seconds": t.hideSeconds,
                              "completed-stats": t.completedStats,
                              options: t.centerOptions
                            },
                            on: {
                              "update:autoplay": function (e) {
                                t.autoplay = e;
                              },
                              "update:hideSeconds": function (e) {
                                t.hideSeconds = e;
                              },
                              "update:hide-seconds": function (e) {
                                t.hideSeconds = e;
                              },
                              "update:timer": t.setTimerDuration,
                              "complete-timer": t.completeTimer,
                              "switch-clock": t.switchClock
                            }
                          })
                        ];
                      },
                      proxy: !0
                    }
                  ])
                })
              ],
              1
            ),
            t._v(" "),
            e(
              "div",
              { staticClass: "greeting-wrapper" },
              [
                e("transition", { attrs: { name: t.messageFade, mode: "out-in" } }, [
                  t.showFocusComponent
                    ? e(
                        "div",
                        { staticClass: "greeting-inner-wrapper" },
                        [
                          e("focus", {
                            staticClass: "center-focus",
                            attrs: { "input-placeholder": "+ Add a focus", "in-pomodoro": !0, "pomodoro-message": t.message }
                          })
                        ],
                        1
                      )
                    : e("div", { key: t.message, staticClass: "greeting-inner-wrapper message", attrs: { "data-test": "message" } }, [
                        t._v(t._s(t.message))
                      ])
                ])
              ],
              1
            ),
            t._v(" "),
            e("transition", { attrs: { name: "fade", mode: "out-in" } }, [
              e("div", { key: t.activeTimerId, staticClass: "below" }, [
                e(
                  "button",
                  {
                    staticClass: "button",
                    class: { disabled: 0 === t.timeRemaining },
                    attrs: { "data-test": "start-stop-button" },
                    on: { click: t.toggleMasterPlayPause }
                  },
                  [t._v(t._s(t.started ? "Pause" : "Start"))]
                )
              ])
            ])
          ],
          1
        );
      };
      i._withStripped = !0;
      const s = { focus: ["Time to focus.", "Focus time."], rest: ["Time for a break.", "Break time."] };
      var a = o(99437);
      o(11862), o(91035);
      const n = new (a.Z.extend({
        name: "PomodoroDataManager",
        data: () => ({
          completedStats: { counts: { today: 0, week: 0, allTime: 0 }, focusedMinutes: { today: 0, week: 0, allTime: 0 } },
          intervalId: null
        }),
        created() {
          (this.completedCountLocalStorageKey = "pomodoroCompletedCounts"),
            m.on("pomodoro:completedStats", this.setCompletedStats),
            window.addEventListener("storage", this.handleCompletedStatsChange),
            this.createSyncedCollection();
        },
        destroyed() {
          m.off("pomodoro:completedStats", this.setCompletedStats), clearInterval(this.intervalId);
        },
        methods: {
          createSyncedCollection() {
            addin.collect.pomodorosComplete = new addin.collect.PomodorosComplete();
          },
          addCompletedPomodoro(t) {
            try {
              addin.collect.pomodorosComplete.create(t);
            } catch (t) {
              console.error(t);
            } finally {
              this.completedStats.counts.today++, this.completedStats.counts.allTime++, this.completedStats.counts.week++;
              const t = m.models.customization.get("pomodoroSettingsStr"),
                e = t && JSON.parse(t),
                o = Number(e.focusDuration);
              (this.completedStats.focusedMinutes.today += o),
                (this.completedStats.focusedMinutes.allTime += o),
                (this.completedStats.focusedMinutes.week += o),
                localStorage.setItem(this.completedCountLocalStorageKey, JSON.stringify(this.completedStats));
            }
          },
          setCompletedStats(t) {
            this.completedStats = t;
          },
          handleCompletedStatsChange(t) {
            if (t.key === this.completedCountLocalStorageKey) {
              const e = JSON.parse(t.newValue);
              e && this.setCompletedStats(e);
            }
          },
          fetch() {
            addin.collect.pomodorosComplete.fetch();
          },
          createIntervalFetch() {
            this.intervalId = setInterval(() => {
              this.fetch();
            }, 18e5);
          },
          clearIntervalFetch() {
            clearInterval(this.intervalId);
          }
        }
      }))();
      var r = o(42223),
        d = o(30827),
        c = o(63568),
        l = o(84888),
        u = o(85711);
      const h = new (o(81405).ZP)({ feature: "pomodoro", is_paid_event: !0 }),
        g = {
          name: "Pomodoro",
          components: {
            ThreeColLayout: l.Z,
            QuickNav: () => o.e(1532).then(o.bind(o, 1532)),
            PomodoroTime: () => o.e(9650).then(o.bind(o, 19650)),
            PomodoroDropdown: () => o.e(508).then(o.bind(o, 90508)),
            Focus: () => o.e(5756).then(o.bind(o, 35756))
          },
          unreactive: () => ({
            timers: { focus: { name: "Focus", minutes: 25 }, rest: { name: "Break", minutes: 5 } },
            showAnyway: d.Z,
            centerOptions: c.Z
          }),
          mixins: [r.Z],
          data: () => ({
            activeTimerId: "focus",
            started: !1,
            timeRemaining: 0,
            expectedTimerEnd: 0,
            timer: null,
            autoplay: !1,
            hideSeconds: !1
          }),
          computed: {
            activeTimer() {
              return this.timers[this.activeTimerId];
            },
            startMessage() {
              return m.utils.getRandomItem(s[this.activeTimerId]);
            },
            dashProgress() {
              const t = 60 * this.activeTimer.minutes;
              return (143 * this.timeRemaining) / t + "%";
            },
            message() {
              return this.started || 0 !== this.timeRemaining ? (this.started ? this.activeTimer.name : this.startMessage) : "Done!";
            },
            showFocusComponent() {
              return "Focus" === this.activeTimer.name && 0 !== this.timeRemaining;
            },
            messageFade() {
              return this.started ? "fade-fast" : "fade";
            },
            completedStats: () => n.completedStats,
            hours() {
              return this.hideSeconds
                ? Math.trunc(this.timeRemaining / 3600).toString()
                : m.utils.twoDigit(Math.trunc(this.timeRemaining / 3600));
            },
            minutes() {
              return this.hideSeconds
                ? Math.trunc((this.timeRemaining / 60) % 60).toString()
                : m.utils.twoDigit(Math.trunc((this.timeRemaining / 60) % 60));
            },
            seconds() {
              return m.utils.twoDigit(this.timeRemaining % 60);
            },
            timeString() {
              return this.hideSeconds
                ? this.hours > 0
                  ? `${this.hours}h ${this.minutes}m`
                  : `${this.minutes}m`
                : this.hours > 0
                ? `${this.hours}:${this.minutes}:${this.seconds}`
                : `${this.minutes}:${this.seconds}`;
            },
            documentTitle() {
              var t;
              const e = null === (t = u.default.activeFocus) || void 0 === t ? void 0 : t.focus;
              return `${this.timeString} · ${e && !e.completed && "focus" === this.activeTimerId ? e : this.activeTimer.name}`;
            },
            isSafari: m.utils.isSafari
          },
          watch: {
            autoplay() {
              this.saveSettingsToCustomization("autoplay", this.autoplay);
            },
            hideSeconds() {
              this.saveSettingsToCustomization("hideSeconds", this.hideSeconds);
            },
            documentTitle() {
              document.title = this.documentTitle;
            }
          },
          mounted() {
            this.autoStartFocusTimer && (window.pomodoroSounds.start.play(), this.start()),
              (this.$body = $("body")),
              this.$body.addClass("has-pomodoro");
          },
          created() {
            if (
              (window.addEventListener("storage", this.handleStorageChangeForStartedPomodoro),
              m.on("newDay", this.resetToFocus),
              m.on("pomodoro:togglePlay", this.togglePlay),
              m.models.customization.on("change:pomodoroSettingsStr", this.handleSettingsChange),
              this.settingsMigrationFromLocalToCustomization(),
              this.setSettingsFromCustomization(),
              n.fetch(),
              n.createIntervalFetch(),
              (window.pomodoroSounds = {
                start: new Audio("sounds/pomo-start.mp3"),
                stop: new Audio("sounds/pomo-stop.mp3"),
                done: new Audio("sounds/pomo-done.mp3")
              }),
              "true" === localStorage.getItem("pomodoro-running") ||
                localStorage.getItem("pomodoro-showing") ||
                localStorage.getItem("pomodoro-time-remaining"))
            ) {
              if (
                ((this.started = "true" === localStorage.getItem("pomodoro-running")),
                (this.autoStartFocusTimer = "true" === localStorage.getItem("pomodoro-focus-timer")),
                this.autoStartFocusTimer)
              )
                return this.setTimer("focus"), void localStorage.removeItem("pomodoro-focus-timer");
              (this.activeTimerId = localStorage.getItem("pomodoro-started") || this.activeTimerId),
                localStorage.getItem("pomodoro-time-remaining")
                  ? (this.timeRemaining = Number(localStorage.getItem("pomodoro-time-remaining")))
                  : localStorage.getItem("pomodoro-started-expected-timer-end") &&
                    ((this.expectedTimerEnd = Number(localStorage.getItem("pomodoro-started-expected-timer-end"))),
                    isNaN(this.expectedTimerEnd) || (this.timeRemaining = Math.floor((this.expectedTimerEnd - Date.now()) / 1e3))),
                this.timeRemaining > 0 && this.started
                  ? this.timeOutForCountdown()
                  : this.timeRemaining < 0
                  ? (localStorage.setItem("pomodoro-running", !1),
                    "focus" === this.activeTimerId ? this.setTimer("rest") : this.setTimer("focus"),
                    this.clearStartedTimeout())
                  : this.timeRemaining || this.setTimer(this.activeTimerId);
            } else this.setTimer(this.activeTimerId), this.removeAllPomodoroLocalStorageKeys();
          },
          destroyed() {
            this.$body.removeClass("has-pomodoro"),
              m.off("newDay", this.resetToFocus),
              m.off("pomodoro:togglePlay", this.togglePlay),
              m.models.customization.off("change:pomodoroSettingsStr", this.handleSettingsChange),
              window.removeEventListener("storage", this.handleStorageChangeForStartedPomodoro),
              clearTimeout(this.timer),
              (document.title = "New Tab"),
              this.stop(),
              localStorage.setItem("pomodoro-closed", !0),
              this.removeAllPomodoroLocalStorageKeys(),
              n.clearIntervalFetch();
          },
          methods: {
            countdown() {
              this.calculateTimeRemaining(), this.timeRemaining <= 0 || this.timeOutForCountdown();
            },
            timeOutForCountdown() {
              const t = 1e3 - new Date().getMilliseconds() + 10;
              this.timer = setTimeout(this.countdown, t);
            },
            calculateTimeRemaining() {
              if (
                (this.timeRemaining > 0 && (this.timeRemaining = Math.floor((this.expectedTimerEnd - Date.now()) / 1e3)),
                this.timeRemaining <= 0)
              )
                return this.isSafari ? this.complete() : this.completeDebounced();
            },
            togglePlay() {
              !0 === this.started ? (window.pomodoroSounds.stop.play(), this.stop()) : (window.pomodoroSounds.start.play(), this.start());
            },
            toggleMasterPlayPause(t) {
              this.togglePlay(), m.trigger("soundscapes:togglePlay", t);
            },
            completeDebounced() {
              clearTimeout(this.completeTimeout), (this.completeTimeout = setTimeout(this.complete, 100));
            },
            complete() {
              if ("Focus" === this.activeTimer.name) {
                const t = { focusMinutes: this.timers.focus.minutes, restMinutes: this.timers.rest.minutes };
                n.addCompletedPomodoro(t);
              }
              window.pomodoroSounds.done.play(),
                (this.timeRemaining = 0),
                this.stop(),
                this.switchTimers(),
                h.capture("pomodoro complete", { period: this.activeTimerId });
            },
            switchTimers() {
              if (0 === this.timeRemaining) {
                const t = this.autoplay;
                setTimeout(() => {
                  "focus" === this.activeTimerId ? this.setTimer("rest") : this.setTimer("focus"), t && this.start();
                }, 1500);
              }
            },
            reset() {
              this.setCountdownTimer(), this.stop(), localStorage.setItem("pomodoro-reset", !0);
            },
            resetToFocus() {
              this.reset(), this.setTimer("focus"), this.setCountdownTimer();
            },
            start() {
              this.clearStartedTimeout(),
                (this.started = !0),
                (this.expectedTimerEnd = Date.now() + 1e3 * this.timeRemaining),
                localStorage.removeItem("pomodoro-time-remaining"),
                localStorage.setItem("pomodoro-running", !0),
                localStorage.setItem("pomodoro-started-expected-timer-end", this.expectedTimerEnd),
                this.timeOutForCountdown(),
                h.capture("pomodoro start", { period: this.activeTimerId });
            },
            stop() {
              this.clearStartedTimeout(),
                localStorage.setItem("pomodoro-running", !1),
                localStorage.setItem("pomodoro-time-remaining", this.timeRemaining),
                h.capture("pomodoro stop", { period: this.activeTimerId });
            },
            setTimer(t) {
              this.started && this.stop(),
                (this.activeTimerId = t),
                localStorage.setItem("pomodoro-started", this.activeTimerId),
                this.setCountdownTimer();
            },
            clickTimer(t) {
              this.setTimer(t), localStorage.setItem("pomodoro-timer-type-change", t), h.capture("period change", { new_value: t });
            },
            setCountdownTimer() {
              (this.timeRemaining = 60 * this.activeTimer.minutes),
                localStorage.removeItem("pomodoro-started-expected-timer-end"),
                localStorage.removeItem("pomodoro-time-remaining");
            },
            setTimerDuration(t, e) {
              this.started && this.stop(),
                (this.timers[t].minutes = e),
                this.setTimerWhenNotStarted(t),
                this.saveSettingsToCustomization(`${t}Duration`, this.timers[t].minutes),
                h.capture("duration change", { period: t, new_value: e });
            },
            setTimerWhenNotStarted(t) {
              this.started || this.activeTimerId !== t || (this.timeRemaining = 60 * this.timers[t].minutes);
            },
            closePomodoro() {
              this.$emit("pomodoro-show", !1);
            },
            handleStorageChangeForStartedPomodoro(t) {
              switch (t.key) {
                case "pomodoro-running":
                  if (null === t.newValue) return;
                  "true" === t.newValue
                    ? (this.clearStartedTimeout(),
                      (this.started = !0),
                      (this.expectedTimerEnd = Date.now() + 1e3 * this.timeRemaining),
                      this.timeOutForCountdown())
                    : this.clearStartedTimeout();
                  break;
                case "pomodoro-reset":
                  if (null === t.newValue) return;
                  this.setCountdownTimer(), this.clearStartedTimeout(), localStorage.removeItem("pomodoro-reset");
                  break;
                case "pomodoro-closed":
                  if (null === t.newValue) return;
                  (document.title = "New Tab"),
                    n.clearIntervalFetch(),
                    this.removeAllPomodoroLocalStorageKeys(),
                    this.$emit("pomodoro-show", !1);
                  break;
                case "pomodoro-complete":
                  if (null === t.newValue) return;
                  (this.timeRemaining = 0), this.stop(), this.switchTimers(), localStorage.removeItem("pomodoro-complete");
                  break;
                case "pomodoro-timer-type-change":
                  if (null === t.newValue) return;
                  this.setTimer(t.newValue), this.setCountdownTimer(), localStorage.removeItem("pomodoro-timer-type-change");
              }
            },
            handleSettingsChange() {
              let t = this.getPomodoroSettingsFromCustomization();
              t &&
                (t.autoplay !== this.autoplay && (this.autoplay = t.autoplay),
                t.hideSeconds !== this.hideSeconds && (this.hideSeconds = t.hideSeconds),
                Number(t.focusDuration) !== this.timers.focus.minutes &&
                  ((this.timers.focus.minutes = Number(t.focusDuration)), this.setTimerWhenNotStarted("focus")),
                Number(t.restDuration) !== this.timers.rest.minutes &&
                  ((this.timers.rest.minutes = Number(t.restDuration)), this.setTimerWhenNotStarted("rest")));
            },
            clearStartedTimeout() {
              (this.started = !1), clearTimeout(this.timer);
            },
            removeAllPomodoroLocalStorageKeys() {
              [
                "pomodoro-showing",
                "pomodoro-reset",
                "pomodoro-running",
                "pomodoro-closed",
                "pomodoro-started-expected-timer-end",
                "pomodoro-current-focus",
                "pomodoro-timer-type-change",
                "pomodoro-complete",
                "pomodoro-focus-timer"
              ].forEach((t) => {
                localStorage.removeItem(t);
              });
            },
            switchClock(t) {
              switch (t) {
                case "clock":
                  m.models.customization.save("percentClock", !1), this.closePomodoro();
                  break;
                case "percent":
                  m.models.customization.save("percentClock", !0), this.closePomodoro();
              }
            },
            getPomodoroSettingsFromCustomization() {
              const t = m.models.customization.get("pomodoroSettingsStr");
              return t && JSON.parse(t);
            },
            setSettingsFromCustomization() {
              let t = this.getPomodoroSettingsFromCustomization();
              t &&
                ((this.timers.focus.minutes = Number(t.focusDuration)),
                (this.timers.rest.minutes = Number(t.restDuration)),
                (this.autoplay = t.autoplay),
                (this.hideSeconds = t.hideSeconds));
            },
            saveSettingsToCustomization(t, e) {
              let o = this.getPomodoroSettingsFromCustomization();
              o && ((o[t] = e), m.models.customization.save("pomodoroSettingsStr", JSON.stringify(o)));
            },
            settingsMigrationFromLocalToCustomization() {
              let t = {
                "pomodoro-focus-duration": "focusDuration",
                "pomodoro-rest-duration": "restDuration",
                "pomodoro-autoplay": "autoplay"
              };
              Object.keys(t).forEach((e) => {
                localStorage.getItem(e) && (this.saveSettingsToCustomization(t[e], localStorage.getItem(e)), localStorage.removeItem(e));
              });
            },
            completeTimer() {
              this.complete(), localStorage.setItem("pomodoro-complete", !0);
            },
            showToastMenu() {
              this.$e.$emit("pomodoro:toggleDropdown", !0);
            }
          }
        };
      o(55594), o(85291);
      const p = (0, o(51900).Z)(g, i, [], !1, null, "06e7cea8", null).exports;
    },
    55594: (t, e, o) => {
      var i = o(63113);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, o(45346).Z)("cde28486", i, !1, { ssrId: !0 });
    },
    85291: (t, e, o) => {
      var i = o(2785);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, o(45346).Z)("ce1aa69e", i, !1, { ssrId: !0 });
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
