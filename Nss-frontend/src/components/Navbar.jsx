import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


import { GiCrossedSwords, GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            NSS Viit Pune
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setShowMediaIcons(false)}>about</NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={() => setShowMediaIcons(false)}>Events</NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={() => setShowMediaIcons(false)}>Our Team</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowMediaIcons(false)}>contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/www.nssviit.org/"
                target="_thapa">
                <FaFacebookF className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nss.viit.pune/"
                target="_thapa">
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@nssviit8764"
                target="_thapa">
                <FaYoutube className="youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/national-service-scheme-nss-viit/"
                target="_thapa">
                <FaLinkedinIn className="linkedin" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */} 

          <div className="hamburger-menu">
            {showMediaIcons ? (
              <a href="#" onClick={() => setShowMediaIcons(false)}>
                <GiCrossedSwords />
              </a>
            ) : (
              <a href="#" onClick={() => setShowMediaIcons(true)}>
                <GiHamburgerMenu />
              </a>
            )}
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;