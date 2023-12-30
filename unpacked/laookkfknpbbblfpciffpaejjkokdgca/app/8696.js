(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8696],
  {
    65409: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => i });
      var n = a(8081),
        p = a.n(n),
        o = a(23645),
        s = a.n(o)()(p());
      s.push([
        e.id,
        ".chat[data-v-72bcd587]{--app-padding: 24px;order:1}[data-v-72bcd587]  .chat-messages{min-height:var(--body-min-height);flex-shrink:0}",
        ""
      ]);
      const i = s;
    },
    78696: (e, t, a) => {
      "use strict";
      a.r(t);
      var n = a(99437),
        p = function () {
          var e = this,
            t = e._self._c;
          return t(
            "app-container",
            {
              staticClass: "chat",
              attrs: { "data-test": "ask-ai", "app-name": "chat", hotkey: "A", "visible-setting": "askAiVisible", overlay: e.popupActive },
              on: { toggle: e.togglePopupAndCaptureIfOpen }
            },
            [
              t("app-dash", { on: { click: e.togglePopupAndCaptureIfOpen } }, [e._v("\n\t\tAsk AI\n\t")]),
              e._v(" "),
              t(
                "transition",
                { attrs: { name: "slide-up-fade" }, on: { "before-enter": e.beforeAppOpen } },
                [e.popupActive ? t("chat-app", { on: { close: e.closePopup } }) : e._e()],
                1
              )
            ],
            1
          );
        };
      p._withStripped = !0;
      var o = a(63420);
      const s = (0, a(95756).v)("chat");
      var i = a(81405),
        r = a(1077),
        c = a(42530),
        d = a(48494),
        l = a(7838);
      const u = new i.ZP({ feature: "ask ai", is_paid_event: !0, location: "app" }),
        h = {
          name: "Chat",
          components: {
            AppContainer: r.default,
            AppDash: c.Z,
            ChatApp: () => Promise.all([a.e(9980), a.e(6179), a.e(955), a.e(842), a.e(5096)]).then(a.bind(a, 89896))
          },
          mixins: [(0, d.Z)({ useViewStateStore: s, analytics: u })],
          provide() {
            return { viewStateStore: this.chatViewStateStore };
          },
          computed: { ...(0, o.Kc)(s) },
          mounted() {
            m.widgetManager.appReady("chat");
          },
          methods: {
            beforeAppOpen() {
              l.Z.$emit("searchChat:close");
            }
          }
        };
      a(3438);
      const v = (0, a(51900).Z)(h, p, [], !1, null, "72bcd587", null).exports,
        g = document.querySelector(".region.bottom-right"),
        b = document.createElement("div");
      g && g.prepend(b), new n.Z({ render: (e) => e(v) }).$mount(b);
    },
    3438: (e, t, a) => {
      var n = a(65409);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("62ea78f3", n, !1, {});
    }
  }
]);
