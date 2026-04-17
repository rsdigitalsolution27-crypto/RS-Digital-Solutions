export function smoothScrollTo(target, options = {}) {
  const offset = options.offset ?? -70;
  const el = typeof target === 'string' ? document.getElementById(target) : target;
  if (!el) return;

  if (window.lenis) {
    window.lenis.scrollTo(el, { offset });
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
