
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import './css/contact.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    useEffect(() => {
        document.title = 'NSS | Contact';
    });

    useEffect(() => {
        Aos.init({ duration: 2000 }, { delay: 50 }, { offset: 400 });
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        console.log("Hello")
        e.preventDefault();

        emailjs
            .sendForm('service_l7uj94e', 'template_zdq8u84', form.current, {
                publicKey: 'E6cffEqoTzMU8NBUF',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Failed to send message");
                    form.current.reset();
                },
            );
    };

    return (
        <>
            <section className="section section-contact">
                <center><h2 className=" container main-heading text-black">Contact Us</h2> </center>

                <div className='container grid-contact'>
                    <div className="section-contact-main contact-container" data-aos="fade-up">
                        <form ref={form} onSubmit={sendEmail} method="POST">
                            <div className="grid row">
                                <div className='col-sm'>
                                    <label htmlFor="username"></label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className='contact-email col-sm'>
                                    <label htmlFor="email"></label>
                                    <input
                                        type="email"
                                        placeholder="demo@gmail.com"
                                        name="user_email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject"></label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="subject"
                                    id="subject"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <label htmlFor="textarea"></label>
                                <textarea
                                    name="message"
                                    id="textarea"
                                    cols="30"
                                    rows="10"
                                    required
                                    placeholder="Message"
                                    autoComplete="off"
                                ></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Send" className="cursor-pointer btn btn-primary btn-lg contact-button" />
                            </div>
                        </form>
                    </div>
                    <div className=' contact-text' data-aos="fade-down">
                        <h1>Get in Touch</h1>
                        <hr className='hr-style' />
                        <h2>NSS VIIT Office 2/2A/9, Betal Nagar, Kondhwa, Pune, Maharashtra 411048</h2>
                        <hr />
                        <h2><strong>Email : </strong> nss@viit.ac.in</h2>
                        <h2><strong>Phone : </strong> +91 9284708471</h2>
                        <hr />
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1892.2550785516066!2d73.88255821953331!3d18.460536975726573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb005f2f3b27%3A0x2dc37556f2256b70!2sNSS%20VIIT%20Office!5e0!3m2!1sen!2sin!4v1715021959068!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <hr className='hr-style' />

                    </div>
                </div>
                <br />
                <br />
            </section>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                // transition: Bounce
                bodyClassName="toastBody"
            />
        </>
    );
};

export default Contact;
