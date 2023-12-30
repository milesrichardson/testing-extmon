document.title = gs("Debug");
var g_disable_scroll = !1;
function refresh_history() {
  var e = document.getElementById("pre_elt");
  return !(!e || !g_BG || ((e.innerText = g_BG.gethistorybuf()), 0));
}
function reset_history() {
  var e = document.getElementById("pre_elt");
  return !(!e || !g_BG || ((e.innerText = ""), g_BG.reset_history(), 0));
}
var g_BG = null;
function onload(e) {
  var e;
  e
    ? ((g_BG = getBG()),
      ((e = document.getElementById("pre_elt")).style.height = "400px"),
      (e.style.backgroundColor = "#efefef"),
      (e.style.fontFamily = "monospace"),
      (e.style.overflow = "scroll"),
      refresh_history(),
      setup_handlers())
    : get_data("debug", function () {
        onload(!0);
      });
}
function setup_handlers() {
  (g_BG = getBG()),
    document.getElementById("refresh_btn").addEventListener("click", function () {
      get_data("debug", function () {
        refresh_history();
      });
    }),
    document.getElementById("reset_btn").addEventListener("click", function () {
      reset_history(),
        get_data("debug", function () {
          refresh_history();
        });
    }),
    document.getElementById("close_btn").addEventListener("click", function () {
      setTimeout(function () {
        getBG().closecurrenttab("debug.html");
      }, 0);
    }),
    document.getElementById("scroll_btn").addEventListener("click", function () {
      g_disable_scroll
        ? ((g_disable_scroll = !1), (document.getElementById("scroll_btn").innerText = gs("Disable Scroll")))
        : ((g_disable_scroll = !0), (document.getElementById("scroll_btn").innerText = gs("Enable Scroll")));
    }),
    setInterval(function () {
      get_data("debug", function () {
        var e;
        refresh_history(), g_disable_scroll || ((e = document.getElementById("pre_elt")).scrollTop = e.scrollHeight);
      });
    }, 6e3);
}
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    onload();
  });
});
