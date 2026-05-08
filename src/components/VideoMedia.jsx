import { useEffect, useRef } from 'react';

/**
 * Auto-playing inline video with WebM + MP4 source fallback.
 * Pauses when off-screen for performance and battery.
 *
 * Props:
 *  - src: base path WITHOUT extension, e.g. "/videos/tile-c3-1"
 *         (renders /videos/tile-c3-1.webm + /videos/tile-c3-1.mp4)
 *         OR a full path with extension — extension gets stripped, both formats served.
 *  - poster: optional poster image
 *  - className, ...rest: forwarded to <video>
 */
export default function VideoMedia({ src, poster, className = '', ...rest }) {
  const ref = useRef(null);

  // Strip extension if user passed e.g. "/videos/foo.mp4"
  const base = src.replace(/\.(mp4|webm)$/i, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      {...rest}
    >
      <source src={`${base}.webm`} type="video/webm" />
      <source src={`${base}.mp4`} type="video/mp4" />
    </video>
  );
}
