/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  var __webpack_exports__ = {};

  console.log("Browse script injected");
  let lastPage = window.location.href;
  function addNativePartyButton() {
    if (document.getElementById("native-party-button") != null) {
      return true;
    }
    const playButton = document.querySelector('button[data-testid="play-button"]');
    if (playButton == null) {
      return false;
    }
    const parentDiv = playButton.parentElement;
    const nativePartyButton = document.createElement("button");
    nativePartyButton.setAttribute(
      "class",
      "button button--play button--play-default margin--top-1 margin--right-3 margin--bottom-1 margin--left-3"
    );
    nativePartyButton.setAttribute(
      "style",
      "background: linear-gradient(273.58deg, #9E55A0 0%, #EF3E3A 100%); border-color: #e50914; color: #fff;"
    );
    nativePartyButton.setAttribute("id", "native-party-button");
    nativePartyButton.innerHTML = "<span>Start a Teleparty</span>";
    nativePartyButton.addEventListener("click", () => {
      playButton.click();
      const timeout = setTimeout(() => {
        const video = document.querySelector("video");
        if (video == null) {
          return;
        }
        window.postMessage({
          type: "startPartyNative"
        });
        clearTimeout(timeout);
      }, 2000);
    });
    parentDiv.insertBefore(nativePartyButton, playButton.nextSibling);
    return true;
  }
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList" && addNativePartyButton()) {
        observer.disconnect();
      }
    }
  });
  function restartObserver() {
    observer.disconnect();
    observer.observe(document.body, { childList: true, subtree: true });
  }
  observer.observe(document.body, { childList: true, subtree: true });
  // Restart observer when the user navigates to a new page
  // (set a timeout to check if the page has changed)
  setInterval(() => {
    if (lastPage != window.location.href) {
      lastPage = window.location.href;
      restartObserver();
    }
  }, 1000);

  /******/
})();
