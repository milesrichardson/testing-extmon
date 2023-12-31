let timeout_ret,
  KAMI_IFRAME_FAILED = !1,
  grade_with_kami_enabled = "true" === localStorage.getItem("classroom_grade_with_kami_enabled"),
  resizeObserver = new ResizeObserver(function (e) {
    let t = document.querySelector("#kami-iframe");
    for (let i of e) {
      let e = i.contentRect.width,
        r = i.contentRect.height;
      e && r && ((t.style.width = e + "px"), (t.style.height = r + "px"));
    }
  });
function default_to_setting_src(e) {
  (KAMI_IFRAME_FAILED = !0), (e.src = getKamiURL());
}
function receive_message(e) {
  e.data &&
    "kamiweb-document-loaded" === e.data.from &&
    e.origin === "https://web.kamihq.com" &&
    (e.data.success
      ? timeout_ret && clearTimeout(timeout_ret)
      : (clearTimeout(timeout_ret), default_to_setting_src(document.getElementById("material-iframe"))));
}
function mountKamiIframe() {
  let e = document.createElement("iframe"),
    t = getPreviewIframe();
  return (
    e.setAttribute(
      "allow",
      "accelerometer *; ambient-light-sensor *; autoplay *; camera *;     encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *;     microphone *; midi *; payment *; picture-in-picture *; speaker *; usb *; vr *;     clipboard-read *; clipboard-write *; display-capture *;"
    ),
    e.setAttribute("id", "kami-iframe"),
    e.removeAttribute("style"),
    (e.style.position = "absolute"),
    (e.style.borderWidth = "0"),
    (e.style.width = t.offsetWidth + "px"),
    (e.style.height = t.offsetHeight + "px"),
    (e.style.top = t.offsetTop + "px"),
    (e.src = getKamiURL()),
    document.querySelector("c-wiz").appendChild(e),
    e
  );
}
function isDisplayingPDF() {
  let e = getPreviewIframe();
  return e && /\/file\/d\/([A-z0-9-_]+)\/grading/.test(e.src);
}
function getKamiIframe() {
  return document.getElementById("kami-iframe");
}
function getPreviewIframe() {
  return document.getElementById("material-iframe");
}
function getAuthUserFromURL(e) {
  let t = null;
  try {
    t = new URL(e);
  } catch (e) {
    return null;
  }
  const i = t.searchParams.get("authuser");
  if (i) return i;
  const r = /\/u\/(\d+)/.exec(t.pathname);
  return r ? r[1] : null;
}
function getJSONData() {
  const e = getPreviewIframe(),
    t = getAuthUserFromURL(window.location.href) || getAuthUserFromURL(e.src);
  let i = { ids: [e.src.match(/\/d\/([A-z0-9-_]+)\/grading/)[1]], from: "classroomgradingview" };
  return t && (i.authuser = t), i;
}
function getKamiURL() {
  const e = new URL("https://web.kamihq.com");
  return (e.pathname = "/web/viewer.html"), e.searchParams.set("state", JSON.stringify(getJSONData())), e.toString();
}
function checkboxListener(e) {
  let t = e.target;
  (grade_with_kami_enabled = t.checked),
    t.removeEventListener("change", checkboxListener),
    localStorage.setItem("classroom_grade_with_kami_enabled", t.checked),
    render();
}
function renderGradeWithKamiButton() {
  const e = document.querySelector(".SFsys");
  if (e) {
    let t = document.querySelector("#grade_with_kami_wrapper");
    if (t) isDisplayingPDF() ? (t.style.display = "flex") : (t.style.display = "none");
    else {
      const i = `<div style="display: ${
          isDisplayingPDF() ? "flex" : "none"
        }; padding: 0.5em 0 0;" class="D4ueke" id="grade_with_kami_wrapper">\n        <label>${chrome.i18n.getMessage(
          "gradeWithKami"
        )}\n          <input type="checkbox" name="grade_with_kami" id="grade_with_kami_checkbox" ${
          grade_with_kami_enabled ? "checked" : ""
        }>\n          </input>\n        </label>\n      </div>`,
        r = document.createElement("div");
      (r.innerHTML = i), (t = r.children[0]), r.removeChild(t), e.parentNode.insertBefore(t, e.nextSibling);
    }
    document.querySelector("#grade_with_kami_checkbox").addEventListener("change", checkboxListener);
  }
}
function renderKamiIframe() {
  let e = getJSONData(),
    t = getKamiIframe(),
    i = getPreviewIframe();
  i &&
    (t
      ? KAMI_IFRAME_FAILED
        ? (t.src = getKamiURL())
        : ((t.style.display = "block"),
          t.contentWindow.postMessage(e, "https://web.kamihq.com"),
          (timeout_ret = window.setTimeout(default_to_setting_src.bind(null, t), 4e3)))
      : (t = mountKamiIframe()),
    (i.style.visibility = "hidden"),
    (t.style.visibility = "visible"),
    resizeObserver.observe(i));
}
function renderPreviewIframe() {
  let e = getKamiIframe();
  e || (e = mountKamiIframe()), (getPreviewIframe().style.visibility = "visible"), (e.style.visibility = "hidden");
}
function renderOpenWithKami() {
  let e = document.querySelectorAll(".N9wOvf.EruE3e") || document.querySelectorAll('[aria-label$="” in new window"]');
  for (const t of e) {
    if (t.parentNode.querySelector("#open-with-kami-container")) return;
    let e = t.cloneNode(!0);
    (e.id = "open-with-kami-container"),
      e.addEventListener("click", function (e) {
        e.stopImmediatePropagation(), e.preventDefault(), window.open(getKamiURL(), "_blank");
      }),
      e.addEventListener("mousedown", function (e) {
        e.stopImmediatePropagation(), e.preventDefault();
      });
    let i = e.querySelector("span");
    (i.innerText = ""), (i.classList = "kami-create-assignment-new-icon"), t.parentNode.insertBefore(e, t.nextSibling);
  }
}
function render() {
  clearTimeout(timeout_ret),
    resizeObserver.disconnect(),
    renderGradeWithKamiButton(),
    renderOpenWithKami(),
    isDisplayingPDF() && grade_with_kami_enabled ? renderKamiIframe() : renderPreviewIframe();
}
window.addEventListener("message", receive_message);
let documentViewerAddedListener = new MutationObserver(function (e) {
  e.forEach(function (e) {
    if (e.addedNodes) {
      for (let t = 0; t < e.removedNodes.length; t++) {
        const i = e.removedNodes[t];
        if (i.nodeType === Node.ELEMENT_NODE && i.querySelector("#grade_with_kami_checkbox")) {
          i.querySelector("#grade_with_kami_checkbox").removeEventListener("change", checkboxListener), renderGradeWithKamiButton();
        }
        ("open-with-kami-container" === i.id || (i.nodeType === Node.ELEMENT_NODE && i.querySelector("#open-with-kami-container"))) &&
          renderOpenWithKami(),
          ("kami-iframe" === i.id || (i.nodeType === Node.ELEMENT_NODE && i.querySelector("#kami-iframe"))) &&
            (isDisplayingPDF() && grade_with_kami_enabled ? renderKamiIframe() : renderPreviewIframe());
      }
      for (var t = 0; t < e.addedNodes.length; t++) {
        var i = e.addedNodes[t];
        if ("material-iframe" === i.id || (i.nodeType === Node.ELEMENT_NODE && i.querySelector("#material-iframe"))) render();
        else if (i.classList && "vVGAgd uSNagf" === i.classList.value) {
          const e = getKamiIframe();
          e && (e.style.visibility = "hidden");
        }
      }
    }
  });
});
documentViewerAddedListener.observe(document.body, { childList: !0, subtree: !0, attributes: !1, characterData: !1 }),
  getPreviewIframe() && render();
