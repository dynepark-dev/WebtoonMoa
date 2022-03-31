import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Card.module.scss";

function Card() {
  const MainArray = [
    {
      image:
        "http://spnimage.edaily.co.kr/images/photo/files/NP/S/2021/11/PS21111700082.jpg",
      title: "연재웹툰",
      link: "/webtoon?category=ongoing",
    },
    {
      image:
        "https://img.etnews.com/photonews/2104/1408381_20210428103333_670_0001.jpg",
      title: "완결웹툰",
      link: "/webtoon?category=completed",
    },
    {
      image:
        "https://dn-img-page.kakao.com/download/resource?kid=bl4JKE/hzmU187Nli/KazQYNzCqNRTK06fmof5k0&filename=th2",
      title: "BL/GL웹툰",
      link: "/webtoon?category=BL/GL",
    },
    {
      image:
        "https://w.namu.la/s/9810f6e1bee8f22356a41c350c3de67fc69914740e32cd0a78743d07153847d9e1798b9d79ff895190791ca49d8f0822d7c773fde5801db11500f5ab79225c85d929de863ea88ffc6e275c42247c7374",
      title: "성인웹툰",
      link: "/webtoon?category=adult",
    },

    {
      image:
        "https://static8.depositphotos.com/1368414/973/i/950/depositphotos_9730733-stock-photo-community.jpg",
      title: "커뮤니티",
      link: "/community",
    },
    {
      image:
        "http://t1.kakaocdn.net/membership/product/resource/d12164b1-100a-4327-995f-cb3245ce6e0a",
      title: "My",
      link: "/user",
    },
  ];
  return (
    <div className={styles.Card}>
      <div className={styles.wrapper}>
        {MainArray.map((card) => (
          <Link key={card.title} to={card.link}>
            <div className={styles.content}>
              <div className={styles.img_container}>
                <img src={card.image} alt={card.title} />
              </div>
              <h3>{card.title}</h3>
              <h4>바로가기</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;
