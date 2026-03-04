import React from 'react';

const CartDrawer = ({ isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, calculateTotal, handleCheckout }) => {
  return (
    <>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Basket</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-msg">Your basket is empty!</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
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
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="whatsapp-checkout" onClick={handleCheckout}>
              Order via WhatsApp
            </button>
          </div>
        )}
      </div>
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}
    </>
  );
};

export default CartDrawer;
