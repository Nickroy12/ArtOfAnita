import React, { useState } from "react";
import "./ProductForm.css"; // 👈 Import custom CSS

export const ProductForm = ({ selectedProduct }) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxSD79SKRG_R7v59xunn6eO-O9IzAyn4OxOyxElfuzybIxt2olKPJx1Mhbd5pP4TmDj/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { product: selectedProduct, ...formData };

    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => {
        alert("✅ Submitted successfully!");
        setFormData({ name: "", phone: "" });
      })
      .catch((err) => console.error("Error!", err.message));
  };

  return (
    <div className="form-container">
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Selected Product</label>
          <input type="text" value={selectedProduct} disabled />
        </div>

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
