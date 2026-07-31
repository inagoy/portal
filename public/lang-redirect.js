(function(){
  try {
    var p = location.pathname;
    // If already under /es or /en, do nothing
    if (/^\/(es|en)(\/|$)/.test(p)) return;
    var dest = '/es' + p + location.search + location.hash;
    location.replace(dest);
  } catch (e) {
    // Fallback: do nothing; meta refresh will handle
  }
})();
