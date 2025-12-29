import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'; // আগের CSS ব্যবহার হবে
import { Link } from "react-router-dom";

// Example images with different sizes
const products = [
  { id: 201, image: "../image/product/product1.jpg", category: "bag", size: "big" },
  { id: 202, image: "../image/product/product2.jpg", category: "bag", size: "normal" },
  { id: 203, image: "../image/product/product3.jpg", category: "bag", size: "wide" },
  { id: 205, image: "../image/product/product5.jpg", category: "bag", size: "normal" },
  { id: 301, image: "../image/product/jp1.jpg", category: "Jewellery", size: "tall" },
  { id: 305, image: "../image/product/jp5.jpg", category: "Jewellery", size: "normal" },
  { id: 207, image: "../image/product/product7.jpg", category: "Jewellery", size: "big" },
  { id: 303, image: "../image/product/jp3.jpg", category: "Jewellery", size: "wide" },
];

export const MasonryPhotoGallery = () => {
  return (
    <div className="container my-4" id="latest">
      {/* Masonry Grid */}
      <h2 className="text-center">Our Latest Collections</h2>
      <div className="gallery-container">
        {products.map(item => (
  
                 <Link key={item.id}  to={`/product/${item.id}`}  className={`gallery-item ${item.size}`}>
            <img src={item.image} alt={`${item.category}`} />
          </Link>
     
        ))}
      </div>
    </div>
  );
};
