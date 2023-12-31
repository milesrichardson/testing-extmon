try {
  function challengegetstrength(x, e, a) {
    var s = 25;
    return a ? zxcvbnts.calculatePasswordStrength(e, x) * s : calculateStrengthLegacy(e, x) * s;
  }
  function calculateStrengthLegacy(x, e) {
    var x, e;
    if ("undefined" != typeof zxcvbn)
      return (
        (x = x ? x.substring(0, 50) : ""), (e = e ? e.substring(0, 50).toLowerCase() : ""), zxcvbn(x, [e, "lastpass", "lastpass.com"]).score
      );
    console.error("No zxcvbn functionality available"), sendPostMessage();
  }
  function challengecomputescore_async(
    R,
    e,
    F,
    d,
    c,
    a,
    s,
    t,
    L,
    C,
    W,
    n,
    H,
    r,
    o,
    i,
    J,
    l,
    g,
    v,
    u,
    h,
    p,
    m,
    f,
    b,
    _,
    y,
    z,
    K,
    S,
    w,
    j,
    X,
    O,
    P,
    q,
    G,
    I,
    Z,
    B,
    Q,
    V
  ) {
    function Y() {
      postMessage({
        cmd: "report",
        runtimesec: void 0 !== ux ? ux : void 0,
        calcTimeMs: void 0 !== startTime ? new Date().getTime() - startTime : void 0,
        g_totalscore: void 0 !== e ? e : void 0,
        g_aSites: void 0 !== d ? d : void 0,
        g_numsites: void 0 !== c ? c : 0,
        g_numblanksites: void 0 !== a ? a : 0,
        g_avgpasswordlength: void 0 !== s ? s : 0,
        g_avgstrength: "undefined" != typeof g_avgstrength ? g_avgstrength : 0,
        g_aPasswords: void 0 !== t ? t : {},
        g_MAXNUMCOMPUTESCORE: void 0 !== L ? L : 0,
        g_numduppasswords: void 0 !== C ? C : 0,
        g_numdupsites: void 0 !== W ? W : 0,
        g_usernames: void 0 !== n ? n : [],
        WEAKPASSWORDSCORE: void 0 !== H ? H : 50,
        g_strengthscore: void 0 !== r ? r : 0,
        g_countscore: void 0 !== o ? o : 0,
        g_numweak: void 0 !== i ? i : 0,
        sharedavgstrength: void 0 !== J ? J : [],
        SharedAccounts: void 0 !== l ? l : [],
        g_runtimems: void 0 !== g ? g : 0,
        sfcounts: void 0 !== v ? v : [],
        sharedstrengthscore: void 0 !== u ? u : [],
        sharedblanksites: void 0 !== h ? h : [],
        sharedweak: void 0 !== p ? p : [],
        sharedavgpasswordlength: void 0 !== m ? m : [],
        SharedPasswords: void 0 !== f ? f : [],
        sharedcountscore: void 0 !== b ? b : [],
        NonSharedAccounts: void 0 !== _ ? _ : [],
        g_SFNames: void 0 !== y ? y : [],
        AllSFNames: void 0 !== z ? z : [],
        sharedtotalscore: void 0 !== K ? K : [],
        g_numvulnerablesites: void 0 !== S ? S : 0,
        g_allPasswords: void 0 !== w ? w : {},
        g_reuse: void 0 !== j ? j : void 0,
        g_blanksites: void 0 !== X ? X : void 0,
        g_allnumduppasswords: void 0 !== O ? O : 0
      });
    }
    if (0 !== e) Y(), console.log("Not processing security score");
    else {
      var U,
        $ = 0,
        x,
        xx,
        T,
        ex,
        ax,
        sx,
        D;
      for (
        P = void 0 === P ? {} : P,
          void 0 !== d[(U = void 0 === R ? 0 : R)] && void 0 !== d[U].sfname && (x = d[U].sfname),
          void 0 === u && (u = []),
          void 0 === h && (h = []),
          void 0 === p && (p = []),
          void 0 === m && (m = []),
          void 0 === f && (f = []),
          void 0 === b && (b = []),
          void 0 === _ && (_ = []),
          void 0 === y && (y = []),
          void 0 === z && (z = []),
          void 0 === (v = void 0 === v ? [] : v)[(x = void 0 === x ? "nonshared" : x)] && (v[x] = 0),
          v[x]++,
          void 0 === R && (g_challengeregexcache = []);
        U < c;
        ++U
      ) {
        var x,
          M =
            ("function" == typeof reportprogress && reportprogress(U, c),
            (x = "nonshared"),
            void 0 !== d[U].sfname && (x = d[U].sfname),
            d[U].usernamedec),
          k,
          k = (k = d[U].passworddec) || "",
          A = d[U].passworddecfix,
          N = d[U].domain2lvl,
          tx = void 0 !== d[U].realdomain2lvl ? d[U].realdomain2lvl : N,
          nx = void 0 !== d[U].vulnerable,
          tx =
            (void 0 === a && (a = 0),
            void 0 === S && (S = 0),
            void 0 === h[x] && (h[x] = 0),
            void 0 === u[x] && (u[x] = 0),
            "function" == typeof get_sitepwlen ? get_sitepwlen(tx) : 1),
          rx = G && -1 !== Object.values(G).indexOf(d[U].id),
          nx;
        if (
          (nx
            ? (console.log("challengecomputescore_async : Found vulnerable site domain2lvl=" + N + " sfname=" + x),
              "nonshared" == x && ++S,
              (d[U].challenge_score = 0))
            : 0 < k.length && k.length < tx
            ? (d[U].challenge_score = 0)
            : ((d[U].challenge_score = challengegetstrength(M, k, V)),
              (nx = I && -1 !== Object.values(I).indexOf(d[U].realdomain2lvl)),
              q && (nx || rx) && (d[U].is_excluded = !0)),
          "" == A)
        ) {
          "nonshared" == x && a++, h[x]++, void 0 !== X && X.push(U);
        } else {
          if (
            ("nonshared" == x && (s += k.length),
            void 0 === m[x] && (m[x] = 0),
            (m[x] += k.length),
            void 0 === f[x] && (f[x] = []),
            "nonshared" == x && !rx)
          ) {
            void 0 === t[A] && (t[A] = []),
              (void 0 === t[A][N] || ("function" == typeof t[A][N] && void 0 === t[A][N].push)) && (t[A][N] = []);
            try {
              t[A][N].push(U);
            } catch (x) {
              return void (A =
                k =
                M =
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            }
          }
          if ((void 0 === w && (w = []), !rx)) {
            void 0 === w[A] && ((w[A] = []), (P[A] = [])),
              (void 0 === w[A][N] || ("function" == typeof w[A][N] && void 0 === w[A][N].push)) &&
                ((w[A][N] = []), (P[A][N] = { users: [], hasDifferentUser: !1 }));
            try {
              w[A][N].push(U),
                P[A][N].hasDifferentUser ||
                  P[A][N].users.forEach(function (x) {
                    x !== M && (P[A][N].hasDifferentUser = !0);
                  }),
                P[A][N].users.push(M);
            } catch (x) {
              return void (A =
                k =
                M =
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            }
          }
          if ("nonshared" != x) {
            void 0 === f[x][A] && (f[x][A] = []),
              (void 0 === f[x][A][N] || ("function" == typeof f[x][A][N] && void 0 === f[x][A][N].push)) && (f[x][A][N] = []);
            try {
              f[x][A][N].push(U);
            } catch (x) {
              return void (A =
                k =
                M =
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            }
          }
          if (++$ > L) {
            var tx = null;
            try {
              "function" == typeof setTimeout
                ? (tx = setTimeout)
                : "undefined" != typeof LP &&
                  void 0 !== LP.mostRecent &&
                  void 0 !== LP.mostRecent().setTimeout &&
                  (tx = LP.mostRecent().setTimeout);
            } catch (x) {}
            var ox = 0;
            return (
              tx(function () {
                var x;
                999 < d.length &&
                  ((x = Number((((U + 1) / d.length) * 100).toFixed(2))), Math.floor(x) == Math.ceil(x)) &&
                  console.log(x + "% score calculation done"),
                  challengecomputescore_async(
                    U + 1,
                    e,
                    F,
                    d,
                    c,
                    a,
                    s,
                    t,
                    L,
                    C,
                    W,
                    n,
                    H,
                    r,
                    o,
                    i,
                    J,
                    l,
                    g,
                    v,
                    u,
                    h,
                    p,
                    m,
                    f,
                    b,
                    _,
                    y,
                    z,
                    K,
                    S,
                    w,
                    j,
                    X,
                    O,
                    P,
                    q,
                    G,
                    I,
                    Z,
                    B,
                    Q,
                    V
                  );
              }, 0),
              void (A =
                k =
                M =
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            );
          }
        }
        A =
          k =
          M =
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
      }
      for (D in ((g_challengeregexcache = []), (s = c == a ? 0 : Math.round((10 * s) / (c - a)) / 10), t))
        if (((sx = 0), t.hasOwnProperty(D))) {
          var T,
            ix = !1,
            E;
          for (E in (T = t[D])) P[D][E].hasDifferentUser && (ix = !0), T.hasOwnProperty(E) && sx++;
          if ((1 == sx && !ix) || "" == D) {
            if (void 0 !== j) for (var dx in t[D]) for (var cx in t[D][dx]) delete j[t[D][dx][cx]];
            delete t[D];
          } else {
            for (var E in (++C, (ax = 0), T)) T.hasOwnProperty(E) && (ax += t[D][E].length);
            for (var E in ((W += ax), T))
              if (T.hasOwnProperty(E))
                for (xx in (ex = t[D][E]))
                  ex.hasOwnProperty(xx) &&
                    ((U = t[D][E][xx]), (d[U].challenge_numduplicates = ax), (d[U].challenge_duplicatescore = d[U].challenge_score / sx));
          }
        }
      (D =
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),
        hx(Z);
      var D =
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        lx = 0,
        gx,
        gx,
        vx;
      for (U = 0; U < d.length; ++U)
        void 0 !== d[U].sfname && (x = d[U].sfname),
          void 0 === d[U].sfname && (x = "nonshared"),
          void 0 === p[x] && (p[x] = 0),
          (d[U].challenge_scorefinal = d[U].challenge_score),
          !d[U].usernamedec ||
            -1 === d[U].usernamedec.indexOf("@") ||
            d[U].usernamedec in n ||
            ((n[d[U].usernamedec] = []),
            (n[d[U].usernamedec].hash = lp_sha2lib.sha256(d[U].usernamedec)),
            (n[d[U].usernamedec].link = d[U].link)),
          void 0 !== d[U].challenge_dictionary && void 0 !== d[U].challenge_duplicatescore
            ? ((d[U].challenge_scorefinal = 0.5 * d[U].challenge_duplicatescore), "nonshared" == x && ++i, "nonshared" != x && ++p[x])
            : void 0 !== d[U].challenge_dictionary
            ? ((d[U].challenge_scorefinal = 0.5 * d[U].challenge_scorefinal), "nonshared" == x && ++i, "nonshared" != x && ++p[x])
            : void 0 !== d[U].challenge_duplicatescore
            ? ((d[U].challenge_scorefinal = d[U].challenge_duplicatescore),
              void 0 === d[U].sfname && (r += B && px(d[U].id) ? 0 : d[U].challenge_duplicatescore),
              void 0 !== d[U].sfname && (u[x] += d[U].challenge_duplicatescore))
            : (d[U].challenge_score < H && "" != d[U].passworddecfix && ("nonshared" == x && ++i, "nonshared" != x) && ++p[x],
              "nonshared" == x &&
                (d[U].is_excluded && !0 === d[U].is_excluded && "" !== d[U].passworddec
                  ? lx++
                  : (r += B && px(d[U].id) ? 0 : d[U].challenge_score),
                (g_avgstrength = c == a ? 0 : Math.round((10 * r) / (c - a - lx)) / 10),
                0 != _.length) &&
                (g_avgstrength = _.length == a ? 0 : Math.round((10 * r) / (_.length - a - lx)) / 10),
              "nonshared" != x &&
                ((u[x] += d[U].challenge_score), (J[x] = v[x] == h[x] ? 0 : Math.round((10 * u[x]) / (l[x].length - h[x])) / 10)),
              void 0 === b[x] && (b[x] = 0),
              70 <= d[U].challenge_score && void 0 === d[U].sfname && (o += 2),
              70 <= d[U].challenge_score && void 0 !== d[U].sfname && (b[x] += 2));
      100 < o && (o = 100),
        100 < b[x] && (b[x] = 100),
        0 < (c = void 0 !== _ && 0 != _.length ? _.length : c) - a &&
          (B
            ? ((vx = 7),
              (gx = 70) < (e = Math.round((r / (c - a - lx)) * 7) / 10) &&
                (console.error("Password part of total score is over 70"), (e = gx)))
            : (gx = 100) < (e = Math.round(10 * ((r / (c - a - lx)) * 0.8 + o / 10)) / 10) && (e = gx));
      for (var U = 0; U < z.length; U++)
        (x = z[U]),
          void 0 === l[x] && (l[x] = []),
          void 0 === h[x] && (h[x] = 0),
          0 < l[x].length - h[x] && (K[x] = Math.round(10 * ((u[x] / (l[x].length - h[x])) * 0.8 + b[x] / 10)) / 10);
      g = new Date().getTime() - g;
      var ux = Math.round(g / 1e3);
      Y();
    }
    function hx(x) {
      var e,
        a,
        s,
        t,
        n,
        r,
        r =
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
      for (r in (void 0 === w && ((w = {}), (g_allnumdupsites = c)), w))
        if (w.hasOwnProperty(r)) {
          var a,
            n = 0,
            o = !1,
            i;
          for (i in (a = w[r])) P[r][i].hasDifferentUser && (o = !0), a.hasOwnProperty(i) && ++n;
          if ((1 == n && !o) || "" == r) delete w[r];
          else {
            for (var i in (void 0 === O && (O = 0), ++O, (t = 0), "undefined" == typeof g_allnumdupsites && (g_allnumdupsites = 0), a))
              a.hasOwnProperty(i) && (t += w[r][i].length);
            for (var i in ((g_allnumdupsites += t), a))
              if (a.hasOwnProperty(i))
                for (var e in (s = w[r][i]))
                  s.hasOwnProperty(e) &&
                    ((U = w[r][i][e]), void 0 !== d[U]) &&
                    x &&
                    ((d[U].challenge_numduplicates = t), (d[U].challenge_duplicatescore = d[U].challenge_score / n));
          }
        }
    }
    function px(e) {
      var a = JSON.parse(F),
        x = a[e] && "1" === a[e].last_credential_monitoring_state,
        s = a[e] && 1 < Number(a[e].last_credential_monitoring_state),
        t = Q.filter(function (x) {
          return lp_sha2lib.sha256(a[e].unencryptedUsername) === x.usernameHash && -1 < a[e].url.indexOf(x.url);
        });
      return x || (t.length && !s);
    }
  }
  var baseUrl, startTime, zxcvbntsdictionary, zxcvbntsoptions;
  "function" == typeof importScripts
    ? ("https:" == location.protocol
        ? (importScripts("/js-thirdparty/zxcvbn.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-core.min.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-language-common.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-language-en.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-language-de.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-language-es-es.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-language-fr.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-language-it.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-language-nl-be.js"),
          importScripts("/js-thirdparty/zxcvbn-ts-language-pt-br.js"),
          importScripts("/js/sjcl/sjcl.js"),
          importScripts("/js/sha256.js"))
        : ((baseUrl = location.pathname.slice(0, -26)),
          importScripts(baseUrl + "/zxcvbn.js"),
          importScripts(baseUrl + "/zxcvbn-ts-core.min.js"),
          importScripts(baseUrl + "/zxcvbn-ts-language-common.js"),
          importScripts(baseUrl + "/zxcvbn-ts-language-en.js"),
          importScripts(baseUrl + "/zxcvbn-ts-language-de.js"),
          importScripts(baseUrl + "/zxcvbn-ts-language-es-es.js"),
          importScripts(baseUrl + "/zxcvbn-ts-language-fr.js"),
          importScripts(baseUrl + "/zxcvbn-ts-language-it.js"),
          importScripts(baseUrl + "/zxcvbn-ts-language-nl-be.js"),
          importScripts(baseUrl + "/zxcvbn-ts-language-pt-br.js"),
          importScripts(baseUrl + "/sjcl.js"),
          importScripts(baseUrl + "/sha256.js")),
      (onmessage = function (x) {
        "zxcvbn" === x.data.source &&
          "challengecomputescore_async" === x.data.cmd &&
          ((startTime = new Date().getTime()),
          challengecomputescore_async(
            x.data.curr,
            x.data.g_totalscore,
            JSON.parse(x.data.g_sites),
            x.data.g_aSites && x.data.g_aSites.length ? x.data.g_aSites : [],
            x.data.g_numsites,
            x.data.g_numblanksites,
            x.data.g_avgpasswordlength,
            x.data.g_aPasswords,
            x.data.g_MAXNUMCOMPUTESCORE,
            x.data.g_numduppasswords,
            x.data.g_numdupsites,
            x.data.g_usernames,
            x.data.WEAKPASSWORDSCORE,
            x.data.g_strengthscore,
            x.data.g_countscore,
            x.data.g_numweak,
            x.data.sharedavgstrength,
            x.data.SharedAccounts,
            x.data.g_runtimems,
            x.data.sfcounts,
            x.data.sharedstrengthscore,
            x.data.sharedblanksites,
            x.data.sharedweak,
            x.data.sharedavgpasswordlength,
            x.data.SharedPasswords,
            x.data.sharedcountscore,
            x.data.NonSharedAccounts,
            x.data.g_SFNames,
            x.data.AllSFNames,
            x.data.sharedtotalscore,
            x.data.g_numvulnerablesites,
            x.data.g_allPasswords,
            x.data.g_reuse,
            x.data.g_blanksites,
            x.data.g_allnumduppasswords,
            x.data.equivalentDomainCheckList,
            x.data.isExcludeSwitchedOn,
            x.data.excludedPasswords,
            x.data.domainsForAutomaticPasswordExclude,
            x.data.countReusedOnSharedItems,
            x.data.isFeatureEnabledSecurityDashboard2_0,
            x.data.dwmAlerts,
            x.data.isFeatureEnabledPasswordStrengthHardening
          ));
      }),
      (zxcvbntsdictionary = {}),
      zxcvbnts.addToDictionary(zxcvbntsdictionary, zxcvbnts["language-common"].dictionary),
      zxcvbnts.addToDictionary(zxcvbntsdictionary, zxcvbnts["language-en"].dictionary),
      zxcvbnts.addToDictionary(zxcvbntsdictionary, zxcvbnts["language-de"].dictionary),
      zxcvbnts.addToDictionary(zxcvbntsdictionary, zxcvbnts["language-es-es"].dictionary),
      zxcvbnts.addToDictionary(zxcvbntsdictionary, zxcvbnts["language-fr"].dictionary),
      zxcvbnts.addToDictionary(zxcvbntsdictionary, zxcvbnts["language-it"].dictionary),
      zxcvbnts.addToDictionary(zxcvbntsdictionary, zxcvbnts["language-nl-be"].dictionary),
      zxcvbnts.addToDictionary(zxcvbntsdictionary, zxcvbnts["language-pt-br"].dictionary),
      (zxcvbntsoptions = {
        useLevenshteinDistance: !1,
        translations: zxcvbnts["language-en"].translations,
        graphs: zxcvbnts["language-common"].adjacencyGraphs,
        dictionary: zxcvbntsdictionary
      }),
      zxcvbnts.core.zxcvbnOptions.setOptions(zxcvbntsoptions))
    : console.info("Zxcvbn-Worker initial phase done");
} catch (x) {
  console.error("inside-zxcvbn-worker", x);
}
