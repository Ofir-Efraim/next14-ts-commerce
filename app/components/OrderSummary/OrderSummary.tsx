import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import { Close } from "@mui/icons-material";
import { CustomerContext } from "@/app/CustomerContext";
import { useRouter } from "next/navigation";
import { submitOrder, is_coupon_code_valid } from "@/app/api";
import { AxiosError } from "axios";
import Loader from "../Loader/Loader";

export default function OrderSummary() {
  const { cart, clearCart } = useContext(CartContext);
  const { orderType, customer, discountPercentage, setDiscountPercentage } =
    useContext(CustomerContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  useEffect(() => {
    return setDiscountPercentage(0);
  }, [setDiscountPercentage]);
  const handleOrder = async () => {
    setLoading(true);
    const totalProductPrice = cart.totalPrice;
    const totalDeliveryPrice = orderType === "delivery" ? 30 : 0;
    const discountedPrice = Math.floor(
      totalProductPrice * (1 - discountPercentage / 100)
    );

    const order = {
      ...customer,
      products: cart.items,
      totalPrice: discountedPrice + totalDeliveryPrice,
      status: "new",
      bagged: false,
      paid: false,
    };

    try {
      const response = await submitOrder(order);
      setDiscountPercentage(0);
      const order_id = response.data.order_id;
      router.push(`/checkout/payment/${order_id}`);
    } catch (error: AxiosError | any) {
      alert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleCouponCode = async () => {
    try {
      const response = await is_coupon_code_valid(couponCode);
      if (response.data.is_coupon_code_valid) {
        setDiscountPercentage(response.data.discount_percentage);
        setCouponMessage(
          `! ${response.data.discount_percentage}% קוד קופון תקין חסכת `
        );
      } else {
        setDiscountPercentage(0);
        setCouponMessage("קוד קופון לא תקין");
      }
    } catch (error: AxiosError | any) {
      alert("Error validating coupon code.");
    }
  };

  const totalProductPrice = cart.totalPrice;
  const totalDeliveryPrice = orderType === "delivery" ? 30 : 0;
  const discountedPrice = Math.floor(
    totalProductPrice * (1 - discountPercentage / 100)
  );
  const originalTotalPrice = totalProductPrice + totalDeliveryPrice;

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

      {discountPercentage !== 0 && (
        <div className={styles.discountMessage}>
          <span className={styles.discountInfo}>
            קוד קופון מומש : {discountPercentage}% הנחה על המוצרים
          </span>
        </div>
      )}
      {orderType === "delivery" && (
        <div className={styles.item}>
          <span className={styles.itemPrice}>₪ 30</span>
          <span className={styles.itemDescription}>תוספת משלוח</span>
        </div>
      )}
      <div className={styles.totalPrice}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {discountPercentage !== 0 && (
            <span
              className={styles.amount}
              style={{ textDecoration: "line-through" }}
            >
              ₪ {originalTotalPrice}
            </span>
          )}

          <span className={styles.amount}>
            ₪ {discountedPrice + totalDeliveryPrice}
          </span>
        </div>
        <span className={styles.description}>מחיר כולל לתשלום</span>
      </div>

      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="הזן קוד קופון"
        className={styles.couponInput}
      />
      <button onClick={handleCouponCode} className={styles.couponButton}>
        ממש קוד קופון
      </button>
      {couponMessage && (
        <div className={styles.couponMessage}>{couponMessage}</div>
      )}

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
