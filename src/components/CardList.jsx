import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { ProductCard } from "./ui/card";


export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const { categoryName } = useParams();

  useEffect(() => {
    fetch("/data/cardData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      !categoryName ||
      product.category.toLowerCase() === categoryName.toLowerCase();
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-5">
         <h2 className="p-5 text-center">Product</h2>
      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 shadow-sm"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Cards */}
      {loading ? (
        <p className="text-center text-secondary">Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="container">
       
      <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-md-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        </div>
  
      ) : (
        <p className="text-center text-muted">No products found.</p>
      )}
    </div>
  );
};
