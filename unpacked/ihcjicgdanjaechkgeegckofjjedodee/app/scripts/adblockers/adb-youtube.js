export const trimmerMethod = () => {
  const e = [
      "[].playerResponse.adPlacements",
      "[].playerResponse.playerAds",
      "playerResponse.adPlacements",
      "playerResponse.playerAds",
      "adPlacements",
      "playerAds",
      "ytInitialPlayerResponse.adPlacements",
      "ytInitialPlayerResponse.playerAds",
      "adPlacementRenderer",
      "adPlacementConfig",
      "instreamVideoAdRenderer",
      "instreamAdPlayerOverlayRenderer",
      "linearAdSequenceRenderer"
    ],
    n = function (e, t) {
      for (;;) {
        if ("object" != typeof e || null === e) return !1;
        const o = t.indexOf(".");
        if (-1 === o) {
          if ("*" === t)
            for (const n in e) !1 !== e.hasOwnProperty(n) && (window.useLogging && console.log("Deleting key", n, e[n]), delete e[n]);
          else e.hasOwnProperty(t) && (window.useLogging && console.log("Deleting element", t, e[t]), delete e[t]);
          return !0;
        }
        const r = t.slice(0, o);
        if (("[]" === r && Array.isArray(e)) || ("*" === r && e instanceof Object)) {
          const r = t.slice(o + 1);
          let l = !1;
          for (const t of Object.keys(e)) if (((l = n(e[t], r)), l)) break;
          return l;
        }
        if (!1 === e.hasOwnProperty(r)) return !1;
        (e = e[r]), (t = t.slice(o + 1));
      }
    },
    t = function (t) {
      for (const o of e) n(t, o);
      return t;
    };
  (JSON.parse = new Proxy(JSON.parse, {
    apply: function () {
      return t(Reflect.apply(...arguments));
    }
  })),
    (Response.prototype.json = new Proxy(Response.prototype.json, {
      apply: function () {
        return Reflect.apply(...arguments).then((e) => t(e));
      }
    })),
    window.useLogging && console.log("Trimmer initialized");
};
export const pressSkipButton = () => {
  let e = document.querySelectorAll("button.ytp-ad-skip-button");
  e.length > 0 && (e[0].click(), window.useLogging && console.log("Clicked button"));
  let n = document.getElementsByClassName("ytp-ad-overlay-close-container");
  n.length > 0 && (n[0].click(), window.useLogging && console.log("Clicked button"));
  const t = document.querySelectorAll(".ad-showing")[0],
    o = document.querySelector(".ytp-ad-text.ytp-ad-preview-text"),
    r = document.querySelector("video");
  null != t && null != r && null != o && (r.currentTime = r.duration);
};
