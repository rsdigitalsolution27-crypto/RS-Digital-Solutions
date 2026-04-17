import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AUTO_PLAY_INTERVAL = 3800;
const ITEM_HEIGHT = 64;

function wrap(min, max, v) {
  const rangeSize = max - min;
  return (((v - min) % rangeSize) + rangeSize) % rangeSize + min;
}

export default function FeatureCarousel({ features, onCtaClick, ctaLabel }) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % features.length) + features.length) % features.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index) => {
    const diff = index - currentIndex;
    const len = features.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return 'active';
    if (normalizedDiff === -1) return 'prev';
    if (normalizedDiff === 1) return 'next';
    return 'hidden';
  };

  const activeFeature = features[currentIndex];

  return (
    <div className="fc-wrapper">
      <div className="fc-inner">
        {/* Left Panel: Chips */}
        <div
          className="fc-chips-panel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="fc-chips-fade fc-chips-fade-top" aria-hidden="true" />
          <div className="fc-chips-fade fc-chips-fade-bottom" aria-hidden="true" />
          <div className="fc-chips-stage">
            {features.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(features.length / 2),
                features.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  className="fc-chip-wrapper"
                  style={{ height: ITEM_HEIGHT }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.28,
                  }}
                  transition={{ type: 'spring', stiffness: 90, damping: 22, mass: 1 }}
                >
                  <button
                    type="button"
                    onClick={() => handleChipClick(index)}
                    className={`fc-chip${isActive ? ' fc-chip-active' : ''}`}
                  >
                    <span className="fc-chip-icon">
                      <i className={feature.icon}></i>
                    </span>
                    <span className="fc-chip-label">{feature.label}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Panel: Image Stage */}
        <div className="fc-stage">
          <div className="fc-stage-inner">
            {features.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === 'active';
              const isPrev = status === 'prev';
              const isNext = status === 'next';

              return (
                <motion.div
                  key={feature.id}
                  className="fc-card"
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -90 : isNext ? 90 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 25, mass: 0.8 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={`fc-card-image${isActive ? ' fc-card-image-active' : ''}`}
                    loading="lazy"
                  />
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="fc-card-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <div className="fc-card-badge">
                          {String(index + 1).padStart(2, '0')} · {feature.label}
                        </div>
                        <p className="fc-card-title">{feature.title}</p>
                        <p className="fc-card-desc">{feature.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className={`fc-card-live${isActive ? ' fc-card-live-visible' : ''}`}>
                    <span className="fc-card-live-dot" aria-hidden="true" />
                    <span className="fc-card-live-text">LIVE</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {onCtaClick && ctaLabel && (
            <div className="fc-cta-row">
              <button type="button" className="fc-cta" onClick={onCtaClick}>
                {ctaLabel} <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
