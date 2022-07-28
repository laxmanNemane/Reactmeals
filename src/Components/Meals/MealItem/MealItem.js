import React, { useContext } from "react";
import CartContext from "../../../Store/CartContext";
import MealForm from "./MealForm";
import classes from "./MealsItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx)
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    // console.log(amount)
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });

    // console.log({
    //   id: props.id,
    //   name: props.name,
    //   amount: amount,
    //   price: props.price,
    // });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> {price}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
