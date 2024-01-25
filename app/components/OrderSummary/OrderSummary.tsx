"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import Link from "next/link";
import { Close } from "@mui/icons-material";
import { CustomerContext } from "@/app/CustomerContext";
export default function OrderSummary() {
  const { cart } = useContext(CartContext);
  const { orderType } = useContext(CustomerContext);
  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.title}>סיכום פריטים</h2>
      {cart.items.map((item) => (
        <div key={item.id} className={styles.item}>
          <span className={styles.itemPrice}>
            ₪ {item.price * item.quantity}
          </span>
          <span className={styles.itemDescription}>
            {item.name} <Close className={styles.x} /> {item.quantity}
          </span>
        </div>
      ))}
      {orderType === "delivery" && (
        <div className={styles.item}>
          <span className={styles.itemPrice}>₪ 10</span>
          <span className={styles.itemDescription}>תוספת משלוח</span>
        </div>
      )}
      <div className={styles.totalPrice}>
        <span className={styles.amount}>
          ₪ {orderType === "delivery" ? cart.totalPrice + 10 : cart.totalPrice}
        </span>
        <span className={styles.description}>מחיר כולל לתשלום</span>
      </div>
      <Link
        style={{ textDecoration: "none", textAlign: "center" }}
        className={styles.button}
        href={"/checkout/payment"}
      >
        בצע הזמנה
      </Link>
    </div>
  );
}
