import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import instagram from "@assets/instagram.svg";
import facebook from "@assets/facebook.svg";
import phone from "@assets/phone.svg";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socialButtonsContainer}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialButton} ${styles.instagram}`}
          href="https://instagram.com/zechem_glutenfreebread?igshid=YmMyMTA2M2Y="
        >
          <Image width={28} height={28} src={instagram} alt="instagram" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialButton} ${styles.facebook}`}
          href="https://www.facebook.com/gil.efraim.37?mibextid=LQQJ4d"
        >
          <Image width={28} height={28} src={facebook} alt="facebook" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialButton} ${styles.phone}`}
          href="https://api.whatsapp.com/send?phone=972587841711&text&type=phone_number&app_absent=0"
        >
          <Image width={28} height={28} src={phone} alt="phone" />
        </a>
      </div>
    </footer>
  );
}
