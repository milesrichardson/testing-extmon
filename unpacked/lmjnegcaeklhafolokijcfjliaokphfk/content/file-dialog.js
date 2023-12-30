(() => {
  weh.is_safe.then(() => {
    let a = createStore((t = null, e) => {
      switch (e.type) {
        case "SET_WEH_DATA":
          t = Object.assign({}, t, { wehData: e.payload });
          break;
        case "SET_ERROR":
          t = Object.assign({}, t, { error: e.payload });
          break;
      }
      return t;
    });
    weh.rpc.listen({
      wehInitData: (t) => {
        a.dispatch({ type: "SET_WEH_DATA", payload: t });
      }
    });
    var l = connect(
      (t, e) => Object.assign({}, (t && t.wehData) || {}, { error: (t && t.error) || null }),
      (t) =>
        bindActionCreators(
          { setError: (e) => ({ type: "SET_ERROR", payload: e }), clearError: () => ({ type: "SET_ERROR", payload: null }) },
          t
        )
    )(
      class extends React.Component {
        constructor(t) {
          super(t),
            (this.state = {
              files: [],
              parents: [],
              parent: "",
              directory: null,
              filename: null,
              sortField: "date",
              sortDir: -1,
              modal: null,
              dirExits: void 0,
              selected: {},
              outputConfig: null,
              selectAll: !1
            });
        }
        componentWillReceiveProps(t) {
          var e = this,
            r;
          weh.rpc
            .call("coappProxy", "path.homeJoin", t.directory)
            .then((s) => ((r = s), e.init(r)))
            .then(() => {
              !e.state.dirExits &&
                t.createDir &&
                e.setState({
                  modal: {
                    title: weh._("directory_not_exist"),
                    body: weh._("directory_not_exist_body", r),
                    buttons: [
                      {
                        text: weh._("no"),
                        color: "secondary",
                        click: (() => {
                          weh.trigger(null);
                        }).bind(e)
                      },
                      {
                        text: weh._("yes"),
                        color: "primary",
                        click: (() => {
                          this.createDirectory(r);
                        }).bind(e)
                      }
                    ]
                  }
                });
            });
        }
        createDirectory(t) {
          var e = this;
          weh.rpc
            .call("coappProxy", "fs.mkdirp", t)
            .then(() => {
              e.setState({ modal: null }), e.init(t);
            })
            .catch((r) => {
              e.props.setError(r);
            });
        }
        init(t) {
          var e = this;
          return weh.rpc
            .call("coappProxy", "fs.stat", t)
            .then(() => {
              e.setState({ dirExits: !0 });
            })
            .catch(() => {
              e.setState({ dirExits: !1 });
            })
            .then(() =>
              e.props.uniqueFilename
                ? weh.rpc.call("coappProxy", "makeUniqueFileName", t, this.props.filename).then((r) => {
                    e.setState({ directory: r.directory, filename: r.fileName });
                  })
                : weh.rpc
                    .call("coappProxy", "path.homeJoin", t)
                    .then((r) => {
                      e.setState({ directory: r || t, filename: e.props.filename });
                    })
                    .catch((r) => {
                      e.props.setError(r);
                    })
            )
            .then(() => {
              e.update(t);
            });
        }
        getTitle() {
          return this.props.titleText || "";
        }
        getModalData() {
          if (!this.props.error) return this.state.modal;
          var t = this;
          return {
            title: weh._("error"),
            body: this.props.error.message,
            buttons: [
              {
                text: weh._("cancel"),
                color: "secondary",
                click: (() => {
                  this.props.clearError();
                }).bind(t)
              }
            ]
          };
        }
        updateFiles(t) {
          var e = this;
          return e.state.dirExits
            ? weh.rpc
                .call("coappProxy", "listFiles", t)
                .then((r) => {
                  (r = r.filter((s) => !!s)), e.setState({ files: r });
                })
                .catch((r) => {
                  e.props.setError(r);
                })
            : (e.setState({ files: [] }), Promise.resolve());
        }
        updateParents(t) {
          var e = this;
          return weh.rpc
            .call("coappProxy", "getParents", t)
            .then((r) => {
              e.setState({ parents: r });
            })
            .catch((r) => {
              e.props.setError(r);
            });
        }
        update(t) {
          var e = this;
          return e.setState({ parent: "", directory: t, selected: {}, selectAll: !1 }), e.updateFiles(t).then(() => e.updateParents(t));
        }
        updateState(t) {
          this.setState(t);
        }
        toParent() {
          var t = this;
          return (e) => {
            t.init(e.target.value);
          };
        }
        getSize(t) {
          return t < 1024
            ? weh._("Bytes", t)
            : t < 1024 * 1e3
            ? weh._("KB", Math.round(t / 100) / 10)
            : t < 1024 * 1e3 * 1e3
            ? weh._("MB", Math.round(t / 1e5) / 10)
            : weh._("GB", Math.round(t / 1e8) / 10);
        }
        getDate(t) {
          var e = new Date(),
            r = new Date(t);
          return e.getDate() == r.getDate() && e.getMonth() == r.getMonth() && e.getFullYear() == r.getFullYear()
            ? r.getHours() + ":" + ("00" + r.getMinutes()).substr(-2, 2)
            : r.toLocaleDateString();
        }
        sort() {
          var t = this;
          return (e, r) =>
            t.state.sortField == "size"
              ? (e[1].size - r[1].size) * t.state.sortDir
              : t.state.sortField == "date"
              ? (new Date(e[1].mtime).getTime() - new Date(r[1].mtime).getTime()) * t.state.sortDir
              : e[0] == r[0]
              ? 0
              : e[0].toLowerCase() > r[0].toLowerCase()
              ? t.state.sortDir
              : -t.state.sortDir;
        }
        setSort(t) {
          var e = this;
          return () => {
            e.state.sortField == t ? e.setState({ sortDir: -e.state.sortDir }) : e.setState({ sortField: t, sortDir: 1 });
          };
        }
        showSort(t) {
          return this.state.sortField == t ? (this.state.sortDir == 1 ? "\u25B2" : "\u25BC") : "";
        }
        gotoDir(t) {
          var e = this;
          return () => {
            e.update(t);
          };
        }
        filenameChanged() {
          var t = this;
          return (e) => {
            t.setState({ filename: e.target.value });
          };
        }
        filenameKeyPressed() {
          var t = this;
          return (e) => {
            e.key == "Enter" ? t.defaultAction() : e.key == "Escape" && weh.trigger(null);
          };
        }
        onKeyDown() {
          var t = this;
          return (e) => {
            e.key == "Enter" ? t.defaultAction() : e.key == "Escape" && weh.trigger(null);
          };
        }
        selectAllChanged() {
          var t = this;
          return () => {
            var e = {};
            t.state.selectAll ||
              t.state.files.forEach(([r, s]) => {
                s.dir || (e[r] = !0);
              }),
              t.setState({ selected: e, selectAll: !t.state.selectAll });
          };
        }
        canDefaultAction() {
          var t = this;
          if (this.props.outputConfigs) {
            if (!this.state.outputConfig) return !1;
            var e = Object.keys(t.state.selected).filter((r) => !!t.state.selected[r]);
            return e.length > 0;
          } else return this.props.dirOnly ? !!this.state.directory : !!(this.state.filename && this.state.directory);
        }
        defaultAction() {
          var t = this,
            e = [this.state.directory];
          this.state.filename && e.push(this.state.filename),
            weh.rpc.call("coappProxy", "path.homeJoin", ...e).then((r) => {
              var s = { fileName: t.state.filename, directory: t.state.directory, filePath: r };
              t.props.outputConfigs &&
                ((s.selected = Object.keys(t.state.selected).filter((i) => !!t.state.selected[i])),
                (s.outputConfig = t.state.outputConfig),
                delete s.fileName,
                delete s.filePath),
                t.props.confirmOverwrite
                  ? weh.rpc
                      .call("coappProxy", "fs.stat", r)
                      .then(() => {
                        t.setState({
                          modal: {
                            title: weh._("confirmation_required"),
                            body: weh._("overwrite_file", r),
                            buttons: [
                              {
                                text: weh._("no"),
                                color: "secondary",
                                click: () => {
                                  t.setState({ modal: null });
                                }
                              },
                              {
                                text: weh._("yes"),
                                color: "primary",
                                click: () => {
                                  t.setState({ modal: null }), weh.trigger(s);
                                }
                              }
                            ]
                          }
                        });
                      })
                      .catch(() => {
                        weh.trigger(s);
                      })
                  : weh.trigger(s);
            });
        }
        callDefaultAction() {
          var t = this;
          return () => {
            t.defaultAction();
          };
        }
        cancel() {
          var t = this;
          return () => {
            weh.trigger(null);
          };
        }
        fileClicked(t) {
          var e = this;
          return (r) => {
            e.setState({ filename: t }),
              e.props.selectMultiple && e.setState({ selected: Object.assign({}, e.state.selected, { [t]: !e.state.selected[t] }) });
          };
        }
        newSubDirectory() {
          var t = this,
            e = null;
          return () => {
            t.setState({
              modal: {
                title: weh._("new_sub_directory"),
                body: React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  ref: (r) => (e = r),
                  placeholder: weh._("sub_directory_name")
                }),
                buttons: [
                  {
                    text: weh._("cancel"),
                    color: "secondary",
                    click: () => {
                      t.setState({ modal: null });
                    }
                  },
                  {
                    text: weh._("create"),
                    color: "primary",
                    click: () => {
                      t.setState({ modal: null }), t.createSubDirectory(e.value);
                    }
                  }
                ]
              }
            });
          };
        }
        createSubDirectory(t) {
          var e = this,
            r;
          weh.rpc
            .call("coappProxy", "path.homeJoin", e.state.directory, t)
            .then((s) => ((r = s), weh.rpc.call("coappProxy", "fs.mkdirp", r)))
            .then(() => {
              e.init(r);
            })
            .catch((s) => {
              e.props.setError(s);
            });
        }
        render() {
          var t = this,
            e = this.state.files
              .sort(this.sort())
              .map((s) =>
                s[1].dir
                  ? React.createElement(
                      "tr",
                      { className: "dir-entry", key: s[0], onClick: this.gotoDir(s[1].path) },
                      React.createElement("td", null, React.createElement("img", { src: "images/folder.png" })),
                      React.createElement("td", null, React.createElement("div", null, s[0])),
                      !t.props.noSizeColumn && React.createElement("td", null),
                      React.createElement("td", null, t.getDate(new Date(s[1].mtime)))
                    )
                  : t.props.dirOnly
                  ? null
                  : React.createElement(
                      "tr",
                      {
                        className: "file-entry",
                        key: s[0],
                        selectedfile: "" + (!t.props.selectMultiple && t.state.filename === s[0]),
                        onClick: t.fileClicked(s[0])
                      },
                      React.createElement(
                        "td",
                        null,
                        t.props.selectMultiple &&
                          React.createElement("input", { type: "checkbox", checked: !!t.state.selected[s[0]], className: "form-control" })
                      ),
                      React.createElement("td", null, React.createElement("div", null, s[0])),
                      !t.props.noSizeColumn && React.createElement("td", null, t.getSize(s[1].size)),
                      React.createElement("td", null, t.getDate(new Date(s[1].mtime)))
                    )
              ),
            r = this.state.parents.map((s) => React.createElement("option", { key: s, value: s }, s));
          return (
            this.props.upDir &&
              this.state.parents.length > 0 &&
              !/^[A-Z]:\\$/.test(this.state.directory) &&
              e.unshift(
                React.createElement(
                  "tr",
                  { className: "dir-entry", key: this.state.parents[0], onClick: this.gotoDir(this.state.parents[0]) },
                  React.createElement("td", null, React.createElement("img", { src: "images/folder.png" })),
                  React.createElement("td", null, React.createElement("div", null, "..")),
                  React.createElement("td", null)
                )
              ),
            r.unshift(React.createElement("option", { key: "", value: "" }, "\u21E7")),
            React.createElement(
              "div",
              { className: "weh-shf file-prompt", onKeyDown: this.onKeyDown(), tabIndex: "0" },
              React.createElement(
                "div",
                null,
                React.createElement(WehHeader, { title: this.getTitle() }),
                React.createElement(
                  "main",
                  null,
                  React.createElement(
                    "div",
                    { className: "top-line" },
                    r.length > 0 &&
                      React.createElement("select", { value: this.state.parent, onChange: this.toParent(), className: "form-control" }, r),
                    this.state.filename !== null &&
                      this.props.editFileInput &&
                      React.createElement("input", {
                        value: this.state.filename,
                        onChange: this.filenameChanged(),
                        onKeyDown: this.filenameKeyPressed(),
                        className: "form-control",
                        type: "text"
                      }),
                    this.state.directory !== null &&
                      this.props.readonlyDir &&
                      React.createElement("div", { className: "form-control dir-path", title: this.state.directory }, this.state.directory),
                    this.props.newDir &&
                      this.state.dirExits &&
                      React.createElement(
                        "button",
                        { className: "btn btn-outline-secondary", title: weh._("new_sub_directory"), onClick: this.newSubDirectory() },
                        "\u271A"
                      )
                  ),
                  this.props.showDir && React.createElement("div", { className: "current-directory" }, this.state.directory || ""),
                  React.createElement(
                    "div",
                    { className: "files-list headercontainer" },
                    React.createElement(
                      "div",
                      { className: "tablecontainer" },
                      React.createElement(
                        "table",
                        null,
                        React.createElement(
                          "thead",
                          null,
                          React.createElement(
                            "tr",
                            null,
                            React.createElement(
                              "th",
                              null,
                              this.props.selectMultiple &&
                                React.createElement(
                                  "div",
                                  null,
                                  React.createElement("input", {
                                    type: "checkbox",
                                    checked: t.state.selectAll,
                                    onChange: t.selectAllChanged(),
                                    className: "form-control"
                                  })
                                )
                            ),
                            React.createElement(
                              "th",
                              { onClick: this.setSort("name") },
                              React.createElement("div", null, this.showSort("name"), " ", weh._("file_dialog_name"))
                            ),
                            !this.props.noSizeColumn &&
                              React.createElement(
                                "th",
                                { onClick: this.setSort("size") },
                                React.createElement("div", null, this.showSort("size"), " ", weh._("file_dialog_size"))
                              ),
                            React.createElement(
                              "th",
                              { onClick: this.setSort("date") },
                              React.createElement("div", null, this.showSort("date"), " ", weh._("file_dialog_date"))
                            )
                          )
                        ),
                        React.createElement("tbody", null, e)
                      )
                    )
                  ),
                  this.props.outputConfigs &&
                    React.createElement(
                      "div",
                      { className: "bottom-component" },
                      React.createElement(n, { updateState: this.updateState.bind(this), cancel: this.cancel().bind(this) })
                    )
                ),
                React.createElement(
                  "footer",
                  null,
                  React.createElement(
                    "div",
                    { className: "btn btn-toolbar float-right" },
                    React.createElement("button", { className: "btn btn-outline-secondary", onClick: this.cancel() }, weh._("cancel")),
                    React.createElement(
                      "button",
                      { className: "btn btn-success", disabled: !this.canDefaultAction(), onClick: this.callDefaultAction() },
                      this.props.okText || ""
                    )
                  )
                )
              ),
              React.createElement(VDHModal, { modalData: this.getModalData(), close: this.props.clearError })
            )
          );
        }
      }
    );
    class n extends React.Component {
      constructor(e) {
        super(e), (this.state = { outputConfig: "", outputConfigs: {} });
        var r = this;
        weh.prefs.then((s) => {
          s.on("dlconvLastOutput", (i, o) => {
            r.setState({ outputConfig: o }), r.props.updateState({ outputConfig: o });
          });
        });
      }
      componentWillMount() {
        var e = this;
        weh.rpc.call("getOutputConfigs").then((r) => {
          e.setState({ outputConfigs: r });
        });
      }
      changeOutput() {
        var e = this;
        return (r) => {
          e.setState({ outputConfig: r.target.value }), e.props.updateState({ outputConfig: r.target.value });
        };
      }
      configOutputs() {
        var e = this;
        return () => {
          weh.rpc.call("editConverterConfigs", e.state.outputConfig), e.props.cancel();
        };
      }
      render() {
        var e = this,
          r;
        this.state.outputConfig
          ? (r = this.state.outputConfigs)
          : (r = Object.assign({}, this.state.outputConfigs, { "": { title: weh._("select_output_config") } }));
        var s = Object.keys(r)
          .sort()
          .map((i) => React.createElement("option", { key: i, value: i }, r[i].title));
        return React.createElement(
          "div",
          { className: "output-conf-sel" },
          React.createElement("span", null, weh._("output_configuration")),
          React.createElement("select", { className: "form-control", onChange: this.changeOutput(), value: this.state.outputConfig }, s),
          React.createElement("a", { href: "#", onClick: this.configOutputs() }, weh._("dlconv_output_details"))
        );
      }
    }
    render(React.createElement(Provider, { store: a }, React.createElement(l, { store: a })), document.getElementById("root"));
  });
})();
