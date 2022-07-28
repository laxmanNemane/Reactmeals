import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultcartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log(state.items);
  if (action.type === "ADD") {
    // const updatedItems = state.items.concat(action.item);
    // console.log(updatedItems)

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    return;
  }
  return defaultcartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchcartAction] = useReducer(
    cartReducer,
    defaultcartState
  );
  console.log(cartState);

  const addItemToCartHandler = (item) => {
    console.log(item);
    dispatchcartAction({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchcartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
