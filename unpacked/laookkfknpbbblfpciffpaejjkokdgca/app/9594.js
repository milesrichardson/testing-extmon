(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9594],
  {
    2933: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.slider[data-v-04695413] { --bar-height: 3px; height: 1rem; width: 100%; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0.8;\n}\n.slider[data-v-04695413]:hover, .slider.down[data-v-04695413] { opacity: 1;\n}\n.bar[data-v-04695413] { height: var(--bar-height); width: 100%; position: absolute; background: var(--color-icon); border-radius: var(--bar-height); pointer-events: none;\n}\n.off[data-v-04695413] { opacity: 0.2;\n}\n.on[data-v-04695413] { width: auto; left: 0; opacity: 1; background: var(--color-icon);\n}\n.dial[data-v-04695413] { --size: 11px; height: var(--size); width: var(--size); margin-left: calc(var(--size) / -2); position: absolute; opacity: 0; background: var(--color-icon); border-radius: var(--size); pointer-events: none; transition: opacity 0.1s ease;\n}\n.slider:hover .dial[data-v-04695413], .down .dial[data-v-04695413] { opacity: 1;\n}\n",
        ""
      ]);
      const r = o;
    },
    15415: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.tile[data-v-7c8527fd] { opacity: 0.5; transition: opacity 0.2s var(--a-curve);\n}\n.tile[data-v-7c8527fd]:hover { opacity: 0.75; background: none !important;\n}\n.tile.on[data-v-7c8527fd] { padding: 10px; opacity: 1; transition: opacity 0.2s var(--a-curve);\n}\n.tile-slider[data-v-7c8527fd] { width: 100%; margin-top: -5px; padding: 0 10px; display: flex; align-items: center; justify-content: center; opacity: 0; cursor: pointer; transition: opacity 0.1s var(--a-curve); visibility: hidden;\n}\n.tile-slider.on[data-v-7c8527fd] { opacity: 1; transition: opacity 0.1s var(--a-curve); visibility: inherit;\n}\n.tile-slider[data-v-7c8527fd] .slider { width: 75%;\n}\n",
        ""
      ]);
      const r = o;
    },
    98545: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([t.id, "\n/* stylelint-disable */\n", ""]);
      const r = o;
    },
    76251: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => n });
      var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            ref: "slider",
            staticClass: "slider",
            class: { down: t.mouseButtonIsDown },
            on: {
              mousedown: t.mousedown,
              touchstart: t.touchstart,
              click: function (t) {
                t.stopPropagation();
              }
            }
          },
          [
            e("div", { staticClass: "bar off" }),
            t._v(" "),
            e("div", { staticClass: "bar on", style: { width: t.valuePercent } }),
            t._v(" "),
            e("div", { staticClass: "dial", style: { left: t.valuePercent } })
          ]
        );
      };
      a._withStripped = !0;
      const s = {
        name: "Slider",
        props: {
          value: { type: Number, default: 0 },
          min: { type: Number, default: 0 },
          max: { type: Number, default: 100 },
          interval: { type: Number, default: 1 }
        },
        data: () => ({ mouseButtonIsDown: !1 }),
        computed: {
          valuePercent() {
            return (this.value / this.max) * 100 + "%";
          }
        },
        methods: {
          touchstart(t) {
            (this.mouseButtonIsDown = !0),
              window.addEventListener("touchmove", this.update),
              window.addEventListener("touchend", this.touchend),
              this.update(t);
          },
          touchend() {
            (this.mouseButtonIsDown = !1),
              window.removeEventListener("touchmove", this.update),
              window.removeEventListener("touchend", this.touchend);
          },
          mousedown(t) {
            0 === t.button
              ? ((this.mouseButtonIsDown = !0),
                window.addEventListener("mousemove", this.update),
                window.addEventListener("mouseup", this.mouseup),
                this.update(t))
              : this.mouseup(t);
          },
          mouseup() {
            (this.mouseButtonIsDown = !1),
              window.removeEventListener("mousemove", this.update),
              window.removeEventListener("mouseup", this.mouseup);
          },
          update(t) {
            if (this.mouseButtonIsDown) {
              var e;
              const i = this.$refs.slider.getBoundingClientRect();
              let a = (((t.pageX || t.changedTouches[0].pageX) - i.left) / this.$refs.slider.clientWidth) * this.max;
              a < this.min && (a = this.min), a > this.max && (a = this.max);
              const s = null === (e = String(this.interval).split(".")[1]) || void 0 === e ? void 0 : e.length,
                n = Math.round(a / this.interval) * this.interval;
              (a = Number(n.toFixed(s))), this.$emit("input", a);
            }
          }
        }
      };
      i(84129);
      const n = (0, i(51900).Z)(s, a, [], !1, null, "04695413", null).exports;
    },
    29594: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => v });
      var a = function () {
        var t = this,
          e = t._self._c;
        return e("section", { staticClass: "tracks" }, [
          e(
            "div",
            { staticClass: "tile-list" },
            t._l(t.tracks, function (t, i) {
              return e("audio-track", { key: i, attrs: { track: t } });
            }),
            1
          )
        ]);
      };
      a._withStripped = !0;
      var s = function () {
        var t = this,
          e = t._self._c;
        return e("div", { attrs: { title: t.trackTitle } }, [
          e("div", { staticClass: "tile", class: { on: t.track.active }, on: { click: t.toggleActive } }, [
            e(
              "div",
              { staticClass: "tile-icon-wrapper" },
              [e("inline-svg", { staticClass: "tile-icon feed-icon", class: t.iconName, attrs: { src: t.track.icon } })],
              1
            )
          ]),
          t._v(" "),
          e(
            "div",
            { staticClass: "tile-slider", class: { on: t.track.active }, attrs: { title: t.trackVolumeTitle } },
            [
              e("slider", {
                on: { input: t.sendVolumeChangeEventOnInput },
                model: {
                  value: t.track.volume,
                  callback: function (e) {
                    t.$set(t.track, "volume", e);
                  },
                  expression: "track.volume"
                }
              })
            ],
            1
          )
        ]);
      };
      s._withStripped = !0;
      var n = i(76251),
        o = i(18856),
        r = i(16730);
      const c = new (i(81405).ZP)({ feature: "soundscapes", is_paid_event: !0 }),
        l = {
          name: "Track",
          components: { Slider: n.Z },
          props: { track: { type: Object, required: !0 } },
          computed: {
            finalVolume() {
              return this.track.active ? this.track.volume * r.Z.globalVolume * 0.01 : 0;
            },
            iconName() {
              return "icon-" + this.track.name.replace(/\s+/g, "-").toLowerCase();
            },
            trackTitle() {
              return `Turn ${this.track.active ? "off" : "on"} ${this.track.name}`;
            },
            trackVolumeTitle() {
              return `${this.track.name} volume: ${this.track.volume}`;
            }
          },
          watch: {
            track() {
              r.Z.tracks[this.track.name] || this.captureVolumeInState();
            },
            "track.volume"() {
              r.Z.tracks[this.track.name].volume = this.track.volume;
            },
            finalVolume: {
              handler() {
                r.Z.globalPlaying &&
                  (clearTimeout(this.finalVolumeTimeout),
                  (this.finalVolumeTimeout = setTimeout(() => {
                    o.Z.fadeTrack(this.finalVolume, this.track);
                  }, 50)));
              },
              immediate: !0
            }
          },
          created() {
            this.captureVolumeInState();
          },
          methods: {
            toggleActive() {
              this.track.volume || this.$set(this.track, "volume", m.utils.getRandomIntBetween(15, 85)),
                (this.track.active = !this.track.active),
                c.capture("track " + (this.track.active ? "enable" : "disable"), { track: this.track.name.toLowerCase() }),
                this.track.active && (r.Z.globalPlaying = !0);
            },
            captureVolumeInState() {
              const t = this.track.volume;
              r.Z.tracks[this.track.name] = { volume: t, originalVolume: t };
            },
            sendVolumeChangeEventOnInput() {
              clearTimeout(this.trackVolumeInstrumentationTimeout),
                (this.trackVolumeInstrumentationTimeout = setTimeout(() => {
                  c.capture("track volume change", { track: this.track.name.toLowerCase() });
                }, 1e3));
            }
          }
        };
      i(73590);
      var u = i(51900);
      const d = {
        name: "Tracks",
        components: { AudioTrack: (0, u.Z)(l, s, [], !1, null, "7c8527fd", null).exports },
        props: { tracks: { type: Array, required: !0 } }
      };
      i(60161);
      const v = (0, u.Z)(d, a, [], !1, null, "6df9af1e", null).exports;
    },
    84129: (t, e, i) => {
      var a = i(2933);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("df5b9728", a, !1, { ssrId: !0 });
    },
    73590: (t, e, i) => {
      var a = i(15415);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("3772a4a8", a, !1, { ssrId: !0 });
    },
    60161: (t, e, i) => {
      var a = i(98545);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("577f14e4", a, !1, { ssrId: !0 });
    }
  }
]);
