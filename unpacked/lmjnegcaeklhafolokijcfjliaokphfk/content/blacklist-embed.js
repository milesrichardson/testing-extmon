(() => {
  weh.is_safe.then(() => {
    class i extends React.Component {
      constructor(e) {
        super(e), (this.state = { domains: {} });
      }
      change(e) {
        var s = this;
        return (t) => {
          s.setState({ domains: Object.assign({}, s.state.domains, { [e]: t.target.checked }) });
        };
      }
      save() {
        var e = this;
        return () => {
          var s = Object.keys(e.state.domains).filter((t) => e.state.domains[t]);
          weh.rpc.call("addToBlacklist", s).then(() => {
            e.props.closeWindow && e.props.closeWindow();
          });
        };
      }
      hasChecked() {
        var e = this;
        return !Object.keys(this.state.domains).every((s) => !e.state.domains[s]);
      }
      componentWillMount() {
        var e = this,
          s = decodeURIComponent(new URL(document.URL).hash.substr(1));
        weh.rpc.call("domainsFromHitId", s).then((t) => {
          var a = {};
          t.forEach((d) => {
            a[d] = !1;
          }),
            e.setState({ domains: a });
        });
      }
      render() {
        var e = this,
          s = Object.keys(this.state.domains)
            .sort()
            .map((t, a) =>
              React.createElement(
                "div",
                { key: t },
                React.createElement("input", { type: "checkbox", id: "id-" + t, value: e.state[t], onChange: this.change(t) }),
                React.createElement("label", { htmlFor: "id-" + t, title: t }, t)
              )
            );
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
                React.createElement("div", { className: "domains" }, s)
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
    render(
      React.createElement(Embedder, null, React.createElement(i, { closeWindow: () => weh.rpc.call("closePopup") })),
      document.getElementById("root")
    );
  });
})();
