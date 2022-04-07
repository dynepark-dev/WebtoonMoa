import React from "react";
import styles from "../Styles/WebtoonDetail.module.scss";
import Button from "../Components/Button";

function WebtoonDetail() {
  const webtoon = {
    id: 0,
    title: "유부녀 킬러",
    cateogory: "ongoing",
    platform: "Kakao",
    author: ["YOON", "검둥"],
    xx: "카카오웹툰 스튜디오",
    genre: ["드라마"],
    image:
      "https://kr-a.kakaopagecdn.com/P/C/1963/sharing/2x/eacb00ec-9034-42cb-a533-7c7690741113.jpg",
    url: "https://webtoon.kakao.com/content/%EC%9C%A0%EB%B6%80%EB%85%80-%ED%82%AC%EB%9F%AC/1963",
    age: "null",
    days: ["수", "목"],
  };
  const user = {
    bookmark: [0, 1, 2, 3],
    trashcan: [4, 5, 6],
  };

  const tableArray = [
    { id: 0, title: "제목", content: webtoon.title },
    { id: 1, title: "장르", content: webtoon.genre?.join(", ") },
    { id: 2, title: "원작", content: webtoon.original || "-" },
    { id: 3, title: "작가", content: webtoon.author?.join(", ") || "-" },
    { id: 4, title: "출판사", content: webtoon.publisher || "-" },
    { id: 5, title: "연재처", content: webtoon.platform || "-" },
    { id: 6, title: "연재 기간", content: webtoon.published || "-" },
    { id: 7, title: "연재 주기", content: webtoon.days?.join(", ") || "-" },
    { id: 8, title: "이용 등급", content: webtoon.age || "-" },
  ];
  return (
    <div className={styles.WebtoonDetail}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src={webtoon.image} alt={webtoon.title} />
          <div className={styles.bookmark}>
            {user.bookmark?.includes(webtoon.id) ? (
              <i className="fas fa-bookmark" />
            ) : (
              <i className="fa-regular fa-bookmark" />
            )}
          </div>
          <div className={styles.trashcan}>
            <i className="fa-solid fa-trash" />
          </div>
        </div>
        <table>
          <tbody>
            {tableArray.map((item) => (
              <tr key={item.id}>
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
