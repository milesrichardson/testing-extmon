(() => {
  "use strict";
  var t,
    e = {
      133: () => {},
      262: (t, e, n) => {
        var o = n(351),
          a = n(577),
          i = n(755),
          r = n(915);
        i(function () {
          (async function () {
            let t = await a.Z.hasZoomRqToken(),
              e = await a.Z.getZoomData();
            t && e
              ? (async function () {
                  s.hide();
                  try {
                    let t = await o.Z.toSync();
                    t ? (u("Connecting"), t.status || 201 !== t.errorCode ? f() : p()) : f();
                  } catch (t) {
                    f();
                  }
                })()
              : p();
          })(),
            i("#content").on("click", "a", function (t) {
              t.stopPropagation(), t.preventDefault();
            }),
            i("#content").on("submit", "form", function (t) {
              t.preventDefault(), t.stopPropagation();
            });
          var t = i("#header_container"),
            e = i("#content_container .btn-content"),
            n = i("#footer_container"),
            s = i("#content_container .sec-sign"),
            c = i("#loading");
          function l() {
            c.hide();
          }
          function u(t) {
            (t = t || "Loading"), c.find("span").text(t), c.show();
          }
          function p() {
            l(), t.hide(), s.show(), e.hide(), n.hide(), i(".popup-content").addClass("login-mode");
          }
          async function f() {
            let o = await a.Z.getZoomData();
            if (
              (o.email && "" != o.email && t.find(".profile-email").text(o.email).attr("title", o.email),
              o.displayPicUrl && "" != o.displayPicUrl)
            ) {
              var c = o.displayPicUrl;
              0 == c.indexOf("https") ||
                0 == c.indexOf("http") ||
                (c =
                  o._zm_baseurl && "" != o._zm_baseurl
                    ? o._zm_baseurl + c
                    : `https://${r.runEnv[0]}${r.multiVersion[0]}${r.runEnv[1]}.${r.multiVersion[1]}` + c),
                setTimeout(function () {
                  t.find(".profile-img").attr("src", c);
                }, 100);
            }
            o.displayName && "" != o.displayName && t.find(".profile-img").attr("alt", o.displayName),
              o.no_meeting_license_user
                ? (e.find(".tip-title").html(r.tips[32]), e.find(".tip-cont").html(r.tips[33]), e.addClass("no-license"))
                : e.removeClass("no-license"),
              l(),
              t.show(),
              s.hide(),
              e.show(),
              n.show(),
              i(".popup-content").removeClass("login-mode");
          }
          i("#btn-signin").on("click", function () {
            chrome.tabs.create({ url: o.Z.baseUrl + "signin?from=extension", selected: !1 }, function (t) {
              chrome.tabs.update(t.id, { selected: !0 });
            });
          });
          let d = i("#app_about");
          d.find(".year").text(new Date().getFullYear()),
            d.on("click", ".about-btn", function (t) {
              t.stopPropagation(), i(".popup-content").addClass("show-about-detail");
            }),
            d.on("click", ".back-btn", function (t) {
              t.stopPropagation(), i(".popup-content").removeClass("show-about-detail");
            }),
            d.on("click", ".opensource-btn", async function (t) {
              t.stopPropagation();
              let e = (await a.Z.getUserBaseUrl()) + `opensource?product=extension&platform=${r.browserConfig}`;
              chrome.tabs.create({ url: e });
            }),
            i("#footer_container .signout>a").on("click", function () {
              return (
                u("Connecting"),
                o.Z.logout(function () {
                  p(),
                    (async function () {
                      let [t] = await chrome.tabs.query({ active: !0, currentWindow: !0 });
                      try {
                        chrome.tabs.sendMessage(t.id, { type: "notificationSignout" }, function () {
                          chrome.runtime.lastError;
                        });
                      } catch (t) {}
                    })();
                }),
                !1
              );
            }),
            i("#content_container .btn-group")
              .on("mouseenter", function () {
                var t = i(this);
                t.hasClass("open") || t.addClass("open");
              })
              .on("mouseleave", function () {
                var t = i(this);
                t.hasClass("open") && t.removeClass("open");
              }),
            i("#content_container .btn-group").on("click", function () {
              i(this).toggleClass("open");
            }),
            i("#content_container").on("click", ".btn-group", async function (t) {
              if (i(t.target).hasClass("with-video"))
                try {
                  let t = await o.Z.startInstantMeeting(!0);
                  t.status || 201 !== t.errorCode || p();
                } catch (t) {}
              else if (i(t.target).hasClass("without-video"))
                try {
                  let t = await o.Z.startInstantMeeting(!1);
                  t.status || 201 !== t.errorCode || p();
                } catch (t) {}
            }),
            i(".profile .profile-email").on("click", async function () {
              chrome.tabs.create({ url: await o.Z.getMyMeetingsUrl() });
            }),
            i(".setting>a").on("click", function (t) {
              t.stopPropagation(),
                a.Z.saveValue("zoom_config_fte", !1),
                chrome.tabs.create({ url: chrome.runtime.getURL("options.html") }, function (t) {
                  a.Z.saveValue("zoom_options_tabid", 0);
                });
            }),
            i("#main_schedule_meeting").on("click", async function () {
              (await a.Z.getValue("zoom_config_fte"))
                ? chrome.tabs.create({ url: chrome.runtime.getURL("options.html"), selected: !1 }, function (t) {
                    chrome.tabs.update(t.id, { selected: !0 }), a.Z.saveValue("zoom_options_tabid", t.id);
                  })
                : chrome.tabs.create({ url: o.Z.getGoogleCalendarUrl() }, function (t) {});
            });
        });
      }
    },
    n = {};
  function o(t) {
    var a = n[t];
    if (void 0 !== a) return a.exports;
    var i = (n[t] = { exports: {} });
    return e[t].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.m = e),
    (t = []),
    (o.O = (e, n, a, i) => {
      if (!n) {
        var r = 1 / 0;
        for (u = 0; u < t.length; u++) {
          for (var [n, a, i] = t[u], s = !0, c = 0; c < n.length; c++)
            (!1 & i || r >= i) && Object.keys(o.O).every((t) => o.O[t](n[c])) ? n.splice(c--, 1) : ((s = !1), i < r && (r = i));
          if (s) {
            t.splice(u--, 1);
            var l = a();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
      t[u] = [n, a, i];
    }),
    (o.d = (t, e) => {
      for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (o.j = 42),
    (() => {
      var t = { 42: 0, 374: 0, 532: 0 };
      o.O.j = (e) => 0 === t[e];
      var e = (e, n) => {
          var a,
            i,
            [r, s, c] = n,
            l = 0;
          if (r.some((e) => 0 !== t[e])) {
            for (a in s) o.o(s, a) && (o.m[a] = s[a]);
            if (c) var u = c(o);
          }
          for (e && e(n); l < r.length; l++) (i = r[l]), o.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return o.O(u);
        },
        n = (self.webpackChunkextension = self.webpackChunkextension || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var a = o.O(void 0, [374, 532, 647, 493], () => o(262));
  a = o.O(a);
})();
