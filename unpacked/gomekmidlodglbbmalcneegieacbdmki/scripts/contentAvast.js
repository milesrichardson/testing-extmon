(() => {
  "use strict";
  !(function (t) {
    const s = /http[s]?\:\/\/(?:[\w\-]+\.)*avast\.com(?:\/|$)/i;
    s.test(t.document.location.href) &&
      t.addEventListener(
        "message",
        function (e) {
          if (e.source != t) return;
          const i = e.data;
          if (i && s.test(e.origin) && !/aos:{3}.*/gi.test(i) && "fusion:::pair" === i) t.postMessage("aos:::pair", "*");
        },
        !1
      );
  })(window);
})();
