import { useState, useContext} from "react";
import "./Cart-checkout.styles.scss";
import {CartContext} from '../../contexts/cart.context'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup
} from "@mui/material";

const CartCheckout = () => {
    //We already have a list of cart items
    //We need to utilize the cart items 
    // Send data from: TIPS: use cartContext
    const {cartItems} = useContext(CartContext);

    const {id, name, imageUrl, quantity, price} = cartItems;


 
  return(
   <div>
       
  </div>
  )
  
};

export default CartCheckout;
