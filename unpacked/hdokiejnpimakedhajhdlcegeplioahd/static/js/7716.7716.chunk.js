"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [7716],
  {
    67716: function (e, a, n) {
      n.r(a),
        n.d(a, {
          SiteComponent: function () {
            return x;
          }
        });
      var t = n(91640),
        s = n(23381),
        c = n(57989);
      var i = n.p + "static/media/facebook_icon.ee3862eb63ce0e086137d9c5d04a840e.svg";
      var o = n.p + "static/media/gmail_icon.deb05ff3bc0b21015399c958b36a9a2c.svg";
      var r = n.p + "static/media/linkedin_icon.5560af31203358d092dd8b2f205ed35d.svg";
      var d = n.p + "static/media/netflix_icon.7b737f0a729680ec532a264f15a1a409.svg";
      var u = n.p + "static/media/paypal_icon.4dd33b1b6d66a55a6d0399f84ccf3925.svg";
      var b = n.p + "static/media/dropbox_icon.899d73b2969ab0d4d6276fdb60d50ee6.svg",
        m = n(15878),
        f = n(46177),
        l = n(52384),
        p = n(27403);
      var v = (0, t.Z)("img", { target: "e1hcss760" })({ name: "qhxz92", styles: "max-width:100%" }),
        x = function (e) {
          var a = e.site,
            n = (0, c.J)(),
            t = (0, m.Fe)(),
            x = (0, l.v9)(function (e) {
              return e.settings.features.enable_mv3_background;
            }),
            g = (0, s.useMemo)(
              function () {
                return t === f.t.SPA && !!(top || window).document.documentElement.getAttribute("data-extension-enabled") && x;
              },
              [x]
            );
          return (0, p.jsx)(
            "div",
            {
              "data-component": "SiteComponent",
              className: "site ".concat(a.displayName.toLowerCase()),
              onClick: function () {
                g ? n.sendInContextOnboardingMessage(a) : n.openIcob(a);
              }
            },
            (0, p.jsx)(
              "div",
              { className: "icon-container" },
              (function (e) {
                switch (e) {
                  case "facebook":
                    return (0, p.jsx)(v, { src: i });
                  case "google":
                    return (0, p.jsx)(v, { src: o });
                  case "linkedin":
                    return (0, p.jsx)(v, { src: r });
                  case "netflix":
                    return (0, p.jsx)(v, { src: d });
                  case "paypal":
                    return (0, p.jsx)(v, { src: u });
                  case "dropbox":
                    return (0, p.jsx)(v, { src: b });
                }
              })(a.displayName.toLowerCase())
            ),
            (0, p.jsx)("div", { className: "site-name" }, a.displayName)
          );
        };
    }
  }
]);
