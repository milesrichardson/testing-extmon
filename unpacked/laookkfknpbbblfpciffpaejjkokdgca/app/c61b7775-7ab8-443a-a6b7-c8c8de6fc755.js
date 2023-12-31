var fn_addin = function (d, o, n) {
  var s = {},
    n =
      ((s.styles = s.styles || {}),
      (s.commands = s.commands || {}),
      (s.dependencies = n || s.dependencies || {}),
      (s.styles.style = function () {}),
      (s.views = s.views || {}),
      (s.collect = s.collect || {}),
      (s.models = s.models || {}),
      (s.templates = s.templates || {}),
      (s.info = {
        addin: "c61b7775-7ab8-443a-a6b7-c8c8de6fc755",
        dependencies: ["settings"],
        id: "settings_trello",
        commands: ["settings.panels.trello.config"]
      }),
      d.console.log(d.elapsed() + ": " + s.info.id + " started"),
      (s.templates = s.templates || {}),
      (s.templates.boards_available = Handlebars.template({
        1: function (n, t, e, a, o) {
          var s,
            i = null != t ? t : n.nullContext || {},
            l = n.hooks.helperMissing,
            r = "function",
            c = n.escapeExpression,
            d =
              n.lookupProperty ||
              function (n, t) {
                if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
              };
          return (
            '            <li data-board-id="' +
            c(
              typeof (s = null != (s = d(e, "id") || (null != t ? d(t, "id") : t)) ? s : l) == r
                ? s.call(i, { name: "id", hash: {}, data: o, loc: { start: { line: 5, column: 31 }, end: { line: 5, column: 37 } } })
                : s
            ) +
            '" class="connect-board">\n                <div class="u--flex-grow">\n                    ' +
            (null !=
            (n = d(e, "if").call(i, null != t ? d(t, "icon_url") : t, {
              name: "if",
              hash: {},
              fn: n.program(2, o, 0),
              inverse: n.noop,
              data: o,
              loc: { start: { line: 7, column: 20 }, end: { line: 7, column: 122 } }
            }))
              ? n
              : "") +
            '\n                    <span class="provider-title">' +
            c(
              typeof (s = null != (s = d(e, "board_name") || (null != t ? d(t, "board_name") : t)) ? s : l) == r
                ? s.call(i, {
                    name: "board_name",
                    hash: {},
                    data: o,
                    loc: { start: { line: 8, column: 49 }, end: { line: 8, column: 63 } }
                  })
                : s
            ) +
            '</span>\n                </div>\n                <div class="settings-list-right">\n                    <div class="status"></div>\n                </div>\n            </li>\n'
          );
        },
        2: function (n, t, e, a, o) {
          var s =
            n.lookupProperty ||
            function (n, t) {
              if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
            };
          return (
            '<span class="board-icon"><img class="todo-list-icon" src="' +
            n.escapeExpression(
              "function" == typeof (e = null != (e = s(e, "icon_url") || (null != t ? s(t, "icon_url") : t)) ? e : n.hooks.helperMissing)
                ? e.call(null != t ? t : n.nullContext || {}, {
                    name: "icon_url",
                    hash: {},
                    data: o,
                    loc: { start: { line: 7, column: 94 }, end: { line: 7, column: 106 } }
                  })
                : e
            ) +
            '"></span>'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, t, e, a, o) {
          var s,
            i = null != t ? t : n.nullContext || {},
            l =
              n.lookupProperty ||
              function (n, t) {
                if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
              };
          return (
            '<div class="section-organization">\n    <h5>' +
            n.escapeExpression(
              "function" ==
                typeof (s =
                  null != (s = l(e, "organization_name") || (null != t ? l(t, "organization_name") : t)) ? s : n.hooks.helperMissing)
                ? s.call(i, {
                    name: "organization_name",
                    hash: {},
                    data: o,
                    loc: { start: { line: 2, column: 8 }, end: { line: 2, column: 29 } }
                  })
                : s
            ) +
            '</h5>\n    <ul class="settings-list provider-list add-provider">\n' +
            (null !=
            (s = l(e, "each").call(i, null != t ? l(t, "boards") : t, {
              name: "each",
              hash: {},
              fn: n.program(1, o, 0),
              inverse: n.noop,
              data: o,
              loc: { start: { line: 4, column: 8 }, end: { line: 14, column: 17 } }
            }))
              ? s
              : "") +
            "    </ul>\n</div>\n"
          );
        },
        useData: !0
      })),
      (s.templates.boards_connected = Handlebars.template({
        1: function (n, t, e, a, o) {
          var s,
            i = null != t ? t : n.nullContext || {},
            l = n.hooks.helperMissing,
            r = "function",
            c = n.escapeExpression,
            d =
              n.lookupProperty ||
              function (n, t) {
                if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
              };
          return (
            '\t\t<li data-board-id="' +
            c(
              typeof (s = null != (s = d(e, "id") || (null != t ? d(t, "id") : t)) ? s : l) == r
                ? s.call(i, { name: "id", hash: {}, data: o, loc: { start: { line: 4, column: 21 }, end: { line: 4, column: 27 } } })
                : s
            ) +
            '" class="has-board-id">\n\t\t\t<span class="u--flex-grow">\n\t\t\t\t<span class="board-icon">' +
            (null !=
            (n = d(e, "if").call(i, null != t ? d(t, "icon_url") : t, {
              name: "if",
              hash: {},
              fn: n.program(2, o, 0),
              inverse: n.noop,
              data: o,
              loc: { start: { line: 6, column: 29 }, end: { line: 6, column: 99 } }
            }))
              ? n
              : "") +
            '<span class="provider-title">' +
            c(
              typeof (s = null != (s = d(e, "board_name") || (null != t ? d(t, "board_name") : t)) ? s : l) == r
                ? s.call(i, {
                    name: "board_name",
                    hash: {},
                    data: o,
                    loc: { start: { line: 6, column: 128 }, end: { line: 6, column: 142 } }
                  })
                : s
            ) +
            '</span></span>\n\t\t\t</span>\n\t\t\t<span class="settings-list-right">\n\t\t\t\t<span class="provider-actions">\n\t\t\t\t\t<span class="action provider-action disconnect-board">Disconnect</span>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</li>\n'
          );
        },
        2: function (n, t, e, a, o) {
          var s =
            n.lookupProperty ||
            function (n, t) {
              if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
            };
          return (
            '<img class="todo-list-icon" src="' +
            n.escapeExpression(
              "function" == typeof (e = null != (e = s(e, "icon_url") || (null != t ? s(t, "icon_url") : t)) ? e : n.hooks.helperMissing)
                ? e.call(null != t ? t : n.nullContext || {}, {
                    name: "icon_url",
                    hash: {},
                    data: o,
                    loc: { start: { line: 6, column: 78 }, end: { line: 6, column: 90 } }
                  })
                : e
            ) +
            '">'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, t, e, a, o) {
          var s,
            i = null != t ? t : n.nullContext || {},
            l =
              n.lookupProperty ||
              function (n, t) {
                if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
              };
          return (
            "<h5>" +
            n.escapeExpression(
              "function" ==
                typeof (s =
                  null != (s = l(e, "organization_name") || (null != t ? l(t, "organization_name") : t)) ? s : n.hooks.helperMissing)
                ? s.call(i, {
                    name: "organization_name",
                    hash: {},
                    data: o,
                    loc: { start: { line: 1, column: 4 }, end: { line: 1, column: 25 } }
                  })
                : s
            ) +
            '</h5>\n<ul class="settings-list provider-list connected-providers">\n' +
            (null !=
            (s = l(e, "each").call(i, null != t ? l(t, "boards") : t, {
              name: "each",
              hash: {},
              fn: n.program(1, o, 0),
              inverse: n.noop,
              data: o,
              loc: { start: { line: 3, column: 1 }, end: { line: 14, column: 10 } }
            }))
              ? s
              : "") +
            "</ul>\n"
          );
        },
        useData: !0
      })),
      (s.templates.main = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, t, e, a, o) {
          return '<div class="settings-detail-header">\n\t<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\t<h3><img src="https://az814671.vo.msecnd.net/logos/trello-blue-128.png"> Trello</h3>\n\t<p class="description">Choose the boards you\'d like to use in Momentum</p>\n</div>\n\n<div>\n\t<h4 id="connected-boards-header">Connected boards</h4>\n\t<div id="connected-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n</div>\n\n<p class="board-empty empty">No Trello boards connected yet. Add a board to get started!</p>\n\n<button class="button show-form toggle-form">Add board</button>\n\n<div class="form" style="display: none;">\n\t<div class="boards">\n\t\t<h4>Add boards</h4>\n\t\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\t\t<div id="available-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t</div>\n\t<div class="suggest-integration">\n\t\t<h5>Suggestions for this integration?</h5>\n\t\t<p>\x3c!--We\'d love to hear what other services you use.<br>--\x3e\n\t\t\t<a href="https://momentumdash.com/contact">Make a suggestion</a></p>\n\t</div>\n</div>\n\n<div class="settings-connect"></div>\n';
        },
        useData: !0
      })),
      (s.styles = s.styles || {}),
      (s.styles.style = function () {
        var n = document.createElement("style");
        (n.type = "text/css"), (n.innerHTML = ""), document.getElementsByTagName("head")[0].appendChild(n);
      }),
      s.dependencies.settings);
  return (
    (s.views.Main = n.views.SettingsPanel.extend({
      attributes: { id: "settings-trello", class: "settings-view settings-trello" },
      template: s.templates.main,
      panelid: "trello",
      events: {
        "click .connect-board": "connectBoard",
        "click .disconnect-board": "disconnectBoard",
        "click #connect-button": "connectTodoProvider",
        "click .toggle-form": "toggleForm",
        "click .back": "clickedBack"
      },
      initialize: function () {
        var t = this;
        (this.collection = new d.collect.Settings()),
          (this.collection.url = d.globals.urlRootApi + "settings/todo/providers/5"),
          (this.collection.parse = function (n) {
            return (
              (t.collection.lastResponse = n),
              (t.collection.organizations = _.chain(t.collection.lastResponse.available_boards)
                .map(function (n) {
                  if (n.organization_id) return { id: n.organization_id, name: n.organization_name };
                })
                .uniq(function (n) {
                  return n ? n.id : null;
                })
                .omit(_.isUndefined)
                .omit(_.isNull)
                .sortBy("name")
                .value()),
              n.connected_boards
            );
          }),
          this.listenTo(this.collection, "reset", this.collectionReset),
          this.listenTo(d.models.customization, "change", this.customizationChanged),
          this.refreshData();
      },
      render: function () {
        return (
          this.$el.html(this.template({})),
          (this.$connect = this.$(".settings-connect")[0]),
          (this.$settingsTrello = this.$(".settings-trello")[0]),
          this.$("#connected-boards-header").hide(),
          this
        );
      },
      collectionReset: function () {
        this.populateConnectedBoards(), this.populateAvailableBoards();
      },
      refreshData: function () {
        this.collection.fetch({ reset: !0 });
      },
      disconnectBoard: function (n) {
        n && (n.stopPropagation(), n.preventDefault());
        var r,
          t = o(n.delegatedTarget).closest(".has-board-id"),
          e = t.data("board-id");
        e &&
          (o(n.delegatedTarget).hide(),
          t.find(".status").html('<span class="loading disconnecting-board"><i class="loading-icon"></i>Disconnecting...</span>'),
          ((r = this).authAttempts = 0),
          (n = d.globals.urlRootApi + "settings/todo/providers/5"),
          o
            .ajax({
              type: "POST",
              contentType: "application/json",
              url: n,
              data: JSON.stringify({ operation: "disconnect_board", board_id: e })
            })
            .done(function (n) {
              var t, e, a, o, s, i, l;
              n.status && "authRequired" == n.status
                ? n.authorizationUrl &&
                  r.authAttempts < 2 &&
                  (r.authAttempts++,
                  (t = n.winWidth || 600),
                  (e = n.winHeight || 510),
                  (a = n.windowFeatures || "titlebar,resizable,toolbar,status"),
                  (o = window.screen.width / 2 - t / 2),
                  (s = window.screen.height / 2 - e / 2),
                  (i = window.open(
                    n.authorizationUrl,
                    "MomentumAuthWindow",
                    a + ",left=" + o + ",top=" + s + ",width=" + t + ",height=" + e
                  )),
                  (l = setInterval(function () {
                    i.closed &&
                      (clearInterval(l),
                      r.$connect.hide(),
                      r.$settingsTrello.css("display", "block"),
                      r.$el.find(".pop-body").scrollTop(0),
                      r.refreshData(),
                      d.commandManager.execute("settings.todo.provider.change", null, { provider_id: "1" }));
                  }, 250)))
                : (n.status &&
                    "success" == n.status &&
                    d.commandManager.execute("settings.todo.provider.change", null, { provider_id: "1" }),
                  r.$el.find(".pop-body").scrollTop(0),
                  r.refreshData());
            })
            .fail(function () {
              r.$el.find(".pop-body").scrollTop(0), r.refreshData();
            }));
      },
      connectBoard: function (n) {
        n && (n.stopPropagation(), n.preventDefault());
        var r,
          c,
          t = o(n.delegatedTarget).data("board-id");
        t &&
          (o(n.delegatedTarget).find(".status").html('<span class="loading"><i class="loading-icon"></i>Connecting...</span>'),
          ((r = this).authAttempts = 0),
          (n = d.globals.urlRootApi + "settings/todo/providers/5"),
          (c = { operation: "connect_board", board_id: t }),
          o
            .ajax({ type: "POST", contentType: "application/json", url: n, data: JSON.stringify(c) })
            .done(function (n) {
              var t, e, a, o, s, i, l;
              n.status && "authRequired" == n.status
                ? n.authorizationUrl &&
                  r.authAttempts < 2 &&
                  (r.authAttempts++,
                  (t = n.winWidth || 600),
                  (e = n.winHeight || 510),
                  (a = n.windowFeatures || "titlebar,resizable,toolbar,status"),
                  (o = window.screen.width / 2 - t / 2),
                  (s = window.screen.height / 2 - e / 2),
                  (i = window.open(
                    n.authorizationUrl,
                    "MomentumAuthWindow",
                    a + ",left=" + o + ",top=" + s + ",width=" + t + ",height=" + e
                  )),
                  (l = setInterval(function () {
                    i.closed &&
                      (clearInterval(l),
                      r.$connect.hide(),
                      r.$settingsTrello.css("display", "block"),
                      r.$el.find(".pop-body").scrollTop(0),
                      r.refreshData(),
                      d.commandManager.execute("settings.todo.provider.change", null, { provider_id: "5-" + c.board_id }));
                  }, 250)))
                : n.status &&
                  "success" == n.status &&
                  (r.$el.find(".pop-body").scrollTop(0),
                  r.refreshData(),
                  d.commandManager.execute("settings.todo.provider.change", null, { provider_id: "5-" + c.board_id }));
            })
            .fail(function () {}));
      },
      clickedBack: function (n) {
        n && (n.stopPropagation(), n.preventDefault()), d.commandManager.execute("settings.display", null, { section: "todo" });
      },
      populateConnectedBoards: function () {
        var n = o(this.$("#connected-providers")[0]),
          t = s.templates.boards_connected({ organization_name: "", boards: this.collection.toJSON() });
        n.html(t),
          this.collection.length < 1
            ? (this.$(".show-form").hide(),
              this.$("#connected-boards-header").hide(),
              this.$(".form").css("display", "block"),
              this.$(".empty").css("display", "block"),
              n.hide())
            : (n.css("display", "block"), this.$(".empty").hide(), this.$("#connected-boards-header").css("display", "block"));
      },
      populateAvailableBoards: function () {
        var n,
          e = this,
          a = o(this.$("#available-providers")[0]),
          t = (a.html(""), _.chain(e.collection.lastResponse.available_boards).where({ starred: !0 }).sortBy("board_name").value()),
          t =
            (t && 0 < t.length && ((n = s.templates.boards_available({ organization_name: "Starred Boards", boards: t })), a.append(n)),
            _.chain(e.collection.lastResponse.available_boards)
              .filter(function (n) {
                return null != n.dateLastActivity;
              })
              .sortBy("dateLastActivity")
              .reverse()
              .first(5)
              .value()),
          t =
            (t && 0 < t.length && ((n = s.templates.boards_available({ organization_name: "Recent Boards", boards: t })), a.append(n)),
            _.chain(e.collection.lastResponse.available_boards)
              .filter(function (n) {
                return !n.organization_id;
              })
              .sortBy("board_name")
              .value());
        t && 0 < t.length && ((n = s.templates.boards_available({ organization_name: "My Boards", boards: t })), a.append(n)),
          _.each(e.collection.organizations, function (n) {
            var t = _.chain(e.collection.lastResponse.available_boards).where({ organization_id: n.id }).sortBy("board_name").value();
            t && 0 < t.length && ((n = s.templates.boards_available({ organization_name: n.name, boards: t })), a.append(n));
          }),
          0 == this.collection.lastResponse.available_boards.length
            ? (this.$(".all-connected").css("display", "block"), this.$("#available-providers").hide())
            : (this.$(".all-connected").hide(), this.$("#available-providers").css("display", "block"));
      },
      toggleForm: function () {
        this.$(".show-form").mToggle("inline-block"), this.$(".form").mToggle("block");
      }
    })),
    d.commandManager &&
      d.commandManager.registerCommand("settings.panels.trello.config", function () {
        return s.styleLoaded || ((s.styleLoaded = !0), s.styles.style()), new s.views.Main();
      }),
    s
  );
};
m.addinManager && m.addinManager.registerAddinFn("c61b7775-7ab8-443a-a6b7-c8c8de6fc755", fn_addin);
