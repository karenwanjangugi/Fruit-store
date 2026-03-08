import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Navbar = ({ cartCount, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, switchLanguage, t } = useLanguage();

  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="logo">AURA</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#hero" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
        <a href="#vision" onClick={() => setIsMenuOpen(false)}>{t('nav.vision')}</a>
        <a href="#products" onClick={() => setIsMenuOpen(false)}>{t('nav.products')}</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
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
          🛒 <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
