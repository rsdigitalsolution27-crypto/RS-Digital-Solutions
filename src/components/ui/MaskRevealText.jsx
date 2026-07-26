import { useMemo, useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function MaskRevealText({
  text = '',
  className = '',
  as: Tag = 'p',
  stagger = 0.08,
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  highlight = null,
}) {
  const words = text.split(' ').filter(Boolean);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const highlightIndices = useMemo(() => {
    if (!highlight) return new Set();
    const hlWords = highlight.text.split(' ');
    const indices = new Set();
    for (let i = 0; i <= words.length - hlWords.length; i++) {
      if (hlWords.every((hw, j) => words[i + j] === hw)) {
        hlWords.forEach((_, j) => indices.add(i + j));
        break;
      }
    }
    return indices;
  }, [highlight, words]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, i) => {
        const isHighlighted = highlightIndices.has(i);
        const innerClass = isHighlighted && highlight ? highlight.className : '';
        return (
          <span
            key={i}
            className="mask-word"
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              lineHeight: '1.1',
              paddingRight: '0.28em',
              paddingBottom: '0.05em',
            }}
          >
            <motion.span
              className={innerClass}
              style={{ display: 'inline-block', willChange: 'transform' }}
              initial={reducedMotion ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              animate={reducedMotion || inView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{
                duration,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
