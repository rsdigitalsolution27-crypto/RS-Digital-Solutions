import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { navigation, company } from '../content';


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navFixed, setNavFixed] = useState(false);
  const [navTransform, setNavTransform] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';
  const lastScrollY = useRef(0);
  const fixedHeaderActive = useRef(false);
  const fixedHeaderHiding = useRef(false);
  const navbarRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (window.lenis) window.lenis.start();
  }, [location]);

  // Scroll behavior
  useEffect(() => {
    let ticking = false;

    // Dynamic threshold: on the home page wait until ALL scroll-scrub heroes
    // (pinned by GSAP) are fully passed. Elsewhere keep the default 1 viewport.
    const getAppearThreshold = () => {
      if (typeof window === 'undefined') return 800;
      if (isHome) {
        const heroes = document.querySelectorAll('[data-scrub-hero]');
        if (heroes.length > 0) {
          const last = heroes[heroes.length - 1];
          const bottom = last.offsetTop + last.offsetHeight;
          if (bottom > 0) return bottom - 40;
        }
      }
      return window.innerHeight;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        const navbarHeight = navbarRef.current?.offsetHeight || 70;
        const APPEAR_THRESHOLD = getAppearThreshold();

        if (currentScrollY <= navbarHeight) {
          setNavFixed(false);
          setNavTransform('');
          fixedHeaderActive.current = false;
          fixedHeaderHiding.current = false;
        } else if (!mobileOpen) {
          if (delta > 0) {
            if (!fixedHeaderActive.current && !fixedHeaderHiding.current && currentScrollY > APPEAR_THRESHOLD) {
              setNavFixed(true);
              setNavTransform('translateY(0)');
              fixedHeaderActive.current = true;
              fixedHeaderHiding.current = false;
            }
            if (fixedHeaderHiding.current && fixedHeaderActive.current) {
              setNavTransform('translateY(0)');
              fixedHeaderHiding.current = false;
            }
          } else if (delta < 0) {
            if (fixedHeaderActive.current && !fixedHeaderHiding.current && currentScrollY <= APPEAR_THRESHOLD) {
              setNavTransform('translateY(-100%)');
              fixedHeaderHiding.current = true;
              setTimeout(() => {
                if (fixedHeaderHiding.current) {
                  setNavFixed(false);
                  setNavTransform('');
                  fixedHeaderActive.current = false;
                  fixedHeaderHiding.current = false;
                }
              }, 500);
            }
          }
        }

        lastScrollY.current = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileOpen, isHome]);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (window.lenis) window.lenis.start();
  };

  const toggleMobile = () => {
    setMobileOpen(prev => {
      if (!prev) lockScroll();
      else unlockScroll();
      return !prev;
    });
  };

  const closeMobile = () => {
    setMobileOpen(false);
    unlockScroll();
  };

  const scrollToKontakt = (e) => {
    e.preventDefault();
    closeMobile();
    if (isHome) {
      const el = document.getElementById('kontakt');
      if (!el) return;
      if (window.lenis) window.lenis.scrollTo(el, { offset: -70 });
      else el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#kontakt';
    }
  };

  const navClasses = [
    'navbar',
    navFixed ? 'nav-fixed' : '',
    !isHome ? 'scrolled' : '',
    mobileOpen ? 'mobile-open' : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav id="navbar" className={navClasses} ref={navbarRef} style={navTransform ? { transform: navTransform } : {}}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <Logo />
            <span className="logo-text">{company.nameSuffix}</span>
          </Link>
          <ul className="nav-menu">
            {navigation.map((item) => (
              <li key={item.path}>
                {item.isAnchor ? (
                  <a href={item.path} className="nav-link" onClick={scrollToKontakt}>{item.label}</a>
                ) : (
                  <NavLink to={item.path} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end={item.path === '/'}>{item.label}</NavLink>
                )}
              </li>
            ))}
          </ul>
          <a
            href={company.calendly}
            target="_blank"
            rel="noopener"
            className="nav-cta"
          >
            Termin buchen
          </a>
          <ThemeToggle />
          <button
            type="button"
            className={`hamburger${mobileOpen ? ' active' : ''}`}
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu-overlay${mobileOpen ? ' active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-brand">
            <Logo width={56} height={56} className="logo-svg mobile-brand-logo" viewBox="130 30 200 175" />
            <span className="logo-text">{company.nameSuffix}</span>
          </div>
          <ul className="mobile-nav-links">
            {navigation.map((item) => (
              <li key={item.path}>
                {item.isAnchor ? (
                  <a href={item.path} className="mobile-link" onClick={scrollToKontakt}>{item.label}</a>
                ) : (
                  <Link to={item.path} className="mobile-link" onClick={closeMobile}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <a
            href={company.calendly}
            target="_blank"
            rel="noopener"
            className="nav-cta nav-cta-mobile"
            onClick={closeMobile}
          >
            Beratungstermin buchen
          </a>
        </div>
      </div>
    </>
  );
}
