(() => {
  weh.is_safe.then(() => {
    class i extends React.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      rpcCall(...e) {
        return () => {
          weh.rpc.call(...e).then(() => {
            close();
          });
        };
      }
      render() {
        var e = null,
          o = null,
          a = browser.runtime.getManifest();
        return (
          /a/.test(a.version_name || a.version)
            ? ((e = weh._("about_alpha_intro")),
              /^7\.0.*a/.test(a.version_name || a.version) && weh.isBrowser("firefox") && (o = weh._("about_alpha_extra7_fx")))
            : /b/.test(a.version_name || a.version) && (e = weh._("about_alpha_intro")),
          React.createElement(
            "div",
            { className: "about-vdh" },
            e && React.createElement("p", null, e),
            o && React.createElement("p", null, o),
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
    var t = null;
    function n(r, e) {
      t && clearTimeout(t),
        (t = setTimeout(() => {
          weh.rpc.call("updateLastFocusedWindowHeight", e, document.body.clientHeight);
        }, 100));
    }
    render(
      React.createElement(
        "div",
        { className: "weh-shf auto-height" },
        React.createElement(
          "div",
          null,
          React.createElement(WehHeader, { title: weh._("about_vdh") }),
          React.createElement("main", null, React.createElement(i, null)),
          React.createElement(ReactResizeDetector, { handleHeight: !0, onResize: n })
        )
      ),
      document.getElementById("root")
    ),
      weh.setPageTitle(weh._("about_vdh"));
  });
})();
