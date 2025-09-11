
import PropTypes from 'prop-types';
import './css/Event.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';

const EventCard = ({ name, date, venue, imgSrc, setup, text }) => {

  useEffect(() => {
    Aos.init({ duration: 2000 }, { delay: 50 }, { offset: 400 });
  }, [])


  // Function to truncate the text to 100 words
  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return text;
  };

  return (
    <>
      <section className="eventcard-section" data-aos="zoom-in" >
        <div className='event-card' >
          <div>
            <h1>{name}</h1>
            <p>{date}</p>
          </div>
          <div>
            <img className='event-image' src={imgSrc[0]} alt='Event image' />
          </div>
          <p>
            {truncateText(text)}
          </p>

          {/* <a href='#'><button className='button event-btn' data-aos = "flip-left" >More...</button></a> */}
          {/* <a href={`/events/singleevent?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}&imgSrc=${encodeURIComponent(imgSrc)}&setup=${encodeURIComponent(setup)}&text=${encodeURIComponent(text)}&venue=${encodeURIComponent(venue)}`}>
            <button className='button event-btn' data-aos="flip-left">More...</button>
          </a> */}

          <Link style={{textDecoration:"none"}} to={`/events/singleevent?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}&imgSrc=${encodeURIComponent(imgSrc)}&setup=${encodeURIComponent(setup)}&text=${encodeURIComponent(text)}&venue=${encodeURIComponent(venue)}`}>
            <button className='button event-btn' data-aos="flip-left">
              More...
            </button>
          </Link>

        </div>
      </section>
    </>
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
