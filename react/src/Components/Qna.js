import React from "react";
import styles from "../Styles/Qna.module.scss";

function Qna() {
  const MainQnAArray = [
    {
      question: "이거 불법 사이트임?",
      answer:
        "ㄴㄴ 웹툰 호스팅 절대 안함. Wiki처럼 웹툰 정보 모아놓고 비교하는 웹사이트로 운영 할 것",
    },
    {
      question: "이 사이트 왜 만듬?",
      answer: "취미로, 불법 웹사이트 쓰기 싫어서",
    },
    {
      question: "광고 받음?",
      answer:
        "수익목적으로는 안받음, 공익광고나, 커뮤니티 관련 광고만 넣을 예정",
    },
    {
      question: "서버비 어쩜?",
      answer: "트래픽 높아지면 그때 걱정하지 뭐",
    },
    {
      question: "비밀번호 안전함?",
      answer: "Salt 치고 Hash 해서 모름.",
    },
    {
      question: "버그 언제 고침?",
      answer: "몰?루",
    },
    {
      question: "기능은 추가 언제됨?",
      answer: "지속적으로 업데이트 하는데 개발자가 허접이라 좀 걸림",
    },
  ];
  return (
    <div className={styles.Qna}>
      <div className={styles.wrapper}>
        <h2>자주 묻는 질문</h2>
        {MainQnAArray.map((QnA) => (
          <details key={QnA.question}>
            <summary>{QnA.question}</summary>
            <div>{QnA.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default Qna;
