var fn_addin = function (d, i, n) {
  var o = {},
    n =
      ((o.styles = o.styles || {}),
      (o.commands = o.commands || {}),
      (o.dependencies = n || o.dependencies || {}),
      (o.styles.style = function () {}),
      (o.views = o.views || {}),
      (o.collect = o.collect || {}),
      (o.models = o.models || {}),
      (o.templates = o.templates || {}),
      (o.info = {
        addin: "395dec66-e86b-4ece-9d10-faf466c733b5",
        dependencies: ["settings"],
        id: "settings_clickup",
        commands: ["settings.panels.clickup.config"]
      }),
      d.console.log(d.elapsed() + ": " + o.info.id + " started"),
      (o.templates = o.templates || {}),
      (o.templates.boards_available = Handlebars.template({
        1: function (n, e, t, a, o) {
          var i,
            s = null != e ? e : n.nullContext || {},
            l = n.hooks.helperMissing,
            c = "function",
            r = n.escapeExpression,
            d =
              n.lookupProperty ||
              function (n, e) {
                if (Object.prototype.hasOwnProperty.call(n, e)) return n[e];
              };
          return (
            '            <li data-board-id="' +
            r(
              typeof (i = null != (i = d(t, "id") || (null != e ? d(e, "id") : e)) ? i : l) == c
                ? i.call(s, { name: "id", hash: {}, data: o, loc: { start: { line: 5, column: 31 }, end: { line: 5, column: 37 } } })
                : i
            ) +
            '" class="connect-board">\n                <div class="u--flex-grow">\n                    ' +
            (null !=
            (n = d(t, "if").call(s, null != e ? d(e, "icon_url") : e, {
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
            r(
              typeof (i = null != (i = d(t, "board_name") || (null != e ? d(e, "board_name") : e)) ? i : l) == c
                ? i.call(s, {
                    name: "board_name",
                    hash: {},
                    data: o,
                    loc: { start: { line: 8, column: 49 }, end: { line: 8, column: 63 } }
                  })
                : i
            ) +
            '</span>\n                </div>\n                <div class="settings-list-right">\n                    <div class="status"></div>\n                </div>\n            </li>\n'
          );
        },
        2: function (n, e, t, a, o) {
          var i =
            n.lookupProperty ||
            function (n, e) {
              if (Object.prototype.hasOwnProperty.call(n, e)) return n[e];
            };
          return (
            '<span class="board-icon"><img class="todo-list-icon" src="' +
            n.escapeExpression(
              "function" == typeof (t = null != (t = i(t, "icon_url") || (null != e ? i(e, "icon_url") : e)) ? t : n.hooks.helperMissing)
                ? t.call(null != e ? e : n.nullContext || {}, {
                    name: "icon_url",
                    hash: {},
                    data: o,
                    loc: { start: { line: 7, column: 94 }, end: { line: 7, column: 106 } }
                  })
                : t
            ) +
            '"></span>'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, t, a, o) {
          var i,
            s = null != e ? e : n.nullContext || {},
            l = n.hooks.helperMissing,
            c = "function",
            r = n.escapeExpression,
            d =
              n.lookupProperty ||
              function (n, e) {
                if (Object.prototype.hasOwnProperty.call(n, e)) return n[e];
              };
          return (
            '<div class="section-organization">\n    <h5>' +
            r(
              typeof (i = null != (i = d(t, "organization_name") || (null != e ? d(e, "organization_name") : e)) ? i : l) == c
                ? i.call(s, {
                    name: "organization_name",
                    hash: {},
                    data: o,
                    loc: { start: { line: 2, column: 8 }, end: { line: 2, column: 29 } }
                  })
                : i
            ) +
            '</h5>\n    <ul data-organization-id="' +
            r(
              typeof (i = null != (i = d(t, "organization_id") || (null != e ? d(e, "organization_id") : e)) ? i : l) == c
                ? i.call(s, {
                    name: "organization_id",
                    hash: {},
                    data: o,
                    loc: { start: { line: 3, column: 30 }, end: { line: 3, column: 49 } }
                  })
                : i
            ) +
            '" class="settings-list provider-list add-provider">\n' +
            (null !=
            (r = d(t, "each").call(s, null != e ? d(e, "boards") : e, {
              name: "each",
              hash: {},
              fn: n.program(1, o, 0),
              inverse: n.noop,
              data: o,
              loc: { start: { line: 4, column: 8 }, end: { line: 14, column: 17 } }
            }))
              ? r
              : "") +
            "    </ul>\n</div>"
          );
        },
        useData: !0
      })),
      (o.templates.boards_connected = Handlebars.template({
        1: function (n, e, t, a, o) {
          var i,
            s = null != e ? e : n.nullContext || {},
            l = n.hooks.helperMissing,
            c = "function",
            r = n.escapeExpression,
            d =
              n.lookupProperty ||
              function (n, e) {
                if (Object.prototype.hasOwnProperty.call(n, e)) return n[e];
              };
          return (
            '\t<li data-board-id="' +
            r(
              typeof (i = null != (i = d(t, "id") || (null != e ? d(e, "id") : e)) ? i : l) == c
                ? i.call(s, { name: "id", hash: {}, data: o, loc: { start: { line: 4, column: 20 }, end: { line: 4, column: 26 } } })
                : i
            ) +
            '" class="has-board-id">\n\t\t<span class="u--flex-grow">\n\t\t\t<span class="board-icon">' +
            (null !=
            (n = d(t, "if").call(s, null != e ? d(e, "icon_url") : e, {
              name: "if",
              hash: {},
              fn: n.program(2, o, 0),
              inverse: n.noop,
              data: o,
              loc: { start: { line: 6, column: 28 }, end: { line: 6, column: 98 } }
            }))
              ? n
              : "") +
            '<span class="provider-title">' +
            r(
              typeof (i = null != (i = d(t, "board_name") || (null != e ? d(e, "board_name") : e)) ? i : l) == c
                ? i.call(s, {
                    name: "board_name",
                    hash: {},
                    data: o,
                    loc: { start: { line: 6, column: 127 }, end: { line: 6, column: 141 } }
                  })
                : i
            ) +
            '</span></span>\n\t\t</span>\n\t\t<span class="settings-list-right">\n\t\t\t<span class="provider-actions">\n\t\t\t\t<span class="action provider-action disconnect-board">Disconnect</span>\n\t\t\t</span>\n\t\t\t<span class="status">Connected</span>\n\t\t</span>\n\t</li>\n'
          );
        },
        2: function (n, e, t, a, o) {
          var i =
            n.lookupProperty ||
            function (n, e) {
              if (Object.prototype.hasOwnProperty.call(n, e)) return n[e];
            };
          return (
            '<img class="todo-list-icon" src="' +
            n.escapeExpression(
              "function" == typeof (t = null != (t = i(t, "icon_url") || (null != e ? i(e, "icon_url") : e)) ? t : n.hooks.helperMissing)
                ? t.call(null != e ? e : n.nullContext || {}, {
                    name: "icon_url",
                    hash: {},
                    data: o,
                    loc: { start: { line: 6, column: 77 }, end: { line: 6, column: 89 } }
                  })
                : t
            ) +
            '">'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, t, a, o) {
          var i,
            s = null != e ? e : n.nullContext || {},
            l =
              n.lookupProperty ||
              function (n, e) {
                if (Object.prototype.hasOwnProperty.call(n, e)) return n[e];
              };
          return (
            "<h5>" +
            n.escapeExpression(
              "function" ==
                typeof (i =
                  null != (i = l(t, "organization_name") || (null != e ? l(e, "organization_name") : e)) ? i : n.hooks.helperMissing)
                ? i.call(s, {
                    name: "organization_name",
                    hash: {},
                    data: o,
                    loc: { start: { line: 1, column: 4 }, end: { line: 1, column: 25 } }
                  })
                : i
            ) +
            '</h5>\n<ul class="settings-list provider-list connected-providers">\n' +
            (null !=
            (i = l(t, "each").call(s, null != e ? l(e, "boards") : e, {
              name: "each",
              hash: {},
              fn: n.program(1, o, 0),
              inverse: n.noop,
              data: o,
              loc: { start: { line: 3, column: 4 }, end: { line: 15, column: 13 } }
            }))
              ? i
              : "") +
            "</ul>\n"
          );
        },
        useData: !0
      })),
      (o.templates.main = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, t, a, o) {
          return '<div class="settings-detail-header">\n\t<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\t<h3><img src="https://az814671.vo.msecnd.net/blogimages/857aa1d2-155a-42e9-9ba4-63ae9bc8e688"> ClickUp</h3>\n\t<p class="description">Choose the Spaces you\'d like to use in Momentum</p>\n</div>\n\n<div>\n\t<h4 id="connected-boards-header">Connected Spaces</h4>\n\t<div id="connected-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n</div>\n\n<p class="board-empty empty">No ClickUp Spaces connected yet. Add one to get started!</p>\n\n<button class="button show-form toggle-form">Add Space</button>\n\n<div class="form" style="display: none;">\n\t<div class="boards">\n\t\t<h4>Add Space</h4>\n\t\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\t\t<div id="available-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t</div>\n\t<div class="suggest-integration">\n\t\t<h5>Suggestions for this integration?</h5>\n\t\t<p>\x3c!--We\'d love to hear what other services you use.<br>--\x3e\n\t\t\t<a href="https://momentumdash.com/contact" target="_blank" >Make a suggestion</a></p>\n\t</div>\n</div>\n\n<div class="settings-connect"></div>\n';
        },
        useData: !0
      })),
      (o.styles = o.styles || {}),
      (o.styles.style = function () {
        var n = document.createElement("style");
        (n.type = "text/css"), (n.innerHTML = ""), document.getElementsByTagName("head")[0].appendChild(n);
      }),
      o.dependencies.settings);
  return (
    (o.views.Main = n.views.SettingsPanel.extend({
      attributes: { id: "settings-clickup", class: "settings-view settings-clickup" },
      template: o.templates.main,
      providerId: 17,
      panelid: "clickup",
      events: {
        "click .connect-board": "connectBoard",
        "click .disconnect-board": "disconnectBoard",
        "click #connect-button": "connectTodoProvider",
        "click .toggle-form": "toggleForm",
        "click .back": "clickedBack"
      },
      initialize: function () {
        var e = this;
        (this.collection = new d.collect.Settings()),
          (this.collection.url = d.globals.urlRootApi + "settings/todo/providers/" + this.providerId),
          (this.collection.parse = function (n) {
            return (
              (e.collection.response = n),
              (e.collection.organizations = _.chain(e.collection.response.available_boards)
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
          (this.$settings = this.$(".settings-clickup")[0]),
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
        var e,
          t = i(n.delegatedTarget).closest(".has-board-id"),
          a = t.data("board-id");
        a &&
          (i(n.delegatedTarget).hide(),
          t.find(".status").html('<span class="loading disconnecting-board"><i class="loading-icon"></i>Disconnecting...</span>'),
          ((e = this).authAttempts = 0),
          (n = d.globals.urlRootApi + "settings/todo/providers/" + this.providerId),
          i
            .ajax({
              type: "POST",
              contentType: "application/json",
              url: n,
              data: JSON.stringify({ operation: "disconnect_board", board_id: a })
            })
            .done(function (n) {
              e.handleDoneMessage(n, e, "1");
            })
            .fail(function () {
              e.$el.find(".pop-body").scrollTop(0), e.refreshData();
            }));
      },
      connectBoard: function (n) {
        n && (n.stopPropagation(), n.preventDefault());
        var e,
          t,
          a,
          o = i(n.delegatedTarget).data("board-id");
        o &&
          (e = i(n.delegatedTarget.parentElement).data("organization-id")) &&
          (i(n.delegatedTarget).find(".status").html('<span class="loading"><i class="loading-icon"></i>Connecting...</span>'),
          ((t = this).authAttempts = 0),
          (n = d.globals.urlRootApi + "settings/todo/providers/" + this.providerId),
          (a = { operation: "connect_board", board_id: o, organization_id: e }),
          i
            .ajax({ type: "POST", contentType: "application/json", url: n, data: JSON.stringify(a) })
            .done(function (n) {
              t.handleDoneMessage(n, t, t.providerId + "-" + a.board_id);
            })
            .fail(function () {}));
      },
      handleDoneMessage: function (n, e, t) {
        var a, o, i, s, l, c, r;
        n.status && "authRequired" == n.status
          ? n.authorizationUrl &&
            e.authAttempts < 2 &&
            (e.authAttempts++,
            (a = n.winWidth || 600),
            (o = n.winHeight || 510),
            (i = n.windowFeatures || "titlebar,resizable,toolbar,status"),
            (s = window.screen.width / 2 - a / 2),
            (l = window.screen.height / 2 - o / 2),
            (c = window.open(n.authorizationUrl, "MomentumAuthWindow", i + ",left=" + s + ",top=" + l + ",width=" + a + ",height=" + o)),
            (r = setInterval(function () {
              c.closed &&
                (clearInterval(r),
                e.$connect.hide(),
                e.$settings.css("display", "block"),
                e.$el.find(".pop-body").scrollTop(0),
                e.refreshData(),
                d.commandManager.execute("settings.todo.provider.change", null, { provider_id: t }));
            }, 250)))
          : n.status &&
            "success" == n.status &&
            (e.$el.find(".pop-body").scrollTop(0),
            e.refreshData(),
            d.commandManager.execute("settings.todo.provider.change", null, { provider_id: t, newProvider: !0 }));
      },
      clickedBack: function (n) {
        n && (n.stopPropagation(), n.preventDefault()), d.commandManager.execute("settings.display", null, { section: "todo" });
      },
      populateConnectedBoards: function () {
        var n = i(this.$("#connected-providers")[0]),
          e = o.templates.boards_connected({ organization_name: "", boards: this.collection.toJSON() });
        n.html(e),
          this.collection.length < 1
            ? (this.$(".show-form").hide(),
              this.$("#connected-boards-header").hide(),
              this.$(".form").css("display", "block"),
              this.$(".empty").css("display", "block"),
              n.hide())
            : (n.css("display", "block"), this.$(".empty").hide(), this.$("#connected-boards-header").css("display", "block"));
      },
      populateAvailableBoards: function () {
        var t = this,
          a = i(this.$("#available-providers")[0]);
        a.html(""),
          _.each(t.collection.organizations, function (n) {
            var e = _.chain(t.collection.response.available_boards).where({ organization_id: n.id }).sortBy("board_name").value();
            e &&
              0 < e.length &&
              ((n = o.templates.boards_available({ organization_name: n.name, organization_id: n.id, boards: e })), a.append(n));
          }),
          this.collection.response.available_boards.length
            ? (this.$(".all-connected").hide(), this.$("#available-providers").css("display", "block"))
            : (this.$(".all-connected").css("display", "block"), this.$("#available-providers").hide());
      },
      toggleForm: function () {
        this.$(".show-form").mToggle("inline-block"), this.$(".form").mToggle("block");
      }
    })),
    d.commandManager &&
      d.commandManager.registerCommand("settings.panels.clickup.config", function () {
        return o.styleLoaded || ((o.styleLoaded = !0), o.styles.style()), new o.views.Main();
      }),
    o
  );
};
m.addinManager && m.addinManager.registerAddinFn("395dec66-e86b-4ece-9d10-faf466c733b5", fn_addin);
