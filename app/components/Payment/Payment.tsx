import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "@/app/CartContext";
import { CustomerContext } from "@/app/CustomerContext";
import bit from "@assets/bit_logo.jpeg";
import paybox from "@assets/paybox_logo.png";
import Image from "next/image";
export default function Payment() {
  const { cart } = useContext(CartContext);
  const { customer, orderType } = useContext(CustomerContext);
  return (
    <div className={styles.paymentContainer}>
      <h2 className={styles.message}>תודה רבה על שבחרת בצחם</h2>
      <h3 className={styles.location}>
        {orderType === "delivery" ? (
          <>הזמנתך תגיע לכתובת {customer.address}</>
        ) : (
          <>הזמנתך תחכה לך ב{customer.pickupSpot}</>
        )}
      </h3>
      <p className={styles.price}>
        הזמנתך היא על סך ₪
        {orderType === "delivery" ? cart.totalPrice + 10 : cart.totalPrice}
      </p>
      <div className={styles.payment}>
        <h3 className={styles.optionsMessage}>לתשלום בביט או בפייבוקס</h3>
        <div className={styles.paymentOptions}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={`${styles.paymentButton} ${styles.bit}`}
            href="https://www.bitpay.co.il/app/me/69025DC7-9D1E-44C4-4CD0-5FC07D13951BFB60"
          >
            <Image width={72} height={72} src={bit} alt="bit" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={`${styles.paymentButton} ${styles.paybox}`}
            href="https://payboxapp.page.link/sRTLTxrerr2btZjs9"
          >
            <Image width={54} height={54} src={paybox} alt="paybox" />
          </a>
        </div>
      </div>
    </div>
  );
}
// 058-7841713
