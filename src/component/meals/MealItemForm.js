import { useRef, useState } from "react";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount === 0 || enteredAmount > 5 || enteredAmount < 0) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes["item-form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "_amount" + props.id,
          type: "number",
          max: 5,
          min: 0,
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button onClick={onsubmit}>+ Add</Button>

      {!amountIsValid && <p>Please enter a valid amount (0-5)</p>}
    </form>
  );
}
