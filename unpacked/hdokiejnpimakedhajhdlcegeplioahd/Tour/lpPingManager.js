var lpPingManager = (function (n, p) {
  "use strict";
  var t = function (t) {
    return (this.options = n.extend({ $parentEl: n("body"), $pingWrapEl: null, steps: [], id: "pingManager" }, t)), this.setup(), this;
  };
  return (
    (t.prototype.setup = function () {
      if (this.options.$parentEl) {
        this.options.$pingWrapEl = n("<div></div>").addClass("ping-wrap");
        for (var t = 0; t < this.options.steps.length; t++) {
          var i = this.options.steps[t].position;
          i &&
            (this.options.steps[t].ping = new p({
              $parentEl: this.options.$pingWrapEl,
              id: "ping_" + t,
              orientation: i.orientation,
              targetId: i.targetId,
              pingOffset: i.pingOffset
            }));
        }
        this.options.$parentEl.append(this.options.$pingWrapEl), this.hideAll();
      }
    }),
    (t.prototype.cleanup = function () {
      this.options.$pingWrapEl && this.options.$pingWrapEl.remove();
    }),
    (t.prototype.showAllFuture = function (t) {
      for (var i = 0; i < this.options.steps.length; i++)
        i < t ? this.hide(this.options.steps[i]) : (this.show(this.options.steps[i]), this.deActivate(this.options.steps[i]));
      0 <= t && t < this.options.steps.length && this.activate(this.options.steps[t]);
    }),
    (t.prototype.hideAll = function () {
      for (var t = 0; t < this.options.steps.length; t++) this.hide(this.options.steps[t]);
    }),
    (t.prototype.activate = function (t) {
      t && t.ping && "function" == typeof t.ping.activate && t.ping.activate();
    }),
    (t.prototype.deActivate = function (t) {
      t && t.ping && "function" == typeof t.ping.activate && t.ping.deActivate();
    }),
    (t.prototype.show = function (t) {
      t && t.ping && t.position && "function" == typeof t.ping.show && t.ping.show().subscribeToWindowResize();
    }),
    (t.prototype.hide = function (t) {
      t && t.ping && "function" == typeof t.ping.hide && t.ping.hide().unSubscribeToWindowResize();
    }),
    t
  );
})(jQuery, LpPing);
