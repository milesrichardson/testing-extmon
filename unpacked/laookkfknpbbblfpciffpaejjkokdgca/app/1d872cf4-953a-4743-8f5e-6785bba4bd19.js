var fn_addin = function (d, i, t) {
  var n = n || {};
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
    d.console.log(d.elapsed() + ": " + n.info.id + " started"),
    (n.templates = n.templates || {}),
    (n.templates.about = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<img src="img/logo.svg" class="logo logo-light">\n<img src="img/logo-white.svg" class="logo logo-dark">\n<h3>Momentum</h3>\n<p class="made"><span class="version">v' +
          t.escapeExpression(
            "function" == typeof (s = null != (s = l(n, "version") || (null != e ? l(e, "version") : e)) ? s : t.hooks.helperMissing)
              ? s.call(null != e ? e : t.nullContext || {}, {
                  name: "version",
                  hash: {},
                  data: i,
                  loc: { start: { line: 4, column: 39 }, end: { line: 4, column: 50 } }
                })
              : s
          ) +
          '</span></p>\n\n<p class="thanks">Thank you for your support!</p>\n\n<p class="links">\n\t<a href="http://momentumdash.com/feedback" target="_blank"><span class="link-name">Feedback</span></a>\n\t<a href="http://momentumdash.com" target="_blank"><span class="link-name">Website</span></a>\n\t<a href="http://momentumdash.com/blog" target="_blank"><span class="link-name">Blog</span></a>\n\t<a href="http://momentumdash.com/careers" target="_blank"><span class="link-name">Careers</span> <span class="badge badge-hiring">Hiring!</span></a>\t\n\t<a href="http://www.instagram.com/momentumdash" class="social" target="_blank">\n\t\t<span class="link-name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon-social icon-instagram"><path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"></path><path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"></path><circle cx="393.6" cy="118.4" r="17.056"></circle></svg></span>\n\t</a>\n\t<a href="https://www.facebook.com/momentumdash" class="social" target="_blank">\n\t\t<span class="link-name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon-social icon-facebook"><path d="M288 176v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80h-96z"></path></svg></span>\n\t</a>\n\t<a href="https://twitter.com/momentumdash" class="social" target="_blank">\n\t\t<span class="link-name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon-social icon-twitter"><path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path></svg></span>\n\t</a>\n</p>\n\n<div class="footer">\n\t<span class="footer-made">Made with <span class="heart">&#9829;</span> in beautiful BC, Canada</span><span class="separator"></span><span class="footer-links"><a href="https://momentumdash.com/legal" target="_blank">Terms & Privacy</a></span>\n</div>\n'
        );
      },
      useData: !0
    })),
    (n.templates.actionBanner = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        return '<div class="banner-copy">\n\t<div class="banner-title">\n\t\tAction Required\n\t</div>\n\t<div class="banner-description">\n\t\tFurther steps are needed to finish setting up your credit card.\n\t</div>\n</div>\n<div class="banner-cta">\n\t<button class="button button-small validate">Validate card</button>\n</div>\n';
      },
      useData: !0
    })),
    (n.templates["color-picker"] = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        return '<div class="swatch-container"><div class="swatch" style="background: #222;"></div></div>';
      },
      useData: !0
    })),
    (n.templates.connect = Handlebars.template({
      1: function (t, e, n, a, i) {
        return "GitHub";
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        var s,
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
          '<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\n<section class="provider">\n\t<div class="provider-logo-box">\n\t\t<img  src="' +
          d(
            typeof (l = null != (l = u(n, "large_icon_url") || (null != e ? u(e, "large_icon_url") : e)) ? l : r) == c
              ? l.call(o, {
                  name: "large_icon_url",
                  hash: {},
                  data: i,
                  loc: { start: { line: 5, column: 13 }, end: { line: 5, column: 31 } }
                })
              : l
          ) +
          '" class="provider-logo ' +
          (null !=
          (s = u(n, "if").call(o, null != e ? u(e, "GitHub") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 5, column: 54 }, end: { line: 5, column: 81 } }
          }))
            ? s
            : "") +
          '">\n\t</div>\n\t<h2 class="provider-title">Connect to ' +
          d(
            typeof (l = null != (l = u(n, "provider_title") || (null != e ? u(e, "provider_title") : e)) ? l : r) == c
              ? l.call(o, {
                  name: "provider_title",
                  hash: {},
                  data: i,
                  loc: { start: { line: 7, column: 39 }, end: { line: 7, column: 57 } }
                })
              : l
          ) +
          '</h2>\n</section>\n\x3c!--<section class="extra-info">--\x3e\n\t\x3c!--<label for="blah">Please enter your account name</label>--\x3e\n\t\x3c!--<input type="text" name="blah" id="blah" class="input">--\x3e\n\x3c!--</section>--\x3e\n\n<p class="description">A secure window will open.</p>\n<section class="button-group">\n\t<span id="connect-button" class="button">Connect</span>\n\t<p class="description">Momentum won\'t ever have access to your login information.</p>\n</section>\n'
        );
      },
      useData: !0
    })),
    (n.templates["general-toggle-options"] = Handlebars.template({
      1: function (t, e, n, a, i) {
        return '<span class="badge badge-plus">PLUS</span>';
      },
      3: function (t, e, n, a, i, s, l) {
        var o,
          r,
          c = t.lambda,
          d = t.escapeExpression,
          u = null != e ? e : t.nullContext || {},
          p = t.hooks.helperMissing,
          m = "function",
          h =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '\t\t\t<span class="toggle-option ' +
          d(c(null != l[1] ? h(l[1], "field") : l[1], e)) +
          '" data-related-widget="' +
          d(c(null != l[1] ? h(l[1], "field") : l[1], e)) +
          '" data-option-value="' +
          d(
            typeof (r = null != (r = h(n, "value") || (null != e ? h(e, "value") : e)) ? r : p) == m
              ? r.call(u, { name: "value", hash: {}, data: i, loc: { start: { line: 6, column: 98 }, end: { line: 6, column: 107 } } })
              : r
          ) +
          '" ' +
          (null !=
          (o = h(n, "if").call(u, null != e ? h(e, "dataTest") : e, {
            name: "if",
            hash: {},
            fn: t.program(4, i, 0, s, l),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 6, column: 109 }, end: { line: 6, column: 156 } }
          }))
            ? o
            : "") +
          '>\n\t\t\t\t<div class="sub-view"></div>\n\t\t\t\t<span class="toggle-label">' +
          d(
            typeof (r = null != (r = h(n, "label") || (null != e ? h(e, "label") : e)) ? r : p) == m
              ? r.call(u, { name: "label", hash: {}, data: i, loc: { start: { line: 8, column: 31 }, end: { line: 8, column: 40 } } })
              : r
          ) +
          "</span>\n\t\t\t\t" +
          (null !=
          (o = h(n, "if").call(u, null != e ? h(e, "plusOnly") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, i, 0, s, l),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 9, column: 4 }, end: { line: 9, column: 69 } }
          }))
            ? o
            : "") +
          "\n\t\t\t</span>\n\t\t\t" +
          (null !=
          (o = h(n, "unless").call(u, i && h(i, "last"), {
            name: "unless",
            hash: {},
            fn: t.program(6, i, 0, s, l),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 11, column: 3 }, end: { line: 11, column: 107 } }
          }))
            ? o
            : "") +
          "\n"
        );
      },
      4: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          'data-test="' +
          t.escapeExpression(
            "function" == typeof (s = null != (s = l(n, "dataTest") || (null != e ? l(e, "dataTest") : e)) ? s : t.hooks.helperMissing)
              ? s.call(null != e ? e : t.nullContext || {}, {
                  name: "dataTest",
                  hash: {},
                  data: i,
                  loc: { start: { line: 6, column: 136 }, end: { line: 6, column: 148 } }
                })
              : s
          ) +
          '"'
        );
      },
      6: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return null !=
          (s = l(n, "if").call(null != e ? e : t.nullContext || {}, null != e ? l(e, "breakafter") : e, {
            name: "if",
            hash: {},
            fn: t.program(7, i, 0),
            inverse: t.program(9, i, 0),
            data: i,
            loc: { start: { line: 11, column: 20 }, end: { line: 11, column: 96 } }
          }))
          ? s
          : "";
      },
      7: function (t, e, n, a, i) {
        return "<br>";
      },
      9: function (t, e, n, a, i) {
        return ' <span class="toggle-divider">|</span> ';
      },
      11: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<span class="option-message">' +
          t.escapeExpression(
            "function" == typeof (s = null != (s = l(n, "message") || (null != e ? l(e, "message") : e)) ? s : t.hooks.helperMissing)
              ? s.call(null != e ? e : t.nullContext || {}, {
                  name: "message",
                  hash: {},
                  data: i,
                  loc: { start: { line: 14, column: 45 }, end: { line: 14, column: 56 } }
                })
              : s
          ) +
          "</span>"
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i, s, l) {
        var o,
          r,
          c = null != e ? e : t.nullContext || {},
          d = t.hooks.helperMissing,
          u = "function",
          p = t.escapeExpression,
          m =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<li class="slide-toggle has-toggle" data-related-widget="' +
          p(
            typeof (r = null != (r = m(n, "field") || (null != e ? m(e, "field") : e)) ? r : d) == u
              ? r.call(c, { name: "field", hash: {}, data: i, loc: { start: { line: 1, column: 57 }, end: { line: 1, column: 66 } } })
              : r
          ) +
          '" data-test="' +
          p(
            typeof (r = null != (r = m(n, "dataId") || (null != e ? m(e, "dataId") : e)) ? r : d) == u
              ? r.call(c, { name: "dataId", hash: {}, data: i, loc: { start: { line: 1, column: 79 }, end: { line: 1, column: 89 } } })
              : r
          ) +
          '">\n\t<span class="setting-name">' +
          p(
            typeof (r = null != (r = m(n, "name") || (null != e ? m(e, "name") : e)) ? r : d) == u
              ? r.call(c, { name: "name", hash: {}, data: i, loc: { start: { line: 2, column: 28 }, end: { line: 2, column: 36 } } })
              : r
          ) +
          "</span>\n\t" +
          (null !=
          (o = m(n, "if").call(c, null != e ? m(e, "plusOnly") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, i, 0, s, l),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 3, column: 1 }, end: { line: 3, column: 66 } }
          }))
            ? o
            : "") +
          '\n\t<span class="toggle-options">\n' +
          (null !=
          (o = m(n, "each").call(c, null != e ? m(e, "options") : e, {
            name: "each",
            hash: {},
            fn: t.program(3, i, 0, s, l),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 5, column: 2 }, end: { line: 12, column: 11 } }
          }))
            ? o
            : "") +
          "\t</span>\n\t" +
          (null !=
          (o = m(n, "if").call(c, null != e ? m(e, "message") : e, {
            name: "if",
            hash: {},
            fn: t.program(11, i, 0, s, l),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 14, column: 1 }, end: { line: 14, column: 70 } }
          }))
            ? o
            : "") +
          '\n\t<div class="option-clear"></div>\n</li>\n'
        );
      },
      useData: !0,
      useDepths: !0
    })),
    (n.templates["general-toggle-slider"] = Handlebars.template({
      1: function (t, e, n, a, i) {
        return " disabled ";
      },
      3: function (t, e, n, a, i) {
        return '<span class="badge badge-plus">PLUS</span>';
      },
      5: function (t, e, n, a, i) {
        return '<span class="badge badge-beta">Preview</span>';
      },
      7: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<span class="option-message">' +
          t.escapeExpression(
            "function" == typeof (s = null != (s = l(n, "message") || (null != e ? l(e, "message") : e)) ? s : t.hooks.helperMissing)
              ? s.call(null != e ? e : t.nullContext || {}, {
                  name: "message",
                  hash: {},
                  data: i,
                  loc: { start: { line: 9, column: 45 }, end: { line: 9, column: 56 } }
                })
              : s
          ) +
          "</span>"
        );
      },
      9: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<span class="config-button">' +
          t.escapeExpression(
            "function" ==
              typeof (s = null != (s = l(n, "configLabel") || (null != e ? l(e, "configLabel") : e)) ? s : t.hooks.helperMissing)
              ? s.call(null != e ? e : t.nullContext || {}, {
                  name: "configLabel",
                  hash: {},
                  data: i,
                  loc: { start: { line: 10, column: 48 }, end: { line: 10, column: 63 } }
                })
              : s
          ) +
          "</span>"
        );
      },
      11: function (t, e, n, a, i) {
        return '<span class="unsupported">This feature is not yet supported on your current browser</span>';
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        var s,
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
          (s = u(n, "if").call(o, null != e ? u(e, "unsupported") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 1, column: 34 }, end: { line: 1, column: 70 } }
          }))
            ? s
            : "") +
          '" data-related-widget="' +
          d(
            typeof (l = null != (l = u(n, "field") || (null != e ? u(e, "field") : e)) ? l : r) == c
              ? l.call(o, { name: "field", hash: {}, data: i, loc: { start: { line: 1, column: 93 }, end: { line: 1, column: 102 } } })
              : l
          ) +
          '" data-test="' +
          d(
            typeof (l = null != (l = u(n, "dataId") || (null != e ? u(e, "dataId") : e)) ? l : r) == c
              ? l.call(o, { name: "dataId", hash: {}, data: i, loc: { start: { line: 1, column: 115 }, end: { line: 1, column: 125 } } })
              : l
          ) +
          '">\n\t<input type="checkbox">\n\t<span class="setting-name">' +
          d(
            typeof (l = null != (l = u(n, "name") || (null != e ? u(e, "name") : e)) ? l : r) == c
              ? l.call(o, { name: "name", hash: {}, data: i, loc: { start: { line: 3, column: 28 }, end: { line: 3, column: 36 } } })
              : l
          ) +
          "</span>\n\t" +
          (null !=
          (s = u(n, "if").call(o, null != e ? u(e, "plusOnly") : e, {
            name: "if",
            hash: {},
            fn: t.program(3, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 4, column: 1 }, end: { line: 4, column: 66 } }
          }))
            ? s
            : "") +
          "\n\t" +
          (null !=
          (s = u(n, "if").call(o, null != e ? u(e, "beta") : e, {
            name: "if",
            hash: {},
            fn: t.program(5, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 5, column: 1 }, end: { line: 5, column: 65 } }
          }))
            ? s
            : "") +
          '\n\t<span class="toggle-slider">\n\t\t<svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>\n\t</span>\n\t' +
          (null !=
          (s = u(n, "if").call(o, null != e ? u(e, "message") : e, {
            name: "if",
            hash: {},
            fn: t.program(7, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 9, column: 1 }, end: { line: 9, column: 70 } }
          }))
            ? s
            : "") +
          "\n\t" +
          (null !=
          (s = u(n, "if").call(o, null != e ? u(e, "configLabel") : e, {
            name: "if",
            hash: {},
            fn: t.program(9, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 10, column: 1 }, end: { line: 10, column: 77 } }
          }))
            ? s
            : "") +
          "\n\t" +
          (null !=
          (s = u(n, "if").call(o, null != e ? u(e, "unsupported") : e, {
            name: "if",
            hash: {},
            fn: t.program(11, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 11, column: 1 }, end: { line: 11, column: 117 } }
          }))
            ? s
            : "") +
          "\n</li>\n"
        );
      },
      useData: !0
    })),
    (n.templates.help = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        return '<h3>Help</h3>\n\n<h5>QUICK TIPS</h5>\n<div class="quick-tips-wrapper">\n\t<div class="quick-tips"></div>\n\t<button class="next-quick-tip button">Next tip</button>\n</div>\n\n<h5>HELPFUL GUIDES</h5>\n<div class="help-guides">\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/115007780748-About-Momentum" target="_blank">About Momentum</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/360019099073-Navigating-Momentum" target="_blank">Navigating Momentum</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/115015748548-Momentum-Plus-Overview" target="_blank">Momentum Plus Overview</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/360012256874-Hotkeys-Keyboard-shortcuts" target="_blank">Hotkeys</a></p>\n</div>\n\n<h5>FOR MORE HELPFUL GUIDES AND TIPS</h5>\n<p><a href="https://get.momentumdash.help/hc/en-us" target="_blank">Visit our Help Center</a></p>\n';
      },
      useData: !0
    })),
    (n.templates.loading = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        return '<div class="settings-loading">\n\t<p class="settings-loading-loading-message"><i class="loading-icon"></i>Loading...</span></p>\n\t<p class="settings-loading-error-message">We\'re having trouble loading these settings.</p>\n\t<span class="button button-retry">Retry</span>\n</div>\n';
      },
      useData: !0
    })),
    (n.templates.main = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        return '<div class="app settings-app" data-test="settings-app">\n\t<nav id="nav-menu" class="settings-nav" data-test="nav-menu"></nav>\n\t<div class="settings-view-container-wrapper">\n\t\t<div class="banner-wrapper"></div>\n\t\t<div class="settings-view-container" data-test="settings-view-container"></div>\n\t</div>\n\t<div class="settings-tablet-control">\n\t\t<span class="mobile-close">\n\t\t\t<span class="icon-wrapper u--mobile-show-bg hide">\n\t\t\t\t<svg class="icon icon-hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334"><path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"/></svg>\n\t\t\t</span>\n\t\t</span>\n\t</div>\n</div>\n<div class="touch-overlay"></div>\n';
      },
      useData: !0
    })),
    (n.templates.navmenu = Handlebars.template({
      1: function (t, e, n, a, i) {
        var s,
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
          '\t\t\t<div class="user-container u--no-transition">\n\t\t\t\t<div class="user" data-test="user-info" title="' +
          c(
            typeof (s = null != (s = d(n, "email") || (null != e ? d(e, "email") : e)) ? s : o) == r
              ? s.call(l, { name: "email", hash: {}, data: i, loc: { start: { line: 9, column: 51 }, end: { line: 9, column: 60 } } })
              : s
          ) +
          '">\n\t\t\t\t\t<div class="user-row">\n\t\t\t\t\t\t<div class="user-avatar-wrapper" data-test="avatar-wrapper">\n\t\t\t\t\t\t\t<div class="user-avatar">\n\t\t\t\t\t\t\t\t<img class="user-avatar-img" src="/img/gravatar_unknown.jpg">\n\t\t\t\t\t\t\t\t<div class="user-badge-wrapper">\n\t\t\t\t\t\t\t\t\t<span class="badge badge-plus" data-test="plus">PLUS</span>\n\t\t\t\t\t\t\t\t\t<span class="badge badge-team" data-test="team">TEAM</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="user-avatar-hidden"><img src=""></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<span class="user-name-wrapper">\n\t\t\t\t\t\t\t<span class="user-info-name">' +
          c(
            typeof (s = null != (s = d(n, "displayName") || (null != e ? d(e, "displayName") : e)) ? s : o) == r
              ? s.call(l, {
                  name: "displayName",
                  hash: {},
                  data: i,
                  loc: { start: { line: 23, column: 36 }, end: { line: 23, column: 51 } }
                })
              : s
          ) +
          '</span>\n\t\t\t\t\t\t\t<span class="anim-caret u--no-transition">\n\t\t\t\t\t\t\t\t<svg class="icon anim-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t\t\t\t\t<svg class="icon anim-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="user-nav-desktop">\n\t\t\t\t\t\t<ul class="user-nav">\n\t\t\t\t\t\t\t<li class="action action-profile" data-test="profile">Profile</li>\n\t\t\t\t\t\t\t<li class="action action-logout">Log Out</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class="user-close"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="user-nav-mobile">\n\t\t\t\t\t\t<nav class="user-nav dropdown nipple nipple-top-right">\n\t\t\t\t\t\t\t<ul class="dropdown-list">\n\t\t\t\t\t\t\t\t<li class="dropdown-list-item action action-profile">Profile</li>\n\t\t\t\t\t\t\t\t<li class="dropdown-list-item action action-logout">Log Out</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n'
        );
      },
      3: function (t, e, n, a, i) {
        return '\n\t\t\t<div class="user login">\n\t\t\t\t<div class="button login-button">\n\t\t\t\t\t<div class="login-title">Log In<span class="slash">/</span>Sign up</div>\n\t\t\t\t\t<div class="login-description">Sync your account</div>\n\t\t\t\t</div>\n\t\t\t</div>\n';
      },
      5: function (t, e, n, a, i) {
        var s,
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
          '\t\t<div data-navitem="' +
          c(
            typeof (s = null != (s = d(n, "id") || (null != e ? d(e, "id") : e)) ? s : o) == r
              ? s.call(l, { name: "id", hash: {}, data: i, loc: { start: { line: 70, column: 21 }, end: { line: 70, column: 27 } } })
              : s
          ) +
          '" class="settings-nav-item" data-test="nav-menu-' +
          c(
            typeof (s = null != (s = d(n, "id") || (null != e ? d(e, "id") : e)) ? s : o) == r
              ? s.call(l, { name: "id", hash: {}, data: i, loc: { start: { line: 70, column: 75 }, end: { line: 70, column: 81 } } })
              : s
          ) +
          '">' +
          c(
            typeof (s = null != (s = d(n, "title") || (null != e ? d(e, "title") : e)) ? s : o) == r
              ? s.call(l, { name: "title", hash: {}, data: i, loc: { start: { line: 70, column: 83 }, end: { line: 70, column: 92 } } })
              : s
          ) +
          "</div>\n"
        );
      },
      7: function (t, e, n, a, i) {
        var s,
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
              ? l.call(o, { name: "id", hash: {}, data: i, loc: { start: { line: 74, column: 21 }, end: { line: 74, column: 27 } } })
              : l
          ) +
          '" class="settings-nav-item secondary ' +
          (null !=
          (s = u(n, "if").call(o, i && u(i, "first"), {
            name: "if",
            hash: {},
            fn: t.program(8, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 74, column: 64 }, end: { line: 74, column: 101 } }
          }))
            ? s
            : "") +
          " " +
          (null !=
          (s = u(n, "if").call(o, null != e ? u(e, "class") : e, {
            name: "if",
            hash: {},
            fn: t.program(10, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 74, column: 102 }, end: { line: 74, column: 131 } }
          }))
            ? s
            : "") +
          '" data-test="nav-menu-' +
          d(
            typeof (l = null != (l = u(n, "id") || (null != e ? u(e, "id") : e)) ? l : r) == c
              ? l.call(o, { name: "id", hash: {}, data: i, loc: { start: { line: 74, column: 153 }, end: { line: 74, column: 159 } } })
              : l
          ) +
          '">' +
          d(
            typeof (l = null != (l = u(n, "title") || (null != e ? u(e, "title") : e)) ? l : r) == c
              ? l.call(o, { name: "title", hash: {}, data: i, loc: { start: { line: 74, column: 161 }, end: { line: 74, column: 170 } } })
              : l
          ) +
          "</div>\n"
        );
      },
      8: function (t, e, n, a, i) {
        return " secondary-first";
      },
      10: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return t.escapeExpression(
          "function" == typeof (s = null != (s = l(n, "class") || (null != e ? l(e, "class") : e)) ? s : t.hooks.helperMissing)
            ? s.call(null != e ? e : t.nullContext || {}, {
                name: "class",
                hash: {},
                data: i,
                loc: { start: { line: 74, column: 115 }, end: { line: 74, column: 124 } }
              })
            : s
        );
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        var s,
          l,
          o = null != e ? e : t.nullContext || {},
          r =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<div class="settings-nav-header">\n\t<div class="settings-nav-chooser">\n\t\t<span class="settings-nav-active">' +
          t.escapeExpression(
            "function" == typeof (l = null != (l = r(n, "active") || (null != e ? r(e, "active") : e)) ? l : t.hooks.helperMissing)
              ? l.call(o, { name: "active", hash: {}, data: i, loc: { start: { line: 3, column: 36 }, end: { line: 3, column: 48 } } })
              : l
          ) +
          '</span><svg class="setting-nav-icon icon icon-angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.751 55.751"><path d="M31.836 43.006c.282-.281.518-.59.725-.912L54.17 20.485a5.403 5.403 0 0 0 0-7.638 5.403 5.403 0 0 0-7.638 0l-18.608 18.61L9.217 12.753A5.4 5.4 0 0 0 0 16.571a5.363 5.363 0 0 0 1.582 3.816l21.703 21.706c.207.323.445.631.729.913a5.367 5.367 0 0 0 3.91 1.572 5.37 5.37 0 0 0 3.912-1.572z"></path></svg>\n\t</div>\n\n\t<div class="settings-nav-user">\n' +
          (null !=
          (s = r(n, "if").call(o, null != e ? r(e, "loggedIn") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, i, 0),
            inverse: t.program(3, i, 0),
            data: i,
            loc: { start: { line: 7, column: 2 }, end: { line: 58, column: 9 } }
          }))
            ? s
            : "") +
          '\t</div>\n\n\t<span class="mobile-close">\n\t\t<span class="icon-wrapper u--mobile-show-bg hide">\n\t\t\t<svg class="icon icon-hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334"><path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"/></svg>\n\t\t</span>\n\t</span>\n</div>\n\n<div class="settings-nav-list" data-test="nav-menu">\n' +
          (null !=
          (s = r(n, "each").call(o, null != (s = null != e ? r(e, "menu") : e) ? r(s, "navItems") : s, {
            name: "each",
            hash: {},
            fn: t.program(5, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 69, column: 1 }, end: { line: 71, column: 10 } }
          }))
            ? s
            : "") +
          "\n" +
          (null !=
          (s = r(n, "each").call(o, null != (s = null != e ? r(e, "menu") : e) ? r(s, "secondaryNavItems") : s, {
            name: "each",
            hash: {},
            fn: t.program(7, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 73, column: 1 }, end: { line: 75, column: 10 } }
          }))
            ? s
            : "") +
          "</div>"
        );
      },
      useData: !0
    })),
    (n.templates.trialBanner = Handlebars.template({
      1: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          " — " +
          t.escapeExpression(
            "function" ==
              typeof (s = null != (s = l(n, "daysRemaining") || (null != e ? l(e, "daysRemaining") : e)) ? s : t.hooks.helperMissing)
              ? s.call(null != e ? e : t.nullContext || {}, {
                  name: "daysRemaining",
                  hash: {},
                  data: i,
                  loc: { start: { line: 2, column: 70 }, end: { line: 2, column: 87 } }
                })
              : s
          )
        );
      },
      3: function (t, e, n, a, i) {
        return "\t\t\t\tPayment method added. Subscription will start at end of trial.\n";
      },
      5: function (t, e, n, a, i) {
        return "\t\t\t\tUpgrade now to beat distraction and reach your goals faster!\n";
      },
      7: function (t, e, n, a, i) {
        return '\t\t<button class="button button-small payment">Manage subscription</button>\n';
      },
      9: function (t, e, n, a, i) {
        return '\t\t<button class="button upgrade">Upgrade</button>\n';
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        var s,
          l = null != e ? e : t.nullContext || {},
          o =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<div class="banner-copy">\n\t<div class="banner-title">Momentum Plus Trial' +
          (null !=
          (s = o(n, "if").call(l, null != e ? o(e, "daysRemaining") : e, {
            name: "if",
            hash: {},
            fn: t.program(1, i, 0),
            inverse: t.noop,
            data: i,
            loc: { start: { line: 2, column: 46 }, end: { line: 2, column: 94 } }
          }))
            ? s
            : "") +
          '</div>\n\t\t<div class="banner-description">\n' +
          (null !=
          (s = o(n, "if").call(l, null != e ? o(e, "hasPaymentMethod") : e, {
            name: "if",
            hash: {},
            fn: t.program(3, i, 0),
            inverse: t.program(5, i, 0),
            data: i,
            loc: { start: { line: 4, column: 3 }, end: { line: 8, column: 10 } }
          }))
            ? s
            : "") +
          '\t\t</div>\n</div>\n<div class="banner-cta">\n' +
          (null !=
          (s = o(n, "if").call(l, null != e ? o(e, "hasPaymentMethod") : e, {
            name: "if",
            hash: {},
            fn: t.program(7, i, 0),
            inverse: t.program(9, i, 0),
            data: i,
            loc: { start: { line: 12, column: 1 }, end: { line: 16, column: 8 } }
          }))
            ? s
            : "") +
          "</div>\n"
        );
      },
      useData: !0
    })),
    (n.templates.upgrade = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
        var s,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '<div class="hero upgrade-hero">\n\t<style type="text/css">\n\t\t.upgrade-hero { padding-bottom: 30px; border-bottom: 1px solid #444; }\n\t\t.upgrade-hero h3 { margin-bottom: 6px; }\n\t\t.upgrade-hero .description { margin-bottom: 15px; opacity: 0.8; }\n\t\t.settings-upgrade .button { padding: 12px 30px; font-size: 95%; font-weight: 500; text-transform: uppercase; }\n\t</style>\n\n\t<h3>Momentum Plus is Here!</h3>\n\t<p class="description" style="margin-bottom: 15px; opacity: 0.8;" ">Level up your focus with customization, integrations, and new widgets.</p>\n\n\t<div class="login-needed">\n\t\t<span class="login-needed-title">Please log in</span>\n\t\t<span class="login-needed-desc">Go to <strong>General → Login</strong>, then come back and try again. Thanks!</span>\n\t</div>\n\n\t<span class="button button-upgrade">Get Momentum Plus</span>\n\t<span class="special">Launch Special!<strong style="margin-left: 5px;"><i class="fa fa-sun-o"></i> 33% Off</strong></span>\n\t<span class="price-line"><span class="price">$1.99/month</span> or <span class="price">$19.99/year</span> (equal to 2 months free!)<br></span>\n</div>\n\n\n\n<div class="feature-list">\n\t<style type="text/css">\n\t\t.feature-list { margin-top: 30px; }\n\t\t.feature-list h4 { margin-bottom: 15px; font-size: 95%; opacity: 0.8; text-transform: uppercase; }\n\t\t.feature-list-icon { width: 40px; margin-top: -2px; float: left; font-size: 120%; text-align: center; }\n\t\t.feature-list-info { margin-left: 40px; margin-bottom: 20px; }\n\t\t.feature-list-info h5 { margin: 0 0 4px; font-size: 92%; opacity: 1; }\n\t\t.feature-list-info p { margin-top: 5px; font-size: 13px; line-height: 135%; opacity: 0.7; }\n\t</style>\n\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Todo Integrations</h5>\n\t\t<p>Momentum Plus connects with your favorite task management services! See, update, and create new tasks from Trello, Todoist, Wunderlist, and Google Tasks.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Custom Background Photos</h5>\n\t\t<p>Light up your day every time you open a new tab. Add your own photos or choose from your favorites or past photos in Momentum.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Personalize Font and Color</h5>\n\t\t<p>Make Momentum your own by choosing a font and color that suits your personality. Incorporate your own style to motivate, inspire, and bring focus to your day.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Custom Quotes</h5>\n\t\t<p>Add your favourite quotes to maximize your inspiration. Set the quote of the day to anything you want, anytime.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Skip Photo/Quote</h5>\n\t\t<p>Not feeling the photo or quote of the day? No problem; a new one is just a refresh away. Cycle between five photos and five quotes per day.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Autofocus Mode</h5>\n\t\t<p>Set your priorities at the start of the day and Momentum will show you the one thing you need to focus on at a time. Check it off, and the next up todo becomes your focus.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Inbox, Today, and Done Lists</h5>\n\t\t<p>Keep your todo list clutter free with the Inbox list. Know exactly what you need to do for the day with the Today list. Follow up on what you’ve completed with the Done list.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Priority Support</h5>\n\t\t<p>Plus subscribers can be assured that their messages, suggestions and requests will be answered promptly by a real human. Your satisfaction is of the utmost importance to us.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Early Access</h5>\n\t\t<p>Get exclusive early access to exciting new Momentum features. Have a say in the direction of the product. Next early release feature: Notes.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Support Momentum</h5>\n\t\t<p>Your subscription helps Momentum  Plus subscriptions help sustain Momentum and enable the addition of more features. Thank you for your support — we are incredibly grateful!</p>\n\t</div>\n</div>\n\n\n\n<div class="cta">\n\t<style type="text/css">\n\t\t.settings-upgrade .cta { margin: 50px 0 70px; padding: 25px 10px 10px; border-top: 1px solid #444; border-bottom: 1px solid #444; text-align: center; }\n\t\t.settings-upgrade .cta .pitch { margin: 0 0 19px; font-size: 125%; line-height: 135%; }\n\t\t.settings-upgrade .cta .button { margin-bottom: 0; }\n\t\t.settings-upgrade .link { margin: 3px 0 0; padding: 8px; display: inline-block; background: none !important; cursor: pointer; opacity: 0.5; text-decoration: none; -webkit-transition: all 0.1s ease; }\n\t\t.settings-upgrade .link:hover { opacity: 0.7; }\n\t</style>\n\n\t<p class="pitch">Upgrade to Momentum Plus today and turn<br>your potential into progress.</p>\n\n\t<div class="login-needed">\n\t\t<span class="login-needed-title">Please log in</span>\n\t\t<span class="login-needed-desc">Go to <strong>General → Login</strong>, then come back and try again. Thanks!</span>\n\t</div>\n\n\t<span class="button button-upgrade">Get Momentum Plus</span><br>\n\t<a href="https://momentumdash.com/plus?' +
          t.escapeExpression(
            "function" ==
              typeof (s = null != (s = l(n, "campaignDetails") || (null != e ? l(e, "campaignDetails") : e)) ? s : t.hooks.helperMissing)
              ? s.call(null != e ? e : t.nullContext || {}, {
                  name: "campaignDetails",
                  hash: {},
                  data: i,
                  loc: { start: { line: 125, column: 40 }, end: { line: 125, column: 59 } }
                })
              : s
          ) +
          '" class="link">Learn more</a>\n</div>\n\n\n\n<div class="faq">\n\t<style type="text/css">\n\t\t.settings-upgrade .faq { margin-top: 0; padding: 0 75px; font-size: 90%; opacity: 1; }\n\t\t.settings-upgrade .faq:first-child { margin-top: 0; }\n\t\t.settings-upgrade .faq:last-child { margin-bottom: 10px !important; }\n\n\t\t.settings-upgrade .faq-question { opacity: 0.9; }\n\t\t.settings-upgrade .faq-answer { opacity: 0.7; }\n\t</style>\n\t<p>\n\t\t<span class="faq-question">What are the available integrations?</span>\n\t\t<span class="faq-answer">Currently we integrate with Wunderlist, Google Tasks, Todoist, and Fitbit. Coming soon: Trello and Asana.\x3c!--Github, Google Analytics, Uservoice, Harvest.--\x3e</span>\n\t</p>\n\n\t<p>\n\t\t<span class="faq-question">I thought Momentum was free?</span>\n\t\t<span class="faq-answer">Momentum Free will always be free. We created Momentum Plus to bring more control and functionality to those who desire it, while still keeping the experience simple and focused.</span>\n\t</p>\n</div>\n'
        );
      },
      useData: !0
    })),
    (n.templates.whatsnew = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, n, a, i) {
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
        d.Analytics.capture("settings panel show", { feature: "settings", name: "about" });
      },
      render: function () {
        var t = { version: d.globals.version };
        return this.$el.html(this.template(t)), this;
      },
      revealUuid: function (t) {
        t.preventDefault(), t.stopPropagation(), this.$el.find(".made").html(localStorage.client_uuid);
      },
      logoDblClicked: function (t) {
        t.stopPropagation(), i(".settings").first().toggleClass("infinispin", d.settingsManager.toggleInfinispin());
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
        this.captureClickEvent(), d.cmd("window.account.open.login", "subscription");
      },
      captureClickEvent: function () {
        d.Analytics.capture("plus action banner click", { location: "settings" });
      }
    })),
    (d.views.Gravatar = Backbone.View.extend({
      className: "avatar",
      tagName: "img",
      render: function () {
        var t = d.utils.getBaseEmail(this.options.email),
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
          d.Analytics.capture("settings panel show", { feature: "settings", name: "help" });
      },
      render: function () {
        return this.$el.html(this.template({})), (this.$quickTips = i(this.$el.find(".quick-tips")[0])), this.showRandomTip(), this;
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
        if (!this.renderedOnce) {
          this.renderedOnce = !0;
          this.$el.html(this.template({})),
            (this.$errorMessage = this.$(".settings-loading-error-message")),
            (this.$retryButton = this.$(".button-retry")),
            (this.$loading = this.$(".settings-loading-loading-message"));
        }
        return this.renderDisplayState(), this;
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
        if ((t.stopPropagation(), this.displayOptions && this.displayOptions.retryInfo)) {
          var e = this.displayOptions.retryInfo,
            n = e.options || {};
          (n.section = e.id), d.commandManager.execute("settings.display", null, n);
        }
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
        return this.visible
          ? (this.paneRendered ||
              (this.$el.html(this.template()),
              (this.$popup = this.$(".app-wrapper")),
              (this.$container = this.$(".settings-view-container")),
              (this.paneRendered = !0)),
            this.cssLoaded &&
              (this.renderedOnce ||
                ((this.navMenu = new n.views.NavMenu({ el: this.$("#nav-menu") })),
                this.listenTo(this.navMenu, "navItemClicked", this.navItemClicked),
                (this.renderedOnce = !0),
                this.visible || this.$el.hide()),
              this.renderBanners(),
              this.renderActivePanel()),
            this)
          : this;
      },
      renderActivePanel: function (t) {
        this.activePanel &&
          this.cssLoaded &&
          this.renderedOnce &&
          (this.activePanel.render(t).$el.detach().appendTo(this.$container),
          (this.$popBody = this.$container.children(":first-child")),
          d.trigger("settings:panel:visible"));
      },
      renderBanners: function () {
        this.renderTrialBannerIfTrialing(), this.renderActionBannerIfRequired(localStorage.getObject("subscriptionSummary"));
        var n = this;
        i.ajax({ type: "GET", url: d.globals.urlRootApi + "user/profile?details=1" }).done(function (t) {
          var e = t && t.subscriptionSummary;
          e && (n.renderTrialBannerIfTrialing(e), n.renderActionBannerIfRequired(e), localStorage.setObject("subscriptionSummary", e));
        });
      },
      renderActionBannerIfRequired: function (t) {
        if (t) {
          var e = this.$(".banner-action");
          !e.length && t.intent && "requires_action" === t.intent.status
            ? this.renderActionBanner()
            : ((t.intent && "requires_action" !== t.intent.status) || !t.intent) && e.remove();
        }
      },
      renderActionBanner: function () {
        this.$(".banner-wrapper").prepend(new n.views.ActionBanner().$el);
      },
      renderTrialBannerIfTrialing: function (t) {
        var e = localStorage.getObject("subscriptionSummary");
        if (e || t) {
          var n = this.$(".banner-trial");
          !n.length && ((e && new Date(e.trialEnd) > new Date()) || (t && new Date(t.trialEnd) > new Date()))
            ? this.renderTrialBanner(e || t)
            : t && !t.trialing
            ? n.remove()
            : t && e && (t.trialEnd !== e.trialEnd || t.hasPaymentMethod !== e.hasPaymentMethod) && (n.remove(), this.renderTrialBanner(t));
        }
      },
      renderTrialBanner: function (t) {
        this.$(".banner-wrapper").append(new n.views.TrialBanner(t).$el);
      },
      navItemClicked: function (t) {
        if (t !== this.activePanelId) {
          d.trigger("colorPicker:destroy");
          var e = d.settingsManager.getNavItem(t);
          e && e.cmd && e.cmdOnly
            ? (this.setActiveNavItem(t),
              d.commandManager.ensureCommandLoaded(
                e.cmd,
                function () {
                  e.hide && d.commandManager.execute("settings.hide"), d.commandManager.execute(e.cmd, e.options);
                },
                function () {},
                function () {}
              ))
            : this.activateSection(t, { source: "nav-" + t });
        }
      },
      toggleVisible: function () {
        this.visible ? this.hideSettings() : this.showSettings();
      },
      showSettings: function (t) {
        var e = this;
        if (!this.cssLoaded && !this.cssLoading) {
          this.cssLoading = !0;
          var n = i('<link type="text/css" href="css/settings.css" rel="stylesheet" />');
          n.on("load", function () {
            (e.cssLoaded = !0), e.render(), e.showSection(t);
          }),
            i("head").append(n);
        }
        (this.visible = !0),
          d.trigger("globalEvent:toggle:bottom-left", this),
          !e.cssLoaded || (this.paneRendered && this.renderedOnce) || this.render(),
          d.trigger("settings:visible"),
          d.trigger("notification:hide"),
          this.cssLoaded && this.showSection(t),
          d.appZStack.add("settings"),
          d.Analytics.capture("app show", { feature: "settings" });
      },
      hideSettings: function (t) {
        if (this.$el.is(":visible")) {
          t && t.preventDefault(),
            (this.visible = !1),
            d.trigger("settings:hidden"),
            d.appZStack.remove("settings"),
            this.$popup.removeClass("show-fade-in");
          var e = this;
          setTimeout(function () {
            e.$popup.removeClass("show"),
              this.activePanel && this.activePanel.close(),
              this.navMenu && this.navMenu.closeUser(),
              d.trigger("colorPicker:destroy");
          }, 200);
        }
      },
      showSection: function (t) {
        t && t.section
          ? this.activateSection(t.section, t)
          : this.activateSection(this.activePanelId && "loading" != this.activePanelId ? this.activePanelId : "general");
      },
      getPanel: function (t) {
        var e = d.settingsManager.getPanelItems();
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
        var e = d.settingsManager.getNavItem(t);
        (e = e || this.getPanel(t)),
          this.$('[data-navitem="' + ((e && e.section) || t) + '"]').addClass("active"),
          e && e.section
            ? i('li[data-navitem="' + e.section + '"]').addClass("active")
            : i('li[data-navitem="' + t + '"]').addClass("active");
      },
      activateSection: function (t, e) {
        var n = this;
        if (t) {
          e && e.nav ? this.setActiveNavItem(e.nav) : this.setActiveNavItem(t);
          var a = d.settingsManager.getNavItem(t);
          a = a || this.getPanel(t);
          var i = null,
            s = !1,
            l = !1,
            o = !1;
          if (a && a.cmd)
            d.commandManager.ensureCommandLoaded(
              a.cmd,
              function () {
                (s = !0), (i = d.commandManager.execute(a.cmd, e)), n.setActivePanel(i, t, e), n.renderActivePanel(e);
              },
              function () {
                l ||
                  s ||
                  ((l = !0),
                  setTimeout(function () {
                    o || s || n.showLoadingPanel();
                  }, 400));
              },
              function () {
                (o = l = !0), n.showLoadingPanel({ error: "We were unable to load settings.", retryInfo: { id: t, options: e } });
              }
            );
          else {
            if (!(i = _.findWhere(this.subViews, { panelid: t }))) {
              var r = t.charAt(0).toUpperCase() + t.slice(1),
                c = d.views.settings.panels[r];
              c && (i = new c(e));
            }
            this.setActivePanel(i, t, e), this.renderActivePanel(e);
          }
        }
      }
    })),
    (n.views.NavMenu = Backbone.View.extend({
      template: n.templates.navmenu,
      analytics: new d.Analytics({ feature: "login" }),
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
        this.listenTo(d.settingsManager, "navItemsChanged", this.render),
          this.listenTo(d.models.customization, "change:displayname", this.onChangeDisplayname),
          this.listenTo(d, "settings:hidden", this.closeUser),
          this.listenTo(d, "globalEvent:click", this.onGlobalClick),
          this.render(),
          this.$el.closest(".app").on("click", function (t) {
            var e = n.$user[0];
            e && !i.contains(e, t.target) && t.target !== e && n.closeUser();
          });
      },
      render: function () {
        var t = localStorage.getItem("email"),
          e = d.isLoggedIn(),
          n = {
            displayName: d.models.customization.get("displayname"),
            email: d.utils.email,
            loggedIn: e,
            menu: d.settingsManager.getNavItems(),
            active: "General"
          };
        this.$el.html(this.template(n)),
          (this.$user = this.$(".user-container")),
          (this.$userInfoName = this.$(".user-info-name")),
          (this.$userHidden = this.$(".user-hidden")),
          (this.$navActive = this.$(".settings-nav-active")),
          (this.$navList = this.$(".settings-nav-list")),
          e && this.renderGravatar(t),
          d.conditionalFeatures.featureEnabled("plus") && !d.conditionalFeatures.featureEnabled("team") && this.$user.addClass("has-plus");
        var a = this.$el.clone();
        return (
          a.css("visibility", "hidden"),
          a.css("position", "absolute"),
          document.body.appendChild(a[0]),
          this.$user.css("transform", "translateY(" + a.find(".user-hidden").height() + "px)"),
          a.remove(),
          this
        );
      },
      renderGravatar: function (t) {
        (this.$userAvatarImg = this.$(".user-avatar img")), (this.$userAvatarHidden = this.$(".user-avatar-hidden"));
        var e = new d.views.Gravatar({ email: t, size: 50 });
        this.$userAvatarHidden.html(e.render().$el);
        var n = this,
          a = n.$(".user-avatar-hidden img");
        function i() {
          n.$userAvatarImg.attr("src", a.attr("src"));
        }
        a[0].complete ? i() : a.once("load", i);
      },
      onClickNavItem: function (t) {
        var e = i(t.delegatedTarget).data("navitem");
        d.settingsManager.getNavItem(e).cmdOnly || this.$navActive.text(t.delegatedTarget.textContent),
          this.toggleChooser(),
          this.trigger("navItemClicked", e);
      },
      toggleUserPanel: function () {
        i(".settings-app").removeClass("nav-active"),
          this.$user.removeClass("u--no-transition"),
          this.$(".anim-caret").removeClass("u--no-transition"),
          this.$user.toggleClass("open");
      },
      profileClicked: function (t) {
        var e = this;
        d.Analytics.capture("profile link click", { feature: "profile" }),
          t.preventDefault(),
          t.stopImmediatePropagation(),
          d.utils.isSafari()
            ? d.cmd("modal.open", "SAFARI_ACCOUNT")
            : (i(t.delegatedTarget).html("Launching…"),
              d.commandManager.execute("window.account.open.login", {
                path: "/",
                callback: function () {
                  i(t.delegatedTarget).html("Profile"), e.closeUser();
                }
              }));
      },
      logoutClicked: function (t) {
        t.preventDefault(),
          t.stopImmediatePropagation(),
          i(".action-logout").addClass("action-logout-disabled").text("Logging out…"),
          this.analytics.capture("log out click"),
          d.commandManager.execute("logout");
      },
      closeUser: function () {
        this.$user.css("transform", "translateY(" + this.$userHidden.height() + "px)").removeClass("open");
      },
      loginClicked: function (t) {
        t.preventDefault(),
          t.stopPropagation(),
          this.analytics.capture("log in click"),
          d.commandManager.execute("settings.hide"),
          d.commandManager.execute("account.login");
      },
      onChangeDisplayname: function () {
        this.$userInfoName.text(d.models.customization.get("displayname"));
      },
      toggleChooser: function () {
        i(".settings-app").toggleClass("nav-active");
      },
      onGlobalClick: function (t) {
        var e = this.$(".settings-nav-chooser");
        e.length && i(".settings-app").hasClass("nav-active") && !e.contains(t.target) && this.toggleChooser();
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
        if (!t) return "";
        var e = new Date(t) - new Date(),
          n = Math.floor(e / 864e5);
        return n ? n + " day" + (1 === n ? "" : "s") + " remaining" : "last day of trial";
      },
      openUpgrade: function () {
        this.captureClickEvent(!1), d.cmd("window.account.open.login", "subscription?add_card=true");
      },
      openManagePayment: function () {
        this.captureClickEvent(!0), d.cmd("window.account.open.login", "subscription");
      },
      captureClickEvent: function (t) {
        d.Analytics.capture("plus trial banner click", { location: "settings", has_payment_method: t });
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
          (this.$whatsnew = i(this.$el.find(".whatsnew-body")[0])),
          this.$whatsnew.html('<span class="loading"><i class="loading-icon"></i>Loading…</span>'),
          this.fetchLatestWhatsNew(),
          this
        );
      },
      fetchLatestWhatsNew: function () {
        var e = this;
        i.ajax({ type: "GET", url: d.globals.urlRootApi + "settings/whatsnew" })
          .done(function (t) {
            t.html && e.$whatsnew.html(t.html);
          })
          .fail(function () {
            e.$el.html(e.template({}));
          });
      }
    })),
    (n.commands.SettingsColorPicker = d.models.Command.extend({
      defaults: { id: "settings.color.picker" },
      execute: function (t) {
        d.colorPicker
          ? d.trigger("colorPicker:mount", t)
          : d.widgetManager.loadWidget("colorPicker").then(function () {
              d.trigger("colorPicker:mount", t);
            });
      }
    })),
    (n.commands.SettingsPanelHelp = d.models.Command.extend({
      defaults: { id: "settings.panels.help" },
      execute: function () {
        return n.styleLoaded || ((n.styleLoaded = !0), n.styles.style()), new n.views.Help();
      }
    })),
    (n.commands.SettingsPanelReleaseNotes = d.models.Command.extend({
      defaults: { id: "settings.panels.releaseNotes" },
      execute: function () {
        window.open("https://moda.sh/release-notes");
      }
    })),
    (n.commands.SettingsPanelAbout = d.models.Command.extend({
      defaults: { id: "settings.panels.about" },
      execute: function () {
        return n.styleLoaded || ((n.styleLoaded = !0), n.styles.style()), new n.views.About();
      }
    })),
    (n.commands.TakeATour = d.models.Command.extend({
      defaults: { id: "settings.takeATour" },
      execute: function () {
        d.Analytics.capture("onboarding take a tour click", { feature: "settings" }),
          d.commandManager.execute("settings.toggle"),
          d.trigger(
            "modal:show",
            d.conditionalFeatures.featureEnabled("plus") ? d.modals.definitions.plusIntroduction : d.modals.definitions.introduction,
            0
          );
      }
    })),
    (n.commands.JoinWorkshop = d.models.Command.extend({
      defaults: { id: "settings.joinWorkshop" },
      execute: function () {
        d.Analytics.capture("settings join a live session click", { feature: "settings" }), window.open("https://lu.ma/momentum");
      }
    })),
    (n.commands.SettingsInitialize = d.models.Command.extend({
      defaults: { id: "settings.initialize" },
      execute: function (t) {
        return (
          n.views.mainSettings || (n.views.mainSettings = new n.views.MainSettings()),
          t.prepend(n.views.mainSettings.$el),
          t.toggleClass("infinispin", d.settingsManager.infinispin()),
          n.views.mainSettings
        );
      }
    })),
    (n.commands.SettingsDisplay = d.models.Command.extend({
      defaults: { id: "settings.display" },
      execute: function (t, e) {
        d.views.settingsPane.initializeSettings().then(function () {
          n.views.mainSettings && n.views.mainSettings.showSettings(e);
        });
      }
    })),
    (n.commands.SettingsDisplayUpgrade = d.models.Command.extend({
      defaults: { id: "settings.display.upgrade" },
      execute: function (t, e) {
        var n = "https://momentumdash.com/plus?utm_source=extension&utm_medium=organic";
        e && e.source
          ? (n += "&utm_campaign=" + encodeURIComponent(e.source))
          : !e && t && t.source && (n += "&utm_campaign=" + encodeURIComponent(t.source)),
          d.commandManager.execute("window.open", null, { url: n });
      }
    })),
    (n.commands.SettingsDisplayUpgradePanel = d.models.Command.extend({
      defaults: { id: "settings.display.upgrade.panel" },
      execute: function (t, e) {
        n.views.mainSettings && (((e = e || {}).section = "upgrade"), n.views.mainSettings.showSettings(e));
      }
    })),
    (n.commands.SettingsToggle = d.models.Command.extend({
      defaults: { id: "settings.toggle" },
      execute: function (t, e) {
        e && e.section
          ? (n.views.mainSettings.toggleVisible(), n.views.mainSettings.visible && n.views.mainSettings.showSettings(e))
          : n.views.mainSettings && n.views.mainSettings.toggleVisible();
      }
    })),
    (n.commands.SettingsHide = d.models.Command.extend({
      defaults: { id: "settings.hide" },
      execute: function () {
        n.views.mainSettings && n.views.mainSettings.hideSettings();
      }
    })),
    (n.commands.SettingEnable = d.models.Command.extend({
      defaults: { id: "setting.enable" },
      execute: function (t, e) {
        if (e && e.name) {
          var n = {};
          (n[e.name] = !!e.value), d.models.customization.set(n);
        }
      }
    })),
    (n.commands.SettingsCacheUpgradeCopy = d.models.Command.extend({
      defaults: { id: "settings.cache.upgradecopy" },
      fetching: !1,
      fetched: !1,
      execute: function (t, e) {
        var n = this;
        if ((t || !d.conditionalFeatures.featureEnabled("plus")) && (t || (!n.fetching && !n.fetched))) {
          n.fetching = !0;
          var a = d.globals.urlRootApi + "settings/upgradecopy";
          e && t
            ? (a = a + "?refresh=1&src=" + encodeURIComponent(e))
            : e
            ? (a = a + "?src=" + encodeURIComponent(e))
            : t && (a += "?refresh=1"),
            i
              .ajax({ type: "GET", url: a })
              .done(function (t) {
                (n.fetching = !1),
                  t &&
                    ((n.fetched = !0),
                    localStorage.setItem("cachedUpgradeCopy", JSON.stringify(t)),
                    d.trigger("settings:upgradeCopyChanged"));
              })
              .fail(function () {
                (n.fetched = !1), (n.fetching = !1);
              }),
            setTimeout(function () {
              n.fetching && (n.fetching = !1);
            }, 1e4);
        }
      }
    })),
    (n.commands.SettingsRerender = d.models.Command.extend({
      defaults: { id: "settings.rerender" },
      execute: function () {
        n.views.mainSettings.hideSettings(),
          n.views.mainSettings.unbind(),
          n.views.mainSettings.remove(),
          (n.views.mainSettings = d.widgetManager.handover("settings", n.views.MainSettings, { region: "bottom-left", order: "prepend" })),
          n.views.mainSettings.initialize(),
          n.views.mainSettings.render();
      }
    })),
    (n.views.mainSettings = d.widgetManager.handover("settings", n.views.MainSettings, { region: "bottom-left", order: "prepend" })),
    n
  );
};
m.addinManager && m.addinManager.registerAddinFn("1d872cf4-953a-4743-8f5e-6785bba4bd19", fn_addin);
