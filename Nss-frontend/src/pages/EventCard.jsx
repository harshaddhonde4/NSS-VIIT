import PropTypes from 'prop-types';
import './css/Event.css';
import { Link } from 'react-router-dom';
import { FaCamera, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const EventCard = ({ name, date, venue, imgSrc, text }) => {
  const truncateText = (input) => {
    if (!input) return '';
    const words = input.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return input;
  };

  const photosList = Array.isArray(imgSrc)
    ? imgSrc
    : (imgSrc ? imgSrc.split(',') : []);

  const imageSource = photosList.length > 0 ? photosList[0] : '/images/Events/cleanliness/1.jpg';
  const photoCount = photosList.length;

  const eventUrl = `/events/singleevent?name=${encodeURIComponent(name)}`;

  return (
    <div className="eventcard-section" data-aos="fade-up">
      <Link to={eventUrl} className="event-img-link" title={`View gallery and brief for ${name}`}>
        <img
          className="event-image"
          src={imageSource}
          alt={name}
          loading="lazy"
          decoding="async"
        />
        <div className="event-card-media-overlay">
          <div className="event-card-badges">
            {photoCount > 0 && (
              <span className="event-photo-count-badge">
                <FaCamera className="card-badge-icon" /> {photoCount} {photoCount === 1 ? 'Photo' : 'Photos'}
              </span>
            )}
            {venue && (
              <span className="event-venue-chip">
                <FaMapMarkerAlt className="card-badge-icon" /> {venue.split(',')[0]}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="event-card-body">
        <h2 className="event-card-title">{name}</h2>
        <p className="event-card-date">
          <FaCalendarAlt className="event-date-icon" /> {date}
        </p>
        <p className="event-card-desc">{truncateText(text)}</p>
        <div className="event-card-footer">
          <Link to={eventUrl} className="button event-btn" title={`View gallery and brief for ${name}`}>
            <span>View Gallery &amp; Brief</span>
            <FaArrowRight className="event-btn-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  text: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  setup: PropTypes.string,
};

export default EventCard;
