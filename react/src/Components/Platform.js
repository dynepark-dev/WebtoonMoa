import React from "react";
import styles from "../Styles/Platform.module.scss";
import NaverLogo from "../Assets/Naver_logo.png";
import KakaoLogo from "../Assets/Kakao_logo.png";
import KakaopageLogo from "../Assets/Kakaopage_logo.png";
import BufftoonLogo from "../Assets/Bufftoon_logo.png";

function Platform({ platform }) {
  const platformArray = [
    { id: 1, name: "네이버", src: NaverLogo },
    { id: 2, name: "카카오", src: KakaoLogo },
    { id: 3, name: "카카오페이지", src: KakaopageLogo },
    { id: 4, name: "버프툰", src: BufftoonLogo },
  ];

  function toUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className={styles.Platform}>
      <div className={styles.wrapper}>
        {platformArray.map((item) =>
          platform === item.name ? (
            <img
              key={item.id}
              className={styles.platformName}
              src={item.src}
              alt="logo"
              title={toUppercase(item.name)}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Platform;
