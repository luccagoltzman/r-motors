// Animações do site (cópia local dos scripts do template, antes carregados de slater.app)
{
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('./site.css', import.meta.url).href;
  document.head.appendChild(link);
}
import('./vtec.js')
import('./parallax.js')
