import React, { useState } from 'react';

const Products = ({ products, addToCart }) => {
  const [addedItems, setAddedItems] = useState({});

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
    <section id="products" className="products-section">
      <div className="section-container">
        <h2 className="section-title">Our Fresh Selection</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
              <div className="product-img" style={{ backgroundImage: `url(${product.image})` }}>
                <span className="price-tag">Ksh.{product.price.toFixed(2)} / {product.unit}</span>
                {!product.inStock && (
                  <div className="status-badge">Next Harvest: {product.availableDate}</div>
                )}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>
                  {product.inStock 
                    ? "Freshly harvested and quality checked for peak flavor." 
                    : `Currently out of stock. Next harvest expected by ${product.availableDate}.`}
                </p>
                <button 
                  className={`add-to-cart ${addedItems[product.id] ? 'added' : ''}`} 
                  onClick={() => handleAdd(product)}
                  disabled={!product.inStock || addedItems[product.id]}
                >
                  {product.inStock 
                    ? (addedItems[product.id] ? 'Added!' : 'Add to Cart') 
                    : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
