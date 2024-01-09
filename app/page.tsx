import Image from "next/image";
import styles from "./page.module.css";
import LandingPageBody from "@components/landingPageBody/landingPageBody";
export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPageBody />
    </main>
  );
}
