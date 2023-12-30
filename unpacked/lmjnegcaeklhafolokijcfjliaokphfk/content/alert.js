(() => {
  weh.is_safe.then(() => {
    function s(e = {}, a) {
      switch (a.type) {
        case "SET_WEH_DATA":
          (e = Object.assign({}, e, { wehData: a.payload })), a.payload.bodyClass && (document.body.className = a.payload.bodyClass);
          break;
      }
      return e;
    }
    let i = createStore(s);
    weh.rpc.listen({
      wehInitData: (e) => {
        i.dispatch({ type: "SET_WEH_DATA", payload: e });
      }
    });
    var r = connect((e, a) => e.wehData || {})(
      class extends React.Component {
        constructor(e) {
          super(e), (this.state = { notAgain: !1 });
        }
        onResize() {
          var e = this;
          return (a, t) => {
            e.props.autoResize &&
              (e.updateTimer && clearTimeout(e.updateTimer),
              (e.updateHeightTimer = setTimeout(() => {
                (e.updateHeightTimer = null),
                  weh.rpc.call("updateLastFocusedWindowHeight", t || e.rootElement.clientHeight, document.body.clientHeight);
              })));
          };
        }
        onClick(e, a, t, ...o) {
          var n = this;
          return () => {
            a && weh.trigger(Object.assign({ notAgain: n.state.notAgain }, a)),
              t && weh.rpc.call(t, ...o),
              e && weh.rpc.call("closePanel", weh.uiName);
          };
        }
        onNotAgainChanged() {
          var e = this;
          return (a) => {
            e.setState({ notAgain: a.target.checked });
          };
        }
        render() {
          var e = (this.props.buttons || []).map(
              (t) => (
                (t = Object.assign({ close: !0, rpcMethod: null, rpcArgs: [] }, t)),
                React.createElement(
                  "button",
                  {
                    key: t.text,
                    onClick: this.onClick(t.close, t.trigger, t.rpcMethod, ...t.rpcArgs),
                    className: "btn " + (t.className || "")
                  },
                  t.text
                )
              )
            ),
            a = this.props.text || null;
          return (
            Array.isArray(this.props.text) && (a = this.props.text.map((t) => React.createElement("p", { key: t }, t))),
            React.createElement(
              "div",
              {
                className: "alert-dialog",
                ref: (t) => {
                  this.rootElement = t;
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
                  this.props.buttons && React.createElement("div", { className: "btn btn-toolbar float-right" }, e)
                )
              ),
              React.createElement(ReactResizeDetector, { handleHeight: !0, onResize: this.onResize() })
            )
          );
        }
      }
    );
    render(
      React.createElement(
        "div",
        { className: "weh-shf auto-height" },
        React.createElement(Provider, { store: i }, React.createElement(r, null))
      ),
      document.getElementById("root")
    );
  });
})();
