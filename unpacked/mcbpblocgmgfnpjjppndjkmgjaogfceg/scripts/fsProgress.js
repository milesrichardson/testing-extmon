/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
document.addEventListener("DOMContentLoaded", () => {
  isSafari() &&
    (document.body.style.setProperty("min-height", "40px"),
    document.getElementById("progressContainer").style.setProperty("border-color", "#bbb"));
  try {
    i18nPrepare();
  } catch (a) {
    logError(a.message);
  }
  const b = getExtension(),
    c = (a) => {
      a = Math.min(100, a);
      document.getElementById("progressValue").style.setProperty("width", `${a}%`);
    };
  chrome.runtime.onMessage.addListener((a) => {
    switch (a.message) {
      case "setProgressValue":
        c(a.progress);
        110 < a.progress && document.getElementById("infiniteModeWarning").style.setProperty("display", "block");
        document.getElementById("btnTest").style = "display:none";
        break;
      case "setProcessingStatus":
        document.getElementById("capturing").style.setProperty("display", "none");
        document.getElementById("processingLabel").style.setProperty("display", "block");
        setTimeout(() => document.getElementById("processingLabel").style.setProperty("opacity", "1"), 10);
        break;
      case "closeProgress":
        window.close();
    }
  });
  document.getElementById("btnTest").addEventListener("click", () => {
    document.getElementById("capturing").style.setProperty("display", "none");
    document.getElementById("processingLabel").style.setProperty("display", "block");
    setTimeout(() => document.getElementById("processingLabel").style.setProperty("opacity", "1"), 100);
  });
  document.getElementById("stopControl").addEventListener("click", () => {
    b.buttonStopCapturingClicked();
  });
});
