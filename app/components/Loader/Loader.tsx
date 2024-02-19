import React from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./styles.module.css";
export default function Loader() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.loaderContainer}>
        <p className={styles.text}>מבצע הזמנה</p>
        <TailSpin
          color="#000"
          height={60}
          width={60}
          // className={styles.loader}
        />
      </div>
    </div>
  );
}
