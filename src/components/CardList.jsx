import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { ProductCard } from "./ui/card";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const { categoryName } = useParams();

  // Fetch products
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

  // ---------- FILTER + SUBCATEGORY LOGIC ----------

  const search = searchTerm.trim().toLowerCase();

  // Step 1: category + search filter
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      !categoryName ||
      product.category.toLowerCase() === categoryName.toLowerCase();

    const matchSearch = product.name.toLowerCase().includes(search);

    return matchCategory && matchSearch;
  });

  // Step 2: products WITH subCategory → take first per subCategory
  const withSubCategory = Array.from(
    new Map(
      filteredProducts
        .filter((p) => p.subCategory) // only those who have subCategory
        .map((p) => [p.subCategory, p])
    ).values()
  );

  // Step 3: products WITHOUT subCategory → take all
  const withoutSubCategory = filteredProducts.filter(
    (p) => !p.subCategory
  );

  // Step 4: merge both
  const finalProducts = [...withSubCategory, ...withoutSubCategory];

  // ---------- UI ----------

  if (loading) {
    return (
      <p className="text-center text-secondary mt-5">
        Loading products...
      </p>
    );
  }

  return (
    <div className="p-5">
      <h2 className="my-5 text-center">Products</h2>

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
      {finalProducts.length > 0 ? (
        <div className="container">
          <div className="row">
            {finalProducts.map((product) => (
              <div key={product.id} className="col-12 col-md-4 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-muted">
          No products found.
        </p>
      )}
    </div>
  );
};
