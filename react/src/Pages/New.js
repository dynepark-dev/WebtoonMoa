import React, { useState } from "react";
import styles from "../Styles/New.module.scss";
import WebtoonsList from "../Components/WebtoonsList";
import Ribbon from "../Components/Ribbon";
import Filter from "../Components/Filter";
import LoadingAndError from "../Components/LoadingAndError";
import useFetchNewWebtoon from "../Hooks/useFetchNewWebtoon";

function New() {
  const platformFilter = [
    "네이버",
    "카카오*",
    "카카오페이지*",
    "레진코믹스*",
    "탑툰*",
    "투믹스*",
    "봄툰*",
    "코미코*",
    "미스터블루*",
    "피너툰*",
    "버프툰*",
    "무툰*",
  ];
  const [platform, setPlatform] = useState(["네이버"]);
  const [data, loading, error] = useFetchNewWebtoon(platform);

  return (
    <div className={styles.New}>
      <Ribbon
        line1="모든 웹툰은 공식 플랫폼으로 연결되어 있습니다."
        // line2="연재 중인 웹툰 보러가기 ›"
        // link="/webtoons?type=ongoing"
      />
      <div className={styles.wrapper}>
        <h2>Updated Webtoons</h2>
        <Filter
          array={platformFilter}
          clear="전체"
          data={platform}
          setData={setPlatform}
        />
        <WebtoonsList data={data.data} />
        <LoadingAndError loading={loading} error={error} data={data} />
      </div>
    </div>
  );
}

export default New;
