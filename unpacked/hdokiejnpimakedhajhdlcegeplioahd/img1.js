document.title = gs("View Image");
var data = null;
function onLoad(t) {
  var t, e, a;
  t
    ? (t = getBG()).g_img_data
      ? ((data = t.g_img_data), (t.g_img_data = null), (document.getElementById("imgviewer").src = data))
      : t.g_audio_data &&
        ((e = document.createElement("audio")).setAttribute("controls", "controls"),
        e.setAttribute("autobuffer", "autobuffer"),
        e.setAttribute("autoplay", "autoplay"),
        (a = document.createElement("source")).setAttribute("src", t.g_audio_data),
        e.appendChild(a),
        document.body.appendChild(e),
        (document.getElementById("imgviewer").style.display = "none"))
    : get_data("img", function () {
        onLoad(!0);
      });
}
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    onLoad();
  });
});
