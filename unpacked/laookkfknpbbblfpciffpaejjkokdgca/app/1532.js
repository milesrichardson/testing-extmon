(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1532, 8622],
  {
    40063: (t, a, e) => {
      "use strict";
      e.d(a, { Z: () => i });
      let n = {};
      const i = {
        bind: function (t, a) {
          let e, i;
          (t.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const o = (t) => {
              (i = !1), ((t) => t && t.clientX > window.innerWidth)(t) ? (i = !0) : (e = t.target);
            },
            d = (n) => {
              i ||
                ((a.modifiers.bubble ||
                  (!t.contains(e) &&
                    !t.contains(n.target) &&
                    t !== e &&
                    t !== n.target &&
                    "true" !== t.dataset.justBoundClickOutsideHandler)) &&
                  a.value(n));
            };
          (t.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (t.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (n[t.dataset.clickOutsideMouseupHandlerId] = d),
            (n[t.dataset.clickOutsideMousedownHandlerId] = o),
            document.addEventListener("mouseup", d),
            document.addEventListener("mousedown", o);
        },
        unbind: function (t) {
          var a, e;
          null !== (a = t.dataset) &&
            void 0 !== a &&
            a.clickOutsideMouseupHandlerId &&
            null !== (e = t.dataset) &&
            void 0 !== e &&
            e.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", n[t.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", n[t.dataset.clickOutsideMousedownHandlerId]),
            delete n[t.dataset.clickOutsideMouseupHandlerId],
            delete n[t.dataset.clickOutsideMousedownHandlerId],
            delete t.dataset.clickOutsideMouseupHandlerId,
            delete t.dataset.clickOutsideMousedownHandlerId,
            delete t.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    70775: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => s });
      var n = e(8081),
        i = e.n(n),
        o = e(23645),
        d = e.n(o)()(i());
      d.push([
        t.id,
        "\n/* stylelint-disable */\n.container[data-v-f5576a50] { --icon-padding: 11px; margin-right: 20px; position: relative; z-index: 1; display: flex; align-items: center;\n}\n[data-v-f5576a50] .icon { --icon-size: 24px; padding: var(--icon-padding); box-sizing: content-box; cursor: pointer; vertical-align: top;\n}\n.icon-toggle[data-v-f5576a50] { --icon-size: 22px; --icon-padding: 12px;\n}\n.dash-icon-wrapper[data-v-f5576a50] { padding: 0; vertical-align: top;\n}\n.dash-icon-wrapper[data-v-f5576a50]:after { --icon-wrapper-size: 46px;\n}\n.dash-icon[data-v-f5576a50] { opacity: 0;\n}\n.dash-icon[data-v-f5576a50]:hover { opacity: 1;\n}\n\n\t/* Ensure the negative side margin matches the nav-item first/last child padding */\n.nav[data-v-f5576a50] { margin: 0 -2px; position: absolute; top: 0; right: 0; background: var(--color-bg); border-radius: 100px;\n}\n.open-to-right .nav[data-v-f5576a50] { right: auto; left: 0;\n}\n.open-enter-active[data-v-f5576a50], .open-leave-active[data-v-f5576a50] { transition: opacity 0.1s ease;\n}\n.open-enter[data-v-f5576a50], .open-leave-to[data-v-f5576a50] { opacity: 0;\n}\n@media screen and (max-width: 450px) {\n.container[data-v-f5576a50] { --icon-size: 22px;\n}\n.icon[data-v-f5576a50] { padding-right: 10px;\n}\n}\n",
        ""
      ]);
      const s = d;
    },
    83891: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => s });
      var n = e(8081),
        i = e.n(n),
        o = e(23645),
        d = e.n(o)()(i());
      d.push([
        t.id,
        "\n/* stylelint-disable */\n.nav[data-v-0876512d] { display: flex;\n}\n.nav-item[data-v-0876512d] { position: relative; display: flex; align-items: center;\n}\n.nav-item .icon[data-v-0876512d] { padding: var(--icon-padding) calc(var(--icon-padding) - 4px); opacity: 0.5; color: var(--color-text);\n}\n.nav-item:first-child .icon[data-v-0876512d] { padding-left: calc(var(--icon-padding) + 2px);\n}\n.nav-item:last-child .icon[data-v-0876512d] { padding-right: calc(var(--icon-padding) + 2px);\n}\n.nav-item:hover .icon[data-v-0876512d] { opacity: 0.8;\n}\n.nav-item:hover:active .icon[data-v-0876512d], .nav-item.active .icon[data-v-0876512d] { opacity: 1 !important;\n}\n.nav-title[data-v-0876512d] { display: none;\n}\n.tooltip[data-v-0876512d] { padding: 3px 5px; position: absolute; top: calc(100% + 2px); left: 50%; z-index: 1; display: none; background: hsla(0deg 0% 15% / 95%); border-radius: 4px; color: white; font-size: 0.8125rem; transform: translateX(-50%); white-space: nowrap;\n}\n.nav-item:hover .tooltip[data-v-0876512d] { display: block;\n}\n.tooltip .badge[data-v-0876512d] { background: rgba(255 255 255 / 20%); color: white;\n}\n\n\t/* Mobile */\n.toast .nav[data-v-0876512d] { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-column-gap: 10px;\n}\n.toast .nav-item[data-v-0876512d] { padding: 7px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 6px; box-shadow: inset 0 0 0 1.5px var(--border-color); font-size: 12px;\n}\n.toast .nav-icon[data-v-0876512d] { --size: 22px; height: var(--size); width: var(--size); margin: 3px 0; opacity: 0.5; border-radius: 4px;\n}\n.toast .nav-title[data-v-0876512d] { margin: 1px 0 -1px; display: block; opacity: 0.7; line-height: 1.2;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.toast .tooltip[data-v-0876512d] { display: none;\n}\n.toast .nav-item.active[data-v-0876512d], .toast .nav-item[data-v-0876512d]:active { background: var(--border-color); box-shadow: none;\n}\n.toast .nav-item.active .nav-icon[data-v-0876512d], .toast .nav-item.active .nav-title[data-v-0876512d] { opacity: 1;\n}\n\n",
        ""
      ]);
      const s = d;
    },
    1532: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => c });
      var n = function () {
        var t = this,
          a = t._self._c;
        return a(
          "div",
          {
            directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.close, expression: "close" }],
            staticClass: "container",
            class: { "open-to-right": t.openToRight },
            attrs: { "data-test": `${t.region}-nav` }
          },
          [
            a(
              "div",
              {
                staticClass: "icon-wrapper dash-icon-wrapper",
                attrs: { "data-test": `open-${t.region}-nav`, "data-ob": `${t.region}-nav` },
                on: { click: t.openNav }
              },
              [a("inline-svg", { staticClass: "dash-icon icon icon-toggle", attrs: { src: e(37178) }, on: { loaded: t.onSvgLoad } })],
              1
            ),
            t._v(" "),
            a(
              "transition",
              { attrs: { name: "open" } },
              [
                t.open
                  ? a(
                      "quick-nav-options-list",
                      t._b(
                        { ref: "options", on: { iconsLoaded: t.onOptionsIconsLoad, "switch-to": t.switchTo } },
                        "quick-nav-options-list",
                        t.$props,
                        !1
                      )
                    )
                  : t._e()
              ],
              1
            )
          ],
          1
        );
      };
      n._withStripped = !0;
      var i = e(40063),
        o = e(88622),
        d = e(42223);
      const s = {
        name: "QuickNav",
        directives: { ClickOutside: i.Z },
        components: { QuickNavOptionsList: o.default },
        mixins: [d.Z],
        props: {
          active: { type: String, default: "" },
          options: { type: Object, default: () => {} },
          region: { type: String, default: "" }
        },
        data: () => ({ open: !1, openToRight: !1, dropdownActive: !1 }),
        created() {
          m.on("globalEvent:esc", this.close);
        },
        destroyed() {
          m.off("globalEvent:esc", this.close);
        },
        methods: {
          onSvgLoad() {
            m.trigger(this.region + "Nav:loaded");
          },
          openNav() {
            (this.openToRight = !1), (this.open = !0);
          },
          switchTo(t) {
            this.$emit("switch-to", t), this.close();
          },
          close() {
            this.open && (this.open = !1);
          },
          onOptionsIconsLoad() {
            this.$refs.options.$el.getBoundingClientRect().left < 0 && (this.openToRight = !0);
          }
        }
      };
      e(28678);
      const c = (0, e(51900).Z)(s, n, [], !1, null, "f5576a50", null).exports;
    },
    88622: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => d });
      var n = function () {
        var t = this,
          a = t._self._c;
        return a(
          "nav",
          { staticClass: "nav" },
          t._l(t.options, function (e, n) {
            return a(
              "div",
              {
                key: n,
                staticClass: "nav-item",
                class: { active: t.active === n },
                attrs: { "data-test": n + "-opt" },
                on: {
                  click: function (a) {
                    return t.switchTo(n);
                  }
                }
              },
              [
                a("inline-svg", {
                  class: "nav-icon icon icon-" + n,
                  attrs: { src: e.icon },
                  on: {
                    loaded: function (a) {
                      return t.onLoad(n);
                    }
                  }
                }),
                t._v(" "),
                a("div", { staticClass: "nav-title" }, [t._v(t._s(e.name))]),
                t._v(" "),
                a("span", { staticClass: "tooltip" }, [t._v(t._s(e.name))])
              ],
              1
            );
          }),
          0
        );
      };
      n._withStripped = !0;
      var i = e(81405);
      const o = {
        name: "QuickNavOptionsList",
        unreactive: () => ({ iconsLoaded: 0 }),
        props: {
          options: { type: Object, default: () => {} },
          active: { type: String, default: "" },
          region: { type: String, default: "" }
        },
        methods: {
          switchTo(t) {
            const a = this.options[t].upsell;
            !this.$plus && a && m.cmd("modal.open", a, { eventSource: `${this.region} nav` }), this.$emit("switch-to", t);
            const e = this.options[t].feature || t,
              n = this.options[t].eventName || e;
            i.ZP.capture(n + " activate", { feature: e });
          },
          onLoad() {
            this.iconsLoaded++, this.iconsLoaded === Object.keys(this.options).length && this.$emit("iconsLoaded");
          }
        }
      };
      e(3426);
      const d = (0, e(51900).Z)(o, n, [], !1, null, "0876512d", null).exports;
    },
    28678: (t, a, e) => {
      var n = e(70775);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, e(45346).Z)("308bbf0a", n, !1, { ssrId: !0 });
    },
    3426: (t, a, e) => {
      var n = e(83891);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, e(45346).Z)("8bd6bdaa", n, !1, { ssrId: !0 });
    },
    37178: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTMuODc5IDEzLjg3OUEzIDMgMCAxMDguMTIgMTguMTJMMy44OCAxMy44OHpNMTguMTIgOC4xMkEzIDMgMCAxMDEzLjg4IDMuODhMMTguMTIgOC4xMnptLTEwIDUuNzU4QTMgMyAwIDEwMy44OCAxOC4xMkw4LjEyIDEzLjg4ek0xMy44OCAyOC4xMmEzIDMgMCAxMDQuMjQyLTQuMjQyTDEzLjg4IDI4LjEyek01MyAyN2EzIDMgMCAxMDYgMGgtNnptMy0xMWgzYTMgMyAwIDAwLTMtM3Yzek02IDEzYTMgMyAwIDEwMCA2di02em0yLjEyMSA1LjEyMWwxMC0xMEwxMy44OCAzLjg4bC0xMCAxMEw4LjEyIDE4LjEyem0tNC4yNDIgMGwxMCAxMCA0LjI0Mi00LjI0Mi0xMC0xMEwzLjg4IDE4LjEyek01OSAyN1YxNmgtNnYxMWg2em0tMy0xNEg2djZoNTB2LTZ6TTYwLjEyMSA1MC4xMjFhMyAzIDAgMTAtNC4yNDItNC4yNDJsNC4yNDIgNC4yNDJ6TTQ1Ljg4IDU1Ljg4YTMgMyAwIDEwNC4yNDIgNC4yNDJMNDUuODggNTUuODh6bTEwLTUuNzU4YTMgMyAwIDEwNC4yNDItNC4yNDJMNTUuODggNTAuMTJ6TTUwLjEyIDM1Ljg4YTMgMyAwIDEwLTQuMjQyIDQuMjQybDQuMjQyLTQuMjQyek0xMSAzN2EzIDMgMCAxMC02IDBoNnpNOCA0OEg1YTMgMyAwIDAwMyAzdi0zem01MCAzYTMgMyAwIDEwMC02djZ6bS0yLjEyMS01LjEyMWwtMTAgMTAgNC4yNDIgNC4yNDIgMTAtMTAtNC4yNDItNC4yNDJ6bTQuMjQyIDBsLTEwLTEwLTQuMjQyIDQuMjQyIDEwIDEwIDQuMjQyLTQuMjQyek01IDM3djExaDZWMzdINXptMyAxNGg1MHYtNkg4djZ6Ii8+PC9zdmc+";
    }
  }
]);
