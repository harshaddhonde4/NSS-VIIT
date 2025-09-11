
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './css/home.css';

const img1 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/2_jdwzpv.png';
const img2 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/1_iuv2k5.png';
const img3 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328262/3_h4lntl.png';
const img4 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328283/4_bikubx.png';
const img5 = 'https://res.cloudinary.com/diyw5ilre/image/upload/v1715328881/Client_Testimonial_anvcjx.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

import History from './History';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Partnership from './Partnerships';

const Home = () => {

  useEffect(() => {
        document.title = 'NSS VIIT, PUNE';
  });

  useEffect(() => {
    Aos.init({ duration: 2000 }, { delay: 50 }, { offset: 400 });
  }, [])

  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <section className="hero-animation">
        <div className="bubble">

          <span style={{ '--i': 11 }}></span>
          <span style={{ '--i': 12 }}></span>
          <span style={{ '--i': 24 }}></span>
          <span style={{ '--i': 10 }}></span>
          <span style={{ '--i': 14 }}></span>
          <span style={{ '--i': 26 }}></span>
          <span style={{ '--i': 18 }}></span>
          <span style={{ '--i': 16 }}></span>
          <span style={{ '--i': 19 }}></span>
          <span style={{ '--i': 20 }}></span>
          <span style={{ '--i': 22 }}></span>
          <span style={{ '--i': 25 }}></span>
          <span style={{ '--i': 18 }}></span>
          <span style={{ '--i': 21 }}></span>
          <span style={{ '--i': 15 }}></span>
          <span style={{ '--i': 13 }}></span>
          <span style={{ '--i': 26 }}></span>
          <span style={{ '--i': 17 }}></span>
          <span style={{ '--i': 13 }}></span>
          <span style={{ '--i': 28 }}></span>

          <span style={{ '--i': 16 }}></span>
          <span style={{ '--i': 19 }}></span>
          <span style={{ '--i': 20 }}></span>
          <span style={{ '--i': 22 }}></span>
          <span style={{ '--i': 25 }}></span>
          <span style={{ '--i': 18 }}></span>
          <span style={{ '--i': 21 }}></span>
          <span style={{ '--i': 15 }}></span>
          <span style={{ '--i': 13 }}></span>
          <span style={{ '--i': 26 }}></span>
          <span style={{ '--i': 17 }}></span>
          <span style={{ '--i': 13 }}></span>
          <span style={{ '--i': 28 }}></span>


          <span style={{ '--i': 11 }}></span>
          <span style={{ '--i': 12 }}></span>
          <span style={{ '--i': 24 }}></span>
          <span style={{ '--i': 10 }}></span>
          <span style={{ '--i': 14 }}></span>
          <span style={{ '--i': 26 }}></span>
          <span style={{ '--i': 18 }}></span>
          <span style={{ '--i': 16 }}></span>
          <span style={{ '--i': 19 }}></span>

          <span style={{ '--i': 11 }}></span>
          <span style={{ '--i': 12 }}></span>
          <span style={{ '--i': 24 }}></span>
          <span style={{ '--i': 10 }}></span>
          <span style={{ '--i': 14 }}></span>
          <span style={{ '--i': 26 }}></span>
          <span style={{ '--i': 18 }}></span>
          <span style={{ '--i': 16 }}></span>
          <span style={{ '--i': 19 }}></span>



        </div>
        <section className="container hero-section">
          <div className="section-hero-image">

            {/* <img className="nss-logo" alt="NSS LOHO" src="/images/img/nss-logo.png" /> */}
            <img className="nss-logo" alt="NSS LOHO" src="https://res.cloudinary.com/diyw5ilre/image/upload/v1714587159/nss-logo_wecruv.png" />

          </div>
          {/* <h1 className='nss-heading'>National Service Scheme VIIT, Pune </h1> */}
          <h2 className='nss-heading'>National Service Scheme VIIT, Pune </h2>
        </section>
      </section>

      <section className='what'>
        {/* <hr className="hr-style" /> */}
        <center><h1 style={{ color: "black", marginTop: "2rem" }} className='main-heading' data-aos="fade-down">WHAT MAKES US NSS</h1></center>
        <div className='container'>
          <p data-aos="zoom-in">The National Service Scheme (NSS) at Vishwakarma Institute of Information Technology (VIIT), Pune, embodies a commitment to community engagement and social responsibility among its students. Through various outreach programs, volunteer activities, and initiatives, NSS VIIT fosters a culture of service and civic involvement. By participating in projects aimed at education, healthcare, environmental conservation, and community development, students not only contribute positively to society but also gain invaluable practical experiences and develop leadership skills. NSS VIIT serves as a platform for students to make a meaningful impact, embodying the ethos of service and empathy, while enriching their educational journey.</p>
          <center>
            <a href="/about">
              <button className='button' data-aos="flip-left">More</button>
            </a>
          </center>
        </div>
        {/* <hr style={{ marginTop: "-1rem" }} className="hr-style" /> */}
      </section>

      <History />

      <section className='carousel-section'>
        <div className='Carousel-div'>
          <Carousel className='Carousel'>
            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={img4}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={img5}
                alt="Third slide"
              />
            </Carousel.Item>

            {/* <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={img6}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={img7}
                alt="Third slide"
              />
            </Carousel.Item>  */}

          </Carousel>
        </div>
      </section>

      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <section className='work-counter-section'>
          <hr className="hr-style" />
          <div className='container'>
            <div className='row'>
              <div className='col-md col-sm-6'>
                <h2 className="counter-number">
                  {counterOn && <CountUp start={0} end={2000} duration={5} delay={0} />}+
                </h2>
                <p>Media Connections</p>
              </div>
              <div className='col-md col-sm-6'>
                <h2 className="counter-number">
                  {counterOn && <CountUp start={0} end={300} duration={5} delay={0} />}+
                </h2>
                <p>No. of Events</p>
              </div>
              <div className='col-md col-sm-6'>
                <h2 className="counter-number">
                  {counterOn && <CountUp start={0} end={250} duration={5} delay={0} />}+
                </h2>
                <p>Active Volunteers</p>
              </div>
              <div className='col-md col-sm-6'>
                <h2 className="counter-number">
                  {counterOn && <CountUp start={0} end={300} duration={5} delay={0} />}+
                </h2>
                <p>Partnerships</p>
              </div>
            </div>
          </div>
          <hr className="hr-style" />
        </section>
      </ScrollTrigger>

      <Partnership/>

      <section className='youtube-section'>
        <center><h1 className='main-heading' style={{ padding: "2rem", color: "black" }}>Youtube Videos</h1></center>
        <div className='container'>
          <div className='row'>
            <div className='col-sm' data-aos="zoom-in">
              <iframe src="https://www.youtube.com/embed/BpmAQ0vZqzI?si=kswNR7ylTQ4v8WMd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='col-sm' data-aos="zoom-in">
              <iframe src="https://www.youtube.com/embed/27fwd07CkZQ?si=kiYPj3WRRXm3djv4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='col-sm' data-aos="zoom-in">
              <iframe src="https://www.youtube.com/embed/m_V9093Wpow?si=gaeUnG4OFoSw3xi0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <center><a target='_blank' href='https://www.youtube.com/@nssviit8764'><button className='yt-btn button'>Visit Our Youtube</button></a></center>
      </section>
    </>
  )
}

export default Home
