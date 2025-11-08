// Slider.jsx
import React, { useState, useEffect } from "react";
import "./Slider.css";

const slides = [
  {
    image: "image/anita.jpg",
    title: "Ladies Bag",
    description: "Trendy and latest Bag",
  },
  {
        image: "image/anita2.jpg",
    title: "Jewelleries and Ornament  ",
    description: "We bring ideas to life creatively",
  },
  {
  image: "image/anita3.jpg",
    title: "Join Us Today",
    description: "Let's create something amazing together",
  },
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className={`text ${index === currentIndex ? "animate" : ""}`}>
            <h2 className="fw-bold">{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
