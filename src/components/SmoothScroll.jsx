import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export default function SmoothScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  useEffect(() => {
    if (hash && window.lenis) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => window.lenis.scrollTo(el, { offset: -80 }), 150);
      }
    } else if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, hash]);

  return null;
}
