"use strict";
!(function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = new Error().stack;
    n && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[n] = "077c9c2e-b38d-50c0-b5d3-a78fac975b4a"));
  } catch (e) {}
})();
(globalThis.webpackChunk_loomhq_chrome_extension = globalThis.webpackChunk_loomhq_chrome_extension || []).push([
  [650],
  {
    62650: (e, i, c) => {
      c.r(i), c.d(i, { getDevices: () => s });
      const s = () =>
        new Promise((e) => {
          navigator.mediaDevices
            .enumerateDevices()
            .then((i) => {
              const c = [],
                s = [];
              i.forEach((e) => {
                if (e.label && e.deviceId) {
                  const i = { label: e.label, deviceId: e.deviceId, id: e.deviceId };
                  "videoinput" === e.kind ? s.push(i) : "audioinput" === e.kind && c.push(i);
                }
              }),
                e({ mics: c, cameras: s });
            })
            .catch(() => {
              e({ mics: [], cameras: [] });
            });
        });
    }
  }
]);
//# sourceMappingURL=650.js.map
//# debugId=077c9c2e-b38d-50c0-b5d3-a78fac975b4a
