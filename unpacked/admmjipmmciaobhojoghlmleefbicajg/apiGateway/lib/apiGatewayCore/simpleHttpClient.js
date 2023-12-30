var apiGateway = apiGateway || {};
(apiGateway.core = apiGateway.core || {}),
  (apiGateway.core.simpleHttpClientFactory = {}),
  (apiGateway.core.simpleHttpClientFactory.newClient = function (e) {
    var t = {};
    return (
      (t.endpoint = apiGateway.core.utils.assertDefined(e.endpoint, "endpoint")),
      (t.makeRequest = function (t) {
        var a = apiGateway.core.utils.assertDefined(t.verb, "verb"),
          r = apiGateway.core.utils.assertDefined(t.path, "path"),
          i = apiGateway.core.utils.copy(t.queryParams);
        void 0 === i && (i = {});
        var n = apiGateway.core.utils.copy(t.headers);
        void 0 === n && (n = {}),
          void 0 === n["Content-Type"] && (n["Content-Type"] = e.defaultContentType),
          void 0 === n.Accept && (n.Accept = e.defaultAcceptType);
        var o = apiGateway.core.utils.copy(t.body);
        void 0 === o && (o = "");
        var p = e.endpoint + r,
          c = (function (e) {
            if (Object.keys(e).length < 1) return "";
            var t = "";
            for (var a in e) e.hasOwnProperty(a) && (t += encodeURIComponent(a) + "=" + encodeURIComponent(e[a]) + "&");
            return t.substr(0, t.length - 1);
          })(i);
        return "" != c && (p += "?" + c), axios({ method: a, url: p, headers: n, data: o });
      }),
      t
    );
  });
