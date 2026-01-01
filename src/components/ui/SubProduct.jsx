import React from "react";
import { Link } from "react-router-dom";

export const SubProduct = ({ product }) => {
  return (
    <Link
      to={`/Category/${ product.category}`}
      className="view-btn btn btn-primary w-100 mt-2"
    >
      {product.subCategory}
    </Link>
  );
};
