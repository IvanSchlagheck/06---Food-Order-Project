import React from "react";
import styles from "./MealsSummary.module.css"
const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food delivered to you, <em>Wachin</em></h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home, <em>Wachin</em>.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs! So, no worries <em>Wachin</em>
      </p>
    </section>
  )
};

export default MealsSummary