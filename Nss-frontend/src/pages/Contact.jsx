import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import "./css/contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";
import useSEO from "../components/useSEO";

const Contact = () => {
  useSEO({
    title: "Contact Us | NSS VIIT Pune - Unit A-70",
    description: "Connect with the NSS VIIT Pune unit. Reach out for collaborations, social drives, volunteering opportunities, blood donation camps, or inquiries.",
    keywords: "Contact NSS VIIT, NSS VIIT address, VIIT Pune NSS contact, join NSS VIIT",
    canonical: "https://nss-viit.vercel.app/contact",
  });

  useEffect(() => {
    Aos.init({ duration: 800, once: true, offset: 60 });
  }, []);

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate before sending
    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.warn("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm("service_l7uj94e", "template_zdq8u84", form.current, {
        publicKey: "E6cffEqoTzMU8NBUF",
      })
      .then(
        () => {
          toast.success("Message sent successfully! We'll get back to you soon.");
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send message. Please try again or email us directly at nss@viit.ac.in");
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <section className="contact-page">
        {/* Banner */}
        <div className="contact-banner" data-aos="fade-down">
          <span className="label-tag label-light">We&apos;d love to hear from you</span>
          <h1>Contact Us</h1>
          <p>Reach out for collaborations, volunteering, or any queries about NSS VIIT Pune</p>
        </div>

        {/* Body */}
        <div className="contact-body">
          {/* Form */}
          <div className="contact-form-wrap" data-aos="fade-up">
            <h2>Send a Message</h2>
            <p className="form-sub">Fill the form and our team will respond within 24–48 hours.</p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-2col">
                <div className="field">
                  <label htmlFor="username">Your Name *</label>
                  <input type="text" name="user_name" id="username" placeholder="e.g. Harshad Dhonde" required autoComplete="off" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" name="user_email" id="email" placeholder="e.g. you@example.com" required autoComplete="off" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject *</label>
                <input type="text" name="subject" id="subject" placeholder="e.g. Volunteering Inquiry" required autoComplete="off" />
              </div>

              <div className="field">
                <label htmlFor="textarea">Your Message *</label>
                <textarea name="message" id="textarea" rows="7" required placeholder="Tell us how we can help you or how you'd like to get involved…" autoComplete="off" />
              </div>

              <button type="submit" className={`submit-btn${isLoading ? " sending" : ""}`} disabled={isLoading} id="contact-submit-btn">
                {isLoading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info-wrap" data-aos="fade-up" data-aos-delay="80">
            <div className="info-header">
              <h2>Get in Touch</h2>
              <p>We&apos;re here to answer your questions, hear your ideas, and welcome new volunteers to the NSS VIIT Pune family.</p>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon"><MdLocationOn /></div>
                <div>
                  <span className="info-label">Office Address</span>
                  <span className="info-value">NSS VIIT Office, 2/2A/9, Betal Nagar, Kondhwa, Pune, Maharashtra — 411048</span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><MdCall /></div>
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value"><a href="tel:+919403554039">+91 9403554039</a></span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><MdEmail /></div>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value"><a href="mailto:nss@viit.ac.in">nss@viit.ac.in</a></span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon social-icon-wrap">
                  <span style={{ fontSize: '1.4rem' }}>🔗</span>
                </div>
                <div>
                  <span className="info-label">Follow Us</span>
                  <div className="social-row">
                    <a href="https://www.facebook.com/www.nssviit.org/" target="_blank" rel="noreferrer" aria-label="NSS VIIT Facebook"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/nss.viit.pune/" target="_blank" rel="noreferrer" aria-label="NSS VIIT Instagram"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/company/national-service-scheme-nss-viit/" target="_blank" rel="noreferrer" aria-label="NSS VIIT LinkedIn"><FaLinkedinIn /></a>
                    <a href="https://youtube.com/@nssviit8764" target="_blank" rel="noreferrer" aria-label="NSS VIIT YouTube"><FaYoutube /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-wrap">
              <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1892.2550785516066!2d73.88255821953331!3d18.460536975726573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb005f2f3b27%3A0x2dc37556f2256b70!2sNSS%20VIIT%20Office!5e0!3m2!1sen!2sin!4v1715021959068!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="NSS VIIT Pune Location" />
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" bodyClassName="toastBody" />
    </>
  );
};

export default Contact;
