import classes from "./Header.module.css";
import mealsImg from "../../../images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <header>
      <div className={classes.header}>
        <h1>Sakr Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>

      <div className={classes["img-box"]}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </header>
  );
}
