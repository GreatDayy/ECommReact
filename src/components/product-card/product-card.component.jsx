import "./product-card.styles.scss";
import { useContext, useState, useEffect } from "react";
import { CartItemContext } from "../../contexts/Cart-item.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const { cartItem, setCartItem } = useContext(CartItemContext);



  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button  buttonType="inverted">
        Add to Card
      </Button>
    </div>
  );
};
export default ProductCard;
