(() => {
  var e = {
      526: () => {
        !(function e(t, n, r) {
          function i(o, a) {
            if (!n[o]) {
              if (!t[o]) {
                if (s) return s(o, !0);
                throw new Error("Cannot find module '" + o + "'");
              }
              var u = (n[o] = { exports: {} });
              t[o][0].call(
                u.exports,
                function (e) {
                  var n = t[o][1][e];
                  return i(n || e);
                },
                u,
                u.exports,
                e,
                t,
                n,
                r
              );
            }
            return n[o].exports;
          }
          for (var s = void 0, o = 0; o < r.length; o++) i(r[o]);
          return i;
        })(
          {
            1: [
              function (e, t, n) {
                !(async function () {
                  function e(e) {
                    const t = document.createElement("div");
                    t.setAttribute(
                      "style",
                      "padding: 0; position: fixed; margin: auto; width: 500px; left: 0; right: 0; top: 40%; box-shadow: 10px 5px 30px rgba(0,0,0,0.3);"
                    ),
                      document.body.appendChild(t);
                    const n = document.createElement("style");
                    n.innerText =
                      "\n      .progress {\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: #fafafa;\n        border-radius: .25rem;\n      }\n\n      .progress-bar {\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        color: #fff;\n        text-align: center;\n        white-space: nowrap;\n        background-color: #007bff;\n        transition: width .4s ease;\n      }\n    ";
                    const r = document.createElement("div");
                    r.className = "progress";
                    const i = document.createElement("div"),
                      s = document.createTextNode("0%");
                    (i.className = "progress-bar"), r.appendChild(i), i.appendChild(s), (i.style.width = 0);
                    var o = t.attachShadow({ mode: "open" });
                    o.appendChild(n), o.appendChild(r);
                    let a = 0;
                    return {
                      update() {
                        const t = (++a / e) * 100;
                        var n;
                        (n = Math.round(100 * t) / 100) <= 100 && ((s.data = n + "%"), (i.style.width = n + "%"));
                      },
                      destroy() {
                        t.remove();
                      }
                    };
                  }
                  function n(e, t) {
                    const n = e.style,
                      r = window.getComputedStyle(e, null),
                      i = {};
                    for (const e in n)
                      (s = e), (!isNaN(parseFloat(s)) && isFinite(s)) || !n.hasOwnProperty(e) || (t && !t(e)) || (i[e] = r[e]);
                    var s;
                    return i;
                  }
                  const r = [];
                  function i() {
                    const e = {},
                      t = function (e, t, r) {
                        const i = e instanceof HTMLElement ? n(e) : e,
                          s = t instanceof HTMLElement ? n(t) : t;
                        return Object.entries(i)
                          .filter(([e, t]) => (r ? s[e] !== t : s[e] === t))
                          .reduce((e, [t]) => e.push(t) && e, []);
                      },
                      i = function (e, t, r) {
                        const i = document.createElement(e);
                        t.parentNode.insertBefore(i, t.nextSibling),
                          r &&
                            r(
                              i,
                              (function (e) {
                                const t = window.getComputedStyle(e);
                                return (e) => t.getPropertyValue(e);
                              })(i)
                            );
                        const s = n(i);
                        return i.remove(), s;
                      };
                    return function (n) {
                      const s = n.tagName.toLowerCase();
                      if (!e[s]) {
                        const o = i(s, n),
                          a = i(s, n, (e, t) => {
                            const [, n, r] = t("width").match(/([\d.]+)[\s]?([\w]+)/) || [];
                            e.style.width = n + 100 + r;
                            const [, i, s] = t("height").match(/([\d.]+)[\s]?([\w]+)/) || [];
                            e.style.height = i + 100 + s;
                          });
                        e[s] = [...t(n, o), ...t(o, a, !0)].filter((e) => !r.includes(e));
                      }
                      return e[s];
                    };
                  }
                  const s = ["br", "svg", "script"];
                  async function o() {
                    const t = document.body;
                    let r = t.querySelectorAll("*:not(script):not(br):not(svg)").length;
                    const o = i(),
                      a = (function (e, t) {
                        return document.createNodeIterator(e, 1, t);
                      })(t, (e) => (s.includes(e.nodeName.toLowerCase()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)),
                      u = (function () {
                        const e = document.head.appendChild(document.createElement("style")),
                          t = new Map();
                        e.type = "text/css";
                        let n = 0;
                        return {
                          addClass(r) {
                            const i = JSON.stringify(r);
                            if (!t.has(i)) {
                              const s = document.createElement("div");
                              !(function (e, t) {
                                for (let n in t) e.style[n] = t[n];
                              })(s, r),
                                n++;
                              const o = document.createTextNode(
                                `\n            [data-style-class="${"S_" + n}"] {\n              ${s.getAttribute(
                                  "style"
                                )}\n            }\n          `
                              );
                              e.appendChild(o), t.set(i, "S_" + n);
                            }
                            return t.get(i);
                          }
                        };
                      })(),
                      l = e(r);
                    let c = (function (e, t) {
                      let n;
                      const r = [];
                      for (; (n = e.nextNode()); ) {
                        const e = (e) => () => new Promise((n) => t(e, n));
                        r.push(e(n));
                      }
                      return r;
                    })(a, function (e, t) {
                      if (!e.offsetParent) return t();
                      const r = o(e),
                        i = n(e, (e) => !r.includes(e));
                      if (e.tagName && "img" === e.tagName.toLowerCase()) {
                        const t = e.getBoundingClientRect();
                        (e.width = Math.round(t.width) + "px"), (e.height = Math.round(t.height) + "px");
                      }
                      if (!Object.keys(i).length) return t();
                      !(function (e, t) {
                        e.dataset.styleClass = t;
                      })(e, u.addClass(i)),
                        t();
                    });
                    for (; c.length; ) {
                      const e = c.splice(0, 40);
                      await Promise.all(e.map((e) => e().then(l.update))).then(
                        () =>
                          new Promise((e) => {
                            window.requestAnimationFrame(e);
                          })
                      );
                    }
                    l.destroy();
                  }
                  function a(e) {
                    const t = [...document.querySelectorAll("link")].reduce((e, t) => (t.href && (e[t.href] = t), e), {});
                    let n = new DOMParser().parseFromString(e, "text/html");
                    return (
                      Array.from(n.querySelectorAll("script")).forEach((e) => {
                        e.parentElement.removeChild(e);
                      }),
                      Array.from(n.querySelectorAll("link")).forEach((e) => {
                        if (!e.href || !t[e.href]) return;
                        const n = t[e.href];
                        let r = !1;
                        try {
                          r = n.sheet && n.sheet.cssRules;
                        } catch (e) {
                          r = !1;
                        }
                        if (!r) return;
                        let i,
                          s = "";
                        for (i = 0; i < n.sheet.cssRules.length; ++i) s += n.sheet.cssRules[i].cssText;
                        let o = document.createElement("style");
                        (o.innerText = s), e.parentElement.replaceChild(o, e);
                      }),
                      Array.from(n.querySelectorAll("img")).forEach((e) => {
                        e.src = "";
                      }),
                      n.documentElement.outerHTML
                    );
                  }
                  async function u() {
                    await o();
                  }
                  chrome && chrome.extension
                    ? window.dump_dom_inlined ||
                      (await u(),
                      chrome.runtime.sendMessage({ type: "dump", data: a(document.documentElement.outerHTML) }),
                      (window.dump_dom_inlined = !0))
                    : (t.exports = async () => (window.dump_dom_inlined || (await u()), a(document.documentElement.outerHTML)));
                })();
              },
              {}
            ],
            2: [
              function (e, t, n) {
                var r = {
                  CREDIT_CARD: {
                    CARDHOLDER_NAME: {
                      appliesTo: ["name", "id", "labelText"],
                      re: new RegExp(
                        "card.?(?:holder|owner)|name.*(\\b)?on(\\b)?.*card|(?:card|cc).?name|cc.?full.?name|karteninhaber|nombre.*tarjeta|nom.*carte|nome.*cart|名前|Имя.*карты|信用卡开户名|开户名|持卡人姓名|持卡人姓名",
                        "i"
                      )
                    },
                    CNUM: {
                      appliesTo: ["name", "id", "labelText"],
                      re: new RegExp(
                        "(add)?(?:card|cc|acct).?(?:number|#|no|num|field)|nummer|credito|numero|número|numéro|カード番号|Номер.*карты|信用卡号|信用卡号码|信用卡卡號|카드",
                        "i"
                      )
                    },
                    SNUM: {
                      appliesTo: ["name", "id", "labelText"],
                      re: new RegExp(
                        "verification|card.?identification|security.?code|card.?code|security.?number|card.?pin|c-v-v|(cvn|cvv|cvc|csc|cvd|cid|ccv)(field)?|\\bcid\\b",
                        "i"
                      )
                    },
                    CARD_VALID_MONTH: {
                      appliesTo: ["name", "id", "labelText"],
                      re: new RegExp(
                        "expir|exp.*mo|exp.*date|ccmonth|cardmonth|addmonth|gueltig|gültig|monat|fecha|date.*exp|scadenza|有効期限|validade|Срок действия карты|月",
                        "i"
                      )
                    },
                    CARD_VALID_YEAR: {
                      appliesTo: ["name", "id", "labelText"],
                      re: new RegExp(
                        "exp|^/|(add)?year|ablaufdatum|gueltig|gültig|jahr|fecha|scadenza|有効期限|validade|Срок действия карты|年|有效期",
                        "i"
                      )
                    },
                    EXPIRE: {
                      appliesTo: ["name", "id", "labelText"],
                      re: new RegExp(
                        "expir|exp.*date|^expfield$|gueltig|gültig|fecha|date.*exp|scadenza|有効期限|validade|Срок действия карты",
                        "i"
                      )
                    },
                    GIFT: {
                      appliesTo: ["name", "id", "labelText"],
                      re: new RegExp("gift.?card", "i"),
                      nre: new RegExp("((?:visa|mastercard|discover|amex|american express).*gift.?card)|(debit.*card)", "i")
                    }
                  }
                };
                t.exports = r;
              },
              {}
            ],
            3: [
              function (e, t, n) {
                function r(e, t, n) {
                  var r,
                    i,
                    s,
                    o = Object.keys(t),
                    a = Array.isArray(e);
                  for (i = 0, s = o.length; i < s; i++) {
                    var u = o[i],
                      l = 95 !== u.charCodeAt(0),
                      c = t[u];
                    !c || "object" != typeof c || (void 0 === c.value && "function" != typeof c.get && "function" != typeof c.set)
                      ? l
                        ? a
                          ? e.forEach(function (e) {
                              e[u] = c;
                            })
                          : (e[u] = c)
                        : ((r = r || {})[u] = { value: c, enumerable: l, configurable: !0, writable: !0 })
                      : (void 0 === c.enumerable && (c.enumerable = l),
                        n && c.setName && "function" == typeof c.setName && c.setName(n + "." + u),
                        ((r = r || {})[u] = c));
                  }
                  if (r)
                    try {
                      a
                        ? e.forEach(function (e) {
                            Object.defineProperties(e, r);
                          })
                        : Object.defineProperties(e, r);
                    } catch (e) {}
                }
                function i(e, t, n) {
                  return (e = e || function () {}), t && r(e.prototype, t), n && r(e, n), e;
                }
                t.exports = {
                  define: i,
                  derive: function (e, t, n, s) {
                    if (e) {
                      t = t || function () {};
                      var o = e.prototype;
                      return (
                        (t.prototype = Object.create(o)),
                        Object.defineProperty(t.prototype, "constructor", { value: t, writable: !0, configurable: !0, enumerable: !0 }),
                        n && r(t.prototype, n),
                        s && r(t, s),
                        t
                      );
                    }
                    return i(t, n, s);
                  },
                  mix: function (e) {
                    var t, n;
                    for (e = e || function () {}, t = 1, n = arguments.length; t < n; t++) r(e.prototype, arguments[t]);
                    return e;
                  }
                };
              },
              {}
            ],
            4: [
              function (e, t, n) {
                (t.exports.xinputMatches = function (e, t, n, r) {
                  return (
                    -1 != r.indexOf(e.getProperty("type")) &&
                    !!t.find(function (t) {
                      return e.getProperty(t).match(n);
                    })
                  );
                }),
                  (t.exports.likelyMonthSelect = function (e) {
                    var t = /[1-9][0-9]{3}/,
                      n = e.getProperty("options").filter((e) => e.value);
                    return (
                      12 == n.length &&
                      !n.find(function (e) {
                        return e.value.match(t) || e.text.match(t);
                      }) &&
                      (-1 != n[11].value.indexOf("12") || -1 != n[11].text.indexOf("12"))
                    );
                  }),
                  (t.exports.likelyYearSelect = function (e) {
                    for (
                      var t = e.getProperty("options").filter((e) => e.value),
                        n = new Date().getFullYear(),
                        r = [0, 1, 2].map(function (e) {
                          return (n + e).toString().substr(-2);
                        }),
                        i = 0;
                      i < t.length;
                      ++i
                    ) {
                      for (var s = 0; s < r.length && s + i < t.length && -1 != t[i + s].value.indexOf(r[s]); ) ++s;
                      if (s == r.length) return !0;
                      for (s = 0; s < r.length && s + i < t.length && -1 != t[i + s].text.indexOf(r[s]); ) ++s;
                      if (s == r.length) return !0;
                    }
                    return !1;
                  });
              },
              {}
            ],
            5: [
              function (e, t, n) {
                "use strict";
                t.exports = {
                  parentElement: function (e) {
                    if (null === e.parentElement) return null;
                    if (e.parentElement && Node.prototype.contains.call(e.parentElement, e)) return e.parentElement;
                    if (e.parentNode && 1 == e.parentNode.nodeType && Node.prototype.contains.call(e.parentNode, e)) return e.parentNode;
                    if (e.parentNode && 1 != e.parentNode.nodeType) return null;
                    for (var t = document.getElementsByTagName("*"), n = t.length - 1; n >= 0; --n)
                      for (
                        var r, i = document.evaluate("*", t[n], null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
                        (r = i.iterateNext());

                      )
                        if (r == e) return t[n];
                    return null;
                  },
                  elementName: function (e) {
                    var t;
                    return "string" == typeof (t = e.localName)
                      ? t.toLowerCase()
                      : "string" == typeof (t = e.tagName)
                      ? (t = t.split(":").pop()).toLowerCase()
                      : Node.prototype.cloneNode.call(e, !1).localName.toLowerCase();
                  }
                };
              },
              {}
            ],
            6: [
              function (e, t, n) {
                var r = e("@avast/item-type"),
                  i = e("./categories.js").CREDIT_CARD,
                  { xinputMatches: s, likelyMonthSelect: o, likelyYearSelect: a } = e("./inputMatchers.js"),
                  u = e("./xpath.js"),
                  l = { Class: e("./class.js") },
                  c = ["childElementCount", "childNodes", "tagName"];
                function h(e) {
                  return (
                    !(!e.parentElement || ((t = e.parentElement.contains), "function" != typeof t) || e.parentElement.contains(e)) ||
                    c.some(function (t) {
                      return e[t] instanceof Element;
                    })
                  );
                  var t;
                }
                function d(e) {
                  var t = e.form;
                  return t.setCategoryData(e.categories), t.init(), t;
                }
                function p(e) {
                  if (!e) return null;
                  var t = Array.isArray(e) ? e : [e],
                    n = [];
                  return (
                    t.forEach(
                      function (e) {
                        var t = function () {};
                        t.prototype = this.prototype;
                        var r,
                          i = new t();
                        for (r in e) {
                          var s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), r);
                          void 0 === s.get && void 0 === s.set && "function" != typeof e[r] && (i[r] = e[r]);
                        }
                        n.push(i);
                      }.bind(this)
                    ),
                    void 0 === e.length ? n[0] : n
                  );
                }
                function m(e) {
                  if (!e || !(e instanceof Element) || h(e)) return !1;
                  if ("number" != typeof e.clientWidth || "number" != typeof e.clientHeight) return !1;
                  if (0 == e.clientWidth || 0 == e.clientHeight) return !1;
                  var t = getComputedStyle(e);
                  if ("none" == t.display || "hidden" == t.visibility || t.opacity < 0.01) return !1;
                  var n = Element.prototype.getBoundingClientRect.call(e);
                  return !(n.right + window.scrollX < 0 || n.bottom + window.scrollY < 0);
                }
                function f(e) {
                  if (h(e)) return !1;
                  var t = m(e);
                  if (Element.prototype.hasChildNodes.call(e))
                    for (var n = 0; !t && n < e.childNodes.length; ) (t = t || f(e.childNodes[n])), ++n;
                  return t;
                }
                function g(e) {
                  if (e.tagName && -1 == e.tagName.indexOf("-")) return Element.prototype.cloneNode.call(e, !1);
                  var t = document.createElement("div");
                  return e.id && (t.id = e.id), t;
                }
                function v(e) {
                  if (h(e) || (e instanceof Element && "form" !== e.tagName.toLowerCase() && e.src)) return null;
                  var t = [];
                  if (
                    (Element.prototype.hasChildNodes.call(e) &&
                      Array.prototype.forEach.call(e.childNodes, function (e) {
                        if (!(e instanceof HTMLFormElement)) {
                          var n = v(e);
                          n && t.push(n);
                        }
                      }),
                    0 == t.length && !m(e))
                  )
                    return null;
                  var n = g(e);
                  return (
                    t.forEach(function (e) {
                      Element.prototype.appendChild.call(n, e);
                    }),
                    n
                  );
                }
                function _(e) {
                  if (h(e) || (e instanceof Element && "form" !== e.tagName.toLowerCase() && e.src)) return null;
                  var t = g(e);
                  return (
                    Array.prototype.forEach.call(e.childNodes, function (e) {
                      if (!(e instanceof HTMLFormElement)) {
                        var n = _(e);
                        n && Element.prototype.appendChild.call(t, n);
                      }
                    }),
                    t
                  );
                }
                var y = l.Class.define(
                    function (e, t) {
                      (this._attribute = e), (this._element = e.ownerElement), (this._path = t);
                    },
                    {
                      _attribute: null,
                      _element: null,
                      _path: null,
                      attribute: {
                        get: function () {
                          return this._attribute;
                        }
                      },
                      element: {
                        get: function () {
                          return this._element;
                        }
                      },
                      hidden: {
                        get: function () {
                          return !0;
                        }
                      },
                      matches: function (e) {
                        if (!e) return !1;
                        try {
                          for (
                            var t = document.evaluate(e, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null), n = t.iterateNext();
                            n;

                          ) {
                            if (n == this._attribute) return !0;
                            n = t.iterateNext();
                          }
                        } catch (e) {}
                        return !1;
                      },
                      getValue: function () {
                        return this._attribute.value;
                      },
                      setValue: function (e) {
                        return (this._attribute.value = e), e;
                      },
                      getProperty: function (e) {
                        return null;
                      }
                    }
                  ),
                  E = l.Class.define(
                    function (e, t) {
                      if ("string" == typeof e) {
                        var n = l.XElement.query(e, t, !0);
                        n && (this._element = n._element), (this._path = e);
                      } else this._element = e;
                      (this._ancestor = t || document), (this._observers = []);
                    },
                    {
                      _element: null,
                      _ancestor: null,
                      _path: null,
                      _observers: null,
                      _generateXPath: function () {
                        return u.generate(this._element, this._ancestor);
                      },
                      element: {
                        get: function () {
                          return this._element;
                        }
                      },
                      hidden: {
                        get: function () {
                          return !f(this._element);
                        }
                      },
                      xpath: {
                        get: function () {
                          return !this._path && this._element && (this._path = this._generateXPath()), this._path;
                        }
                      },
                      matches: function (e) {
                        if (!e) return !1;
                        try {
                          for (
                            var t = document.evaluate(e, this._ancestor, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null),
                              n = t.iterateNext();
                            n;

                          ) {
                            if (n == this._element) return !0;
                            n = t.iterateNext();
                          }
                        } catch (e) {}
                        return !1;
                      },
                      findParentId: function () {
                        if (h(this._element)) return null;
                        for (var e = this._element.parentElement; null != e && e != this._ancestor; ) {
                          if (e.id) return e.id;
                          e = e.parentElement;
                        }
                        return null;
                      },
                      getPosition: function (e) {
                        var t = 1;
                        try {
                          for (
                            var n = document.evaluate(e, this._ancestor, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null),
                              r = n.iterateNext();
                            r;

                          ) {
                            if (r == this._element) return t;
                            (r = n.iterateNext()), ++t;
                          }
                        } catch (e) {}
                        return 0;
                      },
                      toString: function () {
                        return this.xpath;
                      },
                      addMutationListener: function (e, t) {
                        if (window.MutationObserver) {
                          var n = new MutationObserver(e);
                          n.observe(this._element, t), this._observers.push({ observer: n, listener: e });
                        }
                      },
                      removeMutationListener: function (e) {
                        for (var t = 0; t < this._observers.length && this._observers[t].listener != e; ) ++t;
                        t >= this._observers.length || (this._observers[t].observer.disconnect(), this._observers.splice(t, 1));
                      },
                      addEventListener: function (e, t) {
                        if (e == l.XElement.Event.REMOVED) {
                          if (!window.MutationObserver) return;
                          var n = new MutationObserver(
                            function (e) {
                              document.body.contains(this._element) ||
                                (e.call(this, { type: l.XElement.Event.REMOVED, element: this._element }), this.removeMutationListener(e));
                            }.bind(this, t)
                          );
                          n.observe(document, { childList: !0, subtree: !0 }), this._observers.push({ observer: n, listener: t });
                        }
                      },
                      removeEventListener: function (e, t) {
                        e == l.XElement.Event.REMOVED && this.removeMutationListener(t);
                      }
                    },
                    {
                      Event: { REMOVED: "removed" },
                      query: function (e, t, n) {
                        var r = l.XElement.queryAll(e, t, n);
                        return r.length > 0 ? r[0] : null;
                      },
                      queryUnique: function (e, t, n) {
                        var r = l.XElement.queryAll(e, t, n);
                        return 1 == r.length ? r[0] : null;
                      },
                      queryAll: function (e, t, n) {
                        t || (t = document);
                        var r = [];
                        try {
                          for (
                            var i = document.evaluate(e, t, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null), s = i.iterateNext();
                            s;

                          )
                            "number" == typeof s.nodeType && 2 == s.nodeType
                              ? r.push(new l.XAttribute(s, e))
                              : (n || f(s)) && r.push(new l.XElement(s, t)),
                              (s = i.iterateNext());
                        } catch (e) {}
                        return r;
                      },
                      test: function (e, t) {
                        t || (t = document);
                        try {
                          return document.evaluate(e, t, null, XPathResult.BOOLEAN_TYPE, null).booleanValue;
                        } catch (e) {
                          return !1;
                        }
                      },
                      isUnique: function (e, t) {
                        return l.XElement.test("count(" + e + ") = 1", t);
                      }
                    }
                  ),
                  b = l.Class.derive(
                    E,
                    function (e) {
                      E.call(this, e);
                    },
                    {
                      _type: 0,
                      _inputs: [],
                      _submit: null,
                      _categories: null,
                      _hinted: !1,
                      _hint_form_id: null,
                      hinted: {
                        get: function () {
                          return this._hinted;
                        }
                      },
                      hint_form_id: {
                        get: function () {
                          return this._hint_form_id;
                        }
                      },
                      setCategoryData: function (e) {
                        e &&
                          e.forms &&
                          ((this._categories = []),
                          (this._categories = e.forms.filter(
                            function (e) {
                              return this.matches(e.xpath);
                            }.bind(this)
                          )),
                          0 == this._categories.length && (this._categories = null),
                          this._inputs && this._inputs.length > 0 && f(this._element) && this._categorize());
                      },
                      setLoginInput: function (e) {
                        this._inputs.forEach(function (t) {
                          t.login = t == e;
                        });
                      },
                      init: function (e, t) {
                        this._loadElements(e, t),
                          this._categorize()
                            ? 0 ==
                                this._inputs.filter(function (e) {
                                  return !e.hidden;
                                }).length && (this._type = l.XForm.Type.UNKNOWN)
                            : t ||
                              this._inputs.filter(function (e) {
                                return !e.hidden;
                              }).length > 0
                            ? this._recognize(t)
                            : (this._type = l.XForm.Type.UNKNOWN);
                      },
                      _loadElements: function (e, t) {
                        var n = "string" == typeof this._element.tagName && "form" !== this._element.tagName.toLowerCase();
                        e ||
                          (e = n
                            ? ".//input[((translate(@type, 'SUBMIT', 'submit') != 'submit' and translate(@type, 'BUTON', 'buton') != 'button' and translate(@type, 'IMAGE', 'image') != 'image' and translate(@type, 'REST', 'rest') != 'reset') or not(@type)) and not(ancestor::form)] | .//select[@name and not(ancestor::form)]"
                            : ".//input[(translate(@type, 'SUBMIT', 'submit') != 'submit' and translate(@type, 'BUTON', 'buton') != 'button' and translate(@type, 'IMAGE', 'image') != 'image' and translate(@type, 'REST', 'rest') != 'reset') or not(@type)] | .//select[@name] | .//textarea[@name]"),
                          void 0 === t && (t = !1);
                        var r =
                          this._element.querySelector('input[type="submit"]') ||
                          this._element.querySelector('button[type="submit"]') ||
                          ("accounts.google.com" === window.location.hostname &&
                            (this._element.ownerDocument.querySelector('div[role="button"][tabindex="0"][id="identifierNext"]') ||
                              this._element.ownerDocument.querySelector('div[role="button"][tabindex="0"][id="passwordNext"]'))) ||
                          this._element.querySelector("button");
                        r && (this._submit = new l.XElement(r)),
                          (this._inputs = l.XInput.copyFrom(l.XElement.queryAll(e, this._element, !0)).filter(
                            function (e) {
                              return !this._submit || e._element != this._submit._element;
                            }.bind(this)
                          ));
                      },
                      _categorize: function () {
                        this._categorizeByAutocomplete();
                        var e = this._categorizeByInputDb();
                        return this._categorizeCreditCards(), e;
                      },
                      _categorizeByAutocomplete: function () {
                        var e = {
                          "cc-number": r.CNUM,
                          "cc-name": r.CARDHOLDER_NAME,
                          "cc-csc": r.SNUM,
                          "cc-exp-month": r.CARD_VALID_MONTH,
                          "cc-exp-year": r.CARD_VALID_YEAR
                        };
                        this._inputs.forEach(function (t) {
                          var n = t.element.getAttribute("autocomplete");
                          if (n) {
                            var r = e[n];
                            r && (t.category = r);
                          }
                        });
                      },
                      _categorizeCreditCards: function () {
                        var e = [];
                        (e.push = function (e, t) {
                          Array.prototype.push.call(this, { xinput: e, category: t });
                        }),
                          (e.getCategory = function (e) {
                            var t = this.find(function (t) {
                              return t.xinput == e;
                            });
                            return t ? t.category : e.category;
                          }),
                          (e.commit = function () {
                            this.forEach(function (e) {
                              e.xinput.category = e.category;
                            });
                          });
                        var t = !1,
                          n = this._inputs
                            .filter((e) => !e.hidden)
                            .reduce(function (e, t) {
                              return t.category && (e[t.category] = !0), e;
                            }, {}),
                          u = !!n[r.CNUM],
                          l = !!n[r.CARD_VALID_MONTH],
                          c = 0,
                          h = 0,
                          d = 0;
                        this._inputs.forEach(function (p, m, f) {
                          if (
                            ((c += !p.hidden),
                            (h += !(p.non_text || p.password || p.hidden || p.button)),
                            (d += p.password && !p.hidden),
                            !(e.getCategory(p) > 0))
                          )
                            if (!s(p, i.GIFT.appliesTo, i.GIFT.re, ["text"]) || s(p, i.GIFT.appliesTo, i.GIFT.nre, ["text"]))
                              if (n[r.CARDHOLDER_NAME] || !s(p, i.CARDHOLDER_NAME.appliesTo, i.CARDHOLDER_NAME.re, ["text"]))
                                if (n[r.SNUM] || !s(p, i.SNUM.appliesTo, i.SNUM.re, ["text", "number", "tel", "password"]))
                                  if (n[r.CNUM] || !s(p, i.CNUM.appliesTo, i.CNUM.re, ["text", "number", "tel"])) {
                                    if ("month" == p.getProperty("type") && !l) return (l = !0), void e.push(p, r.EXPIRE);
                                    if (o(p) && !l) {
                                      var g = f.find((e, t) => t > m && !e.hidden);
                                      if (g && a(g)) return (l = !0), e.push(p, r.CARD_VALID_MONTH), void e.push(g, r.CARD_VALID_YEAR);
                                    }
                                    if (s(p, i.CARD_VALID_MONTH.appliesTo, i.CARD_VALID_MONTH.re, ["text", "number", "tel"]) && !l) {
                                      var v = f[m + 1];
                                      return v && s(v, i.CARD_VALID_YEAR.appliesTo, i.CARD_VALID_YEAR.re, ["text", "number", "tel"])
                                        ? ((l = !0), e.push(p, r.CARD_VALID_MONTH), void e.push(v, r.CARD_VALID_YEAR))
                                        : s(p, i.EXPIRE.appliesTo, i.EXPIRE.re, ["text", "number", "tel"])
                                        ? ((l = !0), void e.push(p, r.EXPIRE))
                                        : void 0;
                                    }
                                  } else {
                                    if (u) return void (t = !0);
                                    if (p.element.maxLength >= 12 || -1 == p.element.maxLength) return (u = !0), void e.push(p, r.CNUM);
                                    for (
                                      var _ = 1;
                                      m + _ < f.length && s(f[m + _], i.CNUM.appliesTo, i.CNUM.re, ["text", "number", "tel"]);

                                    )
                                      ++_;
                                    if (4 != _) return void (t = !0);
                                    for (_ = 0; _ < 4; ++_)
                                      4 != f[m + _].element.maxLength && (t = !0), e.push(f[m + _], r["CNUM" + (_ + 1) + "4"]);
                                    u = !0;
                                  }
                                else e.push(p, r.SNUM);
                              else e.push(p, r.CARDHOLDER_NAME);
                            else t = !0;
                        }),
                          (t |= 2 == c && 1 == h && 1 == d),
                          u && !t && e.commit();
                      },
                      _categorizeFullForm: function (e) {
                        if (void 0 === e.type) return !1;
                        if (e.type === l.XForm.Type.IGNORE)
                          return (this._type = e.type), (this._hinted = !0), (this._hint_form_id = e.form_id), !0;
                        var t = [];
                        (t.push = function (e, t) {
                          Array.prototype.push.call(this, { xinput: e, category: t });
                        }),
                          (t.getCategory = function (e) {
                            var t = this.find(function (t) {
                              return t.xinput == e;
                            });
                            return t ? t.category : e.category;
                          }),
                          (t.commit = function () {
                            this.forEach(function (t) {
                              (t.xinput.category = t.category),
                                4 == t.category && e.type == l.XForm.Type.PWDCHG && (t.xinput.oldPassword = !0);
                            });
                          }),
                          e.inputs.find(
                            function (e) {
                              var n = !0;
                              return (
                                this._inputs.find(
                                  function (r) {
                                    r.matches(e.xpath, this._element) && ((n = !1), t.push(r, e.category));
                                  }.bind(this)
                                ),
                                n
                              );
                            }.bind(this)
                          );
                        var n = this.inputs.find(function (e) {
                          return e.password && !t.getCategory(e);
                        });
                        return !n && ((this._type = e.type), (this._hinted = !0), (this._hint_form_id = e.form_id), t.commit(), !0);
                      },
                      _categorizeByInputDb: function () {
                        if (!this._categories) return !1;
                        var e = !1,
                          t = !1,
                          n = !1;
                        return (
                          !!this._categories.find(
                            function (e) {
                              return void 0 !== e.type && this._categorizeFullForm(e);
                            }.bind(this)
                          ) ||
                          (this._categories.forEach(
                            function (i) {
                              void 0 === i.type &&
                                i.inputs &&
                                i.inputs.forEach(
                                  function (i) {
                                    this._inputs.forEach(function (s) {
                                      s.matches(i.xpath) &&
                                        (-1 != l.XForm._LoginInputs.indexOf(i.type) && (e = !0),
                                        3 == i.type && (t = !0),
                                        i.type == r.PASSWD && (n = !0),
                                        (s.category = i.type));
                                    }),
                                      this._submit && 32766 == i.type && this._submit.matches(i.xpath) && (this._submit = null);
                                  }.bind(this)
                                );
                            }.bind(this)
                          ),
                          t ? this.setLoginInput(null) : this._guessLoginInput(),
                          n &&
                            this._inputs.forEach(function (e) {
                              e.password && e.category != r.PASSWD && (e.category = 1);
                            }),
                          !!e && ((this._type = l.XForm.Type.LOGIN), (this._hinted = !0), !0))
                        );
                      },
                      _removeIgnored: function (e) {
                        this._categories &&
                          this._categories.forEach(function (t) {
                            t.inputs &&
                              t.inputs.forEach(function (t) {
                                t.xpath &&
                                  32766 == t.type &&
                                  l.XElement.queryAll(t.xpath, e, !0).forEach(function (e) {
                                    e.element.parentNode.removeChild(e.element);
                                  });
                              });
                          });
                      },
                      _guessLoginInput: function () {
                        if (
                          !(
                            this._inputs.filter(function (e) {
                              return e.login;
                            }).length > 0
                          )
                        ) {
                          var e = this._inputs.filter(function (e) {
                              return !(e.non_text || e.password || e.hidden || e.button);
                            }),
                            t = this._inputs.filter(function (e) {
                              return e.user_name && !e.non_text && !e.password && !e.button;
                            });
                          if (1 != t.length || (t[0].hidden && 1 == e.length && !e[0].hidden))
                            if (1 == e.length) this.setLoginInput(e[0]);
                            else {
                              var n = this._inputs.filter(function (e) {
                                return e.email_tel && !e.non_text && !e.password && !e.button;
                              });
                              if (n.length > 0) this.setLoginInput(n[0]);
                              else
                                for (var r = 0, i = null; r < this._inputs.length; ) {
                                  if (
                                    (this._inputs[r].non_text ||
                                      this._inputs[r].password ||
                                      this._inputs[r].hidden ||
                                      this._inputs[r].button ||
                                      (i = this._inputs[r]),
                                    this._inputs[r].password)
                                  ) {
                                    i && this.setLoginInput(i);
                                    break;
                                  }
                                  ++r;
                                }
                            }
                          else this.setLoginInput(t[0]);
                        }
                      },
                      _recognize: function (e) {
                        this._guessLoginInput();
                        var t = _(this._element),
                          n = e ? t : v(this._element);
                        this._removeIgnored(t), this._removeIgnored(n), (this._type = l.XForm.Type.EITHER);
                        var r = !1;
                        for (var i in l.XForm.formTypeRules)
                          if (l.XElement.test(i, n)) {
                            (this._type = l.XForm.formTypeRules[i]), (r = !0);
                            break;
                          }
                        if (this._type == l.XForm.Type.EITHER || this._type == l.XForm.Type.NONE) {
                          var s = this._inputs.filter(function (e) {
                            return e.password || (!e._element.disabled && !e._element.readOnly && f(e._element));
                          });
                          s.length <= 1 &&
                            (!Element.prototype.getAttribute.call(this._element, "method") ||
                              "get" == Element.prototype.getAttribute.call(this._element, "method").toLowerCase()) &&
                            (this._type = l.XForm.Type.IGNORE);
                        }
                        if (
                          ((this._type == l.XForm.Type.EITHER && r) ||
                            this._type == l.XForm.Type.IGNORE ||
                            this._type == l.XForm.Type.LOGIN ||
                            this._type == l.XForm.Type.SIGNUP ||
                            this._type == l.XForm.Type.PWDCHG ||
                            !l.XElement.query(".//input[translate(@type, 'PASWORD', 'pasword') = 'password']", t, !0) ||
                            !l.XElement.test("count(.//input[translate(@type, 'HIDEN', 'hiden') != 'hidden']) < 5", n) ||
                            (this._type = l.XForm.Type.LOGIN),
                          this._type == l.XForm.Type.PWDCHG)
                        ) {
                          var o = this._inputs.filter(function (e) {
                            return e.password;
                          });
                          if (0 != o.length) {
                            o.sort(function (e, t) {
                              return e.element.getBoundingClientRect().top - t.element.getBoundingClientRect().top;
                            }),
                              o.length > 2 ? (o[0].oldPassword = !0) : (o[0].newPassword = !0);
                            for (var a = o.length - 1; a > 0; --a) o[a].newPassword = !0;
                          }
                        }
                      },
                      type: {
                        get: function () {
                          return this._type;
                        }
                      },
                      isLogin: {
                        get: function () {
                          return this._type == l.XForm.Type.LOGIN || this._type == l.XForm.Type.EITHER;
                        }
                      },
                      isSignup: {
                        get: function () {
                          return this._type == l.XForm.Type.SIGNUP || this._type == l.XForm.Type.EITHER;
                        }
                      },
                      inputs: {
                        get: function () {
                          return this._inputs;
                        }
                      },
                      submitButton: {
                        get: function () {
                          return this._submit;
                        }
                      }
                    },
                    {
                      _LoginInputs: [3, r.PASSWD],
                      Type: { IGNORE: -2, NONE: -1, UNKNOWN: 0, LOGIN: 1, SIGNUP: 2, EITHER: 3, PWDCHG: 4 },
                      formTypeRules: {},
                      copyFrom: p,
                      _getStandaloneInputsParent: function () {
                        var e = l.XElement.queryAll(
                          ".//input[((translate(@type, 'IMAGE', 'image') != 'image' and translate(@type, 'REST', 'rest') != 'reset') or not(@type)) and not(ancestor::form)] | .//select[@name and not(ancestor::form)]",
                          null,
                          !0
                        );
                        if (0 == e.length) return null;
                        for (
                          var t = e.map(function (e) {
                              for (var t = [], n = e.element; n; ) t.push(n), (n = n.parentElement);
                              return t;
                            }),
                            n = [];
                          t[0].length > 0;

                        ) {
                          var r = t.map(function (e) {
                              return e.pop();
                            }),
                            i = r[0];
                          if (
                            !r.every(function (e) {
                              return e == i;
                            })
                          )
                            break;
                          n.push(i);
                        }
                        for (; n.length > 1 && !n[n.length - 1].id && "body" !== n[n.length - 1].tagName.toLowerCase(); ) n.pop();
                        return n.length < 1 ? null : new l.XForm(n.pop());
                      },
                      groupFormlessForms: function () {
                        var e = l.XElement.queryAll(".//input[@type='password' and not(ancestor::form)]", null, !0);
                        return 0 === e.length
                          ? []
                          : e
                              .map(function (e) {
                                var t = e.element;
                                do {
                                  if (t == document.body || !t.parentNode) return new l.XForm(t);
                                  t = t.parentNode;
                                } while (1 === t.querySelectorAll("input").length);
                                return new l.XForm(t);
                              })
                              .reduce(function (e, t) {
                                return 0 === e.length ? [t] : (e[e.length - 1].element !== t.element && e.push(t), e);
                              }, []);
                      },
                      search: function (e, t) {
                        t =
                          t ||
                          function (e, t) {
                            return t(e);
                          };
                        var n = l.XForm.copyFrom(l.XElement.queryAll(".//form", null, !0));
                        return (
                          this.groupFormlessForms().forEach(function (e) {
                            n.push(e);
                          }),
                          n
                            .map(function (n) {
                              return t({ form: n, categories: e }, d);
                            })
                            .filter(function (e) {
                              return e;
                            })
                        );
                      }
                    }
                  );
                b.formTypeRules = {
                  "count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) > 3": b.Type.IGNORE,
                  "count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) = 3": b.Type.PWDCHG,
                  "count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) = 2 and count(.//input[translate(@type, 'HIDEN', 'hiden') != 'hidden' and translate(@type, 'BUTON', 'buton') != 'button']) - count(.//input[translate(@type, 'SUBMIT', 'submit') = 'submit']) = 2":
                    b.Type.IGNORE,
                  "count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) > 1": b.Type.SIGNUP,
                  "count(.//input[translate(@type, 'TEX', 'tex') = 'text' or not(@type)]) + count(.//input[translate(@type, 'EMAIL', 'email') = 'email']) > 2 and count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) = 1":
                    b.Type.SIGNUP,
                  "count(.//input[translate(@type, 'TEX', 'tex') = 'text' or not(@type)]) + count(.//input[translate(@type, 'EMAIL', 'email') = 'email']) > 1 and count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) = 1":
                    b.Type.EITHER,
                  "count(.//input[translate(@type, 'TEX', 'tex') = 'text' or not(@type)]) + count(.//input[translate(@type, 'EMAIL', 'email') = 'email']) + count(.//input[translate(@type, 'TEL', 'tel') = 'tel']) = 1 and count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) = 0 and translate(@method, 'GEPOST', 'gepost') = 'post'":
                    b.Type.NONE,
                  "count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) = 1": b.Type.LOGIN,
                  "count(.//input[translate(@type, 'PASWORD', 'pasword') = 'password']) = 0": b.Type.NONE,
                  "translate(@method, 'GEPOST', 'gepost')='get'": b.Type.NONE
                };
                var A = l.Class.derive(
                  E,
                  function (e, t) {
                    E.call(this, e, t);
                  },
                  {
                    _label: void 0,
                    label: {
                      get: function () {
                        return void 0 !== this._label
                          ? this._label
                          : this._element.id
                          ? (this._label = this._ancestor.querySelector("label[for=" + u.quoteValue(this._element.id) + "]"))
                          : (this._label = null);
                      },
                      set: function (e) {
                        this._label = e;
                      }
                    },
                    _login: !1,
                    login: {
                      get: function () {
                        return 3 == this.category || (0 == this.category && this._login);
                      },
                      set: function (e) {
                        this._login = e;
                      }
                    },
                    category: 0,
                    password: {
                      get: function () {
                        return (
                          this.category == r.PASSWD ||
                          this.category == r.NEW_PASSWD ||
                          (0 == this.category && this._element.type && "password" == this._element.type.toLowerCase())
                        );
                      }
                    },
                    oldPassword: !1,
                    _newPassword: !1,
                    newPassword: {
                      get: function () {
                        return this.category == r.NEW_PASSWD || (0 == this.category && this._newPassword);
                      },
                      set: function (e) {
                        this._newPassword = e;
                      }
                    },
                    _lastHidden: null,
                    hidden: {
                      get: function () {
                        return (
                          (this._element.type && "hidden" === this._element.type.toLowerCase()) ||
                          !this.getProperty("editable") ||
                          !f(this._element)
                        );
                      }
                    },
                    visibilityChanged: function (e) {
                      var t = this.hidden;
                      return (
                        (this._lastHidden = this._lastHidden || {}),
                        void 0 === this._lastHidden[e]
                          ? ((this._lastHidden[e] = t), !1)
                          : t !== this._lastHidden[e] && ((this._lastHidden[e] = t), !0)
                      );
                    },
                    button: {
                      get: function () {
                        return (
                          "button" === this._element.tagName.toLowerCase() ||
                          (this._element.type &&
                            ("button" === this._element.type.toLowerCase() || "submit" === this._element.type.toLowerCase()))
                        );
                      }
                    },
                    non_text: {
                      get: function () {
                        var e = this._element.type ? this._element.type.toLowerCase() : "";
                        return (
                          "select" === this.element.tagName.toLowerCase() ||
                          "checkbox" === e ||
                          "radio" === e ||
                          "date" === e ||
                          "time" === e ||
                          "datetime" === e ||
                          "datetime-local" === e ||
                          "number" === e ||
                          "color" === e ||
                          "range" === e ||
                          "month" === e ||
                          "week" === e
                        );
                      }
                    },
                    email_tel: {
                      get: function () {
                        var e,
                          t = this._element.type ? this._element.type.toLowerCase() : "",
                          n = this._element.id ? this._element.id.toLowerCase() : "",
                          r = this._element.name ? this._element.name.toLowerCase() : "";
                        try {
                          e = this._element.id && document.querySelector("label[for=" + u.quoteValue(this._element.id) + "]");
                        } catch (t) {
                          e = null;
                        }
                        var i = e ? (e.textContent ? e.textContent.toLowerCase() : e.innerText ? e.innerText.toLowerCase() : "") : "";
                        return "email" === t || "email" === n || r.indexOf("email") > -1 || /\bemail\b/i.test(i) || /\be-mail\b/i.test(i);
                      }
                    },
                    user_name: {
                      get: function () {
                        var e = this._element.name ? this._element.name.toLowerCase() : "",
                          t = this._element.id ? this._element.id.toLowerCase() : "";
                        return (
                          "user" === e ||
                          "user" === t ||
                          "username" === e ||
                          "username" === t ||
                          "user_name" === e ||
                          "user_name" === t ||
                          "login" === e ||
                          "login" === t ||
                          "loginname" === e ||
                          "loginname" === t ||
                          "login_name" === e ||
                          "login_name" === t ||
                          "accountname" === e ||
                          "login_name" === t ||
                          "account_name" === e ||
                          "account_name" === t
                        );
                      }
                    },
                    getValue: function () {
                      return !this._element.type ||
                        ("checkbox" !== this._element.type.toLowerCase() && "radio" !== this._element.type.toLowerCase())
                        ? void 0 === this._element.value
                          ? this._element.textContent
                          : null != this._element.value
                          ? this._element.value.toString()
                          : null
                        : this._element.checked.toString();
                    },
                    setValue: function (e) {
                      null != e &&
                        ("checkbox" === this._element.type.toLowerCase() || "radio" === this._element.type.toLowerCase()
                          ? "true" === e.toString()
                            ? (this._element.checked = !0)
                            : ((this._element.checked = !1), this._element.removeAttribute("checked"))
                          : (this._element.value = e.toString()));
                    },
                    getProperty: function (e) {
                      switch (e) {
                        case "type":
                          var t = this._element.getAttribute("type");
                          return t ? t.toLowerCase() : "text";
                        case "labelText":
                          return (this.label && this.label.textContent) || "";
                        case "options":
                          return Array.prototype.slice.call(this._element.querySelectorAll("option")).map(function (e) {
                            return { value: e.value, text: e.textContent };
                          });
                        case "tagName":
                          var n = this._element.localName;
                          return "string" == typeof n
                            ? n.toLowerCase()
                            : "string" == typeof (n = this._element.tagName)
                            ? (n = n.split(":").pop()).toLowerCase()
                            : Node.prototype.cloneNode.call(this._element, !1).localName.toLowerCase();
                        case "editable":
                          return !0 !== this._element.readOnly && !0 !== this._element.disabled;
                        default:
                          return this._element.getAttribute(e) || "";
                      }
                    }
                  },
                  { copyFrom: p }
                );
                (l.XAttribute = y),
                  (l.XElement = E),
                  (l.XForm = b),
                  (l.XInput = A),
                  (t.exports = { XAttribute: y, XElement: E, XForm: b, XInput: A });
              },
              { "./categories.js": 2, "./class.js": 3, "./inputMatchers.js": 4, "./xpath.js": 7, "@avast/item-type": 8 }
            ],
            7: [
              function (e, t, n) {
                "use strict";
                var { parentElement: r, elementName: i } = e("./safeDom.js");
                var s =
                  "undefined" == typeof Element || Element.prototype.getElementsByClassName
                    ? function (e, t) {
                        var n = Element.prototype.getAttribute.call(e, "class");
                        return n
                          ? (n = n.split(" ")).find(function (e) {
                              return (
                                !!e &&
                                !e.match(/[0-9]/) &&
                                -1 == e.indexOf("AVAST") &&
                                1 ==
                                  Element.prototype.getElementsByClassName.call(
                                    (t && t.documentElement) || t || document.documentElement,
                                    e
                                  ).length
                              );
                            })
                          : null;
                      }
                    : function (e, t) {
                        var n = Element.prototype.getAttribute.call(e, "class");
                        return n
                          ? (n = n.split(" ")).find(function (e) {
                              return (
                                !!e &&
                                !e.match(/[0-9]/) &&
                                -1 == e.indexOf("AVAST") &&
                                1 ==
                                  Element.prototype.querySelectorAll.call(
                                    (t && t.documentElement) || t || document.documentElement,
                                    "." + e
                                  ).length
                              );
                            })
                          : null;
                      };
                function o(e) {
                  return -1 !== e.indexOf("'")
                    ? -1 === e.indexOf('"')
                      ? '"' + e + '"'
                      : "concat(" +
                        e
                          .split("'")
                          .map(function (e) {
                            return "'" + e + "'";
                          })
                          .join(', "\'", ') +
                        ")"
                    : "'" + e + "'";
                }
                var a = /[!$&'()*,;=?#]/;
                function u(e) {
                  return e ? e.toLowerCase() : null;
                }
                function l(e) {
                  var t = Element.prototype.getAttribute.call(e, "id");
                  if (!t) return null;
                  try {
                    if (1 != document.querySelectorAll("#" + t).length) return null;
                  } catch (n) {
                    return document.getElementById(t) == e ? t : null;
                  }
                  return t;
                }
                function c(e, t) {
                  var n = Element.prototype.getAttribute.call(e, "name");
                  if (!n) return null;
                  if (-1 != n.indexOf("]")) return 1 == document.getElementsByName(n).length ? n : null;
                  try {
                    if (1 != Element.prototype.querySelectorAll.call(t, "*[name=" + n + "]").length) return null;
                  } catch (e) {
                    return 1 == document.getElementsByName(n).length ? n : null;
                  }
                  return n;
                }
                function h(e, t) {
                  var n = Element.prototype.getAttribute.call(e, "action");
                  if (!n) return null;
                  var r = n.search(a);
                  -1 != r && (n = n.substr(0, r));
                  for (
                    var i = n.toLowerCase(),
                      s = Element.prototype.getElementsByTagName.call((t && t.documentElement) || t || document.documentElement, "*"),
                      o = 0,
                      l = s.length - 1;
                    l >= 0;
                    --l
                  ) {
                    var c = u(Element.prototype.getAttribute.call(s[l], "action"));
                    if (c && c.startsWith(i) && ++o > 1) return null;
                  }
                  return n;
                }
                function d(e, t) {
                  var n = Element.prototype.getAttribute.call(e, "type"),
                    r = Element.prototype.getAttribute.call(e, "name");
                  if (!n && !r) return null;
                  var i = Element.prototype.getElementsByTagName.call((t && t.documentElement) || t || document.documentElement, "*"),
                    s = (r || n).toLowerCase(),
                    a = r ? "name" : "type";
                  if (n && "radio" === n.toLowerCase()) {
                    var l = Element.prototype.getAttribute.call(e, "value");
                    if (l) {
                      for (var c = l.toLowerCase(), h = 0, d = i.length - 1; d >= 0; --d)
                        if (
                          u(Element.prototype.getAttribute.call(i[d], a)) == s &&
                          u(Element.prototype.getAttribute.call(i[d], "value")) == c
                        ) {
                          if (h) return null;
                          h = 1;
                        }
                      return "@" + a + "=" + o(r || n) + " and @value=" + o(l);
                    }
                  }
                  for (h = 0, d = i.length - 1; d >= 0; --d)
                    if (u(Element.prototype.getAttribute.call(i[d], a)) == s) {
                      if (h) return null;
                      h = 1;
                    }
                  return "@" + a + "=" + o(r || n);
                }
                t.exports = {
                  generate: function e(t, n) {
                    if (!t) return null;
                    if (3 == t.nodeType) {
                      var a = e(t.parentElement, n);
                      if (null === a) return null;
                      for (var u = 1; (t = t.previousSibling); ) 3 == t.nodeType && ++u;
                      return a + "/text()[" + u + "]";
                    }
                    if (1 != t.nodeType) return null;
                    if (t == document.documentElement) return i(t);
                    if (t == document.body && t.parentElement == document.documentElement) return i(document.documentElement) + "/" + i(t);
                    for (var p = []; t && t != n; t = r(t)) {
                      var m = i(t);
                      if ("html" != m && "body" != m && "frameset" != m) {
                        var f,
                          g,
                          v,
                          _,
                          y = l(t);
                        if ("form" === m && (f = h(t, n))) {
                          var E = "starts-with(@action," + o(f) + ")";
                          y && (E += " or @id = " + o(y)), p.unshift(m + "[" + E + "]");
                          break;
                        }
                        var b = "input" === m || "select" === m || "textarea" === m;
                        if (b && (g = c(t, "name"))) {
                          p.unshift(m + "[@name=" + o(g) + "]");
                          break;
                        }
                        if (y) {
                          p.unshift(m + "[@id=" + o(y) + "]");
                          break;
                        }
                        if (!b && (g = c(t, "name"))) {
                          p.unshift(m + "[@name=" + o(g) + "]");
                          break;
                        }
                        if ((v = s(t, n))) {
                          p.unshift(m + "[contains(@class," + o(v) + ")]");
                          break;
                        }
                        if ("input" === m && (_ = d(t, n))) {
                          p.unshift(m + "[" + _ + "]");
                          break;
                        }
                        var A = r(t);
                        if ((g = c(t, A))) p.unshift(m + "[@name=" + o(g) + "]");
                        else if ((v = s(t, A))) p.unshift(m + "[contains(@class," + o(v) + ")]");
                        else if (1 != Element.prototype.getElementsByTagName.call(A || document.documentElement, m).length) {
                          u = 1;
                          for (
                            var T, w = document.evaluate("*", A || document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                            (T = w.iterateNext()) && T != t;

                          )
                            i(T) == m && ++u;
                          if (T != t) return null;
                          p.unshift(m + "[" + u + "]");
                        } else p.unshift(m);
                      }
                    }
                    return p.length ? (n ? ".//" : "//") + p.join("/") : null;
                  },
                  quoteValue: o
                };
              },
              { "./safeDom.js": 5 }
            ],
            8: [
              function (e, t, n) {
                t.exports = {
                  NOTE: 1,
                  URL: 2,
                  USER: 3,
                  PASSWD: 4,
                  PIN: 5,
                  EXPIRE: 6,
                  DATE: 7,
                  CNUM: 8,
                  SNUM: 9,
                  EMAIL: 10,
                  ACCOUNT: 11,
                  PROVIDER: 12,
                  CTYPE: 13,
                  CARDHOLDER_NAME: 14,
                  PHONE: 15,
                  WWWFORM: 16,
                  IMAGE: 17,
                  FILENAME: 18,
                  BANKID: 19,
                  SWIFT: 20,
                  IBAN: 21,
                  CARD_VALID_MONTH: 22,
                  CARD_VALID_YEAR: 23,
                  CNUM14: 24,
                  CNUM24: 25,
                  CNUM34: 26,
                  CNUM44: 27,
                  LABEL: 28,
                  NEW_PASSWD: 29,
                  FIRSTNAME: 30,
                  SURNAME: 31,
                  FULLNAME: 32,
                  TITLES_BEFORE: 33,
                  TITLES_AFTER: 34,
                  MIDDLENAME: 35,
                  STREET_NAME: 40,
                  STREET_NO: 41,
                  STREET_ADDR: 42,
                  CITY: 43,
                  STATE: 44,
                  ZIP_CODE: 45,
                  COUNTRY: 46,
                  BIRTH: 50,
                  BIRTH_DAY: 53,
                  BIRTH_MONTH: 54,
                  BIRTH_YEAR: 55,
                  PERSONAL_ID: 51,
                  COMPANY_ID: 52,
                  MALE: 56,
                  FEMALE: 57,
                  UNSPECIFIED_GENDER: 58,
                  GENDER: 59,
                  BIRTH_PLACE: 60,
                  COMPANY_NAME: 70,
                  JOB_TITLE: 71,
                  CUSTOM_ICON_BACKGROUND: 80,
                  CUSTOM_ICON_IMAGE: 81,
                  CUSTOM_TITLE: 82,
                  REMARK: 83,
                  NAME: 16001,
                  ADDRESS: 16002,
                  CREDIT_CARD: 16003,
                  BANK_ACCOUNT: 16004,
                  COMPANY: 16005,
                  IGNOR: 32766,
                  CUSTOM: 32767
                };
              },
              {}
            ],
            9: [
              function (e, t, n) {
                t.exports = {
                  CA: {
                    Alberta: "AB",
                    "British Columbia": "BC",
                    Manitoba: "MB",
                    "New Brunswick": "NK",
                    Newfoundland: "NF",
                    "Northwest Territories": "NT",
                    "Nova Scotia": "NS",
                    Ontario: "ON",
                    "Prince Edward Island": "PE",
                    Quebec: "PQ",
                    Saskatchewan: "SN",
                    "Yukon Territory": "YT"
                  },
                  US: {
                    Alabama: "AL",
                    Alaska: "AK",
                    Arizona: "AZ",
                    Arkansas: "AR",
                    California: "CA",
                    Colorado: "CO",
                    Connecticut: "CT",
                    Delaware: "DE",
                    Florida: "FL",
                    Georgia: "GA",
                    Hawaii: "HI",
                    Idaho: "ID",
                    Illinois: "IL",
                    Indiana: "IN",
                    Iowa: "IA",
                    Kansas: "KS",
                    Kentucky: "KY",
                    Louisiana: "LA",
                    Maine: "ME",
                    Maryland: "MD",
                    Massachusetts: "MA",
                    Michigan: "MI",
                    Minnesota: "MN",
                    Mississippi: "MS",
                    Missouri: "MO",
                    Montana: "MT",
                    Nebraska: "NE",
                    Nevada: "NV",
                    "New Hampshire": "NH",
                    "New Jersey": "NJ",
                    "New Mexico": "NM",
                    "New York": "NY",
                    "North Carolina": "NC",
                    "North Dakota": "ND",
                    Ohio: "OH",
                    Oklahoma: "OK",
                    Oregon: "OR",
                    Pennsylvania: "PA",
                    "Rhode Island": "RI",
                    "South Carolina": "SC",
                    "South Dakota": "SD",
                    Tennessee: "TN",
                    Texas: "TX",
                    Utah: "UT",
                    Vermont: "VT",
                    Virginia: "VA",
                    Washington: "WA",
                    "West Virginia": "WV",
                    Wisconsin: "WI",
                    Wyoming: "WY",
                    "American Samoa": "AS",
                    "District of Columbia": "DC",
                    "Federated States of Micronesia": "FM",
                    Guam: "GU",
                    "Marshall Islands": "MH",
                    "Northern Mariana Islands": "MP",
                    Palau: "PW",
                    "Puerto Rico": "PR",
                    "Virgin Islands": "VI"
                  }
                };
              },
              {}
            ],
            10: [
              function (e, t, n) {
                function r() {
                  (this._events = this._events || {}), (this._maxListeners = this._maxListeners || void 0);
                }
                function i(e) {
                  return "function" == typeof e;
                }
                function s(e) {
                  return "object" == typeof e && null !== e;
                }
                function o(e) {
                  return void 0 === e;
                }
                (t.exports = r),
                  (r.EventEmitter = r),
                  (r.prototype._events = void 0),
                  (r.prototype._maxListeners = void 0),
                  (r.defaultMaxListeners = 10),
                  (r.prototype.setMaxListeners = function (e) {
                    if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                    return (this._maxListeners = e), this;
                  }),
                  (r.prototype.emit = function (e) {
                    var t, n, r, a, u, l;
                    if (
                      (this._events || (this._events = {}),
                      "error" === e && (!this._events.error || (s(this._events.error) && !this._events.error.length)))
                    ) {
                      if ((t = arguments[1]) instanceof Error) throw t;
                      throw TypeError('Uncaught, unspecified "error" event.');
                    }
                    if (o((n = this._events[e]))) return !1;
                    if (i(n))
                      switch (arguments.length) {
                        case 1:
                          n.call(this);
                          break;
                        case 2:
                          n.call(this, arguments[1]);
                          break;
                        case 3:
                          n.call(this, arguments[1], arguments[2]);
                          break;
                        default:
                          for (r = arguments.length, a = new Array(r - 1), u = 1; u < r; u++) a[u - 1] = arguments[u];
                          n.apply(this, a);
                      }
                    else if (s(n)) {
                      for (r = arguments.length, a = new Array(r - 1), u = 1; u < r; u++) a[u - 1] = arguments[u];
                      for (r = (l = n.slice()).length, u = 0; u < r; u++) l[u].apply(this, a);
                    }
                    return !0;
                  }),
                  (r.prototype.addListener = function (e, t) {
                    var n;
                    if (!i(t)) throw TypeError("listener must be a function");
                    (this._events || (this._events = {}),
                    this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t),
                    this._events[e]
                      ? s(this._events[e])
                        ? this._events[e].push(t)
                        : (this._events[e] = [this._events[e], t])
                      : (this._events[e] = t),
                    s(this._events[e]) && !this._events[e].warned) &&
                      (n = o(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) &&
                      n > 0 &&
                      this._events[e].length > n &&
                      ((this._events[e].warned = !0), console.trace);
                    return this;
                  }),
                  (r.prototype.on = r.prototype.addListener),
                  (r.prototype.once = function (e, t) {
                    if (!i(t)) throw TypeError("listener must be a function");
                    var n = !1;
                    function r() {
                      this.removeListener(e, r), n || ((n = !0), t.apply(this, arguments));
                    }
                    return (r.listener = t), this.on(e, r), this;
                  }),
                  (r.prototype.removeListener = function (e, t) {
                    var n, r, o, a;
                    if (!i(t)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[e]) return this;
                    if (((o = (n = this._events[e]).length), (r = -1), n === t || (i(n.listener) && n.listener === t)))
                      delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                    else if (s(n)) {
                      for (a = o; a-- > 0; )
                        if (n[a] === t || (n[a].listener && n[a].listener === t)) {
                          r = a;
                          break;
                        }
                      if (r < 0) return this;
                      1 === n.length ? ((n.length = 0), delete this._events[e]) : n.splice(r, 1),
                        this._events.removeListener && this.emit("removeListener", e, t);
                    }
                    return this;
                  }),
                  (r.prototype.removeAllListeners = function (e) {
                    var t, n;
                    if (!this._events) return this;
                    if (!this._events.removeListener)
                      return 0 === arguments.length ? (this._events = {}) : this._events[e] && delete this._events[e], this;
                    if (0 === arguments.length) {
                      for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                      return this.removeAllListeners("removeListener"), (this._events = {}), this;
                    }
                    if (i((n = this._events[e]))) this.removeListener(e, n);
                    else for (; n.length; ) this.removeListener(e, n[n.length - 1]);
                    return delete this._events[e], this;
                  }),
                  (r.prototype.listeners = function (e) {
                    return this._events && this._events[e] ? (i(this._events[e]) ? [this._events[e]] : this._events[e].slice()) : [];
                  }),
                  (r.listenerCount = function (e, t) {
                    return e._events && e._events[t] ? (i(e._events[t]) ? 1 : e._events[t].length) : 0;
                  });
              },
              {}
            ],
            11: [
              function (e, t, n) {
                "use strict";
                var r = e("@avast/extensions-dom-shared"),
                  i = e("./log.js");
                t.exports = {
                  trim: function (e, t) {
                    if (!e || 0 == e.length || !t) return e;
                    var n = e.findIndex((e) => e.xpath == t);
                    return e.slice(n + 1);
                  },
                  advance: function e(t, n) {
                    for (var s; t.length > 0 && !(s = r.XElement.query(t[0].xpath, document, !0)); ) {
                      if (
                        "verifyok" === t[0].event ||
                        "verifyfail" === t[0].event ||
                        "waitUntilVisible" === t[0].event ||
                        "clickIfVisible" === t[0].event
                      ) {
                        var o = JSON.parse(JSON.stringify(t.shift()));
                        return (o.xelement = null), o;
                      }
                      i.error(t[0].event || t[0].target, "@", t[0].xpath, "skipped"), t.shift();
                    }
                    if (0 == t.length) return null;
                    var a = JSON.parse(JSON.stringify(t.shift()));
                    if (!a.target) return (a.xelement = r.XInput.copyFrom(s)), a;
                    if (s.attribute) return (a.xelement = s), a;
                    var u = r.XInput.copyFrom(s);
                    if ("radio" === u.getProperty("type")) {
                      a.xelement = u;
                      for (
                        var l, c = [a];
                        -1 !=
                        (l = t.findIndex(function (e) {
                          return e.target === a.target;
                        }));

                      ) {
                        l > 0 && t.splice(0, l);
                        var h = JSON.parse(JSON.stringify(t.shift())),
                          d = r.XElement.query(h.xpath);
                        d && ((h.xelement = r.XInput.copyFrom(d)), c.push(h));
                      }
                      var p = c.find(function (e) {
                          return e.xelement.element.checked;
                        }),
                        m = null;
                      return (
                        n &&
                          void 0 !== n[a.target] &&
                          (m = c.find(function (e) {
                            return void 0 !== e.value && e.value.toString() === n[a.target].toString();
                          })),
                        m ||
                          (m = c.find(function (e) {
                            return void 0 !== e.param && void 0 !== e.param.value;
                          })),
                        m
                          ? ((m.checkedXElement = p ? p.xelement : null), m)
                          : p
                          ? ((p.checkedXElement = p.xelement), p)
                          : (i.error(a.xpath, c.map((e) => e.xpath).join(", "), "cannot match value, skipping"), e(t, n))
                      );
                    }
                    var f = r.XElement.queryAll(a.xpath, document, !0);
                    if (f.length <= 1) {
                      (s = r.XInput.copyFrom(s)), (a.xelement = s);
                      var g = s.getProperty("tagName");
                      return (
                        ("change" !== a.event && !a.target) ||
                          "input" === g ||
                          "textarea" === g ||
                          "select" === g ||
                          ("checkbox" !== s.getProperty("role").toLowerCase() && !s.element.hasAttribute("aria-checked")) ||
                          ((a.allXElements = f),
                          (a.checkedXElement = s.element.getAttribute("aria-checked") + "" == "true" ? a.xelement : null)),
                        a
                      );
                    }
                    a.allXElements = f;
                    var v = f.find(function (e) {
                        return e.element.getAttribute("aria-checked") + "" == "true";
                      }),
                      _ = null;
                    return (
                      n && void 0 !== n[a.target] && (_ = f[n[a.target]]),
                      _ || (a.param && a.param.value && (_ = f[n[a.param.value]])),
                      _
                        ? ((a.checkedXElement = v), (a.xelement = r.XInput.copyFrom(_)), a)
                        : v
                        ? ((a.xelement = v), (a.checkedXElement = a.xelement), a)
                        : (i.error(a.xpath, f.map((e) => e.xpath).join(", "), "cannot match value, skipping"), e(t, n))
                    );
                  }
                };
              },
              { "./log.js": 16, "@avast/extensions-dom-shared": 6 }
            ],
            12: [
              function (e, t, n) {
                t.exports = async function (e) {
                  var t;
                  await ((t = e),
                  t.complete
                    ? Promise.resolve(t)
                    : new Promise((e) => {
                        t.addEventListener("load", function n() {
                          t.removeEventListener("load", n), e(t);
                        });
                      }));
                  const n = e.getBoundingClientRect();
                  let r = document.createElement("canvas");
                  (r.width = n.width), (r.height = n.height), r.getContext("2d").drawImage(e, 0, 0);
                  return r.toDataURL("image/png").substr("data:image/png;base64,".length);
                };
              },
              {}
            ],
            13: [
              function (e, t, n) {
                "use strict";
                var r = e("@avast/extensions-dom-shared");
                function i(e, t) {
                  if (t.startsWith("mouse")) {
                    var n = e.getBoundingClientRect(),
                      r = { x: n.left + n.width / 2, y: n.top + n.height / 2 },
                      i = { x: r.x + window.scrollX, y: r.y + window.scrollY };
                    (s = document.createEvent("MouseEvents")).initMouseEvent(
                      t,
                      !1,
                      !0,
                      window,
                      null,
                      i.x,
                      i.y,
                      r.x,
                      r.y,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      e.dispatchEvent(s),
                      (o = document.createEvent("MouseEvents")).initEvent(
                        t,
                        !0,
                        !0,
                        window,
                        null,
                        i.x,
                        i.y,
                        r.x,
                        r.y,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                      e.dispatchEvent(o);
                  } else {
                    var s, o;
                    (s = document.createEvent("HTMLEvents")).initEvent(t, !1, !0),
                      e.dispatchEvent(s),
                      (o = document.createEvent("HTMLEvents")).initEvent(t, !0, !0),
                      e.dispatchEvent(o);
                  }
                }
                function s(e, t) {
                  var n = e.getProperty("type"),
                    r = e.element.tagName.toLowerCase();
                  e.element.focus(), i(e.element, "focusin");
                  var s = !e.button && !e.non_text;
                  s |= "select" === r;
                  var o = (!!t && "radio" === n) || ("checkbox" === n && e.getValue() != t);
                  s && i(e.element, "click"),
                    e.setValue(t),
                    o && i(e.element, "click"),
                    i(e.element, "keydown"),
                    i(e.element, "keypress"),
                    i(e.element, "input"),
                    i(e.element, "keyup"),
                    i(e.element, "change"),
                    i(e.element, "focusout"),
                    e.element.blur();
                }
                t.exports = {
                  invokeEvent: i,
                  setWithEvents: s,
                  readOnly: function e(t) {
                    return Array.isArray(t) ? t.some(e) : t.element.disabled || t.element.readOnly;
                  },
                  pressEnter: function (e) {
                    ["keydown", "keypress", "keyup"].forEach((t) => {
                      var n = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
                      n.initEvent && n.initEvent(t, !0, !0),
                        (n.key = "Enter"),
                        (n.code = "Enter"),
                        (n.charCode = 0),
                        (n.keyCode = 13),
                        (n.which = 13),
                        e.element.dispatchEvent(n);
                    });
                  },
                  prefillCredentials: function (e, t, n) {
                    return (
                      (!0 === n || e.type == r.XForm.Type.LOGIN || e.type == r.XForm.Type.EITHER) &&
                      e.inputs.filter(function (e) {
                        var n;
                        if (e.login) n = t.username;
                        else {
                          if (!e.password || e.newPassword) return !1;
                          n = t.password;
                        }
                        return s(e, n), !0;
                      })
                    );
                  }
                };
              },
              { "@avast/extensions-dom-shared": 6 }
            ],
            14: [
              function (e, t, n) {
                const r = e("./prettyArguments.js").deduplicateArguments,
                  i = /(?:^|[^a-zA-Z0-9 ,.]|(?:^|[^0-9])[ ,.])[1-9][0-9][0-9]?(?:$|[^a-zA-Z0-9 ,.]|[ ,.](?:$|[^0-9]))/,
                  s =
                    /\b(?:A[BGKLRZ]|B[CS]|C[AHLMOST]|D[CEFG]|EM|FL|G[ART]|H[GI]|I[ADLN]|JA|K[SY]|LA|M[ABDEINOST]|N[ABCDEHJLMSTUVY]|O[AHKNR]|P[AERU]|Q[CER]|RI|S[CDIKLO]|T[BLMNX]|UT|V[AET]|W[AIVY]|Y[TU])\b/i,
                  o = /[a-zA-Z\u00F0-\uFEFE]/;
                t.exports = function (e, t) {
                  e = r(e);
                  let n = Object.assign({}, e);
                  for (let e in n) n[e] = 0;
                  let a = 0,
                    u = 0,
                    l = 0,
                    c = 0;
                  const h =
                      e.FIRST_NAME && e.LAST_NAME && e.MIDDLE_NAME
                        ? new RegExp(e.FIRST_NAME + " ([a-zA-Zð-﻾][^ ]*) " + e.LAST_NAME, "i")
                        : null,
                    d = e.MIDDLE_NAME ? e.MIDDLE_NAME.toLowerCase() : null,
                    p = d ? d[0] : null,
                    m = t
                      .map((e) => ({ element: e, text: e.innerText }))
                      .map((t) => {
                        t.score = Object.keys(e).reduce((r, i) => {
                          const s = t.text.search("(?:^|[^a-zA-Z0-9])" + e[i] + "(?:$|[^a-zA-Z0-9])") >= 0 ? 1 : 0;
                          return (n[i] = n[i] || s), r + s;
                        }, 0);
                        const r = t.text.match(h);
                        if (r) {
                          const e = r[1].toLowerCase();
                          ((1 == e.length && e[0] !== p) || (e.length > 1 && e !== d)) && (t.score -= 1);
                        }
                        ++a, t.text.search(i) >= 0 && ++u;
                        const m = t.text.search(s);
                        return (
                          m >= 0 && ++l,
                          m > 3 &&
                            " " == t.text[m - 1] &&
                            (t.text[m - 2].match(o) || ("," === t.text[m - 2] && t.text[m - 3].match(o))) &&
                            ++c,
                          t
                        );
                      })
                      .sort((e, t) => t.score - e.score)[0];
                  if (!m) return null;
                  e.AGE && u > a / 2 && (n.AGE = 1), e.STATE_SHORT && l > a / 2 && (n.STATE_SHORT = 1), e.CITY && c > a / 2 && (n.CITY = 1);
                  return Object.keys(n).reduce((e, t) => e + n[t], 0) - m.score <= 1 ? m.element : null;
                };
              },
              { "./prettyArguments.js": 19 }
            ],
            15: [
              function (e, t, n) {
                "use strict";
                var r = /[!$&'()*,;=:@]/;
                t.exports = function (e) {
                  var t = "";
                  e && e.match(/[^:/]+[:][/][/]([^/]+)/)[1] != window.location.host && (t = window.location.origin);
                  var n = window.location.pathname,
                    i = n.search(r);
                  return -1 != i ? n.substr(0, i) : t + n;
                };
              },
              {}
            ],
            16: [
              function (e, t, n) {
                "use strict";
                function r(e) {
                  var t = {};
                  for (var n in e)
                    try {
                      "object" == typeof e[n] ? (t[n] = JSON.stringify(e[n])) : "function" != typeof e[n] && (t[n] = e[n]);
                    } catch (e) {}
                  return t;
                }
                function i() {
                  var e,
                    t = new Date().toISOString();
                  try {
                    var n = null;
                    n.b = 0;
                  } catch (t) {
                    e = t.stack
                      .split(/[\r\n]+/g)
                      .slice(3)
                      .join("\r\n");
                  }
                  var i = Array.prototype.map
                    .call(arguments, function (e) {
                      if ("object" == typeof e && null !== e)
                        try {
                          return JSON.stringify(r(e));
                        } catch (t) {
                          return e.toString();
                        }
                      else {
                        if (e && e.toString) return e.toString();
                        try {
                          return "" + e;
                        } catch (e) {
                          return "";
                        }
                      }
                    })
                    .join(", ");
                  return { message: i, stack: e, url: "undefined" != typeof window ? window.location.href : "", timestamp: t };
                }
                function s() {
                  var e = i.apply(this, arguments);
                  NAPI.request("scraper.log", e);
                }
                (s.debug = function () {
                  var e = i.apply(this, arguments);
                  NAPI.request("scraper.log", e);
                }),
                  (s.error = function () {
                    var e = i.apply(this, arguments);
                    NAPI.request("scraper.log", e);
                  }),
                  (s.log = s.debug),
                  (t.exports = s);
              },
              {}
            ],
            17: [
              function (e, t, n) {
                !(function () {
                  "use strict";
                  const t = e("events");
                  (window.NAPI = {
                    _eventEmitter: new t(),
                    request:
                      "undefined" != typeof app && app.asyncCall
                        ? function (e, t) {
                            return new Promise(function (n, r) {
                              window.app.asyncCall(
                                e,
                                function (e) {
                                  var t = e[0],
                                    i = e[1];
                                  if (i) {
                                    var s;
                                    try {
                                      s = JSON.parse(i);
                                    } catch (e) {
                                      s = { code: -1, message: "Failed to parse JSON error", data: i };
                                    }
                                    if (null != s) return void r(s);
                                  }
                                  if ("string" != typeof t && null != t) n(t);
                                  else
                                    try {
                                      var o = null;
                                      t && (o = JSON.parse(t)), n(o);
                                    } catch (e) {
                                      if ("string" == typeof t) n(t);
                                      else r({ code: -1, message: "Failed to parse JSON response", data: t });
                                    }
                                },
                                t
                              );
                            });
                          }
                        : function (e, t) {
                            if ("string" != typeof t)
                              try {
                                t = JSON.stringify(t);
                              } catch (e) {
                                return Promise.reject({ code: -1, message: "Invalid input", data: e });
                              }
                            var n = window.app.syncCall(e, t);
                            if ("string" != typeof n) return Promise.resolve(n);
                            try {
                              var r = JSON.parse(n);
                              return Array.isArray(r)
                                ? r.length > 1 && r[1]
                                  ? Promise.reject(r[1])
                                  : Promise.resolve(r[0])
                                : Promise.resolve(r);
                            } catch (e) {
                              return Promise.resolve(n);
                            }
                          },
                    on: function (e, t) {
                      return this._eventEmitter.on(e, t), () => this._eventEmitter.removeListener(e, t);
                    },
                    off: function (e, t) {
                      return this._eventEmitter.removeListener(e, t);
                    },
                    once: function (e, t) {
                      return this._eventEmitter.once(e, t), () => this._eventEmitter.removeListener(e, t);
                    }
                  }),
                    (window.app.avEvents = {
                      emitEvent(e, t) {
                        "string" == typeof t && (t = JSON.parse(t)), window.NAPI._eventEmitter.emit(e, t);
                      }
                    });
                })();
              },
              { events: 10 }
            ],
            18: [
              function (e, t, n) {
                "use strict";
                var r = e("events");
                class i extends r {
                  constructor() {
                    super(),
                      (this.ms = 0),
                      (this.timeout = null),
                      (this.startTime = null),
                      (this.pauseTimeout = null),
                      (this.pauseValue = null);
                  }
                  start(e) {
                    void 0 === e && (e = 0),
                      (this.ms = e),
                      (this.startTime = Date.now()),
                      (this.timeout = setTimeout(() => this.emit(i.Event.END), e));
                  }
                  stop(e) {
                    this.pauseTimeout && (clearTimeout(this.pauseTimeout), e && this.emit(i.Event.CONTINUE)),
                      this.expired() || (clearTimeout(this.timeout), (this.startTime = null), this.emit(i.Event.END));
                  }
                  pause(e, t) {
                    if (!this.pauseTimeout) {
                      var n = this.expired();
                      this.pauseValue = t;
                      var r = Date.now() - this.startTime;
                      this.pauseTimeout = setTimeout(() => {
                        (this.pauseTimeout = null), n || this.start(this.ms - r), this.emit(i.Event.CONTINUE, this.pauseValue);
                      }, e);
                    }
                  }
                  pauseUntil(e, t) {
                    if (!this.pauseTimeout) {
                      var n = this.expired();
                      this.pauseValue = t;
                      var r = Date.now() - this.startTime;
                      (this.pauseTimeout = e.catch((e) => {})),
                        this.pauseTimeout.then(() => {
                          (this.pauseTimeout = null), n || this.start(this.ms - r), this.emit(i.Event.CONTINUE, this.pauseValue);
                        });
                    }
                  }
                  expired() {
                    return !this.startTime || Date.now() - this.startTime > this.ms;
                  }
                  paused() {
                    return !!this.pauseTimeout && (void 0 === this.pauseValue || this.pauseValue);
                  }
                  forward(e) {
                    this.emit(e);
                  }
                }
                (i.Event = { END: "end", CONTINUE: "continue" }), (t.exports = i);
              },
              { events: 10 }
            ],
            19: [
              function (e, t, n) {
                "use strict";
                const r = e("@avast/state-codes");
                function i(e) {
                  return e.replace(/([^A-Z])([A-Z])/g, "$1_$2").toUpperCase();
                }
                function s(e) {
                  return (
                    e || (e = []),
                    (e.add = function (e) {
                      return e && this.push(e), this;
                    }.bind(e)),
                    e
                  );
                }
                t.exports = {
                  prettyArguments: function (e) {
                    if ("object" != typeof e) return e;
                    var t = {};
                    if (
                      (Object.keys(e).forEach(function (n) {
                        if (((t[n] = e[n]), n.toUpperCase() !== n)) {
                          var r = i(n);
                          r !== n && (t[r] = e[n]);
                        }
                      }),
                      t.phone && (t.phone = t.phone.replace(/[^+0-9]/g, "")),
                      t.PHONE &&
                        ((t.PHONE = t.PHONE.replace(/[^+0-9]/g, "")),
                        t.PHONE.startsWith("+1")
                          ? (t.LOCAL_PHONE = t.PHONE.substr(2))
                          : t.PHONE.startsWith("+52")
                          ? (t.LOCAL_PHONE = t.PHONE.substr(3))
                          : (t.LOCAL_PHONE = t.PHONE)),
                      t.BIRTH_DAY && !t.AGE)
                    ) {
                      var n = parseInt(t.BIRTH_DAY);
                      isNaN(n) ||
                        (t.AGE = (function (e) {
                          var t = new Date(e),
                            n = new Date(),
                            r = n.getFullYear() - t.getFullYear(),
                            i = n.getMonth() - t.getMonth();
                          (i < 0 || (0 === i && n.getDate() < t.getDate())) && r--;
                          return r;
                        })(n));
                    }
                    if (t.BIRTH_DAY && !t.BIRTH_DATE_DAY && !t.BIRTH_DATE_MONTH && !t.BIRTH_DATE_YEAR) {
                      n = parseInt(t.BIRTH_DAY);
                      if (!isNaN(n)) {
                        var o = new Date(n);
                        (t.BIRTH_DATE_DAY = o.getDate()), (t.BIRTH_DATE_MONTH = o.getMonth() + 1), (t.BIRTH_DATE_YEAR = o.getFullYear());
                      }
                    }
                    if (t.STATE && t.COUNTRY && !t.STATE_SHORT)
                      r[t.COUNTRY] && r[t.COUNTRY][t.STATE] && (t.STATE_SHORT = r[t.COUNTRY][t.STATE]);
                    else if (!t.STATE && t.COUNTRY && t.STATE_SHORT && r[t.COUNTRY])
                      for (var a in r[t.COUNTRY])
                        if (t.STATE_SHORT === r[t.COUNTRY][a]) {
                          t.STATE = a;
                          break;
                        }
                    if (
                      (t.STATE_SHORT && t.CITY && (t.CITY_STATE || (t.CITY_STATE = s().add(t.CITY).add(t.STATE_SHORT).join(", "))),
                      t.STATE && t.CITY && (t.CITY_STATE_FULL || (t.CITY_STATE_FULL = s().add(t.CITY).add(t.STATE).join(", "))),
                      t.STATE &&
                        t.CITY &&
                        t.ZIP &&
                        (t.CITY_STATE_ZIP || (t.CITY_STATE_ZIP = s().add(t.CITY).add(t.STATE).add(t.ZIP).join(", "))),
                      t.MIDDLE_NAME)
                    )
                      for (var u of t.MIDDLE_NAME) {
                        t.MIDDLE_NAME_SHORT = u;
                        break;
                      }
                    return (
                      (t.FIRST_NAME || t.LAST_NAME) &&
                        (t.FIRST_MIDDLE_LAST_NAME ||
                          (t.FIRST_MIDDLE_LAST_NAME = s().add(t.FIRST_NAME).add(t.MIDDLE_NAME).add(t.LAST_NAME).join(" ")),
                        t.FIRST_M_LAST_NAME ||
                          (t.FIRST_M_LAST_NAME = s().add(t.FIRST_NAME).add(t.MIDDLE_NAME_SHORT).add(t.LAST_NAME).join(" ")),
                        t.FIRST_LAST_NAME || (t.FIRST_LAST_NAME = s().add(t.FIRST_NAME).add(t.LAST_NAME).join(" ")),
                        t.LAST_FIRST_NAME || (t.LAST_FIRST_NAME = s().add(t.LAST_NAME).add(t.FIRST_NAME).join(" "))),
                      t
                    );
                  },
                  deduplicateArguments: function (e) {
                    if ("object" != typeof e) return e;
                    var t = {};
                    return (
                      Object.keys(e).forEach(function (n) {
                        if (n.toUpperCase() !== n) {
                          var r = i(n);
                          (void 0 !== e[r] && e[r] === e[n]) || (t[n] = e[n]);
                        } else t[n] = e[n];
                      }),
                      delete t.FIRST_MIDDLE_LAST_NAME,
                      delete t.FIRST_M_LAST_NAME,
                      delete t.FIRST_LAST_NAME,
                      delete t.LAST_FIRST_NAME,
                      delete t.CITY_STATE,
                      delete t.CITY_STATE_ZIP,
                      delete t.CITY_STATE_FULL,
                      delete t.BIRTH_DATE_DAY,
                      delete t.BIRTH_DATE_MONTH,
                      delete t.BIRTH_DATE_YEAR,
                      t
                    );
                  }
                };
              },
              { "@avast/state-codes": 9 }
            ],
            20: [
              function (e, t, n) {
                "use strict";
                const r = JSON.stringify([location.pathname])
                  .split("")
                  .reduce(function (e, t) {
                    return (e = (e << 5) - e + t.charCodeAt(0)) & e;
                  }, 0);
                if (!window.hash || window.hash !== r) {
                  (window.hash = r), e("../napi.js"), NAPI.request("window.setNoneClientAreas", [[0, 0, 50, 50]]);
                  var i = e("../prettyArguments.js").prettyArguments,
                    s = e("./runner.js"),
                    o = null,
                    a = !1,
                    u = {};
                  window.addEventListener("beforeunload", function () {
                    o ? o.reportResult(!0) : (NAPI.request("scraper.result", { status: "ok" }), (a = !0));
                  });
                  var l = null;
                  !(function e() {
                    l !== window.location.pathname &&
                      ((l = window.location.pathname),
                      Promise.all([NAPI.request("scraper.getServiceConfig"), NAPI.request("scraper.getScenarioConfig")])
                        .then((e) => {
                          if (a) return;
                          let t = e[0],
                            n = e[1];
                          (u.credentials = {
                            username: t.login || (t.arguments && t.arguments.login),
                            password: t.password || (t.arguments && t.arguments.password)
                          }),
                            (u.url = t.url),
                            (u.values = i("string" == typeof t.arguments ? JSON.parse(window.atob(t.arguments)) : t.arguments)),
                            (u.scenario = n.scenario),
                            (u.mode = n.mode || (u.values && Object.keys(u.values).length > 0 ? "set" : "get")),
                            (o = new s(u.scenario, u.credentials, u.values, u.mode, u.url)).run(1e3);
                        })
                        .catch((e) => {
                          NAPI.request("scraper.result", { status: "error", message: JSON.stringify(e) }), (a = !0);
                        })
                        .then(() => {
                          setTimeout(e, 1e3);
                        }));
                  })();
                }
              },
              { "../napi.js": 17, "../prettyArguments.js": 19, "./runner.js": 21 }
            ],
            21: [
              function (e, t, n) {
                "use strict";
                var r = e("@avast/extensions-dom-shared"),
                  i = e("../actionList.js"),
                  s = e("../pauseableTimer.js"),
                  o = e("../img2png.js"),
                  { invokeEvent: a, setWithEvents: u, readOnly: l, pressEnter: c, prefillCredentials: h } = e("../inputFill.js"),
                  d = e("../locationPath.js"),
                  p = e("../listSelect.js"),
                  m = e("../log.js");
                class f {
                  constructor(e, t, n, r, i) {
                    (this.actions = e.actions || {}),
                      (this.input = {
                        keys: (e.metadata && e.metadata.input_keys) || [],
                        values: n || {},
                        isValid: function (e) {
                          return !!e.target && void 0 !== this.values[e.target];
                        }
                      }),
                      (this.output = {
                        keys: (e.metadata && e.metadata.output_keys) || [],
                        values: {},
                        initial: {},
                        isValid: function (e) {
                          return !!e.target && -1 != typeof this.keys.indexOf(e.target);
                        }
                      }),
                      (this.autoLogin = !e.metadata || "login_none" !== e.metadata.login),
                      (this.features =
                        e.metadata && e.metadata.features
                          ? e.metadata.features.reduce(function (e, t) {
                              return (e[t] = !0), e;
                            }, {})
                          : {}),
                      (this.credentials = t),
                      (this.failures = []),
                      (this.verified = null),
                      (this.emailVerificationRequired = !1),
                      (this.mode = r),
                      (this._resultReported = !1),
                      (this._injectPath = window.location.pathname),
                      (this._readyPromise = NAPI.request("scraper.tmpStorage.getItem", {
                        key: this._injectPath + "_avast_scraper_lastAction"
                      })
                        .catch((e) => localStorage.getItem(this._injectPath + "_avast_scraper_lastAction"))
                        .then((e) => {
                          var t = e;
                          "+LOGIN" === t ? ((t = null), (this.preventLogin = !0)) : (this.preventLogin = !1),
                            (this.lastScenarioAction = t),
                            (this.lastInstanceAction = t),
                            (this.initUrl = i),
                            (this.timer = new s()),
                            (this.stage = f.Stage.NOT_RUN);
                        }));
                  }
                  get stage() {
                    return this._stage;
                  }
                  set stage(e) {
                    try {
                      null.b = 0;
                    } catch (e) {
                      e.stack.split(/[\r\n]+/g).slice(2)[0];
                    }
                    this._stage = e;
                  }
                  resolveCaptcha(e) {
                    return new Promise((t, n) => {
                      NAPI.once("scraper.captchaSolved", (e) => {
                        t({ data: e.solvedCaptcha });
                      }),
                        NAPI.request("scraper.captcha", e).then((e) => {
                          e && e.data && (NAPI.off("scraper.captchaSolved", t), t(e));
                        });
                    });
                  }
                  run(e) {
                    this._readyPromise.then(() => {
                      var t;
                      (this.stage = f.Stage.GET),
                        this.timer.on(s.Event.END, () => {
                          t.disconnect(),
                            (this.stage != f.Stage.END && (this.onDocumentChange(), this.timer.paused())) || this.reportResult();
                        }),
                        (t = new MutationObserver((e) => {
                          this.onDocumentChange();
                        })),
                        this.timer.on(s.Event.CONTINUE, (e) => {
                          this.onDocumentChange(e), this.timer.expired() && this.timer.forward(s.Event.END);
                        }),
                        this.timer.start(e),
                        t.observe(document, { childList: !0, subtree: !0, attributes: !0 }),
                        this.onDocumentChange();
                    });
                  }
                  reportResult(e) {
                    if ((window == window.top || this.hasAnythingToDo()) && !this._resultReported)
                      if (
                        ((this._resultReported = !0),
                        !(this.stage == f.Stage.END && this.failures.length > 0) || (null !== this.verified && this.features.verify))
                      )
                        if (this.stage == f.Stage.END || e) {
                          t = { status: "ok", arguments: this.output.values, email_verification_required: this.emailVerificationRequired };
                          !0 === this.verified
                            ? ((t.verified = this.verified), NAPI.request("scraper.result", t))
                            : !1 === this.verified
                            ? (t.verified = this.verified)
                            : ((t.message = `Scenario continues on another page. Original page: ${d(this.initUrl)}`),
                              NAPI.request("scraper.result", t),
                              setTimeout(() => {}, 8e3));
                        } else;
                      else {
                        var t = {
                          status: "error",
                          message: this.failures.map((e) => ("object" == typeof e ? JSON.stringify(e) : "" + e)).join(";")
                        };
                        null !== this.verified && (t.verified = this.verified);
                      }
                  }
                  onDocumentChange(e) {
                    if (this.stage && !this.timer.paused()) {
                      var t;
                      do {
                        var n = (r = void 0 !== e ? e : this[this.stage]()).next();
                        if (!n.done)
                          return void ("object" == typeof n.value && "function" == typeof n.value.then
                            ? this.timer.pauseUntil(n.value, r)
                            : this.timer.pause(n.value, r));
                        if ((t = n.value) == this.stage) break;
                        this.stage = t;
                      } while (this.stage != f.Stage.END);
                      if (this.stage == f.Stage.END) {
                        var r = this[this.stage]();
                        this.stage = r.next().value;
                      }
                    }
                  }
                  hasAnythingToDo() {
                    var e = d(this.initUrl);
                    return !!this.actionsForUrl(e);
                  }
                  actionsForUrl(e) {
                    if (this.actions[e]) return this.actions[e];
                    var t = "";
                    return (
                      Object.keys(this.actions).forEach((n) => {
                        n.endsWith(":*") && e.startsWith(n.substr(0, n.length - 2)) && n.length > t.length && (t = n);
                      }),
                      t ? this.actions[t] : null
                    );
                  }
                  waitForElementToDisplay(e, t) {
                    return new Promise((n, r) => {
                      const i = document.evaluate(e, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                      if (new Date().getTime() > t) return m(`Element with xpath: ${e} not found in timeout (${t} ms).`), void r();
                      i ? n(i) : setTimeout(() => n(this.waitForElementToDisplay(e, t)), 500);
                    });
                  }
                  clickElement(e) {
                    a(e, "mouseenter"),
                      a(e, "mouseover"),
                      a(e, "mousedown"),
                      a(e, "mouseup"),
                      e.click(),
                      setTimeout(function () {
                        a(e, "mouseover");
                      }, 50);
                  }
                  clickElementIn(e, t = 2e3) {
                    return new Promise((n, r) => {
                      setTimeout(() => (this.clickElement(e), n()), t);
                    });
                  }
                  *processGetStage() {
                    for (
                      var e = i
                          .trim(this.actionsForUrl(d(this.initUrl)) || [], this.lastScenarioAction)
                          .filter((e) => this.output.isValid(e) && "set" !== e.mode),
                        t = e.reduce(function (e, t) {
                          return t.target && -1 == e.indexOf(t.target) && e.push(t.target), e;
                        }, []),
                        n = 0;
                      e.length > 0;

                    ) {
                      var r = i.advance(e);
                      if (null !== r) {
                        var s = this.performGetAction(r);
                        null !== s && (this.output.values[r.target] = s),
                          void 0 === this.output.initial[r.target] && null !== s
                            ? (this.output.initial[r.target] = s)
                            : this.output.initial[r.target] != this.output.values[r.target] && ++n;
                      }
                    }
                    return this.timer.expired()
                      ? this.features.login
                        ? f.Stage.ACTIONS
                        : f.Stage.LOGIN
                      : n != t.length
                      ? f.Stage.GET
                      : this.features.login
                      ? f.Stage.ACTIONS
                      : f.Stage.LOGIN;
                  }
                  *processLoginStage() {
                    if (!this.credentials || this.preventLogin) return f.Stage.ACTIONS;
                    for (var e, t = !1, n = !1, i = r.XForm.search(), s = 0; s < i.length; ++s)
                      if ((e = h(i[s], this.credentials)).length > 0 && this.autoLogin) {
                        window.addEventListener("beforeunload", l, !0),
                          window.addEventListener("unload", d),
                          NAPI.request("scraper.tmpStorage.setItem", {
                            key: this._injectPath + "_avast_scraper_lastAction",
                            value: "+LOGIN"
                          }).catch((e) => localStorage.setItem(this._injectPath + "_avast_scraper_lastAction", "+LOGIN")),
                          (this.preventLogin = !0);
                        var o,
                          a,
                          u = e[e.length - 1];
                        if ((c(u), yield 100, t)) {
                          for (o = 300; !n && !i[s].hidden && --o > 0; ) yield 100;
                          if (o > 0) {
                            m((Date.now() % 1e5) / 1e3, "unloaded");
                            break;
                          }
                        }
                        if (i[s].submitButton && (i[s].submitButton.element.click(), yield 100, t)) {
                          for (m((Date.now() % 1e5) / 1e3, "unloading"), o = 300; !n && !i[s].hidden && --o > 0; ) yield 100;
                          if (o > 0) {
                            m((Date.now() % 1e5) / 1e3, "unloaded");
                            break;
                          }
                        }
                        if ((a = e.find((e) => e.element.form)) && (a.element.form.submit(), yield 100, t)) {
                          for (o = 300; !n && !i[s].hidden && --o > 0; ) yield 100;
                          if (o > 0) {
                            m((Date.now() % 1e5) / 1e3, "unloaded");
                            break;
                          }
                        }
                        try {
                          if ((HTMLFormElement.prototype.submit.call(i[s].element), yield 100, t)) {
                            for (m((Date.now() % 1e5) / 1e3, "unloading"), o = 300; !n && !i[s].hidden && --o > 0; ) yield 100;
                            if (o > 0) {
                              m((Date.now() % 1e5) / 1e3, "unloaded");
                              break;
                            }
                          }
                        } catch (e) {}
                        break;
                      }
                    return window.removeEventListener("unload", d), window.removeEventListener("beforeunload", l, !0), f.Stage.ACTIONS;
                    function l(e) {
                      e.defaultPrevented || (t = !0);
                    }
                    function d(e) {
                      n = !0;
                    }
                  }
                  *processActionStage() {
                    var e = d(this.initUrl),
                      t = i.trim(this.actionsForUrl(e) || [], this.lastInstanceAction),
                      n = !1,
                      r = 0;
                    function s() {
                      t.length > 0 && m(t.length + " actions left upon unload");
                    }
                    for (0 == t.length && m("no actions"), window.addEventListener("beforeunload", s); t.length > 0; ) {
                      var o = t[0].delay || 0,
                        a = t[0].xpath;
                      if ((o - r > 0 ? ((o -= r), yield o) : (o = 0), e !== d(this.initUrl))) {
                        s();
                        break;
                      }
                      var u = i.advance(t, this.input.values);
                      if (null === u) break;
                      a == u.xpath ? (r = 0) : (r += o);
                      var l = this.performAction(u);
                      switch (
                        (l == f._ActionResult.PROMISE &&
                          (u.promise.then(function (e) {
                            l = e;
                          }),
                          yield u.promise),
                        l != f._ActionResult.WAIT || this.timer.expired() || (yield 50, (l = this.performAction(u))),
                        l)
                      ) {
                        case f._ActionResult.ERROR:
                        case f._ActionResult.SKIP:
                        case f._ActionResult.WAIT:
                          break;
                        case f._ActionResult.SUCCESS:
                          (n = !0),
                            (this.lastInstanceAction = u.xpath),
                            NAPI.request("scraper.tmpStorage.setItem", {
                              key: this._injectPath + "_avast_scraper_lastAction",
                              value: this.lastInstanceAction
                            }).catch((e) => localStorage.setItem(this._injectPath + "_avast_scraper_lastAction", this.lastInstanceAction));
                          break;
                        case f._ActionResult.QUIT:
                          return f.Stage.END;
                      }
                    }
                    return n || this.timer.expired() ? f.Stage.END : f.Stage.ACTIONS;
                  }
                  *processEndStage() {
                    return this.timer.stop(), f.Stage.END;
                  }
                  performGetAction(e) {
                    if (e.allXElements)
                      return e.allXElements.length > 1
                        ? e.checkedXElement
                          ? e.allXElements.findIndex(function (t) {
                              return t.element == e.checkedXElement.element;
                            })
                          : -1
                        : e.checkedXElement
                        ? "true"
                        : "false";
                    var t = e.xelement.getValue();
                    if (void 0 === e.value) return t;
                    if ("object" == typeof e.value) return void 0 !== e.value[t] ? e.value[t] : (this.failures.push(e.xpath), null);
                    if ("checkbox" === e.xelement.getProperty("type")) return "true" === t.toString() ? e.value : !e.value;
                    if (
                      "radio" === e.xelement.getProperty("type") &&
                      "input" === e.xelement.getProperty("tagName") &&
                      e.xelement.getProperty("name")
                    ) {
                      if ("true" === t.toString()) return e.value;
                      var n = document.querySelectorAll('input[type="radio"][name="' + e.xelement.getProperty("name") + '"]'),
                        i = Array.prototype.find.call(n, (e) => e.checked);
                      if (!i) return null;
                      var s = new r.XElement(i),
                        o = (this.actionsForUrl(d(this.initUrl)) || []).find((e) => s.matches(e.xpath));
                      return o ? o.value : null;
                    }
                    return null;
                  }
                  performAction(e) {
                    if (e.target) {
                      var t = this.performGetAction(e);
                      e.target && e.target.startsWith("$")
                        ? "get" === e.mode && NAPI.request("scraper.tmpStorage.setItem", { key: e.target, value: t })
                        : null !== t && (this.output.values[e.target] = t);
                    }
                    if (e.mode && e.mode !== this.mode) return f._ActionResult.SKIP;
                    if (("get" != this.mode && this.input.isValid(e)) || "change" === e.event) {
                      if (e.allXElements) return e.xelement != e.checkedXElement && e.xelement.element.click(), f._ActionResult.SUCCESS;
                      if (l(e.xelement)) return f._ActionResult.WAIT;
                      var n;
                      if ("radio" === e.xelement.getProperty("type")) n = !0;
                      else {
                        if (e.target && e.target.startsWith("$"))
                          return (
                            (e.promise = NAPI.request("scraper.tmpStorage.getItem", { key: e.target })
                              .then((t) => (u(e.xelement, t), f._ActionResult.SUCCESS))
                              .catch((e) => (this.failures.push("" + e), f._ActionResult.ERROR))),
                            f._ActionResult.PROMISE
                          );
                        if (
                          ((n = void 0 !== this.input.values[e.target] ? this.input.values[e.target] : e.param.value),
                          "object" == typeof e.value)
                        ) {
                          for (var i in e.value)
                            if (e.value[i].toString() == n.toString()) {
                              n = i;
                              break;
                            }
                        } else
                          void 0 !== e.value &&
                            "checkbox" === e.xelement.getProperty("type") &&
                            (n = "true" === e.value.toString() ? "true" === n.toString() : "true" !== n.toString());
                      }
                      return u(e.xelement, n), f._ActionResult.SUCCESS;
                    }
                    switch (e.event) {
                      case "click":
                        return this.clickElement(e.xelement.element), f._ActionResult.SUCCESS;
                      case "clickAndQuit":
                        return (this.verified = !0), this.clickElement(e.xelement.element), f._ActionResult.QUIT;
                      case "navigate":
                        return window.location.href != e.param.href && ((window.location.href = e.param.href), f._ActionResult.SUCCESS);
                      case "quitok":
                        return (this.verified = !0), f._ActionResult.QUIT;
                      case "quitfail":
                        return (
                          this.failures.push("Precondition verification failed: element " + e.xpath + " found"),
                          (this.verified = !1),
                          f._ActionResult.QUIT
                        );
                      case "verifyok":
                        return (
                          e.xelement
                            ? (this.failures = [])
                            : this.failures.push("Result verification failed: element " + e.xpath + " not found"),
                          (this.verified = !!e.xelement),
                          e.param && e.param.emailVerificationRequired && (this.emailVerificationRequired = !0),
                          f._ActionResult.QUIT
                        );
                      case "verifyfail":
                        return (
                          e.xelement
                            ? this.failures.push("Result verification failed: element " + e.xpath + " found")
                            : (this.failures = []),
                          (this.verified = !e.xelement),
                          f._ActionResult.QUIT
                        );
                      case "login":
                        var s = r.XForm.search(),
                          a = s.find((t) => {
                            for (var n = e.xelement.element; null != n; ) {
                              if (t == n) return !0;
                              n = n.parentElement;
                            }
                            return !1;
                          });
                        if ((a || (a = s.find((e) => e.isLogin)), !a)) {
                          if (0 == s.length) return this.failures.push("Cannot find login form for " + e.xpath), f._ActionResult.ERROR;
                          a = s[0];
                        }
                        return 0 == h(a, this.credentials, !0)
                          ? (this.failures.push("Cannot fill login credentials for " + e.xpath), f._ActionResult.ERROR)
                          : (e.xelement.element.click(), f._ActionResult.SUCCESS);
                      case "simplecaptcha":
                        if ("HTMLImageElement" === e.xelement.element.constructor.name)
                          return (d = r.XElement.query(e.param.setXPath, document, !0))
                            ? ((d = r.XInput.copyFrom(d)), u(d, "123"), f._ActionResult.SUCCESS)
                            : (this.failures.push("Cannot find", e.param.setXPath), f._ActionResult.ERROR);
                        if (
                          (e.xelement.element.classList.contains("g-recaptcha") &&
                            Element.prototype.hasAttribute.call(e.xelement.element, "data-sitekey")) ||
                          e.xelement.element.querySelector('iframe[src*="/recaptcha/api"]')
                        ) {
                          if (!(d = r.XElement.query('.//*[@id="g-recaptcha-response"]', e.xelement.element, !0)))
                            return this.failures.push("Cannot find", './/*[@id="g-recaptcha-response"]'), f._ActionResult.ERROR;
                          (d = r.XInput.copyFrom(d)), u(d, "123");
                          var c = Element.prototype.getAttribute.call(e.xelement.element, "data-callback");
                          return c && "function" == typeof window[c] && window[c]("123"), f._ActionResult.SUCCESS;
                        }
                        return this.failures.push("unknown captcha type for " + e.xpath), f._ActionResult.ERROR;
                      case "captcha":
                        var d;
                        if ("HTMLImageElement" === e.xelement.element.constructor.name)
                          return (d = r.XElement.query(e.param.setXPath, document, !0))
                            ? ((d = r.XInput.copyFrom(d)),
                              (e.promise = o(e.xelement.element)
                                .then((e) => this.resolveCaptcha({ type: "normal", data: { method: "base64", regsense: "1", body: e } }))
                                .then((t) => {
                                  let n = t.data;
                                  return (
                                    e.param.caseSensitive && "uppercase" === e.param.caseSensitive
                                      ? (n = n.toUpperCase())
                                      : e.param.caseSensitive && "lowercase" === e.param.caseSensitive && (n = n.toLowerCase()),
                                    u(d, n),
                                    f._ActionResult.SUCCESS
                                  );
                                })
                                .catch((e) => (this.failures.push("" + e), f._ActionResult.ERROR))),
                              f._ActionResult.PROMISE)
                            : (this.failures.push("Cannot find", e.param.setXPath), f._ActionResult.ERROR);
                        if (
                          (e.xelement.element.classList.contains("g-recaptcha") &&
                            Element.prototype.hasAttribute.call(e.xelement.element, "data-sitekey")) ||
                          e.xelement.element.querySelector('iframe[src*="/recaptcha/api"]')
                        ) {
                          if (!(d = r.XElement.query('.//*[@id="g-recaptcha-response"]', e.xelement.element, !0)))
                            return this.failures.push("Cannot find", './/*[@id="g-recaptcha-response"]'), f._ActionResult.ERROR;
                          d = r.XInput.copyFrom(d);
                          var m = Element.prototype.getAttribute.call(e.xelement.element, "data-sitekey");
                          if (!m) {
                            var g = e.xelement.element.querySelector('iframe[src*="/recaptcha/api"]').src.match(/[?&]k[=]([^&]+)/);
                            if (!g) return this.failures.push("Cannot google key in reCaptcha iframe"), f._ActionResult.ERROR;
                            m = g[1];
                          }
                          return (
                            (e.promise = this.resolveCaptcha({
                              type: "recaptcha2",
                              data: { method: "userrecaptcha", googlekey: m, pageurl: window.location.href }
                            })
                              .then((t) => {
                                u(d, t.data);
                                var n = Element.prototype.getAttribute.call(e.xelement.element, "data-callback");
                                return n && "function" == typeof window[n] && window[n](t.data), f._ActionResult.SUCCESS;
                              })
                              .catch((e) => (this.failures.push("" + e), f._ActionResult.ERROR))),
                            f._ActionResult.PROMISE
                          );
                        }
                        return this.failures.push("unknown captcha type for " + e.xpath), f._ActionResult.ERROR;
                      case "listselect":
                        const t = r.XElement.queryAll(e.xpath, document, !0).map((e) => e.element);
                        let n = p(this.input.values, t);
                        if (!n)
                          return e.param && "verifyok" === e.param.notFound
                            ? ((this.verified = !0), f._ActionResult.QUIT)
                            : e.param && "verifyfail" === e.param.notFound
                            ? ((this.verified = !1), f._ActionResult.QUIT)
                            : (this.failures.push("cannot select from " + e.xpath), f._ActionResult.ERROR);
                        if (e.param.target)
                          return (
                            (n = r.XElement.query(e.param.setXPath, n, !0)),
                            this.performAction({ xelement: n, mode: "get", xpath: e.xpath, target: e.param.target })
                          );
                        if (e.param && e.param.setXPath) {
                          if (((n = r.XElement.query(e.param.setXPath, n, !0)), !n))
                            return (
                              this.failures.push("cannot find clickable element from " + e.xpath + " (" + e.param.setXPath + ")"),
                              f._ActionResult.ERROR
                            );
                          n = n.element;
                        }
                        return this.performAction({ event: "click", xelement: new r.XElement(n), xpath: e.xpath });
                      case "copyurl":
                        let i;
                        return (
                          (i = e.param && !e.param.fullPath ? window.location.pathname : window.location.href),
                          NAPI.request("scraper.tmpStorage.setItem", {
                            key: e.param && e.param.target ? e.param.target : "$URL",
                            value: i
                          }),
                          f._ActionResult.SUCCESS
                        );
                      case "waitUntilVisible":
                        const l = new Date().getTime() + e.timeout;
                        return (
                          (e.promise = this.waitForElementToDisplay(e.xpath, l)
                            .then(() => f._ActionResult.SUCCESS)
                            .catch(() => f._ActionResult.SKIP)),
                          f._ActionResult.PROMISE
                        );
                      case "clickIfVisible":
                        const v = new Date().getTime() + e.timeout;
                        return (
                          (e.promise = this.waitForElementToDisplay(e.xpath, v)
                            .then((t) => {
                              e.promise = this.clickElementIn(t)
                                .then(() => f._ActionResult.SUCCESS)
                                .catch(() => f._ActionResult.SKIP);
                            })
                            .catch(() => f._ActionResult.SKIP)),
                          f._ActionResult.PROMISE
                        );
                      case "scrapeHTML":
                        const _ = e.xelement.element.innerHTML;
                        return NAPI.request("scraper.scrapeHTML.result", { scrape: _ }), f._ActionResult.SUCCESS;
                      case "batchClickAndScrape":
                        r.XElement.queryAll(e.xpath, document, !0)
                          .map((e) => e.element)
                          .forEach((e) => {
                            this.clickElement(e);
                          });
                        const y = r.XElement.queryAll(e.scrapeXpath, document, !0)
                          .map((e) => e.element)
                          .map((e) => e.innerHTML);
                        return NAPI.request("scraper.scrapeHTML.result", { scrapes: y }), f._ActionResult.SUCCESS;
                    }
                    return f._ActionResult.ERROR;
                  }
                }
                (f.Stage = {
                  NOT_RUN: null,
                  GET: "processGetStage",
                  LOGIN: "processLoginStage",
                  ACTIONS: "processActionStage",
                  END: "processEndStage",
                  name: function (e) {
                    for (var t in f.Stage) if (f.Stage[t] == e) return t;
                  }
                }),
                  (f._ActionResult = { ERROR: 0, SUCCESS: -1, QUIT: -2, SKIP: -3, WAIT: -4, PROMISE: -5 }),
                  (t.exports = f);
              },
              {
                "../actionList.js": 11,
                "../img2png.js": 12,
                "../inputFill.js": 13,
                "../listSelect.js": 14,
                "../locationPath.js": 15,
                "../log.js": 16,
                "../pauseableTimer.js": 18,
                "@avast/dump-dom-extension": 1,
                "@avast/extensions-dom-shared": 6
              }
            ]
          },
          {},
          [20]
        );
      }
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, n), s.exports;
  }
  (() => {
    "use strict";
    class e {
      constructor(e) {
        this.execute = e;
      }
      enable() {
        return this.execute("browserAction", "enable", ...arguments);
      }
      disable() {
        return this.execute("browserAction", "disable", ...arguments);
      }
      setTitle() {
        return this.execute("browserAction", "setTitle", ...arguments);
      }
      setIcon() {
        return this.execute("browserAction", "setIcon", ...arguments);
      }
      setBadgeText() {
        return this.execute("browserAction", "setBadgeText", ...arguments);
      }
      setBadgeTextColor() {
        return this.execute("browserAction", "setBadgeTextColor", ...arguments);
      }
      setBadgeBackgroundColor() {
        return this.execute("browserAction", "setBadgeBackgroundColor", ...arguments);
      }
      get onClicked() {
        return {
          addListener: this.execute.bind(this, "browserAction.onClicked", "addListener"),
          hasListener: this.execute.bind(this, "browserAction.onClicked", "hasListener"),
          removeListener: this.execute.bind(this, "browserAction.onClicked", "removeListener")
        };
      }
    }
    class t {
      constructor(e) {
        this.execute = e;
      }
      getURL() {
        return this.execute("extension", "getURL", ...arguments);
      }
    }
    class r {
      constructor(e) {
        this.execute = e;
      }
      get lastError() {
        return this.execute("runtime", "lastError");
      }
      get onInstalled() {
        return {
          addListener: this.execute.bind(this, "runtime.onInstalled", "addListener"),
          hasListener: this.execute.bind(this, "runtime.onInstalled", "hasListener"),
          removeListener: this.execute.bind(this, "runtime.onInstalled", "removeListener")
        };
      }
      get onMessage() {
        return {
          addListener: this.execute.bind(this, "runtime.onMessage", "addListener"),
          hasListener: this.execute.bind(this, "runtime.onMessage", "hasListener"),
          removeListener: this.execute.bind(this, "runtime.onMessage", "removeListener")
        };
      }
      sendMessage() {
        return this.execute("runtime", "sendMessage", ...arguments);
      }
      setUninstallURL() {
        return this.execute("runtime", "setUninstallURL", ...arguments);
      }
      getManifest() {
        return this.execute("runtime", "getManifest", ...arguments);
      }
      getURL() {
        return this.execute("runtime", "getURL", ...arguments);
      }
      reload() {
        return this.execute("runtime", "reload");
      }
    }
    class i {
      constructor(e) {
        this.execute = e;
      }
      getUILanguage() {
        return this.execute("i18n", "getUILanguage");
      }
      getMessage() {
        return this.execute("i18n", "getMessage", ...arguments);
      }
    }
    class s {
      constructor(e, t) {
        (this.execute = e), (this.browser = t);
      }
      get onChanged() {
        return this.browser.storage.onChanged;
      }
      get local() {
        return {
          get: this.execute.bind(this, "storage.local", "get"),
          set: this.execute.bind(this, "storage.local", "set"),
          remove: this.execute.bind(this, "storage.local", "remove"),
          clear: this.execute.bind(this, "storage.local", "clear"),
          getBytesInUse: this.execute.bind(this, "storage.local", "getBytesInUse")
        };
      }
      get sync() {
        return {
          get: this.execute.bind(this, "storage.sync", "get"),
          set: this.execute.bind(this, "storage.sync", "set"),
          remove: this.execute.bind(this, "storage.sync", "remove"),
          clear: this.execute.bind(this, "storage.sync", "clear")
        };
      }
    }
    class o {
      constructor(e) {
        this.execute = e;
      }
      sendMessage() {
        return this.execute("tabs", "sendMessage", ...arguments);
      }
      create() {
        return this.execute("tabs", "create", ...arguments);
      }
      get() {
        return this.execute("tabs", "get", ...arguments);
      }
      query() {
        return this.execute("tabs", "query", ...arguments);
      }
      remove() {
        return this.execute("tabs", "remove", ...arguments);
      }
      update() {
        return this.execute("tabs", "update", ...arguments);
      }
      executeScript() {
        return this.execute("tabs", "executeScript", ...arguments);
      }
      insertCSS() {
        return this.execute("tabs", "insertCSS", ...arguments);
      }
      get onActivated() {
        return {
          addListener: this.execute.bind(this, "tabs.onActivated", "addListener"),
          hasListener: this.execute.bind(this, "tabs.onActivated", "hasListener"),
          removeListener: this.execute.bind(this, "tabs.onActivated", "removeListener")
        };
      }
      get onUpdated() {
        return {
          addListener: this.execute.bind(this, "tabs.onUpdated", "addListener"),
          hasListener: this.execute.bind(this, "tabs.onUpdated", "hasListener"),
          removeListener: this.execute.bind(this, "tabs.onUpdated", "removeListener")
        };
      }
      get onCreated() {
        return {
          addListener: this.execute.bind(this, "tabs.onCreated", "addListener"),
          hasListener: this.execute.bind(this, "tabs.onCreated", "hasListener"),
          removeListener: this.execute.bind(this, "tabs.onCreated", "removeListener")
        };
      }
      get onRemoved() {
        return {
          addListener: this.execute.bind(this, "tabs.onRemoved", "addListener"),
          hasListener: this.execute.bind(this, "tabs.onRemoved", "hasListener"),
          removeListener: this.execute.bind(this, "tabs.onRemoved", "removeListener")
        };
      }
    }
    class a {
      constructor(e) {
        this.execute = e;
      }
      create() {
        return this.execute("windows", "create", ...arguments);
      }
      update() {
        return this.execute("windows", "update", ...arguments);
      }
      remove() {
        return this.execute("windows", "remove", ...arguments);
      }
      get() {
        return this.execute("windows", "get", ...arguments);
      }
      get onFocusChanged() {
        return {
          addListener: this.execute.bind(this, "windows.onFocusChanged", "addListener"),
          hasListener: this.execute.bind(this, "windows.onFocusChanged", "hasListener"),
          removeListener: this.execute.bind(this, "windows.onFocusChanged", "removeListener")
        };
      }
    }
    class u {
      constructor(e) {
        this.execute = e;
      }
      get onCommitted() {
        return {
          addListener: this.execute.bind(this, "webNavigation.onCommitted", "addListener"),
          hasListener: this.execute.bind(this, "webNavigation.onCommitted", "hasListener"),
          removeListener: this.execute.bind(this, "webNavigation.onCommitted", "removeListener")
        };
      }
      get onHistoryStateUpdated() {
        return {
          addListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "addListener"),
          hasListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "hasListener"),
          removeListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "removeListener")
        };
      }
      get onReferenceFragmentUpdated() {
        return {
          addListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "addListener"),
          hasListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "hasListener"),
          removeListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "removeListener")
        };
      }
      get onBeforeNavigate() {
        return {
          addListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "addListener"),
          hasListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "hasListener"),
          removeListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "removeListener")
        };
      }
      get onDOMContentLoaded() {
        return {
          addListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "addListener"),
          hasListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "hasListener"),
          removeListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "removeListener")
        };
      }
      get onCompleted() {
        return {
          addListener: this.execute.bind(this, "webNavigation.onCompleted", "addListener"),
          hasListener: this.execute.bind(this, "webNavigation.onCompleted", "hasListener"),
          removeListener: this.execute.bind(this, "webNavigation.onCompleted", "removeListener")
        };
      }
      get onErrorOccurred() {
        return {
          addListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "addListener"),
          hasListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "hasListener"),
          removeListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "removeListener")
        };
      }
    }
    class l {
      constructor(e) {
        this.execute = e;
      }
      get onBeforeRequest() {
        return {
          addListener: this.execute.bind(this, "webRequest.onBeforeRequest", "addListener"),
          hasListener: this.execute.bind(this, "webRequest.onBeforeRequest", "hasListener"),
          removeListener: this.execute.bind(this, "webRequest.onBeforeRequest", "removeListener")
        };
      }
      get onBeforeRedirect() {
        return {
          addListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "addListener"),
          hasListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "hasListener"),
          removeListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "removeListener")
        };
      }
      get onSendHeaders() {
        return {
          addListener: this.execute.bind(this, "webRequest.onSendHeaders", "addListener"),
          hasListener: this.execute.bind(this, "webRequest.onSendHeaders", "hasListener"),
          removeListener: this.execute.bind(this, "webRequest.onSendHeaders", "removeListener")
        };
      }
      get onHeadersReceived() {
        return {
          addListener: this.execute.bind(this, "webRequest.onHeadersReceived", "addListener"),
          hasListener: this.execute.bind(this, "webRequest.onHeadersReceived", "hasListener"),
          removeListener: this.execute.bind(this, "webRequest.onHeadersReceived", "removeListener")
        };
      }
      get onBeforeSendHeaders() {
        return {
          addListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "addListener"),
          hasListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "hasListener"),
          removeListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "removeListener")
        };
      }
      get onResponseStarted() {
        return {
          addListener: this.execute.bind(this, "webRequest.onResponseStarted", "addListener"),
          hasListener: this.execute.bind(this, "webRequest.onResponseStarted", "hasListener"),
          removeListener: this.execute.bind(this, "webRequest.onResponseStarted", "removeListener")
        };
      }
      get onCompleted() {
        return {
          addListener: this.execute.bind(this, "webRequest.onCompleted", "addListener"),
          hasListener: this.execute.bind(this, "webRequest.onCompleted", "hasListener"),
          removeListener: this.execute.bind(this, "webRequest.onCompleted", "removeListener")
        };
      }
      get onErrorOccurred() {
        return {
          addListener: this.execute.bind(this, "webRequest.onErrorOccurred", "addListener"),
          hasListener: this.execute.bind(this, "webRequest.onErrorOccurred", "hasListener"),
          removeListener: this.execute.bind(this, "webRequest.onErrorOccurred", "removeListener")
        };
      }
    }
    const c = Array.isArray;
    const h = "object" == typeof global && global && global.Object === Object && global;
    var d = "object" == typeof self && self && self.Object === Object && self;
    const p = h || d || Function("return this")();
    const m = p.Symbol;
    var f = Object.prototype,
      g = f.hasOwnProperty,
      v = f.toString,
      _ = m ? m.toStringTag : void 0;
    const y = function (e) {
      var t = g.call(e, _),
        n = e[_];
      try {
        e[_] = void 0;
        var r = !0;
      } catch (e) {}
      var i = v.call(e);
      return r && (t ? (e[_] = n) : delete e[_]), i;
    };
    var E = Object.prototype.toString;
    const b = function (e) {
      return E.call(e);
    };
    var A = m ? m.toStringTag : void 0;
    const T = function (e) {
      return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : A && A in Object(e) ? y(e) : b(e);
    };
    const w = function (e) {
      return null != e && "object" == typeof e;
    };
    const x = function (e) {
      return "symbol" == typeof e || (w(e) && "[object Symbol]" == T(e));
    };
    var R = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      N = /^\w*$/;
    const L = function (e, t) {
      if (c(e)) return !1;
      var n = typeof e;
      return (
        !("number" != n && "symbol" != n && "boolean" != n && null != e && !x(e)) ||
        N.test(e) ||
        !R.test(e) ||
        (null != t && e in Object(t))
      );
    };
    const S = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const C = function (e) {
      if (!S(e)) return !1;
      var t = T(e);
      return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    };
    const I = p["__core-js_shared__"];
    var O,
      M = (O = /[^.]+$/.exec((I && I.keys && I.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + O : "";
    const D = function (e) {
      return !!M && M in e;
    };
    var P = Function.prototype.toString;
    const U = function (e) {
      if (null != e) {
        try {
          return P.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    };
    var k = /^\[object .+?Constructor\]$/,
      F = Function.prototype,
      X = Object.prototype,
      H = F.toString,
      j = X.hasOwnProperty,
      q = RegExp(
        "^" +
          H.call(j)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
    const B = function (e) {
      return !(!S(e) || D(e)) && (C(e) ? q : k).test(U(e));
    };
    const Y = function (e, t) {
      return null == e ? void 0 : e[t];
    };
    const G = function (e, t) {
      var n = Y(e, t);
      return B(n) ? n : void 0;
    };
    const V = G(Object, "create");
    const W = function () {
      (this.__data__ = V ? V(null) : {}), (this.size = 0);
    };
    const z = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    };
    var J = Object.prototype.hasOwnProperty;
    const $ = function (e) {
      var t = this.__data__;
      if (V) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n;
      }
      return J.call(t, e) ? t[e] : void 0;
    };
    var K = Object.prototype.hasOwnProperty;
    const Z = function (e) {
      var t = this.__data__;
      return V ? void 0 !== t[e] : K.call(t, e);
    };
    const Q = function (e, t) {
      var n = this.__data__;
      return (this.size += this.has(e) ? 0 : 1), (n[e] = V && void 0 === t ? "__lodash_hash_undefined__" : t), this;
    };
    function ee(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (ee.prototype.clear = W), (ee.prototype.delete = z), (ee.prototype.get = $), (ee.prototype.has = Z), (ee.prototype.set = Q);
    const te = ee;
    const ne = function () {
      (this.__data__ = []), (this.size = 0);
    };
    const re = function (e, t) {
      return e === t || (e != e && t != t);
    };
    const ie = function (e, t) {
      for (var n = e.length; n--; ) if (re(e[n][0], t)) return n;
      return -1;
    };
    var se = Array.prototype.splice;
    const oe = function (e) {
      var t = this.__data__,
        n = ie(t, e);
      return !(n < 0) && (n == t.length - 1 ? t.pop() : se.call(t, n, 1), --this.size, !0);
    };
    const ae = function (e) {
      var t = this.__data__,
        n = ie(t, e);
      return n < 0 ? void 0 : t[n][1];
    };
    const ue = function (e) {
      return ie(this.__data__, e) > -1;
    };
    const le = function (e, t) {
      var n = this.__data__,
        r = ie(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    };
    function ce(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (ce.prototype.clear = ne), (ce.prototype.delete = oe), (ce.prototype.get = ae), (ce.prototype.has = ue), (ce.prototype.set = le);
    const he = ce;
    const de = G(p, "Map");
    const pe = function () {
      (this.size = 0), (this.__data__ = { hash: new te(), map: new (de || he)(), string: new te() });
    };
    const me = function (e) {
      var t = typeof e;
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
    };
    const fe = function (e, t) {
      var n = e.__data__;
      return me(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
    };
    const ge = function (e) {
      var t = fe(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    };
    const ve = function (e) {
      return fe(this, e).get(e);
    };
    const _e = function (e) {
      return fe(this, e).has(e);
    };
    const ye = function (e, t) {
      var n = fe(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    };
    function Ee(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (Ee.prototype.clear = pe), (Ee.prototype.delete = ge), (Ee.prototype.get = ve), (Ee.prototype.has = _e), (Ee.prototype.set = ye);
    const be = Ee;
    function Ae(e, t) {
      if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError("Expected a function");
      var n = function () {
        var r = arguments,
          i = t ? t.apply(this, r) : r[0],
          s = n.cache;
        if (s.has(i)) return s.get(i);
        var o = e.apply(this, r);
        return (n.cache = s.set(i, o) || s), o;
      };
      return (n.cache = new (Ae.Cache || be)()), n;
    }
    Ae.Cache = be;
    const Te = Ae;
    var we = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      xe = /\\(\\)?/g;
    const Re = (function (e) {
      var t = Te(e, function (e) {
          return 500 === n.size && n.clear(), e;
        }),
        n = t.cache;
      return t;
    })(function (e) {
      var t = [];
      return (
        46 === e.charCodeAt(0) && t.push(""),
        e.replace(we, function (e, n, r, i) {
          t.push(r ? i.replace(xe, "$1") : n || e);
        }),
        t
      );
    });
    const Ne = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
      return i;
    };
    var Le = m ? m.prototype : void 0,
      Se = Le ? Le.toString : void 0;
    const Ce = function e(t) {
      if ("string" == typeof t) return t;
      if (c(t)) return Ne(t, e) + "";
      if (x(t)) return Se ? Se.call(t) : "";
      var n = t + "";
      return "0" == n && 1 / t == -Infinity ? "-0" : n;
    };
    const Ie = function (e) {
      return null == e ? "" : Ce(e);
    };
    const Oe = function (e, t) {
      return c(e) ? e : L(e, t) ? [e] : Re(Ie(e));
    };
    const Me = function (e) {
      if ("string" == typeof e || x(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -Infinity ? "-0" : t;
    };
    const De = function (e, t) {
      for (var n = 0, r = (t = Oe(t, e)).length; null != e && n < r; ) e = e[Me(t[n++])];
      return n && n == r ? e : void 0;
    };
    const Pe = function (e, t, n) {
      var r = null == e ? void 0 : De(e, t);
      return void 0 === r ? n : r;
    };
    const Ue = new (class {
        constructor(n) {
          this.browser = n;
          const c = function (...e) {
            const t = Pe(n, e.shift()) || {},
              r = t[e.shift()];
            return "function" == typeof r ? r.apply(t, e) : r;
          };
          (this.browserAction = new e(c)),
            (this.extension = new t(c)),
            (this.i18n = new i(c)),
            (this.runtime = new r(c)),
            (this.storage = new s(c, this.browser)),
            (this.tabs = new o(c)),
            (this.windows = new a(c)),
            (this.webNavigation = new u(c)),
            (this.webRequest = new l(c));
        }
      })(chrome),
      ke = {
        "scraper.getServiceConfig": (e) => {
          e([{ login: null, password: null, url: window.location.href, arguments: {} }, null]);
        },
        "scraper.getScenarioConfig": async (e) => {
          Ue.runtime.sendMessage({ message: "scraperScenarioData" }, ({ scenario: t }) => {
            e([{ scenario: t }, null]);
          });
        },
        "scraper.tmpStorage.getItem": async (e) => {
          e([void 0, null]);
        },
        "scraper.log": async (e, t) => {
          Ue.runtime.sendMessage({ message: "scraperLog", data: t });
        },
        "scraper.scrapeHTML.result": async (e, t) => {
          let n = !1;
          try {
            n = window.isOptedOutFunc && window.isOptedOutFunc(t.scrape);
          } catch (e) {
            Ue.runtime.sendMessage({
              message: "scraperLog",
              data: { message: "Error when running isOptedOutFunc", errorMessage: e.message, ...t }
            });
          }
          Ue.runtime.sendMessage({ message: "scraperData", data: { ...t, isOptedOut: n } });
        },
        "scraper.result": async (e, t) => {
          t.verified && Ue.runtime.sendMessage({ message: "scraperFinished", data: t });
        }
      };
    window.app = {
      syncCall(e, t) {},
      asyncCall(e, t, n) {
        ke[e] && ke[e](t, n);
      }
    };
    n(526);
  })();
})();
