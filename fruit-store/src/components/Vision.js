import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="vision-section">
      <div className="section-container">
        <h2 className="section-title">Our Pure Vision</h2>
        <div className="vision-grid">
          <div className="vision-item">
            <div className="vision-icon">🌱</div>
            <h3>100% Organic</h3>
            <p>Grown without synthetic pesticides or fertilizers for the healthiest choice.</p>
          </div>
          <div className="vision-item">
            <div className="vision-icon">🚜</div>
            <h3>Farm to Table</h3>
            <p>Direct sourcing from local farmers ensures peak freshness and fair trade.</p>
          </div>
          <div className="vision-item">
            <div className="vision-icon">♻️</div>
            <h3>Sustainable</h3>
            <p>Eco-friendly packaging and practices to protect our planet for generations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
