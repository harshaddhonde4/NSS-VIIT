import { useRef } from 'react'; // Import useRef for creating a reference to the slider container
import { useLocation } from 'react-router-dom';

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const SingleEvent = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const name = queryParams.get('name');
    const date = queryParams.get('date');
    const imgSrc = queryParams.get('imgSrc');
    const text = queryParams.get('text');
    const venue = queryParams.get('venue');
    const setup = queryParams.get('setup');

    const img = imgSrc ? imgSrc.split(',') : [];

    // Create a reference to the slider container
    const sliderRef = useRef(null);

    // Function to scroll the slider to the left
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= sliderRef.current.clientWidth;
        }
    };

    // Function to scroll the slider to the right
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += sliderRef.current.clientWidth;
        }
    };

    return (
        <>
            <section className='singleevent'>
                <section className='singleevent-section-container container'>
                    <div className='singleevent-section container'>
                        <p className='p p-line'>Date: {date}</p><br/>
                        <h1>{name}</h1><br/>
                        <p className='p'>Location: {venue}</p><br/>

                        <div className='slider-wrapper'>
                            <div className='slider' ref={sliderRef}>
                                {img.map((imageSrc, index) => (
                                    <img
                                        key={`slide-${index + 1}`}
                                        className='singleevent-image'
                                        src={imageSrc}
                                        alt={`Event image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            {/* Buttons to scroll left and right */}
                            <div>
                            <button className='slider-button' onClick={scrollLeft}>
                                <IoIosArrowDropleftCircle className='slide-btn'/>
                            </button>
                            <button className='slider-button' onClick={scrollRight}>
                                <IoIosArrowDroprightCircle className='slide-btn'/>
                            </button>
                            </div>
                        </div>

                        <br/>
                        <br/> 
                        <br/> 

                        {setup && (
                            <>
                                <h2 className='event-about-heading'>Setups</h2><br/>
                                <div>
                                    <p className='about-event'>{setup}</p>
                                </div>
                            </>
                        )}

                        <br/>
                        <br/>

                        <h2 className='event-about-heading'>About the Event</h2><br/>
                        <div>
                            <p className='about-event'>{text}</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default SingleEvent;
