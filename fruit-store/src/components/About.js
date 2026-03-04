import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-flex">
          <div className="about-content">
            <h2 className="section-title">Our Story</h2>
            <p>Aura Fruit Store began with a simple belief: everyone deserves access to the freshest, most nutritious produce nature has to offer.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Local Farms</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="about-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488459711616-24172e2007d4?w=800&q=80)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
