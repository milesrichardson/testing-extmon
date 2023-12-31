(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3509],
  {
    55251: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => i });
      var d = r(8081),
        a = r.n(d),
        o = r(23645),
        s = r.n(o)()(a());
      s.push([
        e.id,
        "\n/* stylelint-disable */\n.base-item-list[data-v-e3d2f5b2] { display: grid;\n}\n.base-item-list.wrap[data-v-e3d2f5b2] { grid-template-columns: repeat(var(--bbd69304), 1fr); justify-items: center; grid-auto-flow: unset !important;\n}\n.base-item-list.column[data-v-e3d2f5b2] { grid-auto-flow: row;\n}\n.base-item-list.row[data-v-e3d2f5b2] { grid-auto-flow: column;\n}\n",
        ""
      ]);
      const i = s;
    },
    32581: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => d });
      const d = (0, r(20144).aZ)({
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
              var t, r, d, a, o, s, i;
              e &&
                !1 !== (null === (r = null === (t = e.data) || void 0 === t ? void 0 : t.attrs) || void 0 === r ? void 0 : r.draggable) &&
                (e.data = {
                  ...(null !== (d = e.data) && void 0 !== d ? d : {}),
                  attrs: {
                    ...(null !== (o = null === (a = e.data) || void 0 === a ? void 0 : a.attrs) && void 0 !== o ? o : {}),
                    draggable: !0
                  },
                  style: { "-webkit-touch-callout": "none", "-webkit-user-select": "none" },
                  on: {
                    ...(null !== (i = null === (s = e.data) || void 0 === s ? void 0 : s.on) && void 0 !== i ? i : {}),
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
            const d =
              e.key || (null === (r = null === (t = e.asyncMeta) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.key);
            if (
              !(function (e) {
                return ["string", "number", "symbol"].includes(typeof e);
              })(d)
            )
              throw new Error('Keys for Drag and Drop items may not be "false"');
            return d;
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
              d = this.orderedItems.findIndex((e) => e.key === t);
            if (-1 === r || -1 === d) return void console.error("Unable to move items, provided keys do not exist within list");
            const a = [...this.orderedItems],
              o = a.splice(r, 1)[0];
            o && (a.splice(d, 0, o), (this.orderedItems = a));
          },
          getOrderedNodes() {
            if (this.disabled) return this.getNodes();
            const { draggable: e, nonDraggable: t } = this.getFilteredNodes();
            this.setNodesDraggable(e);
            const r = e.reduce((e, t) => ((e[this.getNodeKey(t)] = t), e), {}),
              d = this.orderedItems.map((e) => r[e.key]);
            return (
              t.length &&
                t.forEach(({ node: e, index: t }) => {
                  d.splice(t, 0, e);
                }),
              d
            );
          }
        },
        render(e, t) {
          var r, d;
          return e(
            "transition-group",
            {
              ...(null !== (r = null == t ? void 0 : t.data) && void 0 !== r ? r : {}),
              props: { ...(null !== (d = null == t ? void 0 : t.data.props) && void 0 !== d ? d : {}), tag: this.tag, name: "drag-drop" },
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
                  const { left: r, right: d, top: a, bottom: o } = this.$el.getBoundingClientRect();
                  (e > r && e < d && t > a && t < o) || this.resetOrder();
                }
              }
            },
            this.getOrderedNodes()
          );
        }
      });
    },
    73509: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => m });
      var d = function () {
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
      d._withStripped = !0;
      var a = r(55040),
        o = r(32581),
        s = r(42223),
        i = r(20144);
      const n = {
          name: "BaseItemList",
          components: { DragDrop: o.Z },
          mixins: [s.Z],
          model: { prop: "order", event: "update:order" },
          props: {
            order: { type: Array, default: () => [] },
            direction: { type: String, default: a.O.Column, validator: (e) => Object.values(a.O).some((t) => t === e) },
            wrap: { type: Boolean, default: !1 },
            wrapColumnCount: { type: Number, default: a.k }
          }
        },
        l = () => {
          (0, i.sj)((e, t) => ({ bbd69304: e.wrapColumnCount }));
        },
        u = n.setup;
      n.setup = u ? (e, t) => (l(), u(e, t)) : l;
      const g = n;
      r(10205);
      const m = (0, r(51900).Z)(g, d, [], !1, null, "e3d2f5b2", null).exports;
    },
    10205: (e, t, r) => {
      var d = r(55251);
      d.__esModule && (d = d.default),
        "string" == typeof d && (d = [[e.id, d, ""]]),
        d.locals && (e.exports = d.locals),
        (0, r(45346).Z)("9911c720", d, !1, { ssrId: !0 });
    }
  }
]);
