var fn_addin = function (o, i, t) {
  var n = {},
    t =
      ((n.styles = n.styles || {}),
      (n.commands = n.commands || {}),
      (n.dependencies = t || n.dependencies || {}),
      (n.styles.style = function () {}),
      (n.views = n.views || {}),
      (n.collect = n.collect || {}),
      (n.models = n.models || {}),
      (n.templates = n.templates || {}),
      (n.info = {
        addin: "dd91d97e-fc83-4fca-b5cb-d89eb2e1dd0f",
        id: "settings_mantras",
        dependencies: ["settings"],
        commands: ["settings.panels.mantras"]
      }),
      o.console.log(o.elapsed() + ": " + n.info.id + " started"),
      (n.templates = n.templates || {}),
      (n.templates.item = Handlebars.template({
        1: function (t, e, s, n, a) {
          return '\t\t\t--\x3e<span class="control control-edit u--clickable" title="Edit" data-test="mantra-edit-button"><i class="icon-edit" data-test="mantra-edit-icon"></i></span>\x3c!--\n\t\t\t--\x3e<span class="control control-delete u--clickable" title="Delete" data-test="mantra-delete-button">\n\t\t\t\t<i class="icon-trash" data-test="mantra-delete-icon">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24"><path d="M19.15 7.5H2.838a.5.5 0 0 0-.5.5l1.81 14a2 2 0 0 0 2 2h9.954a2 2 0 0 0 2-2L19.65 8a.5.5 0 0 0-.5-.5zm-9.9 13a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0v9zm5 0a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0v9zM20.43 4h-4.18a.25.25 0 0 1-.25-.25V2.5A2.5 2.5 0 0 0 13.5 0h-5A2.5 2.5 0 0 0 6 2.5v1.25a.25.25 0 0 1-.25.25h-4.5a1 1 0 0 0 0 2h19.18a1 1 0 0 0 0-2zM8 3.75V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.25a.25.25 0 0 1-.25.25h-5.5A.25.25 0 0 1 8 3.75z" fill-rule="nonzero"/></svg>\n\t\t\t\t</i>\n\t\t\t</span>\x3c!--\n';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, s, n, a) {
          var i,
            l = null != e ? e : t.nullContext || {},
            o = t.hooks.helperMissing,
            r = "function",
            c = t.escapeExpression,
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<div class="view" title="' +
            c(
              typeof (i = null != (i = d(s, "title") || (null != e ? d(e, "title") : e)) ? i : o) == r
                ? i.call(l, { name: "title", hash: {}, data: a, loc: { start: { line: 1, column: 25 }, end: { line: 1, column: 34 } } })
                : i
            ) +
            '">\n\t<div class="mantra">\n\t\t<span class="mantra-body u--selectable" data-test="mantra-body">' +
            c(
              typeof (i = null != (i = d(s, "body") || (null != e ? d(e, "body") : e)) ? i : o) == r
                ? i.call(l, { name: "body", hash: {}, data: a, loc: { start: { line: 3, column: 66 }, end: { line: 3, column: 74 } } })
                : i
            ) +
            '</span>\n\t</div>\n\n\t<span class="controls">\x3c!--\n\t\t--\x3e<span class="control control-svg control-activate u--clickable" title="' +
            c(
              typeof (i = null != (i = d(s, "labelActivate") || (null != e ? d(e, "labelActivate") : e)) ? i : o) == r
                ? i.call(l, {
                    name: "labelActivate",
                    hash: {},
                    data: a,
                    loc: { start: { line: 7, column: 76 }, end: { line: 7, column: 93 } }
                  })
                : i
            ) +
            '" data-test="mantra-activate-button">\n\t\t\t<i class="icon-check" data-test="mantra-activate-icon"></i>\n\t\t</span>\x3c!--\n\t\t--\x3e<span class="control control-svg control-pin u--clickable" title="' +
            c(
              typeof (i = null != (i = d(s, "labelPin") || (null != e ? d(e, "labelPin") : e)) ? i : o) == r
                ? i.call(l, {
                    name: "labelPin",
                    hash: {},
                    data: a,
                    loc: { start: { line: 10, column: 71 }, end: { line: 10, column: 83 } }
                  })
                : i
            ) +
            '" data-test="mantra-pin-button">\n\t\t\t<svg class="icon icon-pin" data-test="mantra-pin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.71 481.72"><path d="M106.12,10.76,10.77,106.13a36.72,36.72,0,0,0,45.92,56.8l109.6,127.41a100.11,100.11,0,0,0,20,113.32,35.27,35.27,0,0,0,49.86,0l57.33-57.31L481.71,481.72,346.35,293.52l57.31-57.31a35.3,35.3,0,0,0,0-49.88,100.16,100.16,0,0,0-113.29-20L162.93,56.67a36.72,36.72,0,0,0-56.81-45.91Z" transform="translate(0 0)"/></svg>\n\t\t</span>\x3c!--\n\t\t--\x3e<span class="control control-svg control-heart u--clickable ' +
            c(
              typeof (i = null != (i = d(s, "isFavClass") || (null != e ? d(e, "isFavClass") : e)) ? i : o) == r
                ? i.call(l, {
                    name: "isFavClass",
                    hash: {},
                    data: a,
                    loc: { start: { line: 13, column: 65 }, end: { line: 13, column: 79 } }
                  })
                : i
            ) +
            '" title="' +
            c(
              typeof (i = null != (i = d(s, "isFavTitle") || (null != e ? d(e, "isFavTitle") : e)) ? i : o) == r
                ? i.call(l, {
                    name: "isFavTitle",
                    hash: {},
                    data: a,
                    loc: { start: { line: 13, column: 88 }, end: { line: 13, column: 102 } }
                  })
                : i
            ) +
            '" data-test="mantra-fav-button">\n\t\t\t<svg class="icon icon-heart" data-test="mantra-fav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 953 1000"><path d="M1 329q7-115 79-191h2l2-2q88-76 199-76t191 70q32-28 67-45l2-2h2q56-23 117-23 88-2 161 43t110 124v2l2 4q30 106 10 202t-80 175q-62 88-162 172 0 2-2 2-49 45-107 90-34 25-59 41-33 23-55 23l-6 2-5-2q-28-3-59-29-10-6-21-16t-16-13h-2Q125 692 43 540v-2Q-6 444 1 329zm85 1"></path></svg>\n\t\t</span>\x3c!--\n' +
            (null !=
            (t = d(s, "if").call(l, null != e ? d(e, "onCustomSubnav") : e, {
              name: "if",
              hash: {},
              fn: t.program(1, a, 0),
              inverse: t.noop,
              data: a,
              loc: { start: { line: 16, column: 2 }, end: { line: 23, column: 9 } }
            }))
              ? t
              : "") +
            '\t\t--\x3e<span class="delete-group">\x3c!--\n\t\t\t--\x3e<span class="control delete-msg">Delete?</span>\x3c!--\n\t\t\t--\x3e<span class="control delete-loading">Deleting...</span>\x3c!--\n\t\t\t--\x3e<span class="control delete-failed u--clickable" title="Click to retry">Trouble connecting...</span>\x3c!--\n\t\t\t--\x3e<span class="control delete-yes u--clickable" title="Confirm" data-test="mantra-delete-yes">\n\t\t\t\t<i class="icon icon-checkmark">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577.95 469.42"><polygon points="195.09 469.42 137.44 424.64 140.4 421.42 0 298 46.22 245.43 187.68 369.79 526.33 0 577.95 47.28 229.72 427.53 195.09 469.42"/></svg>\n\t\t\t\t</i>\n\t\t\t</span>\x3c!--\n\t\t\t--\x3e<span class="control delete-no u--clickable" title="Cancel">\n\t\t\t\t<i class="icon icon-x">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.97 47.97"><path d="M28.23,24,47.09,5.12A3,3,0,0,0,42.85.88L24,19.74,5.12.88A3,3,0,0,0,.88,5.12L19.74,24,.88,42.85a3,3,0,1,0,4.24,4.24L24,28.23,42.85,47.09a3,3,0,0,0,4.24-4.24Z" transform="translate(0 0)"/></svg>\n\t\t\t\t</i>\n\t\t\t</span>\n\t\t</span>\n\t</span>\n</div>\n\n<form class="edit settings-form-basic list-edit-form">\n\t<input class="list-edit-input" placeholder="Mantra" value="' +
            c(
              typeof (i = null != (i = d(s, "body") || (null != e ? d(e, "body") : e)) ? i : o) == r
                ? i.call(l, { name: "body", hash: {}, data: a, loc: { start: { line: 43, column: 60 }, end: { line: 43, column: 68 } } })
                : i
            ) +
            '" maxlength="' +
            c(
              typeof (i = null != (i = d(s, "inputLengthMaxHtml") || (null != e ? d(e, "inputLengthMaxHtml") : e)) ? i : o) == r
                ? i.call(l, {
                    name: "inputLengthMaxHtml",
                    hash: {},
                    data: a,
                    loc: { start: { line: 43, column: 81 }, end: { line: 43, column: 103 } }
                  })
                : i
            ) +
            '" autocomplete="off" data-test="mantra-edit-input">\x3c!--\n\t--\x3e<span class="char-count"></span>\x3c!--\n\t--\x3e<span class="cancel u--clickable">\n\t\t<span class="icon-wrapper">\n\t\t\t<svg class="icon icon-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" ><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"/></svg>\n\t\t</span>\n\t</span>\n</form>\n'
          );
        },
        useData: !0
      })),
      (n.templates.main = Handlebars.template({
        1: function (t, e, s, n, a) {
          var i = t.lambda,
            l = t.escapeExpression,
            o =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            "\t\t\t\t\t\t\t\t" +
            (null !=
            (s = o(s, "if").call(null != e ? e : t.nullContext || {}, a && o(a, "index"), {
              name: "if",
              hash: {},
              fn: t.program(2, a, 0),
              inverse: t.noop,
              data: a,
              loc: { start: { line: 25, column: 8 }, end: { line: 25, column: 66 } }
            }))
              ? s
              : "") +
            '\n\t\t\t\t\t\t\t\t<span class="toggle-option frequency" data-level="' +
            l(i(null != e ? o(e, "level") : e, e)) +
            '"><span class="toggle-label">' +
            l(i(null != e ? o(e, "label") : e, e)) +
            "</span></span>\n"
          );
        },
        2: function (t, e, s, n, a) {
          return '<span class="toggle-divider">|</span>';
        },
        4: function (t, e, s, n, a) {
          return '<span class="badge badge-plus">Plus</span>';
        },
        6: function (t, e, s, n, a) {
          var i = t.escapeExpression,
            l =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\t\t\t\t\t\t--\x3e<span class="suggestion" data-index="' +
            i(
              "function" == typeof (s = null != (s = l(s, "index") || (a && l(a, "index"))) ? s : t.hooks.helperMissing)
                ? s.call(null != e ? e : t.nullContext || {}, {
                    name: "index",
                    hash: {},
                    data: a,
                    loc: { start: { line: 93, column: 46 }, end: { line: 93, column: 56 } }
                  })
                : s
            ) +
            '">\n\t\t\t\t\t\t\t<span class="body u--clickable">' +
            i(t.lambda(e, e)) +
            '</span>\n\t\t\t\t\t\t\t<span class="remove u--clickable" title="Hide suggestion">\n\t\t\t\t\t\t\t\t<span class="icon-wrapper">\n\t\t\t\t\t\t\t\t\t<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"/></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\x3c!--\n'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, s, n, a) {
          var i,
            l,
            o = null != e ? e : t.nullContext || {},
            r = t.hooks.helperMissing,
            c = "function",
            d = t.escapeExpression,
            h =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<div class="main-container" data-test="main-panel">\n\t\x3c!-- Header --\x3e\n\n\t<div class="subpanel-header">\n\t\t<span class="button-advanced" data-test="advanced">' +
            d(
              typeof (l = null != (l = h(s, "advancedLabel") || (null != e ? h(e, "advancedLabel") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "advancedLabel",
                    hash: {},
                    data: a,
                    loc: { start: { line: 5, column: 53 }, end: { line: 5, column: 70 } }
                  })
                : l
            ) +
            '<i class="icon icon-angle-down"></i></span>\n\t\t<h3>' +
            d(
              typeof (l = null != (l = h(s, "title") || (null != e ? h(e, "title") : e)) ? l : r) == c
                ? l.call(o, { name: "title", hash: {}, data: a, loc: { start: { line: 6, column: 6 }, end: { line: 6, column: 15 } } })
                : l
            ) +
            '</h3>\n\t\t<p class="description">' +
            d(
              typeof (l = null != (l = h(s, "description") || (null != e ? h(e, "description") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "description",
                    hash: {},
                    data: a,
                    loc: { start: { line: 7, column: 25 }, end: { line: 7, column: 40 } }
                  })
                : l
            ) +
            '</p>\n\t</div>\n\n\t\x3c!-- Feeds --\x3e\n\n\t<div class="smooth-height-wrapper">\n\t\t<div class="smooth-height-content">\n\t\t\t<div class="wrapper-advanced">\n\t\t\t\t<h4>General</h4>\n\t\t\t\t<ul class="settings-list options-list">\n\t\t\t\t\t<li class="slide-toggle has-toggle mantras-enabled" data-test="mantras-enabled">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">' +
            d(
              typeof (l = null != (l = h(s, "labelEnable") || (null != e ? h(e, "labelEnable") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "labelEnable",
                    hash: {},
                    data: a,
                    loc: { start: { line: 19, column: 33 }, end: { line: 19, column: 48 } }
                  })
                : l
            ) +
            '</span>\n\t\t\t\t\t\t<span class="option-message">Show mantras periodically throughout the day</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="slide-toggle has-toggle frequencies">\n\t\t\t\t\t\t<span class="toggle-options">\n' +
            (null !=
            (i = h(s, "each").call(o, null != e ? h(e, "frequencyLevels") : e, {
              name: "each",
              hash: {},
              fn: t.program(1, a, 0),
              inverse: t.noop,
              data: a,
              loc: { start: { line: 24, column: 7 }, end: { line: 27, column: 16 } }
            }))
              ? i
              : "") +
            '\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="setting-name">Frequency</span>\n\t\t\t\t\t\t<span class="badge badge-plus">PLUS</span>\n\t\t\t\t\t\t<span class="option-message">How often mantras appear in place of daily greetings</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<h4>Feeds</h4>\n\t\t\t\t<ul class="feeds settings-list options-list">\n\t\t\t\t\t<li class="slide-toggle has-toggle momo">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">' +
            d(
              typeof (l = null != (l = h(s, "labelMomo") || (null != e ? h(e, "labelMomo") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "labelMomo",
                    hash: {},
                    data: a,
                    loc: { start: { line: 39, column: 33 }, end: { line: 39, column: 46 } }
                  })
                : l
            ) +
            '</span>\n\t\t\t\t\t\t<span class="option-message">See a daily mantra from our curated feed</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="slide-toggle has-toggle custom" data-test="custom-feed">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">' +
            d(
              typeof (l = null != (l = h(s, "labelCustom") || (null != e ? h(e, "labelCustom") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "labelCustom",
                    hash: {},
                    data: a,
                    loc: { start: { line: 44, column: 33 }, end: { line: 44, column: 48 } }
                  })
                : l
            ) +
            '</span>\n\t\t\t\t\t\t<span class="badge badge-plus">PLUS</span>\n\t\t\t\t\t\t<span class="option-message">Personalize with your own mantras, skip and pin mantras, and more!</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\t\x3c!-- Subnav + list add button --\x3e\n\n\t<nav class="settings-subnav">\n\t\t<div class="subnav-titles">\n\t\t\t<h4 class="customs">' +
            d(
              typeof (l = null != (l = h(s, "labelCustom") || (null != e ? h(e, "labelCustom") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "labelCustom",
                    hash: {},
                    data: a,
                    loc: { start: { line: 59, column: 23 }, end: { line: 59, column: 38 } }
                  })
                : l
            ) +
            '</h4>\x3c!--\n\t\t\t--\x3e<h4 class="favs" data-test="subnav-favs">Favorites</h4>\x3c!--\n\t\t\t--\x3e<h4 class="history" data-test="subnav-history">History</h4>\n\t\t</div>\n\t\t<button class="button list-add-button" data-test="add-button">+ Add<span class="u--touch-hide"> Mantra\n\t\t\t\t\t' +
            (null !=
            (i = h(s, "unless").call(o, null != e ? h(e, "isPlus") : e, {
              name: "unless",
              hash: {},
              fn: t.program(4, a, 0),
              inverse: t.noop,
              data: a,
              loc: { start: { line: 64, column: 5 }, end: { line: 64, column: 76 } }
            }))
              ? i
              : "") +
            '</span>\n\t\t</button>\n\t</nav>\n\t<div class="settings-subnav-placeholder"></div>\n\n\n\n\t\x3c!-- Mantra lists --\x3e\n\t<div class="list-wrapper has-subnav">\n\n\t\t<div class="settings-loading">\n\t\t\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t\t</div>\n\n\t\t\x3c!-- Add form + custom list --\x3e\n\t\t<div class="list-body mantra-list-body custom-wrapper">\n\t\t\t<form class="settings-form-basic list-add-form">\n\t\t\t\t<div class="settings-form-row">\n\t\t\t\t\t<input class="list-add-input" placeholder="Mantra" maxlength="' +
            d(
              typeof (l = null != (l = h(s, "inputLengthMaxHtml") || (null != e ? h(e, "inputLengthMaxHtml") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "inputLengthMaxHtml",
                    hash: {},
                    data: a,
                    loc: { start: { line: 82, column: 67 }, end: { line: 82, column: 89 } }
                  })
                : l
            ) +
            '" data-test="add-input" autocomplete="off">\n\t\t\t\t\t<span class="char-count"></span>\n\t\t\t\t\t<span class="cancel u--clickable">\n\t\t\t\t\t\t<span class="icon-wrapper">\n\t\t\t\t\t\t\t' +
            (null !=
            (i =
              typeof (l = null != (l = h(s, "iconCancel") || (null != e ? h(e, "iconCancel") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "iconCancel",
                    hash: {},
                    data: a,
                    loc: { start: { line: 86, column: 7 }, end: { line: 86, column: 25 } }
                  })
                : l)
              ? i
              : "") +
            '</span>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<span class="suggestions-section">\x3c!--\n\t\t\t\t\t--\x3e<span class="suggestions-label u--clickable show">Suggestions</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="suggestions-wrapper">\x3c!--\n' +
            (null !=
            (i = h(s, "each").call(o, null != e ? h(e, "suggestedMantras") : e, {
              name: "each",
              hash: {},
              fn: t.program(6, a, 0),
              inverse: t.noop,
              data: a,
              loc: { start: { line: 92, column: 5 }, end: { line: 101, column: 14 } }
            }))
              ? i
              : "") +
            '\t\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="suggestions-empty">No more suggestions</span>\n\t\t\t\t</span>\n\t\t\t</form>\n\n\t\t\t<ul class="settings-list custom-list"></ul>\n\t\t\t<div class="settings-empty custom-empty" data-test="subnav-custom-empty">\n\t\t\t\t<p class="settings-empty-title empty-add-shortcut">Get inspired by adding your personal mantras</p>\n\t\t\t\t<p class="settings-empty-description empty-add-shortcut">Click + Add Mantra to get started</p>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t\x3c!-- Favs list --\x3e\n\t\t<div class="list-body mantra-list-body favs-wrapper">\n\t\t\t<ul class="settings-list favs-list" data-test="favs-list"></ul>\n\t\t\t<div class="settings-empty favs-empty" data-test="subnav-favs-empty">\n\t\t\t\t<p class="settings-empty-title">No favorite mantras</p>\n\t\t\t\t<p class="settings-empty-description">Click the heart icon on a mantra to start your collection</p>\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t\t\x3c!-- History list --\x3e\n\t\t<div class="list-body mantra-list-body history-wrapper">\n\t\t\t<ul class="settings-list history-list" data-test="history-list"></ul>\n\t\t\t<div class="settings-empty history-empty">\n\t\t\t\t<p class="settings-empty-title">You will see your past mantras here</p>\n\t\t\t\t<p class="settings-empty-description">Can\'t find any history for this account</p>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t\x3c!-- Off state --\x3e\n\n\t<div class="off-state">\n\t\t<span class="button mantras-enabled">' +
            d(
              typeof (l = null != (l = h(s, "labelEnable") || (null != e ? h(e, "labelEnable") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "labelEnable",
                    hash: {},
                    data: a,
                    loc: { start: { line: 140, column: 39 }, end: { line: 140, column: 54 } }
                  })
                : l
            ) +
            '</span>\n\t</div>\n</div>\n\n\n\n\x3c!-- ONBOARD --\x3e\n<div class="settings-mantras-onboard" data-test="onboard-panel">\n\t<div>\n\t\t<h3>Introducing Mantras</h3>\n\t\t<div class="text-wrapper">\n\t\t\t<p class="text">Build positive mental habits with simple phrases known as mantras. Mantras will appear throughout the day in place of the <span class="current-greeting">' +
            d(
              typeof (l = null != (l = h(s, "currentGreeting") || (null != e ? h(e, "currentGreeting") : e)) ? l : r) == c
                ? l.call(o, {
                    name: "currentGreeting",
                    hash: {},
                    data: a,
                    loc: { start: { line: 151, column: 172 }, end: { line: 151, column: 193 } }
                  })
                : l
            ) +
            '</span> greeting.</p>\n\t\t\t<p class="text">Center yourself with friendly reminders, reinforce new thought patterns, and bring attention to the values or principles that are most important to you.</p>\n\t\t</div>\n\t\t<button class="hide-onboard button button-primary" data-test="get-started">Get Started</button>\n\t</div>\n</div>\n'
          );
        },
        useData: !0
      })),
      (n.styles = n.styles || {}),
      (n.styles.style = function () {
        var t = document.createElement("style");
        (t.type = "text/css"),
          (t.innerHTML =
            ".settings-mantras{display:flex;flex-direction:column}.settings-mantras .main-container{display:none}.settings-mantras .main-container.show{display:block}.settings-mantras.loading{height:100%}.settings-mantras .list-wrapper{position:relative}.settings-mantras .settings-loading{position:absolute;top:0;bottom:0;right:0;left:0;display:none}.settings-mantras.loading .settings-loading{display:flex}.settings-mantras .settings-empty{padding:98px 0}.settings-mantras .off-state{margin-top:20px;display:none;text-align:center}.settings-mantras .settings-form-row{display:flex;align-items:center}.settings-mantras form input{font-size:1rem}.settings-mantras .suggestions-section{margin-top:1px;display:flex;font-size:.8rem}.settings-mantras .suggestions-empty,.settings-mantras .suggestions-label{padding:8px 0;display:none}.settings-mantras .suggestions-section span.show{display:flex}.settings-mantras .suggestions-wrapper{--suggestion-padding-left:5px;margin-left:calc(var(--suggestion-padding-left) * -1);display:none;justify-content:flex-start;flex-wrap:wrap}.settings-mantras .suggestion{margin-right:7px;display:none}.settings-mantras .suggestion span{padding:8px 0;display:flex}.settings-mantras .suggestion .body{padding-right:2px;padding-left:var(--suggestion-padding-left)}.settings-mantras .suggestion .remove{padding:0 7px 0 var(--suggestion-padding-left)}.settings-mantras .suggestion .remove .icon-wrapper:after{height:18px;width:18px}.settings-mantras .suggestion .remove svg{height:8px}.settings-mantras .suggestions-empty{display:none;opacity:.5}.settings-mantras .suggestions-empty.show{display:flex}.mantra-settings-pop{display:none}.mantra-settings-pop .subpanel-header .description{margin-bottom:20px}.mantra-settings-pop .mantras-enabled.border-fix{border-bottom:1px solid var(--border-color)}.settings-mantras-onboard{height:100%;margin:0 -30px;flex-grow:1;display:none;flex-direction:column;align-items:center;justify-content:center;overflow-y:hidden!important;text-align:center}.settings-mantras-onboard.show{display:flex}.settings-mantras.loading .settings-mantras-onboard{display:none}.settings-mantras-onboard h3{margin-bottom:0}.settings-mantras-onboard .text-wrapper{margin:12px 30px 15px}.settings-mantras-onboard .text{margin-bottom:1em;opacity:.5;font-size:110%;line-height:1.4;text-align:left}.settings-mantras-onboard .current-greeting{font-style:italic}.mantra-item{transition:opacity .2s ease,max-height .2s ease}.mantra-item.active .controls,.mantra-item.pinned .controls{opacity:1}.mantra-item.hide{max-height:0;padding:0;opacity:0;overflow:hidden}.mantra-item .mantra-body{margin-right:110px;display:block;cursor:pointer;line-height:1.2;overflow:hidden;text-overflow:ellipsis}.mantra-item.editing .edit{display:flex;align-items:baseline}.custom-wrapper .mantra-item{cursor:pointer}.mantra-item .delete-group .delete-loading{display:none;opacity:.5}.delete-group.loading .delete-no,.delete-group.loading .delete-yes,.mantra-item .delete-group.loading .delete-msg{display:none}.mantra-item .delete-group.loading .delete-loading{display:inline-block}.delete-group.failed .delete-no,.delete-group.failed .delete-yes,.mantra-item .delete-group .delete-failed,.mantra-item .delete-group.failed .delete-msg{display:none}.mantra-item .delete-group.failed .delete-failed{display:inline-block}.mantra-item.active .control-activate,.mantra-item.failed .controls,.mantra-item.loading .controls,.mantra-item.selected .controls{opacity:1}.mantra-item.active .control-activate:hover{opacity:1;cursor:auto}"),
          document.getElementsByTagName("head")[0].appendChild(t);
      }),
      (n.collect.Mantras = Backbone.Collection.extend({
        loadedOnce: !1,
        initialize: function () {
          (this.model = n.models.Mantra), this.listenToOnce(this, "reset", this.onReset);
        },
        onReset: function () {
          this.loadedOnce = !0;
        },
        comparator: function (t, e) {
          var s = this.sortAttribute || "sort_order",
            t = t.get(s),
            e = e.get(s);
          return t == e ? 0 : t < e ? (this.reverse_sort ? 1 : -1) : e < t ? (this.reverse_sort ? -1 : 1) : void 0;
        },
        favs: function () {
          return this.filter(function (t) {
            return t.get("is_favorite");
          });
        }
      })),
      (n.models.Mantra = Backbone.Model.extend({
        defaults: function () {
          return { body: "New Mantra" };
        },
        save: function (t, e) {
          (e = e || {}).patch = !0;
          var n = e.success,
            a =
              ((e.success = function (t, e, s) {
                o.models.mantraManager.updateInFeed(a), n && n(t, e, s);
              }),
              this);
          Backbone.Model.prototype.save.call(this, t, e);
        },
        isPinned: function () {
          var t = o.models.mantraManager.getPinnedMantra();
          return !!t && this.get("_id") === t.id;
        }
      })),
      (n.models.MantraSettingsManager = Backbone.Model.extend({
        analytics: new o.Analytics({ feature: "mantras" }),
        defaults: { showFavs: !1, showHistory: !1 },
        feedMap: { momo: "mantra-feed-momentum", custom: "mantra-feed-custom" },
        labelCustom: "My Mantras",
        newModels: [],
        panelTitle: "Mantra Settings",
        suggestedMantras: [
          "Choose love.",
          "Create every day.",
          "Do more with less.",
          "Do your best.",
          "Drink water.",
          "Love overcomes fear.",
          "Simplify.",
          "Slow down.",
          "Take a chance.",
          "Take time for yourself.",
          "Teach everything you know.",
          "You are loved.",
          "You can do it!"
        ],
        initialize: function () {
          (this.defaultFeedState = { momo: !0, custom: !1 }),
            (this.plusUser = o.conditionalFeatures.featureEnabled("plus")),
            (this.settings = new o.models.GenericSettings("mantra")),
            o.isLoggedIn() && this.settings.fetch();
          var t = this;
          this.listenTo(o, "mantras:refresh", function () {
            t.refreshFavorites(), t.plusUser && t.collection.fetch({ reset: !0 });
          });
        },
        initCustom: function () {
          return (
            this.collection ||
              ((this.collection = new n.collect.Mantras()),
              (this.collection.url = o.globals.urlRoot + "settings/mantra/mantras"),
              this.listenTo(this.collection, "remove", this.onCollectionRemove),
              this.listenTo(this.collection, "user-change", this.onCollectionUserChange),
              this.plusUser ? this.collection.fetch({ reset: !0 }) : this.collection.trigger("reset")),
            this.collection
          );
        },
        initFavorites: function () {
          return (
            this.favorites ||
              ((this.favorites = new n.collect.Mantras()),
              (this.favorites.url = o.globals.urlRoot + "mantras/favorites"),
              (this.favorites.sortAttribute = "last_updated"),
              (this.favorites.reverse_sort = !1)),
            this.favorites
          );
        },
        initHistory: function () {
          var e;
          return (
            this.history ||
              ((this.history = new n.collect.Mantras()),
              (this.history.url = o.globals.urlRoot + "mantras/history"),
              (this.history.reverse_sort = !0),
              (this.history.load_more = o.utils.getDateString()),
              ((e = this).history.parse = function (t) {
                return (e.history.load_more = t.load_more), t.history;
              })),
            this.history
          );
        },
        showCustom: function () {
          this.set({ showFavs: !1, showHistory: !1 });
        },
        showFavs: function () {
          this.set({ showFavs: !0, showHistory: !1 }), this.trigger("navigate-away-from-custom");
        },
        showHistory: function () {
          this.set({ showFavs: !1, showHistory: !0 }), this.trigger("navigate-away-from-custom");
        },
        isShowingCustom: function () {
          return !this.isShowingFavs() && !this.isShowingHistory();
        },
        isShowingFavs: function () {
          return this.get("showFavs");
        },
        isShowingHistory: function () {
          return this.get("showHistory");
        },
        pinMantra: function (t) {
          var e = t.get("is_custom") ? "custom" : "momo";
          return this.isFeedActive(e) || this.toggleFeed(e), o.models.mantraManager.pinMantra(t, !1);
        },
        toggleFavorite: function (t) {
          var e = t.get("_id") || t.get("id"),
            s = this.collection.findWhere({ id: e }),
            n = this.favorites.findWhere({ id: e }),
            a = this.history.where({ _id: e }),
            i = t.get("is_favorite"),
            l = this;
          this.toggleFavoriteHelper(!i, s, n, a),
            o.models.mantraManager.toggleFav(t).catch(function () {
              l.toggleFavoriteHelper(i, s, n, a);
            });
        },
        toggleFavoriteHelper: function (e, t, s, n) {
          t && t.set({ is_favorite: e }),
            s && s.set({ is_favorite: e }),
            n &&
              n.map(function (t) {
                t.set({ is_favorite: e });
              });
        },
        refreshFavorites: function () {
          this.initFavorites().fetch({ reset: !0 });
        },
        refreshHistory: function () {
          this.initHistory().fetch({ reset: !0 });
        },
        getCollection: function () {
          return this.collection;
        },
        customEmpty: function () {
          return 0 === this.collection.length;
        },
        favsEmpty: function () {
          return 0 === this.favorites.length;
        },
        historyEmpty: function () {
          return 0 === this.history.length;
        },
        handleItemDelete: function (t, e) {
          var s = o.models.mantraManager.getPinnedMantra(),
            n = o.models.mantraManager.getActiveItem();
          s &&
            o.models.mantraManager.model.id === s.id &&
            (n && t.id === n.get("_id") && o.models.mantraManager.skipItem(), o.models.mantraManager.unpinMantra()),
            this.customEmpty() &&
              setTimeout(function () {
                this.toggleFeed("custom");
              }, e);
        },
        handleItemEdit: function (t) {
          o.models.mantraManager.updateInFeed(t), this.collection.trigger("user-change");
        },
        setFrequency: function (t) {
          var e = o.models.mantraSettings.getFrequency();
          t !== e && (isNaN(t) && (t = this.cycleFrequency(e)), o.models.mantraSettings.save({ frequency: t }));
        },
        cycleFrequency: function (e) {
          var t = o.models.mantraManager.frequencyLevels.map(function (t) {
              return t.level;
            }),
            s = _.findIndex(t, function (t) {
              return t === e;
            });
          return t[o.utils.getNextIndex(t, s)];
        },
        isFeedActive: function (t) {
          var e = this.settings.get(this.feedMap[t]);
          return void 0 === e ? this.defaultFeedState[t] : e;
        },
        toggleFeed: function (t) {
          var e;
          this.settings.toggle(this.feedMap[t]),
            this.autosetEnabled(t),
            this.analytics.capture("mantra feed toggle", {
              is_paid_event: !0,
              feed: "momo" === t ? "momentum" : t,
              new_value: this.isFeedActive(t)
            }),
            ("custom" === t && this.customEmpty()) ||
              ((e = o.models.mantraManager.getActiveItem()) &&
                (e.get("is_custom") ? "custom" : "momo") === t &&
                !this.isFeedActive(t) &&
                (o.models.mantraManager.trigger("wait-for-mantra"), o.models.mantraManager.skipItem()));
        },
        autosetEnabled: function (t) {
          var e = "momo" === t ? "custom" : "momo";
          this.isFeedActive(t) || this.isFeedActive(e)
            ? this.isFeedActive(t) && !o.models.mantraManager.isEnabled() && o.models.customization.save("mantraVisible", !0)
            : this.toggleFeed(e);
        },
        onCollectionRemove: function () {
          o.trigger("sync:download", "mantra"),
            this.customEmpty() && this.collection.trigger("user-change"),
            this.history && this.history.loadedOnce && this.refreshHistory(),
            this.favorites && this.favorites.loadedOnce && this.refreshFavorites();
        },
        onCollectionUserChange: function () {
          var t = this.isFeedActive("custom"),
            e = this.customEmpty();
          e || t || this.toggleFeed("custom"), e && t && this.toggleFeed("custom");
        }
      })),
      (n.views.Mantra = Backbone.View.extend({
        attributes: { class: "content-item mantra-item", "data-test": "mantra-item" },
        tagName: "li",
        template: n.templates.item,
        events: {
          "click .mantra": "handleClickSetActive",
          "click .control-activate": "handleClickSetActive",
          "click .control-pin": "handleClickPin",
          "click .control-heart": "handleClickFav",
          "click .control-edit": "handleClickEdit",
          "click .control-delete": "toggleDeleteConf",
          "click .delete-yes": "deleteItem",
          "click .delete-no": "toggleDeleteConf",
          "keyup .list-edit-input": "handleKeyupEsc",
          "keypress .list-edit-input": "handleKeypressEnter",
          "focus .list-edit-input": "updateCharCountEdit",
          "input .list-edit-input": "updateCharCountEdit",
          "click .cancel": "handleClickCancel"
        },
        initialize: function (t) {
          (this.main = t.main),
            (this.isCustom = t.isCustom),
            (this.onCustom = t.customSubnav),
            (this.manager = this.main.manager),
            (this.analytics = this.manager.analytics),
            this.listenTo(this.model, "change", this.onModelChange),
            this.listenTo(this.model, "destroy", o.settingsUtils.onDestroyModel),
            this.listenTo(this.manager, "item-editing", o.settingsUtils.preventMultipleEdits),
            this.listenTo(this.manager, "toggle-add-form", o.settingsUtils.returnToViewMode),
            this.listenTo(this.manager, "navigate-away-from-custom", this.onNavigateAwayFromCustom);
        },
        onModelChange: function () {
          this.render(), this.main.modelChangeHelper();
        },
        render: function () {
          var t = o.models.mantraManager.formatMantraForDisplay(this.model.get("body"), !1),
            e = this.model.get("is_favorite"),
            t = {
              body: t.start + t.end,
              labelActivate: this.main.labelActivate,
              labelPin: this.main.labelPin,
              isFavClass: e ? "active" : "",
              isFavTitle: e ? "Unfavorite" : "Favorite",
              showCustomControls: this.main.plusUser && this.isCustom,
              onCustomSubnav: this.onCustom,
              inputLengthMaxHtml: this.main.inputLengthMaxHtml,
              title: this.setItemTooltip()
            };
          return (
            this.$el.html(this.template(t)),
            this.$el.attr("data-mantra-id", this.model.get("_id") || this.model.get("id")),
            (this.$input = this.$(".list-edit-input")),
            (this.$deleteGroup = this.$(".delete-group")),
            this.main.updateSuggestions(),
            this
          );
        },
        setItemTooltip: function () {
          var t = "";
          return (t = this.manager.get("showHistory") ? o.utils.getFriendlyDate(this.model.get("display_date")) : t);
        },
        handleClickSetActive: function (t) {
          t.stopPropagation(), this.main.plusUser ? this.setMantraActive() : this.main.showPlusUpsell();
        },
        handleClickPin: function (t) {
          t.stopPropagation(),
            this.main.plusUser
              ? ((this.main.pinningMantra = !0),
                (t = this.manager.pinMantra(this.model)),
                this.analytics.capture("mantra " + (t ? "pin" : "unpin"), {
                  location: "settings",
                  custom: this.model.get("is_custom"),
                  is_paid_event: !0
                }))
              : this.main.showPlusUpsell();
        },
        handleClickFav: function (t) {
          t.stopPropagation(),
            this.analytics.capture("mantra " + (this.model.get("is_favorite") ? "unfav" : "fav"), {
              location: "settings",
              custom: this.model.get("is_custom")
            }),
            this.manager.toggleFavorite(this.model);
        },
        setMantraActive: function () {
          var t = o.models.mantraManager.getActiveItem(),
            e = this;
          (t && t.get("_id") === this.model.id) ||
            o.models.mantraManager.setActive(this.model).then(function () {
              o.models.mantraManager.trigger("show-mantra"), e.main.syncHelper();
              var t = e.model.get("is_custom");
              t && e.main.collection.trigger("user-change"), e.analytics.capture("mantra set active", { is_paid_event: !0, custom: t });
            });
        },
        hide: function () {
          this.$el.addClass("hide");
        },
        handleClickEdit: function () {
          o.settingsUtils.changeToEditMode(this, this.$input);
        },
        toggleDeleteConf: function () {
          o.settingsUtils.toggleDeleteConf(this);
        },
        deleteItem: function () {
          var t,
            e = this;
          this.$deleteGroup.hasClass("loading") ||
            (this.$deleteGroup.removeClass("failed").addClass("loading"),
            (t = this.model.get("id")),
            this.model.destroy({
              wait: !0,
              success: function () {
                o.models.mantraManager.trigger("mantra:deleted", t);
              },
              error: function () {
                e.$deleteGroup.removeClass("loading").addClass("failed");
              }
            }),
            this.analytics.capture("mantra delete", { is_paid_event: !0 }));
        },
        handleKeypressEnter: function (t) {
          o.settingsUtils.handleKeypressEnter(t, this.processEditForm.bind(this), this.$input);
        },
        handleKeyupEsc: function (t) {
          o.settingsUtils.handleKeyupEsc(t, this.abortEdit.bind(this));
        },
        processEditForm: function () {
          o.settingsUtils.processEditFormBasic(this) && this.analytics.capture("mantra edit", { is_paid_event: !0 });
        },
        handleClickCancel: function () {
          this.abortEdit();
        },
        abortEdit: function () {
          o.settingsUtils.abortEditBasic(this);
        },
        updateCharCountEdit: function (t) {
          o.settingsUtils.updateCharCount(t, this.main);
        },
        onNavigateAwayFromCustom: function () {
          o.settingsUtils.returnToViewMode(this);
        },
        destroy: function () {
          this.remove(), this.unbind(), this.main.checkForFavsEmpty(), this.main.checkForHistoryEmpty();
        }
      })),
      n.dependencies.settings);
  return (
    (n.views.Main = t.views.SettingsPanel.extend({
      attributes: { id: "settings-mantras", class: "settings-view settings-content settings-mantras", "data-test": "mantra-settings" },
      deletingFinalItem: !1,
      inputLengthMaxDatabase: 80,
      inputLengthMaxHtml: 100,
      inputLengthShow: 20,
      inputLengthWarn: 40,
      itemEditingId: null,
      labelCustom: "My Mantras",
      labelEnable: "Enable Mantras",
      labelMomo: "Momentum Mantras",
      labelPin: "Pin",
      labelUnpin: "Unpin",
      labelActivate: "Activate for today",
      labelAlreadyActive: "(Active for today)",
      lengthGreetingMax: 75,
      panelid: "mantras",
      panelTitle: "Mantra Settings",
      pinningMantra: !1,
      suggestionsEmpty: !1,
      suggestionsExpanded: !1,
      suggestionsToShow: 3,
      template: n.templates.main,
      timeAddSuggestion: 350,
      timeOnboardFade: 400,
      feature: "custom-mantra",
      degradedFeature: "custom-mantra-degraded",
      events: {
        "click .subnav-titles .customs": "selectCustom",
        "click .subnav-titles .favs": "selectFavs",
        "click .subnav-titles .history": "selectHistory",
        "click .list-add-button": "handleClickAddButton",
        "keyup .list-add-input": "handleKeyupAdd",
        "keypress .list-add-input": "handleKeypressAdd",
        "focus .list-add-input": "updateCharCountAdd",
        "input .list-add-input": "updateCharCountAdd",
        "click .list-add-form .cancel": "cancelAdd",
        "click .empty-add-shortcut": "handleClickAddButton",
        "click .suggestions-label": "handleClickSuggestionsLabel",
        "click .suggestion .body": "processSuggestion",
        "click .suggestion .remove": "processSuggestion",
        "click .button-advanced": "toggleAdvanced",
        "click .mantras-enabled": "handleClickMantrasEnabled",
        "click .frequency": "handleClickFrequency",
        "click .frequencies": "handleClickFrequency",
        "click .momo": "handleClickMomoFeed",
        "click .custom": "handleClickCustomFeed",
        "click .hide-onboard": "handleClickHideOnboard"
      },
      initialize: function () {
        (this.subViews = []),
          o.models.mantraSettingsManager || (o.models.mantraSettingsManager = new n.models.MantraSettingsManager()),
          (this.manager = o.models.mantraSettingsManager),
          (this.analytics = this.manager.analytics),
          (this.collection = this.manager.initCustom()),
          (this.favs = this.manager.initFavorites()),
          (this.history = this.manager.initHistory()),
          (this.plusUser = o.conditionalFeatures.featureEnabled(this.feature)),
          this.listenTo(this.favs, "reset", this.addAllFavs),
          this.listenTo(this.favs, "change", this.checkFavs),
          this.listenTo(this.history, "reset", this.addAllHistory),
          this.listenTo(this.collection, "reset", this.addAll),
          this.listenTo(this.collection, "add", this.onCollectionAdd),
          this.listenTo(this.collection, "update", this.handleCollectionUpdate),
          this.listenTo(this.manager, "change", this.updatePanel),
          this.listenTo(this.manager.settings, "change", this.updatePanel),
          this.listenTo(o.models.customization, "change:mantraVisible", this.updatePanel),
          this.listenTo(o.models.mantraManager, "change", this.updatePanel),
          this.listenTo(o.models.mantraManager, "mantra-pin", this.onMantraPin),
          this.listenTo(o.models.mantraSettings, "change", this.updatePanel),
          this.analytics.capture("settings panel show");
      },
      render: function () {
        var t = {
          advancedLabel: "Settings",
          currentGreeting: this.getCurrentGreeting(),
          description: "Simple phrases to build positive mental habits",
          inputLengthMaxHtml: this.inputLengthMaxHtml,
          labelCustom: this.labelCustom,
          labelEnable: this.labelEnable,
          labelMomo: this.labelMomo,
          frequencyLevels: o.models.mantraManager.frequencyLevels,
          suggestedMantras: this.manager.suggestedMantras,
          isPlus: this.plusUser,
          title: "Mantras"
        };
        return (
          this.$el.html(this.template(t)),
          this.setViewVars(),
          this.collection.loadedOnce ? this.addAll() : this.$el.addClass("loading"),
          o.conditionalFeatures.featureEnabled(this.degradedFeature) || o.conditionalFeatures.featureEnabled(this.feature)
            ? this.collection.fetch({ reset: !0 })
            : this.$momoToggler.addClass("fixed"),
          this.updatePanel(),
          this
        );
      },
      setViewVars: function () {
        (this.$mainContainer = this.$(".main-container")),
          (this.$subnav = this.$(".settings-subnav")),
          (this.$subnavTitleCustom = this.$(".subnav-titles .customs")),
          (this.$subnavTitleFavs = this.$(".subnav-titles .favs")),
          (this.$subnavTitleHistory = this.$(".subnav-titles .history")),
          (this.$offState = this.$(".off-state")),
          (this.$mantraToggler = this.$(".mantras-enabled")),
          (this.$frequency = this.$(".frequency")),
          (this.$momoToggler = this.$(".momo")),
          (this.$customToggler = this.$(".custom")),
          (this.$feeds = this.$(".feeds")),
          (this.$listWrapper = this.$(".list-wrapper")),
          (this.$customWrapper = this.$(".custom-wrapper")),
          (this.$addForm = this.$(".list-add-form")),
          (this.$addInput = this.$(".list-add-input")),
          (this.$customList = this.$(".custom-list")),
          (this.$customEmpty = this.$(".custom-empty")),
          (this.$suggestionsLabel = this.$(".suggestions-label")),
          (this.$suggestionsWrapper = this.$(".suggestions-wrapper")),
          (this.$suggestions = this.$(".suggestion")),
          (this.$suggestionsEmpty = this.$(".suggestions-empty")),
          (this.$favsWrapper = this.$(".favs-wrapper")),
          (this.$favsList = this.$(".favs-list")),
          (this.$favsEmpty = this.$(".favs-empty")),
          (this.$historyWrapper = this.$(".history-wrapper")),
          (this.$historyList = this.$(".history-list")),
          (this.$historyEmpty = this.$(".history-empty")),
          (this.$onboard = this.$(".settings-mantras-onboard"));
      },
      getCurrentGreeting: function () {
        var t = "Good " + o.utils.getDayPart(o.models.date.get("date")) + ", " + o.models.customization.get("displayname");
        return (t = t.length > this.lengthGreetingMax ? t.slice(0, this.lengthGreetingMax - 1).trimEnd() + "…" : t);
      },
      handleCollectionUpdate: function () {
        this.updatePanel();
      },
      updatePanel: function () {
        var t = o.models.customization.get("mantraVisible"),
          e = this.manager.isFeedActive("custom"),
          s = this.manager.isFeedActive("momo");
        this.manager.isShowingCustom() && this.updateSuggestions(),
          this.$subnav.css("display", t ? "flex" : "none"),
          this.$listWrapper.mToggle("block", t),
          o.settingsUtils.updateAddFormBorder(this.$addForm, this.manager.customEmpty()),
          this.$offState.mToggle("block", !t),
          this.$mantraToggler.toggleClass("on", t).toggleClass("border-fix", !t && !this.$feeds.is(":visible")),
          this.$momoToggler.toggleClass("on", s),
          this.$customToggler.toggleClass("on", e),
          this.syncFrequency(),
          t && this.showActiveCollection(),
          this.displayMainOrOnboard();
      },
      showPlusUpsell: function () {
        o.cmd("modal.open", "UPSELL_MANTRAS", { eventSource: "settings" });
      },
      addAll: function () {
        var e = this;
        this.$el.removeClass("loading"),
          _.each(this.subViews, function (t) {
            t.destroy();
          }),
          (this.subViews = []),
          this.$customList.html(""),
          this.collection.models.map(function (t) {
            e.addOne(t, !1);
          }),
          this.updatePanel();
      },
      addOne: function (t, e) {
        var t = new n.views.Mantra({ model: t, main: this, customSubnav: this.manager.isShowingCustom(), isCustom: !0 }),
          s = t.render().$el;
        this.subViews.push(t),
          this.$customList.prepend(s),
          e && s.addClass("animate-item"),
          setTimeout(function () {
            s.removeClass("animate-item");
          }, 300);
      },
      onCollectionAdd: function (t) {
        this.addOne(t, !0), this.collection.trigger("user-change");
      },
      modelChangeHelper: function () {
        this.syncHelper(!0), this.manager.isShowingFavs() && this.checkForFavsEmpty();
      },
      getActiveList: function () {
        return this.manager.isShowingHistory() ? this.$historyList : this.manager.isShowingFavs() ? this.$favsList : this.$customList;
      },
      onMantraPin: function () {
        this.syncHelper();
      },
      syncHelper: function (t) {
        var e = this.getActiveList();
        this.syncPinnedMantra(e, t), this.syncActiveMantra(e);
      },
      syncPinnedMantra: function (t, e) {
        var s = o.models.mantraManager.getPinnedMantra(),
          n = t.find(".mantra-item.pinned"),
          a = n.length;
        s
          ? ((s = s.id),
            (!e && 1 === a && i(n[0]).data("mantraId") === s) || (0 < a && this.markItemsAsUnpinned(n), this.markPinnedItem(t, s)))
          : 0 < a && this.markItemsAsUnpinned(n);
      },
      markItemsAsUnpinned: function (t) {
        t.removeClass("pinned").find(".control-pin").attr("title", this.labelPin).removeClass("active");
      },
      markPinnedItem: function (t, e) {
        t.find('[data-mantra-id="' + e + '"]')
          .addClass("pinned")
          .find(".control-pin")
          .attr("title", this.labelUnpin)
          .addClass("active");
      },
      syncActiveMantra: function (t) {
        var e = o.models.mantraManager.getActiveItem(),
          s = t.find(".mantra-item.active"),
          n = s.length;
        null == e
          ? this.markItemsAsInactive(s)
          : ((e = e.get("_id")),
            (1 === n && i(s[0]).data("mantraId") === e) || (0 < n && this.markItemsAsInactive(s), this.markActiveItem(t, e)));
      },
      markItemsAsInactive: function (t) {
        t.removeClass("active").find(".control-activate").attr("title", this.labelActivate).removeClass("active");
      },
      markActiveItem: function (t, e) {
        t.find('[data-mantra-id="' + e + '"]')
          .addClass("active")
          .find(".control-activate")
          .attr("title", this.labelAlreadyActive)
          .addClass("active");
      },
      syncFrequency: function () {
        this.$frequency.removeClass("active"),
          this.$('.frequency[data-level="' + o.models.mantraSettings.getFrequency() + '"]').addClass("active");
      },
      toggleAdvanced: function () {
        o.settingsUtils.toggleAdvanced(this);
      },
      handleClickMantrasEnabled: function () {
        o.models.mantraManager.toggleEnabled(this.plusUser),
          o.models.mantraManager.isEnabled() && !this.$feeds.is(":visible") && this.$feeds.css("display", "block"),
          this.analytics.capture("feature " + (o.models.mantraManager.isEnabled() ? "enable" : "disable"), {
            location: "settings mantras"
          });
      },
      handleClickFrequency: function (t) {
        t.stopImmediatePropagation(),
          this.plusUser
            ? ((t = parseInt(i(t.delegatedTarget).data("level"))),
              this.manager.setFrequency(t, this.panelTitle),
              this.analytics.capture("frequency change", { new_value: o.models.mantraSettings.getFrequencyName(), is_paid_event: !0 }),
              o.models.mantraManager.isEnabled() || this.handleClickMantrasEnabled())
            : this.showPlusUpsell();
      },
      handleClickMomoFeed: function () {
        this.plusUser && this.manager.toggleFeed("momo");
      },
      handleClickCustomFeed: function () {
        this.plusUser ? this.manager.toggleFeed("custom") : this.showPlusUpsell();
      },
      selectCustom: function (t) {
        this.manager.isShowingCustom() ? o.utils.toggleClassTwice(i(t.delegatedTarget), "active") : this.manager.showCustom();
      },
      selectFavs: function (t) {
        this.manager.isShowingFavs()
          ? o.utils.toggleClassTwice(i(t.delegatedTarget), "active")
          : (this.cancelAdd(),
            this.manager.showFavs(),
            this.manager.favorites.loadedOnce || this.$el.addClass("loading"),
            this.manager.refreshFavorites());
      },
      selectHistory: function (t) {
        this.manager.isShowingHistory()
          ? o.utils.toggleClassTwice(i(t.delegatedTarget), "active")
          : (this.cancelAdd(),
            this.manager.showHistory(),
            this.manager.history.loadedOnce || this.$el.addClass("loading"),
            this.manager.refreshHistory());
      },
      showActiveCollection: function () {
        var t = this.manager.isShowingCustom(),
          e = this.manager.isShowingFavs(),
          s = this.manager.isShowingHistory();
        this.$customWrapper.mToggle("block", t),
          this.$favsWrapper.mToggle("block", e),
          this.$historyWrapper.mToggle("block", s),
          this.$subnavTitleCustom.toggleClass("active", t),
          this.$subnavTitleFavs.toggleClass("active", e),
          this.$subnavTitleHistory.toggleClass("active", s),
          e
            ? (this.addAllFavs(),
              (t = 0 < this.manager.initFavorites().length),
              this.$favsList.mToggle("block", t),
              this.$favsEmpty.mToggle("block", !t))
            : s
            ? (this.addAllHistory(),
              (e = 0 < this.manager.initHistory().length),
              this.$historyList.mToggle("block", e),
              this.$historyEmpty.mToggle("block", !e))
            : this.showCustomHelper();
      },
      showCustomHelper: function () {
        var t,
          e = this.manager.customEmpty();
        this.$customList.mToggle("block", !e),
          this.$customEmpty.mToggle("block", e),
          this.deletingFinalItem
            ? (this.cancelAdd(), (this.deletingFinalItem = !1))
            : ((t = this),
              setTimeout(function () {
                t.syncHelper();
              }, 0));
      },
      checkFavs: function () {
        _.each(this.subViewsFavs, function (t) {
          t.model.get("is_favorite") || t.hide();
        });
      },
      addAllFavs: function () {
        this.$favsList &&
          (this.manager.favorites.loadedOnce && this.manager.isShowingFavs() && this.$el.removeClass("loading"),
          this.$favsList.empty(),
          _.each(this.subViewsFavs, function (t) {
            t.destroy();
          }),
          (this.subViewsFavs = []),
          this.addAllFavsHelper(this.manager.initFavorites()),
          this.syncHelper());
      },
      addAllFavsHelper: function (t) {
        var e = this;
        t.forEach(function (t) {
          t = new n.views.Mantra({ model: t, main: e, isCustom: t.get("is_custom") });
          e.subViewsFavs.push(t), e.$favsList.append(t.render().$el);
        }),
          0 < t.length && (this.$favsList.css("display", "block"), this.$favsEmpty.hide());
      },
      checkForFavsEmpty: function () {
        this.manager.isShowingFavs() && this.manager.favsEmpty() && (this.$favsList.hide(), this.$favsEmpty.css("display", "block"));
      },
      addAllHistory: function () {
        this.$historyList &&
          (this.manager.history.loadedOnce && this.manager.isShowingHistory() && this.$el.removeClass("loading"),
          this.$historyList.empty(),
          _.each(this.subViewsHistory, function (t) {
            t.destroy();
          }),
          (this.subViewsHistory = []),
          this.addAllHistoryHelper(this.manager.initHistory()),
          this.syncHelper());
      },
      addAllHistoryHelper: function (t) {
        var e = this;
        t.forEach(function (t) {
          t = new n.views.Mantra({ model: t, main: e, isCustom: t.get("is_custom") });
          e.subViewsHistory.push(t), e.$historyList.append(t.render().$el);
        }),
          0 < t.length && (this.$historyList.css("display", "block"), this.$historyEmpty.hide());
      },
      checkForHistoryEmpty: function () {
        this.manager.isShowingHistory() &&
          this.manager.historyEmpty() &&
          (this.$historyList.hide(), this.$historyEmpty.css("display", "block"));
      },
      handleClickAddButton: function () {
        this.plusUser ? this.toggleAddForm() : this.showPlusUpsell();
      },
      toggleAddForm: function (t) {
        this.manager.trigger("toggle-add-form"),
          this.manager.isShowingCustom() || this.selectCustom(),
          this.updateSuggestions(),
          this.$addForm.is(":visible") && !t
            ? (this.$addForm.removeClass("show"), this.manager.customEmpty() && this.$customEmpty.css("display", "block"))
            : (this.manager.customEmpty() && this.$customEmpty.hide(), this.$addForm.addClass("show"), this.$addInput.trigger("focus"));
      },
      resetAdd: function (t) {
        this.$addInput.val(""), this.updateSuggestions(), t || this.$addInput.trigger("focus");
      },
      handleKeyupAdd: function (t) {
        o.settingsUtils.handleKeyupEsc(t, this.cancelAdd.bind(this));
      },
      cancelAdd: function (t) {
        o.settingsUtils.cancelAddGeneral(this, t);
      },
      updateCharCountAdd: function (t) {
        o.settingsUtils.updateCharCount(t, this);
      },
      handleKeypressAdd: function (t) {
        var e = this;
        13 !== t.keyCode || t.shiftKey || t.ctrlKey || t.metaKey || t.altKey
          ? o.settingsUtils.checkForInputMaxLengthError(this.$addInput)
          : (t.preventDefault(),
            this.processAddForm(this.$addForm, !1, function () {
              e.resetAdd(!1);
            }));
      },
      processAddForm: function (t, e, s) {
        (t = e ? t.text() : this.ensureEndsInPeriod(this.$addInput.val().trim())), (t = o.utils.capitalizeFirstLetter(t));
        o.utils.betweenInclusive(t.length, 1, this.inputLengthMaxDatabase)
          ? (this.collection.create(
              { body: t, type: "mantra" },
              {
                wait: !0,
                success: s,
                error: function () {
                  console.log("mantra add error");
                }
              }
            ),
            this.analytics.capture("mantra add", { suggestion: e, is_paid_event: !0 }))
          : e || o.settingsUtils.flashInputLengthError(this.$addInput);
      },
      ensureEndsInPeriod: function (t) {
        return !!t && (o.utils.endsWithEndPunctuation(t) || (t += "."), t);
      },
      updateSuggestions: function () {
        this.determineAvailableSuggestions(), this.handleSuggestionsDisplay();
      },
      determineAvailableSuggestions: function () {
        var e,
          s,
          t = this;
        this.$suggestions.each(function () {
          (e = !0),
            (s = i(this).find(".body").text()),
            i(this).hasClass("added") || i(this).hasClass("removed")
              ? (e = !1)
              : t.manager.collection.each(function (t) {
                  if (s === t.get("body")) return (e = !1);
                }),
            i(this).toggleClass("available", e);
        });
      },
      handleSuggestionsDisplay: function () {
        var e = this,
          t = this.$(".suggestion.available"),
          s = 0 === t.length;
        this.$suggestionsLabel.toggleClass("show", !s && !this.suggestionsExpanded),
          this.$suggestionsWrapper.toggleClass("show", !s && this.suggestionsExpanded),
          this.$suggestionsEmpty.toggleClass("show", s),
          this.$suggestions.removeClass("show"),
          t.each(function (t) {
            i(this).toggleClass("show", t < e.suggestionsToShow);
          });
      },
      handleClickSuggestionsLabel: function () {
        (this.suggestionsExpanded = !0), this.updateSuggestions();
      },
      processSuggestion: function (t) {
        t.preventDefault();
        var e = i(t.delegatedTarget).parent(),
          t = i(t.delegatedTarget).hasClass("remove"),
          s = this;
        if ((e.removeClass("available"), t)) e.addClass("removed");
        else {
          if (this.suggestionFillInProgress) return;
          (this.suggestionFillInProgress = !0),
            e.addClass("added"),
            this.processAddForm(e.find(".body"), !0, function () {
              s.suggestionFillInProgress = !1;
            });
        }
        this.updateSuggestions();
      },
      handleClickHideOnboard: function (t) {
        t.preventDefault(), o.models.mantraManager.activateFirstMantra();
      },
      displayMainOrOnboard: function () {
        var t = o.models.mantraSettings.get("firstMantraActivated");
        this.$onboard.toggleClass("show", !t), this.$mainContainer.toggleClass("show", t);
      }
    })),
    o.commandManager &&
      o.commandManager.registerCommand("settings.panels.mantras", function () {
        return new n.views.Main();
      }),
    n.styles.style(),
    (n.styleLoaded = !0),
    o.trigger("settings:register:nav", { id: "mantra-settings", title: "Mantras", cmd: "settings.panels.mantras", position: 17 }),
    n
  );
};
m.addinManager && m.addinManager.registerAddinFn("dd91d97e-fc83-4fca-b5cb-d89eb2e1dd0f", fn_addin);
