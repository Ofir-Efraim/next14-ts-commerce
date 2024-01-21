"use client";
import React, { createContext, useState } from "react";
import { Customer, OrderType } from "@types";

type CustomerContextData = {
  customer: Customer;
  orderType: OrderType;
  setCustomer: (customer: Customer) => void;
  setOrderType: (orderType: OrderType) => void;
  initializeCustomerContext: () => void;
};

export const CustomerContext = createContext<CustomerContextData>({
  customer: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  },
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

  const initializeCustomerContext = () => {
    setCustomer({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    });
    setOrderType("");
  };

  return (
    <CustomerContext.Provider
      value={{
        customer,
        orderType,
        setCustomer,
        setOrderType,
        initializeCustomerContext,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
