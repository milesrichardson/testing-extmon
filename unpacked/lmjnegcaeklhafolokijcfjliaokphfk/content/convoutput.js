(() => {
  weh.is_safe.then(async () => {
    let g = await weh.prefs,
      b = combineReducers({
        prefs: g.reducer,
        configs: (e = {}, t) => {
          switch (t.type) {
            case "SET_CONFIGS":
              e = t.payload;
              break;
            case "UPDATE_CONFIG":
              (e = Object.assign({}, e, { [t.payload.id]: t.payload })), weh.rpc.call("setOutputConfigs", e).then(d);
              break;
            case "REMOVE_CONFIG":
              (e = Object.assign({}, e)), delete e[t.payload], weh.rpc.call("setOutputConfigs", e).then(d);
              break;
          }
          return e;
        },
        config: (e = null, t) => {
          switch (t.type) {
            case "SET_CONFIG":
              e = t.payload;
              break;
          }
          return e;
        },
        formats: (e = [], t) => {
          switch (t.type) {
            case "SET_FORMATS":
              e = t.payload;
              break;
          }
          return e;
        },
        codecs: (e = [], t) => {
          switch (t.type) {
            case "SET_CODECS":
              e = t.payload;
              break;
          }
          return e;
        }
      }),
      r = createStore(b);
    g.reduxDispatch(r);
    function d() {
      return weh.rpc.call("getOutputConfigs").then((e) => {
        r.dispatch({ type: "SET_CONFIGS", payload: e });
      });
    }
    d(),
      weh.rpc.call("getFormats").then((e) => {
        r.dispatch({
          type: "SET_FORMATS",
          payload: Object.keys(e)
            .sort()
            .map((t) => Object.assign({}, e[t], { name: t }))
        });
      }),
      weh.rpc.call("getCodecs").then((e) => {
        r.dispatch({
          type: "SET_CODECS",
          payload: Object.keys(e)
            .sort()
            .map((t) => Object.assign({}, e[t], { name: t }))
        });
      });
    let h = decodeURIComponent(new URL(document.URL).hash.substr(1));
    h && r.dispatch({ type: "SET_CONFIG", payload: h });
    var _ = connect((e, t) => ({ prefs: e.prefs, configs: e.configs, config: e.config, formats: e.formats, codecs: e.codecs }))(
      class extends React.Component {
        constructor(e) {
          super(e),
            (this.state = Object.assign({ actionButtonsOpen: !1, resetConfirmOpen: !1, activeTab: "general" }, this.stateFromProps(e)));
        }
        componentWillReceiveProps(e) {
          var t = this,
            o = (this.state && this.state.configId) || e.config;
          (!o || !e.configs[o]) &&
            (o = Object.keys(e.configs).sort(
              (i, l) => ((i = e.configs[i]), (l = e.configs[l]), i.title < l.title ? -1 : i.title > l.title ? 1 : 0)
            )[0]),
            this.setState(this.stateFromProps(e, o));
        }
        stateFromProps(e, t) {
          return (
            (e = e || this.props),
            (t = t || (this.state && this.state.configId) || e.config || ""),
            { configId: t, config: Object.assign({}, e.configs[t]) }
          );
        }
        toggleActionButtons() {
          this.setState({ actionButtonsOpen: !this.state.actionButtonsOpen });
        }
        toggleResetConfirm() {
          this.setState({ resetConfirmOpen: !this.state.resetConfirmOpen });
        }
        setActiveTab(e) {
          this.setState({ activeTab: e });
        }
        local(e, ...t) {
          var o = this;
          return () => {
            o[e].apply(o, t);
          };
        }
        changeConfig() {
          var e = this;
          return (t) => {
            var o = t.target.value;
            e.setState(e.stateFromProps(e.props, o));
          };
        }
        changeTitle() {
          var e = this;
          return (t) => {
            e.setState({ config: Object.assign({}, e.state.config, { title: t.target.value }) });
          };
        }
        duplicate() {
          var e = "" + Date.now(),
            t = Object.assign({}, this.state.config, {
              params: Object.assign({}, this.state.config.params),
              readonly: !1,
              title: weh._("copy_of", this.state.config.title),
              id: e
            });
          this.setState({ configId: e, config: t });
        }
        reset() {
          this.setState({ resetConfirmOpen: !0 });
        }
        doReset() {
          var e = this;
          weh.rpc.call("resetOutputConfigs").then(() => {
            e.setState({ resetConfirmOpen: !1 }), d();
          });
        }
        shouldSave() {
          if (!this.state.configId) return !1;
          var e = this.props.configs[this.state.configId];
          return e ? !deepEqual(e, this.state.config) : !0;
        }
        canReset() {
          if (!this.props.configs[this.state.configId]) return !0;
          for (var e = Object.keys(this.props.configs), t = 0; t < e.length; t++) if (!this.props.configs[e[t]].readonly) return !0;
          return !1;
        }
        save() {
          r.dispatch({ type: "UPDATE_CONFIG", payload: this.state.config });
        }
        remove() {
          r.dispatch({ type: "REMOVE_CONFIG", payload: this.state.config.id });
        }
        create() {
          var e = "" + Date.now(),
            t = { id: e, title: weh._("custom_output"), ext: "xxx", readonly: !1, params: {} };
          this.setState({ configId: e, config: t });
        }
        renderParameterList(e) {
          if (!this.state.config.params) return null;
          var t = this;
          let o = [
            { label: weh._("yes"), value: !0 },
            { label: weh._("no"), value: !1 }
          ];
          var i = this.getParameters()[e],
            l = [];
          return (
            this.state.config.readonly
              ? i.forEach((a) => {
                  var n = "";
                  if (a.paramValue) {
                    if (((n = t.state.config.params[a.paramValue]), typeof n > "u")) return;
                  } else if (a.configValue && ((n = t.state.config[a.configValue]), typeof n > "u" || n === null)) return;
                  l.push(
                    React.createElement(
                      "div",
                      { key: a.paramValue || a.configValue, className: "param" },
                      React.createElement("div", { className: "paramname" }, weh._(a.label)),
                      React.createElement("div", { className: "paramvalue" }, n)
                    )
                  );
                })
              : i.forEach((a) => {
                  var n = "",
                    f = !0;
                  a.paramValue
                    ? ((n = t.state.config.params[a.paramValue]), typeof n > "u" && (f = !1))
                    : a.configValue && (n = t.state.config[a.configValue]),
                    a.type == "boolean" && (n = !!n);
                  var p = [],
                    u;
                  (a.type == "select" || a.type == "boolean") &&
                    ((p = a.options),
                    a.type == "boolean" && (p = o),
                    (p = p.map((c) => {
                      var s, v;
                      return (
                        typeof c == "object" ? ((s = c.value), (v = c.label)) : ((s = c), (v = c)),
                        typeof u > "u" && (u = s),
                        React.createElement("option", { key: "" + s, value: s }, v)
                      );
                    })));
                  function w() {
                    return (c) => {
                      var s = Object.assign({}, t.state.config.params);
                      if (c.target.checked)
                        switch (a.type) {
                          case "string":
                            s[a.paramValue] = "";
                            break;
                          case "select":
                            s[a.paramValue] = u;
                            break;
                          case "boolean":
                            s[a.paramValue] = !0;
                            break;
                        }
                      else delete s[a.paramValue];
                      t.setState({ config: Object.assign({}, t.state.config, { params: s }) });
                    };
                  }
                  function m() {
                    return (c) => {
                      var s = Object.assign({}, t.state.config);
                      a.paramValue
                        ? ((s.params = Object.assign({}, s.params)), (s.params[a.paramValue] = c.target.value))
                        : (s[a.configValue] = c.target.value),
                        a.type == "boolean" && (s[a.configValue] = s[a.configValue] === "true"),
                        t.setState({ config: s });
                    };
                  }
                  var y = a.style || {};
                  (n === null || typeof n > "u") && (n = ""),
                    l.push(
                      React.createElement(
                        "div",
                        { key: "" + a.paramValue + "/" + a.configValue, className: "param" },
                        React.createElement("div", { className: "paramname" }, weh._(a.label)),
                        React.createElement(
                          "div",
                          { className: "paramedit" },
                          React.createElement("span", { style: { display: f ? "none" : "inline-block" } }, n),
                          a.type === "string" &&
                            React.createElement(
                              "div",
                              { style: { display: f ? "inline-block" : "none" } },
                              React.createElement("input", { value: n, onChange: m(), style: y, type: "text" })
                            ),
                          (a.type === "select" || a.type == "boolean") &&
                            React.createElement(
                              "div",
                              { style: { display: f ? "inline-block" : "none" } },
                              React.createElement("select", { onChange: m(), style: y, className: "form-control", value: n }, p)
                            ),
                          a.paramValue && React.createElement("input", { onChange: w(), type: "checkbox", checked: f })
                        )
                      )
                    );
                }),
            React.createElement("div", { className: "paramlist" }, l)
          );
        }
        render() {
          var e = this,
            t = Object.keys(this.props.configs)
              .sort((i, l) => ((i = e.props.configs[i]), (l = e.props.configs[l]), i.title < l.title ? -1 : i.title > l.title ? 1 : 0))
              .map((i) => React.createElement("option", { key: i, value: i }, e.props.configs[i].title)),
            o = this.shouldSave();
          return React.createElement(
            "div",
            { className: "convconfs" },
            React.createElement(
              "div",
              { className: "toprow" },
              React.createElement(
                "div",
                { className: "selector" },
                React.createElement(
                  "select",
                  { value: this.state.configId, onChange: this.changeConfig(), className: "form-control" },
                  !this.props.configs[this.state.configId] &&
                    React.createElement("option", { value: "this.state.configId" }, this.state.config.title),
                  t
                )
              ),
              React.createElement(
                "div",
                { className: "confname" },
                React.createElement("input", {
                  type: "text",
                  onChange: this.changeTitle(),
                  readOnly: this.state.config && this.state.config.readonly,
                  value: (this.state.config && this.state.config.title) || "",
                  className: "form-control"
                })
              ),
              React.createElement(
                "div",
                { className: "btn-group btn-primary" },
                o && React.createElement(Button, { onClick: this.local("save"), type: "button", color: "success" }, weh._("convconf_save")),
                !o &&
                  React.createElement(
                    Button,
                    { onClick: this.local("duplicate"), type: "button", color: "secondary" },
                    weh._("convconf_duplicate")
                  ),
                React.createElement(
                  ButtonDropdown,
                  { isOpen: this.state.actionButtonsOpen, toggle: this.local("toggleActionButtons") },
                  React.createElement(DropdownToggle, { caret: !0, color: o ? "success" : "secondary" }),
                  React.createElement(
                    DropdownMenu,
                    null,
                    React.createElement(DropdownItem, null),
                    React.createElement(DropdownItem, { onClick: this.local("create") }, weh._("convconf_new")),
                    React.createElement(DropdownItem, { divider: !0 }),
                    React.createElement(
                      DropdownItem,
                      { onClick: this.local("remove"), disabled: this.state.config.readonly },
                      weh._("convconf_remove")
                    ),
                    React.createElement(DropdownItem, { disabled: !this.canReset(), onClick: this.local("reset") }, weh._("convconf_reset"))
                  )
                )
              )
            ),
            this.state.config &&
              this.state.config.readonly &&
              React.createElement("div", { className: "notice" }, weh._("convconf_readonly")),
            React.createElement(
              "div",
              { className: "params" },
              React.createElement(
                Nav,
                { tabs: !0 },
                React.createElement(
                  NavItem,
                  null,
                  React.createElement(
                    NavLink,
                    { className: this.state.activeTab === "general" ? "active" : "", onClick: this.local("setActiveTab", "general") },
                    weh._("general")
                  )
                ),
                React.createElement(
                  NavItem,
                  null,
                  React.createElement(
                    NavLink,
                    { className: this.state.activeTab === "advanced" ? "active" : "", onClick: this.local("setActiveTab", "advanced") },
                    weh._("advanced")
                  )
                )
              ),
              React.createElement(
                TabContent,
                { activeTab: this.state.activeTab },
                React.createElement(TabPane, { tabId: "general" }, this.renderParameterList("general")),
                React.createElement(TabPane, { tabId: "advanced" }, this.renderParameterList("advanced"))
              )
            ),
            React.createElement(
              Modal,
              { isOpen: this.state.resetConfirmOpen, toggle: this.local("toggleResetConfirm"), className: this.props.className },
              React.createElement(ModalHeader, { toggle: this.local("toggleResetConfirm") }),
              React.createElement(ModalBody, null, weh._("convconf_reset_confirm")),
              React.createElement(
                ModalFooter,
                null,
                React.createElement(Button, { color: "secondary", onClick: this.local("toggleResetConfirm") }, weh._("cancel")),
                React.createElement(Button, { color: "primary", onClick: this.local("doReset") }, weh._("convconf_reset")),
                " "
              )
            )
          );
        }
        getEncodingCodecs(e) {
          return this.props.codecs.filter((t) => (t.t = e)).map((t) => t.name);
        }
        getEncodingFormats() {
          return this.props.formats.filter((e) => !!e.e).map((e) => e.name);
        }
        getParameters() {
          let e = ["vcd", "svcd", "dvd", "dv", "dv50"],
            t = ["", "pal-", "ntsc-", "film-"];
          var o = [];
          return (
            e.forEach((l) => {
              t.forEach((a) => {
                o.push(a + l);
              });
            }),
            {
              general: [
                { label: "convconf_ext", type: "string", configValue: "ext" },
                { label: "convconf_container", type: "select", paramValue: "f", options: this.getEncodingFormats() },
                { label: "convconf_vcodec", type: "select", paramValue: "c:v", options: this.getEncodingCodecs("V") },
                { label: "convconf_acodec", type: "select", paramValue: "c:a", options: this.getEncodingCodecs("A") },
                { label: "convconf_audioonly", type: "boolean", configValue: "audioonly" },
                { label: "convconf_videobitrate", type: "string", paramValue: "b:v" },
                { label: "convconf_target", type: "select", paramValue: "target", options: o },
                { label: "convconf_rate", type: "string", paramValue: "r" }
              ],
              advanced: [
                { label: "convconf_2passes", type: "boolean", configValue: "twopasses" },
                { label: "convconf_size", type: "string", paramValue: "s" },
                { label: "convconf_audiofreq", type: "string", paramValue: "ar" },
                { label: "convconf_audiobitrate", type: "string", paramValue: "b:a" },
                {
                  label: "convconf_ac",
                  type: "select",
                  paramValue: "ac",
                  options: [
                    { value: 0, label: weh._("convconf_acnone") },
                    { value: 1, label: weh._("convconf_mono") },
                    { value: 2, label: weh._("convconf_stereo") }
                  ]
                },
                { label: "convconf_aspect", type: "select", paramValue: "aspect", options: ["4:3", "16:9"] },
                {
                  label: "convconf_preset",
                  type: "select",
                  paramValue: "preset",
                  options: ["ultrafast", "superfast", "veryfast", "faster", "fast", "medium", "slow", "slower", "veryslow", "placebo"]
                },
                {
                  label: "convconf_tune",
                  type: "select",
                  paramValue: "tune",
                  options: ["film", "animation", "grain", "stillimage", "psnr", "ssim", "fastdecode", "zerolatency"]
                },
                { label: "convconf_profilev", type: "select", paramValue: "profile:v", options: ["baseline", "main", "high"] },
                { label: "convconf_level", type: "string", paramValue: "level" },
                { label: "convconf_extra", type: "string", configValue: "extra", style: { minWidth: "500px" } }
              ]
            }
          );
        }
      }
    );
    render(
      React.createElement(
        Provider,
        { store: r },
        React.createElement(
          "div",
          { className: "weh-shf" },
          React.createElement(
            "div",
            null,
            React.createElement(WehHeader, { title: weh._("conversion_outputs") }),
            React.createElement("main", null, React.createElement(_, null))
          )
        )
      ),
      document.getElementById("root")
    ),
      weh.setPageTitle(weh._("conversion_outputs"));
  });
})();
