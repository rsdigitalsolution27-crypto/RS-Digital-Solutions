import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import Seo from '../components/Seo';
import { standorte, standorteLabels } from '../data/standorte';

export default function Standorte() {
  const L = standorteLabels;
  return (
    <>
      <Seo
        customTitle="Webagentur für die Region Stuttgart – alle Standorte | RS"
        customDescription="RS Digital Solutions betreut Unternehmen in Stuttgart und im Umkreis von 50 km: Websites, Online-Shops, KI und SEO — persönlich vor Ort."
        customPath="/standorte"
        customName="Standorte"
      />
      <PageHero
        tag={L.hubTag}
        title={L.hubTitle}
        subtitle={L.hubSubtitle}
      />
      <section className="standort-section">
        <div className="container">
          <div className="standorte-grid" data-animate="fade-up">
            {standorte.map((s) => (
              <Link key={s.slug} to={`/webagentur/${s.slug}`} className="standorte-card">
                <h2>{s.kurzname}</h2>
                <p>{s.teaser}</p>
                <span className="hero-text-link">{L.hubCardCta} <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
