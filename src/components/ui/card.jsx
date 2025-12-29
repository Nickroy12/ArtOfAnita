import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-content">
        <div className="d-flex justify-content-between">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-price">৳{product.price}</p>
        </div>
        <Link to={`/product/${product.id}`} className="view-btn btn btn-primary w-100 mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

