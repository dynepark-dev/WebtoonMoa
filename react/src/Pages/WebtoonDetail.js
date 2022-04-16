import React, { useEffect, useState } from "react";
import styles from "../Styles/WebtoonDetail.module.scss";
import Button from "../Components/Button";
import { api_webtoon_detail } from "../API";
import LoadingAndError from "../Components/LoadingAndError";
import { useParams } from "react-router-dom";

function WebtoonDetail() {
  const { _id } = useParams();

  console.log(_id);
  const [webtoon, setWebtoon] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    api_webtoon_detail(_id)
      .then((res) => {
        setWebtoon(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, [_id]);

  const user = {
    bookmark: [0, 1, 2, 3],
    trashcan: [4, 5, 6],
  };

  const tableArray = [
    { title: "제목", content: webtoon.title },
    { title: "장르", content: webtoon.genre?.join(", ") },
    { title: "작가", content: webtoon.author?.join(", ") || "-" },
    { title: "출판사", content: webtoon.publisher || "-" },
    { title: "연재처", content: webtoon.platform || "-" },
    { title: "연재 기간", content: webtoon.published || "-" },
    { title: "연재 주기", content: webtoon.days?.join(", ") || "-" },
    { title: "이용 등급", content: webtoon.age || "-" },
  ];
  return (
    <div className={styles.WebtoonDetail}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src={webtoon.image} alt={webtoon.title} />
          <div className={styles.bookmark}>
            <i className="fa-solid fa-heart" />
          </div>

          <div className={styles.trashcan}>
            <i className="fa-solid fa-trash" />
          </div>
        </div>
        <table>
          <tbody>
            {tableArray.map((item) => (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.buttons}>
          <Button children="첫화 보기" />
          {webtoon.latested_episode && (
            <Button
              children={`최신화 ${webtoon.latested_episode} 보기`}
              href={webtoon.lastest_episode_url}
            />
          )}
          <Button children="웹툰목록" />
        </div>
      </div>
    </div>
  );
}

export default WebtoonDetail;
