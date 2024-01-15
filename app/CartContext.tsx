"use client";
import React, { createContext, useState } from "react";
import { cart, cartItem } from "@types";

type CartContextData = {
  cart: cart;
  addItem: (item: cartItem) => void;
  clearItem: (id: string) => void;
  clearCart: () => void;
  changeQuantity: (id: string, action: "plus" | "minus") => void;
};
export const CartContext = createContext<CartContextData>({
  cart: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  addItem: () => {},
  clearItem: () => {},
  clearCart: () => {},
  changeQuantity: () => {},
});
export type CartProviderProps = {
  children: React.ReactNode;
};
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });
  const addItem = (item: cartItem) => {
    // Check if the item already exists in the cart
    const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists, update its quantity
      const updatedItems = cart.items.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );

      setCart({
        ...cart,
        items: updatedItems,
        totalItems: cart.totalItems + item.quantity,
        totalPrice: cart.totalPrice + item.quantity * item.price,
      });
    } else {
      // If the item does not exist, add it to the cart
      setCart({
        ...cart,
        items: [...cart.items, item],
        totalItems: cart.totalItems + item.quantity,
        totalPrice: cart.totalPrice + item.quantity * item.price,
      });
    }
  };
  const clearItem = (id: string) => {
    const removedItem = cart.items.find((item) => item.id === id);

    if (!removedItem) {
      return cart;
    }

    const newTotalItems = cart.totalItems - removedItem.quantity;
    const newTotalPrice =
      cart.totalPrice - removedItem.quantity * removedItem.price;

    setCart({
      ...cart,
      items: cart.items.filter((item) => item.id !== id),
      totalItems: newTotalItems,
      totalPrice: newTotalPrice,
    });
  };
  const clearCart = () => {
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0,
    });
  };
  const changeQuantity = (id: string, action: "plus" | "minus") => {
    const updatedItems = cart.items
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "plus" ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0); //Remove the item if new quantity is 0

    const updatedTotalItems = cart.totalItems + (action === "plus" ? 1 : -1);
    const updatedTotalPrice = cart.totalPrice;

    return setCart({
      ...cart,
      items: updatedItems,
      totalItems: updatedTotalItems,
      totalPrice: updatedTotalPrice,
    });
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, clearItem, clearCart, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
