/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
function fsRect(m, u, w, A) {
  return {
    left: m,
    top: u,
    width: w,
    height: A,
    fromCSSClip: function (n) {
      n = n.match(/\d+/g);
      4 === n.length && ((this.left = n[3]), (this.top = n[0]), (this.width = n[1] - n[3]), (this.height = n[2] - n[0]));
      return this;
    }
  };
}
function LinksGrabber(m) {
  const u = document,
    w = m == document ? getScrollingElement() : m,
    A = function (f) {
      const k = u.defaultView.getComputedStyle(f, "");
      if (
        !k ||
        ("hidden" !== k.getPropertyValue("overflow") &&
          "hidden" !== k.getPropertyValue("overflow-y") &&
          "auto" !== k.getPropertyValue("overflow-y") &&
          "scroll" != k.getPropertyValue("overflow-y") &&
          "hidden" !== k.getPropertyValue("overflow-x") &&
          "auto" !== k.getPropertyValue("overflow-x") &&
          "scroll" != k.getPropertyValue("overflow-x"))
      )
        return n(f.children[0], m);
    },
    n = function (f, k) {
      f = f.getBoundingClientRect();
      return {
        top: Math.round(f.top + (window.pageYOffset || w.scrollTop)),
        left: Math.round(f.left + (window.pageXOffset || w.scrollLeft)),
        width: f.width,
        height: f.height
      };
    };
  return {
    collectedLinks: [],
    markHiddenLinks: function () {
      const f = createNodeIteratorAdvanced(m == document ? m.body : m, NodeFilter.SHOW_ELEMENT),
        k = [];
      let d;
      for (; (d = f.nextNode()); )
        if (
          d.childElementCount &&
          "HTML" !== d.tagName &&
          "BODY" !== d.tagName &&
          d !== m &&
          (d.offsetHeight < d.scrollHeight || d.offsetWidth < d.scrollWidth)
        ) {
          const a = u.defaultView.getComputedStyle(d, "");
          !a ||
            "none" === a.getPropertyValue("display") ||
            ("hidden" !== a.getPropertyValue("overflow") &&
              "hidden" !== a.getPropertyValue("overflow-y") &&
              "auto" !== a.getPropertyValue("overflow-y") &&
              "scroll" != a.getPropertyValue("overflow-y") &&
              "hidden" !== a.getPropertyValue("overflow-x") &&
              "auto" !== a.getPropertyValue("overflow-x") &&
              "scroll" != a.getPropertyValue("overflow-x")) ||
            k.push(d);
        }
      k.forEach(function (a) {
        const b = n(a, m);
        querySelectorAll(a, "a").forEach((c) => {
          rectsIntersected(b, n(c, m)) || c.setAttribute("__fireshotHiddenLink", 1);
        });
      });
    },
    createLinksSnapshot: function () {
      function f(d, a) {
        var b = n(d, m),
          c = Array.from(d.getClientRects());
        let e;
        if (1 === c.length) {
          let g;
          d.children && 0 < d.children.length && "IMG" === d.children[0].tagName && (g = A(d)) && 0 < g.width && 0 < g.height
            ? a.push(g)
            : a.push(b);
        } else if (d.children && 0 < d.children.length)
          for (c = [], c = 0; c < d.children.length; c++) (b = n(d.children[c])), 0 < b.width && 0 < b.height && a.push(b);
        else {
          c = c.filter((g) => 0 < g.width && 0 < g.height);
          for (d = 0; d < c.length; ++d)
            0 === d
              ? (e = { left: c[d].left, top: c[d].top })
              : (c[d].left < e.left && (e.left = c[d].left), c[d].top < e.top && (e.top = c[d].top));
          if (e)
            for (d = b.left - e.left, b = b.top - e.top, j = 0; j < c.length; ++j)
              a.push({ left: c[j].left + d, top: c[j].top + b, width: c[j].width, height: c[j].height });
        }
      }
      const k = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
      querySelectorAll(m, "a").forEach((d) => {
        var a;
        if ((a = rectsIntersected(d.getBoundingClientRect(), k)))
          if (d.getAttribute("__fireshotHiddenLink")) a = !1;
          else if ((a = d.href && "" !== d.href && !/javascript:.*/.test(d.href) && d.href.slice && "#" !== d.href.slice(-1))) {
            b: {
              for (a = d; a && a.parentNode && a != u; ) {
                var b = u.defaultView.getComputedStyle(a, "");
                if ("hidden" === b.visibility || "none" === b.display || "0" === b.opacity) {
                  a = !0;
                  break b;
                }
                a = a.parentNode;
              }
              a = !1;
            }
            a = !a;
          }
        a &&
          ((b = []),
          f(d, b),
          0 !== b.length &&
            ((a = d.getAttribute("__fireshotLinkId"))
              ? (a = parseInt(a))
              : ((a = this.collectedLinks.length), d.setAttribute("__fireshotLinkId", a)),
            (this.collectedLinks[a] = { e: d, r: b })));
      });
    },
    getLinks: function (f, k, d, a) {
      var b = f.crop ? f.cropRight - f.cropLeft : f.width,
        c = f.crop ? f.cropBottom - f.cropTop : f.height;
      f.links = [];
      this.collectedLinks.forEach((e) => {
        const g = e.e;
        if (!g.getAttribute("__fireshotHiddenLink")) {
          var p = [];
          e.r.forEach((h) => {
            let r = h.left - k.x,
              t = h.top - k.y,
              l = h.width;
            h = h.height;
            r >= b ||
              t >= c ||
              (0 > r && ((l += r), (r = 0)),
              0 > t && ((h += t), (t = 0)),
              r + l > b && (l = b - r),
              t + h > c && (h = c - t),
              0 < l && 0 < h && p.push([Math.round(r * d), Math.round(t * a), Math.round(l * d), Math.round(h * a)]));
          });
          0 < p.length && f.links.push({ a: g.href, r: p });
        }
      });
      getConsolePtr()("links filtered: " + (this.collectedLinks.length - f.links.length));
      getConsolePtr()("links added: " + f.links.length);
    },
    checkClickableLinks: function () {
      for (var f, k, d = w.scrollLeft, a = w.scrollTop, b = 0; b < this.collectedLinks.length; ++b)
        if (!this.collectedLinks[b].p) {
          f = this.collectedLinks[b].r[0].left - d;
          k = this.collectedLinks[b].r[0].top - a;
          0 > f && (f += this.collectedLinks[b].r[0].width);
          0 > k && (k += this.collectedLinks[b].r[0].height);
          var c;
          0 <= k &&
            k <= window.innerHeight &&
            0 <= f &&
            f <= window.innerWidth &&
            ((c = document.elementFromPoint(Math.round(f + 0.5), Math.round(k + 0.5))) === this.collectedLinks[b].e ||
              (c && this.collectedLinks[b].e.contains(c)) ||
              this.collectedLinks[b].e.setAttribute("__fireshotHiddenLink", 1));
        }
    },
    clearAttributes: function () {
      querySelectorAll(m, "a").forEach((f) => {
        f.removeAttribute("__fireshotHiddenLink");
        f.removeAttribute("__fireshotLinkId");
      });
    }
  };
}
function TextGrabber(m) {
  function u(a) {
    const b = [];
    a = document.createNodeIterator(a, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let c;
    for (; (c = a.nextNode()); )
      c.nodeType === Node.TEXT_NODE && c.parentNode && "SCRIPT" != c.parentNode.tagName && "STYLE" != c.parentNode.tagName
        ? b.push(c)
        : c.shadowRoot && b.push(...u(c.shadowRoot));
    return b;
  }
  function w(a, b) {
    function c(g) {
      function p(h, r) {
        function t(B, v, E, D) {
          var y = new Range();
          y.setStart(g, B);
          y.setEnd(g, v);
          B = y.getClientRects();
          v = [];
          if (D)
            for (y = 0; y < B.length; ++y) {
              const C = f(B[y], D);
              if (0 < C.width && 0 < C.height) {
                v.push(C);
                break;
              }
            }
          else v = B;
          0 < v.length && e.push({ t: E, r: [Math.floor(v[0].left), Math.floor(v[0].top), Math.ceil(v[0].width), Math.ceil(v[0].height)] });
        }
        let l = h,
          q,
          z,
          x = g.textContent;
        "undefined" !== typeof g.fsOverflowRect && (z = g.fsOverflowRect);
        for (; l < h + r; )
          "" === x[l].trim() ? void 0 !== q && (t(q, l, x.substr(q, l - q), z), (q = void 0)) : void 0 === q && (q = l), ++l;
        void 0 !== q && t(q, h + r, x.substr(q, r - (q - h)), z);
      }
      (function () {
        var h = new Range(),
          r = [],
          t = g.textContent.length;
        h.setStart(g, 0);
        h.setEnd(g, t);
        h = h.getClientRects();
        if (1 === h.length) return [{ o: 0, l: t }];
        var l = 0,
          q = 1,
          z = h.length;
        h = new Range();
        for (h.setStart(g, l); 1 < z && q < t; ) {
          h.setEnd(g, q + 1);
          var x = h.getClientRects();
          1 < x.length && x[0].y != x[x.length - 1].y && (r.push({ o: l, l: q - l }), (l = q), h.setStart(g, l), --z);
          ++q;
        }
        r.push({ o: l, l: t - l });
        return r;
      })().forEach((h) => p(h.o, h.l));
    }
    var e = [];
    u(a).forEach((g) => {
      if (g.parentNode && g.parentNode.getBoundingClientRect) {
        var p = g.parentNode.getBoundingClientRect();
        if (p && 2 < p.width && 2 < p.height && "" !== g.textContent.trim() && (!b || n(b, p))) {
          p = document.defaultView.getComputedStyle(g.parentNode, "");
          if ("rect" === p.clip.substr(0, 4) && "absolute" === p.position) {
            const h = fsRect().fromCSSClip(p.clip);
            if (4 > h.width || 4 > h.height) return;
          }
          "hidden" !== p.visibility && "none" !== p.display && "0" !== p.opacity && c(g);
        }
      }
    });
    return e;
  }
  function A(a) {
    const b = [];
    a = createNodeIteratorAdvanced(a, NodeFilter.SHOW_ELEMENT);
    let c;
    for (; (c = a.nextNode()); ) {
      var e;
      if (
        (e = c.getBoundingClientRect && (0 < c.childElementCount || "SPAN" === c.tagName) && "HTML" !== c.tagName && "BODY" !== c.tagName)
      )
        e =
          (e = document.defaultView.getComputedStyle(c, "")) &&
          "none" !== e.getPropertyValue("display") &&
          ("hidden" === e.getPropertyValue("overflow") ||
            "hidden" === e.getPropertyValue("overflow-y") ||
            "auto" === e.getPropertyValue("overflow-y") ||
            "scroll" == e.getPropertyValue("overflow-y") ||
            "hidden" === e.getPropertyValue("overflow-x") ||
            "auto" === e.getPropertyValue("overflow-x") ||
            "scroll" == e.getPropertyValue("overflow-x"));
      e && b.push(c);
    }
    return b;
  }
  function n(a, b) {
    return a.left < b.left + b.width && b.left < a.left + a.width && a.top < b.top + b.height && b.top < a.top + a.height;
  }
  function f(a, b) {
    if (n(a, b)) {
      var c = Math.max(a.left, b.left),
        e = Math.max(a.top, b.top);
      return new fsRect(c, e, Math.min(a.left + a.width, b.left + b.width) - c, Math.min(a.top + a.height, b.top + b.height) - e);
    }
    return new fsRect(0, 0, 0, 0);
  }
  function k(a) {
    a.forEach((b) => {
      const c = b.getBoundingClientRect();
      "inline" !== document.defaultView.getComputedStyle(b, "").display &&
        ((c.width = Math.min(c.width, b.clientWidth)), (c.height = Math.min(c.height, b.clientHeight)));
      u(b).forEach((e) => {
        e.parentNode &&
          e.parentNode.getClientRects &&
          "" !== e.textContent.trim() &&
          (e.fsOverflowRect = "undefined" !== typeof e.fsOverflowRect ? f(e.fsOverflowRect, c) : c);
      });
    });
  }
  function d() {
    u(m).forEach((a) => {
      delete a.fsOverflowRect;
    });
  }
  return {
    doTests: function () {
      var a = document.createElement("canvas");
      a.id = "helperCanvas";
      a.width = document.scrollingElement.scrollWidth - 2;
      a.height = document.scrollingElement.scrollHeight - 2;
      a.style.zIndex = 2147483647;
      a.style.position = "absolute";
      a.style.border = "1px solid";
      a.style.left = 0;
      a.style.top = 0;
      a.style.pointerEvents = "none";
      document.getElementsByTagName("body")[0].prepend(a);
      a.getContext("2d");
      a = performance.now();
      var b = this.getElements({ x: 0, y: 0 }, 1, 1, !1);
      console.log("Items in array a: " + b.length);
      console.log("JSON size: " + JSON.stringify(b).length);
      console.log("Time: " + Math.round(performance.now() - a) + "ms");
      console.log(b);
      d();
      return b;
    },
    getElements: function (a, b, c, e) {
      k(A(m));
      e = w(m, e);
      (0 == a.x && 0 == a.y && 1 == b && 1 == c) ||
        e.forEach((g) => {
          g.r[0] = Math.round((g.r[0] - a.x) * b);
          g.r[1] = Math.round((g.r[1] - a.y) * c);
          g.r[2] = Math.round(g.r[2] * b);
          g.r[3] = Math.round(g.r[3] * c);
        });
      d();
      return e;
    }
  };
}
