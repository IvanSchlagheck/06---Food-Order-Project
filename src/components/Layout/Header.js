import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg"
import styles from "Header.modules.css"

const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </Fragment>
  )
};

export default Header
