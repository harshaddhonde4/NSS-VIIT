import { lazy, Suspense, useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import "./css/Team.css";

const Team_24_25 = lazy(() => import("./Team_24-25"));
const Team_23_24 = lazy(() => import("./Team_23-24"));
const Team_25_26 = lazy(() => import("./Team_25-26"));

const Team = () => {
  useEffect(() => {
    document.title = "NSS VIIT Pune | Our Team";
  }, []);

  const [Batch, SetBatch] = useState("2025-26");

  const batches = ["2025-26", "2024-25", "2023-24"];

  const renderBatchChange = () => {
    switch (Batch) {
      case "2025-26":
        return <Team_25_26 />;
      case "2024-25":
        return <Team_24_25 />;
      case "2023-24":
        return <Team_23_24 />;
      default:
        return <Team_25_26 />;
    }
  };

  return (
    <>
      {/* Page Banner */}
      <div className="team-banner">
        <span className="label-tag label-light">The People Behind the Mission</span>
        <h1>Our Team</h1>
        <p>Meet the dedicated faculty and student leaders who drive NSS VIIT Pune forward</p>
      </div>

      <section className="team-page">

        {/* ===== STUDENT TEAM FIRST ===== */}
        <div className="team-section-header" data-aos="fade-up">
          <h2>Student Team</h2>
          <div className="section-line"></div>
          <p>The passionate student leaders shaping our vision on the ground</p>
        </div>

        <div className="batch-selector" data-aos="fade-up">
          <span className="batch-label">Select Batch:</span>
          <div className="batch-pills">
            {batches.map((b) => (
              <button
                key={b}
                type="button"
                className={`batch-pill${Batch === b ? " active" : ""}`}
                onClick={() => SetBatch(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="batch-content">
          <Suspense fallback={<div className="text-center py-5 text-muted">Loading batch details...</div>}>
            {renderBatchChange()}
          </Suspense>
        </div>

        {/* Divider */}
        <div className="team-divider" data-aos="fade-up">
          <div className="divider-line"></div>
          <span className="divider-text">✦</span>
          <div className="divider-line"></div>
        </div>

        {/* ===== FACULTY ADVISORS SECOND ===== */}
        <div className="team-section-header" data-aos="fade-up">
          <h2>Faculty Advisors</h2>
          <div className="section-line"></div>
          <p>Our guiding mentors who inspire and lead by example</p>
        </div>

        <div className="card_Container faculty-container" data-aos="fade-up">
          <TeamCard
            name="Vikas Kolekar"
            role="NSS Program Officer"
            imgSrc="https://res.cloudinary.com/diyw5ilre/image/upload/v1715015192/nss/faculty-1_i9h7jw.png"
            twitter="#"
            email="vikas.kolekar@viit.ac.in"
            linkedin="https://www.linkedin.com/in/vikas-kolekar/"
          />

          <TeamCard
            name="Amol Suryawanshi"
            role="NSS Program Officer"
            imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1758392982/42e3745c-290f-4d94-91d3-7ab60e53c059.png"
            twitter="#"
            email="amol.suryawanshi@viit.ac.in"
            linkedin="https://www.linkedin.com/in/amol-shivajirao-suryawanshi-81216b18/"
          />

          <TeamCard
            name="Sharada Desai"
            role="NSS Program Officer"
            imgSrc="https://res.cloudinary.com/diyw5ilre/image/upload/v1717755195/WhatsApp_Image_2024-06-07_at_3.32.58_PM_qxg4ir.jpg"
            twitter="#"
            email="sharada.desai@viit.ac.in"
            linkedin="https://www.linkedin.com/in/sharada-desai-669ba3a/"
          />
        </div>
      </section>
    </>
  );
};

export default Team;
