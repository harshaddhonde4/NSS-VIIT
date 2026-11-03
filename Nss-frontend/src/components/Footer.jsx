import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          NSS VIIT<span> Pune</span>
        </h3>
        <p className="footer-tagline">Not Me But You — Service Above Self</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/gram-setu">Gram Setu</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="footer-company-name">
          © 2026 <strong>NSS VIIT Pune</strong>. All rights reserved.
        </p>
      </div>

      <hr className="footer-hr" style={{ color: "rgba(255,255,255,0.1)" }} />

      <div className="footer-center">
        <div className="footer-center-title">Get in Touch</div>

        <div className="footer-contact-row">
          <MdLocationOn className="footer-contact-icon" />
          <p>
            <span>Address</span>
            2/2A/9, Betal Nagar, Kondhwa, Pune, Maharashtra 411048
          </p>
        </div>

        <div className="footer-contact-row">
          <MdCall className="footer-contact-icon" />
          <p>
            <span>Phone</span>
            <a href="tel:+919403554039">+91 9403554039</a>
          </p>
        </div>

        <div className="footer-contact-row">
          <MdEmail className="footer-contact-icon" />
          <p>
            <span>Email</span>
            <a href="mailto:nss@viit.ac.in">nss@viit.ac.in</a>
          </p>
        </div>
      </div>

      <hr className="footer-hr" style={{ color: "rgba(255,255,255,0.1)" }} />

      <div className="footer-right">
        <div className="footer-right-title">About NSS VIIT Pune</div>
        <p className="footer-company-about">
          The National Service Scheme (NSS) at Vishwakarma Institute of
          Information Technology (VIIT), Pune, embodies a commitment to
          community engagement and social responsibility among its students.
          Through service, we build character and create lasting impact.
        </p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/www.nssviit.org/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/nss.viit.pune?igsh=MXZ5MXU3eGhsMzlteg==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/national-service-scheme-nss-viit/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/NSS_VIIT_PUNE?t=yM3oygffaI1aw5f1utKzeQ&s=09" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://youtube.com/@nssviit8764?si=HpbpZGpKu8YGuaPc" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
