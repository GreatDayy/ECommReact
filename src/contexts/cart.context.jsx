import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //If product exists, increase quantity => return cartItems:
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingCartItem) {

    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //else add Product To existing cart and add the value 1:

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => {},
  cartItems: [],
  countItem: null,
  addItemsToCart: () => {},

});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [countItem, setCountItem] = useState(0);
  


  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
  countedItems(cartItems);
  },[cartItems])

  const countedItems = (cartItems) => {
    const countedItems = cartItems.reduce((total, item) => {return total + item.quantity}, 0)
       setCountItem(countedItems);
  }

  const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems, countItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
