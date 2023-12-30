(() => {
  (function () {
    "use strict";
    const t = {},
      o = chrome || o,
      s = {
        me: "content",
        localValuesNeeded: ["xv", "debug"],
        pinterestTagPattern:
          /^https?:\/\/([a-z]*\.|)pinterest\.(at|(c(a|h|l|o(\.(kr|uk)|m(|\.(au|mx)))))|d(e|k)|es|fr|i(e|t)|jp|nz|p(h|t)|se|ru)\//
      };
    function e(n, i = 0) {
      n && t.debug && (typeof t.debug == "number" ? i >= t.debug && console.log(n) : console.log(n));
    }
    function r() {
      let n = !1;
      if (window.self === window.top) e("Running in main window, no iframe size check needed."), (n = !0);
      else {
        e("We are inside an iframe.");
        try {
          window.top.innerHeight === window.self.innerHeight && window.top.innerWidth === window.self.innerWidth
            ? (e("This iframe is the same size as the top window; allowing the extension to run."), (n = !0))
            : (e("This frame's dimensions: " + window.self.innerHeight + "x" + window.self.innerWidth),
              e("Top window dimensions: " + window.top.innerHeight + "x" + window.top.innerWidth));
        } catch (i) {
          e("This error message can be safely ignored. It was caught so it doesn't clutter up the console."), e(i);
        }
      }
      return n;
    }
    function d() {
      document.body
        ? ((document.URL || "").match(s.pinterestTagPattern)
            ? (e("Setting tag on Pinterest domain."), document.body.setAttribute("data-pinterest-extension-installed", t.xv))
            : e("Not on Pinterest; no tag set."),
          r() && o.runtime.sendMessage({ to: "background", act: "injectLogic" }))
        : e("document.body not found; n");
    }
    o.storage.local.get(s.localValuesNeeded || null, (n) => {
      for (let i in n) t[i] = n[i];
      t.msg && (t.msg = t.msg[s.me]), d();
    });
  })();
})();
