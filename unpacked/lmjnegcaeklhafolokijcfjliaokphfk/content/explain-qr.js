(() => {
  "use strict";
  var e,
    t = {
      270: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })();
        t.ExplainQR = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            n.state = { hit: {} };
            var a = n,
              r = decodeURIComponent(new URL(document.URL).hash.substr(1));
            return (
              weh.rpc.call("getHit", r).then(function (e) {
                a.setState({ hit: e });
              }),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            })(t, React.Component),
            n(t, [
              {
                key: "tellMeMore",
                value: function () {
                  return function () {
                    weh.rpc.call("goto", "https://www.downloadhelper.net/about-licensing");
                  };
                }
              },
              {
                key: "getLicense",
                value: function () {
                  return function () {
                    weh.rpc.call("goto", "https://www.downloadhelper.net/convert");
                  };
                }
              },
              {
                key: "changedNotAgain",
                value: function (e) {
                  weh.prefs.qrMessageNotAgain = e.target.checked;
                }
              },
              {
                key: "render",
                value: function () {
                  return (
                    (this.state.hit.id &&
                      React.createElement(
                        "div",
                        { className: "explain-qr" },
                        React.createElement("div", { className: "qr-text" }, weh._("file_generated", this.state.hit.localFilePath)),
                        React.createElement("div", { className: "qr-text" }, weh._("explain_qr1")),
                        React.createElement("div", { className: "qr-img" }, React.createElement("img", { src: "images/qr-video.png" })),
                        this.state.hit.adp && React.createElement("div", { className: "qr-text" }, weh._("explain_qr2")),
                        React.createElement(
                          "div",
                          null,
                          React.createElement(
                            "div",
                            { className: "btn-toolbar float-right" },
                            React.createElement(
                              "div",
                              { className: "btn-group" },
                              React.createElement(
                                "button",
                                { className: "btn btn-outline-secondary", onClick: this.tellMeMore() },
                                weh._("tell_me_more")
                              ),
                              React.createElement(
                                "button",
                                { className: "btn btn-outline-secondary", onClick: this.getLicense() },
                                weh._("get_conversion_license")
                              )
                            )
                          )
                        ),
                        React.createElement(
                          "div",
                          { className: "not-again" },
                          React.createElement("input", { id: "checkbox1", type: "checkbox", onChange: this.changedNotAgain.bind(this) }),
                          React.createElement("label", { htmlFor: "checkbox1" }, weh._("not_see_again"))
                        )
                      )) ||
                    null
                  );
                }
              }
            ]),
            t
          );
        })();
      }
    },
    n = {};
  function a(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var c = (n[e] = { exports: {} });
    return t[e](c, c.exports, a), c.exports;
  }
  (e = a(270)),
    render(
      React.createElement(
        "div",
        { className: "weh-shf" },
        React.createElement(
          "div",
          null,
          React.createElement(WehHeader, { title: weh._("about_qr") }),
          React.createElement("main", null, React.createElement(e.ExplainQR, null))
        )
      ),
      document.getElementById("root")
    ),
    weh.setPageTitle(weh._("about_qr"));
})();
