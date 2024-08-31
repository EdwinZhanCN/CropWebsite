import React, {useEffect, useState} from 'react';
import Slider from 'react-slick'
import "@/style/CarouselCSS.css";

const sampleData = [
    {
        id: 1,
        image: 'https://www.course-api.com/images/people/person-1.jpeg',
        name: 'Bertie Yates',
        title: 'Hr Manager',
        quote:
            'It was really easy to set up and get started. We have grown our online community very quickly.',
    },
    {
        id: 2,
        image: 'https://www.course-api.com/images/people/person-2.jpeg',
        name: 'Hester Hogan',
        title: 'Marketing',
        quote:
            'The customer support team has been very helpful. I am excited to see how we grow our brand.',
    }

]

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isInteracting) {
                setCurrent(current => current === sampleData.length - 1 ? 0 : current + 1);
            }
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer); // Clean up on unmount
    }, [isInteracting]);

    const handleInteraction = () => {
        setIsInteracting(true);
    };

    const handlePrev = () => {
        setCurrent(current === 0 ? sampleData.length - 1 : current - 1);
        handleInteraction();
    };

    const handleNext = () => {
        setCurrent(current === sampleData.length - 1 ? 0 : current + 1);
        handleInteraction();
    };

    return (
        <div className="carousel" onMouseEnter={handleInteraction} onMouseLeave={() => setIsInteracting(false)}>
            {sampleData.map((data, index) => (
                <img
                    key={data.id}
                    src={data.image}
                    alt={`Slide ${data.id}`}
                    className="carousel-image"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                />
            ))}
            <div className="carousel-dots">
                {sampleData.map((_, idx) => (
                    <div
                        key={idx}
                        className={`carousel-dot ${current === idx ? 'active' : ''}`}
                        onClick={() => {setCurrent(idx); handleInteraction();}}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;