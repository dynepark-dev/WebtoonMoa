import React from "react";
import styles from "../Styles/HorizontalLine.module.scss";

function HorizontalLine({ content }) {
  return (
    <div className={styles.HorizontalLine}>
      <div>{content}</div>
      <hr />
    </div>
  );
}

export default HorizontalLine;
