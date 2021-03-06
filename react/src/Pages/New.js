import React, { useState } from "react";
import styles from "../Styles/New.module.scss";
import WebtoonsList from "../Components/WebtoonsList";
import Ribbon from "../Components/Ribbon";
import Filter from "../Components/Filter";
import LoadingAndError from "../Components/LoadingAndError";
import useFetchNewWebtoon from "../Hooks/useFetchNewWebtoon";

function New() {
  const platformFilter = ["네이버", "카카오", "카카오페이지"];
  const [platform, setPlatform] = useState(["전체"]);
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
        <WebtoonsList isNew={true} webtoons={data} />
        <LoadingAndError loading={loading} error={error} data={data} />
      </div>
    </div>
  );
}

export default New;
