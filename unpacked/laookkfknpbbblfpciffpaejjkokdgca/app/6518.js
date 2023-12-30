(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6518],
  {
    45086: (e, t, a) => {
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
    56518: (e, t, a) => {
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
      var o = a(28692);
      const s = (0, a(95756).v)("chat");
      var i = a(81405),
        r = a(4623),
        c = a(94828),
        d = a(48494),
        l = a(7838);
      const u = new i.ZP({ feature: "ask ai", is_paid_event: !0, location: "app" }),
        h = {
          name: "Chat",
          components: {
            AppContainer: r.default,
            AppDash: c.Z,
            ChatApp: () => Promise.all([a.e(9980), a.e(3418), a.e(6970), a.e(5494), a.e(9159)]).then(a.bind(a, 98658))
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
      a(3349);
      const v = (0, a(51900).Z)(h, p, [], !1, null, "72bcd587", null).exports,
        g = document.querySelector(".region.bottom-right"),
        b = document.createElement("div");
      g && g.prepend(b), new n.Z({ render: (e) => e(v) }).$mount(b);
    },
    3349: (e, t, a) => {
      var n = a(45086);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("451370f3", n, !1, {});
    }
  }
]);
