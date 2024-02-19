"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import { Close } from "@mui/icons-material";
import { CustomerContext } from "@/app/CustomerContext";
import { useRouter } from "next/navigation";
import { submitOrder } from "@/app/api";
import { AxiosError } from "axios";
export default function OrderSummary() {
  const { cart } = useContext(CartContext);
  const { orderType, customer } = useContext(CustomerContext);
  const router = useRouter();
  const handleOrder = async () => {
    const order = {
      ...customer,
      products: cart.items,
      totalPrice:
        orderType === "delivery" ? cart.totalPrice + 10 : cart.totalPrice,
    };
    try {
      const response = await submitOrder(order);
      router.push("/checkout/payment");
    } catch (error : AxiosError | any) {
      alert(error.response.data.error);
    }
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
