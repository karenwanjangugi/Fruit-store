import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="contact-section reveal">
      <div className="section-container">
        <div className="contact-box">
          <div className="contact-info">
            <h2 className="section-title">{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
            <div className="contact-details">
              <p><strong>{t('contact.email')}:</strong> hello@aura-studio.com</p>
              <p><strong>{t('contact.phone')}:</strong> +254 1234567</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder={t('contact.name')} required />
            <input type="email" placeholder={t('contact.email')} required />
            <textarea placeholder={t('contact.message')} rows="5" required></textarea>
            <button type="submit" className="cta-button">{t('contact.send')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
