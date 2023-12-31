var fn_addin = function (t, s, e) {
  var n = n || {};
  return (
    (n.styles = n.styles || {}),
    (n.commands = n.commands || {}),
    (n.dependencies = e || n.dependencies || {}),
    (n.styles.style = function () {}),
    (n.views = n.views || {}),
    (n.collect = n.collect || {}),
    (n.models = n.models || {}),
    (n.templates = n.templates || {}),
    (n.info = {
      widget: !0,
      placeholderType: "none",
      id: "bookmarks-primer",
      region: "top-bar",
      autoLoad: !0,
      addin: "1369894c-efef-4d5f-9bd6-3e136e09c5e8"
    }),
    t.console.log(t.elapsed() + ": " + n.info.id + " started"),
    (n.templates = n.templates || {}),
    (n.templates.primer = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (e, s, i, o, t) {
        var n,
          r =
            e.lookupProperty ||
            function (e, s) {
              if (Object.prototype.hasOwnProperty.call(e, s)) return e[s];
            };
        return (
          '<div class="overlay-permissions-content" data-test="overlay-permissions">\n\t<div class="overlay-permissions-icon"><i class="icon-angle-up"></i></div>\n\t<div class="overlay-permissions-content-title">Would you like to see your bookmarks?</div>\n\t<div class="overlay-permissions-content-description">' +
          e.escapeExpression(
            "function" == typeof (n = null != (n = r(i, "browser") || (null != s ? r(s, "browser") : s)) ? n : e.hooks.helperMissing)
              ? n.call(null != s ? s : e.nullContext || {}, {
                  name: "browser",
                  hash: {},
                  data: t,
                  loc: { start: { line: 4, column: 54 }, end: { line: 4, column: 65 } }
                })
              : n
          ) +
          " requires your permission.</div>\n</div>\n"
        );
      },
      useData: !0
    })),
    (n.commands.enableBookmarks = t.models.Command.extend({
      defaults: { id: "settings.enableBookmarks" },
      execute: function (e) {
        var s = e.callback,
          i = t.models.customization;
        if (i.get("bookmarksVisible")) return i.save("bookmarksVisible", !1), void s();
        function o() {
          i.save("bookmarksVisible", !0), s();
        }
        !(function () {
          try {
            t.utils.getBrowser().bookmarks.get("1", function () {}), o();
          } catch (e) {
            new n.views.BookmarksPrimer({
              callback: function () {
                o();
              }
            }).render();
          }
        })();
      }
    })),
    (n.views.BookmarksPrimer = Backbone.View.extend({
      template: n.templates.primer,
      attributes: { class: "overlay overlay-permissions" },
      initialize: function (e) {
        this.callback = e.callback;
      },
      render: function () {
        (this.browser = t.utils.getBrowserName()),
          this.$el.html(this.template(this)),
          s("body").addClass("blur"),
          this.$el.remove(),
          this.$el.appendTo("body").addClass("show");
        var e = this;
        return (
          setTimeout(function () {
            e.$el.addClass("show-animate");
          }, 2),
          this.requestPermissions(),
          this
        );
      },
      hidePrimer: function () {
        s("body").removeClass("blur"), this.$el.removeClass("show-animate");
        var e = this;
        setTimeout(function () {
          e.$el.removeClass("show");
        }, 500);
      },
      requestPermissions: function () {
        var s = t.models.bookmarksSettings,
          e = { permissions: s.permissions.permissions, origins: s.permissions.origins },
          i = this;
        t.utils.getBrowser().permissions.request(e, function (e) {
          i.hidePrimer(), e ? (s.set("allowed", !0), i.callback()) : (s.set("allowed", !1), s.optionsChanged());
        });
      }
    })),
    t.widgetManager.appReady("bookmarks-primer"),
    n
  );
};
m.addinManager && m.addinManager.registerAddinFn("1369894c-efef-4d5f-9bd6-3e136e09c5e8", fn_addin);
