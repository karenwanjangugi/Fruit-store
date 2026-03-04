import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Nature's Finest Harvest</h1>
        <p className="hero-subtitle">Fresh, organic, and locally sourced fruits delivered straight from the farm to your table.</p>
        <a href="#products" className="cta-button">Shop Fresh Now</a>
      </div>
    </section>
  );
};

export default Hero;
