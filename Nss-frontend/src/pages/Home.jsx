
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './css/home.css';
import { Link } from 'react-router-dom';

const img1 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/2_jdwzpv.png';
const img2 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/1_iuv2k5.png';
const img3 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/3_h4lntl.png';
const img4 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328283/4_bikubx.png';
const img5 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328881/Client_Testimonial_anvcjx.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

import History from './History';
import useSEO from '../components/useSEO';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Partnership from './Partnerships';

const Home = () => {
  useSEO({
    title: 'NSS VIIT Pune | National Service Scheme - Vishwakarma Institute of Information Technology',
    description: 'Official website of National Service Scheme (NSS) Unit A-70 at VIIT Pune. 250+ student volunteers working towards social welfare, rural development, blood donation camps, and environmental sustainability.',
    keywords: 'NSS VIIT, National Service Scheme VIIT, NSS Pune, VIIT Pune NSS, NSS Unit A-70, Gram Setu, Blood Donation Camp VIIT',
    canonical: 'https://nss-viit.vercel.app/',
    ogImage: 'https://nss-viit.vercel.app/images/img/nss-logo.png',
  });

  useEffect(() => {
    Aos.init({ duration: 800, once: true, offset: 60 });
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
                <div className="hero-unit-badge" data-aos="fade-down">
                  🏆 Largest NSS Unit Among Engineering Colleges — Serving Since 2008
                </div>
                <img className="hero-nss-logo" alt="NSS Logo" src="https://res.cloudinary.com/diyw5ilre/image/upload/v1714587159/nss-logo_wecruv.png" />
                <h1>National Service Scheme</h1>
                <h2>VIIT, Pune — Unit A-70</h2>
                <p>"Not Me But You" — 250+ volunteers serving communities since 2008</p>
                <div className="hero-btns">
                  <a href="/about"><button className="btn-hero-primary">About Us</button></a>
                  <a href="/contact"><button className="btn-hero-outline">Get Involved</button></a>
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
                  <a href="/events"><button className="btn-hero-primary">Our Events</button></a>
                  <a href="/team"><button className="btn-hero-outline">Meet the Team</button></a>
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
                  <a href="/events"><button className="btn-hero-primary">Explore Events</button></a>
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
                  <a href="/contact"><button className="btn-hero-primary">Join Now</button></a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
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
          <a href="/about">
            <button className="btn-green" data-aos="fade-up" data-aos-delay="100">Discover Our Story</button>
          </a>
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
              <img className="d-block w-100 gallery-img" src={img1} alt="NSS VIIT Pune Activity" />
              <Carousel.Caption>
                <h3>Community Outreach</h3>
                <p>NSS VIIT Pune volunteers engaging with local communities</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img2} alt="NSS VIIT Pune Event" />
              <Carousel.Caption>
                <h3>Social Service</h3>
                <p>Making a difference through collective action</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img3} alt="NSS VIIT Pune Camp" />
              <Carousel.Caption>
                <h3>Annual Camp</h3>
                <p>A week of service, learning, and transformation</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img4} alt="NSS VIIT Pune Program" />
              <Carousel.Caption>
                <h3>Programs & Drives</h3>
                <p>Blood donation, plantation, and awareness campaigns</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 gallery-img" src={img5} alt="NSS VIIT Pune Testimonial" />
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
            60+ volunteers. 8 days of immersive rural service. Keynoted by Padma Shri Popatrao Pawar.
            Watershed management, children's education, cultural exchange, and a Dindi procession
            — NSS VIIT's most transformative camp yet.
          </p>
          <div className="gsb-stats">
            <div><strong>60+</strong><span>Volunteers</span></div>
            <div><strong>8</strong><span>Days</span></div>
            <div><strong>5</strong><span>Distinguished Guests</span></div>
            <div><strong>100%</strong><span>10th Result (5 yrs)</span></div>
          </div>
          <Link to="/gram-setu">
            <button className="gsb-cta">Explore Gram-Setu 2026 →</button>
          </Link>
        </div>
      </section>

      {/* ===== BEST PILLARS ===== */}
      <section className="pillars-section" data-aos="fade-up">
        <div className="pillars-inner">
          <span className="label-tag">Leadership · Batch 2025–26</span>
          <h2>The Foundation Builders</h2>
          <p className="pillars-sub">"Events are made by many, but the foundation is built by a few."</p>
          <div className="pillars-names">
            {['Yogesh Badbade', 'Omkar Sakore', 'Utkarsha Ahire', 'Pratiksha Deshmukh', 'Hemangi Bhamare', 'Sahil Deole', 'Harsh Satpute', 'Vivek Bhange'].map((name, i) => (
              <span key={i} className="pillar-chip">{name}</span>
            ))}
          </div>
          <div className="pillars-quote-block">
            <p className="pillars-thanks">"Thank you for being the best pillars of my presidency."</p>
            <div className="pillars-attribution">
              <div className="pillars-attr-line" />
              <div className="pillars-attr-text">
                <span className="pillars-attr-name">Sushant Gade</span>
                <span className="pillars-attr-role">President, NSS VIIT Pune · Batch 2025–26</span>
              </div>
            </div>
          </div>
          <Link to="/team"><button className="btn-green">Meet the Full Team</button></Link>
        </div>
      </section>

      {/* ===== PARTNERSHIPS ===== */}
      <Partnership />

      {/* ===== YOUTUBE ===== */}
      <section className="yt-section">
        <div className="yt-inner">
          <div data-aos="fade-up" className="yt-header">
            <span className="label-tag label-light">Watch & Connect</span>
            <h2>NSS VIIT Pune on YouTube</h2>
          </div>
          <div className="yt-grid">
            <div className="yt-card" data-aos="fade-up">
              <iframe src="https://www.youtube.com/embed/BpmAQ0vZqzI?si=kswNR7ylTQ4v8WMd" title="NSS VIIT Pune video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <div className="yt-card" data-aos="fade-up" data-aos-delay="80">
              <iframe src="https://www.youtube.com/embed/27fwd07CkZQ?si=kiYPj3WRRXm3djv4" title="NSS VIIT Pune video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <div className="yt-card" data-aos="fade-up" data-aos-delay="160">
              <iframe src="https://www.youtube.com/embed/m_V9093Wpow?si=gaeUnG4OFoSw3xi0" title="NSS VIIT Pune video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <a target="_blank" href="https://www.youtube.com/@nssviit8764" rel="noreferrer">
              <button className="btn-yt">Visit Our YouTube Channel</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
