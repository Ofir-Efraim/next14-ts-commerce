"use client";
import { CartContext } from "@/app/CartContext";
import { CustomerContext } from "@/app/CustomerContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
export default function Home() {
  const { orderType, setOrderType } = useContext(CustomerContext);
  const { cart } = useContext(CartContext);
  const router = useRouter();
  useEffect(() => {
    setOrderType("delivery");
  }, []);
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
        <>{console.log(orderType)}</>
      )}
    </main>
  );
}
