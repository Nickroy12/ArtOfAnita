import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SubProduct } from "./ui/SubProduct";

export const SubCategory = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const { cateName } = useParams();

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

  const search = searchTerm.trim().toLowerCase();

  // Step 1: category + search filter
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      !cateName ||
      product.category?.toLowerCase() === cateName.toLowerCase();

    const matchSearch = product.name
      ?.toLowerCase()
      .includes(search);

    return matchCategory && matchSearch;
  });

  // Step 2: WITH subCategory → first product per subCategory
  const withSubCategory = Array.from(
    new Map(
      filteredProducts
        .filter((p) => p.subCategory)
        .map((p) => [p.subCategory, p])
    ).values()
  );

  // Step 3: WITHOUT subCategory → show all
  const withoutSubCategory = filteredProducts.filter(
    (p) => !p.subCategory
  );

  // Step 4: merge
  const finalProducts = [...withSubCategory, ...withoutSubCategory];

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

      {/* Search */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 shadow-sm"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {finalProducts.length > 0 ? (
        <div className="container">
          <div className="row">
            {finalProducts.map((product) => (
              <div
                key={product.id}
                className="col-12 col-md-2 mb-4"
              >
                <SubProduct product={product} />
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
