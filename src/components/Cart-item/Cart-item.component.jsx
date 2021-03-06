import './Cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const {name,price, imageUrl, quantity} = cartItem
    return (
        <div className="cart-item-container">
           <img src={imageUrl} alt={`${name}`}/>
           <div className="item-details">
            <span className="name">{name}</span>
             <span className="price">
                {quantity} X ${quantity * price}
            </span>
           </div>
        </div>
    )
}

export default CartItem

//1: I need the picture, title and price. 
//2:When adding the item into the cart item, i need to check 
//Whether it exits if it exits i need to increase the quantity and update the total price
//3: if it doesent then add it to the list.