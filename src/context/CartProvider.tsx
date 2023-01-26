
import { ICartProduct, ProviderProps } from "../types/types";
import { CartContext } from "./CartContext";
import  {cartProducts} from '../../dataProducts.json'
import { useState } from "react";

export const CartProvider = ({ children }: ProviderProps) => {
  
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);


  const getTotalPrice = (array: ICartProduct[]) => {
    let total = 0;

    array.map((item) => {
      total += item.quantity * item.price;
    });

    return total;
  };



  














  return (
    <CartContext.Provider
      value={{
      
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

