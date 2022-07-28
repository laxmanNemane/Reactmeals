import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { CartProvider } from "./Store/CartProvider";

function App() {
  const [cartItemShown, setCartItemShow] = useState(false);

  const showCartHandler = () => {
    setCartItemShow(true);
  };

  const hideCartHandler = () => {
    setCartItemShow(false);
  };
  return (
    <Fragment>
      <CartProvider>
        {cartItemShown && <Cart hideCartHandler={hideCartHandler} />}
        <Header showCartHandler={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </Fragment>
  );
}

export default App;
