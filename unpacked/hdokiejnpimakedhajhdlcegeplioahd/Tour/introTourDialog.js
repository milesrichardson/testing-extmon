var IntroTourDialog = (function (p, h, c, d, g) {
  "use strict";
  var e = function (t) {
    d.call(this, t, {
      closeButtonEnabled: !1,
      maximizeButtonEnabled: !1,
      dynamicHeight: !0,
      hideHeader: !0,
      hideButtons: !0,
      confirmOnClose: !1,
      buttonsInsideContent: !0,
      isModal: !1,
      submitDialog: !1
    }),
      (e.prototype._arrow = null),
      (e.prototype._options = null);
  };
  function s(t, e, i, o, n) {
    var s = 0;
    switch (t) {
      case "top":
      case "left":
        s = e ? i : i + o;
        break;
      case "right":
      case "bottom":
        s = e ? i + o - n : i - n;
    }
    return s;
  }
  function r(t, e, i, o, n) {
    var s = 0;
    switch (t) {
      case "top":
      case "left":
        s = e;
        break;
      case "right":
      case "bottom":
        s = e + i - n;
        break;
      default:
        s = o - Math.round(n / 2);
    }
    return s;
  }
  return (
    (((e.prototype = Object.create(d.prototype)).constructor = e).prototype.createButton = function (t, e, i, o, n) {
      var s, r, a, r;
      t &&
        e &&
        ((s = e.style || ""),
        (r = e.sizeStyle || "col-6"),
        (a = e.autoId || ""),
        (r = p("<div></div>")
          .addClass(r)
          .append(
            p("<button></button>")
              .text(e.text)
              .data("index", i)
              .addClass("btn-base radius-sm " + s)
              .attr({ "automation-id": a, tabindex: n ? 9 : 0 })
              .off()
              .on("click", o)
          )),
        t.append(r));
    }),
    (e.prototype.setup = function (t, o) {
      if (o && o.options && o.flow) {
        for (
          var n = this,
            e =
              (void 0 !== o.flow.currentStepIndex && 0 <= o.flow.currentStepIndex && p(".focusCycler").attr("tabindex", 0),
              (n._options = p.extend({ title: c.translateString("Tour") }, o.options)),
              n.$element.find(".buttons").empty()),
            s =
              (n.$element.removeClass().addClass("dialog responsive intro-tour-dialog"),
              n._options.class && n.$element.addClass(n._options.class),
              function (t) {
                t && ("string" == typeof t ? o.flow.executeAction(t) : t.event && o.flow.executeAction(t.event, t.params));
              }),
            i = 0,
            r;
          i < n._options.buttons.length;
          i++
        ) {
          this.createButton(
            e,
            n._options.buttons[i],
            i,
            function (t) {
              t.preventDefault(), o.flow.closeCurrentStep();
              var t = p(t.target).data("index");
              if (p.isNumeric(t) && 0 <= t && t < n._options.buttons.length) {
                var e = n._options.buttons[t];
                if (e.action && Array.isArray(e.action)) for (var i = 0; i < e.action.length; i++) s(e.action[i]);
                else s(e.action);
              }
            },
            o.options.shouldDisableCycleHandler
          );
        }
        var a = t.find("#btnClose"),
          l,
          a =
            (a.attr("tabindex", o.options.shouldDisableCycleHandler ? 10 : 0),
            n._options.hideXCloseBtn
              ? a.hide()
              : ((l = function (t) {
                  t.preventDefault(), o.flow.closeCurrentStep(), n._options.exitAction && o.flow.executeAction(n._options.exitAction);
                }),
                a.off().on("click", l)),
            this.setText(this._options.title, this.$element.find("#mainTitle")),
            "function" == typeof this._options.contentText1 ? this._options.contentText1() : this._options.contentText1),
          l =
            (this.setText(a, this.$element.find("#contentText1")),
            "function" == typeof this._options.contentText2 ? this._options.contentText2() : this._options.contentText2),
          a,
          l,
          l;
        this.setText(l, this.$element.find("#contentText2")),
          n._options.contentImage &&
            n._options.contentImage.src &&
            0 === this.$element.find("." + n._options.contentImage.style).length &&
            ((a = p("<img />").addClass(n._options.contentImage.style).attr("src", n._options.contentImage.src)),
            (l = t.find("#contentSection1")),
            "after" === n._options.contentImage.placement ? l.append(a) : l.prepend(a)),
          n._options.contentLink &&
            n._options.contentLink.href &&
            n._options.contentLink.text &&
            ((l = p("<a>")
              .addClass(n._options.contentLink.style)
              .attr("target", "_blank")
              .attr("href", n._options.contentLink.href)
              .text(n._options.contentLink.text)),
            t.find("#contentSection1 p").append(" ").append(l)),
          d.prototype.setup.apply(this, arguments),
          this.setSize(this._options.position),
          this.setPosition(this._options.position),
          this._options.position && this._options.position.arrowPosition
            ? ((this._arrow = this._arrow || new h({ $parentEl: this.$element, arrowClass: "arrow-box a-white" })),
              this._arrow.show(this._options.position.orientation, this._options.position.arrowPosition))
            : this._arrow && this._arrow.hide(),
          (this.$overlayDialogEl = p("#dialogOverlay")),
          this.$overlayDialogEl && 0 < this.$overlayDialogEl.length && this.$overlayDialogEl.detach(),
          this.subscribeToWindowResize();
      }
      g.get(g.INTRO_TOURS_LOADED).publish();
    }),
    (e.prototype.setText = function (t, e) {
      t && e ? e.text(t).show() : e.hide();
    }),
    (e.prototype.setPosition = function (t) {
      (t.dialogPosition = null),
        t &&
          t.targetId &&
          ((t.$targetEl = p(t.targetId)),
          (t.targetDimensions = this.getDimensions(t.$targetEl)),
          (t.dialogPosition = this.computeDialogPosition(this.$element, t))),
        t.dialogPosition && this.$element.offset(t.dialogPosition);
    }),
    (e.prototype.setSize = function (t) {
      var e, i;
      t &&
        ((t.$targetEl = p(t.targetId)),
        (e = this.getDimensions(t.$targetEl)),
        t.fillWidth
          ? (i = p(t.fillWidth)) && 0 < i.length
            ? this.$element.width(i.width())
            : this.$element.width(e.width)
          : this.$element.css("width", ""),
        t.fillHeight
          ? (i = p(t.fillHeight)) && 0 < i.length
            ? this.$element.height(i.height())
            : this.$element.height(e.height)
          : this.$element.css("height", ""));
    }),
    (e.prototype.subscribeToWindowResize = function () {
      var t = this;
      (t.positionAndResizeHandler = function () {
        t.setSize(t._options.position), t.setPosition(t._options.position);
      }),
        window && window.addEventListener("resize", t.positionAndResizeHandler),
        g.get(g.VAULT_LEFT_MENU_TOGGLE).subscribe(t.positionAndResizeHandler),
        g.get(g.EMPTY_VAULT_STATE_CHANGE).subscribe(t.positionAndResizeHandler);
    }),
    (e.prototype.unSubscribeToWindowResize = function () {
      var t = this;
      "function" == typeof t.positionAndResizeHandler &&
        (g.get(g.VAULT_LEFT_MENU_TOGGLE).unsubscribe(t.positionAndResizeHandler),
        g.get(g.EMPTY_VAULT_STATE_CHANGE).unsubscribe(t.positionAndResizeHandler),
        window) &&
        (window.removeEventListener && window.removeEventListener("resize", t.positionAndResizeHandler),
        (t.positionAndResizeHandler = null));
    }),
    (e.prototype.computeDialogPosition = function (t, e) {
      if (t && 0 < t.length && e && 0 < e.$targetEl.length) {
        var i = e.arrowPosition ? 15 : 0,
          o = ((e.dialogDimensions = this.getDimensions(t)), { top: 0, left: 0 }),
          n = e.align || "center";
        switch (e.orientation) {
          case "top":
            (o.left = r(n, e.targetDimensions.left, e.targetDimensions.width, e.targetDimensions.center.left, e.dialogDimensions.width)),
              (o.top = s(e.orientation, e.inside, e.targetDimensions.top, e.targetDimensions.height, e.dialogDimensions.height) + i);
            break;
          case "bottom":
            (o.left = r(n, e.targetDimensions.left, e.targetDimensions.width, e.targetDimensions.center.left, e.dialogDimensions.width)),
              (o.top = s(e.orientation, e.inside, e.targetDimensions.top, e.targetDimensions.height, e.dialogDimensions.height) - i);
            break;
          case "left":
            (o.top = r(n, e.targetDimensions.top, e.targetDimensions.height, e.targetDimensions.center.top, e.dialogDimensions.height)),
              (o.left = s(e.orientation, e.inside, e.targetDimensions.left, e.targetDimensions.width, e.dialogDimensions.width) + i);
            break;
          case "right":
            (o.top = r(n, e.targetDimensions.top, e.targetDimensions.height, e.targetDimensions.center.top, e.dialogDimensions.height)),
              (o.left = s(e.orientation, e.inside, e.targetDimensions.left, e.targetDimensions.width, e.dialogDimensions.width) - i);
        }
        return e.offset && ((o.top += e.offset.top), (o.left += e.offset.left)), o;
      }
      return null;
    }),
    (e.prototype.getDimensions = function (t) {
      var t;
      return t && 0 < t.length
        ? (((t = p.extend({ height: t.height(), width: t.width() }, t.offset())).center = {
            top: Math.round(t.top + t.height / 2),
            left: Math.round(t.left + t.width / 2)
          }),
          t)
        : null;
    }),
    (e.prototype.close = function (t) {
      t && (d.prototype.close.apply(this, arguments), this.unSubscribeToWindowResize());
    }),
    (e.prototype.showBlurOverlay = function () {}),
    (e.prototype.hideBlurOverlay = function () {}),
    (e.prototype.closeOnSuccess = function () {}),
    (e.prototype.focus = function () {
      var t = document.querySelector(".take-tour");
      t && t.focus();
    }),
    (e.prototype.getZIndex = function () {
      var t = this.$element.css("z-index"),
        t;
      return "auto" === t ? 0 : (t = parseInt(t)) < 8 ? 8 : t;
    }),
    e
  );
})(jQuery, lpArrow, Strings, Dialog, Topics);
