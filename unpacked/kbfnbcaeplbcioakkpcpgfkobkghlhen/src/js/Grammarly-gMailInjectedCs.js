const e = setInterval(() => {
  void 0 !== self.GM_ID_KEY && (document.body.setAttribute("data-gm-id-key", self.GM_ID_KEY), clearInterval(e));
}, 500);
