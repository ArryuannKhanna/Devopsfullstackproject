import React from 'react';
import {Link,Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div><div className="homepage-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">E-Commerce</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/addproduct">Add Product</Link>
        </nav>
      </header>
      <Outlet/>
      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 E-Commerce. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
      </div>
</div>
  )
}

export default Layout