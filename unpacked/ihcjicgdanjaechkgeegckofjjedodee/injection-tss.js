(() => {
  var e = new URLSearchParams(document.currentScript.src.split("?")[1]).get("nonce");
  !(function () {
    let t = e;
    console.debug("TSS: hosted page injected"), console.debug("MBTSS: Nonce: ", e);
    let n = !1,
      o = !1,
      r = {},
      i = {},
      s = {},
      c = {};
    function u({ object: e, f: r, subtype: i, detectFunc: s, proxy: c = a, isBrowserlocker: u = !0 }) {
      let l = e[r];
      e[r] = function () {
        if (n && !o && u) throw new Error("Breaking Browser Locker Behavior detected");
        let e = [].slice.call(arguments);
        if (
          (!o && s(e) && (n = !0),
          n &&
            !o &&
            (function (e, n) {
              window.top.postMessage(JSON.parse(JSON.stringify({ type: "scam", subtype: e, parameters: n, nonce: t })), "*");
            })(i, e),
          n && !o && u)
        )
          throw new Error("Breaking Browser Locker Behavior detected");
        return c(l, this, e);
      };
    }
    function a(e, t, n) {
      return e.apply(t, n);
    }
    var l = (e, t, n) => {
      console.debug(`TSS: Checking if repeated ${n} times for interval ${t} against data: `, e);
      let o = Date.now();
      if (e.lastTime)
        if (o - e.lastTime < t) {
          if ((e.lastCount++, e.lastCount >= n)) return !0;
        } else (e.lastTime = o), (e.lastCount = 1);
      else {
        if (1 === n) return (e.lastTime = o), (e.lastCount = 1), !0;
        (e.lastTime = o), (e.lastCount = 1);
      }
      return !1;
    };
    function d(e, t, n) {
      return l(e, t, n);
    }
    function w(e) {
      return console.debug("TSS: Counted history being replaced"), f();
    }
    function f(e) {
      return console.debug("TSS: Caught history"), d(r, 1e3, 500);
    }
    u({
      object: window,
      f: "print",
      subtype: "printLoop",
      detectFunc: function (e) {
        return console.debug("TSS: caught print"), d(i, 1e4, 3);
      }
    }),
      u({
        object: window.history,
        f: "pushState",
        subtype: "historyLoop",
        detectFunc: function (e) {
          return console.debug("TSS: Counted history being pushed"), f();
        }
      }),
      window.setTimeout(function () {
        u({ object: window.history, f: "replaceState", subtype: "historyLoop", detectFunc: w });
      }, 2e3),
      u({
        object: URL,
        f: "createObjectURL",
        subtype: "createURLLoop",
        detectFunc: function (e) {
          return console.debug("TSS: Caught create URL"), d(s, 1e3, 500);
        }
      }),
      window.chrome &&
        window.chrome.webstore &&
        u({
          object: chrome.webstore,
          f: "install",
          subtype: "extensionInstall",
          detectFunc: function (e) {
            return console.debug("TSS: Caught webstore install"), !0;
          },
          isBrowserlocker: !1
        }),
      window.InstallTrigger &&
        u({
          object: window.InstallTrigger,
          f: "install",
          subtype: "extensionInstall",
          detectFunc: function (e) {
            return console.debug("TSS: Caught install XPI"), !0;
          },
          isBrowserlocker: !1
        }),
      window.Notification &&
        u({
          object: window.Notification,
          f: "requestPermission",
          subtype: "notificationLoop",
          detectFunc: function (e) {
            return console.debug("TSS: Caught notification permission request"), d(c, 5e3, 2);
          },
          isBrowserlocker: !1
        }),
      window.addEventListener(
        "message",
        function (e) {
          e.source === window && e.data.nonce === t && "exclude" === e.data.type && (o = !0);
        },
        !1
      );
  })();
})();
