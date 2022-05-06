import { createContext, useState } from "react";


export const CartItemContext = createContext({
    cartItem: null,
    setCartItem: () => null 
})


export const CartItemProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([]);
    const value ={cartItem, setCartItem};
    return <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
} 