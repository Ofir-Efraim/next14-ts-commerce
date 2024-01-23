"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import CartItem from "@components/Cart/CartItem/CartItem";
import CartDetails from "@components/Cart/CartDetails/CartDetails";
import EmptyCart from "@components/Cart/EmptyCart/EmptyCart";
export default function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className={styles.cartContainer}>
      {cart.items.length > 0 ? (
        <div className={styles.cartItemsContainer}>
          {cart.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
      <div className={styles.cartDetailsContainer}>
        <CartDetails />
      </div>
    </div>
  );
}
