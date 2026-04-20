import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Normalizes props so we support both single-segment (videoSrc + badge) and
 * multi-segment ({ videos: [...], badges: [...] }) usage with one API.
 */
function useNormalizedSegments({ videoSrc, videos, badge, badges }) {
  const segments = videos && videos.length
    ? videos
    : videoSrc
      ? [{ src: videoSrc }]
      : [];
  const badgeList = badges && badges.length
    ? badges
    : badge
      ? [{ ...badge, peakAt: 0.5 }]
      : [];
  return { segments, badgeList };
}

export default function ScrollScrubHero({
  videoSrc,
  posterSrc,
  videos,
  badge,
  badges,
  children,
  pinLengthVh,
  peakZoom = 1.08,
  id = 'hero',
}) {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const videoRefs = useRef([]);
  const contentRef = useRef(null);
  const badgeRefs = useRef([]);
  const readyRef = useRef([]);
  const durationRef = useRef([]);
  const lastTimeRef = useRef([]);

  const { segments, badgeList } = useNormalizedSegments({ videoSrc, videos, badge, badges });
  const effectivePin = pinLengthVh ?? 300 * segments.length;

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const videoEls = videoRefs.current;
    const content = contentRef.current;
    const badgeEls = badgeRefs.current;
    if (!section || !sticky || videoEls.length === 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    readyRef.current = videoEls.map(() => false);
    durationRef.current = videoEls.map(() => 5);
    lastTimeRef.current = videoEls.map(() => -1);

    // Preload + init each video
    const onReadyFactory = (v, i) => () => {
      if (!Number.isFinite(v.duration) || v.duration <= 0) return;
      durationRef.current[i] = v.duration;
      readyRef.current[i] = true;
      // play+pause to init decoder
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.then(() => v.pause()).catch(() => v.pause());
      } else {
        v.pause();
      }
      ScrollTrigger.refresh();
    };

    const readyListeners = [];
    videoEls.forEach((v, i) => {
      v.pause();
      v.load();
      const cb = onReadyFactory(v, i);
      if (v.readyState >= 2 && v.duration) {
        cb();
      } else {
        ['loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough'].forEach((ev) => {
          v.addEventListener(ev, cb);
          readyListeners.push({ v, ev, cb });
        });
      }
    });

    // Sync with Lenis smooth scroll
    const onLenisScroll = () => ScrollTrigger.update();
    if (window.lenis && typeof window.lenis.on === 'function') {
      window.lenis.on('scroll', onLenisScroll);
    }

    // Each title line starts fully hidden (clipped from the right). The scroll
    // timeline wipes them in one after another, holds, then wipes them back out
    // in the same order. Only the video is visible at scroll 0.
    const titleLines = content ? content.querySelectorAll('.hero-title-line') : [];
    if (content) gsap.set(content, { opacity: 1 });
    if (titleLines.length > 0) {
      gsap.set(titleLines, { clipPath: 'inset(0% 100% 0% 0%)' });
    }
    badgeEls.forEach((el) => {
      if (el) {
        gsap.set(el, {
          opacity: 0,
          y: 40,
          xPercent: -50,
          yPercent: -50,
          pointerEvents: 'none',
        });
      }
    });
    // Only the first video visible by default
    videoEls.forEach((v, i) => {
      gsap.set(v, { opacity: i === 0 ? 1 : 0 });
    });

    const segCount = segments.length;

    // Master timeline: handles pinning, scrubs videos, fades content and badges
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${effectivePin}%`,
        pin: sticky,
        scrub: reducedMotion ? false : true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (reducedMotion) return;
          const p = self.progress;
          const segSize = 1 / segCount;
          const activeIdx = Math.min(segCount - 1, Math.floor(p / segSize));
          const localP = Math.min(1, Math.max(0, (p - activeIdx * segSize) / segSize));

          videoEls.forEach((v, i) => {
            if (!readyRef.current[i]) return;
            const dur = durationRef.current[i];
            if (i === activeIdx) {
              // Optional per-segment offset so the first video doesn't start
              // scrubbing until after the text reveal is underway.
              const startOffset = segments[i]?.videoStartAt ?? 0;
              const adjP = startOffset > 0
                ? Math.max(0, (localP - startOffset) / (1 - startOffset))
                : localP;
              // forward 0→0.5, reverse 0.5→1.0
              let t;
              if (adjP <= 0.5) t = (adjP / 0.5) * dur;
              else t = (1 - (adjP - 0.5) / 0.5) * dur;
              const clamped = Math.min(dur - 0.05, Math.max(0, t));
              if (Math.abs(clamped - lastTimeRef.current[i]) > 0.02) {
                lastTimeRef.current[i] = clamped;
                try {
                  v.currentTime = clamped;
                } catch {}
              }
            } else {
              // Reset inactive videos to frame 0 so they're ready when activated
              if (lastTimeRef.current[i] !== 0) {
                lastTimeRef.current[i] = 0;
                try {
                  v.currentTime = 0;
                } catch {}
              }
            }
          });
        },
      },
    });

    // Terminal-Industries-style intro — each title line wipes in one after
    // another (letters appear progressively left→right), a short hold, then
    // the same lines wipe out in the same order. The iMac video is held at
    // frame 0 during the whole reveal; it only starts scrubbing mid-unreveal.
    //
    //   pin 0.00 – 0.04   line 1 wipes in
    //   pin 0.04 – 0.08   line 2 wipes in
    //   pin 0.08 – 0.10   hold (all visible)
    //   pin 0.10 – 0.14   line 1 wipes out  ← by the end of this, "half the
    //   pin 0.14 – 0.18   line 2 wipes out     text has been removed" and
    //                                          segment 0 video starts scrubbing
    //                                          (videoStartAt: 0.28 in Home.jsx)
    if (titleLines.length > 0) {
      const lineDur = 0.04;
      const holdAfterReveal = 0.02;

      tl.to(
        titleLines,
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: lineDur,
          stagger: lineDur,
          ease: 'none',
        },
        0
      );

      const revealEnd = lineDur * titleLines.length;
      const unrevealStart = revealEnd + holdAfterReveal;

      tl.to(
        titleLines,
        {
          clipPath: 'inset(0% 0% 0% 100%)',
          duration: lineDur,
          stagger: lineDur,
          ease: 'none',
        },
        unrevealStart
      );
    }

    // Phase: subtle zoom on each video — peaks mid-segment
    segments.forEach((_, i) => {
      const start = i / segCount;
      const mid = start + (1 / segCount) * 0.5;
      const end = (i + 1) / segCount;
      const v = videoEls[i];
      if (!v) return;
      tl.fromTo(
        v,
        { scale: 1 },
        { scale: peakZoom, duration: mid - start, ease: 'sine.inOut' },
        start
      ).to(v, { scale: 1, duration: end - mid, ease: 'sine.inOut' }, mid);
    });

    // Crossfade between videos at segment boundaries.
    // Keep the previous video at full opacity during the fade and only fade IN
    // the next one on top — otherwise both would be semi-transparent at the
    // midpoint and the black background bleeds through, causing a dark flash.
    videoEls.forEach((v, i) => {
      if (i === 0) return;
      const boundary = i / segCount;
      const fadeWindow = 0.015;
      const prev = videoEls[i - 1];
      tl.to(v, { opacity: 1, duration: fadeWindow * 2, ease: 'none' }, boundary - fadeWindow)
        .set(prev, { opacity: 0 }, boundary + fadeWindow);
    });

    // Badges: each fades in/out around its own peak. The window is sized to
    // fit comfortably inside its own segment so we don't see a previous
    // segment's badge still on screen while the next video is already active.
    const badgeWindow = 0.9 / segCount; // tightens with more segments
    badgeList.forEach((b, i) => {
      const el = badgeEls[i];
      if (!el) return;
      const peak = b.peakAt ?? ((i + 0.5) / Math.max(1, badgeList.length));
      const inStart = Math.max(0, peak - badgeWindow * 0.55);
      const holdEnd = Math.min(1, peak + badgeWindow * 0.3);
      const outEnd = Math.min(1, peak + badgeWindow * 0.55);

      tl.to(
        el,
        {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto',
          duration: peak - inStart,
          ease: 'power2.out',
          onStart: () => {
            el.setAttribute('aria-hidden', 'false');
            el.setAttribute('tabindex', '0');
          },
        },
        inStart
      )
        .to(el, { duration: holdEnd - peak }, peak) // hold
        .to(
          el,
          {
            opacity: 0,
            y: -32,
            pointerEvents: 'none',
            duration: outEnd - holdEnd,
            ease: 'power2.in',
            onComplete: () => {
              el.setAttribute('aria-hidden', 'true');
              el.setAttribute('tabindex', '-1');
            },
          },
          holdEnd
        );
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    setTimeout(refresh, 200);

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
      window.removeEventListener('load', refresh);
      if (window.lenis && typeof window.lenis.off === 'function') {
        window.lenis.off('scroll', onLenisScroll);
      }
      readyListeners.forEach(({ v, ev, cb }) => v.removeEventListener(ev, cb));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectivePin, peakZoom, segments.length, badgeList.length]);

  return (
    <section ref={sectionRef} className="hero-scrub" id={id} data-scrub-hero>
      <div ref={stickyRef} className="hero-scrub-sticky">
        {segments.map((s, i) => (
          <video
            key={s.src}
            ref={(el) => { videoRefs.current[i] = el; }}
            className="hero-scrub-video"
            src={s.src}
            poster={i === 0 ? posterSrc : undefined}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            style={{ opacity: i === 0 ? 1 : 0 }}
          />
        ))}
        <div className="hero-scrub-overlay" />

        <div ref={contentRef} className="hero-scrub-content">
          <div className="hero-scrub-content-inner">{children}</div>
        </div>

        {badgeList.map((b, i) => (
          <Link
            key={b.to + b.label}
            ref={(el) => { badgeRefs.current[i] = el; }}
            to={b.to || '/'}
            className={`hero-scrub-badge hero-scrub-badge--${b.side || 'right'}`}
            aria-hidden="true"
            tabIndex={-1}
          >
            {b.eyebrow && <span className="hero-scrub-badge-eyebrow">{b.eyebrow}</span>}
            <span className="hero-scrub-badge-label">{b.label}</span>
            <span className="hero-scrub-badge-arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
