"use client";
import { product } from "@types";
import Products from "@components/Products/Products";
import { useEffect, useState } from "react";
import { getProducts } from "../api";
import CartIcon from "../components/CartIcon/CartIcon";
import Link from "next/link";
import styles from "./styles.module.css";

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
      {products.length > 0 && (
        <>
          <Products products={products} />
          <div className={styles.stickyContainer}>
            <Link href="/cart" className={styles.cart}>
              <>
                <CartIcon />
                <span>מעבר לעגלה</span>
              </>
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
