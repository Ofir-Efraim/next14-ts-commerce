import React from "react";
import styles from "./styles.module.css";
import CartIcon from "@components/CartIcon/CartIcon";
import Image from "next/image";
import logo from "@assets/logo.jpg";
import Link from "next/link";
export default function Header() {
  return (
    <div className={styles.header}>
      <Link href={"/cart"} className={styles.cart}>
        <CartIcon />
      </Link>
      <Link href={"/"} className={styles.logo}>
        <Image src={logo} alt="system-logo" width={60} height={60} priority />
      </Link>
    </div>
  );
}
