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
        t.state = { message: null, details: null };
        var a = t,
          r = decodeURIComponent(new URL(document.URL).hash.substr(1));
        return (
          weh.rpc.call("getLogEntry", r).then(function (e) {
            a.setState({ message: e.message, details: e.details });
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
        })(n, React.Component),
        e(n, [
          {
            key: "render",
            value: function () {
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
                      { className: "log-details" },
                      React.createElement(
                        "div",
                        { className: "message" },
                        this.state.message && React.createElement("h3", null, this.state.message),
                        this.state.details && React.createElement("pre", null, this.state.details)
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
    render(React.createElement(Embedder, null, React.createElement(t, null)), document.getElementById("root"));
})();
