!(function (s) {
  "use strict";
  var t = function (t) {
    return (
      (this.options = s.extend({ id: "tile", name: "", iconSrc: "", tileClass: "", iconClass: "icon-default", clickHandler: null }, t)),
      (this.$tileEl = null),
      this.setupTile(),
      this
    );
  };
  (t.prototype.setupTile = function () {
    var t = s("<div></div>")
        .addClass("col-10 no-left-gutter text full-height")
        .append(s("<span></span>").text(this.options.name).addClass("txt-semibold"))
        .click(this.options.clickHandler),
      i = this.setupIcon(this.options.iconSrc).click(this.options.clickHandler);
    return (this.$tileEl = s("<div></div>")
      .addClass("tile col-12 " + this.options.tileClass)
      .attr("tabindex", "1")
      .attr("id", this.options.id)
      .append(s("<div></div>").addClass("row").append(i, t)));
  }),
    (t.prototype.setupIcon = function (t) {
      return s("<div></div>")
        .addClass("col-3 no-right-gutter")
        .append(s("<div></div>").addClass("icon").append(s("<img/>").attr("src", t).addClass(this.options.iconClass)));
    }),
    (window.lpTile = t);
})(jQuery);
