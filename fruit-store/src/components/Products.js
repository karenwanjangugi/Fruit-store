import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Products = ({ products, addToCart }) => {
  const [addedItems, setAddedItems] = useState({});
  const { t } = useLanguage();

  const handleAdd = (product) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  return (
    <section id="products" className="products-section reveal">
      <div className="section-container">
        <h2 className="section-title">{t('products.title')}</h2>
        <p className="section-subtitle-main" style={{ color: 'var(--muted-text)', textAlign: 'center' }}>
          {t('products.subtitle')}
        </p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
              <div className="product-img" style={{ backgroundImage: `url(${product.image})` }}>
              </div>
              <div className="product-info">
                <span className="price-tag">Ksh.{product.price.toFixed(2)} / {product.unit}</span>
                <h3>{product.name}</h3>
                <p style={{ color: 'var(--muted-text)', marginBottom: '1.5rem' }}>
                  {product.inStock 
                    ? "Peak freshness guaranteed. Farm-to-table delivery within 24 hours." 
                    : `${t('products.outOfStock')}. ${t('products.nextHarvest')}: ${product.availableDate}.`}
                </p>
                <button 
                  className={`add-to-cart ${addedItems[product.id] ? 'added' : ''}`} 
                  onClick={() => handleAdd(product)}
                  disabled={!product.inStock || addedItems[product.id]}
                >
                  {product.inStock 
                    ? (addedItems[product.id] ? t('products.added') : t('products.addToCart')) 
                    : t('products.outOfStock')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="availability-notice" style={{ marginTop: '5rem', border: '1px dashed var(--primary)', padding: '2rem', borderRadius: 'var(--radius-lg)', color: 'var(--muted-text)', textAlign: 'center' }}>
          <p>
            {t('products.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
