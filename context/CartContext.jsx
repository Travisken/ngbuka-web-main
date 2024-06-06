"use client";

// Context.js
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a Context object
export const CartContext = createContext();

// Context Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();

  const router = useRouter;

  const addToCart = (productData) => {
   
    if (cart) {

      const existingItem = cart.find(
        (cartItem) => cartItem.id === productData.id
      );
  
      if (existingItem) {
        console.log(existingItem, "index");
        // If the item exists in the cart, increment its quantity

        const quantity = existingItem ? existingItem.quantity + 1 : 1;
        console.log(quantity, 'update cart');
        localStorage.setItem("CartData", JSON.stringify({ ...productData, quantity }));
        setCart([...cart, { ...productData, quantity }]);
      } else {
        // If the item does not exist in the cart, add it to the cart
        setCart(productData);
        localStorage.setItem("CartData", JSON.stringify(productData));
      }
    } 
    else {
      // If the item does not exist in the cart, add it to the cart
      setCart(productData);
      localStorage.setItem("CartData", JSON.stringify(productData));
    }
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("CartData")));
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Context must be used within a CartProvider");
  }

  return context;
};
