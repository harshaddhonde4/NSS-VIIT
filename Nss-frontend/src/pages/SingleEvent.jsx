import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { toAssetUrl } from '../utils/assetHelper';
import { eventsData } from '../data/eventsData';
import useSEO from '../components/useSEO';
import {
  FaArrowLeft,
  FaPrint,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCamera,
  FaExpand,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaThLarge,
  FaSearchPlus,
} from 'react-icons/fa';

const SingleEvent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const rawName = queryParams.get('name') || '';
  const matched = eventsData.find(
    (e) => e.name.toLowerCase() === rawName.toLowerCase()
  );

  const name = matched ? matched.name : (rawName || 'Initiative Details');
  const date = matched ? matched.date : queryParams.get('date');
  const text = matched ? matched.text : queryParams.get('text');
  const venue = matched ? matched.venue : queryParams.get('venue');
  const setup = matched ? matched.setup : queryParams.get('setup');

  let img = [];
  if (matched && matched.imgSrc) {
    img = Array.isArray(matched.imgSrc) ? matched.imgSrc : [matched.imgSrc];
  } else {
    const rawImg = queryParams.get('imgSrc');
    if (rawImg) {
      try {
        const parsed = JSON.parse(rawImg);
        img = Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        img = rawImg.split(',').filter(Boolean);
      }
    }
  }

  useSEO({
    title: `${name} | NSS VIIT Pune · Initiative Details`,
    description: text || `Explore details, photos, and impact reports from ${name} organized by NSS VIIT Pune.`,
    keywords: `${name}, NSS VIIT event, ${venue || 'Pune'}, NSS initiatives`,
    canonical: `https://nss-viit.vercel.app/events/singleevent?name=${encodeURIComponent(name)}`,
    ogImage: img && img.length > 0 ? toAssetUrl(img[0]) : undefined,
  });

  useEffect(() => {
    document.title = `${name} | NSS VIIT Pune`;
  }, [name]);

  const [activeIndex, setActiveIndex] = useState(0);

  // Reset active slide when navigating to a different event
  useEffect(() => {
    setActiveIndex(0);
  }, [location.search]);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const thumbTrayRef = useRef(null);

  // Keep thumbnail scrubber centered on active item
  useEffect(() => {
    if (thumbTrayRef.current && thumbTrayRef.current.children[activeIndex]) {
      const activeEl = thumbTrayRef.current.children[activeIndex];
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeIndex]);

  const prevSlide = useCallback(() => {
    if (img.length === 0) return;
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : img.length - 1));
  }, [img.length]);

  const nextSlide = useCallback(() => {
    if (img.length === 0) return;
    setActiveIndex((prev) => (prev < img.length - 1 ? prev + 1 : 0));
  }, [img.length]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : img.length - 1));
    }
  }, [lightboxIndex, img.length]);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev < img.length - 1 ? prev + 1 : 0));
    }
  }, [lightboxIndex, img.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
      } else {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, prevLightbox, nextLightbox, prevSlide, nextSlide]);

  return (
    <>
      <section className="singleevent">
        <section className="singleevent-section-container container">
          <div className="singleevent-section container">
            {/* Top Navigation & Utility Controls */}
            <div className="singleevent-actions">
              <Link to="/events" className="btn-action-back">
                <FaArrowLeft /> Back to All Initiatives
              </Link>
              <button
                type="button"
                className="btn-action-print"
                onClick={() => window.print()}
                title="Print or Save official PDF summary"
              >
                <FaPrint /> Print / Save PDF Brief
              </button>
            </div>

            {/* Initiative Meta Badges */}
            <div className="singleevent-meta-bar">
              {date && (
                <span className="singleevent-meta-pill">
                  <FaCalendarAlt className="meta-icon" /> {date}
                </span>
              )}
              {venue && (
                <span className="singleevent-meta-pill">
                  <FaMapMarkerAlt className="meta-icon" /> {venue}
                </span>
              )}
              {img.length > 0 && (
                <span className="singleevent-meta-pill photo-count">
                  <FaCamera className="meta-icon" /> {img.length} Field Photographs
                </span>
              )}
            </div>

            <h1 className="singleevent-title">{name}</h1>

            {/* Interactive Hero Stage Showcase */}
            {img.length > 0 && (
              <div className="singleevent-stage-wrapper">
                <div
                  className="singleevent-stage"
                  onClick={() => openLightbox(activeIndex)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') openLightbox(activeIndex);
                  }}
                  title="Click to inspect high-resolution photograph"
                >
                  {/* Ambient Blurred Backdrop for studio presentation without cropping */}
                  <div
                    className="singleevent-stage-bg"
                    style={{ backgroundImage: `url(${toAssetUrl(img[activeIndex])})` }}
                    aria-hidden="true"
                  />

                  {/* Fully Visible Uncropped Photograph */}
                  <img
                    className="singleevent-stage-img"
                    src={toAssetUrl(img[activeIndex])}
                    alt={`${name} photograph ${activeIndex + 1}`}
                    loading="eager"
                    decoding="async"
                  />

                  {/* Stage Badges Overlay */}
                  <div className="stage-overlay-badges">
                    <span className="stage-counter-badge">
                      <FaCamera className="stage-badge-icon" /> Photo {activeIndex + 1} of {img.length}
                    </span>
                    <span className="stage-zoom-badge">
                      <FaExpand className="stage-badge-icon" /> Click to Expand
                    </span>
                  </div>

                  {/* Previous / Next Slide Controls */}
                  {img.length > 1 && (
                    <>
                      <button
                        className="stage-nav-btn stage-prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        aria-label="Previous photograph"
                        type="button"
                      >
                        <IoIosArrowDropleftCircle className="stage-arrow-icon" />
                      </button>
                      <button
                        className="stage-nav-btn stage-next"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        aria-label="Next photograph"
                        type="button"
                      >
                        <IoIosArrowDroprightCircle className="stage-arrow-icon" />
                      </button>
                    </>
                  )}
                </div>

                {/* Horizontal Scrubber Thumbnails Strip */}
                {img.length > 1 && (
                  <div className="singleevent-thumb-tray" ref={thumbTrayRef}>
                    {img.map((thumbSrc, index) => (
                      <button
                        key={`thumb-${index + 1}`}
                        type="button"
                        className={`thumb-tray-item ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        title={`Select photograph ${index + 1}`}
                        aria-label={`Select photograph ${index + 1}`}
                      >
                        <img
                          src={toAssetUrl(thumbSrc)}
                          alt={`${name} thumbnail ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="thumb-idx">{index + 1}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Event Setup & Organization Details */}
            {setup && (
              <div className="singleevent-details-block" data-aos="fade-up">
                <h2 className="event-about-heading">Initiative Setup &amp; Organization</h2>
                <div className="about-event-wrapper">
                  <p className="about-event">{setup}</p>
                </div>
              </div>
            )}

            {/* About the Event Narrative */}
            {text && (
              <div className="singleevent-details-block" data-aos="fade-up">
                <h2 className="event-about-heading">About the Initiative</h2>
                <div className="about-event-wrapper">
                  <p className="about-event">{text}</p>
                </div>
              </div>
            )}

            {/* Complete Field Photo Archive Grid */}
            {img.length > 0 && (
              <div className="singleevent-gallery-section" data-aos="fade-up">
                <div className="singleevent-gallery-header">
                  <div className="gallery-header-left">
                    <span className="gallery-header-chip">
                      <FaThLarge className="chip-icon" /> Photo Archive
                    </span>
                    <h2 className="gallery-section-title">Complete Field Photographic Record</h2>
                    <p className="gallery-section-subtitle">
                      Explore all {img.length} verified authentic documentation photographs from this initiative. Click any photo to inspect high-resolution preview.
                    </p>
                  </div>
                </div>

                <div className="singleevent-photo-grid">
                  {img.map((imageSrc, index) => (
                    <div
                      key={`grid-${index + 1}`}
                      className={`singleevent-grid-card ${index === activeIndex ? 'is-spotlighted' : ''}`}
                      onClick={() => {
                        setActiveIndex(index);
                        openLightbox(index);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setActiveIndex(index);
                          openLightbox(index);
                        }
                      }}
                      title={`Inspect photograph ${index + 1} in full resolution`}
                    >
                      <div className="grid-card-media">
                        <img
                          className="grid-card-img"
                          src={toAssetUrl(imageSrc)}
                          alt={`${name} field record ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="grid-card-overlay">
                          <span className="grid-card-zoom-icon">
                            <FaSearchPlus />
                          </span>
                          <span className="grid-card-label">Photo #{index + 1}</span>
                        </div>
                        {index === activeIndex && (
                          <span className="grid-spotlight-badge">Spotlight</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>

      {/* Enhanced Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header-bar">
              <div className="lightbox-title-text">{name}</div>
              <div className="lightbox-counter-pill">
                <FaCamera style={{ marginRight: '6px' }} />
                Photograph {lightboxIndex + 1} of {img.length}
              </div>
              <button
                type="button"
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <FaTimes />
              </button>
            </div>

            <div className="lightbox-media-wrapper">
              <img
                src={toAssetUrl(img[lightboxIndex])}
                alt={`${name} enlarged preview ${lightboxIndex + 1}`}
                className="lightbox-img"
                decoding="async"
              />
            </div>

            {img.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-arrow prev"
                  onClick={prevLightbox}
                  aria-label="Previous photograph"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  className="lightbox-arrow next"
                  onClick={nextLightbox}
                  aria-label="Next photograph"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <div className="lightbox-footer-tray">
              <div className="lightbox-caption">{name} &mdash; Official Field Record</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleEvent;
