import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/ABVolt_WhiteLogo.png';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  const headerClass = [
    'site-header',
    isHomePage && !scrolled ? 'site-header-transparent' : 'site-header-solid',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>

      <div className="header-container">

        {/* Brand */}
        <Link to="/" className="brand" onClick={closeMenu}>
  <img
    src={logo}
    alt="ABVolt Engineering and Financial Consultancy Ltd"
    className="brand-logo"
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="main-navigation" aria-label="Main navigation">

          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About Us
          </Link>

          <div className="nav-dropdown">
            <Link to="/sectors" className="nav-link">
              Sectors
              <span className="dropdown-arrow">⌄</span>
            </Link>

            <div className="dropdown-menu">
              <Link to="/sectors/power">Power</Link>
              <Link to="/sectors/infrastructure">Infrastructure</Link>
              <Link to="/sectors/financial">Financial</Link>
            </div>
          </div>

          <div className="nav-dropdown">
            <Link to="/services" className="nav-link">
              Services
              <span className="dropdown-arrow">⌄</span>
            </Link>

            <div className="dropdown-menu">
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
          </div>

          <Link to="/projects" className="nav-link">
            Projects
          </Link>

          <Link to="/people" className="nav-link">
            People
          </Link>

          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>

          <Link to="/business-inquiry" className="header-cta">
            Business Inquiry
            <span>→</span>
          </Link>

        </nav>

        {/* Mobile Menu */}
        <button
          className={`mobile-menu-button ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`}>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/sectors" onClick={closeMenu}>Sectors</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/people" onClick={closeMenu}>People</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>

        <Link
          to="/business-inquiry"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Business Inquiry
          <span>→</span>
        </Link>

      </div>

    </header>
  );
}

export default Header;