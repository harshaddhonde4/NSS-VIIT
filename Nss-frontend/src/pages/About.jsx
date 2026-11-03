
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import useSEO from '../components/useSEO';

const About = () => {
  useSEO({
    title: 'About NSS VIIT Pune | Mission, Vision & History',
    description: 'Learn about NSS Unit A-70 at VIIT Pune, established in 2008. Discover our mission to prepare engineering students with social responsibility and rural engagement.',
    keywords: 'About NSS VIIT, NSS Unit A-70 history, NSS mission vision, VIIT Pune social club',
    canonical: 'https://nss-viit.vercel.app/about',
  });

  useEffect(() => {
    Aos.init({ duration: 800, once: true, offset: 60 });
  }, []);

  const mission = [
    {
      icon: '🎓',
      title: 'Competent Engineers & Citizens',
      desc: 'Prepare engineering students with professionalism, ethical responsibility, and the values of committed citizenship — so they serve both their profession and their nation.',
    },
    {
      icon: '🌍',
      title: 'Awareness of Community Challenges',
      desc: 'Raise student awareness of the real challenges faced by rural and urban communities — from sanitation to healthcare to financial literacy — through direct engagement.',
    },
    {
      icon: '🔧',
      title: 'Engineering Skills in Social Service',
      desc: 'Address societal problems through dedicated social service, educational awareness programs, and the practical application of engineering skills in the field.',
    },
  ];

  return (
    <>
      <section className="about-us">

        {/* Page Banner */}
        <div className="page-banner">
          <span className="label-tag label-light" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)', position: 'relative', zIndex: 1 }}>National Service Scheme</span>
          <h1>About NSS VIIT Pune</h1>
          <p>Unit A-70 — Serving communities through selfless service since 2008</p>
        </div>

        {/* ── About the Institute ── */}
        <div style={{ background: '#F8FAFC', padding: '6rem 0 0' }}>
          <div className="about-grid" data-aos="fade-up">
            <div className="img">
              <img src="https://res.cloudinary.com/diyw5ilre/image/upload/v1715024956/nss/Events/IMG_3285_stbwpb.jpg" className="about-img" alt="NSS VIIT Pune volunteers" />
            </div>
            <div className="text-1" style={{ background: '#FFFFFF', padding: '3.2rem', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <span className="label-tag">The Institute</span>
              <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0A1128', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                Vishwakarma Institute of Information Technology
              </h1>
              <p style={{ textAlign: 'left', fontSize: '1.55rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                VIIT is an autonomous engineering college in Pune, established in 2002, affiliated to Savitribai Phule Pune University. Autonomy was granted in 2017–18.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.8rem' }}>
                {['NAAC \'A\' Grade', 'NIRF Engg. 201–250', 'NIRF Innovation 101–150 (2023)', 'Est. 2002', 'Autonomous since 2017–18'].map((tag, i) => (
                  <span key={i} style={{ padding: '0.5rem 1.4rem', background: '#f0f9f4', border: '1px solid #1B6B3A', borderRadius: '50px', color: '#1B6B3A', fontSize: '1.25rem', fontWeight: 700, fontFamily: '"Inter", sans-serif' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Who We Are ── */}
          <div className="about-grid" data-aos="fade-up">
            <div className="text-1" style={{ background: '#FFFFFF', padding: '3.2rem', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <span className="label-tag">Our Identity</span>
              <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0A1128', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                NSS VIIT Pune — Unit A-70
              </h1>
              <p style={{ textAlign: 'left', fontSize: '1.55rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.6rem' }}>
                The National Service Scheme (NSS) at VIIT — Unit A-70 — was established in 2008 by Dr. A.S. Tavildar, Dr. R.S. Acharya, and Prof. B.P. Dane with 35 founding volunteers. Today, 250+ active volunteers embody the motto <em>"Not Me But You"</em> through selfless service, community engagement, and national integration.
              </p>
              <p style={{ textAlign: 'left', fontSize: '1.55rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                NSS VIIT Pune is the <strong>largest NSS unit among engineering colleges in Pune</strong>. Our adopted village — Jamgaon, Mulshi (Disli) — achieved Nirmal Gram status in January 2010 and continues to grow with our support every year.
              </p>
              <Link to="/team">
                <button className="btn-green" style={{ background: 'linear-gradient(135deg, #1B6B3A, #2D9055)', color: '#fff', border: 'none', padding: '1.1rem 2.8rem', borderRadius: '50px', fontSize: '1.4rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 16px rgba(27,107,58,0.3)' }}>Meet the Team</button>
              </Link>
            </div>
            <div className="img">
              <img src="https://res.cloudinary.com/diyw5ilre/image/upload/v1715024431/nss/Events/IMG_20230815_130457_syk6ka.jpg" className="about-img" alt="NSS VIIT Pune volunteers in action" />
            </div>
          </div>
        </div>

        {/* ── Mission Cards ── */}
        <div style={{ background: '#F8FAFC', padding: '5rem 3rem 6rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="label-tag">Our Purpose</span>
            <h2 className="main-heading" style={{ marginTop: '0.8rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.6rem', color: '#64748B', maxWidth: '60rem', margin: '0 auto' }}>
              The motto <em>"Not Me But You"</em> reflects the essence of democratic living and the need for selfless service. NSS helps students develop appreciation for others' perspectives and show consideration to all living beings.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.4rem', maxWidth: '110rem', margin: '0 auto' }}>
            {mission.map((m, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 80} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '3rem 2.8rem', border: '1px solid #e2e8f0', borderTop: '4px solid #1B6B3A', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ fontSize: '3rem' }}>{m.icon}</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0A1128', fontFamily: '"Inter", sans-serif', margin: 0 }}>{m.title}</h3>
                <p style={{ fontSize: '1.45rem', color: '#64748B', lineHeight: 1.75, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Flagship Event — Gram-Setu ── */}
        <div className="about-section-events">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label-tag label-light" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}>Flagship Programs</span>
            <h2>Connect With Our Flagship Events</h2>
          </div>

          <div className="about-grid" data-aos="fade-up">
            <div className="text">
              <h1>Gram-Setu — NSS Residential Camp 2026</h1>
              <p>
                The NSS Residential Camp at Jamgaon village, Mulshi (21–28 January 2026) brought 60+ engineering volunteers into the heart of rural India for 8 transformative days. Keynoted by Padma Shri Popatrao Pawar — architect of India's model village Hiware Bazar — the camp included watershed management, children's education, the Dindi procession, and the street play "Paristhitichi Janiv." This is NSS VIIT Pune's flagship program and our most impactful camp yet.
              </p>
              <Link to="/gram-setu">
                <button className="btn-green" style={{ background: 'linear-gradient(135deg, #1B6B3A, #2D9055)', color: '#fff', border: 'none', padding: '1.1rem 2.8rem', borderRadius: '50px', fontSize: '1.4rem', fontWeight: 700, cursor: 'pointer', marginTop: '1rem' }}>Explore Gram-Setu 2026</button>
              </Link>
            </div>
            <div className="about-section-events-img-1 img">
              <img src="https://res.cloudinary.com/diyw5ilre/image/upload/v1715019790/nss/Events/1_trmyhl.jpg" className="about-img" alt="Gram-Setu NSS Residential Camp" />
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }} />

          <div className="about-grid" data-aos="fade-up">
            <div className="about-section-events-img-2 img">
              <img src="https://res.cloudinary.com/diyw5ilre/image/upload/v1715023958/nss/Events/2_dkekcc.jpg" className="about-img" alt="Rakta-Setu Blood Donation Drive" />
            </div>
            <div className="text">
              <h1>Rakta-Setu — Blood Donation Drive 2025</h1>
              <p>
                7–8 October 2025 — 956+ participants, 385 student blood donors, and 11 types of free medical check-ups including ECG and Hemoglobin. Partnered with Adhar Blood Bank, complemented by seminars on Breast Cancer awareness and PCOD. A landmark healthcare and civic initiative that demonstrates the scale of NSS VIIT's outreach.
              </p>
              <Link to="/events">
                <button className="btn-green" style={{ background: 'linear-gradient(135deg, #1B6B3A, #2D9055)', color: '#fff', border: 'none', padding: '1.1rem 2.8rem', borderRadius: '50px', fontSize: '1.4rem', fontWeight: 700, cursor: 'pointer', marginTop: '1rem' }}>View All Events</button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Closing Quote ── */}
        <div style={{ background: '#F8FAFC', padding: '6rem 3rem', textAlign: 'center' }}>
          <div data-aos="fade-up" style={{ maxWidth: '70rem', margin: '0 auto', padding: '3rem 4rem', background: '#FFFFFF', borderRadius: '20px', borderLeft: '5px solid #F59E0B', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '0.5rem', left: '1.5rem', fontSize: '8rem', color: 'rgba(245,158,11,0.1)', fontFamily: 'Georgia, serif', lineHeight: 1, userSelect: 'none' }}>"</div>
            <blockquote style={{ fontSize: '2.2rem', fontStyle: 'italic', color: '#1B6B3A', fontFamily: '"Inter", sans-serif', lineHeight: 1.7, margin: 0, position: 'relative', zIndex: 1 }}>
              "It was never about the output; it was always about the journey and the experiences we shared."
            </blockquote>
            <cite style={{ display: 'block', marginTop: '1.4rem', fontSize: '1.4rem', color: '#94A3B8', fontStyle: 'normal', fontWeight: 600, fontFamily: '"Inter", sans-serif' }}>— NSS VIIT Pune · Batch 2025–26</cite>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <Link to="/achievements">
              <button className="btn-green" style={{ background: 'linear-gradient(135deg, #1B6B3A, #2D9055)', color: '#fff', border: 'none', padding: '1.1rem 2.8rem', borderRadius: '50px', fontSize: '1.4rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 16px rgba(27,107,58,0.3)' }}>View Our Achievements</button>
            </Link>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;
