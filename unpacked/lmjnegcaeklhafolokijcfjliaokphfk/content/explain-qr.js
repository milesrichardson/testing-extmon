(() => {
  var e = class extends React.Component {
    constructor(t) {
      super(t), (this.state = { hit: {} });
      var a = this;
      let n = decodeURIComponent(new URL(document.URL).hash.substr(1));
      weh.rpc.call("getHit", n).then((c) => {
        a.setState({ hit: c });
      });
    }
    tellMeMore() {
      return () => {
        weh.rpc.call("goto", "https://www.downloadhelper.net/about-licensing");
      };
    }
    getLicense() {
      return () => {
        weh.rpc.call("goto", "https://www.downloadhelper.net/convert");
      };
    }
    async changedNotAgain(t) {
      (await weh.prefs).qrMessageNotAgain = t.target.checked;
    }
    render() {
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
  };
  weh.is_safe.then(() => {
    render(
      React.createElement(
        "div",
        { className: "weh-shf" },
        React.createElement(
          "div",
          null,
          React.createElement(WehHeader, { title: weh._("about_qr") }),
          React.createElement("main", null, React.createElement(e, null))
        )
      ),
      document.getElementById("root")
    ),
      weh.setPageTitle(weh._("about_qr"));
  });
})();
