!(function (t) {
  if (!"##REPLACE_STRING_FOR_BROWSER##"()) return;
  let e = null,
    n = 0;
  setTimeout(function () {
    (e = t.getUserInputTop()), t.addSetInterval();
  }, 1e3),
    (t.getUserInputTop = () => {
      const t = [0, 0];
      let e = document.getElementById("onlineId1");
      if (((null != e && 0 != e.getBoundingClientRect().top) || (e = document.getElementById("onlineIdSelect")), null == e)) return null;
      const n = document.getElementById("passcode1");
      return (t[0] = e.getBoundingClientRect().top), (t[1] = n.getBoundingClientRect().top), t;
    }),
    (t.setDecorator = () => {
      const t = getUserInputTop();
      if (null == t || 0 == t[0] || 0 == t[1]) return;
      const l = document.querySelectorAll("#norton-idsafe-field-styling-divId"),
        o = document.getElementById("symc-in-page-popup");
      if (null == l || 0 === l.length) return;
      const u = e[0] - t[0];
      if (0 != u) {
        e = t;
        let r = window.scrollY,
          d = n - r;
        n = r;
        for (let t = 0; t < l.length; t++) l[t].style.top = parseFloat(l[t].style.top) - u - d + "px";
        null != o && (o.style.top = parseFloat(o.style.top) - u - d + "px");
      }
    }),
    (t.addSetInterval = () => {
      window.setInterval(setDecorator, 250);
    });
})(window);
