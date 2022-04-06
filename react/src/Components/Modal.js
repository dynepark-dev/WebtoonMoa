import React from "react";
import styles from "../Styles/Modal.module.scss";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.Modal} onClick={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.wrapper}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
