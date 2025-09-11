import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import "./css/Team.css";
import { MdArrowRight } from "react-icons/md";
import Team_24_25 from "./Team_24-25";
import Team_23_24 from "./Team_23-24";

const Team = () => {
  useEffect(() => {
    document.title = "NSS | Team";
  });

  const [Batch, SetBatch] = useState("2024-25")

  const handleBatchChange = (e) =>{
    const batch = e.target.innerText
    SetBatch(batch)
  }

  const renderBatchChange = () =>{
    switch (Batch) {
      case "2024-25":{
        return <Team_24_25/>
      }

      case "2023-24":{
        return <Team_23_24/>
      }

      default:{
        return <Team_24_25/>
      }
    }
  }

  return (
    <>
      <section>
        <div className="wrapper">
          <div className="title">
            <h4>Faculty Members</h4>
          </div>

          <div className="card_Container">
            <TeamCard
              name="Vikas Kolekar"
              role="NSS program officer"
              imgSrc="https://res.cloudinary.com/diyw5ilre/image/upload/v1715015192/nss/faculty-1_i9h7jw.png"
              twitter="#"
              email="vikas.kolekar@viit.ac.in"
              linkedin="https://www.linkedin.com/in/vikas-kolekar/"
            />

            <TeamCard
              name="Nitin Sakhare"
              role="NSS program officer"
              imgSrc="https://res.cloudinary.com/diyw5ilre/image/upload/v1715015193/nss/faculty-2_z7queo.png"
              twitter="#"
              email="nitin.sakhare@viit.ac.in"
              linkedin="https://www.linkedin.com/in/nitin-sakhare-b2485383/"
            />

            <TeamCard
              name="Sharada Desai"
              role="NSS program officer"
              imgSrc="https://res.cloudinary.com/diyw5ilre/image/upload/v1717755195/WhatsApp_Image_2024-06-07_at_3.32.58_PM_qxg4ir.jpg"
              twitter="#"
              email="sharada.desai@viit.ac.in"
              linkedin="https://www.linkedin.com/in/sharada-desai-669ba3a/"
            />
          </div>

          <div className="title">
            <h4>Our Team Section</h4>
            <div className="batchWrapper">
              Batch <MdArrowRight />
              <div className="batchClass" onClick={handleBatchChange}>2023-24</div>
              <div className="batchClass" onClick={handleBatchChange}>2024-25</div>
            </div>
            {renderBatchChange()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
