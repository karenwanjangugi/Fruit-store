import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Products = ({ products, addToCart }) => {
  const [addedItems, setAddedItems] = useState({});
  const { t } = useLanguage();

  const handleAdd = (product) => {
    addToCart(product);
    
    // Set 'added' state for this specific product
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    
    // Reset back after 1 seconds
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  return (
    <section id="products" className="products-section reveal">
      <div className="section-container">
        <h2 className="section-title">{t('products.title')}</h2>
        <p className="section-subtitle-main">
          {t('products.subtitle')}
        </p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
              <div className="product-img" style={{ backgroundImage: `url(${product.image})` }}>
                <span className="price-tag">Ksh.{product.price.toFixed(2)} / {product.unit}</span>
                {!product.inStock && (
                  <div className="status-badge">{t('products.nextHarvest')}: {product.availableDate}</div>
                )}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>
                  {product.inStock 
                    ? "Freshly harvested and quality checked for peak flavor." 
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

        <div className="availability-notice">
          <p>
            {t('products.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
