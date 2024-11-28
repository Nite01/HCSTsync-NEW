import React, { useState, useEffect } from 'react';

const images = [
    "/src/assets/First.jpg",
    "/src/assets/Back.jpg",
    "/src/assets/Left.jpg",
    "/src/assets/Right.jpg"
];

const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-96 flex justify-center items-center p-8">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={`absolute rounded-lg transition-opacity duration-1000 mx-auto my-2 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ width: '60%', height: 'auto' }}
                />
            ))}
        </div>
    );
};

export default Slideshow;
