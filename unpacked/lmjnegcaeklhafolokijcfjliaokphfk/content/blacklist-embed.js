(() => {
  "use strict";
  var e, t;
  (e = (function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    return function (t, n, a) {
      return n && e(t.prototype, n), a && e(t, a), t;
    };
  })()),
    (t = (function (t) {
      function n(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, n);
        var t = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
        return (t.state = { domains: {} }), t;
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
            key: "change",
            value: function (e) {
              var t = this;
              return function (n) {
                var a, r, c;
                t.setState({
                  domains: Object.assign(
                    {},
                    t.state.domains,
                    ((a = {}),
                    (r = e),
                    (c = n.target.checked),
                    r in a ? Object.defineProperty(a, r, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : (a[r] = c),
                    a)
                  )
                });
              };
            }
          },
          {
            key: "save",
            value: function () {
              var e = this;
              return function () {
                var t = Object.keys(e.state.domains).filter(function (t) {
                  return e.state.domains[t];
                });
                weh.rpc.call("addToBlacklist", t).then(function () {
                  e.props.closeWindow && e.props.closeWindow();
                });
              };
            }
          },
          {
            key: "hasChecked",
            value: function () {
              var e = this;
              return !Object.keys(this.state.domains).every(function (t) {
                return !e.state.domains[t];
              });
            }
          },
          {
            key: "componentWillMount",
            value: function () {
              var e = this,
                t = decodeURIComponent(new URL(document.URL).hash.substr(1));
              weh.rpc.call("domainsFromHitId", t).then(function (t) {
                var n = {};
                t.forEach(function (e) {
                  n[e] = !1;
                }),
                  e.setState({ domains: n });
              });
            }
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = this,
                n = Object.keys(this.state.domains)
                  .sort()
                  .map(function (n, a) {
                    return React.createElement(
                      "div",
                      { key: n },
                      React.createElement("input", { type: "checkbox", id: "id-" + n, value: t.state[n], onChange: e.change(n) }),
                      React.createElement("label", { htmlFor: "id-" + n, title: n }, n)
                    );
                  });
              return React.createElement(
                "div",
                { className: "weh-shf embeddable" },
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "main",
                    null,
                    React.createElement(
                      "div",
                      { className: "blacklist" },
                      React.createElement(
                        "div",
                        { className: "explain" },
                        React.createElement("h3", null, weh._("add_to_blacklist")),
                        React.createElement("p", null, weh._("add_to_blacklist_help"))
                      ),
                      React.createElement("div", { className: "domains" }, n)
                    )
                  ),
                  React.createElement(
                    "footer",
                    null,
                    React.createElement(
                      "div",
                      { className: "btn-toolbar justify-content-between" },
                      React.createElement("div", null),
                      React.createElement(
                        "div",
                        { className: "btn-group pull-right" },
                        React.createElement(
                          "button",
                          { type: "button", disabled: !this.hasChecked(), onClick: this.save(), className: "btn btn-outline-primary" },
                          weh._("save")
                        )
                      )
                    )
                  )
                )
              );
            }
          }
        ]),
        n
      );
    })()),
    render(
      React.createElement(
        Embedder,
        null,
        React.createElement(t, {
          closeWindow: function () {
            return weh.rpc.call("closePopup");
          }
        })
      ),
      document.getElementById("root")
    );
})();
