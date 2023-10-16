import { useState } from "react";
import CartProvider from "./store/CartProvider";

import Header from "./component/layouts/header/Header";
import MealsSummary from "./component/meals/MealsSummary";
import AvailableMeals from "./component/meals/AvailableMeals";
import Cart from "./component/cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />

      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
