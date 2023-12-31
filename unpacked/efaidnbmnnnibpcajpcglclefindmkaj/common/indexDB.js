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
import { dcTabStorage as r } from "../browser/js/tab-storage.js";
import { loggingApi as e } from "./loggingApi.js";
const t = new (class {
  constructor() {
    this.db;
    this.objectStoreName = "pdfFile";
    const r = indexedDB.open("PdfFilesDataBase", 1);
    (r.onupgradeneeded = (r) => {
      (this.db = r.target.result),
        this.db.objectStoreNames.contains(this.objectStoreName) || this.db.createObjectStore(this.objectStoreName);
    }),
      (r.onsuccess = (r) => {
        this.db = r.target.result;
      }),
      (r.onerror = () => {
        e.error({ message: "indexeddb could not be opened", error: r.error });
      });
  }
  extractParam(r, e) {
    return new URLSearchParams(r).get(e) || "";
  }
  storeInIndexedDB(t, o) {
    try {
      if (this.db && this.db.transaction && "function" == typeof this.db.transaction) {
        const s = this.db.transaction(this.objectStoreName, "readwrite");
        s.onerror = function (r) {
          return e.error({ message: "Error in transaction", error: r.target.error }), Promise.reject(r.target.error);
        };
        const n = s.objectStore(this.objectStoreName),
          a = { fileBuffer: t, tabId: o, pdfUrl: this.extractParam(r.getItem("search"), "pdfurl") },
          i = n.put(a, o.toString());
        return new Promise((r, t) => {
          (i.onsuccess = (e) => {
            r(e.target.result);
          }),
            (i.onerror = (r) => {
              e.error({ message: "Error in updating buffer", error: r.target.error }), t(r.target.error);
            });
        });
      }
    } catch (r) {
      return e.error({ message: "Error in updating buffer", error: r }), Promise.reject(r);
    }
  }
  getDataFromIndexedDB(t) {
    try {
      if (this.db && this.db.transaction && "function" == typeof this.db.transaction) {
        const o = this.db.transaction(this.objectStoreName, "readonly");
        o.onerror = function (r) {
          return e.error({ message: "Error in transaction", error: r.target.error }), Promise.reject(r.target.error);
        };
        const s = o.objectStore(this.objectStoreName).get(t.toString());
        return new Promise((t, o) => {
          (s.onsuccess = (e) => {
            const o = e.target.result,
              s = this.extractParam(r.getItem("search"), "pdfurl");
            o && o.pdfUrl === s ? t(o) : t({});
          }),
            (s.onerror = (r) => {
              e.error({ message: "Error in getting buffer", error: r.target.error }), o(r.target.error);
            });
        });
      }
    } catch (r) {
      return e.error({ message: "Error in getting buffer", error: r }), Promise.reject(r);
    }
  }
  deleteDataFromIndexedDB(r) {
    try {
      if (this.db && this.db.transaction && "function" == typeof this.db.transaction) {
        const t = this.db.transaction(this.objectStoreName, "readwrite");
        t.onerror = function (r) {
          return e.error({ message: "Error in transaction", error: r.target.error }), Promise.reject(r.target.error);
        };
        const o = t.objectStore(this.objectStoreName).delete(r.toString());
        return new Promise((r, t) => {
          (o.onsuccess = (e) => {
            r(e.target.result);
          }),
            (o.onerror = (r) => {
              e.error({ message: "Error in deleting buffer", error: r.target.error }), t(r.target.error);
            });
        });
      }
    } catch (r) {
      return e.error({ message: "Error in deleting buffer", error: r }), Promise.reject(r);
    }
  }
  storeBufferAndCall(e, o, s, ...n) {
    e
      ? (r.setItem("bufferTabId", s),
        t.storeInIndexedDB(e, s).then(() => {
          o && o(...n);
        }))
      : o && o(...n);
  }
})();
export { t as indexedDBScript };
