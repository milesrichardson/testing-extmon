!(function (e) {
  let n;
  (e.waxFetchData = function () {
    const e = {};
    let n = "",
      t = document.getElementById("USERNAME");
    null == t && (t = waxFindElement('"tagname:=input", "name:=USERNAME"')),
      null != t && (n = t.value),
      (e[SymWax.constants.loginType.USERNAME] = n);
    let l = "",
      a = document.getElementById("PASSWORD");
    return (
      null == a && (a = waxFindElement('"tagname:=input", "id:=PASSWORD"')),
      null != a && (l = a.value),
      (e[SymWax.constants.loginType.PASSWORD] = l),
      e
    );
  }),
    (e.waxFillEx = function (e) {
      let t = document.getElementById("username"),
        l = !1;
      return (
        null == t && (t = document.getElementById("cA-cardsUseridUnmasked")),
        null != t && (t.click(), t.focus(), (t.value = e.value), (l = !0)),
        (n = document.getElementById("usernameMasked")),
        null == n && (n = document.getElementById("cA-cardsUseridMasked")),
        null != n && (n.click(), n.focus(), (n.value = e.value), (l = !0)),
        l
      );
    }),
    (e.AfterFillEvent = function () {
      let e = document.createEvent(SymWax.constants.eventType.HTML_EVENTS);
      e.initEvent(SymWax.constants.eventType.KEYUP, !0, !0), n.dispatchEvent(e);
    });
})(window);
