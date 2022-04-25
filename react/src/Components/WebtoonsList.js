import React from "react";
import styles from "../Styles/WebtoonsList.module.scss";
import { Link } from "react-router-dom";
import Platform from "./Platform";

function WebtoonsList({ isNew, webtoons }) {
  return (
    <ul className={styles.WebtoonsList}>
      {webtoons?.map((webtoon) => (
        <li className={styles.Webtoon}>
          {isNew === true ? (
            <a
              href={webtoon.episodeLink ? webtoon.episodeLink : webtoon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card webtoon={webtoon} />
            </a>
          ) : (
            <Link to={`/webtoon/${webtoon._id}`}>
              <Card webtoon={webtoon} />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default WebtoonsList;

function Card({ webtoon }) {
  return (
    <>
      <figure>
        <img className={styles.cover} src={webtoon.image} alt={webtoon.title} />
        <figcaption className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </figcaption>
        <figcaption className={styles.subtitle} title={webtoon.episodeTitle}>
          {webtoon.episodeTitle}
        </figcaption>
      </figure>
      <div className={styles.tag}>
        {true && <Platform platform={webtoon.platform} />}
        {/* {true && (
          <div className={styles.update} title="오늘 업데이트">
            오늘
          </div>
        )} */}
      </div>
    </>
  );
}
