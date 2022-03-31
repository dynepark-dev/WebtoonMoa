import React from "react";
import styles from "../Styles/Platform.module.scss";
import NaverLogo from "../Assets/Naver_logo.png";
import KakaoLogo from "../Assets/Kakao_logo.png";
import KakaopageLogo from "../Assets/Kakaopage_logo.png";
import BufftoonLogo from "../Assets/Bufftoon_logo.png";

function Platform({ platform }) {
  const platformArray = [
    { id: 1, name: "Naver", src: NaverLogo },
    { id: 2, name: "Kakao", src: KakaoLogo },
    { id: 3, name: "Kakaopage", src: KakaopageLogo },
    { id: 4, name: "Bufftoon", src: BufftoonLogo },
  ];
  console.log(platform);
  return (
    <div className={styles.Platform}>
      <div className={styles.wrapper}>
        {platformArray.map((companyName) =>
          platform === companyName.name ? (
            <img
              key={companyName.id}
              className={styles.platformName}
              src={companyName.src}
              alt="logo"
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Platform;
