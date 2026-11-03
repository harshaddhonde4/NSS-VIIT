import RoleGroup from "../components/RoleGroup";
import TeamCard from "./TeamCard";
import "./css/Team.css";
import {
  FaCrown, FaUsers, FaStar, FaFileAlt,
  FaBullhorn, FaLeaf, FaCalendarAlt, FaBuilding, FaCoins, FaLaptopCode
} from "react-icons/fa";

const Team_25_26 = () => {
  return (
    <div className="team-structure">

      {/* ══════════════════════════════════
          TIER 1 — PRESIDENT
      ══════════════════════════════════ */}
      <RoleGroup icon={FaCrown} title="President" subtitle="Batch 2025–26" accent="#F59E0B" />
      <div className="card_Container president-row">
        <TeamCard
          name="Sushant Gade"
          role="President"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867544/FINAL_-_SUSHANT_GADE_imdzub.png"
          twitter="#"
          email="gadesushant1181@gmail.com"
          linkedin="https://www.linkedin.com/in/gadesushant1181"
          highlight={true}
        />
      </div>

      {/* ══════════════════════════════════
          TIER 2 — VICE PRESIDENTS
      ══════════════════════════════════ */}
      <RoleGroup icon={FaStar} title="Vice Presidents" subtitle="3 elected leaders" accent="#6366F1" />
      <div className="card_Container">
        <TeamCard name="Namit More" role="Vice President"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867533/IMG_20230817_162622_-_Namit_More_mfergf.jpg"
          twitter="#" email="namit.22311846@viit.ac.in" linkedin="https://www.linkedin.com/in/namit-more-36412628b" />
        <TeamCard name="Utkarsha Ahire" role="Vice President"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1758686664/ut_h0f9is.jpg"
          twitter="#" email="utkarsha.22310572@viit.ac.in" linkedin="https://www.linkedin.com/in/utkarsha-ahire-a622b4289" />
        <TeamCard name="Prem Shinde" role="Vice President"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867533/IMG_20250824_121934_-_Prem_Anandrao_Shinde_iyqbqe.png"
          twitter="#" email="prem.22420084@viit.ac.in" linkedin="https://www.linkedin.com/in/prem-anandrao-shinde-b150872aa" />
      </div>

      {/* ══════════════════════════════════
          TIER 3 — CORE REPRESENTATIVES
      ══════════════════════════════════ */}
      <RoleGroup icon={FaUsers} title="Core Representatives" subtitle="Key office bearers" accent="#0EA5E9" />
      <div className="card_Container">
        <TeamCard name="Nandini Pawar" role="Ladies Representative"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867529/IMG-20250818-WA0006_-_NANDINI_PAWAR_cgo4ci.jpg"
          twitter="#" email="nandini.22420042@viit.ac.in" linkedin="https://www.linkedin.com/in/nandini-pawar-56a142343" />
        <TeamCard name="Omkar Sakore" role="Special Representative"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867523/IMG_3355_-_OMKAR_SAKORE_tnvoeu.jpg"
          twitter="#" email="omkar.22310061@viit.ac.in" linkedin="https://www.linkedin.com/in/omkar-santosh-sakore-5594b5355" />
        <TeamCard name="Yogesh Badbade" role="University Representative"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867529/Polish_20240420_170116282_-_Yogesh_Badbade_jryrhn.jpg"
          twitter="#" email="badbadeyogesh02@gmail.com" linkedin="https://www.linkedin.com/in/yogesh-badbade-54b33734b" />
        <TeamCard name="Hemangi Bhamare" role="University Representative"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867529/20250510_181735_-_Hemangi_Bhamare_sfg1dt.jpg"
          twitter="#" email="hemangi.22310375@viit.ac.in" linkedin="https://www.linkedin.com/in/hemangi-dattatray-bhamare-94b7aa290" />
        <TeamCard name="Mahesh More" role="University Representative"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867529/IMG-20250322-WA0060_-_Mahesh_More_l7qd9t.jpg"
          twitter="#" email="mahesh.22311661@viit.ac.in" linkedin="http://linkedin.com/in/mahesh-more-b8105528b" />
      </div>

      {/* ══════════════════════════════════
          SECRETARIES
      ══════════════════════════════════ */}
      <RoleGroup icon={FaFileAlt} title="Secretaries" accent="#10B981" />
      <div className="card_Container">
        <TeamCard name="Pratiksha Deshmukh" role="Secretary"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867548/mee_-_PRATIKSHA_DESHMUKH_pjtxqc.jpg"
          twitter="#" email="pratiksha.22310039@viit.ac.in" linkedin="https://www.linkedin.com/in/pratiksha-deshmukh-271425291" />
        <TeamCard name="Sankalp Bhange" role="Secretary"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867521/IMG-20241210-WA0151_-_2364__Sankalp_Bhange_ljord1.jpg"
          twitter="#" email="sankalp.22311904@viit.ac.in" linkedin="https://www.linkedin.com/in/sankalp-bhange-00580a371" />
        <TeamCard name="Om Deshmukh" role="Secretary"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
      </div>

      {/* ══════════════════════════════════
          FINANCE
      ══════════════════════════════════ */}
      <RoleGroup icon={FaCoins} title="Finance" accent="#F59E0B" />
      <div className="card_Container">
        <TeamCard name="Vivek Khasaki" role="Finance Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867531/IMG-20240904-WA0041_-_39_Vivek_Khasaki_x1fcn3.jpg"
          twitter="#" email="vivek.22311379@viit.ac.in" linkedin="https://www.linkedin.com/in/vivek-khasaki-09b680294" />
        <TeamCard name="Sanika Joil" role="Finance Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867523/IMG_20250611_144804_-_SANIKA_JOIL_jerfuj.jpg"
          twitter="#" email="sanika.22311667@viit.ac.in" linkedin="https://www.linkedin.com/in/sanika-joil-285274294" />
      </div>

      {/* ══════════════════════════════════
          TECHNICAL
      ══════════════════════════════════ */}
      <RoleGroup icon={FaLaptopCode} title="Technical" accent="#8B5CF6" />
      <div className="card_Container">
        <TeamCard name="Mrunali Kothekar" role="Technical Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1758043068/mrk_photo_-_79_MRUNALI_KOTHEKAR_p7tybx.jpg"
          twitter="#" email="mrunali.22420199@viit.ac.in" linkedin="https://www.linkedin.com/in/mrunali-kothekar-ab617134a" />
        <TeamCard name="Samarth Ghante" role="Technical Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867523/IMG-20250824-WA0290_-_Samarth_Ghante_mr6yub.jpg"
          twitter="#" email="samarth.22310991@viit.ac.in" linkedin="https://www.linkedin.com/in/samarth-ghante" />
      </div>

      {/* ══════════════════════════════════
          COMMUNICATIONS & MEDIA
      ══════════════════════════════════ */}
      <RoleGroup icon={FaBullhorn} title="Communications & Media" subtitle="Publicity · Social Media · Documentation · Public Relations · Design" accent="#EC4899" />
      <div className="card_Container">
        <TeamCard name="Aarti Shirole" role="Publicity Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1758389867/1ba618b8-cefa-4c39-8f1c-f2d16be26ea2.png"
          twitter="#" email="aarti.22311079@viit.ac.in" linkedin="https://www.linkedin.com/in/aarti-shirole-946321322" />
        <TeamCard name="Aditi Nagave" role="Publicity Jt. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1737399647/woman-profile-icon-12_cxfywa.png"
          twitter="" email="#" linkedin="#" />
        <TeamCard name="Ayush Kadlag" role="Social Media Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867525/IMG_7924_-_Hariom_Homkar_fgdms9.jpg"
          twitter="#" email="ayush.22420207@viit.ac.in" linkedin="#" />
        <TeamCard name="Pranav Khonde" role="Social Media Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867521/IMG_6258_Original_-_1033_pranav_khonde_zs4ggz.jpg"
          twitter="#" email="pranav.22310729@viit.ac.in" linkedin="https://www.linkedin.com/in/pranav-khonde-45787528a/" />
        <TeamCard name="Anuja Rajurkar" role="Documentation & Design Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867544/IMG_20250908_160451_-_ANUJA_RAJURKAR_so556n.jpg"
          twitter="#" email="anuja.22310857@viit.ac.in" linkedin="https://www.linkedin.com/in/anuja-rajurkar-99bb8135a" />
        <TeamCard name="Ayurvi Pattewar" role="Design Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867531/20250125_170643_-_Ayurvi_Pattewar_dbwb4s.jpg"
          twitter="#" email="ayurvi.22311924@viit.ac.in" linkedin="#" />
        <TeamCard name="Jay Ghuge" role="Design Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867544/Airbrush-Image-Enhancer-1757327768164_-_Jay_Ghuge_nkeeu0.jpg"
          twitter="#" email="jay.22310442@viit.ac.in" linkedin="https://www.linkedin.com/in/jay-ghuge-9551b3290" />
        <TeamCard name="Sumit Landge" role="Documentation Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867533/IMG-20230706-WA0002_2_-_Sumit_Landge_o7p0vy.jpg"
          twitter="#" email="sumit.22420076@viit.ac.in" linkedin="https://www.linkedin.com/in/sumit-landge-4b348b214" />
        <TeamCard name="Aadarsh Potdar" role="Public Relations Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="aadarsh.22310445@viit.ac.in" linkedin="https://www.linkedin.com/in/aadarsh-potdar-6319b62a7" />
        <TeamCard name="Harshal Kamble" role="Public Relations Jt. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
      </div>

      {/* ══════════════════════════════════
          CSR & SPECIAL PROGRAMS
      ══════════════════════════════════ */}
      <RoleGroup icon={FaLeaf} title="CSR & Special Programs" subtitle="Blood Donation · UBA · LEO · Tree Plantation · Education · CSR" accent="#10B981" />
      <div className="card_Container">
        <TeamCard name="Pranit Govande" role="CSR Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867548/Pranit_Govande_JtPublicityHead_SY_-_PRANIT_GOVANDE_TY_D_Comp_70_y2upax.jpg"
          twitter="#" email="pranit.22311933@viit.ac.in" linkedin="https://www.linkedin.com/in/pranit-govande-profile/" />
        <TeamCard name="Nandini Kore" role="Blood Donation Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867546/IMG_20250908_142739_-_Nandini_Kore_u6xket.jpg"
          twitter="#" email="nandini.22420223@viit.ac.in" linkedin="#" />
        <TeamCard name="Vivek Jogdand" role="Blood Donation Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Samyak Fulzele" role="LEO Team"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867531/IMG_0739_-_Samyak_Fulzele_pqqmhu.jpg"
          twitter="#" email="samyakfulzele20@gmail.com" linkedin="https://www.linkedin.com/in/samyakfulzele" />
        <TeamCard name="Vivek Bhange" role="UBA Team"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867546/IMG_20250908_141612_-_03_Vivek_Bhange_wwjcun.jpg"
          twitter="#" email="vivek.22310090@viit.ac.in" linkedin="https://www.linkedin.com/in/viveksainathbhange" />
        <TeamCard name="Harsh Satpute" role="UBA Team"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867533/IMG_20250909_152648_-_Harsh_Satpute_tgvz90.jpg"
          twitter="#" email="harsh.22310428@viit.ac.in" linkedin="https://www.linkedin.com/in/harsh-satpute-4393a0290" />
        <TeamCard name="Nikita Bagul" role="Tree Plantation Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867523/Self_Photo_-_NIKITA_BAGUL_qwqx9v.jpg"
          twitter="#" email="nikita.22420035@viit.ac.in" linkedin="https://www.linkedin.com/in/nikita-bagul-720a42351" />
        <TeamCard name="Amogha Khare" role="Tree Plantation Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867547/IMG_20250908_122818_-_Amogha_Khare_y7ohz5.jpg"
          twitter="#" email="amogha.22311398@viit.ac.in" linkedin="https://www.linkedin.com/in/amogha-khare-3778a828a" />
        <TeamCard name="Sohan Fulzele" role="Education Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867520/IMG_20250913_221859631_2_-_TY_A_01_SOHAN_FULZELE_amsdgo.jpg"
          twitter="#" email="sohan.22310010@viit.ac.in" linkedin="https://www.linkedin.com/in/sohan-fulzele-469a7028a" />
      </div>

      {/* ══════════════════════════════════
          EVENTS & OPERATIONS
      ══════════════════════════════════ */}
      <RoleGroup icon={FaCalendarAlt} title="Events & Operations" subtitle="Events · SPO · Guest Management · Logistics · Discipline · Cultural" accent="#F97316" />
      <div className="card_Container">
        <TeamCard name="Harsh Satpute" role="Event Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867533/IMG_20250909_152648_-_Harsh_Satpute_tgvz90.jpg"
          twitter="#" email="harsh.22310428@viit.ac.in" linkedin="https://www.linkedin.com/in/harsh-satpute-4393a0290" />
        <TeamCard name="Pranjali Danke" role="Jt. Event Manager"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867543/IMG_20250908_183637_-_PRANJALI_DANKE_drc8hc.jpg"
          twitter="#" email="pranjali.22310924@viit.ac.in" linkedin="https://www.linkedin.com/in/pranjali-danke-55098431b" />
        <TeamCard name="Vivek Bhange" role="SPO Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867546/IMG_20250908_141612_-_03_Vivek_Bhange_wwjcun.jpg"
          twitter="#" email="vivek.22310090@viit.ac.in" linkedin="https://www.linkedin.com/in/viveksainathbhange" />
        <TeamCard name="Mrunal Yenkar" role="SPO Jt. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Tanushri Borkar" role="Guest Management Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867526/Screenshot_2025-09-11-15-07-29-05_99c04817c0de5652397fc8b56c3b3817_-_TANUSHRI_BORKAR_tqyqey.jpg"
          twitter="#" email="tanushri.22311045@viit.ac.in" linkedin="#" />
        <TeamCard name="Gayatri Mane" role="Guest Management Jt. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1737399647/woman-profile-icon-12_cxfywa.png"
          twitter="#" email="gayatri.22420300@viit.ac.in" linkedin="https://www.linkedin.com/in/gayatri-mane-b6049735b" />
        <TeamCard name="Amar Sutar" role="Logistics Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867544/IMG-20250908-WA0007_-_AMAR_SUTAR_zjh5di.jpg"
          twitter="#" email="amarsutar9977@gmail.com" linkedin="https://www.linkedin.com/in/amar-sutar-3a3369345" />
        <TeamCard name="Rushikesh Pawar" role="Logistics Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867532/Rp_-_Rushikesh_Pawar_xewhk1.jpg"
          twitter="#" email="rushikesh.22311356@viit.ac.in" linkedin="https://www.linkedin.com/in/rushikesh-pawar-1285b8295" />
        <TeamCard name="Raunit Rajput" role="Discipline Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Sanmay Argade" role="Discipline Jt. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Vaibhavi Swami" role="Cultural Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867524/IMG_20250909_224545_499_-_VAIBHAVI_SWAMI_gxwfpc.webp"
          twitter="#" email="vaibhavi.22420072@viit.ac.in" linkedin="#" />
        <TeamCard name="Sahil Deole" role="Cultural Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867532/Screenshot_20250827_121923_Instagram_-_SAHIL_DEOLE_dvphv5.jpg"
          twitter="#" email="sahil.22420021@viit.ac.in" linkedin="https://www.linkedin.com/in/sahil-deole-04506b325" />
        <TeamCard name="Narendra Panchal" role="Voter ID Registration Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Gayatri Mane" role="Voter ID Registration Jt. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1737399647/woman-profile-icon-12_cxfywa.png"
          twitter="#" email="gayatri.22420300@viit.ac.in" linkedin="https://www.linkedin.com/in/gayatri-mane-b6049735b" />
      </div>

      {/* ══════════════════════════════════
          DEPARTMENT HEADS
      ══════════════════════════════════ */}
      <RoleGroup icon={FaBuilding} title="Department Representatives" subtitle="Heads & Jt. Heads across all departments" accent="#0EA5E9" />
      <div className="card_Container">
        <TeamCard name="Om Girnare" role="Computer Dept. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867525/IMG_20250426_231221_-_Om_Girnare_cf1dzr.jpg"
          twitter="#" email="omgirnare9322@gmail.com" linkedin="https://www.linkedin.com/in/om-girnare-1b5205290" />
        <TeamCard name="Harshita Kadam" role="Computer Dept. Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867520/IMG_20250910_164345_-_Harshita_Kadam_h8o7ov.jpg"
          twitter="#" email="kadamharshita77@gmail.com" linkedin="https://www.linkedin.com/in/harshita-kadam-a7b9202a1" />
        <TeamCard name="Bhagyashri Narayanpure" role="E&TC Dept. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867521/IMG_0677_-_Shreya_Pawar_ugdgsp.jpg"
          twitter="#" email="bhagyashri.22420160@viit.ac.in" linkedin="https://www.linkedin.com/in/bhagyashri-narayanpure-334a50282" />
        <TeamCard name="Sumeet Zod" role="E&TC Dept. Jt. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Vishal Khandalkar" role="Mechanical Dept. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Paras Chinchwade" role="Mechanical Dept. Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867546/20250628_152432_-_Paras_Chinchwade_pzcr6r.jpg"
          twitter="#" email="paraschinchwade1008@gmail.com" linkedin="https://www.linkedin.com/in/paras-chinchwade-8ab9b42b3" />
        <TeamCard name="Shubham Mohite" role="IT Dept. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867520/profile_photo_-_23_SHUBHAM_MOHITE_fhpw3r.jpg"
          twitter="#" email="Shubhammohite710@gmail.com" linkedin="https://www.linkedin.com/in/shubham-mohite-6a34492a9" />
        <TeamCard name="Mayur Palve" role="IT Dept. Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867530/IMG-20241208-WA0010_1_-_80_Mayur_Palve_fnljmh.jpg"
          twitter="#" email="mayur.22420232@viit.ac.in" linkedin="https://www.linkedin.com/in/mayurpalve" />
        <TeamCard name="Mrunal Yenkar" role="Civil Dept. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Nikhil Kadam" role="Civil Dept. Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867531/IMG-20241226-WA0003_-_Nikhil_Kadam_cia8ft.jpg"
          twitter="#" email="nikhil.22420249@viit.ac.in" linkedin="#" />
        <TeamCard name="Amogha Khare" role="AIDS Dept. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867547/IMG_20250908_122818_-_Amogha_Khare_y7ohz5.jpg"
          twitter="#" email="amogha.22311398@viit.ac.in" linkedin="https://www.linkedin.com/in/amogha-khare-3778a828a" />
        <TeamCard name="Diksha Jaybhay" role="AIDS Dept. Jt. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1737399647/woman-profile-icon-12_cxfywa.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Vaishnavi Chede" role="AIML Dept. Head"
          imgSrc="https://res.cloudinary.com/dmokljnng/image/upload/v1737399647/woman-profile-icon-12_cxfywa.png"
          twitter="#" email="#" linkedin="#" />
        <TeamCard name="Akshata Kadu" role="CSE-IOT Dept. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867545/IMG_20250908_144555_-_AKSHATA_KADU_ichzlc.jpg"
          twitter="#" email="akshata.22420068@viit.ac.in" linkedin="https://www.linkedin.com/in/akshata-kadu-745708247" />
        <TeamCard name="Atharva Jadhav" role="CSE-IOT Dept. Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867525/1000054975_-_Atharva_Jadhav_p1osgd.jpg"
          twitter="#" email="atharvajadhav333@gmail.com" linkedin="https://www.linkedin.com/in/atharva-jadhav-244a342aa" />
        <TeamCard name="Yashashree Nimbalkar" role="CSEAI Dept. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867527/WhatsApp_Image_2025-09-11_at_12.43.16_ed738e17_-_yashashree_nimbalkar_iutodg.jpg"
          twitter="#" email="yashashree12042005@gmail.com" linkedin="https://www.linkedin.com/in/yashashree-nimbalkar-86b394281" />
        <TeamCard name="Sakshi Vyavahare" role="CSEAI Dept. Jt. Head"
          imgSrc="https://res.cloudinary.com/dapdhkhle/image/upload/v1757867527/profile-pic_-_SAKSHI_VYAVAHARE_xubh7y.png"
          twitter="#" email="sakshi.22310543@viit.ac.in" linkedin="https://www.linkedin.com/in/sakshi-vyavahare-11b561291" />
      </div>

    </div>
  );
};

export default Team_25_26;
