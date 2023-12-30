(() => {
  weh.is_safe.then(() => {
    let t = createStore(
        (e = { hit: null }, r) => (r.type == "setHit" ? (e = { hit: r.payload }) : r.type == "setError" && (e = { error: r.payload }), e)
      ),
      i = decodeURIComponent(new URL(document.URL).hash.substr(1));
    weh.rpc
      .call("getHit", i)
      .then((e) => {
        e ? t.dispatch({ type: "setHit", payload: e }) : t.dispatch({ type: "setError", payload: weh._("no_such_hit") });
      })
      .catch((e) => {
        t.dispatch({ type: "setError", payload: e.message });
      });
    class a extends React.Component {
      renderValue() {
        return this.props.name == "thumbnailUrl" || this.props.name == "thumbnail"
          ? React.createElement(
              "div",
              null,
              React.createElement("img", { src: this.props.value }),
              React.createElement("br", null),
              React.createElement("div", { className: "details-value" }, this.props.value)
            )
          : this.props.value === null
          ? React.createElement("div", null, React.createElement("em", null, "null"))
          : typeof this.props.value == "object"
          ? React.createElement(ReactJson, {
              src: this.props.value,
              name: null,
              collapsed: !0,
              enableClipboard: !1,
              collapseStringsAfterLength: 64,
              displayDataTypes: !1,
              displayObjectSize: !1,
              style: { display: "inline-block" }
            })
          : React.createElement("div", { className: "details-value" }, "" + this.props.value);
      }
      render() {
        return React.createElement(
          "tr",
          null,
          React.createElement("td", null, this.props.name),
          React.createElement("td", null, this.renderValue())
        );
      }
    }
    var l = connect((e, r) => ({ hit: e.hit, error: e.error }))(
      class extends React.Component {
        renderError() {
          return React.createElement("div", { className: "details" }, this.props.error);
        }
        render() {
          if (this.props.error) return this.renderError();
          if (!this.props.hit) return null;
          var e = this,
            r = Object.keys(this.props.hit)
              .sort()
              .map((s) => React.createElement(a, { key: s, name: s, value: e.props.hit[s] }));
          return React.createElement("table", { className: "details" }, React.createElement("tbody", null, r));
        }
      }
    );
    render(
      React.createElement(
        Provider,
        { store: t },
        React.createElement(
          "div",
          { className: "weh-shf" },
          React.createElement(
            "div",
            null,
            React.createElement(WehHeader, { title: weh._("hit_details") }),
            React.createElement("main", null, React.createElement(l, null))
          )
        )
      ),
      document.getElementById("root")
    ),
      weh.setPageTitle(weh._("hit_details"));
  });
})();
