import { product } from "@/app/types";
import Product from "@components/Products/Product/Product";
import React, { useContext } from "react";
import styles from "./styles.module.css";
type productsProps = {
  products: product[];
};
export default function Products({ products }: productsProps) {
  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
