import React, { useState } from "react";
import './AddProducts.css';
import axios from "axios";

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product added:", product);
    // Here you can send the product data to your backend


    // http://localhost:61423/api/catalog/add-product/


    try {
      const response = await axios.post("http://127.0.0.1:8000/api/catalog/add-product/", product);
      if (response.status === 202) {
        // setMessage("Product added successfully!");
        console.log("Sent the message",response)
        setProduct({ name: "", description: "", price: "", category: "" }); // Clear form
      }
    } catch (error) {
      // console.log("Not the message",response)
      // setMessage("Failed to add product. Please check your input.");
      console.error("Error:", error);
    }

  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Category:
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
            <option value="home">Home</option>
          </select>
        </label>
        
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProducts