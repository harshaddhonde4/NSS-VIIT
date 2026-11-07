import PropTypes from "prop-types";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCrown } from "react-icons/fa";

// Automatically inject high-efficiency WebP/AVIF format and responsive sizing for Cloudinary images
const optimizeImgUrl = (url) => {
  if (!url || typeof url !== 'string') return url;
  if (url.includes('res.cloudinary.com') && url.includes('/image/upload/') && !url.includes('f_auto')) {
    return url.replace('/image/upload/', '/image/upload/f_auto,q_auto:eco,w_400,c_limit/');
  }
  return url;
};

function TeamCard({ name, role, imgSrc, twitter, email, linkedin, highlight }) {
  const optimizedSrc = optimizeImgUrl(imgSrc);

  return (
    <section className={highlight ? "team-card-section highlight-card" : "team-card-section"}>
      <div className="card">
        {highlight && (
          <div className="president-badge">
            <FaCrown />
          </div>
        )}
        <div className="imbBx">
          <img
            src={optimizedSrc}
            alt={name}
            loading="lazy"
            decoding="async"
            width="250"
            height="250"
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>
              {name} <br />
              <span>{role}</span>
            </h3>
          </div>
          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s Twitter / X`}>
                <FaXTwitter />
              </a>
            </li>
            <li style={{ "--i": 2 }}>
              <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
                <MdEmail />
              </a>
            </li>
            <li style={{ "--i": 3 }}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`}>
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <h1>{name}</h1>
        <p className="domain">{role}</p>
      </div>
    </section>
  );
}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};

export default TeamCard;
