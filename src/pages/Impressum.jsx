import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { impressumPage } from '../content';

export default function Impressum() {
  return (
    <>
      <Seo page="impressum" />
      <PageHero
        tag={impressumPage.hero.tag}
        title={impressumPage.hero.title}
        subtitle={impressumPage.hero.subtitle}
      />

      <section className="legal-section">
        <div className="container legal-container">
          {impressumPage.sections.map((sec, i) => (
            <div key={i} className="legal-block" data-animate="fade-up">
              <h2 className="legal-heading">{sec.heading}</h2>
              {sec.lines && (
                <address className="legal-address">
                  {sec.lines.map((line, j) => (
                    <span key={j}>{line}</span>
                  ))}
                </address>
              )}
              {sec.paragraphs?.map((p, j) => (
                <p key={j} className="legal-text">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
