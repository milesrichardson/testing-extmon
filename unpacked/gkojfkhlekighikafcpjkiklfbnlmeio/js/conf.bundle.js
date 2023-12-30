// LICENSE_CODE ZON
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([
  [64],
  {
    9641: (module) => {
      module.exports = {
        zerr_level: "WARN",
        browser: { chrome: true, name: "chrome" },
        url_ccgi: "https://client.hola.org/client_cgi",
        url_ccgi_cdn: "https://client-cdn4.hola.org/client_cgi",
        url_perr: "https://perr.hola.org/client_cgi",
        www_host: "hola.org",
        version: "1.218.811",
        url_site: "https://hola.org",
        url_bext: "https://client.hola.org/bext",
        agents: [
          { ip: "64.227.111.129", port: "22224", name: "zagent2776" },
          { ip: "64.227.107.148", port: "22224", name: "zagent2778" },
          { ip: "140.82.6.171", port: "22224", name: "zagent2547" },
          { ip: "147.182.251.180", port: "22224", name: "zagent2766" },
          { ip: "144.202.101.248", port: "22224", name: "zagent2603" },
          { ip: "144.202.97.118", port: "22224", name: "zagent2601" },
          { ip: "24.199.97.180", port: "22224", name: "zagent2765" },
          { ip: "147.182.129.49", port: "22224", name: "zagent2721" },
          { ip: "165.22.8.104", port: "22224", name: "zagent2685" },
          { ip: "140.82.4.96", port: "22224", name: "zagent2540" }
        ],
        fallback_agents: {
          agents: [
            { ip: "207.148.24.201", name: "zagent43" },
            { ip: "147.182.169.62", name: "zagent2948" }
          ],
          ports: { direct: 22222, peer: 22223, hola: 22224, trial: 22225, trial_peer: 22226 }
        },
        hola_match: [
          "https://*.hola.org/*",
          "https://*.zspeed-cdn.com/*",
          "https://*.h-vpn.org/*",
          "https://*.holavpn.com/*",
          "https://*.holavpnworld.com/*",
          "https://*.holavpnextension.com/*",
          "https://*.holavpninstaller.com/*",
          "https://*.holabrowser.com/*",
          "https://*.holafreevpn.com/*",
          "https://*.holavpnrussia.com/*",
          "https://*.hola-vpn.com/*",
          "https://*.holax.io/*",
          "https://*.holavpn.net/*",
          "https://*.holavpnandroid.com/*",
          "https://*.c6gj-static.net/*",
          "https://*.su89-cdn.net/*",
          "https://*.yd6n63ptky.com/*",
          "https://*.hola-compat.com/*",
          "*://new-tab-page/*",
          "*://hola-new-tab-page/*",
          "*://hola-diagnostics/*",
          "*://hola-settings/*",
          "*://settings/*"
        ],
        ids: {
          cws: "gkojfkhlekighikafcpjkiklfbnlmeio",
          www: "pnknnijoleibcpmkdcooclmnjmmdhgbg",
          cws_va: "chgpmaaockmdehmidghebcjafhihlgha",
          chrome_hosted: "bbjkgcbckkalmlpimfinpdmaelnknlee"
        },
        default_popup: "js/popup.html",
        type: "cws"
      };
    }
  }
]);
