var fn_addin = function (f, v, t) {
  var n = {},
    e =
      ((n.styles = n.styles || {}),
      (n.commands = n.commands || {}),
      (n.dependencies = t || n.dependencies || {}),
      (n.styles.style = function () {}),
      (n.views = n.views || {}),
      (n.collect = n.collect || {}),
      (n.models = n.models || {}),
      (n.templates = n.templates || {}),
      (n.info = {
        addin: "270aaed6-337f-433f-9d02-a471b435eada",
        id: "settings_todo",
        dependencies: ["settings"],
        commands: ["settings.panels.todo"]
      }),
      f.console.log(f.elapsed() + ": " + n.info.id + " started"),
      (n.templates = n.templates || {}),
      (n.templates.main = Handlebars.template({
        1: function (t, e, i, n, s) {
          return '\t\t\t\t\x3c!-- see # keepOpen on touch devices --\x3e\n\n\t\t\t\t<li class="slide-toggle has-toggle on" id="remember-open-state">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Stay open</span>\n\t\t\t\t\t<span class="option-message">Stay open on new tab and other usage</span>\n\t\t\t\t</li>\n';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, n, s) {
          var o,
            a,
            l = null != e ? e : t.nullContext || {},
            r = t.hooks.helperMissing,
            c = "function",
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<div class="settings-view-wrapper">\n\t<h3>Todo</h3>\n\t<p class="description">Break your goals into manageable pieces</p>\n\n\n\t<div class="section section-settings first">\n\t\t<ul class="settings-list options-list">\n' +
            (null !=
            (o = d(i, "unless").call(l, null != e ? d(e, "isTouchDevice") : e, {
              name: "unless",
              hash: {},
              fn: t.program(1, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 9, column: 3 }, end: { line: 17, column: 14 } }
            }))
              ? o
              : "") +
            '\t\t\t<li class="slide-toggle has-toggle on" id="auto-focus" data-test="settings-todo-autofocus">\n\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t<span class="setting-name">Autofocus</span> <span class="badge badge-plus">PLUS</span>\n\t\t\t\t<span class="option-message">Automatically set top todo as your main focus</span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\n\t<div class="section section-custom-todo">\n\t\t<h4>Custom To-do Lists <span class="badge badge-plus">PLUS</span></h4>\n\t\t<p class="subdescription">Organize your todos into multiple lists</p>\n\n\t\t<div id="custom-lists" class="settings-todo-lists-container"><span class="loading" style="display: block;"><i class="loading-icon"></i>Loading...</span></div>\n\t\t\x3c!--<p class="tip">Tip: Use your <strong>&larr;</strong> and <strong>&rarr;</strong> keys to quickly move between lists.</p>--\x3e\n\t</div>\n\n\n\t<div class="section section-integrations" data-test="settings-todo-integrations">\n\t\t<h4 id="todo-settings-integrations">Integrations <span class="badge badge-plus">PLUS</span></h4>\n\t\t<p class="subdescription">Connect your external todos</p>\n\n\t\t<div id="connected-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t\t\x3c!-- <p class="empty">No external task managers connected. Add an integration to get started!</p> --\x3e\n\n\t\t<button class="button add-integration" data-test="settings-todo-add-integration"><i class="icon icon-plus"></i>Add Integration</button>\n\n\t\t<div class="section-add-provider">\n\t\t\t<span class="hide-integration settings-cancel"><span class="icon-wrapper">' +
            (null !=
            (o =
              typeof (a = null != (a = d(i, "iconCancel") || (null != e ? d(e, "iconCancel") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "iconCancel",
                    hash: {},
                    data: s,
                    loc: { start: { line: 46, column: 77 }, end: { line: 46, column: 95 } }
                  })
                : a)
              ? o
              : "") +
            '</span></span>\n\t\t\t<h4>Choose an Integration <i class="badge badge-plus">PLUS</i></h4>\n\n\t\t\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\n\t\t\t<div id="available-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\n\t\t\t<div class="suggest-integration">\n\t\t\t\t<h5>Looking for another integration?</h5>\n\t\t\t\t<div><a class="button button-small" href="' +
            t.escapeExpression(
              typeof (a = null != (a = d(i, "suggestIntegrationLink") || (null != e ? d(e, "suggestIntegrationLink") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "suggestIntegrationLink",
                    hash: {},
                    data: s,
                    loc: { start: { line: 55, column: 46 }, end: { line: 55, column: 72 } }
                  })
                : a
            ) +
            '" target="_blank">Suggest an Integration</a></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<div class="settings-connect"></div>\n'
          );
        },
        useData: !0
      })),
      (n.templates["todo-color-palette"] = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, n, s) {
          return '<li style="background: #d42022"></li>\x3c!--\n--\x3e<li style="background: #f05a0f"></li>\x3c!--\n--\x3e<li style="background: #ffaa00"></li>\x3c!--\n--\x3e<li style="background: #eae60b"></li>\x3c!--\n--\x3e<li style="background: #9fea0a"></li>\x3c!--\n--\x3e<li style="background: #40dc19"></li>\x3c!--\n--\x3e<li style="background: #05eba6"></li>\x3c!--\n--\x3e<li style="background: #17ccde"></li>\x3c!--\n--\x3e<li style="background: #14a7eb"></li>\x3c!--\n--\x3e<li style="background: #336be8"></li>\x3c!--\n--\x3e<li style="background: #5d56da"></li>\x3c!--\n--\x3e<li style="background: #990099"></li>\x3c!--\n--\x3e<li style="background: #c30f62"></li>\x3c!--\n--\x3e<li style="background: #e377c2"></li>\x3c!--\n--\x3e<li style="background: #e6e6e6"></li>\x3c!--\n--\x3e<li class="no-color"></li>\n';
        },
        useData: !0
      })),
      (n.templates.todo_available = Handlebars.template({
        1: function (t, e, i, n, s) {
          var o,
            a,
            l = null != e ? e : t.nullContext || {},
            r = t.hooks.helperMissing,
            c = "function",
            d = t.escapeExpression,
            p =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\t<li data-provider-id="' +
            d(
              typeof (a = null != (a = p(i, "id") || (null != e ? p(e, "id") : e)) ? a : r) == c
                ? a.call(l, { name: "id", hash: {}, data: s, loc: { start: { line: 3, column: 23 }, end: { line: 3, column: 29 } } })
                : a
            ) +
            '" class="connect-todo">\n\t\t<div class="provider-icon-container">\n\t\t\t<img ' +
            (null !=
            (o = p(i, "if").call(l, null != e ? p(e, "GitHub") : e, {
              name: "if",
              hash: {},
              fn: t.program(2, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 5, column: 8 }, end: { line: 5, column: 43 } }
            }))
              ? o
              : "") +
            ' src="' +
            d(
              typeof (a = null != (a = p(i, "small_icon_url") || (null != e ? p(e, "small_icon_url") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "small_icon_url",
                    hash: {},
                    data: s,
                    loc: { start: { line: 5, column: 49 }, end: { line: 5, column: 67 } }
                  })
                : a
            ) +
            '">\n\t\t</div>\n\t\t<span class="provider-title">' +
            d(
              typeof (a = null != (a = p(i, "provider_title") || (null != e ? p(e, "provider_title") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "provider_title",
                    hash: {},
                    data: s,
                    loc: { start: { line: 7, column: 31 }, end: { line: 7, column: 49 } }
                  })
                : a
            ) +
            "\n\t\t" +
            (null !=
            (o = p(i, "if").call(l, null != e ? p(e, "beta") : e, {
              name: "if",
              hash: {},
              fn: t.program(4, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 8, column: 2 }, end: { line: 8, column: 63 } }
            }))
              ? o
              : "") +
            '</span>\n\t\t<span class="scope">' +
            d(
              typeof (a = null != (a = p(i, "short_description") || (null != e ? p(e, "short_description") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "short_description",
                    hash: {},
                    data: s,
                    loc: { start: { line: 9, column: 22 }, end: { line: 9, column: 43 } }
                  })
                : a
            ) +
            "</span>\n\t\t" +
            (null !=
            (o = p(i, "unless").call(l, null != e ? p(e, "active") : e, {
              name: "unless",
              hash: {},
              fn: t.program(6, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 10, column: 2 }, end: { line: 10, column: 79 } }
            }))
              ? o
              : "") +
            "\n\t</li>\n"
          );
        },
        2: function (t, e, i, n, s) {
          return 'class="GitHub"';
        },
        4: function (t, e, i, n, s) {
          return '<span class="badge badge-beta">Beta</span>';
        },
        6: function (t, e, i, n, s) {
          return '<span class="u--right status">Coming Soon</span>';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, n, s) {
          return (
            '<ul class="settings-list provider-list add-provider">\n' +
            (null !=
            (i = (
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              }
            )(i, "each").call(null != e ? e : t.nullContext || {}, e, {
              name: "each",
              hash: {},
              fn: t.program(1, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 2, column: 1 }, end: { line: 12, column: 10 } }
            }))
              ? i
              : "") +
            "</ul>\n"
          );
        },
        useData: !0
      })),
      (n.templates.todo_connected = Handlebars.template({
        1: function (t, e, i, n, s) {
          var o,
            a,
            l = null != e ? e : t.nullContext || {},
            r = t.hooks.helperMissing,
            c = "function",
            d = t.escapeExpression,
            p =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\t<li data-provider-id="' +
            d(
              typeof (a = null != (a = p(i, "id") || (null != e ? p(e, "id") : e)) ? a : r) == c
                ? a.call(l, { name: "id", hash: {}, data: s, loc: { start: { line: 3, column: 23 }, end: { line: 3, column: 29 } } })
                : a
            ) +
            '" class="has-provider-id' +
            (null !=
            (o = p(i, "if").call(l, null != e ? p(e, "provider_active") : e, {
              name: "if",
              hash: {},
              fn: t.program(2, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 3, column: 53 }, end: { line: 3, column: 99 } }
            }))
              ? o
              : "") +
            '">\n\t\t<a href="' +
            d(
              typeof (a = null != (a = p(i, "provider_url") || (null != e ? p(e, "provider_url") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "provider_url",
                    hash: {},
                    data: s,
                    loc: { start: { line: 4, column: 11 }, end: { line: 4, column: 27 } }
                  })
                : a
            ) +
            '" class="u--flex-grow">\n\t\t\t<div class="provider-icon-container">\n\t\t\t\t<img ' +
            (null !=
            (o = p(i, "if").call(l, null != e ? p(e, "GitHub") : e, {
              name: "if",
              hash: {},
              fn: t.program(4, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 6, column: 9 }, end: { line: 6, column: 44 } }
            }))
              ? o
              : "") +
            ' src="' +
            d(
              typeof (a = null != (a = p(i, "small_icon_url") || (null != e ? p(e, "small_icon_url") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "small_icon_url",
                    hash: {},
                    data: s,
                    loc: { start: { line: 6, column: 50 }, end: { line: 6, column: 68 } }
                  })
                : a
            ) +
            '">\n\t\t\t</div>\n\t\t\t' +
            d(
              typeof (a = null != (a = p(i, "provider_title") || (null != e ? p(e, "provider_title") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "provider_title",
                    hash: {},
                    data: s,
                    loc: { start: { line: 8, column: 3 }, end: { line: 8, column: 21 } }
                  })
                : a
            ) +
            "\n\t\t\t" +
            (null !=
            (o = p(i, "if").call(l, null != e ? p(e, "beta") : e, {
              name: "if",
              hash: {},
              fn: t.program(6, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 9, column: 3 }, end: { line: 9, column: 64 } }
            }))
              ? o
              : "") +
            '\n\t\t\t<span class="scope">' +
            d(
              typeof (a = null != (a = p(i, "short_description") || (null != e ? p(e, "short_description") : e)) ? a : r) == c
                ? a.call(l, {
                    name: "short_description",
                    hash: {},
                    data: s,
                    loc: { start: { line: 10, column: 23 }, end: { line: 10, column: 44 } }
                  })
                : a
            ) +
            '</span>\n       \t</a>\n\t\t<span class="settings-list-right">\n\t\t\t<span class="provider-actions">\n\t\t\t\t' +
            (null !=
            (o = p(i, "if").call(l, null != e ? p(e, "config_command") : e, {
              name: "if",
              hash: {},
              fn: t.program(8, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 14, column: 4 }, end: { line: 14, column: 100 } }
            }))
              ? o
              : "") +
            "\n\t\t\t\t" +
            (null !=
            (o = p(i, "unless").call(l, null != e ? p(e, "provider_active") : e, {
              name: "unless",
              hash: {},
              fn: t.program(10, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 15, column: 4 }, end: { line: 15, column: 107 } }
            }))
              ? o
              : "") +
            "\n\t\t\t\t" +
            (null !=
            (o = p(i, "unless").call(l, null != e ? p(e, "prevent_disconnect") : e, {
              name: "unless",
              hash: {},
              fn: t.program(12, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 16, column: 4 }, end: { line: 16, column: 110 } }
            }))
              ? o
              : "") +
            "\n\t\t\t</span>\n\t\t\t" +
            (null !=
            (o = p(i, "if").call(l, null != e ? p(e, "provider_active") : e, {
              name: "if",
              hash: {},
              fn: t.program(14, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 18, column: 3 }, end: { line: 18, column: 67 } }
            }))
              ? o
              : "") +
            "\n\t\t</span>\n\t</li>\n"
          );
        },
        2: function (t, e, i, n, s) {
          return " active-provider";
        },
        4: function (t, e, i, n, s) {
          return 'class="GitHub"';
        },
        6: function (t, e, i, n, s) {
          return '<span class="badge badge-beta">Beta</span>';
        },
        8: function (t, e, i, n, s) {
          return '<span class="action provider-action launch-config">Configure</span>';
        },
        10: function (t, e, i, n, s) {
          return '<span class="action provider-action set-active">Set Active</span>';
        },
        12: function (t, e, i, n, s) {
          return '<span class="action provider-action disconnect">Disconnect</span>';
        },
        14: function (t, e, i, n, s) {
          return '<span class="status">Active</span>';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, n, s) {
          return (
            '<ul class="settings-list provider-list connected-providers">\n' +
            (null !=
            (i = (
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              }
            )(i, "each").call(null != e ? e : t.nullContext || {}, e, {
              name: "each",
              hash: {},
              fn: t.program(1, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 2, column: 1 }, end: { line: 21, column: 10 } }
            }))
              ? i
              : "") +
            "</ul>\n"
          );
        },
        useData: !0
      })),
      (n.templates.todo_lists = Handlebars.template({
        1: function (t, e, i, n, s) {
          var o =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
          return null !=
            (i = o(i, "unless").call(null != e ? e : t.nullContext || {}, null != e ? o(e, "deleted") : e, {
              name: "unless",
              hash: {},
              fn: t.program(2, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 3, column: 1 }, end: { line: 45, column: 12 } }
            }))
            ? i
            : "";
        },
        2: function (t, e, i, n, s) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l = t.hooks.helperMissing,
            r = "function",
            c = t.escapeExpression,
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\t<li data-id="' +
            c(
              typeof (o = null != (o = d(i, "csid") || (null != e ? d(e, "csid") : e)) ? o : l) == r
                ? o.call(a, { name: "csid", hash: {}, data: s, loc: { start: { line: 4, column: 14 }, end: { line: 4, column: 22 } } })
                : o
            ) +
            '" class="settings-todo-list draggable-todo-list" draggable="true">\n\t\t<span class="settings-todo-list-color"></span>\n\n\t\t<span class="settings-todo-list-name">' +
            c(
              typeof (o = null != (o = d(i, "title") || (null != e ? d(e, "title") : e)) ? o : l) == r
                ? o.call(a, { name: "title", hash: {}, data: s, loc: { start: { line: 7, column: 40 }, end: { line: 7, column: 49 } } })
                : o
            ) +
            '</span>\n\t\t\x3c!-- <span class="settings-list-status">\n\t\t\t<i class="loading-icon"></i>\n\t\t</span> --\x3e\n\t\t<span class="settings-list-right">\n' +
            (null !=
            (c = d(i, "if").call(a, null != e ? d(e, "stock") : e, {
              name: "if",
              hash: {},
              fn: t.program(3, s, 0),
              inverse: t.program(5, s, 0),
              data: s,
              loc: { start: { line: 12, column: 3 }, end: { line: 42, column: 10 } }
            }))
              ? c
              : "") +
            "\t\t</span>\n\t</li>\n"
          );
        },
        3: function (t, e, i, n, s) {
          return '\t\t\t\t<span class="action-group">\n\t\t\t\t\t<span class="default">Default</span>\n\t\t\t\t</span>\n';
        },
        5: function (t, e, i, n, s) {
          return '\t\t\t\t<span class="action-group">\x3c!--\n\t\t\t\t\t--\x3e<i class="rename-list-failed error-icon" title="Trouble connecting... Click to retry">!</i>\x3c!--\n\t\t\t\t\t--\x3e<span class="todo-rename-list action">Rename</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="todo-delete-list action" title="Delete">\n\t\t\t\t\t\t<i class="icon-trash">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24"><path d="M19.15 7.5H2.838a.5.5 0 0 0-.5.5l1.81 14a2 2 0 0 0 2 2h9.954a2 2 0 0 0 2-2L19.65 8a.5.5 0 0 0-.5-.5zm-9.9 13a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0v9zm5 0a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0v9zM20.43 4h-4.18a.25.25 0 0 1-.25-.25V2.5A2.5 2.5 0 0 0 13.5 0h-5A2.5 2.5 0 0 0 6 2.5v1.25a.25.25 0 0 1-.25.25h-4.5a1 1 0 0 0 0 2h19.18a1 1 0 0 0 0-2zM8 3.75V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.25a.25.25 0 0 1-.25.25h-5.5A.25.25 0 0 1 8 3.75z" fill-rule="nonzero"/></svg>\n\t\t\t\t\t\t</i>\n\t\t\t\t\t</span>\x3c!--\n\t\t\t\t\t--\x3e<i class="delete-failed-1 error-icon" title="Trouble connecting... Click to retry">!</i>\x3c!--\n\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t--\x3e<span class="delete-group" title="">\x3c!--\n\t\t\t\t\t--\x3e<span class="delete-1">\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-msg">Delete list?</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-yes clickable">Yes</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-no clickable">No</span>\x3c!--\n\t\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete-2">\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-msg-2"></span>\x3c!--\n\t\t\t\t\t\t--\x3e\x3c!--<span class="delete delete-todos clickable">Delete</span> comment out for release--\x3e\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete move-todos clickable">Move to Inbox</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-cancel clickable">Cancel</span>\x3c!--\n\t\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete delete-loading">Deleting...</span>\x3c!--\n\t\t\t\t\t--\x3e<i class="delete-failed-2 error-icon" title="Trouble connecting... Click to retry">!</i>\n\t\t\t\t</span>\n';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, n, s) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<ul class="settings-list options-list settings-todo-lists">\n' +
            (null !=
            (o = l(i, "each").call(a, e, {
              name: "each",
              hash: {},
              fn: t.program(1, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 2, column: 1 }, end: { line: 46, column: 10 } }
            }))
              ? o
              : "") +
            '\t<li class="settings-todo-add-list">\n\t\t<input type="text" class="settings-todo-add-list-input" placeholder="+ Add a list" autocomplete="off">\n\t\t<i class="add-list-failed error-icon" title="Trouble connecting... Click to retry">!</i>\n\t\t<span class="toggle-add-list settings-cancel">\n\t\t\t<span class="icon-wrapper">\n\t\t\t\t' +
            (null !=
            (o =
              "function" ==
              typeof (i = null != (i = l(i, "iconCancel") || (null != e ? l(e, "iconCancel") : e)) ? i : t.hooks.helperMissing)
                ? i.call(a, {
                    name: "iconCancel",
                    hash: {},
                    data: s,
                    loc: { start: { line: 52, column: 4 }, end: { line: 52, column: 22 } }
                  })
                : i)
              ? o
              : "") +
            '</span>\n\t\t</span>\n\t\t<span class="settings-list-status">\n\t\t\t<i class="loading-icon"></i>\n\t\t</span>\n\t\t<button class="button toggle-form toggle-add-list show" data-test="settings-todo-add-list"><i class="icon icon-plus"></i>Add List</button>\n\t</li>\n</ul>\n'
          );
        },
        useData: !0
      })),
      (n.styles = n.styles || {}),
      (n.styles.style = function () {
        var t = document.createElement("style");
        (t.type = "text/css"),
          (t.innerHTML =
            ".settings-todo-lists-container{margin-bottom:35px}.settings-todo .settings-todo-lists li{display:flex}.settings-todo-lists{margin-bottom:0}.settings-todo-lists li{padding:var(--list-v-padding) 0;position:relative}.settings-todo-lists li:nth-last-child(2){border-bottom:1px solid var(--border-color)}.settings-todo-lists li.loading{margin:0;display:block}.settings-todo-list-color{margin:calc(var(--list-v-padding) * -1) 0;display:inline-flex;align-items:center;cursor:pointer}.settings-todo-list-color .swatch-container{margin:0;padding:10px;padding-left:var(--list-h-padding)}.settings-todo-list-color .swatch-container .swatch{--size:13px;height:var(--size);width:var(--size);box-shadow:none}.settings-todo-list-color .swatch-container:hover .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.7),inset 0 0 4px 1px rgba(255,255,255,.3)}.settings-todo-list-color .active .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5),inset 0 0 4px 1px rgba(255,255,255,.3)!important}.settings-todo-list-color .swatch-container .swatch.no-color,.settings-todo-list-color .swatch-container .swatch.null-color{--box-shadow-color:var(--color-stop-3);background-image:url(/img/grid.png)!important;box-shadow:inset 0 0 0 1.5px var(--box-shadow-color)}.settings-todo-list-color .swatch-container:hover .swatch.no-color,.settings-todo-list-color .swatch-container:hover .swatch.null-color{--box-shadow-color:var(--color-stop-4);background-image:url(/img/grid.png)!important;box-shadow:inset 0 0 0 1.5px var(--box-shadow-color)}.settings-todo-list-color.none .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3)}.settings-todo-list:hover .none .swatch{opacity:.7}.none .settings-todo-list-color .swatch-container:hover .swatch{opacity:1}.color-palette-wrapper{position:relative}.swatch-color-picker{width:215px;padding:10px 10px 5px;position:absolute;bottom:35px;left:-8px;z-index:100;display:none;background:#282828;border-radius:4px;line-height:1px}.swatch-color-picker.nipple-bottom-left:after{left:13px;border-top-color:#282828!important}.active .swatch-color-picker{display:block}.swatch-color-picker li{height:20px;width:20px;margin:0 5px 5px 0;padding:0;display:inline-block!important;border:none!important;border-radius:4px;cursor:pointer}.swatch-color-picker li:nth-child(8n){margin-right:0;border:none}.swatch-color-picker li:hover{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.75),inset 0 0 8px 1px rgba(255,255,255,.6)}.swatch-color-picker .active{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.9)!important}.swatch-color-picker .no-color{background-image:url(/img/grid.png);box-shadow:inset 0 0 0 2px rgba(255,255,255,.3)}.swatch-color-picker .check{position:absolute;top:5px;left:5px;display:none;fill:#fff}.settings-todo-list-name{flex-grow:1;opacity:.9;cursor:default;outline:0;overflow:hidden}.settings-todo-list-name.editing{opacity:.6;cursor:auto;outline:0}.settings-todo-list.failed .rename-list-failed{display:inline-block}.loading .settings-list-status{display:block;opacity:1}.settings-list-right{display:flex;align-items:center}.loading .settings-list-right{display:none}.settings-list-right .delete{padding:4px}.settings-list-right .todo-delete-list,.settings-list-right .todo-delete-list .icon-trash{display:inline-flex}.settings-list-right .todo-delete-list .icon-trash>svg{height:12px;fill:var(--color-icon)}.settings-list-right .delete-2{display:none}.settings-list-right .error-icon{height:14px;width:14px;display:none;border-radius:100%;text-align:center}.settings-list-right .delete-failed-1{margin-right:5px;display:none}.settings-todo-list.failed .settings-list-right,.settings-todo-list.failed-delete .settings-list-right,.settings-todo-lists li:hover .settings-list-right{opacity:1}.settings-list-right .delete-group.failed .delete-failed-2{display:inline-block}.settings-list-right .action{margin:-9px 0;padding:9px 5px;opacity:.6;cursor:pointer;font-weight:500}.settings-list-right .action:hover{opacity:1}.settings-list-right .action:active{opacity:.8}.settings-list-right .default{margin-right:5px}.settings-todo-lists .settings-todo-add-list{padding:0;position:relative;border-bottom:none!important;border-top:none}.settings-todo-lists .toggle-add-list{display:none}.settings-todo-lists .toggle-add-list.show{display:inline}.settings-todo-lists .settings-todo-add-list-input{margin-bottom:4px!important;padding:var(--list-v-padding) 20px var(--list-v-padding) var(--list-h-padding);display:none;opacity:.75;border:0}.settings-todo-add-list.loading .settings-todo-add-list-input{opacity:.5}.settings-todo-add-list .error-icon{height:14px;width:14px;position:absolute;top:9px;right:19px;display:none;border-radius:100%;text-align:center}.settings-todo-add-list.failed .error-icon{display:inline-block}.settings-todo-add-list .settings-cancel{margin:3px -6px 0 0;display:none}.loading .settings-cancel.show{display:none}.settings-todo-add-list.loading .settings-list-status{margin-top:9px}"),
          document.getElementsByTagName("head")[0].appendChild(t);
      }),
      (n.commands.ToggleKeepTodoState = f.models.Command.extend({
        defaults: { id: "todo.toggle.keepstate" },
        execute: function () {
          f.models.customization.toggle("keepTodoState"),
            f.Analytics.capture("stay open toggle", { feature: "todo", new_value: f.models.customization.get("keepTodoState") }),
            f.models.customization.get("keepTodoState") || (localStorage.showTodoList = !1);
        }
      })),
      (n.views.TodoListColorPalette = Backbone.View.extend({
        tagName: "ul",
        attributes: { class: "nipple nipple-bottom-left swatch-color-picker" },
        template: n.templates["todo-color-palette"],
        active: !1,
        events: { "click li": "handleClick" },
        initialize: function (t) {
          (this.color = t.color.toLowerCase().replace(/ /g, "")), (this.callback = t.renderCallback);
        },
        render: function () {
          return this.$el.html(this.template()), this.preRender(), this;
        },
        selectColor: function (t) {
          this.$el.find("li").removeClass("active"),
            this.$el.find("svg").hide(),
            t.addClass("active"),
            t.find("svg").css("display", "block");
        },
        handleClick: function (t) {
          t.stopPropagation(),
            f.conditionalFeatures.featureEnabled("plus")
              ? (this.selectColor(v(t.target)),
                v(t.target).hasClass("no-color") ? (this.color = "rgba(0,0,0,0)") : (this.color = v(t.target).css("background-color")),
                this.callback(new Colors({ color: this.color })))
              : f.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "settings" });
        },
        preRender: function () {
          var n = this;
          this.$el.find("li").each(function (t, e) {
            var i = v(e);
            i.html(
              '<svg class="check" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="10px" height="10px"><defs><filter id="f4" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" /><feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" /><feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter></defs> <path class="path" d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" /></svg>'
            ),
              i.hasClass("active") && i.find("svg").css("display", "block"),
              0 == n.color.indexOf("rgba") &&
                "1" == n.color.charAt(n.color.length - 2) &&
                (n.color = "rgb(" + n.color.substring(5, n.color.length - 3) + ")"),
              v(e).css("background-color").replace(/ /g, "") == n.color && n.selectColor(i);
          });
        }
      })),
      n.dependencies.settings),
    e =
      ((n.views.Main = e.views.SettingsPanel.extend({
        attributes: { id: "settings-todo", class: "settings-view settings-todo", "data-test": "settings-todo" },
        template: n.templates.main,
        panelid: "todo",
        panelTitle: "Todo Settings",
        analytics: new f.Analytics({ feature: "todo", is_paid_event: !0 }),
        events: {
          "click #remember-open-state": "toggleRememberOpenState",
          "click #auto-focus": "toggleAutoFocus",
          "dblclick .draggable-todo-list": "handleClickRenameList",
          "dblclick .settings-list-right": "preventRenameOnActions",
          "keyup .settings-todo-list-name": "handleEscKeyupRename",
          "keypress .settings-todo-list-name": "handleEnterKeypressRename",
          "blur .settings-todo-list-name": "onBlur",
          "click .todo-rename-list": "handleClickRenameList",
          "click .rename-list-failed": "saveList",
          "click .todo-delete-list": "toggleDeleteConf",
          "click .delete-failed-1": "toggleDeleteConf",
          "click .delete-yes": "handleClickDeleteYes",
          "click .delete-no": "toggleDeleteConf",
          "click .delete-todos": "handleClickDeleteTodos",
          "click .move-todos": "handleClickMoveTodos",
          "click .delete-cancel": "handleClickDeleteCancel",
          "click .delete-failed-2": "showDeleteConf",
          "click .toggle-add-list": "toggleAddList",
          "click .add-list-failed": "processAddListForm",
          "keyup .settings-todo-add-list-input": "handleEscKeyupAdd",
          "keypress .settings-todo-add-list-input": "handleEnterKeypressAdd",
          "click .connect-todo": "initiateConnectProvider",
          "click #connect-button": "connectTodoProvider",
          "click .add-integration": "toggleAddIntegration",
          "click .hide-integration": "toggleAddIntegration",
          "click .set-active": "setProviderActive",
          "click .disconnect": "disconnectProvider",
          "click .launch-config": "launchConfiguration",
          "click .back": "cancelConnect",
          "dragstart .draggable-todo-list": "dragstart",
          "dragenter .draggable-todo-list": "dragenter",
          dragover: "dragover",
          dragend: "dragend",
          drop: "drop"
        },
        initialize: function () {
          _.bindAll(this, "dragstart", "dragenter");
          var e = this;
          f.widgetManager.getWidgetAsync("todo").then(function (t) {
            (e.todos = t) && !t.manager && t.doFirstFetch(),
              (e.collection = new f.collect.Settings()),
              (e.collection.url = f.globals.urlRoot + "settings/todo"),
              (e.collection.parse = function (t) {
                return (e.collection.lastResponse = t).connected_providers;
              }),
              e.listenTo(e.collection, "reset", e.collectionReset),
              e.listenTo(f, "todo:providerChanged", e.providerChanged),
              e.listenTo(f.models.customization, "change", e.customizationChanged),
              e.refreshData(),
              t.manager.getMomoLists().then(function (t) {
                (e.momoCustomLists = t),
                  e.populateCustomLists(),
                  e.listenTo(e.momoCustomLists, "reset refresh server-sync", e.populateCustomLists);
              });
          });
        },
        render: function (t) {
          t && "nav-todo" === t.source && this.analytics.capture("settings panel show", { is_paid_event: !1 });
          var e = { suggestIntegrationLink: f.utils.mConst("suggestIntegrationLink"), isTouchDevice: f.utils.isTouchDevice() },
            i = this;
          return (
            this.$el.html(this.template(e)),
            f.conditionalFeatures.featureEnabled("integrationsDisabled") && this.$el.find(".integrations").hide(),
            (this.$connect = v(this.$el.find(".settings-connect")[0])),
            (this.$todo = v(this.$el.find(".settings-view-wrapper")[0])),
            (this.$addIntegration = this.$(".add-integration")),
            (this.$addProviderContainer = this.$(".section-add-provider")),
            this.setControlStates(),
            (this.$placeholder = v("<li></li>").addClass("placeholder")),
            this.$placeholder.appendTo(this.$el),
            this.$placeholder.hide(),
            (this.intervalId = setInterval(
              function (e) {
                f.widgetManager.getWidgetAsync("todo").then(function (t) {
                  try {
                    (e.momoProvider = t.manager.todoProviderDetails("1", !0)), e.momoProvider && clearInterval(e.intervalId);
                  } catch (t) {
                    clearInterval(e.intervalId), v(e.$el.find("#custom-lists")[0]).html("");
                  }
                });
              },
              100,
              this
            )),
            setTimeout(function () {
              t &&
                "connect" == t.action &&
                (i.$addIntegration.hide(),
                i.$addProviderContainer.css("display", "block"),
                setTimeout(function () {
                  v(".settings-todo").animate({ scrollTop: v("#todo-settings-integrations").position().top });
                }, 100));
            }, 50),
            this
          );
        },
        populateCustomLists: function () {
          this.$customLists = v(this.$el.find("#custom-lists")[0]);
          var t = [],
            e = [];
          this.momoCustomLists && ((t = this.momoCustomLists.toJSON()), (e = this.momoCustomLists.where({ deleted: !1 })));
          try {
            t = t.sort(function (t, e) {
              return t.order - e.order;
            });
          } catch (t) {}
          var t = n.templates.todo_lists(t),
            i =
              (this.$customLists.html(t),
              this.momoCustomLists && this.$(".draggable-todo-list").attr("draggable", this.momoCustomLists.allowReorder),
              (this.$addListInput = this.$(".settings-todo-add-list-input")),
              this);
          e.map(function (t) {
            var e = new n.views.TodoListColorPicker(t.get("csid"), t.getColor(), i);
            i.$customLists
              .find('[data-id="' + t.get("csid") + '"]')
              .find(".settings-todo-list-color")
              .append(e.render().$el);
          });
        },
        setListColor: function (t, e, i) {
          var n = this.momoCustomLists.findWhere({ csid: t }),
            s = this.$customLists.find('[data-id="' + t + '"]');
          s.addClass("loading"),
            s.find(".settings-list-status").addClass("loading"),
            this.analytics.capture("list set color", {
              list: n.isCustom() ? "custom" : n.get("title").toLowerCase(),
              provider: "momentum"
            }),
            n.save(
              { color: i },
              {
                patch: !1,
                success: function () {
                  s.removeClass("loading"),
                    s.find(".settings-list-status").removeClass("loading"),
                    f.trigger("globalEvent:resetLists", { listId: t });
                },
                error: function () {
                  s.find(".settings-list-status").removeClass("loading"), s.removeClass("loading").addClass("failed");
                }
              }
            );
        },
        handleClickRenameList: function (t) {
          f.conditionalFeatures.featureEnabled("plus")
            ? ((this.clickedListId = this.getClickedListId(t)),
              this.momoCustomLists.findWhere({ csid: this.clickedListId }).get("stock") ||
                ((this.$clickedListLi = this.$customLists.find('[data-id="' + this.clickedListId + '"]')),
                (this.$clickedListName = this.$clickedListLi.find(".settings-todo-list-name")),
                this.$clickedListName.attr("contenteditable", !0).addClass("editing").trigger("focus"),
                f.utils.setEndOfContentEditable(this.$clickedListName.get(0)),
                (this.clickedListNameText = this.$clickedListName.text())))
            : f.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "settings" });
        },
        getClickedListId: function (t) {
          return v(t.delegatedTarget).closest("li").data("id");
        },
        handleClickDelete: function (t) {
          t.stopPropagation();
          t = this.getClickedListId(t);
          this.deleteList(t);
        },
        handleClickDeleteYes: function (t) {
          t.stopPropagation();
          var e = this.getClickedListId(t),
            i = this.$customLists.find('[data-id="' + e + '"]');
          i.find(".delete-1").hide(),
            this.momoCustomLists.offlineOnly ? (t.stopPropagation(), this.deleteList(e)) : i.find(".delete-2").css("display", "inline");
        },
        handleClickDeleteTodos: function (t) {
          t.stopPropagation();
          t = this.getClickedListId(t);
          this.deleteList(t);
        },
        handleClickMoveTodos: function (t) {
          t.stopPropagation();
          t = this.getClickedListId(t);
          this.deleteList(t);
        },
        handleClickDeleteCancel: function (t) {
          (t = this.getClickedListId(t)), (t = this.$customLists.find('[data-id="' + t + '"]'));
          t.find(".action-group").css("display", "inline"),
            t.find(".delete-1").css("display", "inline"),
            t.find(".delete-2").hide(),
            t.find(".delete-group").hide();
        },
        deleteList: function (t) {
          var e,
            i = this.$customLists.find('[data-id="' + t + '"]'),
            n = i.find(".delete-group");
          function s() {
            n.removeClass("loading"), i.remove(), f.trigger("globalEvent:refreshInbox");
          }
          n.hasClass("loading") ||
            (n.removeClass("failed").addClass("loading"),
            (t = this.momoCustomLists.findWhere({ csid: t })),
            this.momoCustomLists.selectedListId === t.id && this.momoCustomLists.switchToDefaultList(),
            (e = { wait: !0, serverSuccess: s }),
            this.momoCustomLists.offlineOnly && (e.success = s),
            t.save({ deleted: !0 }, e),
            this.analytics.capture("custom list delete", { provider: "momentum" }));
        },
        toggleDeleteConf: function (t) {
          t.stopPropagation();
          var e = this,
            i = this.getClickedListId(t),
            t = this.$customLists.find('[data-id="' + i + '"]'),
            n = t.find(".action-group");
          n.is(":visible")
            ? this.checkTodoCount(
                i,
                function (t) {
                  e.deleteOrConfirm(i, t);
                },
                function () {
                  e.todoCountCheckFailed(i);
                }
              )
            : (t.find(".delete-yes").removeClass("loading failed"), t.find(".delete-group").hide(), n.css("display", "inline"));
        },
        preventRenameOnActions: function (t) {
          t.stopPropagation(), t.preventDefault();
        },
        deleteOrConfirm: function (t, e) {
          var i = this.$customLists.find('[data-id="' + t + '"]');
          i.find(".action-group").hide(),
            0 < e
              ? (i.find(".delete-group").css("display", "inline"),
                i.find(".delete-yes").removeClass("loading failed"),
                i.find(".delete-msg-2").css("display", "inline").text(this.setDelete2Msg(e)))
              : this.deleteList(t);
        },
        showDeleteConf: function (t) {
          this.$customLists
            .find('[data-id="' + this.getClickedListId(t) + '"]')
            .find(".delete-group")
            .removeClass("failed");
        },
        todoCountCheckFailed: function (t) {
          t = this.$customLists.find('[data-id="' + t + '"]');
          t.find(".todo-delete-list").hide(), t.find(".delete-failed-1").css({ display: "inline-block" }), t.addClass("failed-delete");
        },
        setDelete2Msg: function (t) {
          var e = "List has " + t;
          return (e += 1 < t ? " todos." : " todo.");
        },
        checkTodoCount: function (t, i, e) {
          var t = this.momoCustomLists.findWhere({ csid: t });
          this.momoCustomLists.offlineOnly
            ? (t.itemCollection.fetch({ silent: !0, ignoreRender: !0 }), i(t.itemCollection.where({ deleted: !1 }).length))
            : ((t = f.globals.urlRootApi + "todos?listid=" + t.get("id")),
              v
                .ajax({ type: "GET", contentType: "application/json", url: t })
                .done(function (t) {
                  var e = null,
                    t = t.items || t,
                    e = t.length;
                  t.forEach(function (t) {
                    t.today && e--;
                  }),
                    i(e);
                })
                .fail(function () {
                  e();
                }));
        },
        handleEscKeyupRename: function (t) {
          27 === t.keyCode && (t.stopPropagation(), this.abortRenameList());
        },
        handleEnterKeypressRename: function (t) {
          13 === t.keyCode &&
            (t.preventDefault(),
            t.shiftKey ||
              t.ctrlKey ||
              t.metaKey ||
              t.altKey ||
              (this.analytics.capture("custom list rename", { provider: "momentum" }), this.saveList()));
        },
        handleEscKeyupAdd: function (t) {
          27 === t.keyCode && (t.stopPropagation(), this.abortAddList());
        },
        handleEnterKeypressAdd: function (t) {
          13 === t.keyCode && (t.preventDefault(), t.shiftKey || t.ctrlKey || t.metaKey || t.altKey || this.processAddListForm());
        },
        toggleAddList: function () {
          f.conditionalFeatures.featureEnabled("plus")
            ? (this.$(".toggle-add-list").toggleClass("show"),
              (this.$addListLi = this.$(".settings-todo-add-list")),
              (this.$addListInput = this.$(".settings-todo-add-list-input")),
              this.$addListInput.mToggle("inline-block"),
              this.$addListInput.is(":visible") && this.$addListInput.trigger("focus"))
            : f.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "settings" });
        },
        processAddListForm: function () {
          var t = f.utils.capitalizeFirstLetter(this.$addListInput.val().trim()),
            e = this;
          t &&
            (this.$addListLi.removeClass("failed"),
            this.$addListInput.trigger("blur"),
            this.momoProvider.selectedProject().addNewList(t, function () {
              e.populateCustomLists(), e.analytics.capture("custom list add", { location: "settings", provider: "momentum" });
            }));
        },
        abortRenameList: function () {
          this.$clickedListName.attr("contenteditable", !1).removeClass("editing"), this.$clickedListName.html(this.clickedListNameText);
        },
        saveList: function () {
          var t,
            e = this;
          this.$clickedListLi.hasClass("loading") ||
            ((t = this.$clickedListName.text().trim())
              ? (this.$clickedListLi.find(".settings-list-status").addClass("loading"),
                this.$clickedListLi.removeClass("failed").addClass("loading"),
                this.$clickedListName.trigger("blur"),
                this.momoCustomLists.findWhere({ csid: this.clickedListId }).save(
                  { title: t },
                  {
                    patch: !1,
                    success: function () {
                      e.$clickedListLi.removeClass("loading"),
                        e.$clickedListLi.find(".settings-list-status").removeClass("loading"),
                        e.$clickedListName.text(t).attr("contenteditable", !1).removeClass("editing"),
                        f.trigger("globalEvent:resetLists", { listId: e.clickedListId });
                    },
                    error: function () {
                      e.$clickedListLi.find(".settings-list-status").removeClass("loading"),
                        e.$clickedListLi.removeClass("loading").addClass("failed");
                    }
                  }
                ))
              : this.$clickedListName.text(this.clickedListNameText));
        },
        abortAddList: function (t) {
          t && t.preventDefault(), this.$addListInput.val("");
        },
        onBlur: function () {
          this.saveList();
        },
        providerChanged: function () {
          this.populateConnectedProviders();
        },
        customizationChanged: function (t) {
          t && ((t = t.changedAttributes()).hasOwnProperty("autoFocus") || t.hasOwnProperty("keepTodoState")) && this.setControlStates();
        },
        collectionReset: function () {
          this.populateConnectedProviders(), this.populateAvailableProviders();
        },
        refreshData: function () {
          this.collection.fetch({ reset: !0 });
        },
        initiateConnectProvider: function (t) {
          t && t.preventDefault(),
            (this.connect_provider_id = parseInt(v(t.delegatedTarget).data("provider-id"))),
            f.conditionalFeatures.featureEnabled("plus")
              ? ((t = _.findWhere(this.collection.lastResponse.available_providers, { id: this.connect_provider_id })),
                (this.connect_provider_title = t.provider_title),
                t.active &&
                  (this.$connect.html(e.templates.connect(t)),
                  this.$todo.hide(),
                  this.$connect.css("display", "flex"),
                  this.analytics.capture("integrations detail click", { provider: this.connect_provider_title.toLowerCase() })))
              : f.cmd("modal.open", "UPSELL_TODO_INTEGRATIONS", { eventSource: "settings" });
        },
        setProviderActive: function (t) {
          t && (t.stopPropagation(), t.preventDefault());
          var e = parseInt(v(t.delegatedTarget).closest(".has-provider-id").data("provider-id")),
            t = f.widgetManager.getWidget("todo"),
            i = "";
          this.collection.forEach(function (t) {
            e == t.id && (i = t.get("provider_title"));
          }),
            e && t && t.manager && t.manager.changeProviderAsync(e),
            this.analytics.capture("provider set active", { location: "settings", provider: i.toLowerCase() });
        },
        disconnectProvider: function (t) {
          var i = this,
            n =
              (t && (t.stopPropagation(), t.preventDefault()),
              parseInt(v(t.delegatedTarget).closest(".has-provider-id").data("provider-id"))),
            s = "",
            t =
              (this.collection.forEach(function (t) {
                n == t.id && (s = t.get("provider_title"));
              }),
              f.globals.urlRootApi + "settings/todo/providers/" + n);
          v.ajax({ type: "DELETE", contentType: "application/json", url: t })
            .done(function (t) {
              var e;
              t.status &&
                "success" == t.status &&
                ((t = localStorage.activeTodoProvider.replace(/['"]+/g, "")),
                (e =
                  !localStorage.activeTodoProvider || (n.toString() != t && n.toString() != t.substring(0, t.indexOf("-")))
                    ? e
                    : f.widgetManager.getWidget("todo")) &&
                  e.manager &&
                  e.manager.changeProvider("1"),
                i.refreshData(),
                i.analytics.capture("integration disconnect", { provider: s.toLowerCase() }));
            })
            .fail(function () {});
        },
        launchConfiguration: function (t) {
          t && (t.stopPropagation(), t.preventDefault());
          var t = parseInt(v(t.delegatedTarget).closest(".has-provider-id").data("provider-id"));
          t && (t = this.collection.get(t)) && (t = t.get("config_command")) && f.commandManager.execute(t);
        },
        toggleRememberOpenState: function (t) {
          t && (t.stopPropagation(), t.preventDefault()), f.commandManager.execute("todo.toggle.keepstate");
        },
        toggleAutoFocus: function (t) {
          t && t.preventDefault(),
            f.conditionalFeatures.featureEnabled("plus")
              ? f.commandManager.execute("todo.toggle.autofocus", null, { sourceApp: "Settings", eventSource: "Settings" })
              : f.cmd("modal.open", "UPSELL_AUTOFOCUS", { eventSource: "settings" });
        },
        setControlStates: function () {
          this.$el
            .find("#auto-focus")
            .toggleClass("on", f.conditionalFeatures.featureEnabled("plus") && f.models.customization.get("autoFocus")),
            this.$el.find("#remember-open-state").toggleClass("on", f.models.customization.get("keepTodoState"));
        },
        connectTodoProvider: function (t) {
          t && (t.stopPropagation(), t.preventDefault());
          v(this.$el.find("#connect-button")[0]).html("Connecting…");
          var g = this,
            t = ((this.authAttempts = 0), this.connect_provider_id),
            h = this.connect_provider_title,
            e = f.globals.urlRootApi + "settings/todo/providers",
            m = { provider_id: t };
          v.ajax({ type: "PUT", contentType: "application/json", url: e, data: JSON.stringify(m) })
            .done(function (t) {
              var e, i, n, s, o, a, l, r, c, d, p, u;
              t.status && "authRequired" === t.status
                ? t.authorizationUrl &&
                  g.authAttempts < 2 &&
                  (g.authAttempts++,
                  (e = t.winWidth || 600),
                  (i = t.winHeight || 510),
                  (l = t.windowFeatures || "titlebar,resizable,status"),
                  (a = window.screen.width / 2 - e / 2),
                  (n = window.screen.height / 2 - i / 2),
                  (s = window.open(
                    t.authorizationUrl,
                    "MomentumAuthWindow",
                    l + ",left=" + a + ",top=" + n + ",width=" + e + ",height=" + i
                  )),
                  (g.authWindow = s),
                  (o = function () {
                    s &&
                      !s.closed &&
                      setTimeout(function () {
                        s && !s.closed && s.close();
                      }, 1e3),
                      g.$connect.hide(),
                      g.$todo.css("display", "block"),
                      g.refreshData(),
                      f.trigger("todo:newProvider"),
                      t.change_provider &&
                        f.commandManager.execute("settings.todo.provider.change", null, {
                          provider_id: t.initial_load_provider || m.provider_id,
                          newProvider: !0
                        }),
                      t.config_command && f.commandManager.execute(t.config_command),
                      g.analytics.capture("integration connect", { provider: h.toLowerCase() });
                  }),
                  (l = ""),
                  1 < (a = t.authorizationUrl.split("/")).length && (l = a[a.length - 1]),
                  (r = f.globals.urlRootApi + "user/auth/status/" + l),
                  (c = !1),
                  (d = 0),
                  (p = 1e3),
                  (u = function () {
                    (s && !s.closed) ||
                      v
                        .ajax({ type: "GET", contentType: "application/json", url: r })
                        .done(function (t) {
                          t && t.token_obtained
                            ? o()
                            : (g.analytics.capture("integration connect cancel", { provider: h.toLowerCase() }),
                              (c = !0),
                              g.cancelConnect());
                        })
                        .fail(function (t) {
                          g.analytics.capture("integration connect fail", {
                            provider: h.toLowerCase(),
                            error: (t && t.responseJSON && t.responseJSON.msg) || "no message"
                          }),
                            g.cancelConnect();
                        }),
                      100 < ++d ||
                        c ||
                        (d % 30 && (p += 1e3),
                        v
                          .ajax({ type: "GET", contentType: "application/json", url: r })
                          .done(function (t) {
                            t && t.token_obtained
                              ? o()
                              : setTimeout(function () {
                                  u();
                                }, p);
                          })
                          .fail(function () {
                            setTimeout(function () {
                              u();
                            }, p);
                          }));
                  })())
                : t.status && "success" === t.status && (g.refreshData(), t.config_command) && f.commandManager.execute(t.config_command);
            })
            .fail(function () {
              g.analytics.capture("integration connect fail", { provider: h.toLowerCase() }), g.cancelConnect();
            });
        },
        cancelConnect: function (t) {
          t && (t.stopPropagation(), t.preventDefault()),
            this.authWindow && !this.authWindow.closed && (this.authWindow.close(), (this.authWindow = null)),
            this.$connect.hide(),
            this.$todo.css("display", "block");
        },
        populateConnectedProviders: function () {
          var t = v(this.$el.find("#connected-providers")[0]),
            e = JSON.parse(localStorage.activeTodoProvider || 1),
            i =
              ((e = Number.isInteger(e) ? e : parseInt(e, 10)) &&
                0 < e &&
                this.collection.forEach(function (t) {
                  "GitHub" == t.get("provider_title") && t.set("GitHub", !0),
                    e == t.id ? t.set("provider_active", !0) : t.set("provider_active", !1);
                }),
              n.templates.todo_connected(this.collection.toJSON()));
          t.html(i),
            (0 == this.collection.length
              ? (v(this.$el).find(".empty").css("display", "block"), t)
              : t.css("display", "block").find(".empty")
            ).hide();
        },
        populateAvailableProviders: function () {
          var t = v(this.$el.find("#available-providers")[0]),
            e = this.collection.lastResponse.available_providers || [],
            e =
              (e.forEach(function (t) {
                "GitHub" == t.provider_title && (t.GitHub = !0);
              }),
              n.templates.todo_available(e));
          t.html(e),
            this.collection.lastResponse.available_providers
              ? this.collection.lastResponse.available_providers &&
                0 < this.collection.lastResponse.available_providers.length &&
                (v(this.$el).find(".all-connected").hide(), v(this.$el).find("#available-providers").css("display", "block"))
              : (v(this.$el).find(".all-connected").css("display", "block"), v(this.$el).find("#available-providers").hide());
        },
        toggleAddIntegration: function () {
          var t = f.widgetManager.getWidget("todo"),
            t = (t && t.manager && t.manager.fetchTodoProviders(), this.$todo.scrollTop());
          this.$addIntegration.mToggle("inline-block"),
            this.$addProviderContainer.mToggle("block"),
            this.$todo.scrollTop(t),
            this.$addProviderContainer.is(":visible") &&
              ((t = v(".settings-view-container"))[0].scrollTo({ top: t[0].scrollHeight, behavior: "smooth" }),
              this.analytics.capture("integrations list show", { is_paid_event: !1 }));
        },
        listIndex: function (t) {
          return this.$(".draggable-todo-list").index(t);
        },
        dragover: function (t) {
          return t.preventDefault(), t.stopPropagation(), !(t.originalEvent.dataTransfer.dropEffect = "move");
        },
        dragend: function (t) {
          (t.originalEvent.dataTransfer.dropEffect = "move"),
            t.preventDefault(),
            t.stopPropagation(),
            this.dragging.css("display", "list-item"),
            this.$placeholder.hide();
          var t = this.momoCustomLists.findWhere({ csid: this.dragging.data("id") }),
            t =
              (this.analytics.capture("list reorder", {
                is_paid_event: t.isCustom(),
                list: t.formattedTodoListName(),
                provider: "momentum"
              }),
              {
                operations: [
                  {
                    REORDER: {
                      move_id: t.get("id"),
                      move_target_id: this.momoCustomLists.findWhere({ csid: this.move_target_id }).get("id"),
                      move_offset: this.move_offset
                    }
                  }
                ]
              }),
            e = this;
          return (
            v
              .ajax({
                type: "PATCH",
                contentType: "application/json",
                data: JSON.stringify(t),
                url: f.globals.urlRoot + "settings/todo/providers/1/lists"
              })
              .done(function () {
                e.momoCustomLists.fetch({ reset: !0, skipLocalFetch: !0 });
              })
              .fail(function () {
                e.momoCustomLists.fetch({ reset: !0, skipLocalFetch: !0 });
              }),
            !1
          );
        },
        dragstart: function (t) {
          if (this.momoCustomLists.offlineOnly) return !1;
          var e = v(t.delegatedTarget);
          (t.originalEvent.dataTransfer.effectAllowed = "move"), t.originalEvent.dataTransfer.setData("text", "dummy"), (this.dragging = e);
        },
        drop: function (t) {
          t.preventDefault();
        },
        dragenter: function (t) {
          var t = v(t.delegatedTarget),
            e =
              (this.dragging.hide(),
              this.listIndex(this.$placeholder) < this.listIndex(t) && 0 != this.listIndex(t)
                ? (t.after(this.$placeholder), (this.move_target_id = t.data("id")), (this.move_offset = 1))
                : (t.before(this.$placeholder), (this.move_target_id = t.data("id")), (this.move_offset = -1)),
              this.$placeholder);
          this.$placeholder.css("display", "list-item"), e.height(t.height()), e.after(this.dragging);
        }
      })),
      n.dependencies.settings);
  return (
    (n.views.TodoListColorPicker = Backbone.View.extend({
      tagName: "ul",
      attributes: { class: "color-palette-wrapper" },
      template: e.templates["color-picker"],
      events: {
        "click .swatch-container": "handleClick",
        "dblclick .swatch-container": "ignoreDblClick",
        "mouseenter .swatch-container": "handleMouseEnter",
        "mouseleave .swatch-container": "handleMouseLeave"
      },
      active: !1,
      initialize: function (t, e, i, n) {
        (this.transparent = "rgba(0,0,0,0)"),
          e ? (this.listColor = this.normalizeColor(e)) : ((this.listColor = this.transparent), (this.nullColor = !0)),
          (this.listId = t),
          (this.parent = i),
          (this.options = n),
          this.render(),
          this.listenTo(f, "globalEvent:click", this.globalClick);
      },
      globalClick: function (t) {
        !v.contains(this.$el[0], t.target) && this.$picker && this.$picker.is(":visible") && this.togglePicker();
      },
      render: function () {
        return (
          this.$el.html(this.template()),
          this.delegateEvents(),
          (this.$swatch = this.$el.find(".swatch").first()),
          (!this.nullColor && this.listColor != this.transparent) || this.$swatch.addClass("null-color"),
          this.$swatch.css({ backgroundColor: this.listColor }),
          this.picker && ((this.$picker = this.picker.render().$el), this.$el.append(this.$picker)),
          this
        );
      },
      dismiss: function () {
        this.$picker && this.$picker.hide();
      },
      toRgbA: function (t) {
        return (
          "rgba(" + Math.round(255 * t.rgb.r) + "," + Math.round(255 * t.rgb.g) + "," + Math.round(255 * t.rgb.b) + "," + t.alpha + ")"
        );
      },
      handleMouseEnter: function () {
        var t = this.$swatch;
        this.normalizeColor(t.css("background-color")) == this.transparent && t.addClass("no-color");
      },
      handleMouseLeave: function () {
        var t = this.$swatch;
        this.normalizeColor(t.css("background-color")) != this.transparent || this.keepTransOn || t.removeClass("no-color");
      },
      ignoreDblClick: function (t) {
        t.stopPropagation();
      },
      handleClick: function () {
        var i = this;
        setTimeout(function () {
          var t, e;
          i.picker
            ? i.togglePicker()
            : ((t = {
                color: i.listColor,
                renderCallback: function (t) {
                  var e;
                  t &&
                    ((t = t.colors),
                    (e = i.normalizeColor(i.toRgbA(t))),
                    i.$swatch.css({ backgroundColor: e, color: 0.22 < t.RGBLuminance ? "#222" : "#ddd" }),
                    e == i.transparent
                      ? (i.$swatch.addClass("null-color"), i.$swatch.addClass("no-color"), (i.keepTransOn = !0))
                      : (i.$swatch.removeClass("no-color"), i.$swatch.removeClass("null-color"), (i.keepTransOn = !1)),
                    i.parent.setListColor(i.listId, t, e),
                    setTimeout(function () {
                      i.togglePicker();
                    }, 10));
                }
              }),
              (e = i.listColor || i.transparent) && (t.color = e),
              (i.picker = new n.views.TodoListColorPalette(t)),
              (i.$picker = i.picker.render().$el),
              i.$picker.addClass("todo-color-picker"),
              i.$el.append(i.$picker),
              setTimeout(function () {
                i.togglePicker();
              }, 10));
        }, 0);
      },
      togglePicker: function () {
        var t, e;
        this.$picker &&
          ((t = this.$swatch),
          (e = this).$picker.is(":visible")
            ? (this.$el.removeClass("active"),
              this.normalizeColor(t.css("background-color")) == this.transparent && t.removeClass("no-color"),
              (this.keepTransOn = !1))
            : (this.$el.addClass("active"),
              setTimeout(function () {
                var t = e.$el.closest(".settings-todo");
                t.offset() &&
                  e.$picker.offset().top - t.offset().top < 0 &&
                  t.animate({ scrollTop: t[0].scrollTop + e.$picker.offset().top - t.offset().top - 12 });
              }, 10),
              this.picker.preRender(!0),
              this.normalizeColor(t.css("background-color")) == this.transparent && (t.addClass("no-color"), (this.keepTransOn = !0))));
      },
      normalizeColor: function (t) {
        return t.replace(/ /g, "").toLocaleLowerCase();
      },
      close: function () {
        this.dismiss();
      }
    })),
    f.commandManager &&
      f.commandManager.registerCommand("settings.panels.todo", function () {
        return n.styleLoaded || ((n.styleLoaded = !0), n.styles.style()), new n.views.Main();
      }),
    n
  );
};
m.addinManager && m.addinManager.registerAddinFn("270aaed6-337f-433f-9d02-a471b435eada", fn_addin);
