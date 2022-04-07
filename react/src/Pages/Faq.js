import React, { useState } from "react";
import styles from "../Styles/Faq.module.scss";

function Faq() {
  const MainFaqArray = [
    {
      id: 0,
      question: "이거 불법 사이트임?",
      answer:
        "ㄴㄴ 웹툰 호스팅 절대 안함. Wiki처럼 웹툰 정보 모아놓고 비교하는 웹사이트로 운영 할 것",
    },
    {
      id: 1,
      question: "이 사이트 왜 만듬?",
      answer: "취미로, 불법 웹사이트 쓰기 싫어서",
    },
    {
      id: 2,
      question: "광고 받음?",
      answer:
        "수익목적으로는 안받음, 공익광고나, 커뮤니티 관련 광고만 넣을 예정",
    },
    {
      id: 3,
      question: "서버비 어쩜?",
      answer: "트래픽 높아지면 그때 걱정하지 뭐",
    },
    {
      id: 4,
      question: "비밀번호 안전함?",
      answer: "Salt 치고 Hash 해서 모름.",
    },
    {
      id: 5,
      question: "버그 언제 고침?",
      answer: "몰?루",
    },
    {
      id: 6,
      question: "기능은 추가 언제됨?",
      answer: "지속적으로 업데이트 하는데 개발자가 허접이라 좀 걸림",
    },
  ];

  const [isOpen, setIsOpen] = useState([]);
  function Toggle(id) {
    isOpen.includes(id)
      ? setIsOpen([...isOpen].filter((x) => x !== id))
      : setIsOpen([...isOpen, id]);
  }
  return (
    <div className={styles.Faq}>
      <div className={styles.wrapper}>
        <h2>자주 묻는 질문</h2>
        <ul>
          {MainFaqArray.map((faq) => (
            <li key={faq.id}>
              <Question faq={faq} isOpen={isOpen} Toggle={Toggle} />
              <Answer faq={faq} isOpen={isOpen} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Faq;

function Question({ faq, isOpen, Toggle }) {
  return (
    <div className={styles.question} onClick={() => Toggle(faq.id)}>
      <i className="fa-solid fa-q"></i>
      <div className={styles.faq_q}>{faq.question}</div>
      <i
        className={`fa-solid fa-chevron-down ${styles.chevron} ${
          isOpen.includes(faq.id) && styles.down
        }`}
      ></i>
    </div>
  );
}

function Answer({ faq, isOpen }) {
  return (
    <div
      className={`${styles.answer} ${isOpen.includes(faq.id) && styles.show}`}
    >
      <i className="fa-solid fa-a"></i>
      <div>{faq.answer}</div>
    </div>
  );
}
