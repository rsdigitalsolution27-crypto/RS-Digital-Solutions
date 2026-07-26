import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const delayTimeouts = new Map();
    const observed = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay') || 0);
        if (entry.isIntersecting) {
          const timeoutId = setTimeout(() => {
            el.classList.add('animated');
            delayTimeouts.delete(el);
          }, delay);
          delayTimeouts.set(el, timeoutId);
        } else {
          if (delayTimeouts.has(el)) {
            clearTimeout(delayTimeouts.get(el));
            delayTimeouts.delete(el);
          }
          el.classList.remove('animated');
        }
      });
    }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.01 });

    const attach = () => {
      document.querySelectorAll('[data-animate]').forEach(el => {
        if (observed.has(el)) return;
        observed.add(el);
        // Force-check elements already in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const delay = parseInt(el.getAttribute('data-delay') || 0);
          setTimeout(() => el.classList.add('animated'), delay);
        }
        observer.observe(el);
      });
    };

    attach();

    // Lazy-geladene Routen mounten ihre Inhalte erst nach dem Chunk-Load —
    // neu auftauchende [data-animate]-Elemente daher per MutationObserver anbinden.
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
      delayTimeouts.forEach(id => clearTimeout(id));
    };
  }, [location.pathname]);
}
