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
  (window.store = createStore(function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments[1];
    if ("SET_BLACKLIST_DATA" === t.type) e = t.payload;
    return e;
  })),
    weh.rpc.call("getBlacklist").then(function (e) {
      window.store.dispatch({ type: "SET_BLACKLIST_DATA", payload: e });
    });
  var t = connect(function (e, t) {
    return { domains: e || [] };
  })(
    (function (t) {
      function n(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, n);
        var t = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
        return (t.state = { inputDomain: null }), t;
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
            key: "addDomain",
            value: function () {
              var e = this;
              return function () {
                e.setState({ inputDomain: "" });
              };
            }
          },
          {
            key: "cancelInput",
            value: function () {
              var e = this;
              return function () {
                e.setState({ inputDomain: null });
              };
            }
          },
          {
            key: "onKeyDown",
            value: function () {
              var e = this;
              return function (t) {
                "Enter" == t.key ? e.doInput()() : "Escape" == t.key && e.cancelInput()();
              };
            }
          },
          {
            key: "doInput",
            value: function () {
              var e = this;
              return function () {
                e.state.inputDomain &&
                  weh.rpc
                    .call("addToBlacklist", [e.state.inputDomain])
                    .then(function () {
                      return weh.rpc.call("getBlacklist");
                    })
                    .then(function (t) {
                      window.store.dispatch({ type: "SET_BLACKLIST_DATA", payload: t }), e.setState({ inputDomain: null });
                    });
              };
            }
          },
          {
            key: "inputChange",
            value: function () {
              var e = this;
              return function (t) {
                e.setState({ inputDomain: t.target.value });
              };
            }
          },
          {
            key: "removeDomain",
            value: function (e) {
              return function () {
                weh.rpc
                  .call("removeFromBlacklist", [e])
                  .then(function () {
                    return weh.rpc.call("getBlacklist");
                  })
                  .then(function (e) {
                    window.store.dispatch({ type: "SET_BLACKLIST_DATA", payload: e });
                  });
              };
            }
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = this.props.domains.sort().map(function (t) {
                  return React.createElement(
                    "div",
                    { key: t, className: "domain" },
                    React.createElement("div", null, t),
                    React.createElement("div", { className: "delete", onClick: e.removeDomain(t) }, "X")
                  );
                });
              return React.createElement(
                "div",
                { className: "blacklist" },
                React.createElement(
                  "div",
                  { className: "description" },
                  React.createElement("p", null, weh._("blacklist_edit_descr")),
                  null === this.state.inputDomain &&
                    React.createElement("a", { href: "#", onClick: this.addDomain() }, weh._("blacklist_add_domain")),
                  null !== this.state.inputDomain &&
                    React.createElement(
                      "div",
                      { className: "input-group" },
                      React.createElement("input", {
                        value: this.state.inputDomain,
                        onChange: this.inputChange(),
                        onKeyDown: this.onKeyDown(),
                        placeholder: weh._("blacklist_add_placeholder"),
                        className: "form-control",
                        type: "text"
                      }),
                      React.createElement(
                        "span",
                        { className: "input-group-btn" },
                        React.createElement("button", { className: "btn btn-primary", onClick: this.doInput() }, weh._("ok"))
                      ),
                      React.createElement(
                        "span",
                        { className: "input-group-btn" },
                        React.createElement("button", { className: "btn", onClick: this.cancelInput() }, "X")
                      )
                    )
                ),
                React.createElement(
                  "div",
                  { className: "list-column" },
                  0 == this.props.domains.length && React.createElement("div", { className: "empty" }, weh._("blacklist_empty")),
                  this.props.domains.length > 0 && React.createElement("div", { className: "list" }, t)
                )
              );
            }
          }
        ]),
        n
      );
    })()
  );
  render(
    React.createElement(
      Provider,
      { store },
      React.createElement(
        "div",
        { className: "weh-shf" },
        React.createElement(
          "div",
          null,
          React.createElement(WehHeader, { title: weh._("blacklist") }),
          React.createElement("main", null, React.createElement(t, null))
        )
      )
    ),
    document.getElementById("root")
  ),
    weh.setPageTitle(weh._("blacklist"));
})();