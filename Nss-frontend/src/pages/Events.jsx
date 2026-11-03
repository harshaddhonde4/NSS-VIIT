import EventCard from "./EventCard";
import useSEO from "../components/useSEO";

const Events = () => {
  useSEO({
    title: "Events & Initiatives | NSS VIIT Pune",
    description: "Explore community service events, blood donation drives, tree plantation campaigns, and rural outreach programs organized by NSS VIIT Pune.",
    keywords: "NSS VIIT events, Blood donation camp Pune, Tree plantation drive, Gram-Setu camp, NSS activities",
    canonical: "https://nss-viit.vercel.app/events",
  });

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <span className="label-tag label-light" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)', position: 'relative', zIndex: 1 }}>What We Do</span>
        <h1>Our Events</h1>
        <p style={{ position: 'relative', zIndex: 1 }}>Explore the initiatives and programs that define NSS VIIT Pune</p>
      </div>

      <section className="events-section">

        <div className="event-card-grid">

          {/* ════════════════════════════════════════════════════════
              BATCH 2025-26 EVENTS — Newest first
          ════════════════════════════════════════════════════════ */}

          {/* Gram-Setu — NSS Residential Camp 2026 (FLAGSHIP — FEATURED) */}
          <EventCard
            featured={true}
            name="Gram-Setu — NSS Residential Camp 2026"
            date="21–28 January 2026"
            venue="Jamgaon Village, Mulshi, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019790/nss/Events/1_trmyhl.jpg",
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/1_iuv2k5.png",
              /* → Replace above with: Nss_Website/GramSetu_2026/gallery/day1_inauguration.jpg, day4_dindi.jpg, day5_street_play.jpg, day8_closing.jpg */
            ]}
            setup="NSS VIIT Pune's flagship Residential Camp — Gram-Setu 2026 — deployed 60+ engineering volunteers for 8 transformative days at Jamgaon village, Mulshi (approximately 35 km from Pune). Volunteers were organized into teams and briefed on activities: watershed drainage management, school cleanliness, village surveys, children's education (Math & English), menstrual hygiene awareness, road safety, and financial literacy."
            text="Gram-Setu 2026 was the most impactful NSS VIIT residential camp to date. Over 8 days (21–28 January 2026), 60+ volunteers immersed themselves in rural life at Jamgaon, Mulshi — NSS VIIT's adopted village since 2008.

Highlights included: a Dindi procession through the village; the street play 'Paristhitichi Janiv' performed by volunteers; and a landmark keynote address by Padma Shri Popatrao Pawar — the architect of India's model village Hiware Bazar — who mentored volunteers on bridging administration and people to eliminate poverty.

Distinguished guests: Wing Cdr M.M. Yagnaraman (Retd.) on 'Service Before Self'; Everest Summiteer Shrihari Tapkir on resilience; Omkar Ugale (MGVS) on NGO ground realities; and Deepankar Patil on the corporate-to-service transition.

Technical Shramdaan: volunteers executed drainage management and ground leveling at Disali School. Daily activities included morning yoga, vegetable gardening, guest lectures, and competitive programmes. The camp produced measurable outcomes: village awareness, education support for local children, urban-rural bonding, and sustainability habits. Jamgaon has maintained a 100% Class 10 result for 5 consecutive years, directly attributed to NSS VIIT's doorstep teaching initiative."
          />

          {/* Rakta-Setu — Blood Donation Drive 2025 */}
          <EventCard
            name="Rakta-Setu — Blood Donation Drive 2025"
            date="7–8 October 2025"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/yekztr651berk3a7bza8.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/pn5p6k37o2jn0zhwh7l1.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/v6h1aq3yhwhdokpfztbq.jpg",
            ]}
            setup="Rakta-Setu 2025 was organized by NSS VIIT Pune in collaboration with Adhar Blood Bank on 7–8 October 2025. Committee members managed registration, discipline, food arrangements, medical check-up coordination, and publicity. A street play was performed as part of pre-event awareness. Seminars on Breast Cancer and PCOD were organized alongside the donation drive."
            text="Rakta-Setu — NSS VIIT Pune's flagship blood donation initiative — achieved its largest scale in 2025. The two-day drive on 7–8 October 2025 recorded 956+ total participants and 385 student blood donors, partnered with Adhar Blood Bank.

In addition to blood donation, 11 types of free medical check-ups were offered including ECG, Hemoglobin, and Dental check-ups. A street play was performed to spread awareness, and dedicated seminars addressed Breast Cancer awareness and PCOD among women attendees.

The event was inaugurated with the traditional Deep Prajwalan ceremony, attended by faculty and student leaders. Food supplements were provided to all donors and volunteers throughout the day. The scale and impact of Rakta-Setu 2025 marks it as one of the largest student-driven healthcare events in NSS VIIT's history."
          />

          {/* Road Safety Drive 2025 */}
          <EventCard
            name="Road Safety Awareness Drive 2025"
            date="1 October 2025"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019934/nss/Events/1_ia8hau.jpg",
            ]}
            setup="Organized in collaboration with SAARC VIIT. The event was held in memory of alumnus Sanket Wankhade, continuing NSS VIIT's annual road safety commitment. 80+ participants were mobilized with awareness materials and interactive sessions."
            text="On 1 October 2025, NSS VIIT Pune collaborated with SAARC VIIT to organize a Road Safety Awareness Drive in memory of their alumnus Sanket Wankhade. The event drew 80+ participants and included insightful discussions on road safety, sharing of practical tips, and interactive activities reinforcing responsible road behaviour.

The drive reinforced the community's collective commitment to preventing road accidents. Helmet safety and traffic rule compliance were emphasized. The event served as both a tribute to Sanket's memory and a call to action for every student on campus to take road safety seriously."
          />

          {/* Swachh-Setu — Cleanliness Drive */}
          <EventCard
            name="Swachh-Setu — Cleanliness Drive 2025"
            date="26 September 2025"
            venue="VIIT Main Gate, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019407/nss/Events/1_nfg79u.jpg",
            ]}
            setup="Organized in collaboration with Pune Municipal Corporation under the national 'Swachhata Hi Seva' campaign. Volunteers coordinated with PMC officials for logistics, waste collection, and public awareness at the VIIT main gate area."
            text="On 26 September 2025, NSS VIIT Pune conducted Swachh-Setu — a 'Swachhata Hi Seva' cleanliness drive — at the VIIT main gate in collaboration with Pune Municipal Corporation (PMC). Volunteers actively cleaned the surrounding area, collected waste, and spread awareness about civic hygiene responsibility.

This initiative demonstrated NSS VIIT's urban outreach commitment under the national cleanliness mission. The collaboration with PMC reflects the unit's ability to scale community partnerships from the village (Jamgaon) to the city."
          />

          {/* Suraksha-Setu (SPO) 2025 */}
          <EventCard
            name="Suraksha-Setu — Special Police Officer (SPO) 2025"
            date="6–7 September 2025 (Anant Chaturdashi)"
            venue="Swargate Police Station and surrounding areas, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811773/Nss_Website/Events/SPO%2024-25/zqlltxblfxa3tkxhqdpe.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811773/Nss_Website/Events/SPO%2024-25/z68svaae0lvqm2exw1im.jpg",
            ]}
            setup="On 5 September, Swargate Police provided SPO ID cards and T-shirts to all 122+ NSS volunteers. Volunteers were divided into groups and areas were allocated for Ganpati Visarjan crowd management duty from the evening of 6 September through to 7 September morning. Detailed briefing on protocol, emergency procedures, and coordination with police officers was conducted."
            text="Suraksha-Setu 2025 was the largest Special Police Officer deployment in NSS VIIT's history. On the occasion of Anant Chaturdashi (6–7 September 2025), 122+ NSS volunteers joined hands with Swargate Police Station to manage public order during the Ganpati Visarjan festival.

Volunteers served from 1:00 PM on 6 September through 6:00 AM on 7 September — a 17-hour continuous service shift. Each volunteer was assigned a specific area and worked under the direct supervision of police officers to ensure the safety and smooth flow of the procession.

The initiative was recognized and appreciated by Sakal Media, highlighting the scale and discipline of NSS VIIT's civic deployment. Suraksha-Setu has become a defining annual collaboration between NSS VIIT and law enforcement."
          />

          {/* Cervical Cancer Checkup Camp (UBA 2025) */}
          <EventCard
            name="Cervical Cancer Awareness & Check-up Camp 2025"
            date="September 2025"
            venue="Jamgaon Village, Mulshi, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715017844/nss/Events/1_awpcdt.jpg",
            ]}
            setup="Organized by NSS VIIT Pune in collaboration with Unnat Bharat Abhiyan (UBA) and Prayas NGO. Free cervical cancer check-ups were provided for women aged 30–65. Meals were arranged for all attendees. Medical team was coordinated in advance and all logistics handled by NSS committee members."
            text="In September 2025, NSS VIIT Pune organized a Cervical Cancer Awareness and Check-up Camp at Jamgaon village in collaboration with Unnat Bharat Abhiyan and Prayas NGO. Women between the ages of 30 and 65 were eligible for free check-ups. Snacks and full meals were provided to all participants, ensuring comfort and encouraging attendance.

This initiative built on NSS VIIT's longstanding healthcare outreach in Jamgaon, extending the unit's impact beyond education to critical preventive health for rural women. The camp demonstrated the power of institutional collaboration — VIIT + UBA + NGO — in delivering tangible healthcare access to underserved communities."
          />

          {/* Tree Plantation Drive 2025-26 */}
          <EventCard
            name="Tree Plantation Drive 2025–26"
            date="2025 (Date TBD)"
            venue="Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019445/nss/Events/5_ugjphv.jpg",
            ]}
            setup="Organized in collaboration with Sakal YIN. 300+ volunteers were mobilized across planting locations. Logistics, sapling procurement, and site selection were coordinated with Sakal YIN's team. Volunteers were briefed on planting techniques and post-plantation care."
            text="NSS VIIT Pune's Tree Plantation Drive 2025–26, conducted in collaboration with Sakal YIN, mobilized 300+ volunteers to plant 620+ trees — the largest single-season plantation drive in the unit's history.

The event reinforced NSS VIIT's commitment to environmental sustainability, building on the legacy of previous plantation drives with Anandvan Foundation and Tata Motors. The scale of 620+ trees planted by 300+ volunteers in a single initiative sets a new benchmark for environmental activism by an engineering college NSS unit in Pune."
          />

          {/* Women Empowerment & Hygiene Session */}
          <EventCard
            name="Women Empowerment & Menstrual Hygiene Session"
            date="2025–26"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715024431/nss/Events/IMG_20230815_130457_syk6ka.jpg",
            ]}
            setup="Session organized for female students and community members to address menstrual hygiene awareness. Sanitary pads were procured and distributed. Resource persons coordinated the awareness session."
            text="NSS VIIT Pune organized a Women Empowerment and Menstrual Hygiene Session for female students and community members. The session covered menstrual health education, hygiene practices, and breaking the social stigma around menstruation. Sanitary pads were distributed to participants at no cost.

This initiative aligns with NSS VIIT's broader health awareness mandate — extending hygiene education from urban campuses to the rural communities they serve, including in Jamgaon during Gram-Setu 2026."
          />

          {/* E-Waste Collection Drive */}
          <EventCard
            name="E-Waste Collection Drive"
            date="2025–26"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019407/nss/Events/1_nfg79u.jpg",
            ]}
            setup="Awareness campaign and collection drive for old electronics. Coordination with authorized e-waste recyclers for responsible disposal. Volunteers managed collection points and educated students on e-waste hazards."
            text="NSS VIIT Pune organized an E-Waste Collection Drive to raise awareness about the environmental hazards of improperly discarded electronics. Students and staff were encouraged to contribute old electronics — mobile phones, chargers, batteries, laptops, and accessories.

All collected e-waste was handed over to authorized recyclers for responsible disposal, ensuring zero environmental harm. The drive educated the campus community about the growing e-waste crisis and NSS VIIT's role as a responsible civic actor."
          />

          {/* Cloth Donation Drive */}
          <EventCard
            name="Cloth Donation Drive"
            date="2025–26"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019715/nss/Events/4_rcaerw.jpg",
            ]}
            setup="Organized in collaboration with Rotary Club. Collection drive for gently used clothing to support flood-affected families in Punjab and Solapur. NSS volunteers managed collection, sorting, and handover logistics."
            text="In collaboration with Rotary Club, NSS VIIT Pune organized a Cloth Donation Drive to support people affected by floods in Punjab and Solapur. NSS volunteers collected gently used clothing from students, faculty, and staff across campus.

All donated items were sorted, packed, and handed over to Rotary Club for distribution to affected families. This drive exemplified NSS VIIT's core ethos — reaching beyond local boundaries to help communities in need across India."
          />

          {/* Rakhi-with-Anath */}
          <EventCard
            name="Rakhi-with-Anath — Raksha Bandhan at Orphanage"
            date="2025–26"
            venue="Local Orphanage, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658826/Nss_Website/Events/Rakhi-With-Khaki/heplhs5glgpqpsnhf8iv.jpg",
            ]}
            setup="NSS VIIT volunteers coordinated a Raksha Bandhan celebration at a local orphanage. Rakhis, sweets, and activity kits were procured. Volunteers planned activities and performances for the children."
            text="NSS VIIT Pune celebrated Raksha Bandhan with children at a local orphanage, continuing the tradition of 'Rakhi-with-Anath.' Volunteers tied rakhis on the children, distributed sweets, and engaged them in joyful activities and performances.

The initiative embodied the spirit of family and community care that defines NSS VIIT — extending celebration beyond familiar circles to children who deserve the warmth of connection and belonging."
          />

          {/* ── VOLUNTEER SPOTLIGHT: Omkar Gengaje ── */}
          <EventCard
            name="Volunteer Spotlight: Omkar Gengaje — Stem Cell Donation"
            date="2025–26"
            venue="Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726580036/male_eioalo.png",
            ]}
            setup="Omkar Gengaje, a Computer Engineering student and NSS VIIT volunteer, voluntarily donated stem cells through a 4-hour medical procedure to save a young girl's life from cancer — entirely free of cost. This act required no event, no platform, and no recognition — only selflessness."
            text="In an extraordinary act of selfless service, Omkar Gengaje — a Computer Engineering student and NSS VIIT Pune volunteer — donated his stem cells to save a young girl battling cancer. The 4-hour medical procedure was undergone entirely voluntarily, and without any financial compensation.

Omkar's act is perhaps the most direct embodiment of NSS VIIT's motto: 'Not Me But You.' There was no stage, no award, no audience — only a quiet decision to give a part of himself so another could live.

NSS VIIT Pune acknowledges this act with the highest respect and gratitude. Omkar Gengaje represents what every volunteer aspires to be."
          />

          {/* Independence Day 79th (2025) */}
          <EventCard
            name="Independence Day 2025 — 79th Celebration"
            date="15 August 2025 | 8:00 AM"
            venue="5 Mulshi villages — Jamgaon, Male, Mulshi, Valane, Sambhave"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658454/Nss_Website/Events/Indpendence%20Day%202024-25/avj3jjpfmnbqablrnuij.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658451/Nss_Website/Events/Indpendence%20Day%202024-25/mh4bbj8imbptgrj6vj92.jpg",
            ]}
            setup="Under Unnat Bharat Abhiyan (UBA), 25+ volunteers were deployed across 5 Mulshi villages in groups of 4–6. Volunteers arranged their own transportation and arrived at assigned villages by 8:00 AM for the flag hoisting ceremony."
            text="NSS VIIT Pune celebrated the 79th Independence Day of India across five villages in Mulshi Taluka — Jamgaon, Male, Mulshi, Valane, and Sambhave — under the Unnat Bharat Abhiyan initiative. 25+ volunteers were deployed in groups of 4–6 to each village.

The celebrations began with flag hoisting, followed by cultural performances by local school children, speeches, and patriotic programmes. Volunteers engaged with Grampanchayat officials and villagers, discussing ongoing community needs and future support areas.

This initiative reflects NSS VIIT's deep-rooted relationship with rural Pune — going beyond Jamgaon to ensure that the spirit of national service reaches every adopted community on Independence Day."
          />

          {/* Rakhi-with-Khaki 2025 */}
          <EventCard
            name="Rakhi-With-Khaki 2025"
            date="2025 (Raksha Bandhan) | 11:30 AM — Swargate, 12:30 PM — Bibvewadi"
            venue="Swargate Police Station & Bibvewadi Police Station, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658826/Nss_Website/Events/Rakhi-With-Khaki/heplhs5glgpqpsnhf8iv.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658804/Nss_Website/Events/Rakhi-With-Khaki/qoaqoozal7ivwc3a7p7m.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658827/Nss_Website/Events/Rakhi-With-Khaki/fd5iroh0bsjwjn9nn8fh.jpg",
            ]}
            setup="Female volunteers visited Swargate Police Station at 11:30 AM and Bibvewadi Police Station at 12:30 PM. Rakhis were prepared and volunteers coordinated their own transport between both locations."
            text="On the occasion of Raksha Bandhan 2025, NSS VIIT Pune continued its annual 'Rakhi-With-Khaki' tradition — honouring the police officers who protect our communities. Volunteers visited Swargate Police Station (11:30 AM) and Bibvewadi Police Station (12:30 PM), tying rakhis and expressing gratitude for the officers' tireless service.

Special appreciation was extended to women police officers for their dedication. The volunteers engaged in warm interactions, reinforcing the bond between citizens and law enforcement. The event strengthened NSS VIIT's ongoing relationship with Swargate Police — a partnership that also extends to the annual SPO (Suraksha-Setu) deployment during Ganpati Visarjan."
          />

          {/* ════════════════════════════════════════════════════════
              BATCH 2024-25 EVENTS
          ════════════════════════════════════════════════════════ */}

          {/* Blood Donation 2024 */}

          <EventCard
            name="Blood Donation Drive 2024"
            date="24 September 2024 | 9:00 AM – 5:00 PM"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/yekztr651berk3a7bza8.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/pn5p6k37o2jn0zhwh7l1.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/v6h1aq3yhwhdokpfztbq.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/f7y3rybnt7ujv0qlizcz.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/k6sltqhdlvzfsm9egegd.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811380/Nss_Website/Events/Blood%20Donation%2024-25/fk28z6azjfeuginvs5fw.jpg",
            ]}
            setup="A blood donation camp was organized by NSS Committee of VIIT on 24 September 2024 in collaboration with Aadhar, Acharya, and Sasoon Blood Banks. Committee members were assigned roles across registration, discipline, food arrangements, and publicity. All preparations were completed on 23 September and the morning of 24 September."
            text="The blood donation camp commenced at 9:00 AM with an inauguration ceremony. Guests of honour Sathya Natarajan, Shirish Mohite, and Mansing Patil (Crime PI Kondhwa) performed the Deep Prajwalan to start the event auspiciously. Guests addressed the gathering of volunteers, doctors, and donors, emphasizing the importance of blood donation in saving lives.

Faculty members including Prof. Vikas Kolekar, Prof. Sharada Desai, Prof. Kirti Wanjale, and Prof. Nitin Sakhare were present. Prof. Vikas Kolekar delivered the vote of thanks. The donation drive ran throughout the day with efficient registration and donor management. Food supplements were provided to all donors, volunteers, and guests.

A free eye check-up was additionally organized by Dr. Mahesh Pawar and his team from 10:00 AM to 2:00 PM. A total of 156 units of blood were collected by 5:00 PM. The event was a great success and the efforts of the NSS Committee were widely appreciated."
          />

          {/* SPO 2024 — CORRECTED TEXT */}
          <EventCard
            name="Special Police Officer (SPO) 2024 — Suraksha-Setu"
            date="17–18 September 2024 | 1:00 PM (17 Sept) to 6:00 AM (18 Sept)"
            venue="Swargate Police Station and surrounding areas, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811773/Nss_Website/Events/SPO%2024-25/zqlltxblfxa3tkxhqdpe.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1727811773/Nss_Website/Events/SPO%2024-25/z68svaae0lvqm2exw1im.jpg",
            ]}
            setup="On 16 September, Swargate Police provided SPO ID cards and official T-shirts to NSS volunteers. All required instructions were given to volunteers including group assignments, area responsibilities, and emergency protocols for the Ganpati Visarjan crowd management duty."
            text="On the occasion of Anant Chaturdashi 2024, NSS VIIT Pune collaborated with Swargate Police Station for the annual Special Police Officer (SPO) program. Volunteers reported at 1:00 PM on 17 September and served through the night until 6:00 AM on 18 September, supporting public order management during the Ganpati Visarjan festival.

Each volunteer was assigned to specific areas and worked under direct supervision of police officers to ensure safe crowd management, traffic flow, and public safety along the procession route. Volunteers wore official SPO T-shirts and carried police-issued ID cards throughout the duty.

The initiative demonstrated NSS VIIT's commitment to civic safety, building on years of collaboration with Swargate Police. The overnight dedication of NSS volunteers was recognized and appreciated by the police department and the broader community."
          />


          {/* Debate Competition */}
          <EventCard
            name="Debate Competition"
            date="31st August 2024 | 10AM - 12:30PM"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658604/Nss_Website/Events/Debate%20Competition%202024-25/x662erbefayvkfvea4w0.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658606/Nss_Website/Events/Debate%20Competition%202024-25/xpisi4ibydoaay3wad4g.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658605/Nss_Website/Events/Debate%20Competition%202024-25/xkes1qyvcx6cyvsligiw.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658605/Nss_Website/Events/Debate%20Competition%202024-25/lhwylp5xqpknyxulbbek.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658604/Nss_Website/Events/Debate%20Competition%202024-25/ozeo3ixxcvgpdrc1d5n1.jpg",
            ]}
            setup="Instructions for the debate competition were given to all participants and judges prior to the event. The debate featured two teams, one supporting the NRC and the other opposing it, with a total of 9 participants. The judging panel included Indrajeet Deshmukh, President of CEC VIIT, and Girish Randhir, a B.Tech Mechanical student.The judges played a crucial role in guiding the debate, ensuring that it was conducted smoothly and that each participant was able to express their views effectively."
            text="The debate on the National Register of Citizens (NRC) began at 10:00 AM, offering students a platform to discuss the controversial policy. Participants were divided into teams supporting and opposing the NRC, and the event was structured into opening statements, a main debate with cross-questioning, and concluding statements. Each participant had 2 minutes to present their initial stance, setting the tone for a lively and informed discussion. During the main debate, participants engaged in a dynamic exchange of arguments, counters, and rebuttals, with judges facilitating the discussion and posing questions. Cross-questioning allowed students to challenge each other's viewpoints and defend their own positions, showcasing their preparation, critical thinking, and ability to engage in constructive discourse. The judges' interventions added depth, encouraging participants to explore different perspectives and refine their arguments. Shrinath Kadam (TY Civil) and Rohan Pawar (SY CSE (DS)) emerged as the winners of the debate competition, impressing the judges with their insightful arguments and strong presentation skills. In the concluding segment, participants delivered 3-minute summaries, synthesizing their thoughts and acknowledging opposing views. The judges provided feedback, praising the participants' analytical skills and offering suggestions for improvement in argumentation and presentation. The event successfully fostered meaningful dialogue, highlighting the importance of informed discourse on national issues and engaging students in critical examination of the NRC. Overall, the debate was successful in providing a platform for meaningful dialogue and critical examination of the NRC. The participants demonstrated a high level of engagement and enthusiasm, making the event a valuable learning experience for all involved. The judges' guidance and the active participation of all students contributed to the success of the debate, highlighting the importance of such discussions in fostering informed and analytical citizens."
          />

          {/* Voter Registration Drive */}
          <EventCard
            name="Voter Registration Drive"
            date="29th - 30th August 2024"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726659047/Nss_Website/Events/Voter%20Registration%20Driv%20e/gcw35wthxxxrbedcmz6q.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726659046/Nss_Website/Events/Voter%20Registration%20Driv%20e/ko2xawnu7gjqpyng8gtd.jpg",
            ]}
            setup="Prior to the Voter Registration Drive, detailed instructions were sent to committee
members, who were instructed to arrive on time and set up necessary arrangements. A poster and
email with event details were sent to students one day before the drive. Members were also tasked
with guiding students and maintaining discipline throughout the event."
            text="Voter Registration Drive: A Successful Initiative By NSS VIIT Pune
The NSS VIIT Pune successfully organized a Voter Registration Drive on August 29th and 30th
with the primary objective of not only encouraging eligible students to register to vote but also to
raise awareness about their civic responsibilities. The event ran from 10:00 AM to 5:00 PM on
both days, and a poster and email containing the drive's details, such as the date, time, venue, and
required documents, were sent out one day prior to the event.
Both heads of the Voter Registration Drive were present and provided excellent guidance to
the students throughout the process. They also demonstrated how students could track their
registration status online, ensuring they were informed of every step in the process. All necessary
Bansilal Ramnath Agarwal Charitable Trust's
Vishwakarma Institute of Information Technology, Pune.
(An Autonomous Institute Affiliated to Savitribai Phule Pune University
NAAC Accredited with 'A' Grade, ISO 9001: 2015 Certified Institute)
NATIONAL SERVICE SCHEME
arrangements, including laptops, posters, and other materials, were set up half an hour before the
event began. Two QR codes were generated - one for registration on the 'voters.eci.gov.in'
website and another for maintaining a record count on the college side. Additionally, an Excel
sheet was maintained to document any issues students faced during the process. The drive
received a tremendous response from students on both days.
The event served as an important step in making students more aware of their rights and duties
as citizens, emphasizing the significance of active participation in the democratic process. The
event concluded with a group photo of the committee members alongside the teachers.
In conclusion, a heartfelt thanks goes to the heads of the Voter Registration Drive for
conducting the event so smoothly, and sincere appreciation is extended to all committee members
for their efforts."
          />

          {/* Rakhi With Khaki */}
          <EventCard
            name="Rakhi-With-Khaki"
            date="19th August 2024 | 11AM"
            venue="Swargate and Bibvewadi Police Stations, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658826/Nss_Website/Events/Rakhi-With-Khaki/heplhs5glgpqpsnhf8iv.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658804/Nss_Website/Events/Rakhi-With-Khaki/qoaqoozal7ivwc3a7p7m.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658827/Nss_Website/Events/Rakhi-With-Khaki/fd5iroh0bsjwjn9nn8fh.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658811/Nss_Website/Events/Rakhi-With-Khaki/g66bzxkriw8qyvzmkwvw.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658812/Nss_Website/Events/Rakhi-With-Khaki/spts0t4atbuwutcmi5ow.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658802/Nss_Website/Events/Rakhi-With-Khaki/ammoestkpyszdxrfvwab.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658801/Nss_Website/Events/Rakhi-With-Khaki/feypea9gojdnvdci5fcx.jpg",
            ]}
            setup="The event preparations were completed a day before, with all volunteers briefed on their roles and responsibilities. A group of female volunteers participated in the event, visiting both Swargate and Bibvewadi Police Stations together to ensure smooth execution. Volunteers were instructed to arrive at Swargate Police Station by 11:30 AM and proceed to Bibvewadi Police Station afterward, coordinating their own transportation."
            text="On the auspicious occasion of Raksha Bandhan, NSS-VIIT has been upholding the tradition of celebrating 'Rakhi with Khaki' by honoring our dedicated police officers every year. This year, our volunteers continued this tradition by visiting two significant locations: Swargate Police Station at 11:30 AM and Bibvewadi Police Station at 12:30 PM.
       The event commenced with a warm and heartfelt interaction between our volunteers and the police officers, where the volunteers expressed their deep appreciation for the officers’ tireless service and unwavering commitment to the nation. Special appreciation was given to the women police officers for their exemplary work and dedication. Following this, the volunteers tied rakhis to all the police officers, symbolizing the bond of protection and respect.
      A noteworthy highlight of the event was when our volunteers extended a special request to the senior woman police officers at both the Police Stations, inviting them to conduct a seminar on women’s safety at Vishwakarma Institute of Information Technology, Pune. We are delighted to share that they responded positively to this request, indicating their willingness to contribute to this important cause.
      The police officers were highly receptive and engaged in meaningful conversations with the volunteers, further strengthening the relationship between the community and law enforcement. After the Swargate visit, the volunteers proceeded to Bibvewadi Police Station, where they were met with similar enthusiasm and warmth from the officers. The volunteers once again tied rakhis, and the police officers expressed their gratitude and support for the initiative.
      A heartfelt thank you goes out to all the volunteers who participated, ensuring the smooth execution of the event. The police officers’ cooperation and support were instrumental in making this celebration a success.
"
          />

          {/* Independence Day 2024 */}
          <EventCard
            name="Indpendence Day 2024-25"
            date="15th August 2024 | 8AM"
            venue="Various villages in Mulshi, Dist. Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658454/Nss_Website/Events/Indpendence%20Day%202024-25/avj3jjpfmnbqablrnuij.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658451/Nss_Website/Events/Indpendence%20Day%202024-25/mh4bbj8imbptgrj6vj92.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658459/Nss_Website/Events/Indpendence%20Day%202024-25/xh3rawycv6iwwlot9mbq.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658466/Nss_Website/Events/Indpendence%20Day%202024-25/y5cl2ouotyylkamqo6ur.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658470/Nss_Website/Events/Indpendence%20Day%202024-25/oa6mcibfwyg0dfrpzuwl.jpg",
            ]}
            setup="The instructions for the program were given to volunteers a day before the event. A total of five villages were selected for this initiative, with over 20+ volunteers participating. These volunteers were divided into groups of 4 to 5 members, each assigned to one of the five villages in the Mulshi Taluka region to ensure the smooth execution of the program. Volunteers were instructed to report to their designated villages by 8:00 AM, using their own modes of transport."
            text="“ना धर्मासाठी जगावे, ना धर्मासाठी मरावे, माणुसकीच धर्म आहे या देशाचा फक्त देशासाठीच जगावे” NSS-VIIT successfully celebrated the “78th Independence Day” of India with great enthusiasm and patriotism. The event was held in five selected villages: Jamgaon, Male, Mulshi, Valane and Sambhave. A dedicated group of 4 to 5 volunteers was assigned to each village to ensure the smooth execution of the program. The celebrations commenced with heartfelt greetings for the momentous occasion, followed by the flag hoisting ceremony. After the flag hoisting, various cultural activities, including speeches, dance performances, and theatrical acts, were beautifully performed by the children in their school premises. The entire Grampanchayat committee of each village, along with a large gathering of villagers, from senior citizens to young youths, attended the program, adding to the spirit of unity and pride. The cultural activities were not only a display of talent but also a reminder of the sacrifices made by our freedom fighters, inspiring everyone to contribute positively to society. After the event, our volunteers engaged in meaningful discussions with the Sarpanch of each village, addressing any issues or challenges that the villagers have been facing. This interaction was a vital part of the program, as it demonstrated the commitment of NSS-VIIT to the betterment of rural communities. The success of the event was made possible due to all the volunteers, so the huge amount of thanks to all of them who were present for the program, and contributed their best. A special thanks to the villagers for their unwavering support and cooperation, which played a crucial role in the success of the program. Together, with the spirit of unity and determination, we can overcome any challenge and create a brighter future for all."
          />

          {/* SY Orientation 24-25 */}
          <EventCard
            name="SY Orientation 24-25"
            date="4th September 2024"
            venue="VIIT, Pune"
            imgSrc={[
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658946/Nss_Website/Events/SY%20Orientation%2024-25/esnjkcztlfua2h6aieqv.jpg",
              "https://res.cloudinary.com/dmokljnng/image/upload/v1726658943/Nss_Website/Events/SY%20Orientation%2024-25/s0t44gs6mbuddib4w403.jpg",
            ]}
            setup="For the SY Orientation Program, the event setup was carefully planned to ensure smooth execution and maximum participation. Permission for the event was formally secured from the college administration. A promotional poster shared across departments and social media, was managed by department heads to ensure widespread publicity. The event setup also included audio-visual arrangements, with a projector and sound system ready for speeches and presentations."
            text="“SY Orientation - A New Beginning”
        On 4th September 2024, the NSS committee at VIIT, Pune, hosted an inspiring “NSS Induction Program” at 1:00 PM, welcoming over 200+ enthusiastic volunteers. The aim of the event was to introduce second-year students to the NSS, fostering a deep understanding of community service and instilling the values of social responsibility.
       Two esteemed guests from the Green Club graced the occasion. The program began with the National Anthem, followed by the worship of Goddess Laxmi, seeking blessings for a fruitful year ahead. A warm and heartfelt welcome was extended to the students, setting a positive tone for the orientation.
      The committee members took turns addressing the audience with motivating speeches, emphasizing NSS's unwavering commitment to society. They highlighted key achievements from the previous academic year and provided a glimpse of the exciting events planned for the upcoming year. Volunteers were also encouraged to join SPO 2024, supporting police officers during 'Anant Chaturdashi' and serving the community.
     The main focus of the orientation was the NSS 7-Days Residential Camp. Various members shared heartfelt stories of how this transformative experience had positively impacted their lives. They spoke passionately about the importance of humility, community service, and working selflessly for society. The NSS 7-Days Camp was presented as a unique opportunity for students to make their college years truly memorable.
      To keep the session lively and engaging, a series of fun and interactive games were organized. These activities added a vibrant energy to the event, making it not just informative but also enjoyable.
     A special guest, Mr. Om Dhumal, a former senior NSS committee member, shared his personal journey and experiences. His speech resonated deeply with the volunteers, inspiring them to make the most of their time with NSS.
     The event concluded with a nostalgic video showcasing highlights from the NSS Camp Diaries of the previous year (Feb 2023-24), leaving everyone motivated for the year ahead. Over 180+ positive responses were received through a feedback link provided at the end of the program.
    In conclusion, the NSS Committee is all set to embark on another incredible year, with heartfelt thanks to the dedicated team for the smooth and flawless execution of this successful orientation.
"
          />

          {/* Cervical cancer checkup camp (UBA) */}
          <EventCard
            name="Cervical cancer checkup camp (UBA)"
            date="21st November 2023 | 10AM - 4PM"
            venue="Zilla Parishad School Ground, Jamgaon Dist. Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715017844/nss/Events/1_awpcdt.jpg",
              "/images/Events/cancer-checkup-camp/2.jpg",
              "/images/Events/cancer-checkup-camp/3.jpg",
              "/images/Events/cancer-checkup-camp/4.jpg",
              "/images/Events/cancer-checkup-camp/5.jpg",
            ]}
            setup=""
            text="The NSS unit of VIIT Pune, in collaboration with Unnat Bharat Abhiyan and Prayas NGO, organized a Cervical cancer check-up camp for women on 21st Nov 2023 in Jamgaon village. Women between the ages of 30 to 65 were eligible for this camp. All check-ups were provided free of cost, and snacks and meals were also provided. We facilitated Vinod Surve, the Sarpanch of Jamgaon, Anjali Thombare (an Asha worker), and all Asha workers. A total of 8 doctors conducted the check-ups. After that we start the Checkups. The camp was done with 50+ screening. All reports were generated promptly. Rutuja Kadam (UBA coordinator, NSS VIIT Pune), Nitin Sakhare (Dean Associate), and Vikas Kolekar (NSS Coordinator & program officer, NSS VIIT Pune), was present for this camp."
          />

          {/* Campus Cleaning Activity */}
          <EventCard
            name="Campus Cleaning Activity"
            date="16th January 2024"
            venue="Viit, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019407/nss/Events/1_nfg79u.jpg",
              "/images/Events/campus-cleaning/2.jpg",
              "/images/Events/campus-cleaning/3.jpg",
              "/images/Events/campus-cleaning/4.jpg",
            ]}
            setup=""
            text="On 16th January, a comprehensive campus cleaning activity took place to ensure a hygienic and pleasant environment for all campus occupants. The cleaning initiative covered Playground,area behind cafeteria,A-Bulding B- buliding common areas outdoor spaces. The cleanup tasks primarily involved the collection and disposal of garbage from the playground and surrounding premises. This included removing litter, debris, and any other waste materials to maintain a tidy and hazard-free space. The targeted cleanup initiative on [insert date] successfully addressed the collection and disposal of garbage from the playground and surrounding premises. This effort contributes to creating a cleaner and safer environment for those utilizing these spaces."
          />

          {/* Cleanliness Drive at Katraj Lake */}
          <EventCard
            name="Cleanliness Drive at Katraj Lake"
            date="October 01, 2023 | 9 AM - 12 PM"
            venue="Katraj Lake Pune."
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019436/nss/Events/1_dyg39q.jpg",
              "/images/Events/cleanliness/2.jpg",
              "/images/Events/cleanliness/3.jpg",
              "/images/Events/cleanliness/4.jpg",
              "/images/Events/cleanliness/5.jpg",
            ]}
            setup="Team NSS VIIT had worked for Cleanliness Drive initiated by Mr. Vikrant Singh (Brand ambassador of PMC for Swachh Pune) with the help of Pune Municipal corporation, Work for Compassion, on 1st October 2023 at Katraj Lake, a popular tourist spot in Pune, Maharashtra."
            text="The cleanliness drive was organized on a 1st October Sunday morning, and a large number of NSS volunteers participated in the drive. The objective of the cleanliness drive was to create awareness about the importance of cleanliness and hygiene. The team then collected the garbage, plastic bottles, and other waste materials from the ghat. The volunteers collected garbage from various places. The area was cleaned and made free from garbage. All our NSS volunteers participated actively in this event and collected waste from the spot at Katraj Lake in Pune and made this event Successful."
          />

          {/* Mega Tree Plantation Drive 23-24 */}

          <EventCard
            name="Mega Tree Plantation Drive 23-24"
            date="August 15, 2023 | 10:30 AM"
            venue="Anandvan 4, Near Laxmi Park, Mohammed Wadi, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019445/nss/Events/5_ugjphv.jpg",
              "/images/Events/Anandwan-August-15/2.jpg",
              "/images/Events/Anandwan-August-15/3.jpg",
              "/images/Events/Anandwan-August-15/4.jpg",
              "/images/Events/Anandwan-August-15/1.jpg",
            ]}
            setup="Instructions about this event given to volunteers before event. Volunteers were instructed to reach the destination on time. Volunteers were instructed to keep their raincoats and umbrellas with them in case of rain. Breakfast was provided to everyone. Volunteers used their own transport modes to reach the destination."
            text="NSS VIIT had successfully completed a Mega Tree Plantation Drive on 15th August 2023 with the participation of 60+ NSS volunteers. This drive was started from 10:30 AM at Anandvan 4, Near Laxmi Park, Mohammed Wadi, Pune. All thanks to the NSS volunteers who contributed their cause for the environment. 130+ trees were successfully planted on the drive. Refreshment was provided by Anandvan foundation. All required tools for tree plantation was provided by the Anandvan Foundation. At the event Mr. N R Praveen, Chief Conservator of Forests, Mr. Mahadev Mohite, Deputy Conservator of Forests, Mr. Ashutosh Shendge, Assistant Conservator of Forests and Mr. Suresh Varak, Range Forest Officer, Pune showed their presence as the chief of the event. Mr Manish Ghule guided volunteers regards how to plant tree. And throughout the event Prof. Vikas Kolekar sir gave their valuable guidance and support for this event."
          />

          {/* Food Donation Drive 23-24 */}
          <EventCard
            name="Food Donation Drive 23-24"
            date="August 13, 2023 | 12:30PM"
            venue="Saint Crispin's Home krave road."
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019715/nss/Events/4_rcaerw.jpg",
              "/images/Events/food-donation/2.jpg",
              "/images/Events/food-donation/3.jpg",
              "/images/Events/food-donation/1.jpg",
              "/images/Events/food-donation/5.jpg",
            ]}
            setup="Instructions about this event given to volunteers before event. Volunteers were instructed to reach the destination on time. Volunteers were instructed to set up all required things. Volunteers were instructed to guide other students to stay in discipline and make proper arrangements."
            text="The National Service Scheme unit of Vishwakarma Institute of Information Technology (VIIT) Pune, in collaboration with team AISSEC, undertook a commendable initiative to contribute towards the community's well-being. This initiative involved food donation drives at St. Crispin's Home and Poona School and Home for the Blind. NSS VIIT pune successfully completed this event along with 30+ volunteers. Such initiatives not only provide essential resources like food but also spread awareness and kindness throughout society. This endeavor not only fulfilled the primary goal of providing essential resources but also succeeded in spreading awareness about social responsibility and compassion."
          />

          {/* Voter Registration Drive 23-24 */}
          <EventCard
            name="Voter Registration Drive 23-24"
            date="14th, 15th, 16th September 2023"
            venue="In front of B - Building (10PM to 4PM)"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019677/nss/Events/1_vuzqir.jpg",
              "/images/Events/votercard/2.jpg",
              "/images/Events/votercard/3.jpg",
              "/images/Events/votercard/4.jpg",
              "/images/Events/votercard/5.jpg",
            ]}
            setup="Prior to the Voter Registration Drive, detailed instructions were communicated to all participating members. They were instructed to arrive at the venue on time and to set up all the necessary arrangements for the event. Additionally, members were tasked with guiding other students to maintain discipline throughout the drive."
            text="NSS VIIT and ELC VIIT, Pune at VIIT, Pune organized a Voter Registration Drive from 14th to 16th September 2023. The primary objective of this drive was to promote civic engagement and encourage eligible students to register to vote. On this occasion we conduct E-poster Design, Memes and Debate competition. Total 170 voter registration was done. In conclusion, the NSS Voter Registration Drive at VIIT, Pune, was a resounding success. It not only facilitated the registration of eligible voters but also promoted civic awareness and engagement among students. The creative competitions added an element of fun and innovation to the drive, making it both educational and enjoyable."
          />

          {/* Tree Plantation Drive 23-24 */}
          <EventCard
            name="Tree Plantation Drive 23-24"
            date="August 6, 2023 | 8AM-10AM"
            venue="Anandvan-1, NIBM Road Kondhwa, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019802/nss/Events/1_b4s3gs.jpg",
              "/images/Events/Anandwan-1/2.jpg",
              "/images/Events/Anandwan-1/3.jpg",
              "/images/Events/Anandwan-1/4.jpg",
            ]}
            setup="Instructions about this event given to volunteers before event. Volunteers were instructed to reach the destination on time. Volunteers were instructed to keep their water bottles, snacks, raincoats and umbrellas with them. Volunteers used their own transport modes to reach the destination."
            text="NSS-VIIT had successfully completed a Tree Plantation Drive on 6th August 2023 collaboration with Tech Mahindra with the participation of 30+ NSS volunteers. This drive was started from 8:00 AM at Anandvan-1, NIBM Road Kondhwa, Pune. All thanks to the NSS volunteers who contributed their cause for the environment. 30+ trees were successfully planted on the drive. All required tools for tree plantation were provided by the Anandvan Foundation. At the event Mr. Praveen Kumar Anand showed their presence as the chief of the event. Mr Manish Ghule guided volunteers regards how to plant tree, and throughout the event gave their valuable guidance and support for this event."
          />

          {/* Blood Donation 2023 */}
          <EventCard
            name="Blood Donation 2023"
            date="October 06, 2023 | 8AM-4PM"
            venue="Seminar Hall, E-Building, VIIT, Pune."
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019826/nss/Events/1_uu7gdx.jpg",
              "/images/Events/blood-donation/2.jpg",
              "/images/Events/blood-donation/3.jpg",
              "/images/Events/blood-donation/4.jpg",
            ]}
            setup="A blood donation camp was organized by NSS committee of Vishwakarma Institute of Information Technology in association with PCMC Blood Bank, Acharyarushi Blood Bank on 6 th October, 2023. The event was done by third year NSS Committee members. A meeting was taken on 4 th October, 2023, the meeting was presided by the President, Vice-Presidents and Ladies Representative and the work was distributed among the Committee members. They were divided in different domains like food, registration, discipline, publicity etc. while some domain members like documentation, food members remained in it. All the arrangement regarding Blood Donation camp was done on 5th October by the committee members."
            text="On the morning of 6 th October, a blood donation event was organized at Seminar Hall with the aim of collecting blood to save lives. The event was inaugurated by “B.K. Sulbha” who was the In charge of “Vishwa Parivartan Bhawan”, and a well-known social worker and activist in the local community. Dr. Radhika Purandare (Dean Student Affair), Prof. Sharada Desai (NSS Program Officer), Prof. Nitin Sakhare (Dean Associate), Prof. Vikas Kolekar (NSS Coordinator and Program Officer) shows their presence at event inauguration. Dr. Radhika Purandare mam gave an inspiring speech, urging the participants to come forward and donate blood generously. He emphasized the importance of donating blood and saving lives. Total 450 participation (including students and teachers) was done for blood donation and out which 347 donated blood."
          />

          {/* NSS CAMP Report 2023-24(January) */}
          <EventCard
            name="NSS CAMP Report 2023-24(January)"
            date="23th-30th January 2023"
            venue="Jaamgaon ,Tal- Mulshi ,Dist - Pune (Pin -414103 )"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019790/nss/Events/1_trmyhl.jpg",
              "/images/Events/camp-24/3.jpg",
              "/images/Events/camp-24/4.jpg",
              "/images/Events/camp-24/5.jpg",
            ]}
            setup='The eagerly anticipated moment of the year has finally come. More than a hundred students from the second and third years of Vishwakarma Institute of Information Technology have gathered in the cherished village of Jaamgaon, situated in Tal-Mulshi, for the annual 8-day residential camp, an integral part of every NSS volunteer`s life. Organized by third-year engineering students for their second-year counterparts, this camp focuses on the theme of "Sustainable Rural Development." It directs the dedication of volunteers towards making the village self-reliant and self-sufficient through various initiatives.'
            text="Commencing with the dawn, the initial day unfolded as the second year and third-year participants reached Jaamgaon, greeted by a delectable breakfast featuring Poha. After settling in their respective accommodations, they made themselves comfortable with the village atmosphere while resting for a while. Subsequently, post-lunch, the faculty coordinator at the camp provided a comprehensive overview of the objectives to be achieved during their stay, along with diverse options to pursue those goals. The afternoon kicked off with the inauguration of the NSS 2024 camp. The chief Guests for this event were Mr. Ketan Deshpande, Sarpanch-Vinod Surve, Police Patil-Vilas Surve. Shri Sopanrao Dhok Former Sarpanch of Jaamgaon and other elderly of the village. He guided the volunteers as to how they could help the village youth to invest their time becoming more aware of the various educational activities specially designed for their benefit. And educated the students as to how this is a golden opportunity for them to develop their personality and find their hidden talents and showcase to its fullest. Sir also described the volunteers as self-pioneers. Prof. Nitin Sakhare shared a range of memories from his experience while being a volunteer, a leader and then a guide. He inspired us to strive hard to improve ourselves over the 8 days and observe the transformation. It was indeed a food for thought. He later educated the students about the various activities to be held in the camp like Shramdaan, Educational Activity for village students. The ceremony concluded with the students singing the NSS song. The volunteers were then divided into 9 different groups named after the Forts in Maharashtra."
          />

          {/* Education Activity In Jamgaon */}
          <EventCard
            name="Education Activity In Jamgaon"
            date="March 03, 2024 | 9 AM - 4PM"
            venue="Jamgaon"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019894/nss/Events/1_fo26j7.jpg",
              "/images/Events/education/2.jpeg",
              "/images/Events/education/3.jpeg",
              "/images/Events/education/4.jpeg",
            ]}
            setup=""
            text="On 3 March, a group of volunteers from NSS Viit participated in a Education Activity in Jamgaon. The event aimed to engage with the local community, promote education, and provide assistance in various activities. Volunteers gathered at the main gate at 6:30 am and departed for the village. By 9:00 am, they had reached the village and met with Sopan Kaka, a local community leader. From 9:00 to 10:00 am, volunteers went around the village, encouraging students to join activities. Following this, volunteer engaged in cleaning the mandir parisar, promoting cleanliness . Educational activities were conducted until 12:00 pm with the students till classes 7 th. After a brief break until 1:30 pm, volunteers conducted fun activities, including drawing and games, fostering camaraderie and joy among participants. From 3:00 to 4:00 pm, volunteer visited the goshala, after visiting goshala it was noticed that there was motor installed and goshala was well maintained. The day concluded with a final discussion with Sopan Kaka, reflecting on the day's activities and future collaborations.Volunteer returned to Viit college at 7pm The Educational Activity in Jamgaon was a meaningful and impactful event, highlighting the power of collaboration in creating positive change. We extend our gratitude to all volunteers and member who involved in this activity. Moving forward, we remain committed to supporting the village's growth and prosperity through continued engagement and service."
          />

          {/* name='"माझी माती, माझा देश" 23-24 */}
          <EventCard
            name='"माझी माती, माझा देश" 23-24'
            date="11 August 2023 | 12:15 pm"
            venue="In front of E-Building VIIT College Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019902/nss/Events/1_yjbqpy.jpg",
              "/images/Events/meri-mati/2.jpg",
              "/images/Events/meri-mati/3.jpg",
              "/images/Events/meri-mati/4.jpg",
              "/images/Events/meri-mati/5.jpg",
            ]}
            setup="Instructions about this event given to volunteers before event. Volunteers were instructed to reach the destination on time. Volunteers were instructed to set up all required things. Volunteers were instructed to guide other students to stay in discipline and make proper arrangements."
            text='The nationwide "Meri Maati Mera Desh" Campaign was launched as a tribute to the valiant individuals who sacrificed their lives for the nation. This event involves paying tribute to the "Veers" who protect our nation. On 11th August 2023 NSS-VIIT had successfully organized a “Meri Maati Mera Desh” campaign to cultivate patriotism and community engagement among students. 60+ volunteers and college students were present for this event. This drive was started from 12:15 PM in front of E-Building VIIT College Pune. Throughout the event Prof. Nitin Sakhare sir, Prof. Vikas Kolekar sir, and Prof. Sharada Desai maam showed their presence and support for this event.'
          />

          {/* Road Safety Drive */}
          <EventCard
            name="Road Safety Drive"
            date="4th oct 2023 | 10.30 AM"
            venue="Seminar Hall (E building)"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019934/nss/Events/1_ia8hau.jpg",
              "/images/Events/Road-Safety/2.jpeg",
              "/images/Events/Road-Safety/3.jpeg",
              "/images/Events/Road-Safety/4.jpeg",
              "/images/Events/Road-Safety/5.jpeg",
            ]}
            setup=""
            text="SAARC VIIT and NSS VIIT organized a poignant Road Safety Awareness Event in memory of their esteemed alumnus, Sanket Wankhade, on October 4th at the Seminar Hall in VIIT. The event aimed to honour Sanket's life while promoting road safety awareness among attendees. The event included various activities such as insightful discussions, sharing practical road safety tips, and recounting stories emphasizing responsible road behaviour. Attendees actively engaged in discussions, recognizing the collective responsibility in making roads safer for all, regardless of whether they were drivers, passengers, cyclists, or pedestrians. A touching and impactful gesture was witnessed during the event, as the family of the late Sanket Wankhade generously donated helmets to needy students. This compassionate act aimed to provide essential safety equipment to students, emphasizing the importance of protective measures while traveling on roads. The organizers reiterated the critical need for heightened awareness and collective efforts to prevent road accidents similar to the one that tragically claimed Sanket's life. The event served as both a tribute to Sanket's memory and a commitment by the community to actively contribute to creating safer road environments. Attendees' engagement and support were pivotal in reinforcing the message and efforts toward achieving safer roads. The organizers stressed the significance of collective action, highlighting that every individual's presence and dedication could significantly impact road safety measures."
          />

          {/* Eco Friendly Rakhi Making Workshop 23-24 */}
          <EventCard
            name="Eco Friendly Rakhi Making Workshop 23-24"
            date="20 August 2023 | 10 AM to 12 PM"
            venue="Bhilarewadi, Katraj, Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715019994/nss/Events/2_netnbx.jpg",
              "/images/Events/Rakhi/1.jpg",
              "/images/Events/Rakhi/3.jpg",
              "/images/Events/Rakhi/4.jpg",
              "/images/Events/Rakhi/5.jpg",
            ]}
            setup="Instructions about this event given to volunteers before event. Volunteers were instructed to reach the destination on time. Volunteers were instructed to keep their water bottles, snacks, raincoats and umbrellas with them. Volunteers used their own transport modes to reach the destination."
            text="NSS VIIT had successfully completed a workshop on making Eco Friendly Rakhi. 40 volunteers were present their for the workshop. This drive was started from 10:00 AM at Bhilarewadi, katraj, Pune. All thanks to the NSS volunteers who contributed their cause for the environment. It was organized at Jan Seva Orphanage. This event aimed at to bring the joy and happiness to the children residing at the orphanage. In this volunteer also wrote letters to soldiers to express gratitude and support to the soldiers serving the nation."
          />

          {/* Single Use Plastic Awareness */}
          <EventCard
            name="Single Use Plastic Awareness"
            date="19 August 2023 | 12:15 pm"
            venue="In front of E-Building VIIT College Pune"
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715020024/nss/Events/1_gli5p4.jpg",
              "/images/Events/Plastic/2.jpg",
              "/images/Events/Plastic/3.jpg",
            ]}
            setup="Instructions about this event given to volunteers before event. Volunteers were instructed to reach the destination on time. Volunteers were instructed to set up all required things. Volunteers were instructed to guide other students to stay in discipline and make proper arrangements."
            text="The “Plastic waste management” was a ground breaking initiative aimed at raising awareness about the detrimental impact of plastic on the environment and promoting sustainable alternatives. On 19th August 2023 NSS-VIIT had successfully organized a “Plastic Waste Management” for awareness about harmful impact of plastic on our environment. 30+ volunteers and college students were present for this event. This drive was started from 12:15 PM in front of E-Building VIIT College Pune. Throughout the event Prof. Nitin Sakhare sir, Prof. Vikas Kolekar sir, and Prof. Sharada Desai maam showed their presence and support for this event."
          />

          {/* Special Police Officer (SPO) 2023 */}
          <EventCard
            name="Special Police Officer (SPO) 2023"
            date="28th and 29th Sep 2023"
            venue="Swargate Police premises and the surrounding areas."
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715020006/nss/Events/1_iocjrv.jpg",
              "/images/Events/SPO/2.jpg",
              "/images/Events/SPO/3.jpg",
              "/images/Events/SPO/4.jpg",
              "/images/Events/SPO/5.jpg",
            ]}
            setup="Police department provides ID Card of SPO to NSS Volunteer on 27th Sept. All required instructions was given to Volunteers on that day. Police department also provides T-Shirts for identity. Volunteers were divided into groups and areas will be allocated to all groups for their duty for “Ganpati Visarjan” on 28th Sept 2023."
            text="On the auspicious occasion of Anant Chaturdashi, dated September 28th and 29th, a collaborative initiative between NSS VIIT and Swargate Police unfolded, engaging over 130 volunteers in a collective effort to support law enforcement and maintain public order, including the management of Ganpati Visarjan. The volunteering event cantered around fostering a symbiotic relationship between citizens and law enforcement, encouraging active participation and support for the police force in their endeavours to uphold safety and security within the community, particularly during the significant Ganpati Visarjan celebrations."
          />

          {/* NSS INDUCTION 23-24 */}
          <EventCard
            name="NSS INDUCTION 23-24"
            date="06 September 2023 | 02:00 pm"
            venue="Seminal Hall (E Building) VIIT Pune."
            imgSrc={[
              "https://res.cloudinary.com/diyw5ilre/image/upload/v1715020069/nss/Events/1_fyv2ek.jpg",
              "/images/Events/INDUCTION/2.jpg",
              "/images/Events/INDUCTION/3.jpg",
              "/images/Events/INDUCTION/4.jpg",
              "/images/Events/INDUCTION/5.jpg",
            ]}
            setup="Instructions about this event given to members before event. Members were instructed to reach the destination on time. Members were instructed to set up all required things. Members were instructed to guide other students to stay in discipline and make proper arrangements."
            text="On September 6th, 2023, the NSS committee at VIIT, Pune held an NSS Induction Program at 2:00 PM. 200+ volunteers were present for this orientation. The event aimed to introduce new students to the NSS and promote community service values. The program began with a welcome address, followed by ice-breaking activities to help students connect. An interactive session featured our VP's sharing their NSS experiences. Committee members outlined upcoming activities and answered student questions during a Q&A session. The event ended with a pledge to serve society. Students provided feedback, expressing interest in more project details, skill-building sessions, and forming specialized committees. In conclusion, the NSS Induction successfully acquainted new students with NSS values and activities while fostering a sense of community. Further improvements and tailor-made activities were suggested for the future."
          />
        </div>
      </section>
    </>
  );
};

export default Events;

//   < EventCard
// name = ""
// date = ""
// venue = ""
// imgSrc = ""
// setup = ""
// text = ""
//   />
