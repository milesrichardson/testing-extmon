self.addEventListener("UNSTABLE_editor:extensions", (e) => {
  try {
    const { CodeMirror: t, extensions: n } = e.detail,
      { EditorView: o } = t;
    self.__CODE_MIRROR_EDITOR_VIEW = o;
    const r = o.updateListener.of((e) => {
      e.view.dom.dataset.grammarlyText = e.state.doc.toString();
    });
    n.push(r);
  } catch (e) {}
}),
  document.addEventListener("GrammarlyAssistantOverleafScrollEvent", (e) => {
    try {
      const t = document.querySelector(".cm-content"),
        n = self.__CODE_MIRROR_EDITOR_VIEW.findFromDOM(t);
      null == n || n.dispatch({ selection: { anchor: e.detail.anchor }, scrollIntoView: !0 });
    } catch (e) {}
  });
