import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment, useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../Cart-icon/Cart-icon.component"
import { CartContext } from '../../contexts/cart.context'

import "./Navigation.styles.scss";
import { signOut } from "firebase/auth";
import CartDropDown from "../Cart-dropdown/Cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  
  return (
    <Fragment>
      <div className="navbar">
        <div className="nav-logo-container">
          <CrwnLogo className="nav-logo" />
        </div>
        <div className="nav-links">
          <Link className="nav-link" to={"/Shop"}>
            SHOP
          </Link>
          <Link className="nav-link" to={"/Contact"}>
            CONTACT
          </Link>

          {currentUser ? (
            <Link className="nav-link" to={"/Auth"} onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to={"/Auth"}>
              SIGN IN
            </Link>
          )}
          {/* <Link className="nav-link" to={'/Auth'}>SIGN IN</Link> */}
          <CartIcon/>
        </div>
        { isCartOpen &&  <CartDropDown/>}
        
      


      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
