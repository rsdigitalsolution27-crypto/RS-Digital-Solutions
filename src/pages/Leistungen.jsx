import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import FaqSection from '../components/FaqSection';
import ShimmerButton from '../components/ui/shimmer-button.tsx';
import Seo from '../components/Seo';
import { leistungenPage, ctaPerPage } from '../content';

export default function Leistungen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const activeService = leistungenPage.services[activeIndex];
  const labels = leistungenPage.detailLabels;

  return (
    <>
      <Seo page="leistungen" faqItems={leistungenPage.faq.items} />
      <PageHero
        tag={leistungenPage.hero.tag}
        title={leistungenPage.hero.title}
        subtitle={leistungenPage.hero.subtitle}
      />

      <section className="services-section">
        <div className="container">
          <div className="services-accordion-layout">
            <div className="services-text" data-animate="fade-right">
              <span className="section-tag">{leistungenPage.section.tag}</span>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: leistungenPage.section.title }}></h2>
              <p className="services-description">
                {leistungenPage.section.description}
              </p>
              <ShimmerButton label={leistungenPage.section.button} onClick={() => navigate('/#kontakt')} />
            </div>
            <div className="services-accordion" data-animate="fade-left">
              <div className="accordion-track" id="serviceAccordion">
                {leistungenPage.services.map((item, i) => (
                  <div
                    key={i}
                    className={`accordion-item${i === activeIndex ? ' active' : ''}`}
                    data-index={i}
                    onMouseEnter={() => {
                      if (!('ontouchstart' in window)) setActiveIndex(i);
                    }}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img src={item.image} alt={item.label} loading="lazy" />
                    <div className="accordion-overlay"></div>
                    <div className="accordion-icon"><i className={item.icon}></i></div>
                    <span className="accordion-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="service-detail" data-animate="fade-up">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="service-detail-inner"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="service-detail-top">
                  <div className="service-detail-icon-wrap">
                    <i className={activeService.icon}></i>
                  </div>
                  <div className="service-detail-head">
                    <h3 className="service-detail-headline">{activeService.headline}</h3>
                    <p className="service-detail-intro">{activeService.intro}</p>
                  </div>
                </div>

                <div className="service-detail-grid">
                  <div className="service-detail-features-block">
                    <span className="service-detail-label">{labels.features}</span>
                    <ul className="service-detail-features">
                      {activeService.features.map((f, j) => (
                        <li key={j} className="service-detail-feature">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail-meta">
                    <div className="service-detail-meta-item">
                      <span className="service-detail-label">{labels.forWhom}</span>
                      <p>{activeService.forWhom}</p>
                    </div>
                    <div className="service-detail-meta-item service-detail-result">
                      <span className="service-detail-label">{labels.result}</span>
                      <p>{activeService.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <FaqSection tag={leistungenPage.faq.tag} title={leistungenPage.faq.title} items={leistungenPage.faq.items} />

      <CtaSection title={ctaPerPage.leistungen.title} subtitle={ctaPerPage.leistungen.subtitle} />
    </>
  );
}
