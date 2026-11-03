import './css/partnership.css';

const PARTNER_BANNER = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715323115/part_rnvxli.png';

const Partnership = () => {
  return (
    <section className="partners-section">
      <div className="partners-header">
        <span className="label-tag">Trusted Partners</span>
        <h2>Our Collaborators</h2>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <img src={PARTNER_BANNER} alt="NSS VIIT Pune Partners" className="partner-banner" />
          <img src={PARTNER_BANNER} alt="NSS VIIT Pune Partners" className="partner-banner" />
        </div>
      </div>
    </section>
  );
};

export default Partnership;
