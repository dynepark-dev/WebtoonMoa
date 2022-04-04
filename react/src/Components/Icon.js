import React from "react";
import styles from "../Styles/Icon.module.scss";

function Icon({ item }) {
  return (
    <div className={styles.Icon}>
      <a className={item.icon_button} href={item.link}>
        <i className={item.icon}></i>
      </a>
    </div>
  );
}

export default Icon;
