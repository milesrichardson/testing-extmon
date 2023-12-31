!(function (t, e) {
  if ("function" == typeof define && define.amd) define([], e);
  else if ("undefined" != typeof exports) e();
  else {
    e(), (t.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  const t = {
    "https://*.instructure.com": { auto: !0 },
    "https://*.awinfosys.com": { auto: !0 },
    "https://docs.google.com/document/u/*": { auto: !1 },
    "https://docs.google.com/document/d/*edit": { auto: !0 },
    "https://docs.google.com/document/*edit": { auto: !0 },
    "https://docs.google.com/presentation/*edit": { auto: !0 },
    "https://assignments.google.com/*": { auto: !0 },
    "https://docs.google.com/forms/*edit": { auto: !1 },
    "https://docs.google.com/forms/*": { auto: !0 },
    "https://*word-edit.officeapps.live.com": { auto: !0 },
    "https://*.sharepoint.com/*": {
      auto: !1,
      selectorInject: ["WacFrame_Word_0", "WebApplicationFrame[allow*=UKC-word-edit]", "WebApplicationFrame[allow*=UKC-onenote]"]
    },
    "https://onedrive.live.com/edit.aspx*": { auto: !1, selectorInject: ["WacFrame_Word_0", "WebApplicationFrame"] },
    "https://*.sharepoint.com/*notebooks": { auto: !0 },
    "https://*.sharepoint.com/*wopiframe.aspx?sourcedoc": { auto: !0 },
    "https://*.sharepoint.com/*wopiframe.aspx?sourcedoc": { auto: !0 },
    "https://docs.google.com/document/*classroom.google.com": { auto: !0 },
    "https://*word-edit.officeapps.live.com": { auto: !0 },
    "https://*onenote.officeapps.live.com/o/onenoteframe.aspx": { auto: !0 },
    "https://reading.texthelp.com/readwrite": { auto: !0 },
    "https://fluency.texthelp.com/readwrite": { auto: !0 },
    "http://localhost:10901/*": { auto: !0 },
    "https://pra.dev.texthelp.com/*": { auto: !0 },
    "https://pra.texthelp.com/*": { auto: !0 },
    "https://rw.texthelp.com/simplify/": { auto: !0 },
    "https://rw4gc-simplify.dev.texthelp.com/": { auto: !0 },
    "https://rw4gc-simplify-qa.texthelp.com/": { auto: !0 },
    "https://rw4gc-simplify.texthelp.com/": { auto: !0 },
    "https://epub.dev.texthelp.com/": { auto: !0 },
    "https://rw4gc-epub-qa.texthelp.com/": { auto: !0 },
    "https://epub.texthelp.com/": { auto: !0 },
    "https://*.performancematters.com": { canEject: !0, auto: !1 },
    "https://*.vitalsource.com/": { canEject: !0, auto: !1 },
    "https://bookshare-reader.s3.amazonaws.com": { canEject: !0, auto: !1 },
    "https://*.itslearning.com/": { canEject: !0, auto: !1 },
    "https://my.wgu.edu/courses/*": { auto: !1 },
    "https://*.engagelms.com/learn/course/*": { auto: !1 },
    "https://app.schoology.com/assignments/*mydocument": { auto: !1 },
    "https://lti-submission-google.app.schoology.com/assignment/*": { auto: !1 },
    "https://docs.google.com/document/*pub": { canEject: !0, auto: !1 },
    "https://docs.google.com/document/*": { auto: !0 },
    default: { appendStart: !0, canEject: !0, auto: !1 }
  };
  !(function () {
    let e = ((t, e) => {
      let o = {};
      t = t.toLowerCase();
      for (let s in e) {
        if (((s = s.toLowerCase()), "default" == s)) {
          o = e[s];
          break;
        }
        let a = t.substring(0, s.length);
        if (a === s) {
          o = e[s];
          break;
        }
        {
          a = t;
          let c = s.split("*");
          if (c.length > 1) {
            let n = !0;
            for (let t in c) {
              let e = a.indexOf(c[t]);
              if (-1 == e) {
                n = !1;
                break;
              }
              a = a.substr(e + c[t].length);
            }
            if (n) {
              (a = t), (o = e[s]);
              break;
            }
          }
        }
      }
      return o;
    })(window.location.toString(), t);
    if (!0 === e.auto) chrome.runtime.sendMessage({ command: "th-inject" }, () => {});
    else if (!1 === e.auto && e.selectorInject)
      for (let t of e.selectorInject) {
        if (document.querySelector(`#${t}`)) {
          chrome.runtime.sendMessage({ command: "th-inject" }, () => {});
          break;
        }
      }
    chrome.runtime.onMessage.addListener(function (t, e, o) {
      if (chrome.runtime.id === e.id && "th-toolbarinjected" === t.command) {
        o(document.querySelector("gw-toolbar") ? { injected: !0 } : { injected: !1 });
      }
    }),
      window.addEventListener("message", (t) => {
        "RW4GC_ACTION_CLICK" === t.data && chrome.runtime.sendMessage({ command: "RW4GC_ACTION_CLICK" }, () => {});
      });
  })();
});
