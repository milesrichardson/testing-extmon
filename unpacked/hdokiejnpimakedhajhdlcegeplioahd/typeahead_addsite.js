!(function (A, a) {
  function n(A, e) {
    var A = A.domain,
      i = A.indexOf("."),
      i = A.charAt(0).toUpperCase() + A.substring(1, 0 < i ? i : A.length);
    $("#name").val(i), a && $(e).val(a[A]);
  }
  A.initializeURLTypeahead = function (A, i, e) {
    var A = $(A),
      e;
    "" === A.val() &&
      ((e = void 0 === e ? "" : e),
      (e = new Bloodhound({
        datumTokenizer: function (A) {
          return Bloodhound.tokenizers.whitespace(A.url);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 10,
        remote: e + "typeahead_addsite.php?q=%QUERY"
      })).initialize(),
      A.typeahead(
        { minLength: 0, highlight: !0 },
        {
          displayKey: "url",
          source: e.ttAdapter(),
          templates: {
            suggestion: function (A) {
              var e =
                  "" !== A.favicon
                    ? A.favicon
                    : "R0lGODlhEAAQAIcAAAAAAExnf1BpgWR0iHZ6hHeBkX+GkYiOmpeaopucoaSlqqWmqrm9w7q+xL+/wry/xcXGyc3Oz9HS1NPU1tnZ2d/h4+Di5OLj5uPl5+Tk5OXm6O7u7+7v8O/w8e/w8vDw8fHx8vLy8/Pz8/Pz9PT09fX19fX29vb29vf39/f3+Pj4+Pj4+fn5+vr6+/v7/Pz8/P39/f7+/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAiQAAEIHEiw4MAFCBEmQCjBIIAFMiLK8CBjA4QIBiFu2Fgh4oYJDgpq5Chxw4KCCiqSlKigIAKVGyowYNDgAYGCB2BWsHABgwYDBQvA/CCiBAoVBQoOUNlBhAkVLV4MKCigIgenK1zAiCGgYICKIEhAhRExgFcZHEKcYEG27NkOI1K0aCvDLMEAePPqteuwr8CAADs=",
                i = A.domain;
              return (
                '<div class="siteRecord"><div class="favicon"><img src="data:image/gif;base64,' +
                e +
                '"></div><span class="siteUrl">' +
                (i = "" !== A.a ? A.a + " (" + A.domain + ")" : i) +
                "</span></div>"
              );
            }
          }
        }
      )
        .on("typeahead:selected", function (A, e) {
          n(e, i);
        })
        .on("typeahead:autocompleted", function (A, e) {
          n(e, i);
        }),
      A.css("background", "transparent"));
  };
})(window, siteCats);
