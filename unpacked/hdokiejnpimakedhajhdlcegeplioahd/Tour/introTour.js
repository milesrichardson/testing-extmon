var IntroTour = (function (o, s, e, t, u, i) {
  "use strict";
  var c, a;
  function T() {
    a.laterThisTour(), i.save(a.getOptions());
  }
  function l() {
    a.neverThisTour(), i.save(a.getOptions());
  }
  function b() {
    a.takeThisTour(), i.save(a.getOptions());
  }
  function r() {
    i.save(null);
  }
  function n() {
    a.makeLaterNowTours(), i.save(a.getOptions());
  }
  function v() {
    c &&
      (c.closeCurrentStep(),
      c.unSubscribeAction("later"),
      c.unSubscribeAction("never"),
      c.unSubscribeAction("start"),
      c.unSubscribeAction("close"),
      c.cleanup(),
      (c = null));
  }
  function A(e) {
    u.get(u.CLEAR_DATA).subscribeFirst(function () {
      e && e.cleanup && e.cleanup();
    });
  }
  function f(e, t) {
    var r = this,
      n;
    v(),
      i.migrateOldPrefs(),
      e
        ? (n = (a = new o()).getAvailableTour(e)) && ((c = new s(n)), A(r), c.startFlow(e), t) && b()
        : ((a = new o(i.retrieve())),
          i.save(a.getOptions()),
          (n = a.getAvailableTour())
            ? ((c = new s(n)).subscribeToAction("later", T),
              c.subscribeToAction("never", l),
              c.subscribeToAction("start", b),
              c.subscribeToAction("close", v),
              A(r),
              c.startFlow(e))
            : u.get(u.INTRO_TOURS_LOADED).publish());
  }
  return { start: f, cleanup: v, neverThisTour: l, laterThisTour: T, takeThisTour: b, resetAllTours: r, makeLaterNowTours: n };
})(IntroTourQueue, IntroTourFlow, IntroTourData, LPProxy, Topics, IntroTourPreferences);
