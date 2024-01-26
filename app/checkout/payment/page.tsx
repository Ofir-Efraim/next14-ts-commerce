"use client";
import { CartContext } from "@/app/CartContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
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
        <></>
      )}
    </main>
  );
}
