function showkeyboard() {
  var o;
  $("#virtualkeyboard").is(":visible")
    ? ($("#virtualkeyboard").slideUp(100), $("#loginDialog") && $("#loginDialog").removeClass("keyboard"))
    : ($("#virtualkeyboard").slideDown(100), $("#loginDialog") && $("#loginDialog").addClass("keyboard")),
    ($("#email")
      ? "" == $("#email").val()
        ? $("#email")
        : $("#password")
      : "" == $("#loginDialogEmail").val()
      ? $("#loginDialogEmail")
      : $("#loginDialogPassword")
    ).select();
}
$(function () {
  for (
    var o = window.SimpleKeyboard.default,
      a,
      i = !1,
      n = new o({
        onChange: function (o) {
          return onChange(o);
        },
        onKeyPress: l,
        physicalKeyboardHighlight: !0
      }),
      e =
        ((onInputFocus = function (o) {
          (a = "#".concat(o.target.id)), n.setOptions({ inputName: o.target.id });
        }),
        document.querySelectorAll("input")),
      t,
      t = 0;
    t < e.length;
    t++
  )
    e[t].addEventListener("focus", onInputFocus);
  function l(o) {
    var e = a || "input";
    n.setInput(document.querySelector(e).value),
      i && ((i = !1), u()),
      "{shift}" === o && (i = !i),
      ("{shift}" !== o && "{lock}" !== o) || u();
  }
  function u() {
    var o = n.options.layoutName,
      e;
    n.setOptions({ layoutName: "default" === o ? "shift" : "default" });
  }
  onChange = function (o) {
    var e = a || "input";
    document.querySelector(e).value = o;
  };
});
