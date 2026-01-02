import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductForm } from './ui/OrderForm';
import { ProductCard } from './ui/card';

// 🌀 Swiper Import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch('/data/cardData.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);

        if (found) {
          const related = data.filter((item) => {
            // ✅ subCategory থাকলে subCategory অনুযায়ী
            if (found.subCategory) {
              return item.subCategory === found.subCategory && item.id !== found.id;
            }

            // ✅ subCategory না থাকলে category অনুযায়ী
            return item.category === found.category && item.id !== found.id;
          });

          setRelatedProducts(related);
        }
      })
      .catch((err) => console.error('Error loading product:', err))
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
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>

          <div className="d-flex justify-content-between">
            <p className="text-muted mb-2">Price: ৳{product.price}</p>
            <p className="mb-4 bg-primary p-2 border border-white text-white rounded-circle">
              {product.stock}
            </p>
          </div>

          <p>{product.description}</p>

          <ProductForm selectedProduct={product.name} />

          <Link to="/" className="btn btn-outline-primary mt-3">
            ← Back to Products
          </Link>
        </div>
      </div>

      {/* 🌀 Related Products Slider */}
      {relatedProducts.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-4">Related Products</h4>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {relatedProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
