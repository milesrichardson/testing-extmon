(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [5926, 9718],
  {
    65550: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = new (i(20144).ZP.extend({
        name: "GlobalKeyEventManager",
        data: () => ({ events: {} }),
        methods: {
          registerEventListener(e, t, i, s) {
            Object.prototype.hasOwnProperty.call(this.events, t)
              ? Object.prototype.hasOwnProperty.call(this.events[t], i) || (this.events[t][i] = [])
              : ((this.events[t] = {}), (this.events[t][i] = []), this._addListener(t)),
              this.events[t][i].push({ id: e, handler: s });
          },
          removeEventListener(e, t, i) {
            if (!Object.prototype.hasOwnProperty.call(this.events, t))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with event type: ${t} to remove`));
            if (!Object.prototype.hasOwnProperty.call(this.events[t], i))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with keyCode: ${i} to remove`));
            let s = this.events[t][i].findIndex((t) => t.id === e);
            -1 !== s
              ? (this.events[t][i].splice(s, 1), this._cleanupIfEmpty(t, i))
              : m.utils.isDev() && console.warn(`No event listeners registered with id: ${e} to remove`);
          },
          _cleanupIfEmpty(e, t) {
            this.events[e][t].length || delete this.events[e][t],
              Object.keys(this.events[e]).length || (delete this.events[e], this._removeListener(e));
          },
          _addListener(e) {
            window.addEventListener(e, this._eventRouter);
          },
          _removeListener(e) {
            window.removeEventListener(e, this._eventRouter);
          },
          _eventRouter(e) {
            if (m.tourActive) return;
            if (!Object.prototype.hasOwnProperty.call(this.events, e.type)) return;
            if (!Object.prototype.hasOwnProperty.call(this.events[e.type], e.keyCode)) return;
            let t = this.events[e.type][e.keyCode];
            t[t.length - 1].handler(e);
          }
        }
      }))();
    },
    17443: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => d });
      var s = i(8081),
        n = i.n(s),
        o = i(23645),
        a = i.n(o)()(n());
      a.push([
        e.id,
        "\n/* stylelint-disable */\n.app[data-v-4ed90ddc] { --top: auto; --bottom: auto; --right: auto; --left: auto; height: auto; min-height: auto; width: var(--width); max-width: calc(100vw - (var(--app-edge-padding) * 2)); position: absolute; top: var(--top); bottom: var(--bottom); right: var(--right); left: var(--left); display: flex; flex-direction: column; align-items: stretch; background-color: var(--color-bg); border-radius: var(--border-radius); transition: top 0.2s ease, right 0.2s ease;\n}\n.app.focused[data-v-4ed90ddc] { z-index: 4;\n}\n.nipple-top-left[data-v-4ed90ddc]:after, .nipple-bottom-left[data-v-4ed90ddc]:after { left: var(--nipple-displacement);\n}\n.nipple-top-right[data-v-4ed90ddc]:after, .nipple-bottom-right[data-v-4ed90ddc]:after { right: var(--nipple-displacement);\n}\n\t/* This needs to be in this component (or general stylesheet) or else the transition won't work when the component is async. I don't know why. */\n.slide-down-fade-enter-active[data-v-4ed90ddc], .slide-down-fade-leave-active[data-v-4ed90ddc] { transition: transform 0.2s ease, opacity, 0.2s ease, right 0s, top 0s;\n} /* right 0s, top 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.slide-down-fade-enter[data-v-4ed90ddc], .slide-down-fade-leave-to[data-v-4ed90ddc] { opacity: 0; transform: translateY(-3px);\n}\n@media screen and (max-width: 450px) {\n.app[data-v-4ed90ddc] { height: var(--app-max-height); position: fixed !important;\n}\n.top-row .app[data-v-4ed90ddc] { top: var(--app-edge-padding) !important;\n}\n.bottom-row .app[data-v-4ed90ddc] { bottom: var(--app-edge-padding) !important;\n}\n.top-left .app[data-v-4ed90ddc], .bottom-left .app[data-v-4ed90ddc] { left: var(--app-edge-padding) !important;\n}\n.top-right .app[data-v-4ed90ddc], .bottom-right .app[data-v-4ed90ddc] { right: var(--app-edge-padding) !important;\n}\n.app.slide-down-fade-enter-active[data-v-4ed90ddc], .app.slide-down-fade-leave-active[data-v-4ed90ddc] { transition: transform 0.2s ease, opacity, 0.2s ease, right 0s, top 0s;\n} /* right 0s, top 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.app.slide-down-fade-enter[data-v-4ed90ddc], .app.slide-down-fade-leave-to[data-v-4ed90ddc] { opacity: 0; transform: translateY(calc(var(--app-translate-amount) * -1));\n}\n}\n\n",
        ""
      ]);
      const d = a;
    },
    35926: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => d });
      var s = function () {
        var e = this;
        return (0, e._self._c)(
          "div",
          {
            directives: [{ name: "click-outside", rawName: "v-click-outside", value: e.onClickOutside, expression: "onClickOutside" }],
            ref: "app",
            staticClass: "app popup nipple",
            class: [{ focused: e.focused }, "display-" + e.positionArray[0], "display-" + e.positionArray[1], e.nippleClass],
            style: [{ "--width": e.width + "px", "--nipple-displacement": e.shiftedNippleDisplacement + "px" }, e.positionCss],
            attrs: { "data-test": "app-popup" }
          },
          [e._t("default")],
          2
        );
      };
      s._withStripped = !0;
      var n = i(40063),
        o = i(65550);
      const a = {
        name: "AppPopup",
        doNotWaitForMount: !0,
        directives: { clickOutside: n.Z },
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
            const e = this.position.split("-");
            return this.flipHorizontalPosition && (e[1] = m.utils.getOppositePosition(e[1])), e;
          },
          nippleClass() {
            return ["nipple"].concat(this.positionArray.map(m.utils.getOppositePosition)).join("-");
          },
          positionCss() {
            const e = this.detailedPosition || {
              [m.utils.getOppositePosition(this.positionArray[0])]: "100%",
              [m.utils.getOppositePosition(this.positionArray[1])]: "50%"
            };
            return Object.entries(e).reduce(
              (e, [t, i]) => (
                ["left", "right"].includes(t) &&
                  ("number" == typeof i
                    ? (i = i - (this.flipHorizontalPosition ? this.width - 2 * this.nippleDisplacement : 0) - this.shiftByPx)
                    : "string" == typeof i && (i = `calc(${i} - ${this.nippleDisplacement - this.shiftByPx}px)`)),
                (e["--" + t] = "number" == typeof i ? i + "px" : i),
                e
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
          onClickOutside(e) {
            this.viewManager
              ? this.viewManager.awaitCloseConfirmationIfNeeded().then(() => this.$emit("clickOutside", e))
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
            const e = this.$refs.app && this.$refs.app.getBoundingClientRect();
            return !!e && e.left < 0;
          },
          getShiftPx() {
            const e = this.$refs.app && this.$refs.app.getBoundingClientRect();
            return e
              ? "left" === this.positionArray[1]
                ? Math.max(e.right - (window.innerWidth - m.constants.dashboardSidePaddingPx), 0)
                : Math.max(-1 * (e.left - m.constants.dashboardSidePaddingPx), 0)
              : 0;
          },
          close() {
            this.$emit("close");
          },
          hideOverlappingWidgets() {
            var e, t;
            let i =
              (null === (e = this.$refs.view) || void 0 === e ? void 0 : e.scrollHeight) ||
              (null === (t = this.$refs.loading) || void 0 === t ? void 0 : t.scrollHeight);
            i && m.widgetManager.unfocusOverlap(this.region, i);
          }
        }
      };
      i(71211);
      const d = (0, i(51900).Z)(a, s, [], !1, null, "4ed90ddc", null).exports;
    },
    71211: (e, t, i) => {
      var s = i(17443);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, i(45346).Z)("ecc5b37e", s, !1, { ssrId: !0 });
    }
  }
]);
