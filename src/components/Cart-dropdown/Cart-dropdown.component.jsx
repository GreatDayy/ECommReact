import { useContext, useState } from 'react'
import './Cart-dropdown.styles.scss'
import Button from '../button/button.component'

const CartDropDown = () => {

  return (
    <div className="cart-dropdown-container">
        <div className="cart-items"/>
       <Button>Go to Checkout</Button>
       </div>
  )
}

export default CartDropDown