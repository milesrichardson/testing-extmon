!(function (e) {
  (e.shiftIcons = (e) => {
    for (let t = 0; t < e.length; t++)
      "norton-idsafe-field-styling-divId" === e[t].id && (e[t].style.left = parseInt(e[t].style.left) - 30 + "px");
  }),
    (e.waxSiteScriptMain = () => {
      const e = new MutationObserver((e) => {
          for (let t = 0; t < e.length; t++) shiftIcons(e[t].addedNodes);
          setTimeout(function () {
            SymWax.main.analyzePage();
          }, 3e3);
        }),
        t = document.documentElement;
      e.observe(t, { attributes: !0, childList: !0, characterData: !0, subtree: !0 });
    }),
    (e.enableLoginButton = () => {
      const e = document.getElementById("account_name_text_field"),
        t = new FocusEvent("focus");
      e.dispatchEvent(t);
    }),
    e.waxSiteScriptMain(),
    document.addEventListener("readystatechange", function (e) {
      if ("complete" === e.target.readyState)
        setTimeout(function () {
          SymWax.main.analyzePage();
        }, 3e3);
    });
})(window);
