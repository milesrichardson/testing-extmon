(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [2726],
  {
    18023: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => r });
      const r = {
        props: { viewManager: { type: Object, required: !0 } },
        created() {
          var t, e, a;
          this.viewManager.setActiveBodyComponentInstance(this),
            (this._viewId = this.viewManager.activeViewId),
            this.viewManager.$on(`viewOpened:${this._viewId}`, this._afterEnterWrapper),
            this.viewManager.$on(`viewClosed:${this._viewId}`, this._afterLeaveWrapper),
            null === (t = this.viewManager) ||
              void 0 === t ||
              null === (e = t.views[this._viewId]) ||
              void 0 === e ||
              null === (a = e.beforeEnter) ||
              void 0 === a ||
              a.call(e),
            this.beforeEnter();
        },
        destroyed() {
          this.viewManager.$emit("resolveShowView:" + this._viewId);
        },
        methods: {
          beforeEnter() {},
          afterEnter() {},
          beforeLeave() {},
          afterLeave() {},
          _afterLeaveWrapper() {
            var t, e;
            null === (t = this.viewManager.views[this._viewId]) || void 0 === t || null === (e = t.afterLeave) || void 0 === e || e.call(t),
              this.afterLeave(),
              this._removeListeners();
          },
          _afterEnterWrapper() {
            var t, e;
            null === (t = this.viewManager.views[this._viewId]) || void 0 === t || null === (e = t.afterEnter) || void 0 === e || e.call(t),
              this.afterEnter();
          },
          _removeListeners() {
            this.viewManager.$off(`viewClosed:${this._viewId}`, this._afterLeaveWrapper),
              this.viewManager.$off(`viewOpened:${this._viewId}`, this._afterEnterWrapper);
          }
        }
      };
    },
    3740: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => o });
      var r = a(8081),
        n = a.n(r),
        i = a(23645),
        s = a.n(i)()(n());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n\n/* Drag and Drop */\n.pin-message[data-v-63f5c4f4] { padding: 11px 20px; position: fixed; top: 27px; z-index: 1000001; left: calc(50% + var(--sidebar-width) / 2); background-color: var(--color-active); border-radius: var(--input-border-radius); color: white; pointer-events: none; transform: translateX(-50%);\n}\n.has-banner .pin-message[data-v-63f5c4f4] { top: calc(27px + var(--banner-height));\n}\n\n/* Clocks */\n.clocks .name[data-v-63f5c4f4] { margin-top: 2px;\n}\n\n/* Countdowns */\n.countdowns .tile[data-v-63f5c4f4] .metric { margin: 0;\n}\n\n/* Quotes */\n.quotes .item[data-v-63f5c4f4] { padding: 10px;\n}\n.quotes .list-row-data[data-v-63f5c4f4] { display: block;\n}\n.quote-body[data-v-63f5c4f4], .quote-source[data-v-63f5c4f4] { display: inline; user-select: text;\n}\n.quote-body[data-v-63f5c4f4]:before, .quote-body[data-v-63f5c4f4]:after { --quotation-mark-margin: -5px; color: var(--color-light); font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.quote-body[data-v-63f5c4f4]:before { margin-right: var(--quotation-mark-margin); content: '\\201C';\n}\n.quote-body[data-v-63f5c4f4]:after { margin-left: var(--quotation-mark-margin); content: '\\201D';\n}\n.quote-body[data-v-63f5c4f4] { font-size: 1.0625rem;\n}\n.quote-source[data-v-63f5c4f4] { margin-top: 4px; margin-left: 7px; opacity: 0.6; font-size: 1rem;\n}\n.quote-source[data-v-63f5c4f4]:before { content: '\\2013 ';\n}\n\n/* Focus */\n.focus .no-value[data-v-63f5c4f4] { opacity: 0.7;\n}\n.focus .item-name.no-value[data-v-63f5c4f4]:before { content: 'No Label'; font-style: italic;\n}\n\n/* Topics */\n.topics .is-category .no-value[data-v-63f5c4f4] { opacity: 0.7;\n}\n.topics .is-category .item-name.no-value[data-v-63f5c4f4]:before { content: 'No Title'; font-style: italic;\n}\n\n/* Links */\n.links .item-detail[data-v-63f5c4f4] { min-width: 0; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n\n/* Users */\n.list-row .user-role[data-v-63f5c4f4] { padding-bottom: 2px; color: var(--color-light); font-size: 0.875rem; font-weight: 500;\n}\n.item-list-icon.current-user[data-v-63f5c4f4] { border-radius: 50px; box-shadow: 0 0 0 2px var(--color-active);\n}\n\n\n/* Icons */\n.list-icon .icon-wrapper[data-v-63f5c4f4] { margin: 0 5px;\n}\n.status-role[data-v-63f5c4f4] { color: var(--color-dark);\n}\n.status-invite[data-v-63f5c4f4]:last-child { margin-right: calc(var(--form-element-padding) / -2);\n}\n\n\n",
        ""
      ]);
      const o = s;
    },
    47299: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => o });
      var r = a(8081),
        n = a.n(r),
        i = a(23645),
        s = a.n(i)()(n());
      s.push([t.id, "\n/* stylelint-disable */\n.empty[data-v-01d85aa6] { padding: 0; display: flex;\n}\n", ""]);
      const o = s;
    },
    12726: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => d });
      var r = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "box-wrapper", attrs: { slot: "content" }, slot: "content" },
          [
            e("transition", { attrs: { name: "fade" } }, [
              t.pinning || t.unpinning ? e("div", { staticClass: "pin-message" }, [t._v(t._s(t.pinning ? "Pin" : "Unpin"))]) : t._e()
            ]),
            t._v(" "),
            e(
              "div",
              {
                staticClass: "items-filter",
                class: { draggable: t.allowReorder, dragging: t.dragging, pinning: t.pinning, unpinning: t.unpinning }
              },
              [
                t.filteredItems.length
                  ? e(
                      "ul",
                      { staticClass: "list", attrs: { "data-test": "list" } },
                      t._l(t.dragging ? t.reorderableItems[t.key] : t.filteredItems, function (a, r) {
                        return e(t.itemComponent, {
                          key: a.id,
                          tag: "component",
                          attrs: { item: a, "view-manager": t.viewManager },
                          nativeOn: {
                            dragstart: function (e) {
                              return t.dragstart(e, r, a, t.key);
                            },
                            dragenter: function (e) {
                              return e.preventDefault(), t.dragenter(e, r, t.key);
                            },
                            dragover: function (t) {
                              t.preventDefault();
                            },
                            drop: function (e) {
                              return t.drop(r, t.key);
                            },
                            dragend: function (e) {
                              return t.dragend(a);
                            }
                          }
                        });
                      }),
                      1
                    )
                  : e("items-empty", {
                      attrs: {
                        "empty-message": (t.filter && t.filter.emptyMessage) || t.collection.emptyMessage,
                        "add-label": t.addLabel,
                        "view-manager": t.viewManager,
                        "data-test": "empty"
                      }
                    })
              ],
              1
            )
          ],
          1
        );
      };
      r._withStripped = !0;
      var n = function () {
        var t = this,
          e = t._self._c;
        return e("section", { staticClass: "empty" }, [
          t._m(0),
          t._v(" "),
          e("div", { staticClass: "content" }, [
            e("div", { staticClass: "title" }, [t._v(t._s(t.emptyMessage))]),
            t._v(" "),
            e("div", { staticClass: "description" }, [t._v(t._s(t.addMessage))]),
            t._v(" "),
            e("button", { staticClass: "button", attrs: { "data-test": "add-button" }, on: { click: t.onAdd } }, [t._v(t._s(t.addLabel))])
          ])
        ]);
      };
      n._withStripped = !0;
      const i = {
        name: "ItemsEmpty",
        props: {
          viewManager: { type: Object, required: !0 },
          emptyMessage: { type: String, default: "" },
          addLabel: { type: String, default: "" }
        },
        computed: {
          addMessage() {
            const t = this.viewManager.collection.nameLCS;
            return `Add ${t && m.utils.isVowel(t[0]) ? "an" : "a"} ${t} to get started`;
          }
        },
        methods: {
          onAdd() {
            this.viewManager.showView("add");
          }
        }
      };
      a(94085);
      var s = a(51900);
      const o = {
        name: "ItemList",
        components: {
          ItemsEmpty: (0, s.Z)(
            i,
            n,
            [
              function () {
                var t = this,
                  e = t._self._c;
                return e("ul", { staticClass: "list" }, [
                  e("li", { staticClass: "list-row" }),
                  t._v(" "),
                  e("li", { staticClass: "list-row" }),
                  t._v(" "),
                  e("li", { staticClass: "list-row" })
                ]);
              }
            ],
            !1,
            null,
            "01d85aa6",
            null
          ).exports
        },
        store: ["teamInfo"],
        mixins: [a(18023).Z],
        props: {
          addLabelOverride: { type: String, default: "" },
          hasCategories: { type: Boolean, default: !1 },
          addButtonText: { type: String, default: "Add" },
          itemComponent: { type: [Object, Function], default: null },
          allowReorder: { type: Boolean, default: !1 },
          separatePinned: { type: Boolean, default: !1 },
          filter: { type: Object, default: null }
        },
        data: () => ({
          defaultError: "",
          dragging: !1,
          dragstartIndex: null,
          dragstartKey: null,
          dragstartModel: null,
          reorderableItems: []
        }),
        computed: {
          collection() {
            return this.viewManager.collection;
          },
          sort() {
            return this.collection.sort || ((t, e) => t.order - e.order);
          },
          fields() {
            return this.collection.fields;
          },
          addLabel() {
            return this.addLabelOverride || `+ ${this.addButtonText} ${this.collection.nameCS}`;
          },
          allItems: function () {
            return this.collection.data.items;
          },
          filteredItems() {
            let t = Object.values(this.allItems);
            return this.filter && (t = t.filter(this.filter.func)), t.sort(this.sort), t;
          },
          loaded() {
            return this.collection.data.loaded;
          },
          separatorIndices() {
            let t = {};
            return (
              this.separatePinned &&
                Object.keys(this.reorderableItems).forEach((e) => {
                  t[e] = this.reorderableItems[e].findIndex((t) => t.separator);
                }),
              t
            );
          },
          pinning() {
            return this.dragging && !this.dragstartModel.pinned && this.dragstartIndex < this.separatorIndices[this.dragstartKey];
          },
          unpinning() {
            return this.dragging && this.dragstartModel.pinned && this.dragstartIndex > this.separatorIndices[this.dragstartKey];
          }
        },
        methods: {
          copyFilterItems() {
            this.reorderableItems = [...this.filteredItems];
          },
          dragstart(t, e, a, r) {
            this.copyFilterItems(),
              t.dataTransfer.setData("text/html", t.target.outerHTML),
              (this.dragging = !0),
              (this.dragstartIndex = e),
              (this.dragstartKey = r),
              (this.dragstartModel = a),
              (this.dragTimeout = setTimeout(() => this.$set(a, "dragging", !0), 100));
          },
          dragenter(t, e, a) {
            e !== this.dragstartIndex &&
              (this.reorderableItems[a].splice(e, 0, this.reorderableItems[a].splice(this.dragstartIndex, 1)[0]),
              (this.dragstartIndex = e));
          },
          drop(t, e) {
            this.collection.hasOwnProperty("reorder") ||
              console.log('Error: the prop collection does not have the "reorder" method to commit this drop operation.');
            const a = this.dragstartModel;
            this.$set(a, "dragging", !1);
            let r,
              n,
              i = !1,
              s = null;
            0 === t
              ? ((r = this.reorderableItems[e][1]), (i = !0))
              : this.reorderableItems[e][t - 1].separator
              ? ((r = this.reorderableItems[e][t + 1]), (i = !0))
              : ((r = this.reorderableItems[e][t - 1]), (n = this.reorderableItems[e][t + 1])),
              this.separatePinned &&
                (t < this.separatorIndices[e] && !a.pinned ? (s = !0) : t > this.separatorIndices[e] && a.pinned && (s = !1),
                null !== s && this.$set(a, "pinned", s)),
              this.collection.reorder(this.dragstartModel, r, i, n, s);
          },
          dragend(t) {
            clearTimeout(this.dragTimeout),
              this.$set(t, "dragging", !1),
              (this.dragging = !1),
              (this.dragstartIndex = null),
              (this.dragstartKey = null),
              (this.dragstartModel = null),
              (this.reorderableItems = {});
          }
        }
      };
      a(61245);
      const d = (0, s.Z)(o, r, [], !1, null, "63f5c4f4", null).exports;
    },
    61245: (t, e, a) => {
      var r = a(3740);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[t.id, r, ""]]),
        r.locals && (t.exports = r.locals),
        (0, a(45346).Z)("04e9012e", r, !1, { ssrId: !0 });
    },
    94085: (t, e, a) => {
      var r = a(47299);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[t.id, r, ""]]),
        r.locals && (t.exports = r.locals),
        (0, a(45346).Z)("77e49af6", r, !1, { ssrId: !0 });
    }
  }
]);
