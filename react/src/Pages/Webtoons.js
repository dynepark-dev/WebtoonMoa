import React from "react";
import styles from "../Styles/Webtoons.module.scss";
import db from "../DB/database.json";
import WebtoonsList from "../Components/WebtoonsList";

function Webtoons() {
  const data = db.webtoons;
  return (
    <div className={styles.Webtoons}>
      <WebtoonsList data={data} />
    </div>
  );
}

export default Webtoons;
