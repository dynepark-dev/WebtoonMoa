import React from "react";
import Card from "../Components/Card";
import Hello from "../Components/Hello";
import OfficialLink from "../Components/OfficialLink";
import styles from "../Styles/Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <Hello />
      <OfficialLink />
      <div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
