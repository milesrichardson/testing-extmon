function doexport(t) {
  var t;
  t
    ? ((t = document.createElement("pre")),
      set_innertext(t, getBG().g_export_output),
      (getBG().g_export_output = ""),
      document.body.appendChild(t))
    : get_data("export", function () {
        doexport(!0);
      });
}
(document.title = gs("Export")),
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
      doexport();
    });
  });
