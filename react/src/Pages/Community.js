import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styles from "../Styles/Community.module.scss";
import { useSelector } from "react-redux";

function Community() {
  const categoryArray = [
    { name: "전체", url: "" },
    { name: "공지", url: "?category=공지" },
    { name: "일반", url: "?category=일반" },
    { name: "정보", url: "?category=정보" },
    { name: "공유", url: "?category=공유" },
    { name: "요청", url: "?category=요청" },
    { name: "질문", url: "?category=질문" },
    { name: "후기", url: "?category=후기" },
  ];
  const userId = useSelector((state) => state.reducerUser._id);
  const navigate = useNavigate();
  const [tab, setTab] = useState("전체");
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const limit = 10;
  const route = "post";
  const { data, loading, error, meta } = {
    data: { x: 1 },
    loading: false,
    error: false,
    meta: {},
  };

  const maxpage = Math.ceil(meta?.total / meta?.limit) || 1;
  const pageArray = Array(maxpage)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className={styles.Community}>
      <div className={styles.wrapper}>
        <h2>Community {category}</h2>
        <div className={styles.top_buttons}></div>
        <ul className={styles.category}>
          {categoryArray.map((category) => (
            <Link key={category.name} to={category.url}>
              <li
                className={styles.category_tab}
                id={tab === category.name ? `${styles.selected}` : ""}
                onClick={() => {
                  setTab(category.name);
                  setPage(1);
                }}
              >
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th className={styles.th_category}>말머리</th>
                <th className={styles.th_title}>제목</th>
                <th className={styles.th_username}>글쓴이</th>
                <th className={styles.th_createdAt}>잘성일</th>
                <th className={styles.th_viewCount}>조회</th>
                <th className={styles.th_thumbUp}>추천</th>
              </tr>
            </thead>
            {/* <tbody>
            {data.map((post) => (
              <tr
                key={post._id}
                id={userId === post.authorId ? `${styles.my_post}` : ""}
                onClick={() => navigate(`/community/${post._id}`)}
              >
                <td>{post.category}</td>
                <td>{post.title}</td>
                <td>{post.authorName}</td>
                <td>{post.createdAt}</td>
                <td>{post.viewCount}</td>
                <td>{post.thumbUp.length}</td>
              </tr>
            ))}
          </tbody> */}
          </table>
        </div>

        <div>{loading && "loading"}</div>
        <div>{error && "error"}</div>
        <ul className={styles.page_buttons}>
          <li>
            <i
              onClick={() => {
                setPage(1);
              }}
              className="fas fa-angle-double-left"
            />
          </li>
          <li>
            <i
              onClick={() => {
                setPage(page - 1);
              }}
              className="fas fa-angle-left"
            />
          </li>
          {pageArray.map((e) => (
            <li
              id={page === e ? `${styles.current_page}` : ""}
              onClick={() => setPage(e)}
              key={e}
            >
              {e}
            </li>
          ))}
          <li>
            <i
              onClick={() => {
                setPage(page + 1);
              }}
              className="fas fa-angle-right"
            />
          </li>
          <li>
            <i
              onClick={() => {
                setPage(maxpage);
              }}
              className="fas fa-angle-double-right"
            />
          </li>
        </ul>
        <div>
          <Link to="/write">
            <button className={styles.write_button}>글쓰기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Community;
