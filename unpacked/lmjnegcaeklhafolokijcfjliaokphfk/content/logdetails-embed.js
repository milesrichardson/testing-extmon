(() => {
  weh.is_safe.then(() => {
    class t extends React.Component {
      constructor(e) {
        super(e), (this.state = { message: null, details: null });
        var a = this;
        let d = decodeURIComponent(new URL(document.URL).hash.substr(1));
        weh.rpc.call("getLogEntry", d).then((s) => {
          a.setState({ message: s.message, details: s.details });
        });
      }
      render() {
        var e = this;
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
    render(React.createElement(Embedder, null, React.createElement(t, null)), document.getElementById("root"));
  });
})();
