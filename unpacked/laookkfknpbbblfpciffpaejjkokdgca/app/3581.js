(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3581],
  {
    40063: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => i });
      let s = {};
      const i = {
        bind: function (e, t) {
          let a, i;
          (e.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const d = (e) => {
              (i = !1), ((e) => e && e.clientX > window.innerWidth)(e) ? (i = !0) : (a = e.target);
            },
            n = (s) => {
              i ||
                ((t.modifiers.bubble ||
                  (!e.contains(a) &&
                    !e.contains(s.target) &&
                    e !== a &&
                    e !== s.target &&
                    "true" !== e.dataset.justBoundClickOutsideHandler)) &&
                  t.value(s));
            };
          (e.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (e.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (s[e.dataset.clickOutsideMouseupHandlerId] = n),
            (s[e.dataset.clickOutsideMousedownHandlerId] = d),
            document.addEventListener("mouseup", n),
            document.addEventListener("mousedown", d);
        },
        unbind: function (e) {
          var t, a;
          null !== (t = e.dataset) &&
            void 0 !== t &&
            t.clickOutsideMouseupHandlerId &&
            null !== (a = e.dataset) &&
            void 0 !== a &&
            a.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", s[e.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", s[e.dataset.clickOutsideMousedownHandlerId]),
            delete s[e.dataset.clickOutsideMouseupHandlerId],
            delete s[e.dataset.clickOutsideMousedownHandlerId],
            delete e.dataset.clickOutsideMouseupHandlerId,
            delete e.dataset.clickOutsideMousedownHandlerId,
            delete e.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    16448: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var s = a(8081),
        i = a.n(s),
        d = a(23645),
        n = a.n(d)()(i());
      n.push([e.id, ".tabs[data-v-0684e496]{order:4}", ""]);
      const u = n;
    },
    13581: (e, t, a) => {
      "use strict";
      a.r(t);
      var s = a(99437),
        i = function () {
          var e = this,
            t = e._self._c;
          return t(
            "app-container",
            {
              directives: [{ name: "click-outside", rawName: "v-click-outside", value: e.closePopup, expression: "closePopup" }],
              attrs: { "visible-setting": "tabsVisible", "app-name": "tabs", hotkey: "V", "data-test": "tabs", overlay: e.popupActive },
              on: { toggle: e.togglePopupAndCaptureIfOpen }
            },
            [
              t(
                "app-dash",
                {
                  attrs: { src: e.$team ? a(23275) : "" },
                  on: {
                    click: function (t) {
                      return e.togglePopupAndCaptureIfOpen({ source: "click" });
                    }
                  }
                },
                [e._v("\n\t\tTabs\n\t")]
              ),
              e._v(" "),
              t(
                "transition",
                { attrs: { name: "slide-down-fade" }, on: { "after-enter": e.afterAppOpen } },
                [e.popupActive ? t("tab-stash-app") : e._e()],
                1
              )
            ],
            1
          );
        };
      i._withStripped = !0;
      var d = a(4623),
        n = a(94828),
        u = a(85140),
        o = a(28692),
        r = a(40063),
        l = a(81405),
        I = a(48494);
      const c = new l.ZP({ feature: "tab stash" }),
        M = {
          name: "Tabs",
          components: {
            AppDash: n.Z,
            TabStashApp: () =>
              Promise.all([a.e(8725), a.e(3418), a.e(6970), a.e(3498), a.e(7769), a.e(7198), a.e(3943), a.e(3691)]).then(a.bind(a, 41831)),
            AppContainer: d.default
          },
          directives: { ClickOutside: r.Z },
          mixins: [(0, I.Z)({ useViewStateStore: u.useTabsViewStateStore, analytics: c })],
          provide() {
            return { viewStateStore: this.tabsViewStateStore };
          },
          computed: { ...(0, o.Kc)(u.useTabsViewStateStore) },
          mounted() {
            m.widgetManager.appReady("tabs");
          },
          methods: {
            afterAppOpen() {
              m.trigger("tabStash:opened");
            }
          }
        };
      a(18962);
      const g = (0, a(51900).Z)(M, i, [], !1, null, "0684e496", null).exports,
        A = document.querySelector(".region.top-left"),
        p = document.createElement("div");
      A && A.prepend(p), new s.Z({ render: (e) => e(g) }).$mount(p);
    },
    85140: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => i, useTabsViewStateStore: () => s });
      const s = (0, a(95756).v)("tabs", { list: { defaultView: !0, order: 1 }, detail: { order: 2 } }),
        i = s;
    },
    18962: (e, t, a) => {
      var s = a(16448);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, a(45346).Z)("9bda98a2", s, !1, {});
    },
    23275: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiA4aDQwYTggOCAwIDAgMSA4IDh2MzJhOCA4IDAgMCAxLTggOEgxMmE4IDggMCAwIDEtOC04VjE2YTggOCAwIDAgMSA4LThabTAgNWEzIDMgMCAwIDAtMyAzdjMyYTMgMyAwIDAgMCAzIDNoNDBhMyAzIDAgMCAwIDMtM1YxNmEzIDMgMCAwIDAtMy0zSDEyWiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE5LjVhMi41IDIuNSAwIDAgMSAyLjUtMi41aDNhMi41IDIuNSAwIDAgMSAwIDVoLTNhMi41IDIuNSAwIDAgMS0yLjUtMi41Wm0xMC42NjcgMGEyLjUgMi41IDAgMCAxIDIuNS0yLjVoM2EyLjUgMi41IDAgMCAxIDAgNWgtM2EyLjUgMi41IDAgMCAxLTIuNS0yLjVabTEwLjY2NiAwYTIuNSAyLjUgMCAwIDEgMi41LTIuNWgzYTIuNSAyLjUgMCAwIDEgMCA1aC0zYTIuNSAyLjUgMCAwIDEtMi41LTIuNVpNNDQgMTkuNWEyLjUgMi41IDAgMCAxIDIuNS0yLjVoM2EyLjUgMi41IDAgMCAxIDAgNWgtM2EyLjUgMi41IDAgMCAxLTIuNS0yLjVaTTMyIDI3YTIgMiAwIDAgMSAyIDJ2MTAuMTcybDIuNTg2LTIuNTg2YTIgMiAwIDEgMSAyLjgyOCAyLjgyOGwtNiA2YTIgMiAwIDAgMS0yLjgyOCAwbC02LTZhMiAyIDAgMCAxIDIuODI4LTIuODI4TDMwIDM5LjE3MlYyOWEyIDIgMCAwIDEgMi0yWiAiLz48L3N2Zz4K";
    }
  }
]);
