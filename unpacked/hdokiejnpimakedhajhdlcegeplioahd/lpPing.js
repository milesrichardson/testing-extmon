var LpPing = (function (n) {
  "use strict";
  var i = function (i) {
      return (
        (this.options = n.extend(
          {
            $parentEl: null,
            $pingEl: null,
            id: "ping",
            pingClass: "ping-container",
            orientation: null,
            targetId: null,
            pingOffset: { top: 0, left: 0 }
          },
          i
        )),
        this.setup(),
        this
      );
    },
    o =
      ((i.prototype.setup = function () {
        this.options.$parentEl &&
          ((this.options.$pingEl = n("<div></div>")
            .attr("id", this.options.id)
            .addClass(this.options.pingClass)
            .append(
              n("<div></div>")
                .attr("id", this.options.id + "_ring1")
                .addClass("ring")
            )
            .append(
              n("<div></div>")
                .attr("id", this.options.id + "_ring2")
                .addClass("ring")
            )
            .append(
              n("<div></div>")
                .attr("id", this.options.id + "_dot")
                .addClass("dot")
            )),
          this.options.$parentEl.append(this.options.$pingEl));
      }),
      function (i) {
        var i;
        return i && "object" == typeof i && 0 < i.length
          ? (((i = n.extend({ height: i.height(), width: i.width() }, i.offset())).center = {
              top: Math.round(i.top + i.height / 2),
              left: Math.round(i.left + i.width / 2)
            }),
            i)
          : null;
      });
  return (
    (i.prototype.subscribeToWindowResize = function () {
      var t = this;
      return (
        (t.positionAndResizeHandler = function (i) {
          t.setPosition();
        }),
        window && window.addEventListener("resize", t.positionAndResizeHandler),
        Topics.get(Topics.VAULT_LEFT_MENU_TOGGLE).subscribe(t.positionAndResizeHandler),
        t
      );
    }),
    (i.prototype.unSubscribeToWindowResize = function () {
      var i = this;
      return (
        "function" == typeof i.positionAndResizeHandler &&
          (Topics.get(Topics.VAULT_LEFT_MENU_TOGGLE).unsubscribe(i.positionAndResizeHandler), window) &&
          (window.removeEventListener && window.removeEventListener("resize", i.positionAndResizeHandler),
          (i.positionAndResizeHandler = null)),
        i
      );
    }),
    (i.prototype.setPosition = function () {
      if (this.options.$pingEl && this.options.orientation && this.options.targetId) {
        this.options.$pingEl.css("top", ""),
          this.options.$pingEl.css("bottom", ""),
          this.options.$pingEl.css("left", ""),
          this.options.$pingEl.css("right", "");
        var i = { top: 0, left: 0 },
          t = o(n(this.options.targetId));
        switch (
          (t && ((i.top = t.center.top + this.options.pingOffset.top), (i.left = t.center.left + this.options.pingOffset.left)),
          this.options.orientation)
        ) {
          case "top":
          case "bottom":
          case "left":
          case "right":
            this.options.$pingEl.css("left", i.left + "px"), this.options.$pingEl.css("top", i.top + "px");
        }
      }
    }),
    (i.prototype.show = function () {
      return this.options.$pingEl && (this.setPosition(), this.options.$pingEl.show()), this;
    }),
    (i.prototype.hide = function () {
      return this.options.$pingEl && this.options.$pingEl.hide(), this;
    }),
    (i.prototype.activate = function () {
      return (
        this.options.$pingEl &&
          (this.options.$pingEl.find("#" + this.options.id + "_ring1").addClass("ping"),
          this.options.$pingEl.find("#" + this.options.id + "_ring2").addClass("ping-2"),
          this.options.$pingEl.find("#" + this.options.id + "_dot").addClass("breathe")),
        this
      );
    }),
    (i.prototype.deActivate = function () {
      return (
        this.options.$pingEl &&
          (this.options.$pingEl.find("#" + this.options.id + "_ring1").removeClass("ping"),
          this.options.$pingEl.find("#" + this.options.id + "_ring2").removeClass("ping-2"),
          this.options.$pingEl.find("#" + this.options.id + "_dot").removeClass("breathe")),
        this
      );
    }),
    i
  );
})(jQuery);
