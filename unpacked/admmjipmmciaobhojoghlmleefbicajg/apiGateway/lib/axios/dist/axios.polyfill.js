function axios(e) {
  const o = e.url,
    t = e.method,
    a = e.data,
    s = { method: t, headers: e.headers };
  return a && (s.body = a), fetch(o, s);
}
this.axios = axios;
