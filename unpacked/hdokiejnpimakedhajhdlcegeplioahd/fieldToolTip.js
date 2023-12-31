var FieldToolTip = function (o) {
  (FieldToolTip.prototype.options = $.extend({ parentEl: $("body"), tips: [], currentTipIndex: null, isPopup: !1 }, o)),
    FieldToolTip.prototype.setup();
};
!(function (p) {
  function i(o) {
    o.find(".tip-more-btn").click(function () {
      o.find(".tip-more").slideToggle(200);
    });
  }
  (FieldToolTip.prototype.showTip = function (o) {
    if (0 <= o && o < FieldToolTip.prototype.options.tips.length) {
      if (null !== FieldToolTip.prototype.options.currentTipIndex) {
        if (FieldToolTip.prototype.options.currentTipIndex === o) return;
        this.hideAllTips(), (FieldToolTip.prototype.options.currentTipIndex = null);
      }
      FieldToolTip.prototype.options.isPopup
        ? (FieldToolTip.prototype.options.tips[o].toolTipEl.show(),
          FieldToolTip.prototype.options.arrow &&
            FieldToolTip.prototype.options.arrow.show("left", FieldToolTip.prototype.options.tips[o].inputEl.offset().top + 6))
        : FieldToolTip.prototype.options.tips[o].toolTipEl.slideDown(200),
        (FieldToolTip.prototype.options.currentTipIndex = o);
    }
  }),
    (FieldToolTip.prototype.hideTip = function (o) {
      0 <= o &&
        o < FieldToolTip.prototype.options.tips.length &&
        (FieldToolTip.prototype.options.isPopup
          ? FieldToolTip.prototype.options.tips[o].toolTipEl.hide()
          : FieldToolTip.prototype.options.tips[o].toolTipEl.slideUp(200));
    }),
    (FieldToolTip.prototype.hideAllTips = function () {
      for (var o = 0; o < FieldToolTip.prototype.options.tips.length; o++) this.hideTip(o);
    }),
    (FieldToolTip.prototype.setup = function () {
      FieldToolTip.prototype.options.parentEl.find("[fieldToolTipInputId]").each(function () {
        var o = this.getAttribute("fieldToolTipInputId");
        FieldToolTip.prototype.options.tips.push({ inputEl: FieldToolTip.prototype.options.parentEl.find("#" + o), toolTipEl: p(this) });
      });
      for (var o = 0; o < FieldToolTip.prototype.options.tips.length; o++)
        FieldToolTip.prototype.options.tips[o] &&
          FieldToolTip.prototype.options.tips[o].inputEl &&
          FieldToolTip.prototype.options.tips[o].toolTipEl &&
          (i(FieldToolTip.prototype.options.tips[o].toolTipEl),
          FieldToolTip.prototype.options.tips[o].inputEl.bind("focus", function (i) {
            var o = p.map(FieldToolTip.prototype.options.tips, function (o, p) {
              if (o.inputEl[0] === i.currentTarget) return p;
            });
            o && 0 < o.length && FieldToolTip.prototype.showTip(o[0]);
          }));
    });
})(jQuery);
