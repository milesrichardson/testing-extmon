function googleApiHelpers(i, e) {
  return (o = e), { getGoogleDriveFile: r, getGoogleDriveFileContent: t, saveDataToGoogleDrive: n };
  function a(e) {
    e.setRequestHeader("Authorization", "Bearer " + o);
  }
  function s(e, t, n) {
    var o;
    i({
      url: "https://content.googleapis.com/upload/drive/v3/files/" + e + "?uploadType=media&alt=json",
      type: "PATCH",
      dataType: "text",
      contentType: "text/plain",
      data: t,
      beforeSend: a,
      success: function () {
        n && n();
      }
    });
  }
  function c(e, t, n) {
    var o;
    i({
      url: "https://content.googleapis.com/drive/v3/files?alt=json",
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({ name: e, parents: [t] }),
      beforeSend: a,
      success: function (e) {
        n && n(e.id);
      }
    });
  }
  function r(e, t, n) {
    var o;
    i({
      url:
        "https://content.googleapis.com/drive/v3/files?pageSize=1&q=name%20%3D%20%27" +
        e +
        "%27&spaces=" +
        t +
        "&fields=nextPageToken%2C%20files(id%2C%20name)",
      type: "GET",
      beforeSend: a,
      success: function (e) {
        var t, t;
        n && ((t = []), (t = ("string" == typeof e ? JSON.parse(e) : e).files), n(t[0]));
      }
    });
  }
  function t(e, t) {
    var n;
    i({
      url: "https://www.googleapis.com/drive/v3/files/" + e + "?alt=media",
      type: "GET",
      beforeSend: a,
      success: function (e) {
        t && t(e);
      }
    });
  }
  function n(t, n, o, i) {
    r(t, n, function (e) {
      e
        ? s(e.id, o, i)
        : c(t, n, function (e) {
            s(e, o, i);
          });
    });
  }
  var o;
}
