import classes from "./CartItem.module.css";

export default function CartItem(props) {
  const Price = `$${props.price}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["item-summary"]}>
        <span className={classes.title}>{props.name}</span>

        <div className={classes.details}>
          <span className={classes.price}>{Price}</span>
          <span className={classes.amount}>X {props.amount}</span>
        </div>
      </div>

      <div className={classes["item-change"]}>
        <button className={classes.increase} onClick={props.onAdd}>
          +
        </button>
        <button className={classes.decrease} onClick={props.onRemove}>
          −
        </button>
      </div>
    </li>
  );
}
