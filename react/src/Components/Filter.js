import React, { useState } from "react";
import styles from "../Styles/Filter.module.scss";

function Filter() {
  const platformFilter = [
    "네이버",
    "카카오",
    "카카오페이지",
    "머시기",
    "저시기",
    "거시기",
    "저머시기",
  ];
  const genreFilter = [
    "로맨스",
    "드라마",
    "판타지",
    "액션",
    "무협",
    "개그",
    "학원",
    "일상",
    "기타",
  ];

  return (
    <div className={styles.Filter}>
      <div className={styles.wrapper}>
        <AFilter initial={["전체"]} array={platformFilter} clear="전체" />
        <AFilter initial={["전체"]} array={genreFilter} clear="전체" />
      </div>
    </div>
  );
}

export default Filter;

function AFilter({ initial, array, clear }) {
  const [data, setData] = useState(initial);
  return (
    <ul className={styles.AFilter}>
      <li
        className={data.includes(clear) ? styles.selected : ""}
        onClick={() => setData([clear])}
      >
        {clear}
      </li>
      {array.map((item) => (
        <li
          key={item}
          className={data.includes(item) ? styles.selected : ""}
          onClick={() => setData([...data, item].filter((x) => x !== clear))}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
