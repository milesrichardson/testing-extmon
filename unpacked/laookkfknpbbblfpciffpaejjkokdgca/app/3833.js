(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3833],
  {
    72678: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => d });
      var a = i(8081),
        s = i.n(a),
        o = i(23645),
        n = i.n(o)()(s());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.app[data-v-4ed90ddc] { --top: auto; --bottom: auto; --right: auto; --left: auto; height: auto; min-height: auto; width: var(--width); max-width: calc(100vw - (var(--app-edge-padding) * 2)); position: absolute; top: var(--top); bottom: var(--bottom); right: var(--right); left: var(--left); display: flex; flex-direction: column; align-items: stretch; background-color: var(--color-bg); border-radius: var(--border-radius); transition: top 0.2s ease, right 0.2s ease;\n}\n.app.focused[data-v-4ed90ddc] { z-index: 4;\n}\n.nipple-top-left[data-v-4ed90ddc]:after, .nipple-bottom-left[data-v-4ed90ddc]:after { left: var(--nipple-displacement);\n}\n.nipple-top-right[data-v-4ed90ddc]:after, .nipple-bottom-right[data-v-4ed90ddc]:after { right: var(--nipple-displacement);\n}\n\t/* This needs to be in this component (or general stylesheet) or else the transition won't work when the component is async. I don't know why. */\n.slide-down-fade-enter-active[data-v-4ed90ddc], .slide-down-fade-leave-active[data-v-4ed90ddc] { transition: transform 0.2s ease, opacity, 0.2s ease, right 0s, top 0s;\n} /* right 0s, top 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.slide-down-fade-enter[data-v-4ed90ddc], .slide-down-fade-leave-to[data-v-4ed90ddc] { opacity: 0; transform: translateY(-3px);\n}\n@media screen and (max-width: 450px) {\n.app[data-v-4ed90ddc] { height: var(--app-max-height); position: fixed !important;\n}\n.top-row .app[data-v-4ed90ddc] { top: var(--app-edge-padding) !important;\n}\n.bottom-row .app[data-v-4ed90ddc] { bottom: var(--app-edge-padding) !important;\n}\n.top-left .app[data-v-4ed90ddc], .bottom-left .app[data-v-4ed90ddc] { left: var(--app-edge-padding) !important;\n}\n.top-right .app[data-v-4ed90ddc], .bottom-right .app[data-v-4ed90ddc] { right: var(--app-edge-padding) !important;\n}\n.app.slide-down-fade-enter-active[data-v-4ed90ddc], .app.slide-down-fade-leave-active[data-v-4ed90ddc] { transition: transform 0.2s ease, opacity, 0.2s ease, right 0s, top 0s;\n} /* right 0s, top 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.app.slide-down-fade-enter[data-v-4ed90ddc], .app.slide-down-fade-leave-to[data-v-4ed90ddc] { opacity: 0; transform: translateY(calc(var(--app-translate-amount) * -1));\n}\n}\n\n",
        ""
      ]);
      const d = n;
    },
    26048: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => d });
      var a = function () {
        var t = this;
        return (0, t._self._c)(
          "div",
          {
            directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.onClickOutside, expression: "onClickOutside" }],
            ref: "app",
            staticClass: "app popup nipple",
            class: [{ focused: t.focused }, "display-" + t.positionArray[0], "display-" + t.positionArray[1], t.nippleClass],
            style: [{ "--width": t.width + "px", "--nipple-displacement": t.shiftedNippleDisplacement + "px" }, t.positionCss],
            attrs: { "data-test": "app-popup" }
          },
          [t._t("default")],
          2
        );
      };
      a._withStripped = !0;
      var s = i(40063),
        o = i(65550);
      const n = {
        name: "AppPopup",
        doNotWaitForMount: !0,
        directives: { clickOutside: s.Z },
        unreactive: () => ({ halfNippleWidth: m.constants.nippleWidthPx / 2 }),
        props: {
          nippleDisplacement: { type: Number, default: m.constants.nippleDisplacementPx },
          width: { type: Number, default: 300 },
          viewManager: { type: Object, default: null },
          position: { type: String, required: !0 },
          detailedPosition: { type: Object, default: null },
          region: { type: [String, Array], required: !0 },
          focused: { type: Boolean, default: !1 }
        },
        data: () => ({ flipHorizontalPosition: !1, shiftByPx: 0 }),
        computed: {
          positionArray() {
            const t = this.position.split("-");
            return this.flipHorizontalPosition && (t[1] = m.utils.getOppositePosition(t[1])), t;
          },
          nippleClass() {
            return ["nipple"].concat(this.positionArray.map(m.utils.getOppositePosition)).join("-");
          },
          positionCss() {
            const t = this.detailedPosition || {
              [m.utils.getOppositePosition(this.positionArray[0])]: "100%",
              [m.utils.getOppositePosition(this.positionArray[1])]: "50%"
            };
            return Object.entries(t).reduce(
              (t, [e, i]) => (
                ["left", "right"].includes(e) &&
                  ("number" == typeof i
                    ? (i = i - (this.flipHorizontalPosition ? this.width - 2 * this.nippleDisplacement : 0) - this.shiftByPx)
                    : "string" == typeof i && (i = `calc(${i} - ${this.nippleDisplacement - this.shiftByPx}px)`)),
                (t["--" + e] = "number" == typeof i ? i + "px" : i),
                t
              ),
              {}
            );
          },
          shiftedNippleDisplacement() {
            return this.nippleDisplacement - this.halfNippleWidth - this.shiftByPx;
          }
        },
        mounted() {
          (this.flipHorizontalPosition = this.shouldFlipHorizontalPosition()),
            this.$nextTick(() => (this.shiftByPx = this.getShiftPx())),
            this.hideOverlappingWidgets();
        },
        created() {
          o.Z.registerEventListener("closeApp", "keyup", 27, this.close), window.addEventListener("resize", this.onWindowResize);
        },
        destroyed() {
          o.Z.removeEventListener("closeApp", "keyup", 27),
            window.removeEventListener("resize", this.onWindowResize),
            m.widgetManager.refocusOverlap(this.region);
        },
        methods: {
          onClickOutside(t) {
            this.viewManager
              ? this.viewManager.awaitCloseConfirmationIfNeeded().then(() => this.$emit("clickOutside", t))
              : this.$emit("close");
          },
          onWindowResize() {
            (this.disableSmoothReflow = !0),
              clearTimeout(this.debouceResize),
              (this.debouceResize = setTimeout(() => {
                this.disableSmoothReflow = !1;
              }, 500));
          },
          shouldFlipHorizontalPosition() {
            const t = this.$refs.app && this.$refs.app.getBoundingClientRect();
            return !!t && t.left < 0;
          },
          getShiftPx() {
            const t = this.$refs.app && this.$refs.app.getBoundingClientRect();
            return t
              ? "left" === this.positionArray[1]
                ? Math.max(t.right - (window.innerWidth - m.constants.dashboardSidePaddingPx), 0)
                : Math.max(-1 * (t.left - m.constants.dashboardSidePaddingPx), 0)
              : 0;
          },
          close() {
            this.$emit("close");
          },
          hideOverlappingWidgets() {
            var t, e;
            let i =
              (null === (t = this.$refs.view) || void 0 === t ? void 0 : t.scrollHeight) ||
              (null === (e = this.$refs.loading) || void 0 === e ? void 0 : e.scrollHeight);
            i && m.widgetManager.unfocusOverlap(this.region, i);
          }
        }
      };
      i(29177);
      const d = (0, i(51900).Z)(n, a, [], !1, null, "4ed90ddc", null).exports;
    },
    29177: (t, e, i) => {
      var a = i(72678);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("0e27eebd", a, !1, { ssrId: !0 });
    }
  }
]);
