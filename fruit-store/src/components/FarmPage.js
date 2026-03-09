import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const FarmPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const farmPhotos = [
    { url: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1200', title: 'Morning Harvest' },
    { url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200', title: 'Rich Soil' },
    { url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200', title: 'Organic Protection' },
    { url: 'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1200', title: 'Quality Sorting' },
    { url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200', title: 'Our Orchard' },
    { url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1200', title: 'Sustainable Irrigation' },
  ];

  return (
    <div className="farm-page">
      <section className="farm-hero">
        <div className="farm-hero-content">
          <Link to="/" className="back-link">← {t('farm.backHome')}</Link>
          <h1 className="hero-title reveal">{t('farm.title')}</h1>
          <p className="hero-subtitle reveal">{t('farm.subtitle')}</p>
        </div>
      </section>

      <section className="farm-stats-section">
        <div className="section-container">
          <div className="farm-stats-grid reveal">
            <div className="stat-card">
              <h3>150+</h3>
              <p>{t('farm.stats.acres')}</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>{t('farm.stats.organic')}</p>
            </div>
            <div className="stat-card">
              <h3>Active</h3>
              <p>{t('farm.stats.water')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="farm-gallery-section">
        <div className="section-container">
          <h2 className="section-title reveal">{t('farm.gallery')}</h2>
          <div className="farm-masonry reveal">
            {farmPhotos.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img src={photo.url} alt={photo.title} />
                <div className="gallery-overlay">
                  <span>{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title reveal">{t('farm.testimonials')}</h2>
          <div className="testimonials-grid reveal">
            {t('testimonials').map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="farm-cta reveal">
        <div className="section-container">
          <h2>Ready to taste the difference?</h2>
          <Link to="/" className="cta-button">{t('farm.backHome')}</Link>
        </div>
      </section>
    </div>
  );
};

export default FarmPage;
