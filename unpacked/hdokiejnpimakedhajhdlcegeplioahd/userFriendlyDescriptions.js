var fillableNoteTypes = ["Credit Card", "Bank Account", "Address"];
function addUserFriendlyDescription(e) {
  e.decprofilename = lpmdec_acct(e.encname, !0, e, g_shares);
  var t = lpmdec_acct(e.extra, !0, e, g_shares);
  switch (e.notetype) {
    case "Credit Card":
      var r = LP.getNoteValue("Number", t).slice(-4);
      (e.description = 0 === r.length ? "" : StringUtils.translate("Ending in %s", r)),
        (e.ccType = LPCC.getCCType(LP.getNoteValue("Number", t)));
      break;
    case "Address":
      e.description = LP.getNoteValue("Address 1", t);
  }
  return e;
}
