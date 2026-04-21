import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LightRays from '../components/LightRays';
import ShimmerButton from '../components/ui/shimmer-button.tsx';
import MaskRevealText from '../components/ui/MaskRevealText';
import Seo from '../components/Seo';
import TrustedMarquee from '../components/TrustedMarquee';
import FeatureSteps from '../components/FeatureSteps';
import ServicesAccordion from '../components/ServicesAccordion';
import { smoothScrollTo } from '../utils/smoothScroll';
import { homePage, company, referenzenPage } from '../content';


export default function Home() {
  const navigate = useNavigate();
  const heroContentRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const heroContent = heroContentRef.current;
          if (heroContent && window.scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${window.scrollY * 0.3}px)`;
            heroContent.style.opacity = 1 - (window.scrollY / (window.innerHeight * 0.8));
          }
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => {
        setFormState('idle');
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <Seo page="home" />
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="beams-canvas">
          <LightRays
            raysOrigin="top-center"
            raysColor="#7ea5d9"
            raysSpeed={1.2}
            lightSpread={1.3}
            rayLength={3}
            pulsating={false}
            fadeDistance={1.6}
            saturation={1.4}
            followMouse
            mouseInfluence={0.12}
            noiseAmount={0}
            distortion={0}
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content" ref={heroContentRef}>
          <div className="hero-float-wrapper">
            <MaskRevealText
              text={[homePage.hero.titleLine1, homePage.hero.titleGradient, homePage.hero.titleLine3].filter(Boolean).join(' ')}
              className="hero-title-new"
              stagger={0.08}
              duration={0.85}
              delay={0.15}
              highlight={{ text: homePage.hero.titleGradient, className: 'hero-gradient-text' }}
            />
            <p className="hero-subtitle-new">
              {homePage.hero.subtitle}
            </p>
          </div>
          <div className="hero-buttons-new">
            <ShimmerButton label={homePage.hero.primaryButton} onClick={() => { smoothScrollTo('kontakt'); }} />
            <button className="hero-text-link" onClick={() => navigate('/referenzen')}>
              {homePage.hero.secondaryButton} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Alles aus einer Hand */}
      <section id="all-in-one" className="all-in-one-section landing-section">
        <div className="container">
          <div className="all-in-one-header" data-animate="fade-up">
            <span className="section-tag">{homePage.allInOne.tag}</span>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: homePage.allInOne.title }}></h2>
            <p className="all-in-one-description">{homePage.allInOne.description}</p>
          </div>
          <div className="all-in-one-grid">
            {homePage.allInOne.cards.map((card, i) => (
              <div
                key={i}
                className="all-in-one-card"
                data-animate="fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="all-in-one-icon"><i className={card.icon}></i></div>
                <h3 className="all-in-one-card-title">{card.title}</h3>
                <p className="all-in-one-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview (Carousel) */}
      <section id="services" className="services-overview-section landing-section">
        <div className="container">
          <div className="services-overview-header" data-animate="fade-up">
            <span className="section-tag">{homePage.servicesOverview.tag}</span>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: homePage.servicesOverview.title }}></h2>
            <p className="services-overview-description">{homePage.servicesOverview.description}</p>
          </div>
          <div data-animate="fade-up">
            <ServicesAccordion
              items={homePage.servicesOverview.items}
              defaultOpen={0}
              ctaLabel="Mehr erfahren"
              onCtaClick={() => navigate('/leistungen')}
            />
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section id="prozess" className="process-section landing-section">
        <div className="container">
          <div className="process-header" data-animate="fade-up">
            <span className="section-tag">{homePage.process.tag}</span>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: homePage.process.title }}></h2>
            <p className="process-description">{homePage.process.description}</p>
          </div>
          <div data-animate="fade-up">
            <FeatureSteps steps={homePage.process.steps} />
          </div>
        </div>
      </section>

      {/* Trusted By Marquee (Social Proof vor Testimonials) */}
      <TrustedMarquee />

      {/* Testimonials */}
      <section id="kundenstimmen" className="testimonials-section landing-section">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span className="section-tag">{homePage.testimonials.tag}</span>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: homePage.testimonials.title }}></h2>
            <p className="section-subtitle">{homePage.testimonials.description}</p>
          </div>
          <div className="testimonials-grid">
            {referenzenPage.testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" data-animate="fade-up" data-delay={i * 100}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <i key={j} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.avatar}</div>
                  <div className="author-info">
                    <span className="author-name">{t.name}</span>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="kontakt-section">
        <div className="container">
          <div className="kontakt-grid">
            <div className="kontakt-info" data-animate="fade-right">
              <span className="section-tag">{homePage.contact.tag}</span>
              <h2 className="section-title">{homePage.contact.title}</h2>
              <p className="kontakt-text">
                {homePage.contact.intro}
              </p>
              <div className="kontakt-details">
                <div className="kontakt-item">
                  <div className="kontakt-icon"><i className="fas fa-envelope"></i></div>
                  <div>
                    <span className="kontakt-label">{homePage.contact.labels.email}</span>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
                <div className="kontakt-item">
                  <div className="kontakt-icon"><i className="fas fa-phone"></i></div>
                  <div>
                    <span className="kontakt-label">{homePage.contact.labels.phone}</span>
                    <a href={company.phoneTel}>{company.phone}</a>
                  </div>
                </div>
                <div className="kontakt-item">
                  <div className="kontakt-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <span className="kontakt-label">{homePage.contact.labels.location}</span>
                    <span>{company.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="kontakt-form-wrapper" data-animate="fade-left">
              <form className="kontakt-form" id="contactForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only">{homePage.contact.form.name.label}</label>
                    <input type="text" id="name" name="name" required placeholder={homePage.contact.form.name.placeholder} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">{homePage.contact.form.email.label}</label>
                    <input type="email" id="email" name="email" required placeholder={homePage.contact.form.email.placeholder} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="sr-only">{homePage.contact.form.phone.label}</label>
                  <input type="tel" id="phone" name="phone" placeholder={homePage.contact.form.phone.placeholder} />
                </div>
                <div className="form-group">
                  <label htmlFor="service" className="sr-only">{homePage.contact.form.service.label}</label>
                  <select id="service" name="service">
                    <option value="">{homePage.contact.form.service.placeholder}</option>
                    {homePage.contact.form.service.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="sr-only">{homePage.contact.form.message.label}</label>
                  <textarea id="message" name="message" rows="5" required placeholder={homePage.contact.form.message.placeholder}></textarea>
                </div>
                <div className="form-submit-wrapper">
                  <ShimmerButton
                    label={formState === 'idle' ? homePage.contact.form.submit.default : formState === 'sending' ? homePage.contact.form.submit.loading : homePage.contact.form.submit.success}
                    onClick={() => {
                      if (formState === 'idle') {
                        document.getElementById('contactForm').requestSubmit();
                      }
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
