import React from "react";
import styles from "../Styles/NaverList.module.scss";
import data from "../DB/database.json";

function NaverList() {
    return (
        <div className={styles.NaverList}>
            <div className={styles.wrapper}>
                <h2>Updated Naver Webtoon</h2>
                <ul>
                    {data?.naver.map((webtoon) => (
                        <li key={webtoon.id}>
                            <img
                                src={webtoon.image}
                                alt={webtoon.title}
                                onClick={() =>
                                    window.open(
                                        `https://comic.naver.com${webtoon.episodeLink}`,
                                        "_blank"
                                    )
                                }
                            />
                            <a
                                className={styles.title}
                                href={`https://comic.naver.com${webtoon.episodeLink}`}
                                title={`<${webtoon.title}> ${webtoon.episodeTitle}`}
                            >
                                {webtoon.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NaverList;
