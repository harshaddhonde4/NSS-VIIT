
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import { DiJavascript } from 'react-icons/di';

const History = () => {
  return (
    <>
      <section className='timeline-section'>
        <div className='timeline'>
          <center><h1 className='main-heading container'>History of NSS</h1></center>
          <VerticalTimeline>
            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              icon={<div className="timeline-icon">2008</div>}
              iconStyle={{ backgroundColor: "#04b370d8" }}
            >
              <h2 style={{ fontSize: "2rem" }}>Establishment</h2>
              <h4 style={{color:"red"}}>NSS VIIT, PUNE</h4>
              <h4>Establishment of NSS VIIT at VIIT, marking the beginning of its impactful journey.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              icon={<div className="timeline-icon">2010</div>}
              iconStyle={{ backgroundColor: "#b304aad8" }}
            >
              <h2 style={{ fontSize: "2rem" }}>Jamgaon Adopted</h2> 
              <h4>Jamgaon, the village adopted by NSS VIIT, is declared a <span style={{color:"red"}}>Nirmal Gram </span>signifying cleanliness and sanitation.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              icon={<div className="timeline-icon">2020</div>}
              iconStyle={{ backgroundColor: "#047cb3d8" }}
            >
              <h2 style={{ fontSize: "2rem" }}>Collaboration with Pad Squad</h2> 
              <h4>In collaboration with Pad Squad, NSS VIIT organized a <span style={{color:"red"}}>sanitary pad donation drive</span> to support underprivileged women in underdeveloped areas.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              icon={<div className="timeline-icon">2021</div>}
              iconStyle={{ backgroundColor: "#a4b304d8" }}
            >
              <h2 style={{ fontSize: "2rem" }}>Water Quality Tests</h2> 
              <h4>Recognizing the importance of clean water, NSS VIIT conducted <span style={{color:"red"}}>water quality tests</span> in five adopted villages. Based on the results, Dhamalewadi in Mulshi village received a much-needed 6000-liter capacity water filter, improving access to clean drinking water for the residents.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              icon={<div className="timeline-icon">2023</div>}
              iconStyle={{ backgroundColor: "#54287bfb" }}
            >
              <h2 style={{ fontSize: "2rem" }}>Donating a rice dehusking machine</h2> 
              <h4>NSS VIIT empowered the community of Jamgaon village by <span style={{color:"red"}}>donating a rice dehusking machine</span></h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              icon={<div className="timeline-icon">2024</div>}
              iconStyle={{ backgroundColor: "#0822cdfb" }}
            >
              <h2 style={{ fontSize: "2rem" }}>Cancer Detection Camp</h2> 
              <h4>Cervical <spam style={{color:"red"}}>Cancer Detection Camp</spam> for Jamgaon Women: Around 50 women were screened, potentially leading to early detection and improved health outcomes.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              icon={<div className="timeline-icon">2024</div>}
              iconStyle={{ backgroundColor: "#04b370d8" }}
            >
              <h2 style={{ fontSize: "2rem" }}>Adarsh Sarpanch Award</h2> 
              <h4>Mr. Hanumant Survey, the Sarpanch (village head) of Jamgaon, receives the <spam style={{color:"red"}}>Adarsh Sarpanch Award</spam> for his exemplary leadership.</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <br />
          <br />
          <hr className='hr-style' />
        </div>
      </section>
    </>
  )
}

export default History
