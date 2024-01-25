"use client";
import { CartContext } from "@/app/CartContext";
import { CustomerContext } from "@/app/CustomerContext";
import CheckoutForm from "@/app/components/CheckoutForm/CheckoutForm";
import OrderSummary from "@/app/components/OrderSummary/OrderSummary";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
export default function Home() {
  const { orderType } = useContext(CustomerContext);
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
        <OrderSummary/>
      )}
    </main>
  );
}
