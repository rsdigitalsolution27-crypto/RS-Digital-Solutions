import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import ShimmerButton from '../components/ui/shimmer-button.tsx';
import { standorte, standorteLabels } from '../data/standorte';
import { homePage, company } from '../content';

export default function Standort() {
  const { ort } = useParams();
  const navigate = useNavigate();
  const stadt = standorte.find((s) => s.slug === ort);

  if (!stadt) return <Navigate to="/standorte" replace />;

  const L = standorteLabels;
  const nachbarn = stadt.nachbarn
    .map((slug) => standorte.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <Seo
        customTitle={`Webagentur ${stadt.kurzname} – Websites, Shops & KI | RS`}
        customDescription={stadt.metaDescription}
        customPath={`/webagentur/${stadt.slug}`}
        customName={`Webagentur ${stadt.kurzname}`}
        faqItems={stadt.faq}
      />
      <PageHero
        tag={`Webagentur für ${stadt.kurzname}`}
        title={stadt.heroTitle}
        subtitle={stadt.heroSubtitle}
      />

      {/* Lokalbezug */}
      <section className="standort-section">
        <div className="container">
          <div className="service-deep-header" data-animate="fade-up">
            <span className="section-tag">{L.lokalTag}</span>
            <h2 className="section-title">{L.lokalTitle.replace('{stadt}', stadt.kurzname)}</h2>
            <p className="service-deep-desc">{stadt.intro}</p>
          </div>
          {stadt.bild && (
            <figure className="standort-figure" data-animate="fade-up">
              <img src={stadt.bild} alt={stadt.bildAlt} loading="lazy" decoding="async" />
              {stadt.bildCredit && <figcaption>{stadt.bildCredit}</figcaption>}
            </figure>
          )}
          <div className="standort-facts" data-animate="fade-up">
            <div className="standort-fact">
              <span className="usecase-label">{L.wirtschaft}</span>
              <p>{stadt.wirtschaft}</p>
            </div>
            <div className="standort-fact">
              <span className="usecase-label">{L.gastro}</span>
              <p>{stadt.gastro}</p>
            </div>
            <div className="standort-fact">
              <span className="usecase-label">{L.handel}</span>
              <p>{stadt.einzelhandel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen kompakt */}
      <section className="standort-section standort-alt">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span className="section-tag">{L.leistungenTag}</span>
            <h2 className="section-title">{L.leistungenTitle.replace('{stadt}', stadt.kurzname)}</h2>
            <p className="section-subtitle">{L.leistungenSub}</p>
          </div>
          <div className="standort-leistungen" data-animate="fade-up">
            {homePage.servicesOverview.items.map((item) => (
              <Link key={item.id} to={`/leistungen#${item.id}`} className="standort-leistung">
                <i className={item.icon} aria-hidden="true"></i>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          <p className="standort-preise" data-animate="fade-up">{L.preise}</p>
        </div>
      </section>

      {/* Typisches Szenario */}
      <section className="standort-section">
        <div className="container">
          <div className="usecase-card" data-animate="fade-up">
            <div className="usecase-head">
              <span className="usecase-badge">{L.szenarioBadge}</span>
              <span className="usecase-intro">{stadt.szenario.intro}</span>
            </div>
            <div className="usecase-grid">
              <div className="usecase-step">
                <span className="usecase-label">{L.situation}</span>
                <p>{stadt.szenario.situation}</p>
              </div>
              <div className="usecase-step">
                <span className="usecase-label">{L.loesung}</span>
                <p>{stadt.szenario.solution}</p>
              </div>
              <div className="usecase-step usecase-result">
                <span className="usecase-label">{L.ergebnis}</span>
                <p>{stadt.szenario.result}</p>
              </div>
            </div>
          </div>
          <div className="standort-cta-row" data-animate="fade-up">
            <ShimmerButton
              label={L.cta}
              onClick={() => window.open(company.calendly, '_blank', 'noopener')}
            />
            <button className="hero-text-link" onClick={() => navigate('/#kontakt')}>
              {L.ctaSecondary} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <FaqSection
        tag="FAQ"
        title={L.faqTitle.replace('{stadt}', stadt.kurzname)}
        items={stadt.faq}
      />

      {/* Nachbarstädte */}
      <section className="standort-section standort-nachbarn-section">
        <div className="container">
          <span className="section-tag">{L.nachbarnTag}</span>
          <div className="standort-nachbarn">
            {nachbarn.map((n) => (
              <Link key={n.slug} to={`/webagentur/${n.slug}`} className="standort-nachbar">
                {n.kurzname}
              </Link>
            ))}
            <Link to="/standorte" className="standort-nachbar standort-nachbar-alle">
              {L.alleStandorte}
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
