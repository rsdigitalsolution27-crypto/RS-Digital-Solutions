import { useNavigate } from 'react-router-dom';
import ShimmerButton from './ui/shimmer-button.tsx';
import { ctaDefaults, company } from '../content';

export default function CtaSection({ title, subtitle }) {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-bg-effect"></div>
      <div className="container">
        <div className="cta-card" data-animate="fade-up">
          <span className="section-tag">{ctaDefaults.tag}</span>
          <h2 dangerouslySetInnerHTML={{ __html: title || ctaDefaults.title }}></h2>
          <p>{subtitle || ctaDefaults.subtitle}</p>
          <div className="cta-buttons">
            <ShimmerButton
              label={ctaDefaults.primaryButton}
              onClick={() => window.open(company.calendly, '_blank', 'noopener')}
            />
            <button className="hero-text-link" onClick={() => navigate('/#kontakt')}>
              {ctaDefaults.secondaryButton} <span aria-hidden="true">→</span>
            </button>
          </div>
          <ul className="cta-trust">
            {ctaDefaults.trust.map((t) => (
              <li key={t}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
