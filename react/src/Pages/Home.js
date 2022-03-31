import React from "react";
import Card from "../Components/Card";
import Hello from "../Components/Hello";
import Qna from "../Components/Qna";
import styles from "../Styles/Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Hello />
      {/* <div>
        <Card />
      </div> */}
      <Qna />
    </div>
  );
}

export default Home;
