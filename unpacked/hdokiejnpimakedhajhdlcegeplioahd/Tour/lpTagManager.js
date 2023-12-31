var lpTagManager = (function (n, e) {
  "use strict";
  var t = function (t) {
    return (this.steps = t), this.setup(), this;
  };
  return (
    (t.prototype.setup = function () {
      this.steps.forEach(function (t) {
        t.printTags && ((t.tag = new e({ $parentEl: n(t.position.targetId), id: t.position.targetId })), t.tag.hide());
      });
    }),
    (t.prototype.showAllFuture = function (e) {
      this.steps.forEach(function (t, n) {
        t.printTags && (n < e ? t.tag.hide() : t.tag.show());
      });
    }),
    (t.prototype.cleanup = function () {
      this.steps.forEach(function (t) {
        t.tag && t.tag.remove();
      });
    }),
    t
  );
})(jQuery, LpTag);
