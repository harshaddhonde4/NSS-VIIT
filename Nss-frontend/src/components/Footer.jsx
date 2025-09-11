
import './Footer.css'; // Import CSS file for styles....

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";


function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>NSS<span>VIIT</span></h3>
        <p className="footer-links">
          <a href="/">Home</a> | 
          <a href="/about">About</a> | 
          <a href="/contact">Contact</a> | 
          <a href="/events">Events</a>
        </p>
        <p className="footer-company-name">
          Copyright © 2024 <strong>Developed by: NSS VIIT</strong> All rights reserved
        </p>
      </div>
      <hr className='footer-hr' style={{color:"white"}}/>
      <div className="footer-center">
        <div>
          <i><FaMapMarkerAlt/></i>
          <p><span></span>NSS VIIT HQ, PUNE</p>
        </div>
        <div>
          <i><MdCall/></i>
          <p><span></span><a href="tel:+919284708471">+91 9284708471</a></p>
        </div>
        <div>
          <i><MdEmail/></i>
          <p><a href="mailto:nss@viit.ac.in"><span></span>nss@viit.ac.in</a></p>
        </div>
      </div>
      <hr className='footer-hr' style={{color:"white"}}/>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About NSS VIIT</span>
          <strong>The National Service Scheme (NSS) at Vishwakarma Institute of Information Technology (VIIT), Pune, embodies a commitment to community engagement and social responsibility among its students.</strong> 
        </p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/www.nssviit.org/"><FaFacebookF/></a>
          <a href="https://www.instagram.com/nss.viit.pune?igsh=MXZ5MXU3eGhsMzlteg=="><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/national-service-scheme-nss-viit/"><FaLinkedinIn /></a>
          <a href="https://x.com/NSS_VIIT_PUNE?t=yM3oygffaI1aw5f1utKzeQ&s=09"><FaXTwitter /></a>
          <a href="https://youtube.com/@nssviit8764?si=HpbpZGpKu8YGuaPc"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
