window.waxFetchData = function () {
  const e = {},
    t = document.getElementById("M_content_PCDZ_MF3KFEF_ctl00_Password");
  let n = {};
  const l = document.querySelectorAll("label");
  for (let e of l)
    if ("User ID" === e.innerText) {
      let t = e.nextElementSibling || {};
      if ("DIV" === t.tagName) {
        n = t;
        break;
      }
    }
  return (e[SymWax.constants.loginType.USERNAME] = n.innerText), (e[SymWax.constants.loginType.PASSWORD] = t.value), e;
};
