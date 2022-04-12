import React from "react";
import styles from "../Styles/New.module.scss";
import WebtoonsList from "../Components/WebtoonsList";
import Ribbon from "../Components/Ribbon";
import data from "../DB/database.json";
import Button from "../Components/Button";
import Filter from "../Components/Filter";

function New() {
  const platformFilter = [
    "네이버",
    "카카오",
    "카카오페이지",
    "머시기",
    "저시기",
    "거시기",
    "저머시기",
  ];
  const newToon = data.naver;
  return (
    <div className={styles.New}>
      <Ribbon
        line1="Sign Up now and save your favorite webtoons."
        line2="Sign Up ›"
        link="#"
      />
      <div className={styles.wrapper}>
        <h2>Ongoing Webtoons</h2>
        <Filter initial={["전체"]} array={platformFilter} clear="전체" />
        <WebtoonsList data={newToon} />
        <Button children="더보기" />
        {/* <Button children="마지막페이지 입니다" /> */}
      </div>
    </div>
  );
}

export default New;
