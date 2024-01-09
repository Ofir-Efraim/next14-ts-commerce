import React from "react";
import styles from "./styles.module.css";
import { Facebook, Instagram, Smartphone } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.socialButtonsContainer}>
        <a
          className={`${styles.socialButton} ${styles.instagram}`}
          href={
            "https://instagram.com/zechem_glutenfreebread?igshid=YmMyMTA2M2Y="
          }
        >
          <Instagram className={styles.instagramIcon} />
        </a>
        <a
          className={`${styles.socialButton} ${styles.facebook}`}
          href={"https://www.facebook.com/gil.efraim.37?mibextid=LQQJ4d"}
        >
          <Facebook className={styles.facebookIcon} />
        </a>
        <a
          className={`${styles.socialButton} ${styles.phone}`}
          href="tel:058-784-1711"
        >
          <Smartphone className={styles.phoneIcon} />
        </a>
      </div>
    </div>
  );
}
