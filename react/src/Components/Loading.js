import React from "react";
import styles from "../Styles/Loading.module.scss";

function Loading() {
  return (
    <div className={styles.Loading}>
      <div class={styles.loader}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default Loading;
