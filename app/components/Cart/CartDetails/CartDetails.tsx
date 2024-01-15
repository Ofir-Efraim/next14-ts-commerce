"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import Link from "next/link";
import { Close } from "@mui/icons-material";
export default function CartDetails() {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.title}>סיכום פריטים</h2>
      {cart.items.map((item) => (
        <div className={styles.item}>
          <span className={styles.itemPrice}>
            ₪ {item.price * item.quantity}
          </span>
          <span className={styles.itemDescription}>
            {item.name} <Close className={styles.x} /> {item.quantity}
          </span>
        </div>
      ))}
      <div className={styles.totalPrice}>
        <span className={styles.amount}>₪ {cart.totalPrice}</span>
        <span className={styles.description}>מחיר כולל לתשלום</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.action}>המשך הזמנה</button>
        <Link
          style={{ textDecoration: "none", textAlign: "center" }}
          className={styles.action}
          href={"/products"}
        >
          חזרה למוצרים
        </Link>
        <button className={styles.action} onClick={() => clearCart()}>
          נקה עגלה
        </button>
      </div>
    </div>
  );
}
