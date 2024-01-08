import React from "react";
import styles from "./styles.module.css";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

export default function CartIcon() {
  return (
    <Badge
      badgeContent={5}
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
