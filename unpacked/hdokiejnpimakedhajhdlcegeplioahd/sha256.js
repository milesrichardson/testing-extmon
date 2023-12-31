var lp_sha2lib = SHA256lib();
function SHA256(t, e) {
  return lp_sha2lib.sha256(t, e);
}
function SHA256_crypt(t) {
  var e = rand_str(16);
  return lp_sha2lib.crypt_sha256(t, e, 5e3, null);
}
function ab2bin(t) {
  for (var e = 1024, n = new Uint8Array(t), o = "", a = 0; a < Math.ceil(t.byteLength / e); a++)
    o += String.fromCharCode.apply(null, n.slice(a * e, e * (a + 1)));
  return o;
}
function bin2ab(t) {
  for (var e = new ArrayBuffer(t.length), n = new Uint8Array(e), o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
  return e;
}
function lp_pbkdf2_sync(e, t, n, o, a) {
  var r, r, r, r, r;
  return "undefined" != typeof document &&
    document.getElementById("lpplugin") &&
    "function" == typeof document.getElementById("lpplugin").pbkdf2
    ? ((r = document.getElementById("lpplugin").pbkdf2(btoa(e), btoa(t), n, o)), "function" == typeof a && a(AES.hex2bin(r), e, n), r)
    : ("undefined" != typeof g_oldpbkdf2 && 1 == g_oldpbkdf2) ||
      "function" != typeof lpusexpcomencrypt ||
      !lpusexpcomencrypt() ||
      "function" != typeof lpxpcomobj.pbkdf2
    ? ("undefined" != typeof g_oldpbkdf2 && 1 == g_oldpbkdf2) ||
      "function" != typeof lpuseopensslpbkdf2 ||
      !lpuseopensslpbkdf2() ||
      "function" != typeof lpopensslpbkdf2
      ? ("undefined" != typeof g_oldpbkdf2 && 1 == g_oldpbkdf2) ||
        "function" != typeof have_binary_function ||
        !have_binary_function("pbkdf2") ||
        "function" != typeof a
        ? ("undefined" != typeof g_oldpbkdf2 && 1 == g_oldpbkdf2) ||
          "function" != typeof have_nplastpass ||
          !have_nplastpass() ||
          "undefined" == typeof g_nplastpass ||
          "function" != typeof g_nplastpass.pbkdf2
          ? ("undefined" != typeof g_oldpbkdf2 && 1 == g_oldpbkdf2) ||
            "function" != typeof have_pplastpass ||
            !have_pplastpass() ||
            "function" != typeof a
            ? "undefined" == typeof lptoolband ||
              "undefined" == typeof lptoolbandcall ||
              "string" != typeof (r = lptoolbandcall(["lppbkdf2", btoa(e), btoa(t), parseInt(n), o])) ||
              0 == r.length
              ? lp_sha2lib.pbkdf2(e, t, n, o, a)
              : ("function" == typeof a && a(AES.hex2bin(r), e, n), r)
            : pplastpass_send_message(
                { cmd: "pbkdf2", password: btoa(e), salt: btoa(t), num_iterations: parseInt(n), num_bytes: o },
                function (t) {
                  a(AES.hex2bin(t), e, n);
                }
              )
          : ((r = g_nplastpass.pbkdf2(btoa(e), btoa(t), n, o)), "function" == typeof a && a(AES.hex2bin(r), e, n), r)
        : call_binary_function("pbkdf2", btoa(e), btoa(t), parseInt(n), o, function (t) {
            a(AES.hex2bin(t), e, n);
          })
      : ((r = lpopensslpbkdf2(e, t, n, o)), "function" == typeof a && a(AES.hex2bin(r), e, n), r)
    : ((r = lpxpcomobj.pbkdf2(btoa(e), btoa(t), n, o)), "function" == typeof a && a(AES.hex2bin(r), e, n), r);
}
function lp_pbkdf2(e, n, o, t, a) {
  if (
    !(a && "undefined" != typeof crypto && crypto.subtle && crypto.subtle.importKey && crypto.subtle.deriveKey && crypto.subtle.exportKey)
  )
    return lp_pbkdf2_sync(e, n, o, t, a);
  var r = crypto.subtle
    .importKey("raw", bin2ab(e), { name: "PBKDF2" }, !1, ["deriveBits", "deriveKey"])
    .then(function (t) {
      return crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: bin2ab(n), iterations: parseInt(o, 10), hash: "SHA-256" },
        t,
        { name: "AES-CBC", length: 256 },
        !0,
        ["encrypt", "decrypt"]
      );
    })
    .then(function (t) {
      return crypto.subtle.exportKey("raw", t);
    })
    .then(function (t) {
      a(ab2bin(t), e, o);
    })
    .catch(function () {
      lp_pbkdf2_sync(e, n, o, t, a);
    });
}
function SHA256lib() {
  function p(t) {
    t = (t = null == t ? "" : t).replace(/\r\n/g, "\n");
    for (var e = "", n = 0; n < t.length; n++) {
      var o = t.charCodeAt(n);
      o < 128
        ? (e += String.fromCharCode(o))
        : (e =
            127 < o && o < 2048
              ? (e += String.fromCharCode((o >> 6) | 192)) + String.fromCharCode((63 & o) | 128)
              : (e = (e += String.fromCharCode((o >> 12) | 224)) + String.fromCharCode(((o >> 6) & 63) | 128)) +
                String.fromCharCode((63 & o) | 128));
    }
    return e;
  }
  function m(t, e, n, o) {
    var a = "./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      r = (t << 16) | (e << 8) | n;
    out = "";
    for (var s = 0; s < o; s++) (out += a.charAt(63 & r)), (r >>>= 6);
    return out;
  }
  return {
    sha256: function (t, e) {
      t = p(t);
      for (var n = [], o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
      t = sjcl.codec.bytes.toBits(n);
      var a = sjcl.hash.sha256.hash(t, 8 * t.length);
      if (void 0 === e || 1 != e) return sjcl.codec.hex.fromBits(a);
      for (var r = sjcl.codec.bytes.fromBits(a), s = [], o = 0; o < r.length / 4; o++)
        s[o] = (r[4 * o] << 24) | (r[4 * o + 1] << 16) | (r[4 * o + 2] << 8) | r[4 * o + 3];
      return s;
    },
    sha512: function (t) {
      for (var e = [], n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
      t = sjcl.codec.bytes.toBits(e);
      var o = sjcl.hash.sha512.hash(t, 8 * t.length);
      return sjcl.codec.hex.fromBits(o);
    },
    crypt_sha256: function (t, e, n, o) {
      var a = [],
        r = [];
      16 < e.length && (e = e.substr(0, 16)), n < 1e3 && (n = 1e3);
      for (var s = 0; s < t.length; s++) a[s] = t.charCodeAt(s);
      for (s = 0; s < e.length; s++) r[s] = e.charCodeAt(s);
      (password_bits = sjcl.codec.bytes.toBits(a)), (salt_bits = sjcl.codec.bytes.toBits(r));
      for (
        var p = new sjcl.hash.sha256(),
          f = (p.update(password_bits), p.update(salt_bits), new sjcl.hash.sha256()),
          i = (f.update(password_bits), f.update(salt_bits), f.update(password_bits), f.finalize()),
          l,
          l = t.length;
        32 < l;
        l -= 32
      )
        p.update(i);
      for (p.update(sjcl.bitArray.bitSlice(i, 0, 8 * l)), l = t.length; 0 < l; l >>= 1)
        0 != (1 & l) ? p.update(i) : p.update(password_bits);
      var c = p.finalize(),
        d = new sjcl.hash.sha256();
      for (l = 0; l < t.length; l++) d.update(password_bits);
      var u = d.finalize(),
        b = [];
      for (l = t.length; 32 <= l; l -= 32) b = sjcl.bitArray.concat(b, u);
      var b = sjcl.bitArray.concat(b, sjcl.bitArray.bitSlice(u, 0, 8 * l)),
        h = new sjcl.hash.sha256();
      for (l = 0; l < 16 + sjcl.bitArray.extract(c, 0, 8); l++) h.update(salt_bits);
      var y = h.finalize(),
        _ = [];
      for (l = e.length; 32 <= l; l -= 32) _ = sjcl.bitArray.concat(_, y);
      for (_ = sjcl.bitArray.concat(_, sjcl.bitArray.bitSlice(y, 0, 8 * l)), l = 0; l < n; l++) {
        var g = new sjcl.hash.sha256();
        1 == (1 & l) ? g.update(b) : g.update(c),
          l % 3 != 0 && g.update(_),
          l % 7 != 0 && g.update(b),
          1 == (1 & l) ? g.update(c) : g.update(b),
          (c = g.finalize());
      }
      var f = "$5$",
        v = (5e3 != n && (f += "rounds=" + n + "$"), (f += e + "$"), sjcl.codec.bytes.fromBits(c)),
        f =
          (f =
            (f =
              (f =
                (f =
                  (f =
                    (f =
                      (f =
                        (f = (f = (f += m(v[0], v[10], v[20], 4)) + m(v[21], v[1], v[11], 4)) + m(v[12], v[22], v[2], 4)) +
                        m(v[3], v[13], v[23], 4)) + m(v[24], v[4], v[14], 4)) + m(v[15], v[25], v[5], 4)) + m(v[6], v[16], v[26], 4)) +
                m(v[27], v[7], v[17], 4)) + m(v[18], v[28], v[8], 4)) + m(v[9], v[19], v[29], 4)) + m(0, v[31], v[30], 3);
      if ("function" != typeof o) return f;
      o(f);
    },
    pbkdf2: function (t, e, n, o, a) {
      for (var r = [], s = [], p = 0; p < t.length; p++) r[p] = t.charCodeAt(p);
      for (var p = 0; p < e.length; p++) s[p] = e.charCodeAt(p);
      (t = sjcl.codec.bytes.toBits(r)), (e = sjcl.codec.bytes.toBits(s));
      var n = sjcl.misc.pbkdf2(t, e, n, 8 * o, null, a, null),
        f;
      if ("function" != typeof a) return sjcl.codec.hex.fromBits(n);
    },
    utf8encode: p
  };
}
