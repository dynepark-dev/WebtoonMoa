import React from "react";
import styles from "../Styles/Main.module.scss";
import Content from "./Content";
import ContentBlack from "./ContentBlack";
import ContentRainbow from "./ContentRainbow";

function Main() {
  const props = [
    {
      id: 1,
      headline: "WebtoonMoa",
      subhead: "Watch Every Webtoon",
      link1: "ongoing",
      link2: "completed",
      image:
        "https://www.karmoy.kommune.no/content/uploads/sites/35/2021/11/manga-eyes-looking-paper-tear-260nw-1523804378.jpg",
      alt: "watching",
    },
  ];
  return (
    <div className={styles.Main}>
      <Content props={props[0]} />
      <ContentBlack />
      <div className={styles.four}>
        <Content props={props[0]} />
        <Content props={props[0]} />
        <Content props={props[0]} />
        <Content props={props[0]} />
        <Content props={props[0]} />
        <ContentRainbow />
      </div>
    </div>
  );
}

export default Main;
