(function(){
  try {
    var stored = null;
    try { stored = localStorage.getItem('lang'); } catch (e) {}
    var nav = (navigator.language || 'en').toLowerCase();
    var lang = (stored || nav).indexOf('es') === 0 ? 'es' : 'en';
    var p = location.pathname;
    // If already under /es or /en, do nothing
    if (/^\/(es|en)(\/|$)/.test(p)) return;
    var dest = '/' + lang + p;
    location.replace(dest);
  } catch (e) {
    // Fallback: do nothing; meta refresh will handle
  }
})();

