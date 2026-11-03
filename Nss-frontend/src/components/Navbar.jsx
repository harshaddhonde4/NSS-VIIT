import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 998) setShowMediaIcons(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className={`main-nav${scrolled ? " scrolled" : ""}`}>
        <div className="logo">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <h2>
              <img
                src="https://res.cloudinary.com/diyw5ilre/image/upload/v1714587159/nss-logo_wecruv.png"
                alt="NSS VIIT Pune Logo"
                className="nav-logo-img"
              />
              NSS VIIT <span>Pune</span>
            </h2>
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
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/www.nssviit.org/" target="_blank" rel="noreferrer">
                <FaFacebookF className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nss.viit.pune/" target="_blank" rel="noreferrer">
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@nssviit8764" target="_blank" rel="noreferrer">
                <FaYoutube className="youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/national-service-scheme-nss-viit/" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="linkedin" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            {showMediaIcons ? (
              <a href="#" onClick={(e) => { e.preventDefault(); setShowMediaIcons(false); }}>
                <FiX />
              </a>
            ) : (
              <a href="#" onClick={(e) => { e.preventDefault(); setShowMediaIcons(true); }}>
                <FiMenu />
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
