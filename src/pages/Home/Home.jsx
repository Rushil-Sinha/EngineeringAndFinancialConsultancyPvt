import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import hero1 from '../../assets/hero/Hero 1.jpg';
import hero2 from '../../assets/hero/Hero 2.jpg';
import hero3 from '../../assets/hero/Hero 3.jpg';
import hero4 from '../../assets/hero/Hero 4.jpg';

const heroSlides = [
  {
    image: hero1,
    eyebrow: 'ENGINEERING & FINANCIAL CONSULTANCY',
    title: 'Engineering precision.',
    accent: 'Financial perspective.',
    description:
      'Integrated consultancy solutions designed to help businesses, industries, and infrastructure projects move forward with confidence.',
  },
  {
    image: hero2,
    eyebrow: 'DESIGN & ENGINEERING',
    title: 'Engineering solutions',
    accent: 'built for impact.',
    description:
      'From industrial processes to technical systems, we combine engineering expertise with practical, outcome-focused thinking.',
  },
  {
    image: hero3,
    eyebrow: 'FINANCIAL CONSULTANCY',
    title: 'Smarter decisions.',
    accent: 'Stronger growth.',
    description:
      'Strategic financial management, project budgeting, capital planning, and advisory solutions aligned with business objectives.',
  },
  {
    image: hero4,
    eyebrow: 'SUSTAINABLE GROWTH',
    title: 'Building for today.',
    accent: 'Planning for tomorrow.',
    description:
      'A dual-expertise approach that connects technical excellence, financial discipline, compliance, and long-term value creation.',
  },
];

const companyStats = [
  {
    value: 5,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Projects',
  },
  {
    value: 4,
    suffix: '',
    label: 'Countries',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Employees',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Clients',
  },
];

const services = [
  {
    number: '01',
    title: 'Design & Engineering',
    description:
      'Engineering design and technical consultancy for industrial processes, production systems, and scientific and technical applications.',
    path: '/services/design-engineering',
  },
  {
    number: '02',
    title: 'Project Management',
    description:
      'Structured project support focused on planning, coordination, delivery, risk management, and achieving defined project outcomes.',
    path: '/services/project-management',
  },
  {
    number: '03',
    title: 'Sustainability Solutions',
    description:
      'Practical solutions that integrate sustainable thinking into engineering, operations, resource planning, and long-term business growth.',
    path: '/services/sustainability-solutions',
  },
  {
    number: '04',
    title: 'Automation & Transformation',
    description:
      'Technology-enabled transformation and process optimization designed to improve operational efficiency and scalability.',
    path: '/services/automation-transformation',
  },
];

const sectors = [
  {
    number: '01',
    title: 'Power',
    description:
      'Engineering and consultancy capabilities supporting power-sector requirements across diverse technologies.',
    items: ['Nuclear', 'Hydro', 'Renewable', 'Thermal'],
    path: '/sectors/power',
  },
  {
    number: '02',
    title: 'Infrastructure',
    description:
      'Consultancy support for infrastructure initiatives with a focus on efficient planning, technical delivery, and sustainable outcomes.',
    items: ['Water'],
    path: '/sectors/infrastructure',
  },
  {
    number: '03',
    title: 'Financial',
    description:
      'Strategic financial management and advisory solutions supporting capital planning, project economics, and business growth.',
    items: [],
    path: '/sectors/financial',
  },
];

const projects = [
  {
    number: '01',
    title: 'Engineering & Technical Consulting',
    description:
      'Explore our approach to delivering practical engineering and technical consultancy solutions.',
  },
  {
    number: '02',
    title: 'Financial Advisory & Planning',
    description:
      'Supporting organizations with structured financial thinking, planning, and decision-making.',
  },
  {
    number: '03',
    title: 'Integrated Consultancy',
    description:
      'Connecting engineering and financial perspectives to support stronger project and business outcomes.',
  },
];

function AnimatedCounter({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrame;
    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  /*
   * Hero auto rotation
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Animate company statistics once they enter the viewport
   */
  useEffect(() => {
    const element = statsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const goToPreviousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <div className="home-page">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="hero-section">

        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <div
              className={`hero-slide ${
                index === activeSlide ? 'active' : ''
              }`}
              key={slide.image}
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            />
          ))}
        </div>

        <div className="hero-overlay" />
        <div className="hero-grid-overlay" />

        <div className="home-container hero-content">

          <div className="hero-copy" key={activeSlide}>
            <p className="hero-eyebrow">{currentSlide.eyebrow}</p>

            <h1>
              {currentSlide.title}
              <span>{currentSlide.accent}</span>
            </h1>

            <p className="hero-description">
              {currentSlide.description}
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="hero-primary-button">
                Explore Our Work
                <span>↗</span>
              </Link>

              <Link to="/contact" className="hero-secondary-button">
                Talk to Us
              </Link>
            </div>
          </div>

        </div>

        {/* Hero navigation + scroll indicator */}
        <div className="hero-bottom-navigation">

          <div className="hero-navigation">

            <button
              type="button"
              className="hero-nav-button"
              onClick={goToPreviousSlide}
              aria-label="Previous slide"
            >
              ←
            </button>

            <div className="hero-dots">
              {heroSlides.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`hero-dot ${
                    index === activeSlide ? 'active' : ''
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="hero-nav-button"
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              →
            </button>

          </div>

          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <span className="hero-scroll-line" />
          </div>

        </div>

      </section>


      {/* =========================================================
          COMPANY STATS
      ========================================================= */}
      <section className="stats-section" ref={statsRef}>
        <div className="home-container">

          <div className="stats-grid">

            {companyStats.map((stat) => (
              <div className="stat-item" key={stat.label}>

                <div className="stat-number">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    start={statsVisible}
                  />
                </div>

                <div className="stat-label">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          ABOUT US
      ========================================================= */}
      <section className="about-section section-spacing">

        <div className="home-container">

          <div className="section-intro">
            <div>
              <p className="section-eyebrow">ABOUT US</p>

              <h2>
                Engineering expertise.
                <br />
                Financial perspective.
                <br />
                One integrated approach.
              </h2>
            </div>

            <div className="section-intro-copy">
              <p>
                ABVOLT ENGINEERING AND FINANCIAL CONSULTANCY LTD is a
                UK-registered consultancy bringing together engineering
                design and financial management expertise under one
                integrated approach.
              </p>

              <Link to="/about" className="text-link">
                Discover ABVOLT
                <span>↗</span>
              </Link>
            </div>
          </div>


          {/* Vision / Mission */}
          <div className="about-vision-mission">

            <article className="about-feature">
              <span className="about-feature-number">01</span>

              <div>
                <h3>Vision</h3>

                <p>
                  To be a globally recognized consultancy partner,
                  bridging high-precision engineering design with
                  strategic financial solutions to empower sustainable
                  infrastructure, industrial innovation, and business
                  growth worldwide.
                </p>
              </div>
            </article>


            <article className="about-feature">
              <span className="about-feature-number">02</span>

              <div>
                <h3>Mission</h3>

                <p>
                  At ABVOLT ENGINEERING AND FINANCIAL CONSULTANCY LTD,
                  our mission is to deliver end-to-end expertise that
                  integrates technical engineering excellence with sound
                  financial management. We are committed to helping
                  international clients design efficient industrial
                  processes, optimize resource allocation, and achieve
                  sustainable profitability through customized
                  consultancy services, compliance integrity, and
                  relentless innovation.
                </p>
              </div>
            </article>

          </div>


          {/* Company overview */}
          <div className="about-overview">

            <div className="about-overview-heading">
              <p className="section-eyebrow">WHO WE ARE</p>

              <h3>
                Dual expertise.
                <br />
                Integrated solutions.
              </h3>
            </div>

            <div className="about-overview-copy">
              <p>
                ABVOLT ENGINEERING AND FINANCIAL CONSULTANCY LTD
                (Company No: 17422427) is a UK-registered private
                limited company headquartered in London.
              </p>

              <p>
                The firm operates as a dual-expertise consultancy,
                providing integrated solutions across two core pillars:
                engineering design and financial management.
              </p>

              <p>
                By combining technical engineering capabilities with
                strategic financial planning, ABVOLT assists global
                businesses, industrial operations, and infrastructure
                projects in optimizing technical workflows, managing
                capital allocation, and driving sustainable international
                growth.
              </p>
            </div>

          </div>


          {/* Primary Business Objectives */}
          <div className="about-objectives">

            <div className="about-objectives-heading">
              <p className="section-eyebrow">OUR APPROACH</p>

              <h3>Primary Business Objectives</h3>
            </div>

            <div className="objectives-list">

              <div className="objective-item">
                <span>01</span>
                <div>
                  <h4>Deliver Integrated Solutions</h4>
                  <p>
                    Provide end-to-end consultancy that aligns
                    industrial and technical engineering designs
                    directly with financial modeling to maximize
                    project return on investment.
                  </p>
                </div>
              </div>

              <div className="objective-item">
                <span>02</span>
                <div>
                  <h4>Expand Global Reach</h4>
                  <p>
                    Establish B2B consultancy partnerships across
                    international markets in power, infrastructure,
                    manufacturing, and commercial sectors.
                  </p>
                </div>
              </div>

              <div className="objective-item">
                <span>03</span>
                <div>
                  <h4>Optimize Operational Efficiency</h4>
                  <p>
                    Assist clients in streamlining industrial
                    processes, reducing project risks, and implementing
                    scalable financial structures.
                  </p>
                </div>
              </div>

              <div className="objective-item">
                <span>04</span>
                <div>
                  <h4>Ensure Regulatory & Technical Compliance</h4>
                  <p>
                    Deliver high-standard engineering designs and
                    financial management strategies that comply fully
                    with regional and international standards.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="services-section section-spacing">

        <div className="home-container">

          <div className="section-heading-row">

            <div>
              <p className="section-eyebrow">WHAT WE DO</p>

              <h2>Key Services</h2>
            </div>

            <p className="section-heading-description">
              Integrated consultancy capabilities combining technical
              engineering expertise with strategic business and
              financial thinking.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => (
              <Link
                to={service.path}
                className="service-card"
                key={service.number}
              >

                <div className="service-card-top">
                  <span>{service.number}</span>
                  <span className="service-arrow">↗</span>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-card-line" />

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          SECTORS
      ========================================================= */}
      <section className="sectors-section section-spacing">

        <div className="home-container">

          <div className="section-heading-row">

            <div>
              <p className="section-eyebrow">SECTORS</p>

              <h2>Sectors We Serve</h2>
            </div>

            <p className="section-heading-description">
              Our multidisciplinary approach allows us to support
              organizations across engineering-intensive and
              financially complex environments.
            </p>

          </div>


          <div className="sectors-grid">

            {sectors.map((sector) => (
              <Link
                to={sector.path}
                className="sector-card"
                key={sector.number}
              >

                <div className="sector-card-number">
                  {sector.number}
                </div>

                <div className="sector-card-content">

                  <h3>{sector.title}</h3>

                  <p>{sector.description}</p>

                  {sector.items.length > 0 && (
                    <div className="sector-tags">
                      {sector.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  )}

                </div>

                <span className="sector-card-arrow">↗</span>

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section className="projects-section section-spacing">

        <div className="home-container">

          <div className="section-heading-row">

            <div>
              <p className="section-eyebrow">PROJECTS</p>

              <h2>Experience that delivers.</h2>
            </div>

            <p className="section-heading-description">
              Explore the breadth of our consultancy capabilities
              across engineering, financial management, and
              integrated solutions.
            </p>

          </div>


          <div className="project-showcase">

            {projects.map((project) => (
              <div className="project-placeholder" key={project.number}>

                <div className="project-placeholder-number">
                  {project.number}
                </div>

                <div>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <Link to="/contact" className="text-link">
                    Enquire about our work
                    <span>↗</span>
                  </Link>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          SUSTAINABILITY
      ========================================================= */}
      <section className="sustainability-section section-spacing">

        <div className="home-container">

          <div className="sustainability-grid">

            <div className="sustainability-heading">

              <p className="section-eyebrow">
                SUSTAINABILITY
              </p>

              <h2>
                Growth that considers
                <span>the bigger picture.</span>
              </h2>

            </div>

            <div className="sustainability-copy">

              <p>
                We believe sustainable growth requires more than
                individual technical or financial decisions. It
                requires an integrated understanding of resources,
                operational efficiency, compliance, risk, and
                long-term value.
              </p>

              <p>
                Our consultancy approach brings these perspectives
                together to help organizations build solutions that
                are practical, scalable, and prepared for the future.
              </p>

              <Link
                to="/services/sustainability-solutions"
                className="text-link"
              >
                Explore Sustainability Solutions
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PEOPLE
      ========================================================= */}
      <section className="people-section section-spacing">

        <div className="home-container">

          <div className="people-content">

            <div>
              <p className="section-eyebrow">PEOPLE</p>

              <h2>
                Expertise is our
                <span>greatest asset.</span>
              </h2>
            </div>

            <div>
              <p>
                Our people bring together technical understanding,
                commercial awareness, and a commitment to delivering
                meaningful outcomes for clients across markets.
              </p>

              <Link to="/people" className="text-link">
                Meet Our People
                <span>↗</span>
              </Link>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="home-cta-section">

        <div className="home-container">

          <div className="home-cta-content">

            <p className="section-eyebrow">
              START A CONVERSATION
            </p>

            <h2>
              Have a project,
              <span>challenge, or opportunity?</span>
            </h2>

            <p>
              Tell us what you are looking to achieve and discover
              how ABVOLT can bring engineering and financial expertise
              together for your next initiative.
            </p>

            <Link
              to="/business-inquiry"
              className="cta-button"
            >
              Business Inquiry
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;