"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7734, 9437],
  {
    99437: (e, t, n) => {
      n.d(t, { Z: () => k });
      var a = n(20144),
        o = n(88026),
        i = n(51726),
        l = n.n(i),
        d = n(55482),
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
      var b = n(63420),
        p = n(64398),
        v = n(77197);
      a.ZP.use(o.Z, { name: "unreactive" }),
        a.ZP.use(l()),
        a.ZP.use(d.qK),
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
        o = n(4239);
      const i = () =>
        Promise.all([
          n.e(8725),
          n.e(5757),
          n.e(3246),
          n.e(3064),
          n.e(1886),
          n.e(7651),
          n.e(3608),
          n.e(5852),
          n.e(9965),
          n.e(7695),
          n.e(9150),
          n.e(7119)
        ]).then(n.bind(n, 810));
      localStorage.getItem("dev-panel:open") ? s() : m.once("globalEvent:ctrlShiftBacktick", s);
      const l = localStorage.getObject("devPanel:pinnedStep");
      l &&
        m.utils
          .loadModuleDefault(() => Promise.all([n.e(3064), n.e(7651), n.e(5774)]).then(n.bind(n, 55774)))
          .then((e) => {
            e.setPinnedStepActiveOnDashLoad(l);
          });
      const d = localStorage.getObject(o.Z);
      function s() {
        m.utils.loadModuleDefault(i).then((e) => {
          const t = "dev-panel";
          let n = document.createElement("div");
          n.setAttribute("id", t), document.body.prepend(n), new a.Z({ render: (t) => t(e) }).$mount("#" + t);
        });
      }
      d &&
        Promise.all([n.e(8725), n.e(5757), n.e(1886), n.e(3608), n.e(5508)])
          .then(n.bind(n, 30158))
          .then((e) => {
            const t = e.useDevAppsStore(),
              { appId: n, viewId: a, itemId: o } = d;
            t.openView(n, a, o);
          });
    },
    4239: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = "devPanel:apps:pinnedView";
    }
  }
]);
