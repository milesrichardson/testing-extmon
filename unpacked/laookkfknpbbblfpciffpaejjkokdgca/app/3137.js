(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3137, 9437],
  {
    99437: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => A });
      var M = i(20144),
        a = i(88026),
        u = i(51726),
        I = i.n(u),
        n = i(34952),
        o = i(7838),
        l = i(35174);
      let s = {};
      const c = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (e.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (s[e.dataset.mobileClickHandlerId] = t.value),
            e.addEventListener("click", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", s[e.dataset.mobileClickHandlerId]),
            delete s[e.dataset.mobileClickHandlerId],
            delete e.dataset.mobileClickHandlerId,
            delete e.dataset.justBoundMobileClickHandler);
        }
      };
      var g = i(28692),
        d = i(64398),
        D = i(77197);
      M.ZP.use(a.Z, { name: "unreactive" }),
        M.ZP.use(I()),
        M.ZP.use(n.InlineSvgPlugin),
        M.ZP.use(g.og),
        M.ZP.use(D.Z),
        (M.ZP.prototype.$xhr = l.Z),
        (M.ZP.prototype.$e = o.Z),
        M.ZP.directive("mobile-click", c),
        new M.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        M.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: d.Z
        });
      const A = M.ZP;
    },
    3137: (e, t, i) => {
      "use strict";
      i.r(t);
      var M = i(99437),
        a = function () {
          var e = this,
            t = e._self._c;
          return t("div", { staticClass: "app-container show-anyway", attrs: { id: "template" } }, [
            t(
              "div",
              { staticClass: "app-dash app-dash-icon add-shadow toggle topics-toggle", on: { click: e.toggleApp } },
              [
                t("inline-svg", { attrs: { src: i(50162) } }),
                e._v(" "),
                t("span", { staticClass: "app-dash-icon-label" }, [e._v("Template")])
              ],
              1
            ),
            e._v(" "),
            e.containerOpen ? t("div", [e._v("Hello")]) : e._e()
          ]);
        };
      a._withStripped = !0;
      const u = {
        name: "TemplatePlaceholder",
        data: () => ({ containerOpen: !1 }),
        mounted() {
          setTimeout(() => this.toggleApp(), 1), m.on("globalEvent:key:Z", this.toggleApp);
        },
        destroyed() {
          m.off("globalEvent:key:Z", this.toggleApp);
        },
        methods: {
          toggleApp() {
            (this.containerOpen = !this.containerOpen),
              this.containerOpen
                ? (m.trigger("notification:hide"), this.addListeners(), m.trigger("template:open"))
                : (m.widgetManager.showApps(), m.trigger("template:closed"), this.removeListeners());
          },
          addListeners() {
            m.on("globalEvent:esc", this.toggleApp), m.on("globalEvent:click", this.handleGlobalClick);
          },
          removeListeners() {
            m.off("globalEvent:esc", this.toggleApp), m.off("globalEvent:click", this.handleGlobalClick);
          }
        }
      };
      i(56267);
      const I = (0, i(51900).Z)(u, a, [], !1, null, "81171d7c", null).exports;
      m.widgetManager.handover("template-placeholder", null, {
        order: "append",
        bootstrap: function (e) {
          new M.Z({ render: (e) => e(I) }).$mount(e);
        }
      });
    },
    14751: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => n });
      var M = i(8081),
        a = i.n(M),
        u = i(23645),
        I = i.n(u)()(a());
      I.push([e.id, "\n/* stylelint-disable */\n.app-container[data-v-81171d7c] { order: 3;\n}\n\n", ""]);
      const n = I;
    },
    56267: (e, t, i) => {
      var M = i(14751);
      M.__esModule && (M = M.default),
        "string" == typeof M && (M = [[e.id, M, ""]]),
        M.locals && (e.exports = M.locals),
        (0, i(45346).Z)("dd3262a8", M, !1, { ssrId: !0 });
    },
    50162: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0zLjU3OCAyLjU4NmEuMjk5LjI5OSAwIDAgMC0uMDc4LjIyNHYyMC45MDNhLjI4LjI4IDAgMCAwIC4wNzcuMi4yNzMuMjczIDAgMCAwIC4xNzMuMDg3aDIuOTc2YS4yOC4yOCAwIDAgMCAuMTk3LS4wODZjLjA1Mi0uMDU0LjA4LS4xMjcuMDc3LS4yMzRWMi43ODVhLjI4LjI4IDAgMCAwLS4wNzgtLjIuMjczLjI3MyAwIDAgMC0uMTcyLS4wODVIMy43NjdhLjI4LjI4IDAgMCAwLS4xOS4wODZ6TTMuNzI2IDBoMy4wNDhBMi43OCAyLjc4IDAgMCAxIDkuNSAyLjgxdjIwLjgzN0EyLjc4IDIuNzggMCAwIDEgNi43NSAyNi41SDMuNzI2YTIuNzggMi43OCAwIDAgMS0xLjk1Ny0uODZBMi43NiAyLjc2IDAgMCAxIDEgMjMuNjhWMi44MzVBMi43OCAyLjc4IDAgMCAxIDMuNzI2IDB6TTEzLjU3OCA5LjU5Yy0uMDUzLjA1Ny0uMDgxLjEzMi0uMDc4LjI1djEzLjg2MWEuMjkuMjkgMCAwIDAgLjA3OC4yMDkuMjg1LjI4NSAwIDAgMCAuMTcyLjA5aDIuOTY4YS4yOS4yOSAwIDAgMCAuMjA0LS4wOWMuMDUzLS4wNTcuMDgxLS4xMzIuMDc4LS4yNVY5Ljc5OWEuMjkuMjkgMCAwIDAtLjA3OC0uMjA5LjI4NS4yODUgMCAwIDAtLjE3Mi0uMDloLTIuOTc4YS4yOS4yOSAwIDAgMC0uMTk0LjA5em0uMTQtMi41OWgzLjA2NGEyLjc5IDIuNzkgMCAwIDEgMS45NTguODc1Yy41MS41NC43ODQgMS4yNjMuNzYgMS45NjV2MTMuNzc5YTIuNzkgMi43OSAwIDAgMS0uNzYgMi4wMDZjLS41MS41NC0xLjIxNS44NTYtMS45OS44NzVoLTMuMDMyYTIuNzkgMi43OSAwIDAgMS0xLjk1OC0uODc1QTIuNzY0IDIuNzY0IDAgMCAxIDExIDIzLjY2VjkuODgxYTIuNzkgMi43OSAwIDAgMSAyLjcxOC0yLjg4ek0zMS40NzMgMjIuNmEyLjg0IDIuODQgMCAwIDEtLjQwMyAyLjE1IDIuODY1IDIuODY1IDAgMCAxLTEuODYgMS4yMzRsLTIuOTc2LjQ4MmEyLjc2IDIuNzYgMCAwIDEtMi4wNy0uNTI4IDIuNzM3IDIuNzM3IDAgMCAxLTEuMDY4LTEuODExTDIwLjAyIDQuODUxYTIuODM0IDIuODM0IDAgMCAxIDIuMjU4LTMuMjgxbDIuOTc4LS41MzZhMi43NSAyLjc1IDAgMCAxIDMuMTMxIDIuMzU3bDMuMDg2IDE5LjIwOHpNMjUuOTE2IDMuNzY3Yy0uMDE1LS4xMTItLjA1LS4xNzMtLjEwMy0uMjEzYS4yNTMuMjUzIDAgMCAwLS4xNTEtLjA1NWwtMi45Mi41MjZjLS4xNzcuMDM1LS4yOTQuMjA1LS4yNTguNDA3TDI1LjU3IDIzLjc3YS4yNi4yNiAwIDAgMCAuMS4xNzRjLjA1Ni4wNDIuMTI3LjA2LjE4LjA1MmwyLjkxMi0uNDcxYS4zNC4zNCAwIDAgMCAuMjE3LS4xNDdjLjA1LS4wNzYuMDY3LS4xNjkuMDM3LS4zMmwtMy4xLTE5LjI5eiIgLz48cmVjdCB4PSIxLjA1IiB5PSIyOC43NSIgd2lkdGg9IjMwLjUiIGhlaWdodD0iMi41IiByeD0iMS4yNSIgLz48L2c+PC9zdmc+Cg==";
    }
  }
]);
