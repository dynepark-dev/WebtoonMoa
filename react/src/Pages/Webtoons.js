import React from "react";
import styles from "../Styles/Webtoons.module.scss";
import db from "../DB/database.json";
import WebtoonsList from "../Components/WebtoonsList";
import Button from "../Components/Button";
import Filter from "../Components/Filter";

function Webtoons() {
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
  const data = db.webtoons;
  return (
    <div className={styles.Webtoons}>
      <div className={styles.wrapper}>
        <h2>Ongoing Webtoons</h2>
        <div className={styles.filters}>
          <Filter initial={["전체"]} array={platformFilter} clear="전체" />
          <Filter initial={["전체"]} array={genreFilter} clear="전체" />
        </div>
        <WebtoonsList data={data} />
        <Button children="더보기" />
        {/* <Button children="마지막페이지 입니다" /> */}
      </div>
    </div>
  );
}

export default Webtoons;
