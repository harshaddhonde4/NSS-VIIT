
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    useEffect(() => {
        document.title = 'NSS | About';
    });

    return (
        <>
            <section className="about-us">
                <div className='about-hero'>
                    {/* <center><h1 className="about-hero-content main-heading" style={{ color: 'white' }}>About US</h1></center> */}
                    <div className="about-hero-content about-grid">
                        <div className="img">
                            <img src="https://res.cloudinary.com/diyw5ilre/image/upload/v1715024956/nss/Events/IMG_3285_stbwpb.jpg" className='about-img' alt="" />
                        </div>
                        <div className="about-1-text text text-1">
                            <h1 style={{ color: "green" }}>Who Are We?</h1>
                            <p>We are NSS VIIT, a student-driven community at VIIT, Pune, committed to social impact through service and engagement. With diverse backgrounds and shared values, we collaborate to address local needs and foster civic responsibility.</p>
                            <button style={{ width: "15rem", height: "3.8rem", fontSize: "1.5rem", fontWeight: "800" }} className="btn btn-success">
                                <Link to="/team" style={{ textDecoration: 'none', color: 'inherit' }}>MEET THE TEAM</Link>
                            </button>
                            {/* <button style={{ width: "15rem", height: "3.8rem", fontSize: "1.5rem", fontWeight: "800" }} className="btn btn-outline-success">MEET THE TEAM</button> */}
                        </div>
                    </div>

                    <hr className='hr-style' />

                    <div className="about-hero-content about-grid">
                        <div className="text text-1">
                            <h1 style={{ color: "green" }}>Our Mission</h1>
                            <p>The Motto of NSS Not Me But You reflects the essence of democratic living and upholds the need for selfless service. NSS helps students develop appreciation to others point of view and also show consideration to other living beings. Our ultimate goal is to inspire a lifelong commitment to civic engagement and social responsibility, enriching both our educational experiences and the wider society.</p>
                        </div>
                        <div className="img">
                            <img src="https://res.cloudinary.com/diyw5ilre/image/upload/v1715024431/nss/Events/IMG_20230815_130457_syk6ka.jpg" className='about-img' alt="" />
                        </div>
                    </div>
                </div>

                <hr className='about-hero-hr hr-style' />

                <div className="about-section-events">
                    <h2 style={{ color: "#00e6e6", fontWeight: "bolder" }}>CONNECT WITH FLAGSHIP EVENTS</h2>
                    <div className="about-grid">
                        <div className="text">
                            <h1 style={{ color: "#ffff00", fontWeight: "bold" }}>NSS Camp 2023-24</h1>
                            <p>The NSS camp at Jaamgaon marks the beginning of an immersive and purposeful engagement for the participating students. With a delightful breakfast setting the tone, followed by insightful sessions and an inspiring inauguration ceremony led by distinguished guests and village elders, the atmosphere is charged with anticipation and commitment. As the volunteers are grouped into teams named after forts, symbolizing strength and unity, this camp promises to be a transformative experience of service, learning, and personal development....</p>
                            <button style={{ width: "15rem", height: "3.8rem", fontSize: "1.5rem", fontWeight: "800" }} className="btn btn-primary btn-lg">
                                <Link to="/events" style={{ textDecoration: 'none', color: 'inherit' }}>More...</Link>
                            </button>
                        </div>
                        <div className="about-section-events-img-1 img">
                            <img src="https://res.cloudinary.com/diyw5ilre/image/upload/v1715019790/nss/Events/1_trmyhl.jpg" className='about-img' alt="" />
                        </div>
                    </div>

                    <hr style={{ color: "white" }} />

                    <div className="about-grid">
                        <div className="about-section-events-img-2 img">
                            <img src="https://res.cloudinary.com/diyw5ilre/image/upload/v1715023958/nss/Events/2_dkekcc.jpg" className='about-img' alt="" />
                        </div>
                        <div className="text">
                            <h1 style={{ color: "#ffff00", fontWeight: "bold" }}>Blood Donation 2023</h1> 
                            <p>The blood donation event held on the morning of 6th October was a significant and impactful initiative organized at the Seminar Hall. The event, inaugurated by B.K. Sulbha, a respected social worker and activist, was attended by key faculty members including Dr. Radhika Purandare, Prof. Sharada Desai, Prof. Nitin Sakhare, and Prof. Vikas Kolekar, highlighting the importance of community participation. Dr. Radhika Purandare delivered an inspiring speech, encouraging both students and teachers to contribute to this noble cause....</p>
                            <button style={{ width: "15rem", height: "3.8rem", fontSize: "1.5rem", fontWeight: "800" }} className="btn btn-primary btn-lg">
                                <Link to="/events" style={{ textDecoration: 'none', color: 'inherit' }}>More...</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='achievement-section'>
                    <div className='achievement'>
                        <h1 style={{ color: 'black' }}>achievement</h1>
                        <div>
                            <p>Jamgaon declared as Nirmal Gram in 2010</p>
                            <p>R.S. Acharya awarded with Innovative program officer, Pune University</p>
                            <p>AdarashKedari awarded as Best NSS volunteer, Pune University</p>
                            <p>Largest NSS unit among all Engineering colleges</p>
                            <p>3 Girls from Jamgaon are students of VIIT, Ms. SarikaDokh passed out in 2014 (E&TC) and working in MNC.</p>
                            <p>With the efforts of education activity conducted by NSS volunteers 10th result of Jamgaon is 100% since last 5 years.</p>
                            <p>MoU with Tata Motors (Tree plantation)and BARC for rural development</p>
                            <p>Jamgoan rated as ISO 9001:2008 village</p>
                            <p>JamgaonSarpnach Mr. Hanumant Survey received AdarshSarpanch Award</p>
                            <p>NSS volunteers get placement in MNCs with the good package – Ms AnuradhaDhumal, Mr. Pratik Vishwakarma</p>
                            <p>Some of the NSS volunteers are civil officers – Mr. Pratik Thube (IAS officer), Mr. RavirajShivchand</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
