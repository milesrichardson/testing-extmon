(() => {
  weh.is_safe.then(() => {
    function o(e = [], a) {
      switch (a.type) {
        case "SET_SMARTNAME_DATA":
          e = a.payload;
          break;
      }
      return e;
    }
    window.store = createStore(o);
    function l() {
      return weh.rpc.call("getSmartNameRules").then((e) => {
        window.store.dispatch({ type: "SET_SMARTNAME_DATA", payload: e });
      });
    }
    l();
    var i = connect((e, a) => ({ rules: e || [] }))(
      class extends React.Component {
        constructor(e) {
          super(e), (this.state = { rule: null, newRule: !1, xpathClass: "", regexpClass: "", delayClass: "", domainClass: "" });
        }
        addRule() {
          var e = this;
          return () => {
            e.setState({ rule: { domain: "", mode: "page-title", xpath: "", regexp: ".*", delay: 0 }, newRule: !0 });
          };
        }
        cancelInput() {
          var e = this;
          return () => {
            e.setState({ rule: null });
          };
        }
        removeRule(e) {
          var a = this;
          return (r) => {
            r.stopPropagation(), weh.rpc.call("removeFromSmartName", [e]).then(() => l());
          };
        }
        editRule(e) {
          var a = this;
          return () => {
            a.setState({ rule: Object.assign({}, a.props.rules[e]), newRule: !1 });
          };
        }
        renderAll() {
          var e = Object.keys(this.props.rules)
            .sort()
            .map((a) =>
              React.createElement(
                "div",
                { key: a, className: "domain", onClick: this.editRule(a) },
                React.createElement("div", null, a),
                React.createElement("div", { className: "delete", onClick: this.removeRule(a) }, "X")
              )
            );
          return React.createElement(
            "div",
            { className: "all-rules" },
            React.createElement(
              "div",
              { className: "description" },
              React.createElement("p", null, weh._("smartname_edit_descr")),
              React.createElement("a", { href: "#", onClick: this.addRule() }, weh._("smartname_add_domain"))
            ),
            React.createElement(
              "div",
              { className: "list-column" },
              e.length == 0 && React.createElement("div", { className: "empty" }, weh._("smartname_empty")),
              e.length > 0 && React.createElement("div", { className: "list" }, e)
            )
          );
        }
        saveRule() {
          var e = this;
          return () => {
            weh.rpc.call("addSmartNameRule", e.state.rule).then(() => {
              l();
            }),
              e.setState({ rule: null });
          };
        }
        cancelRule() {
          var e = this;
          return () => {
            e.setState({ rule: null });
          };
        }
        onChange(e) {
          var a = this;
          return (r) => {
            var s = r.target.value,
              t = { rule: {} },
              n = !1;
            switch (e) {
              case "mode":
                t.rule.mode = s;
                break;
              case "xpath":
                t.rule.xpath = s;
                try {
                  document.evaluate(s, document, null, XPathResult.STRING_TYPE, null), (t.xpathClass = "");
                } catch {
                  (t.xpathClass = "error"), (n = !0);
                }
                break;
              case "regexp":
                t.rule.regexp = s;
                try {
                  new RegExp(s), (t.regexpClass = "");
                } catch {
                  (t.regexpClass = "error"), (n = !0);
                }
                break;
              case "domain":
                (t.rule.domain = s), /^\S+\.\S+$/.test(s) ? (t.domainClass = "") : (t.domainClass = "error");
                break;
              case "delay":
                (t.rule.delay = s), /^[0-9]+$/.test(s) ? (t.delayClass = "") : (t.delayClass = "error");
                break;
            }
            (t.rule = Object.assign({}, a.state.rule, t.rule)), a.setState(Object.assign({}, a.state, t));
          };
        }
        renderRule() {
          return React.createElement(
            "div",
            { className: "container edit-rule" },
            React.createElement(
              "div",
              { className: "form-group row" },
              React.createElement("label", { className: "col-form-label col-sm-4" }, weh._("smartnamer_domain")),
              React.createElement("input", {
                className: "form-control col-sm-8 " + this.state.domainClass,
                onChange: this.onChange("domain"),
                type: "text",
                value: this.state.rule.domain,
                disabled: !this.state.newRule
              })
            ),
            React.createElement(
              "div",
              { className: "form-group row" },
              React.createElement(
                "select",
                { className: "form-control col-sm-12", onChange: this.onChange("mode"), value: this.state.rule.mode },
                React.createElement("option", { value: "header-url" }, weh._("smartnamer_get_name_from_header_url")),
                React.createElement("option", { value: "page-title" }, weh._("smartnamer_get_name_from_page_title")),
                React.createElement("option", { value: "page-content" }, weh._("smartnamer_get_name_from_page_content")),
                React.createElement("option", { value: "obfuscated" }, weh._("smartnamer_get_obfuscated_name"))
              )
            ),
            React.createElement(
              "div",
              { className: "form-group row" },
              React.createElement("label", { className: "col-form-label col-sm-12" }, weh._("smartnamer_xpath_expr")),
              React.createElement("textarea", {
                className: "form-control col-sm-12 " + this.state.xpathClass,
                rows: "2",
                onChange: this.onChange("xpath"),
                value: this.state.rule.xpath
              })
            ),
            React.createElement(
              "div",
              { className: "form-group row" },
              React.createElement("label", { className: "col-form-label col-sm-6" }, weh._("smartnamer_regexp")),
              React.createElement("input", {
                className: "form-control col-sm-6 " + this.state.regexpClass,
                onChange: this.onChange("regexp"),
                type: "text",
                value: this.state.rule.regexp
              })
            ),
            React.createElement(
              "div",
              { className: "form-group row" },
              React.createElement("label", { className: "col-form-label col-sm-6" }, weh._("smartnamer_delay")),
              React.createElement("input", {
                className: "form-control col-sm-6 " + this.state.delayClass,
                onChange: this.onChange("delay"),
                type: "text",
                value: this.state.rule.delay
              })
            )
          );
        }
        render() {
          return React.createElement(
            "div",
            { className: "weh-shf smartname" },
            React.createElement(WehHeader, { title: weh._("smartnaming_rules") }),
            React.createElement("main", null, (this.state.rule && this.renderRule()) || this.renderAll()),
            this.state.rule &&
              React.createElement(
                "footer",
                null,
                React.createElement(
                  "div",
                  { className: "btn-toolbar float-right" },
                  React.createElement(
                    "div",
                    { className: "btn-group" },
                    React.createElement(
                      "button",
                      { type: "button", onClick: this.cancelRule(), className: "btn btn-outline-secondary" },
                      weh._("cancel")
                    ),
                    React.createElement(
                      "button",
                      {
                        type: "button",
                        onClick: this.saveRule(),
                        disabled: this.state.xpathClass || this.state.regexpClass || this.state.delayClass || this.state.domainClass,
                        className: "btn btn-primary"
                      },
                      weh._((this.state.newRule && "smartname_create_rule") || "smartname_update_rule")
                    )
                  )
                )
              )
          );
        }
      }
    );
    render(React.createElement(Provider, { store }, React.createElement(i, null)), document.getElementById("root")),
      weh.setPageTitle(weh._("smartnaming_rules"));
  });
})();
