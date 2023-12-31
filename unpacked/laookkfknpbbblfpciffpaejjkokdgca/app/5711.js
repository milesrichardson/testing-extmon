"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [5711],
  {
    85711: (t, e, o) => {
      o.r(e), o.d(e, { default: () => p });
      var a = o(99437),
        i = o(31624),
        s = o(64438),
        c = o(67652);
      const d = new s.Z("tab.focus.emptySave", 0.01),
        n = new (a.Z.extend({
          name: "FocusDataService",
          mixins: [i.X],
          unreactive: () => ({ type: "focus", mode: localStorage.getItem("token") ? c.Z.Sync : c.Z.Cache }),
          defaultPath: "focus",
          methods: {
            add(t, e) {
              return e.focus
                ? i.X.methods.add.apply(this, arguments)
                : (d.info("Focus data service add with no focus", {
                    userUuid: localStorage.getItem("userId"),
                    stackTrace: m.utils.getStackTrace()
                  }),
                  Promise.reject());
            }
          }
        }))();
      var u = o(2770);
      const l = a.Z.extend({
        name: "FocusModel",
        mixins: [u.Z],
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
            u.Z.methods.updateData.call(this, t), (this.completed = !!t.completed);
          }
        }
      });
      var h = o(94234),
        r = o(20144),
        v = o(40531);
      const g = new (r.ZP.extend({
        name: "AutoFocusManager",
        data: () => ({ activeFocus: null, loaded: !1 }),
        computed: { autoFocusEnabled: () => v.ax.autoFocus && m.conditionalFeatures.featureEnabled("pinfocus") },
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
            var e, o, a;
            const i = t[0];
            if (
              t.find((t) => t && (t.ignoreRender || t.silent)) ||
              !this.autoFocusEnabled ||
              null == i ||
              !i.changed ||
              !Object.keys(i.changed).length ||
              !1 === (null === (e = i.changed) || void 0 === e ? void 0 : e.isLoading)
            )
              return;
            const s =
              (null === (o = i.changed) || void 0 === o ? void 0 : o.completedDate) ||
              (null === (a = i.changed) || void 0 === a ? void 0 : a.modifiedServer);
            this.getTopTodo().then((t) => {
              var e, o;
              t
                ? (this.activeFocus = this.createFocusFromTodo(t))
                : null !== (e = this.activeFocus) &&
                  void 0 !== e &&
                  e.todoId &&
                  (i.get("id") || i.id).includes(null === (o = this.activeFocus) || void 0 === o ? void 0 : o.todoId) &&
                  ((this.activeFocus.completed = i.get("done")), s || (this.activeFocus = null));
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
      var F = o(81405);
      const p = new (a.Z.extend({
        name: "FocusCollection",
        mixins: [h.FZ, h.mX],
        unreactive: () => ({ type: "focus", Model: l, dataService: n, newModel: null, analytics: new F.ZP({ feature: "focus" }) }),
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
            return g.activeFocus || this.activeFocusInCollection || this.newModel;
          },
          loaded() {
            return (!g.autoFocusEnabled || g.loaded) && this.data.loaded;
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
            g.activeFocus || (this.activeFocus.editProps.focus && (await this[this.emptyFocus ? "add" : "update"](this.activeFocus))),
              t && this.instantiateNewModel(),
              this.analytics.capture("focus " + (t ? "add" : "edit"), {
                position: localStorage.getItem("pomodoro-showing") ? "pomodoro" : "default"
              }),
              this.activeFocus.commitChanges(),
              this.activeFocus.todoId && m.trigger("todo:set:title", this.activeFocus.todoId, this.activeFocus.focus);
          },
          archive() {
            this.analytics.capture("focus clear", { completed: this.activeFocus.completed }),
              g.activeFocus ? (v.ax.autoFocus = !1) : h.FZ.methods.archive.call(this, this.activeFocus);
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
                t ? {} : { autofocus: g.autoFocusEnabled }
              )
            ),
              g.activeFocus
                ? g.toggleComplete()
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
            v.ax.autoFocus = !1;
            let e = g.createFocusFromTodo(t);
            e && e.focus && (e.copyProperties(), this.add(e));
          },
          onTodoChange(...t) {
            var e, o;
            const a = t[0];
            if (
              t.find((t) => t && (t.ignoreRender || t.silent)) ||
              !this.activeFocus ||
              !Object.keys(this.data.items).length ||
              null == a ||
              !a.changed
            )
              return;
            let i = Object.values(this.data.items).find((t) => {
              var e;
              return (
                t.todoId && t.todoId === ((null === (e = a.get) || void 0 === e ? void 0 : e.call(a, "id")) || (null == a ? void 0 : a.id))
              );
            });
            if (!i) return;
            if (null !== (e = t[0]) && void 0 !== e && null !== (o = e.changed) && void 0 !== o && o.deleted) return void this.archive();
            const s = a.get("done"),
              c = a.get("title");
            (i.completed === s && i.focus === c) ||
              ((i.completed = s), (i.focus = c), this.dataService.update(i.id, { completed: s, focus: c }));
          }
        }
      }))();
    }
  }
]);
