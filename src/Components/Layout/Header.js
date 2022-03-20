import React, { Fragment } from "react";
import mealsImage from "../../assets/mealsImage.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FEEDO</h1>
        <HeaderCartButton onOpen={props.onOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="mealImage" />
      </div>
    </Fragment>
  );
};

export default Header;
