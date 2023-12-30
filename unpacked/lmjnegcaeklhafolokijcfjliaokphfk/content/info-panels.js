(() => {
  var l = Object.defineProperty;
  var w = Object.getOwnPropertyDescriptor;
  var f = Object.getOwnPropertyNames;
  var _ = Object.prototype.hasOwnProperty;
  var c = (i, t) => () => (i && (t = i((i = 0))), t);
  var g = (i, t) => () => (t || i((t = { exports: {} }).exports, t), t.exports),
    d = (i, t) => {
      for (var e in t) l(i, e, { get: t[e], enumerable: !0 });
    },
    y = (i, t, e, s) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let n of f(t)) !_.call(i, n) && n !== e && l(i, n, { get: () => t[n], enumerable: !(s = w(t, n)) || s.enumerable });
      return i;
    };
  var h = (i) => y(l({}, "__esModule", { value: !0 }), i);
  var u = {};
  d(u, { info: () => k });
  var k,
    p = c(() => {
      k = { lastVersion: "2.0.10" };
    });
  var v = g((N, C) => {
    C.exports = {
      prod: !0,
      beta: !1,
      buildDate: "mer. 20 d\xE9c. 2023 16:32:19 UTC",
      buildOptions: { linuxlic: !1, noyt: !0, browser: "chrome" }
    };
  });
  var b = {};
  d(b, { LicInfoPanelComponent: () => r });
  var r,
    m = c(() => {
      r = class extends React.Component {
        constructor(t) {
          super(t), (this.state = { status: "verifying", email: null, key: null, editing: !1, editKey: "" });
        }
        componentWillMount() {
          this.check();
        }
        check() {
          var t = this;
          t.setState({ status: "verifying", email: null, key: null }),
            weh.rpc
              .call("checkLicense")
              .then((e) => {
                t.setState(e);
              })
              .catch((e) => {
                console.error("Error checking license", e);
              });
        }
        onLicKeyChanged() {
          var t = this;
          return (e) => {
            t.setState({ editKey: e.target.value });
          };
        }
        onLicKeyPressed() {
          var t = this;
          return (e) => {
            e.key == "Enter" ? t.register() : e.key == "Escape" && t.setState({ editing: !1 });
          };
        }
        registerEdit() {
          var t = this;
          return () => {
            t.setState({ editing: !0, editKey: "" });
          };
        }
        getLicense() {
          return () => {
            let t = v().buildOptions.browser,
              s = "https://www.downloadhelper.net/convert" + (t ? "?browser=" + encodeURIComponent(t) : "");
            weh.rpc.call("goto", s);
          };
        }
        cancelRegister() {
          var t = this;
          return () => {
            t.setState({ editing: !1 });
          };
        }
        register() {
          var t = this;
          this.setState({ editing: !1, status: "verifying" }),
            this.validate(this.state.editKey.trim()).catch((e) => {
              t.setState({ status: "error", error: e.message });
            });
        }
        validate(t) {
          var e = this;
          return weh.rpc.call("validateLicense", t).then((s) => {
            s && s.status == "nocoapp" ? e.setState({ status: "nocoapp", key: s.key }) : e.check();
          });
        }
        render() {
          let t = { unverified: 1, locked: 1, accepted: 1, blocked: 1, nocoapp: 1, error: 1, mismatch: 1 };
          var e = weh._("lic_status_" + this.state.status),
            s = React.createElement(
              "div",
              { className: "lic-info-panel" },
              this.state.editing &&
                React.createElement(
                  "div",
                  { className: "input-license" },
                  React.createElement("label", null, weh._("license_key")),
                  React.createElement("input", {
                    value: this.state.editKey,
                    onChange: this.onLicKeyChanged(),
                    onKeyDown: this.onLicKeyPressed()
                  })
                ),
              !this.state.editing &&
                t[this.state.status] &&
                this.state.key &&
                React.createElement(
                  "div",
                  { className: "license-details" },
                  React.createElement(
                    "table",
                    null,
                    React.createElement(
                      "tbody",
                      null,
                      this.state.email &&
                        React.createElement(
                          "tr",
                          null,
                          React.createElement("td", null, weh._("registered_email")),
                          React.createElement("td", null, this.state.email)
                        ),
                      this.state.key &&
                        React.createElement(
                          "tr",
                          null,
                          React.createElement("td", null, weh._("registered_key")),
                          React.createElement("td", null, this.state.key)
                        )
                    )
                  )
                ),
              this.state.status == "unneeded" && React.createElement("div", null, weh._("lic_not_needed_linux")),
              !this.state.editing && this.state.status == "unset" && React.createElement("div", null, weh._("no_license_registered")),
              !this.state.editing &&
                this.state.status == "nocoapp" &&
                React.createElement("div", null, weh._("no_coapp_license_unverified")),
              !this.state.editing &&
                this.state.status == "mismatch" &&
                this.state.brExt &&
                React.createElement("div", null, weh._("lic_mismatch2", [this.state.brLicense, this.state.brExt])),
              !this.state.editing &&
                this.state.status == "mismatch" &&
                !this.state.brExt &&
                React.createElement("div", null, weh._("lic_mismatch1", [this.state.brLicense])),
              !this.state.editing && this.state.status == "error" && React.createElement("div", null, this.state.error),
              React.createElement("br", null),
              React.createElement(
                "div",
                { className: "btn-toolbar float-right" },
                React.createElement(
                  "div",
                  { className: "btn-group" },
                  !this.state.editing &&
                    this.state.status != "unneeded" &&
                    this.state.key &&
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "button",
                        { className: "btn btn-outline-secondary", onClick: this.validate.bind(this, this.state.key) },
                        weh._("recheck_license")
                      )
                    ),
                  !this.state.editing &&
                    this.state.status == "nocoapp" &&
                    this.state.key &&
                    React.createElement(
                      "button",
                      { className: "btn btn-outline-secondary", onClick: () => weh.rpc.call("installCoApp") },
                      weh._("coapp_install")
                    ),
                  !this.state.editing &&
                    this.state.status != "unneeded" &&
                    this.state.status != "nocoapp" &&
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "button",
                        { className: "btn btn-outline-secondary", onClick: this.registerEdit() },
                        weh._("register_existing_license")
                      ),
                      React.createElement(
                        "button",
                        { className: "btn btn-outline-secondary", onClick: this.getLicense() },
                        weh._("get_conversion_license")
                      )
                    ),
                  this.state.editing &&
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "button",
                        { className: "btn btn-outline-secondary", onClick: this.cancelRegister() },
                        weh._("cancel")
                      ),
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-outline-primary",
                          disabled: this.state.editKey.trim().length === 0,
                          onClick: this.register.bind(this)
                        },
                        weh._("validate_license")
                      )
                    )
                )
              )
            );
          return React.createElement("div", null, React.createElement(CollapsibleSection, { title: e, content: s, open: this.props.open }));
        }
      };
      window.LicInfoPanel = r;
    });
  weh.is_safe.then(() => {
    let { info: i } = (p(), h(u));
    m(),
      (window.CollapsibleSection = class extends React.Component {
        constructor(t) {
          super(t), (this.state = { open: this.props.open || !0 });
        }
        componentWillReceiveProps(t) {
          t.open != this.props.open && this.setState({ open: !!t.open });
        }
        toggle() {
          var t = this;
          return () => {
            t.setState({ open: !t.state.open });
          };
        }
        render() {
          return React.createElement(
            "div",
            { className: "collapsible-section" },
            React.createElement(
              "div",
              { className: "section-header " + (this.state.open ? "section-open" : "section-close"), onClick: this.toggle() },
              React.createElement("div", { className: "open-close-sign" }, this.state.open ? "\u2296" : "\u2295"),
              React.createElement("span", { className: "title" }, this.props.title)
            ),
            React.createElement(
              Collapse,
              { isOpen: this.state.open },
              React.createElement(Card, null, React.createElement(CardBody, null, this.props.content))
            )
          );
        }
      }),
      (window.AddonInfoPanel = class extends React.Component {
        constructor(t) {
          super(t), (this.state = { manifest: browser.runtime.getManifest(), build: null });
          var e = this;
          weh.rpc.call("getBuild").then((s) => {
            e.setState({ build: s });
          });
        }
        render() {
          var t = this;
          let e = this.state.manifest.version_name || this.state.manifest.version,
            s = React.createElement(
              "div",
              null,
              React.createElement("div", null, this.state.manifest.name),
              React.createElement("div", null, weh._("version", e) + (this.state.build?.beta ? " (beta)" : "")),
              React.createElement("div", null, weh._("browser_locale", browser.i18n.getUILanguage())),
              this.state.build &&
                React.createElement(
                  "div",
                  null,
                  React.createElement("div", null, this.state.build.prod ? weh._("prod_build") : weh._("dev_build")),
                  React.createElement("div", null, weh._("built_on", this.state.build.buildDate)),
                  Object.keys(this.state.build.buildOptions).length > 0 &&
                    React.createElement(
                      "div",
                      null,
                      weh._(
                        "build_options",
                        Object.keys(this.state.build.buildOptions)
                          .sort()
                          .map((a) => a + "=" + t.state.build.buildOptions[a])
                          .join(", ")
                      )
                    )
                )
            ),
            n = this.state.manifest.name + " " + e + (this.state.build?.beta ? " (beta)" : "");
          return React.createElement(CollapsibleSection, { title: n, content: s });
        }
      }),
      (window.PlatformInfoPanel = class extends React.Component {
        constructor(t) {
          super(t), (this.state = { platform: null, browser: null });
          var e = this;
          browser.runtime.getBrowserInfo &&
            browser.runtime.getBrowserInfo().then((s) => {
              e.setState({ browser: s });
            }),
            browser.runtime.getPlatformInfo().then((s) => {
              e.setState({ platform: s });
            });
        }
        capitalize(t) {
          return t.substring(0, 1).toUpperCase() + t.substring(1);
        }
        render() {
          let t = weh._("platform"),
            e = React.createElement(
              "div",
              null,
              this.state.platform &&
                React.createElement(
                  "div",
                  null,
                  weh._("platform_info", [this.capitalize(this.state.platform.os), this.state.platform.arch])
                ),
              (this.state.browser &&
                React.createElement(
                  "div",
                  null,
                  weh._("browser_info", [this.state.browser.vendor, this.state.browser.name, this.state.browser.version])
                )) ||
                React.createElement("div", null, navigator.userAgent)
            );
          return React.createElement(CollapsibleSection, { title: t, content: e });
        }
      }),
      (window.CoAppInfoPanel = class extends React.Component {
        constructor(t) {
          super(t), (this.state = { status: null, info: null, error: null });
        }
        componentWillMount() {
          this.check();
        }
        async check(t) {
          var e = this;
          let s = await weh.prefs;
          e.setState({ status: null, info: null, error: null }),
            Promise.resolve()
              .then(() => {
                if (t)
                  return weh.rpc
                    .call("coappProxy", "quit")
                    .catch(() => {})
                    .then(
                      () =>
                        new Promise((n, a) => {
                          setTimeout(() => {
                            n();
                          }, s.coappRestartDelay);
                        })
                    );
              })
              .then(() => {
                weh.rpc.call("checkCoApp").then((n) => {
                  e.setState(Object.assign({ status: null, info: null, error: null }, n));
                });
              });
        }
        isMinimumVersion(t, e) {
          for (var s = t.split(".").map((o) => parseInt(o)), n = e.split(".").map((o) => parseInt(o)), a = 0; a < s.length; a++) {
            if (typeof n[a] > "u" || s[a] > n[a]) return !0;
            if (s[a] < n[a]) return !1;
          }
          return !0;
        }
        render() {
          var t = !1,
            e;
          this.state.status === null
            ? (e = weh._("coapp_unchecked"))
            : this.state.status
            ? this.isMinimumVersion(this.state.info.version, i.lastVersion)
              ? (e = weh._("coapp_installed"))
              : ((e = weh._("coapp_outdated")), (t = !0))
            : (e = weh._("coapp_not_installed"));
          var s = React.createElement(
            "div",
            null,
            this.state.error &&
              React.createElement(
                "div",
                null,
                weh._("coapp_error"),
                "  ",
                React.createElement("em", null, this.state.error.message || this.state.error)
              ),
            this.state.status &&
              React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  null,
                  weh._("coapp_found"),
                  "  ",
                  React.createElement("em", null, this.state.info.displayName, " ", this.state.info.version)
                ),
                t && React.createElement("div", null, weh._("coapp_latest_version", i.lastVersion)),
                React.createElement("div", null, weh._("coapp_path"), "  ", React.createElement("em", null, this.state.info.binary))
              ),
            React.createElement("br", null),
            React.createElement(
              "div",
              { className: "btn-toolbar float-right" },
              React.createElement(
                "button",
                { className: "btn btn-outline-secondary", onClick: this.check.bind(this, !0) },
                weh._("coapp_recheck")
              ),
              !this.state.status &&
                React.createElement(
                  "button",
                  { className: "btn btn-outline-primary", onClick: () => weh.rpc.call("installCoApp") },
                  weh._("coapp_install")
                ),
              t &&
                React.createElement(
                  "button",
                  { className: "btn btn-outline-primary", onClick: () => weh.rpc.call("installCoApp") },
                  weh._("coapp_update")
                )
            )
          );
          return React.createElement("div", null, React.createElement(CollapsibleSection, { title: e, content: s }));
        }
      });
  });
})();
