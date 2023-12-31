chrome.runtime.onMessageExternal.addListener(function (e, t) {
  if (!e || !e["load-pdf-url"]) return;
  if (!t.tab || !t.tab.id) return void console.warn("Ignoring load-pdf-url request from sender with no tab id");
  DOWNLOADS_MANAGER.destroyOrphanedDownloads();
  const s = new Download(t.tab.id, e.id, e["load-pdf-url"], e["load-pdf-referer"], e.origin);
  DOWNLOADS_MANAGER.addDownload(s), s.run();
}),
  chrome.extension.onMessage.addListener(function (e, t) {
    if (!e || !e.background_downloader) return;
    const s = e.background_downloader;
    switch (s) {
      case "pong":
        console.debug(`Received '${s}'`, e.id), DOWNLOADS_MANAGER.onPingResponse(e.id);
        break;
      case "destroy":
        console.debug(`Received '${s}'`, e.id), DOWNLOADS_MANAGER.destroyDownload(e.id);
        break;
      case "window.unload":
        if (!t.tab || !t.tab.id) return void console.warn(`Ignoring '${s}' request from sender with no tab id`);
        console.log(`Received '${s}' for tab`, t.tab.id), DOWNLOADS_MANAGER.destroyDownloadsForTabId(t.tab.id);
    }
  }),
  chrome.tabs.onRemoved.addListener(function (e) {
    console.log("Received chrome.tabs.onRemoved for tab id", e), DOWNLOADS_MANAGER.destroyDownloadsForTabId(e);
  });
class DownloadsManager {
  constructor() {
    (this.downloads = {}), (this.totalDownloadCount = 0);
  }
  addDownload(e) {
    (this.downloads[e.id] = e), this.totalDownloadCount++;
  }
  destroyDownloadsForTabId(e) {
    for (const t in this.downloads) {
      this.downloads[t].tabId === e && this.destroyDownload(t);
    }
  }
  destroyOrphanedDownloads() {
    for (const e in this.downloads) {
      this.downloads[e].isOrphaned && this.destroyDownload(e);
    }
  }
  destroyDownload(e) {
    const t = this.downloads[e];
    t && (t.destroy(), delete this.downloads[e]);
  }
  onPingResponse(e) {
    const t = this.downloads[e];
    t && t.pong();
  }
}
const DOWNLOADS_MANAGER = new DownloadsManager();
class Download {
  constructor(e, t, s, o, r) {
    (this.tabId = e), (this.id = t), (this.url = s), (this.referer = o), (this.origin = r);
  }
  async run() {
    for (let e = 1; e <= 3; e++) {
      console.log(`Starting download attempt ${e}`, this);
      try {
        this.request = new MonitoredRequest({
          url: this.url,
          headers: this.requestHeaders,
          progressCallback: (e) => {
            this.onRequestProgress(e);
          }
        });
        const e = this.request.run();
        this.startPingTimer();
        const t = await e;
        return (
          (this.fallbackDestroyTimer = window.setTimeout(() => {
            console.warn("Fallback download destroy", this.id), DOWNLOADS_MANAGER.destroyOrphanedDownloads();
          }, 2 * ONE_MINUTE)),
          (this.dataUrlCreatedAt = Date.now()),
          (this.dataUrl = URL.createObjectURL(t.data)),
          this.sendMessageToTab({ background_downloader: "loaded", data_url: this.dataUrl, headers: t.headers }),
          void console.log("Download success", this.id)
        );
      } catch (t) {
        this.request && this.request.abort();
        const s = t.status && 403 === t.status;
        3 !== e && s
          ? (console.log(`Download attempt ${e} failed, retrying after delay ...`, t), await sleep(2e3))
          : (console.error("Download failed after 3 attempt(s)", t, this),
            this.sendMessageToTab({ background_downloader: "error", error: t.message, status: t.status }));
      } finally {
        this.cancelPingTimer();
      }
    }
  }
  get requestHeaders() {
    const e = {},
      t = this.url.indexOf("&kami_gdrive_auth");
    if (-1 !== t) {
      const s = this.url.slice(t + 18);
      e.Authorization = `Bearer ${s}`;
    }
    return this.referer && (e["Kami-Referer"] = this.referer), e;
  }
  startPingTimer() {
    this.ping(), (this.pingTimer = window.setInterval(() => this.ping(), 5e3));
  }
  cancelPingTimer() {
    void 0 !== this.pingTimer &&
      (window.clearInterval(this.pingTimer),
      delete this.firstPingAt,
      delete this.lastPingAt,
      delete this.lastPongAt,
      delete this.pingTimer);
  }
  ping() {
    this.isOrphaned
      ? DOWNLOADS_MANAGER.destroyOrphanedDownloads()
      : (console.debug("Ping download", this.id),
        this.firstPingAt || (this.firstPingAt = Date.now()),
        (this.lastPingAt = Date.now()),
        this.sendMessageToTab({ background_downloader: "ping" }));
  }
  pong() {
    this.lastPongAt = Date.now();
  }
  get isOrphaned() {
    return (
      !!(this.firstPingAt && !this.lastPongAt && this.firstPingAt < Date.now() - ONE_MINUTE) ||
      !!(this.lastPingAt && this.lastPongAt && this.lastPongAt < this.lastPingAt - ONE_MINUTE) ||
      !!(this.dataUrlCreatedAt && this.dataUrlCreatedAt < Date.now() - ONE_MINUTE)
    );
  }
  destroy() {
    console.log("Destroying download", this.id),
      this.request && (this.request.abort(), delete this.request),
      this.cancelPingTimer(),
      void 0 !== this.fallbackDestroyTimer && (window.clearTimeout(this.fallbackDestroyTimer), delete this.fallbackDestroyTimer),
      this.dataUrl && (URL.revokeObjectURL(this.dataUrl), delete this.dataUrl),
      delete this.dataUrlCreatedAt;
  }
  onRequestProgress(e) {
    this.sendMessageToTab({ background_downloader: "progress", progress: { loaded: e.loaded, total: e.total } });
  }
  sendMessageToTab(e) {
    chrome.tabs.sendMessage(this.tabId, { id: this.id, url: this.url, origin: this.origin, ...e });
  }
}
class MonitoredRequest {
  constructor(e) {
    (this.url = e.url), (this.headers = e.headers), (this.progressCallback = e.progressCallback);
  }
  run() {
    return (
      (this.xhr = new XMLHttpRequest()),
      (this.xhr.responseType = "blob"),
      (this.xhr.withCredentials = !0),
      new Promise((e, t) => {
        (this.xhr.onload = () => {
          if (this.xhr.status >= 400) {
            const e = new Error(`Received ${this.xhr.status} response while loading file.`);
            (e.status = this.xhr.status), t(e);
          } else {
            var s = { data: this.xhr.response };
            this.xhr.getResponseHeader("content-disposition") &&
              (s.headers = { "content-disposition": this.xhr.getResponseHeader("content-disposition") }),
              e(s);
          }
        }),
          (this.xhr.onerror = () => {
            t(new Error("Network error"));
          }),
          (this.xhr.onprogress = (e) => {
            this.progressCallback({ loaded: e.loaded, total: e.total });
          }),
          this.xhr.open("GET", this.url);
        for (const e in this.headers) this.xhr.setRequestHeader(e, this.headers[e]);
        this.xhr.send();
      })
    );
  }
  abort() {
    this.xhr && (this.xhr.abort(), delete this.xhr);
  }
}
function sleep(e) {
  return new Promise((t) => {
    window.setTimeout(t, e);
  });
}
const ONE_MINUTE = 6e4;
