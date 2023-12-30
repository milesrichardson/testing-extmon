(() => {
  var e = {
      8: (e) => {
        e.exports = {
          buildDate: "Thu Aug 24 2023 16:27:56 GMT+0200 (Central European Summer Time)",
          buildOptions: { browser: "chrome", noyt: "true" },
          prod: !0
        };
      }
    },
    t = {};
  function n(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var o = (t[a] = { exports: {} });
    return e[a](o, o.exports, n), o.exports;
  }
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
    var t = n(8).buildOptions || {},
      a = (function (n) {
        function a(e) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, a);
          var t = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
          })(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
          t.state = { downloadCount: null };
          var n = 0;
          try {
            n = JSON.parse(weh._("__missingI18nTags") || "[]").length || 0;
          } catch (e) {}
          var r = t;
          return (
            weh.prefs.on("downloadCount", function (e, t) {
              r.setState({ downloadCount: t, missingLocales: n });
            }),
            t
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
          })(a, React.Component),
          e(a, [
            {
              key: "review",
              value: function () {
                return function () {
                  var e = null;
                  "firefox" == t.browser
                    ? (e = "https://addons.mozilla.org/firefox/addon/video-downloadhelper/reviews/add")
                    : "chrome" == t.browser
                    ? (e = "https://chrome.google.com/webstore/detail/video-downloadhelper/lmjnegcaeklhafolokijcfjliaokphfk/reviews")
                    : "edge" == t.browser && (e = "https://microsoftedge.microsoft.com/addons/detail/jmkaglaafmhbcpleggkmaliipiilhldn"),
                    e && weh.rpc.call("goto", e);
                };
              }
            },
            {
              key: "donate",
              value: function () {
                return function () {
                  weh.rpc.call("goto", "https://www.downloadhelper.net/donate");
                };
              }
            },
            {
              key: "translate",
              value: function () {
                return function () {
                  weh.rpc.call("goto", "https://groups.google.com/forum/#!forum/video-downloadhelper-internationalization");
                };
              }
            },
            {
              key: "notAgain",
              value: function () {
                return function () {
                  weh.rpc.call("fundingLater").then(function () {
                    weh.rpc.call("closePanel", weh.uiName);
                  });
                };
              }
            },
            {
              key: "render",
              value: function () {
                return (
                  (null !== this.state.downloadCount &&
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
                          "firefox" == t.browser &&
                            React.createElement(
                              "p",
                              null,
                              React.createElement("span", null, weh._("req_review")),
                              "  ",
                              React.createElement("a", { onClick: this.review(), href: "#" }, weh._("req_review_link"))
                            ),
                          "chrome" == t.browser &&
                            React.createElement(
                              "p",
                              null,
                              React.createElement("span", null, weh._("chrome_req_review")),
                              "  ",
                              React.createElement("a", { onClick: this.review(), href: "#" }, weh._("req_review_link"))
                            ),
                          "edge" == t.browser &&
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
                              React.createElement(
                                "span",
                                null,
                                weh._("req_locale", [browser.i18n.getUILanguage(), this.state.missingLocales])
                              ),
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
          ]),
          a
        );
      })();
    render(React.createElement("div", { className: "weh-shf" }, React.createElement(a, null)), document.getElementById("root")),
      weh.setPageTitle(weh._("donate_vdh"));
  })();
})();
