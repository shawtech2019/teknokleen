import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="relative">
      {/* <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-800">&#10094;</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-800">&#10095;</button> */}
      <div className="overflow-hidden  from-black opacity-[0.9]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={index === currentImageIndex ? 'block w-full transition-opacity duration-500 ease-in-out' : 'hidden w-full'}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
