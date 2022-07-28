import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import { Modal } from "../UI/Model";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(1)}`;

  const hasitem = cartCtx.items.length > 0;

  const cartItemRemovehandler = (id) => {
    console.log("removed")
    // cartCtx.removeItem(id)
  };

  const addItems = (item) => {
    console.log(item)
    // alert("nasjk")
    cartCtx.addItem(item)
    
  };

 

  // console.log(props)
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemovehandler.bind(null , item.id)}
          onAdd ={addItems.bind(item)}
         
        />
      ))}
    </ul>
  );
  return (
    <Modal> 
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        {hasitem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
