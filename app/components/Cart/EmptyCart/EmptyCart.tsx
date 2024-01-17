import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import emptyCart from "@assets/emptyCart.svg";
export default function EmptyCart() {
  return (
    <div className={styles.emptyCartContainer}>
      <Image width={100} height={100} src={emptyCart} alt="empty cart" />
      <h2 className={styles.label}>העגלה ריקה</h2>
    </div>
  );
}
