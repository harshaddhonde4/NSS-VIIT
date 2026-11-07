import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './css/home.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import { toAssetUrl } from '../utils/assetHelper';

const img1 = toAssetUrl('/images/GramSetu_2026/hero_banner.webp');
const img2 = toAssetUrl('/images/reports/11_Blood_Donation_Camp/img_07.webp');
const img3 = toAssetUrl('/images/reports/6_SPO/img_02.webp');
const img4 = toAssetUrl('/images/reports/9_Swachata_hi_seva/img_02.webp');
const img5 = toAssetUrl('/images/reports/3_Independence_Day_Documentation/img_02.webp');

import History from './History';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Partnership from './Partnerships';

const Home = () => {
  useEffect(() => {
    document.title = 'NSS VIIT Pune | National Service Scheme';
  }, []);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      {/* ===== HERO — Full-screen image carousel with text overlay ===== */}
      <section className="hero-section">
        <Carousel className="hero-carousel" fade interval={4000} controls={false} pause={false}>
          <Carousel.Item>
            <div className="hero-slide" style={{ backgroundImage: `url(${img1})` }}>
              <div className="hero-overlay" />
              <div className="hero-slide-content">
                <div className="hero-unit-badge" data-aos="fade-down" style={{ marginBottom: '1.5rem' }}>
                  🏆 Conferred &apos;Krantikari of The Year&apos; Award · Serving Since 2008
                </div>
                <h1>National Service Scheme</h1>
                <h2>VIIT, Pune — Unit A-70</h2>
                <p>&quot;Not Me But You&quot; — 250+ volunteers serving communities since 2008</p>
                <div className="hero-btns">
                  <Link to="/about">
                    <button type="button" className="btn-hero-primary">About Us</button>
                  </Link>
                  <Link to="/contact">
                    <button type="button" className="btn-hero-outline">Get Involved</button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="hero-slide" style={{ backgroundImage: `url(${img2})` }}>
              <div className="hero-overlay" />
              <div className="hero-slide-content">
                <h1>Empowering Communities</h1>
                <h2>Building Leaders of Tomorrow</h2>
                <p>250+ active volunteers making a difference every day across Pune</p>
                <div className="hero-btns">
                  <Link to="/events">
                    <button type="button" className="btn-hero-primary">Our Events</button>
                  </Link>
                  <Link to="/team">
                    <button type="button" className="btn-hero-outline">Meet the Team</button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="hero-slide" style={{ backgroundImage: `url(${img3})` }}>
              <div className="hero-overlay" />
              <div className="hero-slide-content">
                <h1>300+ Events Organized</h1>
                <h2>Creating Lasting Impact</h2>
                <p>Blood donations, rural development, education drives, and more</p>
                <div className="hero-btns">
                  <Link to="/events">
                    <button type="button" className="btn-hero-primary">Explore Events</button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="hero-slide" style={{ backgroundImage: `url(${img4})` }}>
              <div className="hero-overlay" />
              <div className="hero-slide-content">
                <h1>Join Our Mission</h1>
                <h2>Be the Change You Wish to See</h2>
                <p>Volunteer with NSS VIIT Pune and transform lives, including yours</p>
                <div className="hero-btns">
                  <Link to="/contact">
                    <button type="button" className="btn-hero-primary">Join Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* ===== HISTORIC MILESTONE: VIIT-VIT MERGER & UNIT A-70 LEGACY TRANSITION ===== */}
      <section className="merger-legacy-section" style={{
        background: 'linear-gradient(135deg, #0A1128 0%, #0F172A 50%, #1E293B 100%)',
        padding: '7rem 2rem',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '3px solid #F59E0B',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }} data-aos="fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)', padding: '0.6rem 2rem', borderRadius: '50px', marginBottom: '2rem' }}>
            <span style={{ color: '#F59E0B', fontSize: '1.4rem', fontWeight: 800 }}>★ HISTORIC INSTITUTIONAL MILESTONE</span>
            <span style={{ color: '#CBD5E1', fontSize: '1.25rem' }}>Unit A-70 (2008–2026) ➔ Unit A-65</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(2.8rem, 4vw, 4.2rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.8rem', letterSpacing: '-0.02em' }}>
            A Storied 18-Year Chapter Concludes — <br />
            <span style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #60A5FA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              The Legacy Marches Forward United under NSS VIT Unit A-65
            </span>
          </h2>
          
          <p style={{ fontSize: '1.65rem', color: '#94A3B8', maxWidth: '880px', margin: '0 auto 4rem', lineHeight: 1.8 }}>
            With the formal merger of <strong>Vishwakarma Institute of Information Technology (VIIT)</strong> and <strong>Vishwakarma Institute of Technology (VIT) Pune</strong> under the Bansilal Ramnath Agarwal Charitable Trust (BRACT), <strong>Batch 2025–26 stands as the historic final graduating tenure of NSS VIIT Unit A-70</strong>. We sign off with profound pride in our 18-year grassroots journey at Jamgaon, passing the sacred torch of <em>&quot;Not Me But You&quot;</em> to <strong>NSS VIT Unit A-65</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', textAlign: 'left', marginBottom: '4rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>🚩</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F59E0B', marginBottom: '0.8rem' }}>18 Years in Jamgaon</h3>
              <p style={{ fontSize: '1.4rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                Continuous village adoption since 2008: building continuous contour trenches, check dams, and achieving 100% 10th board passing rates at Disali School for 5 straight years.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>🏆</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8', marginBottom: '0.8rem' }}>Highest State Laurels</h3>
              <p style={{ fontSize: '1.4rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                Conferred the state &apos;Krantikari of the Year&apos; award on Shaheed Diwas 2025, Best NSS Unit at Pune University, and front-page recognition in Maharashtra state press.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>🩸</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F43F5E', marginBottom: '0.8rem' }}>Civic & Lifesaving Scale</h3>
              <p style={{ fontSize: '1.4rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                3,500+ blood units collected in flagship drives like Rakta-Setu, stem-cell donations saving young lives, and 122+ Special Police Officers deployed during Ganesh Visarjan.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '2.5rem', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34D399', marginBottom: '0.8rem' }}>Unified Torch: A-65</h3>
              <p style={{ fontSize: '1.4rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                The mission, volunteers, leadership principles, and adopted community commitments now unite under NSS VIT Unit A-65, expanding service capacity to unprecedented heights.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/about">
              <button type="button" className="btn-hero-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.45rem', borderRadius: '50px' }}>
                Read Full Legacy Chronicle
              </button>
            </Link>
            <Link to="/team">
              <button type="button" className="btn-hero-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.45rem', borderRadius: '50px' }}>
                Batch 2025–26 Signing Off Team
              </button>
            </Link>
            <a href="https://swd.vit.edu/nss/nss.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button type="button" className="btn-hero-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.45rem', borderRadius: '50px', background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)', border: '1px solid rgba(255,255,255,0.3)', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}>
                <span>NSS VIT Unit A-65 Portal</span> <FaExternalLinkAlt style={{ fontSize: '1.2rem' }} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES US NSS — with background image ===== */}
      <section className="what-section">
        <div className="what-content" data-aos="fade-up">
          <span className="label-tag">Who We Are</span>
          <h2>What Makes Us NSS</h2>
          <div className="what-divider"></div>
          <p>
            The National Service Scheme (NSS) at Vishwakarma Institute of Information Technology (VIIT), Pune,
            embodies a commitment to community engagement and social responsibility among its students. Through
            various outreach programs, volunteer activities, and initiatives, NSS VIIT Pune fosters a culture of
            service and civic involvement. By participating in projects aimed at education, healthcare, environmental
            conservation, and community development, students not only contribute positively to society but also gain
            invaluable practical experiences and develop leadership skills.
          </p>
          <Link to="/about">
            <button type="button" className="btn-green" data-aos="fade-up" data-aos-delay="100">
              Discover Our Story
            </button>
          </Link>
        </div>
      </section>

      {/* ===== HISTORY TIMELINE ===== */}
      <History />

      {/* ===== PHOTO GALLERY CAROUSEL ===== */}
      <section className="gallery-section">
        <div className="gallery-header" data-aos="fade-up">
          <span className="label-tag label-light">Gallery</span>
          <h2>Our Moments</h2>
          <p className="gallery-sub">Glimpses of the lives we&apos;ve touched and communities we serve</p>
        </div>
        <div className="gallery-carousel-wrap" data-aos="zoom-in">
          <Carousel className="gallery-carousel" interval={3000} slide controls indicators>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img1} alt="NSS VIIT Pune Activity" loading="lazy" decoding="async" />
              <Carousel.Caption>
                <h3>Community Outreach</h3>
                <p>NSS VIIT Pune volunteers engaging with local communities</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img2} alt="NSS VIIT Pune Event" loading="lazy" decoding="async" />
              <Carousel.Caption>
                <h3>Social Service</h3>
                <p>Making a difference through collective action</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img3} alt="NSS VIIT Pune Camp" loading="lazy" decoding="async" />
              <Carousel.Caption>
                <h3>Annual Camp</h3>
                <p>A week of service, learning, and transformation</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img4} alt="NSS VIIT Pune Program" loading="lazy" decoding="async" />
              <Carousel.Caption>
                <h3>Programs &amp; Drives</h3>
                <p>Blood donation, plantation, and awareness campaigns</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img5} alt="NSS VIIT Pune Testimonial" loading="lazy" decoding="async" />
              <Carousel.Caption>
                <h3>Volunteer Testimonials</h3>
                <p>Stories of growth, service, and impact</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* ===== STATS COUNTER ===== */}
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <section className="stats-section">
          <div className="stats-inner" data-aos="fade-up">
            <span className="label-tag">Our Impact</span>
            <h2>NSS VIIT Pune in Numbers</h2>
            <div className="stats-row">
              <div className="stat-item" data-aos="fade-up" data-aos-delay="0">
                <div className="stat-num">
                  {counterOn && <CountUp start={0} end={250} duration={4} delay={0} />}+
                </div>
                <div className="stat-label">Active Volunteers</div>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="80">
                <div className="stat-num">
                  {counterOn && <CountUp start={0} end={956} duration={4} delay={0} />}+
                </div>
                <div className="stat-label">Rakta-Setu Participants</div>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="160">
                <div className="stat-num">
                  {counterOn && <CountUp start={0} end={385} duration={4} delay={0} />}
                </div>
                <div className="stat-label">Blood Units Donated</div>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="240">
                <div className="stat-num">
                  {counterOn && <CountUp start={0} end={620} duration={4} delay={0} />}+
                </div>
                <div className="stat-label">Trees Planted</div>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="320">
                <div className="stat-num">
                  {counterOn && <CountUp start={0} end={122} duration={4} delay={0} />}+
                </div>
                <div className="stat-label">SPO Volunteers</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>

      {/* ===== FEATURED: GRAM-SETU 2026 BANNER ===== */}
      <section className="gram-setu-banner" data-aos="fade-up">
        <div className="gsb-overlay" />
        <div className="gsb-content">
          <div className="gsb-eyebrow">
            <span className="gsb-flag">★ NSS Flagship Residential Camp</span>
          </div>
          <h2>Gram-Setu 2026</h2>
          <p className="gsb-sub">21–28 January 2026 · Jamgaon Village, Mulshi, Pune</p>
          <p className="gsb-desc">
            60+ volunteers. 7 days of immersive rural service. Keynoted by Padma Shri Popatrao Pawar.
            Watershed management, children&apos;s education, cultural exchange, and a Dindi procession
            — NSS VIIT&apos;s most transformative camp yet.
          </p>
          <div className="gsb-stats">
            <div><strong>60+</strong><span>Volunteers</span></div>
            <div><strong>7</strong><span>Days</span></div>
            <div><strong>5</strong><span>Distinguished Guests</span></div>
            <div><strong>100%</strong><span>10th Result (5 yrs)</span></div>
          </div>
          <div style={{ display: 'flex', gap: '1.4rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <Link to="/gramsetu">
              <button type="button" className="gsb-cta">Explore Gram-Setu 2026 →</button>
            </Link>
            <Link to="/gramsetu#jamgaon-reels">
              <button type="button" className="gsb-cta" style={{ background: 'linear-gradient(135deg, #E1306C, #FD1D1D)', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}>
                <FaInstagram style={{ fontSize: '1.7rem' }} />
                <span>Watch Daily Reels Hub (Days 1–6)</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BEST PILLARS ===== */}
      <section className="pillars-section" data-aos="fade-up">
        <div className="pillars-inner">
          <span className="label-tag">Leadership · Batch 2025–26</span>
          <h2>The Foundation Builders</h2>
          <p className="pillars-sub">&quot;Events are made by many, but the foundation is built by a few.&quot;</p>
          <div className="pillars-names">
            {['Yogesh Badbade', 'Omkar Sakore', 'Utkarsha Ahire', 'Pratiksha Deshmukh', 'Hemangi Bhamare', 'Sahil Deole', 'Harsh Satpute', 'Vivek Bhange'].map((name, i) => (
              <span key={i} className="pillar-chip">{name}</span>
            ))}
          </div>
          <div className="pillars-quote-block">
            <p className="pillars-thanks">&quot;Thank you for being the best pillars of my presidency.&quot;</p>
            <div className="pillars-attribution">
              <div className="pillars-attr-line" />
              <div className="pillars-attr-text">
                <span className="pillars-attr-name">Sushant Gade</span>
                <span className="pillars-attr-role">President, NSS VIIT Pune · Batch 2025–26</span>
              </div>
            </div>
          </div>
          <div className="pillars-actions" style={{ display: 'flex', gap: '1.4rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <Link to="/team">
              <button type="button" className="btn-green">Meet the Full Team</button>
            </Link>
            <Link to="/team#core-reveal">
              <button type="button" className="btn-hero-outline" style={{ borderColor: '#F59E0B', color: '#D97706', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700' }}>
                🎬 Watch 2025–26 Reveal Reel
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIPS ===== */}
      <Partnership />

      {/* ===== YOUTUBE ===== */}
      <section className="yt-section">
        <div className="yt-inner">
          <div data-aos="fade-up" className="yt-header">
            <span className="label-tag label-light">Watch &amp; Connect</span>
            <h2>NSS VIIT Pune on YouTube</h2>
          </div>
          <div className="yt-grid">
            <div className="yt-card" data-aos="fade-up">
              <iframe
                src="https://www.youtube.com/embed/BpmAQ0vZqzI?si=kswNR7ylTQ4v8WMd"
                title="NSS VIIT Pune video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="yt-card" data-aos="fade-up" data-aos-delay="80">
              <iframe
                src="https://www.youtube.com/embed/27fwd07CkZQ?si=kiYPj3WRRXm3djv4"
                title="NSS VIIT Pune video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="yt-card" data-aos="fade-up" data-aos-delay="160">
              <iframe
                src="https://www.youtube.com/embed/m_V9093Wpow?si=gaeUnG4OFoSw3xi0"
                title="NSS VIIT Pune video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <a target="_blank" href="https://www.youtube.com/@nssviit8764" rel="noopener noreferrer">
              <button type="button" className="btn-yt">Visit Our YouTube Channel</button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== LINKEDIN COMMUNITY CALLOUT ===== */}
      <section
        className="linkedin-community-section"
        data-aos="fade-up"
        style={{
          padding: '5rem 2rem',
          background: 'linear-gradient(135deg, #0A1128 0%, #0F172A 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.6rem 1.6rem',
              background: 'rgba(10, 102, 194, 0.15)',
              borderRadius: '30px',
              border: '1px solid rgba(10, 102, 194, 0.4)',
              color: '#60A5FA',
              fontSize: '1.3rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08rem',
            }}
          >
            <FaLinkedin style={{ fontSize: '1.8rem', color: '#0A66C2' }} /> Official LinkedIn Network
          </div>
          <h2
            style={{
              fontSize: '3.2rem',
              fontWeight: '900',
              color: '#FFFFFF',
              marginBottom: '1.2rem',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Connect with NSS VIIT on LinkedIn
          </h2>
          <p
            style={{
              fontSize: '1.6rem',
              color: '#94A3B8',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
            }}
          >
            Follow our verified updates, event dispatches, volunteer features, and corporate-social partnerships
            directly from the largest student community in Pune.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.linkedin.com/company/national-service-scheme-nss-viit/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                background: '#0A66C2',
                color: '#FFFFFF',
                padding: '1.2rem 2.8rem',
                borderRadius: '8px',
                fontSize: '1.5rem',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(10, 102, 194, 0.4)',
                transition: 'all 0.2s ease',
              }}
            >
              <FaLinkedin style={{ fontSize: '2rem' }} />
              <span>Follow NSS VIIT on LinkedIn ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/posts/alumni-relations-of-vishwakarma-institutes-8ab33238b_padmashree-leadership-gramsetu2026-ugcPost-7427905347924672512-xytp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#E2E8F0',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '1.2rem 2.4rem',
                borderRadius: '8px',
                fontSize: '1.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span>Alumni Gram-Setu Post ↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
