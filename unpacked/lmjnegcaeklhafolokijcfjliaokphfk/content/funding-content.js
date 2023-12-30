(() => {
  var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var i = l((p, d) => {
    d.exports = {
      prod: !0,
      beta: !1,
      buildDate: "mer. 20 d\xE9c. 2023 16:32:19 UTC",
      buildOptions: { linuxlic: !1, noyt: !0, browser: "chrome" }
    };
  });
  weh.is_safe.then(() => {
    let e = i().buildOptions || {};
    class t extends React.Component {
      constructor(o) {
        super(o), (this.state = { downloadCount: null });
        var n = 0;
        try {
          n = JSON.parse(weh._("__missingI18nTags") || "[]").length || 0;
        } catch {}
        var r = this;
        weh.prefs.then((a) => {
          a.on("downloadCount", (w, s) => {
            r.setState({ downloadCount: s, missingLocales: n });
          });
        });
      }
      review() {
        return () => {
          var o = null;
          e.browser == "firefox"
            ? (o = "https://addons.mozilla.org/firefox/addon/video-downloadhelper/reviews/add")
            : e.browser == "chrome"
            ? (o = "https://chrome.google.com/webstore/detail/video-downloadhelper/lmjnegcaeklhafolokijcfjliaokphfk/reviews")
            : e.browser == "edge" && (o = "https://microsoftedge.microsoft.com/addons/detail/jmkaglaafmhbcpleggkmaliipiilhldn"),
            o && weh.rpc.call("goto", o);
        };
      }
      donate() {
        return () => {
          weh.rpc.call("goto", "https://www.downloadhelper.net/donate");
        };
      }
      translate() {
        return () => {
          weh.rpc.call("goto", "https://groups.google.com/forum/#!forum/video-downloadhelper-internationalization");
        };
      }
      notAgain() {
        return () => {
          weh.rpc.call("fundingLater").then(() => {
            weh.rpc.call("closePanel", weh.uiName);
          });
        };
      }
      render() {
        return (
          (this.state.downloadCount !== null &&
            React.createElement(
              "div",
              { className: "funding" },
              React.createElement(WehHeader, { title: weh._("donate_vdh") }),
              React.createElement(
                "main",
                null,
                React.createElement(
                  "div",
                  null,
                  React.createElement("h1", null, weh._("congratulations")),
                  React.createElement("br", null),
                  React.createElement("p", null, weh._("you_downloaded_n_videos", "" + this.state.downloadCount)),
                  React.createElement("p", null, weh._("req_donate")),
                  e.browser == "firefox" &&
                    React.createElement(
                      "p",
                      null,
                      React.createElement("span", null, weh._("req_review")),
                      "  ",
                      React.createElement("a", { onClick: this.review(), href: "#" }, weh._("req_review_link"))
                    ),
                  e.browser == "chrome" &&
                    React.createElement(
                      "p",
                      null,
                      React.createElement("span", null, weh._("chrome_req_review")),
                      "  ",
                      React.createElement("a", { onClick: this.review(), href: "#" }, weh._("req_review_link"))
                    ),
                  e.browser == "edge" &&
                    React.createElement(
                      "p",
                      null,
                      React.createElement("span", null, weh._("edge_req_review")),
                      "  ",
                      React.createElement("a", { onClick: this.review(), href: "#" }, weh._("req_review_link"))
                    ),
                  this.state.missingLocales > 0 &&
                    React.createElement(
                      "p",
                      null,
                      React.createElement("span", null, weh._("req_locale", [browser.i18n.getUILanguage(), this.state.missingLocales])),
                      " ",
                      React.createElement("a", { onClick: this.translate(), href: "#" }, weh._("help_translating"))
                    ),
                  React.createElement("div", { className: "donate-big-button", onClick: this.donate() }, weh._("donate"))
                )
              ),
              React.createElement(
                "footer",
                null,
                React.createElement(
                  "div",
                  { className: "btn-toolbar justify-content-end" },
                  React.createElement(
                    "div",
                    { className: "btn-group pull-right" },
                    React.createElement(
                      "button",
                      { className: "btn btn-outline-secondary", onClick: this.notAgain() },
                      weh._("not_again_3months")
                    ),
                    React.createElement("button", { className: "btn btn-success", onClick: this.donate() }, weh._("donate"))
                  )
                )
              )
            )) ||
          null
        );
      }
    }
    render(React.createElement("div", { className: "weh-shf" }, React.createElement(t, null)), document.getElementById("root")),
      weh.setPageTitle(weh._("donate_vdh"));
  });
})();
