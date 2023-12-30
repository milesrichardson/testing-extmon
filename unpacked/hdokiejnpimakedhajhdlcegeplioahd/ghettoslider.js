function drawSliderByVal(e) {
  var n = e.getElementsByTagName("img")[0],
    t = (e.val - e.min) / (e.max - e.min),
    e = (e.scrollWidth - 30) * t;
  n.style.left = e + "px";
}
function setSliderByClientX(e, n) {
  var n = (n - e.offsetLeft - 15) / (e.scrollWidth - 30);
  (e.val = (e.max - e.min) * n + e.min),
    e.val > e.max && (e.val = e.max),
    e.val < e.min && (e.val = e.min),
    drawSliderByVal(e),
    e.onchange(e.val, e.num);
}
function sliderClick(e) {
  var n = sliderFromEvent(e);
  n && setSliderByClientX(n, e.clientX);
}
function sliderMouseMove(e) {
  var n = sliderFromEvent(e);
  !n || activeSlider < 0 || (setSliderByClientX(n, e.clientX), stopEvent(e));
}
function sliderFromEvent(e) {
  var n;
  return (
    !!(e = !e && window.event ? window.event : e) &&
    (e.target && (n = e.target), !!(n = (n = e.srcElement ? e.srcElement : n).id && n.id.match(/slider\d+/) ? n : n.parentNode)) &&
    !(!n.id || !n.id.match(/slider\d+/)) &&
    n
  );
}
function attachSliderEvents() {
  for (var e = document.getElementsByTagName("div"), n, t = 0; t < e.length; t++)
    (n = e[t].id.match(/\bslider(\d+)\b/)) &&
      ((n = parseInt(n[1])),
      (e[t].min = slider[n].min),
      (e[t].max = slider[n].max),
      (e[t].val = slider[n].val),
      (e[t].onchange = slider[n].onchange),
      (e[t].num = n),
      drawSliderByVal(e[t]),
      e[t].onchange(e[t].val, n),
      addAnEvent(e[t], "mousedown", function (e) {
        (g_slider_changed_length = !0), sliderClick(e);
        var n = sliderFromEvent(e);
        n && ((activeSlider = n.num), stopEvent(e));
      }),
      addAnEvent(e[t], "mouseup", function (e) {
        (activeSlider = -1), stopEvent(e);
      }));
}
function stopEvent(e) {
  e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : ((e.returnValue = !1), (e.cancelBubble = !0));
}
function addAnEvent(e, n, t) {
  e.attachEvent ? e.attachEvent("on" + n, t) : e.addEventListener ? e.addEventListener(n, t, !0) : (e["on" + n] = t);
}
var activeSlider = -1;
