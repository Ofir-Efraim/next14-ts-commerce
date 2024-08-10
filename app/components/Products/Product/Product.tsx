"use client";
import { product } from "@types";
import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Drawer, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { AddCircle, Info, RemoveCircle } from "@mui/icons-material";
import Label from "@components/Products/Product/Label/Label";
import { CartContext } from "@/app/CartContext";
type productProps = {
  product: product;
};
export default function Product({ product }: productProps) {
  const { addItem, changeQuantity, cart } = useContext(CartContext);

  // Find the item with the matching ID
  const cartItem = cart.items.find((item) => item.id === product.id);

  // If the item exists, display its quantity
  const quantity = cartItem ? cartItem.quantity : 0;

  const [isOpen, setIsOpen] = useState(false);
  const anchor = "right"; // Specify the anchor position for the drawer

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") {
        return;
      }

      setIsOpen(open);
    };
  const handleAddItem = () => {
    addItem({
      name: product.name,
      id: product.id,
      price: product.price,
      picture: product.picture,
      quantity: 1,
    });
  };
  const handleDecreaseItem = () => {
    if (quantity > 0) {
      changeQuantity(product.id, "minus");
    }
  };
  return (
    <>
      <Drawer
        sx={{
          ".MuiDrawer-paper": {
            height: "auto",
            width: "100%",
          },
        }}
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Label nutritionalValues={product.nutritionalValues} />
      </Drawer>
      <div className={styles.productContainer}>
        <div style={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            src={product.picture}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <div className={styles.nameAndInfo}>
              <h4 className={styles.name}>{product.name}</h4>
              {/* <Info onClick={() => setIsOpen(true)} className={styles.info} /> */}
            </div>
            <p className={styles.description}>{product.description}</p>
          </div>
          <div className={styles.actionsContainer}>
            <p className={styles.price}>{product.price} ₪</p>
            <div className={styles.quantityContainer}>
              <AddCircle
                color="success"
                titleAccess="הוסף לעגלה"
                onClick={handleAddItem}
                className={styles.add}
              />
              <p className={styles.quantity}>{quantity}</p>
              <RemoveCircle
                color="error"
                titleAccess="הורד מהעגלה"
                onClick={handleDecreaseItem}
                className={styles.decrease}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
