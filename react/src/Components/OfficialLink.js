import React from "react";
import styles from "../Styles/OfficialLink.module.scss";

function OfficialLink() {
  function openNewWindow(link) {
    window.open(link, "_blank");
  }
  const Platforms = [
    {
      id: 0,
      name: "네이버웹툰",
      logo: "https://pbs.twimg.com/profile_images/1354260464918650880/xoLLbayG_400x400.jpg",
      link: "https://comic.naver.com/webtoon/weekday",
    },
    {
      id: 1,
      name: "카카오웹툰",
      logo: "https://pbs.twimg.com/profile_images/1409350659468521481/MXuVnpZh_400x400.png",
      link: "https://webtoon.kakao.com/",
    },
    {
      id: 2,
      name: "카카오페이지",
      logo: "https://pbs.twimg.com/profile_images/953939366321123329/csukmFK1_400x400.jpg",
      link: "https://page.kakao.com/",
    },
    {
      id: 3,
      name: "레진코믹스",
      logo: "https://pbs.twimg.com/profile_images/1268361909163528197/WUZiABiv_400x400.jpg",
      link: "https://www.lezhin.com/ko",
    },
    {
      id: 4,
      name: "탑툰",
      logo: "https://w.namu.la/s/82a7a7e4ad0df564f87ed51c567aaabc13ba4124d7c8c4e1a6b614506d22a304685da3cce5838103578a72a12abb85fb269fe38b55226a3f0aea1d32458eb9e2b098ca55cac16db7b33f727cff0a4ea2",
      link: "https://toptoon.com/",
    },
    {
      id: 5,
      name: "투믹스",
      logo: "https://pbs.twimg.com/profile_images/1036886066454650880/veKL32El_400x400.jpg",
      link: "https://www.toomics.com/",
    },
    {
      id: 6,
      name: "봄툰",
      logo: "https://pbs.twimg.com/profile_images/1319522652025835521/lybQB1uH_400x400.jpg",
      link: "https://www.bomtoon.com/",
    },
    {
      id: 7,
      name: "코미코",
      logo: "https://pbs.twimg.com/profile_images/1485833162160996353/jDAnCA3h_400x400.jpg",
      link: "https://www.comico.kr/",
    },
    {
      id: 8,
      name: "미스터블루",
      logo: "https://pbs.twimg.com/profile_images/958625612129685506/7uVmsqEG_400x400.jpg",
      link: "https://www.mrblue.com/",
    },
    {
      id: 9,
      name: "피너툰",
      logo: "https://pbs.twimg.com/profile_images/1333597235213262850/lWvxd5ai_400x400.png",
      link: "https://www.peanutoon.com/ko",
    },
    {
      id: 10,
      name: "버프툰",
      logo: "https://pbs.twimg.com/profile_images/1364378003963146245/FUVQYpEo_400x400.jpg",
      link: "https://bufftoon.plaync.com/",
    },
    {
      id: 11,
      name: "무툰",
      logo: "https://im.mootoon.co.kr/logo/logo_310x310.png",
      link: "https://www.mootoon.co.kr/",
    },
  ];
  return (
    <div className={styles.OfficialLink}>
      <h3>Official Website</h3>
      <div className={styles.wrapper}>
        {Platforms.map((item) => (
          <img
            key={item.id}
            src={item.logo}
            alt={`${item.name} Logo`}
            onClick={() => openNewWindow(item.link)}
            title={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default OfficialLink;
