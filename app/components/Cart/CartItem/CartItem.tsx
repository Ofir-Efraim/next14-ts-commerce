"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { cartItem } from "@types";
import Image from "next/image";
import { Add, Delete, Remove } from "@mui/icons-material";
import { CartContext } from "@/app/CartContext";

type cartItemProps = {
  item: cartItem;
};
export default function CartItem({ item }: cartItemProps) {
  const { clearItem, changeQuantity } = useContext(CartContext);
  return (
    <div className={styles.itemContainer}>
      <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <Image
          src={item.picture}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.nameAndQuantity}>
        <div className={styles.quantity}>
          <Add
            onClick={() => changeQuantity(item.id, "plus")}
            className={styles.plus}
          />
          <span className={styles.number}>{item.quantity}</span>
          <Remove
            onClick={() => changeQuantity(item.id, "minus")}
            className={styles.minus}
          />
        </div>
        <h3 className={styles.name}>{item.name}</h3>
      </div>
      <div className={styles.actionsAndPrice}>
        <h4 className={styles.price}>₪ {item.price * item.quantity} </h4>
        <button
          onClick={() => clearItem(item.id)}
          className={styles.removeContainer}
        >
          <Delete className={styles.remove} />
          <span className={styles.remove}>הסר פריט</span>
        </button>
      </div>
    </div>
  );
}
