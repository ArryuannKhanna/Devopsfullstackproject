import React,{useState,useEffect} from 'react';
import './HomePage.css';  // Import the CSS file
import axios from "axios";

function HomePage() {
  const [product, setProduct] = useState([{
    name: "",
    description: "",
    price: "",
    category: ""
  }]);
  useEffect(() => {
    // Function to fetch product data
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://django-backend.default.svc.cluster.local:8000/api/your-endpoint'); // Replace with your actual API endpoint
        setProduct(response.data); // Assuming response.data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetch function on component mount
  }, []);
  return (
    <div className="homepage-container">
      {/* Header Section
      <header className="header">
        <div className="logo">E-Commerce</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
          <a href="/profile">Profile</a>
        </nav>
      </header> */}

      {/* Main Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to Our Store</h1>
          <p>Find the best products at amazing prices!</p>
          <a href="/shop" className="btn-shop-now">Shop Now</a>
        </div>
      </section>

      {/* Featured Products Section */}
      
      <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
      {product.map((item, index) => (
        <div key={index}>
          <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 1" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
          </div>
        </div>
      ))} 
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$39.99</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$49.99</p>
          </div>
        </div>
      </section>

      {/* Footer Section
      <footer className="footer">
        <p>© 2024 E-Commerce. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer> */}
    </div>
  );
}

export default HomePage;
