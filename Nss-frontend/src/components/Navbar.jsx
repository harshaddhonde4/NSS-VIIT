import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { toAssetUrl } from "../utils/assetHelper";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 998) setShowMediaIcons(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowMediaIcons(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className={`main-nav${scrolled ? " scrolled" : ""}`}>
        <div className="logo">
          <NavLink to="/" className="nav-brand-link">
            <img
              src={toAssetUrl("/images/img/nss-logo.png")}
              alt="NSS VIIT Logo"
              className="nav-logo-img"
              width="45"
              height="45"
              decoding="async"
            />
            <span className="brand-text">
              NSS VIIT <span className="brand-accent">Pune</span>
            </span>
          </NavLink>
        </div>

        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setShowMediaIcons(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={() => setShowMediaIcons(false)}>Events</NavLink>
            </li>
            <li>
              <NavLink to="/achievements" onClick={() => setShowMediaIcons(false)}>Achievements</NavLink>
            </li>
            <li>
              <NavLink to="/gram-setu" onClick={() => setShowMediaIcons(false)}>Gram Setu</NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={() => setShowMediaIcons(false)}>Our Team</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowMediaIcons(false)}>Contact</NavLink>
            </li>
          </ul>

          <div className="mobile-social-wrap">
            <span className="mobile-social-label">Connect With Us</span>
            <div className="mobile-social-icons">
              <a href="https://www.facebook.com/www.nssviit.org/" target="_blank" rel="noreferrer" aria-label="NSS VIIT Facebook">
                <FaFacebookF className="facebook" />
              </a>
              <a href="https://www.instagram.com/nss.a_70/" target="_blank" rel="noreferrer" aria-label="NSS VIIT Instagram">
                <FaInstagram className="instagram" />
              </a>
              <a href="https://www.youtube.com/@nssviit8764" target="_blank" rel="noreferrer" aria-label="NSS VIIT YouTube">
                <FaYoutube className="youtube" />
              </a>
              <a href="https://www.linkedin.com/company/national-service-scheme-nss-viit/" target="_blank" rel="noreferrer" aria-label="NSS VIIT LinkedIn">
                <FaLinkedinIn className="linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/www.nssviit.org/" target="_blank" rel="noreferrer" aria-label="NSS VIIT Facebook">
                <FaFacebookF className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nss.a_70/" target="_blank" rel="noreferrer">
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@nssviit8764" target="_blank" rel="noreferrer" aria-label="NSS VIIT YouTube">
                <FaYoutube className="youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/national-service-scheme-nss-viit/" target="_blank" rel="noreferrer" aria-label="NSS VIIT LinkedIn">
                <FaLinkedinIn className="linkedin" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <button
              className="hamburger-btn"
              onClick={() => setShowMediaIcons((prev) => !prev)}
              aria-label={showMediaIcons ? "Close menu" : "Open menu"}
              aria-expanded={showMediaIcons}
            >
              {showMediaIcons ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile menu */}
      {showMediaIcons && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setShowMediaIcons(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
