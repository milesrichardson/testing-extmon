(() => {
  window.container = document.getElementById("container");
  let n = !1;
  window.injectStyles = (e) => {
    if (!n) {
      n = !0;
      const t = e();
      for (const n of t) document.head.appendChild(n);
    }
  };
})();
