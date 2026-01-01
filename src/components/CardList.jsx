import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductCard } from './ui/card';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const { categoryName, subCategoryName } = useParams();

  // Fetch products
  useEffect(() => {
    fetch('/data/cardData.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading products:', err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    // Filter by category and subcategory
    let matchesCategory = false;
    if (subCategoryName) {
      matchesCategory =
        product.category === categoryName && product.subCategory === subCategoryName;
    } else {
      matchesCategory = product.category === categoryName;
    }

    // Filter by search term
    const matchesSearch =
      searchTerm.trim() === '' || product.name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  // ---------- UI ----------

  if (loading) {
    return <p className="text-center text-secondary mt-5">Loading products...</p>;
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
      {filteredProducts.length > 0 ? (
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
