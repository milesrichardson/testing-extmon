"use strict";
(globalThis.webpackChunk_dashlane_popup = globalThis.webpackChunk_dashlane_popup || []).push([
  [50],
  {
    79706: (e, a, t) => {
      t.r(a), t.d(a, { default: () => i });
      var n = t(98019),
        r = t.n(n),
        s = t(96832);
      const i = ({ animationParams: e, containerClassName: a, eventListeners: t = [], height: n, width: i }) => {
        const c = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (!c || !c.current) return () => {};
            const a = r().loadAnimation({ ...e, container: c.current });
            return (
              t.forEach(({ eventName: e, callback: t }) => {
                a.addEventListener(e, t);
              }),
              () => {
                t.forEach(({ eventName: e, callback: t }) => {
                  a.removeEventListener(e, t);
                }),
                  a.destroy();
              }
            );
          }, [e, c, t]),
          s.createElement("div", { ...(void 0 === n && void 0 === i ? {} : { style: { height: n, width: i } }), ref: c, className: a })
        );
      };
    }
  }
]);
