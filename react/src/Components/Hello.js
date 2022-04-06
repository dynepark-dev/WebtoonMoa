import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Hello.module.scss";

function Hello() {
  return (
    <div className={styles.Hello}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <h2 className={styles.headline}>WebtoonMoa</h2>
          <h3 className={styles.subhead}>Watch Every Webtoon</h3>
          <div className={styles.link}>
            <Link to="/webtoons?toon=ongoing">Ongoing</Link>
            <Link to="/webtoons?toon=completed">Completed</Link>
          </div>
        </div>
        {/* <div className={styles.image_wrapper}>
          <img
            src="https://www.karmoy.kommune.no/content/uploads/sites/35/2021/11/manga-eyes-looking-paper-tear-260nw-1523804378.jpg"
            alt="eyes watching"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Hello;
