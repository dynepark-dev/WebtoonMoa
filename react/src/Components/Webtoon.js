import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Webtoon.module.scss";
import Platform from "./Platform";

function Webtoon({ webtoon }) {
  return (
    <div className={styles.Webtoon}>
      <Link to={`/webtoon/${webtoon.title}`}>
        <figure>
          <img
            className={styles.cover}
            src={webtoon.image}
            alt={webtoon.title}
          />
          <figcaption className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </figcaption>
        </figure>
        <div className={styles.tag}>
          {webtoon.platform && <Platform platform={webtoon.platform} />}
          {true && <div className={styles.update}>NEW</div>}
        </div>
      </Link>
    </div>
  );
}

export default Webtoon;
