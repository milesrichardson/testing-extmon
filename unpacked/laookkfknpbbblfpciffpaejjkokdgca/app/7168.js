(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7168],
  {
    18840: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var i = a(8081),
        s = a.n(i),
        n = a(23645),
        o = a.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.slider[data-v-04695413] { --bar-height: 3px; height: 1rem; width: 100%; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0.8;\n}\n.slider[data-v-04695413]:hover, .slider.down[data-v-04695413] { opacity: 1;\n}\n.bar[data-v-04695413] { height: var(--bar-height); width: 100%; position: absolute; background: var(--color-icon); border-radius: var(--bar-height); pointer-events: none;\n}\n.off[data-v-04695413] { opacity: 0.2;\n}\n.on[data-v-04695413] { width: auto; left: 0; opacity: 1; background: var(--color-icon);\n}\n.dial[data-v-04695413] { --size: 11px; height: var(--size); width: var(--size); margin-left: calc(var(--size) / -2); position: absolute; opacity: 0; background: var(--color-icon); border-radius: var(--size); pointer-events: none; transition: opacity 0.1s ease;\n}\n.slider:hover .dial[data-v-04695413], .down .dial[data-v-04695413] { opacity: 1;\n}\n",
        ""
      ]);
      const r = o;
    },
    38588: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var i = a(8081),
        s = a.n(i),
        n = a(23645),
        o = a.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.tile[data-v-61f9ae56] { opacity: 0.5; transition: opacity 0.2s var(--a-curve);\n}\n.tile[data-v-61f9ae56]:hover { opacity: 0.75; background: none !important;\n}\n.tile.on[data-v-61f9ae56] { padding: 10px; opacity: 1; transition: opacity 0.2s var(--a-curve);\n}\n.tile-slider[data-v-61f9ae56] { width: 100%; margin-top: -5px; padding: 0 10px; display: flex; align-items: center; justify-content: center; opacity: 0; cursor: pointer; transition: opacity 0.1s var(--a-curve); visibility: hidden;\n}\n.tile-slider.on[data-v-61f9ae56] { opacity: 1; transition: opacity 0.1s var(--a-curve); visibility: inherit;\n}\n.tile-slider[data-v-61f9ae56] .slider { width: 75%;\n}\n",
        ""
      ]);
      const r = o;
    },
    16785: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var i = a(8081),
        s = a.n(i),
        n = a(23645),
        o = a.n(n)()(s());
      o.push([t.id, "\n/* stylelint-disable */\n", ""]);
      const r = o;
    },
    10047: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => n });
      var i = function () {
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
      i._withStripped = !0;
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
              const a = this.$refs.slider.getBoundingClientRect();
              let i = (((t.pageX || t.changedTouches[0].pageX) - a.left) / this.$refs.slider.clientWidth) * this.max;
              i < this.min && (i = this.min), i > this.max && (i = this.max);
              const s = null === (e = String(this.interval).split(".")[1]) || void 0 === e ? void 0 : e.length,
                n = Math.round(i / this.interval) * this.interval;
              (i = Number(n.toFixed(s))), this.$emit("input", i);
            }
          }
        }
      };
      a(84385);
      const n = (0, a(51900).Z)(s, i, [], !1, null, "04695413", null).exports;
    },
    87168: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => v });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e("section", { staticClass: "tracks" }, [
          e(
            "div",
            { staticClass: "tile-list" },
            t._l(t.tracks, function (t, a) {
              return e("audio-track", { key: a, attrs: { track: t } });
            }),
            1
          )
        ]);
      };
      i._withStripped = !0;
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
      var n = a(10047),
        o = a(18856),
        r = a(16730);
      const l = new (a(81405).ZP)({ feature: "soundscapes", is_paid_event: !0 }),
        c = {
          name: "AudioTrack",
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
                l.capture("track " + (this.track.active ? "enable" : "disable"), { track: this.track.name.toLowerCase() }),
                this.track.active && (r.Z.globalPlaying = !0);
            },
            captureVolumeInState() {
              const t = this.track.volume;
              r.Z.tracks[this.track.name] = { volume: t, originalVolume: t };
            },
            sendVolumeChangeEventOnInput() {
              clearTimeout(this.trackVolumeInstrumentationTimeout),
                (this.trackVolumeInstrumentationTimeout = setTimeout(() => {
                  l.capture("track volume change", { track: this.track.name.toLowerCase() });
                }, 1e3));
            }
          }
        };
      a(98261);
      var u = a(51900);
      const d = {
        name: "Tracks",
        components: { AudioTrack: (0, u.Z)(c, s, [], !1, null, "61f9ae56", null).exports },
        props: { tracks: { type: Array, required: !0 } }
      };
      a(42931);
      const v = (0, u.Z)(d, i, [], !1, null, "6df9af1e", null).exports;
    },
    84385: (t, e, a) => {
      var i = a(18840);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("3be5a72c", i, !1, { ssrId: !0 });
    },
    98261: (t, e, a) => {
      var i = a(38588);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("cb6b490e", i, !1, { ssrId: !0 });
    },
    42931: (t, e, a) => {
      var i = a(16785);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("c31a6100", i, !1, { ssrId: !0 });
    }
  }
]);
