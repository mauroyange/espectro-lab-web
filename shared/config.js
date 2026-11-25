window.ESPECTRO_CONFIG = {
  supabaseUrl: 'https://kgljzugduyqtocdxzcrf.supabase.co',
  supabaseAnonKey: 'sb_publishable_lDc1GGadp5ZM22FlsPfKuQ_lKOjrfU7',
  siteUrl: 'https://espectrolab.ao',
  appUrl: 'https://app.espectrolab.ao',
  precoKz: 10000,
  billing: {
    entidade: 'NKENTO COMUNICACAO DIGITAL LDA',
    nif: '5002602199',
    telefone: '+244 930 536 115',
    iban: 'AO06.0055.0000.8415.9622.1011.2'
  }
};
window.ESPECTRO_LOGO = `<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 56" role="img" aria-label="Espectro LAB"><title>Espectro LAB</title><g transform="translate(28 42) scale(0.38)"><path d="M-22.6 8.2A24 24 0 1 1 22.6 8.2" fill="none" class="a1" stroke-width="12" stroke-linecap="round"/><path d="M-47.8 4.2A48 48 0 0 1 43.5 -20.3" fill="none" class="a2" stroke-width="12" stroke-linecap="round"/><path d="M-70.9 -12.5A72 72 0 0 1 24.6 -67.7" fill="none" class="a3" stroke-width="12" stroke-linecap="round"/><circle r="11" class="pt"/></g><text x="64" y="37" class="txt" font-family="Bricolage Grotesque, Lexend, sans-serif" font-weight="800" font-size="25" letter-spacing="-0.6">Espectro <tspan font-weight="700" fill="var(--atlantico)">LAB</tspan></text></svg>`;
(function initSensoryPrefs() {
  const savedTheme = localStorage.getItem('el-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  if (localStorage.getItem('el-reduced-motion') === '1') {
    document.documentElement.setAttribute('data-motion', 'reduced');
  }
})();
window.toggleEspectroTheme = function() {
  const cur = document.documentElement.getAttribute('data-theme');
  const isDark = cur === 'dark' || (!cur && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('el-theme', next);
  document.querySelectorAll('[data-theme-label]').forEach(el => {
    el.textContent = next === 'dark' ? 'Modo claro' : 'Modo escuro';
  });
};
