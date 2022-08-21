//Utils
import { useContext } from "react";
import "./cart-dropdown.styles.scss";

//Context
import { CartContext } from "../../contexts/cart.context";

//Components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
        {cartItems.map(item => <CartItem cartItem={item} key={item.id} />)}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;