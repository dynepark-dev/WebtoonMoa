import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Webtoon.module.scss";
import Platform from "./Platform";

function Webtoon({ webtoon }) {
  return (
    <li className={styles.Webtoon}>
      {"episodeTitle" in webtoon == true ? (
        <a
          href={`https://comic.naver.com${webtoon.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card webtoon={webtoon} />
        </a>
      ) : (
        <Link to={`/webtoon/${webtoon.title}`}>
          <Card webtoon={webtoon} />
        </Link>
      )}
    </li>
  );
}

function Card({ webtoon }) {
  return (
    <>
      <figure>
        <img className={styles.cover} src={webtoon.image} alt={webtoon.title} />
        <figcaption className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </figcaption>
      </figure>
      <div className={styles.tag}>
        {webtoon.platform && <Platform platform={webtoon.platform} />}
        {true && <div className={styles.update}>NEW</div>}
      </div>
    </>
  );
}

export default Webtoon;
