document
  .querySelector("emoji-picker")
  .addEventListener("emoji-click", (i) => window.top.postMessage({ type: "emoji-click", detail: i.detail }, "*"));
