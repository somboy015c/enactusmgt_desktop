// Runs inside the app on every dashboard page: removes links to the public website and the "Download the app" menu.
(function () {
  var RX = /^\s*(←\s*)?(view\s+(the\s+)?(web)?site|back\s+to\s+(the\s+)?(web)?site)/i;
  function run() {
    try {
      document.querySelectorAll('.dl-menu').forEach(function (d) { d.style.setProperty('display', 'none', 'important'); });
      document.querySelectorAll('a').forEach(function (a) {
        if (RX.test(a.textContent || '')) {
          a.style.setProperty('display', 'none', 'important');
          var p = a.parentElement;
          if (p && p.classList.contains('auth-note')) p.style.setProperty('display', 'none', 'important');
        }
      });
    } catch (e) {}
  }

  /* ---- Refresh button (top right) + F5 / Ctrl+R / Cmd+R ---- */
  function addRefresh() {
    try {
      if (document.getElementById('app-refresh')) return;
      var host = document.querySelector('.topbar .user-menu') || document.querySelector('.topbar');
      if (!host) return;
      if (!document.getElementById('app-refresh-css')) {
        var st = document.createElement('style'); st.id = 'app-refresh-css';
        st.textContent = '#app-refresh{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;flex:none;margin-right:6px;border-radius:50%;' +
          'border:1px solid rgba(24,19,14,.16);background:#fff;color:#18130E;cursor:pointer;padding:0;transition:transform .2s cubic-bezier(.34,1.56,.64,1),background .2s,box-shadow .2s}' +
          '#app-refresh:hover{background:#F2A93C;border-color:#F2A93C;box-shadow:0 6px 14px -6px rgba(242,169,60,.9)}#app-refresh:active{transform:scale(.88)}' +
          '#app-refresh svg{width:19px;height:19px;transition:transform .6s cubic-bezier(.2,.8,.2,1)}#app-refresh.spin svg{transform:rotate(360deg)}';
        document.head.appendChild(st);
      }
      var b = document.createElement('button');
      b.id = 'app-refresh'; b.type = 'button'; b.title = 'Refresh (F5)'; b.setAttribute('aria-label', 'Refresh page');
      b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 10-2.3 5.7"/><path d="M20 4v7h-7"/></svg>';
      b.addEventListener('click', function () { b.classList.add('spin'); setTimeout(function () { location.reload(); }, 350); });
      host.insertBefore(b, host.firstChild);
    } catch (e) {}
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F5' || ((e.ctrlKey || e.metaKey) && (e.key === 'r' || e.key === 'R'))) { e.preventDefault(); location.reload(); }
  });
  var _run = run; run = function () { _run(); addRefresh(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  window.addEventListener('load', run);
})();
