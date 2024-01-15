"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import CartItem from "@components/Cart/CartItem/CartItem";
import CartDetails from "@components/Cart/CartDetails/CartDetails";
export default function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItemsContainer}>
        {cart.items.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className={styles.cartDetailsContainer}>
        <CartDetails />
      </div>
    </div>
  );
}
