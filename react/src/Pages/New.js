import React from "react";
import styles from "../Styles/New.module.scss";
import NaverList from "../Components/NaverList";
import Ribbon from "../Components/Ribbon";

function New() {
  return (
    <div className={styles.New}>
      <Ribbon
        line1="Sign Up now and save your favorite webtoons."
        line2="Sign Up ›"
        link="#"
      />
      <NaverList />
    </div>
  );
}

export default New;
