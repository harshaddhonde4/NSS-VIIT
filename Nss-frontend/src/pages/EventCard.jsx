import PropTypes from 'prop-types';
import './css/Event.css';
import { Link } from 'react-router-dom';

const EventCard = ({ name, date, venue, imgSrc, setup, text }) => {
  const truncateText = (input) => {
    if (!input) return '';
    const words = input.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return input;
  };

  const imageSource = Array.isArray(imgSrc) ? imgSrc[0] : imgSrc;
  const serializedImgSrc = Array.isArray(imgSrc) ? imgSrc.join(',') : imgSrc;

  return (
    <section className="eventcard-section" data-aos="fade-up">
      <div className="event-card">
        <div style={{ overflow: 'hidden', borderRadius: '18px 18px 0 0', margin: '-1px -1px 0 -1px' }}>
          <img
            className="event-image"
            src={imageSource}
            alt={name}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div style={{ padding: '1.8rem 2rem 2rem' }}>
          <div>
            <h1>{name}</h1>
            <p style={{ fontSize: '1.2rem', color: '#1B6B3A', fontWeight: 600, marginBottom: '0.6rem' }}>
              {date}
            </p>
          </div>
          <p style={{ fontSize: '1.35rem', color: '#64748B', lineHeight: 1.6 }}>
            {truncateText(text)}
          </p>

          <Link
            style={{ textDecoration: 'none' }}
            to={`/events/singleevent?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}&imgSrc=${encodeURIComponent(serializedImgSrc)}&setup=${encodeURIComponent(setup)}&text=${encodeURIComponent(text)}&venue=${encodeURIComponent(venue)}`}
          >
            <button className="button event-btn" type="button">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
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
  setup: PropTypes.string.isRequired,
};

export default EventCard;
