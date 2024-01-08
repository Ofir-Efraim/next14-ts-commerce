import React from "react";
import styles from "./styles.module.css";
import  CartIcon  from "@components/CartIcon/CartIcon";
export default function Header() {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Zechem</h2>
      <div className={styles.cart}>
        <CartIcon />
      </div>
    </div>
  );
}
