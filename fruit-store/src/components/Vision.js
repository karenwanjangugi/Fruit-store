import React from 'react';
import { useLanguage } from '../LanguageContext';

const Vision = () => {
  const { t } = useLanguage();
  return (
    <section id="vision" className="vision-section reveal">
      <div className="section-container">
        <h2 className="section-title">{t('vision.title')}</h2>
        <div className="vision-grid">
          <div className="vision-item">
            <div className="vision-icon">🌱</div>
            <h3>{t('vision.organic.title')}</h3>
            <p>{t('vision.organic.desc')}</p>
          </div>
          <div className="vision-item">
            <div className="vision-icon">🚜</div>
            <h3>{t('vision.farmToTable.title')}</h3>
            <p>{t('vision.farmToTable.desc')}</p>
          </div>
          <div className="vision-item">
            <div className="vision-icon">♻️</div>
            <h3>{t('vision.sustainable.title')}</h3>
            <p>{t('vision.sustainable.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
