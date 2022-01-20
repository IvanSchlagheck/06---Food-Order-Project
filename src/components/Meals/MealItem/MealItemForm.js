// React Imports
import React from "react";
//Styles Imports
import styles from "./MealItemForm.module.css"
//Components Imports
import Input from "../../UI/Input"

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input label = "Amount" input= {{
        id: "amount" + props.id,
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1"
      }}/>
      <button>+ Add</button>
    </form>

  )
}

export default MealItemForm;