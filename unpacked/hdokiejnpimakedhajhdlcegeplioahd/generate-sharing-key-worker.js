try {
  function generateSharingKeys(s) {
    var e = new RSAKey();
    generate_key(e, function (e) {
      var r = encode_public_key(e),
        e = encode_private_key(e),
        e = rsa_encrypt_privatekey(e, s).toUpperCase();
      postMessage({ cmd: "sharing_key_generated", publickey: r, privatekeyenc: e });
    });
  }
  "function" == typeof importScripts &&
    "https:" == location.protocol &&
    (importScripts("/newvault/logger.js"),
    importScripts("/js/prng4.js"),
    importScripts("/js/rng.js"),
    importScripts("/js/jsbn.js"),
    importScripts("/js/jsbn2.js"),
    importScripts("/js/rsa.js"),
    importScripts("/js/rsa3.js"),
    importScripts("/js/AES.js"),
    importScripts("/js/rsa_privkey.js")),
    (onmessage = function (e) {
      e && e.data && "generate_sharing_key" === e.data.cmd && generateSharingKeys(e.data.local_key);
    });
} catch (e) {
  console.error("inside-generate-sharing-key-worker", e);
}
