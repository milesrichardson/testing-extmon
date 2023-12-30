function saveIconState(e, n, o) {
  try {
    for (
      var r = null,
        r,
        t =
          (void 0 ===
            (r =
              "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow
                ? (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument
                : g_isfirefox
                ? top.document
                : document).lpiconarr && (r.lpiconarr = []),
          r.lpiconarr.length),
        i,
        i = 0;
      i < r.lpiconarr.length;
      i++
    ) {
      var l = r.lpiconarr[i];
      if (l.idorname == n.idorname && l.IHTMLElement == n.IHTMLElement && l.inframe == n.inframe) {
        if (!checkIsDisplayed(o.ownerDocument, o, null, null, null, !0)) return;
        r.lpiconarr.splice(i, 1);
      }
    }
    r.lpiconarr.push(n);
  } catch (e) {
    verbose_log("save error " + e.message);
  }
}
function getIconState(e, n) {
  var o = null,
    o,
    r = {};
  if (
    void 0 !==
    (o =
      "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow
        ? (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument
        : g_isfirefox
        ? top.document
        : document).lpiconarr
  )
    for (var t, t = 0; t < o.lpiconarr.length; t++) {
      var i = o.lpiconarr[t],
        l,
        r;
      i.idorname != n || (g_isfirefox && i.inframe != (e != o)) || (r = i);
    }
  return r;
}
function hasIconState(e, n) {
  return !!getIconState(e, n);
}
function deleteIconState(e, n) {
  var o = null,
    o =
      "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow
        ? (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument
        : g_isfirefox
        ? top.document
        : document;
  if ((verbose_log("delete icon state from " + o.location.href + " for " + n), void 0 !== o.lpiconarr))
    for (var r, r = 0; r < o.lpiconarr.length; r++) {
      var t = o.lpiconarr[r];
      t.idorname != n || (g_isfirefox && t.inframe != (e != o)) || o.lpiconarr.splice(r, 1);
    }
}
function getAllIconStates() {
  var e = null,
    e =
      "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow
        ? (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument
        : g_isfirefox
        ? top.document
        : document;
  return verbose_log("getting all icon states for " + e.location.href), void 0 !== e.lpiconarr ? e.lpiconarr : [];
}
function resetAllIconStates() {
  var e = null,
    e =
      "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow
        ? (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument
        : g_isfirefox
        ? top.document
        : document;
  verbose_log("resetting icon states for " + e.location.href), (e.lpiconarr = []);
}
