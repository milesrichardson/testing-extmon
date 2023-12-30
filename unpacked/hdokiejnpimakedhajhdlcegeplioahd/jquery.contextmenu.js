!(function (l) {
  (l.contextMenu = {
    shadow: !0,
    shadowOffset: 0,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    shadowWidthAdjust: -3,
    shadowHeightAdjust: -3,
    shadowOpacity: 0.2,
    shadowClass: "context-menu-shadow",
    shadowColor: "black",
    offsetX: 0,
    offsetY: 0,
    appendTo: "body",
    direction: "down",
    constrainToScreen: !0,
    showTransition: "show",
    hideTransition: "hide",
    showSpeed: null,
    hideSpeed: null,
    showCallback: null,
    hideCallback: null,
    className: "context-menu",
    itemClassName: "context-menu-item",
    itemHoverClassName: "context-menu-item-hover",
    disabledItemClassName: "context-menu-item-disabled",
    disabledItemHoverClassName: "context-menu-item-disabled-hover",
    separatorClassName: "context-menu-separator",
    innerDivClassName: "context-menu-item-inner",
    themePrefix: "context-menu-theme-",
    theme: "default",
    separator: "context-menu-separator",
    target: null,
    menu: null,
    shadowObj: null,
    bgiframe: null,
    shown: !1,
    useIframe: !1,
    create: function (e, t) {
      var n = l.extend({}, this, t);
      return (
        "string" == typeof e ? (n.menu = l(e)) : "function" == typeof e ? (n.menuFunction = e) : (n.menu = n.createMenu(e, n)),
        n.menu && (n.menu.css({ display: "none" }), l(n.appendTo).append(n.menu)),
        n.shadow && (n.createShadow(n), n.shadowOffset) && (n.shadowOffsetX = n.shadowOffsetY = n.shadowOffset),
        l("body").bind("contextmenu", function () {
          n.hide();
        }),
        n
      );
    },
    createIframe: function () {
      return l(
        '<iframe frameborder="0" tabindex="-1" src="javascript:false" style="display:block;position:absolute;z-index:-1;filter:Alpha(Opacity=0);"/>'
      );
    },
    createMenu: function (e, n) {
      for (
        var a = n.className,
          t =
            (l.each(n.theme.split(","), function (e, t) {
              a += " " + n.themePrefix + t;
            }),
            l("<table cellspacing=0 cellpadding=0></table>").click(function () {
              return n.hide(), !1;
            })),
          s = l("<tr></tr>"),
          o = l("<td></td>"),
          i = l('<div class="' + a + '"></div>'),
          d = 0,
          h;
        d < e.length;
        d++
      ) {
        if (e[d] == l.contextMenu.separator) i.append(n.createSeparator());
        else for (var r in e[d]) i.append(n.createMenuItem(r, e[d][r]));
      }
      return n.useIframe && o.append(n.createIframe()), t.append(s.append(o.append(i))), t;
    },
    createMenuItem: function (e, t) {
      var n = this,
        a = l.extend(
          {
            onclick: function () {},
            className: "",
            hoverClassName: n.itemHoverClassName,
            icon: "",
            disabled: !1,
            title: "",
            hoverItem: n.hoverItem,
            hoverItemOut: n.hoverItemOut
          },
          (t = "function" == typeof t ? { onclick: t } : t)
        ),
        t = a.icon ? "background-image:url(" + a.icon + ");" : "",
        s =
          ("" != t && (t = ' style="' + t + '"'),
          l(
            '<div class="' +
              n.itemClassName +
              " " +
              a.className +
              (a.disabled ? " " + n.disabledItemClassName : "") +
              '" title="' +
              a.title +
              '"></div>'
          )
            .click(function (e) {
              return !n.isItemDisabled(this) && a.onclick.call(n.target, this, n, e);
            })
            .hover(
              function () {
                a.hoverItem.call(this, n.isItemDisabled(this) ? n.disabledItemHoverClassName : a.hoverClassName);
              },
              function () {
                a.hoverItemOut.call(this, n.isItemDisabled(this) ? n.disabledItemHoverClassName : a.hoverClassName);
              }
            )),
        t = l('<div class="' + n.innerDivClassName + '"' + t + ">" + e + "</div>");
      return s.append(t), s;
    },
    createSeparator: function () {
      return l('<div class="' + this.separatorClassName + '"></div>');
    },
    isItemDisabled: function (e) {
      return l(e).is("." + this.disabledItemClassName);
    },
    hoverItem: function (e) {
      l(this).addClass(e);
    },
    hoverItemOut: function (e) {
      l(this).removeClass(e);
    },
    createShadow: function (e) {
      (e.shadowObj = l('<div class="' + e.shadowClass + '"></div>').css({
        display: "none",
        position: "absolute",
        zIndex: 9998,
        opacity: e.shadowOpacity,
        backgroundColor: e.shadowColor
      })),
        l(e.appendTo).append(e.shadowObj);
    },
    showShadow: function (e, t, n) {
      var a = this;
      a.shadow &&
        a.shadowObj
          .css({
            width: a.menu.width() + a.shadowWidthAdjust + "px",
            height: a.menu.height() + a.shadowHeightAdjust + "px",
            top: t + a.shadowOffsetY + "px",
            left: e + a.shadowOffsetX + "px"
          })
          .addClass(a.shadowClass)
          [a.showTransition](a.showSpeed);
    },
    beforeShow: function () {
      return !0;
    },
    show: function (e, t) {
      var n = this,
        a = t.pageX,
        s = t.pageY,
        e,
        a;
      (n.target = e),
        !1 !== n.beforeShow() &&
          (n.menuFunction &&
            (n.menu && l(n.menu).remove(),
            (n.menu = n.createMenu(n.menuFunction(n, e), n)),
            n.menu.css({ display: "none" }),
            l(n.appendTo).append(n.menu)),
          (e = n.menu),
          (a += n.offsetX),
          (s += n.offsetY),
          (a = n.getPosition(a, s, n, t)),
          n.showShadow(a.x, a.y, t),
          n.useIframe &&
            e
              .find("iframe")
              .css({
                width: e.width() + n.shadowOffsetX + n.shadowWidthAdjust,
                height: e.height() + n.shadowOffsetY + n.shadowHeightAdjust
              }),
          e.css({ top: a.y + "px", left: a.x + "px", position: "absolute", zIndex: 9999 })[n.showTransition](
            n.showSpeed,
            n.showCallback
              ? function () {
                  n.showCallback.call(n);
                }
              : null
          ),
          (n.shown = !0),
          l(document).one("click", null, function () {
            n.hide();
          }));
    },
    getPosition: function (e, t, n, a) {
      var e = e + n.offsetX,
        t = t + n.offsetY,
        s = l(n.menu).height(),
        o = l(n.menu).width(),
        i = n.direction,
        n,
        d,
        d,
        o;
      return (
        n.constrainToScreen &&
          ((d = (n = l(window)).height()), "down" == i && d / 2 < t && (i = "up"), (d = n.width()) < (o = e + o - n.scrollLeft())) &&
          (e -= o - d),
        "up" == i && (t -= s),
        { x: e, y: t }
      );
    },
    hide: function () {
      var e = this;
      e.shown &&
        (e.iframe && l(e.iframe).hide(),
        e.menu &&
          e.menu[e.hideTransition](
            e.hideSpeed,
            e.hideCallback
              ? function () {
                  e.hideCallback.call(e);
                }
              : null
          ),
        e.shadow) &&
        e.shadowObj[e.hideTransition](e.hideSpeed),
        (e.shown = !1);
    }
  }),
    (l.fn.contextMenu = function (e, t) {
      var n = l.contextMenu.create(e, t);
      return this.each(function () {
        l(this).bind("contextmenu", function (e) {
          return n.show(this, e), !1;
        });
      });
    });
})(jQuery);
