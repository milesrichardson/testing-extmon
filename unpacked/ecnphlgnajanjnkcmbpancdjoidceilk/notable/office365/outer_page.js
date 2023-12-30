"use strict";
window.addEventListener("message", function e(n) {
  if (!n.data?.requestKamiOfficeDocumentData) return;
  const o =
    "onedrive.live.com" === window.location.host
      ? (function () {
          const e = WacConfig.viewParams.cid,
            n = WacConfig.viewParams.id,
            o = $Config.email,
            t = "personal";
          if (e && n && o) return { driveId: e, itemId: n, userEmail: o, accountType: t };
        })()
      : (function () {
          if ("undefined" == typeof _wopiContextJson || "undefined" == typeof _spPageContextInfo) return;
          const e = _spPageContextInfo.userEmail,
            n = _wopiContextJson.BundleUrl.match(/drives\/(b![^/]+)/)?.[1],
            o = _wopiContextJson.BundleUrl.match(/items\/([^/]+)/)?.[1],
            t = "business";
          return n && o && e ? { driveId: n, itemId: o, userEmail: e, accountType: t } : void 0;
        })();
  if (o) {
    for (const e of document.querySelectorAll("iframe")) {
      const t = { kamiOfficeDocumentData: !0, data: o };
      console.log("Kami: sending document data to child", t), e.contentWindow?.postMessage(t, n.origin);
    }
    window.removeEventListener("message", e);
  } else console.log("Kami: unable to extract document data");
});
