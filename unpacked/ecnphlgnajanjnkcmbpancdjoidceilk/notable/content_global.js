function injectScript(e, t) {
  var n = document.getElementsByTagName(t)[0],
    o = document.createElement("script");
  o.setAttribute("type", "text/javascript"), o.setAttribute("src", e), n.appendChild(o);
}
function injectStyle(e, t) {
  var n = document.getElementsByTagName(t)[0],
    o = document.createElement("link");
  o.setAttribute("rel", "stylesheet"), o.setAttribute("href", e), n.appendChild(o);
}
function injectMeta(e, t) {
  const n = document.getElementsByTagName("head")[0],
    o = document.createElement("meta");
  o.setAttribute(`data-${e}`, t), o.setAttribute("id", e), n.appendChild(o);
}
function externalToolLinks(e) {
  return [...e.querySelectorAll(".gen-post-link")].reduce((e, t) => {
    const n = t.href.match(/\/external_tool\/(\d+)\/launch$/);
    return n && e.push({ a: t, externalToolLinkId: n[1] }), e;
  }, []);
}
function openEditDialogForAssignmentName(e, t, n) {
  for (const o of externalToolLinks(e)) {
    if (!n.includes(o.externalToolLinkId) && o.a.innerText.trim() === t) {
      return o.a.closest("tr").querySelector(".action-edit a").click(), !0;
    }
  }
  return !1;
}
function editAfterAssignmentCreated(e) {
  const t = e.assignment_name.trim();
  if (openEditDialogForAssignmentName(document.body, t, e.old_external_tool_link_ids)) return;
  const n = new MutationObserver((i) => {
    for (const s of i)
      for (const i of s.addedNodes) {
        if (!(i instanceof HTMLElement)) continue;
        if (openEditDialogForAssignmentName(i, t, e.old_external_tool_link_ids)) return n.disconnect(), void window.clearTimeout(o);
      }
  });
  n.observe(document.body, { childList: !0, subtree: !0 });
  const o = window.setTimeout(() => {
    n.disconnect(), trackEvent("Schoology LTI Assignment Creation Error", e);
  }, 1e4);
}
async function trackEvent(e, t) {
  const n = crypto.randomUUID(),
    { user_id: o, ...i } = t,
    s = { uuid: n, name: e, user_id: o, value: { ...i, app_name: "Schoology" } };
  await fetch("https://web.kamihq.com/api" + "/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(s)
  });
}
if (isSchoology()) {
  injectScript(chrome.extension.getURL("notable/integrations/schoology/page_script.js"), "head"),
    injectStyle(chrome.extension.getURL("notable/integrations/schoology/styles.css"), "head"),
    injectMeta("tick-url", chrome.runtime.getURL("content/images/tick.svg")),
    checkIfCreateAssignmentButtonHidden().then((e) => {
      injectMeta("kami-hide-create-assignment-button", !0 === e);
    });
  try {
    chrome.storage.sync.get("notable.user", function (e) {
      var t = e["notable.user"];
      if (t) {
        var n = document.getElementsByTagName("head")[0],
          o = document.createElement("meta");
        o.setAttribute("id", "kamidata"), o.setAttribute("data-kami-user-id", t.id), n.appendChild(o);
      }
    });
  } catch (e) {}
  window.addEventListener("message", function (e) {
    "kami-assignment-create" === e.data.event_name &&
      ((e.data.old_external_tool_link_ids = externalToolLinks(document.body).map((e) => e.externalToolLinkId)),
      sessionStorage.setItem("kami-assignment-created", JSON.stringify(e.data)));
  });
  let e = sessionStorage.getItem("kami-assignment-created");
  if (e) {
    sessionStorage.removeItem("kami-assignment-created");
    try {
      let t = JSON.parse(e);
      t.timestamp > Date.now() - 1e4 && editAfterAssignmentCreated(t);
    } catch (e) {
      console.log("Error from content script: ", e);
    }
  }
}
if (
  document.querySelector('link[href="https://asset-cdn.schoology.com/sites/all/modules/schoology_core/s_course/s_course_unified_ui.css"')
) {
  const e = window.location.origin,
    t = "https://web.kamihq.com",
    n = () => document.location.pathname.match(/^\/assignment\/([0-9]+)/);
  chrome.runtime.onMessage.addListener(function (o) {
    if (n()) {
      const s = n()[1];
      if (o.file_link) {
        const n = o.file_link,
          r = o.filename,
          a = document.querySelector("._17Z60").innerText,
          c = n.match(/\/attachment\/([0-9]+)\/source/);
        if (!c) return;
        const l = c[1];
        var i = { schoology: { assignment_id: s, assignment_name: a, attachment_id: l, schoology_origin: e } };
        const m = "schoology-" + s + "-attachment-" + l,
          d = new URL(n),
          u = new URL(`${t}/web/viewer.html`);
        u.searchParams.set("file", d.toString()),
          u.searchParams.set("individual_copy_key", m),
          u.searchParams.set("source", "schoology"),
          u.searchParams.set("integration_data", JSON.stringify(i)),
          u.searchParams.set("filename", r),
          u.searchParams.set("referer", document.location.href),
          window.open(u.toString(), "_blank");
      } else o.redirectUrl && window.location.replace(o.redirectUrl);
    }
  });
}
async function checkIfCreateAssignmentButtonHidden() {
  return (
    "true" ===
    (await Promise.race([
      sleep(3e3).then(() => "timeout"),
      retrieveSettingFromBackgroundPage("hideSchoologyExtensionCreateAssignmentButton")
    ]))
  );
}
async function sleep(e) {
  return new Promise(function (t) {
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
function isSchoology() {
  return (
    document.querySelector('link[href="/sites/all/themes/schoology_theme/print.css"]') ||
    document.querySelector('link[href="/sites/all/themes/schoology_theme/favicon.ico"]') ||
    window.location.origin.match(/^https?:\/\/\S+\.schoology\.com$/)
  );
}
("https://classroom.google.com" === window.location.origin
  ? "google_classroom"
  : isSchoology()
  ? "schoology"
  : window.location.origin.endsWith(".instructure.com")
  ? "canvas"
  : "https://teams.microsoft.com" === window.location.origin
  ? "microsoft_teams"
  : void 0) &&
  (function () {
    const e = document.createElement("script");
    (e.dataset.trials = "DisableThirdPartyStoragePartitioning"),
      (e.src = `${"https://web.kamihq.com"}/web/origin_trials.js`),
      document.head.append(e);
  })();
