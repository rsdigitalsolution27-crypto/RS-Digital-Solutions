import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { datenschutzPage } from '../content';

export default function Datenschutz() {
  return (
    <>
      <Seo page="datenschutz" />
      <PageHero
        tag={datenschutzPage.hero.tag}
        title={datenschutzPage.hero.title}
        subtitle={datenschutzPage.hero.subtitle}
      />

      <section className="legal-section">
        <div className="container legal-container">
          {datenschutzPage.sections.map((sec, i) => (
            <div key={i} className="legal-block" data-animate="fade-up">
              <h2 className="legal-heading">{sec.heading}</h2>
              {sec.paragraphs?.map((p, j) => (
                <p key={j} className="legal-text">{p}</p>
              ))}
              {sec.lines && (
                <address className="legal-address">
                  {sec.lines.map((line, j) => (
                    <span key={j}>{line}</span>
                  ))}
                </address>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
