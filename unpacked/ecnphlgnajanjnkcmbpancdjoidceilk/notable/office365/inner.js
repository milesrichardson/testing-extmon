"use strict";
!(function () {
  function e(e) {
    if (document.getElementById("open-with-kami")) return void console.debug("Kami: button already present");
    const o = document.querySelector("#CustomRightRegion");
    if (!o) return void console.debug("Kami: failed to find presence container");
    if (!e) return void console.warn("Kami: can not insert button without document data");
    const n = (function (e) {
      const o = document.createElement("a"),
        n = "brightness(0) invert(1)";
      switch (t()) {
        case "office365-powerpoint":
          const t = document.getElementById("O365_NavHeader");
          if (!t) {
            console.log("Kami: failed to find header");
            break;
          }
          "rgb(245, 245, 245)" !== window.getComputedStyle(t).backgroundColor && (o.style.filter = n);
          break;
        case "office365-excel":
          o.style.filter = n;
          break;
        case "office365-word":
          if ("personal" === e.accountType) o.style.filter = n;
          else {
            window.matchMedia("(prefers-color-scheme: dark)").matches && (o.style.filter = n);
          }
      }
      (o.id = "open-with-kami"),
        (o.ariaLabel = chrome.i18n.getMessage("OpenWithKami")),
        (o.dataset.tooltip = o.ariaLabel),
        (o.onclick = () => (
          (function (e) {
            const o = new URL("https://web.kamihq.com");
            (o.pathname = "/web/viewer.html"),
              o.searchParams.set("source", t()),
              o.searchParams.set("microsoft_user_email", e.userEmail),
              o.searchParams.set("document_identifier", `${e.driveId}::${e.itemId}`),
              window.open(o.toString(), "_blank");
          })(e),
          !1
        )),
        (o.style.color = "white");
      const i = document.createElement("img");
      (i.src = `${"https://web.kamihq.com"}/web/images/openwith.svg`), i.classList.add("open-with-icon"), o.append(i);
      const a = document.createElement("img");
      (a.src = `${"https://web.kamihq.com"}/web/images/kami_widekerning.svg`), a.classList.add("logo", "logo-large"), o.append(a);
      const s = document.createElement("img");
      return (s.src = `${"https://web.kamihq.com"}/web/images/kami_shorthand.svg`), s.classList.add("logo", "logo-small"), o.append(s), o;
    })(e);
    o.prepend(n);
  }
  function t() {
    const { host: e } = window.location;
    return e.includes("word-edit")
      ? "office365-word"
      : e.includes("powerpoint")
      ? "office365-powerpoint"
      : e.includes("excel")
      ? "office365-excel"
      : "office365-unknown";
  }
  async function o(e) {
    return new Promise((t) => {
      chrome.runtime.sendMessage(chrome.runtime.id, { action: "retrieve-setting", setting: e }, (e) => {
        t(e.value);
      });
    });
  }
  !(async function () {
    const t = await Promise.race([
      ((n = 3e3),
      new Promise((e) => {
        setTimeout(e, n);
      })).then(() => "timeout"),
      o("hideOffice365OpenWithKamiButton")
    ]);
    var n;
    "true" === t
      ? console.debug("Kami: button hidden")
      : (function () {
          function t(o) {
            if (!o.data?.kamiOfficeDocumentData) return;
            console.log("Kami: received document data from parent", o.data);
            !(function (t) {
              e(t);
              new MutationObserver((o) => {
                for (const n of o) "childList" === n.type && e(t);
              }).observe(document.body, { childList: !0, subtree: !0 });
            })(o.data.data),
              window.removeEventListener("message", t);
          }
          window.addEventListener("message", t),
            console.log("Kami: requesting document data from parent"),
            window.parent.postMessage({ requestKamiOfficeDocumentData: !0 }, "*");
        })();
  })();
})();
