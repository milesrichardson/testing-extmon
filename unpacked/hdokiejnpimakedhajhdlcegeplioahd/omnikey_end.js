(document.title = gs("Enter PIN")),
  document.getElementById("lp_docwrite_omnikey2") &&
    set_innertext(document.getElementById("lp_docwrite_omnikey2"), gs("Enter your smart card PIN:")),
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
      load();
    }),
      window.addEventListener("unload", function () {
        "function" != typeof omnikey_callback || omnikey_callback_called || omnikey_callback("");
      }),
      (document.getElementById("f").onsubmit = function () {
        return !1;
      }),
      document.getElementById("ok").addEventListener("click", function () {
        do_submit();
      }),
      document.getElementById("cancel").addEventListener("click", function () {
        (omnikey_callback_called = !0),
          omnikey_callback(""),
          setTimeout(function () {
            getBG().closecurrenttab("omnikey.html");
          }, 0);
      }),
      (document.getElementById("pin").onkeypress = function (e) {
        return 13 != e.keyCode || (do_submit(), !1);
      });
  });
