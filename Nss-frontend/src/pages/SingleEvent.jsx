import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const SingleEvent = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const name = queryParams.get('name') || 'Event Details';
    const date = queryParams.get('date');
    const imgSrc = queryParams.get('imgSrc');
    const text = queryParams.get('text');
    const venue = queryParams.get('venue');
    const setup = queryParams.get('setup');

    useEffect(() => {
        document.title = `${name} | NSS VIIT Pune`;
    }, [name]);

    let img = [];
    if (imgSrc) {
        try {
            const parsed = JSON.parse(imgSrc);
            img = Array.isArray(parsed) ? parsed : [parsed];
        } catch {
            img = imgSrc.split(',');
        }
    }

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= sliderRef.current.clientWidth;
        }
    };

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
                        {date && <p className='p p-line'>Date: {date}</p>}
                        <br/>
                        <h1>{name}</h1>
                        <br/>
                        {venue && <p className='p'>Location: {venue}</p>}
                        <br/>

                        {img.length > 0 && (
                            <div className='slider-wrapper'>
                                <div className='slider' ref={sliderRef}>
                                    {img.map((imageSrc, index) => (
                                        <img
                                            key={`slide-${index + 1}`}
                                            className='singleevent-image'
                                            src={imageSrc}
                                            alt={`${name} - preview ${index + 1}`}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <button className='slider-button' onClick={scrollLeft} aria-label="Previous slide" type="button">
                                        <IoIosArrowDropleftCircle className='slide-btn'/>
                                    </button>
                                    <button className='slider-button' onClick={scrollRight} aria-label="Next slide" type="button">
                                        <IoIosArrowDroprightCircle className='slide-btn'/>
                                    </button>
                                </div>
                            </div>
                        )}

                        <br/>
                        <br/> 
                        <br/> 

                        {setup && (
                            <>
                                <h2 className='event-about-heading'>Setups</h2>
                                <br/>
                                <div>
                                    <p className='about-event'>{setup}</p>
                                </div>
                            </>
                        )}

                        <br/>
                        <br/>

                        {text && (
                            <>
                                <h2 className='event-about-heading'>About the Event</h2>
                                <br/>
                                <div>
                                    <p className='about-event'>{text}</p>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </section>
        </>
    );
};

export default SingleEvent;
