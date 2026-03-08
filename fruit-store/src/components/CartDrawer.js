import React from 'react';
import { useLanguage } from '../LanguageContext';

const CartDrawer = ({ isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, calculateTotal, handleCheckout }) => {
  const { t } = useLanguage();
  return (
    <>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>{t('cart.title')}</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>×</button>
        </div>        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-msg">{t('cart.empty')}</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>Ksh.{item.price.toFixed(2)} / {item.unit}</p>
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>&times;</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="total-row">
              <span>{t('cart.total')}:</span>
              <span>Ksh.{calculateTotal()}</span>
            </div>
            <button className="whatsapp-checkout" onClick={handleCheckout}>
              {t('cart.checkout')}
            </button>
          </div>
        )}
      </div>
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}
    </>
  );
};

export default CartDrawer;
