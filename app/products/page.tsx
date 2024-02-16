"use client";
import { product } from "@types";
import Products from "@components/Products/Products";
import { useEffect, useState } from "react";
import { getProducts } from "../api";

export default function Home() {
  const [products, setProducts] = useState<product[]>([]);
  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main>
      <Products products={products} />
    </main>
  );
}
