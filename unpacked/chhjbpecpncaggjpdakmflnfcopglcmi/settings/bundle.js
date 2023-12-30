/*! For license information please see bundle.js.LICENSE.txt */
"use strict";
var source;
(self.webpackChunksource = self.webpackChunksource || []).push([
  [571],
  {
    5526: (t, e, r) => {
      r.d(e, { Hx: () => T, ec: () => h, rg: () => w, MT: () => k, X_: () => S });
      var n = r(4835);
      function o(t) {
        const e = t.availability;
        return !e || (e.indexOf("/OutOfStock") < 0 && e.indexOf("/SoldOutfStock") < 0);
      }
      function i(t) {
        const e = [];
        return (
          (0, n.isArray)(t.itemListElement) &&
            t.itemListElement.forEach((t) => {
              const r = (0, n.isObject)(t.item) ? t.item : t;
              e.push(r.name);
            }),
          e
        );
      }
      function a(t) {
        const { product: e, breadcrumb: r } = (function (t) {
            const e = t.querySelectorAll('script[type="application/ld+json"]'),
              r = {};
            function o(t) {
              var e;
              (e = t),
                0 === e?.["@context"]?.search(/https?:\/\/schema\.org/) && ["Product", "ProductGroup"].includes(e["@type"])
                  ? (r.product = t)
                  : (function (t) {
                      return 0 === t?.["@context"]?.search(/https?:\/\/schema\.org/) && "BreadcrumbList" === t["@type"];
                    })(t) && (r.breadcrumb = t);
            }
            return (
              e.forEach((t) => {
                let e = null;
                try {
                  e = JSON.parse((t.textContent ?? "").replace(/\n/g, " "));
                } catch (t) {}
                (0, n.isArray)(e)
                  ? e.forEach((t) => {
                      o(t);
                    })
                  : (0, n.isObject)(e) && o(e);
              }),
              r
            );
          })(t),
          a = new p();
        if (e) {
          const t = ((s = e), (0, n.isArray)(s.model) ? s.model[0] : (0, n.isObject)(s.model) ? s.model : s),
            r = (function (t) {
              const e = t.offers;
              if ((0, n.isArray)(e)) {
                for (const t in e) if (o(e[t])) return e[t];
              } else if ((0, n.isObject)(e) && o(e)) return e;
              return {};
            })(t);
          a.merge({
            title: t.name,
            description: t.description,
            sku: t.sku || t.productID || r.itemOffered?.sku,
            mpn: t.mpn,
            url: t.url,
            currency: t.priceCurrency || r.priceCurrency,
            price: t.price || r.price || r.priceSpecification?.price || r.lowPrice,
            category: t.category,
            gtin: t.gtin14 || t.gtin13 || t.gtin12 || t.gtin8 || t.gtin
          }),
            (0, n.isString)(t.brand) ? (a.brand = t.brand) : (0, n.isObject)(t.brand) && (a.brand = t.brand.name);
        }
        var s;
        return r && a.merge({ breadcrumb: i(r) }), a;
      }
      function s(t) {
        let e,
          { container: r, config: n, isArray: o } = t;
        const i = r.querySelectorAll(n.selector),
          a = [];
        for (const t of i) (e = n.attribute ? t.getAttribute(n.attribute) : l(t)), (e = c(e)), e && a.push(e);
        return o ? a : a.every((t) => t === a[0]) ? a[0] : void 0;
      }
      function c(t) {
        return t ? t.replace(/([\s\r\n]+)/g, " ").trim() : "";
      }
      function l(t) {
        return t
          ? "IMG" === t.nodeName || "IFRAME" === t.nodeName
            ? c(t.src)
            : "INPUT" === t.nodeName
            ? c(t.value)
            : t.hasAttribute("content") && ("META" === t.nodeName || t.hasAttribute("itemprop"))
            ? c(t.getAttribute("content"))
            : "UL" === t.nodeName
            ? (0, n.map)(t.querySelectorAll("li"), (t) => t.innerText).join(" / ")
            : 1 === t.childNodes.length && 3 === t.childNodes[0].nodeType
            ? c(t.childNodes[0].nodeValue) ?? ""
            : u(t)
          : "";
      }
      function u(t) {
        if (3 === t.nodeType) return t.textContent;
        if (t?.offsetHeight && t.offsetWidth) {
          let e = "";
          for (const r of t.childNodes) e += u(r);
          return c(e);
        }
        return "";
      }
      const d = {
        brand: [
          { selector: "[itemprop=brand],[itemprop=brand]>[itemprop=name],[itemprop=Brand],[itemprop=manufacturer]" },
          { selector: "[data-brand]", attribute: "data-brand" },
          { selector: ".productBrand" },
          { selector: "[class*=BrandName]" }
        ],
        title: [{ selector: "[itemprop=name]" }, { selector: "#productTitle" }],
        sku: [
          { selector: "[itemprop=productID]", attribute: "content" },
          { selector: "#sku-value", attribute: "content" }
        ],
        breadcrumb: [{ selector: "[itemprop=breadcrumb]" }],
        description: [{ selector: "[itemprop=description]" }, { selector: ".product-info" }, { selector: ".itemDesc" }],
        price: [{ selector: "[itemprop=price]" }, { selector: ".product-price" }, { selector: ".price" }],
        url: [{ selector: "[rel=canonical]", attribute: "href" }]
      };
      class p {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (this[e] = t[e]);
        }
        merge(t) {
          if (t)
            for (const e in t)
              if (void 0 === this[e] || "" === this[e]) {
                const r = t[e];
                ((!(0, n.isArray)(r) && void 0 !== r) || ((0, n.isArray)(r) && r.length > 0)) && (this[e] = r);
              }
        }
      }
      class h {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          (this.parsers = e), (this.doc = t);
          const r = "location" in t;
          (this.document = r ? t : t.ownerDocument), (this.window = document.defaultView ?? window);
          const n = document.location;
          (this.url = n.href), (this._domain = document.location.host);
          const o = new p();
          (0 === e.length || e.includes("schema")) && o.merge(this.parseProductSchema(this.doc)),
            r &&
              ((0 === e.length || e.includes("ldjson")) && o.merge(a(this.doc)),
              (0 === e.length || e.includes("og")) && o.merge(this.parseOpenGraphData(this.doc)),
              (0 === e.length || e.includes("generic")) && o.merge(this.getGenericItemData(d)),
              o.url && (o.url = o.url.startsWith("/") ? n.origin + o.url : o.url)),
            (this.product = o);
        }
        parseProductSchema(t) {
          const e = '[itemscope][itemtype*="://schema.org/',
            r = [
              `${e}Product"]`,
              `${e}ProductModel"]`,
              `${e}SomeProducts"]`,
              `${e}IndividualProduct"]`,
              '[vocab*="://schema.org"][typeof="Product"]'
            ];
          function o(e, r) {
            r || (r = t);
            const n = [];
            let o = e.parentNode;
            for (; o !== r; ) {
              const t = o;
              n.push(t), (o = t.parentNode);
            }
            return n.push(r), n;
          }
          const i = new p(),
            a = (function () {
              for (const e of r) {
                const r = t.querySelectorAll(e);
                if (1 === r.length) return r[0];
                if (r.length > 1) {
                  const t = [],
                    e = [];
                  r.forEach((r) => {
                    const n = o(r).length;
                    e.push(n), t.push({ deep: n, el: r });
                  });
                  const i = (0, n.max)(e),
                    a = (0, n.min)(e);
                  if (i !== a) {
                    if (1 === (0, n.reduce)(e, (t, e) => t + (e === i ? 1 : 0), 0)) return (0, n.find)(t, (t) => t.deep === i).el;
                    if (1 === (0, n.reduce)(e, (t, e) => t + (e === a ? 1 : 0), 0)) return (0, n.find)(t, (t) => t.deep === a).el;
                  }
                }
              }
              return null;
            })();
          a &&
            i.merge({
              title: l(a.querySelector("[itemprop=name], [property=name]")),
              description: l(a.querySelector("[itemprop=description], [property=description]")),
              price: l(a.querySelector("[itemprop=price], [property=price]")),
              sku: l(
                a.querySelector("[itemprop=productID],[itemprop=sku],[itemprop=SKU], [property=productID],[property=sku],[property=SKU]")
              ),
              mpn: l(a.querySelector("[itemprop=mpn],[itemprop=MPN], [property=mpn],[property=MPN]")),
              currency: l(a.querySelector("[itemprop=priceCurrency], [property=priceCurrency]")),
              url: l(a.querySelector("[itemprop=url], [property=url]")),
              brand: l(a.querySelector("[itemprop=brand],[itemprop=manufacturer], [property=brand],[property=manufacturer]"))
            });
          const s = t.querySelector(
            '[itemscope][itemtype*="://schema.org/BreadcrumbList"], [vocab*="://schema.org"][typeof="BreadcrumbList"]'
          );
          if (s) {
            const t = s.querySelectorAll("[itemprop=itemListElement], [property=itemListElement]"),
              e = [];
            for (const r of t) {
              const t = r.querySelector("[itemprop=name], [property=name]");
              e.push(l(t));
            }
            e.length > 0 && (i.breadcrumb = e);
          }
          return i;
        }
        parseOpenGraphData(t) {
          const e = "meta[property=";
          if (t.querySelector(`${e}"og:type"][content=Product],${e}"og:type"][content=product],${e}"og:type"][content="og:product"]`)) {
            const r = {
                title: `${e}"og:title"]`,
                description: `${e}"og:description"]`,
                price: `${e}"og:price"],${e}"og:price:amount"],${e}"product:price:amount"]`,
                currency: `${e}"product:price:currency"],${e}"price:currency"]`,
                brand: `${e}"og:brand"],${e}"product:brand"],${e}"product:brand:name"]`,
                upc: `${e}"og:upc"]`,
                url: `${e}"og:url"]`
              },
              n = new p({
                title: l(t.querySelector(r.title)),
                description: l(t.querySelector(r.description)),
                price: l(t.querySelector(r.price)),
                currency: l(t.querySelector(r.currency)),
                brand: l(t.querySelector(r.brand)),
                upc: l(t.querySelector(r.upc))
              }),
              o = l(t.querySelector(r.url));
            return o && /^(http|\/)/.test(o) && (n.url = o), n;
          }
          return null;
        }
        getGenericItemData(t) {
          const e = this.doc;
          function r(t) {
            for (const r of t) {
              const t = s({ container: e, config: r, isArray: !1 });
              if (t) return t;
            }
          }
          return new p({
            title: r(t.title) ?? this.getTitle(),
            price: r(t.price) ?? this.getPrice(),
            currency: "$",
            description: r(t.description),
            sku: r(t.sku),
            brand: r(t.brand),
            breadcrumb: (function (t) {
              let r;
              for (const n of t) if (((r = s({ container: e, config: n, isArray: !0 })), r)) break;
              return (0, n.isString)(r) ? r.split(/\s?-\s?/) : (0, n.isArray)(r) && 1 === r.length ? r[0].split(/\s?-\s?/) : r;
            })(t.breadcrumb),
            url: r(t.url) ?? location.href
          });
        }
        getPrice() {
          const t = new Date().getTime(),
            e = [],
            r = /[1-9]/,
            n = /((?:R?\$|USD|&pound;|&#163;|&#xa3;|\u00A3|&yen;|\uFFE5|&#165;|&#xa5;|\u00A5|eur|&#8364;|&#x20ac;)\s*\d[0-9,.]*)/gi,
            o = /em/,
            i = /^(\s|to|\d|\.|\$|-|,)+$/,
            a = /club|total|price|sale|now|brightred/i,
            s = /soldout|currentlyunavailable|outofstock/i,
            c = /^(h1|h2|h3|b|strong|sale)$/i,
            l = /^a$/i,
            u = /original|header|items|under|cart|more|nav|upsell/i;
          let d,
            p = "",
            h = -1;
          const f = this;
          function m(t) {
            return !["toysrus.com", "babiesrus.com", "walmart.com"].some((e) => new RegExp(`^(?:www.)?${e}`, "i").test(t));
          }
          function b(t) {
            const e = [];
            let r = t;
            for (; r.parentNode; ) e.push(r.parentNode), (r = r.parentNode);
            return e;
          }
          function g(t, e) {
            const r = b(t),
              n = b(e);
            for (const t of r) for (const e of n) if (t === e) return t;
            return null;
          }
          function v(t) {
            const e = f.window.getComputedStyle(t, null);
            return function (t) {
              return e.getPropertyValue(t);
            };
          }
          function y(t, e, n) {
            let s = t.node;
            const d = 3 === s.nodeType && s.parentNode ? s.parentNode : s,
              p = t.price;
            let h = "";
            h = 3 === s.nodeType ? s.data : s.innerText || s.textContent || "";
            let f = 0,
              m = v(d);
            "bold" === m("font-weight") && (f += 1),
              ((d.offsetWidth || d.offsetHeight) && "hidden" !== m("visibility") && "none" !== m("display")) || (f -= 100);
            const b = h.replace(/\s+/g, "");
            r.test(p) || (f -= 100);
            b.replace(/price|our/gi, "").length < 2 * p.length + 4 && (f += 10),
              i.test(b) && (f += 2),
              -1 !== p.indexOf(".") && (f += 2),
              (f += (function (t) {
                let e = t("font-size") || "";
                const r = o.test(e) ? 16 : 1;
                return (e = e.replace(/px|em|pt/, "")), (e -= 0), isNaN(e) ? 0 : e * r;
              })(m)),
              u.test(h) && (f -= 4),
              a.test(h) && f++,
              (s = d);
            let g = 0;
            for (; null !== s && s !== n.body && g++ < 4; ) {
              0 !== g && (m = v(s)), "line-through" === m("text-decoration-line") && (f -= 100);
              for (const t of s.childNodes) 3 === t.nodeType && t.data && (a.test(t.data) && (f += 1), u.test(t.data) && (f -= 1));
              l.test(s.tagName) && (f -= 5),
                a.test(s.getAttribute("class") || s.getAttribute("className") || "") && (f += 1),
                a.test(s.id) && (f += 1),
                c.test(s.tagName) && (f += 1),
                u.test(s.tagName) && (f -= 1),
                u.test(s.id) && (f -= 2),
                u.test(s.getAttribute("class") || s.getAttribute("className") || "") && (f -= 2),
                (s = s.parentNode);
            }
            return f;
          }
          const E = (function (t) {
            const e = {
              acceptNode: () => f.window.NodeFilter.FILTER_ACCEPT,
              FILTER_ACCEPT: 1,
              FILTER_REJECT: 2,
              FILTER_SKIP: 3,
              SHOW_ELEMENT: 1,
              SHOW_ATTRIBUTE: 2,
              SHOW_TEXT: 4,
              SHOW_CDATA_SECTION: 8,
              SHOW_ENTITY_REFERENCE: 16,
              SHOW_ENTITY: 32,
              SHOW_PROCESSING_INSTRUCTION: 64,
              SHOW_COMMENT: 128,
              SHOW_DOCUMENT: 256,
              SHOW_DOCUMENT_TYPE: 512,
              SHOW_DOCUMENT_FRAGMENT: 1024,
              SHOW_NOTATION: 2048,
              SHOW_ALL: 4294967295
            };
            return t.createTreeWalker(t.body, f?.window.NodeFilter.SHOW_TEXT, e);
          })(this.document);
          for (; E.nextNode() && e.length < 100; ) {
            if (e.length % 100 == 0 && new Date().getTime() - t > 1500) return;
            const r = E.currentNode;
            let o = r.data.replace(/\s/g, "");
            n.lastIndex = 0;
            let i = o.match(n);
            if ((h < 0 && s.test(o) && m(this._domain) && (h = e.length), i)) {
              if (i[0].match(/\.$/g) && E.nextNode()) {
                const t = E.currentNode;
                if (t?.data) {
                  let e = t.data.replace(/\s/g, "");
                  e && isNaN(e) && (e = "00"), (i[0] += e);
                }
              } else i[0].match(/,$/g) && (i[0] = i[0].substring(0, i[0].length - 1));
              e.push({ node: r, price: i[0] }), (o = "");
            } else if ("" !== p && "" !== o && ((i = (p + o).match(n)), i)) {
              const t = g(d, r);
              e.push({ node: t, price: i[0] });
            }
            (d = r), (p = o);
          }
          let k,
            w,
            S = 0,
            _ = 0;
          for (let t = 0; t < e.length; t++) {
            const r = y(e[t], 0, this.document);
            (e[t].score = r),
              t < h && r > 0 && (_ = 1),
              void 0 === k || r > k ? ((k = e[t].score), (w = e[t]), (S = 1)) : e[t].score === k && e[t].price !== w?.price && S++;
          }
          if (w && 1 === S && (h < 0 || _)) return w.price;
        }
        getTitle() {
          if ("title" in this.doc) {
            const t = this.doc.title;
            (0, n.isString)(t) && c(t);
          }
          return "";
        }
        extract() {
          return (
            this.product.currency && (this.product.currency = this.product.currency.replace("USD", "$")),
            this.product.price && (this.product.price = this.product.price.toString().replace(".00", "").replace("$", "")),
            this.product.description && (this.product.description = this.product.description.slice(0, 100)),
            this.product
          );
        }
      }
      var f = r(5939),
        m = r.n(f),
        b = r(1271),
        g = r.n(b),
        v = r(3564),
        y = r.n(v);
      function E(t) {
        if (!t || 0 === t.length) return "";
        if (t.length > 1) return t.text();
        const e = Number.isFinite(t.length) ? t[0] : t;
        return e
          ? "IMG" === e.nodeName || "IFRAME" === e.nodeName
            ? e.src
            : "INPUT" === e.nodeName
            ? e.value
            : "META" === e.nodeName || (e.hasAttribute("itemprop") && e.hasAttribute("content"))
            ? e.getAttribute("content") ?? ""
            : e.textContent ?? ""
          : "";
      }
      function k(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
          r = "";
        const o = t.selector ? g()(t.selector, e) : g()(e);
        if (((r = t.attribute ? o.attr(t.attribute) ?? "" : t.join && o.length ? (0, n.map)(o, (t) => E(t)).join(t.join) : E(o)), t.exists))
          return r ? "Y" : "N";
        const i = t.rx || t.pattern;
        if (r && i) {
          const t = r.replace(/\n/g, "").match(i);
          r = t?.pop() ?? "";
        }
        return (a = r) ? a.replace(/\s\s+|[\r\n]+/g, " ").trim() : "";
        var a;
      }
      function w(t, e, r) {
        return (function t(o) {
          const i = {};
          for (const a in o)
            if (Object.prototype.hasOwnProperty.call(o, a)) {
              const s = o[a];
              Array.isArray(s)
                ? (i[a] = (0, n.map)(t(s), null)[0])
                : (i[a] = "string" == typeof s ? s.replace(/%(\w+)/g, (t, r) => e[r] || "") : k(s, r));
            }
          return (0, n.omit)(i, (t) => "" === t || (0, n.isUndefined)(t));
        })(t);
      }
      function S(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e4;
        return new Promise((r, o) => {
          const i = (0, n.debounce)(() => {
              const e = g()(t);
              e.length > 0 && (window.clearInterval(s), r(e));
            }, 10),
            a = new MutationObserver(i);
          a.observe(document.documentElement, { attributes: !1, childList: !0, subtree: !0 });
          const s = window.setTimeout(() => {
            a.disconnect(), o();
          }, e);
          i();
        });
      }
      const _ = "product-not-found";
      function C(t) {
        function e(t) {
          if ("string" == typeof t && t.startsWith("%")) return !0;
          if (Array.isArray(t)) for (const r of t) if (e(r)) return !0;
          return !1;
        }
        const r = Object.keys(t);
        for (const n of r) {
          if (e(t[n])) return !0;
        }
        return !1;
      }
      const T = class extends m() {
        urlChangeTimeout = null;
        parsedData = {};
        constructor(t) {
          let { config: e } = t;
          super(),
            (this.config = e),
            (this.Parsers = {
              "Google Shopping": (t, e) =>
                new Promise((r, n) => {
                  if (document.location.href.search("/specs") < 0) {
                    const t = `//${location.host}${location.pathname}/specs`;
                    g()
                      .get(t)
                      .done((t) => {
                        const n = new DOMParser();
                        r(w(this.config.searchProducts, e, n.parseFromString(t, "text/html")));
                      })
                      .fail(n);
                  } else r(t);
                })
            });
        }
        observe(t) {
          if (!t) throw new Error("document is required");
          this.checkTriggers();
        }
        observeUrlChange() {
          if (this.urlChangeTimeout) return;
          let t = location.href;
          this.urlChangeTimeout = window.setInterval(() => {
            t !== location.href && ((t = location.href), this.emit("urlchange"));
          }, 500);
        }
        checkTriggers() {
          const t = this.config.delay || 2e3,
            e = [].concat(this.config.trigger || { delay: t }),
            r = (0, n.throttle)(() => {
              this.parse();
            }, 500);
          e.forEach((e) => {
            "urlchange" === e
              ? (setTimeout(r, t),
                this.observeUrlChange(),
                this.on("urlchange", () => {
                  setTimeout(r, t);
                }))
              : e.waitFor
              ? S(e.waitFor, 3e4).finally(r)
              : e.delay && setTimeout(r, e.delay);
          });
        }
        validateMatchPattern() {
          return !this.config.matchPattern || location.href.search(this.config.matchPattern) >= 0;
        }
        parseCommonParameters(t) {
          return new h(t).extract();
        }
        parseCustomParameters(t, e) {
          let r;
          return (
            (this.parsedData = t),
            this.config
              ? (r = this.config.searchProducts ? w(this.config.searchProducts, this.parsedData, e) : this.parsedData)
              : ((this.parsedData.salePrice = this.parsedData.price),
                (this.parsedData.brandName = this.parsedData.brand),
                (r = (0, n.pick)(this.parsedData, "salePrice", "title", "brandName", "mpn", "upc", "sku"))),
            r
          );
        }
        normalizeParameters(t) {
          return t.salePrice && (t.salePrice = y().unformat(t.salePrice)), t;
        }
        async parse() {
          const t = (t) =>
            new Promise((e) => {
              this.Parsers[this.config.storeName] ? this.Parsers[this.config.storeName](t, this.parsedData).then((t) => e(t)) : e(t);
            });
          if (!this.validateMatchPattern()) return void this.emit(_, { config: this.config });
          const e = [],
            r = this.config.container ? Array.prototype.slice.call(document.querySelectorAll(this.config.container), 0) : [document];
          for (const n of r) {
            let r = {};
            (this.config.searchProducts && !C(this.config.searchProducts)) || (r = this.parseCommonParameters(n));
            let o = this.parseCustomParameters(r, n);
            if (0 === Object.keys(o).length) return void this.emit(_, { config: this.config, container: n });
            o = await t(o);
            const i = this.normalizeParameters(o);
            e.push({ product: i, container: n }), this.emit("product-found", { product: i, config: this.config, container: n });
          }
          e.length > 0 && this.config.container && this.emit("products-found", { products: e, config: this.config });
        }
      };
    },
    2001: (t, e, r) => {
      function n(t) {
        let { attribute: e = "data-focus-visible-added", className: r = "focus-visible" } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = !0,
          o = !1,
          i = null,
          a = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
          };
        function s(t) {
          return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList);
        }
        function c(t) {
          t.classList.contains(r) || (t.classList.add(r), t.setAttribute(e, ""));
        }
        function l(t) {
          n = !1;
        }
        function u() {
          document.addEventListener("mousemove", d),
            document.addEventListener("mousedown", d),
            document.addEventListener("mouseup", d),
            document.addEventListener("pointermove", d),
            document.addEventListener("pointerdown", d),
            document.addEventListener("pointerup", d),
            document.addEventListener("touchmove", d),
            document.addEventListener("touchstart", d),
            document.addEventListener("touchend", d);
        }
        function d(t) {
          (t.target.nodeName && "html" === t.target.nodeName.toLowerCase()) ||
            ((n = !1),
            document.removeEventListener("mousemove", d),
            document.removeEventListener("mousedown", d),
            document.removeEventListener("mouseup", d),
            document.removeEventListener("pointermove", d),
            document.removeEventListener("pointerdown", d),
            document.removeEventListener("pointerup", d),
            document.removeEventListener("touchmove", d),
            document.removeEventListener("touchstart", d),
            document.removeEventListener("touchend", d));
        }
        document.addEventListener(
          "keydown",
          function (e) {
            e.metaKey || e.altKey || e.ctrlKey || (s(t.activeElement) && c(t.activeElement), (n = !0));
          },
          !0
        ),
          document.addEventListener("mousedown", l, !0),
          document.addEventListener("pointerdown", l, !0),
          document.addEventListener("touchstart", l, !0),
          document.addEventListener(
            "visibilitychange",
            function (t) {
              "hidden" === document.visibilityState && (o && (n = !0), u());
            },
            !0
          ),
          u(),
          t.addEventListener(
            "focus",
            function (t) {
              s(t.target) &&
                (n ||
                  (function (t) {
                    let e = t.type,
                      r = t.tagName;
                    return !("INPUT" !== r || !a[e] || t.readOnly) || ("TEXTAREA" === r && !t.readOnly) || !!t.isContentEditable;
                  })(t.target)) &&
                c(t.target);
            },
            !0
          ),
          t.addEventListener(
            "blur",
            function (t) {
              var n;
              s(t.target) &&
                (t.target.classList.contains(r) || t.target.hasAttribute(e)) &&
                ((o = !0),
                window.clearTimeout(i),
                (i = window.setTimeout(function () {
                  o = !1;
                }, 100)),
                (n = t.target).hasAttribute(e) && (n.classList.remove(r), n.removeAttribute(e)));
            },
            !0
          ),
          t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host
            ? t.host.setAttribute("data-js-focus-visible", "")
            : t.nodeType === Node.DOCUMENT_NODE &&
              (document.documentElement.classList.add("js-focus-visible"),
              document.documentElement.setAttribute("data-js-focus-visible", ""));
      }
      r.d(e, { Z: () => n });
    },
    8870: (t, e, r) => {
      r.r(e);
      var n = r(4615),
        o = r(2001),
        i = r(1953),
        a = r.n(i),
        s = function () {
          var t = this,
            e = t._self._c;
          return t.visible
            ? e("settings-form", { attrs: { settings: t.settings, account: t.account, browser: t.browser, urls: t.urls } })
            : t._e();
        };
      s._withStripped = !0;
      var c = r(8051),
        l = r(2506),
        u = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "settings-panel rr-text-primary rr-flex rr-pa-48 rr-rounded-ui rr-shadow-default rr-mx-auto" },
            [
              e("r-logo", { staticClass: "rr-mr-32", attrs: { variant: "icon", alt: "" } }),
              e("div", [
                e("h1", { staticClass: "rr-t-descriptor-m rr-mb-8 rr-mt-0" }, [t._v(" Rakuten Cash Back Button Settings ")]),
                t.account.accessLevel
                  ? e(
                      "div",
                      { staticClass: "rr-t-descriptor-s rr-fw-book" },
                      [
                        e("label", { attrs: { id: "signedInId", for: "login-link" } }, [
                          t._v(" You are signed in as "),
                          e("span", { attrs: { "aria-label": `email starts with ${t.account.emailAddress.charAt(0)}` } }, [
                            e("strong", { attrs: { "aria-hidden": "true" } }, [t._v(t._s(t.account.emailAddress))])
                          ])
                        ]),
                        e(
                          "r-link",
                          {
                            staticClass: "rr-ml-16",
                            attrs: {
                              id: "login-link",
                              "aria-describedby": "signedInId",
                              "aria-label": "Not you? Open Rakuten sign in page"
                            },
                            on: { click: t.login }
                          },
                          [t._v(" Not You? ")]
                        ),
                        t.account.isHardDeleteRequested
                          ? e("div", {
                              staticClass: "pending-deletion",
                              domProps: { innerHTML: t._s(t.pendingDeletionTemplate) },
                              on: { click: t.clickHtml }
                            })
                          : e(
                              "div",
                              { staticClass: "rr-flex rr-flex-col rr-items-start" },
                              [
                                e(
                                  "div",
                                  { staticClass: "switch-grid rr-my-32" },
                                  [
                                    e(
                                      "label",
                                      { staticClass: "rr-t-descriptor-s" },
                                      [
                                        e("span", { attrs: { "aria-hidden": "true" } }, [
                                          t._v("Turn off Cash Back activation reminders for")
                                        ]),
                                        e(
                                          "r-button",
                                          {
                                            staticClass: "rr-inline",
                                            staticStyle: { padding: "0", height: "16px" },
                                            attrs: {
                                              "aria-haspopup": "dialog",
                                              "aria-label": "Modify sites list with Cash Back activation reminders turned off",
                                              variant: "tertiary"
                                            },
                                            on: { click: t.showDialog }
                                          },
                                          [t._v(" these sites ")]
                                        )
                                      ],
                                      1
                                    ),
                                    e(
                                      "div",
                                      [
                                        e("r-switch", {
                                          attrs: { ariaLabel: "Turn off Cash Back activation reminders for added sites" },
                                          model: {
                                            value: t.blacklistEnabledModel,
                                            callback: function (e) {
                                              t.blacklistEnabledModel = e;
                                            },
                                            expression: "blacklistEnabledModel"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    "granted" === t.settings.notificationsEnabled
                                      ? [
                                          e("label", { staticClass: "rr-t-descriptor-s", attrs: { for: "showDesktopNotifications" } }, [
                                            t._v(" Show desktop notifications ")
                                          ]),
                                          e(
                                            "div",
                                            [
                                              e("r-switch", {
                                                attrs: { id: "showDesktopNotifications" },
                                                model: {
                                                  value: t.desktopNotificationsModel,
                                                  callback: function (e) {
                                                    t.desktopNotificationsModel = e;
                                                  },
                                                  expression: "desktopNotificationsModel"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      : t._e(),
                                    e("label", { staticClass: "rr-t-descriptor-s", attrs: { for: "purchaseConfirmations" } }, [
                                      t._v(" Show order confirmations after purchase ")
                                    ]),
                                    e(
                                      "div",
                                      [
                                        e("r-switch", {
                                          attrs: { id: "purchaseConfirmations" },
                                          model: {
                                            value: t.postPurchaseMessageModel,
                                            callback: function (e) {
                                              t.postPurchaseMessageModel = e;
                                            },
                                            expression: "postPurchaseMessageModel"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    t.isAbandonedProductsReminderActive
                                      ? e("label", { staticClass: "rr-t-descriptor-s", attrs: { for: "abandonedProductsReminder" } }, [
                                          t._v(" Show reminders for items left in your cart ")
                                        ])
                                      : t._e(),
                                    t.isAbandonedProductsReminderActive
                                      ? e(
                                          "div",
                                          [
                                            e("r-switch", {
                                              attrs: { id: "abandonedProductsReminder" },
                                              model: {
                                                value: t.abandonedProductsReminderModel,
                                                callback: function (e) {
                                                  t.abandonedProductsReminderModel = e;
                                                },
                                                expression: "abandonedProductsReminderModel"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : t._e(),
                                    "Firefox" === t.browser
                                      ? [
                                          t._m(0),
                                          e(
                                            "div",
                                            [
                                              e("r-switch", {
                                                attrs: { id: "collectPersonalData", trueValue: "opt_in", falseValue: "opt_out" },
                                                model: {
                                                  value: t.loggingModel,
                                                  callback: function (e) {
                                                    t.loggingModel = e;
                                                  },
                                                  expression: "loggingModel"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      : t._e(),
                                    "Firefox" === t.browser
                                      ? [
                                          t._m(1),
                                          e(
                                            "div",
                                            [
                                              e("r-switch", {
                                                attrs: { id: "collectPerformanceData", trueValue: "opt_in", falseValue: "opt_out" },
                                                model: {
                                                  value: t.anonymousLoggingModel,
                                                  callback: function (e) {
                                                    t.anonymousLoggingModel = e;
                                                  },
                                                  expression: "anonymousLoggingModel"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      : t._e()
                                  ],
                                  2
                                ),
                                e("r-link", { staticClass: "rr-mb-32", on: { click: t.advertUrlClick } }, [
                                  t._v(" Ad Disclosure / How We Make Money ")
                                ]),
                                t.attestationEnabled
                                  ? e("r-link", { staticClass: "rr-mb-32", on: { click: t.ppClick } }, [
                                      t._v(" Do Not Sell or Share My Personal Information / Personal Data Opt-out ")
                                    ])
                                  : t._e(),
                                e("r-link", { staticClass: "rr-mb-32", on: { click: t.deleteAccountClick } }, [
                                  t._v(" Delete My Data or Delete My Account ")
                                ])
                              ],
                              1
                            )
                      ],
                      1
                    )
                  : e(
                      "div",
                      { staticClass: "rr-t-descriptor-s rr-fw-book rr-mb-32" },
                      [
                        t._v(" Please sign in to view your settings "),
                        e("r-link", { staticClass: "rr-ml-16", on: { click: t.login } }, [t._v(" Sign In ")])
                      ],
                      1
                    )
              ]),
              e(
                "transition",
                { attrs: { name: "rr-fade" } },
                [
                  t.showBlackListDialog
                    ? e("black-list-dialog", {
                        attrs: { blacklist: t.blacklist },
                        on: {
                          "update:blacklist": function (e) {
                            t.blacklist = e;
                          },
                          clickCTA: t.blacklistUpdate,
                          close: function (e) {
                            t.showBlackListDialog = !1;
                          }
                        }
                      })
                    : t._e()
                ],
                1
              )
            ],
            1
          );
        };
      u._withStripped = !0;
      var d = r(4835),
        p = r(9525),
        h = r(9442),
        f = r(1939),
        m = r(3124),
        b = r(6846),
        g = r(7573),
        v = r(696),
        y = function () {
          var t = this,
            e = t._self._c;
          return e(
            "r-modal-form",
            {
              staticClass: "exclusion-list-dialog",
              attrs: {
                position: "center",
                headerLogo: "none",
                width: "520px",
                "aria-modal": "true",
                "aria-labelledby": "popupTopic",
                closeLabel: "Dismiss Exclusion List Dialog"
              },
              on: { close: t.clickClose },
              nativeOn: {
                keyup: function (e) {
                  return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                    ? null
                    : t.clickClose.apply(null, arguments);
                }
              }
            },
            [
              e(
                "div",
                { staticClass: "rr-flex rr-flex-col rr-items-center" },
                [
                  e("h1", { staticClass: "rr-t-desktop-banner-s rr-mb-32 rr-mt-0", attrs: { id: "popupTopic" } }, [
                    t._v(" Exclusion List ")
                  ]),
                  e("div", [
                    e("div", { staticClass: "rr-t-body rr-text-left", attrs: { id: "textAreaDescription" } }, [
                      t._v(" Please copy & paste URLs of sites you would like to exclude, one per line: ")
                    ]),
                    e("textarea", {
                      directives: [{ name: "model", rawName: "v-model", value: t.blacklistModel, expression: "blacklistModel" }],
                      ref: "textarea",
                      staticClass: "black-list-text",
                      attrs: { "aria-labelledby": "textAreaDescription", tabindex: "0" },
                      domProps: { value: t.blacklistModel },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.blacklistModel = e.target.value);
                        }
                      }
                    })
                  ]),
                  e("r-button", { staticClass: "rr-mt-32", attrs: { size: "large" }, on: { click: t.saveBlackList } }, [t._v(" Save ")])
                ],
                1
              )
            ]
          );
        };
      y._withStripped = !0;
      const E = {
        name: "SettingsBlackList",
        components: { RModalForm: r(1868).Z, RButton: b.Z },
        props: { blacklist: { type: Array, default: () => [] } },
        data() {
          return { blacklistData: this.blacklist };
        },
        computed: {
          blacklistModel: {
            get() {
              return this.blacklist.join("\n");
            },
            set(t) {
              return (
                "string" == typeof t ? (this.blacklistData = t.split(/[,;\n ]+/)) : Array.isArray(t) && (this.blacklistData = t),
                this.blacklistData
              );
            }
          }
        },
        mounted() {
          this.$refs.textarea.focus();
        },
        methods: {
          closeDialog() {
            this.$emit("close");
          },
          saveBlackList() {
            this.$emit("update:blacklist", this.blacklistData), this.$emit("clickCTA"), this.closeDialog();
          },
          clickClose() {
            this.closeDialog();
          }
        }
      };
      var k = r(2264);
      const w = {
        name: "SettingsForm",
        components: {
          BlackListDialog: (0, k.Z)(E, y, [], !1, null, null, null).exports,
          RButton: b.Z,
          RLogo: g.Z,
          RSwitch: m.Z,
          RLink: v.Z
        },
        props: {
          settings: { type: Object, required: !0 },
          account: { type: Object, required: !0 },
          urls: { type: Object, default: () => ({}) },
          browser: { type: String, default: "Chrome" }
        },
        data() {
          return { showBlackListDialog: !1, blacklist: this.settings.blacklist };
        },
        computed: {
          advertUrl() {
            return this.substitute(this.urls.WEB_ADVERTISING_DISCLOSURE);
          },
          attestationEnabled() {
            return this.settings.featureFlags.attestation && this.account?.isAttestationEligible;
          },
          pendingDeletionTemplate() {
            return (0, p.Z)(this.settings.pendingDeletionTemplate);
          },
          isAbandonedProductsReminderActive() {
            return this.settings.featureFlags.cartAbandonmentToast;
          },
          blacklistEnabledModel: {
            get() {
              return this.settings.blacklistEnabled;
            },
            set(t) {
              this.toggle("blacklistEnabled", t);
            }
          },
          loggingModel: {
            get() {
              return this.settings.logging;
            },
            set(t) {
              this.toggle("logging", t);
            }
          },
          anonymousLoggingModel: {
            get() {
              return this.settings.anonymousLogging;
            },
            set(t) {
              this.toggle("anonymousLogging", t);
            }
          },
          postPurchaseMessageModel: {
            get() {
              return this.settings.postPurchaseMessage;
            },
            set(t) {
              this.toggle("postPurchaseMessage", t);
            }
          },
          abandonedProductsReminderModel: {
            get() {
              return this.settings.abandonedProductsReminder;
            },
            set(t) {
              this.toggle("abandonedProductsReminder", t),
                h.Z.track("Click Module", {
                  module_type: "Cart Abandonment Notification",
                  entity_name: "Settings Page",
                  cta_type: t ? "turn on" : "turn off"
                });
            }
          },
          desktopNotificationsModel: {
            get() {
              return this.settings.desktopNotifications.cashBack;
            },
            set(t) {
              this.toggle("desktopNotifications.cashBack", t);
            }
          }
        },
        methods: {
          login() {
            (0, c.Z)("login", { name: "getLogonForm" });
          },
          substitute(t) {
            return t.replace(/%domain%?/g, this.settings.domain).replace(/%ebtoken%?/g, this.account.ebToken);
          },
          toggle(t, e) {
            t && (0, c.Z)("settings", { [t]: e });
          },
          clickHtml(t) {
            const e = (t) => (t && t !== this.$el ? ("A" === t.tagName && t.hasAttribute("data-href") ? t : e(t.parentNode)) : null);
            this.clickNode(e(t.target));
          },
          clickNode(t) {
            if (!t) return;
            const e = t.getAttribute("data-href");
            e && (0, f.Z)(this.substitute(e));
          },
          showDialog() {
            this.showBlackListDialog = !this.showBlackListDialog;
          },
          blacklistUpdate() {
            (0, c.Z)("blacklist-save", (0, d.compact)(this.blacklist));
          },
          advertUrlClick() {
            (0, f.Z)(this.advertUrl);
          },
          ppClick() {
            const t =
                "certified-yes" === this.account.attestationStatus ? this.urls.WEB_PRIVACY_PREFERENCES : this.urls.WEB_DESKTOP_ATTESTATION,
              e = this.substitute(t).replace("ebtoken=undefined&", "");
            h.Z.track("Visit Page", { preceding_screen_name: "Settings Page", url: e }), (0, f.Z)(e);
          },
          deleteAccountClick() {
            const t = this.substitute(this.urls.WEB_PRIVACY_PREFERENCES);
            h.Z.track("Visit Page", { preceding_screen_name: "Settings Page", url: t }), (0, f.Z)(t);
          }
        }
      };
      const S = {
        name: "SettingsView",
        components: {
          SettingsForm: (0, k.Z)(
            w,
            u,
            [
              function () {
                var t = this,
                  e = t._self._c;
                return e(
                  "label",
                  { staticClass: "rr-t-descriptor-s rr-fw-book", attrs: { for: "collectPersonalData", "aria-hidden": "true" } },
                  [
                    e("strong", [t._v("Can we collect the following personal data from your use of the application:")]),
                    e("br"),
                    t._v(
                      " Unique personal identifier, IP address, pages viewed, browsing history, and purchase history so we can personalize your experience on the Rakuten and confirm your cash back faster and more reliably. "
                    )
                  ]
                );
              },
              function () {
                var t = this,
                  e = t._self._c;
                return e(
                  "label",
                  { staticClass: "rr-t-descriptor-s rr-fw-book", attrs: { for: "collectPerformanceData", "aria-hidden": "true" } },
                  [
                    e("strong", [t._v("Can we collect the following performance data about your use of the application:")]),
                    e("br"),
                    t._v(
                      " Date and time of use and browser type and version so we could identify performance issues and troubleshoot errors. "
                    )
                  ]
                );
              }
            ],
            !1,
            null,
            null,
            null
          ).exports
        },
        data: () => ({ browser: n.Z.browser.name, showBlackListDialog: !1, account: {}, settings: {}, visible: !1 }),
        computed: { urls: () => l.ZP },
        async created() {
          ([this.settings, this.account] = await Promise.all([(0, c.Z)("settings"), (0, c.Z)("account")])),
            (this.account = this.account || {}),
            (this.visible = !0);
        }
      };
      const _ = (0, k.Z)(S, s, [], !1, null, null, null).exports;
      n.Z.browser.isSafari && (0, o.Z)(document), new (a())({ el: "#settings-root", render: (t) => t(_) });
    },
    2506: (t, e, r) => {
      r.d(e, { Jb: () => o, ZP: () => n });
      const n = {
          CDN: "https://static.rakuten.com",
          member_api: "www.rakuten.com",
          domain: "www.rakuten.com",
          api: "apituner.ecbsn.com",
          search_api: "search.ecbsn.com",
          BASE: "https://%domain%",
          STORES: "https://%api%/apituner/button/domain/entity/list",
          STORE_REWARDS: "https://%api%/apituner/v1/store/reward/list?channel={channel}",
          STORE_DEALS_COUNT: "https://%api%/apituner/button/store/deal/count",
          DEALS: "https://%api%/apituner/button/store/deal/list",
          STORE_DEALS: "https://%api%/apituner/button/store/deal/list?storeId={storeId}",
          STORE_COUPONS: "https://api.rakuten.com/button-acs/stores/{storeId}/coupons",
          STORE_CONTENT: "https://%api%/apituner/button/store/content?id={storeId}",
          CAMPAIGNS: "https://%api%/apituner/button/campaign/list",
          EDS: "https://%api%/apituner/eds/member/profile",
          GIFT_CARD: "https://%domain%/api/gift-cards/catalog/product/%giftCardProductCode",
          ABANDONED_PRODUCTS: "https://cas.rrcbsn.com/cart_abandonment/v1/members/%uid%/products",
          MEMBER_DETAILS: "https://%member_api%/api/v3/button/member",
          MEMBER_ACTIVITY: "https://%member_api%/api/v3/button/member/activity",
          MEMBER_GEOGATING: "https://%member_api%/geogating/v1/checkStatus.do",
          MEMBER_FAVORITES: "https://%member_api%/api/v3/button/member/favorite/stores",
          MEMBER_VISITED: "https://%member_api%/api/v3/button/member/store/visited",
          MEMBER_PURCHASED: "https://%member_api%/api/v3/button/member/store/purchased",
          MEMBER_TICKETS: "https://%member_api%/api/v3/button/member/trackingticket/list",
          MEMBER_BONUSES: "https://%member_api%/api/v3/button/member/bonus/list",
          MEMBER_ACTIVATE_BONUS: "https://%member_api%/api/v3/button/member/bonus/activate",
          MEMBER_ONE_RECEIPTS: "https://%member_api%/api/v3/button/member/receipts/list",
          MEMBER_ISCB: "https://%member_api%/api/v3/button/member/instore/offers/available",
          MEMBER_ISCB_LINKED: "https://%member_api%/api/v3/button/member/instore/offers/linked",
          MEMBER_UDPATE_TCPP: "https://%member_api%/api/v3/button/member/tcpp/update",
          MEMBER_UDPATE_ATTRIBUTE: "https://%member_api%/api/v3/button/member/attributes/update",
          MEMBER_TAF: "https://%member_api%/api/v3/button/member/referral/program",
          PRICE_MAGIC: "https://search.ecbsn.com/search/price-magic/v1/similar-products?partnerId=1&sourceName=Toolbar",
          PRICE_MAGIC_BULK: "https://search.ecbsn.com/search/price-magic/v1/bulk-products?sourceName=Toolbar",
          SIMILAR_STORES: "https://%api%/apituner/similar-stores/v1_0",
          CAPTURE_ORDER: "https://capture.ecbsn.com/api/1.0/commercecapture",
          URL_SHORTENER: "https://%domain%/urlshortener/v1/urls",
          SETTINGS: "https://%member_api%/toolbar/config/settings.json",
          SETTINGS_PM: "https://%member_api%/toolbar/config/pm_stores.json",
          SETTINGS_COUPONS: "https://%member_api%/toolbar/config/coupons.json",
          SETTINGS_PRODUCTS: "https://%member_api%/toolbar/config/products.json",
          SETTINGS_MERCHANTS: "https://button.rrcbsn.com/settings/merchants.json",
          SETTINGS_SERP: "https://button.rrcbsn.com/settings/serp.json",
          SETTINGS_PROMOS: "https://button.rrcbsn.com/settings/promos.json",
          WEB_INSTALL: "https://%domain%/button/%browser/install/success?sourceName=toolbar&eeid=45426&toolbarId=%userid",
          WEB_LOGON_FORM: "https://%domain%/auth/getLogonForm.do?tb=yes&eeid=26118",
          WEB_LOGIN: "https://%domain%/button/user-auth.htm?tb=yes&auth_type=su&sourceName=toolbar",
          WEB_UNINSTALL: "https://%domain%/button/uninstall.htm?tb=yes&toolbarId=%userid&v=%version",
          WEB_MOBILE_EXTENSION: "rakuten://us/beo?url=https://%domain%/button/mobile/enable&autologin=true",
          WEB_SEARCH: "https://%domain%/search?term={terms}&tb=yes&ebtoken=%ebtoken",
          WEB_REWARDS: "https://%domain%/pending-cash-back.htm?tb=yes&ebtoken=%ebtoken&eeid=26117",
          WEB_CASHBACK: "https://%domain%/cash-back-history.htm?tb=yes&ebtoken=%ebtoken&eeid=26117",
          WEB_HOME: "https://%domain%/?tb=yes&ebtoken=%ebtoken&eeid=26117",
          WEB_REFERRAL: "https://%domain%/referral/default.do?tb=yes&ebtoken=%ebtoken",
          WEB_TC: "https://%domain%/referral/default.do?tb=yes&ebtoken=%ebtoken#taf-tc",
          WEB_HELP: "https://%domain%/help/section/rakuten-cash-back-button-360003084134?tb=yes",
          WEB_PRIVACY_PREFERENCES: "https://%domain%/privacy-preferences.htm?tb=yes&ebtoken=%ebtoken&eeid=46021",
          WEB_DESKTOP_ATTESTATION: "https://%domain%/?showAttestation=true&tb=yes&ebtoken=%ebtoken&eeid=46021",
          WEB_ADVERTISING_DISCLOSURE:
            "https://%domain%/help/article/advertising-disclosure-360001940028?tb=yes&ebtoken=%ebtoken&eeid=26117",
          WEB_REFERRAL_TERMS: "https://%domain%/help/article/referral-program-terms-360002101348?tb=yes&ebtoken=%ebtoken&eeid=61594",
          WEBSTORE_SAFARI: "https://itunes.apple.com/app/apple-store/id1451893560?pt=117880184&mt=12&ls=1",
          WEBSTORE_FIREFOX: "https://addons.mozilla.org/en-US/firefox/addon/ebates/reviews/add",
          WEBSTORE_EDGE: "https://microsoftedge.microsoft.com/addons/detail/gmmlpenookphoknnpfilofakghemolmg",
          WEBSTORE_CHROME: "https://chrome.google.com/webstore/detail/ebates-cash-back/chhjbpecpncaggjpdakmflnfcopglcmi/reviews",
          POPUP_SEARCH: "https://%search_api%/store/list/suggest?q={terms}&rows=25&start=0"
        },
        o = "https://api.engager.ecbsn.com";
    },
    3650: (t, e, r) => {
      function n(t) {
        if (t && !t.startsWith("data:")) {
          const e =
            /(?:https?:\/\/)?(?:\w+:\/)?[^:?#/\s]*?([^.\s]+\.(?:[a-z]{2,}|co\.uk|org\.uk|ac\.uk|org\.au|com\.au))(?:[:?#/]|$)/gi.exec(t);
          return e ? e[1].toLowerCase() : null;
        }
        return null;
      }
      r.d(e, { g: () => n });
    },
    9525: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = r(2324),
        o = r.n(n);
      function i(t) {
        return o()(t, {
          allowedTags: [
            "a",
            "b",
            "br",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "i",
            "img",
            "p",
            "span",
            "tr",
            "td",
            "ol",
            "li",
            "ul",
            "strong"
          ],
          allowedAttributes: {
            "*": [
              "alt",
              "aria-*",
              "class",
              "data-*",
              "disabled",
              "height",
              "href",
              "id",
              "loading",
              "name",
              "placeholder",
              "role",
              "src",
              "style",
              "tabindex",
              "target",
              "type",
              "value",
              "width"
            ]
          }
        });
      }
    },
    6402: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = r(4615);
      const o = 3e3;
      function i() {
        let { node: t = document.head, name: e = [] } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const r = new Map(),
          n = [].concat(e);
        return (
          r.has("content") || r.set("content", a("content", t)),
          r.has("fonts") || r.set("fonts", a("fonts")),
          n.forEach((e) => {
            r.has(e) || r.set(e, a(e, t));
          }),
          Promise.all(Array.from(r.values()))
        );
      }
      async function a() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "content",
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.head;
        const r = `rr-style-${t.replace(/[/\\]/, "-")}`,
          i = { file: `${t}/style.css` };
        return (
          n.Z.browser.isSafariApp && (i.baseURI = safari.extension.baseURI),
          new Promise((s) => {
            if (e) {
              if (e.querySelector(`#${r}`)) return void s(null);
              n.Z.extension.fireEvent("getContent", { data: i }).then((t) => {
                const n = document.createElement("style");
                n.setAttribute("id", r);
                const i = document.createTextNode(t);
                n.appendChild(i), e.appendChild(n), n.addEventListener("load", s), setTimeout(s, o);
              });
            } else
              setTimeout(() => {
                a(t);
              }, 10);
          })
        );
      }
    },
    8051: (t, e, r) => {
      r.d(e, { Z: () => o });
      var n = r(4615);
      function o(t, e, r) {
        return n.Z.extension.fireEvent(t, { data: e }, r);
      }
    },
    9649: (t, e, r) => {
      r.d(e, { $: () => o });
      var n = r(4615);
      function o(t) {
        return n.Z.extension.getURL(n.Z.browser.isSafariApp ? `extension/${t}` : t);
      }
    },
    636: (t, e, r) => {
      r.d(e, { TN: () => C, By: () => S, PI: () => N, ej: () => k, Ay: () => _, O8: () => T, rO: () => R, CO: () => A, IA: () => w });
      var n = r(1271),
        o = r.n(n),
        i = r(4835),
        a = r(4615),
        s = r(6402),
        c = r(2001),
        l = r(3650);
      const u = "react-root",
        d = "[data-emotion]";
      function p(t) {
        return t.querySelector(`#${u}`)?.shadowRoot?.querySelectorAll(d);
      }
      var h = function () {
        var t = this,
          e = t._self._c;
        t._self._setupProxy;
        return e(
          "a",
          { attrs: { id: "rr-skip-link", href: "javascript: void(0)" }, on: { click: t.skipLinkAction, keypress: t.skipLinkAction } },
          [t._v("Skip to Rakuten Reminder")]
        );
      };
      h._withStripped = !0;
      var f = r(1953);
      const m = r
        .n(f)()
        .extend({
          async mounted() {
            await (0, s.Z)(), document.body && document.body.prepend(this.$el);
          },
          beforeDestroy() {
            document.body && document.body.removeChild(this.$el);
          },
          methods: {
            skipLinkAction() {
              const t = _();
              if (t) {
                const e = t.querySelector("[tabindex]");
                e && e.focus();
              }
            }
          }
        });
      const b = (0, r(2264).Z)(m, h, [], !1, null, null, null).exports;
      r(5526);
      const g = new Map();
      let v = 10;
      const y = "function" == typeof HTMLElement.prototype.attachShadow;
      let E = null;
      function k(t) {
        const e = document.cookie.match(new RegExp(`(?:^|; )${t.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`));
        return e ? decodeURIComponent(e[1]) : null;
      }
      function w(t) {
        return t.trim().replace(/\u2019/g, "'");
      }
      async function S() {
        let {
            parentNode: t = document.documentElement,
            waitStyles: e = !0,
            styles: r = [],
            top: n = !1,
            insertConfig: o = null
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          u = g.get(t);
        if (!u) {
          let e;
          const r = document.createElement("div");
          let s = r;
          const d = (0, l.g)(location.href);
          let h = null;
          const f = self.EBATES.settings?.featureFlags.injectionMode?.random;
          if (
            (Array.isArray(f) && f.includes(d) && y && ((h = document.createElement("div")), (s = h), r.appendChild(h)),
            (u = s),
            s.setAttribute("style", "all: initial !important;"),
            y)
          ) {
            const e = self.EBATES.settings?.featureFlags.injectionMode?.closed,
              r = Array.isArray(e) && e.includes(d);
            r && (t = document.body);
            const n = r ? "closed" : "open";
            (u = s.attachShadow({ mode: n })), a.Z.browser.isSafari && (0, c.Z)(u, { className: "rr-focus-visible" });
          }
          o ? T({ el: r, config: o, parent: t }) : t.appendChild(r),
            n &&
              ((e = new MutationObserver(
                (0, i.debounce)(() => {
                  if (t.contains(r) && t.childNodes[t.childNodes.length - 1] !== r && v >= 0) {
                    v--;
                    const e = (function (t) {
                      const e = p(t),
                        r = [];
                      return (
                        e &&
                          r.push(
                            ...Array.from(e).map((t) => {
                              let { sheet: e } = t;
                              return Array.from(e?.cssRules ?? []).map((t) => t.cssText);
                            })
                          ),
                        r
                      );
                    })(u);
                    t.removeChild(r),
                      t.appendChild(r),
                      (function (t, e) {
                        const r = p(t);
                        r &&
                          e.forEach((t, e) => {
                            t.forEach((t) => {
                              r[e].sheet?.insertRule(t);
                            });
                          });
                      })(u, e);
                  }
                }, 500)
              )),
              e.observe(t, { attributes: !1, childList: !0, subtree: !1 }));
          const m = new MutationObserver(
            (0, i.debounce)(() => {
              u.querySelector(":not(style)") ||
                (m.disconnect(), r.parentNode?.removeChild(r), g.delete(t), E && (E.$destroy(), (E = null)), e && e.disconnect());
            }, 5e3)
          );
          m.observe(u, { attributes: !1, childList: !0, subtree: !1 }), g.set(t, u);
        }
        return e ? await (0, s.Z)({ node: u, name: r }) : (0, s.Z)({ node: u, name: r }), u;
      }
      function _() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.documentElement;
        return g.get(t);
      }
      function C() {
        g.forEach((t) => {
          if (t) for (; t.firstChild; ) t.removeChild(t.lastChild);
        });
      }
      function T(t) {
        let { el: e, config: r, parent: n = document } = t;
        return r["insert-before"]
          ? o()(e).insertBefore(o()(r["insert-before"], n)).get(0)
          : r["insert-after"]
          ? o()(e).insertAfter(o()(r["insert-after"], n)).get(0)
          : r["prepend-to"]
          ? o()(e).prependTo(o()(r["prepend-to"], n)).get(0)
          : r["append-to"]
          ? o()(e).appendTo(o()(r["append-to"], n)).get(0)
          : r.before
          ? o()(r.before, n).before(o()(e)).get(0)
          : r.after
          ? o()(r.before, n).after(o()(e)).get(0)
          : void 0;
      }
      function N() {
        self.EBATES.settings?.featureFlags.skipLink && (E = new b().$mount());
      }
      function R() {
        return (
          !!/^https:\/\/www.google.com/.test(location.href) &&
          "dark" === document.querySelector('meta[name="color-scheme"]')?.getAttribute("content")
        );
      }
      function A() {
        return -1 !== location.pathname.search(/[\\/]popup[\\/]popup.html/);
      }
    },
    1939: (t, e, r) => {
      r.d(e, { Z: () => o });
      var n = r(4615);
      function o(t, e) {
        return n.Z.browser.navigate(t, e);
      }
    },
    9442: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = r(8051),
        o = r(636);
      const i = {
        getAnonymousId: () => (0, n.Z)("segment.anonymousId"),
        track(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = (0, o.CO)() ? "popup/popup.html" : `${location.protocol}//${location.host}${location.pathname}`;
          return (0, n.Z)("segment.track", { event: t, parameters: { url: r, ...e } });
        }
      };
    },
    8355: (t, e) => {
      e.Nm = e.Rq = void 0;
      var r = /^([^\w]*)(javascript|data|vbscript)/im,
        n = /&#(\w+)(^\w|;)?/g,
        o = /&(newline|tab);/gi,
        i = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
        a = /^.+(:|&colon;)/gim,
        s = [".", "/"];
      (e.Rq = "about:blank"),
        (e.Nm = function (t) {
          if (!t) return e.Rq;
          var c,
            l = ((c = t),
            c.replace(i, "").replace(n, function (t, e) {
              return String.fromCharCode(e);
            }))
              .replace(o, "")
              .replace(i, "")
              .trim();
          if (!l) return e.Rq;
          if (
            (function (t) {
              return s.indexOf(t[0]) > -1;
            })(l)
          )
            return l;
          var u = l.match(a);
          if (!u) return l;
          var d = u[0];
          return r.test(d) ? e.Rq : l;
        });
    },
    2264: (t, e, r) => {
      function n(t, e, r, n, o, i, a, s) {
        var c,
          l = "function" == typeof t ? t.options : t;
        if (
          (e && ((l.render = e), (l.staticRenderFns = r), (l._compiled = !0)),
          n && (l.functional = !0),
          i && (l._scopeId = "data-v-" + i),
          a
            ? ((c = function (t) {
                (t =
                  t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a);
              }),
              (l._ssrRegister = c))
            : o &&
              (c = s
                ? function () {
                    o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          c)
        )
          if (l.functional) {
            l._injectStyles = c;
            var u = l.render;
            l.render = function (t, e) {
              return c.call(e), u(t, e);
            };
          } else {
            var d = l.beforeCreate;
            l.beforeCreate = d ? [].concat(d, c) : [c];
          }
        return { exports: t, options: l };
      }
      r.d(e, { Z: () => n });
    },
    6846: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = function () {
        var t = this;
        return (0, t._self._c)(
          "button",
          {
            staticClass: "r-button",
            class: t.classes,
            style: t.style,
            attrs: { id: t.id, role: t.role, tabindex: "0", disabled: t.disabled, "data-inverse": t.isInverse },
            on: { click: t.click }
          },
          [t._t("default")],
          2
        );
      };
      n._withStripped = !0;
      const o = {
        name: "RButton",
        props: {
          block: { type: Boolean, default: !1 },
          isInverse: { type: Boolean, default: !1 },
          color: { type: String, default: "" },
          disabled: Boolean,
          size: { type: String, default: "medium", validator: (t) => ["small", "medium", "large"].includes(t) },
          variant: { type: String, default: "primary", validator: (t) => ["primary", "secondary", "tertiary"].includes(t) },
          role: { type: String, default: "button" },
          id: { type: String, default: null }
        },
        emits: ["click"],
        computed: {
          classes() {
            return { [`r-button--${this.size}`]: !0, "r-button--block": this.block, ...this.colorClasses };
          },
          colorClasses() {
            return ["secondary", "tertiary"].includes(this.variant) ? { [`rr-${this.variant}`]: !0 } : { "rr-primary": !0 };
          },
          style() {
            const t = {};
            return (
              this.color && this.isCssColor(this.color) && (t["background-color"] = this.color),
              ["primary", "secondary"].includes(this.variant) && (t["border-radius"] = "100px"),
              t
            );
          }
        },
        methods: {
          click(t) {
            this.$emit("click", t);
          },
          isCssColor: (t) => t && t.match(/^(#|var\(--|(rgb|hsl)a?\()/)
        }
      };
      const i = (0, r(2264).Z)(o, n, [], !1, null, null, null).exports;
    },
    2977: (t, e, r) => {
      r.d(e, { Z: () => s });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "r-icon-button",
          {
            staticClass: "rr-focus--inside",
            style: t.style,
            attrs: { size: t.size, flat: "", rounded: !1, "aria-label": t.label, tabindex: "0" },
            on: {
              click: function (e) {
                return e.stopPropagation(), t.$emit("click", e);
              }
            }
          },
          [e("exit-icon", { attrs: { size: t.iconSize } })],
          1
        );
      };
      n._withStripped = !0;
      var o = r(2737),
        i = r(3669);
      const a = {
        components: { ExitIcon: o.Z, RIconButton: i.Z },
        props: {
          color: { type: String, default: "#575757" },
          size: { type: String, default: "44px" },
          iconSize: { type: String, default: "16px" },
          label: { type: String, default: "Close" },
          position: { type: String, default: "absolute" }
        },
        computed: {
          style() {
            return {
              color: this.isCssColor(this.color) ? this.color : "#575757",
              position: this.position,
              ...("absolute" === this.position ? { zIndex: 1e5, top: 0, right: 0 } : {})
            };
          }
        },
        methods: { isCssColor: (t) => t && t.match(/^(#|var\(--|(rgb|hsl)a?\()/) }
      };
      const s = (0, r(2264).Z)(a, n, [], !1, null, null, null).exports;
    },
    1183: (t, e, r) => {
      r.d(e, { Z: () => s });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "aside",
          {
            staticClass: "rr-modal-form",
            class: t.positionClasses,
            style: t.style,
            attrs: { role: t.role, "aria-label": t.label, tabindex: "-1" }
          },
          [
            t.flat
              ? t._e()
              : [
                  t.arrow
                    ? e("div", { staticClass: "rr-popover__arrow", style: t.arrowStyle, attrs: { "data-popper-arrow": "" } })
                    : t._e(),
                  t.disableCloseButton
                    ? t._e()
                    : e("r-close-button", {
                        attrs: { label: t.closeLabel },
                        on: {
                          click: function (e) {
                            return t.$emit("close", e);
                          }
                        }
                      }),
                  "left" === t.headerLogo
                    ? e(
                        "div",
                        { staticClass: "rr-modal-form__header rr-flex rr-flex-col rr-justify-center" },
                        [e("r-heading-logo", { staticClass: "rr-ml-24" })],
                        1
                      )
                    : "center" === t.headerLogo
                    ? e(
                        "div",
                        { staticClass: "rr-modal-form__header rr-flex rr-flex-col rr-items-center" },
                        [e("r-heading-logo", { staticClass: "rr-mt-32" })],
                        1
                      )
                    : t._e()
                ],
            e("div", { class: t.paddingClasses }, [t._t("default")], 2),
            t._t("banner")
          ],
          2
        );
      };
      n._withStripped = !0;
      var o = r(2977),
        i = r(7138);
      const a = {
        components: { RCloseButton: o.Z, RHeadingLogo: i.Z },
        props: {
          width: { type: [Number, String], default: "304" },
          disableCloseButton: { type: Boolean, default: !1 },
          closeLabel: { type: String, default: "Dismiss Rakuten Cash Back message" },
          padding: { type: String, default: "large" },
          position: { type: [String, Object], default: () => "top-right" },
          headerLogo: { type: String, default: "center" },
          arrow: { type: Boolean, default: !1 },
          flat: { type: Boolean, default: !1 },
          backgroundColor: { type: String, default: "white" },
          backgroundStyle: { type: String, default: "" },
          label: { type: String, default: "Rakuten Cash Back" },
          role: { type: String, default: "dialog" }
        },
        computed: {
          style() {
            const t = { width: this.width && "auto" !== this.width ? this.convertToUnit(this.width) : null, ...this.positionStyle };
            return (
              this.backgroundStyle
                ? (t.background = this.backgroundStyle)
                : this.backgroundColor && (t.backgroundColor = this.backgroundColor),
              t
            );
          },
          arrowStyle() {
            return { backgroundColor: this.backgroundColor };
          },
          paddingClasses() {
            return !this.flat && ["grande", "medium", "large", "xlarge", "xxlarge"].includes(this.padding)
              ? {
                  [`rr-modal-form--padding-${this.padding}`]: !0,
                  [`rr-modal-form--padding-top-${this.padding}`]: "none" === this.headerLogo
                }
              : {};
          },
          positionClasses() {
            return "string" == typeof this.position && ["center", "top-right"].includes(this.position)
              ? { [`rr-modal-form--${this.position}`]: !0 }
              : {};
          },
          positionStyle() {
            return "object" == typeof this.position ? this.position : {};
          }
        },
        methods: {
          convertToUnit(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px";
            return null === t || "" === t ? null : isNaN(+t) ? String(t) : `${Number(t)}${e}`;
          }
        }
      };
      const s = (0, r(2264).Z)(a, n, [], !1, null, null, null).exports;
    },
    1868: (t, e, r) => {
      r.d(e, { Z: () => j });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            e(
              "r-form",
              {
                attrs: {
                  width: t.width,
                  disableCloseButton: t.disableCloseButton,
                  closeLabel: t.closeLabel,
                  label: t.label,
                  padding: t.padding,
                  position: t.position,
                  headerLogo: t.headerLogo,
                  backgroundStyle: t.backgroundStyle,
                  role: t.role,
                  enableFocusTrap: t.enableFocusTrap,
                  flat: t.flat
                },
                on: {
                  close: function (e) {
                    return t.$emit("close", e);
                  }
                }
              },
              [t._t("default")],
              2
            ),
            e("div", { staticClass: "r-modal-backdrop" })
          ],
          1
        );
      };
      n._withStripped = !0;
      var o = r(1183),
        i = [
          "input:not([inert])",
          "select:not([inert])",
          "textarea:not([inert])",
          "a[href]:not([inert])",
          "button:not([inert])",
          "[tabindex]:not(slot):not([inert])",
          "audio[controls]:not([inert])",
          "video[controls]:not([inert])",
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          "details>summary:first-of-type:not([inert])",
          "details:not([inert])"
        ],
        a = i.join(","),
        s = "undefined" == typeof Element,
        c = s
          ? function () {}
          : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        l =
          !s && Element.prototype.getRootNode
            ? function (t) {
                var e;
                return null == t || null === (e = t.getRootNode) || void 0 === e ? void 0 : e.call(t);
              }
            : function (t) {
                return null == t ? void 0 : t.ownerDocument;
              },
        u = function t(e, r) {
          var n;
          void 0 === r && (r = !0);
          var o = null == e || null === (n = e.getAttribute) || void 0 === n ? void 0 : n.call(e, "inert");
          return "" === o || "true" === o || (r && e && t(e.parentNode));
        },
        d = function (t, e, r) {
          if (u(t)) return [];
          var n = Array.prototype.slice.apply(t.querySelectorAll(a));
          return e && c.call(t, a) && n.unshift(t), (n = n.filter(r));
        },
        p = function t(e, r, n) {
          for (var o = [], i = Array.from(e); i.length; ) {
            var s = i.shift();
            if (!u(s, !1))
              if ("SLOT" === s.tagName) {
                var l = s.assignedElements(),
                  d = t(l.length ? l : s.children, !0, n);
                n.flatten ? o.push.apply(o, d) : o.push({ scopeParent: s, candidates: d });
              } else {
                c.call(s, a) && n.filter(s) && (r || !e.includes(s)) && o.push(s);
                var p = s.shadowRoot || ("function" == typeof n.getShadowRoot && n.getShadowRoot(s)),
                  h = !u(p, !1) && (!n.shadowRootFilter || n.shadowRootFilter(s));
                if (p && h) {
                  var f = t(!0 === p ? s.children : p.children, !0, n);
                  n.flatten ? o.push.apply(o, f) : o.push({ scopeParent: s, candidates: f });
                } else i.unshift.apply(i, s.children);
              }
          }
          return o;
        },
        h = function (t) {
          return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
        },
        f = function (t) {
          if (!t) throw new Error("No node provided");
          return t.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) ||
              (function (t) {
                var e,
                  r = null == t || null === (e = t.getAttribute) || void 0 === e ? void 0 : e.call(t, "contenteditable");
                return "" === r || "true" === r;
              })(t)) &&
            !h(t)
            ? 0
            : t.tabIndex;
        },
        m = function (t, e) {
          return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
        },
        b = function (t) {
          return "INPUT" === t.tagName;
        },
        g = function (t) {
          return (
            (function (t) {
              return b(t) && "radio" === t.type;
            })(t) &&
            !(function (t) {
              if (!t.name) return !0;
              var e,
                r = t.form || l(t),
                n = function (t) {
                  return r.querySelectorAll('input[type="radio"][name="' + t + '"]');
                };
              if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape)
                e = n(window.CSS.escape(t.name));
              else
                try {
                  e = n(t.name);
                } catch (t) {
                  return !1;
                }
              var o = (function (t, e) {
                for (var r = 0; r < t.length; r++) if (t[r].checked && t[r].form === e) return t[r];
              })(e, t.form);
              return !o || o === t;
            })(t)
          );
        },
        v = function (t) {
          var e = t.getBoundingClientRect(),
            r = e.width,
            n = e.height;
          return 0 === r && 0 === n;
        },
        y = function (t, e) {
          var r = e.displayCheck,
            n = e.getShadowRoot;
          if ("hidden" === getComputedStyle(t).visibility) return !0;
          var o = c.call(t, "details>summary:first-of-type") ? t.parentElement : t;
          if (c.call(o, "details:not([open]) *")) return !0;
          if (r && "full" !== r && "legacy-full" !== r) {
            if ("non-zero-area" === r) return v(t);
          } else {
            if ("function" == typeof n) {
              for (var i = t; t; ) {
                var a = t.parentElement,
                  s = l(t);
                if (a && !a.shadowRoot && !0 === n(a)) return v(t);
                t = t.assignedSlot ? t.assignedSlot : a || s === t.ownerDocument ? a : s.host;
              }
              t = i;
            }
            if (
              (function (t) {
                var e,
                  r,
                  n,
                  o,
                  i = t && l(t),
                  a = null === (e = i) || void 0 === e ? void 0 : e.host,
                  s = !1;
                if (i && i !== t)
                  for (
                    s = !!(
                      (null !== (r = a) && void 0 !== r && null !== (n = r.ownerDocument) && void 0 !== n && n.contains(a)) ||
                      (null != t && null !== (o = t.ownerDocument) && void 0 !== o && o.contains(t))
                    );
                    !s && a;

                  ) {
                    var c, u, d;
                    s = !(
                      null === (u = a = null === (c = i = l(a)) || void 0 === c ? void 0 : c.host) ||
                      void 0 === u ||
                      null === (d = u.ownerDocument) ||
                      void 0 === d ||
                      !d.contains(a)
                    );
                  }
                return s;
              })(t)
            )
              return !t.getClientRects().length;
            if ("legacy-full" !== r) return !0;
          }
          return !1;
        },
        E = function (t, e) {
          return !(
            e.disabled ||
            u(e) ||
            (function (t) {
              return b(t) && "hidden" === t.type;
            })(e) ||
            y(e, t) ||
            (function (t) {
              return (
                "DETAILS" === t.tagName &&
                Array.prototype.slice.apply(t.children).some(function (t) {
                  return "SUMMARY" === t.tagName;
                })
              );
            })(e) ||
            (function (t) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
                for (var e = t.parentElement; e; ) {
                  if ("FIELDSET" === e.tagName && e.disabled) {
                    for (var r = 0; r < e.children.length; r++) {
                      var n = e.children.item(r);
                      if ("LEGEND" === n.tagName) return !!c.call(e, "fieldset[disabled] *") || !n.contains(t);
                    }
                    return !0;
                  }
                  e = e.parentElement;
                }
              return !1;
            })(e)
          );
        },
        k = function (t, e) {
          return !(g(e) || f(e) < 0 || !E(t, e));
        },
        w = function (t) {
          var e = parseInt(t.getAttribute("tabindex"), 10);
          return !!(isNaN(e) || e >= 0);
        },
        S = function t(e) {
          var r = [],
            n = [];
          return (
            e.forEach(function (e, o) {
              var i = !!e.scopeParent,
                a = i ? e.scopeParent : e,
                s = (function (t, e) {
                  var r = f(t);
                  return r < 0 && e && !h(t) ? 0 : r;
                })(a, i),
                c = i ? t(e.candidates) : a;
              0 === s ? (i ? r.push.apply(r, c) : r.push(a)) : n.push({ documentOrder: o, tabIndex: s, item: e, isScope: i, content: c });
            }),
            n
              .sort(m)
              .reduce(function (t, e) {
                return e.isScope ? t.push.apply(t, e.content) : t.push(e.content), t;
              }, [])
              .concat(r)
          );
        },
        _ = function (t, e) {
          if (((e = e || {}), !t)) throw new Error("No node provided");
          return !1 !== c.call(t, a) && k(e, t);
        },
        C = i.concat("iframe").join(","),
        T = function (t, e) {
          if (((e = e || {}), !t)) throw new Error("No node provided");
          return !1 !== c.call(t, C) && E(e, t);
        };
      function N(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(r), !0).forEach(function (e) {
                A(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      function A(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != typeof t || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != typeof n) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        );
      }
      var O = function (t, e) {
          if (t.length > 0) {
            var r = t[t.length - 1];
            r !== e && r.pause();
          }
          var n = t.indexOf(e);
          -1 === n || t.splice(n, 1), t.push(e);
        },
        x = function (t, e) {
          var r = t.indexOf(e);
          -1 !== r && t.splice(r, 1), t.length > 0 && t[t.length - 1].unpause();
        },
        P = function (t) {
          return "Tab" === (null == t ? void 0 : t.key) || 9 === (null == t ? void 0 : t.keyCode);
        },
        L = function (t) {
          return P(t) && !t.shiftKey;
        },
        D = function (t) {
          return P(t) && t.shiftKey;
        },
        I = function (t) {
          return setTimeout(t, 0);
        },
        B = function (t, e) {
          var r = -1;
          return (
            t.every(function (t, n) {
              return !e(t) || ((r = n), !1);
            }),
            r
          );
        },
        M = function (t) {
          for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
          return "function" == typeof t ? t.apply(void 0, r) : t;
        },
        F = function (t) {
          return t.target.shadowRoot && "function" == typeof t.composedPath ? t.composedPath()[0] : t.target;
        },
        $ = [],
        Z = function (t, e) {
          var r,
            n = (null == e ? void 0 : e.document) || document,
            o = (null == e ? void 0 : e.trapStack) || $,
            i = R({ returnFocusOnDeactivate: !0, escapeDeactivates: !0, delayInitialFocus: !0, isKeyForward: L, isKeyBackward: D }, e),
            a = {
              containers: [],
              containerGroups: [],
              tabbableGroups: [],
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              delayInitialFocusTimer: void 0,
              recentNavEvent: void 0
            },
            s = function (t, e, r) {
              return t && void 0 !== t[e] ? t[e] : i[r || e];
            },
            c = function (t, e) {
              var r = "function" == typeof (null == e ? void 0 : e.composedPath) ? e.composedPath() : void 0;
              return a.containerGroups.findIndex(function (e) {
                var n = e.container,
                  o = e.tabbableNodes;
                return (
                  n.contains(t) ||
                  (null == r ? void 0 : r.includes(n)) ||
                  o.find(function (e) {
                    return e === t;
                  })
                );
              });
            },
            l = function (t) {
              var e = i[t];
              if ("function" == typeof e) {
                for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                e = e.apply(void 0, o);
              }
              if ((!0 === e && (e = void 0), !e)) {
                if (void 0 === e || !1 === e) return e;
                throw new Error("`".concat(t, "` was specified but was not a node, or did not return a node"));
              }
              var s = e;
              if ("string" == typeof e && !(s = n.querySelector(e)))
                throw new Error("`".concat(t, "` as selector refers to no known node"));
              return s;
            },
            u = function () {
              var t = l("initialFocus");
              if (!1 === t) return !1;
              if (void 0 === t || !T(t, i.tabbableOptions))
                if (c(n.activeElement) >= 0) t = n.activeElement;
                else {
                  var e = a.tabbableGroups[0];
                  t = (e && e.firstTabbableNode) || l("fallbackFocus");
                }
              if (!t) throw new Error("Your focus-trap needs to have at least one focusable element");
              return t;
            },
            h = function () {
              if (
                ((a.containerGroups = a.containers.map(function (t) {
                  var e = (function (t, e) {
                      var r;
                      return (
                        (r = (e = e || {}).getShadowRoot
                          ? p([t], e.includeContainer, {
                              filter: k.bind(null, e),
                              flatten: !1,
                              getShadowRoot: e.getShadowRoot,
                              shadowRootFilter: w
                            })
                          : d(t, e.includeContainer, k.bind(null, e))),
                        S(r)
                      );
                    })(t, i.tabbableOptions),
                    r = (function (t, e) {
                      return (e = e || {}).getShadowRoot
                        ? p([t], e.includeContainer, { filter: E.bind(null, e), flatten: !0, getShadowRoot: e.getShadowRoot })
                        : d(t, e.includeContainer, E.bind(null, e));
                    })(t, i.tabbableOptions),
                    n = e.length > 0 ? e[0] : void 0,
                    o = e.length > 0 ? e[e.length - 1] : void 0,
                    a = r.find(function (t) {
                      return _(t);
                    }),
                    s = r
                      .slice()
                      .reverse()
                      .find(function (t) {
                        return _(t);
                      }),
                    c = !!e.find(function (t) {
                      return f(t) > 0;
                    });
                  return {
                    container: t,
                    tabbableNodes: e,
                    focusableNodes: r,
                    posTabIndexesFound: c,
                    firstTabbableNode: n,
                    lastTabbableNode: o,
                    firstDomTabbableNode: a,
                    lastDomTabbableNode: s,
                    nextTabbableNode: function (t) {
                      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = e.indexOf(t);
                      return o < 0
                        ? n
                          ? r.slice(r.indexOf(t) + 1).find(function (t) {
                              return _(t);
                            })
                          : r
                              .slice(0, r.indexOf(t))
                              .reverse()
                              .find(function (t) {
                                return _(t);
                              })
                        : e[o + (n ? 1 : -1)];
                    }
                  };
                })),
                (a.tabbableGroups = a.containerGroups.filter(function (t) {
                  return t.tabbableNodes.length > 0;
                })),
                a.tabbableGroups.length <= 0 && !l("fallbackFocus"))
              )
                throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
              if (
                a.containerGroups.find(function (t) {
                  return t.posTabIndexesFound;
                }) &&
                a.containerGroups.length > 1
              )
                throw new Error(
                  "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
                );
            },
            m = function t(e) {
              var r = e.activeElement;
              if (r) return r.shadowRoot && null !== r.shadowRoot.activeElement ? t(r.shadowRoot) : r;
            },
            b = function t(e) {
              !1 !== e &&
                e !== m(document) &&
                (e && e.focus
                  ? (e.focus({ preventScroll: !!i.preventScroll }),
                    (a.mostRecentlyFocusedNode = e),
                    (function (t) {
                      return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select;
                    })(e) && e.select())
                  : t(u()));
            },
            g = function (t) {
              var e = l("setReturnFocus", t);
              return e || (!1 !== e && t);
            },
            v = function (t) {
              var e = t.target,
                r = t.event,
                n = t.isBackward,
                o = void 0 !== n && n;
              (e = e || F(r)), h();
              var s = null;
              if (a.tabbableGroups.length > 0) {
                var u = c(e, r),
                  d = u >= 0 ? a.containerGroups[u] : void 0;
                if (u < 0) s = o ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
                else if (o) {
                  var p = B(a.tabbableGroups, function (t) {
                    var r = t.firstTabbableNode;
                    return e === r;
                  });
                  if (
                    (p < 0 &&
                      (d.container === e || (T(e, i.tabbableOptions) && !_(e, i.tabbableOptions) && !d.nextTabbableNode(e, !1))) &&
                      (p = u),
                    p >= 0)
                  ) {
                    var m = 0 === p ? a.tabbableGroups.length - 1 : p - 1,
                      b = a.tabbableGroups[m];
                    s = f(e) >= 0 ? b.lastTabbableNode : b.lastDomTabbableNode;
                  } else P(r) || (s = d.nextTabbableNode(e, !1));
                } else {
                  var g = B(a.tabbableGroups, function (t) {
                    var r = t.lastTabbableNode;
                    return e === r;
                  });
                  if (
                    (g < 0 &&
                      (d.container === e || (T(e, i.tabbableOptions) && !_(e, i.tabbableOptions) && !d.nextTabbableNode(e))) &&
                      (g = u),
                    g >= 0)
                  ) {
                    var v = g === a.tabbableGroups.length - 1 ? 0 : g + 1,
                      y = a.tabbableGroups[v];
                    s = f(e) >= 0 ? y.firstTabbableNode : y.firstDomTabbableNode;
                  } else P(r) || (s = d.nextTabbableNode(e));
                }
              } else s = l("fallbackFocus");
              return s;
            },
            y = function (t) {
              var e = F(t);
              c(e, t) >= 0 ||
                (M(i.clickOutsideDeactivates, t)
                  ? r.deactivate({ returnFocus: i.returnFocusOnDeactivate })
                  : M(i.allowOutsideClick, t) || t.preventDefault());
            },
            C = function (t) {
              var e = F(t),
                r = c(e, t) >= 0;
              if (r || e instanceof Document) r && (a.mostRecentlyFocusedNode = e);
              else {
                var n;
                t.stopImmediatePropagation();
                var o = !0;
                if (a.mostRecentlyFocusedNode)
                  if (f(a.mostRecentlyFocusedNode) > 0) {
                    var s = c(a.mostRecentlyFocusedNode),
                      l = a.containerGroups[s].tabbableNodes;
                    if (l.length > 0) {
                      var d = l.findIndex(function (t) {
                        return t === a.mostRecentlyFocusedNode;
                      });
                      d >= 0 &&
                        (i.isKeyForward(a.recentNavEvent)
                          ? d + 1 < l.length && ((n = l[d + 1]), (o = !1))
                          : d - 1 >= 0 && ((n = l[d - 1]), (o = !1)));
                    }
                  } else
                    a.containerGroups.some(function (t) {
                      return t.tabbableNodes.some(function (t) {
                        return f(t) > 0;
                      });
                    }) || (o = !1);
                else o = !1;
                o && (n = v({ target: a.mostRecentlyFocusedNode, isBackward: i.isKeyBackward(a.recentNavEvent) })),
                  b(n || a.mostRecentlyFocusedNode || u());
              }
              a.recentNavEvent = void 0;
            },
            N = function (t) {
              if (
                !((e = t),
                ("Escape" !== (null == e ? void 0 : e.key) &&
                  "Esc" !== (null == e ? void 0 : e.key) &&
                  27 !== (null == e ? void 0 : e.keyCode)) ||
                  !1 === M(i.escapeDeactivates, t))
              )
                return t.preventDefault(), void r.deactivate();
              var e;
              (i.isKeyForward(t) || i.isKeyBackward(t)) &&
                (function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  a.recentNavEvent = t;
                  var r = v({ event: t, isBackward: e });
                  r && (P(t) && t.preventDefault(), b(r));
                })(t, i.isKeyBackward(t));
            },
            A = function (t) {
              var e = F(t);
              c(e, t) >= 0 ||
                M(i.clickOutsideDeactivates, t) ||
                M(i.allowOutsideClick, t) ||
                (t.preventDefault(), t.stopImmediatePropagation());
            },
            Z = function () {
              if (a.active)
                return (
                  O(o, r),
                  (a.delayInitialFocusTimer = i.delayInitialFocus
                    ? I(function () {
                        b(u());
                      })
                    : b(u())),
                  n.addEventListener("focusin", C, !0),
                  n.addEventListener("mousedown", y, { capture: !0, passive: !1 }),
                  n.addEventListener("touchstart", y, { capture: !0, passive: !1 }),
                  n.addEventListener("click", A, { capture: !0, passive: !1 }),
                  n.addEventListener("keydown", N, { capture: !0, passive: !1 }),
                  r
                );
            },
            U = function () {
              if (a.active)
                return (
                  n.removeEventListener("focusin", C, !0),
                  n.removeEventListener("mousedown", y, !0),
                  n.removeEventListener("touchstart", y, !0),
                  n.removeEventListener("click", A, !0),
                  n.removeEventListener("keydown", N, !0),
                  r
                );
            },
            j =
              "undefined" != typeof window && "MutationObserver" in window
                ? new MutationObserver(function (t) {
                    t.some(function (t) {
                      return Array.from(t.removedNodes).some(function (t) {
                        return t === a.mostRecentlyFocusedNode;
                      });
                    }) && b(u());
                  })
                : void 0,
            G = function () {
              j &&
                (j.disconnect(),
                a.active &&
                  !a.paused &&
                  a.containers.map(function (t) {
                    j.observe(t, { subtree: !0, childList: !0 });
                  }));
            };
          return (
            (r = {
              get active() {
                return a.active;
              },
              get paused() {
                return a.paused;
              },
              activate: function (t) {
                if (a.active) return this;
                var e = s(t, "onActivate"),
                  r = s(t, "onPostActivate"),
                  o = s(t, "checkCanFocusTrap");
                o || h(), (a.active = !0), (a.paused = !1), (a.nodeFocusedBeforeActivation = n.activeElement), null == e || e();
                var i = function () {
                  o && h(), Z(), G(), null == r || r();
                };
                return o ? (o(a.containers.concat()).then(i, i), this) : (i(), this);
              },
              deactivate: function (t) {
                if (!a.active) return this;
                var e = R(
                  { onDeactivate: i.onDeactivate, onPostDeactivate: i.onPostDeactivate, checkCanReturnFocus: i.checkCanReturnFocus },
                  t
                );
                clearTimeout(a.delayInitialFocusTimer),
                  (a.delayInitialFocusTimer = void 0),
                  U(),
                  (a.active = !1),
                  (a.paused = !1),
                  G(),
                  x(o, r);
                var n = s(e, "onDeactivate"),
                  c = s(e, "onPostDeactivate"),
                  l = s(e, "checkCanReturnFocus"),
                  u = s(e, "returnFocus", "returnFocusOnDeactivate");
                null == n || n();
                var d = function () {
                  I(function () {
                    u && b(g(a.nodeFocusedBeforeActivation)), null == c || c();
                  });
                };
                return u && l ? (l(g(a.nodeFocusedBeforeActivation)).then(d, d), this) : (d(), this);
              },
              pause: function (t) {
                if (a.paused || !a.active) return this;
                var e = s(t, "onPause"),
                  r = s(t, "onPostPause");
                return (a.paused = !0), null == e || e(), U(), G(), null == r || r(), this;
              },
              unpause: function (t) {
                if (!a.paused || !a.active) return this;
                var e = s(t, "onUnpause"),
                  r = s(t, "onPostUnpause");
                return (a.paused = !1), null == e || e(), h(), Z(), G(), null == r || r(), this;
              },
              updateContainerElements: function (t) {
                var e = [].concat(t).filter(Boolean);
                return (
                  (a.containers = e.map(function (t) {
                    return "string" == typeof t ? n.querySelector(t) : t;
                  })),
                  a.active && h(),
                  G(),
                  this
                );
              }
            }).updateContainerElements(t),
            r
          );
        };
      const U = {
        components: { RForm: o.Z },
        props: {
          width: { type: [Number, String], default: "304" },
          disableCloseButton: { type: Boolean, default: !1 },
          closeLabel: { type: String, default: "Dismiss Rakuten Cash Back message" },
          padding: { type: String, default: "large" },
          position: { type: [String, Object], default: () => "center" },
          headerLogo: { type: String, default: "left" },
          backgroundColor: { type: String, default: "white" },
          backgroundStyle: { type: String, default: "" },
          label: { type: String, default: "Rakuten Cash Back" },
          role: { type: String, default: "dialog" },
          enableFocusTrap: { type: Boolean, default: !1 },
          closeOnEsc: { type: Boolean, default: !1 },
          flat: { type: Boolean, default: !1 }
        },
        data: () => ({ focusTrap: null }),
        watch: {
          enableFocusTrap(t) {
            t ? this.focusTrap?.activate() : this.focusTrap?.deactivate();
          }
        },
        mounted() {
          this.createFocusTrap(), this.closeOnEsc && document.addEventListener("keydown", this.keyHandler, !1);
        },
        destroyed() {
          this.focusTrap && this.focusTrap.deactivate(), this.closeOnEsc && document.removeEventListener("keydown", this.keyHandler, !1);
        },
        methods: {
          async createFocusTrap() {
            const t = document.activeElement;
            await this.$nextTick(),
              (this.focusTrap = Z(this.$el, { initialFocus: this.$el, setReturnFocus: t })),
              this.enableFocusTrap && this.focusTrap.activate();
          },
          keyHandler(t) {
            "Escape" === t.key && (t.stopPropagation(), this.$emit("close", t));
          }
        }
      };
      const j = (0, r(2264).Z)(U, n, [], !1, null, null, null).exports;
    },
    3669: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = function () {
        var t = this;
        return (0, t._self._c)(
          "button",
          {
            staticClass: "r-icon-button rr-focus",
            class: {
              "r-icon-button--shadow": !t.flat,
              "r-icon-button--inverse": t.isInverse,
              "r-icon-button--rounded": t.rounded,
              "rr-focus--rounded": t.rounded
            },
            style: t.style,
            attrs: { role: "button", tabindex: "0" },
            on: {
              click: function (e) {
                return t.$emit("click", e);
              }
            }
          },
          [t._t("default")],
          2
        );
      };
      n._withStripped = !0;
      const o = {
        name: "RButton",
        props: {
          isInverse: { type: Boolean, default: !1 },
          flat: { type: Boolean, default: !1 },
          rounded: { type: Boolean, default: !1 },
          size: { type: [Number, String], default: "32px" }
        },
        emits: ["click"],
        computed: {
          style() {
            return { height: this.size, width: this.size };
          }
        }
      };
      const i = (0, r(2264).Z)(o, n, [], !1, null, null, null).exports;
    },
    2737: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e("svg-icon", t._b({ attrs: { viewBox: "0 0 16 16" } }, "svg-icon", t.$props, !1), [
          e("path", { attrs: { d: "M13.7032 1.07708L15.0506 2.42446L2.47509 15L1.12771 13.6526L13.7032 1.07708Z" } }),
          e("path", { attrs: { d: "M1 2.3474L2.34737 1.00002L14.9228 13.5756L13.5755 14.923L1 2.3474Z" } })
        ]);
      };
      n._withStripped = !0;
      const o = {
        components: { SvgIcon: r(1694).Z },
        props: {
          color: { type: String, default: "currentColor" },
          size: { type: [Number, String], default: 16 },
          rotate: { type: Number, default: 0 }
        }
      };
      const i = (0, r(2264).Z)(o, n, [], !1, null, null, null).exports;
    },
    1694: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = function () {
        var t = this;
        return (0, t._self._c)(
          "svg",
          {
            style: t.style,
            attrs: {
              fill: t.color,
              viewBox: t.viewBox,
              height: t.size,
              width: t.size,
              "aria-hidden": t.ariaHidden,
              "data-testid": t.$parent.$options._componentTag,
              xmlns: "http://www.w3.org/2000/svg"
            }
          },
          [t._t("default")],
          2
        );
      };
      n._withStripped = !0;
      const o = {
        props: {
          color: { type: String, default: "currentColor" },
          size: { type: [String, Number], default: "16" },
          rotate: { type: Number, default: 0 },
          viewBox: { type: String, default: "0 0 16 16" },
          ariaHidden: { type: String, default: "true" }
        },
        computed: {
          style() {
            return { ...(!!this.rotate && { transform: `rotate(${this.rotate}deg)` }), transition: "transform 0.25s" };
          }
        }
      };
      const i = (0, r(2264).Z)(o, n, [], !1, null, null, null).exports;
    },
    696: (t, e, r) => {
      r.d(e, { Z: () => a });
      var n = function () {
        var t = this;
        return (0, t._self._c)(
          t.href ? "a" : "div",
          {
            tag: "component",
            staticClass: "r-link rr-focus",
            attrs: { href: t.sanitizeUrl(t.href), role: "link", tabindex: "0" },
            on: {
              click: t.click,
              keyup: function (e) {
                return !e.type.indexOf("key") &&
                  t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) &&
                  t._k(e.keyCode, "enter", 13, e.key, "Enter")
                  ? null
                  : t.click.apply(null, arguments);
              }
            }
          },
          [t._t("default")],
          2
        );
      };
      n._withStripped = !0;
      var o = r(8355);
      const i = {
        props: { href: { type: String, default: null } },
        emits: ["click"],
        methods: {
          click(t) {
            this.$emit("click", t);
          },
          sanitizeUrl: (t) => (0, o.Nm)(t)
        }
      };
      const a = (0, r(2264).Z)(i, n, [], !1, null, null, null).exports;
    },
    7138: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "h2",
          { staticClass: "rr-ma-0", staticStyle: { "line-height": "0" }, attrs: { "aria-label": "rakuten logo" } },
          [e("r-logo", t._b({}, "r-logo", t.$attrs, !1))],
          1
        );
      };
      n._withStripped = !0;
      const o = { components: { RLogo: r(7573).Z } };
      const i = (0, r(2264).Z)(o, n, [], !1, null, null, null).exports;
    },
    7573: (t, e, r) => {
      r.d(e, { Z: () => a });
      var n = function () {
        var t = this;
        return (0, t._self._c)("img", { style: t.sizeStyle, attrs: { alt: t.alt, src: t.src } });
      };
      n._withStripped = !0;
      var o = r(9649);
      const i = {
        props: {
          variant: { type: String, default: "solid" },
          size: { type: String, default: "medium" },
          height: { type: String, default: "" },
          width: { type: String, default: "" },
          alt: { type: String, default: "" }
        },
        computed: {
          sizeStyle() {
            const t = {};
            return this.height || this.width
              ? (this.height && (t.height = this.height), this.width && (t.width = this.width), t)
              : "xsmall" === this.size
              ? { height: "12px", width: "40px" }
              : "small" === this.size
              ? "icon" === this.variant || "icon-white" === this.variant
                ? { height: "24px", width: "24px" }
                : { height: "18px", width: "60px" }
              : "icon" === this.variant
              ? { height: "40px", width: "40px" }
              : { height: "24px", width: "80px" };
          },
          src() {
            return "solid" === this.variant
              ? (0, o.$)("img/rakuten/logo-rakuten.svg")
              : "white" === this.variant
              ? (0, o.$)("img/rakuten/logo-rakuten-white.svg")
              : "icon-white" === this.variant
              ? (0, o.$)("img/rakuten/icon-rakuten-white.svg")
              : (0, o.$)("img/rakuten/icon-rakuten.svg");
          }
        }
      };
      const a = (0, r(2264).Z)(i, n, [], !1, null, null, null).exports;
    },
    3124: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "r-switch" }, [
          e("input", {
            ref: "input",
            attrs: { id: t.id, type: "checkbox", name: t.name, disabled: t.disabled, required: t.required, "aria-label": t.ariaLabel },
            domProps: { checked: t.isChecked, value: t.value },
            on: { change: t.updateInput }
          }),
          e("div", { staticClass: "state" })
        ]);
      };
      n._withStripped = !0;
      const o = {
        model: { prop: "modelValue", event: "change" },
        props: {
          name: { type: String, default: "" },
          value: { type: String, default: "" },
          modelValue: { type: [String, Boolean], default: !1 },
          trueValue: { type: [String, Boolean], default: !0 },
          falseValue: { type: [String, Boolean], default: !1 },
          disabled: { type: Boolean, default: !1 },
          required: { type: Boolean, default: !1 },
          ariaLabel: { type: String, default: "" },
          id: { type: String, default: "" }
        },
        emits: ["change"],
        data: () => ({ m_checked: null }),
        computed: {
          isChecked() {
            return this.modelValue
              ? this._trueValue
                ? this.modelValue === this.trueValue
                : "string" == typeof this.modelValue || !!this.modelValue
              : !!this.m_checked;
          },
          _trueValue() {
            return "string" == typeof this.trueValue ? this.trueValue : !!this.trueValue;
          },
          _falseValue() {
            return "string" == typeof this.falseValue ? this.falseValue : !!this.falseValue;
          }
        },
        methods: {
          updateInput(t) {
            const e = t.target.checked;
            (this.m_checked = e),
              e ? this.$emit("change", !this._trueValue || this.trueValue) : this.$emit("change", !!this._falseValue && this.falseValue);
          }
        }
      };
      const i = (0, r(2264).Z)(o, n, [], !1, null, null, null).exports;
    }
  },
  (t) => {
    var e,
      r = ((e = 8870), t((t.s = e)));
    source = r;
  }
]);
