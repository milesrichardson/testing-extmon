if (location.pathname.match(/\-/g).length >= 2 && location.href.includes("meet.google.com")) {
  window.__getUserMediaProxy__ = window.__getUserMediaProxy__ || MediaDevices.prototype.getUserMedia || navigator.mediaDevices.getUserMedia;

  window.__resolve_it_all__ = null;

  MediaDevices.prototype.getUserMedia = navigator.mediaDevices.getUserMedia = function (constraints) {
    return new Promise((resolve) => {
      __resolve_it_all__ = { constraints, resolve };
    });
  };
}
