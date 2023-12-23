// CardSlider.js
import React, { useState } from 'react';
// import './CardSlider.css';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="card-slider">
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="arrow prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="arrow next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default CardSlider;
