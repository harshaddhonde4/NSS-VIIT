import './css/partnership.css';

const PARTNER_BANNER = 'https://res.cloudinary.com/diyw5ilre/image/upload/f_auto,q_auto:eco/v1715323115/part_rnvxli.png';

const Partnership = () => {
  return (
    <section className="partners-section">
      <div className="partners-header">
        <span className="label-tag">Trusted Partners</span>
        <h2>Our Collaborators</h2>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <img src={PARTNER_BANNER} alt="NSS VIIT Pune Partners" className="partner-banner" loading="lazy" decoding="async" />
          <img src={PARTNER_BANNER} alt="NSS VIIT Pune Partners" className="partner-banner" loading="lazy" decoding="async" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Partnership;
