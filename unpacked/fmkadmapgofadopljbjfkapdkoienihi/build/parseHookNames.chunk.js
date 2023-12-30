(self.webpackChunkreact_devtools_extensions = self.webpackChunkreact_devtools_extensions || []).push([
  [641],
  {
    2648: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          parseHookNames: () => parseHookNames,
          parseSourceAndMetadata: () => parseSourceAndMetadata,
          purgeCachedMetadata: () => d
        });
      var n = r(8057),
        i = r(474),
        s = r.n(i),
        a = r(3303),
        o = r(2078);
      function sourceMapIncludesSource(e, t) {
        if (null == t) return !1;
        if (void 0 === e.mappings) {
          return e.sections.some((e) => sourceMapIncludesSource(e.map, t));
        }
        return e.sources.some((e) => "Inline Babel script" === e || t.endsWith(e));
      }
      var l = r(9052).lW;
      const u = { cache: "force-cache" },
        c = 1e8;
      async function loadSourceAndMetadata(e, t) {
        return (0, n.WV)("loadSourceAndMetadata()", async () => {
          const r = (0, n.Y7)("initializeHookSourceAndMetadata", () =>
            (function (e) {
              const t = new Map();
              for (let r = 0; r < e.length; r++) {
                const n = e[r].hookSource;
                if (null == n) throw Error("Hook source code location not found.");
                const i = (0, o.qG)(n);
                if (!t.has(i)) {
                  const e = {
                    hookSource: n,
                    runtimeSourceCode: null,
                    runtimeSourceURL: n.fileName,
                    sourceMapJSON: null,
                    sourceMapURL: null
                  };
                  t.set(i, e);
                }
              }
              return t;
            })(e)
          );
          return (
            await (0, n.WV)("loadSourceFiles()", () =>
              (function (e, t) {
                const r = new Map(),
                  i = [];
                return (
                  e.forEach((e) => {
                    const { runtimeSourceURL: s } = e;
                    let o = fetchFile;
                    null != t && (o = (e) => (0, n.WV)(`fetchFileWithCaching("${e}")`, () => t(e)));
                    const l =
                      r.get(s) ||
                      o(s).then((e) => {
                        if (e.length > c) throw Error("Source code too large to parse");
                        return (
                          a.p && (console.groupCollapsed(`loadSourceFiles() runtimeSourceURL "${s}"`), console.log(e), console.groupEnd()),
                          e
                        );
                      });
                    r.set(s, l),
                      i.push(
                        l.then((t) => {
                          e.runtimeSourceCode = t;
                        })
                      );
                  }),
                  Promise.all(i)
                );
              })(r, t)
            ),
            await (0, n.WV)("extractAndLoadSourceMapJSON()", () =>
              (function (e) {
                const t = new Map();
                a.p && console.log("extractAndLoadSourceMapJSON() load", e.size, "source maps");
                const r = [];
                return (
                  e.forEach((e) => {
                    const i = / ?sourceMappingURL=([^\s'"]+)/gm,
                      s = e.runtimeSourceCode;
                    let o = (0, n.Y7)("sourceMapRegex.exec(runtimeSourceCode)", () => i.exec(s));
                    if (null == o) a.p && console.log("extractAndLoadSourceMapJSON() No source map found");
                    else {
                      const l = [];
                      for (; null != o; ) {
                        const { runtimeSourceURL: t } = e,
                          r = o[1];
                        if (r.indexOf("base64,") >= 0)
                          try {
                            const i = r.match(/base64,([a-zA-Z0-9+\/=]+)/)[1],
                              s = (0, n.Y7)("decodeBase64String()", () => decodeBase64String(i)),
                              o = (0, n.Y7)("JSON.parse(decoded)", () => JSON.parse(s));
                            if (
                              (a.p &&
                                (console.groupCollapsed("extractAndLoadSourceMapJSON() Inline source map"),
                                console.log(o),
                                console.groupEnd()),
                              sourceMapIncludesSource(o, t))
                            ) {
                              (e.sourceMapJSON = o), (e.runtimeSourceCode = null);
                              break;
                            }
                          } catch (e) {}
                        else l.push(r);
                        o = (0, n.Y7)("sourceMapRegex.exec(runtimeSourceCode)", () => i.exec(s));
                      }
                      null === e.sourceMapJSON &&
                        l.forEach((i, s) => {
                          if (s !== l.length - 1)
                            return void console.warn(`More than one external source map detected in the source file; skipping "${i}"`);
                          const { runtimeSourceURL: o } = e;
                          let u = i;
                          if (!u.startsWith("http") && !u.startsWith("/")) {
                            if (-1 !== o.lastIndexOf("/")) {
                              u = `${o.slice(0, o.lastIndexOf("/"))}/${u}`;
                            }
                          }
                          e.sourceMapURL = u;
                          const c =
                            t.get(u) ||
                            fetchFile(u).then(
                              (e) => (0, n.Y7)("JSON.parse(sourceMapContents)", () => JSON.parse(e)),
                              (e) => null
                            );
                          a.p && (t.has(u) || console.log(`extractAndLoadSourceMapJSON() External source map "${u}"`)),
                            t.set(u, c),
                            r.push(
                              c.then((t) => {
                                null !== t && ((e.sourceMapJSON = t), (e.runtimeSourceCode = null));
                              })
                            );
                        });
                    }
                  }),
                  Promise.all(r)
                );
              })(r)
            ),
            r
          );
        });
      }
      function decodeBase64String(e) {
        if ("function" == typeof atob) return atob(e);
        if (null != l && "function" == typeof l.from) return l.from(e, "base64");
        throw Error("Cannot decode base64 string");
      }
      function fetchFile(e, t = "fetchFile") {
        return (0, n.OB)(
          `${t}("${e}")`,
          (r) =>
            new Promise((n, i) => {
              fetch(e, u).then(
                (s) => {
                  s.ok
                    ? s
                        .text()
                        .then((e) => {
                          r(), n(e);
                        })
                        .catch((n) => {
                          a.p && console.log(`${t}() Could not read text for url "${e}"`), r(), i(null);
                        })
                    : (a.p && console.log(`${t}() Got bad response for url "${e}"`), r(), i(null));
                },
                (e) => {
                  a.p && console.log(`${t}() Could not fetch file: ${e.message}`), r(), i(null);
                }
              );
            })
        );
      }
      function flattenHooksList(e) {
        const t = [];
        return (
          (0, n.Y7)("flattenHooksList()", () => {
            flattenHooksListImpl(e, t);
          }),
          a.p && console.log("flattenHooksList() hooksList:", t),
          t
        );
      }
      function flattenHooksListImpl(e, t) {
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          isUnnamedBuiltInHook(n)
            ? a.p && console.log("flattenHooksListImpl() Skipping unnamed hook", n)
            : (t.push(n), n.subHooks.length > 0 && flattenHooksListImpl(n.subHooks, t));
        }
      }
      function isUnnamedBuiltInHook(e) {
        return ["Effect", "ImperativeHandle", "LayoutEffect", "DebugValue"].includes(e.name);
      }
      const p = s()();
      function parseSourceAndMetadata(e, t) {
        return p.parseSourceAndMetadata(e, t);
      }
      const d = p.purgeCachedMetadata,
        h = new Map();
      async function parseHookNames(e, t) {
        return (0, n.WV)("parseHookNames", async () => {
          const r = flattenHooksList(e);
          if (0 === r.length) return h;
          return parseSourceAndMetadata(r, await loadSourceAndMetadata(r, t));
        });
      }
    },
    474: (e, t, r) => {
      var n = r(6803),
        i = ["parseSourceAndMetadata", "purgeCachedMetadata"];
      e.exports = function () {
        var e = new Worker(
          URL.createObjectURL(
            new Blob([
            ])
          ),
          { name: "[name].worker.js" }
        );
        return (
          URL.revokeObjectURL(
            URL.createObjectURL(
              new Blob([
              ])
            )
          ),
          n(e, i),
          e
        );
      };
    }
  }
]);