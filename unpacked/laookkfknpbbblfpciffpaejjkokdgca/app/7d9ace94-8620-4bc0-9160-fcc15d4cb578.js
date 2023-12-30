var fn_addin = function (t, a, e) {
  var s = {};
  return (
    (s.styles = s.styles || {}),
    (s.commands = s.commands || {}),
    (s.dependencies = e || s.dependencies || {}),
    (s.styles.style = function () {}),
    (s.views = s.views || {}),
    (s.collect = s.collect || {}),
    (s.models = s.models || {}),
    (s.templates = s.templates || {}),
    (s.info = {
      widget: !0,
      placeholderType: "metric",
      id: "dashlinks",
      class: "app-container dashlinks",
      region: "top-left",
      order: "prepend",
      after: ".team-logo",
      addin: "7d9ace94-8620-4bc0-9160-fcc15d4cb578"
    }),
    t.console.log(t.elapsed() + ": " + s.info.id + " started"),
    (s.templates = s.templates || {}),
    (s.templates.dashlinks = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (e, a, t, s, n) {
        var i = null != a ? a : e.nullContext || {},
          l = e.hooks.helperMissing,
          o =
            e.lookupProperty ||
            function (e, a) {
              if (Object.prototype.hasOwnProperty.call(e, a)) return e[a];
            };
        return (
          '<span class="app-dash app-dash-icon dashlinks-icon-wrapper" data-momo-id="chromeTab" data-analytics-id="browser tab" data-place="dash" data-url="chrome-search://local-ntp/local-ntp.html" title="' +
          e.escapeExpression(
            "function" == typeof (e = null != (e = o(t, "browserName") || (null != a ? o(a, "browserName") : a)) ? e : l)
              ? e.call(i, {
                  name: "browserName",
                  hash: {},
                  data: n,
                  loc: { start: { line: 1, column: 194 }, end: { line: 1, column: 209 } }
                })
              : e
          ) +
          ' Tab">' +
          (null !=
          (e = (o(t, "browserIcon") || (a && o(a, "browserIcon")) || l).call(i, "dashlinks-icon", {
            name: "browserIcon",
            hash: {},
            data: n,
            loc: { start: { line: 1, column: 215 }, end: { line: 1, column: 249 } }
          }))
            ? e
            : "") +
          "</span>\n"
        );
      },
      useData: !0
    })),
    (s.styles = s.styles || {}),
    (s.styles.style = function () {
      var e = document.createElement("style");
      (e.type = "text/css"),
        (e.innerHTML =
          ".dashlinks{flex:0 0 auto;order:8;--side-padding:10px}.dashlinks-icon-wrapper{min-height:var(--top-and-bottom-row-min-height);max-height:var(--max-height);cursor:pointer;filter:drop-shadow(0 1px 5px rgba(0, 0, 0, .1));transition:opacity .1s ease}.dashlinks-icon-wrapper:hover{opacity:1}.dashlinks-icon-wrapper:active{opacity:.9;transition-duration:0s}.dashlinks .dashlinks-icon{height:18px;width:18px;margin:0;fill:#fff!important;vertical-align:-4%}"),
        document.getElementsByTagName("head")[0].appendChild(e);
    }),
    (s.views.DashLinks = Backbone.View.extend({
      template: s.templates.dashlinks,
      events: { "click .dashlinks-icon-wrapper": "handleClick" },
      initialize: function () {
        this.listenTo(t.models.bookmarksSettings, "change:chromeTabLocation", this.checkOptionalLinks), this.render();
      },
      checkInclusion: function (e) {
        var a = t.models.bookmarksSettings.get(e.data("momo-id") + "Location") === e.data("place");
        return a && !e.is(":visible") ? this.$el.append(e) : a || e.remove(), a;
      },
      checkOptionalLinks: function () {
        var a = this,
          t = !1;
        this.dashItems &&
          this.dashItems.forEach(function (e) {
            t = a.checkInclusion(e) || t;
          }),
          this.$el.toggleClass("app-container", t);
      },
      render: function () {
        var e;
        return (
          t.utils.isChromium()
            ? (this.$el.html(this.template()),
              (this.dashItems = []),
              (e = this).$(".app-dash").each(function () {
                e.dashItems.push(a(this));
              }),
              this.checkOptionalLinks(),
              this.triggerLoaded())
            : this.triggerLoaded(),
          this
        );
      },
      triggerLoaded: function () {
        this.loadTriggered || (t.widgetManager.appReady(s.info.id), (this.loadTriggered = !0));
      },
      handleClick: function (e) {
        e.stopPropagation(), e.preventDefault();
        var a = e.delegatedTarget.getAttribute("data-analytics-id"),
          a = (a && t.Analytics.capture(a + " click", { feature: "dashlinks" }), e.delegatedTarget.dataset.url || e.delegatedTarget.href);
        t.models.bookmarksSettings.get("openInNewTab") || e.metaKey
          ? t.utils.getBrowser().tabs.create({ url: a, active: !1 })
          : t.utils.getBrowser().tabs.update({ url: a });
      }
    })),
    s.styles.style(),
    (s.views.dashlinks = t.widgetManager.handover("dashlinks", s.views.DashLinks, { region: "top-left", order: "prepend" })),
    s
  );
};
m.addinManager && m.addinManager.registerAddinFn("7d9ace94-8620-4bc0-9160-fcc15d4cb578", fn_addin);
