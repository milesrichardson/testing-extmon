(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [5059],
  {
    81735: (t, a, e) => {
      "use strict";
      e.d(a, { Z: () => i });
      const i = {
        favicon: (t) => (m.utils.isChrome() ? `chrome://favicon/size/16@2x/${t}` : m.utils.getFavIcon(t)),
        open(t) {
          m.models.bookmarksSettings.get("openInNewTab") && m.utils.getBrowser().tabs
            ? m.utils.getBrowser().tabs.create({ url: t, active: !1 })
            : m.utils.getBrowser().tabs.update({ url: t }),
            m.utils.getBrowser().tabs ||
              (m.models.bookmarksSettings.get("openInNewTab") ? window.open(t, "_blank") : window.open(t, "_self"));
        },
        openInNewTab(t) {
          m.utils.getBrowser().tabs ? m.utils.getBrowser().tabs.create({ url: t, active: !1 }) : window.open(t, "_blank");
        }
      };
    },
    47055: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => r });
      var i = e(8081),
        s = e.n(i),
        o = e(23645),
        n = e.n(o)()(s());
      n.push([
        t.id,
        '.top-sites[data-v-ff05acda]{--cols: 8;display:grid;grid-template-columns:repeat(var(--cols), 1fr);grid-template-rows:repeat(1, auto);margin:25px auto 0;gap:2px}.top-sites .site[data-v-ff05acda]{--mask-width: 15px;--mask-image-content: linear-gradient(to right, black 0, black calc(100% - var(--mask-width)), transparent);min-width:0;height:80px;display:flex;position:relative;flex-direction:column;align-items:center;justify-content:center;padding:8px;cursor:pointer}.top-sites .site .tooltip[data-v-ff05acda]{--mask-image-content: linear-gradient( to right, black 0, black calc(300px - var(--mask-width) - (var(--side-padding) * 2)), transparent );--side-padding: 8px;max-width:300px;position:absolute;z-index:1;top:calc(100% + 4px);left:50%;opacity:0;padding:5px var(--side-padding);transform:translateX(-50%);transition:opacity .075s ease;border-radius:4px;background:rgba(38,38,38,.95);color:#fff;pointer-events:none}.top-sites .site .tooltip .tooltip-title[data-v-ff05acda]{margin-bottom:2px;overflow:hidden;font-size:.8125rem;white-space:nowrap;-webkit-mask-image:var(--mask-image-content);mask-image:var(--mask-image-content)}.top-sites .site .tooltip .full-url[data-v-ff05acda]{opacity:var(--opacity-stop-5);overflow:hidden;font-size:.7rem;white-space:nowrap;-webkit-mask-image:var(--mask-image-content);mask-image:var(--mask-image-content)}.top-sites .site .title[data-v-ff05acda]{width:100%;position:relative;margin-top:8px;overflow:hidden;font-size:10px;font-weight:500;white-space:nowrap;-webkit-mask-image:var(--mask-image-content);mask-image:var(--mask-image-content)}.top-sites .site[data-v-ff05acda]::before{content:"";position:absolute;opacity:0;border-radius:calc(var(--border-radius)*2);background:rgba(255,255,255,.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);inset:0}.top-sites .site[data-v-ff05acda]::after{content:"";width:80%;height:20%;position:absolute;z-index:-1;top:70%;left:10%;opacity:var(--opacity-stop-2);border-radius:50%;background-color:#000;pointer-events:none;filter:blur(10px)}.top-sites .site[data-v-ff05acda]:hover::before{opacity:1}.top-sites .site[data-v-ff05acda]:hover::after{opacity:0}.top-sites .site:hover .tooltip[data-v-ff05acda]{opacity:1;transition-delay:.6s}.top-sites .site[data-v-ff05acda]:hover:active::before{background:rgba(255,255,255,.25)}.top-sites .site[data-v-ff05acda] .icon{width:auto;height:auto;display:flex;position:relative;align-items:center;justify-content:center;padding:8px;border-radius:100%;background-color:#fff}.top-sites .site[data-v-ff05acda] .icon img{width:24px;height:24px;overflow:hidden;border-radius:calc(var(--border-radius)/2)}@media screen and (max-width: 800px){.top-sites[data-v-ff05acda]{--cols: 6}.top-sites .site[data-v-ff05acda]:nth-child(n+7){display:none}}@media screen and (max-width: 450px){.top-sites[data-v-ff05acda]{--cols: 4;padding:0 20px}.top-sites .site[data-v-ff05acda]:nth-child(n+5){display:none}}@media screen and (max-height: 800px){.top-sites[data-v-ff05acda]{margin-top:.75rem}}',
        ""
      ]);
      const r = n;
    },
    85059: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => l });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a("div", { staticClass: "app-container", attrs: { "data-test": "launchpad" } }, [
          a(
            "div",
            { staticClass: "top-sites" },
            t._l(t.topSites, function (e) {
              return a(
                "div",
                {
                  key: e.url,
                  staticClass: "site",
                  attrs: { "data-test": "launchpad-item" },
                  on: {
                    click: function (a) {
                      return t.openLinks(a, e.url);
                    },
                    auxclick: function (a) {
                      return t.openLinks(a, e.url);
                    }
                  }
                },
                [
                  a("div", { staticClass: "icon" }, [a("img", { attrs: { src: e.imgSrc, draggable: "false" } })]),
                  t._v(" "),
                  a("div", { staticClass: "title" }, [t._v(t._s(e.title || e.hostname || " "))]),
                  t._v(" "),
                  a("div", { staticClass: "tooltip" }, [
                    a("div", { staticClass: "tooltip-title" }, [t._v(t._s(e.title || e.hostname || " "))]),
                    t._v(" "),
                    a("div", { staticClass: "full-url" }, [t._v(t._s(e.url))])
                  ])
                ]
              );
            }),
            0
          )
        ]);
      };
      i._withStripped = !0;
      var s = e(81735),
        o = e(81405),
        n = e(42223),
        r = e(77140),
        d = e(80809);
      const p = new o.ZP({ feature: "launchpad" }),
        c = {
          name: "Launchpad",
          mixins: [n.Z],
          data: () => ({ topSites: [] }),
          created() {
            this.initTopSites();
          },
          methods: {
            openLinks(t, a) {
              p.capture("launchpad link click");
              let e = m.models.bookmarksSettings.get("openInNewTab") || t.metaKey || "auxclick" === t.type;
              r.H.tabs.openUrl(a, e);
            },
            async initTopSites() {
              if (!("topSites" in chrome) || !chrome.topSites) {
                this.emitComponentMounted();
                let t = { permissions: ["topSites"] };
                if (
                  (d.Z.isChrome() && (t.origins = ["chrome://favicon/"]),
                  !(await new Promise((a) => {
                    m.cmd("modal.open", "PERMISSION_REQUEST", {
                      resolve: a,
                      permissions: t,
                      widgetName: "Launchpad",
                      permissionExplanation: "To display your top sites"
                    });
                  })))
                )
                  return;
              }
              const t = await r.H.topSites.get();
              t.forEach((t) => {
                (t.hostname = new URL(t.url).hostname),
                  (t.imgSrc = s.Z.favicon(t.url)),
                  (t.title.startsWith("https://") || t.title.startsWith("http://")) && (t.title = ""),
                  t.title.includes("|") && (t.title = t.title.split("|").at(-1).trim());
              }),
                (this.topSites = t.slice(0, 8)),
                this.emitComponentMounted();
            },
            onAllComponentsMountedOverride() {}
          }
        };
      e(92317);
      const l = (0, e(51900).Z)(c, i, [], !1, null, "ff05acda", null).exports;
    },
    92317: (t, a, e) => {
      var i = e(47055);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, e(45346).Z)("03816f3d", i, !1, {});
    }
  }
]);
