import React from "react";
import { CustomerProvider, CustomerProviderProps } from "./CustomerContext";
import { CartProvider, CartProviderProps } from "./CartContext";

type CombinedProviderProps = CustomerProviderProps & CartProviderProps;

const CombinedProvider: React.FC<CombinedProviderProps> = ({ children }) => {
  return (
    <CustomerProvider>
      <CartProvider>{children}</CartProvider>
    </CustomerProvider>
  );
};

export default CombinedProvider;
