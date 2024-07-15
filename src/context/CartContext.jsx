import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalPrice(total);
    };

    calculateTotal();
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
