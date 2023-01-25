
import { ProviderProps } from "../types/types";
import { CartContext } from "./CartContext";
import  {cartProducts} from '../../dataProducts.json'

export const CartProvider = ({ children }: ProviderProps) => {
  








  return (
    <CartContext.Provider
      value={{
      
      }}
    >
      {children}
    </CartContext.Provider>
  );
};