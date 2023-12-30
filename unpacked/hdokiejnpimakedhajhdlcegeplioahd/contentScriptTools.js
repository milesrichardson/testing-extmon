LPContentScriptTools = (function () {
  var a = function () {
      var t = parsePageUrl(document.location.href, proxies),
        t = new URL(t).origin;
      return t !== document.location.origin ? document.location.origin + "/" + t : document.location.origin;
    },
    f =
      ((r = function (t) {
        var e = "";
        try {
          var n = document.createElement("canvas");
          (n.height = t.clientHeight), (n.width = t.clientWidth), n.getContext("2d").drawImage(t, 0, 0), (e = n.toDataURL());
        } catch (t) {}
        return e;
      }),
      function (t, e) {
        var n = document.createElement("img");
        (n.src = t),
          n.addEventListener("load", function () {
            var t = r(n);
            document.body.removeChild(n), e(t);
          }),
          n.addEventListener("error", function () {
            e(""), document.body.removeChild(n);
          }),
          document.body.appendChild(n);
      }),
    r,
    t = function (e) {
      for (var n = [], t = document.getElementsByTagName("link"), r = 0, i = t.length; r < i; ++r) {
        var o = t[r],
          l = o.getAttribute("rel"),
          l;
        l && -1 < l.indexOf("icon") && "svg" !== (l = o.getAttribute("href")).substring(l.length - 3) && n.push(l);
      }
      n.push(a() + "/favicon.ico");
      var c = 0,
        u = function (t) {
          t ? e(t) : n.length - 1 < c ? bg.LPPlatform.getFavicon({ url: document.location.href, callback: e }) : f(n[c++], u);
        };
      u();
    },
    o = function (t, e) {
      for (var n = null, r = 0, i = e.searches.length; r < i; ++r) {
        var o = e.searches[r];
        if (-1 !== t.indexOf(o))
          if (e.exactMatch) {
            if (t === o) return o;
            if (e.allowEmails) {
              var l = t.split("@");
              if (2 === l.length && l[0] === o) return o;
            }
          } else if (e.wordMatch) {
            for (var c = t.split(/\s/), u = 0; u < c.length; ++u) if (c[u] === o) return o;
          } else (null === n || o.length > n.length) && (n = o);
      }
      return n;
    },
    n = function (t) {
      var e = [];
      if (t.searches) {
        t.searches = [].concat(t.searches);
        for (var n = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); n.nextNode(); )
          if (l(n.currentNode)) {
            var r = n.currentNode.nodeValue.trim(),
              i = o(r, t);
            if (i && (e.push({ parent: n.currentNode.parentElement, match: i, matchingText: r }), !t.searchAll)) break;
          }
      }
      return t.searchAll ? e : e[0];
    },
    l,
    e = function (t) {
      var e = n(t),
        e = e ? e.match : null;
      return t.callback && t.callback(e), e;
    },
    i =
      ((c = !(l = function (t) {
        if (t.parentElement)
          switch (t.parentElement.nodeName) {
            case "SCRIPT":
            case "STYLE":
              return !1;
          }
        return !0;
      })),
      window.addEventListener("beforeunload", function (t) {
        !1 !== t.isTrusted && (c = !0);
      }),
      function () {
        return c;
      }),
    c,
    u = function (t, e) {
      return window.getComputedStyle(t).getPropertyValue(e);
    },
    d = function (t) {
      return "FORM" === t.nodeName;
    },
    s = function (t) {
      for (; t; ) {
        if (d(t)) return t;
        t = t.parentElement;
      }
      return null;
    },
    h = function (t) {
      var e;
      return (
        "function" != typeof document.elementFromPoint ||
        ((e = t.getBoundingClientRect()), document.elementFromPoint(e.left + parseInt(e.width / 2), e.top + parseInt(e.height / 2)) === t)
      );
    },
    g = function (t) {
      var t;
      if (t.scrollWidth > t.clientWidth) return "auto" === (t = u(t, "overflow-x")) || "scroll" === t;
    },
    m = function (t) {
      var e;
      if (t.scrollHeight > t.clientHeight)
        switch (u(t, "overflow-y")) {
          case "auto":
          case "scroll":
            return !0;
          case "visible":
            return t === document.body || !t.parentElement;
        }
      return !1;
    },
    v = function (t) {
      for (var e = { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }, n = t.parentElement; n; )
        0 < n.scrollLeft && (e.left -= n.scrollLeft),
          0 < n.scrollTop && (e.top -= n.scrollTop),
          g(n) && (e.width += n.scrollWidth - n.clientWidth),
          m(n) && (e.height += n.scrollHeight - n.clientHeight),
          (n = n.parentElement);
      return (e.right = e.left + e.width), (e.bottom = e.top + e.height), e;
    },
    p = function (t) {
      var e, n, t;
      return !(
        !(t.offsetWidth || t.offsetHeight || t.getClientRects().length) ||
        ((n = t.getBoundingClientRect()), (t = v(t)), n.right < t.left) ||
        n.bottom < t.top ||
        n.left > t.right ||
        n.top > t.bottom
      );
    },
    b =
      ((w = [
        function (t) {
          if (t.getAttribute("id")) {
            var t = document.querySelector('label[for="' + t.getAttribute("id") + '"]');
            if (t) return t.textContent;
          }
          return null;
        },
        function (t) {
          for (var e = t; e; ) {
            if ("LABEL" === e.tagName.toUpperCase()) return e.textContent;
            e = e.parentElement;
          }
          return null;
        },
        function (t) {
          return t.getAttribute("placeholder");
        },
        function (t) {
          for (var e = t; e; ) {
            var n = e.textContent;
            if (n) {
              var n = n
                .split("\n")
                .map(function (t) {
                  return t.trim();
                })
                .filter(function (t) {
                  return 0 < t.length;
                });
              if (1 === n.length) return n[0];
              break;
            }
            e = e.previousSibling || e.parentElement;
          }
        }
      ]),
      function (t) {
        for (var e = 0; e < w.length; ++e) {
          var n = w[e](t);
          if (n) return n.trim();
        }
        return "";
      }),
    w,
    E = function (t, e) {
      for (var n = {}, r = 0; r < e.length; ++r) {
        var i = t.getAttribute(e[r]);
        i && (n[e[r]] = i);
      }
      return n;
    },
    y = function (i, o, l) {
      var c;
      return function () {
        var t = this,
          e = arguments,
          n = function () {
            (c = null), l || i.apply(t, e);
          },
          r = l && !c;
        clearTimeout(c), (c = setTimeout(n, o)), r && i.apply(t, e);
      };
    },
    C =
      ((L = function (t) {
        return "string" == typeof t ? t : "number" == typeof t ? t + "px" : "";
      }),
      function (t, e) {
        for (var n in e) t.style.setProperty(n, L(e[n]), "important");
        return t;
      }),
    L,
    T,
    x;
  return (
    (x = outerWidth / innerWidth),
    window.addEventListener(
      "click",
      function (t) {
        x = (t.screenX - screenLeft) / t.clientX;
      },
      !0
    ),
    {
      getFavicon: t,
      findText: e,
      isUnloading: i,
      findTextNodes: n,
      isForm: d,
      getForm: s,
      isClickable: h,
      isVisible: p,
      getLabel: b,
      getAttributes: E,
      debounce: y,
      getCSS: u,
      setCSS: C,
      getZoom: function () {
        return x;
      }
    }
  );
})();
