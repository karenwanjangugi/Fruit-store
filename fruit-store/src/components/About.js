import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="about-section reveal">
      <div className="section-container">
        <div className="about-flex">
          <div className="about-content">
            <h2 className="section-title">{t('about.title')}</h2>
            <p>{t('about.content')}</p>
            <div className="stats-grid">
              {/* <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{t('about.farms')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10k+</span>
                <span className="stat-label">{t('about.customers')}</span>
              </div> */}
            </div>
          </div>
          <div className="about-image" style={{ backgroundImage: 'url(/bananas.png)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
