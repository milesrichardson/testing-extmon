var VaultInfoBanner = (function (r, t, p, e) {
  "use strict";
  var a = function (t) {
    p.call(this, t, {
      maximizeButtonEnabled: !1,
      dynamicHeight: !0,
      hideHeader: !0,
      hideButtons: !0,
      confirmOnClose: !1,
      buttonsInsideContent: !0,
      isModal: !1
    }),
      (a.prototype._options = {});
  };
  function o(t) {
    var e = a.prototype._options.dimensions,
      o = r("#options"),
      n = r("#tools"),
      i = r("#sharingMenu"),
      s = r("#emergencyAccessMenu");
    t
      ? (o.removeAttr("style"), s.removeAttr("style"), n.removeAttr("style"), i.removeAttr("style"), r("#main").removeAttr("style"))
      : (o.is(":visible") &&
          (o.css("top", e.dialogPosition.top + e.dialogDimensions.height), r("#main").css("top", o.innerHeight() + o.offset().top + "px")),
        i.is(":visible") &&
          (o.css("top", e.dialogPosition.top + e.dialogDimensions.height),
          i.css("top", o.innerHeight() + o.offset().top + "px"),
          r("#main").css("top", i.innerHeight() + i.offset().top + "px")),
        n.is(":visible") &&
          (n.css("top", e.dialogPosition.top + e.dialogDimensions.height), r("#main").css("top", n.innerHeight() + n.offset().top + "px")),
        s.is(":visible") &&
          (o.css("top", e.dialogPosition.top + e.dialogDimensions.height),
          s.css("top", o.innerHeight() + o.offset().top + "px"),
          r("#main").css("top", s.innerHeight() + s.offset().top + "px")));
  }
  function i(t, e, o, n, i) {
    var s = 0;
    switch (t) {
      case "top":
      case "left":
        s = e ? o : o + n;
        break;
      case "right":
      case "bottom":
        s = e ? o + n - i : o - i;
    }
    return s;
  }
  function s(t, e, o, n, i) {
    var s = 0;
    switch (t) {
      case "top":
      case "left":
        s = e;
        break;
      case "right":
      case "bottom":
        s = e + o - i;
        break;
      default:
        s = n - Math.round(i / 2);
    }
    return s;
  }
  return (
    ((a.prototype = Object.create(p.prototype)).createButton = function (t, e, o, n) {
      var i, s, p, s;
      t &&
        e &&
        ((i = e.style || ""),
        (s = e.sizeStyle || "col-6"),
        (p = e.autoId || ""),
        (s = r("<div></div>")
          .addClass(s + " infoBtn")
          .append(
            r("<button></button>")
              .text(e.text)
              .data("index", o)
              .addClass("btn-base radius-sm " + i)
              .attr("automation-id", p)
              .off()
              .on("click", n)
          )),
        t.append(s));
    }),
    (a.prototype.setup = function (t, e) {
      if ((p.prototype.setup.apply(this, arguments), e)) {
        var o = this,
          e =
            ((a.prototype.$element = this.$element),
            (a.prototype._options = e || {}),
            a.prototype.sendSegmentEvent("show"),
            a.prototype.$element.removeClass().addClass("dialog responsive vault-info-banner"),
            a.prototype._options.dialogClass && a.prototype.$element.addClass(a.prototype._options.dialogClass),
            a.prototype.setText(a.prototype._options.title, a.prototype.$element.find("#mainTitle")),
            a.prototype.setTitleSize(a.prototype._options.titleSize, a.prototype.$element.find("#mainTitle")),
            "function" == typeof a.prototype._options.contentText1
              ? a.prototype._options.contentText1()
              : a.prototype._options.contentText1),
          e =
            (a.prototype.setText(e, a.prototype.$element.find("#contentText1")),
            "function" == typeof a.prototype._options.contentText2
              ? a.prototype._options.contentText2()
              : a.prototype._options.contentText2),
          e = (a.prototype.setText(e, a.prototype.$element.find("#contentText2")), t.find("#btnClose")),
          t,
          n =
            (a.prototype._options.hideXCloseBtn
              ? e.hide()
              : ((t = function (t) {
                  a.prototype._options.closeHandler &&
                    "function" == typeof a.prototype._options.closeHandler &&
                    a.prototype._options.closeHandler(),
                    a.prototype.sendSegmentEvent("close"),
                    o.close(!0);
                }),
                e.off().on("click", t)),
            o.$element.find(".buttons"));
        r(".infoBtn").remove(),
          "banner" === a.prototype._options.dialogClass && (n = o.$element.find(".mainTitle")),
          "migrationBanner" === a.prototype._options.dialogClass && (n = o.$element.find(".mainTitle")),
          (a.prototype._options.buttons = a.prototype._options.buttons || []);
        for (var i = 0, s; i < a.prototype._options.buttons.length; i++) {
          a.prototype.createButton(n, a.prototype._options.buttons[i], i, function (t) {
            t.preventDefault();
            var t = r(t.target).data("index"),
              t;
            r.isNumeric(t) &&
              0 <= t &&
              t < a.prototype._options.buttons.length &&
              (void 0 !== (t = a.prototype._options.buttons[t]).segment && a.prototype.sendSegmentEvent(t.segment),
              t.action && "function" == typeof t.action && t.action(),
              t.closeOnClick) &&
              o.close(!0);
          });
        }
        (a.prototype._options.dimensions = { targetId: "#header", align: "left", orientation: "top", fillWidth: "#main" }),
          r("#vault").addClass("vault-info-overrides"),
          a.prototype.setSize(a.prototype.$element, a.prototype._options.dimensions),
          a.prototype.setPosition(a.prototype.$element, a.prototype._options.dimensions),
          a.prototype.subscribeToWindowResize();
      }
    }),
    (a.prototype.setText = function (t, e) {
      t && e ? e.text(t).show() : e.hide();
    }),
    (a.prototype.setTitleSize = function (t, e) {
      e && e.removeClass().addClass(t || "col-10");
    }),
    (a.prototype.setPosition = function (t, e) {
      (e.dialogPosition = null),
        e &&
          e.targetId &&
          ((e.$targetEl = r(e.targetId)),
          (e.targetDimensions = a.prototype.getDimensions(e.$targetEl)),
          (e.dialogPosition = a.prototype.computeDialogPosition(t, e))),
        e.dialogPosition && t.offset(e.dialogPosition),
        o();
    }),
    (a.prototype.setSize = function (t, e) {
      var o, n;
      e &&
        ((e.$targetEl = r(e.targetId)),
        (o = a.prototype.getDimensions(e.$targetEl)),
        e.fillWidth ? ((n = r(e.fillWidth)) && 0 < n.length ? t.width(n.width()) : t.width(o.width)) : t.css("width", ""),
        e.fillHeight ? ((n = r(e.fillHeight)) && 0 < n.length ? t.height(n.height()) : t.height(o.height)) : t.css("height", ""));
    }),
    (a.prototype.subscribeToWindowResize = function () {
      (a.prototype.positionAndResizeHandler = function () {
        a.prototype.setPosition(a.prototype.$element, a.prototype._options.dimensions),
          a.prototype.setSize(a.prototype.$element, a.prototype._options.dimensions);
      }),
        window && window.addEventListener("resize", a.prototype.positionAndResizeHandler),
        e.get(e.VAULT_LEFT_MENU_TOGGLE).subscribe(a.prototype.positionAndResizeHandler),
        e.get(e.EMPTY_VAULT_STATE_CHANGE).subscribe(a.prototype.positionAndResizeHandler);
    }),
    (a.prototype.unSubscribeToWindowResize = function () {
      "function" == typeof a.prototype.positionAndResizeHandler &&
        (e.get(e.VAULT_LEFT_MENU_TOGGLE).unsubscribe(a.prototype.positionAndResizeHandler),
        e.get(e.EMPTY_VAULT_STATE_CHANGE).unsubscribe(a.prototype.positionAndResizeHandler),
        window) &&
        (window.removeEventListener && window.removeEventListener("resize", a.prototype.positionAndResizeHandler),
        (a.prototype.positionAndResizeHandler = null));
    }),
    (a.prototype.computeDialogPosition = function (t, e) {
      if (t && 0 < t.length && e && 0 < e.$targetEl.length) {
        e.dialogDimensions = a.prototype.getDimensions(t);
        var o = { top: 0, left: 0 },
          n = e.align || "center";
        switch (e.orientation) {
          case "top":
          case "bottom":
            (o.left = s(n, e.targetDimensions.left, e.targetDimensions.width, e.targetDimensions.center.left, e.dialogDimensions.width)),
              (o.top = i(e.orientation, e.inside, e.targetDimensions.top, e.targetDimensions.height, e.dialogDimensions.height));
            break;
          case "left":
          case "right":
            (o.top = s(n, e.targetDimensions.top, e.targetDimensions.height, e.targetDimensions.center.top, e.dialogDimensions.height)),
              (o.left = i(e.orientation, e.inside, e.targetDimensions.left, e.targetDimensions.width, e.dialogDimensions.width));
        }
        return e.offset && ((o.top += e.offset.top), (o.left += e.offset.left)), o;
      }
      return null;
    }),
    (a.prototype.getDimensions = function (t) {
      var t;
      return t && 0 < t.length
        ? (((t = r.extend({ height: t.height(), width: t.width() }, t.offset())).center = {
            top: Math.round(t.top + t.height / 2),
            left: Math.round(t.left + t.width / 2)
          }),
          t)
        : r.extend({ height: 0, width: 0 }, { top: 0, left: 0, center: { top: 0, left: 0 } });
    }),
    (a.prototype.close = function (t) {
      t &&
        (o(!0),
        r("#vault").removeClass("vault-info-overrides"),
        p.prototype.close.apply(this, arguments),
        a.prototype.unSubscribeToWindowResize());
    }),
    (a.prototype.getZIndex = function () {
      var t = a.prototype.$element ? a.prototype.$element.css("z-index") : "auto",
        t;
      return "auto" === t ? 0 : (t = parseInt(t)) < 8 ? 8 : t;
    }),
    (a.prototype.sendSegmentEvent = function (t) {
      var e;
      void 0 !== a.prototype._options.segmentEvents && void 0 !== a.prototype._options.segmentEvents[t]
        ? ((e = {}),
          void 0 !== a.prototype._options.segmentEvents[t].properties && (e = a.prototype._options.segmentEvents[t].properties),
          bg.sendLpImprove(a.prototype._options.segmentEvents[t].name, e))
        : console.log(t + " is not a defined segment event");
    }),
    a
  );
})(jQuery, Strings, Dialog, Topics);
