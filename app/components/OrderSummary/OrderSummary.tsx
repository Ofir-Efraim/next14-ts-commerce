import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import { Close } from "@mui/icons-material";
import { CustomerContext } from "@/app/CustomerContext";
import { useRouter } from "next/navigation";
import { submitOrder } from "@/app/api";
import { AxiosError } from "axios";
import Loader from "../Loader/Loader";

export default function OrderSummary() {
  const { cart } = useContext(CartContext);
  const { orderType, customer } = useContext(CustomerContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State to manage loading state

  const handleOrder = async () => {
    setLoading(true); // Set loading to true when submitting order
    const order = {
      ...customer,
      products: cart.items,
      totalPrice:
        orderType === "delivery" ? cart.totalPrice + 10 : cart.totalPrice,
    };
    try {
      const response = await submitOrder(order);
      router.push("/checkout/payment");
    } catch (error: AxiosError | any) {
      alert(error.response.data.error);
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
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
      {loading ? (
        <Loader />
      ) : (
        <button
          style={{ textDecoration: "none", textAlign: "center" }}
          className={styles.button}
          onClick={handleOrder}
        >
          בצע הזמנה
        </button>
      )}
    </div>
  );
}
