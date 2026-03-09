import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Navbar = ({ cartCount, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, switchLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-left">
        <Link to="/" className="logo" onClick={closeMenu}>AURA<span>.</span></Link>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" onClick={closeMenu}>{t('nav.home')}</Link>
        <a href="/#vision" onClick={closeMenu}>{t('nav.vision')}</a>
        <a href="/#products" onClick={closeMenu}>{t('nav.products')}</a>
        <Link to="/our-farm" onClick={closeMenu}>Farm</Link>
        <a href="/#contact" onClick={closeMenu}>{t('nav.contact')}</a>
      </div>

      <div className="nav-right">
        <div className="lang-switcher">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
            onClick={() => switchLanguage('en')}
          >
            EN
          </button>
          <span className="lang-divider">|</span>
          <button 
            className={`lang-btn ${language === 'sw' ? 'active' : ''}`} 
            onClick={() => switchLanguage('sw')}
          >
            SW
          </button>
        </div>
        <button className="cart-toggle" onClick={() => setIsCartOpen(true)}>
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="9" cy="21" r="1"></circle>
             <circle cx="20" cy="21" r="1"></circle>
             <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
           </svg>
           <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
