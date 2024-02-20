import React from "react";
import styles from "./styles.module.css";
import bit from "@assets/bit_logo.jpeg";
import paybox from "@assets/paybox_logo.png";
import Image from "next/image";
import { order } from "@/app/types";
type paymentProps = {
  order: order | null;
};
export default function Payment({ order }: paymentProps) {
  return (
    <div className={styles.paymentContainer}>
      <h2 className={styles.message}>תודה רבה על שבחרת בצחם</h2>
      <h3 className={styles.location}>
        {order?.address ? (
          <>הזמנתך תגיע לכתובת {order.address}</>
        ) : (
          <>הזמנתך תחכה לך ב{order?.pickupSpot}</>
        )}
      </h3>
      <p className={styles.price}>הזמנתך היא על סך ₪{order?.totalPrice}</p>
      <div className={styles.payment}>
        <h3 className={styles.optionsMessage}>לתשלום בביט או בפייבוקס</h3>
        <div className={styles.paymentOptions}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={`${styles.paymentButton} ${styles.bit}`}
            href="https://www.bitpay.co.il/app/me/69025DC7-9D1E-44C4-4CD0-5FC07D13951BFB60"
          >
            <Image
              title="058-784-1713"
              width={72}
              height={72}
              src={bit}
              alt="bit"
            />
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
