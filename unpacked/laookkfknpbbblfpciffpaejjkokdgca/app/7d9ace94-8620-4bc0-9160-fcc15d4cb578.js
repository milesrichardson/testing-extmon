var fn_addin = function (s, t, e) {
  var a = a || {};
  return (
    (a.styles = a.styles || {}),
    (a.commands = a.commands || {}),
    (a.dependencies = e || a.dependencies || {}),
    (a.styles.style = function () {}),
    (a.views = a.views || {}),
    (a.collect = a.collect || {}),
    (a.models = a.models || {}),
    (a.templates = a.templates || {}),
    (a.info = {
      widget: !0,
      placeholderType: "metric",
      id: "dashlinks",
      class: "app-container dashlinks",
      region: "top-left",
      order: "prepend",
      after: ".team-logo",
      addin: "7d9ace94-8620-4bc0-9160-fcc15d4cb578"
    }),
    s.console.log(s.elapsed() + ": " + a.info.id + " started"),
    (a.templates = a.templates || {}),
    (a.templates.dashlinks = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (e, t, a, s, n) {
        var i,
          r,
          l = null != t ? t : e.nullContext || {},
          o = e.hooks.helperMissing,
          d =
            e.lookupProperty ||
            function (e, t) {
              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
            };
        return (
          '<span class="app-dash app-dash-icon dashlinks-icon-wrapper" data-momo-id="chromeTab" data-analytics-id="browser tab" data-place="dash" data-url="chrome-search://local-ntp/local-ntp.html" title="' +
          e.escapeExpression(
            "function" == typeof (r = null != (r = d(a, "browserName") || (null != t ? d(t, "browserName") : t)) ? r : o)
              ? r.call(l, {
                  name: "browserName",
                  hash: {},
                  data: n,
                  loc: { start: { line: 1, column: 194 }, end: { line: 1, column: 209 } }
                })
              : r
          ) +
          ' Tab">' +
          (null !=
          (i = (d(a, "browserIcon") || (t && d(t, "browserIcon")) || o).call(l, "dashlinks-icon", {
            name: "browserIcon",
            hash: {},
            data: n,
            loc: { start: { line: 1, column: 215 }, end: { line: 1, column: 249 } }
          }))
            ? i
            : "") +
          "</span>\n"
        );
      },
      useData: !0
    })),
    (a.styles = a.styles || {}),
    (a.styles.style = function () {
      var e = document.createElement("style");
      (e.type = "text/css"),
        (e.innerHTML =
          ".dashlinks{flex:0 0 auto;order:8;--side-padding:10px}.dashlinks-icon-wrapper{min-height:var(--top-and-bottom-row-min-height);max-height:var(--max-height);cursor:pointer;filter:drop-shadow(0 1px 5px rgba(0, 0, 0, .1));transition:opacity .1s ease}.dashlinks-icon-wrapper:hover{opacity:1}.dashlinks-icon-wrapper:active{opacity:.9;transition-duration:0s}.dashlinks .dashlinks-icon{height:18px;width:18px;margin:0;fill:#fff!important;vertical-align:-4%}"),
        document.getElementsByTagName("head")[0].appendChild(e);
    }),
    (a.views.DashLinks = Backbone.View.extend({
      template: a.templates.dashlinks,
      events: { "click .dashlinks-icon-wrapper": "handleClick" },
      initialize: function () {
        this.listenTo(s.models.bookmarksSettings, "change:chromeTabLocation", this.checkOptionalLinks), this.render();
      },
      checkInclusion: function (e) {
        var t = s.models.bookmarksSettings.get(e.data("momo-id") + "Location") === e.data("place");
        return t && !e.is(":visible") ? this.$el.append(e) : t || e.remove(), t;
      },
      checkOptionalLinks: function () {
        var t = this,
          a = !1;
        this.dashItems &&
          this.dashItems.forEach(function (e) {
            a = t.checkInclusion(e) || a;
          }),
          this.$el.toggleClass("app-container", a);
      },
      render: function () {
        if (!s.utils.isChromium()) return this.triggerLoaded(), this;
        this.$el.html(this.template()), (this.dashItems = []);
        var e = this;
        return (
          this.$(".app-dash").each(function () {
            e.dashItems.push(t(this));
          }),
          this.checkOptionalLinks(),
          this.triggerLoaded(),
          this
        );
      },
      triggerLoaded: function () {
        this.loadTriggered || (s.widgetManager.appReady(a.info.id), (this.loadTriggered = !0));
      },
      handleClick: function (e) {
        e.stopPropagation(), e.preventDefault();
        var t = e.delegatedTarget.getAttribute("data-analytics-id");
        t && s.Analytics.capture(t + " click", { feature: "dashlinks" });
        var a = e.delegatedTarget.dataset.url || e.delegatedTarget.href;
        s.models.bookmarksSettings.get("openInNewTab") || e.metaKey
          ? s.utils.getBrowser().tabs.create({ url: a, active: !1 })
          : s.utils.getBrowser().tabs.update({ url: a });
      }
    })),
    a.styles.style(),
    (a.views.dashlinks = s.widgetManager.handover("dashlinks", a.views.DashLinks, { region: "top-left", order: "prepend" })),
    a
  );
};
m.addinManager && m.addinManager.registerAddinFn("7d9ace94-8620-4bc0-9160-fcc15d4cb578", fn_addin);