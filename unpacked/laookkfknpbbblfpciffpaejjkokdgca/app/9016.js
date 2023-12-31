(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9016, 9437],
  {
    99437: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => b });
      var s = a(20144),
        i = a(88026),
        n = a(51726),
        o = a.n(n),
        c = a(55482),
        l = a(7838),
        d = a(35174);
      let r = {};
      const u = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (e.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (r[e.dataset.mobileClickHandlerId] = t.value),
            e.addEventListener("click", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", r[e.dataset.mobileClickHandlerId]),
            delete r[e.dataset.mobileClickHandlerId],
            delete e.dataset.mobileClickHandlerId,
            delete e.dataset.justBoundMobileClickHandler);
        }
      };
      var v = a(63420),
        g = a(64398),
        M = a(77197);
      s.ZP.use(i.Z, { name: "unreactive" }),
        s.ZP.use(o()),
        s.ZP.use(c.qK),
        s.ZP.use(v.og),
        s.ZP.use(M.Z),
        (s.ZP.prototype.$xhr = d.Z),
        (s.ZP.prototype.$e = l.Z),
        s.ZP.directive("mobile-click", u),
        new s.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        s.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: g.Z
        });
      const b = s.ZP;
    },
    59016: (e, t, a) => {
      "use strict";
      a.r(t);
      var s = a(99437),
        i = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { staticClass: "flash-message-container" },
            [
              t("transition", { attrs: { name: "slide-down-fade", mode: "out-in" } }, [
                e.activeMessage
                  ? t(
                      "div",
                      { key: e.activeMessage.id, staticClass: "flash-message bg", attrs: { "data-test": "flash-message" } },
                      [
                        e.activeMessage.icon
                          ? t("inline-svg", { staticClass: "icon icon-alert", attrs: { src: e.activeMessage.icon } })
                          : e._e(),
                        e._v(" "),
                        t("div", { staticClass: "v-message" }, [
                          e._v("\n\t\t\t\t" + e._s(e.activeMessage.message) + "\n\t\t\t\t"),
                          e.activeMessage.contact
                            ? t("span", [
                                e._v(e._s(e.contactMessageText)),
                                t("a", { attrs: { href: "https://momentumdash.com/contact", target: "_blank" } }, [
                                  e._v(e._s(e.contactLinkText))
                                ])
                              ])
                            : e._e()
                        ]),
                        e._v(" "),
                        e.activeMessage.button
                          ? t("div", [
                              t("button", { staticClass: "button", on: { click: e.activeMessage.button.action } }, [
                                e._v(e._s(e.activeMessage.button.text))
                              ])
                            ])
                          : e._e(),
                        e._v(" "),
                        e.activeMessage.error
                          ? t(
                              "div",
                              { staticClass: "icon-wrapper close", attrs: { "data-test": "close" }, on: { click: e.dismiss } },
                              [t("inline-svg", { staticClass: "icon icon-close", attrs: { src: a(21794) } })],
                              1
                            )
                          : e._e()
                      ],
                      1
                    )
                  : e._e()
              ])
            ],
            1
          );
        };
      i._withStripped = !0;
      var n = a(25659);
      const o = {
        name: "FlashMessage",
        computed: {
          activeMessage: () => (0, n.eU)(),
          contactMessageText() {
            return this.activeMessage.contact.messageText;
          },
          contactLinkText() {
            return this.activeMessage.contact.linkText;
          }
        },
        watch: {
          activeMessage(e) {
            clearTimeout(this.timeout), e && !e.persist && (this.timeout = setTimeout(this.dismiss, 4e3));
          }
        },
        methods: {
          dismiss() {
            var e;
            (0, n.f2)(null === (e = this.activeMessage) || void 0 === e ? void 0 : e.id);
          }
        }
      };
      a(47832);
      const c = (0, a(51900).Z)(o, i, [], !1, null, "525634b4", null).exports,
        l = document.querySelector(".top-row"),
        d = document.createElement("div");
      l.appendChild(d), new s.Z({ render: (e) => e(c) }).$mount(d);
    },
    15367: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => c });
      var s = a(8081),
        i = a.n(s),
        n = a(23645),
        o = a.n(n)()(i());
      o.push([
        e.id,
        "\n/* stylelint-disable */\n.flash-message-container[data-v-525634b4] { position: absolute; inset: 1.5em 0 auto; z-index: 10; display: flex; justify-content: center; pointer-events: none;\n}\n.flash-message[data-v-525634b4] { max-width: 650px; padding: 16px 20px; display: flex; gap: 16px; align-items: center; background-color: var(--color-bg); border-radius: 100px; color: var(--color-text); pointer-events: all; text-shadow: none;\n}\n.icon-alert[data-v-525634b4] { --icon-size: 20px; flex-shrink: 0;\n}\n.v-message a[data-v-525634b4] { color: var(--color-text); text-decoration: underline; transition: opacity 0.05s ease;\n}\n.v-message a[data-v-525634b4]:hover { opacity: 0.8;\n}\n.v-message a[data-v-525634b4]:hover:active { opacity: 1; transition-duration: 0s;\n}\n.close[data-v-525634b4] { margin-right: -4px; margin-left: 3px;\n}\n.close[data-v-525634b4]:after { --icon-wrapper-size: 30px;\n}\n.icon-close[data-v-525634b4] { --icon-size: 10px;\n}\n.button[data-v-525634b4] { white-space: nowrap;\n}\n",
        ""
      ]);
      const c = o;
    },
    47832: (e, t, a) => {
      var s = a(15367);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, a(45346).Z)("2257f3f4", s, !1, { ssrId: !0 });
    },
    21794: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K";
    }
  }
]);
