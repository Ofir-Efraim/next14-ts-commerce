"use client";
import { product } from "@types";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
type productProps = {
  product: product;
};
export default function Product({ product }: productProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    setQuantity(Number(event.target.value));
  };
  return (
    <div className={styles.productContainer}>
      <Image
        src={product.picture}
        alt={product.name}
        width={100}
        height={100}
        layout="responsive"
      />
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h4 className={styles.name}>{product.name}</h4>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.actionsContainer}>
        <p className={styles.price}>{product.price} ₪</p>
        <div className={styles.quantity}>
          <Select value={quantity} onChange={handleQuantityChange} size="small">
            {[...Array(10)].map((number, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
          <AddShoppingCartOutlinedIcon className={styles.add} />
        </div>
        </div>
      </div>
    </div>
  );
}
