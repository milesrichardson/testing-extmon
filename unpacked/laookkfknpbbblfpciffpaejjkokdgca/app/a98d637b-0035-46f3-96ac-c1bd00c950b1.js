var fn_addin = function (e, t, n) {
  var s = {};
  return (
    (s.styles = s.styles || {}),
    (s.commands = s.commands || {}),
    (s.dependencies = n || s.dependencies || {}),
    (s.styles.style = function () {}),
    (s.views = s.views || {}),
    (s.collect = s.collect || {}),
    (s.models = s.models || {}),
    (s.templates = s.templates || {}),
    (s.info = {
      widget: !0,
      autoLoad: !0,
      id: "focus_css_override",
      addin: "a98d637b-0035-46f3-96ac-c1bd00c950b1",
      requiredFeature: "noPersonalFocus"
    }),
    e.console.log(e.elapsed() + ": " + s.info.id + " started"),
    (s.styles = s.styles || {}),
    (s.styles.style = function () {
      var e = document.createElement("style");
      (e.type = "text/css"),
        (e.innerHTML =
          ".focus-wrapper{display:none!important}.team-focus .goal{color:inherit!important;font-size:120%!important}.team-focus .goal-label{margin-bottom:14px;font-size:70%!important}.team-focus .three-col-layout--center{flex-direction:column;align-items:center!important}"),
        document.getElementsByTagName("head")[0].appendChild(e);
    }),
    s.styles.style(),
    s
  );
};
m.addinManager && m.addinManager.registerAddinFn("a98d637b-0035-46f3-96ac-c1bd00c950b1", fn_addin);
