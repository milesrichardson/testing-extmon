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
import { analytics as e } from "../common/analytics.js";
import { Proxy as r } from "./proxy.js";
import { ADOBE_YOLO_ERROR_CODES as t, JUMP_URL_STATUS as o } from "./constant.js";
import { dcLocalStorage as s, dcSessionStorage as a } from "../common/local-storage.js";
import { acroweb2pdf as i } from "./acro-web2pdf.js";
import { viewerModuleUtils as l } from "./viewer-module-utils.js";
import { communicate as u } from "./communicate.js";
import { SETTINGS as m } from "./settings.js";
import { floodgate as n } from "./floodgate.js";
let c = null;
c ||
  ((c = new (function () {
    (this.proxy = r.proxy.bind(this)),
      (this.userDetails = {}),
      (this.updateUserDetails = () => (
        (this.userDetails = {}),
        new Promise((e) => {
          i.getUserInfoFromAcrobat((r) => {
            (this.userDetails = r), s.setItem("acrobatUserDetailsFetchTimestamp", Date.now()), e();
          });
        })
      )),
      (this.getUserInfoFromAcrobat = async (e, r, t) => {
        const o = await l.checkFeatureEnable({ flagName: "dc-cv-adobe-yolo", storageKey: "adobeYoloEnable" });
        if (!(s.getItem("isAcrobat") && o && m.ADOBE_YOLO_ENABLED) || s.getWithTTL("adobe-yolo-freeze")) return t({});
        {
          const e = s.getItem("acrobatUserDetailsFetchTimestamp");
          let r;
          try {
            const e = n.getFeatureMeta("dc-cv-adobe-yolo"),
              t = JSON.parse(e);
            t && t.cachingTimeInHours && (r = t.cachingTimeInHours);
          } catch (e) {
            r = m.ADOBE_YOLO_CACHING_TIME_IN_HOURS;
          }
          const o = 60 * r * 60 * 1e3;
          if (e && new Date().getTime() - e < o) return t(this.userDetails);
          await this.updateUserDetails(), t(this.userDetails);
        }
      }),
      (this.setFailureCookie = () => {
        s.removeItem("adobe-yolo-failure"), s.setWithTTL("adobe-yolo-freeze", "true", 6048e5);
      }),
      (this.launchJumpUrl = (r, l, u) => {
        const { userGuid: m, source: n } = r.details || {};
        i.launchJumpUrl(m, (r) => {
          if (!r || !r.errorCode)
            return s.removeItem("adobe-yolo-failure"), e.event(e.e.ADOBE_YOLO_JUMP_SUCCESS, { SOURCE: n }), u && u({ result: o.SUCCESS });
          {
            a.removeItem("adobeYoloTabsInfo");
            const i = a.getItem("shimFullVersion") || void 0;
            switch (r.errorCode) {
              case "1":
                return (this.userDetails = {}), e.event(e.e.USER_SIGNED_OUT_ADOBE_YOLO, { SOURCE: n }), u && u({ result: t[1] });
              case "2":
                s.removeItem("adobe-yolo-failure"), e.event(e.e.STALE_USER_ADOBE_YOLO, { SOURCE: n });
                const { userName: a, userEmail: l, profileImage: m, userGuid: c } = r;
                return (
                  (this.userDetails = { userName: a, userEmail: l, profileImage: m, userGuid: c }),
                  u && u({ result: t[2], userDetails: this.userDetails })
                );
              case "3":
                return (
                  this.setFailureCookie(),
                  e.event(e.e.SANITY_FAILED_ADOBE_YOLO, { SOURCE: n, VERSION: i }),
                  u && u({ result: o.FREEZE_YOLO, freeze_reason: t[3] })
                );
              default:
                return (
                  e.event(e.e.ADOBE_YOLO_JUMP_ERROR_REASON, { SOURCE: n, REASON: t[r.errorCode], VERSION: i }),
                  s.getItem("adobe-yolo-failure")
                    ? (e.event(e.e.ADOBE_YOLO_JUMP_FREEZE, { SOURCE: n }),
                      this.setFailureCookie(),
                      u && u({ result: o.FREEZE_YOLO, freeze_reason: t[r.errorCode] }))
                    : (s.setItem("adobe-yolo-failure", "true"), u && u({ result: o.ERROR, freeze_reason: t[r.errorCode] }))
                );
            }
          }
        });
      });
  })()),
  u.registerModule("acrobatUserDetails", c),
  u.registerHandlers({ getUserInfoFromAcrobat: c.proxy(c.getUserInfoFromAcrobat), launchJumpUrl: c.proxy(c.launchJumpUrl) }));
export const userDetailsAcrobat = c;
