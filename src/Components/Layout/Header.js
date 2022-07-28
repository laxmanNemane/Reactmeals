import React, { Fragment } from "react";
import MealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props=> {
  // console.log(props)
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={(props.showCartHandler)}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
