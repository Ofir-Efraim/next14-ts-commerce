"use client";
import { CartContext } from "@/app/CartContext";
import { getOrder } from "@/app/api";
import Instructions from "@/app/components/Payment/Instructions/Instructions";
import Payment from "@/app/components/Payment/Payment";
import { order } from "@/app/types";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
export default function Home() {
  const [order, setOrder] = useState<order | null>(null);
  const { clearCart } = useContext(CartContext);
  const searchParams = useParams();
  const { id } = searchParams;
  const fetchOrder = async () => {
    const response = await getOrder(id as string);
    setOrder(response.data.order);
    clearCart();
  };
  useEffect(() => {
    if (id) {
      fetchOrder();
    }
  }, [id]);
  return (
    <main>
      {order && (
        <>
          <Payment order={order} />
          <Instructions />
        </>
      )}
    </main>
  );
}
