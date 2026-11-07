import useSEO from '../components/useSEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const About = () => {
  useSEO({
    title: 'About Us | NSS VIIT Pune · 18-Year Legacy & Heritage',
    description: 'Learn about the origin, mission, values, and 18-year legacy of NSS VIIT Unit A-70 (2008–2026). Explore our rural adoption at Jamgaon and transition to NSS VIT Unit A-65.',
    keywords: 'About NSS VIIT, NSS VIIT history, Jamgaon adoption, NSS motto Not Me But You, VIIT social initiatives',
    canonical: 'https://nss-viit.vercel.app/about',
  });

  useEffect(() => {
    document.title = 'NSS VIIT Pune | About';
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
          <span
            className="label-tag label-light"
            style={{
              background: 'rgba(245,158,11,0.1)',
              color: '#F59E0B',
              border: '1px solid rgba(245,158,11,0.25)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            National Service Scheme
          </span>
          <h1>About NSS VIIT Pune</h1>
          <p>Unit A-70 — Serving communities through selfless service since 2008</p>
        </div>

        {/* ── About the Institute ── */}
        <div style={{ background: '#F8FAFC', padding: '6rem 0 0' }}>
          <div className="about-grid" data-aos="fade-up">
            <div className="img">
              <img
                src="https://res.cloudinary.com/diyw5ilre/image/upload/f_auto,q_auto:eco,w_800/v1715024956/nss/Events/IMG_3285_stbwpb.jpg"
                className="about-img"
                alt="NSS VIIT Pune volunteers"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text">
              <h1>Vishwakarma Institute of Information Technology, Pune</h1>
              <p>
                Vishwakarma Institute of Information Technology (VIIT) was established in 2002 by Bansilal Ramnath
                Agarwal Charitable Trust (BRACT), Pune, Maharashtra. An autonomous institute affiliated to Savitribai
                Phule Pune University, VIIT is NAAC accredited with an &apos;A+&apos; grade and is recognized as one of
                Pune&apos;s premier engineering institutions.
              </p>
            </div>
          </div>
        </div>

        {/* ── HISTORIC MERGER & LEGACY TRANSITION (2008–2026) ── */}
        <div id="merger-legacy" style={{ background: '#0F172A', padding: '7rem 2rem', color: '#FFFFFF', borderTop: '4px solid #F59E0B', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }} data-aos="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="label-tag" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.4)' }}>
                Institutional Transition · 2008–2026
              </span>
              <h2 style={{ fontSize: 'clamp(2.8rem, 4vw, 3.8rem)', fontWeight: 900, color: '#FFFFFF', marginTop: '1.5rem', marginBottom: '1.2rem' }}>
                The VIIT–VIT Merger & Unit A-70 Legacy
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.6rem', maxWidth: '820px', margin: '0 auto', lineHeight: 1.7 }}>
                Passing the torch of grassroots social transformation from NSS VIIT Unit A-70 to NSS VIT Unit A-65 under the unified banner of Vishwakarma Institute of Technology.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '4rem', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', marginBottom: '3.5rem' }}>
              <h3 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#F59E0B', marginBottom: '1.5rem' }}>
                A Historic Turning Point for Vishwakarma NSS
              </h3>
              <p style={{ fontSize: '1.6rem', color: '#E2E8F0', lineHeight: 1.8, marginBottom: '2rem' }}>
                In 2026, the Bansilal Ramnath Agarwal Charitable Trust (BRACT) accomplished a milestone institutional integration: the formal merger of <strong>Vishwakarma Institute of Information Technology (VIIT Pune, established 2002)</strong> and <strong>Vishwakarma Institute of Technology (VIT Pune, established 1983)</strong> into a single unified powerhouse entity: <strong>Vishwakarma Institute of Technology, Pune</strong>.
              </p>
              <p style={{ fontSize: '1.6rem', color: '#E2E8F0', lineHeight: 1.8, marginBottom: '2rem' }}>
                Under this historic consolidation, <strong>Batch 2025–26 officially marks the culminating tenure of NSS VIIT Unit A-70</strong>. For 18 glorious years (from its foundation under SPPU in 2008 to the final Gram-Setu camp in 2026), Unit A-70 stood as a beacon of youth character building, grassroots engineering, and empathetic civic service.
              </p>
              <p style={{ fontSize: '1.6rem', color: '#E2E8F0', lineHeight: 1.8 }}>
                Far from concluding, this sacred tradition of social commitment is now permanently transitioned to and unified with <strong>NSS VIT Unit A-65</strong>. The enduring adoption of Jamgaon village, the lifesaving Rakta-Setu blood donations, the civic policing partnerships during Ganpati Visarjan, and the guiding motto <em>&quot;NOT ME BUT YOU&quot;</em> now march forward with double the vigor, reach, and institutional resources.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '18px', borderLeft: '4px solid #10B981' }}>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10B981', marginBottom: '1rem' }}>Unit A-70 (2008–2026)</h4>
                <p style={{ fontSize: '1.45rem', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
                  18 years of foundational service, 18 residential camps in Jamgaon, 3,500+ blood donations, &apos;Krantikari of the Year&apos; award, and 1,200+ trained engineering volunteers.
                </p>
              </div>

              <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '18px', borderLeft: '4px solid #38BDF8' }}>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8', marginBottom: '1rem' }}>Batch 2025–26: The Signing Off Batch</h4>
                <p style={{ fontSize: '1.45rem', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
                  Led by President Sushant Gade and PO Dr. Vikas Kolekar, the 2025–26 team achieved the highest institutional recognition, completing the circle of excellence before handover.
                </p>
              </div>

              <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '18px', borderLeft: '4px solid #F59E0B' }}>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F59E0B', marginBottom: '1rem' }}>NSS VIT Unit A-65: The Future</h4>
                <p style={{ fontSize: '1.45rem', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
                  The unified flagship carrying the flame into tomorrow — preserving our adopted villages, scaling community healthcare, and cultivating national leaders.
                </p>
                <div style={{ marginTop: '1.6rem' }}>
                  <a href="https://swd.vit.edu/nss/nss.html" target="_blank" rel="noopener noreferrer" style={{ color: '#F59E0B', fontSize: '1.4rem', fontWeight: 700, textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span>Visit Official NSS VIT Portal</span> <FaExternalLinkAlt style={{ fontSize: '1.1rem' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── About the NSS VIIT Unit ── */}
        <div style={{ background: '#F8FAFC', padding: '4rem 0 0' }}>
          <div className="about-grid" data-aos="fade-up">
            <div
              className="text-1"
              style={{
                background: '#FFFFFF',
                padding: '3.2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid #e2e8f0',
              }}
            >
              <span className="label-tag">Our Identity</span>
              <h1
                style={{
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: '#0A1128',
                  textTransform: 'uppercase',
                  marginBottom: '1.2rem',
                }}
              >
                NSS VIIT Pune — Unit A-70
              </h1>
              <p
                style={{
                  textAlign: 'left',
                  fontSize: '1.55rem',
                  color: '#475569',
                  lineHeight: 1.8,
                  marginBottom: '1.6rem',
                }}
              >
                The National Service Scheme (NSS) at VIIT — Unit A-70 — was established in 2008 by Dr. A.S. Tavildar,
                Dr. R.S. Acharya, and Prof. B.P. Dane with 35 founding volunteers. Today, 250+ active volunteers embody
                the motto <em>&quot;Not Me But You&quot;</em> through selfless service, community engagement, and
                national integration.
              </p>
              <p
                style={{
                  textAlign: 'left',
                  fontSize: '1.55rem',
                  color: '#475569',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                }}
              >
                NSS VIIT Pune is the <strong>largest NSS unit among engineering colleges in Pune</strong>. Our adopted
                village — Jamgaon, Mulshi (Disli) — achieved Nirmal Gram status in January 2010 and continues to grow
                with our support every year.
              </p>
              <Link to="/team">
                <button
                  type="button"
                  className="btn-green"
                  style={{
                    background: 'linear-gradient(135deg, #1B6B3A, #2D9055)',
                    color: '#fff',
                    border: 'none',
                    padding: '1.1rem 2.8rem',
                    borderRadius: '50px',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(27,107,58,0.3)',
                  }}
                >
                  Meet the Team
                </button>
              </Link>
            </div>
            <div className="img">
              <img
                src="https://res.cloudinary.com/diyw5ilre/image/upload/f_auto,q_auto:eco,w_800/v1715024431/nss/Events/IMG_20230815_130457_syk6ka.jpg"
                className="about-img"
                alt="NSS VIIT Pune volunteers in action"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* ── Mission Cards ── */}
        <div style={{ background: '#F8FAFC', padding: '5rem 3rem 6rem' }}>
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="label-tag">Our Purpose</span>
            <h2 className="main-heading" style={{ marginTop: '0.8rem' }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '1.6rem', color: '#64748B', maxWidth: '60rem', margin: '0 auto' }}>
              The motto <em>&quot;Not Me But You&quot;</em> reflects the essence of democratic living and the need for
              selfless service. NSS helps students develop appreciation for others&apos; perspectives and show
              consideration to all living beings.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2.4rem',
              maxWidth: '110rem',
              margin: '0 auto',
            }}
          >
            {mission.map((m, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '3rem 2.8rem',
                  border: '1px solid #e2e8f0',
                  borderTop: '4px solid #1B6B3A',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                }}
              >
                <div style={{ fontSize: '3rem' }}>{m.icon}</div>
                <h3
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: '#0A1128',
                    fontFamily: '"Inter", sans-serif',
                    margin: 0,
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontSize: '1.45rem', color: '#64748B', lineHeight: 1.75, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Flagship Event — Gram-Setu ── */}
        <div className="about-section-events">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              className="label-tag label-light"
              style={{
                background: 'rgba(245,158,11,0.1)',
                color: '#F59E0B',
                border: '1px solid rgba(245,158,11,0.25)',
              }}
            >
              Flagship Programs
            </span>
            <h2>Connect With Our Flagship Events</h2>
          </div>

          <div className="about-grid" data-aos="fade-up">
            <div className="text">
              <h1>Gram-Setu — NSS Residential Camp 2026</h1>
              <p>
                The NSS Residential Camp at Jamgaon village, Mulshi (21–28 January 2026) brought 60+ engineering
                volunteers into the heart of rural India for 8 transformative days. Keynoted by Padma Shri Popatrao
                Pawar — architect of India&apos;s model village Hiware Bazar — the camp included watershed management,
                children&apos;s education, the Dindi procession, and the street play &quot;Paristhitichi Janiv.&quot;
                This is NSS VIIT Pune&apos;s flagship program and our most impactful camp yet.
              </p>
              <Link to="/gram-setu">
                <button
                  type="button"
                  className="btn-green"
                  style={{
                    background: 'linear-gradient(135deg, #1B6B3A, #2D9055)',
                    color: '#fff',
                    border: 'none',
                    padding: '1.1rem 2.8rem',
                    borderRadius: '50px',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '1rem',
                  }}
                >
                  Explore Gram-Setu 2026
                </button>
              </Link>
            </div>
            <div className="about-section-events-img-1 img">
              <img
                src="https://res.cloudinary.com/diyw5ilre/image/upload/f_auto,q_auto:eco,w_800/v1715019790/nss/Events/1_trmyhl.jpg"
                className="about-img"
                alt="Gram-Setu NSS Residential Camp"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }} />

          <div className="about-grid" data-aos="fade-up">
            <div className="about-section-events-img-2 img">
              <img
                src="https://res.cloudinary.com/diyw5ilre/image/upload/f_auto,q_auto:eco,w_800/v1715023958/nss/Events/2_dkekcc.jpg"
                className="about-img"
                alt="Rakta-Setu Blood Donation Drive"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text">
              <h1>Rakta-Setu — Blood Donation Drive 2025</h1>
              <p>
                7–8 October 2025 — 956+ participants, 385 student blood donors, and 11 types of free medical
                check-ups including ECG and Hemoglobin. Partnered with Adhar Blood Bank, complemented by seminars on
                Breast Cancer awareness and PCOD. A landmark healthcare and civic initiative that demonstrates the
                scale of NSS VIIT&apos;s outreach.
              </p>
              <Link to="/events">
                <button
                  type="button"
                  className="btn-green"
                  style={{
                    background: 'linear-gradient(135deg, #1B6B3A, #2D9055)',
                    color: '#fff',
                    border: 'none',
                    padding: '1.1rem 2.8rem',
                    borderRadius: '50px',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '1rem',
                  }}
                >
                  View All Events
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Closing Quote ── */}
        <div style={{ background: '#F8FAFC', padding: '6rem 3rem', textAlign: 'center' }}>
          <div
            data-aos="fade-up"
            style={{
              maxWidth: '70rem',
              margin: '0 auto',
              padding: '3rem 4rem',
              background: '#FFFFFF',
              borderRadius: '20px',
              borderLeft: '5px solid #F59E0B',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0.5rem',
                left: '1.5rem',
                fontSize: '8rem',
                color: 'rgba(245,158,11,0.1)',
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              &quot;
            </div>
            <blockquote
              style={{
                fontSize: '2.2rem',
                fontStyle: 'italic',
                color: '#1B6B3A',
                fontFamily: '"Inter", sans-serif',
                lineHeight: 1.7,
                margin: 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              &quot;It was never about the output; it was always about the journey and the experiences we shared.&quot;
            </blockquote>
            <cite
              style={{
                display: 'block',
                marginTop: '1.4rem',
                fontSize: '1.4rem',
                color: '#94A3B8',
                fontStyle: 'normal',
                fontWeight: 600,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              — NSS VIIT Pune · Batch 2025–26
            </cite>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <Link to="/achievements">
              <button
                type="button"
                className="btn-green"
                style={{
                  background: 'linear-gradient(135deg, #1B6B3A, #2D9055)',
                  color: '#fff',
                  border: 'none',
                  padding: '1.1rem 2.8rem',
                  borderRadius: '50px',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(27,107,58,0.3)',
                }}
              >
                View Our Achievements
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
