import Modal from "../ui/modal/Modal";
import Button from "../ui/button/Button";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const totalPrice = `$${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={classes.default}>
        <div className={classes.total}>
          <span>Total Price:</span>
          <span>{totalPrice}</span>
        </div>
        <div className={classes.action}>
          <button className={classes.close} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <Button>Order</Button>}
        </div>
      </div>
    </Modal>
  );
}
