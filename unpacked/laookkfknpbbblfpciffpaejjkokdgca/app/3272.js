(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3272, 7652],
  {
    40063: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      let i = {};
      const s = {
        bind: function (e, t) {
          let n, s;
          (e.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const d = (e) => {
              (s = !1), ((e) => e && e.clientX > window.innerWidth)(e) ? (s = !0) : (n = e.target);
            },
            a = (i) => {
              s ||
                ((t.modifiers.bubble ||
                  (!e.contains(n) &&
                    !e.contains(i.target) &&
                    e !== n &&
                    e !== i.target &&
                    "true" !== e.dataset.justBoundClickOutsideHandler)) &&
                  t.value(i));
            };
          (e.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (e.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (i[e.dataset.clickOutsideMouseupHandlerId] = a),
            (i[e.dataset.clickOutsideMousedownHandlerId] = d),
            document.addEventListener("mouseup", a),
            document.addEventListener("mousedown", d);
        },
        unbind: function (e) {
          var t, n;
          null !== (t = e.dataset) &&
            void 0 !== t &&
            t.clickOutsideMouseupHandlerId &&
            null !== (n = e.dataset) &&
            void 0 !== n &&
            n.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", i[e.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", i[e.dataset.clickOutsideMousedownHandlerId]),
            delete i[e.dataset.clickOutsideMouseupHandlerId],
            delete i[e.dataset.clickOutsideMousedownHandlerId],
            delete e.dataset.clickOutsideMouseupHandlerId,
            delete e.dataset.clickOutsideMousedownHandlerId,
            delete e.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    13001: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      var i = n(8081),
        s = n.n(i),
        d = n(23645),
        a = n.n(d)()(s());
      a.push([
        e.id,
        ".links-dash[data-v-6d9b1d4a]{order:3}.links-dash.column[data-v-6d9b1d4a]{max-width:15rem;max-height:100%}.links-dash.row[data-v-6d9b1d4a]{min-width:0;flex-shrink:2}.base-item-list.row[data-v-6d9b1d4a]{height:100%}.base-item-list.row .link-list-item[data-v-6d9b1d4a]{width:3.5rem;padding:1.0625rem .25rem}@media screen and (max-width: 1000px){.links-dash.column[data-v-6d9b1d4a]{max-width:10rem}}@media screen and (max-width: 800px){.links-dash.column[data-v-6d9b1d4a]{max-width:5rem}}@media screen and (max-width: 450px){.links-dash[data-v-6d9b1d4a]{display:none}}",
        ""
      ]);
      const o = a;
    },
    73648: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      var i = n(8081),
        s = n.n(i),
        d = n(23645),
        a = n.n(d)()(s());
      a.push([e.id, "\n/* stylelint-disable */\n.links[data-v-66ae6db0] { order: 2;\n}\n", ""]);
      const o = a;
    },
    55040: (e, t, n) => {
      "use strict";
      var i;
      n.d(t, { O: () => i, k: () => s }),
        (function (e) {
          (e.Row = "row"), (e.Column = "column");
        })(i || (i = {}));
      const s = 3;
    },
    43120: (e, t, n) => {
      "use strict";
      n.r(t);
      var i = n(99437),
        s = function () {
          var e = this,
            t = e._self._c;
          return t(
            "app-container",
            {
              directives: [
                {
                  name: "click-outside",
                  rawName: "v-click-outside",
                  value: e.closeIfKeepOpenDisabled,
                  expression: "closeIfKeepOpenDisabled"
                }
              ],
              attrs: { "app-name": "links", "visible-setting": "linksVisible", overlay: e.popupActive, "data-test": "links", hotkey: "L" },
              on: { toggle: e.togglePopupAndCaptureIfOpen }
            },
            [
              t(
                "app-dash",
                {
                  attrs: { src: n(45231) },
                  on: {
                    click: function (t) {
                      return e.togglePopupAndCaptureIfOpen({ source: "click" });
                    }
                  }
                },
                [e._v("\n\t\tLinks\n\t")]
              ),
              e._v(" "),
              t(
                "transition",
                { attrs: { name: "slide-down-fade" }, on: { "after-enter": e.afterAppOpen } },
                [e.popupActive ? t("links-app") : e._e()],
                1
              )
            ],
            1
          );
        };
      s._withStripped = !0;
      var d = n(4623),
        a = n(94828),
        o = n(89968),
        r = n(23370),
        l = n(28692),
        u = n(40063),
        c = n(42223),
        p = n(40531),
        k = n(24749),
        h = n(81405),
        I = n(48494);
      const M = new h.ZP({ feature: "links" }),
        g = {
          name: "Links",
          directives: { ClickOutside: u.Z },
          components: {
            LinksApp: () =>
              Promise.all([n.e(8725), n.e(3418), n.e(6970), n.e(3498), n.e(7769), n.e(5645), n.e(7198), n.e(9217), n.e(9761)]).then(
                n.bind(n, 9761)
              ),
            AppDash: a.Z,
            AppContainer: d.default
          },
          mixins: [c.Z, (0, I.Z)({ useViewStateStore: o.useLinksViewStateStore, analytics: M })],
          provide() {
            return { viewStateStore: this.linksViewStateStore, itemStore: this.linksStore };
          },
          computed: { ...(0, l.Kc)(o.useLinksViewStateStore, r.useLinksStore) },
          watch: {
            popupActive(e) {
              e ? localStorage.setItem(k.hg, e) : localStorage.removeItem(k.hg);
            },
            "linksStore.loaded"() {
              m.trigger("links:updated");
            }
          },
          created() {
            this.linksStore.refresh(), p.ax.linksKeepOpen && !this.$touch && localStorage.getItem(k.hg) && this.togglePopup(!0);
          },
          methods: {
            closeIfKeepOpenDisabled() {
              p.ax.linksKeepOpen || this.togglePopup(!1);
            },
            onAllComponentsMountedOverride() {
              this.$e.$emit(k.o1.base);
            },
            afterAppOpen() {
              m.trigger("links:updated");
            }
          }
        };
      n(99106);
      var L = n(51900);
      const v = (0, L.Z)(g, s, [], !1, null, "66ae6db0", null).exports;
      var w = function () {
        var e = this,
          t = e._self._c;
        return e.activeMode === e.mode && e.totalPinnedLinks
          ? t(
              "app-container",
              {
                ref: "pinnedLinks",
                staticClass: "links-dash",
                class: [e.direction],
                attrs: { "app-name": "pinned-links", "data-test": "links-dash", "visible-setting": "linksVisible" }
              },
              [
                t(
                  "overflow-carousel",
                  { staticClass: "add-shadow", attrs: { direction: e.direction, "content-ready": e.linksLoadedAndMounted } },
                  [
                    e.teamPinnedLinks.length > 0
                      ? t(
                          "base-item-list",
                          { attrs: { direction: e.direction } },
                          e._l(e.teamPinnedLinks, function (n) {
                            return t("links-list-item", {
                              key: n.id,
                              attrs: { "link-group": n, "is-on-dash": !0, "is-tile": e.mode === e.LinksMode.Tile, "is-team-link": !0 },
                              on: { "hook:mounted": e.onLinkGroupMounted }
                            });
                          }),
                          1
                        )
                      : e._e(),
                    e._v(" "),
                    e.pinnedLinks.length > 0
                      ? t(
                          "base-item-list",
                          {
                            attrs: { direction: e.direction },
                            model: {
                              value: e.pinnedLinksOrderIds,
                              callback: function (t) {
                                e.pinnedLinksOrderIds = t;
                              },
                              expression: "pinnedLinksOrderIds"
                            }
                          },
                          e._l(e.pinnedLinks, function (n) {
                            return t("links-list-item", {
                              key: n.id,
                              attrs: { "link-group": n, "is-on-dash": !0, "is-tile": e.mode === e.LinksMode.Tile },
                              on: { "hook:mounted": e.onLinkGroupMounted }
                            });
                          }),
                          1
                        )
                      : e._e()
                  ],
                  1
                )
              ],
              1
            )
          : e._e();
      };
      w._withStripped = !0;
      var S = n(55040);
      const b = new h.ZP({ feature: "links" }),
        A = {
          name: "LinksDash",
          components: {
            OverflowCarousel: () => n.e(1027).then(n.bind(n, 41027)),
            AppContainer: () => Promise.resolve().then(n.bind(n, 4623)),
            LinksListItem: () => Promise.all([n.e(8725), n.e(3498), n.e(9217), n.e(5598)]).then(n.bind(n, 14433)),
            BaseItemList: () => n.e(4493).then(n.bind(n, 14493))
          },
          mixins: [c.Z],
          provide() {
            return {
              viewStateStore: this.linksViewStateStore,
              itemStore: this.linksStore,
              capture: b.capture.bind(b),
              batchCapture: b.batchCapture
            };
          },
          props: { mode: { type: String, default: k.LS.List, validator: (e) => Object.values(k.LS).some((t) => t === e) } },
          data: () => ({ mountedLinkGroups: 0 }),
          unreactive: () => ({ BaseItemListDirection: S.O, LinksMode: k.LS }),
          computed: {
            ...(0, l.Kc)(o.useLinksViewStateStore, r.useLinksStore),
            activeMode: () => p.ax.linksMode,
            teamPinnedLinks() {
              return this.linksStore.getPinnedTeamItems;
            },
            pinnedLinks() {
              return this.linksStore.getPinnedItems;
            },
            pinnedLinksOrderIds: {
              get() {
                return this.pinnedLinks.map((e) => e.id);
              },
              async set(e) {
                await this.linksStore.updatePartialRootLinksOrderIds(e);
              }
            },
            totalPinnedLinks() {
              return this.teamPinnedLinks.length + this.pinnedLinks.length;
            },
            direction() {
              return this.mode === k.LS.Tile ? S.O.Row : S.O.Column;
            },
            linksLoadedAndMounted() {
              return this.linksStore.loaded && this.totalPinnedLinks === this.mountedLinkGroups;
            }
          },
          methods: {
            onAllComponentsMountedOverride() {
              this.$e.$emit(k.o1[this.mode]);
            },
            onLinkGroupMounted() {
              this.mountedLinkGroups += 1;
            }
          }
        };
      n(62154);
      const O = (0, L.Z)(A, w, [], !1, null, "6d9b1d4a", null).exports;
      var f = n(7838);
      const C = document.querySelector(".region.top-left"),
        D = document.querySelector(".region.sidebar-left");
      Promise.all(
        Object.values(k.o1).map(
          (e) =>
            new Promise((t) => {
              f.Z.$on(e, t);
            })
        )
      )
        .then(() => {
          m.widgetManager.appReady("links");
        })
        .catch(console.error);
      const x = document.createElement("div"),
        y = document.createElement("div");
      C && (C.prepend(y), C.prepend(x)),
        new i.Z({ render: (e) => e(v) }).$mount(x),
        new i.Z({ render: (e) => e(O, { props: { mode: k.LS.Tile } }) }).$mount(y);
      const T = document.createElement("div");
      D && D.prepend(T), new i.Z({ render: (e) => e(O, { props: { mode: k.LS.List } }) }).$mount(T);
    },
    89968: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s, useLinksViewStateStore: () => i });
      const i = (0, n(95756).v)("links", { list: { defaultView: !0, order: 1 }, form: { order: 2 } }),
        s = i;
    },
    67652: (e, t, n) => {
      "use strict";
      var i;
      n.d(t, { Z: () => s }),
        (function (e) {
          (e.Sync = "sync"), (e.Cache = "cache"), (e.Server = "server"), (e.Timestamp = "timestamp");
        })(i || (i = {}));
      const s = i;
    },
    62154: (e, t, n) => {
      var i = n(13001);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals),
        (0, n(45346).Z)("7c2350d0", i, !1, {});
    },
    99106: (e, t, n) => {
      var i = n(73648);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals),
        (0, n(45346).Z)("29e11c8f", i, !1, { ssrId: !0 });
    },
    45231: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMyAxNS42NThhMi41IDIuNSAwIDAgMC0yLjUtMi41SDE1YTggOCAwIDAgMC04IDh2MjhhOCA4IDAgMCAwIDggOGgyOGE4IDggMCAwIDAgOC04VjMzLjVhMi41IDIuNSAwIDAgMC01IDB2MTUuNjU4YTMgMyAwIDAgMS0zIDNIMTVhMyAzIDAgMCAxLTMtM3YtMjhhMyAzIDAgMCAxIDMtM2gxNS41YTIuNSAyLjUgMCAwIDAgMi41LTIuNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi42OCA3LjY1N2EyLjUgMi41IDAgMCAxIDIuNS0yLjVoMTEuMzE1YTIuNDk2IDIuNDk2IDAgMCAxIDIuNSAyLjVWMTguOTdhMi41IDIuNSAwIDEgMS01IDB2LTUuMjc3bC0xMy40MSAxMy40MWEyLjUgMi41IDAgMSAxLTMuNTM2LTMuNTM2bDEzLjQxLTEzLjQxaC01LjI3OGEyLjUgMi41IDAgMCAxLTIuNS0yLjVaIi8+PC9zdmc+";
    }
  }
]);
