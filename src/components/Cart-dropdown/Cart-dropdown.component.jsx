import { useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import './Cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../Cart-item/Cart-item.component'
import { CartContext } from '../../contexts/cart.context'


const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
          </div>
          <Link to={"/Checkout"}><Button>Go to Checkout</Button></Link>
       </div>
  )
}

export default CartDropDown