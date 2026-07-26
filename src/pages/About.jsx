import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { aboutPage, ctaPerPage } from '../content';

function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const step = target / (duration / 16);
  let done = false;
  function update() {
    if (done) return;
    current += step;
    if (current >= target) {
      element.textContent = target;
      done = true;
      return;
    }
    element.textContent = Math.floor(current);
    requestAnimationFrame(update);
  }
  update();
}

export default function About() {
  // Counter animation
  useEffect(() => {
    const elements = document.querySelectorAll('.about-stat-number[data-count]');
    if (elements.length === 0) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-count'));
          animateCounter(entry.target, target, 2000);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => counterObserver.observe(el));
    return () => counterObserver.disconnect();
  }, []);

  return (
    <>
      <Seo page="about" faqItems={aboutPage.faq.items} />
      <PageHero
        tag={aboutPage.hero.tag}
        title={aboutPage.hero.title}
        subtitle={aboutPage.hero.subtitle}
      />

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid" style={{ gridTemplateColumns: '1fr' }}>
            <div className="about-content" data-animate="fade-right">
              <span className="section-tag">{aboutPage.intro.tag}</span>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: aboutPage.intro.title }}></h2>
              {aboutPage.intro.paragraphs.map((p, i) => (
                <p key={i} className="about-text">{p}</p>
              ))}
              <div className="about-values">
                {aboutPage.values.map((v, i) => (
                  <div key={i} className="value-item">
                    <div className="value-icon"><i className={v.icon}></i></div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection tag={aboutPage.faq.tag} title={aboutPage.faq.title} items={aboutPage.faq.items} />

      <CtaSection title={ctaPerPage.about.title} subtitle={ctaPerPage.about.subtitle} />
    </>
  );
}
