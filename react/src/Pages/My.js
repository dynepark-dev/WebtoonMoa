import React from "react";
import HorizontalLine from "../Components/HorizontalLine";
import styles from "../Styles/My.module.scss";
import WebtoonsList from "../Components/WebtoonsList";
import useToggle from "../Hooks/useToggle";

function My() {
  const webtoon = {};
  const fav = [...webtoon].reverse().splice(0, 22);
  const trash = [...webtoon].splice(1, 22);
  const history = [...webtoon].splice(20, 22);

  const [showTrash, toggleTrash] = useToggle(false);
  return (
    <div className={styles.My}>
      <div className={styles.wrapper}>
        <h2>My Page</h2>
        <HorizontalLine content="찜한웹툰" />
        <WebtoonsList data={fav} />
        <HorizontalLine content="방금본웹툰" />
        <WebtoonsList data={history} />
        <HorizontalLine
          content={showTrash ? "숨긴웹툰 숨김 ▲" : "숨긴웹툰 보기 ▼"}
          onClick={() => toggleTrash()}
          style={{ cursor: "pointer" }}
        />
        {showTrash && <WebtoonsList data={trash} />}
      </div>
    </div>
  );
}

export default My;
