import React, { useState, useEffect } from 'react';
import './App.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const businessPhone = "0110944236"; 

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('aura-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('aura-cart', JSON.stringify(cart));
  }, [cart]);

  const products = [
    { id: 1, name: 'Sweet Bananas', price: 100, unit: 'kg', image: 'https://images.unsplash.com/photo-1571771894821-ad9902610947?w=800&q=80', inStock: true },
    { id: 2, name: 'Golden Mangoes', price: 100, unit: 'kg', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80', inStock: true },
    { id: 3, name: 'Creamy Avocados', price: 100, unit: 'kg', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80', inStock: true },
    { id: 4, name: 'Fresh Papayas', price: 100, unit: 'kg', image: 'https://images.unsplash.com/photo-1517282001929-f83614bc5230?w=800&q=80', inStock: true },
    { id: 5, name: 'Aromatic Pishori Rice', price: 100, unit: '2kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80', inStock: true },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    // Removed setIsCartOpen(true) so it doesn't pop open automatically
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleCheckout = () => {
    let message = "Hi Aura! I'd like to place an order:%0A%0A";
    cart.forEach(item => {
      message += `• ${item.name} (${item.quantity} x ksh.${item.price.toFixed(2)})%0A`;
    });
    message += `%0ATotal: ksh.${calculateTotal()}%0A%0AThank you!`;
    window.open(`https://wa.me/${businessPhone}?text=${message}`, '_blank');
  };

  const handleInquiry = () => {
    const message = "Hi Aura! I'd like more information about your products.";
    window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="app">
      <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} setIsCartOpen={setIsCartOpen} />
      <Hero />
      <Vision />
      <Products products={products} addToCart={addToCart} />
      <About />
      <Contact />
      <Footer />
      
      <WhatsAppFloat handleInquiry={handleInquiry} />
      
      <CartDrawer 
        isCartOpen={isCartOpen} 
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
        handleCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;
