import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="about-section reveal">
      <div className="section-container">
        <div className="about-flex">
          <div className="about-image"></div>
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>{t('about.title')}</h2>
            <p>{t('about.content')}</p>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
              <div className="stat-item">
                <span className="stat-number" style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', display: 'block' }}>50+</span>
                <span className="stat-label" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'var(--muted-text)' }}>{t('about.farms')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', display: 'block' }}>10k+</span>
                <span className="stat-label" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'var(--muted-text)' }}>{t('about.customers')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
