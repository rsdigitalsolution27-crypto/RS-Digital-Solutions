import { useState } from 'react';

export default function FaqSection({ tag, title, items }) {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <div className="faq-grid" data-animate="fade-up">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${activeFaq === i ? ' active' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={activeFaq === i}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span>{item.q}</span>
                <i className="fas fa-plus" aria-hidden="true"></i>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
