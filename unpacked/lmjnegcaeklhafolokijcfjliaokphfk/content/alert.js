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
  function t(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n;
    }
    return Array.from(e);
  }
  var n = createStore(function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments[1];
    if ("SET_WEH_DATA" === t.type)
      (e = Object.assign({}, e, { wehData: t.payload })), t.payload.bodyClass && (document.body.className = t.payload.bodyClass);
    return e;
  });
  weh.rpc.listen({
    wehInitData: function (e) {
      n.dispatch({ type: "SET_WEH_DATA", payload: e });
    }
  });
  var a = connect(function (e, t) {
    return e.wehData || {};
  })(
    (function (n) {
      function a(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, a);
        var t = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return (t.state = { notAgain: !1 }), t;
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
            key: "onResize",
            value: function () {
              var e = this;
              return function (t, n) {
                e.props.autoResize &&
                  (e.updateTimer && clearTimeout(e.updateTimer),
                  (e.updateHeightTimer = setTimeout(function () {
                    (e.updateHeightTimer = null),
                      weh.rpc.call("updateLastFocusedWindowHeight", n || e.rootElement.clientHeight, document.body.clientHeight);
                  })));
              };
            }
          },
          {
            key: "onClick",
            value: function (e, t, n) {
              for (var a = arguments.length, r = Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) r[o - 3] = arguments[o];
              var c = this;
              return function () {
                var a;
                (t && weh.trigger(Object.assign({ notAgain: c.state.notAgain }, t)), n) && (a = weh.rpc).call.apply(a, [n].concat(r));
                e && weh.rpc.call("closePanel", weh.uiName);
              };
            }
          },
          {
            key: "onNotAgainChanged",
            value: function () {
              var e = this;
              return function (t) {
                e.setState({ notAgain: t.target.checked });
              };
            }
          },
          {
            key: "render",
            value: function () {
              var e = this,
                n = (this.props.buttons || []).map(function (n) {
                  return (
                    (n = Object.assign({ close: !0, rpcMethod: null, rpcArgs: [] }, n)),
                    React.createElement(
                      "button",
                      {
                        key: n.text,
                        onClick: e.onClick.apply(e, [n.close, n.trigger, n.rpcMethod].concat(t(n.rpcArgs))),
                        className: "btn " + (n.className || "")
                      },
                      n.text
                    )
                  );
                }),
                a = this.props.text || null;
              return (
                Array.isArray(this.props.text) &&
                  (a = this.props.text.map(function (e) {
                    return React.createElement("p", { key: e }, e);
                  })),
                React.createElement(
                  "div",
                  {
                    className: "alert-dialog",
                    ref: function (t) {
                      e.rootElement = t;
                    }
                  },
                  React.createElement(WehHeader, { title: this.props.title || "" }),
                  React.createElement(
                    "main",
                    { className: "alert-dialog-content" },
                    a && React.createElement("div", { className: this.props.centered ? "centered" : "" }, a)
                  ),
                  React.createElement(
                    "footer",
                    null,
                    React.createElement(
                      "div",
                      null,
                      this.props.notAgain &&
                        React.createElement(
                          "div",
                          { className: "not-again" },
                          React.createElement("input", {
                            type: "checkbox",
                            onChange: this.onNotAgainChanged(),
                            value: this.state.notAgain,
                            id: "not-again"
                          }),
                          React.createElement("label", { htmlFor: "not-again" }, this.props.notAgain)
                        ),
                      this.props.buttons && React.createElement("div", { className: "btn btn-toolbar float-right" }, n)
                    )
                  ),
                  React.createElement(ReactResizeDetector, { handleHeight: !0, onResize: this.onResize() })
                )
              );
            }
          }
        ]),
        a
      );
    })()
  );
  render(
    React.createElement(
      "div",
      { className: "weh-shf auto-height" },
      React.createElement(Provider, { store: n }, React.createElement(a, null))
    ),
    document.getElementById("root")
  );
})();
