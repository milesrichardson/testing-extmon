(() => {
  weh.is_safe.then(async () => {
    let i = await weh.prefs,
      n = createStore(combineReducers({ prefs: i.reducer }));
    i.reduxDispatch(n);
    let a = connect((t) => ({ prefs: t.prefs, showSaveAs: new URL(window.location.href).searchParams.get("nosaveas") != "1" }))(
      class extends React.Component {
        constructor(t) {
          super(t), (this.state = { outputConfig: "", outputConfigs: {}, hit: null });
        }
        changeOutput() {
          var t = this;
          return (e) => {
            t.setState({ outputConfig: e.target.value });
          };
        }
        save(t) {
          var e = this;
          return () => {
            weh
              .trigger({
                hitId: e.state.hit.id,
                outputConfigId: e.state.outputConfig,
                outputConfig: e.state.outputConfigs[e.state.outputConfig],
                prompt: t
              })
              .then(() => {
                e.props.closeWindow && e.props.closeWindow();
              });
          };
        }
        configure() {
          var t = this;
          return () => {
            weh.rpc.call("editConverterConfigs", t.state.outputConfig).then(() => {
              t.props.closeWindow && t.props.closeWindow();
            });
          };
        }
        componentWillMount() {
          var t = this,
            e = decodeURIComponent(new URL(document.URL).hash.substr(1));
          weh.rpc.call("getHit", e).then((s) => {
            t.setState({ hit: s });
          }),
            weh.rpc.call("getOutputConfigs").then((s) => {
              t.setState({ outputConfigs: s });
            });
        }
        componentWillReceiveProps(t) {
          this.setState({ outputConfig: t.prefs.dlconvLastOutput });
        }
        render() {
          var t = this,
            e;
          this.state.outputConfig
            ? (e = this.state.outputConfigs)
            : (e = Object.assign({}, this.state.outputConfigs, { "": { title: weh._("select_output_config") } }));
          var s = Object.keys(e)
            .sort()
            .map((o) => React.createElement("option", { key: o, value: o }, e[o].title));
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
                  { className: "dlconv" },
                  React.createElement(
                    "div",
                    { className: "explain" },
                    React.createElement("h3", null, weh._("dlconv_download_and_convert")),
                    this.state.hit && React.createElement("p", null, this.state.hit.title)
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "select",
                      { className: "form-control", onChange: this.changeOutput(), value: this.state.outputConfig },
                      s
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement("a", { onClick: this.configure(), href: "#" }, weh._("dlconv_output_details"))
                  )
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
                    this.props.showSaveAs &&
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: this.save(!0),
                          disabled: this.state.outputConfig == "",
                          className: "btn btn-outline-secondary"
                        },
                        weh._("save_as")
                      ),
                    React.createElement(
                      "button",
                      {
                        type: "button",
                        onClick: this.save(!1),
                        disabled: this.state.outputConfig == "",
                        className: "btn btn-outline-primary"
                      },
                      weh._("save")
                    )
                  )
                )
              )
            )
          );
        }
      }
    );
    render(
      React.createElement(
        Embedder,
        null,
        React.createElement(Provider, { store: n }, React.createElement(a, { closeWindow: () => weh.rpc.call("closePopup") }))
      ),
      document.getElementById("root")
    );
  });
})();
