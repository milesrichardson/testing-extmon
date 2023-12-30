async function injectButton(e) {
  const t = document.querySelector('[role="dialog"] [role="toolbar"]');
  if (!t) return;
  const n = e.href,
    o = "kami-drive-viewer-toolstrip-mid-panel",
    i = t.querySelectorAll(`div.${o}`);
  if (1 === i.length && i[0].getAttribute("kami-to-url") === n) return;
  i.forEach((e) => e.remove());
  const a = document.createElement("div");
  a.classList.add(o), a.setAttribute("kami-to-url", n);
  if (((t.children[0] || t).appendChild(a), utils.isTeacher())) {
    const t = e.querySelector(".cSyPgb.WInaFd.QRiHXd");
    if (!(t && t.textContent.toLocaleLowerCase().includes("kami"))) return;
    const o = document.createElement("div");
    o.innerHTML = `<div class="kami-drive-viewer-toolstrip-open-and-openwith"><a class="kami-drive-viewer-toolstrip-open" role="button" data-tooltip-unhoverable="true" data-tooltip-delay="500" data-action="UpdateWork" data-tooltip-class="drive-viewer-jfk-tooltip" data-tooltip-align="b,c" data-tooltip-offset="-6" aria-hidden="false" aria-label="${chrome.i18n.getMessage(
      "UpdateWork"
    )}" style="user-select: none;" tabindex="0" data-tooltip="${chrome.i18n.getMessage(
      "UpdateWork"
    )}"><div class="kami-drive-viewer-open-app-icon"></div><div class="kami-drive-viewer-open-label">${chrome.i18n.getMessage(
      "UpdateWork"
    )}</div></a></div>`;
    const i = await createUpdateWorkLinkClickHandler(n);
    o.addEventListener("click", i), a.prepend(o);
  } else {
    const e = document.createElement("div");
    e.innerHTML = `<div class="kami-drive-viewer-toolstrip-open-and-openwith"><a class="kami-drive-viewer-toolstrip-open" role="button" data-tooltip-unhoverable="true" data-tooltip-delay="500" data-action="OpenWithKami"  data-tooltip-class="drive-viewer-jfk-tooltip" data-tooltip-align="b,c" data-tooltip-offset="-6" aria-hidden="false" aria-label="${chrome.i18n.getMessage(
      "OpenWithKami"
    )}" style="user-select: none;" tabindex="0" data-tooltip="${chrome.i18n.getMessage(
      "OpenWithKami"
    )}"><div class="kami-drive-viewer-open-app-icon"></div><div class="kami-drive-viewer-open-label">${chrome.i18n.getMessage(
      "OpenWithKami"
    )}</div></a></div>`;
    const t = await createOpenWithKamiClickHandler(n);
    e.addEventListener("click", t), a.appendChild(e);
  }
  const r = t.querySelector(".ndfHFb-c4YZDc-Wrql6b-AeOLfc-b0t70b"),
    s = document.body.offsetWidth - (r && r.getBoundingClientRect().left);
  a.style.margin = `4px ${s}px 0px auto`;
}
const handleOpenWithKamiClick = function () {
  wrapWindowOpen();
  var e = document.querySelector(".ndfHFb-c4YZDc-z5C9Gb-LgbsSe"),
    t = document.createEvent("MouseEvents");
  t.initEvent("mousedown", !0, !0), e.dispatchEvent(t);
  const n = document.querySelector(
    ".ndfHFb-c4YZDc-xl07Ob.ndfHFb-c4YZDc-xl07Ob-BvBYQ.ndfHFb-c4YZDc-s2gQvd.ndfHFb-c4YZDc-i5oIFb.ndfHFb-c4YZDc-z5C9Gb-xl07Ob"
  );
  n && (n.style.visibility = "hidden"),
    setTimeout(function () {
      var e = document.querySelector(".ndfHFb-c4YZDc-j7LFlb-Bz112c.ndfHFb-c4YZDc-GSQQnc-LgbsSe").parentElement,
        t = e.getBoundingClientRect(),
        n = new MouseEvent("mouseup", {
          view: window,
          bubbles: !0,
          cancelable: !0,
          clientX: t.left + 5,
          clientY: t.top + 5,
          x: t.left + 5,
          y: t.top + 5
        });
      e.dispatchEvent(n);
    }, 10);
};
var injectAnnotateWithKamiInterceptor = function () {
  const e = document.querySelector(".ndfHFb-c4YZDc-Wrql6b-qMHh7d-SmKAyb");
  if (e) {
    if (e.classList.contains("handler-added")) return;
    e.classList.add("handler-added"),
      e.addEventListener("click", function () {
        setTimeout(function () {
          const e = document.querySelectorAll(".ndfHFb-c4YZDc-j7LFlb-bN97Pc"),
            t = Array.from(e).find((e) => "Annotate with Kami" === e.textContent);
          t.classList.contains("intercepted") ||
            (t.classList.add("intercepted"),
            t.addEventListener("mouseup", function (e) {
              const t = document.querySelector(".kami-drive-viewer-toolstrip-open");
              t && (e.stopImmediatePropagation(), t.click());
            }));
        }, 0);
      });
  }
};
function googleStateFromOpenUrl(e, t) {
  let n,
    o,
    i = new URL(e);
  if ((i.searchParams.get("id") && i.searchParams.get("id").match(/[A-z0-9-_]+/) && (n = i.searchParams.get("id")), !n)) {
    const e = i.pathname.match(/\/d\/([A-z0-9-_]+)\/(view|edit)/);
    e && (n = e[1]);
  }
  if (!n) return;
  if ((i.searchParams.get("authuser") && i.searchParams.get("authuser").match(/\d+/) && (o = i.searchParams.get("authuser")), !o)) {
    const e = window.location.href.match(/\/u\/(\d+)\//);
    e && (o = e[1]);
  }
  const a = { ids: [n], from: t };
  o && (a.authuser = o);
  const r = window.location.href.match(/\/c\/.*?\/a\/.*?\//);
  return r && (a.courseworkAlternateLink = r[0]), a;
}
var wrapWindowOpenScript = function () {
    /\{\s*\[native code\]\s*\}/.test("" + window.open) && (window.originalOpen = window.open),
      (window.open = function () {
        window.open = window.originalOpen;
        const e = googleStateFromOpenUrl(arguments[0], "classroomopenext");
        e
          ? ((kamiURL = "https://web.kamihq.com" + "/web/viewer.html?state=" + encodeURIComponent(JSON.stringify(e))),
            window.open(kamiURL, "_blank"))
          : window.open.apply(this, arguments);
      });
    var e = document.currentScript;
    e && null !== e.parentNode && e.parentNode.removeChild(e);
  },
  wrapWindowOpen = function () {
    var e = document.head || document.documentElement;
    if (null === e) return !1;
    var t = document.createElement("script");
    t.textContent = googleStateFromOpenUrl.toString() + ";(" + wrapWindowOpenScript.toString() + ")();";
    try {
      e.appendChild(t);
    } catch (e) {}
  },
  kamiCreateAssignmentButtonListener = function (e) {
    console.log(e),
      document.body.click(),
      window.scroll(0, 0),
      (kamiURL = `${"https://web.kamihq.com"}/web/viewer.html?open_dialog=create_assignment&seamless_dialog=true&parent_origin=${encodeURIComponent(
        window.location.origin
      )}`);
    var t = UrlMatcher.extractClassroomAlternateId(window.location.href);
    t && (kamiURL += "&class_alternate_id=" + t);
    var n = `<iframe src="${kamiURL}" seamless="" class="kami-create-assignment-iframe"></iframe>`;
    const o = document.createElement("div");
    o.innerHTML = n;
    var i = o.children[0];
    o.removeChild(i);
    o.innerHTML = '<div class="kami-create-assignment-loader"><div class="lds-dual-ring"></div></div>';
    var a = o.children[0];
    o.removeChild(a);
    var r = (e) => {
      if (
        e.data &&
        "kami" === e.data.type &&
        ("assignment_dialog_opened" === e.data.event && document.body.removeChild(a), "assignment_dialog_closed" === e.data.event)
      ) {
        window.removeEventListener("message", r), (document.body.style.overflow = null), document.body.removeChild(i);
        var t = document.body.querySelector(".kami-create-assignment-loader");
        t && t.remove();
      }
    };
    window.addEventListener("message", r),
      (document.body.style.overflow = "hidden"),
      document.body.appendChild(i),
      document.body.appendChild(a);
  },
  createButtonObserver = new MutationObserver(function (e) {
    e.forEach(function (e) {
      if (e.addedNodes)
        for (var t = 0; t < e.addedNodes.length; t++) {
          var n = e.addedNodes[t];
          n && n.classList && n.classList.contains("Y5vSD") && n.classList.contains("SRX5Hd") && injectClassroomKamiAssignmentButton();
        }
    });
  }),
  injectClassroomKamiAssignmentButton = function () {
    let e = document.querySelectorAll('.Y5vSD.SRX5Hd li[role="menuitem"]');
    e.length > 0
      ? e.forEach(function (e) {
          if (!e.parentElement.parentElement.querySelector(".kami-create-assignment-button")) {
            kami_button_html = `<li class="VfPpkd-StrnGf-rymPhb-ibnC6b kami-create-assignment-button" role="menuitem" tabindex="-1" jsaction="mouseenter:SKyDAe; mouseleave:xq3APb;" jsname="j7LFlb">\n          <span class="VfPpkd-StrnGf-rymPhb-pZXsl"></span>\n          <span class=" VfPpkd-StrnGf-rymPhb-f7MjDc">\n            <span class="kami-create-assignment-new-icon" aria-hidden="true"></span>\n          </span>\n          <span class="VfPpkd-StrnGf-rymPhb-b9t22c">\n              ${chrome.i18n.getMessage(
              "KamiAssignment"
            )}\n          </span>\n          </li>`;
            const t = htmlStringToElement(kami_button_html),
              n = e.closest("ul").querySelectorAll("li")[1];
            e.parentElement.insertBefore(t, n), t.addEventListener("click", kamiCreateAssignmentButtonListener);
          }
        })
      : createButtonObserver.observe(document.body, { childList: !0, subtree: !0, attributes: !1, characterData: !1 });
  };
function htmlStringToElement(e) {
  const t = document.createElement("div");
  if (((t.innerHTML = e), 1 !== t.children.length)) throw new Error("htmlStringToElement must have exactly 1 root element");
  const n = t.children[0];
  return t.removeChild(n), n;
}
function openUpdateWork(e) {
  var t = e.split("/");
  const n = "u" === t[3] ? t[4] : 0,
    o = "u" === t[3] ? t[6] : t[4],
    i = "u" === t[3] ? t[8] : t[6];
  (kamiURL =
    "https://web.kamihq.com" +
    "/web/viewer.html?open_formative_assessment=true&alternative_course_id=" +
    o +
    "&alternate_coursework_id=" +
    i +
    "&authuser=" +
    n),
    window.open(kamiURL, "_blank");
}
injectClassroomKamiAssignmentButton(),
  document.body.addEventListener("click", function (e) {
    var t = e.target.closest("a");
    if (t) {
      var n = t.href;
      if (UrlMatcher.isGoogleDriveFileViewer(n)) {
        var o = new MutationObserver(async function (e) {
          if (!e.some((e) => e.addedNodes)) return;
          document.querySelector('[role="dialog"] [role="toolbar"]') &&
            (await injectButton(t), injectAnnotateWithKamiInterceptor(), o.disconnect());
        });
        o.observe(document.body, { childList: !0, subtree: !0, attributes: !1, characterData: !1 });
      }
      UrlMatcher.isClassroomCoursePage(n) &&
        setTimeout(function () {
          injectClassroomKamiAssignmentButton();
        }, 150);
    }
  });
let openWithKamiChecked = !1,
  kamiInstructionsChecked = !1;
function getUpdateWorkButton(e) {
  const t = document.createElement("div");
  t.classList.add("kami-update-work-button-wrapper", "kami-assignment-dropdown-button");
  const n = document.createElement("div");
  n.classList.add("kami-update-work-button"),
    (n.innerHTML = `<span class='kami-drive-viewer-open-app-icon kami-button-icon'></span><span class='kami-update-work-span'>${chrome.i18n.getMessage(
      "UpdateWork"
    )}</span>`);
  const o = document.createElement("div");
  o.classList.add("kami-update-work-popup-wrapper"), (o.innerHTML = "<div class='kami-popup-triangle'/>");
  const i = document.createElement("div");
  i.classList.add("kami-update-work-popup"),
    (i.innerHTML = `<h1 class='kami-popup-header'>${chrome.i18n.getMessage(
      "UpdateWithKami"
    )}</h1><p class='kami-popup-message'>${chrome.i18n.getMessage("MakeEditsToAssignedWorkAndPublishChangesToAllStudentsCopies")}</p>`);
  const a = document.createElement("div");
  a.classList.add("kami-popup-footer");
  const r = document.createElement("div");
  r.classList.add("kami-got-it-button"), (r.innerHTML = chrome.i18n.getMessage("GotIt"));
  let s = !1;
  r.onclick = () => {
    (s = !0), (o.style.visibility = "hidden"), (o.style.opacity = 0);
  };
  const c = document.createElement("a");
  return (
    (c.innerHTML = chrome.i18n.getMessage("LearnMore")),
    (c.href = "https://help.kamiapp.com/en/articles/6452599-how-to-use-kami-s-push-changes-feature-with-google-classroom"),
    (c.target = "_blank"),
    c.classList.add("kami-learn-more-button"),
    a.append(r, c),
    i.append(a),
    o.append(i),
    (n.onclick = () => {
      openUpdateWork(e);
    }),
    (n.onmouseover = () => {
      s || ((o.style.visibility = "visible"), (o.style.opacity = "1"));
    }),
    t.append(n, o),
    (t.onmouseleave = () => {
      (o.style.visibility = "hidden"), (o.style.opacity = "0");
    }),
    t
  );
}
function attachUpdateWorkAssignmentDropdown() {
  const e = document.querySelectorAll("div.S9CVKb.a2rP");
  for (var t = 0; t < e.length; t++) {
    if (!e[t].querySelector("div.kami-update-work-button")) {
      const n = e[t].querySelector("div.O9YpHb.QRiHXd");
      if (n && n.querySelector) {
        const o = n.querySelector("a.WpHeLc.VfPpkd-mRLv6.VfPpkd-RLmnJb");
        if (o) {
          const i = n.querySelector("div.VVwgJb");
          if (!i || i.getAttribute("kami-update-work-processed")) continue;
          i.setAttribute("kami-update-work-processed", !0), (i.style.columnGap = "15px");
          e[t].parentNode.parentNode.style.overflow = "visible";
          const a = getUpdateWorkButton(o.href);
          (a.style.visibility = "hidden"), i.prepend(a);
        }
      }
    }
  }
}
function attachUpdateWorkAssignmentPage() {
  const e = document.querySelectorAll("div.EE538");
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (!n.querySelector("div.kami-update-work-button")) {
      const e = n.querySelector("div.MlZb9c.xLFtvb");
      if (!e || !e.querySelectorAll) return;
      const t = e.querySelectorAll("div.t2wIBc");
      for (let e in t)
        if (t[e].querySelector) {
          const o = n.querySelector("div.N5dSp");
          if (!o || !o.querySelector || o.getAttribute("kami-update-work-processed")) return;
          o.setAttribute("kami-update-work-processed", !0);
          if (!o.querySelector("div.kami-update-work-button")) {
            const n = t[e].querySelector("div.dDKhVc-Wvd9Cc.YVvGBb");
            if (n && n.innerHTML.substring("kami") && o && o.querySelector) {
              const e = o.querySelector("div.I0naMd"),
                t = window.location.href;
              if (e) {
                const n = getUpdateWorkButton(t);
                o.insertBefore(n, e);
              }
            }
          }
        }
    }
  }
}
const classworkObserver = new MutationObserver(function (e) {
  if (UrlMatcher && utils.isTeacher())
    for (const t of e)
      if (t.addedNodes) {
        if (!UrlMatcher.isClassroomCoursePage(window.location.href)) return;
        attachUpdateWorkAssignmentPage();
      }
});
window.addEventListener("message", (e) => {
  if ("https://classroom.google.com" !== e.origin) return;
  const { from_kami_detector: t, is_kami_assignment: n, grader_header_id: o } = e.data;
  if (!t) return;
  const i = document.getElementById(o),
    a = i && i.querySelector("div.kami-update-work-button-wrapper");
  n && a && (a.style.visibility = "visible");
}),
  classworkObserver.observe(document.body, { childList: !0, subtree: !0 });
