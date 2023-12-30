/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
const statusHostReady = 0,
  statusError = 1;
var fsNativePlugin = {
  port: void 0,
  ready: !1,
  autoReconnect: !1,
  updating: !1,
  updated: !1,
  ignoreResponse: !1,
  portBusy: !1,
  callback: void 0,
  callbackDisconnected: void 0,
  prevVersion: void 0,
  updateTrials: 0,
  pendingData: "",
  firstPacket: !0,
  oldProtocol: !1,
  init: function (a, d) {
    var c = function (b) {
      fsNativePlugin.ignoreResponse
        ? (getConsolePtr()("Ignored response: " + JSON.stringify(b)),
          "status" === b.topic &&
            b.code == statusError &&
            ((fsNativePlugin.updating = !1), (fsNativePlugin.autoReconnect = !1), pluginEvent(b)))
        : ((fsNativePlugin.autoReconnect = !1), fsNativePlugin.processInternally(b) || pluginEvent(b));
    };
    this.callback = a;
    this.callbackDisconnected = d;
    this.ignoreResponse = !1;
    this.portBusy = !0;
    try {
      this.port = chrome.runtime.connectNative(crossBrowserVars.contractId);
    } catch (b) {
      logError(b.message), (this.portBusy = !1);
    }
    this.port.onMessage.addListener(function (b) {
      fsNativePlugin.firstPacket &&
        ((fsNativePlugin.firstPacket = !1),
        b.topic ? ((fsNativePlugin.oldProtocol = !0), getConsolePtr()("Old protocol detected")) : getConsolePtr()("New protocol detected"));
      if (fsNativePlugin.oldProtocol) c(b);
      else if ("" !== b.data) fsNativePlugin.pendingData += b.data;
      else
        try {
          const f = JSON.parse(fsNativePlugin.pendingData);
          isDebug && getConsolePtr()("Original Packet: " + fsNativePlugin.pendingData.substr(0, 1024));
          fsNativePlugin.pendingData = "";
          c(f);
        } catch (f) {
          console.error("Original Packet: " + fsNativePlugin.pendingData.substr(0, 1024)),
            (fsNativePlugin.pendingData = ""),
            logError(f.message);
        }
    });
    this.port.onDisconnect.addListener(
      function () {
        chrome.runtime.lastError && console.error(chrome.runtime.lastError.message);
        this.portBusy = this.ready = !1;
        !this.updating && this.callbackDisconnected && this.callbackDisconnected();
        getConsolePtr()("Native port disconnected.");
        this.firstPacket = !0;
        this.oldProtocol = !1;
        this.pendingData = "";
        this.autoReconnect && this.doReconnect();
      }.bind(this)
    );
    getConsolePtr()("Native port created successfully. Starting test...");
    this.launchJSON({ JSONCommand: "ping", version: extVersionFull, id: extensionId });
  },
  processInternally: function (a) {
    if ("hostVersion" == a.topic) {
      if (((this.hostVersion = a.data), extVersionFull != this.hostVersion))
        if (3 < ++this.updateTrials)
          getConsolePtr()("Too much of unsuccessful update trials. No updates anymore."),
            gaTrack("UA-1025658-9", "DLL", "NativeError", "Too much of unsuccessful update trials. No updates anymore"),
            (this.updating = !1);
        else return (this.prevVersion = this.hostVersion), this.doUpdate(), !0;
    } else if ("status" == a.topic)
      a.code == statusHostReady
        ? ((a = a.data),
          (this.updateTrials = 0),
          (this.ready = !0),
          this.callback && (this.callback(), (this.callback = void 0)),
          this.updating && ((this.updated = !0), (this.updating = !1), "0" != this.prevVersion && nativeHostUpdated(a)))
        : this.updating && (this.updating = !1);
    else if ("getDLL" == a.topic) return this.sendDLL(a.x64), !0;
    return !1;
  },
  launchJSON: function (a) {
    this.port.postMessage(a);
  },
  getFile: function (a, d) {
    getConsolePtr()("Fetching: " + a);
    fetch(chrome.runtime.getURL(a))
      .then((c) => {
        200 == c.status
          ? c.blob().then((b) => {
              const f = new FileReader();
              f.onload = (g) => {
                getConsolePtr()("Fetching complete");
                d(g.target.result.substr(g.target.result.indexOf("base64,") + 7, g.target.result.length));
              };
              f.onerror = () => {
                getConsolePtr()("Error in FileReader");
                gaTrack("UA-1025658-9", "DLL", "NativeError", "Error decoding SSS.dll in FileReader");
              };
              f.readAsDataURL(b);
            })
          : (getConsolePtr()("NativeError-Error retrieving file"),
            gaTrack("UA-1025658-9", "DLL", "NativeError", "Error retrieving " + a + ": " + c.status));
      })
      .catch((c) => {
        gaTrack("UA-1025658-9", "DLL", "NativeError", "Error retrieving " + a + ": " + c);
      });
  },
  sendDLL: function (a) {
    this.getFile(`native/${a ? "sss-x64.dat" : "sss.dat"}`, (d) => {
      this.launchJSON({ JSONCommand: "updateDLL", version: extVersionFull, data: d });
    });
  },
  doUpdate: function () {
    getConsolePtr()("Updating native to the version: " + extVersionFull);
    this.ignoreResponse = !0;
    this.getFile("native/" + crossBrowserVars.nativeFilePath, (a) => {
      this.autoReconnect = this.updating = !0;
      this.launchJSON({ JSONCommand: "updateNative", version: extVersionFull, data: a });
    });
  },
  doReconnect: function () {
    setTimeout(() => {
      getConsolePtr()("Trying to reconnect...");
      this.init(this.callback);
    }, 1e3);
  },
  forceDisconnect: function () {
    this.autoReconnect = !1;
    this.port && this.port.disconnect();
    this.ready = !1;
  }
};
async function sendNativeMessageSafari(a, d) {
  getConsolePtr()(`Sending ${a.topic}`);
  if ("saveFile" !== a.topic || 157286400 > a.data.length)
    browser.runtime.sendNativeMessage("application.id", a, (c) => {
      getConsolePtr()("Response from native App:");
      getConsolePtr()(c);
      d && d(c);
    });
  else {
    let c = {};
    for (e in a) "data" != e && (c[e] = a[e]);
    getConsolePtr()("Sending saveFile in async mode...");
    browser.runtime.sendNativeMessage("application.id", c, async (b) => {
      getConsolePtr()("Response from native App:");
      getConsolePtr()(b);
      const f = (g) => new Promise((k) => browser.runtime.sendNativeMessage("application.id", g, k));
      if ("true" === b.success) {
        b = b.fileId;
        const g = a.data;
        let k = 0,
          h;
        for (; k < g.length; ) {
          let l = g.substring(k, k + 157286400);
          k += 157286400;
          h = await f({ topic: "writeBlock", fileId: b, data: l });
          getConsolePtr()(`Written ${l.length} bytes, result:`);
          getConsolePtr()(h);
          if ("true" !== h.success) break;
        }
        "true" === h.success && (h = await f({ topic: "writeBlock", fileId: b, openFolder: a.openFolder }));
        getConsolePtr()("Signaling to finish. result:");
        getConsolePtr()(h);
        d && d(h);
      } else d && d(b);
    });
  }
}
