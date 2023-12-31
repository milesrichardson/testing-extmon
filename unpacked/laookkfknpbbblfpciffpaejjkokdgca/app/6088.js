(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6088],
  {
    93463: (a, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => r });
      var e = s(8081),
        i = s.n(e),
        n = s(23645),
        o = s.n(n)()(i());
      o.push([
        a.id,
        "\n/* stylelint-disable */\n.play[data-v-a907a72c] { --size: 30px; height: var(--size); width: var(--size); padding: 0; position: relative; display: flex; align-items: center; justify-content: center; border-radius: var(--size); cursor: pointer; transition: 0.1s ease;\n}\n.play[data-v-a907a72c]:hover { transform: scale(1.1);\n}\n.play[data-v-a907a72c]:hover:active { transform: scale(1); transition-duration: 0s;\n}\n.play[data-v-a907a72c]:before { --a: var(--opacity-stop-2); position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: hsla(var(--color-base) / var(--a)); border-radius: var(--size); content: ''; transform: scale(1);\n}\n.play[data-v-a907a72c]:hover:before { --a: var(--opacity-stop-3);\n}\n.play[data-v-a907a72c]:hover:active:before { --a: var(--opacity-stop-2);\n}\n.icon-play[data-v-a907a72c], .icon-pause[data-v-a907a72c] { opacity: 1 !important;\n}\n.app-dash .play[data-v-a907a72c] { --size: 26px; margin-left: 8px;\n}\n.app-dash .play[data-v-a907a72c]:hover { transform: scale(1);\n}\n.app-dash .icon[data-v-a907a72c] { height: 10px; transform: translate3d(0,0,0);\n}\n",
        ""
      ]);
      const r = o;
    },
    76088: (a, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => r });
      var e = function () {
        var a = this,
          t = a._self._c;
        return t(
          "span",
          {
            staticClass: "play control",
            attrs: { title: a.playing ? "Pause" : "Play" },
            on: {
              click: function (t) {
                return t.stopPropagation(), a.toggleMasterPlayPause.apply(null, arguments);
              }
            }
          },
          [
            a.playing
              ? t("inline-svg", { staticClass: "icon icon-pause", attrs: { src: s(22673) } })
              : t("inline-svg", { staticClass: "icon icon-play", attrs: { src: s(60786) } })
          ],
          1
        );
      };
      e._withStripped = !0;
      var i = s(16730);
      const n = new (s(81405).ZP)({ feature: "soundscapes", is_paid_event: !0 }),
        o = {
          name: "PlayButton",
          props: { location: { type: String, default: "app" } },
          computed: { playing: () => i.Z.globalPlaying },
          methods: {
            toggleMasterPlayPause() {
              (i.Z.globalPlaying = !i.Z.globalPlaying), n.capture("play toggle", { method: `${this.location} click` });
            }
          }
        };
      s(91909);
      const r = (0, s(51900).Z)(o, e, [], !1, null, "a907a72c", null).exports;
    },
    91909: (a, t, s) => {
      var e = s(93463);
      e.__esModule && (e = e.default),
        "string" == typeof e && (e = [[a.id, e, ""]]),
        e.locals && (a.exports = e.locals),
        (0, s(45346).Z)("ff1edb98", e, !1, { ssrId: !0 });
    },
    22673: (a) => {
      "use strict";
      a.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ny42MDcgNDcuNjA3Ij48cGF0aCBkPSJNMTcuOTkxIDQwLjk3NmE2LjYzMSA2LjYzMSAwIDAgMS0xMy4yNjIgMFY2LjYzMWE2LjYzMSA2LjYzMSAwIDAgMSAxMy4yNjIgMHYzNC4zNDV6TTQyLjg3NyA0MC45NzZhNi42MzEgNi42MzEgMCAwIDEtMTMuMjYyIDBWNi42MzFhNi42MzEgNi42MzEgMCAwIDEgMTMuMjYyIDB2MzQuMzQ1eiIgLz48L3N2Zz4K";
    },
    60786: (a) => {
      "use strict";
      a.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQuNTEyIDEyNC41MTIiPjxwYXRoIGQ9Ik0xMTMuOTU2IDU3LjAwNmwtOTcuNC01Ni4yYy00LTIuMy05IC42LTkgNS4ydjExMi41YzAgNC42IDUgNy41IDkgNS4ybDk3LjQtNTYuMmM0LTIuNDAxIDQtOC4yIDAtMTAuNXoiPjwvcGF0aD48L3N2Zz4K";
    }
  }
]);
