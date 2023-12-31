function formcacheset(e, t, l, _) {
  return null == e || null == t || null == l || 0 === t.length || 0 === l.length || null == _ || "FF" == t || "none" == t
    ? null
    : (void 0 === e.g_form_attr_cache && (e.g_form_attr_cache = []),
      null == e.g_form_attr_cache[t] && (e.g_form_attr_cache[t] = {}),
      (e.g_form_attr_cache[t][l] = _),
      !0);
}
function formcacheget(e, t, l) {
  if (null != e && null != t && null != l && 0 !== t.length && 0 !== l.length && !g_ignore_lp_cache) {
    var _;
    if ("FF" != t && "none" != t && void 0 !== e.g_form_attr_cache && null != e.g_form_attr_cache[t] && null != e.g_form_attr_cache[t][l])
      return "object" == typeof (_ = e.g_form_attr_cache[t][l]) && _.tagName && _.nodeName && element_is_detached(e, _, 0)
        ? ((e.g_form_attr_cache[t][l] = null), LPCTR("formcache_miss"), null)
        : (LPCTR("formcache_hit"), _);
    LPCTR("formcache_miss");
  }
  return null;
}
function formcachereset(e) {
  return null != e && (e.g_form_attr_cache = []), !0;
}
function fieldcacheget(e, t, l) {
  if (null != e && null != t && null != l && 0 !== l.length && !g_ignore_lp_cache) {
    if (void 0 !== e.g_field_attr_cache && null != e.g_field_attr_cache[t] && null != e.g_field_attr_cache[t][l])
      return LPCTR("fieldcache_hit"), e.g_field_attr_cache[t][l];
    LPCTR("fieldcache_miss");
  }
  return null;
}
function fieldcacheset(e, t, l, _) {
  return null == e || null == t || null == l || 0 === l.length
    ? null
    : (void 0 === e.g_field_attr_cache && (e.g_field_attr_cache = []),
      null == e.g_field_attr_cache[t] && (e.g_field_attr_cache[t] = {}),
      (e.g_field_attr_cache[t][l] = _),
      !0);
}
function fieldcachedelete(e, t, l) {
  if (!e || !t || !l) return !1;
  if (!g_ignore_lp_cache) {
    if (void 0 === e.g_field_attr_cache) return !1;
    null !== e.g_field_attr_cache[t] && delete e.g_field_attr_cache[t][l];
  }
  return !0;
}
function fieldcachereset(e) {
  return null != e && (e.g_field_attr_cache = []), !0;
}
var tldcache = [];
function gettldcached(t) {
  try {
    var e, e;
    return void 0 !== tldcache[t]
      ? tldcache[t]
      : ((e = "undefined" != typeof punycode ? lp_gettld_url(punycode.URLToASCII(t)) : lp_gettld_url(t)), (tldcache[t] = e));
  } catch (e) {
    return lp_gettld_url(t);
  }
}
function LP_measureTextCacheSet(e, t, l, _) {
  return null == e || null == t || null == l || 0 === t.length || 0 === l.length || null == _
    ? null
    : (void 0 === e.g_LP_measureText_cache && (e.g_LP_measureText_cache = []),
      null == e.g_LP_measureText_cache[l] && (e.g_LP_measureText_cache[l] = {}),
      (e.g_LP_measureText_cache[l][t] = _),
      !0);
}
function LP_measureTextCacheGet(e, t, l) {
  if (null != e && null != t && null != l && 0 !== t.length && 0 !== l.length) {
    if (void 0 !== e.g_LP_measureText_cache && null != e.g_LP_measureText_cache[l] && null != e.g_LP_measureText_cache[l][t])
      return LPCTR("measureText_hit"), e.g_LP_measureText_cache[l][t];
    LPCTR("measureText_miss");
  }
  return null;
}
function LP_eltmap_init(e) {
  return !(!e || g_isie || ("undefined" == typeof Map ? ((e.m_eltmap = null), 1) : ((e.m_eltmap = new Map()), 0)));
}
function LP_eltmap_destroy(e) {
  return !!e && ("undefined" != typeof Map && e.m_eltmap && e.m_eltmap.clear(), !0);
}
function LP_eltmap_prune_zombies(l) {
  if (!l || null === l.m_eltmap || void 0 === l.m_eltmap) return !1;
  try {
    l.m_eltmap.forEach(function (e, t) {
      void 0 === t || (null !== t && null !== l.m_eltmap.get(t).parentNode) || l.m_eltmap.delete(t);
    });
  } catch (e) {
    return verbose_log(e.message), !1;
  }
  return !0;
}
function LP_eltmap_get(e, t) {
  return e && ((null !== e.m_eltmap && void 0 !== e.m_eltmap) || LP_eltmap_init(e)) ? e.m_eltmap.get(t) : null;
}
function LP_eltmap_set(e, t, l) {
  return e && ((null !== e.m_eltmap && void 0 !== e.m_eltmap) || LP_eltmap_init(e)) ? (e.m_eltmap.set(t, l), !0) : null;
}
function LP_eltmap_input_prescan(e) {}
