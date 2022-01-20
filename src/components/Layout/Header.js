import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"
import styles from "./Header.module.css"

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartClick={props.onShowCart} />
      </header>
      <div className= {styles['main-image']}> 
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </Fragment>
  )
};

export default Header
