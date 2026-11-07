import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { toAssetUrl } from '../utils/assetHelper';
import campManifest from '../data/camp_photos_manifest.json';
import './css/GramSetu.css';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMedal,
  FaCamera,
  FaLeaf,
  FaHeart,
  FaGraduationCap,
  FaLinkedin,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaPlay,
  FaExpand,
  FaVideo,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import { MdVolunteerActivism, MdWater } from 'react-icons/md';
import useSEO from '../components/useSEO';

/* ============================================================
   CLOUDINARY PHOTO SLOTS — replace URLs after upload
   Upload to cloud: dmokljnng | Folder: Nss_Website/GramSetu_2026/
   ============================================================ */
const rawPhotos = {
  hero: '/images/GramSetu_2026/hero_banner.webp',
  pawar: '/images/featured_highlights/pawar_sir_visit_.webp',
  yagnaraman: '/images/featured_highlights/wg._crd_yugnaraman.webp',
  tapkir: '/images/featured_highlights/shrihari_tapkir_.webp',
  ugale: 'https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png',
  patil: '/images/featured_highlights/deepankar_sir_.webp',
  pantoji: '/images/featured_highlights/rto_pune_.webp',
  nik: '/images/featured_highlights/podcastbynik.webp',
  camps_best: '/images/featured_highlights/camps_best_photo_.jpeg',
  movie_night: '/images/featured_highlights/movie_night_at_camp_.webp',
  news1: '/images/featured_highlights/gramsetu_in_news_2.webp',
  news2: '/images/featured_highlights/gramsetu_in_news_.webp',
};

const PHOTOS = Object.fromEntries(
  Object.entries(rawPhotos).map(([k, v]) => [k, toAssetUrl(v)])
);


/* ============================================================
   GRAM-SETU 2026 OFFICIAL INSTAGRAM REELS (DAYS 1 TO 6)
   Official Channel: https://www.instagram.com/nss.a_70/
   ============================================================ */
const gramSetuReels = [
  {
    id: 'day1',
    day: 'Day 1',
    date: '21 Jan 2026',
    title: 'The Beginning: Arrival & Village Survey 🚌✨',
    caption: 'From campus to community, the journey of service begins! Day 1 at Jamgaon was all about setting the foundation, Fort group allocations, and our first village survey.',
    tags: ['#NSSVIIT', '#GramSetu2026', '#Day1', '#NotMeButYou', '#VillageSurvey'],
    videoSrc: '/videos/reels/gramsetu_day1_reel.mp4',
    poster: '/videos/reels/gramsetu_day1_reel_poster.jpg',
    reelUrl: 'https://www.instagram.com/reel/DUfb59XjOoH/',
    embedId: 'DUfb59XjOoH',
    color: '#F59E0B',
    accentClass: 'amber'
  },
  {
    id: 'day2',
    day: 'Day 2',
    date: '22 Jan 2026',
    title: 'Spirit & Service: Ganesh Jayanti Special 🚩🙏',
    caption: 'Shramdaan, Spirituality, and Shiv Charitra. Morning temple cleaning, yoga sessions, community dinner (Bhandara) with villagers, and an inspiring bonfire lecture.',
    tags: ['#GaneshJayanti', '#Shramdaan', '#ShivCharitra', '#NSSCamp', '#CommunityBonding'],
    videoSrc: '/videos/reels/gramsetu_day2_reel.mp4',
    poster: '/videos/reels/gramsetu_day2_reel_poster.jpg',
    reelUrl: 'https://www.instagram.com/reel/DU2JweNjFSN/',
    embedId: 'DU2JweNjFSN',
    color: '#10B981',
    accentClass: 'emerald'
  },
  {
    id: 'day3',
    day: 'Day 3',
    date: '23 Jan 2026',
    title: 'Solving Problems & Building Bonds 🛠️💪',
    caption: 'Real hands, real work, real impact. Tackling village school drainage, an intense inter-group Tug of War, and an outdoor movie night screening "Chhava" with the villagers.',
    tags: ['#ProblemSolvers', '#TugOfWar', '#Chhava', '#NSSDiaries', '#HardWork'],
    videoSrc: '/videos/reels/gramsetu_day3_reel.mp4',
    poster: '/videos/reels/gramsetu_day3_reel_poster.jpg',
    reelUrl: 'https://www.instagram.com/reel/DVOffFcjNPa/',
    embedId: 'DVOffFcjNPa',
    color: '#0EA5E9',
    accentClass: 'sky'
  },
  {
    id: 'day4',
    day: 'Day 4',
    date: '24 Jan 2026',
    title: 'Tradition & Awareness: Dindi Sohala 🚩🥁',
    caption: 'Culture, devotion, and discipline. Traditional Dindi procession & Lazim through Jamgaon with the Palkhi, Pravachan by H.B.P. Datta Maharaj, and Road Safety with RTO Pune.',
    tags: ['#DindiSohala', '#Culture', '#Tradition', '#RoadSafety', '#NSSVIIT', '#Palkhi'],
    videoSrc: '/videos/reels/gramsetu_day4_reel.mp4',
    poster: '/videos/reels/gramsetu_day4_reel_poster.jpg',
    reelUrl: 'https://www.instagram.com/reel/DV5HswQjLNa/',
    embedId: 'DV5HswQjLNa',
    color: '#EC4899',
    accentClass: 'pink'
  },
  {
    id: 'day5',
    day: 'Day 5',
    date: '25 Jan 2026',
    title: 'Resilience & Heights: To Sagarmatha ⛰️🧱',
    caption: 'Testing our limits and aiming for the summit! Hard physical labor leveling ground at Disali School and learning the journey of Everest Summiteer Shrihari Tapkir Sir.',
    tags: ['#Shramdaan', '#Everest', '#TreasureHunt', '#Resilience', '#Motivation'],
    videoSrc: '/videos/reels/gramsetu_day5_reel.mp4',
    poster: '/videos/reels/gramsetu_day5_reel_poster.jpg',
    reelUrl: 'https://www.instagram.com/reel/DYhFgMotKKw/',
    embedId: 'DYhFgMotKKw',
    color: '#8B5CF6',
    accentClass: 'violet'
  },
  {
    id: 'day6',
    day: 'Day 6',
    date: '26 Jan 2026',
    title: 'Republic Day & The Legend 🇮🇳✨',
    caption: 'A Republic Day etched in history! Tricolor flying high, Mega Health Check-up Camp, Alumni Sneh Milan, and distinguished keynote address by Padmashree Popatrao Pawar Sir.',
    tags: ['#RepublicDay', '#PopatraoPawar', '#SustainableDevelopment', '#AlumniMeet', '#JaiHind'],
    videoSrc: '/videos/reels/gramsetu_day6_reel.mp4',
    poster: '/videos/reels/gramsetu_day6_reel_poster.jpg',
    reelUrl: 'https://www.instagram.com/reel/DYkSPJfMsON/',
    embedId: 'DYkSPJfMsON',
    color: '#EF4444',
    accentClass: 'rose'
  },
];

const dailySchedule = [
  {
    day: 'Day 1',
    date: '21 Jan 2026',
    title: 'The Beginning',
    caption: 'From the campus to the community, the journey of service begins! 🚌✨ Day 1 at Jamgaon was all about setting the foundation. From setting up our "Fort" groups to our very first village survey, the energy is high and the mission is clear. 🏘️🤝',
    highlights: [
      '📍 Arrival & Cleaning Drive',
      '🏰 Fort Group Allocations',
      '🗣️ Networking Sessions & Village Survey'
    ],
    tags: ['#NSSVIIT', '#GramSetu2026', '#Day1', '#NotMeButYou', '#VillageLife', '#Service'],
    dayKey: 'day1',
    photoCount: 11,
    reelUrl: 'https://www.instagram.com/reel/DUfb59XjOoH/',
    reelId: 'day1'
  },
  {
    day: 'Day 2',
    date: '22 Jan 2026',
    title: 'Spirit & Service (Ganesh Jayanti Special)',
    caption: 'Shramdaan, Spirituality, and Shiv Charitra. 🚩🙏 Started our morning with temple cleaning and ended the night with the inspiring history of Chhatrapati Shivaji Maharaj. Celebrating Ganesh Jayanti with the villagers through a community dinner was the highlight of the day! 🍛🔥',
    highlights: [
      '🧹 Temple Area Shramdaan',
      '🧘‍♂️ Yoga & Networking Sessions',
      '🥘 Community Dinner (Bhandara)',
      '⚔️ Shiv Charitra Lecture & Bonfire'
    ],
    tags: ['#GaneshJayanti', '#Shramdaan', '#ShivCharitra', '#NSSCamp', '#CommunityBonding'],
    dayKey: 'day2',
    photoCount: 20,
    reelUrl: 'https://www.instagram.com/reel/DU2JweNjFSN/',
    reelId: 'day2'
  },
  {
    day: 'Day 3',
    date: '23 Jan 2026',
    title: 'Solving Problems & Building Bonds',
    caption: 'Real hands, real work, real impact. 🛠️💪 Today we tackled a major drainage issue in the village, channeling stagnant water away from the school. But it wasn’t all work—the Tug of War battle was INTENSE! 🔥🎬',
    highlights: [
      '🚧 Drainage Management Shramdaan',
      '🧘 Art of Living Session',
      '🏆 Inter-group Tug of War',
      '🎥 Movie Night: "Chhava" with the villagers'
    ],
    tags: ['#ProblemSolvers', '#TugOfWar', '#NSSDiaries', '#Chhava', '#HardWork'],
    dayKey: 'day3',
    photoCount: 49,
    reelUrl: 'https://www.instagram.com/reel/DVOffFcjNPa/',
    reelId: 'day3'
  },
  {
    day: 'Day 4',
    date: '24 Jan 2026',
    title: 'Tradition & Awareness',
    caption: 'Culture, devotion, and discipline. 🚩🥁 A day filled with the rhythm of the Dindi Sohala! Walking through the village with the Palkhi, performing Lazim, and feeling the \'Josh\' was unforgettable. We also learned crucial lessons on road safety and the value of hard work. 🛑🚶‍♂️',
    highlights: [
      '🛑 Road Safety Awareness Session',
      '🥁 Traditional Dindi Procession & Lazim',
      '🙏 Pravachan by H.B.P. Datta Maharaj',
      '🔥 Antakshari by the Bonfire'
    ],
    tags: ['#DindiSohala', '#Culture', '#Tradition', '#RoadSafety', '#NSSVIIT', '#Palkhi'],
    dayKey: 'day4',
    photoCount: 59,
    reelUrl: 'https://www.instagram.com/reel/DV5HswQjLNa/',
    reelId: 'day4'
  },
  {
    day: 'Day 5',
    date: '25 Jan 2026',
    title: 'Resilience & Heights',
    caption: 'Testing our limits and aiming for the summit! ⛰️🧱 We pushed through hard labor leveling the ground at Disali School and wrapped up the day listening to the incredible journey of an Everester. From the ground to the peak, inspiration was everywhere. 🐍⚒️',
    highlights: [
      '🏗️ Shramdaan at Disali School',
      '🗺️ Treasure Hunt Challenge',
      '🏔️ "Journey to Sagarmatha" with Shri Hari Tapkir Sir',
      '🇮🇳 Pre-Republic Day Prep'
    ],
    tags: ['#Shramdaan', '#Everest', '#TreasureHunt', '#Resilience', '#Motivation'],
    dayKey: 'day5',
    photoCount: 4,
    reelUrl: 'https://www.instagram.com/reel/DYhFgMotKKw/',
    reelId: 'day5'
  },
  {
    day: 'Day 6',
    date: '26 Jan 2026',
    title: 'Republic Day & The Legend',
    caption: '🇮🇳 A Republic Day etched in history! 🇮🇳 We celebrated the nation with the tricolor flying high and had the absolute honor of hosting Padmashree Popatrao Pawar Sir. His words on sustainable development fueled our fire. Plus, a massive shoutout to our Alumni for the Sneh Milan! ❤️🏥',
    highlights: [
      '🇮🇳 Republic Day Flag Hoisting & Street Play',
      '🎓 Sneh Milan (Alumni Meet)',
      '🩺 Mega Health Check-up Camp',
      '🗣️ Guest Session: Padmashree Popatrao Pawar'
    ],
    tags: ['#RepublicDay', '#PopatraoPawar', '#SustainableDevelopment', '#AlumniMeet', '#JaiHind'],
    dayKey: 'day6',
    photoCount: 147,
    reelUrl: 'https://www.instagram.com/reel/DYkSPJfMsON/',
    reelId: 'day6'
  },
  {
    day: 'Day 7',
    date: '27–28 Jan 2026',
    title: 'The Grand Finale',
    caption: 'Seven days of memories, a lifetime of lessons. ❤️🏕️ From military discipline to women’s empowerment, our final day was packed with learning. As the campfire burned one last time, we celebrated our bond, our service, and the spirit of NSS. Until next time, Jamgaon! 👋🔥',
    highlights: [
      '🚺 Menstrual Hygiene & Financial Literacy Sessions',
      '🎖️ Military Discipline Session with Wing Cmdr. Gunchandran Sir',
      '🧘‍♀️ Meditation & Rural Development',
      '🎤 Valedictory & Maharajancha Powada'
    ],
    tags: ['#CampClosure', '#NSSFamily', '#MilitaryDiscipline', '#Empowerment', '#MemoriesForLife'],
    dayKey: 'day7',
    photoCount: 21,
    reelUrl: 'https://www.instagram.com/nss.a_70/'
  }
];

const outcomes = [
  { icon: FaGraduationCap, title: 'Education Impact', desc: '100% Class 10 result in Jamgaon for 5 consecutive years — attributed to NSS doorstep teaching', color: '#6366F1' },
  { icon: MdWater, title: 'Infrastructure', desc: 'Technical Shramdaan: drainage management & ground leveling at Disali School by engineering volunteers', color: '#0EA5E9' },
  { icon: FaLeaf, title: 'Sustainability', desc: 'Watershed management, vegetable gardening habits & environmental awareness instilled in the community', color: '#10B981' },
  { icon: MdVolunteerActivism, title: 'Community Bonding', desc: 'Street play "Paristhitichi Janiv", Dindi procession & health sessions bridged urban-rural divide', color: '#EC4899' },
];

const GramSetu = () => {
  useSEO({
    title: 'Gram-Setu 2026 Special Camp | Jamgaon | NSS VIIT Pune',
    description: 'Explore the 7-day annual special camp Gram-Setu 2026 at Jamgaon by NSS VIIT Unit A-70. Village surveys, health camps, watershed development, and youth leadership.',
    keywords: 'Gram Setu 2026, NSS VIIT Jamgaon, special camp NSS, rural development Pune',
    canonical: 'https://nss-viit.vercel.app/gram-setu',
  });
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [selectedDay, setSelectedDay] = useState('all');
  const [visibleCount, setVisibleCount] = useState(24);
  const [activeReelIndex, setActiveReelIndex] = useState(null);
  const [reelDisplayMode, setReelDisplayMode] = useState('player'); // 'player' or 'embed'
  const theaterVideoRef = useRef(null);
  const heroVideoRef = useRef(null);
  const [heroVideoMuted, setHeroVideoMuted] = useState(false);

  const toggleHeroSound = useCallback(() => {
    if (heroVideoRef.current) {
      const nextMuted = !heroVideoRef.current.muted;
      heroVideoRef.current.muted = nextMuted;
      if (!nextMuted) {
        heroVideoRef.current.volume = 1.0;
        heroVideoRef.current.play().catch(() => {});
      }
      setHeroVideoMuted(nextMuted);
    }
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    // Attempt unmuted playback first
    video.muted = false;
    video.volume = 1.0;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setHeroVideoMuted(false);
        })
        .catch(() => {
          // Browser requires user interaction for audio -> play muted, then unmute on first gesture
          video.muted = true;
          setHeroVideoMuted(true);
          video.play().catch(() => {});

          const handleFirstInteraction = () => {
            if (heroVideoRef.current) {
              heroVideoRef.current.muted = false;
              heroVideoRef.current.volume = 1.0;
              setHeroVideoMuted(false);
            }
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
          };

          window.addEventListener('click', handleFirstInteraction, { once: true });
          window.addEventListener('touchstart', handleFirstInteraction, { once: true });
          window.addEventListener('keydown', handleFirstInteraction, { once: true });
        });
    }
  }, []);

  useEffect(() => {
    if (activeReelIndex !== null && theaterVideoRef.current) {
      theaterVideoRef.current.play().catch(() => {});
    }
  }, [activeReelIndex]);

  // Flatten all 364 day photos into a single master list
  const allPhotos = useMemo(() => {
    const list = [];
    Object.keys(campManifest).forEach((k) => {
      const d = campManifest[k];
      d.photos.forEach((ph) => {
        list.push({
          ...ph,
          dayKey: k,
          dayTitle: d.title,
          dayDate: d.date,
        });
      });
    });
    return list;
  }, []);

  // Filtered photos based on active day tab
  const activePhotos = useMemo(() => {
    if (selectedDay === 'all') return allPhotos;
    const d = campManifest[selectedDay];
    if (!d) return [];
    return d.photos.map((ph) => ({
      ...ph,
      dayKey: selectedDay,
      dayTitle: d.title,
      dayDate: d.date,
    }));
  }, [selectedDay, allPhotos]);

    const jumpToDayPhotos = (dayKey) => {
    setSelectedDay(dayKey);
    setVisibleCount(24);
    setLightboxIndex(null);
    const el = document.getElementById('camp-photo-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDay = (dayKey) => {
    setSelectedDay(dayKey);
    setVisibleCount(24);
    setLightboxIndex(null);
  };

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : activePhotos.length - 1));
    }
  }, [lightboxIndex, activePhotos.length]);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev < activePhotos.length - 1 ? prev + 1 : 0));
    }
  }, [lightboxIndex, activePhotos.length]);

  useEffect(() => {
    document.title = 'Gram-Setu 2026 | NSS VIIT Pune Residential Camp';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeReelIndex !== null) {
        if (e.key === 'Escape') setActiveReelIndex(null);
        if (e.key === 'ArrowLeft') setActiveReelIndex((prev) => (prev > 0 ? prev - 1 : gramSetuReels.length - 1));
        if (e.key === 'ArrowRight') setActiveReelIndex((prev) => (prev < gramSetuReels.length - 1 ? prev + 1 : 0));
        return;
      }
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, prevLightbox, nextLightbox, activeReelIndex]);

  return (
    <>
      <div className="gram-setu-page">

        {/* ── HERO BANNER WITH BACKGROUND VIDEO ── */}
        <section className="gs-hero">
          <video
            ref={heroVideoRef}
            className="gs-hero-bg-video"
            src={toAssetUrl("/videos/reels/nss_camp_served_not_flexed.mp4")}
            poster={toAssetUrl("/videos/reels/nss_camp_served_not_flexed_poster.jpg")}
            autoPlay
            loop
            muted={heroVideoMuted}
            playsInline
            preload="auto"
          />
          <div className="gs-hero-overlay" />
          <div className="gs-hero-content" data-aos="fade-up">
            <div className="gs-hero-eyebrow">
              <span className="gs-hero-badge">★ Flagship Residential Camp · Jamgaon</span>
            </div>
            <h1>Gram-Setu 2026</h1>
            <p className="gs-hero-tagline">
              Connecting Engineering, Empathy, and Rural Transformation
            </p>
            <div className="gs-hero-meta">
              <span><FaMapMarkerAlt /> Jamgaon Village, Mulshi, Pune</span>
              <span><FaCalendarAlt /> 21–28 January 2026</span>
            </div>

            {/* Video sound & source credit pill */}
            <div className="gs-hero-video-bar">
              <button
                type="button"
                className={`gs-hero-video-toggle ${!heroVideoMuted ? 'active-audio' : ''}`}
                onClick={toggleHeroSound}
                aria-label={heroVideoMuted ? "Turn on audio" : "Mute audio"}
              >
                {!heroVideoMuted ? <FaVolumeUp /> : <FaVolumeMute />}
                <span>{!heroVideoMuted ? "🔊 Audio: ON" : "🔇 Tap for Audio"}</span>
              </button>
              <a
                href="https://www.instagram.com/reel/DThn17diOxK/"
                target="_blank"
                rel="noopener noreferrer"
                className="gs-hero-video-credit"
                title="Watch full documentary reel on Instagram"
              >
                <FaInstagram />
                <span>@vit_k_diariies ↗</span>
              </a>
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
              Maharashtra for 7 days of living, learning, and working alongside villagers.
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
        <section className="gs-pawar-spotlight" data-aos="fade-up">
          <div className="gs-pawar-flag">
            <FaMedal /> Keynote Dignitary · Gram-Setu 2026
          </div>
          <div className="gs-pawar-inner">
            <div className="gs-pawar-photo-col">
              <div className="gs-pawar-img-wrap">
                <img
                  src={PHOTOS.pawar}
                  alt="Padma Shri Popatrao Pawar"
                  className="gs-pawar-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gs-pawar-img-note">Hiware Bazar Keynote</div>
              </div>
              <div className="gs-pawar-award-badge">
                <FaMedal /> Padma Shri Awardee
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
              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href="https://www.linkedin.com/posts/alumni-relations-of-vishwakarma-institutes-8ab33238b_padmashree-leadership-gramsetu2026-ugcPost-7427905347924672512-xytp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gs-alumni-endorsement"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.9rem',
                    padding: '0.9rem 1.8rem',
                    background: 'rgba(10, 102, 194, 0.15)',
                    border: '1px solid rgba(10, 102, 194, 0.5)',
                    borderRadius: '50px',
                    color: '#93C5FD',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <FaLinkedin style={{ fontSize: '1.7rem', color: '#60A5FA' }} />
                  <span>Featured by Alumni Relations of Vishwakarma Institutes on LinkedIn ↗</span>
                </a>
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

        {/* ── STATE PRESS & NEWSPAPER COVERAGE ── */}
        <section className="gs-press-coverage" data-aos="fade-up" style={{ padding: '6rem 2rem', background: '#0F172A', color: '#FFFFFF', textAlign: 'center' }}>
          <div className="gs-section-head" style={{ maxWidth: '85rem', margin: '0 auto 4rem' }}>
            <span className="label-tag" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '0.6rem 1.6rem', borderRadius: '30px', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase' }}>
              State Media Recognition
            </span>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#FFFFFF', marginTop: '1.5rem', marginBottom: '1rem' }}>
              Gram-Setu in the Headlines
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.5rem', lineHeight: 1.7 }}>
              Published in Nashik Express and state Marathi dailies, documenting our volunteers&apos; transformative community Shramdaan at Jamgaon
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(32rem, 1fr))', gap: '3rem', maxWidth: '110rem', margin: '0 auto', textAlign: 'left' }}>
            <div style={{ background: '#1E293B', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }}>
              <div style={{ height: '32rem', overflow: 'hidden', background: '#0B1120' }}>
                <img src={PHOTOS.news1} alt="Nashik Express Gram-Setu News" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" decoding="async" />
              </div>
              <div style={{ padding: '2.4rem' }}>
                <span style={{ color: '#F59E0B', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04rem' }}>
                  नाशिक एक्सप्रेस (Nashik Express)
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.9rem', fontWeight: 800, margin: '0.8rem 0 1rem', lineHeight: 1.4 }}>
                  VIIT च्या &apos;एनएसएस&apos; शिबिरातून जामगावचा कायापालट: विद्यार्थ्यांचा &apos;श्रमयज्ञ&apos;
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1.35rem', lineHeight: 1.6 }}>
                  Detailed front-page coverage on Padmashree Popatrao Pawar Sir&apos;s keynote visit, school renovation at Disali, Granth Dindi, and comprehensive rural health checkup camps.
                </p>
              </div>
            </div>

            <div style={{ background: '#1E293B', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }}>
              <div style={{ height: '32rem', overflow: 'hidden', background: '#0B1120' }}>
                <img src={PHOTOS.news2} alt="NSS Camp News Coverage" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" decoding="async" />
              </div>
              <div style={{ padding: '2.4rem' }}>
                <span style={{ color: '#10B981', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04rem' }}>
                  दैनिक वृत्तपत्र (Regional Daily)
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.9rem', fontWeight: 800, margin: '0.8rem 0 1rem', lineHeight: 1.4 }}>
                  राष्ट्रीय सेवा योजनेच्या शिबीरात विद्यार्थ्यांची समाजसेवा
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1.35rem', lineHeight: 1.6 }}>
                  Commending student leaders Sushant Gade, Namit More, Prem Shinde, Omkar Sakore, Utkarsha Ahire, Pratiksha Deshmukh, and faculty coordinators for 7 days of grassroots impact.
                </p>
              </div>
            </div>
          </div>
        </section>

                {/* ── JAMGAON LIVE: OFFICIAL INSTAGRAM REELS (DAYS 1 TO 6) ── */}
        <section className="gs-reels-section" id="jamgaon-reels" data-aos="fade-up">
          <div className="gs-reels-header">
            <div className="gs-reels-badge">
              <FaInstagram className="insta-icon" />
              <span>Official Instagram Video Chronicles · @nss.a_70</span>
            </div>
            <h2>Live from Jamgaon: Gram-Setu 2026 Reels</h2>
            <p className="gs-reels-subhead">
              Watch all official field reels documenting Shramdaan, rural culture, youth leadership, and community transformation across Days 1 through 6.
            </p>

            <div className="gs-reels-top-actions">
              <a
                href="https://www.instagram.com/nss.a_70/"
                target="_blank"
                rel="noopener noreferrer"
                className="gs-insta-follow-btn"
              >
                <FaInstagram />
                <span>Visit Official Instagram Page (@nss.a_70) ↗</span>
              </a>

              <a
                href="https://www.instagram.com/reel/DThn17diOxK/"
                target="_blank"
                rel="noopener noreferrer"
                className="gs-insta-follow-btn"
                style={{ background: 'rgba(236, 72, 153, 0.15)', borderColor: 'rgba(236, 72, 153, 0.4)', color: '#F472B6' }}
              >
                <FaInstagram />
                <span>Featured Reel: &quot;Served, Not Flexed&quot; ↗</span>
              </a>

              <div className="gs-reels-mode-toggle">
                <span className="mode-label">Viewing Mode:</span>
                <button
                  type="button"
                  className={`mode-btn ${reelDisplayMode === 'player' ? 'active' : ''}`}
                  onClick={() => setReelDisplayMode('player')}
                  title="Watch smooth instant HD local video player"
                >
                  <FaPlay /> Ultra-HD Player
                </button>
                <button
                  type="button"
                  className={`mode-btn ${reelDisplayMode === 'embed' ? 'active' : ''}`}
                  onClick={() => setReelDisplayMode('embed')}
                  title="Load official Instagram live web embed"
                >
                  <FaInstagram /> Live Insta Embed
                </button>
              </div>
            </div>
          </div>

          {/* Reels Interactive Grid */}
          <div className="gs-reels-grid">
            {gramSetuReels.map((reel, idx) => (
              <div
                className={`gs-reel-card ${reel.accentClass}`}
                key={reel.id}
                id={`reel-card-${reel.id}`}
                data-aos="fade-up"
                data-aos-delay={idx * 70}
              >
                {/* Reel Header Pill */}
                <div className="gs-reel-header-bar">
                  <div className="gs-reel-meta-left">
                    <span className="gs-reel-day-pill" style={{ backgroundColor: reel.color }}>
                      {reel.day}
                    </span>
                    <span className="gs-reel-date-pill">{reel.date}</span>
                  </div>
                  <a
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gs-reel-handle-tag"
                    title="View on Instagram"
                  >
                    <FaInstagram /> @nss.a_70
                  </a>
                </div>

                {/* Media Container: Live Video Player or Live Instagram Embed */}
                <div className="gs-reel-media-wrapper">
                  {reelDisplayMode === 'player' ? (
                    <div className="gs-reel-video-container">
                      <video
                        src={toAssetUrl(reel.videoSrc)}
                        poster={toAssetUrl(reel.poster)}
                        controls
                        playsInline
                        preload="none"
                        className="gs-reel-video-player"
                        aria-label={`${reel.day} Gram-Setu 2026 Video Reel`}
                      />
                      <button
                        type="button"
                        className="gs-reel-expand-btn"
                        onClick={() => setActiveReelIndex(idx)}
                        title="Expand to Fullscreen Theater"
                        aria-label={`Open ${reel.day} in theater modal`}
                      >
                        <FaExpand />
                      </button>
                    </div>
                  ) : (
                    <div className="gs-reel-embed-container">
                      <iframe
                        src={`https://www.instagram.com/reel/${reel.embedId}/embed/`}
                        className="gs-reel-iframe"
                        title={`${reel.day} Instagram Reel`}
                        allowFullScreen
                        scrolling="no"
                      />
                    </div>
                  )}
                </div>

                {/* Card Details & Caption */}
                <div className="gs-reel-body">
                  <h3 className="gs-reel-title">{reel.title}</h3>
                  <p className="gs-reel-caption">{reel.caption}</p>

                  <div className="gs-reel-tags">
                    {reel.tags.map((tg, tIdx) => (
                      <span key={tIdx} className="gs-reel-tag-chip">{tg}</span>
                    ))}
                  </div>

                  <div className="gs-reel-footer-actions">
                    <button
                      type="button"
                      className="gs-reel-theater-btn"
                      onClick={() => setActiveReelIndex(idx)}
                    >
                      <FaPlay /> Watch Theater
                    </button>
                    <a
                      href={reel.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gs-reel-link-btn"
                    >
                      <FaInstagram /> Open Reel ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Cinematic Teasers */}
          <div className="gs-reels-extras" data-aos="fade-up">
            <div className="gs-extras-header">
              <FaVideo style={{ color: '#F59E0B' }} />
              <h3>Camp Teasers &amp; Cinematic Highlights</h3>
            </div>
            <div className="gs-extras-grid">
              <div className="gs-extra-card">
                <div className="gs-extra-video-wrap">
                  <video
                    src={toAssetUrl("/videos/reels/gramsetu_camp_announcement.mp4")}
                    poster={toAssetUrl("/videos/reels/gramsetu_camp_announcement_poster.jpg")}
                    controls
                    playsInline
                    preload="none"
                    className="gs-extra-video"
                  />
                </div>
                <div className="gs-extra-info">
                  <h4>Gram-Setu 2026: Official Camp Announcement 🏕️</h4>
                  <p>The call to action that rallied 60+ engineering volunteers to Jamgaon, Mulshi.</p>
                </div>
              </div>

              <div className="gs-extra-card">
                <div className="gs-extra-video-wrap">
                  <video
                    src={toAssetUrl("/videos/reels/gramsetu_camp_highlight.mp4")}
                    poster={toAssetUrl("/videos/reels/gramsetu_camp_highlight_poster.jpg")}
                    controls
                    playsInline
                    preload="none"
                    className="gs-extra-video"
                  />
                </div>
                <div className="gs-extra-info">
                  <h4>Camp Cinematic Moments &amp; Volunteer Energy ⚡</h4>
                  <p>7 days of Shramdaan, rural camaraderie, and purposeful youth leadership summarized.</p>
                </div>
              </div>

              <div className="gs-extra-card">
                <div className="gs-extra-video-wrap">
                  <video
                    src={toAssetUrl("/videos/reels/nss_camp_served_not_flexed.mp4")}
                    poster={toAssetUrl("/videos/reels/nss_camp_served_not_flexed_poster.jpg")}
                    controls
                    playsInline
                    preload="none"
                    className="gs-extra-video"
                  />
                </div>
                <div className="gs-extra-info">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(236, 72, 153, 0.15)',
                      color: '#F472B6',
                      padding: '0.3rem 0.9rem',
                      borderRadius: '20px',
                      fontSize: '1.15rem',
                      fontWeight: 700
                    }}>
                      <FaInstagram /> @vit_k_diariies
                    </span>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(245, 158, 11, 0.18)',
                      color: '#F59E0B',
                      border: '1px solid rgba(245, 158, 11, 0.4)',
                      padding: '0.3rem 0.9rem',
                      borderRadius: '20px',
                      fontSize: '1.1rem',
                      fontWeight: 700
                    }}>
                      ★ Camp Hero Background
                    </span>
                    <a
                      href="https://www.instagram.com/reel/DThn17diOxK/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#93C5FD',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      View on Instagram ↗
                    </a>
                  </div>
                  <h4>NSS Camp Spotlight: &quot;Served, Not Flexed&quot; 🌟🎬</h4>
                  <p>Viral student media chronicle capturing the spirit, sweat, camaraderie, and selfless leadership of NSS Camp volunteers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DAILY SCHEDULE TIMELINE ── */}
        <section className="gs-schedule" data-aos="fade-up">
          <div className="gs-section-head">
            <span className="label-tag label-light" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}>7-Day Official Itinerary</span>
            <h2>Daily Schedule &amp; Field Chronicles</h2>
            <p>Every single day at Jamgaon — purposeful, structured, community-rooted, and transformative</p>
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

                  <p className="gs-timeline-caption">&ldquo;{d.caption}&rdquo;</p>

                  <div className="gs-timeline-highlights-block">
                    <span className="gs-highlights-label">★ Daily Highlights</span>
                    <ul className="gs-timeline-list">
                      {d.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  </div>

                  <div className="gs-tag-list">
                    {d.tags.map((t, k) => <span className="gs-tag-chip" key={k}>{t}</span>)}
                  </div>

                  <div className="gs-timeline-action-row">
                    <button
                      type="button"
                      className="gs-day-photos-btn"
                      onClick={() => jumpToDayPhotos(d.dayKey)}
                      aria-label={`View ${campManifest[d.dayKey]?.photos?.length || d.photoCount} photos from ${d.day}`}
                    >
                      <FaCamera />
                      <span>View {d.day} Photos ({campManifest[d.dayKey]?.photos?.length || d.photoCount})</span>
                    </button>

                    {d.reelUrl && (
                      <a
                        href={d.reelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gs-day-reel-btn"
                        aria-label={`Watch ${d.day} reel on Instagram`}
                      >
                        <FaInstagram />
                        <span>Watch {d.day} Reel ↗</span>
                      </a>
                    )}
                  </div>
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

        {/* ── DAY-WISE CAMP PHOTO ARCHIVE ── */}
        <section className="gs-gallery" id="camp-photo-gallery" data-aos="fade-up">
          <div className="gs-section-head">
            <span
              className="label-tag label-light"
              style={{
                background: 'rgba(245,158,11,0.1)',
                color: '#F59E0B',
                border: '1px solid rgba(245,158,11,0.25)',
              }}
            >
              ★ 7-Day Field Archive · {allPhotos.length} Photographs
            </span>
            <h2>Jamgaon Day-by-Day Photo Gallery</h2>
            <p>
              Explore authentic high-resolution moments, Shramdaan activities, village surveys, teaching modules,
              Dindi processions, and keynote addresses from all 7 residential camp days.
            </p>
          </div>

          {/* Day Navigation Tabs */}
          <div className="gs-day-filter-wrapper">
            <div className="gs-day-filter-bar">
              <button
                type="button"
                className={`gs-day-filter-btn${selectedDay === 'all' ? ' active' : ''}`}
                onClick={() => handleSelectDay('all')}
              >
                All Days
                <span className="gs-day-count-badge">{allPhotos.length}</span>
              </button>
              <button
                type="button"
                className={`gs-day-filter-btn${selectedDay === 'day1' ? ' active' : ''}`}
                onClick={() => handleSelectDay('day1')}
              >
                Day 1: The Beginning
                <span className="gs-day-count-badge">{campManifest.day1?.photos?.length || 0}</span>
              </button>
              <button
                type="button"
                className={`gs-day-filter-btn${selectedDay === 'day2' ? ' active' : ''}`}
                onClick={() => handleSelectDay('day2')}
              >
                Day 2: Spirit &amp; Service
                <span className="gs-day-count-badge">{campManifest.day2?.photos?.length || 0}</span>
              </button>
              <button
                type="button"
                className={`gs-day-filter-btn${selectedDay === 'day3' ? ' active' : ''}`}
                onClick={() => handleSelectDay('day3')}
              >
                Day 3: Solving Problems
                <span className="gs-day-count-badge">{campManifest.day3?.photos?.length || 0}</span>
              </button>
              <button
                type="button"
                className={`gs-day-filter-btn${selectedDay === 'day4' ? ' active' : ''}`}
                onClick={() => handleSelectDay('day4')}
              >
                Day 4: Tradition &amp; Dindi
                <span className="gs-day-count-badge">{campManifest.day4?.photos?.length || 0}</span>
              </button>
              <button
                type="button"
                className={`gs-day-filter-btn${selectedDay === 'day5' ? ' active' : ''}`}
                onClick={() => handleSelectDay('day5')}
              >
                Day 5: Resilience &amp; Everest
                <span className="gs-day-count-badge">{campManifest.day5?.photos?.length || 0}</span>
              </button>
              <button
                type="button"
                className={`gs-day-filter-btn${selectedDay === 'day6' ? ' active' : ''}`}
                onClick={() => handleSelectDay('day6')}
              >
                Day 6: Republic Day &amp; Legend
                <span className="gs-day-count-badge">{campManifest.day6?.photos?.length || 0}</span>
              </button>
              <button
                type="button"
                className={`gs-day-filter-btn${selectedDay === 'day7' ? ' active' : ''}`}
                onClick={() => handleSelectDay('day7')}
              >
                Day 7: The Grand Finale
                <span className="gs-day-count-badge">{campManifest.day7?.photos?.length || 0}</span>
              </button>
            </div>
          </div>

          {/* Active Day Info Header */}
          <div className="gs-day-active-header">
            <div className="gs-day-active-info">
              <h3>
                {selectedDay === 'all'
                  ? 'Complete 7-Day Camp Photo Record (364 Verified Photos)'
                  : campManifest[selectedDay]?.title || 'Jamgaon Daily Log'}
              </h3>
              <p className="gs-day-active-desc">
                {selectedDay === 'all'
                  ? 'Showing verified field photographs across all 7 days of Gram-Setu 2026 at Jamgaon Village, Mulshi.'
                  : campManifest[selectedDay]?.caption || ''}
              </p>
              {selectedDay !== 'all' && campManifest[selectedDay]?.tags && (
                <div className="gs-tag-list" style={{ marginTop: '0.8rem' }}>
                  {campManifest[selectedDay].tags.map((t, idx) => (
                    <span className="gs-tag-chip" key={idx}>{t}</span>
                  ))}
                </div>
              )}
            </div>
            <span className="gs-day-badge-pill">
              Showing {Math.min(visibleCount, activePhotos.length)} of {activePhotos.length} Photos
            </span>
          </div>

          {/* Photos Grid */}
          <div className="gs-gallery-grid">
            {activePhotos.slice(0, visibleCount).map((item, i) => (
              <div
                className={`gs-gallery-item${i === 0 && selectedDay === 'all' ? ' gs-gallery-featured' : ''}`}
                key={item.id || i}
                onClick={() => setLightboxIndex(i)}
                style={{ cursor: 'zoom-in' }}
                title="Click to view high-resolution photo"
              >
                <img
                  src={toAssetUrl(item.thumb || item.src)}
                  alt={item.title || `Gram-Setu 2026 Photo ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="gs-gallery-caption">{item.title}</div>
              </div>
            ))}
          </div>

          {/* Load More Controls */}
          {visibleCount < activePhotos.length && (
            <div className="gs-load-more-container">
              <button
                type="button"
                className="gs-load-more-btn"
                onClick={() => setVisibleCount((prev) => Math.min(prev + 24, activePhotos.length))}
              >
                Load More Photos (+24)
              </button>
              <button
                type="button"
                className="gs-show-all-btn"
                onClick={() => setVisibleCount(activePhotos.length)}
              >
                Show All ({activePhotos.length})
              </button>
            </div>
          )}
        </section>

      </div>

      {/* Fullscreen Reel Theater Modal */}
      {activeReelIndex !== null && gramSetuReels[activeReelIndex] && (
        <div className="lightbox-backdrop gs-reel-theater-backdrop" onClick={() => setActiveReelIndex(null)}>
          <div className="gs-reel-theater-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close gs-reel-close"
              onClick={() => setActiveReelIndex(null)}
              aria-label="Close reel theater"
            >
              <FaTimes />
            </button>

            <div className="gs-reel-theater-player-box">
              <video
                ref={theaterVideoRef}
                key={gramSetuReels[activeReelIndex].videoSrc}
                src={toAssetUrl(gramSetuReels[activeReelIndex].videoSrc)}
                poster={toAssetUrl(gramSetuReels[activeReelIndex].poster)}
                controls
                playsInline
                className="gs-reel-theater-video"
              />
            </div>

            <div className="gs-reel-theater-sidebar">
              <div className="gs-theater-badge" style={{ backgroundColor: gramSetuReels[activeReelIndex].color }}>
                {gramSetuReels[activeReelIndex].day} · {gramSetuReels[activeReelIndex].date}
              </div>
              <h3 className="gs-theater-title">{gramSetuReels[activeReelIndex].title}</h3>
              <p className="gs-theater-caption">{gramSetuReels[activeReelIndex].caption}</p>

              <div className="gs-theater-tags">
                {gramSetuReels[activeReelIndex].tags.map((t, idx) => (
                  <span key={idx} className="gs-tag-chip">{t}</span>
                ))}
              </div>

              <div className="gs-theater-nav-controls">
                <button
                  type="button"
                  className="gs-theater-nav-btn prev"
                  onClick={() => setActiveReelIndex((prev) => (prev > 0 ? prev - 1 : gramSetuReels.length - 1))}
                >
                  <FaChevronLeft /> Previous Day
                </button>
                <button
                  type="button"
                  className="gs-theater-nav-btn next"
                  onClick={() => setActiveReelIndex((prev) => (prev < gramSetuReels.length - 1 ? prev + 1 : 0))}
                >
                  Next Day <FaChevronRight />
                </button>
              </div>

              <a
                href={gramSetuReels[activeReelIndex].reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gs-theater-insta-link"
              >
                <FaInstagram /> Watch Official Reel on @nss.a_70 ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && activePhotos[lightboxIndex] && (
        <div className="lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>
            <img
              src={toAssetUrl(activePhotos[lightboxIndex].src)}
              alt={activePhotos[lightboxIndex].title}
              className="lightbox-img"
              decoding="async"
            />
            {activePhotos.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-arrow prev"
                  onClick={prevLightbox}
                  aria-label="Previous photo"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  className="lightbox-arrow next"
                  onClick={nextLightbox}
                  aria-label="Next photo"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
            <div className="lightbox-caption">
              {activePhotos[lightboxIndex].title}
            </div>
            <div className="lightbox-counter">
              Photo {lightboxIndex + 1} of {activePhotos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GramSetu;
