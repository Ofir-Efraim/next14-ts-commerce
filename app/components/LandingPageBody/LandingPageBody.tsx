import React from "react";
import styles from "./styles.module.css";
import Cover from "@assets/cover.jpg";
import Image from "next/image";
import Link from "next/link";
export default function LandingPageBody() {
  return (
    <div className={styles.bodyContainer}>
      <h2 className={styles.title}>ברוכים הבאים לצחם</h2>
      <p className={styles.description}>
        נעים מאוד ! אנו נרגשים להציג את ״צחם ״ - לחם בריאות מזרעי צמחים . המותג
        צחם נולד מאהבה כפולה וגדולה האחת לאישתי והשניה לבריאות . אהבה שסחפה
        אחריה רבים מהחברים ובני משפחה והמשיכה להתפתח ולגדול לכלל הלקוחות שהם
        מזמן חברים ! המוצרים של צחם פותחו ומיוצרים בדגש על 3-4 רכיבים טבעיים,
        תחת הדגש של הכי קרוב לטבע! כלל המוצרים טבעוניים, ללא גלוטן ללא סוכר או
        תחליפי סוכר . מזמינים אתכם להתמכר ולהתאהב בצחם❤️
      </p>
      <Image src={Cover} alt="cover-image" layout="responsive" />
      <Link className={styles.link} href={"/products"}>
        <div className={styles.button}>להזמנות אונליין</div>
      </Link>
    </div>
  );
}
