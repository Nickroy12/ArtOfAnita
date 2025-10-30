import React, { useEffect, useState } from "react";
import { ProductCard } from "./ui/card";
import "bootstrap/dist/css/bootstrap.min.css";

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/cardData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="container py-4 " id="Product">
        <h2 className="text-center my-5 fw-bold">Product</h2>
      <div className="row ">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-6 col-md-4 mb-4 "
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
