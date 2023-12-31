var fn_addin = function (c, s, t) {
  var n = {};
  return (
    (n.styles = n.styles || {}),
    (n.commands = n.commands || {}),
    (n.dependencies = t || n.dependencies || {}),
    (n.styles.style = function () {}),
    (n.views = n.views || {}),
    (n.collect = n.collect || {}),
    (n.models = n.models || {}),
    (n.templates = n.templates || {}),
    (n.info = {
      widget: !0,
      placeholderType: "none",
      id: "settings",
      dependencies: ["settings_common"],
      addin: "1d872cf4-953a-4743-8f5e-6785bba4bd19",
      commands: ["settings.initialize", "settings.display"],
      elementId: "settings",
      class: "app-container settings",
      label: "Settings",
      appClass: "settings-app",
      region: "bottom-left",
      order: "prepend",
      width: 500,
      height: 400,
      toggleEvent: "globalEvent:key:L",
      closeOnEsc: "true"
    }),
    c.console.log(c.elapsed() + ": " + n.info.id + " started"),
    (n.templates = n.templates || {}),
    (n.templates.about = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<img src="img/logo.svg" class="logo logo-light">\n<img src="img/logo-white.svg" class="logo logo-dark">\n<h3>Momentum</h3>\n<p class="made"><span class="version">v' +
          t.escapeExpression(
            "function" == typeof (n = null != (n = i(n, "version") || (null != e ? i(e, "version") : e)) ? n : t.hooks.helperMissing)
              ? n.call(null != e ? e : t.nullContext || {}, {
                  name: "version",
                  hash: {},
                  data: s,
                  loc: { start: { line: 4, column: 39 }, end: { line: 4, column: 50 } }
                })
              : n
          ) +
          '</span></p>\n\n<p class="thanks">Thank you for your support!</p>\n\n<p class="links">\n\t<a href="http://momentumdash.com/feedback" target="_blank"><span class="link-name">Feedback</span></a>\n\t<a href="http://momentumdash.com" target="_blank"><span class="link-name">Website</span></a>\n\t<a href="http://momentumdash.com/blog" target="_blank"><span class="link-name">Blog</span></a>\n\t<a href="http://momentumdash.com/careers" target="_blank"><span class="link-name">Careers</span> <span class="badge badge-hiring">Hiring!</span></a>\t\n\t<a href="http://www.instagram.com/momentumdash" class="social" target="_blank">\n\t\t<span class="link-name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon-social icon-instagram"><path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"></path><path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"></path><circle cx="393.6" cy="118.4" r="17.056"></circle></svg></span>\n\t</a>\n\t<a href="https://www.facebook.com/momentumdash" class="social" target="_blank">\n\t\t<span class="link-name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon-social icon-facebook"><path d="M288 176v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80h-96z"></path></svg></span>\n\t</a>\n\t<a href="https://twitter.com/momentumdash" class="social" target="_blank">\n\t\t<span class="link-name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon-social icon-twitter"><path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path></svg></span>\n\t</a>\n</p>\n\n<div class="footer">\n\t<span class="footer-made">Made with <span class="heart">&#9829;</span> in beautiful BC, Canada</span><span class="separator"></span><span class="footer-links"><a href="https://momentumdash.com/legal" target="_blank">Terms & Privacy</a></span>\n</div>\n'
        );
      },
      useData: !0
    })),
    (n.templates.actionBanner = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        return '<div class="banner-copy">\n\t<div class="banner-title">\n\t\tAction Required\n\t</div>\n\t<div class="banner-description">\n\t\tFurther steps are needed to finish setting up your credit card.\n\t</div>\n</div>\n<div class="banner-cta">\n\t<button class="button button-small validate">Validate card</button>\n</div>\n';
      },
      useData: !0
    })),
    (n.templates["color-picker"] = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        return '<div class="swatch-container"><div class="swatch" style="background: #222;"></div></div>';
      },
      useData: !0
    })),
    (n.templates.connect = Handlebars.template({
      1: function (t, e, n, a, s) {
        return "GitHub";
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
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
          '<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\n<section class="provider">\n\t<div class="provider-logo-box">\n\t\t<img  src="' +
          c(
            typeof (i = null != (i = d(n, "large_icon_url") || (null != e ? d(e, "large_icon_url") : e)) ? i : o) == r
              ? i.call(l, {
                  name: "large_icon_url",
                  hash: {},
                  data: s,
                  loc: { start: { line: 5, column: 13 }, end: { line: 5, column: 31 } }
                })
              : i
          ) +
          '" class="provider-logo ' +
          (null !=
          (t = d(n, "if").call(l, null != e ? d(e, "GitHub") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 5, column: 54 }, end: { line: 5, column: 81 } }
          }))
            ? t
            : "") +
          '">\n\t</div>\n\t<h2 class="provider-title">Connect to ' +
          c(
            typeof (i = null != (i = d(n, "provider_title") || (null != e ? d(e, "provider_title") : e)) ? i : o) == r
              ? i.call(l, {
                  name: "provider_title",
                  hash: {},
                  data: s,
                  loc: { start: { line: 7, column: 39 }, end: { line: 7, column: 57 } }
                })
              : i
          ) +
          '</h2>\n</section>\n\x3c!--<section class="extra-info">--\x3e\n\t\x3c!--<label for="blah">Please enter your account name</label>--\x3e\n\t\x3c!--<input type="text" name="blah" id="blah" class="input">--\x3e\n\x3c!--</section>--\x3e\n\n<p class="description">A secure window will open.</p>\n<section class="button-group">\n\t<span id="connect-button" class="button">Connect</span>\n\t<p class="description">Momentum won\'t ever have access to your login information.</p>\n</section>\n'
        );
      },
      useData: !0
    })),
    (n.templates["general-toggle-options"] = Handlebars.template({
      1: function (t, e, n, a, s) {
        return '<span class="badge badge-plus">PLUS</span>';
      },
      3: function (t, e, n, a, s, i, l) {
        var o,
          r = t.lambda,
          c = t.escapeExpression,
          d = null != e ? e : t.nullContext || {},
          u = t.hooks.helperMissing,
          p = "function",
          m =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '\t\t\t<span class="toggle-option ' +
          c(r(null != l[1] ? m(l[1], "field") : l[1], e)) +
          '" data-related-widget="' +
          c(r(null != l[1] ? m(l[1], "field") : l[1], e)) +
          '" data-option-value="' +
          c(
            typeof (r = null != (r = m(n, "value") || (null != e ? m(e, "value") : e)) ? r : u) == p
              ? r.call(d, { name: "value", hash: {}, data: s, loc: { start: { line: 6, column: 98 }, end: { line: 6, column: 107 } } })
              : r
          ) +
          '" ' +
          (null !=
          (o = m(n, "if").call(d, null != e ? m(e, "dataTest") : e, {
            name: "if",
            hash: {},
            fn: t.program(4, s, 0, i, l),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 6, column: 109 }, end: { line: 6, column: 156 } }
          }))
            ? o
            : "") +
          '>\n\t\t\t\t<div class="sub-view"></div>\n\t\t\t\t<span class="toggle-label">' +
          c(
            typeof (r = null != (r = m(n, "label") || (null != e ? m(e, "label") : e)) ? r : u) == p
              ? r.call(d, { name: "label", hash: {}, data: s, loc: { start: { line: 8, column: 31 }, end: { line: 8, column: 40 } } })
              : r
          ) +
          "</span>\n\t\t\t\t" +
          (null !=
          (o = m(n, "if").call(d, null != e ? m(e, "plusOnly") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0, i, l),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 9, column: 4 }, end: { line: 9, column: 69 } }
          }))
            ? o
            : "") +
          "\n\t\t\t</span>\n\t\t\t" +
          (null !=
          (o = m(n, "unless").call(d, s && m(s, "last"), {
            name: "unless",
            hash: {},
            fn: t.program(6, s, 0, i, l),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 11, column: 3 }, end: { line: 11, column: 107 } }
          }))
            ? o
            : "") +
          "\n"
        );
      },
      4: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          'data-test="' +
          t.escapeExpression(
            "function" == typeof (n = null != (n = i(n, "dataTest") || (null != e ? i(e, "dataTest") : e)) ? n : t.hooks.helperMissing)
              ? n.call(null != e ? e : t.nullContext || {}, {
                  name: "dataTest",
                  hash: {},
                  data: s,
                  loc: { start: { line: 6, column: 136 }, end: { line: 6, column: 148 } }
                })
              : n
          ) +
          '"'
        );
      },
      6: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return null !=
          (n = i(n, "if").call(null != e ? e : t.nullContext || {}, null != e ? i(e, "breakafter") : e, {
            name: "if",
            hash: {},
            fn: t.program(7, s, 0),
            inverse: t.program(9, s, 0),
            data: s,
            loc: { start: { line: 11, column: 20 }, end: { line: 11, column: 96 } }
          }))
          ? n
          : "";
      },
      7: function (t, e, n, a, s) {
        return "<br>";
      },
      9: function (t, e, n, a, s) {
        return ' <span class="toggle-divider">|</span> ';
      },
      11: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<span class="option-message">' +
          t.escapeExpression(
            "function" == typeof (n = null != (n = i(n, "message") || (null != e ? i(e, "message") : e)) ? n : t.hooks.helperMissing)
              ? n.call(null != e ? e : t.nullContext || {}, {
                  name: "message",
                  hash: {},
                  data: s,
                  loc: { start: { line: 14, column: 45 }, end: { line: 14, column: 56 } }
                })
              : n
          ) +
          "</span>"
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s, i, l) {
        var o,
          r = null != e ? e : t.nullContext || {},
          c = t.hooks.helperMissing,
          d = "function",
          u = t.escapeExpression,
          p =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<li class="slide-toggle has-toggle" data-related-widget="' +
          u(
            typeof (o = null != (o = p(n, "field") || (null != e ? p(e, "field") : e)) ? o : c) == d
              ? o.call(r, { name: "field", hash: {}, data: s, loc: { start: { line: 1, column: 57 }, end: { line: 1, column: 66 } } })
              : o
          ) +
          '" data-test="' +
          u(
            typeof (o = null != (o = p(n, "dataId") || (null != e ? p(e, "dataId") : e)) ? o : c) == d
              ? o.call(r, { name: "dataId", hash: {}, data: s, loc: { start: { line: 1, column: 79 }, end: { line: 1, column: 89 } } })
              : o
          ) +
          '">\n\t<span class="setting-name">' +
          u(
            typeof (o = null != (o = p(n, "name") || (null != e ? p(e, "name") : e)) ? o : c) == d
              ? o.call(r, { name: "name", hash: {}, data: s, loc: { start: { line: 2, column: 28 }, end: { line: 2, column: 36 } } })
              : o
          ) +
          "</span>\n\t" +
          (null !=
          (u = p(n, "if").call(r, null != e ? p(e, "plusOnly") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0, i, l),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 3, column: 1 }, end: { line: 3, column: 66 } }
          }))
            ? u
            : "") +
          '\n\t<span class="toggle-options">\n' +
          (null !=
          (u = p(n, "each").call(r, null != e ? p(e, "options") : e, {
            name: "each",
            hash: {},
            fn: t.program(3, s, 0, i, l),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 5, column: 2 }, end: { line: 12, column: 11 } }
          }))
            ? u
            : "") +
          "\t</span>\n\t" +
          (null !=
          (u = p(n, "if").call(r, null != e ? p(e, "message") : e, {
            name: "if",
            hash: {},
            fn: t.program(11, s, 0, i, l),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 14, column: 1 }, end: { line: 14, column: 70 } }
          }))
            ? u
            : "") +
          '\n\t<div class="option-clear"></div>\n</li>\n'
        );
      },
      useData: !0,
      useDepths: !0
    })),
    (n.templates["general-toggle-slider"] = Handlebars.template({
      1: function (t, e, n, a, s) {
        return " disabled ";
      },
      3: function (t, e, n, a, s) {
        return '<span class="badge badge-plus">PLUS</span>';
      },
      5: function (t, e, n, a, s) {
        return '<span class="badge badge-beta">Preview</span>';
      },
      7: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<span class="option-message">' +
          t.escapeExpression(
            "function" == typeof (n = null != (n = i(n, "message") || (null != e ? i(e, "message") : e)) ? n : t.hooks.helperMissing)
              ? n.call(null != e ? e : t.nullContext || {}, {
                  name: "message",
                  hash: {},
                  data: s,
                  loc: { start: { line: 9, column: 45 }, end: { line: 9, column: 56 } }
                })
              : n
          ) +
          "</span>"
        );
      },
      9: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<span class="config-button">' +
          t.escapeExpression(
            "function" ==
              typeof (n = null != (n = i(n, "configLabel") || (null != e ? i(e, "configLabel") : e)) ? n : t.hooks.helperMissing)
              ? n.call(null != e ? e : t.nullContext || {}, {
                  name: "configLabel",
                  hash: {},
                  data: s,
                  loc: { start: { line: 10, column: 48 }, end: { line: 10, column: 63 } }
                })
              : n
          ) +
          "</span>"
        );
      },
      11: function (t, e, n, a, s) {
        return '<span class="unsupported">This feature is not yet supported on your current browser</span>';
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        var i,
          l,
          o = null != e ? e : t.nullContext || {},
          r = t.hooks.helperMissing,
          c = "function",
          d = t.escapeExpression,
          u =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<li class="slide-toggle has-toggle' +
          (null !=
          (i = u(n, "if").call(o, null != e ? u(e, "unsupported") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 1, column: 34 }, end: { line: 1, column: 70 } }
          }))
            ? i
            : "") +
          '" data-related-widget="' +
          d(
            typeof (l = null != (l = u(n, "field") || (null != e ? u(e, "field") : e)) ? l : r) == c
              ? l.call(o, { name: "field", hash: {}, data: s, loc: { start: { line: 1, column: 93 }, end: { line: 1, column: 102 } } })
              : l
          ) +
          '" data-test="' +
          d(
            typeof (l = null != (l = u(n, "dataId") || (null != e ? u(e, "dataId") : e)) ? l : r) == c
              ? l.call(o, { name: "dataId", hash: {}, data: s, loc: { start: { line: 1, column: 115 }, end: { line: 1, column: 125 } } })
              : l
          ) +
          '">\n\t<input type="checkbox">\n\t<span class="setting-name">' +
          d(
            typeof (l = null != (l = u(n, "name") || (null != e ? u(e, "name") : e)) ? l : r) == c
              ? l.call(o, { name: "name", hash: {}, data: s, loc: { start: { line: 3, column: 28 }, end: { line: 3, column: 36 } } })
              : l
          ) +
          "</span>\n\t" +
          (null !=
          (i = u(n, "if").call(o, null != e ? u(e, "plusOnly") : e, {
            name: "if",
            hash: {},
            fn: t.program(3, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 4, column: 1 }, end: { line: 4, column: 66 } }
          }))
            ? i
            : "") +
          "\n\t" +
          (null !=
          (i = u(n, "if").call(o, null != e ? u(e, "beta") : e, {
            name: "if",
            hash: {},
            fn: t.program(5, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 5, column: 1 }, end: { line: 5, column: 65 } }
          }))
            ? i
            : "") +
          '\n\t<span class="toggle-slider">\n\t\t<svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>\n\t</span>\n\t' +
          (null !=
          (i = u(n, "if").call(o, null != e ? u(e, "message") : e, {
            name: "if",
            hash: {},
            fn: t.program(7, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 9, column: 1 }, end: { line: 9, column: 70 } }
          }))
            ? i
            : "") +
          "\n\t" +
          (null !=
          (i = u(n, "if").call(o, null != e ? u(e, "configLabel") : e, {
            name: "if",
            hash: {},
            fn: t.program(9, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 10, column: 1 }, end: { line: 10, column: 77 } }
          }))
            ? i
            : "") +
          "\n\t" +
          (null !=
          (i = u(n, "if").call(o, null != e ? u(e, "unsupported") : e, {
            name: "if",
            hash: {},
            fn: t.program(11, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 11, column: 1 }, end: { line: 11, column: 117 } }
          }))
            ? i
            : "") +
          "\n</li>\n"
        );
      },
      useData: !0
    })),
    (n.templates.help = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        return '<h3>Help</h3>\n\n<h5>QUICK TIPS</h5>\n<div class="quick-tips-wrapper">\n\t<div class="quick-tips"></div>\n\t<button class="next-quick-tip button">Next tip</button>\n</div>\n\n<h5>HELPFUL GUIDES</h5>\n<div class="help-guides">\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/115007780748-About-Momentum" target="_blank">About Momentum</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/360019099073-Navigating-Momentum" target="_blank">Navigating Momentum</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/115015748548-Momentum-Plus-Overview" target="_blank">Momentum Plus Overview</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/360012256874-Hotkeys-Keyboard-shortcuts" target="_blank">Hotkeys</a></p>\n</div>\n\n<h5>FOR MORE HELPFUL GUIDES AND TIPS</h5>\n<p><a href="https://get.momentumdash.help/hc/en-us" target="_blank">Visit our Help Center</a></p>\n';
      },
      useData: !0
    })),
    (n.templates.loading = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        return '<div class="settings-loading">\n\t<p class="settings-loading-loading-message"><i class="loading-icon"></i>Loading...</span></p>\n\t<p class="settings-loading-error-message">We\'re having trouble loading these settings.</p>\n\t<span class="button button-retry">Retry</span>\n</div>\n';
      },
      useData: !0
    })),
    (n.templates.main = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        return '<div class="app settings-app" data-test="settings-app">\n\t<nav id="nav-menu" class="settings-nav" data-test="nav-menu"></nav>\n\t<div class="settings-view-container-wrapper">\n\t\t<div class="banner-wrapper"></div>\n\t\t<div class="settings-view-container" data-test="settings-view-container"></div>\n\t</div>\n\t<div class="settings-tablet-control">\n\t\t<span class="mobile-close">\n\t\t\t<span class="icon-wrapper u--mobile-show-bg hide">\n\t\t\t\t<svg class="icon icon-hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334"><path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"/></svg>\n\t\t\t</span>\n\t\t</span>\n\t</div>\n</div>\n<div class="touch-overlay"></div>\n';
      },
      useData: !0
    })),
    (n.templates.navmenu = Handlebars.template({
      1: function (t, e, n, a, s) {
        var i,
          l = null != e ? e : t.nullContext || {},
          o = t.hooks.helperMissing,
          r = "function",
          c = t.escapeExpression;
        return (
          '\t\t\t<div class="user-container u--no-transition">\n\t\t\t\t<div class="user" data-test="user-info" title="' +
          c(
            typeof (i =
              null !=
              (i =
                (t =
                  t.lookupProperty ||
                  function (t, e) {
                    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                  })(n, "email") || (null != e ? t(e, "email") : e))
                ? i
                : o) == r
              ? i.call(l, { name: "email", hash: {}, data: s, loc: { start: { line: 9, column: 51 }, end: { line: 9, column: 60 } } })
              : i
          ) +
          '">\n\t\t\t\t\t<div class="user-row">\n\t\t\t\t\t\t<div class="user-avatar-wrapper" data-test="avatar-wrapper">\n\t\t\t\t\t\t\t<div class="user-avatar">\n\t\t\t\t\t\t\t\t<img class="user-avatar-img" src="/img/gravatar_unknown.jpg">\n\t\t\t\t\t\t\t\t<div class="user-badge-wrapper">\n\t\t\t\t\t\t\t\t\t<span class="badge badge-plus" data-test="plus">PLUS</span>\n\t\t\t\t\t\t\t\t\t<span class="badge badge-team" data-test="team">TEAM</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="user-avatar-hidden"><img src=""></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<span class="user-name-wrapper">\n\t\t\t\t\t\t\t<span class="user-info-name">' +
          c(
            typeof (i = null != (i = t(n, "displayName") || (null != e ? t(e, "displayName") : e)) ? i : o) == r
              ? i.call(l, {
                  name: "displayName",
                  hash: {},
                  data: s,
                  loc: { start: { line: 23, column: 36 }, end: { line: 23, column: 51 } }
                })
              : i
          ) +
          '</span>\n\t\t\t\t\t\t\t<span class="anim-caret u--no-transition">\n\t\t\t\t\t\t\t\t<svg class="icon anim-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t\t\t\t\t<svg class="icon anim-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="user-nav-desktop">\n\t\t\t\t\t\t<ul class="user-nav">\n\t\t\t\t\t\t\t<li class="action action-profile" data-test="profile">Profile</li>\n\t\t\t\t\t\t\t<li class="action action-logout">Log Out</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class="user-close"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="user-nav-mobile">\n\t\t\t\t\t\t<nav class="user-nav dropdown nipple nipple-top-right">\n\t\t\t\t\t\t\t<ul class="dropdown-list">\n\t\t\t\t\t\t\t\t<li class="dropdown-list-item action action-profile">Profile</li>\n\t\t\t\t\t\t\t\t<li class="dropdown-list-item action action-logout">Log Out</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n'
        );
      },
      3: function (t, e, n, a, s) {
        return '\n\t\t\t<div class="user login">\n\t\t\t\t<div class="button login-button">\n\t\t\t\t\t<div class="login-title">Log In<span class="slash">/</span>Sign up</div>\n\t\t\t\t\t<div class="login-description">Sync your account</div>\n\t\t\t\t</div>\n\t\t\t</div>\n';
      },
      5: function (t, e, n, a, s) {
        var i,
          l = null != e ? e : t.nullContext || {},
          o = t.hooks.helperMissing,
          r = "function",
          c = t.escapeExpression;
        return (
          '\t\t<div data-navitem="' +
          c(
            typeof (i =
              null !=
              (i =
                (t =
                  t.lookupProperty ||
                  function (t, e) {
                    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                  })(n, "id") || (null != e ? t(e, "id") : e))
                ? i
                : o) == r
              ? i.call(l, { name: "id", hash: {}, data: s, loc: { start: { line: 70, column: 21 }, end: { line: 70, column: 27 } } })
              : i
          ) +
          '" class="settings-nav-item" data-test="nav-menu-' +
          c(
            typeof (i = null != (i = t(n, "id") || (null != e ? t(e, "id") : e)) ? i : o) == r
              ? i.call(l, { name: "id", hash: {}, data: s, loc: { start: { line: 70, column: 75 }, end: { line: 70, column: 81 } } })
              : i
          ) +
          '">' +
          c(
            typeof (i = null != (i = t(n, "title") || (null != e ? t(e, "title") : e)) ? i : o) == r
              ? i.call(l, { name: "title", hash: {}, data: s, loc: { start: { line: 70, column: 83 }, end: { line: 70, column: 92 } } })
              : i
          ) +
          "</div>\n"
        );
      },
      7: function (t, e, n, a, s) {
        var i,
          l,
          o = null != e ? e : t.nullContext || {},
          r = t.hooks.helperMissing,
          c = "function",
          d = t.escapeExpression,
          u =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '\t\t<div data-navitem="' +
          d(
            typeof (l = null != (l = u(n, "id") || (null != e ? u(e, "id") : e)) ? l : r) == c
              ? l.call(o, { name: "id", hash: {}, data: s, loc: { start: { line: 74, column: 21 }, end: { line: 74, column: 27 } } })
              : l
          ) +
          '" class="settings-nav-item secondary ' +
          (null !=
          (i = u(n, "if").call(o, s && u(s, "first"), {
            name: "if",
            hash: {},
            fn: t.program(8, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 74, column: 64 }, end: { line: 74, column: 101 } }
          }))
            ? i
            : "") +
          " " +
          (null !=
          (i = u(n, "if").call(o, null != e ? u(e, "class") : e, {
            name: "if",
            hash: {},
            fn: t.program(10, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 74, column: 102 }, end: { line: 74, column: 131 } }
          }))
            ? i
            : "") +
          '" data-test="nav-menu-' +
          d(
            typeof (l = null != (l = u(n, "id") || (null != e ? u(e, "id") : e)) ? l : r) == c
              ? l.call(o, { name: "id", hash: {}, data: s, loc: { start: { line: 74, column: 153 }, end: { line: 74, column: 159 } } })
              : l
          ) +
          '">' +
          d(
            typeof (l = null != (l = u(n, "title") || (null != e ? u(e, "title") : e)) ? l : r) == c
              ? l.call(o, { name: "title", hash: {}, data: s, loc: { start: { line: 74, column: 161 }, end: { line: 74, column: 170 } } })
              : l
          ) +
          "</div>\n"
        );
      },
      8: function (t, e, n, a, s) {
        return " secondary-first";
      },
      10: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return t.escapeExpression(
          "function" == typeof (n = null != (n = i(n, "class") || (null != e ? i(e, "class") : e)) ? n : t.hooks.helperMissing)
            ? n.call(null != e ? e : t.nullContext || {}, {
                name: "class",
                hash: {},
                data: s,
                loc: { start: { line: 74, column: 115 }, end: { line: 74, column: 124 } }
              })
            : n
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        var i,
          l = null != e ? e : t.nullContext || {},
          o =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<div class="settings-nav-header">\n\t<div class="settings-nav-chooser">\n\t\t<span class="settings-nav-active">' +
          t.escapeExpression(
            "function" == typeof (i = null != (i = o(n, "active") || (null != e ? o(e, "active") : e)) ? i : t.hooks.helperMissing)
              ? i.call(l, { name: "active", hash: {}, data: s, loc: { start: { line: 3, column: 36 }, end: { line: 3, column: 48 } } })
              : i
          ) +
          '</span><svg class="setting-nav-icon icon icon-angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.751 55.751"><path d="M31.836 43.006c.282-.281.518-.59.725-.912L54.17 20.485a5.403 5.403 0 0 0 0-7.638 5.403 5.403 0 0 0-7.638 0l-18.608 18.61L9.217 12.753A5.4 5.4 0 0 0 0 16.571a5.363 5.363 0 0 0 1.582 3.816l21.703 21.706c.207.323.445.631.729.913a5.367 5.367 0 0 0 3.91 1.572 5.37 5.37 0 0 0 3.912-1.572z"></path></svg>\n\t</div>\n\n\t<div class="settings-nav-user">\n' +
          (null !=
          (i = o(n, "if").call(l, null != e ? o(e, "loggedIn") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.program(3, s, 0),
            data: s,
            loc: { start: { line: 7, column: 2 }, end: { line: 58, column: 9 } }
          }))
            ? i
            : "") +
          '\t</div>\n\n\t<span class="mobile-close">\n\t\t<span class="icon-wrapper u--mobile-show-bg hide">\n\t\t\t<svg class="icon icon-hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334"><path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"/></svg>\n\t\t</span>\n\t</span>\n</div>\n\n<div class="settings-nav-list" data-test="nav-menu">\n' +
          (null !=
          (i = o(n, "each").call(l, null != (i = null != e ? o(e, "menu") : e) ? o(i, "navItems") : i, {
            name: "each",
            hash: {},
            fn: t.program(5, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 69, column: 1 }, end: { line: 71, column: 10 } }
          }))
            ? i
            : "") +
          "\n" +
          (null !=
          (i = o(n, "each").call(l, null != (i = null != e ? o(e, "menu") : e) ? o(i, "secondaryNavItems") : i, {
            name: "each",
            hash: {},
            fn: t.program(7, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 73, column: 1 }, end: { line: 75, column: 10 } }
          }))
            ? i
            : "") +
          "</div>"
        );
      },
      useData: !0
    })),
    (n.templates.trialBanner = Handlebars.template({
      1: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          " — " +
          t.escapeExpression(
            "function" ==
              typeof (n = null != (n = i(n, "daysRemaining") || (null != e ? i(e, "daysRemaining") : e)) ? n : t.hooks.helperMissing)
              ? n.call(null != e ? e : t.nullContext || {}, {
                  name: "daysRemaining",
                  hash: {},
                  data: s,
                  loc: { start: { line: 2, column: 70 }, end: { line: 2, column: 87 } }
                })
              : n
          )
        );
      },
      3: function (t, e, n, a, s) {
        return "\t\t\t\tPayment method added. Subscription will start at end of trial.\n";
      },
      5: function (t, e, n, a, s) {
        return "\t\t\t\tUpgrade now to beat distraction and reach your goals faster!\n";
      },
      7: function (t, e, n, a, s) {
        return '\t\t<button class="button button-small payment">Manage subscription</button>\n';
      },
      9: function (t, e, n, a, s) {
        return '\t\t<button class="button upgrade">Upgrade</button>\n';
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        var i,
          l = null != e ? e : t.nullContext || {},
          o =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<div class="banner-copy">\n\t<div class="banner-title">Momentum Plus Trial' +
          (null !=
          (i = o(n, "if").call(l, null != e ? o(e, "daysRemaining") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, s, 0),
            inverse: t.noop,
            data: s,
            loc: { start: { line: 2, column: 46 }, end: { line: 2, column: 94 } }
          }))
            ? i
            : "") +
          '</div>\n\t\t<div class="banner-description">\n' +
          (null !=
          (i = o(n, "if").call(l, null != e ? o(e, "hasPaymentMethod") : e, {
            name: "if",
            hash: {},
            fn: t.program(3, s, 0),
            inverse: t.program(5, s, 0),
            data: s,
            loc: { start: { line: 4, column: 3 }, end: { line: 8, column: 10 } }
          }))
            ? i
            : "") +
          '\t\t</div>\n</div>\n<div class="banner-cta">\n' +
          (null !=
          (i = o(n, "if").call(l, null != e ? o(e, "hasPaymentMethod") : e, {
            name: "if",
            hash: {},
            fn: t.program(7, s, 0),
            inverse: t.program(9, s, 0),
            data: s,
            loc: { start: { line: 12, column: 1 }, end: { line: 16, column: 8 } }
          }))
            ? i
            : "") +
          "</div>\n"
        );
      },
      useData: !0
    })),
    (n.templates.upgrade = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        var i =
          t.lookupProperty ||
          function (t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          };
        return (
          '<div class="hero upgrade-hero">\n\t<style type="text/css">\n\t\t.upgrade-hero { padding-bottom: 30px; border-bottom: 1px solid #444; }\n\t\t.upgrade-hero h3 { margin-bottom: 6px; }\n\t\t.upgrade-hero .description { margin-bottom: 15px; opacity: 0.8; }\n\t\t.settings-upgrade .button { padding: 12px 30px; font-size: 95%; font-weight: 500; text-transform: uppercase; }\n\t</style>\n\n\t<h3>Momentum Plus is Here!</h3>\n\t<p class="description" style="margin-bottom: 15px; opacity: 0.8;" ">Level up your focus with customization, integrations, and new widgets.</p>\n\n\t<div class="login-needed">\n\t\t<span class="login-needed-title">Please log in</span>\n\t\t<span class="login-needed-desc">Go to <strong>General → Login</strong>, then come back and try again. Thanks!</span>\n\t</div>\n\n\t<span class="button button-upgrade">Get Momentum Plus</span>\n\t<span class="special">Launch Special!<strong style="margin-left: 5px;"><i class="fa fa-sun-o"></i> 33% Off</strong></span>\n\t<span class="price-line"><span class="price">$1.99/month</span> or <span class="price">$19.99/year</span> (equal to 2 months free!)<br></span>\n</div>\n\n\n\n<div class="feature-list">\n\t<style type="text/css">\n\t\t.feature-list { margin-top: 30px; }\n\t\t.feature-list h4 { margin-bottom: 15px; font-size: 95%; opacity: 0.8; text-transform: uppercase; }\n\t\t.feature-list-icon { width: 40px; margin-top: -2px; float: left; font-size: 120%; text-align: center; }\n\t\t.feature-list-info { margin-left: 40px; margin-bottom: 20px; }\n\t\t.feature-list-info h5 { margin: 0 0 4px; font-size: 92%; opacity: 1; }\n\t\t.feature-list-info p { margin-top: 5px; font-size: 13px; line-height: 135%; opacity: 0.7; }\n\t</style>\n\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Todo Integrations</h5>\n\t\t<p>Momentum Plus connects with your favorite task management services! See, update, and create new tasks from Trello, Todoist, Wunderlist, and Google Tasks.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Custom Background Photos</h5>\n\t\t<p>Light up your day every time you open a new tab. Add your own photos or choose from your favorites or past photos in Momentum.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Personalize Font and Color</h5>\n\t\t<p>Make Momentum your own by choosing a font and color that suits your personality. Incorporate your own style to motivate, inspire, and bring focus to your day.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Custom Quotes</h5>\n\t\t<p>Add your favourite quotes to maximize your inspiration. Set the quote of the day to anything you want, anytime.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Skip Photo/Quote</h5>\n\t\t<p>Not feeling the photo or quote of the day? No problem; a new one is just a refresh away. Cycle between five photos and five quotes per day.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Autofocus Mode</h5>\n\t\t<p>Set your priorities at the start of the day and Momentum will show you the one thing you need to focus on at a time. Check it off, and the next up todo becomes your focus.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Inbox, Today, and Done Lists</h5>\n\t\t<p>Keep your todo list clutter free with the Inbox list. Know exactly what you need to do for the day with the Today list. Follow up on what you’ve completed with the Done list.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Priority Support</h5>\n\t\t<p>Plus subscribers can be assured that their messages, suggestions and requests will be answered promptly by a real human. Your satisfaction is of the utmost importance to us.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Early Access</h5>\n\t\t<p>Get exclusive early access to exciting new Momentum features. Have a say in the direction of the product. Next early release feature: Notes.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Support Momentum</h5>\n\t\t<p>Your subscription helps Momentum  Plus subscriptions help sustain Momentum and enable the addition of more features. Thank you for your support — we are incredibly grateful!</p>\n\t</div>\n</div>\n\n\n\n<div class="cta">\n\t<style type="text/css">\n\t\t.settings-upgrade .cta { margin: 50px 0 70px; padding: 25px 10px 10px; border-top: 1px solid #444; border-bottom: 1px solid #444; text-align: center; }\n\t\t.settings-upgrade .cta .pitch { margin: 0 0 19px; font-size: 125%; line-height: 135%; }\n\t\t.settings-upgrade .cta .button { margin-bottom: 0; }\n\t\t.settings-upgrade .link { margin: 3px 0 0; padding: 8px; display: inline-block; background: none !important; cursor: pointer; opacity: 0.5; text-decoration: none; -webkit-transition: all 0.1s ease; }\n\t\t.settings-upgrade .link:hover { opacity: 0.7; }\n\t</style>\n\n\t<p class="pitch">Upgrade to Momentum Plus today and turn<br>your potential into progress.</p>\n\n\t<div class="login-needed">\n\t\t<span class="login-needed-title">Please log in</span>\n\t\t<span class="login-needed-desc">Go to <strong>General → Login</strong>, then come back and try again. Thanks!</span>\n\t</div>\n\n\t<span class="button button-upgrade">Get Momentum Plus</span><br>\n\t<a href="https://momentumdash.com/plus?' +
          t.escapeExpression(
            "function" ==
              typeof (n = null != (n = i(n, "campaignDetails") || (null != e ? i(e, "campaignDetails") : e)) ? n : t.hooks.helperMissing)
              ? n.call(null != e ? e : t.nullContext || {}, {
                  name: "campaignDetails",
                  hash: {},
                  data: s,
                  loc: { start: { line: 125, column: 40 }, end: { line: 125, column: 59 } }
                })
              : n
          ) +
          '" class="link">Learn more</a>\n</div>\n\n\n\n<div class="faq">\n\t<style type="text/css">\n\t\t.settings-upgrade .faq { margin-top: 0; padding: 0 75px; font-size: 90%; opacity: 1; }\n\t\t.settings-upgrade .faq:first-child { margin-top: 0; }\n\t\t.settings-upgrade .faq:last-child { margin-bottom: 10px !important; }\n\n\t\t.settings-upgrade .faq-question { opacity: 0.9; }\n\t\t.settings-upgrade .faq-answer { opacity: 0.7; }\n\t</style>\n\t<p>\n\t\t<span class="faq-question">What are the available integrations?</span>\n\t\t<span class="faq-answer">Currently we integrate with Wunderlist, Google Tasks, Todoist, and Fitbit. Coming soon: Trello and Asana.\x3c!--Github, Google Analytics, Uservoice, Harvest.--\x3e</span>\n\t</p>\n\n\t<p>\n\t\t<span class="faq-question">I thought Momentum was free?</span>\n\t\t<span class="faq-answer">Momentum Free will always be free. We created Momentum Plus to bring more control and functionality to those who desire it, while still keeping the experience simple and focused.</span>\n\t</p>\n</div>\n'
        );
      },
      useData: !0
    })),
    (n.templates.whatsnew = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, s) {
        return '<div class="settings-header">\n\t<h3>What’s New</h3>\n</div>\n\n<div class="whatsnew-body">\n</div>\n';
      },
      useData: !0
    })),
    (n.views.SettingsPanel = Backbone.View.extend({
      initialize: function () {},
      render: function () {
        return this.$el.html(this.template({})), this;
      },
      close: function () {
        this.remove(), this.unbind();
      }
    })),
    (n.views.About = n.views.SettingsPanel.extend({
      attributes: { id: "settings-about", class: "settings-view settings-about" },
      template: n.templates.about,
      panelid: "about",
      events: { "dblclick .version": "revealUuid", "dblclick .about-logo": "logoDblClicked" },
      initialize: function () {
        c.Analytics.capture("settings panel show", { feature: "settings", name: "about" });
      },
      render: function () {
        var t = { version: c.globals.version };
        return this.$el.html(this.template(t)), this;
      },
      revealUuid: function (t) {
        t.preventDefault(), t.stopPropagation(), this.$el.find(".made").html(localStorage.client_uuid);
      },
      logoDblClicked: function (t) {
        t.stopPropagation(), s(".settings").first().toggleClass("infinispin", c.settingsManager.toggleInfinispin());
      }
    })),
    (n.views.ActionBanner = Backbone.View.extend({
      attributes: { class: "banner banner-action", "data-test": "banner-action" },
      template: n.templates.actionBanner,
      events: { "click .validate": "openManagePayment" },
      initialize: function () {
        this.render();
      },
      render: function () {
        this.$el.html(this.template());
      },
      openManagePayment: function () {
        this.captureClickEvent(), c.cmd("window.account.open.login", "subscription");
      },
      captureClickEvent: function () {
        c.Analytics.capture("plus action banner click", { location: "settings" });
      }
    })),
    (c.views.Gravatar = Backbone.View.extend({
      className: "avatar",
      tagName: "img",
      render: function () {
        var t = c.utils.getBaseEmail(this.options.email),
          e = this.options.size;
        return this.$el.attr({ src: "https://www.gravatar.com/avatar/" + md5(t) + "?s=" + e + "&d=mm" }), this;
      }
    })),
    (n.views.Help = n.views.SettingsPanel.extend({
      attributes: { id: "settings-help", class: "settings-view settings-help" },
      template: n.templates.help,
      panelid: "help",
      events: { "click .next-quick-tip": "showRandomTip" },
      initialize: function () {
        (this.quickTips = [
          "Momentum's Photo, Quote & Mantra change automatically at 4 AM each day.",
          "You can change between a 12 hour or 24 hour clock at the bottom of the General settings.",
          "Double-clicking your display name will let you edit it.",
          'Click the current temperature, select the <i class="icon-ellipsis more-icon"></i> options and then click the Metric units switch to change between °F or °C.'
        ]),
          c.Analytics.capture("settings panel show", { feature: "settings", name: "help" });
      },
      render: function () {
        return this.$el.html(this.template({})), (this.$quickTips = s(this.$el.find(".quick-tips")[0])), this.showRandomTip(), this;
      },
      showRandomTip: function () {
        var e = this,
          t = "helpTipsIndex",
          n = localStorage.getItem(t);
        (n = null == n ? 0 : parseInt(n)) > this.quickTips.length - 1 && (n = 0),
          this.$quickTips.addClass("fadein"),
          this.$quickTips.on("webkitAnimationEnd onanimationend msAnimationEnd animationend", function t() {
            e.$quickTips.removeClass("fadein"), e.$quickTips.off("webkitAnimationEnd onanimationend msAnimationEnd animationend", t);
          }),
          this.$quickTips.html(this.quickTips[n]),
          localStorage.setItem(t, n + 1);
      }
    })),
    (n.views.Loading = n.views.SettingsPanel.extend({
      attributes: { id: "settings-loading", class: "settings-view settings-loading" },
      template: n.templates.loading,
      panelid: "loading",
      events: { "click .button-retry": "retryClicked" },
      render: function () {
        return (
          this.renderedOnce ||
            ((this.renderedOnce = !0),
            this.$el.html(this.template({})),
            (this.$errorMessage = this.$(".settings-loading-error-message")),
            (this.$retryButton = this.$(".button-retry")),
            (this.$loading = this.$(".settings-loading-loading-message"))),
          this.renderDisplayState(),
          this
        );
      },
      renderDisplayState: function () {
        if (this.displayOptions) {
          var t = this.displayOptions;
          if (t.error)
            return (
              this.$errorMessage.text(t.error),
              this.$errorMessage.css("display", "block"),
              this.$retryButton.css("display", "inline-block"),
              void this.$loading.hide()
            );
        }
        this.$loading.css("display", "block"), this.$errorMessage.hide(), this.$retryButton.hide();
      },
      setDisplayOptions: function (t) {
        this.displayOptions = t || null;
      },
      retryClicked: function (t) {
        var e;
        t.stopPropagation(),
          this.displayOptions &&
            this.displayOptions.retryInfo &&
            (((e = (t = this.displayOptions.retryInfo).options || {}).section = t.id),
            c.commandManager.execute("settings.display", null, e));
      }
    })),
    (n.views.MainSettings = Backbone.View.extend({
      attributes: { class: "app-wrapper focused nipple nipple-bottom-left" },
      template: n.templates.main,
      events: { "click .mobile-close": "hideSettings", "click .touch-overlay": "hideSettings" },
      detailsShown: !1,
      initialize: function () {
        (this.subViews = []), (this.renderedOnce = !1), (this.visible = !1);
      },
      render: function () {
        return (
          this.visible &&
            (this.paneRendered ||
              (this.$el.html(this.template()),
              (this.$popup = this.$(".app-wrapper")),
              (this.$container = this.$(".settings-view-container")),
              (this.paneRendered = !0)),
            this.cssLoaded) &&
            (this.renderedOnce ||
              ((this.navMenu = new n.views.NavMenu({ el: this.$("#nav-menu") })),
              this.listenTo(this.navMenu, "navItemClicked", this.navItemClicked),
              (this.renderedOnce = !0),
              this.visible) ||
              this.$el.hide(),
            this.renderBanners(),
            this.renderActivePanel()),
          this
        );
      },
      renderActivePanel: function (t) {
        this.activePanel &&
          this.cssLoaded &&
          this.renderedOnce &&
          (this.activePanel.render(t).$el.detach().appendTo(this.$container),
          (this.$popBody = this.$container.children(":first-child")),
          c.trigger("settings:panel:visible"));
      },
      renderBanners: function () {
        this.renderTrialBannerIfTrialing(), this.renderActionBannerIfRequired(localStorage.getObject("subscriptionSummary"));
        var e = this;
        s.ajax({ type: "GET", url: c.globals.urlRootApi + "user/profile?details=1" }).done(function (t) {
          t = t && t.subscriptionSummary;
          t && (e.renderTrialBannerIfTrialing(t), e.renderActionBannerIfRequired(t), localStorage.setObject("subscriptionSummary", t));
        });
      },
      renderActionBannerIfRequired: function (t) {
        var e;
        t &&
          (!(e = this.$(".banner-action")).length && t.intent && "requires_action" === t.intent.status
            ? this.renderActionBanner()
            : ((t.intent && "requires_action" !== t.intent.status) || !t.intent) && e.remove());
      },
      renderActionBanner: function () {
        this.$(".banner-wrapper").prepend(new n.views.ActionBanner().$el);
      },
      renderTrialBannerIfTrialing: function (t) {
        var e,
          n = localStorage.getObject("subscriptionSummary");
        (n || t) &&
          (!(e = this.$(".banner-trial")).length && ((n && new Date(n.trialEnd) > new Date()) || (t && new Date(t.trialEnd) > new Date()))
            ? this.renderTrialBanner(n || t)
            : t && !t.trialing
            ? e.remove()
            : t &&
              n &&
              (t.trialEnd !== n.trialEnd || t.hasPaymentMethod !== n.hasPaymentMethod) &&
              (e.remove(), this.renderTrialBanner(t)));
      },
      renderTrialBanner: function (t) {
        this.$(".banner-wrapper").append(new n.views.TrialBanner(t).$el);
      },
      navItemClicked: function (t) {
        var e;
        t !== this.activePanelId &&
          (c.trigger("colorPicker:destroy"),
          (e = c.settingsManager.getNavItem(t)) && e.cmd && e.cmdOnly
            ? (this.setActiveNavItem(t),
              c.commandManager.ensureCommandLoaded(
                e.cmd,
                function () {
                  e.hide && c.commandManager.execute("settings.hide"), c.commandManager.execute(e.cmd, e.options);
                },
                function () {},
                function () {}
              ))
            : this.activateSection(t, { source: "nav-" + t }));
      },
      toggleVisible: function () {
        this.visible ? this.hideSettings() : this.showSettings();
      },
      showSettings: function (t) {
        var e,
          n = this;
        this.cssLoaded ||
          this.cssLoading ||
          ((this.cssLoading = !0),
          (e = s('<link type="text/css" href="css/settings.css" rel="stylesheet" />')).on("load", function () {
            (n.cssLoaded = !0), n.render(), n.showSection(t);
          }),
          s("head").append(e)),
          (this.visible = !0),
          c.trigger("globalEvent:toggle:bottom-left", this),
          !n.cssLoaded || (this.paneRendered && this.renderedOnce) || this.render(),
          c.trigger("settings:visible"),
          c.trigger("notification:hide"),
          this.cssLoaded && this.showSection(t),
          c.appZStack.add("settings"),
          c.Analytics.capture("app show", { feature: "settings" });
      },
      hideSettings: function (t) {
        var e;
        this.$el.is(":visible") &&
          (t && t.preventDefault(),
          (this.visible = !1),
          c.trigger("settings:hidden"),
          c.appZStack.remove("settings"),
          this.$popup.removeClass("show-fade-in"),
          (e = this),
          setTimeout(function () {
            e.$popup.removeClass("show"),
              this.activePanel && this.activePanel.close(),
              this.navMenu && this.navMenu.closeUser(),
              c.trigger("colorPicker:destroy");
          }, 200));
      },
      showSection: function (t) {
        t && t.section
          ? this.activateSection(t.section, t)
          : this.activateSection(this.activePanelId && "loading" != this.activePanelId ? this.activePanelId : "general");
      },
      getPanel: function (t) {
        var e = c.settingsManager.getPanelItems();
        return _.findWhere(e, { id: t });
      },
      showLoadingPanel: function (t) {
        this.loadingPanel || (this.loadingPanel = new n.views.Loading()),
          "loading" != this.activePanelId && this.setActivePanel(this.loadingPanel, "loading", null),
          this.loadingPanel.setDisplayOptions(t),
          this.renderActivePanel();
      },
      setActivePanel: function (t, e, n) {
        t &&
          (this.activePanel && this.activePanel.close(),
          (this.activePanel = t),
          (this.activePanelId = e),
          (this.activePanelOptions = n),
          this.$container.scrollTop(0));
      },
      setActiveNavItem: function (t) {
        this.$(".settings-nav-item").removeClass("active");
        var e = (e = c.settingsManager.getNavItem(t)) || this.getPanel(t);
        this.$('[data-navitem="' + ((e && e.section) || t) + '"]').addClass("active"),
          (e && e.section ? s('li[data-navitem="' + e.section + '"]') : s('li[data-navitem="' + t + '"]')).addClass("active");
      },
      activateSection: function (t, e) {
        var n,
          a,
          s,
          i,
          l,
          o,
          r = this;
        t &&
          (e && e.nav ? this.setActiveNavItem(e.nav) : this.setActiveNavItem(t),
          (n = (n = c.settingsManager.getNavItem(t)) || this.getPanel(t)),
          (o = null),
          (i = s = a = !1),
          n && n.cmd
            ? c.commandManager.ensureCommandLoaded(
                n.cmd,
                function () {
                  (a = !0), (o = c.commandManager.execute(n.cmd, e)), r.setActivePanel(o, t, e), r.renderActivePanel(e);
                },
                function () {
                  s ||
                    a ||
                    ((s = !0),
                    setTimeout(function () {
                      i || a || r.showLoadingPanel();
                    }, 400));
                },
                function () {
                  (i = s = !0), r.showLoadingPanel({ error: "We were unable to load settings.", retryInfo: { id: t, options: e } });
                }
              )
            : (!(o = _.findWhere(this.subViews, { panelid: t })) &&
                ((l = t.charAt(0).toUpperCase() + t.slice(1)), (l = c.views.settings.panels[l])) &&
                (o = new l(e)),
              this.setActivePanel(o, t, e),
              this.renderActivePanel(e)));
      }
    })),
    (n.views.NavMenu = Backbone.View.extend({
      template: n.templates.navmenu,
      analytics: new c.Analytics({ feature: "login" }),
      events: {
        "click .settings-nav-item": "onClickNavItem",
        "click .action-profile": "profileClicked",
        "click .user-close": "closeUser",
        "click .action-logout": "logoutClicked",
        "click .user": "toggleUserPanel",
        "click .login-button": "loginClicked",
        "click .settings-nav-chooser": "toggleChooser"
      },
      initialize: function () {
        var n = this;
        this.listenTo(c.settingsManager, "navItemsChanged", this.render),
          this.listenTo(c.models.customization, "change:displayname", this.onChangeDisplayname),
          this.listenTo(c, "settings:hidden", this.closeUser),
          this.listenTo(c, "globalEvent:click", this.onGlobalClick),
          this.render(),
          this.$el.closest(".app").on("click", function (t) {
            var e = n.$user[0];
            e && !s.contains(e, t.target) && t.target !== e && n.closeUser();
          });
      },
      render: function () {
        var t = localStorage.getItem("email"),
          e = c.isLoggedIn(),
          n = {
            displayName: c.models.customization.get("displayname"),
            email: c.utils.email,
            loggedIn: e,
            menu: c.settingsManager.getNavItems(),
            active: "General"
          },
          n =
            (this.$el.html(this.template(n)),
            (this.$user = this.$(".user-container")),
            (this.$userInfoName = this.$(".user-info-name")),
            (this.$userHidden = this.$(".user-hidden")),
            (this.$navActive = this.$(".settings-nav-active")),
            (this.$navList = this.$(".settings-nav-list")),
            e && this.renderGravatar(t),
            c.conditionalFeatures.featureEnabled("plus") &&
              !c.conditionalFeatures.featureEnabled("team") &&
              this.$user.addClass("has-plus"),
            this.$el.clone());
        return (
          n.css("visibility", "hidden"),
          n.css("position", "absolute"),
          document.body.appendChild(n[0]),
          this.$user.css("transform", "translateY(" + n.find(".user-hidden").height() + "px)"),
          n.remove(),
          this
        );
      },
      renderGravatar: function (t) {
        (this.$userAvatarImg = this.$(".user-avatar img")), (this.$userAvatarHidden = this.$(".user-avatar-hidden"));
        var t = new c.views.Gravatar({ email: t, size: 50 }),
          e = (this.$userAvatarHidden.html(t.render().$el), this),
          n = e.$(".user-avatar-hidden img");
        function a() {
          e.$userAvatarImg.attr("src", n.attr("src"));
        }
        n[0].complete ? a() : n.once("load", a);
      },
      onClickNavItem: function (t) {
        var e = s(t.delegatedTarget).data("navitem");
        c.settingsManager.getNavItem(e).cmdOnly || this.$navActive.text(t.delegatedTarget.textContent),
          this.toggleChooser(),
          this.trigger("navItemClicked", e);
      },
      toggleUserPanel: function () {
        s(".settings-app").removeClass("nav-active"),
          this.$user.removeClass("u--no-transition"),
          this.$(".anim-caret").removeClass("u--no-transition"),
          this.$user.toggleClass("open");
      },
      profileClicked: function (t) {
        var e = this;
        c.Analytics.capture("profile link click", { feature: "profile" }),
          t.preventDefault(),
          t.stopImmediatePropagation(),
          c.utils.isSafari()
            ? c.cmd("modal.open", "SAFARI_ACCOUNT")
            : (s(t.delegatedTarget).html("Launching…"),
              c.commandManager.execute("window.account.open.login", {
                path: "/",
                callback: function () {
                  s(t.delegatedTarget).html("Profile"), e.closeUser();
                }
              }));
      },
      logoutClicked: function (t) {
        t.preventDefault(),
          t.stopImmediatePropagation(),
          s(".action-logout").addClass("action-logout-disabled").text("Logging out…"),
          this.analytics.capture("log out click"),
          c.commandManager.execute("logout");
      },
      closeUser: function () {
        this.$user.css("transform", "translateY(" + this.$userHidden.height() + "px)").removeClass("open");
      },
      loginClicked: function (t) {
        t.preventDefault(),
          t.stopPropagation(),
          this.analytics.capture("log in click"),
          c.commandManager.execute("settings.hide"),
          c.commandManager.execute("account.login");
      },
      onChangeDisplayname: function () {
        this.$userInfoName.text(c.models.customization.get("displayname"));
      },
      toggleChooser: function () {
        s(".settings-app").toggleClass("nav-active");
      },
      onGlobalClick: function (t) {
        var e = this.$(".settings-nav-chooser");
        e.length && s(".settings-app").hasClass("nav-active") && !e.contains(t.target) && this.toggleChooser();
      }
    })),
    (n.views.TrialBanner = Backbone.View.extend({
      attributes: { class: "banner banner-trial", "data-test": "banner-trial" },
      template: n.templates.trialBanner,
      events: { "click .upgrade": "openUpgrade", "click .payment": "openManagePayment" },
      initialize: function (t) {
        (this.hasPaymentMethod = t.hasPaymentMethod), (this.trialEnd = t.trialEnd), this.render();
      },
      render: function () {
        this.$el.html(this.template({ hasPaymentMethod: this.hasPaymentMethod, daysRemaining: this.getDaysRemaining(this.trialEnd) }));
      },
      getDaysRemaining: function (t) {
        return t
          ? ((t = new Date(t) - new Date()),
            (t = Math.floor(t / 864e5)) ? t + " day" + (1 === t ? "" : "s") + " remaining" : "last day of trial")
          : "";
      },
      openUpgrade: function () {
        this.captureClickEvent(!1), c.cmd("window.account.open.login", "subscription?add_card=true");
      },
      openManagePayment: function () {
        this.captureClickEvent(!0), c.cmd("window.account.open.login", "subscription");
      },
      captureClickEvent: function (t) {
        c.Analytics.capture("plus trial banner click", { location: "settings", has_payment_method: t });
      }
    })),
    (n.views.Whatsnew = n.views.SettingsPanel.extend({
      attributes: { id: "whats-new", class: "settings-view whats-new" },
      template: n.templates.whatsnew,
      panelid: "whatsnew",
      events: { "click .action-back": "clickBack" },
      render: function () {
        return (
          this.$el.html(this.template({})),
          (this.$whatsnew = s(this.$el.find(".whatsnew-body")[0])),
          this.$whatsnew.html('<span class="loading"><i class="loading-icon"></i>Loading…</span>'),
          this.fetchLatestWhatsNew(),
          this
        );
      },
      fetchLatestWhatsNew: function () {
        var e = this;
        s.ajax({ type: "GET", url: c.globals.urlRootApi + "settings/whatsnew" })
          .done(function (t) {
            t.html && e.$whatsnew.html(t.html);
          })
          .fail(function () {
            e.$el.html(e.template({}));
          });
      }
    })),
    (n.commands.SettingsColorPicker = c.models.Command.extend({
      defaults: { id: "settings.color.picker" },
      execute: function (t) {
        c.colorPicker
          ? c.trigger("colorPicker:mount", t)
          : c.widgetManager.loadWidget("colorPicker").then(function () {
              c.trigger("colorPicker:mount", t);
            });
      }
    })),
    (n.commands.SettingsPanelHelp = c.models.Command.extend({
      defaults: { id: "settings.panels.help" },
      execute: function () {
        return n.styleLoaded || ((n.styleLoaded = !0), n.styles.style()), new n.views.Help();
      }
    })),
    (n.commands.SettingsPanelReleaseNotes = c.models.Command.extend({
      defaults: { id: "settings.panels.releaseNotes" },
      execute: function () {
        window.open("https://moda.sh/release-notes");
      }
    })),
    (n.commands.SettingsPanelAbout = c.models.Command.extend({
      defaults: { id: "settings.panels.about" },
      execute: function () {
        return n.styleLoaded || ((n.styleLoaded = !0), n.styles.style()), new n.views.About();
      }
    })),
    (n.commands.TakeATour = c.models.Command.extend({
      defaults: { id: "settings.takeATour" },
      execute: function () {
        c.Analytics.capture("onboarding take a tour click", { feature: "settings" }),
          c.commandManager.execute("settings.toggle"),
          c.trigger(
            "modal:show",
            c.conditionalFeatures.featureEnabled("plus") ? c.modals.definitions.plusIntroduction : c.modals.definitions.introduction,
            0
          );
      }
    })),
    (n.commands.JoinWorkshop = c.models.Command.extend({
      defaults: { id: "settings.joinWorkshop" },
      execute: function () {
        c.Analytics.capture("settings join a live session click", { feature: "settings" }), window.open("https://lu.ma/momentum");
      }
    })),
    (n.commands.SettingsInitialize = c.models.Command.extend({
      defaults: { id: "settings.initialize" },
      execute: function (t) {
        return (
          n.views.mainSettings || (n.views.mainSettings = new n.views.MainSettings()),
          t.prepend(n.views.mainSettings.$el),
          t.toggleClass("infinispin", c.settingsManager.infinispin()),
          n.views.mainSettings
        );
      }
    })),
    (n.commands.SettingsDisplay = c.models.Command.extend({
      defaults: { id: "settings.display" },
      execute: function (t, e) {
        c.views.settingsPane.initializeSettings().then(function () {
          n.views.mainSettings && n.views.mainSettings.showSettings(e);
        });
      }
    })),
    (n.commands.SettingsDisplayUpgrade = c.models.Command.extend({
      defaults: { id: "settings.display.upgrade" },
      execute: function (t, e) {
        var n = "https://momentumdash.com/plus?utm_source=extension&utm_medium=organic";
        e && e.source
          ? (n += "&utm_campaign=" + encodeURIComponent(e.source))
          : !e && t && t.source && (n += "&utm_campaign=" + encodeURIComponent(t.source)),
          c.commandManager.execute("window.open", null, { url: n });
      }
    })),
    (n.commands.SettingsDisplayUpgradePanel = c.models.Command.extend({
      defaults: { id: "settings.display.upgrade.panel" },
      execute: function (t, e) {
        n.views.mainSettings && (((e = e || {}).section = "upgrade"), n.views.mainSettings.showSettings(e));
      }
    })),
    (n.commands.SettingsToggle = c.models.Command.extend({
      defaults: { id: "settings.toggle" },
      execute: function (t, e) {
        e && e.section
          ? (n.views.mainSettings.toggleVisible(), n.views.mainSettings.visible && n.views.mainSettings.showSettings(e))
          : n.views.mainSettings && n.views.mainSettings.toggleVisible();
      }
    })),
    (n.commands.SettingsHide = c.models.Command.extend({
      defaults: { id: "settings.hide" },
      execute: function () {
        n.views.mainSettings && n.views.mainSettings.hideSettings();
      }
    })),
    (n.commands.SettingEnable = c.models.Command.extend({
      defaults: { id: "setting.enable" },
      execute: function (t, e) {
        var n;
        e && e.name && (((n = {})[e.name] = !!e.value), c.models.customization.set(n));
      }
    })),
    (n.commands.SettingsCacheUpgradeCopy = c.models.Command.extend({
      defaults: { id: "settings.cache.upgradecopy" },
      fetching: !1,
      fetched: !1,
      execute: function (t, e) {
        var n,
          a = this;
        (!t && c.conditionalFeatures.featureEnabled("plus")) ||
          (!t && (a.fetching || a.fetched)) ||
          ((a.fetching = !0),
          (n = c.globals.urlRootApi + "settings/upgradecopy"),
          e && t
            ? (n = n + "?refresh=1&src=" + encodeURIComponent(e))
            : e
            ? (n = n + "?src=" + encodeURIComponent(e))
            : t && (n += "?refresh=1"),
          s
            .ajax({ type: "GET", url: n })
            .done(function (t) {
              (a.fetching = !1),
                t &&
                  ((a.fetched = !0),
                  localStorage.setItem("cachedUpgradeCopy", JSON.stringify(t)),
                  c.trigger("settings:upgradeCopyChanged"));
            })
            .fail(function () {
              (a.fetched = !1), (a.fetching = !1);
            }),
          setTimeout(function () {
            a.fetching && (a.fetching = !1);
          }, 1e4));
      }
    })),
    (n.commands.SettingsRerender = c.models.Command.extend({
      defaults: { id: "settings.rerender" },
      execute: function () {
        n.views.mainSettings.hideSettings(),
          n.views.mainSettings.unbind(),
          n.views.mainSettings.remove(),
          (n.views.mainSettings = c.widgetManager.handover("settings", n.views.MainSettings, { region: "bottom-left", order: "prepend" })),
          n.views.mainSettings.initialize(),
          n.views.mainSettings.render();
      }
    })),
    (n.views.mainSettings = c.widgetManager.handover("settings", n.views.MainSettings, { region: "bottom-left", order: "prepend" })),
    n
  );
};
m.addinManager && m.addinManager.registerAddinFn("1d872cf4-953a-4743-8f5e-6785bba4bd19", fn_addin);
