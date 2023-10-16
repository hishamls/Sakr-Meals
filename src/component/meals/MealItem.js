import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/Cart-context";

export default function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const Price = `$${props.price.toFixed(2)}`;

  const addHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.item}>
      <div className={classes.props}>
        <span className={classes.name}>{props.name}</span>
        <span className={classes.description}>{props.description}</span>
        <span className={classes.price}>${Price}</span>
      </div>

      <MealItemForm id={props.id} onAddToCart={addHandler} />
    </li>
  );
}
