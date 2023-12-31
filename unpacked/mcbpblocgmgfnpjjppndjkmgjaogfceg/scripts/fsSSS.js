/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
function TFSPlugin() {
  function O(b) {
    const x = new Promise((g) => {
      const v = { x: b.x, y: b.y };
      d.push(v);
      const h = new Image();
      h.onload = ((e) => () => {
        e.img = h;
        g();
      })(v);
      h.src = b.dataurl;
    });
    A.push(x);
  }
  function P(b) {
    return Promise.all(A).then(() => Q(b));
  }
  function Q(b) {
    return new Promise((x) => {
      isDebug && console.time("captureDone");
      var g = b.action;
      let v = b.left,
        h = b.top;
      var e = b.crop;
      let B = b.cropLeft || 0,
        C = b.cropTop || 0;
      var q = b.cropRight || 0,
        m = b.cropBottom || 0;
      let r = b.cw,
        t = b.ch,
        R = b.stickyHdrHeight,
        J = 0,
        K = 0,
        D = 0,
        E = 0,
        F = 9999999999,
        G = 9999999999,
        y = !0,
        L;
      if (0 === d.length) x();
      else {
        var H = (a) => {
            if (0 >= a) return vBitmaps[0];
            for (let c = vBitmaps.length - 1; 0 <= c; --c) if (vBitmaps[c].y <= a) return vBitmaps[c];
            return null;
          },
          M = (a) => {
            let c = document.createElement("canvas");
            return { y: a, canvas: c, ctx: c.getContext("2d", { alpha: !1, willReadFrequently: !0 }) };
          };
        vBitmaps = [M(0)];
        1 === d.length && ((d[0].x = 0), (d[0].y = 0), (r = d[0].img.width), (t = d[0].img.height));
        d.forEach((a) => {
          F = Math.min(F, a.x);
          G = Math.min(G, a.y);
          D = Math.max(D, a.x);
          E = Math.max(E, a.y);
        });
        var k = E + t - G - (e ? C : 0),
          l = D + r - F - (e ? B : 0);
        e && ((l = Math.min(l, q - B)), (k = Math.min(k, m - C)));
        l = Math.max(1, l);
        k = Math.max(1, k);
        savedCapParamsForDebugging.width = l;
        savedCapParamsForDebugging.height = k;
        savedCapParamsForDebugging.worker = "undefined" !== typeof OffscreenCanvas;
        m = Math.min(isFirefox() || isSafari() ? 32767 : 65500, Math.floor(268435456 / l));
        for (q = 0; 2 > q; ++q) {
          y = !0;
          let a = vBitmaps[0];
          for (e = 0; e < d.length; ++e) {
            var w = d[e].x,
              f = d[e].y,
              n = d[e].img;
            0 === e ? ((J = w), (L = K = f)) : L !== f && y && (y = !1);
            let c = y ? 0 : R;
            w = w - J - B;
            f = f - K - C + c;
            var u = n.height - c - h,
              p = Math.min(f + u, k);
            0 === q
              ? p > a.y + m && H(p) === a
                ? ((a.canvas.width = l),
                  (a.canvas.height = m),
                  (n = M(a.y + m)),
                  vBitmaps.push(n),
                  (lastChunkHeight = p - (a.y + m)),
                  (a = n))
                : (lastChunkHeight = f - a.y + n.height - (h + c))
              : ((p = H(f)),
                (u = H(f + u)),
                p.ctx.drawImage(n, v, h + c, r, t, w, f - p.y, r, t),
                u !== p && u.ctx.drawImage(n, v, h + c, r, t, w, f - u.y, r, t));
          }
          0 === q && (0 < k - a.y ? ((a.canvas.width = l), (a.canvas.height = Math.min(m, k - a.y))) : vBitmaps.pop());
        }
        d = [];
        vBitmaps.forEach((a) => delete a.ctx);
        capBitmaps = vBitmaps;
        capLinks = b.links;
        capWords = b.words;
        capURL = b.url;
        capTitle = b.title;
        canBeBetter = b.canBeBetter;
        setOption(cTemplateNumberPref, parseInt(getOption(cTemplateNumberPref, 0)) + 1);
        -1 !== [cActionSave, cActionSavePDF].indexOf(g)
          ? (g = { url: `fsCaptured.html?action=${g}&folder=${encodeURI(b.overrideFolder || "")}&context=${b.contextId}`, active: !0 })
          : ((g = {
              url: "fsCaptured.html",
              windowId: currentTab.windowId,
              index: currentTab.incognito && !isFirefox() ? void 0 : currentTab.index + 1,
              openerTabId: currentTab.incognito ? void 0 : currentTab.id
            }),
            "true" !== getOption(cOpenNewTabNextToSource) && (delete g.index, isFirefox() && delete g.openerTabId));
        getConsolePtr()("canvas created");
        ((a) =>
          new Promise((c) => {
            chrome.tabs.create(a, (z) => {
              chrome.runtime.lastError ? (delete a.index, delete a.openerTabId, chrome.tabs.create(a, c)) : c(z);
            });
          }))(g).then((a) => {
          function c() {
            z ||
              ((z = !0),
              chrome.tabs.onUpdated.removeListener(N),
              clearInterval(S),
              isDebug && console.timeEnd("captureDone"),
              setTimeout(x, 50));
          }
          let z = !1;
          const N = (I, T) => {
            if (I === a.id)
              switch (T.status) {
                case "complete":
                  c();
              }
          };
          chrome.tabs.onUpdated.addListener(N);
          const S = setInterval(
            () =>
              chrome.tabs.get(a.id, (I) => {
                I || c();
              }),
            500
          );
          setTimeout(c, 1e4);
        });
        pluginEvent({ topic: "processingFinished" });
      }
    });
  }
  var A = [],
    d = [];
  return {
    launchJSON: function (b) {
      switch (b.JSONCommand) {
        case "captureInit":
          A = [];
          d = [];
          break;
        case "captureTabPNG":
          O(b);
          break;
        case "captureDone":
          return P(b);
        case "activateFireShot":
          setOption(cRegisteredUserName, b.name),
            setOption(cRegisteredUserKey, b.key),
            setOption(cRegisteredPref, !0),
            setOption(cPluginProModePref, !0);
      }
    }
  };
}
function getJSPlugin() {
  "undefined" === typeof getJSPlugin.plugin && (getJSPlugin.plugin = new TFSPlugin());
  return getJSPlugin.plugin;
}
