import React, { useEffect, useState } from "react";
import styles from "../Styles/Webtoons.module.scss";
import WebtoonsList from "../Components/WebtoonsList";
import Button from "../Components/Button";
import Filter from "../Components/Filter";
import { useSearchParams } from "react-router-dom";
import useFetchWebtoon from "../Hooks/useFetchWebtoon";
import LoadingAndError from "../Components/LoadingAndError";
// import db from "../DB/database.json";

function Webtoons() {
  const platformFilter = [
    "네이버",
    "카카오",
    "카카오페이지",
    "머시기",
    "저시기",
    "거시기",
    "저머시기",
  ];
  const genreFilter = [
    "로맨스",
    "드라마",
    "판타지",
    "액션",
    "무협",
    "개그",
    "학원",
    "일상",
    "기타",
  ];
  // const data = db.webtoons;
  const [platform, setPlatform] = useState(["전체"]);
  const [genre, setGenre] = useState(["전체"]);
  const [searchParams] = useSearchParams({});
  const category = searchParams.get("category");
  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetchWebtoon(
    category,
    page,
    platform,
    genre
  );

  useEffect(() => {
    setPage(1);
  }, [category, platform, genre]);

  const handleSubmit = () => {
    setPage((prev) => prev + 1);
  };

  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div className={styles.Webtoons}>
      <div className={styles.wrapper}>
        <h2>{capitalize(category)} Webtoons</h2>
        <div className={styles.filters}>
          <Filter
            array={platformFilter}
            clear="전체"
            data={platform}
            setData={setPlatform}
          />
          <Filter
            array={genreFilter}
            clear="전체"
            data={genre}
            setData={setGenre}
          />
        </div>
        <WebtoonsList data={data} />
        <LoadingAndError loading={loading} error={error} data={data} />
        <Button
          children="더보기"
          onClick={() => handleSubmit()}
          // disabled={loading || !data?.meta?.nextPage}
        />
      </div>
    </div>
  );
}

export default Webtoons;
