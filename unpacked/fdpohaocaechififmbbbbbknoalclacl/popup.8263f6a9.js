(() => {
  function e(e, t, r, o) {
    Object.defineProperty(e, t, { get: r, set: o, enumerable: !0, configurable: !0 });
  }
  var t =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    r = {},
    o = {},
    n = t.parcelRequire60cc;
  null == n &&
    (((n = function (e) {
      if (e in r) return r[e].exports;
      if (e in o) {
        var t = o[e];
        delete o[e];
        var n = { id: e, exports: {} };
        return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
      }
      var s = new Error("Cannot find module '" + e + "'");
      throw ((s.code = "MODULE_NOT_FOUND"), s);
    }).register = function (e, t) {
      o[e] = t;
    }),
    (t.parcelRequire60cc = n)),
    n.register("jQEAy", function (t, r) {
      e(t.exports, "ERROR_TYPE", () => i),
        e(t.exports, "getZoom", () => c),
        e(t.exports, "captureVisibleTab", () => d),
        e(t.exports, "isCaptureVisibleTabQuotaError", () => h),
        e(t.exports, "executeScript", () => m),
        e(t.exports, "isExecuteScriptChromeError", () => u),
        e(t.exports, "sendMessage", () => f),
        e(t.exports, "getCurrentTab", () => p),
        e(t.exports, "openInTabs", () => w);
      var o = n("8rN6d"),
        s = n("8bPtr"),
        a = n("3k2hL");
      const i = "ChromeTabsError",
        l = (0, a.genLastErrorFmt)(i),
        c = (e) =>
          new Promise((t, r) => {
            chrome.tabs.getZoom(e, (e) => {
              const o = chrome.runtime.lastError;
              return o ? r(l(o, "getZoom")) : t(e);
            });
          }),
        d = (e, t) =>
          new Promise((r, o) => {
            chrome.tabs.captureVisibleTab(e, t, (e) => {
              const t = chrome.runtime.lastError;
              return t ? o(l(t, "captureVisibleTab")) : r(e);
            });
          }),
        h = (e) =>
          e &&
          "object" == typeof e &&
          e.name === i &&
          "captureVisibleTab" === e.via &&
          e.message &&
          -1 !== e.message.indexOf("MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND"),
        m = (e, t) =>
          new Promise((r, o) => {
            chrome.tabs.executeScript(e, t, (e) => {
              const t = chrome.runtime.lastError;
              return t ? o(l(t, "executeScript")) : r(e);
            });
          }),
        u = (e) =>
          e &&
          "object" == typeof e &&
          e.name === i &&
          "executeScript" === e.via &&
          e.message &&
          (["Extension manifest must request permission", "The tab was closed.", "The frame was removed."].some(
            (t) => -1 !== e.message.indexOf(t)
          ) ||
            -1 !== e.message.indexOf('"chrome-error://')),
        f = (e, t, r) =>
          new Promise((o, n) => {
            chrome.tabs.sendMessage(e, t, r, (e) => {
              const t = chrome.runtime.lastError;
              return t ? n(l(t, "sendMessage")) : o(e);
            });
          }),
        p = () => {
          return ((e = { active: !0, currentWindow: !0 }),
          new Promise((t, r) => {
            chrome.tabs.query(e, (e) => {
              const o = chrome.runtime.lastError;
              return o ? r(l(o, "query")) : t(e);
            });
          })).then((e) => e[0]);
          var e;
        },
        w =
          ((g = (0, o.default)(function (e, t) {
            var r, o, n;
            return (0, s.__generator)(this, function (s) {
              return (
                (r = void 0),
                (o = t.length),
                [
                  2,
                  (n = (s) => {
                    if (s >= t.length) return t;
                    let a = t[s],
                      i = s === o - 1;
                    return e.incognito && 0 === s
                      ? ((c = { url: a, incognito: !1, focused: i }),
                        new Promise((e, t) => {
                          chrome.windows.create(c, (r) => {
                            const o = chrome.runtime.lastError;
                            return o ? t(l(o, "windowsCreate")) : e(r);
                          });
                        })).then((e) => ((r = e.id), n(s + 1)))
                      : ((e) =>
                          new Promise((t, r) => {
                            chrome.tabs.create(e, (e) => {
                              const o = chrome.runtime.lastError;
                              return o ? r(l(o, "create")) : t(e);
                            });
                          }))({ url: a, active: i, windowId: r, openerTabId: e.id, index: (e.incognito ? 0 : e.index) + 1 + s }).then((e) =>
                          n(s + 1)
                        );
                    var c;
                  })(0)
                ]
              );
            });
          })),
          function (e, t) {
            return g.apply(this, arguments);
          });
      var g;
    });
  var s = n("8rN6d"),
    a = n("ff4Ef"),
    i = n("8bPtr"),
    l = n("e0Kwl"),
    c = n("8DwkQ"),
    d = n("eW2D8"),
    h = n("95ETH"),
    m = n("jQEAy"),
    u = n("eC8rE"),
    f = n("nKr4g"),
    p = n("5Xemj"),
    w = n("gnAcz");
  (m = n("jQEAy")), (c = n("8DwkQ")), (f = n("nKr4g"));
  var g = {
      [w.ERROR_INCOGNITO_NETWORK_NAME]: {
        title: "Network error downloading file",
        body: "You might be experiencing a bug that was introduced to the Chrome browser in v68. In the meantime, you can try either of the following.\n\n1. right-click and “Save image as” or just click and drag the image to your desktop (if you are not using auto-download)\n\n2. disable “Allow in incognito” from the Chrome settings page for this extension (you can return to this capture from the history view within this extension):",
        buttons: () => {
          let e = `${c.CUR_BROWSER_INFO.browser_protocol}extensions?id=${chrome.runtime.id}`,
            t = document.createElement("a");
          return (
            (t.href = "#"),
            (t.innerText = e),
            Object.assign(t.style, { display: "block", fontWeight: "bold", margin: "1em 0" }),
            f.$.on(t, "click", (t) => {
              t.preventDefault(), (0, m.getCurrentTab)().then((t) => (0, m.openInTabs)(t, [e]));
            }),
            [t]
          );
        }
      }
    },
    b = n("erNYL");
  var x = n("ceb36"),
    _ = n("Bqk7F");
  var y = (function () {
      let e = `chrome-extension://${chrome.runtime.id}`,
        t = [
          {
            title: "Extensions gallery",
            explanation: "Chrome policy does not allow extensions to access the webstore extensions gallery because of security risks.",
            starts_with: "https://chrome.google.com/webstore/",
            examples: ["https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl?hl=en-US"],
            error_message: "The extensions gallery cannot be scripted."
          },
          {
            title: "Chrome URL",
            explanation: "Chrome policy does not allow extensions to access URLs that start with “chrome://” because of security risks.",
            starts_with: "chrome://",
            examples: ["chrome://extensions/", "chrome://downloads/", "chrome://apps/"],
            error_message: "Cannot access a chrome:// URL"
          },
          {
            title: "Own extension",
            explanation:
              "A recent release of Chrome has removed the ability from extensions to take screenshots of themselves. This is under review and may change. Stay tuned!",
            starts_with: e,
            examples: [e],
            error_message: "Issue screenshotting own chrome URL"
          },
          {
            title: "Another extension",
            explanation: "Chrome policy does not allow extensions to access to other extensions because of security risks.",
            starts_with: "chrome-extension://",
            examples: ["chrome-extension://poompllcagmhgifahnbpaofdeikafkan/index.html"],
            error_message: "Cannot access a chrome-extension:// URL of different extension"
          },
          {
            title: "Extension file",
            explanation: "Chrome policy does not allow this extension to capture the current file. Is it already an image?",
            starts_with: "filesystem:chrome-extension://",
            examples: [
              "filesystem:chrome-extension://poompllcagmhgifahnbpaofdeikafkan/temporary/screencapture-developer-chrome-extensions-manifest-web_accessible_resources-1517807774768.png"
            ],
            error_message: "Cannot access contents of the page. Extension manifest must request permission to access the respective host."
          },
          {
            title: "Microsoft Add-ons Store",
            explanation: "The browser does not allow extensions to access the add-on store because of security risks.",
            starts_with: "https://microsoftedge.microsoft.com/",
            examples: ["https://microsoftedge.microsoft.com/addons/detail/grammarly-for-microsoft-e/cnlefmmeadmemmdciolhbnfeacpdfbkd"],
            error_message: "The extensions gallery cannot be scripted."
          },
          {
            title: "Edge URL",
            explanation: "The browser does not allow extensions to access URLs that start with edge://” because of security risks.",
            starts_with: "edge://",
            examples: ["edge://extensions", "edge://downloads", "edge://apps"],
            error_message: "Cannot access an edge:// URL"
          },
          {
            title: "Another extension",
            explanation: "The browser does not allow extensions to access to other extensions because of security risks.",
            starts_with: "extension://",
            examples: ["extension://poompllcagmhgifahnbpaofdeikafkan/index.html"],
            error_message: "Cannot access an extension:// URL of different extension"
          },
          {
            title: "Extension file",
            explanation: "The browser is not allowing this extension to capture the current file. Is it already an image?",
            starts_with: "filesystem:extension://",
            examples: [
              "filesystem:extension://poompllcagmhgifahnbpaofdeikafkan/temporary/screencapture-developer-chrome-extensions-manifest-web_accessible_resources-1517807774768.png"
            ],
            error_message: "Cannot access contents of the page. Extension manifest must request permission to access the respective host."
          }
        ];
      return {
        URLS: t,
        getMatch: function (e) {
          return t.find((t) => e.startsWith(t.starts_with));
        },
        isOwnUrl: function (t) {
          return t.startsWith(e);
        }
      };
    })(),
    E = n("2z2pA"),
    $ = n("6pLLc"),
    v = n("h1Khz"),
    T = n("8ioZ3"),
    C = n("kOtTY");
  let R = !1,
    k = [];
  function O(e) {
    return new Promise((t, r) => {
      if (R) return t();
      e && e(), k.push(t);
    });
  }
  window.addEventListener("load", function () {
    window.setTimeout(() => {
      (R = !0), k.forEach((e) => e());
    }, 100);
  });
  const S = "production",
    L = parseInt("1689275169", 10) || 0,
    U = "ExpiredBetaError";
  Array.prototype.slice.call(document.querySelectorAll("a[data-href]")).forEach((e) => {
    e.href = e.dataset.href;
  }),
    (0, p.updateHtml)(),
    window.setTimeout(() => {
      x.default.pageview();
    }, 0);
  let A,
    I = null,
    N = null;
  function P() {
    return (P = (0, s.default)(function (e) {
      var t, r, o, n, s;
      return (0, i.__generator)(this, function (a) {
        switch (a.label) {
          case 0:
            return [4, (0, C.fullServiceDownload)(e, !0)];
          case 1:
            if (((t = a.sent()), (r = t.hasPerms), (o = t.results), (n = t.failCount), r)) return [3, 2];
            throw (((s = new Error("Does not have permission.")).name = "ChromePermissions"), s);
          case 2:
            if (!n) return [3, 3];
            throw o.find((e) => !1 === e.success).error;
          case 3:
            return [4, (0, $.sleep)(2e3)];
          case 4:
            a.sent(), window.close(), (a.label = 5);
          case 5:
            return [2];
        }
      });
    })).apply(this, arguments);
  }
  function D(e) {
    let t = "[_errorHandler] ";
    if (e) {
      let r = ["name", "via", "message"]
        .map((t) => (e[t] ? `${t} = ${e[t]}` : null))
        .filter((e) => e)
        .join("\n");
      r && (t += "\n" + r + "\n");
    }
    E.default.error(t),
      e && e.stack && (0, E.default)(e.stack),
      O(() => f.$.hidden("loading"))
        .then(() => {
          f.$.show("close");
          const t = j(),
            r =
              e && e.name === d.ERROR_TYPES.CHROME_TABS && ("executeScript" === e.via || ("captureVisibleTab" === e.via && y.isOwnUrl(t))),
            o = e && e.name === U;
          if (r) {
            let r = y.getMatch(t),
              o = (0, f.$)("invalid-desc-detail");
            if (!o.dataset.default) {
              const e = (0, p.tr)(
                "The browser does not allow access to some URLs for security reasons. This includes the web store gallery, other extensions, and $browser_protocol$ URLs. The current page appears to be a restricted URL.",
                null,
                [c.CUR_BROWSER_INFO.browser_protocol],
                { browser_protocol: { content: "$1", example: "chrome://" } }
              );
              o.dataset.default = e;
            }
            return (
              (o.textContent = r ? r.explanation : o.dataset.default),
              ((n = e), B("invalid-link", n)).then(() => {
                r || M(), f.$.show("invalid");
              })
            );
          }
          if (o) {
            const e = (0, f.$)("expired-beta");
            e.textContent =
              "This test version has expired. Please reach out to get an update or switch over to the proper extension in the";
            const t = document.createElement("a");
            Object.assign(t, {
              targt: "_blank",
              rel: "noopener noreferrer",
              href: c.CUR_BROWSER_INFO.store_url,
              textContent: c.CUR_BROWSER_INFO.store
            }),
              e.textContent.appendChild(t),
              f.$.show("expired-beta");
          } else {
            if (!e || !g[e.name])
              return W(e).then(() => {
                f.$.show("uh-oh");
              });
            {
              let t = g[e.name];
              ((0, f.$)("generic-error-title").innerText = t.title), ((0, f.$)("generic-error-body").innerText = t.body);
              let r = (0, f.$)("generic-error-buttons");
              f.$.empty(r),
                t.buttons &&
                  t.buttons().forEach((e) => {
                    r.appendChild(e);
                  }),
                f.$.show("generic-error");
            }
          }
          var n;
        })
        .then(() => f.$.hide("loading"));
  }
  function F(e) {
    0 === e && f.$.show("loading");
    let t = Math.floor(100 * e, 10);
    ((0, f.$)("bar").style.width = t + "%"), ((0, f.$)("dots").style.width = 100 - t + 2 + "%");
  }
  function W(e) {
    return B("report-link", e);
  }
  function B(e, t) {
    return (0, v.getReportUrlAsync)({ url: j(), error: t })
      .then((t) => ((0, f.$)(e).setAttribute("href", t), t))
      .catch((e) => E.default.error(e));
  }
  function M() {
    (0, f.$)("invalid").classList.add("show-desc");
  }
  function j() {
    return A ? A.url : window.location.href;
  }
  if ("?test" === window.location.search)
    (window._progress = F),
      F(0.18),
      (0, C.asArray)(document.querySelectorAll("#wrap > div")).forEach((e) => {
        e.style.display = "block";
      }),
      [document.documentElement, document.body, document.getElementById("wrap")].forEach((e) => {
        e.style.overflow = "auto";
      });
  else
    window.addEventListener("load", function () {
      f.$.on((0, f.$)("invalid-desc-a"), "click", (e) => {
        e.preventDefault(), M();
      }),
        f.$.on((0, f.$)("close"), "click", (e) => {
          e.preventDefault(), window.close();
        }),
        f.$.findClass("fp-btn", (0, f.$)("frame-perms")).forEach((e) => {
          let t = e.dataset.action;
          f.$.on(e, "click", (e) => {
            b.trigger("clicked", { action: t }), f.$.hide("frame-perms"), f.$.show("loading");
          });
        }),
        b.on("needFramePermsClick", (e) => {
          let t = "frame-perms-iframe",
            r = "frame-perms-frame",
            o = (0, a.default)("iframe" === e.tagName ? [t, r] : [r, t], 2),
            n = o[0],
            s = o[1];
          f.$.hide(s), f.$.show(n, "inline"), f.$.hide("loading"), f.$.show("frame-perms");
          let i = document.querySelector("#frame-perms .button-primary");
          i && i.focus();
        });
      let e = `${c.CUR_BROWSER_INFO.browser_protocol}extensions/?id=${chrome.runtime.id}`;
      f.$.findClass("ext-link", (0, f.$)("file-perms")).forEach((t) => {
        f.$.on(t, "click", () => {
          let t = { url: e };
          A && !A.incognito && (t.index = A.index + 1), chrome.tabs.create(t);
        });
      }),
        b.on("needFilePermsClick", () => {
          f.$.hide("loading"), f.$.show("file-perms");
          let e = document.querySelector("#file-perms .button-primary");
          e && e.focus();
        }),
        m
          .getCurrentTab()
          .then((e) => {
            if (((A = e), "beta" === S && L)) {
              const e = l.DateTime.fromSeconds(L);
              if (l.DateTime.now().diff(e, "days").days > 90) {
                const e = new Error("This build is no longer valid.");
                throw ((e.name = U), e);
              }
            }
          })
          .then(
            (0, s.default)(function () {
              var e;
              return (0, i.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return t.trys.push([0, 2, , 3]), [4, m.getZoom(A.id)];
                  case 1:
                    return (N = t.sent()), [3, 3];
                  case 2:
                    return (e = t.sent()), console.error("Error getting zoom", e), [3, 3];
                  case 3:
                    return [4, T.default.load()];
                  case 4:
                    return (I = t.sent()), I.auto_dl2 ? [4, h.contains(h.PERMISSIONS.DOWNLOADS)] : [3, 7];
                  case 5:
                    return t.sent() ? [3, 7] : ((I.auto_dl2 = !1), (I.auto_dl_was_disabled = !0), [4, T.default.remove("auto_dl2")]);
                  case 6:
                    t.sent(), (t.label = 7);
                  case 7:
                    return [2];
                }
              });
            })
          )
          .then(() => W())
          .then(() => {
            I.auto_dl2
              ? O().then(() => {
                  f.$.show("auto-dl");
                })
              : I.auto_dl_was_disabled &&
                O().then(() => {
                  f.$.show("auto-dl-was-disabled");
                }),
              (function (e) {
                let t = f.$.findClass("frame_persist-toggle", (0, f.$)("frame-perms"))[0],
                  r = t.getElementsByClassName("frame_persist-input")[0],
                  o = t.getElementsByClassName("frame_persist-text")[0],
                  n = "frame_persist",
                  s = T.default.getField(n);
                (r.checked = e[n]),
                  (o.innerText = s.help),
                  f.$.on(r, "change", function (e) {
                    let t = e.target.checked;
                    T.default
                      .set(n, t)
                      .then(() => {
                        I[n] = t;
                      })
                      .catch((r) => {
                        (e.target.checked = !t), D(r);
                      });
                  });
              })(I);
          })
          .then(() => {
            let e = A.url,
              t = "filesystem:" + chrome.extension.getURL("/persistent/");
            if (e.startsWith(t) && [".jpg", ".png"].some((t) => e.endsWith(t))) return u.Capture.findSrc(e.split("/").pop());
          })
          .then((e) => {
            if (e) return e;
            const t = A.url || "about:blank",
              r = A.title,
              o = (0, _.getImageFormat)(I.fmt);
            I.fmt_details = o;
            const n = (0, C.asFilename)(t, o.ext);
            return d
              .captureToFiles(
                A,
                n,
                F,
                (e) => {
                  f.$.show("split-image"),
                    ((0, f.$)("screenshot-count").innerText = e),
                    e > 10 &&
                      window.setTimeout(() => {
                        f.$.show("split-image-extra");
                      }, 2e3);
                },
                I
              )
              .then((e) => {
                let o = e.files,
                  n = e.scaleMultiplier,
                  s = e.metadata;
                if (!o || !o.length) {
                  let e = new Error("No files passed to `displayCaptures` " + o);
                  throw ((e.name = "NoFiles"), e);
                }
                return (
                  (s = s || {}),
                  1 !== N && (s.z = N),
                  (s.ww && s.ww === A.width) || (s.tw = A.width),
                  (s.wh && s.wh === A.height) || (s.th = A.height),
                  d.filesToRecord(t, r, I.fmt, n, o, s)
                );
              });
          })
          .then((e) => (0, $.sleep)(I.auto_dl_was_disabled ? 2e3 : 0).then(() => e))
          .then((e) =>
            I && I.auto_dl2
              ? (function (e) {
                  return P.apply(this, arguments);
                })(e.fullPaths)
              : m.openInTabs(A, [e.displayURL])
          )
          .catch((e) => D(e));
    });
})();
//# sourceMappingURL=popup.8263f6a9.js.map
