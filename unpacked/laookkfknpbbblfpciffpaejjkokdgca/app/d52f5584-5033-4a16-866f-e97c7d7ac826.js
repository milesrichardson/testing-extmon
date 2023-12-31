var fn_addin = function (a, m, t) {
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
        addin: "D52F5584-5033-4A16-866F-E97C7D7AC826",
        id: "settings_backgrounds",
        dependencies: ["settings"],
        commands: ["background.custom.uploadfiles", "settings.panels.backgrounds"]
      }),
      a.console.log(a.elapsed() + ": " + s.info.id + " started"),
      (s.templates = s.templates || {}),
      (s.templates.custom = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, s, n) {
          return '<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">Personalize your dashboard with your own photos</p>\n\t<p class="settings-empty-description">Drag and drop a photo or click + Add Photo</p>\n</div>\n\n<div class="tile-list backgrounds-list hidden" data-test="custom-photos-list"></div>\n';
        },
        useData: !0
      })),
      (s.templates.detailCustom = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, s, n) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l = t.hooks.helperMissing,
            c = "function",
            r = t.escapeExpression;
          return (
            '<div class="pop-body settings-detail settings-detail-background">\n\t<div class="settings-detail-header">\n\t\t<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\t\t<h3>Edit Photo</h3>\n\t</div>\n\n\t<div class="settings-detail-body">\n\t\t<form class="settings-background-edit">\n\t\t\t<div class="image" align="center">\n\t\t\t\t<img class="img-uploaded" align="center" alt="Uploaded Image"/>\n\t\t\t</div>\n\n\t\t\t<h4>Photo Info <span class="optional">Optional</span></h4>\n\n\t\t\t<div class="input-group">\n\t\t\t\t<label>Title</label>\n\t\t\t\t<input type="text" name="title" class="input-title" placeholder="e.g. Location" value="' +
            r(
              typeof (o =
                null !=
                (o =
                  (t =
                    t.lookupProperty ||
                    function (t, e) {
                      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                    })(i, "title") || (null != e ? t(e, "title") : e))
                  ? o
                  : l) == c
                ? o.call(a, { name: "title", hash: {}, data: n, loc: { start: { line: 17, column: 91 }, end: { line: 17, column: 100 } } })
                : o
            ) +
            '" maxlength="' +
            r(
              typeof (o = null != (o = t(i, "inputLengthMaxHtml") || (null != e ? t(e, "inputLengthMaxHtml") : e)) ? o : l) == c
                ? o.call(a, {
                    name: "inputLengthMaxHtml",
                    hash: {},
                    data: n,
                    loc: { start: { line: 17, column: 113 }, end: { line: 17, column: 135 } }
                  })
                : o
            ) +
            '" data-test="detail-custom-input-title">\n\t\t\t</div>\n\n\t\t\t<div class="input-group">\n\t\t\t\t<label>Source</label>\n\t\t\t\t<input type="text" name="source" class="input-source" placeholder="e.g. Photographer Name" value="' +
            r(
              typeof (o = null != (o = t(i, "source") || (null != e ? t(e, "source") : e)) ? o : l) == c
                ? o.call(a, {
                    name: "source",
                    hash: {},
                    data: n,
                    loc: { start: { line: 22, column: 102 }, end: { line: 22, column: 112 } }
                  })
                : o
            ) +
            '" maxlength="' +
            r(
              typeof (o = null != (o = t(i, "inputLengthMaxHtml") || (null != e ? t(e, "inputLengthMaxHtml") : e)) ? o : l) == c
                ? o.call(a, {
                    name: "inputLengthMaxHtml",
                    hash: {},
                    data: n,
                    loc: { start: { line: 22, column: 125 }, end: { line: 22, column: 147 } }
                  })
                : o
            ) +
            '" data-test="detail-custom-input-source">\n\t\t\t</div>\n\n\t\t\t<div class="actions">\x3c!--\n\t\t\t\t--\x3e<span class="button submit"><i class="loading-icon"></i><i class="error-icon" title="Trouble connecting... Click to retry">!</i>Save</span>\x3c!--\n\t\t\t\t--\x3e<span class="button button-secondary cancel">Cancel</span>\x3c!--\n\t\t\t\t--\x3e<div class="u--right">\x3c!--\n\t\t\t\t\t--\x3e<span class="actions-right button button-secondary button-set-active">Set Active</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="actions-right button button-secondary button-delete">Delete</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete-group">\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button button-secondary delete-msg u--not-clickable">Delete?</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button control button-secondary delete-yes">\n\t\t\t\t\t\t\t<i class="icon icon-checkmark">\n\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577.95 469.42"><polygon points="195.09 469.42 137.44 424.64 140.4 421.42 0 298 46.22 245.43 187.68 369.79 526.33 0 577.95 47.28 229.72 427.53 195.09 469.42"/></svg>\n\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button control button-secondary delete-no">\n\t\t\t\t\t\t\t<i class="icon icon-x">\n\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.97 47.97"><path d="M28.23,24,47.09,5.12A3,3,0,0,0,42.85.88L24,19.74,5.12.88A3,3,0,0,0,.88,5.12L19.74,24,.88,42.85a3,3,0,1,0,4.24,4.24L24,28.23,42.85,47.09a3,3,0,0,0,4.24-4.24Z" transform="translate(0 0)"/></svg>\n\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t</span>\x3c!--\n\t\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t--\x3e</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n'
          );
        },
        useData: !0
      })),
      (s.templates.detailStock = Handlebars.template({
        1: function (t, e, i, s, n) {
          return '<span class="background-stock-source">This photo has been removed and is no longer available to be set active</span>';
        },
        3: function (t, e, i, s, n) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l = t.hooks.helperMissing,
            c = "function",
            r = t.escapeExpression;
          return (
            '\t\t\t\t<span class="background-stock-source clickable-hack"><a class="background-stock-source-link" href="' +
            r(
              typeof (o =
                null !=
                (o =
                  (t =
                    t.lookupProperty ||
                    function (t, e) {
                      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                    })(i, "sourceUrl") || (null != e ? t(e, "sourceUrl") : e))
                  ? o
                  : l) == c
                ? o.call(a, {
                    name: "sourceUrl",
                    hash: {},
                    data: n,
                    loc: { start: { line: 16, column: 103 }, end: { line: 16, column: 116 } }
                  })
                : o
            ) +
            '" target="_blank">' +
            r(
              typeof (o = null != (o = t(i, "attribution") || (null != e ? t(e, "attribution") : e)) ? o : l) == c
                ? o.call(a, {
                    name: "attribution",
                    hash: {},
                    data: n,
                    loc: { start: { line: 16, column: 134 }, end: { line: 16, column: 149 } }
                  })
                : o
            ) +
            "</a></span>\n"
          );
        },
        5: function (t, e, i, s, n) {
          var o =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
          return (
            '\t\t\t\t<span class="background-stock-source u--selectable">' +
            t.escapeExpression(
              "function" ==
                typeof (i = null != (i = o(i, "attribution") || (null != e ? o(e, "attribution") : e)) ? i : t.hooks.helperMissing)
                ? i.call(null != e ? e : t.nullContext || {}, {
                    name: "attribution",
                    hash: {},
                    data: n,
                    loc: { start: { line: 18, column: 56 }, end: { line: 18, column: 71 } }
                  })
                : i
            ) +
            "</span>\n\t\t\t"
          );
        },
        7: function (t, e, i, s, n) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\t\t\t<span class="button button-clear button-set-active button-set-active-stock clickable-hack">\n\t\t\t\t' +
            t.escapeExpression(
              "function" ==
                typeof (o = null != (o = l(i, "labelSelect") || (null != e ? l(e, "labelSelect") : e)) ? o : t.hooks.helperMissing)
                ? o.call(a, {
                    name: "labelSelect",
                    hash: {},
                    data: n,
                    loc: { start: { line: 23, column: 4 }, end: { line: 23, column: 19 } }
                  })
                : o
            ) +
            "\n\t\t\t\t" +
            (null !=
            (o = l(i, "unless").call(a, null != e ? l(e, "plusUser") : e, {
              name: "unless",
              hash: {},
              fn: t.program(8, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 24, column: 4 }, end: { line: 24, column: 77 } }
            }))
              ? o
              : "") +
            "\n\t\t\t</span>\n"
          );
        },
        8: function (t, e, i, s, n) {
          return '<span class="badge badge-plus">PLUS</span>';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, s, n) {
          var o,
            a,
            l = null != e ? e : t.nullContext || {},
            c = t.hooks.helperMissing,
            r = "function",
            d = t.escapeExpression,
            u =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<div class="pop-body settings-detail settings-detail-background">\n\t<div class="settings-detail-header">\n\t\t<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\t\t<h3>Photo Info</h3>\n\t\t' +
            (null !=
            (o = u(i, "unless").call(l, null != e ? u(e, "active") : e, {
              name: "unless",
              hash: {},
              fn: t.program(1, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 5, column: 2 }, end: { line: 5, column: 147 } }
            }))
              ? o
              : "") +
            '\n\t</div>\n\n\t<div class="settings-detail-body">\n\t\t<div class="image" align="center">\n\t\t\t<img class="img-uploaded" align="center" alt="Uploaded Image"/>\n\t\t</div>\n\n\t\t<div class="background-stock-info">\n\t\t\t<span class="background-stock-title u--selectable">' +
            d(
              typeof (a = null != (a = u(i, "title") || (null != e ? u(e, "title") : e)) ? a : c) == r
                ? a.call(l, { name: "title", hash: {}, data: n, loc: { start: { line: 14, column: 54 }, end: { line: 14, column: 63 } } })
                : a
            ) +
            "</span><br>\n" +
            (null !=
            (o = u(i, "if").call(l, null != e ? u(e, "sourceUrl") : e, {
              name: "if",
              hash: {},
              fn: t.program(3, n, 0),
              inverse: t.program(5, n, 0),
              data: n,
              loc: { start: { line: 15, column: 3 }, end: { line: 19, column: 10 } }
            }))
              ? o
              : "") +
            '<br>\n\t\t\t<span class="background-stock-date">Last seen ' +
            d(
              typeof (a = null != (a = u(i, "displayDate") || (null != e ? u(e, "displayDate") : e)) ? a : c) == r
                ? a.call(l, {
                    name: "displayDate",
                    hash: {},
                    data: n,
                    loc: { start: { line: 20, column: 49 }, end: { line: 20, column: 64 } }
                  })
                : a
            ) +
            "</span>\n" +
            (null !=
            (o = u(i, "if").call(l, null != e ? u(e, "active") : e, {
              name: "if",
              hash: {},
              fn: t.program(7, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 21, column: 3 }, end: { line: 26, column: 10 } }
            }))
              ? o
              : "") +
            "\t\t</div>\n\t</div>\n</div>\n\n"
          );
        },
        useData: !0
      })),
      (s.templates.favorites = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, s, n) {
          return '<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">No favorite photos yet</p>\n\t<p class="settings-empty-description">Click the heart icon under a photo caption to start your collection</p>\n</div>\n\n<div class="tile-list backgrounds-list hidden"></div>\n';
        },
        useData: !0
      })),
      (s.templates.history = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, s, n) {
          return '<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">No photo history yet</p>\n\t<p class="settings-empty-description">Your past photos will appear here</p>\n</div>\n\n<div class="tile-list backgrounds-list hidden"></div>\n<div class="load-more">\n\t<span class="button load-more-button">Load More</span>\n</div>\n';
        },
        useData: !0
      })),
      (s.templates.main = Handlebars.template({
        1: function (t, e, i, s, n) {
          return '<span class="badge badge-plus">Plus</span>';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, s, n) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l = t.hooks.helperMissing,
            c = "function",
            r = t.escapeExpression,
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\x3c!-- Header --\x3e\n<div class="subpanel-header">\n\t<span class="button-advanced">Settings<i class="icon icon-angle-down"></i></span>\n\t<h3>Photos</h3>\n\t<p class="description">See a new inspiring photo each day</p>\n</div>\n\n\n\x3c!-- Feeds --\x3e\n<div class="smooth-height-wrapper">\n\t<div class="smooth-height-content">\n\t\t<div class="wrapper-advanced">\n\t\t\t<h4>Feeds</h4>\n\t\t\t<ul class="settings-list">\n\t\t\t\t<li class="slide-toggle has-toggle ' +
            r(
              typeof (o = null != (o = d(i, "feedMomentumClass") || (null != e ? d(e, "feedMomentumClass") : e)) ? o : l) == c
                ? o.call(a, {
                    name: "feedMomentumClass",
                    hash: {},
                    data: n,
                    loc: { start: { line: 15, column: 39 }, end: { line: 15, column: 60 } }
                  })
                : o
            ) +
            '" id="feed-momentum-slider">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Momentum Photos</span>\n\t\t\t\t\t<span class="option-message">See a daily photo from our curated feed</span>\n\t\t\t\t</li>\n\t\t\t\t<li class="slide-toggle has-toggle ' +
            r(
              typeof (o = null != (o = d(i, "feedCustomClass") || (null != e ? d(e, "feedCustomClass") : e)) ? o : l) == c
                ? o.call(a, {
                    name: "feedCustomClass",
                    hash: {},
                    data: n,
                    loc: { start: { line: 20, column: 39 }, end: { line: 20, column: 58 } }
                  })
                : o
            ) +
            '" id="feed-custom-slider">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">' +
            r(
              typeof (o = null != (o = d(i, "labelCustom") || (null != e ? d(e, "labelCustom") : e)) ? o : l) == c
                ? o.call(a, {
                    name: "labelCustom",
                    hash: {},
                    data: n,
                    loc: { start: { line: 22, column: 32 }, end: { line: 22, column: 47 } }
                  })
                : o
            ) +
            '</span>\n\t\t\t\t\t<span class="badge badge-plus">PLUS</span>\n\t\t\t\t\t<span class="option-message">Add your own photos and change the photo anytime</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\n\n\x3c!-- Subnav + add button --\x3e\n<nav class="settings-subnav">\n\t<div class="subnav-titles">\n\t\t<h4 class="custom" data-test="custom-photos-tab">' +
            r(
              typeof (o = null != (o = d(i, "labelCustom") || (null != e ? d(e, "labelCustom") : e)) ? o : l) == c
                ? o.call(a, {
                    name: "labelCustom",
                    hash: {},
                    data: n,
                    loc: { start: { line: 35, column: 51 }, end: { line: 35, column: 66 } }
                  })
                : o
            ) +
            '</h4>\x3c!--\n\t\t--\x3e<h4 class="favorites">Favorites</h4>\x3c!--\n\t\t--\x3e<h4 class="history">History</h4>\n\t</div>\n\t<div class="button-add-container">\n\t\t<input type="file" multiple class="add-background file-input">\n\t\t<span class="button button-choose fake-file-input list-add-button">+ Add<span class="u--touch-hide"> Photo ' +
            (null !=
            (r = d(i, "unless").call(a, null != e ? d(e, "isPlus") : e, {
              name: "unless",
              hash: {},
              fn: t.program(1, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 41, column: 109 }, end: { line: 41, column: 180 } }
            }))
              ? r
              : "") +
            '</span>\n\t</div>\n</nav>\n<div class="settings-subnav-placeholder"></div>\n\n\n\x3c!-- Lists --\x3e\n<div class="list-wrapper has-subnav">\n\t<div class="list-body list-body-custom"></div>\n\t<div class="list-body list-body-favorites"></div>\n\t<div class="list-body list-body-history"></div>\n</div>\n\n\n\x3c!-- Submit photo CTA --\x3e\n<div class="submit-photo">\n\t<h4>Submit your photos</h4>\n\t<p class="description">Want to showcase your photography in Momentum?</p>\n\t<div><a href="http://moda.sh/submit-photos" class="button button-small see-photo-guidelines" target="_blank">See photo guidelines</a></div>\n</div>\n'
          );
        },
        useData: !0
      })),
      (s.templates.tile = Handlebars.template({
        1: function (t, e, i, s, n) {
          return '<span class="photo-removed-text">Photo Removed</span>';
        },
        3: function (t, e, i, s, n) {
          var o =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
          return (
            '<span class="control control-select" title="' +
            t.escapeExpression(
              "function" ==
                typeof (i = null != (i = o(i, "labelSelect") || (null != e ? o(e, "labelSelect") : e)) ? i : t.hooks.helperMissing)
                ? i.call(null != e ? e : t.nullContext || {}, {
                    name: "labelSelect",
                    hash: {},
                    data: n,
                    loc: { start: { line: 4, column: 66 }, end: { line: 4, column: 81 } }
                  })
                : i
            ) +
            '"><i class="icon-check"></i></span>'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, s, n) {
          var o,
            a = null != e ? e : t.nullContext || {},
            l = t.hooks.helperMissing,
            c = "function",
            r = t.escapeExpression,
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<span class="tile-list-image"></span>\n' +
            (null !=
            (o = d(i, "unless").call(a, null != e ? d(e, "showSetActive") : e, {
              name: "unless",
              hash: {},
              fn: t.program(1, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 2, column: 0 }, end: { line: 2, column: 89 } }
            }))
              ? o
              : "") +
            '\n<span class="tile-list-actions" data-test="tile-list-actions">\n\t' +
            (null !=
            (o = d(i, "if").call(a, null != e ? d(e, "showSetActive") : e, {
              name: "if",
              hash: {},
              fn: t.program(3, n, 0),
              inverse: t.noop,
              data: n,
              loc: { start: { line: 4, column: 1 }, end: { line: 4, column: 123 } }
            }))
              ? o
              : "") +
            '\n\t<span class="control control-select-error" title="' +
            r(
              typeof (t = null != (t = d(i, "labelSelectError") || (null != e ? d(e, "labelSelectError") : e)) ? t : l) == c
                ? t.call(a, {
                    name: "labelSelectError",
                    hash: {},
                    data: n,
                    loc: { start: { line: 5, column: 51 }, end: { line: 5, column: 71 } }
                  })
                : t
            ) +
            '">\n\t\t<span class="icon-error-wrapper">\n\t\t\t<svg class="icon-error" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 24 24" xml:space="preserve"><g><path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,19.66   c-0.938,0-1.58-0.723-1.58-1.66c0-0.964,0.669-1.66,1.58-1.66c0.963,0,1.58,0.696,1.58,1.66C13.58,18.938,12.963,19.66,12,19.66z    M12.622,13.321c-0.239,0.815-0.992,0.829-1.243,0c-0.289-0.956-1.316-4.585-1.316-6.942c0-3.11,3.891-3.125,3.891,0   C13.953,8.75,12.871,12.473,12.622,13.321z" fill="#D80027" /></g></svg>\n\t\t</span>\n\t</span>\n\t<span class="control control-edit" title="' +
            r(
              typeof (t = null != (t = d(i, "editIconTitle") || (null != e ? d(e, "editIconTitle") : e)) ? t : l) == c
                ? t.call(a, {
                    name: "editIconTitle",
                    hash: {},
                    data: n,
                    loc: { start: { line: 10, column: 43 }, end: { line: 10, column: 60 } }
                  })
                : t
            ) +
            '" data-test="control-edit"><i class="' +
            r(
              typeof (t = null != (t = d(i, "editIconClass") || (null != e ? d(e, "editIconClass") : e)) ? t : l) == c
                ? t.call(a, {
                    name: "editIconClass",
                    hash: {},
                    data: n,
                    loc: { start: { line: 10, column: 97 }, end: { line: 10, column: 114 } }
                  })
                : t
            ) +
            '" data-test="control-edit-icon"></i></span>\n</span>\n<span class="tile-list-loading"><i class="loading-icon"></i></span>\n'
          );
        },
        useData: !0
      })),
      (s.styles = s.styles || {}),
      (s.styles.style = function () {
        var t = document.createElement("style");
        (t.type = "text/css"),
          (t.innerHTML =
            ".settings-backgrounds ::-webkit-file-upload-button{cursor:pointer}.settings-backgrounds .button-add-container{position:relative}.settings-backgrounds .button-add-container:hover .fake-file-input{background:var(--color-button-hover)}.settings-backgrounds .button-add-container:hover:active .fake-file-input{background:var(--color-button-active)}.settings-backgrounds .file-input{height:100%;padding:0;position:absolute;z-index:2;opacity:0;border-bottom:none;cursor:pointer}.settings-backgrounds .backgrounds-list{padding:2px}.backgrounds-list.hidden{display:none}.tile-list{display:grid;grid-gap:15px;grid-template-columns:repeat(4,1fr)}.tile-list .tile-list-item{height:70px;position:relative;display:inline-block;border-radius:1px;box-sizing:content-box;cursor:pointer;overflow:hidden;-webkit-transition:opacity .2s ease;transition:opacity .2s ease;vertical-align:top}.tile-list .tile-list-item .photo-removed-text{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:flex;align-items:center;justify-content:center;color:#fff;cursor:not-allowed;font-size:.75rem;text-align:center;text-shadow:0 1px 0 rgba(0,0,0,.8)}.tile-list-image,.tile-list-item:before{position:absolute;top:0;right:0;bottom:0;left:0}.tile-list-item:before{z-index:1;opacity:0;background:#fff}.tile-list-item:hover:before{opacity:.2}.tile-list-item.hidden{display:none}.tile-list-image{z-index:0;background-color:var(--color-stop-2);background-position:50% 50%;background-repeat:no-repeat;background-size:cover;border-radius:2px}.tile-list-item:hover .tile-list-image{opacity:.8}.tile-list-item.active{z-index:10;box-shadow:inset 0 0 0 1px #32cd32,0 0 0 2px #32cd32}.tile-list-item.uploading{opacity:.4;clip-path:inset(0 100% 0 0);pointer-events:none}.tile-list-item.already-active{opacity:.7}.tile-list-item .tile-list-loading{margin:0;position:absolute;top:0;right:0;bottom:0;left:0;display:none;align-items:center;justify-content:center}.tile-list-item .tile-list-loading .loading-icon{height:20px;width:20px;margin-right:0;border-color:#fff!important}.tile-list-item.activating .tile-list-image{opacity:.5}.tile-list-item.activating:hover .tile-list-actions{display:none}.tile-list-item.activating .tile-list-loading{display:flex}.tile-list-item .tile-not-active{-webkit-filter:blur(5px);filter:blur(5px)}.tile-list-actions{position:absolute;top:0;right:0;z-index:2;display:none;color:#fff;text-shadow:0 0 15px #000}.active .tile-list-actions,.tile-list-item.pseudo-hover .tile-list-actions,.tile-list-item:hover .tile-list-actions{display:inline-flex}.active .tile-list-actions .control-select{color:#fff}.tile-list-actions .control{padding:3px;display:inline-block;color:rgba(255,255,255,.8)}.tile-list-actions .control:hover{color:#fff}.tile-list-actions .control-select-error{display:none;fill-opacity:.65}.tile-list-actions .control-select-error:hover{fill-opacity:1}.set-active-failed .tile-list-actions{display:inline-block}.set-active-failed .tile-list-actions .control-select{display:none}.set-active-failed .tile-list-actions .control-select-error{display:inline-block}.tile-list-actions .icon-error-wrapper{position:relative;top:2px}.settings-detail-background .settings-detail-header{margin-bottom:1rem;display:flex}.settings-detail-background .settings-detail-header .back{position:static}.settings-detail-background .settings-detail-header h3{font-size:140%}.settings-detail-body{display:block}.settings-detail-body .image{width:100%;margin-bottom:18px;background-size:cover}.settings-detail-body .img-uploaded{max-height:100%;max-width:100%;display:none;border-radius:2px;vertical-align:middle}.settings-detail-body h4{margin-bottom:10px}.settings-detail-body .optional{margin-left:3px;opacity:.6}.settings-background-edit .actions{margin-right:-10px}.settings-background-edit .submit{position:relative}.settings-background-edit .submit .loading-icon{top:11px;left:8px}.settings-background-edit .submit .error-icon{top:10px;left:8px}.settings-background-edit .cancel{padding-right:20px;padding-left:20px}.settings-background-edit .delete-group{display:none}.settings-background-edit .delete-group .button{padding-right:5px;padding-left:5px}.settings-background-edit .delete-group .delete-no{padding-right:10px}.background-stock-info{margin-top:-13px;position:relative}.background-stock-title{padding:3px 0 1px;display:inline-block;font-size:100%}.background-stock-source{display:inline-block;opacity:.5;font-size:85%}.background-stock-date{display:inline-block;opacity:.35;font-size:80%}.background-stock-info .button-set-active-stock{position:absolute;top:9px;right:-10px}.background-stock-info .badge-plus{margin-left:4px}.settings-detail-background .background-stock-info .clickable-hack:hover{opacity:.8}.settings-detail-background .background-stock-info .u--not-clickable{cursor:default}.settings-detail-background .background-stock-info .u--not-clickable:hover{opacity:.5}.submit-photo{padding-top:30px}.submit-photo h4{margin:0}.submit-photo .description{margin:5px 0 8px;font-size:.875rem}"),
          document.getElementsByTagName("head")[0].appendChild(t);
      }),
      (s.collect.Backgrounds = Backbone.Collection.extend({
        loadedOnce: !1,
        initialize: function () {
          (this.model = s.models.Background), this.listenTo(this, "reset", this.onReset);
        },
        onReset: function () {
          this.loadedOnce = !0;
        },
        comparator: function (t, e) {
          var i = this.sortAttribute || "sort_order",
            t = t.get(i),
            e = e.get(i);
          return t == e ? 0 : t < e ? (this.reverse_sort ? 1 : -1) : e < t ? (this.reverse_sort ? -1 : 1) : void 0;
        }
      })),
      (s.models.Background = Backbone.Model.extend({
        save: function (t, e) {
          ((e = e || {}).patch = !0), Backbone.Model.prototype.save.call(this, t, e);
        },
        getThumbnailUrl: function (e) {
          var t, i, s;
          e &&
            (this.blobUrl
              ? e(this.blobUrl)
              : (t = this.get("file"))
              ? ((s = new FileReader()),
                (i = this),
                (s.onload = function (t) {
                  (i.blobUrl = t.target.result), e(i.blobUrl);
                }),
                s.readAsDataURL(t))
              : (s = this.get("thumbnail_url")) && e(s));
        },
        getPreviewUrl: function (e) {
          var t, i;
          e &&
            ((t = this.get("file"))
              ? (((i = new FileReader()).onload = function (t) {
                  e(t.target.result);
                }),
                i.readAsDataURL(t))
              : (i = this.get("preview_url")) && e(i));
        },
        setActive: function (e, i) {
          var t = a.globals.urlRootApi + "settings/background/active",
            s = {},
            n = this.get("_id") || this.get("id"),
            o = this;
          this.get("is_custom") ? (s.custom_background_id = n) : (s.background_id = n),
            m
              .ajax({ type: "POST", contentType: "application/json", data: JSON.stringify(s), url: t })
              .done(function (t) {
                t && t.success
                  ? (a.trigger("sync:download", "background", !0),
                    a.trigger("waitForPhotoActivation", !0),
                    o.get("is_custom") && a.trigger("background:set-active-custom"),
                    i && i())
                  : e && e();
              })
              .fail(function () {
                e();
              });
        }
      })),
      (s.models.BackgroundSettingsManager = Backbone.Model.extend({
        feedCustomName: "background-feed-custom",
        feedMomentumName: "background-feed-momentum",
        panelTitle: "Background Settings",
        labelCustom: "My Photos",
        newModels: [],
        analytics: new a.Analytics({ feature: "photos", is_paid_event: !0 }),
        initialize: function () {
          a.uploadManager || (a.uploadManager = new a.models.UploadManager()),
            (this.settings = new a.models.GenericSettings("background")),
            (this.lastActiveBackground = a.models.activeBackground.activeBackgroundUuid()),
            (this.plusUser = a.conditionalFeatures.featureEnabled("plus")),
            (this.skippedFiles = new Backbone.Collection()),
            this.CustomBackgrounds(),
            this.listenTo(this.collection, "change:file_upload_uri", this.uploadDestinationReady),
            this.listenTo(this.collection, "add", this.onCollectionAdd),
            this.listenTo(this.collection, "reset", this.onCollectionReset),
            this.listenTo(a, "background:loadSuccessful", this.onBackgroundLoad),
            this.listenTo(a, "background:favorite", this.onBackgroundFavorited);
        },
        onCollectionAdd: function (t) {
          _.findWhere(this.newModels, { id: t.id }) || this.newModels.push(t);
        },
        onCollectionReset: function () {
          var e = this;
          _.each(this.newModels, function (t) {
            e.collection.contains(t) || e.collection.add(t);
          });
        },
        onBackgroundLoad: function (t) {
          var e;
          this.lastActiveBackground !== t &&
            this.history &&
            (e = this.history.at(0)) &&
            e.get("_id") !== t &&
            (e =
              !(e = !(e = this.history.findWhere({ _id: t })) && this.collection ? this.collection.findWhere({ id: t }) : e) &&
              this.favorites
                ? this.favorites.findWhere({ id: t })
                : e) &&
            ((e = e.clone()).has("_id") || e.set("id", t),
            e.set("sort_order", e.get("sort_order") + "-" + a.now()),
            (e.prepend = !0),
            this.history.add(e),
            this.history.sort(),
            (this.lastActiveBackground = t));
        },
        onBackgroundFavorited: function (t) {
          var e;
          this.favorites &&
            ((e = this.favorites.get(t.id))
              ? (e.set({ is_favorite: t.is_favorite, last_updated: a.date().toISOString() }), this.favorites.sort())
              : this.favorites.fetch({ remove: !1 }));
        },
        CustomBackgrounds: function () {
          return (
            this.collection ||
              ((this.collection = new s.collect.Backgrounds()),
              (this.collection.url = a.globals.urlRoot + "settings/background/backgrounds"),
              (this.collection.reverse_sort = !0)),
            this.collection
          );
        },
        Favorites: function () {
          return (
            this.favorites ||
              ((this.favorites = new s.collect.Backgrounds()),
              (this.favorites.url = a.globals.urlRoot + "backgrounds/favorites"),
              (this.favorites.sortAttribute = "last_updated"),
              (this.favorites.reverse_sort = !0)),
            this.favorites
          );
        },
        History: function () {
          var e = this;
          return (
            this.history ||
              ((this.history = new s.collect.Backgrounds()),
              (this.history.url = a.globals.urlRoot + "backgrounds/history"),
              (this.history.reverse_sort = !0),
              (this.history.load_more = a.utils.getDateString()),
              (this.history.parse = function (t) {
                return (e.history.load_more = t.load_more), t.history;
              })),
            this.history
          );
        },
        LoadMoreHistory: function () {
          this.history.load_more && this.history.fetch({ remove: !1, data: { priorToDate: this.history.load_more } });
        },
        toggleFeedMomentum: function () {
          this.plusUser &&
            (this.settings.toggle(this.feedMomentumName),
            this.analytics.capture("photo feed toggle", { feed: "momentum", new_value: this.settings.get(this.feedMomentumName) }));
        },
        toggleFeedCustom: function () {
          this.plusUser
            ? (this.settings.toggle(this.feedCustomName),
              this.analytics.capture("photo feed toggle", { feed: "custom", new_value: this.settings.get(this.feedCustomName) }))
            : this.showPlusUpsellNotif();
        },
        showPlusUpsellNotif: function () {
          a.cmd("modal.open", "UPSELL_PHOTOS", { eventSource: "settings" });
        },
        uploadDestinationReady: function (t) {
          a.uploadManager.uploadFile(t);
        },
        uploadFile: function (t, e) {
          t.type.startsWith("image/")
            ? this.collection.create(
                {
                  filename: t.name,
                  type: t.type,
                  size: t.size,
                  file: t,
                  upload_completed: !1,
                  is_custom: !0,
                  display_date: a.date(),
                  sort_order: a.now()
                },
                {
                  success: function (t) {
                    e && e(t);
                  }
                }
              )
            : ((t = { name: t.name, type: t.type }), this.skippedFiles.add(t), this.trigger("fileSkipped", t));
        },
        uploadFiles: function (t, e) {
          var i = this;
          _.each(
            t,
            function (t) {
              i.uploadFile(t, e);
            },
            this
          );
        }
      })),
      (a.models.UploadManager = Backbone.Model.extend({
        initialize: function () {
          var t = {};
          (this.filesUrl = a.globals.urlRootApi + "files"),
            (this.collection = new Backbone.Collection()),
            this.listenTo(this.collection, "change:upload_completed", this.uploadCompleted),
            (this.maxBlockSize = null == t.maxBlockSize ? 262144 : t.maxBlockSize),
            (this.blockIdPrefix = "block-"),
            (this.filesUploading = 0),
            (this.totalBytes = 0),
            (this.totalBytesUploaded = 0),
            (this.bytesPerFile = {}),
            (this.files = {});
        },
        uploadCompleted: function (e) {
          var i = this,
            t = e.get("file_uuid");
          m.ajax({
            url: i.filesUrl + "/" + t,
            contentType: "application/json",
            type: "PATCH",
            data: JSON.stringify({ upload_completed: !0 }),
            success: function (t) {
              e.set(t), i.collection.remove(e);
            },
            error: function () {
              e.set({ upload_failed: !0 });
            }
          });
        },
        uploadFile: function (n) {
          this.collection.add(n);
          var o = this,
            a = n.get("file"),
            l = new FileReader(),
            c = n.get("file_upload_uri"),
            r = this.maxBlockSize,
            d = 0,
            u = 0,
            h = [],
            s = 0,
            g = n.get("size");
          function p() {
            if (0 < u) {
              var t = a.slice(d, d + r),
                e = o.blockIdPrefix + o.pad(h.length, 6);
              h.push(btoa(e)), l.readAsArrayBuffer(t), (d += r), (u -= r) < r && (r = u);
            } else {
              var i,
                e = c + "&comp=blocklist",
                s = "<?xml version='1.0' encoding='utf-8'?><BlockList>";
              for (i = 0; i < h.length; i++) s += "<Latest>" + h[i] + "</Latest>";
              (s += "</BlockList>"),
                m.ajax({
                  url: e,
                  type: "PUT",
                  data: s,
                  modifyHeaders: function (t) {
                    return (
                      delete t.Authorization,
                      delete t["X-Momentum-ClientDate"],
                      delete t["X-Momentum-ClientId"],
                      delete t["X-Momentum-Version"],
                      (t["x-ms-blob-content-type"] = a.type),
                      t
                    );
                  },
                  success: function () {
                    n.set("upload_completed", !0);
                  },
                  error: function () {
                    n.set({ upload_failed: !0 });
                  }
                });
            }
          }
          (this.totalBytes += g),
            g < r && (r = g),
            (u = g),
            (l.onloadend = function (t) {
              var e, i;
              t.target.readyState == FileReader.DONE &&
                ((e = c + "&comp=block&blockid=" + h[h.length - 1]),
                (t = new Uint8Array(t.target.result)),
                (i = t.length),
                m.ajax({
                  url: e,
                  type: "PUT",
                  data: t,
                  processData: !1,
                  modifyHeaders: function (t) {
                    return (
                      delete t.Authorization,
                      delete t["X-Momentum-ClientDate"],
                      delete t["X-Momentum-ClientId"],
                      delete t["X-Momentum-Version"],
                      (t["x-ms-blob-type"] = "BlockBlob"),
                      (t["x-ms-blob-content-type"] = a.type),
                      t
                    );
                  },
                  success: function () {
                    (s += i), n.set({ fileprogress: parseInt((s / g) * 100) }), p();
                  },
                  error: function () {
                    n.set({ upload_failed: !0 });
                  }
                }));
            }),
            p();
        },
        pad: function (t, e) {
          for (var i = "" + t; i.length < e; ) i = "0" + i;
          return i;
        }
      })),
      (s.views.Custom = Backbone.View.extend({
        template: s.templates.custom,
        initialize: function (t) {
          (this.main = t.main),
            (this.subViews = []),
            a.backgroundSettingsManager || (a.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
            (this.collection = a.backgroundSettingsManager.CustomBackgrounds()),
            this.listenTo(this.collection, "reset", this.addAll),
            this.listenTo(this.collection, "add", this.onCollectionAdd),
            this.listenTo(this.collection, "update", this.handleCollectionUpdate);
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
          a.settingsUtils.subnavAddAll(this, !1, this.$backgroundsList, this.main.syncActiveItem.bind(this.main));
        },
        addOne: function (t, e) {
          var i = new s.views.Tile({ model: t, main: this.main, parent: this, subnav: "custom" });
          a.settingsUtils.subnavAddOne(this, i, this.$backgroundsList, e, !1),
            i.$el.toggleClass("uploading", !t.get("upload_verified") || !t.get("upload_completed"));
        },
        onCollectionAdd: function (t) {
          this.addOne(t, !0);
        },
        handleCollectionUpdate: function () {
          a.settingsUtils.updateEmptyState(this);
        }
      })),
      s.dependencies.settings),
    t =
      ((s.views.DetailCustom = t.views.SettingsPanel.extend({
        attributes: {
          id: "background-detail-custom-panel",
          class: "settings-view settings-online settings-background-detail",
          "data-test": "settings-backgrounds"
        },
        panelid: "backgrounds-detail-custom",
        template: s.templates.detailCustom,
        analytics: new a.Analytics({ feature: "photos", is_paid_event: !0 }),
        events: {
          "click .back": "handleClickBack",
          "keyup .settings-background-edit": "handleKeyupEsc",
          "keypress .input-title": "handleKeypressEnterTitle",
          "keypress .input-source": "handleKeypressEnterSource",
          "click .submit": "processEditForm",
          "click .cancel": "handleClickCancel",
          "click .button-set-active": "handleClickSetActive",
          "click .button-delete": "toggleDeleteConf",
          "click .delete-yes": "deleteItem",
          "click .delete-no": "toggleDeleteConf"
        },
        initialize: function (t) {
          a.backgroundSettingsManager || (a.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
            (this.main = t.main),
            (this.model = t.backgroundModel),
            this.listenTo(a, "background:loadSuccessful", this.onBackgroundLoadSuccessful);
        },
        render: function () {
          var t = { inputLengthMaxHtml: this.main.inputLengthMaxHtml, source: this.model.get("source"), title: this.model.get("title") };
          return (
            this.$el.html(this.template(t)),
            this.setViewVars(),
            this.focusFirstInput(),
            this.main.detailUpdateSetActiveButton(this),
            this.model.getPreviewUrl(this.main.detailShowUploadedImage.bind(this)),
            this
          );
        },
        setViewVars: function () {
          (this.$backgroundEditForm = this.$(".settings-background-edit")),
            (this.$inputTitle = this.$(".input-title")),
            (this.$inputSource = this.$(".input-source")),
            (this.$actionsRight = this.$(".actions-right")),
            (this.$deleteGroup = this.$(".delete-group"));
        },
        focusFirstInput: function () {
          var t = this;
          setTimeout(function () {
            t.$inputTitle.trigger("focus");
          }, 0),
            a.settingsUtils.moveCursorToEndOfInput(this.$inputTitle);
        },
        handleClickBack: function (t) {
          this.main.detailHandleClickBack(t);
        },
        handleKeyupEsc: function (t) {
          a.settingsUtils.handleKeyupEsc(t, this.main.detailGotoMain.bind(this));
        },
        handleKeypressEnterTitle: function (t) {
          a.settingsUtils.handleKeypressEnter(t, this.processEditForm.bind(this), this.$inputTitle);
        },
        handleKeypressEnterSource: function (t) {
          a.settingsUtils.handleKeypressEnter(t, this.processEditForm.bind(this), this.$inputSource);
        },
        processEditForm: function (t) {
          var e, i, s;
          t && t.preventDefault(),
            this.$backgroundEditForm.hasClass("loading") ||
              ((i = (e = this).$inputTitle.val().trim()),
              (s = this.$inputSource.val().trim()),
              this.$backgroundEditForm.removeClass("failed").addClass("loading"),
              this.model.save(
                { title: i, source: s },
                {
                  wait: !0,
                  success: function () {
                    e.$backgroundEditForm.removeClass("loading"),
                      a.trigger("sync:download", "background", !0),
                      a.trigger("photoDetailsChanged", { id: e.model.get("id"), title: i, source: s }),
                      e.main.detailGotoMain();
                  },
                  error: function () {
                    e.$backgroundEditForm.removeClass("loading").addClass("failed");
                  }
                }
              ),
              this.analytics.capture("photo edit"));
        },
        handleClickCancel: function (t) {
          t.stopPropagation(), this.main.detailGotoMain();
        },
        handleClickSetActive: function () {
          this.main.detailSetActive(this);
        },
        toggleDeleteConf: function () {
          this.$actionsRight.mToggle("inline-block"), this.$deleteGroup.mToggle("inline-block");
        },
        deleteItem: function (t) {
          var e = this;
          t.stopPropagation(),
            this.model.destroy({
              success: function () {
                a.trigger("sync:download", "background", !0), e.main.detailGotoMain();
              }
            }),
            this.analytics.capture("photo delete");
        },
        onBackgroundLoadSuccessful: function () {
          this.main.detailUpdateSetActiveButton(this);
        }
      })),
      s.dependencies.settings),
    t =
      ((s.views.DetailStock = t.views.SettingsPanel.extend({
        attributes: { id: "background-detail-stock-panel", class: "settings-view settings-background-detail" },
        panelid: "backgrounds-detail-stock",
        template: s.templates.detailStock,
        events: {
          "click .back": "handleClickBack",
          "click .button-set-active": "handleClickSetActive",
          "click .background-stock-source-link": "captureSourceClick"
        },
        initialize: function (t) {
          a.backgroundSettingsManager || (a.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
            (this.main = t.main),
            (this.model = t.backgroundModel),
            this.listenTo(a, "background:loadSuccessful", this.onBackgroundLoadSuccessful);
        },
        render: function () {
          var t = {
            attribution: this.model.get("attribution"),
            displayDate: a.utils.getFriendlyDate(this.model.get("display_date")),
            labelSelect: this.main.labelSelect,
            plusUser: this.main.plusUser,
            sourceUrl: this.model.get("sourceUrl"),
            title: this.model.get("title"),
            active: this.model.get("active")
          };
          return (
            this.$el.html(this.template(t)),
            this.main.detailUpdateSetActiveButton(this),
            this.model.getPreviewUrl(this.main.detailShowUploadedImage.bind(this)),
            this
          );
        },
        handleClickBack: function (t) {
          this.main.detailHandleClickBack(t);
        },
        handleClickSetActive: function () {
          this.main.detailSetActive(this);
        },
        onBackgroundLoadSuccessful: function () {
          this.main.detailUpdateSetActiveButton(this);
        },
        captureSourceClick: function () {
          a.Analytics.capture("photo source click", {
            custom: !1,
            photo_location: this.model.get("title").toLowerCase(),
            has_flight_link: !!this.model.get("flight_link"),
            location: "settings"
          });
        }
      })),
      (s.views.Favorites = Backbone.View.extend({
        template: s.templates.favorites,
        initialize: function (t) {
          (this.main = t.main),
            (this.subViews = []),
            a.backgroundSettingsManager || (a.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
            (this.collection = a.backgroundSettingsManager.Favorites()),
            this.listenTo(this.collection, "reset", this.addAll),
            this.listenTo(this.collection, "add", this.onCollectionAdd),
            this.listenTo(this.collection, "change:is_favorite", this.favoriteStateChanged);
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
          a.settingsUtils.subnavAddAll(this, !1, this.$backgroundsList, this.main.syncActiveItem.bind(this.main));
        },
        addOne: function (t, e) {
          t = new s.views.Tile({ model: t, main: this.main, parent: this, subnav: "favorites" });
          a.settingsUtils.subnavAddOne(this, t, this.$backgroundsList, e, !1);
        },
        onCollectionAdd: function (t) {
          this.addOne(t, !0), this.main.syncActiveItem();
        },
        handleCollectionUpdate: function () {
          a.settingsUtils.updateEmptyState(this);
        },
        favoriteStateChanged: function (e) {
          var i, t;
          e.get("is_favorite")
            ? (this.addOne(e, !0), this.main.syncActiveItem())
            : ((i = null),
              _.find(this.subViews, function (t) {
                return !(!t || t.model !== e || ((i = t).destroy(), 0));
              }),
              i && (t = this.subViews.indexOf(i)) && this.subViews.splice(t, 1));
        }
      })),
      (s.views.History = Backbone.View.extend({
        template: s.templates.history,
        events: { "click .load-more-button": "loadMore" },
        initialize: function (t) {
          (this.main = t.main),
            (this.subViews = []),
            a.backgroundSettingsManager || (a.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
            (this.collection = a.backgroundSettingsManager.History()),
            this.listenTo(this.collection, "reset", this.addAll),
            this.listenTo(this.collection, "add", this.addOne),
            this.listenTo(this.collection, "update", this.handleCollectionUpdate);
        },
        render: function () {
          var t = { plusUser: this.main.plusUser };
          return (
            this.$el.html(this.template(t)),
            this.main.setSubnavViewVars(this),
            this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: !0 }),
            this
          );
        },
        addAll: function () {
          a.settingsUtils.subnavAddAll(
            this,
            !0,
            this.$backgroundsList,
            this.main.syncActiveItem.bind(this.main),
            a.settingsUtils.subnavHistoryUpdateLoadMore.bind(this)
          );
        },
        addOne: function (t) {
          var e = new s.views.Tile({ model: t, main: this.main, parent: this, subnav: "history" });
          a.settingsUtils.subnavAddOne(this, e, this.$backgroundsList, t.prepend, !1);
        },
        onCollectionAdd: function (t) {
          this.addOne(t);
        },
        handleCollectionUpdate: function () {
          a.settingsUtils.updateEmptyState(this), this.main.syncActiveItem();
        },
        loadMore: function (t) {
          a.settingsUtils.subnavHistoryLoadMore(t, this, a.backgroundSettingsManager);
        }
      })),
      s.dependencies.settings);
  return (
    (s.views.Main = t.views.SettingsPanel.extend({
      attributes: {
        id: "settings-backgrounds",
        class: "settings-view settings-content settings-backgrounds",
        "data-test": "settings-backgrounds"
      },
      inputLengthMaxHtml: 75,
      labelDeselect: "(Already Active)",
      labelSelect: "Set Active",
      labelSelectError: "Error activating… Click to retry",
      panelid: "backgrounds",
      subnav: void 0,
      template: s.templates.main,
      analytics: new a.Analytics({ feature: "photos" }),
      events: {
        "click .button-advanced": "toggleAdvanced",
        "click #feed-momentum-slider": "toggleFeedMomentum",
        "click #feed-custom-slider": "toggleFeedCustom",
        "click .add-background": "handleClickAdd",
        "change .file-input": "fileInputChanged",
        "click .subnav-titles .custom": "selectCustom",
        "click .subnav-titles .favorites": "selectFavorites",
        "click .subnav-titles .history": "selectHistory",
        "click .see-photo-guidelines": "onSeePhotoGuidelinesClick"
      },
      initialize: function (t) {
        t && (this.subnav = t.subnav),
          a.backgroundSettingsManager || (a.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
          (this.manager = a.backgroundSettingsManager),
          (this.settings = this.manager.settings),
          (this.plusUser = a.conditionalFeatures.featureEnabled("custom-bg")),
          (this.expiredPlusUser = a.conditionalFeatures.featureEnabled("custom-bg-degraded")),
          this.listenTo(this.settings, "change", this.updateSettings),
          this.listenTo(this.settings, "change:allocation_changed", this.allocationChanged),
          this.listenTo(a, "background:loadSuccessful", this.onBackgroundLoadSuccessful),
          this.listenTo(a, "background:set-active-custom", this.onBackgroundSetActiveCustom),
          this.plusUser && this.settings.fetch(),
          void 0 === this.subnav && this.analytics.capture("settings panel show");
      },
      render: function () {
        var t = { isPlus: this.plusUser, labelCustom: this.manager.labelCustom };
        return (
          this.$el.html(this.template(m.extend(t, a.settingsUtils.getInitialFeedSettings(this.manager)))),
          this.setViewVars(),
          "favorites" === this.subnav
            ? this.renderFavorites()
            : "history" !== this.subnav && ("custom" === this.subnav || this.plusUser)
            ? this.renderCustom()
            : this.renderHistory(),
          this.plusUser || this.updateForFreeUser(),
          this
        );
      },
      setViewVars: function () {
        a.settingsUtils.setFeedVars(this),
          (this.$customList = this.$(".list-body-custom")),
          (this.$favoritesList = this.$(".list-body-favorites")),
          (this.$historyList = this.$(".list-body-history"));
      },
      setSubnavViewVars: function (t) {
        (t.$empty = t.$(".settings-empty")), (t.$backgroundsList = t.$(".backgrounds-list"));
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
      selectSubnav: function (t, e, i) {
        e.stopPropagation(), this.subnav === t ? a.utils.toggleClassTwice(m(e.delegatedTarget), "active") : i();
      },
      renderCustom: function () {
        this.customView || (this.customView = new s.views.Custom({ el: this.$customList, main: this })),
          a.settingsUtils.renderSubnav(this, this.customView, "custom");
      },
      renderFavorites: function () {
        this.favoritesView || (this.favoritesView = new s.views.Favorites({ el: this.$favoritesList, main: this })),
          a.settingsUtils.renderSubnav(this, this.favoritesView, "favorites");
      },
      renderHistory: function () {
        this.historyView || (this.historyView = new s.views.History({ el: this.$historyList, main: this })),
          a.settingsUtils.renderSubnav(this, this.historyView, "history");
      },
      updateSettings: function () {
        a.settingsUtils.updateFeedSettings(this);
      },
      allocationChanged: function () {
        this.settings.has("allocation_changed") && a.trigger("sync:download", "background", !0);
      },
      onBackgroundLoadSuccessful: function () {
        this.syncActiveItem();
      },
      syncActiveItem: function () {
        var t = a.models.activeBackground.activeBackgroundUuid();
        this.syncActiveItemHelper(this.customView, t),
          this.syncActiveItemHelper(this.favoritesView, t),
          this.syncActiveItemHelper(this.historyView, t);
      },
      syncActiveItemHelper: function (t, e) {
        void 0 !== t &&
          (t.$el.find(".tile-list-item.active").removeClass("active").find(".control-select").attr("title", this.labelSelect),
          t.$el
            .find('[data-background-id="' + e + '"]')
            .first()
            .addClass("active")
            .find(".control-select")
            .attr("title", this.labelDeselect),
          t.setActiveInProgress) &&
          (t.setActiveInProgress = !1);
      },
      onBackgroundSetActiveCustom: function () {
        this.settings.set(this.manager.feedCustomName, !0);
      },
      toggleAdvanced: function () {
        a.settingsUtils.toggleAdvanced(this);
      },
      toggleFeedMomentum: function (t) {
        t.stopPropagation(), this.manager.toggleFeedMomentum();
      },
      toggleFeedCustom: function (t) {
        t.stopPropagation(), this.manager.toggleFeedCustom();
      },
      updateForFreeUser: function () {
        this.$feedMomentumSlider.addClass("fixed");
      },
      handleClickAdd: function (t) {
        this.plusUser || (t.preventDefault(), this.manager.showPlusUpsellNotif());
      },
      fileInputChanged: function (t) {
        t = t.target.files;
        t.length &&
          ("custom" !== this.subnav && this.renderCustom(),
          this.manager.uploadFiles(t, function () {
            a.Analytics.capture("photo add", { drag_and_drop: !1 });
          }));
      },
      detailGotoDetail: function (t, e, i) {
        var s = t ? "custom" : "stock";
        a.commandManager.execute("settings.display", null, {
          backgroundModel: this.detailGetModel(t, e, i),
          main: this,
          nav: "background-settings",
          section: "background-settings-detail-" + s
        });
      },
      detailGetModel: function (t, e, i) {
        var s;
        return (
          t
            ? (s = this.manager.CustomBackgrounds().get(i))
            : "favorites" === this.subnav
            ? (s = this.manager.Favorites().get(i))
            : "history" === this.subnav &&
              this.manager.History().each(function (t) {
                t.get("_id") === i && (s = t);
              }),
          (s.active = e),
          s
        );
      },
      detailShowUploadedImage: function (t) {
        this.$(".img-uploaded").attr("src", t).css("display", "inline-block");
      },
      detailHandleClickBack: function (t) {
        t.stopPropagation(), this.detailGotoMain();
      },
      detailGotoMain: function () {
        a.commandManager.execute("settings.display", null, { section: "background-settings", subnav: this.subnav });
      },
      detailSetActive: function (t) {
        this.plusUser
          ? (t.model.setActive(),
            this.analytics.capture("photo set active", { is_paid_event: !0, custom: t.model.get("is_custom"), location: "detail" }))
          : this.manager.showPlusUpsellNotif();
      },
      detailUpdateSetActiveButton: function (t) {
        var e = t.model.id || t.model.get("_id"),
          e = a.models.activeBackground.activeBackgroundUuid() === e;
        t.$(".button-set-active")
          .attr("title", e ? this.labelDeselect : "")
          .toggleClass("u--not-clickable", e);
      },
      onSeePhotoGuidelinesClick: function () {
        this.analytics.capture("photo guidelines click");
      }
    })),
    (s.views.Tile = Backbone.View.extend({
      attributes: { class: "tile-list-item", "data-test": "tile-list-item" },
      tagName: "div",
      template: s.templates.tile,
      events: {
        "click .control-edit": "handleClickEdit",
        "click .control-select": "handleClickSetActive",
        "click .control-select-error": "handleClickSetActive",
        click: "handleClickTile"
      },
      initialize: function (t) {
        (this.main = t.main),
          (this.parent = t.parent),
          (this.manager = this.main.manager),
          (this.backgroundId = this.model.get("_id") || this.model.id),
          this.listenTo(this.model, "change:upload_completed", this.uploadComplete),
          this.listenTo(this.model, "change:fileprogress", this.updateFileProgress),
          this.listenTo(a, "background:loadSuccessful", this.onBackgroundLoadSuccessful),
          this.listenTo(a, "background:error", this.onBackgroundError);
        var t = document.createElement("img"),
          e = this,
          i =
            (t.addEventListener("error", function () {
              e.$el.addClass("hidden");
            }),
            this.model.get("thumbnail_url"));
        i && t.setAttribute("src", i);
      },
      render: function () {
        (this.active = this.model.get("active")), (this.is_custom = this.model.get("is_custom"));
        var e = this,
          t = {
            editIconClass: this.is_custom ? "icon-edit" : "icon-help",
            editIconTitle: this.is_custom ? "Edit" : "Info",
            labelSelectError: this.main.labelSelectError,
            labelSelect: this.main.labelSelect,
            showSetActive: !0 === this.active || this.model.has("upload_completed")
          };
        return (
          this.$el.html(this.template(t)),
          this.setViewVars(),
          this.model.has("upload_completed") && !this.model.get("upload_completed") && this.$editControl.hide(),
          this.setBackgroundIdAttribute(),
          this.setTitleAttribute(),
          this.model.getThumbnailUrl(function (t) {
            e.$el.find(".tile-list-image").css("background-image", 'url("' + t + '")'),
              !1 === e.active && e.$el.find(".tile-list-image").addClass("tile-not-active");
          }),
          this
        );
      },
      setViewVars: function () {
        this.$editControl = this.$(".control-edit");
      },
      uploadComplete: function () {
        (this.backgroundId = this.model.get("_id") || this.model.id),
          this.setBackgroundIdAttribute(),
          this.$el.removeClass("uploading").css("clip-path", "none"),
          this.main.syncActiveItem(),
          this.model.get("upload_completed") && this.$editControl.css("display", "inline-block");
      },
      updateFileProgress: function () {
        var t = this.model.get("fileprogress");
        this.$el.css("clip-path", "inset(0 " + (100 - t) + "% 0 0)"), 100 === t && this.uploadComplete();
      },
      onBackgroundLoadSuccessful: function () {
        this.removeActivatingState();
      },
      onBackgroundError: function () {
        this.removeActivatingState();
      },
      removeActivatingState: function () {
        this.setActiveInProgress &&
          ((this.setActiveInProgress = !1), (this.parent.setActiveInProgress = !1), this.$el.removeClass("activating"));
      },
      setBackgroundIdAttribute: function () {
        this.$el.attr("data-background-id", this.model.id || this.model.get("_id"));
      },
      setTitleAttribute: function () {
        var t = this.model.get("title"),
          e = a.utils.getFriendlyDate(this.model.get("display_date"));
        this.$el.attr("title", t ? t + " (" + e + ")" : e);
      },
      handleClickTile: function (t) {
        t.stopPropagation(), this.main.plusUser ? this.setBackgroundActive() : this.gotoDetail();
      },
      setBackgroundActive: function () {
        var t;
        !1 === this.active ||
          this.backgroundAlreadyActive() ||
          this.parent.setActiveInProgress ||
          (this.$el.removeClass("set-active-failed").addClass("activating"),
          (this.setActiveInProgress = !0),
          (this.parent.setActiveInProgress = !0),
          (t = this).model.setActive(
            function () {
              t.removeActivatingState(), t.$el.addClass("set-active-failed");
            },
            function () {
              a.Analytics.capture("photo set active", { feature: "photos", is_paid_event: !0, custom: t.is_custom, location: "list" });
            }
          ));
      },
      backgroundAlreadyActive: function () {
        var t = a.collect.backgrounds.getActiveItem();
        return !(!t || this.backgroundId !== t.get("_id") || (a.utils.toggleClassTwice(this.$el, "already-active"), 0));
      },
      handleClickSetActive: function (t) {
        t.stopImmediatePropagation(), this.main.plusUser ? this.setBackgroundActive() : this.manager.showPlusUpsellNotif();
      },
      handleClickEdit: function (t) {
        t.stopImmediatePropagation(), this.gotoDetail();
      },
      gotoDetail: function () {
        this.main.detailGotoDetail(this.is_custom, this.active, this.backgroundId);
      },
      destroy: function () {
        this.remove(), this.unbind();
      }
    })),
    a.commandManager &&
      (a.commandManager.registerCommand("settings.panels.backgrounds", function (t) {
        return new s.views.Main(t);
      }),
      a.commandManager.registerCommand("settings.panels.backgrounds.detailCustom", function (t) {
        if (t) return new s.views.DetailCustom(t);
      }),
      a.commandManager.registerCommand("settings.panels.backgrounds.detailStock", function (t) {
        if (t) return new s.views.DetailStock(t);
      }),
      a.commandManager.registerCommand("background.custom.uploadfiles", function (t) {
        t.length &&
          (a.backgroundSettingsManager || (a.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
          a.commandManager.executeAsync("settings.display", null, { section: "background-settings", cmd: "settings.panels.backgrounds" }),
          1 == t.length
            ? a.backgroundSettingsManager.uploadFile(t[0], function (e) {
                e.getThumbnailUrl(function (t) {
                  t = new a.models.BackgroundBase({ _id: e.id, title: "", attribution: " ", source: "", filename: t });
                  a.models.activeBackground.setActiveBackground(t),
                    e.get("upload_verified")
                      ? e.setActive(function () {})
                      : e.listenToOnce(e, "change:upload_verified", function () {
                          e.setActive(function () {});
                        }),
                    a.Analytics.capture("photo add", { drag_and_drop: !0 });
                });
              })
            : a.backgroundSettingsManager.uploadFiles(t, function () {
                a.Analytics.capture("photo add", { drag_and_drop: !0 });
              }));
      })),
    s.styles.style(),
    a.trigger("settings:register:nav", {
      id: "background-settings",
      title: "Backgrounds",
      cmd: "settings.panels.backgrounds",
      position: 36
    }),
    a.trigger("settings:register:panel", {
      id: "background-settings-detail-custom",
      section: "background-settings-detail-custom",
      cmd: "settings.panels.backgrounds.detailCustom"
    }),
    a.trigger("settings:register:panel", {
      id: "background-settings-detail-stock",
      section: "background-settings-detail-stock",
      cmd: "settings.panels.backgrounds.detailStock"
    }),
    s
  );
};
m.addinManager && m.addinManager.registerAddinFn("d52f5584-5033-4a16-866f-e97c7d7ac826", fn_addin);
