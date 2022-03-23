import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Main.module.scss";

function Main() {
  return (
    <div className={styles.Main}>
      <div className={styles.main_content}>
        <h2 className={styles.headline}>WebtoonMoa</h2>
        <h3 className={styles.subhead}>Watch Every Webtoon</h3>
        <div className={styles.link}>
          <Link to="최신웹툰">Ongoing</Link>
          <Link to="완결웹툰">Completed</Link>
        </div>
        <div className={styles.image_wrapper}>
          <img
            src="https://www.karmoy.kommune.no/content/uploads/sites/35/2021/11/manga-eyes-looking-paper-tear-260nw-1523804378.jpg"
            alt="watching"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
