import React from "react";
import styles from "../Styles/New.module.scss";
import WebtoonList from "../Components/WebtoonList";

function New() {
    return (
        <div className={styles.New}>
            <WebtoonList />
        </div>
    );
}

export default New;
