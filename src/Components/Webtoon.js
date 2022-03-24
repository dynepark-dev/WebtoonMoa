import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Webtoon.module.scss";
import Platform from "./Platform";

function Webtoon({ webtoon }) {
    return (
        <div className={styles.Webtoon}>
            <div className={styles.wrapper}>
                <a href={webtoon.url}>
                    <img
                        className={styles.cover}
                        src={webtoon.image}
                        alt={webtoon.title}
                    />
                </a>
                <Link to={`/webtoon/${webtoon.title}`}>
                    <a className={styles.title} title={webtoon.title}>
                        {webtoon.title}
                    </a>
                </Link>
                <div className={styles.tag}>
                    {webtoon.platform && (
                        <Platform platform={webtoon.platform} />
                    )}
                    <div className={styles.update}>NEW</div>
                </div>
            </div>
        </div>
    );
}

export default Webtoon;
