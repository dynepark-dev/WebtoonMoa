import React from "react";
import styles from "../Styles/Button.module.scss";

function Button({ children, onClick, href, selected, disabled }) {
  return (
    <button
      className={`${styles.Button} ${selected && styles.selected}`}
      onClick={onClick}
      href={href}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
