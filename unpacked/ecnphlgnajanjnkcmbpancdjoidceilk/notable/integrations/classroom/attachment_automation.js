const PICKER_ORIGIN = "https://drive.google.com";
var viewer_origin = "https://web.kamihq.com",
  messagesToPicker = [],
  messagesToViewer = [],
  observers = {},
  pickerWindow = null,
  kamiViewerWindow = null,
  yourWorkDiv = null,
  progress = null;
function coverPageWithOverlay() {
  let e = document.createElement("div");
  e.classList.add("kami-attachment-overlay");
  let t = document.createElement("div");
  t.classList.add("kami-attachment-overlay-card");
  let s = document.createElement("p");
  s.innerHTML = chrome.i18n.getMessage("KamiIsAttachingYourFile");
  let o = document.createElement("p");
  o.innerHTML = chrome.i18n.getMessage("PleaseKeepThisWindowOpenAndOnTop");
  let i = document.createElement("div");
  i.classList.add("linear-progress");
  let n = document.createElement("div");
  n.classList.add("bar"), n.classList.add("bar1");
  let r = document.createElement("div");
  r.classList.add("bar"),
    r.classList.add("bar2"),
    i.appendChild(n),
    i.appendChild(r),
    t.appendChild(i),
    t.appendChild(s),
    t.appendChild(o),
    e.appendChild(t),
    (applyOverlay = () => {
      document.body.appendChild(e),
        (document.body.style.overflow = "hidden"),
        (window.onscroll = function () {
          window.scrollTo(0, 0), (document.body.style.overflow = "hidden");
        });
    }),
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", applyOverlay) : applyOverlay();
}
function attachDriveFileToAssignment(e) {
  coverPageWithOverlay(),
    (observers.attachButton = new DeadlinedObserver("attachButton", 15e3, function (e) {
      for (mutation of e)
        if (mutation.addedNodes)
          for (node of mutation.addedNodes) {
            let e = node.nextElementSibling;
            if (!e) continue;
            if ("fJ1Vac" !== e.className) continue;
            let t = document.querySelector(".U26fgb.REtOWc");
            if (t)
              return (
                observers.attachButton.conclude(),
                progress.increaseStep(),
                observers.dropdown.observe(document.body, { subtree: !0, attributes: !0 }),
                void t.click()
              );
          }
    })),
    (observers.dropdown = new DeadlinedObserver("dropdown", 5e3, function (e) {
      for (mutation of e) {
        if (!mutation.addedNodes) return;
        let e = document.querySelector(".z80M1.FeRvI");
        if (!e) return;
        return (
          observers.dropdown.conclude(),
          progress.increaseStep(),
          observers.picker.observe(document.body, { childList: !0, subtree: !0 }),
          e.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0, cancelable: !0, view: window })),
          void e.dispatchEvent(new MouseEvent("mouseup", { bubbles: !0, cancelable: !0, view: window }))
        );
      }
    })),
    (observers.picker = new DeadlinedObserver("picker", 15e3, function (t) {
      t.forEach(function (t) {
        if (t.addedNodes)
          for (node of t.addedNodes) {
            if ("IFRAME" !== node.tagName) continue;
            let t = node.attributes.src.textContent;
            if (!t || !/https:\/\/drive\.google\.com\/picker/.test(t)) continue;
            let s = /rpctoken=([a-zA-Z0-9]+?)($|&)/.exec(t),
              o = null;
            if ((s && (o = s[1]), o))
              return (
                (pickerWindow = node.contentWindow),
                observers.picker.conclude(),
                progress.increaseStep(),
                (yourWorkDiv = document.querySelector(".asCVDb.BiaLW")),
                observers.errorCard.observe(document.body, { childList: !0, subtree: !0, attributes: !0 }),
                observers.attachmentItem.observe(yourWorkDiv, { childList: !0, subtree: !0, attributes: !0 }),
                void messagesToPicker.push({ kamiMessage: { type: "command", command: "pick_file", driveFileId: e, rpcToken: s[1] } })
              );
          }
      });
    })),
    (observers.attachmentItem = new DeadlinedObserver("attachmentItem", 2e4, function (t) {
      t.forEach(function (t) {
        if (t.addedNodes)
          for (node of t.addedNodes) {
            if (!node.innerHTML) continue;
            if (!node.innerHTML.includes(e)) continue;
            return (
              observers.attachmentItem.conclude(),
              progress.increaseStep(),
              observers.errorCard.disconnect(),
              void sendMessageToViewer({ kamiMessage: { type: "notification", notificationCode: "attachment_success", fileId: e } })
            );
          }
      });
    })),
    (observers.errorCard = new MutationObserver(function (e) {
      e.forEach(function (e) {
        if (e.addedNodes)
          for (node of e.addedNodes)
            if (node.className && "string" == typeof node.className && node.className.match(/LhKRUe.+JKIkqc/)) {
              observers.errorCard.disconnect(), observers.attachmentItem.conclude();
              let e = null;
              return (
                node.children.length && (innerText = node.children[0].innerText),
                (e = innerText && innerText.length > 1 ? innerText : chrome.i18n.getMessage("UnknownErrorCouldNotGetMessageFromErrorCard")),
                void sendMessageToViewer({ kamiMessage: { type: "notification", notificationCode: "attachment_error", error: innerText } })
              );
            }
      });
    })),
    observers.attachButton.observe(document.body, { childList: !0, subtree: !0 });
}
function sendMessageToViewer(e) {
  kamiViewerWindow ? kamiViewerWindow.postMessage(e, viewer_origin) : messagesToViewer.push(e);
}
function init() {
  let e = [
    "https://local.kamipdf.com",
    "https://test.kamihq.com",
    "https://test1.kamihq.com",
    "https://test2.kamihq.com",
    "https://test3.kamihq.com",
    "https://test4.kamihq.com",
    "https://test5.kamihq.com",
    "https://test6.kamihq.com",
    "https://test7.kami.systems",
    "https://test8.kami.systems",
    "https://test9.kami.systems",
    "https://staging.kamihq.com",
    "https://canary.kamihq.com",
    "https://canary2.kamihq.com",
    "https://web.kamihq.com"
  ];
  window.addEventListener("message", (t) => {
    if (((kamiMessage = t.data.kamiMessage), kamiMessage))
      if (e.includes(t.origin)) {
        for (kamiViewerWindow = t.source; messagesToViewer.length; ) sendMessageToViewer(messagesToViewer.shift());
        "ping" == kamiMessage.type && ((viewer_origin = t.origin), sendMessageToViewer({ kamiMessage: { type: "pong" } }));
      } else if (t.origin == PICKER_ORIGIN && ((kamiMessage = t.data.kamiMessage), "script_ready" == kamiMessage.type))
        for (; messagesToPicker.length; ) pickerWindow.postMessage(messagesToPicker.shift(), PICKER_ORIGIN);
  }),
    (progress = {
      currentStep: 1,
      increaseStep: () => {
        progress.currentStep++,
          sendMessageToViewer({
            kamiMessage: {
              type: "notification",
              notificationCode: "attachment_progress",
              currentStep: progress.currentStep,
              totalSteps: progress.totalSteps
            }
          });
      },
      totalSteps: 5
    });
  let t = new URLSearchParams(window.location.search).get("attachFileId");
  t
    ? attachDriveFileToAssignment(t)
    : sendMessageToViewer({ kamiMessage: { type: "notification", notificationCode: "no_attach_id_received" } });
}
class DeadlinedObserver extends MutationObserver {
  constructor(e, t, s) {
    super(s), (this.name = e), (this.timeoutMilliseconds = t);
  }
  observe(...e) {
    super.observe(...e),
      (this.timeout = setTimeout(() => {
        sendMessageToViewer({
          kamiMessage: { type: "notification", notificationCode: "attachment_error", error: `[${this.name}] observer timed out` }
        });
      }, this.timeoutMilliseconds));
  }
  conclude() {
    super.disconnect(), clearTimeout(this.timeout);
  }
}
init();
