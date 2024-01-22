import React from "react";
import styles from "./styles.module.css";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
type checkoutButtonProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  text: string;
};
export default function CheckoutButton({ Icon, text }: checkoutButtonProps) {
  return (
    <button className={styles.button}>
      <Icon className={styles.icon} />
      {text}
    </button>
  );
}
