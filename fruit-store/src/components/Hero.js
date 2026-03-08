import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content reveal">
        <span className="hero-badge">{'Fresh & Organic'}</span>
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-btns">
          <a href="#products" className="cta-button">{t('hero.cta')}</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
