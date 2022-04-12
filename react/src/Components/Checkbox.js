import React from "react";
import styles from "../Styles/Checkbox.module.scss";

function Checkbox({ id, content, required }) {
  return (
    <div className={styles.Checkbox}>
      <input required={required && true} type="checkbox" id={id} />
      <label htmlFor={id}>{content}</label>
    </div>
  );
}

export default Checkbox;
