self.addEventListener("install", (e) => {
  console.log("Service Worker installed", e);
}),
  self.addEventListener("activate", (e) => {
    e.waitUntil(self.clients.claim()), console.log("Service Worker claimed clients", e);
  }),
  self.addEventListener("fetch", (e) => {
    const s = new URL(e.request.url);
    if (s.origin === self.location.origin && s.pathname.startsWith("/driveProxy")) {
      console.log("Service Worker got request", e.request.url);
      const s = new URL(e.request.url),
        t = s.searchParams.get("fileId"),
        r = s.searchParams.get("cache_buster"),
        a = s.searchParams.get("access_token"),
        i = `https://www.googleapis.com/drive/v2/files/${t}?alt=media&source=downloadUrl&cacheBuster=${r}`,
        o = Object.fromEntries(e.request.headers.entries()),
        c = new Request(i, {
          mode: "cors",
          credentials: "omit",
          headers: Object.assign(Object.assign({}, o), { Authorization: "Bearer " + a })
        });
      e.respondWith(fetch(c));
    }
  });
