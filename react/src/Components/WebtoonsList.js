import React from "react";
import styles from "../Styles/WebtoonsList.module.scss";
import Webtoon from "./Webtoon";

function WebtoonsList({ data }) {
  return (
    <ul className={styles.WebtoonsList}>
      {data?.map((webtoon) => (
        <Webtoon key={webtoon.title} webtoon={webtoon} />
      ))}
    </ul>
  );
}

export default WebtoonsList;
