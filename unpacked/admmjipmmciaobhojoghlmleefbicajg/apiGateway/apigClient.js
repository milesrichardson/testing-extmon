var apigClientFactory = {
  newClient: function (e) {
    var a = {};
    void 0 === e &&
      (e = {
        accessKey: "",
        secretKey: "",
        sessionToken: "",
        region: "",
        apiKey: void 0,
        defaultContentType: "application/json",
        defaultAcceptType: "application/json"
      }),
      void 0 === e.accessKey && (e.accessKey = ""),
      void 0 === e.secretKey && (e.secretKey = ""),
      void 0 === e.apiKey && (e.apiKey = ""),
      void 0 === e.sessionToken && (e.sessionToken = ""),
      void 0 === e.region && (e.region = "us-east-1"),
      void 0 === e.defaultContentType && (e.defaultContentType = "application/json"),
      void 0 === e.defaultAcceptType && (e.defaultAcceptType = "application/json");
    var t = "https://gz0s1l0bj0.execute-api.us-east-1.amazonaws.com/PROD",
      r = /(^https?:\/\/[^\/]+)/g.exec(t)[1],
      s = t.substring(r.length),
      o = {
        accessKey: e.accessKey,
        secretKey: e.secretKey,
        sessionToken: e.sessionToken,
        serviceName: "execute-api",
        region: e.region,
        endpoint: r,
        defaultContentType: e.defaultContentType,
        defaultAcceptType: e.defaultAcceptType
      },
      i = "NONE";
    void 0 !== o.accessKey && "" !== o.accessKey && void 0 !== o.secretKey && "" !== o.secretKey && (i = "AWS_IAM");
    var p = { endpoint: r, defaultContentType: e.defaultContentType, defaultAcceptType: e.defaultAcceptType },
      c = apiGateway.core.apiGatewayClientFactory.newClient(p, o);
    return (
      (a.deviceGet = function (a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
        var o = {
          verb: "get".toUpperCase(),
          path: s + uritemplate("/device").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
          headers: apiGateway.core.utils.parseParametersToObject(a, []),
          queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
          body: t
        };
        return c.makeRequest(o, i, r, e.apiKey);
      }),
      (a.devicePut = function (a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, ["body", "x-symc-access-token"], ["body"]);
        var o = {
          verb: "put".toUpperCase(),
          path: s + uritemplate("/device").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
          headers: apiGateway.core.utils.parseParametersToObject(a, ["x-symc-access-token"]),
          queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
          body: t
        };
        return c.makeRequest(o, i, r, e.apiKey);
      }),
      (a.deviceDelete = function (a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, ["body"], ["body"]);
        var o = {
          verb: "delete".toUpperCase(),
          path: s + uritemplate("/device").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
          headers: apiGateway.core.utils.parseParametersToObject(a, []),
          queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
          body: t
        };
        return c.makeRequest(o, i, r, e.apiKey);
      }),
      (a.deviceOptions = function (a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
        var o = {
          verb: "options".toUpperCase(),
          path: s + uritemplate("/device").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
          headers: apiGateway.core.utils.parseParametersToObject(a, []),
          queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
          body: t
        };
        return c.makeRequest(o, i, r, e.apiKey);
      }),
      (a.unlockRequestPost = function (a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, ["body"], ["body"]);
        var o = {
          verb: "post".toUpperCase(),
          path: s + uritemplate("/unlock-request").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
          headers: apiGateway.core.utils.parseParametersToObject(a, []),
          queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
          body: t
        };
        return c.makeRequest(o, i, r, e.apiKey);
      }),
      (a.unlockRequestOptions = function (a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
        var o = {
          verb: "options".toUpperCase(),
          path: s + uritemplate("/unlock-request").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
          headers: apiGateway.core.utils.parseParametersToObject(a, []),
          queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
          body: t
        };
        return c.makeRequest(o, i, r, e.apiKey);
      }),
      (a.unlockResponsePost = function (a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, ["body"], ["body"]);
        var o = {
          verb: "post".toUpperCase(),
          path: s + uritemplate("/unlock-response").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
          headers: apiGateway.core.utils.parseParametersToObject(a, []),
          queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
          body: t
        };
        return c.makeRequest(o, i, r, e.apiKey);
      }),
      (a.unlockResponseOptions = function (a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
        var o = {
          verb: "options".toUpperCase(),
          path: s + uritemplate("/unlock-response").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
          headers: apiGateway.core.utils.parseParametersToObject(a, []),
          queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
          body: t
        };
        return c.makeRequest(o, i, r, e.apiKey);
      }),
      a
    );
  }
};
