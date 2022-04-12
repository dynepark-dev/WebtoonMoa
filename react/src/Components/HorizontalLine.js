import React from "react";
import styles from "../Styles/HorizontalLine.module.scss";

function HorizontalLine({ content, onClick, style }) {
  return (
    <div className={styles.HorizontalLine} onClick={onClick} style={style}>
      <h3>{content}</h3>
      <hr />
    </div>
  );
}

export default HorizontalLine;
