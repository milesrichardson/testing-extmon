!(function (e) {
  if (!"##REPLACE_STRING_FOR_BROWSER##"()) return;
  let t = "";
  (e.waxFill = function () {
    return (
      (document.querySelector("#PasswordMask").style.display = "none"), (document.querySelector("#Password").style.display = "inline"), !1
    );
  }),
    (e.waxFetchData = function () {
      const e = {};
      return (e[SymWax.constants.loginType.PASSWORD] = t), e;
    }),
    document.addEventListener("readystatechange", function (e) {
      if ("complete" === e.target.readyState)
        !(function () {
          const e = document.querySelector("#ctl00_ControlsStructureheader_ctl01_ControlsStructureLoginmemberlogin_p2TB");
          e.addEventListener("change", function (n) {
            "" != e.value.trim() && (t = e.value);
          });
        })();
    });
})(window);
