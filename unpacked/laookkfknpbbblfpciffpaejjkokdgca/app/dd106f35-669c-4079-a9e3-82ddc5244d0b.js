var fn_addin = function (l, d, t) {
  var s = {},
    t =
      ((s.styles = s.styles || {}),
      (s.commands = s.commands || {}),
      (s.dependencies = t || s.dependencies || {}),
      (s.styles.style = function () {}),
      (s.views = s.views || {}),
      (s.collect = s.collect || {}),
      (s.models = s.models || {}),
      (s.templates = s.templates || {}),
      (s.info = {
        addin: "dd106f35-669c-4079-a9e3-82ddc5244d0b",
        id: "settings_quotes",
        dependencies: ["settings"],
        commands: ["settings.panels.quotes"]
      }),
      l.console.log(l.elapsed() + ": " + s.info.id + " started"),
      (s.templates = s.templates || {}),
      (s.templates.custom = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, s, i, n) {
          return '<div class="settings-empty loading" data-test="subnav-custom-empty">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title empty-add-shortcut">Power up your day with your favorite quotes</p>\n\t<p class="settings-empty-description empty-add-shortcut">Click + Add Quote to get started</p>\n</div>\n\n<ul class="settings-list quote-list hidden" data-test="custom-list"></ul>\n';
        },
        useData: !0
      })),
      (s.templates.favorites = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, s, i, n) {
          return '<div class="settings-empty loading" data-test="subnav-favs-empty">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">No favorite quotes yet</p>\n\t<p class="settings-empty-description">Click the heart icon under a quote to start your collection</p>\n</div>\n\n<ul class="settings-list quote-list hidden" data-test="favs-list"></ul>\n';
        },
        useData: !0
      })),
      (s.templates.history = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, s, i, n) {
          return '<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">No quote history yet</p>\n\t<p class="settings-empty-description">Your past quotes will appear here</p>\n</div>\n\n<ul class="settings-list quote-list hidden" data-test="history-list"></ul>\n<div class="load-more">\n\t<span class="button load-more-button">Load More</span>\n</div>\n';
        },
        useData: !0
      })),
      (s.templates.item = Handlebars.template({
        1: function (t, e, s, i, n) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l = t.hooks.helperMissing,
            d = "function",
            r = t.escapeExpression;
          return (
            '\t\t\t--\x3e<span class="control control-svg control-heart u--clickable ' +
            r(
              typeof (o =
                null !=
                (o =
                  (t =
                    t.lookupProperty ||
                    function (t, e) {
                      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                    })(s, "isFavClass") || (null != e ? t(e, "isFavClass") : e))
                  ? o
                  : l) == d
                ? o.call(a, {
                    name: "isFavClass",
                    hash: {},
                    data: n,
                    loc: { start: { line: 10, column: 66 }, end: { line: 10, column: 80 } }
                  })
                : o
            ) +
            '" title="' +
            r(
              typeof (o = null != (o = t(s, "isFavTitle") || (null != e ? t(e, "isFavTitle") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "isFavTitle",
                    hash: {},
                    data: n,
                    loc: { start: { line: 10, column: 89 }, end: { line: 10, column: 103 } }
                  })
                : o
            ) +
            '" data-test="button-fav">\n\t\t\t\t<svg class="icon icon-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 953 1000" data-test="icon-fav"><path d="M1 329q7-115 79-191h2l2-2q88-76 199-76t191 70q32-28 67-45l2-2h2q56-23 117-23 88-2 161 43t110 124v2l2 4q30 106 10 202t-80 175q-62 88-162 172 0 2-2 2-49 45-107 90-34 25-59 41-33 23-55 23l-6 2-5-2q-28-3-59-29-10-6-21-16t-16-13h-2Q125 692 43 540v-2Q-6 444 1 329zm85 1"></path></svg>\n\t\t\t</span>\x3c!--\n'
          );
        },
        3: function (t, e, s, i, n) {
          return '\t\t\t--\x3e<span class="control control-edit u--clickable" title="Edit" data-test="button-edit"><i class="icon-edit" data-test="icon-edit"></i></span>\x3c!--\n\t\t\t--\x3e<span class="control control-delete u--clickable" title="Delete" data-test="button-delete">\n\t\t\t\t<i class="icon-trash" data-test="icon-delete">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24"><path d="M19.15 7.5H2.838a.5.5 0 0 0-.5.5l1.81 14a2 2 0 0 0 2 2h9.954a2 2 0 0 0 2-2L19.65 8a.5.5 0 0 0-.5-.5zm-9.9 13a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0v9zm5 0a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0v9zM20.43 4h-4.18a.25.25 0 0 1-.25-.25V2.5A2.5 2.5 0 0 0 13.5 0h-5A2.5 2.5 0 0 0 6 2.5v1.25a.25.25 0 0 1-.25.25h-4.5a1 1 0 0 0 0 2h19.18a1 1 0 0 0 0-2zM8 3.75V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.25a.25.25 0 0 1-.25.25h-5.5A.25.25 0 0 1 8 3.75z" fill-rule="nonzero"/></svg>\n\t\t\t\t</i>\n\t\t\t</span>\x3c!--\n\t\t\t--\x3e<span class="delete-group">\x3c!--\n\t\t\t\t--\x3e<span class="control delete-msg">Delete?</span>\x3c!--\n\t\t\t\t--\x3e<span class="control delete-loading">Deleting...</span>\x3c!--\n\t\t\t\t--\x3e<span class="control delete-failed u--clickable" title="Click to retry">Trouble connecting...</span>\x3c!--\n\t\t\t\t--\x3e<span class="control delete-yes u--clickable" title="Confirm" data-test="button-delete-yes">\n\t\t\t\t\t<i class="icon icon-checkmark">\n\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577.95 469.42"><polygon points="195.09 469.42 137.44 424.64 140.4 421.42 0 298 46.22 245.43 187.68 369.79 526.33 0 577.95 47.28 229.72 427.53 195.09 469.42"/></svg>\n\t\t\t\t\t</i>\n\t\t\t\t</span>\x3c!--\n\t\t\t\t--\x3e<span class="control delete-no u--clickable" title="Cancel">\n\t\t\t\t\t<i class="icon icon-x">\n\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.97 47.97"><path d="M28.23,24,47.09,5.12A3,3,0,0,0,42.85.88L24,19.74,5.12.88A3,3,0,0,0,.88,5.12L19.74,24,.88,42.85a3,3,0,1,0,4.24,4.24L24,28.23,42.85,47.09a3,3,0,0,0,4.24-4.24Z" transform="translate(0 0)"/></svg>\n\t\t\t\t\t</i>\n\t\t\t\t</span>\n\t\t\t</span>\x3c!--\n';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, s, i, n) {
          var o,
            a,
            l = null != e ? e : t.nullContext || {},
            d = t.hooks.helperMissing,
            r = "function",
            c = t.escapeExpression,
            u =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<div class="view">\n\t<div class="cquote">\x3c!--\n\t\t--\x3e<span class="cquote-body" data-test="body"><span class="quote-mark">&ldquo;</span>' +
            c(
              typeof (a = null != (a = u(s, "body") || (null != e ? u(e, "body") : e)) ? a : d) == r
                ? a.call(l, { name: "body", hash: {}, data: n, loc: { start: { line: 3, column: 87 }, end: { line: 3, column: 95 } } })
                : a
            ) +
            '<span class="quote-mark">&rdquo;</span></span>\x3c!--\n\t\t--\x3e<span class="cquote-source" data-test="source">' +
            c(
              typeof (a = null != (a = u(s, "source") || (null != e ? u(e, "source") : e)) ? a : d) == r
                ? a.call(l, { name: "source", hash: {}, data: n, loc: { start: { line: 4, column: 52 }, end: { line: 4, column: 62 } } })
                : a
            ) +
            '</span>\n\t</div>\n\n\t<span class="controls">\x3c!--\n\t\t--\x3e<span class="control control-select u--clickable" title="' +
            c(
              typeof (a = null != (a = u(s, "labelSelect") || (null != e ? u(e, "labelSelect") : e)) ? a : d) == r
                ? a.call(l, {
                    name: "labelSelect",
                    hash: {},
                    data: n,
                    loc: { start: { line: 8, column: 62 }, end: { line: 8, column: 77 } }
                  })
                : a
            ) +
            '" data-test="button-activate"><i class="icon-check" data-test="icon-activate"></i><i class="loading-icon"></i><i class="error-icon error-select" title="' +
            c(
              typeof (a = null != (a = u(s, "labelSyncError") || (null != e ? u(e, "labelSyncError") : e)) ? a : d) == r
                ? a.call(l, {
                    name: "labelSyncError",
                    hash: {},
                    data: n,
                    loc: { start: { line: 8, column: 229 }, end: { line: 8, column: 247 } }
                  })
                : a
            ) +
            '">!</i></span>\x3c!--\n' +
            (null !=
            (o = u(s, "if").call(l, null != e ? u(e, "showFavControl") : e, {
              name: "if",
              hash: {},
              fn: t.program(1, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 9, column: 3 }, end: { line: 13, column: 9 } }
            }))
              ? o
              : "") +
            (null !=
            (o = u(s, "if").call(l, null != e ? u(e, "onCustomSubnav") : e, {
              name: "if",
              hash: {},
              fn: t.program(3, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 14, column: 2 }, end: { line: 36, column: 9 } }
            }))
              ? o
              : "") +
            ' \t--\x3e</span>\n</div>\n\n<form class="edit quote-form list-edit-form">\x3c!--\n\t--\x3e<textarea class="list-edit-body textarea-body autoexpand" rows="1" placeholder="Quote" maxlength="' +
            c(
              typeof (a = null != (a = u(s, "inputLengthMaxHtml") || (null != e ? u(e, "inputLengthMaxHtml") : e)) ? a : d) == r
                ? a.call(l, {
                    name: "inputLengthMaxHtml",
                    hash: {},
                    data: n,
                    loc: { start: { line: 41, column: 102 }, end: { line: 41, column: 124 } }
                  })
                : a
            ) +
            '" data-test="body-edit">' +
            c(
              typeof (a = null != (a = u(s, "body") || (null != e ? u(e, "body") : e)) ? a : d) == r
                ? a.call(l, { name: "body", hash: {}, data: n, loc: { start: { line: 41, column: 148 }, end: { line: 41, column: 156 } } })
                : a
            ) +
            '</textarea>\x3c!--\n\t--\x3e<input type="text" class="list-edit-source input input-source" value="' +
            c(
              typeof (a = null != (a = u(s, "source") || (null != e ? u(e, "source") : e)) ? a : d) == r
                ? a.call(l, { name: "source", hash: {}, data: n, loc: { start: { line: 42, column: 74 }, end: { line: 42, column: 84 } } })
                : a
            ) +
            '" maxlength="' +
            c(
              typeof (a = null != (a = u(s, "inputLengthMaxHtmlSource") || (null != e ? u(e, "inputLengthMaxHtmlSource") : e)) ? a : d) == r
                ? a.call(l, {
                    name: "inputLengthMaxHtmlSource",
                    hash: {},
                    data: n,
                    loc: { start: { line: 42, column: 97 }, end: { line: 42, column: 125 } }
                  })
                : a
            ) +
            '" placeholder="Source">\x3c!--\n\t--\x3e<span class="buttons">\x3c!--\n  \t--\x3e<span class="char-count"></span>\x3c!--\n\t\t--\x3e<button class="button submit"><i class="loading-icon"></i><i class="error-icon" title="' +
            c(
              typeof (a = null != (a = u(s, "labelSyncError") || (null != e ? u(e, "labelSyncError") : e)) ? a : d) == r
                ? a.call(l, {
                    name: "labelSyncError",
                    hash: {},
                    data: n,
                    loc: { start: { line: 45, column: 92 }, end: { line: 45, column: 110 } }
                  })
                : a
            ) +
            '">!</i>Save</button>\x3c!--\n    --\x3e<button class="cancel u--clickable">Cancel</button>\x3c!--\n\t--\x3e</span>\n</form>\n'
          );
        },
        useData: !0
      })),
      (s.templates.main = Handlebars.template({
        1: function (t, e, s, i, n) {
          return '<span class="badge badge-plus">Plus</span>';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, s, i, n) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l = t.hooks.helperMissing,
            d = "function",
            r = t.escapeExpression,
            c =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\x3c!-- Header --\x3e\n\n<div class="subpanel-header">\n\t<span class="button-advanced" data-test="button-settings">Settings<i class="icon icon-angle-down"></i></span>\n\t<h3>' +
            r(
              typeof (o = null != (o = c(s, "title") || (null != e ? c(e, "title") : e)) ? o : l) == d
                ? o.call(a, { name: "title", hash: {}, data: n, loc: { start: { line: 5, column: 5 }, end: { line: 5, column: 14 } } })
                : o
            ) +
            '</h3>\n\t<p class="description">' +
            r(
              typeof (o = null != (o = c(s, "description") || (null != e ? c(e, "description") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "description",
                    hash: {},
                    data: n,
                    loc: { start: { line: 6, column: 24 }, end: { line: 6, column: 39 } }
                  })
                : o
            ) +
            '</p>\n</div>\n\n\n\x3c!-- Feeds --\x3e\n\n<div class="smooth-height-wrapper">\n\t<div class="smooth-height-content">\n\t\t<div class="wrapper-advanced">\n\t\t\t<h4>Feeds</h4>\n\t\t\t<ul class="settings-list">\n\t\t\t\t<li class="slide-toggle has-toggle ' +
            r(
              typeof (o = null != (o = c(s, "feedMomentumClass") || (null != e ? c(e, "feedMomentumClass") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "feedMomentumClass",
                    hash: {},
                    data: n,
                    loc: { start: { line: 17, column: 39 }, end: { line: 17, column: 60 } }
                  })
                : o
            ) +
            '" id="feed-momentum-slider">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Momentum Quotes</span>\n\t\t\t\t\t<span class="option-message">See a daily quote from our curated feed</span>\n\t\t\t\t</li>\n\t\t\t\t<li class="slide-toggle has-toggle ' +
            r(
              typeof (o = null != (o = c(s, "feedCustomClass") || (null != e ? c(e, "feedCustomClass") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "feedCustomClass",
                    hash: {},
                    data: n,
                    loc: { start: { line: 22, column: 39 }, end: { line: 22, column: 58 } }
                  })
                : o
            ) +
            '" id="feed-custom-slider" data-test="feed-custom-slider">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">' +
            r(
              typeof (o = null != (o = c(s, "labelCustom") || (null != e ? c(e, "labelCustom") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "labelCustom",
                    hash: {},
                    data: n,
                    loc: { start: { line: 24, column: 32 }, end: { line: 24, column: 47 } }
                  })
                : o
            ) +
            '</span>\n\t\t\t\t\t<span class="badge badge-plus">PLUS</span>\n\t\t\t\t\t<span class="option-message">Add your own quotes and change the quote anytime</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\n\n\x3c!-- Subnav + add button --\x3e\n\n<nav class="settings-subnav">\n\t<div class="subnav-titles">\n\t\t<h4 class="custom" data-test="subnav-custom">' +
            r(
              typeof (o = null != (o = c(s, "labelCustom") || (null != e ? c(e, "labelCustom") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "labelCustom",
                    hash: {},
                    data: n,
                    loc: { start: { line: 38, column: 47 }, end: { line: 38, column: 62 } }
                  })
                : o
            ) +
            '</h4>\x3c!--\n\t\t--\x3e<h4 class="favorites" data-test="subnav-favs">Favorites</h4>\x3c!--\n\t\t--\x3e<h4 class="history" data-test="subnav-history">History</h4>\n\t</div>\n\t<button class="button list-add-button" data-test="button-add">+ Add<span class="u--mobile-hide"> Quote\n\t\t\t' +
            (null !=
            (t = c(s, "unless").call(a, null != e ? c(e, "isPlus") : e, {
              name: "unless",
              hash: {},
              fn: t.program(1, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 43, column: 3 }, end: { line: 43, column: 74 } }
            }))
              ? t
              : "") +
            '</span>\n\t</button>\n</nav>\n<div class="settings-subnav-placeholder"></div>\n\n\n\x3c!-- Add form + lists --\x3e\n\n<div class="list-wrapper has-subnav">\n\t<form class="quote-form list-add-form">\x3c!--\n\t\t--\x3e<textarea class="list-add-body textarea-body autoexpand" rows="1" placeholder="Quote" maxlength="' +
            r(
              typeof (o = null != (o = c(s, "inputLengthMaxHtml") || (null != e ? c(e, "inputLengthMaxHtml") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "inputLengthMaxHtml",
                    hash: {},
                    data: n,
                    loc: { start: { line: 53, column: 102 }, end: { line: 53, column: 124 } }
                  })
                : o
            ) +
            '" data-test="textarea-body"></textarea>\x3c!--\n\t\t--\x3e<input type="text" class="list-add-source input input-source" maxlength="' +
            r(
              typeof (o = null != (o = c(s, "inputLengthMaxHtmlSource") || (null != e ? c(e, "inputLengthMaxHtmlSource") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "inputLengthMaxHtmlSource",
                    hash: {},
                    data: n,
                    loc: { start: { line: 54, column: 78 }, end: { line: 54, column: 106 } }
                  })
                : o
            ) +
            '" placeholder="Source" data-test="input-source">\x3c!--\n\t\t--\x3e<span class="buttons">\x3c!--\n    \t--\x3e<span class="char-count"></span>\x3c!--\n      \t--\x3e<button class="button submit" data-test="button-submit"><i class="loading-icon"></i><i class="error-icon" title="' +
            r(
              typeof (o = null != (o = c(s, "labelSyncError") || (null != e ? c(e, "labelSyncError") : e)) ? o : l) == d
                ? o.call(a, {
                    name: "labelSyncError",
                    hash: {},
                    data: n,
                    loc: { start: { line: 57, column: 123 }, end: { line: 57, column: 141 } }
                  })
                : o
            ) +
            '">!</i>Add</button>\x3c!--\n        --\x3e<button class="cancel u--clickable">Cancel</button>\n\t\t\t</span>\n\t</form>\n\n\t<div class="list-body list-body-custom"></div>\n\t<div class="list-body list-body-favorites"></div>\n\t<div class="list-body list-body-history"></div>\n</div>\n'
          );
        },
        useData: !0
      })),
      (s.styles = s.styles || {}),
      (s.styles.style = function () {
        var t = document.createElement("style");
        (t.type = "text/css"),
          (t.innerHTML =
            ".settings-quotes .list-wrapper{margin-right:-30px;margin-left:-30px;padding-right:30px;padding-left:30px;-moz-user-select:text;-webkit-user-select:text;user-select:text}.settings-quotes .list-add-form{padding-top:5px}.settings-quotes .list-edit-form{padding:3px 0 6px}.settings-quotes .list-edit-body{padding-top:0}.quote-form .textarea-body{margin-bottom:5px;background:0 0;overflow:hidden;resize:none}.quote-form .input-source{width:60%}.quote-form .buttons{margin-top:1px;float:right}.quote-form .char-count{margin-right:8px}.quote-form .submit{margin:0;padding:6px 23px;position:relative}.quote-form .submit.disabled{opacity:.5;cursor:auto}.quote-form .submit.disabled:hover{background:var(--color-stop-4)}.quote-form .submit .loading-icon{top:8px;left:7px}.quote-form .submit .error-icon{top:7px;left:7px}.quote-form .cancel{padding:5px 10px}.quote-list{display:block}.quote-list.hidden{display:none}.quote-item{padding-left:8px}.quote-item .cquote{margin-right:100px;text-indent:-7px}.quote-item .cquote-body{word-break:break-word}.quote-item .quote-mark{opacity:.8}.quote-item .cquote-source{margin-left:5px;opacity:.7;font-size:.875rem}.quote-item .delete-group .delete-loading{display:none;opacity:.5}.delete-group.loading .delete-no,.delete-group.loading .delete-yes,.quote-item .delete-group.loading .delete-msg{display:none}.quote-item .delete-group.loading .delete-loading{display:inline-block}.delete-group.failed .delete-no,.delete-group.failed .delete-yes,.quote-item .delete-group .delete-failed,.quote-item .delete-group.failed .delete-msg{display:none}.quote-item .delete-group.failed .delete-failed,.quote-item.loading .control-select .loading-icon{display:inline-block}.quote-item.failed .controls,.quote-item.loading .controls,.quote-item.selected .control-select,.quote-item.selected .controls{opacity:1}.quote-item.selected .control-select:hover{opacity:1;cursor:auto}.quote-item .control-select .loading-icon{top:-4px;left:-10px}.quote-item.loading .control-select .icon-check{display:none}.quote-item .control-select .error-icon{position:relative}.quote-item.failed .control-select .error-select{display:inline-block}.quote-item.failed .control-select .icon-check{display:none}"),
          document.getElementsByTagName("head")[0].appendChild(t);
      }),
      (s.collect.Quotes = Backbone.Collection.extend({
        initialize: function () {
          (this.model = s.models.Quote), this.listenTo(this, "reset", this.onReset);
        },
        onReset: function () {
          this.loadedOnce = !0;
        },
        comparator: function (t, e) {
          var s = this.sortAttribute || "sort_order",
            t = t.get(s),
            e = e.get(s);
          return t == e ? 0 : t < e ? (this.reverse_sort ? 1 : -1) : e < t ? (this.reverse_sort ? -1 : 1) : void 0;
        }
      })),
      (s.models.Quote = Backbone.Model.extend({
        defaults: function () {
          return { body: "New Quote", source: "Unknown", display_date: l.date() };
        },
        save: function (t, e) {
          ((e = e || {}).patch = !0), Backbone.Model.prototype.save.call(this, t, e);
        },
        setActive: function (e, s) {
          var t = l.globals.urlRootApi + "settings/quote/active",
            i = {},
            n = this.get("_id") || this.get("id");
          this.get("is_custom") ? (i.custom_quote_id = n) : (i.quote_id = n),
            d
              .ajax({ type: "POST", contentType: "application/json", data: JSON.stringify(i), url: t })
              .done(function (t) {
                (t && t.success ? (l.trigger("sync:download", "quote"), e) : s)(this);
              })
              .fail(function () {
                s(this);
              });
        }
      })),
      (s.models.QuoteSettingsManager = Backbone.Model.extend({
        feedCustomName: "quote-feed-custom",
        feedMomentumName: "quote-feed-momentum",
        panelTitle: "Quote Settings",
        labelCustom: "My Quotes",
        newModels: [],
        analytics: new l.Analytics({ feature: "quotes", is_paid_event: !0 }),
        initialize: function () {
          (this.plusUser = l.conditionalFeatures.featureEnabled("plus")),
            (this.settings = new l.models.GenericSettings("quote")),
            this.CustomQuotes(),
            this.listenTo(l, "quote:favorite", this.onQuoteFavorited),
            this.listenTo(l, "quote:active_changed", this.onActiveQuoteChanged);
        },
        onQuoteFavorited: function (t) {
          var e;
          this.favorites &&
            ((e = this.favorites.get(t.id))
              ? (e.set({ is_favorite: t.is_favorite, last_updated: l.date().toISOString() }), this.favorites.sort())
              : this.favorites.fetch()),
            this.history &&
              ((e = this.history.findWhere({ _id: t.id }))
                ? (e.set({ is_favorite: t.is_favorite, last_updated: l.date().toISOString() }), this.history.sort())
                : this.history.fetch());
        },
        onActiveQuoteChanged: function (t) {
          var e;
          this.lastActiveQuote !== t &&
            this.history &&
            (e = this.history.at(0)) &&
            e.get("_id") !== t &&
            (e =
              !(e = !(e = this.history.findWhere({ _id: t })) && this.collection ? this.collection.findWhere({ id: t }) : e) &&
              this.favorites
                ? this.favorites.findWhere({ id: t })
                : e) &&
            ((e = e.clone()).has("_id") || e.set("id", t),
            e.set("sort_order", e.get("sort_order") + "-" + l.now()),
            (e.prepend = !0),
            this.history.add(e),
            this.history.sort(),
            (this.lastActiveQuote = t));
        },
        CustomQuotes: function () {
          return (
            this.collection ||
              ((this.collection = new s.collect.Quotes()),
              (this.collection.url = l.globals.urlRoot + "settings/quote/quotes"),
              this.listenTo(this.collection, "remove", this.onCollectionRemove),
              this.listenTo(this.collection, "user-change", this.onCollectionUserChange)),
            this.collection
          );
        },
        customEmpty: function () {
          return 0 === this.collection.length;
        },
        Favorites: function () {
          return (
            this.favorites ||
              ((this.favorites = new s.collect.Quotes()),
              (this.favorites.url = l.globals.urlRoot + "quotes/favorites"),
              (this.favorites.sortAttribute = "last_updated"),
              (this.favorites.reverse_sort = !1)),
            this.favorites
          );
        },
        History: function () {
          var e = this;
          return (
            this.history ||
              ((this.history = new s.collect.Quotes()),
              (this.history.url = l.globals.urlRoot + "quotes/history"),
              (this.history.reverse_sort = !0),
              (this.history.load_more = l.utils.getDateString()),
              (this.history.parse = function (t) {
                return (e.history.load_more = t.load_more), t.history;
              })),
            this.history
          );
        },
        LoadMoreHistory: function () {
          this.history.load_more && this.history.fetch({ remove: !1, data: { priorToDate: this.history.load_more } });
        },
        onCollectionRemove: function () {
          l.trigger("sync:download", "quote"),
            this.customEmpty() && this.collection.trigger("user-change"),
            this.history && (this.history.loadedOnce = !1),
            this.favorites && (this.favorites.loadedOnce = !1);
        },
        toggleFavorite: function (e, s) {
          var t = l.globals.urlRootApi + "quotes/favorites",
            i = e.get("_id") || e.get("id"),
            n = !e.get("is_favorite"),
            o = e.get("is_custom"),
            a = { operation: "favorite", active_uuid: i, is_favorite: n, is_custom: o };
          try {
            d.ajax({ type: "POST", contentType: "application/json", data: JSON.stringify(a), url: t })
              .done(function (t) {
                t &&
                  t.success &&
                  (e.set({ is_favorite: n }),
                  l.trigger("sync:download", "quote"),
                  l.trigger("quote:favorite", { id: a.active_uuid, is_favorite: a.is_favorite }));
              })
              .fail(function () {
                s && s();
              });
          } catch (t) {
            l.commandManager.execute("notification.show.enhanced", "Connection error."), s && s();
          }
        },
        toggleFeedMomentum: function () {
          this.plusUser &&
            (this.settings.toggle(this.feedMomentumName),
            this.analytics.capture("quote feed toggle", { feed: "momentum", new_value: this.settings.get(this.feedMomentumName) }));
        },
        toggleFeedCustom: function () {
          this.plusUser
            ? (this.settings.toggle(this.feedCustomName),
              this.analytics.capture("quote feed toggle", { feed: "custom", new_value: this.settings.get(this.feedCustomName) }))
            : this.showPlusUpsellNotif();
        },
        showPlusUpsellNotif: function () {
          l.cmd("modal.open", "UPSELL_QUOTES", { eventSource: "settings" });
        },
        onCollectionUserChange: function () {
          var t = this.settings.get(this.feedCustomName),
            e = this.customEmpty();
          e || t || this.toggleFeedCustom(), e && t && this.toggleFeedCustom();
        }
      })),
      (s.views.Custom = Backbone.View.extend({
        template: s.templates.custom,
        events: { "click .empty-add-shortcut": "handleEmptyAddShortcutClick" },
        initialize: function (t) {
          (this.main = t.main),
            (this.subViews = []),
            l.quoteSettingsManager || (l.quoteSettingsManager = new s.models.QuoteSettingsManager()),
            (this.manager = l.quoteSettingsManager),
            (this.collection = this.manager.CustomQuotes()),
            this.listenTo(this.collection, "reset", this.addAll),
            this.listenTo(this.collection, "add", this.onCollectionAdd),
            this.listenTo(this.collection, "update", this.handleCollectionUpdate),
            this.listenTo(this.manager, "toggle-add-form", this.handleToggleAddForm);
        },
        render: function () {
          return (
            this.$el.html(this.template()),
            this.main.setSubnavViewVars(this),
            this.main.expiredPlusUser || this.main.plusUser
              ? this.collection.loadedOnce
                ? this.addAll()
                : this.collection.fetch({ reset: !0 })
              : this.$empty.removeClass("loading"),
            this
          );
        },
        addAll: function () {
          l.settingsUtils.subnavAddAll(this, !1, this.$quoteList, this.main.syncActiveItem.bind(this.main));
        },
        addOne: function (t, e) {
          t = new s.views.CustomQuote({ model: t, main: this.main, subnav: "custom" });
          l.settingsUtils.subnavAddOne(this, t, this.$quoteList, !0, e);
        },
        onCollectionAdd: function (t) {
          this.addOne(t, !0),
            this.collection.trigger("user-change"),
            l.Analytics.capture("quote add", { feature: "quotes", is_paid_event: !0 });
        },
        handleCollectionUpdate: function () {
          l.settingsUtils.handleCollectionUpdateCustom(this.main, this.$empty, this.manager.customEmpty());
        },
        handleToggleAddForm: function () {
          this.manager.customEmpty() && !this.main.deletingFinalItem && this.$empty.mToggle("block", this.main.$addForm.is(":visible"));
        },
        handleEmptyAddShortcutClick: function () {
          this.main.handleClickAddButton();
        }
      })),
      (s.views.Favorites = Backbone.View.extend({
        template: s.templates.favorites,
        initialize: function (t) {
          (this.main = t.main),
            (this.subViews = []),
            l.quoteSettingsManager || (l.quoteSettingsManager = new s.models.QuoteSettingsManager()),
            (this.collection = l.quoteSettingsManager.Favorites()),
            this.listenTo(this.collection, "reset sync", this.addAll),
            this.listenTo(this.collection, "add", this.onCollectionAdd),
            this.listenTo(this.collection, "update", this.handleCollectionUpdate);
        },
        render: function () {
          return (
            this.$el.html(this.template()),
            this.main.setSubnavViewVars(this),
            this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: !0 }),
            this
          );
        },
        addAll: function () {
          l.settingsUtils.subnavAddAll(this, !1, this.$quoteList, this.main.syncActiveItem.bind(this.main));
        },
        addOne: function (t) {
          t.get("is_favorite") &&
            ((t = new s.views.CustomQuote({ model: t, main: this.main, subnav: "favorites" })),
            l.settingsUtils.subnavAddOne(this, t, this.$quoteList, !0, !1));
        },
        onCollectionAdd: function (t) {
          this.addOne(t);
        },
        handleCollectionUpdate: function () {
          l.settingsUtils.updateEmptyState(this);
        }
      })),
      (s.views.History = Backbone.View.extend({
        template: s.templates.history,
        events: { "click .load-more-button": "loadMore" },
        initialize: function (t) {
          (this.main = t.main),
            (this.subViews = []),
            l.quoteSettingsManager || (l.quoteSettingsManager = new s.models.QuoteSettingsManager()),
            (this.collection = l.quoteSettingsManager.History()),
            this.listenTo(this.collection, "reset sync", this.addAll),
            this.listenTo(this.collection, "add", this.onCollectionAdd),
            this.listenTo(this.collection, "update", this.handleCollectionUpdate);
        },
        render: function () {
          return (
            this.$el.html(this.template()),
            this.main.setSubnavViewVars(this),
            this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: !0 }),
            this
          );
        },
        addAll: function () {
          l.settingsUtils.subnavAddAll(
            this,
            !1,
            this.$quoteList,
            this.main.syncActiveItem.bind(this.main),
            l.settingsUtils.subnavHistoryUpdateLoadMore.bind(this)
          );
        },
        addOne: function (t) {
          var e = new s.views.CustomQuote({ model: t, main: this.main, subnav: "history" });
          l.settingsUtils.subnavAddOne(this, e, this.$quoteList, t.prepend, !1);
        },
        onCollectionAdd: function (t) {
          this.addOne(t);
        },
        handleCollectionUpdate: function () {
          l.settingsUtils.updateEmptyState(this), this.main.syncActiveItem();
        },
        loadMore: function (t) {
          l.settingsUtils.subnavHistoryLoadMore(t, this, l.quoteSettingsManager);
        }
      })),
      (s.views.CustomQuote = Backbone.View.extend({
        attributes: { class: "content-item quote-item", "data-test": "item" },
        tagName: "li",
        template: s.templates.item,
        analytics: new l.Analytics({ feature: "quotes", is_paid_event: !0 }),
        events: {
          "click .control-select": "handleClickSetActive",
          "click .control-heart": "handleClickFavorite",
          "click .control-edit": "handleClickEdit",
          "click .control-delete": "toggleDeleteConf",
          "click .delete-yes": "deleteItem",
          "click .delete-no": "toggleDeleteConf",
          "click .delete-failed": "deleteItem",
          "keyup .list-edit-form": "handleKeyupEsc",
          "keypress .list-edit-form": "handleKeypressEnter",
          "click .submit": "processEditForm",
          "click .cancel": "handleClickCancel"
        },
        initialize: function (t) {
          (this.main = t.main),
            (this.subnav = t.subnav),
            (this.manager = this.main.manager),
            this.listenTo(this.model, "change", this.render),
            this.listenTo(this.model, "destroy", l.settingsUtils.onDestroyModel),
            this.listenTo(this.manager, "item-editing", l.settingsUtils.preventMultipleEdits),
            this.listenTo(this.manager, "toggle-add-form", l.settingsUtils.returnToViewMode);
        },
        render: function () {
          (this.isFavorite = this.model.get("is_favorite")),
            (this.quoteId = this.model.get("_id") || this.model.id),
            (this.isCustom = this.model.get("is_custom"));
          var t = {
            body: this.model.get("body"),
            source: this.model.get("source") || this.model.defaults.source,
            labelSelect: this.main.labelSelect,
            showFavControl: "favorites" === this.subnav || "history" === this.subnav,
            isFavClass: this.isFavorite ? "active" : "",
            isFavTitle: this.isFavorite ? "Unfavorite" : "Favorite",
            onCustomSubnav: "custom" === this.subnav,
            labelSyncError: this.main.labelSyncError,
            inputLengthMaxHtml: this.main.inputLengthMaxHtml,
            inputLengthMaxHtmlSource: this.main.inputLengthMaxHtmlSource
          };
          return (
            this.$el.html(this.template(t)), this.setViewVars(), this.$el.attr("data-quote-id", this.quoteId), this.updateTooltip(), this
          );
        },
        setViewVars: function () {
          (this.$deleteGroup = this.$(".delete-group")),
            (this.$listEditForm = this.$(".list-edit-form")),
            (this.$listEditBody = this.$(".list-edit-body")),
            (this.$listEditSource = this.$(".list-edit-source"));
        },
        updateTooltip: function () {
          this.$el.attr("title", this.$el.hasClass("editing") ? "" : l.utils.getFriendlyDate(this.model.get("display_date")));
        },
        handleClickSetActive: function () {
          this.main.plusUser
            ? (this.setQuoteActive(), this.analytics.capture("quote set active", { custom: this.isCustom }))
            : this.manager.showPlusUpsellNotif();
        },
        setQuoteActive: function () {
          var t = this;
          l.models.quoteManager.setActiveInProgress ||
            this.$el.hasClass("selected") ||
            ((this.setActiveInProgress = !0),
            (l.models.quoteManager.setActiveInProgress = !0),
            this.$el.removeClass("failed").addClass("loading"),
            this.model.setActive(
              function () {
                t.$el.removeClass("loading"),
                  (t.setActiveInProgress = !1),
                  (l.models.quoteManager.setActiveInProgress = !1),
                  t.model.get("is_custom") && t.main.collection.trigger("user-change");
              },
              function () {
                t.$el.removeClass("loading").addClass("failed"),
                  (t.setActiveInProgress = !1),
                  (l.models.quoteManager.setActiveInProgress = !1);
              }
            ));
        },
        handleClickFavorite: function () {
          l.quoteSettingsManager.toggleFavorite(this.model),
            this.analytics.capture("quote " + (this.model.get("is_favorite") ? "unfav" : "fav"), {
              is_paid_event: !1,
              custom: this.isCustom,
              location: "settings"
            });
        },
        handleClickEdit: function () {
          this.$listEditForm.removeClass("loading failed"),
            l.settingsUtils.changeToEditMode(this, this.$listEditBody),
            this.updateTooltip();
        },
        toggleDeleteConf: function () {
          l.settingsUtils.toggleDeleteConf(this);
        },
        deleteItem: function () {
          var t = this;
          this.$deleteGroup.hasClass("loading") ||
            (this.$deleteGroup.removeClass("failed").addClass("loading"),
            this.model.destroy({
              wait: !0,
              success: function () {
                t.$deleteGroup.removeClass("loading");
              },
              error: function () {
                t.$deleteGroup.removeClass("loading").addClass("failed");
              }
            }),
            this.analytics.capture("quote delete"));
        },
        handleKeypressEnter: function (t) {
          l.settingsUtils.handleKeypressEnter(t, this.processEditForm.bind(this));
        },
        handleKeyupEsc: function (t) {
          l.settingsUtils.handleKeyupEsc(t, this.abortEdit.bind(this));
        },
        processEditForm: function (t) {
          this.main.processForm(t, this.$listEditForm, this.updateItem.bind(this));
        },
        updateItem: function (t, e) {
          var s = this;
          this.model.save(t, {
            wait: !0,
            success: function () {
              e.removeClass("loading"),
                l.trigger("sync:download", "quote"),
                l.settingsUtils.getOutOfEditMode(s),
                s.main.collection.trigger("user-change");
            },
            error: function () {
              e.removeClass("loading").addClass("failed");
            }
          }),
            this.analytics.capture("quote edit");
        },
        handleClickCancel: function (t) {
          t.preventDefault(), this.abortEdit();
        },
        abortEdit: function () {
          this.$listEditBody.val(this.model.get("body")),
            this.$listEditSource.val(this.model.get("source")),
            l.settingsUtils.getOutOfEditMode(this);
        },
        destroy: function () {
          this.remove(), this.unbind();
        }
      })),
      s.dependencies.settings);
  return (
    (s.views.Main = t.views.SettingsPanel.extend({
      attributes: {
        id: "settings-quotes",
        class: "settings-view settings-content settings-quotes settings-online",
        "data-test": "settings-quotes"
      },
      deletingFinalItem: !1,
      inputLengthMaxDatabase: 250,
      inputLengthMaxHtml: 260,
      inputLengthMaxHtmlSource: 100,
      inputLengthShow: 50,
      inputLengthWarn: 100,
      itemEditingId: null,
      labelDeselect: "(Already Active)",
      labelSelect: "Set Active",
      labelSyncError: "Trouble connecting… Click to retry",
      panelid: "quotes",
      subnav: void 0,
      template: s.templates.main,
      events: {
        "click .button-advanced": "toggleAdvanced",
        "click #feed-custom-slider": "toggleFeedCustom",
        "click #feed-momentum-slider": "toggleFeedMomentum",
        "click .list-add-button": "handleClickAddButton",
        "keyup .list-add-form": "handleKeyupEsc",
        "keypress .list-add-form": "handleKeypressEnter",
        "click .list-add-form .submit": "processAddForm",
        "click .list-add-form .cancel": "cancelAdd",
        "focus .textarea-body": "updateCharCount",
        "input .textarea-body": "updateCharCount",
        "focus textarea.autoexpand": "textareaAutoexpandInitial",
        "input textarea.autoexpand": "textareaAutoexpandLive",
        "click .subnav-titles .custom": "selectCustom",
        "click .subnav-titles .favorites": "selectFavorites",
        "click .subnav-titles .history": "selectHistory"
      },
      initialize: function (t) {
        t && (this.subnav = t.subnav),
          l.quoteSettingsManager || (l.quoteSettingsManager = new s.models.QuoteSettingsManager()),
          (this.manager = l.quoteSettingsManager),
          (this.plusUser = l.conditionalFeatures.featureEnabled("custom-quote")),
          (this.expiredPlusUser = l.conditionalFeatures.featureEnabled("custom-quote-degraded")),
          (this.settings = this.manager.settings),
          this.listenTo(this.settings, "change", this.updateSettings),
          this.listenTo(this.settings, "change:allocation_changed", this.allocationChanged),
          this.listenTo(l, "quote:downloaded", this.syncActiveItem),
          this.plusUser && this.settings.fetch(),
          (this.expiredPlusUser || this.plusUser) && (this.collection = this.manager.CustomQuotes()),
          l.Analytics.capture("settings panel show", { feature: "quotes" });
      },
      render: function () {
        var t = {
          description: "A daily reminder for inspiration and growth",
          inputLengthMaxHtml: this.inputLengthMaxHtml,
          inputLengthMaxHtmlSource: this.inputLengthMaxHtmlSource,
          labelCustom: this.manager.labelCustom,
          labelSyncError: this.labelSyncError,
          isPlus: this.plusUser,
          title: "Quotes"
        };
        return (
          this.$el.html(this.template(d.extend(t, l.settingsUtils.getInitialFeedSettings(this.manager)))),
          this.setViewVars(),
          this.plusUser ? this.renderCustom() : (this.$feedMomentumSlider.addClass("fixed"), this.renderHistory()),
          this
        );
      },
      setViewVars: function () {
        l.settingsUtils.setFeedVars(this),
          (this.$addButton = this.$(".list-add-button")),
          (this.$addForm = this.$(".list-add-form")),
          (this.$addBody = this.$(".list-add-body")),
          (this.$addSource = this.$(".list-add-source")),
          (this.$customList = this.$(".list-body-custom")),
          (this.$favoritesList = this.$(".list-body-favorites")),
          (this.$historyList = this.$(".list-body-history"));
      },
      setSubnavViewVars: function (t) {
        (t.$empty = t.$(".settings-empty")), (t.$quoteList = t.$(".quote-list"));
      },
      selectCustom: function (t) {
        this.selectSubnav("custom", t, this.renderCustom.bind(this));
      },
      selectFavorites: function (t) {
        this.selectSubnav("favorites", t, this.renderFavorites.bind(this));
      },
      selectHistory: function (t) {
        this.selectSubnav("history", t, this.renderHistory.bind(this));
      },
      selectSubnav: function (t, e, s) {
        e.stopPropagation(),
          this.subnav === t ? l.utils.toggleClassTwice(d(e.delegatedTarget), "active") : (this.hideAddForm(), this.resetAdd(), s());
      },
      renderCustom: function () {
        this.customView || (this.customView = new s.views.Custom({ el: this.$customList, main: this })),
          l.settingsUtils.renderSubnav(this, this.customView, "custom");
      },
      renderFavorites: function () {
        this.favoritesView || (this.favoritesView = new s.views.Favorites({ el: this.$favoritesList, main: this })),
          l.settingsUtils.renderSubnav(this, this.favoritesView, "favorites");
      },
      renderHistory: function () {
        this.historyView || (this.historyView = new s.views.History({ el: this.$historyList, main: this })),
          l.settingsUtils.renderSubnav(this, this.historyView, "history");
      },
      updateSettings: function () {
        l.settingsUtils.updateFeedSettings(this);
      },
      allocationChanged: function () {
        this.settings.has("allocation_changed") && l.trigger("sync:download", "quote");
      },
      syncActiveItem: function () {
        var t;
        l.models.customization.get("quoteVisible") &&
          ((t = l.models.quoteManager.getActiveItem().get("_id")),
          this.syncActiveItemHelper(this.$customList, t),
          this.syncActiveItemHelper(this.$favoritesList, t),
          this.syncActiveItemHelper(this.$historyList, t));
      },
      syncActiveItemHelper: function (t, e) {
        t.find(".quote-item.selected").removeClass("selected").find(".control-select").attr("title", this.labelSelect),
          t
            .find('[data-quote-id="' + e + '"]')
            .first()
            .addClass("selected")
            .find(".control-select")
            .attr("title", this.labelDeselect);
      },
      toggleAdvanced: function () {
        l.settingsUtils.toggleAdvanced(this);
      },
      toggleFeedMomentum: function (t) {
        t.stopPropagation(), this.manager.toggleFeedMomentum();
      },
      toggleFeedCustom: function (t) {
        t.stopPropagation(), this.manager.toggleFeedCustom();
      },
      handleClickAddButton: function () {
        this.plusUser ? this.toggleAddForm() : this.manager.showPlusUpsellNotif();
      },
      toggleAddForm: function () {
        "custom" !== this.subnav && this.renderCustom(),
          this.manager.trigger("toggle-add-form"),
          this.$addForm.is(":visible")
            ? this.hideAddForm()
            : (this.$addButton.hide(), this.$addForm.css("display", "block"), this.$addBody.trigger("focus"));
      },
      hideAddForm: function () {
        this.$addButton.css("display", "block"), this.$addForm.hide();
      },
      resetAdd: function (t) {
        this.$addBody.val(""), this.$addSource.val(""), t || this.$addBody.trigger("focus"), this.$addForm.removeClass("loading failed");
      },
      handleKeypressEnter: function (t) {
        l.settingsUtils.handleKeypressEnter(t, this.processAddForm.bind(this));
      },
      handleKeyupEsc: function (t) {
        l.settingsUtils.handleKeyupEsc(t, this.cancelAdd.bind(this));
      },
      processAddForm: function (t) {
        this.processForm(t, this.$addForm, this.createItem.bind(this));
      },
      createItem: function (t, e) {
        var s = this;
        this.collection.create(t, {
          wait: !0,
          success: function () {
            s.resetAdd(!1);
          },
          error: function () {
            e.removeClass("loading").addClass("failed");
          }
        });
      },
      cancelAdd: function (t) {
        l.settingsUtils.cancelAddGeneral(this, t);
      },
      updateCharCount: function (t) {
        l.settingsUtils.updateCharCount(t, this, this.updateSubmitButton.bind(this), d(t.delegatedTarget.form).find(".textarea-body"));
      },
      updateSubmitButton: function (t, e, s) {
        e = 0 === e || s < 0;
        t.find(".submit").prop("disabled", e).toggleClass("disabled", e);
      },
      processForm: function (t, e, s) {
        var i;
        t && t.preventDefault(),
          e.find(".submit").prop("disabled") ||
            e.hasClass("loading") ||
            ((t = e.hasClass("list-edit-form")),
            (i = { body: (t = this.validateForm(e, t)).body, source: t.source }),
            t.valid && (e.removeClass("failed").addClass("loading"), s(i, e)));
      },
      validateForm: function (t, e) {
        var s = t.find(".textarea-body"),
          t = t.find(".input-source"),
          e = e ? this.removeQuotationMarks(s.val().trim()) : this.ensureEndsInPeriod(this.removeQuotationMarks(s.val().trim()));
        return { valid: !!e, body: e, source: t.val().trim() };
      },
      removeQuotationMarks: function (t) {
        var e = [34, 39, 8216, 8217, 8220, 8221];
        return _.contains(e, t.charCodeAt(0)) && (t = t.slice(1)), (t = _.contains(e, t.charCodeAt(t.length - 1)) ? t.slice(0, -1) : t);
      },
      ensureEndsInPeriod: function (t) {
        return !!t && (l.utils.endsWithEndPunctuation(t) || (t += "."), t);
      },
      textareaAutoexpandInitial: function (t) {
        var e = t.delegatedTarget,
          s = e.value,
          i = ((e.value = ""), (e.rows = 1), (e.baseScrollHeight = e.scrollHeight), getComputedStyle(e));
        (e.baseContentHeight = e.baseScrollHeight - parseInt(i.paddingTop, 10) - parseInt(i.paddingBottom, 10)),
          (e.value = s),
          this.textareaAutoexpandLive(t);
      },
      textareaAutoexpandLive: function (t) {
        var e,
          t = t.delegatedTarget;
        (t.rows = 1), (e = Math.ceil((t.scrollHeight - t.baseScrollHeight) / t.baseContentHeight)), (t.rows = 1 + e);
      }
    })),
    l.commandManager &&
      l.commandManager.registerCommand("settings.panels.quotes", function (t) {
        return new s.views.Main(t);
      }),
    s.styles.style(),
    l.trigger("settings:register:nav", { id: "quote-settings", title: "Quotes", cmd: "settings.panels.quotes", position: 35 }),
    s
  );
};
m.addinManager && m.addinManager.registerAddinFn("dd106f35-669c-4079-a9e3-82ddc5244d0b", fn_addin);
