import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">

          {/* Company */}
          <div className="footer-company">

            <Link to="/" className="footer-brand">
              <span className="footer-brand-name">ABVolt</span>
              <span className="footer-brand-tagline">
                ENGINEERING AND FINANCIAL CONSULTANCY LTD
              </span>
            </Link>

            <p className="footer-description">
              Delivering integrated engineering and financial consultancy
              solutions that create sustainable value and support
              infrastructure for a better future.
            </p>

            <Link to="/business-inquiry" className="footer-inquiry-link">
              Start a conversation
              <span>→</span>
            </Link>

          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/sectors">Sectors</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>

            <Link to="/services/design-engineering">
              Design & Engineering
            </Link>

            <Link to="/services/project-management">
              Project Management
            </Link>

            <Link to="/services/sustainability-solutions">
              Sustainability Solutions
            </Link>

            <Link to="/services/automation-transformation">
              Automation & Transformation
            </Link>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Connect</h3>

            <Link to="/people">People & Careers</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/business-inquiry">Business Inquiry</Link>

            <div className="footer-contact-details">
              <p>
                Engineering & Financial<br />
                Consultancy Ltd
              </p>

              <a href="mailto:info@abvolt.com">
                info@abvolt.com
              </a>

              <a href="tel:+910000000000">
                +91 00000 00000
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} ABVolt Engineering and Financial
            Consultancy Ltd. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/contact">Contact</Link>
            <span>·</span>
            <Link to="/business-inquiry">Business Inquiry</Link>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;