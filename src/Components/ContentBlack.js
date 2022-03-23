import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/ContentBlack.module.scss";

function ContentBlack() {
  return (
    <div className={styles.ContentBlack}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <h2 className={styles.headline}>WebtoonMoa</h2>
          <h3 className={styles.subhead}>Watch Every Webtoon</h3>
          <div className={styles.link}>
            <Link to="최신웹툰">Ongoing</Link>
            <Link to="완결웹툰">Completed</Link>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <img
            src="https://t4.ftcdn.net/jpg/04/43/45/83/240_F_443458360_d7STXmCRdncbwK9SqlUVuTlL0IwV92dQ.jpg"
            alt="red-eye"
          />
        </div>
      </div>
    </div>
  );
}

export default ContentBlack;
