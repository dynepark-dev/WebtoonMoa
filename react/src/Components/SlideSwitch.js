import React from "react";
import styles from "../Styles/SlideSwitch.module.scss";

function SlideSwitch() {
  return (
    <label className={styles.SlideSwitch}>
      <input type="checkbox" />
      <span className={styles.slider} />
    </label>
  );
}

export default SlideSwitch;
