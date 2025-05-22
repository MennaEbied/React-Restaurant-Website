import {  createContext, ReactNode, useContext, useState } from "react";

interface CartContextType{
cartCount :number;
increment : ()=> void;
decrement : () => void;
}

const CartContext = createContext<CartContextType>({
    cartCount: 0,
  increment: () => {},
  decrement: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode })=>{
    const [cartCount, setCartCount] = useState(0);

  const increment = () => setCartCount((prev) => prev + 1);
  const decrement = () =>
    setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
  return (
    <CartContext.Provider value={{ cartCount, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
