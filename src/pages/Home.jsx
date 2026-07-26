import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import VideoMedia from '../components/VideoMedia';
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

  return (
    <>
      <Seo page="home" />
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <VideoMedia
          src="/videos/hero-rs-loop"
          poster="/videos/hero-rs-poster.jpg"
          className="hero-bg-video"
          aria-hidden="true"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content" ref={heroContentRef}>
          <div className="hero-float-wrapper">
            <MaskRevealText
              text={[homePage.hero.titleLine1, homePage.hero.titleGradient, homePage.hero.titleLine3].filter(Boolean).join(' ')}
              as="h1"
              className="hero-title-new"
              stagger={0.16}
              duration={1.4}
              delay={0.25}
              highlight={{ text: homePage.hero.titleGradient, className: 'hero-gradient-text' }}
            />
          </div>
          <p className="hero-subtitle-new">
            {homePage.hero.subtitle}
          </p>
          <div className="hero-buttons-new">
            <ShimmerButton label={homePage.hero.primaryButton} onClick={() => window.open(company.calendly, '_blank', 'noopener')} />
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
                className={`all-in-one-card${card.video ? ' all-in-one-card--video' : ''}`}
                data-animate="fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {card.video && (
                  <VideoMedia
                    src={card.video}
                    className="all-in-one-card-bg"
                    aria-hidden="true"
                  />
                )}
                <div className="all-in-one-card-inner">
                  {!card.video && (
                    <div className="all-in-one-icon">
                      <i className={card.icon}></i>
                    </div>
                  )}
                  <h3 className="all-in-one-card-title">{card.title}</h3>
                  <p className="all-in-one-card-desc">{card.desc}</p>
                </div>
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

      {/* Herausforderungen & Lösungen */}
      <section id="herausforderungen" className="challenges-section landing-section">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span className="section-tag">{homePage.challenges.tag}</span>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: homePage.challenges.title }}></h2>
            <p className="section-subtitle">{homePage.challenges.description}</p>
          </div>
          <div className="challenges-grid">
            {homePage.challenges.items.map((item, i) => (
              <div key={i} className="challenge-card" data-animate="fade-up" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                <div className="challenge-icon"><i className={item.icon} aria-hidden="true"></i></div>
                <h3 className="challenge-problem">{item.problem}</h3>
                <p className="challenge-solution">{item.solution}</p>
                <button className="hero-text-link challenge-link" onClick={() => navigate(item.link)}>
                  {item.linkLabel} <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
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
                  <div className="kontakt-icon"><i className="fas fa-calendar-check"></i></div>
                  <div>
                    <span className="kontakt-label">{homePage.contact.labels.booking}</span>
                    <a href={company.calendly} target="_blank" rel="noopener">{homePage.contact.labels.bookingLink}</a>
                  </div>
                </div>
                <div className="kontakt-item">
                  <div className="kontakt-icon"><i className="fas fa-envelope"></i></div>
                  <div>
                    <span className="kontakt-label">{homePage.contact.labels.email}</span>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
