export const clickTheSkip = () => {
  let e = document.querySelector(".ytp-ad-skip-button, .ytp-ad-skip-button-modern");
  e && (e.click(), window.useLogging && console.log("Clicked skip button"));
  let o = document.getElementsByClassName("ytp-ad-overlay-close-container");
  o.length > 0 && (o[0].click(), window.useLogging && console.log("Clicked close button"));
};
export function skipToTheEnd() {
  const e =
      document.querySelectorAll(".ad-showing")[0] ||
      document.querySelector(".ytp-ad-text.ytp-ad-preview-text") ||
      document.querySelector("ytp-ad-preview-container"),
    o = document.querySelector("video");
  null != e &&
    null != o &&
    (window.useLogging && console.log("Skipping to the end of the video", e),
    (o.muted = !0),
    (o.currentTime = o.duration - 0.5),
    (o.playbackRate = 10));
}
export function removeKnownAds() {
  const e = document.querySelectorAll("#player-ads,.ytd-ad-slot-renderer");
  if (e.length > 0) for (const o of e) o.remove();
}
