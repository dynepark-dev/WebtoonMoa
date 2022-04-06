import React from "react";
import styles from "../Styles/Button.module.scss";

function Button({ children, click, href, selected }) {
  return (
    <button
      className={`${styles.Button} ${selected && styles.selected}`}
      onClick={click}
      href={href}
    >
      {children}
    </button>
  );
}

export default Button;
