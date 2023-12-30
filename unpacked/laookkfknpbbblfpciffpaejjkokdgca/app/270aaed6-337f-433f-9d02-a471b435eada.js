var fn_addin = function (b, k, t) {
  var s = s || {};
  (s.styles = s.styles || {}),
    (s.commands = s.commands || {}),
    (s.dependencies = t || s.dependencies || {}),
    (s.styles.style = function () {}),
    (s.views = s.views || {}),
    (s.collect = s.collect || {}),
    (s.models = s.models || {}),
    (s.templates = s.templates || {}),
    (s.info = {
      addin: "270aaed6-337f-433f-9d02-a471b435eada",
      id: "settings_todo",
      dependencies: ["settings"],
      commands: ["settings.panels.todo"]
    }),
    b.console.log(b.elapsed() + ": " + s.info.id + " started"),
    (s.templates = s.templates || {}),
    (s.templates.main = Handlebars.template({
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
    (s.templates["todo-color-palette"] = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, i, n, s) {
        return '<li style="background: #d42022"></li>\x3c!--\n--\x3e<li style="background: #f05a0f"></li>\x3c!--\n--\x3e<li style="background: #ffaa00"></li>\x3c!--\n--\x3e<li style="background: #eae60b"></li>\x3c!--\n--\x3e<li style="background: #9fea0a"></li>\x3c!--\n--\x3e<li style="background: #40dc19"></li>\x3c!--\n--\x3e<li style="background: #05eba6"></li>\x3c!--\n--\x3e<li style="background: #17ccde"></li>\x3c!--\n--\x3e<li style="background: #14a7eb"></li>\x3c!--\n--\x3e<li style="background: #336be8"></li>\x3c!--\n--\x3e<li style="background: #5d56da"></li>\x3c!--\n--\x3e<li style="background: #990099"></li>\x3c!--\n--\x3e<li style="background: #c30f62"></li>\x3c!--\n--\x3e<li style="background: #e377c2"></li>\x3c!--\n--\x3e<li style="background: #e6e6e6"></li>\x3c!--\n--\x3e<li class="no-color"></li>\n';
      },
      useData: !0
    })),
    (s.templates.todo_available = Handlebars.template({
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
        var o;
        return (
          '<ul class="settings-list provider-list add-provider">\n' +
          (null !=
          (o = (
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
            ? o
            : "") +
          "</ul>\n"
        );
      },
      useData: !0
    })),
    (s.templates.todo_connected = Handlebars.template({
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
        var o;
        return (
          '<ul class="settings-list provider-list connected-providers">\n' +
          (null !=
          (o = (
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
            ? o
            : "") +
          "</ul>\n"
        );
      },
      useData: !0
    })),
    (s.templates.todo_lists = Handlebars.template({
      1: function (t, e, i, n, s) {
        var o,
          a =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return null !=
          (o = a(i, "unless").call(null != e ? e : t.nullContext || {}, null != e ? a(e, "deleted") : e, {
            name: "unless",
            hash: {},
            fn: t.program(2, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 3, column: 1 }, end: { line: 45, column: 12 } }
          }))
          ? o
          : "";
      },
      2: function (t, e, i, n, s) {
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
          '\t<li data-id="' +
          d(
            typeof (a = null != (a = p(i, "csid") || (null != e ? p(e, "csid") : e)) ? a : r) == c
              ? a.call(l, { name: "csid", hash: {}, data: s, loc: { start: { line: 4, column: 14 }, end: { line: 4, column: 22 } } })
              : a
          ) +
          '" class="settings-todo-list draggable-todo-list" draggable="true">\n\t\t<span class="settings-todo-list-color"></span>\n\n\t\t<span class="settings-todo-list-name">' +
          d(
            typeof (a = null != (a = p(i, "title") || (null != e ? p(e, "title") : e)) ? a : r) == c
              ? a.call(l, { name: "title", hash: {}, data: s, loc: { start: { line: 7, column: 40 }, end: { line: 7, column: 49 } } })
              : a
          ) +
          '</span>\n\t\t\x3c!-- <span class="settings-list-status">\n\t\t\t<i class="loading-icon"></i>\n\t\t</span> --\x3e\n\t\t<span class="settings-list-right">\n' +
          (null !=
          (o = p(i, "if").call(l, null != e ? p(e, "stock") : e, {
            name: "if",
            hash: {},
            fn: t.program(3, s, 0),
            inverse: t.program(5, s, 0),
            data: s,
            loc: { start: { line: 12, column: 3 }, end: { line: 42, column: 10 } }
          }))
            ? o
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
          a,
          l = null != e ? e : t.nullContext || {},
          r =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<ul class="settings-list options-list settings-todo-lists">\n' +
          (null !=
          (o = r(i, "each").call(l, e, {
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
            "function" == typeof (a = null != (a = r(i, "iconCancel") || (null != e ? r(e, "iconCancel") : e)) ? a : t.hooks.helperMissing)
              ? a.call(l, { name: "iconCancel", hash: {}, data: s, loc: { start: { line: 52, column: 4 }, end: { line: 52, column: 22 } } })
              : a)
            ? o
            : "") +
          '</span>\n\t\t</span>\n\t\t<span class="settings-list-status">\n\t\t\t<i class="loading-icon"></i>\n\t\t</span>\n\t\t<button class="button toggle-form toggle-add-list show" data-test="settings-todo-add-list"><i class="icon icon-plus"></i>Add List</button>\n\t</li>\n</ul>\n'
        );
      },
      useData: !0
    })),
    (s.styles = s.styles || {}),
    (s.styles.style = function () {
      var t = document.createElement("style");
      (t.type = "text/css"),
        (t.innerHTML =
          ".settings-todo-lists-container{margin-bottom:35px}.settings-todo .settings-todo-lists li{display:flex}.settings-todo-lists{margin-bottom:0}.settings-todo-lists li{padding:var(--list-v-padding) 0;position:relative}.settings-todo-lists li:nth-last-child(2){border-bottom:1px solid var(--border-color)}.settings-todo-lists li.loading{margin:0;display:block}.settings-todo-list-color{margin:calc(var(--list-v-padding) * -1) 0;display:inline-flex;align-items:center;cursor:pointer}.settings-todo-list-color .swatch-container{margin:0;padding:10px;padding-left:var(--list-h-padding)}.settings-todo-list-color .swatch-container .swatch{--size:13px;height:var(--size);width:var(--size);box-shadow:none}.settings-todo-list-color .swatch-container:hover .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.7),inset 0 0 4px 1px rgba(255,255,255,.3)}.settings-todo-list-color .active .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5),inset 0 0 4px 1px rgba(255,255,255,.3)!important}.settings-todo-list-color .swatch-container .swatch.no-color,.settings-todo-list-color .swatch-container .swatch.null-color{--box-shadow-color:var(--color-stop-3);background-image:url(/img/grid.png)!important;box-shadow:inset 0 0 0 1.5px var(--box-shadow-color)}.settings-todo-list-color .swatch-container:hover .swatch.no-color,.settings-todo-list-color .swatch-container:hover .swatch.null-color{--box-shadow-color:var(--color-stop-4);background-image:url(/img/grid.png)!important;box-shadow:inset 0 0 0 1.5px var(--box-shadow-color)}.settings-todo-list-color.none .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3)}.settings-todo-list:hover .none .swatch{opacity:.7}.none .settings-todo-list-color .swatch-container:hover .swatch{opacity:1}.color-palette-wrapper{position:relative}.swatch-color-picker{width:215px;padding:10px 10px 5px;position:absolute;bottom:35px;left:-8px;z-index:100;display:none;background:#282828;border-radius:4px;line-height:1px}.swatch-color-picker.nipple-bottom-left:after{left:13px;border-top-color:#282828!important}.active .swatch-color-picker{display:block}.swatch-color-picker li{height:20px;width:20px;margin:0 5px 5px 0;padding:0;display:inline-block!important;border:none!important;border-radius:4px;cursor:pointer}.swatch-color-picker li:nth-child(8n){margin-right:0;border:none}.swatch-color-picker li:hover{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.75),inset 0 0 8px 1px rgba(255,255,255,.6)}.swatch-color-picker .active{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.9)!important}.swatch-color-picker .no-color{background-image:url(/img/grid.png);box-shadow:inset 0 0 0 2px rgba(255,255,255,.3)}.swatch-color-picker .check{position:absolute;top:5px;left:5px;display:none;fill:#fff}.settings-todo-list-name{flex-grow:1;opacity:.9;cursor:default;outline:0;overflow:hidden}.settings-todo-list-name.editing{opacity:.6;cursor:auto;outline:0}.settings-todo-list.failed .rename-list-failed{display:inline-block}.loading .settings-list-status{display:block;opacity:1}.settings-list-right{display:flex;align-items:center}.loading .settings-list-right{display:none}.settings-list-right .delete{padding:4px}.settings-list-right .todo-delete-list,.settings-list-right .todo-delete-list .icon-trash{display:inline-flex}.settings-list-right .todo-delete-list .icon-trash>svg{height:12px;fill:var(--color-icon)}.settings-list-right .delete-2{display:none}.settings-list-right .error-icon{height:14px;width:14px;display:none;border-radius:100%;text-align:center}.settings-list-right .delete-failed-1{margin-right:5px;display:none}.settings-todo-list.failed .settings-list-right,.settings-todo-list.failed-delete .settings-list-right,.settings-todo-lists li:hover .settings-list-right{opacity:1}.settings-list-right .delete-group.failed .delete-failed-2{display:inline-block}.settings-list-right .action{margin:-9px 0;padding:9px 5px;opacity:.6;cursor:pointer;font-weight:500}.settings-list-right .action:hover{opacity:1}.settings-list-right .action:active{opacity:.8}.settings-list-right .default{margin-right:5px}.settings-todo-lists .settings-todo-add-list{padding:0;position:relative;border-bottom:none!important;border-top:none}.settings-todo-lists .toggle-add-list{display:none}.settings-todo-lists .toggle-add-list.show{display:inline}.settings-todo-lists .settings-todo-add-list-input{margin-bottom:4px!important;padding:var(--list-v-padding) 20px var(--list-v-padding) var(--list-h-padding);display:none;opacity:.75;border:0}.settings-todo-add-list.loading .settings-todo-add-list-input{opacity:.5}.settings-todo-add-list .error-icon{height:14px;width:14px;position:absolute;top:9px;right:19px;display:none;border-radius:100%;text-align:center}.settings-todo-add-list.failed .error-icon{display:inline-block}.settings-todo-add-list .settings-cancel{margin:3px -6px 0 0;display:none}.loading .settings-cancel.show{display:none}.settings-todo-add-list.loading .settings-list-status{margin-top:9px}"),
        document.getElementsByTagName("head")[0].appendChild(t);
    }),
    (s.commands.ToggleKeepTodoState = b.models.Command.extend({
      defaults: { id: "todo.toggle.keepstate" },
      execute: function () {
        b.models.customization.toggle("keepTodoState"),
          b.Analytics.capture("stay open toggle", { feature: "todo", new_value: b.models.customization.get("keepTodoState") }),
          b.models.customization.get("keepTodoState") || (localStorage.showTodoList = !1);
      }
    })),
    (s.views.TodoListColorPalette = Backbone.View.extend({
      tagName: "ul",
      attributes: { class: "nipple nipple-bottom-left swatch-color-picker" },
      template: s.templates["todo-color-palette"],
      active: !1,
      events: { "click li": "handleClick" },
      initialize: function (t) {
        (this.color = t.color.toLowerCase().replace(/ /g, "")), (this.callback = t.renderCallback);
      },
      render: function () {
        return this.$el.html(this.template()), this.preRender(), this;
      },
      selectColor: function (t) {
        this.$el.find("li").removeClass("active"), this.$el.find("svg").hide(), t.addClass("active"), t.find("svg").css("display", "block");
      },
      handleClick: function (t) {
        t.stopPropagation(),
          b.conditionalFeatures.featureEnabled("plus")
            ? (this.selectColor(k(t.target)),
              k(t.target).hasClass("no-color") ? (this.color = "rgba(0,0,0,0)") : (this.color = k(t.target).css("background-color")),
              this.callback(new Colors({ color: this.color })))
            : b.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "settings" });
      },
      preRender: function () {
        var n = this;
        this.$el.find("li").each(function (t, e) {
          var i = k(e);
          i.html(
            '<svg class="check" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="10px" height="10px"><defs><filter id="f4" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" /><feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" /><feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter></defs> <path class="path" d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" /></svg>'
          ),
            i.hasClass("active") && i.find("svg").css("display", "block"),
            0 == n.color.indexOf("rgba") &&
              "1" == n.color.charAt(n.color.length - 2) &&
              (n.color = "rgb(" + n.color.substring(5, n.color.length - 3) + ")"),
            k(e).css("background-color").replace(/ /g, "") == n.color && n.selectColor(i);
        });
      }
    }));
  var i = s.dependencies.settings;
  s.views.Main = i.views.SettingsPanel.extend({
    attributes: { id: "settings-todo", class: "settings-view settings-todo", "data-test": "settings-todo" },
    template: s.templates.main,
    panelid: "todo",
    panelTitle: "Todo Settings",
    analytics: new b.Analytics({ feature: "todo", is_paid_event: !0 }),
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
      b.widgetManager.getWidgetAsync("todo").then(function (t) {
        (e.todos = t) && !t.manager && t.doFirstFetch(),
          (e.collection = new b.collect.Settings()),
          (e.collection.url = b.globals.urlRoot + "settings/todo"),
          (e.collection.parse = function (t) {
            return (e.collection.lastResponse = t).connected_providers;
          }),
          e.listenTo(e.collection, "reset", e.collectionReset),
          e.listenTo(b, "todo:providerChanged", e.providerChanged),
          e.listenTo(b.models.customization, "change", e.customizationChanged),
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
      var e = { suggestIntegrationLink: b.utils.mConst("suggestIntegrationLink"), isTouchDevice: b.utils.isTouchDevice() },
        i = this;
      return (
        this.$el.html(this.template(e)),
        b.conditionalFeatures.featureEnabled("integrationsDisabled") && this.$el.find(".integrations").hide(),
        (this.$connect = k(this.$el.find(".settings-connect")[0])),
        (this.$todo = k(this.$el.find(".settings-view-wrapper")[0])),
        (this.$addIntegration = this.$(".add-integration")),
        (this.$addProviderContainer = this.$(".section-add-provider")),
        this.setControlStates(),
        (this.$placeholder = k("<li></li>").addClass("placeholder")),
        this.$placeholder.appendTo(this.$el),
        this.$placeholder.hide(),
        (this.intervalId = setInterval(
          function (e) {
            b.widgetManager.getWidgetAsync("todo").then(function (t) {
              try {
                (e.momoProvider = t.manager.todoProviderDetails("1", !0)), e.momoProvider && clearInterval(e.intervalId);
              } catch (t) {
                clearInterval(e.intervalId), k(e.$el.find("#custom-lists")[0]).html("");
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
              k(".settings-todo").animate({ scrollTop: k("#todo-settings-integrations").position().top });
            }, 100));
        }, 50),
        this
      );
    },
    populateCustomLists: function () {
      this.$customLists = k(this.$el.find("#custom-lists")[0]);
      var t = [],
        e = [];
      this.momoCustomLists && ((t = this.momoCustomLists.toJSON()), (e = this.momoCustomLists.where({ deleted: !1 })));
      try {
        t = t.sort(function (t, e) {
          return t.order - e.order;
        });
      } catch (t) {}
      var i = s.templates.todo_lists(t);
      this.$customLists.html(i),
        this.momoCustomLists && this.$(".draggable-todo-list").attr("draggable", this.momoCustomLists.allowReorder),
        (this.$addListInput = this.$(".settings-todo-add-list-input"));
      var n = this;
      e.map(function (t) {
        var e = new s.views.TodoListColorPicker(t.get("csid"), t.getColor(), n);
        n.$customLists
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
        this.analytics.capture("list set color", { list: n.isCustom() ? "custom" : n.get("title").toLowerCase(), provider: "momentum" }),
        n.save(
          { color: i },
          {
            patch: !1,
            success: function () {
              s.removeClass("loading"),
                s.find(".settings-list-status").removeClass("loading"),
                b.trigger("globalEvent:resetLists", { listId: t });
            },
            error: function () {
              s.find(".settings-list-status").removeClass("loading"), s.removeClass("loading").addClass("failed");
            }
          }
        );
    },
    handleClickRenameList: function (t) {
      b.conditionalFeatures.featureEnabled("plus")
        ? ((this.clickedListId = this.getClickedListId(t)),
          this.momoCustomLists.findWhere({ csid: this.clickedListId }).get("stock") ||
            ((this.$clickedListLi = this.$customLists.find('[data-id="' + this.clickedListId + '"]')),
            (this.$clickedListName = this.$clickedListLi.find(".settings-todo-list-name")),
            this.$clickedListName.attr("contenteditable", !0).addClass("editing").trigger("focus"),
            b.utils.setEndOfContentEditable(this.$clickedListName.get(0)),
            (this.clickedListNameText = this.$clickedListName.text())))
        : b.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "settings" });
    },
    getClickedListId: function (t) {
      return k(t.delegatedTarget).closest("li").data("id");
    },
    handleClickDelete: function (t) {
      t.stopPropagation();
      var e = this.getClickedListId(t);
      this.deleteList(e);
    },
    handleClickDeleteYes: function (t) {
      t.stopPropagation();
      var e = this.getClickedListId(t),
        i = this.$customLists.find('[data-id="' + e + '"]');
      if ((i.find(".delete-1").hide(), this.momoCustomLists.offlineOnly)) return t.stopPropagation(), void this.deleteList(e);
      i.find(".delete-2").css("display", "inline");
    },
    handleClickDeleteTodos: function (t) {
      t.stopPropagation();
      var e = this.getClickedListId(t);
      this.deleteList(e);
    },
    handleClickMoveTodos: function (t) {
      t.stopPropagation();
      var e = this.getClickedListId(t);
      this.deleteList(e);
    },
    handleClickDeleteCancel: function (t) {
      var e = this.getClickedListId(t),
        i = this.$customLists.find('[data-id="' + e + '"]');
      i.find(".action-group").css("display", "inline"),
        i.find(".delete-1").css("display", "inline"),
        i.find(".delete-2").hide(),
        i.find(".delete-group").hide();
    },
    deleteList: function (t) {
      var e = this.$customLists.find('[data-id="' + t + '"]'),
        i = e.find(".delete-group");
      if (!i.hasClass("loading")) {
        i.removeClass("failed").addClass("loading");
        var n = this.momoCustomLists.findWhere({ csid: t });
        this.momoCustomLists.selectedListId === n.id && this.momoCustomLists.switchToDefaultList();
        var s = { wait: !0, serverSuccess: o };
        this.momoCustomLists.offlineOnly && (s.success = o),
          n.save({ deleted: !0 }, s),
          this.analytics.capture("custom list delete", { provider: "momentum" });
      }
      function o() {
        i.removeClass("loading"), e.remove(), b.trigger("globalEvent:refreshInbox");
      }
    },
    toggleDeleteConf: function (t) {
      t.stopPropagation();
      var e = this,
        i = this.getClickedListId(t),
        n = this.$customLists.find('[data-id="' + i + '"]'),
        s = n.find(".action-group");
      s.is(":visible")
        ? this.checkTodoCount(
            i,
            function (t) {
              e.deleteOrConfirm(i, t);
            },
            function () {
              e.todoCountCheckFailed(i);
            }
          )
        : (n.find(".delete-yes").removeClass("loading failed"), n.find(".delete-group").hide(), s.css("display", "inline"));
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
      var e = this.$customLists.find('[data-id="' + t + '"]');
      e.find(".todo-delete-list").hide(), e.find(".delete-failed-1").css({ display: "inline-block" }), e.addClass("failed-delete");
    },
    setDelete2Msg: function (t) {
      var e = "List has " + t;
      return (e += 1 < t ? " todos." : " todo.");
    },
    checkTodoCount: function (t, n, e) {
      var i = this.momoCustomLists.findWhere({ csid: t });
      if (this.momoCustomLists.offlineOnly)
        return i.itemCollection.fetch({ silent: !0, ignoreRender: !0 }), void n(i.itemCollection.where({ deleted: !1 }).length);
      var s = b.globals.urlRootApi + "todos?listid=" + i.get("id");
      k.ajax({ type: "GET", contentType: "application/json", url: s })
        .done(function (t) {
          var e = null,
            i = t.items || t;
          (e = i.length),
            i.forEach(function (t) {
              t.today && e--;
            }),
            n(e);
        })
        .fail(function () {
          e();
        });
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
      b.conditionalFeatures.featureEnabled("plus")
        ? (this.$(".toggle-add-list").toggleClass("show"),
          (this.$addListLi = this.$(".settings-todo-add-list")),
          (this.$addListInput = this.$(".settings-todo-add-list-input")),
          this.$addListInput.mToggle("inline-block"),
          this.$addListInput.is(":visible") && this.$addListInput.trigger("focus"))
        : b.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "settings" });
    },
    processAddListForm: function () {
      var t = b.utils.capitalizeFirstLetter(this.$addListInput.val().trim()),
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
      var t = this;
      if (!this.$clickedListLi.hasClass("loading")) {
        var e = this.$clickedListName.text().trim();
        if (e)
          this.$clickedListLi.find(".settings-list-status").addClass("loading"),
            this.$clickedListLi.removeClass("failed").addClass("loading"),
            this.$clickedListName.trigger("blur"),
            this.momoCustomLists.findWhere({ csid: this.clickedListId }).save(
              { title: e },
              {
                patch: !1,
                success: function () {
                  t.$clickedListLi.removeClass("loading"),
                    t.$clickedListLi.find(".settings-list-status").removeClass("loading"),
                    t.$clickedListName.text(e).attr("contenteditable", !1).removeClass("editing"),
                    b.trigger("globalEvent:resetLists", { listId: t.clickedListId });
                },
                error: function () {
                  t.$clickedListLi.find(".settings-list-status").removeClass("loading"),
                    t.$clickedListLi.removeClass("loading").addClass("failed");
                }
              }
            );
        else this.$clickedListName.text(this.clickedListNameText);
      }
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
      if (t) {
        var e = t.changedAttributes();
        (e.hasOwnProperty("autoFocus") || e.hasOwnProperty("keepTodoState")) && this.setControlStates();
      }
    },
    collectionReset: function () {
      this.populateConnectedProviders(), this.populateAvailableProviders();
    },
    refreshData: function () {
      this.collection.fetch({ reset: !0 });
    },
    initiateConnectProvider: function (t) {
      if (
        (t && t.preventDefault(),
        (this.connect_provider_id = parseInt(k(t.delegatedTarget).data("provider-id"))),
        b.conditionalFeatures.featureEnabled("plus"))
      ) {
        var e = _.findWhere(this.collection.lastResponse.available_providers, { id: this.connect_provider_id });
        (this.connect_provider_title = e.provider_title),
          e.active &&
            (this.$connect.html(i.templates.connect(e)),
            this.$todo.hide(),
            this.$connect.css("display", "flex"),
            this.analytics.capture("integrations detail click", { provider: this.connect_provider_title.toLowerCase() }));
      } else b.cmd("modal.open", "UPSELL_TODO_INTEGRATIONS", { eventSource: "settings" });
    },
    setProviderActive: function (t) {
      t && (t.stopPropagation(), t.preventDefault());
      var e = parseInt(k(t.delegatedTarget).closest(".has-provider-id").data("provider-id")),
        i = b.widgetManager.getWidget("todo"),
        n = "";
      this.collection.forEach(function (t) {
        e == t.id && (n = t.get("provider_title"));
      }),
        e && i && i.manager && i.manager.changeProviderAsync(e),
        this.analytics.capture("provider set active", { location: "settings", provider: n.toLowerCase() });
    },
    disconnectProvider: function (t) {
      var n = this;
      t && (t.stopPropagation(), t.preventDefault());
      var s = parseInt(k(t.delegatedTarget).closest(".has-provider-id").data("provider-id")),
        o = "";
      this.collection.forEach(function (t) {
        s == t.id && (o = t.get("provider_title"));
      });
      var e = b.globals.urlRootApi + "settings/todo/providers/" + s;
      k.ajax({ type: "DELETE", contentType: "application/json", url: e })
        .done(function (t) {
          if (t.status && "success" == t.status) {
            var e = localStorage.activeTodoProvider.replace(/['"]+/g, "");
            if (localStorage.activeTodoProvider && (s.toString() == e || s.toString() == e.substring(0, e.indexOf("-"))))
              var i = b.widgetManager.getWidget("todo");
            i && i.manager && i.manager.changeProvider("1"),
              n.refreshData(),
              n.analytics.capture("integration disconnect", { provider: o.toLowerCase() });
          }
        })
        .fail(function () {});
    },
    launchConfiguration: function (t) {
      t && (t.stopPropagation(), t.preventDefault());
      var e = parseInt(k(t.delegatedTarget).closest(".has-provider-id").data("provider-id"));
      if (e) {
        var i = this.collection.get(e);
        if (i) {
          var n = i.get("config_command");
          n && b.commandManager.execute(n);
        }
      }
    },
    toggleRememberOpenState: function (t) {
      t && (t.stopPropagation(), t.preventDefault()), b.commandManager.execute("todo.toggle.keepstate");
    },
    toggleAutoFocus: function (t) {
      t && t.preventDefault(),
        b.conditionalFeatures.featureEnabled("plus")
          ? b.commandManager.execute("todo.toggle.autofocus", null, { sourceApp: "Settings", eventSource: "Settings" })
          : b.cmd("modal.open", "UPSELL_AUTOFOCUS", { eventSource: "settings" });
    },
    setControlStates: function () {
      this.$el
        .find("#auto-focus")
        .toggleClass("on", b.conditionalFeatures.featureEnabled("plus") && b.models.customization.get("autoFocus")),
        this.$el.find("#remember-open-state").toggleClass("on", b.models.customization.get("keepTodoState"));
    },
    connectTodoProvider: function (t) {
      t && (t.stopPropagation(), t.preventDefault()), k(this.$el.find("#connect-button")[0]).html("Connecting…");
      var m = this;
      this.authAttempts = 0;
      var e = this.connect_provider_id,
        f = this.connect_provider_title,
        i = b.globals.urlRootApi + "settings/todo/providers",
        v = { provider_id: e };
      k.ajax({ type: "PUT", contentType: "application/json", url: i, data: JSON.stringify(v) })
        .done(function (t) {
          if (t.status && "authRequired" === t.status) {
            if (t.authorizationUrl && m.authAttempts < 2) {
              m.authAttempts++;
              var e = t.winWidth ? t.winWidth : 600,
                i = t.winHeight ? t.winHeight : 510,
                n = t.windowFeatures ? t.windowFeatures : "titlebar,resizable,status",
                s = window.screen.width / 2 - e / 2,
                o = window.screen.height / 2 - i / 2,
                a = window.open(t.authorizationUrl, "MomentumAuthWindow", n + ",left=" + s + ",top=" + o + ",width=" + e + ",height=" + i);
              m.authWindow = a;
              function l() {
                a &&
                  !a.closed &&
                  setTimeout(function () {
                    a && !a.closed && a.close();
                  }, 1e3),
                  m.$connect.hide(),
                  m.$todo.css("display", "block"),
                  m.refreshData(),
                  b.trigger("todo:newProvider"),
                  t.change_provider &&
                    b.commandManager.execute("settings.todo.provider.change", null, {
                      provider_id: t.initial_load_provider || v.provider_id,
                      newProvider: !0
                    }),
                  t.config_command && b.commandManager.execute(t.config_command),
                  m.analytics.capture("integration connect", { provider: f.toLowerCase() });
              }
              var r = t.authorizationUrl.split("/"),
                c = "";
              1 < r.length && (c = r[r.length - 1]);
              var d = b.globals.urlRootApi + "user/auth/status/" + c,
                p = !1,
                u = 0,
                g = 1e3,
                h = function () {
                  (a && !a.closed) ||
                    k
                      .ajax({ type: "GET", contentType: "application/json", url: d })
                      .done(function (t) {
                        t && t.token_obtained
                          ? l()
                          : (m.analytics.capture("integration connect cancel", { provider: f.toLowerCase() }), (p = !0), m.cancelConnect());
                      })
                      .fail(function (t) {
                        m.analytics.capture("integration connect fail", {
                          provider: f.toLowerCase(),
                          error: (t && t.responseJSON && t.responseJSON.msg) || "no message"
                        }),
                          m.cancelConnect();
                      }),
                    100 < ++u ||
                      p ||
                      (u % 30 && (g += 1e3),
                      k
                        .ajax({ type: "GET", contentType: "application/json", url: d })
                        .done(function (t) {
                          t && t.token_obtained
                            ? l()
                            : setTimeout(function () {
                                h();
                              }, g);
                        })
                        .fail(function () {
                          setTimeout(function () {
                            h();
                          }, g);
                        }));
                };
              h();
            }
          } else t.status && "success" === t.status && (m.refreshData(), t.config_command && b.commandManager.execute(t.config_command));
        })
        .fail(function () {
          m.analytics.capture("integration connect fail", { provider: f.toLowerCase() }), m.cancelConnect();
        });
    },
    cancelConnect: function (t) {
      t && (t.stopPropagation(), t.preventDefault()),
        this.authWindow && !this.authWindow.closed && (this.authWindow.close(), (this.authWindow = null)),
        this.$connect.hide(),
        this.$todo.css("display", "block");
    },
    populateConnectedProviders: function () {
      var t = k(this.$el.find("#connected-providers")[0]),
        e = JSON.parse(localStorage.activeTodoProvider || 1);
      Number.isInteger(e) || (e = parseInt(e, 10)),
        e &&
          0 < e &&
          this.collection.forEach(function (t) {
            "GitHub" == t.get("provider_title") && t.set("GitHub", !0),
              e == t.id ? t.set("provider_active", !0) : t.set("provider_active", !1);
          });
      var i = s.templates.todo_connected(this.collection.toJSON());
      t.html(i),
        0 == this.collection.length
          ? (k(this.$el).find(".empty").css("display", "block"), t.hide())
          : t.css("display", "block").find(".empty").hide();
    },
    populateAvailableProviders: function () {
      var t = k(this.$el.find("#available-providers")[0]),
        e = this.collection.lastResponse.available_providers || [];
      e.forEach(function (t) {
        "GitHub" == t.provider_title && (t.GitHub = !0);
      });
      var i = s.templates.todo_available(e);
      t.html(i),
        this.collection.lastResponse.available_providers
          ? this.collection.lastResponse.available_providers &&
            0 < this.collection.lastResponse.available_providers.length &&
            (k(this.$el).find(".all-connected").hide(), k(this.$el).find("#available-providers").css("display", "block"))
          : (k(this.$el).find(".all-connected").css("display", "block"), k(this.$el).find("#available-providers").hide());
    },
    toggleAddIntegration: function () {
      var t = b.widgetManager.getWidget("todo");
      t && t.manager && t.manager.fetchTodoProviders();
      var e = this.$todo.scrollTop();
      if (
        (this.$addIntegration.mToggle("inline-block"),
        this.$addProviderContainer.mToggle("block"),
        this.$todo.scrollTop(e),
        this.$addProviderContainer.is(":visible"))
      ) {
        var i = k(".settings-view-container");
        i[0].scrollTo({ top: i[0].scrollHeight, behavior: "smooth" }),
          this.analytics.capture("integrations list show", { is_paid_event: !1 });
      }
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
      var e = this.momoCustomLists.findWhere({ csid: this.dragging.data("id") });
      this.analytics.capture("list reorder", { is_paid_event: e.isCustom(), list: e.formattedTodoListName(), provider: "momentum" });
      var i = {
          operations: [
            {
              REORDER: {
                move_id: e.get("id"),
                move_target_id: this.momoCustomLists.findWhere({ csid: this.move_target_id }).get("id"),
                move_offset: this.move_offset
              }
            }
          ]
        },
        n = this;
      return (
        k
          .ajax({
            type: "PATCH",
            contentType: "application/json",
            data: JSON.stringify(i),
            url: b.globals.urlRoot + "settings/todo/providers/1/lists"
          })
          .done(function () {
            n.momoCustomLists.fetch({ reset: !0, skipLocalFetch: !0 });
          })
          .fail(function () {
            n.momoCustomLists.fetch({ reset: !0, skipLocalFetch: !0 });
          }),
        !1
      );
    },
    dragstart: function (t) {
      if (this.momoCustomLists.offlineOnly) return !1;
      var e = k(t.delegatedTarget);
      (t.originalEvent.dataTransfer.effectAllowed = "move"), t.originalEvent.dataTransfer.setData("text", "dummy"), (this.dragging = e);
    },
    drop: function (t) {
      t.preventDefault();
    },
    dragenter: function (t) {
      var e = k(t.delegatedTarget);
      this.dragging.hide(),
        this.listIndex(this.$placeholder) < this.listIndex(e) && 0 != this.listIndex(e)
          ? (e.after(this.$placeholder), (this.move_target_id = e.data("id")), (this.move_offset = 1))
          : (e.before(this.$placeholder), (this.move_target_id = e.data("id")), (this.move_offset = -1));
      var i = this.$placeholder;
      this.$placeholder.css("display", "list-item"), i.height(e.height()), i.after(this.dragging);
    }
  });
  i = s.dependencies.settings;
  return (
    (s.views.TodoListColorPicker = Backbone.View.extend({
      tagName: "ul",
      attributes: { class: "color-palette-wrapper" },
      template: i.templates["color-picker"],
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
          this.listenTo(b, "globalEvent:click", this.globalClick);
      },
      globalClick: function (t) {
        !k.contains(this.$el[0], t.target) && this.$picker && this.$picker.is(":visible") && this.togglePicker();
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
        var n = this;
        setTimeout(function () {
          if (n.picker) n.togglePicker();
          else {
            var t = {
                color: n.listColor,
                renderCallback: function (t) {
                  if (t) {
                    var e = t.colors,
                      i = n.normalizeColor(n.toRgbA(e));
                    n.$swatch.css({ backgroundColor: i, color: 0.22 < e.RGBLuminance ? "#222" : "#ddd" }),
                      i == n.transparent
                        ? (n.$swatch.addClass("null-color"), n.$swatch.addClass("no-color"), (n.keepTransOn = !0))
                        : (n.$swatch.removeClass("no-color"), n.$swatch.removeClass("null-color"), (n.keepTransOn = !1)),
                      n.parent.setListColor(n.listId, e, i),
                      setTimeout(function () {
                        n.togglePicker();
                      }, 10);
                  }
                }
              },
              e = n.listColor ? n.listColor : n.transparent;
            e && (t.color = e),
              (n.picker = new s.views.TodoListColorPalette(t)),
              (n.$picker = n.picker.render().$el),
              n.$picker.addClass("todo-color-picker"),
              n.$el.append(n.$picker),
              setTimeout(function () {
                n.togglePicker();
              }, 10);
          }
        }, 0);
      },
      togglePicker: function () {
        if (this.$picker) {
          var t = this.$swatch,
            e = this;
          this.$picker.is(":visible")
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
              this.normalizeColor(t.css("background-color")) == this.transparent && (t.addClass("no-color"), (this.keepTransOn = !0)));
        }
      },
      normalizeColor: function (t) {
        return t.replace(/ /g, "").toLocaleLowerCase();
      },
      close: function () {
        this.dismiss();
      }
    })),
    b.commandManager &&
      b.commandManager.registerCommand("settings.panels.todo", function () {
        return s.styleLoaded || ((s.styleLoaded = !0), s.styles.style()), new s.views.Main();
      }),
    s
  );
};
m.addinManager && m.addinManager.registerAddinFn("270aaed6-337f-433f-9d02-a471b435eada", fn_addin);
