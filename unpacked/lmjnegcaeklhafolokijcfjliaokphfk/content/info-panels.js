(() => {
  var e = {
      275: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.info = { lastVersion: "1.6.2" };
      },
      276: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })();
        var i = (t.LicInfoPanelComponent = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (n.state = { status: "verifying", email: null, key: null, editing: !1, editKey: "" }), n;
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            })(t, React.Component),
            a(t, [
              {
                key: "componentWillMount",
                value: function () {
                  this.check();
                }
              },
              {
                key: "check",
                value: function () {
                  var e = this;
                  e.setState({ status: "verifying", email: null, key: null }),
                    weh.rpc
                      .call("checkLicense")
                      .then(function (t) {
                        e.setState(t);
                      })
                      .catch(function (e) {
                        console.error("Error checking license", e);
                      });
                }
              },
              {
                key: "onLicKeyChanged",
                value: function () {
                  var e = this;
                  return function (t) {
                    e.setState({ editKey: t.target.value });
                  };
                }
              },
              {
                key: "onLicKeyPressed",
                value: function () {
                  var e = this;
                  return function (t) {
                    "Enter" == t.key ? e.register() : "Escape" == t.key && e.setState({ editing: !1 });
                  };
                }
              },
              {
                key: "registerEdit",
                value: function () {
                  var e = this;
                  return function () {
                    e.setState({ editing: !0, editKey: "" });
                  };
                }
              },
              {
                key: "getLicense",
                value: function () {
                  return function () {
                    var e = n(8).buildOptions.browser,
                      t = "https://www.downloadhelper.net/convert" + (e ? "?browser=" + encodeURIComponent(e) : "");
                    weh.rpc.call("goto", t);
                  };
                }
              },
              {
                key: "cancelRegister",
                value: function () {
                  var e = this;
                  return function () {
                    e.setState({ editing: !1 });
                  };
                }
              },
              {
                key: "register",
                value: function () {
                  var e = this;
                  this.setState({ editing: !1, status: "verifying" }),
                    this.validate(this.state.editKey.trim()).catch(function (t) {
                      e.setState({ status: "error", error: t.message });
                    });
                }
              },
              {
                key: "validate",
                value: function (e) {
                  var t = this;
                  return weh.rpc.call("validateLicense", e).then(function (e) {
                    e && "nocoapp" == e.status ? t.setState({ status: "nocoapp", key: e.key }) : t.check();
                  });
                }
              },
              {
                key: "render",
                value: function () {
                  var e = weh._("lic_status_" + this.state.status),
                    t = React.createElement(
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
                        { unverified: 1, locked: 1, accepted: 1, blocked: 1, nocoapp: 1, error: 1, mismatch: 1 }[this.state.status] &&
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
                      "unneeded" == this.state.status && React.createElement("div", null, weh._("lic_not_needed_linux")),
                      !this.state.editing &&
                        "unset" == this.state.status &&
                        React.createElement("div", null, weh._("no_license_registered")),
                      !this.state.editing &&
                        "nocoapp" == this.state.status &&
                        React.createElement("div", null, weh._("no_coapp_license_unverified")),
                      !this.state.editing &&
                        "mismatch" == this.state.status &&
                        this.state.brExt &&
                        React.createElement("div", null, weh._("lic_mismatch2", [this.state.brLicense, this.state.brExt])),
                      !this.state.editing &&
                        "mismatch" == this.state.status &&
                        !this.state.brExt &&
                        React.createElement("div", null, weh._("lic_mismatch1", [this.state.brLicense])),
                      !this.state.editing && "error" == this.state.status && React.createElement("div", null, this.state.error),
                      React.createElement("br", null),
                      React.createElement(
                        "div",
                        { className: "btn-toolbar float-right" },
                        React.createElement(
                          "div",
                          { className: "btn-group" },
                          !this.state.editing &&
                            "unneeded" != this.state.status &&
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
                            "nocoapp" == this.state.status &&
                            this.state.key &&
                            React.createElement(
                              "button",
                              {
                                className: "btn btn-outline-secondary",
                                onClick: function () {
                                  return weh.rpc.call("installCoApp");
                                }
                              },
                              weh._("coapp_install")
                            ),
                          !this.state.editing &&
                            "unneeded" != this.state.status &&
                            "nocoapp" != this.state.status &&
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
                                  disabled: 0 === this.state.editKey.trim().length,
                                  onClick: this.register.bind(this)
                                },
                                weh._("validate_license")
                              )
                            )
                        )
                      )
                    );
                  return React.createElement(
                    "div",
                    null,
                    React.createElement(CollapsibleSection, { title: e, content: t, open: this.props.open })
                  );
                }
              }
            ]),
            t
          );
        })());
        window.LicInfoPanel = i;
      },
      8: (e) => {
        e.exports = {
          buildDate: "Thu Aug 24 2023 16:27:56 GMT+0200 (Central European Summer Time)",
          buildOptions: { browser: "chrome", noyt: "true" },
          prod: !0
        };
      }
    },
    t = {};
  function n(a) {
    var i = t[a];
    if (void 0 !== i) return i.exports;
    var r = (t[a] = { exports: {} });
    return e[a](r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    var e = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }
      return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    })();
    function t(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }
    var r = n(275).info;
    n(276),
      (window.CollapsibleSection = (function (n) {
        function r(e) {
          t(this, r);
          var n = a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
          return (n.state = { open: n.props.open || !1 }), n;
        }
        return (
          i(r, React.Component),
          e(r, [
            {
              key: "componentWillReceiveProps",
              value: function (e) {
                e.open != this.props.open && this.setState({ open: !!e.open });
              }
            },
            {
              key: "toggle",
              value: function () {
                var e = this;
                return function () {
                  e.setState({ open: !e.state.open });
                };
              }
            },
            {
              key: "render",
              value: function () {
                return React.createElement(
                  "div",
                  { className: "collapsible-section" },
                  React.createElement(
                    "div",
                    { className: "section-header " + (this.state.open ? "section-open" : "section-close"), onClick: this.toggle() },
                    React.createElement("div", { className: "open-close-sign" }, this.state.open ? "⊖" : "⊕"),
                    React.createElement("span", { className: "title" }, this.props.title)
                  ),
                  React.createElement(
                    Collapse,
                    { isOpen: this.state.open },
                    React.createElement(Card, null, React.createElement(CardBody, null, this.props.content))
                  )
                );
              }
            }
          ]),
          r
        );
      })()),
      (window.AddonInfoPanel = (function (n) {
        function r(e) {
          t(this, r);
          var n = a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
          n.state = { manifest: browser.runtime.getManifest(), build: null };
          var i = n;
          return (
            weh.rpc.call("getBuild").then(function (e) {
              i.setState({ build: e });
            }),
            n
          );
        }
        return (
          i(r, React.Component),
          e(r, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state.manifest.version_name || this.state.manifest.version,
                  n = React.createElement(
                    "div",
                    null,
                    React.createElement("div", null, this.state.manifest.name),
                    React.createElement("div", null, weh._("version", t)),
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
                                .map(function (t) {
                                  return t + "=" + e.state.build.buildOptions[t];
                                })
                                .join(", ")
                            )
                          )
                      )
                  ),
                  a = this.state.manifest.name + " " + t;
                return React.createElement(CollapsibleSection, { title: a, content: n });
              }
            }
          ]),
          r
        );
      })()),
      (window.PlatformInfoPanel = (function (n) {
        function r(e) {
          t(this, r);
          var n = a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
          n.state = { platform: null, browser: null };
          var i = n;
          return (
            browser.runtime.getBrowserInfo &&
              browser.runtime.getBrowserInfo().then(function (e) {
                i.setState({ browser: e });
              }),
            browser.runtime.getPlatformInfo().then(function (e) {
              i.setState({ platform: e });
            }),
            n
          );
        }
        return (
          i(r, React.Component),
          e(r, [
            {
              key: "capitalize",
              value: function (e) {
                return e.substring(0, 1).toUpperCase() + e.substring(1);
              }
            },
            {
              key: "render",
              value: function () {
                var e = weh._("platform"),
                  t = React.createElement(
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
                return React.createElement(CollapsibleSection, { title: e, content: t });
              }
            }
          ]),
          r
        );
      })()),
      (window.CoAppInfoPanel = (function (n) {
        function s(e) {
          t(this, s);
          var n = a(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e));
          return (n.state = { status: null, info: null, error: null }), n;
        }
        return (
          i(s, React.Component),
          e(s, [
            {
              key: "componentWillMount",
              value: function () {
                this.check();
              }
            },
            {
              key: "check",
              value: function (e) {
                var t = this;
                t.setState({ status: null, info: null, error: null }),
                  Promise.resolve()
                    .then(function () {
                      if (e)
                        return weh.rpc
                          .call("coappProxy", "quit")
                          .catch(function () {})
                          .then(function () {
                            return new Promise(function (e, t) {
                              setTimeout(function () {
                                e();
                              }, weh.prefs.coappRestartDelay);
                            });
                          });
                    })
                    .then(function () {
                      weh.rpc.call("checkCoApp").then(function (e) {
                        t.setState(Object.assign({ status: null, info: null, error: null }, e));
                      });
                    });
              }
            },
            {
              key: "isMinimumVersion",
              value: function (e, t) {
                for (
                  var n = e.split(".").map(function (e) {
                      return parseInt(e);
                    }),
                    a = t.split(".").map(function (e) {
                      return parseInt(e);
                    }),
                    i = 0;
                  i < n.length;
                  i++
                ) {
                  if (void 0 === a[i]) return !0;
                  if (n[i] > a[i]) return !0;
                  if (n[i] < a[i]) return !1;
                }
                return !0;
              }
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = !1;
                null === this.state.status
                  ? (e = weh._("coapp_unchecked"))
                  : this.state.status
                  ? this.isMinimumVersion(this.state.info.version, r.lastVersion)
                    ? (e = weh._("coapp_installed"))
                    : ((e = weh._("coapp_outdated")), (t = !0))
                  : (e = weh._("coapp_not_installed"));
                var n = React.createElement(
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
                      t && React.createElement("div", null, weh._("coapp_latest_version", r.lastVersion)),
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
                        {
                          className: "btn btn-outline-primary",
                          onClick: function () {
                            return weh.rpc.call("installCoApp");
                          }
                        },
                        weh._("coapp_install")
                      ),
                    t &&
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-outline-primary",
                          onClick: function () {
                            return weh.rpc.call("installCoApp");
                          }
                        },
                        weh._("coapp_update")
                      )
                  )
                );
                return React.createElement("div", null, React.createElement(CollapsibleSection, { title: e, content: n }));
              }
            }
          ]),
          s
        );
      })());
  })();
})();
