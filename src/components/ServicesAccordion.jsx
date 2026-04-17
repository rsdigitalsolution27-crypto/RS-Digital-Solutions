import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function AccordionItem({ item, index, isOpen, onToggle, onCtaClick, ctaLabel }) {
  const contentRef = useRef(null);

  return (
    <div className={`sa-item${isOpen ? ' sa-item-open' : ''}`}>
      <button
        type="button"
        className="sa-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="sa-trigger-icon-wrap">
          <i className={item.icon}></i>
        </span>
        <h3 className="sa-trigger-title">{item.title}</h3>
        <span className="sa-trigger-indicator" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`sa-chevron${isOpen ? ' sa-chevron-rotated' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="sa-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sa-content-inner" ref={contentRef}>
              <div className="sa-content-text">
                <p className="sa-content-desc">{item.desc}</p>
                <button
                  type="button"
                  className="sa-content-button"
                  onClick={onCtaClick}
                >
                  {ctaLabel}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
              <div className="sa-content-image-wrap">
                <img
                  className="sa-content-image"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="sa-content-image-overlay" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesAccordion({ items, defaultOpen = 0, ctaLabel = 'Mehr erfahren', onCtaClick }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="services-accordion">
      {items.map((item, i) => (
        <AccordionItem
          key={item.id || i}
          item={item}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
          onCtaClick={onCtaClick}
          ctaLabel={ctaLabel}
        />
      ))}
    </div>
  );
}
