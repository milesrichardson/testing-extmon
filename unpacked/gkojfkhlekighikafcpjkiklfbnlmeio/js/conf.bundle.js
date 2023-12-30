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
        version: "1.216.954",
        url_site: "https://hola.org",
        url_bext: "https://client.hola.org/bext",
        agents: [
          { ip: "137.184.194.200", port: "22224", name: "zagent2716" },
          { ip: "24.199.106.240", port: "22224", name: "zagent2760" },
          { ip: "165.22.12.89", port: "22224", name: "zagent2688" },
          { ip: "45.77.7.51", port: "22224", name: "zagent2604" },
          { ip: "149.28.193.59", port: "22224", name: "zagent2608" },
          { ip: "209.222.21.108", port: "22224", name: "zagent1640" },
          { ip: "143.198.28.175", port: "22224", name: "zagent2660" },
          { ip: "137.184.202.179", port: "22224", name: "zagent2714" },
          { ip: "45.63.10.110", port: "22224", name: "zagent2551" },
          { ip: "24.199.97.164", port: "22224", name: "zagent2771" }
        ],
        fallback_agents: {
          agents: [
            { ip: "147.182.169.62", name: "zagent2948" },
            { ip: "207.148.24.201", name: "zagent43" }
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
