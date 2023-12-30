var fn_addin = function (e, n, a) {
  var s = {};
  return (
    (s.styles = s.styles || {}),
    (s.commands = s.commands || {}),
    (s.dependencies = a || s.dependencies || {}),
    (s.styles.style = function () {}),
    (s.views = s.views || {}),
    (s.collect = s.collect || {}),
    (s.models = s.models || {}),
    (s.templates = s.templates || {}),
    (s.info = {
      widget: !0,
      autoLoad: !0,
      id: "company_link",
      label: "Company Link",
      region: "top-center",
      requiredFeature: "company_link",
      addin: "dce1a4fc-4d92-41d5-8aaf-329e5f267b70"
    }),
    e.console.log(e.elapsed() + ": " + s.info.id + " started"),
    (s.styles = s.styles || {}),
    (s.styles.style = function () {
      var e = document.createElement("style");
      (e.type = "text/css"), (e.innerHTML = ".company-link{order:4}"), document.getElementsByTagName("head")[0].appendChild(e);
    }),
    (s.views.CompanyLink = Backbone.View.extend({
      attributes: { class: "company-link app-container" },
      events: { click: "handleClick" },
      svg: '<svg class="company-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.8 193.8"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M325.64,23.81A96.78,96.78,0,0,0,229.8,120.7h0v95.84a1.07,1.07,0,0,0,1.06,1.06H326.7a96.78,96.78,0,0,0,96.89-95.84C424.17,67.69,379.71,23.23,325.64,23.81Zm34.9,100.72-11.63,11.63-38.48,38.4a2,2,0,0,1-2.88,0l-10.19-10.18a2.06,2.06,0,0,1,0-2.89l37-36.95a2,2,0,0,0,0-2.89l-37-37a2,2,0,0,1,0-2.88l10.19-10.19a2,2,0,0,1,2.88,0l38.48,38.4,11.64,11.71A2,2,0,0,1,360.54,124.53Z" transform="translate(-229.8 -23.8)"/></svg>',
      initialize: function () {
        (this.template = n("<a>", { class: "app-dash app-dash-icon add-shadow toggle company-link-toggle", href: "slack://open" })
          .append(n(this.svg))
          .append('<span class="app-dash-icon-label">Slack</span>')),
          this.render();
      },
      render: function () {
        var e = (this.options.order || "append") + "To";
        this.$el[e]("." + this.options.region)
          .mFadeIn()
          .html(this.template);
      },
      handleClick: function () {
        var e = this.$(".company-link-icon");
        e.addClass("pulseicon"),
          setTimeout(function () {
            e.removeClass("pulseicon");
          }, 1500);
      }
    })),
    s.styles.style(),
    (e.views.companyLink = new s.views.CompanyLink({ region: "top-center", order: "append" })),
    e.widgets.push(e.views.companyLink),
    s
  );
};
m.addinManager && m.addinManager.registerAddinFn("dce1a4fc-4d92-41d5-8aaf-329e5f267b70", fn_addin);
