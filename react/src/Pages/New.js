import React from "react";
import styles from "../Styles/New.module.scss";
import WebtoonsList from "../Components/WebtoonsList";
import Ribbon from "../Components/Ribbon";
import data from "../DB/database.json";

function New() {
  const newToon = data.naver;
  return (
    <div className={styles.New}>
      <Ribbon
        line1="Sign Up now and save your favorite webtoons."
        line2="Sign Up ›"
        link="#"
      />
      <WebtoonsList data={newToon} />
    </div>
  );
}

export default New;
