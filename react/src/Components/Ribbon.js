import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Ribbon.module.scss";

function Ribbon({ line1, line2, link }) {
  return (
    <div className={styles.Ribbon}>
      <div className={styles.wrapper}>
        <span className={styles.title}>{line1}</span>
        <Link to={link} className={styles.link}>
          {line2}
        </Link>
      </div>
    </div>
  );
}

export default Ribbon;
