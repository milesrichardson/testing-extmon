(() => {
  "use strict";
  var e = (function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    return function (t, n, a) {
      return n && e(t.prototype, n), a && e(t, a), t;
    };
  })();
  var t = (function (t) {
      function n(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, n);
        var t = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
        return (t.state = {}), t;
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(n, React.Component),
        e(n, [
          {
            key: "rpcCall",
            value: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return function () {
                var e;
                (e = weh.rpc).call.apply(e, t).then(function () {
                  close();
                });
              };
            }
          },
          {
            key: "render",
            value: function () {
              var e = null,
                t = null,
                n = browser.runtime.getManifest();
              return (
                /a/.test(n.version_name || n.version)
                  ? ((e = weh._("about_alpha_intro")),
                    /^7\.0.*a/.test(n.version_name || n.version) && weh.isBrowser("firefox") && (t = weh._("about_alpha_extra7_fx")))
                  : /b/.test(n.version_name || n.version) && (e = weh._("about_alpha_intro")),
                React.createElement(
                  "div",
                  { className: "about-vdh" },
                  e && React.createElement("p", null, e),
                  t && React.createElement("p", null, t),
                  React.createElement(
                    "div",
                    { className: "about-links" },
                    React.createElement("a", { href: "#", onClick: this.rpcCall("openForum") }, weh._("support_forum")),
                    React.createElement("a", { href: "#", onClick: this.rpcCall("openHomepage") }, weh._("homepage"))
                  ),
                  React.createElement(AddonInfoPanel, null),
                  React.createElement(PlatformInfoPanel, null),
                  React.createElement(CoAppInfoPanel, null),
                  React.createElement(LicInfoPanel, null),
                  React.createElement(
                    "div",
                    { className: "powered-by" },
                    React.createElement("a", { href: "#", onClick: this.rpcCall("openWeh") }, weh._("powered_by_weh"))
                  )
                )
              );
            }
          }
        ]),
        n
      );
    })(),
    n = null;
  render(
    React.createElement(
      "div",
      { className: "weh-shf auto-height" },
      React.createElement(
        "div",
        null,
        React.createElement(WehHeader, { title: weh._("about_vdh") }),
        React.createElement("main", null, React.createElement(t, null)),
        React.createElement(ReactResizeDetector, {
          handleHeight: !0,
          onResize: function (e, t) {
            n && clearTimeout(n),
              (n = setTimeout(function () {
                weh.rpc.call("updateLastFocusedWindowHeight", t, document.body.clientHeight);
              }, 100));
          }
        })
      )
    ),
    document.getElementById("root")
  ),
    weh.setPageTitle(weh._("about_vdh"));
})();
