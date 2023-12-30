"use strict";
async function onPageLoad() {
  "true" === (await Promise.race([sleep(3e3).then(() => "timeout"), retrieveSettingFromBackgroundPage("hideGoogleOpenWithKamiButton")]))
    ? console.debug("Kami: button hidden")
    : injectButton();
}
function injectButton() {
  const e = document.querySelector("#docs-presence-container");
  if (!e) return void console.warn("Kami: failed to find presence container");
  const t = createOpenWithKamiButton();
  if (!!!e.insertAdjacentElement("afterend", t)) return void console.warn("Kami: failed inserting open link");
  const o = document.querySelector("#docs-save-indicator-badge"),
    n = !o?.hasChildNodes();
  o
    ? n
      ? activateKamiButtonAfterDocumentSave()
      : activateKamiButton()
    : (console.warn("Kami: failed to find document save status, enabling Kami Button by default"), activateKamiButton());
}
function createOpenWithKamiButton() {
  const e = document.createElement("button");
  (e.id = "open-with-kami"),
    (e.disabled = !0),
    (e.onclick = openWithKami),
    (e.ariaLabel = "Make a change to initialise your document"),
    (e.dataset.tooltip = e.ariaLabel);
  const t = document.createElement("img");
  (t.src = "https://web.kamihq.com" + "/web/images/openwith.svg"), t.classList.add("open-with-icon"), e.append(t);
  const o = document.createElement("img");
  (o.src = `${"https://web.kamihq.com"}/web/images/kami_widekerning.svg`), o.classList.add("logo", "logo-large"), e.append(o);
  const n = document.createElement("img");
  return (n.src = `${"https://web.kamihq.com"}/web/images/kami_shorthand.svg`), n.classList.add("logo", "logo-small"), e.append(n), e;
}
function activateKamiButton() {
  const e = document.querySelector("#open-with-kami");
  e ? ((e.ariaLabel = "Open with Kami"), (e.dataset.tooltip = e.ariaLabel), (e.disabled = !1)) : console.warn("Could not find Kami button");
}
function activateKamiButtonAfterDocumentSave() {
  const e = document.querySelector("#docs-save-indicator-badge");
  if (!e) return console.warn("Kami: failed to find document save status, enabling Kami Button by default"), void activateKamiButton();
  new MutationObserver(function (e, t) {
    for (const o of e) "childList" === o.type && o.target.hasChildNodes() && (activateKamiButton(), t.disconnect());
  }).observe(e, { childList: !0 });
}
function openWithKami() {
  const e = googleFileId();
  if (!e) return void console.warn("Kami: no file id");
  let t = { id: e, action: "open", from: from() };
  const o = "google-jamboard" !== t.from ? googleAuthuser() : googleAuthuserForJamboard();
  o && (t.authuser = o);
  const n = new URL("https://web.kamihq.com");
  (n.pathname = "/web/viewer.html"), n.searchParams.set("state", JSON.stringify(t)), window.open(n.toString(), "_blank");
}
function googleFileId() {
  const e = document.location.pathname.match(/\/d\/([^\/]+)/);
  return e && e[1];
}
function googleAuthuser() {
  const e = document.querySelector("#docs-drive-logo");
  if (!e) return;
  const t = e.parentNode;
  return new URL(t.href).searchParams.get("authuser");
}
function googleAuthuserForJamboard() {
  const e = Array.from(document.querySelectorAll("script")).find((e) => e.innerText.startsWith("_docs_flag_initialData"));
  if (!e) return;
  return e.innerText.match(/drive\.google\.com\/u\/(?<authuser>\d)/)?.groups?.authuser;
}
function from() {
  return document.location.href.startsWith("https://docs.google.com/document/")
    ? "google-docs"
    : document.location.href.startsWith("https://docs.google.com/presentation/")
    ? "google-slides"
    : document.location.href.startsWith("https://docs.google.com/spreadsheets/")
    ? "google-sheets"
    : document.location.href.startsWith("https://jamboard.google.com/")
    ? "google-jamboard"
    : void 0;
}
function sleep(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
async function retrieveSettingFromBackgroundPage(e) {
  return new Promise((t) => {
    chrome.runtime.sendMessage(chrome.runtime.id, { action: "retrieve-setting", setting: e }, (e) => {
      t(e.value);
    });
  });
}
onPageLoad();
