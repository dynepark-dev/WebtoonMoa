import React from "react";
import styles from "../Styles/NaverList.module.scss";
import data from "../DB/database.json";

function NaverList() {
  function openNewWindow(link) {
    window.open(`https://comic.naver.com${link}`, "_blank");
  }
  return (
    <div className={styles.NaverList}>
      <div className={styles.wrapper}>
        <h2>Updated Naver Webtoon</h2>
        <ul>
          {data?.naver.map((webtoon) => (
            <li
              key={webtoon.id}
              onClick={() => openNewWindow(webtoon.episodeLink)}
            >
              <figure>
                <img src={webtoon.image} alt={webtoon.title} />
                <figcaption
                  title={`<${webtoon.title}> ${webtoon.episodeTitle}`}
                >
                  {webtoon.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NaverList;
