const generatePerPageGraderButton = function (e, t) {
    e.setAttribute("kami-processed", !0);
    const r = document.createElement("div");
    (r.id = t), r.classList.add("kami-per-page-grader-container", "kami-assignment-dropdown-button"), (r.style.visibility = "hidden");
    const a = document.createElement("a");
    return (
      a.classList.add("kami-per-page-grader-link"),
      (a.innerHTML = '<span class="kami-drive-viewer-open-app-icon kami-button-icon"></span><span>Class View</span>'),
      (a.href = "javascript:void(0)"),
      r.appendChild(a),
      r
    );
  },
  attachPerPageGraderButtonGCSubmission = function (e, t) {
    const r = generatePerPageGraderButton(e, t);
    e.appendChild(r);
  },
  attachPerPageGraderButtonGCClasswork = function (e, t) {
    const r = generatePerPageGraderButton(e, t),
      a = e.querySelector("div.VVwgJb");
    a ? a.prepend(r) : e.appendChild(r);
  },
  attachPerPageGraderButtonGCGrader = function (e, t) {
    const r = generatePerPageGraderButton(e, t),
      a = e.lastChild;
    r.classList.add("kami-gc-grader"), e.insertBefore(r, a);
  },
  buildGradeByPageUrl = function (e, t, r, a, n) {
    const o = new URL(`${"https://web.kamihq.com"}/web/viewer.html`),
      i = o.searchParams;
    return (
      i.set("ppg_state", "search"),
      i.set("alternate_course_id", e),
      i.set("alternate_course_work_id", t),
      i.set("authuser", r),
      a && i.set("course_id", a),
      n && i.set("course_work_id", n),
      o.toString()
    );
  },
  shouldMountDetailsIframe = (e) => {
    const t = e(window.location.href);
    if (!t) return !1;
    const [r, a, n] = t,
      o = `https://classroom.google.com/u/${n}/c/${r}/a/${a}/details`;
    return ![...(document.getElementsByTagName("iframe") || [])].some(
      (e) => e.getAttribute("data-kami-assignment-detector") && e.src === o
    );
  },
  mountDetailsIframe = function (e, t) {
    const r = t(window.location.href);
    if (!r) return;
    const [a, n, o] = r;
    mountIframe(e, a, n, o, "");
  },
  mountIframe = function (e, t, r, a, n) {
    const o = `kami-loading-spin-${Math.floor(1e3 * Math.random())}-${new Date().getTime()}`,
      i = document.createElement("iframe");
    i.setAttribute("data-kami-assignment-detector", !0),
      i.setAttribute("data-kami-grader-container-id", e),
      i.setAttribute("data-grader-header-id", n),
      i.setAttribute("data-kami-assignment-detector-loading-spin-id", o),
      i.setAttribute("data-kami-alternate-course-id", t),
      i.setAttribute("data-kami-alternate-course-work-id", r),
      i.setAttribute("data-kami-auth-user", a),
      (i.src = `https://classroom.google.com/u/${a}/c/${t}/a/${r}/details`),
      (i.style.display = "none"),
      document.body.appendChild(i);
    const d = document.createElement("div");
    (d.id = o), d.classList.add("kami-per-page-grader-loading-spin");
    const s = document.createElement("span");
    (s.textContent = chrome.i18n.getMessage("CheckingAssignmentType")),
      s.classList.add("text"),
      d.appendChild(s),
      document.body.appendChild(d);
  },
  findCourseIdInIframe = function (e) {
    const t = window.parent.document.querySelector(`[href*="/c/${e}"][data-id]`);
    return t ? t.getAttribute("data-id") : void 0;
  },
  findCourseWorkIdInIframe = function () {
    const e = window.parent.document.querySelector(".I0naMd") || document.querySelector(".I0naMd");
    return e && e.getAttribute("data-stream-item-id");
  },
  attachInCourseworkPage = function () {
    document.querySelectorAll(".O9YpHb.QRiHXd").forEach((e) => {
      if (e.querySelector(".kami-per-page-grader-container") || e.getAttribute("kami-processed")) return;
      const t = e.children[0],
        r = t && t.getAttribute("data-focus-id");
      if (!(r && r.replace(new RegExp("-view$"), ""))) return;
      const a = t.querySelector(".WpHeLc.VfPpkd-mRLv6.VfPpkd-RLmnJb"),
        n = a && a.href,
        o = n && UrlMatcher.extractDataFromAssignmentPage(n);
      if (!o) return;
      const [i, d, s] = o;
      if (!shouldMountDetailsIframe(i)) return;
      const c = `grader-header-${Math.floor(1e3 * Math.random())}-${new Date().getTime()}`;
      e.id = c;
      const u = `kami-button-${Math.floor(1e3 * Math.random())}-${new Date().getTime()}`;
      attachPerPageGraderButtonGCClasswork(e, u), mountIframe(u, i, d, s, c);
    });
  };
(observers.customGrader = new MutationObserver(function (e) {
  if (!utils.isTeacher()) return;
  if (window.location.href.includes("details") && window.self !== window.top) {
    if (!(window.frameElement && window.frameElement.getAttribute("data-kami-assignment-detector"))) return;
    for (const t of e) {
      if (!t.addedNodes) return;
      const e = findCourseWorkIdInIframe(),
        r = document.querySelector(".cSyPgb.WInaFd.QRiHXd");
      if (e && r) {
        const t = r.textContent.toLocaleLowerCase().includes("kami"),
          a = window.frameElement.getAttribute("data-kami-grader-container-id"),
          n = window.frameElement.getAttribute("data-grader-header-id"),
          o = window.frameElement.getAttribute("data-kami-assignment-detector-loading-spin-id"),
          i = window.frameElement.getAttribute("data-kami-alternate-course-id"),
          d = window.frameElement.getAttribute("data-kami-alternate-course-work-id");
        window.parent.postMessage({
          from_kami_detector: !0,
          is_kami_assignment: t,
          grader_container_id: a,
          loading_spin_id: o,
          alternate_course_id: i,
          alternate_course_work_id: d,
          auth_user: window.frameElement.getAttribute("data-kami-auth-user"),
          course_id: findCourseIdInIframe(i),
          course_work_id: e,
          grader_header_id: n
        }),
          observers.customGrader.disconnect();
      }
      return;
    }
  } else if (window.location.href.includes("submissions")) {
    if (!e.some((e) => e.addedNodes)) return;
    document.querySelectorAll(".Y5vSD.TIunU.xPSjRb").forEach((e) => {
      if (!e || e.querySelector(".kami-per-page-grader-container") || !shouldMountDetailsIframe(UrlMatcher.extractDataFromAssignmentPage))
        return;
      const t = `kami-button-${Math.floor(1e3 * Math.random())}-${new Date().getTime()}`;
      attachPerPageGraderButtonGCSubmission(e, t), mountDetailsIframe(t, UrlMatcher.extractDataFromAssignmentPage);
    });
  } else if (UrlMatcher.isClassroomGrader(window.location.href)) {
    if (!e.some((e) => e.addedNodes)) return;
    const t = document.querySelector(".dnTXKd");
    if (
      !t ||
      t.querySelector(".kami-per-page-grader-container") ||
      t.getAttribute("kami-processed") ||
      !shouldMountDetailsIframe(UrlMatcher.extraDataFromGraderPage)
    )
      return;
    const r = `kami-button-${Math.floor(1e3 * Math.random())}-${new Date().getTime()}`;
    return attachPerPageGraderButtonGCGrader(t, r), void mountDetailsIframe(r, UrlMatcher.extraDataFromGraderPage);
  }
})),
  observers.customGrader.observe(document.body, { childList: !0, subtree: !0 }),
  window.addEventListener("message", (e) => {
    if ("https://classroom.google.com" !== e.origin) return;
    const {
      from_kami_detector: t,
      is_kami_assignment: r,
      grader_container_id: a,
      loading_spin_id: n,
      alternate_course_id: o,
      alternate_course_work_id: i,
      auth_user: d,
      course_id: s,
      course_work_id: c
    } = e.data;
    if (!t) return;
    const u = document.getElementById(a),
      m = u && u.querySelector("a");
    r &&
      m &&
      (m.addEventListener("click", function () {
        const e = buildGradeByPageUrl(o, i, d, s, c);
        window.open(e, "_blank");
      }),
      (u.style.visibility = "visible"));
    const { frameElement: l } = e.source;
    l && l.remove();
    const g = n && document.getElementById(n);
    g && g.remove();
  });
