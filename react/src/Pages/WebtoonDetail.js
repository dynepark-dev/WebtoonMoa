import React, { useEffect, useState } from "react";
import styles from "../Styles/WebtoonDetail.module.scss";
import Button from "../Components/Button";
import { api_webtoon_detail } from "../API";
import { useParams } from "react-router-dom";

function WebtoonDetail() {
  const { _id } = useParams();
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

  return (
    <div className={styles.WebtoonDetail}>
      <div className={styles.wrapper}>
        {loading && <div>loading</div>}
        {error && <div>error!</div>}
        <div className={styles.detail}>
          <div className={styles.imageAndButtons}>
            <div className={styles.image}>
              <img
                src={
                  webtoon.image ||
                  "https://shared-comic.pstatic.net/thumb/webtoon/769209/thumbnail/thumbnail_IMAG06_867dede2-d520-47e2-8547-8826283d7c80.jpg"
                }
                alt={webtoon.title}
              />
              <div className={styles.heart} title="찜하기">
                <i className="fa-solid fa-heart" />
              </div>
              <div className={styles.trash} title="웹툰숨기기">
                <i className="fa-solid fa-trash-can" />
              </div>
            </div>
            <div className={styles.buttons}>
              <Button children="웹툰목록" />
              <Button children="첫화 보기" />
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.title}>{webtoon.title || "-"}</div>
            <div className={styles.tr}>
              <div className={styles.th}>연재처</div>
              <div className={styles.td}>{webtoon.platform || "-"}</div>
            </div>
            <div className={styles.tr}>
              <div className={styles.th}>작가</div>
              <div className={styles.td}>{webtoon.author || "-"}</div>
            </div>
            <div className={styles.tr}>
              <div className={styles.th}>장르</div>
              <div className={styles.td}>
                {webtoon?.genre?.map((item) => (
                  <span
                    key={item}
                    className={styles.genre}
                    onClick={() => alert(`link to ${item}`)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.tr}>
              <div className={styles.th}>이용등급</div>
              <div className={styles.td}>{webtoon.age || "-"}</div>
            </div>
            <div className={styles.tr}>
              <div className={styles.th}>연재주기</div>
              <div className={styles.td}>{webtoon.days || "-"}</div>
            </div>
            <div className={styles.tr}>
              <div className={styles.th}>Stats</div>
              <div className={styles.td}>
                <span className={styles.stat}>
                  <i className="fa-solid fa-eye" /> 1111
                </span>
                <span className={styles.stat}>
                  <i className="fa-solid fa-heart" /> 222
                </span>
                <span className={styles.stat}>
                  <i className="fa-solid fa-bookmark" /> 3333
                </span>
                <span className={styles.stat}>
                  <i className="fa-solid fa-trash-can" /> 444
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.synopsis}>
          <div>작품소개</div>
          <div dangerouslySetInnerHTML={{ __html: webtoon.synopsis || "-" }} />
        </div>
      </div>
    </div>
  );
}

export default WebtoonDetail;
