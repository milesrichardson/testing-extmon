(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7638],
  {
    18267: (e, t, n) => {
      "use strict";
      function o({ appKey: e, hideEvents: t, closeFunctionName: n, eventTriggerProperty: o }) {
        return {
          created() {
            e && t && n && o
              ? (this.$watch(o, (n) => {
                  n && t.forEach((t) => m.trigger(t, e));
                }),
                t.forEach((e) => {
                  m.on(e, this.onHideEvent);
                }))
              : console.warn(
                  "Missing hideEventsMixin Arguments: ",
                  e ? "" : "appKey",
                  t ? "" : "hideEvents",
                  n ? "" : "closeFunctionName",
                  o ? "" : "eventTriggerProperty"
                );
          },
          destroyed() {
            t.forEach((e) => {
              m.off(e, this.onHideEvent);
            });
          },
          methods: {
            onHideEvent(t) {
              t !== e && this[n]();
            }
          }
        };
      }
      n.d(t, { Z: () => o });
    },
    24390: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => p });
      var o = n(8081),
        s = n.n(o),
        r = n(23645),
        i = n.n(r)()(s());
      i.push([e.id, "\n/* stylelint-disable */\n.app-dash.hidden[data-v-2b5d17f6] { opacity: 0;\n}\n", ""]);
      const p = i;
    },
    47638: (e, t, n) => {
      "use strict";
      n.r(t);
      var o = n(99437),
        s = function () {
          var e = this,
            t = e._self._c;
          return t(
            "app-container",
            {
              attrs: { "app-name": "notes", "visible-setting": "notesVisible", hotkey: "N", "data-test": "notes", overlay: e.popupActive },
              on: { toggle: e.togglePopupAndCaptureIfOpen }
            },
            [
              t(
                "app-dash",
                {
                  class: { hidden: e.popupActive && e.fullscreen },
                  on: {
                    click: function (t) {
                      return e.togglePopupAndCaptureIfOpen({ source: "click" });
                    }
                  }
                },
                [e._v("\n\t\tNotes\n\t")]
              ),
              e._v(" "),
              t("transition", { attrs: { name: "slide-up-fade" } }, [e.popupActive ? t("notes-app") : e._e()], 1)
            ],
            1
          );
        };
      s._withStripped = !0;
      var r = n(1077),
        i = n(42530),
        p = n(18267),
        a = n(84722),
        c = n(63420),
        d = n(81405),
        l = n(48494),
        u = n(40531);
      const h = new d.ZP({ feature: "notes" }),
        v = {
          name: "Notes",
          components: {
            AppDash: i.Z,
            NotesApp: () =>
              Promise.all([
                n.e(8725),
                n.e(5757),
                n.e(9980),
                n.e(464),
                n.e(856),
                n.e(6179),
                n.e(955),
                n.e(4752),
                n.e(3608),
                n.e(5852),
                n.e(6283),
                n.e(5645),
                n.e(5415),
                n.e(9443),
                n.e(4817),
                n.e(4411),
                n.e(4442),
                n.e(3746)
              ]).then(n.bind(n, 6051)),
            AppContainer: r.default
          },
          mixins: [
            (0, p.Z)({
              appKey: "notes",
              hideEvents: ["globalEvent:toggle:bottom-right"],
              closeFunctionName: "closePopup",
              eventTriggerProperty: "popupActive"
            }),
            (0, l.Z)({ useViewStateStore: a.V, analytics: h })
          ],
          provide() {
            return { viewStateStore: this.notesViewStateStore };
          },
          computed: {
            ...(0, c.Kc)(a.V),
            popupActive() {
              return this.notesViewStateStore.popupActive;
            },
            fullscreen: () => u.Fl.notesFullscreen
          },
          mounted() {
            m.widgetManager.appReady("notes");
          }
        };
      n(96398);
      const g = (0, n(51900).Z)(v, s, [], !1, null, "2b5d17f6", null).exports,
        f = document.querySelector(".region.bottom-right"),
        y = document.createElement("div");
      f && f.prepend(y), new o.Z({ render: (e) => e(g) }).$mount(y);
    },
    84722: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => o });
      const o = (0, n(95756).v)("notes", { list: { defaultView: !0, order: 1 }, deleted: { order: 2 } });
    },
    96398: (e, t, n) => {
      var o = n(24390);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals),
        (0, n(45346).Z)("f6fe24c8", o, !1, { ssrId: !0 });
    }
  }
]);
