function createElement(e) {
  if (Array.isArray(e))
    return e.map(function (e) {
      return createElement(e);
    });
  var t = document.createElement(e.type),
    n;
  if (e.attrs)
    for (var r in e.attrs) {
      e.attrs.hasOwnProperty(r) && null != (n = e.attrs[r]) && t.setAttribute(r, e.attrs[r]);
    }
  return (
    e.text
      ? (t.textContent = e.text)
      : e.children &&
        e.children.forEach(function (e) {
          t.appendChild("string" == typeof e ? document.createTextNode(e) : createElement(e));
        }),
    t
  );
}
function emptyElement(e) {
  if (e) for (var t = e.childNodes.length; t--; ) e.removeChild(e.lastChild);
}
function replaceElement(t, e) {
  emptyElement(t);
  var e = createElement(e);
  Array.isArray(e)
    ? e.forEach(function (e) {
        t.appendChild(e);
      })
    : t.appendChild(e);
}
function getAttributes(t, e) {
  return (
    (e = e || {}),
    t.style && g_ischrome && experimentaloverlay && ((t["data-lpstyle"] = t.style), delete t.style),
    e.customEvent && ((t.lpevent = e.customEvent), (t.onclick = "this.dispatchEvent(lpcustomEvent);")),
    e.dynamic &&
      e.dynamic.forEach(function (e) {
        t[e.name] = e.value;
      }),
    t
  );
}
