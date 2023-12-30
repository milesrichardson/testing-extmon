/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property laws,
 * including trade secret and or copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
import { util as e } from "./util.js";
import { common as t } from "./common.js";
import { Proxy as o } from "./proxy.js";
import { communicate as r } from "./communicate.js";
import { analytics as n } from "../common/analytics.js";
import { dcLocalStorage as s } from "../common/local-storage.js";
let i;
const a = { prod: "https://www.adobe.com/", stage: "https://www.stage.adobe.com/" },
  c = {
    "cs-CZ": "cz/acrobat/",
    "da-DK": "dk/acrobat/",
    "de-DE": "de/acrobat/",
    "en-US": "acrobat/",
    "en-GB": "uk/acrobat/",
    "es-ES": "es/acrobat/",
    "fi-FI": "fi/acrobat/",
    "fr-FR": "fr/acrobat/",
    "it-IT": "it/acrobat/",
    "ja-JP": "jp/acrobat/",
    "ko-KR": "kr/acrobat/",
    "nb-NO": "no/acrobat/",
    "nl-NL": "nl/acrobat/",
    "pl-PL": "pl/acrobat/",
    "pt-BR": "br/acrobat/",
    "ru-RU": "ru/acrobat/",
    "sv-SE": "se/acrobat/",
    "tr-TR": "tr/acrobat/",
    "zh-TW": "tw/acrobat/"
  },
  l = {
    edit_rotate: "online/rotate-pdf.html?",
    edit_delete: "online/delete-pdf-pages.html?",
    edit_reorder: "online/rearrange-pdf.html?",
    fillandsign: "online/sign-pdf.html?",
    request_signatures: "online/request-signature.html?",
    convert_pdf: "online/convert-pdf.html?",
    compress_pdf: "online/compress-pdf.html?",
    pdf_to_excel: "online/pdf-to-excel.html?",
    pdf_to_jpg: "online/pdf-to-jpg.html?",
    pdf_to_word: "online/pdf-to-word.html?",
    pdf_to_ppt: "online/pdf-to-ppt.html?"
  },
  d = {
    edit_rotate: "rotate-pdf",
    edit_delete: "delete-pdf-pages",
    edit_reorder: "rearrange-pdf",
    fillandsign: "sign-pdf",
    request_signatures: "request-signature"
  },
  u = {
    edit_rotate: "SL4KMB8J",
    edit_delete: "STLMM2SG",
    edit_reorder: "SBNHMKQL",
    fillandsign: "SYBNLY2F",
    request_signatures: "T6SQLPLC"
  },
  m = { edge: "x_api_client_id=edge_extension", chrome: "x_api_client_id=chrome_extension" },
  h = { edge: "&mv2=edge_extension:trefoil", chrome: "&mv2=chrome_extension:trefoil" },
  p = {
    "cs-CZ": "https://documentcloud.adobe.com/cz/cs/",
    "da-DK": "https://documentcloud.adobe.com/dk/da/",
    "de-DE": "https://documentcloud.adobe.com/de/de/",
    "en-US": "https://documentcloud.adobe.com/us/en/",
    "en-GB": "https://documentcloud.adobe.com/gb/en/",
    "es-ES": "https://documentcloud.adobe.com/es/es/",
    "fi-FI": "https://documentcloud.adobe.com/fi/fi/",
    "fr-FR": "https://documentcloud.adobe.com/fr/fr/",
    "it-IT": "https://documentcloud.adobe.com/it/it/",
    "ja-JP": "https://documentcloud.adobe.com/jp/ja/",
    "ko-KR": "https://documentcloud.adobe.com/kr/ko/",
    "nb-NO": "https://documentcloud.adobe.com/no/nb/",
    "nl-NL": "https://documentcloud.adobe.com/nl/nl/",
    "pl-PL": "https://documentcloud.adobe.com/pl/pl/",
    "pt-BR": "https://documentcloud.adobe.com/br/pt/",
    "ru-RU": "https://documentcloud.adobe.com/ru/ru/",
    "sv-SE": "https://documentcloud.adobe.com/se/sv/",
    "tr-TR": "https://documentcloud.adobe.com/tr/tr/",
    "zh-TW": "https://documentcloud.adobe.com/tw/zh/"
  };
i ||
  ((i = new (function () {
    let r, i, f;
    (this.proxy = o.proxy.bind(this)),
      (this.LOG = (...e) => t.LOG(...e)),
      (this.updateName = function (r, n) {
        if (!r || !n) return e.Deferred().resolve().promise();
        let s = t.settings.files_api + "assets/" + r + "/metadata/name",
          i = JSON.stringify({ value: n, on_dup_name: "auto_rename" });
        return e.ajax({ type: "PUT", url: s, data: i, headers: t.POST_headers() }).then(
          () => {},
          this.proxy(function (e) {
            o.REST_error(e, this, { url: s, data: i });
          })
        );
      }),
      (this.updateParent = function (r, n) {
        if (!r || !n) return e.Deferred().resolve().promise();
        let s = t.settings.files_api + "assets/" + f.assetId + "/metadata/parent_id",
          i = JSON.stringify({ value: n, on_dup_name: "auto_rename" });
        return e.ajax({ type: "PUT", url: s, data: i, headers: t.POST_headers() }).then(
          function () {},
          this.proxy(function (e) {
            o.REST_error(e, this, { url: s, data: i });
          })
        );
      }),
      (this.rename = function (t) {
        let o = e.Deferred();
        return (
          this.updateName(t.assetId, t.filename).then(
            this.proxy(function () {
              this.updateParent(t.assetId, t.dest_folder).then(
                function () {
                  o.resolve();
                },
                function () {
                  o.reject();
                }
              );
            }),
            function () {
              o.reject();
            }
          ),
          o.promise()
        );
      }),
      (this.gotoPath = function (o) {
        let r = e.Deferred();
        f.userSelectPromise
          ? f.userSelectPromise.then(
              function () {
                r.resolve();
              },
              function () {
                r.reject();
              }
            )
          : r.resolve(),
          r.then(
            this.proxy(function () {
              t.sso_url(o).then(
                this.proxy(function (t) {
                  i ? (e.isChrome() && chrome.tabs.update(i, { url: t.uri, active: !0 }), (i = null)) : e.createTab(t.uri);
                }),
                this.proxy(function (r) {
                  (o = t.settings.cloud_host + o),
                    i ? (e.isChrome() && chrome.tabs.update(i, { url: o, active: !0 }), (i = null)) : e.createTab(o);
                })
              );
            })
          );
      }),
      (this.file_spec_done = function (e) {
        f.dest_folder = e.dest_folder;
        let t = f.filename;
        "zip" !== t.substring(t.length - 3, t.length) && (f.filename = e.filename),
          f.upload_promise.then(
            this.proxy(function () {
              this.rename(f).then(
                function () {
                  f.userSelectPromise.resolve();
                },
                function () {
                  f.userSelectPromise.reject();
                }
              );
            })
          );
      }),
      (this.message = function (t, o, r) {
        i && e.sendMessage({ tabId: i, progress_op: r ? "set-error" : "set-text", text: t, busy: o });
      }),
      (this.foundCode = function (e) {
        let o = e.split("?")[1].split("=")[1].split("&")[0];
        this.newSession(null, !0),
          n.event(n.e.SIGN_IN_COMPLETE),
          t.authorize(o).then(
            function () {
              r && r.resolve(), (r = null);
            },
            function () {
              r && r.reject(), (r = null);
            }
          );
      }),
      (this.sessionRequest = function (e, t) {
        (f = e), (f.params = t || { filename: f.filename });
      }),
      (this.send_folders = function () {
        this.signed_in().then(
          this.proxy(function () {
            n.event(n.e.UPLOAD_RENAME_CLICKED),
              e
                .ajax({
                  type: "POST",
                  headers: t.POST_headers(),
                  url: t.settings.files_api + "search",
                  data: JSON.stringify({ q: { object_type: "folder" }, metadata: ["id", "name", "created", "parent_id"] })
                })
                .then(
                  this.proxy(function (o) {
                    i &&
                      (o.results.push({
                        parent_id: null,
                        object_type: "root",
                        created: "2015-03-31T11:37:40",
                        id: t.settings.files_root,
                        name: "/"
                      }),
                      e.sendMessage({ tabId: i, progress_op: "folders", folders: o.results }));
                  }),
                  this.proxy(function (e, t, r) {
                    o.REST_error(e, this);
                  })
                );
          })
        );
      }),
      (this.newSession = function (t, o, r) {
        r || (r = f.params),
          r.filename && (f.userSelectPromise = e.Deferred()),
          t ||
            (e.isChrome() && (t = chrome.runtime.getURL("browser/js/progress.html") + "#" + e.param(r)), r.filename && this.send_folders()),
          i
            ? e.isChrome() && chrome.tabs.update(i, { url: t, active: !0 })
            : e.isChrome() &&
              chrome.tabs.create(
                { url: t },
                this.proxy(function (e) {
                  o && (i = e.id);
                })
              );
      }),
      (this.sign_in = function (o, s) {
        return (
          r && (r.reject(), (r = null), n.event(n.e.SIGN_IN_ABANDONED)),
          (r = e.Deferred()),
          t.baseUris().then(
            this.proxy(function () {
              let o = {
                  client_id: t.settings.ims_client_id,
                  redirect_uri: t.settings.redirect_uri,
                  scope: "AdobeID, skybox, openid",
                  dc: !1
                },
                r = t.settings.ims_host + "ims/authorize/v1?" + e.param(o);
              n.event(n.e.SIGN_IN_SHOWN), this.newSession(r, !0);
            })
          ),
          r.promise()
        );
      }),
      (this.signed_in = function () {
        return r || e.Deferred().resolve().promise();
      }),
      (this.signOut = function () {
        e.isChrome() &&
          chrome.tabs.create({
            url:
              t.settings.ims_host +
              "ims/logout/v1?" +
              e.param({
                access_token: t.settings.auth_token.replace(/Bearer /, ""),
                client_id: t.settings.ims_client_id,
                client_secret: t.settings.ims_client_secret,
                redirect_uri: "https://adobe.com"
              })
          }),
          t.clearAuth();
      }),
      (this.checkSessionTab = function (e, t) {
        e === i &&
          -1 === t.indexOf("chrome-extension:") &&
          -1 === t.indexOf(".adobe.com/") &&
          ((i = null), r && (r.reject(), (r = null), n.event(n.e.SIGN_IN_ABANDONED)));
      }),
      (this.getFrictionlessURL = function () {
        let t = "";
        return (
          e && e.getTranslation && (t = e.getTranslation("web2pdfFrictionlessUrl")),
          "" === t && (t = "https://www.adobe.com/go/fl_chromeext"),
          t
        );
      }),
      (this.getAonlineURL = function (o) {
        let r = s.getItem("appLocale") || o.locale;
        const n = "prod" === t.getEnv() ? "prod" : "stage";
        let i = a[n] + c[r],
          f = o.verb;
        if ("acrobat_label" === f) return p[r] || "https://documentcloud.adobe.com";
        let _ = l[f],
          g = e.isEdge() ? "edge" : "chrome",
          b = m[g];
        return (
          i && _ ? (i = i + _ + b) : i ? (i += "online.html") : (i = _ ? a[n] + "acrobat/" + _ + b : a[n] + "acrobat/online.html"),
          d[f] && (i = i + "&x_api_client_location=trefoil:verb-" + d[f]),
          _ && ((i += "&mv=other"), (i += h[g])),
          u[f] && (i = i + "&trackingid=" + u[f]),
          i
        );
      }),
      (this.goto_acom = function (t) {
        e.createTab(this.getFrictionlessURL());
      }),
      (this.go_to_aonline = function (t) {
        e.createTab(this.getAonlineURL(t));
      }),
      (this.relay_message = function (t) {
        t.complete
          ? t.error
            ? (e.consoleLog(t.error), n.event(n.e.HTML_SOURCE_SIZE_TOO_LARGE_ERROR))
            : ((t.html_op = "serialize_iframe"),
              e.isChrome() &&
                chrome.scripting.executeScript({
                  target: { tabId: t.tabId, allFrames: !0 },
                  func: (e) => {
                    window.dc && window.OP && receiveIframe(JSON.stringify(e));
                  },
                  args: [t]
                }))
          : e.isChrome() &&
            chrome.scripting.executeScript({
              target: { tabId: t.tabId, allFrames: !0 },
              func: (e) => {
                window.dc && window.OP && serialize(JSON.stringify(e));
              },
              args: [t]
            });
      }),
      (this.flickr = function (e) {
        this.sessionRequest(e, {}), this.newSession(null, !1, { unavailable: "flickr" });
      }),
      (this.error = function (t) {
        if (i) {
          f && f.userSelectPromise && f.userSelectPromise.reject();
          let o = ["Please Report this Error:"];
          e.each(t, function (e, t) {
            o.push(e + ": " + t);
          }),
            this.message(o.join("\n"), !1, !0),
            (i = null);
        }
      }),
      o.handlers(this.error.bind(this)),
      (this.onSessionTabRemoved = function (e) {
        e === i && ((i = null), r && (n.event(n.e.SIGN_IN_ABANDONED), r.reject(), (r = null)));
      });
  })()),
  r.registerHandlers({
    goto_acom: i.proxy(i.goto_acom),
    go_to_aonline: i.proxy(i.go_to_aonline),
    flickr: i.proxy(i.flickr),
    file_spec_done: i.proxy(i.file_spec_done),
    "relay-msg": i.proxy(i.relay_message)
  }));
export const session = i;
