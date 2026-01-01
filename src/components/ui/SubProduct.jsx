import React from 'react';
import { Link } from 'react-router-dom';

export const SubProduct = ({ product }) => {
  return (
    <Link
      to={`/category/${product.category}/${product.subCategory}`}
      className="view-btn btn btn-primary w-100 mt-2"
    >
      {product.subCategory}
    </Link>
  );
};
