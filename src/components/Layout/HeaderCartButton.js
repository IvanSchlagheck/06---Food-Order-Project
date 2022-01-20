// React Import
import React, { useContext } from "react";
// Styles Import
import styles from "./HeaderCartButton.module.css";
// Components Import
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  },
  0);

  return (
    <button className={styles.button} onClick={props.onCartClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
