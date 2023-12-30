"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7734, 9437],
  {
    99437: (e, t, n) => {
      n.d(t, { Z: () => k });
      var a = n(20144),
        i = n(88026),
        l = n(51726),
        o = n.n(l),
        d = n(34952),
        s = n(7838),
        c = n(35174);
      let u = {};
      const r = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (e.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (u[e.dataset.mobileClickHandlerId] = t.value),
            e.addEventListener("click", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", u[e.dataset.mobileClickHandlerId]),
            delete u[e.dataset.mobileClickHandlerId],
            delete e.dataset.mobileClickHandlerId,
            delete e.dataset.justBoundMobileClickHandler);
        }
      };
      var b = n(28692),
        p = n(64398),
        v = n(77197);
      a.ZP.use(i.Z, { name: "unreactive" }),
        a.ZP.use(o()),
        a.ZP.use(d.InlineSvgPlugin),
        a.ZP.use(b.og),
        a.ZP.use(v.Z),
        (a.ZP.prototype.$xhr = c.Z),
        (a.ZP.prototype.$e = s.Z),
        a.ZP.directive("mobile-click", r),
        new a.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        a.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: p.Z
        });
      const k = a.ZP;
    },
    37734: (e, t, n) => {
      n.r(t);
      var a = n(99437),
        i = n(4239);
      const l = () =>
        Promise.all([
          n.e(8725),
          n.e(5757),
          n.e(3246),
          n.e(3064),
          n.e(3370),
          n.e(7651),
          n.e(2622),
          n.e(7769),
          n.e(3554),
          n.e(2363),
          n.e(6285),
          n.e(5065)
        ]).then(n.bind(n, 29523));
      localStorage.getItem("dev-panel:open") ? s() : m.once("globalEvent:ctrlShiftBacktick", s);
      const o = localStorage.getObject("devPanel:pinnedStep");
      o &&
        m.utils
          .loadModuleDefault(() => Promise.all([n.e(3064), n.e(7651), n.e(5774)]).then(n.bind(n, 55774)))
          .then((e) => {
            e.setPinnedStepActiveOnDashLoad(o);
          });
      const d = localStorage.getObject(i.Z);
      function s() {
        m.utils.loadModuleDefault(l).then((e) => {
          let t = document.createElement("div");
          t.setAttribute("id", "dev-panel"), document.body.prepend(t), new a.Z({ render: (t) => t(e) }).$mount("#dev-panel");
        });
      }
      d &&
        Promise.all([n.e(8725), n.e(5757), n.e(3370), n.e(2622), n.e(5508)])
          .then(n.bind(n, 30158))
          .then((e) => {
            const t = e.useDevAppsStore(),
              { appId: n, viewId: a, itemId: i } = d;
            t.openView(n, a, i);
          });
    },
    4239: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = "devPanel:apps:pinnedView";
    }
  }
]);
