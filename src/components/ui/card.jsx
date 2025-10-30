import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // custom CSS

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card ">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">${product.price}</p>

        <Link to={`/product/${product.id}`} className="view-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};
