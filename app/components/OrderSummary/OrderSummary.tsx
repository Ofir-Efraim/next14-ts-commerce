"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import { Close } from "@mui/icons-material";
import { CustomerContext } from "@/app/CustomerContext";
import { useRouter } from "next/navigation";
export default function OrderSummary() {
  const { cart } = useContext(CartContext);
  const { orderType } = useContext(CustomerContext);
  const router = useRouter();
  const handleOrder = () => {
    router.push("/checkout/payment");
  };
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
      <button
        style={{ textDecoration: "none", textAlign: "center" }}
        className={styles.button}
        onClick={handleOrder}
      >
        בצע הזמנה
      </button>
    </div>
  );
}
