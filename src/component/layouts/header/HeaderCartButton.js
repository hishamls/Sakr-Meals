import { useContext, useEffect, useState } from "react";
import CartIcon from "../../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/Cart-context";

export default function HeaderCartButton(props) {
  let cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  let numberOfCartItems = items.reduce((acc, crr) => {
    return (acc += crr.amount);
  }, 0);

  const [btnIsActive, setBtnIsActive] = useState(false);

  const btnClasses = `${classes.button} ${btnIsActive ? classes.bump : ""} `;

  //To make a bump animation
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsActive(true);
    //set timer to inactive the button to default state
    const timer = setTimeout(() => {
      setBtnIsActive(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
