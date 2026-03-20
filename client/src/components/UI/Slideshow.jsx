import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../../assets/15.jpg';
import image2 from '../../assets/02.jpg';
import image3 from '../../assets/03.jpg';
import image4 from '../../assets/04.jpg';

const Slideshow = () => {
    const slides = [
        {
            id: 1,
            image: image2,
            title: "Mechanical Engineering",
            subtitle: "Mechanical Engineering services for robust product design"
        },
        {
            id: 2,
            image: image1,
            title: "FEA Services",
            subtitle: "FEA services for robust product design"
        },
        {
            id: 3,
            image: image3,
            title: "Reverse Engineering",
            subtitle: "Reverse Engineering services for robust product design"
        },
        {
            id: 4,
            image: image4,
            title: "Value Engineering",
            subtitle: "Value Engineering services for robust product design"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="slide-overlay">
                        <div className="slide-content container">
                            <h2 className="slide-title">{slide.title}</h2>
                            <p className="slide-subtitle">{slide.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button className="slide-nav prev" onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeft size={32} />
            </button>
            <button className="slide-nav next" onClick={nextSlide} aria-label="Next Slide">
                <ChevronRight size={32} />
            </button>


        </div>
    );
};

export default Slideshow;
