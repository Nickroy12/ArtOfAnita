import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaShoppingBag,
  FaGem,
  FaTshirt,
  FaShoePrints,
  FaChild,
  FaGift,
} from "react-icons/fa";

export const CategoryTabs = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();

  const categories = [
    { name: "Bag", icon: <FaShoppingBag /> },
    { name: "Jewellery", icon: <FaGem /> },
    { name: "Dresses", icon: <FaTshirt /> },
    { name: "Shoes", icon: <FaShoePrints /> },
    { name: "kidsZone", icon: <FaChild /> },
    { name: "GiftItems", icon: <FaGift /> },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    <div className="container py-3">
     <h2 className="fw-bold text-center">Product At a Glance</h2>
    <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
     
      {categories.map((cat) => (
        <div key={cat.name} className="p-1">
          <button
            onClick={() => handleCategoryClick(cat.name)}
            className={`btn shadow-sm ${
              categoryName === cat.name.toLowerCase()
                ? "btn-dark"
                : "btn-outline-dark"
            }`}
            style={{
              borderRadius: "30px",
              fontWeight: "500",
              transition: "0.3s ease",
            }}
          >
            <span className="fs-5">{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};
