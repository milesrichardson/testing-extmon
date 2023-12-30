const handleUpdateWorkLinkClick = function () {
    wrapUpdateWorkWindowOpen();
    var e = document.querySelector(".ndfHFb-c4YZDc-z5C9Gb-LgbsSe"),
      t = document.createEvent("MouseEvents");
    t.initEvent("mousedown", !0, !0),
      e.dispatchEvent(t),
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
  },
  wrapUpdateWorkWindowOpenScript = function () {
    /\{\s*\[native code\]\s*\}/.test("" + window.open) && (window.originalOpen = window.open),
      (window.open = function () {
        window.open = window.originalOpen;
        const e = new URL(arguments[0]),
          t = /^https:\/\/drive\.google\.com\/(open|file\/d\/|document\/d\/)/.test(e.href);
        if (t) {
          google_file_id = e.searchParams.get("id") || e.pathname.split("/")[3];
          const t = window.location.href.split("/"),
            n = new URLSearchParams();
          n.set("open_formative_assessment", "true"),
            n.set("alternative_course_id", t[4]),
            n.set("alternate_coursework_id", t[6] || "all"),
            n.set("google_file_id", google_file_id),
            n.set("authuser", e.searchParams.get("authuser"));
          const o = `${"https://web.kamihq.com"}/web/viewer.html?${n.toString()}`;
          window.open(o, "_blank");
        } else window.open.apply(this, arguments);
      });
    const e = document.currentScript;
    e && null !== e.parentNode && e.parentNode.removeChild(e);
  },
  wrapUpdateWorkWindowOpen = function () {
    var e = document.head || document.documentElement;
    if (null === e) return !1;
    var t = document.createElement("script");
    t.textContent = "(" + wrapUpdateWorkWindowOpenScript.toString() + ")();";
    try {
      e.appendChild(t);
    } catch (e) {}
  };
