"use client";
import styles from "./styles.module.css";
import { DeliveryDining, TakeoutDining } from "@mui/icons-material";
import CheckoutButton from "../components/CheckoutButton/CheckoutButton";
import Link from "next/link";
import { CartContext } from "@/app/CartContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const { cart } = useContext(CartContext);
  const router = useRouter();
  useEffect(() => {
    if (cart.items.length === 0) {
      if (typeof window !== "undefined") {
        router.push("/products");
      }
    }
  }, [cart.items.length, router]);
  return (
    <main>
      {cart.items.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "28px", direction: "rtl" }}>
          עגלה ריקה, עובר למוצרים ...
        </p>
      ) : (
        <div className={styles.checkoutContainer}>
          <div className={styles.buttonsContainer}>
            <Link className={styles.link} href={"/checkout/delivery"}>
              <CheckoutButton text="משלוח" Icon={DeliveryDining} />
            </Link>
            <Link className={styles.link} href={"/checkout/pickup"}>
              <CheckoutButton text="איסוף עצמי" Icon={TakeoutDining} />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
