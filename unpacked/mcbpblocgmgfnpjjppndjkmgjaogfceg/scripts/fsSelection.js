/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var FireShotAddon = {
  FSSelector: function (q) {
    function B(a, d) {
      if ("IFRAME_MOCKUP" === a.tagName) return a.rect;
      a = a.getBoundingClientRect();
      return {
        top: Math.round(a.top + (D.pageYOffset || l.scrollTop)),
        left: Math.round(a.left + (D.pageXOffset || l.scrollLeft)),
        width: a.width,
        height: a.height
      };
    }
    function r(a) {
      try {
        for (; a && a != c; ) {
          var d = c.defaultView.getComputedStyle(a, "");
          if ("hidden" === d.visibility || "none" === d.display || "0" === d.opacity) return !0;
          a = a.parentNode;
        }
      } catch (b) {}
      return !1;
    }
    function g() {
      let a = createNodeIteratorAdvanced(c.documentElement, NodeFilter.SHOW_ELEMENT),
        d;
      for (y = []; null !== (d = a.nextNode()); )
        if ("BODY" !== d.tagName && 0 < d.scrollWidth && 0 < d.scrollHeight) {
          const b = d.scrollWidth > d.clientWidth && 10 < d.clientWidth,
            e = d.scrollHeight > d.clientHeight && 10 < d.clientHeight;
          (b || e) && isScrollableStyle(c.defaultView.getComputedStyle(d, ""), b, e) && !r(d) && y.push({ e: d, rect: B(d, c) });
        }
      ha.forEach((b) => {
        var e = D.pageYOffset || l.scrollTop;
        let k = D.pageXOffset || l.scrollLeft;
        b.scrollable &&
          ((e = { left: b.x + k, top: b.y + e, width: b.width, height: b.height }),
          y.push({
            e: { tagName: "IFRAME_MOCKUP", frameId: b.frameId, rect: e, scrollWidth: b.scrollWidth, scrollHeight: b.scrollHeight },
            rect: e
          }));
      });
      y.sort((b, e) => {
        let k = b.rect.width * b.rect.height,
          G = e.rect.width * e.rect.height;
        if (k > G) return 1;
        if (k < G) return -1;
        k = b.e.scrollHeight * b.e.scrollWidth;
        G = e.e.scrollHeight * e.e.scrollWidth;
        return k > G ? -1 : k < G ? 1 : 0;
      });
    }
    function J() {
      y.forEach((a) => {
        const d = a.divElement;
        d.style.left = `${Math.max(0, a.rect.left - 3)}px`;
        d.style.top = `${Math.max(0, a.rect.top - 3)}px`;
        d.style.width = `${a.rect.width}px`;
        d.style.height = `${a.rect.height}px`;
      });
    }
    function N(a) {
      if (Q) {
        var d = 0,
          b;
        y.forEach((e) => {
          var k = "divFireShotHightlightElement-" + d++;
          a
            ? ((b = c.createElement("div")),
              (e.divElement = b),
              (b[w] = 1),
              (b.id = k),
              (b.style.cssText = "position: absolute; z-index: 2147483640; border:#fd0 solid 3px; display:block !important"),
              (e = c.createElement("div")),
              (e[w] = 1),
              (e.style.cssText =
                "font-family: Tahoma, Helvetica, Arial; font-size:10px; line-height:1.3em; color: #fff; margin:5px; width:auto; height:auto; padding: 2px 4px; background: #000; opacity: 0.9; position:absolute; border:#333 solid 1px;"),
              (k = c.createElement("img")),
              (k[w] = 1),
              (k.src =
                "data:image/gif;base64,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"),
              (k.width = 16),
              (k.height = 16),
              (k.style.cssText = "vertical-align: bottom"),
              e.appendChild(k),
              (k = c.createElement("span")),
              (k[w] = 1),
              (k.textContent = String.fromCharCode(160) + " " + chrome.i18n.getMessage("scrolling_content_hint_div")),
              e.appendChild(k),
              b.appendChild(e),
              c.body.appendChild(b))
            : (b = c.getElementById(k)) && c.body.removeChild(b);
        });
        a && J();
      }
    }
    function ia(a, d) {
      for (var b = 0; b < y.length; ++b) {
        const e = y[b];
        if (a >= e.rect.left && a < e.rect.left + e.rect.width && d >= e.rect.top && d <= e.rect.top + e.rect.height) return e.e;
      }
    }
    function Z() {
      setTimeout(E, 100);
      R && R();
    }
    function S(a) {
      K ||
        !a.type ||
        T ||
        (H === a.pageX && I === a.pageY) ||
        ((H = a.pageX),
        (I = a.pageY),
        U && clearTimeout(U),
        (U = setTimeout(function () {
          if (!T || a.touchEvent) {
            var d = [t, n, h[0], h[1], h[2], h[3]];
            d.forEach(function (b) {
              b.style.setProperty("display", "none", "important");
            });
            m = ia(a.pageX, a.pageY) || c.elementFromPoint(a.pageX - l.scrollLeft, a.pageY - l.scrollTop);
            d.forEach(function (b) {
              b.style.setProperty("display", "block", "important");
            });
            m ? ((d = B(m, c)), (z = d.left), (u = d.top), (x = d.left + d.width), (v = d.top + d.height), E()) : (z = x = u = v = 0);
          }
        }, 15)));
    }
    function V() {
      O && (clearTimeout(O), (O = void 0));
    }
    function L(a) {
      function d(f) {
        var A = { dx: l.scrollLeft, dy: l.scrollTop };
        V();
        100 > f.clientX && H > f.pageX && (l.scrollLeft -= (100 - f.clientX) / 2);
        100 > f.clientY && I > f.pageY && (l.scrollTop -= (100 - f.clientY) / 2);
        var M = D.innerWidth - f.clientX;
        100 > M && H < f.pageX && (l.scrollLeft += (100 - M) / 2);
        M = D.innerHeight - f.clientY;
        100 > M && I < f.pageY && (l.scrollTop += (100 - M) / 2);
        H = f.pageX;
        I = f.pageY;
        A.dx = l.scrollLeft - A.dx;
        A.dy = l.scrollTop - A.dy;
        return A;
      }
      function b(f) {
        if (!K && f.type) {
          "TouchEvent" === f.constructor.name &&
            1 === f.touches.length &&
            ((f = f.touches[0]),
            f.pageX === f.clientX &&
              0 < l.scrollLeft &&
              (f = { pageX: f.pageX, pageY: f.pageY, clientX: f.pageX - l.scrollLeft, clientY: f.pageY - l.scrollTop }));
          if (m)
            if (3 < Math.abs(H - f.pageX) && 3 < Math.abs(I - f.pageY)) m = void 0;
            else return;
          var A = d(f);
          x = A.dx + f.pageX;
          v = A.dy + f.pageY;
          E();
          O = setTimeout(function () {
            C || b({ type: "autoscroll", clientX: f.clientX, clientY: f.clientY, pageX: f.pageX + A.dx, pageY: f.pageY + A.dy });
          }, 25);
        }
      }
      function e(f) {
        n.removeEventListener("mousemove", b, !1);
        n.removeEventListener("touchmove", b, !1);
        c.removeEventListener("mouseup", e, !1);
        c.removeEventListener("touchend", e, !1);
        c.removeEventListener("touchcancel", e, !1);
        !C && 150 > Math.abs(Date.now() - k) ? clearTimeout(G) : (V(), !m || (Q && C) || ((m = void 0), (z = x = u = v = 0)), E(), aa());
      }
      let k = Date.now();
      "TouchEvent" === a.constructor.name &&
        1 === a.touches.length &&
        ((a.pageX = a.touches[0].pageX), (a.pageY = a.touches[0].pageY), (a.touchEvent = !0), (a.button = 0), C && S(a));
      if (0 === a.button || (2 === a.button && isFirefox() && !isWindows())) {
        var G = setTimeout(() => {
          T = !0;
          n.removeEventListener("mousedown", L, !0);
          n.removeEventListener("touchstart", L, !0);
          n.removeEventListener("mousemove", S, !0);
          z = x = a.pageX;
          u = v = a.pageY;
          H = a.pageX;
          I = a.pageY;
          N(!1);
        }, 200);
        n.addEventListener("mousemove", b, !1);
        n.addEventListener("touchmove", b, { passive: !0 });
        c.addEventListener("mouseup", e, !1);
        c.addEventListener("touchend", e, { passive: !0 });
        c.addEventListener("touchcancel", e, { passive: !0 });
      }
      "TouchEvent" !== a.constructor.name && a.preventDefault();
      return !0;
    }
    function ba(a) {
      27 == a.keyCode && W();
      !C && a.ctrlKey && ((C = !0), E());
    }
    function ca(a) {
      C = a.ctrlKey;
      E();
    }
    function da(a) {
      a.preventDefault();
      return !1;
    }
    function ea() {
      var a = Math.min(z, x),
        d = Math.min(u, v),
        b = Math.abs(x - z),
        e = Math.abs(v - u);
      !m && C && ((e = b), v < u && (d = u - e));
      return { left: a, top: d, width: b, height: e };
    }
    function E() {
      if (!K) {
        var a = Math.max(c.documentElement.scrollWidth, c.body.scrollWidth),
          d = Math.max(c.documentElement.scrollHeight, c.body.scrollHeight),
          b = ea();
        !m || (Q && C) || (b.left = b.top = b.width = b.height = 0);
        t.style.left = b.left + "px";
        t.style.top = b.top + "px";
        t.style.width = b.width + "px";
        t.style.height = b.height + "px";
        n.style.width = a + "px";
        n.style.height = d + "px";
        h[0].style.left = "0px";
        h[0].style.top = "0px";
        h[0].style.width = a + "px";
        h[0].style.height = t.style.top;
        h[1].style.left = "0px";
        h[1].style.top = b.top + b.height + "px";
        h[1].style.width = a + "px";
        h[1].style.height = d - (b.top + b.height) + "px";
        h[2].style.left = "0px";
        h[2].style.top = b.top + "px";
        h[2].style.width = b.left + "px";
        h[2].style.height = b.height + "px";
        h[3].style.left = b.left + b.width + "px";
        h[3].style.top = b.top + "px";
        h[3].style.width = a - (b.left + b.width) + "px";
        h[3].style.height = b.height + "px";
        for (a = 0; 4 > a; a++)
          (F[a].style.left = "0px"), (F[a].style.top = "0px"), (F[a].style.right = "0px"), (F[a].style.bottom = "0px");
        p.style.top = v <= u ? "10px" : "";
        p.style.bottom = v > u ? "10px" : "";
        p.style.left = x <= z ? "10px" : "";
        p.style.right = x > z ? "10px" : "";
        p.textContent = "";
        if ((a = m))
          a: {
            for (a = 0; a < y.length; ++a)
              if (y[a].e === m) {
                a = !0;
                break a;
              }
            a = !1;
          }
        if (a) {
          a = Math.round(m.scrollWidth) + " x " + Math.round(m.scrollHeight);
          d = c.createElement("img");
          d[w] = 1;
          d.src =
            "data:image/gif;base64,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";
          d.width = 16;
          d.height = 16;
          p.appendChild(d);
          var e = c.createElement("span");
          e[w] = 1;
          e.textContent = " Scroll and capture: " + a;
          p.appendChild(e);
          if (p.scrollWidth + 11 > b.width || p.scrollHeight + 11 > b.height) (p.textContent = ""), p.appendChild(d);
        } else p.textContent = Math.round(b.width) + " x " + Math.round(b.height);
        p.style.visibility = p.scrollWidth + 11 < b.width && p.scrollHeight + 11 < b.height ? "visible" : "hidden";
      }
    }
    function W() {
      v = x = u = z = 0;
      m = void 0;
      V();
      aa();
    }
    function aa() {
      if (!K) {
        K = !0;
        n.removeEventListener("mousedown", L, !0);
        c.removeEventListener("keydown", ba, !1);
        c.removeEventListener("keyup", ca, !1);
        c.removeEventListener("contextmenu", da, !0);
        R && c.removeEventListener("scroll", Z);
        c.body.removeChild(t);
        c.body.removeChild(n);
        X.disconnect();
        N(!1);
        for (var a = 0; 4 > a; a++) c.body.removeChild(h[a]);
        m && ((a = B(m, c)), (z = a.left), (u = a.top), (x = a.left + a.width), (v = a.top + a.height));
        a = ea();
        Y &&
          Y({
            selectedElement: m,
            isScrollable: (m && "IFRAME_MOCKUP" === m.tagName) || (m ? isScrollableStyle(c.defaultView.getComputedStyle(m, "")) : !1),
            left: a.left,
            top: a.top,
            right: a.left + a.width,
            bottom: a.top + a.height
          });
      }
    }
    var t,
      n,
      p,
      X,
      Y,
      m,
      F = [],
      h = [],
      y = [],
      ha = q.frames || [],
      z = 0,
      x = 0,
      u = 0,
      v = 0,
      H = 0,
      I = 0,
      U = 0,
      C = !1,
      K = !1,
      T = !1,
      Q = q.extendedMode || !1,
      c = q.doc,
      fa = q.browser || "chrome",
      D,
      P,
      l = c.scrollingElement || c.body,
      O,
      R = q.onScroll,
      w = q.ignoredAttributeFlagName;
    return {
      makeSelection: function (a) {
        Y = a;
        P = c.body;
        "undefined" != typeof window && (D = window);
        "firefox" === fa && ((P = "CSS1Compat" == c.compatMode ? c.documentElement : c.body), (D = content.window));
        "ie" === fa && (P = "CSS1Compat" == c.compatMode ? c.documentElement : c.body);
        c.activeElement && "IFRAME" === c.activeElement.tagName && c.activeElement.blur();
        g();
        N(!0);
        t = c.createElement("div");
        t[w] = 1;
        t.style.cssText =
          "display:block !important; position: absolute; left: 0px; top: 0px; width: 0px; height: 0px; z-index: 2147483640; cursor: crosshair;";
        p = c.createElement("div");
        p[w] = 1;
        p.style.cssText =
          "display:block !important; font-family: Tahoma, Helvetica, Arial; font-size:14px; color: #fff; bottom: 10px; right: 10px; width:auto; height:auto; padding: 3px; background: #000; opacity: 0.9; position:absolute; border:#333 solid 1px; cursor: crosshair;";
        n = c.createElement("div");
        n[w] = 1;
        n.style.cssText =
          "display:block !important; position: absolute; left: 0px; top: 0px; opacity: 0; cursor: crosshair; z-index: 2147483641;";
        c.body.appendChild(n);
        for (a = 0; 4 > a; a++) {
          F.push(c.createElement("div"));
          switch (a) {
            case 0:
              var d =
                "display:block !important;  background: url('data:image/gif;base64,R0lGODlhAQAGAKEAAP///wAAADY2Nv///yH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQACgD/ACwAAAAAAQAGAAACAxQuUgAh+QQBCgADACwAAAAAAQAGAAACA5SAUgAh+QQBCgADACwAAAAAAQAGAAACA5SBBQAh+QQBCgADACwAAAAAAQAGAAACA4QOUAAh+QQBCgADACwAAAAAAQAGAAACAwSEUAAh+QQBCgADACwAAAAAAQAGAAACA4SFBQA7') repeat-y left top;";
              break;
            case 1:
              d =
                "display:block !important;  background: url('data:image/gif;base64,R0lGODlhBgABAKEAAP///wAAADY2Nv///yH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQACgD/ACwAAAAABgABAAACAxQuUgAh+QQBCgADACwAAAAABgABAAACA5SAUgAh+QQBCgADACwAAAAABgABAAACA5SBBQAh+QQBCgADACwAAAAABgABAAACA4QOUAAh+QQBCgADACwAAAAABgABAAACAwSEUAAh+QQBCgADACwAAAAABgABAAACA4SFBQA7') repeat-x left top;";
              break;
            case 2:
              d =
                "display:block !important;  background: url('data:image/gif;base64,R0lGODlhAQAGAKEAAP///wAAADY2Nv///yH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQACgD/ACwAAAAAAQAGAAACAxQuUgAh+QQBCgADACwAAAAAAQAGAAACA5SAUgAh+QQBCgADACwAAAAAAQAGAAACA5SBBQAh+QQBCgADACwAAAAAAQAGAAACA4QOUAAh+QQBCgADACwAAAAAAQAGAAACAwSEUAAh+QQBCgADACwAAAAAAQAGAAACA4SFBQA7') repeat-y right top;";
              break;
            case 3:
              d =
                "display:block !important;  background: url('data:image/gif;base64,R0lGODlhBgABAKEAAP///wAAADY2Nv///yH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQACgD/ACwAAAAABgABAAACAxQuUgAh+QQBCgADACwAAAAABgABAAACA5SAUgAh+QQBCgADACwAAAAABgABAAACA5SBBQAh+QQBCgADACwAAAAABgABAAACA4QOUAAh+QQBCgADACwAAAAABgABAAACAwSEUAAh+QQBCgADACwAAAAABgABAAACA4SFBQA7') repeat-x left bottom;";
          }
          F[a].style.cssText = d + " opacity: 0.5; position: absolute; cursor: crosshair;";
          F[a][w] = 1;
          t.appendChild(F[a]);
          h.push(c.createElement("div"));
          h[a][w] = 1;
          h[a].style.cssText =
            "display:block !important;  position: absolute; background: #000; opacity: 0.3; z-index: 2147483640; cursor: crosshair;";
          c.body.appendChild(h[a]);
        }
        t.appendChild(p);
        c.body.appendChild(t);
        E();
        n.addEventListener("mousedown", L, !0);
        n.addEventListener("mousemove", S, !0);
        n.addEventListener("touchstart", L, { passive: !0 });
        c.addEventListener("keydown", ba, !1);
        c.addEventListener("keyup", ca, !1);
        c.addEventListener("scroll", Z);
        c.addEventListener("contextmenu", da, !0);
        X = new ResizeObserver(E);
        X.observe(c.scrollingElement || c.body);
        "FRAMESET" === P.tagName &&
          (alert("Apologies, the browser does not allow object selection for this type of document (based on <FRAMESET>)."), W());
      },
      cancel: function () {
        W();
      }
    };
  },
  FSSelectionHint: function (q) {
    return {
      holder: void 0,
      show: function () {
        function B() {
          J += 0.1;
          r.style.opacity = J;
          1 > J && setTimeout(B, 30);
        }
        var r = q.createElement("div");
        r.setAttribute(ignoredAttributeFlagName, "1");
        r.id = "FireShot.topMessageHolder";
        r.style.cssText =
          "display:block; opacity:0; border:1px solid #666; background:#fff; z-index:2147483647; font-family: Tahoma, Helvetica, Arial; text-align: left; font-size:20px; color: #000; margin:0; padding:10px; width:100%;  left:0px; right:0px; top:0px; position:fixed";
        this.holder = r;
        var g = q.createElement("strong");
        g.setAttribute(ignoredAttributeFlagName, "1");
        g.textContent = "HINT: ";
        r.appendChild(g);
        g = q.createElement("span");
        g.setAttribute(ignoredAttributeFlagName, "1");
        g.textContent = chrome.i18n.getMessage("scrolling_content_hint_banner") + " " + String.fromCharCode(160);
        r.appendChild(g);
        g = q.createElement("a");
        g.setAttribute(ignoredAttributeFlagName, "1");
        g.textContent = chrome.i18n.getMessage("action_view_demo");
        g.target = "_blank";
        g.style.cssText = "color:#08c";
        g.href = "https://getfireshot.com/demos/selection.php";
        r.appendChild(g);
        g = q.createElement("span");
        g.setAttribute(ignoredAttributeFlagName, "1");
        g.textContent = " | ";
        r.appendChild(g);
        g = q.createElement("a");
        g.setAttribute(ignoredAttributeFlagName, "1");
        g.id = "fsSelectionLnkClose";
        g.style.cssText = "color:#08c; cursor:pointer";
        g.textContent = chrome.i18n.getMessage("button_dismiss");
        r.appendChild(g);
        q.body.appendChild(r);
        document.getElementById("fsSelectionLnkClose").addEventListener(
          "click",
          function (N) {
            document.body.removeChild(document.getElementById("FireShot.topMessageHolder"));
            return !1;
          },
          !1
        );
        var J = 0;
        setTimeout(B, 300);
      },
      hide: function () {
        var B = q.getElementById("FireShot.topMessageHolder");
        B && q.body.removeChild(B);
      },
      isShown: function () {
        return null !== q.getElementById("FireShot.topMessageHolder");
      }
    };
  }
};
