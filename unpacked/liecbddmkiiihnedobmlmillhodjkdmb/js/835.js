"use strict";
!(function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = new Error().stack;
    n && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[n] = "7da261d3-d70e-56c1-86a1-0f1449cfb110"));
  } catch (e) {}
})();
(globalThis.webpackChunk_loomhq_chrome_extension = globalThis.webpackChunk_loomhq_chrome_extension || []).push([
  [835],
  {
    74835: (e, i, o) => {
      o.r(i), o.d(i, { getDevices: () => s });
      const c = ["ZoomAudioDevice", "LoomAudioDevice (Virtual)", "Microsoft Teams Audio Device (Virtual)"],
        s = () =>
          new Promise((e) => {
            navigator.mediaDevices
              .enumerateDevices()
              .then((i) => {
                const o = [],
                  s = [];
                i.forEach((e) => {
                  if (e.label && e.deviceId && !c.some((i) => e.label.includes(i))) {
                    const i = { label: e.label, deviceId: e.deviceId, id: e.deviceId };
                    "videoinput" === e.kind ? s.push(i) : "audioinput" === e.kind && o.push(i);
                  }
                }),
                  e({ mics: o, cameras: s });
              })
              .catch(() => {
                e({ mics: [], cameras: [] });
              });
          });
    }
  }
]);
//# sourceMappingURL=835.js.map
//# debugId=7da261d3-d70e-56c1-86a1-0f1449cfb110
