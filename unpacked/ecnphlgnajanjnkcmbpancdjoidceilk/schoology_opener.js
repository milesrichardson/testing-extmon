var EXTENSION_IDS = [
  "chrome-extension://ecnphlgnajanjnkcmbpancdjoidceilk",
  "chrome-extension://lodjbngldcpejfnhmjkljfdinellpnji",
  "chrome-extension://bhfdppnpkppcmclldhnadigbmfheemjf",
  "chrome-extension://nlnndloljhkmcbihclnpkhpbpbapdmpc"
];
chrome.webRequest.onHeadersReceived.addListener(
  function (e) {
    const n = /(kamihq\.com|kamipdf\.com)/.test(e.initiator),
      t = EXTENSION_IDS.includes(e.initiator);
    if (n || t) return;
    const i = e.responseHeaders.find((e) => "location" == e.name);
    let s = new URL(i.value),
      c = "Kami Assignment",
      a = s.searchParams.get("content-disposition");
    if (a) {
      const e = /filename=".+k_sch_[^_]+_(.+).pdf"/;
      let n = a.match(e)[1];
      n && (c = n);
    }
    return a && a.includes("k_sch_")
      ? (chrome.tabs.get(e.tabId, (n) => {
          chrome.tabs.sendMessage(e.tabId, { redirectUrl: n.url, filename: c });
        }),
        chrome.tabs.sendMessage(e.tabId, { redirectUrl: e.initiator }),
        chrome.tabs.sendMessage(e.tabId, { file_link: e.url, filename: c }),
        { cancel: !0 })
      : void 0;
  },
  { urls: ["https://*/attachment/*/source/*"] },
  ["blocking", "responseHeaders"]
);
