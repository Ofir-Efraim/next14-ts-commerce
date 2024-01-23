"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CustomerContext } from "@/app/CustomerContext";
export default function DeliveryForm() {
  const { customer, setCustomer } = useContext(CustomerContext);
  return <div>DeliveryForm</div>;
}
