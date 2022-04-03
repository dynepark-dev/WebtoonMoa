import React from "react";
import styles from "../Styles/WebtoonDetail.module.scss";

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
    bookmark: "x",
  };
  return (
    <div className={styles.WebtoonDetail}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.img_wrapper}>
            <img src={webtoon.image} alt={webtoon.title} />
          </div>
          <div className={styles.table_and_buttons}>
            <table>
              <tbody>
                <tr>
                  <td>제목</td>
                  <td>{webtoon.title}</td>
                </tr>
                <tr>
                  <td>장르</td>
                  <td>{webtoon.genre?.join(", ")}</td>
                </tr>
                <tr>
                  <td>원작</td>
                  <td>{webtoon.original || "-"}</td>
                </tr>
                <tr>
                  <td>작가</td>
                  <td>{webtoon.author?.join(", ") || "-"}</td>
                </tr>
                <tr>
                  <td>출판사</td>
                  <td>{webtoon.publisher || "-"}</td>
                </tr>
                <tr>
                  <td>연재처</td>
                  <td>{webtoon.platform || "-"}</td>
                </tr>
                <tr>
                  <td>연재 기간</td>
                  <td>{webtoon.published || "-"}</td>
                </tr>
                <tr>
                  <td>연재 주기</td>
                  <td>{webtoon.days?.join(", ") || "-"}</td>
                </tr>
                <tr>
                  <td>이용 등급</td>
                  <td>{webtoon.age || "-"}</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.buttons}>
              <button href={webtoon.first_episode_url}>첫화 보기</button>
              <button href={webtoon.lastest_episode_url}>
                최신화 {webtoon.latested_episode} 보기
              </button>
              <button href={webtoon.url}>웹툰목록</button>
              <button
                id={
                  user.bookmark.includes(webtoon._id)
                    ? `${styles.bookmarked}`
                    : null
                }
              >
                <i className="fas fa-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebtoonDetail;
