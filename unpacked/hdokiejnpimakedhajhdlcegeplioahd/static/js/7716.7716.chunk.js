"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [7716],
  {
    67716: function (e, a, t) {
      t.r(a),
        t.d(a, {
          SiteComponent: function () {
            return v;
          }
        });
      var n = t(91640),
        s = t(23381),
        c = t(57989);
      var i = t.p + "static/media/facebook_icon.ee3862eb63ce0e086137d9c5d04a840e.svg";
      var o = t.p + "static/media/gmail_icon.deb05ff3bc0b21015399c958b36a9a2c.svg";
      var d = t.p + "static/media/linkedin_icon.5560af31203358d092dd8b2f205ed35d.svg";
      var r = t.p + "static/media/netflix_icon.7b737f0a729680ec532a264f15a1a409.svg";
      var b = t.p + "static/media/paypal_icon.4dd33b1b6d66a55a6d0399f84ccf3925.svg";
      var m = t.p + "static/media/dropbox_icon.899d73b2969ab0d4d6276fdb60d50ee6.svg",
        p = t(15878),
        u = t(46177),
        l = t(27403);
      var f = (0, n.Z)("img", { target: "e1hcss760" })({ name: "qhxz92", styles: "max-width:100%" }),
        v = function (e) {
          var a = e.site,
            t = (0, c.J)(),
            n = (0, p.Fe)(),
            v = (0, s.useMemo)(function () {
              return n === u.t.SPA && !!(top || window).document.documentElement.getAttribute("data-extension-enabled");
            }, []);
          return (0, l.jsx)(
            "div",
            {
              "data-component": "SiteComponent",
              className: "site ".concat(a.displayName.toLowerCase()),
              onClick: function () {
                v ? t.sendInContextOnboardingMessage(a) : t.openIcob(a);
              }
            },
            (0, l.jsx)(
              "div",
              { className: "icon-container" },
              (function (e) {
                switch (e) {
                  case "facebook":
                    return (0, l.jsx)(f, { src: i });
                  case "google":
                    return (0, l.jsx)(f, { src: o });
                  case "linkedin":
                    return (0, l.jsx)(f, { src: d });
                  case "netflix":
                    return (0, l.jsx)(f, { src: r });
                  case "paypal":
                    return (0, l.jsx)(f, { src: b });
                  case "dropbox":
                    return (0, l.jsx)(f, { src: m });
                }
              })(a.displayName.toLowerCase())
            ),
            (0, l.jsx)("div", { className: "site-name" }, a.displayName)
          );
        };
    }
  }
]);
