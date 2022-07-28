import React, { Fragment, useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx)


  const numberOfcartItems = cartCtx.items.reduce((curNum, item)=>{
    console.log(curNum)
    console.log(item)
    return curNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfcartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
