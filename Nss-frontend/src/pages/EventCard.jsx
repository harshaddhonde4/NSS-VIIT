
import PropTypes from 'prop-types';
import './css/Event.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';

const EventCard = ({ name, date, venue, imgSrc, setup, text }) => {

  useEffect(() => {
    Aos.init({ duration: 800, once: true, offset: 60 });
  }, [])

  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return text;
  };

  return (
    <section className="eventcard-section" data-aos="fade-up">
      <div className="event-card">
        <div style={{ overflow: 'hidden', borderRadius: '18px 18px 0 0', margin: '-1px -1px 0 -1px' }}>
          <img className='event-image' src={imgSrc[0]} alt={name} />
        </div>
        <div style={{ padding: '1.8rem 2rem 2rem' }}>
          <div>
            <h1>{name}</h1>
            <p style={{ fontSize: '1.2rem', color: '#1B6B3A', fontWeight: 600, marginBottom: '0.6rem' }}>{date}</p>
          </div>
          <p style={{ fontSize: '1.35rem', color: '#64748B', lineHeight: 1.6 }}>
            {truncateText(text)}
          </p>

          <Link style={{ textDecoration: "none" }} to={`/events/singleevent?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}&imgSrc=${encodeURIComponent(imgSrc)}&setup=${encodeURIComponent(setup)}&text=${encodeURIComponent(text)}&venue=${encodeURIComponent(venue)}`}>
            <button className='button event-btn'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  setup: PropTypes.string.isRequired,
};

export default EventCard
