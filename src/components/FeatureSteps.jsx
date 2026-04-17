import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DEFAULT_INTERVAL = 5000;

function IconCheck({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      width="14"
      height="14"
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

function useStepCycler(total, interval) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const setStep = useCallback(
    (i) => {
      setCurrent(((i % total) + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);
    return () => clearTimeout(timerRef.current);
  }, [current, total, interval, paused]);

  return { current, setStep, setPaused };
}

export default function FeatureSteps({ steps, autoPlayInterval = DEFAULT_INTERVAL }) {
  const { current, setStep, setPaused } = useStepCycler(steps.length, autoPlayInterval);
  const activeStep = steps[current];

  return (
    <div
      className="feature-steps"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="feature-steps-card">
        <div className="feature-steps-glow" aria-hidden="true" />

        <div className="feature-steps-text">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="feature-steps-text-inner"
            >
              <motion.span
                className="feature-steps-label"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.35 }}
              >
                Schritt {activeStep.number}
              </motion.span>
              <motion.h3
                className="feature-steps-title"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12, duration: 0.35 }}
              >
                {activeStep.title}
              </motion.h3>
              <motion.p
                className="feature-steps-desc"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18, duration: 0.35 }}
              >
                {activeStep.desc}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="feature-steps-visual">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.number}
              className="feature-steps-image-wrap"
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.94, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.7 }}
            >
              <img
                src={activeStep.image}
                alt={activeStep.title}
                className="feature-steps-image"
                loading="lazy"
              />
              <div className="feature-steps-image-shine" aria-hidden="true" />
              <div className="feature-steps-image-badge">{activeStep.number}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <nav className="feature-steps-nav" aria-label="Prozess-Schritte">
        <ol className="feature-steps-pills">
          {steps.map((step, i) => {
            const isCompleted = i < current;
            const isCurrent = i === current;
            return (
              <motion.li
                key={step.number}
                className="feature-steps-pill-item"
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{
                  scale: isCurrent ? 1 : 0.95,
                  opacity: isCurrent ? 1 : 0.75,
                }}
                transition={{ duration: 0.3 }}
              >
                <button
                  type="button"
                  className={`feature-steps-pill${isCurrent ? ' is-current' : ''}${
                    isCompleted ? ' is-completed' : ''
                  }`}
                  onClick={() => setStep(i)}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  <span className="feature-steps-pill-marker">
                    {isCompleted ? <IconCheck /> : i + 1}
                  </span>
                  <span className="feature-steps-pill-label">{step.name}</span>
                </button>
              </motion.li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
