import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const History = () => {
  return (
    <>
      <section className='timeline-section'>
        <div className='timeline'>
          <div style={{ textAlign: 'center', paddingTop: '5rem' }}>
            <span className="label-tag label-light">Our Journey</span>
            <h1 className='main-heading' style={{ color: '#FFFFFF', marginBottom: '3rem' }}>History of NSS VIIT Pune</h1>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #1B6B3A" }}
              icon={<div className="timeline-icon">2008</div>}
              iconStyle={{ backgroundColor: "#1B6B3A" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Establishment</h2>
              <h4 style={{ color: "#1B6B3A", fontWeight: 700 }}>NSS VIIT Pune</h4>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>Establishment of NSS at VIIT, Pune, marking the beginning of its impactful journey.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #9333EA" }}
              icon={<div className="timeline-icon">2010</div>}
              iconStyle={{ backgroundColor: "#9333EA" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Jamgaon Adopted</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>Jamgaon, the village adopted by NSS VIIT Pune, is declared a <span style={{ color: "#1B6B3A", fontWeight: 700 }}>Nirmal Gram</span>, signifying cleanliness and sanitation.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #0284C7" }}
              icon={<div className="timeline-icon">2020</div>}
              iconStyle={{ backgroundColor: "#0284C7" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Collaboration with Pad Squad</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>In collaboration with Pad Squad, NSS VIIT Pune organized a <span style={{ color: "#1B6B3A", fontWeight: 700 }}>sanitary pad donation drive</span> to support underprivileged women in underdeveloped areas.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #D97706" }}
              icon={<div className="timeline-icon">2021</div>}
              iconStyle={{ backgroundColor: "#D97706" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Water Quality Tests</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>Recognizing the importance of clean water, NSS VIIT Pune conducted <span style={{ color: "#1B6B3A", fontWeight: 700 }}>water quality tests</span> in five adopted villages. Based on the results, Dhamalewadi in Mulshi village received a 6000-liter capacity water filter.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #7C3AED" }}
              icon={<div className="timeline-icon">2023</div>}
              iconStyle={{ backgroundColor: "#7C3AED" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Donating a Rice Dehusking Machine</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>NSS VIIT Pune empowered the community of Jamgaon village by <span style={{ color: "#1B6B3A", fontWeight: 700 }}>donating a rice dehusking machine</span>.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #0F766E" }}
              icon={<div className="timeline-icon">2024</div>}
              iconStyle={{ backgroundColor: "#0F766E" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Cancer Detection Camp</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>Cervical <span style={{ color: "#1B6B3A", fontWeight: 700 }}>Cancer Detection Camp</span> for Jamgaon Women: Around 50 women were screened, potentially leading to early detection and improved health outcomes.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #1B6B3A" }}
              icon={<div className="timeline-icon">2024</div>}
              iconStyle={{ backgroundColor: "#1B6B3A" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Adarsh Sarpanch Award</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>Mr. Hanumant Survey, the Sarpanch of Jamgaon, receives the <span style={{ color: "#1B6B3A", fontWeight: 700 }}>Adarsh Sarpanch Award</span> for his exemplary leadership.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #F59E0B" }}
              icon={<div className="timeline-icon">2023</div>}
              iconStyle={{ backgroundColor: "#F59E0B" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Best NSS Unit — Pune University</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>On <span style={{ color: "#1B6B3A", fontWeight: 700 }}>4 July 2023</span>, Savitribai Phule Pune University awarded NSS VIIT Pune the <span style={{ color: "#1B6B3A", fontWeight: 700 }}>Best NSS Unit</span> award. Dr. R.S. Acharya received Best Program Officer and volunteer Swapnil Gaikwad received Best NSS Volunteer — a triple recognition at the university level.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #EC4899" }}
              icon={<div className="timeline-icon">2025</div>}
              iconStyle={{ backgroundColor: "#EC4899" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Rakta-Setu — Record Blood Drive</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>On 7–8 October 2025, NSS VIIT Pune&apos;s flagship blood donation camp <span style={{ color: "#1B6B3A", fontWeight: 700 }}>Rakta-Setu</span> achieved its largest scale — <span style={{ color: "#1B6B3A", fontWeight: 700 }}>956+ participants, 385 blood donors</span>, 11 free medical check-ups (ECG, Haemoglobin, Dental). Partnered with Adhar Blood Bank. Cancer awareness seminars ran alongside.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #0284C7" }}
              icon={<div className="timeline-icon">2025</div>}
              iconStyle={{ backgroundColor: "#0284C7" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Suraksha-Setu — 122+ SPO Record</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>On 6–7 September 2025 (Anant Chaturdashi), <span style={{ color: "#1B6B3A", fontWeight: 700 }}>122+ NSS VIIT volunteers</span> served with Swargate Police for Ganpati Visarjan crowd management — the unit&apos;s largest Special Police Officer deployment ever, <span style={{ color: "#1B6B3A", fontWeight: 700 }}>recognised by Sakal Media</span>.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #10B981" }}
              icon={<div className="timeline-icon">2025</div>}
              iconStyle={{ backgroundColor: "#10B981" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>620+ Trees with Sakal YIN</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>In collaboration with <span style={{ color: "#1B6B3A", fontWeight: 700 }}>Sakal YIN</span>, NSS VIIT Pune mobilised <span style={{ color: "#1B6B3A", fontWeight: 700 }}>300+ volunteers</span> to plant over <span style={{ color: "#1B6B3A", fontWeight: 700 }}>620 trees</span> across Pune — the largest single-season plantation drive by an engineering college NSS unit in the city.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #8B5CF6" }}
              icon={<div className="timeline-icon">2025</div>}
              iconStyle={{ backgroundColor: "#8B5CF6" }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Omkar Gengaje — Stem Cell Donation</h2>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>NSS VIIT volunteer <span style={{ color: "#1B6B3A", fontWeight: 700 }}>Omkar Gengaje</span> (Computer Engineering) underwent a 4-hour medical procedure to donate stem cells and save a young girl&apos;s life from cancer — entirely free of cost. The purest expression of <em>&quot;Not Me But You.&quot;</em></h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: "3px solid #F59E0B", position: "relative", overflow: "hidden" }}
              icon={<div className="timeline-icon" style={{ fontSize: "1.1rem", fontWeight: 900 }}>2026</div>}
              iconStyle={{ backgroundColor: "#F59E0B" }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, background: "linear-gradient(90deg, #F59E0B, #D97706)", color: "#0A1128", fontSize: "1.1rem", fontWeight: 800, padding: "0.4rem 1.4rem", borderRadius: "0 0 0 12px", textTransform: "uppercase", letterSpacing: "0.06rem" }}>★ Flagship</div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0A1128" }}>Gram-Setu 2026 — Residential Camp</h2>
              <h4 style={{ color: "#1B6B3A", fontWeight: 700, marginBottom: "0.5rem" }}>21–28 January 2026 · Jamgaon, Mulshi, Pune</h4>
              <h4 style={{ color: "#475569", fontWeight: 400, lineHeight: 1.6 }}>NSS VIIT Pune&apos;s most impactful camp to date — <span style={{ color: "#1B6B3A", fontWeight: 700 }}>60+ volunteers, 8 days</span>, keynoted by <span style={{ color: "#1B6B3A", fontWeight: 700 }}>Padma Shri Popatrao Pawar</span> (Hiware Bazar). Shramdaan, Dindi procession, street play <em>&apos;Paristhitichi Janiv&apos;</em>, drainage management at Disali School. Jamgaon achieves <span style={{ color: "#1B6B3A", fontWeight: 700 }}>100% Class 10 results for 5 consecutive years</span> — the living legacy of NSS VIIT&apos;s doorstep education.</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <br />
          <hr className='hr-style' />
        </div>
      </section>
    </>
  );
};

export default History;
