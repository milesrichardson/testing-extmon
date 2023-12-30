(() => {
  weh.is_safe.then(() => {
    let n = combineReducers({
        data: (e = { mode: "page-title", domains: [], domain: "", ref: null, xpath: null, regex: null, delay: 0 }, a) => {
          switch (a.type) {
            case "SET_DATA":
              e = Object.assign({}, e, a.payload);
              break;
          }
          return e;
        }
      }),
      o = createStore(n);
    weh.rpc.listen({
      setData: (e) => {
        o.dispatch({ type: "SET_DATA", payload: e });
      }
    });
    var d = connect((e, a) => ({ data: e.data }))(
      class extends React.Component {
        constructor(e) {
          super(e),
            (this.state = {
              selected: "",
              mode: "page-title",
              domain: "",
              domains: [],
              xpath: null,
              regex: null,
              delay: 0,
              advanced: !1,
              regexpClass: "",
              xpathClass: "",
              delayClass: ""
            });
        }
        componentWillReceiveProps(e) {
          e.data.mode == "page-content" &&
            e.data.xpath !== this.state.xpath &&
            weh.rpc.call("selectSmartNameXPath", e.data.ref, e.data.xpath);
          for (var a = [], l = e.data.domain.split("."), s = 0; s < l.length - 1; s++) a.push(l.slice(s).join("."));
          var t = a[0];
          a.indexOf(this.state.domain) >= 0 && (t = this.state.domain);
          var r = this;
          this.setState(
            {
              selected: "",
              mode: e.data.mode || "page-content",
              xpath: e.data.xpath,
              xpathClass: "",
              regexp: ".*",
              regexpClass: "",
              domains: a,
              domain: t
            },
            () => {
              r.evaluate(e);
            }
          ),
            window.addEventListener("beforeunload", () => {
              weh.rpc.call("closedSmartNameDefiner", r.props.data.ref);
            });
        }
        evaluate(e) {
          e = e || this.props;
          var a = this;
          weh.rpc
            .call("evaluateSmartName", e.data.ref, { mode: this.state.mode, xpath: this.state.xpath, regexp: this.state.regexp })
            .then((l) => {
              a.setState({ selected: l || "" });
            })
            .catch((l) => {
              a.setState({ selected: "" });
            });
        }
        save() {
          var e = this;
          return () => {
            weh.rpc
              .call("addSmartNameRule", {
                domain: e.state.domain,
                mode: e.state.mode,
                xpath: e.state.xpath,
                regexp: e.state.regexp,
                delay: e.state.delay
              })
              .then(() => {
                weh.rpc.call("closeSmartNameDefiner");
              });
          };
        }
        onChange(e) {
          var a = this;
          return (l) => {
            if (e === "advanced") return a.setState({ advanced: l.target.checked });
            var s = l.target.value,
              t = {},
              r = !1;
            switch (e) {
              case "mode":
                t.mode = s;
                break;
              case "xpath":
                t.xpath = s;
                try {
                  document.evaluate(s, document, null, XPathResult.STRING_TYPE, null),
                    (t.xpathClass = ""),
                    weh.rpc.call("selectSmartNameXPath", a.props.data.ref, s);
                } catch {
                  (t.xpathClass = "error"), (r = !0);
                }
                break;
              case "regexp":
                t.regexp = s;
                try {
                  new RegExp(s), (t.regexpClass = "");
                } catch {
                  (t.regexpClass = "error"), (r = !0);
                }
                break;
              case "domain":
                t.domain = s;
                break;
              case "delay":
                (t.delay = s), /^[0-9]+$/.test(s) ? (t.delayClass = "") : (t.delayClass = "error");
                break;
            }
            a.setState(t, () => {
              !r && ["mode", "xpath", "regexp"].indexOf(e) >= 0 && a.evaluate();
            });
          };
        }
        renderParams() {
          var e = this.state.domains.map((a) => React.createElement("option", { key: a, value: a }, a));
          return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "form-group row" },
              React.createElement("label", { className: "col-form-label col-sm-4" }, weh._("smartnamer_domain")),
              React.createElement(
                "select",
                { className: "form-control col-sm-8", onChange: this.onChange("domain"), value: this.state.domain },
                e
              )
            ),
            React.createElement(
              "div",
              { className: "form-group row" },
              React.createElement(
                "select",
                { className: "form-control col-sm-12", onChange: this.onChange("mode"), value: this.state.mode },
                React.createElement("option", { value: "header-url" }, weh._("smartnamer_get_name_from_header_url")),
                React.createElement("option", { value: "page-title" }, weh._("smartnamer_get_name_from_page_title")),
                React.createElement("option", { value: "page-content" }, weh._("smartnamer_get_name_from_page_content")),
                React.createElement("option", { value: "obfuscated" }, weh._("smartnamer_get_obfuscated_name"))
              )
            ),
            this.state.advanced &&
              React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("label", { className: "col-form-label col-sm-12" }, weh._("smartnamer_xpath_expr")),
                  React.createElement("textarea", {
                    className: "form-control col-sm-12 " + this.state.xpathClass,
                    rows: "2",
                    onChange: this.onChange("xpath"),
                    value: this.state.xpath
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
                    value: this.state.regexp
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
                    value: this.state.delay
                  })
                )
              )
          );
        }
        render() {
          return React.createElement(
            "div",
            { className: "smartname-definer" },
            React.createElement(WehHeader, { title: weh._("smartname_define") }),
            React.createElement(
              "header",
              null,
              React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("input", {
                    className: "form-control col-sm-12",
                    title: weh._("smartnamer_selected_text"),
                    type: "text",
                    disabled: !0,
                    value: this.state.selected
                  })
                )
              )
            ),
            React.createElement("main", null, this.renderParams()),
            React.createElement(
              "footer",
              null,
              React.createElement(
                "div",
                { className: "btn-toolbar" },
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement("input", {
                    id: "advanced",
                    className: "form-control col-sm-1",
                    type: "checkbox",
                    onChange: this.onChange("advanced"),
                    checked: this.state.advanced
                  }),
                  React.createElement("label", { htmlFor: "advanced", className: "col-form-label col-sm-10" }, weh._("advanced"))
                ),
                React.createElement(
                  "div",
                  { className: "btn-group pull-right" },
                  React.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: this.save(),
                      disabled: this.state.xpathClass || this.state.regexpClass || this.state.delayClass,
                      className: "btn btn-primary"
                    },
                    weh._("save")
                  )
                )
              )
            )
          );
        }
      }
    );
    render(
      React.createElement(Provider, { store: o }, React.createElement("div", { className: "weh-shf" }, React.createElement(d, null))),
      document.getElementById("root")
    ),
      weh.setPageTitle(weh._("smartname_define")),
      weh.trigger("smartname-define");
  });
})();
