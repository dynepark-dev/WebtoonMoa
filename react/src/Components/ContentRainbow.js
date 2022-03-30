import React from "react";
import styles from "../Styles/ContentRainbow.module.scss";

function ContentRainbow() {
  return (
    <div className={styles.ContentRainbow}>
      <div className={styles.wrapper}>
        <h4>
          Lorem ipsum dolor, <br /> sit amet consectetur
          <br /> adipisicing elit. Obcaecati, ex.
        </h4>
        <h5>
          Lorem ipsum dolor, sit amet
          <br /> consectetur adipisicing elit.
          <br /> Obcaecati, ex.
        </h5>
      </div>
    </div>
  );
}

export default ContentRainbow;
