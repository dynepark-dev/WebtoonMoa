import React, { useState } from "react";
import styles from "../Styles/Write.module.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_post } from "../API";

function Write() {
  const categoryTab = ["일반", "정보", "요청", "질문", "후기"];
  const user = useSelector((state) => state.reducerUser);
  const navigate = useNavigate();

  const defaultValue = {
    title: "",
    content: "",
    authorId: user.userId,
    authorName: user.username,
    authorEmail: user.email,
    category: "일반",
  };
  const [values, setValues] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.title === "") {
      alert("제목을 입력해주세요");
    } else if (values.content === "") {
      alert("내용을 입력해주세요");
    } else {
      setLoading(true);
      add_post(values)
        .then((res) => {
          setValues(defaultValue);
          setLoading(false);

          navigate(`/community`);
        })
        .catch((err) => {
          setLoading(false);
          alert(err);
        });
    }
  };

  return (
    <div className={styles.Write}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>글쓰기</h1>
        <ul className={styles.category}>
          {categoryTab.map((tab, i) => (
            <li
              key={tab}
              onClick={() => setValues({ ...values, category: tab })}
              className={styles.categoryTab}
              id={tab === values.category ? `${styles.selectedTab}` : ""}
            >
              {tab}
            </li>
          ))}
        </ul>
        <form>
          <div className={styles.formTop}>
            <label htmlFor="title">제목</label>
            <input
              maxLength="30"
              id="title"
              type="text"
              onChange={(e) =>
                setValues({
                  ...values,
                  title: e.target.value,
                })
              }
            />
          </div>
          <CKEditor
            editor={ClassicEditor}
            data={values.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValues({ ...values, content: data });
            }}
          />
          <button
            className={styles.button}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "로딩중" : "작성"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
