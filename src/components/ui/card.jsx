import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { FaStar } from "react-icons/fa";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-content">
        <div className="d-flex justify-content-between">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-price"><FaStar /> {product.rating}</p>
        </div>
        <Link to={`/product/${product.id}`} className="view-btn btn btn-primary w-100 mt-2">
         {product.name}
        </Link>
      </div>
    </div>
  );
};

