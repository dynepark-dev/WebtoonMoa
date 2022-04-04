import React from "react";
import styles from "../Styles/WebtoonsList.module.scss";
import Webtoon from "./Webtoon";

function WebtoonsList({ data }) {
  return (
    <div className={styles.WebtoonsList}>
      <h2>Ongoing Webtoons</h2>
      <ul className={styles.webtoons}>
        {data?.map((webtoon) => (
          <Webtoon key={webtoon.title} webtoon={webtoon} />
        ))}
      </ul>
      <button>더보기</button>
    </div>
  );
}

export default WebtoonsList;
