var apiGateway = apiGateway || {};
(apiGateway.core = apiGateway.core || {}),
  (apiGateway.core.sigV4ClientFactory = {}),
  (apiGateway.core.sigV4ClientFactory.newClient = function (e) {
    var t = "AWS4-HMAC-SHA256",
      n = "aws4_request",
      r = "host";
    function a(e) {
      return CryptoJS.SHA256(e);
    }
    function o(e) {
      return e.toString(CryptoJS.enc.Hex);
    }
    function i(e, t) {
      return CryptoJS.HmacSHA256(t, e, { asBytes: !0 });
    }
    function s(e, t, n, r, i) {
      return (
        e +
        "\n" +
        (encodeURI(t) + "\n") +
        c(n) +
        "\n" +
        (function (e) {
          var t = "",
            n = [];
          for (var r in e) e.hasOwnProperty(r) && n.push(r);
          n.sort();
          for (var a = 0; a < n.length; a++) t += n[a].toLowerCase() + ":" + e[n[a]] + "\n";
          return t;
        })(r) +
        "\n" +
        u(r) +
        "\n" +
        o(a(i))
      );
    }
    function c(e) {
      if (Object.keys(e).length < 1) return "";
      var t = [];
      for (var n in e) e.hasOwnProperty(n) && t.push(n);
      t.sort();
      for (var r, a = "", o = 0; o < t.length; o++)
        a +=
          t[o] +
          "=" +
          ((r = e[t[o]]),
          encodeURIComponent(r).replace(/[!'()*]/g, function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
          }) + "&");
      return a.substr(0, a.length - 1);
    }
    function u(e) {
      var t = [];
      for (var n in e) e.hasOwnProperty(n) && t.push(n.toLowerCase());
      return t.sort(), t.join(";");
    }
    var p = {};
    return (
      void 0 === e.accessKey ||
        void 0 === e.secretKey ||
        ((p.accessKey = apiGateway.core.utils.assertDefined(e.accessKey, "accessKey")),
        (p.secretKey = apiGateway.core.utils.assertDefined(e.secretKey, "secretKey")),
        (p.sessionToken = e.sessionToken),
        (p.serviceName = apiGateway.core.utils.assertDefined(e.serviceName, "serviceName")),
        (p.region = apiGateway.core.utils.assertDefined(e.region, "region")),
        (p.endpoint = apiGateway.core.utils.assertDefined(e.endpoint, "endpoint")),
        (p.makeRequest = function (y) {
          var d = apiGateway.core.utils.assertDefined(y.verb, "verb"),
            f = apiGateway.core.utils.assertDefined(y.path, "path"),
            v = apiGateway.core.utils.copy(y.queryParams);
          void 0 === v && (v = {});
          var l = apiGateway.core.utils.copy(y.headers);
          void 0 === l && (l = {}),
            void 0 === l["Content-Type"] && (l["Content-Type"] = e.defaultContentType),
            void 0 === l.Accept && (l.Accept = e.defaultAcceptType);
          var w = apiGateway.core.utils.copy(y.body);
          ("" !== (w = void 0 === w || "GET" === d ? "" : JSON.stringify(w)) && null != w) || delete l["Content-Type"];
          var C = new Date()
            .toISOString()
            .replace(/\.\d{3}Z$/, "Z")
            .replace(/[:\-]|\.\d{3}/g, "");
          l["x-amz-date"] = C;
          const g = new URL(p.endpoint);
          l[r] = g.hostname;
          var h = (function (e) {
              return o(a(e));
            })(s(d, f, v, l, w)),
            G = (function (e, t, r) {
              return e.substr(0, 8) + "/" + t + "/" + r + "/" + n;
            })(C, p.region, p.serviceName),
            S = (function (e, n, r) {
              return t + "\n" + e + "\n" + n + "\n" + r;
            })(C, G, h),
            T = (function (e, t, r, a) {
              return i(i(i(i("AWS4" + e, t.substr(0, 8)), r), a), n);
            })(p.secretKey, C, p.region, p.serviceName),
            m = (function (e, t) {
              return o(i(e, t));
            })(T, S);
          (l.Authorization = (function (e, n, r, a) {
            return t + " Credential=" + e + "/" + n + ", SignedHeaders=" + u(r) + ", Signature=" + a;
          })(p.accessKey, G, l, m)),
            void 0 !== p.sessionToken && "" !== p.sessionToken && (l["x-amz-security-token"] = p.sessionToken),
            delete l[r];
          var A = e.endpoint + f,
            K = c(v);
          return (
            "" != K && (A += "?" + K),
            void 0 === l["Content-Type"] && (l["Content-Type"] = e.defaultContentType),
            axios({ method: d, url: A, headers: l, data: w })
          );
        })),
      p
    );
  });
