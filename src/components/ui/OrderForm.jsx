import React, { useState } from "react";
import "./ProductForm.css";

export const ProductForm = ({ selectedProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyFkMH78pGKDIK5_OPM9Xs3nFkkdXMjnukh42JMWbg9Y-OpXhJcIwsgWjeJavasWCe0/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = new URLSearchParams({
    product: selectedProduct,
    name: formData.name,
    phone: formData.phone,
    address: formData.address,
  });

  try {
    await fetch(scriptURL, {
      method: "POST",
      headers:{"Content-Type": 'application/x-www-form-urlencoded'},
      body: payload, // 👈 NO headers, NO json
    });

    alert("✅ Submitted successfully!");
    setFormData({ name: "", phone: "", address: "" });

  } catch (err) {
    console.error(err);
    alert("❌ Network error");
  }
};

  return (
    <div className="form-container">
      <h2>Order Form</h2>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label className="d-none">Selected Product</label>
          <input type="text" value={selectedProduct} className="d-none" disabled />
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

        {/* ✅ Address textarea */}
        <div className="form-group">
          <label>Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Your Address"
          
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


