(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8674],
  {
    81735: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => i });
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
    76191: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var i = a(8081),
        s = a.n(i),
        o = a(23645),
        n = a.n(o)()(s());
      n.push([
        t.id,
        '.top-sites[data-v-08eea340]{--cols: 8;display:grid;grid-template-columns:repeat(var(--cols), 1fr);grid-template-rows:repeat(1, auto);margin:25px auto 0;gap:2px}.top-sites .site[data-v-08eea340]{--mask-width: 15px;--mask-image-content: linear-gradient(to right, black 0, black calc(100% - var(--mask-width)), transparent);min-width:0;height:80px;display:flex;position:relative;flex-direction:column;align-items:center;justify-content:center;padding:8px;cursor:pointer}.top-sites .site .tooltip[data-v-08eea340]{--mask-image-content: linear-gradient( to right, black 0, black calc(300px - var(--mask-width) - (var(--side-padding) * 2)), transparent );--side-padding: 8px;max-width:300px;position:absolute;z-index:1;top:calc(100% + 4px);left:50%;opacity:0;padding:5px var(--side-padding);transform:translateX(-50%);transition:opacity .075s ease;border-radius:4px;background:rgba(38,38,38,.95);color:#fff;pointer-events:none}.top-sites .site .tooltip .tooltip-title[data-v-08eea340]{margin-bottom:2px;overflow:hidden;font-size:.8125rem;white-space:nowrap;-webkit-mask-image:var(--mask-image-content);mask-image:var(--mask-image-content)}.top-sites .site .tooltip .full-url[data-v-08eea340]{opacity:var(--opacity-stop-5);overflow:hidden;font-size:.7rem;white-space:nowrap;-webkit-mask-image:var(--mask-image-content);mask-image:var(--mask-image-content)}.top-sites .site .title[data-v-08eea340]{width:100%;position:relative;margin-top:8px;overflow:hidden;font-size:10px;font-weight:500;white-space:nowrap;-webkit-mask-image:var(--mask-image-content);mask-image:var(--mask-image-content)}.top-sites .site[data-v-08eea340]::before{content:"";position:absolute;opacity:0;border-radius:calc(var(--border-radius)*2);background:rgba(255,255,255,.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);inset:0}.top-sites .site[data-v-08eea340]::after{content:"";width:80%;height:20%;position:absolute;z-index:-1;top:70%;left:10%;opacity:var(--opacity-stop-2);border-radius:50%;background-color:#000;pointer-events:none;filter:blur(10px)}.top-sites .site[data-v-08eea340]:hover::before{opacity:1}.top-sites .site[data-v-08eea340]:hover::after{opacity:0}.top-sites .site:hover .tooltip[data-v-08eea340]{opacity:1;transition-delay:.6s}.top-sites .site[data-v-08eea340]:hover:active::before{background:rgba(255,255,255,.25)}.top-sites .site[data-v-08eea340] .icon{width:auto;height:auto;display:flex;position:relative;align-items:center;justify-content:center;padding:8px;border-radius:100%;background-color:#fff}.top-sites .site[data-v-08eea340] .icon img{width:24px;height:24px;overflow:hidden;border-radius:calc(var(--border-radius)/2)}@media screen and (width <= 800px){.top-sites[data-v-08eea340]{--cols: 6}.top-sites .site[data-v-08eea340]:nth-child(n+7){display:none}}@media screen and (width <= 450px){.top-sites[data-v-08eea340]{--cols: 4;padding:0 20px}.top-sites .site[data-v-08eea340]:nth-child(n+5){display:none}}@media screen and (height <= 800px){.top-sites[data-v-08eea340]{margin-top:.75rem}}',
        ""
      ]);
      const r = n;
    },
    88674: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => u });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "app-container", attrs: { "data-test": "launchpad" } }, [
          e(
            "div",
            { staticClass: "top-sites" },
            t._l(t.topSites, function (a) {
              return e(
                "div",
                {
                  key: a.url,
                  staticClass: "site",
                  attrs: { "data-test": "launchpad-item" },
                  on: {
                    click: function (e) {
                      return t.openLinks(e, a.url);
                    },
                    auxclick: function (e) {
                      return t.openLinks(e, a.url);
                    }
                  }
                },
                [
                  e("div", { staticClass: "icon" }, [e("img", { attrs: { src: a.imgSrc, draggable: "false" } })]),
                  t._v(" "),
                  e("div", { staticClass: "title" }, [t._v(t._s(a.title || a.hostname || " "))]),
                  t._v(" "),
                  e("div", { staticClass: "tooltip" }, [
                    e("div", { staticClass: "tooltip-title" }, [t._v(t._s(a.title || a.hostname || " "))]),
                    t._v(" "),
                    e("div", { staticClass: "full-url" }, [t._v(t._s(a.url))])
                  ])
                ]
              );
            }),
            0
          )
        ]);
      };
      i._withStripped = !0;
      var s = a(81735),
        o = a(81405),
        n = a(42223),
        r = a(77140),
        p = a(80809),
        l = a(40531);
      const d = new o.ZP({ feature: "launchpad" }),
        c = {
          name: "Launchpad",
          mixins: [n.Z],
          data: () => ({ topSites: [] }),
          created() {
            this.initTopSites();
          },
          methods: {
            openLinks(t, e) {
              d.capture("launchpad link click");
              let a = m.models.bookmarksSettings.get("openInNewTab") || t.metaKey || "auxclick" === t.type;
              r.H.tabs.openUrl(e, a);
            },
            async initTopSites() {
              if (!("topSites" in chrome) || !chrome.topSites) {
                this.emitComponentMounted();
                let t = { permissions: ["topSites"] };
                if (
                  (p.Z.isChrome() && (t.origins = ["chrome://favicon/"]),
                  !(await new Promise((e) => {
                    m.cmd("modal.open", "PERMISSION_REQUEST", {
                      resolve: e,
                      permissions: t,
                      widgetName: "Launchpad",
                      permissionExplanation: "To display your top sites"
                    });
                  })))
                )
                  return (l.ax.launchpadVisible = !1);
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
      a(96591);
      const u = (0, a(51900).Z)(c, i, [], !1, null, "08eea340", null).exports;
    },
    96591: (t, e, a) => {
      var i = a(76191);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("4eac048a", i, !1, {});
    }
  }
]);
