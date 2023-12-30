(() => {
  (function () {
    "use strict";
    const e = { debug: !1, lang: "en", domain: "www", hazButton: !1, nopin: !1, observer: {}, meta: {}, lastWheel: 0 },
      r = {
        me: "logic",
        version: 2021010101,
        hoverBoardPicker: { minImageSize: 250 },
        digits: "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz",
        overlay: {
          style: [
            "background: transparent",
            "border: none",
            "color-scheme: none",
            "display: block",
            "position: fixed",
            "height: 100%",
            "width: 100%",
            "top: 0",
            "right: 0",
            "bottom: 0",
            "left: 0",
            "margin: 0",
            "clip: auto",
            "opacity: 1",
            "padding: 0",
            "z-index: 9223372036854775807"
          ]
        },
        search: {
          style: [
            "width: 24px",
            "height: 24px",
            "background: rgba(0,0,0,.4) url(data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTEiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCI+PC9jaXJjbGU+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMDgzNCA0LjU4MzMzSDEzLjMzMzRWNS43NDk5OUgxNS4wODM0QzE1LjcyNjggNS43NDk5OSAxNi4yNSA2LjI3MzI0IDE2LjI1IDYuOTE2NjZWOC42NjY2NkgxNy40MTY3VjYuOTE2NjZDMTcuNDE2NyA1LjYyOTgzIDE2LjM3MDIgNC41ODMzMyAxNS4wODM0IDQuNTgzMzNaTTE2LjI1IDE1LjA4MzNDMTYuMjUgMTUuNzI2NyAxNS43MjY4IDE2LjI1IDE1LjA4MzQgMTYuMjVIMTMuMzMzNFYxNy40MTY3SDE1LjA4MzRDMTYuMzcwMiAxNy40MTY3IDE3LjQxNjcgMTYuMzcwMiAxNy40MTY3IDE1LjA4MzNWMTMuMzMzM0gxNi4yNVYxNS4wODMzWk01Ljc1MDA0IDE1LjA4MzNWMTMuMzMzM0g0LjU4MzM3VjE1LjA4MzNDNC41ODMzNyAxNi4zNzAyIDUuNjI5ODcgMTcuNDE2NyA2LjkxNjcxIDE3LjQxNjdIOC42NjY3MVYxNi4yNUg2LjkxNjcxQzYuMjczMjkgMTYuMjUgNS43NTAwNCAxNS43MjY3IDUuNzUwMDQgMTUuMDgzM1pNNS43NTAwNCA2LjkxNjY2QzUuNzUwMDQgNi4yNzMyNCA2LjI3MzI5IDUuNzQ5OTkgNi45MTY3MSA1Ljc0OTk5SDguNjY2NzFWNC41ODMzM0g2LjkxNjcxQzUuNjI5ODcgNC41ODMzMyA0LjU4MzM3IDUuNjI5ODMgNC41ODMzNyA2LjkxNjY2VjguNjY2NjZINS43NTAwNFY2LjkxNjY2Wk05LjI1MDA0IDEwLjcwODNDOS4yNTAwNCA5LjkwNDQ5IDkuOTA0NTQgOS4yNDk5OSAxMC43MDg0IDkuMjQ5OTlDMTEuNTEyMiA5LjI0OTk5IDEyLjE2NjcgOS45MDQ0OSAxMi4xNjY3IDEwLjcwODNDMTIuMTY2NyAxMS41MTIyIDExLjUxMjIgMTIuMTY2NyAxMC43MDg0IDEyLjE2NjdDOS45MDQ1NCAxMi4xNjY3IDkuMjUwMDQgMTEuNTEyMiA5LjI1MDA0IDEwLjcwODNaTTEzLjYyNSAxNC41QzEzLjg0OSAxNC41IDE0LjA3MyAxNC40MTQ4IDE0LjI0NCAxNC4yNDM5QzE0LjU4NTIgMTMuOTAyMSAxNC41ODUyIDEzLjM0NzkgMTQuMjQ0IDEzLjAwNjFMMTMuMDcwMyAxMS44MzNDMTMuMjM0MiAxMS40OTA2IDEzLjMzMzQgMTEuMTEyNiAxMy4zMzM0IDEwLjcwODNDMTMuMzMzNCA5LjI2MTA4IDEyLjE1NTYgOC4wODMzMyAxMC43MDg0IDguMDgzMzNDOS4yNjExMiA4LjA4MzMzIDguMDgzMzcgOS4yNjEwOCA4LjA4MzM3IDEwLjcwODNDOC4wODMzNyAxMi4xNTU2IDkuMjYxMTIgMTMuMzMzMyAxMC43MDg0IDEzLjMzMzNDMTEuMTEyNiAxMy4zMzMzIDExLjQ5MDYgMTMuMjM0MiAxMS44MzMgMTMuMDcwMkwxMy4wMDYxIDE0LjI0MzlDMTMuMTc3IDE0LjQxNDggMTMuNDAxIDE0LjUgMTMuNjI1IDE0LjVaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8L3N2Zz4=) 50% 50% no-repeat",
            "background-size: 24px 24px",
            "position: absolute",
            "opacity: 1",
            "z-index: 8675309",
            "display: none",
            "cursor: pointer",
            "border: none",
            "border-radius: 12px"
          ]
        },
        save: {
          domain: {
            www: !0,
            uk: !0,
            br: !0,
            jp: !0,
            fr: !0,
            es: !0,
            pl: !0,
            de: !0,
            ru: !0,
            it: !0,
            au: !0,
            nl: !0,
            tr: !0,
            id: !0,
            hu: !0,
            pt: !0,
            se: !0,
            cz: !0,
            gr: !0,
            kr: !0,
            ro: !0,
            dk: !0,
            sk: !0,
            fi: !0,
            in: !0,
            no: !0,
            za: !0,
            nz: !0
          },
          lookup: {
            cs: { d: "cz" },
            da: { d: "dk" },
            de: { alt: { at: "de" } },
            el: { d: "gr", alt: { cy: "gr" } },
            en: { alt: { au: "au", gb: "uk", ie: "uk", in: "in", nz: "nz", uk: "uk", za: "za" } },
            es: {
              alt: {
                419: "www",
                ar: "www",
                cl: "www",
                co: "www",
                la: "www",
                mx: "www",
                pe: "www",
                us: "www",
                uy: "www",
                ve: "www",
                xl: "www"
              }
            },
            fi: !0,
            fr: { alt: { be: "fr", ca: "www" } },
            hi: { d: "in" },
            hu: !0,
            id: !0,
            it: !0,
            ja: { d: "jp" },
            ko: { d: "kr" },
            ms: { d: "www" },
            nl: { alt: { be: "nl" } },
            nb: { d: "no" },
            pl: !0,
            pt: { alt: { br: { d: "br", s: "pt-br" } } },
            ro: !0,
            ru: !0,
            sk: !0,
            sv: { d: "se" },
            tl: { d: "www" },
            th: { d: "www" },
            tr: { alt: { cy: "tr" } },
            uk: !0,
            vi: !0
          },
          style: {
            lego: [
              "border-radius: 10px",
              "text-indent: 12px",
              "width: auto",
              "height: 20px",
              "line-height: 24px",
              "padding: 0 8px",
              "text-align: center",
              "vertical-align: middle",
              'font: 11px/20px "Helvetica Neue", Helvetica, sans-serif',
              "font-weight: bolder",
              "color: #fff",
              "background: #e60023 url(data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjYiIGZpbGw9IiNFNjAwMjMiPjwvY2lyY2xlPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDguNTYxNSAxLjYwNTUgMTAuNzQ4NSAzLjg2NSAxMS42MDlDMy44MSAxMS4xNDA1IDMuNzUxNSAxMC4zNjggMy44Nzc1IDkuODI2QzMuOTg2IDkuMzYgNC41NzggNi44NTcgNC41NzggNi44NTdDNC41NzggNi44NTcgNC4zOTk1IDYuNDk5NSA0LjM5OTUgNS45N0M0LjM5OTUgNS4xNCA0Ljg4MDUgNC41MiA1LjQ4IDQuNTJDNS45OSA0LjUyIDYuMjM2IDQuOTAyNSA2LjIzNiA1LjM2MUM2LjIzNiA1Ljg3MzUgNS45MDk1IDYuNjM5NSA1Ljc0MSA3LjM1QzUuNjAwNSA3Ljk0NDUgNi4wMzk1IDguNDI5NSA2LjYyNTUgOC40Mjk1QzcuNjg3IDguNDI5NSA4LjUwMzUgNy4zMSA4LjUwMzUgNS42OTRDOC41MDM1IDQuMjYzNSA3LjQ3NTUgMy4yNjQgNi4wMDggMy4yNjRDNC4zMDkgMy4yNjQgMy4zMTE1IDQuNTM4NSAzLjMxMTUgNS44NTZDMy4zMTE1IDYuMzY5NSAzLjUwOSA2LjkxOTUgMy43NTYgNy4yMTlDMy44MDQ1IDcuMjc4NSAzLjgxMiA3LjMzIDMuNzk3NSA3LjM5MDVDMy43NTIgNy41Nzk1IDMuNjUxIDcuOTg1IDMuNjMxNSA4LjA2OEMzLjYwNSA4LjE3NyAzLjU0NSA4LjIwMDUgMy40MzE1IDguMTQ3NUMyLjY4NTUgNy44MDA1IDIuMjE5NSA2LjcxIDIuMjE5NSA1LjgzNEMyLjIxOTUgMy45NDk1IDMuNTg4IDIuMjE5NSA2LjE2NTUgMi4yMTk1QzguMjM3NSAyLjIxOTUgOS44NDggMy42OTYgOS44NDggNS42NjlDOS44NDggNy43Mjc1IDguNTUwNSA5LjM4NDUgNi43NDg1IDkuMzg0NUM2LjE0MyA5LjM4NDUgNS41NzQ1IDkuMDY5NSA1LjM3OTUgOC42OThDNS4zNzk1IDguNjk4IDUuMDggOS44MzkgNS4wMDc1IDEwLjExOEM0Ljg2NjUgMTAuNjYgNC40NzU1IDExLjM0NiA0LjIzMyAxMS43MzU1QzQuNzkyIDExLjkwNzUgNS4zODUgMTIgNiAxMkM5LjMxMzUgMTIgMTIgOS4zMTM1IDEyIDZDMTIgMi42ODY1IDkuMzEzNSAwIDYgMEMyLjY4NjUgMCAwIDIuNjg2NSAwIDZaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8L3N2Zz4=) 4px 50% no-repeat",
              "background-size: 12px 12px",
              "position: absolute",
              "opacity: 1",
              "z-index: 8675309",
              "display: none",
              "cursor: pointer",
              "border: none",
              "font-weight: bold",
              "-webkit-font-smoothing: antialiased",
              "-moz-osx-font-smoothing: grayscale"
            ]
          },
          offset: { top: 10, left: 10, right: 32 }
        },
        seek: { nopin: 1, nohover: 1, nosearch: 1 },
        nopeList: [
          /^https?:\/\/(.*?\.|)craigslist\.org\//,
          /^https?:\/\/(.*?\.|)chase\.com\//,
          /^https?:\/\/(.*?\.|)facebook\.com\//,
          /^https?:\/\/mail\.aol\.com\//,
          /^https?:\/\/(.*?\.|)atmail\.com\//,
          /^https?:\/\/(.*?\.|)contactoffice\.com\//,
          /^https?:\/\/(.*?\.|)fastmail\.fm\//,
          /^https?:\/\/(.*?\.|)webmail\.gandi\.net\//,
          /^https?:\/\/accounts\.google\.com\//,
          /^https?:\/\/myaccount\.google\.com\//,
          /^https?:\/\/mail\.google\.com\//,
          /^https?:\/\/docs\.google\.com\//,
          /^https?:\/\/gmx\.com\//,
          /^https?:\/\/(.*?\.|)hushmail\.com\//,
          /^https?:\/\/(.*?\.|)laposte\.fr\//,
          /^https?:\/\/mail\.lycos\.com\//,
          /^https?:\/\/(.*?\.|)mail\.com\//,
          /^https?:\/\/(.*?\.|)mail\.ru\//,
          /^https?:\/\/(.*?\.|)opolis\.eu\//,
          /^https?:\/\/(.*?\.|)outlook\.com\//,
          /^https?:\/\/(.*?\.|)nokiamail\.com\//,
          /^https?:\/\/apps\.rackspace\.com\//,
          /^https?:\/\/mail\.rediff\.com\//,
          /^https?:\/\/(.*?\.|)runbox\.com\//,
          /^https?:\/\/mail\.sify\.com\//,
          /^https?:\/\/webmail\.thexyz\.com\//,
          /^https?:\/\/login\.yahoo\.com\//,
          /^https?:\/\/mail\.yahoo\.com\//,
          /^https?:\/\/mail\.yandex\.com\//
        ],
        noHoverList: [/^https?:\/\/ramandel\.com\//, /^https?:\/\/www\.google\.com\/$/, /^https?:\/\/www\.google\.com\/_/]
      },
      f = chrome || f,
      n = {};
    function Y(t) {
      f.storage.local.get(null, (i) => {
        for (let o in i) e[o] = i[o];
        typeof t == "function" && t();
      });
    }
    function a(t, i = 0) {
      t && e.debug && (typeof e.debug == "number" ? i >= e.debug && console.log(t) : console.log(t));
    }
    function A() {
      let t = !1;
      if (window.self === window.top) t = !0;
      else {
        a("We are inside an iframe.");
        try {
          window.top.innerHeight === window.self.innerHeight && window.top.innerWidth === window.self.innerWidth
            ? (a("This iframe is the same size as the top window; allowing the extension to run."),
              (window.top.location.href.match(/^https?:\/\/blog\.naver\.com\//) ||
                window.top.location.href.match(/^https?:\/\/blog\.daum\.net\//)) &&
                (t = !0))
            : (a("This frame's dimensions: " + window.self.innerHeight + "x" + window.self.innerWidth),
              a("Top window dimensions: " + window.top.innerHeight + "x" + window.top.innerWidth));
        } catch (i) {
          a("This error message was caught so it doesn't clutter up console.log."), a(i);
        }
      }
      return t;
    }
    function g(t) {
      (t.via = r.me), (t.from = r.me), t.to || (t.to = "background"), a("Sending message"), a(JSON.stringify(t)), f.runtime.sendMessage(t);
    }
    function y() {
      A() || (e.nopin = !0), g({ to: "background", act: "refreshContextMenus", data: { nopin: e.nopin } });
    }
    function C(t) {
      typeof t.el[t.att] == "string" ? (t.el[t.att] = t.string) : (t.el.dataset[t.att] = t.string);
    }
    function b(t) {
      const i = Object.keys(t)[0],
        o = t[i],
        u = document.createElement(i);
      for (let s in o) {
        const M = o[s];
        typeof M == "string" && C({ el: u, att: s, string: M }), typeof M == "object" && s === "style" && Object.assign(u.style, M);
      }
      return u;
    }
    function D(t) {
      let i, o, u;
      a(`Overlay Open ${t.id}`),
        t.id &&
          !n[t.id] &&
          ((e.pageX = window.pageXOffset),
          (e.pageY = window.pageYOffset),
          (i = "/v5/html/" + t.id + ".html"),
          (n[t.id] = b({ IFRAME: { src: f.runtime.getURL(i) } })),
          (o = () => {
            (e.observer[t.id] = new MutationObserver(function (s) {
              (s[0].attributeName === "style" || s[0].attributeName === "class") &&
                (a("overlay styles have changed; rewriting"), this.disconnect(), u(s[0].target));
            })),
              e.observer[t.id].observe(n[t.id], { attributes: !0 });
          }),
          (u = (s) => {
            s.removeAttribute("class"), s.setAttribute("style", r.overlay.style.join("!important;")), o();
          }),
          u(n[t.id]),
          (n[t.id].onload = () => {
            t.act && g({ to: "background", act: t.act }),
              t.data &&
                ((t.data.meta = e.meta),
                window.setTimeout(function () {
                  g({ to: "background", act: "populate" + t.id.charAt(0).toUpperCase() + t.id.slice(1), data: t.data });
                }, 20)),
              t.callback && t.callback(),
              n[t.id].focus();
          }),
          document.body.appendChild(n[t.id]));
    }
    function L(t) {
      t.data &&
        ((t.data.pageUrl = document.URL),
        console.log("Open Search tracker"),
        D({
          id: "save",
          data: t.data,
          callback: () => {
            window.setTimeout(() => {
              g({ to: "background", act: "populateSearch", data: t.data, tabId: t.tabId });
            }, 40);
          }
        }));
    }
    function S(t) {
      let i = !1;
      return (
        [
          () => {
            if (!t.img) return !0;
          },
          () => {
            if (!t.img.currentSrc) return !0;
          },
          () => {
            if (!t.img.currentSrc.match(/^http/) && !t.img.currentSrc.match(/^data/)) return !0;
          },
          () => {
            if (t.img.naturalHeight < 90 || t.img.naturalWidth < 90) return !0;
          },
          () => !(t.img.naturalHeight > 119 || t.img.naturalWidth > 119),
          () => {
            if (t.img.height < 90 || t.img.width < 90) return !0;
          },
          () => !(t.img.height > 119 || t.img.width > 119),
          () => {
            if (t.img.naturalHeight < t.img.naturalWidth / 3) return !0;
          },
          () => {
            if (t.img.getAttribute("nopin") || t.img.getAttribute("data-pin-nopin")) return !0;
          }
        ].filter((o) => {
          o(t) && (i = !0);
        }),
        i
      );
    }
    function I(t) {
      let i = null;
      return typeof t.el[t.att] == "string" ? (i = t.el[t.att]) : (i = t.el.dataset[t.att]), i;
    }
    function T(t) {
      const i = {},
        o = I({ el: t, att: "data-pin-id" });
      return (
        (i.media = I({ el: t, att: "data-pin-media" }) || t.currentSrc),
        (i.description = I({ el: t, att: "data-pin-description" }) || t.title || document.title),
        i.media === document.URL && (i.description = ""),
        o ? (i.id = o) : (i.url = I({ el: t, att: "data-pin-url" }) || document.URL),
        i
      );
    }
    function Q(t) {
      const i = t.el.getBoundingClientRect();
      return {
        top: Math.round(i.top + window.scrollY),
        left: Math.round(i.left + window.scrollX),
        bottom: Math.round(i.bottom + window.scrollY),
        right: Math.round(i.right + window.scrollX)
      };
    }
    function x(t) {
      t.msg || (t.msg = f.i18n.getMessage("errorPin")), window.alert(t.msg);
    }
    function Z() {
      return [1e7, 1e3, 4e3, 8e3, 1e11]
        .join("")
        .replace(/[018]/g, (t) => (t ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (t / 4)))).toString(16));
    }
    function k() {
      function t() {
        x({ msg: e.customNoPinDomain || e.msg.noPinDomain }),
          g({
            to: "background",
            act: "contextLog",
            data: { eventType: "SAVE_BROWSER_PIN_IMAGES_NOT_FOUND", auxData: { url: document.URL, funnel_uuid: Z() } }
          });
      }
      e.nopin
        ? t()
        : (a("Open Pinmarklet"),
          D({
            id: "save",
            callback: () => {
              g({ to: "background", act: "injectPinmarklet" });
            }
          }));
    }
    function v(t) {
      t.setAttribute("data-pin-me-only", "true"),
        k(),
        window.setTimeout(() => {
          t.removeAttribute("data-pin-me-only");
        }, 1e3);
    }
    function z(t) {
      const i = t.target;
      return i.targetNodeType === 3 && (i = i.parentNode), i;
    }
    function P(t) {
      if (e.hoverImage) {
        const i = z(t);
        i === n.buttonSave && v(e.hoverImage),
          i === n.buttonSearch &&
            L({
              data: { method: "h", searchMe: T(e.hoverImage).media, height: e.hoverImage.naturalHeight, width: e.hoverImage.naturalWidth }
            });
      }
    }
    function W(t) {
      if (e.hazButton) {
        const i = z(t);
        i !== n.buttonSave && i !== n.buttonSearch && E();
      }
    }
    function E() {
      window.clearTimeout(e.hazFade),
        (e.hazFade = window.setTimeout(() => {
          (n.buttonSave.style.display = "none"), (n.buttonSearch.style.display = "none"), (e.hazButton = !1);
        }, 100));
    }
    function B(t) {
      t.button === 2 && ((t.target || {}).tagName || "") === "IMG" && (e.contextEl = t.target);
    }
    function R(t) {
      if (!e.nopin && !e.nohover) {
        const i = z(t);
        if (i === n.buttonSave) {
          if (
            (window.clearTimeout(e.hazFade),
            e.hazLogin &&
              e.hoverImage.naturalWidth >= r.hoverBoardPicker.minImageSize &&
              e.hoverImage.width >= r.hoverBoardPicker.minImageSize &&
              e.lastWheel < Date.now() - 10)
          ) {
            const o = T(e.hoverImage),
              u = i.getBoundingClientRect();
            (o.top = u.top),
              (o.left = u.left),
              e.boards.length && D({ id: "save", directAct: "renderStructure", data: o }),
              (n.buttonSearch.style.display = "none");
          }
          return;
        }
        if (i === n.buttonSearch) {
          window.clearTimeout(e.hazFade);
          return;
        }
        if (i.tagName === "IMG") {
          if (!e.hazLogin && !i.currentSrc.match(/^((http|https):\/\/)/)) n.buttonSave.style.display = "none";
          else {
            const o = Q({ el: i });
            S({ img: i }) ||
              (e.bodyHazButtonSave || (document.body.appendChild(n.buttonSave), (e.bodyHazButtonSave = !0)),
              (n.buttonSave.style.top = o.top + r.save.offset.top + "px"),
              (n.buttonSave.style.left = o.left + r.save.offset.left + "px"),
              (n.buttonSave.style.display = "block"),
              e.nosearch ||
                (e.bodyHazButtonSearch || (document.body.appendChild(n.buttonSearch), (e.bodyHazButtonSearch = !0)),
                (n.buttonSearch.style.display = "block"),
                (n.buttonSearch.style.top = o.top + r.save.offset.top + "px"),
                (n.buttonSearch.style.left = o.right - r.save.offset.right + "px")),
              (e.hoverImage = i),
              (e.hazButton = !0)),
              window.clearTimeout(e.hazFade);
          }
          return;
        }
      }
    }
    function O() {
      e.lastWheel = Date.now();
    }
    function H() {
      O();
    }
    function G() {
      [
        () => {
          for (let t in r.seek) e[r.seek[t]] = !1;
          e.hideHoverButtons && (e.nohover = !0);
        },
        () => {
          let t = /^https?:\/\/(([a-z]{1,3}|latest)\.)?pinterest\.([a-z]{0,2}\.)?([a-z]{1,3})\//,
            i = /^https?:\/\/(.*\.)?pinterdev\.com\//;
          (document.URL.match(t) || document.URL.match(i)) && (a("Nopin: Pinterest app"), (e.nopin = !0));
        },
        () => {
          r.nopeList.filter((t) => {
            document.URL.match(t) && (a("nopeList: " + document.URL + " matches " + t), (e.nopeList = !0), (e.nopin = !0));
          }),
            r.noHoverList.filter((t) => {
              document.URL.match(t) && (a("Nohover: " + document.URL + " matches " + t), (e.nohover = !0));
            });
        },
        () => {
          let t,
            i = [],
            o = {},
            u = document.getElementsByTagName("META"),
            s,
            M,
            c,
            N,
            w,
            m,
            l;
          for (c = 0; c < u.length; c = c + 1)
            (M = (u[c].getAttribute("content") || "").toLowerCase()),
              M &&
                ((s = (u[c].getAttribute("property") || u[c].getAttribute("name") || "").toLowerCase()),
                s &&
                  (i.push({ k: s, v: M }),
                  s === "pinterest" &&
                    (r.seek[M] && (e[M] = !0),
                    M === "nopin" && u[c].getAttribute("description") && (e.customNoPinDomain = u[c].getAttribute("description")))));
          for (
            i.sort(function (d, j) {
              var h = 0;
              return d.k > j.k ? (h = 1) : d.k < j.k && (h = -1), h;
            }),
              c = 0;
            c < i.length;
            c = c + 1
          ) {
            for (w = i[c].k.split(":"), l = o, N = 0; N < w.length; N = N + 1)
              typeof l[w[N]] == "undefined" && (l[w[N]] = {}), (l = l[w[N]]);
            (m = typeof l["~"]), m === "undefined" ? (l["~"] = i[c].v) : (m === "string" && (l["~"] = [l["~"]]), l["~"].push(i[c].v));
          }
          (t = function (d, j, h) {
            for (let p in d)
              typeof d[p] == "object"
                ? typeof d[p][0] == "string"
                  ? (j[h] = d[p])
                  : t(d[p], d, p)
                : Object.keys(d).length === 1 && (j[h] = d[p]);
            return d;
          }),
            (e.meta = t(o, null, null));
        },
        () => {
          document.body && document.body.getAttribute("data-pin-hover") && (a("data-pin-hover found!"), (e.nohover = !0));
        },
        () => {
          g({ act: "checkFeatureBlock", domain: document.domain });
        }
      ].filter((t) => {
        t();
      });
    }
    function F(t) {
      t.id &&
        n[t.id] &&
        (a("Overlay closing " + t.id),
        e.observer[t.id] && (e.observer[t.id].disconnect(), delete e.observer[t.id]),
        n[t.id].parentNode.removeChild(n[t.id]),
        delete n[t.id],
        window.scrollTo(e.pageX, e.pageY));
    }
    function V() {
      F({ id: "save" });
    }
    function X() {
      e.contextEl ? (e.nopin || S({ img: e.contextEl }) ? x({}) : v(e.contextEl)) : a("No context element");
    }
    function J(t) {
      t.data && D({ id: "save", data: t.data });
    }
    function _(t) {
      a("Login check has returned!"), (e.hazLogin = t.data.auth);
    }
    function K(t) {
      t.data &&
        (a("Shall we block features by domain hash?"),
        a(t.data),
        t.data.nopin === !0 && (e.nopin = !0),
        t.data.nohover === !0 && (e.nohover = !0)),
        y();
    }
    const U = {
      closeSave: V,
      contextSave: X,
      openImagePicker: k,
      openSave: J,
      openSearch: L,
      pongLogin: _,
      refreshContext: y,
      renderFeatureBlock: K
    };
    function $() {
      f.runtime.onMessage.addListener((t, i) => {
        t.to === r.me &&
          (a("Message received"),
          a(t),
          t.act && typeof U[t.act] == "function"
            ? (((i || {}).tab || {}).id && (t.tabId = i.tab.id), U[t.act](t))
            : a("No handler found for " + t.act, 1));
      });
    }
    function q(t = 12) {
      let i = "";
      t = t - 0;
      for (let o = 0; o < t; o = o + 1) i = i + r.digits.substr(Math.floor(Math.random() * 60), 1);
      return i;
    }
    function tt() {
      A()
        ? ($(),
          g({ to: "background", act: "login" }),
          (e.me = q()),
          document.addEventListener("mousedown", B),
          document.domain && G(),
          (n.buttonSave = b({ SPAN: { innerText: e.msg.saveAction } })),
          n.buttonSave.setAttribute("style", r.save.style.lego.join("!important;")),
          (n.buttonSearch = document.createElement("SPAN")),
          n.buttonSearch.setAttribute("style", r.search.style.join("!important;")),
          document.body.addEventListener("click", P),
          document.body.addEventListener("mouseover", R),
          document.body.addEventListener("mouseout", W),
          window.addEventListener("blur", E),
          document.addEventListener("wheel", O, { passive: !1 }),
          window.addEventListener("scroll", H, { passive: !1 }))
        : ((e.nopin = !0), (e.nosearch = !0), y());
    }
    Y(tt);
  })();
})();
