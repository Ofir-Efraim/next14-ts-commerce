"use client";
import React, { createContext, useState } from "react";
import { Customer, OrderType } from "@types";

type CustomerContextData = {
  customer: Customer;
  orderType: OrderType;
  setCustomer: (cb: (value: Customer) => Customer) => void;
  setOrderType: (orderType: OrderType) => void;
  discountPercentage : number;
  setDiscountPercentage : (discountPercentage : number) => void;
  initializeCustomerContext: () => void;
};

export const CustomerContext = createContext<CustomerContextData>({
  customer: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  },
  discountPercentage : 0,
  setDiscountPercentage : () => {},
  orderType: "",
  setCustomer: () => {},
  setOrderType: () => {},
  initializeCustomerContext: () => {},
});

export type CustomerProviderProps = {
  children: React.ReactNode;
};

export const CustomerProvider: React.FC<CustomerProviderProps> = ({
  children,
}) => {
  const [customer, setCustomer] = useState<Customer>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [orderType, setOrderType] = useState<OrderType>("");
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  const initializeCustomerContext = () => {
    setCustomer({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    });
    setOrderType("");
    setDiscountPercentage(0);
  };

  return (
    <CustomerContext.Provider
      value={{
        customer,
        orderType,
        discountPercentage,
        setDiscountPercentage,
        setCustomer,
        setOrderType,
        initializeCustomerContext,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
