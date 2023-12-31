async function downloadAndTransferFile(e) {
  const n = await fetch(e.data_url);
  n.ok ||
    window.parent.postMessage(
      { "kami-extension-file-load-error": !0, id: e.id, url: e.url, error: `${n.status}: ${n.statusText}` },
      e.origin
    );
  const o = await n.arrayBuffer();
  chrome.extension.sendMessage(chrome.runtime.id, { background_downloader: "destroy", id: e.id });
  const r = new MessageChannel();
  (r.port1.onmessage = function (e) {
    "ready" === e.data && r.port1.postMessage(o, [o]);
  }),
    window.parent.postMessage({ "kami-extension-pdf-transfer": !0, id: e.id, url: e.url, headers: e.headers }, e.origin, [r.port2]);
}
chrome.extension.onMessage.addListener(function (e) {
  if (!e || !e.background_downloader) return;
  const n = e.background_downloader;
  switch ((delete e.background_downloader, n)) {
    case "progress":
      (e["kami-extension-file-load-progress"] = !0), window.parent.postMessage(e, e.origin);
      break;
    case "loaded":
      downloadAndTransferFile(e);
      break;
    case "error":
      (e["kami-extension-file-load-error"] = !0), window.parent.postMessage(e, e.origin);
      break;
    case "ping":
      chrome.extension.sendMessage(chrome.runtime.id, { background_downloader: "pong", id: e.id });
  }
}),
  window.addEventListener("unload", function () {
    chrome.extension.sendMessage(chrome.runtime.id, { background_downloader: "window.unload" });
  });
