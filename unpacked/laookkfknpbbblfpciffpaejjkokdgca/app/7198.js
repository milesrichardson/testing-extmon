(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7198, 4493],
  {
    99869: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var a = r(8081),
        d = r.n(a),
        s = r(23645),
        i = r.n(s)()(d());
      i.push([
        e.id,
        "\n/* stylelint-disable */\n.app-empty[data-v-0447c7fa] { padding: var(--app-padding); flex-grow: 1; display: flex; flex-direction: column; gap: 10px; align-items: center; justify-content: center; text-align: center;\n}\n.title[data-v-0447c7fa] { opacity: var(--opacity-stop-6); white-space: pre-line; line-height: 125%;\n}\n.description[data-v-0447c7fa] { opacity: var(--opacity-stop-4); font-size: 0.9rem;\n}\n",
        ""
      ]);
      const o = i;
    },
    67694: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var a = r(8081),
        d = r.n(a),
        s = r(23645),
        i = r.n(s)()(d());
      i.push([
        e.id,
        "\n.base-dropdown-divider[data-v-de3a9890] {\n\twidth: 100%;\n\theight: 0.0625rem;\n\topacity: var(--opacity-stop-2);\n\tmargin: 0.25rem 0;\n\tbackground-color: var(--color-text);\n}\n",
        ""
      ]);
      const o = i;
    },
    46772: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var a = r(8081),
        d = r.n(a),
        s = r(23645),
        i = r.n(s)()(d());
      i.push([
        e.id,
        "\n/* stylelint-disable */\n.base-item-list[data-v-e3d2f5b2] { display: grid;\n}\n.base-item-list.wrap[data-v-e3d2f5b2] { grid-template-columns: repeat(var(--bbd69304), 1fr); justify-items: center; grid-auto-flow: unset !important;\n}\n.base-item-list.column[data-v-e3d2f5b2] { grid-auto-flow: row;\n}\n.base-item-list.row[data-v-e3d2f5b2] { grid-auto-flow: column;\n}\n",
        ""
      ]);
      const o = i;
    },
    32581: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      const a = (0, r(20144).aZ)({
        name: "DragDrop",
        model: { prop: "order", event: "update:order" },
        props: { order: { type: Array, required: !0 }, tag: { type: String, default: "div" }, useHandles: { type: Boolean, default: !1 } },
        emits: ["update:order", "drag:start", "drag:end"],
        data: () => ({ orderedItems: [], activeOrderedItem: null }),
        computed: {
          disabled() {
            return 0 === this.order.length;
          }
        },
        watch: {
          async order() {
            await this.$nextTick(), this.resetOrder();
          }
        },
        created() {
          this.resetOrder();
        },
        mounted() {
          this.disabled ||
            this.order.length === this.getFilteredNodes().draggable.length ||
            console.error("DRAG-DROP: The number of slots do not match the number of items provided!");
        },
        methods: {
          setNodesDraggable(e) {
            e.forEach((e) => {
              var t, r, a, d, s, i, o;
              e &&
                !1 !== (null === (r = null === (t = e.data) || void 0 === t ? void 0 : t.attrs) || void 0 === r ? void 0 : r.draggable) &&
                (e.data = {
                  ...(null !== (a = e.data) && void 0 !== a ? a : {}),
                  attrs: {
                    ...(null !== (s = null === (d = e.data) || void 0 === d ? void 0 : d.attrs) && void 0 !== s ? s : {}),
                    draggable: !0
                  },
                  style: { "-webkit-touch-callout": "none", "-webkit-user-select": "none" },
                  on: {
                    ...(null !== (o = null === (i = e.data) || void 0 === i ? void 0 : i.on) && void 0 !== o ? o : {}),
                    mousedown: (t) => {
                      if (!this.useHandles) return;
                      const r = this.findDraggableHandle(e);
                      r && r.contains(t.target) && this.setActiveOrderedItem(e.key);
                    },
                    mouseup: () => {
                      this.activeOrderedItem = null;
                    },
                    dragstart: (t) => {
                      var r;
                      this.useHandles && (null === (r = this.activeOrderedItem) || void 0 === r ? void 0 : r.key) !== e.key
                        ? t.preventDefault()
                        : t.dataTransfer &&
                          ((t.dataTransfer.effectAllowed = "move"),
                          (t.dataTransfer.dropEffect = "move"),
                          t.dataTransfer.setData("text/plain", "arbitrary"),
                          (e.elm.style.opacity = "0"),
                          e.elm.classList.add("dragging"),
                          this.useHandles || this.setActiveOrderedItem(e.key),
                          this.$emit("drag:start"));
                    },
                    dragend: () => {
                      (e.elm.style.opacity = ""),
                        e.elm.classList.remove("dragging"),
                        (this.activeOrderedItem = null),
                        this.$emit("drag:end");
                    },
                    dragover: (e) => {
                      e.stopPropagation(), e.preventDefault();
                    },
                    dragenter: () => {
                      "none" === getComputedStyle(e.elm).transform &&
                        this.activeOrderedItem &&
                        this.activeOrderedItem.key !== e.key &&
                        this.moveOrderedItem(this.activeOrderedItem.key, e.key);
                    },
                    drop: (e) => {
                      e.preventDefault();
                      const t = this.orderedItems.map((e) => e.item);
                      this.$emit("update:order", t);
                    }
                  }
                });
            });
          },
          findDraggableHandle: (e) => e.elm.querySelector("[data-drag-drop-handle]"),
          getNodes() {
            var e, t, r;
            return null !== (r = null === (t = (e = this.$scopedSlots).default) || void 0 === t ? void 0 : t.call(e, {})) && void 0 !== r
              ? r
              : [];
          },
          getFilteredNodes() {
            const e = { draggable: [], nonDraggable: [] };
            return (
              this.getNodes().forEach((t, r) => {
                this.isDraggableNode(t) ? e.draggable.push(t) : e.nonDraggable.push({ index: r, node: t });
              }),
              e
            );
          },
          isDraggableNode(e) {
            var t, r;
            return !(
              !this.getNodeTag(e) ||
              !1 === (null === (r = null === (t = e.data) || void 0 === t ? void 0 : t.attrs) || void 0 === r ? void 0 : r.draggable)
            );
          },
          getNodeKey(e) {
            var t, r;
            const a =
              e.key || (null === (r = null === (t = e.asyncMeta) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.key);
            if (
              !(function (e) {
                return ["string", "number", "symbol"].includes(typeof e);
              })(a)
            )
              throw new Error('Keys for Drag and Drop items may not be "false"');
            return a;
          },
          getNodeTag(e) {
            var t;
            const r = e.tag || (null === (t = e.asyncMeta) || void 0 === t ? void 0 : t.tag);
            if ("string" != typeof r && void 0 !== r) throw new Error("tag for node cannot be found");
            return r;
          },
          resetOrder() {
            this.orderedItems = this.getFilteredNodes().draggable.map((e, t) => ({ item: this.order[t], key: this.getNodeKey(e) }));
          },
          setActiveOrderedItem(e) {
            var t;
            this.activeOrderedItem = null !== (t = this.orderedItems.find((t) => t.key === e)) && void 0 !== t ? t : null;
          },
          moveOrderedItem(e, t) {
            const r = this.orderedItems.findIndex((t) => t.key === e),
              a = this.orderedItems.findIndex((e) => e.key === t);
            if (-1 === r || -1 === a) return void console.error("Unable to move items, provided keys do not exist within list");
            const d = [...this.orderedItems],
              s = d.splice(r, 1)[0];
            s && (d.splice(a, 0, s), (this.orderedItems = d));
          },
          getOrderedNodes() {
            if (this.disabled) return this.getNodes();
            const { draggable: e, nonDraggable: t } = this.getFilteredNodes();
            this.setNodesDraggable(e);
            const r = e.reduce((e, t) => ((e[this.getNodeKey(t)] = t), e), {}),
              a = this.orderedItems.map((e) => r[e.key]);
            return (
              t.length &&
                t.forEach(({ node: e, index: t }) => {
                  a.splice(t, 0, e);
                }),
              a
            );
          }
        },
        render(e, t) {
          var r, a;
          return e(
            "transition-group",
            {
              ...(null !== (r = null == t ? void 0 : t.data) && void 0 !== r ? r : {}),
              props: { ...(null !== (a = null == t ? void 0 : t.data.props) && void 0 !== a ? a : {}), tag: this.tag, name: "drag-drop" },
              on: {
                enter: (e) => {
                  e.style.transitionDuration = "0s";
                },
                afterEnter: (e) => {
                  e.style.transitionDuration = "";
                },
                leave: (e) => {
                  e.style.transitionDuration = "0s";
                }
              },
              nativeOn: {
                dragleave: ({ pageX: e, pageY: t }) => {
                  const { left: r, right: a, top: d, bottom: s } = this.$el.getBoundingClientRect();
                  (e > r && e < a && t > d && t < s) || this.resetOrder();
                }
              }
            },
            this.getOrderedNodes()
          );
        }
      });
    },
    33823: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var a = function () {
        var e = this,
          t = e._self._c;
        return t("div", { staticClass: "app-empty" }, [
          t("div", { staticClass: "title" }, [e._v(e._s(e.title))]),
          e._v(" "),
          t("div", { staticClass: "description" }, [e._v(e._s(e.description))]),
          e._v(" "),
          e.buttonText
            ? t(
                "div",
                {
                  staticClass: "button",
                  attrs: { "data-test": e.buttonDataTest },
                  on: {
                    click: function (t) {
                      return e.$emit("buttonClick");
                    }
                  }
                },
                [e._v(e._s(e.buttonText))]
              )
            : e._e()
        ]);
      };
      a._withStripped = !0;
      const d = {
        name: "AppEmpty",
        props: {
          title: { type: String, default: "" },
          description: { type: String, default: "" },
          buttonText: { type: String, default: "" },
          buttonDataTest: { type: String, default: "empty-state-button" }
        }
      };
      r(24592);
      const s = (0, r(51900).Z)(d, a, [], !1, null, "0447c7fa", null).exports;
    },
    58673: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => d });
      var a = function () {
        return (0, this._self._c)("div", { staticClass: "base-dropdown-divider" });
      };
      a._withStripped = !0;
      r(24044);
      const d = (0, r(51900).Z)({ name: "BaseDropdownDivider" }, a, [], !1, null, "de3a9890", null).exports;
    },
    14493: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => c });
      var a = function () {
        var e = this;
        return (0, e._self._c)(
          "drag-drop",
          {
            staticClass: "base-item-list",
            class: [e.direction, { wrap: e.wrap }],
            attrs: { tag: "ul", order: e.order },
            on: {
              "update:order": function (t) {
                return e.$emit("update:order", t);
              }
            }
          },
          [e._t("default")],
          2
        );
      };
      a._withStripped = !0;
      var d = r(55040),
        s = r(32581),
        i = r(42223),
        o = r(20144);
      const n = {
          name: "BaseItemList",
          components: { DragDrop: s.Z },
          mixins: [i.Z],
          model: { prop: "order", event: "update:order" },
          props: {
            order: { type: Array, default: () => [] },
            direction: { type: String, default: d.O.Column, validator: (e) => Object.values(d.O).some((t) => t === e) },
            wrap: { type: Boolean, default: !1 },
            wrapColumnCount: { type: Number, default: d.k }
          }
        },
        l = () => {
          (0, o.sj)((e, t) => ({ bbd69304: e.wrapColumnCount }));
        },
        u = n.setup;
      n.setup = u ? (e, t) => (l(), u(e, t)) : l;
      const g = n;
      r(80724);
      const c = (0, r(51900).Z)(g, a, [], !1, null, "e3d2f5b2", null).exports;
    },
    24592: (e, t, r) => {
      var a = r(99869);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals),
        (0, r(45346).Z)("1951f2b1", a, !1, { ssrId: !0 });
    },
    24044: (e, t, r) => {
      var a = r(67694);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals),
        (0, r(45346).Z)("4171e815", a, !1, { ssrId: !0 });
    },
    80724: (e, t, r) => {
      var a = r(46772);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals),
        (0, r(45346).Z)("4456cc54", a, !1, { ssrId: !0 });
    },
    58858: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNCA0OEMzNy4yNTQ4IDQ4IDQ4IDM3LjI1NDggNDggMjRDNDggMTAuNzQ1MiAzNy4yNTQ4IDAgMjQgMEMxMC43NDUyIDAgMCAxMC43NDUyIDAgMjRDMCAzNy4yNTQ4IDEwLjc0NTIgNDggMjQgNDhaTTE3Ljg3ODcgMTYuMTIxM0wyNS43NTc0IDI0TDE3Ljg3ODcgMzEuODc4N0wyMi4xMjEzIDM2LjEyMTNMMzIuMTIxMyAyNi4xMjEzTDM0LjI0MjYgMjRMMzIuMTIxMyAyMS44Nzg3TDIyLjEyMTMgMTEuODc4N0wxNy44Nzg3IDE2LjEyMTNaIiBmaWxsPSIjOTU5NTk1IiBmaWxsLW9wYWNpdHk9IjAuNzYiLz4KPC9zdmc+";
    }
  }
]);
