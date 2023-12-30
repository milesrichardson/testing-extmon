(() => {
  "use strict";
  const {
      AbortController: e,
      FileReader: t,
      TextDecoder: s,
      addEventListener: n,
      atob: o,
      btoa: r,
      clearInterval: a,
      clearTimeout: c,
      crypto: i,
      decodeURIComponent: l,
      encodeURIComponent: u,
      escape: h,
      fetch: d,
      location: p,
      removeEventListener: w,
      setInterval: g,
      setTimeout: f,
      unescape: m
    } = self,
    {
      DOMParser: W,
      Notification: v,
      Image: x,
      Worker: y,
      XMLHttpRequest: S,
      alert: T,
      confirm: b,
      document: R,
      localStorage: k,
      screen: D,
      webkitNotifications: I
    } = (self, p.origin, p.host, self);
  self.addEventListener("install", () => {
    console.log("SW: started"), self.skipWaiting().catch((e) => console.warn(e));
  });
  const L = "x-sw-cache-timestamp";
  self.addEventListener("fetch", (e) => {
    const t = e.request.url,
      s = caches
        .match(t)
        .then(async (s) => {
          let n;
          if (s && (!(n = s.headers.get(L)) || Date.now() < Number(n) + 6048e5))
            return console.log(`SW: delivering cached response for ${t}`), s;
          if (
            !t.startsWith("http") ||
            !(
              t.startsWith("https://www.google.com/s2/favicons") ||
              t.startsWith("https://icons.duckduckgo.com/ip2/") ||
              t.endsWith("favicon.ico")
            )
          )
            return d(e.request);
          try {
            const s = await d(e.request);
            return (async (e, t) => {
              console.log(`SW: caching ${e}`);
              const s = await caches.open("dynamic"),
                n = await (async (e, t) => {
                  const s = t
                      ? t(
                          (() => {
                            const t = new Headers();
                            for (const [s, n] of e.headers.entries()) t.append(s, n);
                            return t;
                          })()
                        )
                      : e.headers,
                    n = await e.blob();
                  return new Response(n, { status: e.status, statusText: e.statusText, headers: s });
                })(t, (e) => (e.set(L, Date.now().toString()), e));
              return s.put(e, n.clone()).catch((e) => console.warn(e)), n;
            })(t, s);
          } catch (e) {
            return (async (e, t) => {
              console.log(`SW: caching error response for ${e}`);
              const s = await caches.open("dynamic"),
                n = new Response(null, { status: 500, statusText: t || "internal error", headers: { [L]: Date.now().toString() } });
              return s.put(e, n.clone()).catch((e) => console.warn(e)), n;
            })(t, e.message);
          }
        })
        .catch((e) => {
          const t = e.message || e.statusText || "unknown error";
          return console.log(`SW: unexpected error ${t}`), new Response(null, { status: 500, statusText: t });
        });
    e.respondWith(s);
  });
})();
