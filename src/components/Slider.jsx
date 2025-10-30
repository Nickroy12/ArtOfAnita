// Slider.jsx
import React, { useState, useEffect } from "react";
import "./Slider.css";

const slides = [
  {
    image: "image/anita.jpg",
    title: "Ladies Bag",
    description: "Experience the best services with us",
  },
  {
    image: "https://www.aarong.com/_next/image?url=https%3A%2F%2Fmcprod.aarong.com%2Fmedia%2Fmageplaza%2Fbannerslider%2Fbanner%2Fimage%2Fd%2F-%2Fd-2-mb-post-puja-04-10-2025-sm.png&w=1920&q=75",
    title: "Innovative Solutions",
    description: "We bring ideas to life creatively",
  },
  {
    image: "https://www.aarong.com/_next/image?url=https%3A%2F%2Fmcprod.aarong.com%2Fmedia%2Fmageplaza%2Fbannerslider%2Fbanner%2Fimage%2Fd%2F-%2Fd-3-mb-post-puja-04-10-2025-sm.png&w=1920&q=75",
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
