import { Link } from 'react-router-dom';
import Logo from './Logo';
import { company, footer } from '../content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Left: Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Logo width={36} height={35} className="logo-svg footer-logo-svg" />
              <span>{company.nameSuffix}</span>
            </Link>
            <p>{footer.description}</p>
          </div>

          {/* Right: Contact */}
          <div className="footer-contact">
            <h4>{footer.contactHeading}</h4>
            <ul>
              <li>
                <i className="fas fa-calendar-check"></i>
                <a href={company.calendly} target="_blank" rel="noopener">Beratungstermin buchen</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{company.copyright}</p>
          <div className="footer-bottom-links">
            {footer.legalLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
