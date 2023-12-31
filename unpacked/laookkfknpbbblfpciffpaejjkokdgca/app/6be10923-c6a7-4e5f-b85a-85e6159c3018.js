var fn_addin = function (m, f, t) {
  var v = {};
  return (
    (v.styles = v.styles || {}),
    (v.commands = v.commands || {}),
    (v.dependencies = t || v.dependencies || {}),
    (v.styles.style = function () {}),
    (v.views = v.views || {}),
    (v.collect = v.collect || {}),
    (v.models = v.models || {}),
    (v.templates = v.templates || {}),
    (v.info = {
      widget: !0,
      placeholderType: "pane",
      label: "Todo",
      id: "todo",
      "data-test": "todo",
      width: "320",
      region: "bottom-right",
      order: "append",
      addin: "6be10923-c6a7-4e5f-b85a-85e6159c3018",
      visibleSetting: "todoVisible",
      openState: "showTodoList",
      keepOpenSetting: "keepTodoState",
      toggleEvent: "globalEvent:key:T",
      appClass: "todo-app calculates-own-max-height",
      storedHeight: "todo-pane-height",
      class: "todo",
      commands: ["settings.panels.todo"],
      hideEvents: ["globalEvent:toggle:bottom-right"]
    }),
    m.console.log(m.elapsed() + ": " + v.info.id + " started"),
    (v.templates = v.templates || {}),
    (v.templates.addtodolist = Handlebars.template({
      1: function (t, e, o, i, s) {
        return '<li>\n\t<span id="add-icon" class="todo-list-add-icon"><i class="icon icon-plus"></i></span>\n\t<input id="list-new" class="todo-input todo-list-add-input" type="text" placeholder="    New List"  autocomplete="off"/>\n\t<span class="loading todo-list-add-loading"><i class="loading-icon"></i> <span >Loading...</span></span>\n';
      },
      3: function (t, e, o, i, s) {
        return '\t<div id="list-new" class="upsell-row">\n\t\t<div class="copy">+ New List</div>\n\t\t<span class="badge badge-plus">Plus</span>\n\t</div>\n</li>\n';
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return null !=
          (o = n(o, "if").call(null != e ? e : t.nullContext || {}, null != e ? n(e, "isPlus") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.program(3, s, 0),
            data: s,
            loc: { start: { line: 1, column: 0 }, end: { line: 12, column: 7 } }
          }))
          ? o
          : "";
      },
      useData: !0
    })),
    (v.templates.dropdownmenu = Handlebars.template({
      1: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '\t<div class="icon-wrapper more-toggle" data-test="todo-item-dropdown-toggle">\n\t\t' +
          (null !=
          (o = (n(o, "iconEllipsis") || (e && n(e, "iconEllipsis")) || t.hooks.helperMissing).call(
            null != e ? e : t.nullContext || {},
            "more-icon",
            { name: "iconEllipsis", hash: {}, data: s, loc: { start: { line: 3, column: 2 }, end: { line: 3, column: 34 } } }
          ))
            ? o
            : "") +
          "\n\t</div>\n"
        );
      },
      3: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return null !=
          (o = n(o, "if").call(null != e ? e : t.nullContext || {}, null != e ? n(e, "providerLogo") : e, {
            name: "if",
            hash: {},
            fn: t.program(4, s, 0),
            inverse: t.program(1, s, 0),
            data: s,
            loc: { start: { line: 5, column: 0 }, end: { line: 11, column: 0 } }
          }))
          ? o
          : "";
      },
      4: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '\t<div class="project-chooser-toggle"><span class="icon-wrapper control control-dropdown"><img class="provider-icon" src="' +
          t.escapeExpression(
            "function" ==
              typeof (o = null != (o = n(o, "providerLogo") || (null != e ? n(e, "providerLogo") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "providerLogo",
                  hash: {},
                  data: s,
                  loc: { start: { line: 6, column: 121 }, end: { line: 6, column: 137 } }
                })
              : o
          ) +
          '"><svg class="todo-menu-dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32"><path d="M16,17H2a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2Z"/><path d="M16,10H2A1,1,0,0,1,2,8H16a1,1,0,0,1,0,2Z"/><path d="M16,24H2a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2Z"/><path d="M28.5,19.12a.87.87,0,0,1-.62-.26l-4.5-4.5a.88.88,0,0,1,1.24-1.24L28.5,17l3.88-3.88a.88.88,0,0,1,1.24,1.24l-4.5,4.5A.87.87,0,0,1,28.5,19.12Z"/></svg></span></div>\n'
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, o, i, s) {
        var n,
          d = null != e ? e : t.nullContext || {},
          a =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          (null !=
          (n = a(o, "if").call(d, null != e ? a(e, "iClassName") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.program(3, s, 0),
            data: s,
            loc: { start: { line: 1, column: 0 }, end: { line: 11, column: 7 } }
          }))
            ? n
            : "") +
          '<div class="dropdown ' +
          t.escapeExpression(
            "function" ==
              typeof (n =
                null != (n = a(o, "dropdownClassName") || (null != e ? a(e, "dropdownClassName") : e)) ? n : t.hooks.helperMissing)
              ? n.call(d, {
                  name: "dropdownClassName",
                  hash: {},
                  data: s,
                  loc: { start: { line: 12, column: 21 }, end: { line: 12, column: 42 } }
                })
              : n
          ) +
          '">\n\t<ul class="dropdown-list"></ul>\n\t<ul class="dropdown-list dropdown-detail"></ul>\n</div>\n'
        );
      },
      useData: !0
    })),
    (v.templates["todo-list-empty-state"] = Handlebars.template({
      1: function (t, e, o, i, s) {
        var n,
          d = null != e ? e : t.nullContext || {},
          a = t.hooks.helperMissing,
          r = "function",
          l = t.escapeExpression;
        return (
          '\t\t<div class="description empty-link" data-target-list-id="' +
          l(
            typeof (n =
              null !=
              (n =
                (t =
                  t.lookupProperty ||
                  function (t, e) {
                    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                  })(o, "targetListId") || (null != e ? t(e, "targetListId") : e))
                ? n
                : a) == r
              ? n.call(d, {
                  name: "targetListId",
                  hash: {},
                  data: s,
                  loc: { start: { line: 4, column: 59 }, end: { line: 4, column: 75 } }
                })
              : n
          ) +
          '" data-use-command="' +
          l(
            typeof (n = null != (n = t(o, "use_command") || (null != e ? t(e, "use_command") : e)) ? n : a) == r
              ? n.call(d, {
                  name: "use_command",
                  hash: {},
                  data: s,
                  loc: { start: { line: 4, column: 95 }, end: { line: 4, column: 110 } }
                })
              : n
          ) +
          '">\n\t\t\t' +
          l(
            typeof (n = null != (n = t(o, "submessage") || (null != e ? t(e, "submessage") : e)) ? n : a) == r
              ? n.call(d, { name: "submessage", hash: {}, data: s, loc: { start: { line: 5, column: 3 }, end: { line: 5, column: 17 } } })
              : n
          ) +
          '\n\t\t\t<i class="icon icon-angle-right"></i>\n\t\t</div>\n'
        );
      },
      3: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '\t\t<div class="description">\n\t\t\t' +
          t.escapeExpression(
            "function" == typeof (o = null != (o = n(o, "submessage") || (null != e ? n(e, "submessage") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "submessage",
                  hash: {},
                  data: s,
                  loc: { start: { line: 10, column: 3 }, end: { line: 10, column: 17 } }
                })
              : o
          ) +
          "\n\t\t</div>\n"
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, o, i, s) {
        var n,
          d = null != e ? e : t.nullContext || {},
          a = t.hooks.helperMissing,
          r = "function",
          l = t.escapeExpression,
          c =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<li class="empty">\n\t<p class="title empty-title">' +
          l(
            typeof (n = null != (n = c(o, "message") || (null != e ? c(e, "message") : e)) ? n : a) == r
              ? n.call(d, { name: "message", hash: {}, data: s, loc: { start: { line: 2, column: 30 }, end: { line: 2, column: 41 } } })
              : n
          ) +
          "</p>\n" +
          (null !=
          (t = c(o, "if").call(d, null != e ? c(e, "subMessageClickable") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.program(3, s, 0),
            data: s,
            loc: { start: { line: 3, column: 1 }, end: { line: 12, column: 8 } }
          }))
            ? t
            : "") +
          '\t<button class="button new-todo-button" data-test="todo-new-empty">New ' +
          l(
            typeof (n = null != (n = c(o, "listType") || (null != e ? c(e, "listType") : e)) ? n : a) == r
              ? n.call(d, { name: "listType", hash: {}, data: s, loc: { start: { line: 13, column: 71 }, end: { line: 13, column: 83 } } })
              : n
          ) +
          "</button>\n</li>\n"
        );
      },
      useData: !0
    })),
    (v.templates.todofolderlistchoice = Handlebars.template({
      1: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '\t\t<li class="todo-folder-parent">\n\t\t\t<svg class="icon icon-folder" draggable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M0 11C0 7.68629 2.68629 5 6 5H20.8836C22.552 5 24.1451 5.69469 25.2803 6.91729L28.2197 10.0827C29.3549 11.3053 30.948 12 32.6164 12H58C61.3137 12 64 14.6863 64 18V53C64 56.3137 61.3137 59 58 59H6C2.68629 59 0 56.3137 0 53V11Z" /></svg>\n\t\t\t<span>' +
          t.escapeExpression(
            "function" ==
              typeof (o = null != (o = n(o, "parentTitle") || (null != e ? n(e, "parentTitle") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "parentTitle",
                  hash: {},
                  data: s,
                  loc: { start: { line: 5, column: 9 }, end: { line: 5, column: 24 } }
                })
              : o
          ) +
          '</span>\n\t\t\t<svg class="icon icon-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.362 292.362"><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"/></svg>\n\t\t</li>\n'
        );
      },
      3: function (t, e, o, i, s) {
        return "todo-list-section";
      },
      5: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<img class="provider-icon list-icon" src="' +
          t.escapeExpression(
            "function" == typeof (o = null != (o = n(o, "iconUrl") || (null != e ? n(e, "iconUrl") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "iconUrl",
                  hash: {},
                  data: s,
                  loc: { start: { line: 11, column: 83 }, end: { line: 11, column: 94 } }
                })
              : o
          ) +
          '">'
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, o, i, s) {
        var n,
          d,
          a = null != e ? e : t.nullContext || {},
          r = t.hooks.helperMissing,
          l = t.escapeExpression,
          c = "function",
          h =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<ul data-test="' +
          l(
            (h(o, "lower") || (e && h(e, "lower")) || r).call(a, null != e ? h(e, "title") : e, {
              name: "lower",
              hash: {},
              data: s,
              loc: { start: { line: 1, column: 15 }, end: { line: 1, column: 30 } }
            })
          ) +
          '" data-folder-id="' +
          l(
            typeof (d = null != (d = h(o, "folderName") || (null != e ? h(e, "folderName") : e)) ? d : r) == c
              ? d.call(a, { name: "folderName", hash: {}, data: s, loc: { start: { line: 1, column: 48 }, end: { line: 1, column: 62 } } })
              : d
          ) +
          '" class="todo-folder">\n' +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "parentTitle") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 2, column: 1 }, end: { line: 8, column: 8 } }
          }))
            ? n
            : "") +
          '\t<li class="' +
          l(
            typeof (d = null != (d = h(o, "class") || (null != e ? h(e, "class") : e)) ? d : r) == c
              ? d.call(a, { name: "class", hash: {}, data: s, loc: { start: { line: 9, column: 12 }, end: { line: 9, column: 21 } } })
              : d
          ) +
          " " +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "hasParent") : e, {
            name: "if",
            hash: {},
            fn: t.program(3, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 9, column: 22 }, end: { line: 9, column: 63 } }
          }))
            ? n
            : "") +
          '" data-list-id="' +
          l(
            typeof (d = null != (d = h(o, "listId") || (null != e ? h(e, "listId") : e)) ? d : r) == c
              ? d.call(a, { name: "listId", hash: {}, data: s, loc: { start: { line: 9, column: 79 }, end: { line: 9, column: 89 } } })
              : d
          ) +
          '">\n\t\t<div class="list-color" style="background-color: ' +
          l(
            typeof (d = null != (d = h(o, "color") || (null != e ? h(e, "color") : e)) ? d : r) == c
              ? d.call(a, { name: "color", hash: {}, data: s, loc: { start: { line: 10, column: 51 }, end: { line: 10, column: 60 } } })
              : d
          ) +
          '">&nbsp;</div>\n\t\t<span class="list-name">' +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "iconUrl") : e, {
            name: "if",
            hash: {},
            fn: t.program(5, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 11, column: 26 }, end: { line: 11, column: 103 } }
          }))
            ? n
            : "") +
          l(
            typeof (d = null != (d = h(o, "title") || (null != e ? h(e, "title") : e)) ? d : r) == c
              ? d.call(a, { name: "title", hash: {}, data: s, loc: { start: { line: 11, column: 103 }, end: { line: 11, column: 112 } } })
              : d
          ) +
          "</span>\n\t</li>\n</ul>\n"
        );
      },
      useData: !0
    })),
    (v.templates.todoitem = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<span class="todo-item-wrapper has-more">\n\t<i class="loading-icon"></i>\n\t<i class="control error-icon" title="Error saving click to retry">!</i>\n\n\t<label><input class="todo-item-checkbox" data-test="todo-item-checkbox" type="checkbox"></label>\n\t<span class="todo-item-title" data-test="todo-item-title">' +
          t.escapeExpression(
            "function" == typeof (o = null != (o = n(o, "title") || (null != e ? n(e, "title") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "title",
                  hash: {},
                  data: s,
                  loc: { start: { line: 6, column: 59 }, end: { line: 6, column: 68 } }
                })
              : o
          ) +
          '</span>\n\t<div class="more"></div>\n</span>\n'
        );
      },
      useData: !0
    })),
    (v.templates.todolistactive = Handlebars.template({
      1: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '\t\t<div class="project-chooser todo-provider-wrapper ' +
          (null !=
          (o = n(o, "unless").call(null != e ? e : t.nullContext || {}, null != e ? n(e, "supportLists") : e, {
            name: "unless",
            hash: {},
            fn: t.program(2, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 5, column: 52 }, end: { line: 5, column: 95 } }
          }))
            ? o
            : "") +
          '">\n\t\t\t<div class="project-chooser-toggle"></div>\n\t\t\t<div class="project-chooser-dropdown"></div>\n\t\t</div>\n'
        );
      },
      2: function (t, e, o, i, s) {
        return "has-icon";
      },
      4: function (t, e, o, i, s) {
        return "todo-folders";
      },
      6: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<img class="provider-icon" src="' +
          t.escapeExpression(
            "function" ==
              typeof (o = null != (o = n(o, "providerLogo") || (null != e ? n(e, "providerLogo") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "providerLogo",
                  hash: {},
                  data: s,
                  loc: { start: { line: 12, column: 61 }, end: { line: 12, column: 77 } }
                })
              : o
          ) +
          '">'
        );
      },
      8: function (t, e, o, i, s) {
        return "no-caps";
      },
      10: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<div class="message todo-message"><span class="title">' +
          t.escapeExpression(
            "function" ==
              typeof (o = null != (o = n(o, "statusMessage") || (null != e ? n(e, "statusMessage") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "statusMessage",
                  hash: {},
                  data: s,
                  loc: { start: { line: 30, column: 75 }, end: { line: 30, column: 92 } }
                })
              : o
          ) +
          "</span></div>"
        );
      },
      12: function (t, e, o, i, s) {
        var n,
          d = null != e ? e : t.nullContext || {},
          a = t.hooks.helperMissing,
          r = "function",
          l = t.escapeExpression;
        return (
          '<div class="message todo-message"><span class="action" id="status-action" data-action="' +
          l(
            typeof (n =
              null !=
              (n =
                (t =
                  t.lookupProperty ||
                  function (t, e) {
                    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                  })(o, "action") || (null != e ? t(e, "action") : e))
                ? n
                : a) == r
              ? n.call(d, { name: "action", hash: {}, data: s, loc: { start: { line: 31, column: 108 }, end: { line: 31, column: 118 } } })
              : n
          ) +
          '">' +
          l(
            typeof (n = null != (n = t(o, "actionMessage") || (null != e ? t(e, "actionMessage") : e)) ? n : a) == r
              ? n.call(d, {
                  name: "actionMessage",
                  hash: {},
                  data: s,
                  loc: { start: { line: 31, column: 120 }, end: { line: 31, column: 137 } }
                })
              : n
          ) +
          "</span></div>"
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, o, i, s) {
        var n,
          d,
          a = null != e ? e : t.nullContext || {},
          r = t.hooks.helperMissing,
          l = "function",
          c = t.escapeExpression,
          h =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<div class="todo-header-row">\n\t<div class="list-color" style="background-color: ' +
          c(
            typeof (d = null != (d = h(o, "color") || (null != e ? h(e, "color") : e)) ? d : r) == l
              ? d.call(a, { name: "color", hash: {}, data: s, loc: { start: { line: 2, column: 50 }, end: { line: 2, column: 59 } } })
              : d
          ) +
          '"></div>\n\n' +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "supportProjects") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 4, column: 1 }, end: { line: 9, column: 8 } }
          }))
            ? n
            : "") +
          '\t\n\t<div class="' +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "supportsFolders") : e, {
            name: "if",
            hash: {},
            fn: t.program(4, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 11, column: 13 }, end: { line: 11, column: 55 } }
          }))
            ? n
            : "") +
          ' active-list-container has-icon" data-test="todo-list-chooser">\n\t\t' +
          (null !=
          (n = h(o, "unless").call(a, null != e ? h(e, "supportProjects") : e, {
            name: "unless",
            hash: {},
            fn: t.program(6, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 12, column: 2 }, end: { line: 12, column: 90 } }
          }))
            ? n
            : "") +
          '\n\t\t<span class="list-name active-list-name ' +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "no_caps") : e, {
            name: "if",
            hash: {},
            fn: t.program(8, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 13, column: 42 }, end: { line: 13, column: 71 } }
          }))
            ? n
            : "") +
          '" title="' +
          c(
            typeof (d = null != (d = h(o, "listTitle") || (null != e ? h(e, "listTitle") : e)) ? d : r) == l
              ? d.call(a, { name: "listTitle", hash: {}, data: s, loc: { start: { line: 13, column: 80 }, end: { line: 13, column: 93 } } })
              : d
          ) +
          '" data-test="todo-active-list-title">' +
          c(
            typeof (d = null != (d = h(o, "listTitle") || (null != e ? h(e, "listTitle") : e)) ? d : r) == l
              ? d.call(a, {
                  name: "listTitle",
                  hash: {},
                  data: s,
                  loc: { start: { line: 13, column: 130 }, end: { line: 13, column: 143 } }
                })
              : d
          ) +
          '</span>\n\t\t<div class="list-chooser-toggle icon-wrapper"><svg class="icon icon-angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.751 55.751"><path d="M31.836 43.006c.282-.281.518-.59.725-.912L54.17 20.485a5.403 5.403 0 0 0 0-7.638 5.403 5.403 0 0 0-7.638 0l-18.608 18.61L9.217 12.753A5.4 5.4 0 0 0 0 16.571a5.363 5.363 0 0 0 1.582 3.816l21.703 21.706c.207.323.445.631.729.913a5.367 5.367 0 0 0 3.91 1.572 5.37 5.37 0 0 0 3.912-1.572z"/></svg></div>\n\t\t<div class="dropdown nipple nipple-top-left">\n\t\t\t<div class="list-chooser dropdown-list" data-test="todo-list-dropdown"></div>\n\t\t</div>\n\t</div>\n\n\t<div class="todo-header-controls">\n\t\t<div class="todo-header-control more" id="todo-top-menu"></div>\n\t\t<div class="todo-header-control mobile-close">\n\t\t\t<span class="icon-wrapper u--mobile-show-bg hide">\n\t\t\t\t<svg class="icon icon-hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334"><path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"/></svg>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</div>\n\n' +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "statusMessage") : e, {
            name: "if",
            hash: {},
            fn: t.program(10, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 30, column: 0 }, end: { line: 30, column: 112 } }
          }))
            ? n
            : "") +
          "\n" +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "actionMessage") : e, {
            name: "if",
            hash: {},
            fn: t.program(12, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 31, column: 0 }, end: { line: 31, column: 157 } }
          }))
            ? n
            : "") +
          "\n"
        );
      },
      useData: !0
    })),
    (v.templates.todolistchoice = Handlebars.template({
      1: function (t, e, o, i, s) {
        var n,
          d = null != e ? e : t.nullContext || {},
          a = t.hooks.helperMissing,
          r = "function",
          l = t.escapeExpression;
        return (
          '\t\t<li class="' +
          l(
            typeof (n =
              null !=
              (n =
                (t =
                  t.lookupProperty ||
                  function (t, e) {
                    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                  })(o, "class") || (null != e ? t(e, "class") : e))
                ? n
                : a) == r
              ? n.call(d, { name: "class", hash: {}, data: s, loc: { start: { line: 3, column: 13 }, end: { line: 3, column: 22 } } })
              : n
          ) +
          '" data-list-id="' +
          l(
            typeof (n = null != (n = t(o, "listId") || (null != e ? t(e, "listId") : e)) ? n : a) == r
              ? n.call(d, { name: "listId", hash: {}, data: s, loc: { start: { line: 3, column: 38 }, end: { line: 3, column: 48 } } })
              : n
          ) +
          '">\n\t\t\t<div class="list-color" style="background-color: ' +
          l(
            typeof (n = null != (n = t(o, "color") || (null != e ? t(e, "color") : e)) ? n : a) == r
              ? n.call(d, { name: "color", hash: {}, data: s, loc: { start: { line: 4, column: 52 }, end: { line: 4, column: 61 } } })
              : n
          ) +
          '">&nbsp;</div>' +
          l(
            typeof (n = null != (n = t(o, "parentTitle") || (null != e ? t(e, "parentTitle") : e)) ? n : a) == r
              ? n.call(d, { name: "parentTitle", hash: {}, data: s, loc: { start: { line: 4, column: 75 }, end: { line: 4, column: 90 } } })
              : n
          ) +
          "\n\t\t</li>\n"
        );
      },
      3: function (t, e, o, i, s) {
        return "todo-list-section";
      },
      5: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<div class="list-color" style="background-color: ' +
          t.escapeExpression(
            "function" == typeof (o = null != (o = n(o, "color") || (null != e ? n(e, "color") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "color",
                  hash: {},
                  data: s,
                  loc: { start: { line: 8, column: 72 }, end: { line: 8, column: 81 } }
                })
              : o
          ) +
          '">&nbsp;</div>'
        );
      },
      7: function (t, e, o, i, s) {
        var n =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<img class="provider-icon list-icon" src="' +
          t.escapeExpression(
            "function" == typeof (o = null != (o = n(o, "iconUrl") || (null != e ? n(e, "iconUrl") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "iconUrl",
                  hash: {},
                  data: s,
                  loc: { start: { line: 9, column: 83 }, end: { line: 9, column: 94 } }
                })
              : o
          ) +
          '">'
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, o, i, s) {
        var n,
          d,
          a = null != e ? e : t.nullContext || {},
          r = t.hooks.helperMissing,
          l = t.escapeExpression,
          c = "function",
          h =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<ul data-test="' +
          l(
            (h(o, "lower") || (e && h(e, "lower")) || r).call(a, null != e ? h(e, "title") : e, {
              name: "lower",
              hash: {},
              data: s,
              loc: { start: { line: 1, column: 15 }, end: { line: 1, column: 30 } }
            })
          ) +
          '">\n' +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "parentTitle") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 2, column: 1 }, end: { line: 6, column: 8 } }
          }))
            ? n
            : "") +
          '\t<li class="' +
          l(
            typeof (d = null != (d = h(o, "class") || (null != e ? h(e, "class") : e)) ? d : r) == c
              ? d.call(a, { name: "class", hash: {}, data: s, loc: { start: { line: 7, column: 12 }, end: { line: 7, column: 21 } } })
              : d
          ) +
          " " +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "hasParent") : e, {
            name: "if",
            hash: {},
            fn: t.program(3, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 7, column: 22 }, end: { line: 7, column: 63 } }
          }))
            ? n
            : "") +
          '" data-list-id="' +
          l(
            typeof (d = null != (d = h(o, "listId") || (null != e ? h(e, "listId") : e)) ? d : r) == c
              ? d.call(a, { name: "listId", hash: {}, data: s, loc: { start: { line: 7, column: 79 }, end: { line: 7, column: 89 } } })
              : d
          ) +
          '">\n\t\t' +
          (null !=
          (n = h(o, "unless").call(a, null != e ? h(e, "hasParent") : e, {
            name: "unless",
            hash: {},
            fn: t.program(5, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 8, column: 2 }, end: { line: 8, column: 106 } }
          }))
            ? n
            : "") +
          '\n\t\t<span class="list-name">' +
          (null !=
          (n = h(o, "if").call(a, null != e ? h(e, "iconUrl") : e, {
            name: "if",
            hash: {},
            fn: t.program(7, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 9, column: 26 }, end: { line: 9, column: 103 } }
          }))
            ? n
            : "") +
          l(
            typeof (d = null != (d = h(o, "title") || (null != e ? h(e, "title") : e)) ? d : r) == c
              ? d.call(a, { name: "title", hash: {}, data: s, loc: { start: { line: 9, column: 103 }, end: { line: 9, column: 112 } } })
              : d
          ) +
          '</span>\n\t\t<span class="todo-count">' +
          l(
            typeof (d = null != (d = h(o, "count") || (null != e ? h(e, "count") : e)) ? d : r) == c
              ? d.call(a, { name: "count", hash: {}, data: s, loc: { start: { line: 10, column: 27 }, end: { line: 10, column: 36 } } })
              : d
          ) +
          "</span>\n\t</li>\n</ul>\n"
        );
      },
      useData: !0
    })),
    (v.templates.todopane = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, o, i, s) {
        return '\t\t<div class="drop-zone drop-left-zone">\n\t\t\t<span class="bar left-bar">\n\t\t\t\t<span class="bar-name"></span>\n\t\t\t</span>\n\t\t</div>\n\n\t\t<div class="drop-zone drop-right-zone">\n\t\t\t<span class="bar right-bar">\n\t\t\t\t<span class="bar-name"></span>\n\t\t\t</span>\n\t\t</div>\n\n\t\t<header class="header todo-header" data-test="todo-header">\n\t\t\t<div class="active-list">\n\t\t\t\t\x3c!-- Seems like this is all getting replaced with todolistactive.hbs? --\x3e\n\t\t\t\t\x3c!-- <li><span class="todo-list-name"></span><span class="todo-count active-todo-count"></span></li> --\x3e\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div class="todo-list-wrapper">\n\t\t\t<ol class="todo-list animating"></ol>\n\t\t</div>\n\n\t\t<footer class="footer-input new-todo-footer">\n\t\t\t<input id="todo-new" class="todo-input todo-new" type="text" placeholder="New Todo" data-test="todo-new-input" autocomplete="off">\n\t\t</footer>\n';
      },
      useData: !0
    })),
    (v.styles = v.styles || {}),
    (v.styles.style = function () {
      var t = document.createElement("style");
      (t.type = "text/css"),
        (t.innerHTML =
          '.todo{text-align:right;text-shadow:none}.todo .app-container{position:relative}.todo .todo-app{height:auto;width:330px;padding:0;position:absolute;display:block;opacity:1;overflow-y:hidden;text-align:left}.todo-app.animating::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0)!important}.todo .drop-zone{width:37px;position:absolute;top:4px;bottom:4px;z-index:10000;opacity:0;font-size:14px;transition:all .3s ease-out;visibility:hidden;writing-mode:vertical-rl}.todo .bar,.todo .bar:before{position:absolute;top:0;bottom:0;right:0;left:0}.todo .drop-left-zone{left:0}.todo .drop-right-zone{right:0}.todo .has-drop-left .drop-left-zone,.todo .has-drop-right .drop-right-zone{opacity:1;visibility:visible}.todo .bar{padding-top:12px;box-shadow:0 0 10px rgba(0,0,0,.125);text-align:left;transition:all .2s ease}.todo .bar:before{z-index:-1;background:var(--color-stop-4);content:""}.todo .bar-name,.todo .dropdown-wrapper,.todo-header,.todo-header-row{position:relative}.todo .hover .bar:before{background:var(--color-stop-3)}.todo .drop-zone.hover .bar{transform:translateX(0)}.todo .bar-name{font-weight:500;line-height:37px;text-transform:capitalize;transform:scale(0);transition:all .2s ease}.todo .drop-zone.hover .bar-name{transform:scale(1)}.todo .left-bar{overflow:hidden;transform:translateX(-37px)}.todo .left-bar,.todo .left-bar:before{border-radius:0 var(--border-radius) var(--border-radius) 0}.todo .has-drop-left .left-bar{transform:translateX(-29px)}.todo .right-bar{overflow:hidden;transform:translateX(37px)}.todo .right-bar,.todo .right-bar:before{border-radius:var(--border-radius) 0 0 var(--border-radius)}.todo .has-drop-right .right-bar{transform:translateX(29px)}.todo .dropdown{position:absolute;z-index:10}.todo .dropdown li{transition-duration:0s}.todo .dropdown .loading{margin:2px 0;opacity:.7!important;text-align:center}.todo .dropdown .loading:hover{background:0 0}.todo .dropdown.list-integrations{width:220px}.todo .list-integrations .dropdown-list-icon{opacity:1}.todo .icon-tick{height:7px;width:14px;fill:var(--color-icon);vertical-align:6%}.todo-header{--header-padding-top:5px;min-height:var(--header-height);z-index:2;display:block;cursor:pointer!important}.todo-header-row{height:var(--header-height);flex-grow:1;display:flex}.todo .list-color{width:5px;position:absolute;top:11px;bottom:3px;left:0;display:inline;border-bottom-right-radius:3px;border-top-right-radius:3px}.todo .provider-icon{height:20px;padding-right:9px}.momentum-todo .provider-icon{display:none}.todo-ClickUp .provider-icon{margin-top:2px}.dropdown-list-icon.GitHub,.dropdown-list-icon.icon-GitHub,.provider-list li img.GitHub,.provider-logo.GitHub,.todo-GitHub .provider-icon,.todo-Microsoft .provider-icon{filter:var(--filter-dark-brightness)}.todo .list-icon{position:relative;top:2px}.todo .project-chooser{--left-margin:-8px;margin-right:calc(var(--app-padding) * -1);padding-left:var(--app-padding);z-index:5;flex:0 0 auto;display:flex;align-items:center}.todo .project-chooser-toggle{height:var(--chooser-height);margin:2px 5px 0 var(--left-margin);padding:8px 5px 4px 7px;position:relative;display:inline-block;background:rgba(255,255,255,0);border-radius:var(--border-radius);cursor:pointer}.todo .active .project-chooser-toggle{background:rgba(255,255,255,.12)}.todo .project-chooser .icon-wrapper{padding:0;display:block}.todo .project-chooser .icon-wrapper:after{height:auto;width:auto;top:0;right:0;bottom:0;left:0;border-radius:var(--border-radius)}.todo .project-chooser .provider-icon{padding-right:1px}.todo .project-chooser .todo-menu-dropdown-icon{height:16px;width:17px;margin-left:3px;display:inline-block;opacity:.5;cursor:pointer;fill:var(--color-icon)}.todo-provider-wrapper:hover .todo-menu-dropdown-icon{opacity:.8}.project-chooser.active .todo-menu-dropdown-icon{opacity:.6}.todo .project-chooser-dropdown{min-width:230px;margin-top:4px;margin-left:var(--left-margin);top:100%;z-index:100;transition:transform .15s ease}.todo .project-chooser-dropdown .dropdown-list{max-height:209px;overflow:hidden;overflow-y:auto}.todo .project-chooser-dropdown.short-list li:last-child{margin-bottom:20px}.todo .project-chooser-dropdown li:last-child{margin-bottom:4px}.todo-header .project-chooser-dropdown .dropdown-list.available-empty{height:200px}.todo-header .project-chooser-dropdown .available-empty li:last-child{margin-bottom:20px}.todo-header .project-chooser-dropdown li{padding-top:5px;padding-bottom:5px}.todo-header .project-chooser-dropdown .provider-name{margin:4px 0 -1px;opacity:.85;cursor:default;font-weight:600}.todo-header .project-chooser-dropdown .section-title{padding-top:6px;padding-bottom:4px;opacity:.5;cursor:default;font-size:71.42857%;font-weight:500;text-transform:uppercase}.project-chooser-dropdown .provider-name:hover,.project-chooser-dropdown .section-title:hover{background:0 0!important}.todo-header .project-chooser-dropdown .active-item.highlighted{background:var(--color-stop-1)}.todo-header .project-chooser-dropdown .loading-dropdown{opacity:.5;text-align:center}.todo .active-list-container{min-width:0;padding-top:var(--header-padding-top);padding-left:var(--app-padding);flex:1 1 auto;display:inline-flex;align-items:center;transition:all .2s ease}.todo .active-list-name{font-size:20px;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize;white-space:nowrap}.todo .active-list-name.no-caps{text-transform:none}.todo-folders .dropdown{top:var(--header-height);left:var(--safe-zone-padding)}.todo-folders.active .dropdown{display:block}.todo-folders .dropdown.nipple-top-left:after{left:15px}.todo-folders .dropdown .list-chooser{max-height:650px;overflow:auto}.todo .list-chooser-toggle{margin:0 6px;padding:0}.todo .list-chooser-toggle:after{--icon-wrapper-size:22px}.todo .list-chooser-toggle .icon{--icon-size:10px;min-width:0;margin-top:2px}.todo .active-list-container .dropdown{top:var(--header-height)}.todo .list-chooser.nipple-top-left:after{left:28px}.todo .list-chooser li{--padding-v:7px;--padding-h:16px;min-width:240px;padding:var(--padding-v) var(--padding-h);position:relative;font-size:.9375rem;line-height:normal;white-space:nowrap}.todo .list-chooser li:hover{background:var(--hover-bg)}.todo .list-chooser .todo-list-section{padding-left:38px}.todo .list-chooser .list-color{width:4px;top:4px;bottom:2px}.todo .list-chooser .list-name{opacity:.7;line-height:1.2;white-space:initial}.todo .todo-list-choice-active .list-name{opacity:1;font-weight:500}.todo .list-chooser .todo-count{margin-left:3px;opacity:.45;font-size:93.33333%}.todo .list-chooser .todo-list-add-row{max-width:none!important;padding:0!important;list-style:none}.todo .list-chooser .todo-list-add-row li{padding:0}.todo .todo-list-add-input,.todo-list-add-loading{padding:var(--padding-v) var(--padding-h);line-height:normal}.todo .todo-list-add-input{width:100%;opacity:.7;border-bottom:none;cursor:pointer}.todo .input-mode .todo-list-add-input{cursor:text}.todo .todo-list-add-icon{position:absolute;top:var(--padding-v);left:calc(var(--padding-h) - 1px);opacity:.7}.todo .todo-list-add-icon .icon-plus{opacity:.6375;font-size:14px}.todo-list-add-row .upsell-row{padding:5px 16px!important;display:flex;align-items:center}.todo-list-add-row .upsell-row .copy{opacity:.5;font-size:.875rem}.todo-list-add-row .upsell-row .badge{margin-top:1px;margin-left:8px}.todo-folder .icon-folder{--icon-size:14px;margin-right:4px;opacity:.4;vertical-align:-9%}.todo-folder .icon-tick{margin-left:-1px;opacity:.5;transform:rotate(-90deg);vertical-align:8%}.todo-folder.active .icon-tick{-webkit-backface-visibility:hidden;transform:rotate(0)}.todo-folder .todo-list-section{display:none}.todo-folder.active .todo-list-section{display:block}.todo-header-controls{flex:0 0 auto;display:flex}.todo-header .more{height:100%;position:static}.todo-header .mobile-close,.todo-header .more-toggle{padding:var(--header-padding-top) calc(var(--app-padding) - 3px) 0 5px!important;position:relative}.todo-header .mobile-close{margin-left:0}.todo-actions-dropdown{min-width:auto;margin-top:-6px;right:calc(var(--app-padding) - 7px);bottom:auto}.todo-header .dropdown .header{border-bottom:1px solid var(--color-stop-1)}.todo .icon-external{opacity:.35}.todo .icon-autofocus{--icon-size:9px}.todo .icon-assigned{--icon-size:14px}.todo .icon-clear{--icon-size:14px;stroke:var(--color-icon)}.todo .icon-move-to-today{--icon-size:16px;margin-left:-3px}.todo .icon-move-to-today #icon-path-one{fill:var(--color-icon)}.todo .icon-move-to-today #icon-path-two{stroke:var(--color-icon)}.todo-provider-loading.dropdown-detail{bottom:0}.todo-provider-loading .loading{height:100%;margin:0!important;padding:0!important;display:flex;align-items:center;justify-content:center}.todo-list-wrapper{height:100%;width:100%;position:relative;z-index:1;overflow:hidden;transition:max-height .3s ease,min-height .3s ease,padding .3s ease}.todo.has-message .todo-list-wrapper{padding-top:1rem}.todo-list{width:100%;overflow-x:hidden;overflow-y:auto;transition:opacity .2s eas}.todo-list.animating::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0)!important}.todo-item-active>.todo-item-wrapper,.todo-item.active{background-color:var(--color-stop-1)}.todo-list.drop-top-margin{margin-top:-52px}.todo-list.hide-scroll{overflow-y:hidden}.todo-list.drop-area{padding:10px 0}.todo-list .placeholder{padding:0}.todo-item{position:relative;display:none;opacity:0;font-size:1rem;line-height:1.1875;visibility:hidden}.todo-item.visible{width:100%;display:inline-block;opacity:1;visibility:visible}.todo-item.hidden{display:none}.todo-item.transition{transition:visibility 0s,opacity .4s ease,margin-top .4s ease}.todo-item.drop-area{padding:8px 0}.todo-item label{padding-right:8px;padding-left:var(--app-padding);position:relative;top:1px;z-index:10;display:flex;opacity:1;font-size:1rem}.touch .todo-item label{top:2px}.todo-item input{width:auto}.todo-item-wrapper{padding:3px 0 2px;display:flex;align-items:baseline}.todo-item-title{min-width:0;flex:1 1 auto;display:block;cursor:default;outline:0;word-wrap:break-word}.editing>.todo-item-wrapper .todo-item-title{opacity:.7;outline:0;-webkit-user-select:text;user-select:text}.done>.todo-item-wrapper .todo-item-title{opacity:.5;text-decoration:line-through}.done-list .todo-item-title{opacity:.6;text-decoration:none}.todo-item-title:empty:before{content:"!";visibility:hidden}.todo-item .more{position:static}.todo-item .more-toggle{margin:-3px 0;padding:0 calc(var(--app-padding) - 1px) 0 8px;z-index:2}.todo-item-wrapper:hover .more-toggle{opacity:.525}.editing .more{opacity:0}.todo-item-dropdown{top:20px;right:calc(var(--app-padding) - 5px);bottom:auto}.todo-item-dropdown .list-color{width:4px;margin:0;top:3px;bottom:2px}.todo-item .icon-wrapper:after{--icon-wrapper-size:23px}.todo-item .icon-ellipsis{padding-top:1px}.todo-item .active .icon-wrapper,.todo-item-wrapper:hover .icon-wrapper{opacity:1}.todo-item-active>.todo-item-wrapper{display:block;box-shadow:0 0 0 2px var(--color-stop-1)}.todo-item .control{height:12px;width:12px;position:absolute;right:0;border-radius:100%;cursor:pointer;line-height:12px;text-align:center}.todo-item .error-icon,.todo-item .loading-icon{position:absolute;top:6px;display:none}.todo-item .failed>.todo-item-wrapper .error-icon,.todo-item .loading>.todo-item-wrapper .loading-icon{display:inline-block}.todo-item .failed .destroy,.todo-item .failed .more,.todo-item .loading .destroy,.todo-item .loading .more,.todo-subsection .todo-item-checkbox{display:none}.todo-item .loading-icon{height:10px;width:10px;right:6px;border-width:1px}.todo-item .error-icon{top:4px;right:13px}.todo-section{margin:0;padding:12px var(--app-padding) 6px;opacity:.75;font-size:.75rem;font-weight:700;text-transform:uppercase}.todo-list .todo-section:first-child{padding-top:5px}.todo-section-collapsible{cursor:pointer}.todo-section-collapsible:active,.todo-section-collapsible:hover{opacity:1}.todo-section .icon-tick{margin-left:1px;opacity:.5}.todo-section-collapsed .icon-tick{-webkit-backface-visibility:hidden;transform:rotate(-90deg)}.todo-section-collapsible:hover .icon-tick{opacity:.85}.todo-subsection{cursor:default}.todo-subsection .todo-item-title{margin-left:16px;margin-bottom:-2px;opacity:.7;font-size:13px}.todo-load-more{padding:8px var(--app-padding) 4px;text-align:center}.todo-load-more .todo-load-more-button{padding:7px 21px;border-radius:100px;font-size:12px;transition:opacity .2s ease!important}.todo-load-more .loading{height:28px;position:relative;display:block;line-height:25px}.todo-load-more .loading .loading-icon{margin-right:6px;position:relative;top:-2px;right:auto;left:2px}.todo-load-more .loading .loading-title{opacity:.9;font-size:12px}.todo-load-more .todo-load-more-done{height:28px;opacity:.9;font-size:12px;line-height:25px;transition:opacity .2s ease!important}.todo-list .info{margin-bottom:8px;padding:5px 15px;position:relative;background:#333;color:#ccc}.todo-list .info-hide{height:29px;width:29px;min-width:0;padding:0!important;position:absolute;top:0;right:0;opacity:.5;font-size:70%;line-height:29px;text-align:center}.todo-list .info-title{margin:0 0 1px;font-size:90%}.todo-list .info-description{margin:0;opacity:.5;font-size:85%;line-height:120%}.todo-list .info-action{margin:-3px -15px -5px;padding:5px 15px!important;opacity:.8;font-size:80%}.todo .empty .empty-title{padding:0;opacity:.7;cursor:default}.todo .empty .empty-link{display:inline-block;cursor:pointer;transition:opacity .3s ease}.todo .empty-link .icon{margin-left:3px;font-size:16px;line-height:1;vertical-align:-5%}.todo-list .empty .empty-link:hover{opacity:.8}.todo-list .empty .new-todo-button{transition:opacity .3s ease}.todo-item ol{margin-left:18px}.todo-upsell{min-height:180px}.todo .footer-input{position:static;display:flex;align-items:center;justify-content:space-between}.todo .is-empty .todo-app{overflow:hidden}.todo .is-empty .todo-new{position:absolute;bottom:0}.todo .is-empty .todo-list{visibility:hidden}.todo .is-empty .empty{display:flex}@media screen and (max-width:450px){.todo .todo-header{--header-padding-top:2px;display:flex}.todo-actions-dropdown{right:52px}}'),
        document.getElementsByTagName("head")[0].appendChild(t);
    }),
    (v.collect.ProjectTodoLists = m.collect.SyncedCollection.extend({
      loadedFromCache: !1,
      listStatus: null,
      initialize: function (t, e) {
        function o(t) {
          var e = localStorage.getItem(t);
          e &&
            (e = JSON.parse(e)).isComputed &&
            ((e.isComputed = !1), localStorage.setItem(t, JSON.stringify(e)), localStorage.setItem("activeTodoListId-1", "1-inbox"));
        }
        (this.model = v.models.TodoList),
          this.listenTo(this, "reset", this.collectionChanged),
          this.listenTo(this, "sync refresh", this.collectionSync),
          this.listenTo(this, "change:count", this.handleCountChanged),
          this.listenTo(m, "globalEvent:resetLists", this.resetLists),
          (this.project = e.project),
          e &&
            ((this.project = e.project),
            e.isDummy
              ? (e.offlineOnly = !0)
              : (e.prefetchTodos && (this.externallyFetchedOnce = !0), e.provider && (this.provider = e.provider))),
          (e.idAttribute = "csid"),
          (e.serverIdAttribute = "id"),
          ((e = e || {}).name = "todolist-" + this.project.id),
          (e.localProps = ["count", "providerId", "projectId", "loadedOnce"]),
          (e.model = this.model),
          (e.apiUrl = m.globals.urlRoot + "todos/lists"),
          m.conditionalFeatures.featureEnabled("offlineDataOnly")
            ? (e.offlineOnly = !0)
            : (o("todolist-1-1-today"), o("todolist-1-1-done")),
          m.collect.SyncedCollection.prototype.initialize.call(this, t, e);
        var i = this;
        e.isDummy && i.setAsDummy(),
          setTimeout(function () {
            !e.isDummy &&
              e.offlineOnly &&
              setTimeout(function () {
                i.fetch({ silent: !0, ignoreRender: !0, ignoreSave: !0 }),
                  i.populateDoneList(),
                  i.populateTodayList(),
                  i.populateInboxList(),
                  m.trigger("todo:renderLists");
              }, 200);
          }, 1);
      },
      comparator: "order",
      resetLists: function (t) {
        (!t || t.providerId == (this.provider || this.project.provider).id || (t.listId && this.get(t.listId))) &&
          this.fetch({ reset: !0 });
      },
      handleAuthRequired: function (t) {
        this.setStatus({
          status: "error",
          message: "Authentication Required…",
          actionMessage: "Connect",
          action: "auth.connect",
          actionParameter: t
        });
      },
      shouldIgnoreSync: function (t) {
        return t.get("isComputed");
      },
      setAsDummy: function () {
        (this.isDummy = !0),
          (this.offlineOnly = !0),
          this.findWhere({ id: this.project.get("id") }) ||
            ((this.models = []),
            this.create({ id: this.project.get("id"), title: this.project.get("title"), isDummy: !0 }, { project: this.project }));
      },
      forceFetch: function () {
        this.fetch({ reset: !0 });
      },
      selectedListCacheKey: function () {
        return this.project ? "activeTodoListId-" + this.project.id : null;
      },
      doFetchIfNeeded: function () {
        this.isDummy
          ? (this.selectedList().doFetchIfNeeded(), this.trigger("reset"))
          : ((this.forceFetch = !0), (this.externallyFetchedOnce = !0), this.loadedFromCache ? this.fetch() : this.fetch({ reset: !0 }));
      },
      parse: function (t) {
        if (null != t)
          return t.setAsDummy
            ? (this.setAsDummy(), this.doFetchIfNeeded(!0), [])
            : (t.aux_data_cmd && (this.aux_data_cmd = t.aux_data_cmd),
              t.aux_data && (this.aux_data = t.aux_data),
              t.providerReset && v.models.todoListManager.resetProvider(t.providerReset),
              Array.isArray(t) ? t : t.lists);
      },
      handleCountChanged: function () {
        this.checkSelectedList();
      },
      collectionSync: function (t, e, o) {
        (o && o.ignoreRender) ||
          (this.setStatus("Done"), this.checkSelectedList(this.forceFetch), (this.forceFetch = !1), m.trigger("todo:renderLists"));
      },
      setStatus: function (t) {
        (this.listStatus = t), m.trigger("todo:loadingStateChange", t);
      },
      fetch: function (t) {
        var e,
          o,
          i = this;
        this.isDummy
          ? t.reset &&
            setTimeout(function () {
              i.trigger("reset");
            })
          : ((t = t || {}),
            this.project &&
              ((e = {}),
              (o = this.project.get("providerId")),
              (e.data = { provider_id: o, project_id: this.project.get("id") }),
              m.models.customization.get("archived-" + o) && (e.data.loadArchived = !0),
              (t = _.extend(t, e))),
            (t.error = function () {
              (this.externallyFetchedOnce = !0),
                i.setStatus({ status: "error", message: "Trouble connecting…", actionMessage: "Retry", action: "todo.connection.retry" });
            }),
            ((t && null != t.reset) || (this.listStatus && "loading" != this.listStatus.status)) &&
              this.setStatus({ status: "loading", message: "Loading..." }),
            (t.project = this.project),
            m.collect.SyncedCollection.prototype.fetch.call(this, t));
      },
      collectionChanged: function (t, e, o) {
        (o && o.ignoreRender) || (this.setStatus(null), this.checkSelectedList(this.forceFetch), (this.forceFetch = !1));
      },
      populateDoneList: function () {
        this.getListOfType("done") ||
          this.create(
            { isComputed: !0, id: "1-done", csid: "1-done", title: "Done", type: "done", stock: !0, order: 300, serverSetId: !0 },
            { provider: this.provider, project: this.project }
          );
      },
      populateTodayList: function () {
        this.getListOfType("today") ||
          this.create(
            {
              isComputed: !0,
              id: "1-today",
              csid: "1-today",
              title: "Today",
              type: "today",
              stock: !0,
              order: 200,
              serverSetId: !0,
              selected: !0
            },
            { provider: this.provider, project: this.project }
          );
      },
      populateInboxList: function () {
        this.findWhere({ csid: "1-inbox" }) ||
          this.create(
            { id: "1-inbox", csid: "1-inbox", serverSetId: !0, title: "Inbox", type: "inbox", stock: !0, order: 100, reorder: !0 },
            { project: this.project }
          );
      },
      selectedList: function () {
        var t,
          e = {},
          o = this.selectedListId;
        return (
          o || ((t = this.selectedListCacheKey()) && (o = localStorage.getItem(t))),
          (e[this.idAttribute] = o),
          (t = this.findWhere(e)) ||
            ((t = this.findWhere({ selected: !0 })) ||
              ((t = this.getListOfType("today")) && (o = this.getListOfType("inbox")) && o.doFetchIfNeeded()),
            (t = t || this.getListOfType("inbox"))
              ? this.selectItem(t.id)
              : this.models.length && ((t = this.models[0]), this.selectItem(t.id)),
            !t && this.models.length && (t = this.models[0])),
          t ? (this.selectItem(t.id), t) : null
        );
      },
      getListOfType: function (t) {
        return this.findWhere({ type: t });
      },
      getListById: function (t) {
        var e = {};
        return (e[this.idAttribute] = t), this.findWhere(e);
      },
      isDoneList: function () {
        var t = this.selectedList();
        return !(!t || !t.get("done"));
      },
      checkSelectedList: function () {
        var t, e;
        this.selectedListId ||
          ((t = null),
          (t =
            !(t =
              (t = (e = this.selectedListCacheKey()) && (e = localStorage.getItem(e)) ? this.getListById(e) : t) ||
              this.findWhere({ selected: !0 })) && 0 < this.models.length
              ? this.models[0]
              : t)
            ? this.selectItem(t.id)
            : this.selectItem(null));
      },
      switchToDefaultList: function () {
        this.selectItem(this.getListOfType("inbox"));
      },
      selectItem: function (t) {
        var e;
        t != this.selectedListId &&
          ((e = this.selectedListCacheKey()) && localStorage.setItem(e, t),
          (this.selectedListId = t),
          m.trigger("todo:listChanged"),
          null != t) &&
          this.externallyFetchedOnce &&
          this.selectedList().doFetchIfNeeded(!1, !0);
      }
    })),
    (v.collect.ProviderTodoProjects = m.collect.SyncedCollection.extend({
      url: m.globals.urlRoot + "todos/projects",
      loadedFromCache: !1,
      projectStatus: null,
      initialize: function (t, e) {
        (e = e || {}),
          (this.model = v.models.TodoProject),
          this.listenTo(this, "reset refresh", this.collectionChanged),
          this.listenTo(this, "sync", this.collectionSync),
          this.listenTo(this, "change:count", this.handleCountChanged),
          this.listenTo(m, "globalEvent:resetLists", this.fetch),
          (this.provider = e.provider),
          e.prefetchTodos && (this.externallyFetchedOnce = !0),
          e.allProjects && ((this.allProjects = !0), (this.url += "/all")),
          (e.idAttribute = "id"),
          (e.name = "todoproject-" + this.provider.id),
          (e.model = this.model),
          (e.apiUrl = this.url),
          (e.localProps = ["providerId"]),
          e.isDummy ? ((e.offlineOnly = !0), (this.isDummy = !0)) : this.provider.isMomentum() ? (this.url = null) : (e.onlineOnly = !0),
          m.collect.SyncedCollection.prototype.initialize.call(this, t, e);
        t = this;
        this.isDummy && (this.loading = !0),
          t.isDummy || t.onlineOnly || t.fetch({ ignoreRender: !0 }),
          e.isDummy &&
            !t.findWhere({ id: t.provider.get("id") }) &&
            ((t.models = []),
            (e = {
              id: t.provider.get("id"),
              title: t.provider.get("title"),
              isDummy: !t.provider.get("supportProjects"),
              providerId: t.provider.get("id")
            }),
            t.create(e, { provider: t.provider })),
          t.isDummy && (t.loading = !1);
      },
      comparator: "order",
      selectedProjectCacheKey: function () {
        return this.provider ? "activeTodoProjectId-" + this.provider.id : null;
      },
      handleAuthRequired: function (t) {
        this.setStatus({
          status: "error",
          message: "Authentication Required…",
          actionMessage: "Connect",
          action: "auth.connect",
          actionParameter: t
        });
      },
      doFetchIfNeeded: function () {
        (this.forceFetch = !0), (this.externallyFetchedOnce = !0), this.loadedFromCache ? this.fetch() : this.fetch({ reset: !0 });
      },
      parse: function (t) {
        return (
          t.aux_data_cmd && (this.aux_data_cmd = t.aux_data_cmd),
          t.aux_data && (this.aux_data = t.aux_data),
          Array.isArray(t) ? t : t.projects
        );
      },
      handleCountChanged: function () {
        this.checkSelectedProject();
      },
      collectionSync: function (t, e, o) {
        o.ignoreRender || (this.setStatus(null), this.checkSelectedProject(this.forceFetch), (this.forceFetch = !1));
      },
      setStatus: function (t) {
        (this.projectStatus = t), m.trigger("todo:loadingStateChange", t);
      },
      fetch: function (t) {
        this.loading = !0;
        var e,
          o,
          i = this;
        if (!this.isDummy)
          return (
            (e = t || {}),
            this.provider && (((o = {}).data = { provider_id: this.provider.id }), (e = _.extend(e, o))),
            (e.error = function () {
              (this.externallyFetchedOnce = !0),
                i.setStatus({ status: "error", message: "Trouble connecting…", actionMessage: "Retry", action: "todo.connection.retry" });
            }),
            ((e && null != e.reset) || (this.projectStatus && "loading" != this.projectStatus.status)) &&
              this.setStatus({ status: "loading", message: "Loading..." }),
            (e.provider = this.provider),
            m.collect.SyncedCollection.prototype.fetch.call(this, e)
          );
        t &&
          t.reset &&
          setTimeout(function () {
            i.trigger("reset");
          });
      },
      collectionChanged: function () {
        this.setStatus(null), this.checkSelectedProject(this.forceFetch), (this.forceFetch = !1);
      },
      selectedProject: function () {
        var t;
        return this.selectedProjectId && this.findWhere({ id: this.selectedProjectId })
          ? this.findWhere({ id: this.selectedProjectId })
          : ((t = this.findWhere({ selected: !0 }))
              ? this.selectItem(t.id)
              : this.models.length && ((t = this.models[0]), this.selectItem(t.id)),
            t || null);
      },
      checkSelectedProject: function () {
        var t, e;
        this.selectedProjectId ||
          ((e = null),
          (t = this.selectedProjectCacheKey()) &&
            localStorage.getItem(t) &&
            ((t = localStorage.getItem(t)), (e = this.findWhere({ id: t }))),
          !(e = e || this.findWhere({ selected: !0 })) && 0 < this.models.length
            ? ((e = this.models[0]), this.selectItem(e.id))
            : e
            ? this.selectItem(e.id)
            : this.selectItem(null));
      },
      selectItem: function (t) {
        var e;
        t != this.selectedProjectId &&
          ((e = this.findWhere({ id: this.selectedProjectId })) && e.resetSelection(),
          (e = this.selectedProjectCacheKey()) && localStorage.setItem(e, t),
          (this.selectedProjectId = t),
          this.trigger("selectionChanged"),
          null != t) &&
          this.externallyFetchedOnce &&
          this.selectedProject().doFetchIfNeeded();
      }
    })),
    (v.collect.ProviderTodoProjectsAll = Backbone.Collection.extend({
      url: m.globals.urlRoot + "todos/projects/all",
      loadedFromCache: !1,
      projectStatus: null,
      initialize: function (t, e) {
        (this.model = v.models.TodoProject), this.listenTo(this, "sync", this.collectionSync), (this.provider = e.provider);
      },
      comparator: "order",
      collectionSync: function (t, e, o) {
        o.ignoreRender || ((this.loaded = !0), (this.loading = !1));
      },
      doFetchIfNeeded: function (t) {
        return t || (!this.loaded && !this.loading) ? (this.fetch(), !(this.loading = !0)) : !!this.loaded || void 0;
      },
      parse: function (t) {
        return (
          t.aux_data_cmd && (this.aux_data_cmd = t.aux_data_cmd),
          t.aux_data && (this.aux_data = t.aux_data),
          Array.isArray(t) ? t : t.projects
        );
      },
      fetch: function (t) {
        var e,
          o = this,
          t = t || {};
        return (
          (t.reset = !0),
          this.provider &&
            (((e = {}).data = { provider_id: this.provider.id }),
            m.models.customization.get("archived-" + this.provider.id) && (e.data.loadArchived = !0),
            (t = _.extend(t, e))),
          (t.error = function () {
            (o.loading = !1), m.trigger("todo:failedLoadingItems");
          }),
          this.reset(null, { silent: !0 }),
          m.collect.SyncedCollection.prototype.fetch.call(this, t)
        );
      }
    })),
    (v.collect.TodoProviders = m.collect.SyncedCollection.extend({
      loadedOnce: !1,
      initialize: function (t, e) {
        (e = e || {}),
          m.conditionalFeatures.featureEnabled("offlineDataOnly") && (e.offlineOnly = !0),
          (this.model = v.models.TodoProvider),
          (e.idAttribute = "id"),
          (e.name = "todoprovider"),
          (e.model = this.model),
          (e.readOnly = !0),
          (e.apiUrl = m.globals.urlRoot + "todos/providers"),
          m.collect.SyncedCollection.prototype.initialize.call(this, t, e);
      },
      parse: function (t) {
        return t.connected || (Array.isArray(t) ? t : null);
      }
    })),
    (v.collect.TodoProxy = Backbone.Collection.extend({
      initialize: function (t, e) {
        (this.model = v.models.TodoProxy), e && e.parentList && (this.parentList = e.parentList);
      }
    })),
    (v.collect.TodosBase = m.collect.SyncedCollection.extend({
      initialize: function (t, e) {
        m.conditionalFeatures.featureEnabled("offlineDataOnly") && (e.offlineOnly = !0),
          (e = e || {}).parentList &&
            ((this.parentList = e.parentList), this.parentList.project.provider.isMomentum() || (e.onlineOnly = !0)),
          (this.model = v.models.Todo),
          localStorage.showTodoList || (localStorage.showTodoList = !1),
          this.listenTo(m, "newDay", this.onNewDay),
          this.listenTo(this, "reset refresh", this.onCollectionReset),
          this.listenTo(this, "sync", this.onSync),
          this.listenTo(this, "add remove change refresh", this.collectionChanged),
          this.listenTo(this, "reorder", this.reorderItem),
          (e.name = "todo-" + this.parentList.id),
          (e.transientProps = ["isLoading", "saveFailed", "isProxy", "proxyValid", "viewSectionId"]),
          (e.localProps = ["providerId", "projectId", "csListId", "serversideOrder", "order"]),
          (e.model = this.model),
          (e.apiUrl = m.globals.urlRoot + "todos"),
          this.listenTo(this, "reorder", this.reorderItem),
          m.collect.SyncedCollection.prototype.initialize.call(this, t, e);
      },
      onCollectionReset: function () {
        (this.fetchedOnce = !0),
          (this.loadingFromServer = !1),
          this.clearCompleted(),
          this.onLoadingFromServerChanged(),
          this.trigger("loadingFromServerChanged");
      },
      onSync: function (t, e, o) {
        (o && (o.ignoreRender || o.silent)) ||
          ((this.loadingFromServer = !1),
          this.clearCompleted(),
          this.onLoadingFromServerChanged(),
          this.trigger("loadingFromServerChanged"),
          m.trigger("todo:listSync"));
      },
      onNewDay: function () {
        !this.fetchedOnce ||
          (this.parentList &&
            v.models.todoListManager &&
            v.models.todoListManager.activeProvider.selectedList().id !== this.parentList.id) ||
          this.fetch();
      },
      onLoadingFromServerChanged: function () {},
      clearCompleted: function () {},
      collectionChanged: function () {
        localStorage.setItem("todos-updated", m.date()), this.onCollectionChanged();
      },
      onCollectionChanged: function () {},
      completeToday: function () {
        var i = this;
        return this.filter(function (t) {
          var e = t.get("completedDate");
          if (e) {
            var o = "",
              e =
                (e instanceof Date ? (o = m.utils.getDateString(e)) : 1 < (e = e.split("T")).length && (o = e[0]), m.utils.getDateString());
            if (o !== m.date().toISOString().split("T")[0] && o !== e) return !1;
          }
          if (1 == t.get("done") && 0 == t.get("archive") && 0 == t.get("deleted") && t.get("csListId") == i.parentList.id) return !0;
        });
      },
      completedCount: function () {
        return this.completeToday().length;
      },
      activeToday: function () {
        var e = this;
        return this.parentList.isDoneList()
          ? this.where({ deleted: !1, done: !0 })
          : this.filter(function (t) {
              if (
                !(
                  0 != t.get("archive") ||
                  0 != t.get("deleted") ||
                  (e.offlineOnly && t.get("completedDate") && m.utils.getDateString(t.get("completedDate")) !== m.utils.getDateString())
                )
              )
                return (t = t.get("csListId")) == e.parentList.id || !t || "1-##default" == e.parentList.id || void 0;
            });
      },
      done: function () {
        return this.where({ done: !0 });
      },
      deleted: function () {
        return this.where({ deleted: !0 });
      },
      remaining: function () {
        var t = this.activeToday();
        return this.parentList.isDoneList()
          ? t
          : _.filter(t, function (t) {
              return !t.get("done");
            });
      },
      nextOrder: function () {
        return this.length ? this.last().get("order") + 100 : 100;
      },
      comparator: "order",
      create: function (t, e) {
        return null == t.order && (t.order = this.nextOrder()), m.collect.SyncedCollection.prototype.create.call(this, t, e);
      },
      reorderItem: function () {},
      handleOrdering: function (t) {
        var e = [],
          o = this.serverIdAttribute;
        t.map(function (t) {
          e.push(t[o]);
        }),
          this.models.map(function (t) {
            t.save({ serversideOrder: e.indexOf(t.get(o)) }, { ignoreRender: !0, silent: !0 });
          });
      }
    })),
    (v.collect.Todos = v.collect.TodosBase.extend({
      url: m.globals.urlRoot + "todos",
      previousCount: -1,
      listStatus: null,
      firstLoadCompleted: !1,
      reorderItem: function (t, e) {
        this.offlineOnly && this.reorderItemOffline(t, e);
        var o = this,
          i = { operations: [{ REORDER: Object.assign({}, t) }] },
          s = this.findWhere({ id: t.move_id });
        s &&
          (this.setStatus({ status: "loading", message: "Loading..." }),
          s.set({ isLoading: !0 }),
          (t = s.collection.parentList.project),
          (i.providerId = t.provider.id),
          (i.projectId = t.id),
          f
            .ajax({ type: "PATCH", contentType: "application/json", data: JSON.stringify(i), url: m.globals.urlRootApi + "todos" })
            .done(function () {
              s.set({ isLoading: !1 }), o.fetch({ success: e, skipLocalFetch: !o.onlineOnly });
            })
            .fail(function () {
              (s.pendingReorderData = i), s.set({ saveFailed: !0, isLoading: !1 });
            }));
      },
      handleAuthRequired: function (t) {
        this.setStatus({
          status: "error",
          message: "Authentication Required…",
          actionMessage: "Connect",
          action: "auth.connect",
          actionParameter: t
        });
      },
      createOrderGaps: function () {
        var e = 100;
        this.each(function (t) {
          t.save({ order: e }, { silent: !0 }), (e += 100);
        });
      },
      reorderItemOffline: function (t) {
        var e = this.offlineOnly ? this.idAttribute : this.serverIdAttribute,
          o = {},
          i = ((o[e] = t.move_id), this.findWhere(o)),
          e = ((o[e] = t.move_target_id), this.findWhere(o)),
          o = 0 < t.move_offset ? 1 : -1,
          t = this.indexOf(e),
          s = 1,
          t =
            (0 <= t + o &&
              t + o < this.length &&
              ((t = this.at(t + o)), (s = Math.abs(t.get("order") - e.get("order"))) <= 20) &&
              (this.createOrderGaps(), (s = Math.abs(t.get("order") - e.get("order")))),
            e.get("order") + Math.ceil(s / 2) * o);
        i.save({ order: t }, { silent: !0 });
      },
      shouldIgnoreSync: function (t) {
        return !t.get("title") || 0 === t.get("title").length || "empty todo..." === t.get("title");
      },
      onLoadingFromServerChanged: function () {
        this.setStatus("Done"), this.checkRemainingItemCount();
      },
      onCollectionChanged: function () {
        this.checkRemainingItemCount();
      },
      completedCount: function () {
        return this.completeToday().length;
      },
      checkRemainingItemCount: function () {
        var t;
        this.loadingFromServer ||
          ((this.firstLoadCompleted = !0),
          (t = this.remaining().length) != this.previousCount && ((this.previousCount = t), this.trigger("remainingCountChanged", t)));
      },
      doFetchIfNeeded: function (t) {
        this.fetchedOnce || this.firstItemFetchStarted
          ? this.fetch(this.moreLoaded ? { remove: !1, listChanged: t } : { listChanged: t })
          : ((this.firstItemFetchStarted = !0), this.fetch({ reset: !0 }));
      },
      loadMore: function (t) {
        (this.moreLoaded = !0),
          this.todoChangedListener || ((this.todoChangedListener = !0), this.listenTo(m, "todo:changed", this.todoChanged)),
          this.fetch({ endDate: t, remove: !1, skipLocalFetch: !0 });
      },
      setStatus: function (t) {
        (this.listStatus = t), m.trigger("todo:loadingStateChange", t);
      },
      parse: function (t) {
        var o;
        if (null != t)
          return t.items
            ? (t.sections ? (this.itemSections = t.sections) : (this.itemSections = null),
              t.hasOldTodos ? (this.hasOldTodos = t.hasOldTodos) : (this.hasOldTodos = !1),
              t.menu_options ? (this.menuOptions = t.menu_options) : (this.menuOptions = null),
              t.default_commands ? (this.defaultCommands = t.default_commands) : (this.defaultCommands = null),
              (this.noAssigned = t.noAssigned),
              (this.groupingInfo = t.groupingInfo),
              (this.statuses = t.statuses),
              (o = this.parentList.get("item_order")) &&
                t.items.forEach(function (t) {
                  var e = o.indexOf(t.id.substr(2)) + 1;
                  0 < e && (t.order = 100 * e);
                }),
              t.items)
            : t;
      },
      todoChanged: function (t) {
        this.moreLoaded && (t = this.get(t)) && t.fetch();
      },
      activeToday: function () {
        var o = this,
          t = [];
        return this.parentList.isDoneList() && m.conditionalFeatures.featureEnabled("offlineDataOnly")
          ? ((t = this.parentList.project.getDoneTodos() || t), e(o.parentList, t), t)
          : this.parentList.isTodayList() && m.conditionalFeatures.featureEnabled("offlineDataOnly")
          ? ((t = this.parentList.project.getTodayTodos() || t), e(o.parentList, t), t)
          : this.fetchedOnce || this.firstItemFetchStarted
          ? this.parentList.isDoneList()
            ? !o.parentList.showAssignedTodosOnly || item.get("assigned")
              ? ((t = this.where({ deleted: !1, done: !0 })), e(o.parentList, t), t)
              : void 0
            : ((t = this.filter(function (t) {
                var e;
                if (
                  (!o.parentList.showAssignedTodosOnly || t.get("assigned")) &&
                  (!t.get("today") || o.parentList.isTodayList()) &&
                  (t.get("today") || !o.parentList.isTodayList()) &&
                  t.get("title") &&
                  0 !== t.get("title").length
                )
                  return (
                    (!(
                      t.get("archive") ||
                      t.get("deleted") ||
                      (t.get("completedDate") && m.utils.getDateString(Date.parse(t.get("completedDate"))) !== m.utils.getDateString())
                    ) &&
                      (!(!((e = t.get("csListId")) === o.parentList.id || (t.get("today") && o.parentList.isTodayList())) && e) ||
                        "1-##default" === o.parentList.id)) ||
                    void 0
                  );
              })),
              e(o.parentList, t),
              t)
          : (setTimeout(function () {
              o.parentList.collection && o.parentList.doFetchIfNeeded();
            }, 10),
            []);
        function e(e, t) {
          var o = 0;
          t.map(function (t) {
            (t.get("done") && !e.isDoneList()) || o++;
          }),
            setTimeout(function () {
              var t = e.isComputed ? "set" : "save";
              e.collection && e[t]({ count: o }, { silent: !0, ignoreRender: !0 });
            }, 1);
        }
      },
      fetch: function (t) {
        var e = this;
        if (((t = t || {}), !this.offlineOnly)) {
          if (this.loadingFromServer) return;
          this.loadingFromServer = !0;
        }
        var o = { data: {} };
        return (
          this.parentList &&
            this.parentList.get("id") &&
            ((o.data.listId = this.parentList.get("id")), (o.data.providerId = this.parentList.project.provider.get("id"))),
          this.parentList.project && !this.parentList.project.get("isDummy") && (o.data.projectId = this.parentList.project.get("id")),
          0 == Object.keys(o.data).length && (t.skipServerFetch = !0),
          m.models.customization.get("assigned-" + this.parentList.id) && (o.data.loadMineOnly = !0),
          m.models.customization.get("subtask-" + this.parentList.id) && (o.data.loadSubtasks = !0),
          m.models.customization.get("showOld-" + this.parentList.id) && (o.data.loadOldCompleted = !0),
          t && t.endDate && ((o.data = o.data || {}), (o.data.endDate = t.endDate)),
          (o.error = function () {
            (e.loadingFromServer = !1),
              e.setStatus({ status: "error", message: "Trouble connecting…", actionMessage: "Retry", action: "todo.connection.retry" });
          }),
          (t = _.extend(t, o)) && null != t.reset
            ? (this.setStatus({ status: "loading", message: "Loading...", listChanged: t.listChanged }), (this.moreLoaded = !1))
            : this.listStatus &&
              "loading" != this.listStatus.status &&
              this.setStatus({ status: "loading", message: "Loading...", listChanged: t.listChanged }),
          (t.parentList = this.parentList),
          m.collect.SyncedCollection.prototype.fetch.call(this, t)
        );
      }
    })),
    (v.collect.TopDropdownMenuItems = Backbone.Collection.extend({
      url: m.globals.urlRoot + "settings/todo/menu",
      fetchCompleted: !1,
      initialize: function (t, e) {
        (this.model = v.models.DropdownMenuItem), e && e.listId && (this.listId = e.listId);
      },
      parse: function (t) {
        return Array.isArray(t) ? t : t.menuoptions;
      },
      fetchIfRequired: function (t) {
        var e;
        return (
          !this.fetchCompleted &&
          ((e = {
            data: {},
            reset: (this.fetchCompleted = !0),
            error: function () {
              self.fetchCompleted = !1;
            }
          }),
          t && (e.data.providerId = t),
          this.fetch(e),
          !0)
        );
      },
      queueFetch: function () {
        this.fetchCompleted = !1;
      },
      fetch: function (t) {
        return this.listId
          ? ((additionalData = { listId: this.listId }),
            (t.data = _.extend(t.data || {}, additionalData)),
            Backbone.Collection.prototype.fetch.call(this, t))
          : null;
      }
    })),
    (v.models.DropdownMenuItem = Backbone.Model.extend({})),
    (v.models.TodoBase = Backbone.Model.extend({
      idAttribute: "csid",
      isTrue: function (t) {
        t = this.get(t);
        return void 0 !== t && 1 == t;
      },
      getOrder: function () {
        return this.get("serversideOrder") || 0 === this.get("serversideOrder") ? this.get("serversideOrder") : this.get("order");
      },
      attemptSave: function () {},
      retrySave: function () {
        this.get("isProxy")
          ? this.collection.parentList && this.collection.parentList.createNewModel && this.collection.parentList.createNewModel(this)
          : this.attemptedSaveValues && this.attemptSave(this.model);
      },
      getValue: function (t) {
        var e = null;
        return (e =
          (e = this.attemptedSaveValues && this.attemptedSaveValues.hasOwnProperty(t) ? this.attemptedSaveValues[t] : e) || this.get(t));
      },
      isSibling: function (t) {
        return t.get("parentId") == this.get("parentId");
      }
    })),
    (v.models.Todo = v.models.TodoBase.extend({
      defaults: function () {
        return {
          title: "empty todo...",
          done: !1,
          archive: !1,
          order: 0,
          createdDate: m.date(),
          archivedDate: null,
          completedDate: null,
          deleted: !1,
          deletedDate: null,
          listId: "inbox",
          serverSetId: !1
        };
      },
      initialize: function (t, e) {
        (e = e || {}),
          (this.serverIdAttribute = this.collection.serverIdAttribute || "id"),
          (this.idAttribute = this.collection.idAttribute || "csid"),
          (this.parentList = (e && e.parentList) || this.collection.parentList),
          (this.id = this.get(this.idAttribute)),
          this.get("csListId") || this.set({ csListId: this.parentList.id }, { silent: !0 }),
          this.listenTo(m, "todo:set:done", this.setDone),
          this.listenTo(m, "todo:set:title", this.setTitle);
      },
      parse: function (t) {
        return t && t.done && t.archive && (t.listId = "1-done"), t;
      },
      setDone: function (t, e) {
        (t !== this.id && t !== this.get("id")) || this.setDoneState(e);
      },
      setTitle: function (t, e) {
        (t !== this.id && t !== this.get("id")) || (this.attemptSave({ title: e }), m.trigger("todo:loadingStateChange", status));
      },
      archive: function () {
        this.setArchiveState(!0);
      },
      setArchiveState: function (t) {
        var e = {};
        (e.archive = void 0 === t ? !this.get("archive") : t),
          e.archive
            ? ((e.archivedDate = m.date()), this.get("done") || ((e.done = !0), (e.completedDate = m.date())))
            : (e.archivedDate = null),
          this.attemptSave(e);
      },
      setDoneState: function (t, e) {
        e = this.getDoneStateChanges(t, e);
        this.attemptSave(e), m.trigger("todo:loadingStateChange", status), t && m.trigger("todo:complete", this);
      },
      getDoneStateChanges: function (t, e) {
        var o = {};
        if (((o.done = void 0 === t ? !this.get("done") : t), o.done)) {
          var t = this.collection.parentList;
          if (t.has("done_disabled")) return void ((t = t.get("done_disabled")).message && m.trigger("todo:status", t));
          (o.completedDate = m.date()), e && ((o.archive = !0), (o.archivedDate = m.date()));
        } else (o.archive = !1), (o.archivedDate = null), (o.completedDate = null);
        return o;
      },
      getTodayStateChanges: function (t) {
        var e = {};
        return (e.today = t) && this.get("archive") && ((e.archive = !1), (e.archivedDate = null)), e;
      },
      setTodayState: function (t) {
        t = this.getTodayStateChanges(t);
        this.attemptSave(t);
      },
      deleteItem: function () {
        this.attemptSave({ deleted: !0, deletedDate: m.date().toISOString() });
      },
      displayConnectingText: function () {},
      successfulConnection: function () {},
      failedConnection: function () {},
      getSupplementaryData: function () {
        var t = this.collection.parentList.project,
          e = {};
        return (e.projectId = this.get("projectId") || t.id), (e.providerId = t.provider.id), e;
      },
      attemptSave: function (t, i, e) {
        var s = this,
          o = (s.displayConnectingText('<i class="loading-icon"></i>Saving...'), { patch: this.collection.onlineOnly }),
          e = ((o.wait = !0), (o.postponeSync = e), this.collection.parentList.project),
          n = (t && ((t.projectId = this.get("projectId") || e.id), (t.providerId = e.provider.id)), !0);
        (o.success = function () {
          n = !1;
          var t = {};
          f.extend(t, s.attemptedSaveValues),
            (s.attemptedSaveValues = null),
            f.extend(t, { saveFailed: !1, isLoading: !1 }),
            m.trigger("todo:changed", s.get("id") || s.id, t),
            setTimeout(function () {
              s.set(t), s.successfulConnection(), i && i(!0);
            }, 50);
        }),
          (o.error = function (t, e) {
            var o;
            (n = !1),
              200 == e.status
                ? (f.extend((o = {}), s.attemptedSaveValues),
                  (s.attemptedSaveValues = null),
                  f.extend(o, { saveFailed: !1, isLoading: !1 }),
                  m.trigger("todo:changed", s.get("id") || s.id, o),
                  setTimeout(function () {
                    s.set(o), s.successfulConnection(), i && i(!0);
                  }, 50))
                : (s.set({ saveFailed: !0, isLoading: !1, deleted: !1, deletedDate: null }),
                  m.trigger("todo:loadingStateChange"),
                  s.failedConnection('Error saving… <span class="retry">Retry</span>'),
                  i && i(!1));
          }),
          (o.ignoreRender = !0),
          t
            ? (s.attemptedSaveValues ? f.extend(s.attemptedSaveValues, t) : (s.attemptedSaveValues = t), s.save(t, o))
            : s.attemptedSaveValues
            ? ((t = s.attemptedSaveValues), s.save(s.attemptedSaveValues, o))
            : s.pendingReorderData &&
              (s.set({ isLoading: !0 }),
              f
                .ajax({
                  type: "PATCH",
                  contentType: "application/json",
                  data: JSON.stringify(s.pendingReorderData),
                  url: m.globals.urlRootApi + "todos"
                })
                .done(function () {
                  (n = !1), s.set({ isLoading: !1, saveFailed: !1 });
                })
                .fail(function () {
                  (n = !1), s.set({ saveFailed: !0, isLoading: !1 });
                })),
          n && f.extend(t, { saveFailed: !1, isLoading: !0 }),
          s.set(t),
          m.trigger("todo:changing", s.get("id") || s.id, t);
      },
      comparator: "order",
      save: function (t, e) {
        (e = e || {}), (t = t || _.clone(this.attributes));
        try {
          var o;
          this.collection &&
            this.collection.parentList &&
            this.collection.parentList.collection &&
            this.collection.parentList.collection.aux_data &&
            f.extend(t, { aux_data: this.collection.parentList.collection.aux_data }),
            this.collection &&
              this.collection.parentList &&
              this.collection.parentList.collection &&
              this.collection.parentList.collection.aux_data_cmd &&
              ((o = m.commandManager.execute(
                this.collection.parentList.collection.aux_data_cmd,
                this,
                this.collection.parentList.collection.aux_data
              )),
              f.extend(t, { aux_data: this.collection.parentList.collection.aux_data, aux_data_result: o }));
        } catch (t) {}
        return Backbone.Model.prototype.save.call(this, t, e);
      },
      fetch: function (t) {
        t = t || {};
        return (
          (t.data = f.param({ projectId: this.get("projectId"), providerId: this.get("providerId"), listId: this.get("listId") })),
          Backbone.Model.prototype.fetch.call(this, t)
        );
      }
    })),
    (v.models.TodoProxy = v.models.TodoBase.extend({
      defaults: function () {
        return { done: !1, isProxy: !0, isLoading: !0, saveFailed: !1, proxyValid: !0 };
      }
    })),
    (v.models.TodoList = Backbone.Model.extend({
      itemFetchStarted: !1,
      showAssignedTodosOnly: !1,
      analytics: new m.Analytics({ feature: "todo" }),
      defaults: { selected: !1, deleted: !1 },
      initialize: function (t, e) {
        e &&
          (e.project ? (this.project = e.project) : this.collection && this.collection.project && (this.project = this.collection.project),
          t.isDummy && Object.assign(this.attributes, this.project.attributes),
          (this.isComputed = t.isComputed));
        var o = this;
        (this.serverIdAttribute = (this.collection && this.collection.serverIdAttribute) || "id"),
          (this.idAttribute = (this.collection && this.collection.idAttribute) || "csid"),
          (this.id = this.get(this.idAttribute) || t[this.idAttribute]),
          (this.itemCollection = new v.collect.Todos(null, { parentList: this, parent: this })),
          this.listenTo(this.itemCollection, "add remove change reset refresh", this.triggerChangeEvent),
          this.listenTo(this.itemCollection, "sync", function () {
            o.itemFetchStarted = !1;
          }),
          this.listenTo(this.itemCollection, "remainingCountChanged", this.remainingCountChanged),
          (this.proxyCollection = new v.collect.TodoProxy(null, { parentList: this })),
          this.listenTo(this.proxyCollection, "add change", this.triggerChangeEvent),
          this.supportsFeature("assigned") && this.refreshShowAssignedTodosOnly();
      },
      saveHandler: function () {
        var e = this;
        this.itemCollection.models.map(function (t) {
          t.save({ unsyncable: !1, listId: e.get(e.serverIdAttribute) }, { silent: !0 }), e.itemCollection.syncToServer();
        });
      },
      isCustom: function () {
        return !this.isDoneList() && !this.isTodayList() && !this.isInboxList();
      },
      getColor: function () {
        if (this.get("color")) return this.get("color");
      },
      supportsFeature: function (t) {
        return (this.get("isDummy") ? this.project : this).get(t + "_support");
      },
      todoItemMenuOptions: function () {
        var t;
        return (
          this.itemCollection.menuOptions && (this._todoItemMenuOptions = new Backbone.Collection(this.itemCollection.menuOptions)),
          this._todoItemMenuOptions ||
            ((t = [
              {
                captionText: "Edit",
                commandId: "todo.edit",
                attributes: [{ name: "data-test", value: "edit-todo-item" }],
                css_class: "no-icon"
              },
              {
                captionText: "Set to Focus",
                commandId: "todo.focus.pin",
                attributes: [{ name: "data-test", value: "todo-set-focus" }],
                css_class: "no-icon"
              },
              { css_class: "line" },
              {
                captionText: "Move to Today",
                commandId: "todo.toggle.today",
                attributes: [{ name: "data-test", value: "toggle-home-list-today" }],
                options: {},
                css_class: "no-icon"
              },
              { captionText: "Move Back", commandId: "todo.undone", options: {}, css_class: "no-icon" },
              { captionText: "Move to...", commandId: "todo.moveTo", css_class: "no-icon" },
              { captionText: "Archive", commandId: "todo.archive", css_class: "no-icon" },
              { css_class: "line" },
              {
                captionText: "Delete",
                commandId: "todo.delete",
                attributes: [{ name: "data-test", value: "delete-todo-item" }],
                css_class: "no-icon"
              }
            ]),
            m.conditionalFeatures.featureEnabled("plus") || t.splice(1, 1),
            (this._todoItemMenuOptions = new Backbone.Collection(t))),
          this._todoItemMenuOptions
        );
      },
      getSortedItems: function () {
        return this.itemCollection.activeToday().sort(function (t, e) {
          return t.getOrder() - e.getOrder();
        });
      },
      toggleSubtasks: function () {
        m.models.customization.get("assigned-" + this.id) || (this.allSubtasksLoaded = !0),
          (this.itemFetchStarted = !0),
          (this.itemCollection.firstLoadCompleted = !1),
          this.itemCollection.fetch({ reset: !0 });
      },
      loadOldCompletedTodos: function () {
        (this.itemFetchStarted = !0), (this.itemCollection.firstLoadCompleted = !1), this.itemCollection.fetch({ reset: !0 });
      },
      showAssignedTodosOnlyChanged: function () {
        this.refreshShowAssignedTodosOnly(),
          this.itemCollection.checkRemainingItemCount(),
          (this.showAssignedTodosOnly && this.loadAssignedTodosOnly) ||
          (!this.allSubtasksLoaded && m.models.customization.get("subtask-" + this.id)) ||
          (this.itemCollection.noAssigned && !this.allFetched)
            ? ((this.loadAssignedTodosOnly = this.showAssignedTodosOnly),
              (this.itemFetchStarted = !0),
              this.loadAssignedTodosOnly && (this.allFetched = !0),
              (this.itemCollection.firstLoadCompleted = !1),
              this.itemCollection.fetch({ reset: !0 }))
            : m.trigger("todo:showAssignedTodosOnlyChanged", this.id),
          !m.models.customization.get("assigned-" + this.id) &&
            m.models.customization.get("subtask-" + this.id) &&
            (this.allSubtasksLoaded = !0);
      },
      refreshShowAssignedTodosOnly: function () {
        this.showAssignedTodosOnly = m.models.customization.get("assigned-" + this.id);
      },
      topMenuItems: function () {
        return (
          this._topMenuItems || (this._topMenuItems = new v.collect.TopDropdownMenuItems(null, { listId: this.id })), this._topMenuItems
        );
      },
      refreshItems: function () {
        this.doFetchIfNeeded(!0);
      },
      doFetchIfNeeded: function (t, e) {
        var o;
        (!t && this.itemFetchStarted) ||
          (this.loadedOnce || ((this.loadAssignedTodosOnly = !1), (this.loadedOnce = !0)),
          m.conditionalFeatures.featureEnabled("offlineDataOnly") || ((this.isComputed = !1), (this.collection.offlineOnly = !1)),
          this.isComputed
            ? (this.isDoneList() &&
                ((o = []),
                this.collection.models.map(function (t) {
                  o = o.concat(t.getDoneTodos());
                }),
                (this.itemCollection.models = o)),
              this.itemCollection.trigger("reset"))
            : ((!t && this.itemFetchStarted) ||
                ((this.itemFetchStarted = !0), this.showAssignedTodosOnly && (this.loadAssignedTodosOnly = !0)),
              this.itemCollection.doFetchIfNeeded(e)));
      },
      triggerChangeEvent: function (t) {
        this.trigger("change", this), m.trigger("todo:globalChange", t);
      },
      getDefaultCommands: function () {
        return this.collection && !this.collection.project.provider.isMomentum()
          ? []
          : this.isDoneList()
          ? [{ commandId: "todo.undone", options: {} }]
          : [{ commandId: "todo.toggle.today", options: {} }];
      },
      isDoneList: function () {
        return "done" === this.get("type");
      },
      isTodayList: function () {
        return "today" === this.get("type");
      },
      isInboxList: function () {
        return "inbox" === this.get("type");
      },
      listType: function () {
        return this.get("type");
      },
      displayConnectingText: function () {},
      successfulConnection: function () {},
      failedConnection: function () {},
      getCount: function () {
        return this.get("count") || this.itemCollection.activeToday().length;
      },
      remainingTodoCount: function () {
        var t = this.get("count");
        return void 0 !== t && null != t ? t : "";
      },
      remainingCountChanged: function (t) {
        var e = this.get("count"),
          o = this.isComputed ? "set" : "save";
        e != t && this.url.length && this[o]({ count: t }, { ignoreSave: !0, ignoreRender: !0 });
      },
      addTodo: function (t) {
        (t.homeListId = this.get(this.serverIdAttribute)),
          this.itemCollection.create(t, { parentList: this, wait: !0 }),
          this.changeCount(!0);
      },
      changeCount: function (t) {
        var e,
          o = this.isComputed ? "set" : "save";
        void 0 === this.get("count")
          ? ((e = this),
            setTimeout(function () {
              e.refreshItems();
            }, 500))
          : this[o]("count", this.get("count") + (t ? 1 : -1));
      },
      supportsReordering: function () {
        return !!this.get("reorder");
      },
      getDoneTodos: function () {
        return this.isDoneList() ? [] : (this.itemCollection.fetch({ silent: !0 }), this.itemCollection.where({ done: !0, deleted: !1 }));
      },
      getTodayTodos: function () {
        return this.isTodayList() ? [] : (this.itemCollection.fetch({ silent: !0 }), this.itemCollection.where({ today: !0, deleted: !1 }));
      },
      groupingInfo: function () {
        return this.isDoneList() ? { type: "date", field: "completedDate" } : this.itemCollection.groupingInfo || null;
      },
      statusColor: function (e) {
        if (this.itemCollection.statuses)
          return this.itemCollection.statuses.find(function (t) {
            return t.status === e;
          }).color;
      },
      createNewModel: function (t, e, o) {
        var i = {},
          s =
            ((o = (o = this.collection && 1 != this.collection.project.provider.id ? !1 : o) || "top" == this.get("defaultTaskPosition")) &&
              (i = { at: 0 }),
            (this.addedToTop = o),
            this.collection.offlineOnly),
          n = this.collection ? this.collection.project.getDefaultList() : this,
          d = n ? n.get("id") : null,
          a = 0;
        if ("bottomOfIncomplete" == this.get("defaultTaskPosition")) {
          for (; a < this.itemCollection.models.length && !this.itemCollection.models[a].get("done"); ) a++;
          i = { at: a };
        }
        var r = null,
          l =
            (t instanceof Backbone.Model
              ? (r = t)
              : ((t.csListId = this.id),
                (t.listId = this.get(this.serverIdAttribute)),
                s && this.isComputed && ((t.listId = d), (t.csListId = d)),
                this.isDoneList() && (t.done = !0),
                this.isTodayList() && (t.today = !0),
                (t.viewSection = this.get("defaultSection")),
                (r = new v.models.TodoProxy(t)),
                this.proxyCollection.add(r, i)),
            this.showAssignedTodosOnly && r.set("assigned", !0),
            r.set("viewSection", this.get("defaultSection")),
            this),
          s =
            (e
              ? l.displayConnectingText('<i class="loading-icon"></i>Retrying...')
              : l.displayConnectingText('<i class="loading-icon"></i>Saving...'),
            r.set({ saveFailed: !1, isLoading: !0 }),
            l.isDoneList() && d ? d : r.get("listId")),
          c = null,
          t =
            (Object.assign(i, {
              wait: !0,
              success: function () {
                r.set("proxyValid", !1),
                  m.trigger("todo:loadingStateChange"),
                  l.analytics.capture("todo add", {
                    provider: l.formattedTodoListProvider(),
                    is_paid_event: l.isCustom(),
                    list: l.formattedTodoListName()
                  });
              },
              serverSuccess: function (t) {
                l.successfulConnection(),
                  o && l.project.provider.isMomentum() && c
                    ? ((c.move_id = t.get("id")),
                      c.move_id &&
                        ((l.waitForReorder = !0),
                        l.itemCollection.reorderItem(c, function () {
                          r.set("proxyValid", !1), (l.waitForReorder = !1), m.trigger("todo:loadingStateChange");
                        })))
                    : r.set("proxyValid", !1);
              },
              error: function () {
                l.failedConnection('Error saving… <span class="retry">Retry</span>'),
                  r.set({ saveFailed: !0, isLoading: !1 }),
                  (r.targetList = l);
              }
            }),
            l.getSortedItems()),
          e =
            (t && 0 < t.length && (c = { move_target_id: t[0].get("id"), move_offset: "-1", list_id: s }),
            (i.parentList = this),
            l.isComputed ? n : l);
        e.itemCollection.create(
          {
            title: r.get("title"),
            csListId: e.get("csid"),
            listId: e.get("id"),
            today: r.get("today"),
            done: r.get("done"),
            assigned: r.get("assigned"),
            homeListId: s,
            viewSection: r.get("viewSection"),
            providerId: this.project.provider.id,
            projectId: this.project.id,
            completedDate: r.get("done") ? m.date() : null,
            unsyncable: !this.get(this.serverIdAttribute)
          },
          i
        );
      },
      formattedTodoListName: function () {
        return this.project.provider.isMomentum() ? (this.isCustom() ? "custom" : this.get("title").toLowerCase()) : "integration";
      },
      formattedTodoListProvider: function () {
        return this.project.provider.isMomentum()
          ? "momentum"
          : this.project.provider.get("provider_title").toLowerCase().split("(")[0].trim();
      }
    })),
    (v.models.TodoListManager = Backbone.Model.extend({
      defaults: { activeTodoList: null },
      initialize: function (t) {
        t && t.prefetchTodos && (this.prefetchTodos = !0),
          (this.todoProviders = new v.collect.TodoProviders(null, { offlineOnly: t && t.offline })),
          this.listenTo(m, "todoListManager:fetch", this.forceFetch),
          this.listenTo(m, "globalEvent:refreshInbox", this.refreshInbox),
          this.listenTo(this.todoProviders, "reset", this.todoProvidersReset),
          this.listenTo(m, "todo:loadingStateChange", this.handleLoadingStateChange);
      },
      handleLoadingStateChange: function () {
        var t = this.activeProvider.selectedList();
        t &&
          t.itemCollection &&
          "Done" === t.itemCollection.listStatus &&
          setTimeout(function () {
            m.trigger("todo:activeListLoaded");
          }, 1);
      },
      setup: function () {
        var o = this,
          i = m.conditionalFeatures.featureEnabled("enhancedtodo-degraded");
        return new Promise(function (t) {
          var e;
          !localStorage.activeTodoProvider || i
            ? t(o.changeProvider("1"))
            : ((e = JSON.parse(localStorage.activeTodoProvider)) && e.id
                ? o.changeProviderAsync(e.id)
                : e
                ? o.changeProviderAsync(e)
                : o.changeProviderAsync("1")
              ).then(t);
        });
      },
      refreshInbox: function () {
        this.activeProvider.selectedProject().getDefaultList() && this.activeProvider.selectedProject().getDefaultList().refreshItems();
      },
      triggerChangeEvent: function () {
        this.trigger("change", this);
      },
      forceFetch: function () {
        this.doFetchIfNeeded(!0);
      },
      doFetchIfNeeded: function (t) {
        (this.externallyFetchedOnce = !0), this.activeProvider.doFetchIfNeeded(t);
      },
      changeProviderAsync: function (o, i) {
        var s = this;
        return new Promise(function (t) {
          var e = s.changeProvider(o, i);
          e
            ? t(e)
            : s.todoProviders.loadedOnce
            ? i
              ? s.todoProviders.fetch({
                  ignoreRender: !0,
                  reset: !0,
                  skipLocalFetch: !0,
                  success: function () {
                    s.changeProviderAsync(o);
                  }
                })
              : t(null)
            : s.listenTo(s.todoProviders, "loaded-from-server", function () {
                t(s.changeProvider(o, !1, !0));
              });
        });
      },
      changeProvider: function (t, e, o) {
        if ("1" === (t = t && t.toString()) || m.conditionalFeatures.featureEnabled("plus"))
          return (
            (e = this.todoProviderDetails(t, e)) && !e.get("supportProjects") && (e.set("supportProjects", !1), e.set("supportLists", !0)),
            e &&
              this.activeProvider !== e &&
              (m.trigger("todo:topmenu:reset"),
              (localStorage.activeTodoProvider = JSON.stringify(e.id)),
              this.activeProvider && this.stopListening(this.activeProvider),
              (this.activeProvider = e),
              this.listenTo(this.activeProvider, "change", this.triggerChangeEvent),
              this.triggerChangeEvent(),
              (this.externallyFetchedOnce || this.prefetchTodos) && this.activeProvider.refreshTodoItems(),
              m.trigger("todo:providerChanged", t)),
            !e && o
              ? (f
                  .ajax({ type: "DELETE", contentType: "application/json", url: m.globals.urlRootApi + "settings/todo/providers/" + t })
                  .done(function () {
                    m.trigger("globalEvent:esc");
                  }),
                this.changeProvider(1))
              : e
          );
        m.cmd("modal.open", "UPSELL_TODO_INTEGRATIONS", { eventSource: "dash" });
      },
      switchProject: function (t) {
        this.activeProvider.selectProject(t, !0);
      },
      getMomoLists: function () {
        var t = this;
        return new Promise(function (e) {
          t.todoProviderDetails("1")
            .getProjectAsync("1")
            .then(function (t) {
              t = t.listCollection;
              0 === t.models.length && t.fetch({ reset: !0 }), e(t);
            });
        });
      },
      todoProvidersReset: function () {
        this.pendingResetCallback && (this.pendingResetCallback(), (this.pendingResetCallback = null));
      },
      resetProvider: function (t) {
        var e, o;
        t || (e = 1),
          t.id ? ((e = t.id.toString()), (o = t)) : (e = e.toString()),
          -1 < e.indexOf(this.activeProvider.id) && this.todoProviders.remove(this.activeProvider),
          this.todoProviders.get(e) || this.todoProviders.create(o || { id: e }),
          this.fetchTodoProviders(),
          this.changeProvider(e);
      },
      todoProviderDetails: function (t, e) {
        var o, i;
        if (((t = (t = t || 1).toString()), this.todoProviders)) {
          if (!(0 < this.todoProviders.length && (o = this.todoProviders.get(t))))
            if (
              ("1" === t &&
                ((i = { id: t, prefetchTodos: this.prefetchTodos, add_lists: !0, supportLists: !0, supportProjects: !1 }),
                this.todoProviders.create(i)),
              !(o = this.todoProviders.get(t)))
            ) {
              for (var s = this.todoProviders.models, n = t + "-", d = 0; d < s.length; d++) if (s[d].get("id").startsWith(n)) return s[d];
              var a = this;
              this.todoProviders.fetch({
                ignoreRender: !0,
                reset: !0,
                skipLocalFetch: e,
                success: function () {
                  e && a.changeProviderAsync(t);
                }
              }),
                (o = this.todoProviders.get(t)) || m.trigger("todo:loadingStateChange", { status: "loading" });
            }
          return o;
        }
      },
      fetchTodoProviders: function (t) {
        var e = this;
        this.fetchingTodoProviders ||
          ((this.fetchingTodoProviders = !0),
          (this.pendingResetCallback = function () {
            t ? t() : e.triggerChangeEvent();
          }),
          this.todoProviders.fetch({ skipLocalFetch: !0, reset: !0 }));
      },
      selectPreviousProvider: function () {
        function t() {
          var t = e.todoProviders.get(e.activeProvider.id);
          t && 0 < (t = e.todoProviders.indexOf(t)) && (t = e.todoProviders.at(t - 1)) && e.changeProvider(t.id);
        }
        var e = this;
        this.todoProviders && (this.todoProviders.loadedOnce ? t() : this.fetchTodoProviders(t));
      },
      selectNextProvider: function () {
        function t() {
          var t = e.todoProviders.get(e.activeProvider.id);
          t && (t = e.todoProviders.indexOf(t)) < e.todoProviders.length - 1 && (t = e.todoProviders.at(t + 1)) && e.changeProvider(t.id);
        }
        var e = this;
        this.todoProviders && (this.todoProviders.loadedOnce ? t() : this.fetchTodoProviders(t));
      }
    })),
    (v.models.TodoProject = Backbone.Model.extend({
      itemFetchStarted: !1,
      defaults: { selected: !1 },
      initialize: function (t, e) {
        e && e.provider
          ? ((this.provider = e.provider), this.set({ providerId: this.provider.id }, { silent: !0 }))
          : this.get("providerId") &&
            v.models.todoListManager &&
            (this.provider = v.models.todoListManager.todoProviderDetails(this.get("providerId"), !0)),
          (this.listCollection = new v.collect.ProjectTodoLists(null, {
            project: this,
            prefetchTodos: this.prefetchTodos,
            isDummy: !(void 0 === this.get("supportLists") ? this.provider : this).get("supportLists")
          })),
          this.listenTo(this.listCollection, "add remove change reset selectionChanged", this.triggerChangeEvent);
      },
      todoItemMenuOptions: function () {
        return (
          this.listCollection.menuOptions && (this._todoItemMenuOptions = new Backbone.Collection(this.listCollection.menuOptions)),
          this._todoItemMenuOptions
        );
      },
      topMenuItems: function () {
        return (
          this._topMenuItems || (this._topMenuItems = new v.collect.TopDropdownMenuItems(null, { listId: this.id })), this._topMenuItems
        );
      },
      resetSelection: function () {
        this.listCollection.selectedListId = null;
      },
      refreshItems: function () {
        this.doFetchIfNeeded(!0);
      },
      triggerChangeEvent: function (t) {
        this.trigger("change", this), m.trigger("todo:globalChange", t);
      },
      doFetchIfNeeded: function (t) {
        (!t && this.fetchStarted) || ((this.fetchStarted = !0), this.listCollection.doFetchIfNeeded(t));
      },
      refreshTodoItems: function () {
        var t = this.selectedList();
        t ? t.refreshItems() : this.listCollection.doFetchIfNeeded(!0);
      },
      getDefaultList: function () {
        return this.getListOfType("inbox");
      },
      getDoneList: function () {
        return this.getListOfType("done");
      },
      getListOfType: function (t) {
        return this.listCollection.getListOfType(t);
      },
      getListById: function (t) {
        return this.listCollection.getListById(t);
      },
      getDoneTodos: function () {
        var e = [];
        return (
          this.listCollection.each(function (t) {
            e = e.concat(t.getDoneTodos());
          }),
          e
        );
      },
      getTodayTodos: function () {
        var e = [];
        return (
          this.listCollection.each(function (t) {
            t.getTodayTodos().map(function (t) {
              e.indexOf(t) < 0 && e.push(t);
            });
          }),
          e
        );
      },
      selectedList: function () {
        return this.listCollection ? this.listCollection.selectedList() : null;
      },
      projectStatus: function () {
        var t;
        return this.listCollection.listStatus || ((t = this.selectedList()) ? t.listCollection.listStatus : null);
      },
      addNewList: function (t, e) {
        t = this.listCollection.create(
          { title: t, allow_move: !0, reorder: !0 },
          { project: this, additionalData: { projectId: this.id, providerId: this.providerId || this.provider.id } }
        );
        this.selectList(t.id), e && e();
      },
      selectList: function (t) {
        this.listCollection.selectItem(t),
          m.Analytics.capture("list switch", {
            feature: "todo",
            provider: this.selectedList().formattedTodoListProvider(),
            is_paid_event: this.selectedList().isCustom(),
            new_value: this.selectedList().formattedTodoListName()
          });
      },
      getNeighboringList: function (t) {
        if (this.listCollection) {
          var e = this.listCollection.selectedList();
          if (e) {
            e = this.listCollection.indexOf(e);
            if ((0 < t && e < this.listCollection.length - 1) || (t < 0 && 0 < e)) return this.listCollection.at(e + t);
          }
        }
        return null;
      },
      selectPreviousList: function () {
        var t = this.getNeighboringList(-1);
        t && this.selectList(t.id);
      },
      selectNextList: function () {
        var t = this.getNeighboringList(1);
        t && this.selectList(t.id);
      }
    })),
    (v.models.TodoProvider = Backbone.Model.extend({
      fetchStarted: !1,
      initialize: function (t) {
        (this.prefetchTodos = this.get("prefetchTodos")),
          void 0 === t.supportLists && ((this.attributes.supportLists = !0), (this.attributes.supportProjects = !1)),
          (this.projectCollection = new v.collect.ProviderTodoProjects(null, {
            provider: this,
            prefetchTodos: this.prefetchTodos,
            isDummy: !this.get("supportProjects")
          })),
          this.get("supportProjects") && (this.allProjectsCollection = new v.collect.ProviderTodoProjectsAll(null, { provider: this })),
          this.listenTo(this.projectCollection, "reset", this.projectsAvailable),
          this.get("supportProjects") && this.listenTo(this.allProjectsCollection, "sync", this.projectsAvailableSynced),
          this.listenTo(m, "globalEvent:altUp", this.altReleased),
          this.listenTo(this.projectCollection, "reset selectionChanged", this.triggerChangeEvent);
      },
      refreshItems: function () {
        this.projectCollection.fetch({ reset: !0 });
      },
      doFetchIfNeeded: function (t) {
        (!t && this.fetchStarted) || ((this.fetchStarted = !0), this.projectCollection.doFetchIfNeeded(t));
      },
      getAllProjects: function () {
        var t;
        return (
          (this.allProjectsCollection && 0 < this.allProjectsCollection.length) ||
            (!(t = localStorage.getItem("cachedTodoProjects-" + this.id)) || this.loadingFromCache || this.allProjectsCollection.loading
              ? this.refreshAllProjects()
              : ((this.loadingFromCache = !0), this.allProjectsCollection.reset(JSON.parse(t)), (this.loadingFromCache = !1))),
          this.allProjectsCollection
        );
      },
      projectsAvailableSynced: function () {
        var i = this;
        this.projectCollection.models.map(function (t, e) {
          var o = i.allProjectsCollection.findWhere({ id: t.get("id") });
          o ? t.set("title", o.get("title")) : (i.projectCollection.models.splice(e, 1), i.projectCollection.length--);
        }),
          this.cacheAllProjects(),
          m.trigger("todo:allProjectsLoaded");
      },
      refreshAllProjects: function (t) {
        this.allProjectsCollectionSynced ||
          ((this.allProjectsCollectionSynced = !0),
          this.allProjectsCollection && this.allProjectsCollection.doFetchIfNeeded(t) && m.trigger("todo:allProjectsLoaded"));
      },
      isMomentum: function () {
        return 1 === this.id || "1" === this.id;
      },
      cacheAllProjects: function () {
        var t = m.date(),
          t = (localStorage.setItem("tsCachedTodoProjects-" + this.id, JSON.stringify(t.getTime())), this.allProjectsCollection.toJSON());
        localStorage.setItem("cachedTodoProjects-" + this.id, JSON.stringify(t));
      },
      projectsAvailable: function () {
        this.selectedProject() && this.selectedProject().doFetchIfNeeded();
      },
      refreshTodoItems: function () {
        var t = this.selectedProject();
        t ? t.refreshTodoItems() : this.doFetchIfNeeded(!0);
      },
      getDefaultList: function () {
        return this.getListOfType("inbox");
      },
      getDoneList: function () {
        return this.getListOfType("done");
      },
      getListOfType: function (t) {
        return this.selectedProject().getListOfType(t);
      },
      getListById: function (t) {
        return this.selectedProject().getListById(t);
      },
      triggerChangeEvent: function () {
        this.trigger("change", this);
      },
      selectedList: function () {
        var t = this.selectedProject();
        return t ? t.selectedList() : null;
      },
      selectedProject: function () {
        return this.projectCollection ? this.projectCollection.selectedProject() : null;
      },
      providerStatus: function () {
        var t;
        return (
          this.projectCollection.projectStatus ||
          ((t = this.selectedProject()) && t.listCollection.projectStatus
            ? t.listCollection.projectStatus
            : (t = this.selectedList())
            ? t.itemCollection.listStatus
            : null)
        );
      },
      selectList: function (t) {
        this.selectedProject().selectList(t);
      },
      getProject: function (t) {
        return this.projectCollection.get(t);
      },
      getProjectAsync: function (e) {
        var o = this;
        return new Promise(function (t) {
          o.projectCollection.loadedOnce
            ? t(o.projectCollection.get(e))
            : (o.projectCollection.loading || o.projectCollection.doFetchIfNeeded(),
              setTimeout(function () {
                o.getProjectAsync(e).then(t);
              }, 50));
        });
      },
      selectProject: function (t, e) {
        var o = this.projectCollection.get(t);
        o
          ? (this.projectCollection.selectItem(t), e && o.set({ last_active: m.date().toISOString() }))
          : this.allProjectsCollection &&
            (o = this.allProjectsCollection.get(t)) &&
            (this.projectCollection.add(o), this.projectCollection.selectItem(t), e) &&
            o.set({ last_active: m.date().toISOString() }),
          e && m.trigger("todo:resetProjectList");
      },
      getNeighboringProject: function (t) {
        var e = this.projectCollection;
        if ((e = e.sortBy("last_active").reverse())) {
          var o = this.selectedProject();
          if (o) {
            o = e.indexOf(o);
            if ((0 < t && o < e.length - 1) || (t < 0 && 0 < o)) return e[o + t];
          }
        }
        return null;
      },
      selectPreviousProject: function () {
        this.altReleased = !1;
        var t = this.getNeighboringProject(-1);
        t && ((this.watchingAlt = !0), this.selectProject(t.id, !1));
      },
      selectNextProject: function () {
        this.altReleased = !1;
        var t = this.getNeighboringProject(1);
        t && ((this.watchingAlt = !0), this.selectProject(t.id, !1));
      },
      altReleased: function () {
        (this.altReleased = !0),
          this.watchingAlt && (this.selectedProject().set({ last_active: m.date().toISOString() }), m.trigger("todo:resetProjectList"));
      }
    })),
    (v.views.AddTodoList = Backbone.View.extend({
      tagName: "ul",
      attributes: { class: "todo-list-add-row" },
      template: v.templates.addtodolist,
      events: {
        keyup: "handleKeyup",
        keydown: "handleKeydown",
        click: "ignoreClick",
        "click #list-new": "handleClick",
        "blur #list-new": "handleBlur"
      },
      initialize: function (t) {
        (this.parent = t.parent), this.listenTo(m, "todo:loadingStateChange", this.render), (this.adding = !1);
      },
      render: function () {
        this.adding = !1;
        var t = !!m.conditionalFeatures.featureEnabled("plus"),
          t =
            (this.$el.html(this.template({ isPlus: t })),
            (this.$inputNewList = this.$("#list-new")),
            (this.$addListIcon = this.$("#add-icon")),
            (this.$loading = this.$(".todo-list-add-loading")),
            this.model.activeProvider.selectedList());
        if (!t || !t.get("add_hidden"))
          return (
            this.$el.is(":disabled") && (this.$el.prop("disabled", !1), this.$el.prop("placeholder", "New List")),
            this.$loading.hide(),
            this.$addListIcon.css("display", "block"),
            this
          );
        this.$el.prop("disabled", !0), this.$el.prop("placeholder", "");
      },
      ignoreClick: function (t) {
        t.stopPropagation(), t.preventDefault();
      },
      handleClick: function (t) {
        t.stopImmediatePropagation(),
          t.preventDefault(),
          m.conditionalFeatures.featureEnabled("plus")
            ? ((this.adding = !0),
              this.$addListIcon.hide(),
              this.$el.addClass("input-mode"),
              this.$inputNewList.attr("placeholder", ""),
              this.focusInputField())
            : (this.$inputNewList.trigger("blur"),
              m.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "dash" }),
              m.trigger("globalEvent:closeDropdowns"));
      },
      handleBlur: function () {
        this.$inputNewList.val() ||
          (this.$inputNewList.attr("placeholder", "    New List").val(""),
          this.$addListIcon.css("display", "block"),
          this.$el.removeClass("input-mode"));
      },
      cancelEdit: function () {
        (this.adding = !1),
          this.$inputNewList.trigger("blur"),
          this.$inputNewList.attr("placeholder", "    New List").val(""),
          this.$addListIcon.css("display", "block");
      },
      createOnEnter: function () {
        var t = m.utils.capitalizeFirstLetter(this.$inputNewList.val());
        t &&
          0 != t.length &&
          0 != t.trim().length &&
          this.model.activeProvider &&
          (this.$inputNewList.val(""),
          this.model.activeProvider.selectedProject().addNewList(t, function () {
            m.trigger("todo:listAdded");
          }),
          m.Analytics.capture("custom list add", { feature: "todo", is_paid_event: !0, location: "dash", provider: "momentum" }),
          (this.adding = !1),
          this.$inputNewList.val(""),
          this.$inputNewList.trigger("blur"),
          this.$loading.css("display", "inline"));
      },
      focusInputField: function () {
        this.$inputNewList.trigger("focus");
      },
      handleKeyup: function (t) {
        13 == t.keyCode ? this.createOnEnter() : 27 == t.keyCode && (t.stopPropagation(), this.cancelEdit(), this.$el.trigger("blur"));
      },
      handleKeydown: function (t) {}
    })),
    (v.views.TodoDropdownMenu = Backbone.View.extend({
      template: v.templates.dropdownmenu,
      expanded: !1,
      renderedOnce: !1,
      menuOptionsFetched: !1,
      events: {
        "click .more-toggle": "toggleDropdown",
        "dblclick .more-toggle": "eatDblClick",
        "click li": "clickMenuItem",
        "click .show-dropdown-detail": "showDropdownDetail",
        "click .dropdown-detail-back": "hideDropdownDetail",
        "mouseover .project-chooser-dropdown": "removeActiveItemClass",
        "mouseleave .project-chooser-dropdown": "addActiveItemClass",
        "click .failed-loading": "retryLoadingItems",
        "click .dropdown-list": "eatDblClick",
        "dblclick .dropdown-list": "eatDblClick"
      },
      initialize: function (t) {
        (this.submenu = null),
          (this.menuItems = t.menuItems),
          (this.loadAllOnExpand = t.loadAllOnExpand),
          (this.parentContext = t.parentContext),
          (this.comparisonNode = t.comparisonNode),
          (this.iClassName = t.iClassName),
          (this.dropdownClassName = t.dropdownClassName),
          (this.providerLogo = t.providerLogo),
          (this.keepOpen = t.keepOpen),
          this.listenTo(this.menuItems, "add remove reset", this.renderMenuOptions),
          this.listenTo(m, "globalEvent:closeDropdowns", this.closeDropdown),
          this.listenTo(m, "globalEvent:esc globalEvent:click", this.closeDropdown),
          this.listenTo(m, "todo:submenuUpdate", this.showDropdownDetail),
          this.listenTo(this.menuItems, "failedLoadingItems", this.failedLoading),
          this.listenTo(m, "todo:providerChanged", this.resetMenuItems),
          (this.subViews = []);
      },
      render: function () {
        var t = {},
          t =
            ((t.providerLogo = this.providerLogo),
            this.iClassName && (t.iClassName = this.iClassName),
            "icon-cog" == this.iClassName && (t.iClassName = ""),
            this.dropdownClassName && (t.dropdownClassName = this.dropdownClassName),
            this.template(t)),
          e =
            (this.$el.html(t),
            (this.$dropdown = this.$el.find(".dropdown").first()),
            (this.$dropdownList = this.$el.find(".dropdown-list").first()),
            (this.$todoProjectDropdown = this.$el.find(".project-chooser-dropdown .dropdown-list")),
            this.isOpen && this.keepOpen && (this.renderMenuOptions(), this.setExpandedState(!0)),
            this);
        this.dropdownClassName.includes("project-chooser-dropdown") &&
          this.$todoProjectDropdown.on("scroll", function () {
            e.refreshItems();
          });
      },
      updateModel: function (t) {
        this.model = t;
      },
      resetMenuItems: function () {
        (this.menuOptionsFetched = !1), (this.isLoading = !1), (this.itemsRefreshed = !1);
        var t = this.expanded;
        delete this.expanded, t && this.setExpandedState(t);
      },
      setExpandedState: function (t, e) {
        var o;
        this.expanded != t &&
          ((this.expanded = null != t ? t : !this.expanded),
          this.$el.toggleClass("active", this.expanded),
          this.$dropdown.closest(".dropdown-parent").toggleClass("dropdown-parent-active", this.expanded),
          (o = this).expanded
            ? (this.$dropdown.css("display", "block"),
              e
                ? (o.$dropdown.css({ opacity: 1, display: "block" }),
                  this.renderMenuOptions(),
                  o.ensureVisible(o.$dropdown.height()),
                  this.$dropdown.hasClass("project-chooser-dropdown") && o.forceScrollableHeight(o.$dropdown))
                : (o.renderMenuOptions(),
                  o.$dropdown.css({ opacity: 1, display: "block" }),
                  o.ensureVisible(o.$dropdown.height()),
                  o.$dropdown.hasClass("project-chooser-dropdown") && o.forceScrollableHeight(o.$dropdown)),
              (this.isOpen = !0))
            : (this.$dropdown.css("opacity", 0),
              this.hideDropdownDetail(null),
              (this.isOpen = !1),
              setTimeout(function () {
                o.$dropdown.css("opacity") < 0.7 && o.$dropdown.hide();
              }, 300)),
          this.$el.closest("li.todo-item").toggleClass("active", this.isOpen));
      },
      forceScrollableHeight: function (t) {
        var e;
        t.find(".dropdown-list").children().length <= 7
          ? ((e = t.height()), t.addClass("short-list"), t.find(".dropdown-list").css("max-height", e))
          : t.removeClass("short-list");
      },
      eatDblClick: function (t) {
        t && (t.preventDefault(), t.stopPropagation());
      },
      closeDropdown: function (t) {
        this != t && !0 === this.expanded && this.setExpandedState(!1);
      },
      attachMenuItems: function (t, e) {
        (this.isLoading = !1),
          this.menuItems && this.menuItems != e && this.stopListening(this.menuItems),
          this.$el[0] != t[0] && (this.setElement(t), (this.renderedOnce = !1)),
          this.menuItems != e &&
            ((this.menuItems = e),
            this.listenTo(this.menuItems, "add remove reset", this.renderMenuOptions),
            (this.menuOptionsFetched = !1)),
          this.render();
      },
      renderMenuOptions: function () {
        var t,
          o,
          i,
          s,
          n = this;
        (this.items = this.getActiveMenuOptions()),
          this.items && 0 < this.items.length
            ? (this.$dropdownList.html(""),
              (t = this.items.filter(function (t) {
                return m.commandManager.canExecute(t.get("commandId"), n.model, t.get("options"), n.parentContext);
              })),
              0 < (o = t.length) &&
                ((i = 0),
                (s = null),
                _.each(t, function (t) {
                  var e = t.get("css_class");
                  (e && "line" == e && ("line" == s || "header" == s)) ||
                    ("line" != e || (0 != i && i != o - 1) ? ((t = n.buildMenuItem(t)), n.$dropdownList.append(t)) : (i += 1),
                    (i += 1),
                    (s = e));
                })))
            : 0 == this.items && n.$dropdownList.html('<li class="loading"><i class="loading-icon"></i> Loading...</li>'),
          10 < n.$dropdownList.height() &&
            (m.trigger("todolist:updateHeight", n.$dropdownList.height() + 5), this.ensureVisible(this.$dropdown.height())),
          (this.menuOptionsFetched = !0);
      },
      buildMenuItem: function (t) {
        var e,
          o = m.commandManager.getProperties(t.get("commandId"), this.model, t.get("options"), this.parentContext),
          o = (o && o.captionText && (d = o.captionText), t.get("css_class")),
          i = t.get("attributes"),
          s = f("<li/>"),
          n =
            (s.addClass("dropdown-list-item"),
            t.id ? s.attr("data-itemid", t.id) : s.attr("data-itemid", t.cid),
            t.get("toolTip") && s.attr("title", t.get("toolTip")),
            f("<span/>")),
          d =
            (n.addClass("dropdown-list-label"),
            n.text(d || t.get("captionText")),
            s.append(n),
            t.get("dataTest") && s.attr("data-test", t.get("dataTest")),
            t.get("plusFeature") && !m.conditionalFeatures.featureEnabled("plus") && s.append('<span class="badge badge-plus">PLUS</span>'),
            t.get("imageUrl") &&
              ((d = f('<div class="dropdown-list-icon-wrapper"></div>')),
              s.prepend(d),
              (e = f("<img />")).addClass("dropdown-list-icon icon icon-" + t.get("captionText")),
              e.attr("src", t.get("imageUrl")),
              d.prepend(e)),
            t.get("color") || (t.getColor && t.getColor()));
        return (
          d && ((e = f("<span />")).html("&nbsp;"), e.addClass("list-color menu-item-color"), e.css("background-color", d), s.prepend(e)),
          t.get("todoIcon") && (($svg = t.get("todoIcon")), s.prepend($svg)),
          t.get("checkStateCmd") &&
            ((d = m.commandManager.execute(t.get("checkStateCmd"), this.model, t.get("options"), this.parentContext)),
            t.get("todoIcon")
              ? d
                ? s.children().first().addClass("active")
                : s.children().first().removeClass("active")
              : d && s.prepend('<i class="icon icon-check dropdown-list-icon"></i>'),
            t.get("captionTextOff")) &&
            t.get("captionTextOn") &&
            n.text(d ? t.get("captionTextOff") : t.get("captionTextOn")),
          i &&
            i.forEach(function (t) {
              s.attr(t.name, t.value);
            }),
          o && s.addClass(o),
          s
        );
      },
      getActiveMenuOptions: function () {
        return (
          !(this.menuItems && this.menuItems.fetchIfRequired && this.menuItems.fetchIfRequired(this.model.collection.provider.id)) &&
          this.menuItems
        );
      },
      toggleDropdown: function (t) {
        t && (t.stopPropagation(), t.preventDefault()),
          this.expanded || m.trigger("globalEvent:closeDropdowns", this),
          this.loadAllOnExpand && !this.expanded && this.showAllAvailableItems(),
          this.setExpandedState(!this.expanded);
      },
      clickMenuItem: function (t) {
        t.preventDefault(), t.stopPropagation();
        var i,
          s,
          t = f(t.delegatedTarget).data("itemid");
        t &&
          this.items &&
          void 0 !== (t = (i = null == (i = this.items.get(t)) ? this.submenu.items.get(t) : i).get("commandId")) &&
          ((s = this),
          m.commandManager.getCommandAsync(t).then(function (t) {
            var e = s.isOpen,
              o = ((s.isOpen = !1), t.execute(s.model, i.get("options"), s.parentContext));
            (s.isOpen = e),
              t.getSubmenu && (s.submenu = t.getSubmenu()),
              i.get("checkStateCmd") && s.renderMenuOptions(),
              o || s.closeDropdown(),
              t.getSubmenu &&
                s.submenu &&
                (s.listenTo(s.submenu.items, "sync", s.showDropdownDetail),
                s.submenu.items.fetchIfRequired && s.submenu.items.fetchIfRequired(s.parentContext.id),
                s.showDropdownDetail());
          }));
      },
      ensureVisible: function (t) {
        var e,
          o,
          i = f(this.comparisonNode);
        this.comparisonNode && this.$dropdown && this.expanded
          ? ((e = this.$dropdown.closest(".todo-item")),
            (t = t) > i.height() &&
              ((o = Math.min(t + 5, document.body.getBoundingClientRect().height - 150)), m.trigger("todolist:updateHeight", o)),
            (o = i.offset().top + i.height() - (e.offset().top + e.height() + t)) < 4
              ? this.$dropdown.css({ top: Math.max(i.offset().top - e.offset().top, 18 + o) + "px", right: "40px" })
              : this.$dropdown.css({ top: "28px" }),
            this.$dropdown.css({ bottom: "auto", display: "block" }))
          : this.$dropdown && !this.expanded && m.trigger("todolist:updateHeight", 0);
      },
      showDropdownDetail: function () {
        var o, i, t, s, e, n;
        this.submenu &&
          ((i = f((o = this).$el.find(".dropdown-detail")[0])).html(""),
          this.submenu.items && 0 < this.submenu.items.length
            ? (i.removeClass("todo-provider-loading"),
              this.$dropdown.hasClass("todo-actions-dropdown") && this.$el.find(".dropdown").addClass("list-integrations"),
              (t = this.submenu.items.length),
              (e = this.submenu.title)
                ? i.append(f('<li class="dropdown-list-item dropdown-detail-back dropdown-title">' + e + "</li>"))
                : i.append(
                    f(
                      '<li class="dropdown-list-item dropdown-detail-back dropdown-list-label"><i class="icon icon-left dropdown-detail-title-back"></i></li>'
                    )
                  ),
              0 < t &&
                ((s = null),
                (e = this.submenu.items.models.filter(function (t) {
                  return m.commandManager.canExecute(t.get("commandId"), o.model, t.get("options"), o.parentContext);
                })),
                _.each(e, function (t) {
                  var e = t.get("css_class");
                  (e && "line" == e && ("line" == s || "header" == s)) || ((t = o.buildMenuItem(t)), i.append(t), (s = e));
                })),
              (n = this.$el.find(".dropdown-detail").height()),
              m.trigger("todolist:updateHeight", n),
              this.$el.find(".dropdown").addClass("show-detail").height(n),
              setTimeout(function () {
                o.ensureVisible(n + 20);
              }, 0))
            : (i.addClass("todo-provider-loading"),
              i.append(f('<li class="loading dropdown-detail-back dropdown-title u--no-hover">Loading...</li>')),
              this.$el.find(".dropdown").addClass("show-detail")));
      },
      hideDropdownDetail: function () {
        var t = this.$el.find(".dropdown-list").height();
        m.trigger("todolist:updateHeight", t + 20),
          this.$el.find(".dropdown").removeClass("show-detail").removeClass("list-integrations").height("auto");
        this.ensureVisible(t + 20);
      },
      removeActiveItemClass: function () {
        this.$el.find(".active-item").removeClass("highlighted");
      },
      addActiveItemClass: function () {
        this.$el.find(".active-item").addClass("highlighted");
      },
      showAllAvailableItems: function () {
        this.isLoading || ((this.isLoading = !0), this.trigger("showAllItems"));
      },
      failedLoading: function () {
        this.menuItems.pop(),
          this.menuItems.add({ captionText: "Trouble connecting... Retry", css_class: "message failed-loading no-icon" });
      },
      retryLoadingItems: function () {
        this.menuItems.pop(),
          this.menuItems.add({ captionText: "Loading...", css_class: "loading-dropdown u--no-hover" }),
          this.showAllAvailableItems();
      },
      refreshItems: function () {
        this.itemsRefreshed || (this.trigger("refreshItems"), (this.itemsRefreshed = !0));
      }
    })),
    (v.views.NewTodoInput = Backbone.View.extend({
      events: { keyup: "handleKeyup", keydown: "handleKeydown", focus: "mobileOnlyUpdateTodoListHeight", blur: "onMobileBlur" },
      initialize: function (t) {
        (this.parent = t.parent),
          (this.todoList = t.todoList),
          this.listenTo(m, "todo:loadingStateChange", this.render),
          m.utils.isTouchDevice() || this.listenTo(m, "todo:listAdded", this.focusInputField);
      },
      render: function () {
        var t = this.model.activeProvider.selectedList(),
          e = this.model.activeProvider.selectedProject();
        if (t) {
          if (t.get("add_hidden")) return this.$el.prop("disabled", !0), void this.$el.prop("placeholder", "");
          t.get("todo_type") || (e && e.get("todo_type"))
            ? ((e = "New " + (e.get("todo_type") ? e : t).get("todo_type")),
              this.$el.prop("disabled", null),
              this.$el.prop("placeholder", e))
            : (this.$el.prop("disabled", null),
              this.$el.prop("placeholder", "New Todo"),
              this.$el.prop("title", "Use " + m.utils.getMetaKeyName() + "-Enter to create a todo at top of the list"));
        }
        this.$el.is(":disabled") && (this.$el.prop("disabled", null), this.$el.prop("placeholder", "New Todo"));
      },
      onMobileBlur: function () {
        m.utils.isTouchDevice() && (this.createOnEnter(), this.mobileOnlyUpdateTodoListHeight());
      },
      mobileOnlyUpdateTodoListHeight: function () {
        var t;
        m.utils.isTouchDevice() &&
          ((t = function () {
            clearTimeout(this.resizeTimeout),
              (this.resizeTimeout = setTimeout(function () {
                m.trigger("todolist:updateHeight"), window.visualViewport.removeEventListener("resize", t);
              }, 100));
          }.bind(this)),
          window.visualViewport.addEventListener("resize", t));
      },
      createOnEnter: function (t) {
        var e, o;
        this.todoList.isLoading() ||
          ((e = this.model.activeProvider.selectedList()).isCustom() && !m.conditionalFeatures.featureEnabled("plus")
            ? m.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "dash" })
            : (o = this.$el.val()) &&
              0 !== o.length &&
              0 !== o.trim().length &&
              e &&
              (e.changeCount(!0), (this.$el[0].value = ""), (t = t && (t.ctrlKey || t.metaKey)), e.createNewModel({ title: o }, !1, t)));
      },
      focusInputField: function () {
        this.$el.trigger("focus");
      },
      handleKeyup: function (t) {
        t.stopPropagation(), 27 === t.keyCode && this.$el.trigger("blur");
      },
      handleKeydown: function (t) {
        var e,
          o = null;
        13 === t.keyCode
          ? this.createOnEnter(t)
          : 32 === t.keyCode
          ? (o = "globalEvent:spacebar")
          : 37 === t.keyCode
          ? (o = "globalEvent:arrowLeft")
          : 39 === t.keyCode && (o = "globalEvent:arrowRight"),
          !o ||
            ((e = this.$el.val()) && 0 !== e.length && 0 !== e.trim().length) ||
            (t.preventDefault(), t.stopPropagation(), m.trigger(o, t));
      }
    })),
    (v.views.TodoItem = Backbone.View.extend({
      attributes: { class: "todo-item", "data-test": "todo-item" },
      tagName: "li",
      template: v.templates.todoitem,
      analytics: new m.Analytics({ feature: "todo" }),
      events: {
        "click .todo-item-checkbox": "toggleDone",
        dblclick: "edit",
        "keypress .editing": "handleInput",
        "keypress .todo-item-title": "handleInput",
        "blur .todo-item-title": "saveEdit",
        "click .error-icon": "retrySave",
        dragstart: "dragstart",
        dragenter: "dragenter",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave"
      },
      editing: !1,
      renderedOnce: !1,
      initialize: function (t) {
        (this.parent = t.parent),
          (this.provider = t.provider),
          (this.listId = t.list_id),
          (this.menu_options = t.menu_options),
          (this.selectedList = this.provider.selectedList()),
          (this.isDoneList = this.selectedList.isDoneList());
        var e = this;
        (this.isTodayList = this.selectedList.isTodayList()),
          this.listenTo(this.model, "change", function () {
            e.render();
          }),
          this.listenTo(this.model, "todo:edit", this.edit),
          this.listenTo(this.model, "todo:close", this.toggleDone),
          this.listenTo(this.model, "todo:open", this.toggleDone),
          this.listenTo(m, "todo:refresh", this.refreshTodo);
      },
      refreshTodo: function (t) {
        t && t == this.model.id && this.model.fetch();
      },
      render: function (t) {
        return (
          (this.selectedList = this.provider.selectedList()),
          (this.isDoneList = this.selectedList.isDoneList()),
          (this.isTodayList = this.selectedList.isTodayList()),
          this.model.get("deleted")
            ? this.hideTodoItem(t)
            : !(
                this.isDoneList ||
                ((this.model.get("csListId") == this.selectedList.id || (this.isTodayList && this.model.get("today"))) &&
                  !this.model.get("archive"))
              ) ||
              (this.isDoneList && !this.model.get("done")) ||
              (!this.isTodayList && !this.isDoneList && this.model.get("today")) ||
              (this.isTodayList && !this.model.get("today"))
            ? this.hideTodoItem(t)
            : ((t = m.utils.captionFormatter(this.model.getValue("title"))),
              this.renderedOnce
                ? this.$title.text(t)
                : (this.$el.html(this.template({ title: t })),
                  (this.$title = this.$el.find(".todo-item-title").first()),
                  (this.$checkbox = this.$el.find(".todo-item-checkbox").first()),
                  (this.renderedOnce = !0)),
              this.$checkbox.prop("checked", this.model.isTrue("done")),
              this.$el.toggleClass("done", this.model.isTrue("done")),
              this.$el.toggleClass("loading", this.model.isTrue("isLoading")),
              this.$el.toggleClass("failed", this.model.isTrue("saveFailed")),
              this.$el.attr("data-todo-id", this.model.id),
              this.model.isTrue("isProxy")
                ? (this.$el.addClass("isproxy"), this.$el.data("cid", this.model.cid))
                : (!this.selectedList.supportsReordering() && !this.selectedList.get("boardId")) ||
                  this.model.get("noMove") ||
                  this.$el.prop("draggable", "true"),
              this.menu_options &&
                "subsection" != this.model.get("viewType") &&
                ((t = f(this.$el.find(".more")[0])),
                this.topMenuDropdownView ||
                  (this.topMenuDropdownView = new v.views.TodoDropdownMenu({
                    el: t,
                    iClassName: "icon-ellipsis",
                    dropdownClassName: "todo-item-dropdown",
                    menuItems: this.menu_options,
                    model: this.model,
                    parentContext: this.provider,
                    comparisonNode: this.parent.$el
                  })),
                this.topMenuDropdownView.render()),
              "subsection" == this.model.get("viewType") && this.$el.addClass("todo-subsection"),
              this.model.get("viewSectionId") && this.$el.attr("data-view-section-id", this.model.get("viewSectionId"))),
          this
        );
      },
      hideTodoItem: function (t) {
        this.$el.html(""),
          this.$el.hide(),
          this.stopListening(m, "globalEvent:spacebar"),
          this.parent && !t && this.parent.checkForEmptyState();
      },
      isHidden: function () {
        return !this.$el.is(":visible");
      },
      scrollIntoView: function () {
        this.parent.isScrolling && this.$el[0].scrollIntoView(!1);
      },
      destroy: function () {
        this.stopListening(), this.remove(), this.unbind();
      },
      abortEdit: function () {
        this.editing &&
          (this.parent.toggleScroll(!0), this.$el.removeClass("editing"), this.$title.text(this.originalText), (this.editing = !1));
      },
      setEditable: function (t, e) {
        t.attr("contentEditable", e), t.closest(".todo-item").attr("draggable", !e);
      },
      saveEdit: function () {
        var t;
        this.editing &&
          (this.$el.removeClass("editing"),
          this.parent.toggleScroll(!0),
          !(t = this.$title.text()) || 0 === (t = t.trim()).length ? this.abortEdit() : this.model.attemptSave({ title: t }),
          (this.editing = !1),
          this.setEditable(this.$title, !1),
          this.parent.updateHeight(),
          this.analytics.capture("todo edit", {
            provider: this.selectedList.formattedTodoListProvider(),
            is_paid_event: this.selectedList.isCustom(),
            list: this.selectedList.formattedTodoListName()
          }));
      },
      retrySave: function () {
        this.model.isTrue("isProxy")
          ? this.model.targetList && this.model.targetList.createNewModel(this.model, !0)
          : (this.model.attemptedSaveValues || this.model.pendingReorderData) && this.model.attemptSave();
      },
      edit: function (t) {
        this.editing ||
          (this.selectedList.isCustom() && !m.conditionalFeatures.featureEnabled("plus")
            ? m.cmd("modal.open", "UPSELL_MULTI_TODO", { eventSource: "dash" })
            : ((this.originalText = this.$title.text()),
              t && t.stopPropagation(),
              this.$el.hasClass("isproxy") ||
                this.$el.hasClass("loading") ||
                this.$el.hasClass("failed") ||
                ((this.editing = !0),
                this.parent.toggleScroll(!1),
                this.$el.addClass("editing"),
                this.setEditable(this.$title, !0),
                this.$title.trigger("focus"),
                m.utils.setEndOfContentEditable(this.$title.get(0)))));
      },
      dragstart: function (t) {
        if ((t.stopPropagation(), this.editing || (this.topMenuDropdownView && this.topMenuDropdownView.expanded))) return !1;
        var e;
        (t.originalEvent.dataTransfer.effectAllowed = "move"),
          t.originalEvent.dataTransfer.setData("todo_id", this.model.id),
          !1 === this.model.get("leafNode") &&
            (((e = this.$el.cloneNode(!0)).className = "ghost"),
            (e.style.position = "absolute"),
            (e.style.zIndex = "-1"),
            (e.querySelector(".todo-item-checkbox").style.marginTop = "3px"),
            t.delegatedTarget.appendChild(e),
            t.originalEvent.dataTransfer.setDragImage(e, t.originalEvent.offsetX - 15, t.originalEvent.offsetY + 2)),
          (this.parent.dragmode = "todo"),
          m.trigger("todo:dragging", this),
          ((this.parent.dragging = this).parent.original_index = this.parent.li_index(this.$el, !0)),
          0 !== this.parent.original_index
            ? ((this.parent.$preceeding_item = this.previousSiblingTodo()), (this.parent.preceedingTodoId = this.previousSiblingTodoId()))
            : ((this.parent.$preceeding_item = null), (this.parent.preceedingTodoId = null)),
          this.parent.$placeholder.height(this.parent.dragging.$el.height()),
          this.analytics.capture("todo reorder", {
            provider: this.selectedList.formattedTodoListProvider(),
            is_paid_event: this.selectedList.isCustom(),
            list: this.selectedList.formattedTodoListName()
          });
      },
      dragenter: function (t) {
        if ((t.stopPropagation(), !this.parent.selectedList.get("reorder"))) return !1;
        (t = this.model.collection), (t = t.offlineOnly ? t.idAttribute : t.serverIdAttribute);
        if ("todo" === this.parent.dragmode) {
          if (!this.isSibling(this.parent.dragging.model)) return !0;
          this.parent.dragging.$el.hide(),
            this.parent.li_index(this.parent.$placeholder) < this.parent.li_index(this.$el)
              ? (this.$el.after(this.parent.$placeholder), (this.parent.move_target_id = this.model.get(t)), (this.parent.move_offset = 1))
              : (this.$el.before(this.parent.$placeholder),
                (this.parent.move_target_id = this.model.get(t)),
                (this.parent.move_offset = -1));
          t = this.parent.$placeholder;
          return t.css("display", "list-item"), t.after(this.parent.dragging.$el), !1;
        }
      },
      isSibling: function (t) {
        return this.model.isSibling(t);
      },
      previousSiblingTodo: function () {
        return this.$el.prevAll("li").not(".placeholder").first();
      },
      previousSiblingTodoId: function () {
        return this.$el.prevAll("li").not(".placeholder").first().data("todo-id");
      },
      onMouseEnter: function () {
        (v.views.todoPane.isHovered = !0), this.listenTo(m, "globalEvent:spacebar", this.invokeDefaultCommand);
      },
      onMouseLeave: function () {
        this.stopListening(m, "globalEvent:spacebar", this.invokeDefaultCommand), (v.views.todoPane.isHovered = !1);
      },
      invokeDefaultCommand: function () {
        var e = this,
          t = this.selectedList.getDefaultCommands();
        t &&
          0 < t.length &&
          (t = _.find(t, function (t) {
            return !!m.commandManager.canExecute(t.commandId, e.model, t.options, e.provider);
          })) &&
          (m.commandManager.execute(t.commandId, e.model, t.options, e.provider), this.parent.updateHeight());
      },
      toggleDone: function (t) {
        var e;
        t && t.stopPropagation(),
          this.selectedList.has("done_disabled")
            ? (t && t.preventDefault(), (t = this.selectedList.get("done_disabled")).message && m.trigger("todo:status", t))
            : ((t = !this.model.get("done")),
              this.model.attemptSave({ done: t, completedDate: t ? m.date() : null }),
              m.trigger("todo:complete", this.model),
              this.analytics.capture(t ? "todo complete" : "todo uncomplete", {
                provider: this.selectedList.formattedTodoListProvider(),
                is_paid_event: this.selectedList.isCustom(),
                list: this.selectedList.formattedTodoListName()
              }),
              (this.selectedList.recurseOnDone = !0),
              ((this.selectedList.get("recurse_on_done") && t) ||
                (this.selectedList.get("recurse_on_done") && this.selectedList.get("recurse_on_reopen"))) &&
                this.recurseToggleDone(this.model.id, t),
              this.topMenuDropdownView.resetMenuItems(),
              m.trigger("todo:loadingStateChange", null),
              (e = this.provider.getDoneList()) && !this.selectedList.isDoneList() && e.changeCount(t));
      },
      recurseToggleDone: function (t, e) {
        var o = this;
        this.selectedList.itemCollection.where({ parentId: t }).forEach(function (t) {
          t.save({ done: e, completedDate: m.date() }), o.recurseToggleDone(t.id, e);
        });
      },
      handleInput: function (t) {
        this.editing &&
          (this.parent.updateHeight(), 13 === t.keyCode && (this.saveEdit(), t.preventDefault(), t.stopPropagation()), 27 === t.keyCode) &&
          (t.preventDefault(), t.stopPropagation(), this.abortEdit());
      }
    })),
    (v.views.TodoList = Backbone.View.extend({
      events: {
        dragover: "dragover",
        dragend: "dragend",
        drop: "drop",
        "click .empty-link": "clickEmptyStateLink",
        "click .empty-title": "clickEmptyTitleLink",
        "click .todo-load-more-button": "loadMore",
        "click .todo-section-collapsible": "toggleSection",
        "click .new-todo-button": "showAndFocusTodoInput"
      },
      reordered: !1,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      weekdayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      itemsRendered: !0,
      initialize: function () {
        (this.scrollingAllowed = !0),
          (this.emptyListGreeting = "No todos yet"),
          (this.emptyListSubmessage = "Add a todo to get started"),
          (this.subViews = []),
          (this.isScrolling = !1);
        var t = this;
        (this.$loading = f('<span class="message-fill centered"><i class="loading-icon"></i> Loading...</span>')),
          (this.$inPlaceLoading = f(
            '<span class="message-overlay centered"><i class="loading-icon"></i> <span class="loading-title">Loading...</span></span>'
          )),
          this.listenTo(m, "globalEvent:key:enter", this.handleGlobalEnter),
          this.listenTo(this.model, "change", this.providerChanged),
          this.listenTo(this.model.project, "change", this.providerChanged),
          this.listenTo(m, "todo:loadingStateChange", this.handleTodoLoadingStateChange),
          this.listenTo(m, "todo:providerChanged", this.providerChanged),
          this.listenTo(m, "todo:listChanged", this.providerChanged),
          this.listenTo(m, "todo:showAssignedTodosOnlyChanged", this.showAssignedTodosOnlyChanged),
          this.listenTo(m, "todolist:updateHeight", this.updateHeight),
          this.listenTo(m, "todo:loadingStateChange", this.renderLoading),
          this.listenTo(m, "todo:show-new-todo-button", this.showNewTodoButton),
          this.listenTo(m, "todo:dragging", this.todoDragging),
          this.listenTo(m, "todolist:visible", this.render),
          this.listenTo(m, "appsReady", function () {
            t.renderOnReady && t.render();
          }),
          f(window).on("resize", function () {
            t.updateHeight();
          });
      },
      render: function () {
        var t, e;
        this.$el[0].removeAttribute("data-test-list-loaded"),
          (this.blockListLoadedDebounce = !0),
          (this.rendering = !0),
          this.$el.is(":visible")
            ? (this.renderedOnce ||
                ((this.$placeholder = f("<li></li>").addClass("placeholder")),
                this.$placeholder.appendTo(this.el),
                this.$placeholder.hide(),
                m.conditionalFeatures.featureEnabled("offlineDataOnly") || this.renderLoading({ status: "loading" }),
                (t = this.getHeightLimit()) && this.$el.css("max-height", t + "px"),
                (t = localStorage.getItem("todo-list-min-height")),
                this.$el.css("min-height", t || "22px"),
                (this.renderedOnce = !0)),
              this.$el.addClass("todo-list"),
              this.updateListClass(),
              (e = this),
              this.addAll(function (t) {
                e.renderItems(t),
                  (e.rendering = !1),
                  e.$el.closest(".pane").css("height", "auto"),
                  e.$el.closest(".app").css("height", "auto"),
                  e.setDebouncedListLoading();
              }),
              this.selectedList && !this.selectedList.itemCollection.everLoaded() && this.renderLoading({ status: "loading" }))
            : (this.renderOnReady = !0);
      },
      renderItems: function (t) {
        this.$el.css("max-height", this.$el.height());
        var e = this.model.activeProvider.selectedList(),
          o =
            _.every(this.subViews, function (t) {
              return t.isHidden();
            }) && !this.$(".todo-section").filter(":visible").length;
        !t || o
          ? this.renderEmptyState()
          : (this.$el.removeClass("is-empty"),
            m.trigger("todo:show-input"),
            e &&
              e.isDoneList() &&
              !e.isComputed &&
              0 == this.$el.find(".todo-load-more").length &&
              (this.lastCount && this.lastCount == e.itemCollection.length
                ? this.$el.append('<li class="todo-load-more"><span class="todo-load-more-done" style="text">That\'s all!</span></li>')
                : this.$el.append('<li class="todo-load-more"><span class="button todo-load-more-button">Load More</span></li>')));
        this.$el.css("opacity", 1),
          this.updateHeight(0),
          e && !e.itemCollection.loadingFromServer && e.itemCollection.everLoaded() && this.removeLoading(),
          this.loadTriggered || (m.trigger(v.info.id + ":loadedComplete"), (this.loadTriggered = !0));
      },
      showAndFocusTodoInput: function () {
        this.$el.find(".new-todo-button").css({ opacity: 0 }), m.trigger("todo:show-and-focus-input");
      },
      showNewTodoButton: function () {
        this.$el.find(".new-todo-button").css({ opacity: 1 });
      },
      showAssignedTodosOnly: function () {
        this.model.activeProvider.selectedList().showAssignedTodosOnlyChanged();
      },
      toggleSubtasks: function () {
        this.model.activeProvider.selectedList().toggleSubtasks();
      },
      toggleShowOld: function () {
        this.model.activeProvider.selectedList().loadOldCompletedTodos();
      },
      loadMore: function () {
        this.$el.find(".todo-load-more-button").remove(), this.$el.find(".todo-load-more").prepend(this.$inPlaceLoading);
        var t = this.model.activeProvider.selectedList();
        (this.lastCount = t.itemCollection.length), t.itemCollection.loadMore(this.endDate);
      },
      dismissEmptyState: function () {
        this.emptyStateActive && (this.$el.find(".empty").hide(), m.trigger("todo:show-input"), (this.emptyStateActive = !1));
      },
      checkForEmptyState: function () {
        var t;
        this.subViews &&
          _.every(this.subViews, function (t) {
            return t.isHidden();
          }) &&
          ((t = this).rendering
            ? setTimeout(function () {
                t.render();
              }, 100)
            : this.render());
      },
      renderEmptyState: function () {
        this.$el.addClass("is-empty"),
          (this.emptyListGreeting = "No todos yet"),
          (this.emptyListSubmessage = "Add a todo to get started"),
          (this.overrideListType = null);
        var t,
          e = this.model.activeProvider.selectedList(),
          o = this.model.activeProvider.selectedProject(),
          i =
            (e &&
              (this.updateListClass(), (i = e.get("todo_type")), e.get("todo_type")) &&
              ((this.emptyListGreeting = "No " + i + "s yet"),
              (this.emptyListSubmessage = "Add a new " + i + " to get started"),
              (this.overrideListType = i.charAt(0).toUpperCase() + i.slice(1))),
            o && o.get("todo_type"));
        i &&
          ((this.emptyListGreeting = "No " + i + "s yet"),
          (this.emptyListSubmessage = "Add a new " + i + " to get started"),
          (this.overrideListType = i.charAt(0).toUpperCase() + i.slice(1))),
          e &&
            e.itemCollection &&
            e.itemCollection.firstLoadCompleted &&
            ((o = {}),
            e.has("empty_message")
              ? ((o.message = e.get("empty_message")),
                (o.submessage = e.get("empty_submessage")),
                (o.use_command = !!e.get("empty_command")))
              : "today" == e.listType()
              ? ((o.message = this.emptyListGreeting),
                (i = this.model.activeProvider.selectedProject().getListOfType("inbox")) &&
                  ((o.targetListId = i.id),
                  1 == (i = i.get("count"))
                    ? (o.submessage = "1 todo in Inbox")
                    : 1 < i
                    ? (o.submessage = i + " todos in Inbox")
                    : ((o.submessage = "Switch to Inbox"), (o.message = "Add a todo to get started"))))
              : "inbox" == e.listType()
              ? ((o.message = this.emptyListGreeting),
                (t = this.model.activeProvider.selectedProject().getListOfType("today")) &&
                  ((o.targetListId = t.id), (o.submessage = "Switch to Today"), (o.message = "Add a todo to get started")))
              : "done" == e.listType()
              ? ((o.message = "No completed todos yet"),
                (t = this.model.activeProvider.selectedProject().getListOfType("today")) &&
                  ((o.targetListId = t.id), (o.submessage = "Get started in Today")))
              : e.showAssignedTodosOnly && 0 < e.itemCollection.models.length
              ? ((i = "No tasks assigned to me"),
                e.get("todo_type") && (i = "No " + e.get("todo_type") + "s assigned to me"),
                e.get("project") &&
                  e.get("project").get("todo_type") &&
                  (i = "No " + e.get("project").get("todo_type") + "s assigned to me"),
                (o.message = i))
              : ((o.message = this.emptyListGreeting), (o.submessage = this.emptyListSubmessage)),
            (o.subMessageClickable = o.targetListId || o.use_command),
            (o.listType = this.overrideListType || "Todo"),
            m.trigger("todo:hide-input"),
            this.$el.find("new-todo-button").css({ opacity: 1 }),
            (this.emptyStateActive = !0),
            this.$el.html(v.templates["todo-list-empty-state"](o)),
            (this.itemsRendered = !0),
            this.updateHeight(0));
      },
      setDebouncedListLoading: function () {
        var t = this;
        clearTimeout(this.listLoadedDebounce),
          (this.blockListLoadedDebounce = !1),
          (this.listLoadedDebounce = setTimeout(function () {
            t.blockListLoadedDebounce || t.$el.data("test-list-loaded", "");
          }, 200));
      },
      addedToProxyCollection: function (t, e, o) {
        this.isScrolling || this.$el.addClass("hide-scroll"), this.dismissEmptyState(), this.addOne(t, o ? o.at : null);
      },
      addOne: function (t, e, o, i) {
        var s,
          n = this,
          d = null,
          a = this.model.activeProvider.selectedList(),
          d =
            (a && (d = a.todoItemMenuOptions()),
            new v.views.TodoItem({ model: t, parent: this, menu_options: d, provider: this.model.activeProvider, list_id: a.id })),
          r = (this.subViews.push(d), d.render(i).el),
          i = t.get("parentId");
        if (i) {
          i = this.getTodoSubelementContainer(i);
          (i || this.$el).append(r);
        } else if (1 < t.get("depth")) {
          var i = this.$el.find("li").last().attr("data-todo-id"),
            l = a.itemCollection.where({ id: i }),
            c =
              (0 < l.length &&
                (t.get("depth") == l[0].get("depth") && l[0].get("parentId") && (i = l[0].get("parentId")),
                t.get("depth") <= l[0].get("depth") - 1) &&
                l[0].get("parentId") &&
                ((i = l[0].get("parentId")),
                (c = a.itemCollection.where({ id: i }))[0].get("parentId") && (i = c[0].get("parentId")),
                t.get("depth") == l[0].get("depth") - 2) &&
                l[0].get("parentId") &&
                ((i = c[0].get("parentId")), (l = a.itemCollection.where({ id: i }))[0].get("parentId")) &&
                (i = l[0].get("parentId")),
              t.set("parentId", i),
              this.getTodoSubelementContainer(i));
          c && c.append(r);
        } else if (t.get("isProxy") && a.isDoneList()) f(this.$el.find("li.todo-section")[0]).after(r);
        else if (e || 0 === e) {
          for (var h = -1, p = this.$el.children(), u = 0; h < e; ) {
            var g = f(p[u++]);
            g.hasClass("todo-section") || h++;
          }
          0 <= h ? g.before(r) : this.$el.prepend(r);
        } else this.$el.append(r);
        t.get("isProxy") && t.get("proxyValid")
          ? (this.isScrolling && d.scrollIntoView(),
            (s = !(this.newTodoAdded = !0)),
            n.addedToTop && (n.$el.addClass("drop-top-margin"), (s = !0)),
            m.trigger("todolist:updateHeight"),
            f(r).addClass("transition"),
            setTimeout(function () {
              s && n.$el.removeClass("drop-top-margin"),
                f(r).addClass("visible"),
                setTimeout(function () {
                  f(r).removeClass("transition");
                }, 200);
            }, 1))
          : f(r).addClass("visible");
      },
      getTodoSubelementContainer: function (t) {
        var e,
          t = this.$el.find('[data-todo-id="' + t + '"]');
        return t && 0 < t.length
          ? (e = f(t[0]).find("ol").first()) && 0 != e.length
            ? f(e)
            : ((e = f("<ol>")), f(t[0]).append(e), e)
          : null;
      },
      handleGlobalEnter: function () {
        this.$el.hasClass("is-empty") && this.showAndFocusTodoInput();
      },
      addAll: function (e) {
        function t() {
          var t = o.addAllNow();
          null != t && e(t);
        }
        var o = this,
          i = this.model.activeProvider.selectedList();
        this.lastLisId !== i && i ? ((this.lastLisId = i), setTimeout(t, 200), this.$el.css("opacity", 0)) : i && t();
      },
      addAllNow: function () {
        _.each(this.subViews, function (t) {
          t && t.destroy();
        });
        var t = !(this.subViews = []),
          i = ((this.reordered = !1), this),
          e = (this.$el.html(""), this.model.activeProvider.selectedList());
        if (e) {
          if (!e.get("loadedOnce") && !e.itemCollection.onlineOnly) return null;
          var s,
            o,
            n,
            d,
            a,
            r,
            l = e.getSortedItems(),
            c = e.proxyCollection.where({ proxyValid: !0 }),
            h = (0 < l.length && (t = !0), c && 0 < c.length && (t = !0), !1),
            p = e.groupingInfo();
          p &&
            ((s = []),
            "date" === p.type
              ? (_.isEmpty(l) ||
                  ((o = _.map(l, function (t) {
                    var e = t.get(p.field),
                      e = new Date(e);
                    return { sortDate: e.getTime(), year: e.getFullYear(), month: e.getMonth(), day: e.getDate(), item: t };
                  })),
                  (o = _(o).chain().sortBy("sortDate").reverse().value()),
                  (a = d = n = null),
                  _.each(o, function (t) {
                    var e, o;
                    (t.year == n && t.month == d && t.day == a) ||
                      ((n = t.year),
                      (d = t.month),
                      (a = t.day),
                      (o = (e = i.formatDate(t)).calendarDate),
                      s.push(o),
                      i.$el.append(
                        '<li draggable="false" data-view-section-parent-id="' +
                          o +
                          '" class="todo-section" title="' +
                          e.calendarDate +
                          '">' +
                          e.friendlyDate +
                          "</li>"
                      ),
                      t.item.set("viewSectionId", e.calendarDate)),
                      i.addOne(t.item, null, null, !0),
                      (i.endDate = t.item.get("completedDate"));
                  })),
                (h = !0))
              : "viewSection" == p.type &&
                ((r = ""),
                (o = _.sortBy(l, function (t) {
                  return p.order[t.get("viewSection")];
                })),
                _.each(o, function (t) {
                  t.get("viewSection") != r &&
                    ((r = t.get("viewSection")),
                    s.push(r),
                    i.$el.append(
                      '<li style="color: ' +
                        e.statusColor(t.get("viewSection")) +
                        '" data-view-section-parent-id="' +
                        r +
                        '"class="todo-section todo-section-collapsible">' +
                        r.replace("_", " ") +
                        '<svg class="icon icon-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.362 292.362"><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"/></svg></li>'
                    )),
                    t.set("viewSectionId", r),
                    i.addOne(t, null, null, !0);
                }),
                (h = !0)),
            s.forEach(function (t) {
              i.updateSectionExpansion(t);
            })),
            h ||
              (_.each(
                l,
                function (t, e) {
                  i.addOne(t, !1, e == l.length - 1, !0), (i.endDate = t.get("completedDate"));
                },
                this
              ),
              _.each(
                c,
                function (t) {
                  i.addOne(t, null, null, !0);
                },
                this
              ));
        }
        return (
          t && (this.itemsRendered = !0),
          (e = this.model.activeProvider.selectedList()) && (this.addedToTop = e.addedToTop),
          this.newTodoAdded &&
            ((o = this.addedToTop ? this.$el.children().first() : this.$el.children().last()) &&
              0 < o.length &&
              this.isScrolling &&
              o[0].scrollIntoView(!1),
            (this.newTodoAdded = !1),
            (this.addedToTop = !1)),
          t
        );
      },
      updateSectionExpansion: function (t) {
        var e = "collapsed-" + this.model.activeProvider.selectedList().id + ":" + t,
          e = m.models.customization.get(e);
        null == e && (e = !1),
          this.$el.find('[data-view-section-id="' + t + '"]').toggleClass("hidden", e),
          this.$el.find('[data-view-section-parent-id="' + t + '"]').toggleClass("todo-section-collapsed", e),
          m.trigger("todo:sectionExpansion");
      },
      toggleSection: function (t) {
        var e = this.model.activeProvider.selectedList(),
          t = t.delegatedTarget.dataset.viewSectionParentId,
          e = "collapsed-" + e.id + ":" + t;
        m.models.customization.set(e, !m.models.customization.get(e)), this.updateSectionExpansion(t), this.updateHeight();
      },
      formatDate: function (t) {
        var e,
          o = m.date(),
          i = this.monthNames[t.month] + " " + t.day + (o.getFullYear() == t.year ? "" : ", " + t.year);
        return t.year == o.getFullYear() && t.month == o.getMonth() && t.day == o.getDate()
          ? { friendlyDate: "Today", calendarDate: i }
          : ((e = new Date(o.getTime() - 864e5)),
            t.year == e.getFullYear() && t.month == e.getMonth() && t.day == e.getDate()
              ? { friendlyDate: "Yesterday", calendarDate: i }
              : ((e = new Date(t.sortDate)),
                new Date(o.getTime() - 5184e5) < e
                  ? { friendlyDate: this.weekdayNames[e.getDay()], calendarDate: i }
                  : { friendlyDate: i, calendarDate: "" }));
      },
      clickEmptyStateLink: function (t) {
        var e, o;
        t &&
          t.delegatedTarget &&
          (t.preventDefault(),
          t.stopPropagation(),
          f(t.delegatedTarget).data("use-command")
            ? ((o = (e = this.model.activeProvider.selectedList()).get("empty_command")),
              (e = e.get("empty_command_options")),
              m.commandManager.execute(o, null, e))
            : (o = f(t.delegatedTarget).data("target-list-id")) &&
              (m.Analytics.capture("go to " + (o.includes("today") ? "today" : "inbox"), { feature: "todo", provider: "momentum" }),
              this.model.activeProvider.selectList(o)));
      },
      clickEmptyTitleLink: function (t) {
        t &&
          t.delegatedTarget &&
          (t.preventDefault(), t.stopPropagation(), f(t.delegatedTarget).text() == this.emptyListGreeting) &&
          (t = this.$el.parent().find(".todo-new")[0]) &&
          t.trigger("focus");
      },
      dragover: function (t) {
        return t.preventDefault(), t.stopPropagation(), !(t.originalEvent.dataTransfer.dropEffect = "move");
      },
      dragend: function (t, e) {
        t.preventDefault(), this.$el.removeClass("dragging"), this.$el.closest(".app").removeClass("has-drop-left has-drop-right");
        var o = this.$el[0].getBoundingClientRect(),
          i = t.originalEvent.pageX,
          s = t.originalEvent.pageY,
          n = this.dragging.model.collection,
          n = n.offlineOnly ? n.idAttribute : n.serverIdAttribute,
          n = this.dragging.model.get(n);
        if (this.move_target_id !== n && !0 !== e) {
          if (i - 10 < o.right && i + 30 > o.left && s - 20 < o.top && o.top - s < 40) return void this.drop(t);
          if (i - 10 < o.right && i + 30 > o.left && s + 20 > o.bottom && s - o.bottom < 40) return void this.drop(t);
        }
        return (
          "todo" === this.dragmode &&
            ((n = this.dragging.$el), this.$placeholder.hide(), n.css("display", "inline-block"), n.find(".ghost").remove()),
          !1
        );
      },
      drop: function (t) {
        if (!this.selectedList.get("reorder")) return this.dragend(t, !0), !1;
        if ("todo" === this.dragmode) {
          var e,
            o,
            i,
            s,
            n,
            d = this.dragging.$el,
            a = this.dragging.model.collection,
            a = a.offlineOnly ? a.idAttribute : a.serverIdAttribute,
            r = this.dragging.model.get(a),
            l = this.move_target_id;
          if (l !== r)
            return (
              t.preventDefault(),
              this.$el.closest(".app").removeClass("has-drop-left has-drop-right"),
              (e = this.move_offset),
              0 === this.li_index(this.dragging.$el, !0) && 0 === this.original_index
                ? (this.dragend(t, !0), !1)
                : this.preceedingTodoId == this.dragging.previousSiblingTodoId()
                ? (this.$placeholder.hide(), d.css("display", "inline-block"), !1)
                : ((o = this.model.activeProvider.selectedList()),
                  ((i = {})[a] = r),
                  (s = o.itemCollection.findWhere(i)),
                  (i[a] = l),
                  (a = o.itemCollection.findWhere(i)),
                  !!(s && a && s.isSibling(a)) &&
                    ((n = this).$placeholder.hide(),
                    d.css("display", "inline-block"),
                    o.itemCollection.reorderItem({ move_id: r, move_target_id: l, move_offset: e, list_id: o.get("id") }, function () {
                      n.removeLoading();
                    }),
                    void (this.reordered = !0)))
            );
          this.dragend(t);
        }
      },
      getTopActiveTodoId: function () {
        return this.$("li").not(".done, .placeholder, .todo-section, .todo-subsection, .hidden").first().data("todo-id");
      },
      li_index: function (t, e) {
        return (e ? this.$("li").not(".placeholder") : this.$("li")).index(t);
      },
      handleManagerChange: function () {
        this.render();
      },
      handleTodoLoadingStateChange: function (t) {
        (this.selectedList && this.selectedList.waitForReorder) || (t && "loading" == t.status) || this.render();
      },
      showAssignedTodosOnlyChanged: function (t) {
        var e = this.model.activeProvider.selectedList();
        e && e.id == t && this.render();
      },
      providerChanged: function () {
        var t = this.model.activeProvider.selectedList();
        this.selectedList != t &&
          t &&
          ((this.itemsRendered = !1),
          this.selectedList && this.stopListening(this.selectedList.proxyCollection),
          (this.selectedList = t),
          this.listenTo(t.proxyCollection, "add", this.addedToProxyCollection),
          this.listenTo(m.models.customization, "change:subtask-" + t.id, this.toggleSubtasks),
          this.listenTo(m.models.customization, "change:showOld-" + t.id, this.toggleShowOld),
          t.supportsFeature("assigned")) &&
          this.listenTo(m.models.customization, "change:assigned-" + t.id, this.showAssignedTodosOnly);
      },
      todoDragging: function () {
        this.$el.addClass("dragging"), this.isScrolling || this.$el.addClass("hide-scroll");
      },
      toggleScroll: function (t) {
        (this.scrollingAllowed = t), this.$el.toggleClass("hide-scroll", !t);
      },
      updateHeight: function (e) {
        if (!(0 < this.lastHeight && void 0 === e)) {
          this.lastHeight = e;
          var t,
            o = 30,
            i = this,
            s = (0 === e && (e = void 0), this.$el);
          if (s.is(":visible")) {
            var n = this.$el.closest(".app"),
              d =
                (this.isScrolling ? e > s.height() && s.addClass("animating") : s.addClass("hide-scroll"),
                n.addClass("animating"),
                this.$el.on("transitionend webkitTransitionEnd", r),
                setTimeout(r, 500),
                this.getHeightLimit());
            if (d) {
              if (void 0 === e) {
                var a = "Firefox" === m.utils.getBrowserName();
                if (((e = 2), this.$loading.parent() && 0 == s.children().length)) return;
                s.children().each(function () {
                  var t = f(this);
                  "none" !== t.css("display") && (e += a ? t.height() + 1 : t.height());
                });
                try {
                  v.views.todoPane.todoHeader.projectDropdownView.expanded &&
                    (e = Math.max(v.views.todoPane.todoHeader.projectDropdownView.$dropdown.height(), e)),
                    v.views.todoPane.todoHeader.topMenuDropdownView.expanded &&
                      (e = Math.max(v.views.todoPane.todoHeader.topMenuDropdownView.$dropdown.height(), e));
                } catch (t) {}
                (t = !0), (this.contentHeight = e), (this.visibleHeight = Math.min(e, d));
              }
              e >= s.height()
                ? ((e = Math.min(e, d)), (this.isScrolling = e === d), (o = e + "px"), s.parent().css({ "min-height": o }))
                : (s.parent().css({ "min-height": Math.max(this.visibleHeight, e, 30) + "px" }),
                  (o = Math.max(this.visibleHeight, e, 30) + "px")),
                s.css({ "min-height": o }),
                s.parent().css({ "max-height": (t ? e : d) + "px" }),
                s.css({ "max-height": (t ? e : d) + "px" }),
                v.views.todoPane && v.views.todoPane.setStoredHeight(),
                localStorage.setItem("todo-list-min-height", o);
            }
          }
        }
        function r() {
          i.scrollingAllowed && s.removeClass("hide-scroll"),
            s.removeClass("animating"),
            n.removeClass("animating"),
            i.$el.off("transitionend webkitTransitionEnd", r);
        }
      },
      renderLoading: function (t) {
        var e = this,
          o = m.reactive.appsReady && 1e3 < m.now() - m.appsReadyAt ? 100 : 700;
        m.conditionalFeatures.featureEnabled("offlineDataOnly") ||
          (t &&
            ("loading" === t.status
              ? ((this.loadingRemoved = !1),
                setTimeout(function () {
                  e.loadingRemoved ||
                    (0 < e.subViews.length || e.$el.find(".empty").is(":visible")
                      ? (e.$loading.removeClass("message-fill"),
                        e.$loading.addClass("message-overlay"),
                        t.listChanged || e.$el.parent().append(e.$loading))
                      : (e.$loading.removeClass("message-overlay"),
                        e.$loading.addClass("message-fill"),
                        e.$el.parent().append(e.$loading)));
                }, o))
              : "error" === t.status &&
                setTimeout(function () {
                  e.removeLoading();
                }, 20)));
      },
      removeLoading: function () {
        (this.loadingRemoved = !0), this.$loading.remove(), this.$inPlaceLoading.remove(), this.updateHeight();
      },
      isLoading: function () {
        return 0 < this.$loading.parent().length;
      },
      getHeightLimit: function () {
        var t,
          e,
          o,
          i,
          s = this.$el.closest(".app"),
          n = s.find(".todo-header").height();
        return n
          ? ((t = s.find(".todo-message").height() || 0),
            (s = s.find(".todo-new").height() || 0),
            (e =
              m.reactive.windowDimensions.width >= m.constants.mobileMaxWidth
                ? f(".top-left").height() + f(".bottom-center").height()
                : m.constants.mobileTopOrBottomClearance),
            (o = 0),
            (i = f(".bookmarks-wrapper")).css("transform") && (o = parseInt(i.css("height")) - parseInt(i.css("transform").split(",")[5])),
            (i = document.body.getBoundingClientRect().height - (e + n + t + s + o + 4)),
            m.utils.isTouchDevice() ? Math.min(visualViewport.height - n - s - 10, i) : i)
          : null;
      },
      updateListClass: function () {
        var t = this.model.activeProvider.selectedList(),
          t = t && t.get("list_class");
        this.lastListClass && this.$el.removeClass(this.lastListClass), t && this.$el.addClass(t), (this.lastListClass = t);
      }
    })),
    (v.views.TodoListHeader = Backbone.View.extend({
      events: {
        "mouseenter .active-list-container": "handleHeaderHover",
        "mouseleave .active-list-container": "handleHeaderLeave",
        "click .todo-list-choice": "chooseList",
        "click .todo-list-choice-active": "stopChoosing",
        "click .todo-folder": "toggleFolder",
        "click .active-list-container": "handleHeaderClick",
        "click .project-chooser": "toggleProjectDropdown",
        "click #status-action": "statusActionClick",
        "click .mobile-close": "hideTodo"
      },
      choosing: !1,
      initialize: function (t) {
        (this.listeningTo = null),
          (this.parent = t.parent),
          this.listenTo(m, "globalEvent:closeDropdowns", this.stopChoosing),
          this.listenTo(this.model, "change", this.handleManagerChange),
          this.listenTo(m, "todo:loadingStateChange", this.handleTodoLoadingStateChange),
          this.listenTo(m, "todo:providerChanged", this.providerChanged),
          this.listenTo(m, "todo:changed", this.todoChanged),
          this.listenTo(m.models.customization, "change:autoFocus", this.autoFocusChanged),
          this.listenTo(m.models.customization, "change:assigned-" + this.id, this.showAssignedTodosOnlyChanged),
          this.listenTo(m, "globalEvent:click", this.globalClick),
          this.listenTo(m, "todo:status", this.renderActiveItem),
          this.listenTo(m, "todo:renderLists", this.renderActiveItem),
          this.listenTo(m, "todo:topmenu:reset", this.topMenuReset),
          this.listenTo(m, "todo:resetProjectList", this.resetProjectList),
          this.listenTo(m, "todo:allProjectsLoaded", this.prepareProjectList),
          this.listenTo(m, "todo:listChanged", this.renderActiveItem),
          (this.defaultColor = "rgba(0,0,0,0)"),
          this.model.activeProvider &&
            this.model.activeProvider.selectedProject() &&
            (this.activeList = this.model.activeProvider.selectedProject().listCollection);
      },
      render: function (t) {
        var e = this.activeList,
          e =
            (e &&
              this.listeningTo !== e &&
              (this.listenTo(e, "change", this.handleCollectionChange),
              this.listeningTo && this.stopListening(this.listeningTo, "change"),
              (this.listeningTo = e)),
            this.model.activeProvider.get("supportProjects") && this.prepareProjectList(),
            (this.$activeContainer = this.$el.closest(".header")),
            (this.$chooserContainer = this.$(".list-chooser")),
            this.renderActiveItem(t),
            this.model.todoProviderDetails(this.model.activeProvider.id));
        e &&
          (this.$el.closest(".todo").removeClass(this.providerClass),
          e.get("provider_title") &&
            ((t = e.get("provider_title").indexOf("-")),
            (this.providerClass = "todo-" + e.get("provider_title").substring(0, 0 < t ? t : e.get("provider_title").length))),
          this.$el.closest(".todo").addClass(this.providerClass));
      },
      handleHeaderHover: function () {
        this.$(".project-chooser").addClass("hover");
      },
      handleHeaderLeave: function () {
        this.$(".project-chooser").removeClass("hover");
      },
      handleHeaderClick: function (t) {
        f(t.delegatedTarget.parentElement).hasClass("show-external")
          ? this.visitExternal()
          : this.toggleChooser(t, !this.model.activeProvider.get("supportLists"));
      },
      visitExternal: function () {
        var t = (t = this.model.activeProvider.selectedList().get("url")) || this.providerUrl;
        m.utils.getBrowser().tabs.create({ url: t });
      },
      toggleChooser: function (t, e) {
        t && (t.preventDefault(), t.stopPropagation()),
          (1 < this.model.activeProvider.selectedProject().listCollection.length || this.model.activeProvider.isMomentum()) &&
            (m.trigger("globalEvent:closeDropdowns", this), this.setChoosingState(!this.choosing)),
          e && this.toggleProjectDropdown();
      },
      toggleProjectDropdown: function (t) {
        t && (t.preventDefault(), t.stopPropagation()),
          this.model.activeProvider.get("supportProjects") && this.projectDropdownView.toggleDropdown();
      },
      globalClick: function (t) {
        t != this && this.setChoosingState(!1);
      },
      todoChanged: function (t, e) {
        e && (e.hasOwnProperty("done") || e.hasOwnProperty("listId")) && this.renderActiveItem();
      },
      topMenuReset: function () {
        this.topMenuDropdownView && this.topMenuDropdownView.resetMenuItems();
      },
      autoFocusChanged: function () {
        this.renderActiveItem();
      },
      showAssignedTodosOnlyChanged: function () {
        this.renderActiveItem();
      },
      setChoosingState: function (t) {
        var e;
        this.choosing != t &&
          ((this.choosing = t),
          this.$(".active-list-container").toggleClass("active", this.choosing),
          this.choosing
            ? (this.$el.closest(".app").css("overflow-y", "auto"),
              (e = this),
              setTimeout(function () {
                e.$chooserContainer.css("display", "block"), m.trigger("todolist:updateHeight", e.$chooserContainer.height());
              }, 30))
            : (this.$el.closest(".app").css("overflow-y", "hidden"), m.trigger("todolist:updateHeight", 0), this.$chooserContainer.hide()));
      },
      stopChoosing: function (t) {
        t != this && t != v.views.todoPane && this.setChoosingState(!1);
      },
      chooseList: function (t) {
        t && t.stopPropagation(), this.stopChoosing();
        t = f(t.delegatedTarget).data("list-id");
        this.model.activeProvider.selectList(t);
      },
      statusActionClick: function (t) {
        t &&
          (t.preventDefault(), t.stopPropagation(), (t = f(t.delegatedTarget).data("action"))) &&
          m.commandManager.execute(t, this.lastStatus);
      },
      handleCollectionChange: function (t) {
        var e, o;
        t &&
          ((e = t.get("count")),
          (o = this.$el.find("[data-list-id='" + t.get(t.idAttribute) + "']")),
          f(o.find(".todo-count")[0]).text(e),
          (o = this.model.activeProvider.selectedList())) &&
          o.get(o.idAttribute) == t.get(t.idAttribute) &&
          f(this.$el.find(".active-todo-count")[0]).text(e);
      },
      renderActiveItem: function (t) {
        var e,
          o,
          i,
          s,
          n,
          d,
          a,
          r,
          l,
          c,
          h,
          p = this;
        this.$activeContainer
          ? (this.model.activeProvider.selectedProject() &&
              this.model.activeProvider.selectedProject().listCollection &&
              ((c = {}),
              (l = {}),
              (t = t || this.model.activeProvider.providerStatus()) &&
                "loading" != (this.lastStatus = t).status &&
                t.message &&
                ((c.statusMessage = t.message),
                t.actionMessage && (c.actionMessage = t.actionMessage),
                t.action && (c.action = t.action),
                t.duration) &&
                setTimeout(function () {
                  p.$el.find(".todo-message").mFadeOut(), p.$el.closest(".app-container").removeClass("has-message");
                }, t.duration),
              (c.supportProjects = this.model.activeProvider.get("supportProjects")),
              (c.supportsFolders = this.model.activeProvider.get("supports_folders")),
              (c.no_caps = this.model.activeProvider.get("no_caps")),
              (r = this.model.activeProvider.selectedProject()),
              (c.supportLists = (void 0 === r.get("supportLists") ? this.model.activeProvider : r).get("supportLists")),
              (e = r.selectedList()),
              this.topMenuDropdownView && this.topMenuDropdownView.updateModel(e),
              e &&
                ((h = e.getColor()),
                (c.color = h ? (h.indexOf("rgb") < 0 && "#" != h.charAt(0) ? "#" + h : h) : this.defaultColor),
                (c.listTitle = e.get("title")),
                (c.providerLogo = e.get("small_icon_url")),
                (c.remaining = e.remainingTodoCount())),
              r &&
                ((h = r.get("color")),
                (l.color = h ? (h.indexOf("rgb") < 0 && "#" != h.charAt(0) ? "#" + h : h) : this.defaultColor),
                (l.listTitle = r.get("title")),
                (l.providerLogo = r.get("small_icon_url"))),
              !c.providerLogo &&
                this.model.activeProvider &&
                1 != this.model.activeProvider.id &&
                (a = this.model.todoProviderDetails(this.model.activeProvider.id)) &&
                ((c.providerLogo = l.providerLogo = a.get("small_icon_url")),
                (c.providerTitle = l.providerTitle = a.get("provider_title")),
                (this.providerUrl = a.get("provider_url"))),
              (this.compareObjects(c, this.lastContext) && this.compareObjects(l, this.lastParentContext)) ||
                ((this.lastContext = c),
                (this.lastParentContext = l),
                (a = this.model.todoProviderDetails(this.model.activeProvider.id)),
                (h = v.templates.todolistactive(c)),
                c.statusMessage && this.$el.closest(".app-container").addClass("has-message"),
                e &&
                  ((o = e.supportsFeature("assigned")),
                  (i = e.supportsFeature("subtask")),
                  (s = e.supportsFeature("showComplete")),
                  (n = e.supportsFeature("showArchivedProject")),
                  (d = e.supportsFeature("archiveCompleted"))),
                this.$activeContainer.html(h),
                (this.$chooserContainer = this.$activeContainer.find(".list-chooser")),
                (r = []),
                a &&
                  a.attributes.provider_url &&
                  r.push({
                    commandId: "todo.visit.external",
                    captionText: "View in " + a.get("provider_title"),
                    options: { urlField: e && e.get("url") ? "url" : null, providerUrl: this.providerUrl },
                    todoIcon:
                      '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-external" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.536 438.536"><path d="M414.41 24.123C398.333 8.042 378.963 0 356.315 0H82.228C59.58 0 40.21 8.042 24.126 24.123 8.045 40.207.003 59.576.003 82.225v274.084c0 22.647 8.042 42.018 24.123 58.102 16.084 16.084 35.454 24.126 58.102 24.126h274.084c22.648 0 42.018-8.042 58.095-24.126 16.084-16.084 24.126-35.454 24.126-58.102V82.225c-.001-22.649-8.043-42.021-24.123-58.102zm-48.961 204.279c0 7.994-3.717 13.606-11.136 16.844-2.471.951-4.859 1.427-7.139 1.427-5.134 0-9.418-1.811-12.847-5.424l-41.11-41.112-152.453 152.462c-3.621 3.614-7.9 5.425-12.85 5.425-4.952 0-9.235-1.811-12.851-5.425l-29.121-29.126c-3.617-3.61-5.426-7.901-5.426-12.847 0-4.944 1.809-9.229 5.426-12.843l152.462-152.464-41.113-41.112c-5.902-5.52-7.233-12.178-3.999-19.985 3.234-7.421 8.852-11.136 16.846-11.136h137.037c4.948 0 9.232 1.81 12.854 5.428 3.613 3.614 5.421 7.898 5.421 12.847v137.041z"/></svg></span>',
                    toolTip: "Open in " + a.get("provider_title")
                  }),
                a &&
                  this.model.activeProvider.get("supportSubtasks") &&
                  r.push({
                    checkStateCmd: "todo.list.check.state.subtasks",
                    commandId: "todo.list.toggle.subtasks",
                    captionText: "Show subtasks"
                  }),
                r.push({
                  checkStateCmd: "todo.list.check.state.autofocus",
                  commandId: "todo.toggle.autofocus",
                  options: { sourceApp: "Todo", eventSource: "todo" },
                  captionTextOn: "Turn on Autofocus",
                  captionTextOff: "Turn off Autofocus",
                  todoIcon:
                    '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-autofocus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.512 124.512" class="icon icon-autofocus"><path d="M113.956 57.006l-97.4-56.2c-4-2.3-9 .6-9 5.2v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.401 4-8.2 0-10.5z"/></svg></span>',
                  toolTip: "Automatically set top todo as focus",
                  plusFeature: !0,
                  dataTest: "dropdown-autofocus"
                }),
                o &&
                  r.push({
                    checkStateCmd: "todo.list.check.state.assigned",
                    commandId: "todo.toggle.assignee",
                    captionText: "Assigned to me",
                    todoIcon:
                      '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-assigned" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M9.56 48.67v2.91c0 4.18 13.21 5.35 20.46 5.4s20.46-1.21 20.46-5.4v-2.91a8.11 8.11 0 0 0-4.23-7.12l-7.81-4.26-.21-.12A2.38 2.38 0 0 1 37 35.08v-3l.26-.36a18.89 18.89 0 0 0 2.89-6.15 3.58 3.58 0 0 0 1.35-2.8V19.2a3.59 3.59 0 0 0-.9-2.36v-4.78a8.06 8.06 0 0 0-1.88-5.87C36.93 4.16 33.85 3.1 30 3c-3.83.08-6.91 1.14-8.69 3.17a8.07 8.07 0 0 0-1.88 5.87v4.78a3.59 3.59 0 0 0-.9 2.36v3.6a3.58 3.58 0 0 0 1.35 2.8 18.89 18.89 0 0 0 2.89 6.15l.26.36v3a2.38 2.38 0 0 1-1.24 2.09l-.21.12-7.81 4.26a8.11 8.11 0 0 0-4.21 7.11z"/></svg></span>',
                    toolTip: "Show assigned to me only"
                  }),
                (i || s || n || d) && r.push({ css_class: "line" }),
                i &&
                  r.push({
                    checkStateCmd: "todo.list.check.state.subtasks",
                    commandId: "todo.list.toggle.subtasks",
                    captionText: "Show subtasks",
                    todoIcon:
                      '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-subtasks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M36 387c-19 0-36 16-36 35s17 36 36 36 35-17 35-36-16-35-35-35zM36 215c-19 0-36 16-36 35s17 35 36 35 35-16 35-35-16-35-35-35zM164 110h303c18 0 33-14 33-32s-15-33-33-33H164c-18 0-33 15-33 33s15 32 33 32zM36 42C17 42 0 59 0 78s17 35 36 35 35-16 35-35-16-36-35-36zM467 217H164c-18 0-33 15-33 33s15 33 33 33h303c18 0 33-15 33-33s-15-33-33-33zM467 389H164c-18 0-33 15-33 33s15 33 33 33h303c18 0 33-15 33-33s-15-33-33-33z"/></svg></span>'
                  }),
                s &&
                  r.push({
                    checkStateCmd: "todo.list.check.state.old.todos",
                    commandId: "todo.list.show.old.todos",
                    captionText: e.get("complete_support_override_text") || "Show all completed tasks",
                    todoIcon:
                      '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.5 497.5"><path d="M487.75 78.125c-13-13-33-13-46 0l-272 272-114-113c-13-13-33-13-46 0s-13 33 0 46l137 136c6 6 15 10 23 10s17-4 23-10l295-294c13-13 13-34 0-47z"/></svg></span>'
                  }),
                n &&
                  r.push({
                    checkStateCmd: "todo.check.state.archived.projects",
                    commandId: "todo.show.archived.projects",
                    captionText: "Show archived projects",
                    todoIcon:
                      '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-archive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536.461 536.46"><path d="M144.752 263.52c19.603-9.038 38.354-13.559 56.243-13.559h237.548v-45.683c0-17.511-6.283-32.555-18.85-45.118-12.565-12.562-27.596-18.842-45.11-18.842H219.266v-9.136c0-17.511-6.28-32.548-18.842-45.107-12.563-12.562-27.6-18.846-45.111-18.846h-91.36c-17.511 0-32.548 6.283-45.111 18.846C6.279 98.635 0 113.672 0 131.183v274.084c0 .764.049 1.955.144 3.576.094 1.615.144 2.807.144 3.566l1.426-1.704L97.93 297.637c11.61-13.706 27.218-25.081 46.822-34.117z"/><path d="M528.898 290.214c-5.041-2.478-10.797-3.72-17.272-3.72H200.995c-12.562 0-26.219 3.381-40.968 10.14-14.75 6.766-26.219 14.986-34.401 24.701l-95.93 113.059c-5.902 6.662-8.853 12.945-8.853 18.849 0 5.708 2.523 9.802 7.566 12.272 5.043 2.478 10.8 3.716 17.273 3.716h310.64c12.56 0 26.21-3.381 40.963-10.136 14.75-6.756 26.214-14.989 34.399-24.701l95.931-113.059c5.899-6.663 8.846-12.939 8.846-18.849.004-5.707-2.515-9.797-7.563-12.272z"/></svg></span>'
                  }),
                r.push({ css_class: "line" }),
                r.push({
                  commandId: "todo.move.today.batch",
                  captionText: "Send tasks to Today",
                  todoIcon:
                    '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-move-to-today" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><g fill="none" fill-rule="evenodd"><path id="icon-path-one" d="M8 10.773V7.5a.5.5 0 0 1 .5-.5H22a.5.5 0 0 1 .5.5c.006 4.712.006 7.739 0 9.08 0 .08-8.694-.078-8.694 0 .229.523.337 1.409.125 1.92H23.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H21a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 0-1.5 0V4.5a.75.75 0 0 1-1.5 0v-2a.5.5 0 0 0-.5-.5H13a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 0-1.5 0V4.5a.75.75 0 0 1-1.5 0v-2a.5.5 0 0 0-.5-.5H7a1 1 0 0 0-1 1v7.773c.665-.183 1.372-.152 2 0zm-1.5.727A6.5 6.5 0 1 0 13 18a6.508 6.508 0 0 0-6.5-6.5zm.161 9.3v-1.4c0-.193-.14-.35-.31-.35H2.931C2.418 19.05 2 18.58 2 18c0-.579.418-1.05.932-1.05H6.35c.172 0 .311-.156.311-.35v-1.399c-.001-.386.277-.7.62-.701.142 0 .28.055.39.154l3.108 2.8a.792.792 0 0 1 0 1.094l-3.107 2.799a.566.566 0 0 1-.66.083.712.712 0 0 1-.35-.63z" fill-rule="nonzero"/><path id="icon-path-two" d="M13 11l1.98 1.98M15 13l3.07-3.947" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg></span>',
                  toolTip: "Move all tasks from this list to Today"
                }),
                r.push({
                  commandId: "todo.move.back.batch",
                  captionText: "Clear the day",
                  todoIcon:
                    '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39"><g transform="translate(-1)" fill="none" fill-rule="evenodd"><rect stroke-width="3" transform="rotate(45 17.5 23)" x="14.5" y="5.5" width="6" height="35" rx="2"/><path d="M7 34l14.5-14.5" stroke-width="3.8" stroke-linecap="square"/><path d="M31.5.7V6m2.386-1.188l-4.772-2.625m0 2.625l4.772-2.625M37.2 15.2v5.3m2.348-1.383l-4.773-2.625m0 2.625l4.773-2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 4.42V7.6m1.432-.713l-2.864-1.575m0 1.575l2.864-1.575" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/></g></svg></span>',
                  toolTip: "Send tasks to Inbox/original lists"
                }),
                d &&
                  r.push({
                    commandId: "todo.list.archive",
                    captionText: "Clear completed tasks",
                    todoIcon:
                      '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39"><g transform="translate(-1)" fill="none" fill-rule="evenodd"><rect stroke-width="3" transform="rotate(45 17.5 23)" x="14.5" y="5.5" width="6" height="35" rx="2"/><path d="M7 34l14.5-14.5" stroke-width="3.8" stroke-linecap="square"/><path d="M31.5.7V6M33.886 4.812l-4.772-2.625M29.114 4.812l4.772-2.625M37.2 15.2v5.3M39.548 19.117l-4.773-2.625M34.775 19.117l4.773-2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 4.42V7.6M20.932 6.887l-2.864-1.575M18.068 6.887l2.864-1.575" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/></g></svg></span>'
                  }),
                r.push({ css_class: "line" }),
                m.conditionalFeatures.featureEnabled("plus") &&
                  r.push({ commandId: "todo.switch.feed", captionText: "Switch to...", css_class: "no-icon" }),
                m.conditionalFeatures.featureEnabled("plus") ||
                  r.push({
                    commandId: "todo.show.integrationUpsell",
                    captionText: "Add integration",
                    plusFeature: !0,
                    toolTip: "Connect to a third party to-do list",
                    dataTest: "dropdown-add-integration"
                  }),
                r.push({ commandId: "todo.show.settings", captionText: "Settings", css_class: "no-icon" }),
                (r = new Backbone.Collection(r)),
                e &&
                  ((l = f(this.$el.find("#todo-top-menu")[0])),
                  this.topMenuDropdownView && this.lastProvider == this.model.activeProvider
                    ? this.topMenuDropdownView.attachMenuItems(l, r)
                    : (this.topMenuDropdownView && (this.topMenuDropdownView.unbind(), this.topMenuDropdownView.remove()),
                      (this.topMenuDropdownView = new v.views.TodoDropdownMenu({
                        el: l,
                        iClassName: "icon-cog",
                        dropdownClassName: "todo-actions-dropdown",
                        menuItems: r,
                        model: e,
                        parentContext: this.model.activeProvider
                      }))),
                  this.topMenuDropdownView.render(),
                  (c = this.$el.find(".project-chooser")),
                  this.projectDropdownView
                    ? ((this.projectDropdownView.dropdownClassName = "project-chooser-dropdown"),
                      (this.projectDropdownView.providerLogo = a ? a.get("small_icon_url") : null),
                      this.projectDropdownView.attachMenuItems(c, this.projectMenuCollection))
                    : ((this.projectDropdownView = new v.views.TodoDropdownMenu({
                        el: c,
                        loadAllOnExpand: !0,
                        menuItems: this.projectMenuCollection,
                        dropdownClassName: "project-chooser-dropdown",
                        model: e,
                        parentContext: this.project,
                        providerLogo: a ? a.get("small_icon_url") : null,
                        keepOpen: !0
                      })),
                      this.listenTo(this.projectDropdownView, "refreshItems", this.refreshProjects)),
                  this.projectDropdownView.render(),
                  (this.lastProvider = this.model.activeProvider),
                  (o = e.supportsFeature("assigned")),
                  this.$activeContainer.find(".control-assignee").toggleClass("disabled", !o),
                  this.$activeContainer.find(".control-autofocus").removeClass("disabled"),
                  this.$activeContainer.toggleClass("has-assignee", o),
                  this.$activeContainer
                    .find(".control-assignee")
                    .toggleClass("active", 1 == m.models.customization.get("assigned-" + e.get(e.idAttribute))))),
              this.$activeContainer &&
                this.$activeContainer
                  .find(".control-autofocus")
                  .toggleClass("active", m.models.customization.getComputedSetting("autoFocus")),
              (h =
                !e || (this.model.activeProvider.selectedProject().listCollection.length <= 1 && !this.model.activeProvider.isMomentum())),
              this.$activeContainer.find(".list-chooser-toggle").mToggle("inline-flex", !h),
              this.$activeContainer.toggleClass("momentum-todo", this.model.activeProvider.isMomentum())),
            this.model.activeProvider.selectedProject() &&
              this.renderListChooser(
                this.model.activeProvider.selectedProject().listCollection,
                this.$chooserContainer,
                "todo-list-choice"
              ))
          : ((p = this),
            setTimeout(function () {
              p.renderActiveItem(t);
            }, 300));
      },
      compareObjects: function (t, e) {
        return t == e || JSON.stringify(t) == JSON.stringify(e);
      },
      prepareProjectList: function () {
        var e, o, i, s, t, n, d;
        this.preparing ||
          (this.lastPreparedProjects &&
            this.lastPreparedProjects == this.model.activeProvider.projectCollection &&
            this.lastPreparedProjects.models[0] == this.model.activeProvider.projectCollection) ||
          (((e = this).preparing = !0),
          (o = this.projectItems = []),
          this.projectMenuCollection || (this.projectMenuCollection = new Backbone.Collection(o)),
          (i = this.lastPreparedProjects = this.model.activeProvider.projectCollection),
          (s = this.model.activeProvider.getAllProjects()),
          i &&
            s &&
            ((sortedProjects = i.sortBy("last_active").reverse()),
            (sortedProjects = _.chain(sortedProjects)
              .first(10)
              .value()
              .filter(function (t) {
                return s.get(t.get("id"));
              })),
            (sortedAllProjects = s.toArray().filter(function (t) {
              return !i.get(t.get("id"));
            })),
            1 < this.model.activeProvider.id.length &&
              ((t = this.model.activeProvider.get("variant_title") || this.model.activeProvider.get("provider_title")),
              o.push({ captionText: t, css_class: "provider-name no-icon" })),
            (n = this.model.activeProvider.selectedProject()) && (d = n.selectedList()),
            o.push({ captionText: "Recent", css_class: "section-title no-icon" }),
            _.map(sortedProjects, function (t) {
              o.push({
                commandId: "todo.switch.parent.project",
                captionText: t.get("title"),
                color: t.get("color"),
                options: { projectId: t.get("id") },
                css_class:
                  (e.model.activeProvider.get("supportProjects") && n && n.id == t.get("id")) || (d && t.get("id") == d.id)
                    ? "active-item no-icon"
                    : "no-icon",
                projectId: t.get("id")
              });
            }),
            5 < s.length && o.push({ captionText: "Other", css_class: "section-title empty-list no-icon" }),
            _.map(sortedAllProjects, function (t) {
              for (var e in o) if (o[e].projectId == t.get("id")) return;
              o.push({
                commandId: "todo.switch.parent.project",
                captionText: t.get("title"),
                color: t.get("color"),
                options: { projectId: t.get("id") },
                css_class: "no-icon",
                projectId: t.get("id")
              });
            }),
            this.projectMenuCollection.set(o, { silent: !0 }),
            this.projectMenuCollection.trigger("reset")),
          (this.preparing = !1));
      },
      resetProjectList: function () {
        var t = this;
        setTimeout(function () {
          t.projectDropdownView.resetMenuItems();
        }, 250);
      },
      renderListChooser: function (i, s, n) {
        if (i) {
          var t = i.where({ deleted: !1 }),
            d = (s.html(""), null);
          try {
            t = t.sort(function (t, e) {
              return t.get("order") - e.get("order");
            });
          } catch (t) {}
          var a = this,
            t =
              (_.map(t, function (t) {
                var e = {},
                  o =
                    ((e.listId = t.get(t.idAttribute)),
                    (e.title = t.get("title")),
                    (e.color = t.getColor()),
                    (e.count = t.get("count")),
                    (e.iconUrl = t.get("small_icon_url")),
                    Number.isInteger(e.count) || (e.count = " "),
                    (e.class = n),
                    t.get("parentTitle")),
                  o =
                    (o && ((e.hasParent = !0), o != d && (e.parentTitle = o), (d = e.folderName = o)),
                    t.id == i.selectedList().id && (e.class = "todo-list-choice-active"),
                    a.model.activeProvider.get("supports_folders") ? v.templates.todofolderlistchoice(e) : v.templates.todolistchoice(e)),
                  e = f(o);
                s.append(e), e.data("list-id", t.get(t.idAttribute)), e.data("test", t.get("title") && t.get("title").toLowerCase());
              }),
              v.models.todoListManager.todoProviderDetails(this.model.activeProvider.get("id")));
          t &&
            t.get("add_lists") &&
            (this.addTodoListView ||
              ((this.addTodoListView = new v.views.AddTodoList({ model: this.model })),
              this.listenTo(m, "todo:listAdded", this.stopChoosing)),
            s.append(this.addTodoListView.render().el),
            this.addTodoListView.delegateEvents());
        }
      },
      handleManagerChange: function () {
        var t;
        this.topMenuDropdownView && ((t = this.model.activeProvider.selectedList()), this.topMenuDropdownView.updateModel(t)),
          this.render();
      },
      handleTodoLoadingStateChange: function (t) {
        JSON.stringify(t) !== JSON.stringify(this.lastStatus) && this.model.activeProvider && this.render(t), (this.lastStatus = t);
      },
      providerChanged: function () {
        this.render();
      },
      refreshProjects: function () {
        this.model.activeProvider.refreshAllProjects();
      },
      hideTodo: function () {
        m.trigger("todo:hidden");
      },
      toggleFolder: function (t) {
        t && (t.preventDefault(), t.stopImmediatePropagation());
        t = t.delegatedTarget.dataset.folderId;
        this.$el.find('[data-folder-id="' + t + '"]').toggleClass("active"),
          m.trigger("todolist:updateHeight", this.$chooserContainer.height() + 5);
      }
    })),
    (v.views.TodoPane = Backbone.View.extend({
      attributes: { id: "todo", class: "app-container todo" },
      template: v.templates.todopane,
      renderedOnce: !1,
      todoListOpen: !1,
      events: {
        "click .Todo-toggle": "toggleShow",
        "dragover .drop-left-zone": "ignoreDragOver",
        "dragover .drop-right-zone": "ignoreDragOver",
        "dragenter .drop-left-zone": "hoverLeftBar",
        "dragenter .drop-right-zone": "hoverRightBar",
        "dragleave .drop-left-zone": "hoverLeftBar",
        "dragleave .drop-right-zone": "hoverRightBar",
        "dragend .drop-right-zone": "dragend",
        "dragend .drop-left-zone": "dragend",
        "drop .drop-right-zone": "drop",
        "drop .drop-left-zone": "drop"
      },
      libraryLoadStarted: !1,
      initialize: function () {
        (this.subViews = []),
          this.listenToOnce(m, "background:loadSuccessful", this.onBackgroundLoaded),
          this.listenTo(m, "globalEvent:toggleTodo", this.toggleShow),
          this.listenTo(m, "globalEvent:toggle:bottom-right", this.onToggleBottomRight),
          this.listenTo(m, "globalEvent:esc", this.setTodoStateClosed),
          this.listenTo(m, "todo:visible", this.todoVisible),
          this.listenTo(m, "globalEvent:key:shiftN", this.focusOnNewTodo),
          this.listenTo(m, "globalEvent:arrowLeft", this.arrowLeft),
          this.listenTo(m, "globalEvent:arrowRight", this.arrowRight),
          this.listenTo(m, "globalEvent:altArrowUp", this.altUp),
          this.listenTo(m, "globalEvent:altArrowDown", this.altDown),
          this.listenTo(m, "todo:hide-input", this.hideInput),
          this.listenTo(m, "todo:show-input", this.showInput),
          this.listenTo(m, "todo:show-and-focus-input", this.showAndFocusInput),
          this.listenTo(m, "todo:hidden", this.todoHidden),
          this.listenTo(m, "todo:dragging", this.todoDragging),
          this.listenTo(m, "todo:newProvider", this.openTodo),
          this.listenTo(m, "todo:providerChanged", this.providerChanged),
          this.listenTo(m.models.customization, "change:todoVisible", this.visibleChanged),
          this.$el.closest(".app-container").clickOutside(this, this.setTodoStateClosed),
          this.render();
      },
      render: function () {
        this.renderedOnce ||
          ((t = this.template({})),
          this.$el.hasClass("app") && (this.$el = this.$el.closest(".todo")),
          (this.$popup = this.$(".app-wrapper")),
          (this.$app = this.$(".app")),
          this.$app.html(t),
          (this.$listcontainer = this.$el.find(".todo-list")[0]),
          (this.$headercontainer = this.$el.find(".todo-header")[0]),
          (this.$newTodoFooter = this.$el.find(".new-todo-footer")),
          (this.$newtodoinput = this.$el.find("#todo-new")),
          this.showTodoList() && m.models.customization.get("keepTodoState") && this.setTodoOpenState(!0),
          (this.renderedOnce = !0));
        var t,
          e = this;
        return (
          setTimeout(function () {
            e.$el.find(".todo-item").first().find(".dropdown").css("display", "block");
          }, 1e3),
          v.models.todoListManager || this.doFirstFetch(),
          this.loadTriggered || (m.widgetManager.appReady(v.info.id), (this.loadTriggered = !0)),
          this
        );
      },
      showTodoList: function () {
        var t = localStorage.getItem("showTodoList");
        return !!t && JSON.parse(t);
      },
      toggleHandler: function (t) {
        return this.toggleShow(t);
      },
      toggleShow: function (t) {
        t && "t" === t.key && t.preventDefault(),
          m.trigger("globalEvent:closeDropdowns", this),
          m.trigger("globalEvent:toggle:bottom-left", this);
        var e = !this.todoListOpen;
        return e ? this.todoVisible(t) : this.todoHidden(), e;
      },
      onToggleBottomRight: function (t) {
        t != this && this.todoListOpen && this.todoHidden();
      },
      openTodo: function () {
        this.setTodoOpenState(!0);
      },
      setTodoStateClosed: function (t) {
        var e;
        t == this ||
          (t.originalEvent && "click" == t.type && t.target && f.contains(this.$el[0], t.target)) ||
          ((e = !1),
          f(".todo-item-title").each(function () {
            "true" == f(this).attr("contentEditable") &&
              (f(this).attr("contentEditable", !1), f(this).closest(".todo-item").attr("draggable", !1), (e = !0));
          }),
          e || (m.models.customization.get("keepTodoState") && "27" != t.keyCode) || this.todoHidden(),
          m.utils.isTouchDevice() && this.todoHidden());
      },
      setTodoOpenState: function (t) {
        (this.todoListOpen = t),
          m.models.customization.get("keepTodoState") ? (localStorage.showTodoList = t) : (localStorage.showTodoList = !1),
          1 == t ? this.showPopup() : this.hidePopup(),
          t
            ? (this.newTodoInput && this.newTodoInput.focusInputField(), this.doFirstFetch())
            : this.todoHeader && this.todoHeader.stopChoosing();
      },
      showPopup: function () {
        this.$el.addClass("show").width(), this.$el.addClass("show-fade-in"), m.trigger("todolist:visible");
      },
      hidePopup: function () {
        var t;
        this.$el.hasClass("show") &&
          ((t = this).$el.removeClass("show-fade-in"),
          setTimeout(function () {
            t.$el.hasClass("show-fade-in") || (t.$el.removeClass("show"), t.$el.find(".pane").css("height", "auto"));
          }, 300));
      },
      hideInput: function () {
        this.$newTodoFooter.css({ visibility: "hidden" });
      },
      showInput: function () {
        this.$newTodoFooter.css({ visibility: "visible" });
      },
      showAndFocusInput: function () {
        this.showInput(), this.$newtodoinput.trigger("focus");
      },
      doFirstFetch: function () {
        this.initializeManager(), (v.models.todoListManager.externallyFetchedOnce = !0);
      },
      todoVisible: function (t) {
        m.Analytics.capture("app show", { feature: "todo", method: t instanceof MouseEvent ? "click" : "hotkey", is_paid_event: !1 }),
          this.setTodoOpenState(!0);
      },
      todoDragging: function (t) {
        var e;
        (this.draggingTodo = t),
          (this.hoverCounter = 0),
          t.model.get("noMove") ||
            t.model.get("no_list_move") ||
            ((e = v.models.todoListManager.activeProvider.selectedProject().getNeighboringList(-1)) &&
              e.get("boardId") &&
              e.get("boardId") == t.selectedList.get("boardId") &&
              (this.$app.addClass("has-drop-left"), this.$el.find(".left-bar .bar-name").html(e.get("title"))),
            (e = v.models.todoListManager.activeProvider.selectedProject().getNeighboringList(1)) &&
              e.get("boardId") &&
              e.get("boardId") == t.selectedList.get("boardId") &&
              (this.$app.addClass("has-drop-right"), this.$el.find(".right-bar .bar-name").html(e.get("title"))));
      },
      getTopTodo: function () {
        var t,
          e,
          o,
          i = this.manager;
        if (i && i.activeProvider && i.activeProvider.selectedList)
          return (i = i.activeProvider.selectedList()) &&
            i.itemCollection &&
            (0 < i.itemCollection.length || !i.itemCollection.loadingFromServer)
            ? ((t = null),
              this.todoList && this.todoList.reordered
                ? (o = this.todoList.getTopActiveTodoId()) &&
                  (((e = {})[i.itemCollection.idAttribute] = o), (t = i.itemCollection.findWhere(e)))
                : (o = _(i.itemCollection.activeToday())
                    .chain()
                    .filter(function (t) {
                      var e,
                        o = !1;
                      return (
                        t.get("viewSection") &&
                          ((e = "collapsed-" + t.get("csListId") + ":" + t.get("viewSection")), (o = m.models.customization.get(e))),
                        !t.get("done") && "subsection" != t.get("viewType") && !o
                      );
                    })
                    .value()) &&
                  0 < o.length &&
                  (t = (o = _.sortBy(o, function (t) {
                    return t.getOrder();
                  }))[0]),
              t)
            : void (i && i.itemCollection && i.itemCollection.doFetchIfNeeded());
      },
      todoHidden: function () {
        this.setTodoOpenState(!1);
      },
      onBackgroundLoaded: function () {
        this.initializeManager();
      },
      initializeManager: function () {
        var t;
        v.models.todoListManager ||
          (((t = this).manager = v.models.todoListManager =
            new v.models.TodoListManager({
              offline: this.options.offline,
              prefetchTodos: this.todoListOpen || m.models.customization.getComputedSetting("autoFocus")
            })),
          this.manager.setup().then(function () {
            m.trigger("todo:managerReady"),
              (t.todoHeader = new v.views.TodoListHeader({ el: t.$headercontainer, model: v.models.todoListManager, parent: t })),
              (t.todoList = new v.views.TodoList({ el: t.$listcontainer, model: v.models.todoListManager })),
              (t.newTodoInput = new v.views.NewTodoInput({
                todoList: t.todoList,
                el: t.$newtodoinput[0],
                model: v.models.todoListManager
              })),
              t.manager.activeProvider ? t.manager.activeProvider.doFetchIfNeeded() : t.manager.changeProvider("1");
          }));
      },
      visibleChanged: function () {
        m.models.customization.getComputedSetting("todoVisible")
          ? this.renderedOnce
            ? this.$el.mFadeIn()
            : this.render()
          : this.$el.mFadeOut();
      },
      arrowLeft: function (t) {
        this.todoListOpen &&
          (m.trigger("globalEvent:closeDropdowns"),
          t.shiftKey
            ? v.models.todoListManager.selectPreviousProvider()
            : v.models.todoListManager.activeProvider && v.models.todoListManager.activeProvider.selectedProject().selectPreviousList());
      },
      arrowRight: function (t) {
        this.todoListOpen &&
          (m.trigger("globalEvent:closeDropdowns"),
          t.shiftKey
            ? v.models.todoListManager.selectNextProvider()
            : v.models.todoListManager.activeProvider && v.models.todoListManager.activeProvider.selectedProject().selectNextList());
      },
      altUp: function () {
        this.todoListOpen && (m.trigger("globalEvent:closeDropdowns"), v.models.todoListManager.activeProvider.selectPreviousProject());
      },
      altDown: function () {
        this.todoListOpen && (m.trigger("globalEvent:closeDropdowns"), v.models.todoListManager.activeProvider.selectNextProject());
      },
      focusOnNewTodo: function (t) {
        this.todoListOpen && (t && (t.preventDefault(), t.stopPropagation()), this.newTodoInput.focusInputField());
      },
      getHoverInfo: function (t) {
        var e = this,
          o = "dragenter" == t.type,
          t = (o && t.preventDefault(), (this.hoverCounter += o ? 1 : -1), 0 < this.hoverCounter);
        return (
          t
            ? this.$el.find(".todo-list .placeholder").hide()
            : setTimeout(function () {
                e.dropListOffset = null;
              }, 400),
          t
        );
      },
      hoverRightBar: function (t) {
        t.preventDefault();
        t = this.getHoverInfo(t);
        return this.$el.find(".drop-right-zone").toggleClass("hover", t), t && (this.dropListOffset = 1), !1;
      },
      hoverLeftBar: function (t) {
        t.preventDefault();
        t = this.getHoverInfo(t);
        return this.$el.find(".drop-left-zone").toggleClass("hover", t), t && (this.dropListOffset = -1), !1;
      },
      dragend: function (t) {
        (this.hoverCounter = 0),
          t.preventDefault(),
          this.$el.find(".todo-list").removeClass("dragging"),
          this.$el.find(".todo-list .placeholder").hide(),
          this.$el.find(".drop-left-zone").removeClass("hover"),
          this.$el.find(".drop-right-zone").removeClass("hover"),
          this.$app.removeClass("has-drop-left has-drop-right"),
          (this.dropListOffset = null),
          (this.draggingTodo = null);
      },
      drop: function (t) {
        var e;
        this.$el.find(".todo-list .placeholder").hide(),
          this.dropListOffset &&
            ((e = v.models.todoListManager.activeProvider.selectedProject().getNeighboringList(this.dropListOffset)),
            new v.commands.TodoMove().execute(this.draggingTodo.model, { target_id: e.id })),
          this.dragend(t);
      },
      ignoreDragOver: function (t) {
        return t.preventDefault(), t.stopPropagation(), !(t.originalEvent.dataTransfer.dropEffect = "move");
      },
      setStoredHeight: function () {
        localStorage.setItem("todo-pane-height", this.$app.height());
      }
    })),
    (v.commands.TodoAsanaMoveSectionMenu = m.models.Command.extend({
      defaults: { id: "todo.asana.move.section.menu" },
      execute: function (t, e, o) {
        return (this.parentContext = o), !0;
      },
      canExecute: function (t) {
        return t.collection.parentList.get("allow_move");
      },
      getSubmenu: function () {
        var i = [],
          s = this,
          n = s.parentContext.selectedList().id;
        return (
          this.parentContext.selectedProject().listCollection.map(function (t) {
            var e = n.substring(0, n.lastIndexOf("-")),
              o = t.id.substring(0, t.id.lastIndexOf("-"));
            s.parentContext.selectedList().id != t.id &&
              o == e &&
              (((o = {}).listId = t.id),
              (o.captionText = t.get("title")),
              (o.count = t.get("count")),
              i.push(o),
              (o.commandId = "todo.asana.move.section"),
              (o.options = { target_id: t.id }));
          }),
          { title: null, items: new Backbone.Collection(i) }
        );
      }
    })),
    (v.commands.TodoAsanaMoveSection = m.models.Command.extend({
      defaults: { id: "todo.asana.move.section" },
      execute: function (t, e) {
        e = { listId: e.target_id };
        t.attemptSave(e), m.trigger("todo:loadingStateChange", null);
      },
      canExecute: function (t, e) {
        return e && t.get("listId") != e.target_id;
      }
    })),
    (v.commands.TodoClickUpOpenConfig = m.models.Command.extend({
      defaults: { id: "todo.clickup.config" },
      execute: function () {
        m.commandManager.execute("settings.display", null, { section: "clickup" });
      }
    })),
    (v.commands.TodoGithubMoveSectionMenu = m.models.Command.extend({
      defaults: { id: "todo.github.move.section.menu" },
      execute: function (t, e, o) {
        return (this.parentContext = o), !0;
      },
      canExecute: function (t) {
        return t.collection.parentList.get("allow_move");
      },
      getSubmenu: function () {
        var i = [],
          s = this,
          n = s.parentContext.selectedList().id;
        return (
          this.parentContext.selectedProject().listCollection.map(function (t) {
            var e = n.substring(0, n.lastIndexOf("-")),
              o = t.id.substring(0, t.id.lastIndexOf("-"));
            s.parentContext.selectedList().id != t.id &&
              o == e &&
              (((o = {}).listId = t.id),
              (o.captionText = t.get("title")),
              (o.count = t.get("count")),
              i.push(o),
              (o.commandId = "todo.github.move.section"),
              (o.options = { target_id: t.id }));
          }),
          { title: null, items: new Backbone.Collection(i) }
        );
      }
    })),
    (v.commands.TodoGithubMoveSection = m.models.Command.extend({
      defaults: { id: "todo.github.move.section" },
      execute: function (t, e) {
        e = { listId: e.target_id };
        t.attemptSave(e), m.trigger("todo:loadingStateChange", null);
      },
      canExecute: function (t, e) {
        return !!e && t.get("listId") != e.target_id;
      }
    })),
    (v.commands.TodoMove = m.models.Command.extend({
      defaults: { id: "todo.move.id" },
      execute: function (t, e) {
        var o = {},
          i = t.collection.parentList,
          e = ((o[i.collection.idAttribute] = e.target_id), i.collection.findWhere(o)),
          o = {};
        m.Analytics.capture("todo move to", {
          feature: "todo",
          provider: "momentum",
          is_paid_event: i.isCustom() || e.isCustom(),
          from_list: i.formattedTodoListName(),
          to_list: e.formattedTodoListName()
        }),
          i.isTodayList()
            ? m.utils.mergeObjects(o, t.getTodayStateChanges(!1))
            : i.isDoneList() && m.utils.mergeObjects(o, t.getDoneStateChanges(!1)),
          e.isTodayList()
            ? m.utils.mergeObjects(o, t.getTodayStateChanges(!0))
            : e.isDoneList() && m.utils.mergeObjects(o, t.getDoneStateChanges(!0)),
          e.isTodayList() || e.isDoneList() || m.utils.mergeObjects(o, { listId: e.get("id"), csListId: e.id }),
          t.attemptSave(o),
          e.changeCount(!0),
          m.trigger("todo:loadingStateChange", null);
      },
      canExecute: function (t, e) {
        return !(!e || m.conditionalFeatures.featureEnabled("offlineDataOnly")) && t.get("listId") != e.target_id;
      }
    })),
    (v.commands.TodoMoveTodayBatch = m.models.Command.extend({
      defaults: { id: "todo.move.today.batch" },
      execute: function (t) {
        var e = t.project.getListOfType("today"),
          e =
            (e.save("count", e.getCount() + t.getCount()),
            t.itemCollection.activeToday().map(function (t) {
              t.attemptSave({ today: !0 }, null, !0);
            }),
            t.itemCollection.syncToServer && t.itemCollection.syncToServer(),
            t.save("count", 0),
            m.trigger("todo:loadingStateChange", {
              message: " ",
              actionMessage: "Tasks sent to Today >",
              action: "todo.switch.today",
              duration: 5e3
            }),
            t.formattedTodoListName());
        m.Analytics.capture("send tasks to today", {
          feature: "todo",
          provider: "momentum",
          is_paid_event: !("done" === e || "inbox" === e),
          list: e
        });
      },
      canExecute: function (t) {
        return (
          t &&
          !t.isTodayList() &&
          t.project.provider.isMomentum() &&
          !m.conditionalFeatures.featureEnabled("offlineDataOnly") &&
          0 < t.itemCollection.activeToday().length
        );
      }
    })),
    (v.commands.TodoMoveBackBatch = m.models.Command.extend({
      defaults: { id: "todo.move.back.batch" },
      execute: function (e) {
        e.itemCollection.activeToday().map(function (t) {
          t.attemptSave({ today: !1 }, null, !0), e.collection.get(t.get("homeListId")).changeCount(!0);
        }),
          e.itemCollection.syncToServer && e.itemCollection.syncToServer(),
          e.save("count", 0),
          m.trigger("todo:loadingStateChange", { message: "Tasks sent to Inbox/other lists.", duration: 5e3 }),
          m.Analytics.capture("clear the day", { feature: "todo", provider: "momentum" });
      },
      canExecute: function (t) {
        return (
          t && t.isTodayList() && !m.conditionalFeatures.featureEnabled("offlineDataOnly") && 0 < t.itemCollection.activeToday().length
        );
      }
    })),
    (v.commands.TodoDoneAndArchive = m.models.Command.extend({
      defaults: { id: "todo.done.archive" },
      execute: function (t) {
        t.setDoneState(!0, !0),
          t.collection.parentList.collection.findWhere({ id: "1-done" }).changeCount(!0),
          m.Analytics.capture("todo move to", {
            feature: "todo",
            is_paid_event: t.collection.parentList.isCustom(),
            provider: "momentum",
            from_list: t.collection.parentList.formattedTodoListName(),
            to_list: "done"
          });
      },
      canExecute: function (t, e, o) {
        return !o.selectedList().isDoneList() && !m.conditionalFeatures.featureEnabled("offlineDataOnly");
      }
    })),
    (v.commands.TodoToggleToday = m.models.Command.extend({
      defaults: { id: "todo.toggle.today" },
      execute: function (t, e, o) {
        var i,
          s = !t.get("today"),
          o = (t.setTodayState(s), o.selectedList());
        m.Analytics.capture("todo move to", {
          feature: "todo",
          provider: "momentum",
          is_paid_event: o.isCustom(),
          from_list: o.formattedTodoListName(),
          to_list: s ? "today" : "inbox"
        }),
          t.get("done") ||
            ((i = o.collection),
            o.isTodayList()
              ? i.offlineOnly || i.findWhere({ id: t.get("homeListId") }).changeCount(!s)
              : i.findWhere({ type: "today" }).changeCount(s),
            m.trigger("todo:renderLists"));
      },
      canExecute: function (t, e, o) {
        return (o.selectedList().isTodayList() && t.get("today")) || (!t.get("today") && !o.selectedList().isDoneList());
      },
      getProperties: function (t, e, o) {
        o = o.selectedList().collection.findWhere({ id: t.get("homeListId") });
        return o ? { captionText: "Move to " + (t.get("today") ? o.get("title") : "Today") } : { captionText: null };
      }
    })),
    (v.commands.TodoUnDone = m.models.Command.extend({
      defaults: { id: "todo.undone" },
      execute: function (t) {
        var e = t.collection.parentList.collection.findWhere({ id: t.get("homeListId") });
        t.setDoneState(!1),
          e.changeCount(!0),
          m.trigger("todo:loadingStateChange", null),
          m.Analytics.capture("todo move to", {
            feature: "todo",
            is_paid_event: !1,
            provider: "momentum",
            from_list: "done",
            to_list: e.formattedTodoListName()
          });
      },
      canExecute: function (t, e, o) {
        return o.selectedList().isDoneList() && !m.conditionalFeatures.featureEnabled("offlineDataOnly");
      },
      getProperties: function (t) {
        var e = t.collection.parentList.collection.findWhere({ id: t.get("homeListId") });
        return e ? { captionText: "Move to " + (t.get("today") ? "Today" : e.get("title")) } : { captionText: null };
      }
    })),
    (v.commands.TodoArchive = m.models.Command.extend({
      defaults: { id: "todo.archive" },
      execute: function (t) {
        t.setArchiveState(!0), m.trigger("todolist:updateHeight");
        t = t.collection.parentList;
        m.Analytics.capture("todo archive", {
          feature: "todo",
          provider: t.formattedTodoListProvider(),
          is_paid_event: t.isCustom(),
          list: t.formattedTodoListName()
        });
      },
      canExecute: function (t, e, o) {
        return !o.selectedList().isDoneList() && t.get("done");
      }
    })),
    (v.commands.TodoArchiveAlways = m.models.Command.extend({
      defaults: { id: "todo.archive.always" },
      execute: function (t) {
        t.setArchiveState(!0), m.trigger("todolist:updateHeight");
      },
      canExecute: function () {
        return !0;
      }
    })),
    (v.commands.TodoDelete = m.models.Command.extend({
      defaults: { id: "todo.delete" },
      execute: function (e) {
        e.collection.models.map(function (t) {
          e.get("id") && t.get("parentId") == e.get("id") && t.deleteItem();
        }),
          e.deleteItem(),
          m.trigger("todo:loadingStateChange");
        var t = e.collection.parentList;
        m.Analytics.capture("todo delete", {
          feature: "todo",
          provider: t.formattedTodoListProvider(),
          is_paid_event: t.isCustom(),
          list: t.formattedTodoListName()
        });
      },
      canExecute: function () {
        return !0;
      }
    })),
    (v.commands.TodoMoveTo = m.models.Command.extend({
      defaults: { id: "todo.moveTo" },
      execute: function (t, e, o) {
        return (this.parentContext = o), !0;
      },
      canExecute: function (t) {
        return t.collection.parentList.get("allow_move") && !m.conditionalFeatures.featureEnabled("offlineDataOnly");
      },
      getSubmenu: function () {
        var o = [],
          i = this;
        return (
          this.parentContext.selectedProject().listCollection.map(function (t) {
            var e;
            i.parentContext.selectedList().id != t.id &&
              (((e = {}).listId = t.id),
              (e.captionText = t.get("title")),
              (e.color = t.getColor()),
              (e.count = t.get("count")),
              (e.css_class = "no-icon"),
              o.push(e),
              t.isDoneList() && (e.commandId = "todo.done.archive"),
              e.commandId || (e.commandId = "todo.move.id"),
              (e.options = { target_id: t.id }));
          }),
          { title: null, items: new Backbone.Collection(o) }
        );
      }
    })),
    (v.commands.TodoSwitchFeed = m.models.Command.extend({
      defaults: { id: "todo.switch.feed" },
      execute: function (t, e, o) {
        return (this.parentContext = o) || m.cmd("modal.open", "UPSELL_TODO_INTEGRATIONS", { eventSource: "dash" }), !0;
      },
      canExecute: function () {
        return !m.conditionalFeatures.featureEnabled("offlineDataOnly");
      },
      getSubmenu: function () {
        var t;
        return this.parentContext
          ? ((t = this.parentContext.selectedList().topMenuItems()).fetchIfRequired(this.parentContext.id), { title: null, items: t })
          : null;
      }
    })),
    (v.commands.TodoShowIntegrationUpsell = m.models.Command.extend({
      defaults: { id: "todo.show.integrationUpsell" },
      execute: function () {
        return m.cmd("modal.open", "UPSELL_TODO_INTEGRATIONS", { eventSource: "dash" }), !0;
      }
    })),
    (v.commands.TodoVisitExternal = m.models.Command.extend({
      defaults: { id: "todo.visit.external" },
      execute: function (t, e) {
        var o = e.providerUrl;
        return (
          e.urlField && (o = t.get(e.urlField) || o),
          m.utils.getBrowser().tabs.create({ url: o }),
          m.Analytics.capture("list view in integration", {
            feature: "todo",
            provider: t.collection.project.provider.get("provider_title").toLowerCase().split("(")[0].trim(),
            is_paid_event: !0
          }),
          !0
        );
      }
    })),
    (v.commands.TodoToggleAssignee = m.models.Command.extend({
      defaults: { id: "todo.toggle.assignee" },
      execute: function (t, e, o) {
        o = "assigned-" + o.selectedList().id;
        m.models.customization.set(o, !m.models.customization.get(o)), m.trigger("toggleAssignee", o);
      }
    })),
    (v.commands.TodoShowSettings = m.models.Command.extend({
      defaults: { id: "todo.show.settings" },
      execute: function () {
        m.commandManager.executeAsync("settings.display", null, { section: "todo" });
      }
    })),
    (v.commands.MenuIgnore = m.models.Command.extend({
      defaults: { id: "menu.ignore" },
      execute: function () {
        return !0;
      },
      canExecute: function () {
        return !0;
      }
    })),
    (v.commands.TodoDeleteWarn = m.models.Command.extend({
      defaults: { id: "todo.delete.warn" },
      execute: function () {
        return !0;
      },
      canExecute: function () {
        return !0;
      },
      getSubmenu: function () {
        return {
          title: "Delete?",
          items: new Backbone.Collection([
            { captionText: "Yes", commandId: "todo.delete" },
            { captionText: "No", commandId: "menu.ignore", css_class: "dropdown-detail-back" }
          ])
        };
      }
    })),
    (v.commands.TodoFocusPin = m.models.Command.extend({
      defaults: { id: "todo.focus.pin" },
      execute: function (t) {
        m.trigger("focus:pin", t);
        t = t.collection.parentList;
        m.Analytics.capture("todo set to focus", {
          feature: "todo",
          provider: t.formattedTodoListProvider(),
          is_paid_event: !0,
          list: t.formattedTodoListName()
        });
      },
      canExecute: function (t) {
        return !t.get("done");
      }
    })),
    (v.commands.TodoRetryConnection = m.models.Command.extend({
      defaults: { id: "todo.connection.retry" },
      execute: function () {
        v.models.todoListManager &&
          (v.models.todoListManager.doFetchIfNeeded(!0), v.models.todoListManager.activeProvider.refreshTodoItems());
      }
    })),
    (v.commands.EditTodo = m.models.Command.extend({
      defaults: { id: "todo.edit" },
      execute: function (t) {
        t.trigger("todo:edit");
      }
    })),
    (v.commands.CloseTodo = m.models.Command.extend({
      defaults: { id: "todo.close" },
      execute: function (t) {
        t.trigger("todo:close");
      },
      canExecute: function (t) {
        return !t.get("done");
      }
    })),
    (v.commands.OpenTodo = m.models.Command.extend({
      defaults: { id: "todo.open" },
      execute: function (t) {
        t.trigger("todo:open");
      },
      canExecute: function (t) {
        return !!t.get("done");
      }
    })),
    (v.commands.TodoListDefaultCommand = m.models.Command.extend({
      defaults: { id: "todo.list.defaultcommand" },
      execute: function (t, e) {
        return e && e.get("done")
          ? { captionText: "Archive to Done", commandId: "todo.move.done" }
          : { captionText: "Move to Today", commandId: "todo.toggle.today", options: {} };
      }
    })),
    (v.commands.TodoListArchiveAllDone = m.models.Command.extend({
      defaults: { id: "todo.list.archive" },
      execute: function (t) {
        t &&
          !t.isDoneList() &&
          ((t = t.itemCollection.models),
          _.each(t, function (t) {
            t.get("done") && !t.get("archive") && t.archive();
          }),
          m.trigger("globalEvent:closeDropdowns"),
          m.trigger("todolist:updateHeight"),
          m.Analytics.capture("clear completed tasks", { provider: "momentum", feature: "todo" }));
      },
      canExecute: function (t) {
        var e;
        return !(
          m.conditionalFeatures.featureEnabled("offlineDataOnly") ||
          (t && t.isDoneList()) ||
          !((e = t ? t.itemCollection : e) && 0 < e.completedCount())
        );
      }
    })),
    (v.commands.TodoProviderChange = m.models.Command.extend({
      defaults: { id: "settings.todo.provider.change" },
      execute: function (t, e) {
        var o;
        e &&
          e.provider_id &&
          (v.models.todoListManager.changeProviderAsync(e.provider_id, e.newProvider),
          (e = v.models.todoListManager.todoProviderDetails(e.provider_id))) &&
          ((o = e.get("provider_title").toLowerCase().split("(")[0].trim()),
          m.Analytics.capture("provider set active", {
            feature: "todo",
            location: "dash",
            is_paid_event: !0,
            provider: e.isMomentum() ? "momentum" : o
          }));
      },
      canExecute: function (t, e) {
        return e.provider_id != v.models.todoListManager.activeProvider.id;
      }
    })),
    (v.commands.TodoSwitchParentProject = m.models.Command.extend({
      defaults: { id: "todo.switch.parent.project" },
      execute: function (t, e) {
        v.models.todoListManager.switchProject(e.projectId);
      },
      canExecute: function () {
        return !0;
      }
    })),
    (v.commands.TodoSwitchToday = m.models.Command.extend({
      defaults: { id: "todo.switch.today" },
      execute: function () {
        v.models.todoListManager.activeProvider.selectList("1-today");
      },
      canExecute: function () {
        return !0;
      }
    })),
    (v.commands.TodoListCheckStateAutofocus = m.models.Command.extend({
      defaults: { id: "todo.list.check.state.autofocus" },
      execute: function () {
        return m.models.customization.get("autoFocus");
      }
    })),
    (v.commands.TodoListCheckStateAssigned = m.models.Command.extend({
      defaults: { id: "todo.list.check.state.assigned" },
      execute: function (t) {
        if (t) return (t = t.get("id")), !!m.models.customization.get("assigned-" + t);
      }
    })),
    (v.commands.TodoListCheckToggleAssigned = m.models.Command.extend({
      defaults: { id: "todo.list.toggle.assigned" },
      execute: function (t) {
        var t = t.get("id"),
          e = m.models.customization.get("assigned-" + t);
        return m.models.customization.save("assigned-" + t, !e), !1;
      }
    })),
    (v.commands.TodoListCheckStateSubtasks = m.models.Command.extend({
      defaults: { id: "todo.list.check.state.subtasks" },
      execute: function (t) {
        if (t) return (t = t.get("id")), 1 == m.models.customization.get("subtask-" + t);
      }
    })),
    (v.commands.TodoListToggleSubtasks = m.models.Command.extend({
      defaults: { id: "todo.list.toggle.subtasks" },
      execute: function (t) {
        var t = t.get("id"),
          e = m.models.customization.get("subtask-" + t);
        return m.models.customization.save("subtask-" + t, !e), !1;
      }
    })),
    (v.commands.TodoListShowOldTasks = m.models.Command.extend({
      defaults: { id: "todo.list.show.old.todos" },
      execute: function (t) {
        var t = t.get("id"),
          e = m.models.customization.get("showOld-" + t);
        return m.models.customization.save("showOld-" + t, !e), !1;
      }
    })),
    (v.commands.TodoListCheckStateOldTodos = m.models.Command.extend({
      defaults: { id: "todo.list.check.state.old.todos" },
      execute: function (t) {
        if (t) return (t = t.get("id")), 1 == m.models.customization.get("showOld-" + t);
      }
    })),
    (v.commands.TodoShowArchivedProjects = m.models.Command.extend({
      defaults: { id: "todo.show.archived.projects" },
      execute: function (t, e, o) {
        var i = "archived-" + o.id,
          s = m.models.customization.get(i);
        return (
          m.models.customization.save(i, !s),
          o.get("supportProjects")
            ? ((o.allProjectsCollectionSynced = !1), o.refreshAllProjects(!0))
            : o.selectedProject().doFetchIfNeeded(!0),
          !1
        );
      }
    })),
    (v.commands.TodoCheckStateArchivedProjects = m.models.Command.extend({
      defaults: { id: "todo.check.state.archived.projects" },
      execute: function (t, e, o) {
        return 1 == m.models.customization.get("archived-" + o.id);
      }
    })),
    (v.commands.TodoTrelloAuxData = m.models.Command.extend({
      defaults: { id: "todo.trello.aux" },
      execute: function (t) {
        var e = {};
        return (
          t.collection &&
            t.collection.parentList &&
            (e.showAssignedOnly = m.models.customization.get("assigned-" + t.collection.parentList.id)),
          e
        );
      }
    })),
    (v.commands.TodoTrelloOpenConfig = m.models.Command.extend({
      defaults: { id: "todo.trello.config" },
      execute: function () {
        m.commandManager.execute("settings.display", null, { section: "trello" });
      }
    })),
    v.styles.style(),
    m.widgetManager.handover("todo", null, {
      region: "top-left",
      order: "prepend",
      bootstrap: function (s, n) {
        m.conditionalFeatures.checkFeatureAndMigrateData(
          "servertodos",
          null,
          "momentum-todo",
          function () {
            (v.views.todoPane = new v.views.TodoPane({ region: "bottom-right", el: s, order: "append" })), n(v.views.todoPane);
          },
          function () {
            var t = localStorage.getItem("momentum-todo");
            if (t) {
              localStorage.setItem("todo-1-inbox", t);
              var e,
                o = Object.keys(localStorage);
              for (i = 0; i < o.length; i++)
                0 === (key = o[i]).indexOf("momentum-todo") &&
                  20 < key.length &&
                  ((e = JSON.parse(localStorage.getItem(key))).csid || ((e.csid = e.id), delete e.id),
                  localStorage.setItem("todo-1-inbox-" + e.csid, JSON.stringify(e)),
                  localStorage.removeItem(key));
              localStorage.removeItem("momentum-todo");
            }
            (v.views.todoPane = new v.views.TodoPane({ region: "bottom-right", el: s, order: "append", offline: !0 })), n(v.views.todoPane);
          }
        );
      }
    }),
    v
  );
};
m.addinManager && m.addinManager.registerAddinFn("6be10923-c6a7-4e5f-b85a-85e6159c3018", fn_addin);
