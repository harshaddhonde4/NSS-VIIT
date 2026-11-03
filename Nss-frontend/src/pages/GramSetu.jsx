import { useEffect } from 'react';
import './css/GramSetu.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaMedal, FaLeaf, FaHeart, FaGraduationCap } from 'react-icons/fa';
import { MdVolunteerActivism, MdWater } from 'react-icons/md';

/* ============================================================
   CLOUDINARY PHOTO SLOTS — replace URLs after upload
   Upload to cloud: dmokljnng | Folder: Nss_Website/GramSetu_2026/
   ============================================================ */
const PHOTOS = {
  hero: 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/1_iuv2k5.png',
  pawar: 'https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png',
  yagnaraman: 'https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png',
  tapkir: 'https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png',
  ugale: 'https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png',
  patil: 'https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png',
  gallery: [
    'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/1_iuv2k5.png',
    'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/2_jdwzpv.png',
    'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/3_h4lntl.png',
    'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328283/4_bikubx.png',
    'https://res.cloudinary.com/diyw5ilre/image/upload/v1715019790/nss/Events/1_trmyhl.jpg',
    'https://res.cloudinary.com/diyw5ilre/image/upload/v1715023958/nss/Events/2_dkekcc.jpg',
    'https://res.cloudinary.com/diyw5ilre/image/upload/v1715024431/nss/Events/IMG_20230815_130457_syk6ka.jpg',
    'https://res.cloudinary.com/diyw5ilre/image/upload/v1715024956/nss/Events/IMG_3285_stbwpb.jpg',
  ],
};

const dailySchedule = [
  { day: 'Day 1', date: '21 Jan', title: 'Inauguration & Orientation', activities: ['Welcome ceremony with village elders', 'Team orientation & group formation', 'Village survey commencement', 'Evening cultural introduction'] },
  { day: 'Day 2', date: '22 Jan', title: 'Education & Cleanliness', activities: ['Teaching Math & English to local children', 'Temple & school premises cleaning drive', 'Road safety awareness session', 'Evening yoga & reflection'] },
  { day: 'Day 3', date: '23 Jan', title: 'Watershed & Infrastructure', activities: ['Drainage management Shramdaan', 'Ground leveling at Disali School', 'Vegetable gardening activity', 'Guest lecture & interaction'] },
  { day: 'Day 4', date: '24 Jan', title: 'Keynote — Padma Shri Pawar', activities: ['Keynote: Padma Shri Popatrao Pawar', 'Session: Bridging administration & people', 'Menstrual hygiene awareness session', 'Financial literacy workshop'] },
  { day: 'Day 5', date: '25 Jan', title: 'Service Before Self', activities: ['Wing Cdr Yagnaraman: Discipline & Service', 'Shrihari Tapkir: Resilience from Everest', 'Dindi procession through village', 'Street play "Paristhitichi Janiv"'] },
  { day: 'Day 6', date: '26 Jan', title: 'Republic Day & Community', activities: ['Republic Day celebration in village', 'Omkar Ugale: NGO ground realities', 'Deepankar Patil: Corporate-to-service', 'Cultural competitions & prizes'] },
  { day: 'Day 7', date: '27 Jan', title: 'Outreach & Reflection', activities: ['Continued children\'s education sessions', 'Health & hygiene awareness drive', 'Village survey findings review', 'Team presentations & learnings'] },
  { day: 'Day 8', date: '28 Jan', title: 'Valedictory & Farewell', activities: ['Valedictory ceremony', 'Certificate distribution', 'Community feedback session', 'Farewell with village community'] },
];

const outcomes = [
  { icon: FaGraduationCap, title: 'Education Impact', desc: '100% Class 10 result in Jamgaon for 5 consecutive years — attributed to NSS doorstep teaching', color: '#6366F1' },
  { icon: MdWater, title: 'Infrastructure', desc: 'Technical Shramdaan: drainage management & ground leveling at Disali School by engineering volunteers', color: '#0EA5E9' },
  { icon: FaLeaf, title: 'Sustainability', desc: 'Watershed management, vegetable gardening habits & environmental awareness instilled in the community', color: '#10B981' },
  { icon: MdVolunteerActivism, title: 'Community Bonding', desc: 'Street play "Paristhitichi Janiv", Dindi procession & health sessions bridged urban-rural divide', color: '#EC4899' },
];

const GramSetu = () => {
  useEffect(() => {
    document.title = 'Gram-Setu 2026 | NSS VIIT Pune Residential Camp';
  }, []);

  return (
    <>
      <div className="gram-setu-page">

        {/* ── HERO BANNER ── */}
        <section className="gs-hero" style={{ backgroundImage: `url(${PHOTOS.hero})` }}>
          <div className="gs-hero-overlay" />
          <div className="gs-hero-content" data-aos="fade-up">
            <div className="gs-hero-eyebrow">
              <span className="gs-hero-badge">★ Flagship Residential Camp</span>
              <span className="gs-hero-unit">NSS VIIT Pune · Unit A-70</span>
            </div>
            <h1>Gram-Setu 2026</h1>
            <p className="gs-hero-tagline">
              Connecting Engineering, Empathy, and Rural Transformation
            </p>
            <div className="gs-hero-meta">
              <span><FaCalendarAlt /> 21–28 January 2026</span>
              <span><FaMapMarkerAlt /> Jamgaon Village, Mulshi, Pune</span>
              <span><FaUsers /> 60+ Engineering Volunteers</span>
              <span><FaMedal /> 8 Days of Service</span>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHT BAR ── */}
        <section className="gs-stat-bar" data-aos="fade-up">
          <div className="gs-stat-item">
            <span className="gs-stat-num">60+</span>
            <span className="gs-stat-lbl">Student Volunteers</span>
          </div>
          <div className="gs-stat-divider" />
          <div className="gs-stat-item">
            <span className="gs-stat-num">8</span>
            <span className="gs-stat-lbl">Days Immersed</span>
          </div>
          <div className="gs-stat-divider" />
          <div className="gs-stat-item">
            <span className="gs-stat-num">5</span>
            <span className="gs-stat-lbl">Distinguished Guests</span>
          </div>
          <div className="gs-stat-divider" />
          <div className="gs-stat-item">
            <span className="gs-stat-num">100%</span>
            <span className="gs-stat-lbl">10th Result (5 Consecutive Yrs)</span>
          </div>
          <div className="gs-stat-divider" />
          <div className="gs-stat-item">
            <span className="gs-stat-num">2008</span>
            <span className="gs-stat-lbl">Jamgaon Adopted Since</span>
          </div>
        </section>

        {/* ── ABOUT CAMP ── */}
        <section className="gs-overview" data-aos="fade-up">
          <div className="gs-section-head">
            <span className="label-tag">The Experience</span>
            <h2>What is Gram-Setu?</h2>
            <p className="gs-section-lead">
              NSS VIIT Pune&apos;s annual flagship residential camp deploys engineering volunteers into rural
              Maharashtra for 8 days of living, learning, and working alongside villagers.
            </p>
          </div>
          <div className="gs-overview-grid">
            <div className="gs-overview-card" data-aos="fade-up" data-aos-delay="0">
              <div className="gs-card-icon"><FaLeaf /></div>
              <h3>Watershed &amp; Infrastructure</h3>
              <p>Technical Shramdaan addressing village drainage, ground leveling at Disali School, and eco-friendly practices that protect natural resources.</p>
            </div>
            <div className="gs-overview-card" data-aos="fade-up" data-aos-delay="80">
              <div className="gs-card-icon"><FaGraduationCap /></div>
              <h3>Children&apos;s Education</h3>
              <p>Doorstep teaching in Mathematics and English for local school children — directly responsible for Jamgaon&apos;s 100% Class 10 pass rate for 5 consecutive years.</p>
            </div>
            <div className="gs-overview-card" data-aos="fade-up" data-aos-delay="160">
              <div className="gs-card-icon"><MdVolunteerActivism /></div>
              <h3>Cultural &amp; Social Awareness</h3>
              <p>Dindi procession, street play &quot;Paristhitichi Janiv&quot; on social challenges, menstrual hygiene workshops, and financial literacy sessions for women.</p>
            </div>
          </div>
        </section>

        {/* ── KEYNOTE: POPATRAO PAWAR ── */}
        <section className="gs-keynote" data-aos="fade-up">
          <div className="gs-keynote-inner">
            <div className="gs-pawar-photo-col">
              <img
                src={PHOTOS.pawar}
                alt="Padma Shri Popatrao Pawar"
                className="gs-pawar-photo"
                loading="lazy"
                decoding="async"
              />
              <div className="gs-pawar-badge">
                <span>Padma Shri Awardee</span>
              </div>
            </div>
            <div className="gs-pawar-content-col">
              <span className="gs-pawar-label">Distinguished Keynote · Gram-Setu 2026</span>
              <h2>Padma Shri Popatrao Pawar</h2>
              <p className="gs-pawar-credential">Architect of Hiware Bazar — India&apos;s Model Village</p>
              <blockquote className="gs-pawar-quote">
                &quot;Mentored NSS VIIT volunteers on bridging administration and people — showing how selfless service, when organized with purpose, can eliminate poverty and transform communities.&quot;
              </blockquote>
              <div className="gs-pawar-facts">
                <div className="gs-pawar-fact">
                  <strong>60+</strong>
                  <span>Crorepati farmers in Hiware Bazar</span>
                </div>
                <div className="gs-pawar-fact">
                  <strong>Model</strong>
                  <span>India&apos;s benchmark rural transformation</span>
                </div>
                <div className="gs-pawar-fact">
                  <strong>Impact</strong>
                  <span>Water conservation, drought elimination</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GUEST GRID ── */}
        <section className="gs-guests" data-aos="fade-up">
          <div className="gs-section-head">
            <span className="label-tag">Distinguished Visitors</span>
            <h2>Guest Speakers at Gram-Setu 2026</h2>
            <p>Leaders who shared wisdom, resilience, and the spirit of service with our volunteers</p>
          </div>
          <div className="gs-guest-grid">
            {[
              {
                photo: PHOTOS.yagnaraman,
                name: 'Wing Cdr M.M. Yagnaraman (Retd.)',
                tag: 'Indian Air Force',
                theme: 'Discipline & Service Before Self',
                desc: 'Instilled military values of discipline, duty, and unwavering commitment to a cause larger than oneself among 60+ NSS volunteers.',
              },
              {
                photo: PHOTOS.tapkir,
                name: 'Shrihari Tapkir',
                tag: 'Everest Summiteer',
                theme: 'Resilience & Never Giving Up',
                desc: 'Shared his journey to the summit of Mt. Everest as a lesson in perseverance — that every meaningful goal demands hardship before glory.',
              },
              {
                photo: PHOTOS.ugale,
                name: 'Omkar Ugale',
                tag: 'MGVS — NGO Leader',
                theme: 'Ground Realities of Social Work',
                desc: 'Brought the unvarnished truth of grassroots NGO work — the patience, the setbacks, and the quiet victories that never make headlines.',
              },
              {
                photo: PHOTOS.patil,
                name: 'Deepankar Patil',
                tag: 'Corporate-to-Service Leader',
                theme: 'Purpose Over Paycheck',
                desc: 'Chronicled his transition from corporate career to community service, inspiring students to evaluate their own definition of success.',
              },
            ].map((g, i) => (
              <div className="gs-guest-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="gs-guest-photo-wrap">
                  <img src={g.photo} alt={g.name} className="gs-guest-photo" loading="lazy" decoding="async" />
                  <div className="gs-guest-tag-pill">{g.tag}</div>
                </div>
                <div className="gs-guest-body">
                  <h3>{g.name}</h3>
                  <p className="gs-guest-theme">&quot;{g.theme}&quot;</p>
                  <p className="gs-guest-desc">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DAILY SCHEDULE TIMELINE ── */}
        <section className="gs-schedule" data-aos="fade-up">
          <div className="gs-section-head">
            <span className="label-tag label-light" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}>8-Day Programme</span>
            <h2>Daily Schedule</h2>
            <p>Every day at Jamgaon — purposeful, structured, and transformative</p>
          </div>
          <div className="gs-timeline">
            {dailySchedule.map((d, i) => (
              <div className={`gs-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i} data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="gs-timeline-dot">
                  <span>{i + 1}</span>
                </div>
                <div className="gs-timeline-card">
                  <div className="gs-timeline-header">
                    <span className="gs-day-chip">{d.day} · {d.date}</span>
                    <h3>{d.title}</h3>
                  </div>
                  <ul className="gs-timeline-list">
                    {d.activities.map((a, j) => <li key={j}>{a}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CAMP OUTCOMES ── */}
        <section className="gs-outcomes" data-aos="fade-up">
          <div className="gs-section-head">
            <span className="label-tag">Impact Created</span>
            <h2>Outcomes of Gram-Setu 2026</h2>
          </div>
          <div className="gs-outcomes-grid">
            {outcomes.map((o, i) => (
              <div className="gs-outcome-card" key={i} data-aos="fade-up" data-aos-delay={i * 60} style={{ '--oc': o.color }}>
                <div className="gs-outcome-icon">
                  <o.icon />
                </div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OMKAR GENGAJE SPOTLIGHT ── */}
        <section className="gs-omkar-callout" data-aos="fade-up">
          <div className="gs-omkar-inner">
            <div className="gs-omkar-icon">
              <FaHeart />
            </div>
            <div className="gs-omkar-content">
              <span className="gs-omkar-tag">Volunteer Spotlight — Beyond the Camp</span>
              <h2>Omkar Gengaje</h2>
              <p className="gs-omkar-dept">Computer Engineering, NSS VIIT Pune</p>
              <p className="gs-omkar-story">
                In an act of extraordinary compassion, Omkar Gengaje donated his stem cells through a 4-hour medical procedure to save a young girl&apos;s life from cancer — entirely free of cost. No event, no award, no publicity — just a quiet, selfless act that defines what &quot;Not Me But You&quot; truly means.
              </p>
              <div className="gs-omkar-badges">
                <span>Stem Cell Donor</span>
                <span>Life Saved</span>
                <span>True NSS Spirit</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="gs-gallery" data-aos="fade-up">
          <div className="gs-section-head">
            <span className="label-tag label-light" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}>Photo Gallery</span>
            <h2>Moments from Jamgaon</h2>
            <p>8 days of service — captured in glimpses</p>
          </div>
          <div className="gs-gallery-grid">
            {PHOTOS.gallery.map((src, i) => {
              const labels = ['Inauguration — Day 1', 'Children\'s Education — Day 2', 'Morning Yoga — Day 3', 'Dindi Procession — Day 4', 'Street Play "Paristhitichi Janiv" — Day 5', 'Cleanliness Drive — Day 6', 'Cultural Programme — Day 7', 'Valedictory Ceremony — Day 8'];
              return (
                <div className={`gs-gallery-item${i === 0 ? ' gs-gallery-featured' : ''}`} key={i}>
                  <img src={src} alt={labels[i]} loading="lazy" decoding="async" />
                  <div className="gs-gallery-caption">{labels[i]}</div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </>
  );
};

export default GramSetu;
