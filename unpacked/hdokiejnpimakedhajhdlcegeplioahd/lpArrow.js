!(function (t) {
  "use strict";
  var o = function (o) {
    return (this.options = t.extend({ $parentEl: null, $arrowEl: null, arrowClass: "arrow-box" }, o)), this.setup(), this;
  };
  (o.prototype.setup = function () {
    this.options.$parentEl &&
      ((this.options.$arrowEl = t("<div></div>").addClass(this.options.arrowClass)), this.options.$parentEl.append(this.options.$arrowEl));
  }),
    (o.prototype.setPosition = function (o, t) {
      this.options.$arrowEl &&
        (o
          ? (this.options.$arrowEl.css("left", t + "px"), this.options.$arrowEl.css("top", ""))
          : (this.options.$arrowEl.css("left", ""), this.options.$arrowEl.css("top", t + "px")));
    }),
    (o.prototype.show = function (o, t) {
      if (this.options.$arrowEl)
        if (o && t) {
          switch ((this.options.$arrowEl.removeClass("a-top a-bottom a-left a-right"), o)) {
            case "top":
              this.options.$arrowEl.addClass("a-top"), this.setPosition(!0, t);
              break;
            case "bottom":
              this.options.$arrowEl.addClass("a-bottom"), this.setPosition(!0, t);
              break;
            case "left":
              this.options.$arrowEl.addClass("a-left"), this.setPosition(!1, t);
              break;
            case "right":
              this.options.$arrowEl.addClass("a-right"), this.setPosition(!1, t);
          }
          this.options.$arrowEl.show();
        } else this.options.$arrowEl.hide();
    }),
    (o.prototype.hide = function () {
      this.options.$parentEl && this.options.$parentEl.removeClass(this.options.arrowClass),
        this.options.$arrowEl && this.options.$arrowEl.hide();
    }),
    (window.lpArrow = o);
})(jQuery);
