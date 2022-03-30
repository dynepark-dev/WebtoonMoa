import React from "react";
import Webtoon from "../Components/Webtoon";
import styles from "../Styles/Webtoons.module.scss";
import db from "../DB/database.json";

function Webtoons() {
  const data = db.webtoons;
  return (
    <div className={styles.Webtoons}>
      <div className={styles.wrapper}>
        <h2>Every webtoons</h2>
        <div className={styles.webtoons}>
          {data.map((webtoon) => (
            <Webtoon key={webtoon.title} webtoon={webtoon} />
            // TODO: key={webtoon.id}
          ))}
        </div>
        <button>더보기</button>
      </div>
    </div>
  );
}

export default Webtoons;
