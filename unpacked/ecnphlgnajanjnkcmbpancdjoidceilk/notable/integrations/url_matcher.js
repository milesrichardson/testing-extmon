const UrlMatcher = {
  isGoogleDriveFileViewer: (t) => /^https:\/\/drive\.google\.com\/(open|file\/d\/|document\/d\/)/.test(t),
  isStreamPage: (t) => /^https?:\/\/classroom\.google\.com[^\.]*\/c\/[A-z0-9]+$/.test(t),
  isClassroomCoursePage: (t) => /^https?:\/\/classroom\.google\.com[^\.]*\/c\/[A-z0-9]+/.test(t),
  isClassroomClassworkPage: (t) => /^https?:\/\/classroom\.google\.com[^\.]*\/w\/[A-z0-9]+/.test(t),
  isClassroomGrader: (t) => /^https?:\/\/classroom\.google\.com[^\.]*\/g\/tg\/[^\.]*/.test(t),
  isCourseworkPage: (t) => /^https?:\/\/classroom\.google\.com[^\.]*\/w\/[A-z0-9]+/.test(t),
  isStudentwork: (t) => /^https?:\/\/classroom\.google\.com[^\.]*\/c\/[\w]+\/a\/[\w]+\/submissions/.test(t),
  extractClassroomAlternateId(t) {
    const o = t.match(/^https?:\/\/classroom\.google\.com[^\.]*\/[cw]\/([A-z0-9]+)/);
    return o && o.length > 1 ? o[1] : null;
  },
  extractDataFromAssignmentPage(t) {
    const o = t.match(/\/u\/(\w+)\/c\/(\w+)\/a\/(\w+)/),
      s = t.match(/\/c\/(\w+)\/a\/(\w+)/);
    return o ? [o[2], o[3], o[1]] : s ? [s[1], s[2], "0"] : null;
  },
  extraDataFromGraderPage(t) {
    const o = t.match(/\/u\/(\w+)\/g\/tg\/(\w+)\/(\w+)/),
      s = t.match(/\/g\/tg\/(\w+)\/(\w+)/);
    return o ? [o[2], o[3], o[1]] : s ? [s[1], s[2], "0"] : null;
  }
};
window.urlMatcher = UrlMatcher;
try {
  module.exports = UrlMatcher;
} catch (t) {}
