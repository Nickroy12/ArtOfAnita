import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductForm } from "./ui/OrderForm";

export function ProductDetails() {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/details.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => console.error("Error loading product:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-5">
        <h5>Product not found</h5>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center py-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="col-md-6 ">
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <div className="d-flex justify-content-between">
 <p className="text-muted mb-2">Price: ${product.price}</p>
          <p className="mb-4">{product.rating}</p>
          </div>
         <p>{product.description}</p>
    <div>
  
      <ProductForm selectedProduct={product.name} />
    </div>
          <Link to="/" className="btn btn-outline-primary">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
