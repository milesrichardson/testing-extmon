(() => {
  weh.is_safe.then(() => {
    let h = combineReducers({ prefs: prefsSettingsReducer }),
      i = createStore(h);
    listenPrefs(i);
    function n(...o) {
      return () => {
        weh.rpc.call(...o);
      };
    }
    let p = {
      renderInput: function () {
        var o = this;
        return React.createElement(
          "div",
          { className: "input-group", id: "weh-param-" + o.paramIndex },
          React.createElement("input", {
            ref: (e) => {
              e && (e.value = o.state.value);
            },
            onChange: p.onChange.bind(o),
            className: "form-control"
          }),
          React.createElement(
            "span",
            { className: "input-group-btn" },
            React.createElement("button", { className: "btn", onClick: () => p.selectDirectory.call(o) }, weh._("change"))
          )
        );
      },
      selectDirectory: function () {
        var o = this;
        weh.rpc.call("selectDirectory", this.state.value).then((e) => {
          e && o.setCustomValue(e.directory);
        });
      },
      onChange: function (o) {
        var e = this,
          t = o.target;
        weh.rpc
          .call("coappProxy", "path.homeJoin", t.value)
          .then((a) => ((t.value = a), e.setCustomValue(a), weh.rpc.call("coappProxy", "fs.stat", a)))
          .then((a) => {
            if (!a || a.mode & !1) throw new Error();
            t.style.backgroundColor = "#e8ffe8";
          })
          .catch(() => {
            t.style.backgroundColor = "#ffe8e8";
          });
      }
    };
    class f extends React.Component {
      constructor(e) {
        super(e),
          (this.state = { activeTab: "general", moreOpen: !1, conversion: void 0, modal: null }),
          (this.fileInputChange = this.fileInputChange.bind(this));
      }
      setActiveTab(e) {
        this.setState({ activeTab: e, conversion: !1 });
      }
      copyInfoToClipboard() {
        return async () => {
          let e = browser.runtime.getManifest(),
            t = e.version_name ?? e.version,
            a = await weh.rpc.call("getBuild"),
            s = a.buildOptions,
            c = await browser.runtime.getPlatformInfo(),
            d = browser.i18n.getUILanguage(),
            l = await weh.rpc.call("checkCoApp"),
            m = await weh.rpc.call("checkLicense"),
            r = "";
          (r += `version: ${t}
`),
            (r += `beta: ${a.beta}
`),
            (r += `build date: ${a.buildDate}
`),
            (r += `build options: linuxlic: ${s.linuxlic}, noyt: ${s.noyt}, browser: ${s.browser}
`),
            (r += `lang: ${d}
`),
            (r += `license: ${m.status}
`),
            m.key &&
              (r += `key (only first 16 fisrt characters): ${m.key.substring(0, 16)}
`),
            (r += `platform: ${c.arch} ${c.os}
`),
            (r += `UA: ${navigator.userAgent}
`),
            l && l.status
              ? ((r += `coapp: yes. Info:
`),
                (r +=
                  JSON.stringify(l.info, null, 2) +
                  `
`))
              : (r += `coapp: no.
`),
            navigator.clipboard.writeText(r),
            window.alert(weh._("copy_settings_info_to_clipboard_success"));
        };
      }
      local(e, ...t) {
        var a = this;
        return () => {
          a[e].apply(a, t);
        };
      }
      toggleMore() {
        var e = this;
        return () => {
          e.setState({ moreOpen: !e.state.moreOpen });
        };
      }
      closeModal() {
        this.setState({ modal: null });
      }
      conversion() {
        var e = this;
        return () => {
          e.setState({ activeTab: "general", conversion: !0 });
        };
      }
      reloadAddon() {
        var e = this;
        return () => {
          e.setState({
            modal: {
              title: weh._("confirmation_required"),
              body: weh._("reload_addon_confirm"),
              buttons: [
                {
                  text: weh._("cancel"),
                  color: "secondary",
                  click: (() => {
                    this.closeModal();
                  }).bind(e)
                },
                {
                  text: weh._("reload_addon"),
                  color: "danger",
                  click: (() => {
                    weh.rpc.call("reloadAddon"), this.closeModal();
                  }).bind(e)
                }
              ]
            }
          });
        };
      }
      import() {
        var e = this;
        return () => {
          e.fileInput.click();
        };
      }
      reset() {
        var e = this,
          t = { prefs: !0, backlist: !1, outputconfigs: !1 };
        function a(s) {
          return (c) => {
            t[s] = c.target.checked;
          };
        }
        return () => {
          e.setState({
            modal: {
              title: weh._("reset_settings"),
              body: React.createElement(
                "div",
                { className: "reset-settings" },
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("input", {
                    defaultChecked: t.prefs,
                    onChange: a("prefs"),
                    className: "form-control",
                    type: "checkbox",
                    id: "reset-prefs"
                  }),
                  React.createElement("label", { className: "col-8 col-form-label", htmlFor: "reset-prefs" }, weh._("preferences"))
                ),
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("input", {
                    defaultChecked: t.blacklist,
                    onChange: a("blacklist"),
                    className: "form-control",
                    type: "checkbox",
                    id: "reset-blacklist"
                  }),
                  React.createElement("label", { className: "col-8 col-form-label", htmlFor: "reset-blacklist" }, weh._("blacklist"))
                ),
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("input", {
                    defaultChecked: t.smartnaming,
                    onChange: a("smartnaming"),
                    className: "form-control",
                    type: "checkbox",
                    id: "reset-smartnaming"
                  }),
                  React.createElement(
                    "label",
                    { className: "col-8 col-form-label", htmlFor: "reset-smartnaming" },
                    weh._("smartnaming_rules")
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("input", {
                    defaultChecked: t.outputconfigs,
                    onChange: a("outputconfigs"),
                    className: "form-control",
                    type: "checkbox",
                    id: "reset-outputconfigs"
                  }),
                  React.createElement(
                    "label",
                    { className: "col-8 col-form-label", htmlFor: "reset-outputconfigs" },
                    weh._("conversion_outputs")
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("input", {
                    defaultChecked: t.convrules,
                    onChange: a("convrules"),
                    className: "form-control",
                    type: "checkbox",
                    id: "reset-convrules"
                  }),
                  React.createElement("label", { className: "col-8 col-form-label", htmlFor: "reset-convrules" }, weh._("conversion_rules"))
                ),
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("input", {
                    defaultChecked: t.variants,
                    onChange: a("variants"),
                    className: "form-control",
                    type: "checkbox",
                    id: "reset-variants"
                  }),
                  React.createElement("label", { className: "col-8 col-form-label", htmlFor: "reset-variants" }, weh._("video_qualities"))
                ),
                React.createElement(
                  "div",
                  { className: "form-group row" },
                  React.createElement("input", {
                    defaultChecked: t.license,
                    onChange: a("license"),
                    className: "form-control",
                    type: "checkbox",
                    id: "reset-license"
                  }),
                  React.createElement("label", { className: "col-8 col-form-label", htmlFor: "reset-license" }, weh._("license"))
                )
              ),
              buttons: [
                {
                  text: weh._("cancel"),
                  color: "secondary",
                  click: (() => {
                    this.closeModal();
                  }).bind(e)
                },
                {
                  text: weh._("reset_settings"),
                  color: "danger",
                  click: (() => {
                    this.doReset(t), this.closeModal();
                  }).bind(e)
                }
              ]
            }
          });
        };
      }
      doReset(e) {
        e.prefs &&
          (i.dispatch({ type: "PREFS_RESET" }),
          i.dispatch({ type: "PREFS_UPDATED", payload: {} }),
          i.dispatch({ type: "PREFS_SAVE", payload: {} })),
          e.blacklist && weh.rpc.call("setBlacklist", {}),
          e.smartnaming && weh.rpc.call("setSmartName", {}),
          e.outputconfigs && weh.rpc.call("setOutputConfigs", {}),
          e.convrules && weh.rpc.call("setConversionRules", []),
          e.variants && weh.rpc.call("resetVariants"),
          e.license && weh.rpc.call("setLicense", null);
      }
      fileInputChange(e) {
        var t = this,
          a = t.fileInput.files[0];
        if (a) {
          var s = new FileReader();
          (s.onload = (c) => {
            try {
              var d = JSON.parse(c.target.result);
              weh.rpc.call("importSettings", d).then((l) => {
                Object.keys(l).forEach((m) => {
                  i.dispatch({ type: "PREF_UPDATE", payload: { prefName: m, value: l[m] } });
                });
              });
            } catch {
              t.setState({
                modal: {
                  title: weh._("error"),
                  body: weh._("import_invalid_format"),
                  buttons: [
                    {
                      text: weh._("continue"),
                      color: "secondary",
                      click: (() => {
                        this.closeModal();
                      }).bind(t)
                    }
                  ]
                }
              });
            }
          }),
            s.readAsText(a);
        }
      }
      setFileInput(e) {
        var t = this;
        return (a) => {
          a && a.removeEventListener("change", t.fileInputChange), (t.fileInput = a), a && a.addEventListener("change", t.fileInputChange);
        };
      }
      renderTabGeneral() {
        return React.createElement(
          TabPane,
          { tabId: "general" },
          !this.state.conversion &&
            React.createElement(
              "div",
              null,
              React.createElement(
                "button",
                { onClick: this.copyInfoToClipboard(), className: "btn btn-outline-secondary float-right" },
                weh._("copy_settings_info_to_clipboard")
              ),
              React.createElement(AddonInfoPanel, null),
              React.createElement(PlatformInfoPanel, null),
              React.createElement(CoAppInfoPanel, null)
            ),
          React.createElement(LicInfoPanel, { open: this.state.conversion })
        );
      }
      renderTabAppearance() {
        return React.createElement(
          TabPane,
          { tabId: "appearance" },
          React.createElement(WehParam, { prefName: "titleMode" }),
          React.createElement(WehParam, { prefName: "iconActivation" }),
          React.createElement(WehParam, { prefName: "iconBadge" }),
          React.createElement(WehParam, { prefName: "hitsGotoTab" }),
          React.createElement(WehParam, { prefName: "notifyReady" }),
          React.createElement(WehParam, { prefName: "noPrivateNotification" }),
          React.createElement(WehParam, { prefName: "fileDialogType" }),
          React.createElement(WehParam, { prefName: "alertDialogType" }),
          React.createElement(WehParam, { prefName: "dialogAutoClose" }),
          React.createElement(WehParam, { prefName: "contextMenuEnabled" }),
          weh.isBrowser("firefox") && React.createElement(WehParam, { prefName: "toolsMenuEnabled" })
        );
      }
      renderTabBehavior() {
        return React.createElement(
          TabPane,
          { tabId: "behavior" },
          React.createElement(WehParam, { prefName: "coappDownloads" }),
          React.createElement(WehParam, { prefName: "lastDownloadDirectory", renderInput: p.renderInput }),
          React.createElement(WehParam, { prefName: "rememberLastDir" }),
          React.createElement(WehParam, { prefName: "networkProbe" }),
          React.createElement(WehParam, { prefName: "monitorNetworkRequests" }),
          React.createElement(WehParam, { prefName: "smartnamerFnameSpaces" }),
          React.createElement(WehParam, { prefName: "smartnamerFnameMaxlen" }),
          React.createElement(WehParam, { prefName: "downloadControlledMax" }),
          React.createElement(WehParam, { prefName: "downloadStreamControlledMax" }),
          React.createElement(WehParam, { prefName: "convertControlledMax" }),
          React.createElement(WehParam, { prefName: "autoPin" }),
          React.createElement(WehParam, { prefName: "mediaExtensions" }),
          React.createElement(WehParam, { prefName: "coappRestartDelay" }),
          React.createElement(WehParam, { prefName: "coappIdleExit" }),
          React.createElement(WehParam, { prefName: "dashHideM4s" }),
          React.createElement(WehParam, { prefName: "mpegtsHideTs" }),
          React.createElement(WehParam, { prefName: "orphanExpiration" }),
          React.createElement(WehParam, { prefName: "chunksEnabled" }),
          React.createElement(WehParam, { prefName: "hlsEnabled" }),
          React.createElement(WehParam, { prefName: "dashEnabled" }),
          React.createElement(WehParam, { prefName: "dashOnAdp" }),
          React.createElement(WehParam, { prefName: "hlsDownloadAsM2ts" }),
          React.createElement(WehParam, { prefName: "hlsRememberPrevLiveChunks" }),
          React.createElement(WehParam, { prefName: "hlsEndTimeout" }),
          React.createElement(WehParam, { prefName: "chunkedCoappManifestsRequests" }),
          React.createElement(WehParam, { prefName: "chunkedCoappDataRequests" }),
          React.createElement(WehParam, { prefName: "coappUseProxy" }),
          React.createElement(WehParam, { prefName: "checkCoappOnStartup" }),
          React.createElement(WehParam, { prefName: "networkFilterOut" }),
          React.createElement(WehParam, { prefName: "mediaweightThreshold" }),
          React.createElement(WehParam, { prefName: "mediaweightMinSize" }),
          React.createElement(WehParam, { prefName: "ignoreProtectedVariants" }),
          React.createElement(WehParam, { prefName: "qualitiesMaxVariants" }),
          React.createElement(WehParam, { prefName: "adpHide" }),
          React.createElement(WehParam, { prefName: "converterThreads" }),
          React.createElement(WehParam, { prefName: "converterAggregTuneH264" }),
          React.createElement(WehParam, { prefName: "avplayEnabled" }),
          React.createElement(WehParam, { prefName: "blacklistEnabled" }),
          React.createElement(WehParam, { prefName: "chunksConcurrentDownloads" }),
          React.createElement(WehParam, { prefName: "chunksPrefetchCount" }),
          React.createElement(WehParam, { prefName: "downloadRetries" }),
          React.createElement(WehParam, { prefName: "downloadRetryDelay" }),
          React.createElement(WehParam, { prefName: "converterKeepTmpFiles" }),
          React.createElement(WehParam, { prefName: "contentRedirectEnabled" }),
          React.createElement(WehParam, { prefName: "bulkEnabled" }),
          React.createElement(WehParam, { prefName: "galleryNaming" }),
          React.createElement(WehParam, { prefName: "tbvwsExtractionMethod" })
        );
      }
      renderTabGallery() {
        return React.createElement(
          TabPane,
          { tabId: "gallery" },
          React.createElement(WehParam, { prefName: "medialinkAutoDetect" }),
          React.createElement(WehParam, { prefName: "medialinkMinImgSize" }),
          React.createElement(WehParam, { prefName: "medialinkMinFilesPerGroup" }),
          React.createElement(WehParam, { prefName: "medialinkMaxHits" }),
          React.createElement(WehParam, { prefName: "medialinkExtensions" }),
          React.createElement(WehParam, { prefName: "medialinkScanImages" }),
          React.createElement(WehParam, { prefName: "medialinkScanLinks" })
        );
      }
      renderSettings() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            Nav,
            { tabs: !0 },
            React.createElement(
              NavItem,
              null,
              React.createElement(
                NavLink,
                {
                  href: "#",
                  className: this.state.activeTab === "general" && !this.state.conversion ? "active" : "",
                  onClick: this.local("setActiveTab", "general")
                },
                weh._("general")
              )
            ),
            React.createElement(
              NavItem,
              null,
              React.createElement(
                NavLink,
                {
                  href: "#",
                  className: this.state.activeTab === "appearance" ? "active" : "",
                  onClick: this.local("setActiveTab", "appearance")
                },
                weh._("appearance")
              )
            ),
            React.createElement(
              NavItem,
              null,
              React.createElement(
                NavLink,
                {
                  href: "#",
                  className: this.state.activeTab === "behavior" ? "active" : "",
                  onClick: this.local("setActiveTab", "behavior")
                },
                weh._("behavior")
              )
            ),
            React.createElement(
              Dropdown,
              { nav: !0, isOpen: this.state.moreOpen, toggle: this.toggleMore() },
              React.createElement(DropdownToggle, { nav: !0, caret: !0 }, weh._("more")),
              React.createElement(
                DropdownMenu,
                null,
                React.createElement(DropdownItem, { onClick: this.local("setActiveTab", "gallery") }, weh._("gallery")),
                React.createElement(DropdownItem, { onClick: n("editConverterConfigs") }, weh._("conversion_outputs")),
                React.createElement(DropdownItem, { onClick: n("editConversionRules") }, weh._("conversion_rules")),
                React.createElement(DropdownItem, { onClick: n("editBlacklist") }, weh._("blacklist")),
                React.createElement(DropdownItem, { onClick: n("editSmartName") }, weh._("smartnaming_rules")),
                React.createElement(DropdownItem, { onClick: n("editVariants") }, weh._("video_qualities")),
                React.createElement(DropdownItem, { onClick: this.conversion() }, weh._("licensing")),
                React.createElement(DropdownItem, { onClick: n("openTranslation") }, weh._("translation")),
                weh.unsafe_prefs.coappShellEnabled && React.createElement(DropdownItem, { onClick: n("openCoapp") }, weh._("coapp")),
                React.createElement(DropdownItem, { divider: !0 }),
                React.createElement(DropdownItem, { onClick: n("exportSettings") }, weh._("export")),
                React.createElement(DropdownItem, { onClick: this.import() }, weh._("import")),
                React.createElement(DropdownItem, { onClick: this.reloadAddon() }, weh._("reload_addon")),
                React.createElement(DropdownItem, { onClick: this.reset() }, weh._("reset_settings"))
              )
            )
          ),
          React.createElement(
            TabContent,
            { activeTab: this.state.activeTab },
            this.renderTabGeneral(),
            this.renderTabAppearance(),
            this.renderTabBehavior(),
            this.renderTabGallery()
          )
        );
      }
      renderPrefsControls() {
        return React.createElement(
          "div",
          { className: "btn-toolbar justify-content-end" },
          React.createElement(
            "div",
            { className: "btn-group pull-right" },
            React.createElement(
              "button",
              {
                type: "button",
                onClick: this.props.cancel,
                className: "btn btn-default " + (this.props.flags.isModified ? "" : "disabled")
              },
              weh._("cancel")
            ),
            React.createElement(
              "button",
              { type: "button", onClick: this.props.reset, className: "btn btn-warning " + (this.props.flags.isDefault ? "disabled" : "") },
              weh._("default")
            ),
            React.createElement(
              "button",
              {
                type: "button",
                onClick: this.props.save,
                className: "btn btn-primary " + (this.props.flags.isModified && this.props.flags.isValid ? "" : "disabled")
              },
              weh._("save")
            )
          )
        );
      }
      render() {
        return React.createElement(
          PrefsSettingsApp,
          null,
          React.createElement(WehHeader, null),
          React.createElement(
            "main",
            null,
            React.createElement("div", { className: "container settings" }, React.createElement("section", null, this.renderSettings()))
          ),
          this.state.activeTab != "general" &&
            React.createElement("footer", null, React.createElement(WehPrefsControls, { render: this.renderPrefsControls })),
          React.createElement("input", { type: "file", style: { display: "none" }, accept: "application/json", ref: this.setFileInput() }),
          React.createElement(VDHModal, { modalData: this.state.modal, close: this.closeModal.bind(this) })
        );
      }
    }
    render(React.createElement(Provider, { store: i }, React.createElement(f, null)), document.getElementById("root")),
      weh.setPageTitle(weh._("settings"));
  });
})();
