var apiGateway = apiGateway || {};
(apiGateway.core = apiGateway.core || {}),
  (apiGateway.core.apiGatewayClientFactory = {}),
  (apiGateway.core.apiGatewayClientFactory.newClient = function (e, a) {
    var t = {},
      r = apiGateway.core.sigV4ClientFactory.newClient(a),
      i = apiGateway.core.simpleHttpClientFactory.newClient(e);
    return (
      (t.makeRequest = function (e, a, t, y) {
        var o = i;
        return (
          void 0 !== y && "" !== y && null !== y && (e.headers["x-api-key"] = y),
          (void 0 !== e.body && "" !== e.body && null !== e.body && 0 !== Object.keys(e.body).length) || (e.body = void 0),
          (e.headers = apiGateway.core.utils.mergeInto(e.headers, t.headers)),
          (e.queryParams = apiGateway.core.utils.mergeInto(e.queryParams, t.queryParams)),
          "AWS_IAM" === a && (o = r),
          o.makeRequest(e)
        );
      }),
      t
    );
  });
