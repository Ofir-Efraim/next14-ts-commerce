"use client";
import { product } from "@types";
import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Drawer, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Info } from "@mui/icons-material";
import Label from "@components/Products/Product/Label/Label";
import { CartContext } from "@/app/CartContext";
type productProps = {
  product: product;
};
export default function Product({ product }: productProps) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    setQuantity(Number(event.target.value));
  };
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
      quantity: quantity,
    });
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
        <Image
          src={product.picture}
          alt={product.name}
          width={100}
          height={100}
          layout="responsive"
        />
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <div className={styles.nameAndInfo}>
              <h4 className={styles.name}>{product.name}</h4>
              <Info onClick={() => setIsOpen(true)} className={styles.info} />
            </div>
            <p className={styles.description}>{product.description}</p>
          </div>
          <div className={styles.actionsContainer}>
            <p className={styles.price}>{product.price} ₪</p>
            <div className={styles.quantity}>
              <Select
                value={quantity}
                onChange={handleQuantityChange}
                size="small"
              >
                {[...Array(10)].map((number, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
              <AddShoppingCartOutlinedIcon
                onClick={handleAddItem}
                className={styles.add}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
