import React, { useState } from 'react';

const Navbar = ({ cartCount, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-left">
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="logo">AURA</div>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>

      <div className="nav-right">
        <button className="cart-toggle" onClick={() => setIsCartOpen(true)}>
          🛒 <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
