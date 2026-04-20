import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollScrubHero from '../components/ScrollScrubHero';
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
      {/* Hero – Combined Scroll-Scrubbed Video (iMac → MacBook) */}
      <ScrollScrubHero
        id="hero"
        pinLengthVh={750}
        videos={[
          // videoStartAt 0.60 (in segment-local terms) = animation starts at
          // pin-progress 0.20, right in the middle of line 2's unreveal
          // (= half of the three-line text has disappeared).
          // mobileFocus values frame each device in the centre of the portrait
          // viewport: X% shifts the horizontal object-position when the video
          // is scaled to cover the screen.
          {
            src: '/hero-video/imac-scrub.mp4',
            videoStartAt: 0.60,
            mobileFocus: '78% 50%',
          },
          {
            src: '/hero-video/macbook-scrub.mp4',
            mobileFocus: '18% 50%',
          },
          {
            src: '/hero-video/iphone-scrub.mp4',
            mobileFocus: '72% 65%',
          },
        ]}
        badges={[
          {
            eyebrow: 'Unser Service',
            label: '48h Website-Relaunch',
            to: '/48h',
            peakAt: 0.27,
            side: 'right',
          },
          {
            eyebrow: 'Unser Service',
            label: 'E-Commerce & Online Shop',
            to: '/leistungen',
            peakAt: 0.50,
            side: 'left',
          },
          {
            eyebrow: 'Unser Service',
            label: 'Social Media & SEO',
            to: '/leistungen',
            peakAt: 0.83,
            side: 'center',
          },
        ]}
      >
        <div className="hero-float-wrapper">
          <h1 className="hero-title-new">
            {(() => {
              // Split the gradient text into two visual lines at its natural
              // midpoint so line 2 and line 3 each get their own clip-path
              // animation (otherwise browser-wrapped lines inside a single
              // span animate together).
              const gradWords = (homePage.hero.titleGradient || '').split(' ');
              const mid = Math.ceil(gradWords.length / 2);
              const gradA = gradWords.slice(0, mid).join(' ');
              const gradB = gradWords.slice(mid).join(' ');
              const lines = [
                { text: homePage.hero.titleLine1, gradient: false },
                { text: gradA, gradient: true },
                { text: gradB, gradient: true },
                { text: homePage.hero.titleLine3, gradient: false },
              ].filter((l) => l.text);
              return lines.map((l, i) => (
                <span key={i} className="hero-title-line">
                  {l.gradient ? (
                    <span className="hero-gradient-text">{l.text}</span>
                  ) : (
                    l.text
                  )}
                </span>
              ));
            })()}
          </h1>
        </div>
      </ScrollScrubHero>

      {/* Trusted By Marquee */}
      <TrustedMarquee />

      {/* Stats Bar */}
      <section className="stats-bar-section">
        <div className="container">
          <div className="stats-bar" data-animate="fade-up">
            {homePage.stats.map((stat, i) => (
              <div key={i} className="stats-bar-item" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="stats-bar-value">
                  {stat.value}
                  <span className="stats-bar-suffix">{stat.suffix}</span>
                </span>
                <span className="stats-bar-label">{stat.label}</span>
              </div>
            ))}
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

      {/* Pricing */}
      <section id="pricing" className="pricing-section landing-section">
        <div className="container">
          <div className="pricing-header" data-animate="fade-up">
            <span className="section-tag">{homePage.pricing.tag}</span>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: homePage.pricing.title }}></h2>
            <p className="pricing-description">{homePage.pricing.description}</p>
          </div>
          <div className="pricing-grid">
            {homePage.pricing.packages.map((pkg, i) => (
              <div
                key={i}
                className={`pricing-card${pkg.highlighted ? ' pricing-card-highlight' : ''}`}
                data-animate="fade-up"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {pkg.badge && <div className="pricing-badge">{pkg.badge}</div>}
                <div className="pricing-card-header">
                  <h3 className="pricing-card-name">{pkg.name}</h3>
                  <p className="pricing-card-desc">{pkg.desc}</p>
                </div>
                <div className="pricing-price">
                  {pkg.priceLabel && <span className="pricing-price-label">{pkg.priceLabel}</span>}
                  <span className="pricing-price-value">
                    {pkg.price}
                    {pkg.currency && <span className="pricing-price-currency">{pkg.currency}</span>}
                  </span>
                  <span className="pricing-price-period">{pkg.period}</span>
                </div>
                <ul className="pricing-features">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="pricing-feature">
                      <svg className="pricing-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`pricing-cta${pkg.highlighted ? ' pricing-cta-primary' : ''}`}
                  onClick={() => smoothScrollTo('kontakt')}
                >
                  {pkg.cta} <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
          </div>
          <p className="pricing-footnote" data-animate="fade-up">{homePage.pricing.footnote}</p>
        </div>
      </section>

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
