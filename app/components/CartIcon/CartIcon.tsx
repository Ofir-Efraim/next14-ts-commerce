"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { CartContext } from "@/app/CartContext";

export default function CartIcon() {
  const { cart } = useContext(CartContext);
  return (
    <Badge
      badgeContent={cart.totalItems}
      sx={{
        "& .MuiBadge-badge": {
          background: "#ed657d",
          color: "#fff",
          borderRadius: "50%",
          fontSize: "14px",
          height: "20px",
          width: "20px",
        },
      }}
    >
      <ShoppingCart />
    </Badge>
  );
}
