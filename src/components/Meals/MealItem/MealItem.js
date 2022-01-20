// Ract Import
import React from "react";
//Styles Import
import styles from "./MealItem.module.css";
// Components Imports
import MealItemForm from "./MealItemForm"

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id/>
      </div>
    </li>
  );
};

export default MealItem;
