(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  const q = {
      creators_name: "author",
      creator: "author",
      contributor: "author",
      issued: "publication_year",
      publication_date: "publication_year",
      date: "year"
    },
    u = { abstract: 1, description: 1, keyword: 1, keywords: 1, reference: 1 },
    v = /^.*_(url|email|institution)$/,
    w = /  +/g;
  var x = function (a, c, h) {
      a = q[a] || a;
      !c || u[a] || v.test(a) || h.push(encodeURIComponent(a) + "=" + encodeURIComponent(c));
    },
    y = function (a, c) {
      for (; a; ) {
        var h = c[a];
        if (h) return h;
        h = a.indexOf(".");
        if (0 > h) break;
        a = a.substr(h + 1);
      }
    },
    z =
      "innerText" in document.documentElement
        ? function (a) {
            return a.innerText;
          }
        : function (a) {
            if (1 == a.nodeType) {
              const c = document.defaultView.getComputedStyle(a);
              return "none" == c.display || "hidden" == c.visibility || 0 >= parseFloat(c.fontSize) || 0 >= parseFloat(c.opacity)
                ? ""
                : Array.prototype.map.call(a.childNodes, z).join(" ").replace(w, " ");
            }
            return a.textContent;
          };
  var A = function () {
    function a(k) {
      return k.match(c) ? k.replace(h, "") : k;
    }
    const c = /<(p|br)>|<\/.*>|<.*\/>/i,
      h = /<[^>]+>/g;
    var b = document.getElementsByTagName("meta"),
      d = [],
      e = [],
      l = [],
      n = [],
      g = [],
      f = /[.-]/g;
    for (let k = 0, t = b.length; k < t; ++k) {
      const p = (b[k].name || "").toLowerCase().replace(f, "_"),
        r = a(b[k].content || "");
      0 == p.indexOf("citation_")
        ? x(p.substr(9), r, d)
        : 0 == p.indexOf("eprints_")
        ? x(p.substr(8), r, e)
        : 0 == p.indexOf("bepress_citation_")
        ? x(p.substr(17), r, l)
        : 0 == p.indexOf("wkhealth_")
        ? x(p.substr(9), r, n)
        : 0 == p.indexOf("dc_")
        ? x(p.substr(3), r, g)
        : 0 == p.indexOf("dcterms_") && x(p.substr(8), r, g);
    }
    b = [d, e, l, n, g];
    d = /^author=/;
    const m = /^title=/;
    for (e = 0; e < b.length; ++e) {
      l = b[e];
      n = [];
      g = 0;
      for (f = 0; f < l.length; ++f) (!d.test(l[f]) || 5 >= ++g) && n.push(l[f]);
      if (n.some((k) => m.test(k))) return n;
    }
    return [];
  };
  /[?&]tc=([01])/.exec(location.search || "") ||
    0 <= (navigator.userAgent || "").indexOf("Android") ||
    (window.matchMedia && window.matchMedia("(pointer)").matches && window.matchMedia("(pointer:coarse)"));
  function B(a, c) {
    return (
      (a.charCodeAt(c) & 255) |
      ((a.charCodeAt(c + 1) & 255) << 8) |
      ((a.charCodeAt(c + 2) & 255) << 16) |
      ((a.charCodeAt(c + 3) & 255) << 24)
    );
  }
  const C =
    Math.imul ||
    ((a, c) => {
      const h = a & 65535,
        b = c & 65535;
      return (h * b + (((((a >>> 16) & 65535) * b + h * ((c >>> 16) & 65535)) << 16) >>> 0)) | 0;
    });
  function D(a, c) {
    return (a << c) | (a >>> (32 - c));
  }
  function E(a) {
    a = C(a ^ (a >>> 16), 2246822507);
    a = C(a ^ (a >>> 13), 3266489909);
    return a ^ (a >>> 16);
  }
  function F(a) {
    a = (a >>> 0).toString(16);
    return "00000000".substr(a.length) + a;
  }
  const G = /([?&]oi=)([^&]+)/;
  function H(a) {
    return a.replace(/[-+":]/g, " ").substr(0, 500);
  }
  function I() {
    const a = window.getSelection() + "";
    return a && "scholar?oi=gsb90&q=" + encodeURIComponent(H(a));
  }
  function J(a) {
    function c(b) {
      let d = 1463435680,
        e = 1463435680,
        l = 1463435680,
        n = 1463435680,
        g,
        f,
        m,
        k;
      const t = b.length,
        p = (t >> 4) << 4;
      for (let r = 0; r < p; r += 16)
        (g = B(b, r)),
          (f = B(b, r + 4)),
          (m = B(b, r + 8)),
          (k = B(b, r + 12)),
          (g = C(g, 597399067)),
          (g = D(g, 15)),
          (g = C(g, 2869860233)),
          (d ^= g),
          (d = D(d, 19)),
          (d += e),
          (d = (5 * d + 1444728091) >>> 0),
          (f = C(f, 2869860233)),
          (f = D(f, 16)),
          (f = C(f, 951274213)),
          (e ^= f),
          (e = D(e, 17)),
          (e += l),
          (e = (5 * e + 197830471) >>> 0),
          (m = C(m, 951274213)),
          (m = D(m, 17)),
          (m = C(m, 2716044179)),
          (l ^= m),
          (l = D(l, 15)),
          (l += n),
          (l = (5 * l + 2530024501) >>> 0),
          (k = C(k, 2716044179)),
          (k = D(k, 18)),
          (k = C(k, 597399067)),
          (n ^= k),
          (n = D(n, 13)),
          (n += d),
          (n = (5 * n + 850148119) >>> 0);
      k = m = f = g = 0;
      switch (t & 15) {
        case 15:
          k ^= (b.charCodeAt(p + 14) & 255) << 16;
        case 14:
          k ^= (b.charCodeAt(p + 13) & 255) << 8;
        case 13:
          (k ^= (b.charCodeAt(p + 12) & 255) << 0), (k = C(k, 2716044179)), (k = D(k, 18)), (k = C(k, 597399067)), (n ^= k);
        case 12:
          m ^= (b.charCodeAt(p + 11) & 255) << 24;
        case 11:
          m ^= (b.charCodeAt(p + 10) & 255) << 16;
        case 10:
          m ^= (b.charCodeAt(p + 9) & 255) << 8;
        case 9:
          (m ^= (b.charCodeAt(p + 8) & 255) << 0), (m = C(m, 951274213)), (m = D(m, 17)), (m = C(m, 2716044179)), (l ^= m);
        case 8:
          f ^= (b.charCodeAt(p + 7) & 255) << 24;
        case 7:
          f ^= (b.charCodeAt(p + 6) & 255) << 16;
        case 6:
          f ^= (b.charCodeAt(p + 5) & 255) << 8;
        case 5:
          (f ^= (b.charCodeAt(p + 4) & 255) << 0), (f = C(f, 2869860233)), (f = D(f, 16)), (f = C(f, 951274213)), (e ^= f);
        case 4:
          g ^= (b.charCodeAt(p + 3) & 255) << 24;
        case 3:
          g ^= (b.charCodeAt(p + 2) & 255) << 16;
        case 2:
          g ^= (b.charCodeAt(p + 1) & 255) << 8;
        case 1:
          (g ^= (b.charCodeAt(p + 0) & 255) << 0), (g = C(g, 597399067)), (g = D(g, 15)), (g = C(g, 2869860233)), (d ^= g);
      }
      e ^= t;
      l ^= t;
      n ^= t;
      d = (d ^ t) + e + l;
      d += n;
      e += d;
      l += d;
      n += d;
      d = E(d);
      e = E(e);
      l = E(l);
      n = E(n);
      d += e;
      d += l;
      d += n;
      e += d;
      l += d;
      n += d;
      b = F(d) + F(e) + F(l) + F(n);
      return (
        0 <=
        ",001fde309095b539,0185b8df4ac2f854,04a92f8c063fc87a,0683146df3567555,0ac877b4c0a3205f,0bcca1071aefa33b,0d784cf85154f1cf,0f4bcccbd8c561ac,107b135de44ac922,13a8259a5ab34e58,1414dca5ec4e1c2c,155020036a9f8ea5,1a5df52f5ea416a6,1a99fcc2e8fb347c,21de91bffcc7c1e6,22f15c1ddc8521a1,230884e2eff4d081,24161b41ba32df27,25024107d83ae836,267083cef39376db,2733d3b278ac8e32,27b4c4de40410e5a,2831a98089aa8dc4,29506a7448ded562,29fa11065b708b1d,2a33db0f6c2da04e,2b23aef8e3e91f30,2c7b6ecc2325446b,2d9a21f3fd2ef7d2,2e0d4f430297f1a1,31278be6c8f8aca2,347a06499e62e3df,366422dbaa0a4748,37baa9424345fd38,37e7d3928d33461a,3df33e342cee4bab,42c114ead5c10d68,4495d017442c4c10,4a69abb3135f6283,4a9cd50296b8c5d7,4fc30abdd64d6736,50e55854a880f685,514d0132e3115710,5366fd147b8e9d33,594f47350c2e20c0,596a4abf2c6f6f0b,5ac0a209599257cf,5c72860e547304c5,6153af1ff96193c7,65a826a8bfff3de7,670b5ca33a9726fb,695c222931a0bdc6,6b18f38643bb0885,6b58848606d74a7f,6c4564e057a04c0d,6ce471fb1c1f15f9,6e74751c30954370,72647788a1e6ac0d,7c43b63e8b467f82,82248bcc57515e86,8a910090d56bb846,974b0da894938100,9d6d8eab29cc6cd6,a2cbece521a6b706,a517803359d9da0f,a55e99e6d6e60142,a6cf3be4f72d5fca,a80ad1ae260b439b,a9653c11711b139b,aca51ebd970ea9db,ad3ad05c5d030ff1,adf7c1b725ebe04e,b49dec64c7d855aa,b785bc231e43134b,b92e1376543888cb,bad782d308f6ee8f,bb7f972a836d70b1,bc7f7464ca755854,bd7757bfefd4766c,bdc646ef43dff7f9,c1a10b4b5a2bab63,d9de8121c5ee95a2,de67b75eb5b60f70,e2a678e43b9f4f81,e42f4c587f6ceafd,e45711b5b0526b1d,e73fb2bb1b366aef,e75621876b084945,ee771c4e62b9f90c,ef1a7f2680a18753,f01b75960be4ddd4,f1029a3eed96e197,f28aa283c1f50662,f6c02b415ca52cad,f6e9ddd0c9eeb7f1,f78f8569d136a7a1,f7de21fb87b1df56,fc0daea00ec98740,fc82e65d8feb8077,fda729397d9a56d5,".indexOf(
          "," + b.substr(0, 16) + ","
        )
      );
    }
    if (a.replace(/^(.*?)[.](com|[a-z]{2}|(com|co)[.][a-z]{2})$/, "$1").match(/^(.*[.])?(google|yahoo|yandex|amazon|ebay|craigslist)$/))
      return !1;
    const h = a.replace(/^(.*[.])?([a-z0-9-]+[.][a-z-]{2,})$/, "$2");
    a = a.replace(/^(.*[.])?([a-z0-9-]+([.][a-z-]{2,}){2})$/, "$2");
    return !c(h) && !c(a);
  }
  var K;
  const L = document.documentElement,
    M = document.getElementsByTagName("embed")[0];
  K =
    M &&
    M.clientWidth >= 0.9 * L.clientWidth &&
    M.clientHeight >= 0.9 * L.clientHeight &&
    ("application/pdf" == M.type || "application/x-google-chrome-pdf" == M.type)
      ? M
      : null;
  let N,
    O = (function (a = "", c = location.hostname) {
      a = a || location.href;
      if (/^.*[.\/]google[.][^\/]+\/books.*[?&]id=[^&]+/.test(a)) a = I() || "scholar?oi=gsb05&lookup_url=" + encodeURIComponent(a);
      else {
        var h;
        (h = I()) || ((h = A()), (h = 0 != h.length ? "scholar_lookup?oi=gsb80&" + h.join("&") : void 0));
        if (!h) {
          var b;
          var d = document;
          h = d.querySelectorAll("[itemscope][itemtype$=ScholarlyArticle] [itemprop=headline]");
          if ((h = 1 == h.length && z(h[0]))) {
            var e = d.querySelectorAll("[itemscope][itemtype$=ScholarlyArticle] [itemprop=author] [itemprop=name]");
            d = d.querySelectorAll("[itemscope][itemtype$=ScholarlyArticle] [itemprop=datePublished]");
            var l = [],
              n = 0;
            x("title", h + "", l);
            for (let m = 0, k = e.length; m < k; ++m)
              if ((b = z(e[m]))) {
                if (5 < ++n) break;
                x("author", b, l);
              }
            1 == d.length && (b = z(d[0])) && x("publication_year", b, l);
            b = l;
          } else b = [];
          h = 0 != b.length ? "scholar_lookup?oi=gsb70&" + b.join("&") : void 0;
        }
        (b = h) ||
          (b =
            (b =
              a.match(/^.*[.\/](google|bing|twitter)[.].*[?&#]q=([^&]+).*$/) ||
              a.match(/^.*[.\/](researchgate|microsoft)[.].*[?&#]q=([^&]+).*$/) ||
              a.match(/^.*[.\/]yahoo[.].*[?&#]p=([^&]+).*$/) ||
              a.match(/^.*[.\/]baidu[.].*[?&#]wd=([^&]+).*$/) ||
              a.match(/^.*[.\/]naver[.].*[?&#]query=([^&]+).*$/) ||
              a.match(/^.*[.\/]yandex[.].*[?&#]text=([^&]+).*$/) ||
              a.match(/^.*[.\/]ncbi[.]nlm[.]nih[.]gov\/.*[?&#]term=([^&]+).*$/) ||
              a.match(/^.*[.\/]dimensions[.].*\/.*[?&#]search_text=([^&]+).*$/)) &&
            "scholar?oi=gsb40&q=" + encodeURIComponent(decodeURIComponent(b[b.length - 1].replace(/[+]/g, "%20"))));
        if (!b && (b = J(c))) {
          e = document;
          b = e.defaultView || window;
          h = e.body.getBoundingClientRect();
          e = e.querySelectorAll(y(c, { "webofknowledge.com": ".title value" }) || "h1, h2, h3");
          d = 0;
          l = "h9";
          n = "";
          c = y(c, { "journals.aps.org": "#header .title" }) || ".PageTitleSFXMenu";
          for (let m = 0, k = e.length; m < k; ++m) {
            var g = e[m];
            if (c && (g.matches || g.mozMatchesSelector || g.webkitMatchesSelector).call(g, c)) continue;
            const t = z(g);
            if (!(10 > t.length)) {
              var f = g.getBoundingClientRect();
              !(f.top > 1e3 + h.top || 100 > f.right - f.left || 10 > f.bottom - f.top) &&
                ((f = b.getComputedStyle(g)),
                !("hidden" == f.visibility || 0 >= parseFloat(f.opacity)) &&
                  ((f = parseFloat(f.fontSize)), (g = g.tagName.toLowerCase()), f != d ? f > d : g != l ? g < l : t.length > n.length)) &&
                ((d = f), (l = g), (n = t));
            }
          }
          c = n;
          (c = c && "scholar?oi=gsb20&q=" + encodeURIComponent(H(c)) + "&lookup_url=" + encodeURIComponent(a)) ||
            ((b = c = document),
            (h = b.querySelectorAll("[itemscope][itemtype$=Article] [itemprop=name]")),
            (h = 1 == h.length ? z(h[0]) : ""),
            (e = b.querySelectorAll("meta[property=og\\:title], meta[name=og\\:title]")),
            (e = 1 == e.length ? e[0].content : ""),
            (b = h || e || b.title || ""),
            (c =
              !b || (b == c.title && "application/pdf" == c.contentType)
                ? void 0
                : "scholar?oi=gsb10&q=" + encodeURIComponent(H(b)) + "&lookup_url=" + encodeURIComponent(a)));
          b = c || "scholar?oi=gsb05&lookup_url=" + encodeURIComponent(a);
        }
        a = b || "";
      }
      return a;
    })();
  function P(a) {
    var c = O;
    if (a) {
      const b = "scholar?oi=gsb85&q=" + encodeURIComponent(H(a + ""));
      a = b;
      var h = c;
      const d = (a.match(G) || ["", "", ""])[2],
        e = (h.match(G) || ["", "", ""])[2];
      (d != e ? d > e : a.length > h.length) && (c = b);
    }
    chrome.runtime.sendMessage(c);
  }
  function Q(a) {
    (a = a.data) && "object" == typeof a && "getSelectedTextReply" == a.type && (R(), P(a.selectedText));
  }
  function R() {
    window.removeEventListener("message", Q);
    clearTimeout(N);
  }
  K
    ? (window.addEventListener("message", Q),
      (N = setTimeout(() => {
        N = void 0;
        R();
        P();
      }, 400)))
    : P();
}).call(this);
