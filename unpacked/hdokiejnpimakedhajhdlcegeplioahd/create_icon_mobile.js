var lpicon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAMAAACOlf6TAAAAPFBMVEVMaXFaWlpZWVlZWVlZWVlYWFhaWlpaWlpZWVlZWVlaWlpYWFhaWlpaWlpaWlpeXl5ZWVlbW1tZWVlaWlqPt7PZAAAAE3RSTlMA44bOvDmzxKzRmRslLsgTFEZFj0O9XgAAAD9JREFUeF6FztsKgDAMBNFRa9LUu/v//yr4JqF4HgcWln+VxIEr7GSeysK2+/qmQRoJqVGk2kt32PEZJt45kTzdRQJNGXFLsAAAAABJRU5ErkJggg==",
  lpgenerateicon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAAnNCSVQICFXsRgQAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAABHklEQVQoz3WRMUtCYRSGj7RUEBQIjgmhg2CzsxGURENYe+Bgew1t/gEH/8DF2SG933O/IAoC/4BbRNIohOBSDS72NnhLs+JZDofnwMt5TTZPmApTPzffA0kCBggxICC5IFBiyARHjRqOCUNKc4Lf5JW+K3xduQJ93trpb4Ebxp2czGfp0vVZWSfHmLtYaK/zQUMmo+73/B51mYwGIikzGTuIsowMPQICemRklFG4KzNZdIxcUUYVxVRlrojcicxk11vInS8KXCCf/Qo54PF+2edpTvH51gpPvCgRC9ERoiKTtdPRoSxcoznNNXvUaWtJ5vYZccslI0Sw8GoZFSZxhvfo7FcXsnCbZ8SDO2D1j7JksmiDiKt/2oxJzHqc8glnzSOgfYOoRwAAAABJRU5ErkJggg==",
  lpformfillicon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACpQTFRF////tra2rq6utbW1tLS0tLS0s7Ozs7Ozs7OztLS0s7Ozs7Ozs7Ozs7Oz5RWMIQAAAA10Uk5TAAcTMD1VYWh2mKyy++9xPvoAAABGSURBVAjXY2CAA9FyIAgEMnrvAsENIGOuMRDcBDEYuDcwQBhcC6CMnGNQxtybEAaTsbECmMEyc6YDKgMuBTMQbgXcUigAALv6JnRsfYWhAAAAAElFTkSuQmCC";
function lpcreate_icons() {
  for (var e = document.getElementsByTagName("form"), t = 0; t < e.length; t++) {
    var A = get_input_counts(e[t]);
    show_icons(e[t], A);
  }
}
function check_curr_password(e) {
  var t = /(?:existing|old|curr).*pass/i;
  return t.test(e.name) || t.test(e.id);
}
function get_input_counts(e) {
  for (var t = { text: 0, password: 0 }, A = e.elements, o = 0, n, l; o < A.length; o++) {
    (A[o].hasAttribute("maxlength") ? A[o].getAttribute("maxlength") : 1e4) <= 4 ||
      ((l = A[o].type),
      "none" != A[o].style.display &&
        "hidden" != A[o].style.visibility &&
        ("text" == l || "email" == l || "tel" == l ? t.text++ : "password" == l && t.password++));
  }
  return t;
}
function show_icons(e, t) {
  3 < t.text && 0 < t.password
    ? show_icons_formfill(e)
    : t.text <= 3 && 1 == t.password
    ? show_icons_login(e)
    : 1 < t.password && show_icons_generate(e);
}
function show_icons_formfill(e) {
  for (var t = 0, A = 0; A < e.elements.length; A++)
    t || "text" != e.elements[A].type
      ? "password" == e.elements[A].type && lpsetup_icon(e.elements[A], "generate")
      : ((t = 1), lpsetup_icon(e.elements[A], "formfill"));
}
function show_icons_login(e) {
  for (var t = 0, A; t < e.elements.length; t++) {
    (e.elements[t].hasAttribute("maxlength") ? e.elements[t].getAttribute("maxlength") : 1e4) <= 4 ||
      ("text" != e.elements[t].type && "email" != e.elements[t].type && "tel" != e.elements[t].type && "password" != e.elements[t].type) ||
      lpsetup_icon(e.elements[t], "login");
  }
}
function show_icons_generate(e) {
  for (var t = 0; t < e.elements.length; t++)
    "password" == e.elements[t].type && lpsetup_icon(e.elements[t], check_curr_password(e.elements[t]) ? "login" : "generate");
}
function lpsetup_icon(e, s) {
  var t = lpicon;
  "generate" == s ? (t = lpgenerateicon) : "formfill" == s && (t = lpformfillicon),
    (e.style.backgroundImage = "url(" + t + ")"),
    (e.style.backgroundPosition = "center right"),
    (e.style.backgroundRepeat = "no-repeat"),
    e.addEventListener("touchstart", function (e) {
      var t = getAbsolutePos(document, e.target),
        A = e.touches[0].pageX + document.body.scrollLeft + document.documentElement.scrollLeft,
        o = e.touches[0].pageY + document.body.scrollTop + document.documentElement.scrollTop,
        n,
        l;
      (e.handled = !1),
        t &&
          ((n = 4), (l = 18), "function" == typeof dp_to_px && (n = dp_to_px(n)), A > t.left + t.width - l - n) &&
          A < t.left + t.width + n &&
          o > t.top - n &&
          o < t.top + t.height + n &&
          ((e.handled = !0), e.preventDefault(), iconClicked(s));
    });
}
function getAbsolutePos(e, t) {
  var t, A, o, A, o, n;
  return null == t || "function" != typeof t.getBoundingClientRect
    ? null
    : ((A = void 0 === (t = t.getBoundingClientRect()).width ? t.right - t.left : t.width),
      (o = void 0 === t.height ? t.bottom - t.top : t.height),
      (n = e.body.getBoundingClientRect()),
      { left: t.left + e.body.scrollLeft - n.left, top: t.top + e.body.scrollTop - n.top, width: A, height: o });
}
