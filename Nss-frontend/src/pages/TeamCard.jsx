import PropTypes from "prop-types";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCrown } from "react-icons/fa";

function TeamCard({ name, role, imgSrc, twitter, email, linkedin, highlight }) {
  return (
    <section className={highlight ? "team-card-section highlight-card" : "team-card-section"}>
      <div className="card">
        {highlight && (
          <div className="president-badge">
            <FaCrown />
          </div>
        )}
        <div className="imbBx">
          <img src={imgSrc} alt={name} />
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
              <a href={twitter} target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>
            </li>
            <li style={{ "--i": 2 }}>
              <a href={`mailto:${email}`}>
                <MdEmail />
              </a>
            </li>
            <li style={{ "--i": 3 }}>
              <a href={linkedin} target="_blank" rel="noreferrer">
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
