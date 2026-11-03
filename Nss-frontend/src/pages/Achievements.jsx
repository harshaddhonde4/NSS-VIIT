import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './css/Achievements.css';
import { FaHome, FaHeartbeat, FaTrophy, FaStar, FaUsers, FaLeaf, FaGraduationCap, FaHandshake, FaMedal } from 'react-icons/fa';
import { MdVolunteerActivism } from 'react-icons/md';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import useSEO from '../components/useSEO';

/* ── Reusable Achievement Card ── */
const AchCard = ({ icon: Icon, title, desc, accent }) => (
  <div className="ach-card" style={{ '--ac': accent }}>
    <div className="ach-card-icon"><Icon /></div>
    <div className="ach-card-body">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const Achievements = () => {
  useSEO({
    title: 'Achievements & Milestones | NSS VIIT Pune',
    description: 'Explore the key milestones and achievements of NSS VIIT Unit A-70: 17+ years of service, 2500+ blood units collected, 10000+ trees planted, and Gram Setu impact.',
    keywords: 'NSS VIIT achievements, NSS awards Pune, blood donation record VIIT, Gram Setu achievements, volunteer milestones',
    canonical: 'https://nss-viit.vercel.app/achievements',
  });

  useEffect(() => {
    Aos.init({ duration: 800, once: true, offset: 60 });
  }, []);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      {/* ── PAGE BANNER ── */}
      <div className="page-banner ach-banner">
        <span className="label-tag label-light" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)', position: 'relative', zIndex: 1 }}>
          Recognition & Impact
        </span>
        <h1>Our Achievements</h1>
        <p>Decades of selfless service — recognized, recorded, and remembered</p>
      </div>

      <section className="ach-page">

        {/* ── STAT STRIP ── */}
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className="ach-stat-strip" data-aos="fade-up">
            {[
              { end: 250, suffix: '+', label: 'Active Volunteers' },
              { end: 956, suffix: '+', label: 'Rakta-Setu Participants' },
              { end: 385, suffix: '', label: 'Blood Units Donated' },
              { end: 620, suffix: '+', label: 'Trees Planted' },
              { end: 122, suffix: '+', label: 'SPO Volunteers' },
            ].map((s, i) => (
              <div className="ach-strip-item" key={i} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="ach-strip-num">
                  {counterOn && <CountUp start={0} end={s.end} duration={3.5} delay={0} />}{s.suffix}
                </div>
                <div className="ach-strip-label">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollTrigger>

        {/* ═══════════════════════════════════════
            GROUP 1 — RURAL TRANSFORMATION
        ═══════════════════════════════════════ */}
        <div className="ach-group" data-aos="fade-up">
          <div className="ach-group-header" style={{ '--gh': '#10B981' }}>
            <div className="ach-group-icon"><FaHome /></div>
            <div>
              <h2>Rural Transformation</h2>
              <p>Jamgaon, Mulshi — A village shaped by NSS VIIT over 15+ years</p>
            </div>
          </div>
          <div className="ach-cards-grid">
            <AchCard icon={FaHome} title="Nirmal Gram Status" desc="Jamgaon village, our adopted community near Mulshi, was declared a Nirmal Gram in January 2010 — a direct result of sustained NSS VIIT intervention in sanitation and community hygiene." accent="#10B981" />
            <AchCard icon={FaGraduationCap} title="100% Class 10 Result — 5 Years Running" desc="Through NSS VIIT's doorstep education initiative, Jamgaon has achieved 100% Class 10 pass results for five consecutive years. Three village girls are now VIIT alumni — including Ms. Sarika Dokh (E&TC 2014), now at an MNC." accent="#6366F1" />
            <AchCard icon={FaHandshake} title="Gram-Setu 2026 — Flagship Camp" desc="21–28 January 2026 · Jamgaon · 60+ volunteers deployed for 8 days of watershed management, education, health awareness, and cultural engagement. Keynoted by Padma Shri Popatrao Pawar." accent="#F59E0B" />
            <AchCard icon={FaLeaf} title="ISO 9001:2008 Village" desc="Jamgaon was rated an ISO 9001:2008 village, reflecting the systematic improvements in governance, cleanliness, and community management achieved through collaborative NSS VIIT initiatives." accent="#0EA5E9" />
            <AchCard icon={FaStar} title="Adarsh Sarpanch Award" desc="Jamgaon Sarpanch Mr. Hanumant Survey was honoured with the Adarsh Sarpanch Award, recognizing the village's transformation under NSS-supported community leadership." accent="#EC4899" />
            <AchCard icon={FaHandshake} title="MoU — Tata Motors & BARC" desc="Strategic MoUs signed with Tata Motors (tree plantation drives) and BARC (rural development initiatives) — extending NSS VIIT's impact through institutional partnerships." accent="#8B5CF6" />
          </div>
        </div>

        {/* ═══════════════════════════════════════
            GROUP 2 — HEALTHCARE & CIVIC
        ═══════════════════════════════════════ */}
        <div className="ach-group" data-aos="fade-up">
          <div className="ach-group-header" style={{ '--gh': '#EC4899' }}>
            <div className="ach-group-icon"><FaHeartbeat /></div>
            <div>
              <h2>Healthcare & Civic Service</h2>
              <p>2025–26 impact numbers — the largest in unit history</p>
            </div>
          </div>
          <div className="ach-cards-grid">
            <AchCard icon={FaHeartbeat} title="Rakta-Setu 2025 — Blood Donation Drive" desc="7–8 October 2025 · 956+ total participants · 385 student blood donors · 11 free medical check-ups (ECG, Hemoglobin, Dental) · Partner: Adhar Blood Bank · Complemented by cancer awareness seminars." accent="#EC4899" />
            <AchCard icon={MdVolunteerActivism} title="Omkar Gengaje — Stem Cell Donation" desc="Computer Engineering volunteer Omkar Gengaje donated stem cells through a 4-hour medical procedure to save a young girl's life from cancer — entirely free of cost. The living embodiment of 'Not Me But You.'" accent="#8B5CF6" />
            <AchCard icon={FaUsers} title="Suraksha-Setu 2025 — Police Collaboration" desc="6–7 September 2025 (Anant Chaturdashi) · 122+ volunteers deployed with Swargate Police for Ganpati Visarjan public order management · Recognised by Sakal Media." accent="#0EA5E9" />
            <AchCard icon={FaLeaf} title="Tree Plantation — 620+ Trees" desc="With Sakal YIN · 300+ volunteers participated · 620+ trees planted across Pune. One of the largest single-season plantation drives by an engineering college NSS unit." accent="#10B981" />
            <AchCard icon={FaHome} title="Swachh-Setu 2025 — PMC Partnership" desc="26 September 2025 · 'Swachhata Hi Seva' cleanliness drive at VIIT main gate in collaboration with Pune Municipal Corporation — demonstrating institutional urban outreach." accent="#F59E0B" />
            <AchCard icon={FaHeartbeat} title="Cervical Cancer Awareness Camp" desc="September 2025 · With Unnat Bharat Abhiyan & Prayas NGO at Jamgaon · Free check-ups for women aged 30–65 · Meals provided · Bridging healthcare access in rural Pune." accent="#F97316" />
          </div>
        </div>

        {/* ═══════════════════════════════════════
            GROUP 3 — AWARDS & RECOGNITION
        ═══════════════════════════════════════ */}
        <div className="ach-group" data-aos="fade-up">
          <div className="ach-group-header" style={{ '--gh': '#F59E0B' }}>
            <div className="ach-group-icon"><FaTrophy /></div>
            <div>
              <h2>Awards & Recognition</h2>
              <p>Honoured by Savitribai Phule Pune University · 4 July 2023</p>
            </div>
          </div>
          <div className="ach-awards-podium">
            <div className="ach-award-card ach-award-gold" data-aos="fade-up" data-aos-delay="0">
              <div className="ach-award-icon"><FaTrophy /></div>
              <div className="ach-award-title">Best NSS Unit</div>
              <div className="ach-award-org">Savitribai Phule Pune University</div>
              <div className="ach-award-year">4 July 2023</div>
            </div>
            <div className="ach-award-card ach-award-silver" data-aos="fade-up" data-aos-delay="80">
              <div className="ach-award-icon"><FaMedal /></div>
              <div className="ach-award-title">Best Program Officer</div>
              <div className="ach-award-winner">Dr. Ravindra Acharya</div>
              <div className="ach-award-org">Savitribai Phule Pune University</div>
              <div className="ach-award-year">4 July 2023</div>
            </div>
            <div className="ach-award-card ach-award-bronze" data-aos="fade-up" data-aos-delay="160">
              <div className="ach-award-icon"><FaStar /></div>
              <div className="ach-award-title">Best NSS Volunteer</div>
              <div className="ach-award-winner">Swapnil Gaikwad</div>
              <div className="ach-award-org">Savitribai Phule Pune University</div>
              <div className="ach-award-year">4 July 2023</div>
            </div>
          </div>
          <div className="ach-cards-grid" style={{ marginTop: '2.5rem' }}>
            <AchCard icon={FaStar} title="Innovative Program Officer" desc="Dr. R.S. Acharya was honoured as Innovative Program Officer by Pune University — recognising pioneering approaches to NSS programming and community integration." accent="#F59E0B" />
            <AchCard icon={FaStar} title="Best NSS Volunteer — Adarsh Kedari" desc="Adarsh Kedari was awarded Best NSS Volunteer by Pune University, setting the standard of excellence for NSS VIIT service culture." accent="#F59E0B" />
            <AchCard icon={FaTrophy} title="National Camp Trophy" desc="A former NSS VIIT President won a trophy at the National NSS Camp — representing VIIT at the highest national stage of volunteer recognition." accent="#F59E0B" />
          </div>
        </div>

        {/* ═══════════════════════════════════════
            GROUP 4 — LEGACY & ALUMNI
        ═══════════════════════════════════════ */}
        <div className="ach-group" data-aos="fade-up">
          <div className="ach-group-header" style={{ '--gh': '#6366F1' }}>
            <div className="ach-group-icon"><FaGraduationCap /></div>
            <div>
              <h2>Legacy & Alumni Impact</h2>
              <p>NSS VIIT alumni — in civil services, MNCs, and communities worldwide</p>
            </div>
          </div>
          <div className="ach-cards-grid">
            <AchCard icon={FaGraduationCap} title="NSS Alumni in Civil Services" desc="NSS VIIT alumni now serve in India's highest offices: Mr. Pratik Thube (IAS) and Mr. Raviraj Shivchand — tracing their civic commitment to NSS values." accent="#6366F1" />
            <AchCard icon={FaUsers} title="NSS Alumni in MNCs" desc="Ms. Anuradha Dhumal and Mr. Pratik Vishwakarma secured top MNC placements. Ms. Sarika Dokh (E&TC 2014) — originally from Jamgaon, now a VIIT alumna at an MNC — stands as living proof of NSS's community impact." accent="#0EA5E9" />
            <AchCard icon={FaHome} title="Jamgaon Girls at VIIT" desc="Three girls from NSS VIIT's adopted village Jamgaon are VIIT students and alumni — from village classroom to engineering college, a transformation made possible by NSS VIIT's education initiative." accent="#10B981" />
            <AchCard icon={FaStar} title="Largest NSS Unit — Engineering Colleges" desc="NSS VIIT Pune holds the distinction of being the largest NSS unit among engineering colleges in Pune — a position of leadership earned through consistent scale, impact, and institutional support since 2008." accent="#F59E0B" />
            <AchCard icon={FaHandshake} title="Unit Founded — 2008" desc="NSS VIIT was established in 2008 under then-Principal Dr. A.S. Tavildar, Dr. R.S. Acharya, and Prof. B.P. Dane with 35 founding volunteers. Jamgaon village was adopted as the unit's service community — now 250+ strong." accent="#8B5CF6" />
          </div>
        </div>

        {/* ── CLOSING QUOTE ── */}
        <div className="ach-closing-quote" data-aos="fade-up">
          <blockquote>
            "It was never about the output; it was always about the journey and the experiences we shared."
          </blockquote>
          <cite>— NSS VIIT Pune · Batch 2025–26</cite>
        </div>

      </section>
    </>
  );
};

export default Achievements;
