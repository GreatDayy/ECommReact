import "./product-card.styles.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const {addItemsToCart} = useContext(CartContext);
  const addProductToCart = () => addItemsToCart(product);


  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to Card
      </Button>
    </div>
  );
};
export default ProductCard;
