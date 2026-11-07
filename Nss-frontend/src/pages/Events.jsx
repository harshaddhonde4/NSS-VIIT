import { useEffect, useState, useMemo } from 'react';
import EventCard from './EventCard';
import useSEO from '../components/useSEO';
import { eventsData } from '../data/eventsData';
import { FaSearch, FaTimes, FaFilter } from 'react-icons/fa';

const CATEGORIES = [
  'All',
  'Batch 2025-26',
  'Rural & Camps',
  'Health & Medical',
  'Environment & Cleanliness',
  'Civic & Police',
  'Youth & Cultural',
  'Archive',
];

const Events = () => {
  useSEO({
    title: 'Events & Initiatives | NSS VIIT Pune · Social Impact Drives',
    description: 'Explore all flagship events and community drives of NSS VIIT Pune: Gram-Setu Annual Camp, Mega Blood Donation Drives, SPO Ganesh Bandobast, Swachhata Hi Seva, and health checkups.',
    keywords: 'NSS VIIT Events, Gram Setu camp, Rakta Setu blood donation, SPO duty Pune police, Swachhata Abhiyan',
    canonical: 'https://nss-viit.vercel.app/events',
  });

  useEffect(() => {
    document.title = 'NSS VIIT Pune | Events & Initiatives';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = useMemo(() => {
    return eventsData.filter((ev) => {
      // Category check
      if (selectedCategory === 'Batch 2025-26') {
        const b = (ev.batch || '').replace(/\s+/g, '');
        if (!b.includes('2025-26')) return false;
      }
      if (selectedCategory === 'Archive' && ev.batch !== 'Archive') return false;
      if (
        selectedCategory !== 'All' &&
        selectedCategory !== 'Batch 2025-26' &&
        selectedCategory !== 'Archive' &&
        ev.category !== selectedCategory
      ) {
        return false;
      }

      // Search keyword check
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const inName = (ev.name || '').toLowerCase().includes(query);
        const inVenue = (ev.venue || '').toLowerCase().includes(query);
        const inText = (ev.text || '').toLowerCase().includes(query);
        const inSetup = (ev.setup || '').toLowerCase().includes(query);
        return inName || inVenue || inText || inSetup;
      }

      return true;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
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
          What We Do
        </span>
        <h1>Our Events &amp; Initiatives</h1>
        <p style={{ position: 'relative', zIndex: 1 }}>
          Explore 300+ grassroots drives, flagship rural camps, health interventions, and youth programs
        </p>
      </div>

      <section className="events-section">
        {/* Interactive Search & Filter Toolbar */}
        <div className="events-toolbar" data-aos="fade-up">
          <div className="events-search-row">
            <FaSearch className="events-search-icon" />
            <input
              type="text"
              className="events-search-input"
              placeholder="Search initiatives by title, location (e.g. Jamgaon, Swargate), or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className="events-search-clear"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="events-pills-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#64748B', fontSize: '1.3rem', fontWeight: 600, marginRight: '0.4rem' }}>
              <FaFilter /> Category:
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="events-stats-row">
            <div className="events-stats-count">
              Showing <strong>{filteredEvents.length}</strong> of <strong>{eventsData.length}</strong> recorded initiatives
            </div>
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#1B6B3A',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Batch 2025-26 Accredited Callout */}
        {selectedCategory === 'Batch 2025-26' && (
          <div className="batch-showcase-callout" data-aos="fade-up">
            <div className="batch-callout-icon">⭐</div>
            <div className="batch-callout-body">
              <h3>Accredited Initiatives · Batch 2025–26</h3>
              <p>
                Official field documentation and state honors across all 12 accredited institutional initiatives carried out by the 2025–26 volunteer contingent, including rural engineering Shramdaan at Jamgaon, high-volume blood donation camps, and municipal Police Mitra deployments.
              </p>
            </div>
          </div>
        )}

        {/* Event Cards Grid */}
        {filteredEvents.length > 0 ? (
          <div className="event-card-grid">
            {filteredEvents.map((ev, index) => (
              <EventCard
                key={`${ev.name}-${index}`}
                featured={ev.featured}
                name={ev.name}
                date={ev.date}
                venue={ev.venue}
                imgSrc={ev.imgSrc}
                setup={ev.setup}
                text={ev.text}
              />
            ))}
          </div>
        ) : (
          <div className="events-empty-state" data-aos="fade-up">
            <h3>No initiatives found</h3>
            <p>
              No events matched &quot;{searchTerm}&quot; in category &quot;{selectedCategory}&quot;. Try broadening your keywords.
            </p>
            <button
              type="button"
              className="btn-reset-filters"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
            >
              Show All Initiatives
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Events;
