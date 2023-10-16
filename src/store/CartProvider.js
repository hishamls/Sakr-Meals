import CartContext from "./Cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { id, amount, price } = action.item;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === id
      );
      const updatedItems = [...state.items];

      if (existingCartItemIndex !== -1) {
        const existingCartItem = updatedItems[existingCartItemIndex];

        updatedItems[existingCartItemIndex] = {
          ...existingCartItem,
          amount: existingCartItem.amount + amount,
        };
      } else {
        updatedItems.push(action.item);
      }

      const updatedTotalAmount = state.totalAmount + price * amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case "REMOVE": {
      //checks if the item already exists in the cart
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      if (existingCartItemIndex === -1) {
        //-1, it means that the item does not exist in the cart.
        return state;
      }
      //updating the amount by adding the amount from the action.
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
