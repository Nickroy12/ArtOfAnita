import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'; // আগের CSS ব্যবহার হবে

// Example images with different sizes
const products = [
  { id: 101, image: "../image/product/product1.jpg", category: "bag", size: "big" },
  { id: 102, image: "../image/product/product2.jpg", category: "bag", size: "normal" },
  { id: 103, image: "../image/product/product3.jpg", category: "bag", size: "wide" },
  { id: 104, image: "../image/product/product5.jpg", category: "bag", size: "normal" },
  { id: 105, image: "../image/product/jp1.jpg", category: "Jewellery", size: "tall" },
  { id: 106, image: "../image/product/jp5.jpg", category: "Jewellery", size: "normal" },
  { id: 107, image: "../image/product/product7.jpg", category: "Jewellery", size: "big" },
  { id: 108, image: "../image/product/jp3.jpg", category: "Jewellery", size: "wide" },
];

export const MasonryPhotoGallery = () => {
  return (
    <div className="container my-4" id="latest">
      {/* Masonry Grid */}
      <h2 className="text-center">Our Latest Collections</h2>
      <div className="gallery-container">
        {products.map(item => (
          <div key={item.id} className={`gallery-item ${item.size}`}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
